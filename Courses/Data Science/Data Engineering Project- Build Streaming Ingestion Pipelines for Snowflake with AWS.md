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
  - '[[Advance Your Data Engineering Skills]]'
prev_courses:
  - '[[Data Engineering Pipeline Management with Apache Airflow]]'
next_courses:
  - '[[Data Pipeline Automation with GitHub Actions Using R and Python]]'
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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering%20Project-%20Build%20Streaming%20Ingestion%20Pipelines%20for%20Snowflake%20with%20AWS.md)

![Data Engineering Project: Build Streaming Ingestion Pipelines for Snowflake with AWS](https://media.licdn.com/dms/image/v2/D560DAQFYxkbCu6heUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707265232207?e=2147483647&amp;v=beta&amp;t=BqmAu3bGAEAjxMNoh5fRf8caE5tLQ8i-XVyeNNJG_R4)

# Data Engineering Project: Build Streaming Ingestion Pipelines for Snowflake with AWS

> As data engineers, it’s difficult to ignore the ever-growing importance and demand for streamed data. In this course, designed uniquely for experienced data professionals looking to modernize their technical skill set, join instructor and data engineer Sagar Suri as he demystifies the process of building streaming ingestion pipelines for the industry-leading lakehouse solution, Snowflake, using po

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws) | 50m | Intermediate | 72K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Introduction to Data Streaming, AWS, and Snowflake]]** (4 videos)
- **[[#2. Building a Streaming Pipeline]]** (9 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building streaming data pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=0)** - As data engineers, it's difficult to ignore the ever-growing importance and demand for stream data.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=6)** In this course, we'll learn the fundamentals of streaming data pipelines.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=10)** We'll work with cutting-edge tooling, including the top cloud provider on the market, AWS, and the top cloud data platform on the market, Snowflake, to build a functional data stream.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=20)** I'm Sagar Suri.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=22)** For over a decade, I've built and run high-impact data engineering programs across rapidly growing industries, including e-commerce and cybersecurity, and I'm thrilled to pass along my experiences to you.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=33)** So join me as I share with you everything you need to know about streaming data pipelines.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/building-streaming-data-pipelines?u=76281980&t=38)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), let (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - as (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=0)** - [Instructor] Here's what you should know before starting this course.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=3)** While I will provide overviews of core concepts and each step of the project, including each of the tools we use and guidance on how to get set up in those tools, it's highly recommended that you have a foundational understanding of the data engineering discipline, some hands-on experience with SQL and scripting, familiarity with basic AWS concepts such as EC2 and VPCs, and an internet connection and web browser.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=31)** For applicable videos, you'll find reference files in the "Related to this course" section.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=37)** And you can never ask too many questions, so submit your inquiries in the Q&A section.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=42)** And finally, bring your patience and a positive attitude.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-you-should-know?u=76281980&t=45)** Let's begin with setting up prerequisites next.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), aws (1), ec2 (1)
> **CLI Commands:** aws (1), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=0)** - [Instructor] In order to follow along with the hands-on project in this course, you'll need to set up a few prerequisites.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=7)** If you don't have access to a Snowflake environment, you can set up an account on [snowflake.com](https://snowflake.com).
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=13)** By clicking on the start for free button and setting up an account, you'll receive a 30-day free trial, which includes $400 worth of free usage.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=23)** Keep in mind, Snowflake doesn't charge you for any data ingress.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=27)** However, it will charge you if you plan to transfer data to a different cloud provider than the one hosting your Snowflake instance, or if you plan to transfer data to a different region within the same cloud provider.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=39)** You'll also want to make sure you have account admin access.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=44)** If you don't have access to an AWS environment, you can set up an account on aws.[amazon.com](https://amazon.com).
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=50)** Click on the Create an AWS account button on the top right.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=55)** You'll want to make sure you have administrator rights in AWS as well.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=60)** If you haven't worked with AWS before, you may want to get set up with CloudWatch billing alerts to ensure you don't get surprised with a monthly bill.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=70)** You can also estimate your costs using this handy cost estimator provided by AWS on calculator.aws.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=78)** For this project you'll also need a VPC with a private subnet in your AWS account.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=84)** If you don't have a VPC in private subnet set up already, I've provided a file with instructions.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=90)** Please pause this video here and complete those steps before proceeding.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=98)** This completes our introductory chapter.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/prerequisites?u=76281980&t=100)** In the next chapter, we'll discuss data streaming, AWS, Snowflake, and overview the project we'll be working on in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9), make (2)
> **Env Vars:** aws (7), vpc (2)
> **Prerequisites:** set up (5), make sure you have (2), you'll need (1)
> **Code Keywords:** private (2)
> **URLs:** [snowflake.com](https://snowflake.com) (1), [amazon.com](https://amazon.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Warnings:** keep in mind (1)


### 1. Introduction to Data Streaming, AWS, and Snowflake

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why AWS and Snowflake?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=0)** - [Instructor] The streaming project covered in this course will use services in AWS to facilitate a streaming pipeline that will land data in Snowflake in near real time.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=10)** We'll learn more about these technologies in this video.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=14)** Snowflake is the leading modern cloud-based data platform in the industry today.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=19)** Snowflake currently supports over 11,400 companies globally and can boast the largest software IPO of all time.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=28)** Architecturally, Snowflake enables data engineers to build Lakehouse environments, a combination of a data warehouse and data lake due to its ability to support both structured and semi-structured data.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=41)** As Snowflake is based in the cloud, it offers elasticity and scalability without worrying about things like high upfront costs, performance, or complexity of managing the system.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=55)** AWS is a secure cloud services platform offering compute power, database storage, 360 degree tooling for your software development lifecycle and other functionality to help businesses scale and grow.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=69)** It was the initial cloud provider offering S3 in 2006 and has held the largest market share since its inception.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/why-aws-and-snowflake?u=76281980&t=78)** Up next, I'll introduce the concept of data streaming and why it is relevant today.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), ipo (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Introduction to streaming ingestion pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=0)** - [Instructor] Data pipelines are the core of a data engineer's everyday workflows.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=4)** While batch pipelines have been a staple workflow in the data engineering space for decades, streaming data pipelines are gaining popularity with the International Data Corporation reporting that by 2025, 30% of all data generated will be near real-time.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=20)** In this chapter, we'll dive deeper into streaming data pipelines.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=24)** Before we get into streaming data pipelines, let's start with data pipelines, more broadly speaking.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=30)** Data pipelines are the coordination of infrastructure, tools, and processes that move data from a source, such as a transaction service, or enterprise application, through the ELT process, extract, load, and transform, and into a destination.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=46)** This destination could be a warehouse or lake house, such as snowflake.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=51)** Even further downstream, that data could be consumed by visualization tool, or ML model, or reverse ETL back into a source application, post transformation.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=62)** While batch data pipelines refer to a method of processing data in large chunks, at a predetermined schedule, hence the term batch, streaming data pipelines, often referred to as open or continuous, process data in a continuous stream at real-time or near real-time.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=79)** Streaming data pipelines became widely popular in the early 2000s and 2010s.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=84)** Streaming data pipelines were inherently more complicated than batch pipelines.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=88)** However, as cloud architecture scaled to support streaming data pipelines, it became easier to set up and manage.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=95)** If we compare to batch data pipelines, streaming data pipelines are one continuous job, whereas batch jobs are recurring scheduled jobs.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=104)** Streaming data pipelines process data in millisecond to second latency, whereas batch data pipelines, on the other hand, can be minutes or longer latency.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=114)** Lastly, streaming data pipelines process events, whereas batch data pipelines process large chunks of data.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/introduction-to-streaming-ingestion-pipelines?u=76281980&t=121)** In our next video, we'll dive even deeper into data streaming and discuss practical use cases, considerations, and general architecture.

