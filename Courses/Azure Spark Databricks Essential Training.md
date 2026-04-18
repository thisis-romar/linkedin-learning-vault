---
type: course
slug: azure-spark-databricks-essential-training
url: "https://www.linkedin.com/learning/azure-spark-databricks-essential-training"
duration_minutes: 177
duration: 2h 57m
level: Intermediate
updated: 2/6/2025
learners: 21852
skills:
  - Azure Databricks
exercise_files: true
tags:
  - course
  - topic/data-science
  - skill/azure-databricks
status: not-started
created: 2026-04-17
---

# Azure Spark Databricks Essential Training

> Apache Spark and Microsoft Azure are two of the most in-demand platforms and technology sets in use by today's data science teams. These two platforms join forces in Azure Databricks‚ an Apache Spark-based analytics platform designed to make the work of data analytics easier and more collaborative. In this course, Lynn Langit digs into patterns, tools, and best practices that can help developers a

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training) | 2h 57m | Intermediate | 22K learners

## Instructor

- [[Lynn Langit]]

## Resources

- Exercise files available

## Skills Covered

- Azure Databricks

## Table of Contents

### Introduction

#### Optimize data pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=0)** - [Lynn] Have you been working with data that's growing in volume and complexity and wondering how you're going to compute against this data?
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=8)** We'll be taking a look at managed Apache Spark clusters on Databricks Azure.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=14)** We'll look at cluster set-up, different types of notebooks and a number of data workflows.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=19)** These notebooks will include data processing with common scenarios such as Spark SQL, visualization and machine-learning scenarios with Spark ML, third-party libraries such as TensorFlow and Scikit-learn.
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=34)** We'll also look at a data pipelining and architectural patterns.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=38)** I'm Lynn Langit.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-data-pipelines?u=76281980&t=40)** We have lots to cover, so let's get started.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [lynn] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there are some concepts that you should have some familiarity with.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=6)** These include Core Azure concepts, such as an understand of Azure Storage, such as Blob Storage, Azure Compute, such as working with Virtual Machines, and Azure Security.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=19)** In addition, it will be helpful if you have an understand of Core Database concepts, in particular, working with the SQL Query Language, and some familiarity with Database Storage.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=31)** Additionally, we will be working with programming and scripting languages, particularly Python, as well as some other languages, such as R and Scala.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=40)** We're not going deep into the languages, however, if you have some familiarity, you'll get more out of this course.
>
> **[0:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/what-you-should-know?u=76281980&t=46)** If you want a refresher on some of these concepts, we have some other course in our library that cover Core Spark Concepts, Azure Storage Deep Dive's, and Azure SQL Querying.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Env Vars:** sql (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### About using cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/about-using-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/about-using-cloud-services?u=76281980&t=0)** - [Instructor] In this course we're going to be working with cloud services.
>
> **[0:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/about-using-cloud-services?u=76281980&t=4)** Although you can start with an Azure trial account and that's always a good way to get started.
>
> **[0:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/about-using-cloud-services?u=76281980&t=10)** Some of the features that we're going to be looking at do require a premium Azure Databricks account and I'll call those out as we go through this course.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/about-using-cloud-services?u=76281980&t=19)** Also when you're done studying be sure to turn off and delete unused services so that you're not getting unexpected charges on your Azure bill.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), delete (1)
> **Speakers:** - [instructor] (1)


### 1. Big Data on Azure Databricks

#### Meet Databricks Apache Spark clusters
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=0)** - [Instructor] To get us started working with Azure Databricks let's consider this quote from one of the Databricks company founders, Matei Zaharia.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=8)** He said, I think that by 2020 most data will be in either public clouds or cloud-like private environments.
>
> **[0:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=16)** And the key words here are not only cloud but also most data.
>
> **[0:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=21)** The volume of data that we need to work with is growing exponentially because of new methods of collection.
>
> **[0:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=27)** Whether it's informational data from our phones or genetic data from our bodily fluids we are having more and more data that is interesting and we need to process.
>
> **[0:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=39)** So Matei vision started actually when he was a student back at UC Berkeley in California, and he envisioned distributed computing that could help us to process these volumes of data, and that's called Apache Spark.
>
> **[0:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=53)** So when we're thinking about this new world of data we go beyond the typical relational databases and we think in terms of streaming systems, data lakes and data warehouses.
>
> **[1:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=63)** And as we'll see in this course Azure Databricks allows us to account for these new types of data needs all across the spectrum.
>
> **[1:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=72)** Databricks itself is built on top of the open source Apache Spark Core, and it includes in this implementation integration with Microsoft Azure, auto scaling, multi-language notebooks, built-in machine learning frameworks and integrated security.
>
> **[1:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=92)** Now as we start to work with this system of course this is built on the open source Apache Spark distributed compute framework.
>
> **[1:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=99)** So this framework not only allows for distributed compute it's designed to process its computation in-memory of the various nodes.
>
> **[1:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=109)** And it's designed to work with a distributed file system.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=113)** Spark itself is an ever growing ecosystem.
>
> **[1:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=116)** As of this recording the Spark Core API includes integration with the following programming languages, R, SQL, Python, Scala, and Java.
>
> **[2:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/meet-databricks-apache-spark-clusters?u=76281980&t=128)** Sitting on top of that are higher level frameworks where we can work with Spark SQL and DataFrames, Streaming, Mllib for Machine Learning and GraphX for Graph Computation.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), python (1)
> **Code Keywords:** let (1), public (1), private (1)
> **Env Vars:** sql (2), api (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Business scenarios for Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=0)** - [Instructor] So as a working cloud architect, what types of business scenarios have I found that are a best fit for Apache Spark technologies?
>
> **[0:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=9)** In a nutshell, those are around distributed compute, and really what's driving it is the volume of data.
>
> **[0:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=16)** For example, I've been doing quite a lot of work recently in genomic sequencing and analysis of genomic information.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=24)** The kinds of tasks that I've used Spark for in these types of workflows included data cleansing, or Extract, Transform, and Load; fast data serving pipelines; scalable complex processing; and distributed machine learning.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=40)** You can think of Azure Databricks as a set of three components.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=45)** You have the Databricks tools, services, and optimizations that surround the core open source Apache Spark distribution, and Apache Spark itself provides the distributed computation needed for these intensive workloads, and this sits on top of some sort of file system.
>
> **[1:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=64)** Now natively in Databricks, you have the DBFS, or the Databricks file system, which is somewhat similar to HDFS, which is somewhat similar to HDFS, Hadoop File System, upon which Apache Spark was originally built; however, it's been many years since Hadoop was open source, and so there's a great number of enhancements.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/business-scenarios-for-spark?u=76281980&t=87)** Interestingly, as an alternative to working with DBFS file systems, when integrated with Azure, there are some new ways that you can work with distributed file systems, given some of the Azure services, such as Azure storage blobs, and many more, as we'll see in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4)
> **Env Vars:** dbfs (2), hdfs (2)
> **Analogies:** similar to (2), for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Understand Spark key components
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=0)** - Now as mentioned in the introduction to this course, if you're unfamiliar or new to working with Apache Spark, you may want to review some other courses in the library to get some foundational learning.
>
> **[0:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=12)** If you have done some work with opensource Spark, you will quickly see how the integration really enhances the capability of Spark's key components, which are shown here.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=23)** And just to review them, you'll see that the core of Spark is a user program and you can see on the left side you instantiate a Spark Context and then you set up a RDD or a structure which will hold the distributed data.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=40)** That's a resilient data set.
>
> **[0:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=42)** And the RDDs then can work to have operations performed on them in a distributed manner.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=48)** And some of the examples shown here are a Cassandra table, which is a type of key value database, mapping, filtering, keying by, reducing by key, caching, so on and so forth.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=59)** And you can see, once the data is loaded into the memory of the worker nodes, as RDDs or some higher level structure, such as data tables or other types of data contexts which can sit on top of RDDs, then you'll see that there is a DAG, or a Directed Acyclic Graph, which is used in scheduling the operations in a distributed fashion.
>
> **[1:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=82)** And so much of the optimization is handled not only by Spark, but when you're working with the Databricks distribution, you're working with a more highly optimized version of the opensource Spark.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=94)** It is interesting.
>
> **[1:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=95)** Most of the Apache Spark committers, or many of them, are employees of Databricks but not all of them.
>
> **[1:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=101)** So the Spark Core is slightly different in terms of performance from the Databricks product, which builds on the Spark Core.
>
> **[1:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=110)** And I know, in my case, I have actually run performance testing on various vendor clouds and in this course, we're focusing on Azure, of course, with Spark Core in contrast to Databricks and I do see performance enhancements with Databricks.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=123)** It's interesting.
>
> **[2:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=124)** So you can see that the RDDs and the DAGScheduler live in the Spark Context, which lives in the Spark application.
>
> **[2:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=132)** That interacts with the cluster manager, which then sends the scheduled jobs out to the worker nodes, which use executors and have cached data, again, Spark is designed to work in memory, to execute the various data processing tasks.
>
> **[2:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-key-components?u=76281980&t=149)** So it is a rather complex environment and, as we work through some of the examples in this course, it will be beneficial if you get a little bit of background with key Spark operations.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** apache (2)
> **Env Vars:** rdd (1), dag (1)
> **Code Keywords:** case, (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### Azure Databricks concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=0)** - [Instructor] So the Databricks offering around Apache Spark has three component areas, as I mentioned previously.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=6)** So let's dive a little bit deeper into them.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=8)** So, at the top level, you have the Databricks collaborative workspace and that's expressed as Databricks Interactive where you can work with your cluster through a Jupyter-style notebook.
>
> **[0:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=21)** So this is a browser-based integration that we'll be working with very frequently in this course.
>
> **[0:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=26)** I like to think of it as a smart IVE because it has information about not only the execution, but also visualizations and documentation.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=36)** There's also a Databricks production layer at this level and there are APIs, which you can work with.
>
> **[0:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=44)** The Databricks runtime includes Apache Spark core, also Databricks I/O, and now Databricks Serverless, which we'll be exploring in addition to running Databricks on more traditional cloud-based VMs.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=59)** And surrounding that is Databricks Enterprise Security, which is more and more an absolute requirement for many of my customers.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=66)** Now in this course, we're going to look at Databricks running on Azure.
>
> **[1:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=70)** Databricks is optimized for AWS, or Azure at the time of this recording.
>
> **[1:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=76)** So, the Azure implementation provides you with managed, scalable Apache Spark servers, integrated tooling and examples, and as I mentioned, is optimized to run in the Azure cloud.
>
> **[1:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=88)** So understanding a bit more about what this type of solution provides for you, Databricks Azure integration gives you fully managed Spark clusters hosted on Azure, Databricks workspaces for collaboration, with the Databricks notebooks, enterprise security including very important Active Directory integration if needed.
>
> **[1:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=112)** And also, very key in this implementation is integration with Azure services such as SQL Data Warehouse, Cosmos DB, Azure Blob Storage, Power BI, and others.
>
> **[2:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=124)** And if we look at this architectural diagram, it gives us kind of an all up view of what the Azure Databricks offering looks like.
>
> **[2:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=131)** So you can see, kind of like the core Databricks offering, it has a layer around integration for working with people, and applications.
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=141)** And then it's surrounding Spark core.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=144)** So you can see in the center we have the Databricks workspace, Databricks workflows, the runtime, Databricks I/O, Databricks Serverless, and Databricks Enterprise Security.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=155)** Surrounding the core, we have our target users, our data scientists, engineers, line of business, and others.
>
> **[2:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=161)** Our target applications in the Azure ecosystem.
>
> **[2:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=164)** Those are applications such as Deep Learning/ML, streaming, data warehousing, Power BI, and others.
>
> **[2:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=170)** And notice at the bottom layer, we have several different file storage options.
>
> **[2:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=174)** And this is what I mentioned earlier.
>
> **[2:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=176)** It's really interesting, this era of cloud.
>
> **[2:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=178)** Now we can go beyond just a single storage choice.
>
> **[3:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=182)** And this really can impact performance, cost, scalability.
>
> **[3:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=187)** You can see this is designed to work with Azure Blob Store, Azure Data Lake Store, Azure SQL Data Warehouse, Apache Kafka, and Hadoop.
>
> **[3:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=196)** So given the fact that Apache Spark is open-source, why would it be a good choice for a customer to select managed Apache Spark and cloud-based, so Azure Databricks in this case.
>
> **[3:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=209)** Well I see it, from my architect standpoint, as faster time to value.
>
> **[3:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=214)** It's a much quicker setup for prototyping experiments, as you'll see when we do some examples in this course.
>
> **[3:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=220)** The included Jupyter-style notebooks really provide a lot of value in terms of not only getting your data scientists up and going, but actually translating their work into usable dataflows that can be deployed by your DevOps people.
>
> **[3:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=236)** Intuitive and integrated console, very easy to use, and the Apache Spark core committers work for Databricks, as I mentioned earlier, which results in a very performant implementation.
>
> **[4:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=246)** It also has granular and integrated security, which is required for so many of my customers.
>
> **[4:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=252)** And to summarize, so that we can understand differences between the offerings of Databricks Azure versus Apache Spark.
>
> **[4:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=260)** In the world of compute, if you use Azure Databricks you get managed, distributed compute.
>
> **[4:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=265)** In Spark, you get distributed compute, but you will be doing the management.
>
> **[4:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=268)** You will be managing your VMs, you'll be setting up the operating systems, you be patching them, it's quite a lot more work.
>
> **[4:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=274)** In terms of the environment, if you use Azure Databricks, you'll use Azure managed virtual machines or containers.
>
> **[4:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=280)** So they'll be patched, they'll be optimized.
>
> **[4:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=282)** If you set up Apache Spark on your own then you have to size and select your virtual machine sizes, your docker containers, and the container management, and so on and so forth.
>
> **[4:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=293)** The notebook interface provided by Databricks is a sophisticated Jupyter-style notebook, it's not the same thing as Jupyter, they actually have done many enhancements, and again I'll point those out in this course.
>
> **[5:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=305)** For regular Apache Spark implementations you would have to set this up yourself again.
>
> **[5:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=309)** The command-line interface Databricks includes CLI, or command-line interface.
>
> **[5:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-concepts?u=76281980&t=314)** Of course Spark has its own Spark-submit CLI, but Databricks CLI allows you to automate some of the enterprise applications such as management of security.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (10), aws (1), docker (1)
> **Env Vars:** cli (3), sql (2), ive (1), aws (1)
> **Code Keywords:** interface (3), let (1), case. (1)
> **Analogies:** such as (3), think of it as (1), kind of like (1)
> **Tools:** jupyter (4)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1), set up (1)
> **Speakers:** - [instructor] (1)

#### Quick start: Use a notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=0)** - [Instructor] At this point in the course, I want to show you Databricks in action.
>
> **[0:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=3)** Now I've done a number of steps to get us set up, which I'll cover in subsequent parts of this course, but I think it's really interesting to see sort of what the end result is.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=14)** Here I am in the Microsoft Azure portal for Databricks, and I've already created a cluster of Apache Spark on Databricks.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=23)** So I've set that up already by just clicking the blue "Create Cluster" button and you can see here is the version, which is 4.3 Includes Spark 2.3.1, and Scala 2.11 Python Version 2.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=36)** And you can see that I have a driver of a standard DS3_v2 with 14 gigs of memory, four cores, and I have a number of workers that can go from two to eight.
>
> **[0:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=50)** And what I've done here to interact with this cluster, it takes about five minutes for this to spin up one of the sides, is I've uploaded a notebook that I created for demonstrations, so let me go to that.
>
> **[1:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=63)** So the first thing that I did once I uploaded this notebook, and I uploaded that by just going here and saying import and then importing the file, is I attached it to the cluster and the cluster was available with the green dot, and I just clicked attach.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=80)** So inside of here, we have a Databricks notebook, and you can think of this as a smart IDE or an alternative to using terminal commands.
>
> **[1:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=90)** This has a number of different sections, so the first sections here are just marked down.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=94)** If I click in here, you can see this is just standard markdowns for documentations, it's a Databricks Quick Start in the cell, and then in here, this is instructions on how to set up a cluster, which I've already done.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=105)** And again, you can see this is marked down, that just renders, and you can see there's a little plus here if I wanted to add a new cell.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=113)** What I'm going to do is, I'm going to interact with my cluster, and the first thing I'm going to do, this is a SQL runtime notebook, you can see SQL up at the top here.
>
> **[2:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=122)** I'm going to scroll down, and I'm going to use Spark SQL to create a table from a Databricks dataset.
>
> **[2:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=129)** So I'm going to click inside of here, and I'm going to run this cell.
>
> **[2:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=132)** Now if I wanted to run all the cells that were runnable in the notebook, I would just click this "Run All", but I just want to run this one, and this is Spark SQL, so you can see the command is being sent to the cluster and it's saying that we should create a table from a CSV file that has a header.
>
> **[2:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=149)** You can see in the bottom here, that we have information took two seconds, who was the user, what time, worked okay, and then here we have a view into the Spark logs.
>
> **[2:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=159)** So again, this is managed Spark, so as we drill into this, we'll be working with these Spark logs which you can then see how long the various activities took because you're oftentimes when you're working with this optimizing distributed data workloads.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=175)** That worked okay, now we're going to manipulate the data and display the results, and this is just good old SQL.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=181)** Select color, average price, as price from diamonds, group by color, and order by color.
>
> **[3:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=186)** We're going to click that, and that's going to give us not only a result, but a visualization, which again is a great part of working with these notebooks that you have the documentation, you have the code runtime, and you have not only the dataview like this, but you have the visualization view and the visualizations are built in and native as part of the offering.
>
> **[3:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=211)** If you click here, you can see there are various types of visualizations and you can see you have plot options, this is without using any external libraries, it's just really useful when you are working with various types of data.
>
> **[3:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=224)** If I were to scroll down here, you can see that you can also use other runtimes that are available, and you'll remember from the beginning of this, that I showed you the Python runtime was available.
>
> **[3:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=236)** This notebook is set as a default for SQL, so the way that you would invoke another supported runtime, is you would use the percent sign.
>
> **[4:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=244)** Here we're doing the same thing, which is basically creating a DataFrame from a Databricks dataset.
>
> **[4:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=250)** And you can see we're using diamonds and we're saying spark.read.csv, we have headers, and here we're inferring the schema.
>
> **[4:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=257)** Now before I run this command, I'll scroll back up here, and you can see that when we set this one, we didn't say anything about the schema, and we created a table.
>
> **[4:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=266)** As with some other optimizations, there is a table browser here, so if I click data, you can see here is the diamonds table and I have the schema and I have sample data.
>
> **[4:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=276)** So that's again, another useful visualization.
>
> **[4:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=279)** So now if I go back to my notebook, and I go down to the Python representation, this is not loading it into a table, rather a DataFrame.
>
> **[4:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=287)** And a DataFrame, you might remember, are always an abstraction on top of an RDD, which is the core unit of working with data in Spark.
>
> **[4:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=296)** This is going to load it in memory.
>
> **[4:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=298)** I'm going to go ahead and do that, and you'll see in the output here, we have some Spark Jobs loading this into our workers, and you can see we have a nice visualization again.
>
> **[5:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=308)** This is a common theme.
>
> **[5:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=310)** Databricks has really put a lot of work into the visualizations of their notebooks, and although they're similar to open-source Jupyter notebooks, I really benefit from some of these increased visualizations such as displaying the inferred schema.
>
> **[5:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=324)** It's the thing you want to see, basically.
>
> **[5:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=326)** Again, we have integration with the Spark Jobs, so you can see here that we had a task take 0.3 seconds, and we have the event timeline, which shows the various activities on our executors, and we have the DAG, or the Directed Acyclic Graph visualization.
>
> **[5:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=344)** Now this is not the most exciting thing in the world, but as we work with more complex data operations, this will become super useful.
>
> **[5:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=353)** Now just to complete looking at this, in addition to loading this, we can also display the results.
>
> **[5:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=358)** Here we're using Python again, so similar to what we did with SQL.
>
> **[6:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=362)** We're just calling a display on PySpark functions, and we're selecting the color and price, grouping by the color, and aggregating the average price.
>
> **[6:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=372)** You can see that we run that there, and running Spark Jobs, and again we get the numerical output, which we can quickly change to a graphical output as well.
>
> **[6:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=381)** So there's lots more for us to look at, but this gives you kind of an introduction.
>
> **[6:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=386)** Couple other things I want to show you inside of here, you can schedule the execution of these notebooks.
>
> **[6:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=392)** You also can have comments associated and this is great for collaborative work, and over here if you make revisions, and let me just make some kind of revision in here, it'll show up and then some more.
>
> **[6:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=408)** Then we can click here and you can see here is the revision history, so you basically have an undo, and these notebooks can be checked into GitHub, or whatever source control you're using.
>
> **[6:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/quick-start-use-a-notebook?u=76281980&t=417)** This is a really useful and performant interface to working with your Databricks Spark clusters.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ide (1), csv (1), rdd (1), dag (1)
> **Code Keywords:** this, (5), let (2), super (1), interface (1)
> **CLI Commands:** python (4), make (2), apache (1)
> **Versions:** 4.3 (1), 2.3.1 (1), 2.11 (1), version 2 (1), 0.3 (1)
> **Definitions:** is a  (5)
> **Tools:** azure portal (1), terminal (1), jupyter (1), github (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Analogies:** such as (1), similar to (1)

#### Set up Databricks AI Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=1)** - [Presenter] A cool new feature of Databricks gen AI platform is the AI Playground.
>
> **[0:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=7)** Before we dive in, in how to work with it, I want to guide you in how to set it up in your test environment.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=14)** So from the Databricks documentation, if I scroll down, you can see that for the requirements for this feature, your workspace has to be in a region on a cloud provider that supports one or more of the following features, Foundation Model API, pay-per-token, foundation model APIs provision throughput, and external models.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=35)** I'm going to navigate over to the Mosaic AI gateway page for Databricks and it's a little bit unintuitive, so I'm going to kind of give you a high level through this because the features don't match one-to-one on the list of generative AI features from the previous page, but you can see that if you look at the Mosaic AI gateway, that first of all, you can't use a standard edition on the plan, you have to use a premium or enterprise.
>
> **[1:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=62)** And notice now I have AWS selected, if I select Azure, then you have to use premium.
>
> **[1:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=68)** Notice Google Cloud is grayed out, so from a high level, if you're going to test this feature, you need to either deploy on Azure or AWS, first of all, secondly, you need to just generally use the premium, I'm not going to use the enterprise for testing, you can't use the standard, and then you have to be cognizant of the region, I'm recording in US, and it is available in US regions.
>
> **[1:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=90)** So you do have to check and make sure that your test deployment includes these features, otherwise, what will happen when you try to use this feature, the AI Playground, it will not be available in your workspace.
>
> **[1:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/setup-databricks-machine-learning-playground?u=76281980&t=104)** So it does require attention to detail in the setup, so do follow this guidance and set your test environment so that you can actually use the AI Playground for testing.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), make (1)
> **Env Vars:** aws (2), api (1)
> **Code Keywords:** require (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [presenter] (1)

#### Use Databricks AI Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=0)** - [Instructor] In the Databricks environment, I have opened the Machine Learning Playground.
>
> **[0:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=4)** Here, you can test various foundational generative AI models using prompts and other tools.
>
> **[0:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=10)** Now to start, if I select the default model, which is, at this recording, Meta Llama 3.3 70B Instruct, and I click the dropdown.
>
> **[0:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=20)** You can see that I have by default two versions of Meta Llama, one version of databases, one foundational generative AI model, DBRX, and also Mixtral.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=31)** Now, you can extend this as well with other types of endpoints.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=35)** You can notice that you have an external capability here, but for demonstration, we're just going to compare Meta Llama to DBRX.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=43)** So what this allows you to do is play with prompts and take a look at what prompt and tools will return.
>
> **[0:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=53)** So I'm going to go ahead and add a second endpoint so we can really see the comparative features of the playground, which is something that I just really love.
>
> **[1:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=60)** It adds a lot of value when I'm trying to figure out which foundational model to use.
>
> **[1:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=64)** So I'm going to select DBRX for my second one, and notice that I have some different configuration options.
>
> **[1:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=71)** I have, of course, my parameters.
>
> **[1:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=73)** I can set my Temperature, Top P, so on and so forth here.
>
> **[1:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=77)** And if I open the parameters for DBRX, I have similar types of parameters, but, of course, they'll apply to that foundational model.
>
> **[1:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=84)** Notice in the Meta Lama, I have Tools.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=87)** So I have the ability to add external tools.
>
> **[1:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=90)** These would be like functions or formatting tools, and I can export the results, which I cannot do from DBRX because this is a proprietary model versus Llama being an open model.
>
> **[1:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=101)** In addition here, you can see that on Meta Llama, I can prototype an agent, and then I can start with an example.
>
> **[1:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=108)** Another new feature that is, I think, super useful is this AI Judge.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=113)** What this will do, as you'll see in a second, is it'll judge the quality of the results.
>
> **[2:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=120)** So notice I have the Sync turned on.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=123)** If I just paste a prompt that I rewrote in here, "Summarize the five key features of the Databricks Machine Learning Playground for a data scientist in a table," and then I execute that, it's going to execute across both models.
>
> **[2:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=136)** I just think this is a delightful interface for getting started working with models in the Databricks ecosystem.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=144)** So if I scroll up, I can obviously easily see the results and just check visually when I'm just getting started.
>
> **[2:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=153)** Now, notice I do have the Export button with DBRX after I run a query.
>
> **[2:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=158)** I didn't have that before.
>
> **[2:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=159)** And then if I scroll down, it gives me information about the tokens, because, of course, in some cases on the Databricks side, this is proprietary, so after you run through your free tokens, there will be a charge for it, whereas in the open source, you're discounting tokens from a performance standpoint.
>
> **[2:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=177)** Here's the new AI Judge, and then here's AI on AI suggested common questions.
>
> **[3:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=184)** And as with many other testing environments, you can also add system instructions.
>
> **[3:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=189)** So there are many, many GenAI capabilities in the Databricks ecosystem.
>
> **[3:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-machine-learning-playground?u=76281980&t=194)** This is just a great starting point and can really get you up and running with selecting the best fit foundational model when working with Databricks and GenAI.

