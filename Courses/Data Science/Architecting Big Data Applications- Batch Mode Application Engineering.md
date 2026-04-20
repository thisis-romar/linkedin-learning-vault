---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: architecting-big-data-applications-batch-mode-application-engineering-22882694
url: "https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694"
duration_minutes: 88
duration: 1h 28m
level: Advanced
updated: 10/6/2023
learners: 47802
skills:
  - Big Data
  - Batch Processing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHDta61I-dsrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696456723105?e=2147483647&amp;v=beta&amp;t=wuE8jSC78C2FJTGGC7K_vaf1onkSI3Q9bORsIA-kEp8"
linkedin_topic: Data Science
learning_paths:
  - Master Data Engineering
  - Advance Your Data Skills in Apache Spark
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/big-data
  - skill/batch-processing
status: not-started
created: 2026-04-19
---

![Architecting Big Data Applications: Batch Mode Application Engineering](https://media.licdn.com/dms/image/v2/D560DAQHDta61I-dsrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696456723105?e=2147483647&amp;v=beta&amp;t=wuE8jSC78C2FJTGGC7K_vaf1onkSI3Q9bORsIA-kEp8)

# Architecting Big Data Applications: Batch Mode Application Engineering

> Big data applications allow data scientists and analysts to acquire, store, manage, and use big data to generate more consistent, data-driven results. In this course, instructor Kumaran Ponnambalam explores real-world business use cases and best practices for architecting big data applications using existing open-source technologies.Learn how to architect both simple and complex batch processing a

> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694) | 1h 28m | Advanced | 48K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kumaran Ponnambalam]]

## Skills Covered

- Big Data
- Batch Processing

## Table of Contents

### Introduction

#### Architecting big data applications
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=0)** - Architecting and building big data applications has some unique challenges.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=6)** In this LinkedIn learning course, we will review these challenges and look at three real-life use cases for batch mode big data applications.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=16)** In each use case, we will show you how to analyze a problem, draw an outline architecture, choose technologies, finish the architecture, and review some best practices.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=28)** My name is Kumaran Ponnambalam.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=31)** If you are a big data engineer, architect, or developer looking to architect batch mode big data applications, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1)
> **Speakers:** - architecting (1)


### 1. Introduction to Big Data Applications

#### Characteristics of batch processing
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=0)** - Let's begin the course by discussing batch processing fundamentals.
>
> **[0:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=5)** What are the characteristics of batch processing?
>
> **[0:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=8)** Batch processing in big data involves processing a high volume of data in batches.
>
> **[0:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=15)** Batches are scheduled based on the availability of input data and processing results.
>
> **[0:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=22)** The goal of batch processing is use case specific, but is about achieving specific business results.
>
> **[0:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=30)** What are some of the key characteristics of batch processing?
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=35)** Batch processing applications, or schedule-driven.
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=39)** They typically run based on a calendar like every hour of the day.
>
> **[0:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=44)** Sometimes they're also triggered based on the volume of input data available for processing.
>
> **[0:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=51)** Data is processed one batch at a time.
>
> **[0:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=55)** Each batch can contain several input records.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=58)** The size of a batch is use case specific.
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=61)** There is usually high latency in these applications from when the input data is available to when outputs are derived from the batch application.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=72)** An application may contain multiple jobs and each of these jobs can be scheduled to run at specific intervals processing batches of data.
>
> **[1:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=82)** These applications process a high volume of data.
>
> **[1:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=86)** Each batch can be of several gigabytes.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=90)** When processing failures happen, the typical resolution is to fix the problem and reprocess data once again.
>
> **[1:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=98)** Batch applications focus on ensuring data integrity.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=103)** This means waiting until all input data is available and validating data and results at each stage in the application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - let (1)

#### Challenges building batch applications
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=0)** - [Instructor] What are the key challenges in building big data batch applications?
>
> **[0:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=5)** When it comes to batch applications, big data, itself, is a key challenge.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=11)** Batch big data applications handle very high volumes of input data.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=16)** Storing, transporting, and computing activities require scale and efficiency.
>
> **[0:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=23)** To speed up processing, concurrent processing is required to process high volumes of data in a short time.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=31)** Enabling concurrency in design is a challenge.
>
> **[0:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=34)** Data processing may encounter errors and sometimes there could be missing data.
>
> **[0:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=40)** Dealing with these problems at the big data scale is a challenge.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=45)** Data integrity should be ensured throughout the application pipeline so that the results are trustworthy.
>
> **[0:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=53)** Allocating resources in a way that they are efficiently utilized while minimizing delays is a challenge in managing costs.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=62)** Big data pipelines pose challenges in monitoring and troubleshooting.
>
> **[1:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=67)** Sorting through data volumes to identify issues and then resolving them in a timely manner is, again, a challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Technologies for batch big data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=0)** - [Instructor] What are the technologies available for building batch applications for big data?
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=7)** Fortunately, scalable and robust technologies are available today that do the heavy lifting in big data applications.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=16)** Selecting the right technologies for a given use case, setting them up, and integrating them is the key design challenge for big data architects.
>
> **[0:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=27)** We begin with data processing technologies available.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=31)** Some of the popular ones are Apache Spark, Apache Flink, and Apache Pig.
>
> **[0:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=37)** There are also cloud native technologies like AWS Batch and Apache Storm that are available.
>
> **[0:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=44)** These products are generally mature and highly scalable.
>
> **[0:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=48)** They provide flexibility in programming, data processing, and deployment.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=54)** Then comes data storage technologies.
>
> **[0:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=56)** Several types of storage technologies are available like relational databases, distributed file systems, document databases, columnar databases, graph databases, and distributed caches.
>
> **[1:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=70)** Each of these technologies have their own advantages and shortcomings.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=75)** The trick is to choose the right technology based on the data types and usage requirements.
>
> **[1:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=82)** Then comes data interface technologies.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=85)** These are required to acquire inputs from sources into the batch pipeline and also deliver outputs to downstream consumers.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=94)** Technologies include file transfer utilities, extract transform load clients that are usually built custom, data consuming APIs through which sources can push data, query interfaces through which data can be pulled in, and data serving APIs.
>
> **[1:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=113)** The key to big data batch application architecture is to choose the technologies correctly and integrate them efficiently.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), aws (1)
> **Code Keywords:** case, (1), interface (1)
> **Env Vars:** aws (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Use cases for batch big data
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=0)** - [Instructor] What are some of the popular use cases for batch big data?
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=6)** Batch processing for big data has found its way into several business domains and verticals.
>
> **[0:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=13)** Let's look at some popular use cases.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=16)** Batch processing can be used to create and manage big data warehouses, where historical data, like transactions and logs, can be archived and analyzed.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=28)** It can be used to consolidate data across hundreds of data centers and nodes around the world.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=35)** For example, inventory updates from each retail store can be consolidated in a central data center on a daily basis.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=45)** A customer 360 provides a complete view of all the interactions between a customer and an enterprise.
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=52)** This involves consolidation of data across several interaction channels, like websites, contact centers, social media, and store visits.
>
> **[1:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=63)** This helps enterprises to understand customer behavior, and take actions to improve business and customer service.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=72)** Domain-specific analytics involves analyzing transactions in a domain to understand trends and insights.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=81)** For example, in e-commerce, batch processing can be used to analyze sales transactions and website hits by each product to determine how the product performs across geographies and customer types.
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=96)** Feature engineering is a growing critical component of machine learning pipelines.
>
> **[1:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=101)** Big data pipelines play a critical role in acquiring large quantities of training data, and extracting features for machine learning.
>
> **[1:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=110)** They are also used in machine learning inference for pre- and post-processing.
>
> **[1:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=117)** Anonymous automated workflows is another key area where big data batch is playing a key role.
>
> **[2:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=124)** For example, in order processing, the order is moved through the logistics pipeline from order placement to order delivery.
>
> **[2:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=132)** During this process, status aggregation and reporting happens with batch applications.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Architecture process for data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=0)** - [Instructor] What is the process to follow while architecting applications using batch data engineering?
>
> **[0:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=8)** Let's begin with the definition of data engineering.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=11)** Data engineering is the methodical process of designing and building big data pipelines that acquire, store, process, and analyze data to derive business outcomes.
>
> **[0:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=25)** Data engineering provides a discipline in the architecture and design process that helps build efficient and effective pipelines.
>
> **[0:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=34)** What does the architecture process look like?
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=38)** The first step is defining the use case.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=41)** This involves clearly stating the problem to be solved, the expected solution, and the design goals.
>
> **[0:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=47)** The goal would cover functional requirements, form and types of outputs, and benchmarks.
>
> **[0:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=55)** The next step is to study the requirements thoroughly.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=59)** This starts with understanding the outputs needed, including their form and type.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=65)** Then inputs need to be analyzed for their form volume, data characteristics, and constraints.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=72)** Non-functional requirements and limitations need to be defined, including scale, latency, and error rates.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=81)** Then we get to create a workflow for the pipeline.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=85)** The workflow is a straw man flowchart of the pipeline defining its acquisition, processing, and storage functions.
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=93)** It only focuses on functionality, not scale.
>
> **[1:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=97)** Next, we get to making the workflow scalable by adding big data specific elements.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=103)** Here we look at each function and scale it such that it can handle expected data volumes.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=111)** Finally, we will select the right technologies and products that will fit into the functions within the application.
>
> **[1:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=118)** We will define selection criteria for the technology, evaluate alternatives, and then score them to make a selection.
>
> **[2:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=127)** Later in the course, we will look at three use cases where we will follow this approach to create an architecture.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), type. (1), function (1), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Big Data Architecture Principles

