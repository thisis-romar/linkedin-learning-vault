---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: databricks-certified-data-engineer-associate-cert-prep
url: "https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep"
level: Intermediate
updated: 3/18/2025
learners: 3212
skills:
  - Data Engineering
  - Databricks Products
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHm9zKmvZxPOQ/learning-public-crop_675_1200/B4EZWMTdh5GwAY-/0/1741815667415?e=2147483647&amp;v=beta&amp;t=s1t1lNspB__Ij1mX1TK10xph2EjKBaRvE2L_PfKzFMg"
linkedin_topic: Data Science
learning_paths:
  - '[[Prepare for the Databricks Certified Data Engineer Associate Certification]]'
path_nav: '[{"path":"Prepare for the Databricks Certified Data Engineer Associate Certification","position":1,"total":1,"prev":null,"next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/data-engineering
  - skill/databricks-products
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Databricks%20Certified%20Data%20Engineer%20Associate%20Cert%20Prep.md)

![Databricks Certified Data Engineer Associate Cert Prep](https://media.licdn.com/dms/image/v2/D4E0DAQHm9zKmvZxPOQ/learning-public-crop_675_1200/B4EZWMTdh5GwAY-/0/1741815667415?e=2147483647&amp;v=beta&amp;t=s1t1lNspB__Ij1mX1TK10xph2EjKBaRvE2L_PfKzFMg)

# Databricks Certified Data Engineer Associate Cert Prep

> In this course, prepare for the Databricks Certified Data Engineer Associate exam. Instructor Noah Gift takes you through the topics you need to know, starting with an introduction to the Databricks Lakehouse platform. He then goes into data transformation with Apache Spark, data management with Delta Lake, data pipelines with Delta Live Tables, workloads with jobs, and wraps up the course with a 

> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep) | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Course overview
- [**1. Databricks Lakehouse Platform**](#1-databricks-lakehouse-platform) (8 videos)
  - Introduction to the Databricks Lakehouse platform
  - Overview of the Databricks architecture
  - Creating and managing clusters
  - Configuring cluster runtimes
  - Terminating clusters
  - Restarting clusters
  - Filtering the clusters list
  - All-purpose vs. job clusters
- [**2. Data Transformation with Apache Spark**](#2-data-transformation-with-apache-spark) (8 videos)
  - Set up IntelliJ for Databricks with Go
  - Installing and using the Databricks CLI
  - Installing and using Databricks for RStudio
  - Introduction to notebooks
  - Executing notebooks
  - Sharing notebooks
  - Multilanguage support
  - Databricks Repos overview
- [**3. Data Management with Delta Lake**](#3-data-management-with-delta-lake) (8 videos)
  - Efficient data transformation with Spark SQL
  - Using Catalog Explorer
  - Creating tables from files
  - Querying external data sources
  - Inspecting tables
  - Reliable data pipelines with Delta Lake
  - ACID transactions
  - Z-ordering optimization
- [**4. Data Pipelines with Delta Live Tables**](#4-data-pipelines-with-delta-live-tables) (8 videos)
  - Vacuuming and garbage collection
  - Table documentation
  - Automated pipelines with Delta Live Tables
  - Delta Live Tables components
  - Continuous vs. triggered pipelines
  - Configuring Auto Loader
  - Querying pipeline events
  - End-to-end example of Delta Live Tables
- [**5. Workloads with Jobs**](#5-workloads-with-jobs) (8 videos)
  - Orchestrating workloads with jobs
  - Databricks jobs demo
  - Multitask workflows
  - Task dependencies
  - Viewing job history
  - Using dashboards
  - Handling failures
  - Configuring retries
- [**6. Data Access with Unity Catalog**](#6-data-access-with-unity-catalog) (7 videos)
  - Unified data access with Unity Catalog
  - Catalogs vs. metastores
  - Unity Catalog quick start with Python
  - Applying object security
  - Best practices for catalogs
  - Best practices for connections
  - Best practices for business units

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=0)** - [Noah] Welcome to "Databricks Certified Data Engineer."
>
> **[0:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=3)** My name is Noah Gift and I'm going to be your instructor for this course.
>
> **[0:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=7)** I have quite a bit of experience with Databricks and data engineering, and I teach this at multiple universities around the world, including some of the top universities.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=16)** Let's go ahead and get started here.
>
> **[0:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=18)** First step, in our course introduction, there are six sections that we'll cover.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=24)** The first thing we'll cover is the Databricks Lakehouse platform.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=29)** So we'll talk about how to use the Lakehouse platform, the architecture, also creating and managing clusters, configuring cluster runtimes, terminating clusters, restarting clusters, filtering the cluster list, all-purpose versus job clusters.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=46)** And then in course two, we cover data transformation with Apache Spark.
>
> **[0:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=52)** We'll start off with looking at the development environment, so we'll set up IntelliJ for Databricks with Go, also use the Databricks CLI.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=61)** We'll also use Databricks with R Studio.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=64)** We'll get into notebooks, how to execute them, share them, also how to use multiple languages, like languages like Scala and SQL, and then we'll talk about how Repos work as well.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=75)** Finally, in the last several courses, we'll start to dive into the Delta Lake.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=81)** So in course three, we'll get into data management with Delta Lake.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=85)** This covers efficient data transformation with Spark SQL, using Catalog Explorer, creating tables from files, also querying external data sources, inspecting tables, reliable data pipelines with Delta Lake, asset transactions and more.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=104)** In course four, we'll get into data pipelines with Delta Live Tables.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=109)** This includes vacuuming and garbage collection, table documentation, automated pipelines with Delta Live Tables, Delta Live Table components, looking at continuous versus triggered pipelines, configuring the Auto Loader, also looking at the querying pipeline events, and even an end-to-end example of Delta Live.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=130)** In course five, we get towards the end here, which is working with jobs.
>
> **[2:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=134)** So we'll talk about orchestrating workloads with jobs, Databricks jobs, demos, multitask workflows, task dependencies.
>
> **[2:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=143)** Also, we'll talk about dashboards, handling failures, and even configuring retries.
>
> **[2:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=149)** Now with the final course, we dive into the new feature, which is Unity Catalog.
>
> **[2:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=156)** Now, Unity Catalog is interesting because it has the ability to give you more granular control over multiple instances of Databricks.
>
> **[2:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=166)** And we'll get into unifying data access, talking about catalogs versus meta stores, also get into object security, and then we'll get into best practices for catalogs, connections, and even business units.
>
> **[3:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=180)** All right, we have a lot to cover.
>
> **[3:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=182)** Let's go ahead and get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** sql (2), cli (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the last (1)
> **Tools:** intellij (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [noah] (1)


### 1. Databricks Lakehouse Platform

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the Databricks Lakehouse platform
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=4)** - [Instructor] Let's take a look at the evolution of data architectures.
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=8)** First here on the left, we see that there's a progression from the data warehouse to the data lake to the lakehouse.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=16)** One of the reasons for this is that there are limitations of traditional data warehouses for unstructured data at scale and some of the promises of data lakes didn't fully materialize due to lack of governance.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=30)** So first, let's define what a lakehouse is.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=33)** It's a way to combine the strengths of a data warehouse, and you can see some of the things you can do, like BI, reports, ETL.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=41)** It's combining those strengths with the data lake in a new architecture.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=46)** And again, if we look at the data lake here, you can see that some of the difference are that you can also do data science, machine learning, work with structured, semi-structured and unstructured data.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=57)** But it enables the governance, the quality, the performance for analytics, alongside the flexibility for ML and AI.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=66)** And it's also powered by separating the storage and the compute, like the traditional cloud data warehouse.
>
> **[1:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=73)** Some of the key attributes include the support for asset transactions and schema enforcement like you would get with a traditional SQL solution and also open formats built on low cost object storage.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=85)** So in the case of AWS, it would be something like AWS S3.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=89)** Unified batch, Streaming, SQL and machine learning workloads are also included and also the ability to have enterprise capabilities like security, access control, auditing, all things that are very important for compliance and for proper data governance.
>
> **[1:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=105)** So, some of the benefits over past systems include: radically simplified architecture for multiple specialized systems, faster time to insight without copying or moving the data, and cost savings of operationalizing one system's infrastructure.
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=120)** And also the flexibility for diverse analytics from BI to AI ML.
>
> **[2:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=125)** So some of the limitations here for the future outlook would include early in the maturity, so that they may lag some of the old systems' query performance.
>
> **[2:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=135)** Also, there could be some issues where you need better support for non-SQL tools and personas.
>
> **[2:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=141)** And one of the things to really keep in mind when you're thinking about these new solutions is that eventually those gaps are going to close over time while retaining the simplicity and cost benefits that you get from a data lakehouse.
>
> **[2:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=154)** So, really a data lakehouse is an evolution of what is currently happening and this is something you see all throughout the history of innovation with many different technologies.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), aws (2), etl (1)
> **Code Keywords:** let (2), include: (1)
> **CLI Commands:** aws (2)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Overview of the Databricks architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=4)** - [Instructor] Here, we have the general overview of the Databricks architecture.
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=9)** At the top here, you can see that it's structured into a control plane, and this control plane is managed by Databricks and the compute plane lives in the customer's cloud.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=19)** In this example, it shows AWS, but it could be in Azure.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=22)** It could be in GCP.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=24)** It could be in some other cloud.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=25)** The control plane, though, is where all of the action takes place, and it handles the back-end services like the storage of notebooks and jobs, and the compute plane processes the customer's data and the workloads.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=37)** The connector integrates the external data for ingestion, and then the data lake stores securely in the customer's cloud storage.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=46)** So it works on top of things like object storage and compute.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=49)** In the case of AWS, it would be S3 or EC2, and there's a separation of responsibilities where Databricks manages the control plane service to reduce the customer burden, and the customer maintains the ownership and control of business data.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=64)** So this is very similar with the shared responsibility model of AWS, where you manage certain parts of the resources and AWS manages others like the physical data center.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=74)** In this case, though, you're managing these lower-level resources, but then Databricks is actually able to orchestrate on top.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=82)** So the common workflow would be the data is ingested from sources via connectors into the cloud storage like S3.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=89)** The compute would spin up on demand to process and analyze the data, and then the interactive workloads in notebooks, batch jobs, SQL, all would share the same architecture, and the results would output back to the cloud storage under the customer control.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=104)** So what this means is that some of the benefits are fully managed control plane that reduces the overhead.
>
> **[1:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=112)** The customer cloud account provides security and isolation, and you have flexibility to handle diverse data workloads and pay only for the compute used through serverless offerings.
>
> **[2:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=123)** So, in a nutshell here, what you really can do with Databricks is manage complex workflows by leveraging that layer on top, and that Databricks control plane has the web application, the notebooks, the jobs and queries, and the cluster management, and it does many things beyond just data engineering, including MLOps.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), gcp (1), ec2 (1), sql (1)
> **CLI Commands:** aws (4)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Creating and managing clusters
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=3)** - [Instructor] One of the more important jobs with managing Databricks environment is the compute.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=10)** Let's take a look here at this compute tab inside of the Databricks interface.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=14)** You can see there's several different categories of options.
>
> **[0:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=18)** First up, we have all purpose compute here, so this is a place to start if you're going to do things like work with notebooks, for example, do basic data engineering operations.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=28)** And you can see here that I've actually got something running, which is called Thrifty, right here.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=33)** So how would I run this?
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=34)** Well, I could go ahead and click this and it would say confirm, and it would start this cluster.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=39)** Now if we want to create one from scratch here, let's go ahead and say Create compute and let's look at the options.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=46)** Here you can see that I'm using an unrestricted policy.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=50)** So this is a new feature of Databricks that lets you control what are the things that a user is allowed to do.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=57)** That's really the purpose of a policy here.
>
> **[0:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=59)** And if we go over to the documentation, you can see here what are compute policies.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=63)** They can do things like limit users to creating clusters with prescribed settings.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=68)** So for example, let's say your company has a limited amount of GPUs, you may want to limit a individual user from using more than the allocated resources your company has.
>
> **[1:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=80)** You can also simplify the interface control costs, et cetera, and even enforce certain libraries.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=86)** Maybe you want the people in your organization to only use the libraries that you've created.
>
> **[1:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=91)** So it's some nice options for control.
>
> **[1:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=93)** Now, if we go back to the access mode as well, you can see there's multi node or single node.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=99)** Basically the entire purpose of Databricks is to do cluster compute.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=104)** So, in many scenarios, you would want multi node.
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=108)** Single node is for prototyping.
>
> **[1:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=110)** So if you toggle to single node, you can see it'll just spin up one machines.
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=114)** But the advantage of multi node is to be able to scale out the Disk I/O and the compute for the Hadoop file system, HTFS.
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=122)** And you're going to get that by using a multi-node setup.
>
> **[2:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=126)** Now look at the default runtime here as well.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=128)** This is important to stay and look at, is that the runtime here is already configured for you and it has the latest versions of Scala and Spark, and you can toggle it up and down if you want, based on the kinds of things you're doing.
>
> **[2:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=142)** So generally for regular types of notebook operations, running SQL queries, you would want this standard runtime and it's going to be configured for you.
>
> **[2:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=153)** If you want to do advanced ML operations, notice here that there'll be options for GPU, there could be different versions of Spark, and also the libraries are going to be pre-configured for you so that you don't have to actually select something that's going to be installed it's already installed for you for many of the standard use cases.
>
> **[2:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=173)** So really the runtime is great to allow you to toggle between standard, classic data engineering problems or ML, and the right libraries will basically be automatically configured for you.
>
> **[3:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=185)** We also can see here that you can scale up the minimum workers or the max workers.
>
> **[3:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=190)** So the defaults here are probably good to use.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=193)** But if you know you have, let's say, a lot of capacity that needs to be used because you have large data sets, maybe you want to toggle up the minimum worker.
>
> **[3:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=203)** So you always use, let's say, four minimum workers and you could also potentially toggle up much larger the max workers, right?
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=210)** And these will all be things that you'll be able to get feedback on according to the resources that are available from your cloud provider.
>
> **[3:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=218)** We also can look at the driver type here as well.
>
> **[3:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=220)** In this case, we'd want to do the same as the worker.
>
> **[3:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=223)** And then in terms of the auto scaling here, this is the button that's going to allow you to use that min and max.
>
> **[3:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=230)** Now, this is another very important setting as well, which is are you going to terminate after a period of time?
>
> **[3:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=237)** So for doing lots of ad hoc demos and exploration, this is really going to be something you'd want to have enabled.
>
> **[4:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=245)** Now, on the other hand, if you're running something that's a 24/7 cluster, you should turn this off because you don't want to terminate if it's inactive, because it could cause some downtime for other users that are trying to do things so this is really going to be dependent on your environment.
>
> **[4:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=260)** You could also add tags here as well.
>
> **[4:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=262)** Let's say you want to say, maybe the team would be data science, right?
>
> **[4:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=266)** If you wanted to add some kind of a tag that would tell you exactly what's happening.
>
> **[4:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=271)** Now, once this thing is running, again, if we go back to compute here, you can actually look at it and look at the details of exactly what's happening.
>
> **[4:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=279)** You could look at the notebooks associated with it, the libraries that are associated with it, install new libraries.
>
> **[4:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=285)** You can also look at the Spark user interface as well and look at the different things that are happening with the jobs.
>
> **[4:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=291)** You can look at the metrics.
>
> **[4:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=292)** This is also very important when you're running jobs, is to see, "Do I need to have a larger scale characteristics?"
>
> **[5:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=300)** Maybe I need some additional max nodes because I'm overloading CPU, or I'm overloading Disk I/O or memory, et cetera.
>
> **[5:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=309)** You can view all that from here.
>
> **[5:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=311)** So really, the compute interface here is a one-stop shop here to manage everything you need to do for basic computation.
>
> **[5:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=319)** There also is the compute jobs here, which allows you to do ad hoc jobs and manage those jobs.
>
> **[5:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=325)** We also have SQL warehouse, which is another one.
>
> **[5:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=328)** We have pools which can allow you to logically group the tendencies to allocate compute power.
>
> **[5:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=335)** You can also dedicate a cluster from an auto-scaling pool to a team or a unit.
>
> **[5:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=340)** And then finally, this is where you would go in and you could actually create customized policies so that maybe you simplify the ability to launch things or limit the ability to do GPUs.
>
> **[5:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=351)** All this is managed directly from the interface inside of Microsoft Azure, Databricks, or AWS Azure Databricks, or whatever platform you're using Databricks on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (5), case, (1), finally, (1)
> **CLI Commands:** node (7), aws (1)
> **Env Vars:** sql (2), htfs (1), gpu (1), cpu (1), aws (1)
> **UI Navigation:** toggle (5)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (2)
> **Prerequisites:** setup (1), install (1)
> **Cross-References:** go back to (1)