> [!info]- Semantic Content
>
> **Env Vars:** elt (1), etl (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Streaming data pipelines: A deeper dive
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=0)** - [Instructor] In our previous video, we walked through an overview of streaming data pipelines.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=5)** In this video, we'll dive deeper into the anatomy of a streaming architecture, considerations and practical use cases.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=12)** Let's briefly look at the core anatomy of a streaming pipeline.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=16)** Streaming pipelines generally consist of a provider or set of providers.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=21)** This could be your products backend, your order service, or IOT sensors.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=27)** Your streaming platform could pull from this client or the client may publish to this via an application programming interface or API.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=36)** A topic is a group of events that are related to each other to which data is published by producers.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=41)** Technically speaking, a topic is a log of events that are appended only and immutable.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=47)** You can think of a topic as a table name in your destination database.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=52)** Of course, you have the actual event streaming service.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=55)** This can be distributed for better fault tolerance or single node if you are using a service like Kafka as your event streaming platform.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=64)** It also requires a sync connector to communicate with sources and destinations.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=69)** Other optional pieces of your event streaming service are a schema registry to validate incoming payloads against an existing topics predefined schema or a real-time processing layer, such as Flink.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=81)** Lastly, your destination or store.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=84)** This is likely a relational database or time series database, which work great for organizing time-based data such as events.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=92)** Because of the complexity of streaming pipelines, there are several considerations you'll need to keep in mind.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=98)** Retention and replay.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=100)** Most event streaming platforms support the ability to set a retention period or expiration of your event logs so you can replay or reprocess events from a certain time range.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=111)** Order and frequency of delivery.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=114)** Because event streaming platforms can be distributed, there is a risk of delivering events out of order or more than once.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=121)** Schema.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=122)** Event payloads can often change, such as changes to field types or new fields.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=128)** These schemas can be managed and versioned in a schema registry.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=132)** Error handling.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=134)** Events that may not align with the defined schema in your schema registry or tied to an existing topic may end up in the dead letter queue so they don't block other events and can be troubleshooted.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=145)** And finally, scalability.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=147)** The ability to scale horizontally across multiple servers and vertically, for example, to buffer messages if falling behind.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=156)** Let's explore some real world use cases.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=159)** Real world use cases for streaming data pipelines are scenarios when data freshness is needed at or near real time, and is available at or near real time.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=171)** Let's walk through four sample use cases.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=174)** Firstly, e-commerce or banking companies detecting fraud anomalies quick enough to stop them.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=180)** In the real world, you may have two pipelines, a batch one that allows your transactions to be curated for earnings reports and analytics, and a second streaming pipeline that isn't cleansed and transformed solely for detecting fraud quickly.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=194)** A second example is customer behavior data to inform online advertising by a social media network, for example.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=202)** Thirdly, algorithmic stock day trading, and finally, IOT sensor data collection.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/streaming-data-pipelines-a-deeper-dive?u=76281980&t=208)** Now that you have a sound understanding of data streaming, we'll walk through an overview of the project we'll be building in this course in our next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), interface (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** iot (2), api (1)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1), next video (1)
> **CLI Commands:** node (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### Overview of streaming pipeline project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=0)** - [Narrator] In this video, we'll overview this course's project so you understand the desired end state we are working towards.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=7)** We'll be using MSK or Managed Streaming for Kafka.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=10)** This is AWS's fully managed, highly available Apache Kafka event streaming platform.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=17)** Event streaming platforms are event-driven architectures that specialize in streaming event data such as change data capture from a data provider to a destination.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=27)** Generally, a database management service of some sort, such as a lakehouse or a time series database.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=33)** Other event streaming services include Amazon Kinesis, AWS's principle streaming service, or Google Datastream.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=41)** At a high level in this chapter, you will create a provisioned Kafka cluster, create Kafka producers and connectors, create topics in a Kafka cluster, create a Snowflake database and associated permissions.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=57)** Specifically, our final pipeline will consist of an AWS EC2 instance, which will serve as our producer of events for a particular topic we create.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=66)** MSK will consume these events and send them through Kafka Connect to Snowflake's Snowpipe streaming service, and finally into our Snowflake instance as a table.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=76)** Our EC2 instance will serve a dual purpose here by also hosting our Snowpipe Kafka Connector.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=83)** We won't be building a schema registry as part of this project, but you can leverage AWS Glue Schema Registry as an add-on to this project.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=90)** AWS provides detailed instructions here.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/overview-of-streaming-pipeline-project?u=76281980&t=94)** Now that we have an understanding of the project plan, let's kick off our project by setting up our MSK cluster and EC2 instance in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** aws (5), msk (3), ec2 (3)
> **CLI Commands:** aws (5), apache (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)


### 2. Building a Streaming Pipeline

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Setting up your MSK cluster and EC2 instance
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=0)** - [Instructor] We'll start setting up our pipeline by building our MSK cluster and EC2 instance.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=5)** The EC2 instance will serve as the data producer that sends messages to MSK.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=10)** It will also host the Snowpipe Streaming via Kafka Connect.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=14)** Before proceeding, pause this video here and refer to the handout for a link to a handy CloudFormation template provided by Snowflake.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=21)** Click that link, but come back to this video before proceeding to kick off the build.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=30)** We'll be operating out of the US-West-2 region.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=34)** The CloudFormation template is set up to build in that region as well.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=38)** Let's click on the View in Designer button to understand what this template will be setting up for us.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=48)** We can break this JSON code down into sections.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=52)** Firstly, we are setting up parameters to be referenced in the build of the EC2 instance and MSK cluster.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=58)** For the MSK cluster, we are defining the subnet associations and the security group associations to ensure communications between MSK and the client are secure.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=67)** For the EC2 instance, we are setting up allowable instance types and images to build the instance from.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=77)** In line 56, we are setting up authentication conditions to be referenced in the MSK builds, depending on what the user selects on the CloudFormation console UI.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=86)** We'll see this a bit later.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=89)** In line 74, metadata is referring to the customization options we want to make available to the user on the AWS UI.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=97)** We'll notice this is referencing the parameters above.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=100)** We'll see this in the UI shortly as well.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=103)** And finally, from line 101 down is the resources section, which is the actual build of the MSK cluster and EC2 instance.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=111)** You'll notice references to the UI options set up above, as well as the assignment of roles and permissions for the resources.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=119)** Let's click Back on our browser and kick off the setup of these resources.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=124)** On our CloudFormation template landing page, let's click Next.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=132)** On the next page, we'll notice the customization options that we saw in the CloudFormation template JSON.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=142)** For your subnets, you can select public or private and select your security group as well.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=147)** I'm going to select my public subnets.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=150)** Depending on your use case, a private subnet may be more appropriate.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=154)** I'll also select my default security group.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=158)** One thing to note here, we are referencing two subnets, as each one sits in a different availability zone.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=164)** Remember, high availability is a best practice when setting up cloud systems.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=169)** For the EC2 instance, keep it as medium or larger, as you may run into memory issues later.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=175)** Click Next.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=177)** On the next screen, select a role that has privileges to run the steps in the CloudFormation template.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=183)** I'll leave this as blank since I'm operating as an admin in this section.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=187)** Scroll down and select Next.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=192)** On the next page, review that your changes look good.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=196)** Scroll to the bottom.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=198)** Select the radio button, acknowledging that you understand what AWS CloudFormation will be setting up.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=205)** Click Submit.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=209)** Your EC2 instance and MSK cluster will take up to 30 minutes to build.
>
> **[3:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=213)** You'll know CloudFormation is finished by the Create Complete notation.
>
> **[3:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=217)** Once this is completed, confirm you see the active MSK cluster by searching for the MSK service in the console and do the same for the EC2 instance.
>
> **[3:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-msk-cluster-and-ec2-instance?u=76281980&t=226)** Once confirmed, move forward to the next video, where we will set up our public and private keys.