#### Making the choice: Real-time vs. batch
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=0)** - Having discussed the basics of batch processing for big data, in the previous chapter, we can now focus on some key architecture principles.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=10)** In this chapter, we will focus on architecture principles that apply to both batch and real-time big data applications.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=20)** We start with making the choice, whether the application should be batch or realtime.
>
> **[0:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=27)** A big data pipeline can be built as a batch or a realtime pipeline, irrespective of the latency requirements.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=35)** A key architecture decision at the beginning of the effort, is to decide if the pipeline is going to be batch or realtime.
>
> **[0:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=43)** This is a critical decision as it impacts latency, scale, cost, manageability and resiliency of the pipeline.
>
> **[0:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=53)** Architects are in general excited about building pipelines as realtime pipelines, as it creates technical challenges for them.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=62)** But it is important to understand some challenges with realtime pipelines before making that call.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=68)** Realtime pipelines are even driven.
>
> **[1:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=71)** When a new record appears in the input, the pipeline kicks off and proceeds to process that record.
>
> **[1:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=78)** If the source data is generated at an uneven pace it'll create uneven loads on the pipeline.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=85)** As a result, resources for real-time pipelines are allocated, considering peak load, not average load, in order to process with minimum latency, even when maximum spikes in input.
>
> **[1:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=98)** This means a lot of resources are idling and that impacts costs.
>
> **[1:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=104)** If a real-time pipeline is not processing data at the speed in which it arrives, back pressure will build up.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=111)** This may impact the performance of upstream services generating the data.
>
> **[1:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=116)** Monitoring real-time jobs is a challenge as there is a lot of transient data and states that cannot be isolated and reproduced easily for debugging.
>
> **[2:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=128)** When failures happen in a continuous real-time pipeline, recovery while keeping the pipeline up is a challenge.
>
> **[2:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=135)** To handle failures and downtimes, higher levels of redundancy of resources are required.
>
> **[2:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=141)** This increases costs, so real-time pipelines should be used, only when the use case absolutely needs it.
>
> **[2:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=150)** So how do we decide between batch and realtime pipelines?
>
> **[2:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=154)** Choose batch pipelines when the acceptable latency for the pipeline is greater than 30 minutes.
>
> **[2:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=161)** Choose realtime only when the business requires it.
>
> **[2:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=165)** The latency requirements should be less than five minutes or so.
>
> **[2:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=169)** Between five minutes and 30 minutes, make the call based on the use case with a preference for batch, even when latency requirements are low.
>
> **[3:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=180)** Discuss with the users to see if they can accept more latency.
>
> **[3:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=185)** Users usually prefer information as quickly as possible but is there a real business value in producing the information with such low latency?
>
> **[3:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=196)** An alternative to explore is hybrid pipelines.
>
> **[3:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=199)** Sometimes the same input can be used for some real-time requirements and also historical requirements.
>
> **[3:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=207)** In these cases, build separate pipelines for real-time and batch, with real-time only handling critical low latency requirements.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - having (1)

#### Horizontal scaling
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=0)** - [Instructor] Horizontal scaling is the primary technique that helps to scale a big data application to handle large volumes of data.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=9)** What is horizontal scaling?
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=11)** Horizontal scaling is the process of increasing the capacity of an application by adding additional compute nodes and then distributing input data across these nodes.
>
> **[0:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=22)** In horizontal scaling, it is expected that adding additional hardware results in an equivalent increase in processing capacity.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=32)** This way, an application can scale up and scale down by managing resource allocation without additional software development.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=41)** For example, if you have a three-node cluster, and then add two nodes to it, it should result in an equivalent capacity increase of around 66%.
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=52)** Adding additional nodes should not decrease the average capacity per node.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=57)** However, the gains from scaling will plateau with decreasing results if bottlenecks exist in the design of the application.
>
> **[1:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=66)** What kinds of bottlenecks are possible in big data processing?
>
> **[1:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=70)** Operations that work on individual records usually scale horizontally without issues.
>
> **[1:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=77)** This includes operations like map, filter, transform, and enrich.
>
> **[1:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=82)** These operations work on a single record at a time without considering other records in the dataset.
>
> **[1:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=88)** As a result, each record can potentially be processed by a different node.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=94)** More the node, more are the records that can be processed concurrently.
>
> **[1:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=99)** On the other hand, aggregate operations can choke the system.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=103)** This is because aggregations require multiple records to be processed together.
>
> **[1:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=109)** For this to happen, all the records need to be processed in a single node.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=114)** Global aggregations can only happen on a single node.
>
> **[1:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=118)** For key-based aggregations, each key can be aggregated in an independent node.
>
> **[2:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=124)** As data is consolidated in a single node, memory limitations may be hit and disc swapping can happen.
>
> **[2:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=131)** All of this will result in very slow processing and limit the number of nodes that are used in the operation.
>
> **[2:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=138)** Similarly, join and merge operations can also become bottlenecks since they also require two data sets to be processed together in a single node.
>
> **[2:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=148)** Database locks that only allow sequential operations on data can also become bottlenecks at large concurrent volumes.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=157)** What are some of the best practices for horizontal scaling?
>
> **[2:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=161)** A lot of unwanted data exist in the input data including records or attributes.
>
> **[2:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=167)** Remove them as early as possible in the pipeline to minimize data volumes downstream.
>
> **[2:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=174)** Similarly, aggregate as late as possible after all the filtering is done, again, to minimize data volumes.
>
> **[3:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=181)** For global aggregations, adding intermediate key-based aggregations, and then aggregating on the key-based aggregates, will help distribute the load.
>
> **[3:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=192)** For example, to compute total order value for a given day, we can first compute product-based order totals that can be distributed.
>
> **[3:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=201)** And then, summarize the product-based total to compute the global total.
>
> **[3:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=206)** When join or merge operations are needed, explore other alternatives.
>
> **[3:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=210)** If one of the dataset is small or static, lookups can be used to enrich the data set.
>
> **[3:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=217)** Also, caching data sets can also help speed up joins.
>
> **[3:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=221)** Use databases that allow independent concurrent inserts and updates.
>
> **[3:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=226)** This usually happens if each node works on independent partitions on the database without locks.