> [!info]- Semantic Content
>
> **Env Vars:** dbrx (6)
> **UI Navigation:** select the (1), dropdown (1), open the (1), scroll up (1), scroll down (1)
> **Code Keywords:** return. (1), super (1), interface (1)
> **Definitions:** is a  (2)
> **Prerequisites:** getting started (2)
> **Versions:** 3.3 (1)
> **Speakers:** - [instructor] (1)


### 2. Core Azure Databricks Workloads

#### Review Databricks Azure cluster setup
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=0)** - [Instructor] In this section, we're going to work with an active cluster and you're reminded that there are three parts to this process.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=8)** We have Databricks, which manages the Spark's distributed compute and then we have Azure, which hosts and controls the compute and the storage.
>
> **[0:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=18)** The account setup has a number of steps and I've done most of these in advance so we'll review the setup, getting to the point where we set up an actual cluster.
>
> **[0:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=27)** The steps that I've done is I've taken a business email and I've set up an Azure account as then, as an Azure user.
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=34)** I have set up an premium Databricks account.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=38)** It's important to note that to use a demo account to explore your own Azure Databricks cluster, before creating your cluster, you're going to need to go to your Azure profile and change your subscription to pay-as-you-go.
>
> **[0:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=51)** If we think a little bit more about the Databricks Azure architecture, we'll see the control planes represented in this diagram.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=58)** You can see that that Azure uses the Resource Manager to host storage, compute, and network resources.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=66)** There is a Microsoft Databricks layer that interacts with the Databricks Workspace.
>
> **[1:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=73)** Of course, underlying, there are optimized virtual machines and Blob storage for your data files.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=80)** Now we'll be working a little bit in the Azure portal but for most of this course, we'll be working in a Databricks control plane and we saw that earlier in the course in the user interface with the Databricks notebook.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=94)** So when we're setting up our host for our Databricks clusters, in Azure, there are a number of key properties that we need to set up properly.
>
> **[1:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=102)** The first one is the Workspace name.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=105)** The next is the subscription, that's your Azure subscription.
>
> **[1:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=109)** Then you're going to select your Azure resource group.
>
> **[1:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=112)** You'll select your location and you want to verify that the service is available in the necessary region and, importantly, you'll select the pricing tier.
>
> **[2:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=122)** You can choose between Standard or Premium.
>
> **[2:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=125)** There is an opportunity for a 14-day trial for Premium and some of the features that I'll be showing are available only in the Premium pricing tier.
>
> **[2:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=134)** Once you complete the Azure setup steps, you'll move to the Databricks interface.
>
> **[2:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=139)** Here, you'll see a user interface where you can easily set up clusters, jobs, data, workspaces, and so on and so forth.
>
> **[2:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=149)** Here's where we'll be interacting for most of this course.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=152)** Here we are inside of my Azure portal.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=155)** What I've done is I've completed the necessary setup steps by clicking Create a resource and searching for Databricks and then creating a new Databricks instance.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=167)** You can see that that has succeeded and it took about 15 minutes for me.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=171)** Once it's complete, you'll see this blue button to launch a Workspace.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=175)** After you click that, you'll have access to the Databricks interface and here's where we'll be doing most of our work.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=181)** Your interface might look a little bit different than mine 'cause I've done some practice work already.
>
> **[3:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=186)** I worked with some interactive and job clusters.
>
> **[3:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=189)** To create a new cluster, you click the blue button and we'll just type in demo two and we'll select all of the defaults.
>
> **[3:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=198)** We'll click Create Cluster then we'll click refresh and we can see that the cluster is being allocated and this is indicated by the green circles right here.
>
> **[3:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/review-databricks-azure-cluster-setup?u=76281980&t=209)** Once this turns into a solid green dot, then the cluster instances are available and ready for us to send data in for processing.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (5), setup (4)
> **Code Keywords:** interface (5)
> **Tools:** azure portal (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Use a Python notebook with dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=0)** - [Instructor] After you've created your cluster, you'll use the Databricks console, primarily the GUI interface and notebooks to interact with it.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=8)** If you have the premium edition, you can also use the Databricks CLI.
>
> **[0:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=12)** You're going to want to use the Databricks as your console to interact with the Databricks Spark clusters, rather than the core Azure console.
>
> **[0:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=20)** That's really just used primarily in the set up stage.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=23)** Of course the whole point of using Databricks Azure, is to process data.
>
> **[0:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=28)** So you might be wondering, what data sources are supported?
>
> **[0:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=32)** One of the reasons for using Azure Databricks, is the high number of integratable data sources, and you can see them listed here.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=41)** Now this is constantly being enhanced and added to, so this is what's available at the time of this recording.
>
> **[0:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=47)** Notably, you have things like Azure Blob Storage, you have Azure Data Lakes, Cosmos DB, Azure SQL Data Warehouse, and many other opensource databases, such as MongoDB, and Neo4j, a lot of different types of integrations.
>
> **[1:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=62)** We're going to start just using files, because that's the simplest way to get started.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=66)** But I'll be providing resources in this course, on how to take advantage of those integrations, 'cause that's a common pipelining pattern.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=74)** So after we consider what type of data we're going to process in our cluster, we want to think about how we're going to process that.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=81)** Now most commonly in my work as a big data and clutter architect, I'm working usually with Python, but I have had some clients that wanted to work with Scala, I've had some R clients, we also we're going to take a look at Spark SQL, we can use Bash shells, so Bash commands as well, that's usually to install libraries, so there's a number of supported languages.
>
> **[1:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=103)** And again, one of the great aspects of using Databricks Notebooks, is you could actually mix languages in a workflow.
>
> **[1:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=110)** Which can support teams that have different language skills working together.
>
> **[1:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=116)** Now talking about notebooks, one of the great aspects of working with Databricks is the support for so many different notebook file types.
>
> **[2:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=124)** And again, where I've gotten great usability in this product is by using it to run samples that I've seen out in the opensource world or many built by some data science teams, at some of my customers, or maybe even built by some student teams.
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=141)** So the import supports a code in Scala, Python, SQL, or R.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=146)** Or notebook formats of IPython notebooks, R Markdown, or Databricks notebooks, that's DBC.
>
> **[2:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=154)** Also pure HTML.
>
> **[2:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=156)** You can export when you are done with working with a notebook depending on the run time.
>
> **[2:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=162)** If it's Python, you can always export the source file, so Scala, Python, so and so forth, but if you've got a Python notebook, you can export it as IPython, if you got an R notebook as R Markdown.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=171)** You can always export as a Databricks notebook, DBC, or HTML.
>
> **[2:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=176)** And then it's important to note that when you export a notebook as an Azure Databricks notebook, HTML or archive, DBC, and you haven't previously cleared the results, the results of running the notebook are included.
>
> **[3:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=187)** So again, you're going to want to consider whether you want to include the results or not when you're exporting.
>
> **[3:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=193)** Now we're going to take a look at a Databricks notebook in action.
>
> **[3:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=197)** So I've got my cluster available, and to connect to notebook with it, you may remember from what we saw in an earlier movie, I'll go into my workspace, and I'll go into my user, and I can create an object.
>
> **[3:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=215)** So I can create a notebook, a library, or a folder.
>
> **[3:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=219)** And I've got this demos folder area.
>
> **[3:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=222)** So what I have done is I've done imports.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=225)** You can import from your local file system or you can bring in a URL.
>
> **[3:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=231)** And you can see here are the formats.
>
> **[3:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=233)** If you import from the file system, you can then import any of the notebook formats.
>
> **[4:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=240)** So I've done that already, and I've got a dashboards.html, notebook that's in Python, and I'm going to go ahead and attach it.
>
> **[4:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=250)** And what this does is this is showing us some of the visualization capabilities, and I'm just going to run all, and this is going to run all of my active cells, and you can see here they're running.
>
> **[4:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=260)** And now if I scroll down you can see for each of my cells where I ran code, you can see how long it took, what's the output, so this is just showing some display capabilities, and here we are reading in a CSV file, and reading it into a data frame.
>
> **[4:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=279)** You can see here's the data types.
>
> **[4:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=281)** Remember this is similar to a demonstration I did earlier in this course.
>
> **[4:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=285)** And here we're graphing.
>
> **[4:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=287)** And you may remember that we have the magic button down here which will graph for us.
>
> **[4:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=292)** If we want to set this back to this type of data, we just click on the chart button.
>
> **[4:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=297)** We can click on the graph button and here are our plot options.
>
> **[5:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=301)** Now we can create a dashboard, and this is a premium feature, so if we go into code and we say, new dashboard, we can create a dashboard, and this code has created this dashboard for us, and we can add graphs to this dashboard.
>
> **[5:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=313)** Now to take a look at it, we can just go to the dashboard and you can see that we can present this dashboard.
>
> **[5:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=321)** So this is a great aspect of Databricks that you can share across your teams, the results of your notebooks and your notebook experiments as dashboards.
>
> **[5:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=335)** And you can see that, if you go through here, and then you can go back over here, you can set this back to code, and then we're back in the code.
>
> **[5:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=344)** Let me just scroll down to the bottom so you can see the whole thing.
>
> **[5:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=346)** So this sample notebook basically is building this dashboard.
>
> **[5:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-python-notebook-with-dashboards?u=76281980&t=350)** So you can see how it looks, and it basically shows you how to present it and of course if you're done with the dashboard you can delete the dashboard by just clicking this right over here.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), dbc (3), html (3), gui (1), cli (1)
> **CLI Commands:** python (6)
> **UI Navigation:** scroll down (2), click on (2), go to (1)
> **Code Keywords:** interface (1), let (1), delete (1)
> **Tools:** bash (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), install (1)
> **File Paths:** dashboards.html (1)

#### Use an R notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=0)** - So now we are going to take a look at using a different runtime in a notebook.
>
> **[0:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=5)** In this case we're going to use R.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=6)** You can see the notebook is set to R.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=8)** Now when you create a new notebook, you set the runtime.
>
> **[0:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=12)** But, what I've been doing is I've been importing notebooks.
>
> **[0:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=15)** So, to import into the workspace, just as a reminder I made a folder inside of my workspace, and I just said import, so here I am.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=24)** And then I just browse down and this particular one happens to be, this one.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=31)** And then just click on this one and import it.
>
> **[0:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=33)** Now you could also create a new notebook, but more often than not I will end up importing them.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=38)** So this one takes a few minutes to run.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=40)** So I actually ran it already and what I'm showing you here is working with a different set of libraries.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=48)** So really common in the data science world do you have people that have an R background statistical programming language, and we're using sparklyr in this databricks R notebook.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=59)** So what we've done here is in the first section, we're installing packages from CRAN, which is an R repository.
>
> **[1:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=67)** So you can see that we are installing these packages and remember again the default language in here is R.
>
> **[1:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=73)** And then here it shows that these came down.
>
> **[1:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=76)** It took three minutes for these to install, and then we're loading this sparkylr library.
>
> **[1:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=82)** And then we're creating a connection.
>
> **[1:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=85)** So we're using databricks as connection in spark connect to establish this sparkylr connection.
>
> **[1:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=90)** We don't need other parameters.
>
> **[1:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=92)** Again this is part of the reason you choose to use a managed Apatche Spark implementation, because the databricks teams have written these libraries that work very easily with these different common languages and runtimes.
>
> **[1:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=106)** And notice that sc is the special name for the sparkylr connection and using sc will allow us to see the spark progress bars in the built in spark users UI viewers.
>
> **[1:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=116)** So it is specific to databricks.
>
> **[1:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=118)** So now we're going to set up the connection.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=123)** We're going to use the API and we can import and combine sparklyr with a dplyr or MLib, and if extension packages include third party JARs we might need to install those JARs in the workspace.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=138)** And we'll be doing that in a subsequent movie.
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=140)** Here we're not using the third party JARs yet.
>
> **[2:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=143)** And here we are copying from the spark context the iris dataset into this iris table.
>
> **[2:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=150)** And so we're getting ready to work with this on our spark cluster.
>
> **[2:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=154)** And here we are saying let's work with this set of tables and we want to just do a count of our records here.
>
> **[2:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=162)** So we've got 150 records.
>
> **[2:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=164)** And now we're going to work with more common R options here.
>
> **[2:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=168)** So we're going to change a plot height and then we're going to take our iris table and we're going to generate a summary and we're going to provide some operations.
>
> **[2:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=177)** So you can see in line two, we're mutating, we're bucketizing the sepal width, the petal width basically.
>
> **[3:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=182)** And then we're grouping by the species and then summarizing and finding the mean and standard deviation.
>
> **[3:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=189)** So doing statistical manipulation on our data with our language, which is designed for that.
>
> **[3:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=194)** And then we're going to use ggplot, which is a really common library to plot this out.
>
> **[3:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=199)** So again this is really just designed to show that a common R workload can be easily supported in an azure databricks cluster.
>
> **[3:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=208)** And you can see here is a nice visualization of the sepal length and the sepal width.
>
> **[3:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=212)** Typical kind of an R visualization.
>
> **[3:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=215)** And you can see the information on how long this took.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-r-notebook?u=76281980&t=218)** So the idea is that no matter, really almost whichever data science method you use, whether you use python livros, whether you use R, whether use skola, you can run all these different processes in this environment and it really does get you to business value faster because you can leverage whatever skills your particular team has.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2), set up (1)
> **Code Keywords:** import, (1), let (1)
> **Env Vars:** cran (1), api (1)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Speakers:** - so (1)

