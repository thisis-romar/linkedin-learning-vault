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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md)

![Big Data Analytics with Hadoop and Apache Spark](https://media.licdn.com/dms/image/v2/D560DAQHTOWKtGDMPmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725568658115?e=2147483647&amp;v=beta&amp;t=-JZmGED0H1HZUEkFYqEttM9iiuN8b-Ku22lfGhJnv6o)

# Big Data Analytics with Hadoop and Apache Spark

> Apache Hadoop was a pioneer in the world of big data technologies, and it continues to lead in enterprise big data storage. Apache Spark is the top big data processing engine and provides an impressive array of features and capabilities. When used together, the Hadoop Distributed File System (HDFS) and Spark can provide a truly scalable setup for big data analytics. In this course, data analytics 

> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440) | 51m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Introduction and Setup]]** (4 videos)
- **[[#3. 2. HDFS Data Modeling for Analytics]]** (5 videos)
- **[[#4. 3. Data Ingestion with Spark]]** (5 videos)
- **[[#5. 4. Data Extraction with Spark]]** (5 videos)
- **[[#6. 5. Optimizing Spark Processing]]** (6 videos)
- **[[#7. 6. Use Case Project]]** (5 videos)
- **[[#8. Conclusion]]** (1 videos)

### 1. Introduction

#### The combined power of Spark and Hadoop Distributed File System (HDFS)
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=0)** - [Instructor] Using a combination of Hadoop for storage and Spark for compute, provides unparalleled scalability and performance for analytics pipelines.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=10)** To do this, it's important to understand how Hadoop and Spark work with each other and utilize the levers available.
>
> **[0:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=18)** We will only focus on using Hadoop and Spark together in this course.
>
> **[0:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=23)** We will use PySpark and Jupyter Notebooks for the examples.
>
> **[0:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=27)** My name is Kumaran Ponnambalam.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=29)** In this course, I will show you how to build scalable and high performance analytics pipelines.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/the-combined-power-of-spark-and-hadoop-distributed-file-system-hdfs?u=76281980&t=36)** Let's explore how to maximize the combined power of Hadoop and Spark.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Introduction and Setup

#### Apache Hadoop overview
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=0)** - [Instructor] In this video, I will review the key features and the current state of technology for Apache Hadoop.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=8)** Hadoop is an open source technology that started the big data wave.
>
> **[0:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=12)** It provides distributed data storage and computing using low cost hardware.
>
> **[0:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=18)** It can scale to petabytes of data and can run on clusters with hundreds of nodes.
>
> **[0:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=24)** Hadoop mainly consists of two components, the Hadoop Distributed File System or HDFS that provides data storage.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=32)** MapReduce is a programming model and implementation that provides distributed computing capabilities with data stored in HDFS.
>
> **[0:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=42)** Where does Hadoop stand today?
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=44)** Let's look at HDFS and MapReduce separately.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=48)** HDFS is still a very good option for cheap storage of large quantities of data.
>
> **[0:54](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=54)** It provides scaling, security and cost benefits that help in its adoption.
>
> **[0:59](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=59)** It is most suitable for enterprises with in-house data centers who want to host the data within their network.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=68)** Cloud alternatives like AWS S3, Google Cloud Storage and Azure Blob are becoming increasingly popular too.
>
> **[1:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=77)** MapReduce, on the other hand, is becoming old.
>
> **[1:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=80)** While it scales horizontally over hundreds of compute nodes, it is very slow, as it primarily uses this storage for intermediate caching instead of memory.
>
> **[1:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=91)** Newer technologies like Apache Spark and Apache Flink have emerged that can execute the same processing at much faster rates.
>
> **[1:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-hadoop-overview?u=76281980&t=100)** The newer technologies also support other capabilities and a growing library of connectors, which makes them a better choice than MapReduce.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (4), aws (1)
> **CLI Commands:** apache (3), aws (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Apache Spark overview
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=0)** - [Narrator] In this video, I will review some of the salient features of Apache Spark.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=6)** Apache Spark is an open source technology that started out as a more efficient alternative to Hadoop MapReduce.
>
> **[0:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=14)** It is a large scale distributed data processing engine.
>
> **[0:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=18)** Spark sources data primarily in memory to speed up computations.
>
> **[0:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=23)** It has also grown to add a number of capabilities like batch processing, real-time, streaming, machine learning and graphs.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=32)** Spark can be programmed with Scala, Java, Python, and R.
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/apache-spark-overview?u=76281980&t=37)** Its performance features and programming support makes it the most popular big data technology today.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2), python (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### Integrating Spark and Hadoop
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=0)** - [Instructor] In this video, I will review the benefits of using Hadoop and Spark together for big data analytics.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=8)** Why is the combination of Hadoop and Spark so powerful?
>
> **[0:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=12)** HDFS provides large-scale distributed data storage.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=16)** Spark provides large-scale fast processing of the same data.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=20)** Together, they make an excellent combination for building data pipelines.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=25)** Spark is well integrated with Hadoop natively and makes optimal use of that integration.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=31)** For example, Spark can access and update HDFS data using multiple parallel nodes.
>
> **[0:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=38)** There are a number of data read optimizations that use less memory and value.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=44)** Spark can use HDFS for intermediate data caching.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=48)** Also, YARN provides a single cluster management mechanism for both HDFS and Spark.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=55)** So my recommendation, especially for enterprise deployments, is to utilize the processing power of Spark with the scalable storage of HDFS to build high performance processing jobs.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/integrating-hadoop-and-spark?u=76281980&t=68)** In this course, I will demonstrate the strengths of this integration, and provide samples and best practices for building big data pipelines with Spark and Hadoop.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (5), yarn (1)
> **CLI Commands:** make (1), yarn (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=0)** - [Instructor] Let's set up the required software for use in this course.
>
> **[0:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=4)** We will use PySpark for our programming exercises using the built-in Spark instance that comes with PySpark.
>
> **[0:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=13)** To install PySpark and other Python requirements, let's install Anaconda Navigator first.
>
> **[0:19](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=19)** We can download Anaconda from this website shown here.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=25)** Let's go to Anaconda Navigator.
>
> **[0:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=27)** Here, let's create an environment called spark.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=33)** Let's choose Python 3.11 for this course.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=40)** The environment is ready now.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=44)** Let's now install Jupyter Notebook in this environment.
>
> **[0:50](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=50)** Please download the exercise files into a local folder.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=55)** I have downloaded the exercise files in a folder called Exercise Files.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=61)** Use the command prompt to navigate to the folder where you have downloaded the exercise files.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=68)** On Windows, please use PowerShell for this purpose.
>
> **[1:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=73)** PySpark has some environment dependencies that also need to be set up.
>
> **[1:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=77)** First, it needs Java 17.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=81)** I have already installed Java 17 on my system.
>
> **[1:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=84)** We can verify this by using java -version.
>
> **[1:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=89)** We need to set up the JAVA_HOME environment variable to point to this Java 17 folder.
>
> **[1:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=96)** This has already been set up in this environment.
>
> **[1:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=102)** Similarly, we need another variable called PYSPARK_PYTHON with the value python set up.
>
> **[1:52](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=112)** Please make sure that these are set up correctly in your environment.
>
> **[1:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=116)** Now we can activate the new environment we created for Python using conda activate spark.
>
> **[2:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=124)** Next, we can start the Jupyter Notebooks in this folder.
>
> **[2:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=135)** We can see the web browser open up the root folder with Jupyter Notebook.
>
> **[2:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=140)** Here let's set up the prerequisites by using the notebook called 01_04 using the exercise files.
>
> **[2:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=148)** Let's run the first cell.
>
> **[2:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=150)** This will install all the dependencies we need for running the examples.
>
> **[2:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=157)** If you are using Windows, then follow the additional instructions mentioned here for Windows.
>
> **[2:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=162)** Copy the hadoop folder in the Exercise Files to a folder like C:\hadoop.
>
> **[2:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=169)** Create a HADOOP_HOME environment variable pointing to this folder.
>
> **[2:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=173)** Then add C:\hadoop\bin to the PATH variable.
>
> **[3:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=180)** Once this is done, abort the Jupyter Notebook session and close the command window.
>
> **[3:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=185)** Reopen the command window and restart Jupyter Notebooks.
>
> **[3:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=189)** Then we create a dummy HDFS folder.
>
> **[3:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=193)** This folder will mimic a distributed file system like Hadoop.
>
> **[3:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=197)** We will not be using HTFS for this course, but instead we use a proxy to represent HTFS files.
>
> **[3:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=204)** Run the cell to create the folder, and also verify if the environment variables are correctly set up.
>
> **[3:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/using-exercise-files?u=76281980&t=213)** The setup is now done.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (8), install (4), setup (1)
> **Tools:** jupyter (5), anaconda (3), command prompt (1), powershell (1)
> **Code Keywords:** let (8)
> **Env Vars:** htfs (2), java_home (1), pyspark_python (1), hadoop_home (1), path (1)
> **Exercise Files:** exercise files (6), download the (1)
> **CLI Commands:** python (4), make (1)
> **Versions:** java 17 (3), python 3 (1)
> **UI Navigation:** go to (1), navigate to (1)


