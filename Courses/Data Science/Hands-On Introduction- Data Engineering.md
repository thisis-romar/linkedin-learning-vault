---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: hands-on-introduction-data-engineering
url: "https://www.linkedin.com/learning/hands-on-introduction-data-engineering"
duration_minutes: 93
duration: 1h 33m
level: Beginner
updated: 6/18/2024
learners: 140701
skills:
  - Data Engineering
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF2-XpACOT2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900511583?e=2147483647&amp;v=beta&amp;t=CFp3O8T0c6lKkjCy01p6HDN8xloYCURODyde3QOYlNw"
linkedin_topic: Data Science
learning_paths:
  - '[Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)'
  - '[Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)'
  - '[Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)'
  - '[Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)'
  - '[Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)'
prev_courses:
  - '[Data Engineering Foundations](Data%20Engineering%20Foundations.md)'
  - '[Data Engineering Foundations](Data%20Engineering%20Foundations.md)'
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
  - null
  - '[Data Engineering Foundations](Data%20Engineering%20Foundations.md)'
next_courses:
  - '[Hands-On Introduction- Scala](Hands-On%20Introduction-%20Scala.md)'
  - '[Rust Essential Training](Rust%20Essential%20Training.md)'
  - '[Learning Apache Airflow](Learning%20Apache%20Airflow.md)'
  - '[Hands-On Advanced Python- Data Engineering Basics](Hands-On%20Advanced%20Python-%20Data%20Engineering%20Basics.md)'
  - '[Introduction to Data Warehouses](Introduction%20to%20Data%20Warehouses.md)'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":2,"total":6,"prev":"Data Engineering Foundations","next":"Hands-On Introduction- Scala"},{"path":"Develop Your Rust Skills for Data Engineering","position":2,"total":6,"prev":"Data Engineering Foundations","next":"Rust Essential Training"},{"path":"Data Engineering Foundations Professional Certificate by Astronomer","position":3,"total":6,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":"Learning Apache Airflow"},{"path":"Data Engineering Hands-On Practice","position":1,"total":7,"prev":null,"next":"Hands-On Advanced Python- Data Engineering Basics"},{"path":"Explore a Career in Data Engineering","position":2,"total":7,"prev":"Data Engineering Foundations","next":"Introduction to Data Warehouses"}]'
path_count: 5
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/database-management
  - topic/cloud-computing
  - skill/data-engineering
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Hands-On%20Introduction-%20Data%20Engineering.md)

