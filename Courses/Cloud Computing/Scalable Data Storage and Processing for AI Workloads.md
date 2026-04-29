---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: scalable-data-storage-and-processing-for-ai-workloads
url: "https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads"
duration_minutes: 90
duration: 1h 30m
level: Intermediate
updated: 3/17/2025
learners: 4846
skills:
  - Data Processing
  - AI Software Development
  - Artificial Intelligence (AI)
  - Data Storage
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE1Qqi57VoW4Q/learning-public-crop_675_1200/B4EZVssGVvH0Ac-/0/1741285254779?e=2147483647&amp;v=beta&amp;t=GYjaq7OPlRcOb9ejTjf7yNoSGSNw6XDMOsrJ9XJzCTY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Working with Data- Collecting, Processing, and Storing Data for AI]]'
prev_courses:
  - '[[Secure Data Management for AI Implementation]]'
next_courses:
  - '[[Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI]]'
path_nav: '[{"path":"Working with Data- Collecting, Processing, and Storing Data for AI","position":5,"total":6,"prev":"Secure Data Management for AI Implementation","next":"Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - skill/data-processing
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/data-storage
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Scalable%20Data%20Storage%20and%20Processing%20for%20AI%20Workloads.md)

![Scalable Data Storage and Processing for AI Workloads](https://media.licdn.com/dms/image/v2/D4E0DAQE1Qqi57VoW4Q/learning-public-crop_675_1200/B4EZVssGVvH0Ac-/0/1741285254779?e=2147483647&amp;v=beta&amp;t=GYjaq7OPlRcOb9ejTjf7yNoSGSNw6XDMOsrJ9XJzCTY)

# Scalable Data Storage and Processing for AI Workloads

> Solutions for data storage and processing are essential, but how do you manage them effectively at scale? In this course, instructor Janani Ravi covers the fundamentals of designing and implementing data storage systems that can efficiently handle the large-scale demands of AI-powered applications. Explore techniques for managing, processing, and optimizing data flow in distributed environments to

> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads) | 1h 30m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Types of Data and Storage Requirements]]** (4 videos)
- **[[#2. Data Storage in the AI Pipeline]]** (7 videos)
- **[[#3. Vector Databases and RAGs]]** (3 videos)
- **[[#4. AI Workloads and Processing]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Scalable solutions for storage and processing
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=1)** - [Instructor] Hi, and welcome to this course on scalable data storage and processing for AI workloads.
>
> **[0:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=7)** Now, before we dive into the contents of this course, let's understand why it's important to have scalable solutions, especially when you're working with AI model training, deployment, and inference.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=19)** Now, in this world of generative AI, it shouldn't be surprising to anyone that AI needs a lot of data.
>
> **[0:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=25)** Scalable AI storage solutions must ensure seamless accommodation of increasing data volumes, crucial as AI models rely on progressively larger data sets for improved training, inference, and overall performance.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=39)** For example, the AI needed to train autonomous vehicles require immense data sets of road conditions, traffic patterns, and environmental scenarios to ensure that they can deal with different conditions.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=51)** Scalable storage solutions are a must for optimized performance.
>
> **[0:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=55)** Scalable storage supports high-speed data access and processing.
>
> **[0:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=59)** It'll reduce latency and enable efficient handling of real-time analytics and complex AI workloads.
>
> **[1:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=65)** For example, platforms like Amazon use AI for real-time recommendation systems, which means they require rapid access to large customer behavior data sets to deliver their personalized suggestions.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=77)** While you scale storage, it's important that storage is cost effective as well.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=82)** Organizations prefer to avoid over-provisioning and optimize costs while maintaining the flexibility to adapt to evolving AI project requirements.
>
> **[1:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=91)** For example, a healthcare startup using AI for diagnostics can begin with smaller storage and scale up as their patient data grows, making sure that their costs are within their budget and also supporting future needs.
>
> **[1:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=106)** AI is not just data hungry.
>
> **[1:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=107)** It needs a lot of compute power as well.
>
> **[1:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=110)** Scalable processing enables AI systems to handle increasing computational demands as models grow more complex and data sets expand.
>
> **[1:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=118)** The phenomenal natural language processing models that we see today like GPT requires substantial computational power for training that scales significantly with larger data sets and advanced architectures.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=131)** It's important that even though processing requirements grow, you have efficient allocation of resources and have reduced training and inference time for AI workloads.
>
> **[2:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=142)** For instance, in weather prediction, scalable processing allows climate models to quickly analyze vast amounts of atmospheric data, allowing you to get timely, accurate forecasts.
>
> **[2:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/scalable-solutions-for-storage-and-processing?u=76281980&t=152)** AI computation requires massive amounts of power, so it's important that you dynamically adjust processing power based on workload requirements to allow organizations to manage infrastructure costs while addressing energy-intensive demands of AI workloads.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), for instance (1)
> **Code Keywords:** require (2), let (1)
> **Env Vars:** gpt (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=1)** - [Instructor] Before we dive into the actual course contents, here is a quick look at the prerequisites that you need to have to make the most of your learning.
>
> **[0:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=8)** Now, I assume that you have some basic familiarity and understanding of AI and ML solutions.
>
> **[0:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=14)** This is certainly not a beginner course in AI, however, it's not necessary that you have deep experience in building and training ML models.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=22)** If you have a general understanding, but no hands-on experience, that should be sufficient, as well.
>
> **[0:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=27)** I also expect that you have some basic understanding of how data storage solutions work, whether on premises or on cloud platforms and that brings me to another prerequisite.
>
> **[0:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=38)** I expect that you're familiar with the big cloud platforms.
>
> **[0:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/prerequisites?u=76281980&t=41)** You may not have hands-on experience with all three, but some familiarity with at least one will help and then, there is a demo in Python that I have here in this course and I expect that you have basic Python knowledge.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you need to have (1), prerequisite (1)
> **Speakers:** - [instructor] (1)


### 1. Types of Data and Storage Requirements

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Types of data: Structured, semistructured, and unstructured
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=1)** - [Narrator] Now there are different types of data available in the world today.
>
> **[0:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=4)** Let's discuss what these different types are, and we'll move on to discussing the storage requirements for these types of data.
>
> **[0:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=11)** There are three broad categories of data that AI and ML workloads can work with.
>
> **[0:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=17)** The first is structured data.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=19)** This data is highly organized and formatted in a way that makes it easily searchable.
>
> **[0:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=24)** This data is typically stored in rows and columns and relational databases.
>
> **[0:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=28)** Structured data refers to any kind of data that has a fixed, rigid schema, the different fields in the data, and the data types for those fields.
>
> **[0:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=38)** Now, the second type of data that you might work with is semi-structured data.
>
> **[0:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=42)** Semi-structured data has a more flexible format when you compare it with structured data.
>
> **[0:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=47)** There is some degree of organization, such as tags or schemas, but this data does not neatly fit into traditional relational databases.
>
> **[0:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=57)** Examples of semi-structured data include JSON files, XML files, email metadata, and web clickstream logs.
>
> **[1:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=66)** Unstructured data is data which does not have any predefined format, and includes raw data such as text, images, audio, and video files.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=77)** Examples of unstructured data include social media posts, medical imaging data, and surveillance videos.
>
> **[1:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=83)** Unstructured data is often referred to as a blob, and it's characterized by its lack of schema.
>
> **[1:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=90)** Schema is what gives the data structure.
>
> **[1:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=92)** These different data types are used to train different AI and ML workloads.
>
> **[1:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=98)** When you have structured organized data, these are commonly used to train machine learning models like linear regression, logistic regression, decision trees, and gradient posting machines.
>
> **[1:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=109)** These are supervised learning models, which excel at making predictions, classifications, and forecasts based on tabular data.
>
> **[1:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=118)** Semi-structured data is generally processed using unsupervised learning models.
>
> **[2:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=123)** Semi-structured data is often processed using clustering algorithms, recommendation systems, or natural language processing models, which can handle variability in data structure and still extract meaningful insights.
>
> **[2:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=137)** Traditional models like linear regression, logistic regression, decision trees, et cetera, cannot work with unstructured data.
>
> **[2:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=144)** This is used to train advanced deep learning models, such as convolutional neural network for images, recurrent neural networks for sequential text data, and transformers for natural language understanding.
>
> **[2:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=155)** These different data types require different kinds of storage solutions.
>
> **[2:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=160)** There is no one storage which fits all types of data.
>
> **[2:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=164)** Structured data requires storage solutions like relational databases, SQL databases, or data warehouses that support efficient indexing, querying, and schema management.
>
> **[2:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=173)** These systems are optimized for smaller but highly organized data sets, ensuring fast access and retrieval for analytics and reporting tasks.
>
> **[3:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=182)** Semi-structured data is typically stored in NoSQL databases, such as MongoDB or Cassandra.
>
> **[3:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=188)** They can also be stored in file systems designed to handle flexible schema-less formats.
>
> **[3:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=193)** These storage solutions must accommodate variable structures and provide scalability to manage growing data sets Effectively.
>
> **[3:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=200)** Unstructured data needs scalable storage systems such as distributed file systems such as HDFS, that is, Hadoop Distributed File System, part of the Hadoop framework, Or object storage platforms such as S3 on AWS, or Cloud Storage on Google and Azure Blob Storage.
>
> **[3:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=217)** These systems prioritize capacity and flexibility to manage high volumes of multimedia and text data without predefined organization.
>
> **[3:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=226)** Processing requirements across these different data types also vary.
>
> **[3:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=231)** Processing structured data requires frameworks capable of handling tabular formats.
>
> **[3:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=236)** Frameworks such as Pandas, Apache Spark, or TensorFlow structured data pipelines.
>
> **[4:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=241)** These tools streamline data cleaning, feature engineering, and batch processing to prepare data for training and traditional ML models.
>
> **[4:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=249)** AI workflows for semi-structured data need tools that pass and convert irregular formats into usable structures, such as the TensorFlow data API for pre-processing JSON or XML files.
>
> **[4:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=262)** These workflows must accommodate schema variability and use data integration platforms to enable downstream training of say, recommendation systems or clustering algorithms.
>
> **[4:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=273)** Unstructured data in AI workflows requires pre-processing techniques like text organization, image sizing, or audio spectrogram generation using libraries such as OpenCV, NLTK or librosa.
>
> **[4:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=286)** These workflows need significant computational resources to process and prepare raw data for deep learning models.
>
> **[4:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=293)** Each data type has its own challenges.
>
> **[4:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=296)** For example, structured data requires extensive pre-processing to handle issues like missing values, outliers or redundant features which can affect AI model performance.
>
> **[5:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=306)** While structured data is easier to manage, it may lack the richness or diversity needed for complex AI models, limiting insights and generalizability.
>
> **[5:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=315)** Semi-structured data poses challenges in standardizing and integrating inconsistent formats, such as varying schemas or nested data structures.
>
> **[5:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=325)** Parsing or converting this data for AI models can be computationally intensive, especially when dealing with large-scale data sets.
>
> **[5:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=332)** Working with unstructured data is challenging due to its high variability, requiring sophisticated pre-processing techniques like feature extraction, dimensionality reduction, or annotation for supervised learning.
>
> **[5:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-data-structured-semi-structured-unstructured?u=76281980&t=344)** Processing unstructured data is also very computationally intensive.

> [!info]- Semantic Content
>
> **Analogies:** such as (11), for example (1)
> **Env Vars:** json (2), xml (2), sql (1), hdfs (1), aws (1)
> **Code Keywords:** let (1), require (1), pass (1)
> **CLI Commands:** aws (1), apache (1)
> **Definitions:** refers to (1)
> **Speakers:** - [narrator] (1)