> [!info]- Semantic Content
>
> **Env Vars:** msk (10), ec2 (8), json (2), aws (2)
> **Code Keywords:** let (3), public (3), private (3), from. (1), finally, (1)
> **Exercise Files:** template (6)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** aws (2), make (1)
> **UI Navigation:** click on (1), scroll down (1), select the (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### Setting up your keys
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=0)** - [Instructor] Let's now spin up a session with our newly created EC2 instance and create public and private keys to be used for secured connection between Kafka Connector and Snowflake.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=11)** We're going to use AWS Session Manager to securely tunnel into our jump post, as that will be simpler than setting up open inbound ports, SSH Keys or bastion hosts.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=21)** Let's search for Systems Manager in the console.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=28)** On the left panel, scroll down and click on Session Manager.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=34)** AWS Session Manager does end your session if you're idle for 20 minutes, so let's update that setting to the max number of minutes, which is 60.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=42)** We can do this by clicking on the preferences tab, then Edit.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=46)** In the idle session timeout field, change 20 to 60.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=51)** Let's scroll down to the Linux Shell profile section.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=56)** While we're here, let's bootstrap our session by entering /bin/bash.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=64)** This will allow us to use Bash to interact with the instance.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=67)** As Bash is the default shell for most Linux operating systems, this is likely a very familiar language as a data engineer.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=76)** Scroll down and click Save.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=80)** Scroll back up and click on the Sessions tab so that we can start a session.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=86)** On the next screen under the Target Instances section, you'll notice the EC2 instance that we created via the CloudFormation template is listed.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=97)** Click the radio button next to that instance, then click Start Session.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=104)** Next, let's generate key value pairs in order for our Kafka Connector to securely talk to Snowflake.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=110)** If you need a refresher, I always think of private keys as a literal key and a public key as the padlock used for two entities to communicate securely.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=120)** As a side note, you'll be prompted for a passcode a few times in this process, so remember what you enter there.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=126)** To start, let's switch directories to home.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=128)** We'll do cd for change directory, then home.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=133)** I'm going to throw in a command here and I'll explain what it means.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=138)** So starting from the beginning of this command, openssl is an open source command line library for TLS or Transport Layer Security.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=146)** In other words, it's a set of pre-written code to help ensure secure data in transit, which is great for generating private keys.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=154)** Then Gen RSA 2048 generates a 2,048 bit private key.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=160)** Then there's a pipe.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=161)** That pipe is taking the output of the first command and using it as an input to the second command.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=167)** The PKCS in PKCS8 stands for Public Key Cryptography Standards.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=174)** This instantiates OpenSSL's private key conversion tool.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=179)** TOPK8 means we want to convert the format of the private key, and then the remainder of this command essentially says we will write the private key in PEM format to a file called rsakey.p8.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=194)** A P8 file is just a text file with benefits specific to keys.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=201)** When I press Enter, I'll be prompted to type in a password, so I'll throw one in, and then we'll get asked to verify that password, so I'll type that same password again.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=212)** Next, we'll generate a public key from this private one, so I'm going to throw in a command here.
>
> **[3:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=219)** So this command will use the OpenSSL library, which will write the public key to a .pub file, which is a file type designed for public keys.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=230)** This will prompt me for my password, so I'll enter that, and that'll be the same password obviously as we just created before, and that'll save a public key.
>
> **[4:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=243)** And then finally, let's take our public key and get it in a format that we can share with Snowflake later in the course.
>
> **[4:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=249)** We'll run this following command.
>
> **[4:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=251)** We can break this command down into three parts separated by the two pipes.
>
> **[4:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=256)** The first piece prints only lines without key, in essence eliminating the header and the footer from the contents of the .pub file.
>
> **[4:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=265)** The second piece gets rid of the hidden character \n which tells the .pub file where to start a new line in order to get everything into a single line.
>
> **[4:36](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=276)** And then the third piece of this takes the first part of each line and writes it to a new file called pub.key.
>
> **[4:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=284)** You can take a look at the updated contents of the key by running cat puy.key.
>
> **[4:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=290)** So we're going to run this and then we're going to run that cat pub.key and then there's our key.
>
> **[4:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=299)** So we'll set our public key in Snowflake a bit later in this course.
>
> **[5:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=303)** So put a pin on this for now.
>
> **[5:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-keys?u=76281980&t=305)** In our next video, we'll learn about Snowpipe.

