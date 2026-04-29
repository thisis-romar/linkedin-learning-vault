---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: troubleshooting-and-debugging-kafka
url: "https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka"
duration_minutes: 130
duration: 2h 10m
level: Advanced
updated: 7/12/2023
learners: 14804
skills:
  - Apache Kafka
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHCksw3BHDjsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689008871465?e=2147483647&amp;v=beta&amp;t=WU920LlkQbZxfYmr4GmIJy3-uVcOWsB8YVOTmuzFY68"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
prev_courses:
  - '[[Apache Kafka Essential Training Building Scalable Applications]]'
next_courses:
  - '[[Tuning Kafka]]'
path_nav: '[{"path":"Master Data Engineering","position":2,"total":8,"prev":"Apache Kafka Essential Training Building Scalable Applications","next":"Tuning Kafka"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/apache-kafka
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Troubleshooting%20and%20Debugging%20Kafka.md)

![Troubleshooting and Debugging Kafka](https://media.licdn.com/dms/image/v2/D560DAQHCksw3BHDjsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689008871465?e=2147483647&amp;v=beta&amp;t=WU920LlkQbZxfYmr4GmIJy3-uVcOWsB8YVOTmuzFY68)

# Troubleshooting and Debugging Kafka

> In this course, learn to troubleshoot and debug Kafka, so you can get to the root of any issues you encounter instead of solving individual problems as they arise. Instructor Janani Ravi shows how you can use the Confluent platform—a full-scale data streaming platform that lets you easily access, store, and manage data as continuous, real-time streams—to expand the benefits of Kafka with enterpris

> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka) | 2h 10m | Advanced | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Introducing Cloud-Native Kafka on Confluent]]** (6 videos)
- **[[#3. 2. Observing Consumers and Brokers]]** (4 videos)
- **[[#4. 3. Processing Kafka Streams]]** (4 videos)
- **[[#5. 4. Monitoring Consumer Groups]]** (6 videos)
- **[[#6. 5. Monitoring Multi-Broker Clusters]]** (5 videos)
- **[[#7. 6. Debugging Brokers and Consumers]]** (3 videos)
- **[[#8. 7. Configuring Alerts]]** (2 videos)
- **[[#9. Conclusion]]** (1 videos)

### 1. Introduction

#### Overview of troubleshooting and debugging Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=0)** Hi, and welcome to this course on troubleshooting and debugging Kafka.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=5)** Now this is an intermediate level course, which means I assume that you are familiar with the Apache Kafka stream-processing platform.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=13)** Here is a quick overview for those who need a quick refresher.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=16)** Apache Kafka is a distributed event store and stream processing platform.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=21)** It provides a unified, high throughput, low latency platform for handling real-time data feeds.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=28)** Any time you want a messaging service to work with real-time data, you'll turn to Apache Kafka.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=34)** So it's a real time streaming platform.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=37)** You work with streams of messages in Apache Kafka using publishers and subscribers called producers and consumers in Kafka. Publishers publish messages to a topic, and subscribers subscribe to a stream of records.
>
> **[0:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=52)** Apache Kafka stores these streams in a robust and fault, tolerant manner.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=58)** These streams are replicated and they won't disappear even if the servers in your cluster go down.
>
> **[1:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=64)** Apache Kafka is not only a message broker, that is, not only does it allow you to publish and subscribe to streams, you can also process streams of records using Kafka.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=75)** Working with Kafka standalone is difficult because it may not provide all of the tools and utilities that you need in a production environment, and that's where the Confluent platform comes in.
>
> **[1:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=87)** The Confluent platform is a full scale data streaming platform that enables you to easily access, store, and manage data as continuous real-time streams.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=97)** And the main thing about Confluent, it works with Apache Kafka at its core. The Confluent platform is built on top of Kafka.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=105)** It was built by the original creators of Kafka, but Confluent goes beyond Kafka.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=111)** It expands the benefit of Kafka with enterprise grade features that a production environment needs.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=118)** It greatly improves Kafka management and monitoring.
>
> **[2:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=121)** Here is a high level architectural overview of the components that make up the Confluent platform.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=128)** We have security, resiliency, performance, management, and monitoring development, but at the core lies Apache Kafka.
>
> **[2:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=136)** The Confluent platform deals with streams of messages using Kafka, brokers, producers, and consumers.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=143)** Now the Confluent platform is much more than Apache Kafka, but it's built with Apache Kafka distributed streaming at its core.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=152)** The idea behind Confluent is that it makes it easier for you to work with streams because it completely abstracts away the underlying mechanics of streams.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=162)** It also makes it simple for you to connect to different sources so you can source data from different sources into Kafka, and you can also build streaming apps easily.
>
> **[2:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=173)** One of the most important reasons for Confluent being so popular is because how easy it makes it for us to work with Kafka.
>
> **[3:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=181)** It eases the security of the cluster, managing and monitoring the cluster.
>
> **[3:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=186)** Everything to do with infrastructure is easier with Confluent.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=190)** Now this management and monitoring component of the Confluent platform is what we are going to be working with primarily in this course.
>
> **[3:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=197)** We'll be spending most of our time in the Confluent Control Center, which is a real time interactive UI to create, edit, and manage data streams on Apache Kafka.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=209)** The control center UI is comprehensive.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=212)** You can have metrics, visualizations, anything that you need to monitor streams, their throughput and latency.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=220)** You can also use the control center to identify, troubleshoot, and debug unhealthy components, whether they be brokers, consumers or other Kafka components.
>
> **[3:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=231)** The control Center also allows you to configure alerts for important components that you want to monitor.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-troubleshooting-and-debugging-kafka?u=76281980&t=238)** For example, you can have alerts on latency and completeness statistics of your data streams.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (11), make (1)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)


### 2. 1. Introducing Cloud-Native Kafka on Confluent

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=0)** Before we dive into the actual course contents, let's take a look at some of the prereqs that you need to have to make the most of your learning.
>
> **[0:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=8)** Going into this course, I assume that you are familiar with the Kafka messaging service and this is not the first time you're using Kafka.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=16)** In fact, there's a lot of Kafka terminology that I assume that you're familiar with.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=21)** You understand producers, consumers, brokers, you understand topics, their partitions and replication.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=29)** In addition to being familiar with Kafka, I also assume that you're familiar working with the Linux terminal.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=34)** The Confluent platform that we'll be using runs on Linux systems, so we'll be using a lot of shell commands on the terminal.
>
> **[0:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=42)** I also assume that you are familiar with the Python programming language.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=46)** Basic familiarity should be sufficient.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/prerequisites?u=76281980&t=48)** We'll be writing some code for producers and consumers in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Tools:** terminal (2)
> **Code Keywords:** let (1)
> **Prerequisites:** you need to have (1)

#### An overview of Apache Kafka
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=0)** In this movie, I'm going to do a very, very quick overview of Apache Kafka.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=5)** This is by no means a comprehensive discussion of Kafka concepts.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=9)** This is just meant to be a refresher.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=11)** Kafka is a stream-processing platform that allows you to work with real-time data.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=16)** An Apache Kafka cluster is made up of servers known as brokers.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=22)** And here is what basic Apache Kafka architecture looks like.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=26)** As you can see, it's a distributed platform to handle streaming data.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=29)** Servers in the cluster are referred to as brokers.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=33)** A cluster typically has multiple brokers.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=36)** More brokers add more fault tolerance to your cluster, and each broker will likely run in a different geographic region in a production environment.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=45)** Messages sent to the Kafka cluster are produced by Kafka producers.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=50)** These are publishers which publish events to the cluster, and these events are then consumed by consumers.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=58)** Producers and consumers in a Kafka cluster are decoupled from one another using topics. Publishers publish messages to topics, consumers consume messages from topics.
>
> **[1:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=70)** Now, every Kafka topic can be divided into one or more partitions.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=76)** Partitions can be thought of as the unit of parallelism for a Kafka topic.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=81)** Partitions allow distributed placement of events, which is very important for scaling.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=89)** Every partition of a topic is placed on a Kafka broker and partitions can be replicated based on the replication factor that you specify.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=97)** This means there will be multiple copies of the data in each partition, and each partitions replica will be placed on a different broker in a Kafka cluster.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=107)** Partitions are the unit of parallelism because when you have multiple consumers reading from a topic, these consumers can read from partitions in parallel, greatly speeding up the consumption of messages.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=122)** Here is a visual representation of a topic and its partitions.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/an-overview-of-apache-kafka?u=76281980&t=126)** Here, one topic has four partitions. You can see that writes happen to partitions in parallel, reads from partitions can also happen in parallel.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3)
> **Definitions:** is a  (2), known as (1)

#### The Confluent platform
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=0)** Coming into this course, I assume that you're familiar with Apache Kafka, but maybe you're not familiar with the Confluent platform.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=7)** So let's get a quick overview of what this platform is all about.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=11)** We've seen this definition before.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=13)** Confluent is an enterprise-grade platform built with Apache Kafka at its core.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=20)** Confluent tries to make it easy for you to access, store and manage continuous streams of data in a production environment.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=29)** Even though the Confluent platform is essentially Apache Kafka at the core, it's more than just Kafka.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=36)** Working with Kafka in a production environment requires many additional services and tools, and Confluent has all of these. Because Confluent is built around Apache Kafka, it leverages Kafka brokers, Kafka's Java client APIs, and the Connect API that you can use to connect data sources to Kafka.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=57)** Confluent expands the development and connectivity features that Kafka offers.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=63)** This makes it easy to connect a variety of external sources of data to Kafka, as well as syncs of data.
>
> **[1:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=70)** Data can be streamed in from diverse sources and streamed out to diverse sources.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=76)** What's going to be really pivotal in this course is the management and monitoring support that Confluent has to offer.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=84)** We have a great interactive user interface to manage, monitor, troubleshoot, and debug Kafka streams.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=91)** The monitoring support is available via the Confluent Control Center, which is an interactive real time administrative UI.
>
> **[1:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=101)** The control center gives you an insight into your cluster health and allows you to monitor, observe, and debug the messages passing through your cluster.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=111)** You'll get nice metrics and visualizations for all of your streams, allowing you to monitor throughput and latency of brokers topics everything.
>
> **[2:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=123)** If your Kafka components fail as they might in the real world, you'll be able to identify and troubleshoot these components using the Control Center.
>
> **[2:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=133)** The Control Center also allows you to configure alerts for events that you're specifically interested in.
>
> **[2:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=138)** If an event goes beyond a particular threshold, an alert will be triggered and you can receive an email, a slack notification or a pager call.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=148)** Here is a visual of a replicated cluster in Apache Kafka.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=152)** Imagine that this is the Kafka environment without the Control Center, we have producers producing messages, consumers consuming messages and replicators, copying data from one cluster to another.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=164)** When you use the Control Center on the Confluent platform, it adds in hooks to your Kafka cluster.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=170)** The control center uses interceptors embedded in the cluster to monitor and observe the cluster's health.
>
> **[2:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=178)** The Confluent platform has many more features for performance, scalability, security.
>
> **[3:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=184)** We won't really be focusing on those in this course.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=187)** The Confluent platform has a wide variety of integrations so that it works with other technologies and other services outside of Confluent.
>
> **[3:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=197)** Now Confluent has two modes of running.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=200)** It can run on-premises on the customer's data center or it can run on public cloud infrastructure like on AWS or Azure.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=209)** It can also run on the Confluent cloud platform.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=212)** Confluent has integrations and hooks that allows it to integrate with external data sources, ingest streaming data, and support real-time applications in a complete manner.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=226)** Confluent has an enterprise version of which we are going to use a free trial and a community version.
>
> **[3:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=232)** Here are Confluent community features.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=235)** ksqlDB is the streaming SQL engine for Kafka that allows you to do stream processing using SQL. Confluent Connectors to Kafka, leverage the Kafka Connect API to connect Kafka to other systems such as databases, search indices, file systems, and so on.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=251)** Confluent Clients are libraries in different languages that work with Confluent.
>
> **[4:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=256)** These languages include C, C++, Python, Go, and the .Net Library.
>
> **[4:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=262)** The Confluent Schema Registry allows us to register and evolve schemas for our streaming data.
>
> **[4:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=270)** The Confluent REST Proxy provides a rest API that allows you to work with Confluent from any programming language by invoking these restful APIs. And Confluent provides a command line interface, the CLI that you can use to interact with Confluent and other command line tools.
>
> **[4:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=288)** Now Confluent for the Enterprise provides many, many more features, some of which are listed out here.
>
> **[4:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=295)** Now, I won't be discussing each of these features in detail.
>
> **[4:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=298)** I encourage you to read the Confluent documentation to explore and understand these features on your own.
>
> **[5:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=305)** The Confluent Control Center, well, we've discussed that, we know what that does.
>
> **[5:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/the-confluent-platform?u=76281980&t=310)** We are going to be using that extensively in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (5), make (1), aws (1), python (1)
> **Env Vars:** api (3), sql (2), aws (1), rest (1), cli (1)
> **Code Keywords:** interface (2), let (1), public (1)
> **Tools:** command line (2), slack (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** imagine (1), such as (1)
> **Warnings:** troubleshoot (2)
> **Code Identifiers:** ksqldb (1)

#### Downloading the Confluent platform binaries
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=0)** In this demo, we'll get set up with the Confluent platform.
>
> **[0:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=3)** The Confluent platform runs and manage Apache Kafka service at its core, and it has a number of different services that integrate with Apache Kafka and make it easier to work with Kafka.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=15)** The Confluent platform is only compatible with Linux-based systems.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=20)** The steps that I'll be following to install the Confluent platform on a macOS machine is applicable for Linux versions as well.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=28)** You can see on this page @docs.[confluent.io](https://confluent.io), all of the supported versions and interoperability for the Confluent platform. For each version of the Confluent platform, here, you can see what version of Apache Kafka it runs and when it was released. We'll be working with the latest version at the time of this recording, Version 7.3.x, which runs Apache Kafka 3.3.x As you scroll down, you'll be able to see all of the details for each of the Confluent versions.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=59)** And here you can see what operating systems are supported by the different Confluent platform versions.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=65)** Observe that all of these are Linux operating systems, Debian, Ubuntu or Red Hat Enterprise Linux.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=73)** In this course, we will not be working with the production deployment of the Confluent platform.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=79)** Instead, we'll work with a deployment that's suitable for testing and development purposes on a macOS platform.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=85)** So you can see that MacOS 10.14 and later is supported for testing and development.
>
> **[1:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=92)** If you have a Linux base machine running a flavor of Ubuntu or Debian, you can use that for the demos in this course.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=100)** At the time of this recording, the Confluent platform supports Java 17 or Java 11.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=106)** Java 8 is soon to be deprecated.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=108)** Now when you are doing this course, I recommend you check out this page to figure out the right Java version for the Confluent platform.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=116)** I also recommend that you check out the right Java version for the other components, specifically the confluent CLI.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=122)** I'll be using Java 11 for this course because the confluence CLI worked well with Java 11.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=128)** In order to get installed and set up with Confluent on your local machine, you need to head over to [confluent.io](https://confluent.io), get started.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=135)** Now here you'll have an option to work with Confluent on the cloud or access the software, select the software option and specify your personal details.
>
> **[2:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=145)** You need your name, your company, your email address, where you're located, and make sure you accept the terms of agreement for the Confluent platform.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=154)** Once you've done this, click on the "Start Free" option, and you'll be taken to a page where you'll have the tar and zip files that you can download to run Confluent locally.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=164)** If you scroll down further on this page, you'll find the Confluent binaries for running Confluent in a distributed manner on a cluster of machines.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=172)** And you'll also find binaries for the community edition of the Confluent platform.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=176)** We'll work with the enterprise edition, but we'll run it on a single machine.
>
> **[3:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=181)** Go ahead and click on the "Download" button here to download the zip file to your local machine.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=187)** Notice, I now have Confluent locally available.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=190)** I'm now going to head into the downloads folder and extract this zip file, rather unzip this zip file.
>
> **[3:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=197)** You can see that it's available right here under downloads, Confluent-7.3.3.zip.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=204)** Go ahead and run the unzip command in order to extract the contents of this Confluent zip file.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/downloading-the-confluent-platform-binaries?u=76281980&t=212)** Once this unzip is complete in the next movie, we'll see how we can bring up the Confluent platform running on our local machine.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), unzip (3), make (2), find (2), tar (1)
> **Versions:** java 11 (3), version 7 (1), 3.3 (1), 10.14 (1), java 17 (1)
> **UI Navigation:** scroll down (2), click on (2), select the (1)
> **Exercise Files:** zip file (3), download the (1)
> **Prerequisites:** set up (2), install (1)
> **Code Identifiers:** macos (2)
> **URLs:** [confluent.io](https://confluent.io) (2)
> **Env Vars:** cli (2)

#### Running the Confluent platform locally
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=0)** In the previous movie, we downloaded the Confluent binaries, and here I am in my downloads folder.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=5)** I'm going to run an ls -l command and look for the Confluent binaries, and you can see that they are available here.
>
> **[0:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=12)** The confluent folder has been extracted and you can see within that folder we have a README, a bin subfolder, an etc subfolder, a list subfolder, and so on.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=22)** Let's just move this Confluent subfolder into the tools folder in my home directory.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=29)** That's where I keep all of the binaries that are installed.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=32)** Once this is done, I'm going to cd into the tools subfolder and run an ls command, and you can see the Confluent folder that we moved in there.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=40)** Now I also have a Kafka installation, but you can absolutely ignore that.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=44)** It just happens to be on my machine, but that's not what we are going to be using.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=48)** We are going to be using Apache Kafka with the Confluent platform.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=51)** Now let's confirm that I have the right Java version.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=54)** Notice that I have Java 11 installed.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=57)** The Confluent platform runs on Java 17 and Java 11.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=61)** At the time of this recording, the confluent cloud is compatible with Java 11, and that's why I've chosen this.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=67)** Now I'm going to open up my bash profile and configure the environment variables that I need to work with Confluent. Now, I have Kafka-related environment variables, ignore that, export the confluent home environment variable, and make sure that this is configured in your path environment variable as well.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=86)** Once this is done, you can exit out of your bash profile file or whatever profile file where you're configuring these environment variables and we'll run the source command on the terminal to make sure that these environment variables are present in our current session.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=100)** After you configure the environment variables, let's install one other component that's going to be very useful for our demos, this is Kafka-connect-datagen.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=110)** The datagen connector is a Confluent platform connector which generates mock data that will be fed to Apache Kafka topics.
>
> **[1:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=119)** This is very useful for us to run our demos and kind of simulate slow consumers and a bunch of other things.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=125)** So make sure you run this command to install datagen.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=128)** We are now very, very close to being done with our setup. Now, because we have the Confluent home configured in our path, we can run Confluent command, so run Confluent version and you can see the version of the Confluent CLI that you're working with. In order to see all of the commands that you can use with this local installation of Confluent, remember, this is a single-node testing and development installation, run the Confluent local command.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=155)** Observe that this allows us to try out the Confluent platform by running a single-node instance locally on our machine, which is exactly what we want.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=164)** Now, if you run Confluent local current, this will give you the path of your current local installation of Confluent.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=172)** And in my case, this installation happens to be under var folders.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=176)** In order to run the Confluent platform locally, you'll have to bring up a number of different services.
>
> **[3:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=181)** Confluent Local services will show you what these services are and the commands that you can use with them.
>
> **[3:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=188)** Here is a list of the services that Confluent will run.
>
> **[3:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=191)** We have Kafka at the very center, this is Apache Kafka.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=195)** Then we have a REST API for Apache Kafka, Kafka REST.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=199)** We have the Control Center, which is the user interface that we'll use to monitor and troubleshoot Kafka.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=205)** That's where we'll be spending most of our time.
>
> **[3:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=207)** We have ZooKeeper to manage Kafka, the Schema Registry, and the ksql server that will allow us to run SQL queries on our streams.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=217)** Okay. Everything looks good here.
>
> **[3:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=218)** I'm going to use Confluent local services start in order to bring up all of these local services which will run a single-node Confluent platform instance on my machine.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=230)** Now this took about 3 or 4 minutes to be up and running.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-the-confluent-platform-locally?u=76281980&t=235)** Now, if for some reason a service doesn't come up, that is, it fails, simply call Confluent Local services stop and then start once again to bring them up once again.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), make (3), node (3), ls (2), cd (1)
> **Code Keywords:** let (3), this. (1), case, (1), var (1), interface (1)
> **Env Vars:** rest (2), readme (1), cli (1), api (1), sql (1)
> **Prerequisites:** configure (2), install (2), setup (1)
> **Versions:** java 11 (3), java 17 (1)
> **Tools:** bash (2), terminal (1)
> **Definitions:** is a  (3)
> **Warnings:** troubleshoot (1)