#### Understanding structured data
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=1)** - [Narrator] Let's dive into each of these data types in a little more detail.
>
> **[0:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=4)** Starting with structured data.
>
> **[0:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=6)** This is data that's organized in rows and columns, making it easily searchable and storable in relational databases.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=13)** Common examples include data of types numbers, dates, and strings, such as customer names, transaction amounts, and timestamps.
>
> **[0:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=20)** Structured data is only about 20% of enterprise data, and it's easier to process due to its predictable format and compatibility with legacy systems.
>
> **[0:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=29)** Pre-processing structured data typically involves simple operations like filtering, aggregation, or feature extraction, which are computationally efficient.
>
> **[0:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=37)** Structured data is typically stored in storage systems such as relational databases.
>
> **[0:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=41)** Examples include MySQL, PostgreSQL, Microsoft SQL Server, or Oracle databases.
>
> **[0:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=47)** It's best for tabular data with defined schemas, and these support complex queries using SQL.
>
> **[0:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=53)** Structured data can also be stored in data warehouses such as Snowflake, Google BigQuery, Amazon Redshift, and Azure Synapse Analytics.
>
> **[1:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=61)** Data warehouses are best for aggregated and historical structured data used for analytics and business intelligence.
>
> **[1:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=68)** Structured data can be stored in cloud-based databases as well, such as Amazon Relational Database Service, Google Cloud SQL, and Azure SQL database.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=77)** These are scalable managed solutions for storing and querying structured data on the cloud.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=82)** Another option for structured data includes columnar databases such as Apache Cassandra, Amazon DynamoDB, and HBase, best for high performance storage and retrieval of structured data in distributed systems, often for real-time analytics.
>
> **[1:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=97)** Let's talk about structured data in AI models.
>
> **[1:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=99)** Structured data is very easy to use in business intelligence tools for building visualizations and dashboards.
>
> **[1:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=106)** It's used to power AI models such as regression, classification, and forecasting models in finance, healthcare, retail, et cetera.
>
> **[1:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=114)** It powers traditional machine learning models such as decision trees, random forests, and support vector machines, which tile on well-organized data sets.
>
> **[2:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=124)** It tends to be easy to engineer features in structured data, which means AI practitioners can focus on model optimization rather than extensive pre-processing.
>
> **[2:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=133)** Large-scale structured data is usually stored in data warehouses where data is fed in from different sources, external data, operational data.
>
> **[2:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=142)** These are then transformed using ETL pipelines, extract, transform, load pipelines, and stored in a warehouse.
>
> **[2:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-structured-data?u=76281980&t=149)** Warehouses are usually integrated with business reporting and forecasting tools used to analyze this data.

> [!info]- Semantic Content
>
> **Analogies:** such as (7)
> **Env Vars:** sql (4), etl (1)
> **CLI Commands:** mysql (1), apache (1)
> **Code Keywords:** let (2)
> **Speakers:** - [narrator] (1)

#### Understanding semistructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=1)** - [Instructor] Let's dive a little deeper into understanding semi-structured data.
>
> **[0:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=6)** This data is partially organized and often stored in formats like XML, JSON, or RDF, which includes tags or schemas used for data organization.
>
> **[0:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=17)** Examples include emails, web click streams, and sensor data logs, which provide flexibility while retaining some organizational structure.
>
> **[0:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=27)** Unstructured data is more flexible than structured data, and it can pose challenges such as handling concurrency issues in databases, or extracting insights from inconsistent formats.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=39)** Working with unstructured data often requires specialized tools to parse and convert data into usable formats, which means it's more complex to work with than structured data.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=51)** Unstructured data is often stored in repositories, such as data lakehouses.
>
> **[0:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=56)** Examples include the Databricks Lakehouse platform, or Snowflake or Delta Lake.
>
> **[1:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=62)** Lakehouses can store both structured, semi-structured, and unstructured data and provide capabilities for analytics and machine learning.
>
> **[1:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=70)** Data lakehouses combine the scalability of data lakes with the reliability and performance of data warehouses.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=77)** Semi-structured data is very often stored in NoSQL databases.
>
> **[1:21](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=81)** Examples include MongoDB, Couchbase, and Amazon's DynamoDB.
>
> **[1:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=87)** These storage systems are best suited for flexible storage of semi-structured data in JSON, BSON or XML format.
>
> **[1:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=95)** They allow dynamic schema changes and fast retrieval for real-time applications.
>
> **[1:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=100)** Important features include horizontal scalability and support for diverse data models, such as document models, key value models, graph models.
>
> **[1:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=110)** Cloud object storage, blob storage, or data lakes can also store semi-structured data.
>
> **[1:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=117)** Examples here include Amazon's S3, Google Cloud Storage, and Azure Blob Storage.
>
> **[2:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=122)** They can store large-scale semi-structured data files, either in the CSV, JSON, or Avro format, and they give you easy accessibility for processing and analytics.
>
> **[2:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=132)** This is cost effective storage with integration for big data tools and workflows.
>
> **[2:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=137)** Graph data that can be used to represent social media networks or telephone lines or cellular connections, these are also examples of semi-structured data.
>
> **[2:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=148)** Graph databases such as Neo4j or RDF, are particularly suited for representing relationships and queries over graph-like semi-structured data.
>
> **[2:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=157)** Semi-structured data is used in AI models for tasks such as recommendation systems, anomaly detection, and customer behavior analysis.
>
> **[2:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=167)** For example, JSON-encoded logs from an E-commerce site can be used to train clustering models or collaborative filtering algorithms to personalize user experiences.
>
> **[2:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=178)** Natural language processing, or NLP models, often process semi-structured data, such as emails or forum posts to extract text for sentiment analysis or intent classification.
>
> **[3:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=190)** AI workflows that involve the use of semi-structured data include parsing feature extraction and schema alignment to prepare the data for downstream processing.
>
> **[3:21](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=201)** As we've discussed, semi-structured data is often stored in data lakehouses, so named because they combine the reliability and performance of data warehouses with the flexibility and cost of a data lake.
>
> **[3:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=212)** Data lakehouses can store all kinds of data, structured, semi-structured, and unstructured.
>
> **[3:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=217)** They store the data in an underlying data lake and they have a metadata layer, which adds governance, performance, and reliability when we want to work with the underlying data in the data lake.
>
> **[3:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=228)** Data in lakehouses can be used to build dashboards and train machine learning models.
>
> **[3:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=234)** Semi-structured data is often stored in data lakes and NoSQL databases as well.
>
> **[3:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-semi-structured-data?u=76281980&t=239)** These storage systems can store many different types of semi-structured data and make them available to big data processing frameworks and AI workloads.