> [!info]- Semantic Content
>
> **Code Keywords:** public (9), let (8), private (8), pub (5), throw (3)
> **Env Vars:** ec2 (2), aws (2), ssh (1), tls (1), rsa (1)
> **CLI Commands:** aws (2), cat (2), ssh (1), cd (1)
> **UI Navigation:** scroll down (3), click on (2)
> **Tools:** bash (3), command line (1)
> **Definitions:** is an  (1), in other words (1), stands for (1), is a  (1)
> **Cross-References:** later in (2), next video (1)
> **Exercise Files:** template (1)

#### What is Snowpipe?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=0)** - [Narrator] Before we install and configure Snowpipe, it's important we understand what Snowpipe is.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=6)** We'll dive deeper into Snowpipe in this video.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=10)** Snowpipe is a service offered by Snowflake that automates the load of data files into your Snowflake, Lakehouse from an external stage as soon as data is available versus setting up a job that does this in batches on a schedule, Snowpipe sends this data into a Snowflake object call to pipe, which stages the data from the source files before sending it to a Snowflake table.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=32)** Whereas Snowpipe loads files in minutes via micro batches, Snowpipe Streaming is a true streaming compliment.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=40)** Snowpipe Streaming is an SDK offered by Snowflake that loads from a source that streams data as rows, such as Kafka and lands them directly into a Snowflake table, bypassing the need for the pipe used in Snowpipe.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=55)** Because Snowpipe Streaming works nicely with MSK and has lower latency, we'll be using this option for our streaming pipeline.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=62)** Snowpipe Streaming does require a Java application wrapper.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=66)** You'll notice when we install Snowpipe Streaming in the next video, it will be in the form of a JAR file.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=72)** Snowflake self-manages the compute and any necessary scaling for any Snowpipe related activities as opposed to a self-managed virtual compute warehouse.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=82)** You'll want to be sure to carefully monitor any costs using the Snowflake provided table shown here, as you won't be able to set up resource monitors for any Snowflake-managed virtual warehouses.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=93)** In summary, Snowpipe Streaming is how Snowflake streams data into its environment.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/what-is-snowpipe?u=76281980&t=98)** In our next video, we'll actually install Snowpipe Kafka connector.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3), configure (1), set up (1)
> **Code Keywords:** self (2), require (1)
> **Env Vars:** sdk (1), msk (1), jar (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** next video (2)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Installing Snowpipe Kafka connector
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=0)** - [Instructor] In our previous video, we learned more about Snowpipe.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=3)** In this video, we'll be installing our Snowpipe Kafka connector.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=7)** So continuing our active session from earlier, let's install Kafka Connector for Snowpipe by running a series of commands.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=15)** I provided these commands in a file in the Related To This Course section so you can copy paste to save yourself time.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=23)** But it is important we walk through these commands and you understand what they're doing.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=28)** So I'm going to start by throwing in this make directory command and we'll create a directory called Snowpipe.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=35)** This is where we're going to install everything.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=38)** Then we're going to jump over into that directory, so we'll do cd.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=43)** This next command will clean any cached packages in order to ensure we don't run into issues on installation.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=52)** Sudo is a bash command for super user do and allows you to run commands as a root user.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=58)** In other words, the most powerful user.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=62)** Let's next install several packages we'll need for this project.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=72)** This takes a second.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=82)** Okay, next we're going to use wget, which is a command that lets us download files from the web.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=90)** Specifically, we're going to install Kafka as a TGZ file, which is essentially a file type that makes it easy to consolidate and move multiple files.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=99)** So I'm going to throw that in here and press enter.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=105)** And then next, now that we've downloaded this file, we're going to extract the files from the TGZ file.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=112)** So I'm going to throw this command in and then let's run another wget.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=119)** This time we're going to download a JAR file.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=122)** And this JAR file makes it possible for the EC2 instance to communicate to the MSK cluster.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=130)** And then let's just still delete out that TGZ file.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=136)** And next I'm going to throw in a couple of commands here.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=143)** And what these commands are doing is we're copying over trust certificates and generating keys for MSK.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=154)** We'll reference this trust store in a config we set up in the next video required for the client to securely connect to the MSK cluster.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=163)** Let's run another wget now, and this is going to actually download the Snowflake Kafka connector.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=172)** And then I'm going to download another four JAR files.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=177)** These will consist of the Snowpipe SDK, a Snowflake driver, and then some supporting files.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=184)** So I'm going to throw those in now and this will take a few seconds.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=188)** And there we go.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=189)** So to summarize, we've installed the Snowpipe Kafka connector, which will serve as middleware between MSK and Snowflake.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/installing-snowpipe-kafka-connector?u=76281980&t=197)** In our next video, we'll build configuration files for the provider MSK relationship and set up a Kafka topic.