#### Overview of the control center
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=0)** Now that we've successfully brought up the Confluent platform for local testing and development, let's head over to localhost 9021, which is where we'll be able to work with the Confluent Control Center.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=13)** The Confluent Control Center is the administrative user interface that you can use to interact with the Confluent platform with Apache Kafka on the platform.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=22)** By default, we have a single-node cluster with a single broker running and you can see that it's healthy.
>
> **[0:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=27)** If you scroll down, you can see the name of the cluster is controlcenter.cluster, and you can see a quick overview of the cluster, including brokers, partitions, topics, and so on.
>
> **[0:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=38)** Let's click through and take a look at the details.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=41)** This will take you to the main landing page and you can use the left navigation pane to actually navigate to the component that you're interested in monitoring.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=51)** As you can see, we are on the cluster overview page, but you can also dive deeper into brokers, topics, connections that you've set up to the cluster KsqlDB consumers, and so on.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=62)** The Kafka cluster that we are running on our local machine has a single broker.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=67)** Notice that there are 60 topics that have already been created and there are a total of 320 partitions.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=74)** Now we haven't created those topics.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=76)** These are topics that are internal to the Confluent platform.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=80)** Things look healthy.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=81)** There are no under replicated partitions, so all partitions have up to date information.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=86)** There are no out-of-sync replicas.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=89)** Let's scroll down further.
>
> **[1:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=90)** You can see we have one cluster that we can connect to, and KsqlDB is running on that cluster.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=96)** Now, let's head over to brokers and look at brokers in more detail.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=100)** We can see here that there are 60 internal topics that have been created, a total of 320 partitions and 320 replicas.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=108)** The broker that's running has an ID of zero.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=112)** ZooKeeper is also healthy, it's up and running.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=115)** I'll leave it to you to explore this page on your own.
>
> **[1:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=117)** There's a bunch of information about other features that the Confluent platform supports, like self-balance clusters, tiered storage, and so on.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=126)** But here at the very bottom, you can see details of the single broker that is up and running on our local machine, throughput, latency, and any other details that you want to look at.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=137)** Let's continue our exploration.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=139)** I'm going to head over to the topics section, and you can see that there is one topic present here by default.
>
> **[2:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=146)** This topic contains the log files for ksql processing.
>
> **[2:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=150)** This is internal to the Confluent platform, and if you uncheck hide internal topics, you will see all of the 60 topics that have been created.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=159)** Observe that for every topic, you see the status of the topic whether it's healthy or not, how many partitions the topic has, the production column gives you the throughput of the topic, and you can actually scroll over to the right and see the followers observers of this topic.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=175)** And then a message was last produced to this topic.
>
> **[2:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=178)** We'll be using this UI a lot.
>
> **[3:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=180)** Now, if you're interested in one particular topic, you can click through and view additional details.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=185)** Here, you can see the production and consumption for one topic, the default ksql processing log.
>
> **[3:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=191)** This page gives you topic availability, whether there are under replicated partitions, whether there are out of sync followers, and how much storage is taken up by that topic.
>
> **[3:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=201)** And at the very bottom, you'll be able to see the number of partitions for that topic and get information about each partition.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=208)** You can actually work with the topic directly in this UI.
>
> **[3:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=210)** If you head over to messages, you can actually produce new messages to this topic and view the messages that are currently being generated.
>
> **[3:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=219)** This is where you can see the schema of the messages, and if you head over to the configuration, you will see all of the config settings that have been applied to this topic.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=229)** Here, by default, you have a more manageable view, just the general settings.
>
> **[3:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=232)** If you want the full configuration, click on "Show full configuration," and this will give you all of the configuration settings for this particular topic.
>
> **[4:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=242)** You can also edit these settings and manage your topic from right here.
>
> **[4:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=246)** You can also delete the topic if you want to.
>
> **[4:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=249)** If you head over to the connect section, you'll be able to monitor and administer all of the connections made to this Kafka topic.
>
> **[4:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=257)** We'll be setting up connections during the course of our demos so we can just quickly head over to the next section, ksqlDB.
>
> **[4:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=263)** ksqlDB is the streaming SQL engine for Kafka that allows us to perform stream processing tasks using this SQL.
>
> **[4:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=272)** The Control Center can also be used to monitor consumers for the various topics that you have in your cluster.
>
> **[4:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=279)** All of your Kafka consumer groups will be available right here, and you can monitor each of these individually.
>
> **[4:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=286)** This is where we'll go to troubleshoot and identify slow consumers, consumers that are not keeping up with messages.
>
> **[4:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=293)** These are internal consumers here in the Kafka platform.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=296)** Let's click through to one, and you will see what the consumer UI looks like.
>
> **[5:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=300)** Observe the consumer like here, this consumer is horribly behind, 8,431 messages behind.
>
> **[5:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=307)** You also get a visual representation of every consumer in this consumer group and how it's falling behind or keeping up.
>
> **[5:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=315)** If your consumer clients have been instrumented with the Confluent platform interceptors, you'll be able to view additional details about the consumption, like percentage of messages consumed, end-to-end latency, and so on.
>
> **[5:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=329)** Instrumenting the binaries of the client APIs, that's a topic beyond this course, but you will see that even without that, we can still monitor a lot of details about consumers.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=339)** The Replicator section is where you can manage your replicator connectors, again, beyond the scope of this course.
>
> **[5:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=344)** Cluster settings is where you can configure and view what settings have been used for your cluster.
>
> **[5:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=351)** We have cluster defaults and a bunch of other settings.
>
> **[5:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=354)** Notice that all of the settings are grouped into categories.
>
> **[5:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=359)** You can expand each of these categories to view the individual cluster settings.
>
> **[6:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=365)** For example, let's say you're interested in general settings, this is where you'll see it.
>
> **[6:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=369)** Notice we have default settings and settings that have been overridden in specific config files.
>
> **[6:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=375)** For example, the broker ID has been overridden in the server.properties file, and a single broker runs with an ID of 0, whereas the default is -1.
>
> **[6:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=386)** And you will see this across all of the settings here.
>
> **[6:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/overview-of-the-control-center?u=76281980&t=388)** For example, if you're interested in viewing and configuring log-related settings, you should go to the log section, and you can see the overridden properties, the default properties that a cluster uses, everything that you need.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), default, (2), interface (1), self (1), continue (1)
> **UI Navigation:** scroll down (2), go to (2), navigate to (1), click on (1)
> **Analogies:** for example (3)
> **CLI Commands:** apache (1), node (1)
> **Code Identifiers:** ksqldb (2)
> **Env Vars:** sql (2)
> **Prerequisites:** set up (1), configure (1)
> **Warnings:** troubleshoot (1)


### 3. 2. Observing Consumers and Brokers

#### Observing message production and consumption
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=0)** Here we are.
>
> **[0:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=1)** We have the Confluent platform up and running, and we've also taken a look at the Control Center.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=6)** So let's go ahead and create our first topic in Apache Kafka, and for that, we'll use the command line.
>
> **[0:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=14)** Kafka Topics is available within the bin folder of your Confluent home.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=18)** You can simply run kafka-topics --list, point to the bootstrap server, and you'll be able to see the list of topics available in Kafka at this point in time.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=28)** Now, you might say that there are a whole bunch of topics here, and I didn't create these.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=33)** As we've already discussed, all of these are topics internal to the Confluent platform.
>
> **[0:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=39)** But for now, we'll go ahead and create our own topic using Kafka topics once again.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=44)** Specify the --create flag.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=47)** The name of the topic is first_topic.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=49)** This is going to have one partition and a replication factor of one.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=53)** Go ahead and hit "Enter," and this topic will be created.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=57)** Now, the warning that you see here, you can ignore. Kafka treats, the underscore, and the period within the name of a topic in the same way.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=65)** So you should stick to periods or underscore and not mix those two up.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=69)** We'll stick with the underscore.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=71)** Now I'm going to run a console producer on the terminal window after the left to publish messages to first topic.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=78)** I use the kafka-console-producer command.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=81)** Now, I'm going to run a console consumer to consume messages from the first topic on the terminal off to the right.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=88)** Now, let's go ahead and publish a few messages and then we can see how we can monitor these messages using the Confluent Control Center.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=96)** So I have the first message published here, and you can see the first message has been received by the console consumer.
>
> **[1:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=102)** Let's go ahead and publish the second message, and soon that will be received by the console consumer as well.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=107)** Things look good.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=108)** I'll publish one more message.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=110)** This is message Number 3, and this will also be received by the console consumer.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=116)** Now, I'm going to publish a message after waiting 2 or 3 minutes, so wait for a bit and let's publish three messages in quick succession.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=125)** This will be Message 4, 5, and 6.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=128)** As you can see, all of these messages are received successfully by the console consumer. Our confluent, platform install and setup seems to be working well.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=137)** Let's head over to control center and see whether we can monitor the new topic and the messages that we've sent.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=144)** Click through to the Control Center Cluster, the only cluster that we have.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=148)** Immediately, something should jump out at you.
>
> **[2:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=150)** Notice the number of topics has jumped to 61.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=153)** It was 60 earlier.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=154)** We now have 321 partitions.
>
> **[2:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=157)** This new additional topic that you can see here is the topic that we have created.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=162)** Head over to "Brokers," and you'll see the same information, 61 topics with 321 partitions and 321 replicas.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=170)** Our cluster here is running a single broker.
>
> **[2:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=173)** We'll run a four-broker cluster in just a little bit later on in this course.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=177)** And for now, that single broker, broker with ID zero seems to be doing quite well.
>
> **[3:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=182)** Nothing really wrong there.
>
> **[3:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=183)** Let's head over to topics, and there is our first topic that we created there, and you can see that it's healthy.
>
> **[3:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=189)** You can see that it has one partition.
>
> **[3:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=191)** And if you scroll over to the right, you can see that it just produced the last message that was pushed to this topic.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=200)** If you want to monitor this topic in more detail, you need to click through to the topic and this is where you will see all of the partitions, replicas, the production and consumption graphs, the availability of the topic, everything that you need.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=213)** We have a single partition that is available and there are no replicas here.
>
> **[3:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=218)** If you scroll over to the right, notice the offset end is six.
>
> **[3:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=221)** That's because we've published six messages to this topic, and that is the new offset.
>
> **[3:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=225)** The offset will be incremented by one for each message that you publish.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=229)** You can also see the total size of messages published so far, just 517 bytes.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=235)** Now with just six messages, this information may not be interesting, but the production and consumption graphs that you see here will allow you to monitor the data patterns for messages published to this topic and consumed from this topic.
>
> **[4:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=249)** Observe that you can see two spikes in the throughput graph, bytes produced per second.
>
> **[4:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=255)** That's because we produce messages in two batches of three messages.
>
> **[4:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=259)** I waited for about a few minutes before the first three and the last three messages.
>
> **[4:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=264)** All our messages were successfully published.
>
> **[4:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=266)** There were no failed production requests.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=268)** Let's head over to the consumption graph that's available in the consumption tab, and you can see that the messages were consumed successfully as well.
>
> **[4:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-message-production-and-consumption?u=76281980&t=276)** There were no failed consumption requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **Tools:** terminal (2), command line (1)
> **Prerequisites:** install (1), setup (1)
> **CLI Commands:** apache (1)
> **Code Identifiers:** first_topic (1)
> **Warnings:** warning (1)