#### Configuring cluster runtimes
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=5)** - [Narrator] Here we have Databricks runtimes, and they include things like the data engineering and ML solutions here.
>
> **[0:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=11)** And if we see, the reason for this is that you can have different clusters doing different things and you don't have to spend a lot of time maintaining them.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=19)** They're managed by Databricks itself.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=22)** So this is a huge time saver.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=23)** If we take a look at standard here, this is just general purpose, right?
>
> **[0:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=26)** It's for the ETL operations, data pipelines, batch processing.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=32)** Let's say you want to have a scheduled job that runs at some interval.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=35)** It often could be using this standard runtime.
>
> **[0:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=38)** We also have support for Python.
>
> **[0:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=40)** We have support for R, we have support for Scala, for SQL.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=44)** There also is this Photon runtime as well, which is optimized for huge data volumes and table scans.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=50)** And it's great for ETL on petabytes-sized data.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=55)** And then in terms of machine learning, we have libraries like TensorFlow, we have PyTorch, we have Caris.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=61)** Also, regular machine learning tasks are handled as well, like things like pandas, for example.
>
> **[1:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=67)** That particular API could be available.
>
> **[1:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=70)** In terms of the other run of times for analytics, we also have SQL analytics, and this is optimized for SQL and business intelligence use cases.
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=79)** And really the difference here is that you can toggle the attributes of languages and libraries, memory IO, CPU, the query engine, the concurrency limits.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=89)** These are all things that you can tweak and you don't have to manage the fine grain details.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=95)** Databricks, will manage them for you.
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=97)** So if we take a look here at the interface, you can see a real life example of this where I have an ML cluster running.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=104)** You can see it's running the ML runtime.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=106)** So it's differentiated from the regular runtime.
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=108)** And what's nice about this again, is that I didn't have to go in and install much of libraries myself.
>
> **[1:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=115)** They're already pre-installed with many of the things that I would want to use.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=119)** And I could, if I wanted to create a new compute cluster, I could just go through here and say a new compute cluster.
>
> **[2:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=125)** And then again, just toggle through the runtime.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=127)** And you can see standard ML uncategorized.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=130)** Likewise, if you go back here, you can to toggle to SQL runtimes pools.
>
> **[2:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=136)** You have lots of different options here, and it's up to you to defigure, you know, do you want 2, 3, 4 different kinds of clusters?
>
> **[2:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=144)** An ML cluster, a data cluster, a SQL cluster.
>
> **[2:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=147)** You have all those options available to you in the Databricks interface.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), etl (2), api (1), cpu (1)
> **Code Keywords:** interface (2), let (1)
> **UI Navigation:** toggle (3)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Terminating clusters
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=4)** - [Instructor] Here we have a Databricks interface where there is one cluster that's already running.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=10)** You can see here that there's a couple of notebooks associated with it.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=14)** We also have a new cluster that's starting here.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=17)** If I wanted to control this, one of the ways that I could terminate this cluster is by selecting it and first, you can terminate it by doing nothing, right?
>
> **[0:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=26)** If you have this enabled, you can see that terminate after 120 minutes.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=31)** This is what will happen when the cluster is actually inactive like you're not doing something to it, it'll automatically terminate.
>
> **[0:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=38)** But there's a more explicit way to do it.
>
> **[0:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=40)** If you go over to this section here and we click on Terminate, you can see it says, "Are you sure you want to terminate the cluster?"
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=47)** Now this will just basically stop the cluster.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=50)** Notice that there are other controls though as well.
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=53)** If we go here, you could also clone this.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=56)** You could restart it.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=58)** Deleting though would be permanently getting rid of the cluster including the whole configuration.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=63)** So the difference between a delete and terminate is that terminate is just telling it to stop.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=68)** Now there are other ways to terminate as well and one of the ways you can do this is from a notebook.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=74)** So if we go to New here, we go to Notebook, notice that the ML Cluster is selected.
>
> **[1:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=80)** You see that it's green, it's running.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=82)** Now how would I actually terminate this?
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=84)** Well, what I can do is I can actually go over to the ML Cluster and if we select this and hover over it, you can see that I have the ability to actually terminate it right from this interface.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=96)** So this is one of the more convenient ways.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=98)** Let's say you're done with a project and you're inside of a notebook, you've saved it.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=103)** Maybe you've committed it to version control.
>
> **[1:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=105)** All you have to do to get rid of it is just select Terminate, so ahead and say Confirm, and this will actually go through the termination phase and you can see here that this was requested.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), this, (1), this. (1), delete (1), let (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1)

#### Restarting clusters
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=5)** - [Instructor] Here we have several compute clusters that I'm going to make some changes to, and I'm going to start with doing a restart.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=12)** One of the things that happens sometimes is a compute cluster could be acting in a strange way or it's overloaded, it's out of memory, and so how do you actually restart it?
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=21)** Well, let's go ahead and take a look at this Thrifty cluster right here.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=24)** If I take it and I go to this menu right here, I can select Restart.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=31)** Once I select Restart, we're able to actually get this thing in a new state.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=35)** It'll reboot and all of the memory and everything else that's happening will really change so that I don't have to actually keep those legacy issues.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=44)** So another way to do the same thing, though, is we can also go to the Notebook.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=49)** And if I select a notebook, from here, if I scroll down, what I can do as well is actually select this cluster here or some other cluster that's associated with it, hover over it, select Restart, and we can see that I can do the exact same thing by restarting from the notebook.
>
> **[1:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=71)** So there's two ways to restart inside of Databricks.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=74)** Both of them can be handy if you're experiencing issues.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), scroll down (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Filtering the clusters list
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=1)** (no audio)
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=5)** - [Instructor] Here we have the compute interface, and there are three different clusters.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=10)** And if you're working with, let's say, hundreds of clusters, you want to be able to filter very quickly on a name or potentially a runtime.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=21)** And one of the ways you can do this is by this menu here, where it says filter compute, you have access to.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=25)** If we go through here and we type in ML, for example, notice that I can actually quickly pull up the name of the cluster.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=32)** Another easy thing that you may want to do is look at a particular runtime.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=36)** Let's say that you know that that runtime, for example, the ML runtime, has a particular version.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=43)** You could go through and just type in right here, 14.2, or in the case of another one, 13.3 or 13.2.
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=53)** There's nothing, 13.3, we see we have two.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=55)** This gives you the ability to quickly toggle if you have hundreds of run times, which is very possible in a larger organization.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=63)** Another thing that is also helpful really when you're combining with this, is that you can pin maybe your favorites as well.
>
> **[1:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=71)** So again, if you have 20, 30, 40 different clusters, you can filter, but then you also could potentially save, let's say the two clusters that you use most frequently up here, so that by default you always have access to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (1), this, (1)
> **Versions:** 13.3 (2), 14.2 (1), 13.2 (1)
> **Analogies:** for example (2)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### All-purpose vs. job clusters
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=5)** - [Instructor] Let's take a look at this concept of all-purpose Compute, which is things like a general cluster or building ML clusters.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=15)** And this is one type of Compute that works very well for notebooks or for other things you're doing, but there's a different type called a job cluster.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=24)** Let's go ahead and look at that by going to Data Engineering, Job Runs.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=28)** And if we go over here, what we can see is, this was a previous run that I did.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=33)** It was successful.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=34)** It took about six minutes, and so I could see all of my runs here.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=39)** And it's a great way to really have a interface that I can see where things have been, you know, failing or succeeding or whether I skipped one.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=48)** Now, if we go over to Create job, you'll see that I can actually dive into what a job cluster is.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=54)** So by default, you'll get this job cluster.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=58)** And the idea here is that a job cluster is optimized and dedicated to run production jobs.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=64)** And so auto-scaling is enabled by default to handle the job load and it's going to terminate automatically after being idle for a set time.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=72)** So this is really ideal for doing scheduled ETL pipelines and recurring batch processing.
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=79)** The all-purpose clusters are more for interactive general data analysis.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=82)** So if we went through here and we said test, and I went through and I selected the notebook that I was going to use, here's where we would see the job cluster.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=90)** And you can see that this job cluster has slightly different characteristics than the all-purpose cluster, right?
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=95)** It has bigger memory, so 126 gigs, 36 cores.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=100)** And it's also going to delineate by saying here that it's a job cluster and it's going to say that the existing all-purpose clusters are different than these.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=111)** So this is just another tool that you have in your toolkit.
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=114)** If you're going to be running batch-based jobs, doing ETL operations, this is a great way to get things going.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), default, (1)
> **Env Vars:** etl (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Data Transformation with Apache Spark

> [↑ Back to Table of Contents](#table-of-contents)

#### Set up IntelliJ for Databricks with Go
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=4)** - [Instructor] One of the emerging standards here for doing SDK work for data engineers is the Go language and I'm going to take a look at how to do that inside of this IntelliJ environment.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=15)** So you can see here I've got a Databricks certified data engineer project and inside of here I'm going to create my Go SDK code for Databricks.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=24)** So the first thing that I will do is I will actually go ahead and make a new directory called gohello.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=32)** And I'm going to CD into that directory.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=34)** Now the first thing that we need to do inside of this directory is type in go mod init sample.
>
> **[0:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=42)** And this will create this initial Go module here.
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=47)** And this Go module is going to hold all of the things that we need in terms of dependencies.
>
> **[0:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=52)** So the first thing that I will run is the Databricks SDK.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=57)** So we'll say go mod edit -require and we'll go ahead and load that in.
>
> **[1:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=62)** And now you can see here that we've got this new SDK loaded.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=66)** We also want to go through here and create a new project file as well.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=72)** So I'll need to go ahead and touch that.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=74)** So we'll say touch main.go.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=78)** And this main.go will be empty to start with, but what I'm going to do is just paste in some code and get it running.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=86)** So this is from the official documentation.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=89)** You can see we have a function here and inside the imports we have a couple of imports.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=98)** So inside the main function here is where we're doing all the work.
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=101)** So first up, there is a client that's created and then this will unpack what's coming back from the client.
>
> **[1:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=110)** In this case it'll be a clusters list.
>
> **[1:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=113)** So let's list all of the clusters that are available and then we'll say if there's an error right here, go ahead and panic, otherwise, let's go ahead and print out, do a for loop over all of the clusters that come back from the SDK.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=128)** So pretty straightforward here and all we need to do is install all of the missing dependencies.
>
> **[2:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=135)** So we'll type in go mod tidy. Perfect.
>
> **[2:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=139)** And then we'll go ahead and grab copies of all the packages needed to support builds and test the packages.
>
> **[2:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=146)** So we'll type 'em in the Go Mod vendor, so go mod vendor.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=151)** Great.
>
> **[2:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=153)** And now all we need to do is go ahead and get this thing running by typing go run main.go.
>
> **[2:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=161)** And this is going to go through here and compile this and run it.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=165)** And we should see a list of all the clusters. There we go.
>
> **[2:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=168)** So pretty straightforward actually to get Go running.
>
> **[2:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=172)** There's some great advantages of Go language.
>
> **[2:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=174)** There's strong support for the Databricks SDK as well.
>
> **[2:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=178)** So if you want to give somebody in your team a binary that just ships to let's say Kubernetes or ships to some serverless platform that talks to Databricks, this is a pretty good solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (2), function (2), require (1)
> **Env Vars:** sdk (6)
> **File Paths:** main.go (3)
> **CLI Commands:** make (1), cd (1), go run (1)
> **Definitions:** is a  (2)
> **Tools:** intellij (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Installing and using the Databricks CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=4)** - [Instructor] One of the cooler things you can do with Databricks is administer it from the CLI.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=10)** In order to do that on a Mac platform, all you'd have to do is just do a brew install, so here we go.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=17)** You can see that I run these brew commands, and in this case, it would go through, and notice I've already got it installed, so I don't have to install it, so we're ready to go.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=28)** Now, all I need to do is say which Databricks, and we can see that this has actually been installed.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=35)** And at the very beginning, you'll want to run the Databricks configure command, and this will actually configure your environment for the workspace that you're wanting to talk to, and this is where you would also configure any kind of authentication as well, so you would create an OAuth token and put it inside of here.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=56)** So since I've already done that, all I need to do is just dash dash help here, and we can see there's a bunch of different commands.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=64)** We can look at the account, we can look at the API, authentication, bundling.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=69)** We can also do file system related commands.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=72)** We can synchronize a local directory to a workspace directory.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=76)** So these are really cool things that are available inside of this.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=81)** I would say that one of the more interesting things to start with, though, again, we can see there's a ton of things inside of this, would be to work with the cluster.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=90)** So first up, what I'm going to do is I'm going to type in Databricks clusters, and I can actually say list, and this will show me all of the existing clusters that are available, and if we take a look at these four clusters, you can see that all four are running in a terminated state.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=111)** So that means that at one point, they were running, and then now the state has been changed to terminated.
>
> **[1:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=117)** So this is a great example of, if I was going to do some data science work and I wanted to set up a job before I get frustrated because my job is taking a long time, I can notice that, ah, look, the cluster's actually in a terminated state.
>
> **[2:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=132)** We need to actually change that, so how would we do this?
>
> **[2:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=134)** Pretty straightforward.
>
> **[2:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=135)** What I could do is I could just say Databricks clusters, and we could say start, and then I would put in the ID of the cluster that I'd want to run.
>
> **[2:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=144)** In this case, we can do the ML cluster.
>
> **[2:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=147)** There we go, and if I do this, it'll actually wait for it in foreground mode and give me the ability to see exactly what happens, finding the new nodes, for example, and then it'll finally show back the start state.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=165)** So this is a great way to administer machines here.
>
> **[2:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=168)** Another thing that I'll point out as well is that we could also query for different information.
>
> **[2:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=175)** So let's say I had a hundred or a thousand different machines here.
>
> **[3:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=181)** Well, what's a little bit confusing is, how do I know which one has the right hardware?
>
> **[3:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=186)** For example, let's say I wanted something with a particular hardware capacity, I don't know, GPUs, et cetera.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=193)** Well, what we could do is we could run a separate query while that's running in the background, and I could actually, again, go to Databricks clusters list,
>
> **[3:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=206)** and we look.
>
> **[3:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=207)** We can see, in fact, it's in pending state.
>
> **[3:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=209)** Let's actually find out a little bit more information about that.
>
> **[3:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=213)** So what I can do is do get.
>
> **[3:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=216)** We can put the ID right here, and it will return back a big JSON payload.
>
> **[3:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=223)** I don't want that entire payload, so what I'm going to do is I'm going to pipe it into the JQ, which is a JSON query tool, and I'm going to actually query for some pattern.
>
> **[3:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=235)** In this case, I'll say node type ID, and what this will do is it'll actually show us, ah, great, this is a standard DS3 V2.
>
> **[4:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=247)** That's the kind of hardware that I was looking for.
>
> **[4:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=249)** Or you could obviously do something more silly, like do a name, of course, we already have the name, but you could actually go through here and figure out whatever it is that you wanted to do by querying that JSON payload.
>
> **[4:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=263)** So in a nutshell, the CLI is really something that is invaluable for people that are using the Databricks system day in, day out.
>
> **[4:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=273)** You can look through the help command, find a bunch of different recipes, and create solutions that allow you to easily administer and start jobs and interact with the Databricks cluster, even if you don't have access to the web interface.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (3), this, (2), this. (1), for. (1)
> **Env Vars:** json (3), cli (2), api (1), ds3 (1)
> **Prerequisites:** configure (3), install (2), set up (1)
> **CLI Commands:** brew (2), find (2), node (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Installing and using Databricks for RStudio
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=4)** - [Instructor] Databricks also works with both R and the RStudio environment.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=10)** You can see here this is a Databricks SDK for R tutorial and notice that it's an experimental SDK for now, but the gist of it is that you need to build out inside of your local R environment a Databricks host.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=24)** So this would be your workspace URL and then your token, which you can get from the Databricks administrative console.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=31)** Once you've done that and you've gone through and you've created that token, you can actually put it inside of your .Renviron files.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=39)** Obviously this is something that must not go into version control systems because this would have the personal access token and also the workspace URL, but once you've done that, you'll go through here and install these packages.
>
> **[0:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=51)** So you'll say install.packages("devtools") library(devtools) and then you'll install it directly from GitHub.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=58)** Finally, all you need to do is go inside of here and require the Databricks library that you just installed, make a client and do whatever it is you need to do.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=68)** So let's go ahead and take a look at how this would work in practice.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=72)** So if we go over to this environment here, you can see that I have RStudio running and I also have a script that I'll walk through here.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=81)** So first up, what we can do is we can see that I did in fact go through here in the R console and say install.packages("devtools").
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=90)** I also did library(devtools) and then I installed directly from GitHub, the experimental RSDK.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=96)** Now, the next thing that we do is I open up inside of here, you see a plus and you go to an R Script and we require that Databricks SDK.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=109)** The client is actually pretty straightforward.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=111)** You make an instance of it and then you figure out some kind of response based on that client.
>
> **[1:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=117)** In this case, there's actually a clusters create command.
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=120)** So this is really useful if you're familiar with the R language.
>
> **[2:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=124)** You don't have to actually go into the web interface, you can actually create your own cluster.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=128)** In this case, I'm creating a cluster called my-Rcluster.
>
> **[2:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=132)** I then specify the spark version that I want to use, and then I also specify the node type.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=138)** So this is critical because there are many different types of nodes and you want to select the one that is going to meet your needs, for example, ML jobs or data engineering jobs.
>
> **[2:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=149)** Then finally you can set the auto termination time.
>
> **[2:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=152)** 15 minutes is a sensible default.
>
> **[2:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=154)** And then again, if you're just getting this thing experimenting, one worker is fine.
>
> **[2:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=160)** And then finally you get the workspace URL.
>
> **[2:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=162)** And this will return back in the result.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=165)** And then finally at the very end, you say make sure the workspace URL ends with a forward slash, and then the print paste here goes through and it gives what the response is of that command.
>
> **[2:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=176)** So in fact, I was able to do that and I have a cluster running in this environment.
>
> **[3:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=181)** And what's nice about that is you can see that it's actually able to set up the host and the worker node.
>
> **[3:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=188)** So there's a total of two nodes here.
>
> **[3:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=190)** And then what I can do is I can verify this by going to the Databricks CLI, which I can use inside of RStudio.
>
> **[3:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=197)** So if I type in here databricks clusters list, we should see that my-Rcluster.
>
> **[3:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=207)** And in fact, we do have that my-Rcluster running.
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=210)** So the R language is also a option for people that are familiar with it.
>
> **[3:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=215)** If you are a data science practitioner and you're really living inside of RStudio, you can absolutely administer the Databricks infrastructure remotely from RStudio.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), case, (2), finally, (1), let (1), interface (1)
> **Env Vars:** url (4), sdk (3), rsdk (1), cli (1)
> **CLI Commands:** make (3), node (2)
> **Prerequisites:** install (4), set up (1)
> **Tools:** github (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)

