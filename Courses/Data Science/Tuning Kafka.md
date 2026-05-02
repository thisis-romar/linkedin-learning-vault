---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: tuning-kafka
url: "https://www.linkedin.com/learning/tuning-kafka"
duration_minutes: 117
duration: 1h 57m
level: Advanced
updated: 6/8/2023
learners: 7151
skills:
  - Apache Kafka
  - Performance Tuning
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFYQBNzYD3-Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686676555500?e=2147483647&amp;v=beta&amp;t=jeBVTuS_WeqFyio43kytclXdLNci1pXLFKbYl5N4iUo"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
prev_courses:
  - '[[Troubleshooting and Debugging Kafka]]'
next_courses:
  - '[[Architecting Big Data Applications- Batch Mode Application Engineering]]'
path_nav: '[{"path":"Master Data Engineering","position":3,"total":8,"prev":"Troubleshooting and Debugging Kafka","next":"Architecting Big Data Applications- Batch Mode Application Engineering"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/apache-kafka
  - skill/performance-tuning
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Tuning%20Kafka.md)

![Tuning Kafka](https://media.licdn.com/dms/image/v2/D560DAQFYQBNzYD3-Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686676555500?e=2147483647&amp;v=beta&amp;t=jeBVTuS_WeqFyio43kytclXdLNci1pXLFKbYl5N4iUo)

# Tuning Kafka

> Looking to take your skills to the next level with Apache Kafka? If you’re an experienced Kafka user, you probably already know that the performance of your Kafka environment is affected by many factors. But how do you tune them? In this course, instructor Janani Ravi shows you how to fine-tune Kafka using the Kafka optimization theorem and other powerful tuning tools.Get an introduction to Kafka 

> [LinkedIn Learning](https://www.linkedin.com/learning/tuning-kafka) | 1h 57m | Advanced | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Tuning Kafka](#tuning-kafka)
- [**1. Introducing Kafka Tuning**](#1-introducing-kafka-tuning) (7 videos)
  - [Prerequisites](#prerequisites)
  - [An overview of Kafka](#an-overview-of-kafka)
  - [Producers and consumers](#producers-and-consumers)
  - [Kafka optimization theorem](#kafka-optimization-theorem)
  - [End-to-end latency in Kafka](#end-to-end-latency-in-kafka)
  - [Install and set up Apache Kafka](#install-and-set-up-apache-kafka)
  - [Publish and consume messages using console scripts](#publish-and-consume-messages-using-console-scripts)
- [**2. Tuning Kafka Producers**](#2-tuning-kafka-producers) (8 videos)
  - [Running a Kafka cluster with three brokers](#running-a-kafka-cluster-with-three-brokers)
  - [Running basic producer performance tests](#running-basic-producer-performance-tests)
  - [Effects of partitioning on producers](#effects-of-partitioning-on-producers)
  - [Effects of replication on producers](#effects-of-replication-on-producers)
  - [Tuning producer acks](#tuning-producer-acks)
  - [Tuning producer compression](#tuning-producer-compression)
  - [Tuning batch size and linger time](#tuning-batch-size-and-linger-time)
  - [Effect of message size and record count](#effect-of-message-size-and-record-count)
- [**3. Tuning Kafka Consumers**](#3-tuning-kafka-consumers) (4 videos)
  - [Running a basic consumer performance test](#running-a-basic-consumer-performance-test)
  - [Tuning fetch bytes and wait time for consumers](#tuning-fetch-bytes-and-wait-time-for-consumers)
  - [Tuning session timeout and heartbeat interval](#tuning-session-timeout-and-heartbeat-interval)
  - [Tuning max poll interval and max poll records](#tuning-max-poll-interval-and-max-poll-records)
- [**4. Tuning Kafka Brokers**](#4-tuning-kafka-brokers) (3 videos)
  - [End-to-end latency with replication](#end-to-end-latency-with-replication)
  - [Tuning throughput](#tuning-throughput)
  - [Tuning log retention](#tuning-log-retention)
- [**5. Performance Testing with Python**](#5-performance-testing-with-python) (2 videos)
  - [Producer performance testing using Python](#producer-performance-testing-using-python)
  - [Consumer perf testing using Python](#consumer-perf-testing-using-python)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary and next steps](#summary-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Tuning Kafka](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=1)** - [Janani] Hi, and welcome to this course on tuning Kafka.
>
> **[0:04](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=4)** My name is Janani Ravi, and I'll be your instructor for today.
>
> **[0:08](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=8)** Now, before we dive into actual Kafka configuration, let's get a quick overview of what Kafka tuning is all about, and even before that, let's quickly discuss what Kafka is all about.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=20)** Since this is an intermediate to advanced course, you likely already know how to work with Kafka.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=26)** Kafka is a distributed event store and stream processing platform.
>
> **[0:31](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=31)** You use Kafka to provide a unified, high throughput, low latency platform for handling realtime data feeds.
>
> **[0:40](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=40)** Essentially, when you want to process streaming data, that streaming data needs to be sent to a distributed event store, such as Kafka, which will buffer and then allow you to read those messages at scale.
>
> **[0:53](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=53)** Here is a quick refresher of the key concepts and terms in Kafka.
>
> **[0:58](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=58)** An event or a message in Kafka is a record of something that occurred in the real world.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=64)** A Twitter message that has been posted.
>
> **[1:06](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=66)** That's an event.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=67)** An [[IoT]] sensor picks up the temperature at a certain time and then streams that, that's an event.
>
> **[1:14](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=74)** The originator of an event can be any application.
>
> **[1:18](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=78)** Kafka producers get these events, maybe they produce them themselves or get them from the originator, and then publish these events to Kafka.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=87)** And then we have consumers.
>
> **[1:28](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=88)** These are, again, client applications that subscribe to read and process events that have been published.
>
> **[1:36](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=96)** And then we have brokers.
>
> **[1:38](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=98)** Brokers are what we call servers that make up the Kafka cluster.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=103)** Kafka is a distributed platform and can have clusters of machines.
>
> **[1:47](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=107)** You can have one to thousands of machines in a Kafka cluster.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=111)** These are called brokers.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=113)** Now, if you've worked with distributed systems before, you know that there are trade offs that you need to make.
>
> **[1:58](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=118)** The tuning of Kafka involves configuring Kafka just the way you want it to meet the optimization goals for your application.
>
> **[2:08](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=128)** Tuning Kafka involves setting the right configuration properties for Kafka producers, which publish events, for Kafka consumers that subscribe to and consume events, as well as for Kafka brokers, the servers that make up the Kafka cluster.
>
> **[2:25](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=145)** Now, optimization is not always about making things better because often there are trade-offs involved.
>
> **[2:31](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=151)** You might have to make one metric better at the cost of another.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=155)** [[Big Data]] systems have to balance opposing goals.
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=159)** When you configure Kafka, you'll find yourself making trade-offs between the following metrics.
>
> **[2:46](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=166)** You'll trade off latency and throughput.
>
> **[2:48](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=168)** That is, if you want low latency, you have to put up with low throughput and vice versa.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=174)** Another set of optimizations will involve making trade offs between durability and availability.
>
> **[3:01](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=181)** Durability ensures data consistency and availability means your cluster is always available for requests.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=188)** Here we'll discuss the Kafka optimization algorithm that helps us learn how we can think of these trade-offs.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=196)** Notice the vertical axis, the trade-off lies between durability and availability.
>
> **[3:21](https://www.linkedin.com/learning/tuning-kafka/tuning-kafka?u=76281980&t=201)** And on the horizontally axis, the trade-off lies between latency and throughput.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Big Data]] (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** iot (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [janani] (1)


### 1. Introducing Kafka Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisites](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=1)** - [Instructor] Since this is an intermediate to advanced level course, let's take a look at some of the pre-reqs you need to have to make the most of your learning.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=9)** Now, the basic assumption I make is that this is not your first time working with [[Apache Kafka]], that you're familiar with the Kafka messaging service.
>
> **[0:16](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=16)** You're familiar with basic Kafka concepts such as producers to publish messages, consumers to subscribe to topics and consume messages.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=25)** brokers, the servers that make up the Kafka cluster, the partitioning of topics, and their replication.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=33)** We'll be working with all of these concepts in this course.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=36)** Now, in addition, I make a few other assumptions.
>
> **[0:39](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=39)** I assume that you're familiar working with the [[Linux]] terminal.
>
> **[0:43](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=43)** I'll be using a macOS for my demos.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=45)** And I also assume that you're familiar with the [[Python (Programming Language)|Python]] programming language, but this is only for the very last chapter.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=51)** The remaining chapters, there is absolutely no Python.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/prerequisites?u=76281980&t=55)** The [[Representational State Transfer (REST)|rest]] of the course is all about running shell scripts and commands on the Linux terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Python (Programming Language)|Python]] (2), [[Apache Kafka]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4), python (2), apache (1)
> **Tools:** terminal (2)
> **Code Identifiers:** macos (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [An overview of Kafka](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=1)** - Before we dive into tuning Kafka, let's quickly refresh basic concepts about the Kafka messaging service and how it works.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=9)** Now, here is a high level overview of the Kafka architecture.
>
> **[0:12](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=12)** What we have here is the Kafka cluster.
>
> **[0:14](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=14)** We have producers publishing messages to the cluster, and consumers consuming messages from the cluster.
>
> **[0:21](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=21)** Kafka, as we know, is a distributed platform to handle streaming data.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=26)** At the center here we have the Kafka cluster and the servers that make up the cluster are referred to as Kafka brokers.
>
> **[0:34](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=34)** Now we have producers which publish events to the cluster and these events are published to topics.
>
> **[0:41](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=41)** We have consumers that consume events from the cluster.
>
> **[0:44](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=44)** Consumers subscribe to topics.
>
> **[0:47](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=47)** Now, there are several ways to think of a Kafka topic.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=49)** It's like a data stream or a logical grouping or a queue of messages.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=55)** Producers and consumers in Kafka are decoupled via topics.
>
> **[0:59](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=59)** Producers publish messages to topics and consumers consume messages from topics.
>
> **[1:05](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=65)** They do not talk to one another directly.
>
> **[1:08](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=68)** There is no limit on how many producers can publish to a topic or how many consumers can consume from a topic.
>
> **[1:15](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=75)** Topics are multi-producer and multi-consumer.
>
> **[1:19](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=79)** What does this mean?
>
> **[1:20](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=80)** One topic can have any number of producers publishing to it and any number of consumers subscribing and reading from it.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=87)** Remember, topics are just a queue of messages.
>
> **[1:30](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=90)** In fact, topics are divided into partitions and you specify the number of partitions while creating the topic.
>
> **[1:37](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=97)** Each partition can be thought of as a separate queue and partitions allow distributed placement of events.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=105)** Partitions are an extremely important concept in Kafka scaling.
>
> **[1:50](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=110)** Now, events that are generated by producers are typically published to the partitions that make up a topic in a round-robin manner.
>
> **[1:59](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=119)** This is by default.
>
> **[2:00](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=120)** Consumers subscribing to a topic can read from multiple partitions in a topic.
>
> **[2:06](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=126)** There is no constraint there.
>
> **[2:08](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=128)** However, you should know that if consumers are reading from multiple partitions, Kafka does not guarantee that the reads by consumers will be in the order that the events were originally written to those partitions.
>
> **[2:22](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=142)** It's possible in Kafka to control which partition a particular message is written to, and that is done using a message key.
>
> **[2:30](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=150)** Event messages can be associated with the key and messages that have the same key will always be sent to the same partition.
>
> **[2:37](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=157)** Now, if you configure your consumers in such a manner that your consumer always reads from the same partition, they are guaranteed to get the events in the same order that they were written, provided your consumer always reads from the same partition and doesn't read from multiple partitions of a topic.
>
> **[2:56](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=176)** Here is a visual representation of a topic with four partitions.
>
> **[3:00](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=180)** You can see each partition is an independent queue.
>
> **[3:04](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=184)** Rights can be performed in parallel to multiple partitions so producers can write to partitions in a round-robin manner and if there are multiple producers, they can write in parallel to the different partitions.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=196)** Consumers can read from one or more partitions, but consumers that read from a single partition are guaranteed to get the events or messages in the order in which they were written.
>
> **[3:30](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=210)** We've already discussed that brokers are what we call the servers that make up the Kafka distributed processing cluster.
>
> **[3:38](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=218)** Every broker has a unique identifier and contains at least one partition of a topic.
>
> **[3:45](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=225)** We've seen that topics can be partitioned and you should know that topic partitions can have a replication factor.
>
> **[3:53](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=233)** Replication that is storing more than one copy of a partition makes events stored in topic partitions fault-tolerant and highly available.
>
> **[4:03](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=243)** If you're working with a production grade Kafka cluster, every topic that you have can be replicated across data centers or geo-regions.
>
> **[4:14](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=254)** This is how you improve your fault-tolerance and availability.
>
> **[4:18](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=258)** Just like the partitions, you typically specify the replication factor for a topic while creating that topic.
>
> **[4:26](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=266)** Now, let's say you have a replication factor of three.
>
> **[4:29](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=269)** That means for every partition in that topic, there will be three different copies.
>
> **[4:35](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=275)** Typically, a partition and its replica will not be on the same broker or the same server.
>
> **[4:39](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=279)** Partition replicas will be spread out over all the brokers in the cluster so that multiple brokers will have a copy of the same partition.
>
> **[4:49](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=289)** So if a broker goes down, the partition information that it contains will not be lost.
>
> **[4:55](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=295)** Here is an example of how partitions of a topic are replicated across brokers.
>
> **[5:01](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=301)** Here, different topics have different replication factors.
>
> **[5:04](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=304)** You can see topic one has a replication factor of three so its partitions are present on all three brokers.
>
> **[5:10](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=310)** Topic two also has a replication factor of three and its partitions are present on all three brokers, but topic three has a replication factor of two and its partitions are present only on two out of three brokers.
>
> **[5:23](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=323)** Based on the replication factor, a single partition will have a number of replicas.
>
> **[5:28](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=328)** Amongst the partition replicas, one replica is denoted the partition leader, and for one partition, there can be only one leader.
>
> **[5:37](https://www.linkedin.com/learning/tuning-kafka/an-overview-of-kafka?u=76281980&t=337)** The partition leader is responsible for receiving messages and ensuring that those events or messages are synced to the other replicas.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (3)
> **Analogies:** it's like (1), just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - before (1)

#### [Producers and consumers](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=1)** - [Instructor] Let's get a quick understanding of some of the configuration that you may specify for producers and consumers.
>
> **[0:07](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=7)** We've already discussed how they work.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=9)** Producers publish events to topics in a Kafka cluster and producers receive an acknowledgement to confirm that the message was indeed written out to the cluster.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=20)** Producers can choose how and when they want to receive acknowledgements in Kafka.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=25)** You can configure act levels in Kafka.
>
> **[0:27](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=27)** The configuration property acks equal to zero implies that the producer does not need an acknowledgement from the cluster.
>
> **[0:35](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=35)** In the case of broker failure, the message that the producer published to the cluster will be lost.
>
> **[0:41](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=41)** If the producer specifies acks equals to one, the producer receives an acknowledgement only from the partition leader of the topic.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=51)** Data will be lost if the broker that contains the partition leader goes down.
>
> **[0:57](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=57)** And finally, the producer can choose the configuration acks equal to all.
>
> **[1:02](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=62)** The producer will receive an acknowledgement from the partition leader to which the message was written and also all of the replicas after the message has been synced to the replicas.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=73)** This gives us the most reliable configuration for the producer.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=77)** With acks equal to all, we favor durability over availability or latency.
>
> **[1:23](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=83)** There are, of course other producer configuration properties that you can tweak and we'll explore that when we do the demos.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=89)** Let's turn our attention to consumers who subscribe to one or more topics in order to read messages from those topics.
>
> **[1:37](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=97)** We've discussed this earlier that when consumers always read from a single partition, they're guaranteed to receive the messages in the order that they were written.
>
> **[1:48](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=108)** If you have your consumers reading from multiple partitions they can do so in parallel.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=114)** However, Kafka then does not give you any kind of guarantee for the order in which you receive messages.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=121)** Now, when talking about consumers an important concept is that of a consumer group.
>
> **[2:06](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=126)** A consumer group is made up of a set of consumers who cooperate with one another in order to consume data from one or more topics.
>
> **[2:15](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=135)** Essentially, the partitions of the topics which a consumer group reads from are divided amongst the consumers in a group.
>
> **[2:23](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=143)** This serves as a kind of load balancing.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=147)** The consumers in a group will balance out the reading operation between themselves such that each consumer always reads from the same set of partitions.
>
> **[2:38](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=158)** The consumers in a group are not permanent members.
>
> **[2:42](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=162)** They might be new group members that arrive and old group members that leave.
>
> **[2:47](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=167)** In such situations, the partitions for a topic are reassigned amongst the current consumer group members and this is referred to as rebalancing the consumer group.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=178)** Rebalancing allows each member to receive a proportional share of partitions.
>
> **[3:04](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=184)** Now, for example, let's say a topic has four partitions and there is just one consumer in a consumer group, that consumer will read from all four partitions.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=193)** Now, if a new member arrives to that consumer group, the partitions will be split amongst the consumers.
>
> **[3:20](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=200)** Each consumer always reads from the same set of partitions.
>
> **[3:23](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=203)** Let's say we have four members, each consumer only reads from one partition.
>
> **[3:29](https://www.linkedin.com/learning/tuning-kafka/producers-and-consumers?u=76281980&t=209)** Now, if you have more consumers in a consumer group than number of partitions in a topic, well, you will have idle consumers which essentially are not performing any kind of read.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Kafka optimization theorem](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=1)** - [Instructor] In this movie, we'll discuss the Kafka optimization theorem that allows us a way to think about the various parameters along which you can optimize Kafka.
>
> **[0:12](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=12)** Optimization is all about trade-offs, and we learn to think about these trade-offs using the optimization algorithm.
>
> **[0:19](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=19)** Now, here are some optimization factors for you to play around with.
>
> **[0:23](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=23)** The first is latency, which is a measure of how long it takes to process a single message.
>
> **[0:29](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=29)** Another optimization factor is the throughput.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=32)** This is a measure of how many messages or what size of data can be processed in a certain time period.
>
> **[0:40](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=40)** Then we have durability or the consistency of a cluster.
>
> **[0:44](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=44)** That is, how robust is your system in the face of failure?
>
> **[0:48](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=48)** Are you able to recover the data in case everything fails?
>
> **[0:52](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=52)** And finally, we have availability.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=54)** How likely is the system to be up and running and responding to requests?
>
> **[0:59](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=59)** Optimization is never about moving in one direction, direction of improvement.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=64)** Optimization is all about trade-offs, and applications need to make trade-offs in order to achieve their optimization goals.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=73)** A distributed system is all about balancing opposing goals, for example, latency versus throughput.
>
> **[1:20](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=80)** If you want very low latency, it's hard to achieve a very high throughput at the same time, Another set of opposing goals, durability versus availability.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=89)** Higher availability means you're more tolerant of broker failure, and that will reduce the durability of the system.
>
> **[1:35](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=95)** These four factors are the main performance considerations for Kafka, and they lie along different axes.
>
> **[1:42](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=102)** Along the horizontal axis, we have the trade-off that lies between latency and throughput, and along the vertical axis, we have the trade-off between durability and availability.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=114)** The Kafka Optimization Algorithm or Optimization Theorem helps us learn how to think about these trade-offs and also think about the configuration properties of Kafka that move the trade-off along these axes.
>
> **[2:10](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=130)** Now, before we talk about making these optimization trade-offs, we need to discuss the CAP theorem.
>
> **[2:17](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=137)** The CAP theorem states that any distributed data store can only provide two out of the three following guarantees, consistency, availability, or partition tolerance.
>
> **[2:29](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=149)** It's not possible for a distributed store to provide all three guarantees, so people generally have to choose between consistency plus partition tolerance or availability plus partition tolerance.
>
> **[2:40](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=160)** In a distributed framework, partition tolerance is always required.
>
> **[2:46](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=166)** That is, you need to be tolerant of cluster node failures.
>
> **[2:50](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=170)** So the only choices you have are to prioritize between consistency plus partition tolerance or availability plus partition tolerance.
>
> **[2:59](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=179)** Now, this CAP theorem is something that you're likely familiar with.
>
> **[3:03](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=183)** The CAP theorem has been extended to the PACELC theorem.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=188)** Here is a representation of the PACELC theorem.
>
> **[3:12](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=192)** We can break this down.
>
> **[3:14](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=194)** Off to the left, we have the CAP theorem.
>
> **[3:17](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=197)** We always assume that partition tolerance is needed.
>
> **[3:21](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=201)** So your choices lie between availability and consistency.
>
> **[3:25](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=205)** The PACELC extension allows us to think about what else happens.
>
> **[3:30](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=210)** In the absence of a partition, what else, E, happens, and there, you choose between optimizing for latency or optimizing for consistency.
>
> **[3:40](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=220)** Why is this big picture important?
>
> **[3:43](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=223)** Every time you configure your Kafka cluster, a producer, or a consumer, you're actually making a choice between latency and throughput and durability and availability.
>
> **[3:54](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=234)** Now, how do the different factors affect this?
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=237)** Now, we've discussed that partitions of a topic represent the unit of parallelism in Kafka.
>
> **[4:02](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=242)** That's because reads and writes to partitions can be performed in parallel.
>
> **[4:07](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=247)** If you have a large number of partitions, that will increase the throughput of your cluster, but a very large number of partitions means more [[Metadata]] processing and can degrade end-to-end latency of messages.
>
> **[4:20](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=260)** We've also seen that you can configure the replication factor for topics.
>
> **[4:24](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=264)** Higher the number of replicas, more copies of the data stored, which means higher durability.
>
> **[4:31](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=271)** However, if you have a lower number of replicas, that means you can increase the availability of your cluster by tolerating broker failures.
>
> **[4:39](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=279)** You can tweak your producer configuration as well.
>
> **[4:42](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=282)** If your producer favors durability over availability, you can set acks = all.
>
> **[4:48](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=288)** You can require more acknowledgements.
>
> **[4:50](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=290)** Or if your producer favors availability over durability, you can require fewer acknowledgements.
>
> **[4:56](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=296)** Maybe set acks to 0.
>
> **[4:58](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=298)** There are consumer properties that you can tweak as well.
>
> **[5:01](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=301)** Consumers can favor higher consistency by committing message consumption offsets more often, or they can favor higher availability by increasing timeouts and tolerating broker failures for a longer time.
>
> **[5:15](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=315)** The Kafka optimization theorem specifies the axes along which you make trade-offs.
>
> **[5:20](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=320)** The theorem only specifies relationships between primitives and doesn't specify any absolute values of primitives that you should use.
>
> **[5:29](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=329)** It serves as a guide to show how changing a primitive influences the direction of optimization.
>
> **[5:36](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=336)** The Golden Ratio lays out some industry-wide best practices for the different configuration parameters.
>
> **[5:43](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=343)** For example, a best practice for your production grade Kafka cluster is that it should be spread across three availability zones with a replication factor of 3 and minimum number of in-sync replicas of 2, The default parameters for your Kafka brokers, producers, and consumers are all optimized for low latency with medium-sized batches, no wait time at producer, and no compression.
>
> **[6:08](https://www.linkedin.com/learning/tuning-kafka/kafka-optimization-theorem?u=76281980&t=368)** The default producer ack level is set to acks = to all to favor higher durability over availability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **Env Vars:** cap (5), pacelc (3)
> **CLI Commands:** make (2), node (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), picture (1)
> **Prerequisites:** configure (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [End-to-end latency in Kafka](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=1)** - [Instructor] Let's understand the various components that make up end-to-end latency in [[Apache Kafka]].
>
> **[0:07](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=7)** Now there are five different components of this latency.
>
> **[0:10](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=10)** The first is the produce time.
>
> **[0:12](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=12)** This is the time required to process the record and batching the records with other records in the Kafka producer.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=20)** We have the published time, that is the time taken to send the record from the Kafka producer to the broker and then appending the record to the leader replica log.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=32)** The commit time, is the time taken to commit the message that is write the message out to the leader as well as to the replicas, bringing all of the follower replicas in sync for fall tolerance.
>
> **[0:43](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=43)** The catch up time, is a time on the consumer end.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=46)** The time taken by the consumer catch up to the records offset in the log.
>
> **[0:52](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=52)** And finally, the [[Fetch]] time is also at the consumer end.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=55)** The time taken for a consumer to fetch the record from the broker.
>
> **[1:00](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=60)** The five components that make up Kafka end-to-end latency can be visualized using this diagram that you see here.
>
> **[1:08](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=68)** You can see the components of latency here at the bottom starting from the Kafka producer send, ending at the Kafka consumer poll to consume messages.
>
> **[1:18](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=78)** The produce time, is the time between when the application logic produces a record to when the produce request containing the record is sent to the leader partition of the topic.
>
> **[1:30](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=90)** The published time is the time between when the internal Kafka producer sends a produce request to the broker, to when the corresponding message gets appended to the partition leader's replica log.
>
> **[1:44](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=104)** The commit time refers to the time taken to replicate a message from the partition leader to all of the follower replicas.
>
> **[1:52](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=112)** And then we have the catch up time at the consumer end.
>
> **[1:55](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=115)** If the consumer is way behind on reading the messages published to a cluster, this catch up time will be longer.
>
> **[2:02](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=122)** For example, here you can see that the producer writes are way ahead of the consumer fetches.
>
> **[2:08](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=128)** So there are a large number of messages that the consumer needs to catch up to.
>
> **[2:13](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=133)** The catch up time will be higher in such situations.
>
> **[2:16](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=136)** A consumer subscribe to the topic will constantly poll the leader for more data.
>
> **[2:22](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-in-kafka?u=76281980&t=142)** Fetch time is the time taken to fetch the record from the partition leader, waiting for enough data to form the response till the consumer actually consumes the message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[Apache Kafka]] (1)
> **CLI Commands:** make (2), apache (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Install and set up Apache Kafka](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=1)** - [Instructor] Now that we've had a refresher on basic Kafka concepts and topics, let's get hands on.
>
> **[0:06](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=6)** In this movie, we are going to install and set up Kafka on our local machine.
>
> **[0:10](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=10)** Since this is an intermediate to Advanced Kafka course it's quite possible that you already have [[Apache Kafka]] running on your machine.
>
> **[0:17](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=17)** In which case, you can simply skip ahead to the following demos.
>
> **[0:21](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=21)** You can just skip over the install altogether.
>
> **[0:23](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=23)** Head over to kafka.[apache.org/downloads](https://apache.org/downloads), and here you'll find the Kafka binaries for all of the latest versions of Kafka.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=32)** You can see that version 3.4.0 is the latest at the time of this recording.
>
> **[0:38](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=38)** Now of course, if you want earlier versions, you can scroll down below, and they'll be accessible.
>
> **[0:42](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=42)** But we'll be working with version 3.4.0.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=46)** Select Kafka 2.12-3.4.0.
>
> **[0:50](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=50)** One that runs on [[Scala]] 2.12.
>
> **[0:53](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=53)** Because that's what I have on my machine.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=55)** And download the third .tgz file.
>
> **[0:58](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=58)** Once you have this file on your local machine, you can simply extract the contents of this card, .tgz file, double click on it or use some kind of unzip utility.
>
> **[1:08](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=68)** You can see that a folder named Kafka 2.12-3.4.0 is now available in my downloads folder.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=77)** I'll now switch over to the terminal window.
>
> **[1:19](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=79)** In order to set up Apache Kafka.
>
> **[1:21](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=81)** I'll run pwd to see my current working directory.
>
> **[1:24](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=84)** And you can see I'm in my home folder, /Users/loonycorn.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=89)** I'm going to create a new folder called Tools, right within my home folder, and that's where I'm going to store my Kafka binary.
>
> **[1:38](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=98)** So ls-l will show you that tools has been created in my current folder.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=103)** I'll now move the Kafka install folder over to the tools directly that I just created.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=111)** So simply move the entire contents of the folder over so that the Kafka installation is now under tools.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=117)** I'll now open up my bash profile in order to configure a few environment variables that I need in order to use and run Kafka.
>
> **[2:06](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=126)** Now within here, I'm going set up two environment variables, Kafka Home that points to the tools Kafka install folder.
>
> **[2:14](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=134)** And then I'm also going to add this Kafka home bin subfolder to the path environment variable.
>
> **[2:22](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=142)** Once Kafka has been configured on your path, you should be able to run scripts that exist within the Kafka install directory from your command line which is exactly what I want.
>
> **[2:31](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=151)** Go ahead, save the file, and now let's run source and the bash profile file, so that these new environment variables are part of this current terminal.
>
> **[2:40](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=160)** And next, let's bring up zookeeper.
>
> **[2:44](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=164)** Zookeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.
>
> **[2:53](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=173)** Zookeeper is used to manage the Kafka brokers that you run.
>
> **[2:57](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=177)** Run the zookeeper server, start.sh script file, and point to zookeeper.properties which is under KAFKA_HOME/config.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=188)** This will bring up the zookeeper server with the default configuration properties set up in zookeeper.properties.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=196)** Next, I'm going to bring up a single broker for my Apache Kafka cluster.
>
> **[3:22](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=202)** And this I do by running the Kafka server start script and pointing to server properties under KAFKA_HOME/config.
>
> **[3:30](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=210)** This will bring up a single broker running with the default configuration.
>
> **[3:35](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=215)** Now for most of this course, we'll run a Kafka cluster with three brokers.
>
> **[3:40](https://www.linkedin.com/learning/tuning-kafka/install-and-set-up-apache-kafka?u=76281980&t=220)** But for now to test our Kafka installation, I'm going to run a cluster with just a single broker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (3), [[Scala]] (1)
> **Prerequisites:** install (5), set up (4), configure (1)
> **Versions:** 2.12 (3), version 3 (2), 4.0 (2), 3.4.0 (2)
> **CLI Commands:** apache (4), find (1), unzip (1), ls (1)
> **Tools:** terminal (2), bash (2), command line (1)
> **Env Vars:** kafka_home (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is an  (1), is a  (1)

#### [Publish and consume messages using console scripts](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=1)** - [Instructor] Now I'm going to quickly verify that my Kafka installation is working as expected.
>
> **[0:05](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=5)** I'm going to run a console producer, and have it produce and publish messages to a topic, and consume those messages using a console consumer.
>
> **[0:14](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=14)** First, let's create a new topic.
>
> **[0:17](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=17)** I use the kafka-topics.sh script with the dash dash create flag to create a new topic called loony_topic.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=26)** The bootstrap-server flag points to localhost-1992, which is where my Kafka broker is running.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=33)** Once you hit Enter, a new topic will be created.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=36)** You can see the little warning there that you can ignore.
>
> **[0:39](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=39)** In Kafka, you should either use underscores or periods for topics, and not both.
>
> **[0:43](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=43)** We'll stick with underscores.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=45)** So there's absolutely nothing to worry when you see this little warning.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=49)** I'll now confirm that the topic has been created successfully by running the Kafka topics script with the dash dash list flag to see the list of topics available on the current cluster.
>
> **[1:00](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=60)** And you can see the single topic there, loony_topic, the one that I just created.
>
> **[1:05](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=65)** If you want to know more about the topic, the number of partitions that it has, its replication factor, run the kafka-topics script with the dash dash describe flag.
>
> **[1:15](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=75)** The topic is loony_topic.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=77)** And here, you can see that the partition count is one and the replication factor is one.
>
> **[1:23](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=83)** This is the default configuration for topics in our cluster.
>
> **[1:26](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=86)** Now that we've successfully created a topic, on the left-terminal window, I'm going to run a Kafka producer to publish messages to loony_topic.
>
> **[1:36](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=96)** I use the kafka-console-producer script.
>
> **[1:39](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=99)** The topic is loony_topic.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=101)** You need to specify the bootstrap-server.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=103)** That is localhost-1992.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=105)** That's where our Kafka broker is running.
>
> **[1:48](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=108)** Go ahead and run the console producer on the left-terminal window.
>
> **[1:52](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=112)** And you can type in your messages on the left just a bit.
>
> **[1:56](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=116)** Now, on the right-terminal window, I'm going to run a kafka-console-consumer.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=121)** The consumer here will subscribe to the loony_topic.
>
> **[2:05](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=125)** That's what I've specified using the dash dash topic flag.
>
> **[2:09](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=129)** And it'll consume messages from that topic.
>
> **[2:11](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=131)** Now that I have both the producer as well as the consumer running, I'm going to type in a new message on the console producer.
>
> **[2:19](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=139)** This is "Welcome to Kafka!"
>
> **[2:22](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=142)** And you can see as a hit Enter, the consumer will almost immediately receive the message.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=147)** And "Welcome to Kafka!"
>
> **[2:28](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=148)** is printed out on the right-terminal window.
>
> **[2:31](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=151)** Well, our very first message went through successfully.
>
> **[2:34](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=154)** Let's check whether the second message also gets delivered.
>
> **[2:37](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=157)** Does the second message get delivered?
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=159)** And yes, indeed it does.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/publish-and-consume-messages-using-console-scripts?u=76281980&t=161)** We've successfully set up our Kafka cluster installation, and we've also tested Kafka that it successfully publishes messages to a topic, and is able to consume messages from that topic.