#### Produce messages using the control center
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=0)** Let's now see how we can use the Confluent Control Center to create a new topic and to publish messages to that topic.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=7)** Here I am in the main topics page.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=9)** I have the first topic already there.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=11)** I'm going to click on "Add Topic" in order to create a new topic.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=15)** Now you can ignore this message for now.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=18)** It says that it's not possible for high availability to be configured for our topic because we have just one broker running.
>
> **[0:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=25)** Later on when we run multiple brokers, we'll have a high availability configuration.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=30)** I'm going to go ahead and create a new topic called "random_topic" with just one partition.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=37)** Now, you can customize the settings of your topic if you want to, and you can actually specify to Confluent the kind of availability you want for your topic.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=46)** The default option is balanced availability and durability.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=50)** This enforces high replication with strict sync requirements.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=54)** And there are other options as well, low availability for testing and debugging, moderate availability.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=59)** But like I'd mentioned earlier, because we have just one broker, these other settings don't really make sense at this point in time.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=65)** Now, if you scroll down, you'll be able to see additional information.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=69)** This is where you can configure your custom availability, the replication factor for your topic and how many replicas.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=76)** This specifies the minimum number of replicas of a topic that need to be in sync before a write is acknowledged for a particular producer.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=85)** I'm just going to ignore all of this.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=86)** Let's head over to storage.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=88)** You can see the cleanup policy is deleting messages.
>
> **[1:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=90)** Retention time, one week, infinite messages.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=93)** We'll just stick with all of this.
>
> **[1:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=95)** In fact, we'll go back and create this topic with default settings.
>
> **[1:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=101)** So click on "Create with Defaults," and this topic will have been created.
>
> **[1:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=104)** Now, we haven't published any messages nor consumed any messages, so all of the graphs are just zero.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=110)** There's nothing here.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=111)** What's cool about the Confluent Control Center is that you can administer and test your topic from right within the UI.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=118)** If you head over to messages, this is where you can see the messages that have been published to this topic.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=124)** And in fact, you can produce and publish a new message from right here.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=128)** You can see there is a JSON message that has been automatically generated for you, something about orders and addresses.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=135)** You can actually publish this Json message with the key of 18 to the topic that we've just created.
>
> **[2:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=141)** Just click on the "Produce" button and this message will be produced and published to this topic.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=148)** Let's head over to our terminal window and set up a console consumer to consume these messages.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=152)** But first, I'm going to use Kafka topics to actually confirm that this topic has been created, and you can see that it has.
>
> **[2:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=160)** Name is random_topic, partition count 1, replication factor 1 and all of the other configuration.
>
> **[2:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=165)** These are just the defaults.
>
> **[2:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=167)** Now, let's use the kafka-console-consumer to actually consume messages from the random topic, and I'm going to consume from the beginning.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=175)** That's the flag that I have specified at the bottom.
>
> **[2:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=178)** Now, you can see that this is exactly one message that has been published and that message is now available in my console consumer.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=185)** If you're troubleshooting your Kafka setup and you have topics that are misbehaving, this is a great way to debug those topics.
>
> **[3:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=192)** Let's go ahead and publish another message here.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=195)** The city is Montgomery, state is Alabama.
>
> **[3:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=198)** I'm going to go ahead and click the "Produce" button and this message will also be published to my topic.
>
> **[3:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=206)** And I'm going to do this a few times.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=208)** I'm going to paste in a few more messages and confirm that these messages are being received by my console consumer.
>
> **[3:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=215)** So this is a quick and easy way to debug your topics from right within the Confluent Control Center.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/produce-messages-using-the-control-center?u=76281980&t=222)** Now, when I head over to the terminal window, I've published a total of four messages and all of these messages have been received by my consumer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2)
> **UI Navigation:** click on (3), scroll down (1)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (1), set up (1), setup (1)
> **Code Identifiers:** random_topic (2)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)

#### Using datagen to generate synthetic data
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=0)** If you feel that your Kafka cluster for some reason has poor performance, maybe its throughput is not as good, maybe it's displaying high latency.
>
> **[0:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=8)** You need a utility to be able to generate data that you can then use to troubleshoot your cluster.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=15)** And that utility on the Confluent platform is datagen.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=18)** The datagen connector in the Confluent platform is a source data connector, which is used to generate artificial or synthetic data for testing, development, debugging, troubleshooting, you name it.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=31)** The datagen connector can be used to create sample data for a variety of use cases, whether it's machine learning, ETL pipelines, you name it.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=40)** Once you configure the datagen connector, it will continuously produce data and publish to a topic that you can then use for debugging.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=48)** Before we configure and use the datagen connector, I'm going to delete this topic that I had, random_topic, Click on the "Delete Topic" button and specify the name of the topic.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=59)** Confirm that you want to delete this topic, and you're done.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=62)** Now, you don't really need to delete this topic, I just wanted to show you how it's done.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=66)** I'm now going to create a new topic which I'll then use to publish messages to using datagen.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=73)** The name of this topic is stock_market_data.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=76)** Number of partitions set to one.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=78)** Let's just create this topic using default configuration settings.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=82)** Now, nothing's being published to this topic yet, but we'll fix that. Now, in order to use the datagen connector, you need to head over to the "Connect" option and click through to "Connect Default," that is the cluster name.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=94)** Now, we have no connector setup yet, that's why you see all zeros.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=99)** But if you click on "Add Connector," this is what will allow you to add a new DatagenConnector.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=105)** You can see that datagen is not the only kind of connector that Confluent supports.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=109)** There are MirrorHeartbeatConnectors, MirrorCheckpointConnectors, ReplicatorSourceConnectors.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=114)** We'll just ignore all of that. For our testing and debugging purposes, we just need the DatagenConnector.
>
> **[2:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=121)** So click on this option.
>
> **[2:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=123)** You'll find that there are many configuration settings that you can use to control how exactly this DatagenConnector produces data and publishes to your topic.
>
> **[2:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=133)** We'll just set the most important required properties.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=137)** First, of course, is the name of the Connector, datagen_stock_data because we are going to be generating some artificial stock data.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=143)** Next, I'll specify a value for the key converter class.
>
> **[2:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=146)** This is going to use the string converter that Kafka provides. Next, if you scroll down just a bit, you'll find a required property that is the Kafka topic, to which the datagen converter should publish messages, select the stock market data topic that we just created.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=164)** Scroll down further and here you'll find an option called "Quickstart."
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=168)** Quickstart allows you to specify what kind of data you want the datagen converter to produce. Use stock trades as the quickstart for stock market data. Confluent has a number of quickstart modules.
>
> **[3:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=182)** There are modules for clickstream data, insurance data, gaming data, everything.
>
> **[3:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=188)** We'll just use stock trades as a quickstart.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=190)** Click on "Next." Here, you'll see the configuration you specified for your Datagen Connector.
>
> **[3:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=196)** Let's accept this. Click on "Launch."
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=199)** As you launch for a very brief moment, you might see the connector in a failed state, but soon it should be up and running.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/using-datagen-to-generate-synthetic-data?u=76281980&t=205)** It's now producing and publishing messages to our stock market data topic.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (2), default, (1), class. (1), this. (1)
> **UI Navigation:** click on (5), scroll down (2), select the (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** random_topic (1), stock_market_data (1), datagen_stock_data (1)
> **Prerequisites:** configure (2), setup (1)
> **Env Vars:** etl (1)
> **Warnings:** troubleshoot (1)

#### Observing consumers
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=0)** We are now producing messages to our stock market data topic at a steady rate.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=5)** Let's head over to "Topics," and here, you can see stock market data, it seems to be healthy.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=9)** Notice the production in the last five minutes, 675 bytes per second.
>
> **[0:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=14)** Let's click through and monitor this topic.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=18)** Notice that production is now at roughly 675 bytes per second, but there's absolutely no consumption.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=24)** Well, that makes sense.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=26)** We do have a datagen connect producer, but no consumer, and that's why consumption is zero.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=31)** Storage has a value, we have about 354kB stored in the topic.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=36)** That's because messages are being produced but not consumed.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=40)** And if you look at the single partition here in this topic, you can see that roughly 2,652 messages have been produced for a total of about 406 kilobytes.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=50)** We know that the way for you to monitor the production to a particular topic is to look at the production graph.
>
> **[0:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=55)** This will allow you to confirm that the producer is indeed producing messages to this topic at a steady rate.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=62)** Now, by default, you see last four hours of data, you can actually configure this.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=66)** Let's just look at the last 30 minutes because our DatagenConnector hasn't been running for the last four hours.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=73)** Click on "Apply," and this will give you a zoomed-in view to the graph.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=77)** You can verify here that datagen has indeed been producing messages at a steady rate that are being published to this topic and there are no failed production requests.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=88)** Now, consumption will show you a graph which is at zero.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=91)** That's because no consumers have been subscribed to this topic yet.
>
> **[1:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=95)** No one's listening to this topic.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=97)** Now, once again, I'd like to remind you that you won't see any values for percent of messages consumed and end to end latency because we haven't configured interceptors for our consumers.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=108)** That's beyond the scope of this course.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=110)** Now, while you're debugging your Kafka cluster and your topics, you might want to see the messages that are coming in.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=116)** Head back to topics, and let's click through to stock market data.
>
> **[1:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=119)** And here, on this tab, messages, you'll be able to view the messages that are being produced to this topic.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=126)** And here, you can see the latest message that was available.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=129)** And if you hang out long enough on this page, you'll be able to see the most recent messages.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=134)** So not only can you produce new messages to this topic right here, you can also view messages that are being produced by other producers.
>
> **[2:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=142)** If you want to understand and troubleshoot the schema of the messages, head over to the "Schema" tab and you can see the schema of the messages produced.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=152)** Observe that the messages use the Avro format, type is equal to Avro.
>
> **[2:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=157)** I'm now going to go back to my terminal window, and I'm going to set up a console consumer to consume messages published to the stock market data topic.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=166)** Observe that this is a kafka-avro-console-consumer.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=171)** We've seen that the messages are in the Avro format.
>
> **[2:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=174)** In order to view and consume these messages correctly, we need to use the avro-console-consumer.
>
> **[3:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=180)** And here, you can see the stock market data produced by the datagen, which is now consumed by our console consumer.
>
> **[3:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=189)** Now that we have a console consumer, we should be able to see consumer related graphs in the Control Center. Head back to topics, and let's click through to stock market data yet again.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=200)** We now have graphs for both production as well as consumption.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=204)** You can see the bytes per second for production and consumption match exactly.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=208)** So the speeds of our producers and consumers are perfectly match, so there should be no lag in the consumption.
>
> **[3:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=215)** You can see the bytes consumed per second.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=217)** If you're really debugging your consumer, you'll use the topics page, but what you will really use is the consumers page.
>
> **[3:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=225)** Notice that we have two console consumers at the bottom.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=228)** The last one is the current consumer.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=230)** The previous console consumer is the one that we had set up earlier to listen to our earlier topic.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=235)** Go ahead and click through to this console consumer, and you can see that it's zero messages behind. This consumer is perfectly behaved, there is no lag.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=244)** All messages produced by the producer are being consumed successfully.
>
> **[4:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=248)** Now I'm going to head back to my terminal window and kill this consumer and wait for a few minutes and then restart this consumer so that it reads messages from the beginning.
>
> **[4:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=260)** Notice that from -flag that I have specified to the kafka-avro-console-consumer, this will cause the consumer to read messages from the start.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=268)** Now, as soon as you run this, head back as quickly as possible to the Control Center, and let's head over to topics and click through to stock market data.
>
> **[4:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=278)** Notice that the consumer is a little behind.
>
> **[4:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=280)** Consumption is at 507 bytes per second.
>
> **[4:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=283)** Production is much faster, that's because the consumer is catching up slowly.
>
> **[4:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=287)** Production using the DatagenConnector has been very, very steady.
>
> **[4:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-consumers?u=76281980&t=292)** And if you look at consumption, well, you can see that little spike, we restarted our consumer, so this is a new one and it started consuming messages from the beginning, and that's why you see the spike.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1), this. (1), match, (1), this, (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2), configure (1)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1)
> **Warnings:** troubleshoot (1)


### 4. 3. Processing Kafka Streams

#### Understanding ksqlDB
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=0)** Now, the cool thing about working with Apache Kafka is that you don't really need to process your streams using high level programming languages such as Python or Java.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=10)** You can just use SQL.
>
> **[0:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=12)** Thanks to ksqlDB.
>
> **[0:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=14)** ksqlDB is Kafka's database that was explicitly built to allow developers to create stream processing applications on top of Kafka.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=24)** With ksqlDB, you can process your streams by running SQL queries on your streams.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=31)** The SQL queries can perform filtering operations, grouping aggregations, windowing, everything.
>
> **[0:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=38)** Now, the reason that we are exploring KsqlDB is because it's integrated with the Confluent Control Center, and it allows us to debug and troubleshoot our streams using an interactive UI.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=51)** By running SQL queries on your streams, ksql allows you to understand your data and debug data issues if you have them.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=61)** Just a note that ksqlDB is not meant for debugging, monitoring or troubleshooting your streams.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=67)** It's actually meant to allow you to develop streaming applications without writing code in Java, Python, C#, or another high level programming language.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=77)** The main use case for ksqlDB is to allow you to create data pipelines for extract transform load operations on your Kafka streams.
>
> **[1:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=87)** With ksqlDB, you can also store data in Kafka using materialized caches and views.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=93)** ksqldb also enables you to model event-driven microservices.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=99)** It's an entirely different paradigm of looking at your stream processing applications.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=106)** Traditionally, these streaming applications are made up of many different disparate components or systems.
>
> **[1:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=113)** You'll have technologies used for extraction technologies to store your data, technologies for transformations, loading your data, and so on.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=122)** These systems involve complex integrations and communications, but ksqlDB makes things easier.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=129)** The objective of ksqlDB is to simplify the paradigm that you use to work with event streams. With ksqlDB, here is what your streaming application stack might look like.
>
> **[2:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=141)** ksqlDB runs seamlessly on top of Kafka.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/understanding-ksqldb?u=76281980&t=144)** You can perform stream processing with SQL queries, connect to connectors for data sources and syncs, create materialized views on your data, and so on.

> [!info]- Semantic Content
>
> **Code Identifiers:** ksqldb (10)
> **Env Vars:** sql (5)
> **CLI Commands:** python (2), apache (1)
> **Warnings:** troubleshoot (1), note that (1)
> **Analogies:** such as (1)