> [!info]- Semantic Content
>
> **CLI Commands:** node (10)
> **Code Keywords:** require (2), static (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Distributed processing
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=0)** - [Instructor] Distributed processing, is another important principle, that helps build scalable big data applications.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=7)** What is distributed processing?
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=10)** Distributed processing is about dividing a single large task into several subtasks and then distributing them, across multiple processing clusters.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=20)** This follows the principles of microservices.
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=24)** Tasks are split into sub-tasks based on cohesion uncoupling, between the individual job steps.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=31)** With distributed processing, each task can be developed and deployed independently.
>
> **[0:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=37)** Horizontal scaling and resource allocation, is done by each job, which helps optimize resource utilization for the entire pipeline.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=45)** How does distributed jobs apply in big data applications?
>
> **[0:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=50)** In the case of big data processing, distributed processing involves, splitting a single large job into individual jobs, based on cohesion between job steps.
>
> **[1:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=60)** In the example shown, a single job has four steps.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=65)** We can then split them into three individual jobs, with the first job doing the filter, the second job doing the transform and enrichment, and the third job doing aggregation.
>
> **[1:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=76)** The filter job will eliminate unwanted data, so that the second and third job, just have to handle lower data volumes.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=85)** Similarly, running aggregation, on a separate jobs allows optimization of resources.
>
> **[1:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=91)** Each job can then scale independently, based on its own requirements and constraints.
>
> **[1:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=98)** Intermediate data stores and message queues, can be used to pass data between these jobs.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=103)** This distribution provides improved ability, to scale individual jobs based on expected volumes.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=111)** For example, if job one eliminates 40% of the data, then job two will only need fewer resources, to deal with a smaller data set.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Technology selection
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=0)** - [Instructor] Most big data applications are primarily built using out-of-the-box technologies that provide the required scalability and resiliency.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=11)** Choosing the right technologies for the use case is a set of critical decisions that can make or break the application.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=19)** Let's briefly discuss the big data technology landscape.
>
> **[0:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=23)** Several big data technologies have been developed in the past decade or more.
>
> **[0:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=29)** They are a combination of open source enterprise products and software as a service offerings.
>
> **[0:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=36)** Multiple categories of technologies are available including processing engines, NoSQL databases, and message queues.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=45)** Some of the popular technologies are Apache Spark for processing data, Apache Kafka for message queues, MongoDB for NoSQL databases, and Redis for distributed cache.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=58)** Each of these technologies have their own unique advantages and shortcomings.
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=64)** None of them are perfect in every criteria.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=68)** Hence, there is no one-size-fits-all universal option.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=72)** The exact choice of technologies depends upon the use case.
>
> **[1:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=78)** So how do we select technologies in a methodical manner that helps us make objective data-driven decisions?
>
> **[1:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=86)** The process starts with creating a list of criteria for the use case.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=90)** The use case may require several types of technologies like databases and processing engines.
>
> **[1:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=97)** For each such requirements, create a separate selection criteria.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=102)** Keep the number of criteria to less than 10.
>
> **[1:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=106)** Then, assign weights for each criteria as not all of them have the same importance in a given situation.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=114)** Instead of weights, you can also use green, red, and orange flags based on suitability.
>
> **[2:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=121)** Choose a list of technologies that would closely match the selection criteria.
>
> **[2:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=126)** Evaluate the choices against this criteria, and assign a score for that technology against each criteria.
>
> **[2:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=135)** Compute the weighted score.
>
> **[2:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=136)** Then, add up the weighted scores to compute the total score.
>
> **[2:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=141)** Finally, choose the technology with the best score.
>
> **[2:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=144)** We will architect three use cases later in the course and we will demonstrate use of this methodology for these use cases.
>
> **[2:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=153)** So what kind of criteria should we consider for making the list for a given technology?
>
> **[2:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=159)** The first set of criteria is around the functional and non-functional requirements for the use case.
>
> **[2:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=166)** This may be for a specific type of pattern, like map or filter, that the technology needs to support.
>
> **[2:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=174)** There can be requirements around scale, latency and concurrency that the technology needs to support.
>
> **[3:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=181)** Next comes cost.
>
> **[3:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=183)** It is important to manage cost so that overall application is actually cost effective.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=190)** Applications that do not carry critical business value may need to be built using low cost technologies even if they are not optimal.
>
> **[3:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=199)** Technology maturity is an important criteria especially in today's open source world.
>
> **[3:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=206)** Business critical applications may require mature technologies that are reliable and less prone to change.
>
> **[3:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=213)** Experimenting with new technologies should be limited to non-critical use cases.
>
> **[3:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=219)** All technologies require skilled personnel who can build deploy, and manage them.
>
> **[3:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=225)** If there are too many unique technologies in an organization, then there needs to be investment to support them.
>
> **[3:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=232)** Hence, consider minimizing the number of unique technologies across the organization.
>
> **[3:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=237)** For example, if an organization requires six different types of databases across its big data use cases, then that creates significant resource overhead.
>
> **[4:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=249)** Choose a new type of technology only when the existing ones cannot fulfill the requirements.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), require (3), let (1), finally, (1)
> **CLI Commands:** make (2), apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Technology integrations
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=0)** - [Instructor] Another key architecture area to focus on is integration between the out-of-the-box technologies.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=7)** A single big data pipeline may use multiple big data technologies.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=12)** As shown in the example, a pipeline can use an input message queue like Apache Kafka.
>
> **[0:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=18)** An Apache Spark Job can read from the Kafka Queue, process data, and write results into the HDFS Data Store.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=26)** Each technology may have individual scalability and performance.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=31)** In this example, each of them, namely Kafka, Spark and HDFS are massively scalable.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=38)** But then, data needs to be passed between these technologies at the same scale.
>
> **[0:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=43)** Integration between these technologies can become a bottleneck if it is not architected correctly.
>
> **[0:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=50)** For example, Spark's actual processing throughput will be limited by the speed and concurrency at which it consumes messages from Kafka.
>
> **[1:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=60)** So how do we ensure optimal integration between technologies?
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=64)** To begin with, look for out-of-the-box connectors between technologies in the selection process.
>
> **[1:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=71)** If you have already selected Spark as the processing technology, then look for storage technologies that have out of the box scalable integration with Spark.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=81)** Usually, out-of-the-box connectors that come built with the technology leverages the abilities of both the technologies to provide maximum throughput.
>
> **[1:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=91)** For example, each Apache Spark task node can directly write to an independent partition on HDFS Thus, multiple spark nodes can concurrently work with multiple HDFS nodes and their partitions without any bottleneck.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=108)** It is recommended to do some research about the internals of these technologies to understand their limitations and then build integrations that optimize on their features and overcome limitations.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), node (1)
> **Env Vars:** hdfs (4)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Batch Application Architecture Principles

#### Schedule selection
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=0)** - [Instructor] Having discussed some common architecture principles for big data applications in the earlier chapter, we will now focus on key principles for batch big data applications.
>
> **[0:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=13)** We will begin with the key design decision, namely schedule selection.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=19)** Batch processing jobs are scheduled to run periodically, usually based on a scheduler.
>
> **[0:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=25)** They typically run every hour or every day.
>
> **[0:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=29)** The Schedule Intervals choice plays a key role in determining the efficiency and effectiveness of batch jobs.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=38)** Having small intervals, like every five minutes or 30 minutes provides low latency for getting the final results, but then they may also create significant overhead.
>
> **[0:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=51)** Each batch usually has a fixed overhead irrespective of the volume of data.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=57)** Smaller intervals increases this cost.
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=61)** Having intervals too large would mean that the resources are optimally used with minimum overall overhead, but that would increase the latency in getting the desired results.
>
> **[1:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=73)** The use case typically determines what range of schedules can be used for a given job.
>
> **[1:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=79)** This is based on the availability of input data, volume of pending data to be processed, and the latency requirements from the users.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=90)** How do we select the right schedule choices for a given job?
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=94)** Choose intervals such that each batch processes sufficient amounts of data, but not too much data, leading to processing and resource usage spikes.
>
> **[1:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=105)** Provide enough buffer time between batches.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=108)** Benchmark on how much time a batch would typically take to run, and add some buffer to it.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=114)** If a single batch overruns, there is a buffer, so that the next batch will start on time.
>
> **[2:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=122)** Issues may occur in batch processing, and data may need to be reprocessed.
>
> **[2:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=127)** Providing a buffer to accommodate reprocessing will help reprocess all data without impacting the processing of new records.
>
> **[2:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=136)** Multiple batch processing jobs can share the same resource pool, like the same Apache Spark cluster, and the same hardware resources.
>
> **[2:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=146)** Jobs can be scheduled in a staggered manner such that the resource pool is continuously used.
>
> **[2:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=153)** This improves resource utilization while ensuring that there is no competition for resources.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Minimizing data volumes
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=0)** - [Presenter] Removing unwanted data from the batch processing pipelines helps in reducing processing costs.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=7)** In big data, the more data to be processed, more other resources required for processing.
>
> **[0:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=14)** More just does not mean more records, but also the size of the record.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=20)** More data processing requires more of the resources including CPU, memory, network, and bandwidth.
>
> **[0:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=27)** The inputs to a big data pipeline are typically multipurpose inputs.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=32)** This means the inputs are not specifically created for the pipeline, but rather created as a general purpose data source.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=41)** For example, if you're building a pipeline to compute sales aggregates by each product, the input would be all orders.
>
> **[0:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=49)** These orders may contain data like customer addresses and shipping information that is not required for computing aggregates by each product.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=59)** A single input can actually drive multiple pipelines.
>
> **[1:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=63)** The orders data will drive a product analytics pipeline, as well as an orders fulfillment pipeline.
>
> **[1:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=70)** Significant amount of data in the input may not be needed for a specific pipeline.
>
> **[1:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=76)** This may include rows or records that are not required for the pipeline.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=81)** It may also have columns or attributes that are not needed for this pipeline.
>
> **[1:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=87)** What are some of the best practices for minimizing data volumes?
>
> **[1:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=91)** To begin with, explore if the input source can create inputs that are specific to the pipeline containing only data that this pipeline needs, that eliminates unwanted data at the source.
>
> **[1:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=104)** If it is a common input, then filter unwanted data yearly in the pipeline to minimize load.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=111)** This includes both records, as well as attributes.
>
> **[1:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=115)** If the source interface supports filtering capabilities, leverage them to minimize data coming into the pipeline.
>
> **[2:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=123)** For example, if the source is an RDBMS database a WHERE class in the SQL statement can filter out data at the source.
>
> **[2:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=132)** Similarly, if the source is an HDFS Parquet file, we can use projections pushed down to execute filters at the HDFS level.
>
> **[2:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=142)** This again, minimizes data coming into the processing engine.
>
> **[2:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=146)** If BLOBS like tester images need to be processed, it's recommended to store them in a big data file system like HDFS or S3 and only pass around URLs to these objects during data transfer.
>
> **[2:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=161)** This way, the BLOB is only read when it actually needs to be processed in the job.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (3), cpu (1), rdbms (1), where (1), sql (1)
> **Definitions:** is an  (2), is a  (1)
> **Code Keywords:** interface (1), pass (1)
> **Analogies:** for example (2)
> **SQL:** where (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [presenter] (1)

#### Uniform load distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=0)** - [Instructor] Another key architecture goal for big data batch pipelines is distributing processing load evenly across the clusters.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=10)** What is the significance of load distribution?
>
> **[0:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=14)** Big data technologies are typically deployed in clusters whether it's Apache Spark for processing, HTFS for storage, or Apache Kafka for queuing, they are deployed in clusters.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=28)** As the load increases, we simply add more nodes to the cluster to scale horizontally, but will it really scale without degradation?
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=39)** A good load distribution strategy is critical for scaling a big data batch pipeline.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=45)** The goal for such a strategy is to ensure that load is distributed evenly across all nodes in the pipeline.
>
> **[0:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=53)** A bad strategy would result in some nodes getting choked and the others not used at all.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=59)** Also, when new nodes are added to the cluster, the pipeline should scale horizontally without degradation in capacity.
>
> **[1:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=69)** When it comes to big data, some functions like grouping or aggregation can limit load distribution even if nodes are available.
>
> **[1:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=78)** So what are some of the load distribution strategies that can be employed in batch processing?
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=85)** Single record operations like map, filter, or transform operations can be distributed in a round robin basis across all nodes.
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=95)** Since these operations only work on a single record, there are no context or sequence requirements.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=102)** When it comes to processing by a group like sequential processing of all events in a transaction, a key can be used to distribute load across nodes.
>
> **[1:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=113)** Records with the same key will be processed at the same node.
>
> **[1:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=117)** For aggregation operations, again, key-based distribution is essential to distribute the load.
>
> **[2:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=124)** Global aggregations require records to be collected at a single node leading to choking.
>
> **[2:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=130)** To alleviate this, multi-step aggregations with intermediate key-based aggregations can be used to reduce load on a single node.
>
> **[2:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=140)** Keys play a critical role in distributing load across a cluster.
>
> **[2:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=145)** The choice of key plays a critical role in ensuring horizontal scalability.
>
> **[2:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=152)** Select keys such that the distribution of data between the keys is even.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=157)** For example, using country as a key is a good choice if data volumes are distributed across all countries.
>
> **[2:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=166)** But if 50% or more of the records are from a single country, it becomes a bad choice as the node processing that country will choke.
>
> **[2:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=177)** Similarly, select keys such that it has many possible values.
>
> **[3:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=182)** For example, if we use customer type as a key and there are only five types of customers, then the maximum nodes that this distribution can scale will be only five.
>
> **[3:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=195)** On the other hand, if we use a key like transaction ID and there are several thousand transactions a day, it will be distributed evenly across the nodes and can also scale.
>
> **[3:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=209)** Also, use technologies that leverage keys to distribute data processing and grouping.
>
> **[3:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=215)** RDBMS uses database columns for filtering and grouping.
>
> **[3:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=220)** Similarly, folders and partitions can also be done based on keys, which enables concurrent processing of data using these keys.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), apache (2)
> **Code Keywords:** require (1), this, (1)
> **Env Vars:** htfs (1), rdbms (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using caches
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=0)** - [Presenter] Caches play a key role in reducing processing latency and enabling exchange of data quickly between processing entities.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=9)** Data caches are a popular component of a big data pipeline.
>
> **[0:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=14)** These caching technologies allow ultrafast access to data compared to disk-based databases.
>
> **[0:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=22)** Distributed caches like Redis also provides scaling and redundancy in a big data pipeline.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=28)** In distributed caches, nodes can be set up closer to the processing node, sometimes within the same cluster or pod to minimize network traffic and hence latency.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=41)** These data caches are excellent choices for static read-only data and transient data.
>
> **[0:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=48)** For example, if we need a lookup table to map a given discount code to a discount rate, doing a cache lookup for each record is extremely quick as compared to a database query.
>
> **[1:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=63)** Data caches do have size limitations on the amount of data they can store.
>
> **[1:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=69)** They also need cache management to perch old data and keep the cache up to date.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=75)** What are some of the best practices for using data caches in batch processing?
>
> **[1:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=80)** We can use caches to store static or near-static data for fast data enrichment.
>
> **[1:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=87)** For example, it can be used to do ID attribute mappings like getting the discount percentage for a product and other related attributes.
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=96)** It can also be used for caching metadata like threshold levels for alerting.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=103)** Another use of data caches is to maintain transient data during processing.
>
> **[1:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=109)** Distributed caches can be used to track global counters that can be read and updated by multiple processing nodes in a cluster.
>
> **[1:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=118)** They can also store intermediate aggregations to reduce repeat processing and share data.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3)
> **Analogies:** for example (2)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Reprocessing
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=0)** - [Instructor] Reprocessing of data in a big data pipeline is a critical function that needs to be optimally designed.
>
> **[0:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=8)** Why do we need reprocessing of data?
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=11)** There can be infrastructure issues while running a bad job, like out of memory, network timeouts, or process crashes.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=20)** There can be errors in earlier processing that necessiated a code change.
>
> **[0:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=25)** This needs data to be reprocessed with the new code.
>
> **[0:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=29)** Sometimes new late data might come in for a given batch that is already processed, the batch that needs to be reprocessed with the new data added.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=41)** Developers may add some new logic or analytics and the requirement would be to reprocess old batches to implement them on old data.
>
> **[0:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=51)** Whatever be the case, reprocessing is an element that is unavoidable and can prove to be a headache.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=58)** It's recommended to rather architect the pipeline to allow reprocessing of old data.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=65)** What are some of the best practices to enable reprocessing when needed?
>
> **[1:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=70)** Ensure that a batch is repeatable.
>
> **[1:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=73)** This means, if I rerun a batch, it'll treat the same set of input records and produce the same outputs.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=81)** Batches should usually be bound based on date and time intervals.
>
> **[1:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=86)** Don't prune the source data until a batch is considered final.
>
> **[1:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=91)** If it is possible to get new records for a old batch in the next seven days, then keep the source data for seven days.
>
> **[1:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=99)** Processing logic should not double count if reprocessing happens.
>
> **[1:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=104)** Double counting happens if we use a counter to compute aggregates.
>
> **[1:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=109)** Instead, aggregation should be done on the entire batch once again to recompute values from scratch.
>
> **[1:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=118)** Hence, it is recommended to always aggregate by batches and store these aggregates too.
>
> **[2:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=124)** This means, in reprocessing we don't need to recompute from scratch for the entire batch, but only those parts are keys that have changed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), case, (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** recommended (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. Use Case 1: Audit Trail Data Archive