#### Introduction to notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=1)** (no audio)
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=4)** - [Instructor] Let's take a look here at the Databricks Notebook interface.
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=8)** You can see that you can create a new notebook by going to the new section and clicking on the notebook tab.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=15)** So I've already done that.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=16)** And I'm going to name this thing data science.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=21)** So it's really common to want to build out a exploratory data analysis workflow.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=29)** But notice here that by default, you have the ability to use SQL, but you could toggle to another language like Python, you could toggle to Scala, to R.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=39)** It's up to you to decide what it is you want to do.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=41)** Let's leave the default here for now.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=43)** And I also want to show you what I would consider a good first step when you're building out a notebook.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=50)** So first we have this markdown cell here, and you can see it from the table of contents.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=56)** Notice that if you put a markdown cell here, and if we double click on it, you can see it is this markdown tag, that it will create this hierarchy for us.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=66)** So for a data science workflow, I would recommend the concept of ingestion first.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=72)** And then you could do another markdown cell here by just going through here, copying it, pasting it, and just tweaking it.
>
> **[1:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=80)** And we can call this EDA.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=86)** And now if we go back to the table of contents, you can see we have another one.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=90)** And then if we want to do another cell as well, we can call this, let's say modeling, if you're going to do some machine learning.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=100)** And then finally, we could do one more, and we could have a conclusion.
>
> **[1:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=105)** Maybe the conclusion is we have a predictive analysis where we show some kind of result.
>
> **[1:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=112)** Now if we go into each of these sections as well, this would be a good spot where you could put in a new cell and do some kind of coding.
>
> **[2:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=121)** Now notice here in the ingestion phase, I was able to run a SQL command.
>
> **[2:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=126)** Well, how did I know how to start to look at the data?
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=130)** Well, if we go over to this section here, you can see this is a workspace, where I could look at other notebooks or I could look at the catalog.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=138)** And in the catalog, you can actually start off with the sample data sets here.
>
> **[2:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=143)** And you can see that there's several sample data sets.
>
> **[2:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=146)** This is the New York City taxi data sets here.
>
> **[2:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=150)** And if I want to query it, let's go ahead and do it again.
>
> **[2:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=154)** I can go to the middle and select this plus.
>
> **[2:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=159)** And from here, I can start to query exactly this hierarchy.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=163)** So we'll say select, and I can get an auto complete.
>
> **[2:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=167)** That's pretty nice.
>
> **[2:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=168)** And we can say from, again, I'm getting auto complete, and now I can just follow the naming structure.
>
> **[2:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=174)** I can say samples dot, and then it'll go through and tell me what is available actually in the samples.
>
> **[3:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=181)** And we'll say New York taxi.
>
> **[3:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=183)** And then from here, I want to look at the trips, for example.
>
> **[3:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=187)** And then from here, we could actually go ahead and say, select star from samples.
>
> **[3:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=191)** And I could maybe even do a limit, and we could say, limit 10.
>
> **[3:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=199)** And at this section, now all I would need to do to run it would do a shift return, and it's going to go through quickly and run this query.
>
> **[3:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=208)** What's nice about it is that it also gives me a table that I can scroll through here and look at the different items, even toggle up and down, for example.
>
> **[3:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=219)** And what's great about this is that I don't have to do much.
>
> **[3:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=223)** I can really interactively play around with the data and move through things very easily.
>
> **[3:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=230)** Now, obviously, I can also hide these cells, and this is a good thing to be aware of, is that you can hide these cells.
>
> **[3:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=238)** And if I wanted to create new cells here, I would do another, let's say, exploratory data analysis cell, maybe another one for modeling, another one for conclusion.
>
> **[4:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=249)** And at the end of this, I can again go back to my hierarchy and I can click on any of these, and it'll navigate right to that section.
>
> **[4:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=256)** So this is what I would call a normal setup for a data science project is you create this structure of ingestion, exploratory data analysis, modeling, conclusion.
>
> **[4:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=268)** You go through, you query your datasets, potentially by first looking through and making sure you know what dataset you're going to use, for example, the stuff you've already uploaded or using the sample data.
>
> **[4:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=279)** When you're at the conclusion of your project, you can go through and let's say share that notebook to other people on your team.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), interface (1), default, (1), finally, (1)
> **UI Navigation:** toggle (3), click on (2), go to (1)
> **Env Vars:** sql (2), eda (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Warnings:** be aware (1)

#### Executing notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=4)** - [Instructor] Here we have Databricks notebooks and they're very exciting because there are many ways to use them.
>
> **[0:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=11)** You can see here are some existing queries that I've got, but another thing I can do is execute the entire thing from the interface.
>
> **[0:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=20)** So if I go to run, notice that I don't have to do things, cell by cell, I can select run all.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=27)** When I do run all, it'll run every single notebook.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=31)** I could also pick a certain cell.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=33)** So if you're working with big data, for example, you may want to select a subsection so that you don't rerun everything.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=41)** Or you could run everything above, or you could run everything below, or you could run the selected text, or you could even go to the last run cell.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=49)** So there's a lot of options here as well.
>
> **[0:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=52)** Now another thing that could be very useful to be aware of in terms of execution is you may want to clear all state and run all.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=61)** So for example, let's say you've been running this notebook over and over again and maybe you are unclear of actually the order or if something changed, what you could do is basically redo it, clear all the state, run everything again, and you're now in a known good configuration.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=78)** So there's lots of options here in the run menu.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=82)** Another option is you can also schedule.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=85)** So if you go through here and you schedule, you could schedule a job and say, I want this scheduled every single day at some time.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=92)** A great example of why you'd want to do this would be, let's say web scraping or some kind of data collection job.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=98)** Now you also could send alerts to your personal email address and you could toggle on start success failure, et cetera.
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=108)** And you could also name this a particular job.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=111)** So you can also schedule into the future or even manually run it if you want to toggle through and take a look at it.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=119)** Finally, another advanced feature here that's worth pointing out is if we notice here that we've got this select query here is I can get hints on what to do.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=131)** And so how would I get some hints on what to type?
>
> **[2:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=134)** Well, if you type in a partial selection here, so we'll say select, you're going to get code completion, which is nice, and we can even get from samples and we can go through here and do this and even do trips.
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=148)** But what we can also do as well is if we do shift option space, it'll actually give you some ideas of some other queries that you may want to run.
>
> **[2:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=159)** So this is also a nice way to get some ideas for execution.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=163)** They may not be exactly what you want, you may have to change it, et cetera.
>
> **[2:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=167)** But it is nice that you can actually go through here and do the shift option space.
>
> **[2:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=172)** And here we go, maybe 100 is the way that we want to actually run this particular query.
>
> **[2:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=177)** So there's lots of options here when you're executing cells, not just doing the shift return, which people typically do, but you can go through the run menu, select certain cells or schedule things into the future.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), finally, (1), return, (1)
> **UI Navigation:** go to (2), toggle (2)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Sharing notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=4)** - [Instructor] Once you've created a notebook that has everything that you need, one of the things that we can do is go through the notebook and share it with other people on your team.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=14)** So, how would you do this?
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=16)** Well, if we go over to the Share icon right here, you can see that it gives you the ability to share with other people on your team.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=23)** So you can see here that it will pop down some suggested choices, for example, like admins, and you can go through here and give them this sharing link.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=35)** Now, another thing you can do is control exactly what they can do.
>
> **[0:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=40)** So this is very useful for maybe a developer that's working on some big data projects, is that you want, let's say, the data scientist to only view the notebook because they are going to execute the run but you don't want them to actually change it.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=56)** Likewise, you can actually go through here and run, and you can actually allow someone to redo the run, for example.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=65)** Because in the case of a view, if you go through here and you were able to just view the results of the notebook, that's good enough maybe for some of the data science tasks that you need to do.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=76)** But running requires many resources, and it could require a bit of an understanding of what's happening in your organization and the cluster size, et cetera, so this could be a more privileged thing to do.
>
> **[1:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=88)** Likewise, editing would be reserved for a very few amount of people that you share this with, because you don't want someone to make a change to the notebook that could cause the notebook to fail in the future, especially if it's like a scheduled job.
>
> **[1:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=102)** And then, finally, manage.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=104)** This would be for the highest level of privileges, and this would be the example where you could allow someone, potentially, to reschedule the job or change the kind of cluster that it runs with.
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=114)** So, there's lots of options here when you're thinking about sharing that you can control inside of Databricks.
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=120)** And then finally, you can just copy the link here and paste that link into a chat system like Slack or email it to somebody and say, "Hey, can you take a look at this notebook?
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=128)** I'm having some problems."
>
> **[2:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=129)** And if you had, for example, edit privileges, they could even edit the notebook for you, send a link back to you and say, "Hey, I think I fixed it."

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), require (1)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### Multilanguage support
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=4)** - [Instructor] Here we have a notebook that I'm going to demonstrate the ability to use multiple languages.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=10)** Now by default, you can see here that the default is SQL, but there are other languages we can use.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=17)** We can use Python, we also can use Scala, and we can use R.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=22)** And even there's a hidden language, which is Bash, which I'll show you how to do as well.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=28)** So first up here, if we scroll down and we look at a SQL query, you can see that this is obviously a straightforward way to query.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=36)** Of course, doing a limit on a large data set is a good idea so that it doesn't take several minutes just to test something out.
>
> **[0:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=42)** Now, if we want to go down and run this, I could just go through here and just click on run cell, and this will go through here and give us the result, and we can see the result is able to be shown.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=55)** Next though, what we can do is move to the Python section, and what we're going to do in this Python section is also be able to run the cells.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=69)** And so in order to do that, all we need to do here is go ahead and run this.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=75)** We can see run cell, and notice the difference.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=77)** We have the Python right here with the percent that tells the cell that it's going to be a Python cell.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=84)** We also have the import pandas as pd.
>
> **[1:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=87)** We then go through here and mount the Databricks file system.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=92)** We then read it in as a CSV, and then we display the first 10 rows.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=96)** So this works fine for small datasets.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=99)** If you want to use something larger, you'll need to use the Spark interface.
>
> **[1:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=102)** And then if we want to go down here and look at R as well, this is another choice that we have that's available.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=109)** And what's nice about the R interface here is that we're able to, if we look through the cell here, require the SparkR Library.
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=120)** So this binds with Spark, and we're able to also put in the percentage R here to show that this is going to be a cell that will invoke the R language.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=131)** And then we're going to read the diamonds dataset as a Spark data frame.
>
> **[2:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=135)** And you can see here that it's all included.
>
> **[2:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=137)** So we have diamonds, we're able to source Databricks.
>
> **[2:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=142)** We're then going to split the data into a training set and test set, and we're going to exclude the row IDs.
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=148)** And then finally, the pertinent information is actually printed there.
>
> **[2:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=153)** So let's go ahead and run that.
>
> **[2:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=155)** And we go ahead and we say run cell.
>
> **[2:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=157)** We can see it's going through here, running, churning, going through, and we see the output right there, which is nice.
>
> **[2:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=164)** Finally, we have Scala.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=165)** And if we go through here and we take a look at Scala, again, it's a percentage.
>
> **[2:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=171)** We can say import org.apache.spark.sql.SparkSession.
>
> **[2:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=175)** A Spark Session is then created, and then you can actually pass in a SQL query if you want.
>
> **[3:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=181)** And then that turns into a data frame, which you can actually run the show operation on.
>
> **[3:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=186)** And you can see as well, we can run this, and it goes through and it runs that and gives us the data.
>
> **[3:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=192)** Now the final thing that I'll mention is this Bash example here.
>
> **[3:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=197)** And what's nice about this style is that if you use Python cells, Python has the ability to execute shell commands.
>
> **[3:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=205)** And we can actually do this with a percentage.
>
> **[3:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=207)** So we can say percentage ls, and then notice when we run this, we're able to actually run any type of shell command inside of here.
>
> **[3:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=216)** So this is a great way to maybe do some data processing or run some commands to see where you're at.
>
> **[3:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=223)** So you really have the ability to run not only just these four languages, but with the Python syntax, you can also do the exclamation point here, ls, to also get access to the shell ecosystem.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), interface (2), finally, (2), default, (1), this. (1)
> **CLI Commands:** python (8), ls (2), apache (1)
> **Env Vars:** sql (3), csv (1)
> **Tools:** bash (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **File Paths:** org.apache.spark.sql (1)
> **Prerequisites:** you'll need (1)

#### Databricks Repos overview
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=5)** - [Instructor] Once you start using notebooks quite a bit, you're going to want to look into the workspace, which is a way to share different things in your environment with other people and also organize things and also repo.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=17)** So first, let's take a look at workspace here.
>
> **[0:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=20)** So inside of the workspace, one of the things that we can do is we can actually add a folder.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=25)** And so this folder could be, for example, some scala notebooks.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=30)** You could put them all in a certain directory.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=32)** And then once you've got those notebooks directory created, you could actually go through and put a notebook there and we can just say this, call it our, you know, scala test.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=44)** And then we could change the default language to Scala and we can just say sure.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=50)** And then from here, if we are able to go back to that workspace that you can see that that notebook is there as well.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=57)** And so finally, I could actually share this entire thing with other people by selecting share.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=63)** That's one way to do things is you have this local workflow and there's a lot of benefits to that.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=68)** On the flip side, a lot of times you will want to get access to version control and actually go through the version control system and version control your notebook.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=78)** So let's go ahead and take a look at a repo here.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=81)** So if we go to repos, you can see one is already added.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=85)** And if I go ahead and I say add folder, you could actually organize them inside of the folder.
>
> **[1:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=91)** That's one way to actually change things.
>
> **[1:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=94)** Or likewise, if we go into here, we can actually say add and we can add a repo.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=100)** Now in terms of the repo here you can see this is the URL, and you could put an HTTP URL here.
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=108)** We also could select different providers from GitHub to Bitbucket to GitLab to Azure DevOps to AWS CodeCommit.
>
> **[1:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=115)** We have lots of options here depending on what are the requirements for your organization.
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=120)** And then you put your name right here.
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=122)** So once you've done that, you can see I have an example here.
>
> **[2:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=125)** You get access to everything inside of the notebook and we could start to version control the work that you're doing so that it's not lost and you're able to actually share that work via the version control system with other people.
>
> **[2:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=137)** You also can directly add inside of here as well.
>
> **[2:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=139)** So if you go through here, you can add files, you can add notebooks, you can add folders.
>
> **[2:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=143)** So you do have the ability to interface with them.
>
> **[2:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=145)** So there are a couple different ways to version control your system with Databricks.
>
> **[2:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=150)** You can always download it and add it in, or you could have the direct workspace integration and you can actually move things from the repos to the workspace and the workspace to the repos.
>
> **[2:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=161)** And in general, it's a best practice to do versioning for your Databricks notebooks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), finally, (1), interface (1)
> **Env Vars:** url (2), http (1), aws (1)
> **Tools:** github (1), bitbucket (1), gitlab (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)


