---
type: course
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
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/cloud-computing
  - topic/database-management
  - skill/pyspark
  - skill/data-engineering
status: not-started
created: 2026-04-17
---

# PySpark Essential Training: Introduction to Building Data Pipelines

> PySpark is a powerful library that brings Apache Spark’s distributed computing capabilities to Python, making it a key tool for processing large-scale data efficiently. In this course, data engineer and analyst Sam Bail provides a structured and hands-on introduction to PySpark, starting with an overview of Apache Spark, its architecture, and its ecosystem. Learn about Spark’s core concepts, such 

> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines) | 1h 18m | Intermediate | 5K learners

## Instructor

- [[Sam Bail]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/pyspark-essential-training-build-robust-data-pipelines-2737073)

## Skills Covered

- PySpark
- Data Engineering

## Table of Contents

### Introduction

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=0)** - If you've been wondering how to level up your data workflows and handle large datasets without running into memory issues or performance bottlenecks, this course is for you.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=9)** Apache Spark has become one of the most widely used tools in data engineering, from startups to companies like Netflix and Amazon, because it's powerful and scalable.
>
> **[0:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=19)** PySpark allows you to access the capabilities of Apache Spark using Python.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=24)** Hi, I'm Sam Bail, and I've spent over a decade working in data analytics and data engineering.
>
> **[0:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=30)** Here I'll walk you through the core concepts of PySpark using real datasets and hands-on examples.
>
> **[0:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=36)** Whether you're processing millions of rows, cleaning messy data, or prepping it for analytics, you'll learn how to get it done in PySpark.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/pyspark-essentials-training-introduction?u=76281980&t=44)** Let's dig in and get you up and running.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2), python (1)
> **Code Keywords:** let (1)
> **Speakers:** - if (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=0)** - [Instructor] Before we dive into the course, here's what you'll need to know to hit the ground running.
>
> **[0:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=4)** You should have a working knowledge of Python and be comfortable writing simple SQL queries.
>
> **[0:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=10)** If you've worked with Pandas or done any kind of data analysis in Python before, you'll be in good shape.
>
> **[0:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=16)** And since we'll be using Google Colab, it helps if you've used Jupyter notebooks or even Colab before.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=23)** But don't worry, you don't need to have any experience with PySpark or big data tools.
>
> **[0:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/course-pre-requisites?u=76281980&t=27)** We'll start from scratch.

> [!info]- Semantic Content
>
> **Tools:** colab (2), jupyter (1)
> **CLI Commands:** python (2)
> **Env Vars:** sql (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub repo
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980&t=0)** - [Instructor] We also have some code for you in a GitHub repository, so you have a working version of all the exercises we go through in this course.
>
> **[0:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980&t=8)** I encourage you to try and write the code yourself to really deepen your learning experience, but it can be helpful to have the model code at hand.
>
> **[0:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980&t=17)** You can find the repository at the following URL.
>
> **[0:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-github-repo?u=76281980&t=22)** In order to clone the repo and use the model notebook, you can follow the steps in the official GitHub tutorial.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Exercise Files:** clone the repo (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Spark and PySpark

#### Introduction to Apache Spark: The foundation of PySpark
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=0)** - [Instructor] Let's start with a quick overview of what PySpark is and what we can use it for.
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=5)** PySpark is based on Apache Spark, which is an open source analytics engine for large scale data processing.
>
> **[0:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=12)** Apache Spark was developed around 2009 and officially became an open source project of the Apache Software Foundation in 2013.
>
> **[0:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=20)** Spark is optimized for parallel and highly fault tolerant processing of massive data sets on a cluster of machines.
>
> **[0:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=28)** A computer cluster is a group of interconnected machines that work together as one system.
>
> **[0:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=33)** Each machine is called a node and their coordination is handled by a cluster manager.
>
> **[0:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=38)** This setup allows large computations to be split across nodes speeding up processing compared to a single machine.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=45)** This diagram shows how Spark runs on a cluster.
>
> **[0:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=49)** The driver program coordinates the work and talks to the cluster manager, which assigns tasks to worker nodes.
>
> **[0:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=56)** Each worker runs an executor inside a Java virtual machine, the JVM, allowing Spark to process massive data sets in parallel.
>
> **[1:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=66)** Now, does that mean that you need to have a cluster of machines available in order to use Apache Spark?
>
> **[1:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=72)** In short, no.
>
> **[1:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=73)** Spark also works on a single machine, which means you can simply use your own computer for development and testing.
>
> **[1:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=80)** You might've heard of Hadoop MapReduce, and wondered how it compares to Spark.
>
> **[1:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=84)** Both are built for big data, but Spark is generally better for real-time processing because of its lower latency and higher fault tolerance.
>
> **[1:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=91)** MapReduce, on the other hand, is more suited for batch jobs.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-apache-spark-the-foundation-of-pyspark?u=76281980&t=96)** In this course, our focus will be on Spark, not Hadoop, but I wanted to make sure you know how the two compare.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), node (1), make (1)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Code Keywords:** let (1), for. (1)
> **Prerequisites:** setup (1), you need to have (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### The Apache Spark ecosystem
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=0)** - [Instructor] Let's take a quick look at the different technologies that you might come across when you start working with Spark and PySpark.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=6)** There are lots of different components with similar names, so I want to make sure you can navigate them.
>
> **[0:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=12)** The foundation of Spark is called Spark Core, which provides distributed task dispatching, scheduling, and basic input/output functionalities.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=21)** Spark uses a concept called the resilient distributed dataset, RDD, which is a read-only multiset of data items that's distributed over a cluster of machines and maintained in a fault-tolerant way.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=35)** A dataframe in Spark is a higher-level abstraction on top of those RDDs that's optimized for structured data and tabular data processing.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=43)** A dataframe is conceptually the same as a table in a relational database or a dataframe in Python.
>
> **[0:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=50)** On top of Spark Core, we have Spark SQL.
>
> **[0:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=53)** Spark SQL is a Spark module that allows you to query data both in RDDs and in external sources, such as relational databases.
>
> **[1:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=62)** The Spark Dataset is a new interface that is only available through the Scala and Java API to Spark.
>
> **[1:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=68)** A dataset combines the benefits of RDDs, such as strong typing, with the benefit of Spark SQL's optimized execution engine.
>
> **[1:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=76)** Going back to the dataframe I mentioned earlier, you can think of a dataframe as a data set that's organized into named columns.
>
> **[1:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=83)** The Spark Web UI is a web app that comes bundled with Spark and can be accessed through your web browser.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=89)** The Web UI shows helpful information about the Spark jobs that you're running so you can monitor them.
>
> **[1:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=95)** And finally, I just want to mention two more components of the Spark ecosystem that you might come across.
>
> **[1:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=101)** First, Structured Streaming, which is a scalable and fault-tolerant stream processing engine built on the Spark SQL engine.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/the-apache-spark-ecosystem?u=76281980&t=108)** And second, the Machine Learning Library, or short, MLlib, is a library that contains machine learning algorithms and other functionality that makes practical machine learning in Spark scalable and easy.