### 3. 2. HDFS Data Modeling for Analytics

#### Storage formats
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=0)** - [Instructor] In this chapter, I will review various options available and best practices to store data in HDFS.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=8)** I will start off with storage formats in this video.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=11)** HDFS supports a variety of storage formats, each with its own advantages and use cases.
>
> **[0:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=18)** The list includes raw text files, structured text files like CSV, XML and JSON, native sequence files, Avro formatted files, ORC files, and Parquet files.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=32)** I will review the most popular ones for analytics now.
>
> **[0:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=35)** Text files carry the same format they have in a normal file system.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=40)** They are stored as a single physical file in HDFS.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=44)** They are of low performance as they do not support parallel operations.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=49)** They require more storage and do not have an enforced schema.
>
> **[0:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=53)** In general, they are not recommended.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=56)** Avro file support language neutral data serialization.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=60)** So data return through one language or tool can be read with another with no problems.
>
> **[1:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=67)** Data is stored row by row like CSV files.
>
> **[1:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=71)** They support a self describing schema and is used to enforce constraints on data.
>
> **[1:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=77)** They are compressible and hence can optimize on storage.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=81)** They are splittable into partitions and hence can help in parallel reads and writes.
>
> **[1:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=86)** They're ideal for situations that require multi-language support.
>
> **[1:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=91)** Parquet file store data column by column, similar to columnar databases.
>
> **[1:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=96)** This means each column can be read separately from disc without reading other columns.
>
> **[1:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=102)** This saves on IO.
>
> **[1:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=104)** They support schema.
>
> **[1:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=106)** Parquet files are both compressible and splittable, and hence our performance and storage optimized.
>
> **[1:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=113)** They also can support nested data structures.
>
> **[1:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=116)** Parquet files are ideal for batch analytics jobs for these reasons.
>
> **[2:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=121)** Analytics applications typically have data stored as records and columns, similar to RDBM tables.
>
> **[2:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=128)** Parquet provides overall better performance and flexibility for these applications.
>
> **[2:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storage-formats?u=76281980&t=134)** I will show later in the course how Parquet enables parallelization and IO optimization.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (3), csv (2), xml (1), json (1), orc (1)
> **Code Keywords:** require (2), self (1)
> **Analogies:** similar to (2)
> **Cross-References:** later in (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Compression
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=0)** - [Instructor] When storing big data, compressing data is important as it saves significant disc space and hence reduces operational costs.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=9)** In this video, I will review the various file compression options available.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=15)** The most popular compression codecs available are Snappy, LZO, GZIP, and bzip2.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=21)** You can also develop your own codec if required.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=25)** Snappy is a compression codec developed by Google.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=29)** It provides moderate compression, but excellent read-write performance.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=33)** Snappy compresses the entire file as opposed to compressing it element by element.
>
> **[0:39](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=39)** It is not splittable and hence not suitable for parallel operations.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=44)** LZO is similar to Snappy in that it provides moderate compression and excellent processing performance.
>
> **[0:52](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=52)** It can also be used to split files and hence as an advantage, with parallel processing.
>
> **[0:58](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=58)** But it requires a separate license that needs to be carefully evaluated for possible costs.
>
> **[1:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=65)** GZIP is a popular codec that provides very good compression.
>
> **[1:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=69)** It has moderate read-write performance, and it is not splittable.
>
> **[1:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=73)** It combines well with parquet where each column can be individually compressed within a partition where splitting is not needed.
>
> **[1:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=82)** Hence, it is suitable for analytics applications, especially when combined with parquet.
>
> **[1:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=88)** bzip2 is another codec that offers excellent compression, but slow read-write performance.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=95)** It also supports splitting.
>
> **[1:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=97)** It is ideal for data archival type of applications where data is returned once for archival or backup cases and rarely read back.
>
> **[1:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=107)** Choose a compression format based on the type of application and the expected access patterns for data.
>
> **[1:54](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/compression?u=76281980&t=114)** It is recommended to do proof of concept projects to understand actual impact of codecs on both storage and processing based on the specific use case.

