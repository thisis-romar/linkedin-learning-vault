---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: pyspark-essential-training-introduction-to-building-data-pipelines
url: "https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines"
duration_minutes: 78
duration: 1h 18m
level: Intermediate
updated: 8/7/2025
learners: 5459
skills:
  - PySpark
  - Data Engineering
exercise_files: true
github: "https://github.com/LinkedInLearning/pyspark-essential-training-build-robust-data-pipelines-2737073"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGsKtO4wEvWjw/learning-public-crop_675_1200/B56ZfrMgDbHQAY-/0/1751997613067?e=2147483647&amp;v=beta&amp;t=5401mig8RZRgtYV9iIGIkZRTFfk3zrwvzDtX7kGTPPo"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)'
  - '[Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)'
  - '[Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)'
prev_courses:
  - '[Data Cleaning and Manipulating with Python in Excel](Data%20Cleaning%20and%20Manipulating%20with%20Python%20in%20Excel.md)'
  - '[Learning SnowflakeDB](../Cloud%20Computing/Learning%20SnowflakeDB.md)'
  - '[Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md)'
next_courses:
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
  - '[Apache Kafka Essential Training- Getting Started](../Cloud%20Computing/Apache%20Kafka%20Essential%20Training-%20Getting%20Started.md)'
  - null
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Collection","position":4,"total":6,"prev":"Data Cleaning and Manipulating with Python in Excel","next":"Complete Guide to Python for Data Engineering- From Beginner to Advanced"},{"path":"Explore a Career in Data Engineering","position":5,"total":7,"prev":"Learning SnowflakeDB","next":"Apache Kafka Essential Training- Getting Started"},{"path":"Advance Your Data Skills in Apache Spark","position":6,"total":6,"prev":"Big Data Analytics with Hadoop and Apache Spark","next":null}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/cloud-computing
  - topic/database-management
  - skill/pyspark
  - skill/data-engineering
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/PySpark%20Essential%20Training-%20Introduction%20to%20Building%20Data%20Pipelines.md)