> [!info]- Semantic Content
>
> **Definitions:** is a  (7), is called (1)
> **Env Vars:** sql (4), rdd (1), api (1)
> **Code Keywords:** let (1), module (1), interface (1), finally, (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Spark vs. PySpark
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=0)** - [Instructor] Now that we've introduced Apache Spark, let's take a closer look at PySpark and how it compares to Apache Spark.
>
> **[0:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=7)** Apache Spark is written in the Scala programming language.
>
> **[0:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=11)** Scala is a general purpose programming language built atop the Java virtual machine, the JVM.
>
> **[0:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=17)** PySpark is a Python API for Spark, so that programmers can use the Spark capabilities from within a Python environment.
>
> **[0:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=25)** This means that with PySpark, you can efficiently process data using Python and SQL, which makes it suitable for many data engineering teams that already use Python and SQL in their data pipelines.
>
> **[0:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=37)** You might have heard of Pandas, or maybe you're already using it.
>
> **[0:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=40)** PySpark has similar capabilities to Pandas, but it's much more suited for large data sets that benefit from distributed and parallel computation.
>
> **[0:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=49)** The main applications of PySpark are building data pipelines to transform your data, data analysis on large data sets, processing real-time streaming data, and machine learning.
>
> **[1:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=62)** In addition to the execution engine, PySpark also provides an interactive shell that you can use for data analysis in your terminal.
>
> **[1:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=70)** PySpark supports all of the Spark features that I mentioned earlier.
>
> **[1:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/spark-vs-pyspark?u=76281980&t=74)** So in summary, the biggest difference between Spark and PySpark is the usability for developers and teams who already use Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), apache (3)
> **Env Vars:** sql (2), jvm (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up PySpark

#### Google Colab notebook setup
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=0)** - [Instructor] One of the easiest ways to run PySpark code is in a Jupyter Notebook, but I don't want you to waste any time troubleshooting a local setup.
>
> **[0:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=8)** That's why for the purpose of this course, we're going to use a cloud-based development environment to make sure that we all use the same setup, regardless of operating system.
>
> **[0:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=18)** Let's walk through a setup on how to run PySpark in a Google Colab Notebook.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=24)** Google Colab is a cloud-based notebook environment that functions like a Jupyter Notebook in the sandbox Python environment, so you don't have to worry about your local configuration.
>
> **[0:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=34)** It's free and works in any browser.
>
> **[0:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=37)** In order to use Colab, you will need a Google account.
>
> **[0:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=40)** You probably already have one, but if you don't, go to accounts.[google.com](https://google.com) and follow the steps to sign up for a free account.
>
> **[0:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=47)** That way you can use all of Google's services such as Google Drive, Gmail, and Colab.
>
> **[0:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=53)** To set up a Colab notebook, go to colab.research.[google.com](https://google.com) and make sure you're locked into your Google account.
>
> **[1:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=60)** You might see some example notebooks here.
>
> **[1:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=62)** Feel free to ignore those for now.
>
> **[1:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=65)** Click the blue button in the bottom left corner that says New notebook to create and open a new notebook.
>
> **[1:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=73)** You can rename the notebook at the top where it says Untitled.
>
> **[1:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=76)** Click into the field and name it pyspark training.
>
> **[1:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=81)** If you're familiar with Jupyter Notebooks, Colab works just like that.
>
> **[1:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=85)** You can type Python code into the code boxes and execute it by clicking the play button.
>
> **[1:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=95)** The keyboard shortcuts are also the same as in a Jupyter Notebook, which means you can use Command or Control and Enter to run a cell, Escape and Enter to exit or enter cell edit mode, A and B to create new cells, navigate cells with the arrow keys, and so on.
>
> **[1:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=112)** Google Colab might not come with PySpark installed.
>
> **[1:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=115)** In order to ensure that the library is available, type the following code into a notebook cell and execute it.
>
> **[2:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=128)** You should see no error messages.
>
> **[2:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=131)** To test that my notebook can run PySpark, I execute the following code in a cell.
>
> **[2:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=136)** This should run without errors and print the PySpark version.
>
> **[2:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=145)** Great.
>
> **[2:26](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=146)** We see the PySpark version here.
>
> **[2:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=147)** We're using version 3.5.1.
>
> **[2:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=150)** One important thing to keep in mind is that a Colab notebook will reset its memory after it's been idle for 90 minutes.
>
> **[2:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=157)** This means that you might have to rerun all cells to reload the content if you've taken a longer break.
>
> **[2:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=164)** Okay, now it's your turn.
>
> **[2:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/google-collab-notebook-setup?u=76281980&t=165)** Set up a new Colab notebook called pyspark training, import PySpark, and check the version, just like I did.

> [!info]- Semantic Content
>
> **Tools:** colab (10), jupyter (4)
> **Prerequisites:** setup (3), set up (2)
> **CLI Commands:** make (2), python (2)
> **Analogies:** just like (2), such as (1)
> **Code Keywords:** let (1), break. (1)
> **URLs:** [google.com](https://google.com) (2)
> **Versions:** version 3 (1), 5.1 (1)
> **UI Navigation:** go to (2)

#### Downloading a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=0)** - [Instructor] Now let's download a publicly available dataset that we can use throughout this course.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=6)** I live in New York City, home of the iconic yellow taxis.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=9)** Let's say a data team wants insights into those rides, like pickup spots, ride length, or fare amounts.
>
> **[0:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=15)** New York City offers a free official dataset for this.
>
> **[0:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=19)** It's a popular choice for learning data analytics.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=21)** It's big but manageable.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=24)** To download the New York City taxi data, go to the New York City data site.
>
> **[0:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=28)** We want to download three files from here.
>
> **[0:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=31)** First, under the heading Taxi Zone Maps and Lookup Tables, download the Taxi Zone Lookup Table CSV file.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=43)** Then scroll down a little to the heading that says 2025, and click to expand it.
>
> **[0:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=51)** Click on the links for Yellow Taxi Trip Records for both January 2025 and February 2025, and the downloads will start automatically.
>
> **[1:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=65)** The files sizes are just over 50 megabytes, so these files should download pretty quickly.
>
> **[1:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=70)** Make sure to store all three files in a location where it can easily locate them later.
>
> **[1:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=76)** Now we need to make sure that we can upload the data and access it from our Colab notebook.
>
> **[1:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=81)** First, let's upload the files to Google Drive.
>
> **[1:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=84)** Navigate to drive.[google.com](https://google.com) in a new web browser tab and make sure you logged into the same account as the tab with your Colab notebook.
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=93)** Create a new folder for your tutorial files.
>
> **[1:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=95)** In my case, I'm just creating one called pyspark_training in my home directory.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=108)** Next, I upload the three files into this directory in Drive.
>
> **[2:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=122)** Now that our data files are stored in Drive, we need to make sure we can access them from the Colab notebook.
>
> **[2:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=129)** Let's mount Google Drive in our Colab Notebook as a directory.
>
> **[2:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=133)** Go back to the browser tab with your pyspark_training notebook file.
>
> **[2:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=137)** Create a new code cell by hitting the B key for make a new cell below the current one and enter the following code to tell Colab to mount your Google Drive as a directory.
>
> **[2:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=161)** Execute the code cell by clicking the Play button or using the keyboard shortcut.
>
> **[2:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=167)** You will see a popup that says, "Permit this notebook to access your Google Drive files?"
>
> **[2:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=172)** Click the Connect to Google Drive button and follow the steps to confirm access.
>
> **[3:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=189)** This all happens in your own personal Google account, so you don't have to worry too much about those permissions.
>
> **[3:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=194)** You're really just given permissions to yourself.
>
> **[3:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=198)** Finally, let's make sure that we can really access the file from Colab.
>
> **[3:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=202)** Again, create a new code cell and enter the following code.
>
> **[3:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=216)** Execute it using the keyboard shortcut or the Play button.
>
> **[3:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=220)** This code imports the OS module from Python and runs a simple check whether the file exists using the isfile command.
>
> **[3:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=229)** The output will be a true or false.
>
> **[3:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=233)** If you've executed the code cell and you've typed everything in correctly, you will see the output as true, which means that this file, the yellowtripdata_2025-01.parquet file exists.
>
> **[4:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=246)** If there are any errors, make sure you have the correct file path and that all your data files are actually uploaded to your Google Drive.
>
> **[4:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=253)** Well done.
>
> **[4:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=254)** You now have a fully working Colab set up that allows you to access files in Google Drive from your virtual environment.
>
> **[4:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/downloading-a-dataset?u=76281980&t=260)** You're ready to start with PySpark.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1), case, (1), finally, (1), module (1)
> **CLI Commands:** make (7), python (1)
> **Tools:** colab (7)
> **UI Navigation:** go to (1), scroll down (1), click on (1), navigate to (1)
> **Code Identifiers:** pyspark_training (2)
> **Exercise Files:** download the (2)
> **Prerequisites:** make sure you have (1), set up (1)
> **URLs:** [google.com](https://google.com) (1)


### 3. Working with PySpark DataFrames

#### Introduction to PySpark DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=0)** - [Instructor] A data frame in Spark is a higher-level abstraction on top of resilient distributed data sets that's optimized for structured data and tabular data processing.
>
> **[0:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=10)** A data frame is conceptually the same as a table in a relational database or data frame in Python.
>
> **[0:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=15)** If you've used Pandas or R for data work before, you're already familiar with a concept of a data frame.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=21)** However, there are some key differences between data frames in Pandas and PySpark that I want to highlight.
>
> **[0:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=27)** Pandas data frames are designed for small to medium sized data sets as they're all held in memory on a single machine.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=35)** PySpark data frames are designed for large data sets that are distributed across multiple machines in a cluster.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=43)** Pandas data frames are mutable, which means the data frame itself can be modified with an operation.
>
> **[0:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=49)** PySpark data frames, on the other hand, are immutable, which means that any operation performed on it returns a new data frame.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=58)** This immutable design ensures consistency across the distributed data set.
>
> **[1:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=64)** Pandas uses eager evaluation of operations on the data frame, meaning the operations are executed as soon as they occur in the code.
>
> **[1:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=74)** PySpark uses lazy evaluation, which means that the operations are queued and optimized for execution.
>
> **[1:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=81)** Since PySpark uses lazy evaluation, Spark doesn't immediately run the code when you apply transformations to it.
>
> **[1:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=88)** Instead, it builds a DAG, or directed acyclic graph, behind the scenes.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=96)** You can think of the DAG as a roadmap of your operations.
>
> **[1:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=100)** It shows what data you're starting with, what transformations you want to apply and in what order.
>
> **[1:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=106)** Spark holds onto this plan and only executes it when an action is triggered that actually needs to be executed.
>
> **[1:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=116)** This DAG is what lets Spark optimize your job before running it.
>
> **[2:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=120)** It can figure out the most efficient way to execute geotransformations across the cluster, group related steps together and cut out unnecessary work.
>
> **[2:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/introduction-to-pyspark-dataframes?u=76281980&t=130)** In summary, you can say that while Pandas and PySpark data frames provide a similar data structure and operations, the way they work under the hood is very different.

