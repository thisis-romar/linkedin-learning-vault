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
  - '[Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)'
  - '[Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)'
  - '[Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)'
  - '[Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)'
next_courses:
  - '[Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md)'
  - '[Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md)'
  - '[Python For Data Science And Machine Learning Essential Training Part](../Artificial%20Intelligence%20(AI)/Python%20For%20Data%20Science%20And%20Machine%20Learning%20Essential%20Training%20Part.md)'
  - '[Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md)'
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
created: 2026-05-03
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
  - [What is data engineering?](#what-is-data-engineering)
- [**1. Introduction to Data Engineering**](#1-introduction-to-data-engineering) (3 videos)
  - [Introduction to data engineering](#introduction-to-data-engineering)
  - [Data engineer vs. data scientist](#data-engineer-vs-data-scientist)
  - [Essential tools for data engineering](#essential-tools-for-data-engineering)
- [**2. Databases and Dataframes**](#2-databases-and-dataframes) (3 videos)
  - [Intro to databases and their types](#intro-to-databases-and-their-types)
  - [Understanding database schema](#understanding-database-schema)
  - [Distributive computing](#distributive-computing)
- [**3. Data Engineering Tools**](#3-data-engineering-tools) (4 videos)
  - [MapReduce and Hadoop](#mapreduce-and-hadoop)
  - [Hive](#hive)
  - [Spark](#spark)
  - [Airflow](#airflow)
- [**4. ETL Pipelines**](#4-etl-pipelines) (11 videos)
  - [Sources of data extraction](#sources-of-data-extraction)
  - [Data extraction from a PostgreSQL database](#data-extraction-from-a-postgresql-database)
  - [Challenge: Data extraction](#challenge-data-extraction)
  - [Solution: Data extraction](#solution-data-extraction)
  - [Transforming data](#transforming-data)
  - [Challenge: Transforming data](#challenge-transforming-data)
  - [Solution: Transforming data](#solution-transforming-data)
  - [Loading data into a DB](#loading-data-into-a-db)
  - [Challenge: Loading data](#challenge-loading-data)
  - [Solution: Loading data](#solution-loading-data)
  - [Scheduling ETL pipeline using Airflow](#scheduling-etl-pipeline-using-airflow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data engineering?](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=0)** - [Harshit] There's so many appealing buzzwords in tech these days. Knowing your way around machine learning, [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), et cetera, and while writing [Algorithms](../../Skills/Software%20Development/Algorithms.md) to make predictions is a hot new skill, ot is not the only one you need to get started in this business. In the modern [Big Data](../../Skills/Data%20Science/Big%20Data.md) system, the person who writes algorithms is not the one who cleans the data. Now laying out data for scientists and researchers has become a complex problem in itself. This is where data engineers step in and find their role in this ecosystem. Hi, I am Harshit Tyagi and in this course we are going to learn the foundations of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). We'll start by understanding the meaning of data engineering, how it is different from [Data Science](../../Topics/Data%20Science.md), and what tools you should master in order to develop [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). Then we'll study the foundations of a big data system, like [Databases](../../Skills/Software%20Development/Databases.md) and distributed computing. Further on, we'll learn about the tools that would come in handy to address each type of problem while developing an ETL data pipeline. In the last chapter, we'll apply the learned concepts and tools to develop and schedule our own ETL pipeline. So what are you waiting for? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** etl (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [harshit] (1)


### 1. Introduction to Data Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data engineering](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=0)** - [Instructor] If you have ever heard of the [Data Science](../../Topics/Data%20Science.md), there's a good chance you have heard of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) as well. As the data space has matured, data engineering has emerged as a separate role to help organizations solve the problem of laying out data in efficient, [Big Data](../../Skills/Data%20Science/Big%20Data.md) systems. And this video, we will try to understand what data engineering means at a data-driven organization. Imagine that you have been hired as a data scientist at a young data-driven organization. You are tasked with developing a model to flag fraudulent transactions. You want to use a fancy machine learning technique that you have been honing for years. However, after digging around for a couple of hours, you realize all of your data is scattered around many [Databases](../../Skills/Software%20Development/Databases.md). Additionally, the data resides in tables that are optimized for applications to run, not for carrying out analysis. To make matters worse, some legacy code has caused a lot of the data to be corrupt. In your previous company, you never really had this problem because all of the data was available to you in an orderly fashion. You're getting desperate and then comes the data engineer to the rescue. It is the data engineer's task to make your life as a data scientist easier. If you need that the data concurrently comes from several sources, the data engineer will extract data from those multiple sources and load it into one single database ready to use. At the same time, they will optimize the database schema so it becomes faster to query. They also monitor the [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) to make sure that there is no corrupt data. They repair the pipeline whenever there's an issue, they schedule or automate tasks
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=95)** to avoid any errors during manual work. As per the definition, data engineering is a type of software engineering that focuses on designing, developing, testing, and maintaining architectures, such as databases and large-scale processing systems. Now, data engineers should have the following skills and knowledge. They need to know [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). They should be comfortable using the command line. They should have expedience programming in at least one of the programming languages, such as [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or [Scala](../../Skills/Software%20Development/Scala.md) or [Java](../../Skills/Software%20Development/Java.md). They should know [SQL](../../Skills/Data%20Science/SQL.md), how to write queries, how to extract data, how to create database schema. They need some understanding of distributed systems in general and how they are different from traditional storage and processing systems. They need a deep understanding of the ecosystem, including ingestion, processing frameworks and storage engines. They should know the strengths and weaknesses of each tool and what it is best used for. They need to know how to access and process data. In the sense, data engineer is one of the most valuable people in a data-driven organization that wants to scale up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Data Science](../../Topics/Data%20Science.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **CLI Commands:** make (3), python (1)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** sql (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data engineer vs. data scientist](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=0)** - [Instructor] When you try to scale up an organization, the person who is building the algorithm is not the person who should be cleaning the data or building the tools. Let's try to understand how responsibilities of a data engineer differ from that of a data scientist. Typically, the tasks of a data engineer consists of developing a scalable [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md), streamlining [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md), setting up processes that bring data together from several sources, and safeguarding [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) by cleaning up corrupt data. Now typically, they also have a deep understanding of cloud technology. They are experienced using cloud service providers, like AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). On the other hand, data scientists spend most of their time mining for patterns in data, deriving insights, applying statistical models on large datasets, or building predictive models using machine learning. They develop tools to monitor essential business processes or cleaning data by removing statistical outliers. Data scientists typically have a deep understanding of the business and they influence the [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) through their findings. While there is some overlap in terms of [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) and manipulation skills, these roles are not interchangeable. Data engineers compliment the output of data scientists by providing clean, formatted, and aggregated data
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=96)** in an efficient manner. Data scientists then further analyze the data and develop statistical models to understand the inherent patterns in the data and further help in decision-making. So, we can say that data engineers handle the development side of things, whereas data scientists help in driving business decisions through their experiments and analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (2), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1), [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Essential tools for data engineering](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=1)** - A Data Engineer moves data from several sources, processes or cleans it, and finally loads it into an analytical database. They do this using several tools. This video will give you an overview of how data engineers fulfill their tasks using these tools. Now, [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) tools can be broadly classified into three categories. First is storage, that is [Databases](../../Skills/Software%20Development/Databases.md). Second is processing frameworks. And third category is automation, that is scheduling tools. So, let's go over each one of them. First one, we have databases. So Data Engineers are expert users of [Database Systems](../../Skills/Software%20Development/Database%20Systems.md). Roughly speaking, database is a computer system that holds large amount of data. You might have heard of [SQL](../../Skills/Data%20Science/SQL.md) or [NoSQL](../../Skills/Software%20Development/NoSQL.md) databases. Most applications rely on databases to provide certain functionality. For example, in an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) application, a database holds product data like description, prices, or amount in stock. On the other hand, other databases hold data specifically for analysis. To summarize, it is essential to understand that, the Data Engineer's task begins and ends at databases. Some of the [Database Management](../../Topics/Database%20Management.md) systems that are frequently used are [MySQL](../../Skills/Software%20Development/MySQL.md), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) and [MongoDB](../../Skills/Software%20Development/MongoDB.md) for NoSQL. Talking about processing frameworks, Data Engineers,
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=92)** use tools that can help them quickly process data. Processing data might be necessary to clean or aggregate data, or to join it together from different sources. Typically, huge amounts of data have to be processed. That is where (mumbles) processing comes into play. Instead of processing the data on one computer, Data Engineers use clusters of machines to process the data. Often, these tools make an abstraction of the underlying architecture and have a simple API. They further, do this for different types of data, that is, batch data or streaming data coming in from sensors, or any other source. Now, talking about commonly used processing frameworks or tools, we have Spark, Hive, or Kafka. Now, a good Data Engineer understands these abstractions and knows their limitations as well. Coming to scheduling tools. These help to make sure data moves from one place to another at the correct time with a specific interval. Data Engineers make sure these jobs run in a timely fashion and that they run in the right order. Sometimes, processing jobs need to run in a particular order, to function correctly. For example, missing values, should be handled before aggregating the data. So, the results search dependency requirements between those jobs. Finally, for scheduling we can use Apache, Airflow,
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=187)** Oozie, or Luigi. And these are a few commonly used tools for scheduling tools. Now to sum everything up, you can think of data engineering pipeline through this diagram. They extract all data through connections with several databases, transform that using a cluster computing framework like Spark at the middle, and loads it into an analytical database. Also, everything is scheduled to run in a specific order through a scheduling framework like Apache, Airflow. A small side note here is that, the sources can be external APIs or other formats as well. Developing expertise in these three categories of tools and their underlying principle, help you make a good Data Engineer. And in the coming chapters, we will learn to use commonly used tools from each of these categories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (7), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (4), apache (2), mysql (1)
> **Env Vars:** sql (1), api (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)


### 2. Databases and Dataframes

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to databases and their types](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=0)** - [Instructor] Before we get down to creating [Databases](../../Skills/Software%20Development/Databases.md), let's try to understand what databases are and the differences between their types. Databases are an essential tool for the data engineer. They can be used to store information. Before we deep dive into the types of databases, let's get some definitions out of the way. A database is a large collection of data organized in efficient structures and formats, specifically designed to support rapid search and retrieval. There are a few pieces of vital information in this definition. First, the database holds data. Second, databases organize data. We'll see later that there are different levels of organizations. Lastly, databases help us quickly retrieve or search for data. And the [Database Management](../../Topics/Database%20Management.md) system or DBMS, is usually in charge of this task. The main difference between databases and simple storage systems, like file systems, is the level of organization, and the fact that databases, or database management systems extrapolate a lot of complicated data operations like search, replication, indexing, et cetera. File systems, on the other hand, holds less of such functionality. They are less organized. And they offer minimal features and functionalities. Among databases, there is a big difference in the level of organization. To understand these differences, we have to make a distinction between structured,
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=94)** semi-structured, and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). On one hand, structured data is coherent to a well-defined structure. Database schemas usually define such structure. An example of structured data is tabular data in a relational database. Semi-structured data is a form of structured data, but it does not follow the tabular structure of data models associated with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), or other [Forms](../../Skills/Web%20Development/Forms.md) of data tables, but nonetheless, contains tags or other markers like key-value pairs to separate semantic elements and enforce hierarchies of records and feeds within the data. An example of semi-structured data is [JSON](../../Skills/Web%20Development/JSON.md) data. Unstructured data, on the other hand, is schema-less. It looks a lot more like files. Unstructured data could be something like photographs or videos. So structured and unstructured data define outer boundaries, and there is a whole lot of semi-structured data in between. Another distinction we can make is the one between [SQL](../../Skills/Data%20Science/SQL.md) and [NoSQL](../../Skills/Software%20Development/NoSQL.md). Generally speaking, in SQL databases, tables form the data. The database schema defines the relations between these tables. Because SQL database is relational, the database schema defines the relationships and properties. Typical SQL databases are [MySQL](../../Skills/Software%20Development/MySQL.md) and [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md). On the other hand, NoSQL databases are called non-relational
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=188)** and they are often associated with unstructured, schema-less data. Now that's a misconception, as there are several types of NoSQL databases, and they are not all unstructured. Two highly-used NoSQL databases types are key-value tools, like Reddis or document databases like [MongoDB](../../Skills/Software%20Development/MongoDB.md). In key-value's tools, the values are simple. Typical use cases are caching or distributed configuration. Values in a document database are structured or semi-structured objects. For example, a JSON object. We learn about the type of data and databases. To give you a high-level picture, we'll retrieve data from different sources in different formats. And we use different types of databases to handle these different formats as per our use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (17), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (4), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (4), [Database Management](../../Topics/Database%20Management.md) (2)
> **Env Vars:** sql (4), json (2), dbms (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), mysql (1)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [instructor] (1)

#### [Understanding database schema](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=0)** - [Instructor] The next step is to understand how to design and develop [Databases](../../Skills/Software%20Development/Databases.md). To do that, we need to learn about database schema. To reiterate, a database schema describes the structure and relationships between tables of a database. Here, you can see a database schema on the right hand side. This is a very simple example of a restaurant ordering system. We have one thing we call customer and the other called order. You have defined properties of each table, where ID in each table is the primary key which is the unique identifier of each instance of that particular table. The field called customer ID in the order table connects orders with customers. We call this kind of column or field a foreign key, as it refers to another table. Let's see how we can create such a schema in a database using [SQL](../../Skills/Data%20Science/SQL.md). If you want to get a SQL primary, you can refer to courses in our library that can help you master SQL. The SQL statements here create the tables of the defined schema that we saw earlier. The query on the left creates the customer tables with properties like ID, first name, last name, email, password and ID is the primary key. On the right, you see the SQL statements that creates the order table, where we have customer ID as a foreign key. We can leverage these foreign keys by joining tables using the joint statement as well. Now companies often build data warehouses to handle large volumes of data from various sources
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=94)** for analytical purposes. And multidimensional schema is especially designed to model such data warehouse systems. These schemas are designed to address the unique needs of very large databases that serve our analytical purposes. A schema you'll often see is the star schema. Lot of analytical databases like Redshift have optimizations for these kinds of schemas. According to Wikipedia, the star schema consists of one or more fact tables. For example, the orders table here. And then this fact table is referencing a number of dimension tables. For example customer, dimension restaurant, dimensions time, dimension dish. So dimension tables, hold the information on the world itself. Like customer names and distresses. Fact tables on the other hand contains the records that represent things that happen in the world. So designing a database schema is the first step in building a data pipeline. It often requires lots of planning because an ineffective schema can lead to a database that consumes a lot of memory and resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (3)
> **Env Vars:** sql (5)
> **Definitions:** is a  (1), we call this (1), refers to (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Distributive computing](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=0)** - [Instructor] Handling petabytes of data requires distributed or parallel computing. Therefore it's crucial to understand the concept of distributed computing. In any data pipeline, we have to collect data from various sources, join them together, clean them and aggregate them. Parallel computing [Forms](../../Skills/Web%20Development/Forms.md) the basis of almost all modern [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) tools. However, why has it become so important in the world of [Big Data](../../Skills/Data%20Science/Big%20Data.md)? The main reason is memory and processing power. When big data processing tools perform a processing task, they split it up into several smaller subtasks. The processing tools then distribute these subtasks over several computers. These are usually commodity computers, which means they are widely available and relatively inexpensive. Individually, all of the computers would take long time to process the complete task. However, since all the computers work in parallel on smaller subtasks, the task in its whole is completed faster. As you would expect, the obvious benefit of having multiple processing units is the extra processing power itself. However, there is another potentially more impactful benefit of parallel computing. Instead of needing to load all of the data in one computer's memory, you can partition the data and load the subsets into memory of different computers. That means the memory footprint book computer is relatively small and the data can fit in the memory closest to the processor, that is the RAM.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=92)** This reduces the cost and helps in fault tolerance. Before we start writing the code to use parallel computing or distributed computing, keep in mind that this also comes at its cost. Splitting a task into subtasks and merging the results of the subtasks back into one final result, requires some communication between processes. This communication overhead can become a bottleneck, if the processing requirements are not substantial, or if you have too little processing units. In other words, if you have two processing units, a task that takes a few hundred milliseconds might not be worth splitting up. Additionally, due to the overhead, the speed does not increase linearly. This effect is also called parallel slow down. So here's a practical example. We are starting with a dataset of all Olympic events from 1896 until 2016. From this dataset, you want to get an average age of participants for each year. For this example, let's say you have four processing units at your disposal. You decide to distribute the load, over all of your processing units. To do so, you need to split the task into smaller subtasks. In this example, average age calculation for each group of use is a subtask. We can achieve that using the groupby function. Then we distribute all of the subtasks over four processing units.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=185)** This example illustrates roughly how, forced distributed [Algorithms](../../Skills/Software%20Development/Algorithms.md) like [Hadoop](../../Skills/Data%20Science/Hadoop.md) may not reduce work. The difference being the processing units are distributed over several machines. By coding, there are several ways of implementing this. At a low level, we could use the multiprocessing .Pool API to distribute work over several cores of the same machine. Let's say we have a function athlete_avg_age, which accepts a double, the year of the group and the group itself, which is mentioned as grouped_data here. The function returns a data frame with one observation and one column, the mean age of the group. The resulting data frame is indexed by year. We can then take this function, and map it over the groups generated by .groupby function, using the .map method of the Pool module. By definition, four as an argument to Pool, the mapping runs in four separate processes. And those uses four cores. Finally, we can concatenate the results to form the resulting data frame. Now, several packages offer a layer of abstraction to avoid having to write such low level code using multiprocessing module. For example, the Dask framework, offers a data frame object, which performs a groupby and apply using multiprocessing out of the box. You need to define the number of partitions, for example four,
>
> **[4:37](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=277)** and Dask divides the data frame into four parts, and performs .mean or average within each part separately. Because Dask uses lazy evaluation, you need to add the .compute to the end of the chain. So, this is how we can break bigger tasks into smaller subtasks, then distribute them among several machines and finally aggregate the results from each machine, to load the transformed data into the analytical database for the data scientists to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (1)
> **Code Identifiers:** athlete_avg_age (1), grouped_data (1)
> **Env Vars:** ram (1), api (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 3. Data Engineering Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [MapReduce and Hadoop](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=0)** - [Instructor] It's time to talk about specific parallel computing frameworks. We'll focus on frameworks that are currently hot in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) world. When it comes to [Big Data](../../Skills/Data%20Science/Big%20Data.md) systems, [Hadoop](../../Skills/Data%20Science/Hadoop.md) is the most popular and used frameworks. And MapReduce was one of the most popular processing techniques. So, what is Hadoop? It is the ecosystem of open-source tools that has changed the way enterprises store, process, and analyze data. It's a collection of open-source projects that is maintained by the Apache Software Foundation. Some of them are a bit outdated, but it is still relevant to talk about them. It uses the MapReduce algorithm. A Hadoop plays a central role in developing ETL pipelines, where ETL stands for Extract, Transform, and Load. There are two Hadoop projects we want to focus on in this particular video; MapReduce and HDFS. So let's first talk about HDFS. It is a distributed file system. It is similar to the file system that you have on your computer. The only difference being the files reside on multiple different computers. HDFS has been essential in the big data world and for parallel computing by extension. Nowadays, cloud-managed storage systems like Amazon S3 or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage often replace HDFS. Second, MapReduce. MapReduce was one of the first popularized big data processing paradigms. It works similar to the example that we saw in the previous video, where the program splits tasks into sub-tasks, distributing the workload
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=94)** and data between several processing units. For MapReduce, these processing units are several computers in the cluster. MapReduce has its flaws. One of it was that it was hard to write these MapReduce jobs. Now, many software programs popped up to address this problem in each segment of tasks. Now, in the upcoming videos, we'll deep dive into those software programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hadoop](../../Skills/Data%20Science/Hadoop.md) (4), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** hdfs (4), etl (2)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (2)
> **CLI Commands:** apache (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Hive](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=0)** - [Instructor] First up in the software programs that are under the [Hadoop](../../Skills/Data%20Science/Hadoop.md) umbrella is Hive. It offers features that help in the extraction part of the ETL data pipeline. Hive is a layer on top of the Hadoop ecosystem that makes data from several sources queryable in a structured way using Hive's [SQL](../../Skills/Data%20Science/SQL.md) variant, which is called Hive SQL. It provides an SQL-like interface to query data. We can also extract data from [Databases](../../Skills/Software%20Development/Databases.md) and file systems that integrate with Hadoop. Back when there were no choice of tools, developers had to implement queries in MapReduce [Java](../../Skills/Software%20Development/Java.md) API, which was pretty hard. [Facebook](../../Glossary/Service/Facebook.md) initially developed Hive, but the Apache Software Foundation now maintains the project. Although MapReduce was initially responsible for running the Hive jobs, it now integrates well with several other [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) tools. Let's look at this example where we are using the same Olympic events dataset as we saw earlier. This Hive query over here selects the average age of the Olympians per year. As you would expect, this coding looks indistinguishable from a regular SQL query. However, behind the curtains this query is transformed into a job that can operate on a cluster of computers using the MapReduce [Algorithms](../../Skills/Software%20Development/Algorithms.md). This is just one of the ways to collect data and there are many other tools that you can use or integrate with Hive.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=94)** So, after the extraction of data is complete, it's now time to learn about a [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Env Vars:** sql (4), etl (1), api (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** apache (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### [Spark](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=0)** - [Instructor] The other parallel computation framework we'll introduce is called Spark. Spark distributes [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) tasks between clusters of computers. But why did we need a tool like Spark? So MapReduce based systems tend to need expensive disk writes between jobs. Spark tries to keep as much processing as possible in memory. In that sense, Spark was an answer to the limitations of MapReduce, the disk writes of MapReduce were especially limiting an interactive exploratory data analysis, where each step builds on top of a previous step. Spark originates from the University of California where it was developed at the Berkeley's AMPLab. And currently the project is maintained by the Apache Software Foundation. A Spark relies on a data structure called resilient distributed datasets, or RDDs. Now, without diving into technicalities, this is a data structure that maintains data which is distributed between multiple nodes. Now unlike data frames, RDDs don't have named columns. From a conceptual perspective, you can think of RDDs as a list of topples. We can do two types of operations on these [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), transformations and actions. So when we talk about transformations, we're talking about functions like filter, map, groupByKey, union. And when we talk about actions, we are talking about functions like count, first, collect and reduce. Transformations result in transformed RDDs.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=94)** While actions result in a single result. When working with Spark, people typically use a programming language interface like [PySpark](../../Skills/Data%20Science/PySpark.md). A PySpark is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) interface to Spark. There are interfaces to Spark in other languages like R or [Scala](../../Skills/Software%20Development/Scala.md) as well. PySpark holds a DataFrame abstraction which means that you can do operations very similar to [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) DataFrames. And PySpark and Spark take care of all the complex parallel computation operations. Have a look at this example over here where we are using PySpark. And similar to the Hive query that we saw before, it calculates the mean age of the Olympic athletes per year of the Olympic event. Instead of using the sequel abstraction like in Hive example, it uses the DataFrame abstraction. So this is how we can actually write a PySpark Analogous of Sequel which is using the DataFrame abstraction. So engineered from the bottom of performance Spark can be 100 X faster than [Hadoop](../../Skills/Data%20Science/Hadoop.md) for large scale data processing. This covers the transformation part of the ETL pipeline. Now we should move to learn about automating all of this work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (6), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Scala](../../Skills/Software%20Development/Scala.md) (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **CLI Commands:** apache (1), python (1)
> **Code Identifiers:** groupbykey (1)
> **Env Vars:** etl (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Airflow](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=0)** - [Instructor] Before we learn how workflow scheduling frameworks work, let's first to understand what a workflow is. Let's take an example. You can write a Spark job that pulls data from a CSV file, filters out some corrupt records, and loads the data into a [SQL](../../Skills/Data%20Science/SQL.md) database ready for analysis. However, let's say you need to do this job every day. One option is to run the job every day manually, but of course that's not scalable. What about the weekends? Now for this, there are simple tools that could solve this problem, like cron, which is a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) tool. However, let's say you have one job for the CSV file and another job that will clean the data from an API, and a third job that joins the data from the CSV and the API together. And the third job basically just depends on the first two jobs to finish first. It quickly becomes apparent that we need a more holistic approach. And a simple tool like cron won't suffice. It's the task of the workflow scheduling framework to orchestrate these jobs. So we ended up with dependencies between jobs. A great way to visualize these dependencies is through directed acyclic graphs, or DAGs. A DAG is a set of nodes that are connected by directed edges, and there are no cycles in the graph, which means that no path following the directed edges sees a specific node more than once. In the example on this slide, you can see that job A needs to happen first, then job B, which enables jobs C and D, and finally job E.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=98)** So as you can see, it feels natural to represent this kind of workflow in a DAG. The job is represented by the DAG and can then run in a daily schedule. So we've talked about dependencies and scheduling DAGs, let's discuss the tools that we can use for this task. Most companies use a full-fledged solution, and Linux cron is a very simple solution for that. We need a more holistic tool that can take care of all such dependencies. There's Spotify's Luigi, which allows for definitions of DAGs for complex pipelines. However, for the remainder of this video we'll focus on [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md). Airflow is growing out to be the defacto workflow scheduling framework. Now, Airbnb created Airflow as an internal tool for [Workflow Management](../../Skills/DevOps/Workflow%20Management.md). They opened sourced Airflow in 2015, and it later joined the Apache software foundation in 2016. They built Airflow around the concept of DAGs, and using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), developers can create and test these DAGs that build up complex [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). So let's look at the Olympic events example in the DAG, which is shown here. The first job starts a Spark cluster. Once it has started, we can pull in athlete data and let's say venue data where the event was organized. And then by running the ingest athlete data and the ingest venue data jobs, you can then move on to aggregate the data from both of these tables in the enrich athlete data job, which runs after the ingestion jobs are completed.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=194)** So let's look at how we are going to code this example. So here's the code snippet. It would look something like this. First, we create a DAG using the DAG class with your DAG name and start date. Afterwards, we use an operator to define each of these jobs. Airflow offers several kinds of operators. There are simple ones like bash operators and Python operator that execute bash or Python code respectively. Then there are ways to write your own operator like the SparkJobOperator or StartClusterOperator in the example. Finally, we define the connections between these operations using set_downstream function. For example, here, the ingest athlete data would run successfully after the cluster has started successfully. And similarly, for enriching the data we need to have successfully ingested the athlete data first. So this is how scheduling frameworks work, and it's time to get started with developing an ETL pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Workflow Management](../../Skills/DevOps/Workflow%20Management.md) (1)
> **Env Vars:** dag (7), csv (3), api (2), sql (1), etl (1)
> **CLI Commands:** python (3), apache (2), node (1)
> **Definitions:** is a  (3), means that (1)
> **Tools:** bash (2)
> **Code Identifiers:** set_downstream (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. ETL Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Sources of data extraction](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=0)** - [Instructor] As we know, E in ETL stands for extract. To get started with developing an ETL pipeline, let's first look at the common data sources and data types that we have to deal with. So what do we mean by extracting data? Very roughly, this means extracting data from persistent storage into memory. This persistent storage could be a file on Amazon S3, for example, or a [SQL](../../Skills/Data%20Science/SQL.md) database, or a web API. It is the necessary stage before we can start transforming the data, and the sources here may vary. Now first of all, we can extract data from plain text files. Now, these are the files that are generally readable by people. They can be unstructured, like an article from the Forbes magazine. Alternatively, these can be flat files where each row is a record, and each column is an attribute of the records. In the later, we represent data in a tabular format. So typical examples of flat files are comma or tab separated files, .csv or .tsv. They use comma or tabs respectively to separate columns. Another widespread data format is called [JSON](../../Skills/Web%20Development/JSON.md), or [JavaScript](../../Skills/Software%20Development/JavaScript.md) Object Notation. JSON files hold information in a semi-structured way. It consists of four atomic datatypes: number, string, Boolean, and null. There are two composite data types as well, array and object. You could compare it to a dictionary in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Now, JSON objects can be very nested, like in this particular example on the right. There's a pretty good mapping from JSON objects to dictionaries in Python.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=95)** There's a packet in the standard library called json, which helps you pass the JSON data. The reason JSON got popular is that in recent days many web services use this data format to communicate data. Now on the web, most communication happens with something called requests. You can look at request as request for data. A request basically gets a response. For example, if you browse [Google](../../Glossary/Service/Google.md) in your web browser, your browser requests the content of the Google homepage. Google servers, on the other hand, respond with the data that makes up the page. However, some [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) serve data in a JSON data format instead of web pages. We called these servers APIs, or [application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md). The popular social media tools, let's say Twitter, Twitter hosts an API that provides us with information on tweets in JSON format. Using the Twitter API does not tell us anything about how Twitter stores its data. It merely provides us with a structured way of getting their data. Now let's look at an example of how to request data from an API using the movie database API or the TMDb API. As you can see, we will use the .get method and pass a URL along with the API key that we can generate from their authentication service. The resulting response object has a built-in helper method called .json. And to pass the incoming JSON
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=188)** and transform it into another Python object, we can use this json method. Finally, we have to talk about [Databases](../../Skills/Software%20Development/Databases.md). Now the most common way of data extraction is extraction from existing application databases. Most applications like web services need a database to back them up and persist data. At this point, it is essential to make a distinction between the two main types of databases. For example, complex aggregate queries frequently run on analytical databases, so we should optimize them. On the other hand, application databases, here on the left, have lots of transactions per second, so we should optimize them for that. This ties in with something we mentioned before. So we often optimize application databases for online transaction processing, or OLTP. On the other hand, we optimize analytical databases for online analytical processing, or OLAP. Now, OLTP databases are typically row-oriented in which the system data per rows. In contrast, databases optimized for analysis are called OLAP, or online analytical processing. They're often column-oriented and support parallelization. Now in databases, there's a clear separation between databases for analytical, as well as for databases for application purposes. So it is time to start building a pipeline. It's in the upcoming videos. We will learn to extract and load data
>
> **[4:42](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=282)** into a [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) database using Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (12), [Databases](../../Skills/Software%20Development/Databases.md) (12), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Google](../../Glossary/Service/Google.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** json (9), api (7), etl (2), oltp (2), olap (2)
> **CLI Commands:** python (4), make (1)
> **Definitions:** stands for (1), is a  (1), is an  (1), is called (1)
> **Analogies:** for example (3)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Data extraction from a PostgreSQL database](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=0)** - [Instructor] So let's apply our knowledge to a practical project. Here's an example of a movie rating application. I have Movies Data and I have Users Data. In the movies.csv, you see I have ID of the movie, name, description and the category to which that movie belongs to. Similarly, I have Users. Users.csv contains ID of the user, the movie ID that the user is rating, and finally, the rating that the user has provided. On the job, you will be given access to an already existing database. But here, we'll have to set up our database from scratch. So let's quickly do that. The installation process is already provided in the Resources, so you can defer to that document, in order to download and install [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) onto your systems. Now the first step is to start your [Postgres](../../Skills/Software%20Development/PostgreSQL.md) Server. The command for that is psql postgres. Hit Enter, now your Postgres Server is running. Now the next step is to create the database. The command for that is CREATE DATABASE, and then the name of the database, let's call it etl_pipeline with a semicolon at the end. Hit Enter, your database is now created. You'll have to connect with the database in order to work with it. So the command for connecting is \c
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=95)** and then the name of the database, again with a semicolon at the end. Hit Enter, we are now connected with the database. The next step is to create tables in this database. The command for that is CREATE TABLE movies. So here if you see, I have provided ID as the first column, name as the second column, which is of type VARCHAR. I am allowing 255 characters in this field. Then I have Description and Category. Hit Enter, your table is created. Similarly, you will create your Users Table. In the Users Table, you will have to provide the FORIEGN KEY. That means the movie ID field that I have in the Users Table is going to refer to the ID field in the Movies Table. Hit enter, your Users Table is also created. But at this point, if you check for data, SELECT * from movies, for example, there are no rows. I will have to import the data over here, from our CSV files. Now the command to copy our files into our table is this, \copy movies, that is the name of the table to which the rows are going to be copied,
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=191)** FROM, then you have to provide the path to the file. So my movies.csv resides at this particular path, you will have to provide your path. DELIMITER, I have comma separated values, and then CSV HEADER. That means the first row in the CSV file is going to be treated as a header row that should not be added as a row in our table. Hit Enter, you have copied all the data from the movies.csv into the Movies Table. Similarly, you will copy all the Users Records as well. Hit Enter, and now if you will try to capture all the rows from the Movies Table, there you go. Now your data is present in your database tables. The next step is to connect this database with our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Script using Spark. So that we can transform this data to extract aggregated insights. Now, in order to do that, you should have a bunch of things installed already. First of all, you'll have to install [PySpark](../../Skills/Data%20Science/PySpark.md) Package in your virtual environment. The second thing that you'll have to have is this PostgreSQL [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) Drivers. To connect your PySpark's Script with the database, you will need these JDBC drivers along with [Java](../../Skills/Software%20Development/Java.md) installed. So need PySpark, Java and this JDBC Driver
>
> **[4:49](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=289)** downloaded onto your system. So let's look at what we have over here. First of all, I'm importing PySpark. Then we are moving into creating a SparkSession. If you already have one, it'll get it for us, otherwise it will create. So first is creation of a SparkSession using this builder mode, and then I have to provide the app name, which is, Python Sparks [SQL](../../Skills/Data%20Science/SQL.md) basic example, in my case. Then provide the configuration. We are going to use Spark Driver and the path to the driver, .getOrCreate, this will create your SparkSession. The next step is to read the table from the database using JDBC Driver. So the command or the function to Users, spark.read. The format is JDBC. The URL is where your Postgres Server is running. Your Postgres Server is running at Local Host 5432. And this is the name of the database that we have, etl_pipeline. The database that we want to read, the table that we want to cut, the table that we want to read is Movies, user, harshit, password is this. And then driver, we are using PostgreSQL.Driver over here, .load. This will load our entire table into a data frame, which we are storing in the movies_df variable. Finally, I will print the movies_df using the .show function.
>
> **[6:22](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=382)** Let's run the script in the terminal. I will run Python 04_02.py. And it'll take a few seconds, and there you go. We have successfully extracted all of the records from our Movies Table in the database etl_pipeline. So we have connected our Spark Script with our database. Similarly, you can extract data from the Users Table to get aggregated insights just like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (5), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (5), [PySpark](../../Skills/Data%20Science/PySpark.md) (4), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Env Vars:** jdbc (5), csv (3), create (2), database (1), table (1)
> **Code Identifiers:** etl_pipeline (3), movies_df (2), getorcreate (1)
> **File Paths:** movies.csv (3), users.csv (1), 04_02.py (1)
> **CLI Commands:** python (3), psql (1)
> **SQL:** create table (1), varchar (1), select (1)
> **Prerequisites:** install (2), set up (1)
> **Analogies:** for example (1), just like (1)

#### [Challenge: Data extraction](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=7)** - [Instructor] So you've seen how we can extract data from a [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) database. We saw how we could extract data from the movies table inside our ETL_pipeline using the PostgreSQL driver as well. So here's a challenge for you. Now, you have to extract data from the users table inside our ETL_pipeline database. So you have to fill in these blanks over here where you have to pass the name of the table and the driver that you're going to use. And at the end, you have to print the users data frame that you have just read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Data extraction](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=0)** - [Tutor] So let's look at how we could extract data from the users table. First of all, we had to provide the name of the table. So that was users. Then add the username, the password. The driver that we had to provide was the [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) drivers, since we're using the postgresql database. So we could simply use the one that we used to extract movies table data. And then at the end, we need to print the user's data frame that we have just read, user underscore df. We would have to use the show function overhead and that's it. So once you run the script you would get the data for the users table. So as you can see we have id, movie underscore id and rating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (2)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Transforming data](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=0)** - [Instructor] So after the successful extraction of the data from the two tables, we are now going to add a simple transformation to this extracted data. Now we know analytical [Databases](../../Skills/Software%20Development/Databases.md) are optimized for creating aggregated data. So here we are going to merge the two data frames so that we can have the average rating corresponding to the movie itself. For doing that, We would first need to group all the ratings based on the movie ID. So we are using the group by function over here pause on the movie ID column. And then we have to calculate the average rating. So we're using the mean function over here, plus the rating column to this main function and then the next step is to join the movie's data frame with this average rating data frame that we have just created. So movies_ DF dot join. So join is the function that we are using plus the data frame, which is average rating. And then, the common column on which we want to merge the two data frames. So that is, movies_ DF ID column in this movie data frame, and then average rating and dot movie_ ID is the name of the common field and average rating data frame that we have just calculated. So now, we run this script and we see that we have printed all the three tables. So this is the movie table, the original table, the user original table, user's table,
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=92)** and this is the aggregated table after the transformation. So you can see we have ID, we have name, we have description, category, movie_ID, and then the average rating corresponding to the movie itself. So this is the second part, or the second stage of our ETL pipeline. That is transformation. Now we need to load this back to the database and in the upcoming videos we are going to look at how we can actually do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Transforming data](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=7)** - [Instructor] So here's a quick challenge for you to transform the users data frame by aggregating all the ratings. You have to fill in these blanks with the right function and the columns to aggregate the data. And then the second task is to join the two tables. That is, the movies data fame and the average rating data frame based on the common columns that is there in each of these tables. The last task is to actually print the final data frame that you have just returned after merging the two tables.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Transforming data](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=0)** - [Tutor] So here's the solution to the challenge. The first function that you are going to use to group all the ratings is group by. Then you would further add the column on which you want to group. So that is movie underscore id. To calculate the average rating, you would use the mean function. The column name is rating. Then in order to merge the two data frames we would have to provide the common column, which is .id, and the movies underscore data fame and movie underscore id, and average rating data frame. Finally, we would have to print the final data frame which is df.show. And that is it. We would have the transformed data frame. And this is the final data frame that you would see.

> [!info]- Semantic Content
>
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Loading data into a DB](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=0)** - [Tutor] So far we have extracted and transformed the data. And it is time to load this transform data back to the database in a new table. Before that, you're first going to wrap these extraction and transformation code snippets into separate functions, so that automation becomes easy and these function would be reusable as well. So here you can see I have first graded the spark session as we did earlier, then we moved on to actually define or wrap the movie extraction or the user data extraction code snippets into functions. So I've created this first function to extract movie table data which I've named, extract movies to df. So here I'm doing the same thing, all I've done is simply define a function and I'm returning the movies on the score data frame. Similarly for the users table as well, I have named it extract users to df and I am returning the user_dataframe that I have just read using the spark session. Similarly, I have done this for the transform function as well, the transform code snippet. Here I am accepting movies underscore data frame that I've read above, and then I'm also using the users underscore data frame because these are the two tables that we're using in order to transform and in order to actually get the aggregated data. So here, this is the code snippet for transformation, and then I am returning the final data frame which would be the output of our transformation function
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=95)** which I have called transform average ratings. Now, in order to load this transform data or this data frame back to the [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) database, this is how we would do it. First of all we'd have to define the mode which is overwrite over here, so if the table already exists, we would override it then provide the URL to connect with your database which is called etl_pipeline, and the PostgreSQL server is actually running on local host called 5432. Provide the properties, username, password, and driver, just like we did while reading, then we are going to use the write function over here, the format is (mumbles), provide the URL, the name of the table which let's say we have renamed it average underscore ratings. This is the name of the table that would be written to our database mode we have defined above, which is override and then the properties that we have defined about as well. So now we are simply going to call each of these functions one by one in order to check if everything is running smoothly or not. So first we extract the movies data, so movies underscore_df called the function, then we extract the user's data which is extract users to df, we call this function and load it into the variable users_df. Then be transformed the data that we have extracted, so we are calling it ratings_df, and we're using the transformer average ratings function that we have defined above past the two data frames, movies_df and users_df.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=189)** And then finally we are calling the load df to db function, which is actually loading the transformed data frames back to the database. So let's quickly run this script, so [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 04,08.py, run it, it'll take a few seconds. So earlier we saw that we had only two tables in our database, and now let's go and check how many tables we have in our etl_pipeline database. \dt is the command, so you see we have average ratings table now written over here, and let's quickly check the data presented, so let's stars from average_ratings, semi-colon (indistinct), and you can see, we have ID name, description of the movie category, and the average rating as well. So this is the aggregated data which has now beginning loaded back to the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** etl_pipeline (2), users_df (2), user_dataframe (1), underscore_df (1), ratings_df (1)
> **Env Vars:** url (2)
> **Definitions:** is called (1), we call this (1)
> **File Paths:** 08.py (1)
> **CLI Commands:** python (1)
> **Analogies:** just like (1)
> **Speakers:** - [tutor] (1)