#### Use a Scala notebook for visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=0)** - [Instructor] So next I'm going to show charting and graph types with Scala.
>
> **[0:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=3)** And this comes out of the Databricks documentation.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=6)** You might say, gosh, you know Lynn why are you showing all this visualization?
>
> **[0:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=10)** Isn't this about data processing?
>
> **[0:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=12)** And yes we are going to cover that in subsequent movies, but the reason I'm showing so much visualization is this is becoming a key aspect of more and more data workflows, and not just at the end.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=24)** Because data is lots of data, complex data, messy data, I see using visualizations at various points from the beginning to get a sense of what the data looks like, the middle to see if the processing is producing meaningful results, and the end to presenting the results to being integral to the work of data science.
>
> **[0:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=44)** So I see that it's really key.
>
> **[0:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=46)** Also I like to show the different languages, because again this is part of what I'm seeing as an architect in the real world, where people are bringing different languages to these data science pipelines and one of the reasons that Databricks is a great choice is because it so elegantly supports all of these in the different notebook types.
>
> **[1:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=63)** So to that end, we have the Scala notebook, and again I brought this in by just going in to my demo area and saying import, and then going out here, and going out to my exercise files to the proper one, and then clicking on this.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=81)** Now notice this is a DBC, or a Databricks archive so this would have the original run results in it, so the run results will be updated when I rerun this.
>
> **[1:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=92)** So I've done that already, and so now I have this sitting here and, again I just wanted to show you some of the process of how this works.
>
> **[1:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=98)** I know I've mentioned it but, in order to interact with our cluster we need to attach it.
>
> **[1:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=103)** So once it's attached, then we can run individually.
>
> **[1:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=108)** So, and this is a really long notebook, so I'm just going to show you a couple things about running individual cells, and you can see here's the previous run results, because this was saved as a DBC file.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=117)** So I can run this one, and you can see there it's running, and because it's using Spark Context as we saw in an earlier movie on line three here, we can get the Databricks enhancements, basically in their notebook so we can see the data frame information.
>
> **[2:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=134)** And then if we go down, we can start looking at some of the documentation and it's talking about plotting, right?
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=141)** And we can see how this is working together.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=144)** Now I can run all of this individually, or again I want to show you some of the controls in the notebook.
>
> **[2:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=149)** What I can do is I can clear the results, I can clear the state, clear the state and results, I can clear the state and run all.
>
> **[2:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=156)** So I have all these different capabilities of running.
>
> **[2:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=159)** So if I clear the results, you can see now I have no results, right?
>
> **[2:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=165)** If I clear the state, if there was any state in this particular cluster, I would be clearing out of the execution environment.
>
> **[2:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=173)** The results are what you see in the notebook.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=175)** The state is what's running on the cluster.
>
> **[2:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=177)** Now if I just want to run everything, I can just click run all.
>
> **[3:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=182)** Notice while this is running, I have the ability to stop the execution and also I get a status on the right side over here, showing which commands are running, and I can go to those commands.
>
> **[3:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=194)** Now the notebook has run, and I can scroll down and I can start to take a look at the richness of the visualizations.
>
> **[3:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=200)** And again this is very well documented, so if you're wanting to understand more about the visualizations, I really recommend running and working with this notebook.
>
> **[3:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=209)** So, here this is showing you the built in visualizations, and you can see we've got a pivot table here which is super useful, and you can see that here's the pivot table operator down here, and if I click here you can see here is the different types of visualizations that are built in to Databricks.
>
> **[3:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=226)** Another tip I'll give you is you can expand this, see how that works?
>
> **[3:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=229)** Sometimes it doesn't size properly.
>
> **[3:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=231)** Then here we're using a sequel command, and you may remember this from a previous movie, that the notebook has a default run time, this one is Scala, you can see it up here, so if you wanted to use another supported language in the cluster, you use the percent sign which is the magic command basically.
>
> **[4:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=246)** And then here we're setting up some sequel and then we are running in Scala, a visualization here that's a bar chart, and we can hover.
>
> **[4:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=256)** So we've got some really nice, rich visualization support.
>
> **[4:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=261)** Here we have a line graph, again we can look at areas of the line, which is cool.
>
> **[4:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=266)** And again I'll remind you you have plot options inside of the Databricks visualizations.
>
> **[4:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=271)** And then of course we have to have pie charts, so there's our pie charts.
>
> **[4:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=275)** Notice we can download, if we want to.
>
> **[4:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=278)** And you might remember from previous movies, if you have the premium edition, you can make a dashboard out of these visualizations for presentation, which again can help with communication about data which is so important as data complexity and volumes grow.
>
> **[4:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=291)** Databricks supports mapping, so you can see here's the map.
>
> **[4:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=294)** And again, it has rich tool tips if you pass your mouse over it.
>
> **[4:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=299)** And, you have to have your data in a certain format, here explains that to you.
>
> **[5:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=303)** Here's another map.
>
> **[5:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=306)** And here we are using more tradition data science visualizations, so here's a scatterplot.
>
> **[5:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=312)** So, we can see what that looks like.
>
> **[5:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=314)** And again all the sample code is here which is really great when you're wanting to use different visualizations.
>
> **[5:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=320)** And again we're getting more and more into the data science of the statistical world in our visualizations, so here's an LOESS Fit Curve for a scatterplot.
>
> **[5:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=329)** And you can see how that's built in.
>
> **[5:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=332)** And they show you again more here, and then here's a histogram, really commonly used to get the idea of where the data would bin or group.
>
> **[5:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=341)** You can see what that looks like.
>
> **[5:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=343)** And here's a quantile plot, quantile.
>
> **[5:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=346)** And again if you're not familiar with these visualization concepts they have nice links in here.
>
> **[5:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=351)** And you can see what that looks like.
>
> **[5:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=353)** Here's Q-Q plot.
>
> **[5:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=356)** Again the idea is that there is this ability to work in a way that you are comfortable working, and again I'll just note these are built in visualizations inside of Databricks.
>
> **[6:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=369)** So you don't have to bring in any other libraries or anything like that.
>
> **[6:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=372)** And then here, they're just being more fancy with their Q-Q plot.
>
> **[6:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=376)** And then a box plot, that's the one I'm always using.
>
> **[6:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=379)** So here's our box plot.
>
> **[6:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=381)** So I just think this is a great reference notebook as you are getting ready to build your data experiments.
>
> **[6:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-scala-notebook-for-visualization?u=76281980&t=389)** Making proper use of visualizations is an important technique that is well supported in Databricks Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), import, (1), super (1), this, (1), pass (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** dbc (2), loess (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Exercise Files:** exercise files (1), sample code (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Documentation:** the documentation (1)

#### Use a notebook with scikit-learn
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=0)** - [Instructor] Now up until this point, we've been looking at a lot of the mechanics of how to get started with Azure Databricks.
>
> **[0:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=7)** So we've set up the cluster, we've set up the environment, we brought in notebooks, we've looked at how notebooks work, what are the mechanics of working with them, how we attach to a cluster.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=17)** We've looked at how different languages work in notebooks, we've looked at visualizations.
>
> **[0:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=22)** The whole core of why we would use this product is to process massive amounts of data in a complex way, because it's distributed, so how does that work, what does that look like?
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=34)** It can be used in standard analytics, so such as just aggregates, grouping, I call it business reporting, basically.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=41)** However, more and more, we're seeing that these types of workloads include machine learning, and although there are machine learning libraries that are built native for Spark, what I'm finding in my work as a cloud architect, is a lot of the data's science teams come from what I call traditional data science background.
>
> **[1:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=60)** They've, you know, studied statistics or math in university, a lot of them are recent graduates, and what is being taught most commonly is a Python library called scikit-learn, so I see a lot of experiments on people's desktops in scikit-learn, and I think that Databricks sees this too, because they created this really great sample notebook that we're going to take a look at now.
>
> **[1:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=84)** It's a Python notebook and it uses the scikit-learn library to run machine learning on a workload, and then what they've done, is they have said now you can take this workload and start to parallelize it, which is the point of running a larger workload up on Databricks, so I think it's a fantastic example.
>
> **[1:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=104)** As I've done with other workbooks, what I've done here is I've imported this.
>
> **[1:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=108)** So if I just go into my demo area, and I import, and it's right over here, and I go to this section, it's this workbook right here, and you notice that this is an HTML file, which is supported here.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=123)** So I've done that already, and then you'll probably remember how we need to set this up to interact with our running cluster, which is just by clicking on this button and attaching it to our environment.
>
> **[2:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=136)** Now because this does take a bit to run, I'm going to just run everything on the notebook at one time and then we'll kind of go through it as it's running, and I'm sure you remember how to do that, just right here.
>
> **[2:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=145)** Now at this point you might say, well, gosh, there must be keyboard shortcuts, and you'd be right, so there's a whole bunch of keyboard shortcuts here, which as you work with this product more frequently, you'll probably find yourself using, but what I generally do when I'm teaching is I just use the UI, because it's sort of easier.
>
> **[2:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=164)** So I'm going to click run all, and then of course we'll start getting the messages open to the right.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=169)** So as this is running we'll just go through the notebook.
>
> **[2:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=172)** So we're using scikit-learn, so the Python library that almost every student is learning in university these days, and as it says, this can help with the transition from single node workflows, running on somebody's laptop, to fully distributed.
>
> **[3:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=184)** So I've found, with working with customers, this can be really helpful to start to understand how to take advantage of distributed compute on Spark.
>
> **[3:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=193)** So what we have here are running scikit-learn on the driver, distributing scikit-learn jobs and converting between scikit-learn and Mlib models.
>
> **[3:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=203)** So what we're going to do is first, just run it, but we're going to run it on the driver, so that's a single node, so on our cluster, we're just running it on a single node, so we don't want to run huge jobs, 'cause we don't want to overrun our cluster.
>
> **[3:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=216)** Again, the idea of a spark cluster is, you have driver, and then you have basically worker nodes.
>
> **[3:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=221)** But again, we're just starting with emulating what's on a laptop.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=225)** So what we're going to do is load the data into Pandas, which is part of the library, explore it, transform it, hold out a random test dataset, learn an initial model, and evaluate the model.
>
> **[3:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=236)** So we're going to load the diamonds dataset from the ggplot2 package, and this, Databricks hosts this dataset, it's a commonly available public dataset.
>
> **[4:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=246)** And we want to predict the price of a diamond from its properties, so that's what we're trying to do using machine learning.
>
> **[4:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=252)** So you can see, in this command four box, we load this into our Spark context, and we just take the first result and we get diamonds.
>
> **[4:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=262)** So you can see that this is just some information about this, so we have 50,000 round cut diamonds, this is a documentation basically, and it has a dataframe with about 54,000 rows and 10 variables, and here are the details, so, features, if you will.
>
> **[4:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=277)** So we're loading this, and we're loading it from csv, and we want to remove the line number, that's this syntax right here, and then we just want to look at it.
>
> **[4:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=287)** So here's our data, that's what it looks like, and then, of course, plotting.
>
> **[4:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=292)** This goes to what I've been talking about earlier in this course, it's a very common data science workflow that you'll start plotting in the beginning because you might want to do some grooming of your features.
>
> **[5:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=302)** You might want to eliminate some of them, you might want to create new features, you might want to get rid of outliers, so on and so forth; it's very common.
>
> **[5:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=309)** So we're using matplotlib here, and we're plotting, and you can see carat and price, and looking for any outliers, basically.
>
> **[5:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=319)** And we can convert the Pandas dataframe into a Spark DataFrame and use Databricks display methods, and that's what I was showing in the previous movie.
>
> **[5:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=327)** All the really rich dataframes display methods that don't even require adding any libraries, and they're really simple and quick to use.
>
> **[5:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=335)** So what we're doing here is we're creating the dataframe and we're displaying it, and we are, then we click the plot icons, select the plot options, create a histogram of carat values, so that will be down here, under plot options.
>
> **[5:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=350)** And you can see we just drag a few things in, and we can set up our aggregation so it's really quick, which is what you want at this phase in the workflow.
>
> **[5:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=359)** So then we are going to transform.
>
> **[6:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=361)** So some of our features are text and we need them to be numerical so that we can compute on them, so we're going to use our library scikit-learn to do these transformations.
>
> **[6:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=371)** So we're going to convert the features to numerical values in the correct order based on the feature meanings.
>
> **[6:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=378)** Higher indices are better.
>
> **[6:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=379)** So we're just converting, basically, as you see here, in lines one through four in command 14, and then we're going to normalize each feature column to have unit variance.
>
> **[6:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=391)** And this is again standard in data science.
>
> **[6:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=394)** So what we're doing in command 16 is we're doing that normalization, and command 17 as well.
>
> **[6:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=401)** Then we're going to hold out a random test set, so that we can evaluate the effectiveness of our machine learning model, again, standard in this kind of workload.
>
> **[6:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=409)** So we're holding out in command 19, 30 percent of the data for testing, and we'll use the rest for training, so we're splitting.
>
> **[6:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=415)** Then we're going to go into our model, so we're going to train a model with fixed hyperparamaters, and print out the intercept and coefficients, so here on line two, we're using scikit-learn, we're using a linear model, and we're then just printing out the results.
>
> **[7:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=430)** And here's our interpretation.
>
> **[7:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=432)** We can summarize this but we want to be careful about this, about what our features mean, and about what assumptions we built into our model, so then we're going to score.
>
> **[7:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=444)** So we're going to call score, on line two here of command 24, and we're not doing great.
>
> **[7:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=449)** We're at 55 percent, almost 56 percent.
>
> **[7:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=452)** 50 percent is random guessing, so we're not doing great, so we want to actually make some changes to make our model be more useful in terms of prediction.
>
> **[7:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=462)** So along with that, we're going to start using the features of Databricks so we can distribute some of these tasks.
>
> **[7:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=468)** So what might you distribute?
>
> **[7:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=470)** You might distribute the extract transforming load, parameter tuning, and evaluation, and the demonstration here is to distribute the parameter tuning, so you can set various parameters of this algorithm.
>
> **[8:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=481)** Here is a nice explanation of command 26, of what parameter tuning can do for you, in terms of machine learning, and so I'll let you read through that, and basically, you're putting different values in for the parameters, and then leveraging the fact you have distributed compute so that you can run this model multiple times and scoring it, and seeing which parameter values produce a model that will predict with a higher likelihood, as compared to random guessing, so closer to 100 is better, and you'll remember we're at about 55, 56 percent.
>
> **[8:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=516)** So here's the split, and again, this is a Python notebook, so this is Python code, so in command 28 we're splitting, and we continue working on the split here.
>
> **[8:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=527)** 29, and 30, and here, on line two of 30, we're parallelizing, and we're working with RDDs, which are our structures for putting our data into memory of our distributed nodes.
>
> **[9:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=540)** This is interesting in 31, we're broadcasting, so it notes, if we use a variable in a function, a closure, run on each worker, Spark will automatically send the dataset to the workers.
>
> **[9:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=550)** It's great for variables with small values, but for our dataset, we can send it to workers more efficiently by broadcasting it.
>
> **[9:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=557)** This is actually really important in working with Spark.
>
> **[9:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=559)** We create a broadcast variable which we use later when we're running our tasks, and we've got a nice link here.
>
> **[9:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=564)** So we're creating these broadcast variables in command 32, and here's kind of the key to this: in 33, we're running our cross-validation in parallel.
>
> **[9:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=575)** We're going to define a function which will run on each worker.
>
> **[9:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=577)** Takes one task, one hyperparameter alpha value and one fold index and trains the model.
>
> **[9:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=582)** We then use RDD.map to run these tasks in parallel, so we're leveraging the parallel compute to figure out what are our best parameter values so we can get the most useful model.
>
> **[9:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=593)** This is sort of the key code here, in the box command 34.
>
> **[9:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=598)** And you notice this took .08 seconds, one of the reasons you use Spark, because it does it fast.
>
> **[10:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=603)** And in command 35, we're going to now learn, and then we clean up our broadcast variables, and then we collect the results at command 38, and now we have these alpha values paired with the average scores, and we're going to look for which gives the best score.
>
> **[10:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=625)** Of course, we always want to plot, because when you have a lot of data, it's useful to quickly look at plot, so here's the plot, you can see it's the log alpha score in the score, and then we can take our best hyperparameter, or hyperparameters, and train our final model, and we got our values, and we're just going to run on the driver, and now we're going to compare, and we did good.
>
> **[10:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=652)** You can see in command 47 here, the original model, you might remember, was like 55 percent, and our tuned model is 89 percent, 88 to 89 percent.
>
> **[11:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=665)** And then here is our output.
>
> **[11:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=668)** So again, this example shows how to work with scikit-learn, what is kind of a standard workflow, and how to parallelize a key task.
>
> **[11:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-notebook-with-scikit-learn?u=76281980&t=677)** In this case, it's the use of hyperparameters to tune a model, so it's something I see done very frequently with my customers, and again, very well supported in this product implementation.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), function (2), this. (1), import, (1), public (1)
> **CLI Commands:** python (5), node (3), make (2), find (1)
> **Definitions:** is a  (5), is an  (1)
> **Prerequisites:** set up (3)
> **Env Vars:** html (1), rdd (1)
> **UI Navigation:** go to (1), select the (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)