> [!info]- Semantic Content
>
> **Env Vars:** msk (5), tgz (3), jar (3), ec2 (1), sdk (1)
> **Code Keywords:** let (5), throw (4), super (1), delete (1)
> **CLI Commands:** wget (3), make (1), cd (1), sudo (1)
> **Prerequisites:** install (4), set up (2)
> **Cross-References:** previous video (1), in the next (1), next video (1)
> **Definitions:** is a  (2), in other words (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### Set up config for provider-MSK connection and create topic
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=0)** - [Instructor] In our previous video, we installed the Snowpipe Kafka Connector, which bridges MSK and Snowflake.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=6)** Let's now work on establishing a relationship between the provider, our EC2 instance and MSK.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=12)** We'll also set up a Kafka topic in this video.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=16)** So in our AWS console, let's go to the MSK service.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=23)** You'll see under clusters we have our cluster, which we created via our cloud formation template.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=30)** So let's click the cluster name, then view client information.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=35)** Under bootstrap servers, we have under the private endpoint section, we have our host and port, so we're going to copy that as we'll be using this later in the video.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=48)** Let's now start a new session with our EC2 instance.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=52)** So I'm going to go back to systems manager.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=58)** On the left panel, we'll click session manager, start session, select our instance and start session.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=71)** Next, we'll create a couple of config files so that our provider EC2 can talk to our MSK cluster.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=77)** Let's first create a directory to house these config files.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=82)** So I'm going to place this new directory under our Snowpipe directory, and I'll just call it property_files.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=92)** And then I'm going to hop into that new directory.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=98)** Now let's create the first of the two config files.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=102)** This one will be for Kafka, so we're going to type cat > and then we'll call this config file standalone, connect-standalone.properties.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=118)** In terms of the contents of this config, I've actually provided those contents in an exercise file attached to this video.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=125)** If you don't have those pulled up already, feel free to pause the video at this point and get those pulled up.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=133)** So we're going to walk through the contents of this config section by section so you understand what's happening.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=139)** This first section, we're going to throw in bootstrap.servers, and this is where we're going to want to reference that bootstrap server that we copied from MSK.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=150)** So go ahead and paste that here.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=155)** I'm going to press enter and jump down a line.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=158)** Now, these following commands will enable Kafka's converter tools to help ensure Kafka converts bytes to a string.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=166)** So data's readable and ensures incoming JSON's readable as well.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=170)** So I'm going to throw those in now.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=173)** Okay, this next section will ensure that we keep a bookmark on incoming data, so Kafka remembers what it's already read.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=188)** And then this final section will set our security protocols referencing some of the security related commands that we triggered in the last video.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=199)** Control D should save that file.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=204)** Let's now create the second config file for the provider.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=210)** We'll type cat > and then we're going to call this one client.properties.
>
> **[3:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=218)** I've provided in the associated exercise file below the configs for the first config file, the commands that will be needed for this particular config file.
>
> **[3:48](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=228)** What this config file is going to do is establish the producer side security protocols and are generally the same as what we set up in relation to the security protocols in that first config file.
>
> **[4:01](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=241)** So I'm going to throw that in now, and then control D to save.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=252)** So our two configs are saved now, let's move on and create a topic.
>
> **[4:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=257)** As a refresher from Chapter 2, Video 3, a topic is a log of events that relate to each other.
>
> **[4:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=263)** So to start, let's view the contents of the bin directory in our Kafka installation.
>
> **[4:31](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=271)** We'll do that by typing ls and then a reference to that bin directory.
>
> **[4:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=277)** Now, if you aren't familiar with Kafka or bin directories in general, bin directories store pre-written programs or executables.
>
> **[4:45](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=285)** In this particular scenario, Kafka offers several prebuilt command line tools.
>
> **[4:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=290)** We'll be using the kafka-topics.shell script program, which will allow us to create, modify, or delete topics.
>
> **[4:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=298)** So this one here, so I'm going to go ahead and throw in the command we're going to be using, and then I'll walk you through what each piece of this is doing.
>
> **[5:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=309)** So to start the command, we are actually referencing that kafka-topics.shell script.
>
> **[5:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=316)** Then we are referencing that MSK bootstrap server.
>
> **[5:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=319)** So MSK recognizes the topic.
>
> **[5:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=322)** Then we reference our security configurations file, and then specify the commands we want to run with that kafka-topic.shell script.
>
> **[5:31](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=331)** Here we're going to want to create a topic and we'll just call it our first topic.
>
> **[5:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=337)** Lastly, we have the option to indicate any partitioning or replication factors we want.
>
> **[5:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=343)** Partitioning in this context refers to how many nodes in your MSK cluster you want your logs to be sharded across, which helps with scalability.
>
> **[5:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=351)** Replication factors refer to how many nodes each log will get written to.
>
> **[5:56](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=356)** For example, a replication factor of 3 means that we still don't have to worry about losing data if 2 or less nodes go down.
>
> **[6:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=363)** I've just picked 3 partitions and a replication factor of 2 here.
>
> **[6:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=368)** Go ahead and press enter, and we have our confirmation that we've created our first topic.
>
> **[6:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=377)** So with the previous steps completed, we have established connectivity between our producer and MSK and created our first topic.
>
> **[6:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/set-up-config-for-provider-msk-connection-and-create-topic?u=76281980&t=385)** In our next video, we'll jump over to our Snowflake UI and set up a database and schema and necessary permissions for Snowpipe to ingest data from MSK.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), throw (4), private (1), delete (1)
> **Env Vars:** msk (10), ec2 (3), aws (1), json (1)
> **Cross-References:** previous video (1), later in (1), go back to (1), in the last (1), next video (1)
> **CLI Commands:** cat (2), aws (1), ls (1)
> **Exercise Files:** exercise file (2), template (1)
> **Prerequisites:** set up (3)
> **Tools:** aws console (1), command line (1)
> **Definitions:** is a  (1), refers to (1)

