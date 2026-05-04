---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws
url: "https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws"
duration_minutes: 50
duration: 50m
level: Intermediate
updated: 2/9/2024
learners: 71762
skills:
  - Data Streaming
  - Amazon Web Services (AWS)
  - Snowflake
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFYxkbCu6heUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707265232207?e=2147483647&amp;v=beta&amp;t=BqmAu3bGAEAjxMNoh5fRf8caE5tLQ8i-XVyeNNJG_R4"
linkedin_topic: Data Science
learning_paths:
  - '[Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)'
prev_courses:
  - '[Data Engineering Pipeline Management with Apache Airflow](Data%20Engineering%20Pipeline%20Management%20with%20Apache%20Airflow.md)'
next_courses:
  - '[Data Pipeline Automation with GitHub Actions Using R and Python](Data%20Pipeline%20Automation%20with%20GitHub%20Actions%20Using%20R%20and%20Python.md)'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":8,"total":10,"prev":"Data Engineering Pipeline Management with Apache Airflow","next":"Data Pipeline Automation with GitHub Actions Using R and Python"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - skill/data-streaming
  - skill/amazon-web-services-aws
  - skill/snowflake
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering%20Project-%20Build%20Streaming%20Ingestion%20Pipelines%20for%20Snowflake%20with%20AWS.md)

