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
  - '[Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)'
next_courses:
  - '[Troubleshooting and Debugging Kafka](Troubleshooting%20and%20Debugging%20Kafka.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Apache%20Kafka%20Essential%20Training%20Building%20Scalable%20Applications.md)

![Apache Kafka Essential Training Building Scalable Applications](https://media.licdn.com/dms/image/v2/D4D0DAQGMQEGnvQbYow/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687364802921?e=2147483647&amp;v=beta&amp;t=sRAArkg-mxnPMFWPRrNqyZOVzYM-ifXQcfTiwYKD-H8)

# Apache Kafka Essential Training Building Scalable Applications

> Scalable and distributed message queuing plays an important role in building real time big data pipelines. Asynchronous publisher/subscriber models are required to handle unpredictable loads in these pipelines. Apache Kafka is the leading technology today that provides these capabilities and is an essential skill for a big data professional. In this course, Kumaran Ponnambalam provides insights in

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536) | Advanced | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building robust Kafka applications](#building-robust-kafka-applications)
- [**1. Introduction to Kafka**](#1-introduction-to-kafka) (4 videos)
  - [What is Kafka?](#what-is-kafka)
  - [Prerequisites for the course](#prerequisites-for-the-course)
  - [Kafka scaling and resiliency](#kafka-scaling-and-resiliency)
  - [Setting up the exercise files](#setting-up-the-exercise-files)
- [**2. Kafka Scaling Concepts**](#2-kafka-scaling-concepts) (5 videos)
  - [A Kafka cluster](#a-kafka-cluster)
  - [Kafka controllers](#kafka-controllers)
  - [Replication](#replication)
  - [Partition leaders](#partition-leaders)
  - [Security](#security)
- [**3. Building a Kafka Cluster**](#3-building-a-kafka-cluster) (5 videos)
  - [Kafka cluster setup](#kafka-cluster-setup)
  - [Running the cluster](#running-the-cluster)
  - [Creating topics with replication](#creating-topics-with-replication)
  - [Kafka clusters in action](#kafka-clusters-in-action)
  - [Kafka resiliency in action](#kafka-resiliency-in-action)
- [**4. Building Scalable Producers**](#4-building-scalable-producers) (5 videos)
  - [Producer internals](#producer-internals)
  - [Producer publishing options](#producer-publishing-options)
  - [Acknowledgments in Kafka](#acknowledgments-in-kafka)
  - [Additional producer parameters](#additional-producer-parameters)
  - [Java producer options example](#java-producer-options-example)
- [**5. Building Scalable Consumers**](#5-building-scalable-consumers) (5 videos)
  - [How consumer works](#how-consumer-works)
  - [Batching message consumption](#batching-message-consumption)
  - [Committing messages](#committing-messages)
  - [Java consumer example](#java-consumer-example)
  - [Multi-threaded consumers](#multi-threaded-consumers)
- [**6. Kafka Best Practices**](#6-kafka-best-practices) (4 videos)
  - [Managing partition counts](#managing-partition-counts)
  - [Managing messages](#managing-messages)
  - [Managing consumer settings](#managing-consumer-settings)
  - [Managing resiliency](#managing-resiliency)
- [**7. Use Case Project**](#7-use-case-project) (4 videos)
  - [Kafka applications use case: Problem definition](#kafka-applications-use-case-problem-definition)
  - [Setting up topics](#setting-up-topics)
  - [Producing data in Java](#producing-data-in-java)
  - [Consuming data in Java](#consuming-data-in-java)
- [**Conclusion**](#conclusion) (1 videos)
  - [How do you extend your Kafka learning journey?](#how-do-you-extend-your-kafka-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building robust Kafka applications](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/building-robust-kafka-applications?u=76281980&t=0)** - [Kumaran] Businesses need to create reliable and performant workflows and pipelines to deal with huge amounts of [Big Data](../../Skills/Data%20Science/Big%20Data.md) that contain valuable insights. [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) is the leading big data queuing technology on which such [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) are built. Kafka provides various capabilities for building scalable and reliable applications, which every big data engineer needs to be aware of. My name is Kumaran Ponnambalam. In this course, I will discuss the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and resilience aspects of Apache Kafka and how to build applications using them. Let's now start learning about Apache Kafka scaling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (3), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** apache (3)
> **Warnings:** be aware (1)
> **Speakers:** - [kumaran] (1)


### 1. Introduction to Kafka

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Kafka?](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=0)** - [Presenter] A good place to start this course is by reviewing some of [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md)'s features and capabilities. Kafka is an events streaming platform. Events or messages represent the actual data that is exchanged through Kafka. The terms events and messages are used interchangeably in Kafka's context. It is a critical piece of the [Big Data](../../Skills/Data%20Science/Big%20Data.md) puzzle and place an integral part in many Big Data pipelines. Kafka is open source and can be downloaded and deployed free of cost. There are also commercial options that provide support and serverless capabilities. It is arguably the most popular messaging platform in the world. In Kafka's world, there are data publishers called producers, who push messages into Kafka, and there are subscribers called consumers, who listen and receive the messages. Producers and consumers are the standard terms in the Kafka world to represent publishers and subscribers. What capabilities does Kafka provide for data exchange? It collects messages from multiple producers concurrently. It provides persistent storage of the messages received. This provides fault tolerance capabilities. It transports data across from producers to consumers. With mirroring capabilities, it can also transport across networks. It distributes data to multiple concurrent consumers for downstream processing.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/what-is-kafka?u=76281980&t=95)** Finally, it provides tracking of message consumption by each consumer. This ensures at least ones delivery of messages, even if the consumers go down and come back again. Before we dive into the course content, let's discuss the prerequisites in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### [Prerequisites for the course](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor] What are the prerequisites for this course? Let's begin with discussing what is covered in this course. We are going to set up a Kafka Cluster and use it to publish data from producers and process it through consumers. We will review the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and reliability aspects of Kafka and see them in action. We will also discuss some best practices for using Kafka. What is not covered? We are not going to discuss basic concepts and operations of Kafka. We will also not discuss the basics of creating producers and consumers in [Java](../../Skills/Software%20Development/Java.md). With this understanding, let's get into the prerequisites. The learner is expected to be familiar with the basics of [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md). Please refer to the course, Apache Kafka Essentials: Getting Started with Kafka, if you are not familiar with Kafka already. We set up Kafka and other services using Docker, so familiarity with Docker Desktop and Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md) are needed. Some of the exercises are in Java 19, so familiarity with Java 19, Maven, and Java IDEs are also required. With that being said, let's now discuss the scalability and [Resiliency](../../Skills/Software%20Development/Resiliency.md) aspects of Kafka in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (2), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **CLI Commands:** docker (3), apache (2)
> **Prerequisites:** set up (2), getting started (1)
> **Versions:** java 19 (2)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)
> **Speakers:** - [instructor] (1)

#### [Kafka scaling and resiliency](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=0)** - [Instructor] Two of the key features that make Kafka an ideal messaging system for [Big Data](../../Skills/Data%20Science/Big%20Data.md) are [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and [Resiliency](../../Skills/Software%20Development/Resiliency.md). Let's quickly review some of these capabilities. We will explore more about them throughout the course. Kafka is a horizontally scalable messaging system. It can process millions of messages per second and can handle terabytes of data. It is a system built for scalability. What are some of the key scalability features in Kafka? Messages can be spread across multiple topics and partitions. They can be stored and processed in parallel. Kafka brokers can be wired together to create clusters. Brokers in a cluster share the workload of managing and serving messages. Kafka supports multiple concurrent producers and consumers to enable parallel publishing and consumption of data. It also has asynchronous publishing and batching options to reduce latency as well as network traffic. Consumer groups are another capability that allows consumers to share workloads and scale. How does Kafka stack up in resiliency? Kafka supports duplication of [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) using replication and mirroring. This allows it to recover from node or data center failures. Kafka brokers work together to choose a controller and topic leader among them. When one of them goes down, other brokers quickly work together
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-scaling-and-resiliency?u=76281980&t=93)** to choose an alternate broker to execute these functions. Features like offset tracking and partition reassignments help consumers to overcome failures and reprocess data without missing any messages. In the remainder of the course we will explore more on setting up these capabilities and observing them in action. Before we do that, let's first set up the exercise files in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (3), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the exercise files](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=0)** - [Tutor] In this video, I will help you set up the exercise files for this course. In my case, I have downloaded the exercise files into my documents exercise files directory. Please download in a similar location in your setup. There are two sets of exercise files here. The [Java](../../Skills/Software%20Development/Java.md) project, that is bundled into 'KafkaScalableApps.zip' file and the Docker composed 'yml' file called 'kafka-cluster.yml'. Let's first start to set up the Java project 'KafkaScalableApps.zip'. Unzip the 'KafkaScalableApps.zip' file. This will create the folder 'KafkaScalableApps' with the project contents inside it. Open IntelliJ IDEA. Select open. Choose the 'KafkaScalableApps' folder and then click open. Please make sure to select the right SDK in the project structure option. This project is built with Java 19 so choose an SDK that is Java 19 or above, click okay. Now, IntelliJ IDEA will proceed to compile the project. It'll download all the dependencies if it is not already available in your Maven repository. Make sure that the project compiles without any errors. This project contains both the Java classes and also instructions to execute various command line steps. The command line related steps are available in the resources directory.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-the-exercise-files?u=76281980&t=92)** Please explore the same. We will use these as we progress through the course. Now let's discuss some key Kafka scaling concepts in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5)
> **CLI Commands:** make (2), docker (1), unzip (1)
> **Env Vars:** idea (2), sdk (2)
> **Tools:** intellij (2), command line (2)
> **Exercise Files:** exercise files (4)
> **Prerequisites:** set up (2), setup (1)
> **Versions:** java 19 (2)
> **File Paths:** kafka-cluster.yml (1)


### 2. Kafka Scaling Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [A Kafka cluster](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=0)** - [Instructor] Central to Kafka scale and resilience is its ability to create and manage clusters of brokers. Let's explore more on cluster management in this video. What is a Kafka cluster? A Kafka cluster is a group of Kafka brokers working together to receive, store, and deliver data. Each Kafka cluster has a unique cluster ID which each of the brokers in the cluster know about. Each broker additionally has a unique node ID within this cluster. Brokers inside the cluster share work based on topic partitions. The brokers work with each other collaboratively to manage the cluster. Management and control information about the cluster is stored in a dataset called [Metadata](../../Skills/Web%20Development/Metadata.md). This metadata contains information about the cluster. This includes data about members of the cluster and their roles, topics in the cluster and their configurations, current status of the brokers and topics, and also the current status of consumers and consumer groups. This information is kept up to date by the cluster. Each broker node in the cluster has its own cached main memory copy of the metadata. Changes to the metadata are constantly communicated and updated between the nodes. Each node in the Kafka cluster can play one or more roles.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/a-kafka-cluster?u=76281980&t=93)** The first role is that of a broker. The broker is the worker in the cluster. It is responsible for receiving data for the partitions it manages, storing them, and publishing them to subscribers. They also handle required replication. A controller in the cluster manages the cluster. It is responsible for administration activities. A Kafka node in the cluster can be just broker only, controller only, or can be both the broker and the controller. Typically, there are multiple controllers in the cluster and one of these controllers become the active controller that manages the cluster. We will discuss more on this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4)
> **CLI Commands:** node (4)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Kafka controllers](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=0)** - [Instructor] Let's discuss controllers in detail in this video. A Kafka cluster can have multiple nodes configured as controllers. One of these nodes will take the role of the active controller. The active controller is responsible for managing the cluster. Other controller nodes just observe the active controller and are ready to take over when the active controller goes down. Controllers have a voting mechanism for selecting the active controller. When the cluster is started up or if the active controller goes down, the controllers that are currently running in the cluster vote among themselves and choose one of them to be the active controller. How do the nodes in the cluster share their [Metadata](../../Skills/Web%20Development/Metadata.md)? As seen earlier, each node has its own copy of the metadata. As the active controller is doing all the administration, it'll publish the changes as events to a special topic. This topic is called __cluster_metadata. It has only one partition for which the active controller will be the partition leader. All other nodes in the cluster, whether they are brokers or controllers, will listen to this topic. They will read the changes and update their internal copy of the metadata. This way, the metadata stays current and synced between all the nodes. In older versions of Kafka, ZooKeeper was used instead of this topic.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-controllers?u=76281980&t=95)** With newer versions, that dependency is removed. This helps Kafka scale much better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4)
> **CLI Commands:** node (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Replication](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=0)** - [Instructor] In this video, let's explore how Kafka provides [Resiliency](../../Skills/Software%20Development/Resiliency.md) with replication. Replication is a feature in Kafka that provides resiliency against individual broker failures. Replication works by maintaining multiple copies of individual partition logs across different brokers. The unit of replication is a single topic partition. All messages in a partition are replicated. When a partition is created, we can specify the number of replicas needed for the partition. This is set using the parameter replication factor. A partition would always have one leader replica and zero or more follower replicas. The leader replica is the primary copy where all reads and writes happen. Follower replicas are the backups where the primary copy is replicated. Replication factor counts the total copies available, including the leader replica. The leader replica is assigned to a leader broker. The leader broker manages all reads and writes for the partition. This is also called the partition leader. It also maintains the local log files. Brokers owning replica copies will subscribe to the leader broker to get new messages and update their copies. The controller distributes leaders and followers evenly across all the brokers. When the topic is created, the active controller takes care of distributing partitions.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/replication?u=76281980&t=95)** It first distributes the leader replicas among the brokers available. If the number of brokers is less than the number of partitions, a single broker may get multiple leader replicas for the same topic. Then it distributes the follower replicas to brokers, such that the replicas are owned by the brokers which are not that leader broker. The replication factor cannot be larger than the total number of brokers available. Now, let's look at an example for replication. We have a Kafka cluster with four brokers. We have a single topic, which is created with three partitions, and a replication factor of two. In this example, leader replicas are shown in green and follower replicas are shown in blue. For partition zero, Broker 1 is assigned as the leader replica, and Broker 2 gets the follower replica. For partition one, Broker 2 gets the leader replica, and Broker 3 gets the partition replica, and so on. The controller ensures that the leader replicas are distributed across brokers for workload balancing. Similarly, it ensures that the follower replicas are distributed across brokers to provide maximum resiliency. In the next video, we will discuss partition leaders, and how resiliency is ensured using replicas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (4)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Partition leaders](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=0)** - [Instructor] In the last video, we discussed how replication uses brokers as partition leaders. Now, let's continue to explore more on how partition leaders work. The broker instance that owns the leader replica of a partition is called the partition leader. The active controller will assign partition leaders for partitions during topic creation. A Kafka producer, when publishing a message, will choose a partition for the message and will send the message to the corresponding partition leader. Similarly, a Kafka consumer will work directly with the partition leader to consume messages in that partition. The partition leader also stores partition data in its own log files. What about follower brokers? Brokers that own the follower replicas for a partition are called the follower brokers. Do note that the same broker can be the partition leader for some partitions and the follower broker for the other partitions. Follower brokers subscribe with the leaders for partition data. They keep receiving new messages and will use that to update their local copies of [Metadata](../../Skills/Web%20Development/Metadata.md). Partition leadership is evenly distributed by the active controller across the brokers in the cluster. Let's revisit the example we saw in the previous video. In this case, brokers 1, 2, and 3 are the lead brokers for partitions 0, 1, and 2 respectively.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=94)** Broker 4 is not the leader broker for any partition. Brokers 2, 3, and 4 are the follower brokers for partitions 0, 1, and 2 respectively. Given that the replication factor is only 2, there is only one follower for each partition. Increasing the replication factor will create more followers and hence more redundancy but at the expense of more work to replicate data. How does Kafka take care of ensuring uninterrupted service when the partition leader goes down. Let's say that a partition leader for a specific partition goes down. The active controller is then notified of the lost broker. The active controller will then retrieve the list of all the topic partitions for which this broker is the partition leader. This information is available in the metadata. Note that this broker can be handling multiple topics and their partitions. The active controller will then identify the list of in-sync replicas for each partition. An in-sync replica is one which is completely synced up with a leader with no messages left to replicate. It'll then choose one of the brokers with an in-sync replica as the new partition leader. Again, the active controller ensures even distribution of load. The broker chosen as the new leader is now notified by the active controller. This information is also received by the producers and consumers of that partition.
>
> **[3:08](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/partition-leaders?u=76281980&t=188)** The new leader then takes over the read/write operations and the producers and consumers will start talking to this broker going forward. The follower brokers will now start following this leader to keep track of their replicas. What happens if a follower broker goes down? In that case, Kafka will simply mark that replica as out of sync. When the broker comes back up, it'll catch up with the leader.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2)
> **Cross-References:** in the last (1), we discussed (1), previous video (1)
> **Warnings:** note that (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Security](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/security?u=76281980&t=0)** - [Instructor] One of the requirements for enterprise [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) is ensuring security of data both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in motion. Let's review various security options available in Kafka in this video. Kafka provides client authentication using SSL/SASL. This applies to producers, consumers, and other brokers. Kafka provides read/write authentication control by individual topics and consumer groups. Data in flight can be encrypted using SSL. For at-rest encryption, Kafka does not provide an out-of-the-box solution. It is recommended to use encrypted discs for storage of log files. Kafka's security features are basic, as it is expected to be used as a messaging system within a trusted network where the producers and consumers are all also in the same trusted domain. It is not recommended to publicly expose Kafka through the internet without an API wrapper layer. Similarly, multi-tenancy is hard to implement in Kafka, as SSL certificate and key management by individual tenants and users does not scale. It is recommended to use additional custom layers in the producers and consumers to provide fine-grained security and multi-tenancy. Having discussed key Kafka features in this chapter, let's set up a cluster using Docker in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Env Vars:** ssl (3), sasl (1), api (1)
> **Best Practices:** recommended (3)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Building a Kafka Cluster

[↑ Back to Table of Contents](#table-of-contents)

#### [Kafka cluster setup](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=0)** - In this chapter, we will set up and run a Kafka cluster and observe its [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and [Resiliency](../../Skills/Software%20Development/Resiliency.md) features. The instructions for this chapter are available under the resources/chapter3commands.txt file inside the [Java](../../Skills/Software%20Development/Java.md) project. In this video, let's review the Kafka cluster setup docker [compose](../../Glossary/Framework/Jetpack%20Compose.md) file called Kafka-cluster.yml. This file is available as part of the downloaded exercises. In this file, we will start four containers. Three will be for Kafka brokers and one will be for Kafdrop. Let's now explore the container setup and understand their configurations. We start with the first container called Kafka-1. This is the first Kafka container as part of a Kafka cluster. It uses the image for Kafka version 3.4. This version is hard coded to ensure that all commands and exercises work without issues. You are welcome to try other versions but do note that there can be changes in commands or Kafka behavior if other versions are used. Now, let's get to the environment variables for Kafka. The first variable, Kafka_Enable_Kraft sets the Kraft mode to yes. Kafka can run in either the Kraft mode or the ZooKeeper mode. ZooKeeper is being phased out so we will only use the Kraft mode. We allow the Kafka listener
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=94)** to have plain text communications. This is only recommended for development and educational setups. We set a unique node ID for this broker with the ID 1001. The node ID should be unique within the cluster. Next, we have the cluster ID for this cluster. This should be set to the same value for all brokers in the cluster. As discussed before, a Kafka node can run as a broker, a controller, or both. We set the role for this node to be both the broker and controller. The listener name for this controller is set as controller for future references. A Kafka instance runs three types of ports. The client port is used for external communications. The controller port is used for controller communications. The internal port is used for communications inside the docker environment between the brokers in the cluster. We first set the security protocol to plain text for all these ports. Next, the Controller_Quorum_Voters configuration list all the available controllers in the cluster. We are using Kafka-1 and Kafka-2 as controllers. The ports mentioned here are the controller ports that start with the number 2909. The list of advertised listeners are local host for external communications on port 9092 and Kafka-1 for internal communications on port 19012. The port 9092 should be used when connecting
>
> **[3:11](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=191)** to this broker from outside the Docker network. Port 19012 is used when connecting inside the Docker network. The next configuration is the list of configured listeners. This has the advertised listeners as well as the controller port. The internal listener name is set as internal and this is referenced in other configurations. We expose port 9092 to outside the docker setup as this is needed for clients outside the Docker to connect to this broker. Kafka-2 is the next node. This is configured with node ID 1002 and is setup as both the broker and controller. Configurations are similar to Kafka-1 except for the port numbers used which end with the number three. Kafka-3 is the third node and its ID is 1003. This is configured as only a broker, so it does not expose any controller ports. The Controller_Quorum_Voters parameter is still needed since this broker needs to know who the controllers are. Its port numbers end with the number four. Finally, we have Kafdrop which is a web interface that can be used to monitor a Kafka cluster. It runs on port 9000. The key parameter here is the Kafka broker connect that lists all the brokers in the Kafka cluster. This completes our discussion on the Kafka configuration. We will set up and observe this cluster
>
> **[4:46](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-cluster-setup?u=76281980&t=286)** in the next few videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **CLI Commands:** node (7), docker (6)
> **Ports:** port 9092 (3), port 19012 (2), port 9000 (1)
> **Prerequisites:** setup (4), set up (2)
> **File Paths:** resources/chapter3commands.txt (1), kafka-cluster.yml (1)
> **Versions:** version 3 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Running the cluster](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=0)** - [Instructor] In this video, we will start up the Kafka cluster and observe it through Kafdrop. The instructions for this chapter are available in the resources/chapter-3-commands.txt file. Please install Docker Desktop or your desktop or laptop if you have not already done so. Then open a terminal window if you have macOS or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). In [Windows](../../Glossary/Service/Windows.md), please use the [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) window. We will be using a terminal window for this video. First, navigate to the directory where the Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md) file has been downloaded. Here, execute the command to start the cluster. The cluster can be started by the command docker-compose -f kafka-cluster.yml up -d.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/running-the-cluster?u=76281980&t=55)** This command will now start downloading the images for the containers if they are not already present in your Docker setup, and then start up the containers. Downloading images may take some significant time. Once this command has completed, we can check the status of the containers using docker ps. We should see four containers running. We now go to localhost:9000 and open the Kafdrop application. The Kafka cluster overview tells the list of bootstrap servers used by Kafdrop. It also provides summaries of the topics and partitions available. We have not created any so far, so these numbers are zero. Below in the brokers list, we can see the list of all brokers available in the cluster. Clicking on a specific broker shows more details about the broker. Kafdrop does not report correctly about the current controller in the cluster, so we will later explore command line options for that. We will come back to this UI in later videos in this chapter. If you need to shut down the cluster, then execute the shutdown command as shown here in the same terminal window and directory. In the next video, we will create a couple of topics and observe how they are distributed in the cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Tools:** terminal (3), docker desktop (1), powershell (1), command line (1)
> **CLI Commands:** docker (5)
> **UI Navigation:** navigate to (1), go to (1), open the (1)
> **File Paths:** resources/chapter-3-commands.txt (1), kafka-cluster.yml (1)
> **Prerequisites:** install (1), setup (1)
> **Code Identifiers:** macos (1)
> **URLs:** [localhost:9000](https://localhost:9000) (1)

#### [Creating topics with replication](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=0)** - [Instructor] Let's now create a couple of topics in Kafka with partitions and replications. Then we will observe how partitions and replicas are distributed among the brokers. In order to create topics, we can either do through the command line tools or we can do through the Kafdrop UI. We will use the Kafdrop UI for that now. First, let's click the New button to open the topic creation page. We'll first create a topic called Kafka.learning.orders. This we will create with three partitions and two replicas. We hit the Create button, the topic is successfully created. We will then create another topic called Kafka.learning.tweets. Here we will use four partitions and three replicas. We again create this topic in the same manner. Now let's go back to the Kafdrop homepage. We can see the topics now showing up in the Topics list. Let's click on the Kafka.learning.orders topic to explore more. In the Partition Detail table, we find the details around individual partitions. For each partition, we see the leader replica node. The leader replicas are being distributed equally among all the brokers. The replica nodes show both the leader and follower nodes. Again we see that the follower replicas
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/creating-topics-with-replication?u=76281980&t=96)** are distributed equally among the brokers. In-sync replicas are the one that are currently in sync with the leader. If replica brokers are offline, they would also show up here. Let's now go back and look at the Kafka.learning.tweets topic. We see four partitions, which is more than the number of brokers. So one of the brokers, broker 1002, is the leader broker for two partitions. Since the replica account equals the number of brokers, each broker gets a copy of the replica for each partition. Let's go back again to the main page. Here, when we click on a specific broker in the broker page, it shows a summary by each broker. It also shows the topics and partitions that this broker would be handling. Now let's publish some messages and observe Kafka in action in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), open the (1)
> **CLI Commands:** find (1), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Kafka clusters in action](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=0)** - [Instructor] Having set up a cluster and created some topics, let's now publish and consume messages with this cluster and observe how Kafka scales with partitions. For use in this exercise, we have a SimpleProducer and a SimpleConsumer in the package chapter three. Let's go to the SimpleConsumer first in KafkaSimpleConsumer.[Java](../../Skills/Software%20Development/Java.md). This consumer subscribes to the kafka.learning.orders topic. It receives data from the topic and prints these messages to the console. It uses the Kafka-Java-consumer as the consumer group. Let's run this consumer now. The consumer is running, but there are no messages in Kafka, so there is nothing that is getting printed. Let's now go to the Kafdrop UI. Let's click on the Kafka.Learning.Orders topic. Now you can see the consumer group showing up here. Now Kafka is keeping track of the offsets consumed by the consumer. There are no messages in the topic partitions so there is no lag shown. Let's go back to intelligent idea. We now stop the consumer. We then go to Kafka's SimpleProducer. This producer publishes 20 messages at two second intervals to the Kafka Learning Orders topic. Let's run the producer now.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=99)** As the producer starts running, let's switch to Kafdrop and keep refreshing the page. In the partition detail, we see that the last offset keeps increasing across partitions. Messages are distributed across partitions so all partitions see new messages. This size also grows. Since the consumer is not running, the lag on the consumer is also increasing. We see that a total of 20 messages showed up and the lag is also 20. Now let's click on one of the partitions. Here we can see the actual messages that are sent to the partition. This page can also be used to explore the messages inside each partition. Let's go back again to the main page. Now switch to intelligent idea. We again start the consumer. We can immediately see that the consumer starts fetching the messages and print them. Let's go back to the Kafdrop UI and check the numbers and also keep refreshing the page. We can now see that the lag has reduced to zero and all pending messages have been consumed. We now, again, go back to intelligent idea and start the producer also, when the consumer is running.
>
> **[2:59](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-clusters-in-action?u=76281980&t=179)** Now, as we keep continuously refreshing, we see that messages are getting added, the lag goes up momentarily but goes down again as the message is consumed. Once the new set of 20 messages are consumed, the lag goes back to zero. Let's also check the Kafka Consumer Group name. Here we can see the lag numbers by individual partitions. This information helps troubleshoot if specific partitions are not being properly consumed. In real world scenarios, there is continuous publishing and consumption of data and these numbers will keep going up and down. Kafka distributes messages across partitions and multiple customers in a consumer group can process these messages in parallel, providing [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). In the next video, let's see Kafka [Resiliency](../../Skills/Software%20Development/Resiliency.md) in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **UI Navigation:** go to (3), click on (2), switch to (2)
> **Cross-References:** go back to (3), in the next (1)
> **File Paths:** kafkasimpleconsumer.java (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Kafka resiliency in action](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=0)** - [Instructor] In this video, we will see how Kafka redistributes workloads and maintains the service. As brokers go down and come up. First open a shell window and log into Kafka 3. We can log into Kafka 3 using the Docker Exec command. Now navigate to the Kafka bin directory. Here we will see several shell scripts for monitoring Kafka. We can look at the current controller status for Kafka using the Kafka [Metadata](../../Skills/Web%20Development/Metadata.md) quorum dot search file. We provide as input the bootstrap server and use the described command with the status request. The status shows the cluster status, starting with the configured cluster ID. Leader ID points to the current active controller, which in this case is Broker 1001. We will shut down this broker and see how the cluster responds. We also see there is no follower lag, which means all the followers have caught up with the metadata changes that are being pushed by the leader. The current voters list shows the list of controllers configured for the cluster. Here we have two controllers, namely 1001 and 1002. The current observers is the list of brokers who are not controllers. This is 1003. We now go to the Kafdrop UI. We go to the topics page for Kafka learning orders topic and observe how the partitions are set up.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=94)** We see that all the replicas are up and there are no offline replicas. The broker 1001 is the leader for partition zero and the follower for partition two. Let's go back to IntelliJ IDEA. First I'm going to have this simple consumer running and printing consumer messages.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=121)** Next, in the simple producer I'm going to modify the program to publish 200 messages at two second intervals. This will ensure that the producer is running for a long time while we shut down and bring up the brokers. Let's run the producer now. We now go to the command line and stop the container Kafka 1. Kafka 1 is stopped now. Let's observe the producer and consumer to see if there are any errors showing up. We don't see any errors here. Let's go back to the Kafdrop UI and refresh the topics page. It may take some time to refresh as Kafdrop has lost connection to one of the brokers and may take time to recover. We now see that broker 1001 no longer has any lead replicas. 1002 has taken over as the partition leader for partition zero. The replicas for 1001 are now under the offline replica nodes, so Kafka has redistributed the partition leadership to other replica brokers. Let's check the cluster status in the command line. We now see that Node 1002 has taken over as the active controller as shown by the leader ID. We also see the max follower lag showing up to 3894. This means that the other controller, 1001, has not caught up with the current leaders as it is down. Let's start the broker Kafka 1 again. Now let's check the status of the replicas.
>
> **[3:39](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-resiliency-in-action?u=76281980&t=219)** We now see the replicas for 1001 are back online and are in sync. This means that broker 1001 has caught up on the missing messages, but we have also see that partition leadership has not switched for partition zero. This is because Kafka controller waits for some time to make sure that the newly restarted broker is stable before switching it as the leader node. Check this after a few minutes and most probably the leadership would be restored. Let's check on the cluster status also. We still see the broker 1002 is the active controller, even though broker 1001 has come up. Broker 1001 is now a standby, but we do not see any follower lag. This means that broker 1001 has caught up on all the pending messages from the cluster metadata topic and its internal metadata is up to date. As observed in this demo, Kafka is able to handle a situation when a broker or controller goes down and comes back up. Throughout this process, the producer and consumer were able to do their work without any errors. In the next chapter, we will explore the producer side of [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and [Resiliency](../../Skills/Software%20Development/Resiliency.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **CLI Commands:** node (2), docker (1), make (1)
> **UI Navigation:** go to (3), navigate to (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** command line (2), intellij (1)
> **Definitions:** means that (3)
> **Env Vars:** idea (1)
> **Versions:** node 1002 (1)


### 4. Building Scalable Producers

[↑ Back to Table of Contents](#table-of-contents)

#### [Producer internals](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=0)** - [Instructor] In the last two chapters, we focused on the Kafka cluster and how it enables scaling and resilience. In this chapter, we will explore how the Kafka Producer takes care of the same. In this video, let's study Producer internals. The Kafka Producer is a client library that is embedded within the client which is usually returned in a programming language like [Scala](../../Skills/Software%20Development/Scala.md), [Java](../../Skills/Software%20Development/Java.md), or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). What happens within the client when it receives calls from the host program? When a Kafka Producer is created by the main program it receives various configuration information, the key among them being the list of bootstrap servers. We need to specify at least one bootstrap server for Kafka. The Producer then contacts the bootstrap server and collects [Metadata](../../Skills/Web%20Development/Metadata.md). It first collects information about all the other Kafka brokers in the cluster. It also receives information about topics, their partitions, and the partition leaders. It also subscribes to the changes in metadata and keeps track of them. What happens when the host program sends a ProducerRecord to the Producer client using the send method? The first thing this Producer does is to serialize the message with the key and value serializers set up in the Kafka connection properties. Next comes partition selection. The partition for the message is selected by the Producer, not by the Kafka cluster.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-internals?u=76281980&t=94)** If the message has a key, then the Producer will use hash partitioning to identify the given partition. If no key is present, it will use a round robin method. Custom partition selectors can also be implemented. The Producer maintains a local batch for each partition which is an in-memory cache. The message is then added to the corresponding partition batch. A separate Producer thread is used to push each batch to the corresponding partition leader broker at periodic intervals. This interval is configurable and we will discuss this later in the chapter. Then once the partition leader has received and processed the message, the Producer will receive an acknowledgement which it will pass on to the host program. In the next video, let's deep dive into publishing modes available in the Producer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Scala](../../Skills/Software%20Development/Scala.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Cross-References:** in the last (1), later in (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Producer publishing options](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=0)** - [Instructor] We will explore three producer publishing modes, and their are advantages and shortcomings in this videos. These three modes provide trade offs between scale, guaranteed delivery, and error handling. The first mode is the Synchronous Mode. In this case, the client code sends the message to the local producer. It then waits for the message to be actually sent to Kafka, and the acknowledgement received. The host thread is blocked until the acknowledgement is received. So if there are any errors in sending, the same thread can process the error before moving on to the next message. The call returns a record [Metadata](../../Skills/Web%20Development/Metadata.md) object which contains information about the partition the message was published to, and the Kafka offset for the message in that partition. This method is simple and shows guaranteed message delivery, and has the ability to process errors in the same thread. The thread can also retry publishing the message or skip the message. Given that this is synchronous, the method is slow, as it waits for the network round trip to the Kafka broker, which in turn needs to write and replicate data. It does not exploit the batch publishing capability of the producer, as it publishes one message at a time. The second publishing method is Asynchronous Publishing with No-Check. This is also called the Fire and Forget Method. Here, the client sends the message to the local producer, but does not wait for acknowledgement. The host thread is not blocked,
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producer-publishing-options?u=76281980&t=94)** but it moves on to further processing. The local producer caches the message in batches. A separate thread publishes it to Kafka. This method has low latency and scaling from the client side, as the client thread does not wait for acknowledgement, but failures are not tracked and retried, so there is the possibility of missed messages in case of network failures. The third method is the Asynchronous Mode with Callback. Here the client sends the messages to the local producer. It also provides a callback function to process results. The client moves on with further processing, and it is not blocked. The local producer caches and then uses a separate thread to publish to Kafka. When results are returned by Kafka, the callback function is called with the RecordMetaData object or with the exceptions encountered. It is now up to the client to take any action it desires. This has low latency as the client code is not blocked, but error handling can get complex, especially if message ordering is needed. In a real world scenario, choose a method that is most suitable for the use case, specifically, if delivery guarantees and ordering are required. We will see examples of using these methods in [Java](../../Skills/Software%20Development/Java.md) later in the chapter. Let's now review acknowledgements in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Acknowledgments in Kafka](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=0)** - [Instructor] In the previous video, we discussed how the various publishing modes depend upon acknowledgements from the Kafka broker. Let's explore more about acknowledgement options in this video. What is a Kafka acknowledgement? A producer client needs to know if the message has been successfully received and stored by the broker. It is also helpful to know if the message has been replicated, so in case of broker failures, the message is still available. The behavior of acknowledgements is controlled by the parameter ACKS. This parameter is set on the producer's side during broker configuration. It determines the number of replicas of a partition that must successfully receive the message before the send operation is declared successful. Do note that the producer only sends the message to the leader partition and then it is the leader partition that needs to propagate this message to the replicas. The more the replicas that are successfully updated, the better is the guarantee that the message has been delivered and is available even in case of broker failures. But more replicas also means more latency in completing the operation as the partition leader needs to coordinate with more brokers to complete the replication. There are three possible values for the ACKS parameter. Please note that this works in combination with the producer publishing options as discussed in the previous video.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/acknowledgments-in-kafka?u=76281980&t=96)** A value of zero means that there is no acknowledgement needed. This provides really high throughput but has no message guarantee. A value of one means that the leader replica should successfully receive and store the message. This is the default value. There is an impact on throughput if synchronous mode is used, as the publishing thread waits for the acknowledgement. A value of all means that all in-sync replicas should receive the message before an acknowledgement is received. It creates more latency if synchronous mode is used. In the next video, let's explore some additional producer parameters.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), we discussed (1), in the next (1)
> **Env Vars:** acks (2)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### [Additional producer parameters](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=0)** - [Narrator] Let's explore some additional producer parameters in this video. All parameters are, again, set during Kafka producer creation. The first parameter is buffer.memory. This is the total amount of memory provided on the producer clients for caching messages. The more the memory, the higher is the ability to cache. The second parameter is compression.type. This compresses messages that are sent over the wire, resulting in lower payload sizes and lower network bandwidth requirements. However, compression has the overhead of compressing and decompressing messages. Various options are available including gzip, snappy, lz4 and zstd. Then comes batch.size. This sets the threshold size of the batch in bytes for a given partition. The producer waits for a batch of messages to attain this size before the batch is sent to the partition leader, this saves on the number of round trips. The next parameter is linger.ms, is the maximum time the producer will wait for a given batch to attain batch.size. If this time is exceeded, then the batch is anyway sent to Kafka. So while a batch is being built up, there are two thresholds to control when the batch is dispatched to Kafka. It is either if the batch reaches batch.size or if the linger.ms has exceeded.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/additional-producer-parameters?u=76281980&t=94)** There are a number of additional parameters available for producers. Please review them using the URL shown here. In the next video, we will implement several options we learned in this chapter using a [Java](../../Skills/Software%20Development/Java.md) producer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Java producer options example](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=0)** - [Instructor] In this video, let's implement some of the producer options we learned in this chapter using a sample [Java](../../Skills/Software%20Development/Java.md) producer. The code for this example is available in the com learning Kafka scalable apps, chapter four package. Let's first review the file KafkaproducerWithOptions.java. We start off by setting the basic Kafka properties including bootstrap servers and the serializers. We then set the ACKS option to "all." This means, all replicas need to acknowledge receipt of the message. We also set the compression type to GZIP. Using these parameters, we create the Kafka Producer. Let's now use all the three publishing options to send messages. Let's first start publishing asynchronously without any checks for success. Note that this checks only for delivery of messages. If the producer is not able to serialize the message, we will still receive errors. Here, we create a producer record. Then we simply use the send method to send the message. There is no variable in which the return values are assigned to. In the next example, we publish synchronously and check for results. The code is similar to asynchronous publishing, except that the returned values from the send method are assigned to a record [Metadata](../../Skills/Web%20Development/Metadata.md) variable. This makes the code to block
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=95)** until this variable is populated. On successful completion, we print the resulting partition and offset values. If there is an issue with this publishing, an exception is returned. Finally, we will use asynchronous publishing with callback. For this, we first need to define a callback class. In this case, this is KafkaCallBack.java. Let's explore the Kafka callback code first. We create this class to implement the callback interface. When creating an object of this class, we can also provide additional context about the message. So, in the case of failures, we can relate the context to the failure. Here, we are creating the callback with the message key and then storing it in an instance variable. We have to implement the on completion method that receives both the record metadata and an exception. We first check if an exception is returned and then handle the exception. Else, we handle the successful completion for the publishing process. The message key here provides us info about on the specific message so that can be used for further processing. Let's go back to the main class. For publishing with callback, the operations are similar to the earlier ones, except that we pass a callback object as part of the send method. The callback object is created with the required context here.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-producer-options-example?u=76281980&t=189)** Let's execute this code now and review the results. If we get popped up with an execution window, please choose the module here as Kafka scalable apps and hit run. As we observe here, these options have been successfully executed. In the next chapter, let's look at the consumer side of scaling and resilience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Metadata](../../Skills/Web%20Development/Metadata.md) (2)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** kafkaproducerwithoptions.java (1), kafkacallback.java (1)
> **Env Vars:** acks (1), gzip (1)
> **Analogies:** similar to (2)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Building Scalable Consumers

[↑ Back to Table of Contents](#table-of-contents)

#### [How consumer works](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=0)** - [Instructor] In the previous chapter, we explored the options available on the producer side for scale and resilience in Kafka. In this chapter, let's explore the consumer side. In this video, let's dive into some internals around how a Kafka consumer works. First, let's start with the group coordinator. Kafka consumers are typically part of consumer groups. Each consumer group has a group coordinator allocated to it. The group coordinator is a Kafka broker in the Kafka cluster. The controller designates a group coordinator when a new consumer group is used to access Kafka. The coordinator keeps track of all the active consumers in the consumer group. It does so by receiving heart beats from the consumer. When the consumer connects to Kafka, it establishes this heart beat with the corresponding group coordinator. When the heart beat stops, the coordinator senses that the consumer is down, and proceeds to trigger rebalancing of the partition among the other consumers in the same consumer group. Similarly, when a new consumer is added to the group, rebalancing is triggered. Each consumer group also has a consumer leader. A consumer leader is a consumer in the same consumer group. Typically, it is the first consumer to join the group. It receives information about all the other consumers in the group through the group coordinator.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-consumer-works?u=76281980&t=93)** It is responsible for assigning partitions to other consumers in the group. It works with the group coordinator for rebalancing. When the group coordinator sees a new consumer being added, or an existing consumer going down, it requests the group leader for reallocation of partitions. This is then propagated to individual consumers, and they start listening on their new set of assigned partitions. When the group coordinator or the group leader goes down, that responsibility is transferred to other brokers and consumers in the group respectively. In the next video, let's explore message batching on the consumer side.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Batching message consumption](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=0)** - [Instructor] In this video, let's explore how consumers can receive messages in batches and process them. How do consumers receive messages from Kafka? Consumers poll Kafka periodically for new messages. The polling interval is configured through the poll method. Each consumer is allocated a set of partitions to work with. Consumers poll corresponding partition leaders for new messages. When consumers poll, a batch of messages are returned from Kafka when new messages are available. The bigger the batch sizes and higher the poll interval, the lower are the round trips and request overheads. However, such large batch sizes and poll intervals directly impact the latency of processing also. It is required to choose the right parameters based on the use case to balance between round trips and latency. How do we configure this round-trip behavior? Here are some key parameters. The first one is the poll interval, which is the time between consecutive polls by the consumer to Kafka. This is configured through the poll method. The minimum batch size is configured through the [Fetch](../../Skills/Web%20Development/Fetch.md).MIN.BYTES parameter. A batch should reach this size before the batch is delivered to the consumer. The default size is one byte. FETCH.MAX.WAIT.MS parameter works together with the FETCH.MIN.BYTES parameter. It is the maximum amount of time to wait
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/batching-message-consumption?u=76281980&t=96)** for the batch to attain the required batch size after which, the batch is sent anyway. So, when a new poll is done by the consumer and new messages exist in Kafka, the batch is sent either on achieving the FETCH.MIN.BYTES value or the time lapses for FETCH.MAX.WAIT.MS. MAX.PARTITION.FETCH.BYTES is another parameter that controls the maximum data that is returned in a single batch. This allows to control the amount of buffer needed on the consumer side to store and process the batch received. A number of other parameters exist and they are discussed in the URL provided. I highly recommend reviewing this list to study all the options available. In the next video, let's explore how the consumer can control commits to the messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (6)
> **Env Vars:** fetch (6), bytes (4), min (3), max (3), wait (2)
> **Prerequisites:** required to (1), configure (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Committing messages](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=0)** - [Instructor] Let's explore the options available on the consumer side for committing Kafka messages in this video. By default, consumers are configured to auto commit messages on receipt. When a message is committed by a consumer in a consumer group, Kafka marks that this message has been delivered to this consumer group and does not send the message again to a consumer in the same consumer group It is controlled by two parameters. The Enable.auto.commit parameter determines if it is automatically committed on receipt or the consumer needs to manually commit. By default, this is set to true. Also the Auto.commit.interval.ms parameter determines the interval at which consumers auto commit messages. The default is 5,000 milliseconds. This means the consumer autos commits messages received every five seconds. If a consumer commits on receiving messages, it does not guarantee that the consumer has successfully processed the message as processing may involve a number of steps on the consumer side based on the use case. If the consumer tries after auto committing a message and before processing, the message will never be delivered again by a consumer in this group, so it will never be processed. Manual committing of a message after successfully processing would mean that if the consumer does go down before committing the message, the message would again be delivered to a consumer
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/committing-messages?u=76281980&t=94)** in this consumer group and will get a chance to be processed again. Handling duplicates is much easier than handling missed events. Determine if auto or manual commit is needed based on your use case. How does manual commit work? There are two options available, synchronous and asynchronous. Synchronous commit is done by calling the commitSync method on the consumer. This is done after processing every batch, after all the messages in that batch are processed. When using the synchronous commit method, the thread blocks until all commits are successfully performed with the brokers. There are additional options available to control commits by a message or a partition level. In the case of an asynchronous commit, it is done again at the batch level by calling the commitAsync method. In this case, commits happen in a separate thread and do not block the main thread. This method can have an optional callback in case of any errors. We will review some examples of these in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** commitsync (1), commitasync (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Java consumer example](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=0)** - [Instructor] In this video, we will build a [Java](../../Skills/Software%20Development/Java.md) consumer and utilize various consumer options we have learned in this chapter. The code for this consumer is available in the package com.learning.kafkascalableapps chapter5. The class file is KafkaConsumerWithOptions.java. This code contains a simple consumer. Let's focus on the key options that we use in this example. We create the consumer with the basic options, bootstrap servers and the serializers. We use a new consumer group ID called kafka-options-consumer. We now set various parameters for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md). We set the FETCH_MIN_BYTES configuration parameter to indicate that the total batch size should at least be 10 bytes before the batch is fetched. Next, we set the max wait time for the batch to be hundred milliseconds. So we are guaranteed to [Fetch](../../Skills/Web%20Development/Fetch.md) messages at hundred milliseconds, even if the FETCH_MIN_BYTES threshold is not reached. We then set the MAX_PARTITION_FETCH_BYTES to two MB. In order to do manual committing, we need to turn off AUTO_COMMIT by setting the ENABLE_AUTO_COMMIT flag to false. Now we proceed to create a consumer for the Kafka learning orders topic. Next, we start a wide loop and keep pulling Kafka for every hundred milliseconds.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/java-consumer-example?u=76281980&t=93)** When a batch of messages are received, we simply print the messages here. At this point, we implement any custom logic that is needed for the specific use case in this loop. We introduced an artificial delay of one second after printing every message so that we can see the status of the lag before the commit happens. Finally, we do an async commit. Async commit is done using the commitAsync method. We will only commit for every 10 records so that there is a commit for every 10 seconds. Let's run this code and observe the lag and see how manual commits impact the lag. Note that we are using a new consumer group here and consuming messages from the earliest so there are a lot of messages to consume. On running this code, we see that the messages are immediately dequeued and printed. On the Kafdrop UI, it may take some time for the new consumer group to show up as it'll only happen at the first commit. On further refreshes, we do not see the lag going down at the same pace of every one second. This is because we are doing a manual commit every 10 seconds, so the lag will only go down every 10 seconds. We finally see the lag going down to zero. If we kill the consumer process before the commit happens and restart again, we will see that the uncommitted messages are again consumed and processed. In the next video, we will discuss multi-threaded consumers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** fetch_min_bytes (2), max_partition_fetch_bytes (1), auto_commit (1), enable_auto_commit (1)
> **File Paths:** kafkaconsumerwithoptions.java (1)
> **Code Identifiers:** commitasync (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Multi-threaded consumers](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=0)** - In the previous video, we have the consumer running in a single thread and processing messages one by one. Processing a single message can take significant time depending upon the use case. On the other hand messages can be produced at much higher speeds and the single thread may not catch up. We can start multiple consumers in a consumer group, but even there, a single consumer needs to at least handle a single partition which may be quite large. To optimize resource utilization, consumers can dequeue messages in one thread and then use multiple threads to process them in parallel. The code here is a simple example on how this can be achieved. This is not the most optimal nor production grade multi-threaded code. It is just a sample to demonstrate one [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) option. It is highly recommended to focus on advanced [Java](../../Skills/Software%20Development/Java.md) capabilities for optimal multi-threading. The sample code is available in the ScalableConsumer.java class in the com.learning.kafkascalableapps.chapter5 package. Let's review the code here. We first set up the Kafka consumer in a similar fashion as we have done in the earlier video. We set auto commit to false, and we will only commit when all messages in the batch are processed. Then we create five worker thread using the Sample Worker class. This class implements a worker
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=93)** where we can do processing of messages. Let's explore the Sample Worker class now. The Sample Worker has a single blocking queue through which the main consumer thread can push messages to the queue. The queue is declared static so there is only one queue for all the worker threads. The static add to queue method can be called to add a message to this queue. When a new message is received, it increments the pending items count. The get pending count method returns the number of requests that are pending in the queue for this worker. The run method runs an infinite wide loop that dequeues messages from the queue and performs required processing. Note that this is not a static function. For this example, it just sleeps for a hundred milliseconds. Then it decrees the pending items count. When the count is empty it means there are no messages to process. Let's go back to the Scalable Consumer program. So we create five worker threads here with the scalable consumer and start them all. We maintain a list of these worker threads. Now we run a wide loop, keep polling for new messages from Kafka and then proceed to handle them. For handling, we simply add the received message to the single queue. All worker threads are listening to this queue and one of them will dequeue it and process. Once the consumer has read all the messages in this batch and send them to the blocking queue, it waits for all the messages to be processed. It checks for the pending count
>
> **[3:06](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/multi-threaded-consumers?u=76281980&t=186)** and waits until the count becomes zero. Once all the messages are processed, the consumer commits the entire batch. Using five threads instead of one provides scalability. Committing after all processing is done ensures [Resiliency](../../Skills/Software%20Development/Resiliency.md) from failures. Note that we are using a unique consumer name so all messages will be dequeued and processed. Let's run the code now and observe the results. As seen here we see that all five workers are involved in processing the messages in parallel. This is one option to scale Kafka consumers. In the next chapter let's explore some best practices for Kafka.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Warnings:** note that (2)
> **File Paths:** scalableconsumer.java (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)


### 6. Kafka Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing partition counts](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=0)** - [Host] In this chapter, we will discuss some best practices for building scalable applications with Kafka. In this video, we will focus on managing partitions. One of the most important and difficult decisions to make while creating a topic is deciding on the number of partitions. Partition counts cannot be decreased after a topic creation so care should be taken in choosing the right size. If the number of partitions are too few then fewer brokers are involved in handling the topic and there is a lot of serialized processing happening. As a result, there could be producer lag and consumer lag. Some brokers and consumers may be overworked, handling big partitions, while others may be starved for work as they don't have any partitions assigned to them. On the other hand, if the number of partitions is too high, it results in more broker resources like file handles and memory. Note that there is an overhead with each additional partition, and the number of partitions a broker can handle is limited. There is also high replication overhead if the number of partitions are high. So what are some of the recommendations for partition sizing? Of course, plan partition counts before creating the topics as it's not possible to decrease them later. Make sure that the partition count is greater than the number of expected consumers in the consumer group. Otherwise, there will be consumers
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-partition-counts?u=76281980&t=93)** with no partition to work on. Use as many brokers as possible in the cluster as both partition leaders and replicas. This helps distribute work across the cluster. Also, note that brokers have limitations in how many replicas they can handle including leaders and followers. Try to keep the total number of replicas per broker to be less than a thousand, if needed, increase the number of brokers. Messages are distributed among partitions based on keys, so the number of possible unique values for the key should be greater than the number of partitions. Otherwise, some partitions will receive no messages. It's also important to make sure that the key values are evenly distributed so all partitions get an equal distribution of messages. Finally, it is important to perform low testing to understand the performance characteristics of your specific application and then choose the right sizes for partitions based on overall peak load and observed partition lags.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** note that (2)
> **Speakers:** - [host] (1)

#### [Managing messages](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-messages?u=76281980&t=0)** - [Instructor] Let's review some best practices in managing Kafka messages. Kafka has a limit on the size of the messages. Keep the message sizes small so they are easier to manage. Do not include BLOBs in messages. Rather save BLOBs in a central store like HDFS or S3, and then include the link to the BLOBs in the messages. Try to use binary standards like Avro for messages. Kafka has serializers and de-serializers for Avro messages which can be exploited. Also use as schema repository to share message schema between the producers and the consumers. This helps in managing message versioning. One key aspect of messages or the message keys. Choose keys that have more unique values. The more unique values that are there, the better will be the partitioning of data. Choose keys where unique values of the key are uniformly distributed. This, again, will ensure better partitioning of data. Keys to have an overhead in Kafka. Use keys only if message ordering is needed by the key. Without keys, Kafka will use a round robin method to distribute messages to partitions. In the next video, let's review some best practices for consumers.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Managing consumer settings](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-consumer-settings?u=76281980&t=0)** - [Instructor] Let's review some best practices for setting up Kafka consumers in this video. Consumer groups need to scale to match processing loads. Choose sizes based on the expected incoming messages and desired latency. We can also add new consumers to the group when we need additional capacity. Batching is an important consideration for consumers. If you're using it for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), use larger batch sizes to reduce network round trips. On the other hand, if you're using it for [Real-Time](../../Skills/Database%20Management/Real-Time.md) stream processing, use smaller batch sizes and smaller polling intervals to minimize latency. Unless the consumer operations are simple and quick, use manual commits to ensure reliability of [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). Also, provide provisions for reprocessing messages when they are received again by another consumer in case of failures. Use non-blocking processing and multi-threading processing for higher throughput on the consumer side. Always test for failure conditions like a consumer going down or a broker going down and make sure that messages are not lost and reprocessing happens as desired by the use case. Let's review some best practices for [Resiliency](../../Skills/Software%20Development/Resiliency.md) in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Managing resiliency](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/managing-resiliency?u=76281980&t=0)** - [Instructor] What are some of the best practices to ensure [Resiliency](../../Skills/Software%20Development/Resiliency.md) in Kafka? Use topic replication to safeguard against broker failures. It is recommended to have a replication factor of at least three to maintain safe replicas. Distribute Kafka brokers across different physical racks. Kafka is rack-aware and will distribute replicas so that they are on different racks. This protects the cluster from rack failures. Use acknowledgements in producer to ensure guaranteed delivery of data to Kafka. Similarly, use manual commits in consumers to ensure that the offsets are incremented only after data is successfully processed on the consumer side. The active controllers can fail, so there needs to be sufficient standby controllers to take over if that happens. Since the roles are explicit now, it is recommended to have at least three nodes configured as controllers for backup. Use mirroring with MirrorMaker if geo-redundancy is required. Always test for resiliency test cases to make sure that the system recovers as desired by the use case when failures happen. This completes our exploration of Kafka for building scalable applications. In the next chapter, we will exercise our learnings with an exercise use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (2)
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 7. Use Case Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Kafka applications use case: Problem definition](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=0)** - [Instructor] We have learned a number of concepts and techniques for building [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and [Resiliency](../../Skills/Software%20Development/Resiliency.md) with Kafka in this course. Now you can exercise some of these learnings in solving a use case problem. In this video, let's discuss the use case exercises. The first exercise for you is to create a topic called Kafka.usecase.students. The topic should have three partitions and a replication factor of two. You can choose to create it either in the command line or through the kafdrop UI. The second exercise is to create a [Java](../../Skills/Software%20Development/Java.md) producer for the Kafka.usecase.students topic. When creating the producer, use a batch size of 32K and set acknowledgement to all replicas. Use asynchronous publishing with callback to publish the messages. The final exercise is to create a Java consumer for the Kafka.usecase.students topic When creating the consumer set the following parameters: Set [Fetch](../../Skills/Web%20Development/Fetch.md) max bytes to 20 and fetch max wait MS to 200. Use asynchronous commit for the messages received. Please implement the solutions and then review the example solutions provided in the videos in this chapter. Your solution doesn't have to match verbatim with the example provided as long as it solves the use case problem. You are good.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/kafka-applications-use-case-problem-definition?u=76281980&t=92)** Best of luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Setting up topics](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/setting-up-topics?u=76281980&t=0)** - [Instructor] In this video, let's set up the kafka.usecase.students topic using Kafdrop. Go to the Kafdrop UI and then click on the New button at the bottom of the topics table. Provide the topic name as kafka.usecase.students. Set the number of partitions to three and the replication factor to two, hit Create. The topic is now created. We can now build a producer for this topic in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Producing data in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/producing-data-in-java?u=76281980&t=0)** - [Instructor] Let's now look at the use case producer in [Java](../../Skills/Software%20Development/Java.md). The code for this chapter is available in the package com.learning.Kafkascalableapps.chapter7. The producer is available in the class use case producer with options.java. Let's review this code now. We first set up the main Kafka producer parameters, namely bootstrap servers, and the key and value serializers. Then we set acknowledgements to all value. To set the batch size to 32K, we use the batch size parameter and provide the number of bytes. Now we proceed to create a Kafka producer. We will publish 10 random messages in a similar fashion, as we did earlier in the course. To publish the record, we create a use case callback class and provide that to the send method. This enables asynchronous publishing. Let's execute this code now. As we can see, we have successfully published 10 messages to Kafka with asynchronous publishing. Let's build a consumer for these messages in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** options.java (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Consuming data in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/consuming-data-in-java?u=76281980&t=0)** - [Instructor] As the final exercise, let's build a consumer in [Java](../../Skills/Software%20Development/Java.md) for the kafka.usecase.students topic. The code for this exercise is in the class UseCaseConsumerWithOptions.java. Let's review the code now. We start off by setting the required parameters including the bootstrap servers, these serializers for key and value, and a group ID. We also set the offset reset to receive data from the earliest messages available. As required by the exercise, we set the batching parameters here. We set [Fetch](../../Skills/Web%20Development/Fetch.md) max bytes to 20 bytes and FETCH_MAX_WAIT_MS to 200. We also turn off auto-commit. We can now proceed to create a consumer and subscribe to the kafka.usecase.students topic. We then start a while loop and poll for new messages every 100 milliseconds. We print the records received as part of the processing. Finally, we use the commitAsync method to commit the data. Let's execute this code and review the results. The messages published to the topic has been received and printed here. This completes the example exercises for this use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **File Paths:** usecaseconsumerwithoptions.java (1)
> **Code Identifiers:** commitasync (1)
> **Env Vars:** fetch_max_wait_ms (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [How do you extend your Kafka learning journey?](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-building-scalable-applications-19204536/how-do-you-extend-your-kafka-learning-journey?u=76281980&t=0)** - [Kumaran] Now that you have learned about the scale and resilience of [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md), you can take your learning even further. First, you can learn more about using Kafka for building stream processing applications with [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), Apache Flink, or Kafka Streams. Second, build an end-to-end [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) pipeline use case with Kafka and other [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing and storage technology. Finally, you can implement Kafka in your organization for one of your own big data processing use cases. Data always intrigues me. I bet it intrigues you, too, so let's keep exploring it, and find better ways of extracting knowledge from it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (2), [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **CLI Commands:** apache (3), find (1)
> **Speakers:** - [kumaran] (1)


## Resources

- Exercise files available

## Skills Covered

- Apache Kafka
- Scalable Web Applications

## Path Context

### In [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)
**1 of 8** | [Troubleshooting and Debugging Kafka](Troubleshooting%20and%20Debugging%20Kafka.md) →

## Appears In

- [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Apache Kafka Essential Training- Getting Started](../Cloud%20Computing/Apache%20Kafka%20Essential%20Training-%20Getting%20Started.md) — Apache Kafka
- [Tuning Kafka](Tuning%20Kafka.md) — Apache Kafka
- [Troubleshooting and Debugging Kafka](Troubleshooting%20and%20Debugging%20Kafka.md) — Apache Kafka

---

[↑ Back to top](#)