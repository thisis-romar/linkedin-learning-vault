---
type: course
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
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-boot
status: not-started
created: 2026-04-17
---

# Spring Boot Observability: Deep Dive into Logging, Metrics, and Tracing

> Once up and running Spring apps, you want to go beyond basic monitoring and get operational insight into the behavior of your system.
This course with Terezija Semenski gets you up to speed on how to achieve observability with Spring applications. Terezija covers three main pillars of observability: Logging, metrics, and tracing, and how they correlate across different systems. She provides hands-

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing) | 39m | Advanced | 10K learners

## Instructor

- [[Terezija Semenski]]

## Skills Covered

- Spring Boot

## Table of Contents

### Introduction

#### Observability with Spring Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=0)** - [Terezija] Once up and running Spring apps, you want to go beyond basic monitoring and get operational insight into the behavior of your system.
>
> **[0:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=10)** This course will get you up to speed on how to achieve observability with Spring applications.
>
> **[0:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=17)** Hi, I'm Terezija Semenski.
>
> **[0:20](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=20)** I've been a software developer in Java and Spring for over a decade.
>
> **[0:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/observability-with-spring-boot?u=76281980&t=24)** The best way to learn observability is to jump right in, so let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [terezija] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need.
>
> **[0:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980&t=6)** This course is targeted at advanced developers building distributed systems using Spring, who want better observability to improve areas such as alerting, root case latency analyzes, and monitoring.
>
> **[0:21](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980&t=21)** A solid foundation and understanding of Spring Framework and Spring Boot is recommended.
>
> **[0:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-you-need-to-know?u=76281980&t=27)** Previous experience with distributed systems, performance tuning, and APM tools is nice to have, however, it's not required, since we will cover the three main pillars of observability: Monitoring, metrics, and tracing, and how to integrate them in your Spring Boot-based applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** apm (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Understand Why Observability Is Important