> [!info]- Semantic Content
>
> **Env Vars:** lzo (2), gzip (2)
> **Definitions:** is a  (2)
> **Code Keywords:** case. (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=0)** - [Instructor] Partitioning is a key concept to use while working with HDFS data.
>
> **[0:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=5)** In this video, I will review the importance of partitioning and how it works.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=11)** Why do we need partitioning?
>
> **[0:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=13)** Relational databases speed up data access by using indexes on columns used in filter conditions.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=21)** HDFS does not have the concept of an index.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=25)** Even if a single row is required from a large petabyte file, the entire file should be read to extract the record.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=32)** This introduces significant disc I/O and delays.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=36)** Partitioning provides a way to read only a subset of data based on a partition key.
>
> **[0:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=42)** Similar to indexes, partitions can also be based on multiple attributes.
>
> **[0:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=47)** Typical attributes suitable for partitioning include dates and element identifiers like customer or product names.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=55)** How does partitioning work?
>
> **[0:58](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=58)** When we create a HDFS file, specifying a partition key, hadoop create a separate directory per partition.
>
> **[1:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=66)** Records corresponding to a specific partition key is stored in the same directory.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=72)** For example, if we use product as a partition key, a separate directory will be created for each product, and corresponding records will be stored there.
>
> **[1:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=82)** If we use a filter on the product attribute while querying only those sub directories that match the filter need to be read.
>
> **[1:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=90)** While selecting attributes for partitioning, choose attributes that have a limited or controlled set of values, otherwise too many sub directories might be created.
>
> **[1:41](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=101)** Also, ensure that the records are equally distributed among the various values.
>
> **[1:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=107)** Choose attributes that are most used in query patterns.
>
> **[1:50](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=110)** Likely candidates include dates, customer IDs, product IDs, among others.
>
> **[1:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/partitioning?u=76281980&t=117)** In the next video, I will discuss an alternative to partitioning called bucketing.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (3)
> **Analogies:** similar to (1), for example (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Bucketing
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=0)** - [Instructor] As seen in the previous video, partitioning is only optimal when a given attribute has a small set of unique values.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=9)** What if we need to partition for a key with a large number of values without prolificating the number of directories.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=17)** Bucketing is the answer.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=20)** Bucketing works similar to partitioning, but instead of using the value of the attribute, it uses a hash function to convert the value into a specific hash key.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=33)** Values that have the same hash key end up in the same bucket or subdirectory.
>
> **[0:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=38)** The number of unique buckets can be controlled and limited.
>
> **[0:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=42)** This also ensures even distribution of values across all buckets.
>
> **[0:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=47)** It's ideal for attributes that have a large number of unique values like order number or transaction ID.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=55)** Choose buckets for attributes that have a large number of unique values and those that are most frequently used inquiry filters.
>
> **[1:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=64)** Experiment with multiple bucket counts to find optimal read-write performance for the specific use case.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/bucketing?u=76281980&t=72)** In the next video, I will review some best practices for data storage.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), case. (1)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Best practices for data storage
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=0)** - [Instructor] In this video, I will walk through some of the best practices for designing HDFS schema and storage.
>
> **[0:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=7)** First, during the design stage, understand the most used read and write patterns for your data.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=15)** Identify if it's read intensive or write intensive or both.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=20)** For reads, analyze what filters are usually applied on data.
>
> **[0:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=24)** Determine what needs optimization and what can be compromised.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=29)** Is it important to reduce storage requirements or is it okay to compromise on storage for better read write performance?
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=37)** Choose your options carefully as these cannot be easily changed after the pipeline is deployed and data is created.
>
> **[0:45](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=45)** Changing things like storage formats and compression codex would require reprocessing all the data, run tests on actual data to understand performance and storage characteristics.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=57)** Experiment if required to compare between different storage options available.
>
> **[1:03](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=63)** Choose partitioning and bucketing keys wisely as they incur significantly additional costs during writes while helping in reads.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-storage?u=76281980&t=72)** In the next chapter, let's start reading and writing HDFS files with Spark using these practices.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1)
> **Env Vars:** hdfs (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Data Ingestion with Spark

#### Reading external files into Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=0)** - [Instructor] In this chapter, I will demonstrate options available to ingest data into HDFS with Spark.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=8)** The examples for this chapter are available in the Notebook, code 03 XX data ingestion with Spark and HDFS.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=17)** For all the examples, we need a Spark session.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=21)** The first cell creates a spark session with a parallelism of two.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=31)** In this video, we will focus on reading external data into Spark.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=36)** Spark provides connectors to a number of external data sources, including a local file, a file from HDFS or a Kafka topic.
>
> **[0:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=46)** Here we read a CSV file.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=49)** The file salesorders.csv is available under the dataset folder in the exercise files, we will read this salesorders.csv file into a data frame.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=61)** We set the option for the header to tell Spark to consider the first line in the file as the header.
>
> **[1:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=69)** We also specify inferSchema equals true.
>
> **[1:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=73)** Spark will examine the first few lines in the file to infer the data type of each column.
>
> **[1:19](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=79)** It'll then use the header line to name the individual columns.
>
> **[1:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=84)** We will print the schema for the data frame as well as the first five rows to make sure that the data has been read correctly.
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=93)** Let's run this code and review the results.
>
> **[1:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-external-files-into-spark?u=76281980&t=98)** In the next few videos, I will show you many ways of parallelizing this data and storing it in HDFS.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (4), csv (1)
> **File Paths:** salesorders.csv (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** inferschema (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Writing to HDFS
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=0)** - [Instructor] CSV files cannot be used for parallel or distributed reads and writes.
>
> **[0:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=5)** We need to convert them into other formats like Parquet for efficient processing of data in the later stages.
>
> **[0:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=14)** In this video, we will write the rawSalesData data frame into a Parquet file in HDFS.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=22)** The code to achieve this is simple.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=25)** We use the write function available in the data frame.
>
> **[0:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=28)** We set the format to parquet.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=32)** The mode is set to overwrite, to override any existing contents.
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=37)** In real pipelines though, append may be a better option if there are periodic additions to the dataset.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=44)** We will use Gzip to compress this data.
>
> **[0:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=46)** We save it in the raw_parquet directory.
>
> **[0:50](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=50)** Let's execute this code and examine the results.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=61)** We can go to the dummy_hdfs folder to view the files that have been created.
>
> **[1:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=66)** The folder is created as raw_parquet.
>
> **[1:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=70)** We can see a file created with the specification of Gzip as the compression algorithm.
>
> **[1:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=76)** Depending on the size of data, there could be more files that get created.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/writing-to-hdfs?u=76281980&t=81)** In the next video, I will show you how to partition data.

