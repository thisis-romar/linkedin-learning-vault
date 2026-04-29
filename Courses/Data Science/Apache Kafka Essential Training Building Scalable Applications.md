---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: apache-kafka-essential-training-building-scalable-applications-19204536
url: "https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536"
level: Advanced
updated: 12/17/2024
learners: 25225
skills:
  - Apache Kafka
  - Scalable Web Applications
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGMQEGnvQbYow/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687364802921?e=2147483647&amp;v=beta&amp;t=sRAArkg-mxnPMFWPRrNqyZOVzYM-ifXQcfTiwYKD-H8"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
next_courses:
  - '[[Troubleshooting and Debugging Kafka]]'
path_nav: '[{"path":"Master Data Engineering","position":1,"total":8,"prev":null,"next":"Troubleshooting and Debugging Kafka"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/apache-kafka
  - skill/scalable-web-applications
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Apache%20Kafka%20Essential%20Training%20Building%20Scalable%20Applications.md)

![Apache Kafka Essential Training Building Scalable Applications](https://media.licdn.com/dms/image/v2/D4D0DAQGMQEGnvQbYow/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687364802921?e=2147483647&amp;v=beta&amp;t=sRAArkg-mxnPMFWPRrNqyZOVzYM-ifXQcfTiwYKD-H8)

# Apache Kafka Essential Training Building Scalable Applications

> Scalable and distributed message queuing plays an important role in building real time big data pipelines. Asynchronous publisher/subscriber models are required to handle unpredictable loads in these pipelines. Apache Kafka is the leading technology today that provides these capabilities and is an essential skill for a big data professional. In this course, Kumaran Ponnambalam provides insights in

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536) | Advanced | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Introduction to Kafka]]** (4 videos)
- **[[#3. 2. Kafka Scaling Concepts]]** (5 videos)
- **[[#4. 3. Building a Kafka Cluster]]** (5 videos)
- **[[#5. 4. Building Scalable Producers]]** (5 videos)
- **[[#6. 5. Building Scalable Consumers]]** (5 videos)
- **[[#7. 6. Kafka Best Practices]]** (4 videos)
- **[[#8. 7. Use Case Project]]** (4 videos)
- **[[#9. Conclusion]]** (1 videos)

### 1. Introduction

#### Building robust Kafka applications
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=0)** - [Kumaran] Businesses need to create reliable and performant workflows and pipelines to deal with huge amounts of big data that contain valuable insights.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=12)** Apache Kafka is the leading big data queuing technology on which such data pipelines are built.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=19)** Kafka provides various capabilities for building scalable and reliable applications, which every big data engineer needs to be aware of.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=29)** My name is Kumaran Ponnambalam.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=32)** In this course, I will discuss the scalability and resilience aspects of Apache Kafka and how to build applications using them.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=41)** Let's now start learning about Apache Kafka scaling.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3)
> **Code Keywords:** let (1)
> **Warnings:** be aware (1)
> **Speakers:** - [kumaran] (1)


### 2. 1. Introduction to Kafka

#### What is Kafka?
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=0)** - [Presenter] A good place to start this course is by reviewing some of Apache Kafka's features and capabilities.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=8)** Kafka is an events streaming platform.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=11)** Events or messages represent the actual data that is exchanged through Kafka.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=17)** The terms events and messages are used interchangeably in Kafka's context.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=23)** It is a critical piece of the big data puzzle and place an integral part in many Big Data pipelines.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=29)** Kafka is open source and can be downloaded and deployed free of cost.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=35)** There are also commercial options that provide support and serverless capabilities.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=40)** It is arguably the most popular messaging platform in the world.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=45)** In Kafka's world, there are data publishers called producers, who push messages into Kafka, and there are subscribers called consumers, who listen and receive the messages.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=58)** Producers and consumers are the standard terms in the Kafka world to represent publishers and subscribers.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=67)** What capabilities does Kafka provide for data exchange?
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=71)** It collects messages from multiple producers concurrently.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=75)** It provides persistent storage of the messages received.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=78)** This provides fault tolerance capabilities.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=81)** It transports data across from producers to consumers.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=85)** With mirroring capabilities, it can also transport across networks.
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=90)** It distributes data to multiple concurrent consumers for downstream processing.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=95)** Finally, it provides tracking of message consumption by each consumer.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=100)** This ensures at least ones delivery of messages, even if the consumers go down and come back again.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=107)** Before we dive into the course content, let's discuss the prerequisites in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### Prerequisites for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor] What are the prerequisites for this course?
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=4)** Let's begin with discussing what is covered in this course.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=7)** We are going to set up a Kafka Cluster and use it to publish data from producers and process it through consumers.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=15)** We will review the scalability and reliability aspects of Kafka and see them in action.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=21)** We will also discuss some best practices for using Kafka.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=26)** What is not covered?
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=27)** We are not going to discuss basic concepts and operations of Kafka.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=32)** We will also not discuss the basics of creating producers and consumers in Java.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=39)** With this understanding, let's get into the prerequisites.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=42)** The learner is expected to be familiar with the basics of Apache Kafka.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=47)** Please refer to the course, Apache Kafka Essentials: Getting Started with Kafka, if you are not familiar with Kafka already.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=56)** We set up Kafka and other services using Docker, so familiarity with Docker Desktop and Docker Compose are needed.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=64)** Some of the exercises are in Java 19, so familiarity with Java 19, Maven, and Java IDEs are also required.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=73)** With that being said, let's now discuss the scalability and resiliency aspects of Kafka in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), apache (2)
> **Code Keywords:** let (3)
> **Prerequisites:** set up (2), getting started (1)
> **Versions:** java 19 (2)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)
> **Speakers:** - [instructor] (1)

#### Kafka scaling and resiliency
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=0)** - [Instructor] Two of the key features that make Kafka an ideal messaging system for big data are scalability and resiliency.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=9)** Let's quickly review some of these capabilities.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=12)** We will explore more about them throughout the course.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=16)** Kafka is a horizontally scalable messaging system.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=19)** It can process millions of messages per second and can handle terabytes of data.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=25)** It is a system built for scalability.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=28)** What are some of the key scalability features in Kafka?
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=31)** Messages can be spread across multiple topics and partitions.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=35)** They can be stored and processed in parallel.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=39)** Kafka brokers can be wired together to create clusters.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=43)** Brokers in a cluster share the workload of managing and serving messages.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=48)** Kafka supports multiple concurrent producers and consumers to enable parallel publishing and consumption of data.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=56)** It also has asynchronous publishing and batching options to reduce latency as well as network traffic.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=64)** Consumer groups are another capability that allows consumers to share workloads and scale.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=71)** How does Kafka stack up in resiliency?
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=74)** Kafka supports duplication of data storage using replication and mirroring.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=79)** This allows it to recover from node or data center failures.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=84)** Kafka brokers work together to choose a controller and topic leader among them.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=89)** When one of them goes down, other brokers quickly work together to choose an alternate broker to execute these functions.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=97)** Features like offset tracking and partition reassignments help consumers to overcome failures and reprocess data without missing any messages.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=107)** In the remainder of the course we will explore more on setting up these capabilities and observing them in action.
>
> **[1:54](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=114)** Before we do that, let's first set up the exercise files in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), node (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=0)** - [Tutor] In this video, I will help you set up the exercise files for this course.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=5)** In my case, I have downloaded the exercise files into my documents exercise files directory.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=11)** Please download in a similar location in your setup.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=15)** There are two sets of exercise files here.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=18)** The Java project, that is bundled into 'KafkaScalableApps.zip' file and the Docker composed 'yml' file called 'kafka-cluster.yml'.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=27)** Let's first start to set up the Java project 'KafkaScalableApps.zip'.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=33)** Unzip the 'KafkaScalableApps.zip' file.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=36)** This will create the folder 'KafkaScalableApps' with the project contents inside it.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=42)** Open IntelliJ IDEA.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=44)** Select open.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=48)** Choose the 'KafkaScalableApps' folder and then click open.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=53)** Please make sure to select the right SDK in the project structure option.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=60)** This project is built with Java 19 so choose an SDK that is Java 19 or above, click okay.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=68)** Now, IntelliJ IDEA will proceed to compile the project.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=71)** It'll download all the dependencies if it is not already available in your Maven repository.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=77)** Make sure that the project compiles without any errors.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=81)** This project contains both the Java classes and also instructions to execute various command line steps.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=88)** The command line related steps are available in the resources directory.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=92)** Please explore the same.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=94)** We will use these as we progress through the course.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=97)** Now let's discuss some key Kafka scaling concepts in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (1), unzip (1)
> **Env Vars:** idea (2), sdk (2)
> **Tools:** intellij (2), command line (2)
> **Exercise Files:** exercise files (4)
> **Code Keywords:** let (2), case, (1)
> **Prerequisites:** set up (2), setup (1)
> **Versions:** java 19 (2)
> **File Paths:** kafka-cluster.yml (1)