#### Use a Spark Streaming notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=0)** - [Instructor] In this example notebook, we're going to take a look at working with data in two types of input methods.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=8)** The first method is batched, or regular input, and in the second method, we're going to take a look at the new structured streaming API.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=17)** This is available for Python DataFrames.
>
> **[0:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=20)** So as we did in previous examples, what I've done is I've just imported this.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=29)** And you can see, here it is.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=31)** And then of course, you'll remember that to interact with a cluster, we're going to attach it.
>
> **[0:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=37)** So this is a relatively new API, and it's been very popular with my customers.
>
> **[0:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=42)** The idea is that you can do complex distributed data processing in your cluster on both batch and streaming data.
>
> **[0:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=51)** It does require, as it says here in command one, that you attach it to a Spark 2.x or greater cluster, as we've done.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=58)** So, we're going to work with some new type of data.
>
> **[1:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=61)** We're not going to use the diamond dataset anymore, we're going to use the event dataset.
>
> **[1:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=65)** So let's take a look at that.
>
> **[1:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=67)** Now, you'll notice that we are in a Python runtime notebook by this Python designator up here, but we're going to use a file system command, and this is in command three, and we're using the percent sign because this is a Bash shell command, and so you can just natively use Bash shell commands if you use the percent sign, it's the magic command.
>
> **[1:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=88)** And we're going to switch to this directory, or list the contents of this directory, and you can see that we have some JSON files inside of this directory.
>
> **[1:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=99)** It's a public directory so that we can build this application.
>
> **[1:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=103)** We've got about 50 JSON files, so we're going to examine what this looks like, and you can see, it's just sort of a typical event stream.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=111)** A time, resource number, an action, open close or whatever is happening with a particular event.
>
> **[1:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=119)** So first, what we can do is we can work with batch processing.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=123)** So we can just interactively query this data.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=126)** So we can define a static DataFrame on the file and give it a table name.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=130)** And here we're working in Python, because we don't have any magic percent signs, we're in a Python notebook, so we're using PySpark, and we're setting the input path in line three, and then we're working with JSON, so of course PySpark natively works with JSON, so you can see in six we're setting up the schema, and we're doing this because it's going to speed up processing for our queries.
>
> **[2:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=154)** And then in lines eight through 14, we're going to set up our static input DataFrame.
>
> **[2:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=160)** So we call spark.read on the schema, passing in the schema, and passing in the path, and then we're going to display this.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=169)** So, setting up our data, basically.
>
> **[2:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=173)** And, again, we've got the icon where we can verify that the format is correct, so we've got these two fields with these data types, and we can see a sample of our data.
>
> **[3:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=184)** And now we can compute the number of open and close actions with one hour windows.
>
> **[3:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=189)** We're going to group by the Action column, and the one hour windows over at the Time column, so again, we're using PySpark, we're using windowing functions, and you can see this in lines three through nine, particularly in line seven, our windowing function is a one hour window and we're going to count them and then we're going to cache them by calling cache in line 10, and then we're going to register the DataFrame as static counts.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=218)** Now in command 11, we can use Spark SQL to query the table, and notice we're doing %sql, because we just want to use our standard SQL.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=225)** Again, this is great for productivity, because so many people on data science teams and on devops teams are familiar with SQL, this just allows more of your team to be able to explore your data using the tools they already are familiar with.
>
> **[3:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=239)** And you can see that this is presented in the default visualization of the bar chart, and we could of course see the data if we wanted to, but it's easier to see here.
>
> **[4:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=251)** So we get a quick visualization of the data.
>
> **[4:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=255)** So now, what if we want to work with a timeline of windowed counts?
>
> **[4:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=259)** So again, using our SQL command, we can work with the window function in SQL, and we can produce a result by just running this cell.
>
> **[4:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=272)** Now you can see if you look at this graph that on the ends, we basically kind of drop off.
>
> **[4:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=276)** So it's sort of like we have a window of time where we have events, and then we don't have events on the ends.
>
> **[4:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=284)** And on the opening and the closing.
>
> **[4:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=286)** Now let's start to look at streaming, 'cause we looked at the data interactively.
>
> **[4:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=291)** We're going to now look at working with the streaming query, so it's going to continuously update as the data comes in.
>
> **[4:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=297)** We have a static set of files.
>
> **[4:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=299)** We're going to just basically fake it, or emulate a stream, by reading from one at a time in the chronological order.
>
> **[5:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=305)** And the query we have to write is pretty much the same, and this is part of the strength of working with streaming.
>
> **[5:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=310)** So if we look in command 17 here, you can see that we're using PySpark again, and the key line that we want to look at in lines three through 10 is instead of reading, in line six, we're reading a stream, and then in lines 12 through 19, we are doing the basic same thing by creating the windowing count.
>
> **[5:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=333)** The difference, though, can you spot it?
>
> **[5:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=335)** Is we're working with our streaming input, which we created by reading a stream, and that's line 14 and line 16.
>
> **[5:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=343)** And then on 22, we're just doing a reality check.
>
> **[5:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=346)** We're checking to see, is this thing actually streaming?
>
> **[5:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=351)** And it says it's streaming.
>
> **[5:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=354)** So what are we going to do next?
>
> **[5:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=356)** We're going to start streaming computation.
>
> **[5:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=359)** We're going to define what's called a sink, and start it.
>
> **[6:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=361)** It's basically a placeholder in our stream.
>
> **[6:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=364)** We want to query the counts, and we're going to set the complete set of one hour counts to be an in-memory table.
>
> **[6:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=371)** So, here we're setting on line one of command 19 the configuration to the shuffle partitions being really small just so we can get a quick result, and then in lines three through 10, we are setting our query to writing a stream counting this up.
>
> **[6:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=389)** And here we have a really nice visualization inside of our command 19 box, showing that our stream is initializing, and if we open this up, we actually get a dashboard, which I think is just really great, to be honest with you.
>
> **[6:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=403)** And we can see inside of here how the stream is being impacted, and what is the data volume coming through the stream in our little mini dashboard inside of our window here.
>
> **[6:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=415)** Now, if we want to see the raw data, we can see that as well, and those are events, basically, and then, if we scroll down, basically query is handling the streaming query that's running in the background, and it's running continuously.
>
> **[7:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=429)** So now, we're going to interactively query the in-memory counts table, once we've got something in it, and then we're going to run SQL against it.
>
> **[7:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=443)** And you can see, it should look similar, basically it's the same data.
>
> **[7:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=448)** And, then we're going to wait a little bit more for more data to be sent in.
>
> **[7:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=454)** And, query it again.
>
> **[7:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=458)** And, similar but not identical.
>
> **[7:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=460)** Probably should wait a bit more.
>
> **[7:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=463)** I could set the sleep value higher, and run this again.
>
> **[7:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=469)** Slightly different.
>
> **[7:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=471)** And we can look at the opens and closes.
>
> **[7:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=475)** Should be the same.
>
> **[7:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=477)** And of note here in command 30, if I keep running the query repeatedly, I'm going to find the open is more than closes, because this is where the close appears after the open, and this is structured streaming, which is ensuring what's called prefix integrity.
>
> **[8:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=493)** So this is really important.
>
> **[8:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=495)** Querying against a live stream is a nontrivial computational problem, and Databricks has put quite a bit of resource effort into doing this in a predictable and repeatable manner, so this is a relatively new capability.
>
> **[8:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=508)** My customers are really excited about it, and this notebook really demonstrates it well.
>
> **[8:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=512)** Of course, what we're going to want to do is we're going to want to stop this as well, so we could stop it a couple of ways.
>
> **[8:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-a-spark-streaming-notebook?u=76281980&t=517)** I don't know if you remember, we can stop the execution of the entire notebook, we can go up to the stream itself and stop it inside of here, inside of this Spark data, and I think just for simplicity I'm going to stop execution here.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), this. (2), let (2), function (2), require (1)
> **Env Vars:** sql (6), json (4), api (2)
> **CLI Commands:** python (5), find (1)
> **Definitions:** is a  (5)
> **Tools:** bash (2)
> **UI Navigation:** switch to (1), scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Use an external Scala library: variant-spark
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=0)** - [Instructor] As we continue looking at how to work with clusters, I'm going to pull an example from the real world.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=6)** So this is some work I've done with a team out in Australia at CSIRO Bioinformatics, and the use case is processing huge amounts of genomic data.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=17)** So here is an article that talks about the use case for our next example.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=23)** Now the sample notebook that we're going to be working with demonstrates a number of capabilities available in Databricks.
>
> **[0:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=30)** So the first capability is the ability to use an external library.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=35)** In this case it's a JAR file.
>
> **[0:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=37)** So for this particular example the team at CSIRO wrote a custom algorithm, an implementation of the random forest machine learning algorithm specifically for their data, for genomic data.
>
> **[0:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=50)** So it's a wide random forest and it's called VariantSpark.
>
> **[0:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=53)** It sits on top of Spark.
>
> **[0:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=55)** What's really important to understand is if you're going to work with an external library you need to and get that library and bring it in and bring it into your cluster.
>
> **[1:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=64)** So I'm going to show you how that process works for this particular case.
>
> **[1:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=68)** Now you notice that this notebook is written with Scala as the default runtime.
>
> **[1:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=73)** So the description here talks about VariantSpark and what is the Bioinformatics use case.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=80)** And rather than analyzing a real disease condition, 'cause this is medical data, and so there's privacy around it, what the team did kind of humorously to show researchers how this algorithm can be used, is they created what they call a synthetic phenotype.
>
> **[1:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=97)** Now in English that means a fake disease.
>
> **[1:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=99)** The disease in command two here is being a hipster.
>
> **[1:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=104)** Now even though it's a fake disease it does have a basis in genetics.
>
> **[1:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=108)** So here are references to the papers.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=111)** So they basically came up with four attributes that would define somebody as a hipster and then they created this diagnosis, if you will, this hipster index.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=121)** So what their algorithm is going to do is in the associated data it's going to find samples that have these genomic variants, and then this is used as a validation of the algorithm.
>
> **[2:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=136)** As it says, we demonstrate the usage of VariantSpark to reverse-engineer the association of the selected SNPs, those are the data points, the validations, to the phenotype of interest, or being a hipster.
>
> **[2:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=148)** Now that aside, sort of more generally, what's interesting about this notebook is that it uses this external library.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=155)** Now in order to work with this we had to use a specific version of Spark because VariantSpark is compiled on Spike 2.2.
>
> **[2:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=163)** So if I scroll down you can see here's the cluster setup instructions.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=167)** Now I set the cluster up in advance because it does take a couple of minutes, but I went over to Clusters.
>
> **[2:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=172)** I created a cluster for this particular use case, and you can see that the runtime here is a different runtime.
>
> **[2:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=179)** So if I click Create Cluster, you can see that the default runtime is Spark 2.3.
>
> **[3:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=185)** And we have support already up for Spark 2.4.
>
> **[3:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=187)** So this is an important point when you're creating your cluster.
>
> **[3:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=191)** You need to figure out which version of Spark your particular team needs to support.
>
> **[3:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=195)** In my case, for the VariantSpark workload it's 2.1.
>
> **[3:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=199)** So once I did that then the second thing I had to do is I had to associate this external library.
>
> **[3:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=204)** Now the way this works as your Databricks is in the workspace you go to your particular location, and you say Create Library.
>
> **[3:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=213)** And then you have a number of places that you can get your library files from depending on the source programing language they're written in.
>
> **[3:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=221)** So you can see you can upload JAR files, Python Eggs, or Python Wheel files into DBFS, or the file system you can again retrieve these types of libraries that are stored on the location in the file system.
>
> **[3:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=234)** You can use PyPi package repository to get Python files.
>
> **[3:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=239)** In our case we used the Maven repository because that's where you would have JAR or Java and Scala files.
>
> **[4:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=246)** And CRAN of course is for R.
>
> **[4:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=248)** So in our particular case we had to get the coordinates.
>
> **[4:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=252)** And then here are the coordinates and this is the Maven repository.
>
> **[4:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=256)** And we simply had to take these coordinates, paste them into this location, and then this was uploaded as a set of libraries.
>
> **[4:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=265)** Now I'll go ahead and show you what this looks like.
>
> **[4:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=269)** You can see once you have the library uploaded, and it does take a couple minutes because we have dependencies here.
>
> **[4:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=274)** Then what you do is you select the cluster that you want this library to be associated with.
>
> **[4:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=279)** In our case it was the variant-spark-demo cluster that was set up on Spark 2.2.
>
> **[4:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=284)** And then you're set up to run your notebook having properly set up the dependencies.
>
> **[4:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=291)** Now I've gone ahead and I've run this notebook already because it does take a couple minutes to run 'cause it does work with quite a lot of data, even in the sample.
>
> **[4:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=299)** So the way that this works is once you set the cluster up then you load the data, and they're using Python here.
>
> **[5:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=305)** And we're loading out of not csv, but we're loading out of genomic-specific vcf files.
>
> **[5:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=311)** And they have actually been compressed using bz2.
>
> **[5:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=314)** And so we've loaded our data and then we're loading our variants.
>
> **[5:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=318)** So this is implementing the algorithm.
>
> **[5:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=321)** And we have a deprecation warning here.
>
> **[5:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=323)** This is another useful feature of working with a Databricks notebooks.
>
> **[5:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=327)** This'll still run but it just shows when it's a recommendation to update some of the interface code because the Databricks teams are updating the code as they are updating the underlying Spark versions.
>
> **[5:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=342)** So what this does is this uses Scala to import the VSContext which is a wrap around the Spark Context, and the ImportanceAnalysis, which is a wrap around the wide random forest.
>
> **[5:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=352)** And then we're passing in the Spark instance to the VSContext.
>
> **[5:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=357)** Then we're passing in the feature file.
>
> **[5:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=359)** And these are the prelabeled who are hipsters.
>
> **[6:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=362)** And we're looking at the output here, HG0096 so on and so forth.
>
> **[6:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=368)** Those are the genomic files that would be coded as hipsters.
>
> **[6:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=372)** So in other words we have the right answer that we're going to verify against when we run our custom machine learning algorithm in this particular case.
>
> **[6:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=380)** Now we're going to load our labels.
>
> **[6:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=382)** So here's our labels, 0, 1, 0, 1.
>
> **[6:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=385)** So this is telling us whether or not somebody's a hipster.
>
> **[6:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=388)** And then we're going to configure our analysis.
>
> **[6:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=391)** So we're going to pass to our ImportanceAnalysis the featureSource, the labelSource, and then importantly the number of trees.
>
> **[6:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=398)** And so this is a random forest algorithm.
>
> **[6:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=400)** So this is how many trees we're going to be using.
>
> **[6:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=403)** Then we're going to run our analysis.
>
> **[6:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=405)** And this is sort of the heavy weight lifting inside of this particular workload, because what we're doing is we're distributing this across our worker nodes.
>
> **[6:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=415)** Now for this demonstration example we have a small number of worker nodes.
>
> **[6:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=419)** We have three worker nodes.
>
> **[7:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=420)** But, again, just to give context to this, when I run this in production with partial or full GWAS or genome-wide samples we can have 50, 100, 200 worker nodes.
>
> **[7:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=430)** And that is again why you use Spark because of the sizes of data you're going to compute against.
>
> **[7:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=436)** Then this is showing you which variables are of most importance.
>
> **[7:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=440)** And again, you can use the great graphing tools inside of here and you can quickly graph that either in lines or in a bar chart.
>
> **[7:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=448)** Or if any other way that you want to graph it that is meaningful.
>
> **[7:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=452)** And this tells a little bit of detail about the algorithm itself, and then we're showcasing in this notebook using some of the other visualization methods, so you might remember this from some of the earlier videos, but here we're actually implementing this in a production use case where we're using SQL and we're loading this information into a SQL table and then we can easily visualize that with the built-in visualization tools.
>
> **[7:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=478)** Now if we want to use custom tools as some of the people on the team did, some people were more comfortable with matplotlib, so they were using Python here, and basically taking a similar type of a plot, these are the different characteristics that define someone as a hipster, and here they're plotting them.
>
> **[8:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=496)** Again, you can see them across the bottom, using Python plotting tools.
>
> **[8:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=501)** You might remember from an earlier video you can also use R.
>
> **[8:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=504)** And indeed they have a person on their team who's more comfortable using R.
>
> **[8:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=508)** So again, this is very reflective of the real world.
>
> **[8:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=511)** So that person wanted to load a Spark R package and wanted to take those same variables, and they wanted to use ggplot.
>
> **[8:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=519)** And here they're taking the same information, these are the variants of interest, and they decided to flip the axes horizontally and vertically.
>
> **[8:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=528)** The team has a sense of humor so they created an infographic showing the hipster characteristics.
>
> **[8:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=534)** So you can actually do this if you sequence yourself genomically and you can run your results through and see your proclivity towards hipsterdom by having variants that reflect monobrow, fabulous hair or beard, characteristic of your retina that makes you prefer checked shirts, and coffee consumption.
>
> **[9:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=554)** Then, as is commonly done in a lot of machine learning experiments, the team wanted to compare their results of VariantSpark, or wide random forest, with another popular tool that was specific to their domain, and that's Hail.
>
> **[9:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=571)** And Hail does logistic regression.
>
> **[9:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=573)** So the method of doing machine learning analysis is different here.
>
> **[9:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=579)** And so they go through, they load data again, and then they get the results.
>
> **[9:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=583)** And then they do a plot and they're using R here.
>
> **[9:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=587)** And this is the result of the plot.
>
> **[9:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=589)** These are the variants.
>
> **[9:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=590)** And the variants are shown differently.
>
> **[9:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=592)** VariantSpark results are in the lighter color, the salmon color, and Hail results are shown in the green color.
>
> **[9:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=599)** So you can see, although there is overlap of the results, for example in this variant, Hail produces more results.
>
> **[10:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=606)** So the point of this particular experiment is to distribute a high volume of compute across multiple machine learning libraries and to visualize the output so that they can understand the usefulness of the various machine learning libraries.
>
> **[10:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-an-external-scala-library-variant-spark?u=76281980&t=619)** Again, it really showcases the power of both Spark and Databricks pulling together in this demonstration notebook.

> [!info]- Semantic Content
>
> **Env Vars:** jar (3), csiro (2), sql (2), dbfs (1), cran (1)
> **Code Keywords:** case. (3), case, (2), continue (1), interface (1), pass (1)
> **CLI Commands:** python (6), find (1)
> **Definitions:** is a  (4), is an  (2), in other words (1)
> **Versions:** 2.2 (2), 2.3 (1), 2.4 (1), 2.1 (1)
> **Prerequisites:** set up (3), setup (1), configure (1)
> **UI Navigation:** scroll down (1), go to (1), select the (1)
> **Code Identifiers:** featuresource (1), labelsource (1)


### 3. Scaling Azure Databricks Workloads

#### Understand data engineering workload steps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=0)** - [Instructor] In this section I'm going to share some of the work that I've been doing in production working with scaling Apache Spark workloads.
>
> **[0:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=9)** So to get context for that, let's review a typical data engineering pipeline.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=14)** You can see that the steps are represented here.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=17)** You'll have to design for ingest of data, exploration of data, using the notebook interface in our case.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=24)** If we're using machine learning, as we are, training the ML Model, evaluating the effectiveness of it, and then eventually persisting it so that people outside of this environment can have access to it.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=36)** In my case this'll be genomic researchers.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=38)** Now to put a more practical spin on this engineering pipeline, there's actually sub-steps that I have found in working in production with this particular use case.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=48)** Now because Spark is often used in situations with both massive sizes of data and also massive complexity, often using machine learning for compute, what is typically done is an iterative process to get the most optimal runtime in terms of the individual runs if it's a batch type workload or to look at the overhead forced streaming workloads and resource cost.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=74)** So to figure out what size of machines, how big the cluster should be, so on and so forth.
>
> **[1:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=79)** So typically what happens in these types of workloads is you start with an experiment and that's what we did at the end of the last section of movies.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=87)** We worked with the custom Spark machine learning library for genomics, VariantSpark, and we worked with kind of that fun hipster index Notebook.
>
> **[1:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=97)** So we got the experiment working, basically a hello Databricks if you will using our Databricks' notebook with a very small amount of data.
>
> **[1:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=107)** So we used that experiment so that we could validate our use case, validate our library, and get it out in the hands of more of our end users, in our case that was genomic researchers.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=117)** Once we did that, then we started to scale up.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=121)** Now in our case because genomic data is really truly massive, we went through a number of iterative steps in our process.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=130)** So we started with really what I would call tiny data, we moved to small data, medium sized, high medium, small large, medium large, and then large large.
>
> **[2:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=139)** It really took us all those steps because going from just a small or a tiny sample to the full workload is really impractical and as you'll see in this section of movies when we're diving in, there are quite a number of control planes that we can optimize.
>
> **[2:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=156)** And in order to understand where, when, why, and how, and most importantly which control plane we should optimize on, I really recommend this iterative process.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=167)** So I'm actually going to take you through this with this particular use case, or at least a sub-set of it in this set of movies.
>
> **[2:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=173)** So you want to run it medium scale, locate the bottlenecks using the tools that I'm going to show you in subsequent movies, the interfaces, the porting tools so you can see where there are bottlenecks, if any, and then optimize your experiment or your cluster, and then repeat with ever growing scale.
>
> **[3:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=191)** So that really is the process.
>
> **[3:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=193)** There's no shortcut to working with these increasingly large scales of data.
>
> **[3:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=199)** I do find frequently in my production work as an Enterprise Cloud Architect and Big Data Consultant that customers have difficulty in understanding going from, say a really tiny experiment, to full production workload.
>
> **[3:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=213)** They want to go directly and they want to go fast, which makes sense but again, real world experience is important here.
>
> **[3:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=219)** The process that I'm showing you in this set of movies is really one that I have seen work for many of my customers.
>
> **[3:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-data-engineering-workload-steps?u=76281980&t=224)** I'm just pulling out the genomics example because it's the one I've been working with currently.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), case, (2), let (1), interface (1), from, (1)
> **CLI Commands:** apache (1), find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Understand cluster configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=0)** - We're going to start looking at sizing workloads digging in a little bit more to the Cluster Configuration.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=6)** Now as we're working with Azure Databricks for our Apache Spark implementation, this is really a layer sitting around Spark.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=14)** Spark itself, of course, is distributed, compute and it works with a driver and then end number of nodes.
>
> **[0:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=21)** The driver will host the SparkContext, there will be a Cluster Manager and each node will have importantly, an executor which is designed to hold all of the data in memory for a very fast distributed compute.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=35)** And then we'll be able to execute end number of tasks.
>
> **[0:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=39)** So we're going to go ahead and take a look at the Cluster Interface for Databricks Azure.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=45)** So here we are inside of the Databricks Azure portal and I've clicked the Clusters button.
>
> **[0:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=51)** So you can see that I've been doing a number of experiments as I've been working with this course.
>
> **[0:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=57)** From a high level, there are two types of Clusters there are Job Clusters which we're going to cover in the next section and there are Interactive Clusters.
>
> **[1:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=64)** Interactive Clusters stay running either all the time or they will automatically turn off.
>
> **[1:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=72)** That is the default setting if they're inactive.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=74)** And you'll notice there's different types of Clusters and they're in different states.
>
> **[1:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=78)** So I have a couple of Clusters here that I've turned off I have a Cluster that's running and then I have a Cluster with a different type of an icon that's also running.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=87)** So you'll also notice they're running different run times and they have a number of nodes shown here, who set them up, and then which libraries are associated this is the variance spark library and how many notebooks are working, are associated with the Cluster.
>
> **[1:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=102)** Now if I wanted to create a new Cluster, I would click "Create Cluster" and I would call it "New Demo" and I have two modes.
>
> **[1:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=110)** Notice by default I can work with Standard.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=113)** This is single-use clusters, SQL, R, and Scala but there's a new type, High Concurrency.
>
> **[1:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=119)** This is designed to run concurrent SQL, Python and R, it doesn't at the time of this reporting, support Scala and this was called Serverless, previously.
>
> **[2:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=129)** So, in the run time version, this is where I select the run time of Spark and Scala.
>
> **[2:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=134)** And if I click the drop down here, you can see the default is 4.3 as of this recording and that's Spark 2.3.1, very important to tick the appropriate Spark version.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=146)** Now you'll notice some of these choices have associated GPU resources.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=152)** And again, you're underlying Azure account would have to have GPU set up.
>
> **[2:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=156)** Because if I go ahead and I select this, you'll see that for this particular Azure account, it tells me the Spark version is incompatible with the selected driver and if I try to select GPUs, they're not going to be available.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=169)** Because that's set at the level of Azure, 'cause GPUs are more expensive.
>
> **[2:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=174)** So again, Azure is the outside wrapper which is hosting the Vms in the environment for Databricks.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=181)** So that needs to be set up either by you, if you're the administrator, or by your administrator if you need GPUs for your particular workload.
>
> **[3:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=188)** So, you select your version, so I'll select this version here, you select your Python version and you select your driver and here's the default driver type, the amount of memory, cores and these are Databricks units which is how you pay for this service and then the workers.
>
> **[3:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=204)** Notice, autoscaling is turned on by default, two to eight workers and notice Auto Termination is turned on by default.
>
> **[3:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=212)** Also you have the ability set up Spark Configuration and you can tag and you can look at logging and set up in the scripts here.
>
> **[3:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=221)** Now once you click this button, that will create a new Cluster and that takes from two to ten minutes depending on resource allocation, where you are, so on an so forth.
>
> **[3:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=231)** Now if you click High Concurrency, you'll see that your runtime versions are, there's the smaller list, basically you don't select GPUs here for your driver type you have a different allocation for memory and cores for the worker as well and then notice here, I have a warning, and this is because I have many other Clusters running and this is again associated to Azure.
>
> **[4:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=255)** This account may not have enough CPU cores to satisfy this request and then you'd have to get more CPU quota.
>
> **[4:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=262)** This will come up when you're running multiple workloads either on multiple Clusters or you have both batch and streaming workloads running, so again, this is a first level of tuning, because if you have scalability you have to be able to have the appropriate resources available in your Azure account to be able to scale.
>
> **[4:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=282)** So once you've set your Clusters up, then you can see them over here, so for example, here's my High Concurrency and you can see that I have no notebooks, no libraries so on, so forth.
>
> **[4:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=292)** I have an Event Log, a Spark UI, Driver Logs, I can have associated apps in the Spark Cluster UI Master.
>
> **[5:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=300)** So these are your logs that give you visibility into the overhead of running workloads on this particular Cluster.
>
> **[5:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=308)** And these are the ones we'll be drilling in in subsequent movies.
>
> **[5:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=311)** Notice you can edit the Cluster, you can Clone it, Restart it, Terminate it, or Delete it.
>
> **[5:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-cluster-configurations?u=76281980&t=316)** And in addition to working with this interface for the premium skew of Azure Databricks, there is also and API so as you move into production, anything pretty much that you can do in this interface, you can also script through the Databricks API.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), type, (2), this, (1), default, (1), default. (1)
> **Env Vars:** sql (2), gpu (2), cpu (2), api (2)
> **CLI Commands:** python (2), apache (1), node (1)
> **Prerequisites:** set up (4)
> **Versions:** 4.3 (1), 2.3.1 (1)
> **Cross-References:** in the next (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)