> [!info]- Semantic Content
>
> **Code Identifiers:** raw_parquet (2), rawsalesdata (1), dummy_hdfs (1)
> **Code Keywords:** function (1), override (1), let (1)
> **Env Vars:** csv (1), hdfs (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Parallel writes with partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=0)** - [Instructor] As reviewed in the previous videos, partitioning of data enables parallel writes and reads.
>
> **[0:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=7)** It also helps in filtering data while reading it into memory.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=11)** We will use a partitioned HDFS store based on the product column.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=17)** There are only four unique products in the dataset, so it lends itself to easier partitioning.
>
> **[0:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=23)** We simply need to add the partitionBy method in the write process to trigger partitioning while storing data.
>
> **[0:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=30)** We save this in the partitioned_parquet directory.
>
> **[0:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=34)** Let's run this code and examine the HDFS files created.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=44)** When we navigate to the partitioned_parquet directory, we see four subdirectories created.
>
> **[0:51](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=51)** They are one per partition, since there are only four products.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=56)** The name of the directory shows the partition key and the value.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=60)** This directory name can be used to filter data and focus on the directories that contain relevant data.
>
> **[1:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-partitioning?u=76281980&t=66)** In the next video, I will show you how to use bucketing with Hive.

> [!info]- Semantic Content
>
> **Code Identifiers:** partitioned_parquet (2), partitionby (1)
> **Env Vars:** hdfs (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Parallel writes with bucketing
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=0)** - [Instructor] As reviewed in the earlier videos, bucketing can be used to partition data where there are a large number of unique values for a given column.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=10)** In this case, we create buckets, again, based on the product column.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=15)** We will create three buckets.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=17)** In order to do bucketing, we use the bucket by method.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=20)** We specify the number of buckets and the column to bucket by.
>
> **[0:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=24)** We also want to save this data as a hive table, adding a savers table with the table name saves the data to hive.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=32)** The hive table is created under this park warehouse folder as we are using a dummy HD of a system, we run an example query from the table to verify its contents.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=44)** Let's execute this code now.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=49)** We can see the list of databases and the locations using the spark list databases method.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=56)** This shows the folder where the actual file is stored.
>
> **[1:03](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=63)** We can go to the HTFS, under this park warehouse folder, to examine its contents.
>
> **[1:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=69)** We can see the product bucket table stored here.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/parallel-writes-with-bucketing?u=76281980&t=72)** This is stored with multiple parts, each corresponding to a bucket.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1)
> **Env Vars:** htfs (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Best practices for ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=1)** - [Instructor] Let's review some of the best practices for data ingestion with Hadoop and Spark.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=6)** Enable parallelism for maximum right performance.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=10)** This can be achieved by using splittable file formats like Parquet, and using partitions or buckets.
>
> **[0:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=18)** When doing incremental data ingestion, use APPEND.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=21)** This will help optimally distribute the right loads across partitions and buckets.
>
> **[0:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=28)** While reading external data into Spark, prefer sources that can enable parallelism.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=33)** This includes JDBC and Kafka.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=36)** Break down large files into smaller files if reading from disc.
>
> **[0:41](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=41)** Request the data originators to create such parallelizable data sources.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-ingestion?u=76281980&t=48)** In the next chapter, I will show you how to read data that is stored in an optimal fashion in HDFS.

