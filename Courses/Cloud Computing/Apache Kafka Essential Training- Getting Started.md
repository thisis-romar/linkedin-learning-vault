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
  - Explore a Career in Data Engineering
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/apache-kafka
status: not-started
created: 2026-04-20
---

![Apache Kafka Essential Training: Getting Started](https://media.licdn.com/dms/image/v2/D560DAQFHx_pVYywSXA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686957444139?e=2147483647&amp;v=beta&amp;t=NhYgdf3Y_2sWePm6WCOVar3_YDwr_KsBjGyMKJZ2k9c)

# Apache Kafka Essential Training: Getting Started

> One of the key components of a big data processing pipeline is a scalable and distributed message queue. Message queues enable real-time streaming capabilities with multiple producers and consumers of data. This enables real-time applications that can analyze data and produce insights in a scalable fashion. Apache Kafka provides these capabilities. As the de facto standard for open-source messagin

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044) | 1h 15m | Intermediate | 86K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Apache Kafka

## Table of Contents

### Introduction

#### Getting started with Apache Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=0)** - [Instructor] Apache Kafka is the leading open-source technology for message queuing and distribution with widespread adoption.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=9)** My name is Kumaran Ponnambalam.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=11)** In this course, I will introduce Apache Kafka and show you how to build data pipelines with it.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=18)** We will start off with various concepts, benefits, and use cases of Apache Kafka.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=24)** Then, we will use command-line tools to publish and consume data.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=29)** We will then discuss partitioning with Kafka.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=32)** Finally, we will build Apache Kafka clients using Java.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=36)** To get the most out of this course, you should be familiar with big data concepts, Java programming, and Docker.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/getting-started-with-apache-kafka?u=76281980&t=45)** Let's now start learning about Apache Kafka.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (5), docker (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Kafka

#### Message queues
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=0)** - [Narrator] Before we dive into Apache Kafka, it is important to understand the publish/subscribe pattern and the benefits it provides.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=10)** Let's review publish/subscribe with message queues in this video.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=15)** When we build distributed services, we have multiple running process instances that communicate with each other over a network to exchange messages.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=26)** Let's start with a simple two-process network where a sender process communicates with the receiver process to exchange data.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=35)** In this case, the sender needs to know the address of the receiver.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=39)** In addition, both the sender and the receiver need to agree upon a common data protocol and format.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=47)** This creates a strong static binding between these two processes.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=52)** Now, suppose we have three receivers each responsible for a different type of processing based on the data received from the sender.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=62)** In this case, the sender needs to know about all the three receivers.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=66)** Addition of new receivers requires changes on the sender side to configure the new receiver.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=73)** Again, this creates a strong coupling between the senders and the receivers.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=79)** What happens when there are multiple senders and multiple receivers exchanging the same type of data between them?
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=87)** The management becomes a lot more cumbersome here where each sender should know about each receiver.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=94)** Add fault tolerance into the picture, and it'll get more complex.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=99)** A clean and scalable solution here is to use a message queue.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=103)** Each sender needs to only know about the message queue and simply publish the messages to the queue.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=111)** A receiver becomes a subscriber and subscribes to the message queue.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=115)** When a new message arrives in the queue, the subscriber is notified who then proceeds to pull the message and use it.
>
> **[2:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=123)** In this case, each of the publishers and subscribers only need to know about the message queue.
>
> **[2:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=130)** They are oblivious to other publishers or subscribers using the same queue.
>
> **[2:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=135)** This is the publish/subscribe pattern, also known as pub/sub.
>
> **[2:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=140)** This pattern has many advantages.
>
> **[2:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=143)** To begin with, the publishers and the subscribers are decoupled from each other.
>
> **[2:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=148)** This results in easy management of the setup where publishers and subscribers can be added and removed without any changes on others in the network.
>
> **[2:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=159)** It then allows the publishers and subscribers to scale easily, provided the message queue can handle the load.
>
> **[2:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=167)** Message queues also provide back-pressure handling.
>
> **[2:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=171)** If the publishers generate data in spikes, the message queues act as a buffer zone to cache data until the subscribers catch up and process them.
>
> **[3:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=181)** Message queues can provide reliability through persisting queue data and tracking consumption of data.
>
> **[3:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=188)** Apache Kafka is such a technology that provides these advantages.
>
> **[3:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues?u=76281980&t=193)** Let's learn about it in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (3), static (1), pub (1)
> **CLI Commands:** apache (2)
> **Prerequisites:** configure (1), setup (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### What is Kafka?
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=0)** - [Instructor] Having reviewed the benefits of the publish-subscribe pattern in message queues, let's dive into the most popular technology in that domain, namely Apache Kafka.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=12)** What is Apache Kafka?
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=14)** Kafka is an events streaming platform.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=17)** Events, or messages, represent the actual data that is exchanged through Kafka.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=23)** The terms events and messages are used interchangeably in Kafka's context.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=29)** It is a critical piece of the big data puzzle and plays an integral part in many big data pipelines.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=36)** Kafka is open source and can be downloaded and deployed free of cost.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=42)** There are also commercial options that provide support and serverless capabilities.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=48)** It is arguably the most popular messaging platform in the world.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=53)** In Kafka's world, there are data publishers called producers which push messages into Kafka.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=60)** And there are subscribers called consumers which listen and receive the messages.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=65)** Producers and consumers are standard terms in the Kafka world to represent publishers and subscribers.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=74)** What capabilities does Kafka provide for data exchange?
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=78)** It collects messages from multiple producers concurrently.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=83)** It provides persistent storage of the messages received.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=87)** This provides fault-tolerance capabilities.
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=90)** It transports data across from the producers to the consumers.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=95)** With mirroring capabilities, it can also transport across networks.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=99)** It distributes data to multiple concurrent consumers for downstream processing.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=105)** Finally, it provides tracking of message consumption by each consumer.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=111)** This ensures at least one's delivery of the messages, even if the consumers go down and come back again.
>
> **[1:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka?u=76281980&t=118)** We will discuss more details about these features and see them in action throughout the course.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Benefits of Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=0)** - [Instructor] What are some of the key benefits of Apache Kafka?
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=5)** Kafka provides high throughput and can handle large quantities of data.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=10)** It supports multiple concurrent producers that can push data and multiple subscribers for the same data.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=17)** It can provide such high throughput with low latency of a few milliseconds.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=23)** This enables a number of real-time use cases where the latency is not noticeable end to end.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=30)** Kafka provides excellent fault tolerance against failures, either within Kafka or with consumers.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=37)** This ensures that messages are reliably stored and distributed in spite of issues with individual processes.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=45)** Kafka decouples producers and consumers; they do not need to know about each other.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=51)** This enables ease of configuration and management.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=55)** It also makes software development a lot simpler, as the developer of the producer or consumer program only needs to deal with Kafka and does not have to worry about other producers or consumers of the same data.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=70)** One benefit of decoupling and storage capabilities is back-pressure handling.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=75)** Even if the producers produce data in spikes, the consumers can catch up at their own pace, as Kafka provides the buffer in the middle, the whole data, until it is consumed.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=87)** Kafka provides horizontal scalability within its architecture, as well as for producers and consumers.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=95)** The system can scale with addition of nodes without significant choke points.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=100)** This is essential for big data processing.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=103)** Kafka's low latency enables stream processing, while its store and forward capability enables batch applications.
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=112)** The consumers need not have to consume messages immediately as Kafka acts as a buffer.
>
> **[1:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/benefits-of-kafka?u=76281980&t=118)** Now that we have looked at Kafka's benefits, let's review the popular use cases for Kafka in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Kafka use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=0)** - [Narrator] What are some of the popular use cases for Apache Kafka?
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=5)** Kafka enables a wide variety of use cases for both batch processing and real-time streaming.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=12)** To begin with, it can provide asynchronous messaging between services.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=17)** Rather than use REST or RPC, a client service can send requests through Kafka and receive responses through Kafka.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=26)** It provides better reliability and manages back pressure on the server side.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=32)** It has low latency, enough for even browser-based real-time applications.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=37)** It enables real-time stream processing.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=40)** As messages are received in Kafka, consumers can consume them in real time, process them, and trigger real-time actions.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=49)** Kafka queues can be used to send log messages and alerts.
>
> **[0:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=54)** One consumer can archive these messages in a persistent store.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=58)** Another can look for key exceptions in real time and trigger alerts.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=64)** Kafka enables the event sourcing pattern where the state of an entity can be determined using the events generated about state changes for that entity.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=75)** This is a popular pattern for big data.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=78)** Finally, Kafka enables real-time analytics.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=81)** An Apache Spark or Apache Flink consumer can listen to messages in real time and generate windowed aggregations, analyze trends, and generate triggers, metrics, and actions.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=94)** This can be used to update real-time dashboards.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-use-cases?u=76281980&t=98)** Having discussed the benefits and use cases of Kafka, let's now install the required software and get set up for the rest of the course.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3)
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** rest (1), rpc (1)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Setting up the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, I will help you set up the exercise files for this course.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=5)** In my case, I have downloaded the files into my Documents' ExerciseFiles directory.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=11)** Please download in a similar location in your setup.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=14)** There are two exercise files here: The Java project that is bundled into the kafka-getting-started.zip file and the Docker-compiled YAML file called kafka-single-node.yml.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=26)** Let's first start to set up the Java project kafka-getting-started.zip.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=31)** Unzip the file kafka-getting-started.zip.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=36)** This will create the folder KafkaGettingStarted with the project contents inside it.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=42)** Open IntelliJ IDEA.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=44)** Select Open and choose the route directory where we downloaded and extracted the files.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=50)** This is the KafkaGettingStarted folder.
>
> **[0:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=54)** Click Open.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=55)** Please make sure to select the right SDK in the Project Structure option.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=63)** This project is built with Java version 19, so choose an SDK version that is 19 or above.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=69)** Click OK.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=71)** Make sure that the project compiles without any errors.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=74)** IntelliJ IDEA will automatically proceed to compile the project.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=79)** It'll download all the dependencies it needs if it is not already available in your local Maven repository.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=86)** This project contains both Java classes and instructions to execute various commands.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=92)** The command line rated steps are available under the resources directory, please explore the same.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=98)** We will use these as we progress through the course.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-the-exercise-files?u=76281980&t=102)** Now let's proceed to set up Kafka for our exercises in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (1), node (1), unzip (1)
> **Env Vars:** idea (2), sdk (2), yaml (1)
> **Prerequisites:** set up (3), setup (1)
> **Code Keywords:** let (2), case, (1)
> **Tools:** intellij (2), command line (1)
> **Exercise Files:** exercise files (2), zip file (1)
> **File Paths:** kafka-single-node.yml (1)
> **Versions:** version 19 (1)

