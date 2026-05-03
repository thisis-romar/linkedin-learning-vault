---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: big-data-analytics-with-hadoop-and-apache-spark-24658440
url: "https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440"
duration_minutes: 51
duration: 51m
level: Intermediate
updated: 10/2/2024
learners: 7151
skills:
  - Data Engineering
  - Big Data Analytics
  - Hadoop
  - Apache Spark
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHTOWKtGDMPmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725568658115?e=2147483647&amp;v=beta&amp;t=-JZmGED0H1HZUEkFYqEttM9iiuN8b-Ku22lfGhJnv6o"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Data Skills in Apache Spark]]'
prev_courses:
  - '[[Architecting Big Data Applications- Batch Mode Application Engineering]]'
next_courses:
  - '[[PySpark Essential Training- Introduction to Building Data Pipelines]]'
path_nav: '[{"path":"Advance Your Data Skills in Apache Spark","position":5,"total":6,"prev":"Architecting Big Data Applications- Batch Mode Application Engineering","next":"PySpark Essential Training- Introduction to Building Data Pipelines"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/data-engineering
  - skill/big-data-analytics
  - skill/hadoop
  - skill/apache-spark
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md)

![Big Data Analytics with Hadoop and Apache Spark](https://media.licdn.com/dms/image/v2/D560DAQHTOWKtGDMPmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725568658115?e=2147483647&amp;v=beta&amp;t=-JZmGED0H1HZUEkFYqEttM9iiuN8b-Ku22lfGhJnv6o)

# Big Data Analytics with Hadoop and Apache Spark

> Apache Hadoop was a pioneer in the world of big data technologies, and it continues to lead in enterprise big data storage. Apache Spark is the top big data processing engine and provides an impressive array of features and capabilities. When used together, the Hadoop Distributed File System (HDFS) and Spark can provide a truly scalable setup for big data analytics. In this course, data analytics 

> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440) | 51m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The combined power of Spark and Hadoop Distributed File System (HDFS)](#the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs)
- [**1. Introduction and Setup**](#1-introduction-and-setup) (4 videos)
  - [Apache Hadoop overview](#apache-hadoop-overview)
  - [Apache Spark overview](#apache-spark-overview)
  - [Integrating Spark and Hadoop](#integrating-spark-and-hadoop)
  - [Using exercise files](#using-exercise-files)
- [**2. HDFS Data Modeling for Analytics**](#2-hdfs-data-modeling-for-analytics) (5 videos)
  - [Storage formats](#storage-formats)
  - [Compression](#compression)
  - [Partitioning](#partitioning)
  - [Bucketing](#bucketing)
  - [Best practices for data storage](#best-practices-for-data-storage)
- [**3. Data Ingestion with Spark**](#3-data-ingestion-with-spark) (5 videos)
  - [Reading external files into Spark](#reading-external-files-into-spark)
  - [Writing to HDFS](#writing-to-hdfs)
  - [Parallel writes with partitioning](#parallel-writes-with-partitioning)
  - [Parallel writes with bucketing](#parallel-writes-with-bucketing)
  - [Best practices for ingestion](#best-practices-for-ingestion)
- [**4. Data Extraction with Spark**](#4-data-extraction-with-spark) (5 videos)
  - [How Spark works](#how-spark-works)
  - [Reading HDFS files with schema](#reading-hdfs-files-with-schema)
  - [Reading partitioned data](#reading-partitioned-data)
  - [Reading bucketed data](#reading-bucketed-data)
  - [Best practices for data extraction](#best-practices-for-data-extraction)
- [**5. Optimizing Spark Processing**](#5-optimizing-spark-processing) (6 videos)
  - [Pushing down projections](#pushing-down-projections)
  - [Pushing down filters](#pushing-down-filters)
  - [Managing partitions](#managing-partitions)
  - [Improving joins](#improving-joins)
  - [Storing intermediate results](#storing-intermediate-results)
  - [Best practices for data processing](#best-practices-for-data-processing)
- [**6. Use Case Project**](#6-use-case-project) (5 videos)
  - [Problem definition](#problem-definition)
  - [Data loading](#data-loading)
  - [Total score analytics](#total-score-analytics)
  - [Average score analytics](#average-score-analytics)
  - [Top student analytics](#top-student-analytics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with big data analytics](#continuing-on-with-big-data-analytics)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The combined power of Spark and Hadoop Distributed File System (HDFS)](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=0)** - [Instructor] Using a combination of [[Hadoop]] for storage and Spark for compute, provides unparalleled [[Scalability]] and performance for analytics pipelines. To do this, it's important to understand how Hadoop and Spark work with each other and utilize the levers available. We will only focus on using Hadoop and Spark together in this course. We will use [[PySpark]] and Jupyter Notebooks for the examples. My name is Kumaran Ponnambalam. In this course, I will show you how to build scalable and high performance analytics pipelines. Let's explore how to maximize the combined power of Hadoop and Spark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (4), [[Scalability]] (1), [[PySpark]] (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Apache Hadoop overview](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=0)** - [Instructor] In this video, I will review the key features and the current state of technology for Apache [[Hadoop]]. Hadoop is an open source technology that started the [[Big Data]] wave. It provides distributed [[Data Storage]] and computing using low cost [[Hardware]]. It can scale to petabytes of data and can run on clusters with hundreds of nodes. Hadoop mainly consists of two components, the Hadoop Distributed File System or HDFS that provides data storage. MapReduce is a programming model and implementation that provides distributed computing capabilities with data stored in HDFS. Where does Hadoop stand today? Let's look at HDFS and MapReduce separately. HDFS is still a very good option for cheap storage of large quantities of data. It provides scaling, security and cost benefits that help in its adoption. It is most suitable for enterprises with in-house data centers who want to host the data within their network. Cloud alternatives like AWS S3, [[Google Cloud Platform (GCP)|Google Cloud]] Storage and [[Microsoft Azure|Azure]] Blob are becoming increasingly popular too. MapReduce, on the other hand, is becoming old. While it scales horizontally over hundreds of compute nodes, it is very slow, as it primarily uses this storage for intermediate caching instead of memory. Newer technologies like [[Apache Spark]]
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=93)** and Apache Flink have emerged that can execute the same processing at much faster rates. The newer technologies also support other capabilities and a growing library of connectors, which makes them a better choice than MapReduce.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (5), [[Data Storage]] (2), [[Big Data]] (1), [[Hardware]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** hdfs (4), aws (1)
> **CLI Commands:** apache (3), aws (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Apache Spark overview](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=0)** - [Narrator] In this video, I will review some of the salient features of [[Apache Spark]]. Apache Spark is an open source technology that started out as a more efficient alternative to [[Hadoop]] MapReduce. It is a large scale distributed [[Data Processing]] engine. Spark sources data primarily in memory to speed up computations. It has also grown to add a number of capabilities like [[Batch Processing]], [[Real-Time]], streaming, machine learning and graphs. Spark can be programmed with [[Scala]], [[Java]], [[Python (Programming Language)|Python]], and R. Its performance features and programming support makes it the most popular [[Big Data]] technology today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Spark]] (2), [[Hadoop]] (1), [[Data Processing]] (1), [[Batch Processing]] (1), [[Real-Time]] (1)
> **CLI Commands:** apache (2), python (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Integrating Spark and Hadoop](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=0)** - [Instructor] In this video, I will review the benefits of using [[Hadoop]] and Spark together for [[Big Data Analytics]]. Why is the combination of Hadoop and Spark so powerful? HDFS provides large-scale distributed [[Data Storage]]. Spark provides large-scale fast processing of the same data. Together, they make an excellent combination for building [[Data Pipelines]]. Spark is well integrated with Hadoop natively and makes optimal use of that integration. For example, Spark can access and update HDFS data using multiple parallel nodes. There are a number of data read optimizations that use less memory and value. Spark can use HDFS for intermediate data caching. Also, YARN provides a single cluster management mechanism for both HDFS and Spark. So my recommendation, especially for enterprise deployments, is to utilize the processing power of Spark with the scalable storage of HDFS to build high performance processing jobs. In this course, I will demonstrate the strengths of this integration, and provide samples and best practices for building [[Big Data]] pipelines with Spark and Hadoop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (4), [[Big Data Analytics]] (1), [[Data Storage]] (1), [[Data Pipelines]] (1), [[Big Data]] (1)
> **Env Vars:** hdfs (5), yarn (1)
> **CLI Commands:** make (1), yarn (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using exercise files](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=0)** - [Instructor] Let's set up the required software for use in this course. We will use [[PySpark]] for our programming exercises using the built-in Spark instance that comes with PySpark. To install PySpark and other [[Python (Programming Language)|Python]] requirements, let's install Anaconda Navigator first. We can download Anaconda from this website shown here. Let's go to Anaconda Navigator. Here, let's create an environment called spark. Let's choose Python 3.11 for this course. The environment is ready now. Let's now install Jupyter Notebook in this environment. Please download the exercise files into a local folder. I have downloaded the exercise files in a folder called Exercise Files. Use the command prompt to navigate to the folder where you have downloaded the exercise files. On [[Windows]], please use [[Powershell]] for this purpose. PySpark has some environment dependencies that also need to be set up. First, it needs [[Java]] 17. I have already installed Java 17 on my system. We can verify this by using java -version. We need to set up the JAVA_HOME environment variable to point to this Java 17 folder.
>
> **[1:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=96)** This has already been set up in this environment. Similarly, we need another variable called PYSPARK_PYTHON with the value python set up. Please make sure that these are set up correctly in your environment. Now we can activate the new environment we created for Python using conda activate spark. Next, we can start the Jupyter Notebooks in this folder.
>
> **[2:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=135)** We can see the web browser open up the root folder with Jupyter Notebook. Here let's set up the prerequisites by using the notebook called 01_04 using the exercise files. Let's run the first cell. This will install all the dependencies we need for running the examples. If you are using Windows, then follow the additional instructions mentioned here for Windows. Copy the [[Hadoop]] folder in the Exercise Files to a folder like C:\hadoop. Create a HADOOP_HOME environment variable pointing to this folder. Then add C:\hadoop\bin to the PATH variable. Once this is done, abort the Jupyter Notebook session and close the command window. Reopen the command window and restart Jupyter Notebooks. Then we create a dummy HDFS folder. This folder will mimic a distributed file system like Hadoop. We will not be using HTFS for this course, but instead we use a proxy to represent HTFS files. Run the cell to create the folder, and also verify if the environment variables are correctly set up. The setup is now done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PySpark]] (4), [[Python (Programming Language)|Python]] (4), [[Java]] (4), [[Hadoop]] (4), [[Windows]] (3)
> **Prerequisites:** set up (8), install (4), setup (1)
> **Tools:** jupyter (5), anaconda (3), command prompt (1), powershell (1)
> **Env Vars:** htfs (2), java_home (1), pyspark_python (1), hadoop_home (1), path (1)
> **Exercise Files:** exercise files (6), download the (1)
> **CLI Commands:** python (4), make (1)
> **Versions:** java 17 (3), python 3 (1)
> **UI Navigation:** go to (1), navigate to (1)


### 2. HDFS Data Modeling for Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Storage formats](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=0)** - [Instructor] In this chapter, I will review various options available and best practices to store data in HDFS. I will start off with storage formats in this video. HDFS supports a variety of storage formats, each with its own advantages and use cases. The list includes raw text files, structured text files like CSV, XML and [[JSON]], native sequence files, Avro formatted files, ORC files, and Parquet files. I will review the most popular ones for analytics now. Text files carry the same format they have in a normal file system. They are stored as a single physical file in HDFS. They are of low performance as they do not support parallel operations. They require more storage and do not have an enforced schema. In general, they are not recommended. Avro file support language neutral data serialization. So data return through one language or tool can be read with another with no problems. Data is stored row by row like CSV files. They support a self describing schema and is used to enforce constraints on data. They are compressible and hence can optimize on storage. They are splittable into partitions and hence can help in parallel reads and writes. They're ideal for situations that require multi-language support. Parquet file store data column by column,
>
> **[1:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=94)** similar to columnar [[Databases]]. This means each column can be read separately from disc without reading other columns. This saves on IO. They support schema. Parquet files are both compressible and splittable, and hence our performance and storage optimized. They also can support nested [[Data Structures]]. Parquet files are ideal for batch analytics jobs for these reasons. Analytics applications typically have data stored as records and columns, similar to RDBM tables. Parquet provides overall better performance and flexibility for these applications. I will show later in the course how Parquet enables parallelization and IO optimization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Databases]] (1), [[Data Structures]] (1)
> **Env Vars:** hdfs (3), csv (2), xml (1), json (1), orc (1)
> **Analogies:** similar to (2)
> **Cross-References:** later in (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Compression](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=0)** - [Instructor] When storing [[Big Data]], compressing data is important as it saves significant disc space and hence reduces operational costs. In this video, I will review the various file compression options available. The most popular compression codecs available are Snappy, LZO, GZIP, and bzip2. You can also develop your own codec if required. Snappy is a compression codec developed by [[Google]]. It provides moderate compression, but excellent read-write performance. Snappy compresses the entire file as opposed to compressing it element by element. It is not splittable and hence not suitable for parallel operations. LZO is similar to Snappy in that it provides moderate compression and excellent processing performance. It can also be used to split files and hence as an advantage, with parallel processing. But it requires a separate license that needs to be carefully evaluated for possible costs. GZIP is a popular codec that provides very good compression. It has moderate read-write performance, and it is not splittable. It combines well with parquet where each column can be individually compressed within a partition where splitting is not needed. Hence, it is suitable for analytics applications, especially when combined with parquet. bzip2 is another codec that offers excellent compression, but slow read-write performance.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=95)** It also supports splitting. It is ideal for data archival type of applications where data is returned once for archival or backup cases and rarely read back. Choose a compression format based on the type of application and the expected access patterns for data. It is recommended to do proof of concept projects to understand actual impact of codecs on both storage and processing based on the specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Google]] (1)
> **Env Vars:** lzo (2), gzip (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Partitioning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=0)** - [Instructor] Partitioning is a key concept to use while working with HDFS data. In this video, I will review the importance of partitioning and how it works. Why do we need partitioning? [[Relational Databases]] speed up data access by using indexes on columns used in filter conditions. HDFS does not have the concept of an index. Even if a single row is required from a large petabyte file, the entire file should be read to extract the record. This introduces significant disc I/O and delays. Partitioning provides a way to read only a subset of data based on a partition key. Similar to indexes, partitions can also be based on multiple attributes. Typical attributes suitable for partitioning include dates and element identifiers like customer or product names. How does partitioning work? When we create a HDFS file, specifying a partition key, [[Hadoop]] create a separate directory per partition. Records corresponding to a specific partition key is stored in the same directory. For example, if we use product as a partition key, a separate directory will be created for each product, and corresponding records will be stored there. If we use a filter on the product attribute while querying only those sub directories that match the filter need to be read. While selecting attributes for partitioning, choose attributes that have a limited
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=95)** or controlled set of values, otherwise too many sub directories might be created. Also, ensure that the records are equally distributed among the various values. Choose attributes that are most used in query patterns. Likely candidates include dates, customer IDs, product IDs, among others. In the next video, I will discuss an alternative to partitioning called bucketing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Hadoop]] (1)
> **Env Vars:** hdfs (3)
> **Analogies:** similar to (1), for example (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bucketing](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=0)** - [Instructor] As seen in the previous video, partitioning is only optimal when a given attribute has a small set of unique values. What if we need to partition for a key with a large number of values without prolificating the number of directories. Bucketing is the answer. Bucketing works similar to partitioning, but instead of using the value of the attribute, it uses a hash function to convert the value into a specific hash key. Values that have the same hash key end up in the same bucket or subdirectory. The number of unique buckets can be controlled and limited. This also ensures even distribution of values across all buckets. It's ideal for attributes that have a large number of unique values like order number or transaction ID. Choose buckets for attributes that have a large number of unique values and those that are most frequently used inquiry filters. Experiment with multiple bucket counts to find optimal read-write performance for the specific use case. In the next video, I will review some best practices for [[Data Storage]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for data storage](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=0)** - [Instructor] In this video, I will walk through some of the best practices for designing HDFS schema and storage. First, during the design stage, understand the most used read and write patterns for your data. Identify if it's read intensive or write intensive or both. For reads, analyze what filters are usually applied on data. Determine what needs optimization and what can be compromised. Is it important to reduce storage requirements or is it okay to compromise on storage for better read write performance? Choose your options carefully as these cannot be easily changed after the pipeline is deployed and data is created. Changing things like storage formats and compression codex would require reprocessing all the data, run tests on actual data to understand performance and storage characteristics. Experiment if required to compare between different storage options available. Choose partitioning and bucketing keys wisely as they incur significantly additional costs during writes while helping in reads. In the next chapter, let's start reading and writing HDFS files with Spark using these practices.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 3. Data Ingestion with Spark

[↑ Back to Table of Contents](#table-of-contents)

#### [Reading external files into Spark](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=0)** - [Instructor] In this chapter, I will demonstrate options available to ingest data into HDFS with Spark. The examples for this chapter are available in the Notebook, code 03 XX [[Data Ingestion]] with Spark and HDFS. For all the examples, we need a Spark session. The first cell creates a spark session with a parallelism of two. In this video, we will focus on reading external data into Spark. Spark provides connectors to a number of external data sources, including a local file, a file from HDFS or a Kafka topic. Here we read a CSV file. The file salesorders.csv is available under the dataset folder in the exercise files, we will read this salesorders.csv file into a data frame. We set the option for the header to tell Spark to consider the first line in the file as the header. We also specify inferSchema equals true. Spark will examine the first few lines in the file to infer the data type of each column. It'll then use the header line to name the individual columns. We will print the schema for the data frame as well as the first five rows to make sure that the data has been read correctly. Let's run this code and review the results.
>
> **[1:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=98)** In the next few videos, I will show you many ways of parallelizing this data and storing it in HDFS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Ingestion]] (1)
> **Env Vars:** hdfs (4), csv (1)
> **File Paths:** salesorders.csv (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** inferschema (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Writing to HDFS](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=0)** - [Instructor] CSV files cannot be used for parallel or distributed reads and writes. We need to convert them into other formats like Parquet for efficient processing of data in the later stages. In this video, we will write the rawSalesData data frame into a Parquet file in HDFS. The code to achieve this is simple. We use the write function available in the data frame. We set the format to parquet. The mode is set to overwrite, to override any existing contents. In real pipelines though, append may be a better option if there are periodic additions to the dataset. We will use Gzip to compress this data. We save it in the raw_parquet directory. Let's execute this code and examine the results.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=61)** We can go to the dummy_hdfs folder to view the files that have been created. The folder is created as raw_parquet. We can see a file created with the specification of Gzip as the compression algorithm. Depending on the size of data, there could be more files that get created. In the next video, I will show you how to partition data.

> [!info]- Semantic Content
>
> **Code Identifiers:** raw_parquet (2), rawsalesdata (1), dummy_hdfs (1)
> **Env Vars:** csv (1), hdfs (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Parallel writes with partitioning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=0)** - [Instructor] As reviewed in the previous videos, partitioning of data enables parallel writes and reads. It also helps in filtering data while reading it into memory. We will use a partitioned HDFS store based on the product column. There are only four unique [[Microsoft Products|products]] in the dataset, so it lends itself to easier partitioning. We simply need to add the partitionBy method in the write process to trigger partitioning while storing data. We save this in the partitioned_parquet directory. Let's run this code and examine the HDFS files created.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=44)** When we navigate to the partitioned_parquet directory, we see four subdirectories created. They are one per partition, since there are only four products. The name of the directory shows the partition key and the value. This directory name can be used to filter data and focus on the directories that contain relevant data. In the next video, I will show you how to use bucketing with Hive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Code Identifiers:** partitioned_parquet (2), partitionby (1)
> **Env Vars:** hdfs (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Parallel writes with bucketing](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=0)** - [Instructor] As reviewed in the earlier videos, bucketing can be used to partition data where there are a large number of unique values for a given column. In this case, we create buckets, again, based on the product column. We will create three buckets. In order to do bucketing, we use the bucket by method. We specify the number of buckets and the column to bucket by. We also want to save this data as a hive table, adding a savers table with the table name saves the data to hive. The hive table is created under this park warehouse folder as we are using a dummy HD of a system, we run an example query from the table to verify its contents. Let's execute this code now. We can see the list of [[Databases]] and the locations using the spark list databases method. This shows the folder where the actual file is stored. We can go to the HTFS, under this park warehouse folder, to examine its contents. We can see the product bucket table stored here. This is stored with multiple parts, each corresponding to a bucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Env Vars:** htfs (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for ingestion](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=1)** - [Instructor] Let's review some of the best practices for [[Data Ingestion]] with [[Hadoop]] and Spark. Enable parallelism for maximum right performance. This can be achieved by using splittable file formats like Parquet, and using partitions or buckets. When doing incremental data ingestion, use APPEND. This will help optimally distribute the right loads across partitions and buckets. While reading external data into Spark, prefer sources that can enable parallelism. This includes [[Java Database Connectivity (JDBC)|JDBC]] and Kafka. Break down large files into smaller files if reading from disc. Request the data originators to create such parallelizable data sources. In the next chapter, I will show you how to read data that is stored in an optimal fashion in HDFS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Ingestion]] (2), [[Hadoop]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1)
> **Env Vars:** append (1), jdbc (1), hdfs (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. Data Extraction with Spark

[↑ Back to Table of Contents](#table-of-contents)

#### [How Spark works](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=0)** - [Instructor] In order to optimize an [[Apache Spark]] pipeline, it is important to understand how Spark works internally. When design decisions are made, they need to be analyzed on how they impact [[Scalability]] and performance. In this video, I will review how Spark executes a pipeline and optimizes it. I recommend further reading on this topic to master the internals. Spark programs run on a driver node, which works with a Spark cluster to execute them. A Spark cluster can consist of multiple executor nodes capable of executing the program in parallel. The level of parallelism and performance achieved is dependent upon how the pipeline is designed. Let's review an example pipeline and how it gets executed. First, the source data is read from an external data source into a structure, data 1. Data 1 is then converted to a data frame or its internal representation, resilient distributed data sets, or RDDs. During this conversion, it is partitioned and individual partitions are assigned and moved to the executor nodes available. When a transform operation like map or filter is executed, these operations are pushed down to the executors. The executors execute the code locally on their partitions and create new partitions with the result. There is no movement of data between the executors.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=95)** Hence, transforms can be executed in parallel. Next, when an action like reduce or group by is performed, the partitions need to be shuffled and aggregated. This results in movement of data between executors and can create I/O and memory bottlenecks. Finally, the data is collected back to the driver node. The partitions are merged and sent back to the driver. From here, they can be stored into external destination [[Databases]]. Spark has an optimizer that analyzes the steps needed to process data and optimizes for performance and resources. Spark only executes code when an action like reduce or collect is performed. At this point, the optimizer kicks in and analyzes all the previous steps required to achieve this action. It then comes up with a physical execution plan. The optimizer looks for reducing I/O, shuffling, and memory usage. If the data sources can support parallel I/O, then spark accesses them directly from the executor and parallelizes these operations. This provides improved performance and reduces memory requirements on the driver. In the later videos, I will show you how to influence the physical plans for better performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Spark]] (1), [[Scalability]] (1), [[Databases]] (1)
> **CLI Commands:** node (2), apache (1)
> **Speakers:** - [instructor] (1)

#### [Reading HDFS files with schema](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=0)** - [Instructor] In this chapter, we will read the Parquet files we created earlier into Spark. We will examine the execution plans to understand how Spark works to read files. We will use the exercise file code_04_XX Data Extraction into Spark. First, we need to create a Spark session for executing the examples. We will read the non-partition raw_parquet file first in this video. We read it using the read.parquet function. We print the first file records in the dataframe. We also execute the explained function to print out the physical plan. Let's run this code and examine the results. We see that the file has been read correctly and the results displayed. Let's examine the physical execution plan to understand what it shows. It does a file scan of the Parquet file. It shows the contents that are read from the file. It shows the location of the file and the schema that is used to read the files. We will examine the [[Representational State Transfer (REST)|rest]] of the contents in future examples as we exercise them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** raw_parquet (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Reading partitioned data](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=0)** - [Instructor] In this video, we will read a partition dataset into Spark and understand how it works. This is in section 4.3 of the notebook. We will read the Parquet files under the directory partition_parquet. We will cover all partitions. The product name, which is the partition value, will not be stored in the files as it is already available in the directory name. The base path need to be provided for the data to be read for the product name also as the column. We again display the first files. We will also print the execution plan. Let's run this code and review the results. The most important addition to the physical plan is the partition count showed in the in-memory location index. This shows the number of partitions read from disk into memory. More partitions means more IO and memory requirements. Reducing this count will lead to better performance. We will see techniques for this later in the course. Next, we will only read one partition from the store data. We will only load the product headset. If we need to analyze only a subset of data, it's recommended to only read that subset and minimize IO and memory requirements.

> [!info]- Semantic Content
>
> **Code Identifiers:** partition_parquet (1)
> **Versions:** 4.3 (1)
> **Cross-References:** later in (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Reading bucketed data](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=0)** - [Instructor] In this video, I will show you how Spark reads bucketed data stored in Hive. Spark does not persist to the Hive catalog between multiple Spark session instances when it is being used in [[PySpark]] on a notebook. In a product system, we can use a persisted catalog with Hive Metastore, though. In this example, we will load the bucketed data directly from disk. Then we will create a view on it. Once a view is created, we can run [[SQL]] statements against this view. We will query for all the records where the product is webcam and print the results. Let's run this code and examine the results. We can see that the data we saved in the last chapter has been retrieved correctly. We will now review some best practices for reading data into Spark in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PySpark]] (1), [[SQL]] (1)
> **Cross-References:** in the last (1), in the next (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for data extraction](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=0)** - [Instructor] What are some of the key best practices for data extraction from HDFS into Spark for Analytics? The first is to read only the required data in the memory. This means read subdirectories, subset of partitions, and subset of columns. Less data means less resource requirements and less time to execute. Use data sources and file formats that support parallelism. Avro and Parquet are some of the recommended ones. The number of partitions in the data files are important. Each partition can be independently read by a separate executor code in parallel. The number of parallel operations in a Spark Cluster is the number of executor nodes, multiplied by the number of CPU cores in each executor. If the number of partitions are greater than this value, it'll trigger maximum parallelism. Please keep in mind that other jobs running at the same time will also compete for these resources. In the next chapter, I will focus on optimizing processing data read from HDFS.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (2), cpu (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 5. Optimizing Spark Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Pushing down projections](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=0)** - [Instructor] In this chapter, we will review some of the techniques that can be used during [[Data Processing]] to optimize Spark and HDFS performance. The code for this chapter is available in the notebook, code 05 XX Optimizing Data Processing. We create a spark session first to use in the [[Representational State Transfer (REST)|rest]] of the chapter. We set default parallelism to eight. We start with pushing down projections. Projection here means the set or subset of columns that are selected from a dataset. Typically, we read an entire file with all the columns into memory and then only use a subset of columns later for computations. During lazy evaluation, spark is smart enough to identify the subset of columns that will actually be used and then only [[Fetch]] them into memory. This is called projection push down. In this example, we read the entire Parquet file into the sales data data frame. Later, we only select the product and quantity columns. Spark identifies this and only fetches those two columns into memory. Let's run this code and review the execution plan. In the execution plan, the file scan only reads these two columns and provides optimization. A pipeline developer needs to help Spark do these optimizations by not using columns unnecessarily.
>
> **[1:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=94)** For example, using a show function with all the columns, even for troubleshooting, boot fetch all the columns and prevent projection push downs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (2), [[Fetch]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** hdfs (1)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Pushing down filters](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=0)** - [Instructor] Similar to projection push downs, Spark is capable of identifying a subset of rows that are actually required for processing and [[Fetch]] them to memory. If the subset of rows correspond to specific partitions, Spark will only read those partitions. In this example, we will try two filters. One is a filter on product. Product is a partitioned column. The other is a filter on a non-partition column, customer. Spark will push down both these filters to the file scan, so it'll not read unnecessary rows into memory. Let's execute both these filters and analyze the results.
>
> **[0:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=47)** In the case of a filter on a partition column, we can see partition filters being used. The partition count is also one. This means that Spark has identified that the filter is on a partition and only attempts to read files for that partition. In the case of a filter without a partition column, we see pushed filters on the file scan. Partition-based filter push down is the most efficient since Spark will only attempt to read files within that partition. In the non-partition case, it has to read all the files are partitions, but only load those records that match the filter condition. Understanding this mechanism helps design partitions to maximize push downs. This saves on IO and memory. The earlier the filtering happens, less data needs to be processed in later stages of the pipeline. In the next video, I will discuss partitioning and coalescing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Managing partitions](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=0)** - [Instructor] One of the key aspects to understand about Spark internals is partitioning. This is different from HDFS partitioning. When Spark reads a partitioned file, it creates internal partitions equal to the default parallelism. Transforms maintain the same number of partitions, but actions will create a different number, usually equal to the default parallelism set up for this parked instance. Typically, in a local node, parallelism is two, and in a cluster mode it's 200. Having too many or too little partitions will impact performance. As discussed in the earlier video, the ideal number of partitions should be equal to the total number of cores available in Spark. We can change the number of partitions by repartitioning and coalescing. Let's run this exercise first and then review the results. We first print the default parallelism set up for the cluster, it's eight. This number can be changed in Spark configuration. Then we look at the number of partitions on a partition data source, which is sales data. This number of partitions is four. Next, we read a non-partition data source, which is the raw orders file and look at the partition count. The number is one. This is the problem with having data sources that do not support parallelism. An RDD can be re partitioned to a new number of partitions with the repartition function.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=95)** We can also specify the number of partitions. We repartition raw sales data into five partitions, and then confirm the count by printing it. Next, we can also coalesce a dataframe to reduce the number of partitions. We coalesce the partitioned sales data from five partitions to three partitions and confirm its size. Repartitioning does partitioning from scratch. Coalesce simply combines existing partitions to a larger partition. Note that both these activities themselves take significant time. Typically, actions upset the ideal partition count and hence, repartition needs to be done after that. But it is recommended to do this only if there are multiple transforms that follow and can take advantage of the resized partitions. In the next video, I will show you how to optimize joints.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (1), rdd (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Improving joins](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=0)** - [Instructor] Joins in Spark help combining two data sets to provide better insights. As important as they are in analytics, they also cause significant delays. Join between two data frames require the partitions of these data frames to be shuffled, so rows that match the join conditions are in the same executor nodes. Spark optimizer, again, does a lot of behind-the-scene work to optimize joins. One of them is the broadcast join. If the size of one of the joined data frames is less than the spark.[[SQL]].autoBroadcastJoinThreshold, then Spark broadcast the entire data frame to all the executor nodes where the other data frame resides. Then, the join itself becomes a local activity within the executor, since the entire copy of the smaller data frame is available in each of the nodes. In this example, we read the product_vendor.csv into the product_data frame. The data frame itself is very small. We then join it with sales_data to produce a combined data frame. In Spark, we can also provide a join hint to recommend use of broadcast joins using the broadcast function. Let's execute this code and look at the execution plan that Spark has generated. We see that there are two parallel FileScan operations to read both the files.
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=93)** Then, we see a BroadcastExchange operation for the smaller product's data frame. This means that this data frame is broadcast to all the executed nodes. Then, we see a BroadcastHashJoin for the actual join. It is recommended to use de-normalized data sources and avoid joins if possible, else review the execution plans to make sure that the joins are optimal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Code Identifiers:** autobroadcastjointhreshold (1), product_vendor (1), product_data (1), sales_data (1)
> **File Paths:** spark.sql (1), product_vendor.csv (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Storing intermediate results](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=0)** - [Instructor] As we have seen in the previous examples for execution plans, every time an action is performed, Spark goes all the way towards data source and reads data. This happens even if the data was read before and some actions were performed. While this works fine while running automated jobs, it is a problem during interactive analytics. Every time a new action command is executed on the interactive shell, Spark goes back to its source. It is better to cache intermediate results so we can resume analytics from these results without starting all over. Spark has two modes of caching - in memory and disk. The cache method is used to cache in memory only. The persist method is used to cache in memory, disk, or both. In this example, we cached the coalesced sales data data frame in disk using the persist function. Spark does lazy evaluation, so we need to execute an action to trigger caching. We will compare the execution plan before and after intermediate caching. First, we do a filter for customer equals [[Google]] on the coalesced sales data data frame. Then we use the persist function to store the intermediate coalesced sales data data frame to disk. We then run the same filter for customer equals Google on this data frame and review the execution plan. Let's run this code and review the execution plans. In the plan before caching, we see that there is a filter pushed down
>
> **[1:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=94)** to the raw file being read with file scan. This means that Spark goes back all the way to the file and re-execute the code. In the second plan after caching, we see the in-memory table scan. This means that Spark is using the temporary persisted data frame. Caching helps in performance and reuse, especially while doing interactive queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **Definitions:** is a  (2), means that (2)
> **Speakers:** - [instructor] (1)

#### [Best practices for data processing](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=0)** - [Instructor] As we have seen in the previous examples for execution plans, every time an action is performed, Spark goes all the way to its data source and reads the data. This happens even if the data was read before and some actions were performed. While this works fine while running automated jobs, it is a problem during interactive analytics. Every time a new action command is executed on an interactive shell, Spark goes back to its source. It is better to cache intermediate results so we can resume analytics from these results without starting all over. Spark has two modes of caching: in-memory and disk. The cache method is used to cache in-memory only. The persist method is used to cache in-memory, disk, or both. In this example, we first cache the words RDD into memory using the cache function. Spark does lazy evaluation, so we need to execute an action to trigger the caching. Next, we will compare execution plans before and after intermediate caching. First, we do a filter for product equals mouse on the coalasced sales data data frame. Then we use the persist function to store the intermediate coalesced sales data data frame to disk. We then run the same filter for product equals mouse on this data frame and then review the execution plan. Let's run this code and review the results.
>
> **[1:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=96)** First, let's open this Spark UI. Go to the storage tab. This shows all the cached and persistent data frames. We see the first words RDD showing as stored in memory. We also see the coalesced RDD being stored in disk. We coalesced into three partitions before and we see the same partition count here. Next, let's review the execution plans. In the plan before caching, we see that there is a filter push down. The filter push down goes all the way to the file scan. This means that Spark goes all the way back to the file and reexecutes all the code. In the second plan after caching, we see that there is an in-memory scan, and the filter is on this in-memory scan. This means that Spark is using the temporary persistent data frame for doing this filter. Caching helps in performance and reuse, especially while doing interactive queries.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (2), is an  (1)
> **Env Vars:** rdd (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 6. Use Case Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Problem definition](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=0)** - [Instructor] In this chapter, we will take up a use-case problem and build a solution using [[Apache Spark]] and [[Hadoop]]. During this process, we will leverage various tools and techniques we learned during the course. Here is the problem we need to solve. We have our source data in student_scores.csv file as part of the course resources. This file has student scores by subject during a school year. There are four attributes in this data source. The student name, the subject, the class score, which indicates the score the student got from his assignments, and the test score, which indicates the score the student got from his final examination. The use-case actions to execute are as follows. Load the CSV into HDFS. The data should be loaded in Paruqet format, and the compression use should be GZIP. Choose a partitioning scheme that would fit this data based on the analytics problems solved in this use case. Next, read the data from this HDFS store and analyze the following. First, compute the total score for each student per subject. The total score is the sum of class score and the test score. Then print the scores that each of the student received in physics. Next, compute the average score of the total scores each student got across all subjects. Finally, find the student with the highest score
>
> **[1:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=97)** for each subject. Analyze execution plans for all of these use case exercises. It is recommended that you try these exercises and find solutions yourself before checking on the reference solutions in the following videos. Best of luck with this use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Spark]] (1), [[Hadoop]] (1)
> **Env Vars:** hdfs (2), csv (1), gzip (1)
> **CLI Commands:** find (2), apache (1)
> **File Paths:** student_scores.csv (1)
> **Code Identifiers:** student_scores (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Data loading](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=0)** - [Instructor] The code for this exercise is in the notebook code_06_XX Use Case-Analyze Student Scores. We begin the exercise by creating a Spark session with eight partitions. In this video, we will look at loading the use case data into HDFS. This is pretty straightforward. First, we read the CSV file into the raw student data dataframe. We print the schema and the data to make sure that everything went fine for the reading process. Let's execute this code. Next, we create a partition data store in Parquet format with compression as gzip as required by the use case. In the case of partitioning, we have two columns that are frequently used in the future exercises, they are student and subject. Both are extensively used in these exercises. We could have gone with either of them or both of them for partitioning. Given that subject has a limited number of values as opposed to student names, we will go with subject as the partition key. Let's execute this code. Next, we read back this data into a partition dataframe called student_data. We check the number of partitions in the dataframe. Let's run this code now. We see a value of 4, which is the number of subjects in the dataset.
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=93)** Next, we will perform the required analytics on this dataframe.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (1), csv (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** student_data (1)
> **Speakers:** - [instructor] (1)

#### [Total score analytics](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=0)** - [Instructor] In this video, we will compute the total score for each student by subject and print the total scores for physics for all students. To compute the total score, we will use the map transform in the data frame. We can simply use the withColumn function to compute the new column from existing columns and create the TotalScore data frame. We then print the results. Let's run this code now. Next, we print the total score for physics for all students. This is a simple filter that we execute on the subject column. Let's run this code now. The execution plan shows that this filter was pushed down to HDFS, and only one partition was read for this operation. But this read the data source again and computed the total score again as there was no caching. In the next video, we will cache this data for future analytics.

> [!info]- Semantic Content
>
> **Code Identifiers:** withcolumn (1)
> **Env Vars:** hdfs (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Average score analytics](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=0)** - [Instructor] Now, let's compute the average scores for students across all subjects. To begin with, we will cache the total score dataframe so we don't have to read the entire data source and compute total scores again and again. Then, we find the average score for each student by executing an action. We group by student and compute the average for the total score. We display the results as well as the execution plan. Let's execute this code now. First, we see that the average total score shows up correctly for each student as desired by the use case. Then in the execution plan, we see that InMemoryTableScan is used on the two columns. This means that the cache is working and total scores are not getting computed again. In the next video, we will find the top student by each subject.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Top student analytics](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=0)** - [Instructor] For the final task, we will find the top student by each subject in the data source. This is the time to evaluate if we need to do repartitioning. Given that we have not generated any result dataframes from an action that needs further transformations, we don't need to look at repartitioning. Finding top students by subject is a tricky use case and there are multiple ways to solve it. In this reference example, we first find the top score for each subject. Then we find the student who got the top score. To find the top score by subject, we simply group by subject and find the max of the top score. The results are stored in the TopScore dataframe. Then we join this TopScore dataframe with the TotalScore dataframe based on both the subject and the score value. This will extract the list of student records that have the top score. We print the results. Let's execute this code now. We can see that the students with top score are correctly printed as required by the use case. This completes our use case exercise.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with big data analytics](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=0)** - [Kumaran] Now that you have taken this course, you can take your learning even further. Learn more about the various capabilities available in [[Apache Spark]], including [[SQL]], machine learning, and graphs. Run the exercises on a Spark cluster with multiple nodes, and analyze its performance and bottlenecks. Build an end-to-end live project for Spark Analytics for [[Hadoop]] in your organization. This will give you the hands-on experience that can help build your skillset. Data always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Spark]] (1), [[SQL]] (1), [[Hadoop]] (1)
> **CLI Commands:** apache (1), find (1)
> **Env Vars:** sql (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Big Data Analytics
- Hadoop
- Apache Spark

## Path Context

### In [[Advance Your Data Skills in Apache Spark]]
← [[Architecting Big Data Applications- Batch Mode Application Engineering]] | **5 of 6** | [[PySpark Essential Training- Introduction to Building Data Pipelines]] →

## Appears In

- [[Advance Your Data Skills in Apache Spark]]

## Related Courses

_Courses sharing skills:_

- [[Apache Spark Essential Training- Big Data Engineering]] — Data Engineering, Apache Spark
- [[Big Data in the Age of AI]] — Big Data Analytics
- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Introduction to Spark SQL and DataFrames]] — Apache Spark
- [[Transition from Data Science to Data Engineering]] — Data Engineering

---

[↑ Back to top](#)