> [!info]- Semantic Content
>
> **Env Vars:** append (1), jdbc (1), hdfs (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Data Extraction with Spark

#### How Spark works
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=0)** - [Instructor] In order to optimize an Apache Spark pipeline, it is important to understand how Spark works internally.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=9)** When design decisions are made, they need to be analyzed on how they impact scalability and performance.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=16)** In this video, I will review how Spark executes a pipeline and optimizes it.
>
> **[0:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=23)** I recommend further reading on this topic to master the internals.
>
> **[0:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=27)** Spark programs run on a driver node, which works with a Spark cluster to execute them.
>
> **[0:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=34)** A Spark cluster can consist of multiple executor nodes capable of executing the program in parallel.
>
> **[0:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=42)** The level of parallelism and performance achieved is dependent upon how the pipeline is designed.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=49)** Let's review an example pipeline and how it gets executed.
>
> **[0:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=53)** First, the source data is read from an external data source into a structure, data 1.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=60)** Data 1 is then converted to a data frame or its internal representation, resilient distributed data sets, or RDDs.
>
> **[1:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=69)** During this conversion, it is partitioned and individual partitions are assigned and moved to the executor nodes available.
>
> **[1:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=77)** When a transform operation like map or filter is executed, these operations are pushed down to the executors.
>
> **[1:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=85)** The executors execute the code locally on their partitions and create new partitions with the result.
>
> **[1:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=92)** There is no movement of data between the executors.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=95)** Hence, transforms can be executed in parallel.
>
> **[1:39](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=99)** Next, when an action like reduce or group by is performed, the partitions need to be shuffled and aggregated.
>
> **[1:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=108)** This results in movement of data between executors and can create I/O and memory bottlenecks.
>
> **[1:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=115)** Finally, the data is collected back to the driver node.
>
> **[1:59](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=119)** The partitions are merged and sent back to the driver.
>
> **[2:03](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=123)** From here, they can be stored into external destination databases.
>
> **[2:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=128)** Spark has an optimizer that analyzes the steps needed to process data and optimizes for performance and resources.
>
> **[2:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=136)** Spark only executes code when an action like reduce or collect is performed.
>
> **[2:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=142)** At this point, the optimizer kicks in and analyzes all the previous steps required to achieve this action.
>
> **[2:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=149)** It then comes up with a physical execution plan.
>
> **[2:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=153)** The optimizer looks for reducing I/O, shuffling, and memory usage.
>
> **[2:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=158)** If the data sources can support parallel I/O, then spark accesses them directly from the executor and parallelizes these operations.
>
> **[2:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=167)** This provides improved performance and reduces memory requirements on the driver.
>
> **[2:52](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/how-spark-works?u=76281980&t=172)** In the later videos, I will show you how to influence the physical plans for better performance.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), apache (1)
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Reading HDFS files with schema
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=0)** - [Instructor] In this chapter, we will read the Parquet files we created earlier into Spark.
>
> **[0:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=5)** We will examine the execution plans to understand how Spark works to read files.
>
> **[0:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=12)** We will use the exercise file code_04_XX Data Extraction into Spark.
>
> **[0:19](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=19)** First, we need to create a Spark session for executing the examples.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=29)** We will read the non-partition raw_parquet file first in this video.
>
> **[0:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=34)** We read it using the read.parquet function.
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=37)** We print the first file records in the dataframe.
>
> **[0:41](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=41)** We also execute the explained function to print out the physical plan.
>
> **[0:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=47)** Let's run this code and examine the results.
>
> **[0:51](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=51)** We see that the file has been read correctly and the results displayed.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=56)** Let's examine the physical execution plan to understand what it shows.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=61)** It does a file scan of the Parquet file.
>
> **[1:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=64)** It shows the contents that are read from the file.
>
> **[1:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=67)** It shows the location of the file and the schema that is used to read the files.
>
> **[1:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-hdfs-files-with-schema?u=76281980&t=71)** We will examine the rest of the contents in future examples as we exercise them.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2)
> **Code Identifiers:** raw_parquet (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Reading partitioned data
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=0)** - [Instructor] In this video, we will read a partition dataset into Spark and understand how it works.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=6)** This is in section 4.3 of the notebook.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=10)** We will read the Parquet files under the directory partition_parquet.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=15)** We will cover all partitions.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=17)** The product name, which is the partition value, will not be stored in the files as it is already available in the directory name.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=25)** The base path need to be provided for the data to be read for the product name also as the column.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=33)** We again display the first files.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=36)** We will also print the execution plan.
>
> **[0:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=38)** Let's run this code and review the results.
>
> **[0:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=42)** The most important addition to the physical plan is the partition count showed in the in-memory location index.
>
> **[0:52](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=52)** This shows the number of partitions read from disk into memory.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=56)** More partitions means more IO and memory requirements.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=60)** Reducing this count will lead to better performance.
>
> **[1:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=64)** We will see techniques for this later in the course.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=68)** Next, we will only read one partition from the store data.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=72)** We will only load the product headset.
>
> **[1:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-partitioned-data?u=76281980&t=75)** If we need to analyze only a subset of data, it's recommended to only read that subset and minimize IO and memory requirements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Code Identifiers:** partition_parquet (1)
> **Versions:** 4.3 (1)
> **Cross-References:** later in (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Reading bucketed data
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=0)** - [Instructor] In this video, I will show you how Spark reads bucketed data stored in Hive.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=6)** Spark does not persist to the Hive catalog between multiple Spark session instances when it is being used in PySpark on a notebook.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=16)** In a product system, we can use a persisted catalog with Hive Metastore, though.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=22)** In this example, we will load the bucketed data directly from disk.
>
> **[0:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=27)** Then we will create a view on it.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=29)** Once a view is created, we can run SQL statements against this view.
>
> **[0:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=34)** We will query for all the records where the product is webcam and print the results.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=40)** Let's run this code and examine the results.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=44)** We can see that the data we saved in the last chapter has been retrieved correctly.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/reading-bucketed-data?u=76281980&t=49)** We will now review some best practices for reading data into Spark in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Best practices for data extraction
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=0)** - [Instructor] What are some of the key best practices for data extraction from HDFS into Spark for Analytics?
>
> **[0:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=7)** The first is to read only the required data in the memory.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=10)** This means read subdirectories, subset of partitions, and subset of columns.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=16)** Less data means less resource requirements and less time to execute.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=21)** Use data sources and file formats that support parallelism.
>
> **[0:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=26)** Avro and Parquet are some of the recommended ones.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=29)** The number of partitions in the data files are important.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=33)** Each partition can be independently read by a separate executor code in parallel.
>
> **[0:39](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=39)** The number of parallel operations in a Spark Cluster is the number of executor nodes, multiplied by the number of CPU cores in each executor.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=48)** If the number of partitions are greater than this value, it'll trigger maximum parallelism.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=55)** Please keep in mind that other jobs running at the same time will also compete for these resources.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-extraction?u=76281980&t=61)** In the next chapter, I will focus on optimizing processing data read from HDFS.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (2), cpu (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Optimizing Spark Processing