#### Creating streams and tables using ksqlDB
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=0)** In this demo, we'll see how you can work with ksqlDB on the Confluent Control Center.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=6)** Now, ksqlDB is actually a stream processing engine.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=11)** ksqlDB extends the Kafka Streams API by allowing you to query and analyze streams using just SQL queries.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=20)** ksqlDB actually runs on top of Kafka streams and it allows you to build applications that can consume, process, and produce data streams in real-time.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=30)** ksqlDB is not a monitoring tool, it's not a debugging tool.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=33)** It's actually an engine that you'll use to process your streams.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=37)** This is what you'll use to build streaming applications.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=40)** But the use of ksqlDB within the Control Center gives you a great way to quickly run queries on your streams to see if your data looks okay, whether the joint operations that you may be performing work okay, and a whole bunch of other things.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=54)** So it can also be used as a debugging and troubleshooting tool.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=58)** Before we use ksqlDB, here, I am in the "Connect," page and I'm going to click through to the connect-default-cluster.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=65)** I'm going to add a new connector.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=67)** Notice I have my datagen stock data connector.
>
> **[1:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=70)** This is still generating synthetic data.
>
> **[1:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=72)** I'm going to add a new connector for users data, and once again, this will be synthetic data generated using datagen.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=80)** So click on the "DatagenConnector."
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=82)** Let's specify the name of the connector.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=84)** I'm going to call it datagen_user_data because that's what I'm going to generate.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=88)** Remember, you need to specify a key converter class.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=91)** Once again, let's just use the string converter.
>
> **[1:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=95)** You'll need to scroll down and specify the topic to which you want to publish these messages.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=100)** Now, there is no suitable topic here, so I'm going to create a new topic called users_data.
>
> **[1:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=104)** So type out users data, and click on "Create users_data."
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=108)** A topic will be created with default settings, and if you scroll down to the quickstart here, make sure you specify the users module that will generate fake user data.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=118)** I'm going to use the second connector to get a new second stream and then I'll show you how you can perform join operations using these two different streams with KsqlDB.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=128)** Go ahead and launch this DatagenConnector.
>
> **[2:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=132)** And notice now I have two connectors running.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=135)** Now, let's head over to the topics page.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=137)** We have two topics, stock market data and users data. Users data is a topic that we just created.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=143)** Now let's head over to ksqlDB.
>
> **[2:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=146)** Now, here you can see persistent queries, streams, tables, and so on.
>
> **[2:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=150)** Let's not worry about those.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=151)** Now, click through to ksqlDB, and you will see an editor right here that you can use to run SQL queries on your streams.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=159)** Using ksql, we can create either a stream or a table.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=163)** A stream is an immutable append only collection that represents a series of historical data.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=170)** A table is a mutable collection that models change over time.
>
> **[2:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=174)** The first thing I'm going to create here is a Kafka stream with the messages from the stock market data topic. Notice, create or replace stream, I'm going to call it stock data stream using the Kafka topic, stock market data.
>
> **[3:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=189)** Go ahead and run this query and you've now created a new stream in ksqlDB.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=195)** You should see the success message, as you can see here on screen.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=199)** Now, if you look at the top right, you can see the stock_data_stream and the individual fields for the messages in that stream.
>
> **[3:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=206)** Once you've created a ksqlDB stream, you can actually run queries on the stream.
>
> **[3:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=211)** Select * from stock_data_stream, emit changes.
>
> **[3:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=215)** Emit changes indicate that the query is continuous and it will keep outputting all of the changes in that stream.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=222)** And here, you can see all of the messages being published to the stock market data topic.
>
> **[3:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=227)** The messages are available here as a continuous stream, you can actually expand individual messages, and take a look.
>
> **[3:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=233)** This is a great way of observing the messages in your stream using ksqlDB.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=238)** And you can also run other queries such as aggregation queries, limit queries, filter queries, anything that you want to.
>
> **[4:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=245)** You can view the same information in the form of a table that might be easier.
>
> **[4:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=249)** Every record contains a buy, sell, a quantity, a symbol, all made up stuff, of course, and you can see this user ID over to the very right.
>
> **[4:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=258)** This is the user that plays the trade.
>
> **[4:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=261)** You will find that the same user IDs will be used in our users data, that is the second DatagenConnector that we have set up.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=268)** Since this is a continuous query, you can also pause the output generated here by the query, and you can restart the query as you need to.
>
> **[4:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=277)** The query that we've run here is very simple, but let's say you had a more complex query which involves several filtering operations, join operations, aggregations, and so on.
>
> **[4:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=286)** You can head over to the "Flow" tab, click through to your stream and actually look at a graphical visualization of the operations that you are performing on the stream.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=296)** Right now, we're just reading from the stream, nothing really interesting here.
>
> **[5:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=300)** If you head over to streams, you'll see all of the streams that you've created using ksqlDB.
>
> **[5:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=305)** We've created just the one stream other than the default one that was already present.
>
> **[5:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=309)** Click through to "stock_data_stream," and you'll be able to view all of the configuration settings, the topic that the stream reads from, the configuration of that topic, the schema for the stream, everything that you need to know.
>
> **[5:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=322)** All we've done so far is create a stream using ksqlDB.
>
> **[5:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=325)** We haven't set up any tables yet, that's why this is empty.
>
> **[5:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=328)** We don't have any persistent queries running. And here, you can see the settings for our ksqlDB, nothing really interesting there.
>
> **[5:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=336)** Notice that it's running on localhost 8088.
>
> **[5:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=340)** Now, let's head back to the editor view and see how we can create a table using ksqlDB.
>
> **[5:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=346)** A table is a named persistent state store that is continuously updated with the latest values from a Kafka topic.
>
> **[5:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=353)** Here, I create a table called users_table that will be updated with messages from the user's data topic.
>
> **[6:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=360)** The value format is Avro. Remember, datagen generates these messages using Avro.
>
> **[6:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=365)** Go ahead and run the query and notice on the top right that the users_table has been created.
>
> **[6:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=371)** This gives you a quick overview of the schema of the data.
>
> **[6:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=375)** Now that you have created a table, confirm that you get the success message that you see here.
>
> **[6:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=380)** You can run queries on the table just like you ran queries on streams.
>
> **[6:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=384)** Select * from users_table, Emit Changes will continuously emit the updates that are being made to this table, and you will see a stream of data right here.
>
> **[6:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=394)** Now, when you head over to the "Flow" tab, you'll be able to see the stream as well as the table_users table and the stock_data_stream.
>
> **[6:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=402)** In order to get more details about this users_table, head over to the "Tables" tab, and you can click through to the users_table in order to get more details.
>
> **[6:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=411)** There are some highlights here, but if you click through, you'll be able to see the topic that this table is populated from and other configuration settings. Right here at the bottom is the schema for this particular table.
>
> **[7:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/creating-streams-and-tables-using-ksqldb?u=76281980&t=423)** Notice the user ID, well, this is the column that we're going to use to join this table with our stock_data_stream in just a bit.

> [!info]- Semantic Content
>
> **Code Identifiers:** ksqldb (16), stock_data_stream (5), users_table (5), users_data (2), datagen_user_data (1)
> **Code Keywords:** let (7), extends (1), class. (1), module (1), from, (1)
> **Definitions:** is a  (5), is an  (1)
> **UI Navigation:** click on (2), scroll down (2)
> **Env Vars:** sql (2), api (1)
> **Prerequisites:** set up (2), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** such as (1), just like (1)

#### Performing join and windowing operations
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=0)** Here, I am back in the editor window, and let's run a few queries on our stream as well as our table.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=6)** Here is a select * query where we are looking for all buy orders with quantity greater than 1,500 and symbol ZVV.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=15)** The limit, five, will allow us to view just five records so that we don't get overwhelmed with the continuous stream.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=22)** Here are the five records, the result of our query. Notice side is equal to buy quantity greater than 1,500 and the symbol is ZVV.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=30)** This is to just give you a sense of the kinds of queries that you can run on your stream, and this will allow you to debug and monitor the data in your stream in case that's causing any issues.
>
> **[0:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=42)** Here, we select a few selected columns and I present quantity multiplied by price as total cost from stock_data_stream.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=50)** And here is what the result looks like, and you can expand a particular section and see the results in more detail if you want to.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=57)** Back in the editor window, let's do something a little more interesting.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=61)** Let's perform a join operation between our data in stock_data_stream and in the users_table.
>
> **[1:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=68)** Now, this join operations result will be a stream, so I have a create or replay stream, user_stock_purchases.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=75)** On Lines 3 and 4 in the editor, I specify the columns that I want to select from the join result and notice the joint operation on Line 6, stock_data_stream, Left Join, users_table.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=89)** We join on the column stock_data_stream.USERID = users_table.ID and Emit Changes will ensure that we get a continuously streaming result.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=100)** Go ahead and run this query, and notice that a new stream has been registered, user_stock_purchases, and this will contain the joined result, that is, it will contain information from the users_table as well as the stock stream.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=114)** Now, this has been created successfully, so let's now go ahead and query the user_stock_purchases stream using Emit Changes. Run this query, and here right below you'll be able to see the results of this join operation.
>
> **[2:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=127)** I'm going to go ahead and pause this stream so that it's not continuously moving.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=131)** That's kind of hard to figure out what's going on then.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=134)** And let's expand one record.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=137)** All of these messages present in this user_stock_purchases stream contain information from the users_ table and the stock_data _stream joined on user ID.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=147)** When you have a stream of data, the way you compute aggregations on your stream is by using windowing operations.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=153)** Windowing operations allow you to include the messages within a particular time window and aggregations are computed within the time window.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=162)** Here, I've used a tumbling window. In a tumbling window, there is no overlapping time between two consecutive windows. I store the result of this aggregation in a table.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=172)** That's why have the create or replace table, symbol_1_minute_aggregates.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=177)** The key format is JSON, indicating we have a JSON key and I select symbol, the average price, and the average quantity from stock_data_stream where my tumbling window size is 60 seconds or one minute. Within each window interval, I group by symbol so that I get the average price and quantity for each symbol.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=199)** So this is the average price and quantity for the trades on that particular symbol.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=204)** Let's run this query, and you'll see that it was successfully run.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=208)** Notice that a table has been registered off to the top, right?
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=212)** The table gives us the symbol, the average price, and the average quantity.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=217)** If you scroll down to the bottom, you can see the success message indicating that the table was successfully created.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=222)** If you want to view the results of this tumbling window operation, you can simply query the symbol_1_minute_aggregate table.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=229)** Emit Changes will allow us to see the results as a stream.
>
> **[3:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=233)** Go ahead and run this query, and here you can see the streaming results.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=238)** I'll switch over to the table view so that we can view the results better.
>
> **[4:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=241)** Notice the symbol and notice that we have the start and end of each window.
>
> **[4:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=246)** You can pause the stream in order to see things better. And within each window, which is 1 minute long, we have the average price and the average quantity of that particular stock that was traded.
>
> **[4:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=258)** And really, it's as simple as this to use ksqlDB for windowing operations.
>
> **[4:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=264)** You can try this with a sliding window if you want to, and you can try out a bunch of other queries as well.
>
> **[4:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/performing-join-and-windowing-operations?u=76281980&t=269)** What we've seen here is just a sample.

> [!info]- Semantic Content
>
> **Code Identifiers:** stock_data_stream (5), users_table (4), user_stock_purchases (4), stock_data (1), ksqldb (1)
> **Code Keywords:** let (6), switch (1)
> **Env Vars:** zvv (2), json (2), userid (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### Viewing streams and tables
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=0)** And finally, as we close out this chapter, let's look at some metadata related queries that you can run on ksqlDB.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=6)** If you want to view all of the streams that you've created so far, you can execute the list streams command, and here are all of the streams in our ksqlDB instance.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=17)** We have the user_stock_purchases, that is the join of user data and stock data.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=22)** We have the stock_data_stream that we originally created and then the third stream, the ksql processing log that just belongs to Confluent.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=31)** Similarly, if you want to view all of the persistent tables that you've created, you can use the list tables command.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=37)** And here, you can see we have the users_table and the table for symbol_1_minute_aggregates that contains our windowing result.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=45)** Now that we've actually performed a bunch of processing on our data, the flow tab is much more interesting.
>
> **[0:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=52)** Observe you can see how every stream and table has been created.
>
> **[0:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=56)** We have the users_table, the stock_data_stream that was joined together in a Create Stream operation to give us user_stock_purchases.
>
> **[1:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=64)** The stock_data_stream was used in a create table operation to give us our 1_minute_aggregates.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=71)** If you look at persistent queries, you'll see the queries that we use to create the streams and table.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=77)** Here, we have the query to create user_stock _purchases, that's a persistent query.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/viewing-streams-and-tables?u=76281980&t=82)** And if you scroll down, you can see the query that I've used to create the 1_minute_ aggregates table.

> [!info]- Semantic Content
>
> **Code Identifiers:** stock_data_stream (3), ksqldb (2), user_stock_purchases (2), users_table (2), user_stock (1)
> **Code Keywords:** finally, (1), let (1)
> **UI Navigation:** scroll down (1)


### 5. 4. Monitoring Consumer Groups

#### Programmatically produce messages using Python
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=0)** In this demo, we'll see how you can use the Confluent Control Center to monitor, observe, and troubleshoot consumer groups in Apache Kafka.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=9)** In order to work with consumer groups, I'm going to create a new topic with multiple partitions.
>
> **[0:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=14)** This is what will allow us to see rebalancing in action.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=18)** Now click on "Add Topic."
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=20)** If you already have a bunch of topics here, I'm just going to ignore those.
>
> **[0:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=23)** I'm going to create a new topic called "customer_payments."
>
> **[0:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=27)** Initially, customer_payments will have just one partition.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=30)** I'll change the configuration for it to have more partitions a little bit later. Click on "Customize Settings," and here you know that you can configure how you want to customize the settings.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=40)** For example, you could set custom availability settings.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=44)** Now, we have to have the replication factor be 1 and min.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=47)** Insync replicas be 1 because we have just one broker running.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=51)** Now, you can also manually configure other topic configuration options if you want to, and all of them are present right here.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=59)** However, we won't really do that, I just want to show you it was possible. Untick this option, forget about the export settings.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=67)** Let's save and create this topic.
>
> **[1:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=70)** Once the topic has been successfully created, let's head over to the terminal window, and we'll view this topic using the Kafka Topics Script, kafka-topics --list.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=81)** At the very bottom, you should be able to see our topic. Here is the customer_payments topic, along with all of the other topics that we had created previously.
>
> **[1:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=90)** Now this is done.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=91)** Let's describe the customer_paymentS topic, and this will show us that this topic has exactly one partition, PartitionCount 1, ReplicationFactor 1.
>
> **[1:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=102)** If you look at the bottom, you can see that the partition leader is partition zero with no replicas, and it makes sense.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=108)** That's just the only partition.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=109)** That's the partition leader. Here on, we won't use the console producer and consumer anymore, nor will be used datagen.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=116)** Instead, we'll programmatically use Python code to write code for producers and consumers.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=122)** And for that, we'll use the Confluent Kafka Library.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=125)** So go ahead and pip install confluent-kafka.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=128)** Confluent Kafka will contain Python APIs that we can use to produce and consume messages in Python.
>
> **[2:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=136)** Now, the messages that we'll generate will have fake data, and we'll use the faker package to generate this fake data.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=143)** So Pip install faker as well.
>
> **[2:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=145)** Faker is an extremely useful library that you can use to generate fake users, fake data of different kinds, everything.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=152)** I've already written code in Python for my producers and consumers and placed them in the Confluent project subfolder.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=159)** Notice I have three consumers A, B, and C and a single producer.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=164)** Let's take a look at the code in each of these Python files, starting with the code for the producer, producer.py. Observe on Line 1 here that we import the producer class from the Confluent Kafka Library, and from the Faker library, we import the faker class.
>
> **[3:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=180)** We instantiate the faker on Line 10 and the producer on Line 12.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=185)** The producer uses the bootstrap server localhost 1992, that's where our broker is running and listening.
>
> **[3:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=193)** The on delivery method that you see defined on Lines 14 through 19 is the callback that is invoked once a message has been successfully produced and delivered to the cluster.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=205)** After each message has been delivered, we'll print out the error if there is one, or if not, we'll simply decode the message, it will be in the utf-8 format and print the message out to screen.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=217)** This is on Line 19.
>
> **[3:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=219)** The get_payment_details that you see here is simply a helper function.
>
> **[3:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=223)** This uses the faker object that we've instantiated to generate the payment details for a customer.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=230)** For each payment message we have the customer name, bank name, credit card number, expiry date, price, and country.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=238)** Notice how I use the fake object to generate fake values for all of these.
>
> **[4:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=243)** This producer will produce these fake messages and publish them to the customer payments topic in a loop.
>
> **[4:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=249)** The while true loop starts on Line 32, we get the payment data that is the payment details and convert the message to a JSON format using json.dumps.
>
> **[4:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=260)** Producer.produce will actually produce the messages and publish them to the topic.
>
> **[4:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=265)** Notice, we explicitly specify the partition, partition = 0.
>
> **[4:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=269)** This is where the messages will be published.
>
> **[4:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=271)** The callback is on delivery.
>
> **[4:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=273)** This callback will be invoked once the message has been successfully delivered to the cluster.
>
> **[4:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=278)** After each message is produced, we call producer.flush to flush out all the messages to the cluster and then we sleep for a random interval between one and four seconds. Running this producer is very straightforward.
>
> **[4:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=292)** Head back to the terminal window, make sure you are in the right directory and invoke the Python code, python producer.py And this should start producing messages that will be published to the customer payments topic.
>
> **[5:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=306)** Now, I'm going to run this producer for a few minutes so that several messages are produced. If you head over to your customer_payments topic, notice, under production, you can actually see the graph showing you that messages are constantly being produced.
>
> **[5:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=320)** If you click on the "Messages" tab, you'll be able to view the messages that are being produced and published to this topic.
>
> **[5:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=327)** Remember, these are all customer payments generated using the faker library.
>
> **[5:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=332)** You can pause the messages and expand one of these and take a look, and you can see that it's pretty interesting data generated using the faker library.
>
> **[5:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=341)** I've temporarily paused these messages.
>
> **[5:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=343)** I'm going to go ahead and click on "Play" once again, and let's go back to observing the producer graphs.
>
> **[5:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=351)** Production seems pretty steady between 70 and about 85 bytes a second.
>
> **[5:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=356)** And if you scroll down, you'll see that the rest of the topic looks healthy as well.
>
> **[6:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=361)** You can take a look at the partition, it's available, and you can see that it's constantly receiving messages.
>
> **[6:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=367)** Scrolling back up, you can see that the production graph has something.
>
> **[6:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=372)** Consumption has nothing because we don't have a consumer.
>
> **[6:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=375)** If you click through to production, you'll be able to view additional details, history of the last four hours.
>
> **[6:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=380)** I'm going to configure this graph to just display the last 30 minutes.
>
> **[6:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/programmatically-produce-messages-using-python?u=76281980&t=384)** As I've been recording, the producer has been running for about 5-10 minutes, so everything looks pretty good here.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), pip (2), apache (1), make (1)
> **Code Keywords:** let (5), class. (1), function (1)
> **Code Identifiers:** customer_payments (4), get_payment_details (1)
> **UI Navigation:** click on (4), scroll down (1)
> **Prerequisites:** configure (3), install (2)
> **File Paths:** producer.py (2)
> **Tools:** terminal (2)
> **Env Vars:** json (1)