#### Audit trail: Define the problem
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=0)** - Having discussed some key architecture principles for big data batch pipelines in the previous chapters, let's build architectures for some use cases now by applying these principles.
>
> **[0:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=14)** We will follow the architecture process discussed in chapter one.
>
> **[0:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=18)** The use cases are only illustrative examples of the techniques and are not full fledged implementations.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=26)** Our first use case is a simple one, called audit trail data archive.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=32)** Let's begin the use case by first defining the problem for the data archive.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=38)** Let's begin the use case by first defining the problem for the data archive.
>
> **[0:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=44)** The ABC Company has an e-commerce application that it uses to sell its products to a large number of customers over the internet.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=54)** It generates an audit trail of all the application events for future analytics of user behavior.
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=61)** The size of this trail is about 10 GB per day.
>
> **[1:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=66)** Currently, an Oracle RDBMS database is used to store the audit trail for only 15 days.
>
> **[1:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=74)** The storage is limited to 15 days because of limitations in scalability of the RDBMS and also because of costs associated with additional storage within this database.
>
> **[1:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=87)** But this 15 days archive is insufficient for any kind of analytics that are required.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=94)** Analysts want access to three years worth of data.
>
> **[1:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=99)** So here is the problem given to you.
>
> **[1:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=101)** Create a data archive architecture that will be able to store audit trails for three years.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=108)** This is around 10 terabytes of data.
>
> **[1:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=112)** All use cases should have some functional and non-functional goals that need to be achieved with the architecture.
>
> **[2:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=120)** Here are the goals for the audit data archive use case.
>
> **[2:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=125)** It should be cheap to create and maintain this database.
>
> **[2:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=128)** The data is not used for critical applications but only for offline analytics so it should be cost effective.
>
> **[2:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=137)** It should be massively scalable to ingest process and serve this volume of data.
>
> **[2:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=144)** It should support ad hoc querying capabilities that the analysts can use to run queries for data extraction and summarization.
>
> **[2:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=154)** Let's now analyze the requirements further in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (1)
> **Env Vars:** rdbms (2), abc (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - having (1)

#### Audit trail: Study requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=0)** - [Instructor] Having defined the problem and goals for the audit trail use case, we will now proceed to study and analyze the requirements for the use case.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=10)** We will begin by analyzing the characteristics of the inputs available for this audit big data pipeline.
>
> **[0:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=18)** As discussed earlier, the audit trail is available in an Oracle RDBMS database for 15 days before it is pruned.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=28)** A single audit trail table contains the audit trail data.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=32)** We may need joins with other tables for lookup reasons, but we are keeping the use case simple.
>
> **[0:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=40)** Access to this data is available through SQL.
>
> **[0:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=43)** Clients can connect to Oracle and execute SQL queries to extract the records.
>
> **[0:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=49)** The data is available within the organizational trust boundary where the audit trail pipeline will also run.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=57)** There are no special security considerations other than the access to the Oracle database.
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=64)** The load that the pipeline can put on this database is limited.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=68)** Other concurrent applications are using this database for reads and writes, so access and processing capacity on the database are not exclusive.
>
> **[1:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=79)** We then move on to the output that we should create.
>
> **[1:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=83)** The audit trail should be archived for three years in a persistent data archive.
>
> **[1:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=88)** The technology for this archive should be decided during the architecture process.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=94)** It stores the audit trail records extracted from the Oracle database.
>
> **[1:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=99)** Access to this data should be available through a SQL or SQL-like interface.
>
> **[1:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=106)** The archive should provide for cheap storage resources so we can keep huge data volumes for a long period of time.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=114)** There are no specific performance or latency requirements for the queries.
>
> **[1:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=119)** The third aspect to analyze is the functional requirements that determines how the inputs are transformed to the outputs.
>
> **[2:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=127)** The audit trail archival pipeline will read records from the Oracle DB at periodic intervals.
>
> **[2:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=134)** It will then remove any sensitive data attributes from the audit trail.
>
> **[2:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=139)** In this case, it will be customer names if they are present in the data.
>
> **[2:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=144)** The output of this processing is stored in the data archive.
>
> **[2:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=148)** Access to the archive is provided through SQL.
>
> **[2:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=152)** This list of functions are simple and straightforward.
>
> **[2:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=156)** Finally, we get to analyze the non-functional requirements for the use case.
>
> **[2:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=161)** We begin with scalability.
>
> **[2:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=164)** As discussed earlier, we need to handle about three GB of data per day and store it for three years.
>
> **[2:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=171)** For latency, the data from the Oracle database should be available in the audit trail database within 24 hours.
>
> **[3:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=180)** For high availability, redundancy is required for the audit trail data archive.
>
> **[3:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=186)** The data pipelines can be down for a maximum of one hour due to unplanned issues.
>
> **[3:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=192)** Finally, when it comes to security and privacy, access to the audit trail archive should be provided only with required authentication.
>
> **[3:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=202)** Also, customer names should be removed from the audit trail before storing in the archive.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), case. (2), finally, (2), interface (1)
> **Env Vars:** sql (5), rdbms (1)
> **Speakers:** - [instructor] (1)