#### Pushing down projections
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=0)** - [Instructor] In this chapter, we will review some of the techniques that can be used during data processing to optimize Spark and HDFS performance.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=9)** The code for this chapter is available in the notebook, code 05 XX Optimizing Data Processing.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=17)** We create a spark session first to use in the rest of the chapter.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=22)** We set default parallelism to eight.
>
> **[0:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=28)** We start with pushing down projections.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=31)** Projection here means the set or subset of columns that are selected from a dataset.
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=37)** Typically, we read an entire file with all the columns into memory and then only use a subset of columns later for computations.
>
> **[0:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=46)** During lazy evaluation, spark is smart enough to identify the subset of columns that will actually be used and then only fetch them into memory.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=57)** This is called projection push down.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=60)** In this example, we read the entire Parquet file into the sales data data frame.
>
> **[1:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=65)** Later, we only select the product and quantity columns.
>
> **[1:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=70)** Spark identifies this and only fetches those two columns into memory.
>
> **[1:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=75)** Let's run this code and review the execution plan.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=81)** In the execution plan, the file scan only reads these two columns and provides optimization.
>
> **[1:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=87)** A pipeline developer needs to help Spark do these optimizations by not using columns unnecessarily.
>
> **[1:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-projections?u=76281980&t=94)** For example, using a show function with all the columns, even for troubleshooting, boot fetch all the columns and prevent projection push downs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Env Vars:** hdfs (1)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Pushing down filters
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=0)** - [Instructor] Similar to projection push downs, Spark is capable of identifying a subset of rows that are actually required for processing and fetch them to memory.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=10)** If the subset of rows correspond to specific partitions, Spark will only read those partitions.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=17)** In this example, we will try two filters.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=20)** One is a filter on product.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=22)** Product is a partitioned column.
>
> **[0:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=24)** The other is a filter on a non-partition column, customer.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=29)** Spark will push down both these filters to the file scan, so it'll not read unnecessary rows into memory.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=36)** Let's execute both these filters and analyze the results.
>
> **[0:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=47)** In the case of a filter on a partition column, we can see partition filters being used.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=55)** The partition count is also one.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=57)** This means that Spark has identified that the filter is on a partition and only attempts to read files for that partition.
>
> **[1:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=67)** In the case of a filter without a partition column, we see pushed filters on the file scan.
>
> **[1:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=76)** Partition-based filter push down is the most efficient since Spark will only attempt to read files within that partition.
>
> **[1:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=84)** In the non-partition case, it has to read all the files are partitions, but only load those records that match the filter condition.
>
> **[1:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=92)** Understanding this mechanism helps design partitions to maximize push downs.
>
> **[1:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=98)** This saves on IO and memory.
>
> **[1:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=100)** The earlier the filtering happens, less data needs to be processed in later stages of the pipeline.
>
> **[1:47](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/pushing-down-filters?u=76281980&t=107)** In the next video, I will discuss partitioning and coalescing.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (1)
> **Code Keywords:** let (1), case, (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Managing partitions
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=0)** - [Instructor] One of the key aspects to understand about Spark internals is partitioning.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=6)** This is different from HDFS partitioning.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=9)** When Spark reads a partitioned file, it creates internal partitions equal to the default parallelism.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=16)** Transforms maintain the same number of partitions, but actions will create a different number, usually equal to the default parallelism set up for this parked instance.
>
> **[0:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=26)** Typically, in a local node, parallelism is two, and in a cluster mode it's 200.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=31)** Having too many or too little partitions will impact performance.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=36)** As discussed in the earlier video, the ideal number of partitions should be equal to the total number of cores available in Spark.
>
> **[0:45](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=45)** We can change the number of partitions by repartitioning and coalescing.
>
> **[0:51](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=51)** Let's run this exercise first and then review the results.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=57)** We first print the default parallelism set up for the cluster, it's eight.
>
> **[1:02](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=62)** This number can be changed in Spark configuration.
>
> **[1:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=65)** Then we look at the number of partitions on a partition data source, which is sales data.
>
> **[1:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=71)** This number of partitions is four.
>
> **[1:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=74)** Next, we read a non-partition data source, which is the raw orders file and look at the partition count.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=81)** The number is one.
>
> **[1:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=83)** This is the problem with having data sources that do not support parallelism.
>
> **[1:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=88)** An RDD can be re partitioned to a new number of partitions with the repartition function.
>
> **[1:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=95)** We can also specify the number of partitions.
>
> **[1:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=98)** We repartition raw sales data into five partitions, and then confirm the count by printing it.
>
> **[1:45](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=105)** Next, we can also coalesce a dataframe to reduce the number of partitions.
>
> **[1:51](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=111)** We coalesce the partitioned sales data from five partitions to three partitions and confirm its size.
>
> **[1:58](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=118)** Repartitioning does partitioning from scratch.
>
> **[2:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=121)** Coalesce simply combines existing partitions to a larger partition.
>
> **[2:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=126)** Note that both these activities themselves take significant time.
>
> **[2:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=131)** Typically, actions upset the ideal partition count and hence, repartition needs to be done after that.
>
> **[2:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=138)** But it is recommended to do this only if there are multiple transforms that follow and can take advantage of the resized partitions.
>
> **[2:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/managing-partitions?u=76281980&t=148)** In the next video, I will show you how to optimize joints.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Env Vars:** hdfs (1), rdd (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Improving joins
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=0)** - [Instructor] Joins in Spark help combining two data sets to provide better insights.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=6)** As important as they are in analytics, they also cause significant delays.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=11)** Join between two data frames require the partitions of these data frames to be shuffled, so rows that match the join conditions are in the same executor nodes.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=22)** Spark optimizer, again, does a lot of behind-the-scene work to optimize joins.
>
> **[0:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=28)** One of them is the broadcast join.
>
> **[0:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=30)** If the size of one of the joined data frames is less than the spark.sql.autoBroadcastJoinThreshold, then Spark broadcast the entire data frame to all the executor nodes where the other data frame resides.
>
> **[0:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=46)** Then, the join itself becomes a local activity within the executor, since the entire copy of the smaller data frame is available in each of the nodes.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=56)** In this example, we read the product_vendor.csv into the product_data frame.
>
> **[1:04](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=64)** The data frame itself is very small.
>
> **[1:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=67)** We then join it with sales_data to produce a combined data frame.
>
> **[1:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=73)** In Spark, we can also provide a join hint to recommend use of broadcast joins using the broadcast function.
>
> **[1:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=81)** Let's execute this code and look at the execution plan that Spark has generated.
>
> **[1:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=88)** We see that there are two parallel FileScan operations to read both the files.
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=93)** Then, we see a BroadcastExchange operation for the smaller product's data frame.
>
> **[1:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=98)** This means that this data frame is broadcast to all the executed nodes.
>
> **[1:43](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=103)** Then, we see a BroadcastHashJoin for the actual join.
>
> **[1:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/improving-joins?u=76281980&t=108)** It is recommended to use de-normalized data sources and avoid joins if possible, else review the execution plans to make sure that the joins are optimal.