> [!info]- Semantic Content
>
> **Env Vars:** json (4), xml (2), rdf (2), bson (1), csv (1)
> **Analogies:** such as (6), for example (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Understanding unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=1)** - [Instructor] And in this video, we'll dive into unstructured data in a little more detail.
>
> **[0:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=5)** Unstructured data lacks a predefined format and cannot be organized or structured in any well-defined manner.
>
> **[0:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=14)** If you look around you, you'll find that most of the data in the world tends to be unstructured data.
>
> **[0:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=20)** Audio, video, image files, word processing files, emails, spreadsheets, which form about 80% of enterprise data according to Gartner.
>
> **[0:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=31)** All of these are unstructured formats.
>
> **[0:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=34)** Because of the sheer volume of unstructured data, this requires significantly more storage space than structured or semi-structured data due to its diversity and large file sizes.
>
> **[0:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=46)** Processing unstructured data is not easy.
>
> **[0:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=48)** It requires advanced tools and techniques like machine learning, natural language processing, and computer vision to extract insights.
>
> **[0:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=56)** Common storage systems for unstructured data include object storage systems like Amazon's S3, Google Cloud Storage, and Azure Blob Storage.
>
> **[1:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=65)** These allow us to manage unstructured data at scale.
>
> **[1:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=69)** These blob storage systems are often referred to as data lakes.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=73)** Unstructured data can be stored in distributed file systems such as HDFS or Hadoop distributed file system, which can handle large datasets.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=82)** Network attached storage or NAS solutions are suitable for smaller scale or localized unstructured data management.
>
> **[1:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=91)** Unstructured data powers advanced AI models such as convolution neural networks for image recognition and recurrent neural networks or transformers for language understanding.
>
> **[1:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=101)** Unstructured data is crucial for applications such as video analytics, speech-to-text systems, sentiment analysis, and autonomous vehicle training.
>
> **[1:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=111)** Now, before you can actually use this data in AI models, the data must undergo pre-processing steps like annotation, tokenization, or feature extraction, to convert the raw data into a format suitable for training.
>
> **[2:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=124)** Data lakes are often the storage system of choice for unstructured data.
>
> **[2:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=129)** Data lakes can store all kinds of data, structured, semi-structured, and unstructured.
>
> **[2:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=134)** But with unstructured data, you typically have no choice but to store it in a data lake.
>
> **[2:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/understanding-unstructured-data?u=76281980&t=139)** Now, unstructured data needs to be transformed and prepared before it can be used downstream for machine learning or reporting.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Env Vars:** hdfs (1), nas (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Data Storage in the AI Pipeline

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Storage requirements in the AI pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=1)** - [Instructor] Now that we've understood the different types of data that AI workloads can work with and the different storage systems for each kind of data, let's talk about the storage requirements in an AI pipeline.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=13)** First, let's discuss what we want from storage systems, that whole data for our AI workloads.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=19)** The first is scalability.
>
> **[0:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=20)** AI projects often start small, but can grow rapidly, requiring storage solutions that can handle the increasing amounts of data without significant changes.
>
> **[0:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=30)** Next is availability.
>
> **[0:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=31)** Data must be available for both model training and production.
>
> **[0:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=36)** Delays in accessing data can hinder model development and negatively impact production performance.
>
> **[0:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=42)** A storage system for AI needs to be optimized for high throughput and low latency to keep up with the demands of AI workloads, especially during model training where faster data access allows for more experiments and better model accuracy.
>
> **[0:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=56)** AI systems should be able to prevent failure and recover gracefully when failures occur.
>
> **[1:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=62)** This means resiliency is especially important for models running in production, but is also valuable in training to prevent loss of time and resources due to failures.
>
> **[1:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=71)** AI systems often deal with sensitive or proprietary information, which means data security is critical.
>
> **[1:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=78)** Storage system needs to provide secure data storage with strong encryption methods, access controls, and measures to prevent unauthorized access or breaches.
>
> **[1:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=88)** Here is a big picture overview of data storage in the AI pipeline.
>
> **[1:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=92)** The AI pipeline starts with raw data, which is then refined to form training data used to train models.
>
> **[1:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=99)** Model training involves storing model checkpoints.
>
> **[1:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=102)** Your model might finally be saved in a quantized format and then used for inference.
>
> **[1:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=108)** If it's a generative AI model, you might include a vectorized database for retrieval-augmented generation or RAG.
>
> **[1:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=115)** Let's start by discussing where you'll store your raw data.
>
> **[2:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=120)** Raw data for your AI pipeline is typically collected from diverse origins.
>
> **[2:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=124)** This can include cloud providers, on-premises systems, and network service providers or NSPs.
>
> **[2:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=130)** The volume of raw data tends to be enormous, typically in the range of tens of petabytes or PBs, making storage and processing a very, very important challenge.
>
> **[2:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=140)** Raw data is typically not in a format that can be directly fed into AI models.
>
> **[2:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=146)** You need data cleaning and pre-processing operations to be performed on the raw data.
>
> **[2:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=151)** This can involve removing faulty data, anonymizing sensitive information, and maybe aggregating data.
>
> **[2:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=157)** Once you're done with all of this, the size of the data that you're left with is usually much smaller than the original data, maybe just about one fifth or one 10th the original size.
>
> **[2:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=167)** Once you've processed your raw data, you're left with refined data that is used to train ML models.
>
> **[2:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=174)** This cleaned and prepared training data, usually in petabytes, is stored in high performance file storage systems to meet the demands of large scale AI model training.
>
> **[3:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=184)** These storage systems are accessed through either gigabit ethernet or InfiniBand connections, which give very low latency, high throughput access to data.
>
> **[3:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=194)** Gigabit ethernet offers higher bandwidth while InfiniBand provides lower latency, making it ideal for performance critical training.
>
> **[3:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=202)** InfiniBand is a high performance, low latency networking technology commonly used in data centers, high performance computing environments, and AI ML infrastructure.
>
> **[3:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=212)** Gigabit ethernet or GBE are networking systems based on ethernet technology that support data transfer rates of up to one gigabit per second.
>
> **[3:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=223)** They're used for a lower cost solution for networking.
>
> **[3:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=226)** Your pre-processed refined data is used to train AI models, and during the model training process, you might store checkpoints of your model for easy recoverability.
>
> **[3:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=238)** Now the model itself requires storage.
>
> **[4:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=241)** The size of an enterprise grade trained AI model ranges from megabytes to terabytes.
>
> **[4:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=248)** Remember, generative AI models are very, very large.
>
> **[4:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=251)** The model weight representation and the number of model parameters affect the size of the model.
>
> **[4:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=257)** During model training, model checkpoints are usually stored in high performance storage.
>
> **[4:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=262)** This allows model training to recover from interruptions or issues without restarting the entire process.
>
> **[4:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=269)** Older checkpoints are usually stored in capacity-based file or object storage to balance cost and accessibility.
>
> **[4:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=277)** The trained AI model, which is the final product of the training process, which is then used for inference in real world applications, is stored in high performance file storage.
>
> **[4:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=288)** This ensures quick access to the model during inference.
>
> **[4:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=291)** Trained models are usually quantized for efficiency.
>
> **[4:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=296)** A quantized model reduces the size of the trained model by compressing it, typically by converting high precision data into lower precision formats.
>
> **[5:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=304)** So 32 bit floats might be converted to eight bit integers.
>
> **[5:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=308)** Quantized models are much smaller.
>
> **[5:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=309)** They range from megabytes to gigabytes, which means you can deploy them in resource-constrained environments like mobile devices or edge hardware, with reduced precision and smaller size, quantized models require less memory and computational power, enabling faster and more efficient inference, especially on specialized hardware like GPUs, TPUs, or edge accelerators.
>
> **[5:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=330)** These are the models typically used in real time applications.
>
> **[5:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=334)** If you're working with generative AI, you might choose to use a separate storage system for your vector database.
>
> **[5:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=341)** We'll talk a lot more about vector databases in a bit, but a vector database stores and retrieves data in a vectorized format, where data points such as text, images, or audio are transformed into numerical embeddings.
>
> **[5:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=355)** These numerical embeddings power like similarity search, clustering, and retrieval-augmented generation or RAG.
>
> **[6:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=363)** During vectorization, data often increases in size because each data point is represented by multi-dimensional vectors that capture its semantic meaning.
>
> **[6:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=372)** Vector databases require fast high performance storage systems to handle the computational demands of indexing and querying high dimensional vectors efficiently.
>
> **[6:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=382)** In addition to the training data, the model vector databases, your AI pipeline also holds many other kinds of data.
>
> **[6:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=390)** For example, you have a storage system for AI alerts.
>
> **[6:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=393)** Alerts provide crucial insights into the behavior and performance of AI models.
>
> **[6:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=398)** These alerts are stored in high performance file or object storage.
>
> **[6:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=401)** An AI pipeline will generate inference and query logs for compliance purposes, and they can grow to petabytes in size.
>
> **[6:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/storage-requirements-in-the-ai-pipeline?u=76281980&t=410)** These logs are typically transferred from edge locations to centralized archival storage and are usually stored in lower cost object storage.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (2), this, (1)
> **Env Vars:** rag (2), gbe (1)
> **Analogies:** picture (1), such as (1), for example (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Data storage in the AI workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=1)** - [Instructor] We've discussed the characteristics of the different kinds of storage that you need in an AI pipeline.
>
> **[0:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=5)** Now, let's talk about actual storage systems that you might use to store different kinds of data in your AI workflow.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=13)** Here is a big picture visualization of the steps in an AI workflow.
>
> **[0:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=16)** You have data, raw data that's ingested.
>
> **[0:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=20)** That's then processed and prepared.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=22)** The prepared data is then used for model training, that's an iterative process.
>
> **[0:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=26)** The model is then used for inference on data that may be stored in a data warehouse or in a database.
>
> **[0:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=32)** And then you get the predicted output from the model.
>
> **[0:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=35)** The different steps in the pipeline require different storage solutions.
>
> **[0:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=40)** I'm going to discuss the storage solutions for every step in the AI workflow, from data collection to data preparation, then model training, model serving, and then finally, model archiving.
>
> **[0:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=52)** The first step is data collection.
>
> **[0:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=55)** Remember, raw data tends to be in huge volumes, you can have petabytes of raw data.
>
> **[1:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=61)** And these typically tend to be stored in either blob storage or data lakes or file storage.
>
> **[1:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=67)** Let's discuss the characteristics of each in turn, starting with blob storage for data.
>
> **[1:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=72)** Data lakes and blob storage are designed for storing large volumes of unstructured and semi-structured data, such as logs, images, videos, and so on.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=82)** Blob storage tends to be highly scalable and cost effective for cloud-native applications.
>
> **[1:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=89)** Because of the low cost storage that it provides, you can store large amounts of data for which you haven't determined the right use case yet.
>
> **[1:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=97)** Blob storage does not index your data, because your data does not have any structure.
>
> **[1:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=102)** However, it does have support for metadata tagging for easier organization and retrieval of your data.
>
> **[1:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=109)** Blob storage is best for raw data that doesn't require complex query or any kind of hierarchical organization.
>
> **[1:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=116)** File storage on the other hand allows you to store data in a hierarchical structure of directories and subdirectories within which you have files.
>
> **[2:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=125)** Now, this kind of storage is best for semi-structured data like CSV or JSON files.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=131)** With raw data, you typically don't store data in high performance file storage, it's just regular file storage.
>
> **[2:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=138)** So that is best suited for small to medium datasets or legacy applications.
>
> **[2:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=143)** File storage for raw data tends to have limited scalability and is less cost efficient for massive datasets compared to blob storage.
>
> **[2:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=150)** Comparing these options, the best choice for raw data in its native format is a blob storage.
>
> **[2:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=156)** This gives you scalability, cost effectiveness, and support for diverse data types.
>
> **[2:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=162)** Now, raw data tends to be huge, but data that has been prepared and processed tends to be smaller in size.
>
> **[2:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=170)** Once again, we are presented with the same two choices, blob storage and file storage.
>
> **[2:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=174)** We've already discussed the characteristics of both of these storage systems.
>
> **[2:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=179)** Now, for prepared data, the best option tends to be file storage.
>
> **[3:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=183)** Since prepared data is smaller, it tends to be stored in high performance file storage.
>
> **[3:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=189)** The hierarchical organization that it offers and its ability to handle high throughput tasks make it the best choice.
>
> **[3:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=197)** Blob storage is thus suited for handling large volumes of data, but for prepared data that is smaller in size, high performance file storage is preferred for data that has undergone a bit of processing and is much smaller in size.
>
> **[3:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=210)** Now, your processed data may be further refined, so that it can be used to train your model.
>
> **[3:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=217)** What's the best storage solution for training data?
>
> **[3:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=219)** Well, you have three choices here, blob storage, file storage, or parallel file systems or lakehouses.
>
> **[3:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=225)** Now, we're already familiar with blob storage or file storage, so let me talk about the characteristics of lakehouses.
>
> **[3:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=233)** Data lakehouses can store all kinds of data, so whether you have processed, structured, semi-structured, or unstructured data, data lakehouses are a great choice.
>
> **[4:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=243)** The data lakehouse architecture is fairly recent, and it tries to combine the best of data warehouses, that is its performance and reliability, and data lakes, that is its low cost storage solution.
>
> **[4:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=257)** Data lakehouses are optimized for large scale AI training with distributed file access and low latency, and can handle all kinds of data in unified storage.
>
> **[4:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=268)** They can store very large datasets at a low cost.
>
> **[4:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=270)** Data lakehouses are highly scalable for large training jobs, and they offer very high throughput and fault tolerance.
>
> **[4:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=279)** They're also built to support GPU and TPU workloads effectively, making it ideal for high performance AI training.
>
> **[4:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=287)** High performance file systems are great for storing training data, but recently, data lakehouses have won out, because of their scalability, high performance and support for diverse data types.
>
> **[5:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=300)** And finally, the last kind of data that you'll work with is archive data, data that's not actively used to train a model and may only be needed for compliance or auditory requirements.
>
> **[5:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=312)** You have two choices here, blob storage or file storage.
>
> **[5:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=315)** We already know the characteristics of each of these storage solutions, and the winner here ends up being blob storage, because of its scalability and low cost.
>
> **[5:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=326)** File storage, even if it's not high performance, can tend to be expensive.
>
> **[5:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/data-storage-in-the-ai-workflow?u=76281980&t=330)** Blob storage or data lake storage offers the lowest cost solution optimized for long-term data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (2), finally, (2)
> **Env Vars:** csv (1), json (1), gpu (1), tpu (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### AI storage considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=1)** - [Instructor] We've discussed the requirements of data in the AI workflow and the different storage systems that can be used to meet those requirements.
>
> **[0:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=8)** Now, let's discuss some special considerations when you're dealing with AI workloads.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=13)** There are some common mistakes that you might encounter when storing data for AI.
>
> **[0:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=18)** Let's see what they are.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=19)** The first thing is neglecting data scalability.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=22)** Now, your AI training data and your model might be small to start off with, but do not underestimate the data growth rate and make sure you always use storage solutions that can scale.
>
> **[0:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=33)** The impact of neglecting scalability can lead to storage limitations, requiring costly migrations or restructuring.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=39)** Another common mistake is to organize your data badly or ignore data organization.
>
> **[0:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=46)** If you fail to index label or structure data properly, it makes it difficult to retrieve or analyze that data.
>
> **[0:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=53)** This slows down model training and inference due to inefficiencies in data access.
>
> **[0:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=58)** Another mistake is ignoring data diversity or accounting for only one kind of data, such as structured data.
>
> **[1:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=65)** If you store only one type of data without considering report for semi-structured and unstructured data, that'll limit your ability to use diverse data sets such as text, images, and video for multimodal applications.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=77)** Another common mistake, not tracking metadata or not versioning your data.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=82)** If you store data without attaching metadata or tracking versions, this causes confusion in identifying the latest or correct version of the dataset for AI training, and that can lead to expensive mistakes down the line.
>
> **[1:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=95)** And of course, the all important security.
>
> **[1:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=98)** Make sure that you don't make the mistake of storing sensitive data without encryption, access control, or anonymization.
>
> **[1:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=105)** If you do this, you risk data breaches, legal violations, and reputational damage.
>
> **[1:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=110)** Next, let's discuss some special considerations of AI data storage.
>
> **[1:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=115)** AI workloads, particularly during model training and inference, requires significant computational power.
>
> **[2:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=121)** This means that the storage system must be able to keep up with the high throughput and low latency demands of GPUs and PPUs.
>
> **[2:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=128)** Traditional storage solutions may not be optimized for such high levels of parallel processing.
>
> **[2:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=133)** AI deals with diverse, and often, complex data types such as unstructured data like images, audio, video as well as vector embeddings, representing semantic meaning of text data.
>
> **[2:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=145)** Traditional databases and storage systems may not be optimized to handle these data types effectively.
>
> **[2:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=151)** They need specialized systems, and this is something we've discussed.
>
> **[2:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=154)** AI workflows involve multiple stages, including data preparation, model training, inferencing, and archiving, each with different storage requirements.
>
> **[2:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=163)** Data volumes are different in these different phases.
>
> **[2:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=167)** Raw input data may be in petabytes, whereas refined data may be in the low petabytes or high terabytes, vector embeddings can be in petabytes, again.
>
> **[2:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=176)** AI models that are deployed to production often require real-time data access for inference, and this places stringent demands on storage latency and throughput.
>
> **[3:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=186)** Your storage solution must provide quick access to models and the necessary data for prediction.
>
> **[3:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=192)** And all important is security.
>
> **[3:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=195)** Make sure you keep in mind the CIA Triad.
>
> **[3:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=198)** C for confidentiality.
>
> **[3:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=200)** This is what you do to ensure that data is accessible only to authorized individuals or systems.
>
> **[3:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=206)** AI models often handle sensitive data such as user information or financial data, and improper storage of raw training or inference data can lead to breaches.
>
> **[3:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=216)** Integrity ensures that data is accurate, consistent, and protected from unauthorized modification.
>
> **[3:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=222)** If AI data is corrupted or tampered during storage or transfer, this can result in inaccurate model training and this compromised data integrity impacts trust in AI outputs.
>
> **[3:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=234)** And finally, availability ensures that data and systems are accessible whenever needed without interruptions.
>
> **[4:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=240)** This is critical for real-time AI inference and continuous model training.
>
> **[4:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=245)** Make sure you evaluate your storage solutions using the CIA Triad.
>
> **[4:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=250)** Since AI workflows handle vast amounts of sensitive data, adhering to the CIA Triad minimizes risks like breaches, tampering, or loss of data.
>
> **[4:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=259)** Training on compromised data compromises the model's reliability.
>
> **[4:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=263)** So if the model is trained on flawed or incorrect data, this reduces the accuracy of your AI model.
>
> **[4:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=270)** Make sure you have operational continuity for your storage solution.
>
> **[4:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=274)** Downtime in accessing training or inference data directly affects AI operations, causing delays in decision-making or customer service.
>
> **[4:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-considerations?u=76281980&t=282)** If you're working with sensitive data, make sure that you are compliant with laws like GDPR, HIPAA, or CCPA, avoiding legal and financial repercussions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** let (3), this, (1), require (1), protected (1), finally, (1)
> **Env Vars:** cia (3), gdpr (1), hipaa (1), ccpa (1)
> **Analogies:** such as (4)
> **Warnings:** common mistake (2), don't make the mistake (1), keep in mind (1)
> **Definitions:** means that (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### AI storage best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=1)** - [Instructor] Before we move on to discussing processing for AI workloads, let's quickly discuss some best practices around choosing storage solutions for AI models.
>
> **[0:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=11)** The very first here is to make sure that your AI storage is in a location with excellent network connectivity.
>
> **[0:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=18)** AI inference requires high-speed secure access to data, making network connectivity, a critical factor for AI storage.
>
> **[0:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=26)** Your AI models are likely trained on the cloud, so make sure you place storage near public clouds and ensure cloud adjacency with high bandwidth and low latency connectivity, enabling seamless access to partners and ecosystems.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=39)** Another best practice to keep in mind is to process data close to where it's generated.
>
> **[0:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=45)** This reduces costs and improves latency and ensures compliance with data residency requirements.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=51)** For edge-generated data, inference and processing should occur locally, while cloud generated data should typically be processed on the cloud.
>
> **[0:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=59)** Make sure that your AI strategy leverages AI models from multiple clouds or providers.
>
> **[1:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=65)** A multi-cloud approach allows companies to pivot between providers and use emerging AI models without expensive migrations.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=73)** Storing data in cloud-adjacent locations supports flexibility for public and private AI, avoiding data egress charges.
>
> **[1:21](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=81)** While choosing your storage solution, look for a predictable cost model.
>
> **[1:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=85)** Cloud storage can have hidden costs, such as charges for data reads, rights, and egress, which can dominate the total cost of ownership.
>
> **[1:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=93)** Storing data at neutral cloud-adjacent locations will eliminate these variable fees and enables a fixed-cost model.
>
> **[1:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=101)** This will definitely make your budgeting simpler and reduce financial surprises.
>
> **[1:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=106)** Make sure you use storage devices that support multiple storage types and protocols because different phases of the AI pipeline require varied storage types, such as object storage for our data and file storage for AI clusters.
>
> **[1:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=119)** Prefer unified storage solutions that support diverse workloads, media types, and communication protocols.
>
> **[2:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-storage-best-practices?u=76281980&t=125)** This will reduce your operational complexity and cost.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** public (2), let (1), private (1), require (1)
> **Analogies:** such as (2)
> **Best Practices:** best practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Cloud storage on Google Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=1)** - [Instructor] We've discussed that blob storage is a very important kind of scalable elastic storage for unstructured data used in AI workloads.
>
> **[0:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=9)** In this demo, I'll give you a quick tour of the object storage system on Google Cloud, Google Cloud Storage.
>
> **[0:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=16)** Here I am logged into a Google Cloud account on a Google Cloud project.
>
> **[0:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=20)** Use the navigation menu off to the left to view all products available on the Google Cloud.
>
> **[0:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=25)** Object storage is available in the section Storage.
>
> **[0:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=30)** Cloud Storage is Google's offering for elastic object storage for all kinds of workloads.
>
> **[0:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=35)** All your data in Object Storage is stored within containers called buckets.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=39)** And here I'm going to create our very first bucket.
>
> **[0:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=43)** Now every bucket has a globally unique name.
>
> **[0:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=46)** It's common practice to have a prefix for the name of your bucket that matches the prefix for your organization.
>
> **[0:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=52)** Now, if you want to store data for data-intensive AI workloads, you should enable hierarchical name space on this bucket.
>
> **[0:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=59)** Your data in your bucket will be stored with a file system-like hierarchical structure rather than as flat object structures.
>
> **[1:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=68)** And this makes your data more performant for AI workloads.
>
> **[1:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=71)** Go ahead and click on Continue.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=73)** The next choice you have to make is where to store your data.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=77)** If your users are spread out across the world, choose the multi-region option.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=82)** This will give you the highest redundancy.
>
> **[1:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=84)** If your users are concentrated in one or two regions, you can go with the dual or regional bucket.
>
> **[1:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=91)** Click on Continue.
>
> **[1:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=93)** The next choice is that of storage class.
>
> **[1:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=96)** If your data is going to be frequently accessed, pick standard storage, nearline, coldline, and archive storage are for less frequently accessed data.
>
> **[1:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=104)** We'll stick with standard.
>
> **[1:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=106)** The next choice here is how you control access to objects.
>
> **[1:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=109)** The recommended practice is that you choose uniform access control, where you use identity and object management policies to control access to the bucket as a whole.
>
> **[1:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=119)** If you want different access for individual objects in a bucket, go with fine-grained access control.
>
> **[2:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=124)** If your data is sensitive, make sure you select enforce public access prevention on this bucket so that your data is not inadvertently exposed to the public.
>
> **[2:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=134)** Click on Continue.
>
> **[2:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=136)** There are a number of other data protection options here that we won't explore.
>
> **[2:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=140)** Make sure you have soft delete enabled so that even if your objects are deleted, they'll be around for seven days for you to restore them if you need to.
>
> **[2:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=148)** And finally, you should know that all the data in your bucket is encrypted by default.
>
> **[2:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=153)** You can also choose your own encryption key if you need to.
>
> **[2:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=156)** Having specified all of these options, let's go ahead and create our bucket for object storage.
>
> **[2:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=164)** It'll ask you to confirm whether you want to enforce public access prevention on this bucket.
>
> **[2:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=168)** Yes, we do.
>
> **[2:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=169)** And in a few moments, the loony-data-bucket will be created.
>
> **[2:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=172)** You can upload files to this bucket that is your objects either manually or programmatically.
>
> **[2:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=178)** Manual upload involves the use of this upload button that you see here.
>
> **[3:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=182)** You can upload entire folders or individual objects.
>
> **[3:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=185)** You can use Google Cloud storage with REST APIs or SDKs to programmatically upload data to your buckets.
>
> **[3:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=194)** Google also has transfer services that enable you to connect to other clouds or to your on-premises system in order to transfer data to cloud storage.
>
> **[3:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=203)** Here, I'm going to drag and drop a number of different files that include CSV files and PDF files onto this bucket.
>
> **[3:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=211)** This is by far the easiest way to manually upload data to your bucket.
>
> **[3:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=215)** Remember, object storage is meant for all kinds of data, so you can choose to store structured data as well as unstructured or semi-structured data.
>
> **[3:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=224)** You can also create folders to organize your data within buckets.
>
> **[3:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=228)** Here I'm going to create a new folder called images and upload some image data into this folder.
>
> **[3:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=234)** Organizing your data makes it easy for you to access your data, especially for ML and other kinds of analytics.
>
> **[4:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=241)** I have a few JPG images on my local machine that I'm going to drag into this folder.
>
> **[4:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=246)** All of these images will be uploaded to the images folder in my loony-data-bucket.
>
> **[4:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=252)** Every object that you upload to cloud storage has a unique URI that you can use to reference that object.
>
> **[4:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=259)** I'm going to click through to this rugs.jpg file.
>
> **[4:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=263)** And in the details about this object, notice there is an authenticated URL, which is a unique HTTP URL to access this particular image file.
>
> **[4:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=273)** And there is a gsutil URI which starts with the prefix gs:// that you can use to reference this object from your cloud storage SDKs.
>
> **[4:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=285)** All of the configuration details for this particular object is available here on this page.
>
> **[4:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=290)** And in fact, for certain kinds of files, specifically image files, you can use this preview option and view a preview of the file right here within the browser.
>
> **[5:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=300)** Object storage is elastic and pay for what you use, meaning you can upload whatever data you want to analyze into the bucket.
>
> **[5:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=309)** This data will then be available to your AI workloads.
>
> **[5:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=313)** You only pay for the amount of data that you have stored in the bucket.
>
> **[5:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=316)** You do not need to provision capacity upfront.
>
> **[5:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/cloud-storage-on-google-cloud?u=76281980&t=319)** And essentially, you can store an infinite amount of data, as much as Google can handle.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3), public (3), class. (1), delete (1), finally, (1)
> **Env Vars:** uri (2), url (2), rest (1), csv (1), pdf (1)
> **UI Navigation:** click on (3), drag and drop (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **Best Practices:** recommended (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Object storage with Amazon S3
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=0)** - [Instructor] In this demo, I'll give you a quick introduction to Amazon S3.
>
> **[0:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=5)** S3 stands for Simple Storage Service, and this is the Elastic Scalable Storage Solution for all kinds of data: structured, unstructured and semi-structured data on AWS.
>
> **[0:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=18)** It's, again, pay what you use, so you don't require any storage or resource provisioning upfront.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=22)** You simply add data and pay for how much data you've stored in S3.
>
> **[0:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=28)** Here I am on the AWS Management Console and I click on the View all Products icon, and here I search for the Storage section.
>
> **[0:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=37)** S3 is available within Storage, and there you can see Scalable Storage in the Cloud.
>
> **[0:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=42)** Click through to S3, and you can see that I already have some buckets created here for my other projects, and I'll quickly create a new one and upload some data into it.
>
> **[0:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=52)** The process here is very similar to that on the Google Cloud.
>
> **[0:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=56)** Click on Create Bucket, and this will walk you through the steps of creating a new bucket.
>
> **[1:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=61)** S3 buckets can be general purpose buckets meant for most use cases, or Directory buckets when you need very, very low latency.
>
> **[1:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=69)** Now this Directory bucket type is available only in a single availability zone that's similar to a data center.
>
> **[1:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=76)** If your AI workload is running in a single zone and you require very low latency access to your data, choose the Directory option.
>
> **[1:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=83)** For now, I'll stick with the General purpose option.
>
> **[1:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=86)** Next, we specify the bucket name.
>
> **[1:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=88)** Bucket names should be globally unique, just like with Google Cloud storage.
>
> **[1:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=93)** Again, a common practice would be to use the prefix of your organization as a prefix for your bucket.
>
> **[1:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=99)** The recommended setting for object ownership is ACLs disabled, which means that all objects in the bucket are owned by this account, and you use role-based access control to control access to buckets as a whole.
>
> **[1:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=113)** With ACLs enabled, objects in the bucket, that is individual files in the bucket, can be owned by other AWS accounts.
>
> **[2:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=120)** That's generally not a recommended practice.
>
> **[2:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=123)** Next, if you have sensitive data in your bucket, make sure you block public access so none of the objects are inadvertently exposed.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=131)** By default, if objects in your bucket are overwritten, they are lost.
>
> **[2:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=135)** If you want to ensure access to previous versions of an object, enable bucket versioning.
>
> **[2:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=140)** Again, as in Google, all data in your bucket is encrypted by default.
>
> **[2:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=145)** There are different encryption options available, I'll stick with the default Amazon S3 managed keys.
>
> **[2:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=151)** Now, if you click on Advanced settings, you'll see other ways to protect data in your bucket.
>
> **[2:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=156)** If you have sensitive data, you can lock your objects so that they're never deleted or overwritten.
>
> **[2:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=162)** This setting is disabled by default, and we'll stick with that.
>
> **[2:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=165)** Go ahead and create this bucket.
>
> **[2:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=167)** And there you can see the loony-data-bucket has been successfully created, and you can see that for me, it was placed in the us-east-2 region by default.
>
> **[2:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=176)** If you look at the top right of the screen, you can see that my region is set to Ohio.
>
> **[3:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=180)** That is the us-east-2 region where my bucket was created.
>
> **[3:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=184)** Now, let's click through to the bucket.
>
> **[3:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=186)** It's currently empty.
>
> **[3:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=187)** We can easily upload the data that we need to the bucket.
>
> **[3:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=190)** Amazon 2 offers rest APIs and client STKs that you can use to upload data to buckets programmatically.
>
> **[3:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=199)** AWS also offers services such as data sync and the AWS transfer family to transfer data from other clouds as well as from on-premises systems to S3 storage.
>
> **[3:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=210)** In my introduction here, I'll keep things simple.
>
> **[3:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=212)** I'll simply drag and drop the files that I have on my local machine onto this web page, and once you drop these files, these files will be uploaded to S3.
>
> **[3:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=222)** You can quickly review the files that you'd like to upload and then click on the Upload button, and this will upload those files.
>
> **[3:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=231)** Again, you can store all kinds of data in S3, and if you'd like to organize your data, you can create folders and store specific kinds of data within folders.
>
> **[4:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=241)** I'm going to create a folder here called pdfs, and I'm going to upload the PDF data that I have on my local machine to this particular folder.
>
> **[4:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=251)** Once I've created the folder, all I need to do is click through to the folder and I can drag and drop my PDFs from my local machine onto this webpage, and it'll get uploaded to this specific folder.
>
> **[4:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=264)** Here is the page where you can quickly review your files and click on the Upload button.
>
> **[4:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=270)** As far as S3 is concerned, whether they are PDF files, CSV files, JPEG files, everything is a blob, a binary large object, and the same is true for Google Cloud storage as well.
>
> **[4:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=282)** Now you can click through to any of the objects here and view the properties of this particular object on S3.
>
> **[4:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=290)** The S3 URI is a unique URI for this object, starting with s3://.
>
> **[4:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=297)** The object URI is an authenticated HTTP URL to this object, and there are a bunch of other details that you can view about the object right here on this page.
>
> **[5:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=307)** Now, you'll notice here at the bottom that the storage class for our objects have been set to standard by default.
>
> **[5:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=314)** If you feel your data is archive or backup data, you can choose a different storage class that will give you lower cost storage, but that'll add some latency when you go to retrieve your data.
>
> **[5:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=326)** That's the trade-off that you make with AWS storage classes.
>
> **[5:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=330)** S3 is the blob storage or the data lake on Amazon.
>
> **[5:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=334)** This is where you'd store the raw data before it has been processed.
>
> **[5:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/object-storage-with-amazon-s3?u=76281980&t=339)** It gives you low-cost elastic storage on AWS.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), uri (3), pdf (2), csv (1), jpeg (1)
> **CLI Commands:** aws (7), make (2)
> **Code Keywords:** default. (3), require (2), default, (2), public (1), let (1)
> **UI Navigation:** click on (5), drag and drop (2), go to (1)
> **Definitions:** is a  (2), stands for (1), means that (1), is an  (1)
> **Analogies:** similar to (1), just like (1), such as (1)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### Blob storage on Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=1)** - [Instructor] In this demo, I'll give you a quick overview of object storage functionality on Azure.
>
> **[0:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=5)** Now, on both Google and S3, you created a bucket and stored objects within that bucket.
>
> **[0:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=11)** On Azure, things work a little differently.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=13)** In Azure, you create containers for blob storage within a storage account.
>
> **[0:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=18)** A storage account is just a container for managing all kinds of data objects, blobs, files, queues, tables, and disks.
>
> **[0:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=26)** The storage account serves as an additional name space for your data.
>
> **[0:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=30)** Now, here in the Azure portal, I'm going to search for Storage accounts.
>
> **[0:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=34)** Click through, and you can see, I have a number of storage accounts already created for my other projects.
>
> **[0:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=39)** I'm now going to create a new one.
>
> **[0:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=42)** Every resource that you provision in Azure needs to live within a resource group, which is just a container or grouping for resources.
>
> **[0:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=49)** I'm going to create a new resource group, within which, I'll create the storage account, the resource group is called loony-data-rg.
>
> **[0:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=57)** Next, you need to specify a Storage account name.
>
> **[0:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=59)** There are some limitations as to its naming, for example, you can't use dashes or underscores, and then you specify the region where the storage account lives.
>
> **[1:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=68)** This is the region where your data will be stored, I've stuck with the East US 2.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=73)** The primary service here is not a required setting, but it's useful if you want service specific guidance on how to configure your storage account.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=82)** If you look at the options here for Primary service, notice, we have Azure Block Storage or Azure Data Lake Storage Gen 2.
>
> **[1:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=90)** This is the recommended service for AI workload, so I'm going to go ahead and select that.
>
> **[1:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=95)** Now, of course, you can select what kind of performance you want from your storage account.
>
> **[1:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=99)** We'll stick with Standard performance, but if you need very low latency, go with the Premium performance.
>
> **[1:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=105)** Depending on how critical it is to have your data always available, you can pick between these redundancy options.
>
> **[1:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=113)** Locally-redundant storage is the lowest cost, but it does not protect against data center failures.
>
> **[1:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=119)** And the last option below, Geo-zone-redundant storage is the highest cost, but gives you high redundancy.
>
> **[2:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=126)** I'm just going to stick with the default Geo-redundant storage and intermediate option.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=131)** These are the only required properties for your storage account, but I'm going to hit Next and show you a property that you might want to configure for big data and analytics workloads, and that is hierarchical namespaces.
>
> **[2:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=144)** We've seen this option before on Google Cloud storage as well.
>
> **[2:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=147)** This will give you high performance for your analytics and AI/ML workloads, and it's a recommendation that you have this checked if you're going to be storing data for AI or ML.
>
> **[2:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=158)** Go ahead and hit Review and create.
>
> **[2:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=162)** Azure will validate the settings for your storage account, and you'll be presented with a Create button that you can then click.
>
> **[2:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=169)** And in a few moments, your storage account resource will be available for you to use.
>
> **[2:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=174)** You can use storage accounts to store different types of data, files, queues, and blobs.
>
> **[3:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=180)** But for AI workloads, you'll primarily be working with blob storage.
>
> **[3:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=184)** Notice that we have data lake storage and hierarchically namespace enabled.
>
> **[3:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=189)** If you click on Data Lake Storage here, you'll see that you're taken to a page where you can create containers.
>
> **[3:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=194)** Blobs on Azure are stored within containers, and you can think of containers as equivalent to the buckets that we worked with on S3 and Google Cloud.
>
> **[3:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=203)** I'm going to go ahead and click on + Container and Create a new container within my storage account.
>
> **[3:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=209)** I've called this loony-data-container.
>
> **[3:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=213)** Click on Create, and once the container has been created, you can click through and upload data to this container using the UI, or using REST APIs or SDKs.
>
> **[3:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=224)** Just like Google Cloud and AWS, Azure offers extensive tools that you can use to transfer data from on-premise systems or from other cloud platforms into Azure blob storage.
>
> **[3:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=235)** For this demo, we'll just use the UI to upload data into this container.
>
> **[3:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=239)** Once you click on the Upload button, you'll be presented with a right sidebar where you can drag and drop your files.
>
> **[4:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=246)** And once you've done this, all you need to do is click on the Upload button, and this data will be uploaded to your blob storage container.
>
> **[4:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=254)** Observe that blobs have an access tier.
>
> **[4:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=257)** So if your data is hot, that is data that's going to be accessed frequently, that will be the access tier.
>
> **[4:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=263)** Azure offers the cool access tier for data that's accessed about once a month, or the archive access tier for data that's going to be accessed, say once in six months.
>
> **[4:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=273)** You can organize your data within containers using directories.
>
> **[4:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=277)** Click on Add Directory, and I'm going to create a new directory called Images that I'm going to upload some image data.
>
> **[4:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=284)** Once the directory has been created, you can click through, and you'll be presented with an Upload option.
>
> **[4:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=289)** Click on Upload and you can drag and drop files here to the right sidebar in order to upload the data that you want within this directory inside your blob storage container.
>
> **[5:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=302)** You can click on the objects that you uploaded here to blob storage in order to access their properties.
>
> **[5:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=308)** The properties will be available in the right sidebar, and you can see the URL, that is the unique URL to your blob within the storage account and within this container.
>
> **[5:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=320)** Azure Blob Storage thus allows you to store data in all formats, whether structured, unstructured, or semi-structured.
>
> **[5:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/blob-storage-on-azure?u=76281980&t=328)** And if you want to use your data for analytics, workloads, make sure you enable hierarchical name spaces for faster access to your data, and pick the right redundancy option based on how critical it is to have your data always available.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), drag and drop (2)
> **Env Vars:** url (2), rest (1), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** configure (2)
> **Code Keywords:** this, (1)
> **Tools:** azure portal (1)
> **Definitions:** is called (1)