![Hands-On Introduction: Data Engineering](https://media.licdn.com/dms/image/v2/D4E0DAQF2-XpACOT2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900511583?e=2147483647&amp;v=beta&amp;t=CFp3O8T0c6lKkjCy01p6HDN8xloYCURODyde3QOYlNw)

# Hands-On Introduction: Data Engineering

> Suggested prerequisites Know basic Python data types, control structures, functions, and classes. Have a good enough understanding of SQL to write queries to extract, transform, and load data in Apache Airflow pipelines. Have some knowledge of Bash script or Unix for basic Airflow installation and administration. Be familiar with text editors. Know some of the basic principles behind cloud computi

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering) | 1h 33m | Beginner | 141K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Hands-on data engineering](#hands-on-data-engineering)
  - [Background knowledge](#background-knowledge)
  - [The history of data in the enterprise](#the-history-of-data-in-the-enterprise)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Getting Your Bearings**](#1-getting-your-bearings) (4 videos)
  - [Data engineering and data pipelines](#data-engineering-and-data-pipelines)
  - [Orchestration: In the modern sense](#orchestration-in-the-modern-sense)
  - [Extract, transform, load (ETL)](#extract-transform-load-etl)
  - [Tasks, DAGs, and dependencies](#tasks-dags-and-dependencies)
- [**2. Airflow Introduction**](#2-airflow-introduction) (6 videos)
  - [Introduction to Airflow](#introduction-to-airflow)
  - [Installing Airflow](#installing-airflow)
  - [Running the Airflow webserver and scheduler](#running-the-airflow-webserver-and-scheduler)
  - [Adjusting Airflow configuration settings](#adjusting-airflow-configuration-settings)
  - [Build a 1 Task DAG](#build-a-1-task-dag)
  - [Build a 2 Task DAG](#build-a-2-task-dag)
- [**3. Basic ETL in Airflow**](#3-basic-etl-in-airflow) (11 videos)
  - [ETL in Airflow](#etl-in-airflow)
  - [A real-world data engineering task](#a-real-world-data-engineering-task)
  - [Extracting data manually](#extracting-data-manually)
  - [Extracting data with Airflow](#extracting-data-with-airflow)
  - [Transforming data manually](#transforming-data-manually)
  - [Transforming data with Airflow](#transforming-data-with-airflow)
  - [Loading data manually](#loading-data-manually)
  - [Loading data with Airflow](#loading-data-with-airflow)
  - [Building an ETL DAG with Airflow](#building-an-etl-dag-with-airflow)
  - [Challenge: Review ETL questions](#challenge-review-etl-questions)
  - [Solution: Solutions to ETL questions](#solution-solutions-to-etl-questions)
- [**Conclusion**](#conclusion) (1 videos)
  - [The future of data engineering](#the-future-of-data-engineering)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hands-on data engineering](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=0)** - Have you ever struggled to integrate different datasets, or have you faced challenges in processing large volumes of data? If so, this hands-on [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) course is right for you. You'll learn the skills to build and extend [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), deploy a best in class open-source tool, and effectively apply the ETL framework. Hi, I'm Vinoo Ganesh, and I've spent my career building mission-critical data [products](../../Skills/Software%20Development/Microsoft%20Products.md) for the healthcare, defense, and financial services industries. I've personally seen the challenges with operationalizing data and have directly applied the principles taught in this course. If you're ready to solve the most pressing data challenges at your organization, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** etl (1)
> **Speakers:** - have (1)

#### [Background knowledge](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=0)** - [Narrator] Welcome to the wonderful world of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). A data engineer is a modern enterprise Swiss army knife. They are versatile technologists who have a knack for automation. It is one of the fastest growing professions of the last five years, and data engineers are considered enterprise drivers of digital innovation. That being said, before you begin on your data engineering journey, there's a bit of background that will help optimize your journey. First, basic programming skills, especially in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and [SQL](../../Skills/Data%20Science/SQL.md). Airflow, the predominant technology that we use in this course, is written in Python, so it's crucial to have a good understanding of the Python programming language. You should know basic data types, control structures, functions, and classes in Python. Similarly, data is usually stored in [Databases](../../Skills/Software%20Development/Databases.md). Therefore, you should have a good understanding of SQL to write queries to extract, transform, and load data in your airflow pipelines. Second, some familiarity with bash script or Unix will be helpful for basic airflow installation and administration. In this class, we'll use some basic Unix commands and utilities to navigate around the file system. We'll also do some work in some text editors as well. [Cloud Computing](../../Topics/Cloud%20Computing.md). It may be helpful to know some of the principles behind scaling and cloud computing. The cloud has become one of the primary environments that data engineers operate in, and having a strong foundation
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=92)** will unquestionably be beneficial. This background should be enough to kickstart the data engineering journey. In this class, we'll also cover some of the terminology and frameworks in the data engineer ecosystem. If you have all this background or are ready to do some minor brushing up along the way, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** python (4)
> **Env Vars:** sql (2)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [narrator] (1)

#### [The history of data in the enterprise](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=0)** - Before we talk about how to become a data engineer, let's talk about how we got here. You've probably heard phrases like the world has been flooded with data in the past. But let's be concrete about this. By 2025, global data company Statista projects that global data creation will grow to 180 zettabytes. For context, a zettabyte is a thousand exabytes, an exabyte is a thousand petabytes, a petabyte is a thousand terabytes, and a terabyte is a thousand gigabytes. That's a lot of data. This proliferation of data has provided a rich resource for businesses looking to gain insights, optimize operations, and improve customer experiences. However, it can be cumbersome and difficult to consume this data effectively. Seeing this companies deployed their software engineers against this problem. Let's be clear, though, the idea of engineers focused on data is not a new concept. Enterprises have long relied on data to gain insights into their operations, optimized processes, and drive decision making and software engineers were at the forefront of this innovation. The challenge came when these engineers realized the unique aspects of dealing with modern data, both from a scale and volume perspective. They quickly established best practices for handling this data and distributed these best practices. These engineers became the first data engineers.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=95)** Despite their work, though, many organizations are only beginning their data journey. A recent survey conducted by NewVantage Partners found that 97% of participating organizations are investing in data initiatives, but just 19.3% indicate that they've established a data focused culture. That means there's still a lot of work to be done using data efficiently and effectively. The adoption of modern data platforms, such as [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) and data cloud warehouses, has made it easier to analyze, manage, and access large amounts of data across the organization. This has led to an increase in [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md) across different business functions with data being used to drive decisions in areas such as finance, marketing, and operations. This increase in data volume has also led to a new iteration of enterprise [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) processes. Decisions are now backed by concrete data that has been analyzed through BI tools and data analysts. That data in turn has been sourced from systems, cleaned, loaded, and mined for value. The modern enterprise is heavily reliant on data to drive informed decision making. As this trend continues, the volume and types of data sourced will continue to increase. Enterprises must ensure that their workforce has the right skillset to thrive in this environment and this represents your opportunity as a data engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (1), [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2)
> **Versions:** 19.3 (1)
> **Speakers:** - before (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This course uses the [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) feature to bring a live hands-on and coding experience to the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) skillset. GitHub Codespaces allows you to author code and live deploy that code onto a running VM. In Codespaces, you are free to follow along or try any of the exercises in this video series without the risk of breaking your local setup. Accompanying this series of videos is a corresponding GitHub repository. That repository contains the most up-to-date segments of code, and for the follow along portions the relevant before and after setup. You can provision a GitHub codespace off of one of the branches of the repository. This video series provisions the starting state of the codespace off of the video's begin branch. We'll talk a little bit about branch naming convention shortly. [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning's use of GitHub Codespaces relies on exercises that are broken down on a per branch basis, with before and after states. In the accompanying GitHub repository you'll find a number of branches. The main branch corresponds to the main line of the repo and won't be used much in the exercise portion of this course. Instead, you'll find branches with the following convention, chapter-video. For example, a branch that corresponds to the exercise covered in chapter two video three, would be listed as 02-03.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=95)** In some situations the videos will have before and end states. In these situations, the branch will be suffixed either with a b for beginning, or an e for end. For example, a branch that corresponds to the beginning state of chapter two video five, would be named 02-05b. And a branch that corresponds to the end state would be named 02-05e. Using this methodology, you should be able to start with any of the b suffixed branches, follow the steps in the video, and arrive in the exact same state as a corresponding e suffixed branch. To create a codespace, you can select the Open code space button right from your course homepage. This will open up the Codespace's configuration landing page for the course. To create the codespace, first mouse over the dropdown caret of the green Create codespace on main button, and change the option to configure and create codespace if it's not already selected. From there, press the green Configure and create codespace button. This will bring up the next screen here, you can select from the branch dropdown the branch you wish to create a codespace off of. Once everything is properly selected, you can press Create codespace. That will start the process of setting up your codespace. This course includes the installation
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=189)** and configuration of [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) as part of the teaching material. So for many of the exercises in chapter three you will need to manually install and configure Airflow separately. For ease of use, I have provided a utility script that will take care of the installation and configuration process for you. Codespaces offers a powerful and interactive way to follow along and participate. I'd highly encourage you to take advantage of this feature and follow along yourself. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1)
> **Tools:** github (6)
> **Prerequisites:** configure (3), setup (2), install (1)
> **CLI Commands:** find (2), apache (1)
> **UI Navigation:** dropdown (2), select the (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Your Bearings

[↑ Back to Table of Contents](#table-of-contents)

#### [Data engineering and data pipelines](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=0)** - Welcome to the wonderful world of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). You might be here because you've heard the phrase data engineering in the workplace, or you may have heard that it's one of the fastest growing jobs in the technology sector. Either way, now is a great time to be getting into the data engineering space. Let's start with what data engineering actually is. Here's our mostly academic definition. Data engineering is the process of designing, building and maintaining the infrastructure necessary to collect, store, process, and analyze data. It involves developing and implementing software, tools and frameworks to enable the acquisition, transformation, storage and retrieval of data. All of that is true, but in practice, data engineers serve as the backbone of the analytical and data-driven components of the modern enterprise. They have a complex and deep understanding of the technical, operational, and increasingly frequently the business context of the modern enterprise, meaning, they understand why the business needs what it needs, and how to build it. The modern data engineers are experts at operationalizing data. They have the ability to manage data through its journey from usable to operationally critical. They understand both on-prem and cloud deployment models and have detailed knowledge about how to handle scale problems. They're armed with a deep toolkit
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=94)** of tools, services, skills, and technologies that enable them to accelerate their business impact. At their core though, data engineers are experts at automation. They have a unique ability to take an ill-defined, data-oriented task, manually complete it and then build the automation required to remove the need to perform that task manually again. One of the primary tools in the data engineers toolkit is the data pipeline. A data pipeline is a series of interconnected systems and processes that enables the flow of data from its source to its destination in an optimal and usable way. The term data pipeline is not actually a technical term as it can encompass a different number of methodologies and ideas, a few of which we'll discuss in this series. Broadly though, modern [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) are responsible for ingesting data from some source system, transforming and cleaning that data and storing that data in a persistent medium. The goal of most data pipelines is to ensure that the stored data is in a state that makes it straightforward to analyze. Weld is data pipelines can unlock new data-driven insights, fuel data-driven transformations and improve overall business efficiency. The journey to data engineering starts with an understanding of the principles that make up the data engineers problem solving mentality
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=188)** and that's where we begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (6), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - welcome (1)

#### [Orchestration: In the modern sense](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=0)** - Let's talk about orchestration. The operating environment of the modern enterprise is fairly complex. People and technology work together to drive business outcomes and speed and efficiency is top of mind. These working models can become more and more complex and ensuring that the right set of steps occur in the right order can be difficult. Furthermore as the amount of work increases and organizations set their goals higher, the more work that can be automated in a fixed and scheduled way, the better. The [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) workflow is rooted in automation. The best data engineers are able to take complex workflows and distill them into actionable and repeatable tasks. Orchestration is the process of coordinating the various stages and components of a data pipeline to ensure that data is processed efficiently and accurately. In the context of data engineering, orchestration involves designing and implementing a repeatable system that automates the flow of data through the pipeline. Orchestration isn't a new concept, but it has taken on a new meaning given the rise of the data engineer. Historically there have been several approaches to the data pipeline orchestration ecosystem. One of the earliest approaches was to use custom scripts and manual processes to move data
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=94)** from one stage of the pipeline to the next. However this approach was error-prone and time-consuming as it required significant manual effort to coordinate and monitor the pipeline. As data volumes grew more sophisticated, orchestration solutions emerged. These were focused on monitoring, tracking, scaling, and visualization. One of the earliest of these was [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md), an open-source platform that allowed users to create and manage [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) as workflows. Airflow provides a simple interface for defining the various stages of a pipeline and supports a wide range of data sources and destination. Airflow has become popular in the data community and has been widely adopted by companies such as Airbnb, Lyft, and Netflix. Another popular orchestration platform is Apache NiFi which was initially developed by the US NSA. NiFi provides a graphical interface for designing data pipelines and includes a wide range of built-in processors for [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md), transformation, and storage. NiFi is particular particularly well-suited to handling large volumes of streaming data and is currently used by organizations such as the US DOD and the National Oceanic and Atmospheric Administration. Finally, there are a number of open-source tools such as Prefect, Dagster,
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=186)** and Airbyte that are continuing to develop in this space. These days however, the technology band orchestration has become much more cloud-based. Solutions such as Amazon Web Service Step Functions and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Composer have emerged as popular orchestration platforms. These solutions allow users to create and manage data pipelines in the cloud and offer a range of features such as serverless execution, automatic scaling, and high availability. One thing worth mentioning is that some of these cloud vendors have also deployed managed versions of open source tools. For example, Amazon has developed MWAA which is their hosted Airflow offering. In a world where automation is king, orchestration plays a critical role in the data pipeline design and management. As data volumes and complexity continue to grow, it is likely we will see continued innovation in the field of data pipeline orchestration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (3), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** apache (2), composer (1)
> **Env Vars:** nsa (1), dod (1), mwaa (1)
> **Speakers:** - let (1)

#### [Extract, transform, load (ETL)](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=0)** - The [extract, transform, load](../../Skills/Data%20Science/Extract%2C%20Transform%2C%20Load%20(ETL).md) pattern is a common approach to building pipelines in the field of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). The ETL process involves extracting data from a source system, transforming it into a format that's suitable for analysis, and loading it into a target system such as a data warehouse or database. Let's look at this visually. In the ETL process, data is extracted into a staging area. That data is then transformed into a format suited for future analysis. Finally, that data is loaded into a persistent storage medium which may be a database, data warehouse, or something else. While not a new concept, ETL is pivotal to the modern data engineer. Historically, ETL has been used in a variety of industries such as finance, healthcare, and retail. One of the earliest examples of ETL can be traced back to the 1960s when banks started to use mainframe computers to process financial transactions. At the time, banks were still using slow and error-prone paper-based systems. With the help of mainframe computers, banks were able to automate the process of processing financial transactions, which led to significant improvements in speed and accuracy. In the 1980s and 1990s, the use of ETL became more widespread as organizations began to realize the value of [Data-driven Decision Making](../../Skills/Data%20Science/Data-driven%20Decision%20Making.md). As data volumes grew,
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=92)** ETL solutions became more sophisticated with the introduction of tools such as iBM InfoSphere and Informatica PowerCenter. Today, ETL continues to be a widely used approach to building [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). One of the key advantages of ETL is that it allows organizations to integrate data from a variety of sources such as [Databases](../../Skills/Software%20Development/Databases.md), files, and web services. ETL also allows organizations to transform data into a format that's suitable for analysis which can include tasks such as [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md), data enrichment, and data aggregation. In recent years, however, there's a shift towards more modern approaches to data pipeline design such as stream processing and [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). Furthermore, there are new operating models such as ELT that have recently emerged. In the ELT operating model, data is first loaded into a warehousing or data cloud system before it's transformed into business-usable data. However, ETL remains a critical component of many data pipelines, particularly in cases where data needs to be integrated from multiple sources and transformed for analysis. As mentioned, there are many ETL tools available today both open source and proprietary which can be used to build data pipelines. Some of the popular ETL tools include Apache NiFi, [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md), Talend,
>
> **[3:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=185)** and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) [SQL Server Integration Services](../Database%20Management/SQL%20Server%20Integration%20Services.md). For these reasons, I perceive the real power of ETL to be in the structure of thinking. The majority of data engineering problems can be broken down into a set of ETL steps. Learning to apply the ETL thought process to your data engineering challenges is an important and powerful skill. As we go hands on, we'll see the skill in practice and how it can be put to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (3), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (3), [Extract, transform, load](../../Skills/Data%20Science/Extract%2C%20Transform%2C%20Load%20(ETL).md) (1), [Data-driven Decision Making](../../Skills/Data%20Science/Data-driven%20Decision%20Making.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** etl (16), elt (2), sql (1)
> **Analogies:** such as (7)
> **CLI Commands:** apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** ibm (1)
> **Speakers:** - the (1)

#### [Tasks, DAGs, and dependencies](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=0)** - Now that we understand the history of orchestration in ETL, let's talk about some of the terms that are directly applicable to our [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) process, tasks, DAGs, and dependencies. These are key concepts that are used to describe the structure and operation of [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) workflows. A task in a data pipeline represents a discreet unit of work that needs to be performed, such as reading data from a file, applying a transformation, or writing data to a database. Tasks can be simple or complex, and can be composed of multiple sub-tasks. A DAG, directed acyclic graph, is the data structure that represents the dependencies between tasks in a pipeline. In a DAG, each task is represented as a node. And the edges between nodes indicate the order in which tasks need to be executed. DAGs ensure that tasks are executed in the correct order that the output of one task is available as the input of the next task in the pipeline. Dependencies refer to the relationships between tasks in a DAG. A task may have one or more dependencies, meaning it relies on successful completion of one or more other tasks before it can start. By analyzing the dependencies in a DAG, it is possible to determine the optimal order in which the tasks should be executed, in order to minimize the time and resources required
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=95)** to complete the entire set of tasks. In summary tasks, DAGs, and dependencies are fundamental concepts in the field of data engineering, and are used to design, manage, and operate complex data processing workflows. These concepts have a rich history in the field of computer science, and have evolved over time to support the growing demand for [Data-driven Decision Making](../../Skills/Data%20Science/Data-driven%20Decision%20Making.md) in a wide range of industries. With this information, we have everything we need to begin our hands-on journey into data engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (3), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Data-driven Decision Making](../../Skills/Data%20Science/Data-driven%20Decision%20Making.md) (1)
> **Env Vars:** dag (4), etl (1)
> **CLI Commands:** node (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)


### 2. Airflow Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=0)** - [Instructor] [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) is an open source project originally developed in 2014 by Airbnb. It is a platform to programmatically author, schedule, and monitor workflows. It is a tool for building and managing complex [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), making it easier to orchestrate, automate, and monitor [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) tasks. With Airflow, you can create workflows that include a variety of tasks, such as extracting data from sources, transforming it, and loading it into target systems. It also supports scheduling and monitoring of these workflows, making it easier to handle data processing at scale. Airflow allows developers and data engineers to create, manage, and monitor complex workflows made up of multiple tasks called DAGs in a repeatable, monitored, and orchestrated way. Airflow is written and developed in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), making it an easily sensible and flexible solution. In fact, the power of Airflow is rooted largely in its extensibility. Airflow exposes operators, which allow for the seamless and straightforward integration of a variety of tools, [Databases](../../Skills/Software%20Development/Databases.md), and systems. These operators are largely open source and allow DAG authors to integrate with external systems quickly and efficiently. Given this flexibility, Airflow has emerged as one of the most heavily used tools in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) ecosystem. As such, it is the focus of this series of videos. Airflow has a series of fundamental principles
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=94)** that guide its development, usage, and operations. First, Airflow is dynamic. Pipelines are configured as code, and thus can be edited, created, and removed dynamically. All Airflow DAGs exist as Python files on the file system, as you'll soon see. Second, Airflow is extensible. It's easy to define new operators, executors, and even extend the Airflow library itself, such that you as a developer can use Airflow at the level of abstraction that you see fit. Third, Airflow is designed to be elegant. The pipelines are lean and explicit. And they use Jinja powered parameters that allows you as a DAG author to access the internal state of Airflow during a DAG execution, as well as execution-specific information. Finally, Airflow is scalable. Airflow leverages async workers that are able to be spun up and spun down dynamically. DAG executions in Airflow are able to be triggered and sent to any number of workers. This allows you to, as Airflow says, "scale to infinity." While we talk about Airflow, I do want to remind you that there are a number of similar orchestration tools in the industry, including Dagster, Airbyte, Prefect, and others. Most of these principles are true for them as well, and may be cross-applied seamlessly. Airflow is a powerful addition to the data engineer's toolkit that enables automation in a visible and extensible way. As we dive into this topic,
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=190)** I'd encourage you to reflect on where Airflow's features and functionalities can be helpful in your life. Have you had data engineering challenges involving extending a workflow where limitations of the system prevented you from accomplishing your goal? Have you had to create the same integrations that you made at a previous company simply due to lack of library sharing? Have you struggled with data issues at scale due to lack of available resources? If you've had these challenges before, you'll pretty quickly see how Airflow can add tremendous value to your organization and operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** dag (4)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** python (2), apache (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Installing Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=0)** - [Narrator] Let's kick off our hands-on work by installing [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md). Airflow can be set up in a number of ways, but for our purposes, we're going to install it using pip. It is important to note that Airflow is a constantly updating piece of software with hundreds of contributors. As new versions of Airflow are released, installation instructions, functionality, and the appearance of the Airflow UI may change. Before you install Airflow in a production environment, it is critical to review the instructions on Airflow's own website. I want to make it clear that the instructions that you see correspond to the specific version of Airflow that I am installing. Installation instructions can be different between versions of Airflow and it's critical that you make sure to follow the right set of instructions for your particular version of Airflow. Similarly, Airflow's UI can and will change in different versions of the product. If your UI doesn't look exactly like mine does, don't worry. It probably has to do with your Airflow version. Before we begin the installation process, here's the rough set of steps involved in installing Airflow. First, we'll run the pip install of Airflow. Then we'll initialize the Airflow database. After that, we'll add a user to the Airflow database. We will then configure Airflow to work in [Codespaces](../../Skills/Software%20Development/Codespaces.md), and then disable CSRF.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=95)** We'll be deploying Airflow in codespaces for this video. [GitHub](../../Skills/Software%20Development/GitHub.md) Codespaces has its own security constraints and will need to perform some workarounds to get things working properly in codespaces. Sometimes you may see a bad request error message in codespaces, or you may need to manually edit the URL. When we start up these services, I'll discuss how to solve some of these issues. This video will walk through a manual install of Airflow. However, for subsequent exercises, you should feel free to use the provided utility scripts. You can see a description of the utility scripts here. Now, let's look at the actual command necessary to install Airflow. To get started working with Apache Airflow, we need to install it using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s PIP package Installer. Here, you can see the generic command for installing Airflow. The first thing to notice is that I manually specify the variable, Airflow home. This sets the location of my Airflow install. Next, I specify the Airflow version in my pip install command. Finally, it's best practice when installing Airflow with pip to also include a constraints file. Normally, libraries keep their dependencies open while applications pin their dependencies. However, with Airflow, users can manage their dependencies on their own, which allows for more flexibility in upgrading libraries on a case by case basis. While this flexibility sounds positive,
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=189)** it can result in broken installations. Including the constraints file ensures the set of libraries you install with Airflow all work together. Now let's switch over to codespaces and perform the installation. I'm going to increase the size of my terminal window here. Let's first check which version of Python we have for our constraints file. It looks like we're running with Python 310, so we'll want to make sure we pick the constraints file for Python 310. Let's now craft the install command that we want to use. We know that we want our Airflow home to be the home directory of our Airflow project. We're going to choose to install Airflow version 2.6.3. Finally, we're going to include the constraints file that corresponds again to Python 310. Let's hit Enter. The Airflow installation process can take some time.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=257)** After the installation command completes, you're able to use the Airflow command right from the command line. You can see the full set of functions available by just typing the Airflow keyword into the shell. Airflow uses a relational database as its backend to store configuration data. By default, this is a [SQL](../../Skills/Data%20Science/SQL.md) light database, which will be stored in your home directory's Airflow/Airflow.db. To initialize this database, we run the Airflow DB init command In production, we should use a more robust database than the SQL Light database. Oftentimes, this can be a standalone database or an AWS RDS instance. Next, we need to create a user who can log into the Airflow UI. We can do this by running a command in the terminal to create a user with admin permissions named Admin. Once this is done, we'll see a message confirming that the user has been created. You'll notice that Airflow has been installed in the /workspaces/hands-on-introduction-data-engineering-4395021/
>
> **[5:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=334)** Airflow-Directory, or just as directory, right here. There's a variety of configuration files present, including an Airflow.cfg file, which is the main Airflow configuration file and the web server, _config.py file, which is the main web server, configuration file. The final step in our installation process is to open the web server config.py file and look for a setting named WTF_CSRF_enabled. Right now, it's set to true. We're going to set this to false. Changing this value to false disables CSRF, which is necessary to operate Airflow in our GitHub Codespaces developer environment. Save this file and you've officially installed Airflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** pip (5), python (5), make (3), apache (2), aws (1)
> **Prerequisites:** install (11), set up (1), configure (1)
> **Env Vars:** csrf (2), sql (2), url (1), pip (1), aws (1)
> **Tools:** github (2), terminal (2), command line (1)
> **File Paths:** airflow.cfg (1), _config.py (1), config.py (1)
> **Versions:** version 2 (1), 6.3 (1)
> **Definitions:** is a  (2)

#### [Running the Airflow webserver and scheduler](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=0)** - [Instructor] Airflow is both a library and an application, and in this context, we'll be setting up the application side of Airflow. We'll cover the two key components of Airflow, the web server, and the scheduler, and their respective roles in the Airflow ecosystem. We'll also discuss how to start and stop them. The Airflow Webserver is a web-based UI that is commonly used in production to provide an overview of all DAGs and their execution flow. It offers several ways to manage administrative settings, connections, variables, and other components of Airflow through a web interface. The web server is also capable of responding to HTTP requests and it can be configured with different viewer and editor modes. It is worth noting that the web server is not a required component of the Airflow ecosystem and can be managed entirely from the command line, although this may not be the most user-friendly option. The Airflow Scheduler is a process that continually monitors all tasks and DAGs in Airflow. It starts subprocesses that keep track of the heartbeat of all DAGs and checks whether any active tasks can be triggered. Although it's possible to run the web server without the scheduler, it's not recommended. Now let's switch to [Codespaces](../../Skills/Software%20Development/Codespaces.md). To run the web server, you can execute the following command, "Airflow webserver." You can run it as a background process
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=95)** using the dash D flag.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=104)** At this point, we can actually open the Airflow UI and see the running UI. Before I do that though, I want to mention something important. As part of our Airflow installation process, we disabled CSRF. If you open webserver_config.py, you'll see that WTF_CSRF_ENABLED equals false. This disables CSRF, which is critical if we want to use Airflow in Codespaces. However, this doesn't fix all of our issues as we'll soon see. In Codespaces, you can click on the ports tab and open up the line that says "Port 8080." You can click on this globe icon to open the Airflow UI. Once the UI has loaded, you'll see the login page. You will also see the next parameter in the URL is incorrect and we'll need to manually fix it. Let's first enter the username and password that we set up in the previous step, the username being "Admin" and the password being "Password." Now hit sign in. Codespaces abstract support into the URL so you don't need to specify it, but Airflow isn't aware of that, so we need to remove the port 8080 in the URL for Airflow to open properly. When you run a DAG for the first time, you may need to make the exact same change in Airflow. Once you've logged into Airflow,
>
> **[3:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=199)** you'll see a number of warnings. The first one is Airflow alerting us the scheduler does not appear to be running. Let's talk about that. Let's switch back to Codespaces and run the Airflow DAGs list command. This command prints out all of the DAGs that exist in Airflow. You'll notice there are a number of example DAGs that are shown when running the command, but that don't appear in the Airflow UI. That's because the scheduler is responsible for keeping track of the DAGs in Airflow and we haven't run it yet, so let's fix that. To run the scheduler, you can type in "Airflow scheduler," and again, use the dash D flag to run it as a background process. Congratulations, you now should have a fully-running Airflow web server and scheduler. Let's switch back to Airflow and refresh this page to ensure that we can now see the example DAGs. It looks like we can. Let's switch back to Codespaces. To stop both the web server and scheduler, you'll need to kill their respective processes. But first, let's figure out how to find their processes. There are two ways to look up the process ID of the web server and scheduler. First, upon startup, both the web server and scheduler write process ID files. Let's open these files and have a quick look. Here's the scheduler process ID or PID file, and here's the web server process ID or PID file.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=295)** The number corresponds to the process ID that is running on the box. The second way is we can look up and filter through all processes running on the box. When the web server and scheduler start, they actually spin up multiple processes, so we have to make sure we stop the parent process. Here's a quick command you can use to look up the process ID of the web server, and here's a quick command you can use to look up the process ID of the scheduler. We can see at least for the web server that 7587 matches the process ID in the PID file. And for the scheduler, 9158 matches the process ID output by this command. Once you have the process ID, you can kill the process by typing "Kill," in this case, "7587." That will stop the web server process. We can also type "Kill 9158," and that will stop the scheduler process. If we go back to the Airflow UI and refresh the page, we can see that Airflow is now down. For good measure, let's rerun our ps -ef commands to make sure the process are actually stopped on the box. Great, it seems like both of them have successfully stopped. For convenience, I've also included this stop_airflow.sh script, which does pretty much the same thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (6)
> **Env Vars:** url (3), pid (3), csrf (2), http (1), wtf_csrf_enabled (1)
> **UI Navigation:** open the (2), click on (2), switch to (1)
> **CLI Commands:** make (3), find (1)
> **File Paths:** webserver_config.py (1), stop_airflow.sh (1)
> **Code Identifiers:** webserver_config (1), stop_airflow (1)
> **Ports:** port 8080 (2)
> **Definitions:** is a  (2)

#### [Adjusting Airflow configuration settings](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=0)** - [Instructor] Airflow's power is in its flexibility to fit your business needs and specifications. Some enterprises have high-throughput needs, some have on-prem versus cloud needs, some have customized executor needs. To handle the wide landscape of business needs, Airflow provides a multitude of configuration options. Let's see how we can adjust these configuration settings to set up Airflow in an optimal way for our environment. Upon installation, Airflow will create an airflow.cfg file that lives in the Airflow installation directory. To see where that directory is, you can run echo AIRFLOW_HOME. Now that we know where Airflow is, we can navigate to the directory and look at some of our settings. Let's first get an overview of the available categories that we can tune. As you can see, Airflow has a number of configuration options broken down by section, including core, database, logging, API, operators, and many, many more. The airflow.cfg file is the primary entry path for all Airflow settings, but beware. Airflow also allows settings to be configured in environment variables. Interestingly enough, environment variables actually take precedence over the settings in this file. For that reason, anytime I'm on a new box, I start by checking if any of the environment variables have been set for Airflow. In this case, it looks like I only have AIRFLOW_HOME set,
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=96)** so I should be good to go. Let's open up the airflow.cfg file. The settings are laid out as key value pairs that look like setting name and setting value. For example, if I look for the dags folder config setting, I can see that Airflow is expecting my DAGs to be in a directory inside of the Airflow install, called dags. To change any of the configuration settings, you simply replace the value with the value that you desire. When we open up Airflow, we see all of the DAGs in the example category listed. While this is great for an introduction to Airflow, we likely don't want these example DAGs in production, so let's turn them off. We can go back to the airflow.cfg file and look for the load-examples setting. As you can see, it's set to True. Let's change the setting to False. To pick the changes up, we're going to restart Airflow. Depending on the setting that you change, a restart isn't always necessary, as there are fixed intervals where Airflow will live reload some settings, but we'll restart it just for good measure. Now that we've killed the processes, let's start it up again. If we go back to the Airflow UI and refresh the page, it may take a while to start up. We will see that our example DAGs are no longer there,
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=191)** and we have a clean, production-ready Airflow instance. We've just successfully changed the Airflow configuration file and updated Airflow. Great work so far.

> [!info]- Semantic Content
>
> **File Paths:** airflow.cfg (4)
> **Env Vars:** airflow_home (2), api (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), install (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Build a 1 Task DAG](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=0)** - [Instructor] Airflow is designed to construct and manage orchestrated directed acyclic graphs, or DAGs. In other words, Airflow provides a way to programmatically arrange repeatable, monitored, and interdependent operations in a specific order. Our first task is to build and run a simple DAG in Airflow. This particular DAG will consist of a single node that create this file, .txt, with the contents, Hello, [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. In Airflow DAGs are represented as [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) scripts located within a specific directory. To create a new DAG, simply create a new Python script, and place it in this directory. As long as the script is properly formatted and error-free, Airflow scheduler will automatically pick it up during the next heartbeat. Let's switch back to our Code Spaces environment and first check where Airflow is expecting DAGs to be. To do that, you can run the following command. This command reads the Airflow.cfg file and looks for the value of the DAGs folder setting. We can see that our DAGs folder is set to the DAGs directory inside the Airflow install. This code space comes with an empty file called one_task_dag.py. This file will define a basic [OneNote](../../Skills/Cloud%20Computing/OneNote.md) DAG that uses a bash command to create a file with the text, Hello, LinkedIn Learning. Let's open it up and start writing our DAG. I have pre-written this DAG in my environment,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=95)** but we'll copy and paste it in here. I'll go through line by line to explain what each of them actually do. We'll start with importing the date time package, which we'll use to specify a start date. All DAGs then require importing the DAG class from the Airflow package. Additionally, since we're using a bash command, we'll also import the bash operator. Operators are libraries that facilitate the interface with external tools and systems. All DAGs accept a set of default arguments, such as the owner, email, retry behavior on failure, and alert options. For this example, we'll set some default options just to demonstrate how they look. Next, we'll create the actual DAG object. The first object, the DAG ID, is the name of the DAG. In this case, one task DAG. Then, we'll provide a number of named arguments including a description, schedule interval, which is the frequency at which the DAG should run, and we'll pass in the default arguments that we previously defined. Finally, we'll create a bash operator, called Task One, to run the command to create the file. The task ID, One Task, is the name of the task within the DAG. As mentioned previously, this DAG will have only one task. We specify the actual bash command to run in the bash command argument.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=188)** In this case, the bash command will echo Hello LinkedIn Learning to a file called createthisfile.txt. To validate the syntax of the file, you can run the regular Python command against the file. I use the - W ignore flag to make sure that we ignore any unnecessary warnings that pop up when checking this DAG for syntax validity. It seems like this completed with no errors. Therefore, our DAG has the correct syntax. Let's open our Airflow UI. We can now see one_task_dag appears here in the UI. To run the DAG, press the play button on the right side of the DAG. Once the DAGs status changes to light green, the DAG is running. When the DAG's status changes to dark green, the DAG is run successfully. If any of the tasks in a DAG fail, they'll be marked red. It looks as though our DAG status is now dark green, implying that it completed successfully. It's always best practice to also make sure to check the contents after DAG runs to make sure our output is as expected. Let's switch back to Code Spaces and cat out the file that we expected to create. We successfully see the text, Hello, LinkedIn Learning, meaning our operation has completed successfully. Congratulations. We've just successfully created
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=280)** and run a one task DAG in Airflow. As you can see, all Airflow DAGs are specified in code, which makes the authoring process simple, flexible, and straightforward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [OneNote](../../Skills/Cloud%20Computing/OneNote.md) (1)
> **Env Vars:** dag (25)
> **CLI Commands:** python (3), make (3), node (1), cat (1)
> **Tools:** bash (7)
> **File Paths:** airflow.cfg (1), one_task_dag.py (1), createthisfile.txt (1)
> **Code Identifiers:** one_task_dag (2)
> **Best Practices:** best practice (1), make sure to (1)
> **Definitions:** in other words (1)

#### [Build a 2 Task DAG](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=0)** - [Instructor] The power of the Directed Acyclic Graph, or DAG, is that it allows authors to set explicit task dependencies. Meaning there's a strict requirement that a directed edge between task one and task two means that task one must be executed before task two. Thus far, we've only created one [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file with one DAG and with one task. As you can imagine however, we can create one Python file with one DAG with multiple tasks. A two-task DAG in airflow is a simple DAG with two tasks. Where one task depends on the successful completion of another task. In this case, we will build a two-task DAG where T1 depends on the successful completion of T0. Let's switch back to our code spaces and navigate into the airflow DAGS directory. As a reminder, you can run this command to find the location of the DAGs directory. We can see that we already have a file named two_task_dag.py already created. Let's edit that file. I have pre-written this DAG in a separate environment and will first copy and past it here before going line by line to explain what we see. First, add in our necessary import statements and import date time, the Bash operator, and the DAG class itself. We'll set up our default ARGs and create a new DAG with the DAG ID Two Task DAG.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=96)** Once again, we'll set our schedule interval to none. Add a brief description and pass in our default ARGs. In this example, T0 and T1 are two Bash operator tasks that print some text to the console T1 depends on T0 to successfully complete, so the double greater than sign operator is used to set the dependency between the two tasks. When this DAG is run, T0 will first run and print first airflow task to the console and once T0 completes successfully, T1 will sleep for five seconds and then print second airflow task to the console. To check whether the syntax of our DAG is correct, you can use the regular Python command against the file itself. I always use the -w ignore flag to tell Python to ignore warnings. Given that we have no output, we know our DAG is successful from a syntax checking perspective. Let's switch to the airflow UI. In the airflow UI, you can see that two_task_dag successfully appears. We can click on this DAG and introspect information about this DAG. By clicking on the graph view, you can see the explicit task dependencies. To run this DAG, we can press the play button in the upper right hand corner and press Trigger DAG. Once a DAG is triggered, you'll get a message above saying Triggered two no dag and its status will change from green for the first task,
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=192)** dark green for the first task, and light green for the second task, until it's completion. As you can see, this DAG has completed successfully. To check out the logs, you can press one of the tasks and press the log button. We can see that in our first task, we have the output First Airflow task. If I go back to our graph view and press the second task and press the log view, we can see that after our first task successfully ran, we have the output Second Airflow task. We can now tell that our DAG has been successfully run. As you can likely infer, a two-task DAG is just the beginning. Dags can get larger and much more complex with the ability to represent more complex business transformations and operations all from this level of abstraction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **Env Vars:** dag (22), dags (1)
> **CLI Commands:** python (4), find (1)
> **Code Identifiers:** two_task_dag (2)
> **Tools:** bash (2)
> **UI Navigation:** switch to (1), click on (1)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** two_task_dag.py (1)


### 3. Basic ETL in Airflow

[↑ Back to Table of Contents](#table-of-contents)

#### [ETL in Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=0)** - [Presenter] Today we're going to be talking about the ETL paradigm and how it relates to Airflow. ETL stands for extract, transform, and load, and is used extensively in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) world. The ETL process involves extracting data from a source system, transforming that data, and then loading it into a final system. This allows data practitioners to clearly define a workflow for working with data in the enterprise. In the past, organizations relied on discreet and difficult to manage jobs across vendors, platforms, and data centers to prepare data for analysis, but with ETL, we can streamline the process and make it more manageable. One tool we'll be using in this course is Airflow. Airflow is a powerful data engineering tool that is flexible and easy to use. One of the great things about Airflow is the community offerings that have been built around it. Enterprises who are just beginning their journey in Airflow have immediate access to a rich corpus of both built-in and external libraries that are readily available. Airflow has pre-built operators that allow DAG authors to extract, transform, and load data in configurable, stable, and secure ways. DAG authors can easily find, import, and leverage these operators to immediately integrate into their source systems. In this chapter, we'll focus on applying the ETL principles to the Airflow DAG authorship process.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=94)** However, it's important to note that the data engineering ecosystem is a fast moving ecosystem, and many fundamentals change over time as the industry continues to develop. One of the new entrants is the ELT principle, which involves loading data into a storage system and then transforming the data. Luckily, Airflow also has a number of operators that can help with the ELT principle too. For now, let's stick with ETL. In Airflow, it's best to minimize the amount of work in each task. That makes it easier to manage and debug pipelines. As such, in the ETL paradigm, we create a separate task for the extract functionality, a separate task for the transform functionality, and a separate task for the load functionality. Virtually every data engineering task can be broken down into some variation of these three steps. With that in mind, let's get started and solve our first real-world data engineering challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (5)
> **Env Vars:** etl (7), dag (3), elt (2)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [presenter] (1)

#### [A real-world data engineering task](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=0)** - [Instructor] As a data engineer, you are the Swiss Army knife of the modern enterprise. You have the ability to simplify complex data-centric requirements into discreet and manageable tasks. In addition to technical knowledge, you also have a deep understanding of the business context of your organization. Your work often involves taking vague requests and turning them into repeatable workflows. For example, analysts might ask for pipelines to perform [Healthcare Analytics](../../Skills/Software%20Development/Healthcare%20Analytics.md) or understand population movement. Each of these tasks may differ in size, depth, or urgency, but they all share one common element. They're able to be distilled into the ETL model. To see this in practice, let's look at a real world [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) example. One day a business manager asks you, as a data engineer, the following. "Every day, I download a file from the internet containing the list of top level domains. I ask my team to give me a list of only the generic top level domains and save it to my computer. I want to analyze trends in a time-series way, but I can't easily do that in my setup. Can you help me solve this problem?" At first, it may seem challenging to see how such a request can fit into the ETL model, but let's break it down. First, we know there must be a data set of top level domains somewhere. Once we find this we'll want to extract it from the source system. Second, it sounds like there's going to be some work required
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=95)** to prepare this data set for analysis over time. That's the transform part of our operation. Finally, for our business manager to perform analysis, the data must reside somewhere the team can perform analysis. We'll then load this data into a storage system. As you can see, we've successfully distilled this requirement into the extract, transform, and load paradigm. Many business challenges will look similar to this one. Over time, distilling these requirements becomes more and more straightforward. Now that we've understood the business requirements and how they fit into the ETL paradigm we can get started building our DAG.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Healthcare Analytics](../../Skills/Software%20Development/Healthcare%20Analytics.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1)
> **Env Vars:** etl (3), dag (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Extracting data manually](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=0)** - [Instructor] As a data engineer, the first step in any ETL process is to extract data from a source system. This involves pulling data from an external system to a predetermined staging area. The staging area can be local, a database, a data warehouse, or any number of other storage mediums. Let's briefly return to our business request. Our user mentioned that every day, they download a file from the internet. They must be saving this file somewhere. That process is the extract operation that they undergo every day. Given that the extract operation relies on the existence of a staging area, it is crucial to ensure that the selected staging area is properly set up for the extract operation. For example, if you're extracting a large amount of data from a source system, make sure that the available storage in your staging area is sufficient to accommodate the data you'll be extracting. Additionally, ensure that you have the necessary permissions to read the data from the source system, and write the data to the directory where the file will be saved. To illustrate this process, we'll be manually extracting data from a source system and saving it to disc, just like our business user does. Specifically, we'll extract the data set from [datahub.io](https://datahub.io) that includes a list of the top level domain names, their type, and their sponsoring organization. In this video, our goal is to extract this data manually, meaning we won't be using any orchestration tools just yet. We'll run through this whole process
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=92)** as though it's a one-off request. First, let's open up [Codespaces](../../Skills/Software%20Development/Codespaces.md). Navigate to the directory where we'll do the manual work. In this case, it's lab slash manual. To extract the data, we're going to use the W get command. This command allows us to download files over HTTP or HTTPS. I'm going to rename this file for organization purposes to manual extract data.csv. We're going to do this in one step using W gets dash O flag. Great, it looks like our command completed successfully, but it's always wise to double check and make sure. Let's open up the file on the left-hand side of our page in the lab slash manual directory. We can see that manualextractdata.CSV exists. Let's double click it. It looks like things have worked as expected. Congratulations, you've successfully extracted data manually and stored it locally. Now imagine if you had to do this every morning. How would you design it? Would you write a new file per day? How would you monitor to delete old data and old files? Let's say the W get fails one day. How would you detect this? These are just a few of the challenges associated with manually pulling this data. Luckily, and as we'll soon see, there are good ways of automating this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Env Vars:** etl (1), http (1), https (1), csv (1)
> **Analogies:** for example (1), just like (1), imagine (1)
> **File Paths:** data.csv (1), manualextractdata.csv (1)
> **CLI Commands:** make (2)
> **URLs:** [datahub.io](https://datahub.io) (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)

#### [Extracting data with Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=0)** - [Instructor] The process of automating manual work in Airflow can often be as easy as wrapping the commands you'd use to manually accomplish the same task. We've used the Wget command to extract data. Let's see if we can automate just this process. As an aside, the wealth of resources available in the Airflow ecosystem make it tempting to immediately jump into using external libraries to build tasks, but it's best practice to start with automating what works. In this video, we'll use the Wget command to extract data from DataHub. Let's first navigate to the Airflow DAGs directory and open up the blank extract_dag.py file. This file will be the place where we create a one task extract pipeline. Let's begin the process of designing our DAG. I'll copy and paste the completed DAG here first, and we'll run through it line by line. First, we import datetime, the BashOperator, and the DAG object from Airflow. We'll then create a DAG with the DAG ID extract_dag and some other basic parameters. We'll define our extract task as a bash operator and use the Wget command to extract data, write the data to a file called airflow-extract-data.csv. This file will live in the lab/orchestrated directory. Now that our DAG is done, let's open the Airflow UI. We can see that our DAG extract_dag is present in the UI.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=98)** Click on this DAG and click the Graph button. You'll see this DAG consists of one task named extract_task. Now run the DAG. To run this DAG, press the play button in the upper right hand corner of Airflow and click Trigger DAG. Once a DAG is run successfully, you'll see a dark green box. Let's verify our DAG accomplished its intended task. We can switch back to code spaces and I locate the file that we just wrote. We can see our data looks as expected and we can safely conclude that our extract task was successful. As you can see, creating an extract task in Airflow is simple and straightforward. As I previously mentioned, there are a multitude of operators both built-in and custom that will allow you to extract data from a source system as well.

> [!info]- Semantic Content
>
> **Env Vars:** dag (14)
> **CLI Commands:** wget (3), make (1)
> **Code Identifiers:** extract_dag (3), extract_task (1)
> **UI Navigation:** navigate to (1), open the (1), click on (1)
> **File Paths:** extract_dag.py (1), airflow-extract-data.csv (1)
> **Tools:** bash (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Transforming data manually](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=0)** - [Instructor] The process of transforming data is critical in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) lifecycle. Transforming is also known as the preparation or cleaning process, depending on the organization. In spite of the differing terminology, the transformation step involves manipulating the data such that it is useful to those who will eventually consume it from the end system. To understand where transformation comes into play, it is important to look at our real Business Ask. Our business manager has requested assistance in understanding the growth of generic top-level domains over time. There are actually two different requests here. First, they would like to understand only the generic top-level domains. Second, they would like to ensure they can perform this analysis over time. Keeping these two in mind, let's see how we may be able to help. Depending on the type, scale, and location of the data, data engineers employ a handful of tools to manipulate data. Many use Spark, [SQL](../../Skills/Data%20Science/SQL.md), or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), all of which come with a number of libraries to accelerate this process. A leading library in this space is called [pandas](../../Skills/Software%20Development/Pandas%20(Software).md). Pandas is a powerful open-source [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) library built on top of Python. It provides easy-to-use and efficient [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), such as dataframes and series that allow users to analyze, clean, and transform data. As such, it is a longtime favorite of data engineers. Today, we'll use pandas to clean, manipulate, and transform the dataset that we previously extracted.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=97)** Let's switch to [Codespaces](../../Skills/Software%20Development/Codespaces.md) and navigate to our manual directory. Pandas is already installed in our Python environment, but in the event that it isn't, it can be installed using pip. Let's open up Python and use pandas to investigate our dataset. Let's set up some imports that we're going to use throughout the course of our investigation and let's read in our file into a pandas dataframe. We can do a quick sanity check and type DF to see our dataset. Now recall that we want to filter to generic top-level domain names. Let's see what the values in the type column are currently. You can see there are a number of results, including generic, country code, sponsored, infrastructure, generic restricted, and test. We want to remove anything that's not of type generic per our business manager's request. Finally, we note that the manager wants to analyze the domains over time and we can see that our current dataset schema doesn't include a date component. Let's grab today's date since we've pulled the data today and append it to a new column named date. You can ignore the setting with copy warning for now. Finally, let's save our transform dataset as a CSV. We'll call this dataset manually-transform-data.csv. As a sanity check, let's make sure our dataset looks as expected. We can navigate to the lab, manual directory, and open the manual-transform-data.csv dataset.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=191)** Nice work. We've successfully manually transformed the dataset. Now, imagine you what to come in every day and do this by hand. It would be tedious and error-prone. Luckily, we can use tools like Airflow to automate this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **CLI Commands:** python (4), pip (1), make (1)
> **UI Navigation:** navigate to (2), switch to (1), open the (1)
> **Definitions:** is a  (2), known as (1), is called (1)
> **File Paths:** manually-transform-data.csv (1), manual-transform-data.csv (1)
> **Env Vars:** sql (1), csv (1)
> **Analogies:** such as (1), imagine (1)
> **Warnings:** note that (1), warning (1)

#### [Transforming data with Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=0)** - [Instructor] In Airflow, the repetitive tasks associated with [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) can be automated. Today we will create a DAG with a single transform task. This task will read in the CSV that was written by the previous Extract dag, transform that data, and write that data back to disk. We've discussed the power of Airflow operators, and we'll expand our toolkit to include the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) operator. The Python operator is an Airflow operator that makes executing Python code straightforward and easy. We will use this operator to execute our [PANDAS](../../Skills/Software%20Development/Pandas%20(Software).md)-based transformation work. Let's first open up our dag. We can see the empty transform dag.py. I will first show the completed DAG, and then discuss it line by line. We'll begin our transformation DAG by importing some necessary Python libraries. We'll import daytime PANDAS, our Python operator, and DAG from Airflow. Then we create a new DAG named Transform dag. Now we'll see the power of our Python operator. To perform transformation on top of the data, let's create a function called Transform Data that reads in the extracted data, applies our transformations on it, and writes out the transform data set. In the transform data function, we will first get today's date, which we'll use later in the function, then read in our CSV. From there, we'll filter the data frame down
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=94)** to only the rows with the type being generic, and then append a new column named date with a nicely formatted version of today's date. Finally, we'll write out our new CSV. To use this function in the Python operator, we simply pass it to the Python callable named Argument. Now, when this task runs it will execute the code in the transform data function. Let's switch back to the Airflow UI. We can see that transform DAG has appeared here. Let's click on it. To run the dag, press the play button in the upper right hand corner of Airflow and select Trigger dag. While the task is running, it will be outlined in a light green box, and when it is run successfully, it will be outlined in a dark green box. As always, let's verify that our DAG accomplished its intended task with a quick eyeball check. Switch back to Code Spaces and let's open up our lab file. We can see the Airflow transform data that CSV file exists. Let's double click it. As we can tell, it looks like our Airflow transform data CSV file looks correct. As we saw in the case of the extract operation, creating a transform task in Airflow is simple and straightforward. There are numerous operators that can help accelerate this process as well. The transformation part of the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) workflows tend to be the bulk of where processing occurs. Ensuring this step is managed
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=187)** and monitored seamlessly is key to any successful data engineering project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **Env Vars:** dag (7), csv (5), pandas (2)
> **CLI Commands:** python (8)
> **File Paths:** dag.py (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Loading data manually](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=0)** - The last step of any ETL process is to load data into the end system. This step involves taking the transform data and uploading it to a destination where it will be used for further analysis. In practice, the destination is usually a database, data warehouse, lakehouse or a similar persistent storage system. The load step comes largely from a time when data sets were blessed for global use and published to specified shared resources. The blessed data sets were then treated as the root data sets for all investigation and analysis workloads. As an aside these days, data may be further transformed to address specific use cases even after it's loaded. So interestingly enough, in some enterprises the load step can no longer be considered the last step of the modern data pipeline. Regardless, we'll continue to follow our ETL frameworks which hold true for the majority of enterprises. In this video, we'll discuss the load component of the ETL process, and as always, we'll build it manually first. When assessing requirements, we always start with the business request. Per the request, our user is currently saving data locally to their computer. This is generally a bad practice for a number of reasons, namely security and reusability. Furthermore, data saved locally is only usable by the person using that machine. And should something go wrong, it may be lost forever. As a data engineer when investigating solutions,
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=96)** it is best to also suggest or propose improvements to the current operating model. In this case, using a persistent storage technology is a significant improvement over files saved locally. So rather than scripting something that would save the files locally let's help the business out and instead load the files into a persistent storage medium. Let's switch back to [Codespaces](../../Skills/Software%20Development/Codespaces.md) and navigate to our manual work directory. As part of the Bootstrap process you'll find a file named manual-load-db. This database has been created with a single table named top_level_domains. Type Command + Shift + P and type SQLite. Then select the open database button and open manual-load-db. If you look at the bottom left-hand side of your window, you'll see the SQLite Explorer pane. Let's click and expand it. We can open manual-load-db and see the table underneath it. That table's name is top_level_domains. If you expand the table, you can see the four columns underneath it. Domain, Type, SponsoringOrganization, and Date. The schema of the table matches our transform data perfectly. Now we want to upload our transform data into this database. And let's start by connecting to the database. Since we're using SQLite3, our manual import step is actually going to be fairly easy. The sqlite3 command-line utility
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=189)** allows us to use the .import command to import a CSV. First, we'll set the SQLite mode to CSV. To run the import we use the .import command with the file name as well as the table name that we want to import to. Keep in mind though, the first row of our transform file is the header which we don't want to ingest. We'll use the --skip 1 parameter to skip that first row. Once the import has completed, let's perform a quick sanity check to make sure our import worked as expected. Open the SQLite Explorer tab and click the play button next to the table name. Taking a look at the rows we can see that our data has been loaded successfully. Now, let's say you have to run this task manually every day. You need to log onto the server, ensure the extract and transform steps completed successfully, load the data and perform a sanity check. It would be fairly cumbersome and time intensive. Luckily, we can use Airflow's powerful automation capabilities to automate this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Env Vars:** etl (3), csv (2)
> **CLI Commands:** sqlite3 (2), find (1), make (1)
> **UI Navigation:** navigate to (1), select the (1), open the (1)
> **Code Identifiers:** top_level_domains (2)
> **Definitions:** is a  (1)
> **Best Practices:** bad practice (1)
> **Warnings:** keep in mind (1)

#### [Loading data with Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=0)** - [Instructor] The last step of the ETL process is to load the data into a storage system for broader consumption. While this seems to be the most straightforward part, it's also the most important. This is a step that allows our business users to perform their analysis. Without proper data loading, all of our extract, and transform operations will be done for nothing. Similar to the extract and transform cases, Airflow provides a number of out-of-the-box operators to assist it in the data loading process. In fact, this is one of the areas where the Airflow community has created a very comprehensive offering. These operators allow for integration with [Snowflake](../../Skills/Data%20Science/Snowflake.md), Databricks, BigQuery, Redshift, [MySQL](../../Skills/Software%20Development/MySQL.md), SQLite, and many others. In this video, we'll orchestrate the loading process. We'll use an on-disk SQLite database as our end storage system. As mentioned previously, this isn't the most optimal, or persistent storage system, but for our purpose, we're focusing on building the loading step rather than the storage technology. Let's navigate to the Airflow DAGS directory. We can see that we have a file named load_dag.py ready for our use. I'll open it from the side panel. As always, I'll first show the completed DAG, and then discuss it line by line. We'll start with our imports and we'll import date time, the Bash Operator and the DAG class. We're going to use the Bash Operator, because the SQLite 3 command line utility makes loading CSV files straightforward and easy.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=96)** We could instead use the Airflow SQLite Operator, but that would involve having to generate insert statements on a per row basis, which could get cumbersome. Instead, we'll use the Bash Operator capability to simply call SQLite Command. As a quick aside, it may seem as though we're using the Bash Operator a fair amount. That is because as a data engineer, we aim to use the best tool for the job given the environment. In our [Codespaces](../../Skills/Software%20Development/Codespaces.md) environment, basic Bash commands drive many of our workflows. For that reason, we use Bash Operator frequently. In production settings, you'll frequently see many other kinds of operators. Let's get back to our DAG. We give it the DAG ID, load_dag and create a Bash Operator using the same .import command that we've seen prior. We've configured this job to read data from airflow-transform-data.csv, and to import data to airflow-load-db.db. Now, let's switch to the Airflow UI. As you know, the scheduler will dynamically pick up new DAGs, which will be displayed in the Airflow UI. We can see that load_dag has appeared. Let's click on the DAG and let's run it. To run the DAG, you can press the play button in the upper right-hand corner of Airflow, and select Trigger DAG. While the DAG is running, it'll be outlined in a light green box, and once it's run successfully, it'll be outlined in a dark green box. It looks like our DAG has just completed successfully. Now, let's switch back to Codespaces. As always, let's verify that our DAG accomplished
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=192)** it's intended task. Type CMD+Shift+P and type SQLite. Then select Open Database. Now, open the airflow-load-db.db database. Once you've selected that, look at the bottom left of your window, and you'll see the SQLite Explorer pane. Click it to open it and select the database. Once you've done that, select the table below it and press the play button next to the table name. Taking a look at the rows, we can see that our data has been successfully loaded into SQLite. Congratulations. We have finished, run and tested the load_dag, meaning we've now completed the discrete parts of the E, the T, and the L Workflow. But we're not done. Now, we need to find a way to string all of these together, and ensure that each of them happen sequentially.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** dag (10), etl (1), dags (1), csv (1), cmd (1)
> **Tools:** bash (7), command line (1)
> **UI Navigation:** select the (2), navigate to (1), switch to (1), click on (1), open the (1)
> **Code Identifiers:** load_dag (4)
> **File Paths:** load_dag.py (1), airflow-transform-data.csv (1)
> **CLI Commands:** mysql (1), find (1)
> **Definitions:** is a  (1)

#### [Building an ETL DAG with Airflow](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=0)** - [Instructor] We've assembled the building blocks of our ETL pipeline through our Extract DAG, transform DAG, and Load DAG. However, each of the DAGs that we built operates independently from one another. In a concrete ETL workflow, there must be a specific ordering in these tasks. Specifically, each step in the ETL process must build upon the successful completion of the previous step. Given this insight, it should become apparent that the ETL process itself is a DAG. The Extract step is the first task in our DAG. Once it is successfully completed and the data is extracted, the Transform task should begin. Once the Transform task is successfully completed, the Load task should begin. Once the Load task successfully finishes, our ETL process will be complete. Let's quickly review our business request one last time. Our goal was to automate the process of extracting a list of top-level domains, transforming that list to keep only the generic top-level domains, as well as introducing a date component, and finally, loading the data into a storage system where it can be further analyzed. If we can tie each of our individual DAGs together into a larger ETL DAG, we will have achieved our goal. Let's switch back to [Codespaces](../../Skills/Software%20Development/Codespaces.md). First, let's navigate to the Airflow DAGs directory. We can see a file called basic_etl_dag.py exists. This is where we'll author our basic ETL pipeline.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=98)** I'll open it on the sidebar here. I'll first show the completed DAG, and then discuss it line by line. This DAG will include all of the components of the Extract, Transform, and Load tasks, so, we'll need to import all of the libraries and operators that we used across all of these tasks. We'll then create a new DAG named basic_etl_dag, and nest the Extract, Transform, and Load tasks underneath it. In order to chain tasks into the dependency structure where one task depends on the other, we'll use what looks like the right bit shift operator. This looks like two greater-than signs back to back. For example, to represent the ordering, [Extract, Transform, Load](../../Skills/Data%20Science/Extract%2C%20Transform%2C%20Load%20(ETL).md), I can write, extract_task >> transform_task >> load_task. I can also use the left bit shift operator to express this similarly. In either of these, the task on the less-than side depends on whatever task is on the greater-than side. That means the subsequent task will only start when the previous one finishes. In this case, the relationship is linear, but you can imagine some of the more complex ways we can string tasks together using this methodology. Now that we've completed our DAG, let's switch back to the Airflow UI. As you know, the scheduler will dynamically pick up new DAGs, which will be displayed in the Airflow UI. We can see that basic_etl_dag has appeared. Let's click on this DAG.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=192)** Let's click on the Graph button. We can see the DAG's visualization in the true directed acyclic graph format underneath the Graph button. Now, let's run the DAG. To run the DAG, click on the Play button in the upper right-hand corner of Airflow, and select Trigger DAG. While the DAG is running, it will be outlined in a light green box, and when it's successfully completed, it will be outlined in a dark green box. This is true for the individual tasks in a DAG, as well. It looks like our DAG has successfully completed. Now, let's switch back to codespaces. As always, let's verify our DAG accomplished its intended task with a quick eyeball check. If we open the lab/end-to-end directory, we can see that the basic-etl-extract-data.csv and basic-etl-transform-data.csv have been created. We can click on them to verify they look correct. Now, let's check our database. Type Control+Shift+P and type in SQLite. Let's open the database titled basic-etl-load-db.db. On the bottom left, you'll see the SQLite Explorer pane. Select the open database, and select the table named top_level_domains. Click the Play button next to the table name to see a visualization of the table. Taking a look at the rows, we can see that our data has successfully been loaded into SQLite. It looks like everything in our basic ETL pipeline
>
> **[4:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=288)** completed successfully. Now, let's think back to a real-world business user request. This basic ETL pipeline can run every day at a fixed time in a monitored way. It persists information to a database that our business user can easily run [SQL](../../Skills/Data%20Science/SQL.md) commands against. Most importantly, the fact that it's automated means it can run automatically, and that we, as data engineers, will only need to get involved if something breaks. Congratulations on running your first basic ETL DAG in Airflow. The power of chained, dependency-based tasks should now be clear. I'd like you to take a moment to think about where this kind of orchestration can be helpful in your organization. Are there repetitive tasks that you'd like to automate in a monitored way? Or even other potential systems that you haven't worked with simply because setting up the integration pipeline was too complex? These are all great use cases and questions to guide us on our [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Extract, transform, load](../../Skills/Data%20Science/Extract%2C%20Transform%2C%20Load%20(ETL).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1)
> **Env Vars:** dag (20), etl (10), sql (1)
> **UI Navigation:** click on (4), open the (2), select the (2), navigate to (1)
> **Code Identifiers:** basic_etl_dag (3), extract_task (1), transform_task (1), load_task (1), top_level_domains (1)
> **File Paths:** basic_etl_dag.py (1), basic-etl-extract-data.csv (1), basic-etl-transform-data.csv (1)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Review ETL questions](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=0)** - [Lecturer] Now that we've run through an example of taking a business user's request, distilling it into the ETL components and building a pipeline and airflow together, I'd like to give you the opportunity to practice building one on your own. Imagine this, your business analyst approaches you with the following request. I'm doing some [Financial Analysis](../../Skills/Data%20Science/Financial%20Analysis.md) on S&P 500 companies and would like to understand the aggregate number of companies in each sector in the S&P 500 on a daily basis. I need it in a SQLite database. Can you help me automate this analysis? For purposes of this problem, we're going to assume that the S&P 500 rebalances daily, meaning new stocks, can enter and exit the listing on a daily basis. Before you get started, here are some pointers. Just as we have done, your final output should be a runnable Airflow DAG written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Don't worry about setting the schedule for now as that's easy to add in once everything is tested. You can access the daily updating listing of S&P 500 companies using the DataHub link provided here. Remember to follow the ETL framework to break down your problem into individual components and tasks. This will make it much easier to know how to break down the various pieces of your overall task. You can use the lab/challenge directory for your work. Create your DAG in a file named challenge_dag.py
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=94)** and name your DAG the same thing. Additionally, make sure you look at the schema of the challenge-load-db.db to format the final version of your transformed data correctly. Let's quickly switch to [Codespaces](../../Skills/Software%20Development/Codespaces.md). To get started on this challenge, you'll want to create a code space off of branch 03-11 as we've done here. From there, make sure to install and configure airflow using either the install_and_run_airflow.sh script or installing it on your own. Finally, this is where we put everything together that we've learned so far in this course. Take a minute to appreciate how much you've learned throughout this process, and most importantly, have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Financial Analysis](../../Skills/Data%20Science/Financial%20Analysis.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Env Vars:** dag (3), etl (2)
> **CLI Commands:** make (3), python (1)
> **File Paths:** challenge_dag.py (1), install_and_run_airflow.sh (1)
> **Code Identifiers:** challenge_dag (1), install_and_run_airflow (1)
> **Best Practices:** remember to (1), make sure to (1)
> **Prerequisites:** install (1), configure (1)
> **UI Navigation:** switch to (1)