> [!info]- Semantic Content
>
> **Code Identifiers:** autobroadcastjointhreshold (1), product_vendor (1), product_data (1), sales_data (1)
> **Code Keywords:** require (1), function (1), let (1)
> **File Paths:** spark.sql (1), product_vendor.csv (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Storing intermediate results
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=0)** - [Instructor] As we have seen in the previous examples for execution plans, every time an action is performed, Spark goes all the way towards data source and reads data.
>
> **[0:10](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=10)** This happens even if the data was read before and some actions were performed.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=15)** While this works fine while running automated jobs, it is a problem during interactive analytics.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=21)** Every time a new action command is executed on the interactive shell, Spark goes back to its source.
>
> **[0:28](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=28)** It is better to cache intermediate results so we can resume analytics from these results without starting all over.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=36)** Spark has two modes of caching - in memory and disk.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=40)** The cache method is used to cache in memory only.
>
> **[0:43](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=43)** The persist method is used to cache in memory, disk, or both.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=48)** In this example, we cached the coalesced sales data data frame in disk using the persist function.
>
> **[0:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=55)** Spark does lazy evaluation, so we need to execute an action to trigger caching.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=61)** We will compare the execution plan before and after intermediate caching.
>
> **[1:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=66)** First, we do a filter for customer equals Google on the coalesced sales data data frame.
>
> **[1:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=72)** Then we use the persist function to store the intermediate coalesced sales data data frame to disk.
>
> **[1:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=78)** We then run the same filter for customer equals Google on this data frame and review the execution plan.
>
> **[1:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=86)** Let's run this code and review the execution plans.
>
> **[1:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=90)** In the plan before caching, we see that there is a filter pushed down to the raw file being read with file scan.
>
> **[1:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=97)** This means that Spark goes back all the way to the file and re-execute the code.
>
> **[1:43](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=103)** In the second plan after caching, we see the in-memory table scan.
>
> **[1:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=108)** This means that Spark is using the temporary persisted data frame.
>
> **[1:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/storing-intermediate-results?u=76281980&t=113)** Caching helps in performance and reuse, especially while doing interactive queries.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (2)
> **Code Keywords:** function (2), let (1)
> **Speakers:** - [instructor] (1)