> [!info]- Semantic Content
>
> **Env Vars:** dag (3)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Data formats and loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=0)** - [Instructor] Now that we've covered the basics of PySpark data frames, let's create a new one from our taxi data.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=6)** You can create a PySpark data frame by loading data from various sources, including data files such as CSV and Parquet files in local storage or in cloud storage, such as AWS S3 buckets, Google Cloud Storage, and Azure Blob Storage.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=21)** You can load it from a relational database, you can use tables in Hive, or resilient distributed datasets, RDDs, in Spark.
>
> **[0:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=31)** The example dataset that we downloaded earlier was in the Parquet format, but PySpark can support many different formats.
>
> **[0:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=38)** These include CSV, JSON, ORC, and Avro.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=43)** The main difference between these file types is the compression and how they handle schemas, but for all purposes, we can use them all in a similar way.
>
> **[0:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=52)** Let's try this hands-on and actually load some data.
>
> **[0:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=56)** First, we need some setup code to start using PySpark in our notebook.
>
> **[1:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=60)** Open your Colab notebook and type the following import statement.
>
> **[1:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=68)** This imports the SparkSession package, which provides a unified entry point for accessing Spark features through Python.
>
> **[1:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=75)** Next, we'll create a SparkSession object called Spark and print its metadata.
>
> **[1:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=90)** Once you run the setup code in your Colab notebook, you should see some metadata output, including the Spark version.
>
> **[1:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=97)** Now that we've got a Spark session up and running, we can load the taxi data file into a data frame using code like this.
>
> **[1:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=111)** This code creates a data frame named DF and loads the data from the Parquet file into it.
>
> **[1:59](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=119)** We can display the data in the data frame in a nicely formatted table like this.
>
> **[2:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=128)** This code shows the top five rows of the data frame in a simple table format in your Colab notebook.
>
> **[2:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=141)** And that's it, congratulations, you just loaded data from a Parquet file into a PySpark data frame.
>
> **[2:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=147)** Just remember that a Colab notebook resets its memory when you've been inactive for more than 90 minutes.
>
> **[2:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=153)** So if you've taken a longer break, you might have to execute the import and load code again when you come back.
>
> **[2:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/data-formats-and-loading-data?u=76281980&t=160)** And finally, if you're curious about loading data directly from a relational database into a data frame, I recommend checking out the PySpark documentation to learn more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), break, (1), finally, (1)
> **Env Vars:** csv (2), aws (1), json (1), orc (1)
> **Tools:** colab (4)
> **CLI Commands:** aws (1), python (1)
> **Analogies:** such as (2)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1)

#### Schema and data types
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=0)** - [Instructor] Now that we've loaded our file into a DataFrame, let's explore the data a little.
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=5)** When we start working with data, it's usually helpful to understand what the data looks like, what the column names are, and the data types, and to see some sample data.
>
> **[0:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=16)** Recall that we can use df.show to display the first n rows of the DataFrame, but there are many more features that help us get a grasp of the data.
>
> **[0:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=25)** The first thing we usually want to find out is simply how many rows we have in the DataFrame.
>
> **[0:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=30)** You can use the count method for that.
>
> **[0:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=33)** Type the following in a notebook cell and execute it.
>
> **[0:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=40)** This will output the number of rows below the cell nice and easy.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=44)** As you can see, we have over 3 million taxi ride in this DataFrame.
>
> **[0:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=49)** Next, let's find out the schema of the data we've loaded, which means the names of the columns and their data types.
>
> **[0:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=56)** If you just want to see the column names, you can access the schema.names property of the DataFrame like this.
>
> **[1:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=67)** This will simply print the column names of the DataFrame.
>
> **[1:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=72)** Another helpful function is printSchema, which prints out the column names along with the data types of those columns.
>
> **[1:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=80)** You can type the following in a notebook cell.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=89)** This will print a list showing each column in the file with its inferred data type.
>
> **[1:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=95)** For example, the field VendorID is an integer, the pickup_datetime is a timestamp, and so on.
>
> **[1:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=105)** Keep in mind that for file formats that only contain the column name and data, like a CSV file, for example, the data type is inferred by looking at the data in the column and might not always be accurate.
>
> **[1:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=118)** We'll talk about how to modify your DataFrame later.
>
> **[2:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=122)** Finally, if you want to dig a little deeper into your DataFrame and get some descriptive statistics, you can use the describe function.
>
> **[2:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=130)** describe gives you the number of rows containing data as well as the min, max, mean, and standard deviation of the field.
>
> **[2:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=138)** This means it makes the most sense to use describe on numeric columns.
>
> **[2:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=143)** The following code shows descriptive statistics for the passenger_count and the total_amount columns.
>
> **[2:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=156)** The output shows you the number of non-null roles for those columns, as well as some basic statistics like the count, the mean, the standard deviation, min, and max.
>
> **[2:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/schema-and-data-types?u=76281980&t=166)** Doing this kind of light data exploration is really helpful to get a better grasp of the data so that we can get started with some more complex queries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), this. (1), type. (1), finally, (1)
> **Code Identifiers:** printschema (1), pickup_datetime (1), passenger_count (1), total_amount (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Env Vars:** csv (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Basic querying (select, filter, and sort)
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=0)** - [Instructor] We're ready to look more closely at our data and actually start querying it for some data analysis.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=6)** Let's start with something simple and access some columns in our DataFrame.
>
> **[0:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=10)** Just like a table in a database, a PySpark DataFrame has columns and rows.
>
> **[0:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=15)** In PySpark, you can access a column using several different notations.
>
> **[0:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=20)** Let's try this with a passenger_count column.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=23)** First, you can use the dot notation like this.
>
> **[0:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=27)** This is a convenient shorthand notation, but it won't work if the column name has spaces or uses reserved keywords.
>
> **[0:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=34)** Personally, I prefer a more explicit index syntax using square brackets.
>
> **[0:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=40)** If you're familiar with pandas, you've probably used this notation a lot.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=44)** In PySpark, it is also common to use the select function on a DataFrame to access a column.
>
> **[0:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=50)** This works just like a SELECT statement in SQL.
>
> **[0:54](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=54)** Okay, let's try the last one in our notebook.
>
> **[1:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=61)** You might be wondering why the only output you see is the data type of the result.
>
> **[1:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=66)** Remember that I told you earlier that PySpark DataFrames are immutable in order to ensure consistency across the distributed dataset?
>
> **[1:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=74)** This means that the select command returns a new DataFrame, which the Colab notebook doesn't automatically display as a table.
>
> **[1:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=82)** We have to use the show method like this.
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=93)** This simply prints the first 20 rows of the DataFrame limited to the column we just selected, passenger_count.
>
> **[1:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=101)** You might also see versions of select that use the call function, which is equivalent to the version without it.
>
> **[1:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=111)** Let's try this out.
>
> **[1:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=118)** And finally, if you want to select multiple columns, you can simply pass a comma separated list as an argument to select.
>
> **[2:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=128)** Like this.
>
> **[2:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=135)** And just to reiterate, the select method returns a DataFrame, so we need to use show to display the result.
>
> **[2:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=145)** Okay, let's move on to sorting our DataFrame.
>
> **[2:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=148)** The sort method in PySpark allows us to sort a DataFrame by one or multiple columns.
>
> **[2:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=154)** This has the same effect as the ORDER BY statement in SQL.
>
> **[2:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=160)** Assume we want to sort the DataFrame on the total_amount field in descending order.
>
> **[2:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=164)** Let's try this in our notebook.
>
> **[2:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=178)** This shows us our DataFrame sorted with the highest total_amount at the top.
>
> **[3:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=191)** By setting the ascending property to False, we can sort in descending order.
>
> **[3:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=199)** If we want to sort by multiple columns and decide for each one whether to sort ascending or descending, we can simply pass in lists instead of strings throughout the following statement in your notebook.
>
> **[3:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=219)** So this statement sorts by the total_amount in descending order and also the passenger_count column in descending order.
>
> **[3:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=228)** Next up, let's look at the filter method.
>
> **[3:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=231)** If you only want to show rows in your DataFrame that match certain conditions, you can use a filter statement, which basically works like a WHERE clause in SQL.
>
> **[4:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=241)** Let's try this out.
>
> **[4:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=244)** Assume we only want to show trips in our taxi data that went to the airport, which means they incurred an airport fee.
>
> **[4:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=251)** The airport fees captured in the last column in our DataFrame called Airport_fee.
>
> **[4:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=263)** Type the following into a cell in your Colab notebook and execute it.
>
> **[4:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=274)** This shows the top 20 rows of all the records in a DataFrame that have an Airport_fee that's greater than 0, so they went to the airport.
>
> **[4:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=283)** What if we want to combine multiple filter criteria?
>
> **[4:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=287)** Let's assume we want to find airport rides with more than two passengers.
>
> **[4:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=291)** We can use the Boolean statement AND to add more conditions.
>
> **[4:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=296)** Let's try this out.
>
> **[5:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=306)** This shows all rows that match both of those criteria.
>
> **[5:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=311)** You probably already guessed that we can also combine select and filter to only select specific rows that match a filter criteria just like we would in SQL.
>
> **[5:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=321)** Let's chain the select and filter methods that we've used earlier.
>
> **[5:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=337)** As you can see, this query combines the filter and the select method to filter for airport rides with more than two passengers, and to select only those three columns in your output.
>
> **[5:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=351)** Now that you've learned how to write simple queries against your PySpark DataFrame, are you ready to try it out for yourself?
>
> **[5:57](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/basic-querying-select-filter-sort?u=76281980&t=357)** Let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this. (3), function (2), pass (2), finally, (1)
> **Env Vars:** sql (4), select (1), order (1), where (1)
> **Code Identifiers:** passenger_count (3), total_amount (3)
> **SQL:** select (1), order by (1), where (1)
> **Analogies:** just like (3)
> **Tools:** colab (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)