### 3. Data Management with Delta Lake

> [↑ Back to Table of Contents](#table-of-contents)

#### Efficient data transformation with Spark SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=5)** - [Instructor] Let's get started with Spark SQL, which is a way to query all of the Databricks file system in SQL.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=12)** Let's go ahead and take a look first at this catalog here.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=16)** So if I look at this, you can see here that we've got these catalogs and in fact sample data as well.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=21)** So we see sample, default, New York taxi, TPCH.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=27)** We can also look at it from another view.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=29)** If I go to open bottom panel here, it gives me the ability to also interrogate it from a terminal.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=36)** So if I type in ls/dbfs/ that would show us what's inside of that Databricks file system.
>
> **[0:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=45)** And I also could look at the actual data sets here.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=49)** So if we could say data sets and if I want to look at, for example, NYC sample, we can see, in fact that's where that data lives and I can even CD into it, if I wanted to.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=63)** Just take this last navigation here, put inside.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=69)** And then we can see, for example, there is a directory that has Json inside of that, a whole bunch of different files.
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=79)** In fact, I can do this, I can do a DU.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=82)** And what this will show me is the size of the entire set of sample data.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=89)** We could also do it individually and we could see that there's a large, really variety of different sizes here.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=96)** You know, 70 meg, 105.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=98)** So this is a good way to just kind of play around, you know, if you want to see what's happening with the local Databricks file system, but we also can query it from SQL, right?
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=108)** So this is our default language here.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=111)** And if I go inside of this, what I can do is I can actually type in Select * and we can say From, and we can say we want to do the samples and we'll do the NYC taxi data.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=130)** And if we look at the trips here, let's go ahead and limit, let's just grab about a thousand of these files.
>
> **[2:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=142)** Now this is an okay SQL query, but I can use the advanced features here of the Notebook to clean it up a little bit, make it look better.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=151)** So if I go over to this over here, that's going to run it.
>
> **[2:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=156)** But I want to select this one right here, which says Format SQL.
>
> **[2:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=160)** Let's go ahead and run that.
>
> **[2:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=161)** There we go, so we have a little bit better of a SQL format now.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=165)** And then if I run this, what's going to happen is I'm going to get this giant Spark job that runs and I can even inspect if I want to and see what was going on.
>
> **[2:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=176)** But in general, what's nice about this is I'm able to actually look at this data, look at the different views, you know, sort it for example.
>
> **[3:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=187)** And the other thing I can do as well is click on this plus icon.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=193)** And there's two different modes we can dive into.
>
> **[3:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=195)** We can dive into visualization, which is often a good place to start.
>
> **[3:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=199)** Or even data profiling.
>
> **[3:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=201)** Let's go ahead and data profile first.
>
> **[3:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=202)** So we can find things like, for example, descriptive statistics, which I often first want to do when I'm looking at something and I want to see what's going on in terms of what's happening here.
>
> **[3:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=215)** So we can see that the standard deviation of this particular column is a certain value.
>
> **[3:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=222)** I can look at the median really, and these are, doesn't really make sense.
>
> **[3:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=226)** But in terms of trip distance here, we can see that the median is 1.63.
>
> **[3:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=231)** So that is something that's interesting.
>
> **[3:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=233)** And we can look at the skew, really skewed towards extremely short trips.
>
> **[3:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=238)** Simultaneously, we can look at the fair amount, a little bit more spread out, still skewed, but we can see the median fair is 9.
>
> **[4:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=246)** And then if we look at the pickup zip code or drop off zip code, right?
>
> **[4:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=250)** So we can get a feel for the data by doing a data profile, which is really handy.
>
> **[4:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=255)** We also though can click on this plus and do a visualization.
>
> **[4:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=261)** Let's go ahead and do this visualization as well.
>
> **[4:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=263)** And let's start off with something beyond just a bar chart, that's a little bit boring.
>
> **[4:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=269)** What we could do instead as we could look at a scatter plot or a bubble plot, let's do a bubble plot and then we can select what we want to actually do a scatter plot on.
>
> **[4:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=280)** So if we go through here, we can say, let's say the trip distance and also the fair amount.
>
> **[4:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=288)** Those are kind of exciting.
>
> **[4:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=289)** Oh, there we go.
>
> **[4:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=290)** So we got a nice little logarithmic relationship, right?
>
> **[4:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=294)** It's linear up until you get to here and it seems like things start to go into a logarithmic curve here.
>
> **[5:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=302)** So it may be the fact that, you know, once you go to a certain part of the city, potentially it's like a fixed rate or something like that.
>
> **[5:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=311)** But in general, we are able to get a good visualization here by taking a look at this.
>
> **[5:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=316)** And if I want to as well, I can just say Save.
>
> **[5:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=320)** And then I'm also able to have this visualization inside of my notebook.
>
> **[5:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=325)** So this is a great way to really immediately start adding value in an organization.
>
> **[5:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=329)** You can see it's not too hard to use SQL, do some descriptive statistics, get some great visualizations.
>
> **[5:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=337)** And obviously if I go to here, Share, I could share that with other people in my organization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (4), default, (1), from, (1), this. (1)
> **Env Vars:** sql (7), nyc (2), tpch (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (2), ls (1), cd (1), find (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (4), it's like (1)
> **Versions:** 1.63 (1)
> **Tools:** terminal (1)

#### Using Catalog Explorer
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=5)** - [Instructor] The Catalog Explorer in Databricks is a user interface that allows you to browse, search, manage, and organize different data objects like tables, views, dashboards in the Databricks workspace.
>
> **[0:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=18)** Some of the things you can do include providing a centralized portal to search, filter, and browse tables, dashboards, and models, and you can also tag objects, and you can manage access permissions, and you can also view the underlying data within tables.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=33)** So, really it's a great way to play around with your data, I would say is the easy example.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=39)** So let's take a look at this Catalog Explorer here, we have samples.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=43)** And we see that the New York taxi data would be a good one to play with.
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=47)** So if we click on this, notice what happens is that automatically, I can tell that these are the columns.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=54)** And I could even add comments.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=55)** Let's say I'm working with a team, and you know, for example, we would want to have some very rich commenting like, "Hey, we need to clean up this data," or whatever it is we want to do.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=64)** Also, I can look at a descriptive sample as well, which is really nice to just get a view of the data without having to write any code.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=72)** And we can also look at things like the details.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=75)** You know, where actually is this on disc?
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=78)** Which is a great thing to know because I may want to do some other things with it.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=84)** And then finally, if I wanted to, I can actually do things with this.
>
> **[1:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=88)** So this is kind of neat here, this create widget.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=90)** So if I say create, probably the first place you'd want to start would be to do a query.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=95)** So if we do a query here, we can say select star from trips.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=99)** And in fact, I mean, it already does a limit 1,000, so maybe I'll just make it easier and I'll say limit 100.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=107)** And what's nice about this is that I can do a shift return, and then it's going to go ahead and run this query.
>
> **[1:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=115)** It's got a built-in limiter here that protects us from, you know, basically taking down the system by always limiting to 1,000.
>
> **[2:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=124)** But if we look at this, you can see that return back 100 rows and 385 milliseconds.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=130)** So this is a very cool feature here.
>
> **[2:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=133)** Now remember, we also can do other things.
>
> **[2:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=136)** So if I click on this plus, I could immediately go into a visualization as well.
>
> **[2:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=141)** And again, I could look at a scatterplot, for example, pick the X, pick up a zip code, or potentially the trip distance, whatever it is that I want to play around with.
>
> **[2:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=153)** And then I've got this nice little dashboard here as well.
>
> **[2:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=156)** So what's really useful about this is that I can keep on building things, so I can potentially build some kind of a filter.
>
> **[2:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=165)** And in general, this gives me the ability to have these stored systems attached to the data so that other people that are looking at it might go , "Oh, okay, great.
>
> **[2:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=174)** This is one of the things that we want to take a look at with this particular data."
>
> **[2:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=179)** Now, the other thing that's also kind of a stealth feature here is if we go to one of these things here, like the Hive Metastore for example, it also gives us the ability to do more things.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=193)** So for example, if I type in Catalog Explorer, we can also open this up in a separate window as well.
>
> **[3:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=201)** Now, the other thing that is important to be aware of is that we're able to toggle back and forth between the SQL Editor and the Catalog Explorer, which is what we saw.
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=210)** So if I go here and I go to the SQL Explorer, right, that gives me this view, but I could always toggle back and go to the Catalog Explorer.
>
> **[3:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=219)** And there's really an interaction between the two things.
>
> **[3:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=222)** A lot of times you may want to just look at the data, but then when you want to actually change something, you would go back to the Catalog Explorer.
>
> **[3:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=230)** Finally, the other thing you can do that's actually very powerful is dive right into the Databricks file system.
>
> **[3:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=237)** So for example, if I look at the file store here, one of the things that we can see is that there is some data here that doesn't have a table.
>
> **[4:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=247)** So this would be something that later, if I wanted to create the metadata for this, I could go back to this Databricks file system and look at that particular path, create the table inside of the Catalog Explorer so then I could do queries with it, or do visualizations, et cetera.
>
> **[4:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=265)** So Catalog Explorer is really the place to start when you're dealing with metadata on the Databricks file system, and it saves you a lot of time if you set up some automations around the visualizations, and also the the descriptive statistics so other people on your team can immediately start to add value.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), finally, (2), interface (1), this. (1)
> **UI Navigation:** go to (3), click on (2), toggle (2)
> **Analogies:** for example (5)
> **Definitions:** is a  (3)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)

#### Creating tables from files
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=5)** - [Instructor] A very common task that is a little bit confusing with Databricks is how do I add data into the Databricks file system manually and then create a table based on it?
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=16)** So for example, if it doesn't show in the Catalog Explorer here, how do I actually get it to be created?
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=24)** So first step, what we want to do is look at the DBFS.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=29)** If we take a look at this DBFS here, look, I have some data that actually isn't inside of the Catalog Explorer.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=37)** So one of the things that we can do is we can actually pop over to the SQL Editor right here.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=43)** And what I can do is I can actually create a new query here that will create the table for us.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=50)** So what I can do is I can say create table.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=55)** And if we want to go back to this real quick, let's double check where this path actually lives.
>
> **[1:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=62)** So if I go to this, if I click on copy path, notice how it actually tells us DBFS, FileStore, tables, height_weight, or the spark API format, which is the one we want.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=75)** So I'm going to actually use that when I do this query.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=78)** So I'm going to say create table, and we'll call this one height_weight.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=86)** And we'll call this 25- K.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=90)** And we'll say using CSV because it's CSV data.
>
> **[1:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=94)** And then we'll say options here.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=98)** And we can put in, essentially, the path.
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=101)** And so this will be the first path.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=106)** And then if I do a quote, I can paste that in.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=111)** Looks good.
>
> **[1:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=112)** And then I can do a header equals true so that it will respect the column headers.
>
> **[2:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=121)** And that should do it.
>
> **[2:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=123)** If we go through here and we take a look at that, looks pretty good.
>
> **[2:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=126)** And I could even save that query, for example, if I wanted to.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=131)** And that looks pretty good.
>
> **[2:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=133)** All right, let's go ahead and run that.
>
> **[2:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=137)** And so what this is going to do, it's going to read in that data.
>
> **[2:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=140)** And then there we go.
>
> **[2:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=141)** We can see that it's able to actually create that table.
>
> **[2:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=144)** So what it means is if we go back to the hive_metastore, we go to default.
>
> **[2:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=150)** Aha, there we go.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=151)** We've got this thing actually created for us.
>
> **[2:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=155)** And if I want to, I can actually close this to get it out of the way.
>
> **[2:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=161)** And if we just go over here, we collapse this, we can see all of the different names here as well, which is pretty nice.
>
> **[2:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=170)** And I could also open this up in the Catalog Explorer independently.
>
> **[2:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=176)** So it's basically all ready to go.
>
> **[2:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=178)** We have the columns, we have the sample data, and we have the details as well.
>
> **[3:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=184)** So this is a pretty straightforward process to get this into the Catalog Explorer.
>
> **[3:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=189)** What we haven't covered though is how do you actually upload the data from scratch?
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=193)** So let's do that as well.
>
> **[3:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=194)** I'll add another file.
>
> **[3:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=196)** So we'll say Add, add the data, create or modify table.
>
> **[3:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=200)** We'll click on Browse.
>
> **[3:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=201)** I have some NBA data here that I'm going to upload.
>
> **[3:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=205)** There we go.
>
> **[3:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=206)** We see it gives us a nice preview mode.
>
> **[3:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=209)** And we can take all of this stuff and we can say, in fact automatically, create a new table as well.
>
> **[3:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=216)** And we'll call the table name nba_2017.
>
> **[3:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=219)** Let's just make it a little bit easier to work with.
>
> **[3:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=222)** And we'll say Create Table.
>
> **[3:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=224)** So if you used the proper interface as well, like for example the other one potentially was used from an API upload and it hadn't... The table hadn't been created, it could be a little bit more difficult.
>
> **[3:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=237)** But if you use the Catalog Explorer interface here, look, immediately, we've got all this working.
>
> **[4:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=242)** We can look at the sample data.
>
> **[4:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=244)** And in fact, I can immediately as well make a nice little dashboard here.
>
> **[4:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=248)** And if we go through and we say the number columns, maybe we can look at the... Let's look at some... Salary in the millions, that looks pretty good.
>
> **[4:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=261)** And maybe the page views on Wikipedia, and then the player name.
>
> **[4:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=266)** And we can actually create a nice dashboard from that.
>
> **[4:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=269)** And here we see I'm able to pop all that in.
>
> **[4:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=273)** We can see a box plot for the salaries.
>
> **[4:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=275)** We also see the total records. There's 239.
>
> **[4:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=280)** We can look at the page views as well.
>
> **[4:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=282)** We can see there's a very exponential relationship between the data here.
>
> **[4:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=289)** We see some outliers are just, you know, amazingly big.
>
> **[4:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=293)** And then we also can look at other things inside of this dashboard.
>
> **[4:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=297)** So in a nutshell, this is a great way to get started with your data is to use the Catalog Explorer, upload things, add it to a table.
>
> **[5:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=306)** And from there you can continue to use the Databricks interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (3), this, (2), default. (1), continue (1)
> **Env Vars:** dbfs (3), api (2), csv (2), sql (1), nba (1)
> **UI Navigation:** go to (2), click on (2)
> **Code Identifiers:** height_weight (2), hive_metastore (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)

#### Querying external data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=4)** - [Instructor] How do you query against external data sources?
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=8)** Well, if we take a look at this catalog explorer here, and we go to add, there's a section here where we can obviously add external data.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=17)** That's one option.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=19)** We can also integrate with native integrations as well.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=23)** So this is probably one of the easier ways to get started with querying external resources is you could put some items inside of blob storage and you could then integrate that directly into your upload.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=37)** Now, another thing you could do as well is you could have things in different databases like Cassandra, Snowflake System, JDBC, Kafka, Elastic Search, MongoDB Postgres, MySQL, even the DBFS itself.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=55)** And now you also can talk to other sources as well, and including Google Drive, you could look at Salesforce.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=66)** So there's a lot of different ways that we can actually add things inside from external sources.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=72)** One thing I'll also mention is that we can also look at Ingest via Partner.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=77)** And so this is slightly different in that what you can do is you can actually take data sets from these other resources here.
>
> **[1:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=87)** There's a nice integration.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=89)** Let's take this Fivetran here.
>
> **[1:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=91)** We could go through here. Advanced Options.
>
> **[1:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=93)** This is going to put it directly into your DBFS and you'll be good to go.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=99)** There's also BI and visualization as well.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=104)** There's sources for data preparation, transformation machine learning, so Dataiku Label Box, we got security, we have data governance.
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=114)** So there's a bunch of different ways that you can connect these external data sources as well.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=119)** So there's more than just being able to add the data directly from this interface.
>
> **[2:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=125)** You can also talk to providers by this Ingest Via Partner.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=128)** So really there's a rich set of resources to pull all this into your Databricks system.
>
> **[2:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=134)** And of course, you can use all of the existing interfaces like creating a new notebook or querying that directly inside of your SQL editor, or even going right into machine learning immediately when you have that data and running an auto mail experiment.

> [!info]- Semantic Content
>
> **Env Vars:** dbfs (2), jdbc (1), sql (1)
> **Code Keywords:** let (1), interface (1)
> **CLI Commands:** mysql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Inspecting tables
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=5)** - [Instructor] Let's take a look at how you would inspect a table inside of Databricks.
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=9)** First, proceed to the catalog.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=12)** The catalog explorer is going to require a warehouse to be running so that you can actually inspect the tables.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=21)** Now see here we have the hive_metastore, which is where the user uploads are kept, and we also have the samples, so these are the default.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=30)** So if I wanted to take a look at, for example, a table here, trips, notice that the owner is Databricks.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=37)** So we can see what actually occurred when this was first created.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=41)** So Databricks created it two years ago, and we see the size is 531 kilobytes.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=48)** We can also take a look here at the columns.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=50)** We can grab some sample data as well, and this will give us a good, you know, overview of what's happening.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=57)** We can also look at the details here.
>
> **[0:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=59)** And this shows us the location on disk, so this could be handy if you're doing some kind of operation, like, you want to copy something into a location.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=69)** And then we can also look at what are the permissions and also what's the history.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=72)** Now, this is going to be less helpful in terms of the default data, but if we go to some data that I've uploaded here and we take a look at this height_weight_2k here, you can see this is owned by demo, there's a fake email address, and we also have the columns that are available.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=89)** So we have index, height, weight.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=92)** Now, this is a nice thing you can do as well in inspecting data, is you can actually add comments.
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=97)** For example, we could say this is in LVs, for example, and then we could potentially add another statement that says this is in inches, right, some kind of metadata that lets us later figure out more information about this, and we could even add some things like, for example, "we don't need this".
>
> **[2:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=124)** And this would allow us to annotate and inspect what's happening.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=128)** We also can, again, go to the sample data, take a look at it, look at the details, look at the history, et cetera, and you can even add a comment directly onto the table itself and say, "this is synthetic height weight data."
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=148)** So really, this is your go-to spot if you want to inspect what's happening inside of the Databricks catalog, is go to the catalog explorer.
>
> **[2:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=156)** You can manipulate the table, inspect it, look at some metadata around it, add your own metadata to it, and finally, if you want to as well, you can directly go into a query, a notebook, or even create a dashboard.
>
> **[2:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=169)** Now, if we take a look at this notebook real quick, one of the handy features here is that it automatically gives us the query that we would want to run.
>
> **[2:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=177)** So this is actually pretty useful if we connect to a cluster here.
>
> **[3:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=182)** What's nice about this is that it can be the one-stop shop if you want to grab into a table and get as much information as quickly as possible, you can branch off from there and go to different solutions, like for example, starting to query it inside of the actual notebooks themselves and starting Spark jobs around that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), default. (1), this, (1), finally, (1)
> **Analogies:** for example (5)
> **UI Navigation:** go to (4)
> **Code Identifiers:** hive_metastore (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reliable data pipelines with Delta Lake
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=5)** - [Instructor] There are some severe challenges with traditional ETL, or Extract, Transform, and Load.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=12)** They have complex pipeline development, there is a lack of data quality often because of the mixture of data sources.
>
> **[0:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=20)** Also, there's manual end-to-end testing, this can cause a lot of issues in terms of getting releases out.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=27)** There's also inflexible stream versus batch processing, and it's time-consuming to manage the system.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=35)** So it's a good idea to have some of these problems solved with newer technology.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=41)** And if we take a look at the Delta Live Tables, automated intelligent ETL, we have some new changes.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=48)** One of them is that it's declarative, so you can use SQL, you can use Python pipelines.
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=53)** There's also built-in data quality checks, there are automated error-handling, also continuous and batch modes.
>
> **[1:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=62)** There's centralized pipeline observability, so this means that you can look at the entire pipeline and see what's actually working, what's not working, look at the debug messages, and fix it.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=74)** And finally, there's a simplified deployment model.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=77)** So the five steps to implement Delta Live Tables are automated, scalable data ingestion, also powerful distributed data transformation, declarative data quality controls, automated deployment and lineage tracking, and then built-in scheduling and notifications.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=95)** So at the end you get these five key benefits here.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=98)** You get a faster development pipeline, you have also reliable data pipelines, greater efficiency, and then flexibility across streams and batches, and then end-to-end pipeline visibility.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=109)** So really it's an enhancement over a traditional Delta Lake in that you have the ability to do things like time traveling, you have the ability to actually make these really automated changes.
>
> **[2:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=121)** And that's one of the benefits of the Databricks-Delta Lake.

> [!info]- Semantic Content
>
> **Env Vars:** etl (2), sql (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### ACID transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=4)** - [Instructor] Here is an explanation of ACID transactions.
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=8)** It stands for four key components of a transaction, that make it a unique type of transaction.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=15)** First off, we have Atomicity.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=17)** This is ensuring all the operations in a transaction succeed or fail as a single unit.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=23)** So you don't have an unstable state.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=27)** Everything is either successful or failure.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=29)** There is no partial state that's saved.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=31)** It's an all or nothing operation.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=34)** With Consistency, any Delta Lake transaction would take the database from one valid state to another valid state, for example.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=43)** We also see this with traditional SQL systems, in terms of related data.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=49)** So for example, the tables, they're going to be kept consistent after the transaction.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=54)** This is very different than no SQL databases, which have eventual consistency.
>
> **[1:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=60)** There is Isolation as well with ACID transactions.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=63)** This means that concurrent transactions and queries are not going to interfere with each other.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=69)** For example, if there's an uncommitted change, or there's an intermediate state, and the changes will remain isolated until they're committed.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=77)** Durability is another one.
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=79)** So once a transaction commits, the changes are persisted durably, and they survive failures.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=86)** Also, the committed data will never be lost.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=89)** So some of the benefits include data integrity across batch and streaming.
>
> **[1:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=94)** You also have the ability to query consistency with snapshots, and there's fault tolerance because you can have durable logs.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=103)** Finally, you have reliable data delivery.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=106)** So it's really the highest standard, in terms of data quality, is to have the ability to do ACID transactions.
>
> **[1:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=112)** There's some things you lose by it, for example, the scalability aspects are limited because of that consistency.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=119)** But in terms of data quality, ACID is really the gold standard.

> [!info]- Semantic Content
>
> **Env Vars:** acid (4), sql (2)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), stands for (1), means that (1)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Z-ordering optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=4)** - [Instructor] What is Z-ordering?
>
> **[0:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=6)** This is an important technique for Delta Lake, and it collates related information in the same set of files.
>
> **[0:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=13)** So this co-locality is automatically used by Delta Lake on Databricks' data skipping algorithms, and this means that it can dramatically reduce the amount of data that Delta Lake on Databricks needs to read.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=27)** So if we take a look at this SQL query here, you can specify the columns to order in the Z-order by clause.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=35)** So we see optimize events, where date, greater than or equal to, current timestamp interval, one day, and here we get into the magic.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=44)** Let's go ahead and use Z-order by event type.
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=47)** So some of the things that you can expect is that when you're using a query prediction and the column has high cardinality, so a large number of distinct values, then the Z-order really comes into play and it helps you out in terms of being able to skip certain parts of the data.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=65)** So really, if we look at the key characteristics here, it is automatic data skipping.
>
> **[1:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=72)** This means that the Delta Lake collects minmax stats on rights to enable predictive push down.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=77)** Also happens transparently without extra configuration, and it skips scans irrelevant to the data at the query time.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=85)** Next up, we have better locality as well, so this means it co-locates the related column values within the same data files.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=95)** It also provides a major boost to skipping effectiveness, and you can specify the columns that you want to use the Z-order by.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=104)** Also, the statistics are great as well because it gives you a configurable statistics collection and it defaults to the first 32 columns in the table schema.
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=114)** But you can customize it via the columns property, and you can avoid high cardinality textual columns.
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=122)** So the last two things here to mention are there are significant query speedups, so there's much less data needed to be scanned.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=130)** It's particularly effective with specific queries, and especially, the selective specific queries.
>
> **[2:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=139)** And it translates to lower costs, total cost of ownership.
>
> **[2:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=143)** And finally, it's incremental, so there's an incremental re-optimization.
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=148)** You can apply the Z-ordering after major backfills.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=151)** You can rerun it when the data distribution changes significantly, and you can even test the queries to quantify the performance gain.
>
> **[2:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=158)** So it's a nice trick to have in your toolkit when you're using Delta Lake on the Databricks platform.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type. (1), finally, (1)
> **Definitions:** means that (2), is an  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 4. Data Pipelines with Delta Live Tables

> [↑ Back to Table of Contents](#table-of-contents)

#### Vacuuming and garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=5)** - [Instructor] If we take a look at vacuuming and garbage collection in Delta Lake, vacuuming will remove older versions of data from Delta Lake tables that are no longer needed based on retention policy so it could save storage costs and it can be done automatically.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=21)** And then in terms of garbage collection, this would remove the underlying data files that are no longer referenced by any snapshots.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=29)** Some of the benefits include storage costs are going to be reduced because the unused table versions of data files, improving performance.
>
> **[0:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=38)** And so the use, data base, vacuum, these are some of the commands that we need to know about.
>
> **[0:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=42)** Now, first though, let's look at a table that's not a Delta Lake table.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=46)** If we click on this thing, take a look at, in fact, the details here and we can see, look, it's a very simple amount of details, and it says type external.
>
> **[0:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=59)** Let's take a look at a table that I copied and converted to a Delta Lake table.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=65)** If we look at the details, you see that in fact it says type manage.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=69)** So by default, a managed table is a Delta Lake table.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=74)** And so what this means, it has all these fancy capabilities, like time travel, but we're also going to need to manage it in the case of vacuuming a garbage collection.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=84)** So how do we do this?
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=85)** Well, let's move over to some code here, and let's pretend that we do a select, right?
>
> **[1:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=91)** We look at this default table here that isn't a Delta Lake table.
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=97)** Well, what could we do?
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=99)** Well, we could try to optimize it, but notice that this won't work.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=103)** We see this giant trace back here because it's not a Delta table.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=107)** So the OPTIMIZE command would go through in garbage collected, but it's not going to work because it's not yet a Delta table.
>
> **[1:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=115)** So how do I change this?
>
> **[1:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=117)** Well, if I go to Delta Lake table here, right?
>
> **[2:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=121)** I can say create table, and I can create a copy of the existing table.
>
> **[2:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=128)** And we can do this by creating a new table.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=131)** So we say CREATE TABLE delta_table_height_weight_2K, USING delta AS SELECT * FROM, and then this is the path of my original table.
>
> **[2:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=139)** Once I've done that, now we have a Delta Lake table, which again, we can go through and we can see here, this is a Delta Lake table.
>
> **[2:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=147)** And then likewise, I could actually go through and do the optimize setting.
>
> **[2:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=152)** I also could vacuum it as well.
>
> **[2:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=155)** These are all the things that you can do once you have the ability to do Delta Lake Table operations.
>
> **[2:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=162)** So if you do have an existing table that you want to change, you can just make a copy of it and convert it into a Delta Lake table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), from, (1)
> **Env Vars:** optimize (1), create (1), table (1), using (1), select (1)
> **SQL:** create table (1), select (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Table documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=5)** - [Instructor] Here we have Catalog Explorer, and what I'm going to do is add documentation to a table.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=10)** There's a couple ways to do this.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=12)** First, we can go look at a table and I'm going to take this height, weight table here and notice that it says this is a table comment.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=21)** So let's go ahead and change that and just say that it is synthetic data.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=28)** Right, so I've been able to enhance the table comment here, which is great, but a lot of times, you don't always want to point and click and change things.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=39)** You want to be able to programmatically interact with a table.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=44)** So what we can do is go to Create and go to SQL Query here.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=48)** And we can actually manipulate this by doing a SQL Query.
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=53)** So what I can do is I can say let's go ahead and take this default SQL statement out and do an alter table here.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=61)** So what I can do is I can say, "ALTER TABLE," and we're going to go ahead and select this one, which is the height weight here.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=74)** And next I'm going to change the property.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=77)** So I'm going to say "SET."
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=79)** And I'm going to do a table properties.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=85)** There we go.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=86)** And notice that I can actually put inside of here what it is I need to do.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=92)** In this case, I'm going to say "comments," so I'll add a comment to this and it will say maybe something different.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=99)** Say "Synthetic data on height/weight," right, "added By John."
>
> **[1:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=114)** So we've got some comments here.
>
> **[1:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=116)** Let's close out with a semicolon.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=119)** And now if I wanted to as well, I could save this and we could just call this a default query as well.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=127)** So let's go ahead and alter the table.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=130)** We'll see the result here.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=131)** Great. I was able to alter it.
>
> **[2:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=133)** Now how do I programmatically also see what happened?
>
> **[2:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=137)** Well, fortunately it's pretty straightforward as well.
>
> **[2:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=141)** What we can do is just do a change here where we describe the table.
>
> **[2:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=146)** So let's go ahead and go back to this.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=151)** Go to Describe, and we'll say "DESCRIBE EXTENDED."
>
> **[2:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=158)** And this will give me the ability to see the extended attributes of the table.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=163)** And we see that it is index, height, weight, right, catalog.
>
> **[2:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=168)** But notice here that we also have a comment on each of these.
>
> **[2:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=175)** And then in terms of the actual comment on the table, we can see my new comment is actually kept there as well.
>
> **[3:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=182)** So this is a great interface if you have some SQL experience to document your tables.
>
> **[3:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=188)** I mean, why not have really good documentation?
>
> **[3:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=191)** And of course, if we need to go back here, all I need to do is actually go back to that table name here.
>
> **[3:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=198)** And if we select this, we can say open in Catalog Explorer.
>
> **[3:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=202)** And then once I'm in Catalog Explorer, I can use those same techniques as well, right?
>
> **[3:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=207)** I can visually see that comment has been made.
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=210)** So documented tables either in SQL or Catalog Explorer is very straightforward in Databricks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), case, (1), interface (1), this, (1)
> **Env Vars:** sql (5), alter (1), table (1), set (1), describe (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **SQL:** alter table (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Automated pipelines with Delta Live Tables
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=8)** - [Instructor] Delta Live Tables are a new way of scheduling workflows because you're able to use all of the advanced features of Delta Live, and you can obviously create a new pipeline by just selecting Create.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=21)** Notice you'll have to select a pipeline name.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=24)** You can choose what product for Advanced, Core, Pro, etcetera.
>
> **[0:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=29)** You can even see some documentation about which ones to choose.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=32)** And then you have the option of doing continuous or triggered.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=36)** So the difference between a continuous, with streaming data, you could always be ingesting the new data as it arrives, versus a triggered would be on an event, and then you would pass in the source code path as well.
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=47)** You know, for example, your repo that's connected to your workstation, that could be a good a place to store your source code.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=55)** And then in terms of the destination, potentially the Unity Catalog.
>
> **[1:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=60)** And then in terms of compute, you would select what kind of compute cluster you would want to run.
>
> **[1:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=64)** So I already have one running.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=65)** So let's go ahead and take a look at this demo here.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=68)** And you can see here in this Delta Live's spreadsheet, we have a streaming table here, which is customers.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=76)** We also have the streaming table here, and these are able to move into a combined sales_order_clean.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=83)** So there's some ETL operations.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=86)** And then we have a materialized view here and a materialized view here.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=89)** What's useful about this is that we also can toggle and look at a list and get more information.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=98)** For example, did it fully complete?
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=100)** What are the different types of jobs that are actually running?
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=104)** Is it a streaming job, for example?
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=107)** How many records were written?
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=109)** Did any of the records drop?
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=111)** So if you're dealing with, you know, anything from the internet, like an API, there could be some drops, so there could be some failures.
>
> **[1:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=117)** And it's really nice to be able to just see that in one view.
>
> **[2:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=121)** Likewise, we can find directly where the source code lives as well by just selecting where that lives.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=127)** And if I go to that source code link, you can see here, here's the notebook that gives us all of the streaming code here, and we could make changes to it as well.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=138)** So there's a nice interface between the live code back to the automated pipeline.
>
> **[2:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=143)** So, to kind of wrap this up here, the last thing that might be important to be aware of is that you also can toggle between different modes.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=151)** So, in your Development mode, you get things working, you could then toggle to Production mode, and then, finally, you could schedule this pipeline on some kind of an interval as well.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=163)** So there are a lot of features that make doing complex data pipelines fairly straightforward with the Delta Live Tables.
>
> **[2:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=170)** And you can see here a pretty good overview of the basic features of Delta Live Tables.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), let (1), interface (1), finally, (1)
> **UI Navigation:** toggle (3), go to (1)
> **Exercise Files:** source code (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **Env Vars:** etl (1), api (1)
> **Code Identifiers:** sales_order_clean (1)
> **Warnings:** be aware (1)

#### Delta Live Tables components
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=4)** - [Instructor] Here we have the key components of Delta Live Tables, and you can see as you incorporate the best practices, you can move from the bronze zone to the silver zone to the gold zone.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=16)** If you see the differences here are that, let's say for example, in the silver zone, you're able to get the whole data pipeline observability functioning.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=25)** At the end of the gold zone, you're able to have automated deployments and operations, so MLOps or DataOps, and you're also able to orchestrate your data pipelines.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=36)** This leads to better results in SQL analytics and BI, AI and ML, and also data sharing.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=43)** So if we walk through this diagram here, you can see that efficient data ingestion is a big component of Delta Live Tables.
>
> **[0:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=51)** The auto loader has incremental landing, and this is in the bronze layer and the ingestion from diverse sources like cloud storage or CDC or message buses, and you can load the data in a very simple way for the entire data team from SQL users to engineers.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=69)** Next step, we have intelligent data transformation, and this means streamlining architectures using streaming tables and views.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=76)** And this would have the ability to have quality enforcement, also flexible, continuous, or triggered pipeline execution, and you could leverage the performance optimizations of Spark structured streaming.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=90)** Next step, you have a simplified pipeline management, and this means handling orchestration, monitoring, failure, CICD, version control, autoscale your infrastructure, for example, with infrastructure as code, and also allowing the focus on business logic rather than just operations.
>
> **[1:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=110)** And then with the Lakehouse platform integration, the Unity catalog is useful for data discovery, governance.
>
> **[1:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=118)** And then the Delta Lake is the reliable storage layer, and it works across multiple cloud environments.
>
> **[2:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=124)** And in terms of the business impact, you would be able to have faster development velocity, easy scaling to manage increasing data volumes, and also you would accelerate time to insight across an organization.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=138)** Really what this means is that you're able to reduce the pipeline total cost of ownership through automation.
>
> **[2:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=144)** Really, that's the final gold zone.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), cdc (1), cicd (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Continuous vs. triggered pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=8)** - [Instructor] Let's take a look at two different Delta Live Pipelines.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=12)** First up here we have continuous.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=15)** The idea with a continuous pipeline is that data is processed from sources continuously as it arrives.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=21)** So streaming data, new inserts and updates are incrementally synced to target tables.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=28)** It also enables real-time ETL extract, transform, load, and also real-time analytics.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=35)** So the use cases for this would be a metrics dashboard.
>
> **[0:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=38)** Let's say you wanted to know what revenue is being generated on an hourly basis, or even real-time.
>
> **[0:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=45)** This would be a great use case or fraud detection in real-time.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=49)** You want to see what fake credit card numbers are being entered.
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=53)** You could have a fraud detection system via this continuous pipeline.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=58)** Now, triggered pipelines are a little bit different in that the data is processed during scheduled windows instead of continuous.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=66)** So this means that, let's say, once per day you would do some operation and the windows can be scheduled via Cron schedules.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=75)** And this allows for batch or periodic processing in a logical manner like hourly, daily, weekly, et cetera.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=83)** And these use cases would include aggregated reports or even ML model training.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=89)** For example, maybe once per day as you get an update, you have a small machine learning model that you rerun, and that's done via this triggered window.
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=101)** Now, you could also consider that continuous is going to have lower latency, but would require more resources.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=109)** So this could cost much more money.
>
> **[1:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=111)** And triggered is more cost-efficient for batch based workloads.
>
> **[1:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=116)** So you can also combine the approaches based on the consumption that you're seeing.
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=122)** And you could also change, maybe make a pipeline configuration update, and you could actually try one version versus another version.
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=131)** So they're both great technologies and it's up to you to figure out how to put the best use case in for both, while also monitoring the cost and the benefit to your organization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1)
> **CLI Commands:** make (1)
> **Env Vars:** etl (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Configuring Auto Loader
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=8)** - [Instructor] The Auto Loader allows you to securely ingest data from external locations as long as you have the Unity Catalog.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=16)** Here's some key talking points to be aware of.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=19)** First up, there is the source configuration.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=22)** This means support for cloud storage, the database, the messaging system.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=27)** You can handle various data formats like JSON, Parquet, CSV, and also, there is credential management for secure connectivity.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=36)** The incremental data loading is another important aspect because it persists the cursor state for each source, and you're only going to get the latest inserts and updates pulled in, and it's going to be a lot faster and efficient for full loads.
>
> **[0:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=51)** For transformations, you could execute a query on a source system.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=54)** You could apply a filter, an aggregation, a conversion.
>
> **[0:57](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=57)** You could also change into Delta for reliability as well.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=63)** In terms of monitoring, there are dashboards that can track the pipeline health.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=68)** You can get alerts.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=69)** There's also de detailed debug logs as well, and then, in terms of scheduling, you can set schedules with crons or trigger or continuous execution, and then have built-in dependency management across jobs, so really straightforward here to build this kind of code.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=85)** You can see in Python, just a few lines, and then you're able to take advantage of the advanced capabilities of the Unity Catalog to manage that table.

> [!info]- Semantic Content
>
> **Env Vars:** json (1), csv (1)
> **CLI Commands:** python (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Querying pipeline events
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=8)** - [Instructor] Here we have a query around the API for pipeline events in a Delta Lake Pipeline.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=14)** Notice here how you can do a get request, go to the API, the second version, or whatever version of the future, look at the pipeline, pass in the pipeline ID, and then get these events.
>
> **[0:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=26)** There are three different query parameters as well, including order_by, filter, and max_results.
>
> **[0:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=32)** And you can see this sample JSON payload that gives you some of those items.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=37)** So in a nutshell, there are CRUD APIs for Delta live table pipelines.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=41)** You can manage permissions to control access, you can remove the pipeline execution, events and metrics.
>
> **[0:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=47)** You can monitor pipeline status and health, and you can handle the lifecycle via start, stop and reset commands.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=55)** In terms of the DBFS, the API also is similar.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=58)** There are basic file system operations, the CRUD operations to DBFS, downloading and uploading.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=65)** Also listing files and contents, setting ACL permissions, and then programmatically accessing the DBFS from jobs.
>
> **[1:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=73)** So the common capabilities are there's granular validation and error handling, structured request response, standard HTP codes, so it can work with many different languages.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=83)** And there's pagination support via tokens.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=86)** So this is easy to integrate into a customized CICD workflow and also build custom tooling and automation.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), dbfs (3), crud (2), json (1), acl (1)
> **Code Identifiers:** order_by (1), max_results (1)
> **Code Keywords:** pass (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### End-to-end example of Delta Live Tables
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=8)** - [Host] Here we have a end-to-end example with a Delta live table inside of the Workflows interface.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=14)** And notice that there are these initial components that show us what's happening.
>
> **[0:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=20)** So in terms of data quality, we can see that 100% of the code was written.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=25)** We we toggle down to the next section also 100%, 4,000 items.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=30)** We can go to the quality here as well, and we can see that the expectations.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=35)** We have some drops here.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=37)** There's no failures, so what's nice about an Indian pipeline is we can inspect each part of the pipeline and get granular ability to look at the data quality, look at the details, the schema, the flows, and even toggle between the development and production.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=54)** And we also can see this from this menu as well.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=58)** So it's going to show when the pipeline is starting, when it's running, when it's completed, and we can also see the updates as well.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=66)** So an Indian solution has a lot of monitoring and observability of the pipeline.
>
> **[1:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=71)** This can be invaluable when there's very complex things happening.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=75)** Potentially there could be a problem in the middle here.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=77)** How do you know if it even failed?
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=79)** This is a improvement over a bunch of scripts that are cobbled together because you don't know what's happening in those scripts.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=86)** So the observability of the data pipeline is one of the strengths of these Delta live tables, and you're able to do this inside of the interface and also schedule it in the future.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=98)** Also start it on demand.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (2), go to (1)
> **Code Keywords:** interface (2)
> **Definitions:** is a  (1)
> **Speakers:** - [host] (1)


### 5. Workloads with Jobs

> [↑ Back to Table of Contents](#table-of-contents)

#### Orchestrating workloads with jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=4)** - [Instructor] Here we have a Databricks Jobs overview.
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=8)** Let's take a look at what a typical job would look like.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=10)** So let's say that I wanted to interact with a notebook.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=15)** This notebook could, for example, do ETL operations or maybe create some new tables or ingest some data.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=21)** It could even create a dashboard automatically.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=25)** That is a great thing to do manually, but it's even better if you're able to automate it.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=30)** So that's where the jobs comes in, is that what I can do is I can set up a new job here and then hook it up to the notebook that I've already created in, for example, source code repo.
>
> **[0:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=40)** So notice here that we have the ability to look at the Databricks workspace, so that's a kind of default place, but I also could point the jobs to the source code repo.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=50)** So this is going to be a best practice here.
>
> **[0:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=52)** I would check in that notebook again, it could potentially create some new tables and just some data.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=58)** Maybe create a dashboard.
>
> **[1:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=60)** And then finally, I'll go ahead and I'll schedule that job to run, let's say, every day.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=65)** And this could be a great way to give a report to maybe somebody on the business team.
>
> **[1:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=70)** The other thing that I'll need to do is actually decide what is the cluster that needs to be involved in order to do all of the disk I/O, the computation.
>
> **[1:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=79)** And so that'll be an ephemeral job that will launch a cluster.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=83)** Once the job is finished, the cluster will actually spin back down.
>
> **[1:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=88)** Now there are other things you can do beyond just a notebook, which is very useful.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=92)** You could point it to a Python script, which again, should live in a source code repo, but it could also live in Databricks workspace.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=100)** You could also build out a very sophisticated SQL query that did a bunch of different things in your organization.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=107)** Again, check that into a source code repo, or it could even point directly into a Databricks workspace, and you could actually save previous SQL queries and point to it.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=119)** A final thing that could be pointed out is that you also could have a JAR file.
>
> **[2:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=123)** So Java has the ability to have portable runtimes.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=127)** You could create this JAR file, have it waiting there, ready to go, and that could do an ETL operation.
>
> **[2:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=133)** So there's a lot of flexibility, and there's even different targets beyond these targets when you're setting up Databricks jobs.
>
> **[2:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=139)** But what's great is that you're able to put this all into a uniformed and automated ecosystem so that you are able to look at everything that's happening when the job runs, debug it, schedule it, or even periodically just manually schedule it when you want to start something or you want to build a batch based operation.

> [!info]- Semantic Content
>
> **Env Vars:** etl (2), sql (2), jar (2)
> **Code Keywords:** let (3), finally, (1)
> **Exercise Files:** source code (4)
> **Analogies:** for example (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)

#### Databricks jobs demo
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=5)** - [Instructor] Here we have the main interface and we're going to take a look at how to create a new Databricks job.
>
> **[0:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=10)** I'm going to go to Workflows.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=12)** And inside the workflows we have several jobs that are already available.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=16)** So if I wanted to filter through, let's say, thousands or tens of thousands of jobs, you know, if I typed in Hello, right, I'm only going to see that interface.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=24)** So this could be a very helpful way to look through lots of jobs.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=28)** If you're in a bigger organization, it's very likely that you could have tens of thousands of jobs.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=34)** Now, in order to create a new job though, all I would need to do is select this Create job window.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=41)** Let's go ahead and click this.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=43)** And now we have this new interface and we can name the job.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=46)** So we'll call this one run-notebook.
>
> **[0:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=52)** And what's nice about this is that we can then go through here and create a task-by-task setup.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=61)** So you can create an initial task and then link a second task or a third task or a fourth task.
>
> **[1:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=67)** And potentially, we could even say this run-notebooks, right, so it would signify that we would run multiple notebooks.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=74)** So first one, we could call this, you know, notebook1.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=78)** And then from here we could look at the type.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=83)** So notice here, under Type, we have Notebooks, Python scripts, Python wheel, SQL, Delta Live Tables pipeline, dbt, JAR, Spark Submit, Run Job, If/else conditions.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=95)** And these, if/else could be really handy if you're going to, you know, do something that needed to wait for certain resources or there was a condition that you needed to match here.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=106)** So there's lots of options.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=107)** We're going to go ahead and stay with Notebook.
>
> **[1:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=110)** Now notice here, under Source, this is where you would also take a look at, you know, what is actually the source for your notebook?
>
> **[2:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=120)** Is it going to be in a Git provider?
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=122)** So GitLab, for example, or GitHub, Bitbucket, AWS CodeCommit, or is it going to be inside of the Databricks Workspace itself?
>
> **[2:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=131)** I think most mature organizations probably are going to be pointing to a Git provider here.
>
> **[2:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=136)** Now, once you've done that, you would just go ahead and pull up the path to a notebook.
>
> **[2:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=141)** In this case, I could select, for example, maybe a data-science notebook or a demo notebook.
>
> **[2:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=149)** Whatever it is that I'm going to build.
>
> **[2:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=151)** We'll go ahead and pick this demo notebook.
>
> **[2:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=153)** And then notice here as well that there's a default Job_cluster.
>
> **[2:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=158)** We could use this.
>
> **[2:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=159)** We also could use an existing all-purpose cluster.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=163)** The difference here is that in the case of the all-purpose cluster, this could be running for maybe data analysis already.
>
> **[2:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=171)** And so we, we potentially would want to already use it.
>
> **[2:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=174)** What's nice about the job_cluster though, is it's ephemeral in that it'll spin up, do the job, and then spin back down.
>
> **[3:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=181)** So we could go ahead and leave that.
>
> **[3:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=183)** And then you could add other things like notifications, for example.
>
> **[3:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=187)** You could also ask, you know, Retries, Duration threshold.
>
> **[3:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=191)** So lots of options here when you're actually working with the jobs interface.
>
> **[3:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=196)** So once this task is created, then you could again add another task, right?
>
> **[3:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=202)** And so you could just link them again over and over and over again.
>
> **[3:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=205)** Now also, if we take a look at some of these things here, you can see the job details.
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=210)** You could add tags to it.
>
> **[3:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=211)** For example, maybe this is going to be the team and this will be data-engineering.
>
> **[3:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=219)** And maybe you could add another tag, which would be, you know, type, et cetera.
>
> **[3:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=225)** Anyway, as you go through here and you add your tags, these could be useful in sorting through things.
>
> **[3:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=231)** You could also hook this into Git to make sure you have this checked in because it could be a complex schedule.
>
> **[3:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=239)** And then also in terms of the Trigger type, you could do scheduled or continuous.
>
> **[4:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=244)** If you do scheduled here, notice how you could actually build it in syntax.
>
> **[4:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=249)** So this is really common for team engineering is to have pipelines that are scheduled and they run and they do some operation at a certain time per day.
>
> **[4:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=258)** And that's definitely one of the ways to do it.
>
> **[4:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=260)** And then finally, once you've done it, you also, if you wanted to, could just go ahead and select Run now.
>
> **[4:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=267)** Now let's look at the interface here for previous job run.
>
> **[4:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=271)** So let's go ahead and take a look here.
>
> **[4:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=273)** And we can see here that this is a nice overview of some of the things that are happening.
>
> **[4:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=277)** If you're working at a large organization, you'll be able to see lots and lots of runs and you may even want to, you know, look at the different statuses here, assort by Failed.
>
> **[4:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=288)** And so we see one here, it's failed.
>
> **[4:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=290)** Uh-oh, what's happening?
>
> **[4:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=291)** So if I take a look at this failed job here and we take a look at what happened, you can see here that look that it was terminated while it was waiting to be ready.
>
> **[5:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=302)** So there, the cluster, there was maybe not enough quota for this particular job.
>
> **[5:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=307)** And so I could debug that and and figure it out.
>
> **[5:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=310)** So it's a great interface not only to create the job, but also to look at previous jobs, make sure that you understand which ones are failing, which ones are skipped, which ones have been successful.
>
> **[5:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=323)** And in a large organization you need a jobs management framework like this so you can orchestrate in a reliable way many different parts of your pipeline.
>
> **[5:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=332)** If you don't have automation for the jobs workflow, it's going to be incredibly difficult to get anything done.
>
> **[5:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=340)** And in a more sophisticated organization, you're going to need to both automate and schedule these jobs, as well as be able to monitor and observe exactly what's happening.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (4), type, (3), this. (2), this, (1)
> **CLI Commands:** git (3), python (2), make (2), aws (1)
> **Analogies:** for example (4)
> **Env Vars:** sql (1), jar (1), aws (1)
> **Tools:** gitlab (1), github (1), bitbucket (1)
> **Prerequisites:** setup (1), make sure you have (1)
> **Code Identifiers:** job_cluster (1)
> **UI Navigation:** go to (1)

#### Multitask workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=4)** - [Instructor] Let's take a look at a multi-task workflow for jobs.
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=9)** So I'm in the workflow interface right here, and we can see that there are multiple tasks that are set up.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=15)** We have a ingestion, then a preparation step, and then an analysis step, right?
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=22)** So there's three different tasks.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=23)** If I wanted to add another task, I could do that as well.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=27)** Once you're in this multitask interface, the other thing you can do is add a schedule.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=33)** So this schedule could be something where you would trigger continuously, and you can see a continuous job is always running.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=41)** And so in that case, it could be maybe something for a dashboard or streaming data.
>
> **[0:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=46)** And then for scheduled job, you can also do this at a periodic interval and even toggle between cron syntax.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=54)** Really the advantages with a multitask setup is that you can break each of these notebooks up into an individual piece.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=61)** We can take a look at this, for example, in one of these tasks that I point it to the path of where my notebook lives.
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=69)** I then point it to the job cluster, and I also have the ability to toggle between the different types here.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=76)** So in this case, we're doing a notebook, but it could be a Python script, a JAR file.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=81)** It could be a Delta Live Tables pipeline.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=84)** By allowing yourself to break the problem into multiple pieces is going to be a lot easier to debug both when it's running and also when you're coding up the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), case, (2), let (1), this, (1)
> **UI Navigation:** toggle (2)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** python (1)
> **Env Vars:** jar (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Task dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=3)** - [Instructor] Here we have a workflow that involves multiple tasks, and that's one of the things you can do with the jobs framework.
>
> **[0:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=11)** We have a songs workflow, a prepare songs data, and analyze songs data task.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=17)** Each of these tasks, if I toggle through, has different types of dependencies.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=22)** Notice at the very end here, that this one actually depends on the previous task.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=28)** Likewise, if I go to this, it depends on the task before it.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=34)** So this is part of building a task pipeline that involves multiple steps is that you have to wait until the previous step is complete, and when it's successfully completed, then it will proceed to the next step.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=48)** This is where, also, you have to be careful of other task dependencies, other than just the task themselves.
>
> **[0:54](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=54)** Some of the things that they could involve and involve dependent libraries, so for example, you may want a library loaded and it must be automatically attached to the cluster, so this is very important, or your job would fail.
>
> **[1:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=68)** Likewise, there may be certain parameters that need to be passed.
>
> **[1:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=71)** If we go through here and we add, it could be a parameter that needs to be in.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=75)** Finally, if you look at some of the other things, as well that are dependencies, you may want to also look at the cluster itself.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=86)** And so the cluster may involve things like a GPU or a certain version of Spark.
>
> **[1:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=92)** So it's important to be able to really dive into all of the different task dependencies, the tasks themselves, the libraries.
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=101)** Also, when you look at the cluster, does it have the appropriate runtime?
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=106)** And these are some of the key things to watch out for when you're looking at task dependencies.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1)
> **UI Navigation:** toggle (1), go to (1)
> **Warnings:** be careful (1), watch out (1)
> **Env Vars:** gpu (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Viewing job history
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=9)** - [Instructor] Let's take a look at how to monitor job history.
>
> **[0:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=12)** We'll go over to workflows here and notice we have all these jobs, which have some history in the fact that they show the last run whether they failed or succeeded.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=21)** So that's pretty useful, right?
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=22)** We could go through here and just look at the jobs themselves and find ones that have problems.
>
> **[0:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=27)** And here we see there's an issue where there was a cluster, was terminated in a state that was unexpected because of a quota.
>
> **[0:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=38)** So this could be something I would debug.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=39)** But if we take a look here and we go back, this is definitely an easy interface, but a more comprehensive is job runs.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=48)** So if we go to job runs here, notice that it shows us the status, right?
>
> **[0:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=53)** So we could actually look at failed.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=55)** We could look at active, we could look at completed.
>
> **[0:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=59)** So this is actually a much more robust way to take a look at things because we can sort by the status.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=65)** So if you have hundreds and hundreds of jobs each day, which in bigger organizations you would, you would go down here and toggle through, maybe look at the field jobs and say, okay, let's go ahead and take a look at how we can resolve this.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=77)** Again, I could see the date that it was resolved as well as the status.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=83)** So some of the easy ways to dive into this are to go again to the workflows interface.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=90)** Take a look at the last run that gives you a nice overview when you're getting into more of a status based approach, then look at the status here.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=100)** Go ahead and potentially look at all the failed statuses.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=103)** Dive into 'em, click on the job, see what happened.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=107)** Dive into the status message itself, debug it, and then move on to your next solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2), this. (1)
> **UI Navigation:** go to (1), toggle (1), click on (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Using dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=5)** - [Instructor] Here we have the New York City Taxi Trip Analysis dashboard, which is using the Databricks sample dataset on the New York City taxi trips.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=16)** Notice it's in this interface dashboard.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=19)** Let's point out some of the advantages of a tool like this.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=23)** So you're a data analyst or a data scientist, and you need to have important information that you share with people in your organization.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=30)** When you share a dashboard like this, what's nice about it is that you're able to give people up to date information with any interval that you're looking at, and you can also query and give them the ability, in human knowledge, to look at different ranges.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=49)** So they don't need to know SQL.
>
> **[0:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=50)** They don't have to actually know anything about writing code because they can toggle and search from different date ranges, or they can look at different zip codes themselves.
>
> **[1:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=60)** So this is very empowering, and it's a democratization of data science and data analytics.
>
> **[1:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=67)** Now notice here as well that look, it says 5 minutes ago.
>
> **[1:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=70)** So this was updated 5 minutes ago, and the reason that it's updated is because I selected it.
>
> **[1:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=76)** If I select this again, you can see that this will show that it's instantly updated.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=82)** So you can actually have different states.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=84)** So it's really up to the user.
>
> **[1:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=86)** If the user wants to get the latest updates, they could click it again.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=90)** Likewise, when you actually create this as a scheduled job, notice that you could say, add schedule, and you could say, look, every hour I want this to update, and that might be okay for the majority of people.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=103)** You also have the ability to do this in cron syntax as well.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=106)** And you can even add subscribers.
>
> **[1:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=109)** And this dashboard snapshot will be sent to a subscriber.
>
> **[1:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=113)** So really, there's a nice scheduling interface here as well.
>
> **[1:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=116)** You can obviously share.
>
> **[1:59](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=119)** And finally, if you click on refresh here, it will refresh every single window inside, which is also pretty helpful.
>
> **[2:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=129)** So you can see it refreshing, and we see, just updated right now.
>
> **[2:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=133)** And you can see that you could, if you wanted to as well, go into, if you have the administrative privileges, click on this menu and you can also edit this.
>
> **[2:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=144)** And what that means is that you can actually add new things.
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=148)** So you could add a text box, you could add a filter.
>
> **[2:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=150)** So this is a filter right here.
>
> **[2:32](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=152)** You could add a visualization, you could do different colors.
>
> **[2:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=155)** But the other thing I think that is very useful is that you can learn a lot from using these as well.
>
> **[2:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=162)** So if I select one of the visualizations here, this is a nice little graph here that shows the fare amount and the trip distances, you can see there's a linear relationship.
>
> **[2:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=172)** But how did that SQL query get generated?
>
> **[2:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=175)** Well, pretty easy to figure out, I can just select this and I can look actually at the query itself, which is pretty awesome.
>
> **[3:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=184)** Obviously I could also download the CSV, which could be useful.
>
> **[3:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=188)** But let's go ahead and look at this query.
>
> **[3:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=191)** Now take a look at this, I'm inside of a query editor, you can see at the SQL Query Editor.
>
> **[3:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=198)** And we see that it says use catalog samples, select, right here, and we're able to actually look through all of the different SQL queries, and I could tweak it if I wanted to.
>
> **[3:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=210)** So this is a great way both to learn when someone in your organization has created a dashboard for you, but also for you to edit this if you have the privileges to do it.
>
> **[3:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=221)** So the dashboarding interface is one of the more powerful interfaces of Databricks, and make sure you take advantage of it.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), this. (2), this, (2), finally, (1)
> **Env Vars:** sql (4), csv (1)
> **UI Navigation:** click on (2), toggle (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Handling failures
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=9)** - [Instructor] Debugging failed job runs can be tricky.
>
> **[0:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=11)** We see here in this workflow's interface that I have a little bit of an issue in that this job is actually failing here, and we could actually look at the last run and say, "Uh-oh.
>
> **[0:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=23)** What's going on?
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=24)** Why is it failing?"
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=25)** And I even get the message and I could dive into it in more detail, but that doesn't really handle the case of what do I do next?
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=33)** And can I actually solve this programmatically?
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=35)** So if we go back to the job itself, I go to Task.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=39)** You can see here that it's pretty simple, this notebook, but maybe I could add some logic here to handle that condition.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=48)** And so what I could do is I could add another task, and this task could be if else, and this if else task could be failure.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=56)** And so maybe I need to clean something up or do some other thing here.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=61)** What we can say is run if dependencies basically all failed.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=66)** So if this job fails, let's go ahead and do some logic here that cleans things up, and even I could add a notification as well.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=74)** This notification could go to email, to Teams, PagerDuty, Slack, et cetera, and says, "Look, this thing actually failed.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=84)** I ran a cleanup job, but you should know about it."
>
> **[1:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=88)** So having the ability to customize your tasks here is a great way to handle those failures, and you can handle both a success condition if we create this task, and then if we want to add another task here as well, we could add a success, right?
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=106)** And so you're able to actually dive into this jobs-based interface here and really navigate on a failure, do a cleanup on a success, maybe load it into the database, and then send a notification that says everything was loaded successfully.
>
> **[2:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=124)** So there are lots of different ways to handle problems.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=127)** If you are able to programmatically solve it, that's often the best solution.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), else, (1), let (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Configuring retries
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=8)** - [Instructor] Here we see that we have a job that is in a failed state, right?
>
> **[0:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=13)** We've had some problems with it.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=15)** And one of the things you can do though, is enable a retry here.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=19)** So you can do max retries, you can do retry delay, you can also do triggering retries.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=25)** You can also have monitoring for retries.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=28)** So let's go ahead and take a look here at this job.
>
> **[0:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=30)** Go into the task and then look where we could set this.
>
> **[0:34](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=34)** So notice here, it says, number of retry attempts and minimal interval between attempts if this task fails.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=41)** So if we go ahead and we select this, we can say, hey, I want you to try this at least three times, because there could be network errors or there could be some other issue.
>
> **[0:51](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=51)** And we want to actually wait 15 minutes between each retry here.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=56)** So if we go ahead and we say Confirm, now we can see that 15 minute delay and at most three times a total attempt.
>
> **[1:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=63)** So this is a great way to handle problems where there could really be some issues in terms of resources like an API where you don't control it.
>
> **[1:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=73)** And instead of blowing up your entire data pipeline, you could at least try to do these retries here and get this working.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=82)** Now, the other thing to mention here as well is that if you're very confident and you have something that needs to run quite a bit, you could even go all the way down to unlimited, which is another option.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=96)** And maybe this is like a web scraping tool that you want to scrape, for example, every hour.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=104)** And you know that web scraping is very tedious.
>
> **[1:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=108)** And also if there's a timeout as well, you want this to actually keep going over and over and over again.
>
> **[1:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=115)** So there are some scenarios as well, depending on the kind of job you create, if it's basically a non-deterministic job by itself, like web scraping, then you may want to do unlimited retries, but potentially wait for a long period in between those retries and even retry on a timeout.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1), this, (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Data Access with Unity Catalog