#### Understand Spark job execution overhead
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=0)** - [Tutor] As we take a look at the overhead related to jobs, we need to understand how jobs are defined in Databricks Azure.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=8)** Spark itself defines jobs as one or more tasks that's run on node in a distributed compute cluster.
>
> **[0:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=16)** So it's called a Spark job.
>
> **[0:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=18)** So we'll take a look at the overhead related to a Spark job in this section.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=23)** Databricks defines a job as a scheduled Spark job execution.
>
> **[0:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=28)** And we're going to take a look at scheduling Spark jobs as Databricks jobs later in this course.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=35)** So it also relates to a type of cluster which is called a job cluster that spins up and down on the run of the Databricks job.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=45)** It is also related to the API for scripting Databricks jobs.
>
> **[0:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=49)** So we're going to start by looking at Spark jobs and as a review of Spark job execution.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=56)** Let's look at the major steps.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=58)** The first step is to load the data into RDD or higher level objects.
>
> **[1:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=64)** So that each of the nodes can perform operations on them.
>
> **[1:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=68)** The operations can be typical data operations such as join groupBy or filter.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=74)** Once the operations are called, then the cluster DAG or Directed a Cyclic Graph Scheduler.
>
> **[1:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=82)** Will split the graph into stages of tasks and they'll submit each stage as ready.
>
> **[1:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=89)** This will be passed as a task set to the task scheduler, which is in essence, the cluster manager.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=96)** It is set to automatically retry failed or struggling tasks.
>
> **[1:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=101)** This is where the distributed compute really comes in.
>
> **[1:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=104)** And then this is manifested as individual tasks that run on worker nodes.
>
> **[1:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=110)** Workers run these tasks on individual threads and they have a block manager and you can have visibility into all of these different phases of Spark job executions using the tools that are provided with Spark and Databricks Azure.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=126)** So let's take a look at that now.
>
> **[2:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=128)** So here we are in our console.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=130)** And if we go to our variant Spark demo, what I've done is I've created a cut down version of the demonstration notebook.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=138)** So we can just focus on performance.
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=140)** Also, what I've done is I've run these in advance so that we don't have to wait for them to run.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=146)** So the very first one that we're going to work with is the Variant Spark Scaling.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=152)** They can see this is attached to Variant Spark demo.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=155)** And again, to bring this into the workspace, you would go to workspace and you would go to demos and import.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=167)** And you just import it in and attach it and run it and I've already performed those steps.
>
> **[2:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=172)** So you can see that we're working with our hipster index data here and again, I've really condensed this notebook down just to focus on the performance.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=181)** The first section in command one loads of data, and you can see that it took 20 seconds.
>
> **[3:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=187)** And what we've done is we've loaded the input data, the VCF of the genomic sequencer, and we've loaded the label data.
>
> **[3:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=196)** In command two what we've done is we've set up the analysis.
>
> **[3:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=201)** And you may remember from an earlier movie, this is a implementation of a custom wide random forest, which looks at the data to find the genomic variables of the greatest importance based on the analysis done in the machine learning.
>
> **[3:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=215)** And this is where the compute complexity comes in.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=218)** And here we see the results.
>
> **[3:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=220)** And then just because I always liked visualization, I just kept the visualization in here as well.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=225)** And you can see for each of these command blocks, there is a section with Spark jobs.
>
> **[3:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=231)** So if we take a look at the visualization, we can see there's a single job and if we click on View and we click on stages.
>
> **[4:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=240)** We can see here is the execution on the cluster of the individual stages, we can see when it was submitted, most importantly, what is the time.
>
> **[4:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=250)** And so the most typical thing that you would do is you would look at the time in duration, and you look at your higher duration activities.
>
> **[4:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=259)** And this is for the entire job run.
>
> **[4:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=260)** So you can see some of this other stuff is the machine learning execution.
>
> **[4:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=265)** So I'm going to scroll down to the bottom of this, and this is the machine learning.
>
> **[4:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=269)** So we're going to save this for just a second.
>
> **[4:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=271)** We'll come back to this.
>
> **[4:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=273)** So if we scroll up, the heavy computational part of this job took 3.71 minutes and we'll see there are hundreds Spark jobs here.
>
> **[4:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=282)** So if we drill into any one of these jobs, and we click on stages, we can see if we scroll down to one of the stages that took more than a couple seconds, we'll just click on it and we are presented with the DAG visualization which shows that us the individual working of the files.
>
> **[5:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=306)** Here, we can see the overhead, we can see the metrics by executer, we can see the event timelines, we can see the type of activity that is occurring, we can see the storage.
>
> **[5:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=318)** And one really important area I'll call out to you, is of course, Spark is designed to work within memory.
>
> **[5:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=324)** So we have the percentage of data that is available to be cached shown in the storage section, which again, is a common bottleneck around sizing.
>
> **[5:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=334)** If you're not able to cache all of your data, you typically are going to do something with your data, compress it or something or you're going to make your cluster larger.
>
> **[5:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=343)** So we have lots more to do.
>
> **[5:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-spark-job-execution-overhead?u=76281980&t=345)** But this gets us started in looking at some of the information that we can see that's associated with the overhead related to our job.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (3), scroll down (2), scroll up (1)
> **Code Keywords:** let (2), import. (1), this, (1), this. (1)
> **Env Vars:** dag (2), api (1), rdd (1), vcf (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** node (1), find (1), make (1)
> **Code Identifiers:** groupby (1)
> **Versions:** 3.71 (1)
> **Cross-References:** later in (1)

#### Explore optimization control planes
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=0)** - [Instructor] As I've previously mentioned, when sizing on Databricks there are a number of common Control Planes.
>
> **[0:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=7)** And those include optimizations around the data, optimizations around the job, and the activities associated to the job, and optimizations around the cluster.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=19)** So let's take a look at these in the context of our example.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=23)** So in the world of data, the most common optimizations that I see in working with customers on Spark are compressing the input data.
>
> **[0:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=33)** A number of compression formats are supported.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=36)** We'll be working with a compression format called EZ-2.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=40)** Partitioning the data, splitting input data files into files that are of smaller size so they can be distributed more quickly and easily.
>
> **[0:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=50)** This strategy I've been using in combination with the next one which is converting to a format that is more optimized for the type of compute that you're performing.
>
> **[1:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=62)** So in my particular use case where we evolved to was we started with basically CSV or text files.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=69)** And we then moved to compressing them, we then moved to converting them to .parquet which is a columnar storage format.
>
> **[1:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=79)** And will be computed on more efficiently for this type of algorithm.
>
> **[1:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=84)** And then we partition those .parquet files.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=87)** So those workload steps are important when you're moving from experiments to pipelines as we move through this course.
>
> **[1:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=95)** Also there's a new type of facility with the version of Databricks that we're working with called Databricks Delta we'll also be exploring that as a Data Optimization.
>
> **[1:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=106)** The important thing is when you're itterating through this process it's very common to test using these various types of Optimizations.
>
> **[1:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=115)** And you sometimes have to change the cluster resources, depending on the Optimization.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=121)** So they kind of go hand in hand.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=123)** The next level of Optimization is around the job.
>
> **[2:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=127)** So a couple of common areas that I've worked with with my customers is first the Spark configuration itself.
>
> **[2:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=135)** As your Databricks has a default, for example the number of executors and the size of memory allocated to each executor is set by default, and this is an advanced level of tuning, but again particularly with machine learning workloads this is something that I've had to help my customers with.
>
> **[2:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=153)** So you can set in the Spark configuration, the Spark executor count, and the Spark executor size and many other settings around Spark itself.
>
> **[2:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=163)** And consult the documentation if this is your situation.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=167)** Another Optimization is the Algorithm, particularly in the world of machine learning, you may remember from our initial example with variant Spark that we used both the Algorithm that was created at CSIRO in Australia called Variant Spark but we also used a comparative algorithm called Hale that was created by a different team.
>
> **[3:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=189)** And the tuning along with the selection of the Algorithm can significantly impact performance.
>
> **[3:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=195)** For example, in the case of variant Spark we're passing in our demo notebook one parameter.
>
> **[3:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=202)** And that's the number of trees that we're asking our Random Forest machine learning algorithm to create.
>
> **[3:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=208)** Now of course when you're working with Random Forest, there are other parameters that you can set.
>
> **[3:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=213)** Such as the depth of the tree so the number of layers of the tree if you will.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=218)** And of course, that's computationally intensive because it's an end dimensional computation.
>
> **[3:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=224)** So this is called Hyperparameter selection and one of the capabilities of a distributed cluster is to run different configurations with different parameter values.
>
> **[3:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=236)** And this is well documented in the Databricks documentation with lots of great examples some of which we iterated on for our Particular Use case so there's lots of different tuning that you can do around the Hyperparameters.
>
> **[4:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=249)** Now in the areas of the Cluster itself, there are four common control planes within that cluster.
>
> **[4:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=256)** The first is Compute, and of course as your Databricks provides you with managed, distributed, compute via Manage Apachespark.
>
> **[4:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=264)** Now Optimizations that I've worked with with my customers are to add memory to the cluster because of course you want all the data to be cached into memory and in the previous movie I showed you how to actually verify that through the logs on a job run to add CPUs to increase the number of nodes and depending on the type of workload being run, potentially some of the machine learning workloads will benefit from adding GPUs, in particular those that are using TensorFlow for example.
>
> **[4:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=290)** In terms of storage, by default you're working with the Databricks file system, and the Azure implementation, we have the ability to work with this new Databricks Delta which we'll be covering in subsequent movies and also as your Data Lake.
>
> **[5:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=303)** The Notebook interface itself we work with the Databricks notebook, we would have the ability to scale that as well if we were working in a distributed environment.
>
> **[5:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=312)** We could add memory, CPU, GPU to the driver node.
>
> **[5:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=316)** And the configuration, as was mentioned around the job we can set the Spark configuration at the level of a job or we can set the Spark configuration, as you may remember from the previous movie, at the level of the cluster.
>
> **[5:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/explore-optimization-control-planes?u=76281980&t=329)** And for some of my customer workloads, we have overridden the default Spark configuration at the level of the cluster because of the type of workloads that were being run on the particular cluster.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), let (1), interface (1)
> **Env Vars:** csv (1), csiro (1), cpu (1), gpu (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** node (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Optimize a cluster and job
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=0)** - [Instructor] Our upsize cluster is now available.
>
> **[0:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=2)** It has four notebooks attached for testing, and one library, a variant spark library, and see we can go from four to 12 workers of the size that will auto-scale, and now it terminates after 360 minutes of activity.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=17)** The notebook that we're working with next is available from this location, and I've already uploaded it and attached it and started running it.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=29)** We're going to go into that notebook, and take a look at some performance overhead.
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=34)** Roughly we have three sections, this is the load of the files, this is run of the machine learning algorithm, and this is the visualization.
>
> **[0:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=42)** You can see this is still in process.
>
> **[0:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=44)** The difference here is we did two optimizations, we made the cluster potentially bigger with the number of nodes, and we changed the data by using bz2 or zipped input file.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=58)** If we click on clusters, we can see that it's running.
>
> **[1:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=61)** If this were to go into an auto-scaling mode, because of the computational overhead, then this state would change to auto-scaling, and the number of nodes would go up or down, depending on the activity.
>
> **[1:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=73)** Let's go back into the notebook, and we'll look at the more interesting area here which is the machine learning.
>
> **[1:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=82)** While this is running, we can see the various Spark jobs.
>
> **[1:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=88)** Again, it is dynamic, so you can see that the numbers are changing here, and if we click on one of the jobs, we can see that in this particular job, we're working with a text file and performing these operations, and we're building the trees, which is the computationally intense part of this algorithm.
>
> **[1:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=107)** We can see the time, we can drill in, we can see the really internal details.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=113)** And the reason you want to see something like this is particularly in this kind of a case where you're working with an algorithm that is domain specific, this was written by the Bioinformatics team, who has a lot of experience with computational biology, however, their primary area of work is biology and secondary is computation, so occasionally they could run into bottlenecks or sub-optimal ways to do this analysis.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=138)** If you need to find that needle in the haystack, these visualization tools can help you to do that.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=144)** We also want to look at storage, and of course, you're looking for this number, this 100% because this is key in sizing the cluster properly, making sure that all the data can be put into RDDs, because you want Sparks operations to run from the memory of the worker nodes.
>
> **[2:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=160)** If you have an under-sized cluster, you're really not going to be in an optimal state.
>
> **[2:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=164)** You can also go all the way to the level of the Executors, and you can see the Executors that are running.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=171)** Now once a process is complete, then you will no longer have access to this information unless you hit the archive, but while it's still running, you can go ahead and you can actually get all the way to the level of an individual thread, so you can see if there's anything blocking.
>
> **[3:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=187)** It's really super useful to find bottlenecks in the workflow.
>
> **[3:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=192)** This has completed, and it took 2.74 minutes.
>
> **[3:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=196)** From a high level, you want your algorithm to complete in a timely manner, so as quickly as you need, with the amount of resource spend, the amount of nodes, the amount of underlying virtual machines that cost x amount per execution, and of course you want correct results.
>
> **[3:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=214)** This is just a quick way to get a sense of do the results appear to be accurate or correct.
>
> **[3:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=220)** Obviously, in bioinformatics there's going to be many additional checks to make sure that the results are valid and repeatable, but this is really more focusing on the performance aspect.
>
> **[3:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=233)** What we did here, is we made the cluster bigger, and we made the input files smaller, and we did get a good result.
>
> **[4:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=241)** If I remember correctly from previous run of this with uncompressed on a standard size cluster, it took about four minutes.
>
> **[4:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=248)** It might seem trivial, and in data of this size, this is a very small difference, but remember, the process.
>
> **[4:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/optimize-a-cluster-and-job?u=76281980&t=255)** We start with very tiny amounts of data, we move to small, medium, large and huge, so we make these incremental performance gains by tuning across the different control plains and then we scale the data up, which is what we're going to work on in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Code Keywords:** let (1), super (1)
> **UI Navigation:** click on (2)
> **Versions:** 2.74 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Run a production-size job
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=0)** - [Instructor] So in this next section, we are scaling our workloads even bigger.
>
> **[0:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=4)** And I've started two copies of the notebook with even larger files, so you can see now our cluster is in the resizing state.
>
> **[0:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=13)** So if I go into the two workloads, I have both the big workload and then I have the compressed big workload, and you'll remember this is around 800 megs and then this is one-hundredth of that.
>
> **[0:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=26)** So if we go in and take a look at this, we can see that this is loaded.
>
> **[0:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=30)** So it's the hipster_genomewide_001_1000.vcf.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=35)** And here, we can see the size, so it's significantly bigger than the other files we've been working with.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=40)** This is uncompressed.
>
> **[0:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=42)** And here, you can see that the Spark jobs are running.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=45)** And then if we go back to the cluster, we can see that we have a compressed version of this as well.
>
> **[0:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=57)** So this is the hipster_genomewide_001_1000.vcf.bz2 and you can see how much smaller that is in size and this is running as well.
>
> **[1:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=68)** So this starts to get into, in kind of a small way, the complexity of the real world while you're running multiple sized workloads on clusters.
>
> **[1:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=79)** So tuning is really a hard problem.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=81)** Now, to that end, Databricks is providing lots of guidance as well as reference notebooks around, for example, machine learning, hyper parameter tuning.
>
> **[1:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=93)** And you really should consult that when you're moving into production.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=96)** But you know, I wanted to show you kind of a slice of the real world based on the work that, you know, I had done with the team out at CSI Areal.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=105)** So let's take a look at the overhead here that's running on our compressed version.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=113)** And you can see again we've got our Spark jobs building trees.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=117)** And inside of here, we can take a look at the event timeline and in the event timeline, we can look for, if our resources are being utilized.
>
> **[2:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=127)** So our executors are our nodes.
>
> **[2:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=129)** So you can see here, we've got three executors, then we have our DAG visualization again.
>
> **[2:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=134)** And we can drill in to our building trees, which we would expect is the computational-intense part of our workload.
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=141)** So now, we're drilling into this visualization and we can see we're literally at this point.
>
> **[2:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=148)** Again, very, very precise and useful in terms of the visualization.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=152)** And we can take a look at the min, 25th percentile, median, 75th percentile, and max for the duration of tasks for their garbage collecting time.
>
> **[2:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=163)** The input size helps us with cluster sizing.
>
> **[2:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=166)** And we can look at aggregated metrics to see if we have failed tasks, killed tasks, and succeeded tasks.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=175)** We can drill down to the level of standard out and standard error if we're having errors and see what's causing them.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=181)** Also, we have an event timeline at this level of granularity and we can see at a very, very detailed level, what types of actions are occurring, the scheduler delay, the task deserialization time, the executor computing time.
>
> **[3:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=197)** So again, it can help us to pinpoint where we can do our optimizations through this rich set of visualizations around the job executions.
>
> **[3:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=207)** Again, I'll point to a key metric 'cause I found it to be super useful, is storage.
>
> **[3:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=212)** Are we 100% cached?
>
> **[3:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=213)** That's always a good sign 'cause if we're spilling onto disks, then we definitely need to do something with the size of our data and/or the size of our cluster.
>
> **[3:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=222)** We also can verify by our environment.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=225)** So we can make sure that our configuration is set up correctly.
>
> **[3:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=229)** These are the default properties.
>
> **[3:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=230)** I didn't make any changes to them.
>
> **[3:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=232)** But you can see that there are a lot of configurable properties available through Spark.
>
> **[3:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=238)** Ones that I have worked with on customers is the number and size of executors depending on what algorithm we're running and particularly for machine learning.
>
> **[4:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=248)** Let me scroll down and find that.
>
> **[4:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=251)** This is going to be around both the driver, so that's basically the traffic cop, if you will, and then the executors.
>
> **[4:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=259)** Here we go.
>
> **[4:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=261)** So the executor memory is one that I've changed frequently for different workloads.
>
> **[4:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=267)** And again, lots and lots of control here.
>
> **[4:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=270)** If you are running Spark SQL, then you would see Spark SQL output here.
>
> **[4:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=274)** And you can take a look, for example, at the detail around the Spark SQL and you can see how that's being executed, again, all the way down to the logical plan.
>
> **[4:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=285)** So for those of us that come out of the relational database world, this is a query plan, but it's a query plan for a distributed system.
>
> **[4:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=293)** So let's take a look and see how our progress is going here.
>
> **[4:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=295)** We're in the compressed version, we're still going.
>
> **[4:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=299)** Let's look back at our cluster.
>
> **[5:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=301)** And we're still in the resizing mode.
>
> **[5:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=304)** Okay, and at our cluster, we also have some ability to have visibility into the overhead on the cluster, so we're looking at the job.
>
> **[5:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=313)** We can look at the Spark UI here and we can see, again, as an aggregate for the two different jobs that we have running.
>
> **[5:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=322)** You'll remember we have it on the compressed data and the uncompressed data.
>
> **[5:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=325)** We can see where the overhead is occurring, so this is an aggregate, if you will.
>
> **[5:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=329)** So for example, we can look at the storage here.
>
> **[5:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=332)** Again, always looking for that 100%.
>
> **[5:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=334)** We can look at driver logs for the cluster and we can look at the Spark Cluster UI for the master node.
>
> **[5:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=342)** So here, again, we can see information about the workers, the running applications, the completed applications.
>
> **[5:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=349)** You can see the memory per executor.
>
> **[5:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=350)** Very, very important to set that correctly for computational-intense workloads.
>
> **[5:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=355)** And we can drill into the workers here.
>
> **[5:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=357)** If we want to, we can go all the way down to standard out.
>
> **[6:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=362)** And we can actually see into... And we've got some juicy allocation failures here, which would point to tuning that we need to do as well.
>
> **[6:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=370)** Again, lots and lots of ways to see into what is happening with the various integrated logs and visualizations.
>
> **[6:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=379)** So let's go back.
>
> **[6:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=381)** We're idle, so it looks like we finished.
>
> **[6:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=383)** So let's look at our scaling_big and our key metric, which is time.
>
> **[6:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=389)** This took 6.88 minutes.
>
> **[6:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=391)** And now, let's go back to our compressed.
>
> **[6:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=398)** And this took 7.26.
>
> **[6:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=400)** And again, it's interesting to see that you would expect the compressed version would run faster.
>
> **[6:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=407)** But because there are so many control planes, you have to validate your assumptions through actual testing.
>
> **[6:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=414)** And again, it's interesting to see in different environments how the different optimizations do impact your workload.
>
> **[7:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=424)** And just to summarize the scaling, you can see now that this job is currently using eight nodes.
>
> **[7:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=431)** At its highest point, it was up to 10.
>
> **[7:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=433)** And now, because the job has completed, it's auto-scaling down, so it will auto-scale back down to the minimum, which you might remember that I set to a higher default of five.
>
> **[7:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/run-a-production-size-job?u=76281980&t=444)** So this will automatically scale up and down to meet the needs of your particular workload.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), for, (1), super (1)
> **Env Vars:** sql (3), csi (1), dag (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Analogies:** for example (3)
> **Versions:** 6.88 (1), 7.26 (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** scaling_big (1)


### 4. Data Pipelines with Azure Databricks

#### Use Databricks jobs and role-based control
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=0)** - [Instructor] In this section, we're going to take a look at some of the advanced features of Azure Databricks, and I'm starting with their pricing page here.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=8)** So if I scroll down, we are working with the databricks for data analytics workloads, and we have been looking at the standard features.
>
> **[0:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=18)** Now we're going to look at features available in the premium plan, so you'll notice that those are role based access control for notebooks, clusters, jobs and tables, JDBC, ODBC endpoint authentication, R studio integration, Delta public preview, and audit logs which are marked as of this recording as coming soon.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=38)** So we're first going to take a look at jobs, now you'll notice that regular jobs are in the standard edition, but role based access control is in the premium edition, so let's jump over to our cluster.
>
> **[0:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=50)** The first way that we see job in databricks is in the type of cluster.
>
> **[0:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=54)** You can see that we've been working to date with interactive clusters, those that are running and they can set to be terminated on interactivity, or they can set to be long running.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=66)** There is a second type of cluster called a job cluster.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=69)** Now for the purposes of testing, I set up some job clusters in advance, so your screen might look a little bit different.
>
> **[1:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=76)** Now, as we're working with jobs, we can set role based access control because this has been set up in this premium demo account, and I'll show you what that looks like.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=87)** So I click over here on my user, and I go over to admin console, and I go into access control, you can see that the workspace access control has been enabled for this account, and importantly the cluster and job access control has been enabled.
>
> **[1:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=104)** So let's take a look at jobs per se, and then we'll look at the access control as well.
>
> **[1:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=109)** So over in jobs, we have one job running right now, and this is just basically a quick test, and if I click into it, you can see that I set up the run of a notebook, and here I can edit the parameters, and I don't have any custom parameters.
>
> **[2:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=125)** I can edit the dependent libraries.
>
> **[2:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=127)** Here is the cluster configuration which I can also edit.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=130)** I can edit the schedules, this is set to run hourly, and importantly, regarding the permissions, they're available if enabled for the account in this section here.
>
> **[2:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=142)** So I click edit, and you can see that I have the ability to set permissions on this object, so, is owner, can view, can manage or run, and of course, this could be integrated with active directory for an azure subscription as well.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=155)** So I'll say cancel, and here we can view the runs if we want to, so again, this is similar to what we were doing in the previous section, looking at the performance, but this is as we're moving to more of a production situation.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=169)** So let's just set up another job to show how this works, so we click create job, and then we can select a notebook, a jar file or configure a sparks submit command, and that's an alternative to using a notebook, so we'll select a notebook, and we'll go into our demos, and we'll select our quick start again, and say okay, and then on our schedule, we can edit our schedule, this is basically just generating a cron job, or we can just run this manually which we'll do in a minute.
>
> **[3:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=202)** So we're going to say cancel, and then, we're going to go ahead and change this to manual, just so we can see what a job run looks like, and then we're going to go ahead and go back to the jobs, click on the job and then we're going to run it.
>
> **[3:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=220)** Now notice it turns green, and if we go back to our cluster page, and we refresh, you'll see that we have a new job run pending.
>
> **[3:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=229)** So what happens with jobs is these resources for compute are spun up just for the job duration, so they only live for the duration of the job, so that's how they're different from interactive clusters.
>
> **[4:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=243)** So you can see this is pending, it's scheduled to be spun up, once it is spun up, then just like with an interactive cluster, while the job is running, we can go ahead and look at the spark UI, the logs, the so on and so forth.
>
> **[4:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=256)** Now in addition to using the web interface to work with jobs, more commonly, my customers will move to the databricks API at this point, and again, this is a premium feature that you would enable the API and then you can script the running of jobs, so this job will take a couple minutes to run and I'll come back when it's completed.
>
> **[4:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=278)** Now we can see that this scheduled job run is running, and we have nine nodes, and we can now click on those, and we can see that here is our quick start, and it took six minutes, succeeded, here's the job ID, the run ID, and other information about the size of the cluster and the parameters.
>
> **[5:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=305)** We can also see in the jobs interface that this succeeded, and if we click on it, we have access to the spark UI and logs if we want to drill in.
>
> **[5:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=318)** Again, you can see how nicely these interfaces are integrated into the databricks azure interface.
>
> **[5:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-jobs-and-role-based-control?u=76281980&t=325)** So we can see that this is the historical spark UI and has all of our job ID information, the duration, the description, the resources, so on and so forth.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), public (1)
> **Prerequisites:** set up (4), configure (1)
> **Env Vars:** api (2), jdbc (1), odbc (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), just like (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Use Databricks Runtime ML
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=0)** - So today, in this course, we've been focusing on the notebook as the driving interface for our workflows.
>
> **[0:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=7)** We've been running notebooks, which have been training machine learning models for most of our workflows, although that's not required, there are Spark workflows that don't include machine learning models.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=19)** In some cases, we've been creating streams, and we haven't got yet to the point of serving models.
>
> **[0:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=25)** Now, in the previous section, we looked at scaling machine learning models that we wrote.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=31)** Of course, distributed machine learning is really a key workload for Spark and Databricks.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=36)** So we're going to dive a little bit deeper into very complex machine learning workloads.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=43)** So as of this recording, Databricks offers the Databricks runtime for machine learning as a cluster type, and what this is is an environment for machine learning and data science.
>
> **[0:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=55)** And I would add the word advanced.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=56)** Now this is an area of active development on the platform and what I'm going to be showing you here is in beta, so it may have some feature changes when you actually watch it, so make sure to check the documentation.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=69)** Some of the key libraries that are included with the Databricks runtime for ML are TensorFlow, Keras, and XGBoost.
>
> **[1:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=76)** And also, a library that was developed at Uber called Horovod, which is open source and it's for distributed TensorFlow training.
>
> **[1:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=86)** So what I've done, because it takes a few minutes to set up a cluster is I've already created an ML cluster, but I'll show you what that process looks like.
>
> **[1:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=93)** So you create the cluster and in the cluster name, we'll just call it demo-ml, and then, it's a standard cluster.
>
> **[1:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=100)** And then you'll see here that the one I'm using for this recording is a version 5.0 ML beta, which includes Spark 2.4 and Scala 2.1.1.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=111)** There are also a couple other betas here.
>
> **[1:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=115)** There's a 5.0 ML GPU beta, and then there are 4.1 beta and 4.1 ML beta with GPU.
>
> **[2:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=125)** And as you might remember from a previous movie, the account that I'm working with for this recording doesn't have access to GPUs, so if I were to set this up, this would give me an error because I wouldn't have any access to GPU-enabled instances.
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=140)** So in any case, let's look at my cluster.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=144)** So you can see there it is, Python version three.
>
> **[2:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=147)** And here's our driver type and our workers and again, we're set to auto scaling, auto termination, and you'll notice, in the Spark config, we have Spark Databricks delta preview enabled, true.
>
> **[2:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=160)** And we have the environmental variable for Python set up.
>
> **[2:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=165)** So we'll be working with this ML cluster in subsequent movies.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-runtime-ml?u=76281980&t=169)** And we'll be showing some of these new features.