#### Audit trail: Create a workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=0)** - [Instructor] Having analyzed the requirements for the use case, let's now begin the architecture process.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=6)** We will first draw a workflow for the audit trail archive pipeline.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=11)** At this stage, we are focused on executing data processing without any special considerations about the big data characteristics like data volumes and horizontal scaling.
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=24)** Let's now draw the workflow.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=26)** The goal of the workflow is to create the output in an audit trail archive database.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=32)** The input would be the existing Oracle database that stores the audit trail records.
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=39)** The first step in the workflow is to treat the pending audit trail records in batch.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=45)** We will only query for new records that are not pushed to the archive yet.
>
> **[0:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=50)** Then we will remove customer names from the audit trail records if they are present.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=57)** Then results are returned to the audit trail archive database.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=62)** This is a straightforward workflow.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=65)** To reiterate the workflow, the batch pipeline will be triggered to run every hour.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=72)** Given the large volume of data, it would be beneficial to run the batch in higher frequencies to process pending records.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=81)** The pipeline will use username password authentication to connect to the source database.
>
> **[1:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=88)** It'll execute a SQL statement that is bound by the timestamp of the audit trail to fetch for new records.
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=96)** It then does record by record processing to remove customer names.
>
> **[1:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=101)** The results are then inserted into the output database.
>
> **[1:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=105)** The batch will track the last retrieved timestamp for the batch.
>
> **[1:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=110)** This will then be used to begin the next batch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Audit trail: Scale the workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=0)** - [Instructor] We now have the basic workflow for the audit trail archive.
>
> **[0:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=5)** Let's now explore the possibilities of scaling this workflow for big data loads.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=11)** Let's start with the workflow that we created in the previous video.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=16)** We can create a single ETL job or process that can run the functions of reading input data, processing it, and then writing to the archive.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=26)** Given that it is a sequential process, and that the scale for each of these functions are the same, they can be combined into a single job.
>
> **[0:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=36)** What are the scaling opportunities in this workflow?
>
> **[0:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=40)** Rather than doing one query per batch, and then processing the results of this single query record by record, we can actually retrieve and process data concurrently.
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=52)** As each record is independent of each other with no need for cross-reference or aggregation, maximum parallelism can be introduced into the pipeline.
>
> **[1:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=63)** We can split a single batch into multiple mini batches based on specific attributes, and then run them concurrently.
>
> **[1:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=71)** For example, we can split up based on the user, country, or state, and then process them concurrently.
>
> **[1:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=79)** In order to do concurrent processing, the ETL job itself should support concurrent processing.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=85)** We should be able to run multiple threads or tasks concurrently, possibly on different nodes in the cluster.
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=93)** For the jobs to query the database, the source Oracle database should be able to support concurrent queries to the same table, which it does.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=103)** Similarly, the output database should also be able to support concurrent inserts from these tasks.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=111)** We should choose the processing job and output database technologies such that these scaling requirements are supported out of the box.
>
> **[2:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=121)** Let's also explore if there are any scaling limitations that we should be concerned about.
>
> **[2:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=127)** As discussed before, there is a limit on how much load the archival pipeline can create on the source database, so we need to limit the number of concurrent connections that we can create on the Oracle database from the batch pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** etl (2)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Audit trail: Select technologies
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=0)** - [Instructor] With a scalable workflow in place, it's now time to choose the right technologies for the audit trail archive use case.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=9)** Let's start with the workflow we have already designed.
>
> **[0:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=13)** We are already given the technology for the input which is an Oracle database.
>
> **[0:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=18)** We do not have an option here to choose otherwise.
>
> **[0:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=22)** We need to select the processing technology for the ETL process.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=26)** It should be able to provide the features that we discussed for scaling out of the box.
>
> **[0:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=33)** Similarly, we need to select an archive database.
>
> **[0:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=36)** Let's proceed with this evaluation.
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=39)** For the output archival database, let's start with a few options.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=45)** We will have MySQL, which is an RDBMS.
>
> **[0:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=48)** Then we will have MongoDB which is a NoSQL document database.
>
> **[0:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=53)** Finally, we have a combination of HDFS with the Impala query engine.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=59)** Let's now list down the criteria and evaluate the options against these criteria.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=65)** Rather than provide specific scores, we will instead use a color scheme of green, orange, and red.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=72)** The first criteria is if the technology choice can scale to 10 terabytes, which is the volume requirement for the use case.
>
> **[1:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=80)** MySQL scalability at the terabyte level is limited.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=85)** Both MongoDB and HDFS can scale to this requirement.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=90)** We are keeping the discussions on this technologies short and the learner is recommended to seek documentation from these technologies to understand their capabilities and limitations.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=103)** The next criteria is if it is cheap to acquire and manage.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=108)** All three technologies are open source if you consider using MariaDB instead of MySQL.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=114)** They are all cheap to acquire.
>
> **[1:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=117)** However, MySQL may have higher overhead as it would need administration for backups to provide redundancy.
>
> **[2:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=126)** We need ad hoc querying with a SQL-like interface as a requirement for the use case.
>
> **[2:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=132)** All three options provide this capability.
>
> **[2:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=135)** We finally get to a non-functional requirement like product maturity.
>
> **[2:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=141)** Organizations may demand investing in mature products to protect investment and avoid problems.
>
> **[2:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=149)** All three again qualify for this criteria.
>
> **[2:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=152)** Based on the evaluation, we will pick HDFS plus Impala as the option.
>
> **[2:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=158)** Even if MongoDB scored similarly, HDFS is cheaper and scalable than MongoDB.
>
> **[2:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=166)** This selection and evaluation is for illustrative purposes only to explain the process of selection.
>
> **[2:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=173)** We can always debate if these are the right set of choices, criteria, and scores.
>
> **[2:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=179)** We then move on to evaluate technologies for the extract load job.
>
> **[3:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=185)** Here, we select two popular options for batch processing jobs.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=190)** Apache Pig is a legacy processing engine based on Hadoop.
>
> **[3:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=194)** Apache Spark is arguably the top option for building batch jobs.
>
> **[3:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=199)** Given that we need to read data from an RDBMS, it is desired to have out-of-the-box RDBMS support in the processing engine.
>
> **[3:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=209)** Both Pig and Spark provide that capability.
>
> **[3:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=213)** Similarly, we need to write data to HDFS which is what we choose as our output database, so we want out-of-the-box support for it.
>
> **[3:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=224)** Both Pig and Spark again provide the capability.
>
> **[3:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=228)** To scale for data volumes, we need these technologies to split a job into tasks and run them concurrently.
>
> **[3:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=236)** Again, both technologies can do this.
>
> **[3:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=239)** Finally, we want performance.
>
> **[4:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=242)** Apache Pig runs internally as MapReduce jobs and uses disk extensively, so it is very slow compared to Apache Spark as Spark runs in memory.
>
> **[4:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=254)** Based on this table, we will choose Apache Spark as the technology for our ETL job.
>
> **[4:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=261)** This completes our technology discussion for the audit trail data archive.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (3), finally, (2), interface (1), this. (1)
> **Env Vars:** hdfs (5), rdbms (3), etl (2), sql (1)
> **CLI Commands:** apache (5), mysql (4)
> **Definitions:** is an  (2), is a  (2)
> **Cross-References:** we discussed (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Audit trail: Review final architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture that we have built for the audit trail archive use case.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=7)** The workflow for the pipeline is a simple sequence flow.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=12)** The source is an Oracle database.
>
> **[0:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=15)** The ETL process will run on Apache Spark.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=19)** The final archive will be created using HDFS with Impala being the query engine.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=26)** Let's look at some salient features of this architecture.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=31)** Spark has native integrations with both the RDBMS and HDFS.
>
> **[0:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=37)** This allows to execute queries concurrently and also write data concurrently leveraging native capabilities.
>
> **[0:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=46)** We can divide up the ETL operations between multiple Spark tasks in a Spark cluster.
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=52)** They can read data concurrently from the database, possibly based on audit record IDs or country or state codes.
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=61)** For example, each task can choose records based on a hashing algorithm on the record IDs.
>
> **[1:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=67)** Similarly, each thread can write to different HDFS partitions, again based on a hashing algorithm on record IDs.
>
> **[1:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=76)** This enables concurrency of writes.
>
> **[1:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=79)** We would also organize HDFS folders by date.
>
> **[1:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=83)** This will provide natural indexing for queries, as queries are usually date range based.
>
> **[1:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=89)** This also helps in pruning old data.
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=93)** Both Apache Spark and HDFS provide horizontal scaling, so we can increase capacity by simply adding more nodes.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=102)** This completes our first use case for the course.
>
> **[1:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=105)** I have given an outline for the architecture process for illustrative purposes only.
>
> **[1:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=111)** I strongly recommend more in-depth analysis of the requirements and scaling and technology options.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (5), etl (2), rdbms (1)
> **Code Keywords:** let (2), case. (1)
> **CLI Commands:** apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Use Case 2: Advertising Analytics