#### Challenge: Querying a DataFrame
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=0)** - [Instructor] Okay, here's your challenge.
>
> **[0:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=7)** Write a query combining sort, select, and filter that shows all non-airport rides with exactly one passenger.
>
> **[0:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=15)** Select only the trip distance and total amount columns.
>
> **[0:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=18)** Make sure to sort the resulting dataframe by the trip distance in descending order.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=24)** This quick challenge should only take you a few minutes to complete.
>
> **[0:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-querying-a-data-frame?u=76281980&t=27)** Type your code into your Colab notebook and then move on to the next video where I'll share my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Tools:** colab (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Querying a DataFrame
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=0)** - [Instructor] All right. Check out what I came up with.
>
> **[0:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=8)** First, we filter by the airport fee and passenger count conditions.
>
> **[0:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=13)** Then we select only the columns that we're interested in from the data frame that's being returned.
>
> **[0:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=20)** Finally, we saw it by the trip distance field with the ascending flag set to false so that it's descending.
>
> **[0:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=28)** Don't forget to use the show method at the end to display the resulting data frame.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=35)** You might be wondering, does the order of these statements matter?
>
> **[0:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=39)** Should we write the filter first or the select?
>
> **[0:42](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=42)** Remember that PySpark uses a method called lazy evaluation.
>
> **[0:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=46)** That means it parses out all the transformation first, and then it decides the best order to actually execute them.
>
> **[0:54](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-querying-a-data-frame?u=76281980&t=54)** So even if you don't write them in the perfect order, Spark will optimize it for you behind the scenes.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Essential PySpark Data Manipulation