#### Setting up Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=0)** - [Instructor] The instructions for setting up Kafka are available in the file: resources/chapter-1-settingup-kafka.txt inside the Kafka Getting Started project.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=12)** Please take a moment to review the steps.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=15)** We are going to set up a Kafka broker in Docker.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=18)** If you're using either macOS or Windows, please install Docker Desktop from the Docker website.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=25)** We will be using the KRaft version of Kafka.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=29)** This requires a single Kafka container.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=32)** The Docker Compose configuration for the same is available in the kafka-single-node.yml file.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=40)** Let's explore this .yml file now.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=43)** We have the Kafka service, which is from Bitnami.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=46)** We will be using Kafka version 3.4.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=50)** All code and commands in this course are tested with Kafka version 3.4.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=55)** You can try other versions, but please note that the behavior may not be the same based on future changes in Kafka.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=63)** We will be exposing two ports in Kafka.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=66)** Please pay attention to the difference since this is important and can cause confusion.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=72)** One port, 29092, will be used for other Docker containers to communicate with this container.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=79)** This port should only be used when the client is another Docker container.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=85)** A second port, 9092, will be used when accessing Kafka from the host system.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=92)** Let's walk through the Kafka configuration now.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=95)** We are enabling KRaft, which is the newer configuration management option in Kafka using the parameter: KAFKA_ENABLE_KRAFT=yes.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=105)** We will not be using ZooKeeper whose support is being phased out in Kafka.
>
> **[1:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=110)** We set to allow plain text listeners in this installation.
>
> **[1:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=114)** This is recommended only for development setup.
>
> **[1:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=117)** The NODE_ID for this broker is set to 1.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=121)** This should be unique within the cluster.
>
> **[2:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=123)** Each Kafka node can perform two roles, namely broker and controller.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=128)** Being a single node system, we will choose both.
>
> **[2:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=131)** The CONTROLLER_LISTENER_NAME is set as CONTROLLER.
>
> **[2:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=135)** It'll be referred to in other configuration parameters.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=138)** Similarly, the INTER_BROKER_LISTENER_NAME is set as CLIENT.
>
> **[2:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=143)** Listener configuration lists the ports on which Kafka brokers will listen.
>
> **[2:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=148)** The client listener shows the port on which this broker listens for internal communications within the Docker environment.
>
> **[2:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=156)** The external listener listens for communications outside the Docker environment.
>
> **[2:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=161)** The controller listens on port 9093.
>
> **[2:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=164)** The security protocol is set as plain text for all the listeners.
>
> **[2:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=169)** This is recommended only for learning and development environments.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=173)** The advertised listeners are those that allow clients to connect Kafka.
>
> **[2:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=178)** We only expose the client and external but not the controller.
>
> **[3:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=183)** The CONTROLLER_QUORUM_VOTERS identifies all the brokers that perform the role of a controller in a cluster.
>
> **[3:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=190)** As the cluster has only one node that behaves as a controller, we list its ID, IP address, and port.
>
> **[3:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=199)** Finally, the port 9092 is exposed outside the Docker environment for external clients to connect.
>
> **[3:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=207)** Let's start the container now.
>
> **[3:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=209)** Open the terminal window.
>
> **[3:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=211)** If you are on windows, please use the PowerShell window.
>
> **[3:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=214)** First, navigate to the directory where kafka-single-node.yml file exists.
>
> **[3:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=220)** Now run the docker-compose command.
>
> **[3:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=223)** The command would be: docker-compose -f kafka-single-node.yml up -d.
>
> **[3:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=234)** This will download the images if they are not already on your local Docker and then proceed to start the containers.
>
> **[4:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=241)** Depending on the download process, it may take some time to start up.
>
> **[4:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=245)** Then check if the container is up and running with the command: docker ps.
>
> **[4:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=250)** We can see that Kafka is up and running.
>
> **[4:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=254)** If you need to shut down, you can bring the containers down using the command: docker compose -f kafka-single-node.yml down.
>
> **[4:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=263)** Please note that when the container is removed, data in the Kafka logs are also lost.
>
> **[4:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=269)** For now, I am leaving them running.
>
> **[4:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-kafka?u=76281980&t=272)** Let's now deep dive into Kafka concepts in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14), node (7)
> **Env Vars:** kafka_enable_kraft (1), node_id (1), controller_listener_name (1), controller (1), inter_broker_listener_name (1)
> **Code Keywords:** let (4), this . (1), finally, (1)
> **File Paths:** kafka-single-node.yml (4), resources/chapter-1-settingup-kafka.txt (1)
> **Prerequisites:** getting started (1), set up (1), install (1), setup (1)
> **Tools:** docker desktop (1), terminal (1), powershell (1)
> **Ports:** port 9093 (1), port 9092 (1)
> **Versions:** version 3 (2)


### 2. Basic Concepts