### 3. 2. Kafka Scaling Concepts

#### A Kafka cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=0)** - [Instructor] Central to Kafka scale and resilience is its ability to create and manage clusters of brokers.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=7)** Let's explore more on cluster management in this video.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=11)** What is a Kafka cluster?
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=13)** A Kafka cluster is a group of Kafka brokers working together to receive, store, and deliver data.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=21)** Each Kafka cluster has a unique cluster ID which each of the brokers in the cluster know about.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=29)** Each broker additionally has a unique node ID within this cluster.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=34)** Brokers inside the cluster share work based on topic partitions.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=39)** The brokers work with each other collaboratively to manage the cluster.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=45)** Management and control information about the cluster is stored in a dataset called metadata.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=52)** This metadata contains information about the cluster.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=56)** This includes data about members of the cluster and their roles, topics in the cluster and their configurations, current status of the brokers and topics, and also the current status of consumers and consumer groups.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=71)** This information is kept up to date by the cluster.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=75)** Each broker node in the cluster has its own cached main memory copy of the metadata.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=82)** Changes to the metadata are constantly communicated and updated between the nodes.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=88)** Each node in the Kafka cluster can play one or more roles.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=93)** The first role is that of a broker.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=95)** The broker is the worker in the cluster.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=98)** It is responsible for receiving data for the partitions it manages, storing them, and publishing them to subscribers.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=107)** They also handle required replication.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=109)** A controller in the cluster manages the cluster.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=113)** It is responsible for administration activities.
>
> **[1:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=117)** A Kafka node in the cluster can be just broker only, controller only, or can be both the broker and the controller.
>
> **[2:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=125)** Typically, there are multiple controllers in the cluster and one of these controllers become the active controller that manages the cluster.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=134)** We will discuss more on this in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Kafka controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=0)** - [Instructor] Let's discuss controllers in detail in this video.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=4)** A Kafka cluster can have multiple nodes configured as controllers.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=10)** One of these nodes will take the role of the active controller.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=14)** The active controller is responsible for managing the cluster.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=19)** Other controller nodes just observe the active controller and are ready to take over when the active controller goes down.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=27)** Controllers have a voting mechanism for selecting the active controller.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=32)** When the cluster is started up or if the active controller goes down, the controllers that are currently running in the cluster vote among themselves and choose one of them to be the active controller.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=45)** How do the nodes in the cluster share their metadata?
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=49)** As seen earlier, each node has its own copy of the metadata.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=53)** As the active controller is doing all the administration, it'll publish the changes as events to a special topic.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=62)** This topic is called __cluster_metadata.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=67)** It has only one partition for which the active controller will be the partition leader.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=73)** All other nodes in the cluster, whether they are brokers or controllers, will listen to this topic.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=80)** They will read the changes and update their internal copy of the metadata.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=84)** This way, the metadata stays current and synced between all the nodes.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=89)** In older versions of Kafka, ZooKeeper was used instead of this topic.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=95)** With newer versions, that dependency is removed.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=98)** This helps Kafka scale much better.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Replication
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=0)** - [Instructor] In this video, let's explore how Kafka provides resiliency with replication.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=7)** Replication is a feature in Kafka that provides resiliency against individual broker failures.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=14)** Replication works by maintaining multiple copies of individual partition logs across different brokers.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=22)** The unit of replication is a single topic partition.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=26)** All messages in a partition are replicated.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=30)** When a partition is created, we can specify the number of replicas needed for the partition.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=35)** This is set using the parameter replication factor.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=39)** A partition would always have one leader replica and zero or more follower replicas.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=46)** The leader replica is the primary copy where all reads and writes happen.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=51)** Follower replicas are the backups where the primary copy is replicated.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=56)** Replication factor counts the total copies available, including the leader replica.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=62)** The leader replica is assigned to a leader broker.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=66)** The leader broker manages all reads and writes for the partition.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=70)** This is also called the partition leader.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=73)** It also maintains the local log files.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=76)** Brokers owning replica copies will subscribe to the leader broker to get new messages and update their copies.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=83)** The controller distributes leaders and followers evenly across all the brokers.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=89)** When the topic is created, the active controller takes care of distributing partitions.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=95)** It first distributes the leader replicas among the brokers available.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=99)** If the number of brokers is less than the number of partitions, a single broker may get multiple leader replicas for the same topic.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=107)** Then it distributes the follower replicas to brokers, such that the replicas are owned by the brokers which are not that leader broker.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=116)** The replication factor cannot be larger than the total number of brokers available.
>
> **[2:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=122)** Now, let's look at an example for replication.
>
> **[2:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=125)** We have a Kafka cluster with four brokers.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=128)** We have a single topic, which is created with three partitions, and a replication factor of two.
>
> **[2:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=135)** In this example, leader replicas are shown in green and follower replicas are shown in blue.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=141)** For partition zero, Broker 1 is assigned as the leader replica, and Broker 2 gets the follower replica.
>
> **[2:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=148)** For partition one, Broker 2 gets the leader replica, and Broker 3 gets the partition replica, and so on.
>
> **[2:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=155)** The controller ensures that the leader replicas are distributed across brokers for workload balancing.
>
> **[2:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=162)** Similarly, it ensures that the follower replicas are distributed across brokers to provide maximum resiliency.
>
> **[2:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=170)** In the next video, we will discuss partition leaders, and how resiliency is ensured using replicas.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Partition leaders
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=0)** - [Instructor] In the last video, we discussed how replication uses brokers as partition leaders.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=7)** Now, let's continue to explore more on how partition leaders work.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=12)** The broker instance that owns the leader replica of a partition is called the partition leader.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=19)** The active controller will assign partition leaders for partitions during topic creation.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=25)** A Kafka producer, when publishing a message, will choose a partition for the message and will send the message to the corresponding partition leader.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=35)** Similarly, a Kafka consumer will work directly with the partition leader to consume messages in that partition.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=43)** The partition leader also stores partition data in its own log files.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=49)** What about follower brokers?
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=51)** Brokers that own the follower replicas for a partition are called the follower brokers.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=56)** Do note that the same broker can be the partition leader for some partitions and the follower broker for the other partitions.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=64)** Follower brokers subscribe with the leaders for partition data.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=69)** They keep receiving new messages and will use that to update their local copies of metadata.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=75)** Partition leadership is evenly distributed by the active controller across the brokers in the cluster.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=82)** Let's revisit the example we saw in the previous video.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=86)** In this case, brokers 1, 2, and 3 are the lead brokers for partitions 0, 1, and 2 respectively.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=94)** Broker 4 is not the leader broker for any partition.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=97)** Brokers 2, 3, and 4 are the follower brokers for partitions 0, 1, and 2 respectively.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=104)** Given that the replication factor is only 2, there is only one follower for each partition.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=111)** Increasing the replication factor will create more followers and hence more redundancy but at the expense of more work to replicate data.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=121)** How does Kafka take care of ensuring uninterrupted service when the partition leader goes down.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=127)** Let's say that a partition leader for a specific partition goes down.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=132)** The active controller is then notified of the lost broker.
>
> **[2:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=136)** The active controller will then retrieve the list of all the topic partitions for which this broker is the partition leader.
>
> **[2:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=144)** This information is available in the metadata.
>
> **[2:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=147)** Note that this broker can be handling multiple topics and their partitions.
>
> **[2:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=153)** The active controller will then identify the list of in-sync replicas for each partition.
>
> **[2:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=159)** An in-sync replica is one which is completely synced up with a leader with no messages left to replicate.
>
> **[2:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=167)** It'll then choose one of the brokers with an in-sync replica as the new partition leader.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=173)** Again, the active controller ensures even distribution of load.
>
> **[2:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=177)** The broker chosen as the new leader is now notified by the active controller.
>
> **[3:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=182)** This information is also received by the producers and consumers of that partition.
>
> **[3:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=188)** The new leader then takes over the read/write operations and the producers and consumers will start talking to this broker going forward.
>
> **[3:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=197)** The follower brokers will now start following this leader to keep track of their replicas.
>
> **[3:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=202)** What happens if a follower broker goes down?
>
> **[3:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=205)** In that case, Kafka will simply mark that replica as out of sync.
>
> **[3:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=210)** When the broker comes back up, it'll catch up with the leader.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), continue (1)
> **Cross-References:** in the last (1), we discussed (1), previous video (1)
> **Warnings:** note that (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Security
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=0)** - [Instructor] One of the requirements for enterprise data processing is ensuring security of data both at rest and in motion.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=8)** Let's review various security options available in Kafka in this video.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=13)** Kafka provides client authentication using SSL/SASL.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=18)** This applies to producers, consumers, and other brokers.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=23)** Kafka provides read/write authentication control by individual topics and consumer groups.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=29)** Data in flight can be encrypted using SSL.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=33)** For at-rest encryption, Kafka does not provide an out-of-the-box solution.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=39)** It is recommended to use encrypted discs for storage of log files.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=44)** Kafka's security features are basic, as it is expected to be used as a messaging system within a trusted network where the producers and consumers are all also in the same trusted domain.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=57)** It is not recommended to publicly expose Kafka through the internet without an API wrapper layer.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=65)** Similarly, multi-tenancy is hard to implement in Kafka, as SSL certificate and key management by individual tenants and users does not scale.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=76)** It is recommended to use additional custom layers in the producers and consumers to provide fine-grained security and multi-tenancy.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=85)** Having discussed key Kafka features in this chapter, let's set up a cluster using Docker in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (3), sasl (1), api (1)
> **Best Practices:** recommended (3)
> **Code Keywords:** let (2)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Building a Kafka Cluster