### 3. Vector Databases and RAGs

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Retrieval-augmented generation
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=1)** - [Instructor] Generative AI models have made popular a new kind of database, the vector database used in RAGs, or retrieval augmented generation.
>
> **[0:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=11)** Let's understand what this means.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=13)** First, let's talk about generative AI.
>
> **[0:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=15)** This is a type of AI that creates new content that can be text, images, or audio by learning patterns from existing data.
>
> **[0:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=23)** We worked with generative models such as ChatGPT, and Gemini, and we know that they're prone to making mistakes.
>
> **[0:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=30)** These models rely on their training data and their responses can contain inaccuracies, biases, or outdated information when applied to scenarios requiring real-time or domain-specific knowledge, which is exactly why RAG or retrieval augmented generation is such a powerful technique.
>
> **[0:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=49)** A RAG combines a pre-trained language model with an external retrieval system or database to generate contextually accurate and up-to-date responses.
>
> **[1:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=60)** This makes RAGs great for AI tasks that require accurate, up-to-date, or domain-specific information as they combine the generative capabilities of AI with the precision of external knowledge retrieval.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=73)** There are two basic components of a RAG.
>
> **[1:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=75)** The first is retrieval.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=77)** The data that the rag uses to respond to your query comes from an external knowledge base that has up-to-date accurate data.
>
> **[1:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=86)** That is the retrieval phase.
>
> **[1:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=87)** This retrieved data is then passed to your generative model, which then uses this information to respond to the user's query.
>
> **[1:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=95)** That is the generation phase.
>
> **[1:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=97)** Here is an overview of how a RAG model, or a retrieval augmented generation model works.
>
> **[1:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=103)** Let me break this down so you understand what exactly is going on.
>
> **[1:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=107)** Now, you have data in an external database that you'd like to query using natural language.
>
> **[1:53](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=113)** This data can be either structured or unstructured.
>
> **[1:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=117)** Now, this data needs to be made available to the generative model, and this is done by pre-processing this data into manageable chunks for better retrieval and embedding.
>
> **[2:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=128)** Both structured and unstructured data are divided into smaller, coherent chunks for processing.
>
> **[2:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=135)** These chunks are then passed through a text embedding model, and these embeddings are stored in a vector database.
>
> **[2:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=143)** Now, I used a bunch of terms here, embeddings and vector database, and I haven't really defined them. Let me do so now.
>
> **[2:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=149)** You cannot run semantic searches on your text or image data using the raw data, the raw text or the raw images.
>
> **[2:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=158)** In order to get meaningful results for your query, you need to convert this data into representations that can be queried, and these representations are embeddings.
>
> **[2:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=168)** Embeddings are numerical vector representations of text and images that capture the meaning of the original data.
>
> **[2:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=176)** Because these embeddings are high dimensional numeric vectors, they need to be stored in a special database called a vector database.
>
> **[3:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=185)** This database allows efficient retrieval of relevant chunks when a query is made.
>
> **[3:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=190)** When a user query is input, the system converts the query into a vector using the same embedding model that was used to generate the embeddings stored in the vector database.
>
> **[3:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=202)** Those are the embeddings for the knowledge base or the external database.
>
> **[3:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=206)** The retrieval phase then searches the vector database for the most semantically relevant chunks and retrieves these relevant chunks for use in response generation.
>
> **[3:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=215)** The retrieved chunks from the vector database are fed into a large language model such as GPT or Claude to generate a contextually accurate and coherent response based on both the retrieved information and the pre-trained knowledge of the model.
>
> **[3:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=229)** RAGs thus use external data sources for grounding, ensuring that the responses of the LLMs are accurate, contextually relevant, and factually correct.
>
> **[4:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=240)** RAGs reduce the risk of hallucinations, commonly seen in standalone generative models.
>
> **[4:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=246)** Unlike static pre-trained models, RAGs can retrieve the latest information from external databases or knowledge bases, keeping model responses current and reflective of a real-time data.
>
> **[4:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=258)** By connecting to a custom knowledge base, the RAG provides domain-specific expertise such as maybe legal documents or medical literature that goes beyond the general knowledge of large language models.
>
> **[4:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=270)** The use cases of RAGs are plenty.
>
> **[4:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=273)** They're applicable in a variety of domains, including customer support, legal research, healthcare queries, and personalized content generation.
>
> **[4:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/retrieval-augmented-generation?u=76281980&t=282)** By leveraging external storage, that is the vector databases and retrieval, the use of the RAG minimizes the need for fine-tuning large language models, and this reduces the training costs for organizations.