#### What is observability?
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=0)** - [Instructor] Spring makes it easy to build and your run application in production.
>
> **[0:05](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=5)** However, once deployed, it's crucial to have operational insight into the behavior of the system, a system architectures increasing complexity and scale.
>
> **[0:16](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=16)** We face pressure to track conditions and respond to issues across different cloud environments.
>
> **[0:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=23)** As a result, IT teams are looking for greater observability, as it is crucial for investigating and preventing situations where a system starts to deviate from its attended state.
>
> **[0:36](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=36)** But what's observability?
>
> **[0:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=38)** Observability might mean different things to different people.
>
> **[0:41](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=41)** Some might say it's all about monitoring application on time, response time, errors, or latency.
>
> **[0:49](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=49)** To others, it might be tracking system resources, such as available free memory and CPU utilization.
>
> **[0:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=57)** The term observability was coined by Hungarian American electrical engineer, mathematician, and inventor, Rudolf E. Kalman, in 1960.
>
> **[1:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=68)** Observability is defined as a measure of how well internal states of a system can be inferred from knowledge of its external outputs.
>
> **[1:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=78)** Observability is basically a way of you staying ahead of the issues from the low level, such as code within the application, OS and system level, and finally, at the network level, too.
>
> **[1:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=92)** But how does this compare to monitoring?
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=95)** According to the "Site Reliability Engineering" book by Google, your monitoring system needs to answer two simple questions: what's broken and why.
>
> **[1:46](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=106)** Monitoring allows you to watch and understand your system state using a predefined set of metrics and logs, which led to detect a known set of failures.
>
> **[1:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=117)** However, the problem with monitoring complex distributed applications is that production failures are not linear and, therefore, are difficult to predict.
>
> **[2:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=128)** Whereas, monitoring brings all the value in understanding when your system is working, or if something went wrong, observability enables you to understand why.
>
> **[2:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=139)** An observable system allows you to more easily navigate from the effects to the cause.
>
> **[2:25](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=145)** It helps you find answers to questions like, what services did the request go through, and where were the performance bottlenecks?
>
> **[2:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=154)** How was the execution of the request different from the expected system behavior?
>
> **[2:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=159)** Why did the request fail?
>
> **[2:41](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=161)** How did each microservice process the request?
>
> **[2:44](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=164)** System with observability is what you want.
>
> **[2:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=167)** Imagine operations person comes to you and says, "Hey, our CPU is at 100% in one of the clusters of a service."
>
> **[2:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=177)** Well, that doesn't immediately tell you anything.
>
> **[3:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=181)** It doesn't tell you how to fix it.
>
> **[3:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=183)** Imagine if instead you get a message, "Hey, your latest deployment with this release number XY increased latency for this particular endpoint by 50%, and it's impacted 80% of customers."
>
> **[3:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=198)** As a developer, you immediately know where the problem is, how important it is, where you can find it, fix it, how to reproduce it, and map the problem in your code.
>
> **[3:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=211)** Keeping the idea of observability in mind let's developers a way to push a change and know how quickly the impact of that change.
>
> **[3:40](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=220)** You have to accept that things are always going to happen in production.
>
> **[3:45](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/what-is-observability?u=76281980&t=225)** The goal is not to eliminate failure, the goal is to focus on recovering as quickly as possible with early and fast detection.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), imagine (2)
> **CLI Commands:** find (2)
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** cpu (2)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### Why care about observability?
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=0)** - [Instructor] The goal of observability is to detect and resolve issues to keep your system sufficient and reliable and keep your customers happy.
>
> **[0:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=9)** We know what observability is, but why should we care?
>
> **[0:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=14)** What is driving the popularity of observability and what impact does it have?
>
> **[0:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=19)** One of the main drivers is today's incredibly complex distributed system.
>
> **[0:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=24)** With introduction of microservices or service architectures, features are insulated across different services instead of big monoliths.
>
> **[0:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=35)** So things are growing with different deployment strategies delivered in cloud clusters.
>
> **[0:40](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=40)** This also brought numerous innovations to improve and accelerate software delivery and quality such as DevOps culture and CI/CD pipelines.
>
> **[0:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=51)** With added complexity, we got more points of failure.
>
> **[0:55](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=55)** There needs to be a way to push changes and be aware of the impact of that change.
>
> **[1:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=61)** When in production, pinpointing issues is hard from monolith to microservices, to local databases, shared databases, or even search servers.
>
> **[1:13](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=73)** User requests might travel through content delivery networks, cache servers, multiple load balancers, and using stick sessions.
>
> **[1:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=83)** Once you are live, it's really hard to find the root cause of the problem.
>
> **[1:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=89)** Observability goes beyond traditional monitoring and gives the developers greater control over complex systems by providing you with better end-to-end visibility and ability to get better insight, get better history and be much more on the top of the systems at any given time.
>
> **[1:50](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=110)** Observability helps the developers discover and fix problems faster.
>
> **[1:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=116)** Providing deeper visibility that allows them to investigate root causes more accurately and efficiently.
>
> **[2:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=123)** With a centralized look on the whole architecture, there is no need to track down information to third-party companies and apps to find out who was responsible for a particular service.
>
> **[2:16](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=136)** Observability makes monitoring and troubleshooting more efficient removing the main friction point for developers.
>
> **[2:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=144)** It can reduce your meantime to recovery, which is the average time it takes to recover from a system failure.
>
> **[2:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=152)** The result is increased speed of delivery and more time for DevOps staff to come up with innovative ideas to meet the needs of the business and its customers.
>
> **[2:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=163)** Here are some of the examples which observability can solve.
>
> **[2:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=167)** How do I make my app faster?
>
> **[2:49](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=169)** How can my app be more efficient?
>
> **[2:52](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=172)** Is my load balancing properly using all cluster nodes?
>
> **[2:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=176)** What is my cache hit ratio?
>
> **[2:58](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=178)** How does my failure rate compare to the day before?
>
> **[3:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=182)** Which service is the slowest, and where is the bottleneck?
>
> **[3:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=186)** We are still monitoring as we have always done only faster and more effectively.
>
> **[3:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-care-about-observability?u=76281980&t=192)** Those are mobility revolution of the past five years has been focused on reducing the effort needed to investigate each hypothesis increasing the speed at which data can be correlated and opening the door to automated analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), cd (1), make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Logging, metrics, and tracing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=0)** - [Instructor] Collecting the measurements of logs, metrics and distributed traces are the three key pillars to achieving successful observability.
>
> **[0:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=9)** In distributed systems, this is more difficult with an ever-changing and scaling environment.
>
> **[0:16](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=16)** With microservice architectures, you will have services calling each other to perform a task.
>
> **[0:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=22)** So you need to collect insight from each service and stitch it together in order to view the system as a whole and be able to slice and drill down into different parts in order to identify where the problem is happening.
>
> **[0:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=38)** Doing things like scaling and using short-lived instances makes observability also more difficult because you don't necessarily know where your instances are or how many you have at the given time, but you still need to get that insight from them.
>
> **[0:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=56)** Logs, metrics and traces are the essential data types of observability.
>
> **[1:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=62)** To achieve observability, you need to instrument everything and view all your telemetry data in one place.
>
> **[1:11](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=71)** This is where monitoring tools help to collect the data needed to form connections, to get insight into the performance and health of our system.
>
> **[1:21](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=81)** Logging is the detailed information about individual things that is ongoing in your application.
>
> **[1:28](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=88)** Logs are essential in ensuring application observability.
>
> **[1:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=92)** Metrics are aggregated information about application features over a period of time, such as the application's CPU, network and memory.
>
> **[1:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=103)** Tracing is sampled information across multiple services on how long each service call took.
>
> **[1:50](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=110)** A single trace displays the operation as it moves from one node to another in a distributed system Traces allow you to get into the details of a particular request to determine which components cause system errors, monitor flow through the modules and find performance bottlenecks.
>
> **[2:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=130)** Tracing makes your observable system more effective and allows you to identify the root cause of an issue in a distributed system.
>
> **[2:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=138)** This can be seen as the most important part of observability implementation.
>
> **[2:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-metrics-and-tracing?u=76281980&t=144)** Understanding the causal relationship in your microservice architecture and being able to follow the issue from the effect to the cause and vice versa.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), find (1)
> **Env Vars:** cpu (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Logging

#### Problem with basic logging
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=0)** - [Instructor] Logs can be very useful when we are trying to understand an unexpected response or a production failure.
>
> **[0:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=8)** However, logs don't have unlimited capabilities.
>
> **[0:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=12)** Here's some of the challenges they pose for developers when they are debugging microservices.
>
> **[0:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=18)** Let's go through a simple scenario in a distributed system.
>
> **[0:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=23)** We have two different applications that depend on each other.
>
> **[0:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=27)** And in a distributed system, you of course have high availability.
>
> **[0:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=31)** So you have two instances of each.
>
> **[0:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=34)** For example, in a Kubernetes cluster, and logs are being generated on each of these instances.
>
> **[0:42](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=42)** Application one is calling application two and then something goes wrong.
>
> **[0:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=47)** You need to get the logs and search through each log from each instance.
>
> **[0:53](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=53)** There are a couple of problems that arise from this example.
>
> **[0:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=56)** This doesn't scale really well.
>
> **[0:59](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=59)** There are just too many tedious steps.
>
> **[1:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=62)** The more application instances you have, the less manageable this is.
>
> **[1:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=67)** You need to have authorizations and knowledge on how to access each machine.
>
> **[1:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=72)** You might be able to access them more easily with Spring Boot Actuator or admin, however, you still need to download logs from each instance.
>
> **[1:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=82)** Also, logs can quickly pile up and consume your system.
>
> **[1:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=87)** And how do you search the logs?
>
> **[1:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=89)** Do you use some text editor or use grep command?
>
> **[1:33](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=93)** Search ability is limited or too difficult.
>
> **[1:37](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=97)** When a possibly hopefully relevant log is found, the next step is usually to determine the chain of events that cause this log to be generated.
>
> **[1:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=107)** This means finding all of the logs in the same transaction.
>
> **[1:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=111)** In a concurrent environment, logs from different requests are intermixed.
>
> **[1:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=117)** So it'll be difficult to filter out logs from the same request.
>
> **[2:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=121)** In a small system, this process of reconstructing transaction is tedious but possible.
>
> **[2:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=128)** But once the system grows to include many horizontally scaled services, the amount of time it takes to reconstruct a single transaction begins to severely limit the scope of any investigation.
>
> **[2:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/problem-with-basic-logging?u=76281980&t=143)** We can improve this by using centralized logging.