#### Kafka cluster setup
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=0)** - In this chapter, we will set up and run a Kafka cluster and observe its scalability and resiliency features.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=9)** The instructions for this chapter are available under the resources/chapter3commands.txt file inside the Java project.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=18)** In this video, let's review the Kafka cluster setup docker compose file called Kafka-cluster.yml.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=27)** This file is available as part of the downloaded exercises.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=31)** In this file, we will start four containers.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=35)** Three will be for Kafka brokers and one will be for Kafdrop.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=39)** Let's now explore the container setup and understand their configurations.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=44)** We start with the first container called Kafka-1.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=47)** This is the first Kafka container as part of a Kafka cluster.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=52)** It uses the image for Kafka version 3.4.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=56)** This version is hard coded to ensure that all commands and exercises work without issues.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=63)** You are welcome to try other versions but do note that there can be changes in commands or Kafka behavior if other versions are used.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=73)** Now, let's get to the environment variables for Kafka.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=77)** The first variable, Kafka_Enable_Kraft sets the Kraft mode to yes.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=83)** Kafka can run in either the Kraft mode or the ZooKeeper mode.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=87)** ZooKeeper is being phased out so we will only use the Kraft mode.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=93)** We allow the Kafka listener to have plain text communications.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=97)** This is only recommended for development and educational setups.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=101)** We set a unique node ID for this broker with the ID 1001.
>
> **[1:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=108)** The node ID should be unique within the cluster.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=111)** Next, we have the cluster ID for this cluster.
>
> **[1:54](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=114)** This should be set to the same value for all brokers in the cluster.
>
> **[1:58](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=118)** As discussed before, a Kafka node can run as a broker, a controller, or both.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=124)** We set the role for this node to be both the broker and controller.
>
> **[2:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=129)** The listener name for this controller is set as controller for future references.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=134)** A Kafka instance runs three types of ports.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=138)** The client port is used for external communications.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=141)** The controller port is used for controller communications.
>
> **[2:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=145)** The internal port is used for communications inside the docker environment between the brokers in the cluster.
>
> **[2:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=153)** We first set the security protocol to plain text for all these ports.
>
> **[2:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=158)** Next, the Controller_Quorum_Voters configuration list all the available controllers in the cluster.
>
> **[2:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=165)** We are using Kafka-1 and Kafka-2 as controllers.
>
> **[2:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=169)** The ports mentioned here are the controller ports that start with the number 2909.
>
> **[2:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=176)** The list of advertised listeners are local host for external communications on port 9092 and Kafka-1 for internal communications on port 19012.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=189)** The port 9092 should be used when connecting to this broker from outside the Docker network.
>
> **[3:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=195)** Port 19012 is used when connecting inside the Docker network.
>
> **[3:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=200)** The next configuration is the list of configured listeners.
>
> **[3:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=204)** This has the advertised listeners as well as the controller port.
>
> **[3:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=208)** The internal listener name is set as internal and this is referenced in other configurations.
>
> **[3:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=215)** We expose port 9092 to outside the docker setup as this is needed for clients outside the Docker to connect to this broker.
>
> **[3:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=224)** Kafka-2 is the next node.
>
> **[3:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=227)** This is configured with node ID 1002 and is setup as both the broker and controller.
>
> **[3:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=233)** Configurations are similar to Kafka-1 except for the port numbers used which end with the number three.
>
> **[4:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=241)** Kafka-3 is the third node and its ID is 1003.
>
> **[4:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=246)** This is configured as only a broker, so it does not expose any controller ports.
>
> **[4:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=252)** The Controller_Quorum_Voters parameter is still needed since this broker needs to know who the controllers are.
>
> **[4:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=260)** Its port numbers end with the number four.
>
> **[4:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=263)** Finally, we have Kafdrop which is a web interface that can be used to monitor a Kafka cluster.
>
> **[4:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=270)** It runs on port 9000.
>
> **[4:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=272)** The key parameter here is the Kafka broker connect that lists all the brokers in the Kafka cluster.
>
> **[4:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=280)** This completes our discussion on the Kafka configuration.
>
> **[4:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=284)** We will set up and observe this cluster in the next few videos.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), docker (6)
> **Ports:** port 9092 (3), port 19012 (2), port 9000 (1)
> **Prerequisites:** setup (4), set up (2)
> **Code Keywords:** let (3), finally, (1), interface (1)
> **File Paths:** resources/chapter3commands.txt (1), kafka-cluster.yml (1)
> **Versions:** version 3 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Running the cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=0)** - [Instructor] In this video, we will start up the Kafka cluster and observe it through Kafdrop.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=6)** The instructions for this chapter are available in the resources/chapter-3-commands.txt file.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=14)** Please install Docker Desktop or your desktop or laptop if you have not already done so.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=21)** Then open a terminal window if you have macOS or Linux.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=26)** In Windows, please use the PowerShell window.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=29)** We will be using a terminal window for this video.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=33)** First, navigate to the directory where the Docker Compose file has been downloaded.
>
> **[0:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=38)** Here, execute the command to start the cluster.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=42)** The cluster can be started by the command docker-compose -f kafka-cluster.yml up -d.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=55)** This command will now start downloading the images for the containers if they are not already present in your Docker setup, and then start up the containers.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=64)** Downloading images may take some significant time.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=68)** Once this command has completed, we can check the status of the containers using docker ps.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=75)** We should see four containers running.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=78)** We now go to localhost:9000 and open the Kafdrop application.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=85)** The Kafka cluster overview tells the list of bootstrap servers used by Kafdrop.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=91)** It also provides summaries of the topics and partitions available.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=96)** We have not created any so far, so these numbers are zero.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=100)** Below in the brokers list, we can see the list of all brokers available in the cluster.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=105)** Clicking on a specific broker shows more details about the broker.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=111)** Kafdrop does not report correctly about the current controller in the cluster, so we will later explore command line options for that.
>
> **[1:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=119)** We will come back to this UI in later videos in this chapter.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=124)** If you need to shut down the cluster, then execute the shutdown command as shown here in the same terminal window and directory.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=132)** In the next video, we will create a couple of topics and observe how they are distributed in the cluster.