#### Troubleshooting partition usage
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=0)** We haven't set up our consumers yet, and we plan for our consumers to be part of a consumer group.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=6)** Now, that doesn't make sense unless you have multiple partitions.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=9)** And here in this movie, we'll see how you can monitor a topic with multiple partitions.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=15)** I'm going to kill this producer that's producing messages sent to the single partition, partition 0.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=21)** Once that's done, I'm going to alter my customer_payments topic to now have 12 partitions rather than the one partition that it had earlier.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=31)** Notice, I call Kafka topics use the alter flag and specify partitions as 12.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=37)** This script would have updated the number of partitions that we have in the customer_payments topic, and we can confirm this by running the describe command on customer_payments.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=48)** Now, in this output, you can see that we have a total of 12 partitions, Partition 0 through Partition 11.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=54)** The partition leader is Leader 0 but there are no replicas, so minimum in-sync replica is also 0.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=62)** Now, let's head back to our producer.py file and let's scroll to the bottom.
>
> **[1:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=68)** Notice, the producer.produce method that we invoke and we specify Partition 0, here, I'm going to have the producer produce but only publish messages to the Partitions 0, 1, and 2.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=82)** Now, let's say you're trying to troubleshoot and debug your Kafka cluster and you're wondering why is it that my message throughput isn't great?
>
> **[1:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=90)** Maybe your producer isn't using all of the partitions, and that's what this producer does.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=94)** It only uses 3 out of 12 partitions.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=97)** I'm going to switch back to the terminal window and run this producer once again.
>
> **[1:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=102)** Now, we know for sure that this producer is only producing messages to 3 partitions, but let's observe and monitor this using the Control Center UI.
>
> **[1:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=113)** Notice, I'm on the thecustomer_payments topic on the overview tab.
>
> **[1:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=117)** In order to monitor and observe the usage of our partitions, we need to scroll to the bottom.
>
> **[2:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=123)** Now you can see nine out of 12 partitions here in this view, all of the partitions are available and healthy, but are they being used?
>
> **[2:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=130)** Let's scroll over to the right, and here you can see that only the first 3 partitions have an offset and greater than 0.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=139)** And also the total size of messages is greater than 0 only for the first 3 partitions.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=144)** This is how you debug partition usage.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=147)** We have a total of 12 partitions in this topic, but only 3 of those partitions are being used.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=153)** Let's scroll down, and if you scroll over to the right you can see that the last few partitions are also not being used.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=159)** If you are having throughput issues, even though you have multiple partitions in your topic and a consumer group to read from those multiple partitions, it's possible that your publisher isn't publishing to all topics.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=172)** Now, let's go back and kill our producer code, and this time around I'm going to update the code so that it publishes to all 12 partitions. Here on this page, I'm going to scroll down to the bottom and where I specify partition, I'm going to indicate that the partition that this producer should use can be any integer from 0-11, which means all 12 partitions will be used and one of these partitions will be picked at random.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=200)** Now that we have our producer producing to all partitions, you'll be able to monitor partition usage on the Confluent Control Center. Bring the publisher, have it up and running, and let's scroll down to the bottom and take a look at the partitions for our customer_payments topic.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=217)** The nine partitions that we can see here are all available, and if you scroll over to the right, you'll find that all of them now carry messages.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=226)** All of them have offsets greater than 0, and the size of the data sent to all of these partitions is greater than 0.
>
> **[3:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=234)** Now, when we set up a consumer group containing multiple consumers to read from this topic, the consumer group will be able to take advantage of the messages published to the different partitions.
>
> **[4:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/troubleshooting-partition-usage?u=76281980&t=247)** Remember, in a consumer group, each partition will have just one consumer reading from it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (1)
> **Code Identifiers:** customer_payments (4), thecustomer_payments (1)
> **UI Navigation:** scroll down (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (2)
> **File Paths:** producer.py (1)
> **Tools:** terminal (1)
> **Warnings:** troubleshoot (1)

#### Consumer groups
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=0)** We are going to be working with consumer groups next.
>
> **[0:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=3)** So let's quickly refresh what consumer groups are all about.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=6)** Now, as the name suggests, consumer groups refer to a set of consumers who work together, who cooperate to consume data from one or more topics. In a production environment, your topic is likely to contain more than one partition.
>
> **[0:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=23)** The partitions of your topic will be divided amongst the consumers in a consumer group.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=29)** Essentially, this serves as load balancing for your data.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=33)** Each consumer will read only from a specified set of partitions and will always read from the same partitions that are assigned to that consumer.
>
> **[0:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=42)** Now, it's quite possible that over time, the consumers in your group keep changing.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=48)** They might be new consumers that arrive and join the group, and old consumers might leave the group and Kafka takes care of these situations.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=57)** The partitions in your topic will be reassigned amongst the current consumer group members.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=63)** This reassignment of partitions when the members of a consumer group change is referred to as rebalancing the group.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=71)** Rebalancing the group allows each member to receive a proportional share of partitions so that the load balancing is set up correctly.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=79)** Here is a visual representation of how consumer groups work.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=82)** I have a topic T1 that has four partitions now.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=86)** I have a consumer group with exactly one consumer, so the single consumer reads from all four partitions.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=93)** Let's say a new consumer joins this group then the partitions in the topic will be divided evenly amongst the two consumers.
>
> **[1:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=101)** So each consumer is assigned two topic partitions and reads from the same two partitions.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=107)** Now, let's say we have four consumers in the group.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=109)** Each of these consumers will be assigned one topic partition and will read from these partitions in parallel.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=116)** Now, it only makes sense to have as many consumers in a consumer group as there are partitions.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=122)** Let's say you were to add a fifth consumer, that consumer would remain idle.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/consumer-groups?u=76281980&t=128)** We have fewer partitions than consumers, so that extra consumer will not be assigned a partition to read from.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from. (1)
> **Definitions:** is a  (1)

#### Monitoring consumption in a consumer group
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=0)** We have a producer running and producing messages that are being sent to all 12 partitions.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=6)** Now, let's take a look at the consumer code that we'll use to consume these messages.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=11)** Now, I have code for three consumers here.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=13)** But first, I'm going to get started with just one consumer running.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=17)** That's going to be consumer A.
>
> **[0:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=19)** So let's take a look at the code here.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=20)** From Confluent Kafka, we import the consumer class.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=24)** We instantiate a consumer object on Lines 3 through 6.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=28)** Notice, the group ID that I've specified for the consumer.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=32)** This is the consumer group ID, so this consumer will be part of the payment group. To start off with, we'll have exactly one consumer here in this payment group and that will be reading from all partitions on the customer_payments topic.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=47)** Notice, on Line 8, I call consumer.subscribe and have it subscribe to customer_payments.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=54)** That's the topic that we set up earlier.
>
> **[0:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=56)** Within our main module, I set message count to zero so that I can commit the consumer messages every 10 messages.
>
> **[1:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=64)** This is something you can configure. Within a try block, I have a while loop that runs continuously while true. Notice, I call consumer.poll to actually to pull each message from the topic.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=78)** Now, once we receive the message, if the message is none, we just continue.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=82)** If there is an error, then we print out the error.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=85)** Otherwise, if the message looks okay, then on Line 25, we access message.value and invoke the decode method to get the message in a string format and I print out the string to screen.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=96)** So we're not really doing anything with that message.
>
> **[1:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=98)** And I increment message count by one.
>
> **[1:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=101)** Now every 10 messages, I call consumer.commit, and I synchronously commit the messages that we have read so far.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=110)** And finally, on Line 32, I call consumer.close.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=114)** This is very, very simple Python consumer code.
>
> **[1:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=117)** Just pay attention to the fact that on Line 5, we have specified a consumer group ID indicating this consumer is part of a group.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=125)** Now, let's head back to the terminal window.
>
> **[2:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=127)** I have the producer running on the left hand side, and on the right hand side I'm going to run consumer A by calling Python consumerA.py.
>
> **[2:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=136)** Now, I'm going to let this consumer run for a few minutes.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=139)** So it has consumed a few messages.
>
> **[2:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=141)** And then I'm going to head over to the Control Center.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=144)** Here is my customer_payments topic.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=147)** And notice the consumption graph now, it shows some activity indicating that messages are being consumed.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=153)** As time goes on, you'll find that the consumption slowly picks up as the consumer catches up with the producer, click through to the consumption graph and that little spike tells you that consumption is catching up.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=166)** Now, you can get more detail about the consumers by heading over to the consumers page.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=171)** And if you scroll to the bottom, you should find the payment group right there.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=176)** That is the consumer group that we just set up.
>
> **[2:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=179)** It seems like from this quick overview, that the consumers in this group are one message behind the producer at this point in time.
>
> **[3:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=186)** There's just one consumer in the group and the number of topics that this consumer group is listening to is just one.
>
> **[3:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=193)** Now, you can click through and view additional information.
>
> **[3:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=196)** Let's take a look. Now, at this instant, you can see that my consumer group has mostly caught up with the producer.
>
> **[3:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=203)** In fact, it's just about one message behind.
>
> **[3:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=206)** Now, you can see our customer_payments topic and the max lag right there.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=212)** And you can see this visualization, and this visualization, you can see that the dots move around.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=217)** Often there's one dot behind and then it moves forward.
>
> **[3:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=221)** What exactly are those dots?
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=222)** Well, those dots are the messages being read from the individual partitions in the topic.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=230)** And you can actually get this information by hovering over the individual dots.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=235)** You can see that this is Partition 4 and our consumer is reading from that partition as well.
>
> **[4:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=241)** We just have one consumer, so it reads from all partitions. For each partition, you can see the current offset that the consumer is reading and how many messages the consumer is behind.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=251)** Right now, the consumer is all caught up. As new messages are produced, the consumer might lag behind in a single partition, but as you can see, the consumer soon catches up.
>
> **[4:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=261)** Here on the consumer groups page, you'll be able to view the consumers reading from the individual partitions on this topic.
>
> **[4:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=269)** There are 12 partitions and there is a single consumer reading from all 12 partitions.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=274)** Notice, the consumer ID column, observe that all values are the same, that's the single consumer reading from every partition in this topic. You can see the partition numbers off to the right, and if you scroll over, you'll be able to see how many messages the consumer is behind on each partition.
>
> **[4:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumption-in-a-consumer-group?u=76281980&t=291)** You can see that it's one message behind on Partition 9 right now, and this is what you'll use to monitor the consumption lag for each consumer, for each partition, the visual representation as well as the detailed view.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), class. (1), module (1), continue (1), finally, (1)
> **Code Identifiers:** customer_payments (4), consumera (1)
> **CLI Commands:** python (2), find (2)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** consumera.py (1)
> **Tools:** terminal (1)

#### Debugging consumption lag
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=0)** In this movie, we'll see how you can monitor consumer lag, how you can see whether a particular consumer has fallen behind on consuming messages.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=10)** Now, here I am with my terminal windows open.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=13)** I have the producer running on the left hand side and the consumer on the right hand side.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=17)** What I'm now going to do is kill the consumer.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=20)** Essentially, the consumer in my group will no longer be consuming messages.
>
> **[0:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=25)** I have killed it.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=26)** The producer is still running, which means the producer is still producing messages.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=31)** Let's go back to our consumer_payment group page where we were monitoring consumer lag.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=37)** Now, for a few minutes, you can see that the consumer is just about one message behind, but soon the consumer will fall further and further behind.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=47)** And at this point, it's now 13 messages behind.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=50)** Observe the dots that are moving around.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=53)** Every dot represents a partition, and the consumer, because it's dead, is not consuming any message from any partition, and it's falling behind on each partition.
>
> **[1:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=64)** We have no other consumers in that group, just that one consumer, and it's no longer operating.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=69)** And you can see that our consumer is getting further and further behind.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=74)** So we have a visual representation of how far behind the consumer has gotten in each partition.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=81)** Now, this visual representation does not tell us whether any consumer is consuming messages at all.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=88)** You can only see that the consumer group is behind as a whole.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=91)** Now, if you scroll down, notice the client ID and consumer ID columns, they are completely empty.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=97)** This is the clue that you need to identify whether any consumer at all is present within this consumer group.
>
> **[1:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=104)** There are clearly no consumers.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=107)** Now, if you scroll over to the right, you'll be able to see how many messages the consumer group is behind for each partition.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=114)** What's the current offset? What's the end offset?
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=118)** All of this information is available in detail here at the bottom for every partition in your topic. You now know how to use the Kafka Control Center to monitor consumption lag.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=129)** Now, let's go back to our terminal window and I'm going to restart Consumer A, and this Consumer A will now start consuming messages from the very beginning and will soon catch up with the producer.
>
> **[2:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=141)** So let's go back to our Control Center, and you'll find that in just a few seconds, our consumer will catch up.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=148)** Just wait for a few seconds, about 30 or 40s, and you'll find that all of the dots are towards the very end.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=154)** Our consumer is just now one or zero messages behind. It has caught up with the producer.
>
> **[2:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=161)** And if you scroll down to the bottom, you can see a detailed version of the same information here at the bottom, the same consumer ID reading from every partition.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-consumption-lag?u=76281980&t=170)** And at this point, it has caught up with all of the messages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Cross-References:** go back to (3)
> **CLI Commands:** find (2)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (2)
> **Code Identifiers:** consumer_payment (1)