#### Handling missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=0)** - [Instructor] If you've ever worked with real world data, you know it's rarely perfect.
>
> **[0:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=4)** In an ideal world, every column would have valid values, but we often deal with missing data.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=9)** To avoid skewing our results, it's important to identify what's missing and decide how to handle it, whether that's filling in defaults or dropping rows.
>
> **[0:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=19)** Let's take a look at our taxi data set and see if we have any missing data in some of the key fields that we're working with.
>
> **[0:26](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=26)** First of all, we want to import some additional functions from Pyspark that can help us with this.
>
> **[0:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=32)** Type the following into a new cell in your call app notebook and execute it.
>
> **[0:42](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=42)** Let's keep exploring the columns we've already worked with, like passenger count and fare amount.
>
> **[0:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=46)** Are there any records in our dataset where the fare or the number of passengers is not populated?
>
> **[0:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=51)** These would skew any calculations around average fare amounts or passenger counts.
>
> **[0:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=56)** For example, we can use the isnull function in Pyspark to return rows where the specified column is null or empty.
>
> **[1:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=64)** Just like some of the other functions we've seen, this also returns a new data frame, so we also want to use either a show or account operation to see the results.
>
> **[1:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=74)** Try this out in your call-up notebook by typing the following.
>
> **[1:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=83)** This statement retrieves the rows where the fare amount column is null and then shows the top 20 rows.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=89)** In this case, it looks like there aren't any null values in the column, so we get a zero.
>
> **[1:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=95)** Let's try this with a passenger count column now.
>
> **[1:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=104)** This shows us that there are quite a few null values in the passenger account column, over half a million.
>
> **[1:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=110)** It's probably safe to assume that every taxi ride should have at least one passenger, and that the data was just not recorded by the driver.
>
> **[1:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=116)** It happens, right?
>
> **[1:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=118)** Let's backfill those null values with the value one.
>
> **[2:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=121)** Run the following code in your notebook.
>
> **[2:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=133)** If you execute the cell, you won't see a result because the output has been assigned to the new data frame called DF1.
>
> **[2:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=141)** You already know how to display this data frame in your notebook.
>
> **[2:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=144)** Use the show command like this.
>
> **[2:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=151)** This now shows a data frame with the null values in the passenger count column filled with the value one.
>
> **[2:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=159)** Next, we can confirm that the new data frame no longer has the null values that we've just filled.
>
> **[2:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=170)** The output of this statement is zero, which means there are no more null values in the passenger count column.
>
> **[2:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=176)** Keep in mind that this is just a very simple example of how real world data might actually be corrupted.
>
> **[3:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/handling-missing-data?u=76281980&t=182)** In reality, you will come across much more complex scenarios that require a deeper knowledge of the data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), function (1), case, (1), require (1)
> **Analogies:** for example (1), just like (1)
> **Env Vars:** df1 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Creating new columns
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=1)** - [Instructor] Let's assume we want to look a little more closely at the trip duration in our at taxi ride data.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=6)** We have the pickup and drop off times so we can calculate the duration between those two.
>
> **[0:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=11)** Wouldn't it be handy to have the trip duration as a permanent column in our data frame rather than calculating it each time?
>
> **[0:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=18)** Let's jump back to our collab notebook and try this out.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=23)** We can use the with column method to create an entirely new column that contains the trip duration in minutes.
>
> **[0:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=30)** First, we need to import a couple of mathematical functions that help us with the timestamps.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=35)** Run the falling code in a cell in your notebook.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=44)** Next, you can calculate the trip duration and add it to the data frame as follows.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=58)** The first argument of the width column method is the name of the new column, and the second is how it's calculated.
>
> **[1:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=67)** We calculate the trip duration by subtracting the pickup time from the drop off time, and dividing it by 60 to get the result in minutes.
>
> **[1:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=78)** We then round the result to one decimal place.
>
> **[1:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=82)** Remember, we're dealing with taxi rides here, so we don't need to be supersize.
>
> **[1:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=87)** Now, we've worked quite a lot with our data frame.
>
> **[1:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=90)** As we loaded it from the file, it contains several columns that we don't really care about, and some of the columns are spelled inconsistently.
>
> **[1:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=98)** We can use the select statement that we already know to select those columns and the width columns renamed method to rename the columns for more consistent naming.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=108)** In our case, the Width columns renamed method takes a dictionary as an argument of the type old column name, colon, new column name, type the following code in a code cell and execute it.
>
> **[2:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=130)** I know this looks like a lot, but it's actually really straightforward.
>
> **[2:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=134)** You're just combining a select and a with columns renamed statement and assigning the result to a new data frame called df2.
>
> **[2:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=144)** Let's use the show command to look at the new data frame that we've created.
>
> **[2:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=156)** And finally, I also want to show you how you can quickly remove columns from a data frame.
>
> **[2:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=161)** The drop method returns a data frame that's identical to the original one, but with one or more columns removed.
>
> **[2:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=178)** This statement returns a data frame that's identical to df1, but without the vendor ID and the rate code ID columns.
>
> **[3:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-new-columns?u=76281980&t=186)** We use the show statement again to display it in our notebook.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Unions and joins
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=0)** - [Instructor] If you've used SQL before, you're likely familiar with the concept of a union and a join.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=6)** A union combines two data frames with the same columns by appending rows.
>
> **[0:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=11)** A join adds columns from one data frame to another based on a matching condition.
>
> **[0:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=16)** Let's try this out in PySpark.
>
> **[0:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=18)** So far, we've only loaded the taxi ride data from January 2025.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=23)** Let's say we want to combine all 2025 taxi ride data that we have so far into one data frame.
>
> **[0:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=30)** We'll start by loading the February data using the read.parquet method.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=35)** (mouse clicking) Next, we append the February data to our January data frame using a union.
>
> **[0:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=48)** Keep in mind that the data frames must have the same column order and names for this to work.
>
> **[0:54](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=54)** (mouse clicking) This creates a new data frame called df_2025 by appending all rows from df_feb onto the rows in the df data frame, which contains our January data, as you remember.
>
> **[1:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=72)** To check the result we can count the number of rows in this new data frame.
>
> **[1:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=77)** (mouse clicking) You should see over seven million rows, which is the sum of the January and February taxi rides.
>
> **[1:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=87)** Note that the union does not remove duplicates.
>
> **[1:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=90)** If you combine the same data more than once, you will end up with duplicate records.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=96)** Okay, let's take a look at joins now.
>
> **[1:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=98)** Joins in PySpark work similar to SQL.
>
> **[1:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=101)** You have two or more data frames and specify which columns you want to join on.
>
> **[1:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=107)** This appends the columns of one data frame onto another.
>
> **[1:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=110)** Depending on the type of join it might also create new rows, but more often than not we just want to add columns with additional information to existing rows.
>
> **[2:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=120)** Let's try a join.
>
> **[2:03](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=123)** In our data set, PU location ID and DO location ID represent pickup and drop-off locations, but they're just numbers.
>
> **[2:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=133)** To find out which boroughs in New York City those numbers refer to, we'll join the trip data with a lookup table that maps location IDs to boroughs and neighborhoods in New York City.
>
> **[2:26](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=146)** Let's load that lookup table from our Google Drive into a new data frame.
>
> **[2:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=150)** This time we have to use the CSV load method.
>
> **[2:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=154)** (mouse clicking) Since we're loading a CSV file, we also have to tell PySpark that the first row in the CSV file is the header row.
>
> **[2:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=168)** That's why we use an additional method called option, and specify that the file contains a header row by setting the argument to header true.
>
> **[2:57](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=177)** Let's take a quick look at the taxi zone lookup data frame with the show method.
>
> **[3:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=181)** (mouse clicking) Now, let's add a borough column for each pickup location to our existing data frame with the taxi ride data.
>
> **[3:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=194)** We can use the join method as follows to join the data frames on the respective ID columns.
>
> **[3:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=203)** (mouse clicking)
>
> **[3:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=213)** The first line creates a new data frame called df_joined with all columns from df_2025 plus all the columns from the lookup table.
>
> **[3:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=223)** Since the join columns don't have the same name, we write out the join condition explicitly as df_2025.PUlocationID == taxi_zone_lookup.LocationID.
>
> **[3:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=238)** And, finally, I want to highlight that the join types in PySpark behave just like in SQL.
>
> **[4:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/unions-and-joins?u=76281980&t=244)** We're using a left join here because we don't want to drop any rows, in case the location ID can't be found in the lookup table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (1)
> **Env Vars:** sql (3), csv (3)
> **Non-Speech:** (mouse clicking) (6)
> **Code Identifiers:** df_feb (1), df_joined (1), taxi_zone_lookup (1)
> **Analogies:** similar to (1), just like (1)
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Aggregating
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=0)** - [Instructor] Let's assume you want to get some basic analytics across the taxi rides in your data frame.
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=5)** For example, how often do customers pay with different payment methods, and what's the average fare for our rides, and how does it differ by payment method?
>
> **[0:13](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=13)** Aggregate functions in PySpark let you compute values across an entire data frame, such as the count, sum, min, max, average, and the standard deviation.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=24)** This is how we construct an aggregate.
>
> **[0:26](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=26)** First, we want to find a field to group by, and then we choose the aggregate function to use.
>
> **[0:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=32)** Let's do this with our taxi data and calculate how often customers use specific payment methods like cash or credit card.
>
> **[0:42](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=42)** In order to do this, we want to group by the payment type column and then count how often each type occurs in the data frame.
>
> **[0:49](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=49)** Run the following code in your notebook.
>
> **[0:57](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=57)** This statement does several things.
>
> **[1:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=60)** First, it groups a data frame by the payment column.
>
> **[1:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=64)** Second, it then counts the number of rows for each subgroup defined by the payment type.
>
> **[1:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=70)** Third, it then sourced the resulting data frame by the payment type column.
>
> **[1:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=75)** This is purely cosmetic.
>
> **[1:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=78)** And finally, it displays the resulting data frame in the notebook using the show method we already know.
>
> **[1:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=84)** For this next part, I cheated a little and I used the data dictionary on the taxi data website to look up the payment type values.
>
> **[1:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=91)** Here's what the numbers mean.
>
> **[1:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=94)** Next, let's see if there's a difference between the amount of the fare and the payment type.
>
> **[1:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=99)** To find this out, we once again group by the payment type column in the data frame, but this time, instead of using the count function, we use the average function to calculate the average of the total amount column.
>
> **[1:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=112)** Type and execute the following code in your notebook.
>
> **[1:59](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=119)** This shows us that the average payment with a credit card, which is payment type one, is higher than cash payments, which is payment type two.
>
> **[2:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=129)** That's probably not surprising.
>
> **[2:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=131)** Let me show you an alternative way of writing aggregate functions in PySpark that might come in quite handy for some use cases.
>
> **[2:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=138)** Instead of calling the average method directly on the result of the group by, you can use the avg method instead and pass the average function as an argument.
>
> **[2:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=148)** Let me show you how.
>
> **[2:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=152)** First ,import the average function from PySpark.
>
> **[2:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=160)** Then we use the avg method like this.
>
> **[2:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=168)** This syntax gives you more control.
>
> **[2:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=170)** For example, you can give the resulting average column a clearer, more human-readable name using the alias method.
>
> **[3:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=185)** As you can see here, I have now renamed the column from average total amount, which is automatically generated, to the much nicer to read average amount.
>
> **[3:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=196)** There are several other useful aggregate functions in PySpark, like sum, min, max, and the standard deviation.
>
> **[3:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/aggregating?u=76281980&t=203)** I recommend looking those up in the documentation when you need them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (5), type. (2), this, (1), finally, (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Writing data
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=0)** - [Instructor] Until now, we've only worked with data frames in memory in our notebook, but in a real-world application, we usually want to write some data back into a database or a file to have a permanent record of it.
>
> **[0:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=12)** Writing data to a file is pretty straightforward in PySpark as the dataframe class already has a write method we can use.
>
> **[0:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=19)** Let's create a new output file with the results of a group-by calculation.
>
> **[0:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=25)** First, we want to assign the result of the group by to a new dataframe for convenience.
>
> **[0:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=32)** Then we write the dataframe to a CSV file.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=35)** In this case, we choose CSV as it's a really small table, so we don't need a more efficient format like Parquet.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=45)** This tells PySpark to write the output to a directory called average fare.
>
> **[0:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=51)** Include a header row, and if necessary, override any existing files.
>
> **[0:57](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=57)** You can check the output of this statement directly from your Google call app UI.
>
> **[1:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=62)** On the left-hand side in your call app window, navigate to the bottom icon that looks like a folder.
>
> **[1:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=68)** Click it to open up a directory tree.
>
> **[1:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=71)** Navigate to Drive, My Drive, and then the name of your PySpark training directory.
>
> **[1:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=79)** You will see a folder called Average Fare, which contains a single CSV file that starts with Part.
>
> **[1:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=87)** By default, PySpark creates one output file per partition of your data.
>
> **[1:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=93)** This is one of the main differences between how PySpark handles data and how Pandas handles data.
>
> **[1:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=99)** PySpark always assumes that your data will be distributed.
>
> **[1:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/writing-data?u=76281980&t=105)** In case you're curious about how to write a dataframe to a database table or a data warehouse instead of a file, I recommend checking out the PySpark documentation to learn more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), override (1), default, (1)
> **Env Vars:** csv (3)
> **UI Navigation:** navigate to (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Essential data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=5)** - [Instructor] Okay, it's your turn now to try this hands-on.
>
> **[0:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=8)** Write some PySpark code that does some data cleansing and apply several of the methods you've learned before.
>
> **[0:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=14)** Step one, create two new dataframes called df_jan_2025 and df_feb_2025 from the corresponding data files.
>
> **[0:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=22)** Step two, create a new dataframe called df_2025_combined as a union of these two files.
>
> **[0:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=29)** Step three, only select the following columns from this combined dataframe and rename the columns as indicated in the parentheses.
>
> **[0:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=36)** Reassign the result of this to df_2025_combined.
>
> **[0:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=41)** For example, take the tpep_pickup_datetime column and rename it to pu_datetime.
>
> **[0:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=47)** Step four, create a new dataframe called taxi_zones from the taxi_zone_lookup.csv file.
>
> **[0:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=53)** Step five, join the taxi_zones dataframe onto the df_2025_combined dataframe using the do_location_id and the LocationID columns.
>
> **[1:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=65)** Reassign the result of this join to df_2025_combined.
>
> **[1:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=69)** Step six, the final cleanup.
>
> **[1:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=71)** Drop the superfluous LocationID, Zone, and service_zone columns, and rename the Borough column to pu_boro.
>
> **[1:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=79)** Reassign the result to df_2025_combined.
>
> **[1:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-essential-data-manipulation?u=76281980&t=83)** And finally, step seven, display the resulting dataframe df_2025_combined in your notebook using the show method.

