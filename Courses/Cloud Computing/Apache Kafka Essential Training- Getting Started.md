---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: apache-kafka-essential-training-getting-started-22398044
url: "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 12/10/2024
learners: 86498
skills:
  - Apache Kafka
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFHx_pVYywSXA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686957444139?e=2147483647&amp;v=beta&amp;t=NhYgdf3Y_2sWePm6WCOVar3_YDwr_KsBjGyMKJZ2k9c"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Explore a Career in Data Engineering]]'
prev_courses:
  - '[[PySpark Essential Training- Introduction to Building Data Pipelines]]'
next_courses:
  - '[[Transition from Data Science to Data Engineering]]'
path_nav: '[{"path":"Explore a Career in Data Engineering","position":6,"total":7,"prev":"PySpark Essential Training- Introduction to Building Data Pipelines","next":"Transition from Data Science to Data Engineering"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/apache-kafka
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Apache%20Kafka%20Essential%20Training-%20Getting%20Started.md)

![Apache Kafka Essential Training: Getting Started](https://media.licdn.com/dms/image/v2/D560DAQFHx_pVYywSXA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686957444139?e=2147483647&amp;v=beta&amp;t=NhYgdf3Y_2sWePm6WCOVar3_YDwr_KsBjGyMKJZ2k9c)

# Apache Kafka Essential Training: Getting Started

> One of the key components of a big data processing pipeline is a scalable and distributed message queue. Message queues enable real-time streaming capabilities with multiple producers and consumers of data. This enables real-time applications that can analyze data and produce insights in a scalable fashion. Apache Kafka provides these capabilities. As the de facto standard for open-source messagin

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044) | 1h 15m | Intermediate | 86K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Getting started with Apache Kafka](#getting-started-with-apache-kafka)
- [**1. Introduction to Kafka**](#1-introduction-to-kafka) (6 videos)
  - [Message queues](#message-queues)
  - [What is Kafka?](#what-is-kafka)
  - [Benefits of Kafka](#benefits-of-kafka)
  - [Kafka use cases](#kafka-use-cases)
  - [Setting up the exercise files](#setting-up-the-exercise-files)
  - [Setting up Kafka](#setting-up-kafka)
- [**2. Basic Concepts**](#2-basic-concepts) (5 videos)
  - [Messages](#messages)
  - [Topics](#topics)
  - [Kafka brokers](#kafka-brokers)
  - [Logs in Kafka](#logs-in-kafka)
  - [Producers and consumers](#producers-and-consumers)
- [**3. Using Kafka Command Line**](#3-using-kafka-command-line) (7 videos)
  - [Kafka client scripts](#kafka-client-scripts)
  - [Creating a topic](#creating-a-topic)
  - [Exploring topics](#exploring-topics)
  - [Publishing messages to topics](#publishing-messages-to-topics)
  - [Using console consumer](#using-console-consumer)
  - [Topics management](#topics-management)
  - [Review Kafka setup](#review-kafka-setup)
- [**4. Kafka Partitions and Groups**](#4-kafka-partitions-and-groups) (6 videos)
  - [Intro to partitions](#intro-to-partitions)
  - [Creating topics with partitions](#creating-topics-with-partitions)
  - [Publishing with keys](#publishing-with-keys)
  - [Consumer groups](#consumer-groups)
  - [Consumer offset management](#consumer-offset-management)
  - [Consuming partitioned data](#consuming-partitioned-data)
- [**5. Kafka Java Programming**](#5-kafka-java-programming) (5 videos)
  - [Kafka client libraries](#kafka-client-libraries)
  - [Creating a producer in Java](#creating-a-producer-in-java)
  - [Publishing messages in Java](#publishing-messages-in-java)
  - [Creating a consumer in Java](#creating-a-consumer-in-java)
  - [Consuming messages in Java](#consuming-messages-in-java)
- [**6. Use Case Project**](#6-use-case-project) (4 videos)
  - [Kafka basics use case: Problem definition](#kafka-basics-use-case-problem-definition)
  - [Setting up topics](#setting-up-topics)
  - [Producing and consuming data with scripts](#producing-and-consuming-data-with-scripts)
  - [Producing and consuming data with Java](#producing-and-consuming-data-with-java)
- [**Conclusion**](#conclusion) (1 videos)
  - [Extending your Kafka knowledge](#extending-your-kafka-knowledge)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Apache Kafka](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=0)** - [Instructor] [[Apache Kafka]] is the leading open-source technology for message queuing and distribution with widespread adoption. My name is Kumaran Ponnambalam. In this course, I will introduce Apache Kafka and show you how to build [[Data Pipelines]] with it. We will start off with various concepts, benefits, and use cases of Apache Kafka. Then, we will use command-line tools to publish and consume data. We will then discuss partitioning with Kafka. Finally, we will build Apache Kafka clients using [[Java]]. To get the most out of this course, you should be familiar with [[Big Data]] concepts, Java programming, and Docker. Let's now start learning about Apache Kafka.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (5), [[Java]] (2), [[Data Pipelines]] (1), [[Big Data]] (1)
> **CLI Commands:** apache (5), docker (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Kafka

[↑ Back to Table of Contents](#table-of-contents)

#### [Message queues](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=0)** - [Narrator] Before we dive into [[Apache Kafka]], it is important to understand the publish/subscribe pattern and the benefits it provides. Let's review publish/subscribe with message queues in this video. When we build distributed services, we have multiple running process instances that communicate with each other over a network to exchange messages. Let's start with a simple two-process network where a sender process communicates with the receiver process to exchange data. In this case, the sender needs to know the address of the receiver. In addition, both the sender and the receiver need to agree upon a common data protocol and format. This creates a strong static binding between these two processes. Now, suppose we have three receivers each responsible for a different type of processing based on the data received from the sender. In this case, the sender needs to know about all the three receivers. Addition of new receivers requires changes on the sender side to configure the new receiver. Again, this creates a strong coupling between the senders and the receivers. What happens when there are multiple senders and multiple receivers exchanging the same type of data between them? The management becomes a lot more cumbersome here where each sender should know about each receiver. Add fault tolerance into the picture,
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=96)** and it'll get more complex. A clean and scalable solution here is to use a message queue. Each sender needs to only know about the message queue and simply publish the messages to the queue. A receiver becomes a subscriber and subscribes to the message queue. When a new message arrives in the queue, the subscriber is notified who then proceeds to pull the message and use it. In this case, each of the publishers and subscribers only need to know about the message queue. They are oblivious to other publishers or subscribers using the same queue. This is the publish/subscribe pattern, also known as pub/sub. This pattern has many advantages. To begin with, the publishers and the subscribers are decoupled from each other. This results in easy management of the setup where publishers and subscribers can be added and removed without any changes on others in the network. It then allows the publishers and subscribers to scale easily, provided the message queue can handle the load. Message queues also provide back-pressure handling. If the publishers generate data in spikes, the message queues act as a buffer zone to cache data until the subscribers catch up and process them. Message queues can provide reliability through persisting queue data and tracking consumption of data. Apache Kafka is such a technology
>
> **[3:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=191)** that provides these advantages. Let's learn about it in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (2)
> **CLI Commands:** apache (2)
> **Prerequisites:** configure (1), setup (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [What is Kafka?](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=0)** - [Instructor] Having reviewed the benefits of the publish-subscribe pattern in message queues, let's dive into the most popular technology in that domain, namely [[Apache Kafka]]. What is Apache Kafka? Kafka is an events streaming platform. Events, or messages, represent the actual data that is exchanged through Kafka. The terms events and messages are used interchangeably in Kafka's context. It is a critical piece of the [[Big Data]] puzzle and plays an integral part in many big data pipelines. Kafka is open source and can be downloaded and deployed free of cost. There are also commercial options that provide support and serverless capabilities. It is arguably the most popular messaging platform in the world. In Kafka's world, there are data publishers called producers which push messages into Kafka. And there are subscribers called consumers which listen and receive the messages. Producers and consumers are standard terms in the Kafka world to represent publishers and subscribers. What capabilities does Kafka provide for data exchange? It collects messages from multiple producers concurrently. It provides persistent storage of the messages received. This provides fault-tolerance capabilities. It transports data across from the producers to the consumers.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=95)** With mirroring capabilities, it can also transport across networks. It distributes data to multiple concurrent consumers for downstream processing. Finally, it provides tracking of message consumption by each consumer. This ensures at least one's delivery of the messages, even if the consumers go down and come back again. We will discuss more details about these features and see them in action throughout the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (2), [[Big Data]] (2)
> **CLI Commands:** apache (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Benefits of Kafka](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=0)** - [Instructor] What are some of the key benefits of [[Apache Kafka]]? Kafka provides high throughput and can handle large quantities of data. It supports multiple concurrent producers that can push data and multiple subscribers for the same data. It can provide such high throughput with low latency of a few milliseconds. This enables a number of [[Real-Time]] use cases where the latency is not noticeable end to end. Kafka provides excellent fault tolerance against failures, either within Kafka or with consumers. This ensures that messages are reliably stored and distributed in spite of issues with individual processes. Kafka decouples producers and consumers; they do not need to know about each other. This enables ease of configuration and management. It also makes [[Software Development]] a lot simpler, as the developer of the producer or consumer program only needs to deal with Kafka and does not have to worry about other producers or consumers of the same data. One benefit of decoupling and storage capabilities is back-pressure handling. Even if the producers produce data in spikes, the consumers can catch up at their own pace, as Kafka provides the buffer in the middle, the whole data, until it is consumed. Kafka provides horizontal [[Scalability]] within its architecture, as well as for producers and consumers.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=95)** The system can scale with addition of nodes without significant choke points. This is essential for [[Big Data]] processing. Kafka's low latency enables stream processing, while its store and forward capability enables batch applications. The consumers need not have to consume messages immediately as Kafka acts as a buffer. Now that we have looked at Kafka's benefits, let's review the popular use cases for Kafka in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (1), [[Real-Time]] (1), [[Software Development]] (1), [[Scalability]] (1), [[Big Data]] (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Kafka use cases](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=0)** - [Narrator] What are some of the popular use cases for [[Apache Kafka]]? Kafka enables a wide variety of use cases for both [[Batch Processing]] and [[Real-Time]] streaming. To begin with, it can provide asynchronous messaging between services. Rather than use [[Representational State Transfer (REST)|REST]] or RPC, a client service can send requests through Kafka and receive responses through Kafka. It provides better reliability and manages back pressure on the server side. It has low latency, enough for even browser-based real-time applications. It enables real-time stream processing. As messages are received in Kafka, consumers can consume them in real time, process them, and trigger real-time actions. Kafka queues can be used to send log messages and alerts. One consumer can archive these messages in a persistent store. Another can look for key exceptions in real time and trigger alerts. Kafka enables the event sourcing pattern where the state of an entity can be determined using the events generated about state changes for that entity. This is a popular pattern for [[Big Data]]. Finally, Kafka enables real-time analytics. An [[Apache Spark]] or Apache Flink consumer can listen to messages in real time and generate windowed aggregations, analyze trends, and generate triggers, metrics, and actions.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=94)** This can be used to update real-time [[Dashboards]]. Having discussed the benefits and use cases of Kafka, let's now install the required software and get set up for the rest of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (6), [[Representational State Transfer (REST)|Rest]] (2), [[Apache Kafka]] (1), [[Batch Processing]] (1), [[Big Data]] (1)
> **CLI Commands:** apache (3)
> **Env Vars:** rest (1), rpc (1)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Setting up the exercise files](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, I will help you set up the exercise files for this course. In my case, I have downloaded the files into my Documents' ExerciseFiles directory. Please download in a similar location in your setup. There are two exercise files here: The [[Java]] project that is bundled into the kafka-getting-started.zip file and the Docker-compiled YAML file called kafka-single-node.yml. Let's first start to set up the Java project kafka-getting-started.zip. Unzip the file kafka-getting-started.zip. This will create the folder KafkaGettingStarted with the project contents inside it. Open IntelliJ IDEA. Select Open and choose the route directory where we downloaded and extracted the files. This is the KafkaGettingStarted folder. Click Open. Please make sure to select the right SDK in the Project Structure option. This project is built with Java version 19, so choose an SDK version that is 19 or above. Click OK. Make sure that the project compiles without any errors. IntelliJ IDEA will automatically proceed to compile the project. It'll download all the dependencies it needs if it is not already available in your local Maven repository. This project contains both Java classes and instructions to execute various commands. The command line rated steps
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=94)** are available under the resources directory, please explore the same. We will use these as we progress through the course. Now let's proceed to set up Kafka for our exercises in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4)
> **CLI Commands:** make (2), docker (1), node (1), unzip (1)
> **Env Vars:** idea (2), sdk (2), yaml (1)
> **Prerequisites:** set up (3), setup (1)
> **Tools:** intellij (2), command line (1)
> **Exercise Files:** exercise files (2), zip file (1)
> **File Paths:** kafka-single-node.yml (1)
> **Versions:** version 19 (1)

#### [Setting up Kafka](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=0)** - [Instructor] The instructions for setting up Kafka are available in the file: resources/chapter-1-settingup-kafka.txt inside the Kafka Getting Started project. Please take a moment to review the steps. We are going to set up a Kafka broker in Docker. If you're using either macOS or [[Windows]], please install Docker Desktop from the Docker website. We will be using the KRaft version of Kafka. This requires a single Kafka container. The Docker [[Jetpack Compose|Compose]] configuration for the same is available in the kafka-single-node.yml file. Let's explore this .yml file now. We have the Kafka service, which is from Bitnami. We will be using Kafka version 3.4. All code and commands in this course are tested with Kafka version 3.4. You can try other versions, but please note that the behavior may not be the same based on future changes in Kafka. We will be exposing two ports in Kafka. Please pay attention to the difference since this is important and can cause confusion. One port, 29092, will be used for other Docker containers to communicate with this container. This port should only be used when the client is another Docker container. A second port, 9092, will be used when accessing Kafka from the host system. Let's walk through the Kafka configuration now.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=95)** We are enabling KRaft, which is the newer [[Configuration Management]] option in Kafka using the parameter: KAFKA_ENABLE_KRAFT=yes. We will not be using ZooKeeper whose support is being phased out in Kafka. We set to allow plain text listeners in this installation. This is recommended only for development setup. The NODE_ID for this broker is set to 1. This should be unique within the cluster. Each Kafka node can perform two roles, namely broker and controller. Being a single node system, we will choose both. The CONTROLLER_LISTENER_NAME is set as CONTROLLER. It'll be referred to in other configuration parameters. Similarly, the INTER_BROKER_LISTENER_NAME is set as CLIENT. Listener configuration lists the ports on which Kafka brokers will listen. The client listener shows the port on which this broker listens for internal communications within the Docker environment. The external listener listens for communications outside the Docker environment. The controller listens on port 9093. The security protocol is set as plain text for all the listeners. This is recommended only for learning and development environments. The advertised listeners are those that allow clients to connect Kafka. We only expose the client and external but not the controller. The CONTROLLER_QUORUM_VOTERS identifies all the brokers that perform the role of a controller in a cluster.
>
> **[3:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=190)** As the cluster has only one node that behaves as a controller, we list its ID, IP address, and port. Finally, the port 9092 is exposed outside the Docker environment for external clients to connect. Let's start the container now. Open the terminal window. If you are on windows, please use the [[Powershell]] window. First, navigate to the directory where kafka-single-node.yml file exists. Now run the docker-compose command. The command would be: docker-compose -f kafka-single-node.yml up -d.
>
> **[3:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=234)** This will download the images if they are not already on your local Docker and then proceed to start the containers. Depending on the download process, it may take some time to start up. Then check if the container is up and running with the command: docker ps. We can see that Kafka is up and running. If you need to shut down, you can bring the containers down using the command: docker compose -f kafka-single-node.yml down. Please note that when the container is removed, data in the Kafka logs are also lost. For now, I am leaving them running. Let's now deep dive into Kafka concepts in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), [[Windows]] (2), [[Configuration Management]] (1), [[Powershell]] (1)
> **CLI Commands:** docker (14), node (7)
> **Env Vars:** kafka_enable_kraft (1), node_id (1), controller_listener_name (1), controller (1), inter_broker_listener_name (1)
> **File Paths:** kafka-single-node.yml (4), resources/chapter-1-settingup-kafka.txt (1)
> **Prerequisites:** getting started (1), set up (1), install (1), setup (1)
> **Tools:** docker desktop (1), terminal (1), powershell (1)
> **Ports:** port 9093 (1), port 9092 (1)
> **Versions:** version 3 (2)


### 2. Basic Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Messages](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=0)** - [Instructor] In this chapter, we will explore a number of basic concepts and entities that make up Kafka's architecture. We start off with a Kafka message. A Kafka message is the unit of data that is collected, stored, and distributed by Kafka. Let's explore more about messages in this video. A Kafka message is also called an event. A message is a record of a real world event at a point in time, but that definition does not constrain what a message is. It can be any piece of data. A message is equivalent to a row or a record in a database. It can have attributes and values like a map. It can also be a blob that contains an image or an audio snippet. Kafka treats all messages as a byte array. It does not try to associate any semantics on the content of the message. That is the job of the producer and the consumer. Producers and consumers need to agree upon the content and format of the message and be able to serialize and deserialize them. Kafka merely takes in byte arrays and distributes them. Size limits exist in Kafka on the maximum size of the message. It is configurable with the parameter max.message.bytes and the default size is 1MB. It's not recommended to increase this value as it leads to inefficient message processing. While producing and consuming messages,
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=96)** the producers and consumers can batch requests for efficiency. What are some of the key contents of a message? Kafka does have some predefined attributes. Messages in Kafka have a key. The key is defined by the producer of the message. Keys are not mandatory, and they also need not be unique. Keys are used for partitioning data. We will discuss partitioning further in the course. The value attribute of the message contains the actual message. It is a byte array, and the semantics of the value is user defined. Kafka does not infer anything from the message contents. Another key attribute to be noted is the timestamp. Every message is automatically timestamped by Kafka. Kafka supports two types of automatic timestamping. Event time is when the producer creates the timestamp. Ingestion time is when the Kafka broker timestamps it when it stores the record. This option is configurable. Now let's look at some examples for the messages. The first message is a map with attribute names and values. In this case, it is an employee record in [[JSON]]. The message key is set to the employee ID. The second message is a web server log stored in CSV format. It has no explicit key. Kafka assigns a random key when a key is not provided by the producer.
>
> **[3:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=187)** The third message is an image. It contains the customer ID as the key. The content is just raw bytes. Note that all these messages are internally stored by Kafka as byte arrays. Hence, the content can take any form as long as the producers and consumers agree on the format. Messages are stored in topics. Let's explore topics in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Definitions:** is a  (4), is an  (2)
> **Env Vars:** json (1), csv (1)
> **Best Practices:** recommended (1), the key is (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Topics](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=0)** - [Narrator] Topics in Kafka hold and manage messages. Let's explore more on topics in this video. A topic in Kafka is an entity that holds messages. It's similar to a file that contains papers where the messages represent the papers. It's similar to a database table that contains records where the messages represent the records. Topics can be considered as a queue for similar messages. A topic itself does not impose any limitations on what the content of its messages should be. So technically, a topic can contain all kinds of messages with different formats, but in practice, they are used to hold similar messages. What does similar mean in this case? Usually, the structure of the messages are identical and have the same set of producers and consumers. Examples of topics include sales transactions, audit logs, video files, et cetera. Kafka supports multiple topics per Kafka instance so topics can be created based on specific use cases and multiple application domains can create topics in the same Kafka instance. Each topic supports multiple producers to publish data to the topic concurrently. Similarly, multiple consumers can consume data from the topic. Each topic has multiple partitions that physically split data across multiple files.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=95)** Here is an example of how topics exist in Kafka. In this case, we have one Kafka instance with two topics: orders and logs. The orders topic has three partitions: P1, P2, and P3. There are eight messages in the topic from M1 to M8. The messages are distributed across the three partitions. Each message will be stored in only one partition. Similarly, the logs topic has two partitions and six messages. We will discuss partitions in detail later in the course. In the next video, let's discuss Kafka brokers.

> [!info]- Semantic Content
>
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is an  (2)
> **Analogies:** similar to (2)
> **Speakers:** - [narrator] (1)

#### [Kafka brokers](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=0)** - [Instructor] A Kafka broker is the central brain behind everything that Kafka does. Let's discuss more about brokers in this video. A broker is nothing but a running Kafka instance. It is a physical process that runs on the base operating system and executes all Kafka functions. A Kafka process listens on a specific port. Usually this is 9092, but it is configurable. The Kafka broker receives messages from producers and stores them locally in logs. Consumers subscribe to specific topics within the Kafka broker. The broker keeps track of all the active consumers. It knows about the last message that was sent to the consumer, so it only sends new messages in the subscribed topics to that consumer. It also keeps a heartbeat with every consumer so when a consumer dies, it can track and reset. Kafka brokers manage the lifecycle of topics. They track and manage topic partitions. They also manage the corresponding partition logs. Multiple Kafka brokers can be clustered together to form a single Kafka cluster. Within a Kafka cluster, there is one Kafka broker instance that will act as the active controller for the cluster. In addition, each partition will have a corresponding Kafka broker as its leader. The leader then manages the specific partition. A Kafka broker also takes care
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=93)** of replicating topic partitions across multiple brokers, so even if one broker goes down the other brokers can take over the corresponding topic partitions. This provides fall tolerance for Kafka. In the next video, let's explore Kafka logs.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Logs in Kafka](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=0)** - [Narrator] Where does the data that is sent by producers, stored physically? It is in the Kafka logs. Kafka logs are the physical files in which data is stored before they are consumed by the consumers. Logs are managed by Kafka brokers. Each broker has an assigned log directory where it stores the log files. There are multiple log files created in Kafka. Each broker will have its own log directory. Under the directory, there are separate files for each topic and partition. These are rolling files, so, when a file gets filled up, it's rolled over and a new file is created to continue the logging process. So, each partition will have multiple log files in the log directory. Data in Kafka is only kept for a configured interval of time. The default is seven days. A separate thread in Kafka keeps pruning files that are over this period. Log files are an important consideration for managing a Kafka instance, since they influence the amount of physical space that needs to be provisioned. Lack of space would lead to the broker rejecting data from producers and a breakdown of [[Data Processing]] pipelines. All configuration for Kafka is in the server.properties file, under the config folder of the Kafka route directory. The log.dirs parameter is used to set the path of the log directory.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=94)** Now, let's explore more around producers and consumers in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Producers and consumers](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=0)** - [Instructor] A producer is any client that publishes data to Kafka. Some examples include [[Web Servers]] that push web click events, a log scrubber pushing in log messages, and a sensor pushing in telemetry data. To build a producer, a developer needs to use a Kafka client library within their code and publish data. Such client libraries are available for multiple programming languages. Please check the Kafka website for more details. We will discuss [[Java]] client libraries in this course. There can be multiple concurrent producers for each topic. These producers can be different physical processes or threats in the same process. It is the job of the producer to identify the key for the message. Typical keys would include customer IDs, product IDs, or transaction IDs. Please note that the keys influence partition selections. Ideally, distinct values for these keys should have equal distribution to ensure equal load across all partitions. The producers also need to serialize the message data to byte arrays. Anything can be serialized, including strings, [[JSON]], objects, or blobs. The only requirement is to make sure that the consumer can deserialize it to create the same data. There are synchronous and asynchronous options available for publishing to Kafka.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=93)** Asynchronous options don't wait for an acknowledgement from the broker before proceeding with the next message, and hence, it's faster. But it also results in complex tracking of acknowledgements and republishing. A consumer, on the other hand, is used to consume and use the messages from Kafka. Typical examples for consumers include a log filter, a realtime data aggregator, or an archiver. Consumers can consume a message anytime as long as the message is still stored in the log files and are not pruned over. So in real time, the producer and the consumer are running at the same time. And as each message is published, it is immediately consumed. In [[Batch Processing]], the producers can publish anytime, even in batches. The consumer process can start up at a much later time and consume all the pending records. The same client libraries used for producers will be used to consume the data by consumers also. It'll be a different set of function calls. There can be multiple concurrent consumers per topic and each consumer will get a complete set of messages for that topic. If scaling is needed beyond one consumer for a specific job, then consumers can be grouped into consumer groups and share the load. We will discuss consumer groups in detail later in the course. Consumers are responsible for deserializing the messages in byte array format,
>
> **[3:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=186)** and recreating the original objects sent by the producers. Consumers also can manage the offset for data that they would consume. They can consume from the start of the topic or from a specific offset. They also provide acknowledgement to the brokers once they have successfully consumed a message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1), [[Java]] (1), [[JSON]] (1), [[Batch Processing]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Using Kafka Command Line

[↑ Back to Table of Contents](#table-of-contents)

#### [Kafka client scripts](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=0)** - [Instructor] In this chapter, we will explore the command line options in Kafka for managing topics as well as publishing and subscribing. In this video, we will explore various client shell scripts that are available in kafka. To begin, we need to log into the kafka container using the docker exec command. We do so by calling docker exec-it kafka-broker/bin/bash. This takes us inside the docker container. Now, let's navigate to the root directory for kafka here. It's installed under slash opt/bitnami/kafka. Let's explore the contents here. The config directory contains configuration that can be modified to suit a specific setup. Any configuration changes would require a restart of kafka. Do note that these files are inside the container and restarting the container would reset the files to their original value. If you need to modify and use these files, use host volumes. The logs directory contains log files generated by kafka and are useful for troubleshooting. The bin directory contains a number of shell scripts for kafka management, publishing, and subscribing. Let's explore this directory in detail. The bin directory contains a number of shell scripts that can be used to interact with kafka. The kafka server start and kafka server stop scripts can be used to start and stop kafka.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=96)** We will explore other scripts later in the course. Now, we can start creating some topics in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3)
> **Cross-References:** later in (1), in the next (1)
> **Tools:** command line (1), bash (1)
> **UI Navigation:** navigate to (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Creating a topic](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=0)** - In this video, we will create two topics in Kafka. I will explore the topic, "Creation Command" first. It is available in the Chapter Three commands.text file. The script to use for creating topics is the Kafka topics.sh script. What are the parameters for the script? First, we need to provide a link to the Kafka broker. This is provided with the parameter bootstrap-server. Note that we are using the internal port 29.0.9.2 as we are accessing the broker from inside the docker cluster. Then comes the action, which in this case is create. We provide the name of the topic in the topic parameter. While this name can be any string, it is recommended to use a pattern of qualified names for better management. In this case, it is a tweets topic called Kafka.learning.tweets. We then specify two mandatory parameters, the number of partitions and the replication factor. We keep the partition size to one. We will discuss partitions later in the course. Replication is addressed in detail in the next Kafka course, [[Apache Kafka]] Essentials: Building Scalable Applications. For now, we keep replication to one since we only have one Kafka broker running. Let's now proceed to create the topic. We need to be in the bin directory for Kafka which we discussed in the earlier video.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=94)** Let's run the creation command now for the tweets topic. There is usually a warning to not use underscores and periods together. We can see that the topic has been successfully created. Let's proceed to create another topic called, "Kafka Learning Alerts". This is also successfully created now. Now we proceed to explore the topics in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (1)
> **Cross-References:** in the next (2), later in (1), we discussed (1)
> **CLI Commands:** docker (1), apache (1)
> **Warnings:** note that (1), warning (1)
> **File Paths:** topics.sh (1)
> **Ports:** port 29 (1)
> **Versions:** 29.0.9 (1)
> **Definitions:** is a  (1)

#### [Exploring topics](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=0)** - Having created topics in the previous video, let's list and explore these topics in this video. How do we get the list of topics already existing in a Kafka cluster? We will use the list action for that. This is similar to the create action in the Kafka topics command. We will provide the bootstrap server location as the parameter and then use the list command. If we need to get further details around these topics, we can use the describe command. Let's run these commands and see the results. Here is the list command. It only lists the names of the topics that are created in the system. Do note that we will also get to see some additional internal Kafka topics that could start with an underscore. Next, we can learn more about each given topic using the describe command. On executing the describe command, we see the results. Here you will see more details about each topic. Specifically, it provides the partition count and the replication factor. For each partition in the topic, it also shows the partition ID, which in this case is zero. Partitions are usually numbered zero to N. It then shows the broker ID for the leader of the partition. The broker ID is set for each Kafka instance in the server properties file under the config directory. We will explore more of these later in the course. Now let's start publishing some data for Kafka in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1), later in (1), in the next (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - having (1)

#### [Publishing messages to topics](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=0)** - [Instructor] Having created topics, let's now publish some data to them. In this video, I will demonstrate publishing messages to Kafka using the command line publisher. For this, we use the kafka-console-producer.sh shell script. In order to publish, we need to provide the Bootstrap server parameter, which can point to a list of Kafka brokers. We provide localhost:29092 as the value. As explained in the earlier setup video, we need to pay attention to the URL used. We are running this command from inside the container which is within the Docker network, so we need to use the internal host and port. As the host is in the same container, we can use localhost. The port should be the internal port, which is 29092. We need to specify the topic to which we want to publish data. There are other optional parameters available which you can explore by simply using the shell script without any parameters. Let's now publish data to this topic. First, let me just provide the shell script name, kafka-console-producer.sh. With this, we get to see the list of all the parameters supported by the shell script. Next, let's start the producer for kafka.learning.tweets. We get a prompt for us to provide any message. Let's type, "This is my first tweet". (keyboard keys clicking) On pressing Enter, this message is sent to Kafka.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=96)** We can add more messages and keep publishing them until we end the program with Control + C or Control + D. On pressing Control + D, the publishing ends. This is the quick way to test if the Kafka topic has been created successfully and it is working fine. Messages, once produced, will be stored in Kafka until they are pruned. They can be consumed at any time. In the next video, let's consume the data produced.

> [!info]- Semantic Content
>
> **File Paths:** kafka-console-producer.sh (2)
> **CLI Commands:** docker (1)
> **URLs:** [localhost:29092](https://localhost:29092) (1)
> **Ports:** :29092 (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Prerequisites:** setup (1)

#### [Using console consumer](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=0)** - [Instructor] How do I consume messages from Kafka? We can use the Kafka-console-consumer.sh shell script for that. The command takes the mandatory bootstrap server parameter. The same considerations we discussed in the earlier video apply here too. We need to provide a list of topics to consume data from. We have the option to either consume all the messages by using the from-beginning parameter or only consume newly created messages in the topic. Let's execute this now. For demo purposes, I have four [[Windows]] open. There are two producer windows on the left and two consumer windows on the right. We create separate shell sessions on the container using the same Docker exec command and then navigating to the Kafka bin directory. In both the producer shells, we run the Kafka producer for the given topic, Kafka learning tweets. In the first consumer shell, let's start the consumer and consume it from the beginning. We see all the message we have published in the earlier videos to the topic show up here. The command will continue to run and listen for any new messages published in this topic. On the second consumer shell, let's start the consumer and consume only new messages. We see that there are no messages published from history and it simply waits for new messages. Let's now go to the first producer and add a message. Publishing from producer one.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=97)** We see that this message immediately shows up in both the consumers. We then go to the second producer and add a new message. Published now from producer two. This message again shows up in both the consumers. This demonstrates how Kafka can receive messages from multiple producers, and send them to multiple consumers at the same time. This is a simple yet powerful demonstration of Kafka's capabilities. In the next video, we will explore the Kafka topic operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** go to (2)
> **File Paths:** kafka-console-consumer.sh (1)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Topics management](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=0)** - [Instructor] The kafka-topics.sh Shell script can also be used to modify and delete topics. Running just the kafka-topics.sh Shell script shows all the parameters that are available to be modified. Things like partition count can only be increased, and that needs to be planned ahead. To demonstrate, we will use this Shell script to delete the kafka.learnings.alert topic. We again need to provide the bootstrap server parameter and the topic name. The delete command takes care of deletion. Let's run the command now. The command returned successfully without errors. Running the list command after this command will show that this topic has been deleted. In the next video, we will explore some internals of Kafka.

> [!info]- Semantic Content
>
> **File Paths:** kafka-topics.sh (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Review Kafka setup](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=0)** - [Instructor] In this video, we will review the Kafka setup and see how things are organized inside Kafka. Let's first log into the Kafka broker container. Let's execute a ps -ef command to find the Kafka process. At the end of this long command line, you will see the configuration file that is actually used by this Kafka instance. Let's explore this configuration file. Most of the parameters that we set up as a part of the Docker [[Jetpack Compose|Compose]] file will show up here, like the process roles, node ID, and controller.quorum.voters. But we are interested in the log.dirs parameter. The log.dirs parameter points to the directory /bitnami/kafka/data. This is the directory in which all the messages that we publish to Kafka are stored. Let's go to this directory. There are a number of consumer offset directories that are created here. These are used to manage consumption of messages by various consumers. We will discuss consumer offsets in the next chapter. Then, for each partition for each topic, there is a data directory. For example, we have a data directory called kafka.learning.tweets-0 for the kafka.learning.tweets topic and its partition ID 0. Let's explore this directory further. We see the internal files in which data is stored.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=96)** It is stored in an internal format. The main file in which data is stored is the log file. Let's cat this file to see its contents. We see bits of data that we actually published in the topic, but in its own internal form. I hope this gives some overview on the internals of how Kafka works. In the next chapter, let's learn more about partitions and consumer groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** find (1), docker (1), node (1), cat (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** setup (1), set up (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 4. Kafka Partitions and Groups

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to partitions](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=0)** - [Instructor] In this chapter, we will deep dive into partitions and how they control the ingestion, storage, and consumption of messages. As discussed previously, each topic can contain multiple partitions. A topic can have 1-n partitions. The number of partitions are set up during topic creation. The maximum number of partitions per cluster and per topic varies based on the specific version of Kafka. Partitions allow Kafka to scale by parallelizing ingestion, storage, and consumption of messages. It provides horizontal [[Scalability]]. However, creating too many partitions may result in increased memory usage and file handles. Each partition has separate physical log files which, of course, will grow lower as they reach configured sizes. A given message in Kafka is stored in only one partition. Each partition is assigned a broker process known as the leader broker. In order to write to a specific partition, the message needs to be sent towards corresponding leader. The leader then takes care of updating its log file as well as replicating that partition to other copies. The leader will also send data to the subscribers of the partition. With multiple partitions for a topic, consumers can share workloads by partitions using consumer groups. Partitions can be replicated for fault tolerance purposes.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=95)** There are a few things to note about partitions. These significantly impact the performance and latency of the pipelines. Each published message gets stored in only one partition. If the partition is replicated, each replicated copy will also get one instance of the message. Message ordering is guaranteed only within a partition. So in the example provided, messages are pushed to Kafka in the order from M1 to M8. M1, M3, and M7 are guaranteed to be delivered to the consumer in the same sequence as they belong to a single partition. But, on the other hand, there is no guarantee of ordering between M1 and M2 as they belong to different partitions. It's possible for M2 to be delivered before M1. The partition for a message is determined by the message key. Kafka uses a hashing function to allocate a partition based on the message key. Messages with the same key will always end up in the same partition. It is important to choose keys that have an equal distribution of its values. Otherwise, some partitions may be overloaded while others would be used minimally. The number of partitions cannot be decreased after the topic is created. Hence, care should be taken to set the right size of partitions during creation time. Now, let's look at creating topics with multiple partitions
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=189)** and then publishing to these partitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating topics with partitions](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=0)** - [Instructor] Having looked into how partitions help Kafka scale, let's now create a topic with partitions. The commands for this chapter are available in the file: chapter-4-commands.txt under the Resources directory in the [[Java]] project. In order to create multiple partitions, we simply need to specify the number of partitions needed in the partitions parameter. In this case, we are creating a topic called kafka.learning.orders with a partition count of three. Let's execute this command in the Kafka container. To recollect, you would need to use the Docker exec command to log into the shell and navigate to the bin directory as shown in the previous chapters. The topic has been successfully created now. Let's explore this topic with the describe command. The describe command also takes in the topic name to only show details for a specific topic. The output now shows one line for each partition in the topic. There is a partition ID shown which is numbered 0 to 2. Each partition has a broker ID of its leader shown here. This leader is responsible for managing the partition, including receiving messages, storing them in local logs, and pushing them to subscribers. Given that we only have one broker in our setup, all partitions are assigned the same broker.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=94)** The controller in the Kafka cluster is responsible for assigning partitions to the brokers. In the next video, let's push some data with keys to this topic we have created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **File Paths:** chapter-4-commands.txt (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Publishing with keys](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=0)** - [Instructor] In this video, let's use the console producer to publish some messages with keys for the kafka.learning.orders topic. The command for publishing is the same as we discussed in chapter three except for the topic name. In order to publish data with keys, we use the colon operator to separate the key and the value. To specify this, we use two properties, parse.key=true tells the producer to read the key also. Key.separator is used to specify the separator character. Let's now execute the producer and add some data. For the orders we will use the order ID as the key and the product name and price as values. So, we provide the first record with 1001 as the key. Then, we use the colon to separate the key and the value. We then provide the values as a CSV string with the product name and value shown here. Double codes helps publish the entire CSV as one string. Let's publish a second record now. Kafka will distribute the messages to various partitions. There is no command line available to see which partition each message will end up. One way to see it is to explore the data directory of Kafka as we've seen in earlier videos. In the next video, let's explore consumer groups and how they consume partitions.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Consumer groups](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=0)** - [Instructor] Let's discuss consumer groups in Kafka in this video. What is a consumer group? A consumer group is a group of consumers that share a topic workload. A topic may be generating hundreds of messages in a short amount of time. It may not be possible for a single consumer process to keep up with processing these messages. For [[Scalability]], multiple consumer processes can be started and the messages can be distributed among them for load balancing. A consumer group is a logical group of consumers that Kafka uses for such load distribution. Each message will be sent to only one consumer within the consumer group. That consumer is then responsible for processing the message and acknowledging back to Kafka. Consumers split workload among themselves through partitions. Kafka keeps track of the active number of consumers for each given topic. It then distributes the topics evenly between these consumers. Kafka only considers the number of partitions for distribution, not the number of messages expected in each partition. It is expected that the number of partitions are equal to or higher than the number of consumers in the group. If there are more consumers than partitions, then there will be consumers with no work as the lowest granularity of work distribution is a partition.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=93)** We can create multiple consumer groups, each with a different set of consumers. Each group will then get a full copy of all the messages but each message will be sent to only one consumer within each consumer group. When new consumers come up or existing consumers go down, Kafka takes care of rebalancing the load by reassigning the partitions among live consumers. Kafka uses heartbeats with consumers to keep track of their health. Let's look at an example for consumer groups here. We have a topic called orders. It has three partitions, P1 to P3. There are eight messages numbered M1 to M8. There are two consumer groups created. The first consumer group is an analytics consumer group that has three consumers. The second consumer group is an audit consumer group that only has two consumers. For the analytics consumer group, as the number of partitions and consumers are equal, Kafka assigns one partition per consumer. For the audit consumer group, as the number of consumers are less than the number of partitions, Kafka assigns one partition to the first consumer and two partitions to the second consumer. But both consumer groups get a copy of all the messages. In the next video, let's explore how Kafka keeps track of what messages are consumed and if it needs to resend data to its consumers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **Definitions:** is a  (4), is an  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Consumer offset management](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=0)** - [Instructor] When Kafka pushes messages to consumers, it also needs to ensure reliable delivery. Kafka ensures, at least once, guaranteed delivery using consumer offsets. What is a consumer offset? It is a number to track message consumption by each consumer and partition. As each message is received by Kafka, it allocates a message ID to that message. Kafka then maintains this message ID offset on a consumer and partition basis to track its consumption. Kafka brokers keep track of both what is sent to the consumer and what is acknowledged by the consumer by using two offset values. The current offset value tracks the last message ID that was sent to the consumer. The committed offset value tracks the last message that is acknowledged by the consumer. As consumers receive a message, they have the option of acknowledging immediately or after making sure that all required processing is done. This helps consumers to manage transactions and not lose messages in case of failures. By default, Kafka consumers ought to acknowledge and receive it, but this can also be changed at the consumer end. When Kafka brokers do not receive acknowledgement within a set timeout, they will resend the message to the same consumer. This ensures at least once delivery of each message to the consumer group.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=93)** A message can be delivered multiple times if acknowledgement does not happen within a timeout, but each message will be delivered at least once. When a new consumer starts up, it has the option of requesting messages either from the start, only the latest, or from a given offset. This allows the consumers to process messages based on their use case requirements. Let's look at an example of offset management by Kafka. Let's say we have a partition being consumed by a consumer called Consumer 1. Consumer 1 is set to start with the latest message. So in step one here, Kafka will set the current and committed offset to 4, which is the latest message at the time Consumer 1 starter. In step two, a new message, message 1, comes into the Kafka partition, which is then immediately sent to Consumer 1. The current offset is incremented by 1 to a value of 5. The committed offset stays at 4. In step three, Consumer 1 acknowledges message 1. Committed offset is also incremented to 5. Step four, another message, message 2, comes into the partition and is sent to Consumer 1. Current offset increases to 6. In step five, Consumer 1 crashes. As a result, the broker's heartbeat with the consumer is broken. So, the broker resets the current offset back to 5, as it has not received an acknowledgement
>
> **[3:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=186)** for the new message. In step six, a rebalancing step happens and the partition gets reallocated to another consumer, namely Consumer 2, which is within the same consumer group. Consumer 2 will start receiving messages from where Consumer 1 left off. In step seven, Consumer 2 will receive message 2 that was not originally acknowledged by Consumer 1. So the current offset goes up to 6. In step eight, Consumer 2 acknowledges message 2. Committed offset is also updated to 6. This process ensures that there is no message that is left off and all the messages are delivered to the consumers at least once. In the next video, let's execute an example of consumer groups and consumer offsets.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Consuming partitioned data](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=0)** - [Instructor] In this video, let's consume the data published into the kafka.learning.orders topic using consumer groups and track offsets. We have opened four Shell [[Windows]], each of which is started by using the docker exec command into the Kafka container, and then navigating to the bin directory as shown in the previous chapters. In the first window on the top left, we start the publisher to publish to the orders topic. In the window on the top right, we start the first consumer. Here, to specify a consumer group, we use the group parameter and specify a group string called test-consumer-group. We specify the print key property to print the key also. The key.separator specifies the character used to separate the key and value while printing the data to the console. We will use the equal-to character for this. We also subscribe from the beginning. Let's run this consumer. We immediately see all the messages we have published so far to the topic show up here. Both the key and the values are printed. Let's explore the consumer group status in the bottom left window. We use the kafka-consumer-groups.sh script to check for status. We need to provide the bootstrap server and the request to describe commands for all groups. Let's execute this command now. The output of the command shows how the consumers are set up. The first column group shows the group name
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=94)** we have set up for the consumer. The next is the topic name. The third is the partition ID. We have one line for each partition. The current-offset shows the latest offset of the message sent to the consumer. It is already updated for the messages sent to the first consumer. The log-end-offset is the offset of the last message received in the partition. Lag is the difference between the log-end-offset and the current-offset. It is a key metric to track if messages are being consumed immediately by consumers or if there is a delay. Consumer-ID is an auto-created ID for the consumer. This shows the consumer who is currently consuming the specific partition. Currently, we only see one consumer that is consuming all the partitions. Now, let us start a second consumer in the bottom right window with the same group name. When a second consumer starts, Kafka immediately rebalances and reallocates partitions. We do not see any messages in this window, even though we have requested it from the beginning. This is because all the messages are already sent to the first consumer in the consumer group. Now, let's rerun the consumer group command again in the bottom left window. Now, we see that the consumer ID for partition 0 and 1 have been changed to the second consumer. Now let's start producing more data in the producer and see how data gets distributed between the consumers. This new record now goes to the second consumer
>
> **[3:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=191)** and not the first consumer. Let's publish once again. The fourth record also goes to the second consumer. Do note that the second consumer is consuming two partitions so it'll get more messages than the first consumer. We have this new record with ID 1005 going to the first consumer. As we can see, as the producer keeps generating new data, it gets distributed between the consumers based on the partitions. Let's now go back to the consumer group status at the bottom left window and re-execute the command. We see that the offsets for both current-offset and log-end-offset have been updated as needed based on the message consumption and acknowledgement. This demonstrates how Kafka manages consumers, consumer groups, and offsets. In the next chapter, let's build producers and consumers in [[Java]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Java]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **File Paths:** kafka-consumer-groups.sh (1)
> **CLI Commands:** docker (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Kafka Java Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [Kafka client libraries](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=0)** - [Narrator] While building real-world [[Data Pipelines]], command line interfaces are hardly used to publish and consume data with Kafka. Kafka producers and consumers are returned in various programming languages. Fortunately, Kafka has client libraries for a long list of programming languages. This website provides the current list of clients. From here, you can access documentation for various clients as well as download these libraries. In this course, we will build sample Kafka clients using [[Java]]. For a Maven project, it is easy to add a Kafka client. in your POM.xml, simply include the dependency for Kafka and to download and set up Kafka in your project. Now let's build a simple producer in Kafka with the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Pipelines]] (1), [[Java]] (1)
> **File Paths:** pom.xml (1)
> **Env Vars:** pom (1)
> **Cross-References:** next video (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Creating a producer in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=0)** - [Instructor] Let's explore the [[Java]] code for a sample Kafka producer in this video. The code is available in the package com.learning.kafkagettingstarted.chapter5 The class file is KafkaSimpleProducer.java. Let's examine the code now. First, we need to create a properties object to specify the Kafka connection properties. There are three mandatory parameters required. We use the BOOTSTRAP_SERVERS property to specify a list of Kafka brokers. Even if we specify one broker, the kafka client will discover other brokers in the cluster. It is, however, recommended to specify at least two so even if the first broker is out of service the second one can be used for discovery. Since we are accessing kafka from the host system we need to use the external port number, which is 9092. Then we need to specify the key and value serializer classes. These classes are invoked by the kafka client to serialize the message and value to bytes. In this case, we specify a string serializer as both these values would be strings in our case. Custom serializers can be built if needed. We create a kafka producer object using these properties. Now, we are going to publish 10 random messages to kafka starting with a random key value.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=93)** We do an iteration of 10. Then we create a producer record in kafka. The types belong to the types of the keys and value. Both of which are strings. As parameters, we specify the topic name, key, and value. We will be publishing to the kafka.learning.orders topic we created earlier in the codes. We will print the message created. Then we will call the send method on the kafka producer to push the record to Kafka. We continue to publish after sleeping for two seconds. In the next video, let's run this code and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** kafkasimpleproducer.java (1)
> **Env Vars:** bootstrap_servers (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Publishing messages in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=0)** - [Instructor] Let's run the producer we created in the previous video and review the results. We see that the ProducerRecord object is being printed here as the publishing goes on. Ignore the values for the partition and timestamp. Those will be populated when you create advanced producers by manually setting these values. Now, let's look at the console consumer for the topic. We see the keys and values printed here correctly. Note that multiple producers written in different programming languages can publish to the same topic simultaneously. For Kafka, everything is a sequence of bytes. In the next video, we will build a consumer in [[Java]] to consume this data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Creating a consumer in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=0)** - [Instructor] In this video, we will build a consumer in [[Java]] to consume messages from the Kafka.learning.orders topic and print them to the console. Setting up a consumer is similar to setting up a producer. We first provide the list of Kafka brokers using the bootstrap-server's parameter. Then we need to provide deserializers for the messages. Messages received from Kafka are byte arrays and the Kafka client will call the deserializer to convert the key and value to equivalent Java objects. We need to specify the consumer group name in the group.id column. We use the Kafka Java consumer as the name. Note that this is a different consumer group from the name that was used for the earlier command line demonstrations. We use the auto reset config parameter to specify whether we want all the messages in the topic or only new messages. In this case, we specify earliest so we are requesting all the old messages in the topic also. We then create a Kafka consumer using these properties. We use the subscribe method on the consumer to subscribe to our list of topics. We specify the topic named Kafka.learning.orders here. Kafka consumers work by polling the Kafka brokers for any new data. To set up polling, we will use a continuous loop. Inside this, we will poll Kafka for new messages
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=93)** with a hundred millisecond timeout. If there are any new messages that are delivered during that period, it'll be populated in the messages object. We then iterate over this list and print the messages that are returned. In real world use cases, we would then process the message as required. It is usually recommended to use a separate thread for actual processing, so we do not block the consumer thread. In this case, the client automatically acknowledges the receipt of the message once it is received. If we need to wait until the message is successfully processed, there are additional setup parameters and messages available. In the next video, we will execute this code and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)

#### [Consuming messages in Java](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=0)** - [Instructor] Let's execute the Kafka Consumer we built in the previous video and review the results. Let's run the code now. We immediately see that all the previously published messages to this topic are returned to the console. For each message, we see the topic name, the partition this message belongs to, and the offset of the message. We see the timestamp of the message as create time. The published key and value are also shown. We also see that the program continues to run and wait for more data. Do note that this is a different consumer group than what we used for the command line so the offsets will start from scratch. Let's now stop and run the program again. Even though we specified it to consume from the earliest offset, it does not print any of the old data. This is because, based on the previous run. Kafka has incremented the committed offset for this consumer group and will only provide new messages going forward. To force it to publish from the beginning, we need to request a specific hardcoded offset of zero. Please check out the other consumer options available under consumer config for this. Let's now run the producer also by the side. Now, as the producer is publishing new data, they are immediately received and printed by the consumer. There can be multiple threats inside the same program or multiple programs
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=94)** that can consume from the same consumer group and share the workload. This completes our discussions around Kafka and its basic capabilities. In the next chapter, you will test your learning by implementing a use case.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 6. Use Case Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Kafka basics use case: Problem definition](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=0)** - [Instructor] In this chapter, you will implement a simple use case in Kafka to exercise the learnings in the course. Beyond this use case, I also recommend that you try out some of your own use cases. We have three exercises to do in this course. First, create a topic called kafka.usecase.students. Assume that this topic would need to publish student scores. It'll have two partitions and a replication factor of 1. Second, use the console producer to publish messages to the this topic, publish both key and value. Use a console consumer to consume messages from this topic. Finally, build a producer and a consumer in [[Java]] for the same topic. We will execute the code and then review the results. Best of luck for the use case. Once you have completed that use case, you can check the other videos in the chapter for the solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Speakers:** - [instructor] (1)

#### [Setting up topics](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=0)** - [Instructor] In this video, let's create the topic for the use case using the Kafka command line. The commands for this chapter, are available under the resources directory in chapter six commands.text. The creation command uses the create argument the topic name as kafka.usecase.students and the number of partitions as two. Let's run the command now. The topic is now created. Let's look at this topic. Using the descript command, we see that the topic is created successfully with two partitions.

> [!info]- Semantic Content
>
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Producing and consuming data with scripts](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=0)** - [Instructor] Continuing on the topic creation from the previous video, we will now publish messages and consume them using command-line scripts for this use case. To publish data, we use the Kafka console producer. We specify the topic name as kafka.usecase.students. Since we are publishing with the key, we need to specify the parse.key parameter and the key.separator parameter. Let's run this command now and publish some data. We will use the student ID as the key, and the student score as the value. We have published three records to the topic now. We can stop the producer. Next, to consume messages from the topic, we use the Kafka console consumer. Again, we need to specify the print.key property and the key.separator property. We can also specify a group name to enable Kafka to track consumption of data. Let's run the command now. We can see that the data published earlier with the console producer is printed to the console with the console consumer.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Producing and consuming data with Java](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=0)** - [Instructor] In this video, let's look at the final exercise in the course, producing and consuming messages from Kafka with a [[Java]] client. The code for this exercise is available in the package com.learning.kafkagettingstarted.chapter6. It has two files, KafkaUseCaseProducer and KafkaUseCaseConsumer. The code is simple and resembles the producer and consumer we built earlier in the course. Let's first start the consumer. We see the messages that we created with the console producer showing up here. Next, let's run the producer. As the producer creates more data, we can see that the consumer is fetching and printing them. The base template for producers and consumers are the same. When you build production-grade code, you would need to change your implementation based on a few things. On the producer side, currently, this code blocks until the producer actually publishes to Kafka so this may not scale well. You may want to explore asynchronous publishing capabilities. On the consumer side, you may want to launch processing on a separate thread so the consumer is not blocked. You may also want to manually acknowledge received after the message has been successfully processed.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=94)** We will explore these advanced use cases in our next Kafka course, [[Apache Kafka]] Essentials: Building Scalable Applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Apache Kafka]] (1)
> **CLI Commands:** apache (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Extending your Kafka knowledge](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=0)** - [Kumaran] Now that you have learned about the basics of [[Apache Kafka]], you can take your learning even further. First, you can learn more about building scalable Kafka applications through the next course, Apache Kafka Essentials: Building Scalable Applications. Second, you can learn more about using Kafka for building stream processing applications with Apache Kafka, Apache Flink, or Kafka Streams. Finally, you can implement Kafka in your organization for your [[Big Data]] processing use cases. Data always intrigues me. I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge from it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (3), [[Big Data]] (1)
> **CLI Commands:** apache (4), find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Apache Kafka

## Path Context

### In [[Explore a Career in Data Engineering]]
← [[PySpark Essential Training- Introduction to Building Data Pipelines]] | **6 of 7** | [[Transition from Data Science to Data Engineering]] →

## Appears In

- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Tuning Kafka]] — Apache Kafka
- [[Troubleshooting and Debugging Kafka]] — Apache Kafka
- [[Apache Kafka Essential Training Building Scalable Applications]] — Apache Kafka

---

[↑ Back to top](#)