![PySpark Essential Training: Introduction to Building Data Pipelines](https://media.licdn.com/dms/image/v2/D560DAQGsKtO4wEvWjw/learning-public-crop_675_1200/B56ZfrMgDbHQAY-/0/1751997613067?e=2147483647&amp;v=beta&amp;t=5401mig8RZRgtYV9iIGIkZRTFfk3zrwvzDtX7kGTPPo)

# PySpark Essential Training: Introduction to Building Data Pipelines

> PySpark is a powerful library that brings Apache Spark’s distributed computing capabilities to Python, making it a key tool for processing large-scale data efficiently. In this course, data engineer and analyst Sam Bail provides a structured and hands-on introduction to PySpark, starting with an overview of Apache Spark, its architecture, and its ecosystem. Learn about Spark’s core concepts, such 

> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines) | 1h 18m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Course overview](#course-overview)
  - [Prerequisites](#prerequisites)
  - [Using GitHub repo](#using-github-repo)
- [**1. Introduction to Spark and PySpark**](#1-introduction-to-spark-and-pyspark) (3 videos)
  - [Introduction to Apache Spark: The foundation of PySpark](#introduction-to-apache-spark-the-foundation-of-pyspark)
  - [The Apache Spark ecosystem](#the-apache-spark-ecosystem)
  - [Spark vs. PySpark](#spark-vs-pyspark)
- [**2. Setting Up PySpark**](#2-setting-up-pyspark) (2 videos)
  - [Google Colab notebook setup](#google-colab-notebook-setup)
  - [Downloading a dataset](#downloading-a-dataset)
- [**3. Working with PySpark DataFrames**](#3-working-with-pyspark-dataframes) (6 videos)
  - [Introduction to PySpark DataFrames](#introduction-to-pyspark-dataframes)
  - [Data formats and loading data](#data-formats-and-loading-data)
  - [Schema and data types](#schema-and-data-types)
  - [Basic querying (select, filter, and sort)](#basic-querying-select-filter-and-sort)
  - [Challenge: Querying a DataFrame](#challenge-querying-a-dataframe)
  - [Solution: Querying a DataFrame](#solution-querying-a-dataframe)
- [**4. Essential PySpark Data Manipulation**](#4-essential-pyspark-data-manipulation) (7 videos)
  - [Handling missing data](#handling-missing-data)
  - [Creating new columns](#creating-new-columns)
  - [Unions and joins](#unions-and-joins)
  - [Aggregating](#aggregating)
  - [Writing data](#writing-data)
  - [Challenge: Essential data manipulation](#challenge-essential-data-manipulation)
  - [Solution: Essential data manipulation](#solution-essential-data-manipulation)
- [**5. PySpark SQL**](#5-pyspark-sql) (5 videos)
  - [What is PySpark SQL?](#what-is-pyspark-sql)
  - [Creating temporary views](#creating-temporary-views)
  - [Using SQL queries](#using-sql-queries)
  - [Challenge: PySpark SQL](#challenge-pyspark-sql)
  - [Solution: PySpark SQL](#solution-pyspark-sql)
- [**6. PySpark in a Production Environment**](#6-pyspark-in-a-production-environment) (4 videos)
  - [Production environment requirements](#production-environment-requirements)
  - [Example production environment setup](#example-production-environment-setup)
  - [A typical PySpark production workflow](#a-typical-pyspark-production-workflow)
  - [Cloud services](#cloud-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Recap of key concepts and next steps](#recap-of-key-concepts-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=0)** - If you've been wondering how to level up your data workflows and handle large datasets without running into memory issues or performance bottlenecks, this course is for you. [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) has become one of the most widely used tools in [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), from startups to companies like Netflix and Amazon, because it's powerful and scalable. [PySpark](../../Skills/Data%20Science/PySpark.md) allows you to access the capabilities of Apache Spark using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Hi, I'm Sam Bail, and I've spent over a decade working in data analytics and data engineering. Here I'll walk you through the core concepts of PySpark using real datasets and hands-on examples. Whether you're processing millions of rows, cleaning messy data, or prepping it for analytics, you'll learn how to get it done in PySpark. Let's dig in and get you up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (3), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** apache (2), python (1)
> **Speakers:** - if (1)

#### [Prerequisites](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=0)** - [Instructor] Before we dive into the course, here's what you'll need to know to hit the ground running. You should have a working knowledge of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and be comfortable writing simple [SQL](../../Skills/Data%20Science/SQL.md) queries. If you've worked with [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) or done any kind of data analysis in Python before, you'll be in good shape. And since we'll be using [Google](../../Glossary/Service/Google.md) Colab, it helps if you've used Jupyter notebooks or even Colab before. But don't worry, you don't need to have any experience with [PySpark](../../Skills/Data%20Science/PySpark.md) or [Big Data](../../Skills/Data%20Science/Big%20Data.md) tools. We'll start from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Google](../../Glossary/Service/Google.md) (1), [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **Tools:** colab (2), jupyter (1)
> **CLI Commands:** python (2)
> **Env Vars:** sql (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub repo](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980&t=0)** - [Instructor] We also have some code for you in a [GitHub](../../Skills/Software%20Development/GitHub.md) repository, so you have a working version of all the exercises we go through in this course. I encourage you to try and write the code yourself to really deepen your learning experience, but it can be helpful to have the model code at hand. You can find the repository at the following URL. In order to clone the repo and use the model notebook, you can follow the steps in the official GitHub tutorial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Exercise Files:** clone the repo (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Spark and PySpark

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Apache Spark: The foundation of PySpark](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=0)** - [Instructor] Let's start with a quick overview of what [PySpark](../../Skills/Data%20Science/PySpark.md) is and what we can use it for. PySpark is based on [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), which is an open source analytics engine for large scale [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). Apache Spark was developed around 2009 and officially became an open source project of the Apache Software Foundation in 2013. Spark is optimized for parallel and highly fault tolerant processing of massive data sets on a cluster of machines. A computer cluster is a group of interconnected machines that work together as one system. Each machine is called a node and their coordination is handled by a cluster manager. This setup allows large computations to be split across nodes speeding up processing compared to a single machine. This diagram shows how Spark runs on a cluster. The driver program coordinates the work and talks to the cluster manager, which assigns tasks to worker nodes. Each worker runs an executor inside a [Java](../../Skills/Software%20Development/Java.md) virtual machine, the JVM, allowing Spark to process massive data sets in parallel. Now, does that mean that you need to have a cluster of machines available in order to use Apache Spark? In short, no. Spark also works on a single machine, which means you can simply use your own computer for development and testing. You might've heard of [Hadoop](../../Skills/Data%20Science/Hadoop.md) MapReduce, and wondered how it compares to Spark. Both are built for [Big Data](../../Skills/Data%20Science/Big%20Data.md), but Spark is generally better for [Real-Time](../../Skills/Database%20Management/Real-Time.md) processing because of its lower latency and higher fault tolerance. MapReduce, on the other hand, is more suited for batch jobs.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=96)** In this course, our focus will be on Spark, not Hadoop, but I wanted to make sure you know how the two compare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (3), [PySpark](../../Skills/Data%20Science/PySpark.md) (2), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (2), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** apache (4), node (1), make (1)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Prerequisites:** setup (1), you need to have (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### [The Apache Spark ecosystem](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=0)** - [Instructor] Let's take a quick look at the different technologies that you might come across when you start working with Spark and [PySpark](../../Skills/Data%20Science/PySpark.md). There are lots of different components with similar names, so I want to make sure you can navigate them. The foundation of Spark is called Spark Core, which provides distributed task dispatching, scheduling, and basic input/output functionalities. Spark uses a concept called the resilient distributed dataset, RDD, which is a read-only multiset of data items that's distributed over a cluster of machines and maintained in a fault-tolerant way. A dataframe in Spark is a higher-level abstraction on top of those RDDs that's optimized for structured data and tabular [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). A dataframe is conceptually the same as a table in a relational database or a dataframe in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). On top of Spark Core, we have Spark [SQL](../../Skills/Data%20Science/SQL.md). Spark SQL is a Spark module that allows you to query data both in RDDs and in external sources, such as [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). The Spark Dataset is a new interface that is only available through the [Scala](../../Skills/Software%20Development/Scala.md) and [Java](../../Skills/Software%20Development/Java.md) API to Spark. A dataset combines the benefits of RDDs, such as strong typing, with the benefit of Spark SQL's optimized execution engine. Going back to the dataframe I mentioned earlier, you can think of a dataframe as a data set that's organized into named columns. The Spark Web UI is a web app that comes bundled with Spark and can be accessed through your web browser. The Web UI shows helpful information about the Spark jobs that you're running
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=93)** so you can monitor them. And finally, I just want to mention two more components of the Spark ecosystem that you might come across. First, Structured Streaming, which is a scalable and fault-tolerant stream processing engine built on the Spark SQL engine. And second, the Machine Learning Library, or short, MLlib, is a library that contains machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) and other functionality that makes practical machine learning in Spark scalable and easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [PySpark](../../Skills/Data%20Science/PySpark.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Definitions:** is a  (7), is called (1)
> **Env Vars:** sql (4), rdd (1), api (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Spark vs. PySpark](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=0)** - [Instructor] Now that we've introduced [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), let's take a closer look at [PySpark](../../Skills/Data%20Science/PySpark.md) and how it compares to Apache Spark. Apache Spark is written in the [Scala](../../Skills/Software%20Development/Scala.md) programming language. Scala is a general purpose programming language built atop the [Java](../../Skills/Software%20Development/Java.md) virtual machine, the JVM. PySpark is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) API for Spark, so that programmers can use the Spark capabilities from within a Python environment. This means that with PySpark, you can efficiently process data using Python and [SQL](../../Skills/Data%20Science/SQL.md), which makes it suitable for many [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) teams that already use Python and SQL in their [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). You might have heard of [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), or maybe you're already using it. PySpark has similar capabilities to Pandas, but it's much more suited for large data sets that benefit from distributed and parallel computation. The main applications of PySpark are building data pipelines to transform your data, data analysis on large data sets, processing [Real-Time](../../Skills/Database%20Management/Real-Time.md) streaming data, and machine learning. In addition to the execution engine, PySpark also provides an interactive shell that you can use for data analysis in your terminal. PySpark supports all of the Spark features that I mentioned earlier. So in summary, the biggest difference between Spark and PySpark is the usability for developers and teams who already use Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (3), [Scala](../../Skills/Software%20Development/Scala.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** python (5), apache (3)
> **Env Vars:** sql (2), jvm (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up PySpark

[↑ Back to Table of Contents](#table-of-contents)

#### [Google Colab notebook setup](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=0)** - [Instructor] One of the easiest ways to run [PySpark](../../Skills/Data%20Science/PySpark.md) code is in a Jupyter Notebook, but I don't want you to waste any time troubleshooting a local setup. That's why for the purpose of this course, we're going to use a cloud-based development environment to make sure that we all use the same setup, regardless of operating system. Let's walk through a setup on how to run PySpark in a [Google](../../Glossary/Service/Google.md) Colab Notebook. Google Colab is a cloud-based notebook environment that functions like a Jupyter Notebook in the sandbox [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) environment, so you don't have to worry about your local configuration. It's free and works in any browser. In order to use Colab, you will need a Google account. You probably already have one, but if you don't, go to accounts.[google.com](https://google.com) and follow the steps to sign up for a free account. That way you can use all of Google's services such as [Google Drive](../../Skills/Software%20Development/Google%20Drive.md), Gmail, and Colab. To set up a Colab notebook, go to colab.research.[google.com](https://google.com) and make sure you're locked into your Google account. You might see some example notebooks here. Feel free to ignore those for now. Click the blue button in the bottom left corner that says New notebook to create and open a new notebook. You can rename the notebook at the top where it says Untitled. Click into the field and name it pyspark training. If you're familiar with Jupyter Notebooks, Colab works just like that. You can type Python code into the code boxes and execute it by clicking the play button. The keyboard shortcuts are also the same
>
> **[1:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=97)** as in a Jupyter Notebook, which means you can use Command or Control and Enter to run a cell, Escape and Enter to exit or enter cell edit mode, A and B to create new cells, navigate cells with the arrow keys, and so on. Google Colab might not come with PySpark installed. In order to ensure that the library is available, type the following code into a notebook cell and execute it.
>
> **[2:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=128)** You should see no error messages. To test that my notebook can run PySpark, I execute the following code in a cell. This should run without errors and print the PySpark version. Great. We see the PySpark version here. We're using version 3.5.1. One important thing to keep in mind is that a Colab notebook will reset its memory after it's been idle for 90 minutes. This means that you might have to rerun all cells to reload the content if you've taken a longer break. Okay, now it's your turn. Set up a new Colab notebook called pyspark training, import PySpark, and check the version, just like I did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (9), [Google](../../Glossary/Service/Google.md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1)
> **Tools:** colab (10), jupyter (4)
> **Prerequisites:** setup (3), set up (2)
> **CLI Commands:** make (2), python (2)
> **Analogies:** just like (2), such as (1)
> **URLs:** [google.com](https://google.com) (2)
> **Versions:** version 3 (1), 5.1 (1)
> **UI Navigation:** go to (2)

#### [Downloading a dataset](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=0)** - [Instructor] Now let's download a publicly available dataset that we can use throughout this course. I live in New York City, home of the iconic yellow taxis. Let's say a data team wants insights into those rides, like pickup spots, ride length, or fare amounts. New York City offers a free official dataset for this. It's a popular choice for learning data analytics. It's big but manageable. To download the New York City taxi data, go to the New York City data site. We want to download three files from here. First, under the heading Taxi Zone Maps and Lookup Tables, download the Taxi Zone Lookup Table CSV file.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=43)** Then scroll down a little to the heading that says 2025, and click to expand it. Click on the links for Yellow Taxi Trip Records for both January 2025 and February 2025, and the downloads will start automatically. The files sizes are just over 50 megabytes, so these files should download pretty quickly. Make sure to store all three files in a location where it can easily locate them later. Now we need to make sure that we can upload the data and access it from our Colab notebook. First, let's upload the files to [Google Drive](../../Skills/Software%20Development/Google%20Drive.md). Navigate to drive.[google.com](https://google.com) in a new web browser tab and make sure you logged into the same account as the tab with your Colab notebook. Create a new folder for your tutorial files. In my case, I'm just creating one called pyspark_training in my home directory.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=108)** Next, I upload the three files into this directory in Drive.
>
> **[2:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=122)** Now that our data files are stored in Drive, we need to make sure we can access them from the Colab notebook. Let's mount Google Drive in our Colab Notebook as a directory. Go back to the browser tab with your pyspark_training notebook file. Create a new code cell by hitting the B key for make a new cell below the current one and enter the following code to tell Colab to mount your Google Drive as a directory.
>
> **[2:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=161)** Execute the code cell by clicking the Play button or using the keyboard shortcut. You will see a popup that says, "Permit this notebook to access your Google Drive files?" Click the Connect to Google Drive button and follow the steps to confirm access.
>
> **[3:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=189)** This all happens in your own personal [Google](../../Glossary/Service/Google.md) account, so you don't have to worry too much about those permissions. You're really just given permissions to yourself. Finally, let's make sure that we can really access the file from Colab. Again, create a new code cell and enter the following code.
>
> **[3:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=216)** Execute it using the keyboard shortcut or the Play button. This code imports the OS module from [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and runs a simple check whether the file exists using the isfile command. The output will be a true or false. If you've executed the code cell and you've typed everything in correctly, you will see the output as true, which means that this file, the yellowtripdata_2025-01.parquet file exists. If there are any errors, make sure you have the correct file path and that all your data files are actually uploaded to your Google Drive. Well done. You now have a fully working Colab set up that allows you to access files in Google Drive from your virtual environment. You're ready to start with [PySpark](../../Skills/Data%20Science/PySpark.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (7), [Google](../../Glossary/Service/Google.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **CLI Commands:** make (7), python (1)
> **Tools:** colab (7)
> **UI Navigation:** go to (1), scroll down (1), click on (1), navigate to (1)
> **Code Identifiers:** pyspark_training (2)
> **Exercise Files:** download the (2)
> **Prerequisites:** make sure you have (1), set up (1)
> **URLs:** [google.com](https://google.com) (1)


### 3. Working with PySpark DataFrames

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to PySpark DataFrames](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=0)** - [Instructor] A data frame in Spark is a higher-level abstraction on top of resilient distributed data sets that's optimized for structured data and tabular [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). A data frame is conceptually the same as a table in a relational database or data frame in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). If you've used [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) or R for data work before, you're already familiar with a concept of a data frame. However, there are some key differences between data frames in Pandas and [PySpark](../../Skills/Data%20Science/PySpark.md) that I want to highlight. Pandas data frames are designed for small to medium sized data sets as they're all held in memory on a single machine. PySpark data frames are designed for large data sets that are distributed across multiple machines in a cluster. Pandas data frames are mutable, which means the data frame itself can be modified with an operation. PySpark data frames, on the other hand, are immutable, which means that any operation performed on it returns a new data frame. This immutable design ensures consistency across the distributed data set. Pandas uses eager evaluation of operations on the data frame, meaning the operations are executed as soon as they occur in the code. PySpark uses lazy evaluation, which means that the operations are queued and optimized for execution. Since PySpark uses lazy evaluation, Spark doesn't immediately run the code when you apply transformations to it. Instead, it builds a DAG, or directed acyclic graph, behind the scenes.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=96)** You can think of the DAG as a roadmap of your operations. It shows what data you're starting with, what transformations you want to apply and in what order. Spark holds onto this plan and only executes it when an action is triggered that actually needs to be executed. This DAG is what lets Spark optimize your job before running it. It can figure out the most efficient way to execute geotransformations across the cluster, group related steps together and cut out unnecessary work. In summary, you can say that while Pandas and PySpark data frames provide a similar data structure and operations, the way they work under the hood is very different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6), [PySpark](../../Skills/Data%20Science/PySpark.md) (6), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** dag (3)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Data formats and loading data](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=0)** - [Instructor] Now that we've covered the basics of [PySpark](../../Skills/Data%20Science/PySpark.md) data frames, let's create a new one from our taxi data. You can create a PySpark data frame by loading data from various sources, including data files such as CSV and Parquet files in local storage or in [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), such as AWS S3 buckets, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Blob Storage. You can load it from a relational database, you can use tables in Hive, or resilient distributed datasets, RDDs, in Spark. The example dataset that we downloaded earlier was in the Parquet format, but PySpark can support many different formats. These include CSV, [JSON](../../Skills/Web%20Development/JSON.md), ORC, and Avro. The main difference between these file types is the compression and how they handle schemas, but for all purposes, we can use them all in a similar way. Let's try this hands-on and actually load some data. First, we need some setup code to start using PySpark in our notebook. Open your Colab notebook and type the following import statement. This imports the SparkSession package, which provides a unified entry point for accessing Spark features through [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Next, we'll create a SparkSession object called Spark and print its [Metadata](../../Skills/Web%20Development/Metadata.md).
>
> **[1:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=90)** Once you run the setup code in your Colab notebook, you should see some metadata output, including the Spark version. Now that we've got a Spark session up and running, we can load the taxi data file into a data frame using code like this.
>
> **[1:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=111)** This code creates a data frame named DF and loads the data from the Parquet file into it. We can display the data in the data frame in a nicely formatted table like this. This code shows the top five rows of the data frame in a simple table format in your Colab notebook.
>
> **[2:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=141)** And that's it, congratulations, you just loaded data from a Parquet file into a PySpark data frame. Just remember that a Colab notebook resets its memory when you've been inactive for more than 90 minutes. So if you've taken a longer break, you might have to execute the import and load code again when you come back. And finally, if you're curious about loading data directly from a relational database into a data frame, I recommend checking out the PySpark documentation to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (6), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** csv (2), aws (1), json (1), orc (1)
> **Tools:** colab (4)
> **CLI Commands:** aws (1), python (1)
> **Analogies:** such as (2)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1)

#### [Schema and data types](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=0)** - [Instructor] Now that we've loaded our file into a DataFrame, let's explore the data a little. When we start working with data, it's usually helpful to understand what the data looks like, what the column names are, and the data types, and to see some sample data. Recall that we can use df.show to display the first n rows of the DataFrame, but there are many more features that help us get a grasp of the data. The first thing we usually want to find out is simply how many rows we have in the DataFrame. You can use the count method for that. Type the following in a notebook cell and execute it. This will output the number of rows below the cell nice and easy. As you can see, we have over 3 million taxi ride in this DataFrame. Next, let's find out the schema of the data we've loaded, which means the names of the columns and their data types. If you just want to see the column names, you can access the schema.names property of the DataFrame like this. This will simply print the column names of the DataFrame. Another helpful function is printSchema, which prints out the column names along with the data types of those columns. You can type the following in a notebook cell.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=89)** This will print a list showing each column in the file with its inferred data type. For example, the field VendorID is an integer, the pickup_datetime is a timestamp, and so on. Keep in mind that for file formats that only contain the column name and data, like a CSV file, for example, the data type is inferred by looking at the data in the column and might not always be accurate. We'll talk about how to modify your DataFrame later. Finally, if you want to dig a little deeper into your DataFrame and get some descriptive [Statistics](../../Skills/Data%20Science/Statistics.md), you can use the describe function. describe gives you the number of rows containing data as well as the min, max, mean, and standard deviation of the field. This means it makes the most sense to use describe on numeric columns. The following code shows descriptive statistics for the passenger_count and the total_amount columns.
>
> **[2:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=156)** The output shows you the number of non-null roles for those columns, as well as some basic statistics like the count, the mean, the standard deviation, min, and max. Doing this kind of light data exploration is really helpful to get a better grasp of the data so that we can get started with some more complex queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3)
> **Code Identifiers:** printschema (1), pickup_datetime (1), passenger_count (1), total_amount (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Env Vars:** csv (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Basic querying (select, filter, and sort)](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=0)** - [Instructor] We're ready to look more closely at our data and actually start querying it for some data analysis. Let's start with something simple and access some columns in our DataFrame. Just like a table in a database, a [PySpark](../../Skills/Data%20Science/PySpark.md) DataFrame has columns and rows. In PySpark, you can access a column using several different notations. Let's try this with a passenger_count column. First, you can use the dot notation like this. This is a convenient shorthand notation, but it won't work if the column name has spaces or uses reserved keywords. Personally, I prefer a more explicit index syntax using square brackets. If you're familiar with [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), you've probably used this notation a lot. In PySpark, it is also common to use the select function on a DataFrame to access a column. This works just like a SELECT statement in [SQL](../../Skills/Data%20Science/SQL.md). Okay, let's try the last one in our notebook. You might be wondering why the only output you see is the data type of the result. Remember that I told you earlier that PySpark DataFrames are immutable in order to ensure consistency across the distributed dataset? This means that the select command returns a new DataFrame, which the Colab notebook doesn't automatically display as a table. We have to use the show method like this.
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=93)** This simply prints the first 20 rows of the DataFrame limited to the column we just selected, passenger_count. You might also see versions of select that use the call function, which is equivalent to the version without it. Let's try this out. And finally, if you want to select multiple columns, you can simply pass a comma separated list as an argument to select. Like this. And just to reiterate, the select method returns a DataFrame, so we need to use show to display the result. Okay, let's move on to sorting our DataFrame. The sort method in PySpark allows us to sort a DataFrame by one or multiple columns. This has the same effect as the ORDER BY statement in SQL. Assume we want to sort the DataFrame on the total_amount field in descending order. Let's try this in our notebook.
>
> **[2:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=178)** This shows us our DataFrame sorted with the highest total_amount at the top.
>
> **[3:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=191)** By setting the ascending property to False, we can sort in descending order. If we want to sort by multiple columns and decide for each one whether to sort ascending or descending, we can simply pass in lists instead of strings throughout the following statement in your notebook.
>
> **[3:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=219)** So this statement sorts by the total_amount in descending order and also the passenger_count column in descending order. Next up, let's look at the filter method. If you only want to show rows in your DataFrame that match certain conditions, you can use a filter statement, which basically works like a WHERE clause in SQL. Let's try this out. Assume we only want to show trips in our taxi data that went to the airport, which means they incurred an airport fee. The airport fees captured in the last column in our DataFrame called Airport_fee.
>
> **[4:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=263)** Type the following into a cell in your Colab notebook and execute it. This shows the top 20 rows of all the records in a DataFrame that have an Airport_fee that's greater than 0, so they went to the airport. What if we want to combine multiple filter criteria? Let's assume we want to find airport rides with more than two passengers. We can use the Boolean statement AND to add more conditions. Let's try this out.
>
> **[5:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=306)** This shows all rows that match both of those criteria. You probably already guessed that we can also combine select and filter to only select specific rows that match a filter criteria just like we would in SQL. Let's chain the select and filter methods that we've used earlier.
>
> **[5:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=337)** As you can see, this query combines the filter and the select method to filter for airport rides with more than two passengers, and to select only those three columns in your output. Now that you've learned how to write simple queries against your PySpark DataFrame, are you ready to try it out for yourself? Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** sql (4), select (1), order (1), where (1)
> **Code Identifiers:** passenger_count (3), total_amount (3)
> **SQL:** select (1), order by (1), where (1)
> **Analogies:** just like (3)
> **Tools:** colab (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)

#### [Challenge: Querying a DataFrame](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=0)** - [Instructor] Okay, here's your challenge. Write a query combining sort, select, and filter that shows all non-airport rides with exactly one passenger. Select only the trip distance and total amount columns. Make sure to sort the resulting dataframe by the trip distance in descending order. This quick challenge should only take you a few minutes to complete. Type your code into your Colab notebook and then move on to the next video where I'll share my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Tools:** colab (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Querying a DataFrame](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=0)** - [Instructor] All right. Check out what I came up with. First, we filter by the airport fee and passenger count conditions. Then we select only the columns that we're interested in from the data frame that's being returned. Finally, we saw it by the trip distance field with the ascending flag set to false so that it's descending. Don't forget to use the show method at the end to display the resulting data frame. You might be wondering, does the order of these statements matter? Should we write the filter first or the select? Remember that [PySpark](../../Skills/Data%20Science/PySpark.md) uses a method called lazy evaluation. That means it parses out all the transformation first, and then it decides the best order to actually execute them. So even if you don't write them in the perfect order, Spark will optimize it for you behind the scenes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Essential PySpark Data Manipulation

[↑ Back to Table of Contents](#table-of-contents)

#### [Handling missing data](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=0)** - [Instructor] If you've ever worked with real world data, you know it's rarely perfect. In an ideal world, every column would have valid values, but we often deal with missing data. To avoid skewing our results, it's important to identify what's missing and decide how to handle it, whether that's filling in defaults or dropping rows. Let's take a look at our taxi data set and see if we have any missing data in some of the key fields that we're working with. First of all, we want to import some additional functions from [PySpark](../../Skills/Data%20Science/PySpark.md) that can help us with this. Type the following into a new cell in your call app notebook and execute it.
>
> **[0:42](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=42)** Let's keep exploring the columns we've already worked with, like passenger count and fare amount. Are there any records in our dataset where the fare or the number of passengers is not populated? These would skew any calculations around average fare amounts or passenger counts. For example, we can use the isnull function in Pyspark to return rows where the specified column is null or empty. Just like some of the other functions we've seen, this also returns a new data frame, so we also want to use either a show or account operation to see the results. Try this out in your call-up notebook by typing the following. This statement retrieves the rows where the fare amount column is null and then shows the top 20 rows. In this case, it looks like there aren't any null values in the column, so we get a zero. Let's try this with a passenger count column now.
>
> **[1:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=104)** This shows us that there are quite a few null values in the passenger account column, over half a million. It's probably safe to assume that every taxi ride should have at least one passenger, and that the data was just not recorded by the driver. It happens, right? Let's backfill those null values with the value one. Run the following code in your notebook.
>
> **[2:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=133)** If you execute the cell, you won't see a result because the output has been assigned to the new data frame called DF1. You already know how to display this data frame in your notebook. Use the show command like this. This now shows a data frame with the null values in the passenger count column filled with the value one. Next, we can confirm that the new data frame no longer has the null values that we've just filled.
>
> **[2:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=170)** The output of this statement is zero, which means there are no more null values in the passenger count column. Keep in mind that this is just a very simple example of how real world data might actually be corrupted. In reality, you will come across much more complex scenarios that require a deeper knowledge of the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (2)
> **Analogies:** for example (1), just like (1)
> **Env Vars:** df1 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Creating new columns](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=1)** - [Instructor] Let's assume we want to look a little more closely at the trip duration in our at taxi ride data. We have the pickup and drop off times so we can calculate the duration between those two. Wouldn't it be handy to have the trip duration as a permanent column in our data frame rather than calculating it each time? Let's jump back to our collab notebook and try this out. We can use the with column method to create an entirely new column that contains the trip duration in minutes. First, we need to import a couple of mathematical functions that help us with the timestamps. Run the falling code in a cell in your notebook.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=44)** Next, you can calculate the trip duration and add it to the data frame as follows.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=58)** The first argument of the width column method is the name of the new column, and the second is how it's calculated. We calculate the trip duration by subtracting the pickup time from the drop off time, and dividing it by 60 to get the result in minutes. We then round the result to one decimal place. Remember, we're dealing with taxi rides here, so we don't need to be supersize. Now, we've worked quite a lot with our data frame. As we loaded it from the file, it contains several columns that we don't really care about, and some of the columns are spelled inconsistently. We can use the select statement that we already know to select those columns and the width columns renamed method to rename the columns for more consistent naming. In our case, the Width columns renamed method takes a dictionary as an argument of the type old column name, colon, new column name, type the following code in a code cell and execute it.
>
> **[2:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=130)** I know this looks like a lot, but it's actually really straightforward. You're just combining a select and a with columns renamed statement and assigning the result to a new data frame called df2. Let's use the show command to look at the new data frame that we've created.
>
> **[2:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=156)** And finally, I also want to show you how you can quickly remove columns from a data frame. The drop method returns a data frame that's identical to the original one, but with one or more columns removed.
>
> **[2:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=178)** This statement returns a data frame that's identical to df1, but without the vendor ID and the rate code ID columns. We use the show statement again to display it in our notebook.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Unions and joins](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=0)** - [Instructor] If you've used [SQL](../../Skills/Data%20Science/SQL.md) before, you're likely familiar with the concept of a union and a join. A union combines two data frames with the same columns by appending rows. A join adds columns from one data frame to another based on a matching condition. Let's try this out in [PySpark](../../Skills/Data%20Science/PySpark.md). So far, we've only loaded the taxi ride data from January 2025. Let's say we want to combine all 2025 taxi ride data that we have so far into one data frame. We'll start by loading the February data using the read.parquet method. (mouse clicking) Next, we append the February data to our January data frame using a union. Keep in mind that the data frames must have the same column order and names for this to work. (mouse clicking) This creates a new data frame called df_2025 by appending all rows from df_feb onto the rows in the df data frame, which contains our January data, as you remember. To check the result we can count the number of rows in this new data frame. (mouse clicking) You should see over seven million rows, which is the sum of the January and February taxi rides. Note that the union does not remove duplicates. If you combine the same data more than once, you will end up with duplicate records.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=96)** Okay, let's take a look at joins now. Joins in PySpark work similar to SQL. You have two or more data frames and specify which columns you want to join on. This appends the columns of one data frame onto another. Depending on the type of join it might also create new rows, but more often than not we just want to add columns with additional information to existing rows. Let's try a join. In our data set, PU location ID and DO location ID represent pickup and drop-off locations, but they're just numbers. To find out which boroughs in New York City those numbers refer to, we'll join the trip data with a lookup table that maps location IDs to boroughs and neighborhoods in New York City. Let's load that lookup table from our [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) into a new data frame. This time we have to use the CSV load method. (mouse clicking) Since we're loading a CSV file, we also have to tell PySpark that the first row in the CSV file is the header row. That's why we use an additional method called option, and specify that the file contains a header row by setting the argument to header true. Let's take a quick look at the taxi zone lookup data frame with the show method. (mouse clicking) Now, let's add a borough column for each pickup location
>
> **[3:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=191)** to our existing data frame with the taxi ride data. We can use the join method as follows to join the data frames on the respective ID columns. (mouse clicking)
>
> **[3:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=213)** The first line creates a new data frame called df_joined with all columns from df_2025 plus all the columns from the lookup table. Since the join columns don't have the same name, we write out the join condition explicitly as df_2025.PUlocationID == taxi_zone_lookup.LocationID.
>
> **[3:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=238)** And, finally, I want to highlight that the join types in PySpark behave just like in SQL. We're using a left join here because we don't want to drop any rows, in case the location ID can't be found in the lookup table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1)
> **Env Vars:** sql (3), csv (3)
> **Non-Speech:** (mouse clicking) (6)
> **Code Identifiers:** df_feb (1), df_joined (1), taxi_zone_lookup (1)
> **Analogies:** similar to (1), just like (1)
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Aggregating](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=0)** - [Instructor] Let's assume you want to get some basic analytics across the taxi rides in your data frame. For example, how often do customers pay with different payment methods, and what's the average fare for our rides, and how does it differ by payment method? Aggregate functions in [PySpark](../../Skills/Data%20Science/PySpark.md) let you compute values across an entire data frame, such as the count, sum, min, max, average, and the standard deviation. This is how we construct an aggregate. First, we want to find a field to group by, and then we choose the aggregate function to use. Let's do this with our taxi data and calculate how often customers use specific payment methods like cash or credit card. In order to do this, we want to group by the payment type column and then count how often each type occurs in the data frame. Run the following code in your notebook.
>
> **[0:57](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=57)** This statement does several things. First, it groups a data frame by the payment column. Second, it then counts the number of rows for each subgroup defined by the payment type. Third, it then sourced the resulting data frame by the payment type column. This is purely cosmetic. And finally, it displays the resulting data frame in the notebook using the show method we already know. For this next part, I cheated a little and I used the data dictionary on the taxi data website to look up the payment type values. Here's what the numbers mean. Next, let's see if there's a difference between the amount of the fare and the payment type. To find this out, we once again group by the payment type column in the data frame, but this time, instead of using the count function, we use the average function to calculate the average of the total amount column. Type and execute the following code in your notebook. This shows us that the average payment with a credit card, which is payment type one, is higher than cash payments, which is payment type two. That's probably not surprising. Let me show you an alternative way of writing aggregate functions in PySpark that might come in quite handy for some use cases. Instead of calling the average method directly on the result of the group by, you can use the avg method instead and pass the average function as an argument. Let me show you how.
>
> **[2:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=152)** First ,import the average function from PySpark.
>
> **[2:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=160)** Then we use the avg method like this.
>
> **[2:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=168)** This syntax gives you more control. For example, you can give the resulting average column a clearer, more human-readable name using the alias method.
>
> **[3:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=185)** As you can see here, I have now renamed the column from average total amount, which is automatically generated, to the much nicer to read average amount. There are several other useful aggregate functions in PySpark, like sum, min, max, and the standard deviation. I recommend looking those up in the documentation when you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (4)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Writing data](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=0)** - [Instructor] Until now, we've only worked with data frames in memory in our notebook, but in a real-world application, we usually want to write some data back into a database or a file to have a permanent record of it. Writing data to a file is pretty straightforward in [PySpark](../../Skills/Data%20Science/PySpark.md) as the dataframe class already has a write method we can use. Let's create a new output file with the results of a group-by calculation. First, we want to assign the result of the group by to a new dataframe for convenience. Then we write the dataframe to a CSV file. In this case, we choose CSV as it's a really small table, so we don't need a more efficient format like Parquet. This tells PySpark to write the output to a directory called average fare. Include a header row, and if necessary, override any existing files. You can check the output of this statement directly from your [Google](../../Glossary/Service/Google.md) call app UI. On the left-hand side in your call app window, navigate to the bottom icon that looks like a folder. Click it to open up a directory tree. Navigate to Drive, My Drive, and then the name of your PySpark training directory. You will see a folder called Average Fare, which contains a single CSV file that starts with Part. By default, PySpark creates one output file per partition of your data.
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=93)** This is one of the main differences between how PySpark handles data and how [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) handles data. PySpark always assumes that your data will be distributed. In case you're curious about how to write a dataframe to a database table or a data warehouse instead of a file, I recommend checking out the PySpark documentation to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (7), [Google](../../Glossary/Service/Google.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** csv (3)
> **UI Navigation:** navigate to (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Essential data manipulation](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=5)** - [Instructor] Okay, it's your turn now to try this hands-on. Write some [PySpark](../../Skills/Data%20Science/PySpark.md) code that does some data cleansing and apply several of the methods you've learned before. Step one, create two new dataframes called df_jan_2025 and df_feb_2025 from the corresponding data files. Step two, create a new dataframe called df_2025_combined as a union of these two files. Step three, only select the following columns from this combined dataframe and rename the columns as indicated in the parentheses. Reassign the result of this to df_2025_combined. For example, take the tpep_pickup_datetime column and rename it to pu_datetime. Step four, create a new dataframe called taxi_zones from the taxi_zone_lookup.csv file. Step five, join the taxi_zones dataframe onto the df_2025_combined dataframe using the do_location_id and the LocationID columns. Reassign the result of this join to df_2025_combined. Step six, the final cleanup. Drop the superfluous LocationID, Zone, and service_zone columns, and rename the Borough column to pu_boro. Reassign the result to df_2025_combined. And finally, step seven, display the resulting dataframe df_2025_combined in your notebook using the show method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **Code Identifiers:** taxi_zones (2), tpep_pickup_datetime (1), pu_datetime (1), taxi_zone_lookup (1), do_location_id (1)
> **File Paths:** taxi_zone_lookup.csv (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Essential data manipulation](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=5)** - [Instructor] Okay, I hope you enjoyed working on this challenge. I know that it was a tough one, here's my solution. Step one, I read in the data files and create two new data frames. Step two, I use union to union those two data frames. Step three, I select and rename the columns. Step four, I create a new data frame with a zone lookup table. Step five, we join the data frames on the location IDs to get the drop of borough. Step six, we drop and rename some columns. And finally, step seven, we show the resulting data frame. And here it is, our final output, a beautiful data frame that we've just created from multiple files, combining them through joins and unions, that's it.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 5. PySpark SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [What is PySpark SQL?](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=0)** - [Instructor] Until now, we've mostly used the DataFrame API in [PySpark](../../Skills/Data%20Science/PySpark.md) to query our dataframes. The API is great, but some of us might feel a lot more confident using [SQL](../../Skills/Data%20Science/SQL.md) to write complex queries for data analysis. Luckily, PySpark comes with a PySpark SQL module that allows you to use SQL syntax directly in your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code. What makes PySpark SQL especially powerful is that it works seamlessly with dataframe operations. This means you don't have to choose between using SQL or Python to work with your data. You can blend both. For example, it might be easier to load and transform data using Python methods, and then switch to using SQL for more complex queries to analyze the data. Under the hood, PySpark uses the same query execution engine, so they're interchangeable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [PySpark](../../Skills/Data%20Science/PySpark.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Env Vars:** sql (6), api (2)
> **CLI Commands:** python (3)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating temporary views](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=0)** - [Trainer] In order to use [PySpark](../../Skills/Data%20Science/PySpark.md) [SQL](../../Skills/Data%20Science/SQL.md), we first need to create a temporary view from our data. That way, our Spark session has access to the data. Let's start fresh by loading data from our taxi file into a new data frame called "taxi".
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=21)** Next, we can register a temporary view like this.
>
> **[0:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=29)** This statement registers the data frame with the Spark SQL catalog as a temporary view that's also called "taxi". We're choosing the same name here for consistency, but we could also create the view with a different name. This means that our Spark session knows about the data in the view and we can use PySpark SQL to query it. Note that this statement doesn't make a copy of the data. It simply registers the original data frame. The temporary view also doesn't persist across Spark sessions, hence the temporary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [PySpark](../../Skills/Data%20Science/PySpark.md) (2)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [trainer] (1)

#### [Using SQL queries](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=0)** - [Instructor] Now that we have a temporary view called Taxi in our Spark session, let's write some [SQL](../../Skills/Data%20Science/SQL.md) to query it. We'll start with a simple select statement to find all rights where the total right amount is more than 50 US dollars. Notice a few things here. First of all, instead of using a method on a data frame, we use the SQL method directly on the Spark session instance called Spark that we created at the very beginning of this notebook. Second, the SQL query is just a regular string in quotes. Third, we can simply access the taxi view by its name, no quotation marks needed here. And four, the SQL method returns a new data frame, which is why we need to use the show method again to display the result. Because the method returns a data frame, we can now start shading methods onto the SQL statement like this.
>
> **[1:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=71)** This code snippet uses a SQL query to find all rows in the data where the total amount is more than $50. It then uses the filter method of the data frame API to filter the result to rows with more than two passengers. And finally, it also uses the data frame API to select three relevant columns from the resulting data set and displays the resulting data frame using the show method. This is a great example of how you can mix and match different syntax style using [PySpark](../../Skills/Data%20Science/PySpark.md) SQL. Personally, I prefer to do the heavy lifting using SQL queries because I'm much more comfortable writing complex SQL than [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and then I fine tune the results with Python. One last thing I want to share is how to format query strings in SQL inside Python code. Especially when using longer and more complex SQL statements, you might want to assign the query to a separate string variable before executing it. That way, the query is much easier to read and modify. I'm demonstrating this here using the previous example, but this time, all steps of the transformation are written in SQL. The triple quoted string syntax in Python lets you use indentation, which makes it a lot easier to read a long query. After all, even if we have computers executing these statements, it's still mostly humans
>
> **[2:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=164)** that will be reading the code and modifying it. You can now easily execute the query like this.
>
> **[3:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=181)** And there you have it, the same output as in the previous example, but the query is entirely written in SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **Env Vars:** sql (13), api (2)
> **CLI Commands:** python (4), find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: PySpark SQL](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=0)** - [Trainer] This is the final hands-on challenge of this course, so let's combine several things that we've learned. Assume we want to determine the average total taxi ride cost for each drop-off borough. This means, how expensive are the rides depending on which borough of New York City they end in? Write code for the following steps: Step one: load the January taxi ride data into a dataframe called taxi_jan2025 and register a temporary view with the same name. Step two: load the taxi zone lookup data into a dataframe called taxi_lookup and register a temporary view with the same name. Step three: use [PySpark](../../Skills/Data%20Science/PySpark.md) [SQL](../../Skills/Data%20Science/SQL.md) to left join those two tables on the DOLocation ID and the LocationID columns. Make sure to only select the DOLocationID, Borough and total_amount columns. And assign the result to a dataframe named joined_df. Step four: using the PySpark dataframe syntax, group the result by the Borough column and calculate the average total_amount using the avg method. Make sure to alias the average column as avg_amount and then display the resulting dataframe in the notebook. This should take you around 15 minutes. You can find my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** total_amount (2), taxi_lookup (1), joined_df (1), avg_amount (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** make sure to (2)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [trainer] (1)

#### [Solution: PySpark SQL](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=0)** - [Trainer] Here's my step-by-step solution for the [PySpark](../../Skills/Data%20Science/PySpark.md) [SQL](../../Skills/Data%20Science/SQL.md) challenge. Step one: load the taxi write data and create a temporary view called taxi_jam2025. Step two: load the lookup data and create a temporary view called taxi_lookup. Step three: join the two tables using SQL and assign the result to a data frame called joined_df. Step four: group the data frame by borough, calculate the average total fare amount, alias the average amount column and display the result. Let's run this. Check out this result. It's actually really interesting. This analysis shows that rides ending at EWR have the highest average cost. If you know New York City, this isn't too surprising because EWR is the abbreviation for Newark Airport, which is in New Jersey, so those trips are all pretty long and expensive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [PySpark](../../Skills/Data%20Science/PySpark.md) (1)
> **Env Vars:** sql (2), ewr (2)
> **Code Identifiers:** taxi_lookup (1), joined_df (1)
> **Speakers:** - [trainer] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. PySpark in a Production Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Production environment requirements](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=0)** - [Instructor] Running a [PySpark](../../Skills/Data%20Science/PySpark.md) data pipeline in production typically means working with large volumes of data, often across multiple servers or cloud instances, and making sure the entire system is scalable, reliable, and secure. Unlike a local setup, production environments needs to handle failure gracefully, run jobs on a schedule, and support [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md). Here are some of the core components that you'll find in a typical PySpark production setup: Data sources: The most important part of any pipeline is the data itself. You're likely pulling from various sources such as operational [Databases](../../Skills/Software%20Development/Databases.md), for example from an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) system, application logs, APIs, or flat files from vendors. To move that data into your storage layer, you might use data extraction tools like Fivetran, Airbyte, Kafka, AWS Kinesis, or custom scripts. Distributed storage: Since you're working with large data sets, a single machine storage is not enough. Production environments use distributed storage systems like HDFS, Amazon S3, or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage. These systems can scale horizontally and offer high availability. Cluster management: Spark runs on a cluster, which is a group of machines that work together to process data. You need a cluster manager to coordinate CPU, memory, and network usage across these machines. Common cluster managers include YARN, which is often used in [Hadoop](../../Skills/Data%20Science/Hadoop.md) environments;
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=93)** and [Kubernetes](../../Skills/DevOps/Kubernetes.md), which runs Spark in isolated, scalable containers. Job scheduling: A PySpark job is simply a piece of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code that uses the PySpark API to process data, exactly what we've been writing in this training. In production, jobs should run automatically instead of being started manually. You might want to trigger jobs when new data arrives or run them at set intervals. A tool like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) is commonly used to schedule and coordinate PySpark jobs. Consistent environments: When working with a team, it's important to make sure code runs the same way in development, testing, and production. This often means using Docker or virtual environments to keep dependencies like PySpark versions and Python packages consistent across the team and your production environment. Monitoring and logging: You need visibility into job performance and behavior. Tools like the Spark Web UI help you inspect what happened during a job. Grafana [Dashboards](../../Skills/Data%20Science/Dashboards.md) and cloud-native tools like AWS CloudWatch let you track metrics and receive alerts when something fails. Security and access control: Security is essential in any production setup to prevent unauthorized access and data leaks. That includes setting up IAM roles, network protections, and encryption. You'll also want to plan for disaster recovery. Serious systems can bounce back quickly. I know that those kinds of security checks can slow down your development process,
>
> **[3:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=186)** but it's important to make sure your production system is secure. As you can see, there's many moving pieces when running PySpark in production, and all of these work together to create a highly performant and reliable system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **CLI Commands:** aws (2), python (2), make (2), find (1), yarn (1)
> **Env Vars:** aws (2), hdfs (1), cpu (1), yarn (1), api (1)
> **Prerequisites:** setup (3)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example production environment setup](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=0)** - [Instructor] Okay, now that we have the basic requirements out of the way, let's look at a more concrete example of what running [PySpark](../../Skills/Data%20Science/PySpark.md) in production might look like. For this example, I'm going to assume we're using [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), AWS, as our cloud provider. In this setup, we're going to run Spark on a cluster of [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, and we'll use YARN as a cluster manager. That means you'll need to launch your own [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) using the EC2 service, install Spark and [Hadoop](../../Skills/Data%20Science/Hadoop.md), configure the nodes to talk to each other, and manage things like memory allocation and resource scheduling yourself. For our distributed storage, we can simply use Amazon S3. You might already be familiar with S3. It's an object storage service in AWS that can store huge amounts of data reliably and cheaply. In this setup, your PySpark job reads data files directly from S3, processes them, and then writes the results back to S3. PySpark supports S3 natively, so it's really easy to integrate. You just provide the S3 path in your read or write functions. Next, we need to run jobs automatically. That's where a workflow scheduler like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) comes in. Airflow is often used to run PySpark jobs on a schedule, say, once every hour or at midnight every day. You define the pipelines to run in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and Airflow handles triggering them, tracking their status, retrying them if they fail, and even notifying your team if something goes wrong. In AWS, Airflow can be self-hosted on EC2 or [Kubernetes](../../Skills/DevOps/Kubernetes.md),
>
> **[1:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=97)** or you can use Amazon Managed Workflows for Apache Airflow, MWAA, which is a fully managed service. On AWS, the most common option for monitoring and logging is CloudWatch. You can stream PySpark logs to CloudWatch so you can view them even after your job finishes. You can also set up [Dashboards](../../Skills/Data%20Science/Dashboards.md) and alerts, for example, to notify you if a job fails or takes too long to complete. Some teams also use Spark's built-in web UI to inspect job stages and tasks while they're running. Of course, this is just one of many possible setups. I highly recommend using your existing infrastructure or [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) where possible to reduce the amount of friction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (5), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** aws (4), ec2 (3), yarn (1), mwaa (1)
> **CLI Commands:** aws (4), apache (2), yarn (1), python (1)
> **Prerequisites:** setup (2), you'll need (1), install (1), configure (1), set up (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [A typical PySpark production workflow](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=0)** - [Instructor] So now that we've built our platform, let's take a look at a step-by-step workflow of how our pipeline would actually run in production. It all starts with a data engineer writing [PySpark](../../Skills/Data%20Science/PySpark.md) code. That code might do all the things that we've learned in the tutorials so far, cleaning up messy data, joining datasets, or calculating metrics. That code is usually stored in a [GitHub](../../Skills/Software%20Development/GitHub.md) repository so the whole team can collaborate on it, track changes, and review code changes. Before any code goes live, it should go through CI/CD, [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and continuous deployment. That means when someone pushes code to the GitHub repo, tests are automatically run and the code is deployed on passing. If all the tests pass, the pipeline can automatically deploy the new code from the main branch to a staging or a production environment. Once the code is live, it's picked up by a workflow orchestrator like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md). Airflow usually runs either on a schedule or is triggered by specific events, like a new file arriving in S3. It might then kick off a multi-step pipeline that includes step one, extracting raw data from a source, like an API, a database, or a log stream. Step two, running the actual PySpark job to clean, transform, and aggregate that data. Step three, writing the final process data to a destination. The final data is then typically written to a place
>
> **[1:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=94)** where other tools can pick it up. This could be a folder in S3, a table in a data warehouse, like [Snowflake](../../Skills/Data%20Science/Snowflake.md) or [Google](../../Glossary/Service/Google.md) BigQuery, or even pushed directly to a database that's used by a dashboarding tool like [Tableau](../../Skills/Data%20Science/Tableau.md) or Looker. And this is just one example of an end-to-end workflow for a production pipeline, starting with an engineer writing code and ending with a user seeing analytics in a dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **CLI Commands:** cd (1), apache (1)
> **Tools:** github (2)
> **Env Vars:** api (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### [Cloud services](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=0)** - [Instructor] So far, we've talked about how to build infrastructure to run [PySpark](../../Skills/Data%20Science/PySpark.md) jobs almost from scratch. But what if you don't want to deal with all the set up, configuration, and infrastructure yourself? That's where [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) come in. There are a handful of platforms that let you run PySpark jobs without having to manage your own Spark cluster. Some of them are super flexible and give you full control, others are more all-in-one opinionated platforms that take care of most of the heavy lifting, so you can focus on writing code and getting results. Databricks is one of the most popular platforms for running PySpark. It was created by the original creators of [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), and it's designed to make [Big Data](../../Skills/Data%20Science/Big%20Data.md) and machine learning workflows much easier to manage. Databricks provides a collaborative notebook environment, auto-scaling Spark clusters, built-in data connectors, and excellent [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) out of the box. It's especially useful for teams working together on [Data Science](../../Topics/Data%20Science.md) or analytics projects, and it works across AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Amazon Elastic MapReduce, EMR, is AWS's managed big data service that supports Spark, [Hadoop](../../Skills/Data%20Science/Hadoop.md), Hive, and more. With EMR, you can spin up Spark clusters on demand and scale them up or down based on workload. You have full control over the Spark environment, including configuration and custom dependencies. It's a great choice if you already use other AWS services and want more flexibility
>
> **[1:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=94)** than an all-in-one platform like Databricks. AWS Glue is a serverless [Data Integration](../../Skills/Data%20Science/Data%20Integration.md) service that runs PySpark under the hood. But you don't have to manage any infrastructure. You just write your PySpark code in the script, or use the visual job builder, and Glue handles provisioning, scaling, and monitoring. It's especially handy for simple to moderately complex data integration workflows, and works well with AWS tools like S3 and Redshift. Dataproc is Google Cloud platform's managed Spark and Hadoop service. It's similar to EMR in that it provides on-demand Spark clusters that integrate tightly with other GCP tools like BigQuery and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage. DataProc is often chosen for its fast cluster startup times, pricing, and ease of automation. You can submit PySpark jobs via the console, gcloud [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), or API. Azure Synapse is [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s cloud data platform that supports both serverless and provisioned Spark pools. It integrates with Azure Data Lake, [SQL](../../Skills/Data%20Science/SQL.md) data warehouse, and [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md), which makes it a good fit for teams that are already in the [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) ecosystem. Synapse lets you run PySpark code alongside SQL and other [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) engines, all from a unified interface. As you can see, there are lots of different hosted options based on how much control you want over your environment. I always recommend sticking with tools
>
> **[3:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=187)** that run on the cloud platform that you're already familiar with. So whether your team is on AWS, Google Cloud platform, or Azure, it's usually easiest to stick with that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (7), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (3), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (2)
> **Env Vars:** aws (6), emr (3), sql (2), gcp (1), cli (1)
> **CLI Commands:** aws (6), apache (1), make (1), gcloud (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Recap of key concepts and next steps](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=0)** - Congratulations on completing this course. Here's a quick recap. You learned how [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) works under the hood and how [PySpark](../../Skills/Data%20Science/PySpark.md) lets you harness that power using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). We explored the data frame API, tackled common operations like filtering, joining, and aggregating, and talk through handling missing data. You saw how PySpark [SQL](../../Skills/Data%20Science/SQL.md) fits into the picture, and how to make SQL and Python when it makes sense. And finally, we looked at what running PySpark in production actually looks like beyond the notebook and discussed some cloud-based options for running PySpark pipelines. Now you've got a solid foundation of PySpark. If you want to take your learning even further, here's some concepts you could explore. You might want to look into structured streaming if you're working with [Real-Time](../../Skills/Database%20Management/Real-Time.md) data. Another interesting concept is Delta Lake, an open source project which helps with versioning and data consistency in production environments. And if you're interested in machine learning, Sparks ML lip might be your next stop. That's a wrap. Thanks again for learning with me and I hope you're walking away feeling ready to tackle [Big Data](../../Skills/Data%20Science/Big%20Data.md) workflows with PySpark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PySpark](../../Skills/Data%20Science/PySpark.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** python (2), apache (1), make (1)
> **Env Vars:** sql (2), api (1)
> **Analogies:** picture (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Sam Bail](../../Instructors/Data%20Science/Sam%20Bail.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/pyspark-essential-training-build-robust-data-pipelines-2737073)

## Skills Covered

- PySpark
- Data Engineering

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)
← [Data Cleaning and Manipulating with Python in Excel](Data%20Cleaning%20and%20Manipulating%20with%20Python%20in%20Excel.md) | **4 of 6** | [Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) →

### In [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
← [Learning SnowflakeDB](../Cloud%20Computing/Learning%20SnowflakeDB.md) | **5 of 7** | [Apache Kafka Essential Training- Getting Started](../Cloud%20Computing/Apache%20Kafka%20Essential%20Training-%20Getting%20Started.md) →

### In [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)
← [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) | **6 of 6**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)
- [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
- [Advance Your Data Skills in Apache Spark](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Skills%20in%20Apache%20Spark.md)

## Related Courses

_Courses sharing skills:_

- [Databricks Certified Data Engineer Associate Cert Prep](Databricks%20Certified%20Data%20Engineer%20Associate%20Cert%20Prep.md) — Data Engineering
- [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) — Data Engineering
- [Transition from Data Science to Data Engineering](../Cloud%20Computing/Transition%20from%20Data%20Science%20to%20Data%20Engineering.md) — Data Engineering
- [Introduction to Modern Data Engineering with Snowflake](../Cloud%20Computing/Introduction%20to%20Modern%20Data%20Engineering%20with%20Snowflake.md) — Data Engineering
- [Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md) — Data Engineering

---

[↑ Back to top](#)