> [!info]- Semantic Content
>
> **Tools:** terminal (3), docker desktop (1), powershell (1), command line (1)
> **CLI Commands:** docker (5)
> **UI Navigation:** navigate to (1), go to (1), open the (1)
> **File Paths:** resources/chapter-3-commands.txt (1), kafka-cluster.yml (1)
> **Prerequisites:** install (1), setup (1)
> **Code Identifiers:** macos (1)
> **URLs:** [localhost:9000](https://localhost:9000) (1)
> **Ports:** :9000 (1)

#### Creating topics with replication
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=0)** - [Instructor] Let's now create a couple of topics in Kafka with partitions and replications.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=6)** Then we will observe how partitions and replicas are distributed among the brokers.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=12)** In order to create topics, we can either do through the command line tools or we can do through the Kafdrop UI.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=20)** We will use the Kafdrop UI for that now.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=23)** First, let's click the New button to open the topic creation page.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=29)** We'll first create a topic called Kafka.learning.orders.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=36)** This we will create with three partitions and two replicas.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=40)** We hit the Create button, the topic is successfully created.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=46)** We will then create another topic called Kafka.learning.tweets.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=52)** Here we will use four partitions and three replicas.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=56)** We again create this topic in the same manner.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=59)** Now let's go back to the Kafdrop homepage.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=62)** We can see the topics now showing up in the Topics list.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=66)** Let's click on the Kafka.learning.orders topic to explore more.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=74)** In the Partition Detail table, we find the details around individual partitions.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=80)** For each partition, we see the leader replica node.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=84)** The leader replicas are being distributed equally among all the brokers.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=89)** The replica nodes show both the leader and follower nodes.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=93)** Again we see that the follower replicas are distributed equally among the brokers.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=99)** In-sync replicas are the one that are currently in sync with the leader.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=104)** If replica brokers are offline, they would also show up here.
>
> **[1:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=110)** Let's now go back and look at the Kafka.learning.tweets topic.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=116)** We see four partitions, which is more than the number of brokers.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=120)** So one of the brokers, broker 1002, is the leader broker for two partitions.
>
> **[2:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=126)** Since the replica account equals the number of brokers, each broker gets a copy of the replica for each partition.
>
> **[2:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=133)** Let's go back again to the main page.
>
> **[2:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=136)** Here, when we click on a specific broker in the broker page, it shows a summary by each broker.
>
> **[2:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=143)** It also shows the topics and partitions that this broker would be handling.
>
> **[2:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=148)** Now let's publish some messages and observe Kafka in action in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **UI Navigation:** click on (2), open the (1)
> **CLI Commands:** find (1), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Kafka clusters in action
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=0)** - [Instructor] Having set up a cluster and created some topics, let's now publish and consume messages with this cluster and observe how Kafka scales with partitions.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=11)** For use in this exercise, we have a SimpleProducer and a SimpleConsumer in the package chapter three.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=18)** Let's go to the SimpleConsumer first in KafkaSimpleConsumer.java.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=24)** This consumer subscribes to the kafka.learning.orders topic.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=32)** It receives data from the topic and prints these messages to the console.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=36)** It uses the Kafka-Java-consumer as the consumer group.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=41)** Let's run this consumer now.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=46)** The consumer is running, but there are no messages in Kafka, so there is nothing that is getting printed.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=52)** Let's now go to the Kafdrop UI.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=55)** Let's click on the Kafka.Learning.Orders topic.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=59)** Now you can see the consumer group showing up here.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=63)** Now Kafka is keeping track of the offsets consumed by the consumer.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=67)** There are no messages in the topic partitions so there is no lag shown.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=72)** Let's go back to intelligent idea.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=75)** We now stop the consumer.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=80)** We then go to Kafka's SimpleProducer.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=83)** This producer publishes 20 messages at two second intervals to the Kafka Learning Orders topic.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=91)** Let's run the producer now.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=99)** As the producer starts running, let's switch to Kafdrop and keep refreshing the page.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=105)** In the partition detail, we see that the last offset keeps increasing across partitions.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=111)** Messages are distributed across partitions so all partitions see new messages.
>
> **[1:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=117)** This size also grows.
>
> **[1:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=119)** Since the consumer is not running, the lag on the consumer is also increasing.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=124)** We see that a total of 20 messages showed up and the lag is also 20.
>
> **[2:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=130)** Now let's click on one of the partitions.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=132)** Here we can see the actual messages that are sent to the partition.
>
> **[2:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=137)** This page can also be used to explore the messages inside each partition.
>
> **[2:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=142)** Let's go back again to the main page.
>
> **[2:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=144)** Now switch to intelligent idea.
>
> **[2:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=147)** We again start the consumer.
>
> **[2:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=151)** We can immediately see that the consumer starts fetching the messages and print them.
>
> **[2:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=157)** Let's go back to the Kafdrop UI and check the numbers and also keep refreshing the page.
>
> **[2:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=162)** We can now see that the lag has reduced to zero and all pending messages have been consumed.
>
> **[2:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=168)** We now, again, go back to intelligent idea and start the producer also, when the consumer is running.
>
> **[2:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=179)** Now, as we keep continuously refreshing, we see that messages are getting added, the lag goes up momentarily but goes down again as the message is consumed.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=189)** Once the new set of 20 messages are consumed, the lag goes back to zero.
>
> **[3:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=195)** Let's also check the Kafka Consumer Group name.
>
> **[3:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=199)** Here we can see the lag numbers by individual partitions.
>
> **[3:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=203)** This information helps troubleshoot if specific partitions are not being properly consumed.
>
> **[3:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=208)** In real world scenarios, there is continuous publishing and consumption of data and these numbers will keep going up and down.
>
> **[3:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=217)** Kafka distributes messages across partitions and multiple customers in a consumer group can process these messages in parallel, providing scalability.
>
> **[3:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=227)** In the next video, let's see Kafka resiliency in action.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), switch (2)
> **UI Navigation:** go to (3), click on (2), switch to (2)
> **Cross-References:** go back to (3), in the next (1)
> **File Paths:** kafkasimpleconsumer.java (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Kafka resiliency in action
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=0)** - [Instructor] In this video, we will see how Kafka redistributes workloads and maintains the service.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=6)** As brokers go down and come up.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=10)** First open a shell window and log into Kafka 3.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=14)** We can log into Kafka 3 using the Docker Exec command.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=18)** Now navigate to the Kafka bin directory.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=21)** Here we will see several shell scripts for monitoring Kafka.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=26)** We can look at the current controller status for Kafka using the Kafka metadata quorum dot search file.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=33)** We provide as input the bootstrap server and use the described command with the status request.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=41)** The status shows the cluster status, starting with the configured cluster ID.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=46)** Leader ID points to the current active controller, which in this case is Broker 1001.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=52)** We will shut down this broker and see how the cluster responds.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=57)** We also see there is no follower lag, which means all the followers have caught up with the metadata changes that are being pushed by the leader.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=66)** The current voters list shows the list of controllers configured for the cluster.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=72)** Here we have two controllers, namely 1001 and 1002.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=77)** The current observers is the list of brokers who are not controllers.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=81)** This is 1003.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=84)** We now go to the Kafdrop UI.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=86)** We go to the topics page for Kafka learning orders topic and observe how the partitions are set up.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=94)** We see that all the replicas are up and there are no offline replicas.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=99)** The broker 1001 is the leader for partition zero and the follower for partition two.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=106)** Let's go back to IntelliJ IDEA.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=109)** First I'm going to have this simple consumer running and printing consumer messages.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=121)** Next, in the simple producer I'm going to modify the program to publish 200 messages at two second intervals.
>
> **[2:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=130)** This will ensure that the producer is running for a long time while we shut down and bring up the brokers.
>
> **[2:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=136)** Let's run the producer now.
>
> **[2:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=139)** We now go to the command line and stop the container Kafka 1.
>
> **[2:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=145)** Kafka 1 is stopped now.
>
> **[2:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=147)** Let's observe the producer and consumer to see if there are any errors showing up.
>
> **[2:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=154)** We don't see any errors here.
>
> **[2:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=156)** Let's go back to the Kafdrop UI and refresh the topics page.
>
> **[2:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=161)** It may take some time to refresh as Kafdrop has lost connection to one of the brokers and may take time to recover.
>
> **[2:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=168)** We now see that broker 1001 no longer has any lead replicas.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=173)** 1002 has taken over as the partition leader for partition zero.
>
> **[2:58](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=178)** The replicas for 1001 are now under the offline replica nodes, so Kafka has redistributed the partition leadership to other replica brokers.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=189)** Let's check the cluster status in the command line.
>
> **[3:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=192)** We now see that Node 1002 has taken over as the active controller as shown by the leader ID.
>
> **[3:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=199)** We also see the max follower lag showing up to 3894.
>
> **[3:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=204)** This means that the other controller, 1001, has not caught up with the current leaders as it is down.
>
> **[3:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=211)** Let's start the broker Kafka 1 again.
>
> **[3:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=216)** Now let's check the status of the replicas.
>
> **[3:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=219)** We now see the replicas for 1001 are back online and are in sync.
>
> **[3:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=225)** This means that broker 1001 has caught up on the missing messages, but we have also see that partition leadership has not switched for partition zero.
>
> **[3:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=236)** This is because Kafka controller waits for some time to make sure that the newly restarted broker is stable before switching it as the leader node.
>
> **[4:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=245)** Check this after a few minutes and most probably the leadership would be restored.
>
> **[4:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=250)** Let's check on the cluster status also.
>
> **[4:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=254)** We still see the broker 1002 is the active controller, even though broker 1001 has come up.
>
> **[4:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=261)** Broker 1001 is now a standby, but we do not see any follower lag.
>
> **[4:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=267)** This means that broker 1001 has caught up on all the pending messages from the cluster metadata topic and its internal metadata is up to date.
>
> **[4:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=277)** As observed in this demo, Kafka is able to handle a situation when a broker or controller goes down and comes back up.
>
> **[4:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=285)** Throughout this process, the producer and consumer were able to do their work without any errors.
>
> **[4:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=291)** In the next chapter, we will explore the producer side of scalability and resiliency.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **CLI Commands:** node (2), docker (1), make (1)
> **UI Navigation:** go to (3), navigate to (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** command line (2), intellij (1)
> **Definitions:** means that (3)
> **Env Vars:** idea (1)
> **Versions:** node 1002 (1)


### 5. 4. Building Scalable Producers

#### Producer internals
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=0)** - [Instructor] In the last two chapters, we focused on the Kafka cluster and how it enables scaling and resilience.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=8)** In this chapter, we will explore how the Kafka Producer takes care of the same.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=13)** In this video, let's study Producer internals.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=17)** The Kafka Producer is a client library that is embedded within the client which is usually returned in a programming language like Scala, Java, or Python.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=29)** What happens within the client when it receives calls from the host program?
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=34)** When a Kafka Producer is created by the main program it receives various configuration information, the key among them being the list of bootstrap servers.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=45)** We need to specify at least one bootstrap server for Kafka.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=49)** The Producer then contacts the bootstrap server and collects metadata.
>
> **[0:54](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=54)** It first collects information about all the other Kafka brokers in the cluster.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=59)** It also receives information about topics, their partitions, and the partition leaders.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=65)** It also subscribes to the changes in metadata and keeps track of them.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=71)** What happens when the host program sends a ProducerRecord to the Producer client using the send method?
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=78)** The first thing this Producer does is to serialize the message with the key and value serializers set up in the Kafka connection properties.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=87)** Next comes partition selection.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=89)** The partition for the message is selected by the Producer, not by the Kafka cluster.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=94)** If the message has a key, then the Producer will use hash partitioning to identify the given partition.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=101)** If no key is present, it will use a round robin method.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=105)** Custom partition selectors can also be implemented.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=109)** The Producer maintains a local batch for each partition which is an in-memory cache.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=115)** The message is then added to the corresponding partition batch.
>
> **[1:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=119)** A separate Producer thread is used to push each batch to the corresponding partition leader broker at periodic intervals.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=127)** This interval is configurable and we will discuss this later in the chapter.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=132)** Then once the partition leader has received and processed the message, the Producer will receive an acknowledgement which it will pass on to the host program.
>
> **[2:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=142)** In the next video, let's deep dive into publishing modes available in the Producer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Cross-References:** in the last (1), later in (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Producer publishing options
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=0)** - [Instructor] We will explore three producer publishing modes, and their are advantages and shortcomings in this videos.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=7)** These three modes provide trade offs between scale, guaranteed delivery, and error handling.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=14)** The first mode is the Synchronous Mode.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=17)** In this case, the client code sends the message to the local producer.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=21)** It then waits for the message to be actually sent to Kafka, and the acknowledgement received.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=27)** The host thread is blocked until the acknowledgement is received.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=31)** So if there are any errors in sending, the same thread can process the error before moving on to the next message.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=39)** The call returns a record metadata object which contains information about the partition the message was published to, and the Kafka offset for the message in that partition.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=49)** This method is simple and shows guaranteed message delivery, and has the ability to process errors in the same thread.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=57)** The thread can also retry publishing the message or skip the message.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=61)** Given that this is synchronous, the method is slow, as it waits for the network round trip to the Kafka broker, which in turn needs to write and replicate data.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=71)** It does not exploit the batch publishing capability of the producer, as it publishes one message at a time.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=78)** The second publishing method is Asynchronous Publishing with No-Check.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=83)** This is also called the Fire and Forget Method.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=86)** Here, the client sends the message to the local producer, but does not wait for acknowledgement.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=92)** The host thread is not blocked, but it moves on to further processing.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=97)** The local producer caches the message in batches.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=101)** A separate thread publishes it to Kafka.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=104)** This method has low latency and scaling from the client side, as the client thread does not wait for acknowledgement, but failures are not tracked and retried, so there is the possibility of missed messages in case of network failures.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=121)** The third method is the Asynchronous Mode with Callback.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=124)** Here the client sends the messages to the local producer.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=128)** It also provides a callback function to process results.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=132)** The client moves on with further processing, and it is not blocked.
>
> **[2:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=136)** The local producer caches and then uses a separate thread to publish to Kafka.
>
> **[2:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=142)** When results are returned by Kafka, the callback function is called with the RecordMetaData object or with the exceptions encountered.
>
> **[2:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=151)** It is now up to the client to take any action it desires.
>
> **[2:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=155)** This has low latency as the client code is not blocked, but error handling can get complex, especially if message ordering is needed.
>
> **[2:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=164)** In a real world scenario, choose a method that is most suitable for the use case, specifically, if delivery guarantees and ordering are required.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=173)** We will see examples of using these methods in Java later in the chapter.
>
> **[2:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=179)** Let's now review acknowledgements in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), function (2), let (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Acknowledgments in Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=0)** - [Instructor] In the previous video, we discussed how the various publishing modes depend upon acknowledgements from the Kafka broker.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=8)** Let's explore more about acknowledgement options in this video.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=13)** What is a Kafka acknowledgement?
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=15)** A producer client needs to know if the message has been successfully received and stored by the broker.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=22)** It is also helpful to know if the message has been replicated, so in case of broker failures, the message is still available.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=30)** The behavior of acknowledgements is controlled by the parameter ACKS.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=36)** This parameter is set on the producer's side during broker configuration.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=41)** It determines the number of replicas of a partition that must successfully receive the message before the send operation is declared successful.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=51)** Do note that the producer only sends the message to the leader partition and then it is the leader partition that needs to propagate this message to the replicas.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=61)** The more the replicas that are successfully updated, the better is the guarantee that the message has been delivered and is available even in case of broker failures.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=72)** But more replicas also means more latency in completing the operation as the partition leader needs to coordinate with more brokers to complete the replication.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=84)** There are three possible values for the ACKS parameter.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=88)** Please note that this works in combination with the producer publishing options as discussed in the previous video.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=96)** A value of zero means that there is no acknowledgement needed.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=100)** This provides really high throughput but has no message guarantee.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=105)** A value of one means that the leader replica should successfully receive and store the message.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=111)** This is the default value.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=113)** There is an impact on throughput if synchronous mode is used, as the publishing thread waits for the acknowledgement.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=120)** A value of all means that all in-sync replicas should receive the message before an acknowledgement is received.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=127)** It creates more latency if synchronous mode is used.
>
> **[2:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=131)** In the next video, let's explore some additional producer parameters.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), we discussed (1), in the next (1)
> **Code Keywords:** let (2)
> **Env Vars:** acks (2)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### Additional producer parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=0)** - [Narrator] Let's explore some additional producer parameters in this video.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=5)** All parameters are, again, set during Kafka producer creation.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=10)** The first parameter is buffer.memory.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=13)** This is the total amount of memory provided on the producer clients for caching messages.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=19)** The more the memory, the higher is the ability to cache.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=23)** The second parameter is compression.type.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=26)** This compresses messages that are sent over the wire, resulting in lower payload sizes and lower network bandwidth requirements.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=35)** However, compression has the overhead of compressing and decompressing messages.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=41)** Various options are available including gzip, snappy, lz4 and zstd.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=49)** Then comes batch.size.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=51)** This sets the threshold size of the batch in bytes for a given partition.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=57)** The producer waits for a batch of messages to attain this size before the batch is sent to the partition leader, this saves on the number of round trips.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=67)** The next parameter is linger.ms, is the maximum time the producer will wait for a given batch to attain batch.size.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=76)** If this time is exceeded, then the batch is anyway sent to Kafka.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=80)** So while a batch is being built up, there are two thresholds to control when the batch is dispatched to Kafka.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=87)** It is either if the batch reaches batch.size or if the linger.ms has exceeded.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=94)** There are a number of additional parameters available for producers.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=98)** Please review them using the URL shown here.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=101)** In the next video, we will implement several options we learned in this chapter using a Java producer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type. (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Java producer options example
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=0)** - [Instructor] In this video, let's implement some of the producer options we learned in this chapter using a sample Java producer.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=9)** The code for this example is available in the com learning Kafka scalable apps, chapter four package.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=17)** Let's first review the file KafkaproducerWithOptions.java.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=23)** We start off by setting the basic Kafka properties including bootstrap servers and the serializers.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=31)** We then set the ACKS option to "all."
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=34)** This means, all replicas need to acknowledge receipt of the message.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=39)** We also set the compression type to GZIP.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=42)** Using these parameters, we create the Kafka Producer.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=47)** Let's now use all the three publishing options to send messages.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=52)** Let's first start publishing asynchronously without any checks for success.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=57)** Note that this checks only for delivery of messages.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=61)** If the producer is not able to serialize the message, we will still receive errors.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=67)** Here, we create a producer record.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=70)** Then we simply use the send method to send the message.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=74)** There is no variable in which the return values are assigned to.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=78)** In the next example, we publish synchronously and check for results.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=84)** The code is similar to asynchronous publishing, except that the returned values from the send method are assigned to a record metadata variable.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=93)** This makes the code to block until this variable is populated.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=97)** On successful completion, we print the resulting partition and offset values.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=103)** If there is an issue with this publishing, an exception is returned.
>
> **[1:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=108)** Finally, we will use asynchronous publishing with callback.
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=112)** For this, we first need to define a callback class.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=116)** In this case, this is KafkaCallBack.java.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=120)** Let's explore the Kafka callback code first.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=124)** We create this class to implement the callback interface.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=128)** When creating an object of this class, we can also provide additional context about the message.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=134)** So, in the case of failures, we can relate the context to the failure.
>
> **[2:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=139)** Here, we are creating the callback with the message key and then storing it in an instance variable.
>
> **[2:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=146)** We have to implement the on completion method that receives both the record metadata and an exception.
>
> **[2:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=153)** We first check if an exception is returned and then handle the exception.
>
> **[2:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=158)** Else, we handle the successful completion for the publishing process.
>
> **[2:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=162)** The message key here provides us info about on the specific message so that can be used for further processing.
>
> **[2:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=170)** Let's go back to the main class.
>
> **[2:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=172)** For publishing with callback, the operations are similar to the earlier ones, except that we pass a callback object as part of the send method.
>
> **[3:03](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=183)** The callback object is created with the required context here.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=189)** Let's execute this code now and review the results.
>
> **[3:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=193)** If we get popped up with an execution window, please choose the module here as Kafka scalable apps and hit run.
>
> **[3:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=201)** As we observe here, these options have been successfully executed.
>
> **[3:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=206)** In the next chapter, let's look at the consumer side of scaling and resilience.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), class. (2), finally, (1), this, (1), case, (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** kafkaproducerwithoptions.java (1), kafkacallback.java (1)
> **Env Vars:** acks (1), gzip (1)
> **Analogies:** similar to (2)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Building Scalable Consumers