> [!info]- Semantic Content
>
> **Versions:** 4.1 (2), version 5 (1), 2.4 (1), 2.1.1 (1), 5.0 (1)
> **Code Keywords:** interface (1), type, (1), case, (1), let (1)
> **CLI Commands:** python (2), make (1)
> **Env Vars:** gpu (3)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** set up (2)
> **Documentation:** the documentation (1)
> **Best Practices:** make sure to (1)

#### Understand ML Pipelines API
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=0)** - [Instructor] As we work with a product, I have found that a lot of things are called ML and I wanted to clarify terms.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=6)** So some are associated to Spark and some are Databricks.
>
> **[0:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=10)** So Spark has what are called MLlib, that's an API, to simply machine learning on Spark.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=17)** So it contains algorithms and pipelines as you see below, so MLlib algorithms called ML algorithms and those are algorithms for classification, regression, typical machine learning problems.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=29)** So they would be something like decision trees for example.
>
> **[0:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=32)** Spark MLlib pipelines, which we're going to be exploring next, is an API to create and tune models and it supports hyper-parameter optimization and many other features to work with machine learning models.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=45)** So in the Spark world we have MLlib, MLlib algorithms, which are called ML algorithms, and ML pipelines.
>
> **[0:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=52)** In the Databricks world, we have the Databricks runtime ML which we just saw in the previous movie.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=58)** That is a cluster type which supports third-party machine learning libraries, so non-Spark, so TensorFlow and some of the other things.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=66)** So we're going to be working with a Databricks runtime ML cluster.
>
> **[1:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=71)** This next demonstration, we're going to use Spark ML so we wouldn't technically need a runtime ML cluster, but as you'll see, it's typical when you have advanced machine learning to work with Spark MLlib algorithms, such as decision trees for example, and then third-party algorithms for ML like TensorFlow and that's kind of where we're headed here so that's why we're working with Databricks runtime ML cluster.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=96)** And then there's a new capability that we'll get to later in this section called Databricks ML flow and this is a set of services to optimize ML workloads.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=105)** So I know it's a lot of terms.
>
> **[1:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=107)** That's actually why I pulled this together for you 'cause I was confused myself.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=111)** So just kind of keep it in two sections, the Spark ML objects and the Databricks ML objects.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=117)** Now we're going to explore the pipelines next so let's take a look at that.
>
> **[2:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=120)** So the concept of a Spark ML pipeline is that you have two different capabilities.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=126)** You have an estimator and you have a transformer.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=130)** And you call the estimator by calling fit on the pipeline and you call the transformer by calling transform.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=138)** Now in the example that we're going to look at, we're going to be working with binary classification, but this is an example with using text.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=146)** So you can see that you got text going in, it's tokenized, turned into words by the estimator, then there's a hashing action, and then this is turned into feature vectors and we're working logic regression for prediction here and this produces a model.
>
> **[2:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=160)** Then the transformer will use a tokenizer, a hashing tokenizer function, and then produce a logic regression model.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=169)** I really recommend that you consult the documentation.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=171)** It's really well-explained and we'll see an example in a second.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=175)** So let me take you over to the docs so you can see that.
>
> **[2:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=178)** So here in the Spark programming guide, you can see this is the discussion of ML pipelines.
>
> **[3:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=184)** And as it says here, it gives a uniform set of high-level APIs built on top of dataframes that will help us to create and tune practical machine learning pipelines.
>
> **[3:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=193)** They're really used very commonly.
>
> **[3:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=196)** And then it goes down and explains the various concepts that I just touched on and that we'll see in a Notebook in a minute here.
>
> **[3:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=202)** So it's designed to work on dataframes and it's inspired by scikit-learn principles basically.
>
> **[3:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=209)** And again just to review this 'cause I know this is probably new for a lot of you listening, transformer is an algorithm which can transform one dataframe into another.
>
> **[3:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=217)** So an ML model is a transformer which transforms a dataframe with features into a dataframe with predictions.
>
> **[3:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=223)** And then the estimator is an algorithm which can be fit on a dataframe to produce a transformer.
>
> **[3:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=229)** A learning algorithm is an estimator which trains on a dataframe and produces a model.
>
> **[3:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=234)** The pipeline chains the transformers and estimators together and the parameter is a common API now that is available for working with the transformers and estimators.
>
> **[4:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-ml-pipelines-api?u=76281980&t=246)** So this is a pretty well-written documentation and in combination with the Notebook that I'm going to show coming up in a minute, I think this gets us starting working with the pipelining concepts.

> [!info]- Semantic Content
>
> **Definitions:** is an  (5), is a  (5)
> **Code Keywords:** let (2), function (1)
> **Env Vars:** api (3)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** later in (1), coming up (1)
> **Documentation:** the documentation (1), the docs (1)
> **Speakers:** - [instructor] (1)

#### Use ML Pipelines API
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=0)** - [Instructor] Here we are in our ml-cluster and we have two notebooks attached.
>
> **[0:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=5)** So we're going to work first with the binary classification.
>
> **[0:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=9)** Now, I uploaded an attached and run everything just to make it simpler when we work with it because it does take a little bit of time to run.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=17)** So you'll notice that this is an example and it shows the Pipelines API and it's using binary classification.
>
> **[0:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=25)** The idea is, an email spam or not spam, for example.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=29)** So in this case, we're going to work with UCI public data, and it's about people and their incomes.
>
> **[0:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=36)** So this is their dataset here.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=38)** So we're going to load the data into the file system and then we're going to create a table using SQL, so it just has lots of features and it has headers.
>
> **[0:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=49)** So here, we'll see that in command eight, we can just take a look at what are the columns, so that's the schema and we can display it.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=59)** So we're going to try out different algorithms.
>
> **[1:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=62)** So we're going to need to pre-process data, so that we can compute against it because not all the data is numeric, so we're going to have to convert the categorical variables and the dataset into numerical variables.
>
> **[1:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=71)** So we can do this with category indexing.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=74)** That's assigning a numeric value to each category and it's good if you have ordering in your categories.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=80)** Or one-hot encoding.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=81)** This converts categories into binary vectors with at most one non-zero value.
>
> **[1:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=86)** And here, they're showing examples, blue, green, red.
>
> **[1:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=89)** So we have ordinal variables here, preschool, doctorate, and nominal variables like relationships, wife-husband, so on and so forth.
>
> **[1:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=97)** We're going to use one-hot encoding to convert all categorical variables into binary vectors.
>
> **[1:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=103)** We're going to use a combination of StringIndexer and OneHotEncoderEstimator to do the conversion, and this is going to give us a SparseVector.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=111)** And we have more than one stage of feature transformations.
>
> **[1:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=114)** We're going to start using the pipeline here.
>
> **[1:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=116)** You'll remember we had the transformers and the estimators in the pipeline.
>
> **[2:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=120)** So you can see in command 11, we're working with the pipeline on line one.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=126)** And then on line two, we're using the OneHotEncoderEstimator, the StringIndexer, and the VectorAssembler.
>
> **[2:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=132)** So then we're setting the columns and we're setting the stage array in four.
>
> **[2:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=137)** And then five, I have a loop here basically and we're looping through.
>
> **[2:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=142)** In seven, we're using our StringIndexer.
>
> **[2:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=145)** In 10, we're using our encoder.
>
> **[2:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=148)** And then in 12, we're adding stages.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=152)** So basically, as I said, we're indexing the categorical columns using the StringIndexer and then converting the index categories into one-hot encoded variables.
>
> **[2:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=161)** So what this is doing is basically it's making it simpler to do common transformation activities or preparation activities with the API.
>
> **[2:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=170)** So then we're in command 13, we're going to convert the label into label indices for the StringIndexer.
>
> **[2:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=176)** And then in 14 and 15, we're going to use the VectorAssembler to combine all the features into a single column vector.
>
> **[3:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=183)** That's the numeric and the one-hot encoded binary vector columns.
>
> **[3:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=186)** And then we're going to run our pipeline.
>
> **[3:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=188)** So again, this is really what we want to look at here.
>
> **[3:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=190)** So we can see on line two, we've got our pipeline calling the stages.
>
> **[3:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=195)** And then notice the comments there on three, four, and five where fit computes the feature statistics and transform transforms the features.
>
> **[3:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=204)** So we're calling fit on six and we are transforming on seven.
>
> **[3:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=209)** And then we're keeping the relevant columns, so prepping our data.
>
> **[3:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=213)** So now, we're splitting our data into test and training sets and we're going to fit and evaluate the models.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=218)** We're going to try out some of the binary classification algorithms available on the Pipelines API.
>
> **[3:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=224)** So we're going to take a look at decision trees and random forests.
>
> **[3:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=229)** So typically, you're going to create a model with the training set and then you're going to tune the parameters with a ParamGrid and five-fold cross validation.
>
> **[3:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=237)** And again, this is why you use Spark because this tuning is performed much faster in a distributed fashion than if you have a non-distributed compute.
>
> **[4:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=247)** So we're going to use the binary classification evaluator to evaluate the models and the area under the ROC as the default metric or the area under the curve.
>
> **[4:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=256)** So here's logistic regression.
>
> **[4:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=259)** And we are in command 21, calling fit on the training data on line seven.
>
> **[4:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=266)** And then in 22, we're calling transform, which is making predictions on the test data.
>
> **[4:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=273)** And then scrolling down here, we are going to take a look at what we got by calling select.
>
> **[4:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=281)** And you can see here, for example, we get an array returned for a certain age.
>
> **[4:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=288)** So we can view the data.
>
> **[4:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=290)** Of course, you typically also use visualization at this point, but this is just focusing on the compute in this notebook.
>
> **[4:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=296)** We can use the binary classification evaluator to evaluate the model.
>
> **[5:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=300)** So you select the columns and the label column and you call evaluate.
>
> **[5:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=306)** And we can see that we got a 90, which, okay, that's pretty good.
>
> **[5:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=311)** So we're going with the metric, which is the default, which is the area under the ROC.
>
> **[5:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=317)** We can also have the area under PR and we can set that.
>
> **[5:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=321)** Now, we're going to do tuning with the parameter grid builder and the cross validator.
>
> **[5:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=325)** And if you don't know which parameters you can tune, then you can call explainParams and then this'll tell you which parameters are there and what are their definitions.
>
> **[5:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=339)** So here, we're building our grid.
>
> **[5:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=341)** And we're calling fit in command 33, line five.
>
> **[5:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=345)** Notice it says this will take a fair amount of time because of the models that that we're creating and testing.
>
> **[5:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=350)** 68 Spark jobs takes two minutes on this ml-cluster.
>
> **[5:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=354)** And then in command 34, we're using our test set to measure the accuracy.
>
> **[6:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=360)** In 35, we're using the best model found, so we're calling evaluate.
>
> **[6:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=366)** And we can also get the model's weights and features by just calling bestModel.intercept.
>
> **[6:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=373)** And here, we're getting the weights.
>
> **[6:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=375)** And in command 39, we're viewing the best models predictions and probabilities of each prediction class.
>
> **[6:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=383)** And here, we're going to try out decision trees.
>
> **[6:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=387)** So we're calling fit on line seven.
>
> **[6:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=390)** We're getting the number of nodes as well as the depth, so depth of three.
>
> **[6:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=395)** On command 44, we're calling transform.
>
> **[6:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=398)** We're printing the schema.
>
> **[6:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=400)** And again, I'm going fast 'cause we're doing the same thing with a different algorithm.
>
> **[6:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=404)** We're viewing the predictions.
>
> **[6:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=407)** We're using the binary classification evaluator to evaluate and we get a 73, which is not as good, of course.
>
> **[6:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=415)** So entropy and Gini coefficient are the supported measures of impurity for decision trees, and you can set that.
>
> **[7:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=422)** Now, we're going to try and tune this model.
>
> **[7:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=424)** Same thing again, so I'm going to just kind of skip through this fast.
>
> **[7:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=428)** We're going to call transform, we're going to call evaluate.
>
> **[7:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=430)** 79, so again, it's not looking as good here.
>
> **[7:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=434)** And then we're going to take a look at random forests.
>
> **[7:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=438)** So random forests are ensembles of decision trees.
>
> **[7:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=441)** We're doing the same thing again.
>
> **[7:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=444)** Same thing again.
>
> **[7:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=445)** We're evaluating with binary classification evaluator.
>
> **[7:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=449)** We get an 88.
>
> **[7:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=450)** So you can see we had a 90, we had something lower, and then we had 88.
>
> **[7:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=454)** Now, we're going to tune with the parameter grid builder and the cross validator.
>
> **[7:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=460)** We get an 89, so we got one more point, which is good.
>
> **[7:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=465)** And random forest gives us the best area under ROC.
>
> **[7:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=469)** We're going to use the best model obtained from random forest for deployment and we're going to use it to generate predictions.
>
> **[7:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=475)** So notice, we just called bestModel here and then we generate predictions by calling transform.
>
> **[8:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=481)** And we're at the level of 90 'cause that's meeting our business need apparently.
>
> **[8:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=485)** And then we're going to take a look at the predictions group by age and we're going to use SQL now, so we can get kind of a spot check on this and see if it looks logical.
>
> **[8:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=497)** And again, of course, you could do some sort of graphing just by clicking it, which is great.
>
> **[8:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=502)** And the same thing here.
>
> **[8:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-ml-pipelines-api?u=76281980&t=504)** So this goes through the standard sort of process and showcases what the work has been done in the ML Pipeline API to make it simpler and use less code to do common tasks around the machine learning lifecycle.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), roc (3), sql (2), uci (1)
> **Code Keywords:** case, (1), public (1), default, (1), class. (1)
> **Code Identifiers:** bestmodel (2), explainparams (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Use distributed ML training
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=0)** - [Instructor] We've been looking at relatively common use cases on ML pipelines for Spark with manual pipelines and Spark ML pipelines, and I think it's fun to look at what for most of us will be the future, and this is around distributed TensorFlow, which is a deep neural network, the most popular library, open sourced by Google, with a new library called Horovod and this is open sourced from Uber.
>
> **[0:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=25)** So, to understand the class of problems that this is designed to solve you really want to put your future hat on.
>
> **[0:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=32)** Uber is using this to process all of their massive amounts of data from their worldwide distributed driver network and companies like Google and Facebook are using it as well.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=43)** So, this is really at the highest volumes of data, the most complex compute, but as I've mentioned, I've been working in the world of genomics and I'm starting to applications from some of these companies be applicable in other domains, such as genomics.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=59)** So, we're going to take a look.
>
> **[1:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=61)** Now, one thing about this, you'll see in the documentation this is very early work.
>
> **[1:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=65)** It's in the alpha stages.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=66)** So, it will probably be in a little bit different state, and you're going to want to look at the documentation.
>
> **[1:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=70)** So, let's start with that.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=74)** So, here is the Azure Databricks documentation about the HorovodEstimator, Distributed Deep Learning with Horovod and Spark, and there is a notebook that we're going to look at.
>
> **[1:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=83)** But I do want to call out the note here.
>
> **[1:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=86)** The Estimator API is experimental and subject to change.
>
> **[1:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=89)** So, if this is an area that you want to work in, do work with it, and communicate with Databricks.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=94)** They want to hear about this.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=96)** Also, there's a great presentation up on SlideShare that has some links to some technical white papers that I recommend that you also read, so you can understand the concepts behind this, and in particular there's something called all reduce that's really, really important in understanding what it's doing.
>
> **[1:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=114)** So, let's now jump over to the implementation.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=117)** So, working with our ML cluster which is required for this, we have an example notebook, which is the HorovodEstimator example notebook sample, and again, I've run it because of the time.
>
> **[2:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=128)** So, we'll just go through it.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=130)** So, you can see that the notebook performs distributed fitting of a fully connected deep neural network on the MNIST, which is the handwritten digits zero to nine in a Spark DataFrame.
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=140)** The model training example is adapted from Uber's TensorFlow MNIST estimator example script which is on GitHub.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=146)** The notebook runs without code changes on CPU or GPU enabled Spark clusters of two or more machines and supports multi-GPU training, and that is really typical with TensorFlow and distributed TensorFlow.
>
> **[2:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=159)** Again, that's why I ran this in advance, 'cause you will remember that our cluster does not have GPUs and you'll have to use the Databricks Runtime ML, which we are using.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=167)** So, it's a Python notebook.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=169)** So, we start and do our imports in command two here, and you'll notice that on line four we're working with Horovod for TensorFlow.
>
> **[2:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=178)** In line nine, we're working with the HorovodEstimator, and again, this is an extension really of what we looked at in the previous movie which is the pipeline's API, and you'll remember that there is estimator concept in the pipeline's API.
>
> **[3:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=192)** This is just a massively distributed estimator that can run on optimized hardware such as GPUs.
>
> **[3:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=199)** You can see that command three describes command four, load a DataFrame containing MNIST.
>
> **[3:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=204)** The DataFrame might be the output of some ETL done in Spark and we're just loading some clean data just so we can see how the estimator works.
>
> **[3:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=211)** So that's in command four, lines two, three, four, five, six, and seven, and then we have this DataFrame.
>
> **[3:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=222)** Command five and six allow us to print out the HorovodEstimator.
>
> **[3:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=228)** So, it's basically documentation.
>
> **[3:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=231)** Command seven, we define the DL model to train in a Python function, and notice it's telling us the TF estimator style model FN works by defining the model's network structure and specifying the model's output on a single batch of data during training, eval, and prediction or inference, and there's a note.
>
> **[4:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=249)** If you have a model FN written for single machine training you can prepare it for distributed training with a one line code change.
>
> **[4:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=255)** Simply wrap your optimizer in a Horovod distributed optimizer, and again, this reflects the real world because you have domain experts who are working in smaller environments.
>
> **[4:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=266)** In the old days, it was their desktop.
>
> **[4:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=267)** Now it's probably a small cluster, and they're using their domain expertise, they're taking the data, they're creating a custom model, and then the job to turn that custom model into something that will provide business value is becoming increasingly complex because of the volume of data.
>
> **[4:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=286)** And again, this is why you'd use a Spark cluster and this is why you'd use libraries like Horovod to distribute these complex models built on frameworks such as TensorFlow.
>
> **[4:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=296)** So, we're really looking at the future, but not the far future.
>
> **[4:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=299)** That's why I'm including it in this course.
>
> **[5:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=301)** So, in command eight we're executing what we just described, and again, it's pretty well documented.
>
> **[5:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=306)** So, we've got our model passing in the features, labels, mode, and params, and notice the mode in line seven is described as specifying if the estimator is begin run for training, evaluation, or prediction.
>
> **[5:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=318)** The params are an optional dictionary of hyperparameters.
>
> **[5:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=322)** Again, hyperparameter tuning is an ongoing, very compelling use of a Databricks Spark cluster because it executes in parallel and model hyperparameter tuning is really critical to producing effective models.
>
> **[5:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=338)** So, on line 13 we're just grabbing out MNIST from TensorFlow and then here we have documentation 14 through 20.
>
> **[5:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=347)** It's telling us that the estimator from Horovod takes the scalar Spark SQL types to the model FN as tensors or shape none and an array of Spark SQL types including a vector user defined type as tensors of shape none, none, variable sized batch of dense variable length arrays.
>
> **[6:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=366)** And then image data is fed from an array type and for example a float tensor with shape none, none, we know that each float array is a length of 784.
>
> **[6:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=374)** So, we reshape our tensor into one of our shape.
>
> **[6:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=378)** And again, flexibility here in this none, none tensor concept.
>
> **[6:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=382)** So, we're executing that on lines 21 through 25, and then the next set here, 26, 27, and eight, we're generating on 29 through 33 a dictionary of inference output to the tensor for predict.
>
> **[6:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=397)** The tensor output's corresponding to the default serving signature defined key are produced as output column of the TF transformer generated by fitting our estimator.
>
> **[6:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=406)** And then in 34 and 35 if the estimator's running in predict mode as it is on 36 you can stop building the model graph and return the model's inference outputs.
>
> **[6:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=416)** And then in 39 we're calculating the loss for train and eval and that is being executed on 40, 41, and 42.
>
> **[7:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=426)** 43 we're logging.
>
> **[7:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=428)** And 44 we're executing that.
>
> **[7:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=430)** 45, we're using Horovod to scale the learning rate by the number of workers in the distributed optimizer.
>
> **[7:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=436)** So, the key line there in 46 is the TF train momentum optimizer, and notice in 47 HVD Horovod size momentum of 0.9, and then in 48 the distributed optimizer, and 49, 50, 51 we're training it, and then returning the spec.
>
> **[7:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=457)** In 55 and 56 if we're running an eval we'll add the model evaluation metrics, the accuracy, so that we can see how accurate the model is, and we're returning that on 59, and then command nine describes what happens in command 10.
>
> **[7:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=474)** We're creating a HorovodEstimator for distributed training of the model on a DataFrame.
>
> **[7:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=478)** So, they note that the model checkpoints will be saved to the driver machine's local file system in two, and three, and then we're creating the estimator in five through 13.
>
> **[8:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=489)** Note, you're passing in the batch size in nine, and the max steps in 10.
>
> **[8:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=494)** 11 is describing what's happening in 12.
>
> **[8:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=497)** We're fitting the estimator on the MNIST DataFrame using a fitted model, a TFT transformer, from the deep learning pipelines to transform the data.
>
> **[8:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=505)** So, you can see these things are working together now.
>
> **[8:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=508)** So, the checkpoint files can be used to restore the model to resume training.
>
> **[8:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=512)** This is important because these models are so huge sometimes you have to pause them.
>
> **[8:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=516)** Event files containing metrics logged during training and model evaluation are visualizable through TensorBoard, and when training finishes a TF saved model in modelDir can be used for inference.
>
> **[8:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=526)** And the classes and probabilities output columns are added to the DataFrame by the transformer.
>
> **[8:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=532)** And they give you a note here.
>
> **[8:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=533)** If you're using a GPU we recommend not opening any other TensorFlow sessions.
>
> **[8:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=538)** If you open another session on your notebook running GPU the estimator won't run, and again, this is probably 'cause this is early work on this set of functionality.
>
> **[9:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=548)** So, it gives you a little tip there, and then this is, in 12, this is actually executing what we just talked about.
>
> **[9:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=554)** The salient lines are line four.
>
> **[9:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=556)** The transformer is calling fit on the estimator and line seven the transformer's calling transform on the DataFrame.
>
> **[9:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=564)** And here we can see the structure of the results.
>
> **[9:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=570)** And you can restore the model from checkpoint to resume training.
>
> **[9:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=575)** You can increase the max steps of the estimator and run again.
>
> **[9:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=578)** So, here we're doing, in line one, we're increasing the max steps.
>
> **[9:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=582)** So we can copy the model checkpoints to the Databricks file system.
>
> **[9:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=586)** And then we can copy the directory to the local machine using the Databricks CLI.
>
> **[9:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-distributed-ml-training?u=76281980&t=591)** So again, looking into the future here, deep neural networks using distributed training with Horovod on Spark.