#### Monitoring consumer group rebalancing
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=0)** Now, let's go back and set up our consumer group as it's meant to be with multiple consumers.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=6)** I'm now going to run three consumers within our group, but before that, I'm going to kill the producer that's on the left terminal window, and I'm going to kill the one consumer that we have, Consumer A.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=17)** Let's take a look at the code.
>
> **[0:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=19)** Here, we have the code for Consumer A on Line 5.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=22)** We've specified that it belongs to the payment group.
>
> **[0:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=25)** Now, Consumer B has the exact same code.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=28)** And notice on Line 5 that it belongs to the same consumer group, payment group.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=33)** The rest of the code here for the consumer is identical to consumer A, so I don't really need to go over this code again.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=40)** And let's take a look at Consumer C, the code is exactly the same.
>
> **[0:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=43)** This is the third consumer that belongs to the payment group.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=47)** You can see this on Line 5.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=49)** I'll now switch to a screen where I have four terminal windows open.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=54)** Now to the top left, I'm going to run the producer.
>
> **[0:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=56)** The remaining terminal windows are for the three consumers that we'll run.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=61)** First, I'll run a single producer and the consumer, Consumer A, this is on the top right.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=67)** So, so far I have one consumer, consumer A in the payment group.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=71)** To the bottom left, I'll run a second consumer, this is Consumer B, which also belongs to the same consumer group, payment group.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=80)** So I have one producer and two consumers running.
>
> **[1:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=83)** Now, let's switch back to the Control Center, and here I am on the main page for the payment group.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=89)** The two consumers that I have in this group are firing on all cylinders.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=93)** They're all caught up with the producers messages.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=97)** Now, you can see that we are no more than one message behind the producer at any point in time.
>
> **[1:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=103)** Our consumer group has caught up.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=105)** Let's scroll to the bottom, and you can now see here that the two consumers in our consumer group have split up the six partitions amongst themselves.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=115)** The first consumer whose ID ends with 348d, is consuming messages from six partitions of this topic.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=124)** So the first six partitions are taken up by the first consumer.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=128)** And if you scroll to the bottom, you'll see that the remaining six partitions are assigned to the second consumer.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=134)** The consumer with ID ending with 4665 is listening and pulling messages from the last six partitions.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=143)** The two consumers in our consumer group, payment group, have split the 12 partitions of the customer payments topic evenly amongst themselves.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=154)** Now, let's take a look at consumer group rebalancing in action.
>
> **[2:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=158)** Now, back to the terminal window, I'm going to start a new consumer, Consumer C, and this also belongs to the same consumer group, payment group.
>
> **[2:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=167)** Once this consumer is up and running, this consumer will take over some of the partitions from the other consumers.
>
> **[2:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=173)** So let's go back and click through to the payments group.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=177)** Our three consumers are fully caught up with our producer, no more than one message behind.
>
> **[3:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=182)** And if you scroll to the bottom, you can see that the three consumers have evenly divided the 12 partitions amongst themselves.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=190)** Observe that the first four partitions are read by the consumer having ID that ends with 348d.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=199)** The next four partitions are assigned to the consumer with ID that ends with f768, this is likely consumer C. And finally, the last four partitions are read by the consumer with ID ending with 4665.
>
> **[3:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=214)** The consumer group has automatically been rebalanced to accommodate the third consumer that was added as a part of this group.
>
> **[3:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=223)** You can actually view the same information on the terminal as well.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=228)** Use the Kafka Consumer Groups script to describe a consumer group that has been created.
>
> **[3:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=234)** I use the --describe flag.
>
> **[3:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=236)** The group that I'm interested in is the payment group, and I want to view the members of the payment group.
>
> **[4:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=242)** That's why I have the members flag.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=244)** This will give you exactly the information you seek.
>
> **[4:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=247)** Observe that we have three consumers that are part of the payment group.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=251)** You can see the consumer ID for each consumer.
>
> **[4:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=254)** And notice that there are four partitions that have been assigned to each consumer.
>
> **[4:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=259)** Let's see consumer group rebalancing in action when a consumer leaves the group. Back to our four-terminal-setup where I have one producer and three consumers running, I'm going to kill consumer C that's running in the bottom right terminal.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=274)** So we are back to having just two consumers in the payment group.
>
> **[4:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=278)** Consumer C is now dead.
>
> **[4:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=280)** Now, if you go back and run kafka-consumer-groups --describe payment group and look at the members, we'll have just two members, and each member has been assigned six partitions.
>
> **[4:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-consumer-group-rebalancing?u=76281980&t=291)** Kafka has automatically rebalanced the consumer group so that the remaining consumers in the group evenly divide the partitions amongst themselves.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (2), finally, (1)
> **Tools:** terminal (7)
> **Prerequisites:** set up (1), setup (1)
> **UI Navigation:** switch to (1)


### 6. 5. Monitoring Multi-Broker Clusters

#### Configuration properties for a multi-broker cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=0)** For the remaining demos in this course, we'll use a four-broker cluster.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=5)** Now, the remaining demos will look at replicas, replication lag, determining whether a broker has gone down.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=11)** For all of that, we need multiple brokers.
>
> **[0:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=14)** Now, we have a single broker cluster running.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=16)** That's what we've been using so far.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=18)** I'm going to go ahead and stop all of the services in this cluster, and you can do that using the Confluent local services stop command.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=26)** Now, on my local machine, this command took about a minute or two to run, but slowly all of the services were stopped.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=34)** This brings down all of confluent components that were running, Control Center, KsqlDB, Kafka, ZooKeeper, everything.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=41)** Once this is done, let's see how we can configure and set up a four-broker cluster on our local machine. cd into the Kafka folder under Confluent_Home.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=51)** This folder contains all of the configuration settings that you'll use to configure Apache Kafka.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=57)** Observe that there are a number of different files for the different configuration settings.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=63)** For example, ZooKeeper properties at the bottom contain config settings for the ZooKeeper service.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=69)** Notice, I have four server properties files, Server 0, 1, 2, 3.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=75)** The server.properties file is what you'll use to configure Kafka brokers, and I have four of them here because I plan to run four brokers.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=84)** Each broker has the same configuration.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=86)** So what I'll do here is show you the configuration for one of these server properties files, and then we'll quickly look at the other files as well to see that they are the same.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=96)** Every broker has a unique broker ID, so broker ID is set to 0 for the first broker.
>
> **[1:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=102)** Scroll down just a bit.
>
> **[1:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=104)** Here, you can see the address that a broker listens to.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=107)** For this first broker, it's localhost 9092.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=111)** So 127.0.0.1: 9092.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=114)** Both listeners as well as advertised listeners are set to this property.
>
> **[2:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=120)** By the way, I should tell you, I'm not really looking at the settings that I haven't changed, so not really looking at the settings that have default values.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=126)** The log dirs property points to the directory where the logs of this broker are stored.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=131)** Each broker should have its own logs directory, and this broker writes to kafka-logs-0 under tmp.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=137)** Let's scroll to the very bottom, and there you'll find the confluent.http.server.listener, and notice that this listens to http localhost 8090.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=147)** This too has to be different for each of the brokers that we run.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=151)** Now, I'll search for and show you the other config settings that I have changed.
>
> **[2:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=156)** Search for metrics.reporter. Make sure you set up your properties as on Lines 137 and 138, metric reporters pointing to confluent metrics reporter, and the confluent metrics reporter is bootstrapped using localhost 9092.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=171)** Next, search for a replication factor, and you'll find that I've set the default replication factor to 3.
>
> **[2:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=179)** There are a number of different properties here.
>
> **[3:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=181)** Notice that each property has a replication factor set to 3.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=187)** Next, search for replicas and you'll find all of the config settings that pertain to replicas.
>
> **[3:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=191)** They have also been set to 3. Search for one more property, confluent security event, and you can see here the topic replicas have also been set to 3.
>
> **[3:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=202)** Now, I'd like to mention something about having a four-broker cluster when my default replication factor is set to 3.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=209)** Now, limiting my replicas and the replication factor to 3 provides a safeguard of sorts for me.
>
> **[3:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=214)** That's because even if my cluster loses one broker, the three replicas for each partition will still be able to run on the three existing brokers.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=226)** It's good practice to have your number of brokers be at least one more than the number of replicas you want for each partition.
>
> **[3:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=233)** Now, here is my in-sync replicas.
>
> **[3:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=236)** I want all three replicas to be in sync before a message is acknowledged as being written to the cluster.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=244)** I have every broker set up with the same configuration settings.
>
> **[4:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=248)** Only the broker specific settings are different.
>
> **[4:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=250)** For example, here is the Broker 1 which has ID 1.
>
> **[4:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=254)** The broker with ID 1 listens to the Port 9093. Notice 34 and 38, those lines on this config. Observe that this broker writes out to kafka-logs-1 and then scroll to the very bottom, and here is the confluent http server listener port localhost 8091.
>
> **[4:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=275)** This has to be unique for each broker.
>
> **[4:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=277)** Here is the third broker, server-2.properties, broker with ID 2.
>
> **[4:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=282)** Take a look at the listeners port 9094 then scroll further down the logs directory, kafka-logs-2 and scroll to the very bottom.
>
> **[4:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=291)** The Confluent http server listener is set to localhost 8092.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=296)** And then we go to our fourth and last broker, server-3.properties.
>
> **[5:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=300)** Notice, broker ID is 3.
>
> **[5:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=302)** The listeners and advertised listeners set to port 9095.
>
> **[5:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=306)** The logs directory set to kafka-logs-3 And once again, I'll scroll to the very bottom, and you can see that the Confluent http server listener is set to localhost 8093.
>
> **[5:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=319)** Next, let's look at the configuration settings for the connect service, connect-distributed.properties, and here the replication factor has all been set to 3.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=330)** I'll just search for storage.replication.factor, and you can see every property that has the storage replication factor has been set to 3.
>
> **[5:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=340)** Now, the Confluent Control center also has its own configuration file where you can configure its properties.
>
> **[5:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=347)** Let's cd into the Confluent Control Center folder.
>
> **[5:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=351)** This is, of course, under the Confluent Home directory.
>
> **[5:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=354)** And when you run an ls -l here and you'll be able to see the control-center.properties file.
>
> **[6:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=362)** This is the file that I'm going to edit next to set up the Control Center configuration to work with my four-broker cluster.
>
> **[6:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=369)** I've already configured the properties I want here.
>
> **[6:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=371)** Notice, the bootstrap server set to localhost 9092.
>
> **[6:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=374)** You can specify additional bootstrap servers if you want to.
>
> **[6:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=377)** Zookeeper runs on port 2181. Lines 7 through 11 specify the URLs for the different components of the Confluent platform. For the default cluster, for the Connect, for KsqlDB, for the Schema Registry on line 11, notice the config settings pointing to the Confluent http server address for each broker.
>
> **[6:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=403)** All four brokers are listed there.
>
> **[6:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=405)** The remaining properties specified here are the default options to be used in the Control Center, default Replication 1 and Partitions 2.
>
> **[6:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuration-properties-for-a-multi-broker-cluster?u=76281980&t=413)** That's what I have specified.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), cd (2), apache (1), make (1), ls (1)
> **Prerequisites:** configure (4), set up (4)
> **Code Keywords:** let (4)
> **Ports:** port 9093 (1), port 9094 (1), port 9095 (1), port 2181 (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** for example (2)
> **Versions:** 127.0.0 (1)
> **Best Practices:** good practice (1)

#### Running a multi-broker cluster on the Confluent platform
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=0)** Now that we've seen the configuration of the four brokers, the Connect Service and Confluence Control Center, let's bring up the four brokers on our cluster.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=11)** Now, first, I'm going to run Confluent local services stop to confirm that our single broker cluster indeed is down and that everything is stopped.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=21)** Observe that I've switched to a terminal window with five tabs open. The first tab, we'll use to run ZooKeeper, the remaining four tabs for the four brokers of the cluster.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=31)** Let's use zookeeper-server-start and get ZooKeeper up and running.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=36)** Make sure you point to the ZooKeeper Properties file under Kafka in Confluent Home.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=41)** Once ZooKeeper is up and running, let's start bringing up the brokers of our cluster switch to the second tab and call kafka-server-start and specify server-0.properties.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=54)** This will bring up the broker with ID 0.
>
> **[0:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=56)** Observe that error, the invalid replication factor exception.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=61)** The replication factor that we specified was 3, larger than the number of brokers currently available.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=66)** Just one broker is up at this point in time.
>
> **[1:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=68)** Let's fix this.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=69)** I'll now switch over to the next tab and call kafka-server-start and bring up the second broker.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=76)** The configuration is in server-1.properties.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=80)** Now, the second broker is also up and running.
>
> **[1:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=83)** Let's switch to the third tab here and call kafka-server-start on server-2.properties.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=88)** This will bring up the third broker.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=91)** At this point in time, three out of four brokers in our cluster are up and running, so I'll now switch over to the last tab here and bring up the fourth broker as well using kafka-server-start.
>
> **[1:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=103)** Now, all of the brokers as well as ZooKeeper are running.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=107)** We now need to bring up the remaining components of the Confluent platform, starting with the kafka-rest API.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=114)** Use the kafka-rest-start command and point to kafka-rest.properties under confluent_home kafka_rest.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=122)** This will bring up the Rest API, an essential component of the Confluent platform.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=128)** Let's switch to another tab.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=129)** And here, I'm going to bring up the Connect service called connect-distributed and point to connect-distributed properties in the Kafka folder under Confluent home.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=139)** Once this is up and running, let's switch to the third tab that I have here and bring up the third component, and this is the ksqlDB server.
>
> **[2:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=149)** Its config properties are in ksql-server.properties under KsqlDB under Confluent home.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=155)** This should also come up successfully.
>
> **[2:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=158)** Let's now head over to the fourth tab and bring up the fourth service, the Schema Registry.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=163)** The properties are under schema-registry.properties under Schema Registry in the Confluent home.
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=168)** Now, four out of five components needed for the Confluent platform are up.
>
> **[2:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=173)** The last thing is the Control Center. Use control-center-start, point to the control-center.properties in Confluent home and bring up the control center as well.
>
> **[3:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=183)** Now, I'm not sure if you realize this.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=185)** What you just did was manually bring up every service required to run the Confluent platform.
>
> **[3:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/running-a-multi-broker-cluster-on-the-confluent-platform?u=76281980&t=192)** These are all of the services that came up when we used the Confluent local services start command early on in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (6), this. (2)
> **UI Navigation:** switch to (4)
> **Code Identifiers:** confluent_home (1), kafka_rest (1), ksqldb (1)
> **Env Vars:** api (2)
> **Tools:** confluence (1), terminal (1)
> **CLI Commands:** make (1)

#### Monitoring brokers
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=0)** Now that we have a cluster up and running, let's head over to localhost 9021, and hit "Refresh."
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=6)** And there you can see our multi-broker cluster.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=9)** You can see we have one healthy cluster and if you scroll down here, our controlcenter.cluster has four brokers.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=17)** Looks like we were successful in setting up this multi broker cluster.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=21)** Now, I'm going to click through and take a look at this cluster.
>
> **[0:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=25)** Notice, under brokers we have a total of four brokers and then there are some production bytes and consumption bytes.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=31)** These are all to topics internal to Confluent.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=34)** So we can just ignore this.
>
> **[0:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=35)** Let's click through to brokers.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=37)** You can see the partitioning and replication of the 60 topics that we have.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=41)** And if you scroll down to the bottom, you'll be able to see a bunch of other details for the brokers.
>
> **[0:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=47)** The active controller, the main broker is the broker with ID 0.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=51)** ZooKeeper is also running.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=54)** If you scroll to the very bottom here, that's where we'll see the entries for each individual broker.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=59)** In our single broker cluster, there was just one entry, but now we have four brokers, Broker 0 through Broker 3.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=66)** Now for each broker, we have throughput information, latency information for producers as well as consumers.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=73)** If you feel a broker is misbehaving, this is where you'd go to debug that particular broker.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=78)** Now, if you click through to a single broker, you'll be able to view additional details for that broker.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=84)** Here's the throughput for one broker, and if you scroll down, you'll see the production latency and consumption latency for this one broker.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=94)** If you feel that your brokers are not giving you the throughput that you expect, this is where you'd go to debug this information.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=100)** Now, if you head over to the configuration tab, this is where you can see the configuration settings that we had specified for this broker.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=109)** So all of the configuration settings that we had set in the server.properties file will be available here and can be edited from here.
>
> **[1:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-brokers?u=76281980&t=117)** I'll leave it to you to explore this page further.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (3), go to (2)
> **Code Keywords:** let (2), this. (1)