#### How consumer works
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=0)** - [Instructor] In the previous chapter, we explored the options available on the producer side for scale and resilience in Kafka.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=9)** In this chapter, let's explore the consumer side.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=12)** In this video, let's dive into some internals around how a Kafka consumer works.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=19)** First, let's start with the group coordinator.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=22)** Kafka consumers are typically part of consumer groups.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=26)** Each consumer group has a group coordinator allocated to it.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=30)** The group coordinator is a Kafka broker in the Kafka cluster.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=35)** The controller designates a group coordinator when a new consumer group is used to access Kafka.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=42)** The coordinator keeps track of all the active consumers in the consumer group.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=47)** It does so by receiving heart beats from the consumer.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=51)** When the consumer connects to Kafka, it establishes this heart beat with the corresponding group coordinator.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=57)** When the heart beat stops, the coordinator senses that the consumer is down, and proceeds to trigger rebalancing of the partition among the other consumers in the same consumer group.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=69)** Similarly, when a new consumer is added to the group, rebalancing is triggered.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=76)** Each consumer group also has a consumer leader.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=80)** A consumer leader is a consumer in the same consumer group.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=84)** Typically, it is the first consumer to join the group.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=87)** It receives information about all the other consumers in the group through the group coordinator.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=93)** It is responsible for assigning partitions to other consumers in the group.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=99)** It works with the group coordinator for rebalancing.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=102)** When the group coordinator sees a new consumer being added, or an existing consumer going down, it requests the group leader for reallocation of partitions.
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=112)** This is then propagated to individual consumers, and they start listening on their new set of assigned partitions.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=120)** When the group coordinator or the group leader goes down, that responsibility is transferred to other brokers and consumers in the group respectively.
>
> **[2:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=130)** In the next video, let's explore message batching on the consumer side.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Batching message consumption
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=0)** - [Instructor] In this video, let's explore how consumers can receive messages in batches and process them.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=7)** How do consumers receive messages from Kafka?
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=10)** Consumers poll Kafka periodically for new messages.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=14)** The polling interval is configured through the poll method.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=18)** Each consumer is allocated a set of partitions to work with.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=22)** Consumers poll corresponding partition leaders for new messages.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=27)** When consumers poll, a batch of messages are returned from Kafka when new messages are available.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=34)** The bigger the batch sizes and higher the poll interval, the lower are the round trips and request overheads.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=41)** However, such large batch sizes and poll intervals directly impact the latency of processing also.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=50)** It is required to choose the right parameters based on the use case to balance between round trips and latency.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=58)** How do we configure this round-trip behavior?
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=61)** Here are some key parameters.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=63)** The first one is the poll interval, which is the time between consecutive polls by the consumer to Kafka.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=70)** This is configured through the poll method.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=73)** The minimum batch size is configured through the FETCH.MIN.BYTES parameter.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=78)** A batch should reach this size before the batch is delivered to the consumer.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=83)** The default size is one byte.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=85)** FETCH.MAX.WAIT.MS parameter works together with the FETCH.MIN.BYTES parameter.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=93)** It is the maximum amount of time to wait for the batch to attain the required batch size after which, the batch is sent anyway.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=101)** So, when a new poll is done by the consumer and new messages exist in Kafka, the batch is sent either on achieving the FETCH.MIN.BYTES value or the time lapses for FETCH.MAX.WAIT.MS.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=116)** MAX.PARTITION.FETCH.BYTES is another parameter that controls the maximum data that is returned in a single batch.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=124)** This allows to control the amount of buffer needed on the consumer side to store and process the batch received.
>
> **[2:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=131)** A number of other parameters exist and they are discussed in the URL provided.
>
> **[2:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=136)** I highly recommend reviewing this list to study all the options available.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=141)** In the next video, let's explore how the consumer can control commits to the messages.