> [!info]- Semantic Content
>
> **Code Identifiers:** taxi_zones (2), tpep_pickup_datetime (1), pu_datetime (1), taxi_zone_lookup (1), do_location_id (1)
> **File Paths:** taxi_zone_lookup.csv (1)
> **Code Keywords:** finally, (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Essential data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=5)** - [Instructor] Okay, I hope you enjoyed working on this challenge.
>
> **[0:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=8)** I know that it was a tough one, here's my solution.
>
> **[0:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=11)** Step one, I read in the data files and create two new data frames.
>
> **[0:18](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=18)** Step two, I use union to union those two data frames.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=24)** Step three, I select and rename the columns.
>
> **[0:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=31)** Step four, I create a new data frame with a zone lookup table.
>
> **[0:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=39)** Step five, we join the data frames on the location IDs to get the drop of borough.
>
> **[0:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=46)** Step six, we drop and rename some columns.
>
> **[0:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=52)** And finally, step seven, we show the resulting data frame.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-essential-data-manipulation?u=76281980&t=58)** And here it is, our final output, a beautiful data frame that we've just created from multiple files, combining them through joins and unions, that's it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)


### 5. PySpark SQL

#### What is PySpark SQL?
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=0)** - [Instructor] Until now, we've mostly used the DataFrame API in PySpark to query our dataframes.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=6)** The API is great, but some of us might feel a lot more confident using SQL to write complex queries for data analysis.
>
> **[0:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=14)** Luckily, PySpark comes with a PySpark SQL module that allows you to use SQL syntax directly in your Python code.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=21)** What makes PySpark SQL especially powerful is that it works seamlessly with dataframe operations.
>
> **[0:28](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=28)** This means you don't have to choose between using SQL or Python to work with your data.
>
> **[0:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=33)** You can blend both.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=35)** For example, it might be easier to load and transform data using Python methods, and then switch to using SQL for more complex queries to analyze the data.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/what-is-pyspark-sql?u=76281980&t=44)** Under the hood, PySpark uses the same query execution engine, so they're interchangeable.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), api (2)
> **CLI Commands:** python (3)
> **Code Keywords:** module (1), switch (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating temporary views
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=0)** - [Trainer] In order to use PySpark SQL, we first need to create a temporary view from our data.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=6)** That way, our Spark session has access to the data.
>
> **[0:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=10)** Let's start fresh by loading data from our taxi file into a new data frame called "taxi".
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=21)** Next, we can register a temporary view like this.
>
> **[0:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=29)** This statement registers the data frame with the Spark SQL catalog as a temporary view that's also called "taxi".
>
> **[0:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=38)** We're choosing the same name here for consistency, but we could also create the view with a different name.
>
> **[0:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=44)** This means that our Spark session knows about the data in the view and we can use PySpark SQL to query it.
>
> **[0:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=51)** Note that this statement doesn't make a copy of the data.
>
> **[0:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=55)** It simply registers the original data frame.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/creating-temporary-views?u=76281980&t=58)** The temporary view also doesn't persist across Spark sessions, hence the temporary.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [trainer] (1)