> [!info]- Semantic Content
>
> **Env Vars:** rag (6), gpt (1)
> **Code Keywords:** let (4), require (1), static (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Vector databases and embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=1)** - [Instructor] Vector databases are an important component of the RAG architecture, so let's understand them in more detail.
>
> **[0:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=7)** A vector database is a system that stores data as high-dimensional numeric vectors.
>
> **[0:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=13)** Vector representations of data capture semantic meaning and relationships of that data with other bits of data, and vector databases does enable similarity searches based on the semantic meaning and relationship between data points.
>
> **[0:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=28)** Vector databases store vector embeddings.
>
> **[0:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=31)** Vector embeddings are high dimensional numeric representations of data where the data can be text, images, or audio, and these representations are generated by machine learning models, and they represent the semantic meaning or features of the data.
>
> **[0:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=47)** Each embedding is a vector of fixed dimensions, 256, 512, 768, 1024, and so on, where each number represents a specific learned feature from the underlying data.
>
> **[1:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=60)** Higher dimensions capture more complex relationships, but of course require more computational resources.
>
> **[1:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=67)** Embeddings enable efficient similarity searches by comparing the geometric relationships or distances between vectors in the database.
>
> **[1:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=76)** Similar vectors that are closer together in space represent semantically related data points.
>
> **[1:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=82)** These vector embeddings are generated using pre-trained models like BERT, OpenAI embeddings, or domain specific neural networks, which encode raw data into vector forms.
>
> **[1:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=93)** These embeddings need to be stored in special databases.
>
> **[1:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=96)** Those are our vector databases.
>
> **[1:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=98)** Examples include Pinecone, Milvus, et cetera, which enable fast retrieval of vectors.
>
> **[1:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=104)** Search queries are converted into embeddings and compared to stored vectors using metrics like cosine similarity or Euclidean distance.
>
> **[1:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=112)** Embeddings capture a lot of information about the input data.
>
> **[1:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=116)** The first is the semantic meaning.
>
> **[1:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=118)** This can be words in a sentence or objects in an image.
>
> **[2:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=121)** For example, in text embeddings, words with similar meanings like cat and feline will have vectors closer in the embedding space.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=131)** Embeddings capture contextual relationships between elements in the data.
>
> **[2:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=135)** For example, text embeddings can capture how words relate to one another in a sentence.
>
> **[2:21](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=141)** For example, the word bank in riverbank has a different relationship than the word bank in financial bank.
>
> **[2:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=149)** Vectors are made of high dimensional features.
>
> **[2:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=152)** These features are not easily interpretable, but represent important patterns in the data.
>
> **[2:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=157)** For images, this could be edges, textures, shapes.
>
> **[2:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=160)** For text, this could be syntactic and semantic nuances.
>
> **[2:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=165)** Data points that are semantically or visually similar have embeddings that are close in vector space.
>
> **[2:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=172)** For example, king and queen might be close together in vector space, but king and say car will be far apart.
>
> **[2:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=179)** Embedding models can also capture domain-specific features.
>
> **[3:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=183)** These are specialized features relevant to the specific type of input data.
>
> **[3:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=187)** For example, embeddings on genomic data will capture sequence patterns, while audio embeddings will capture which tone and rhythm.
>
> **[3:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=196)** You can generate embeddings for all types of data.
>
> **[3:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=199)** For example, embeddings will convert sentences, phrases, or words into numerical vectors that capture their meaning and relationships.
>
> **[3:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=206)** This is useful for semantic search, question answering, and sentiment analysis.
>
> **[3:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=211)** You can generate embeddings for images as well.
>
> **[3:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=213)** This will convert visual features into embeddings that represent patterns, textures, and the semantic content of the image.
>
> **[3:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=221)** These embeddings can be used for reverse image search, object detection and classification style matching.
>
> **[3:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=227)** Embeddings for audio data converts sound waves or features such as pitch and tone into embeddings for tasks requiring auditory analysis.
>
> **[3:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=236)** This can be used for speech recognition and music recommendation systems.
>
> **[4:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=240)** Embeddings on video data will combine image and temporal features into embeddings that represent motion scenes or sequences.
>
> **[4:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=249)** These embeddings can be used for video similarity search, content recommendation, and scene detection.
>
> **[4:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=255)** Embeddings have very high dimensionality.
>
> **[4:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=257)** They're typically 256, 512, or 1024 elements in length.
>
> **[4:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=263)** But here is an example of embeddings generated and represented using three-dimensional vectors.
>
> **[4:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=268)** These are embeddings for words.
>
> **[4:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=271)** Notice that the word apple and banana are close together in space because they both represent fruits.
>
> **[4:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=277)** Let's say your input query contains the word kitten.
>
> **[4:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=280)** It would retrieve documents that have words similar to kittens, such as cat, dog, or wolf.
>
> **[4:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/vector-databases-and-embeddings?u=76281980&t=286)** Notice all of these embeddings are close together in vector space.