> [!info]- Semantic Content
>
> **Env Vars:** fetch (6), bytes (4), min (3), max (3), wait (2)
> **Code Keywords:** let (2)
> **Prerequisites:** required to (1), configure (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Committing messages
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=0)** - [Instructor] Let's explore the options available on the consumer side for committing Kafka messages in this video.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=8)** By default, consumers are configured to auto commit messages on receipt.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=13)** When a message is committed by a consumer in a consumer group, Kafka marks that this message has been delivered to this consumer group and does not send the message again to a consumer in the same consumer group It is controlled by two parameters.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=29)** The Enable.auto.commit parameter determines if it is automatically committed on receipt or the consumer needs to manually commit.
>
> **[0:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=38)** By default, this is set to true.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=41)** Also the Auto.commit.interval.ms parameter determines the interval at which consumers auto commit messages.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=49)** The default is 5,000 milliseconds.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=52)** This means the consumer autos commits messages received every five seconds.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=57)** If a consumer commits on receiving messages, it does not guarantee that the consumer has successfully processed the message as processing may involve a number of steps on the consumer side based on the use case.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=71)** If the consumer tries after auto committing a message and before processing, the message will never be delivered again by a consumer in this group, so it will never be processed.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=82)** Manual committing of a message after successfully processing would mean that if the consumer does go down before committing the message, the message would again be delivered to a consumer in this consumer group and will get a chance to be processed again.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=99)** Handling duplicates is much easier than handling missed events.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=103)** Determine if auto or manual commit is needed based on your use case.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=109)** How does manual commit work?
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=111)** There are two options available, synchronous and asynchronous.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=115)** Synchronous commit is done by calling the commitSync method on the consumer.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=120)** This is done after processing every batch, after all the messages in that batch are processed.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=127)** When using the synchronous commit method, the thread blocks until all commits are successfully performed with the brokers.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=134)** There are additional options available to control commits by a message or a partition level.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=141)** In the case of an asynchronous commit, it is done again at the batch level by calling the commitAsync method.
>
> **[2:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=148)** In this case, commits happen in a separate thread and do not block the main thread.
>
> **[2:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=153)** This method can have an optional callback in case of any errors.
>
> **[2:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=157)** We will review some examples of these in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), case. (2), let (1), case, (1)
> **Code Identifiers:** commitsync (1), commitasync (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Java consumer example
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=0)** - [Instructor] In this video, we will build a Java consumer and utilize various consumer options we have learned in this chapter.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=8)** The code for this consumer is available in the package com.learning.kafkascalableapps chapter5.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=17)** The class file is KafkaConsumerWithOptions.java.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=22)** This code contains a simple consumer.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=25)** Let's focus on the key options that we use in this example.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=29)** We create the consumer with the basic options, bootstrap servers and the serializers.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=36)** We use a new consumer group ID called kafka-options-consumer.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=43)** We now set various parameters for batch processing.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=47)** We set the FETCH_MIN_BYTES configuration parameter to indicate that the total batch size should at least be 10 bytes before the batch is fetched.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=57)** Next, we set the max wait time for the batch to be hundred milliseconds.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=61)** So we are guaranteed to fetch messages at hundred milliseconds, even if the FETCH_MIN_BYTES threshold is not reached.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=69)** We then set the MAX_PARTITION_FETCH_BYTES to two MB.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=74)** In order to do manual committing, we need to turn off AUTO_COMMIT by setting the ENABLE_AUTO_COMMIT flag to false.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=82)** Now we proceed to create a consumer for the Kafka learning orders topic.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=87)** Next, we start a wide loop and keep pulling Kafka for every hundred milliseconds.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=93)** When a batch of messages are received, we simply print the messages here.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=98)** At this point, we implement any custom logic that is needed for the specific use case in this loop.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=104)** We introduced an artificial delay of one second after printing every message so that we can see the status of the lag before the commit happens.
>
> **[1:54](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=114)** Finally, we do an async commit.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=116)** Async commit is done using the commitAsync method.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=120)** We will only commit for every 10 records so that there is a commit for every 10 seconds.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=127)** Let's run this code and observe the lag and see how manual commits impact the lag.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=132)** Note that we are using a new consumer group here and consuming messages from the earliest so there are a lot of messages to consume.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=141)** On running this code, we see that the messages are immediately dequeued and printed.
>
> **[2:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=146)** On the Kafdrop UI, it may take some time for the new consumer group to show up as it'll only happen at the first commit.
>
> **[2:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=154)** On further refreshes, we do not see the lag going down at the same pace of every one second.
>
> **[2:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=160)** This is because we are doing a manual commit every 10 seconds, so the lag will only go down every 10 seconds.
>
> **[2:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=167)** We finally see the lag going down to zero.
>
> **[2:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=170)** If we kill the consumer process before the commit happens and restart again, we will see that the uncommitted messages are again consumed and processed.
>
> **[3:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=180)** In the next video, we will discuss multi-threaded consumers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), async (2), finally, (1)
> **Env Vars:** fetch_min_bytes (2), max_partition_fetch_bytes (1), auto_commit (1), enable_auto_commit (1)
> **File Paths:** kafkaconsumerwithoptions.java (1)
> **Code Identifiers:** commitasync (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Multi-threaded consumers
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=0)** - In the previous video, we have the consumer running in a single thread and processing messages one by one.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=7)** Processing a single message can take significant time depending upon the use case.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=12)** On the other hand messages can be produced at much higher speeds and the single thread may not catch up.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=19)** We can start multiple consumers in a consumer group, but even there, a single consumer needs to at least handle a single partition which may be quite large.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=30)** To optimize resource utilization, consumers can dequeue messages in one thread and then use multiple threads to process them in parallel.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=39)** The code here is a simple example on how this can be achieved.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=43)** This is not the most optimal nor production grade multi-threaded code.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=48)** It is just a sample to demonstrate one scalability option.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=52)** It is highly recommended to focus on advanced Java capabilities for optimal multi-threading.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=59)** The sample code is available in the ScalableConsumer.java class in the com.learning.kafkascalableapps.chapter5 package.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=69)** Let's review the code here.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=72)** We first set up the Kafka consumer in a similar fashion as we have done in the earlier video.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=78)** We set auto commit to false, and we will only commit when all messages in the batch are processed.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=86)** Then we create five worker thread using the Sample Worker class.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=91)** This class implements a worker where we can do processing of messages.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=96)** Let's explore the Sample Worker class now.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=99)** The Sample Worker has a single blocking queue through which the main consumer thread can push messages to the queue.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=106)** The queue is declared static so there is only one queue for all the worker threads.
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=112)** The static add to queue method can be called to add a message to this queue.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=116)** When a new message is received, it increments the pending items count.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=121)** The get pending count method returns the number of requests that are pending in the queue for this worker.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=127)** The run method runs an infinite wide loop that dequeues messages from the queue and performs required processing.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=134)** Note that this is not a static function.
>
> **[2:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=137)** For this example, it just sleeps for a hundred milliseconds.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=141)** Then it decrees the pending items count.
>
> **[2:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=144)** When the count is empty it means there are no messages to process.
>
> **[2:29](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=149)** Let's go back to the Scalable Consumer program.
>
> **[2:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=152)** So we create five worker threads here with the scalable consumer and start them all.
>
> **[2:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=157)** We maintain a list of these worker threads.
>
> **[2:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=160)** Now we run a wide loop, keep polling for new messages from Kafka and then proceed to handle them.
>
> **[2:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=167)** For handling, we simply add the received message to the single queue.
>
> **[2:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=171)** All worker threads are listening to this queue and one of them will dequeue it and process.
>
> **[2:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=176)** Once the consumer has read all the messages in this batch and send them to the blocking queue, it waits for all the messages to be processed.
>
> **[3:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=185)** It checks for the pending count and waits until the count becomes zero.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=189)** Once all the messages are processed, the consumer commits the entire batch.
>
> **[3:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=194)** Using five threads instead of one provides scalability.
>
> **[3:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=198)** Committing after all processing is done ensures resiliency from failures.
>
> **[3:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=203)** Note that we are using a unique consumer name so all messages will be dequeued and processed.
>
> **[3:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=210)** Let's run the code now and observe the results.
>
> **[3:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=214)** As seen here we see that all five workers are involved in processing the messages in parallel.
>
> **[3:40](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=220)** This is one option to scale Kafka consumers.
>
> **[3:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=224)** In the next chapter let's explore some best practices for Kafka.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), static (3), case. (1), class. (1), implements (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Warnings:** note that (2)
> **File Paths:** scalableconsumer.java (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)