#### Messages
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=0)** - [Instructor] In this chapter, we will explore a number of basic concepts and entities that make up Kafka's architecture.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=8)** We start off with a Kafka message.
>
> **[0:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=11)** A Kafka message is the unit of data that is collected, stored, and distributed by Kafka.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=18)** Let's explore more about messages in this video.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=21)** A Kafka message is also called an event.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=25)** A message is a record of a real world event at a point in time, but that definition does not constrain what a message is.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=34)** It can be any piece of data.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=36)** A message is equivalent to a row or a record in a database.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=41)** It can have attributes and values like a map.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=44)** It can also be a blob that contains an image or an audio snippet.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=50)** Kafka treats all messages as a byte array.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=53)** It does not try to associate any semantics on the content of the message.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=58)** That is the job of the producer and the consumer.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=61)** Producers and consumers need to agree upon the content and format of the message and be able to serialize and deserialize them.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=71)** Kafka merely takes in byte arrays and distributes them.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=75)** Size limits exist in Kafka on the maximum size of the message.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=80)** It is configurable with the parameter max.message.bytes and the default size is 1MB.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=87)** It's not recommended to increase this value as it leads to inefficient message processing.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=93)** While producing and consuming messages, the producers and consumers can batch requests for efficiency.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=102)** What are some of the key contents of a message?
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=105)** Kafka does have some predefined attributes.
>
> **[1:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=108)** Messages in Kafka have a key.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=111)** The key is defined by the producer of the message.
>
> **[1:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=114)** Keys are not mandatory, and they also need not be unique.
>
> **[1:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=118)** Keys are used for partitioning data.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=121)** We will discuss partitioning further in the course.
>
> **[2:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=124)** The value attribute of the message contains the actual message.
>
> **[2:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=129)** It is a byte array, and the semantics of the value is user defined.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=134)** Kafka does not infer anything from the message contents.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=138)** Another key attribute to be noted is the timestamp.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=141)** Every message is automatically timestamped by Kafka.
>
> **[2:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=145)** Kafka supports two types of automatic timestamping.
>
> **[2:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=149)** Event time is when the producer creates the timestamp.
>
> **[2:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=152)** Ingestion time is when the Kafka broker timestamps it when it stores the record.
>
> **[2:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=158)** This option is configurable.
>
> **[2:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=160)** Now let's look at some examples for the messages.
>
> **[2:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=164)** The first message is a map with attribute names and values.
>
> **[2:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=168)** In this case, it is an employee record in JSON.
>
> **[2:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=172)** The message key is set to the employee ID.
>
> **[2:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=175)** The second message is a web server log stored in CSV format.
>
> **[3:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=180)** It has no explicit key.
>
> **[3:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=182)** Kafka assigns a random key when a key is not provided by the producer.
>
> **[3:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=187)** The third message is an image.
>
> **[3:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=189)** It contains the customer ID as the key.
>
> **[3:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=192)** The content is just raw bytes.
>
> **[3:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=195)** Note that all these messages are internally stored by Kafka as byte arrays.
>
> **[3:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=201)** Hence, the content can take any form as long as the producers and consumers agree on the format.
>
> **[3:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=207)** Messages are stored in topics.
>
> **[3:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages?u=76281980&t=210)** Let's explore topics in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2)
> **Code Keywords:** let (3), case, (1)
> **Env Vars:** json (1), csv (1)
> **Best Practices:** recommended (1), the key is (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Topics
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=0)** - [Narrator] Topics in Kafka hold and manage messages.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=4)** Let's explore more on topics in this video.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=8)** A topic in Kafka is an entity that holds messages.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=12)** It's similar to a file that contains papers where the messages represent the papers.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=19)** It's similar to a database table that contains records where the messages represent the records.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=25)** Topics can be considered as a queue for similar messages.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=30)** A topic itself does not impose any limitations on what the content of its messages should be.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=36)** So technically, a topic can contain all kinds of messages with different formats, but in practice, they are used to hold similar messages.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=47)** What does similar mean in this case?
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=50)** Usually, the structure of the messages are identical and have the same set of producers and consumers.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=57)** Examples of topics include sales transactions, audit logs, video files, et cetera.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=64)** Kafka supports multiple topics per Kafka instance so topics can be created based on specific use cases and multiple application domains can create topics in the same Kafka instance.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=77)** Each topic supports multiple producers to publish data to the topic concurrently.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=83)** Similarly, multiple consumers can consume data from the topic.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=88)** Each topic has multiple partitions that physically split data across multiple files.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=95)** Here is an example of how topics exist in Kafka.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=99)** In this case, we have one Kafka instance with two topics: orders and logs.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=105)** The orders topic has three partitions: P1, P2, and P3.
>
> **[1:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=110)** There are eight messages in the topic from M1 to M8.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=115)** The messages are distributed across the three partitions.
>
> **[1:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=119)** Each message will be stored in only one partition.
>
> **[2:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=123)** Similarly, the logs topic has two partitions and six messages.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=128)** We will discuss partitions in detail later in the course.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics?u=76281980&t=132)** In the next video, let's discuss Kafka brokers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is an  (2)
> **Analogies:** similar to (2)
> **Speakers:** - [narrator] (1)