#### [Challenge: Loading data](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=0)** - [Narrator] So you have learned how to load a data frame back to the database. So here's another quick challenge for you. You have to fill in these blanks with the right parameters or functions to make the loading possible. So, first of all, you'd have to mention the mode that you're going to use to load the data frame back to the database. Then you have to provide the right data frame function to load the data frame back to the database. And then lastly, you would have to pass the right arguments to the transform average ratings function in order to aggregate the data. And at last, use this aggregated data frame and call the loading function that you have defined above and load it back to the database by providing the right data frame in the arguments. So, best of luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Loading data](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=0)** - [Instructor] So here's the solution to the challenge. First of all, you would have to use the overwrite mode. So that is overwrite. Then the data frame function that you would have to use to load the data frame back to the database is write. You'd have to write the data frame back to the database and then the right parameters to the transform function is the data frame that we have read above. So that is movies_data frame. And then the second parameter, or the second argument is the user_dataframe. Then to load the ratings data frame, you would have to call the loading function and then pause the ratings on the aggregated data that you have just returned above, so that is ratings_df. So this is the solution to the challenge. Run the script, and you would have a new table in your database.

> [!info]- Semantic Content
>
> **Code Identifiers:** movies_data (1), user_dataframe (1), ratings_df (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Scheduling ETL pipeline using Airflow](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=0)** - [Instructor] It's time to put everything together and schedule the jobs that we have defined so far. As discussed, we'll have to use a scheduling tool for this, and the most commonly used scheduling tool is [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md). We'll be using the code written so far, and then we'll define a directed acyclic graph using Apache Airflow. So first of all, let's set up Airflow on our machine. So, I am first creating a directory called Airflow, where all the configuration file and database would reside. So mkdir airflow, that's the command. Now, the next step is to set the AIRFLOW_HOME variable. So AIRFLOW_HOME, export the path to this variable that is actually required by the Airflow configuration file. Chapter_4, and the airflow directory. This is the home that we have set. Now, the next step is to actually install Apache Airflow. So sudo pip install apache-airflow. Hit Enter. Now, this is going to take a few seconds, close to a minute. I already have it installed. And the next step is to initialize the database. So the command for that is airflow db init. Hit Enter, and this is going to set up some configuration file, web server file inside the Airflow directory, as you can see over here.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=92)** Go to the Airflow directory and you see logs. You have Airflow configuration, airflow.db, unittest dot configuration and web server_config.py. So, once the initialization is done, now we are going to create an admin user. And for that, we can use this command over here from the documentation. Copy and paste it and change it to your credentials. So email is example@[example.com](https://example.com). Role is admin, that is fine. Last name is Tyagi. You can change it to your last name, first name and then change the username as well. Hit enter. It's going to ask me to set the password. Set the password, confirm it, and admin user has been created. All right. Now the next step is to use the code that we have written so far. So I've copied all of the functions, the extraction functions, the transformation functions, the loading function, all of the ETL pipeline, the entire ETL behavior is actually inside this transformation model that I'm going to be using inside my dags script, the Airflow script. So one thing that you should be very clear about here is that Airflow [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script is really just a configuration file. There's no processing happening here. Everything that is related to [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) is happening inside the transformation module. Now the dags.py is all about a configuration file
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=188)** for our dag structure as code. So first, I am importing Airflow over here. Then, from the modules module, I am importing the dag class. And Airflow offers a bunch of operators. So, our ETL pipeline has been defined using Python. So I'm using the Python operator. If you have defined it in Bash or some other language, there are a bunch of operators that Airflow offers. You can use them and learn about them from the documentation. Then I'm using the daytime module. And I have imported all the functions from my transformation module. Now the next step is to wrap everything up. So I haven't encapsulated the entire ETL behavior inside this function called ETL. So first of all, I am extracting the movies data the users data, transforming it and then loading it back to the database. That's my ETL function. Every, all of the ETL behavior is inside this function itself. Now I need to define the arguments for my directed acyclic graph, the dag using the default underscore augs. That's basically just a dictionary. So I'm setting the owner. That's me, Harshit. Start date depends on past, if it depends on the past runs. Email to which all of the messaging would be done. If anything fails and anything succeeds, the email on failure is true. So if anything fails, an email would be sent to me. Email on retry is false. Retry is three. Retry delays, so between any two consecutive retry times there'd be a 30 minutes delay that I've set.
>
> **[4:43](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=283)** You can change it to anything that you want. And then I'm instantiating this dag using the dag class. You have to provide the dag ID. I'm calling it ETL_pippeline. I'm setting the default args to this dictionary that I've defined above. Scheduling interval is this a chron time expression, which is basically just a five letter string. So the first letter is basically minute. This is hour. Then the third letter is for day of the month. And this is for week, and this is for day of the week. So the zero zero here means that I want to run all of these dag every zeroth minute of the zeroth hour every day. So this is what I have defined my scheduling interval to be. And then I'm defining my EDL task, which is basically just a Python operator that would actually run my task. So calling the task ID, EDL_task, the Python callable is my ETL function that I've defined above and the dag that I'm going to be using is the dag that I've instantiated above. And then I'm calling the ETL at the end. So let's just save it. Now, the next step is to move everything inside the Airflow, dag directory. So first, create the dag directory. Call it dags. And you can only call it dags because the configuration file has this dags folder defined and the path has been set. So everything needs to be inside this dags folder.
>
> **[6:19](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=379)** Move these files inside the dags folder. And the transformation module that is basically where the processing is happening. So my transformation model is being used inside dags. So both of these files need to be inside this dags folder. So once that is done, the next step is to start the web UI and the command for that is Airflow web server. So this will basically start the server. A flass level is done. And you're given URL where you can actually look at it. This is where the server is the running. Copy it, paste it in your browser. This is going to ask you for your username and password. You're going to enter it. But before that, let's quickly start the Airflow scheduler as well. So here again you would have to first export your Airflow home. We'll do that and then call Airflow scheduler because this is going to update or add our dag to the web UI. So our scheduler is now running. Add the username and password. The username is Harshit. And then password. So once you have added the username and password, this is how the UI is going to be. And then there are a bunch of dags that have been already defined by the Airflow team itself, the packet itself. So there are bunch of sartorial dags that are there that you can look at and you can learn
>
> **[7:53](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=473)** about them from the documentation. Keep refreshing it. The rdag is called ETL_pipeline. It's going to pop up here soon. So, as you can see, we have to keep refreshing. So it has come up. Our ETL_pipeline over here. Owner is Harshit. Scheduling interval is as we define. Recent tasks, you can play it, pause it, delete it. And you can also use this pause, unpause toggle button over here. If you click on it, you can actually interpret it. We only have one task. If you have like many other tasks or you have like separate tasks to extract transform load it would show you the graph over here. So this is probably how you can use, or you can create an end to end data pipeline using different tools, like [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), Apache Airflow, different [Databases](../../Skills/Software%20Development/Databases.md) like [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md), [MySQL](../../Skills/Software%20Development/MySQL.md) or Mongo DB. So that's how you can go about creating an ETL pipeline end to end. And this would basically pave the way for to create further, more complex [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (4), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** apache (6), python (5), mkdir (1), sudo (1), pip (1)
> **Env Vars:** etl (10), airflow_home (2), edl (1), url (1)
> **Prerequisites:** set up (2), install (2), initialization (1)
> **Documentation:** the documentation (3)
> **UI Navigation:** go to (1), toggle (1), click on (1)
> **File Paths:** server_config.py (1), dags.py (1)
> **Code Identifiers:** server_config (1), mysql (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=0)** - [Harshit] You have just learned a wide range of tools and concepts, from extracting data from various sources to transforming data frames, to loading it into [Databases](../../Skills/Software%20Development/Databases.md), and even scheduling the task in the pipeline using Airflow. The journey has just begun. There are many more concepts and tools to master. With the skills learned here, you are well on your way to becoming a competent data engineer. Feel free to connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) or you can subscribe to my YouTube channel, [Data Science](../../Topics/Data%20Science.md) with Harshit, where we discuss anything and everything about data. Thanks for watching and I'll catch you guys next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Speakers:** - [harshit] (1)


## Resources

- Exercise files available

## Skills Covered

- Data Engineering

## Path Context

### In [Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)
**1 of 6** | [Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md) →

### In [Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)
**1 of 6** | [Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md) →

### In [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
**1 of 7** | [Python For Data Science And Machine Learning Essential Training Part](../Artificial%20Intelligence%20(AI)/Python%20For%20Data%20Science%20And%20Machine%20Learning%20Essential%20Training%20Part.md) →

### In [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
**1 of 7** | [Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md) →

## Appears In

- [Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)
- [Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)
- [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
- [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Databricks Certified Data Engineer Associate Cert Prep](Databricks%20Certified%20Data%20Engineer%20Associate%20Cert%20Prep.md) — Data Engineering
- [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) — Data Engineering
- [Transition from Data Science to Data Engineering](../Cloud%20Computing/Transition%20from%20Data%20Science%20to%20Data%20Engineering.md) — Data Engineering
- [Introduction to Modern Data Engineering with Snowflake](../Cloud%20Computing/Introduction%20to%20Modern%20Data%20Engineering%20with%20Snowflake.md) — Data Engineering
- [Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md) — Data Engineering

---

[↑ Back to top](#)