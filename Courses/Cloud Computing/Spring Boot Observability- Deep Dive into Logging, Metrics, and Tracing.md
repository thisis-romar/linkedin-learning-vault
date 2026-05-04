---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: spring-boot-observability-deep-dive-into-logging-metrics-and-tracing
url: "https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing"
duration_minutes: 39
duration: 39m
level: Advanced
updated: 6/9/2022
learners: 9810
skills:
  - Spring Boot
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF3sefPLnRYNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654619167655?e=2147483647&amp;v=beta&amp;t=ib6U0ernBMnc5kXkOyxRavCgUkZrJzAjFIRFKuUuvCk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)'
prev_courses:
  - '[Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md)'
next_courses:
  - '[Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md)'
path_nav: '[{"path":"Advance Your Spring Development Skills","position":3,"total":6,"prev":"Performance Tuning in Spring Apps","next":"Advanced Spring- Spring Boot Actuator"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Spring%20Boot%20Observability-%20Deep%20Dive%20into%20Logging%2C%20Metrics%2C%20and%20Tracing.md)

![Spring Boot Observability: Deep Dive into Logging, Metrics, and Tracing](https://media.licdn.com/dms/image/v2/C560DAQF3sefPLnRYNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654619167655?e=2147483647&amp;v=beta&amp;t=ib6U0ernBMnc5kXkOyxRavCgUkZrJzAjFIRFKuUuvCk)

# Spring Boot Observability: Deep Dive into Logging, Metrics, and Tracing

> Once up and running Spring apps, you want to go beyond basic monitoring and get operational insight into the behavior of your system. This course with Terezija Semenski gets you up to speed on how to achieve observability with Spring applications. Terezija covers three main pillars of observability: Logging, metrics, and tracing, and how they correlate across different systems. She provides hands-

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing) | 39m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Observability with Spring Boot](#observability-with-spring-boot)
  - [What you need to know](#what-you-need-to-know)
- [**1. Understand Why Observability Is Important**](#1-understand-why-observability-is-important) (3 videos)
  - [What is observability?](#what-is-observability)
  - [Why care about observability?](#why-care-about-observability)
  - [Logging, metrics, and tracing](#logging-metrics-and-tracing)
- [**2. Logging**](#2-logging) (3 videos)
  - [Problem with basic logging](#problem-with-basic-logging)
  - [Why centralized logging](#why-centralized-logging)
  - [Logging and Spring](#logging-and-spring)
- [**3. Metrics**](#3-metrics) (3 videos)
  - [Usage of metrics](#usage-of-metrics)
  - [Metrics for observability](#metrics-for-observability)
  - [Metrics in Spring](#metrics-in-spring)
- [**4. Tracing**](#4-tracing) (2 videos)
  - [Distributed tracing](#distributed-tracing)
  - [Tracing in Spring](#tracing-in-spring)
- [**Conclusion**](#conclusion) (2 videos)
  - [How to correlate logging, metrics, and tracing](#how-to-correlate-logging-metrics-and-tracing)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Observability with Spring Boot](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=0)** - [Terezija] Once up and running Spring apps, you want to go beyond basic monitoring and get operational insight into the behavior of your system. This course will get you up to speed on how to achieve observability with Spring applications. Hi, I'm Terezija Semenski. I've been a software developer in [Java](../../Skills/Software%20Development/Java.md) and Spring for over a decade. The best way to learn observability is to jump right in, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Speakers:** - [terezija] (1)

#### [What you need to know](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need. This course is targeted at advanced developers building distributed systems using Spring, who want better observability to improve areas such as alerting, root case latency analyzes, and monitoring. A solid foundation and understanding of [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) and [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) is recommended. Previous experience with distributed systems, [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md), and APM tools is nice to have, however, it's not required, since we will cover the three main pillars of observability: Monitoring, metrics, and tracing, and how to integrate them in your Spring Boot-based applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (1), [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) (1)
> **Env Vars:** apm (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Understand Why Observability Is Important

[↑ Back to Table of Contents](#table-of-contents)

#### [What is observability?](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=0)** - [Instructor] Spring makes it easy to build and your run application in production. However, once deployed, it's crucial to have operational insight into the behavior of the system, a system architectures increasing complexity and scale. We face pressure to track conditions and respond to issues across different cloud environments. As a result, IT teams are looking for greater observability, as it is crucial for investigating and preventing situations where a system starts to deviate from its attended state. But what's observability? Observability might mean different things to different people. Some might say it's all about monitoring application on time, response time, errors, or latency. To others, it might be tracking system resources, such as available free memory and CPU utilization. The term observability was coined by Hungarian American electrical engineer, mathematician, and inventor, Rudolf E. Kalman, in 1960. Observability is defined as a measure of how well internal states of a system can be inferred from knowledge of its external outputs. Observability is basically a way of you staying ahead of the issues from the low level, such as code within the application, OS and system level, and finally, at the network level, too. But how does this compare to monitoring?
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=95)** According to the "Site Reliability Engineering" book by [Google](../../Glossary/Service/Google.md), your monitoring system needs to answer two simple questions: what's broken and why. Monitoring allows you to watch and understand your system state using a predefined set of metrics and logs, which led to detect a known set of failures. However, the problem with monitoring complex distributed applications is that production failures are not linear and, therefore, are difficult to predict. Whereas, monitoring brings all the value in understanding when your system is working, or if something went wrong, observability enables you to understand why. An observable system allows you to more easily navigate from the effects to the cause. It helps you find answers to questions like, what services did the request go through, and where were the performance bottlenecks? How was the execution of the request different from the expected system behavior? Why did the request fail? How did each microservice process the request? System with observability is what you want. Imagine operations person comes to you and says, "Hey, our CPU is at 100% in one of the clusters of a service." Well, that doesn't immediately tell you anything. It doesn't tell you how to fix it. Imagine if instead you get a message, "Hey, your latest deployment with this release number XY
>
> **[3:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=190)** increased latency for this particular endpoint by 50%, and it's impacted 80% of customers." As a developer, you immediately know where the problem is, how important it is, where you can find it, fix it, how to reproduce it, and map the problem in your code. Keeping the idea of observability in mind let's developers a way to push a change and know how quickly the impact of that change. You have to accept that things are always going to happen in production. The goal is not to eliminate failure, the goal is to focus on recovering as quickly as possible with early and fast detection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **Analogies:** such as (2), imagine (2)
> **CLI Commands:** find (2)
> **Env Vars:** cpu (2)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Why care about observability?](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=0)** - [Instructor] The goal of observability is to detect and resolve issues to keep your system sufficient and reliable and keep your customers happy. We know what observability is, but why should we care? What is driving the popularity of observability and what impact does it have? One of the main drivers is today's incredibly complex distributed system. With introduction of [Microservices](../../Skills/Software%20Development/Microservices.md) or service architectures, features are insulated across different services instead of big monoliths. So things are growing with different deployment strategies delivered in cloud clusters. This also brought numerous innovations to improve and accelerate software delivery and quality such as [DevOps](../../Topics/DevOps.md) culture and CI/CD pipelines. With added complexity, we got more points of failure. There needs to be a way to push changes and be aware of the impact of that change. When in production, pinpointing issues is hard from monolith to microservices, to local [Databases](../../Skills/Software%20Development/Databases.md), shared databases, or even search servers. User requests might travel through content delivery networks, cache servers, multiple load balancers, and using stick sessions. Once you are live, it's really hard to find the root cause of the problem. Observability goes beyond traditional monitoring and gives the developers greater control
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=95)** over complex systems by providing you with better end-to-end visibility and ability to get better insight, get better history and be much more on the top of the systems at any given time. Observability helps the developers discover and fix problems faster. Providing deeper visibility that allows them to investigate root causes more accurately and efficiently. With a centralized look on the whole architecture, there is no need to track down information to third-party companies and apps to find out who was responsible for a particular service. Observability makes monitoring and troubleshooting more efficient removing the main friction point for developers. It can reduce your meantime to recovery, which is the average time it takes to recover from a system failure. The result is increased speed of delivery and more time for DevOps staff to come up with innovative ideas to meet the needs of the business and its customers. Here are some of the examples which observability can solve. How do I make my app faster? How can my app be more efficient? Is my load balancing properly using all cluster nodes? What is my cache hit ratio? How does my failure rate compare to the day before? Which service is the slowest, and where is the bottleneck? We are still monitoring
>
> **[3:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=187)** as we have always done only faster and more effectively. Those are mobility revolution of the past five years has been focused on reducing the effort needed to investigate each hypothesis increasing the speed at which data can be correlated and opening the door to automated analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [DevOps](../../Topics/DevOps.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **CLI Commands:** find (2), cd (1), make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Logging, metrics, and tracing](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=0)** - [Instructor] Collecting the measurements of logs, metrics and distributed traces are the three key pillars to achieving successful observability. In distributed systems, this is more difficult with an ever-changing and scaling environment. With microservice architectures, you will have services calling each other to perform a task. So you need to collect insight from each service and stitch it together in order to view the system as a whole and be able to slice and drill down into different parts in order to identify where the problem is happening. Doing things like scaling and using short-lived instances makes observability also more difficult because you don't necessarily know where your instances are or how many you have at the given time, but you still need to get that insight from them. Logs, metrics and traces are the essential data types of observability. To achieve observability, you need to instrument everything and view all your telemetry data in one place. This is where monitoring tools help to collect the data needed to form connections, to get insight into the performance and health of our system. Logging is the detailed information about individual things that is ongoing in your application. Logs are essential in ensuring application observability. Metrics are aggregated information
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=95)** about application features over a period of time, such as the application's CPU, network and memory. Tracing is sampled information across multiple services on how long each service call took. A single trace displays the operation as it moves from one node to another in a distributed system Traces allow you to get into the details of a particular request to determine which components cause system errors, monitor flow through the modules and find performance bottlenecks. Tracing makes your observable system more effective and allows you to identify the root cause of an issue in a distributed system. This can be seen as the most important part of observability implementation. Understanding the causal relationship in your microservice architecture and being able to follow the issue from the effect to the cause and vice versa.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), find (1)
> **Env Vars:** cpu (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Logging

[↑ Back to Table of Contents](#table-of-contents)

#### [Problem with basic logging](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=0)** - [Instructor] Logs can be very useful when we are trying to understand an unexpected response or a production failure. However, logs don't have unlimited capabilities. Here's some of the challenges they pose for developers when they are debugging [Microservices](../../Skills/Software%20Development/Microservices.md). Let's go through a simple scenario in a distributed system. We have two different applications that depend on each other. And in a distributed system, you of course have high availability. So you have two instances of each. For example, in a [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster, and logs are being generated on each of these instances. Application one is calling application two and then something goes wrong. You need to get the logs and search through each log from each instance. There are a couple of problems that arise from this example. This doesn't scale really well. There are just too many tedious steps. The more application instances you have, the less manageable this is. You need to have authorizations and knowledge on how to access each machine. You might be able to access them more easily with [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Actuator or admin, however, you still need to download logs from each instance. Also, logs can quickly pile up and consume your system. And how do you search the logs? Do you use some text editor or use grep command? Search ability is limited or too difficult.
>
> **[1:37](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=97)** When a possibly hopefully relevant log is found, the next step is usually to determine the chain of events that cause this log to be generated. This means finding all of the logs in the same transaction. In a concurrent environment, logs from different requests are intermixed. So it'll be difficult to filter out logs from the same request. In a small system, this process of reconstructing transaction is tedious but possible. But once the system grows to include many horizontally scaled services, the amount of time it takes to reconstruct a single transaction begins to severely limit the scope of any investigation. We can improve this by using centralized logging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1)
> **CLI Commands:** grep (1)
> **Analogies:** for example (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Why centralized logging](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=0)** - [Instructor] The best way to capture log information from distributed systems is with centralized logging. Using our previous example of two applications dependent on each other running on a distributed system rather than having the logs in each system, the goal is to stream log information to centralized log service. We want to do this in near real time. So if something goes wrong, we can immediately see what is happening. Centralized log system is able to reliably and securely take data from any source in any format. This would allow us to search logs that match some criteria and often allow us to get correlated logs from for the same request. To get this kind of setup, we can use tools built to provide centralized logging system. ELK Stack, Logstash ingest the logs. [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) to query the logs. Kibana dashboard to visualize the logs. Splunk, Graylog, Loggy, and each cloud service comes with its own solution. You get many specific benefits from a centralized logging system. It will let you spend less time thinking about your logs and more time using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Env Vars:** elk (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Logging and Spring](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=0)** - [Instructor] Centralized logging fixes aggregation and retrieval problems. But we still have some more things to configure that [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) can help. Spring Boot handles the majority of logging configuration settings for us. If we do not provide any logging-specific configuration, we will still see logs printed in the console. But how does it work? Any Spring Boot starter depends on Spring Boot starter logging, which pulls in the logback as dependency with default configuration. It's recommended to ingest logs in a structured way, such as by using the common log format across all your applications so that log visualization systems can author index and make logs easily be queryable. Spring Boot preconfigures it with patterns, which can be changed directly in application.properties or with environmental variable. The default log format looks and resembles the following example. Log levels, by default, are set to INFO, meaning that trace and debug messages are not visible. You may easily change the log level for the whole application or for a specific class or package. Sometimes you might not be getting enough information during the runtime, so you may want to turn up the log level for a specific package or a specific instance and get additional log information temporarily. You can do this in three different ways:
>
> **[1:36](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=96)** by using logback functionality. By setting the scan attribute to true, we're telling logback to check the configuration file for changes. With Spring Boot Actuator and Spring Admin, Actuator is a new metrics library mainly used to expose operational information about the running application. It uses HTTP endpoints or GM makes beans to enable us to interact with it. Spring Boot Admin. Spring Boot Admin is a web application used for managing and monitoring Spring Boot applications. It takes all those Actuator endpoints and makes then available from one centralized store. It comes with a nice UI where we can easily change log levels. Both Actuator and Spring Admin can be easily enabled and configured. Spring Cloud Config. If you want to control log levels and log format for multiple Spring applications, Spring Cloud Config is something you should look at. It provides a centralized place to manage external properties for applications in a distributed system across all environments. We also have Spring Cloud Sleuth library, which integrates effortlessly with logging and adds trace ID to help filter logs belonging to the same thread, job or request. Here in our example, we can see requests between two different services,
>
> **[3:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=190)** has the same trace ID even though service ID's changing and Sleuth takes care of propagating trace ID from one application to another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (9)
> **Env Vars:** info (1), http (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Metrics

[↑ Back to Table of Contents](#table-of-contents)

#### [Usage of metrics](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=0)** - [Instructor] Do you know where your production KPI metrics are? You can't improve what you can't measure. And metrics are important part of this. Metrics are the foundation of monitoring. They provide counts of measurements that are aggregated over a period of time. They can originate from a variety of sources including infrastructure, host, services, cloud platforms and other external sources. Metrics give us a way to describe specific facts about our system, quantifying essential data. Let's take a look at some examples of metrics data. How much time do request to a particular endpoint take? How many people are experiencing errors? What is the average time for a given request or more usefully? What is the 99th percentile of a given request? How many people have signed up? How many people have clicked the checkout button? Or something that Amazon tracks is the number of abandoned shopping carts. Their main purpose is to give a bird's-eye view of the overall system health. They are mostly used in these areas. Alerts. You can write custom queries, and once some thresholds has reached, an alert is created. Identified trends and deviations, you can visualize and identify trends and deviations and recognize. How does the data compare to the last hour? How is it changing compared to the last deployment?
>
> **[1:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=94)** How does the high volume of requests reflect on our system, caching, CPU, memory, database? Identify failures. Additionally, in the event of a failure, monitoring data should immediately be able to provide visibility into the impact of the failure, and how does it affect end user. They are the main driver for [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md). Metrics are the main source of data for performance tuning. They help us verify if any changes to the application infrastructure, tuning or sizing had any effect on improved performance. Verifies [System Architecture](../../Skills/Software%20Development/System%20Architecture.md). Metrics allow us to verify if the load balancing has been properly set. What is the cache hit ratio? Is the out of scaling, down scaling working? And are we wasting or not effectively using all resources? Let's look at the web application where you have users making conquering requests to our application. Those requests are hitting a controller, which makes a call to the backend, which can be a database or another service call. Application framework or the specific library responsible for metrics is recording the timing for each request and then saving that timing data as an aggregate into inMemory store. We could get those metrics via JMX or HTTP request. In a distributed environment,
>
> **[3:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=188)** our application would be hosted on multiple instances. And the same as with logs, it can be really tedious to get metrics from each instance. A better approach is to publish those metrics to a metrics backend solution. Once captured, you won't need to store and analyze the metrics. To do so, you'll use a monitoring backend with a time serious database, something like Wavefront, Prometheus, Dynatrace, et cetera, to then visualize and analyze that data. Such a solution allows to aggregate slice and reel down across all our instances. We can then visualize it via graphs or [Dashboards](../../Skills/Data%20Science/Dashboards.md) and also set up alerts that would be triggered once a certain threshold is reached.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) (2), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** kpi (1), cpu (1), jmx (1), http (1)
> **Code Identifiers:** inmemory (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Metrics for observability](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=0)** - [Instructor] Implementing infrastructure monitoring from scratch for a [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application would be a pretty wasteful adventure, especially when doing so repeatedly for each application or microservice in our distributed system. The Spring team has provided us with a pretty good toolset called Spring Boot Actuator, which we already mentioned earlier to manage logs. Spring Boot Actuator is a sub-project of Spring Boot that brings a lot of production-ready features to the Spring Boot application. This includes service information, health checks, metrics gathering, tracing traffic, sessions and so on. One of the essential Actuator endpoints is the /actuator/health endpoint, which provides the capability to check the service health. The health information should include all details that allow an operational team to [react](../../Skills/Web%20Development/React.js.md) to potential threats or failure as soon as possible. Responding to the unavailability of the database or free this space shortage will enable [DevOps](../../Topics/DevOps.md) to take corresponding actions. So health information may include more details as depicted in the following diagram. The next vital part of successfully monitoring the application is through operational metrics gathering over /actuator/metrics endpoint. Behind the scenes, Actuator uses a metrics library called Micrometer, which has been introduced in 2018
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=95)** with Spring Boot 2. It supports capturing all sorts of metrics: timers, counters, histograms, averages, et cetera in a dimensional way, and allows you to decide on the monitoring system as the last step. Dimensional metrics refer to metrics data that has a variety of attributes, dimensions attached used to break down metrics. These attributes could include an endpoint being invoked, HTTPS status code, method and duration-related attributes. This amount of detail enables in-depth analysis and querying. Dimensional metrics means that it's easier to capture metrics and it's easier to then drill down into the metrics in an unforeseen way later. Once captured, those metrics can be mated to different monitoring systems. Some of them come free, while some require a subscription fee. You can see the complete list at [micrometer.io](https://micrometer.io). Metrics for specific backend can be easily configured by adding the specific dependency of the desired monitoring system and adding some configuration, like monitoring system URL and token or configure specific metric properties. Like with customizing the health endpoint, you can easily custom metrics that are specific to your domain. These are treated like any other metrics and are published to your monitoring at backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (6), [React](../../Skills/Web%20Development/React.js.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **Env Vars:** https (1), url (1)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [micrometer.io](https://micrometer.io) (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Metrics in Spring](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=0)** - [Instructor] Setting up a metric system and integrating with Spring applications doesn't have to be difficult. We already mentioned the power of Micrometer library and how it offers integration with plenty of observability platforms. One such platform is called Wavefront and it offers a free tier for [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) developers. And guess what, it doesn't require any changing of your code. If you don't have a Wavefront account, it sets one up for you automatically. The beautiful thing about Wavefront is that it seamlessly integrates with Spring Boot applications. It is already included in Spring Boot Starter and requires only two dependencies. Out of the box, it comes with the large number of metrics exposed by default. You have tracing support between different Spring Boot components and across all your [Microservices](../../Skills/Software%20Development/Microservices.md). So if you're creating an app from scratch, go to start.[spring.io](https://spring.io). Make sure to select the latest Spring Boot version. And click on Add Dependency, and select Wavefront from the dependency list. To send trace data to Wavefront, also add Spring Cloud Sleuth dependency and click Generate to download the project as ZIP file. For an exiting project like I'm using now, you can add them directly
>
> **[1:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=94)** as part of the Maven or [Gradle](../../Glossary/Tool/Gradle.md) configurations. For an existing project, like I'm using now, you can add them directly as part of the Maven or Gradle configuration. Instructions for a new application or an existing one are available in Wavefront docs. Now, next thing we are going to do is refresh Maven and run our application.
>
> **[2:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=130)** During startup, Wavefront will look for an API token in property files or in your home directory with the name .wavefront_freemium. If it's not there, it will provision a Wavefront account for you automatically. Sometimes this can fail since the provisioning service has a timeout set to 10 seconds. In that case, you would get an error in the console. This means you need to create an account manually and add API key and URI as a part of application properties. Now head off to the Wavefront and click on Service Dashboard. Here you have a bird's eye view on our application. Now obviously, I've had this application running for a while. So when you do this, you won't have this much data. Here we can see the number of requests. We can also see which exact requests are coming in and how long they take. We can also get a breakdown as a histogram of how long these requests take and what the frequency is of each duration. It's also possible to explore key metrics of GVM, such as garbage collection, heap size, number of threads and all those things, but we can do much more than that. We can deep dive into specific rev, [Zoom](../../Skills/Software%20Development/Zoom.md) in and the time spent will be reflected on all grabs. We also explore and add specific Spring metrics
>
> **[3:45](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=225)** or use any custom ones if we created them.
>
> **[3:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=236)** We can also create alerts or even track traces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (5), [Gradle](../../Glossary/Tool/Gradle.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** api (2), zip (1), uri (1), gvm (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Exercise Files:** download the (1), zip file (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** wavefront_freemium (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Definitions:** is called (1)


### 4. Tracing

[↑ Back to Table of Contents](#table-of-contents)

#### [Distributed tracing](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=0)** - [Instructor] Another crucial ingredient for a successful observable system is to have an understanding of how events flow across the services, how requests take up, and how long those requests take. Metrics like request context, since metrics are aggregated across requests, logging along cannot effect (indistinct) troubleshoot issues since it lacks distributed info. So, metrics and logs by themselves fail to provide in depth visibility across all the services. And this is where distributed tracing comes to the rescue. Tracing is beneficial when you have a request which spans across multiple systems, a trace tells you how long a request took, which components it interacted with, and the latency introduced during each set. This allows you to pinpoint where failures or performance issues are occurring in the system, and why. Goal of the tracing is to capture. Hierarchy, timing information, also some additional [Metadata](../../Skills/Web%20Development/Metadata.md) like service name, request method name, or class name. Once processing is done by any of the services it is going to report a span data to the tracing backend. Which will be able to correlate back to the first span and create a trace data. One example of tracing backend is Wavefront. This is what it looks. At the top, we have a service map
>
> **[1:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=92)** that shows communication between services. At the bottom, we see a critical path breakdown of the trace data, we see when each service was called and how much time it consumed, and whether or not the operation failed. Additional three but such as service, operation name, text and duration are useful as the latest do additional filtering and trace (indistinct) help us search for relevant logs in the distributed logging solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Tracing in Spring](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=0)** - [Instructor] Implementing distributed tracing sounds like a daunting challenge. However, you will learn how easy it is to integrate tracing with your springboard applications. Spring Cloud Project provides an excellent module called Spring Cloud Sleuth. Spring Cloud Sleuth is a project well integrated with [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) 2.x infrastructure, enabling distributed tracing with just a few bits of auto configuration. The Sleuth starter brings in Spring Cloud Sleuth distributed tracing abstraction, which provides a simple facade over distributed tracing systems, such as Zipkin or Wavefront. Sleuth configures everything you need to get started. This includes where trace data spans are reported to, how many traces to keep sampling, if remote fields baggage are sent, and which libraries are traced. There are a lot of properties you can configure. One of the main things you want to configure is sampling [Probability](../../Skills/Data%20Science/Probability.md) and rate. This is applied when using Zipkin as a backend. Sampling is a way to prevent overloading the system by consistently tracing some, but not all, requests. By default, the sampling rate is set to ten per second, which should be good enough representative set. So don't get surprised if you don't see all requests being traced. Other backends like Wavefront
>
> **[1:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=92)** have different [Algorithms](../../Skills/Software%20Development/Algorithms.md) for sampling that can also be customized in Wavefront application directly. Let's see what this looks like in Wavefront. In the previous example, we already added both Wavefront and Spring Cloud Sleuth library, which is required to capture and export tracing data. However, for this example, I'm using a beach shirt application from Wavefront demo. Here, we have a couple of [Microservices](../../Skills/Software%20Development/Microservices.md) that talk to each other. I'm going to inspect the shopping service. To explore traces, you can do that either here from the dashboard menu or just choose one of the longest web requests. On the left side, we can filter and sort all traces. Right now, we have selected the longest one. We get this nice breakdown of which services were called and which ones spent most of the time. If you click on each service, you can actually see some context data. Wavefront also breaks down what the application looks like, what microservices were used in this request, and how they're interacted. This is what you can do with a simple dependency that we added to the project, and then Spring Boot configured everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Prerequisites:** configure (2), required to (1)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [How to correlate logging, metrics, and tracing](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=0)** - [Instructor] Now that you have mastered logging, metrics and tracing, let's learn how you can correlate them to get most out of each. Traditionally, we think of each of three pillars being completely separated. Let's say there is a spike in errors in the metrics dashboard. Lack of correlations puts huge burden on the developer to stitch everything together. The logs are stored in a completely separate system and cannot be automatically associated with any metrics dashboard. Distributed tracing if not sampled properly and without meaningful context data would make finding the right trace a nightmare. Think about how much time and effort you put into gathering those logs through searching and filtering. That is time spent gathering data, not time spent analyzing data. Developers must use their minds to identify correlations in that data based on dashboard displays and log scanning. This is intense mental effort. How can we link this together? For example, let's say that an API has a metric that measures the number of errors per minute. Traditionally, we may think of metrics being completely separated from traces. However, usually each metric is created for a specific transaction using a specific request. For example, URL. When an operator is alerted to sudden spike in errors, their first question will naturally be,
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=95)** what's causing that spike? When metrics events occur for a given research, for example request URL, [Java](../../Skills/Software%20Development/Java.md) method call, a sample of these traces are automatically associated with the metric as trace candidates. This means that there's no guessing or hunting for traces. When we have traces, think of traces as extensions of logs. With a proper traceid, gathering those logs is just one single lookup. traceid allows your distributing logging tool to do this work for you automatically. You find one log and you have all the logs intersection right there with no extra work. It's the glue that holds everything together. Correlations are often the key ingredients of generating root cause hypothesis, which can then be investigated further. Here are some examples of correlations that may provide a key insight pointing to root cause. Increased error rate is highly correlated with a service version. Extreme latency is highly correlated with tomcat.node. Traffic spike is highly correlated with username. With the right data, relevant correlations can be detected more effectively by machines. Developers cannot predict how their applications are going to behave ahead of time. They will always have errors, but these errors can be false positives
>
> **[3:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=188)** as they're not impacting end users and performance. This is where AI can help us. AI automatically detects processes and services and will observe their behavior. Instead of raising an alert for every error or threshold reached, an alert is only raised when the expected behavior changes. The AI is deciding what is an acceptable threshold and it'll tell you which alerts needs investigating. Experiencing a massive reduction in wasted time is at the heart of what it means to practice modern observability. By shifting the cognitive burden onto machines, developers are able to effectively manage systems that have grown beyond what any human can possibly fit in their head.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (1), find (1), node (1)
> **Env Vars:** url (2), api (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have made it to the end. You have learned how to effortlessly achieve observability in [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application. With the unique advantages offered by each of three pillars, logging, metrics and tracing, you can achieve powerful observability. If you want to know more about observability on AWS, please check my other course, [Java](../../Skills/Software%20Development/Java.md): Serverless Applications on AWS. For more advanced Spring users, I would highly recommend you check my other two courses, Advanced Spring: [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md), and Spring Events. If you have any questions, please feel free to get in touch over [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and on Twitter. I really do appreciate your engagement, as well as your feedback on this course. If you enjoyed this course, I'd love to know. Thanks so much for watching, and I hope you enjoy this course. Until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Terezija Semenski](../../Instructors/Artificial%20Intelligence%20(AI)/Terezija%20Semenski.md)

## Skills Covered

- Spring Boot

## Path Context

### In [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)
← [Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md) | **3 of 6** | [Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md) →

## Appears In

- [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Spring Boot
- [Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md) — Spring Boot
- [Spring On Kubernetes Deploying And Managing Cloud Native Applications](Spring%20On%20Kubernetes%20Deploying%20And%20Managing%20Cloud%20Native%20Applications.md) — Spring Boot
- [Advanced Spring- Effective Integration Testing with Spring Boot](../Software%20Development/Advanced%20Spring-%20Effective%20Integration%20Testing%20with%20Spring%20Boot.md) — Spring Boot
- [Spring 6- Spring Security](../Software%20Development/Spring%206-%20Spring%20Security.md) — Spring Boot

---

[↑ Back to top](#)