#### Observing partitions and replication
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=0)** Now that we are running a multi-broker cluster, we can have our topics be more durable by configuring a replication factor greater than 1.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=9)** Now, I'm on the topics page here, and I'm going to click on the "Add Topic" button to add a new topic.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=15)** I'm going to call this topic user_signups.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=18)** I'll set five as the number of partitions for this topic.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=21)** Click on "Customize Settings," and I'll use this UI to customize the replication factor for this topic.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=29)** Now, in the custom availability settings, make sure you click that and set the replication factor to 3, and the minimum number of in-sync replicas is set to 2.
>
> **[0:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=39)** So for a producer to have successfully produced a message to this topic, two out of three replicas need to acknowledge that the message has been produced.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=49)** Now, let's scroll to the very bottom and save and create this topic.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=53)** I'm not going to change any of the other configuration settings.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=57)** Now, let's head over and take a look at this topic with multiple replicas.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=62)** You can see that the user_signups topic is healthy.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=65)** We have five partitions in this topic, and if you scroll over to the right, you see the number of followers is set to 15.
>
> **[1:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=72)** That's because for these five partitions, we have a replication factor of 3.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=76)** Three multiplied by five gives us 15.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=78)** Let's click through and take a look at the partitions and monitor the replicas in this topic.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=85)** Now, there is no production and consumption, we haven't set that up yet.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=88)** Notice the availability.
>
> **[1:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=90)** No partitions are under replicated, meaning all partitions have their three replicas and there are no out of sync followers.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=99)** This means that there are no partition replicas that are out of sync with the partition leader.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=105)** Everything looks great here.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=107)** Let's scroll down and take a look at the individual partitions.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=111)** We have a total of five partitions.
>
> **[1:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=113)** All of them are available.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=114)** Observe for each partition, we know which broker contains the partition leader and which brokers contain the followers or the replicas of the partition.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=126)** So, for example, partition ID 0, the leader partition is on broker with ID 3 and the followers are brokers with ID 1 and 0.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=137)** That's where the replicas are placed.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=139)** Now, that our partitions are replicated, observe that we also have a replica lag.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/observing-partitions-and-replication?u=76281980&t=144)** This is the amount of time it takes to copy over the message written to the leader partition over to the replicas.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **UI Navigation:** click on (2), scroll down (1)
> **Code Identifiers:** user_signups (2)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Monitoring broker throughput and latency
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=0)** I'll now set up a Python producer to produce messages to this topic and set up three consumers in a consumer group to listen and consume those messages.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=10)** Here is the code for the producer.
>
> **[0:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=12)** Notice on Line 9, I instantiate the faker object that I use to generate fake data.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=18)** On delivery is the callback called each time a message is delivered successfully to the cluster, Get_profile_details just generates a fake profile for a user who has signed up.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=29)** And this is the message we'll push to the topic.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=31)** You can scroll down and see that the way we produce messages is the same.
>
> **[0:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=35)** We have a while true loop, and within that I call producer.produce and produce messages to the user_signups topic, and notice the partitions to which I push these messages is at random, one of the five partitions that we have. On line 43, you can see after each message is produced, the producer sleeps for between zero and three seconds at random.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=58)** Here is the code for the consumer.
>
> **[1:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=60)** You can see that the consumer belongs to the user_signups group, group ID on Line 5.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=66)** The consumer subscribes to the user_signups topic, this is on Line 9 and on Lines 15 through 33.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=73)** I have within a try catch block a while loop where the consumer constantly holds the topic and consumes messages.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=82)** This is the fake profile Consumer A and similarly, I have two more consumers, fake profile Consumer B with the exact same code, so the exact same way of consuming messages and then fake profile Consumer C again with the exact same code and the same manner of consuming messages.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=100)** Let's run out producer and consumer code and observe the effects on the cluster. Run python fakeProfileProducer.py to bring up the producer. In the next tab, I run the first consumer, fakeProfileConsumerA.py.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=115)** In the next tab, I run the second consumer, fakeProfileConsumerB, and then in the last tab, I run the third consumer, fakeProfileConsumerC.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=124)** All of these consumers belong to the same consumer group.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=128)** Now that we've set up our producers and consumers, let's go back and observe our brokers once again.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=134)** Notice the production and consumption throughput, they are actively changing because we are now actually producing data and publishing to our topic.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=144)** I've changed my configuration to the last 30 minutes, and here, we can see the production throughput of our producers.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=151)** Now you might wonder why we have four different lines here.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=155)** Well, that's because we have four brokers in the cluster, and here, we have the throughput for each individual broker.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=162)** Observe the request latency.
>
> **[2:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=164)** Once again, we have four different lines in this chart, one corresponding to the request latency of each of our brokers.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=172)** Brokers have both production as well as consumption throughput.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=176)** Here, you can see the bytes consumed per second by each of our four brokers.
>
> **[3:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=181)** You can see there's one broker which is almost at zero bytes.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=185)** It's not exactly at zero, but it's close to zero.
>
> **[3:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=188)** Now, there's nothing wrong with that broker except that I'm running four brokers on my local machine, so it's quite likely that one broker doesn't have very many resources, doesn't have very much memory that it can use.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=200)** You can also monitor the request latency of your individual brokers.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=204)** If you find that one particular broker has very high latency, well, that bears further investigation.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=212)** If you scroll further down on this page, you'll get nice graphs showing you the broker uptime.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=217)** You can see there are four brokers available and ZooKeeper is also up and running.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=222)** If you scroll further down, you'll get information about partition replicas.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=226)** For example, here, you can track under replicated partitions.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=230)** These are partitions where all of the replicas are not in sync.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=235)** And here you can see under main in-sync replicas the times when the number of replicas available was under the min in sync ratio of 2 that we had specified.
>
> **[4:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=247)** You can find system specific metrics here such as network pool usage and request pool usage, and at the very bottom, disk usage, which is steadily going up as more messages are being produced and sent to our brokers.
>
> **[4:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=260)** If you feel that you have just one or two brokers that are misbehaving, you can actually filter this UI based on the broker that you are interested in.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=268)** So rather than having all of the brokers selected, de-select the brokers you're not interested in.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=274)** Let's say you're just interested in broker ID 1 and 2, that's what you see here on this page.
>
> **[4:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=278)** Now, we have just two lines on all of our graphs representing Broker 1 and 2.
>
> **[4:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=285)** Back to the top, I'll go back and select all of the brokers that we have, so we view all of the information. And let's continue with our exploration of what we can observe and debug on this console.
>
> **[4:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=299)** Now, we've seen the request latency here, the latency of a request made by a broker to a producer.
>
> **[5:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=305)** You can actually click on this graph and get more information.
>
> **[5:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=309)** You get a nice breakdown of the different components that make up this latency, and you can use this to debug if any one component is unnaturally high, that is what may be contributing to your request latency.
>
> **[5:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=323)** I'll complete our exploration of the broker's page here, and let's head over to topics.
>
> **[5:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=327)** Here we have the user_signups topic with five partitions and three replicas for each partition.
>
> **[5:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=333)** You can see that steadily, messages are being produced and consumed.
>
> **[5:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=337)** Here are the production graphs.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=339)** Our producer has been running for quite some time.
>
> **[5:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=341)** There are no field requests.
>
> **[5:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=343)** Here, you can take a look at the consumption graphs as well.
>
> **[5:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=346)** Our consumers have been running without failure as well.
>
> **[5:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=350)** Now that we have replication, availability becomes important, you need to keep track of under replicated partitions and out of sync replicas.
>
> **[5:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=359)** And finally, we have the consumer lag page.
>
> **[6:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=361)** This is one that we are very familiar with.
>
> **[6:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=364)** This will allow us to see how behind our consumers are in consuming messages produced by the producer.
>
> **[6:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=371)** You can scroll down and here is the information for all five partitions.
>
> **[6:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=375)** We have three consumers and five partitions.
>
> **[6:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=378)** Two consumers are reading from two partitions each, and there is one consumer that just reads from a single partition.
>
> **[6:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/monitoring-broker-throughput-and-latency?u=76281980&t=385)** The first row, the consumer that ends with 65be just reads from one partition.

> [!info]- Semantic Content
>
> **Code Identifiers:** user_signups (4), fakeprofileproducer (1), fakeprofileconsumera (1), fakeprofileconsumerb (1), fakeprofileconsumerc (1)
> **Code Keywords:** let (5), continue (1), finally, (1)
> **CLI Commands:** python (2), find (2), make (1)
> **UI Navigation:** scroll down (2), select the (1), click on (1)
> **Cross-References:** in the next (2), in the last (1)
> **Prerequisites:** set up (3)
> **File Paths:** fakeprofileproducer.py (1), fakeprofileconsumera.py (1)
> **Analogies:** for example (1), such as (1)


### 7. 6. Debugging Brokers and Consumers

#### Debugging failed brokers, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=0)** In this movie, we'll see how we can debug and deal with dead brokers in our cluster.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=6)** Now, before we kill a broker, let's take a look at the topic that we are using.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=10)** This is the user_signups topic. I'm going to run --describe on this topic to see how many partitions and replicas it has.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=17)** This allows us to verify that this topic has five partitions.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=22)** You can see the leader for each partition.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=24)** You can see each partition has three replicas.
>
> **[0:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=27)** Replication factor is 3, and you can see the number of in-sync replicas.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=32)** At this point, all three replicas are in sync.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=36)** Observe Partition 3. The leader of that partition is Broker 2.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=41)** This is the broker that I'm about to kill to simulate broker failure.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=46)** So just look at Partition 3, and keep this in mind.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=48)** Now, let's simulate broker failure.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=50)** I'm going to head over to the terminal window where I have my brokers running and hit "Ctrl C" and kill one of the brokers.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=58)** So I've shut down the broker with ID 2.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=61)** So we've lost a broker in our cluster.
>
> **[1:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=64)** Let's go back to brokers in our Control Center, and let's take a look.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=69)** Let's see if this has figured out that we've lost a broker yet.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=73)** Here, at the bottom, where we have the information about each broker, you can see that little red line next to Broker 2 indicating that broker has failed.
>
> **[1:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=83)** That broker is no longer available to our cluster.
>
> **[1:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=87)** At this point, the cluster has only detected the failure of the broker, but when the broker does not come back up in a few minutes, you'll find that the entry for that broker will just disappear.
>
> **[1:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=98)** We now have a cluster with just three brokers, and you will see that now all of the metrics that we have for brokers will be available just for three brokers.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=107)** Click through to production, and here you can see that the production throughput has just three lines for the three brokers that are still running.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=115)** The same is true for consumption throughput as well.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=118)** If you scroll further down here, you'll see that the number of available brokers is just three.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=124)** If you scroll further down and look at the partitioned replicas graph, you can see that there has been something happening with the partition leaders.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=131)** All of the partition leaders that were present on the failed broker had to be rejigged so that they were then placed on brokers that are live.
>
> **[2:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=141)** We've seen some of the effects of the broker going down.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=144)** Let's head over to topics, and let's take a look at our user_signups topic.
>
> **[2:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=150)** Now, this topic had five partitions, replication factor of three, and min number of in-sync replicas two.
>
> **[2:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=156)** Let's scroll down to the bottom here and take a look at the partition leader.
>
> **[2:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=161)** Observe that none of the partition leaders are on Broker 2.
>
> **[2:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=165)** Partition 3, which originally had its leader as Broker 2, now has Broker 1 as the leader.
>
> **[2:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=172)** That's because two has failed, it's no longer available.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=175)** Now, let's go back here and take a look at the availability of this topic.
>
> **[2:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=179)** Now, don't be fooled by this main page which says there are no under replicated partitions or out of sync followers.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=185)** I've noticed that this main page does not update as quickly as it should.
>
> **[3:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=191)** If you click through, you'll be able to see from the graphs here that we do have under replicated partitions and out of sync replicas.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=199)** The fact that both of these graphs show non-zero values indicates that there are under replicated partitions present in our cluster and replicas that are not in sync with the partition leader.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=212)** This is something that we can see very clearly using the Kafka topics describe script.
>
> **[3:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=218)** Let's call --describe on user_signups.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=220)** Notice our five partitions.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=222)** Observe that the partition leaders are either Broker 0, 1, or 3, that is a live broker.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=229)** Notice the replicas and notice the in-sync replicas.
>
> **[3:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=232)** Observe that there are four partitions where the number of in-sync replicas is just two instead of three.
>
> **[3:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=239)** And you can see in these cases that the replica on Broker 2 is offline.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=244)** Now, if you go back to the main cluster page on the Confluent Control Center, you can see that this has been tagged as an unhealthy cluster.
>
> **[4:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-1?u=76281980&t=253)** That's because the number of brokers in this cluster is three where it was originally four.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10)
> **Code Identifiers:** user_signups (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### Debugging failed brokers, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=0)** Let's go back and punish our cluster a little more.
>
> **[0:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=3)** Here I am on the tab where I have broker ID 3 running.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=7)** I'm going to go ahead and use Ctrl C and kill this broker as well.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=11)** Our cluster has now lost two brokers out of four, and this is now a much more serious issue.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=18)** Let's run --describe on our user_signups topic and let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=22)** Observe that the cluster has determined that Broker 2 and Broker 3 are both offline and the leader partitions are all now on Broker 0 or Broker 1.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=33)** There are two partitions, Partition 0 and Partition 3 where the number of in-sync replicas is just one.
>
> **[0:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=39)** At this point, this topic is not available.
>
> **[0:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=43)** That's because the minimum in sync replicas is two, but in some situations for some partitions, we just have one replica available.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=53)** If you go back to the Confluent Control Center, you will see that our cluster is in a worse state.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=58)** We just have two brokers running, the cluster is clearly unhealthy.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=62)** When you click through, you'll find that the data for this cluster may not be available.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=66)** Let's click through to brokers and you scroll to the very bottom here.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=71)** You'll see that there are just two brokers running, Broker 0 and Broker 1.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=76)** I'll now head over to the topics page and take a look at the health of this topic.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=81)** Observe under user_signups, there is a warning, the topic is no longer healthy and there were issues found.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=88)** Well, all of these issues are because we've lost two out of four brokers. The topic partitions are no longer replicated as per their replication factor.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=99)** Observe that two partitions, Partition 0 and Partition 3 are offline because they do not have the minimum number of in-sync replicas up and available. Because our replication factor was 3 and the min in-sync replicas was two, this topic was available even after we lost one broker, but with the loss of two brokers, you can see that certain partitions are no longer available.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=126)** Because this happens to be a simulation, we can actually fix this very, very easily.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=131)** I'm going to head back to the terminal window and bring up Broker 2 using server-2.properties, use kafka-server-start and bring up Broker 2 so that it's up and running.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=143)** Once this is done, I'll switch over to the next tab and bring up Broker 3 as well using kafka-server start.
>
> **[2:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=149)** Now, both are dead, brokers are alive.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=151)** Let's take a look at the user_signups topic and this topic is now healthy.
>
> **[2:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=157)** All of the replicas for the topic partitions are available and in-sync replicas, there are three in-sync replicas.
>
> **[2:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=165)** The Confluent Control Center will pick up this information as well.
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=168)** On the brokers main page, if you scroll down, you can see that four brokers are now available.
>
> **[2:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=174)** They're alive and receiving requests.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=177)** If you head over to topics, you will find that the warnings for user_signups have disappeared.
>
> **[3:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=183)** The topic is now healthy.
>
> **[3:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=185)** You can click through and you can see that there are no under replicated partitions or out of sync followers.
>
> **[3:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=192)** I waited on this page for a while till availability was updated, and that's why I trust this page now.
>
> **[3:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-failed-brokers-part-2?u=76281980&t=198)** And you can see that all five partitions of our topic are now available for us to publish messages to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (1)
> **Code Identifiers:** user_signups (4)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### Debugging slow consumers
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=0)** In this movie, we'll see how you can debug slow consumers in your cluster.
>
> **[0:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=4)** I still have my four-broker cluster running.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=7)** My producer producing fake data is writing to the user_signups topic, and I have three consumers all within the consumer group, UserSignupGroup listening on this topic.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=20)** When I run --describe on this group, you can see that there are three consumers here, all with different consumer IDs.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=26)** Two of these consumers consume messages from two partitions each, and the third consumer consumes message from one partition.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=34)** Now, let's head over to the Control Center where we now have a healthy cluster, and let's click through to our cluster, and let's take a look at the consumers.
>
> **[0:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=43)** You can see that we have the UserSignupGroup consumer here.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=46)** Let's click through, and here you can observe the consumer lag.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=51)** You can see that the consumers don't really lag.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=54)** They're almost caught up with the produced messages.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=57)** They may be one message behind at the most.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=59)** I'm now going to deliberately slow down one consumer, and we'll see how we can identify this using Config Control Center.
>
> **[1:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=68)** I have killed consumer A, and it's no longer running and consuming messages.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=73)** Let's switch over to the code for Consumer A, and I'm now going to add in a delay.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=78)** Let's import the time library, and on Line 19, I add time.sleep for 10 seconds.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=85)** The sleeping for 10 seconds will introduce an artificial delay into this consumer so that it will consume messages at a lower rate.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=93)** I don't change any of the other code here.
>
> **[1:35](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=95)** Now, let's go back to our terminal window and bring up our fake profile consumer A once again. You'll see that this consumer soon starts consuming data, but the consumption is very slow because of the 10 second delay.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=111)** So it will consume far fewer messages than our other consumers which don't have this artificial delay built in.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=118)** So let's now head over to our consumer groups here.
>
> **[2:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=121)** We have our UserSignupGroup.
>
> **[2:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=123)** I'm going to click through and take a look.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=126)** And here, you can immediately identify that we have a slow consumer.
>
> **[2:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=132)** Now, the consumer lag says that this consumer group is six total messages behind the producer.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=139)** If you look carefully at the dots corresponding to each partition, you'll see that there are just one or two dots that are lagging most of the time, which means that the consumer reading from those partitions, that's the slow consumer.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=154)** This pattern here immediately tells you that it's not all consumers that are running slowly.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=159)** There are just maybe 1 or 2 consumers running slowly.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=163)** This consumer is up to speed, that's on Partition 2. This consumer on Partition 4 is also up to speed.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=171)** And this consumer running on Partition 3 is also up to speed. Partitions 2, 3, 4 have consumers that are up to speed, but partitions 0 and 1, and you can see that the same consumer is consuming from 0 and 1, the consumer ending in suffix, bbfd.
>
> **[3:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=189)** This is the slow consumer.
>
> **[3:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=192)** This is our consumer A.
>
> **[3:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/debugging-slow-consumers?u=76281980&t=194)** If you scroll over to the right here, you'll see that it is this consumer that is behind on messages, 13 and 16 messages behind respectively.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (1)
> **Code Identifiers:** user_signups (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)