> [!info]- Semantic Content
>
> **Code Identifiers:** loony_topic (6)
> **Tools:** terminal (4)
> **Warnings:** warning (2)
> **File Paths:** kafka-topics.sh (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Tuning Kafka Producers

[↑ Back to Table of Contents](#table-of-contents)

#### [Running a Kafka cluster with three brokers](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=1)** - [Instructor] For most of the demos in this course, unless I specify otherwise, we'll be running a more real-world Kafka cluster, a cluster that'll have three brokers running.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=11)** Now, real-world Kafka clusters can have thousands of brokers.
>
> **[0:15](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=15)** That depends on how many messages you want to process and the scale of your distributed processing.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=20)** However, a minimum of three brokers is recommended and they usually run on different data centers and different geo regions.
>
> **[0:28](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=28)** We'll just be running all of these brokers on our local machine.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=32)** Now, in order to configure and set up three separate brokers within the Kafka install folder, I'm going to head into the config directory, which is where all of the configuration files for the different Kafka components are available.
>
> **[0:47](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=47)** I'm going to drag the contents of this directory into Sublime Text so that we can view these configuration files.
>
> **[0:52](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=52)** You can see all of the .properties files over to the left.
>
> **[0:56](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=56)** Observe here that I have three server properties files, server-0.properties, server-1.properties and server-2.properties.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=67)** These server properties file correspond to the three brokers that I plan to run as a part of my cluster.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=73)** Currently, each of these server properties file have the default configuration.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=77)** I'm going to tweak these to run three unique brokers.
>
> **[1:21](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=81)** Here's what server-0.properties look like.
>
> **[1:24](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=84)** On line 24, you can see the property that sets the ID of the broker.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=89)** Each broker needs to have a unique identifier.
>
> **[1:32](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=92)** Now, this is the very first broker.
>
> **[1:34](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=94)** I'm going to leave the broker ID equal to zero.
>
> **[1:38](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=98)** Now, there are a few other configuration properties that we need to tweak in order to run a unique broker.
>
> **[1:44](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=104)** Notice that on line 34, we have a listeners property.
>
> **[1:48](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=108)** This is where you configure the port that a particular broker listens to.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=111)** Each of our three brokers will listen to a different port and this particular broker will listen to localhost That is 127.0.0.1, port 9092, and this is the port that will be advertised by the broker as well.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=127)** Now, you don't really need to set the advertised listeners property.
>
> **[2:10](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=130)** It'll just be equal to the listener's property if you don't set it.
>
> **[2:14](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=134)** All of the logs generated by this broker will be stored on a tmp folder in your local machine.
>
> **[2:19](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=139)** Notice the log.dirs property is set to /tmp/kafka-logs.
>
> **[2:26](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=146)** I'm going to change this for broker zero and set it to kafka-logs-0 so there is a separate folder for the logs of each of our brokers.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=155)** Now, these are the only changes that I make to server-0.properties.
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=159)** The other configuration settings remain the same.
>
> **[2:42](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=162)** Now let's head over and make the same set of changes to server-1.properties.
>
> **[2:46](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=166)** Notice broker ID is zero.
>
> **[2:48](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=168)** Well, we can't have two brokers with the same ID, so I'm going to change the broker ID for this broker to be equal to one.
>
> **[2:56](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=176)** Next, on line 34, we have the port on which this particular broker will be listening.
>
> **[3:01](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=181)** Remember, this needs to be a unique port.
>
> **[3:03](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=183)** You can't have all the brokers listening on the same port.
>
> **[3:06](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=186)** I've set it to localhost 9093, and the advertised listeners I've also set for the same port, localhost, that is 127.0.0.1:9093.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=199)** What port numbers you choose, that's up to you.
>
> **[3:22](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=202)** But remember, all of these port numbers have to be unique.
>
> **[3:25](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=205)** Next, let's change the log.dirs to be kafka-logs-1.
>
> **[3:30](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=210)** So kafka-logs-1 will contain the broker logs from broker with ID one.
>
> **[3:36](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=216)** Make sure you save all of these changes and let's head over to server-2.properties.
>
> **[3:40](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=220)** This is our third broker.
>
> **[3:42](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=222)** Again, the default broker ID is zero and this is something that we need to change.
>
> **[3:47](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=227)** We've already used zero and one so I'm going to set this broker to have the ID equal to two.
>
> **[3:53](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=233)** You can have your brokers have ID 100, 101, 102 if you want to.
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=237)** Next I set the port on which this particular broker will listen.
>
> **[4:01](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=241)** This is localhost:9094 and I set the advertised listeners to be equal to the same port.
>
> **[4:08](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=248)** So we have three different brokers with three different IDs listening on three different ports and logging to three different files.
>
> **[4:14](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=254)** This broker will log to kafka-logs-2.
>
> **[4:18](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=258)** Make sure all three files have been saved and let's head over to our terminal window and I'm going to restart Zookeeper.
>
> **[4:26](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=266)** Just a heads up that behind the scenes, I've gone ahead and killed the previous Zookeeper server that I had running.
>
> **[4:32](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=272)** I stopped it and I'm now going to restart it pointing to zookeeper.properties.
>
> **[4:38](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=278)** Now with Zookeeper running, I'm going to open up a new terminal window where I run the first broker in my cluster and this will get its properties from server-0.properties under KAFKA_HOME/config.
>
> **[4:52](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=292)** Use kafka-server-start to start this broker and get it running.
>
> **[4:56](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=296)** Well, that's great.
>
> **[4:57](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=297)** The first broker of our cluster is up.
>
> **[5:00](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=300)** Let's switch over to another terminal window and once again, I use kafka-server-start to start up the second broker getting its configuration from server-1.properties.
>
> **[5:11](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=311)** This is the broker with ID one.
>
> **[5:14](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=314)** Once this is running, switch over to yet another terminal window or a tab and use kafka-server-start to start the third broker.
>
> **[5:24](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=324)** Server-2.properties is where its configuration is located.
>
> **[5:28](https://www.linkedin.com/learning/tuning-kafka/running-a-kafka-cluster-with-three-brokers?u=76281980&t=328)** At this point in time, we have a Kafka cluster with three brokers running.

> [!info]- Semantic Content
>
> **Tools:** terminal (4), sublime (1)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (2), set up (1), install (1)
> **Ports:** port 9092 (1), :9093 (1), :9094 (1)
> **Versions:** 127.0.0 (2)
> **URLs:** [localhost:9094](https://localhost:9094) (1)
> **Env Vars:** kafka_home (1)
> **Definitions:** is a  (1)

#### [Running basic producer performance tests](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=1)** - [Instructor] Now that we have our three broker Kafka cluster running, let's create a topic that we can use for our performance testing.
>
> **[0:08](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=8)** So I'm going to create a new topic.
>
> **[0:10](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=10)** We won't work with the loony topic that I had set up earlier I use the Kafka topics script to create a topic called performance_tuning.
>
> **[0:19](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=19)** The bootstrap server that I've used to create this topic is local host 1992.
>
> **[0:24](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=24)** Just a heads up that the bootstrap server that you specify is the URL of one or more of the Kafka brokers that you have in your cluster.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=33)** This is what the script will use to [[Fetch]] the initial [[Metadata]] about the cluster, metadata for topics, partitions, et cetera.
>
> **[0:41](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=41)** You may want to specify multiple broker URLs for the bootstrap server now that we have multiple brokers, but that's only needed if you're worried that one of the brokers might fail, in which case the bootstrap server will simply be one of the other brokers in your list.
>
> **[0:57](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=57)** Once I hit enter, this new topic will be created.
>
> **[1:00](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=60)** I'm choosing to use underscores here so you can ignore this warning.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=64)** Let's run a list command to ensure that the topic that we've created is now available, and here you can see that my Kafka cluster contains two topics the loony topic that we had created earlier, and this new topic, [[Performance Tuning]].
>
> **[1:18](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=78)** Just a heads up that this performance tuning topic was created with a default number of partitions and a default replication factor, both set to one.
>
> **[1:28](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=88)** Now, in this chapter, I'm going to be tweaking the configuration for our Kafka producers and then running a number of performance tests to see how our cluster performs based on those configuration values.
>
> **[1:40](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=100)** In order to test our Kafka producers, I'm going to use this script that is available, along with our Kafka install, the kafka-producer-perf-test.sh.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=111)** You can pass in a number of configuration flags to this script to actually tweak the payload, the number of records, and a whole bunch of options.
>
> **[2:00](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=120)** - -help will show you all of the options that this script accepts.
>
> **[2:05](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=125)** Let's take a look at some of the output here.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=127)** Notice the --topic config flag that you can use to have the script produce messages to a particular topic.
>
> **[2:16](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=136)** If you scroll down a bit, you'll see that we have a flag called producer props.
>
> **[2:21](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=141)** This is what you can use to configure the producer and whatever you specify within producer props takes precedence over producer config.
>
> **[2:30](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=150)** The producer.config flag is what you can use to point the configuration file of the producer to use for this performance script.
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=159)** The record size flag is what you can use to specify the size of the messages that you want the producer to produce.
>
> **[2:47](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=167)** Now that we know what script we are going to use to test the producer's performance, let's take a look at the producer.properties file.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=174)** This is once again in the Kafka install folder /config.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=178)** Our initial run of the script will use the default producer properties, so that we have a baseline for all of the metrics for the producer.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=188)** Notice here on line 21, the bootstrap server is set to local host 9092.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=193)** Remember, the bootstrap server is the URL of one or more brokers.
>
> **[3:18](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=198)** If you wish to specify additional brokers here, local host 1993, 1994, you can, that's really only needed if you're worried that one of the brokers may be down, and the client should use another broker to connect to.
>
> **[3:32](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=212)** We'll stick with just one broker specified here in this list.
>
> **[3:35](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=215)** That's the default, and all of the other properties are also set to their default.
>
> **[3:41](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=221)** There's absolutely no change.
>
> **[3:42](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=222)** The first run of the Kafka performance test will be a baseline run.
>
> **[3:47](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=227)** Back to the terminal window, we are ready to run our benchmarking producer performance test against a producer with the default configuration.
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=237)** I invoke kafka-producer-perf-test.sh.
>
> **[4:01](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=241)** The topic to use to perform the performance testing is our performance_tuning topic.
>
> **[4:07](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=247)** Partition is equal to one, replication factor, also, one, the number of records to test performance will be 25,000.
>
> **[4:15](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=255)** This is something you can configure.
>
> **[4:16](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=256)** The size of each record is one kilobyte or 1024 bytes.
>
> **[4:21](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=261)** The throughput flag is set to minus one, which means that the producer will produce messages as quickly as possible.
>
> **[4:28](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=268)** There is no throttling of the messages that the producer produces.
>
> **[4:32](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=272)** The producer.config flag points to the producer properties that we want to use to actually run this performance test.
>
> **[4:42](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=282)** The output of this performance test is not very human readable which is why I have the pipe operator at the very end of the line after producer properties, and then I run the output through a JQ command so that it's in a more human readable and easy to use format.
>
> **[4:59](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=299)** Let's go ahead and run our baseline test for the default producer.
>
> **[5:04](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=304)** And there you can see the value.
>
> **[5:05](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=305)** A total of 25,000 records for produced and sent.
>
> **[5:10](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=310)** About 14,534 records per second were sent.
>
> **[5:14](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=314)** The average latency of the default producer on the topic with the default configuration is about 411.87 millisecond.
>
> **[5:23](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=323)** The 50th percentile or the median is 450 milliseconds and then you have all of the other values as well.
>
> **[5:28](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=328)** Max latency, 99th percent latency, and so on.
>
> **[5:32](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=332)** You can also see the throughput in megabytes per second.
>
> **[5:35](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=335)** It's 14.19 MB per second.
>
> **[5:39](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=339)** These are the default metrics that we'll be paying the most attention to when we tweak our producer.
>
> **[5:44](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=344)** You can actually choose to get a much more granular list of metrics using the kafka-producer-perf-test by adding an additional flag.
>
> **[5:53](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=353)** Notice the print metrics flag that I have at the very end.
>
> **[5:58](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=358)** That's the flag that will give us very granular metrics for our producer's performance.
>
> **[6:02](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=362)** Notice a bunch of additional details that you can see here.
>
> **[6:06](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=366)** The basic set of metrics that we saw earlier are in the first two lines, 25,000 records sent, the latencies at the various percentiles, and then we have a bunch of additional metrics.
>
> **[6:17](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=377)** You can see batch size average.
>
> **[6:19](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=379)** The size of the batch of records sent in one go by the producer was 15,552 roughly.
>
> **[6:27](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=387)** And as you scroll down here, you'll see a bunch of additional granular details.
>
> **[6:31](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=391)** We don't really need all of this information as we tune our Kafka producer.
>
> **[6:36](https://www.linkedin.com/learning/tuning-kafka/running-basic-producer-performance-tests?u=76281980&t=396)** For the most part, we'll just stick with the basic latency and throughput [[Statistics]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Performance Tuning]] (2), [[Fetch]] (1), [[Statistics]] (1)
> **Prerequisites:** install (2), configure (2), set up (1)
> **File Paths:** kafka-producer-perf-test.sh (2), producer.config (2)
> **Warnings:** heads up (2), warning (1)
> **Code Identifiers:** performance_tuning (2)
> **Env Vars:** url (2)
> **Versions:** 411.87 (1), 14.19 (1)
> **UI Navigation:** scroll down (2)

#### [Effects of partitioning on producers](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=1)** - [Instructor] In this demo, we'll see the effects of partitioning on producer performance.
>
> **[0:06](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=6)** Now a topic partition is a unit of parallelism In Kafka.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=11)** Messages sent to different partitions on a Kafka topic can be sent in parallel by producers, and they can be written in parallel to the different brokers across which the partitions are spread.
>
> **[0:24](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=24)** In addition, messages sent to different partitions of a topic can also be read in parallel by consumers.
>
> **[0:30](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=30)** Therefore, it's pretty obvious that the more partitions that you have for a particular topic leads to a higher throughput through your Kafka cluster.
>
> **[0:40](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=40)** Purely from a throughput perspective, you should be able to get the complete maximum possible throughput from your Kafka cluster with about 10 partitions to a topic.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=51)** Now if you have more partitions, that's when latency starts to degrade.
>
> **[0:56](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=56)** Now I'm going to create three different topics here, each with a different number of partitions.
>
> **[1:01](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=61)** Here is the first topic called partitions_1, and you can see from the --partitions flag that it has exactly one partition that'll be stored on a single broker.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=73)** In order to focus our comparison on the effects of partitioning and not replication, I'm going to set the replication factor for all of the topics that I now create to be equal to one as I've done here.
>
> **[1:24](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=84)** Go ahead and create this topic called partitions_1.
>
> **[1:28](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=88)** Now I'm going to create another topic called partitions_10, and this will have 10 partitions.
>
> **[1:35](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=95)** You can see that in the partitions flag, the replication factor is still one.
>
> **[1:39](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=99)** I'm not going to change that.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=101)** Go ahead and create this topic called partitions_10.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=105)** As I mentioned earlier, with about 10 partitions, you should be able to extract the maximum possible throughput from any kind of Kafka cluster.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=113)** Here I've created a topic with 100 partitions.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=117)** This is clearly overkill as far as performance is concerned.
>
> **[2:00](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=120)** Now it's quite possible that you might have a topic with 100 partitions because your application logic needs 100 partitions, but as far as performance is concerned, 100 partitions is too much.
>
> **[2:13](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=133)** Again, replication factor is one.
>
> **[2:15](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=135)** Go ahead and create this topic as well.
>
> **[2:18](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=138)** I'm going to quickly run the list command to ensure that all of these topics have been successfully created, and you can see that they have, partitions_1, partitions_10, and partitions_100.
>
> **[2:30](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=150)** Now I'm going to run three different performance tests testing the topics with different partitions.
>
> **[2:37](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=157)** There is a lot to take in and parse here on screen, but I'll break it down.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=161)** I've run three sets of tests in one go so that we can compare the effects of partitioning all on one screen.
>
> **[2:49](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=169)** Let's take a look at the first producer perf test starting from the very top.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=174)** This runs the producer performance test on the topic with one partition.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=178)** Notice the topic is partitions_1.
>
> **[3:02](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=182)** We send 50,000 records with a record size of 1024.
>
> **[3:06](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=186)** Throughput is minus one. It's not throttled.
>
> **[3:09](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=189)** I've set acks equal to all for the producer properties.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=193)** This is so that I get acknowledgements from the partition leader and all of the replicas for any message that I send.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=199)** I'm going to use acks equal to all for all of the producer performance tests so that we are comparing apples to apples.
>
> **[3:26](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=206)** The producer config that I'll use is the default producer.properties.
>
> **[3:31](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=211)** Notice the results right there.
>
> **[3:32](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=212)** 50,000 records sent, an average of 21,168 records per second, and notice the throughput, 20.67 megabytes per second.
>
> **[3:43](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=223)** With one partition, this is the throughput that we were able to achieve.
>
> **[3:47](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=227)** The average message latency seems to be rather high, and I think it's unnaturally higher, 384.24 millisecond average latency.
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=237)** Next, I'll scroll down a bit and we look at the same results for the messages sent to the topic with 10 partitions.
>
> **[4:04](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=244)** Notice the topic here, partitions_10.
>
> **[4:08](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=248)** The [[Representational State Transfer (REST)|rest]] of the properties are exactly the same as in the previous test.
>
> **[4:12](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=252)** Num records, record size, throughput, producer props, and producer config.
>
> **[4:18](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=258)** And you can see the results have significantly improved when we used 10 partitions instead of one.
>
> **[4:24](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=264)** Notice the number of records per second, 22,573 records per second, higher throughput than what we had previously.
>
> **[4:33](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=273)** You can see the throughput in megabytes per second has also improved, 22.04 megabytes per second as opposed to 20.67 earlier.
>
> **[4:43](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=283)** Now the average latency also seems to have fallen.
>
> **[4:47](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=287)** The average latency is now 7.19 milliseconds.
>
> **[4:50](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=290)** Now remember, this is the latency for the producer.
>
> **[4:52](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=292)** This is not the end-to-end latency.
>
> **[4:56](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=296)** Since the producer was pushing messages onto the topic partitions in parallel, it's quite possible that's why the average latency has fallen.
>
> **[5:03](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=303)** Let's take a look at the last test that we ran here below on the topic with 100 partitions.
>
> **[5:10](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=310)** Notice the --topic flag set to partitions_100.
>
> **[5:14](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=314)** The remaining properties are the same, num records, record size, throughput, producer props, and producer config.
>
> **[5:20](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=320)** You can see that the throughput is still high, 22,925 records per second, but it's not much of an improvement over the partitions_10, which had 22,573 records per second.
>
> **[5:33](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=333)** You can see that the throughput in megabytes, 22.39 megabytes per second, is not that much of an improvement over the 22.04 megabytes per second that we got with 10 partitions.
>
> **[5:44](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=344)** As far as the average latency is concerned, it's a little higher at 8.61 milliseconds, so nothing that we can really read into here.
>
> **[5:52](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=352)** What's pretty clear here is that increasing the number of partitions greatly improved the throughput of the producer.
>
> **[5:59](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=359)** Now before we go on to our next demo, I'm going to get rid of these extra topics that we had created.
>
> **[6:04](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=364)** I'm going to delete the topic partitions_1 and I'm going to get rid of partitions_10 and partitions_100 as well.
>
> **[6:13](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=373)** Just a note here, remember that too many partitions may have a negative effect on end-to-end latency.
>
> **[6:19](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=379)** More partitions per topic lead to less batching on producers and more partitions per broker lead to more overhead per replica follower [[Fetch]] request.
>
> **[6:30](https://www.linkedin.com/learning/tuning-kafka/effects-of-partitioning-on-producers?u=76281980&t=390)** Having too many partitions may lead to large commit times on the brokers and also a high CPU load, thus resulting in more queuing delays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1)
> **Versions:** 20.67 (2), 22.04 (2), 384.24 (1), 7.19 (1), 22.39 (1)
> **Definitions:** is a  (2)
> **Env Vars:** cpu (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Effects of replication on producers](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=1)** - [Instructor] Replicas determine the number of copies, including the partition leader, for each topic partition in a cluster.
>
> **[0:07](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=7)** Now, with more replicas, you are obviously increasing the durability of your data.
>
> **[0:14](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=14)** On the other hand, if you use fewer replicas, this often reduces data durability, but in some circumstances can increase the availability of the cluster to producers, or consumers, by tolerating more broker failures.
>
> **[0:28](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=28)** In this demo, all other factors remaining the same, we'll see how the number of replicas affects the producer latency.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=36)** Once again, I'm going to create three different topics that we'll use and this time the topics will differ only based on the replication factor.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=45)** I'm going to create all of the topics with the same default number of partitions equal to one, but the replication factor of topic rf_1 you can see is one.
>
> **[0:56](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=56)** I'll now create a second topic called rf_2 and this topic will have a replication factor of two.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=64)** That means the copy of the partition for this topic, there's just one partition once again, will be stored on two Kafka brokers.
>
> **[1:12](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=72)** Now, you know that our cluster has three Kafka brokers running, so I'm going to set up one more topic, rf_3.
>
> **[1:20](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=80)** Again, with just one partition, that's the default, but its replication factor is set to three, so the copy of its only partition will be present across all three brokers in our Kafka cluster.
>
> **[1:34](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=94)** Once again, I'm going to run the same producer performance test on all three topics and we'll compare their performance all on the same screen.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=103)** Now, let me break this down.
>
> **[1:44](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=104)** There's a lot going on here.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=105)** You can see that the first kafka-producer-perf-test is run on the topic rf_1, which has a replication factor of one.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=114)** The num-records sent is 25,000 records, size 1024, throughput, no throttling, minus one.
>
> **[2:00](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=120)** Producer-props, I've set acks=all, I've done this across all three performance tests.
>
> **[2:06](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=126)** We need acknowledgements from all replicas and the producer config is the default producer.properties.
>
> **[2:12](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=132)** For our topic with the replication factor of one, the records per second is 13,888, roughly, and in terms of throughput in MB per second, it's 13.56 megabytes per second, and the average latency of the producer is 353.99.
>
> **[2:33](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=153)** Now, let's compare this with the other two topics.
>
> **[2:38](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=158)** Now, you can see the kafka-producer-perf-test run on the topic rf_2, all of the other properties are exactly the same.
>
> **[2:45](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=165)** Notice the throughput, 7,666 records per second, so it has fallen drastically from about 13,888.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=174)** Megabytes per second has also fallen.
>
> **[2:56](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=176)** It's 7.49 as opposed to 13.56 earlier and the average latency is higher, 834.05 milliseconds.
>
> **[3:05](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=185)** Let's turn our attention to the topic with replication factor three.
>
> **[3:10](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=190)** Notice kafka-producer-perf-test topic rf_3, remaining properties are the same.
>
> **[3:15](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=195)** Notice the records per second, 6,218.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=199)** The throughput 6.07 megabytes per second.
>
> **[3:22](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=202)** The throughput has fallen even further and the latency has increased even further.
>
> **[3:27](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=207)** Average latency at 1196.13 millisecond, as compared to 834 with two replicas and about 353 with one replica.
>
> **[3:37](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=217)** We know that increasing the number of replicas increases the durability of our cluster, but with the producer configuration settings acks=all, which is what is recommended for better data durability, increasing the number of replicas actually increases the latency on the producer end and it also reduces the throughput.
>
> **[3:58](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=238)** Once again, I'm going to delete all of the topics that we created for this particular demo, so that I don't have unnecessary topics lying around cluttering up my Kafka cluster.
>
> **[4:09](https://www.linkedin.com/learning/tuning-kafka/effects-of-replication-on-producers?u=76281980&t=249)** I'm going to delete topics rf_1, rf_2 and rf_3.

> [!info]- Semantic Content
>
> **Versions:** 13.56 (2), 353.99 (1), 7.49 (1), 834.05 (1), 6.07 (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tuning producer acks](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=1)** - [Instructor] When a producer publishes a message to a topic, it can choose whether it wants to receive acknowledgements for the message that it has published.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=9)** These are the producer acks or acknowledgements.
>
> **[0:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=13)** Now based on what kind of acknowledgement a particular producer wants from the broker, the producer waits for those acknowledgements before publishing more messages.
>
> **[0:24](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=24)** Now the acknowledgements come from the brokers holding that topic's partition and may also come from a replicas.
>
> **[0:31](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=31)** Now this is the configuration that we are going to set up.
>
> **[0:35](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=35)** Now a producer could choose to say acks equal to zero which basically means that the producer does not require an acknowledgement at all.
>
> **[0:44](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=44)** The publisher just publishes a message to a partition and then says you know what?
>
> **[0:48](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=48)** Go ahead, I don't need an acknowledgement.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=49)** I'm going to go ahead and publish my other messages if I need to.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=54)** On the other hand, if the acks configuration for the producer is set to one, the producer has then chosen to receive an acknowledgement only from the partition leader.
>
> **[1:05](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=65)** That is the broker that holds the partition leader of the replicas to which the message is first published.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=73)** On the other hand, if the producer configuration is set to acks equal to all, this means that the producer wants an acknowledgement from all of the replicas to which the message has been published.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=87)** So the message published to the partition leader has to be synced to the minimum number of in-sync replicas before an acknowledgement is received by the producer.
>
> **[1:36](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=96)** Configuring how the acknowledgement should be received allows a producer to state their preference for durability or availability.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=105)** A producer that favors durability over availability can demand a higher number of acknowledgements by specifying acks equal to all.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=113)** A lower number of acknowledgements, lower than the min in sync number of replicas, could lead to a higher availability from the producer point of view by tolerating a higher number of broker failures.
>
> **[2:05](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=125)** But of course, this means the data durability will be much lower in the case of broker failures because of catastrophic events.
>
> **[2:14](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=134)** Just a heads up here that in earlier versions of Kafka, before Kafka three, the default producer had acks set to one which means only the partition leader needed to send an acknowledgement.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=147)** But after Kafka three, there has been a preference for durability rather than availability or low latency and the default is acks equal to all.
>
> **[2:36](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=156)** Now with this in mind, let's get rid of our old [[Performance Tuning]] topic that had just one partition and one replica.
>
> **[2:43](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=163)** I'm going to recreate this performance tuning topic with a replication factor of three.
>
> **[2:49](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=169)** I have three brokers running in the cluster.
>
> **[2:51](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=171)** The replication factor of three will store the one partition that this topic has across the three brokers.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=178)** Configuring this replication factor to something more than one will really allow us to see the effect of the acks configuration from the broker's point of view.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=188)** I'm now going to run the Kafka producer perf test against these performance tuning topics with three different producer configuration.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=196)** Acks equal to zero, acks equal to one, and acts equal to all.
>
> **[3:20](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=200)** Now we'll see all of the results on the same screen, so let's take a look.
>
> **[3:25](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=205)** At the very top of the screen, you can see the first run of the Kafka producer perf test.
>
> **[3:31](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=211)** We send messages to the performance tuning topic.
>
> **[3:33](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=213)** Remember it has a replication factor of two, partitions equal to one.
>
> **[3:37](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=217)** Num records 25,000, record size one kilobyte.
>
> **[3:41](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=221)** Throughput minus one, so it's not- Notice the producer props that I have specified.
>
> **[3:46](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=226)** I've set acks equal to zero indicating that this particular producer does not need acknowledgements.
>
> **[3:52](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=232)** The [[Representational State Transfer (REST)|rest]] of the producer config will be from the default producer.properties file.
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=237)** Remember the producer-props flag, the properties that you specify there take precedence over the property specified in the flag producer.config.
>
> **[4:08](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=248)** Let's take a look at how this producer performed.
>
> **[4:11](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=251)** You can see that 25,000 records were sent.
>
> **[4:14](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=254)** The number of records per second is 8,716.
>
> **[4:17](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=257)** The throughput is 8.5 megabytes per second.
>
> **[4:21](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=261)** Notice the average latency of the producer, 587 milliseconds approximately.
>
> **[4:27](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=267)** If you look over to the right, the 50th percentile latency of the producer is 651 milliseconds.
>
> **[4:34](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=274)** I'm going to scroll down a bit so that the latencies and the throughput for all three runs of the producer perf test are visible on screen at the same time.
>
> **[4:43](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=283)** At the very top, lines two and three, we have the information for acks equal to zero.
>
> **[4:48](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=288)** That's what we just looked at.
>
> **[4:50](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=290)** Next, let's take a look at acks equal to one.
>
> **[4:53](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=293)** I've run the Kafka producer perf test on the performance tuning topic.
>
> **[4:57](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=297)** Notice the producer props where acks has been set to one.
>
> **[5:01](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=301)** Now just below we have its latency and throughput stats.
>
> **[5:04](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=304)** Notice its records per second.
>
> **[5:07](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=307)** 7,598 records per second as opposed to 8,716 earlier.
>
> **[5:12](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=312)** You can see the throughput has fallen.
>
> **[5:14](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=314)** The throughput in megabytes is 7.42 megabytes per second.
>
> **[5:18](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=318)** For acks equal to zero, we had 8.51 megabytes per second and then we have the average latency for the producer which has now shot up.
>
> **[5:27](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=327)** It's 999 milliseconds on average as opposed to 587 milliseconds earlier.
>
> **[5:34](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=334)** The latency at the 50th percentile over to the right, you can see is 1,127 milliseconds as opposed to just 651 milliseconds with acks equal to zero.
>
> **[5:45](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=345)** When you compare acks equal to one with acks equal to zero, throughput has fallen, latency has increased.
>
> **[5:51](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=351)** Let's look at acks equal to all.
>
> **[5:53](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=353)** That is our last run.
>
> **[5:55](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=355)** Notice the producer-props flag set to acks equal to all.
>
> **[6:00](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=360)** Notice the records per second, it's 5,492.
>
> **[6:03](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=363)** It's really fallen from 7,598 which is what it was with acks equal to one.
>
> **[6:09](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=369)** Notice the throughput, 5.36 megabytes per second.
>
> **[6:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=373)** Again, it has fallen as compared to acks equal to one where it was 7.42.
>
> **[6:18](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=378)** The average latency has shot up once again.
>
> **[6:21](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=381)** 1,331 milliseconds on average and the latency at the 50th percentile is 1,391 milliseconds.
>
> **[6:29](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-acks?u=76281980&t=389)** Overall when a producer chooses acks equal to all, it's willing to trade off latency and availability for better durability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Tuning]] (5), [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** 7.42 (2), 8.5 (1), 8.51 (1), 5.36 (1)
> **Definitions:** basically means (1), means that (1)
> **File Paths:** producer.config (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** heads up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tuning producer compression](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=1)** - [Instructor] Now so far we've been sending messages from our producer with no compression at all and in this demo, we'll see how we can tune the compression property for our producer.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=11)** By default, Kafka producers are configured with no compression, but adding compression increases the processing overhead for producers, brokers, and even consumers, but it may reduce the overall end-to-end latency because the messages that you send will be much smaller than unimpressed messages which can significantly reduce the amount of bandwidth required to process these messages and this will reduce the per broker load.
>
> **[0:43](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=43)** Just a heads up about compression overheads.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=46)** There is a processing overhead on the producer side to compress the message.
>
> **[0:50](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=50)** There is a processing overhead on the broker side to decompress the message for validation before appending it to logs and there is a processing overhead on the consumer side to decompress the messages.
>
> **[1:02](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=62)** Now you should know that Kafka supports four kinds of compression.
>
> **[1:05](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=65)** You can use Gzip, Snappy, Lz4, or Zstd for compression.
>
> **[1:11](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=71)** Gzip has the best compression ratio and has the best CPU usage and of course, its network bandwidth usage is also the lowest but it also has the slowest compression speed which means the overhead on the producer will be higher.
>
> **[1:28](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=88)** Now Snappy and Zstd offer medium compression, moderate CPU usage, and medium network bandwidth usage, whereas Lz4 gives you low compression but is very, very fast.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=101)** You should understand these qualities of the different kinds of compression before you actually choose a compression type for your Kafka producer.
>
> **[1:49](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=109)** That's why I've listed all of these properties in a nice tabular structure here.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=113)** We'll first use the Zstd compression type that gives us just a moderate compression and compare that to a producer that uses uncompressed data.
>
> **[2:03](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=123)** And once we've done that comparison, we'll use all four kinds of compression with our Kafka producer perf test and see how they perform.
>
> **[2:12](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=132)** I'm going to run the Kafka producer perf test script twice.
>
> **[2:17](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=137)** Once with no compression and the second time with compression set to Gzip.
>
> **[2:23](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=143)** Here are the properties I've specified.
>
> **[2:24](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=144)** The topic is [[Performance Tuning]].
>
> **[2:26](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=146)** Number of records, 25,000.
>
> **[2:28](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=148)** Record size is rather small, 1,024.
>
> **[2:31](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=151)** Throughput is minus one, so no throttling.
>
> **[2:33](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=153)** Notice the producer props.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=155)** I've set acks equal to all and I'll use that configuration throughout so that we are comparing apples to apples and I've set compression type to none.
>
> **[2:42](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=162)** That's the default anyway.
>
> **[2:44](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=164)** The second time I run the producer perf test, this will be with compression.
>
> **[2:50](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=170)** Topic is once again, performance tuning.
>
> **[2:52](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=172)** The properties are all the same for num records, record size, throughput.
>
> **[2:56](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=176)** Notice the producer props, acks equal to all, and compression type is equal to Zstd.
>
> **[3:03](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=183)** Remember this gives us moderate compression, moderate network bandwidth usage, and the compression speed is also moderate so it's somewhere in between.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=193)** Let's take a look at the results and then compare our producer with uncompressed data and compressed data.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=199)** First, let's take a look at our producer without compression, 25,000 records sent.
>
> **[3:24](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=204)** Let's look at the throughput records per second.
>
> **[3:26](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=206)** 7,418 records per second and 7.24 megabytes per second of throughput.
>
> **[3:32](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=212)** Let's look at the producer with compression.
>
> **[3:36](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=216)** The throughput has increased.
>
> **[3:38](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=218)** 8,116 records per second and 7.93 megabytes per second.
>
> **[3:43](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=223)** Now this increase in the throughput because of compression is small enough that for this particular test, I would ignore it.
>
> **[3:50](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=230)** 7.24 to 7.93 megabytes per second is not a huge jump in the throughput, but take a look at the average latency.
>
> **[3:59](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=239)** Without compression, the average latency was 995 milliseconds, but with compression it's 288 milliseconds.
>
> **[4:07](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=247)** Over at the very end of the line, the 50th percentile or the median latencies also differ significantly.
>
> **[4:14](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=254)** For without compression we have 1,068 milliseconds.
>
> **[4:18](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=258)** With compression it's just 280 milliseconds.
>
> **[4:21](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=261)** It's pretty clear that the producer latency has greatly improved with the use of even moderate compression.
>
> **[4:28](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=268)** Now I'm going to run the Kafka producer perf test four different times with the four different compression types that can be configured.
>
> **[4:38](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=278)** You can see the first run at the top of your screen uses the compression type Gzip.
>
> **[4:43](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=283)** The second run in the middle of your screen uses compression type Snappy.
>
> **[4:47](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=287)** The third run uses compression type Lz4 and the fourth run at the bottom uses compression type Zstd.
>
> **[4:55](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=295)** Now I'll run this and view results on the same screen so we can compare.
>
> **[4:59](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=299)** The formatting isn't great, so you'll have to bear with me.
>
> **[5:02](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=302)** I'll point out the right things for you to look at.
>
> **[5:05](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=305)** Now the output you see in the third line from the top, starting somewhere in the middle of that line, 25,000 records sent.
>
> **[5:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=313)** That is the output for Gzip compression.
>
> **[5:16](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=316)** That's the first output for the first kind of compression that we had specified.
>
> **[5:21](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=321)** Now the second 25,000 records sent is for compression type Snappy and the third at the bottom, 25,000 records sent, is for compression Lz4.
>
> **[5:33](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=333)** Now Gzip, which has the best compression ratio, has the best throughput, 7.27 megabytes per second.
>
> **[5:41](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=341)** It also has the lowest average latency.
>
> **[5:44](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=344)** If you look on the next line, 54.44 milliseconds average latency.
>
> **[5:49](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=349)** Snappy, which gives us moderate compression, has a throughput of 7.15 megabytes per second in the middle of your screen and an average latency of 802.52 milliseconds.
>
> **[6:02](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=362)** Lz4, which has a low compression ratio, has a throughput of 7.08 megabytes per second and its latency is higher, 817.62 milliseconds.
>
> **[6:13](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=373)** Just in terms of average latency, you can see how much better the Gzip compression performs with just 54.44 millisecond average latency.
>
> **[6:24](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=384)** Now let's look at the very last kind of compression, Zstd.
>
> **[6:28](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=388)** It has a high throughput, 9.49 megabytes per second.
>
> **[6:32](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=392)** It's latency is 321.6 milliseconds.
>
> **[6:35](https://www.linkedin.com/learning/tuning-kafka/tuning-producer-compression?u=76281980&t=395)** Not as good as Gzip, but better than Lz4.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Tuning]] (2)
> **Versions:** 7.24 (2), 7.93 (2), 54.44 (2), 7.27 (1), 7.15 (1)
> **Definitions:** is a  (3)
> **Env Vars:** cpu (2)
> **Warnings:** heads up (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Tuning batch size and linger time](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=1)** - [Instructor] A Kafka Producer batches records for the same topic partition to optimize network latency and input/output requests made to Kafka.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=11)** By default, the producer is configured to send the batch immediately, in which case the batch usually contains just a few records produced by the application.
>
> **[0:21](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=21)** To improve batching, the producer can be configured with a small amount of artificial delay called linger.ms.
>
> **[0:28](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=28)** You can also configure the size of the batch for the producer.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=32)** And this is what we'll configure and see in this demo.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=36)** Now, I'm going to first run the producer with a batch.size of 16,384, that is the default, and linger.ms set to zero.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=45)** Linger.ms set to zero means there is no artificial delay for batching.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=51)** That is the batches will be collected and sent almost at once.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=55)** We'll send the messages to the performance_tuning topic, a total of 25,000 messages.
>
> **[1:00](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=60)** We'll use acks equal to all.
>
> **[1:02](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=62)** And the [[Representational State Transfer (REST)|rest]] of the configuration comes from the default producer properties file.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=67)** Here you can see that our messages were sent in two batches.
>
> **[1:09](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=69)** That need not always be the case.
>
> **[1:12](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=72)** And for 25,000 records, the throughput is about 4.08 megabytes per second and the average latency, 1,719 milliseconds.
>
> **[1:23](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=83)** Here, our producer produced at a very high rate.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=87)** 18,629 records were sent in the first batch and the rest in the second batch.
>
> **[1:32](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=92)** Because linger.ms was zero, the batch was created almost as soon as the records were ready.
>
> **[1:37](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=97)** Now, in my next configuration for the producer, I'm going to reduce the size of the batch.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=103)** I've set batch.size to 2048.
>
> **[1:46](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=106)** Take a look at the producer-props flag, batch.size is 2048.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=111)** Linger.ms is still zero, which means there is no artificial delay.
>
> **[1:55](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=115)** The batch will be sent as soon as it's created.
>
> **[1:59](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=119)** Now, reducing the batch size means that to send 25,000 messages, our producer will need to send the messages in several batches.
>
> **[2:09](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=129)** You can see that there are six or seven batches listed here.
>
> **[2:13](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=133)** Now, take a look at the throughput.
>
> **[2:16](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=136)** It has fallen, 0.65 megabytes per second.
>
> **[2:20](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=140)** The throughput has fallen with our reduced batch size, and you can see the average latency is 18,401 milliseconds.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=147)** Latency has shot up.
>
> **[2:29](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=149)** I'm now going to introduce a little bit of artificial delay to improve the batching on the producer end.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=155)** I add this artificial delay by setting the linger.ms property to 10, and you can see this as a part of the producer-props flag.
>
> **[2:44](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=164)** So I've added a 10 millisecond delay to make sure that more records are sent in a batch.
>
> **[2:51](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=171)** With this little artificial delay, you can see all 25,000 records are sent in one batch.
>
> **[2:57](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=177)** They haven't been broken down into multiple batches.
>
> **[3:00](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=180)** The throughput has shot up.
>
> **[3:02](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=182)** It's 5.37 megabytes per second.
>
> **[3:05](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=185)** This is better than the default value when linger.ms was zero, and the latency is 1,118 milliseconds.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=193)** This latency is better than the average latency we got at the default configuration for these properties.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=199)** That was around 1,700 milliseconds.
>
> **[3:22](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=202)** Now, let's try one last configuration.
>
> **[3:24](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=204)** I've increased the batch size to 25,000 records, and I've also increased the artificial delay.
>
> **[3:31](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=211)** Linger.ms is set to 100 milliseconds.
>
> **[3:34](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=214)** You can see this config passed in as a part of the producer-props flag, batch.size 25,000, linger.ms 100.
>
> **[3:42](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=222)** Let's go ahead and run this and take a look at the results.
>
> **[3:45](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=225)** Increasing the batch size and the artificial delay has greatly improved the throughput.
>
> **[3:49](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=229)** It's 8.54 megabytes per second, which is the best throughput we've seen so far.
>
> **[3:55](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=235)** The average latency has also fallen to 387 milliseconds.
>
> **[4:01](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=241)** Increasing the linger milliseconds often helps reduce tail latencies.
>
> **[4:06](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=246)** That is the maximum latency is likely to fall with this additional artificial delay.
>
> **[4:12](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=252)** If you enable compression for your producer by setting the compression.type property, the Kafka Producer compresses the complete batch, which means you might find additional increases in throughput.
>
> **[4:25](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=265)** Your compression.type is none by default.
>
> **[4:27](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=267)** I'm going to change this to use compression.type gzip.
>
> **[4:31](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=271)** If you remember, gzip has the best compression ratio.
>
> **[4:34](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=274)** And with this compression, you might find that the overall throughput for your producer improves.
>
> **[4:41](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=281)** I'll first run the producer-perf-test with the default values for batch.size and linger.ms.
>
> **[4:46](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=286)** Linger.ms will be zeros.
>
> **[4:48](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=288)** This means that the batch will be sent as soon as possible, and this gives us a throughput of 7.54 MB per second.
>
> **[4:58](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=298)** Now, let me increase the size of the batch as well as the artificial delay.
>
> **[5:03](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=303)** Batch.size is 25,000, linger.ms set to 100.
>
> **[5:07](https://www.linkedin.com/learning/tuning-kafka/tuning-batch-size-and-linger-time?u=76281980&t=307)** And with compression enabled on our producer, here you can see that the throughput is better than before, 8.82 megabytes per second.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Versions:** 4.08 (1), 0.65 (1), 5.37 (1), 8.54 (1), 7.54 (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** means that (2)
> **Prerequisites:** configure (2)
> **Code Identifiers:** performance_tuning (1)
> **Speakers:** - [instructor] (1)

#### [Effect of message size and record count](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=1)** - [Instructor] Your producer's performance in terms of throughput and latency will definitely be affected by the size of the messages that you send through the producer.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=11)** Another factor that could affect your producer's performance is the total number of messages that it sends without throttling.
>
> **[0:18](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=18)** Now let's see the effects of these parameters in this demo, starting with the size of your message.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=25)** That is your payload size.
>
> **[0:27](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=27)** Now, I've written a little script here with a for loop.
>
> **[0:31](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=31)** I'm going to send messages of three different sizes.
>
> **[0:35](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=35)** The first set of messages will all be about 1000 bytes.
>
> **[0:39](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=39)** That is one kilobyte.
>
> **[0:40](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=40)** The next set of messages will be 10,000 bytes or 10 kilobytes, and the third set will be 100,000 bytes or 100 kilobytes.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=49)** For each of these sets of messages, I'm going to send 25,000 records.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=54)** That's the echo that you see here on screen and that's also the value for the --num records flag for the Kafka producer perf test.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=64)** Within the for loop, I invoke the Kafka producer perf test script file.
>
> **[1:09](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=69)** The topic to which we'll send messages is the [[Performance Tuning]] topic that we've set up.
>
> **[1:14](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=74)** Num records, 25,000, record size is $i.
>
> **[1:18](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=78)** That is the variable of our for loop.
>
> **[1:20](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=80)** It'll be 1000 to start off with, then 10,000 bytes, and then 100,000 bytes.
>
> **[1:24](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=84)** Throughput, -1, so no throttling.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=87)** Producer props acks equal to all and producer config is in the producer.properties file.
>
> **[1:33](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=93)** Go ahead and run this little script.
>
> **[1:36](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=96)** You'll see a large amount of output printed here.
>
> **[1:38](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=98)** Don't worry.
>
> **[1:39](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=99)** I'll help you interpret this in just a bit.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=101)** Let's scroll up to the top and let's look at the first iteration of the for loop.
>
> **[1:47](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=107)** Here, number of records sent is 25,000 and record size is 1000.
>
> **[1:52](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=112)** Let's take a look at the throughput.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=113)** The throughput in records per second is quite high.
>
> **[1:56](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=116)** 5892 roughly, records per second.
>
> **[2:00](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=120)** The throughput in megabytes per second is 5.62 megabytes per second.
>
> **[2:04](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=124)** Let's compare these metrics with a larger record size.
>
> **[2:08](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=128)** Look at the next iteration of the for loop.
>
> **[2:11](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=131)** Record size is 10,000 or 10 kilobytes.
>
> **[2:15](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=135)** Look to the bottom.
>
> **[2:16](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=136)** Let's look at the throughput.
>
> **[2:17](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=137)** Notice that the throughput has fallen.
>
> **[2:19](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=139)** It's 779 records per second.
>
> **[2:23](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=143)** Once the records became larger, the throughput in terms of number of records per second will obviously fall, but notice the throughput in megabytes, 7.43 megabytes per second.
>
> **[2:33](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=153)** It has increased slightly.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=155)** The average latency has gone up though, for a single message.
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=159)** You can see it's 2397 millisecond average latency as compared to 370.79 for a smaller record size.
>
> **[2:48](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=168)** Now, you should know that the producer has a default batch size for the records sent.
>
> **[2:55](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=175)** Notice that when we have larger records, the producer sends many more batches.
>
> **[3:00](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=180)** For the second iteration of the for loop where the record size is 10,000 bytes, notice that the records were sent in six batches.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=188)** So the first batch had 2602 records, the second batch had 3549 records, 'till we sent 25,000 records.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=196)** As you scroll down, you can see the third iteration of the for loop, where the record size is 10,000 bytes.
>
> **[3:23](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=203)** You can see that many more batches were sent in this case.
>
> **[3:27](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=207)** Larger batch sizes seems to have increased the throughput, 16.93 megabytes per second.
>
> **[3:33](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=213)** The number of records per second has fallen.
>
> **[3:35](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=215)** That's to be expected, 177.5.
>
> **[3:38](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=218)** The latency seems to have fallen, 7.58, though I think this is a bit of a fluke.
>
> **[3:43](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=223)** There are some other factors at play here that we can't tell.
>
> **[3:46](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=226)** With larger record sizes, latencies generally tend to go up per message.
>
> **[3:51](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=231)** Now I'm going to run another for loop.
>
> **[3:54](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=234)** This is another script and I'm going to have the producer send a different number of messages for each iteration of this loop.
>
> **[4:01](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=241)** For the first iteration of this loop, we'll send 1000 messages, then 10,000 messages, and then 100,000 messages.
>
> **[4:08](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=248)** Every message will keep the record size the same.
>
> **[4:10](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=250)** You can see that it's 1024 and you can see the record size flag for the Kafka producer perf test is 1024 as well.
>
> **[4:19](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=259)** I run the Kafka producer perf test for every for loop iteration.
>
> **[4:24](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=264)** Notice the num records flag set to $i.
>
> **[4:27](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=267)** We'll send a different number of records for each run of this test, and let's take a look at the results here.
>
> **[4:34](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=274)** The first thing that should jump out at you across the three runs is the throughput.
>
> **[4:39](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=279)** Look at the throughput in terms of records per second and also megabytes per second for the three different iterations.
>
> **[4:47](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=287)** When many more records were produced in an unthrottled manner for number of records equal to 100,000, notice the throughput is 10,513 records per second and 10.27 megabytes per second.
>
> **[5:01](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=301)** Far higher than in the first two cases.
>
> **[5:04](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=304)** When many more messages were published in an unthrottled manner by our producer, batching performance improved and that's why throughput has improved here.
>
> **[5:15](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=315)** If you look at the latencies, the lowest average latency is for the first case, for number of records 1000.
>
> **[5:21](https://www.linkedin.com/learning/tuning-kafka/effect-of-message-size-and-record-count?u=76281980&t=321)** That's just 16.43 milliseconds and the other latencies are much higher.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Tuning]] (1)
> **Versions:** 5.62 (1), 7.43 (1), 370.79 (1), 16.93 (1), 177.5 (1)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Tuning Kafka Consumers

[↑ Back to Table of Contents](#table-of-contents)

#### [Running a basic consumer performance test](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=1)** - [Instructor] In this demo, we'll see how you can run a basic performance test on the Kafka Consumer.
>
> **[0:06](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=6)** Now, I've changed the configuration of my cluster just a little bit.
>
> **[0:10](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=10)** Here on one tab I have the ZooKeeper server running.
>
> **[0:14](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=14)** Since the last time we ran ZooKeeper, I stopped and restarted the ZooKeeper service.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=20)** You can see the command that I have run here at the very top: zookeeper-server-start.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=25)** And I've passed in the default ZooKeeper properties file.
>
> **[0:28](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=28)** Here on another tab, I have a single broker running.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=33)** This is the broker with ID zero.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=36)** If you look at the command that I've run, kafka-server-start, and I've passed to it server-0.properties.
>
> **[0:42](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=42)** I just wanted to give you a heads-up for the change that I have made to the cluster setup for the demos that follow.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=49)** In this demo I'm going to run a bunch of Consumer performance tests.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=54)** We'll tweak Consumer-related properties, run performance tests, and see how the Consumer works.
>
> **[1:01](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=61)** I'm going to delete this [[Performance Tuning]] topic that we had set up earlier.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=64)** It had a replication of three.
>
> **[1:06](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=66)** And I'm going to recreate this performance tuning topic with a partition equal to one and replication factor equal to one.
>
> **[1:15](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=75)** That is the default configuration.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=77)** Just a heads-up that I had to wait for a few minutes after deleting the performance tuning topic, and then recreating this topic with the same name.
>
> **[1:26](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=86)** If you try to immediately recreate a topic with the same name, you might find that you'll encounter some warnings from Kafka.
>
> **[1:32](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=92)** Once this topic has been created, let's take a look at the configuration for this particular topic, and you can get that by running the --describe flag using the Kafka topic script.
>
> **[1:45](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=105)** You can see the performance tuning topic here with the partition count of one, replication factor of one.
>
> **[1:51](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=111)** You can verify the important metrics for Consumer performance using a different script that your default Kafka installation provides for you.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=121)** This is the Kafka Consumer perf-test script.
>
> **[2:04](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=124)** You should know that all of these scripts are located in the bin folder of your Kafka install directory.
>
> **[2:10](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=130)** Run --help on the script, and you'll be able to see all of the flags that you can pass in.
>
> **[2:17](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=137)** We have the bootstrap-server that is a single broker or a list of brokers that your Consumer script can connect to.
>
> **[2:24](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=144)** The consumer.config flag will point to the Consumer properties file.
>
> **[2:30](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=150)** We have the [[Fetch]]-size, the amount of data to fetch in a single request.
>
> **[2:34](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=154)** The group flag allows you to specify the Consumer group you want to consume from and a bunch of other details.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=161)** At the very bottom, you can see the topic that the Consumer should consume messages from.
>
> **[2:47](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=167)** That's of course a required property.
>
> **[2:49](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=169)** You can't consume messages without topic.
>
> **[2:52](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=172)** Let's take a look at the properties for the default Consumer.
>
> **[2:55](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=175)** In the Kafka installs config subfolder, you'll find a file called consumer.properties.
>
> **[3:02](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=182)** You can see that there are really very few properties available here.
>
> **[3:05](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=185)** We have the bootstrap-server set to localhost 1992.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=188)** That's perfectly fine.
>
> **[3:10](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=190)** We have a Consumer group ID created by default, but nothing else.
>
> **[3:13](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=193)** All of the other properties will take on their default values.
>
> **[3:17](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=197)** I'll now run the Kafka Consumer perf-test script so that we get a baseline value for all of the metrics that are evaluated and displayed for Consumer tests.
>
> **[3:28](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=208)** The topic here is performance tuning, the number of messages to consume, 25,000, and the consumer.config that this test uses is the one in KAFKA_HOME/config/consumer.properties.
>
> **[3:41](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=221)** And here we see Consumer metrics printed out to screen in a nice readable fashion thanks to the jq utility.
>
> **[3:49](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=229)** From the start and end time, you can see that the Consumer ran for less than a second.
>
> **[3:54](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=234)** The data consumed in megabytes was about 24.5 megabytes.
>
> **[3:58](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=238)** The megabytes per second consumed was 25.
>
> **[4:02](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=242)** The data consumed in number of messages, again, 25120 A simple computation will tell you that each message is roughly one kilobyte.
>
> **[4:12](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=252)** And we have number of messages per second consumed :25632.
>
> **[4:17](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=257)** And a number of other Consumer-specific metrics as well.
>
> **[4:20](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=260)** This is the baseline.
>
> **[4:21](https://www.linkedin.com/learning/tuning-kafka/running-a-basic-consumer-performance-test?u=76281980&t=261)** Let's now tweak some Consumer properties.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Tuning]] (5), [[Fetch]] (2)
> **Prerequisites:** setup (1), set up (1), install (1)
> **File Paths:** consumer.config (2)
> **CLI Commands:** find (2)
> **Ports:** :25632 (1)
> **Env Vars:** kafka_home (1)
> **Versions:** 24.5 (1)
> **Definitions:** is a  (1)

#### [Tuning fetch bytes and wait time for consumers](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=1)** - [Instructor] Let's tweak some properties of the consumer.
>
> **[0:03](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=3)** Now for this, you'll need to open up the consumer.properties file and make the changes within this configuration file.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=9)** That's because the consumer perf test script does not have a config props flag that you can specify on the command line that can override properties from the default consumer configuration file.
>
> **[0:22](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=22)** So I'm now going to go ahead and tweak three different properties of the consumer, [[Fetch]].min.bytes, fetch.max.wait.ms, and auto.commit.interval.ms.
>
> **[0:34](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=34)** You should know here that the fetch.min.bytes and the fetch.max.wait in milliseconds, these properties have been set to their default values.
>
> **[0:42](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=42)** Now, you should know that the default consumer configuration in Kafka, just like the default producer configuration, is optimized for low latency.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=51)** Now, when a consumer is listening on a topic, the consumer continuously pulls the leader broker for more data or more messages available on that topic.
>
> **[1:02](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=62)** The fetch.min.bytes and the fetch.max.wait time work together.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=67)** Fetch.min.bytes is set to one by default which means that the response to a fetch request is returned to the consumer as soon as a single byte of data is available or after a timeout, specified by fetch.max.wait in milliseconds.
>
> **[1:24](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=84)** So after a timeout of 500 milliseconds.
>
> **[1:26](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=86)** Lower the value of fetch.min.bytes and fetch.max.wait time in milliseconds, faster the consumer will be able to consume records.
>
> **[1:36](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=96)** Now, the auto commit interval in milliseconds is a measure of the durability of the consumer.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=101)** This tells us how often a consumer commits the records that it reads.
>
> **[1:47](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=107)** I've set this to one second, which is higher than the default to increase the durability of the consumer.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=114)** The default value for this property is five seconds so records will be committed more often than the default.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=121)** This increased durability will result in reduced availability of the consumer.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=127)** Make sure you save the changes to this configuration file.
>
> **[2:10](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=130)** Let's switch over to our terminal window and run the consumer performance test.
>
> **[2:15](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=135)** Once again, the topic is [[Performance Tuning]], message is 25,000, and the consumer config properties will read from the consumer.properties file that we just updated.
>
> **[2:25](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=145)** Let's run this and you should get values which are very similar to the baseline.
>
> **[2:29](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=149)** There might be a few differences.
>
> **[2:31](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=151)** You can see that from the start and end time, this ran for about less than a second.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=155)** Data consumed in MB, about 24 MB.
>
> **[2:38](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=158)** Let's compare some of the other parameters with the baseline.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=161)** Notice megabytes per second has fallen to about 18.
>
> **[2:45](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=165)** Earlier it was 25.
>
> **[2:48](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=168)** Consumer bandwidth has likely fallen because we have reduced the auto commit interval.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=174)** The consumer is committing messages more often.
>
> **[2:57](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=177)** The number of messages per second has also fallen to about 18,552 as compared to about 25,632 earlier.
>
> **[3:05](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=185)** The fetch time in millisecond has gone up.
>
> **[3:07](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=187)** It's 821 milliseconds as opposed to 479 milliseconds earlier.
>
> **[3:12](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=192)** The only property that we tweaked has been the auto commit interval which has reduced the throughput of the consumer.
>
> **[3:20](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=200)** Now, I'm going to go back to the consumer properties file.
>
> **[3:24](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=204)** I'm going to increase the fetch.min.bytes to be a very large number.
>
> **[3:29](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=209)** I've set it to 500,000 here, but any large number like 100,000 or 50,000 should be good enough.
>
> **[3:36](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=216)** I've also increased the fetch.max.wait time in milliseconds to be 2,500 or 2.5 seconds.
>
> **[3:43](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=223)** The response to a consumer fetch request will be returned only if there are 500,000 bytes of data to share or 2.5 seconds have passed or elapsed.
>
> **[3:56](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=236)** Now let's see how this affects the metrics of our consumer.
>
> **[3:59](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=239)** Once again, I run the consumer perf test with 25,000 messages, and let's take a look at the result.
>
> **[4:05](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=245)** Now, here is an unfortunate fact.
>
> **[4:07](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=247)** When I ran the consumer performance test on my local machine, I found it very hard to see the impact of the change in these properties.
>
> **[4:15](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=255)** Now, the increase in the size of fetch bytes and the wait time should actually increase the end-to-end latencies.
>
> **[4:23](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=263)** But from the consumer side, this was very hard to fathom and this is how things are.
>
> **[4:28](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=268)** Sometimes the impact is not really visible when you're running a single broker on your local machine.
>
> **[4:34](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=274)** Now, let's tweak another configuration property, but before that, I'm going to change the number of partitions that the performance tuning topic has.
>
> **[4:43](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=283)** I'm going to alter this topic so that it now has three partitions on a single broker.
>
> **[4:50](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=290)** Now I'm going to update one property in the consumer configuration file.
>
> **[4:56](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=296)** The max partition fetch bytes I've set to 1000.
>
> **[5:00](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=300)** Now, this is a lot lower than the default.
>
> **[5:03](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=303)** The default is about 1 million.
>
> **[5:05](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=305)** This configuration controls the maximum amount of data that a consumer can fetch in a single request from a single partition.
>
> **[5:13](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=313)** Having made this change, let's run the consumer performance test and see if the effects of this change are visible with these tests.
>
> **[5:23](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=323)** You can keep these values in mind as you look at the number of messages per second, fetch time in milliseconds, the megabytes per second.
>
> **[5:31](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=331)** Now back to the consumer properties file, and I'm going to set this property back to its default value of about 1 million, so 1048576.
>
> **[5:41](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=341)** That's the default value.
>
> **[5:43](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=343)** Now, when I run the consumer performance test with 25,000 messages once again, you'll find that there is absolutely no difference in any of the properties that are viewed here.
>
> **[5:54](https://www.linkedin.com/learning/tuning-kafka/tuning-fetch-bytes-and-wait-time-for-consumers?u=76281980&t=354)** It's unfortunate that we can't really see it here, but you should know that configuring this property to a smaller value than the default means that there'll be many more fetch requests required to be made by the consumer in order to get all of the data that is published to a topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (20), [[Performance Tuning]] (2)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 2.5 (2)
> **Tools:** command line (1), terminal (1)
> **Analogies:** just like (1), similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Tuning session timeout and heartbeat interval](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=1)** - [Instructor] In this demo, we'll see how you can configure two other properties that are related to consumer, the heartbeat interval in milliseconds and the session timeout in milliseconds.
>
> **[0:12](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=12)** Now, you should know that every heartbeat interval, the consumer sends a message to the broker indicating that it's still alive.
>
> **[0:20](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=20)** The property that I'm going to configure first is the session timeout in milliseconds.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=25)** This is the maximum duration that a Kafka broker can wait without receiving a heartbeat from the consumer.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=33)** Here I've indicated that if 10 milliseconds pass without a broker receiving a heartbeat from the consumer, then the consumer will be marked as dead.
>
> **[0:42](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=42)** That is, it can no longer consume messages.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=46)** Now, 10 milliseconds is a really short interval time.
>
> **[0:49](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=49)** In a Kafka queue where millions of messages are processed a day, the session timeout millisecond can be up to 3,000 milliseconds.
>
> **[0:58](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=58)** That is 30 seconds to keep the consumer alive while processing these huge volumes.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=64)** The default value for this property is 10 seconds.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=67)** Make sure you save the update to the consumer properties file and let's now run our consumer of test messages, 25,000.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=77)** All of the other settings I've left to the default.
>
> **[1:19](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=79)** Now, with these consumer properties, notice that I get an exception.
>
> **[1:23](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=83)** The exception here says that the heartbeat must be set lower than the session timeout, which makes sense.
>
> **[1:30](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=90)** Now, the default heartbeat interval is 3,000 milliseconds or three seconds and I've set the timeout to 10 milliseconds.
>
> **[1:39](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=99)** The heartbeat cannot be lower than the session timeout because that doesn't make sense.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=103)** All of the consumers will then be marked dead as not receiving messages.
>
> **[1:47](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=107)** So this is something we need to fix.
>
> **[1:49](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=109)** So let's head back to the consumer properties file and I'm going to change the session timeout, as well as the heartbeat.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=117)** I'm going to set the session timeout in milliseconds to be 60,000 or 60 seconds and the heartbeat interval in milliseconds I set to 20,000 or 20 seconds.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=127)** Our consumer will send a heartbeat to the broker indicating it's alive every 20 seconds.
>
> **[2:12](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=132)** If no heartbeat is received for 60 seconds, that consumer will be considered dead.
>
> **[2:18](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=138)** Now this configuration makes sense.
>
> **[2:19](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=139)** Back to the consumer-perf-test script file.
>
> **[2:23](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=143)** Let's run our perf testing and this time, everything runs through successfully.
>
> **[2:28](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=148)** Just a heads up that setting these configuration properties doesn't really change any of the metrics that you see printed here on screen.
>
> **[2:36](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=156)** However, the heartbeat interval and the session timeout both are important settings for consumers in the real world because that is what determines how long a broker will wait for the heartbeat from the consumer.
>
> **[2:50](https://www.linkedin.com/learning/tuning-kafka/tuning-session-timeout-and-heartbeat-interval?u=76281980&t=170)** For heavily loaded consumers, it may be better to set higher values for the session timeout, as well as the heartbeat interval.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### [Tuning max poll interval and max poll records](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=1)** - [Instructor] In this demo, we'll see how you can configure two more consumer related properties, the max poll records and the max poll interval in milliseconds.
>
> **[0:11](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=11)** Let me set up values for these and I'll explain what these configuration properties do.
>
> **[0:15](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=15)** When a consumer is subscribed to a topic, it constantly calls poll on the topic to get any messages that have been published to that topic.
>
> **[0:24](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=24)** Max poll records defines the maximum number of records returned in a single call to poll by the consumer.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=33)** The max poll interval in milliseconds is the maximum delay between invocations of poll by the consumer when using consumer group management.
>
> **[0:43](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=43)** This places an upper bound on the amount of time that a consumer can be idle before fetching more records.
>
> **[0:50](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=50)** If poll is not called before the expiration of this particular timeout, then the consumer is considered failed and the group will have to rebalance in order to reassign the partitions to another consumer.
>
> **[1:03](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=63)** Now, what I've done here is set the max poll interval in milliseconds to a very small value, just 10 milliseconds.
>
> **[1:11](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=71)** This means that the consumer will have to make a call to poll in 10 milliseconds or less, which is far too short an interval.
>
> **[1:19](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=79)** Now let's try running our consumer perf test with these configuration settings and immediately, you'll find that you'll run into a little bit of a problem.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=89)** Look at all of these messages.
>
> **[1:31](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=91)** These messages indicate that the consumer poll timeout has expired the 10 millisecond timeout that we had set.
>
> **[1:38](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=98)** That means the time between subsequent calls to poll was longer than the timeout that we had configured.
>
> **[1:44](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=104)** Clearly, this is not a good value.
>
> **[1:46](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=106)** Your interval should not be too short.
>
> **[1:49](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=109)** If you want to ensure that the consumers in a consumer group are constantly processing messages within a certain interval, you should make sure you configure these properties, but configure them in a thoughtful manner.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=121)** Here I've set the max poll interval in milliseconds to 700,000.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=127)** That is 700 seconds, which is over 11 minutes.
>
> **[2:11](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=131)** And the max poll records is 1000.
>
> **[2:13](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=133)** That is for every poll, 1000 records can be fetched.
>
> **[2:17](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=137)** The way you would tune both of these values is you could compute the average processing time for each message.
>
> **[2:25](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=145)** If the average processing time is, say one second and you have max poll records set to 100, then you should allow approximately 100 plus seconds for the poll interval.
>
> **[2:36](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=156)** Here in my case, since I'm going to be processing 1000 messages with one call to poll at the maximum, and let's say each message takes 0.5 seconds or so, this is why I've configured my interval to be about 700 seconds.
>
> **[2:51](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=171)** This configuration makes sense and if you run the consumer perf test, you'll find that the warnings have disappeared.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/tuning-max-poll-interval-and-max-poll-records?u=76281980&t=178)** Now, there is nothing really in these metrics that tell you how exactly these properties work, but now you know the underlying meaning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Prerequisites:** configure (3), set up (1)
> **Versions:** 0.5 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Tuning Kafka Brokers