> [!info]- Semantic Content
>
> **Analogies:** for example (6), such as (2)
> **Code Keywords:** let (2), require (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** cat (2)
> **Env Vars:** rag (1), bert (1)
> **Speakers:** - [instructor] (1)

#### Semantic search with Pinecone
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=1)** - In this demo, we'll see a simple example of how you can generate embeddings from your text data.
>
> **[0:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=5)** Store that in a vector database and then ask questions of your data.
>
> **[0:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=10)** You'll see that the Vector database matches the embeddings of your questions, the embeddings of the responses to give you fairly accurate responses.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=19)** Now, the vector database that we work within this demo is the free trial of the Pinecone database.
>
> **[0:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=25)** Head over to app.[pinecone.io](https://pinecone.io).
>
> **[0:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=28)** Pinecone is a very popular vector database designed for storing, indexing and querying, high dimensional vector embeddings.
>
> **[0:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=34)** Very commonly used in AI and ML applications.
>
> **[0:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=37)** All you need to do here is create an account and set up a vector search index.
>
> **[0:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=41)** I'm going to log in with my Google account.
>
> **[0:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=43)** So I continue with Google and just use my logged in user account to create an account with Pinecone.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=51)** Now you can customize your Pinecone setup, but really, you don't need to do anything.
>
> **[0:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=55)** I just specify the name of my company.
>
> **[0:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=57)** We'll be using the Python programming language to interact with the database, so that's what I've selected and I hit continue.
>
> **[1:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=64)** Then it asks me what I plan to build with Pinecone.
>
> **[1:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=66)** Well, I'm just exploring at this point in time.
>
> **[1:08](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=68)** That's what I've selected.
>
> **[1:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=70)** And how many documents are you looking to retrieve over, less than a 100K.
>
> **[1:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=73)** Because basically this is a demo.
>
> **[1:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=75)** We'll just work with a few sentences. Hit continue.
>
> **[1:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=78)** You can say that I have an embedding model, meaning, we'll generate embeddings using an embedding model and store that in Pinecone.
>
> **[1:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=85)** Let's get started.
>
> **[1:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=87)** As soon as you log in, Pinecone will give you an API key.
>
> **[1:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=91)** Make sure you copy this key over and save it safely somewhere because really this is the only time that you'll see this key.
>
> **[1:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=99)** Once you log in, you'll see the steps that you need to follow in order to work with Pinecone using the Python programming language.
>
> **[1:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=105)** You can see the first thing you need to do, is install the Pinecone Library.
>
> **[1:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=109)** I'm going to copy that over, the remaining steps here.
>
> **[1:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=112)** Well, I'll walk through that on our own custom data in a notebook.
>
> **[1:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=116)** Let's head back to our notebook here.
>
> **[1:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=119)** I have a notebook running Python 3.
>
> **[2:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=122)** As long as you have a recent version of Python, Python 3.8, 3.9, 3.10. That should work.
>
> **[2:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=127)** We've installed the Pinecone Library.
>
> **[2:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=129)** This is what we'll use to interact with the Pinecone Index that we'll create on the server.
>
> **[2:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=134)** Next, I set up the imports for the Pinecone client.
>
> **[2:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=138)** That's just called Pinecone and Serverless Spec.
>
> **[2:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=140)** That's what I use to specify the specification of my index.
>
> **[2:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=144)** In order to work with the vector index, you need to initialize the Pinecone client, which I do on line 1 and pass in your API key.
>
> **[2:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=151)** So make sure you replace my API key with yours.
>
> **[2:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=154)** I'm going to call pc.list_indexes here.
>
> **[2:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=157)** We haven't created any vector indexes yet.
>
> **[2:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=159)** You can see this is empty.
>
> **[2:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=161)** A vector index is basically a search index over your embedding data.
>
> **[2:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=166)** It stores embeddings efficiently and enables similarity based retrieval or filtering.
>
> **[2:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=172)** I'll now programmatically create our first index on Pinecone.
>
> **[2:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=175)** The index name is simple-sentence-index and I call pc.create_index.
>
> **[3:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=180)** Specify the index name.
>
> **[3:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=182)** The dimension here gives us the dimensionality of the vector embeddings to be stored in that index.
>
> **[3:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=187)** The metric here is the similarity metric that will be used by the index to find similar embeddings, and I'm going to place this Pinecone vector database with the AWS cloud in the region us-east-1.
>
> **[3:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=200)** After calling create index, if you were to list the indexes, you'll see that our simple-sentence-index has been successfully created, and it's ready to be used and we can verify that this index has been created on the Pinecone console.
>
> **[3:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=214)** Originally, the console was completely empty, and if you hit refresh, you can see our newly created simple-sentence-index there, and if you click on connect, you'll see the Python code that can be used to connect to this index.
>
> **[3:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=227)** Upload data to this index and query this index.
>
> **[3:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=230)** This is the code that we are going to be writing shortly.
>
> **[3:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=232)** If you click through to the index, you'll see that it's currently empty and that it was created in the AWS region, us-east-1.
>
> **[4:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=240)** The embeddings in a Pinecone index are partitioned into namespaces, and you can see we have the default namespace that has already been set up, but there are no vectors indexed in this namespace.
>
> **[4:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=253)** Well, we'll fix that soon enough.
>
> **[4:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=254)** These are the sentences that make up my data, and I'm going to generate high dimensional numeric embeddings for these sentences and upload those embeddings to the Pinecone index.
>
> **[4:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=266)** The Pinecone client offers an inference API to generate embeddings for these sentences.
>
> **[4:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=272)** I call pc.inference.embed.
>
> **[4:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=275)** Specify the model to generate embeddings.
>
> **[4:37](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=277)** That's the multilingual e5 large model.
>
> **[4:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=280)** The dimensionality of these embeddings should be 1024, because that's what we have specified when we created our index.
>
> **[4:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=287)** In the inputs parameter, I pass in the list of sentences for which I want to generate embeddings, and the parameters specify how the model should handle inputs longer than the length that it supports.
>
> **[4:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=299)** The end parameter indicates that the input should be truncated at the token limit of the model.
>
> **[5:05](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=305)** The embeddings variable should contain, a list of the generated embeddings.
>
> **[5:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=310)** Observe, we have multiple embeddings here, one for each sentence and each embedding is a high dimensional vector.
>
> **[5:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=317)** Let's use a subscript to access the very first of these embeddings and then print that out to screen and you can see that it's values represent the high dimensional vector for our sentence.
>
> **[5:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=328)** And if you see the length of values, they should be equal to 1024.
>
> **[5:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=332)** These are the embeddings I'm going to use to populate my index.
>
> **[5:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=335)** Now, before you populate your index, make sure that its status is ready.
>
> **[5:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=339)** You might have to wait for this.
>
> **[5:41](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=341)** I've slept and the index was ready.
>
> **[5:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=343)** The index seems to be ready to be populated.
>
> **[5:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=345)** I now gather all of the embedding vectors into a single array of objects.
>
> **[5:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=351)** The ID field contains the unique ID for the vector.
>
> **[5:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=354)** The values field contains the actual numeric embedding and the metadata field contains the original sentence that was used to generate the embedding.
>
> **[6:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=363)** This gives us the vector representations in the form of list of objects for our 20 sentences.
>
> **[6:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=369)** We are now ready to populate the index using these vectors.
>
> **[6:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=373)** On line 1, I get a reference to the index on Pinecone and I call index.upsert and pass in the vectors.
>
> **[6:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=380)** And I've also specified that these vectors should be populated in the sentence_ns namespace.
>
> **[6:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=387)** And there is a message that says that 20 vectors were upserted.
>
> **[6:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=392)** Now let's make sure that these vectors are available in our sentence namespace.
>
> **[6:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=396)** I'm going to run describe index stats, and you can see that the total vector count is currently zero and there are no name spaces.
>
> **[6:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=403)** I would take some time for the namespaces to be populated within an index, so you may have to rerun this particular, describe_index_stats.
>
> **[6:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=412)** And once you see the total vector count to be a non-zero value and your namespace there.
>
> **[6:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=417)** Well that means your sentences are now available within the Pinecone index that we had created earlier.
>
> **[7:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=424)** Observe, the sentence namespace is now present here, and the number of vectors within this namespace is 20.
>
> **[7:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=431)** If you now head over to the browser tab, you'll actually be able to see the vectors that were indexed.
>
> **[7:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=437)** Notice we have the high dimensional numerical values and the metadata that contains the actual text of the individual sentences.
>
> **[7:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=446)** Now that we have our vector database and index setup, all that's left is to query our index.
>
> **[7:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=451)** Now the query here is, "what did her grandmother leave her?"
>
> **[7:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=455)** On lines 3 through 9, I use the same multilingual EFI large model to generate an embedding representation for my query.
>
> **[7:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=463)** And I pass in the embedding representation of our query and on lines 11 through 17, I query the index using the embedding representation of my question.
>
> **[7:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=474)** Notice on line 13, I pass in the embedding vector for our query.
>
> **[7:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=479)** Top_k=3 tells the index that I want the three most similar results.
>
> **[8:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=486)** Include_metadata=True will include the sentence text that was retrieved.
>
> **[8:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=491)** include_values=False will not return the vector values of the embeddings.
>
> **[8:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=496)** Let's run this.
>
> **[8:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=497)** And there you can see the very first search result gives us an answer to our question.
>
> **[8:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=502)** Our question was about what the grandmother left a person.
>
> **[8:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=506)** And you can see the first answer talks about the watch.
>
> **[8:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=510)** The other answers are clearly not very relevant.
>
> **[8:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=512)** Let's change our query. "What was hanging from the tree?"
>
> **[8:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=516)** That's my question. And here is the response.
>
> **[8:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=518)** "The bat hanging from the tree startled the children."
>
> **[8:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=522)** Let's try this one more time with a third query.
>
> **[8:43](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=523)** "Where did the village get water?"
>
> **[8:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=527)** If you take a look at the responses, the first response is perfect, but observe that the second response also talks about water in a way, without proper hydration.
>
> **[8:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/semantic-search-with-pinecone?u=76281980&t=537)** Vector databases are thus able to use embedding representations of text to perform similarity searches on your data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (5), continue (3), this. (2)
> **CLI Commands:** python (6), make (5), aws (2), find (1)
> **Env Vars:** api (4), aws (2), efi (1)
> **Prerequisites:** set up (3), setup (2), install (1)
> **Code Identifiers:** list_indexes (1), create_index (1), sentence_ns (1), describe_index_stats (1), include_values (1)
> **Versions:** python 3 (2), 3.9 (1), 3.10 (1)
> **Definitions:** is a  (4)
> **Documentation:** spec (1), specification (1)