> [!info]- Semantic Content
>
> **Env Vars:** mnist (5), gpu (4), api (3), sql (2), cpu (1)
> **Code Keywords:** this, (3), fn (3), let (2), this. (1), function (1)
> **Definitions:** is a  (3), is an  (3)
> **Analogies:** such as (3), for example (1)
> **Documentation:** the documentation (2), spec (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** modeldir (1)
> **Versions:** 0.9 (1)

#### Understand Databricks Delta
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=0)** - [Instructor] As we're looking at running complex workloads, let me remind you that there are two primary methods of inputting the data: batch or stream.
>
> **[0:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=9)** We've mostly been working with batch, we did have one earlier movie where we showed stream, but what I'm seeing as an architect in the real world is combinations of both, and that leads this kind of into where we're going next.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=19)** So, batch, as a reminder, is a one-time run.
>
> **[0:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=22)** You can partition the input data.
>
> **[0:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=23)** You can use other optimizations, such as compression.
>
> **[0:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=26)** And you can partition the output data.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=29)** Stream is a continual stream.
>
> **[0:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=31)** It can be partitioned.
>
> **[0:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=32)** It can be compressed.
>
> **[0:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=33)** And again, traditionally, you have set up those optimizations, which requires more work to set up the pipeline.
>
> **[0:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=40)** Now as we start thinking about taking our workflows and putting them into pipelines, we of course are working with Azure Databricks.
>
> **[0:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=46)** So let's consider the Azure data ecosystem.
>
> **[0:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=49)** The ingest capability for data can be handled by services such as Azure Data Factory.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=56)** Storage is typically handled by Azure Storage.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=59)** And then we've been focusing this course on the prep and train, train if we're using Machine Learning model, of course, with Azure Databricks.
>
> **[1:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=67)** And then model and serve goes into some sort of destination.
>
> **[1:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=70)** One example could be the one shown here, which is a Azure SQL Data Warehouse.
>
> **[1:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=74)** And then some sort of analytical dashboard, maybe using Power BI.
>
> **[1:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=78)** Now as we're looking at the entire pipeline, we're going to focus and really broaden beyond Azure Databricks and look at this storage and ingest layer.
>
> **[1:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=89)** And as we're considering this, we're going to look at a feature that is in Premium and is in preview at the time of this recording.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=96)** It's called Databricks Delta.
>
> **[1:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=98)** So, the idea of Databricks Delta is a transactional storage layer in Azure Databricks that allows you to store data as parquet files on the Databricks File System.
>
> **[1:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=109)** And it maintains a transaction log.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=111)** It's for ACID transactions and fast read access.
>
> **[1:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=116)** So, Databricks Delta works with both tables and it supports CRUD operations, so Create, Read, Update and Delete, batch operations, versioning, and optimizations.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=126)** And streams: Data into tables, reads and writes as sources, and reads and writes as sinks.
>
> **[2:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=132)** The idea here is to provide a set of services that performs optimizations around data coming in to our Databricks Azure cluster and potentially going out with this Databricks Delta layer.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=146)** Now let's look at an architecture which could benefit from using Databricks Delta.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=152)** So this is kind of a generic architecture.
>
> **[2:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=155)** You can see on the left, we have a streaming fundamental data, so this would be your reference data, and then streaming price data.
>
> **[2:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=165)** So, a use case for this could be something like dynamic pricing, maybe on a travel website, or on a consumer goods website.
>
> **[2:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=173)** You can see going into the Databricks Unified Analysis Platform that you will work with via Notebooks is this Databricks Delta layer.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=181)** So this layer provides, in this case, for the fundamental data, a Databricks Delta table.
>
> **[3:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=188)** And for the price data, a Databricks Delta table that can then be consolidated and be a master Databricks Delta table that can be used as a source for realtime analytics machine learning and can be managed with the integrated workspace.
>
> **[3:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=203)** What's really happening here is Databricks is providing this layer to do common ETL transforms, most notably around file optimization, such as converting files into the parquet format that we discussed earlier via this layer.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-databricks-delta?u=76281980&t=218)** That's part of the Premium offering.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), delete (1), case, (1)
> **Env Vars:** sql (1), acid (1), crud (1), etl (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (3)
> **Prerequisites:** set up (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Use Databricks Delta
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=0)** - [Narrator] So I'm working with the Databricks Delta sample notebook and I've attached this notebook and run it to the ML Cluster.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=8)** Now this needed some input data, so I've provided both of these things and I'll show you where they are here.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=14)** So if I go to to the demos and I go to import
>
> **[0:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=22)** you can see that you have the notebook here and then I have this csv file.
>
> **[0:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=27)** Now this is a publicly available file and I've done a bit of data prep, so you might just want to use this file, but let me explain how this works.
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=34)** So we're going to be working with this Lending Club data.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=38)** So you can see the data dictionary here.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=41)** If you want the raw sample you can get it here.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=43)** You have to strip off the first header row and the bottom two informational rows for it to load properly.
>
> **[0:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=50)** Now what I've done to prepare it as a table, because this notebook starts with, and this is what the data looks like its whether or not somebody got a loan and the attributes associated with it, is it on line one here it loads a table and it writes it as Parquet.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=66)** So what I did to prepare this already is in the data section here I went ahead, and you can see it sitting here, and clicked add data, and you can upload data from the file system from DBFS or from other data sources.
>
> **[1:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=82)** So I browsed out to it and I went to, after I had stripped the header file off, and I did that by just opening it in Excel and deleting that file.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=94)** And then I can create a table with UI.
>
> **[1:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=97)** I need to select a cluster to preview the table, and this is the only running one I have.
>
> **[1:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=102)** Notice you have an option to create table in Notebook, which would generate python script for this.
>
> **[1:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=107)** And because we have this table name already I'll just give it a new table name right here.
>
> **[1:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=112)** And then you can see that I'm going to create in the default database, it's a CSV file, its spark CSV, JSON and Avro, it's a column deliminator, first row is a header, and I'm going to infer the schema and that will create this as a table.
>
> **[2:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=126)** Now if I wanted to create this in a notebook, I would just click Create in Notebook and it would do the same that's being done in the GUI interface in this notebook.
>
> **[2:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=135)** But, in any case, that's just preparation for what we're going to do.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=138)** So let me go ahead and switch back to the cluster, and the Databreaks Delta.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=144)** This is about Databreaks Delta.
>
> **[2:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=146)** It's an optimization layer on top of blob storage for performance, reliability and low latency of streaming and batch for data pipelines.
>
> **[2:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=153)** It's open-source Parquet columnar file format and it helps with indexing and partitioning and has ACID compliance for reliability, ANSI SQL update, delete, and merge and schema validation and low latency auto-compaction for real-time streaming ingest.
>
> **[2:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=169)** So a lot of those, they call them heavy lifting or extract transform and load steps that you commonly have to do as you're getting data ready for work on a spark cluster.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=181)** So I've pre run this so we'll just go through this.
>
> **[3:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=184)** So we've imported this table that we created, and then we created a pre-Databricks Delta Table.
>
> **[3:11](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=191)** We wrote this out as Parquet and so we've got this structure into a data frame.
>
> **[3:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=197)** And then we'll just look at this structure here and we can see that it has a lot of little pieces.
>
> **[3:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=203)** So one of the situations that you would want to use Databricks Delta for, and this notebook is a demonstration of it, it's called the Small File Problem where you have a bunch of small files and they're too small to be properly optimized across your worker nodes.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=218)** So notice you just run a simple count here and takes around ten seconds.
>
> **[3:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=225)** So then you're just going to remove it and then you're going to create the same table for downstream Databricks Delta processing, and it's still the same thing, and now we're going to create, and this is the important command here, command 16, create a table called loan_stats_delta and line three using delta and what that's going to do is we're going to create this delta table and then we can run an optimization that is going to use an internal algorithm to optimally merge the files together to get them to be the right size to work best in our cluster.
>
> **[4:26](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=266)** So we then run a count, and it's a little bit faster already it's four seconds verus nine, but now we're going to run the magic optimize in command 19 and now this gives us fewer pieces so they're slightly larger sized and now we're going to run a count and it takes less than one second, point eight six seconds.
>
> **[4:50](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-databricks-delta?u=76281980&t=290)** So, this is, like I said, a preview feature so when you are working with this and watching this recording, make sure you check the documentation which is referenced here because I'm sure they'll add even more features to it but really addresses a common use case in terms of data preparation and a great set of functionality and as your Databricks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), interface (1), case, (1), switch (1)
> **Env Vars:** csv (2), dbfs (1), json (1), gui (1), acid (1)
> **Definitions:** is a  (3)
> **CLI Commands:** python (1), make (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** loan_stats_delta (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [narrator] (1)

#### Use Azure Blob storage
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=0)** - [Instructor] As we're continuing to consider how we move data into our cluster, let's take a look at some of the other integrations that are built into the UI.
>
> **[0:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=9)** So if I click on Data here, and I click on Add Data, we just, in the previous movie, went over uploading a file, and making that into a data table in the UI.
>
> **[0:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=20)** We could use DBFS as well, which is we can see into the file system.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=24)** So you can see here is the table that we just made, for example.
>
> **[0:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=28)** And because we are running on Azure, we have integrations in the Other Data Source area with some common Azure services.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=35)** So, Azure Blob Store, Azure Data Lake Store, we also have JDBC, Cassandra, Kafka, Redis, and Elasticsearch.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=43)** Now you'll notice if I select Azure Blob Storage or Azure Data Lake Store, I get this convenient button to Create Table in a Notebook.
>
> **[0:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=51)** So I'll show you what this looks like for Blob Storage.
>
> **[0:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=55)** So, as it says here, this notebook shows you how to create and query a table or DataFrame loaded from data stored in Azure Blob storage.
>
> **[1:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=63)** So it's pretty self-explanatory, but just to take you through it, you're going to set the data location and type.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=69)** So you're going to need your account key and shared access signature, and then you are going to set your file location and type.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=80)** Setup your Spark configuration in command five, then you've made your connection in command six, you're going to read the data, so you're going to create a DataFrame in Python, you see this is a Python notebook, so in line one here you're going to read and infer the schema, and load from the location, and then in command nine, you're just going to validate it by displaying it.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=105)** And then in 11, if you want to query the data as a table, you need to register it as a view or a table.
>
> **[1:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=112)** So that's the command in line one of command 11, the df.createOrReplaceTempView, that's going to create that view.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=121)** And now you can work with Spark SQL and use your standard sort of SQL queries, as shown in 13 here.
>
> **[2:07](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=127)** You can use, you know, your aggregates, such as sum, and then your standard SQL commands, such as select from and group by here.
>
> **[2:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=134)** And then there's also a note, since this table is registered as a temp view, it will be available only to this notebook.
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=140)** If you'd like other users to be able to query it, you need to create a table from the DataFrame.
>
> **[2:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=145)** And in command 15, this just gives you the syntax df.write.format("parquet").saveAsTable.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=152)** And then you'll have a table.
>
> **[2:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/use-azure-blob-storage?u=76281980&t=153)** So these are some really useful examples for integration into common Azure data storage formats.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), dbfs (1), jdbc (1)
> **Code Keywords:** type. (2), let (1), self (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** createorreplacetempview (1), saveastable (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### Understand MLflow
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=0)** - [Instructor] So the complexity of these pipelines is really one of the biggest hindrances from taking machine learning models and complex computation into value for the business.
>
> **[0:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=12)** So a typical Azure-hosted complex pipeline will look something like this.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=17)** On the left side you'll see the incoming data, business apps, custom apps, sensors and devices, then the models in the center, and on the right is the intelligence, so the predictive apps, the operational reports, and the analytical dashboards.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=29)** So the key phases are in Ingest, Store, Prep and Train, Model and Serve.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=35)** So Databricks, you can see, is in the Prep and Train phase in this particular high-level reference architecture, but it often is part of the Model and Serve phases as well, in my experience.
>
> **[0:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=47)** So in Ingest, we have a hot pipeline here with Kafka, or the Azure Event Hub or IoT Hub bringing in data in a streaming fashion.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=56)** And then for storage, this pipeline is showing Blobs on the Data Lake.
>
> **[1:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=61)** Prep and Train is Databricks using Machine Learning, and Model and Serve is using a combination of Cosmos DB, SQL Database, SQL Data Warehouse, and Analysis Services.
>
> **[1:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=72)** So again, these components are all optional and they really are selected based on the particular use case.
>
> **[1:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=79)** Something this complex is not something I see out in the wild.
>
> **[1:23](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=83)** I usually see a subset of components in Model and Serve, for example.
>
> **[1:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=87)** Now if we think just about the data ingest and the data preparation and modeling for machine learning, we want to explode that section and we want to think about these various capacities.
>
> **[1:39](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=99)** This drawing is from a paper called Hidden Technical Debt in Machine Learning Systems.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=105)** The most important part is the small square in the center that's got a black background and white text, the ML code.
>
> **[1:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=111)** When I'm called in as an architect to work on machine learning solutions, the thinking is that the ML code is going to be a huge part, and this diagram really reflects the reality of what I see.
>
> **[2:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=123)** You've got configuration, data collection, feature extraction, data verification, machine resource management, analysis tools, process management, serving infrastructure, and monitoring.
>
> **[2:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=133)** That's all just in the in-side of the pipeline.
>
> **[2:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=136)** So tremendous amount of complexity.
>
> **[2:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=138)** So what does that result in?
>
> **[2:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=140)** A lot of failed projects.
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=141)** So, the thing you might be wondering is, is there any capacity or set of services that helps customers manage these various points of complexity?
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=152)** And yes, there is new set of services that is available as of this recording in Databricks to address these sort of problems.
>
> **[2:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=162)** Now what they've done is they have related this directly to the pipeline challenges, this subset, basically, so the data prep, the model building, the deploying.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=171)** The idea is that, of course, it's difficult to get the data the correct type, format, and size into the Spark clusters.
>
> **[3:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=181)** It's tricky to build the models with the correct hyper-parameters and the correctly sized clusters and it's tricky to do the deployment onto some sort of scalable deployment mechanism.
>
> **[3:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=192)** About six months ago, at the annual Databricks conference, Databricks announced a new work around an opensource platform called MLflow, and it really looks to address providing resources to address some of these challenges around data prep.
>
> **[3:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=208)** So Delta is something that we just saw, feeding data to models, enriching data in experiments; deploying the model, MLflow serving, integrate with multiple clouds, manage and monitor models; and build the model, track experiments, and really importantly, create reproducible experiments.
>
> **[3:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=226)** Particularly in the domain I'm working in lately, bioinformatics, this reproducibility is just essential for new research that's published.
>
> **[3:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=235)** So this is the Databricks runtime for ML that we've been looking at, and the ML project and tracker.
>
> **[4:02](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=242)** So MLflow itself has a set of components around tracking to record and query experiments: code, data, config, and results; Projects: Packaging format for reproducible runs on any platform; and Models: General format for sending models to diverse deployment tools.
>
> **[4:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=260)** Now there is an example that is provided but it's quite extensive to set it up.
>
> **[4:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=265)** What I did see in the example is actually a GIF of the result, so I'm actually going to take you and show you what that looks like.
>
> **[4:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=273)** As we're heading over there, I'll refer you to this blog post which talks about the thinking behind MLflow, and then there is documentation available that you are going to want to take a look at.
>
> **[4:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=285)** Note, at the time of this recording, MLflow is in 0.8.0, so it's in a early Alpha.
>
> **[4:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=292)** Here in our cluster is a MLflow quick start notebook for Databricks, and it talks about setting up MLflow running an example job, and setting up a monitoring server.
>
> **[5:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=304)** Again, this is pretty detailed to do, and you have to set up multiple machines and get them to communicate, so I didn't actually take the time to set it up, but what was interesting inside of here is they have a lot of good included screenshots.
>
> **[5:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=317)** So the idea is, in this particular experiment, you can see it's pretty self-explanatory by looking at it, that it logs all of the runs.
>
> **[5:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=327)** And you might remember back earlier in this course, when we were performance tuning for the VariantSpark workloads, how we were opening the Spark logs and looking at various values.
>
> **[5:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=336)** So basically, this comes out of the desire to automate some of that performance tuning, and it's setup capabilities that I know I'm welcoming as it's being developed.
>
> **[5:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=347)** So you can see, for example, here are the runs, here are the parameter values, here are the metrics.
>
> **[5:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=352)** So for example, this is some common metrics associated to this particular algorithm run, and then you store this as your blob storage.
>
> **[6:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=361)** And then, let me just scroll down and show you.
>
> **[6:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=364)** That's the algorithm they're running, and they're training their model, and then they get a visual output of the coefficients.
>
> **[6:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=375)** So you can capture these visualizations and store them as artifacts in the log server, basically, in the part of MLflow that's a log server.
>
> **[6:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=384)** Now they're working with different parameters.
>
> **[6:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=387)** Here's the animated GIF that I thought was pretty useful.
>
> **[6:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=392)** So you can see, here's the job run, and then you can see all these artifacts.
>
> **[6:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=397)** You can see the graphic output, you can see the parameters, you can see who did the run, you can see the metrics, I mean, this is just super useful for many use cases that I've been working with, like I said, in bioinformatics for example, where you need full reproducibility when you publish.
>
> **[6:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=415)** So you can use this not only for tuning, but also for other types of use cases.
>
> **[7:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=420)** So again, this work is really early, so I'm sure by the time you watch this, there will be a lot of updates to it.
>
> **[7:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=426)** I did include this notebook so if you do want to try to get this running, you could upload this notebook, and I'll show you how to do that.
>
> **[7:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/understand-mlflow?u=76281980&t=435)** It's the MLflow notebook, but do be aware that you need a separate virtual machine, blob storage, you need quite a bit of resources at this point to set this up for the monitoring, and again, because it's in an early stage, I just wanted to look at the concepts rather than go through the detail 'cause I'm sure that will change as this is implemented into production.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), case. (1), type, (1), self (1), let (1)
> **Env Vars:** sql (2), gif (2)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1), setup (1)
> **Versions:** 0.8.0 (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** scroll down (1)


### 5. Machine Learning Architectures

#### Azure Databricks pipeline considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=0)** - [Instructor] In this section, we're going to take a look at Databricks Azure in architectural pipelines, and we've talked about pipelines in several different contexts, and what I'm really going for here is end-to-end from when you receive the data to when you present the data and to show you some examples in terms of reference architectures of how this is best presented.
>
> **[0:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=22)** So the pipelines will cover both cleansing and processing.
>
> **[0:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=25)** We'll also highlight some enterprise features that are available through the integration with Azure security monitoring features.
>
> **[0:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=33)** We'll talk about storage services that are commonly used, such as Azure Blob Store and Azure Data Lake and visualization tools such as Power VI.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=41)** Also cost control is an important component because there are a number of services and the integration to Azure can help you to manage that.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=48)** So pipeline characteristics come in several phases.
>
> **[0:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=51)** The first phase is to preprocess the data, to clean it, compress it, partition it, so on, so forth.
>
> **[0:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=57)** The next phase is to evaluate the quality of the data, and that's often done with visualizations, as we've seen throughout this course.
>
> **[1:03](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=63)** Also the review of the data to look for outliers and data that's unexpected or of poor quality.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=69)** The next phase is what I call standard compute, and this is often SQL-type queries that perform counts, sums, grouping, so on and so forth.
>
> **[1:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=79)** This is also called business analytics.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=81)** Complex compute I define as machine learning, so performing some sort of inference, creating a model, training a model, looking at the quality of a model, oftentimes, tuning hyper-parameters, and can be exponentially more complex and require more resources than standard compute.
>
> **[1:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=102)** And then of course we need to serve the result, store and present it.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=105)** So to get us started with working with Azure Databricks in a end-to-end pipeline, here's a reference example.
>
> **[1:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=112)** So if we were to look at the data coming in, we would generally consider logs, files, and media, which could be unstructured data.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=121)** We also would be often dealing with business data from custom apps, that would be structured.
>
> **[2:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=128)** We can use Azure components such as the data factory to control and manage the data ingest.
>
> **[2:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=133)** There are other choices as well, but in complex pipelines, it's a common pattern to use Data Factory.
>
> **[2:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=139)** Azure Storage is typically used at some phase for storing the data.
>
> **[2:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=144)** Now in this particular case, we're going to be working with Azure Databricks, and there, the prep and train is going to happen for the data, considering we'd be using machine learning for the word train.
>
> **[2:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=154)** In some cases, we're not using machine learning, so we'll just be prepping it.
>
> **[2:37](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-pipeline-considerations?u=76281980&t=157)** Model and serve in this particular reference architecture is on Azure SQL Data Warehouse, and intelligence is presented in Analytical dashboards, more and more I find using power VI.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** require (1), case, (1)
> **Env Vars:** sql (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Azure Databricks for data warehousing
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=0)** - [Instructor] For our first reference use case let's look at data warehouses and databricks.
>
> **[0:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=5)** Typically data warehouses need data that is prepared for loading and there's some sort of processing.
>
> **[0:13](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=13)** And we also could be looking at a migration.
>
> **[0:16](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=16)** So let's start with loading and processing.
>
> **[0:18](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=18)** One possible reference architecture could be the one shown here where we're loading data both using the streaming pattern and the batch pattern and we're using something like Kafka to load via a stream and Data Lake Store to load via a batch.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=35)** Of course there's other components that we could be using.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=38)** The role of Azure Databricks in this scenerio would be to perform the extract transform and load or ETL for the incoming data and of course Databricks is running on Spark which is very, very easy to parallelize and runs in memory so any sort of data cleaning, transforming, aggregating, that sort of activity can be done much, much more rapidly given the volume of data that you may be working with.
>
> **[1:09](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=69)** And then the data can be shipped from Azure Databricks into a presentation location such as SQL Data Warehouse.
>
> **[1:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=77)** Another scenario in this realm is a data warehouse migration.
>
> **[1:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=81)** So on the left we have our variety of incoming data, structured, unstructured, and files, media log, so on and so forth.
>
> **[1:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=90)** In this case we might be moving from a third party vendor such as Informatica and we might use as our storage both Azure Blob Storage and Azure SQL Data Warehouse.
>
> **[1:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=102)** However because the information is coming from a number of different ingest sources, the two separate Informatica data warehouses and then the underlying different data sources we are using Azure Databricks with Distributed Spark here.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=117)** Again, to be able to do the extract, transform, and load at the scale that we need to quickly process this information so that we can do our migration in a more cost-effective and time-effective manner.
>
> **[2:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-data-warehousing?u=76281980&t=132)** Now you can see on the Model and Serve section here we can serve directly from the Azure Sql Data Warehouse into business and custom apps or we can apply additional analysis with Azure Analysis Services and we can alternately serve with Power BI.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), etl (1)
> **Code Keywords:** let (2)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Azure Databricks and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=0)** - [Instructor] Another pattern in pipelining is Azure Machine Learning and Databricks.
>
> **[0:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=6)** Now Databricks as we've seen in the earlier patterns in this section is used for preprocessing, so cleaning up data if you were on a massive scale.
>
> **[0:14](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=14)** And that is a perfectly legitimate use for Databricks.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=19)** However, in addition to that, I really commonly see Databricks being used for scaling machine learning because of the complexity of the compute.
>
> **[0:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=28)** And we spent a good amount of time in this course looking at the implementation of various types of machine learning, whether it's SciKit Learn, Spark ML, or even some of the newer, highly distributive networks, such as Tensor Flow in this course.
>
> **[0:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=44)** So there's a great variety of choices with in Databricks itself.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=48)** Now in addition to that, in the Azure ecosystem, there's an ever growing variety of machine learning services which are manifested as APIs.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=58)** There's also Azure Cognitive services which supports custom ML models and other types of machine learning which is becoming increasingly available and supported in the Azure ecosystem.
>
> **[1:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=70)** So there's a lot of choice.
>
> **[1:12](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=72)** And part of designing and effective architecture is figuring out based on the needs for your business, the type, volume, and complexity of the data, as well as the skill sets of your staff members and or people who are working on the project as to where you're going to place the machine learning.
>
> **[1:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=94)** You really do have a lot of choices in this machine learning pipeline and in this next set of architectures I'm actually going to show you, in one case, an A, B architecture, just to kind of show you some of the considerations.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=105)** But I'm getting a little bit ahead of myself.
>
> **[1:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=107)** So let's looking at a complex pipeline example.
>
> **[1:49](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=109)** So in this case, what we have is we have CSV files that are related to airline flights.
>
> **[1:57](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=117)** So you can see that we got flight delay data and we have historical airport weather data.
>
> **[2:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=124)** Now again this could come in as batch or more and more I'm seeing this come in as streaming, so near real time in terms, for example, the flight delays.
>
> **[2:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=135)** This could handled initially by the Azure Data Factory which would copy the data to blob storage and then it's going to be available, as you may remember from an earlier movie, once you integrate it, into Azure Databricks as a table.
>
> **[2:31](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=151)** So integration is really nicely built in.
>
> **[2:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=154)** You can even move the the information from blob storage to Azure via the UI.
>
> **[2:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=160)** So once the information is available on Azure Databricks then you can perform basic operations on it using Spark SQL, and as it's shown here over to the right, you could visualize a delay of predictions on a map using something like Power BI.
>
> **[2:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=175)** Now if you wanted to do additional processing and this dotted lines you can see that you could take the information that you have in Azure Databricks and you could create, train, and export an ML model which could then be consumed by an Azure service such as Azure Machine Learning Services where your data science team could store and operationalize the trained ML model and then could pass it off to your DevOps team to operationalize that ML model.
>
> **[3:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=207)** And you can see that's represented by the containerized AI Services.
>
> **[3:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=212)** And this would allow for scalable flight delay predictions in your application.
>
> **[3:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=218)** This could be integrated as its shown here into your Flight Delays Web Portal by your developers and could even be made available for sale as a third-party commercial API as part of your business strategy.
>
> **[3:52](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-and-machine-learning?u=76281980&t=232)** So again, you can see the two paths through the data if you will where Azure Databricks is kind of centrally both allowing you to do the earlier steps which is the preprocessing, the visualization, and the simple analytics on the data, but at scale, and also the beginning of the machine learning so that that can then be exported and integrated into the Azure ecosystem.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), type, (1), let (1), pass (1)
> **Env Vars:** csv (1), sql (1), api (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Azure Databricks for churn analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=0)** - [Instructor] Now, let's apply our Pipelining to a business scenario, Churn Analysis.
>
> **[0:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=5)** You might have data scientists working with multiple Machine Learning algorithms, because they're going to evaluate and tune them, both for efficiency effectiveness, but also for performance overhead.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=17)** You'll be working with visualizations.
>
> **[0:19](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=19)** You'll probably have Streaming data, Meta data, and Historical data.
>
> **[0:22](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=22)** So, what might that look like with Databricks Azure in a Pipeline?
>
> **[0:27](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=27)** Here's one possible case.
>
> **[0:29](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=29)** You might remember that in this course, we took a look at a new capability called Structured Streaming.
>
> **[0:35](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=35)** So, in this case, we're bringing in some Twitter data.
>
> **[0:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=38)** We probably would bring in more information than Twitter for a real live customer churn out, unless we we're Twitter, so you'd have more data sources.
>
> **[0:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=47)** And you can see that in Ingest, Prepare, and Analyze section of the Pipeline, we have Databricks that is playing the central role.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=56)** It's interacting with the Azure Event Hubs, and there are multiple Databricks Notebooks that are working with the incoming Structured Streaming Data.
>
> **[1:06](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=66)** So, the Producer Notebook is acting on the data, doing some quick analysis visualization, looking for outliers, and possibly aggregating the data or doing some sort of pre-processing.
>
> **[1:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=80)** Passing that data to the Event Hub, which is then making that data available for the Consumer Notebook, which then forwards it to the Publisher Notebook, which can be consumed by Power BI for visualizations.
>
> **[1:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=93)** However, the Publisher Notebook also does additional processing, passing it to the Datastore Notebook, which interacts with Cosmos DB.
>
> **[1:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=101)** And there's one additional component in this architecture.
>
> **[1:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=105)** At the level of the Consumer Notebook there is some Machine Learning being performed by the Microsoft Stack with the Text Analytics API.
>
> **[1:54](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=114)** And the result of that is being passed back to the Consumer Notebook, which is added before it's sent to the Publisher Notebook.
>
> **[2:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-churn-analysis?u=76281980&t=121)** The interplay with Azure services, such as Event Hubs for Streaming Data, Cosmos DB for storing data, Power BI for visualizing data, and Text Analytics for performing complex Machine Learning Analytics on data, and the Databrix ecosystem is really well shown in this Pipeline Structured Streaming Example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), case, (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Azure Databricks for intrusion detection
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=1)** - So, in this scenario we're going to take a look at how you build for intrusion detection.
>
> **[0:05](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=5)** You're going to have very similar components to the last one.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=8)** So, data scientists, multiple machine learning algorithms, evaluating, tuning, visualizations, streaming data, metadata, historical data.
>
> **[0:15](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=15)** The streaming data is going to be events in this case.
>
> **[0:17](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=17)** And the thing you're going to add is alerting and actions.
>
> **[0:20](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=20)** So, two different types of architectures, just so we can compare and contrast, and kind of understand some of the trade offs that you might consider in building these pipelines.
>
> **[0:30](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=30)** So, the first one uses structured streaming and cognitive services.
>
> **[0:34](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=34)** So, again for the data sources, we're just showing Twitter just to make it simple, but it would be lots of other data sources.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=41)** If it was to look for intrusion on your devices you'd get event information from your devices as well, for example.
>
> **[0:48](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=48)** But it's typically streaming data that comes into some sort of event bus, like the event hub.
>
> **[0:55](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=55)** That's the capture phase.
>
> **[0:56](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=56)** Then, in the curate phase, preparing and analyze, in this particular scenario, notice the information from the event hub goes all the way to the consume phase into the time series insights, which is an Azure service.
>
> **[1:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=70)** And, it goes alternatively in the prepare and analyze and publish phases to Azure data bricks, then to cognitive services, which is an Azure machine learning API, and then back to event hubs to stream out.
>
> **[1:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=84)** So, you basically have two different levels of streaming data.
>
> **[1:28](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=88)** You have nearly the raw data, with one level of visualization through the time series insights, and then you have the processed data coming through.
>
> **[1:36](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=96)** So, I would call it the hot data and the very warm data.
>
> **[1:40](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=100)** And a scenario for this particular case, is where you need to get near real-time results and have some sort of visualization and understanding of those, and that's what time series insights is doing.
>
> **[1:53](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=113)** However, you might want to apply rules, and that's what's happening in the curate phase, and learn from past situations and then present a secondary view, and that's what's happening in the publish phase for the event hubs that would then be added to the times series, so that's one type of architecture.
>
> **[2:10](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=130)** As an alternative, if we look at this architecture, we're bring in the variety of data that we typically see and in particular I want to call out the sensor and IoT unstructured data at the top.
>
> **[2:21](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=141)** Notice in the ingest we have two different vehicles here.
>
> **[2:25](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=145)** We have Apache Kafka, which is a streaming capability, and then we have the Data Factory.
>
> **[2:32](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=152)** For storing, we can store either directly from Kafka as structured streaming into Databricks.
>
> **[2:38](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=158)** Or, for Data Factory we're going into Azure Blob Storage.
>
> **[2:42](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=162)** So, Azure Databricks is doing all the prep and all the training in this particular case.
>
> **[2:47](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=167)** We're not using any Azure cognitive services or Azure AI.
>
> **[2:51](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/azure-databricks-for-intrusion-detection?u=76281980&t=171)** So we are doing the data preparation, we're doing machine learning at the Databricks layer and we're passing our data out then to other Azure services for modeling and serving, such as Cosmos DB, or Azure SQL Data Warehouse and Power BI.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), case, (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (1), apache (1)
> **Env Vars:** api (1), sql (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - so (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=0)** - [Lynn] We've covered a lot of ground in this course, and it's a complex topic area.
>
> **[0:04](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=4)** So I have some resources for you to continue your learning.
>
> **[0:08](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=8)** At the core, Azure Databricks is based on Apache Spark, so there are a number of courses in the library that cover Spark, Spark internals, and as you are building with and on Spark, I really encourage you to dive deep into the Spark internals.
>
> **[0:24](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=24)** To that end, you'll notice that I have a link here to an article on Spark internals that can give you an idea of how to get started.
>
> **[0:33](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=33)** In addition to that, Microsoft has made the Azure Databricks documentation available on GitHub, and I've provided a link.
>
> **[0:41](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=41)** This is the documentation that is living.
>
> **[0:43](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=43)** It is updated.
>
> **[0:44](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=44)** You can update it.
>
> **[0:45](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=45)** You can do a pull request.
>
> **[0:46](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=46)** It is really useful in terms of the community contributions, and hopefully, as you're building, you'll not only work with that documentation but you'll also add your perspective, as well.
>
> **[0:58](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=58)** I'm Lynn Langit.
>
> **[0:59](https://www.linkedin.com/learning/azure-spark-databricks-essential-training/next-steps?u=76281980&t=59)** Thanks for listening.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **Code Keywords:** continue (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Speakers:** - [lynn] (1)


## Path Context

### In [[Advance Your Data Skills in Apache Spark]]
← [[Introduction to Spark SQL and DataFrames]] | **3 of 6** | [[Architecting Big Data Applications- Batch Mode Application Engineering]] →

## Appears In

- [[Advance Your Data Skills in Apache Spark]]
