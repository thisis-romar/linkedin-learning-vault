---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: apache-spark-essential-training-big-data-engineering-23165395
url: "https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395"
duration_minutes: 64
duration: 1h 4m
level: Intermediate
updated: 10/1/2024
learners: 15553
skills:
  - Data Engineering
  - Big Data
  - Apache Spark
  - Data Pipelines
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEYVdQ6ahM3Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726090917562?e=2147483647&amp;v=beta&amp;t=7rjZ4bFbiSWLKPUqSjIy3l4_2QVZmEz0C0SxsgnWkCc"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)'
  - '[Moving from Data Scientist to Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Scientist%20to%20Data%20Analyst.md)'
  - '[Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)'
prev_courses:
  - '[Data Cleaning in Python Essential Training](Data%20Cleaning%20in%20Python%20Essential%20Training.md)'
  - '[Deep Learning Getting Started](../Artificial%20Intelligence%20(AI)/Deep%20Learning%20Getting%20Started.md)'
  - null
next_courses:
  - '[ETL in Python and SQL](ETL%20in%20Python%20and%20SQL.md)'
  - '[Python- Working with Predictive Analytics](Python-%20Working%20with%20Predictive%20Analytics.md)'
  - '[Introduction to Spark SQL and DataFrames](Introduction%20to%20Spark%20SQL%20and%20DataFrames.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":5,"total":7,"prev":"Data Cleaning in Python Essential Training","next":"ETL in Python and SQL"},{"path":"Moving from Data Scientist to Data Analyst","position":7,"total":10,"prev":"Deep Learning Getting Started","next":"Python- Working with Predictive Analytics"},{"path":"Advance Your Data Skills in Apache Spark","position":1,"total":6,"prev":null,"next":"Introduction to Spark SQL and DataFrames"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/data-engineering
  - skill/big-data
  - skill/apache-spark
  - skill/data-pipelines
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md)