### 4. AI Workloads and Processing

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Types of AI workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=1)** - [Instructor] From storage for AI workloads, let's move on to talk about computing or processing for AI workloads.
>
> **[0:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=7)** But before we get there, let's define the different types of workloads.
>
> **[0:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=12)** A workload refers to the specific tasks, processes, or computational operations required to perform a particular function or to achieve a goal within a system.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=22)** This could be training an AI model, processing data, or generating predictions.
>
> **[0:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=28)** Here are some common AI workloads.
>
> **[0:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=30)** The first is data processing.
>
> **[0:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=32)** This involves handling, cleaning, and preparing data for analysis or model training.
>
> **[0:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=38)** Key tasks here include extracting data from diverse sources, transforming data into consistent formats, and loading it into systems for AI algorithms.
>
> **[0:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=47)** You then have machine learning workloads.
>
> **[0:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=49)** This encompasses the development, training, and deployment of algorithms that learn from data to make predictions or decisions.
>
> **[0:57](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=57)** This involves iterative processing over large data sets to adjust model parameters and enhance accuracy.
>
> **[1:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=64)** Within AI, you also have deep learning workloads.
>
> **[1:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=67)** Deep learning is a subset of machine learning, focusing on neural networks with multiple layers to model complex data patterns.
>
> **[1:15](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=75)** Here, key tasks involve training deep neural networks often requiring substantial computational resources due to how complex the models are.
>
> **[1:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=84)** Then we have generative AI workloads that involve training and deploying models to create new and realistic content by learning patterns and structures from extensive data sets.
>
> **[1:35](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=95)** These workloads include data preparation through pre-processing and augmentation, model training on specialized hardware, real-time or batch inference deployment, and evaluating outputs with iterative feedback for refinement.
>
> **[1:49](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=109)** Inference workloads exist for all kinds of model training, whether machine learning, deep learning, or generative AI.
>
> **[1:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=116)** These utilize trained AI models to make predictions or decisions based on new unseen data.
>
> **[2:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=123)** This involves deploying models in production environments to providing real-time or batch predictions.
>
> **[2:09](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=129)** Running AI workloads come with their own set of challenges.
>
> **[2:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=133)** AI workloads require extensive computational power, particularly for deep learning model training or for generative AI.
>
> **[2:20](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=140)** These depend on GPUs or TPUs for parallel processing and inference tasks that need fast data handling and high memory capacity for large data sets.
>
> **[2:31](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=151)** AI applications are getting larger by the day.
>
> **[2:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=154)** They demand scalable infrastructure that can expand storage, networking, and computational resources, to accommodate increasing data volumes and processing requirements.
>
> **[2:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=166)** Another important challenge is that of data privacy and security.
>
> **[2:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=171)** Protecting sensitive data during AI processing involves robust encryption, secure storage systems, and strict access controls to prevent unauthorized access and to safeguard against breaches or misuse.
>
> **[3:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=183)** AI models tend to degrade over time, which means maintaining model accuracy requires frequent retraining with updated data, and this tends to be resource intensive.
>
> **[3:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=194)** And in recent times, we're faced with ethical challenges as well.
>
> **[3:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=198)** We need to address issues such as bias, transparency, and accountability.
>
> **[3:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=203)** This is as essential as implementing safeguards to prevent misuse of generative AI technology and mitigating risks of harmful outputs.
>
> **[3:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=212)** Here are some special considerations to keep in mind for AI workloads.
>
> **[3:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=216)** The first is how you protect your data.
>
> **[3:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=218)** Ensure that all data both in transit and addressed is encrypted using robust encryption standards.
>
> **[3:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=224)** Make sure you implement strict access control measures such as role-based access control and multi-factor authentication to limit who can access AI models and data.
>
> **[3:55](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=235)** This reduces the risk of insider threats and unauthorized access.
>
> **[3:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=239)** Ensure that you protect AI models from theft and tampering by encrypting model files and employing secure deployment practices.
>
> **[4:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=247)** Use techniques like differential privacy to safeguard sensitive data during model training and defend against adversarial attacks that attempt to manipulate AI models by introducing malicious inputs.
>
> **[4:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=259)** Another important point to keep in mind for enterprise AI applications is compliance and auditing.
>
> **[4:26](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=266)** Make sure that you're compliant with relevant regulations and standards such as the GDPR, HIPAA, or CCPA.
>
> **[4:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=272)** Make sure you regularly audit AI systems and processes to detect and mitigate potential security vulnerabilities.
>
> **[4:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=280)** Continuously monitor AI systems for unusual activities or anomalies that could indicate security breaches.
>
> **[4:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=287)** Make sure you develop and implement a robust incident response plan to quickly address and mitigate any security incidents.
>
> **[4:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=294)** Model training and deployment are likely to involve third-party tools.
>
> **[4:59](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=299)** Make sure you verify the security of these third-party tools and libraries used in AI workflows.
>
> **[5:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/types-of-ai-workloads?u=76281980&t=304)** Make sure the components are regularly updated and patched to protect against known vulnerabilities.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8)
> **Code Keywords:** let (2), function (1), require (1)
> **Env Vars:** gdpr (1), hipaa (1), ccpa (1)
> **Analogies:** such as (3)
> **Definitions:** refers to (1), is a  (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### Best practices to optimize AI workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=1)** - [Instructor] Let's now discuss some of the best practices that you can follow to optimize your AI workload.
>
> **[0:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=6)** Make sure you utilize advanced computing systems with high performance GPUs, TPUs, or other accelerators to enhance the efficiency and speed of AI training and inference tasks.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=19)** Leverage parallelization and distributed computing.
>
> **[0:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=22)** Distribute AI workloads across multiple nodes using frameworks like TensorFlow Distributed or Horovod to significantly reduce training times and optimize resource usage.
>
> **[0:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=33)** Adopt data pre-processing pipelines.
>
> **[0:36](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=36)** Streamline your data pre-processing with tools like Apache Spark, TensorFlow data APIs, or custom ETL pipelines to efficiently clean, normalize, and prepare data.
>
> **[0:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=47)** Optimize your networking infrastructure, and we discuss this while discussing storage systems as well.
>
> **[0:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=52)** Make sure you have low latency, high bandwidth connectivity for distributed AI workloads by investing in optimized networking solutions such as InfiniBand or high-speed ethernet.
>
> **[1:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=63)** Optimize hyperparameters and models.
>
> **[1:06](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=66)** Implement automated hyperparameter tuning and apply techniques like model pruning or quantization to improve model efficiency and speed without compromising accuracy.
>
> **[1:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=77)** Deploy models strategically, make use of edge computing for latency-sensitive inference tasks while relying on centralized cloud-based infrastructure for large scale training or batch processing.
>
> **[1:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=89)** We'll dive a little deeper into each of these options.
>
> **[1:33](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=93)** High-performance computing systems, HPCs, significantly reduce the time required to train complex AI models by leveraging parallel processing capabilities.
>
> **[1:42](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=102)** HPC environments enable fast data processing and analysis, making them ideal for AI workloads that involve massive datasets.
>
> **[1:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=111)** Integrating GPUs and TPUs into high-performance systems boosts computational speed and supports advanced machine learning and deep learning algorithms efficiently.
>
> **[2:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=122)** Parallelization divides AI tasks into smaller parts that are processed simultaneously across multiple nodes, reducing training and data processing times.
>
> **[2:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=131)** Distributed computing, on the other hand, spreads AI workloads across interconnected systems, allowing efficient handling of larger datasets and more complex algorithms without hardware bottlenecks.
>
> **[2:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=144)** Use tools like TensorFlow or Apache Spark to streamline parallelization and distributed computing by automating task distribution across CPUs or GPUs.
>
> **[2:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=154)** Make sure your training data can grow over time by storing it in elastic, scalable storage systems, which offers high throughput and low latency.
>
> **[2:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=164)** Ensure that data pre-processing is not done in a ad hoc manner, and you make use of pre-processing pipelines to automate tasks such as removing duplicates, handling missing values, and filtering irrelevant data.
>
> **[2:56](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=176)** Pipelines can be used to standardize data formats, scale numerical features, and extract meaningful attributes.
>
> **[3:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=183)** And all of these will help improve the performance and accuracy of your AI models.
>
> **[3:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=187)** Make use of distributed pre-processing using special tools like Apache Spark and the TensorFlow data API.
>
> **[3:14](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=194)** These enable pre-processing across large datasets in a distributed manner, reducing the time required to process this data.
>
> **[3:23](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=203)** Make sure your data and compute resources are close by and the network infrastructure is optimized.
>
> **[3:28](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=208)** Make use of high-speed networking solutions like InfiniBand and Ethernet to support high-bandwidth communication and faster data synchronization.
>
> **[3:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=218)** Advanced networking technologies support the scaling of AI applications by maintaining performance as computational power and data volumes grow.
>
> **[3:48](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=228)** Network virtualization and software-defined networking enhance flexibility by allowing dynamic allocation of network resources to meet the demands of AI workloads.
>
> **[3:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=238)** Automated hyperparameter tuning use tools like Optuna, Retune, or Hyperopt that optimize hyperparameters systematically, enhancing model performance while reducing the time and effort required for manual experimentation.
>
> **[4:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=253)** Leverage techniques like pruning to remove unnecessary model parameters and use quantization to reduce precision in model weights.
>
> **[4:21](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=261)** These lower your computational requirements and improve inference speed without significantly impacting model accuracy.
>
> **[4:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=269)** Deploy your models strategically.
>
> **[4:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=272)** When you deploy models on edge devices, this allows ultra low latency for inference tasks, making it ideal for applications like autonomous vehicles, IoT devices, or real-time video analytics where immediate responses are critical.
>
> **[4:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=286)** Make use of cloud-based infrastructure for scalability.
>
> **[4:50](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/best-practices-to-optimize-ai-workloads?u=76281980&t=290)** Centralized cloud platforms provide the computational power and scalability needed for large-scale training and batch processing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), apache (3)
> **Env Vars:** etl (1), hpc (1), api (1)
> **Analogies:** such as (2)
> **Prerequisites:** make sure you have (1), required to (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### AI workloads on the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=1)** - [Instructor] AI workloads are generally run on cloud platforms because it's only on the cloud that you get the scalability and high performance that you need while training AI models.
>
> **[0:11](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=11)** So what are some of the products or services that you'd leverage on the cloud to train AI models?
>
> **[0:17](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=17)** Let's quickly recap the steps involved in an AI workflow, and then we'll talk about the computational resources that can be used.
>
> **[0:24](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=24)** The first is ingestion and analytics on data, we have data processing and storage.
>
> **[0:29](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=29)** Then we have machine learning, high performance computing for deep learning and generative AI models, and then deployment and inference.
>
> **[0:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=38)** Let's discuss the options available on the three major cloud platforms for these different stages in the AI workflow.
>
> **[0:46](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=46)** Just a heads up that I'll only be discussing a few of the major services on the different clouds.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=51)** Each cloud platform offers a plethora of services for working with data and for building and training AI models.
>
> **[0:58](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=58)** It would be impossible to list them all here For ingestion and analytics, if you're working on AWS, you'll use Amazon Kinesis, a real-time data streaming service for ingesting and processing large amounts of streaming data from various sources.
>
> **[1:12](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=72)** You'll use Amazon Redshift, a fast scalable data warehouse for running complex queries on large data sets.
>
> **[1:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=79)** If you're working on Azure, you'll use Azure Event Hubs, a real-time data ingestion service for streaming data at scale, allowing you to ingest data from various sources.
>
> **[1:30](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=90)** You'll use Azure Synapse Analytics, a unified analytics platform that integrates big data and data warehousing capabilities.
>
> **[1:38](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=98)** On Google's Cloud, you'd use Google Pub/Sub, a messaging service for real time event ingestion and delivery at scale.
>
> **[1:44](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=104)** And you'd use BigQuery, a fully managed serverless data warehouse for running fast SQL-like queries on large dataset.
>
> **[1:52](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=112)** On AWS for data processing and storage, you'd use AWS Glue, a fully managed EPL extract, transform, load service for data preparation and integration.
>
> **[2:03](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=123)** You'd use Amazon S3, scalable object storage for unstructured data, ideal for analytics and backup.
>
> **[2:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=130)** On Azure, you'd use Azure Data Factory, a cloud-based EPL and data integration service for orchestrating and automating data flows.
>
> **[2:18](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=138)** And you'd store your data in Azure Blob Storage, scalable object storage for unstructured data like images, videos, and backups.
>
> **[2:27](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=147)** On the Google Cloud, you'd use Cloud Dataflow, a fully managed service for stream and batch processing using Apache Beam, and you'd store your data in Google Cloud storage, the unified object storage for structured and unstructured data.
>
> **[2:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=160)** For training your machine learning and deep learning models on Amazon, you'd use Amazon SageMaker, a comprehensive platform for building, training and deploying ML models at scale.
>
> **[2:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=171)** You may also choose to use AWS Deep Learning AMIs, which are preconfigured machine images with popular deep learning frameworks like TensorFlow, PyTorch, and MXNet for training and Inference.
>
> **[3:02](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=182)** On Azure, you can train ML models using Azure Machine Learning, a cloud platform for building, training and deploying machine learning models with automated ML and drag and drop tools.
>
> **[3:13](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=193)** Or you may choose to use Azure Cognitive Services, which offers rebuilt APIs for vision, speech, language, and decision-making tasks.
>
> **[3:22](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=202)** On Google, you train your AI models using Vertex AI, an end-to-end machine learning platform for managing dataset, building models, and deploying them at scale.
>
> **[3:32](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=212)** Or you may choose to use Cloud AutoML, a suite of machine learning tools that allows users to build custom models with minimal ML expertise.
>
> **[3:40](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=220)** For high performance computing on AWS, you can choose the AWS ParallelCluster, which is a fully managed service to deploy and manage HPC clusters in the cloud.
>
> **[3:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=231)** Or you can work with Elastic Fabric Adapter, a network interface for tightly coupled HPC workloads, requiring low latency and high throughput communication.
>
> **[4:00](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=240)** On Azure, the Azure CycleCloud is a tool for creating, managing, and optimizing HPC clusters in the cloud.
>
> **[4:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=247)** And HBv3 virtual machines gives you high performance VMs with InfiniBand connectivity designed for demanding HPC workloads.
>
> **[4:16](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=256)** Google offers Google Cloud HPC, a suite of services designed for running HPC workloads, including optimized compute and storage solutions.
>
> **[4:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=265)** Once your models are trained on AWS, they can be deployed using Amazon's SageMaker Endpoints, which provide scalable real time inference.
>
> **[4:34](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=274)** For batch inference, AWS batch can be used to process large volumes of data.
>
> **[4:39](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=279)** On Azure, AKS or Azure Kubernetes Service allows you to deploy AI models in a scalable and manageable environment.
>
> **[4:47](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=287)** And Azure Batch is a managed service for running large scale parallel and batch computing jobs tailored for HPC applications.
>
> **[4:54](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=294)** On Google, you can deploy your ML models using Vertex AI prediction, a fully managed service for deploying ML models for real time or batch inference with auto-scaling capabilities.
>
> **[5:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/ai-workloads-on-the-cloud?u=76281980&t=307)** Or you can use Google Kubernetes Engine or GKE, a managed Kubernetes service for deploying containerized AI models with high scalability and flexibility.

> [!info]- Semantic Content
>
> **Env Vars:** aws (8), hpc (7), epl (2), sql (1), aks (1)
> **CLI Commands:** aws (8), apache (1)
> **Code Keywords:** let (2), pub (1), interface (1)
> **Definitions:** is a  (3)
> **UI Navigation:** drag and drop (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=1)** - [Instructor] And this brings us to the very end of the course on scalable data storage and processing for AI workloads.
>
> **[0:07](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=7)** Let's quickly summarize what we covered in this course.
>
> **[0:10](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=10)** We started off by discussing the different types of data that you would have to work with and the storage requirements for these data types when you're running AI workloads.
>
> **[0:19](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=19)** We then discuss how you would choose the right storage system for different stages in the AI pipeline.
>
> **[0:25](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=25)** We then moved on to discussing vector databases, a specialized kind of database that's used in retrieval augmented generation and finally, we discussed the different types of AI workloads and the kind of compute solutions that would be used to enable AI processing and with that, it's time for me to call it a day.
>
> **[0:45](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=45)** Now, if you're interested in studying further, here are some other courses on LinkedIn Learning that you might find interesting.
>
> **[0:51](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=51)** A natural next step would be to study advanced data processing, Batch, Real-time and Cloud Architectures for AI or [[Secure Data Management for AI Implementation]] and that's it from me here today.
>
> **[1:04](https://www.linkedin.com/learning/scalable-data-storage-and-processing-for-ai-workloads/summary-and-next-steps?u=76281980&t=64)** I hope you enjoyed this course. Thank you for listening.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** we covered (1), we discussed (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Data Processing
- AI Software Development
- Artificial Intelligence (AI)
- Data Storage

## Path Context

### In [[Working with Data- Collecting, Processing, and Storing Data for AI]]
← [[Secure Data Management for AI Implementation]] | **5 of 6** | [[Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI]] →

## Appears In

- [[Working with Data- Collecting, Processing, and Storing Data for AI]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)