### 8. 7. Configuring Alerts

#### Configuring alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=0)** All of the troubleshooting and debugging of brokers, consumers, topics, partitions, replicas that we've done so far, we've done using the Confluent Control Center, but you're hardly going to be sitting around and watching the Control Center for your cluster to become unhealthy and for you to debug. What you really need is an alerting mechanism.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=21)** And that's what we'll see in this demo.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=24)** I have a healthy cluster at this point in time with four running brokers.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=28)** Let's click through and take a look at the cluster.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=31)** Everything looks good.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=32)** There's nothing really wrong so far, but I do want to be intimated when something is wrong, and you can do this by configuring alerts.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=40)** Click on the little bell icon on the top right of your screen.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=44)** This is where you can get a history of all of the alerts that have been fired.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=50)** We haven't configured any triggers, that's why we have no alerts.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=53)** If you click on the triggers tab, well, it's completely empty because we haven't added any yet.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=58)** Actions are actions that you'd like to perform when an alert is triggered.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=63)** We haven't created any alert triggers.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=65)** We haven't configured any actions.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=67)** The Confluent platform also exposes a nice REST API that you can use to view all of the alerts that have been triggered on Confluent.
>
> **[1:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=78)** We'll use this in just a bit.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=80)** But first, we need to configure a trigger for an alert.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=85)** Go to triggers and click on the option to add a trigger.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=89)** This is what we'll use to monitor our cluster and watch out for specific events.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=94)** Now, the trigger name that I specify should be meaningful.
>
> **[1:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=98)** I call it zookeeper_down because this will look to see whether our zookeeper is running.
>
> **[1:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=103)** Now, the component type on which this trigger is going to listen to is the cluster and the ID of the cluster that this trigger is configured on is our current cluster, this is the ID. Confluent will give you what metrics you can listen non on the cluster.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=118)** ZK disconnected is the metric that I'm interested in and the condition is yes.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=122)** So if ZooKeeper is disconnected, I'm interested in knowing. Go ahead and save this trigger.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=129)** Now, once the trigger has been saved, you'll be prompted to create an action.
>
> **[2:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=133)** Let's actually create an action.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=135)** This will once again take you to a very simple form.
>
> **[2:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=138)** Now, every action has a name and make sure the name is meaningful.
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=143)** This is the ZookeeperDown_admin_alert action.
>
> **[2:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=146)** The action is enabled.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=147)** The trigger for this action is our zookeeper_down trigger that we have configured earlier.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=153)** The action specifies what action you want to take when the trigger is fired, that is, when zookeeper is down.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=159)** You can choose to send email, send PagerDuty notification or Slack.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=163)** Let's send an email.
>
> **[2:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=165)** The subject of an email will be "URGENT ATTENTION NEEDED: Zookeper is down" Now, we'll configure a max send rate, and you can do this per hour, per four hours, per eight hours, and so on.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=177)** So we can maximum send one email an hour, and the person to whom we'll send this email is going to be cloud.user@[loonycorn.com](https://loonycorn.com).
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=187)** Once we've configured this action, you can go ahead and save.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=190)** We've set up a trigger and configured a corresponding action.
>
> **[3:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=196)** Now, we need to wait for the event to occur. Now because this is a simulation, we can go to the ZooKeeper tab and just kill Zookeeper.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=205)** Zookeeper is now no longer running.
>
> **[3:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=207)** You can go back here, and let's look at the history of alerts, and there is no alert here yet.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=212)** But if you wait just a few seconds, you'll find that an alert shows up.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=217)** Zookeeper is down, that is the trigger that was fired.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=220)** Well, you might want to click through and see what other information is available.
>
> **[3:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=225)** So let's click through here and you can see that the ZooKeeper was down because it breached our threshold.
>
> **[3:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=232)** Now let's look at the API that we can use to get the history of all of the alerts.
>
> **[3:57](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=237)** Specify the URL for your Control Center localhost: 9021/2.0/alerts/history, and you can get a Json response with all of the alerts that have been fired so far.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=251)** Let's go over to our email and check to see whether we've received any email and we have it.
>
> **[4:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=257)** Now, this shouldn't be surprising to you because we haven't configured any of the settings on the Confluent platform in order to be able to receive email.
>
> **[4:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=266)** Well, we've seen how we can configure an alert and receive alert notifications on the Confluent Control Center.
>
> **[4:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-alerts?u=76281980&t=273)** Let's get our ZooKeeper up and running so that this alert no longer fires. In the next movie, we'll see how we can configure our alert to send an email successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Env Vars:** api (2), rest (1), urgent (1), attention (1), needed (1)
> **UI Navigation:** click on (3), go to (2)
> **Prerequisites:** configure (4), set up (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** zookeeper_down (2)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [loonycorn.com](https://loonycorn.com) (1)

#### Configuring email settings for alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=0)** In the previous movie, we saw how we could configure alerts, but that alert didn't really send an email because we didn't have that set up.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=7)** Let's set that up in this demo.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=9)** I have my four-broker cluster up and running.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=11)** It's healthy.
>
> **[0:12](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=12)** Let's click through, and I'm going to configure yet another alert, an alert for something else that I want to monitor in my cluster.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=20)** Click on the "Alerts" tab and let's head over to "Triggers" where we'll configure a new trigger.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=26)** Click on the "New trigger" button right here.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=29)** Now, I'm curious to see whether my partitions are under replicating.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=33)** So my trigger is going to be called under_replication because that's what it will be configured to detect.
>
> **[0:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=38)** The component type is cluster.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=40)** The cluster ID is the cluster that we're currently using.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=44)** Now under criteria, select the metric for under replicated topic partitions.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=50)** This is what will occur when our broker goes down.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=53)** Now, if under replicated topic partitions is greater than 0, we want to be alerted.
>
> **[0:59](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=59)** Go ahead and save the configuration for this trigger.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=63)** You'll be prompted to create an action. This time, once again, we'll set up an email action.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=69)** The action name is an under_replicated_partition_alert.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=74)** So "under_replication_alert" is what I've called it.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=76)** Next, choose the trigger.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=77)** There are just two triggers to choose from.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=79)** Choose under_replication.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=81)** The action is send email.
>
> **[1:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=83)** That's what I'm going to configure in just a bit.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=85)** The subject says "ATTENTION NEEDED: one of your partitions is under replicating." The max send rate is one per day.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=93)** I don't think this is that important than alert.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=96)** That's why I just want to see one per day. And the recipient is going to be cloud.user@[loonycorn.com](https://loonycorn.com).
>
> **[1:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=102)** Go ahead and save.
>
> **[1:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=103)** We need to configure our Confluent Control Center to be able to send emails.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=108)** So head over to controlcenter.properties.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=112)** This is the configuration file for the Control Center present under Confluent home, Confluent Control Center, controlcenter.properties.
>
> **[2:01](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=121)** I'm going to add in a bunch of configuration properties here that will allow Control Center to be able to send emails.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=128)** Mail enabled through the mail host is going to be a gmail server, so smtp.[gmail.com](https://gmail.com), port is 587, ssl port 465.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=137)** The email will be sent from loonytest001@[gmail.com](https://gmail.com).
>
> **[2:23](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=143)** I recommend that you pick a regular gmail address because you can allow insecure access to your email using this email address.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=152)** If you pick an email address that belongs to an organization, you may not be able to configure this. In order to be able to send emails, you need a 16-digit app password.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=162)** This is something that you have to generate using your Gmail account.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=166)** Now, here I am in the app passwords page of my Gmail account.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=171)** How did I get here?
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=171)** Well, I follow the steps here in this link.
>
> **[2:54](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=174)** Essentially, you go to your Google account and under security you should find a way to generate app passwords.
>
> **[3:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=182)** App passwords are useful on devices that don't support two step verification.
>
> **[3:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=188)** Now, the reason I point you to the support article is because under certain conditions, the ability to generate app passwords may not be available to you, so you should definitely check this link out. For a regular Gmail account however, you should be able to generate app passwords and that's why I'm using one.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=205)** First, you need to specify the app for which you need this password.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=208)** I need this password for my email.
>
> **[3:31](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=211)** Next, you need to specify the device.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=213)** The device is my Mac machine and that's why I've selected Mac here.
>
> **[3:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=218)** Go ahead and click on "Generate."
>
> **[3:41](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=221)** This will bring up a 16 digit generated app password that you can use.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=226)** So copy over the 16 digits, and let's head back to the Control Center properties file and paste these 16 digits into mail.password.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=238)** That is the property that we are configuring.
>
> **[4:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=240)** We now need to restart our Control Center to pick up these properties.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=244)** So head over to the tab where Control Center was running, kill the running process and call control_center_start once again with the new properties. Once your Control Center is up and running, let's head back.
>
> **[4:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=258)** Once this is done, I'm going to switch over to a tab where I have my broker running.
>
> **[4:25](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=265)** This is Broker 3, so I'm going to hit "Ctrl C" and kill this broker.
>
> **[4:30](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=270)** This broker is no longer running.
>
> **[4:32](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=272)** I'm going to kill one more broker for good measure.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=274)** This is Broker 2, I'm going to go ahead and kill that as well.
>
> **[4:37](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=277)** Once that is done, we'll definitely have topics that are under replicated.
>
> **[4:42](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=282)** Let's head over to the Control Center and here is the history tab.
>
> **[4:45](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=285)** And about three minutes ago, the under_replication alert was triggered.
>
> **[4:50](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=290)** You can click through and view additional details for this alert greater than our threshold 0, that we had specified.
>
> **[4:58](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=298)** Well, let's go to the API here and hit "Refresh."
>
> **[5:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=302)** And you can see there are two alerts in our history of alerts on this Config Control Center.
>
> **[5:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=308)** Let's now head over to our email and there you can see an email from loonytest001 saying, "ATTENTION NEEDED: one of your partitions is under replicating." And you can see the details of this alert in this email.
>
> **[5:21](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/configuring-email-settings-for-alerts?u=76281980&t=321)** Well, we've successfully configured our alert to send an email.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), from. (1), this. (1), switch (1)
> **Prerequisites:** configure (6), set up (2)
> **Code Identifiers:** under_replication (3), under_replicated_partition_alert (1), under_replication_alert (1), control_center_start (1)
> **UI Navigation:** click on (3), go to (2), select the (1)
> **Env Vars:** attention (2), needed (2), api (1)
> **URLs:** [gmail.com](https://gmail.com) (2), [loonycorn.com](https://loonycorn.com) (1)
> **CLI Commands:** find (1)
> **Ports:** port 465 (1)


### 9. Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=0)** And this demo brings us to the very end of this course on troubleshooting and debugging Kafka.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=6)** Let's quickly summarize what we studied in this course, and let's take a look at some of the next steps that you might want to take in your learning.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=13)** We started this course off by introducing the Confluent platform to work with Kafka.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=18)** We saw that the Confluent platform is built on top of Apache Kafka using Kafka as the core, and it offers many enterprise grade features.
>
> **[0:27](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=27)** We saw how the Confluent platform offers the Confluent Control Center user interface that we could use to monitor our cluster health and the health of all of the Kafka components that we run.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=40)** We also got introduced to ksqlDB, used to create streams and tables from the messages published to topics.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=49)** We simulated a number of different failure situations with our cluster, field brokers, low consumers, consumer lag under replication of partitions, and so on, and we used the Config Control Center to observe cluster health, topic health, messages, partitions, and brokers.
>
> **[1:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=68)** We also learned how we could debug slow consumers using the Control Center UI.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=74)** And we saw how we could use alerts to monitor the health of our cluster.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=79)** Now, this brings us to the very end of this course.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=82)** If you're interested in studying further, here are some other courses on LinkedIn learning that you might find interesting. If you're interested in Big Data Processing, Apache Spark is a great technology to learn. Apache Spark Essential Training Big Data Engineering is a great course for this.
>
> **[1:38](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=98)** If Kafka is what you're interested in, here is another course that you might find enjoyable.
>
> **[1:43](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=103)** Deploying and Running Apache Kafka on Kubernetes.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=108)** In order to learn more about stream processing with Kafka, you can view Stream Processing Design Patterns with Kafka Streams.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=115)** And if you're interested in configuring and tuning your Kafka cluster, Tuning Kafka might be the right course for you.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=122)** Well, that's it from me here today, I hope you enjoyed this course.
>
> **[2:06](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=126)** It's time for me to say goodbye.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=128)** Thank you.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-and-debugging-kafka/summary-and-next-steps?u=76281980&t=129)** Goodbye.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), find (2)
> **Code Keywords:** let (2), interface (1), this. (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** ksqldb (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Apache Kafka

## Path Context

### In [[Master Data Engineering]]
← [[Apache Kafka Essential Training Building Scalable Applications]] | **2 of 8** | [[Tuning Kafka]] →

## Appears In

- [[Master Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Apache Kafka Essential Training- Getting Started]] — Apache Kafka
- [[Tuning Kafka]] — Apache Kafka
- [[Apache Kafka Essential Training Building Scalable Applications]] — Apache Kafka

---

[↑ Back to top](#)