> [!info]- Semantic Content
>
> **CLI Commands:** grep (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Why centralized logging
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=0)** - [Instructor] The best way to capture log information from distributed systems is with centralized logging.
>
> **[0:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=7)** Using our previous example of two applications dependent on each other running on a distributed system rather than having the logs in each system, the goal is to stream log information to centralized log service.
>
> **[0:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=23)** We want to do this in near real time.
>
> **[0:26](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=26)** So if something goes wrong, we can immediately see what is happening.
>
> **[0:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=31)** Centralized log system is able to reliably and securely take data from any source in any format.
>
> **[0:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=39)** This would allow us to search logs that match some criteria and often allow us to get correlated logs from for the same request.
>
> **[0:50](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=50)** To get this kind of setup, we can use tools built to provide centralized logging system.
>
> **[0:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=57)** ELK Stack, Logstash ingest the logs.
>
> **[1:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=61)** Elasticsearch to query the logs.
>
> **[1:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=64)** Kibana dashboard to visualize the logs.
>
> **[1:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=67)** Splunk, Graylog, Loggy, and each cloud service comes with its own solution.
>
> **[1:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=74)** You get many specific benefits from a centralized logging system.
>
> **[1:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/why-centralized-logging?u=76281980&t=79)** It will let you spend less time thinking about your logs and more time using them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** elk (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Logging and Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=0)** - [Instructor] Centralized logging fixes aggregation and retrieval problems.
>
> **[0:05](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=5)** But we still have some more things to configure that Spring Boot can help.
>
> **[0:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=9)** Spring Boot handles the majority of logging configuration settings for us.
>
> **[0:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=14)** If we do not provide any logging-specific configuration, we will still see logs printed in the console.
>
> **[0:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=22)** But how does it work?
>
> **[0:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=23)** Any Spring Boot starter depends on Spring Boot starter logging, which pulls in the logback as dependency with default configuration.
>
> **[0:33](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=33)** It's recommended to ingest logs in a structured way, such as by using the common log format across all your applications so that log visualization systems can author index and make logs easily be queryable.
>
> **[0:49](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=49)** Spring Boot preconfigures it with patterns, which can be changed directly in application.properties or with environmental variable.
>
> **[0:58](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=58)** The default log format looks and resembles the following example.
>
> **[1:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=63)** Log levels, by default, are set to INFO, meaning that trace and debug messages are not visible.
>
> **[1:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=70)** You may easily change the log level for the whole application or for a specific class or package.
>
> **[1:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=78)** Sometimes you might not be getting enough information during the runtime, so you may want to turn up the log level for a specific package or a specific instance and get additional log information temporarily.
>
> **[1:33](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=93)** You can do this in three different ways: by using logback functionality.
>
> **[1:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=99)** By setting the scan attribute to true, we're telling logback to check the configuration file for changes.
>
> **[1:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=107)** With Spring Boot Actuator and Spring Admin, Actuator is a new metrics library mainly used to expose operational information about the running application.
>
> **[1:58](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=118)** It uses HTTP endpoints or GM makes beans to enable us to interact with it.
>
> **[2:05](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=125)** Spring Boot Admin.
>
> **[2:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=126)** Spring Boot Admin is a web application used for managing and monitoring Spring Boot applications.
>
> **[2:13](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=133)** It takes all those Actuator endpoints and makes then available from one centralized store.
>
> **[2:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=139)** It comes with a nice UI where we can easily change log levels.
>
> **[2:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=144)** Both Actuator and Spring Admin can be easily enabled and configured.
>
> **[2:30](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=150)** Spring Cloud Config.
>
> **[2:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=152)** If you want to control log levels and log format for multiple Spring applications, Spring Cloud Config is something you should look at.
>
> **[2:42](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=162)** It provides a centralized place to manage external properties for applications in a distributed system across all environments.
>
> **[2:52](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=172)** We also have Spring Cloud Sleuth library, which integrates effortlessly with logging and adds trace ID to help filter logs belonging to the same thread, job or request.
>
> **[3:05](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/logging-and-spring?u=76281980&t=185)** Here in our example, we can see requests between two different services, has the same trace ID even though service ID's changing and Sleuth takes care of propagating trace ID from one application to another.