#### Using SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=0)** - [Instructor] Now that we have a temporary view called Taxi in our Spark session, let's write some SQL to query it.
>
> **[0:06](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=6)** We'll start with a simple select statement to find all rights where the total right amount is more than 50 US dollars.
>
> **[0:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=19)** Notice a few things here.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=21)** First of all, instead of using a method on a data frame, we use the SQL method directly on the Spark session instance called Spark that we created at the very beginning of this notebook.
>
> **[0:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=34)** Second, the SQL query is just a regular string in quotes.
>
> **[0:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=39)** Third, we can simply access the taxi view by its name, no quotation marks needed here.
>
> **[0:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=47)** And four, the SQL method returns a new data frame, which is why we need to use the show method again to display the result.
>
> **[0:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=55)** Because the method returns a data frame, we can now start shading methods onto the SQL statement like this.
>
> **[1:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=71)** This code snippet uses a SQL query to find all rows in the data where the total amount is more than $50.
>
> **[1:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=80)** It then uses the filter method of the data frame API to filter the result to rows with more than two passengers.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=89)** And finally, it also uses the data frame API to select three relevant columns from the resulting data set and displays the resulting data frame using the show method.
>
> **[1:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=103)** This is a great example of how you can mix and match different syntax style using pyspark SQL.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=108)** Personally, I prefer to do the heavy lifting using SQL queries because I'm much more comfortable writing complex SQL than Python, and then I fine tune the results with Python.
>
> **[1:59](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=119)** One last thing I want to share is how to format query strings in SQL inside Python code.
>
> **[2:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=125)** Especially when using longer and more complex SQL statements, you might want to assign the query to a separate string variable before executing it.
>
> **[2:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=134)** That way, the query is much easier to read and modify.
>
> **[2:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=137)** I'm demonstrating this here using the previous example, but this time, all steps of the transformation are written in SQL.
>
> **[2:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=150)** The triple quoted string syntax in Python lets you use indentation, which makes it a lot easier to read a long query.
>
> **[2:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=159)** After all, even if we have computers executing these statements, it's still mostly humans that will be reading the code and modifying it.
>
> **[2:47](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=167)** You can now easily execute the query like this.
>
> **[3:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/using-sql-queries?u=76281980&t=181)** And there you have it, the same output as in the previous example, but the query is entirely written in SQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (13), api (2)
> **CLI Commands:** python (4), find (2)
> **Code Keywords:** this. (2), let (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: PySpark SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=0)** - [Trainer] This is the final hands-on challenge of this course, so let's combine several things that we've learned.
>
> **[0:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=11)** Assume we want to determine the average total taxi ride cost for each drop-off borough.
>
> **[0:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=16)** This means, how expensive are the rides depending on which borough of New York City they end in?
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=23)** Write code for the following steps: Step one: load the January taxi ride data into a dataframe called taxi_jan2025 and register a temporary view with the same name.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=35)** Step two: load the taxi zone lookup data into a dataframe called taxi_lookup and register a temporary view with the same name.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=45)** Step three: use PySpark SQL to left join those two tables on the DOLocation ID and the LocationID columns.
>
> **[0:54](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=54)** Make sure to only select the DOLocationID, Borough and total_amount columns.
>
> **[1:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=61)** And assign the result to a dataframe named joined_df.
>
> **[1:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=65)** Step four: using the PySpark dataframe syntax, group the result by the Borough column and calculate the average total_amount using the avg method.
>
> **[1:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=77)** Make sure to alias the average column as avg_amount and then display the resulting dataframe in the notebook.
>
> **[1:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=85)** This should take you around 15 minutes.
>
> **[1:27](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/challenge-pyspark-sql?u=76281980&t=87)** You can find my solution in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** total_amount (2), taxi_lookup (1), joined_df (1), avg_amount (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** make sure to (2)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [trainer] (1)

#### Solution: PySpark SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=0)** - [Trainer] Here's my step-by-step solution for the PySpark SQL challenge.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=9)** Step one: load the taxi write data and create a temporary view called taxi_jam2025.
>
> **[0:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=17)** Step two: load the lookup data and create a temporary view called taxi_lookup.
>
> **[0:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=24)** Step three: join the two tables using SQL and assign the result to a data frame called joined_df.
>
> **[0:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=31)** Step four: group the data frame by borough, calculate the average total fare amount, alias the average amount column and display the result.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=45)** Let's run this.
>
> **[0:51](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=51)** Check out this result.
>
> **[0:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=52)** It's actually really interesting.
>
> **[0:54](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=54)** This analysis shows that rides ending at EWR have the highest average cost.
>
> **[1:01](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/solution-pyspark-sql?u=76281980&t=61)** If you know New York City, this isn't too surprising because EWR is the abbreviation for Newark Airport, which is in New Jersey, so those trips are all pretty long and expensive.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), ewr (2)
> **Code Keywords:** let (1), this. (1)
> **Code Identifiers:** taxi_lookup (1), joined_df (1)
> **Speakers:** - [trainer] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. PySpark in a Production Environment