![Data Engineering Project: Build Streaming Ingestion Pipelines for Snowflake with AWS](https://media.licdn.com/dms/image/v2/D560DAQFYxkbCu6heUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707265232207?e=2147483647&amp;v=beta&amp;t=BqmAu3bGAEAjxMNoh5fRf8caE5tLQ8i-XVyeNNJG_R4)

# Data Engineering Project: Build Streaming Ingestion Pipelines for Snowflake with AWS

> As data engineers, it’s difficult to ignore the ever-growing importance and demand for streamed data. In this course, designed uniquely for experienced data professionals looking to modernize their technical skill set, join instructor and data engineer Sagar Suri as he demystifies the process of building streaming ingestion pipelines for the industry-leading lakehouse solution, Snowflake, using po

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws) | 50m | Intermediate | 72K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building streaming data pipelines](#building-streaming-data-pipelines)
  - [What you should know](#what-you-should-know)
  - [Prerequisites](#prerequisites)
- [**1. Introduction to Data Streaming, AWS, and Snowflake**](#1-introduction-to-data-streaming-aws-and-snowflake) (4 videos)
  - [Why AWS and Snowflake?](#why-aws-and-snowflake)
  - [Introduction to streaming ingestion pipelines](#introduction-to-streaming-ingestion-pipelines)
  - [Streaming data pipelines: A deeper dive](#streaming-data-pipelines-a-deeper-dive)
  - [Overview of streaming pipeline project](#overview-of-streaming-pipeline-project)
- [**2. Building a Streaming Pipeline**](#2-building-a-streaming-pipeline) (9 videos)
  - [Setting up your MSK cluster and EC2 instance](#setting-up-your-msk-cluster-and-ec2-instance)
  - [Setting up your keys](#setting-up-your-keys)
  - [What is Snowpipe?](#what-is-snowpipe)
  - [Installing Snowpipe Kafka connector](#installing-snowpipe-kafka-connector)
  - [Set up config for provider-MSK connection and create topic](#set-up-config-for-provider-msk-connection-and-create-topic)
  - [Preparing your Snowflake environment](#preparing-your-snowflake-environment)
  - [Setting up your Snowpipe Kafka connect config](#setting-up-your-snowpipe-kafka-connect-config)
  - [Sending data to Snowflake](#sending-data-to-snowflake)
  - [Final considerations](#final-considerations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course review and next steps](#course-review-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building streaming data pipelines](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=0)** - As data engineers, it's difficult to ignore the ever-growing importance and demand for stream data. In this course, we'll learn the fundamentals of streaming [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). We'll work with cutting-edge tooling, including the top cloud provider on the market, AWS, and the top cloud data platform on the market, [Snowflake](../../Skills/Data%20Science/Snowflake.md), to build a functional data stream. I'm Sagar Suri. For over a decade, I've built and run high-impact [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) programs across rapidly growing industries, including [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) and [Cybersecurity](../../Topics/Cybersecurity.md), and I'm thrilled to pass along my experiences to you. So join me as I share with you everything you need to know about streaming data pipelines. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (2), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - as (1)

#### [What you should know](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=0)** - [Instructor] Here's what you should know before starting this course. While I will provide overviews of core concepts and each step of the project, including each of the tools we use and guidance on how to get set up in those tools, it's highly recommended that you have a foundational understanding of the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) discipline, some hands-on experience with [SQL](../../Skills/Data%20Science/SQL.md) and scripting, familiarity with basic AWS concepts such as [EC2](../../Skills/DevOps/Amazon%20EC2.md) and VPCs, and an internet connection and web browser. For applicable videos, you'll find reference files in the "Related to this course" section. And you can never ask too many questions, so submit your inquiries in the Q&A section. And finally, bring your patience and a positive attitude. Let's begin with setting up prerequisites next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** sql (1), aws (1), ec2 (1)
> **CLI Commands:** aws (1), find (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Prerequisites](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=0)** - [Instructor] In order to follow along with the hands-on project in this course, you'll need to set up a few prerequisites. If you don't have access to a [Snowflake](../../Skills/Data%20Science/Snowflake.md) environment, you can set up an account on [snowflake.com](https://snowflake.com). By clicking on the start for free button and setting up an account, you'll receive a 30-day free trial, which includes $400 worth of free usage. Keep in mind, Snowflake doesn't charge you for any data ingress. However, it will charge you if you plan to transfer data to a different cloud provider than the one hosting your Snowflake instance, or if you plan to transfer data to a different region within the same cloud provider. You'll also want to make sure you have account admin access. If you don't have access to an AWS environment, you can set up an account on aws.[amazon.com](https://amazon.com). Click on the Create an AWS account button on the top right. You'll want to make sure you have administrator rights in AWS as well. If you haven't worked with AWS before, you may want to get set up with CloudWatch billing alerts to ensure you don't get surprised with a monthly bill. You can also estimate your costs using this handy cost estimator provided by AWS on calculator.aws. For this project you'll also need a VPC with a private subnet in your AWS account. If you don't have a VPC in private subnet set up already, I've provided a file with instructions. Please pause this video here
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=92)** and complete those steps before proceeding. This completes our introductory chapter. In the next chapter, we'll discuss [Data Streaming](../../Skills/DevOps/Data%20Streaming.md), AWS, Snowflake, and overview the project we'll be working on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (5), [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1)
> **CLI Commands:** aws (9), make (2)
> **Env Vars:** aws (7), vpc (2)
> **Prerequisites:** set up (5), make sure you have (2), you'll need (1)
> **URLs:** [snowflake.com](https://snowflake.com) (1), [amazon.com](https://amazon.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Warnings:** keep in mind (1)


### 1. Introduction to Data Streaming, AWS, and Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### [Why AWS and Snowflake?](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=0)** - [Instructor] The streaming project covered in this course will use services in AWS to facilitate a streaming pipeline that will land data in [Snowflake](../../Skills/Data%20Science/Snowflake.md) in near real time. We'll learn more about these technologies in this video. Snowflake is the leading modern cloud-based data platform in the industry today. Snowflake currently supports over 11,400 companies globally and can boast the largest software IPO of all time. Architecturally, Snowflake enables data engineers to build Lakehouse environments, a combination of a data warehouse and data lake due to its ability to support both structured and semi-structured data. As Snowflake is based in the cloud, it offers elasticity and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) without worrying about things like high upfront costs, performance, or complexity of managing the system. AWS is a secure [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) platform offering compute power, database storage, 360 degree tooling for your [Software Development](../../Topics/Software%20Development.md) lifecycle and other functionality to help businesses scale and grow. It was the initial cloud provider offering S3 in 2006 and has held the largest market share since its inception. Up next, I'll introduce the concept of [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) and why it is relevant today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (5), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1)
> **Env Vars:** aws (2), ipo (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to streaming ingestion pipelines](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=0)** - [Instructor] [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) are the core of a data engineer's everyday workflows. While batch pipelines have been a staple workflow in the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) space for decades, streaming data pipelines are gaining popularity with the International Data Corporation reporting that by 2025, 30% of all data generated will be near [Real-Time](../../Skills/Database%20Management/Real-Time.md). In this chapter, we'll dive deeper into streaming data pipelines. Before we get into streaming data pipelines, let's start with data pipelines, more broadly speaking. Data pipelines are the coordination of infrastructure, tools, and processes that move data from a source, such as a transaction service, or enterprise application, through the ELT process, extract, load, and transform, and into a destination. This destination could be a warehouse or lake house, such as [Snowflake](../../Skills/Data%20Science/Snowflake.md). Even further downstream, that data could be consumed by visualization tool, or ML model, or reverse ETL back into a source application, post transformation. While batch data pipelines refer to a method of processing data in large chunks, at a predetermined schedule, hence the term batch, streaming data pipelines, often referred to as open or continuous, process data in a continuous stream at real-time or near real-time. Streaming data pipelines became widely popular in the early 2000s and 2010s. Streaming data pipelines were inherently more complicated than batch pipelines. However, as cloud architecture scaled to support streaming data pipelines,
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=92)** it became easier to set up and manage. If we compare to batch data pipelines, streaming data pipelines are one continuous job, whereas batch jobs are recurring scheduled jobs. Streaming data pipelines process data in millisecond to second latency, whereas batch data pipelines, on the other hand, can be minutes or longer latency. Lastly, streaming data pipelines process events, whereas batch data pipelines process large chunks of data. In our next video, we'll dive even deeper into [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) and discuss practical use cases, considerations, and general architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (17), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1)
> **Env Vars:** elt (1), etl (1)
> **Analogies:** such as (2)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Streaming data pipelines: A deeper dive](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=0)** - [Instructor] In our previous video, we walked through an overview of streaming [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). In this video, we'll dive deeper into the anatomy of a streaming architecture, considerations and practical use cases. Let's briefly look at the core anatomy of a streaming pipeline. Streaming pipelines generally consist of a provider or set of providers. This could be your [products](../../Skills/Software%20Development/Microsoft%20Products.md) backend, your order service, or [IoT](../../Glossary/Concept/IoT.md) sensors. Your streaming platform could pull from this client or the client may publish to this via an application programming interface or API. A topic is a group of events that are related to each other to which data is published by producers. Technically speaking, a topic is a log of events that are appended only and immutable. You can think of a topic as a table name in your destination database. Of course, you have the actual event streaming service. This can be distributed for better fault tolerance or single node if you are using a service like Kafka as your event streaming platform. It also requires a sync connector to communicate with sources and destinations. Other optional pieces of your event streaming service are a schema registry to validate incoming payloads against an existing topics predefined schema or a [Real-Time](../../Skills/Database%20Management/Real-Time.md) processing layer, such as Flink. Lastly, your destination or store. This is likely a relational database or time series database, which work great for organizing time-based data such as events. Because of the complexity of streaming pipelines,
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=95)** there are several considerations you'll need to keep in mind. Retention and replay. Most event streaming platforms support the ability to set a retention period or expiration of your event logs so you can replay or reprocess events from a certain time range. Order and frequency of delivery. Because event streaming platforms can be distributed, there is a risk of delivering events out of order or more than once. Schema. Event payloads can often change, such as changes to field types or new fields. These schemas can be managed and versioned in a schema registry. Error handling. Events that may not align with the defined schema in your schema registry or tied to an existing topic may end up in the dead letter queue so they don't block other events and can be troubleshooted. And finally, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). The ability to scale horizontally across multiple servers and vertically, for example, to buffer messages if falling behind. Let's explore some real world use cases. Real world use cases for streaming data pipelines are scenarios when data freshness is needed at or near real time, and is available at or near real time. Let's walk through four sample use cases. Firstly, [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) or [Banking](../../Skills/Software%20Development/Banking.md) companies detecting fraud anomalies quick enough to stop them. In the real world, you may have two pipelines, a batch one that allows your transactions to be curated for earnings reports and analytics,
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=188)** and a second streaming pipeline that isn't cleansed and transformed solely for detecting fraud quickly. A second example is customer behavior data to inform online advertising by a social media network, for example. Thirdly, algorithmic stock day trading, and finally, IOT sensor [Data Collection](../../Skills/Data%20Science/Data%20Collection.md). Now that you have a sound understanding of [Data Streaming](../../Skills/DevOps/Data%20Streaming.md), we'll walk through an overview of the project we'll be building in this course in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (2), [IoT](../../Glossary/Concept/IoT.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** iot (2), api (1)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1), next video (1)
> **CLI Commands:** node (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### [Overview of streaming pipeline project](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=0)** - [Narrator] In this video, we'll overview this course's project so you understand the desired end state we are working towards. We'll be using MSK or Managed Streaming for Kafka. This is AWS's fully managed, highly available [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) event streaming platform. Event streaming platforms are event-driven architectures that specialize in streaming event data such as change data capture from a data provider to a destination. Generally, a [Database Management](../../Topics/Database%20Management.md) service of some sort, such as a lakehouse or a time series database. Other event streaming services include Amazon Kinesis, AWS's principle streaming service, or [Google](../../Glossary/Service/Google.md) Datastream. At a high level in this chapter, you will create a provisioned Kafka cluster, create Kafka producers and connectors, create topics in a Kafka cluster, create a [Snowflake](../../Skills/Data%20Science/Snowflake.md) database and associated permissions. Specifically, our final pipeline will consist of an AWS [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, which will serve as our producer of events for a particular topic we create. MSK will consume these events and send them through Kafka Connect to Snowflake's Snowpipe streaming service, and finally into our Snowflake instance as a table. Our EC2 instance will serve a dual purpose here by also hosting our Snowpipe Kafka Connector. We won't be building a schema registry as part of this project, but you can leverage AWS Glue Schema Registry as an add-on to this project. AWS provides detailed instructions here.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=94)** Now that we have an understanding of the project plan, let's kick off our project by setting up our MSK cluster and EC2 instance in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Database Management](../../Topics/Database%20Management.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** aws (5), msk (3), ec2 (3)
> **CLI Commands:** aws (5), apache (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)


### 2. Building a Streaming Pipeline

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up your MSK cluster and EC2 instance](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=0)** - [Instructor] We'll start setting up our pipeline by building our MSK cluster and [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. The EC2 instance will serve as the data producer that sends messages to MSK. It will also host the Snowpipe Streaming via Kafka Connect. Before proceeding, pause this video here and refer to the handout for a link to a handy CloudFormation template provided by [Snowflake](../../Skills/Data%20Science/Snowflake.md). Click that link, but come back to this video before proceeding to kick off the build. We'll be operating out of the US-West-2 region. The CloudFormation template is set up to build in that region as well. Let's click on the View in Designer button to understand what this template will be setting up for us. We can break this [JSON](../../Skills/Web%20Development/JSON.md) code down into sections. Firstly, we are setting up parameters to be referenced in the build of the EC2 instance and MSK cluster. For the MSK cluster, we are defining the subnet associations and the security group associations to ensure communications between MSK and the client are secure. For the EC2 instance, we are setting up allowable instance types and images to build the instance from. In line 56, we are setting up authentication conditions to be referenced in the MSK builds, depending on what the user selects on the CloudFormation console UI. We'll see this a bit later. In line 74, [Metadata](../../Skills/Web%20Development/Metadata.md) is referring to the customization options
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=93)** we want to make available to the user on the AWS UI. We'll notice this is referencing the parameters above. We'll see this in the UI shortly as well. And finally, from line 101 down is the resources section, which is the actual build of the MSK cluster and EC2 instance. You'll notice references to the UI options set up above, as well as the assignment of roles and permissions for the resources. Let's click Back on our browser and kick off the setup of these resources. On our CloudFormation template landing page, let's click Next. On the next page, we'll notice the customization options that we saw in the CloudFormation template JSON. For your subnets, you can select public or private and select your security group as well. I'm going to select my public subnets. Depending on your use case, a private subnet may be more appropriate. I'll also select my default security group. One thing to note here, we are referencing two subnets, as each one sits in a different availability zone. Remember, high availability is a best practice when setting up cloud systems. For the EC2 instance, keep it as medium or larger, as you may run into memory issues later. Click Next. On the next screen, select a role that has privileges to run the steps in the CloudFormation template. I'll leave this as blank since I'm operating as an admin in this section.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=187)** Scroll down and select Next. On the next page, review that your changes look good. Scroll to the bottom. Select the radio button, acknowledging that you understand what AWS CloudFormation will be setting up. Click Submit. Your EC2 instance and MSK cluster will take up to 30 minutes to build. You'll know CloudFormation is finished by the Create Complete notation. Once this is completed, confirm you see the active MSK cluster by searching for the MSK service in the console and do the same for the EC2 instance. Once confirmed, move forward to the next video, where we will set up our public and private keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** msk (10), ec2 (8), json (2), aws (2)
> **Exercise Files:** template (6)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** aws (2), make (1)
> **UI Navigation:** click on (1), scroll down (1), select the (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### [Setting up your keys](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=0)** - [Instructor] Let's now spin up a session with our newly created [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance and create public and private keys to be used for secured connection between Kafka Connector and [Snowflake](../../Skills/Data%20Science/Snowflake.md). We're going to use AWS Session Manager to securely tunnel into our jump post, as that will be simpler than setting up open inbound ports, SSH Keys or bastion hosts. Let's search for Systems Manager in the console. On the left panel, scroll down and click on Session Manager. AWS Session Manager does end your session if you're idle for 20 minutes, so let's update that setting to the max number of minutes, which is 60. We can do this by clicking on the preferences tab, then Edit. In the idle session timeout field, change 20 to 60. Let's scroll down to the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Shell profile section. While we're here, let's bootstrap our session by entering /bin/bash. This will allow us to use Bash to interact with the instance. As Bash is the default shell for most Linux operating systems, this is likely a very familiar language as a data engineer. Scroll down and click Save. Scroll back up and click on the Sessions tab so that we can start a session. On the next screen under the Target Instances section, you'll notice the EC2 instance that we created
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=94)** via the CloudFormation template is listed. Click the radio button next to that instance, then click Start Session. Next, let's generate key value pairs in order for our Kafka Connector to securely talk to Snowflake. If you need a refresher, I always think of private keys as a literal key and a public key as the padlock used for two entities to communicate securely. As a side note, you'll be prompted for a passcode a few times in this process, so remember what you enter there. To start, let's switch directories to home. We'll do cd for change directory, then home. I'm going to throw in a command here and I'll explain what it means. So starting from the beginning of this command, openssl is an open source command line library for TLS or Transport Layer Security. In other words, it's a set of pre-written code to help ensure secure data in transit, which is great for generating private keys. Then Gen RSA 2048 generates a 2,048 bit private key. Then there's a pipe. That pipe is taking the output of the first command and using it as an input to the second command. The PKCS in PKCS8 stands for Public Key [Cryptography](../../Skills/Cybersecurity/Cryptography.md) Standards. This instantiates OpenSSL's private key conversion tool. TOPK8 means we want to convert the format of the private key, and then the remainder of this command
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=187)** essentially says we will write the private key in PEM format to a file called rsakey.p8. A P8 file is just a text file with benefits specific to keys. When I press Enter, I'll be prompted to type in a password, so I'll throw one in, and then we'll get asked to verify that password, so I'll type that same password again. Next, we'll generate a public key from this private one, so I'm going to throw in a command here. So this command will use the OpenSSL library, which will write the public key to a .pub file, which is a file type designed for public keys. This will prompt me for my password, so I'll enter that, and that'll be the same password obviously as we just created before, and that'll save a public key. And then finally, let's take our public key and get it in a format that we can share with Snowflake later in the course. We'll run this following command. We can break this command down into three parts separated by the two pipes. The first piece prints only lines without key, in essence eliminating the header and the footer from the contents of the .pub file. The second piece gets rid of the hidden character \n which tells the .pub file where to start a new line in order to get everything into a single line. And then the third piece of this takes the first part of each line
>
> **[4:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=280)** and writes it to a new file called pub.key. You can take a look at the updated contents of the key by running cat puy.key. So we're going to run this and then we're going to run that cat pub.key and then there's our key. So we'll set our public key in Snowflake a bit later in this course. So put a pin on this for now. In our next video, we'll learn about Snowpipe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (4), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **Env Vars:** ec2 (2), aws (2), ssh (1), tls (1), rsa (1)
> **CLI Commands:** aws (2), cat (2), ssh (1), cd (1)
> **UI Navigation:** scroll down (3), click on (2)
> **Tools:** bash (3), command line (1)
> **Definitions:** is an  (1), in other words (1), stands for (1), is a  (1)
> **Cross-References:** later in (2), next video (1)
> **Exercise Files:** template (1)

#### [What is Snowpipe?](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=0)** - [Narrator] Before we install and configure Snowpipe, it's important we understand what Snowpipe is. We'll dive deeper into Snowpipe in this video. Snowpipe is a service offered by [Snowflake](../../Skills/Data%20Science/Snowflake.md) that automates the load of data files into your Snowflake, Lakehouse from an external stage as soon as data is available versus setting up a job that does this in batches on a schedule, Snowpipe sends this data into a Snowflake object call to pipe, which stages the data from the source files before sending it to a Snowflake table. Whereas Snowpipe loads files in minutes via micro batches, Snowpipe Streaming is a true streaming compliment. Snowpipe Streaming is an SDK offered by Snowflake that loads from a source that streams data as rows, such as Kafka and lands them directly into a Snowflake table, bypassing the need for the pipe used in Snowpipe. Because Snowpipe Streaming works nicely with MSK and has lower latency, we'll be using this option for our streaming pipeline. Snowpipe Streaming does require a [Java](../../Skills/Software%20Development/Java.md) application wrapper. You'll notice when we install Snowpipe Streaming in the next video, it will be in the form of a JAR file. Snowflake self-manages the compute and any necessary scaling for any Snowpipe related activities as opposed to a self-managed virtual compute warehouse. You'll want to be sure to carefully monitor any costs using the Snowflake provided table shown here, as you won't be able to set up resource monitors for any Snowflake-managed virtual warehouses. In summary, Snowpipe Streaming is
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=95)** how Snowflake streams data into its environment. In our next video, we'll actually install Snowpipe Kafka connector.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (10), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Prerequisites:** install (3), configure (1), set up (1)
> **Env Vars:** sdk (1), msk (1), jar (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** next video (2)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Installing Snowpipe Kafka connector](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=0)** - [Instructor] In our previous video, we learned more about Snowpipe. In this video, we'll be installing our Snowpipe Kafka connector. So continuing our active session from earlier, let's install Kafka Connector for Snowpipe by running a series of commands. I provided these commands in a file in the Related To This Course section so you can copy paste to save yourself time. But it is important we walk through these commands and you understand what they're doing. So I'm going to start by throwing in this make directory command and we'll create a directory called Snowpipe. This is where we're going to install everything. Then we're going to jump over into that directory, so we'll do cd. This next command will clean any cached packages in order to ensure we don't run into issues on installation. Sudo is a bash command for super user do and allows you to run commands as a root user. In other words, the most powerful user. Let's next install several packages we'll need for this project. This takes a second.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=82)** Okay, next we're going to use wget, which is a command that lets us download files from the web. Specifically, we're going to install Kafka as a TGZ file, which is essentially a file type that makes it easy to consolidate and move multiple files. So I'm going to throw that in here and press enter. And then next, now that we've downloaded this file, we're going to extract the files from the TGZ file. So I'm going to throw this command in and then let's run another wget. This time we're going to download a JAR file. And this JAR file makes it possible for the [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance to communicate to the MSK cluster. And then let's just still delete out that TGZ file. And next I'm going to throw in a couple of commands here. And what these commands are doing is we're copying over trust certificates and generating keys for MSK. We'll reference this trust store in a config we set up in the next video required for the client to securely connect to the MSK cluster. Let's run another wget now, and this is going to actually download the [Snowflake](../../Skills/Data%20Science/Snowflake.md) Kafka connector. And then I'm going to download another four JAR files.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=177)** These will consist of the Snowpipe SDK, a Snowflake driver, and then some supporting files. So I'm going to throw those in now and this will take a few seconds. And there we go. So to summarize, we've installed the Snowpipe Kafka connector, which will serve as middleware between MSK and Snowflake. In our next video, we'll build configuration files for the provider MSK relationship and set up a Kafka topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** msk (5), tgz (3), jar (3), ec2 (1), sdk (1)
> **CLI Commands:** wget (3), make (1), cd (1), sudo (1)
> **Prerequisites:** install (4), set up (2)
> **Cross-References:** previous video (1), in the next (1), next video (1)
> **Definitions:** is a  (2), in other words (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Set up config for provider-MSK connection and create topic](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=0)** - [Instructor] In our previous video, we installed the Snowpipe Kafka Connector, which bridges MSK and [Snowflake](../../Skills/Data%20Science/Snowflake.md). Let's now work on establishing a relationship between the provider, our [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance and MSK. We'll also set up a Kafka topic in this video. So in our AWS console, let's go to the MSK service. You'll see under clusters we have our cluster, which we created via our cloud formation template. So let's click the cluster name, then view client information. Under bootstrap servers, we have under the private endpoint section, we have our host and port, so we're going to copy that as we'll be using this later in the video. Let's now start a new session with our EC2 instance. So I'm going to go back to systems manager. On the left panel, we'll click session manager, start session, select our instance and start session.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=71)** Next, we'll create a couple of config files so that our provider EC2 can talk to our MSK cluster. Let's first create a directory to house these config files. So I'm going to place this new directory under our Snowpipe directory, and I'll just call it property_files. And then I'm going to hop into that new directory. Now let's create the first of the two config files. This one will be for Kafka, so we're going to type cat > and then we'll call this config file standalone, connect-standalone.properties. In terms of the contents of this config, I've actually provided those contents in an exercise file attached to this video. If you don't have those pulled up already, feel free to pause the video at this point and get those pulled up. So we're going to walk through the contents of this config section by section so you understand what's happening. This first section, we're going to throw in bootstrap.servers, and this is where we're going to want to reference that bootstrap server that we copied from MSK. So go ahead and paste that here. I'm going to press enter and jump down a line. Now, these following commands will enable Kafka's converter tools to help ensure Kafka converts bytes to a string.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=166)** So data's readable and ensures incoming [JSON](../../Skills/Web%20Development/JSON.md)'s readable as well. So I'm going to throw those in now. Okay, this next section will ensure that we keep a bookmark on incoming data, so Kafka remembers what it's already read. And then this final section will set our security protocols referencing some of the security related commands that we triggered in the last video. Control D should save that file. Let's now create the second config file for the provider. We'll type cat > and then we're going to call this one client.properties. I've provided in the associated exercise file below the configs for the first config file, the commands that will be needed for this particular config file. What this config file is going to do is establish the producer side security protocols and are generally the same as what we set up in relation to the security protocols in that first config file. So I'm going to throw that in now, and then control D to save. So our two configs are saved now, let's move on and create a topic. As a refresher from Chapter 2, Video 3,
>
> **[4:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=259)** a topic is a log of events that relate to each other. So to start, let's view the contents of the bin directory in our Kafka installation. We'll do that by typing ls and then a reference to that bin directory. Now, if you aren't familiar with Kafka or bin directories in general, bin directories store pre-written programs or executables. In this particular scenario, Kafka offers several prebuilt command line tools. We'll be using the kafka-topics.shell script program, which will allow us to create, modify, or delete topics. So this one here, so I'm going to go ahead and throw in the command we're going to be using, and then I'll walk you through what each piece of this is doing. So to start the command, we are actually referencing that kafka-topics.shell script. Then we are referencing that MSK bootstrap server. So MSK recognizes the topic. Then we reference our security configurations file, and then specify the commands we want to run with that kafka-topic.shell script. Here we're going to want to create a topic and we'll just call it our first topic. Lastly, we have the option to indicate any partitioning or replication factors we want. Partitioning in this context refers to how many nodes in your MSK cluster you want your logs to be sharded across, which helps with [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Replication factors refer to
>
> **[5:53](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=353)** how many nodes each log will get written to. For example, a replication factor of 3 means that we still don't have to worry about losing data if 2 or less nodes go down. I've just picked 3 partitions and a replication factor of 2 here. Go ahead and press enter, and we have our confirmation that we've created our first topic. So with the previous steps completed, we have established connectivity between our producer and MSK and created our first topic. In our next video, we'll jump over to our Snowflake UI and set up a database and schema and necessary permissions for Snowpipe to ingest data from MSK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** msk (10), ec2 (3), aws (1), json (1)
> **Cross-References:** previous video (1), later in (1), go back to (1), in the last (1), next video (1)
> **CLI Commands:** cat (2), aws (1), ls (1)
> **Exercise Files:** exercise file (2), template (1)
> **Prerequisites:** set up (3)
> **Tools:** aws console (1), command line (1)
> **Definitions:** is a  (1), refers to (1)

#### [Preparing your Snowflake environment](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=0)** - [Instructor] In this video, we'll set up key components within your [Snowflake](../../Skills/Data%20Science/Snowflake.md) instance in order for that instance to receive data from MSK. This will include a database and schema to store the incoming data, a virtual warehouse for processing, and a permissioned user that the Kafka connector can assume. Make sure you are logged into your Snowflake account. We'll work out of Snowflake's browser-based UI. Also make sure your role is ACCOUNTADMIN, or some other role that has the ability to create users, roles, and database objects. Click on the plus button on the top-right, then create a new [SQL](../../Skills/Data%20Science/SQL.md) worksheet. Let's begin by creating a database and schema that we'll stream our data into. So, CREATE OR REPLACE DATABASE, and we'll call our database EVENTS.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=58)** Then let's create a schema within that database, which we'll call PRODUCT. We'll then want to create a virtual compute warehouse in order to allocate [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) resources associated with ingesting MSK data. This can help you track usage as well, and is a best practice. So we'll do CREATE OR REPLACE WAREHOUSE, and I'm going to call this the MSK warehouse, with WAREHOUSE_SIZE =, and I'm going to make my warehouse extra small, but feel free to scale this up as you need to. Next, we'll want to create a user that will be assumed by the Kafka connector. We'll want this user to have a password in order to secure the user, as well as the public key that we've generated in a previous video in order to allow for secure programmatic access between AWS and Snowflake. So we'll do CREATE OR REPLACE USER, and I'll call this user the KAFKA_USER. Password for this user, and I'll just make this up.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=132)** We'll set the DEFAULT_WAREHOUSE for this user to be the MSK warehouse we just set up. And then the default namespace for this user to be the product schema we created earlier. Let's run this. All right, our user is created. Next, we'll create a role, and assign it to this user, which will give this user the necessary permissions on the database schema and warehouse we just created. So we'll do CREATE OR REPLACE ROLE KAFKA_WRITE_ROLE, is what we'll call it. Now let's grant some permissions to that role. So we'll grant usage on warehouse MSK warehouse to role.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=191)** We'll grant usage on database events to the role.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=201)** We'll grant usage on the schema product to the role.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=212)** We'll grant all rights on schema.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=224)** And lastly, we'll GRANT ALL ON FUTURE TABLES IN SCHEMA EVENTS.PRODUCT
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=234)** to the role. I'm going to put a semicolon in front of each of these statements so I can run these in parallel. Oh, whoops. Forgot my S here on this last statement, so I'll run this one again. It looks like we're good there. And then we're going to grant this role to the Kafka user that we created. So I'm going say GRANT ROLE KAFKA_WRITE_ROLE TO USER KAFKA_USER.
>
> **[4:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=280)** And then finally, ALTER USER KAFKA_USER SET DEFAULT_ROLE = KAFKA_WRITE_ROLE.
>
> **[4:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=295)** Finally, we'll want to assign the public key that we generated earlier in the video to this user. We can just copy and paste the contents of that public key directly into an ALTER USER statement. So I'm going to write the statement first, and then we'll go grab that public key. So ALTER USER KAFKA_USER SET RSA_PUBLIC_KEY = '',
>
> **[5:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=325)** and this will be in single quotes. We'll jump up to Systems Manager again, and I'm going to generate the contents of our public key. So CAT. Whoops. Just be careful about the case sensitivity there. And we'll copy the contents here, jump back to Snowflake, paste those contents, run the ALTER USER statement, and that user should now be attached to that public key. So our Snowflake instance now has an environment and permissions configured in order to receive data from MSK. In our next video, we'll finish configuring Snowpipe streaming in the Kafka connector, which will include references to the entities we created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Env Vars:** msk (6), user (6), create (4), replace (4), kafka_user (4)
> **CLI Commands:** make (4), aws (1), cat (1)
> **Cross-References:** previous video (1), earlier in (1), next video (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)

#### [Setting up your Snowpipe Kafka connect config](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=0)** - [Instructor] In this video, we'll finish setting up our config for Snowpipe Kafka Connect, which will define the connection. This will include granting permissions to Kafka Connect, to connect to [Snowflake](../../Skills/Data%20Science/Snowflake.md), and defining data transfer parameters. In order to create a config for Kafka Connect Snowpipe connection, let's first switch directories to our property files directory, so I'll throw in the CD command. (keyboard clacks) Now before we create the config file, let's reformat our private key, which is required in order to reference it in the config. To do this, we'll run the following command. We'll copy the output of this command a bit later. Next, let's create the config. So we'll type in cat arrow, and then we're going to name this config file, "SnowflakeConnectorMSK.properties". I've provided the contents of this config in an exercise file associated with this video. If you haven't pulled that up yet, feel free to pause the video and do that. I'm going to walk through line by line the contents of this config file and explain the purpose that each serves. So to start, we're going to want to create a generic project name. So I'll do name equals, and we'll just call this "Streaming Project". Next, we're going to want to reference
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=95)** the Kafka Connect Sync Connector. Then let's set the max tasks to four, and you can set this to whatever. These are basically consumer threads. Next, let's reference our topic. Then we'll reference the passphrase that we created for our private key.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=127)** In the next two lines, we're going to reference the database and the schema that we created in Snowflake. In the next three lines, we're going to reference or rather set parameters related to buffer. These parameters dictate the size of the Kafka Buffer. In other words, how long and how much data will be held while waiting to be sent to Snowflake. We'll then reference our Snowflake account by referencing the URL for the Snowflake instance.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=166)** Then we're going to reference our Snowflake username that we set. This is how Kafka will assume that user. At this point, let's go ahead and copy the output of the query that we ran earlier on the private key. Actually, before we do that, let's actually type in snowflake.private.key equals and now let's copy that key output and we'll paste that below. Okay, trucking forward. We'll next reference our Snowflake role name. We'll then reference the ingestion method as Snowpipe streaming. This will ensure we use Snowpipe streaming versus just Snowpipe. Next, we'll want to set this following line to fall so as we're not looking for a particular schema here.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=244)** And then finally, we're going to ignore any bad messages. Control D should save the file. You've probably noticed in this video and specifically in this config file that we've put everything together that we've done in the previous videos of the chapter. In the next video, we'll send some sample data through and reap the rewards of our work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (8)
> **Cross-References:** in the next (3)
> **CLI Commands:** cd (1), cat (1)
> **Env Vars:** url (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Sending data to Snowflake](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=0)** - [Instructor] We finished setting up our infrastructure for our streaming pipeline over the course of the previous videos. In this video, we'll put the pipeline to the test by actually sending data through MSK and into [Snowflake](../../Skills/Data%20Science/Snowflake.md). To start, let's run the following three commands in our existing session to initiate the connection between Kafka Connect and Snowpipe. You'll notice we're using a new executable from the Kafka bin directory, connect-standalone.sh.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=34)** I went ahead and hit Enter. This process is going to take a few seconds. However, if it does run successfully, you should be able to see a materialized table in Snowflake.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=50)** Great, so this appears to be done, and we can tell that it's done by looking above at the logs. We'll see that it did create a table. So let's jump into Snowflake and then I'm going to refresh the left panel and then let's drill into our events database into the product schema. And it looks like it might not have reached yet, so I'll refresh one more time. And there you go. We have our table and it is referencing our topic. Next, let's start a new second session with the same instance so we can send some sample data using the instance as a provider. I'm going to jump back to Session Manager and I'm going to start a new session. Submit the following command, which will give you the ability to send messages to the topic we created. This command leverages another executable provided by Kafka called kafka-console-producer.sh. You'll also notice that we're referencing the bootstrap that we copied earlier. So I'll press Enter and we'll see an arrow. That arrow prompt tells us that it's ready to receive messages. Let's send over a sample message at this point. Keep in mind this message has to be in [JSON](../../Skills/Web%20Development/JSON.md) format. Let's mimic a practical event. This will be a page view of your company's website
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=146)** homepage by user ID. So I have a piece of data already set up, which I'll paste in here, and I'll press Enter. Now let's jump into our Snowflake UI and let's run a query on this table to see what's in it. So we'll type select top 10 star from our table,
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=175)** and we'll see it actually has a record in there. You'll see two columns in the output of that query, one called record [Metadata](../../Skills/Web%20Development/Metadata.md) and the other called record content. Record metadata will contain metadata about your record, including timestamp and topic name. The record content column will be the payload you submitted via the producer [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. You've done it. You've built and tested our streaming pipeline. Before we part ways, head over to our next video to discuss a few final points to consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** msk (1), json (1), ec2 (1)
> **File Paths:** connect-standalone.sh (1), kafka-console-producer.sh (1)
> **Cross-References:** next video (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Final considerations](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=0)** - [Instructor] With our streaming pipeline successfully up and running, let's talk through a few final considerations as we close out the chapter. While we used an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance to host Kafka Connect in this course, AWS does offer a service called Amazon MSK Connect, which takes care of the hosting duties for you. Let's quickly walk through how setup would differ should you choose this solution in a practical setting. Keep in mind this will only work if your MSK cluster is located in a private subnet. Firstly, compress your Kafka libraries into a ZIP and load that ZIP file into an S3 bucket. Under MSK in the console, you'll click Custom Plugins. Then create custom plugin where you'll reference that S3 bucket's location. Then click Connector on the left panel within the MSK service in the console. Then create connector. Select Use Existing Plugin and select the plugin you created in step two. Copy the contents from the config file we created in video seven of this chapter under the configuration settings section. Under Identity and Access Management Role, select the role that you created with the CloudFormation MSK template. Leave everything else as is. Generally, it can take up to 10 to 15 minutes to finish building the connector. Data provided by your data provider will now flow through MSK Connect at this point. You'll no longer have to worry about maintaining and paying for an EC2 instance, assuming your provider is in a self-hosted EC2 instance. Another consideration you'll want to take into account
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=93)** is that both EC2 and MSK come with associated costs. So you'll want to be sure to terminate once you're finished with this project to avoid unexpected billing. You can do this directly in the console, either within the services themselves or if you did use the CloudFormation template I provided, you can actually search for CloudFormation in the console and select Delete. This will automatically terminate everything that was created from that template. You now have everything you need to be successfully building out streaming pipelines on your own using MSK to land data in [Snowflake](../../Skills/Data%20Science/Snowflake.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Env Vars:** msk (8), ec2 (4), zip (2), aws (1)
> **Exercise Files:** template (3), zip file (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** aws (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course review and next steps](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=1)** - Congratulations. You made it and should be proud of your accomplishments. You learned about [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) and when to use it in the real world. You built a successfully running streaming pipeline, and you got hands-on experience with top of the market tooling, including AWS and [Snowflake](../../Skills/Data%20Science/Snowflake.md). I encourage you to download and share your certificate of completion. You should be proud of your efforts in learning something new. Please tag me in your post so I can see it and congratulate you once more. If you have any questions, feel free to submit one through the Q and A function offered in this course. And please be sure to follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) to stay in the loop of any new courses I create, conferences I'll be speaking at, or just to expand our networks. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Sagar Suri](../../Instructors/Data%20Science/Sagar%20Suri.md)

## Resources

- Exercise files available

## Skills Covered

- Data Streaming
- Amazon Web Services (AWS)
- Snowflake

## Path Context

### In [Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)
← [Data Engineering Pipeline Management with Apache Airflow](Data%20Engineering%20Pipeline%20Management%20with%20Apache%20Airflow.md) | **8 of 10** | [Data Pipeline Automation with GitHub Actions Using R and Python](Data%20Pipeline%20Automation%20with%20GitHub%20Actions%20Using%20R%20and%20Python.md) →

## Appears In

- [Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [AWS- Monitoring, Logging, and Remediation (2021)](../Cloud%20Computing/AWS-%20Monitoring%2C%20Logging%2C%20and%20Remediation%20(2021).md) — Amazon Web Services (AWS)
- [Complete Guide to AWS Software Deployment](../Cloud%20Computing/Complete%20Guide%20to%20AWS%20Software%20Deployment.md) — Amazon Web Services (AWS)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](../Cloud%20Computing/Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Amazon Web Services (AWS)
- [Learning SnowflakeDB](../Cloud%20Computing/Learning%20SnowflakeDB.md) — Snowflake
- [Advanced Data Engineering with Snowflake](../Cloud%20Computing/Advanced%20Data%20Engineering%20with%20Snowflake.md) — Snowflake

---

[↑ Back to top](#)