#### [Solution: Solutions to ETL questions](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=0)** - [Instructor] Congratulations on completing your first challenge. In this video, we'll review the solution to our [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) challenge. As always, let's start with our business request. It sounds like our user is doing analysis on S&P 500 companies. We know that this data must be pulled from somewhere. That is our extract step. I've highlighted it in blue here. Next, we know that our user wants to understand the aggregate number of companies in each sector. That's our transform step, and it's highlighted in orange here. Finally, we know that our user wants this output in a SQLite database. That's pretty straightforward and has a clear indication of the load step, that is highlighted in green here. Great work. We now know which aspects of the ET&L process correspond to which parts of the business request. Let's switch to [Codespaces](../../Skills/Software%20Development/Codespaces.md). First, we want to make sure we understand what the output of our ETL process will be. We know that our prompt requested that we write the data to a database named challenge-load-db.db, so let's open this up and look at its schema. To open this, you can type Cmd + Shift + P and type in SQLite. From there, select Open Database and open the challenge-load-db database. The [SQL](../../Skills/Data%20Science/SQL.md) Explorer will appear on the bottom left hand corner of your page. Let's open up the database.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=94)** We can see that the table consists of three columns: sector, count, and date. That means that the end state of our transformed dataset must match these columns so we can perform a trivial load operation. Now let's change focus to our extract step. First, let's manually download our data to see how it looks, cd to lab/temp. From there, we can wget the file. It looks like the file is named constituents.csv. Let's open up the file and take a look at it. We can see the file consists of three columns: symbol, name, and sector. This should give us all the information that we need to build our DAG. Let's move back to the airflow dag directory and open up challenge_dag.py. As always, I'm going to copy and paste the DAG here and go line by line to explain what we see. First, we set up our imports. We're going to use a BashOperator for our wget a PythonOperator for transforming the data, and a BashOperator again to load the data into an end system. Let's create our DAG with the name challenge_dag. We won't set a schedule interval for now because we want to make sure this works first. Now let's build our extract_task. The extract_task is a BashOperator that wgets the file and saves it under the lab/challenges directory with the name challenge-extract-dag.csv.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=190)** Let's move on to our transform operation. First, we'll look at the transform_data function. This function sets the date to today and reads in our extracted data. We know that our business user is interested in the aggregate number of companies per sector, so we'll use the [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) groupby function to get this information and use the reset_index function to give the aggregated counts a column header Count. We'll also add in a column named Date that contains today's date as this is data from today. Now we know our transform_data matches the schema of the table we'll eventually load it into. We'll finally then save the transform data to disk as challenge-transform-data.csv. Then we'll use this transform_data function in our transform_task, which itself uses the PythonOperator. We'll then move to the last step, which is the load step. We'll use the BashOperator to take advantage of the SQLite 3 command line utilities import CSV capabilities. The data will be imported into the challenge-load-db.db database in the sp_500_sector_count table. Now let's switch back to the Airflow UI. In the Airflow UI, we can see that our challenge_dag has appeared. Let's click on it and click on the Graph view. The Graph view allows us to visualize our DAG. To run the DAG, press the Play button
>
> **[4:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=282)** in the upper right hand corner of the screen and select Trigger DAG. While each task in the DAG is running, it will be outlined in a light green box. And when it is finished, it will be outlined in a dark green box. It looks like our DAG has completed successfully. Let's switch back to Codespaces. As always, let's verify that our DAG accomplished its intended task with a quick eyeball check. Type Ctrl + Shift + P and type SQLite. Select Open Database and open challenge-load-db. On the bottom left hand corner, you'll see challenge-load-db and the table name sp_500_sector_count listed underneath it. Let's press the Play button on this table. Taking a look at the rows, we can see that our data has been loaded successfully into SQLite, and we've achieved our goal. Every day this runs, we'll have more data appended to the end of our table with a new date. Great work participating in this challenge and pushing the boundaries of your knowledge. I hope you're excited because this is just the beginning. You can expand the skills that you've learned to automate a multitude of different tasks across the entire data engineering ecosystem. So let's go ahead and start building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** dag (9), etl (1), sql (1), csv (1)
> **Code Identifiers:** challenge_dag (3), transform_data (3), extract_task (2), reset_index (1), transform_task (1)
> **CLI Commands:** make (2), wget (2), cd (1)
> **File Paths:** constituents.csv (1), challenge_dag.py (1), challenge-extract-dag.csv (1), challenge-transform-data.csv (1)
> **UI Navigation:** click on (2), switch to (1), open the (1)
> **Definitions:** means that (1), is a  (1)
> **Tools:** command line (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The future of data engineering](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=0)** - The field of [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) has been rapidly evolving over the past few years and is likely to continue to do so in the future. As more and more companies rely on data to drive their decision making processes, the importance of data engineering will only increase. There are a number of industry trends that are just beginning are all already well underway. Understanding the direction and trajectory of these trends can better equip both you and your organization for the new developments. With the proliferation of data, there's an increased focus in the topics of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and security. [Data Management](../../Skills/Software%20Development/Data%20Management.md), access control, [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md), and operational readiness are all key topics and areas of responsibility for the modern data engineer. Cloud deployment and adoption. As many organizations continue their [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) processes, cloud-based offerings technologies and services have led the pack through their cost-effective, flexible, and easily scalable solutions. As such, more data engineers are adopting and working with cloud-native offerings. [Real-Time](../../Skills/Database%20Management/Real-Time.md) data. The ETL paradigm that we discussed was developed and tailored to a [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) workflow. As the demand for real-time data processes increases and as companies look to make data-driven decisions in real time, there is an emergence of real-time processing data technologies. Crossing collaboration.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=93)** The rise of the data practitioner is well underway. Individuals and teams that previously did not use data as a fundamental part of their workflows, have begun adopting it. As such, data engineering, [Data Science](../../Topics/Data%20Science.md), [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md), and strategy and operations are now collaborating in an unprecedented way. Opportunities for further collaboration in this space will continue and new tools and technologies will streamline this process. AI and ML. It's clear that the AI revolution has emerged in a powerful and meaningful way over the past year. Democratized access to [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) have shown the power of ML and enterprises are primed to begin mass adoption. As this begins, data engineers will be tasked to create the tools, systems, and pipelines to support the creation and deployment of AI and ML models. The future of data engineers is bright and I'm excited to have you along for the journey. Thank you for joining me for this Hands-on Data Engineering [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** etl (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)