#### Production environment requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=0)** - [Instructor] Running a PySpark data pipeline in production typically means working with large volumes of data, often across multiple servers or cloud instances, and making sure the entire system is scalable, reliable, and secure.
>
> **[0:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=14)** Unlike a local setup, production environments needs to handle failure gracefully, run jobs on a schedule, and support team collaboration.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=23)** Here are some of the core components that you'll find in a typical PySpark production setup: Data sources: The most important part of any pipeline is the data itself.
>
> **[0:34](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=34)** You're likely pulling from various sources such as operational databases, for example from an e-commerce system, application logs, APIs, or flat files from vendors.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=45)** To move that data into your storage layer, you might use data extraction tools like Fivetran, Airbyte, Kafka, AWS Kinesis, or custom scripts.
>
> **[0:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=55)** Distributed storage: Since you're working with large data sets, a single machine storage is not enough.
>
> **[1:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=62)** Production environments use distributed storage systems like HDFS, Amazon S3, or Google Cloud Storage.
>
> **[1:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=70)** These systems can scale horizontally and offer high availability.
>
> **[1:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=75)** Cluster management: Spark runs on a cluster, which is a group of machines that work together to process data.
>
> **[1:22](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=82)** You need a cluster manager to coordinate CPU, memory, and network usage across these machines.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=89)** Common cluster managers include YARN, which is often used in Hadoop environments; and Kubernetes, which runs Spark in isolated, scalable containers.
>
> **[1:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=98)** Job scheduling: A PySpark job is simply a piece of Python code that uses the PySpark API to process data, exactly what we've been writing in this training.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=108)** In production, jobs should run automatically instead of being started manually.
>
> **[1:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=113)** You might want to trigger jobs when new data arrives or run them at set intervals.
>
> **[1:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=118)** A tool like Apache Airflow is commonly used to schedule and coordinate PySpark jobs.
>
> **[2:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=124)** Consistent environments: When working with a team, it's important to make sure code runs the same way in development, testing, and production.
>
> **[2:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=134)** This often means using Docker or virtual environments to keep dependencies like PySpark versions and Python packages consistent across the team and your production environment.
>
> **[2:24](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=144)** Monitoring and logging: You need visibility into job performance and behavior.
>
> **[2:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=150)** Tools like the Spark Web UI help you inspect what happened during a job.
>
> **[2:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=155)** Grafana dashboards and cloud-native tools like AWS CloudWatch let you track metrics and receive alerts when something fails.
>
> **[2:44](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=164)** Security and access control: Security is essential in any production setup to prevent unauthorized access and data leaks.
>
> **[2:52](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=172)** That includes setting up IAM roles, network protections, and encryption.
>
> **[2:56](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=176)** You'll also want to plan for disaster recovery.
>
> **[2:59](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=179)** Serious systems can bounce back quickly.
>
> **[3:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=182)** I know that those kinds of security checks can slow down your development process, but it's important to make sure your production system is secure.
>
> **[3:10](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/production-environment-requirements?u=76281980&t=190)** As you can see, there's many moving pieces when running PySpark in production, and all of these work together to create a highly performant and reliable system.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), python (2), make (2), find (1), yarn (1)
> **Env Vars:** aws (2), hdfs (1), cpu (1), yarn (1), api (1)
> **Prerequisites:** setup (3)
> **Analogies:** such as (1), for example (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Example production environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=0)** - [Instructor] Okay, now that we have the basic requirements out of the way, let's look at a more concrete example of what running PySpark in production might look like.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=9)** For this example, I'm going to assume we're using Amazon Web Services, AWS, as our cloud provider.
>
> **[0:16](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=16)** In this setup, we're going to run Spark on a cluster of EC2 instances, and we'll use YARN as a cluster manager.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=23)** That means you'll need to launch your own virtual machines using the EC2 service, install Spark and Hadoop, configure the nodes to talk to each other, and manage things like memory allocation and resource scheduling yourself.
>
> **[0:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=37)** For our distributed storage, we can simply use Amazon S3.
>
> **[0:41](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=41)** You might already be familiar with S3.
>
> **[0:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=43)** It's an object storage service in AWS that can store huge amounts of data reliably and cheaply.
>
> **[0:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=50)** In this setup, your PySpark job reads data files directly from S3, processes them, and then writes the results back to S3.
>
> **[0:59](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=59)** PySpark supports S3 natively, so it's really easy to integrate.
>
> **[1:03](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=63)** You just provide the S3 path in your read or write functions.
>
> **[1:07](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=67)** Next, we need to run jobs automatically.
>
> **[1:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=71)** That's where a workflow scheduler like Apache Airflow comes in.
>
> **[1:15](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=75)** Airflow is often used to run PySpark jobs on a schedule, say, once every hour or at midnight every day.
>
> **[1:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=81)** You define the pipelines to run in Python, and Airflow handles triggering them, tracking their status, retrying them if they fail, and even notifying your team if something goes wrong.
>
> **[1:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=92)** In AWS, Airflow can be self-hosted on EC2 or Kubernetes, or you can use Amazon Managed Workflows for Apache Airflow, MWAA, which is a fully managed service.
>
> **[1:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=105)** On AWS, the most common option for monitoring and logging is CloudWatch.
>
> **[1:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=110)** You can stream PySpark logs to CloudWatch so you can view them even after your job finishes.
>
> **[1:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=115)** You can also set up dashboards and alerts, for example, to notify you if a job fails or takes too long to complete.
>
> **[2:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=122)** Some teams also use Spark's built-in web UI to inspect job stages and tasks while they're running.
>
> **[2:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=129)** Of course, this is just one of many possible setups.
>
> **[2:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/example-production-environment-setup?u=76281980&t=132)** I highly recommend using your existing infrastructure or cloud services where possible to reduce the amount of friction.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), ec2 (3), yarn (1), mwaa (1)
> **CLI Commands:** aws (4), apache (2), yarn (1), python (1)
> **Prerequisites:** setup (2), you'll need (1), install (1), configure (1), set up (1)
> **Code Keywords:** let (1), self (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### A typical PySpark production workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=0)** - [Instructor] So now that we've built our platform, let's take a look at a step-by-step workflow of how our pipeline would actually run in production.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=9)** It all starts with a data engineer writing PySpark code.
>
> **[0:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=12)** That code might do all the things that we've learned in the tutorials so far, cleaning up messy data, joining datasets, or calculating metrics.
>
> **[0:21](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=21)** That code is usually stored in a GitHub repository so the whole team can collaborate on it, track changes, and review code changes.
>
> **[0:30](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=30)** Before any code goes live, it should go through CI/CD, continuous integration and continuous deployment.
>
> **[0:37](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=37)** That means when someone pushes code to the GitHub repo, tests are automatically run and the code is deployed on passing.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=45)** If all the tests pass, the pipeline can automatically deploy the new code from the main branch to a staging or a production environment.
>
> **[0:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=55)** Once the code is live, it's picked up by a workflow orchestrator like Apache Airflow.
>
> **[1:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=60)** Airflow usually runs either on a schedule or is triggered by specific events, like a new file arriving in S3.
>
> **[1:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=69)** It might then kick off a multi-step pipeline that includes step one, extracting raw data from a source, like an API, a database, or a log stream.
>
> **[1:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=80)** Step two, running the actual PySpark job to clean, transform, and aggregate that data.
>
> **[1:26](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=86)** Step three, writing the final process data to a destination.
>
> **[1:31](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=91)** The final data is then typically written to a place where other tools can pick it up.
>
> **[1:36](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=96)** This could be a folder in S3, a table in a data warehouse, like Snowflake or Google BigQuery, or even pushed directly to a database that's used by a dashboarding tool like Tableau or Looker.
>
> **[1:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/a-typical-pyspark-production-workflow?u=76281980&t=108)** And this is just one example of an end-to-end workflow for a production pipeline, starting with an engineer writing code and ending with a user seeing analytics in a dashboard.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (1), apache (1)
> **Code Keywords:** let (1), pass (1)
> **Tools:** github (2)
> **Env Vars:** api (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### Cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=0)** - [Instructor] So far, we've talked about how to build infrastructure to run PySpark jobs almost from scratch.
>
> **[0:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=5)** But what if you don't want to deal with all the set up, configuration, and infrastructure yourself?
>
> **[0:12](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=12)** That's where Cloud Services come in.
>
> **[0:14](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=14)** There are a handful of platforms that let you run PySpark jobs without having to manage your own Spark cluster.
>
> **[0:20](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=20)** Some of them are super flexible and give you full control, others are more all-in-one opinionated platforms that take care of most of the heavy lifting, so you can focus on writing code and getting results.
>
> **[0:33](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=33)** Databricks is one of the most popular platforms for running PySpark.
>
> **[0:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=38)** It was created by the original creators of Apache Spark, and it's designed to make big data and machine learning workflows much easier to manage.
>
> **[0:48](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=48)** Databricks provides a collaborative notebook environment, auto-scaling Spark clusters, built-in data connectors, and excellent performance tuning out of the box.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=58)** It's especially useful for teams working together on data science or analytics projects, and it works across AWS, Azure and Google Cloud platform.
>
> **[1:08](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=68)** Amazon Elastic MapReduce, EMR, is AWS's managed big data service that supports Spark, Hadoop, Hive, and more.
>
> **[1:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=77)** With EMR, you can spin up Spark clusters on demand and scale them up or down based on workload.
>
> **[1:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=83)** You have full control over the Spark environment, including configuration and custom dependencies.
>
> **[1:29](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=89)** It's a great choice if you already use other AWS services and want more flexibility than an all-in-one platform like Databricks.
>
> **[1:38](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=98)** AWS Glue is a serverless data integration service that runs PySpark under the hood.
>
> **[1:43](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=103)** But you don't have to manage any infrastructure.
>
> **[1:46](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=106)** You just write your PySpark code in the script, or use the visual job builder, and Glue handles provisioning, scaling, and monitoring.
>
> **[1:55](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=115)** It's especially handy for simple to moderately complex data integration workflows, and works well with AWS tools like S3 and Redshift.
>
> **[2:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=124)** Dataproc is Google Cloud platform's managed Spark and Hadoop service.
>
> **[2:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=129)** It's similar to EMR in that it provides on-demand Spark clusters that integrate tightly with other GCP tools like BigQuery and Google Cloud Storage.
>
> **[2:19](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=139)** DataProc is often chosen for its fast cluster startup times, pricing, and ease of automation.
>
> **[2:25](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=145)** You can submit PySpark jobs via the console, gcloud CLI, or API.
>
> **[2:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=152)** Azure Synapse is Microsoft's cloud data platform that supports both serverless and provisioned Spark pools.
>
> **[2:39](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=159)** It integrates with Azure Data Lake, SQL data warehouse, and Power BI, which makes it a good fit for teams that are already in the Microsoft Azure ecosystem.
>
> **[2:50](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=170)** Synapse lets you run PySpark code alongside SQL and other data processing engines, all from a unified interface.
>
> **[2:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=178)** As you can see, there are lots of different hosted options based on how much control you want over your environment.
>
> **[3:05](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=185)** I always recommend sticking with tools that run on the cloud platform that you're already familiar with.
>
> **[3:11](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/cloud-services?u=76281980&t=191)** So whether your team is on AWS, Google Cloud platform, or Azure, it's usually easiest to stick with that.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), emr (3), sql (2), gcp (1), cli (1)
> **CLI Commands:** aws (6), apache (1), make (1), gcloud (1)
> **Code Keywords:** let (1), super (1), interface (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Recap of key concepts and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=0)** - Congratulations on completing this course.
>
> **[0:02](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=2)** Here's a quick recap.
>
> **[0:04](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=4)** You learned how Apache Spark works under the hood and how PySpark lets you harness that power using Python.
>
> **[0:09](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=9)** We explored the data frame API, tackled common operations like filtering, joining, and aggregating, and talk through handling missing data.
>
> **[0:17](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=17)** You saw how PySpark SQL fits into the picture, and how to make SQL and Python when it makes sense.
>
> **[0:23](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=23)** And finally, we looked at what running PySpark in production actually looks like beyond the notebook and discussed some cloud-based options for running PySpark pipelines.
>
> **[0:32](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=32)** Now you've got a solid foundation of PySpark.
>
> **[0:35](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=35)** If you want to take your learning even further, here's some concepts you could explore.
>
> **[0:40](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=40)** You might want to look into structured streaming if you're working with real-time data.
>
> **[0:45](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=45)** Another interesting concept is Delta Lake, an open source project which helps with versioning and data consistency in production environments.
>
> **[0:53](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=53)** And if you're interested in machine learning, Sparks ML lip might be your next stop.
>
> **[0:58](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=58)** That's a wrap.
>
> **[1:00](https://www.linkedin.com/learning/pyspark-essential-training-introduction-to-building-data-pipelines/recap-of-key-concepts-and-next-steps?u=76281980&t=60)** Thanks again for learning with me and I hope you're walking away feeling ready to tackle big data workflows with PySpark.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), apache (1), make (1)
> **Env Vars:** sql (2), api (1)
> **Code Keywords:** finally, (1)
> **Analogies:** picture (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Collection]]
← [[Data Cleaning and Manipulating with Python in Excel]] | **4 of 6** | [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] →

### In [[Explore a Career in Data Engineering]]
← [[Learning SnowflakeDB]] | **5 of 7** | [[Apache Kafka Essential Training- Getting Started]] →

### In [[Advance Your Data Skills in Apache Spark]]
← [[Big Data Analytics with Hadoop and Apache Spark]] | **6 of 6**

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Collection]]
- [[Explore a Career in Data Engineering]]
- [[Advance Your Data Skills in Apache Spark]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering
