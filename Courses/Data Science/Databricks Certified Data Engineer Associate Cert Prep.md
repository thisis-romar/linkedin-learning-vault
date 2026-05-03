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
created: 2026-05-03
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
  - [Course overview](#course-overview)
- [**1. Databricks Lakehouse Platform**](#1-databricks-lakehouse-platform) (8 videos)
  - [Introduction to the Databricks Lakehouse platform](#introduction-to-the-databricks-lakehouse-platform)
  - [Overview of the Databricks architecture](#overview-of-the-databricks-architecture)
  - [Creating and managing clusters](#creating-and-managing-clusters)
  - [Configuring cluster runtimes](#configuring-cluster-runtimes)
  - [Terminating clusters](#terminating-clusters)
  - [Restarting clusters](#restarting-clusters)
  - [Filtering the clusters list](#filtering-the-clusters-list)
  - [All-purpose vs. job clusters](#all-purpose-vs-job-clusters)
- [**2. Data Transformation with Apache Spark**](#2-data-transformation-with-apache-spark) (8 videos)
  - [Set up IntelliJ for Databricks with Go](#set-up-intellij-for-databricks-with-go)
  - [Installing and using the Databricks CLI](#installing-and-using-the-databricks-cli)
  - [Installing and using Databricks for RStudio](#installing-and-using-databricks-for-rstudio)
  - [Introduction to notebooks](#introduction-to-notebooks)
  - [Executing notebooks](#executing-notebooks)
  - [Sharing notebooks](#sharing-notebooks)
  - [Multilanguage support](#multilanguage-support)
  - [Databricks Repos overview](#databricks-repos-overview)
- [**3. Data Management with Delta Lake**](#3-data-management-with-delta-lake) (8 videos)
  - [Efficient data transformation with Spark SQL](#efficient-data-transformation-with-spark-sql)
  - [Using Catalog Explorer](#using-catalog-explorer)
  - [Creating tables from files](#creating-tables-from-files)
  - [Querying external data sources](#querying-external-data-sources)
  - [Inspecting tables](#inspecting-tables)
  - [Reliable data pipelines with Delta Lake](#reliable-data-pipelines-with-delta-lake)
  - [ACID transactions](#acid-transactions)
  - [Z-ordering optimization](#z-ordering-optimization)
- [**4. Data Pipelines with Delta Live Tables**](#4-data-pipelines-with-delta-live-tables) (8 videos)
  - [Vacuuming and garbage collection](#vacuuming-and-garbage-collection)
  - [Table documentation](#table-documentation)
  - [Automated pipelines with Delta Live Tables](#automated-pipelines-with-delta-live-tables)
  - [Delta Live Tables components](#delta-live-tables-components)
  - [Continuous vs. triggered pipelines](#continuous-vs-triggered-pipelines)
  - [Configuring Auto Loader](#configuring-auto-loader)
  - [Querying pipeline events](#querying-pipeline-events)
  - [End-to-end example of Delta Live Tables](#end-to-end-example-of-delta-live-tables)
- [**5. Workloads with Jobs**](#5-workloads-with-jobs) (8 videos)
  - [Orchestrating workloads with jobs](#orchestrating-workloads-with-jobs)
  - [Databricks jobs demo](#databricks-jobs-demo)
  - [Multitask workflows](#multitask-workflows)
  - [Task dependencies](#task-dependencies)
  - [Viewing job history](#viewing-job-history)
  - [Using dashboards](#using-dashboards)
  - [Handling failures](#handling-failures)
  - [Configuring retries](#configuring-retries)
- [**6. Data Access with Unity Catalog**](#6-data-access-with-unity-catalog) (7 videos)
  - [Unified data access with Unity Catalog](#unified-data-access-with-unity-catalog)
  - [Catalogs vs. metastores](#catalogs-vs-metastores)
  - [Unity Catalog quick start with Python](#unity-catalog-quick-start-with-python)
  - [Applying object security](#applying-object-security)
  - [Best practices for catalogs](#best-practices-for-catalogs)
  - [Best practices for connections](#best-practices-for-connections)
  - [Best practices for business units](#best-practices-for-business-units)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=0)** - [Noah] Welcome to "Databricks Certified Data Engineer." My name is Noah Gift and I'm going to be your instructor for this course. I have quite a bit of experience with Databricks and [[Data Engineering]], and I teach this at multiple universities around the world, including some of the top universities. Let's go ahead and get started here. First step, in our course introduction, there are six sections that we'll cover. The first thing we'll cover is the Databricks Lakehouse platform. So we'll talk about how to use the Lakehouse platform, the architecture, also creating and managing clusters, configuring cluster runtimes, terminating clusters, restarting clusters, filtering the cluster list, all-purpose versus job clusters. And then in course two, we cover [[Data Transformation]] with [[Apache Spark]]. We'll start off with looking at the development environment, so we'll set up IntelliJ for Databricks with Go, also use the Databricks [[CLI]]. We'll also use Databricks with R Studio. We'll get into notebooks, how to execute them, share them, also how to use multiple languages, like languages like [[Scala]] and [[SQL]], and then we'll talk about how Repos work as well. Finally, in the last several courses, we'll start to dive into the Delta Lake. So in course three, we'll get into [[Data Management]] with Delta Lake. This covers efficient data transformation with Spark SQL, using Catalog Explorer, creating tables from files, also querying external data sources, inspecting tables,
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/course-overview?u=76281980&t=98)** reliable [[Data Pipelines]] with Delta Lake, asset transactions and more. In course four, we'll get into data pipelines with Delta Live Tables. This includes vacuuming and garbage collection, table documentation, automated pipelines with Delta Live Tables, Delta Live Table components, looking at continuous versus triggered pipelines, configuring the Auto Loader, also looking at the querying pipeline events, and even an end-to-end example of Delta Live. In course five, we get towards the end here, which is working with jobs. So we'll talk about orchestrating workloads with jobs, Databricks jobs, demos, multitask workflows, task dependencies. Also, we'll talk about [[Dashboards]], handling failures, and even configuring retries. Now with the final course, we dive into the new feature, which is [[Unity]] Catalog. Now, Unity Catalog is interesting because it has the ability to give you more granular control over multiple instances of Databricks. And we'll get into unifying data access, talking about catalogs versus meta stores, also get into object security, and then we'll get into best practices for catalogs, connections, and even business units. All right, we have a lot to cover. Let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (2), [[SQL]] (2), [[Data Pipelines]] (2), [[Unity]] (2), [[Data Engineering]] (1)
> **Env Vars:** sql (2), cli (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the last (1)
> **Tools:** intellij (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [noah] (1)


### 1. Databricks Lakehouse Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the Databricks Lakehouse platform](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=4)** - [Instructor] Let's take a look at the evolution of data architectures. First here on the left, we see that there's a progression from the data warehouse to the data lake to the lakehouse. One of the reasons for this is that there are limitations of traditional data warehouses for [[Unstructured Data]] at scale and some of the promises of [[Data Lakes]] didn't fully materialize due to lack of governance. So first, let's define what a lakehouse is. It's a way to combine the strengths of a data warehouse, and you can see some of the things you can do, like BI, reports, ETL. It's combining those strengths with the data lake in a new architecture. And again, if we look at the data lake here, you can see that some of the difference are that you can also do [[Data Science]], machine learning, work with structured, semi-structured and unstructured data. But it enables the governance, the quality, the performance for analytics, alongside the flexibility for ML and AI. And it's also powered by separating the storage and the compute, like the traditional cloud data warehouse. Some of the key attributes include the support for asset transactions and schema enforcement like you would get with a traditional [[SQL]] solution and also open formats built on low cost object storage. So in the case of AWS, it would be something like AWS S3. Unified batch, Streaming, SQL and machine learning workloads are also included and also the ability to have enterprise capabilities
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-the-databricks-lakehouse-platform?u=76281980&t=97)** like security, access control, auditing, all things that are very important for compliance and for proper [[Data Governance]]. So, some of the benefits over past systems include: radically simplified architecture for multiple specialized systems, faster time to insight without copying or moving the data, and cost savings of operationalizing one system's infrastructure. And also the flexibility for diverse analytics from BI to AI ML. So some of the limitations here for the future [[Microsoft Outlook|outlook]] would include early in the maturity, so that they may lag some of the old systems' query performance. Also, there could be some issues where you need better support for non-SQL tools and personas. And one of the things to really keep in mind when you're thinking about these new solutions is that eventually those gaps are going to close over time while retaining the simplicity and cost benefits that you get from a data lakehouse. So, really a data lakehouse is an evolution of what is currently happening and this is something you see all throughout the history of innovation with many different technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Unstructured Data]] (2), [[Data Lakes]] (1), [[Data Science]] (1), [[Data Governance]] (1)
> **Env Vars:** sql (3), aws (2), etl (1)
> **CLI Commands:** aws (2)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the Databricks architecture](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=4)** - [Instructor] Here, we have the general overview of the Databricks architecture. At the top here, you can see that it's structured into a control plane, and this control plane is managed by Databricks and the compute plane lives in the customer's cloud. In this example, it shows AWS, but it could be in [[Microsoft Azure|Azure]]. It could be in GCP. It could be in some other cloud. The control plane, though, is where all of the action takes place, and it handles the back-end services like the storage of notebooks and jobs, and the compute plane processes the customer's data and the workloads. The connector integrates the external data for ingestion, and then the data lake stores securely in the customer's [[Cloud Storage]]. So it works on top of things like object storage and compute. In the case of AWS, it would be S3 or [[Amazon EC2|EC2]], and there's a separation of responsibilities where Databricks manages the control plane service to reduce the customer burden, and the customer maintains the ownership and control of business data. So this is very similar with the shared responsibility model of AWS, where you manage certain parts of the resources and AWS manages others like the physical data center. In this case, though, you're managing these lower-level resources, but then Databricks is actually able to orchestrate on top. So the common workflow would be the data is ingested from sources via connectors into the cloud storage like S3. The compute would spin up on demand to process and analyze the data, and then the interactive workloads in notebooks, batch jobs, [[SQL]],
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/overview-of-the-databricks-architecture?u=76281980&t=97)** all would share the same architecture, and the results would output back to the cloud storage under the customer control. So what this means is that some of the benefits are fully managed control plane that reduces the overhead. The customer cloud account provides security and isolation, and you have flexibility to handle diverse data workloads and pay only for the compute used through serverless offerings. So, in a nutshell here, what you really can do with Databricks is manage complex workflows by leveraging that layer on top, and that Databricks control plane has the web application, the notebooks, the jobs and queries, and the cluster management, and it does many things beyond just [[Data Engineering]], including [[MLOps]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (3), [[Microsoft Azure|Azure]] (1), [[Amazon EC2|Ec2]] (1), [[SQL]] (1), [[Data Engineering]] (1)
> **Env Vars:** aws (4), gcp (1), ec2 (1), sql (1)
> **CLI Commands:** aws (4)
> **Speakers:** - [instructor] (1)

#### [Creating and managing clusters](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=3)** - [Instructor] One of the more important jobs with managing Databricks environment is the compute. Let's take a look here at this compute tab inside of the Databricks interface. You can see there's several different categories of options. First up, we have all purpose compute here, so this is a place to start if you're going to do things like work with notebooks, for example, do basic [[Data Engineering]] operations. And you can see here that I've actually got something running, which is called Thrifty, right here. So how would I run this? Well, I could go ahead and click this and it would say confirm, and it would start this cluster. Now if we want to create one from scratch here, let's go ahead and say Create compute and let's look at the options. Here you can see that I'm using an unrestricted policy. So this is a new feature of Databricks that lets you control what are the things that a user is allowed to do. That's really the purpose of a policy here. And if we go over to the documentation, you can see here what are compute policies. They can do things like limit users to creating clusters with prescribed settings. So for example, let's say your company has a limited amount of GPUs, you may want to limit a individual user from using more than the allocated resources your company has. You can also simplify the interface control costs, et cetera, and even enforce certain libraries. Maybe you want the people in your organization to only use the libraries that you've created. So it's some nice options for control. Now, if we go back to the access mode as well, you can see there's multi node or single node.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=99)** Basically the entire purpose of Databricks is to do cluster compute. So, in many scenarios, you would want multi node. Single node is for [[Prototyping]]. So if you toggle to single node, you can see it'll just spin up one machines. But the advantage of multi node is to be able to scale out the Disk I/O and the compute for the [[Hadoop]] file system, HTFS. And you're going to get that by using a multi-node setup. Now look at the default runtime here as well. This is important to stay and look at, is that the runtime here is already configured for you and it has the latest versions of [[Scala]] and Spark, and you can toggle it up and down if you want, based on the kinds of things you're doing. So generally for regular types of notebook operations, running [[SQL]] queries, you would want this standard runtime and it's going to be configured for you. If you want to do advanced ML operations, notice here that there'll be options for GPU, there could be different versions of Spark, and also the libraries are going to be pre-configured for you so that you don't have to actually select something that's going to be installed it's already installed for you for many of the standard use cases. So really the runtime is great to allow you to toggle between standard, classic data engineering problems or ML, and the right libraries will basically be automatically configured for you. We also can see here that you can scale up the minimum workers or the max workers. So the defaults here are probably good to use.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=193)** But if you know you have, let's say, a lot of capacity that needs to be used because you have large data sets, maybe you want to toggle up the minimum worker. So you always use, let's say, four minimum workers and you could also potentially toggle up much larger the max workers, right? And these will all be things that you'll be able to get feedback on according to the resources that are available from your cloud provider. We also can look at the driver type here as well. In this case, we'd want to do the same as the worker. And then in terms of the auto scaling here, this is the button that's going to allow you to use that min and max. Now, this is another very important setting as well, which is are you going to terminate after a period of time? So for doing lots of ad hoc demos and exploration, this is really going to be something you'd want to have enabled. Now, on the other hand, if you're running something that's a 24/7 cluster, you should turn this off because you don't want to terminate if it's inactive, because it could cause some downtime for other users that are trying to do things so this is really going to be dependent on your environment. You could also add tags here as well. Let's say you want to say, maybe the team would be [[Data Science]], right? If you wanted to add some kind of a tag that would tell you exactly what's happening. Now, once this thing is running, again, if we go back to compute here, you can actually look at it and look at the details of exactly what's happening. You could look at the notebooks associated with it, the libraries that are associated with it, install new libraries.
>
> **[4:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-and-managing-clusters?u=76281980&t=285)** You can also look at the Spark user interface as well and look at the different things that are happening with the jobs. You can look at the metrics. This is also very important when you're running jobs, is to see, "Do I need to have a larger scale characteristics?" Maybe I need some additional max nodes because I'm overloading CPU, or I'm overloading Disk I/O or memory, et cetera. You can view all that from here. So really, the compute interface here is a one-stop shop here to manage everything you need to do for basic computation. There also is the compute jobs here, which allows you to do ad hoc jobs and manage those jobs. We also have SQL warehouse, which is another one. We have pools which can allow you to logically group the tendencies to allocate compute power. You can also dedicate a cluster from an auto-scaling pool to a team or a unit. And then finally, this is where you would go in and you could actually create customized policies so that maybe you simplify the ability to launch things or limit the ability to do GPUs. All this is managed directly from the interface inside of [[Microsoft Azure]], Databricks, or AWS [[Azure Databricks]], or whatever platform you're using Databricks on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (2), [[SQL]] (2), [[Prototyping]] (1), [[Hadoop]] (1), [[Scala]] (1)
> **CLI Commands:** node (7), aws (1)
> **Env Vars:** sql (2), htfs (1), gpu (1), cpu (1), aws (1)
> **UI Navigation:** toggle (5)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (2)
> **Prerequisites:** setup (1), install (1)
> **Cross-References:** go back to (1)

#### [Configuring cluster runtimes](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=5)** - [Narrator] Here we have Databricks runtimes, and they include things like the [[Data Engineering]] and ML solutions here. And if we see, the reason for this is that you can have different clusters doing different things and you don't have to spend a lot of time maintaining them. They're managed by Databricks itself. So this is a huge time saver. If we take a look at standard here, this is just general purpose, right? It's for the ETL operations, [[Data Pipelines]], [[Batch Processing]]. Let's say you want to have a scheduled job that runs at some interval. It often could be using this standard runtime. We also have support for [[Python (Programming Language)|Python]]. We have support for R, we have support for [[Scala]], for [[SQL]]. There also is this Photon runtime as well, which is optimized for huge data volumes and table scans. And it's great for ETL on petabytes-sized data. And then in terms of machine learning, we have libraries like [[TensorFlow]], we have [[PyTorch]], we have Caris. Also, regular machine learning tasks are handled as well, like things like [[Pandas (Software)|pandas]], for example. That particular API could be available. In terms of the other run of times for analytics, we also have SQL analytics, and this is optimized for SQL and [[Business Intelligence (BI)|business intelligence]] use cases. And really the difference here is that you can toggle the attributes of languages and libraries, memory IO, CPU, the query engine, the concurrency limits. These are all things that you can tweak and you don't have to manage the fine grain details. Databricks, will manage them for you.
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-cluster-runtimes?u=76281980&t=97)** So if we take a look here at the interface, you can see a real life example of this where I have an ML cluster running. You can see it's running the ML runtime. So it's differentiated from the regular runtime. And what's nice about this again, is that I didn't have to go in and install much of libraries myself. They're already pre-installed with many of the things that I would want to use. And I could, if I wanted to create a new compute cluster, I could just go through here and say a new compute cluster. And then again, just toggle through the runtime. And you can see standard ML uncategorized. Likewise, if you go back here, you can to toggle to SQL runtimes pools. You have lots of different options here, and it's up to you to defigure, you know, do you want 2, 3, 4 different kinds of clusters? An ML cluster, a data cluster, a SQL cluster. You have all those options available to you in the Databricks interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Engineering]] (1), [[Data Pipelines]] (1), [[Batch Processing]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (5), etl (2), api (1), cpu (1)
> **UI Navigation:** toggle (3)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Terminating clusters](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=4)** - [Instructor] Here we have a Databricks interface where there is one cluster that's already running. You can see here that there's a couple of notebooks associated with it. We also have a new cluster that's starting here. If I wanted to control this, one of the ways that I could terminate this cluster is by selecting it and first, you can terminate it by doing nothing, right? If you have this enabled, you can see that terminate after 120 minutes. This is what will happen when the cluster is actually inactive like you're not doing something to it, it'll automatically terminate. But there's a more explicit way to do it. If you go over to this section here and we click on Terminate, you can see it says, "Are you sure you want to terminate the cluster?" Now this will just basically stop the cluster. Notice that there are other controls though as well. If we go here, you could also clone this. You could restart it. Deleting though would be permanently getting rid of the cluster including the whole configuration. So the difference between a delete and terminate is that terminate is just telling it to stop. Now there are other ways to terminate as well and one of the ways you can do this is from a notebook. So if we go to New here, we go to Notebook, notice that the ML Cluster is selected. You see that it's green, it's running. Now how would I actually terminate this? Well, what I can do is I can actually go over to the ML Cluster and if we select this and hover over it, you can see that I have the ability to actually terminate it right from this interface. So this is one of the more convenient ways.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/terminating-clusters?u=76281980&t=98)** Let's say you're done with a project and you're inside of a notebook, you've saved it. Maybe you've committed it to [[Version Control]]. All you have to do to get rid of it is just select Terminate, so ahead and say Confirm, and this will actually go through the termination phase and you can see here that this was requested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1)

#### [Restarting clusters](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/restarting-clusters?u=76281980&t=5)** - [Instructor] Here we have several compute clusters that I'm going to make some changes to, and I'm going to start with doing a restart. One of the things that happens sometimes is a compute cluster could be acting in a strange way or it's overloaded, it's out of memory, and so how do you actually restart it? Well, let's go ahead and take a look at this Thrifty cluster right here. If I take it and I go to this menu right here, I can select Restart. Once I select Restart, we're able to actually get this thing in a new state. It'll reboot and all of the memory and everything else that's happening will really change so that I don't have to actually keep those legacy issues. So another way to do the same thing, though, is we can also go to the Notebook. And if I select a notebook, from here, if I scroll down, what I can do as well is actually select this cluster here or some other cluster that's associated with it, hover over it, select Restart, and we can see that I can do the exact same thing by restarting from the notebook. So there's two ways to restart inside of Databricks. Both of them can be handy if you're experiencing issues.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), scroll down (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Filtering the clusters list](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=1)** (no audio)
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/filtering-the-clusters-list?u=76281980&t=5)** - [Instructor] Here we have the compute interface, and there are three different clusters. And if you're working with, let's say, hundreds of clusters, you want to be able to filter very quickly on a name or potentially a runtime. And one of the ways you can do this is by this menu here, where it says filter compute, you have access to. If we go through here and we type in ML, for example, notice that I can actually quickly pull up the name of the cluster. Another easy thing that you may want to do is look at a particular runtime. Let's say that you know that that runtime, for example, the ML runtime, has a particular version. You could go through and just type in right here, 14.2, or in the case of another one, 13.3 or 13.2. There's nothing, 13.3, we see we have two. This gives you the ability to quickly toggle if you have hundreds of run times, which is very possible in a larger organization. Another thing that is also helpful really when you're combining with this, is that you can pin maybe your favorites as well. So again, if you have 20, 30, 40 different clusters, you can filter, but then you also could potentially save, let's say the two clusters that you use most frequently up here, so that by default you always have access to it.

> [!info]- Semantic Content
>
> **Versions:** 13.3 (2), 14.2 (1), 13.2 (1)
> **Analogies:** for example (2)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### [All-purpose vs. job clusters](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=5)** - [Instructor] Let's take a look at this concept of all-purpose Compute, which is things like a general cluster or building ML clusters. And this is one type of Compute that works very well for notebooks or for other things you're doing, but there's a different type called a job cluster. Let's go ahead and look at that by going to [[Data Engineering]], Job Runs. And if we go over here, what we can see is, this was a previous run that I did. It was successful. It took about six minutes, and so I could see all of my runs here. And it's a great way to really have a interface that I can see where things have been, you know, failing or succeeding or whether I skipped one. Now, if we go over to Create job, you'll see that I can actually dive into what a job cluster is. So by default, you'll get this job cluster. And the idea here is that a job cluster is optimized and dedicated to run production jobs. And so auto-scaling is enabled by default to handle the job load and it's going to terminate automatically after being idle for a set time. So this is really ideal for doing scheduled ETL pipelines and recurring [[Batch Processing]]. The all-purpose clusters are more for interactive general data analysis. So if we went through here and we said test, and I went through and I selected the notebook that I was going to use, here's where we would see the job cluster. And you can see that this job cluster has slightly different characteristics than the all-purpose cluster, right? It has bigger memory, so 126 gigs, 36 cores.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/all-purpose-vs-job-clusters?u=76281980&t=100)** And it's also going to delineate by saying here that it's a job cluster and it's going to say that the existing all-purpose clusters are different than these. So this is just another tool that you have in your toolkit. If you're going to be running batch-based jobs, doing ETL operations, this is a great way to get things going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (1), [[Batch Processing]] (1)
> **Env Vars:** etl (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Data Transformation with Apache Spark

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up IntelliJ for Databricks with Go](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=4)** - [Instructor] One of the emerging standards here for doing SDK work for data engineers is the Go language and I'm going to take a look at how to do that inside of this IntelliJ environment. So you can see here I've got a Databricks certified data engineer project and inside of here I'm going to create my Go SDK code for Databricks. So the first thing that I will do is I will actually go ahead and make a new directory called gohello. And I'm going to CD into that directory. Now the first thing that we need to do inside of this directory is type in go mod init sample. And this will create this initial Go module here. And this Go module is going to hold all of the things that we need in terms of dependencies. So the first thing that I will run is the Databricks SDK. So we'll say go mod edit -require and we'll go ahead and load that in. And now you can see here that we've got this new SDK loaded. We also want to go through here and create a new project file as well. So I'll need to go ahead and touch that. So we'll say touch main.go. And this main.go will be empty to start with, but what I'm going to do is just paste in some code and get it running. So this is from the official documentation. You can see we have a function here and inside the imports we have a couple of imports. So inside the main function here
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/set-up-intellij-for-databricks-with-go?u=76281980&t=100)** is where we're doing all the work. So first up, there is a client that's created and then this will unpack what's coming back from the client. In this case it'll be a clusters list. So let's list all of the clusters that are available and then we'll say if there's an error right here, go ahead and panic, otherwise, let's go ahead and print out, do a for loop over all of the clusters that come back from the SDK. So pretty straightforward here and all we need to do is install all of the missing dependencies. So we'll type in go mod tidy. Perfect. And then we'll go ahead and grab copies of all the packages needed to support builds and test the packages. So we'll type 'em in the Go Mod vendor, so go mod vendor. Great. And now all we need to do is go ahead and get this thing running by typing go run main.go. And this is going to go through here and compile this and run it. And we should see a list of all the clusters. There we go. So pretty straightforward actually to get Go running. There's some great advantages of Go language. There's strong support for the Databricks SDK as well. So if you want to give somebody in your team a binary that just ships to let's say [[Kubernetes]] or ships to some serverless platform that talks to Databricks, this is a pretty good solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (1)
> **Env Vars:** sdk (6)
> **File Paths:** main.go (3)
> **CLI Commands:** make (1), cd (1), go run (1)
> **Definitions:** is a  (2)
> **Tools:** intellij (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Installing and using the Databricks CLI](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=4)** - [Instructor] One of the cooler things you can do with Databricks is administer it from the [[CLI]]. In order to do that on a Mac platform, all you'd have to do is just do a brew install, so here we go. You can see that I run these brew commands, and in this case, it would go through, and notice I've already got it installed, so I don't have to install it, so we're ready to go. Now, all I need to do is say which Databricks, and we can see that this has actually been installed. And at the very beginning, you'll want to run the Databricks configure command, and this will actually configure your environment for the workspace that you're wanting to talk to, and this is where you would also configure any kind of authentication as well, so you would create an OAuth token and put it inside of here. So since I've already done that, all I need to do is just dash dash help here, and we can see there's a bunch of different commands. We can look at the account, we can look at the API, authentication, bundling. We can also do file system related commands. We can synchronize a local directory to a workspace directory. So these are really cool things that are available inside of this. I would say that one of the more interesting things to start with, though, again, we can see there's a ton of things inside of this, would be to work with the cluster. So first up, what I'm going to do is I'm going to type in Databricks clusters, and I can actually say list, and this will show me
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=101)** all of the existing clusters that are available, and if we take a look at these four clusters, you can see that all four are running in a terminated state. So that means that at one point, they were running, and then now the state has been changed to terminated. So this is a great example of, if I was going to do some [[Data Science]] work and I wanted to set up a job before I get frustrated because my job is taking a long time, I can notice that, ah, look, the cluster's actually in a terminated state. We need to actually change that, so how would we do this? Pretty straightforward. What I could do is I could just say Databricks clusters, and we could say start, and then I would put in the ID of the cluster that I'd want to run. In this case, we can do the ML cluster. There we go, and if I do this, it'll actually wait for it in foreground mode and give me the ability to see exactly what happens, finding the new nodes, for example, and then it'll finally show back the start state. So this is a great way to administer machines here. Another thing that I'll point out as well is that we could also query for different information. So let's say I had a hundred or a thousand different machines here. Well, what's a little bit confusing is, how do I know which one has the right [[Hardware]]? For example, let's say I wanted something with a particular hardware capacity, I don't know, GPUs, et cetera. Well, what we could do is we could run a separate query
>
> **[3:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=195)** while that's running in the background, and I could actually, again, go to Databricks clusters list,
>
> **[3:26](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-cli?u=76281980&t=206)** and we look. We can see, in fact, it's in pending state. Let's actually find out a little bit more information about that. So what I can do is do get. We can put the ID right here, and it will return back a big [[JSON]] payload. I don't want that entire payload, so what I'm going to do is I'm going to pipe it into the JQ, which is a JSON query tool, and I'm going to actually query for some pattern. In this case, I'll say node type ID, and what this will do is it'll actually show us, ah, great, this is a standard DS3 V2. That's the kind of hardware that I was looking for. Or you could obviously do something more silly, like do a name, of course, we already have the name, but you could actually go through here and figure out whatever it is that you wanted to do by querying that JSON payload. So in a nutshell, the CLI is really something that is invaluable for people that are using the Databricks system day in, day out. You can look through the help command, find a bunch of different recipes, and create solutions that allow you to easily administer and start jobs and interact with the Databricks cluster, even if you don't have access to the web interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[JSON]] (3), [[CLI]] (2), [[Data Science]] (1)
> **Env Vars:** json (3), cli (2), api (1), ds3 (1)
> **Prerequisites:** configure (3), install (2), set up (1)
> **CLI Commands:** brew (2), find (2), node (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Installing and using Databricks for RStudio](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=4)** - [Instructor] Databricks also works with both R and the [[RStudio]] environment. You can see here this is a Databricks SDK for R tutorial and notice that it's an experimental SDK for now, but the gist of it is that you need to build out inside of your local R environment a Databricks host. So this would be your workspace URL and then your token, which you can get from the Databricks administrative console. Once you've done that and you've gone through and you've created that token, you can actually put it inside of your .Renviron files. Obviously this is something that must not go into [[Version Control]] systems because this would have the personal access token and also the workspace URL, but once you've done that, you'll go through here and install these packages. So you'll say install.packages("devtools") library(devtools) and then you'll install it directly from [[GitHub]]. Finally, all you need to do is go inside of here and require the Databricks library that you just installed, make a client and do whatever it is you need to do. So let's go ahead and take a look at how this would work in practice. So if we go over to this environment here, you can see that I have RStudio running and I also have a script that I'll walk through here. So first up, what we can do is we can see that I did in fact go through here in the R console and say install.packages("devtools"). I also did library(devtools) and then I installed directly from GitHub, the experimental RSDK. Now, the next thing that we do is I open up inside of here,
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=101)** you see a plus and you go to an R Script and we require that Databricks SDK. The client is actually pretty straightforward. You make an instance of it and then you figure out some kind of response based on that client. In this case, there's actually a clusters create command. So this is really useful if you're familiar with the R language. You don't have to actually go into the web interface, you can actually create your own cluster. In this case, I'm creating a cluster called my-Rcluster. I then specify the spark version that I want to use, and then I also specify the node type. So this is critical because there are many different types of nodes and you want to select the one that is going to meet your needs, for example, ML jobs or [[Data Engineering]] jobs. Then finally you can set the auto termination time. 15 minutes is a sensible default. And then again, if you're just getting this thing experimenting, one worker is fine. And then finally you get the workspace URL. And this will return back in the result. And then finally at the very end, you say make sure the workspace URL ends with a forward slash, and then the print paste here goes through and it gives what the response is of that command. So in fact, I was able to do that and I have a cluster running in this environment. And what's nice about that is you can see that it's actually able to set up the host and the worker node. So there's a total of two nodes here. And then what I can do is I can verify this by going to the Databricks [[CLI]],
>
> **[3:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/installing-and-using-databricks-for-rstudio?u=76281980&t=195)** which I can use inside of RStudio. So if I type in here databricks clusters list, we should see that my-Rcluster. And in fact, we do have that my-Rcluster running. So the R language is also a option for people that are familiar with it. If you are a [[Data Science]] practitioner and you're really living inside of RStudio, you can absolutely administer the Databricks infrastructure remotely from RStudio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (5), [[GitHub]] (2), [[Version Control]] (1), [[Data Engineering]] (1), [[CLI]] (1)
> **Env Vars:** url (4), sdk (3), rsdk (1), cli (1)
> **CLI Commands:** make (3), node (2)
> **Prerequisites:** install (4), set up (1)
> **Tools:** github (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)

#### [Introduction to notebooks](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=1)** (no audio)
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=4)** - [Instructor] Let's take a look here at the Databricks Notebook interface. You can see that you can create a new notebook by going to the new section and clicking on the notebook tab. So I've already done that. And I'm going to name this thing [[Data Science]]. So it's really common to want to build out a exploratory data analysis workflow. But notice here that by default, you have the ability to use [[SQL]], but you could toggle to another language like [[Python (Programming Language)|Python]], you could toggle to [[Scala]], to R. It's up to you to decide what it is you want to do. Let's leave the default here for now. And I also want to show you what I would consider a good first step when you're building out a notebook. So first we have this markdown cell here, and you can see it from the table of contents. Notice that if you put a markdown cell here, and if we double click on it, you can see it is this markdown tag, that it will create this hierarchy for us. So for a data science workflow, I would recommend the concept of ingestion first. And then you could do another markdown cell here by just going through here, copying it, pasting it, and just tweaking it. And we can call this EDA. And now if we go back to the table of contents, you can see we have another one. And then if we want to do another cell as well, we can call this, let's say modeling, if you're going to do some machine learning.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=100)** And then finally, we could do one more, and we could have a conclusion. Maybe the conclusion is we have a predictive analysis where we show some kind of result. Now if we go into each of these sections as well, this would be a good spot where you could put in a new cell and do some kind of coding. Now notice here in the ingestion phase, I was able to run a SQL command. Well, how did I know how to start to look at the data? Well, if we go over to this section here, you can see this is a workspace, where I could look at other notebooks or I could look at the catalog. And in the catalog, you can actually start off with the sample data sets here. And you can see that there's several sample data sets. This is the New York City taxi data sets here. And if I want to query it, let's go ahead and do it again. I can go to the middle and select this plus. And from here, I can start to query exactly this hierarchy. So we'll say select, and I can get an auto complete. That's pretty nice. And we can say from, again, I'm getting auto complete, and now I can just follow the naming structure. I can say samples dot, and then it'll go through and tell me what is available actually in the samples. And we'll say New York taxi. And then from here, I want to look at the trips, for example. And then from here, we could actually go ahead and say, select star from samples. And I could maybe even do a limit,
>
> **[3:15](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/introduction-to-notebooks?u=76281980&t=195)** and we could say, limit 10. And at this section, now all I would need to do to run it would do a shift return, and it's going to go through quickly and run this query. What's nice about it is that it also gives me a table that I can scroll through here and look at the different items, even toggle up and down, for example. And what's great about this is that I don't have to do much. I can really interactively play around with the data and move through things very easily. Now, obviously, I can also hide these cells, and this is a good thing to be aware of, is that you can hide these cells. And if I wanted to create new cells here, I would do another, let's say, exploratory data analysis cell, maybe another one for modeling, another one for conclusion. And at the end of this, I can again go back to my hierarchy and I can click on any of these, and it'll navigate right to that section. So this is what I would call a normal setup for a data science project is you create this structure of ingestion, exploratory data analysis, modeling, conclusion. You go through, you query your datasets, potentially by first looking through and making sure you know what dataset you're going to use, for example, the stuff you've already uploaded or using the sample data. When you're at the conclusion of your project, you can go through and let's say share that notebook to other people on your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (3), [[SQL]] (2), [[Python (Programming Language)|Python]] (1), [[Scala]] (1)
> **UI Navigation:** toggle (3), click on (2), go to (1)
> **Env Vars:** sql (2), eda (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Warnings:** be aware (1)

#### [Executing notebooks](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=4)** - [Instructor] Here we have Databricks notebooks and they're very exciting because there are many ways to use them. You can see here are some existing queries that I've got, but another thing I can do is execute the entire thing from the interface. So if I go to run, notice that I don't have to do things, cell by cell, I can select run all. When I do run all, it'll run every single notebook. I could also pick a certain cell. So if you're working with [[Big Data]], for example, you may want to select a subsection so that you don't rerun everything. Or you could run everything above, or you could run everything below, or you could run the selected text, or you could even go to the last run cell. So there's a lot of options here as well. Now another thing that could be very useful to be aware of in terms of execution is you may want to clear all state and run all. So for example, let's say you've been running this notebook over and over again and maybe you are unclear of actually the order or if something changed, what you could do is basically redo it, clear all the state, run everything again, and you're now in a known good configuration. So there's lots of options here in the run menu. Another option is you can also schedule. So if you go through here and you schedule, you could schedule a job and say, I want this scheduled every single day at some time. A great example of why you'd want to do this would be, let's say web scraping or some kind of [[Data Collection]] job.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/executing-notebooks?u=76281980&t=98)** Now you also could send alerts to your personal email address and you could toggle on start success failure, et cetera. And you could also name this a particular job. So you can also schedule into the future or even manually run it if you want to toggle through and take a look at it. Finally, another advanced feature here that's worth pointing out is if we notice here that we've got this select query here is I can get hints on what to do. And so how would I get some hints on what to type? Well, if you type in a partial selection here, so we'll say select, you're going to get code completion, which is nice, and we can even get from samples and we can go through here and do this and even do trips. But what we can also do as well is if we do shift option space, it'll actually give you some ideas of some other queries that you may want to run. So this is also a nice way to get some ideas for execution. They may not be exactly what you want, you may have to change it, et cetera. But it is nice that you can actually go through here and do the shift option space. And here we go, maybe 100 is the way that we want to actually run this particular query. So there's lots of options here when you're executing cells, not just doing the shift return, which people typically do, but you can go through the run menu, select certain cells or schedule things into the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Data Collection]] (1)
> **UI Navigation:** go to (2), toggle (2)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Sharing notebooks](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=4)** - [Instructor] Once you've created a notebook that has everything that you need, one of the things that we can do is go through the notebook and share it with other people on your team. So, how would you do this? Well, if we go over to the Share icon right here, you can see that it gives you the ability to share with other people on your team. So you can see here that it will pop down some suggested choices, for example, like admins, and you can go through here and give them this sharing link. Now, another thing you can do is control exactly what they can do. So this is very useful for maybe a developer that's working on some [[Big Data]] projects, is that you want, let's say, the data scientist to only view the notebook because they are going to execute the run but you don't want them to actually change it. Likewise, you can actually go through here and run, and you can actually allow someone to redo the run, for example. Because in the case of a view, if you go through here and you were able to just view the results of the notebook, that's good enough maybe for some of the [[Data Science]] tasks that you need to do. But running requires many resources, and it could require a bit of an understanding of what's happening in your organization and the cluster size, et cetera, so this could be a more privileged thing to do. Likewise, editing would be reserved for a very few amount of people that you share this with, because you don't want someone to make a change to the notebook
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/sharing-notebooks?u=76281980&t=98)** that could cause the notebook to fail in the future, especially if it's like a scheduled job. And then, finally, manage. This would be for the highest level of privileges, and this would be the example where you could allow someone, potentially, to reschedule the job or change the kind of cluster that it runs with. So, there's lots of options here when you're thinking about sharing that you can control inside of Databricks. And then finally, you can just copy the link here and paste that link into a chat system like [[Slack]] or email it to somebody and say, "Hey, can you take a look at this notebook? I'm having some problems." And if you had, for example, edit privileges, they could even edit the notebook for you, send a link back to you and say, "Hey, I think I fixed it."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Data Science]] (1), [[Slack]] (1)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [Multilanguage support](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=4)** - [Instructor] Here we have a notebook that I'm going to demonstrate the ability to use multiple languages. Now by default, you can see here that the default is [[SQL]], but there are other languages we can use. We can use [[Python (Programming Language)|Python]], we also can use [[Scala]], and we can use R. And even there's a hidden language, which is Bash, which I'll show you how to do as well. So first up here, if we scroll down and we look at a SQL query, you can see that this is obviously a straightforward way to query. Of course, doing a limit on a large data set is a good idea so that it doesn't take several minutes just to test something out. Now, if we want to go down and run this, I could just go through here and just click on run cell, and this will go through here and give us the result, and we can see the result is able to be shown. Next though, what we can do is move to the Python section, and what we're going to do in this Python section is also be able to run the cells. And so in order to do that, all we need to do here is go ahead and run this. We can see run cell, and notice the difference. We have the Python right here with the percent that tells the cell that it's going to be a Python cell. We also have the import [[Pandas (Software)|pandas]] as pd. We then go through here and mount the Databricks file system. We then read it in as a CSV, and then we display the first 10 rows. So this works fine for small datasets.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=99)** If you want to use something larger, you'll need to use the Spark interface. And then if we want to go down here and look at R as well, this is another choice that we have that's available. And what's nice about the R interface here is that we're able to, if we look through the cell here, require the SparkR Library. So this binds with Spark, and we're able to also put in the percentage R here to show that this is going to be a cell that will invoke the R language. And then we're going to read the diamonds dataset as a Spark data frame. And you can see here that it's all included. So we have diamonds, we're able to source Databricks. We're then going to split the data into a training set and test set, and we're going to exclude the row IDs. And then finally, the pertinent information is actually printed there. So let's go ahead and run that. And we go ahead and we say run cell. We can see it's going through here, running, churning, going through, and we see the output right there, which is nice. Finally, we have Scala. And if we go through here and we take a look at Scala, again, it's a percentage. We can say import org.apache.spark.sql.SparkSession. A Spark Session is then created, and then you can actually pass in a SQL query if you want. And then that turns into a data frame, which you can actually run the show operation on. And you can see as well, we can run this, and it goes through and it runs that and gives us the data. Now the final thing that I'll mention
>
> **[3:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multilanguage-support?u=76281980&t=194)** is this Bash example here. And what's nice about this style is that if you use Python cells, Python has the ability to execute shell commands. And we can actually do this with a percentage. So we can say percentage ls, and then notice when we run this, we're able to actually run any type of shell command inside of here. So this is a great way to maybe do some [[Data Processing]] or run some commands to see where you're at. So you really have the ability to run not only just these four languages, but with the Python syntax, you can also do the exclamation point here, ls, to also get access to the shell ecosystem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[SQL]] (4), [[Scala]] (3), [[Pandas (Software)|Pandas]] (1), [[Data Processing]] (1)
> **CLI Commands:** python (8), ls (2), apache (1)
> **Env Vars:** sql (3), csv (1)
> **Tools:** bash (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **File Paths:** org.apache.spark.sql (1)
> **Prerequisites:** you'll need (1)

#### [Databricks Repos overview](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=5)** - [Instructor] Once you start using notebooks quite a bit, you're going to want to look into the workspace, which is a way to share different things in your environment with other people and also organize things and also repo. So first, let's take a look at workspace here. So inside of the workspace, one of the things that we can do is we can actually add a folder. And so this folder could be, for example, some [[Scala]] notebooks. You could put them all in a certain directory. And then once you've got those notebooks directory created, you could actually go through and put a notebook there and we can just say this, call it our, you know, scala test. And then we could change the default language to Scala and we can just say sure. And then from here, if we are able to go back to that workspace that you can see that that notebook is there as well. And so finally, I could actually share this entire thing with other people by selecting share. That's one way to do things is you have this local workflow and there's a lot of benefits to that. On the flip side, a lot of times you will want to get access to [[Version Control]] and actually go through the version control system and version control your notebook. So let's go ahead and take a look at a repo here. So if we go to repos, you can see one is already added. And if I go ahead and I say add folder, you could actually organize them inside of the folder. That's one way to actually change things. Or likewise, if we go into here, we can actually say add and we can add a repo.
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-repos-overview?u=76281980&t=100)** Now in terms of the repo here you can see this is the URL, and you could put an HTTP URL here. We also could select different providers from [[GitHub]] to [[Bitbucket]] to GitLab to [[Microsoft Azure|Azure]] [[DevOps]] to AWS CodeCommit. We have lots of options here depending on what are the requirements for your organization. And then you put your name right here. So once you've done that, you can see I have an example here. You get access to everything inside of the notebook and we could start to version control the work that you're doing so that it's not lost and you're able to actually share that work via the version control system with other people. You also can directly add inside of here as well. So if you go through here, you can add files, you can add notebooks, you can add folders. So you do have the ability to interface with them. So there are a couple different ways to version control your system with Databricks. You can always download it and add it in, or you could have the direct workspace integration and you can actually move things from the repos to the workspace and the workspace to the repos. And in general, it's a best practice to do versioning for your Databricks notebooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (6), [[Scala]] (3), [[GitHub]] (1), [[Bitbucket]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** url (2), http (1), aws (1)
> **Tools:** github (1), bitbucket (1), gitlab (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)


### 3. Data Management with Delta Lake

[↑ Back to Table of Contents](#table-of-contents)

#### [Efficient data transformation with Spark SQL](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=5)** - [Instructor] Let's get started with Spark [[SQL]], which is a way to query all of the Databricks file system in SQL. Let's go ahead and take a look first at this catalog here. So if I look at this, you can see here that we've got these catalogs and in fact sample data as well. So we see sample, default, New York taxi, TPCH. We can also look at it from another view. If I go to open bottom panel here, it gives me the ability to also interrogate it from a terminal. So if I type in ls/dbfs/ that would show us what's inside of that Databricks file system. And I also could look at the actual data sets here. So if we could say data sets and if I want to look at, for example, NYC sample, we can see, in fact that's where that data lives and I can even CD into it, if I wanted to. Just take this last navigation here, put inside. And then we can see, for example, there is a directory that has [[JSON]] inside of that, a whole bunch of different files. In fact, I can do this, I can do a DU. And what this will show me is the size of the entire set of sample data. We could also do it individually and we could see that there's a large, really variety of different sizes here. You know, 70 meg, 105.
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=98)** So this is a good way to just kind of play around, you know, if you want to see what's happening with the local Databricks file system, but we also can query it from SQL, right? So this is our default language here. And if I go inside of this, what I can do is I can actually type in Select * and we can say From, and we can say we want to do the samples and we'll do the NYC taxi data. And if we look at the trips here, let's go ahead and limit, let's just grab about a thousand of these files. Now this is an okay SQL query, but I can use the advanced features here of the Notebook to clean it up a little bit, make it look better. So if I go over to this over here, that's going to run it. But I want to select this one right here, which says Format SQL. Let's go ahead and run that. There we go, so we have a little bit better of a SQL format now. And then if I run this, what's going to happen is I'm going to get this giant Spark job that runs and I can even inspect if I want to and see what was going on. But in general, what's nice about this is I'm able to actually look at this data, look at the different views, you know, sort it for example. And the other thing I can do as well is click on this plus icon.
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=193)** And there's two different modes we can dive into. We can dive into visualization, which is often a good place to start. Or even data profiling. Let's go ahead and data profile first. So we can find things like, for example, descriptive [[Statistics]], which I often first want to do when I'm looking at something and I want to see what's going on in terms of what's happening here. So we can see that the standard deviation of this particular column is a certain value. I can look at the median really, and these are, doesn't really make sense. But in terms of trip distance here, we can see that the median is 1.63. So that is something that's interesting. And we can look at the skew, really skewed towards extremely short trips. Simultaneously, we can look at the fair amount, a little bit more spread out, still skewed, but we can see the median fair is 9. And then if we look at the pickup zip code or drop off zip code, right? So we can get a feel for the data by doing a data profile, which is really handy. We also though can click on this plus and do a visualization. Let's go ahead and do this visualization as well. And let's start off with something beyond just a bar chart, that's a little bit boring. What we could do instead as we could look at a scatter plot or a bubble plot, let's do a bubble plot and then we can select what we want to actually do a scatter plot on. So if we go through here, we can say, let's say the trip distance and also the fair amount.
>
> **[4:48](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/efficient-data-transformation-with-spark-sql?u=76281980&t=288)** Those are kind of exciting. Oh, there we go. So we got a nice little logarithmic relationship, right? It's linear up until you get to here and it seems like things start to go into a logarithmic curve here. So it may be the fact that, you know, once you go to a certain part of the city, potentially it's like a fixed rate or something like that. But in general, we are able to get a good visualization here by taking a look at this. And if I want to as well, I can just say Save. And then I'm also able to have this visualization inside of my notebook. So this is a great way to really immediately start adding value in an organization. You can see it's not too hard to use SQL, do some descriptive statistics, get some great visualizations. And obviously if I go to here, Share, I could share that with other people in my organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Statistics]] (2), [[JSON]] (1)
> **Env Vars:** sql (7), nyc (2), tpch (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (2), ls (1), cd (1), find (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (4), it's like (1)
> **Versions:** 1.63 (1)
> **Tools:** terminal (1)

#### [Using Catalog Explorer](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=5)** - [Instructor] The Catalog Explorer in Databricks is a user interface that allows you to browse, search, manage, and organize different data objects like tables, views, [[Dashboards]] in the Databricks workspace. Some of the things you can do include providing a centralized portal to search, filter, and browse tables, dashboards, and models, and you can also tag objects, and you can manage access permissions, and you can also view the underlying data within tables. So, really it's a great way to play around with your data, I would say is the easy example. So let's take a look at this Catalog Explorer here, we have samples. And we see that the New York taxi data would be a good one to play with. So if we click on this, notice what happens is that automatically, I can tell that these are the columns. And I could even add comments. Let's say I'm working with a team, and you know, for example, we would want to have some very rich commenting like, "Hey, we need to clean up this data," or whatever it is we want to do. Also, I can look at a descriptive sample as well, which is really nice to just get a view of the data without having to write any code. And we can also look at things like the details. You know, where actually is this on disc? Which is a great thing to know because I may want to do some other things with it. And then finally, if I wanted to, I can actually do things with this. So this is kind of neat here, this create widget. So if I say create, probably the first place you'd want to start would be to do a query. So if we do a query here, we can say select star from trips.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=99)** And in fact, I mean, it already does a limit 1,000, so maybe I'll just make it easier and I'll say limit 100. And what's nice about this is that I can do a shift return, and then it's going to go ahead and run this query. It's got a built-in limiter here that protects us from, you know, basically taking down the system by always limiting to 1,000. But if we look at this, you can see that return back 100 rows and 385 milliseconds. So this is a very cool feature here. Now remember, we also can do other things. So if I click on this plus, I could immediately go into a visualization as well. And again, I could look at a scatterplot, for example, pick the X, pick up a zip code, or potentially the trip distance, whatever it is that I want to play around with. And then I've got this nice little dashboard here as well. So what's really useful about this is that I can keep on building things, so I can potentially build some kind of a filter. And in general, this gives me the ability to have these stored systems attached to the data so that other people that are looking at it might go , "Oh, okay, great. This is one of the things that we want to take a look at with this particular data." Now, the other thing that's also kind of a stealth feature here is if we go to one of these things here, like the Hive Metastore for example, it also gives us the ability to do more things. So for example, if I type in Catalog Explorer,
>
> **[3:17](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-catalog-explorer?u=76281980&t=197)** we can also open this up in a separate window as well. Now, the other thing that is important to be aware of is that we're able to toggle back and forth between the [[SQL]] Editor and the Catalog Explorer, which is what we saw. So if I go here and I go to the SQL Explorer, right, that gives me this view, but I could always toggle back and go to the Catalog Explorer. And there's really an interaction between the two things. A lot of times you may want to just look at the data, but then when you want to actually change something, you would go back to the Catalog Explorer. Finally, the other thing you can do that's actually very powerful is dive right into the Databricks file system. So for example, if I look at the file store here, one of the things that we can see is that there is some data here that doesn't have a table. So this would be something that later, if I wanted to create the [[Metadata]] for this, I could go back to this Databricks file system and look at that particular path, create the table inside of the Catalog Explorer so then I could do queries with it, or do visualizations, et cetera. So Catalog Explorer is really the place to start when you're dealing with metadata on the Databricks file system, and it saves you a lot of time if you set up some automations around the visualizations, and also the the descriptive [[Statistics]] so other people on your team can immediately start to add value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[SQL]] (2), [[Metadata]] (2), [[Statistics]] (1)
> **UI Navigation:** go to (3), click on (2), toggle (2)
> **Analogies:** for example (5)
> **Definitions:** is a  (3)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)

#### [Creating tables from files](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=5)** - [Instructor] A very common task that is a little bit confusing with Databricks is how do I add data into the Databricks file system manually and then create a table based on it? So for example, if it doesn't show in the Catalog Explorer here, how do I actually get it to be created? So first step, what we want to do is look at the DBFS. If we take a look at this DBFS here, look, I have some data that actually isn't inside of the Catalog Explorer. So one of the things that we can do is we can actually pop over to the [[SQL]] Editor right here. And what I can do is I can actually create a new query here that will create the table for us. So what I can do is I can say create table. And if we want to go back to this real quick, let's double check where this path actually lives. So if I go to this, if I click on copy path, notice how it actually tells us DBFS, FileStore, tables, height_weight, or the spark API format, which is the one we want. So I'm going to actually use that when I do this query. So I'm going to say create table, and we'll call this one height_weight. And we'll call this 25- K. And we'll say using CSV because it's CSV data. And then we'll say options here. And we can put in, essentially, the path.
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=101)** And so this will be the first path. And then if I do a quote, I can paste that in. Looks good. And then I can do a header equals true so that it will respect the column headers. And that should do it. If we go through here and we take a look at that, looks pretty good. And I could even save that query, for example, if I wanted to. And that looks pretty good. All right, let's go ahead and run that. And so what this is going to do, it's going to read in that data. And then there we go. We can see that it's able to actually create that table. So what it means is if we go back to the hive_metastore, we go to default. Aha, there we go. We've got this thing actually created for us. And if I want to, I can actually close this to get it out of the way. And if we just go over here, we collapse this, we can see all of the different names here as well, which is pretty nice. And I could also open this up in the Catalog Explorer independently. So it's basically all ready to go. We have the columns, we have the sample data, and we have the details as well. So this is a pretty straightforward process to get this into the Catalog Explorer. What we haven't covered though is how do you actually upload the data from scratch? So let's do that as well.
>
> **[3:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=194)** I'll add another file. So we'll say Add, add the data, create or modify table. We'll click on Browse. I have some NBA data here that I'm going to upload. There we go. We see it gives us a nice preview mode. And we can take all of this stuff and we can say, in fact automatically, create a new table as well. And we'll call the table name nba_2017. Let's just make it a little bit easier to work with. And we'll say Create Table. So if you used the proper interface as well, like for example the other one potentially was used from an API upload and it hadn't... The table hadn't been created, it could be a little bit more difficult. But if you use the Catalog Explorer interface here, look, immediately, we've got all this working. We can look at the sample data. And in fact, I can immediately as well make a nice little dashboard here. And if we go through and we say the number columns, maybe we can look at the... Let's look at some... Salary in the millions, that looks pretty good. And maybe the page views on Wikipedia, and then the player name. And we can actually create a nice dashboard from that. And here we see I'm able to pop all that in. We can see a box plot for the salaries. We also see the total records. There's 239. We can look at the page views as well. We can see there's a very exponential relationship between the data here.
>
> **[4:49](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/creating-tables-from-files?u=76281980&t=289)** We see some outliers are just, you know, amazingly big. And then we also can look at other things inside of this dashboard. So in a nutshell, this is a great way to get started with your data is to use the Catalog Explorer, upload things, add it to a table. And from there you can continue to use the Databricks interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** dbfs (3), api (2), csv (2), sql (1), nba (1)
> **UI Navigation:** go to (2), click on (2)
> **Code Identifiers:** height_weight (2), hive_metastore (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)

#### [Querying external data sources](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=4)** - [Instructor] How do you query against external data sources? Well, if we take a look at this catalog explorer here, and we go to add, there's a section here where we can obviously add external data. That's one option. We can also integrate with native integrations as well. So this is probably one of the easier ways to get started with querying external resources is you could put some items inside of blob storage and you could then integrate that directly into your upload. Now, another thing you could do as well is you could have things in different [[Databases]] like Cassandra, [[Snowflake]] System, [[Java Database Connectivity (JDBC)|JDBC]], Kafka, Elastic Search, [[MongoDB]] [[PostgreSQL|Postgres]], [[MySQL]], even the DBFS itself. And now you also can talk to other sources as well, and including [[Google Drive]], you could look at Salesforce. So there's a lot of different ways that we can actually add things inside from external sources. One thing I'll also mention is that we can also look at Ingest via Partner. And so this is slightly different in that what you can do is you can actually take data sets from these other resources here. There's a nice integration. Let's take this Fivetran here. We could go through here. Advanced Options. This is going to put it directly into your DBFS and you'll be good to go.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-external-data-sources?u=76281980&t=99)** There's also BI and visualization as well. There's sources for [[Data Preparation]], transformation machine learning, so Dataiku Label Box, we got security, we have [[Data Governance]]. So there's a bunch of different ways that you can connect these external data sources as well. So there's more than just being able to add the data directly from this interface. You can also talk to providers by this Ingest Via Partner. So really there's a rich set of resources to pull all this into your Databricks system. And of course, you can use all of the existing interfaces like creating a new notebook or querying that directly inside of your [[SQL]] editor, or even going right into machine learning immediately when you have that data and running an auto mail experiment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Snowflake]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1), [[MongoDB]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** dbfs (2), jdbc (1), sql (1)
> **CLI Commands:** mysql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Inspecting tables](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=5)** - [Instructor] Let's take a look at how you would inspect a table inside of Databricks. First, proceed to the catalog. The catalog explorer is going to require a warehouse to be running so that you can actually inspect the tables. Now see here we have the hive_metastore, which is where the user uploads are kept, and we also have the samples, so these are the default. So if I wanted to take a look at, for example, a table here, trips, notice that the owner is Databricks. So we can see what actually occurred when this was first created. So Databricks created it two years ago, and we see the size is 531 kilobytes. We can also take a look here at the columns. We can grab some sample data as well, and this will give us a good, you know, overview of what's happening. We can also look at the details here. And this shows us the location on disk, so this could be handy if you're doing some kind of operation, like, you want to copy something into a location. And then we can also look at what are the permissions and also what's the history. Now, this is going to be less helpful in terms of the default data, but if we go to some data that I've uploaded here and we take a look at this height_weight_2k here, you can see this is owned by demo, there's a fake email address, and we also have the columns that are available. So we have index, height, weight. Now, this is a nice thing you can do as well in inspecting data, is you can actually add comments. For example, we could say this is in LVs, for example,
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=104)** and then we could potentially add another statement that says this is in inches, right, some kind of [[Metadata]] that lets us later figure out more information about this, and we could even add some things like, for example, "we don't need this". And this would allow us to annotate and inspect what's happening. We also can, again, go to the sample data, take a look at it, look at the details, look at the history, et cetera, and you can even add a comment directly onto the table itself and say, "this is synthetic height weight data."
>
> **[2:28](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/inspecting-tables?u=76281980&t=148)** So really, this is your go-to spot if you want to inspect what's happening inside of the Databricks catalog, is go to the catalog explorer. You can manipulate the table, inspect it, look at some metadata around it, add your own metadata to it, and finally, if you want to as well, you can directly go into a query, a notebook, or even create a dashboard. Now, if we take a look at this notebook real quick, one of the handy features here is that it automatically gives us the query that we would want to run. So this is actually pretty useful if we connect to a cluster here. What's nice about this is that it can be the one-stop shop if you want to grab into a table and get as much information as quickly as possible, you can branch off from there and go to different solutions, like for example, starting to query it inside of the actual notebooks themselves and starting Spark jobs around that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3)
> **Analogies:** for example (5)
> **UI Navigation:** go to (4)
> **Code Identifiers:** hive_metastore (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Reliable data pipelines with Delta Lake](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=5)** - [Instructor] There are some severe challenges with traditional ETL, or Extract, Transform, and Load. They have complex pipeline development, there is a lack of [[Data Quality]] often because of the mixture of data sources. Also, there's manual [[End-to-end Testing]], this can cause a lot of issues in terms of getting releases out. There's also inflexible stream versus [[Batch Processing]], and it's time-consuming to manage the system. So it's a good idea to have some of these problems solved with newer technology. And if we take a look at the Delta Live Tables, automated intelligent ETL, we have some new changes. One of them is that it's declarative, so you can use [[SQL]], you can use [[Python (Programming Language)|Python]] pipelines. There's also built-in data quality checks, there are automated error-handling, also continuous and batch modes. There's centralized pipeline observability, so this means that you can look at the entire pipeline and see what's actually working, what's not working, look at the debug messages, and fix it. And finally, there's a simplified deployment model. So the five steps to implement Delta Live Tables are automated, scalable [[Data Ingestion]], also powerful distributed [[Data Transformation]], declarative data quality controls, automated deployment and lineage tracking, and then built-in scheduling and notifications. So at the end you get these five key benefits here. You get a faster development pipeline,
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/reliable-data-pipelines-with-delta-lake?u=76281980&t=100)** you have also reliable [[Data Pipelines]], greater efficiency, and then flexibility across streams and batches, and then end-to-end pipeline visibility. So really it's an enhancement over a traditional Delta Lake in that you have the ability to do things like time traveling, you have the ability to actually make these really automated changes. And that's one of the benefits of the Databricks-Delta Lake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[End-to-end Testing]] (1), [[Batch Processing]] (1), [[SQL]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** etl (2), sql (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [ACID transactions](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=4)** - [Instructor] Here is an explanation of ACID transactions. It stands for four key components of a transaction, that make it a unique type of transaction. First off, we have Atomicity. This is ensuring all the operations in a transaction succeed or fail as a single unit. So you don't have an unstable state. Everything is either successful or failure. There is no partial state that's saved. It's an all or nothing operation. With Consistency, any Delta Lake transaction would take the database from one valid state to another valid state, for example. We also see this with traditional [[SQL]] systems, in terms of related data. So for example, the tables, they're going to be kept consistent after the transaction. This is very different than no SQL [[Databases]], which have eventual consistency. There is Isolation as well with ACID transactions. This means that concurrent transactions and queries are not going to interfere with each other. For example, if there's an uncommitted change, or there's an intermediate state, and the changes will remain isolated until they're committed. Durability is another one. So once a transaction commits, the changes are persisted durably, and they survive failures. Also, the committed data will never be lost. So some of the benefits include [[Data Integrity]] across batch and streaming. You also have the ability
>
> **[1:36](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/acid-transactions?u=76281980&t=96)** to query consistency with snapshots, and there's fault tolerance because you can have durable logs. Finally, you have reliable data delivery. So it's really the highest standard, in terms of [[Data Quality]], is to have the ability to do ACID transactions. There's some things you lose by it, for example, the [[Scalability]] aspects are limited because of that consistency. But in terms of data quality, ACID is really the gold standard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Data Quality]] (2), [[Databases]] (1), [[Data Integrity]] (1), [[Scalability]] (1)
> **Env Vars:** acid (4), sql (2)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), stands for (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Z-ordering optimization](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=4)** - [Instructor] What is Z-ordering? This is an important technique for Delta Lake, and it collates related information in the same set of files. So this co-locality is automatically used by Delta Lake on Databricks' data skipping [[Algorithms]], and this means that it can dramatically reduce the amount of data that Delta Lake on Databricks needs to read. So if we take a look at this [[SQL]] query here, you can specify the columns to order in the Z-order by clause. So we see optimize events, where date, greater than or equal to, current timestamp interval, one day, and here we get into the magic. Let's go ahead and use Z-order by event type. So some of the things that you can expect is that when you're using a query prediction and the column has high cardinality, so a large number of distinct values, then the Z-order really comes into play and it helps you out in terms of being able to skip certain parts of the data. So really, if we look at the key characteristics here, it is automatic data skipping. This means that the Delta Lake collects minmax stats on rights to enable predictive push down. Also happens transparently without extra configuration, and it skips scans irrelevant to the data at the query time. Next up, we have better locality as well, so this means it co-locates the related column values within the same data files. It also provides a major boost to skipping effectiveness,
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/z-ordering-optimization?u=76281980&t=99)** and you can specify the columns that you want to use the Z-order by. Also, the [[Statistics]] are great as well because it gives you a configurable statistics collection and it defaults to the first 32 columns in the table schema. But you can customize it via the columns property, and you can avoid high cardinality textual columns. So the last two things here to mention are there are significant query speedups, so there's much less data needed to be scanned. It's particularly effective with specific queries, and especially, the selective specific queries. And it translates to lower costs, total cost of ownership. And finally, it's incremental, so there's an incremental re-optimization. You can apply the Z-ordering after major backfills. You can rerun it when the data distribution changes significantly, and you can even test the queries to quantify the performance gain. So it's a nice trick to have in your toolkit when you're using Delta Lake on the Databricks platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Algorithms]] (1), [[SQL]] (1)
> **Definitions:** means that (2), is an  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 4. Data Pipelines with Delta Live Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Vacuuming and garbage collection](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=5)** - [Instructor] If we take a look at vacuuming and garbage collection in Delta Lake, vacuuming will remove older versions of data from Delta Lake tables that are no longer needed based on retention policy so it could save storage costs and it can be done automatically. And then in terms of garbage collection, this would remove the underlying data files that are no longer referenced by any snapshots. Some of the benefits include storage costs are going to be reduced because the unused table versions of data files, improving performance. And so the use, data base, vacuum, these are some of the commands that we need to know about. Now, first though, let's look at a table that's not a Delta Lake table. If we click on this thing, take a look at, in fact, the details here and we can see, look, it's a very simple amount of details, and it says type external. Let's take a look at a table that I copied and converted to a Delta Lake table. If we look at the details, you see that in fact it says type manage. So by default, a managed table is a Delta Lake table. And so what this means, it has all these fancy capabilities, like time travel, but we're also going to need to manage it in the case of vacuuming a garbage collection. So how do we do this? Well, let's move over to some code here, and let's pretend that we do a select, right? We look at this default table here that isn't a Delta Lake table. Well, what could we do?
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/vacuuming-and-garbage-collection?u=76281980&t=99)** Well, we could try to optimize it, but notice that this won't work. We see this giant trace back here because it's not a Delta table. So the OPTIMIZE command would go through in garbage collected, but it's not going to work because it's not yet a Delta table. So how do I change this? Well, if I go to Delta Lake table here, right? I can say create table, and I can create a copy of the existing table. And we can do this by creating a new table. So we say CREATE TABLE delta_table_height_weight_2K, USING delta AS SELECT * FROM, and then this is the path of my original table. Once I've done that, now we have a Delta Lake table, which again, we can go through and we can see here, this is a Delta Lake table. And then likewise, I could actually go through and do the optimize setting. I also could vacuum it as well. These are all the things that you can do once you have the ability to do Delta Lake Table operations. So if you do have an existing table that you want to change, you can just make a copy of it and convert it into a Delta Lake table.

> [!info]- Semantic Content
>
> **Env Vars:** optimize (1), create (1), table (1), using (1), select (1)
> **SQL:** create table (1), select (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Table documentation](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=5)** - [Instructor] Here we have Catalog Explorer, and what I'm going to do is add documentation to a table. There's a couple ways to do this. First, we can go look at a table and I'm going to take this height, weight table here and notice that it says this is a table comment. So let's go ahead and change that and just say that it is synthetic data. Right, so I've been able to enhance the table comment here, which is great, but a lot of times, you don't always want to point and click and change things. You want to be able to programmatically interact with a table. So what we can do is go to Create and go to [[SQL]] Query here. And we can actually manipulate this by doing a SQL Query. So what I can do is I can say let's go ahead and take this default SQL statement out and do an alter table here. So what I can do is I can say, "ALTER TABLE," and we're going to go ahead and select this one, which is the height weight here. And next I'm going to change the property. So I'm going to say "SET." And I'm going to do a table properties. There we go. And notice that I can actually put inside of here what it is I need to do. In this case, I'm going to say "comments," so I'll add a comment to this and it will say maybe something different.
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=99)** Say "Synthetic data on height/weight," right, "added By [[John the Ripper|John]]." So we've got some comments here. Let's close out with a semicolon. And now if I wanted to as well, I could save this and we could just call this a default query as well. So let's go ahead and alter the table. We'll see the result here. Great. I was able to alter it. Now how do I programmatically also see what happened? Well, fortunately it's pretty straightforward as well. What we can do is just do a change here where we describe the table. So let's go ahead and go back to this. Go to Describe, and we'll say "DESCRIBE EXTENDED." And this will give me the ability to see the extended attributes of the table. And we see that it is index, height, weight, right, catalog. But notice here that we also have a comment on each of these. And then in terms of the actual comment on the table, we can see my new comment is actually kept there as well. So this is a great interface if you have some SQL experience to document your tables. I mean, why not have really good documentation? And of course, if we need to go back here,
>
> **[3:14](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/table-documentation?u=76281980&t=194)** all I need to do is actually go back to that table name here. And if we select this, we can say open in Catalog Explorer. And then once I'm in Catalog Explorer, I can use those same techniques as well, right? I can visually see that comment has been made. So documented tables either in SQL or Catalog Explorer is very straightforward in Databricks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[John the Ripper|John]] (1)
> **Env Vars:** sql (5), alter (1), table (1), set (1), describe (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **SQL:** alter table (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Automated pipelines with Delta Live Tables](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=8)** - [Instructor] Delta Live Tables are a new way of scheduling workflows because you're able to use all of the advanced features of Delta Live, and you can obviously create a new pipeline by just selecting Create. Notice you'll have to select a pipeline name. You can choose what product for Advanced, Core, Pro, etcetera. You can even see some documentation about which ones to choose. And then you have the option of doing continuous or triggered. So the difference between a continuous, with streaming data, you could always be ingesting the new data as it arrives, versus a triggered would be on an event, and then you would pass in the source code path as well. You know, for example, your repo that's connected to your workstation, that could be a good a place to store your source code. And then in terms of the destination, potentially the [[Unity]] Catalog. And then in terms of compute, you would select what kind of compute cluster you would want to run. So I already have one running. So let's go ahead and take a look at this demo here. And you can see here in this Delta Live's spreadsheet, we have a streaming table here, which is customers. We also have the streaming table here, and these are able to move into a combined sales_order_clean. So there's some ETL operations. And then we have a materialized view here and a materialized view here. What's useful about this is that we also can toggle and look at a list and get more information. For example, did it fully complete? What are the different types of jobs
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/automated-pipelines-with-delta-live-tables?u=76281980&t=103)** that are actually running? Is it a streaming job, for example? How many records were written? Did any of the records drop? So if you're dealing with, you know, anything from the internet, like an API, there could be some drops, so there could be some failures. And it's really nice to be able to just see that in one view. Likewise, we can find directly where the source code lives as well by just selecting where that lives. And if I go to that source code link, you can see here, here's the notebook that gives us all of the streaming code here, and we could make changes to it as well. So there's a nice interface between the live code back to the automated pipeline. So, to kind of wrap this up here, the last thing that might be important to be aware of is that you also can toggle between different modes. So, in your Development mode, you get things working, you could then toggle to Production mode, and then, finally, you could schedule this pipeline on some kind of an interval as well. So there are a lot of features that make doing complex [[Data Pipelines]] fairly straightforward with the Delta Live Tables. And you can see here a pretty good overview of the basic features of Delta Live Tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (1), [[Data Pipelines]] (1)
> **UI Navigation:** toggle (3), go to (1)
> **Exercise Files:** source code (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **Env Vars:** etl (1), api (1)
> **Code Identifiers:** sales_order_clean (1)
> **Warnings:** be aware (1)

#### [Delta Live Tables components](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=4)** - [Instructor] Here we have the key components of Delta Live Tables, and you can see as you incorporate the best practices, you can move from the bronze zone to the silver zone to the gold zone. If you see the differences here are that, let's say for example, in the silver zone, you're able to get the whole data pipeline observability functioning. At the end of the gold zone, you're able to have automated deployments and operations, so [[MLOps]] or DataOps, and you're also able to orchestrate your [[Data Pipelines]]. This leads to better results in [[SQL]] analytics and BI, AI and ML, and also [[Data Sharing]]. So if we walk through this diagram here, you can see that efficient [[Data Ingestion]] is a big component of Delta Live Tables. The auto loader has incremental landing, and this is in the bronze layer and the ingestion from diverse sources like [[Cloud Storage]] or CDC or message buses, and you can load the data in a very simple way for the entire data team from SQL users to engineers. Next step, we have intelligent [[Data Transformation]], and this means streamlining architectures using streaming tables and views. And this would have the ability to have quality enforcement, also flexible, continuous, or triggered pipeline execution, and you could leverage the performance optimizations of Spark structured streaming. Next step, you have a simplified pipeline management, and this means handling orchestration, monitoring, failure, CICD, [[Version Control]],
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/delta-live-tables-components?u=76281980&t=100)** autoscale your infrastructure, for example, with [[Infrastructure as code (IaC)|infrastructure as code]], and also allowing the focus on business logic rather than just operations. And then with the Lakehouse platform integration, the [[Unity]] catalog is useful for data discovery, governance. And then the Delta Lake is the reliable storage layer, and it works across multiple cloud environments. And in terms of the business impact, you would be able to have faster development velocity, easy scaling to manage increasing data volumes, and also you would accelerate time to insight across an organization. Really what this means is that you're able to reduce the pipeline total cost of ownership through automation. Really, that's the final gold zone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[MLOps]] (1), [[Data Pipelines]] (1), [[Data Sharing]] (1), [[Data Ingestion]] (1)
> **Env Vars:** sql (2), cdc (1), cicd (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Continuous vs. triggered pipelines](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=8)** - [Instructor] Let's take a look at two different Delta Live Pipelines. First up here we have continuous. The idea with a continuous pipeline is that data is processed from sources continuously as it arrives. So streaming data, new inserts and updates are incrementally synced to target tables. It also enables [[Real-Time]] ETL [[Extract, Transform, Load (ETL)|extract, transform, load]], and also real-time analytics. So the use cases for this would be a metrics dashboard. Let's say you wanted to know what revenue is being generated on an hourly basis, or even real-time. This would be a great use case or fraud detection in real-time. You want to see what fake credit card numbers are being entered. You could have a fraud detection system via this continuous pipeline. Now, triggered pipelines are a little bit different in that the data is processed during scheduled [[Windows]] instead of continuous. So this means that, let's say, once per day you would do some operation and the windows can be scheduled via Cron schedules. And this allows for batch or periodic processing in a logical manner like hourly, daily, weekly, et cetera. And these use cases would include aggregated reports or even ML model training. For example, maybe once per day as you get an update, you have a small machine learning model that you rerun, and that's done via this triggered window. Now, you could also consider that continuous
>
> **[1:45](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/continuous-vs-triggered-pipelines?u=76281980&t=105)** is going to have lower latency, but would require more resources. So this could cost much more money. And triggered is more cost-efficient for batch based workloads. So you can also combine the approaches based on the consumption that you're seeing. And you could also change, maybe make a pipeline configuration update, and you could actually try one version versus another version. So they're both great technologies and it's up to you to figure out how to put the best use case in for both, while also monitoring the cost and the benefit to your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Windows]] (2), [[Extract, Transform, Load (ETL)|Extract, transform, load]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** etl (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Configuring Auto Loader](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-auto-loader?u=76281980&t=8)** - [Instructor] The Auto Loader allows you to securely ingest data from external locations as long as you have the [[Unity]] Catalog. Here's some key talking points to be aware of. First up, there is the source configuration. This means support for [[Cloud Storage]], the database, the messaging system. You can handle various data formats like [[JSON]], Parquet, CSV, and also, there is credential management for secure connectivity. The incremental data loading is another important aspect because it persists the [[Cursor]] state for each source, and you're only going to get the latest inserts and updates pulled in, and it's going to be a lot faster and efficient for full loads. For transformations, you could execute a query on a source system. You could apply a filter, an aggregation, a conversion. You could also change into Delta for reliability as well. In terms of monitoring, there are [[Dashboards]] that can track the pipeline health. You can get alerts. There's also de detailed debug logs as well, and then, in terms of scheduling, you can set schedules with crons or trigger or continuous execution, and then have built-in [[Dependency Management]] across jobs, so really straightforward here to build this kind of code. You can see in [[Python (Programming Language)|Python]], just a few lines, and then you're able to take advantage of the advanced capabilities of the Unity Catalog to manage that table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (2), [[Cloud Storage]] (1), [[JSON]] (1), [[Dashboards]] (1), [[Dependency Management]] (1)
> **Env Vars:** json (1), csv (1)
> **CLI Commands:** python (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Querying pipeline events](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/querying-pipeline-events?u=76281980&t=8)** - [Instructor] Here we have a query around the API for pipeline events in a Delta Lake Pipeline. Notice here how you can do a get request, go to the API, the second version, or whatever version of the future, look at the pipeline, pass in the pipeline ID, and then get these events. There are three different query parameters as well, including order_by, filter, and max_results. And you can see this sample [[JSON]] payload that gives you some of those items. So in a nutshell, there are CRUD APIs for Delta live table pipelines. You can manage permissions to control access, you can remove the pipeline execution, events and metrics. You can monitor pipeline status and health, and you can handle the lifecycle via start, stop and reset commands. In terms of the DBFS, the API also is similar. There are basic file system operations, the CRUD operations to DBFS, downloading and uploading. Also listing files and contents, setting ACL permissions, and then programmatically accessing the DBFS from jobs. So the common capabilities are there's granular validation and error handling, structured request response, standard HTP codes, so it can work with many different languages. And there's pagination support via [[Tokens]]. So this is easy to integrate into a customized CICD workflow and also build custom tooling and automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Tokens]] (1)
> **Env Vars:** api (3), dbfs (3), crud (2), json (1), acl (1)
> **Code Identifiers:** order_by (1), max_results (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [End-to-end example of Delta Live Tables](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/end-to-end-example-of-delta-live-table?u=76281980&t=8)** - [Host] Here we have a end-to-end example with a Delta live table inside of the Workflows interface. And notice that there are these initial components that show us what's happening. So in terms of [[Data Quality]], we can see that 100% of the code was written. We we toggle down to the next section also 100%, 4,000 items. We can go to the quality here as well, and we can see that the expectations. We have some drops here. There's no failures, so what's nice about an Indian pipeline is we can inspect each part of the pipeline and get granular ability to look at the data quality, look at the details, the schema, the flows, and even toggle between the development and production. And we also can see this from this menu as well. So it's going to show when the pipeline is starting, when it's running, when it's completed, and we can also see the updates as well. So an Indian solution has a lot of monitoring and observability of the pipeline. This can be invaluable when there's very complex things happening. Potentially there could be a problem in the middle here. How do you know if it even failed? This is a improvement over a bunch of scripts that are cobbled together because you don't know what's happening in those scripts. So the observability of the data pipeline is one of the strengths of these Delta live tables, and you're able to do this inside of the interface and also schedule it in the future. Also start it on demand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (2)
> **UI Navigation:** toggle (2), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [host] (1)


### 5. Workloads with Jobs

[↑ Back to Table of Contents](#table-of-contents)

#### [Orchestrating workloads with jobs](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=4)** - [Instructor] Here we have a Databricks Jobs overview. Let's take a look at what a typical job would look like. So let's say that I wanted to interact with a notebook. This notebook could, for example, do ETL operations or maybe create some new tables or ingest some data. It could even create a dashboard automatically. That is a great thing to do manually, but it's even better if you're able to automate it. So that's where the jobs comes in, is that what I can do is I can set up a new job here and then hook it up to the notebook that I've already created in, for example, source code repo. So notice here that we have the ability to look at the Databricks workspace, so that's a kind of default place, but I also could point the jobs to the source code repo. So this is going to be a best practice here. I would check in that notebook again, it could potentially create some new tables and just some data. Maybe create a dashboard. And then finally, I'll go ahead and I'll schedule that job to run, let's say, every day. And this could be a great way to give a report to maybe somebody on the business team. The other thing that I'll need to do is actually decide what is the cluster that needs to be involved in order to do all of the disk I/O, the computation. And so that'll be an ephemeral job that will launch a cluster. Once the job is finished, the cluster will actually spin back down. Now there are other things you can do beyond just a notebook, which is very useful. You could point it to a [[Python (Programming Language)|Python]] script, which again, should live in a source code repo,
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/orchestrating-workloads-with-jobs?u=76281980&t=97)** but it could also live in Databricks workspace. You could also build out a very sophisticated [[SQL]] query that did a bunch of different things in your organization. Again, check that into a source code repo, or it could even point directly into a Databricks workspace, and you could actually save previous SQL queries and point to it. A final thing that could be pointed out is that you also could have a JAR file. So [[Java]] has the ability to have portable runtimes. You could create this JAR file, have it waiting there, ready to go, and that could do an ETL operation. So there's a lot of flexibility, and there's even different targets beyond these targets when you're setting up Databricks jobs. But what's great is that you're able to put this all into a uniformed and automated ecosystem so that you are able to look at everything that's happening when the job runs, debug it, schedule it, or even periodically just manually schedule it when you want to start something or you want to build a batch based operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Python (Programming Language)|Python]] (1), [[Java]] (1)
> **Env Vars:** etl (2), sql (2), jar (2)
> **Exercise Files:** source code (4)
> **Analogies:** for example (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)

#### [Databricks jobs demo](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=5)** - [Instructor] Here we have the main interface and we're going to take a look at how to create a new Databricks job. I'm going to go to Workflows. And inside the workflows we have several jobs that are already available. So if I wanted to filter through, let's say, thousands or tens of thousands of jobs, you know, if I typed in Hello, right, I'm only going to see that interface. So this could be a very helpful way to look through lots of jobs. If you're in a bigger organization, it's very likely that you could have tens of thousands of jobs. Now, in order to create a new job though, all I would need to do is select this Create job window. Let's go ahead and click this. And now we have this new interface and we can name the job. So we'll call this one run-notebook. And what's nice about this is that we can then go through here and create a task-by-task setup. So you can create an initial task and then link a second task or a third task or a fourth task. And potentially, we could even say this run-notebooks, right, so it would signify that we would run multiple notebooks. So first one, we could call this, you know, notebook1. And then from here we could look at the type. So notice here, under Type, we have Notebooks, [[Python (Programming Language)|Python]] scripts, Python wheel, [[SQL]], Delta Live Tables pipeline, dbt, JAR, Spark Submit, Run Job, If/else conditions. And these, if/else could be really handy
>
> **[1:37](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=97)** if you're going to, you know, do something that needed to wait for certain resources or there was a condition that you needed to match here. So there's lots of options. We're going to go ahead and stay with Notebook. Now notice here, under Source, this is where you would also take a look at, you know, what is actually the source for your notebook? Is it going to be in a [[Git]] provider? So GitLab, for example, or [[GitHub]], [[Bitbucket]], AWS CodeCommit, or is it going to be inside of the Databricks Workspace itself? I think most mature organizations probably are going to be pointing to a Git provider here. Now, once you've done that, you would just go ahead and pull up the path to a notebook. In this case, I could select, for example, maybe a data-science notebook or a demo notebook. Whatever it is that I'm going to build. We'll go ahead and pick this demo notebook. And then notice here as well that there's a default Job_cluster. We could use this. We also could use an existing all-purpose cluster. The difference here is that in the case of the all-purpose cluster, this could be running for maybe data analysis already. And so we, we potentially would want to already use it. What's nice about the job_cluster though, is it's ephemeral in that it'll spin up, do the job, and then spin back down. So we could go ahead and leave that. And then you could add other things like notifications, for example. You could also ask, you know, Retries, Duration threshold. So lots of options here
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=193)** when you're actually working with the jobs interface. So once this task is created, then you could again add another task, right? And so you could just link them again over and over and over again. Now also, if we take a look at some of these things here, you can see the job details. You could add tags to it. For example, maybe this is going to be the team and this will be data-engineering. And maybe you could add another tag, which would be, you know, type, et cetera. Anyway, as you go through here and you add your tags, these could be useful in sorting through things. You could also hook this into Git to make sure you have this checked in because it could be a complex schedule. And then also in terms of the Trigger type, you could do scheduled or continuous. If you do scheduled here, notice how you could actually build it in syntax. So this is really common for team engineering is to have pipelines that are scheduled and they run and they do some operation at a certain time per day. And that's definitely one of the ways to do it. And then finally, once you've done it, you also, if you wanted to, could just go ahead and select Run now. Now let's look at the interface here for previous job run. So let's go ahead and take a look here. And we can see here that this is a nice overview of some of the things that are happening. If you're working at a large organization, you'll be able to see lots and lots of runs and you may even want to, you know, look at the different statuses here,
>
> **[4:47](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/databricks-jobs-demo?u=76281980&t=287)** assort by Failed. And so we see one here, it's failed. Uh-oh, what's happening? So if I take a look at this failed job here and we take a look at what happened, you can see here that look that it was terminated while it was waiting to be ready. So there, the cluster, there was maybe not enough quota for this particular job. And so I could debug that and and figure it out. So it's a great interface not only to create the job, but also to look at previous jobs, make sure that you understand which ones are failing, which ones are skipped, which ones have been successful. And in a large organization you need a jobs management framework like this so you can orchestrate in a reliable way many different parts of your pipeline. If you don't have automation for the jobs workflow, it's going to be incredibly difficult to get anything done. And in a more sophisticated organization, you're going to need to both automate and schedule these jobs, as well as be able to monitor and observe exactly what's happening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (3), [[Python (Programming Language)|Python]] (2), [[SQL]] (1), [[GitHub]] (1), [[Bitbucket]] (1)
> **CLI Commands:** git (3), python (2), make (2), aws (1)
> **Analogies:** for example (4)
> **Env Vars:** sql (1), jar (1), aws (1)
> **Tools:** gitlab (1), github (1), bitbucket (1)
> **Prerequisites:** setup (1), make sure you have (1)
> **Code Identifiers:** job_cluster (1)
> **UI Navigation:** go to (1)

#### [Multitask workflows](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/multitask-workflows?u=76281980&t=4)** - [Instructor] Let's take a look at a multi-task workflow for jobs. So I'm in the workflow interface right here, and we can see that there are multiple tasks that are set up. We have a ingestion, then a preparation step, and then an analysis step, right? So there's three different tasks. If I wanted to add another task, I could do that as well. Once you're in this multitask interface, the other thing you can do is add a schedule. So this schedule could be something where you would trigger continuously, and you can see a continuous job is always running. And so in that case, it could be maybe something for a dashboard or streaming data. And then for scheduled job, you can also do this at a periodic interval and even toggle between cron syntax. Really the advantages with a multitask setup is that you can break each of these notebooks up into an individual piece. We can take a look at this, for example, in one of these tasks that I point it to the path of where my notebook lives. I then point it to the job cluster, and I also have the ability to toggle between the different types here. So in this case, we're doing a notebook, but it could be a [[Python (Programming Language)|Python]] script, a JAR file. It could be a Delta Live Tables pipeline. By allowing yourself to break the problem into multiple pieces is going to be a lot easier to debug both when it's running and also when you're coding up the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** toggle (2)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** python (1)
> **Env Vars:** jar (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Task dependencies](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=3)** - [Instructor] Here we have a workflow that involves multiple tasks, and that's one of the things you can do with the jobs framework. We have a songs workflow, a prepare songs data, and analyze songs data task. Each of these tasks, if I toggle through, has different types of dependencies. Notice at the very end here, that this one actually depends on the previous task. Likewise, if I go to this, it depends on the task before it. So this is part of building a task pipeline that involves multiple steps is that you have to wait until the previous step is complete, and when it's successfully completed, then it will proceed to the next step. This is where, also, you have to be careful of other task dependencies, other than just the task themselves. Some of the things that they could involve and involve dependent libraries, so for example, you may want a library loaded and it must be automatically attached to the cluster, so this is very important, or your job would fail. Likewise, there may be certain parameters that need to be passed. If we go through here and we add, it could be a parameter that needs to be in. Finally, if you look at some of the other things, as well that are dependencies, you may want to also look at the cluster itself. And so the cluster may involve things like a GPU or a certain version of Spark. So it's important to be able to really dive into all of the different task dependencies,
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/task-dependencies?u=76281980&t=98)** the tasks themselves, the libraries. Also, when you look at the cluster, does it have the appropriate runtime? And these are some of the key things to watch out for when you're looking at task dependencies.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (1), go to (1)
> **Warnings:** be careful (1), watch out (1)
> **Env Vars:** gpu (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Viewing job history](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=9)** - [Instructor] Let's take a look at how to monitor job history. We'll go over to workflows here and notice we have all these jobs, which have some history in the fact that they show the last run whether they failed or succeeded. So that's pretty useful, right? We could go through here and just look at the jobs themselves and find ones that have problems. And here we see there's an issue where there was a cluster, was terminated in a state that was unexpected because of a quota. So this could be something I would debug. But if we take a look here and we go back, this is definitely an easy interface, but a more comprehensive is job runs. So if we go to job runs here, notice that it shows us the status, right? So we could actually look at failed. We could look at active, we could look at completed. So this is actually a much more robust way to take a look at things because we can sort by the status. So if you have hundreds and hundreds of jobs each day, which in bigger organizations you would, you would go down here and toggle through, maybe look at the field jobs and say, okay, let's go ahead and take a look at how we can resolve this. Again, I could see the date that it was resolved as well as the status. So some of the easy ways to dive into this are to go again to the workflows interface. Take a look at the last run that gives you a nice overview when you're getting into more of a status based approach, then look at the status here. Go ahead and potentially look at all the failed statuses.
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/viewing-job-history?u=76281980&t=103)** Dive into 'em, click on the job, see what happened. Dive into the status message itself, debug it, and then move on to your next solution.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), toggle (1), click on (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Using dashboards](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=5)** - [Instructor] Here we have the New York City Taxi Trip Analysis dashboard, which is using the Databricks sample dataset on the New York City taxi trips. Notice it's in this interface dashboard. Let's point out some of the advantages of a tool like this. So you're a data analyst or a data scientist, and you need to have important information that you share with people in your organization. When you share a dashboard like this, what's nice about it is that you're able to give people up to date information with any interval that you're looking at, and you can also query and give them the ability, in human knowledge, to look at different ranges. So they don't need to know [[SQL]]. They don't have to actually know anything about writing code because they can toggle and search from different date ranges, or they can look at different zip codes themselves. So this is very empowering, and it's a democratization of [[Data Science]] and data analytics. Now notice here as well that look, it says 5 minutes ago. So this was updated 5 minutes ago, and the reason that it's updated is because I selected it. If I select this again, you can see that this will show that it's instantly updated. So you can actually have different states. So it's really up to the user. If the user wants to get the latest updates, they could click it again. Likewise, when you actually create this as a scheduled job, notice that you could say, add schedule, and you could say, look, every hour I want this to update,
>
> **[1:40](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=100)** and that might be okay for the majority of people. You also have the ability to do this in cron syntax as well. And you can even add subscribers. And this dashboard snapshot will be sent to a subscriber. So really, there's a nice scheduling interface here as well. You can obviously share. And finally, if you click on refresh here, it will refresh every single window inside, which is also pretty helpful. So you can see it refreshing, and we see, just updated right now. And you can see that you could, if you wanted to as well, go into, if you have the administrative privileges, click on this menu and you can also edit this. And what that means is that you can actually add new things. So you could add a text box, you could add a filter. So this is a filter right here. You could add a visualization, you could do different colors. But the other thing I think that is very useful is that you can learn a lot from using these as well. So if I select one of the visualizations here, this is a nice little graph here that shows the fare amount and the trip distances, you can see there's a linear relationship. But how did that SQL query get generated? Well, pretty easy to figure out, I can just select this and I can look actually at the query itself, which is pretty awesome. Obviously I could also download the CSV, which could be useful. But let's go ahead and look at this query. Now take a look at this, I'm inside of a query editor,
>
> **[3:16](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/using-dashboards?u=76281980&t=196)** you can see at the SQL Query Editor. And we see that it says use catalog samples, select, right here, and we're able to actually look through all of the different SQL queries, and I could tweak it if I wanted to. So this is a great way both to learn when someone in your organization has created a dashboard for you, but also for you to edit this if you have the privileges to do it. So the dashboarding interface is one of the more powerful interfaces of Databricks, and make sure you take advantage of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Data Science]] (1)
> **Env Vars:** sql (4), csv (1)
> **UI Navigation:** click on (2), toggle (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Handling failures](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=9)** - [Instructor] Debugging failed job runs can be tricky. We see here in this workflow's interface that I have a little bit of an issue in that this job is actually failing here, and we could actually look at the last run and say, "Uh-oh. What's going on? Why is it failing?" And I even get the message and I could dive into it in more detail, but that doesn't really handle the case of what do I do next? And can I actually solve this programmatically? So if we go back to the job itself, I go to Task. You can see here that it's pretty simple, this notebook, but maybe I could add some logic here to handle that condition. And so what I could do is I could add another task, and this task could be if else, and this if else task could be failure. And so maybe I need to clean something up or do some other thing here. What we can say is run if dependencies basically all failed. So if this job fails, let's go ahead and do some logic here that cleans things up, and even I could add a notification as well. This notification could go to email, to Teams, PagerDuty, [[Slack]], et cetera, and says, "Look, this thing actually failed. I ran a cleanup job, but you should know about it." So having the ability to customize your tasks here is a great way to handle those failures, and you can handle both a success condition if we create this task, and then if we want to add another task here as well,
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/handling-failures?u=76281980&t=103)** we could add a success, right? And so you're able to actually dive into this jobs-based interface here and really navigate on a failure, do a cleanup on a success, maybe load it into the database, and then send a notification that says everything was loaded successfully. So there are lots of different ways to handle problems. If you are able to programmatically solve it, that's often the best solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configuring retries](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=8)** - [Instructor] Here we see that we have a job that is in a failed state, right? We've had some problems with it. And one of the things you can do though, is enable a retry here. So you can do max retries, you can do retry delay, you can also do triggering retries. You can also have monitoring for retries. So let's go ahead and take a look here at this job. Go into the task and then look where we could set this. So notice here, it says, number of retry attempts and minimal interval between attempts if this task fails. So if we go ahead and we select this, we can say, hey, I want you to try this at least three times, because there could be network errors or there could be some other issue. And we want to actually wait 15 minutes between each retry here. So if we go ahead and we say Confirm, now we can see that 15 minute delay and at most three times a total attempt. So this is a great way to handle problems where there could really be some issues in terms of resources like an API where you don't control it. And instead of blowing up your entire data pipeline, you could at least try to do these retries here and get this working. Now, the other thing to mention here as well is that if you're very confident and you have something that needs to run quite a bit, you could even go all the way down to unlimited, which is another option. And maybe this is like a web scraping tool that you want to scrape, for example, every hour.
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/configuring-retries?u=76281980&t=104)** And you know that web scraping is very tedious. And also if there's a timeout as well, you want this to actually keep going over and over and over again. So there are some scenarios as well, depending on the kind of job you create, if it's basically a non-deterministic job by itself, like web scraping, then you may want to do unlimited retries, but potentially wait for a long period in between those retries and even retry on a timeout.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Data Access with Unity Catalog

[↑ Back to Table of Contents](#table-of-contents)

#### [Unified data access with Unity Catalog](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=5)** - [Instructor] Databricks [[Unity]] Catalog provides centralized access control, auditing, lineage, and data discovery capabilities across not just one, but even multiple Databricks workspaces. Let's take a look here first at this Unity Catalog where we have [[User Management]] and metastore inside, and it's connecting to more than one Databricks workspace. Inside, there is clusters, there are [[SQL]] warehouses, and the idea here is that you can define once, but secure everywhere. And this allows for comprehensive [[Data Governance]]. Also, you can have a standards compliant security model, and this is based on ANSI SQL, and you can allow administrators to grant permissions in their existing data lake using a familiar syntax. This means catalogs, [[Databases]], tables, and views. It also has built in auditing and lineage, so you can capture user level audit logs and data discovery. So the data discovery lets you tag things, document data assets, and you can even look at system tables as well, so you can look at things like audit logs, billable usage, et cetera. Next up, we have the Unity Catalog object model. You can see that the metastore is the top level container for [[Metadata]]. It exposes a three level namespace, so catalog.schema.table organizes the data. And then below, in the data catalog here, we have the first layer of object hierarchy,
>
> **[1:39](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unified-data-access-with-unity-catalog?u=76281980&t=99)** and it's used to organize data assets. And then the schema is going to be known as a database, and the schemas are the second layer of the object hierarchy and contains tables and views. Of course, you can create these tables and views in SQL, you can create them with the catalog explorer, and then finally, in the tables of views and volumes at the lowest level, this is where you would have governance for nontabular data. So in a nutshell here, the five key characteristics of the Unity Catalog are the centralized metadata store, which would capture technical metadata, the unified access controls, which allow you to set fine-grain access controls using SQL, the [[Data Lineage]] tracking, right, data governance, auto capture, and end-to-end lineage at query time, the discovery and organization, so searchable catalog for easy discovery of data, and also using browser and [[Representational State Transfer (REST)|REST]] APIs. And then finally, it's multi-cloud friendly. So you can even do this across multi-cloud vendors, and you can federate for unified access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (4), [[SQL]] (4), [[Metadata]] (3), [[Data Governance]] (2), [[User Management]] (1)
> **Env Vars:** sql (4), ansi (1), rest (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Catalogs vs. metastores](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=8)** - [Narrator] Databricks [[Unity]] Catalog has many different components, but let's take a look at first the catalog itself versus the metastore. There are some key differences. First, the metastore is the top level logical container for [[Metadata]]. It stores information about data assets like tables or models, and it also defines the namespace hierarchy of catalog. And the catalog would then proceed to schema, which would then proceed to table. So the hierarchy is catalog-schema-table, and it also handles access control policies and auditing. Likewise, the catalog is the first-level organizational unit within a metastore, and it's used to group related data assets like tables, views, et cetera. And the access controls can be defined at the catalog level. So in a nutshell, what are the key differences? There can be multiple catalogs within one metastore, but only one metastore per Databricks deployment. The metastore contains all the metadata for catalogs and data assets, and the catalogs help group data objects based on apps, teams, and more. So in a nutshell, a metastore is the overarching metadata store and root [[Data Governance]] layer in Unity Catalog, and catalogs provide the first-level organization
>
> **[1:43](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/catalogs-vs-metastores?u=76281980&t=103)** and boundaries within the metastore metadata.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (4), [[Unity]] (2), [[Data Governance]] (1)
> **Speakers:** - [narrator] (1)

#### [Unity Catalog quick start with Python](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=5)** - [Instructor] Let's take a look at how to do a [[Unity]] catalog quick start in pure [[Python (Programming Language)|Python]] here. The key overview is that we're going to look at the workspace setup. So you'd want to have a workspace that has the Unity Catalog meta store. It's got to also support the runtime, like 11.3 or higher. And then you're going to do a catalog creation, a schema creation, table management, security best practice, and then [[Metadata]] discovery. So one of the things you can do when you look at a notebook like this is actually go over to the table of contents. This is a great way to get a nice, clean way to break down, you know, a notebook that may contain many cells, and it could be hard to read, is we can actually look at it from the table of contents. So here we go, here's some documentation. And then we have the actual code, which is going to say, create a catalog, then create a managed schema, which is the database, create a managed table, and then use the Unity catalog in the [[Pandas (Software)|Pandas]] API on Spark, right? So those are the key steps here. So let's go ahead and take a look here. So we see this is step one, and then when we go to create a catalog here, it's going to create a catalog, select show, et cetera. Let's take a look at how this code works. So pretty simple. Is a spark [[SQL]] statement that says Create catalog if it doesn't exist. And that's a quick start catalog. Next up, you would go ahead and set it, and then you would show all the catalogs. Finally, the last thing you would want to do is
>
> **[1:38](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=98)** you'd want to say, let's go ahead and grant, create, and use catalog permissions. And then you can actually go ahead and verify that that works. Now again, we can just toggle right down to the next step here, which is, oh, okay, let's create and manage schemas. And in this step here, this would be create a schema. If it doesn't exist, show the schemas, extend it, and then again, do the permissions. Next step would be to manage a table. And this case would be, again, use the schema that we already created earlier. Show the database, create a managed delta table in the catalog. Go ahead and set the permissions. Go ahead and show the tables, and then insert a few rows into the table. Finally, show the table, and then show all available tables. Now finally, this is the part that probably most Python programmers are interested in is, okay, let's go ahead and use it. And what's nice is that there's a Pandas API available for Spark. And so you would import [[PySpark]].pandas as ps. So instead of doing import pandas as pd, you would say import pyspark.pandas as ps. And it's going to work in a roughly similar way as Pandas, which a lot of Python programmers are used to. You would just show the table, write the table to Unity catalog, again grant the permissions, and then show the table. So pretty straightforward, and you can actually find this quick start in the official documentation for Databricks. It's a great way to get a feel for this,
>
> **[3:13](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/unity-catalog-quick-start-with-python?u=76281980&t=193)** and also to be able to toggle back and forth with the key steps inside of the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Unity]] (4), [[Python (Programming Language)|Python]] (3), [[PySpark]] (2), [[Metadata]] (1)
> **CLI Commands:** python (3), find (1)
> **Env Vars:** api (2), sql (1)
> **UI Navigation:** toggle (2), go to (1)
> **Definitions:** is a  (2)
> **Versions:** 11.3 (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** setup (1)

#### [Applying object security](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=9)** - [Narrator] Applying object security best practices with the [[Unity]] Catalog system involves several characteristics. First, we have leveraging access control lists, or ACLs. ACLs allow granting or restricting access to specific users and groups on securable objects like tables, views, and more. They also provide fine-grain control so you can secure access to sensitive data, you can go beyond this by also having fine-grain access as well to objects. So you can have database schema level permissions, you can secure access to individual tables, pipelines, workflows, but only based on what is necessary for that task. And you can even control reading, writing, and permission selectively. Finally, it all wraps up into least privilege. The idea with least privilege is, only provide the minimum required access, don't give someone abilities that they don't need because this creates a security breach. For example, if someone only needs to look at a dashboard, you would want to give them access to read the dashboard. You don't use broad groups like All Users unless there's a hard requirement. You would also revoke access once the purpose is served rather than letting it accumulate, and you also review policies on a regular basis for relevance. So to wrap this up, the key benefits with this best practice technique is, you would enhance the [[Data Security]] and compliance,
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/applying-object-security?u=76281980&t=104)** you'd avoid unnecessary broad access by leveraging precise ACLs, and you're going to control a blast radius if credentials or policies are compromised because you've only given people the privileges they are necessary to have. If you have admin privileges, you could have a huge security problem because everybody has access to everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (1), [[Data Security]] (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### [Best practices for catalogs](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=8)** - [Instructor] Here are some best practices for catalogs with the Databricks [[Unity]] Catalog system. First up, you want to create a separate catalog for loose coupling. This would mean that you would want to separate the business functions, the teams, and you'd have a dedicated catalog for each. You also would manage the access as well. You could have compliance at that catalog level. You could also change in one catalog and not have to worry about the impact in another. Finally, in the last two, we see map to domains and customized security. If we go to map to domains, this means aligning the catalog boundaries with business domains or applications. A good example of this would be a catalog for [[Marketing Analytics]], maybe a catalog for HR, maybe a catalog for monitoring the observability of a data pipeline. And then finally, you would want to have the security policy and governance as well as a component of that catalog, so you're able to really drill down into a particular domain and understand exactly what's happening. Finally, with the security, if you look at the security policy per catalog, this means creating access control groups and roles specific to a catalog. Also, [[Fine Tuning]] the read write, and you'd want to grant those independently. So in many scenarios, you'd only want to read, for example, to a dashboard. You don't want to give people right privileges to that. And then also customizing the settings like resource quotas, and then even scrumming the rules
>
> **[1:44](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-catalogs?u=76281980&t=104)** after a certain period of time. So the fine-grain policies per catalog are a best practice that are going to allow you to have the best of security while also getting the best of functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (1), [[Marketing Analytics]] (1), [[Fine Tuning]] (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for connections](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=9)** - [Instructor] The best practices for connections are first to limit the visibility. What this means is you want to limit the visibility of external connections, so avoid exposing connection secrets to all users. You also want to grant access only to specific users, groups, and roles, and then set lease privileges, like read-only permissions. In many scenarios, there isn't a need for everybody to have access to all of your external connections. Let's look at the next thing, which is limiting access in general. So provide access only to the required users and groups, and this means you could add granular access control lists or ACLs on a connection, and you could ensure only intended teams or jobs can use those external resources, and then you could revoke them if the team or group doesn't need those resources again. So it's important to actually be aware of what is actually happening in a team and make sure that you're not giving them access to external resources they don't need. In terms of tagging connections effectively for discovery, you can use tags like source categories or data classifications, and you can also allow an ability to discover connections by use case and then tag consistently for organizational-wide visibility. So some of the benefits here would include enhanced security by restricting exposure, preventing unintended data access or leaks,
>
> **[1:42](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-connections?u=76281980&t=102)** and also looking at a way of easing the discovery and management of external connections.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for business units](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=8)** - [Instructor] Here we have Databricks [[Unity]] Catalog Business Unit Best Practices. First up, you want to provide a dedicated sandbox for each of your business units. You want to allocate an independent development environment as well. You also want to allow safe experimentation with data in ML, and you want to prevent interference between different workflows. So the dedicated sandbox is ideal so that you don't mix different security parameters between two organizations. There could be really restricted data and one business unit, and there could be more of a open-ended, research-based environment in another, and it's going to be much better to provide sandboxes for each of those business units. Centralize shareable data into production catalogs. So in this scenario, you would want reusable datasets, like customer and product data. Also, the ability to manage the access centrally rather than duplicate things, because the size of the data could quickly become a huge cost center, and you also want a single source of truth to remain consistent as well. So that's really the centralized sharing model, so that you're not having multiple different versions of a key table that is slightly different in one department than another. Now, if we get into discoverability, this is another one that's important,
>
> **[1:41](https://www.linkedin.com/learning/databricks-certified-data-engineer-associate-cert-prep/best-practices-for-business-units?u=76281980&t=101)** is you need a meaningful naming convention like glossaries. You also want to do [[Metadata]] best practices as well. So that includes logically structuring catalogs and folders and assets, making a meaningful hierarchy, and then also have collaboration across different units. Finally, with federated queries, this would be via the Lakehouse architecture. You would unify the data access across silos. You would govern securely via contracts and permissions, and then you'd want to enrich the local data with shared self-service access. So some of the key benefits include supporting autonomy for units via domains, increasing productivity through reuse, and then also maintaining consistency with collaborative governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (1), [[Metadata]] (1)
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