### 7. 6. Kafka Best Practices

#### Managing partition counts
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=0)** - [Host] In this chapter, we will discuss some best practices for building scalable applications with Kafka.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=7)** In this video, we will focus on managing partitions.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=12)** One of the most important and difficult decisions to make while creating a topic is deciding on the number of partitions.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=20)** Partition counts cannot be decreased after a topic creation so care should be taken in choosing the right size.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=27)** If the number of partitions are too few then fewer brokers are involved in handling the topic and there is a lot of serialized processing happening.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=37)** As a result, there could be producer lag and consumer lag.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=41)** Some brokers and consumers may be overworked, handling big partitions, while others may be starved for work as they don't have any partitions assigned to them.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=52)** On the other hand, if the number of partitions is too high, it results in more broker resources like file handles and memory.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=60)** Note that there is an overhead with each additional partition, and the number of partitions a broker can handle is limited.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=68)** There is also high replication overhead if the number of partitions are high.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=74)** So what are some of the recommendations for partition sizing?
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=78)** Of course, plan partition counts before creating the topics as it's not possible to decrease them later.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=85)** Make sure that the partition count is greater than the number of expected consumers in the consumer group.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=91)** Otherwise, there will be consumers with no partition to work on.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=96)** Use as many brokers as possible in the cluster as both partition leaders and replicas.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=102)** This helps distribute work across the cluster.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=106)** Also, note that brokers have limitations in how many replicas they can handle including leaders and followers.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=113)** Try to keep the total number of replicas per broker to be less than a thousand, if needed, increase the number of brokers.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=121)** Messages are distributed among partitions based on keys, so the number of possible unique values for the key should be greater than the number of partitions.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=132)** Otherwise, some partitions will receive no messages.
>
> **[2:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=135)** It's also important to make sure that the key values are evenly distributed so all partitions get an equal distribution of messages.
>
> **[2:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=144)** Finally, it is important to perform low testing to understand the performance characteristics of your specific application and then choose the right sizes for partitions based on overall peak load and observed partition lags.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** note that (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [host] (1)

#### Managing messages
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=0)** - [Instructor] Let's review some best practices in managing Kafka messages.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=5)** Kafka has a limit on the size of the messages.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=9)** Keep the message sizes small so they are easier to manage.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=13)** Do not include BLOBs in messages.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=16)** Rather save BLOBs in a central store like HDFS or S3, and then include the link to the BLOBs in the messages.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=24)** Try to use binary standards like Avro for messages.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=28)** Kafka has serializers and de-serializers for Avro messages which can be exploited.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=35)** Also use as schema repository to share message schema between the producers and the consumers.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=42)** This helps in managing message versioning.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=45)** One key aspect of messages or the message keys.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=49)** Choose keys that have more unique values.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=52)** The more unique values that are there, the better will be the partitioning of data.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=57)** Choose keys where unique values of the key are uniformly distributed.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=62)** This, again, will ensure better partitioning of data.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=65)** Keys to have an overhead in Kafka.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=68)** Use keys only if message ordering is needed by the key.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=72)** Without keys, Kafka will use a round robin method to distribute messages to partitions.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=79)** In the next video, let's review some best practices for consumers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** hdfs (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Managing consumer settings
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=0)** - [Instructor] Let's review some best practices for setting up Kafka consumers in this video.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=6)** Consumer groups need to scale to match processing loads.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=10)** Choose sizes based on the expected incoming messages and desired latency.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=16)** We can also add new consumers to the group when we need additional capacity.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=21)** Batching is an important consideration for consumers.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=25)** If you're using it for batch processing, use larger batch sizes to reduce network round trips.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=31)** On the other hand, if you're using it for real-time stream processing, use smaller batch sizes and smaller polling intervals to minimize latency.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=41)** Unless the consumer operations are simple and quick, use manual commits to ensure reliability of data processing.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=49)** Also, provide provisions for reprocessing messages when they are received again by another consumer in case of failures.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=57)** Use non-blocking processing and multi-threading processing for higher throughput on the consumer side.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=63)** Always test for failure conditions like a consumer going down or a broker going down and make sure that messages are not lost and reprocessing happens as desired by the use case.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=75)** Let's review some best practices for resiliency in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Managing resiliency
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=0)** - [Instructor] What are some of the best practices to ensure resiliency in Kafka?
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=5)** Use topic replication to safeguard against broker failures.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=10)** It is recommended to have a replication factor of at least three to maintain safe replicas.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=17)** Distribute Kafka brokers across different physical racks.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=22)** Kafka is rack-aware and will distribute replicas so that they are on different racks.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=27)** This protects the cluster from rack failures.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=31)** Use acknowledgements in producer to ensure guaranteed delivery of data to Kafka.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=37)** Similarly, use manual commits in consumers to ensure that the offsets are incremented only after data is successfully processed on the consumer side.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=47)** The active controllers can fail, so there needs to be sufficient standby controllers to take over if that happens.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=55)** Since the roles are explicit now, it is recommended to have at least three nodes configured as controllers for backup.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=64)** Use mirroring with MirrorMaker if geo-redundancy is required.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=68)** Always test for resiliency test cases to make sure that the system recovers as desired by the use case when failures happen.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=77)** This completes our exploration of Kafka for building scalable applications.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=82)** In the next chapter, we will exercise our learnings with an exercise use case.