#### Kafka brokers
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=0)** - [Instructor] A Kafka broker is the central brain behind everything that Kafka does.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=6)** Let's discuss more about brokers in this video.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=9)** A broker is nothing but a running Kafka instance.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=13)** It is a physical process that runs on the base operating system and executes all Kafka functions.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=20)** A Kafka process listens on a specific port.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=24)** Usually this is 9092, but it is configurable.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=28)** The Kafka broker receives messages from producers and stores them locally in logs.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=34)** Consumers subscribe to specific topics within the Kafka broker.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=39)** The broker keeps track of all the active consumers.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=42)** It knows about the last message that was sent to the consumer, so it only sends new messages in the subscribed topics to that consumer.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=52)** It also keeps a heartbeat with every consumer so when a consumer dies, it can track and reset.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=59)** Kafka brokers manage the lifecycle of topics.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=62)** They track and manage topic partitions.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=65)** They also manage the corresponding partition logs.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=69)** Multiple Kafka brokers can be clustered together to form a single Kafka cluster.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=74)** Within a Kafka cluster, there is one Kafka broker instance that will act as the active controller for the cluster.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=82)** In addition, each partition will have a corresponding Kafka broker as its leader.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=87)** The leader then manages the specific partition.
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=90)** A Kafka broker also takes care of replicating topic partitions across multiple brokers, so even if one broker goes down the other brokers can take over the corresponding topic partitions.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=104)** This provides fall tolerance for Kafka.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers?u=76281980&t=107)** In the next video, let's explore Kafka logs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Logs in Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=0)** - [Narrator] Where does the data that is sent by producers, stored physically?
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=5)** It is in the Kafka logs.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=8)** Kafka logs are the physical files in which data is stored before they are consumed by the consumers.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=15)** Logs are managed by Kafka brokers.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=18)** Each broker has an assigned log directory where it stores the log files.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=23)** There are multiple log files created in Kafka.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=26)** Each broker will have its own log directory.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=30)** Under the directory, there are separate files for each topic and partition.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=35)** These are rolling files, so, when a file gets filled up, it's rolled over and a new file is created to continue the logging process.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=43)** So, each partition will have multiple log files in the log directory.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=48)** Data in Kafka is only kept for a configured interval of time.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=53)** The default is seven days.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=55)** A separate thread in Kafka keeps pruning files that are over this period.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=61)** Log files are an important consideration for managing a Kafka instance, since they influence the amount of physical space that needs to be provisioned.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=71)** Lack of space would lead to the broker rejecting data from producers and a breakdown of data processing pipelines.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=79)** All configuration for Kafka is in the server.properties file, under the config folder of the Kafka route directory.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=88)** The log.dirs parameter is used to set the path of the log directory.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka?u=76281980&t=94)** Now, let's explore more around producers and consumers in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Producers and consumers
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=0)** - [Instructor] A producer is any client that publishes data to Kafka.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=4)** Some examples include web servers that push web click events, a log scrubber pushing in log messages, and a sensor pushing in telemetry data.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=15)** To build a producer, a developer needs to use a Kafka client library within their code and publish data.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=23)** Such client libraries are available for multiple programming languages.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=28)** Please check the Kafka website for more details.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=31)** We will discuss Java client libraries in this course.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=35)** There can be multiple concurrent producers for each topic.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=40)** These producers can be different physical processes or threats in the same process.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=46)** It is the job of the producer to identify the key for the message.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=51)** Typical keys would include customer IDs, product IDs, or transaction IDs.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=56)** Please note that the keys influence partition selections.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=61)** Ideally, distinct values for these keys should have equal distribution to ensure equal load across all partitions.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=69)** The producers also need to serialize the message data to byte arrays.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=74)** Anything can be serialized, including strings, JSON, objects, or blobs.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=80)** The only requirement is to make sure that the consumer can deserialize it to create the same data.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=87)** There are synchronous and asynchronous options available for publishing to Kafka.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=93)** Asynchronous options don't wait for an acknowledgement from the broker before proceeding with the next message, and hence, it's faster.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=101)** But it also results in complex tracking of acknowledgements and republishing.
>
> **[1:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=107)** A consumer, on the other hand, is used to consume and use the messages from Kafka.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=113)** Typical examples for consumers include a log filter, a realtime data aggregator, or an archiver.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=121)** Consumers can consume a message anytime as long as the message is still stored in the log files and are not pruned over.
>
> **[2:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=129)** So in real time, the producer and the consumer are running at the same time.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=134)** And as each message is published, it is immediately consumed.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=138)** In batch processing, the producers can publish anytime, even in batches.
>
> **[2:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=143)** The consumer process can start up at a much later time and consume all the pending records.
>
> **[2:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=149)** The same client libraries used for producers will be used to consume the data by consumers also.
>
> **[2:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=156)** It'll be a different set of function calls.
>
> **[2:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=159)** There can be multiple concurrent consumers per topic and each consumer will get a complete set of messages for that topic.
>
> **[2:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=168)** If scaling is needed beyond one consumer for a specific job, then consumers can be grouped into consumer groups and share the load.
>
> **[2:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=176)** We will discuss consumer groups in detail later in the course.
>
> **[3:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=181)** Consumers are responsible for deserializing the messages in byte array format, and recreating the original objects sent by the producers.
>
> **[3:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=190)** Consumers also can manage the offset for data that they would consume.
>
> **[3:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=195)** They can consume from the start of the topic or from a specific offset.
>
> **[3:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers?u=76281980&t=199)** They also provide acknowledgement to the brokers once they have successfully consumed a message.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **Env Vars:** json (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Using Kafka Command Line

#### Kafka client scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=0)** - [Instructor] In this chapter, we will explore the command line options in Kafka for managing topics as well as publishing and subscribing.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=9)** In this video, we will explore various client shell scripts that are available in kafka.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=15)** To begin, we need to log into the kafka container using the docker exec command.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=21)** We do so by calling docker exec-it kafka-broker/bin/bash.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=29)** This takes us inside the docker container.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=32)** Now, let's navigate to the root directory for kafka here.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=36)** It's installed under slash opt/bitnami/kafka.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=42)** Let's explore the contents here.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=45)** The config directory contains configuration that can be modified to suit a specific setup.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=50)** Any configuration changes would require a restart of kafka.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=55)** Do note that these files are inside the container and restarting the container would reset the files to their original value.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=62)** If you need to modify and use these files, use host volumes.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=67)** The logs directory contains log files generated by kafka and are useful for troubleshooting.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=73)** The bin directory contains a number of shell scripts for kafka management, publishing, and subscribing.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=81)** Let's explore this directory in detail.
>
> **[1:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=84)** The bin directory contains a number of shell scripts that can be used to interact with kafka.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=89)** The kafka server start and kafka server stop scripts can be used to start and stop kafka.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=96)** We will explore other scripts later in the course.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-scripts?u=76281980&t=99)** Now, we can start creating some topics in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1)
> **CLI Commands:** docker (3)
> **Cross-References:** later in (1), in the next (1)
> **Tools:** command line (1), bash (1)
> **UI Navigation:** navigate to (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Creating a topic
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=0)** - In this video, we will create two topics in Kafka.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=4)** I will explore the topic, "Creation Command" first.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=7)** It is available in the Chapter Three commands.text file.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=12)** The script to use for creating topics is the Kafka topics.sh script.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=18)** What are the parameters for the script?
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=21)** First, we need to provide a link to the Kafka broker.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=24)** This is provided with the parameter bootstrap-server.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=28)** Note that we are using the internal port 29.0.9.2 as we are accessing the broker from inside the docker cluster.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=36)** Then comes the action, which in this case is create.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=40)** We provide the name of the topic in the topic parameter.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=44)** While this name can be any string, it is recommended to use a pattern of qualified names for better management.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=51)** In this case, it is a tweets topic called Kafka.learning.tweets.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=56)** We then specify two mandatory parameters, the number of partitions and the replication factor.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=63)** We keep the partition size to one.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=66)** We will discuss partitions later in the course.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=70)** Replication is addressed in detail in the next Kafka course, Apache Kafka Essentials: Building Scalable Applications.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=79)** For now, we keep replication to one since we only have one Kafka broker running.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=85)** Let's now proceed to create the topic.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=88)** We need to be in the bin directory for Kafka which we discussed in the earlier video.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=94)** Let's run the creation command now for the tweets topic.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=98)** There is usually a warning to not use underscores and periods together.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=103)** We can see that the topic has been successfully created.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=106)** Let's proceed to create another topic called, "Kafka Learning Alerts".
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=112)** This is also successfully created now.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-topic?u=76281980&t=115)** Now we proceed to explore the topics in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **Cross-References:** in the next (2), later in (1), we discussed (1)
> **CLI Commands:** docker (1), apache (1)
> **Warnings:** note that (1), warning (1)
> **File Paths:** topics.sh (1)
> **Ports:** port 29 (1)
> **Versions:** 29.0.9 (1)
> **Definitions:** is a  (1)

#### Exploring topics
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=0)** - Having created topics in the previous video, let's list and explore these topics in this video.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=7)** How do we get the list of topics already existing in a Kafka cluster?
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=13)** We will use the list action for that.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=15)** This is similar to the create action in the Kafka topics command.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=21)** We will provide the bootstrap server location as the parameter and then use the list command.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=26)** If we need to get further details around these topics, we can use the describe command.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=32)** Let's run these commands and see the results.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=36)** Here is the list command.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=37)** It only lists the names of the topics that are created in the system.
>
> **[0:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=42)** Do note that we will also get to see some additional internal Kafka topics that could start with an underscore.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=50)** Next, we can learn more about each given topic using the describe command.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=55)** On executing the describe command, we see the results.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=59)** Here you will see more details about each topic.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=62)** Specifically, it provides the partition count and the replication factor.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=66)** For each partition in the topic, it also shows the partition ID, which in this case is zero.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=72)** Partitions are usually numbered zero to N.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=75)** It then shows the broker ID for the leader of the partition.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=79)** The broker ID is set for each Kafka instance in the server properties file under the config directory.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=86)** We will explore more of these later in the course.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/exploring-topics?u=76281980&t=89)** Now let's start publishing some data for Kafka in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Cross-References:** previous video (1), later in (1), in the next (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - having (1)