#### Preparing your Snowflake environment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=0)** - [Instructor] In this video, we'll set up key components within your Snowflake instance in order for that instance to receive data from MSK.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=8)** This will include a database and schema to store the incoming data, a virtual warehouse for processing, and a permissioned user that the Kafka connector can assume.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=18)** Make sure you are logged into your Snowflake account.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=21)** We'll work out of Snowflake's browser-based UI.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=25)** Also make sure your role is ACCOUNTADMIN, or some other role that has the ability to create users, roles, and database objects.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=34)** Click on the plus button on the top-right, then create a new SQL worksheet.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=39)** Let's begin by creating a database and schema that we'll stream our data into.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=45)** So, CREATE OR REPLACE DATABASE, and we'll call our database EVENTS.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=58)** Then let's create a schema within that database, which we'll call PRODUCT.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=70)** We'll then want to create a virtual compute warehouse in order to allocate data processing resources associated with ingesting MSK data.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=79)** This can help you track usage as well, and is a best practice.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=85)** So we'll do CREATE OR REPLACE WAREHOUSE, and I'm going to call this the MSK warehouse, with WAREHOUSE_SIZE =, and I'm going to make my warehouse extra small, but feel free to scale this up as you need to.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=102)** Next, we'll want to create a user that will be assumed by the Kafka connector.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=106)** We'll want this user to have a password in order to secure the user, as well as the public key that we've generated in a previous video in order to allow for secure programmatic access between AWS and Snowflake.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=118)** So we'll do CREATE OR REPLACE USER, and I'll call this user the KAFKA_USER.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=124)** Password for this user, and I'll just make this up.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=132)** We'll set the DEFAULT_WAREHOUSE for this user to be the MSK warehouse we just set up.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=138)** And then the default namespace for this user to be the product schema we created earlier.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=149)** Let's run this.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=152)** All right, our user is created.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=155)** Next, we'll create a role, and assign it to this user, which will give this user the necessary permissions on the database schema and warehouse we just created.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=164)** So we'll do CREATE OR REPLACE ROLE KAFKA_WRITE_ROLE, is what we'll call it.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=172)** Now let's grant some permissions to that role.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=176)** So we'll grant usage on warehouse MSK warehouse to role.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=191)** We'll grant usage on database events to the role.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=201)** We'll grant usage on the schema product to the role.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=212)** We'll grant all rights on schema.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=224)** And lastly, we'll GRANT ALL ON FUTURE TABLES IN SCHEMA EVENTS.PRODUCT
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=234)** to the role.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=239)** I'm going to put a semicolon in front of each of these statements so I can run these in parallel.
>
> **[4:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=249)** Oh, whoops.
>
> **[4:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=251)** Forgot my S here on this last statement, so I'll run this one again.
>
> **[4:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=256)** It looks like we're good there.
>
> **[4:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=260)** And then we're going to grant this role to the Kafka user that we created.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=266)** So I'm going say GRANT ROLE KAFKA_WRITE_ROLE TO USER KAFKA_USER.
>
> **[4:40](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=280)** And then finally, ALTER USER KAFKA_USER SET DEFAULT_ROLE = KAFKA_WRITE_ROLE.
>
> **[4:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=295)** Finally, we'll want to assign the public key that we generated earlier in the video to this user.
>
> **[5:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=302)** We can just copy and paste the contents of that public key directly into an ALTER USER statement.
>
> **[5:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=311)** So I'm going to write the statement first, and then we'll go grab that public key.
>
> **[5:15](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=315)** So ALTER USER KAFKA_USER SET RSA_PUBLIC_KEY = '',
>
> **[5:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=325)** and this will be in single quotes.
>
> **[5:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=328)** We'll jump up to Systems Manager again, and I'm going to generate the contents of our public key.
>
> **[5:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=339)** So CAT.
>
> **[5:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=343)** Whoops. Just be careful about the case sensitivity there.
>
> **[5:49](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=349)** And we'll copy the contents here, jump back to Snowflake, paste those contents, run the ALTER USER statement, and that user should now be attached to that public key.
>
> **[6:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=367)** So our Snowflake instance now has an environment and permissions configured in order to receive data from MSK.
>
> **[6:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/preparing-your-snowflake-environment?u=76281980&t=374)** In our next video, we'll finish configuring Snowpipe streaming in the Kafka connector, which will include references to the entities we created.