![Apache Spark Essential Training: Big Data Engineering](https://media.licdn.com/dms/image/v2/D4E0DAQEYVdQ6ahM3Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726090917562?e=2147483647&amp;v=beta&amp;t=7rjZ4bFbiSWLKPUqSjIy3l4_2QVZmEz0C0SxsgnWkCc)

# Apache Spark Essential Training: Big Data Engineering

> Data engineering is the foundation for building analytics and data science applications in the new Big Data world. Data engineering requires combining multiple big data technologies to construct data pipelines and networks to stream, process, and store data. This course focuses on building full-fledged solutions that combine Apache Spark with other big data tools to create end-to-end data pipeline

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395) | 1h 4m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Driving big data engineering with Apache Spark](#driving-big-data-engineering-with-apache-spark)
  - [Course prerequisites](#course-prerequisites)
  - [Setting up the exercise files](#setting-up-the-exercise-files)
- [**1. Data Engineering Concepts**](#1-data-engineering-concepts) (5 videos)
  - [What is data engineering?](#what-is-data-engineering)
  - [Data engineering vs. data analytics vs. data science](#data-engineering-vs-data-analytics-vs-data-science)
  - [Data engineering functions](#data-engineering-functions)
  - [Batch vs. real-time processing](#batch-vs-real-time-processing)
  - [Data engineering with Spark](#data-engineering-with-spark)
- [**2. Spark Capabilities for ETL**](#2-spark-capabilities-for-etl) (5 videos)
  - [Spark architecture review](#spark-architecture-review)
  - [Parallel processing with Spark](#parallel-processing-with-spark)
  - [Spark execution plan](#spark-execution-plan)
  - [Stateful stream processing](#stateful-stream-processing)
  - [Spark analytics and ML](#spark-analytics-and-ml)
- [**3. Batch Processing Pipelines**](#3-batch-processing-pipelines) (5 videos)
  - [Batch processing use case: Problem statement](#batch-processing-use-case-problem-statement)
  - [Batch processing use case: Design](#batch-processing-use-case-design)
  - [Setting up the local DB](#setting-up-the-local-db)
  - [Uploading stock to a central store](#uploading-stock-to-a-central-store)
  - [Aggregating stock across warehouses](#aggregating-stock-across-warehouses)
- [**4. Real-Time Processing Pipelines**](#4-real-time-processing-pipelines) (5 videos)
  - [Real-time use case: Problem](#real-time-use-case-problem)
  - [Real-time use case: Design](#real-time-use-case-design)
  - [Generating a visits data stream](#generating-a-visits-data-stream)
  - [Building a website analytics job](#building-a-website-analytics-job)
  - [Executing the real-time pipeline](#executing-the-real-time-pipeline)
- [**5. Data Engineering with Spark: Best Practices**](#5-data-engineering-with-spark-best-practices) (4 videos)
  - [Batch vs. real-time options](#batch-vs-real-time-options)
  - [Scaling extraction and loading operations](#scaling-extraction-and-loading-operations)
  - [Scaling processing operations](#scaling-processing-operations)
  - [Building resiliency](#building-resiliency)
- [**6. End-to-End Exercise Project**](#6-end-to-end-exercise-project) (4 videos)
  - [Project exercise requirements](#project-exercise-requirements)
  - [Solution design](#solution-design)
  - [Extracting long last actions](#extracting-long-last-actions)
  - [Building a scorecard](#building-a-scorecard)
- [**Conclusion**](#conclusion) (1 videos)
  - [More about Apache Spark](#more-about-apache-spark)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Driving big data engineering with Apache Spark](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=0)** - [Kumaran] We live in the world of [Big Data](../../Skills/Data%20Science/Big%20Data.md). This data needs to be stored, transported, and processed, in scalable and resilient ways to generate timely insights. [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) has become the top [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) technology in the world. In this course, I will show you how to execute [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) projects with Apache Spark. We will discuss some salient features of Spark that will help in scalable and resilient processing, then walk through the design of batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) pipelines with Spark using examples, and finally, discuss some best practices. My name is Kumaran Ponnambalam. Let's now start solving data engineering problems with Apache Spark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (3), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** apache (3)
> **Speakers:** - [kumaran] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=0)** - [Instructor] Before we begin this course, I want to discuss the prerequisite skills needed for the students to maximize learning from this course. The focus of this course is to help students build [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) pipelines with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). It will discuss some key design principles and best practices in building pipelines and demonstrate them with examples. The students are expected to be familiar with the basics of Apache Spark and are able to set up code and deploy applications with Spark. Familiarity in structured streaming and [SQL](../../Skills/Data%20Science/SQL.md) capabilities for Apache Spark is also desired. The example code is in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), so familiarity with Python concepts, programming, and using Jupyter notebooks is required. We will build pipelines using third party data stores, namely Kafka, MariaDB, and [Redis](../../Skills/Software%20Development/Redis.md). Familiarity in these data stores is also helpful. We will be deploying and using these data stores with Docker, so knowledge of Docker operations is also essential. Let's now get set up with the example code and prerequisites for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **CLI Commands:** apache (3), python (2), docker (2)
> **Prerequisites:** set up (2), prerequisite (1)
> **Env Vars:** sql (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the exercise files](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] Let's set up the required software for use in this course. We will use [PySpark](../../Skills/Data%20Science/PySpark.md) for our programming exercises using its own built-in Spark instance. So we do not need to set up a Spark cluster. We hover need data sources and sinks like MariaDB, Kafka, and [Redis](../../Skills/Software%20Development/Redis.md). We will set them up using Docker. First, make sure that Docker desktop is installed and set up on your system. If not, download and install it from [docker.com](https://docker.com). Download the exercise files into a local folder. Open the command prompt and navigate to this folder. If you are using [Windows](../../Glossary/Service/Windows.md), use the [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) application. I have downloaded the files in the exercise files folder. Here, you can see the exercise files, Docker file, and dependency files that are needed. Execute the command, docker-[compose](../../Glossary/Framework/Jetpack%20Compose.md) -f spark-docker.yml up -d.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=67)** You should see three containers being created and started. This process may take a long time if the images need to be pulled from Docker hub. Check the status of the containers using docker ps command. Install MariaDB connector C for your operating system if it is not already installed. This website provides information on the available packages for MariaDB connector. If you are using Mac, you can also install the connector using brew install mariadb-connector-c. PySpark has some environment dependencies, so they also need to be set up. First, make sure that you have [Java](../../Skills/Software%20Development/Java.md) 17 installed on your system. This can be checked by using the command java-version. Next, we also need to set up the Java Home environment variable to point it to the Java 17 folder. So this has already been set up and it can be checked by using the Environment command. We then need a variable called PySpark [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and that needs to point to the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Python. We have already set this up in this environment, and we can check this using the environment command. Next, we need to install Anaconda Navigator from the website, [anaconda.com](https://anaconda.com). Please download and install the same.
>
> **[2:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=162)** Then go to the Anaconda Navigator, create a new environment called Spark. Choose Python 3.11. This creation may take some time. Now install Jupyter Notebook in this new Spark environment.
>
> **[3:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=191)** Go back to the directory where the exercise files are downloaded. Then switch to the environment Spark using conda activate spark. Then start Jupyter Notebook using the command, jupyter notebook. This will open the browser with the directory listing shown. Open the file, 00_03_Spark_BDE_Setup_Prerequisites. Let's now install the required packages for this course. Run the first cell. This will install all the required prerequisites for the exercises. This may take some time to install. If you are using Windows, then follow the additional instructions mentioned here. Copy the [Hadoop](../../Skills/Data%20Science/Hadoop.md) folder in the exercise files to a folder like c:/hadoop. Create a Hadoop home environment variable pointing to this folder. Then add c:/hadoop/bin to the path variable. Once this is done about the Jupyter Notebook session, close the command window. Then open a new command window and restart Jupyter Notebook. The dependencies are successfully installed now. Now we need to create a few [Databases](../../Skills/Software%20Development/Databases.md) and tables in MariaDB as well as a few topics in Kafka.
>
> **[4:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=287)** Go to the setup MariaDB section and run it. This code will create all the required tables in MariaDB. It creates three databases, warehouse stock, global stock, and website stats. Then go to the setup Kafka topic section and run it. It creates three Kafka topics, spark.streaming.websit.visits, spark.streaming.cart.abandoned and spark.exercise.lastaction.long. Finally, create a raw data folder. This folder will mimic a distributed file system like Hadoop. We will not be using HDFS for this, but a proxy to represent HDFS files. We can also check if all the required environment variables are correctly installed. Note that if you shut down the docker containers, this setup will be lost and you will have to rerun this notebook to create these entities again. Let's dive into the course now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hadoop](../../Skills/Data%20Science/Hadoop.md) (5), [Java](../../Skills/Software%20Development/Java.md) (4), [PySpark](../../Skills/Data%20Science/PySpark.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Windows](../../Glossary/Service/Windows.md) (2)
> **Prerequisites:** install (10), set up (6), setup (3)
> **CLI Commands:** docker (9), python (3), make (2), brew (1)
> **Tools:** jupyter (5), anaconda (3), docker desktop (1), command prompt (1), powershell (1)
> **UI Navigation:** open the (3), go to (3), navigate to (1), switch to (1)
> **Exercise Files:** exercise files (5), download the (1)
> **Versions:** java 17 (2), python 3 (1)
> **URLs:** [docker.com](https://docker.com) (1), [anaconda.com](https://anaconda.com) (1)


### 1. Data Engineering Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data engineering?](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=0)** - [Instructor] To begin the course, let's discuss the concept of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). Data engineering deals with designing and building systems that collect and analyze data to deliver insights and actions. The focus on data engineering is data, especially [Big Data](../../Skills/Data%20Science/Big%20Data.md), and ways to process them at scale and with low latency. Data engineering is a growing field in software engineering, especially around [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), analytics and [Data Science](../../Topics/Data%20Science.md). It is driven by the advancements in big data technologies. These technologies enable building [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) that focus on data transport, processing, and storage. It is essential for large scale data processing with low latency, which is becoming a key requirement for multiple application domains to deliver value to their customers. It is a prerequisite for machine learning. Large quantities of training data needs to be cleansed, transformed, and processed before they're used for building models. It is also needed for pre-processing and post-processing of data during machine learning inference operations. Data engineering has given rise to a new breed of engineering roles like data engineer and big data architect. These roles require special skills similar to what is being provided in this course. In the next video, let's examine how data engineering differs from data analytics and data science.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (6), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Data Science](../../Topics/Data%20Science.md) (2), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)

#### [Data engineering vs. data analytics vs. data science](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=0)** - [Instructor] Nowadays, we hear the terms like [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), data analytics, and [Data Science](../../Topics/Data%20Science.md) when discussing [Big Data](../../Skills/Data%20Science/Big%20Data.md). Often, they are used interchangeably. So what exactly are the differences between these domains, and what are their overlaps? This table lists a number of [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) and analytics functions that are encountered in the data analytics domain today. Data engineering deals with the preparation of data for further analytics. It deals with integrating data sources to extract data, build [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) for transport, processing, and transforming data to required formats, and aggregations to finally storing them. This data can also be used to build business actions downstream. [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md), on the other hand, works on data that is already prepared by data engineering. It deals with using the process data to create [Dashboards](../../Skills/Data%20Science/Dashboards.md) and reports for doing exploratory data analytics and statistical modeling of data. This includes generating recommendations for business actions. Data science is a broad domain that encompasses data engineering and business analytics. It also includes machine learning and generating predictions to drive business outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [Data Science](../../Topics/Data%20Science.md) (2), [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data engineering functions](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=0)** - [Presenter] What are the functions of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md)? Data engineering consists of five functions namely acquisition, transport, storage, processing, and serving. [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) are built by combining multiple such functions to deliver a given outcome. Let's start with [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md). The goal of data acquisition is to extract or receive data from a data source and publish it into a [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipeline. While acquiring data, the focus is on understanding the format of the source data and converting them into formats suitable for downstream processing. We work with interfaces provided by the source systems to extract data. Alternatively, we can expose interfaces through which clients can publish data into the pipeline. Security is also a major concern, especially if the data sources are not within the trust domain. Reliability of data is of importance, especially when acquiring from remote sources. Finally, latency is also a consideration for streaming data analytics. Data transport deals with moving data within the pipeline to various processing and storage and endpoints. Data transport should be reliable and should maintain the integrity of transported data. Transport requires scale to deal with large quantities of data in the big data world. [Data Security](../../Skills/Data%20Science/Data%20Security.md) and [Privacy](../../Skills/Data%20Science/Privacy.md) may also be key concerns. Latency is an important transport consideration
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=93)** for [Real-Time](../../Skills/Database%20Management/Real-Time.md) use cases. Finally, transport should also be cost effective. Then comes [Data Storage](../../Skills/Data%20Science/Data%20Storage.md). While designing storage for big data pipelines, a key requirement is the flexibility of data as new use cases and requirements will constantly emerge when the system grows. Schema design needs to consider this. Popular query pattern should be considered while designing the schema. Storage should also provide for high availability and redundancy to ensure resilient operations. Finally, the choice of technology should also be cost effective. [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) is the next key function. Common requirements like scale, [Resiliency](../../Skills/Software%20Development/Resiliency.md), latency, and security also apply to data processing. In addition, data processing should provide capabilities for cleansing, filtering, and enriching data with additional features. Data should also be aggregated in cost-effective operations. Machine learning can be part of data processing operations in real-time prediction use cases. Finally, data serving is also an important function. Serving can be done by either exposing APIs and interfaces or by pushing data to endpoints for downstream analytics. In any case, requirements around latency, high availability, and security also need to be considered. Skill levels of consumers should be taken into account while exposing interfaces. The schema of the data should also be flexible to provide for multiple use cases
>
> **[3:06](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=186)** and popular query patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (4), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)

#### [Batch vs. real-time processing](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=0)** - [Instructor] When building [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), one of the key decisions to make is whether the pipeline would be batch or [Real-Time](../../Skills/Database%20Management/Real-Time.md). We start with [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md). In batch processing, we process data in batches. A batch is a collection of records with a well-defined size or window. We can either define batch sizes by the count of records or by a date/time range. In batch processing, the batch of input records is already ready and complete. This input does not change when processing is going on. This is a key differentiator between batch and realtime processing. Batch processing works on bounded datasets. The number of records in the batch do not change after the processing has started. Since batch processing usually waits for all the input from that batch to be ready, there is latency when beginning processing. Also, it may take some time to process all the records. The results of processing are usually available at the end of processing, but intermediate results can also be possible. Batch processing is simpler to implement. Since the input is constant, reprocessing would generate the same output all the time. How is real-time processing different? Real-time processing or stream processing works on input data as it is created at the source. It does not wait for the batch of records to build up. Rather it processes one record at a time. As processing is going on, the input data may change while processing. Stream processing should account for such changes
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=94)** and reprocess when needed. Change data capture is a key pattern used in these cases. Real-time processing usually works on unbounded datasets. When processing starts, the total number of records to be processed is not known. Processing needs to consider this and compute metrics accordingly. In real-time processing use cases, there are low latency requirements. The insights need to be derived within seconds of receiving the source data records. Not all use cases can qualify for real-time processing. State management becomes an important consideration in real-time when entity states or running summaries need to be kept track.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (7), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (6), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Data engineering with Spark](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=0)** - [Instructor] [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) is arguably the best processing technology available for [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) today. It has been constantly evolving over the last few years, adding new capabilities and improving in reliability. Spark can be used to implement both batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) use cases. It has support for a number of capabilities to help in this regard. It has native support for several popular data sources like RDBMS, Kafka, and HDFS. It also has advanced parallel processing capabilities to process large quantities of data in real time. Capabilities like MapReduce, windowing, state management, and joins enable powerful use cases. Finally, it also has support for graph processing and machine learning, so these use cases can also be integrated into these [Big Data](../../Skills/Data%20Science/Big%20Data.md) pipelines. We will explore these capabilities in detail in the course. Let's dive right into understanding what these capabilities are and use a couple of examples to implement them during this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Env Vars:** rdbms (1), hdfs (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)


### 2. Spark Capabilities for ETL

[↑ Back to Table of Contents](#table-of-contents)

#### [Spark architecture review](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=0)** - [Instructor] In order to build an optimal Spark pipeline, it is important to understand how Spark works internally. When design decisions are made, they need to be analyzed on how they impact [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and performance. In this video, I will review how Spark executes a pipeline and optimizes it. I recommend further reading on this topic to master the internals of Spark. Spark programs run on a driver node which works with a Spark cluster to execute them. A Spark cluster can consist of multiple executor nodes capable of executing the program in parallel. The level of parallelism and performance achieved is dependent upon how the pipeline is designed. Let's review an example pipeline and how it gets executed. First, the source data is read from an external source database into the structure Data 1. Data 1 is then converted to a data frame or its internal representation resilient distributed datasets, RDDs. During this conversion, it is partitioned and individual partitions are assigned and moved to the executor notes that are available. When a transform operation like map or filter is executed, these operations are pushed down to the executors. The executors execute the code locally on their partitions and create new partitions with the result. There is no movement of data between executors, hence, transforms can be executed in parallel.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=96)** Next, when an action like reduce or group by is performed, the partitions need to be shuffled and aggregated. This results in movement of data between executors and can create I/O and memory bottlenecks. Finally, when the data is collected back to the driver node, the partitions are merged and sent back to the driver. From here, they are stored into external destination [Databases](../../Skills/Software%20Development/Databases.md). This flow needs to be understood and visualized for any pipeline that we are building to understand bottlenecks and design for scalability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** node (2)
> **Speakers:** - [instructor] (1)

#### [Parallel processing with Spark](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=0)** - [Instructor] [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing is all about processing data in parallel to achieve high throughput in less time. How does [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) help with this goal? [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) involves multiple activities, which, in general, can be grouped into the following. First data is read from data sources, like [Databases](../../Skills/Software%20Development/Databases.md). Then various operations, like transformations, data filtering, and validation checks, are performed. Data may then be aggregated to create summary metrics. Finally, transformed data is returned to sinks. When we talk about scaling data processing, we need to scale all these steps. We need the ability to parallelize all these steps involved in data processing/ Steps that cannot be parallelized become bottlenecks, and the speed of the processing pipeline would be based on how fast these bottlenecks can process data. How does Apache's Park help in parallelizing activities and removing bottlenecks? Let's start with reading data from data sources. Spark supports out-of-the-box parallel read operations from various data sources. Subsets of records can be directly read into multiple executor nodes in parallel. For example, it supports partitioning of data by column values for [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) sources. Different executors can read and process different subsets of data, partitioned based on column values. Similarly, with a Kafka source, each executor can read from a subset of Kafka partitions.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=94)** It's possible to implement custom parallelism techniques and configure the level of parallelism in Spark. Spark also implements predicate pushdown. Any filtering operations in Spark are instantly executed on the data source itself. So unwanted records are not read into memory. This is done by the optimizer while deciding on the execution plan. What about processing of data? Transformation operations, like map and filter, are parallelized by Spark. Different executor nodes can process transformations in parallel on subsets of data. In order to enable parallelism and reduce bottlenecks, cache should be taken during pipeline design. For example, perform map type operations early in the cycle so we can execute as much of the work in parallel and filter out unwanted data. Reduce operations introduce shuffling of data across executors. Focus on reducing shuffling and using the right partitions for data. Also, repartition data as needed during processing to reduce the number of partitions. Finally, let's look at writing data to sinks. Spark, again, supports out-of-the-box parallel writes to data sinks. For example, each executor can write to JDBC sinks in parallel, and this parallelism can be configured. Similarly, executors can write to Kafka topics in parallel too. Again, Spark provides custom parallelism options. It also supports batching of writes to minimize network I/O and optimize write operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (3), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (3)
> **CLI Commands:** apache (2)
> **Env Vars:** jdbc (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Spark execution plan](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=0)** - [Instructor] Spark execution plans play an important role in optimizing pipelines. When a job is submitted to [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), it first analyzes all the code given to it and comes up with an execution plan. Spark has an optimizer that analyzes the steps needed to process data and optimizes for performance and resource utilization. Spark only executes code when an action like reduce or collect is performed. At this point, the optimizer kicks in and analyzes all the previous steps required to achieve this action. It then comes up with a physical execution plan. The optimizer looks for reducing I/O, shuffling, and memory usage. If the data sources can support parallel I/O, then Spark accesses them directly from the executor and paralyzes these operations. This provides improved performance and reduces memory requirements on the driver. It is recommended to print and analyze execution plans to understand what Spark is doing underneath and look for opportunities to optimize them. Please refer to others Spark documentation and courses regarding execution plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **CLI Commands:** apache (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Stateful stream processing](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=0)** - [Instructor] One of the challenges in stream processing is the need to maintain current state for computing aggregations and managing transitions. It is also needed to resume processing after a pipeline is halted. How does Spark help in this regard? Let's start with the feature of checkpointing in [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). Checkpointing is the ability to save the state of the pipeline to a persistent data store like HDFS or S3. When a job fails and needs to be restarted, the information saved during checkpointing will be used to resume processing from where it left off. Checkpointing will store a number of [Metadata](../../Skills/Web%20Development/Metadata.md) elements as well as some RDDs at periodic intervals to the checkpoint store. This includes Kafka offsets, so processing can resume from the last process record. Also, if the state is tracked by keys, then that information can also be checkpointed. Finally, if there are RDDs that require operations like windowing across multiple batches, they will also be stored in the checkpointing process. Watermarks is another important feature of Apache Spark that is useful for event-time operations. Event-time is the time a specific event or record is created at source. If windowing needs to be done based on event-time, then processing of any window may have to wait until all events for that window arrive at the Spark Executors. Watermarks are used to set the delay required before processing of an event-time window can happen.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=96)** Spark waits for this delay until all events for that window are expected to arrive. It keeps track of the events and their ordering until the watermark has passed and the data is ready for processing. Another interesting [Real-Time](../../Skills/Database%20Management/Real-Time.md) use case is tracking the state of entities by keys. For example, if you need to track the state of a browser session in real time, Spark can help track using the browser session ID as the key. State changes are signified by new events that indicate the change. The UpdateStateByKey operation is used to update the state for the given key. Newly updated states are published as DStream to downstream transformations and actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** apache (2)
> **Env Vars:** hdfs (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Spark analytics and ML](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=0)** - [Instructor] Analytics and machine learning are two alike domains with [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) can also help extend data engineering pipelines to perform analytics and machine learning. Let's start with analytics. Spark supports Spark [SQL](../../Skills/Data%20Science/SQL.md), a simple, yet powerful SQL interface to perform computations and aggregations. SQL is internally-translated into distributed operations that can efficiently process large datasets. Spark SQL can be used on both batch and [Real-Time](../../Skills/Database%20Management/Real-Time.md) streaming pipelines Spark SQL syntax mimics standard SQL. It's simple to use and yet powerful to transform, filter, and aggregate data in one single statement. SQL-based analytics can be added to the same Spark pipeline that does data engineering, so implementation and deployment becomes easier. [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) can be cascaded with analytics, where the output of one operation can be passed on to downstream operations for further analytics and processing. Results of analytics can either be persisted to [Databases](../../Skills/Software%20Development/Databases.md) or sent as streams for downstream consumers. How about machine learning with Spark? Yes, Spark supports ML through a library. Spark ML provides various out-of-the-box features for pre-processing of data. This includes feature extraction, transformation, and dimensionality reduction. Spark provides some popular machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) and can support ML pipelines
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=93)** for both training and inference. ML pipelines can be used to stitch data extraction, pre-processing, training, and inference into a single flow. Spark thus provides an integrated end-to-end solution for data engineering, analytics, and machine learning. Having discussed the capabilities of Apache Spark, let's use them to build a couple of data engineering use cases in the next few chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (5), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** sql (7)
> **CLI Commands:** apache (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Batch Processing Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Batch processing use case: Problem statement](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=0)** - [Instructor] Having discussed the capabilities for [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) in the earlier chapter, let's now design and implement a [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) pipeline in this chapter. Let's start off with discussing the business use case we are trying to solve with this pipeline. We want to build a pipeline that will do stock aggregation across multiple locations for an enterprise. This enterprise has warehouses across the globe. Warehouses maintain stock of items by location, and distribute them to local stores. Each warehouse also has a local data center with all the required [Hardware](../../Topics/Hardware.md), and software deployed in that center. A stock management application runs in each warehouse. It is the same software, but has local independent instances deployed in the local data center. A local MariaDB database keeps track of warehouse stock information. Stock is maintained by each item for each day. We keep track of the opening stock, receipts, and issues for each item for each day. The enterprise wants to create a consolidated central stock database. Item stock information needs to be collected from across warehouses on a daily basis, and then consolidate in a central MariaDB database. We need to set up batch processing to upload local warehouse data into a central data cloud, and then aggregate stock across locations. The solution should be scalable to hundreds of warehouses.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=93)** This is a simple use case, but representative of a number of real life use cases that require data gathering, consolidation and aggregation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Batch processing use case: Design](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=0)** - [Instructor] How does the "Batch [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md): Use Case Design" look like? Let's consider three warehouse locations, namely London, New York, and Los Angeles. Each location has a MariaDB database called warehouse_stock. There is also a central data center to which the data needs to be uploaded. In order to store the uploaded data in the central data center, we need a file system that is scalable and provides concurrent access. We want to create folders for each warehouse in this file system and provide permissions to the local warehouses to upload their respective files daily. We will choose a distributed file system like HDFS or S3 that provides concurrent access, scaling, and security. Files will also be created in Parquet format that allows for parallel reads by Spark. Now, in each local data center, we will run a stock upload job built with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). This job will run on a daily basis on a local Spark cluster. The job will read daily stock information from the warehouse_stock database and upload them into the respective warehouse folder on the distributed file system. The file format will be Parquet. A stock aggregator job runs on a Spark cluster in the central data center. It'll start after data uploads are expected to be complete every day. The stock aggregator job will read all the Parquet files across locations, consolidate across warehouses,
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=94)** and store the results in a global_stock database on MariaDB. The bad jobs will run every day and consolidate data for further reporting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **Code Identifiers:** warehouse_stock (2), global_stock (1)
> **CLI Commands:** apache (1)
> **Env Vars:** hdfs (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the local DB](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=0)** - [Instructor] Let's implement the [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) pipeline we designed in the previous video. The code for this chapter is available in the notebook code_03_XX_Spark_BDE_Batch_Data_Engineering. Before we build the jobs for stock processing, we need to create some sample data in the source database warehouse_stock. We will do so in this video. This is done using the Setup local database code. This data generator generates data for three warehouses, New York, Los Angeles, and London. In the real world, these will be three separate database instances, but for this example, we will create data for all the three warehouses in the same database. We first establish a connection to the warehouse_stock database and open a cursor. Then we delete all old data in the item stock table. The generate_data method is called once for each of the three warehouses. This method uses assimilated list of items and their values. It also uses a random number generator to generate stock counts. We iterate on this for three days. For each item in the list of items, we pick random values for opening stock, receipts and issues, then we insert this information into the database. We generate stock information for three previous days
>
> **[1:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=97)** related to the current date, and we execute this method for the three warehouses. Let's run this code now and create the base data. The base data is now created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), cursor (1)
> **Code Identifiers:** warehouse_stock (2), generate_data (1)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Uploading stock to a central store](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=0)** - [Instructor] We will build the daily stock upload job in this video. The code for this job is available in 03.04, Upload stock to the central store section. We begin by first setting up this park session. This is required to read the local stock information and then upload to the central database. We use local of 2 to run the embedded version with two task notes for Spark. The default parallelism is also set to 2. While running this in a cluster, this can be fine tuned based on scale requirements. Let's create the Spark session. The upload stock method is used to upload stock for a given warehouse and a time period. Multiple copies of this job are expected to run, one each for each of the local data centers. We will, however, run all of them together in this example for demo purposes. In this job, we first create a [SQL](../../Skills/Data%20Science/SQL.md) query to find the minimum and maximum values of the ID column for the given date range, and warehouse ID. The ID is an auto-generated column populated in the source database when new records are inserted. We will use this column to partition data reads across multiple stock executors. The minimum and maximum values are captured and stored in the min bounce and max bounce variables. Now we set up the query to get stock information
>
> **[1:40](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=100)** for a given date, range and warehouse ID. We execute this query and read the results into a data set through the Spark session. While reading, we provide various database connection parameters like URL, dbtable, user and password. In order to enable parallelism, we provide the partition column and the lower and upper bones. The num partition parameter determines the number of parallel connections that will be created to MariaDB. This is usually equal to the number of available task executors. This will enable reading and uploading of data in parallel across multiple executors and enable scaling of the job. We are not going to use S3 or HDFS as the central file store for this example. Instead, we are going to use a local file store created in the raw data directory under the project folder. Please delete the contents of the raw data folder if they already exist. Otherwise, it may generate an error. For using S3 or HGFS, simply provide the corresponding URL. The file is created in Parquet format. We will also partition this data by the stock date and warehouse ID. This will help in querying data later if filters need to be applied based on these attributes. This process is executed for all the warehouses
>
> **[3:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=194)** for the data ranges provided earlier. Let's execute this code and review the results. We see that the uploading process is complete for each of the warehouses. We can go back and look at the raw data folder. Here, we can see that the process has created sub folders by stock date, and then under that it has created sub folders by warehouse ID. Data is stored in Parquet format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** url (2), sql (1), hdfs (1), hgfs (1)
> **Prerequisites:** required to (1), set up (1)
> **CLI Commands:** find (1)
> **Versions:** 03.04 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Aggregating stock across warehouses](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=0)** - [Instructor] Let's aggregate the stock information we collected across warehouses. This is expected to run in the central data center. This job will summarize stock values for all records available in the source directory provided. The source directory is draw data that we populated in the previous video. We first create a MariaDB connection to the global stock database that will be the destination for the aggregated data. Then we set up a new Spark session for the aggregation job. Let's run this code. We also delete any existing data in the central database to initialize. This is an optional step only to be used when reinitializing this database. To process, we read the source directory in Parquet format and create a dataset. Next, we create a view on the dataset. Creating a view enables us to directly run [SQL](../../Skills/Data%20Science/SQL.md) statements against this table. It makes it easier to do computations and queries this way. Then we run a group by query for summarizing stock across warehouses. It groups data by stock date and item name. It adds up the opening stock, receipts, and issues. It also computes the closing stock and the value of the stock. The results are stored in the stock summary data frame. We then print some of the results to console.
>
> **[1:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=97)** Next, we will write these results to the item stock table in the global stock database. Spark allows out-of-the-box capabilities to open data to a [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) table. Do note that we are using [MySQL](../../Skills/Software%20Development/MySQL.md) in the URL instead of MariaDB, since there could be potential issues by using MariaDB in the URL. This functionality is the same, whether the target database is MySQL or MariaDB. Let's run this code and review the results. The job has successfully executed and printed the data processed. We can now crosscheck the counts between the local [Databases](../../Skills/Software%20Development/Databases.md) and the global database. This code here does the check. Let's run this code now. We can see that the total opening stock receives and issues tally between the two databases. This completes our batch [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) pipeline, where we acquire data, transport it to a central location, consolidated it, and then persisted in the destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1)
> **Env Vars:** url (2), sql (1), jdbc (1)
> **CLI Commands:** mysql (2)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Real-Time Processing Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Real-time use case: Problem](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=0)** - [Instructor] What will a [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) solution be like? Let's design and implement an example real-time data engineering pipeline in this chapter. The business scenario for the real-time example is website analytics. An enterprise runs an ecommerce website selling multiple items, like [amazon.com](https://amazon.com). This website is used across multiple countries. The enterprise wants to track visits to the website by its users. It wants to know about the visit date, country, and duration for which the users stay in the website. It also wants to track the last action before the user exited out of the website. This last action may be in the catalog page, the FAQ page, the shopping cart, or the order fulfillment page. To enable this real-time analytics, we need to build a pipeline that will receive a stream of website visit records. For each user who visits this website, the stream will have one record. The record will contain the visit date, the last action performed by the user, the country from where the browser session was initiated, and the duration of the visit. Using this information, we need to compute the following in real-time. We need to compute five second summaries by last action performed and write it to a database. We need to keep track of the number of visits by users by each country.
>
> **[1:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=92)** We also need to identify records where the last action is shopping cart. Then this needs to be published into an abandoned shopping cart queue for further downstream processing. Let's first design the processing pipeline and then proceed to implement the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (5)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Env Vars:** faq (1)
> **Speakers:** - [instructor] (1)

#### [Real-time use case: Design](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=0)** - [Instructor] What does the design for the [Real-Time](../../Skills/Database%20Management/Real-Time.md) website analytics use case look like? We have an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) application that is running in the cloud data center. The application creates user visit records when the user exits the application and publishes them to a Kafka queue called spark.streaming.website.visits. It's possible that the application is located in multiple data centers across the globe. Even in such cases, the data is streamed into a single central Kafka queue. An [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) job called Website Analytics runs and consumes the visit records in real time from the Kafka queue. On the data that is received, it will execute multiple actions. First, it computes five second summaries and inserts them into a MariaDB database called website_stats. A table called visit_stats is used to capture that information. Next, it maintains a running counter of the total duration by country using a [Redis](../../Skills/Software%20Development/Redis.md) sorted set. Finally, it filters those visits, which ended in the shopping cart, and publishes them to the spark.streaming.carts.abandoned topic. This solution is natively scalable. Kafka provides scalable real-time streaming of data. Spark jobs can scale across multiple executors based on the incoming data load. Redis is a distributed, real-time database that, again, can scale horizontally. Each executor can open individual connectors to MariaDB
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=94)** and insert summary records in Paddle. Let's now proceed to implement and execute the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), [Redis](../../Skills/Software%20Development/Redis.md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **Code Identifiers:** website_stats (1), visit_stats (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generating a visits data stream](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=0)** - [Instructor] To execute the website visit pipeline. We first need a streaming data source. Let's create an example data stream. The code for this chapter is in the notebook code 0403 Spark BDE generate a visit stream. We have already created the required Maria DB table and the Kafka topic for this chapter. When we ran the setup prerequisite script earlier in the course. In this notebook, we simulate a data stream and publish it into the Kafka topic. We begin by defining a string serializer. Then we create a Kafka producer. The bootstrap server is set to the port on which our Kafka instance is listening to. The key and value serializer are set to the string serializer. We then define a sample list of countries and a list of last actions. We then generate hundred sample visit records. For each record, we pick a random country and last action from the predefined list. We set the time to the current time. We also set the duration to a random value. We form adjacent record for the visit with all the attributes we have simulated. Then we publish the data to the Kafka topic, Spark.Streaming.Website.Visits. We print the data published to the console. Then we proceed to sleep for a random time of one to three seconds.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=94)** At the end of all publishing, we flush and close the producer. This notebook can be used to create the data stream concurrently while we consume it and compute metrics in the next couple of videos.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (1), prerequisite (1)
> **Env Vars:** bde (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Building a website analytics job](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=0)** - [Instructor] Let's start building the streaming website analytics job now. The code for this is available in the notebook, code_04_04_Spark_BDE_Build_a_streaming_analytics_job. We first define a few methods. We first have the right to [Redis](../../Skills/Software%20Development/Redis.md) method that updates Redis with the last action stats. Here we connect to the Redis instance running on the local Docker container. Then we increment the duration for the country in a sorted set identified by the key last action stats. We are defining this as a method here. However, in production systems, it's recommended to define it as a class that implements the data stream writer interface of Spark. Then we define another function to write to MariaDB. Here we first connect to the MariaDB database website stats. We then insert the last action and the duration values into the website stats table. Let's go to the main job now. In this job, we define a schema for the visit record received through Kafka. Then we initiate a Spark session with local as the master. This runs an embedded [PySpark](../../Skills/Data%20Science/PySpark.md) instance. We then proceed to subscribe and receive visit data from the Kafka topic. To extract relevant attributes from the Kafka record, we use the schema defined
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=94)** and cast the values into specific columns. The first analytics we perform is to filter for records where the last action is shopping cart. We publish these records to a Kafka topic called spark.streaming.carts.abandoned. We first format the record into a CSV and then publish it to Kafka. Next, we will update Redis to maintain total duration by country. The right to red function is used for this purpose. Finally, we will compute 5 second summaries. For this, we first create a watermark with event time using the timestamp attribute that is part of the visit record. Then we group by timestamp and last action. Then we find the sum of the duration from the data. To write this data into MariaDB, we use the right to MariaDB function. The three tasks will run continuously and concurrently as new records are received from Kafka. Finally, we start a countdown latch to keep the program running. Now let's proceed to execute the pipeline and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (4), [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** csv (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Executing the real-time pipeline](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=0)** - [Instructor] The realtime pipeline writes to three different destinations, namely Kafka, MariaDB, and [Redis](../../Skills/Software%20Development/Redis.md). We need to monitor these destinations to make sure that they are updated while the pipeline is running. We will do so in this notebook. This code is available in code 04_05_Spark_BDE_Execute_the_pipeline. We start with the Kafka topic that has the abandoned cards. We subscribe to that topic. Next, we connect to Redis to read the country stats. Finally, we connect to MariaDB to get the website stats. We get the total duration by last action using the summary stat [SQL](../../Skills/Data%20Science/SQL.md). Now we go into a monitoring loop. We first [Fetch](../../Skills/Web%20Development/Fetch.md) the Kafka messages in the abandoned cards topic, and print them. Then we get the current scores in Redis, and print them. Finally, we read the last action stats from the MariaDB database, and print them. We go to sleep for five seconds and repeat the loop. Let's run the demo now. We first start the execute pipeline monitoring loop.
>
> **[1:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=77)** Then we go to the code we built in the previous video for website analytics, and start the job. You can ignore the errors shown here. Finally, we go to the Kafka stream generator and then start the generator. We see that now some streaming data is being generated. Let's go to the execute pipeline notebook and observe the results. We can see that some stats data start showing up here. As we can see, the Kafka topic gets new messages, then gets analyzed in real time, and results are published into the destination Kafka queue. We can also see results from Redis and MariaDB. The counts in Redis and MariaDB keeps getting incremented. This completes our streaming pipeline example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 5. Data Engineering with Spark: Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Batch vs. real-time options](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=0)** - [Instructor] When building an [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) pipeline, would you choose a batch or a [Real-Time](../../Skills/Database%20Management/Real-Time.md) pipeline? Data engineers and architects have a tendency to build all pipelines as real-time pipelines whenever possible. The key justification is that it is super fast, would generate the required insights instantly, and enable business actions. It is also considered cool in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) world. But before jumping into building realtime pipelines, we need to understand the complexities involved. Realtime pipelines deal with unbounded data sets. This makes it difficult to size compute resources, like memory and clusters. When doing time-based aggregations, we need to deal with windowing and watermarks. Irrespective of how delayed the watermarks are, we do end up with missed events and incorrect aggregations. Real-time state management is another challenge to ensure that state is properly maintained across the Spark cluster. Reprocessing of events is complex when issues happen. It is not a simple rerun of the job, but a number of items need to be reset, like checkpoints and state. So when building a pipeline, it's important to analyze the requirements thoroughly before deciding if a real-time pipeline is appropriate for the use case. Go for real-time pipelines when responses, analytics, and actions are needed with latency of few seconds. Do make sure that this is a mandatory requirement,
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=96)** not a nice one to have. If this pipeline needs to process a continuous stream of real-time events, then real-time pipelines are a good choice. The processing should also involve minimal and mandatory aggregation and analytics. Adding too many aggregation steps will introduce complexity with watermarks and state management. Make sure that the compute resources are sufficiently available for realtime pipelines. Choose realtime pipelines only when the use case demands it. You can also build hybrid pipelines where part of the pipeline is realtime and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is batch. We will execute such a hybrid use case in our course exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (7), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (2), apache (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scaling extraction and loading operations](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=0)** - [Presenter] When scaling a [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) pipeline, all stages in the pipeline need to scale in order for the entire pipeline to scale. Extracting data and loading process data into destinations are time-consuming as they usually deal with discreets and rights. How do we scale these steps when building pipelines with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md)? Let's start with data extraction. Spark supports parallel extraction of data from various data sources. For example, Spark can read [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) records in parallel across its executors. Similarly, it can divide up Kafka partitions between executors and process them in parallel. For the data source being used, analyze the out-of-the-box options provided by Spark for that data source. Exploit these options for parallel reads of data while maintaining data consistency. If possible, choose a source technology and build the source schema in such a way to suit parallel operations. This option is only available if the source systems are also being designed and built at the same time as the data engineering pipelines. Spark supports predicate push downs. This pushes down filtering operations to the data sources, so unwanted records are not read into memory. Leverage them when possible. When doing parallel extractions, build defenses against missed records and duplicate records to ensure accurate results.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=93)** What about loading data after processing into data syncs? Each Spark executor can write independently and in parallel to a data sync for most out-of-the-box data syncs. Analyze how Spark works with a specific data sync technology like RDBMS or a Kafka queue. Understand the impact of record additions and updates on transactions, locking, and serialization. You may have to limit the number of parallel connections to the sync based on supported capacity and parallelism. Repartitioning RDDs is an effective way to control parallelism. Finally, build defenses against missed updates and duplicate updates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Env Vars:** jdbc (1), rdbms (1)
> **CLI Commands:** apache (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Scaling processing operations](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=0)** - [Instructor] How can we scale processing of data with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md)? Apache Spark is built for massive distributed operations, but care should be taken during pipeline design to avoid choke points and shuffles between executors. Filter any unwanted data as early as possible in the pipeline. This reduces the amount of data kept in memory and moved around executors. Minimize reduce operations and associated shuffling yearly in the pipeline. If needed, move them to the end of the pipeline as much as possible. Repartition data as needed to reduce the number of partitions. Certain operations have the tendency to create too many RDS, so keep track of this. Cache results in the pipeline when appropriate to reduce reprocessing of data. Avoid actions that send back data to the driver program until the end. This minimizes shuffles between executors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2)
> **CLI Commands:** apache (2)
> **Env Vars:** rds (1)
> **Speakers:** - [instructor] (1)

#### [Building resiliency](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=0)** - [Lecturer] When we build scalable [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), we also need to build resilience into them to make sure that the pipelines can support critical operations and deliver reliable outcomes. [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) provides various resilience capabilities out of the box against failures. It handles failures at a task level, stage level, and executor level. That is an important reason to use Apache Spark. However, some additional considerations are required to make the solution resilient. Monitor Spark jobs and Spark clusters for unhandled failures. Create alerting systems by which required personnel are informed and problems can be fixed quickly. Use checkpoints for streaming jobs with persistent data stores. Even if Spark restarts, it can resume from where it left off. Build resilience in associated input stores and output sinks. After all, it's not enough for Spark jobs to be resilient, but the entire solution should be. Choose data stores that provide redundancy and persistence of data. The compute infrastructure needs resilience too. Deploys Spark and cluster setups, so failure of one node does not bring down the entire pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **CLI Commands:** make (2), apache (2), node (1)
> **Definitions:** is an  (1)
> **Speakers:** - [lecturer] (1)


### 6. End-to-End Exercise Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Project exercise requirements](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=0)** - [Instructor] Having learned about [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), let's implement them in an end-to-end project. This is an exercise for the students to try out by themselves and then refer to the solutions provided in the chapter. There are always multiple ways to achieve the same end result. The solution provided in this chapter is only one such possible result. Here is the problem statement for the exercise. In chapter four, streaming use case, we created a MariaDB table with five second summaries of the last action performed by website users. We are going to use this table as the input and then build a downstream pipeline to analyze significant actions and maintain a running count table of the significant actions. Let's review the detailed requirements for the exercise. The task is to run a job every day and extract last action records with a total duration of more than 15 seconds within a five second window. To make sure that you have executed the examples in chapter four, so there is already data available in this table. Next, stream these significant last actions to a realtime Kafka topic, a topic called spark.exercise.lastaction.long has already been created for you during the setup process for the course. Then analyze the significant actions in the Kafka topic in real time and maintain a running counter of the significant last actions by action name. This use case combines a [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) task
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=96)** and a [Real-Time](../../Skills/Database%20Management/Real-Time.md) processing task and is an example of an hybrid pipeline. The example itself is made, but will demonstrate the use of the techniques learned in the course. Best of luck for the exercise. Please refer to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the videos in this chapter after you have completed this exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** apache (1), make (1)
> **Definitions:** is an  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Solution design](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=0)** - [Instructor] What would the hybrid pipeline for the course project look like? We start off with the MariaDB table called visit_stats in the website_stats database. We first build a long last action extraction job. Actions with long durations are considered significant actions. This job will filter records from the database and extract those with a duration of greater than 15 seconds. Each of these records will be published to the Kafka topic, spark.exercise.lastaction.long. We then build a second job, scorecard for last action job. This job will listen to the Kafka topic in real time. The job will maintain a [Redis](../../Skills/Software%20Development/Redis.md) sorted set to track lost actions and their counts. Each time a last action is received from the topic, the sorted set will be incremented for that specific action. Let's proceed to the next video to review the code for this exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Code Identifiers:** visit_stats (1), website_stats (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Extracting long last actions](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=0)** - [Instructor] Let's examine the example code for the first part of the exercise, Extracting_long_last_actions. The code for this example is available in the notebook code 06_03_Spark_BDE_long_last_actions. Here, we need to extract the records from the MariaDB database. Please note that the original records were generated using system date when the website visits data generator was run. So please make sure to use the right date ranges. A connection to the MariaDB database is obtained in Summary Con. In order to take advantage of parallelism, we first find the min and max bounce for the records using the bounce query. Then we define a Spark session. We execute the query to filter for long actions and store them in the last action data frame. We take advantage of parallelism by setting the relevant options for bounce and partitions. We print the top 10 records in last action. Next, we extract the last action column from the data set and publish it to the Kafka topic, spark.exercise.lastaction.long. Let's run this code and review the results. We see that the last action count is published as 32 for an FAQ record.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=96)** We will build the second job in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the last (1), in the next (1)
> **Env Vars:** faq (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Building a scorecard](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=0)** - [Instructor] Let's build a running scorecard for long last actions published to Kafka in the previous video. The code for this job is available in code 06_04_Spark_BDE_scorecard_for_last_action notebook. To help with managing the [Redis](../../Skills/Software%20Development/Redis.md) sorted set, we also have the write_to_redis function. The Redis writer maintains a sorted set called long-last-action-stats on the Redis instance running on Docker. Here, it increments the count by one every time a last action occurs in the data stream. In the main job, we defined a Spark session. Since we only have one value in topic, last_action, we do not need to define a schema. Bury the topic directly into the raw_last_action dataframe. From here, we extract the value as last_action into the last_action dataframe. To maintain the Redis sorted set, we use the writeStream method and call the registrator for each record. This will update and maintain the Redis sorted set. We use the start method to start the Spark pipeline. In order to review the values in the sorted set, we start a while loop. We query the stats and Redis every five minutes and print it to the console. Let's run this code now. We can see that the long last action stats
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=94)** are getting updated in the UI. This completes our exercise and the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (6)
> **Code Identifiers:** last_action (3), write_to_redis (1), raw_last_action (1), writestream (1)
> **CLI Commands:** docker (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More about Apache Spark](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=0)** - [Kumaran] Now that you have learned about how to build [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) use cases with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), you can take your learning even further. First, learn more about batch and stream processing use cases with Apache Spark with other courses in this platform. Second, learn about how to use similar technologies like Kafka Streams and Apache Flink for the same use cases. And finally, solve a new data engineering problem in your organization using the learnings from this course. Data always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2)
> **CLI Commands:** apache (3), find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Big Data
- Apache Spark
- Data Pipelines

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
← [Data Cleaning in Python Essential Training](Data%20Cleaning%20in%20Python%20Essential%20Training.md) | **5 of 7** | [ETL in Python and SQL](ETL%20in%20Python%20and%20SQL.md) →

### In [Moving from Data Scientist to Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Scientist%20to%20Data%20Analyst.md)
← [Deep Learning Getting Started](../Artificial%20Intelligence%20(AI)/Deep%20Learning%20Getting%20Started.md) | **7 of 10** | [Python- Working with Predictive Analytics](Python-%20Working%20with%20Predictive%20Analytics.md) →

### In [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)
**1 of 6** | [Introduction to Spark SQL and DataFrames](Introduction%20to%20Spark%20SQL%20and%20DataFrames.md) →

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
- [Moving from Data Scientist to Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Scientist%20to%20Data%20Analyst.md)
- [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)

## Related Courses

_Courses sharing skills:_

- [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) — Data Engineering, Apache Spark
- [Databricks Certified Data Engineer Associate Cert Prep](Databricks%20Certified%20Data%20Engineer%20Associate%20Cert%20Prep.md) — Data Engineering
- [Introduction to Spark SQL and DataFrames](Introduction%20to%20Spark%20SQL%20and%20DataFrames.md) — Apache Spark
- [Transition from Data Science to Data Engineering](../Cloud%20Computing/Transition%20from%20Data%20Science%20to%20Data%20Engineering.md) — Data Engineering
- [Advanced Data Engineering with Snowflake](../Cloud%20Computing/Advanced%20Data%20Engineering%20with%20Snowflake.md) — Data Pipelines

---

[↑ Back to top](#)