#### Publishing messages to topics
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=0)** - [Instructor] Having created topics, let's now publish some data to them.
>
> **[0:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=4)** In this video, I will demonstrate publishing messages to Kafka using the command line publisher.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=10)** For this, we use the kafka-console-producer.sh shell script.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=16)** In order to publish, we need to provide the Bootstrap server parameter, which can point to a list of Kafka brokers.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=23)** We provide localhost:29092 as the value.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=28)** As explained in the earlier setup video, we need to pay attention to the URL used.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=33)** We are running this command from inside the container which is within the Docker network, so we need to use the internal host and port.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=41)** As the host is in the same container, we can use localhost.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=45)** The port should be the internal port, which is 29092.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=49)** We need to specify the topic to which we want to publish data.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=53)** There are other optional parameters available which you can explore by simply using the shell script without any parameters.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=62)** Let's now publish data to this topic.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=65)** First, let me just provide the shell script name, kafka-console-producer.sh.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=71)** With this, we get to see the list of all the parameters supported by the shell script.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=78)** Next, let's start the producer for kafka.learning.tweets.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=83)** We get a prompt for us to provide any message.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=87)** Let's type, "This is my first tweet".
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=90)** (keyboard keys clicking) On pressing Enter, this message is sent to Kafka.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=96)** We can add more messages and keep publishing them until we end the program with Control + C or Control + D.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=105)** On pressing Control + D, the publishing ends.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=109)** This is the quick way to test if the Kafka topic has been created successfully and it is working fine.
>
> **[1:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=115)** Messages, once produced, will be stored in Kafka until they are pruned.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=120)** They can be consumed at any time.
>
> **[2:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-to-topics?u=76281980&t=122)** In the next video, let's consume the data produced.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), type, (1)
> **File Paths:** kafka-console-producer.sh (2)
> **CLI Commands:** docker (1)
> **URLs:** [localhost:29092](https://localhost:29092) (1)
> **Ports:** :29092 (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)

#### Using console consumer
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=0)** - [Instructor] How do I consume messages from Kafka?
>
> **[0:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=3)** We can use the Kafka-console-consumer.sh shell script for that.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=8)** The command takes the mandatory bootstrap server parameter.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=12)** The same considerations we discussed in the earlier video apply here too.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=17)** We need to provide a list of topics to consume data from.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=20)** We have the option to either consume all the messages by using the from-beginning parameter or only consume newly created messages in the topic.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=30)** Let's execute this now.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=32)** For demo purposes, I have four windows open.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=36)** There are two producer windows on the left and two consumer windows on the right.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=41)** We create separate shell sessions on the container using the same Docker exec command and then navigating to the Kafka bin directory.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=51)** In both the producer shells, we run the Kafka producer for the given topic, Kafka learning tweets.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=58)** In the first consumer shell, let's start the consumer and consume it from the beginning.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=64)** We see all the message we have published in the earlier videos to the topic show up here.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=70)** The command will continue to run and listen for any new messages published in this topic.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=76)** On the second consumer shell, let's start the consumer and consume only new messages.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=82)** We see that there are no messages published from history and it simply waits for new messages.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=89)** Let's now go to the first producer and add a message.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=93)** Publishing from producer one.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=97)** We see that this message immediately shows up in both the consumers.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=102)** We then go to the second producer and add a new message.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=106)** Published now from producer two.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=109)** This message again shows up in both the consumers.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=113)** This demonstrates how Kafka can receive messages from multiple producers, and send them to multiple consumers at the same time.
>
> **[2:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=122)** This is a simple yet powerful demonstration of Kafka's capabilities.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/using-console-consumer?u=76281980&t=127)** In the next video, we will explore the Kafka topic operations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from. (1), continue (1)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** go to (2)
> **File Paths:** kafka-console-consumer.sh (1)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Topics management
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=0)** - [Instructor] The kafka-topics.sh Shell script can also be used to modify and delete topics.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=7)** Running just the kafka-topics.sh Shell script shows all the parameters that are available to be modified.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=15)** Things like partition count can only be increased, and that needs to be planned ahead.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=20)** To demonstrate, we will use this Shell script to delete the kafka.learnings.alert topic.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=27)** We again need to provide the bootstrap server parameter and the topic name.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=31)** The delete command takes care of deletion.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=34)** Let's run the command now.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=37)** The command returned successfully without errors.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=40)** Running the list command after this command will show that this topic has been deleted.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics-management?u=76281980&t=45)** In the next video, we will explore some internals of Kafka.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (1)
> **File Paths:** kafka-topics.sh (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Review Kafka setup
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=0)** - [Instructor] In this video, we will review the Kafka setup and see how things are organized inside Kafka.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=6)** Let's first log into the Kafka broker container.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=9)** Let's execute a ps -ef command to find the Kafka process.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=15)** At the end of this long command line, you will see the configuration file that is actually used by this Kafka instance.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=23)** Let's explore this configuration file.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=28)** Most of the parameters that we set up as a part of the Docker Compose file will show up here, like the process roles, node ID, and controller.quorum.voters.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=40)** But we are interested in the log.dirs parameter.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=44)** The log.dirs parameter points to the directory /bitnami/kafka/data.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=50)** This is the directory in which all the messages that we publish to Kafka are stored.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=57)** Let's go to this directory.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=59)** There are a number of consumer offset directories that are created here.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=63)** These are used to manage consumption of messages by various consumers.
>
> **[1:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=69)** We will discuss consumer offsets in the next chapter.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=72)** Then, for each partition for each topic, there is a data directory.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=78)** For example, we have a data directory called kafka.learning.tweets-0 for the kafka.learning.tweets topic and its partition ID 0.
>
> **[1:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=89)** Let's explore this directory further.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=92)** We see the internal files in which data is stored.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=96)** It is stored in an internal format.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=98)** The main file in which data is stored is the log file.
>
> **[1:42](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=102)** Let's cat this file to see its contents.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=105)** We see bits of data that we actually published in the topic, but in its own internal form.
>
> **[1:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=111)** I hope this gives some overview on the internals of how Kafka works.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/review-kafka-setup?u=76281980&t=116)** In the next chapter, let's learn more about partitions and consumer groups.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **CLI Commands:** find (1), docker (1), node (1), cat (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** setup (1), set up (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 4. Kafka Partitions and Groups