[↑ Back to Table of Contents](#table-of-contents)

#### [End-to-end latency with replication](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=1)** - [Instructor] In this demo, we'll see how the replication factor for a particular topic affects the end-to-end latency of your Kafka cluster.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=9)** The first thing I'm going to do is measure the end-to-end latency that we get when we use a topic with just one partition and a replication factor of one.
>
> **[0:19](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=19)** I'm going to run this topic on a Kafka cluster with just one broker.
>
> **[0:25](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=25)** I've shut down my previous Zookeeper and broker instances so I'm going to restart Zookeeper on one tab and on the second tab, I'm going to bring up server-0.
>
> **[0:35](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=35)** This is the broker with ID zero and a default configuration at this point in time.
>
> **[0:41](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=41)** You can look at the broker configuration by taking a look at the server-0.properties file.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=46)** This is the broker with ID zero and this is the default configuration.
>
> **[0:50](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=50)** On lines 47 through 56, there are a number of throughput-related properties that will be changing in a future demo.
>
> **[0:57](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=57)** These are the default values of those properties.
>
> **[1:00](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=60)** I have not changed any of the other config properties here, except things like where the logs are to be written, et cetera.
>
> **[1:07](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=67)** Here are log retention-related properties.
>
> **[1:10](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=70)** We'll be changing these as well in a later demo.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=73)** These are the default values.
>
> **[1:15](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=75)** Now I'm going to switch over to the terminal window and create a new topic that we'll use for our end-to-end latency test.
>
> **[1:23](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=83)** This topic is called broker_tuning and I've set it up to have three partitions to start off with.
>
> **[1:31](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=91)** So I have just one broker in the cluster running and I have three partitions for this topic.
>
> **[1:37](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=97)** Let's just confirm that the topic has been created successfully.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=101)** I'll run --describe on the broker_tuning topic and you can see that it has been created with three partitions, but because we have just one broker, the replicas are set to zero.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=114)** All of the partitions will be created on the same broker.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=117)** Now, the Kafka installation contains a very useful script that you can use the, kafka-run-class script.
>
> **[2:05](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=125)** This script allows you to execute the code present in a [[Java]] file.
>
> **[2:09](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=129)** Either you specify the JAR file where that class is located, or you can specify the name of the main class.
>
> **[2:18](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=138)** Now, it turns out that Kafka has this very useful little class called EndToEndLatency in the Kafka tools package.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=147)** I've used the kafka-run-class.sh script passed in the main class, which is kafka.tools.EndToEndLatency.
>
> **[2:35](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=155)** The broker_tuning topic is the one that we're going to be using.
>
> **[2:39](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=159)** We'll run this latency test with 25,000 messages.
>
> **[2:43](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=163)** The producer ACKS configuration is set to all.
>
> **[2:46](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=166)** That is all replicas have to acknowledge before the producer moves forward, and the record size is 1024.
>
> **[2:53](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=173)** Now let's run this, and here at the bottom, you can see the average latency for our Kafka cluster with our current setup, 1.63 milliseconds approximately.
>
> **[3:05](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=185)** This is the latency for our topic, which has three partitions all running on a single broker and a replication factor of one, so there are no replicas for this topic.
>
> **[3:16](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=196)** Now, I'm going to change my cluster setup just a bit.
>
> **[3:19](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=199)** I have my Zookeeper running.
>
> **[3:21](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=201)** I have the first broker running.
>
> **[3:24](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=204)** I'm going to set up a second and third broker.
>
> **[3:26](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=206)** Set up the broker two that is server-1.properties, that's the name of the file, and then set up the third broker by running kafka-server-start on server-2.properties.
>
> **[3:38](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=218)** Now my [[Apache Kafka]] cluster has three brokers running, which means I can configure a replication factor for my topic.
>
> **[3:48](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=228)** Now the topic has already been created.
>
> **[3:49](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=229)** I'll need to alter the topic in order to change its replication factor and I'm going to do that using a [[JSON]] configuration file.
>
> **[3:57](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=237)** I'm going to make a new sub folder called topic_config in my KAFKA_HOME folder.
>
> **[4:04](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=244)** Under this topic_config subfolder, I'm going to create a new file called topic_config.json.
>
> **[4:12](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=252)** Now, I'll open up this configuration file using the Nano editor, nano topic_config.json and let's add in the replication factor for this topic.
>
> **[4:24](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=264)** And here is how the JSON is specified.
>
> **[4:26](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=266)** The broker_tuning topic has three partitions, partitions zero, one and two, and a replication factor of three based on this configuration.
>
> **[4:34](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=274)** Each partition should be stored on the replicas zero, one and two.
>
> **[4:38](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=278)** Save the changes to this file and let's alter the topic configuration.
>
> **[4:44](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=284)** Having saved the contents of this file, I'm going to head over to the terminal window and use the script kafka-reassign-partitions.sh.
>
> **[4:53](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=293)** This script will reassign the partitions based on the JSON configuration we had specified in the topic_config.json file.
>
> **[5:03](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=303)** Notice the reassignment-json-file flag, which points to topic_config.json --execute will perform the reassignment.
>
> **[5:14](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=314)** This reassignment will cause each of the three partitions of the broker_tuning topic to be spread across three replicas that just have a replication factor of three.
>
> **[5:23](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=323)** Let's run describe on the broker_tuning topic to see whether this is the case.
>
> **[5:28](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=328)** And here you can see the three partitions, zero, one and two, and the replicas on which those partitions are located.
>
> **[5:36](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=336)** Replicas zero, one and two.
>
> **[5:37](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=337)** The in sync replicas are also zero, one and two.
>
> **[5:41](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=341)** Now having changed our topic configuration, let's run an end-to-end latency test with the same parameters as before.
>
> **[5:48](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=348)** 25,000 messages, ACKS equal to all and record size 1024.
>
> **[5:54](https://www.linkedin.com/learning/tuning-kafka/end-to-end-latency-with-replication?u=76281980&t=354)** We've discussed earlier that increasing the replication factor increases the average latency, and here you can see this, the average latency is 2.27 milliseconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[Java]] (1), [[Apache Kafka]] (1)
> **Code Identifiers:** broker_tuning (6), topic_config (6)
> **Env Vars:** json (3), acks (2), jar (1), kafka_home (1)
> **File Paths:** topic_config.json (4), kafka-run-class.sh (1), kafka-reassign-partitions.sh (1)
> **Prerequisites:** set up (3), setup (2), configure (1)
> **CLI Commands:** apache (1), make (1)
> **Versions:** 1.63 (1), 2.27 (1)
> **Tools:** terminal (2)

#### [Tuning throughput](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=0)** - [Instructor] In this demo, we'll explore a few configuration properties that you can use to improve the throughput of the brokers running in your cluster.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=9)** Now, I'm going to set up a Kafka cluster with three brokers running.
>
> **[0:13](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=13)** The configuration properties that we'll tune in just a bit are these four and plus one more, [num.io](https://num.io).threads, socket.send.buffer.bytes, socket.receive.buffer.bytes, socket.request.max.bytes.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=26)** I'll explain what these properties mean in a bit.
>
> **[0:29](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=29)** For now, all of these properties contain their default values, and this is true for each of the three brokers in our cluster.
>
> **[0:37](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=37)** All three brokers contain the same default values for the four throughput-related properties.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=45)** This is the configuration for the broker with ID one.
>
> **[0:48](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=48)** Then I'll switch over to the broker with ID two and you can see it has the same configuration for the four properties that I mentioned.
>
> **[0:57](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=57)** The brokers in our Kafka cluster, all three of them are already up and running.
>
> **[1:01](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=61)** I'm going to use the kafka-run-class script to compute the end-to-end latency for 25,000 messages with ACKS equal to all and record size 1024.
>
> **[1:13](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=73)** Now, this will only give me the latency information and here you can see the average latency is 1.84 milliseconds.
>
> **[1:22](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=82)** This doesn't gimme any information about throughput, so let's run producer-perf-test script in order to get the throughput from the producer's perspective.
>
> **[1:32](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=92)** Our producer uses the broker_tuning topic.
>
> **[1:35](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=95)** It runs with the default property specified in the producer.properties file.
>
> **[1:41](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=101)** Now let's go ahead and run this, and this will give us some throughput information and here you can see from the perspective of the producer, the throughput is 6.21 megabytes per second.
>
> **[1:53](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=113)** In order to get a complete picture, we also need the throughput from the consumer's perspective and we'll get this by running the kafka-consumer-perf-test script.
>
> **[2:02](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=122)** Again, 25,000 messages.
>
> **[2:05](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=125)** We'll use the default consumer properties, and here, you can see megabytes per second is 24.18.
>
> **[2:13](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=133)** These are the throughput metrics that you need to keep in mind from the producer's point of view, as well as the consumer's point of view.
>
> **[2:19](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=139)** Now let's switch over to the broker configuration file for the first broker, broker with ID zero and let's tweak the configuration for these properties.
>
> **[2:30](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=150)** [Num.io](https://Num.io).threads was originally eight.
>
> **[2:32](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=152)** I've set it to 12.
>
> **[2:34](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=154)** Io.threads pick up requests from the request queue to process them.
>
> **[2:37](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=157)** Adding more threads can improve throughput, but the number of CPU cores and disk bandwidth imposes a practical upper limit.
>
> **[2:46](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=166)** That's something to keep in mind.
>
> **[2:47](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=167)** The socket.send.buffer.bytes and socket.receive.buffer.bytes have increased by about 200 times.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=174)** I've exaggerated the amount of increase so you can really see the difference.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=178)** These specify the size of the buffers used for sending and receiving messages.
>
> **[3:04](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=184)** Increasing the size will allow you to send and receive more messages through the cluster.
>
> **[3:10](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=190)** The socket.request.max.bytes is the maximum number of bytes that Kafka can receive.
>
> **[3:15](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=195)** I've made the new value about 20 times the original default value.
>
> **[3:21](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=201)** Replica.socket.receive.buffer.bytes will also increase the buffers for network requests and thus improve throughput.
>
> **[3:30](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=210)** Make sure you save the changes.
>
> **[3:32](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=212)** Now let's make the same changes for broker with ID one.
>
> **[3:36](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=216)** I'm going to paste in the same new configuration for all five properties and I'm going to do this for the broker with ID two as well.
>
> **[3:45](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=225)** Once again, I'm going to select these properties and paste in the new values for these five properties.
>
> **[3:51](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=231)** Once you've made these changes for increasing throughput, make sure you save all of these properties files.
>
> **[3:58](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=238)** I'm going to head over to the terminal window where I have the brokers running and I'm going to kill all the current brokers and I'm going to restart them.
>
> **[4:05](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=245)** I restart broker zero, server-0.properties.
>
> **[4:09](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=249)** This is needed so that the new configuration properties for the brokers are picked up.
>
> **[4:13](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=253)** I'm going to restart broker with ID one, server-1.properties, and finally, I'm going to restart the broker with ID two, server-2.properties.
>
> **[4:23](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=263)** Once you've restarted all of these brokers, they should be running with the new configuration values that you've specified.
>
> **[4:30](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=270)** Let's now take a look at the end-to-end latency for 25,000 messages.
>
> **[4:35](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=275)** Here you can see that latency has increased, 2.5877 milliseconds, but what about the throughput?
>
> **[4:43](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=283)** Latency has increased but the throughput should have improved.
>
> **[4:46](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=286)** Let's take a look at the throughput from the producer's perspective.
>
> **[4:50](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=290)** This time you can see the throughput here is 8.55 megabytes per second.
>
> **[4:55](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=295)** This is a 30% improvement over the throughput that we had previously.
>
> **[5:00](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=300)** Earlier, it was just 6.21 megabytes per second.
>
> **[5:04](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=304)** Let's take a look at whether the throughput from the consumer side has improved as well.
>
> **[5:09](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=309)** Let's run the kafka-consumer-perf-test and here you can see megabytes per second is 32.48.
>
> **[5:16](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=316)** Once again, a 30% improvement.
>
> **[5:18](https://www.linkedin.com/learning/tuning-kafka/tuning-throughput?u=76281980&t=318)** Earlier it was 24 megabytes per second roughly and now it's 32.

> [!info]- Semantic Content
>
> **Versions:** 6.21 (2), 1.84 (1), 24.18 (1), 2.5877 (1), 8.55 (1)
> **CLI Commands:** make (3)
> **URLs:** [num.io](https://num.io) (2)
> **Env Vars:** acks (1), cpu (1)
> **Code Identifiers:** broker_tuning (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)

#### [Tuning log retention](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=1)** - [Instructor] As you run your Kafka cluster your Kafka brokers will all be writing out details to log files.
>
> **[0:07](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=7)** Now, over time, these log files can get very very big and take up a massive amount of this space.
>
> **[0:14](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=14)** Your Kafka broker has properties that you can configure to tune how long you want logs to be retained and how often to check for logs that need to be deleted.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=26)** Those are the properties that we'll configure here in this demo.
>
> **[0:29](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=29)** Now we've been running a Kafka cluster with three brokers for most of this course.
>
> **[0:33](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=33)** Let's take a look at the size of the logs that we have generated.
>
> **[0:37](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=37)** My log folder has the prefix tmp kafka logs, and here you can see that I have about one gigabyte of logs collected.
>
> **[0:47](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=47)** Now this value might be a little different for you because it depends on how long you've run the cluster, how many messages you've sent, and so on.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=54)** Now, let's head over to our broker configuration file.
>
> **[0:58](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=58)** Here is server-0.properties which is the configuration file for broker with ID zero.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=64)** Notice that we have two properties here, log retention in hours, 168 hours, and the log retention check interval in milliseconds is 300,000 milliseconds, 300 seconds, or five minutes.
>
> **[1:18](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=78)** So every five minutes Kafka will check to see whether logs older than 168 hours need to be deleted.
>
> **[1:25](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=85)** I now tweak this to have the logs be cleaned up a little faster.
>
> **[1:29](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=89)** The log retention I specify in milliseconds, I set it to 120,000 milliseconds, 120 seconds, or two minutes, and the log retention check interval I've set to 10,000 milliseconds or 10 seconds.
>
> **[1:43](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=103)** So every 10 seconds, Kafka will check to see whether we have logs that are greater than two minutes old and then delete those logs.
>
> **[1:52](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=112)** Now, I wouldn't recommend these settings in production, but this will allow us to see the impact of this configuration on our log sizes.
>
> **[2:01](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=121)** In production, you of course want to keep your logs around for longer in case there are errors you need to debug.
>
> **[2:07](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=127)** Let's make the same change to the broker with ID one.
>
> **[2:12](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=132)** I'm going to replace the original log configuration parameters with the new values that have specified for the previous broker.
>
> **[2:21](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=141)** Save this file as well and head over to server-2.properties and make the same change.
>
> **[2:27](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=147)** We'll reduce the log retention interval and the retention check interval to the new values that we have specified.
>
> **[2:34](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=154)** Now, having made these changes, let's restart our three brokers.
>
> **[2:38](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=158)** Here I restart broker with ID zero.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=161)** Server.0.properties is the name of the file.
>
> **[2:44](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=164)** Brokers are running, you'll need to kill them and then restart them.
>
> **[2:47](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=167)** Next I'm going to restart broker with ID one, server-1.properties, that's the name of the file.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=174)** And then finally, I'm going to restart the broker with ID two.
>
> **[2:58](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=178)** Server-2.properties is the name of this file.
>
> **[3:01](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=181)** The brokers are running with a new configuration.
>
> **[3:03](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=183)** I'm going to quickly head over and check the size of my logs.
>
> **[3:08](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=188)** My logs are still huge, 888 megabytes.
>
> **[3:12](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=192)** I'm going to wait for two or three minutes and then check the size of my logs once again.
>
> **[3:17](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=197)** And here you can see it's now just 892 kilobytes, less than one megabyte.
>
> **[3:23](https://www.linkedin.com/learning/tuning-kafka/tuning-log-retention?u=76281980&t=203)** My logs have been cleaned up, I have retrieved disc space for other users.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (2), you'll need (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


### 5. Performance Testing with Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Producer performance testing using Python](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=1)** - [Instructor] So far, we've been running all of our performance tests for the producer as well as for the consumer using console scripts that the Kafka installation gives us by default, but you can write your own code in [[Python (Programming Language)|Python]] or some other programming language to run these performance tests as well, and that's what we'll do in this demo.
>
> **[0:19](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=19)** We'll run some tests for the producer, writing our own custom Python code.
>
> **[0:24](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=24)** I'm going to create a new topic that my performance tests will use.
>
> **[0:28](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=28)** The name of the topic is producer_ perf_tests.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=32)** It has 10 partitions with the replication factor of three.
>
> **[0:36](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=36)** Go ahead and hit Enter and you'll see that the topic will have been created.
>
> **[0:41](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=41)** Let's run a describe command to ensure the topic is as we would expect.
>
> **[0:46](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=46)** Kafka topics dot sh describe the producer perf test.
>
> **[0:50](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=50)** Here you can see all of the 10 partitions, zero through nine and you can see that the replication factor is three.
>
> **[0:57](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=57)** There are three replicas for each partition.
>
> **[0:59](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=59)** In order to run test using Python, you need to have Python installed on your machine.
>
> **[1:05](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=65)** Notice the Python version that I have, 3.9.13.
>
> **[1:10](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=70)** Any Python version greater than about 3.7 will work well.
>
> **[1:15](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=75)** The exact version does not matter.
>
> **[1:17](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=77)** Now, the Kafka client that I'm going to be using in my Python code is the Kafka Python client so pip install kafka-python.
>
> **[1:27](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=87)** Now you should know that there are many Python based clients for Kafka out there.
>
> **[1:32](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=92)** Py Kafka is another client.
>
> **[1:34](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=94)** You can choose to use any of the others, here I've chosen to use Kafka Python.
>
> **[1:39](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=99)** Now that we pip installed the library, let's run an ls dash l and here you can see in my current folder, I have two Python files, one called producer_perf_testing, for testing the producer configurations, and another called consumer_perf_testing for testing consumer configurations.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=117)** Let's take a look at the producer_perf_testing file in Sublime Text.
>
> **[2:02](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=122)** Notice from the Kafka namespace, I import the Kafka producer.
>
> **[2:06](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=126)** I also import the time library, to time how long it takes to run the test to get information about throughput and latency.
>
> **[2:15](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=135)** On line four through six, you can see the topic that will publish messages to the count of messages 1 million, and the message size is a hundred bytes.
>
> **[2:25](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=145)** I configure the payload of each message at random and the bootstrap servers are used are the three brokers in my cluster.
>
> **[2:33](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=153)** The actual performance test is defined within the run test function, which takes us input, arguments the topic to which messages should be published, the number of messages, and the message size.
>
> **[2:44](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=164)** Next, on lines, 13 through 15, I instantiate the producer that we publish messages and I pass in the configuration properties for that producer.
>
> **[2:54](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=174)** The producer will use acks equal to all, batch size is 25,000, and linger in milliseconds is a 100 milliseconds.
>
> **[3:02](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=182)** We can ignore the commented out code for now.
>
> **[3:04](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=184)** On line 21, I start the timer, and then on lines 23 and 24, I run a for loop, sending 1 million messages on my topic, and then online, 26, I call producer.flush to make sure all messages are sent.
>
> **[3:20](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=200)** And then I compute how long this took online 28.
>
> **[3:24](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=204)** On lines 30 through 34, I print out a number of details, how many messages were processed and how many seconds the throughput in megabytes per second, and the throughput in number of messages per second.
>
> **[3:36](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=216)** And within the main method, at the bottom, I simply call run test.
>
> **[3:41](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=221)** Now let's switch over to the terminal window, and let's run this producer perf test on the producer that we have set up.
>
> **[3:49](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=229)** Now, this test will take about one and a half minutes to run.
>
> **[3:52](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=232)** That's just a heads up to you, and soon you'll see the results.
>
> **[3:55](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=235)** The throughput is 1.07 megabytes per second, which is roughly 11,000 messages per second.
>
> **[4:03](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=243)** Now, let's change the producer properties and run this test once again.
>
> **[4:08](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=248)** Back to Sublime Text, I'm going to comment out this producer that I'd used previously, and uncomment this new producer.
>
> **[4:15](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=255)** Now for this producer, I've specified compression type as gzip, which has the best compression ratio.
>
> **[4:21](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=261)** I haven't specified the bat size or the linger ms.
>
> **[4:24](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=264)** Now let's run the same test once again, make sure you save this file and let's head back to the terminal window and run the producer_perf_testing.py file, and this time around 1 million messages will be processed much faster in 71.02 seconds.
>
> **[4:41](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=281)** Throughput has improved, it's 1.34 megabytes per second, and roughly 14,000 messages per second.
>
> **[4:48](https://www.linkedin.com/learning/tuning-kafka/producer-performance-testing-using-python?u=76281980&t=288)** The improvement in the throughput is because of the compression that we used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12)
> **CLI Commands:** python (12), pip (2), make (2), ls (1)
> **Code Identifiers:** producer_perf_testing (3), perf_tests (1), consumer_perf_testing (1)
> **Versions:** 3.9.13 (1), 3.7 (1), 1.07 (1), 71.02 (1), 1.34 (1)
> **Tools:** sublime (2), terminal (2)
> **Prerequisites:** you need to have (1), install (1), configure (1), set up (1)
> **Definitions:** is a  (2)
> **File Paths:** producer_perf_testing.py (1)

#### [Consumer perf testing using Python](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=1)** - [Instructor] Just like we ran tests for producers using [[Python (Programming Language)|Python]], we can also test consumers using Python once again.
>
> **[0:08](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=8)** Let's create a new topic for this using Kafka Topics.
>
> **[0:10](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=10)** The name of the topic is consumer_perf_tests, partitions 10, replication-factor three.
>
> **[0:16](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=16)** Now, once this topic has been created, let's quickly confirm that the topic is as we expect.
>
> **[0:21](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=21)** I'm going to use the describe command to see what this topic looks like.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=26)** And here you can see 10 partitions, zero through nine, and three replicas for each partition.
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=32)** I'll now open up the consumer_perf_testing.py file in Sublime Text.
>
> **[0:38](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=38)** Notice that I import the KafkaConsumer, as well as the KafkaProducer, up top.
>
> **[0:44](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=44)** I also import time.
>
> **[0:45](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=45)** On lines six through eight, I have the topic, consumer_perf_tests, 1 million messages will be sent to that topic and consumed from that topic.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=54)** Message size is 100.
>
> **[0:55](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=55)** On lines 10 and 11, I configure the payload for the messages, I set up the bootstrap_servers.
>
> **[1:01](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=61)** Then, on line 14, I have a function definition.
>
> **[1:04](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=64)** This is the function that will produce messages that will be published to the topic.
>
> **[1:10](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=70)** All I do here is instantiate a KafkaProducer, which uses acks equal to all, compression type is gzip and this will send 1 million messages to the consumer_perf_tests topic.
>
> **[1:22](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=82)** And in the end, print out, produced n messages.
>
> **[1:26](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=86)** What we are actually going to be testing is the consumer and I do this within a run_test, which takes a topic as an input argument.
>
> **[1:34](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=94)** I instantiate the consumer on lines 29 through 35 and then I have specified a bunch of consumer-specific configuration properties on lines 31 through 34.
>
> **[1:44](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=104)** All of these are properties that you're familiar with that we've seen in previous demos.
>
> **[1:50](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=110)** Next, we have n_messages set to zero on line 37.
>
> **[1:54](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=114)** We start the timer on the consumer.
>
> **[1:57](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=117)** Consumer.subscribe will subscribe to a topic.
>
> **[1:59](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=119)** For every message in the consumer, we will increment the number of messages that the consumer has read and once the number of messages is greater than message count, we'll break out of the for loop.
>
> **[2:11](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=131)** We'll call consumer.close to close out the consumer.
>
> **[2:14](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=134)** We'll print out how many messages were consumed in how much time, and then the throughput in megabytes per second and messages per second.
>
> **[2:24](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=144)** And here, in the main function, I call produce_messages to publish messages to the topic first and then run_test to consume the messages that were published.
>
> **[2:33](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=153)** And that's it.
>
> **[2:34](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=154)** Let's switch over to the terminal window and run this consumer_perf_testing Python file.
>
> **[2:41](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=161)** Now, this will take some time to run through.
>
> **[2:43](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=163)** First, 1 million messages need to be published to that topic and then our consumer will start consuming those messages.
>
> **[2:49](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=169)** 1 million messages consumed in 18.24 seconds at 0.63 megabytes per second and roughly 55,000 messages per second.
>
> **[2:59](https://www.linkedin.com/learning/tuning-kafka/consumer-perf-testing-using-python?u=76281980&t=179)** You can always tweak your consumer's properties to see how these metrics change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **Code Identifiers:** consumer_perf_tests (3), consumer_perf_testing (2), run_test (2), bootstrap_servers (1), n_messages (1)
> **CLI Commands:** python (3)
> **Versions:** 18.24 (1), 0.63 (1)
> **Tools:** sublime (1), terminal (1)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** consumer_perf_testing.py (1)
> **Analogies:** just like (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary and next steps](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=1)** - [Instructor] And with this demo, we come to the very end of this course on tuning Kafka.
>
> **[0:06](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=6)** Here's a quick look at all of what we covered in this course.
>
> **[0:09](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=9)** We started off by understanding the trade offs involved in Kafka optimization between latency and throughput and durability and availability.
>
> **[0:18](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=18)** We then saw what properties we could use to tune Kafka producers, consumers, and Kafka brokers.
>
> **[0:26](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=26)** And finally, we saw how we could measure performance in [[Apache Kafka]] using [[Python (Programming Language)|Python]].
>
> **[0:32](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=32)** This brings us to the very end of this course.
>
> **[0:34](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=34)** If you're interested in [[Big Data]] processing here are some other courses on [[LinkedIn]] Learning that you could watch.
>
> **[0:40](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=40)** [[[[Apache Spark]] Essential Training- Big Data Engineering]], Deploying and Running Apache Kafka on [[Kubernetes]], or Stream Processing [[Design Patterns]] with Kafka Streams.
>
> **[0:51](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=51)** It's time for me to say goodbye.
>
> **[0:53](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=53)** Thank you for listening.
>
> **[0:54](https://www.linkedin.com/learning/tuning-kafka/summary-and-next-steps?u=76281980&t=54)** I hope you enjoyed this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Apache Kafka]] (2), [[Big Data]] (2), [[Python (Programming Language)|Python]] (1), [[LinkedIn]] (1), [[Apache Spark]] (1)
> **CLI Commands:** apache (3), python (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Apache Kafka
- Performance Tuning

## Path Context

### In [[Master Data Engineering]]
← [[Troubleshooting and Debugging Kafka]] | **3 of 8** | [[Architecting Big Data Applications- Batch Mode Application Engineering]] →

## Appears In

- [[Master Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Performance Tuning in Spring Apps]] — Performance Tuning
- [[Apache Kafka Essential Training- Getting Started]] — Apache Kafka
- [[Node.js- Debugging and Performance Tuning]] — Performance Tuning
- [[Troubleshooting and Debugging Kafka]] — Apache Kafka
- [[Apache Kafka Essential Training Building Scalable Applications]] — Apache Kafka

---

[↑ Back to top](#)