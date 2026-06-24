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
  - '[Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)'
  - '[Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)'
prev_courses:
  - '[Tuning Kafka](Tuning%20Kafka.md)'
  - '[Azure Spark Databricks Essential Training](Azure%20Spark%20Databricks%20Essential%20Training.md)'
next_courses:
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
  - '[Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md)'
path_nav: '[{"path":"Master Data Engineering","position":4,"total":8,"prev":"Tuning Kafka","next":"Complete Guide to Python for Data Engineering- From Beginner to Advanced"},{"path":"Advance Your Data Skills in Apache Spark","position":4,"total":6,"prev":"Azure Spark Databricks Essential Training","next":"Big Data Analytics with Hadoop and Apache Spark"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/big-data
  - skill/batch-processing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Architecting%20Big%20Data%20Applications-%20Batch%20Mode%20Application%20Engineering.md)

![Architecting Big Data Applications: Batch Mode Application Engineering](https://media.licdn.com/dms/image/v2/D560DAQHDta61I-dsrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696456723105?e=2147483647&amp;v=beta&amp;t=wuE8jSC78C2FJTGGC7K_vaf1onkSI3Q9bORsIA-kEp8)

# Architecting Big Data Applications: Batch Mode Application Engineering

> Big data applications allow data scientists and analysts to acquire, store, manage, and use big data to generate more consistent, data-driven results. In this course, instructor Kumaran Ponnambalam explores real-world business use cases and best practices for architecting big data applications using existing open-source technologies.Learn how to architect both simple and complex batch processing a

> [LinkedIn Learning](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694) | 1h 28m | Advanced | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Architecting big data applications](#architecting-big-data-applications)
- [**1. Introduction to Big Data Applications**](#1-introduction-to-big-data-applications) (5 videos)
  - [Characteristics of batch processing](#characteristics-of-batch-processing)
  - [Challenges building batch applications](#challenges-building-batch-applications)
  - [Technologies for batch big data engineering](#technologies-for-batch-big-data-engineering)
  - [Use cases for batch big data](#use-cases-for-batch-big-data)
  - [Architecture process for data engineering](#architecture-process-for-data-engineering)
- [**2. Big Data Architecture Principles**](#2-big-data-architecture-principles) (5 videos)
  - [Making the choice: Real-time vs. batch](#making-the-choice-real-time-vs-batch)
  - [Horizontal scaling](#horizontal-scaling)
  - [Distributed processing](#distributed-processing)
  - [Technology selection](#technology-selection)
  - [Technology integrations](#technology-integrations)
- [**3. Batch Application Architecture Principles**](#3-batch-application-architecture-principles) (5 videos)
  - [Schedule selection](#schedule-selection)
  - [Minimizing data volumes](#minimizing-data-volumes)
  - [Uniform load distribution](#uniform-load-distribution)
  - [Using caches](#using-caches)
  - [Reprocessing](#reprocessing)
- [**4. Use Case 1: Audit Trail Data Archive**](#4-use-case-1-audit-trail-data-archive) (6 videos)
  - [Audit trail: Define the problem](#audit-trail-define-the-problem)
  - [Audit trail: Study requirements](#audit-trail-study-requirements)
  - [Audit trail: Create a workflow](#audit-trail-create-a-workflow)
  - [Audit trail: Scale the workflow](#audit-trail-scale-the-workflow)
  - [Audit trail: Select technologies](#audit-trail-select-technologies)
  - [Audit trail: Review final architecture](#audit-trail-review-final-architecture)
- [**5. Use Case 2: Advertising Analytics**](#5-use-case-2-advertising-analytics) (6 videos)
  - [Advertising analytics: Define the problem](#advertising-analytics-define-the-problem)
  - [Advertising analytics: Study requirements](#advertising-analytics-study-requirements)
  - [Advertising analytics: Create a workflow](#advertising-analytics-create-a-workflow)
  - [Advertising analytics: Scale the workflow](#advertising-analytics-scale-the-workflow)
  - [Advertising analytics: Select technologies](#advertising-analytics-select-technologies)
  - [Advertising analytics: Review final architecture](#advertising-analytics-review-final-architecture)
- [**6. Use Case 3: Product Recommendations**](#6-use-case-3-product-recommendations) (6 videos)
  - [Product recommendations: Define the problem](#product-recommendations-define-the-problem)
  - [Product recommendations: Study requirements](#product-recommendations-study-requirements)
  - [Product recommendations: Create a workflow](#product-recommendations-create-a-workflow)
  - [Product recommendations: Scale the workflow](#product-recommendations-scale-the-workflow)
  - [Product recommendations: Select technologies](#product-recommendations-select-technologies)
  - [Product recommendations: Review the final architecture](#product-recommendations-review-the-final-architecture)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing to architect big data applications](#continuing-to-architect-big-data-applications)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Architecting big data applications](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecting-big-data-applications?u=76281980&t=0)** - Architecting and building [Big Data](../../Skills/Data%20Science/Big%20Data.md) applications has some unique challenges. In this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, we will review these challenges and look at three real-life use cases for batch mode big data applications. In each use case, we will show you how to analyze a problem, draw an outline architecture, choose technologies, finish the architecture, and review some best practices. My name is Kumaran Ponnambalam. If you are a big data engineer, architect, or developer looking to architect batch mode big data applications, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - architecting (1)


### 1. Introduction to Big Data Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Characteristics of batch processing](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=0)** - Let's begin the course by discussing [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) fundamentals. What are the characteristics of batch processing? Batch processing in [Big Data](../../Skills/Data%20Science/Big%20Data.md) involves processing a high volume of data in batches. Batches are scheduled based on the availability of input data and processing results. The goal of batch processing is use case specific, but is about achieving specific business results. What are some of the key characteristics of batch processing? Batch processing applications, or schedule-driven. They typically run based on a calendar like every hour of the day. Sometimes they're also triggered based on the volume of input data available for processing. Data is processed one batch at a time. Each batch can contain several input records. The size of a batch is use case specific. There is usually high latency in these applications from when the input data is available to when outputs are derived from the batch application. An application may contain multiple jobs and each of these jobs can be scheduled to run at specific intervals processing batches of data. These applications process a high volume of data. Each batch can be of several gigabytes. When processing failures happen,
>
> **[1:32](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/characteristics-of-batch-processing?u=76281980&t=92)** the typical resolution is to fix the problem and reprocess data once again. Batch applications focus on ensuring [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). This means waiting until all input data is available and validating data and results at each stage in the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (6), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Speakers:** - let (1)

#### [Challenges building batch applications](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/challenges-building-batch-applications?u=76281980&t=0)** - [Instructor] What are the key challenges in building [Big Data](../../Skills/Data%20Science/Big%20Data.md) batch applications? When it comes to batch applications, big data, itself, is a key challenge. Batch big data applications handle very high volumes of input data. Storing, transporting, and computing activities require scale and efficiency. To speed up processing, concurrent processing is required to process high volumes of data in a short time. Enabling concurrency in design is a challenge. [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) may encounter errors and sometimes there could be missing data. Dealing with these problems at the big data scale is a challenge. [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) should be ensured throughout the application pipeline so that the results are trustworthy. Allocating resources in a way that they are efficiently utilized while minimizing delays is a challenge in managing costs. Big data pipelines pose challenges in monitoring and troubleshooting. Sorting through data volumes to identify issues and then resolving them in a timely manner is, again, a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (5), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)

#### [Technologies for batch big data engineering](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=0)** - [Instructor] What are the technologies available for building batch applications for [Big Data](../../Skills/Data%20Science/Big%20Data.md)? Fortunately, scalable and robust technologies are available today that do the heavy lifting in big data applications. Selecting the right technologies for a given use case, setting them up, and integrating them is the key design challenge for big data architects. We begin with [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) technologies available. Some of the popular ones are [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), Apache Flink, and Apache Pig. There are also cloud native technologies like AWS Batch and Apache Storm that are available. These [products](../../Skills/Software%20Development/Microsoft%20Products.md) are generally mature and highly scalable. They provide flexibility in programming, data processing, and deployment. Then comes [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) technologies. Several types of storage technologies are available like [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), distributed file systems, document [Databases](../../Skills/Software%20Development/Databases.md), columnar databases, graph databases, and distributed caches. Each of these technologies have their own advantages and shortcomings. The trick is to choose the right technology based on the data types and usage requirements. Then comes data interface technologies. These are required to acquire inputs from sources into the batch pipeline and also deliver outputs to downstream consumers.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technologies-for-batch-big-data-engineering?u=76281980&t=94)** Technologies include file transfer utilities, extract transform load clients that are usually built custom, data consuming APIs through which sources can push data, query interfaces through which data can be pulled in, and data serving APIs. The key to big data batch application architecture is to choose the technologies correctly and integrate them efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** apache (4), aws (1)
> **Env Vars:** aws (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Use cases for batch big data](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=0)** - [Instructor] What are some of the popular use cases for batch [Big Data](../../Skills/Data%20Science/Big%20Data.md)? [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) for big data has found its way into several business domains and verticals. Let's look at some popular use cases. Batch processing can be used to create and manage big data warehouses, where historical data, like transactions and logs, can be archived and analyzed. It can be used to consolidate data across hundreds of data centers and nodes around the world. For example, inventory updates from each retail store can be consolidated in a central data center on a daily basis. A customer 360 provides a complete view of all the interactions between a customer and an enterprise. This involves consolidation of data across several interaction channels, like websites, contact centers, social media, and store visits. This helps enterprises to understand customer behavior, and take actions to improve business and customer service. Domain-specific analytics involves analyzing transactions in a domain to understand trends and insights. For example, in [E-Commerce](../../Skills/Web%20Development/E-Commerce.md), batch processing can be used to analyze sales transactions and website hits by each product to determine how the product performs across geographies and customer types.
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/use-cases-for-batch-big-data?u=76281980&t=96)** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) is a growing critical component of machine learning pipelines. Big data pipelines play a critical role in acquiring large quantities of training data, and extracting features for machine learning. They are also used in machine learning inference for pre- and post-processing. Anonymous automated workflows is another key area where big data batch is playing a key role. For example, in order processing, the order is moved through the logistics pipeline from order placement to order delivery. During this process, status aggregation and reporting happens with batch applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (5), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (3), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Architecture process for data engineering](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=0)** - [Instructor] What is the process to follow while architecting applications using batch [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md)? Let's begin with the definition of data engineering. Data engineering is the methodical process of designing and building [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipelines that acquire, store, process, and analyze data to derive business outcomes. Data engineering provides a discipline in the architecture and design process that helps build efficient and effective pipelines. What does the architecture process look like? The first step is defining the use case. This involves clearly stating the problem to be solved, the expected solution, and the design goals. The goal would cover functional requirements, form and types of outputs, and benchmarks. The next step is to study the requirements thoroughly. This starts with understanding the outputs needed, including their form and type. Then inputs need to be analyzed for their form volume, data characteristics, and constraints. Non-functional requirements and limitations need to be defined, including scale, latency, and error rates. Then we get to create a workflow for the pipeline. The workflow is a straw man flowchart of the pipeline defining its acquisition, processing, and storage functions.
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/architecture-process-for-data-engineering?u=76281980&t=93)** It only focuses on functionality, not scale. Next, we get to making the workflow scalable by adding big data specific elements. Here we look at each function and scale it such that it can handle expected data volumes. Finally, we will select the right technologies and [products](../../Skills/Software%20Development/Microsoft%20Products.md) that will fit into the functions within the application. We will define selection criteria for the technology, evaluate alternatives, and then score them to make a selection. Later in the course, we will look at three use cases where we will follow this approach to create an architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Big Data Architecture Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [Making the choice: Real-time vs. batch](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=0)** - Having discussed the basics of [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) for [Big Data](../../Skills/Data%20Science/Big%20Data.md), in the previous chapter, we can now focus on some key architecture principles. In this chapter, we will focus on architecture principles that apply to both batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) big data applications. We start with making the choice, whether the application should be batch or realtime. A big data pipeline can be built as a batch or a realtime pipeline, irrespective of the latency requirements. A key architecture decision at the beginning of the effort, is to decide if the pipeline is going to be batch or realtime. This is a critical decision as it impacts latency, scale, cost, manageability and [Resiliency](../../Skills/Software%20Development/Resiliency.md) of the pipeline. Architects are in general excited about building pipelines as realtime pipelines, as it creates technical challenges for them. But it is important to understand some challenges with realtime pipelines before making that call. Realtime pipelines are even driven. When a new record appears in the input, the pipeline kicks off and proceeds to process that record. If the source data is generated at an uneven pace it'll create uneven loads on the pipeline. As a result, resources for real-time pipelines are allocated, considering peak load, not average load, in order to process with minimum latency,
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=95)** even when maximum spikes in input. This means a lot of resources are idling and that impacts costs. If a real-time pipeline is not processing data at the speed in which it arrives, back pressure will build up. This may impact the performance of upstream services generating the data. Monitoring real-time jobs is a challenge as there is a lot of transient data and states that cannot be isolated and reproduced easily for debugging. When failures happen in a continuous real-time pipeline, recovery while keeping the pipeline up is a challenge. To handle failures and downtimes, higher levels of redundancy of resources are required. This increases costs, so real-time pipelines should be used, only when the use case absolutely needs it. So how do we decide between batch and realtime pipelines? Choose batch pipelines when the acceptable latency for the pipeline is greater than 30 minutes. Choose realtime only when the business requires it. The latency requirements should be less than five minutes or so. Between five minutes and 30 minutes, make the call based on the use case with a preference for batch, even when latency requirements are low. Discuss with the users to see if they can accept more latency. Users usually prefer information as quickly as possible
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/making-the-choice-real-time-vs-batch?u=76281980&t=190)** but is there a real business value in producing the information with such low latency? An alternative to explore is hybrid pipelines. Sometimes the same input can be used for some real-time requirements and also historical requirements. In these cases, build separate pipelines for real-time and batch, with real-time only handling critical low latency requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (9), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - having (1)

#### [Horizontal scaling](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=0)** - [Instructor] Horizontal scaling is the primary technique that helps to scale a [Big Data](../../Skills/Data%20Science/Big%20Data.md) application to handle large volumes of data. What is horizontal scaling? Horizontal scaling is the process of increasing the capacity of an application by adding additional compute nodes and then distributing input data across these nodes. In horizontal scaling, it is expected that adding additional [Hardware](../../Topics/Hardware.md) results in an equivalent increase in processing capacity. This way, an application can scale up and scale down by managing resource allocation without additional [Software Development](../../Topics/Software%20Development.md). For example, if you have a three-node cluster, and then add two nodes to it, it should result in an equivalent capacity increase of around 66%. Adding additional nodes should not decrease the average capacity per node. However, the gains from scaling will plateau with decreasing results if bottlenecks exist in the design of the application. What kinds of bottlenecks are possible in big data processing? Operations that work on individual records usually scale horizontally without issues. This includes operations like map, filter, transform, and enrich. These operations work on a single record at a time without considering other records in the dataset. As a result, each record can potentially be processed by a different node.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=94)** More the node, more are the records that can be processed concurrently. On the other hand, aggregate operations can choke the system. This is because aggregations require multiple records to be processed together. For this to happen, all the records need to be processed in a single node. Global aggregations can only happen on a single node. For key-based aggregations, each key can be aggregated in an independent node. As data is consolidated in a single node, memory limitations may be hit and disc swapping can happen. All of this will result in very slow processing and limit the number of nodes that are used in the operation. Similarly, join and merge operations can also become bottlenecks since they also require two data sets to be processed together in a single node. Database locks that only allow sequential operations on data can also become bottlenecks at large concurrent volumes. What are some of the best practices for horizontal scaling? A lot of unwanted data exist in the input data including records or attributes. Remove them as early as possible in the pipeline to minimize data volumes downstream. Similarly, aggregate as late as possible after all the filtering is done, again, to minimize data volumes. For global aggregations, adding intermediate key-based aggregations, and then aggregating on the key-based aggregates,
>
> **[3:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/horizontal-scaling?u=76281980&t=189)** will help distribute the load. For example, to compute total order value for a given day, we can first compute product-based order totals that can be distributed. And then, summarize the product-based total to compute the global total. When join or merge operations are needed, explore other alternatives. If one of the dataset is small or static, lookups can be used to enrich the data set. Also, caching data sets can also help speed up joins. Use [Databases](../../Skills/Software%20Development/Databases.md) that allow independent concurrent inserts and updates. This usually happens if each node works on independent partitions on the database without locks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** node (10)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Distributed processing](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=0)** - [Instructor] Distributed processing, is another important principle, that helps build scalable [Big Data](../../Skills/Data%20Science/Big%20Data.md) applications. What is distributed processing? Distributed processing is about dividing a single large task into several subtasks and then distributing them, across multiple processing clusters. This follows the principles of [Microservices](../../Skills/Software%20Development/Microservices.md). Tasks are split into sub-tasks based on cohesion uncoupling, between the individual job steps. With distributed processing, each task can be developed and deployed independently. Horizontal scaling and resource allocation, is done by each job, which helps optimize resource utilization for the entire pipeline. How does distributed jobs apply in big data applications? In the case of big data processing, distributed processing involves, splitting a single large job into individual jobs, based on cohesion between job steps. In the example shown, a single job has four steps. We can then split them into three individual jobs, with the first job doing the filter, the second job doing the transform and enrichment, and the third job doing aggregation. The filter job will eliminate unwanted data, so that the second and third job, just have to handle lower data volumes. Similarly, running aggregation, on a separate jobs allows optimization of resources. Each job can then scale independently,
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/distributed-processing?u=76281980&t=94)** based on its own requirements and constraints. Intermediate data stores and message queues, can be used to pass data between these jobs. This distribution provides improved ability, to scale individual jobs based on expected volumes. For example, if job one eliminates 40% of the data, then job two will only need fewer resources, to deal with a smaller data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Technology selection](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=0)** - [Instructor] Most [Big Data](../../Skills/Data%20Science/Big%20Data.md) applications are primarily built using out-of-the-box technologies that provide the required [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and [Resiliency](../../Skills/Software%20Development/Resiliency.md). Choosing the right technologies for the use case is a set of critical decisions that can make or break the application. Let's briefly discuss the big data technology landscape. Several big data technologies have been developed in the past decade or more. They are a combination of open source enterprise [products](../../Skills/Software%20Development/Microsoft%20Products.md) and [software as a service](../../Glossary/Concept/SaaS.md) offerings. Multiple categories of technologies are available including processing engines, [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md), and message queues. Some of the popular technologies are [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) for processing data, [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) for message queues, [MongoDB](../../Skills/Software%20Development/MongoDB.md) for NoSQL databases, and [Redis](../../Skills/Software%20Development/Redis.md) for distributed cache. Each of these technologies have their own unique advantages and shortcomings. None of them are perfect in every criteria. Hence, there is no one-size-fits-all universal option. The exact choice of technologies depends upon the use case. So how do we select technologies in a methodical manner that helps us make objective data-driven decisions? The process starts with creating a list of criteria for the use case. The use case may require several types of technologies
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=94)** like databases and processing engines. For each such requirements, create a separate selection criteria. Keep the number of criteria to less than 10. Then, assign weights for each criteria as not all of them have the same importance in a given situation. Instead of weights, you can also use green, red, and orange flags based on suitability. Choose a list of technologies that would closely match the selection criteria. Evaluate the choices against this criteria, and assign a score for that technology against each criteria. Compute the weighted score. Then, add up the weighted scores to compute the total score. Finally, choose the technology with the best score. We will architect three use cases later in the course and we will demonstrate use of this methodology for these use cases. So what kind of criteria should we consider for making the list for a given technology? The first set of criteria is around the functional and non-functional requirements for the use case. This may be for a specific type of pattern, like map or filter, that the technology needs to support. There can be requirements around scale, latency and concurrency that the technology needs to support. Next comes cost. It is important to manage cost so that overall application is actually cost effective.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-selection?u=76281980&t=190)** Applications that do not carry critical business value may need to be built using low cost technologies even if they are not optimal. Technology maturity is an important criteria especially in today's open source world. Business critical applications may require mature technologies that are reliable and less prone to change. Experimenting with new technologies should be limited to non-critical use cases. All technologies require skilled personnel who can build deploy, and manage them. If there are too many unique technologies in an organization, then there needs to be investment to support them. Hence, consider minimizing the number of unique technologies across the organization. For example, if an organization requires six different types of databases across its big data use cases, then that creates significant resource overhead. Choose a new type of technology only when the existing ones cannot fulfill the requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (4), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **CLI Commands:** make (2), apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Technology integrations](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=0)** - [Instructor] Another key architecture area to focus on is integration between the out-of-the-box technologies. A single [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipeline may use multiple big data technologies. As shown in the example, a pipeline can use an input message queue like [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md). An [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) Job can read from the Kafka Queue, process data, and write results into the HDFS Data Store. Each technology may have individual [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and performance. In this example, each of them, namely Kafka, Spark and HDFS are massively scalable. But then, data needs to be passed between these technologies at the same scale. Integration between these technologies can become a bottleneck if it is not architected correctly. For example, Spark's actual processing throughput will be limited by the speed and concurrency at which it consumes messages from Kafka. So how do we ensure optimal integration between technologies? To begin with, look for out-of-the-box connectors between technologies in the selection process. If you have already selected Spark as the processing technology, then look for storage technologies that have out of the box scalable integration with Spark. Usually, out-of-the-box connectors that come built with the technology leverages the abilities of both the technologies to provide maximum throughput. For example, each Apache Spark task node can directly write
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/technology-integrations?u=76281980&t=96)** to an independent partition on HDFS Thus, multiple spark nodes can concurrently work with multiple HDFS nodes and their partitions without any bottleneck. It is recommended to do some research about the internals of these technologies to understand their limitations and then build integrations that optimize on their features and overcome limitations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** apache (3), node (1)
> **Env Vars:** hdfs (4)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Batch Application Architecture Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [Schedule selection](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=0)** - [Instructor] Having discussed some common architecture principles for [Big Data](../../Skills/Data%20Science/Big%20Data.md) applications in the earlier chapter, we will now focus on key principles for batch big data applications. We will begin with the key design decision, namely schedule selection. [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) jobs are scheduled to run periodically, usually based on a scheduler. They typically run every hour or every day. The Schedule Intervals choice plays a key role in determining the efficiency and effectiveness of batch jobs. Having small intervals, like every five minutes or 30 minutes provides low latency for getting the final results, but then they may also create significant overhead. Each batch usually has a fixed overhead irrespective of the volume of data. Smaller intervals increases this cost. Having intervals too large would mean that the resources are optimally used with minimum overall overhead, but that would increase the latency in getting the desired results. The use case typically determines what range of schedules can be used for a given job. This is based on the availability of input data, volume of pending data to be processed, and the latency requirements from the users. How do we select the right schedule choices for a given job? Choose intervals such that each batch
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/schedule-selection?u=76281980&t=96)** processes sufficient amounts of data, but not too much data, leading to processing and resource usage spikes. Provide enough buffer time between batches. Benchmark on how much time a batch would typically take to run, and add some buffer to it. If a single batch overruns, there is a buffer, so that the next batch will start on time. Issues may occur in batch processing, and data may need to be reprocessed. Providing a buffer to accommodate reprocessing will help reprocess all data without impacting the processing of new records. Multiple batch processing jobs can share the same resource pool, like the same [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) cluster, and the same [Hardware](../../Topics/Hardware.md) resources. Jobs can be scheduled in a staggered manner such that the resource pool is continuously used. This improves resource utilization while ensuring that there is no competition for resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (3), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** apache (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Minimizing data volumes](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=0)** - [Presenter] Removing unwanted data from the [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) pipelines helps in reducing processing costs. In [Big Data](../../Skills/Data%20Science/Big%20Data.md), the more data to be processed, more other resources required for processing. More just does not mean more records, but also the size of the record. More [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) requires more of the resources including CPU, memory, network, and bandwidth. The inputs to a big data pipeline are typically multipurpose inputs. This means the inputs are not specifically created for the pipeline, but rather created as a general purpose data source. For example, if you're building a pipeline to compute sales aggregates by each product, the input would be all orders. These orders may contain data like customer addresses and shipping information that is not required for computing aggregates by each product. A single input can actually drive multiple pipelines. The orders data will drive a product analytics pipeline, as well as an orders fulfillment pipeline. Significant amount of data in the input may not be needed for a specific pipeline. This may include rows or records that are not required for the pipeline. It may also have columns or attributes that are not needed for this pipeline. What are some of the best practices for minimizing data volumes? To begin with, explore if the input source can create inputs
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/minimizing-data-volumes?u=76281980&t=95)** that are specific to the pipeline containing only data that this pipeline needs, that eliminates unwanted data at the source. If it is a common input, then filter unwanted data yearly in the pipeline to minimize load. This includes both records, as well as attributes. If the source interface supports filtering capabilities, leverage them to minimize data coming into the pipeline. For example, if the source is an RDBMS database a WHERE class in the [SQL](../../Skills/Data%20Science/SQL.md) statement can filter out data at the source. Similarly, if the source is an HDFS Parquet file, we can use projections pushed down to execute filters at the HDFS level. This again, minimizes data coming into the processing engine. If BLOBS like tester images need to be processed, it's recommended to store them in a big data file system like HDFS or S3 and only pass around URLs to these objects during data transfer. This way, the BLOB is only read when it actually needs to be processed in the job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** hdfs (3), cpu (1), rdbms (1), where (1), sql (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2)
> **SQL:** where (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [presenter] (1)

#### [Uniform load distribution](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=0)** - [Instructor] Another key architecture goal for [Big Data](../../Skills/Data%20Science/Big%20Data.md) batch pipelines is distributing processing load evenly across the clusters. What is the significance of load distribution? Big data technologies are typically deployed in clusters whether it's [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) for processing, HTFS for storage, or [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) for queuing, they are deployed in clusters. As the load increases, we simply add more nodes to the cluster to scale horizontally, but will it really scale without degradation? A good load distribution strategy is critical for scaling a big data batch pipeline. The goal for such a strategy is to ensure that load is distributed evenly across all nodes in the pipeline. A bad strategy would result in some nodes getting choked and the others not used at all. Also, when new nodes are added to the cluster, the pipeline should scale horizontally without degradation in capacity. When it comes to big data, some functions like grouping or aggregation can limit load distribution even if nodes are available. So what are some of the load distribution strategies that can be employed in [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md)? Single record operations like map, filter, or transform operations can be distributed in a round robin basis across all nodes.
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=95)** Since these operations only work on a single record, there are no context or sequence requirements. When it comes to processing by a group like sequential processing of all events in a transaction, a key can be used to distribute load across nodes. Records with the same key will be processed at the same node. For aggregation operations, again, key-based distribution is essential to distribute the load. Global aggregations require records to be collected at a single node leading to choking. To alleviate this, multi-step aggregations with intermediate key-based aggregations can be used to reduce load on a single node. Keys play a critical role in distributing load across a cluster. The choice of key plays a critical role in ensuring horizontal [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Select keys such that the distribution of data between the keys is even. For example, using country as a key is a good choice if data volumes are distributed across all countries. But if 50% or more of the records are from a single country, it becomes a bad choice as the node processing that country will choke. Similarly, select keys such that it has many possible values. For example, if we use customer type as a key and there are only five types of customers,
>
> **[3:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/uniform-load-distribution?u=76281980&t=189)** then the maximum nodes that this distribution can scale will be only five. On the other hand, if we use a key like transaction ID and there are several thousand transactions a day, it will be distributed evenly across the nodes and can also scale. Also, use technologies that leverage keys to distribute [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) and grouping. RDBMS uses database columns for filtering and grouping. Similarly, folders and partitions can also be done based on keys, which enables concurrent processing of data using these keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (4), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** node (4), apache (2)
> **Env Vars:** htfs (1), rdbms (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using caches](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=0)** - [Presenter] Caches play a key role in reducing processing latency and enabling exchange of data quickly between processing entities. Data caches are a popular component of a [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipeline. These caching technologies allow ultrafast access to data compared to disk-based [Databases](../../Skills/Software%20Development/Databases.md). Distributed caches like [Redis](../../Skills/Software%20Development/Redis.md) also provides scaling and redundancy in a big data pipeline. In distributed caches, nodes can be set up closer to the processing node, sometimes within the same cluster or pod to minimize network traffic and hence latency. These data caches are excellent choices for static read-only data and transient data. For example, if we need a lookup table to map a given discount code to a discount rate, doing a cache lookup for each record is extremely quick as compared to a database query. Data caches do have size limitations on the amount of data they can store. They also need cache management to perch old data and keep the cache up to date. What are some of the best practices for using data caches in [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md)? We can use caches to store static or near-static data for fast data enrichment. For example, it can be used to do ID attribute mappings like getting the discount percentage for a product
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/using-caches?u=76281980&t=93)** and other related attributes. It can also be used for caching [Metadata](../../Skills/Web%20Development/Metadata.md) like threshold levels for alerting. Another use of data caches is to maintain transient data during processing. Distributed caches can be used to track global counters that can be read and updated by multiple processing nodes in a cluster. They can also store intermediate aggregations to reduce repeat processing and share data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Reprocessing](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=0)** - [Instructor] Reprocessing of data in a [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipeline is a critical function that needs to be optimally designed. Why do we need reprocessing of data? There can be infrastructure issues while running a bad job, like out of memory, network timeouts, or process crashes. There can be errors in earlier processing that necessiated a code change. This needs data to be reprocessed with the new code. Sometimes new late data might come in for a given batch that is already processed, the batch that needs to be reprocessed with the new data added. Developers may add some new logic or analytics and the requirement would be to reprocess old batches to implement them on old data. Whatever be the case, reprocessing is an element that is unavoidable and can prove to be a headache. It's recommended to rather architect the pipeline to allow reprocessing of old data. What are some of the best practices to enable reprocessing when needed? Ensure that a batch is repeatable. This means, if I rerun a batch, it'll treat the same set of input records and produce the same outputs. Batches should usually be bound based on date and time intervals. Don't prune the source data until a batch is considered final. If it is possible to get new records
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/reprocessing?u=76281980&t=93)** for a old batch in the next seven days, then keep the source data for seven days. Processing logic should not double count if reprocessing happens. Double counting happens if we use a counter to compute aggregates. Instead, aggregation should be done on the entire batch once again to recompute values from scratch. Hence, it is recommended to always aggregate by batches and store these aggregates too. This means, in reprocessing we don't need to recompute from scratch for the entire batch, but only those parts are keys that have changed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** recommended (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. Use Case 1: Audit Trail Data Archive

[↑ Back to Table of Contents](#table-of-contents)

#### [Audit trail: Define the problem](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=0)** - Having discussed some key architecture principles for [Big Data](../../Skills/Data%20Science/Big%20Data.md) batch pipelines in the previous chapters, let's build architectures for some use cases now by applying these principles. We will follow the architecture process discussed in chapter one. The use cases are only illustrative examples of the techniques and are not full fledged implementations. Our first use case is a simple one, called audit trail data archive. Let's begin the use case by first defining the problem for the data archive. Let's begin the use case by first defining the problem for the data archive. The ABC Company has an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) application that it uses to sell its [products](../../Skills/Software%20Development/Microsoft%20Products.md) to a large number of customers over the internet. It generates an audit trail of all the application events for future analytics of user behavior. The size of this trail is about 10 GB per day. Currently, an Oracle RDBMS database is used to store the audit trail for only 15 days. The storage is limited to 15 days because of limitations in [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of the RDBMS and also because of costs associated with additional storage within this database. But this 15 days archive is insufficient for any kind of analytics that are required.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-define-the-problem?u=76281980&t=94)** Analysts want access to three years worth of data. So here is the problem given to you. Create a data archive architecture that will be able to store audit trails for three years. This is around 10 terabytes of data. All use cases should have some functional and non-functional goals that need to be achieved with the architecture. Here are the goals for the audit data archive use case. It should be cheap to create and maintain this database. The data is not used for critical applications but only for offline analytics so it should be cost effective. It should be massively scalable to ingest process and serve this volume of data. It should support ad hoc querying capabilities that the analysts can use to run queries for data extraction and summarization. Let's now analyze the requirements further in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** rdbms (2), abc (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - having (1)

#### [Audit trail: Study requirements](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=0)** - [Instructor] Having defined the problem and goals for the audit trail use case, we will now proceed to study and analyze the requirements for the use case. We will begin by analyzing the characteristics of the inputs available for this audit [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipeline. As discussed earlier, the audit trail is available in an Oracle RDBMS database for 15 days before it is pruned. A single audit trail table contains the audit trail data. We may need joins with other tables for lookup reasons, but we are keeping the use case simple. Access to this data is available through [SQL](../../Skills/Data%20Science/SQL.md). Clients can connect to Oracle and execute SQL queries to extract the records. The data is available within the organizational trust boundary where the audit trail pipeline will also run. There are no special security considerations other than the access to the Oracle database. The load that the pipeline can put on this database is limited. Other concurrent applications are using this database for reads and writes, so access and processing capacity on the database are not exclusive. We then move on to the output that we should create. The audit trail should be archived for three years in a persistent data archive. The technology for this archive should be decided during the architecture process.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=94)** It stores the audit trail records extracted from the Oracle database. Access to this data should be available through a SQL or SQL-like interface. The archive should provide for cheap storage resources so we can keep huge data volumes for a long period of time. There are no specific performance or latency requirements for the queries. The third aspect to analyze is the functional requirements that determines how the inputs are transformed to the outputs. The audit trail archival pipeline will read records from the Oracle DB at periodic intervals. It will then remove any sensitive data attributes from the audit trail. In this case, it will be customer names if they are present in the data. The output of this processing is stored in the data archive. Access to the archive is provided through SQL. This list of functions are simple and straightforward. Finally, we get to analyze the non-functional requirements for the use case. We begin with [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). As discussed earlier, we need to handle about three GB of data per day and store it for three years. For latency, the data from the Oracle database should be available in the audit trail database within 24 hours. For high availability, redundancy is required for the audit trail data archive. The [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) can be down
>
> **[3:08](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-study-requirements?u=76281980&t=188)** for a maximum of one hour due to unplanned issues. Finally, when it comes to security and [Privacy](../../Skills/Data%20Science/Privacy.md), access to the audit trail archive should be provided only with required authentication. Also, customer names should be removed from the audit trail before storing in the archive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** sql (5), rdbms (1)
> **Speakers:** - [instructor] (1)

#### [Audit trail: Create a workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=0)** - [Instructor] Having analyzed the requirements for the use case, let's now begin the architecture process. We will first draw a workflow for the audit trail archive pipeline. At this stage, we are focused on executing [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) without any special considerations about the [Big Data](../../Skills/Data%20Science/Big%20Data.md) characteristics like data volumes and horizontal scaling. Let's now draw the workflow. The goal of the workflow is to create the output in an audit trail archive database. The input would be the existing Oracle database that stores the audit trail records. The first step in the workflow is to treat the pending audit trail records in batch. We will only query for new records that are not pushed to the archive yet. Then we will remove customer names from the audit trail records if they are present. Then results are returned to the audit trail archive database. This is a straightforward workflow. To reiterate the workflow, the batch pipeline will be triggered to run every hour. Given the large volume of data, it would be beneficial to run the batch in higher frequencies to process pending records. The pipeline will use username password authentication to connect to the source database. It'll execute a [SQL](../../Skills/Data%20Science/SQL.md) statement that is bound by the timestamp of the audit trail to [Fetch](../../Skills/Web%20Development/Fetch.md) for new records.
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-create-a-workflow?u=76281980&t=96)** It then does record by record processing to remove customer names. The results are then inserted into the output database. The batch will track the last retrieved timestamp for the batch. This will then be used to begin the next batch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Audit trail: Scale the workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=0)** - [Instructor] We now have the basic workflow for the audit trail archive. Let's now explore the possibilities of scaling this workflow for [Big Data](../../Skills/Data%20Science/Big%20Data.md) loads. Let's start with the workflow that we created in the previous video. We can create a single ETL job or process that can run the functions of reading input data, processing it, and then writing to the archive. Given that it is a sequential process, and that the scale for each of these functions are the same, they can be combined into a single job. What are the scaling opportunities in this workflow? Rather than doing one query per batch, and then processing the results of this single query record by record, we can actually retrieve and process data concurrently. As each record is independent of each other with no need for cross-reference or aggregation, maximum parallelism can be introduced into the pipeline. We can split a single batch into multiple mini batches based on specific attributes, and then run them concurrently. For example, we can split up based on the user, country, or state, and then process them concurrently. In order to do concurrent processing, the ETL job itself should support concurrent processing. We should be able to run multiple threads or tasks concurrently, possibly on different nodes in the cluster. For the jobs to query the database,
>
> **[1:36](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-scale-the-workflow?u=76281980&t=96)** the source Oracle database should be able to support concurrent queries to the same table, which it does. Similarly, the output database should also be able to support concurrent inserts from these tasks. We should choose the processing job and output database technologies such that these scaling requirements are supported out of the box. Let's also explore if there are any scaling limitations that we should be concerned about. As discussed before, there is a limit on how much load the archival pipeline can create on the source database, so we need to limit the number of concurrent connections that we can create on the Oracle database from the batch pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Env Vars:** etl (2)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Audit trail: Select technologies](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=0)** - [Instructor] With a scalable workflow in place, it's now time to choose the right technologies for the audit trail archive use case. Let's start with the workflow we have already designed. We are already given the technology for the input which is an Oracle database. We do not have an option here to choose otherwise. We need to select the processing technology for the ETL process. It should be able to provide the features that we discussed for scaling out of the box. Similarly, we need to select an archive database. Let's proceed with this evaluation. For the output archival database, let's start with a few options. We will have [MySQL](../../Skills/Software%20Development/MySQL.md), which is an RDBMS. Then we will have [MongoDB](../../Skills/Software%20Development/MongoDB.md) which is a [NoSQL](../../Skills/Software%20Development/NoSQL.md) document database. Finally, we have a combination of HDFS with the Impala query engine. Let's now list down the criteria and evaluate the options against these criteria. Rather than provide specific scores, we will instead use a color scheme of green, orange, and red. The first criteria is if the technology choice can scale to 10 terabytes, which is the volume requirement for the use case. MySQL [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) at the terabyte level is limited. Both MongoDB and HDFS can scale to this requirement. We are keeping the discussions on this technologies short and the learner is recommended to seek documentation
>
> **[1:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=97)** from these technologies to understand their capabilities and limitations. The next criteria is if it is cheap to acquire and manage. All three technologies are open source if you consider using MariaDB instead of MySQL. They are all cheap to acquire. However, MySQL may have higher overhead as it would need administration for backups to provide redundancy. We need ad hoc querying with a [SQL](../../Skills/Data%20Science/SQL.md)-like interface as a requirement for the use case. All three options provide this capability. We finally get to a non-functional requirement like product maturity. Organizations may demand investing in mature [products](../../Skills/Software%20Development/Microsoft%20Products.md) to protect investment and avoid problems. All three again qualify for this criteria. Based on the evaluation, we will pick HDFS plus Impala as the option. Even if MongoDB scored similarly, HDFS is cheaper and scalable than MongoDB. This selection and evaluation is for illustrative purposes only to explain the process of selection. We can always debate if these are the right set of choices, criteria, and scores. We then move on to evaluate technologies for the extract load job. Here, we select two popular options for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) jobs.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-select-technologies?u=76281980&t=190)** Apache Pig is a legacy processing engine based on [Hadoop](../../Skills/Data%20Science/Hadoop.md). [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) is arguably the top option for building batch jobs. Given that we need to read data from an RDBMS, it is desired to have out-of-the-box RDBMS support in the processing engine. Both Pig and Spark provide that capability. Similarly, we need to write data to HDFS which is what we choose as our output database, so we want out-of-the-box support for it. Both Pig and Spark again provide the capability. To scale for data volumes, we need these technologies to split a job into tasks and run them concurrently. Again, both technologies can do this. Finally, we want performance. Apache Pig runs internally as MapReduce jobs and uses disk extensively, so it is very slow compared to Apache Spark as Spark runs in memory. Based on this table, we will choose Apache Spark as the technology for our ETL job. This completes our technology discussion for the audit trail data archive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (4), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (3), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** hdfs (5), rdbms (3), etl (2), sql (1)
> **CLI Commands:** apache (5), mysql (4)
> **Definitions:** is an  (2), is a  (2)
> **Cross-References:** we discussed (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Audit trail: Review final architecture](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture that we have built for the audit trail archive use case. The workflow for the pipeline is a simple sequence flow. The source is an Oracle database. The ETL process will run on [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). The final archive will be created using HDFS with Impala being the query engine. Let's look at some salient features of this architecture. Spark has native integrations with both the RDBMS and HDFS. This allows to execute queries concurrently and also write data concurrently leveraging native capabilities. We can divide up the ETL operations between multiple Spark tasks in a Spark cluster. They can read data concurrently from the database, possibly based on audit record IDs or country or state codes. For example, each task can choose records based on a hashing algorithm on the record IDs. Similarly, each thread can write to different HDFS partitions, again based on a hashing algorithm on record IDs. This enables concurrency of writes. We would also organize HDFS folders by date. This will provide natural indexing for queries, as queries are usually date range based. This also helps in pruning old data. Both Apache Spark and HDFS provide horizontal scaling,
>
> **[1:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/audit-trail-review-final-architecture?u=76281980&t=97)** so we can increase capacity by simply adding more nodes. This completes our first use case for the course. I have given an outline for the architecture process for illustrative purposes only. I strongly recommend more in-depth analysis of the requirements and scaling and technology options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2)
> **Env Vars:** hdfs (5), etl (2), rdbms (1)
> **CLI Commands:** apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Use Case 2: Advertising Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Advertising analytics: Define the problem](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=0)** - [Instructor] Let's now dive into the second use case for batch [Big Data](../../Skills/Data%20Science/Big%20Data.md) engineering, advertising analytics. Let's start with the problem We are trying to solve. ABC Company markets its [products](../../Skills/Software%20Development/Microsoft%20Products.md) through advertisements through multiple channels. They send direct emails to potential customers. They do direct emailing by using an enterprise campaign management product which they have purchased and set up in their company. They also do advertisements on the company's [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website. This e-commerce store is hosted by a cloud provider. These advertisements are popped up to users based on their browsing history. Overall, they generate one million emails a day and 0.75 million advertisements a day. Typically, a company could use many more channels like social media and television but we are limiting here to just two channels for illustrative purposes. The company wants to understand the effectiveness of these campaigns. A popular metric in advertising is the click-through rate or CTR. This is the ratio of the number of emails or ads shown to the customer to the number of emails or ads they actually viewed. The company wants to analyze CTR by product, customer age group, and the gender. The challenge the company is facing is aggregating such large volumes of data
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-define-the-problem?u=76281980&t=95)** across multiple platforms and consolidating them into a single insight. So what are we tasked with here? We need to create a data pipeline that can aggregate data from the email and e-commerce advertisement channels and compute overall CTR. What are the key goals for this use case? It should be able to accommodate expanding sources. If they add social media advertising tomorrow, it should be possible to add that capability easily into the pipeline. Aggregation should be done across all channels on a daily basis. We need to provide [SQL](../../Skills/Data%20Science/SQL.md) based access to the insights created. It should be possible to integrate out of the box [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) tools easily to the insights available. Let's now proceed to analyze the requirements further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (3), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Env Vars:** ctr (3), abc (1), sql (1)
> **Versions:** 0.75 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Advertising analytics: Study requirements](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=0)** - [Instructor] Let's now proceed to analyze the requirements for the advertising analytics use case. Let's review the inputs available for this pipeline. The [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website runs on a cloud e-commerce platform. This platform provides APIs to download details about the advertisements shown, including user response and demographics. The API has a rate limit and can be invoked once every 15 minutes, so it allows batch downloads only in [JSON](../../Skills/Web%20Development/JSON.md) format. The enterprise email campaign management product also supports data extractions through an API. It provides details of each email sent and the response for the email as CSV extracts. It also includes the demographics of the customer. These are available as intraday downloads from the campaign management product. What about the output we want to create? We need to provide the analytics through a database with [SQL](../../Skills/Data%20Science/SQL.md) access. It provides only aggregate information about the advertisements. This aggregate information contains the date of the ad or email, channel in which it was provided, demographics information like product, age group, gender, and then information to compute CTR, including the number of times it was offered and the response from the customer.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-study-requirements?u=76281980&t=94)** What is the pipeline that is expected to transform these inputs to the outputs? It needs to acquire data from the external sources and cache the detailed records. It should then aggregate the details available on a daily basis and compute summaries. The summaries should be stored in an analytics database. SQL access need to be provided to the stored summary data. It is expected that [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) tools can use this access easily to integrate with the database. The cache should be pruned periodically to keep the cache sizes small. How about the non-functional requirements for the use case? When it comes to [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), we need to handle one million emails per day and 0.75 million advertisements per day. The aggregates need to be stored for three years. For latency, day summary should be available within 24 hours after the day has passed. Redundancy is required for the data stored in the summary tables and the pipeline, but downtimes of less than one hour should be acceptable in general. For security and [Privacy](../../Skills/Data%20Science/Privacy.md), we use authenticated access to the input sources and the output destinations. Given that the summaries are not capturing private information about customers, we don't need a privacy design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Env Vars:** api (2), sql (2), json (1), csv (1), ctr (1)
> **Versions:** 0.75 (1)
> **Speakers:** - [instructor] (1)

#### [Advertising analytics: Create a workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=0)** - [Instructor] We now have the requirements, for the advertising analytics use case. Let's proceed to create a draft workflow for the use case. We have two data sources, and there is associated processing for these data sources. Given that even in the output, the results obtained, from these data sources are captured individually, with each channel being the distinguishing attribute, we can build individual pipelines for this use case. Let's start with the [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) advertisements source. We need to have a batch process to [Fetch](../../Skills/Web%20Development/Fetch.md) data, from the e-commerce platform. This extracted data is cached in a temporary local cache. Do note that this is not a memory cache, but a file-based temporary store to hold the data, until summaries can be computed. A daily summarizer process, will run on this data for the day. With the data available in the cache, the summarized data for CTR will then be updated into the analytics database. Similarly, we also have the campaign management platform, providing email campaign data. We will have a batch data extraction process, that will extract data periodically, from the campaign management platform. This data is stored in a temporary cache. A daily summarizer process will execute, to summarize the data from the cache, and updated into the analytics database.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-create-a-workflow?u=76281980&t=94)** As seen here we have two distinct pipelines, from the sources. We could alternatively create a single cache, and combine the summarizer process. Having distinct pipelines help to develop, and scale them independently, with less choke points and more flexibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** ctr (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Advertising analytics: Scale the workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=0)** - [Instructor] Let's now scale the advertising analytics workflow to handle the expected data loads. Let's first define the batch jobs in the workflow. We will have an ads data extractor job that will connect to the [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) platform API, and download advertisement data records for the day. And ads data summarizer job will run every day to summarize the advertisements in the temporary cache. And email extractor job will run periodically to download email campaign data from the campaign management platform. An email daily summarizer job, will summarize the email data available in the temporary cache. What scaling opportunities are available to us in this workflow? Horizontal scaling of the extractors and summarizers, is necessary for the pipeline to scale up to the expected volumes. For this, these jobs should run multiple task instances and divide up the work. Work distribution can happen based on product, age group, and gender attributes as a composite key. Each input record has these attributes, so work can be distributed accordingly. Data extractors from the sources, can potentially run multiple threads to extract subsets of data by this composite key. The temporary data caches can be organized by the same composite key either as indexes or directories. The summarizers can run parallel tasks,
>
> **[1:37](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-scale-the-workflow?u=76281980&t=97)** and work distribution can again happen, based on the composite key. The analytics database should provide for concurrent writes, by individual summarizer tasks based on the composite key. This will ensure that the entire pipeline, can elastically scale to handle the data volumes. What limitations exist that need to be taken care of? The extraction APIs supported by the sources have rate limiting. This limits the number of requests that can be made to the API in a given period, so there cannot be too many concurrent threads requesting or querying data. The number of concurrent threads and the total number of requests, should be designed to work within the rate limits of these APIs. The technology used for the temporary file cache and the analytics database, can also limit the amount of distributed processing available. Hence, we need to choose the right technology for these [Databases](../../Skills/Software%20Development/Databases.md) to enable [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). We will do so in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** api (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Advertising analytics: Select technologies](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=0)** - [Instructor] Having scaled the workflow for the advertising analytics pipeline, let's now choose technologies for the components in the pipeline. Let's start with the pipeline we have designed so far. We need to use an extraction technology for both the extractor jobs. Then, we need to select a storage technology for the temporary cache. Then, we need to select a processing technology for the summarizer job. Finally, we need to select an analytics database technology. Let's proceed to do the evaluation and selection. We begin with the extraction jobs. Both the input sources come in the form of a custom API that is provided by the input source platform. They have unique API signatures, availability, content, and format. There are also rate limiting considerations which vary between the sources. For extracting data from these APIs, out-of-the-box technologies or utilities may not be available or suitable. Sometimes the API provider may provide an SDK but not a full-fledged scalable extraction service. Hence, it is recommended to build a custom extraction client for this job. The extraction client can be built using a high level programming language like [Java](../../Skills/Software%20Development/Java.md) or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). It can implement custom horizontal scaling through concurrent threats or processes.
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=95)** Next, we look at the technology for extraction temporary cache. This is not an in-memory cache but a temporary holding store for the extracted data. The temporary cache is going to store data in its granular format so there is a lot of data here, even for a single day. For technology alternatives, we will look at [MySQL](../../Skills/Software%20Development/MySQL.md) which is an RDBMS and HDFS which is a scalable file system. Let's evaluate these technologies for the temporary cache. Given the data volumes, we want horizontal scaling as a key feature. MySQL has limited scaling in storage, while HDFS can scale up to petabytes of data. The technology should be cheap to acquire and manage. MySQL can be acquired as an open source version with MariaDB but it still needs a database administrator to manage the instance and backups. We should be able to organize data and query data based on the keys we discussed before. Both these technologies provide that option. We also would like to bring in a mature technology and both these options will fit that requirement. We will choose HDFS as the option based on this table. Next, moving on to the processing job. Given that the requirements for the processing engine technology is similar to the previous audit trail archival use case,
>
> **[3:09](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-select-technologies?u=76281980&t=189)** we will use the same choice, namely [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) for building the summarization job. Finally, we look at technology options for the analytics database. This database is only going to store daily summaries based on a few categories like channel, product type, et cetera. So the volume requirements are not that high. We can do away with the need for horizontal scaling for this technology. We will choose MySQL, [MongoDB](../../Skills/Software%20Development/MongoDB.md), and HDFS + Impala as the three options to evaluate. We need concurrent right access to the database so that concurrent tasks in the summarization job can write data concurrently to this database. All three [Databases](../../Skills/Software%20Development/Databases.md) are good here. We need [SQL](../../Skills/Data%20Science/SQL.md)-based query access to the database and all the three options provide that. We desire powerful out of the box analytics capabilities so that analysts can run powerful queries on this data to extract insights. MySQL provides an excellent set of functions within its SQL. Comparatively, MongoDB and Impala provide limited such capabilities only. We need to integrate BI tools to these databases and all three of them are capable of such integration. Based on this table we chose MySQL as the analytics database option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (6), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** hdfs (4), api (3), sql (2), sdk (1), rdbms (1)
> **CLI Commands:** mysql (6), python (1), apache (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Advertising analytics: Review final architecture](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/advertising-analytics-review-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture for the advertising analytics use case. We will build a custom data extractor for extracting data from both the sources. HDFS will be used as the temporary data store. [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) will be used to build the daily summarizer job. [MySQL](../../Skills/Software%20Development/MySQL.md) will serve as the analytics database. Let's review some salient decisions we made in this use case. We choose to use custom extractors to extract data from the source APIs in order to adopt to their unique API signatures and manage rate limits. On HDFS, we will create folders based on the composite key we decided in the workflow design. This will allow for concurrent inserts and queries on these folders by independent tasks at the same time. Apache Spark can scale independently based on the data volumes. It also has native integrations to both HDFS and [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) that will help extend parallelism to both the source and the destination. Finally, since summary data only had limited volume, MySQL should be sufficient to store and query the analytical results. This concludes our second use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Env Vars:** hdfs (3), api (1), jdbc (1)
> **CLI Commands:** apache (2), mysql (2)
> **Speakers:** - [instructor] (1)


### 6. Use Case 3: Product Recommendations

[↑ Back to Table of Contents](#table-of-contents)

#### [Product recommendations: Define the problem](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=0)** - [Instructor] We now move to the final use case for the Batch [Big Data](../../Skills/Data%20Science/Big%20Data.md) Engineering product recommendations. Let's begin by discussing the problem to solve. XYZ is a popular global [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website that sells several household [products](../../Skills/Software%20Development/Microsoft%20Products.md) to its customers. It has about 10 million active users, and thus around 200,000 transactions a day. XYZ wants to increase its sales through product recommendations. When a customer is browsing its e-commerce website, XYZ wants to pop up product recommendations based on what the customer would be interested in. Recommendations are decided by a machine learning model that uses the customer's past history, and demographics to create a recommendation list. This model is available through an API service. What is the objective of the use case? It is to create a data pipeline that can generate custom product recommendations based on user transactions. It needs to prepare input data. Call the model API to get recommendations. And then store these recommendations in a database. What are the goals for this architecture? The architecture should scale to the user base. This means it would potentially need to create, and maintain recommendations for 10 million users. The recommendations should be updated daily
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-define-the-problem?u=76281980&t=95)** based on new data available about the users and transactions. It should consider both the recent transaction history of the customer, as well as demographics of the customers. The recommendations should be available in a database that supports low latency retrieval for [Real-Time](../../Skills/Database%20Management/Real-Time.md) display in a customer browsing session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** xyz (3), api (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Product recommendations: Study requirements](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=0)** - [Instructor] Let's now proceed to study the requirements of the product recommendations use case in detail. Let's begin with the inputs. The first input is customer demographics. The company maintains a customer database that contains demographic information about the customer including gender, age, income, et cetera. This is available in an RDBMS database and data can be extracted to a [SQL](../../Skills/Data%20Science/SQL.md) query. Then we have customer transactions. This contains information about what the customer bought on a [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website including product name, price, et cetera. This transaction information is available through a Kafka topic. We then move to the output. The product recommendation for each customer should be available in a database. It should be possible to query the database using the customer ID and extract the relevant recommendations. The database would contain information about the list of recommendations for the customer, along with the ranking for the recommendations. The database should allow [Real-Time](../../Skills/Database%20Management/Real-Time.md), low latency queries so that recommendations can be pulled up in real time. The output database should scale beyond the current 10 million users based on the customer base growth. So what is the pipeline expected to do with the inputs?
>
> **[1:35](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-study-requirements?u=76281980&t=95)** The pipeline needs to collect customer transactions and archive the recent transaction history. Then it needs to update the recommendations for the customers based on the new data available. For this, it would look for the list of customers who had transactions for the given day. For each such customer, it should extract relevant demographics, along with the past transaction history. It'll then call the recommendation model through its API and get the list of recommendations. This is then updated in the recommendations database. What about non-functional requirements for this use case? There are expected to be 10 million active customers and 200,000 transactions in a given day. We need to store the transaction history for the past three years. For latency, the recommendations should be updated within 24 hours for the previous day. Redundancy is required for the recommendations database. So it provides 24/7 access for the e-commerce site. The pipeline itself could be down for less than an hour if needed for maintenance or unforeseen issues. The security requirement is to provide authenticated access to the input sources and the [Databases](../../Skills/Software%20Development/Databases.md) in the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** rdbms (1), sql (1), api (1)
> **Speakers:** - [instructor] (1)

#### [Product recommendations: Create a workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-create-a-workflow?u=76281980&t=0)** - [Instructor] Let's now proceed to create a workflow for the product recommendations batch pipeline. Do note that the recommendations API is a service that is outside the pipeline. The pipeline will merely use it as an external service to obtain recommendations and rankings. We begin with the input Kafka topic for customer transactions. We will first extract the transactions periodically from this topic and archive it. We will use a transactions history database that can archive transactions by each customer. We then have the second input, which is customer demographics. This is available to us as an RDBMS table and can be accessed through a [SQL](../../Skills/Data%20Science/SQL.md) query. Then, on a daily basis, we will extract transaction history and customer demographics for customers who had new transactions for the previous day. We merge this data for each customer. Then, we will create recommendations for these customers. We will invoke the recommendations model API for each customer by providing the transaction history and demographics as input. The model will return the product recommendations list along with the ranking. This recommendation is then updated into the recommendations database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** api (2), rdbms (1), sql (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Product recommendations: Scale the workflow](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=0)** - [Instructor] Let's now proceed to scale the workflow for the product recommendation use case. We will start off with the workflow we created in the previous video. A transactions archiver job can be built to perform the transactions archival process from the Kafka topic to the transactions history database. A recommendations generator job can be used to both merge data for each customer with new transactions and create recommendations for the customers. One design option is to split this job into two jobs, but both jobs will have similar scaling requirements as both work on customers one at a time, so we can combine them together. What scaling opportunities do we have for the product recommendations workflow? The transactions archiver job can scale to run multiple concurrent tasks. Since its input is a Kafka topic, Kafka partitions can be shared between task notes in the job. If the Kafka partition key is the custom priority, then it serializes all transactions for a given customer into a single task. The transactions history database should support concurrent inserts so that each task can insert data without waiting for the other tasks. Similarly, the recommendation generator job can also run concurrent tasks. Each customer can be handled independently
>
> **[1:33](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-scale-the-workflow?u=76281980&t=93)** to generate recommendations. So for each batch, the list of customers with new transactions can be extracted and distributed across nodes. Then each node can proceed to generate recommendations independently. The source and destination [Databases](../../Skills/Software%20Development/Databases.md) should support concurrent access. Similarly, the recommendations model API should also allow concurrent requests so that they can serve the requesting tasks without delays. What are the possible scaling limitations that we need to account for? The recommendations model API's capacity may limit concurrency, so that needs to be checked with the [Data Science](../../Topics/Data%20Science.md) team and sized accordingly. Data merge between the transaction history and the customer demographics database can be expensive and may introduce latency. Since the demographics database does not change frequently, demographics info can be cached and looked up for faster access. The recommendations database should be update-friendly so that the same customer's record can be updated with new recommendations every time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Env Vars:** api (2)
> **CLI Commands:** node (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Product recommendations: Select technologies](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=0)** - [Instructor] Having looked at scaling, let's now proceed to select the right technologies for this use case. We will need to decide upon a storage technology for the history database. Similarly, we need to decide upon a storage technology for the recommendations database. We also need to pick a processing technology for the transactions archiver job and the recommendations generator job. Let's begin with the transactions history database. Data in this database should be grouped together by each customer with the ability to know if the customer has new transactions in the previous day. We need to pick some choices that will help perform such queries. We will pick [MongoDB](../../Skills/Software%20Development/MongoDB.md), [MySQL](../../Skills/Software%20Development/MySQL.md), and HDFS as the options to evaluate here. The first criteria is concurrent reads and writes that will help the processing jobs to run multiple concurrent tasks. All three technologies allow for such reads and writes. In order to group transactions for a given customer and maintain last transaction timestamps, we need the ability to organize them as parent/child records. MongoDB allows nested documents. MySQL allows multiple tables with foreign key relationships. With HDFS, this kind of out-of-the-box relationship is difficult to achieve unless we create separate folders by customer.
>
> **[1:34](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=94)** Querying for the last updated timestamp is also not trivial. The database should scale for [Big Data](../../Skills/Data%20Science/Big%20Data.md) volumes. MongoDB and HDFS are a great fit here. MySQL will have limitations. For high availability again, both MongoDB and HDFS are natively redundant architectures, while MySQL again has limitations in ensuring 24/7 availability out of the box. Based on this evaluation, we will pick MongoDB as the option. Then comes the selection for the recommendations database. This database has live records for each customer with recommendations being updated daily. It should also provide fast querying capabilities. As options, we will use Cassandra, a columnar [NoSQL](../../Skills/Software%20Development/NoSQL.md) database, MySQL, an RDBMS, and HDFS with Impala for querying. Let's run through the evaluation now. The first criteria is the ability to update existing records based on the customer ID. Both Cassandra and MySQL are update friendly, while HDFS is not. We need the ability to perform fast querying by a given customer ID. Cassandra provides fast access if customer ID is its record key. MySQL can help here with indexes. HDFS and Impala are limited when it comes to low latency queries. The solution needs to scale for big data volumes.
>
> **[3:10](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-select-technologies?u=76281980&t=190)** MySQL is limited here, while Cassandra and HDFS will scale. Again with high availability, Cassandra and HDFS are natively redundant architectures, while MySQL has limitations out of the box. We will choose Cassandra as the recommendations database. Then we move on to the processing job technology. Given that the requirements for the processing engine technology is similar to the previous use cases, we will use the same choice, namely [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), for building the processing jobs. Apache Spark is today the defacto standard for building [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) applications so it's no surprise that we will end up with the same choice for all the three use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (9), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (5), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **CLI Commands:** mysql (9), apache (2)
> **Env Vars:** hdfs (9), rdbms (1)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Product recommendations: Review the final architecture](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/product-recommendations-review-the-final-architecture?u=76281980&t=0)** - [Instructor] Let's now review the final architecture for the product recommendations use case. So here is the final architecture with all the technologies identified in the workflow. We have selected [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) for the processing jobs, [MongoDB](../../Skills/Software%20Development/MongoDB.md) for the transactions history database and Cassandra for the recommendations database. How does this architecture stack up? We use multiple database types in this architecture. In general, we want to reduce the number of database types in a single architecture, but in this case, we need them to support specific requirements. The processing jobs can leverage the querying and job distribution capabilities available in the Kafka and RDBMS inputs. This helps improve [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of the pipeline. We are using a separate APA based product recommendation service. It's also possible to embed the product recommendation service inside the Spark recommendations job. The key decision point is coupling and if the pipeline [Big Data](../../Skills/Data%20Science/Big%20Data.md) and [Data Science](../../Topics/Data%20Science.md) teams can work together closely or stay independent. The transactions history database also would need pruning to remove old records that are no longer used for making predictions. This completes the third use case for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Env Vars:** rdbms (1), apa (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing to architect big data applications](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/architecting-big-data-applications-batch-mode-application-engineering-22882694/continuing-to-architect-big-data-applications?u=76281980&t=0)** - There's a lot you can learn and do with [Big Data](../../Skills/Data%20Science/Big%20Data.md) architectures beyond this course. First, check out my [Real-Time](../../Skills/Database%20Management/Real-Time.md) big data architecture course that deals with real-time use cases in the same pattern. Second, try and implement some of the use cases you have learned and experience how the solution works. Finally, try architecting similar solutions for some of your own use cases. Data always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways to move it and extract knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2)
> **CLI Commands:** find (1)
> **Speakers:** - there (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Skills Covered

- Big Data
- Batch Processing

## Path Context

### In [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)
← [Tuning Kafka](Tuning%20Kafka.md) | **4 of 8** | [Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) →

### In [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)
← [Azure Spark Databricks Essential Training](Azure%20Spark%20Databricks%20Essential%20Training.md) | **4 of 6** | [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) →

## Appears In

- [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)
- [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)

## Related Courses

_Courses sharing skills:_

- [Apache Spark Essential Training- Big Data Engineering](Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md) — Big Data
- [Python for Data Analysis- Solve Real-World Challenges](../Software%20Development/Python%20for%20Data%20Analysis-%20Solve%20Real-World%20Challenges.md) — Big Data
- [Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI](../Cloud%20Computing/Advanced%20Data%20Processing-%20Batch%2C%20Real-Time%2C%20and%20Cloud%20Architectures%20for%20AI.md) — Batch Processing

---

[↑ Back to top](#)