#### Advertising analytics: Define the problem
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=0)** - [Instructor] Let's now dive into the second use case for batch big data engineering, advertising analytics.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=7)** Let's start with the problem We are trying to solve.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=11)** ABC Company markets its products through advertisements through multiple channels.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=16)** They send direct emails to potential customers.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=20)** They do direct emailing by using an enterprise campaign management product which they have purchased and set up in their company.
>
> **[0:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=30)** They also do advertisements on the company's e-commerce website.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=35)** This e-commerce store is hosted by a cloud provider.
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=39)** These advertisements are popped up to users based on their browsing history.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=45)** Overall, they generate one million emails a day and 0.75 million advertisements a day.
>
> **[0:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=53)** Typically, a company could use many more channels like social media and television but we are limiting here to just two channels for illustrative purposes.
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=64)** The company wants to understand the effectiveness of these campaigns.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=68)** A popular metric in advertising is the click-through rate or CTR.
>
> **[1:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=74)** This is the ratio of the number of emails or ads shown to the customer to the number of emails or ads they actually viewed.
>
> **[1:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=83)** The company wants to analyze CTR by product, customer age group, and the gender.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=90)** The challenge the company is facing is aggregating such large volumes of data across multiple platforms and consolidating them into a single insight.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=102)** So what are we tasked with here?
>
> **[1:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=105)** We need to create a data pipeline that can aggregate data from the email and e-commerce advertisement channels and compute overall CTR.
>
> **[1:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=116)** What are the key goals for this use case?
>
> **[1:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=119)** It should be able to accommodate expanding sources.
>
> **[2:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=123)** If they add social media advertising tomorrow, it should be possible to add that capability easily into the pipeline.
>
> **[2:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=131)** Aggregation should be done across all channels on a daily basis.
>
> **[2:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=136)** We need to provide SQL based access to the insights created.
>
> **[2:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=141)** It should be possible to integrate out of the box business intelligence tools easily to the insights available.
>
> **[2:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=150)** Let's now proceed to analyze the requirements further.

> [!info]- Semantic Content
>
> **Env Vars:** ctr (3), abc (1), sql (1)
> **Code Keywords:** let (3)
> **Versions:** 0.75 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Advertising analytics: Study requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=0)** - [Instructor] Let's now proceed to analyze the requirements for the advertising analytics use case.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=6)** Let's review the inputs available for this pipeline.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=10)** The e-commerce website runs on a cloud e-commerce platform.
>
> **[0:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=15)** This platform provides APIs to download details about the advertisements shown, including user response and demographics.
>
> **[0:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=25)** The API has a rate limit and can be invoked once every 15 minutes, so it allows batch downloads only in JSON format.
>
> **[0:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=36)** The enterprise email campaign management product also supports data extractions through an API.
>
> **[0:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=44)** It provides details of each email sent and the response for the email as CSV extracts.
>
> **[0:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=51)** It also includes the demographics of the customer.
>
> **[0:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=55)** These are available as intraday downloads from the campaign management product.
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=61)** What about the output we want to create?
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=64)** We need to provide the analytics through a database with SQL access.
>
> **[1:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=69)** It provides only aggregate information about the advertisements.
>
> **[1:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=74)** This aggregate information contains the date of the ad or email, channel in which it was provided, demographics information like product, age group, gender, and then information to compute CTR, including the number of times it was offered and the response from the customer.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=94)** What is the pipeline that is expected to transform these inputs to the outputs?
>
> **[1:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=100)** It needs to acquire data from the external sources and cache the detailed records.
>
> **[1:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=106)** It should then aggregate the details available on a daily basis and compute summaries.
>
> **[1:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=112)** The summaries should be stored in an analytics database.
>
> **[1:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=116)** SQL access need to be provided to the stored summary data.
>
> **[2:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=121)** It is expected that business intelligence tools can use this access easily to integrate with the database.
>
> **[2:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=129)** The cache should be pruned periodically to keep the cache sizes small.
>
> **[2:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=134)** How about the non-functional requirements for the use case?
>
> **[2:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=138)** When it comes to scalability, we need to handle one million emails per day and 0.75 million advertisements per day.
>
> **[2:27](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=147)** The aggregates need to be stored for three years.
>
> **[2:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=150)** For latency, day summary should be available within 24 hours after the day has passed.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=157)** Redundancy is required for the data stored in the summary tables and the pipeline, but downtimes of less than one hour should be acceptable in general.
>
> **[2:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=168)** For security and privacy, we use authenticated access to the input sources and the output destinations.
>
> **[2:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=176)** Given that the summaries are not capturing private information about customers, we don't need a privacy design.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), sql (2), json (1), csv (1), ctr (1)
> **Code Keywords:** let (2), case. (1), private (1)
> **Versions:** 0.75 (1)
> **Speakers:** - [instructor] (1)