#### Best practices for data processing
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=0)** - [Instructor] As we have seen in the previous examples for execution plans, every time an action is performed, Spark goes all the way to its data source and reads the data.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=11)** This happens even if the data was read before and some actions were performed.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=16)** While this works fine while running automated jobs, it is a problem during interactive analytics.
>
> **[0:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=23)** Every time a new action command is executed on an interactive shell, Spark goes back to its source.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=29)** It is better to cache intermediate results so we can resume analytics from these results without starting all over.
>
> **[0:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=36)** Spark has two modes of caching: in-memory and disk.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=40)** The cache method is used to cache in-memory only.
>
> **[0:44](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=44)** The persist method is used to cache in-memory, disk, or both.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=48)** In this example, we first cache the words RDD into memory using the cache function.
>
> **[0:56](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=56)** Spark does lazy evaluation, so we need to execute an action to trigger the caching.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=61)** Next, we will compare execution plans before and after intermediate caching.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=68)** First, we do a filter for product equals mouse on the coalasced sales data data frame.
>
> **[1:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=75)** Then we use the persist function to store the intermediate coalesced sales data data frame to disk.
>
> **[1:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=83)** We then run the same filter for product equals mouse on this data frame and then review the execution plan.
>
> **[1:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=91)** Let's run this code and review the results.
>
> **[1:36](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=96)** First, let's open this Spark UI. Go to the storage tab.
>
> **[1:42](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=102)** This shows all the cached and persistent data frames.
>
> **[1:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=106)** We see the first words RDD showing as stored in memory.
>
> **[1:50](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=110)** We also see the coalesced RDD being stored in disk.
>
> **[1:55](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=115)** We coalesced into three partitions before and we see the same partition count here.
>
> **[2:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=120)** Next, let's review the execution plans.
>
> **[2:03](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=123)** In the plan before caching, we see that there is a filter push down.
>
> **[2:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=128)** The filter push down goes all the way to the file scan.
>
> **[2:12](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=132)** This means that Spark goes all the way back to the file and reexecutes all the code.
>
> **[2:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=137)** In the second plan after caching, we see that there is an in-memory scan, and the filter is on this in-memory scan.
>
> **[2:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=147)** This means that Spark is using the temporary persistent data frame for doing this filter.
>
> **[2:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/best-practices-for-data-processing?u=76281980&t=153)** Caching helps in performance and reuse, especially while doing interactive queries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2)
> **Definitions:** is a  (2), means that (2), is an  (1)
> **Env Vars:** rdd (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Use Case Project

#### Problem definition
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=0)** - [Instructor] In this chapter, we will take up a use-case problem and build a solution using Apache Spark and Hadoop.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=8)** During this process, we will leverage various tools and techniques we learned during the course.
>
> **[0:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=14)** Here is the problem we need to solve.
>
> **[0:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=17)** We have our source data in student_scores.csv file as part of the course resources.
>
> **[0:25](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=25)** This file has student scores by subject during a school year.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=29)** There are four attributes in this data source.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=33)** The student name, the subject, the class score, which indicates the score the student got from his assignments, and the test score, which indicates the score the student got from his final examination.
>
> **[0:46](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=46)** The use-case actions to execute are as follows.
>
> **[0:51](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=51)** Load the CSV into HDFS.
>
> **[0:54](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=54)** The data should be loaded in Paruqet format, and the compression use should be GZIP.
>
> **[1:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=60)** Choose a partitioning scheme that would fit this data based on the analytics problems solved in this use case.
>
> **[1:07](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=67)** Next, read the data from this HDFS store and analyze the following.
>
> **[1:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=73)** First, compute the total score for each student per subject.
>
> **[1:18](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=78)** The total score is the sum of class score and the test score.
>
> **[1:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=82)** Then print the scores that each of the student received in physics.
>
> **[1:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=87)** Next, compute the average score of the total scores each student got across all subjects.
>
> **[1:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=94)** Finally, find the student with the highest score for each subject.
>
> **[1:39](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=99)** Analyze execution plans for all of these use case exercises.
>
> **[1:45](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=105)** It is recommended that you try these exercises and find solutions yourself before checking on the reference solutions in the following videos.
>
> **[1:54](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/problem-definition?u=76281980&t=114)** Best of luck with this use case.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (2), csv (1), gzip (1)
> **CLI Commands:** find (2), apache (1)
> **Code Keywords:** case. (2), finally, (1)
> **File Paths:** student_scores.csv (1)
> **Code Identifiers:** student_scores (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Data loading
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=0)** - [Instructor] The code for this exercise is in the notebook code_06_XX Use Case-Analyze Student Scores.
>
> **[0:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=8)** We begin the exercise by creating a Spark session with eight partitions.
>
> **[0:16](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=16)** In this video, we will look at loading the use case data into HDFS.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=22)** This is pretty straightforward.
>
> **[0:24](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=24)** First, we read the CSV file into the raw student data dataframe.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=31)** We print the schema and the data to make sure that everything went fine for the reading process.
>
> **[0:37](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=37)** Let's execute this code.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=40)** Next, we create a partition data store in Parquet format with compression as gzip as required by the use case.
>
> **[0:49](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=49)** In the case of partitioning, we have two columns that are frequently used in the future exercises, they are student and subject.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=57)** Both are extensively used in these exercises.
>
> **[1:01](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=61)** We could have gone with either of them or both of them for partitioning.
>
> **[1:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=65)** Given that subject has a limited number of values as opposed to student names, we will go with subject as the partition key.
>
> **[1:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=74)** Let's execute this code.
>
> **[1:17](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=77)** Next, we read back this data into a partition dataframe called student_data.
>
> **[1:23](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=83)** We check the number of partitions in the dataframe.
>
> **[1:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=86)** Let's run this code now.
>
> **[1:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=89)** We see a value of 4, which is the number of subjects in the dataset.
>
> **[1:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/data-loading?u=76281980&t=93)** Next, we will perform the required analytics on this dataframe.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1)
> **Env Vars:** hdfs (1), csv (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** student_data (1)
> **Speakers:** - [instructor] (1)

#### Total score analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=0)** - [Instructor] In this video, we will compute the total score for each student by subject and print the total scores for physics for all students.
>
> **[0:09](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=9)** To compute the total score, we will use the map transform in the data frame.
>
> **[0:14](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=14)** We can simply use the withColumn function to compute the new column from existing columns and create the TotalScore data frame.
>
> **[0:22](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=22)** We then print the results. Let's run this code now.
>
> **[0:30](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=30)** Next, we print the total score for physics for all students.
>
> **[0:34](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=34)** This is a simple filter that we execute on the subject column.
>
> **[0:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=38)** Let's run this code now.
>
> **[0:41](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=41)** The execution plan shows that this filter was pushed down to HDFS, and only one partition was read for this operation.
>
> **[0:50](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=50)** But this read the data source again and computed the total score again as there was no caching.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/total-score-analytics?u=76281980&t=57)** In the next video, we will cache this data for future analytics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **Code Identifiers:** withcolumn (1)
> **Env Vars:** hdfs (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Average score analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=0)** - [Instructor] Now, let's compute the average scores for students across all subjects.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=6)** To begin with, we will cache the total score dataframe so we don't have to read the entire data source and compute total scores again and again.
>
> **[0:15](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=15)** Then, we find the average score for each student by executing an action.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=21)** We group by student and compute the average for the total score.
>
> **[0:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=26)** We display the results as well as the execution plan.
>
> **[0:29](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=29)** Let's execute this code now.
>
> **[0:32](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=32)** First, we see that the average total score shows up correctly for each student as desired by the use case.
>
> **[0:40](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=40)** Then in the execution plan, we see that InMemoryTableScan is used on the two columns.
>
> **[0:48](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=48)** This means that the cache is working and total scores are not getting computed again.
>
> **[0:54](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/average-score-analytics?u=76281980&t=54)** In the next video, we will find the top student by each subject.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Top student analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=0)** - [Instructor] For the final task, we will find the top student by each subject in the data source.
>
> **[0:06](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=6)** This is the time to evaluate if we need to do repartitioning.
>
> **[0:11](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=11)** Given that we have not generated any result dataframes from an action that needs further transformations, we don't need to look at repartitioning.
>
> **[0:20](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=20)** Finding top students by subject is a tricky use case and there are multiple ways to solve it.
>
> **[0:26](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=26)** In this reference example, we first find the top score for each subject.
>
> **[0:31](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=31)** Then we find the student who got the top score.
>
> **[0:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=35)** To find the top score by subject, we simply group by subject and find the max of the top score.
>
> **[0:41](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=41)** The results are stored in the TopScore dataframe.
>
> **[0:45](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=45)** Then we join this TopScore dataframe with the TotalScore dataframe based on both the subject and the score value.
>
> **[0:53](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=53)** This will extract the list of student records that have the top score.
>
> **[0:57](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=57)** We print the results.
>
> **[0:59](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=59)** Let's execute this code now.
>
> **[1:02](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=62)** We can see that the students with top score are correctly printed as required by the use case.
>
> **[1:08](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/top-student-analytics?u=76281980&t=68)** This completes our use case exercise.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Code Keywords:** let (1), case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 8. Conclusion

#### Continuing on with big data analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=0)** - [Kumaran] Now that you have taken this course, you can take your learning even further.
>
> **[0:05](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=5)** Learn more about the various capabilities available in Apache Spark, including SQL, machine learning, and graphs.
>
> **[0:13](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=13)** Run the exercises on a Spark cluster with multiple nodes, and analyze its performance and bottlenecks.
>
> **[0:21](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=21)** Build an end-to-end live project for Spark Analytics for Hadoop in your organization.
>
> **[0:27](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=27)** This will give you the hands-on experience that can help build your skillset.
>
> **[0:33](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=33)** Data always intrigues me.
>
> **[0:35](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=35)** I bet it intrigues you too.
>
> **[0:38](https://www.linkedin.com/learning/big-data-analytics-with-hadoop-and-apache-spark-24658440/continuing-on-with-big-data-analytics?u=76281980&t=38)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1), find (1)
> **Code Keywords:** let (1)
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