> [↑ Back to Table of Contents](#table-of-contents)

#### Unified data access with Unity Catalog
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=5)** - [Instructor] Databricks Unity Catalog provides centralized access control, auditing, lineage, and data discovery capabilities across not just one, but even multiple Databricks workspaces.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=19)** Let's take a look here first at this Unity Catalog where we have user management and metastore inside, and it's connecting to more than one Databricks workspace.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=31)** Inside, there is clusters, there are SQL warehouses, and the idea here is that you can define once, but secure everywhere.
>
> **[0:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=39)** And this allows for comprehensive data governance.
>
> **[0:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=42)** Also, you can have a standards compliant security model, and this is based on ANSI SQL, and you can allow administrators to grant permissions in their existing data lake using a familiar syntax.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=55)** This means catalogs, databases, tables, and views.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=58)** It also has built in auditing and lineage, so you can capture user level audit logs and data discovery.
>
> **[1:06](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=66)** So the data discovery lets you tag things, document data assets, and you can even look at system tables as well, so you can look at things like audit logs, billable usage, et cetera.
>
> **[1:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=77)** Next up, we have the Unity Catalog object model.
>
> **[1:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=82)** You can see that the metastore is the top level container for metadata.
>
> **[1:27](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=87)** It exposes a three level namespace, so catalog.schema.table organizes the data.
>
> **[1:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=93)** And then below, in the data catalog here, we have the first layer of object hierarchy, and it's used to organize data assets.
>
> **[1:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=102)** And then the schema is going to be known as a database, and the schemas are the second layer of the object hierarchy and contains tables and views.
>
> **[1:52](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=112)** Of course, you can create these tables and views in SQL, you can create them with the catalog explorer, and then finally, in the tables of views and volumes at the lowest level, this is where you would have governance for nontabular data.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=127)** So in a nutshell here, the five key characteristics of the Unity Catalog are the centralized metadata store, which would capture technical metadata, the unified access controls, which allow you to set fine-grain access controls using SQL, the data lineage tracking, right, data governance, auto capture, and end-to-end lineage at query time, the discovery and organization, so searchable catalog for easy discovery of data, and also using browser and REST APIs.
>
> **[2:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=158)** And then finally, it's multi-cloud friendly.
>
> **[2:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=160)** So you can even do this across multi-cloud vendors, and you can federate for unified access.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), ansi (1), rest (1)
> **Code Keywords:** finally, (2), let (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Catalogs vs. metastores
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=8)** - [Narrator] Databricks Unity Catalog has many different components, but let's take a look at first the catalog itself versus the metastore.
>
> **[0:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=17)** There are some key differences.
>
> **[0:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=20)** First, the metastore is the top level logical container for metadata.
>
> **[0:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=26)** It stores information about data assets like tables or models, and it also defines the namespace hierarchy of catalog.
>
> **[0:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=36)** And the catalog would then proceed to schema, which would then proceed to table.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=41)** So the hierarchy is catalog-schema-table, and it also handles access control policies and auditing.
>
> **[0:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=49)** Likewise, the catalog is the first-level organizational unit within a metastore, and it's used to group related data assets like tables, views, et cetera.
>
> **[1:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=62)** And the access controls can be defined at the catalog level.
>
> **[1:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=67)** So in a nutshell, what are the key differences?
>
> **[1:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=69)** There can be multiple catalogs within one metastore, but only one metastore per Databricks deployment.
>
> **[1:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=78)** The metastore contains all the metadata for catalogs and data assets, and the catalogs help group data objects based on apps, teams, and more.
>
> **[1:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=89)** So in a nutshell, a metastore is the overarching metadata store and root data governance layer in Unity Catalog, and catalogs provide the first-level organization and boundaries within the metastore metadata.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Unity Catalog quick start with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=5)** - [Instructor] Let's take a look at how to do a Unity catalog quick start in pure Python here.
>
> **[0:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=11)** The key overview is that we're going to look at the workspace setup.
>
> **[0:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=15)** So you'd want to have a workspace that has the Unity Catalog meta store.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=21)** It's got to also support the runtime, like 11.3 or higher.
>
> **[0:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=26)** And then you're going to do a catalog creation, a schema creation, table management, security best practice, and then metadata discovery.
>
> **[0:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=35)** So one of the things you can do when you look at a notebook like this is actually go over to the table of contents.
>
> **[0:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=42)** This is a great way to get a nice, clean way to break down, you know, a notebook that may contain many cells, and it could be hard to read, is we can actually look at it from the table of contents.
>
> **[0:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=55)** So here we go, here's some documentation.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=58)** And then we have the actual code, which is going to say, create a catalog, then create a managed schema, which is the database, create a managed table, and then use the Unity catalog in the Pandas API on Spark, right?
>
> **[1:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=70)** So those are the key steps here.
>
> **[1:11](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=71)** So let's go ahead and take a look here.
>
> **[1:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=73)** So we see this is step one, and then when we go to create a catalog here, it's going to create a catalog, select show, et cetera.
>
> **[1:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=81)** Let's take a look at how this code works.
>
> **[1:23](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=83)** So pretty simple.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=84)** Is a spark SQL statement that says Create catalog if it doesn't exist.
>
> **[1:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=88)** And that's a quick start catalog.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=90)** Next up, you would go ahead and set it, and then you would show all the catalogs.
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=96)** Finally, the last thing you would want to do is you'd want to say, let's go ahead and grant, create, and use catalog permissions.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=104)** And then you can actually go ahead and verify that that works.
>
> **[1:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=107)** Now again, we can just toggle right down to the next step here, which is, oh, okay, let's create and manage schemas.
>
> **[1:53](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=113)** And in this step here, this would be create a schema.
>
> **[1:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=116)** If it doesn't exist, show the schemas, extend it, and then again, do the permissions.
>
> **[2:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=123)** Next step would be to manage a table.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=127)** And this case would be, again, use the schema that we already created earlier.
>
> **[2:12](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=132)** Show the database, create a managed delta table in the catalog.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=138)** Go ahead and set the permissions.
>
> **[2:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=140)** Go ahead and show the tables, and then insert a few rows into the table.
>
> **[2:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=145)** Finally, show the table, and then show all available tables.
>
> **[2:29](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=149)** Now finally, this is the part that probably most Python programmers are interested in is, okay, let's go ahead and use it.
>
> **[2:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=155)** And what's nice is that there's a Pandas API available for Spark.
>
> **[2:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=159)** And so you would import pyspark.pandas as ps.
>
> **[2:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=163)** So instead of doing import pandas as pd, you would say import pyspark.pandas as ps.
>
> **[2:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=169)** And it's going to work in a roughly similar way as Pandas, which a lot of Python programmers are used to.
>
> **[2:55](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=175)** You would just show the table, write the table to Unity catalog, again grant the permissions, and then show the table.
>
> **[3:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=182)** So pretty straightforward, and you can actually find this quick start in the official documentation for Databricks.
>
> **[3:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=189)** It's a great way to get a feel for this, and also to be able to toggle back and forth with the key steps inside of the code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (3), this, (1)
> **CLI Commands:** python (3), find (1)
> **Env Vars:** api (2), sql (1)
> **UI Navigation:** toggle (2), go to (1)
> **Definitions:** is a  (2)
> **Versions:** 11.3 (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** setup (1)

#### Applying object security
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=9)** - [Narrator] Applying object security best practices with the Unity Catalog system involves several characteristics.
>
> **[0:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=16)** First, we have leveraging access control lists, or ACLs.
>
> **[0:21](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=21)** ACLs allow granting or restricting access to specific users and groups on securable objects like tables, views, and more.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=31)** They also provide fine-grain control so you can secure access to sensitive data, you can go beyond this by also having fine-grain access as well to objects.
>
> **[0:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=43)** So you can have database schema level permissions, you can secure access to individual tables, pipelines, workflows, but only based on what is necessary for that task.
>
> **[0:56](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=56)** And you can even control reading, writing, and permission selectively.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=61)** Finally, it all wraps up into least privilege.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=65)** The idea with least privilege is, only provide the minimum required access, don't give someone abilities that they don't need because this creates a security breach.
>
> **[1:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=74)** For example, if someone only needs to look at a dashboard, you would want to give them access to read the dashboard.
>
> **[1:20](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=80)** You don't use broad groups like All Users unless there's a hard requirement.
>
> **[1:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=85)** You would also revoke access once the purpose is served rather than letting it accumulate, and you also review policies on a regular basis for relevance.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=95)** So to wrap this up, the key benefits with this best practice technique is, you would enhance the data security and compliance, you'd avoid unnecessary broad access by leveraging precise ACLs, and you're going to control a blast radius if credentials or policies are compromised because you've only given people the privileges they are necessary to have.
>
> **[1:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=118)** If you have admin privileges, you could have a huge security problem because everybody has access to everything.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### Best practices for catalogs
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=8)** - [Instructor] Here are some best practices for catalogs with the Databricks Unity Catalog system.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=14)** First up, you want to create a separate catalog for loose coupling.
>
> **[0:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=18)** This would mean that you would want to separate the business functions, the teams, and you'd have a dedicated catalog for each.
>
> **[0:25](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=25)** You also would manage the access as well.
>
> **[0:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=28)** You could have compliance at that catalog level.
>
> **[0:31](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=31)** You could also change in one catalog and not have to worry about the impact in another.
>
> **[0:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=37)** Finally, in the last two, we see map to domains and customized security.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=41)** If we go to map to domains, this means aligning the catalog boundaries with business domains or applications.
>
> **[0:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=48)** A good example of this would be a catalog for marketing analytics, maybe a catalog for HR, maybe a catalog for monitoring the observability of a data pipeline.
>
> **[1:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=60)** And then finally, you would want to have the security policy and governance as well as a component of that catalog, so you're able to really drill down into a particular domain and understand exactly what's happening.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=75)** Finally, with the security, if you look at the security policy per catalog, this means creating access control groups and roles specific to a catalog.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=84)** Also, fine tuning the read write, and you'd want to grant those independently.
>
> **[1:30](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=90)** So in many scenarios, you'd only want to read, for example, to a dashboard.
>
> **[1:35](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=95)** You don't want to give people right privileges to that.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=98)** And then also customizing the settings like resource quotas, and then even scrumming the rules after a certain period of time.
>
> **[1:46](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=106)** So the fine-grain policies per catalog are a best practice that are going to allow you to have the best of security while also getting the best of functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Best practices for connections
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=9)** - [Instructor] The best practices for connections are first to limit the visibility.
>
> **[0:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=14)** What this means is you want to limit the visibility of external connections, so avoid exposing connection secrets to all users.
>
> **[0:22](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=22)** You also want to grant access only to specific users, groups, and roles, and then set lease privileges, like read-only permissions.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=33)** In many scenarios, there isn't a need for everybody to have access to all of your external connections.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=41)** Let's look at the next thing, which is limiting access in general.
>
> **[0:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=44)** So provide access only to the required users and groups, and this means you could add granular access control lists or ACLs on a connection, and you could ensure only intended teams or jobs can use those external resources, and then you could revoke them if the team or group doesn't need those resources again.
>
> **[1:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=65)** So it's important to actually be aware of what is actually happening in a team and make sure that you're not giving them access to external resources they don't need.
>
> **[1:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=75)** In terms of tagging connections effectively for discovery, you can use tags like source categories or data classifications, and you can also allow an ability to discover connections by use case and then tag consistently for organizational-wide visibility.
>
> **[1:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=93)** So some of the benefits here would include enhanced security by restricting exposure, preventing unintended data access or leaks, and also looking at a way of easing the discovery and management of external connections.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Best practices for business units
> [LinkedIn Learning](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=8)** - [Instructor] Here we have Databricks Unity Catalog Business Unit Best Practices.
>
> **[0:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=13)** First up, you want to provide a dedicated sandbox for each of your business units.
>
> **[0:19](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=19)** You want to allocate an independent development environment as well.
>
> **[0:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=24)** You also want to allow safe experimentation with data in ML, and you want to prevent interference between different workflows.
>
> **[0:33](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=33)** So the dedicated sandbox is ideal so that you don't mix different security parameters between two organizations.
>
> **[0:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=41)** There could be really restricted data and one business unit, and there could be more of a open-ended, research-based environment in another, and it's going to be much better to provide sandboxes for each of those business units.
>
> **[0:58](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=58)** Centralize shareable data into production catalogs.
>
> **[1:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=61)** So in this scenario, you would want reusable datasets, like customer and product data.
>
> **[1:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=67)** Also, the ability to manage the access centrally rather than duplicate things, because the size of the data could quickly become a huge cost center, and you also want a single source of truth to remain consistent as well.
>
> **[1:24](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=84)** So that's really the centralized sharing model, so that you're not having multiple different versions of a key table that is slightly different in one department than another.
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=97)** Now, if we get into discoverability, this is another one that's important, is you need a meaningful naming convention like glossaries.
>
> **[1:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=105)** You also want to do metadata best practices as well.
>
> **[1:50](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=110)** So that includes logically structuring catalogs and folders and assets, making a meaningful hierarchy, and then also have collaboration across different units.
>
> **[2:02](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=122)** Finally, with federated queries, this would be via the Lakehouse architecture.
>
> **[2:07](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=127)** You would unify the data access across silos.
>
> **[2:10](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=130)** You would govern securely via contracts and permissions, and then you'd want to enrich the local data with shared self-service access.
>
> **[2:18](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=138)** So some of the key benefits include supporting autonomy for units via domains, increasing productivity through reuse, and then also maintaining consistency with collaborative governance.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), self (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- Data Engineering
- Databricks Products

## Path Context

### In [[Prepare for the Databricks Certified Data Engineer Associate Certification]]
**1 of 1**

## Appears In

- [[Prepare for the Databricks Certified Data Engineer Associate Certification]]

## Related Courses

_Courses sharing skills:_

- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering
- [[Data Engineering- dbt for SQL]] — Data Engineering

---

[↑ Back to top](#)