> [!info]- Semantic Content
>
> **Env Vars:** msk (6), user (6), create (4), replace (4), kafka_user (4)
> **Code Keywords:** public (6), let (4), finally, (2), this. (1)
> **CLI Commands:** make (4), aws (1), cat (1)
> **Cross-References:** previous video (1), earlier in (1), next video (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)

#### Setting up your Snowpipe Kafka connect config
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=0)** - [Instructor] In this video, we'll finish setting up our config for Snowpipe Kafka Connect, which will define the connection.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=6)** This will include granting permissions to Kafka Connect, to connect to Snowflake, and defining data transfer parameters.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=14)** In order to create a config for Kafka Connect Snowpipe connection, let's first switch directories to our property files directory, so I'll throw in the CD command.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=25)** (keyboard clacks) Now before we create the config file, let's reformat our private key, which is required in order to reference it in the config.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=38)** To do this, we'll run the following command.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=43)** We'll copy the output of this command a bit later.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=48)** Next, let's create the config.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=50)** So we'll type in cat arrow, and then we're going to name this config file, "SnowflakeConnectorMSK.properties".
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=63)** I've provided the contents of this config in an exercise file associated with this video.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=70)** If you haven't pulled that up yet, feel free to pause the video and do that.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=75)** I'm going to walk through line by line the contents of this config file and explain the purpose that each serves.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=83)** So to start, we're going to want to create a generic project name.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=88)** So I'll do name equals, and we'll just call this "Streaming Project".
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=93)** Next, we're going to want to reference the Kafka Connect Sync Connector.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=99)** Then let's set the max tasks to four, and you can set this to whatever.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=105)** These are basically consumer threads.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=110)** Next, let's reference our topic.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=116)** Then we'll reference the passphrase that we created for our private key.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=127)** In the next two lines, we're going to reference the database and the schema that we created in Snowflake.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=134)** In the next three lines, we're going to reference or rather set parameters related to buffer.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=142)** These parameters dictate the size of the Kafka Buffer.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=146)** In other words, how long and how much data will be held while waiting to be sent to Snowflake.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=153)** We'll then reference our Snowflake account by referencing the URL for the Snowflake instance.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=166)** Then we're going to reference our Snowflake username that we set.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=171)** This is how Kafka will assume that user.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=178)** At this point, let's go ahead and copy the output of the query that we ran earlier on the private key.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=189)** Actually, before we do that, let's actually type in snowflake.private.key equals and now let's copy that key output and we'll paste that below.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=212)** Okay, trucking forward.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=214)** We'll next reference our Snowflake role name.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=221)** We'll then reference the ingestion method as Snowpipe streaming.
>
> **[3:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=226)** This will ensure we use Snowpipe streaming versus just Snowpipe.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=230)** Next, we'll want to set this following line to fall so as we're not looking for a particular schema here.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=244)** And then finally, we're going to ignore any bad messages.
>
> **[4:11](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=251)** Control D should save the file.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=254)** You've probably noticed in this video and specifically in this config file that we've put everything together that we've done in the previous videos of the chapter.
>
> **[4:24](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/setting-up-your-snowpipe-kafka-connect-config?u=76281980&t=264)** In the next video, we'll send some sample data through and reap the rewards of our work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), private (4), switch (1), throw (1), this, (1)
> **Cross-References:** in the next (3)
> **CLI Commands:** cd (1), cat (1)
> **Env Vars:** url (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Sending data to Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=0)** - [Instructor] We finished setting up our infrastructure for our streaming pipeline over the course of the previous videos.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=6)** In this video, we'll put the pipeline to the test by actually sending data through MSK and into Snowflake.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=13)** To start, let's run the following three commands in our existing session to initiate the connection between Kafka Connect and Snowpipe.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=21)** You'll notice we're using a new executable from the Kafka bin directory, connect-standalone.sh.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=34)** I went ahead and hit Enter.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=36)** This process is going to take a few seconds.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=38)** However, if it does run successfully, you should be able to see a materialized table in Snowflake.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=50)** Great, so this appears to be done, and we can tell that it's done by looking above at the logs.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=56)** We'll see that it did create a table.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=59)** So let's jump into Snowflake and then I'm going to refresh the left panel and then let's drill into our events database into the product schema.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=74)** And it looks like it might not have reached yet, so I'll refresh one more time.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=80)** And there you go.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=81)** We have our table and it is referencing our topic.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=88)** Next, let's start a new second session with the same instance so we can send some sample data using the instance as a provider.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=96)** I'm going to jump back to Session Manager and I'm going to start a new session.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=103)** Submit the following command, which will give you the ability to send messages to the topic we created.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=111)** This command leverages another executable provided by Kafka called kafka-console-producer.sh.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=117)** You'll also notice that we're referencing the bootstrap that we copied earlier.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=123)** So I'll press Enter and we'll see an arrow.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=126)** That arrow prompt tells us that it's ready to receive messages.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=132)** Let's send over a sample message at this point.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=136)** Keep in mind this message has to be in JSON format.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=139)** Let's mimic a practical event.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=143)** This will be a page view of your company's website homepage by user ID.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=149)** So I have a piece of data already set up, which I'll paste in here, and I'll press Enter.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=158)** Now let's jump into our Snowflake UI and let's run a query on this table to see what's in it.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=166)** So we'll type select top 10 star from our table,
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=175)** and we'll see it actually has a record in there.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=179)** You'll see two columns in the output of that query, one called record metadata and the other called record content.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=185)** Record metadata will contain metadata about your record, including timestamp and topic name.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=190)** The record content column will be the payload you submitted via the producer EC2 instance.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=196)** You've done it.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=197)** You've built and tested our streaming pipeline.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/sending-data-to-snowflake?u=76281980&t=200)** Before we part ways, head over to our next video to discuss a few final points to consider.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Env Vars:** msk (1), json (1), ec2 (1)
> **File Paths:** connect-standalone.sh (1), kafka-console-producer.sh (1)
> **Cross-References:** next video (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Final considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=0)** - [Instructor] With our streaming pipeline successfully up and running, let's talk through a few final considerations as we close out the chapter.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=7)** While we used an EC2 instance to host Kafka Connect in this course, AWS does offer a service called Amazon MSK Connect, which takes care of the hosting duties for you.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=17)** Let's quickly walk through how setup would differ should you choose this solution in a practical setting.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=22)** Keep in mind this will only work if your MSK cluster is located in a private subnet.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=28)** Firstly, compress your Kafka libraries into a ZIP and load that ZIP file into an S3 bucket.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=33)** Under MSK in the console, you'll click Custom Plugins.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=37)** Then create custom plugin where you'll reference that S3 bucket's location.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=42)** Then click Connector on the left panel within the MSK service in the console.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=47)** Then create connector.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=50)** Select Use Existing Plugin and select the plugin you created in step two.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=55)** Copy the contents from the config file we created in video seven of this chapter under the configuration settings section.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=63)** Under Identity and Access Management Role, select the role that you created with the CloudFormation MSK template.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=69)** Leave everything else as is.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=72)** Generally, it can take up to 10 to 15 minutes to finish building the connector.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=76)** Data provided by your data provider will now flow through MSK Connect at this point.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=82)** You'll no longer have to worry about maintaining and paying for an EC2 instance, assuming your provider is in a self-hosted EC2 instance.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=91)** Another consideration you'll want to take into account is that both EC2 and MSK come with associated costs.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=97)** So you'll want to be sure to terminate once you're finished with this project to avoid unexpected billing.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=103)** You can do this directly in the console, either within the services themselves or if you did use the CloudFormation template I provided, you can actually search for CloudFormation in the console and select Delete.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=115)** This will automatically terminate everything that was created from that template.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/final-considerations?u=76281980&t=119)** You now have everything you need to be successfully building out streaming pipelines on your own using MSK to land data in Snowflake.