> [!info]- Semantic Content
>
> **Env Vars:** info (1), http (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** default, (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Metrics

#### Usage of metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=0)** - [Instructor] Do you know where your production KPI metrics are?
>
> **[0:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=4)** You can't improve what you can't measure.
>
> **[0:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=6)** And metrics are important part of this.
>
> **[0:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=9)** Metrics are the foundation of monitoring.
>
> **[0:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=12)** They provide counts of measurements that are aggregated over a period of time.
>
> **[0:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=17)** They can originate from a variety of sources including infrastructure, host, services, cloud platforms and other external sources.
>
> **[0:28](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=28)** Metrics give us a way to describe specific facts about our system, quantifying essential data.
>
> **[0:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=35)** Let's take a look at some examples of metrics data.
>
> **[0:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=39)** How much time do request to a particular endpoint take?
>
> **[0:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=43)** How many people are experiencing errors?
>
> **[0:46](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=46)** What is the average time for a given request or more usefully?
>
> **[0:50](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=50)** What is the 99th percentile of a given request?
>
> **[0:54](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=54)** How many people have signed up?
>
> **[0:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=56)** How many people have clicked the checkout button?
>
> **[0:59](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=59)** Or something that Amazon tracks is the number of abandoned shopping carts.
>
> **[1:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=64)** Their main purpose is to give a bird's-eye view of the overall system health.
>
> **[1:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=69)** They are mostly used in these areas.
>
> **[1:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=72)** Alerts.
>
> **[1:13](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=73)** You can write custom queries, and once some thresholds has reached, an alert is created.
>
> **[1:20](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=80)** Identified trends and deviations, you can visualize and identify trends and deviations and recognize.
>
> **[1:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=87)** How does the data compare to the last hour?
>
> **[1:30](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=90)** How is it changing compared to the last deployment?
>
> **[1:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=94)** How does the high volume of requests reflect on our system, caching, CPU, memory, database?
>
> **[1:42](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=102)** Identify failures.
>
> **[1:44](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=104)** Additionally, in the event of a failure, monitoring data should immediately be able to provide visibility into the impact of the failure, and how does it affect end user.
>
> **[1:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=116)** They are the main driver for performance tuning.
>
> **[1:59](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=119)** Metrics are the main source of data for performance tuning.
>
> **[2:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=124)** They help us verify if any changes to the application infrastructure, tuning or sizing had any effect on improved performance.
>
> **[2:13](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=133)** Verifies system architecture.
>
> **[2:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=137)** Metrics allow us to verify if the load balancing has been properly set.
>
> **[2:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=142)** What is the cache hit ratio?
>
> **[2:25](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=145)** Is the out of scaling, down scaling working?
>
> **[2:28](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=148)** And are we wasting or not effectively using all resources?
>
> **[2:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=152)** Let's look at the web application where you have users making conquering requests to our application.
>
> **[2:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=159)** Those requests are hitting a controller, which makes a call to the backend, which can be a database or another service call.
>
> **[2:48](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=168)** Application framework or the specific library responsible for metrics is recording the timing for each request and then saving that timing data as an aggregate into inMemory store.
>
> **[3:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=182)** We could get those metrics via JMX or HTTP request.
>
> **[3:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=186)** In a distributed environment, our application would be hosted on multiple instances.
>
> **[3:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=192)** And the same as with logs, it can be really tedious to get metrics from each instance.
>
> **[3:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=198)** A better approach is to publish those metrics to a metrics backend solution.
>
> **[3:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=204)** Once captured, you won't need to store and analyze the metrics.
>
> **[3:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=209)** To do so, you'll use a monitoring backend with a time serious database, something like Wavefront, Prometheus, Dynatrace, et cetera, to then visualize and analyze that data.
>
> **[3:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=223)** Such a solution allows to aggregate slice and reel down across all our instances.
>
> **[3:49](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/usage-of-metrics?u=76281980&t=229)** We can then visualize it via graphs or dashboards and also set up alerts that would be triggered once a certain threshold is reached.

> [!info]- Semantic Content
>
> **Env Vars:** kpi (1), cpu (1), jmx (1), http (1)
> **Code Keywords:** let (2), this. (1)
> **Code Identifiers:** inmemory (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Metrics for observability
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=0)** - [Instructor] Implementing infrastructure monitoring from scratch for a Spring Boot application would be a pretty wasteful adventure, especially when doing so repeatedly for each application or microservice in our distributed system.
>
> **[0:15](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=15)** The Spring team has provided us with a pretty good toolset called Spring Boot Actuator, which we already mentioned earlier to manage logs.
>
> **[0:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=24)** Spring Boot Actuator is a sub-project of Spring Boot that brings a lot of production-ready features to the Spring Boot application.
>
> **[0:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=34)** This includes service information, health checks, metrics gathering, tracing traffic, sessions and so on.
>
> **[0:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=43)** One of the essential Actuator endpoints is the /actuator/health endpoint, which provides the capability to check the service health.
>
> **[0:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=51)** The health information should include all details that allow an operational team to react to potential threats or failure as soon as possible.
>
> **[1:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=61)** Responding to the unavailability of the database or free this space shortage will enable DevOps to take corresponding actions.
>
> **[1:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=70)** So health information may include more details as depicted in the following diagram.
>
> **[1:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=77)** The next vital part of successfully monitoring the application is through operational metrics gathering over /actuator/metrics endpoint.
>
> **[1:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=87)** Behind the scenes, Actuator uses a metrics library called Micrometer, which has been introduced in 2018 with Spring Boot 2.
>
> **[1:37](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=97)** It supports capturing all sorts of metrics: timers, counters, histograms, averages, et cetera in a dimensional way, and allows you to decide on the monitoring system as the last step.
>
> **[1:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=111)** Dimensional metrics refer to metrics data that has a variety of attributes, dimensions attached used to break down metrics.
>
> **[2:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=121)** These attributes could include an endpoint being invoked, HTTPS status code, method and duration-related attributes.
>
> **[2:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=130)** This amount of detail enables in-depth analysis and querying.
>
> **[2:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=134)** Dimensional metrics means that it's easier to capture metrics and it's easier to then drill down into the metrics in an unforeseen way later.
>
> **[2:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=144)** Once captured, those metrics can be mated to different monitoring systems.
>
> **[2:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=149)** Some of them come free, while some require a subscription fee.
>
> **[2:34](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=154)** You can see the complete list at [micrometer.io](https://micrometer.io).
>
> **[2:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=158)** Metrics for specific backend can be easily configured by adding the specific dependency of the desired monitoring system and adding some configuration, like monitoring system URL and token or configure specific metric properties.
>
> **[2:55](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=175)** Like with customizing the health endpoint, you can easily custom metrics that are specific to your domain.
>
> **[3:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-for-observability?u=76281980&t=182)** These are treated like any other metrics and are published to your monitoring at backend.

> [!info]- Semantic Content
>
> **Env Vars:** https (1), url (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** require (1)
> **URLs:** [micrometer.io](https://micrometer.io) (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Metrics in Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=0)** - [Instructor] Setting up a metric system and integrating with Spring applications doesn't have to be difficult.
>
> **[0:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=6)** We already mentioned the power of Micrometer library and how it offers integration with plenty of observability platforms.
>
> **[0:15](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=15)** One such platform is called Wavefront and it offers a free tier for Spring Boot developers.
>
> **[0:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=22)** And guess what, it doesn't require any changing of your code.
>
> **[0:26](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=26)** If you don't have a Wavefront account, it sets one up for you automatically.
>
> **[0:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=31)** The beautiful thing about Wavefront is that it seamlessly integrates with Spring Boot applications.
>
> **[0:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=38)** It is already included in Spring Boot Starter and requires only two dependencies.
>
> **[0:44](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=44)** Out of the box, it comes with the large number of metrics exposed by default.
>
> **[0:49](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=49)** You have tracing support between different Spring Boot components and across all your microservices.
>
> **[0:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=56)** So if you're creating an app from scratch, go to start.[spring.io](https://spring.io).
>
> **[1:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=62)** Make sure to select the latest Spring Boot version.
>
> **[1:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=68)** And click on Add Dependency, and select Wavefront from the dependency list.
>
> **[1:16](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=76)** To send trace data to Wavefront, also add Spring Cloud Sleuth dependency and click Generate to download the project as ZIP file.
>
> **[1:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=89)** For an exiting project like I'm using now, you can add them directly as part of the Maven or Gradle configurations.
>
> **[1:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=98)** For an existing project, like I'm using now, you can add them directly as part of the Maven or Gradle configuration.
>
> **[1:48](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=108)** Instructions for a new application or an existing one are available in Wavefront docs.
>
> **[1:54](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=114)** Now, next thing we are going to do is refresh Maven and run our application.
>
> **[2:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=130)** During startup, Wavefront will look for an API token in property files or in your home directory with the name .wavefront_freemium.
>
> **[2:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=139)** If it's not there, it will provision a Wavefront account for you automatically.
>
> **[2:25](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=145)** Sometimes this can fail since the provisioning service has a timeout set to 10 seconds.
>
> **[2:32](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=152)** In that case, you would get an error in the console.
>
> **[2:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=155)** This means you need to create an account manually and add API key and URI as a part of application properties.
>
> **[2:44](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=164)** Now head off to the Wavefront and click on Service Dashboard.
>
> **[2:53](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=173)** Here you have a bird's eye view on our application.
>
> **[2:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=177)** Now obviously, I've had this application running for a while.
>
> **[3:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=181)** So when you do this, you won't have this much data.
>
> **[3:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=184)** Here we can see the number of requests.
>
> **[3:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=186)** We can also see which exact requests are coming in and how long they take.
>
> **[3:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=192)** We can also get a breakdown as a histogram of how long these requests take and what the frequency is of each duration.
>
> **[3:21](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=201)** It's also possible to explore key metrics of GVM, such as garbage collection, heap size, number of threads and all those things, but we can do much more than that.
>
> **[3:33](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=213)** We can deep dive into specific rev, zoom in and the time spent will be reflected on all grabs.
>
> **[3:41](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=221)** We also explore and add specific Spring metrics or use any custom ones if we created them.
>
> **[3:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/metrics-in-spring?u=76281980&t=236)** We can also create alerts or even track traces.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), default. (1), case, (1), while. (1), this, (1)
> **Env Vars:** api (2), zip (1), uri (1), gvm (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Exercise Files:** download the (1), zip file (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** wavefront_freemium (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Definitions:** is called (1)


### 4. Tracing

#### Distributed tracing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=0)** - [Instructor] Another crucial ingredient for a successful observable system is to have an understanding of how events flow across the services, how requests take up, and how long those requests take.
>
> **[0:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=14)** Metrics like request context, since metrics are aggregated across requests, logging along cannot effect (indistinct) troubleshoot issues since it lacks distributed info.
>
> **[0:25](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=25)** So, metrics and logs by themselves fail to provide in depth visibility across all the services.
>
> **[0:33](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=33)** And this is where distributed tracing comes to the rescue.
>
> **[0:37](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=37)** Tracing is beneficial when you have a request which spans across multiple systems, a trace tells you how long a request took, which components it interacted with, and the latency introduced during each set.
>
> **[0:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=51)** This allows you to pinpoint where failures or performance issues are occurring in the system, and why.
>
> **[0:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=57)** Goal of the tracing is to capture.
>
> **[1:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=60)** Hierarchy, timing information, also some additional metadata like service name, request method name, or class name.
>
> **[1:10](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=70)** Once processing is done by any of the services it is going to report a span data to the tracing backend.
>
> **[1:18](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=78)** Which will be able to correlate back to the first span and create a trace data.
>
> **[1:24](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=84)** One example of tracing backend is Wavefront.
>
> **[1:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=87)** This is what it looks.
>
> **[1:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=89)** At the top, we have a service map that shows communication between services.
>
> **[1:35](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=95)** At the bottom, we see a critical path breakdown of the trace data, we see when each service was called and how much time it consumed, and whether or not the operation failed.
>
> **[1:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/distributed-tracing?u=76281980&t=107)** Additional three but such as service, operation name, text and duration are useful as the latest do additional filtering and trace (indistinct) help us search for relevant logs in the distributed logging solution.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Tracing in Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=0)** - [Instructor] Implementing distributed tracing sounds like a daunting challenge.
>
> **[0:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=4)** However, you will learn how easy it is to integrate tracing with your springboard applications.
>
> **[0:11](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=11)** Spring Cloud Project provides an excellent module called Spring Cloud Sleuth.
>
> **[0:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=17)** Spring Cloud Sleuth is a project well integrated with Spring Boot 2.x infrastructure, enabling distributed tracing with just a few bits of auto configuration.
>
> **[0:28](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=28)** The Sleuth starter brings in Spring Cloud Sleuth distributed tracing abstraction, which provides a simple facade over distributed tracing systems, such as Zipkin or Wavefront.
>
> **[0:42](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=42)** Sleuth configures everything you need to get started.
>
> **[0:46](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=46)** This includes where trace data spans are reported to, how many traces to keep sampling, if remote fields baggage are sent, and which libraries are traced.
>
> **[0:59](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=59)** There are a lot of properties you can configure.
>
> **[1:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=62)** One of the main things you want to configure is sampling probability and rate.
>
> **[1:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=67)** This is applied when using Zipkin as a backend.
>
> **[1:11](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=71)** Sampling is a way to prevent overloading the system by consistently tracing some, but not all, requests.
>
> **[1:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=79)** By default, the sampling rate is set to ten per second, which should be good enough representative set.
>
> **[1:26](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=86)** So don't get surprised if you don't see all requests being traced.
>
> **[1:30](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=90)** Other backends like Wavefront have different algorithms for sampling that can also be customized in Wavefront application directly.
>
> **[1:40](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=100)** Let's see what this looks like in Wavefront.
>
> **[1:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=103)** In the previous example, we already added both Wavefront and Spring Cloud Sleuth library, which is required to capture and export tracing data.
>
> **[1:52](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=112)** However, for this example, I'm using a beach shirt application from Wavefront demo.
>
> **[1:59](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=119)** Here, we have a couple of microservices that talk to each other.
>
> **[2:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=123)** I'm going to inspect the shopping service.
>
> **[2:07](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=127)** To explore traces, you can do that either here from the dashboard menu or just choose one of the longest web requests.
>
> **[2:15](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=135)** On the left side, we can filter and sort all traces.
>
> **[2:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=139)** Right now, we have selected the longest one.
>
> **[2:25](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=145)** We get this nice breakdown of which services were called and which ones spent most of the time.
>
> **[2:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=151)** If you click on each service, you can actually see some context data.
>
> **[2:36](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=156)** Wavefront also breaks down what the application looks like, what microservices were used in this request, and how they're interacted.
>
> **[2:46](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/tracing-in-spring?u=76281980&t=166)** This is what you can do with a simple dependency that we added to the project, and then Spring Boot configured everything.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1), default, (1), let (1)
> **Prerequisites:** configure (2), required to (1)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### How to correlate logging, metrics, and tracing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=0)** - [Instructor] Now that you have mastered logging, metrics and tracing, let's learn how you can correlate them to get most out of each.
>
> **[0:08](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=8)** Traditionally, we think of each of three pillars being completely separated.
>
> **[0:13](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=13)** Let's say there is a spike in errors in the metrics dashboard.
>
> **[0:17](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=17)** Lack of correlations puts huge burden on the developer to stitch everything together.
>
> **[0:23](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=23)** The logs are stored in a completely separate system and cannot be automatically associated with any metrics dashboard.
>
> **[0:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=31)** Distributed tracing if not sampled properly and without meaningful context data would make finding the right trace a nightmare.
>
> **[0:40](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=40)** Think about how much time and effort you put into gathering those logs through searching and filtering.
>
> **[0:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=47)** That is time spent gathering data, not time spent analyzing data.
>
> **[0:53](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=53)** Developers must use their minds to identify correlations in that data based on dashboard displays and log scanning.
>
> **[1:02](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=62)** This is intense mental effort.
>
> **[1:04](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=64)** How can we link this together?
>
> **[1:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=66)** For example, let's say that an API has a metric that measures the number of errors per minute.
>
> **[1:14](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=74)** Traditionally, we may think of metrics being completely separated from traces.
>
> **[1:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=79)** However, usually each metric is created for a specific transaction using a specific request.
>
> **[1:27](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=87)** For example, URL.
>
> **[1:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=89)** When an operator is alerted to sudden spike in errors, their first question will naturally be, what's causing that spike?
>
> **[1:37](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=97)** When metrics events occur for a given research, for example request URL, Java method call, a sample of these traces are automatically associated with the metric as trace candidates.
>
> **[1:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=111)** This means that there's no guessing or hunting for traces.
>
> **[1:56](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=116)** When we have traces, think of traces as extensions of logs.
>
> **[2:01](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=121)** With a proper traceid, gathering those logs is just one single lookup.
>
> **[2:06](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=126)** traceid allows your distributing logging tool to do this work for you automatically.
>
> **[2:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=132)** You find one log and you have all the logs intersection right there with no extra work.
>
> **[2:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=139)** It's the glue that holds everything together.
>
> **[2:22](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=142)** Correlations are often the key ingredients of generating root cause hypothesis, which can then be investigated further.
>
> **[2:31](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=151)** Here are some examples of correlations that may provide a key insight pointing to root cause.
>
> **[2:38](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=158)** Increased error rate is highly correlated with a service version.
>
> **[2:43](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=163)** Extreme latency is highly correlated with tomcat.node.
>
> **[2:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=167)** Traffic spike is highly correlated with username.
>
> **[2:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=171)** With the right data, relevant correlations can be detected more effectively by machines.
>
> **[2:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=177)** Developers cannot predict how their applications are going to behave ahead of time.
>
> **[3:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=183)** They will always have errors, but these errors can be false positives as they're not impacting end users and performance.
>
> **[3:12](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=192)** This is where AI can help us.
>
> **[3:15](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=195)** AI automatically detects processes and services and will observe their behavior.
>
> **[3:21](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=201)** Instead of raising an alert for every error or threshold reached, an alert is only raised when the expected behavior changes.
>
> **[3:30](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=210)** The AI is deciding what is an acceptable threshold and it'll tell you which alerts needs investigating.
>
> **[3:39](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=219)** Experiencing a massive reduction in wasted time is at the heart of what it means to practice modern observability.
>
> **[3:47](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/how-to-correlate-logging-metrics-and-tracing?u=76281980&t=227)** By shifting the cognitive burden onto machines, developers are able to effectively manage systems that have grown beyond what any human can possibly fit in their head.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1), node (1)
> **Code Keywords:** let (3)
> **Env Vars:** url (2), api (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have made it to the end.
>
> **[0:03](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=3)** You have learned how to effortlessly achieve observability in Spring Boot application.
>
> **[0:09](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=9)** With the unique advantages offered by each of three pillars, logging, metrics and tracing, you can achieve powerful observability.
>
> **[0:19](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=19)** If you want to know more about observability on AWS, please check my other course, Java: Serverless Applications on AWS.
>
> **[0:29](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=29)** For more advanced Spring users, I would highly recommend you check my other two courses, Advanced Spring: Integration Testing, and Spring Events.
>
> **[0:40](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=40)** If you have any questions, please feel free to get in touch over LinkedIn and on Twitter.
>
> **[0:46](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=46)** I really do appreciate your engagement, as well as your feedback on this course.
>
> **[0:51](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=51)** If you enjoyed this course, I'd love to know.
>
> **[0:53](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=53)** Thanks so much for watching, and I hope you enjoy this course.
>
> **[0:57](https://www.linkedin.com/learning/spring-boot-observability-deep-dive-into-logging-metrics-and-tracing/next-steps?u=76281980&t=57)** Until next time.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your Spring Development Skills]]
← [[Performance Tuning in Spring Apps]] | **3 of 6** | [[Advanced Spring- Spring Boot Actuator]] →

## Appears In

- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Spring Boot Actuator]] — Spring Boot
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Spring Boot
- [[Advanced Spring- Effective Integration Testing with Spring Boot]] — Spring Boot
- [[Spring 6- Spring Security]] — Spring Boot