#### Advertising analytics: Create a workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=0)** - [Instructor] We now have the requirements, for the advertising analytics use case.
>
> **[0:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=5)** Let's proceed to create a draft workflow for the use case.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=9)** We have two data sources, and there is associated processing for these data sources.
>
> **[0:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=15)** Given that even in the output, the results obtained, from these data sources are captured individually, with each channel being the distinguishing attribute, we can build individual pipelines for this use case.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=31)** Let's start with the e-commerce advertisements source.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=35)** We need to have a batch process to fetch data, from the e-commerce platform.
>
> **[0:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=40)** This extracted data is cached in a temporary local cache.
>
> **[0:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=45)** Do note that this is not a memory cache, but a file-based temporary store to hold the data, until summaries can be computed.
>
> **[0:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=55)** A daily summarizer process, will run on this data for the day.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=59)** With the data available in the cache, the summarized data for CTR will then be updated into the analytics database.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=68)** Similarly, we also have the campaign management platform, providing email campaign data.
>
> **[1:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=74)** We will have a batch data extraction process, that will extract data periodically, from the campaign management platform.
>
> **[1:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=83)** This data is stored in a temporary cache.
>
> **[1:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=86)** A daily summarizer process will execute, to summarize the data from the cache, and updated into the analytics database.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=94)** As seen here we have two distinct pipelines, from the sources.
>
> **[1:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=99)** We could alternatively create a single cache, and combine the summarizer process.
>
> **[1:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=104)** Having distinct pipelines help to develop, and scale them independently, with less choke points and more flexibility.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), let (2)
> **Env Vars:** ctr (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Advertising analytics: Scale the workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=0)** - [Instructor] Let's now scale the advertising analytics workflow to handle the expected data loads.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=7)** Let's first define the batch jobs in the workflow.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=10)** We will have an ads data extractor job that will connect to the e-commerce platform API, and download advertisement data records for the day.
>
> **[0:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=21)** And ads data summarizer job will run every day to summarize the advertisements in the temporary cache.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=28)** And email extractor job will run periodically to download email campaign data from the campaign management platform.
>
> **[0:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=37)** An email daily summarizer job, will summarize the email data available in the temporary cache.
>
> **[0:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=44)** What scaling opportunities are available to us in this workflow?
>
> **[0:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=48)** Horizontal scaling of the extractors and summarizers, is necessary for the pipeline to scale up to the expected volumes.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=57)** For this, these jobs should run multiple task instances and divide up the work.
>
> **[1:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=64)** Work distribution can happen based on product, age group, and gender attributes as a composite key.
>
> **[1:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=71)** Each input record has these attributes, so work can be distributed accordingly.
>
> **[1:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=77)** Data extractors from the sources, can potentially run multiple threads to extract subsets of data by this composite key.
>
> **[1:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=86)** The temporary data caches can be organized by the same composite key either as indexes or directories.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=94)** The summarizers can run parallel tasks, and work distribution can again happen, based on the composite key.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=102)** The analytics database should provide for concurrent writes, by individual summarizer tasks based on the composite key.
>
> **[1:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=110)** This will ensure that the entire pipeline, can elastically scale to handle the data volumes.
>
> **[1:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=117)** What limitations exist that need to be taken care of?
>
> **[2:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=121)** The extraction APIs supported by the sources have rate limiting.
>
> **[2:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=126)** This limits the number of requests that can be made to the API in a given period, so there cannot be too many concurrent threads requesting or querying data.
>
> **[2:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=137)** The number of concurrent threads and the total number of requests, should be designed to work within the rate limits of these APIs.
>
> **[2:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=146)** The technology used for the temporary file cache and the analytics database, can also limit the amount of distributed processing available.
>
> **[2:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=156)** Hence, we need to choose the right technology for these databases to enable scalability.
>
> **[2:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=162)** We will do so in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** api (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Advertising analytics: Select technologies
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=0)** - [Instructor] Having scaled the workflow for the advertising analytics pipeline, let's now choose technologies for the components in the pipeline.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=9)** Let's start with the pipeline we have designed so far.
>
> **[0:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=13)** We need to use an extraction technology for both the extractor jobs.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=19)** Then, we need to select a storage technology for the temporary cache.
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=24)** Then, we need to select a processing technology for the summarizer job.
>
> **[0:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=29)** Finally, we need to select an analytics database technology.
>
> **[0:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=34)** Let's proceed to do the evaluation and selection.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=38)** We begin with the extraction jobs.
>
> **[0:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=41)** Both the input sources come in the form of a custom API that is provided by the input source platform.
>
> **[0:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=48)** They have unique API signatures, availability, content, and format.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=54)** There are also rate limiting considerations which vary between the sources.
>
> **[1:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=60)** For extracting data from these APIs, out-of-the-box technologies or utilities may not be available or suitable.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=68)** Sometimes the API provider may provide an SDK but not a full-fledged scalable extraction service.
>
> **[1:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=76)** Hence, it is recommended to build a custom extraction client for this job.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=81)** The extraction client can be built using a high level programming language like Java or Python.
>
> **[1:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=88)** It can implement custom horizontal scaling through concurrent threats or processes.
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=95)** Next, we look at the technology for extraction temporary cache.
>
> **[1:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=100)** This is not an in-memory cache but a temporary holding store for the extracted data.
>
> **[1:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=106)** The temporary cache is going to store data in its granular format so there is a lot of data here, even for a single day.
>
> **[1:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=115)** For technology alternatives, we will look at MySQL which is an RDBMS and HDFS which is a scalable file system.
>
> **[2:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=125)** Let's evaluate these technologies for the temporary cache.
>
> **[2:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=130)** Given the data volumes, we want horizontal scaling as a key feature.
>
> **[2:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=135)** MySQL has limited scaling in storage, while HDFS can scale up to petabytes of data.
>
> **[2:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=141)** The technology should be cheap to acquire and manage.
>
> **[2:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=145)** MySQL can be acquired as an open source version with MariaDB but it still needs a database administrator to manage the instance and backups.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=157)** We should be able to organize data and query data based on the keys we discussed before.
>
> **[2:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=162)** Both these technologies provide that option.
>
> **[2:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=166)** We also would like to bring in a mature technology and both these options will fit that requirement.
>
> **[2:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=173)** We will choose HDFS as the option based on this table.
>
> **[2:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=178)** Next, moving on to the processing job.
>
> **[3:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=181)** Given that the requirements for the processing engine technology is similar to the previous audit trail archival use case, we will use the same choice, namely Apache Spark for building the summarization job.
>
> **[3:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=195)** Finally, we look at technology options for the analytics database.
>
> **[3:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=200)** This database is only going to store daily summaries based on a few categories like channel, product type, et cetera.
>
> **[3:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=208)** So the volume requirements are not that high.
>
> **[3:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=212)** We can do away with the need for horizontal scaling for this technology.
>
> **[3:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=217)** We will choose MySQL, MongoDB, and HDFS + Impala as the three options to evaluate.
>
> **[3:45](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=225)** We need concurrent right access to the database so that concurrent tasks in the summarization job can write data concurrently to this database.
>
> **[3:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=234)** All three databases are good here.
>
> **[3:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=237)** We need SQL-based query access to the database and all the three options provide that.
>
> **[4:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=244)** We desire powerful out of the box analytics capabilities so that analysts can run powerful queries on this data to extract insights.
>
> **[4:14](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=254)** MySQL provides an excellent set of functions within its SQL.
>
> **[4:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=259)** Comparatively, MongoDB and Impala provide limited such capabilities only.
>
> **[4:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=265)** We need to integrate BI tools to these databases and all three of them are capable of such integration.
>
> **[4:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=272)** Based on this table we chose MySQL as the analytics database option.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (4), api (3), sql (2), sdk (1), rdbms (1)
> **CLI Commands:** mysql (6), python (1), apache (1)
> **Code Keywords:** let (4), finally, (2), case, (1), type, (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Advertising analytics: Review final architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture for the advertising analytics use case.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=6)** We will build a custom data extractor for extracting data from both the sources.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=12)** HDFS will be used as the temporary data store.
>
> **[0:16](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=16)** Apache Spark will be used to build the daily summarizer job.
>
> **[0:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=20)** MySQL will serve as the analytics database.
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=24)** Let's review some salient decisions we made in this use case.
>
> **[0:29](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=29)** We choose to use custom extractors to extract data from the source APIs in order to adopt to their unique API signatures and manage rate limits.
>
> **[0:39](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=39)** On HDFS, we will create folders based on the composite key we decided in the workflow design.
>
> **[0:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=46)** This will allow for concurrent inserts and queries on these folders by independent tasks at the same time.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=54)** Apache Spark can scale independently based on the data volumes.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=58)** It also has native integrations to both HDFS and JDBC that will help extend parallelism to both the source and the destination.
>
> **[1:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=68)** Finally, since summary data only had limited volume, MySQL should be sufficient to store and query the analytical results.
>
> **[1:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=77)** This concludes our second use case.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), let (2), finally, (1)
> **Env Vars:** hdfs (3), api (1), jdbc (1)
> **CLI Commands:** apache (2), mysql (2)
> **Speakers:** - [instructor] (1)


### 6. Use Case 3: Product Recommendations

#### Product recommendations: Define the problem
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=0)** - [Instructor] We now move to the final use case for the Batch Big Data Engineering product recommendations.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=7)** Let's begin by discussing the problem to solve.
>
> **[0:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=10)** XYZ is a popular global e-commerce website that sells several household products to its customers.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=19)** It has about 10 million active users, and thus around 200,000 transactions a day.
>
> **[0:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=26)** XYZ wants to increase its sales through product recommendations.
>
> **[0:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=32)** When a customer is browsing its e-commerce website, XYZ wants to pop up product recommendations based on what the customer would be interested in.
>
> **[0:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=43)** Recommendations are decided by a machine learning model that uses the customer's past history, and demographics to create a recommendation list.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=54)** This model is available through an API service.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=58)** What is the objective of the use case?
>
> **[1:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=61)** It is to create a data pipeline that can generate custom product recommendations based on user transactions.
>
> **[1:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=69)** It needs to prepare input data.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=72)** Call the model API to get recommendations.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=75)** And then store these recommendations in a database.
>
> **[1:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=78)** What are the goals for this architecture?
>
> **[1:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=82)** The architecture should scale to the user base.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=85)** This means it would potentially need to create, and maintain recommendations for 10 million users.
>
> **[1:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=92)** The recommendations should be updated daily based on new data available about the users and transactions.
>
> **[1:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=100)** It should consider both the recent transaction history of the customer, as well as demographics of the customers.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=108)** The recommendations should be available in a database that supports low latency retrieval for real-time display in a customer browsing session.

> [!info]- Semantic Content
>
> **Env Vars:** xyz (3), api (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Product recommendations: Study requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=0)** - [Instructor] Let's now proceed to study the requirements of the product recommendations use case in detail.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=7)** Let's begin with the inputs.
>
> **[0:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=9)** The first input is customer demographics.
>
> **[0:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=13)** The company maintains a customer database that contains demographic information about the customer including gender, age, income, et cetera.
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=24)** This is available in an RDBMS database and data can be extracted to a SQL query.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=31)** Then we have customer transactions.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=35)** This contains information about what the customer bought on a e-commerce website including product name, price, et cetera.
>
> **[0:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=43)** This transaction information is available through a Kafka topic.
>
> **[0:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=49)** We then move to the output.
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=52)** The product recommendation for each customer should be available in a database.
>
> **[0:57](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=57)** It should be possible to query the database using the customer ID and extract the relevant recommendations.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=65)** The database would contain information about the list of recommendations for the customer, along with the ranking for the recommendations.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=75)** The database should allow real-time, low latency queries so that recommendations can be pulled up in real time.
>
> **[1:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=83)** The output database should scale beyond the current 10 million users based on the customer base growth.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=90)** So what is the pipeline expected to do with the inputs?
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=95)** The pipeline needs to collect customer transactions and archive the recent transaction history.
>
> **[1:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=102)** Then it needs to update the recommendations for the customers based on the new data available.
>
> **[1:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=108)** For this, it would look for the list of customers who had transactions for the given day.
>
> **[1:55](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=115)** For each such customer, it should extract relevant demographics, along with the past transaction history.
>
> **[2:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=122)** It'll then call the recommendation model through its API and get the list of recommendations.
>
> **[2:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=128)** This is then updated in the recommendations database.
>
> **[2:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=133)** What about non-functional requirements for this use case?
>
> **[2:18](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=138)** There are expected to be 10 million active customers and 200,000 transactions in a given day.
>
> **[2:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=146)** We need to store the transaction history for the past three years.
>
> **[2:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=151)** For latency, the recommendations should be updated within 24 hours for the previous day.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=157)** Redundancy is required for the recommendations database.
>
> **[2:41](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=161)** So it provides 24/7 access for the e-commerce site.
>
> **[2:46](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=166)** The pipeline itself could be down for less than an hour if needed for maintenance or unforeseen issues.
>
> **[2:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=174)** The security requirement is to provide authenticated access to the input sources and the databases in the pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** rdbms (1), sql (1), api (1)
> **Speakers:** - [instructor] (1)