> [!info]- Semantic Content
>
> **Env Vars:** msk (8), ec2 (4), zip (2), aws (1)
> **Code Keywords:** let (2), private (1), self (1), delete (1)
> **Exercise Files:** template (3), zip file (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** aws (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Course review and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=1)** - Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=2)** You made it and should be proud of your accomplishments.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=5)** You learned about data streaming and when to use it in the real world.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=10)** You built a successfully running streaming pipeline, and you got hands-on experience with top of the market tooling, including AWS and Snowflake.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=19)** I encourage you to download and share your certificate of completion.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=23)** You should be proud of your efforts in learning something new.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=27)** Please tag me in your post so I can see it and congratulate you once more.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=32)** If you have any questions, feel free to submit one through the Q and A function offered in this course.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=38)** And please be sure to follow me on LinkedIn to stay in the loop of any new courses I create, conferences I'll be speaking at, or just to expand our networks.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-project-build-streaming-ingestion-pipelines-for-snowflake-with-aws/course-review-and-next-steps?u=76281980&t=47)** See you next time.

> [!info]- Semantic Content
>
> **Code Keywords:** new. (1), function (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Sagar Suri]]

## Resources

- Exercise files available

## Skills Covered

- Data Streaming
- Amazon Web Services (AWS)
- Snowflake

## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[Data Engineering Pipeline Management with Apache Airflow]] | **8 of 10** | [[Data Pipeline Automation with GitHub Actions Using R and Python]] →

## Appears In

- [[Advance Your Data Engineering Skills]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[Learning SnowflakeDB]] — Snowflake
- [[Advanced Data Engineering with Snowflake]] — Snowflake

---

[↑ Back to top](#)