#### Intro to partitions
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=0)** - [Instructor] In this chapter, we will deep dive into partitions and how they control the ingestion, storage, and consumption of messages.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=9)** As discussed previously, each topic can contain multiple partitions.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=15)** A topic can have 1-n partitions.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=18)** The number of partitions are set up during topic creation.
>
> **[0:22](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=22)** The maximum number of partitions per cluster and per topic varies based on the specific version of Kafka.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=30)** Partitions allow Kafka to scale by parallelizing ingestion, storage, and consumption of messages.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=37)** It provides horizontal scalability.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=40)** However, creating too many partitions may result in increased memory usage and file handles.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=47)** Each partition has separate physical log files which, of course, will grow lower as they reach configured sizes.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=55)** A given message in Kafka is stored in only one partition.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=60)** Each partition is assigned a broker process known as the leader broker.
>
> **[1:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=65)** In order to write to a specific partition, the message needs to be sent towards corresponding leader.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=71)** The leader then takes care of updating its log file as well as replicating that partition to other copies.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=78)** The leader will also send data to the subscribers of the partition.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=83)** With multiple partitions for a topic, consumers can share workloads by partitions using consumer groups.
>
> **[1:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=91)** Partitions can be replicated for fault tolerance purposes.
>
> **[1:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=95)** There are a few things to note about partitions.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=99)** These significantly impact the performance and latency of the pipelines.
>
> **[1:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=105)** Each published message gets stored in only one partition.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=109)** If the partition is replicated, each replicated copy will also get one instance of the message.
>
> **[1:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=116)** Message ordering is guaranteed only within a partition.
>
> **[2:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=121)** So in the example provided, messages are pushed to Kafka in the order from M1 to M8.
>
> **[2:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=128)** M1, M3, and M7 are guaranteed to be delivered to the consumer in the same sequence as they belong to a single partition.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=138)** But, on the other hand, there is no guarantee of ordering between M1 and M2 as they belong to different partitions.
>
> **[2:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=147)** It's possible for M2 to be delivered before M1.
>
> **[2:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=151)** The partition for a message is determined by the message key.
>
> **[2:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=155)** Kafka uses a hashing function to allocate a partition based on the message key.
>
> **[2:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=160)** Messages with the same key will always end up in the same partition.
>
> **[2:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=165)** It is important to choose keys that have an equal distribution of its values.
>
> **[2:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=170)** Otherwise, some partitions may be overloaded while others would be used minimally.
>
> **[2:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=176)** The number of partitions cannot be decreased after the topic is created.
>
> **[3:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=180)** Hence, care should be taken to set the right size of partitions during creation time.
>
> **[3:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions?u=76281980&t=186)** Now, let's look at creating topics with multiple partitions and then publishing to these partitions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), let (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating topics with partitions
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=0)** - [Instructor] Having looked into how partitions help Kafka scale, let's now create a topic with partitions.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=8)** The commands for this chapter are available in the file: chapter-4-commands.txt under the Resources directory in the Java project.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=18)** In order to create multiple partitions, we simply need to specify the number of partitions needed in the partitions parameter.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=26)** In this case, we are creating a topic called kafka.learning.orders with a partition count of three.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=34)** Let's execute this command in the Kafka container.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=39)** To recollect, you would need to use the Docker exec command to log into the shell and navigate to the bin directory as shown in the previous chapters.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=49)** The topic has been successfully created now.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=53)** Let's explore this topic with the describe command.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=56)** The describe command also takes in the topic name to only show details for a specific topic.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=64)** The output now shows one line for each partition in the topic.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=68)** There is a partition ID shown which is numbered 0 to 2.
>
> **[1:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=73)** Each partition has a broker ID of its leader shown here.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=77)** This leader is responsible for managing the partition, including receiving messages, storing them in local logs, and pushing them to subscribers.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=87)** Given that we only have one broker in our setup, all partitions are assigned the same broker.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=94)** The controller in the Kafka cluster is responsible for assigning partitions to the brokers.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-topics-with-partitions?u=76281980&t=100)** In the next video, let's push some data with keys to this topic we have created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1)
> **File Paths:** chapter-4-commands.txt (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Publishing with keys
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=0)** - [Instructor] In this video, let's use the console producer to publish some messages with keys for the kafka.learning.orders topic.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=10)** The command for publishing is the same as we discussed in chapter three except for the topic name.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=17)** In order to publish data with keys, we use the colon operator to separate the key and the value.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=24)** To specify this, we use two properties, parse.key=true tells the producer to read the key also.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=32)** Key.separator is used to specify the separator character.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=37)** Let's now execute the producer and add some data.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=41)** For the orders we will use the order ID as the key and the product name and price as values.
>
> **[0:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=48)** So, we provide the first record with 1001 as the key.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=53)** Then, we use the colon to separate the key and the value.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=57)** We then provide the values as a CSV string with the product name and value shown here.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=63)** Double codes helps publish the entire CSV as one string.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=68)** Let's publish a second record now.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=71)** Kafka will distribute the messages to various partitions.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=75)** There is no command line available to see which partition each message will end up.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=80)** One way to see it is to explore the data directory of Kafka as we've seen in earlier videos.
>
> **[1:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys?u=76281980&t=87)** In the next video, let's explore consumer groups and how they consume partitions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1)
> **Env Vars:** csv (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Consumer groups
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=0)** - [Instructor] Let's discuss consumer groups in Kafka in this video.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=5)** What is a consumer group?
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=7)** A consumer group is a group of consumers that share a topic workload.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=12)** A topic may be generating hundreds of messages in a short amount of time.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=18)** It may not be possible for a single consumer process to keep up with processing these messages.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=24)** For scalability, multiple consumer processes can be started and the messages can be distributed among them for load balancing.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=33)** A consumer group is a logical group of consumers that Kafka uses for such load distribution.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=40)** Each message will be sent to only one consumer within the consumer group.
>
> **[0:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=46)** That consumer is then responsible for processing the message and acknowledging back to Kafka.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=52)** Consumers split workload among themselves through partitions.
>
> **[0:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=57)** Kafka keeps track of the active number of consumers for each given topic.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=62)** It then distributes the topics evenly between these consumers.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=67)** Kafka only considers the number of partitions for distribution, not the number of messages expected in each partition.
>
> **[1:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=75)** It is expected that the number of partitions are equal to or higher than the number of consumers in the group.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=83)** If there are more consumers than partitions, then there will be consumers with no work as the lowest granularity of work distribution is a partition.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=93)** We can create multiple consumer groups, each with a different set of consumers.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=99)** Each group will then get a full copy of all the messages but each message will be sent to only one consumer within each consumer group.
>
> **[1:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=110)** When new consumers come up or existing consumers go down, Kafka takes care of rebalancing the load by reassigning the partitions among live consumers.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=120)** Kafka uses heartbeats with consumers to keep track of their health.
>
> **[2:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=125)** Let's look at an example for consumer groups here.
>
> **[2:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=129)** We have a topic called orders.
>
> **[2:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=132)** It has three partitions, P1 to P3.
>
> **[2:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=135)** There are eight messages numbered M1 to M8.
>
> **[2:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=139)** There are two consumer groups created.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=141)** The first consumer group is an analytics consumer group that has three consumers.
>
> **[2:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=147)** The second consumer group is an audit consumer group that only has two consumers.
>
> **[2:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=153)** For the analytics consumer group, as the number of partitions and consumers are equal, Kafka assigns one partition per consumer.
>
> **[2:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=161)** For the audit consumer group, as the number of consumers are less than the number of partitions, Kafka assigns one partition to the first consumer and two partitions to the second consumer.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=173)** But both consumer groups get a copy of all the messages.
>
> **[2:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups?u=76281980&t=178)** In the next video, let's explore how Kafka keeps track of what messages are consumed and if it needs to resend data to its consumers.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2)
> **Code Keywords:** let (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Consumer offset management
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=0)** - [Instructor] When Kafka pushes messages to consumers, it also needs to ensure reliable delivery.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=7)** Kafka ensures, at least once, guaranteed delivery using consumer offsets.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=13)** What is a consumer offset?
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=15)** It is a number to track message consumption by each consumer and partition.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=21)** As each message is received by Kafka, it allocates a message ID to that message.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=27)** Kafka then maintains this message ID offset on a consumer and partition basis to track its consumption.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=35)** Kafka brokers keep track of both what is sent to the consumer and what is acknowledged by the consumer by using two offset values.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=45)** The current offset value tracks the last message ID that was sent to the consumer.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=50)** The committed offset value tracks the last message that is acknowledged by the consumer.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=56)** As consumers receive a message, they have the option of acknowledging immediately or after making sure that all required processing is done.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=66)** This helps consumers to manage transactions and not lose messages in case of failures.
>
> **[1:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=72)** By default, Kafka consumers ought to acknowledge and receive it, but this can also be changed at the consumer end.
>
> **[1:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=80)** When Kafka brokers do not receive acknowledgement within a set timeout, they will resend the message to the same consumer.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=88)** This ensures at least once delivery of each message to the consumer group.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=93)** A message can be delivered multiple times if acknowledgement does not happen within a timeout, but each message will be delivered at least once.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=103)** When a new consumer starts up, it has the option of requesting messages either from the start, only the latest, or from a given offset.
>
> **[1:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=112)** This allows the consumers to process messages based on their use case requirements.
>
> **[1:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=117)** Let's look at an example of offset management by Kafka.
>
> **[2:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=122)** Let's say we have a partition being consumed by a consumer called Consumer 1.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=127)** Consumer 1 is set to start with the latest message.
>
> **[2:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=131)** So in step one here, Kafka will set the current and committed offset to 4, which is the latest message at the time Consumer 1 starter.
>
> **[2:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=141)** In step two, a new message, message 1, comes into the Kafka partition, which is then immediately sent to Consumer 1.
>
> **[2:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=149)** The current offset is incremented by 1 to a value of 5.
>
> **[2:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=154)** The committed offset stays at 4.
>
> **[2:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=157)** In step three, Consumer 1 acknowledges message 1.
>
> **[2:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=160)** Committed offset is also incremented to 5.
>
> **[2:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=164)** Step four, another message, message 2, comes into the partition and is sent to Consumer 1.
>
> **[2:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=170)** Current offset increases to 6.
>
> **[2:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=172)** In step five, Consumer 1 crashes.
>
> **[2:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=175)** As a result, the broker's heartbeat with the consumer is broken.
>
> **[3:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=180)** So, the broker resets the current offset back to 5, as it has not received an acknowledgement for the new message.
>
> **[3:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=188)** In step six, a rebalancing step happens and the partition gets reallocated to another consumer, namely Consumer 2, which is within the same consumer group.
>
> **[3:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=198)** Consumer 2 will start receiving messages from where Consumer 1 left off.
>
> **[3:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=203)** In step seven, Consumer 2 will receive message 2 that was not originally acknowledged by Consumer 1.
>
> **[3:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=210)** So the current offset goes up to 6.
>
> **[3:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=213)** In step eight, Consumer 2 acknowledges message 2.
>
> **[3:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=216)** Committed offset is also updated to 6.
>
> **[3:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=220)** This process ensures that there is no message that is left off and all the messages are delivered to the consumers at least once.
>
> **[3:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management?u=76281980&t=228)** In the next video, let's execute an example of consumer groups and consumer offsets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Consuming partitioned data
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=0)** - [Instructor] In this video, let's consume the data published into the kafka.learning.orders topic using consumer groups and track offsets.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=10)** We have opened four Shell windows, each of which is started by using the docker exec command into the Kafka container, and then navigating to the bin directory as shown in the previous chapters.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=23)** In the first window on the top left, we start the publisher to publish to the orders topic.
>
> **[0:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=29)** In the window on the top right, we start the first consumer.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=33)** Here, to specify a consumer group, we use the group parameter and specify a group string called test-consumer-group.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=41)** We specify the print key property to print the key also.
>
> **[0:45](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=45)** The key.separator specifies the character used to separate the key and value while printing the data to the console.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=53)** We will use the equal-to character for this.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=56)** We also subscribe from the beginning.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=58)** Let's run this consumer.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=60)** We immediately see all the messages we have published so far to the topic show up here.
>
> **[1:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=66)** Both the key and the values are printed.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=70)** Let's explore the consumer group status in the bottom left window.
>
> **[1:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=74)** We use the kafka-consumer-groups.sh script to check for status.
>
> **[1:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=79)** We need to provide the bootstrap server and the request to describe commands for all groups.
>
> **[1:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=85)** Let's execute this command now.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=88)** The output of the command shows how the consumers are set up.
>
> **[1:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=92)** The first column group shows the group name we have set up for the consumer.
>
> **[1:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=97)** The next is the topic name.
>
> **[1:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=99)** The third is the partition ID.
>
> **[1:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=101)** We have one line for each partition.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=104)** The current-offset shows the latest offset of the message sent to the consumer.
>
> **[1:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=109)** It is already updated for the messages sent to the first consumer.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=113)** The log-end-offset is the offset of the last message received in the partition.
>
> **[1:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=118)** Lag is the difference between the log-end-offset and the current-offset.
>
> **[2:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=123)** It is a key metric to track if messages are being consumed immediately by consumers or if there is a delay.
>
> **[2:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=130)** Consumer-ID is an auto-created ID for the consumer.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=134)** This shows the consumer who is currently consuming the specific partition.
>
> **[2:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=138)** Currently, we only see one consumer that is consuming all the partitions.
>
> **[2:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=143)** Now, let us start a second consumer in the bottom right window with the same group name.
>
> **[2:29](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=149)** When a second consumer starts, Kafka immediately rebalances and reallocates partitions.
>
> **[2:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=156)** We do not see any messages in this window, even though we have requested it from the beginning.
>
> **[2:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=161)** This is because all the messages are already sent to the first consumer in the consumer group.
>
> **[2:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=167)** Now, let's rerun the consumer group command again in the bottom left window.
>
> **[2:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=173)** Now, we see that the consumer ID for partition 0 and 1 have been changed to the second consumer.
>
> **[3:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=180)** Now let's start producing more data in the producer and see how data gets distributed between the consumers.
>
> **[3:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=188)** This new record now goes to the second consumer and not the first consumer.
>
> **[3:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=192)** Let's publish once again.
>
> **[3:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=195)** The fourth record also goes to the second consumer.
>
> **[3:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=199)** Do note that the second consumer is consuming two partitions so it'll get more messages than the first consumer.
>
> **[3:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=206)** We have this new record with ID 1005 going to the first consumer.
>
> **[3:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=211)** As we can see, as the producer keeps generating new data, it gets distributed between the consumers based on the partitions.
>
> **[3:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=219)** Let's now go back to the consumer group status at the bottom left window and re-execute the command.
>
> **[3:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=227)** We see that the offsets for both current-offset and log-end-offset have been updated as needed based on the message consumption and acknowledgement.
>
> **[3:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=238)** This demonstrates how Kafka manages consumers, consumer groups, and offsets.
>
> **[4:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-partitioned-data?u=76281980&t=243)** In the next chapter, let's build producers and consumers in Java.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **File Paths:** kafka-consumer-groups.sh (1)
> **CLI Commands:** docker (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Kafka Java Programming

#### Kafka client libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=0)** - [Narrator] While building real-world data pipelines, command line interfaces are hardly used to publish and consume data with Kafka.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=9)** Kafka producers and consumers are returned in various programming languages.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=14)** Fortunately, Kafka has client libraries for a long list of programming languages.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=21)** This website provides the current list of clients.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=24)** From here, you can access documentation for various clients as well as download these libraries.
>
> **[0:31](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=31)** In this course, we will build sample Kafka clients using Java.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=37)** For a Maven project, it is easy to add a Kafka client.
>
> **[0:41](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=41)** in your POM.xml, simply include the dependency for Kafka and to download and set up Kafka in your project.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-client-libraries?u=76281980&t=49)** Now let's build a simple producer in Kafka with the next video.