#### Product recommendations: Create a workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=0)** - [Instructor] Let's now proceed to create a workflow for the product recommendations batch pipeline.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=6)** Do note that the recommendations API is a service that is outside the pipeline.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=12)** The pipeline will merely use it as an external service to obtain recommendations and rankings.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=19)** We begin with the input Kafka topic for customer transactions.
>
> **[0:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=25)** We will first extract the transactions periodically from this topic and archive it.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=31)** We will use a transactions history database that can archive transactions by each customer.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=38)** We then have the second input, which is customer demographics.
>
> **[0:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=42)** This is available to us as an RDBMS table and can be accessed through a SQL query.
>
> **[0:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=49)** Then, on a daily basis, we will extract transaction history and customer demographics for customers who had new transactions for the previous day.
>
> **[0:59](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=59)** We merge this data for each customer.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=62)** Then, we will create recommendations for these customers.
>
> **[1:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=66)** We will invoke the recommendations model API for each customer by providing the transaction history and demographics as input.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=75)** The model will return the product recommendations list along with the ranking.
>
> **[1:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=79)** This recommendation is then updated into the recommendations database.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), rdbms (1), sql (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Product recommendations: Scale the workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=0)** - [Instructor] Let's now proceed to scale the workflow for the product recommendation use case.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=6)** We will start off with the workflow we created in the previous video.
>
> **[0:11](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=11)** A transactions archiver job can be built to perform the transactions archival process from the Kafka topic to the transactions history database.
>
> **[0:22](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=22)** A recommendations generator job can be used to both merge data for each customer with new transactions and create recommendations for the customers.
>
> **[0:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=33)** One design option is to split this job into two jobs, but both jobs will have similar scaling requirements as both work on customers one at a time, so we can combine them together.
>
> **[0:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=47)** What scaling opportunities do we have for the product recommendations workflow?
>
> **[0:52](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=52)** The transactions archiver job can scale to run multiple concurrent tasks.
>
> **[0:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=58)** Since its input is a Kafka topic, Kafka partitions can be shared between task notes in the job.
>
> **[1:05](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=65)** If the Kafka partition key is the custom priority, then it serializes all transactions for a given customer into a single task.
>
> **[1:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=75)** The transactions history database should support concurrent inserts so that each task can insert data without waiting for the other tasks.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=85)** Similarly, the recommendation generator job can also run concurrent tasks.
>
> **[1:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=90)** Each customer can be handled independently to generate recommendations.
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=95)** So for each batch, the list of customers with new transactions can be extracted and distributed across nodes.
>
> **[1:44](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=104)** Then each node can proceed to generate recommendations independently.
>
> **[1:49](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=109)** The source and destination databases should support concurrent access.
>
> **[1:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=114)** Similarly, the recommendations model API should also allow concurrent requests so that they can serve the requesting tasks without delays.
>
> **[2:04](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=124)** What are the possible scaling limitations that we need to account for?
>
> **[2:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=129)** The recommendations model API's capacity may limit concurrency, so that needs to be checked with the data science team and sized accordingly.
>
> **[2:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=139)** Data merge between the transaction history and the customer demographics database can be expensive and may introduce latency.
>
> **[2:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=148)** Since the demographics database does not change frequently, demographics info can be cached and looked up for faster access.
>
> **[2:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=157)** The recommendations database should be update-friendly so that the same customer's record can be updated with new recommendations every time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1)
> **Env Vars:** api (2)
> **CLI Commands:** node (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Product recommendations: Select technologies
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=0)** - [Instructor] Having looked at scaling, let's now proceed to select the right technologies for this use case.
>
> **[0:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=7)** We will need to decide upon a storage technology for the history database.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=12)** Similarly, we need to decide upon a storage technology for the recommendations database.
>
> **[0:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=19)** We also need to pick a processing technology for the transactions archiver job and the recommendations generator job.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=28)** Let's begin with the transactions history database.
>
> **[0:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=31)** Data in this database should be grouped together by each customer with the ability to know if the customer has new transactions in the previous day.
>
> **[0:42](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=42)** We need to pick some choices that will help perform such queries.
>
> **[0:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=47)** We will pick MongoDB, MySQL, and HDFS as the options to evaluate here.
>
> **[0:54](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=54)** The first criteria is concurrent reads and writes that will help the processing jobs to run multiple concurrent tasks.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=62)** All three technologies allow for such reads and writes.
>
> **[1:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=66)** In order to group transactions for a given customer and maintain last transaction timestamps, we need the ability to organize them as parent/child records.
>
> **[1:17](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=77)** MongoDB allows nested documents.
>
> **[1:20](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=80)** MySQL allows multiple tables with foreign key relationships.
>
> **[1:25](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=85)** With HDFS, this kind of out-of-the-box relationship is difficult to achieve unless we create separate folders by customer.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=94)** Querying for the last updated timestamp is also not trivial.
>
> **[1:40](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=100)** The database should scale for big data volumes.
>
> **[1:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=103)** MongoDB and HDFS are a great fit here.
>
> **[1:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=107)** MySQL will have limitations.
>
> **[1:50](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=110)** For high availability again, both MongoDB and HDFS are natively redundant architectures, while MySQL again has limitations in ensuring 24/7 availability out of the box.
>
> **[2:03](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=123)** Based on this evaluation, we will pick MongoDB as the option.
>
> **[2:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=129)** Then comes the selection for the recommendations database.
>
> **[2:13](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=133)** This database has live records for each customer with recommendations being updated daily.
>
> **[2:19](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=139)** It should also provide fast querying capabilities.
>
> **[2:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=143)** As options, we will use Cassandra, a columnar NoSQL database, MySQL, an RDBMS, and HDFS with Impala for querying.
>
> **[2:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=153)** Let's run through the evaluation now.
>
> **[2:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=156)** The first criteria is the ability to update existing records based on the customer ID.
>
> **[2:43](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=163)** Both Cassandra and MySQL are update friendly, while HDFS is not.
>
> **[2:48](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=168)** We need the ability to perform fast querying by a given customer ID.
>
> **[2:53](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=173)** Cassandra provides fast access if customer ID is its record key.
>
> **[2:58](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=178)** MySQL can help here with indexes.
>
> **[3:01](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=181)** HDFS and Impala are limited when it comes to low latency queries.
>
> **[3:07](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=187)** The solution needs to scale for big data volumes.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=190)** MySQL is limited here, while Cassandra and HDFS will scale.
>
> **[3:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=195)** Again with high availability, Cassandra and HDFS are natively redundant architectures, while MySQL has limitations out of the box.
>
> **[3:26](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=206)** We will choose Cassandra as the recommendations database.
>
> **[3:31](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=211)** Then we move on to the processing job technology.
>
> **[3:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=215)** Given that the requirements for the processing engine technology is similar to the previous use cases, we will use the same choice, namely Apache Spark, for building the processing jobs.
>
> **[3:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=227)** Apache Spark is today the defacto standard for building batch processing applications so it's no surprise that we will end up with the same choice for all the three use cases.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (9), apache (2)
> **Env Vars:** hdfs (9), rdbms (1)
> **Code Keywords:** let (3), case. (1)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Product recommendations: Review the final architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture for the product recommendations use case.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=6)** So here is the final architecture with all the technologies identified in the workflow.
>
> **[0:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=12)** We have selected Apache Spark for the processing jobs, MongoDB for the transactions history database and Cassandra for the recommendations database.
>
> **[0:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=21)** How does this architecture stack up?
>
> **[0:24](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=24)** We use multiple database types in this architecture.
>
> **[0:28](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=28)** In general, we want to reduce the number of database types in a single architecture, but in this case, we need them to support specific requirements.
>
> **[0:38](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=38)** The processing jobs can leverage the querying and job distribution capabilities available in the Kafka and RDBMS inputs.
>
> **[0:47](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=47)** This helps improve scalability of the pipeline.
>
> **[0:51](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=51)** We are using a separate APA based product recommendation service.
>
> **[0:56](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=56)** It's also possible to embed the product recommendation service inside the Spark recommendations job.
>
> **[1:02](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=62)** The key decision point is coupling and if the pipeline big data and data science teams can work together closely or stay independent.
>
> **[1:12](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=72)** The transactions history database also would need pruning to remove old records that are no longer used for making predictions.
>
> **[1:21](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=81)** This completes the third use case for this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), case, (1)
> **Env Vars:** rdbms (1), apa (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Continuing to architect big data applications
> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=0)** - There's a lot you can learn and do with big data architectures beyond this course.
>
> **[0:06](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=6)** First, check out my real-time big data architecture course that deals with real-time use cases in the same pattern.
>
> **[0:15](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=15)** Second, try and implement some of the use cases you have learned and experience how the solution works.
>
> **[0:23](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=23)** Finally, try architecting similar solutions for some of your own use cases.
>
> **[0:30](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=30)** Data always intrigues me.
>
> **[0:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=33)** I bet it intrigues you too.
>
> **[0:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=35)** So let's keep exploring it and find better ways to move it and extract knowledge out of it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - there (1)


## Path Context

### In [[Master Data Engineering]]
← [[Tuning Kafka]] | **4 of 8** | [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] →

### In [[Advance Your Data Skills in Apache Spark]]
← [[Azure Spark Databricks Essential Training]] | **4 of 6** | [[Big Data Analytics with Hadoop and Apache Spark]] →

## Appears In

- [[Master Data Engineering]]
- [[Advance Your Data Skills in Apache Spark]]

## Related Courses

_Courses sharing skills:_

- [[Apache Spark Essential Training- Big Data Engineering]] — Big Data
- [[Python for Data Analysis- Solve Real-World Challenges]] — Big Data
- [[Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI]] — Batch Processing

---

[↑ Back to top](#)