> [!info]- Semantic Content
>
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)
> **Code Keywords:** case. (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Use Case Project

#### Kafka applications use case: Problem definition
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=0)** - [Instructor] We have learned a number of concepts and techniques for building scalability and resiliency with Kafka in this course.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=8)** Now you can exercise some of these learnings in solving a use case problem.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=13)** In this video, let's discuss the use case exercises.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=18)** The first exercise for you is to create a topic called Kafka.usecase.students.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=25)** The topic should have three partitions and a replication factor of two.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=30)** You can choose to create it either in the command line or through the kafdrop UI.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=36)** The second exercise is to create a Java producer for the Kafka.usecase.students topic.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=43)** When creating the producer, use a batch size of 32K and set acknowledgement to all replicas.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=51)** Use asynchronous publishing with callback to publish the messages.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=56)** The final exercise is to create a Java consumer for the Kafka.usecase.students topic When creating the consumer set the following parameters: Set fetch max bytes to 20 and fetch max wait MS to 200.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=72)** Use asynchronous commit for the messages received.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=76)** Please implement the solutions and then review the example solutions provided in the videos in this chapter.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=83)** Your solution doesn't have to match verbatim with the example provided as long as it solves the use case problem.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=91)** You are good.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=92)** Best of luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Setting up topics
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=0)** - [Instructor] In this video, let's set up the kafka.usecase.students topic using Kafdrop.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=6)** Go to the Kafdrop UI and then click on the New button at the bottom of the topics table.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=14)** Provide the topic name as kafka.usecase.students.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=19)** Set the number of partitions to three and the replication factor to two, hit Create.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=26)** The topic is now created.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=28)** We can now build a producer for this topic in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Producing data in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=0)** - [Instructor] Let's now look at the use case producer in Java.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=4)** The code for this chapter is available in the package com.learning.Kafkascalableapps.chapter7.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=12)** The producer is available in the class use case producer with options.java.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=19)** Let's review this code now.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=22)** We first set up the main Kafka producer parameters, namely bootstrap servers, and the key and value serializers.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=30)** Then we set acknowledgements to all value.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=34)** To set the batch size to 32K, we use the batch size parameter and provide the number of bytes.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=41)** Now we proceed to create a Kafka producer.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=44)** We will publish 10 random messages in a similar fashion, as we did earlier in the course.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=50)** To publish the record, we create a use case callback class and provide that to the send method.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=57)** This enables asynchronous publishing.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=60)** Let's execute this code now.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=66)** As we can see, we have successfully published 10 messages to Kafka with asynchronous publishing.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=73)** Let's build a consumer for these messages in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** options.java (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Consuming data in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=0)** - [Instructor] As the final exercise, let's build a consumer in Java for the kafka.usecase.students topic.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=7)** The code for this exercise is in the class UseCaseConsumerWithOptions.java.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=14)** Let's review the code now.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=16)** We start off by setting the required parameters including the bootstrap servers, these serializers for key and value, and a group ID.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=25)** We also set the offset reset to receive data from the earliest messages available.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=31)** As required by the exercise, we set the batching parameters here.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=35)** We set fetch max bytes to 20 bytes and FETCH_MAX_WAIT_MS to 200.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=41)** We also turn off auto-commit.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=43)** We can now proceed to create a consumer and subscribe to the kafka.usecase.students topic.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=51)** We then start a while loop and poll for new messages every 100 milliseconds.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=56)** We print the records received as part of the processing.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=59)** Finally, we use the commitAsync method to commit the data.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=64)** Let's execute this code and review the results.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=67)** The messages published to the topic has been received and printed here.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=72)** This completes the example exercises for this use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1), case. (1)
> **File Paths:** usecaseconsumerwithoptions.java (1)
> **Code Identifiers:** commitasync (1)
> **Env Vars:** fetch_max_wait_ms (1)
> **Speakers:** - [instructor] (1)


### 9. Conclusion

#### How do you extend your Kafka learning journey?
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=0)** - [Kumaran] Now that you have learned about the scale and resilience of Apache Kafka, you can take your learning even further.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=8)** First, you can learn more about using Kafka for building stream processing applications with Apache Spark, Apache Flink, or Kafka Streams.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=18)** Second, build an end-to-end data processing pipeline use case with Kafka and other big data processing and storage technology.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=28)** Finally, you can implement Kafka in your organization for one of your own big data processing use cases.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=35)** Data always intrigues me.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=37)** I bet it intrigues you, too, so let's keep exploring it, and find better ways of extracting knowledge from it.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [kumaran] (1)


## Resources

- Exercise files available

## Skills Covered

- Apache Kafka
- Scalable Web Applications

## Path Context

### In [[Master Data Engineering]]
**1 of 8** | [[Troubleshooting and Debugging Kafka]] →

## Appears In

- [[Master Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Apache Kafka Essential Training- Getting Started]] — Apache Kafka
- [[Tuning Kafka]] — Apache Kafka
- [[Troubleshooting and Debugging Kafka]] — Apache Kafka

---

[↑ Back to top](#)