> [!info]- Semantic Content
>
> **File Paths:** pom.xml (1)
> **Code Keywords:** let (1)
> **Env Vars:** pom (1)
> **Cross-References:** next video (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Creating a producer in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=0)** - [Instructor] Let's explore the Java code for a sample Kafka producer in this video.
>
> **[0:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=5)** The code is available in the package com.learning.kafkagettingstarted.chapter5 The class file is KafkaSimpleProducer.java.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=16)** Let's examine the code now.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=18)** First, we need to create a properties object to specify the Kafka connection properties.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=24)** There are three mandatory parameters required.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=27)** We use the BOOTSTRAP_SERVERS property to specify a list of Kafka brokers.
>
> **[0:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=33)** Even if we specify one broker, the kafka client will discover other brokers in the cluster.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=40)** It is, however, recommended to specify at least two so even if the first broker is out of service the second one can be used for discovery.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=50)** Since we are accessing kafka from the host system we need to use the external port number, which is 9092.
>
> **[0:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=59)** Then we need to specify the key and value serializer classes.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=64)** These classes are invoked by the kafka client to serialize the message and value to bytes.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=70)** In this case, we specify a string serializer as both these values would be strings in our case.
>
> **[1:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=78)** Custom serializers can be built if needed.
>
> **[1:22](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=82)** We create a kafka producer object using these properties.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=86)** Now, we are going to publish 10 random messages to kafka starting with a random key value.
>
> **[1:33](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=93)** We do an iteration of 10.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=96)** Then we create a producer record in kafka.
>
> **[1:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=100)** The types belong to the types of the keys and value.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=104)** Both of which are strings.
>
> **[1:46](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=106)** As parameters, we specify the topic name, key, and value.
>
> **[1:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=110)** We will be publishing to the kafka.learning.orders topic we created earlier in the codes.
>
> **[1:57](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=117)** We will print the message created.
>
> **[1:59](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=119)** Then we will call the send method on the kafka producer to push the record to Kafka.
>
> **[2:05](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=125)** We continue to publish after sleeping for two seconds.
>
> **[2:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java?u=76281980&t=129)** In the next video, let's run this code and review the results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), case. (1), continue (1)
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** kafkasimpleproducer.java (1)
> **Env Vars:** bootstrap_servers (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Publishing messages in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=0)** - [Instructor] Let's run the producer we created in the previous video and review the results.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=6)** We see that the ProducerRecord object is being printed here as the publishing goes on.
>
> **[0:12](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=12)** Ignore the values for the partition and timestamp.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=15)** Those will be populated when you create advanced producers by manually setting these values.
>
> **[0:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=21)** Now, let's look at the console consumer for the topic.
>
> **[0:25](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=25)** We see the keys and values printed here correctly.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=28)** Note that multiple producers written in different programming languages can publish to the same topic simultaneously.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=36)** For Kafka, everything is a sequence of bytes.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java?u=76281980&t=39)** In the next video, we will build a consumer in Java to consume this data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Creating a consumer in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=0)** - [Instructor] In this video, we will build a consumer in Java to consume messages from the Kafka.learning.orders topic and print them to the console.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=10)** Setting up a consumer is similar to setting up a producer.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=14)** We first provide the list of Kafka brokers using the bootstrap-server's parameter.
>
> **[0:20](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=20)** Then we need to provide deserializers for the messages.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=24)** Messages received from Kafka are byte arrays and the Kafka client will call the deserializer to convert the key and value to equivalent Java objects.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=35)** We need to specify the consumer group name in the group.id column.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=40)** We use the Kafka Java consumer as the name.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=43)** Note that this is a different consumer group from the name that was used for the earlier command line demonstrations.
>
> **[0:51](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=51)** We use the auto reset config parameter to specify whether we want all the messages in the topic or only new messages.
>
> **[1:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=60)** In this case, we specify earliest so we are requesting all the old messages in the topic also.
>
> **[1:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=67)** We then create a Kafka consumer using these properties.
>
> **[1:11](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=71)** We use the subscribe method on the consumer to subscribe to our list of topics.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=76)** We specify the topic named Kafka.learning.orders here.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=81)** Kafka consumers work by polling the Kafka brokers for any new data.
>
> **[1:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=86)** To set up polling, we will use a continuous loop.
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=90)** Inside this, we will poll Kafka for new messages with a hundred millisecond timeout.
>
> **[1:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=96)** If there are any new messages that are delivered during that period, it'll be populated in the messages object.
>
> **[1:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=104)** We then iterate over this list and print the messages that are returned.
>
> **[1:48](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=108)** In real world use cases, we would then process the message as required.
>
> **[1:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=113)** It is usually recommended to use a separate thread for actual processing, so we do not block the consumer thread.
>
> **[2:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=120)** In this case, the client automatically acknowledges the receipt of the message once it is received.
>
> **[2:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=127)** If we need to wait until the message is successfully processed, there are additional setup parameters and messages available.
>
> **[2:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java?u=76281980&t=134)** In the next video, we will execute this code and review the results.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), this, (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)