## Instructor

- [Vinoo Ganesh](../../Instructors/Data%20Science/Vinoo%20Ganesh.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/codespaces)

## Skills Covered

- Data Engineering

## Path Context

### In [Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)
← [Data Engineering Foundations](Data%20Engineering%20Foundations.md) | **2 of 6** | [Hands-On Introduction- Scala](Hands-On%20Introduction-%20Scala.md) →

### In [Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)
← [Data Engineering Foundations](Data%20Engineering%20Foundations.md) | **2 of 6** | [Rust Essential Training](Rust%20Essential%20Training.md) →

### In [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
← [Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) | **3 of 6** | [Learning Apache Airflow](Learning%20Apache%20Airflow.md) →

### In [Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)
**1 of 7** | [Hands-On Advanced Python- Data Engineering Basics](Hands-On%20Advanced%20Python-%20Data%20Engineering%20Basics.md) →

### In [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
← [Data Engineering Foundations](Data%20Engineering%20Foundations.md) | **2 of 7** | [Introduction to Data Warehouses](Introduction%20to%20Data%20Warehouses.md) →

## Part of

- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)

## Appears In

- [Develop Your Scala Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Scala%20Skills%20for%20Data%20Engineering.md)
- [Develop Your Rust Skills for Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Rust%20Skills%20for%20Data%20Engineering.md)
- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
- [Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)
- [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Databricks Certified Data Engineer Associate Cert Prep](Databricks%20Certified%20Data%20Engineer%20Associate%20Cert%20Prep.md) — Data Engineering
- [Big Data Analytics with Hadoop and Apache Spark](Big%20Data%20Analytics%20with%20Hadoop%20and%20Apache%20Spark.md) — Data Engineering
- [Transition from Data Science to Data Engineering](../Cloud%20Computing/Transition%20from%20Data%20Science%20to%20Data%20Engineering.md) — Data Engineering
- [Introduction to Modern Data Engineering with Snowflake](../Cloud%20Computing/Introduction%20to%20Modern%20Data%20Engineering%20with%20Snowflake.md) — Data Engineering
- [Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md) — Data Engineering

---

[↑ Back to top](#)