#### Consuming messages in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=0)** - [Instructor] Let's execute the Kafka Consumer we built in the previous video and review the results.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=7)** Let's run the code now.
>
> **[0:09](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=9)** We immediately see that all the previously published messages to this topic are returned to the console.
>
> **[0:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=16)** For each message, we see the topic name, the partition this message belongs to, and the offset of the message.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=23)** We see the timestamp of the message as create time.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=27)** The published key and value are also shown.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=30)** We also see that the program continues to run and wait for more data.
>
> **[0:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=34)** Do note that this is a different consumer group than what we used for the command line so the offsets will start from scratch.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=43)** Let's now stop and run the program again.
>
> **[0:47](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=47)** Even though we specified it to consume from the earliest offset, it does not print any of the old data.
>
> **[0:53](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=53)** This is because, based on the previous run.
>
> **[0:56](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=56)** Kafka has incremented the committed offset for this consumer group and will only provide new messages going forward.
>
> **[1:04](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=64)** To force it to publish from the beginning, we need to request a specific hardcoded offset of zero.
>
> **[1:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=70)** Please check out the other consumer options available under consumer config for this.
>
> **[1:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=77)** Let's now run the producer also by the side.
>
> **[1:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=83)** Now, as the producer is publishing new data, they are immediately received and printed by the consumer.
>
> **[1:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=90)** There can be multiple threats inside the same program or multiple programs that can consume from the same consumer group and share the workload.
>
> **[1:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=98)** This completes our discussions around Kafka and its basic capabilities.
>
> **[1:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java?u=76281980&t=103)** In the next chapter, you will test your learning by implementing a use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), case. (1)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 6. Use Case Project

#### Kafka basics use case: Problem definition
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=0)** - [Instructor] In this chapter, you will implement a simple use case in Kafka to exercise the learnings in the course.
>
> **[0:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=8)** Beyond this use case, I also recommend that you try out some of your own use cases.
>
> **[0:14](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=14)** We have three exercises to do in this course.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=17)** First, create a topic called kafka.usecase.students.
>
> **[0:23](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=23)** Assume that this topic would need to publish student scores.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=27)** It'll have two partitions and a replication factor of 1.
>
> **[0:32](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=32)** Second, use the console producer to publish messages to the this topic, publish both key and value.
>
> **[0:39](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=39)** Use a console consumer to consume messages from this topic.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=43)** Finally, build a producer and a consumer in Java for the same topic.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=49)** We will execute the code and then review the results.
>
> **[0:52](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=52)** Best of luck for the use case.
>
> **[0:54](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-basics-use-case-problem-definition?u=76281980&t=54)** Once you have completed that use case, you can check the other videos in the chapter for the solutions.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), finally, (1), case. (1)
> **Speakers:** - [instructor] (1)

#### Setting up topics
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=0)** - [Instructor] In this video, let's create the topic for the use case using the Kafka command line.
>
> **[0:06](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=6)** The commands for this chapter, are available under the resources directory in chapter six commands.text.
>
> **[0:13](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=13)** The creation command uses the create argument the topic name as kafka.usecase.students and the number of partitions as two.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=24)** Let's run the command now.
>
> **[0:26](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=26)** The topic is now created.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=28)** Let's look at this topic.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/setting-up-topics?u=76281980&t=30)** Using the descript command, we see that the topic is created successfully with two partitions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Producing and consuming data with scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=0)** - [Instructor] Continuing on the topic creation from the previous video, we will now publish messages and consume them using command-line scripts for this use case.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=10)** To publish data, we use the Kafka console producer.
>
> **[0:15](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=15)** We specify the topic name as kafka.usecase.students.
>
> **[0:19](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=19)** Since we are publishing with the key, we need to specify the parse.key parameter and the key.separator parameter.
>
> **[0:27](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=27)** Let's run this command now and publish some data.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=30)** We will use the student ID as the key, and the student score as the value.
>
> **[0:37](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=37)** We have published three records to the topic now.
>
> **[0:40](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=40)** We can stop the producer.
>
> **[0:43](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=43)** Next, to consume messages from the topic, we use the Kafka console consumer.
>
> **[0:49](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=49)** Again, we need to specify the print.key property and the key.separator property.
>
> **[0:55](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=55)** We can also specify a group name to enable Kafka to track consumption of data.
>
> **[1:01](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=61)** Let's run the command now.
>
> **[1:03](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-scripts?u=76281980&t=63)** We can see that the data published earlier with the console producer is printed to the console with the console consumer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Producing and consuming data with Java
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=0)** - [Instructor] In this video, let's look at the final exercise in the course, producing and consuming messages from Kafka with a Java client.
>
> **[0:10](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=10)** The code for this exercise is available in the package com.learning.kafkagettingstarted.chapter6.
>
> **[0:18](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=18)** It has two files, KafkaUseCaseProducer and KafkaUseCaseConsumer.
>
> **[0:24](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=24)** The code is simple and resembles the producer and consumer we built earlier in the course.
>
> **[0:30](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=30)** Let's first start the consumer.
>
> **[0:36](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=36)** We see the messages that we created with the console producer showing up here.
>
> **[0:44](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=44)** Next, let's run the producer.
>
> **[0:50](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=50)** As the producer creates more data, we can see that the consumer is fetching and printing them.
>
> **[0:58](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=58)** The base template for producers and consumers are the same.
>
> **[1:02](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=62)** When you build production-grade code, you would need to change your implementation based on a few things.
>
> **[1:08](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=68)** On the producer side, currently, this code blocks until the producer actually publishes to Kafka so this may not scale well.
>
> **[1:16](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=76)** You may want to explore asynchronous publishing capabilities.
>
> **[1:21](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=81)** On the consumer side, you may want to launch processing on a separate thread so the consumer is not blocked.
>
> **[1:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=88)** You may also want to manually acknowledge received after the message has been successfully processed.
>
> **[1:34](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producing-and-consuming-data-with-java?u=76281980&t=94)** We will explore these advanced use cases in our next Kafka course, Apache Kafka Essentials: Building Scalable Applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** apache (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Extending your Kafka knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=0)** - [Kumaran] Now that you have learned about the basics of Apache Kafka, you can take your learning even further.
>
> **[0:07](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=7)** First, you can learn more about building scalable Kafka applications through the next course, Apache Kafka Essentials: Building Scalable Applications.
>
> **[0:17](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=17)** Second, you can learn more about using Kafka for building stream processing applications with Apache Kafka, Apache Flink, or Kafka Streams.
>
> **[0:28](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=28)** Finally, you can implement Kafka in your organization for your big data processing use cases.
>
> **[0:35](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=35)** Data always intrigues me.
>
> **[0:38](https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/extending-your-kafka-knowledge?u=76281980&t=38)** I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge from it.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [kumaran] (1)


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