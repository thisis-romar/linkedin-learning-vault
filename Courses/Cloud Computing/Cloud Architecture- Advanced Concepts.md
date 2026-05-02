---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: cloud-architecture-advanced-concepts-25626673
url: "https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673"
duration_minutes: 150
duration: 2h 30m
level: Advanced
updated: 4/4/2025
learners: 1888
skills:
  - Cloud-Native Architecture
  - Solution Architecture
  - Cloud Computing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFJTeKRYDrjyw/learning-public-crop_675_1200/B4EZXYmBLyHcAc-/0/1743095600151?e=2147483647&amp;v=beta&amp;t=EyTl6UOdp3kORoxvfkb1fQTgEykEmrkemn-GxTc6puE"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Build an Enterprise Cloud Architecture]]'
prev_courses:
  - '[[Cloud Architecture- Design Decisions]]'
next_courses:
  - '[[Cloud Security Architecture for the Enterprise]]'
path_nav: '[{"path":"Build an Enterprise Cloud Architecture","position":2,"total":4,"prev":"Cloud Architecture- Design Decisions","next":"Cloud Security Architecture for the Enterprise"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-native-architecture
  - skill/solution-architecture
  - skill/cloud-computing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Architecture-%20Advanced%20Concepts.md)

![Cloud Architecture: Advanced Concepts](https://media.licdn.com/dms/image/v2/D4E0DAQFJTeKRYDrjyw/learning-public-crop_675_1200/B4EZXYmBLyHcAc-/0/1743095600151?e=2147483647&amp;v=beta&amp;t=EyTl6UOdp3kORoxvfkb1fQTgEykEmrkemn-GxTc6puE)

# Cloud Architecture: Advanced Concepts

> Join instructor Lee Atchison as he covers the business and tech-related basics of orchestrating and managing an effective cloud architecture. Learn about the various types of cloud platforms and architecture types, as well as how to determine which option will work best for you. Explore service and microservice architectures, data management tools, edge and serverless computing, AI, sustainability

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673) | 2h 30m | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Orchestrating your cloud architecture](#orchestrating-your-cloud-architecture)
  - [Course audience](#course-audience)
  - [Intricacies of cloud architecture](#intricacies-of-cloud-architecture)
- [**1. Cloud Types and Structures**](#1-cloud-types-and-structures) (3 videos)
  - [Public, private, and hybrid cloud](#public-private-and-hybrid-cloud)
  - [Multicloud and polycloud](#multicloud-and-polycloud)
  - [Selecting the right cloud type](#selecting-the-right-cloud-type)
- [**2. Microservices**](#2-microservices) (4 videos)
  - [Understanding microservices](#understanding-microservices)
  - [Why use microservices?](#why-use-microservices)
  - [Types of services](#types-of-services)
  - [Running microservices in the cloud](#running-microservices-in-the-cloud)
- [**3. Data and Data Management**](#3-data-and-data-management) (3 videos)
  - [Data storage in the cloud](#data-storage-in-the-cloud)
  - [Data across services](#data-across-services)
  - [Selecting the right data model](#selecting-the-right-data-model)
- [**4. Serverless Computing**](#4-serverless-computing) (3 videos)
  - [Advantages of serverless computing](#advantages-of-serverless-computing)
  - [Disadvantages of serverless computing](#disadvantages-of-serverless-computing)
  - [Serverless computing and your applications](#serverless-computing-and-your-applications)
- [**5. Cloud Security**](#5-cloud-security) (4 videos)
  - [Cloud vs. on-premises security](#cloud-vs-on-premises-security)
  - [Leveraging cloud provider expertise](#leveraging-cloud-provider-expertise)
  - [Security zones](#security-zones)
  - [Identity and permissions in the cloud](#identity-and-permissions-in-the-cloud)
- [**6. Constructing a Cloud Infrastructure**](#6-constructing-a-cloud-infrastructure) (3 videos)
  - [Dynamic infrastructures](#dynamic-infrastructures)
  - [Infrastructures brick by brick](#infrastructures-brick-by-brick)
  - [Infrastructure as code](#infrastructure-as-code)
- [**7. Managing the Cloud**](#7-managing-the-cloud) (3 videos)
  - [Single Team Oriented Service Architecture (STOSA) organizations](#single-team-oriented-service-architecture-stosa-organizations)
  - [Effective devops in the cloud](#effective-devops-in-the-cloud)
  - [Understanding automation](#understanding-automation)
- [**8. AI and the Cloud**](#8-ai-and-the-cloud) (6 videos)
  - [Foundations of AI in cloud computing](#foundations-of-ai-in-cloud-computing)
  - [AI integration patterns](#ai-integration-patterns)
  - [Resource and cost considerations](#resource-and-cost-considerations)
  - [AI-assisted cloud operations](#ai-assisted-cloud-operations)
  - [AI-assisted security and governance](#ai-assisted-security-and-governance)
  - [Why use the cloud for AI/ML?](#why-use-the-cloud-for-aiml)
- [**9. The Edge of the Cloud**](#9-the-edge-of-the-cloud) (2 videos)
  - [The Internet of Things](#the-internet-of-things)
  - [Extending the cloud to the edge](#extending-the-cloud-to-the-edge)
- [**10. Cloud Sustainability and Green Computing**](#10-cloud-sustainability-and-green-computing) (2 videos)
  - [The environmental cost of computing](#the-environmental-cost-of-computing)
  - [Why the cloud is greener than on-premises](#why-the-cloud-is-greener-than-on-premises)
- [**Conclusion**](#conclusion) (1 videos)
  - [Cloud Center of Excellence (CoE)](#cloud-center-of-excellence-coe)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Orchestrating your cloud architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=0)** - [Lee] Once a sideline for application development, the cloud is now mainstream in almost all modern applications, built and operated by most companies, certainly almost all software-enabled companies.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=13)** In this course, we will discuss the types and structure of cloud architecture, and how to choose which model works best for your application.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=22)** We will discuss the use of service-based architectures and how they work, and in fact, are enabled by cloud-based infrastructures.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=30)** Then we will talk about the newest addition to modern application architecture, and that is AI or artificial intelligence services, and how these services are a growing part of your cloud infrastructure architecture strategy.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=44)** Hi, I'm Lee Atchison, and I've been working in the cloud since the very start of cloud computing.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=49)** If you are ready to take your cloud expertise to the next level, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (6), application (2), [[Application Development]] (1), ai (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Speakers:** - [lee] (1)

#### Course audience
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/course-audience-25359344?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/course-audience-25359344?u=76281980&t=0)** - [Instructor] You should take this course if you are a software architect currently involved or contemplating a cloud project, a senior software developer or senior operations engineer that's interested in the architectural aspects of cloud computing or wanting to become a cloud architect, are a manager or a director of a team developing an application that will leverage the cloud.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/course-audience-25359344?u=76281980&t=25)** If you're not yet an architect, but are considering becoming an architect, I would recommend first taking my LinkedIn course, Software Architecture From Developer to Architect, before taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (4), application (1), [[LinkedIn]] (1), [[Software Architecture]] (1)
> **Speakers:** - [instructor] (1)

#### Intricacies of cloud architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=0)** - [Instructor] How do cloud architectures differ from non-cloud infrastructure architectures?
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=5)** Cloud architectures benefit from easy scaling.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=9)** With traditional architectures, adding capacity is often a complicated and expensive ordeal.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=16)** Cloud architectures, on the other hand, can scale more easily and predictably because they rely on pooled resources.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=24)** Resources are shared across multiple consumers.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=27)** When one person has a traffic spike, resources can be switched over to handle that additional traffic.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=34)** As demand goes up, more resources can be brought into play easily and quickly.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=41)** If you have a sudden spike in traffic, you can increase the number of resources available to your application to allow your application to handle the additional traffic.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=51)** Conversely, if there's a lull in traffic, you can reduce the number of resources allocated, freeing those resources to be used by other customers who might have their own traffic spikes.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=64)** This resource management is programmatic, and the resource management can be automated.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=71)** You can define your infrastructure in code and then deploy it via cloud APIs.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=77)** Cloud APIs enable faster resource allocation in general.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=82)** But even more importantly, cloud APIs enable the ability to build repeatable infrastructures.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=88)** Repeatable infrastructures are also resilient infrastructures.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=93)** You see, cloud architectures tend to be more resilient than traditional architectures.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=100)** This is because they are typically built using multiple virtual servers working in unison.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=106)** When one server fails, it can be quickly and automatically replaced with an exact duplicate, keeping the application functional.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=116)** Additionally, using multiple geographic cloud regions enables redundancy.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=121)** This means that your data will still be available even if a server or an entire data center goes offline.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=129)** One big concern most people have about the cloud is cost.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=134)** Isn't using all this automation and availability expensive?
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=139)** Well, many people say that cloud architectures are more expensive than non-cloud architectures.
>
> **[2:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=146)** Others, though, well, they actually say the opposite.
>
> **[2:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=150)** The truth is, a properly constructed cloud application will save money versus the cost of running the same application in a traditional data center.
>
> **[2:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=163)** There are a lot of reasons for this, reasons we will talk about throughout this course.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=168)** But basically, by taking advantage of cloud automation and repeatability, you can build systems that scale quickly and repair themselves easily.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=179)** This means fewer redundant resources are wasted.
>
> **[3:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=182)** The savings in wasted resources ultimately offsets the costs associated with the cloud.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=190)** But if you don't build your application to take advantage of those capabilities, then you end up paying for those additional resources anyway, and the cloud can end up being more expensive than an on-premise equivalent.
>
> **[3:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=205)** If you use the cloud exactly as you do your on-premise servers, you will lose money.
>
> **[3:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=211)** If you optimize your application, or said differently, if you build your application to be cloud-centric and effectively use the capabilities of the cloud, you'll save money.
>
> **[3:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=225)** Understanding the intricacies of cloud architecture is critical for modern application development.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=231)** Understanding when to leverage a unique cloud capability versus using generic infrastructure components, you know, such as simple servers, is a critical skill that the cloud architect of a modern application must understand.
>
> **[4:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=247)** When to leverage the cloud, how to leverage the cloud, and how much to leverage the cloud are critical architectural decisions for modern architects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (24), application (9), traffic (6), data (3), management (2)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Types and Structures

[↑ Back to Table of Contents](#table-of-contents)

#### Public, private, and hybrid cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=1)** Let's start with a foundational look at the difference between the different approaches to cloud computing, Private Datacenter, Public Cloud, Private Cloud, Hybrid Cloud.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=11)** How do these variations impact your ability to leverage cloud capabilities?
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=16)** Well, let's first start with talking about a basic Private Datacenter.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=20)** A basic Private Datacenter consists of standalone servers, standalone databases, and standalone networking, and networking configuration.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=31)** All the services implemented on these servers and databases, and any third party services used need to be set up, and run on these servers and databases.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=41)** In this model, you're pretty much responsible for almost everything.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=46)** All networking infrastructure, all server infrastructure, all physical infrastructure, power, networking, backup power, those sorts of things.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=56)** All database software and database maintenance, all third party application maintenance and all operational aspects of the system.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=66)** Everything in the application stack is essentially your responsibility.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=71)** Often the virtualization layers though don't even exist.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=74)** You run your application straight on top of the server's operating system, the base operating system, bare metal hardware.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=82)** Next, let's talk about the Public Cloud.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=85)** Now, the Public Cloud, you still have standalone servers, but most of the time these servers are virtual servers.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=92)** You have standalone databases, but often these databases are part of a managed service provider that's provided by the cloud provider.
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=101)** You have various levels of cloud services that are available to be consumed by your application.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=108)** These are things like caching, messaging, all the way up to AI, machine learning, and even business services such as email, and calendar management.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=117)** Many third party services are provided by the cloud provider.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=121)** In a public cloud setting, the issues that you are responsible for are very different than they are in your own Datacenter.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=126)** You are responsible for all server setup, and server configuration.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=131)** You are responsible for all data and data maintenance, but you're often assisted by the cloud providers.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=137)** The cloud providers can provide tooling, and such to be able to manage, and help you manage your data appropriately.
>
> **[2:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=143)** And of course, you are responsible for all application level management.
>
> **[2:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=147)** The cloud provider on the other hand, is responsible for you know, the fundamental base infrastructure, the base networking, the base server infrastructure.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=157)** They're responsible for the operation, and management of cloud services and tooling, and they're responsible for the operation, and management of all third party services.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=168)** The public cloud provider gives you the base infrastructure, and you provide the application specific infrastructure and tooling.
>
> **[2:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=175)** Finally, let's talk about the Private Cloud.
>
> **[2:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=178)** The Private Cloud provides the capabilities of the Public Cloud, but in a Private Datacenter setting, it makes sure all the virtualization layers are present for virtual computing, networking, et cetera.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=190)** All the software that runs in the Private Cloud is run on premise, and is of course your responsibility.
>
> **[3:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=196)** And as with a traditional Datacenter, you are basically responsible for all of the infrastructure.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=203)** Everything that takes to run the Private Cloud setting.
>
> **[3:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=206)** Software makes the services that are running in your Datacenter look cloud-like, and you get some benefits of the cloud.
>
> **[3:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=214)** For example, you get an API-based infrastructure configuration.
>
> **[3:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=219)** You can allocate virtual servers, store objects, send messages, et cetera, all from an API based system, allowing automatic configuration, and setup of infrastructure components.
>
> **[3:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=230)** And this can provide a consistent interface between the public and the private cloud.
>
> **[3:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=236)** But you also get some of the disadvantages of running on premise.
>
> **[4:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=240)** One of the big ones is resource constraints.
>
> **[4:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=243)** Your resources are tied to your resource availability, your own personal resource availability, the resources you have available in your private Datacenter.
>
> **[4:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=251)** In a public cloud setting, you get to leverage the volume of all the other customers in the public cloud setting.
>
> **[4:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=259)** So if you need a burst of resources for a short period of time, you can almost always get them because of the resources that are available, and are shared by a larger number of of people.
>
> **[4:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=270)** But in a private cloud, you don't get that.
>
> **[4:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=272)** You are limited by the number of resources that you own and have in your own Datacenter.
>
> **[4:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=276)** If you want to be able to burst access to a larger number of servers, you have to physically have those servers available to you installed, and set up by yourself in your own Datacenter.
>
> **[4:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=288)** So you don't get that advantage of the Public Cloud of the resource or stability.
>
> **[4:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=292)** And these resources have to be purchased, which means capitalized, not on demand borrowed.
>
> **[4:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=298)** And that basically means you can't use a cost of good sold model for allocating hardware costs like you can with a Public Cloud environment.
>
> **[5:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=307)** Well, why would anyone consider a Private Cloud?
>
> **[5:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=311)** Well, there's a few reasons.
>
> **[5:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=313)** First, they might like having API based infrastructure configuration that might be valuable to them for a variety of reasons having to do with the way they build and deploy their applications.
>
> **[5:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=325)** They're not allowed to use the Public Cloud.
>
> **[5:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=328)** This might be for security reasons or other corporate policy reasons or industry reasons.
>
> **[5:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=334)** We will spend a lot more time talking about these reasons later on.
>
> **[5:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=338)** They use both their own Datacenter, and the Public Cloud, and want a common set of tools to manage the infrastructure in both in environments.
>
> **[5:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=346)** This is the classic hybrid cloud model part of your application running into Public Cloud, part of your application running in your own Datacenter.
>
> **[5:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=354)** But this model is also used by customers who are migrating from the their own Datacenters to a Public Cloud.
>
> **[6:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=361)** They implement a Private Cloud in their own Datacenter in order to make the application look like it's running in the cloud, and that makes the final step of moving to the Public Cloud a lot easier step.
>
> **[6:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=372)** However, usually when you talk about hybrid cloud, you're talking more about steady state situations than this migration state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (36), application (9), [[Databases]] (5), management (4), [[Hybrid Cloud]] (3)
> **Prerequisites:** set up (2), setup (2)
> **Env Vars:** api (3)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** basically means (1)
> **Speakers:** - [instructor] (1)

#### Multicloud and polycloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=0)** - [Presenter] What about when you need more than one Cloud?
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=3)** This is where multicloud and polycloud come into play.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=7)** In this video, we'll look at the differences between a multicloud and a polycloud infrastructure.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=14)** Multicloud is when a single company system or application makes use of more than one Cloud provider.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=22)** For example, if you use the capabilities of both AWS and Google Cloud platform, GCP, for your application, you are using multicloud.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=33)** Additional Cloud providers can also be added in, resulting in several Cloud providers being used at once.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=41)** A given application or system can use multiple public Cloud providers or their own data centers as a private Cloud.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=49)** All of this can lead to a complex interaction of Cloud capabilities.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=56)** A generic multicloud is when your application makes use of multiple Cloud providers.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=62)** Some of your application runs on servers in AWS and some of your application runs on servers in GCP and/or Azure.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=71)** Some of your application runs in your own data center.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=74)** This situation can often happen accidentally, haphazardly.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=80)** Different groups within a company will make different decisions on using different Cloud providers.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=86)** Different customers have different requirements making it necessary for your application to run on multiple Cloud providers, and different product needs over time causes different decisions to be made at different times, resulting in a complex interaction between multiple providers.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=105)** But sometimes multicloud happens by plan.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=110)** For example, if a business is concerned about the reliability of putting their entire application in the hands of a single Cloud provider, they could set up two providers to add a level of redundancy.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=123)** You may actually enter into contractual agreements with multiple Cloud providers, so that you can leverage each other to try and get the best pricing and best services possible from each provider.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=137)** Two sources of a service are often better than one.
>
> **[2:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=143)** But more often than not, multicloud happens because you need the specialized capabilities of different Cloud providers.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=153)** You may want your main application running on AWS because they provide great general purpose computing, yet you have some Microsoft Windows workloads, so you decide you want to run those workloads on the Microsoft Azure Cloud.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=170)** But you also might be in need of specialized services that are only available through Google, perhaps a specific AI service or a geolocation service using Google's massive business database.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=184)** So you run the parts of your application that need those specialized capabilities in GCP.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=192)** This type of multicloud where you run different parts of your workload on different cloud platforms in order to take advantage of unique capabilities of each specific platform is called polycloud.
>
> **[3:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=207)** Polycloud is growing into the most popular form of multicloud.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=212)** Most of the time when I talk to customers, when they are interested in talking about or using multicloud, what they're really talking about specifically is polycloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (15), application (11), aws (3), gcp (3), data (2)
> **Env Vars:** aws (3), gcp (3)
> **CLI Commands:** aws (3), make (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Selecting the right cloud type
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=0)** - [Speaker] It's important to understand which major architecture, cloud provider, and number of providers make sense for your applications.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=9)** In this video, you'll learn how to identify what is best for your unique scenario.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=16)** There is a lot of fact and fiction that goes into selecting the right type of cloud architecture for your application and which cloud providers you should utilize for your application.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=29)** Should you run on a private cloud in your own data center?
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=33)** Should I run entirely in a public cloud or should I use a hybrid cloud environment?
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=40)** Should I utilize one or more than one public cloud provider?
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=46)** Is multi-cloud important to me and should I use more of a polycloud environment where I leverage the unique capabilities of each cloud provider?
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=56)** Multicloud without polycloud advantages rarely makes sense unless you are required to use it for some company policy or external customer requirements reasons.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=71)** As a generic model, it rarely makes sense.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=75)** This is because the main motivation, aside from a policy or customer requirement reason for moving to multicloud has to do with trusting a single provider.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=87)** It's often believed that using multiple cloud providers gives you more advantages, higher availability, better vendor control, better pricing, et cetera.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=98)** But rarely, rarely do these advantages actually play out, yet the disadvantages of having to run on multiple cloud providers add real overhead to your application.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=111)** What are the disadvantages?
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=114)** Well, there's two primary disadvantages.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=117)** First, learning curves.
>
> **[1:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=119)** The two providers will undoubtedly have different services with different APIs and different operating characteristics for those APIs.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=130)** By running in both, you need expertise in both, and second is cost.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=137)** You might consider that using two cloud providers in order to leverage those capabilities that you can get the cheapest from each provider.
>
> **[2:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=145)** That might be a reason why you're doing it.
>
> **[2:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=148)** In fact, you may think you can negotiate better rates with one provider by using the threat of another provider to move your workload over to you.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=157)** These types of negotiations rarely work with cloud vendors because commodity pricing means you are typically already getting the cheapest price you can get for a given provider.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=170)** The best thing you can do to lower your per resource pricing is to use more of a single provider.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=179)** You see, providers give you cost breaks based on the amount of their resources that you are consuming.
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=186)** The more of a provider you are using, the better price you'll get from that provider.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=192)** Splitting your workload across multiple providers decreases your usage of each provider.
>
> **[3:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=198)** This increases your cost per resource and hence, your total cost goes up.
>
> **[3:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=204)** Additionally, data transfer between providers is not free, and in some cases, it can be very, very expensive, depending on your application.
>
> **[3:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=214)** These costs can dwarf all of your other cloud costs, making the use of two providers more expensive than using a single provider.
>
> **[3:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=225)** Yet, these disadvantages aside, non-polycloud, multi-cloud is still growing in popularity.
>
> **[3:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=234)** In fact, there is a new model that I'm starting to hear more about that is trying to address the learning curves and API differences between multiple cloud providers in a generic multicloud application, and that's called sky computing.
>
> **[4:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=250)** Sky computing is the attempt to put a generic API layer on top of multiple cloud providers and using the generic API for all cloud interactions.
>
> **[4:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=264)** It's trying to genericize the cloud.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=269)** This is not the first attempt to do this, early in the cloud history, a focus on an open cloud API tried to do this with very, very limited success.
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=281)** In my mind, sky computing is trying to solve the wrong set of problems.
>
> **[4:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=285)** It's trying to make multiple cloud providers look the same, so your application can run generically across them all, but it's not addressing any of the reasons why you might want to do that.
>
> **[4:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=298)** It's not solving the learning curve problem because you still have to maintain multiple knowledge bases for each of the different cloud providers that you are actually using, and it also doesn't solve the financial aspect of multicloud computing.
>
> **[5:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=312)** In fact, sky computing removes one of the major advantages of multicloud, and that is the ability to differentiate your workloads based on capabilities of each individual cloud provider.
>
> **[5:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=327)** Sky Computing forces you to think of the cloud providers as generic providers and discourages you from utilizing provider-specific capabilities and hence, provider-specific advantages.
>
> **[5:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=345)** Meanwhile, polycloud tries to do the exact opposite of all of this.
>
> **[5:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=351)** It focuses on the unique capabilities of each cloud provider in order to leverage the unique capabilities of each cloud provider.
>
> **[6:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=360)** So when using multicloud, which is better, Sky Computing or Polycloud?
>
> **[6:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=367)** You've probably guessed my answer from this discussion.
>
> **[6:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=371)** In my mind, the answer is clear.
>
> **[6:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=374)** Polycloud provides you real advantages of using a multicloud environment while Sky Computing tries to sugarcoat away some of the problems and doesn't really address any real concerns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (26), application (6), generic (5), api (4), data (2)
> **Env Vars:** api (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [speaker] (1)


### 2. Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=0)** - [Instructor] Understanding microservices.
>
> **[0:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=2)** Modern applications require modern architectures to thrive and prosper.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=8)** In a traditional model, monolithic applications are one large piece of code for all of an application and all of the responsibilities that, that application has to have.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=19)** All development teams that are responsible for this application are working on this one application, usually in one code base and one set of resources, one set of capabilities.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=30)** All teams work together on that one application.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=33)** But a modern application uses a service architecture, divides code by business logic.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=39)** Each service has its own data, its own business logic, and ultimately its own set of responsibilities.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=47)** One team owns each service and no more than one team per service, so each service ends up with one unique team that owns it.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=56)** A team can own multiple services, but each service is owned by one team and each service operates independently.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=64)** It can be independently built, tested, deployed, operated from all the other services in the application.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=74)** This allows a great level of scalability in your application construction by dividing responsibility in the smaller segments, so each team can work as independently as possible on the entire application as a whole.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=87)** Communication between services creates a network that builds larger applications and larger services.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=93)** This is the typical model of a service or a microservice-based architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), teams (2), business (2), [[Microservices]] (1), data (1)
> **Speakers:** - [instructor] (1)

#### Why use microservices?
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=0)** - [Instructor] So why should you use a service or microservice-based architecture?
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=4)** Well, in a traditional monolithic application, all developers share the same development space.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=10)** This limits scalability on many aspects.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=13)** It limits the number of developers who can work in this single application, it limits the number of concurrent projects and activities that can go on.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=21)** If you have a limited number of developers, there's a limited number of projects they can be working on.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=26)** It can be very difficult to deploy an application that's very large with a large number of people working in different projects in it.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=34)** So, you're limited by the number of deployments you can put out, and you are limited by the number and the size of instances it takes to run the application, which ultimately limits the number of users and data size and things like that.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=47)** This makes the monolithic application hard to manage and hard to control and hard to use in the modern world.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=56)** Service architectures, on the other hand, divide the business logic requirements into different services.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=62)** Each service takes on a different part of the business logic requirements and the team's own individual services.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=68)** This means that different teams can be working on different projects or have different focuses, and they can each work productively, independent from each other.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=77)** This allows your teams to scale so you can have more people working in the application, working in more projects within the application.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=85)** It gives you a team focus, and that team focus allows you to have a localized view of the world, a localized view of the complexity of the application, allowing you to focus and do more within that one area of influence.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=99)** Further, the service architecture allows more localized testing, and so you can test individual services and have a better feeling that then it will work fine within a larger application environment.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=112)** And each service can be deployed independently, making it easier to deploy individual components and allowing you to deploy more often, a smaller amount of changes each time, limiting the blast radius, if you will, of the change.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=127)** This makes your deployments more reliable and safer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), business (2), teams (2), [[Scalability]] (1), concurrent (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Types of services
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=0)** - [Announcer] The word "service" is overused.
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=3)** This is because there are many types of services.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=6)** Here are some that are important.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=7)** An application service, it's a custom built component that provides an interface that performs some specific business logic.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=15)** In a best practice that is a completely self-contained module, and it makes use of API calls to communicate between services.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=25)** Traditionally, some services can be small and some can be quite large.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=30)** Microservice is a special case of an application service that is very common in modern application architectures.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=37)** A microservice is designed to be small enough for a single person to be able to understand how the service works completely.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=47)** A single team can manage all aspects of the service.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=51)** A cloud service is an offering of a cloud provider or a third party that provides a specific capability to application developers.
>
> **[1:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=60)** Often these capabilities could have been built as an application service by a single customer, but now are generic enough that a cloud provider creates the service and makes it available to a larger number of customers.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=74)** To some example of cloud services include Amazon S3, Amazon RDS, which is a a MySQL or Postgres database, Amazon Elastic Beanstalk, Amazon Simple Queue Service and AWS ElastiCache.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=89)** ElastiCache happens to be a service that implements an open source version of the rightest database.
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=95)** Examples of a third party service are another version of Redis called Redis Enterprise that is provided on AWS, but by a third party, in this case, Redis Incorporated.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=106)** So a cloud service can be provided by the cloud provider or by a third party.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=111)** Typically, when you talk about the services provided by the cloud, you are either referring to cloud services provided directly by the specific cloud provider or by a third party providing additional cloud services on top of the cloud provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (11), application (5), [[Redis]] (3), database (2), aws (2)
> **Env Vars:** aws (2), api (1), rds (1)
> **CLI Commands:** aws (2), mysql (1)
> **Definitions:** is a  (2), is an  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [announcer] (1)

#### Running microservices in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=0)** - [Instructor] We will focus on application services for the rest of the videos in this section, specifically on microservice architectures.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=8)** Microservice architectures benefit from team ownership and management.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=12)** A single team owns a microservice, and manages all aspects of that service, including both the creation of the service and operation of that service.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=22)** Operation of microservice architectures benefits from cloud technologies.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=26)** The resource allocation model in the cloud greatly supports team-level resource owning.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=32)** This is because teams can allocate and free their own resources based on their own requirements.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=37)** They need a server, they can get a server.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=39)** They don't have to go through a complex IT-driven process of getting a server allocated to them.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=44)** They can just create one in the cloud for their own purposes.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=48)** Teams can use the underlying cloud infrastructure as a kind of base and do not have to build expertise in those areas.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=56)** They don't have to worry about things like power and physical plan, networking, server management, and similar low level requirements.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=64)** The cloud does all of those things for them.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=67)** And teams talk to the cloud provider the same way their application services talk to other application services, by using APIs.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=76)** This is a language that developers understand and can appreciate.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=81)** The cloud simply becomes an extension of their microservice architecture, supporting the architecture, and extending the architecture when it's needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (6), application (3), teams (3), management (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Data and Data Management

[↑ Back to Table of Contents](#table-of-contents)

#### Data storage in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=0)** - [Instructor] Data is the most important asset that you store in the cloud.
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=4)** Data comes in all sorts of shapes and sizes.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=8)** It comes as text or document data.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=10)** It can come as columnar or tabular data.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=14)** And it can come as structured data.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=16)** And there are many different types of patterns you use to access that data.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=20)** You can access data file by file, file segment by file segment, or you can do get and set to read and write attribute-based key-value data.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=30)** You can do row by row and tabular data.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=34)** And you can use complex structured queries to get at data in all ways.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=39)** Different types of data require different storage techniques.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=43)** Different access patterns require different database technologies.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=47)** The result of all this is a large variation in the types of data management services that are available for you in the cloud.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=56)** Let's look at the major ones.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=58)** First there's object storage.
>
> **[1:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=60)** A simple example of object storage is Amazon AWS S3.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=65)** It stores huge quantities of data, typically accessed an object or a file at a time.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=71)** It's highly scalable access patterns.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=74)** It's highly scalable storage capacity.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=77)** And it's relatively inexpensive for giant datasets.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=80)** And in fact, it's virtually free for small datasets.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=84)** Highly reliable, high availability, and extremely high durability.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=90)** The second data type is unstructured NoSQL databases.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=94)** These are key-value data stores, such as Redis or MongoDB.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=98)** This stores typically smaller amounts of data, and the individual data value is accessed in random access ways using simple procedural calls.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=108)** It's characterized by highly scalable access patterns but a moderate quantity of storage.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=114)** It's quicker and easier to access individual data values within the dataset.
>
> **[1:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=119)** It has an easy ability to replicate and scale horizontally.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=123)** And sometimes you can do trade-offs of durability versus speed by making the database a memory-based database, for instance, or vice versa.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=131)** The third is structured databases.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=134)** These are used to store large quantities of structured data.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=137)** They're characterized by highly scalable access patterns, a high quantity of storage, but typically, less than S3, structured access to the data, and high performance when the schema is planned around the query optimizations.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=152)** They typically require understanding how you're going to access the data, what access patterns you're going to use, before you store the data in order to create a scalable schema for that's high-performant to access to the data.
>
> **[2:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=167)** Failure to create a quality schema can result in extremely poor performance.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=172)** Structured data can be further broken down into SQL and NoSQL structured databases.
>
> **[2:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=178)** Structured SQL databases tend to be more flexible, while structured NoSQL databases tend to be more scalable.
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=187)** The schema determines the performance for structured SQL, while the schema tends to determine the API, and therefore, what types of operations are even allowed, for structured NoSQL.
>
> **[3:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=200)** Examples of structured SQL are MySQL, Postgres, and the cloud-based Amazon Aurora database.
>
> **[3:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=209)** Examples of NoSQL are Amazon's DynamoDB.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=212)** SQL databases tend to be flexible in their ability to access data, while DynamoDB is rigid, and what you can reasonably do is dictated by what the schema is and how the indices are set up.
>
> **[3:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=225)** Going against an indices design in MySQL is a performance hit, but doing so in DynamoDB may make a query completely untenable.
>
> **[3:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=234)** This means SQL databases are more tolerant to poor schema designs than data stores such as DynamoDB.
>
> **[4:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=241)** On the other hand, designed correctly, DynamoDB provides big scaling advantages over databases such as MySQL.
>
> **[4:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=249)** MySQL certainly can handle large quantities of data, but DynamoDB scales up in performance much faster and much more conveniently than an SQL database can scale.
>
> **[4:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=260)** How you want to use your data determines how you structure your data and what services you use to store and access your data.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=269)** And that's the topic of the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (30), [[Databases]] (8), [[SQL]] (7), database (5), [[NoSQL]] (5)
> **Env Vars:** sql (7), aws (1), api (1)
> **CLI Commands:** mysql (4), aws (1), make (1)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (2)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Data across services
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=0)** - [Instructor] We've been talking about application data, but most modern application architectures involve using multiple services working together to make an application as a whole.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=10)** Modern applications require modern architectures in order to thrive and prosper.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=15)** We talked about this in the previous chapter.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=17)** One question does come up though, When you're creating your overall product cloud architecture, where should you put the data?
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=26)** There are two common models for where to store data in a service-based architecture.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=32)** The first is the global model.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=34)** In this model, your data is global to the application, and each service that needs access to a particular piece of data can access the data it needs from the shared data store.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=45)** Most data is stored in a single type of data store, but you might use more than one type for different types of data, such as putting most of your data in an SQL database.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=55)** But videos and something like S3, you can still do that.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=59)** But all the data is available to all the parts of the application.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=63)** There are a couple problems with the global model.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=66)** One problem is schema management.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=69)** Any schema change has to be understood immediately by multiple services, and those services may require simultaneous and sometimes synchronous deployments in order to make that happen.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=81)** This limits the usefulness of some types of databases.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=85)** In particular, SQL databases may have a problem with resource requirements when you have multiple entities accessing the data simultaneously.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=94)** This makes scaling the application even harder and tied closer to difficult database scaling plans.
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=101)** A better model is to use the service model.
>
> **[1:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=104)** In the service model, all data is owned and accessible by only one service.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=110)** Data is split across many services.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=112)** You may need to access multiple services in order to get all of the data you need to perform some task.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=118)** Data should be owned by the service that is responsible for managing that data.
>
> **[2:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=124)** And anyone who wants to use that data needs to send a request to the owning service in order to get the data that it needs.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=131)** Individual services can decide what storage model makes sense for the data they manage, whether it's DynamoDB, Postgres, Redis, S3, whatever, varies service by service and the service itself decides when and how schema changes occur and that one service is solely responsible for doing those schema changes.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=154)** The advantages of this model is it enables better scaling options than the global model.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=160)** Each service can scale their data needs as makes sense based on the access patterns that's required for their data.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=168)** And schema management isn't limited to the owning service.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=171)** Inner service API management is used to change the shape of the data that is communicated between services, but this does not require simultaneous schema changes.
>
> **[3:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=182)** So given all of this, my recommendation in almost all cases, modern cloud applications should use the service model for data ownership rather than the global model.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=193)** In almost no cases does the global model make sense.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=197)** What about downloadable videos, photographs stored in S3 that might be used by multiple services?
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=203)** Well, the videos and photographs should be owned by an asset management service, and I'll request to use that downloadable asset should be sent to that shared service and processed and handled by that single service.
>
> **[3:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=215)** What about other shared data like log files or profile information?
>
> **[3:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=219)** In almost all cases, it makes sense to encapsulate the data in a service, and that service is part of a infrastructure or platform layer to your application that is leveraged by all of the other services that require that data.
>
> **[3:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=234)** This leaves schema management, performance management, scaling, et cetera, to be owned by the encapsulating service, which limits the impact and the scope of those changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (28), application (7), management (6), cloud (2), [[SQL]] (2)
> **CLI Commands:** make (3)
> **Env Vars:** sql (2), api (1)
> **Cross-References:** we talked about (1), previous chapter (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Selecting the right data model
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=0)** - [Instructor] Which data store do you use for a particular purpose?
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=3)** Well, that depends on your data, the format, and how you intend to use it.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=8)** In most cloud providers, there are services that manage each of these types of data.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=12)** Let's look at some data use cases, specific examples, and what cloud services might make sense for that type of data.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=20)** First, let's look at an example of an application that uses large video assets.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=26)** This needs storage of large giant files and it needs to store them inexpensively, but you also need the ability to access the entire content rapidly for streaming purposes.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=38)** And reading the content requires higher performance than writing.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=43)** Reading is higher performance than writing.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=46)** This is perfect for an object store such as Amazon S3.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=50)** Now let's look at another example.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=52)** In this case, let's use user profile information, user profile information used in many different applications.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=59)** Well, for this, you need structured storage for general types of information, names, addresses, phone numbers, all that sort of profile information.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=67)** And this is perfect for a key value store.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=70)** Persistence is important.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=71)** This is information you want to keep for long periods of time, but rapid reading is important, but so is writing and updating, but probably at a slower rate.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=82)** This is perfect for a key value store such as Redis or AWS ElastiCache, which can persist data permanently and act like a real permanent database.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=93)** But rapid reading on some of the data may suggest you might also want to use a a memory-based data cache in the front end, and Redis can work for this as well, or something like Memcached might also work.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=105)** The next example, let's look at log files.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=108)** Log files are generated by multiple sources within the application and the infrastructure.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=113)** They require rapid writing.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=115)** Lots of lines of logs get written very, very quickly, but the writing of the logs requires you to have virtually no impact on the performance of the writer.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=126)** The services that are writing the log files should not feel the impact of having to do the writes of the logs.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=132)** So, large quantities of data, written very, very quickly with very little impact, and this data needs to be stored for long periods of time.
>
> **[2:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=141)** Then later, you'll analyze the data using AI or machine learning or other techniques, and this analysis that occurs later can occur at different speeds and different purposes.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=153)** It's offline processing, typically.
>
> **[2:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=156)** Flat files work just fine for this sort of model, and in long-term these can be stored in Amazon S3.
>
> **[2:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=164)** But so does a structured table from a NoSQL data store like DynamoDB.
>
> **[2:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=169)** That also works for storing log files.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=172)** Okay, let's look at an ecommerce site, now, that generates orders.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=176)** How do you store the order details, the results of the order?
>
> **[3:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=180)** Well, this generally requires random access, read/write, of course, at scale, lots of coordinated data, highly related data, relational data, and it might also require asset compliance.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=193)** Asset compliance is transactional data.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=197)** These are requests that you only complete if the entire request can be completed, all or nothing.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=203)** These are important for financial transactions.
>
> **[3:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=205)** You don't want to process the order unless the payment goes through, and you don't want to send a payment through if you can't process the order, that that sort of thing.
>
> **[3:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=213)** For this structured SQL databases may be in order.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=216)** They're very good at doing asset compliance, very good at related data, relational data, so databases like MySQL, Postgres, et cetera, and in the cloud, RDS and Aurora are great examples.
>
> **[3:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=227)** For the next example, let's look at photographs, an application that stores and processes or stores and displays, photographs.
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=235)** This has the same set of concerns as large video assets.
>
> **[3:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=239)** The files are of different size, but there may be more of them, and so you still need storage for large quantities of data inexpensively, and you need to be able to access the entire content rapidly for reading at scale.
>
> **[4:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=253)** Again, this is perfect for an object store such as Amazon S3.
>
> **[4:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=257)** But let's expand this example and talk about also wanting to store metadata for the photographs.
>
> **[4:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=264)** Well, in this case, the metadata probably is stored separately from the photographs because that data is structured data, and you probably store that in a related relational database.
>
> **[4:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=274)** Or you might use a structured data key value store like Redis.
>
> **[4:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=279)** But again, it needs to be something that's persistent and it's not large quantities of data like the photos themselves, but the data you do keep, you want to be able to get access to in the random access fashion very quickly.
>
> **[4:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=294)** This is perfect for a Redis-type structure key value store, or for a SQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (24), [[Redis]] (4), cloud (3), application (3), database (3)
> **Env Vars:** sql (2), aws (1), rds (1)
> **CLI Commands:** make (1), aws (1), mysql (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)


### 4. Serverless Computing

[↑ Back to Table of Contents](#table-of-contents)

#### Advantages of serverless computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=0)** - [Instructor] One of the major advents of the cloud was the ability to request infrastructure resources on demand.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=6)** Initially for computation, this meant requesting the allocation of a computer for your use, then freeing up that computer when it was no longer needed.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=16)** What software did that computer run?
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=18)** Whatever you wanted it to, for as long as you needed it.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=22)** But why allocate computation resources a server at a time?
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=26)** Why not at smaller scales?
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=29)** What about a process at a time or even a procedure at a time?
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=33)** This is where serverless computing comes to play.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=35)** Serverless computing is allocating computation resources when needed at the process or procedure level without needing to allocate full servers.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=46)** Let's look at some examples.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=48)** When you want to run an application in the cloud, you historically had to allocate an entire computer, set up the software on the computer, including the operating system, then run as many copies of your software as would fit on that server.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=61)** When you needed to add more software instances, you added more computers.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=67)** In serverless, however, when you want to run an instance of a piece of software, you simply request an instance of that software to be run.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=76)** The software, in any quantity, is run, and there's no need to manage the underlying server infrastructure.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=82)** The infrastructure is run by your cloud provider.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=86)** Software in a serverless environment can be launched a process or a thread at a time, and then you control how many instances you want running, or it can be launched procedure by procedure by using an event to trigger the execution of a given procedure.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=100)** In AWS, there is Lambda.
>
> **[1:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=103)** In Azure, there are Azure functions.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=106)** In Google, there are cloud functions.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=108)** There are differences, and they're not compatible with each other, but they all act and run very similarly.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=116)** What are the advantages of serverless?
>
> **[1:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=119)** Well, there's no need to manage operating systems, operating system software, and other pieces of the infrastructure.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=126)** You are operating higher up the stack, which means, overall, less management is necessary.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=132)** You can provide more granular resource allocation, which typically means less wasted resources, is more focused on the Application Layer and less focused on the underlying infrastructure that's running it.
>
> **[2:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=146)** Presumably, this all means your operations load is simpler and easier.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=152)** Now, let's take a step back for a second.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=154)** Let's talk about the difference between serverless and serverless computing.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=160)** They really aren't the same thing.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=162)** We've been talking about serverless computing, and when most people say serverless, they typically mean serverless computing.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=170)** They talk about services such as AWS Lambda, but there actually are other types of serverless.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=176)** The term serverless applies to any type of cloud resource that can be allocated without needing to worry about the underlying server infrastructure needed to implement it.
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=187)** For example, S3 is a serverless file storage.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=191)** When you use S3, you allocate buckets, files, or objects.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=197)** You don't allocate servers that store files.
>
> **[3:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=201)** SQS is a queuing service.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=203)** You allocate queues and you create messages, not servers that store queues and messages.
>
> **[3:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=209)** Probably the best way to think about this is look at two service comparisons here.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=216)** Let's look at two database services, namely Amazon RDS and Amazon DynamoDB.
>
> **[3:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=223)** These are two database services that operate very differently.
>
> **[3:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=226)** DynamoDB, you allocate tables and rows, you allocate indices.
>
> **[3:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=233)** These are all database concepts.
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=235)** You never consider the underlying servers that operate the database.
>
> **[3:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=239)** You don't say, I need a server of x size to hold this database.
>
> **[4:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=243)** That's all hidden from you.
>
> **[4:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=244)** This is a serverless database.
>
> **[4:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=246)** RDS, on the other hand, is a database where you allocate the servers.
>
> **[4:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=250)** You pick a size of the server by specifying computation capabilities, network capabilities, and memory requirements.
>
> **[4:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=257)** This is a server-based database.
>
> **[4:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=261)** You don't allocate an RDS server based on the number of tables you want to use.
>
> **[4:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=264)** You allocate it based on the amount of memory you want to have in a server that runs the database.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=269)** So DynamoDB is a serverless database, while RDS is a server-based database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), cloud (5), [[Serverless Computing]] (5), application (2), aws (2)
> **Env Vars:** rds (4), aws (2), sqs (1)
> **Definitions:** is a  (7)
> **CLI Commands:** aws (2)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Disadvantages of serverless computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=0)** - [Instructor] Let's stay focused on serverless computing for now.
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=3)** In the previous video, we talked about the advantages of serverless computing.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=8)** Well, serverless computing also has disadvantages as well.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=12)** Serverless computing tends to create more complex applications as there tend to be more moving parts.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=19)** Serverless technologies such as Lambda drive the size and shape of the service that makes up the application rather than the application architecture driving the size and shape of the services.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=32)** This tends to drive the application services to be smaller and smaller overall.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=38)** Smaller services means more services for a given application.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=43)** More services means more complex application architectures.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=47)** Serverless applications tend to be more complex.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=51)** Another disadvantage of serverless is serverless tends to have variable performance capabilities.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=58)** Most servers, even most virtual servers, give a reliable and predictable performance curve.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=65)** This allows you to build applications that have relatively predictable performance and gives you easy tools within your control to improve performance.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=75)** Serverless computation, on the other hand, such as AWS Lambda, do not give you that level of predictability and performance.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=82)** One procedure, which takes 10 milliseconds to execute one time may take 15 milliseconds another time.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=88)** Worse, it could take 500 milliseconds every once in a while, but why is it that there's that much of a variation?
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=95)** It has to do with how serverless is constructed.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=98)** The underlying infrastructure needs to load the underlying procedures the first time they are used, but once they're warmed up, they can execute in the future much faster.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=109)** Given that an application might have tens or hundreds of instances that are operating on its behalf, every once in a while a new instance needs to be warmed up, depending dramatically on how the usage profile works.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=122)** The result, unpredictable performance curves.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=126)** So serverless computation can be extremely unpredictable.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=129)** This makes building predictable performance applications problematic.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=134)** Additionally, serverless can be expensive.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=137)** Serverless is actually pretty inexpensive when used correctly, but when overused, the cost premium of serverless can become significant and your computation cost for a given task can easily run out of control.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=152)** This leads to the greatest point I want to make.
>
> **[2:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=155)** Serverless is just a tool.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=158)** Like all tools, it has a use and it's very good at that use.
>
> **[2:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=163)** Also, like all tools, if used for the wrong task, it doesn't work well at all.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=168)** In fact, it can even fail for some tasks.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=171)** Serverless is great for some tasks and it isn't great for other tasks.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=176)** Many times I've had people come up to me all proud with themselves and say, we managed to build our latest application and we used nothing but serverless functions.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=184)** Isn't that great? Well, no, it isn't great.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=188)** It means you bought one tool and used it for everything, whether it was a right tool or not.
>
> **[3:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=194)** Don't be proud of force fitting a tool to solve all problems.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=197)** Instead, use it for the parts of the problem where it makes sense.
>
> **[3:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=201)** Use other options, including traditional computer instances where they make sense.
>
> **[3:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=207)** I'd rather hear people come up and tell me we managed to build our latest application and we used modern development and operation techniques, including serverless and other cloud technologies.
>
> **[3:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=218)** Our application is efficient, performant, low on technical debt, and easy to manage.
>
> **[3:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=223)** I'd much rather hear that comment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), [[Serverless Computing]] (4), aws (1), cloud (1)
> **CLI Commands:** make (2), aws (1)
> **Cross-References:** previous video (1), we talked about (1)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Serverless computing and your applications
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=0)** - [Narrator] So this discussion begs the question, when should you use serverless?
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=4)** Let's start with this.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=6)** What about using it for simple tasks that occur in an event architecture with asynchronous results?
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=12)** Things like analyzing generated log files, looking for trends or problems, processing imported photographs to change the size, shape, resolution, and make them available for use in different use cases, inbound data from IFT devices that needs to be processed and stored, typically asynchronously.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=31)** Serverless is very, very, very good for these sorts of actions, but for high performance synchronous activity, don't use serverless.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=39)** As the complexity of tasks increase and the level of synchronization required increases, serverless becomes less and less viable.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=47)** Cases where consistent performance is important, like real time tasks, image recognition, and self-driving car, for example.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=54)** It's not good for this sort of a use case.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=56)** When performing tasks that require heavy computation, data processing, real time or not, serverless works for this, but it often is not cost effective to use serverless computation.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=69)** What about the front end of a website?
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=71)** This involves processing page loads for a webpage.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=74)** Well, this one's a tough one.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=76)** It depends on the website and customer expectations.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=79)** Can you handle variable performance?
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=82)** Do you have predictable demand?
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=84)** Are variations planned and predictable, or are variations unpredictable?
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=89)** If using servers, can you scale up servers to handle increased demand?
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=94)** Are the computation requirements heavy?
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=96)** Is cost a concern?
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=97)** Depending on the answers to these questions, serverless may or may not make sense over a more traditional, server-based web front end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), web (1)
> **CLI Commands:** make (2)
> **Env Vars:** ift (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. Cloud Security

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud vs. on-premises security
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=0)** - [Instructor] The biggest cloud myth I hear from customers is, "I can't use the cloud for security reasons."
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=6)** This is a strongly held view in certain industries and even in certain parts of the world.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=11)** Certain industries, such as private banking, and in certain parts of the world, such as in parts of Europe, including Switzerland, the cloud has reduced penetration into those markets and those locales in strong part due to concerns about security.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=27)** Some of the most common reasons I hear for why a company can't move to the cloud have to do with security.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=34)** "Our data is too sensitive to put into the cloud."
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=38)** "We can only trust servers that are in our data centers."
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=41)** "We can't trust someone else with the security of our systems."
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=45)** As the cloud has matured and our use of the cloud matured along with it, many of these concerns have gone away.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=53)** But in conservative industries, in conservative parts of the world, they're still very prevalent.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=58)** And even still, individual companies, less progressive companies, still fight this battle internally.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=65)** In reality, a cloud-based system often provides a more secure environment than an equivalent on-premise solution.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=74)** Well, how can that be?
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=76)** To start, it's in the cloud provider's best interest to make sure their cloud offerings are safe and secure, and that the applications you build on top of the cloud are safe and secure.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=88)** Cloud providers like AWS hire many high-end expert security leaders and engineers all focused on making the cloud secure for themselves and their customers.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=99)** Security is so important to cloud providers that they invest heavily not only in keeping their infrastructure secure, but also invest in providing the tools and training so that customers of the cloud know what it takes to keep them safe.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=114)** This is an investment in security that you get built into the cloud.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=118)** It's an investment that is unavailable to you in your own data centers.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=122)** Even if you have a solid security department, the constructs of the cloud make it naturally more secure than you could ever make your own data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (17), [[Security]] (8), data (4), [[Banking]] (1), aws (1)
> **CLI Commands:** make (3), aws (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Leveraging cloud provider expertise
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=0)** - [Instructor] Keeping your application secure in the cloud infrastructure is actually a joint responsibility.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=5)** Both the cloud provider and you have a role in keeping your application safe.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=10)** It's a principle known as the principle of shared responsibility.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=14)** It's a principle championed by AWS, but certainly applies to all cloud providers.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=20)** This principle provides the model for security for your application running in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=26)** It says that the responsibility for keeping your application safe is shared by both parties.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=32)** There are specific responsibilities for keeping the cloud infrastructure itself safe.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=38)** These are the responsibility of the cloud provider, and there are specific responsibilities for keeping your application itself safe.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=45)** These are your responsibilities.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=47)** The pieces that are your responsibility, the cloud provider gives you tools that help provide a secure environment for your applications.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=56)** These tools include things like identity and access management services, tools for stopping bad actor traffic from entering your infrastructure, and tools to monitor and identify when a bad actor might be working on breaking security.
>
> **[1:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=72)** And finally, logs and diagnostics that can tell you after an event what actually happened and how to keep it from repeating.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=79)** Each service and each cloud provider may have a different model for implementing the shared responsibility principle.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=87)** As a simple example, in the world of AWS, the EC2 service has a specific shared responsibility model.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=94)** In the AWS EC2 shared responsibility model, AWS is responsible for the physical security of the facilities that house the cloud hardware.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=106)** This is the AWS data centers, appropriate for the specific region and availability zones that you are using.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=113)** The physical security of all hardware.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=116)** Network infrastructure security, and security of the virtualization system and individual virtualized servers.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=123)** And you are responsible for the security of the operating system running on that server.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=129)** The security of all the software running on your servers, whether that's third-party software, daemons, monitors, et cetera, and the security of all the applications that you have built that you're running on the servers; the security for all data that you store on the server, or transfer on and off the servers, and the responsibility for securing all of the credentials that you use to access all of the cloud resources, cloud services, and software.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=157)** Finally, you are responsible for all policies you need to enforce, standardized system configuration, and other system constraints and requirements.
>
> **[2:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=166)** Now, every service has a similar model, and every cloud provider may provide a different dividing line between your responsibility and their responsibility.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=176)** It is your responsibility to understand the policies in use for the cloud services you are using and to conform to the requirements of those policies.
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=186)** Failure to follow these procedures can result in a failure in security anywhere in the cloud service, whether the failure is in your area of responsibility or the cloud provider's.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (13), [[Security]] (11), application (5), aws (5), [[Cloud Infrastructure]] (2)
> **Env Vars:** aws (5), ec2 (2)
> **CLI Commands:** aws (5)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Security zones
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=0)** - [Announcer] It's generally considered best practice for security purposes to split your application infrastructure into security zones.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=7)** This is so that security breach in one area can still be limited to resources that exist only in that zone.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=15)** While there are many models that are considered best practices, a common model involves three standard zones, namely a public zone.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=24)** This is the zone that is connected directly to the internet and is exposed to traffic coming from the internet.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=30)** It's the least secure zone in the zone that is most often vulnerable for compromises.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=36)** A private zone, this is the backend zone connected to the internal backend networks and services.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=41)** It's where most data is stored and where most critical systems exist, it's a zone that has the least access to the internet and has the highest level of security protections in place, a demilitarized zone or DMZ.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=55)** This is a zone between the public zone and the private zone that acts as a go-between, between the public and private zones.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=61)** All communications between the public and private zone go through services in the DMZ and the primary purpose of services in the DMZ is to provide high levels of protection for the private zone from services in the more vulnerable public zone.
>
> **[1:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=78)** In the cloud, these zones are normally constructed using multiple Virtual Private Clouds or VPCs to implement each of these zones.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=86)** Sometimes there are multiple versions of each zones with an instance of each zone in each geographic region where the application is actually operating.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=94)** The VPCs use various networking and application level security provisions, such as network access controls, security groups, and software and hardware firewalls to limit traffic and increase security.
>
> **[1:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=107)** Often the cloud providers give you tools to manage these security settings and properly set up and manage the necessary permissions to secure your application.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=117)** Providing you these tools and settings is the cloud provider's side of the principle of shared responsibility.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=123)** Your side is understanding what settings are required for your application to allow the application to function, yet limit or remove access from non application components to your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (8), application (8), cloud (3), traffic (2), data (1)
> **Env Vars:** dmz (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [announcer] (1)

#### Identity and permissions in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=0)** - [Instructor] Another critical principle in maintaining a safe and secure application running in the cloud is to understand the principle of least privilege.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=9)** This principle is not really a cloud specific principle, but it applies to cloud infrastructures and it is a critical best practice for building a safe and secure cloud infrastructure.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=20)** The principle of lease privilege is an industry standard, an important security principle.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=25)** The idea of the principle of least privilege is to only grant an entity the minimum permission necessary for it to perform its operations and no more permissions.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=37)** This is best described by an example.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=40)** Let's assume we have an application, and let's assume the application needs to read objects contained in an S3 bucket named mydata.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=48)** The application only needs to read these objects.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=51)** It doesn't need to create, update, or delete the objects, that's run by another application.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=57)** The application also only needs access to this single bucket.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=61)** It doesn't need access to any other bucket.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=64)** Given this requirement, we could give the application access to all S3 buckets in the account, that would allow it to access to the needed bucket.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=73)** However, this is a bad idea because the service doesn't need access to any other bucket.
>
> **[1:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=78)** Giving the application access to other buckets could mean it could access information that it really isn't supposed to have access to.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=87)** The application becomes compromised.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=89)** It could accidentally or maliciously access to wrong data causing a major security vulnerability.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=96)** Or a compromised application you may not know whether it had access to that data or not, and you may have to worry about whether or not that data is compromised, whether it really is or not.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=106)** Instead, what we could do is give the application complete access to the mydata bucket, but nothing else.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=114)** This also is a bad idea, because this would allow the application to delete objects, or change existing objects, and there is no business reason for the application to be able to do that.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=126)** If the application becomes compromised, it could delete critical objects that it shouldn't have access to.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=132)** Even a simple defect in the application could cause objects to be deleted by mistake or potentially allow other bad actors to change or damage other objects in the bucket.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=144)** In both cases, the application has more permissions than it requires, so a problem with the application could cause more damage than it should cause.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=154)** The application has a larger blast radius than it should have, because it has more permissions than it really needs.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=162)** A better permission model would be to only give the application read axis to the single bucket mydata and no other access or permissions and no other bucket.
>
> **[2:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=173)** This gives the application all of the access it requires, but it also reduces the access to unnecessary objects.
>
> **[3:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=181)** If the application becomes corrupt or maligned, it can't cause unnecessary damage to objects that it doesn't have access to.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=190)** Its blast radius is significantly smaller.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=193)** Most cloud providers allow you to create finely detailed permission models that allow you to grant only the permissions you need to an application and no additional permissions.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=203)** This increases relative security within the entire application infrastructure.
>
> **[3:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=208)** This is known as the principle of least privilege.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=212)** Give resources, only the permissions that they actually require.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (23), cloud (4), [[Security]] (3), data (3), [[Cloud Infrastructure]] (1)
> **Definitions:** is a  (3), is an  (1), known as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 6. Constructing a Cloud Infrastructure

[↑ Back to Table of Contents](#table-of-contents)

#### Dynamic infrastructures
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=0)** - [Narrator] Dynamic infrastructures is the ability to provision and deprovision infrastructure resources on demand.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=6)** This allows for more efficient use of computing power that would otherwise be wasted when unused or underutilized.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=13)** It also helps to lower the cost by giving users the flexibility to only pay for what they need at any given time.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=22)** An example of a dynamic infrastructure is an application that utilizes autoscale in order to dynamically grow and shrink the size of your application based on the resources required to operate the application at that particular moment.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=37)** Dynamic infrastructures allow additional resources to be brought online quickly to handle sudden changes in traffic levels.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=45)** As traffic levels go up, more resources can be allocated.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=50)** As traffic levels go down, those resources can be freed, either automatically or by a manual request.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=57)** But in both cases, dynamically and on the fly.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=61)** Dynamic infrastructures allow failing resources to simply be terminated and replaced with fresh resources.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=69)** If a server gets corrupted or even simply a process starts acting poorly, rather than diagnosed the problem, simply terminate the server and replace it with a new one.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=79)** This capacity makes it easier to upgrade software and allow easy resource replacement.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=86)** This allows expanding availability with redundancy in geographic additions for greater performance based on needs.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=94)** It also reduces cost.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=96)** You pay for what you currently need, not for what is pre allocated.
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=101)** It also lets you shift expenses from a capital expenditure to a cost of good sold expenditure.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=108)** This is good for the business and for the CFO.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), traffic (3), power (1), business (1)
> **Env Vars:** cfo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Infrastructures brick by brick
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=0)** - [Instructor] Applications aren't monoliths, or at least they shouldn't be.
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=4)** Applications are constructed as a network of components all working together.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=9)** One advantage of the cloud is that you can leverage components that you build as well as components that are built by the cloud provider or other companies like SaaS software in order to build your application.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=22)** Let's take a look at a simple example.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=25)** A very simple app might consist of code that runs in response to requests from the web.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=31)** It needs the application code that makes up the application itself, but it also needs a database backend.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=38)** That database might be provided by a DB as a service by the cloud provider.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=43)** You don't need to provide the database yourself.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=46)** The cloud provider can provide that for you.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=48)** You might use a front end module like Nginx in a container that you run yourself in your own infrastructure, you know, on a set of your own servers, or you might use a cloud provider's load balancer.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=61)** You might need to store large files such as videos or images on an object store like Amazon S3.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=67)** You might need a CDN to deliver a static content quickly and effectively to your users, either provided by the cloud provider or a third-party service provider.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=77)** You might use a log management service to collect logs from all of these places.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=81)** Feed it to a SaaS service provider for processing, alerting, or diagnostics.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=87)** So this simple app has code that you wrote, developed for the application specifically, components that you are operating that you got fully assembled like Nginx in the container, cloud services that you're leveraging like your database as a service, or Amazon S3, and third-party services that you've linked in and used within your application.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=112)** All of these modules, working together, create a full application satisfying the needs of the user and the business.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=121)** The cloud enables and encourages this type of brick-by-brick application construction, and cloud architecture is as much an infrastructure architecture process as a code architecture process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (9), application (7), database (4), [[SaaS]] (2), web (1)
> **CLI Commands:** nginx (2)
> **Env Vars:** cdn (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Infrastructure as code
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=0)** - [Presenter] How do you build these sorts of dynamic infrastructures and complex brick-by-brick infrastructure architectures?
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=6)** Well, you can hand assemble all the pieces you need.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=9)** There's a console application for the cloud provider and for most third parties.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=13)** You stick together the components you need piece by piece.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=16)** But there's a problem with that.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=18)** It's easy to make mistakes.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=20)** It's hard to replicate either because you're building both the staging and production and want them to be identical, or you're building multiple, replicated production data centers across the country or across the globe.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=33)** And you can't track when things change.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=36)** How it might impact the site and correlate problems with those changes becomes difficult.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=42)** Rather than hand assemble the infrastructure using the console of the cloud provider, creating and allocating their necessary components, instead, leverage the fact that the cloud providers and most SaaS and infrastructure as a service companies have APIs that allow configuration of their services.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=61)** You want to leverage tools that will piece together all of the infrastructure components, calling the APIs as necessary to build the infrastructure.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=71)** These tools utilize a written description of the infrastructure that you require.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=75)** This written description can be updated and the tools will automatically update the real infrastructure to match the description.
>
> **[1:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=83)** This model is often called infrastructure as code, and there are many different tools that can help with this capability.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=91)** Some of these tools are provided by the cloud providers themselves, such as AWS CloudFormation.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=97)** Some are third-party tools.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=99)** The most popular, and arguably best of these, is Terraform.
>
> **[1:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=104)** But there are many others, including Chef, Puppet, and others.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=108)** The tools differ in how they function and how they describe their infrastructure.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=113)** Some use a declarative approach, describing what you want the infrastructure to look like.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=118)** Some use an imperative approach, describing what you need to do specifically in the APIs to set up the infrastructure the way you want it to be.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=127)** But they all have a basic tenant in common.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=130)** They provide a written description that is used to construct your infrastructure.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=134)** Now, that written description itself can be treated as if it was code, meaning it can be stored in a revision control system, such as Git, which allows you to track changes and implement review and approval process models just like you do for code.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=152)** This using a code-like model for describing infrastructure is why the term infrastructure as code is used.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=158)** This model has many advantages in the cloud world.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=162)** Your infrastructure is well-documented in a clean and unambiguous manner.
>
> **[2:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=167)** This is necessary for the tools to be able to create your infrastructure.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=171)** Changes to the infrastructure are tracked with the same tools used to track other code changes.
>
> **[2:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=177)** You can't update your infrastructure without leaving a breadcrumb trail.
>
> **[3:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=181)** And changes can go through the same types of review processes that code changes go through, preventing simple mistakes from causing big problems.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=191)** You can easily duplicate your infrastructure to increase the size and capacity of your infrastructure quickly as needed, replace failed infrastructure components, expand into a new data center or geographic region easily and quickly without having to rebuild the wheel, all without the worry of human error in the infrastructure setup process itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (5), data (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), application (1), [[SaaS]] (1)
> **CLI Commands:** make (1), aws (1), terraform (1), git (1)
> **Analogies:** such as (2), just like (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** aws (1)
> **Speakers:** - [presenter] (1)


### 7. Managing the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### Single Team Oriented Service Architecture (STOSA) organizations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=0)** - [Instructor] What is a Single Team Oriented Service Architecture?
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=3)** STOSA is an important guiding principle for large organizations that have many development teams that own and manage services comprising one or more applications.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=14)** STOSA applications with appropriate organization level processes and procedures, they work with cloud architectures to provide a high-quality modern application infrastructure.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=26)** What are the criteria to be a STOSA application?
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=29)** Well, to be STOSA, you have to meet the following criteria.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=34)** You must have an application that is constructed using a service-based architecture, and this could be a microservice architecture.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=41)** You must have multiple development teams that are responsible for building and maintaining a large application.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=49)** Every service in your application must be assigned to a specific development team.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=55)** That development team owns the service.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=58)** Who owns which service should be a well-documented process and readily available to everyone throughout the entire organization.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=67)** No service should be assigned to more than one development team.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=71)** Individual development teams may own more than one service.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=75)** Teams are responsible for all aspects of managing that service.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=79)** This goes anywhere from understanding or managing the architecture of the service, the design of the service, all the way through the development, testing, deployment, monitoring, and incident resolution of the service.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=94)** Services should have strong boundaries between them, including well-documented APIs describing the boundary of the services themselves.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=105)** The service owns its own data, and the data becomes part of the service.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=110)** If a service needs access to data that's stored in another service, it must use one of the well-defined APIs to access that data.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=118)** It can't go and talk to the data source itself.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=121)** Services must maintain good internal service level agreements between them that are monitored and violations reported to the owning team.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=132)** A STOSA-based application is an application for which all services follow these rules.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=137)** And a STOSA organization is one in which all the service teams follow these rules and manage STOSA applications.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=144)** Typically, in a STOSA-based organization, each team should be a reasonable team of typically three to eight engineers.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=154)** If a team is too small, it cannot manage the service effectively, but if it's too large, becomes cumbersome to manage that team.
>
> **[2:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=164)** Here you see an application in a STOSA organization.
>
> **[2:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=167)** The boxes labeled A through L each represent an individual service within the application.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=172)** The ovals represent development teams that own the enclosed services.
>
> **[2:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=178)** The application contains 12 services that's managed by five teams.
>
> **[3:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=183)** You'll notice that each service is managed by a single team, but there are several teams that manage more than one service.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=190)** This is okay.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=191)** Every service has an owner, and no service has more than one owner.
>
> **[3:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=195)** That's the most important part.
>
> **[3:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=198)** In this application, clear ownership for every aspect of the application exists.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=203)** For any part of the application, you can clearly determine who is responsible and who to contact for questions, issues, changes, or escalations.
>
> **[3:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=213)** When you work in a non-STOSA organization, there is no clear ownership.
>
> **[3:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=218)** If you need something done with service C or D in this diagram, it's not clear who is responsible.
>
> **[3:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=225)** Is it someone in Team 1 or Team 2?
>
> **[3:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=228)** They both seem to own those services.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=231)** If one of those services has a problem, who should respond?
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=235)** What happens if you need something done with service I?
>
> **[3:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=239)** Service I has no clearly defined owner.
>
> **[4:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=241)** Who do you contact?
>
> **[4:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=243)** This lack of clear ownership and responsibility makes managing a complex application even more complicated.
>
> **[4:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=250)** As an application grows in size, they grow in complexity.
>
> **[4:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=255)** A STOSA-based application can grow larger and be managed by a larger development organization than a non-STOSA-based application can.
>
> **[4:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=263)** As such, it can scale much larger while still maintaining solid, documented, and supportable processes and interfaces.
>
> **[4:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=274)** A STOSA-based organization can handle larger and more complicated applications than a non-STOSA organization.
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=281)** This is because STOSA shares the complexity of a system across multiple development teams effectively and efficiently, while maintaining clear ownership and lines of responsibility.
>
> **[4:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=293)** You can learn more about STOSA organizations by reading my book, "Architecting for Scale," published by O'Reilly Media, or by looking online at www.[stosa.org](https://stosa.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (17), teams (9), data (5), cloud (1)
> **Env Vars:** stosa (16)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [stosa.org](https://stosa.org) (1)
> **Speakers:** - [instructor] (1)

#### Effective devops in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=0)** - [Narrator] DevOps is a set of practices that emphasize communications and collaboration between software developers and IT operations.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=8)** By using DevOps in your cloud practices, you can create a more efficient environment for software development and infrastructure management.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=16)** I won't go into the benefits of DevOps per se, but I will talk about how the cloud can make implementing DevOps easier and best practices for implementing DevOps for cloud applications.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=28)** Taking advantage of what the cloud offers makes it easier to implement DevOps.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=33)** The cloud gives you a scalable infrastructure that can easily accommodate changes made on demand.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=39)** This makes it perfect platform for implementing DevOps practices.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=43)** Features of the cloud help with the effectiveness of DevOps implementations.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=47)** For example, cloud makes it easy to provision resources on demand, meaning less likely to over provision resources.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=55)** The Cloud offers higher availability in general than other platforms because redundant resources can be easily created across multiple locations.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=63)** The DevOps quick cycle time fits very well with the cloud dynamic infrastructure capabilities.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=70)** You can launch new versions of an application simply by replacing resources rather than trying to upgrade them one by one.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=77)** You can test a new or parallel infrastructure before swapping out the entire infrastructure to replace older resources.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=84)** DevOps is designed to bring developers and operations closer together to make seamless processes between them.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=91)** Cloud computing is designed to automate many standard operation tasks, allowing you to adjust infrastructures quickly and dynamically.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=100)** When you use both of them, they bring developers, operations, and infrastructure together and enable standardized and unified processes and systems, making modern applications more advanced and more achievable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (10), cloud (10), [[Software Development]] (1), management (1), application (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Understanding automation
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=0)** - [Announcer] As cloud applications grow, they become increasingly complex and difficult to manage.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=5)** Monitoring and analytics can be used to quickly identify problems with your application and diagnostic causes of those problems, enabling you to build larger and more complex applications.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=16)** Monitoring refers to the collection of data about the performance and health of your application.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=22)** This data can be used to identify problems and diagnose issues, and it can also be used to improve the performance and reliability of your application.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=32)** While analytics refers to the use of data to understand the behavior of your application.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=39)** This data can be used to identify trends, understand user behavior, and find bottlenecks in your application.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=46)** It can also be shared with business units and other stakeholders to improve the application and its features.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=53)** There are many monitoring and analytics solutions, both cloud specific and cloud agnostic that are available for your use.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=59)** This includes open source solutions such as Prometheus or commercial solutions such as Datadog.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=66)** Additionally, cloud providers themselves provide their own monitoring and analytics solutions.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=71)** AWS has CloudWatch and Microsoft has Azure Monitor.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=76)** These are designed to give you operational information into how the cloud components that you are using are performing.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=82)** These tools can run standalone or can be integrated with application monitoring or other infrastructure monitoring tools to create a complete and comprehensive set of information.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=92)** Often this data is collected and kept in the cloud so that AI and machine learning algorithms can be applied to it to identify trends and determine courses of action.
>
> **[1:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=103)** In these ways, monitoring and analytic tools take advantage of the scale and resource availability in the cloud to provide advanced and comprehensive monitoring.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=112)** No production application is complete and running safely and securely unless it includes appropriate monitoring and analytics, and the cloud both provides additional tools and leverages existing tools to give you the data you need to keep applications running smoothly, safely and securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (8), application (8), data (6), [[Analytics]] (5), business (1)
> **CLI Commands:** find (1), aws (1)
> **Definitions:** refers to (2)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [announcer] (1)


### 8. AI and the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### Foundations of AI in cloud computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=0)** - [Instructor] Next, we're diving into a topic that's transforming how we think about cloud architecture, and that is artificial intelligence.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=9)** You know, when I was working at Amazon and later advising clients, and finally as the CTO of an AI-focused startup, I watched AI evolve from a specialized tool to a fundamental component of cloud architecture.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=28)** And, frankly, different cloud providers think about AI in different ways.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=33)** AWS, for example, takes a very pragmatic approach to AI.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=38)** They provide a broad set of services to help you build AI-enabled applications.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=44)** Microsoft, especially before their involvement with OpenAI, took an approach of integrating AI with existing Microsoft tools.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=54)** But more recently, they've used their open AI leadership to extend their offerings beyond just Microsoft tooling.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=62)** Google, on the other hand, has a very strong research background, and they take a more theoretical approach to their AI offerings, with a focus on innovation and on the technology itself.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=77)** But where they're all the same is this.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=79)** They all offer three distinct approaches to AI, and those three approaches are first, pre-trained AI models.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=89)** These are the plug and play AI capabilities such you see from companies like OpenAI and Anthropic, and in equivalent places and equivalent services by Amazon and Microsoft.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=105)** This is using existing, well-trained, previously trained AIs to perform tasks for the consumer.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=114)** Usually general purpose tasks, like have a conversation with someone or write some code for a developer or draw a picture of someone.
>
> **[2:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=124)** The second approach is custom model training.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=128)** This is the bottoms up creating of custom AI models that are specifically trained for very specific business purposes.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=137)** The result is something very similar to the pre-trained APIs, but with the AI knowledgeable on custom capabilities that's important to your business.
>
> **[2:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=148)** You've created a custom AI for a very specialized task.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=154)** While your AI model the results can be nearly perfectly aligned for that specific task in your business goals, the cost to train a model from scratch to do that task can be quite expensive.
>
> **[2:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=169)** The third approach is model augmentation.
>
> **[2:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=174)** This is the hybrid approach that involves using a pre-trained AI model, but augmenting it with additional learning on top of it.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=184)** In this case, you're leveling up an existing pre-trained model by giving it supplemental training that's specific to your business requirements.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=193)** The resulting model has a broad knowledge base, but also has specific expertise that's aligned with your business requirements.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=203)** While this approach is not as inexpensive as using a stock pre-trained model, there is cost involved in this training.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=212)** This approach is significantly less expensive than a custom-trained AI model.
>
> **[3:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=218)** Whatever approach or approaches that you decide to take, make sure to select a method that matches your business needs, your available corporate skill sets and talent, and of course, your budget.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=231)** Making a wrong architectural direction decision in this first step can make or break the success of your entire AI strategy.
>
> **[4:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=243)** All three of these approaches requires a concentrated thought process about how you plan on using AI in your architectural strategy and how much that strategy will cost.
>
> **[4:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=258)** Using AI is very resource intensive, but often most of that resource usage is invisible to you when you make a simple AI API call.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=269)** Unless you are a company that provides AI services, the cost of using AI in your company usually does not appear as simple resource costs, simple resources like computation and storage and networking costs.
>
> **[4:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=284)** Instead, you are charged typically based on the tasks you are asked to perform, the complexity of those tasks, and the size of the input and output of those tasks.
>
> **[4:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=298)** These are not normal cloud expense vectors.
>
> **[5:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=301)** Complexity of a task is not something you are usually directly charged for in a cloud computing environment.
>
> **[5:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=309)** Instead, you're usually charged for the basics, computation, networking, and storage.
>
> **[5:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=314)** Understanding the cost and value of AI though, can be very different.
>
> **[5:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=320)** Many companies will eat through their expected AI budgets quickly, simply because they're not properly optimizing their AI strategies for their business needs.
>
> **[5:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=332)** This can result in failed, yet very expensive AI projects.
>
> **[5:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=339)** The key to success with an AI cloud initiative isn't just understanding the technology, it's understanding how to architect a solution that uses the technology in a way that balances the capability of the AI, the cost of the AI, and the complexity of your problem set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (30), business (7), cloud (6), [[Microsoft]] (4), next (1)
> **CLI Commands:** make (3), aws (1)
> **Env Vars:** cto (1), aws (1), api (1)
> **Analogies:** for example (1), picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### AI integration patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=0)** - [Instructor] In this video, we'll explore the different ways generative AI can be integrated into cloud applications and the trade-offs of each approach.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=10)** The three main integration patterns are, direct integration with AI providers.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=16)** This is using preexisting cloud services that are available in cloud providers and custom AI providers.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=24)** The second is a self-hosted open-source model.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=27)** This might involve using cloud resources, but all AI-specific capabilities are created and managed by you, not by a separate AI service provider.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=38)** And third is a hybrid approach.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=40)** Let's look at each of these three in a bit more detail.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=45)** The direct integration model involves using existing, known AI providers such as OpenAI, Anthropic, or using the AI services that are offered by major cloud providers such as AWS, Google, or Microsoft to provide the AI capabilities that your application requires.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=64)** This is the typical SaaS model of integrating third-party service software into your application.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=71)** You must select an AI provider, select the specific capabilities you want to use, create an integration with that provider, and create and manage the GLUE necessary to integrate the existing AI service into your application.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=89)** Typically, AI providers have either a language-specific API or REST API that allows you to integrate with their services, just like any other SaaS service you might use.
>
> **[1:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=102)** You pay for the AI capabilities that you consume and you provide payment to the AI provider you selected.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=110)** This is typically the fastest, easiest model to get up and running.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=115)** When combined with using standard, off the shelf AI models, this can allow you a very, very fast path to getting AI capabilities integrated into your application.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=127)** Additionally, just like with a typical SaaS model, you get automatic updates to the controlling software and the AI models themselves on a regular basis.
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=139)** And integrating these upgrades into your system is usually automatic or at least relatively easy.
>
> **[2:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=146)** But just like other SaaS applications, this speed and convenience comes at a cost.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=154)** First, you're limited in capabilities to what that AI provider gives you.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=158)** Also, you often are using custom APIs and you are typically tied directly to a specific single source AI provider.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=168)** While AI services such as those offered by AWS purport to provide a standardized interface to multiple vendors' AI models, the interface does not remove the need for per vendor customization.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=184)** The net result is you're typically locked into a single-vendor AI solution.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=189)** This lock-in has all of the same disadvantages of any other SaaS service.
>
> **[3:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=195)** Vendor lock-in means you are limited to the capabilities offered by that specific vendor.
>
> **[3:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=201)** Even if another vendor provides a new capability, you may not be able to easily leverage that new capability.
>
> **[3:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=208)** In a fast-evolving technology such as AI, this may stifle your innovation.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=216)** Additionally, you're limited by the privacy, security, and availability limitations that the single vendor provides, which may limit your ability to utilize certain capabilities for your business needs.
>
> **[3:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=233)** The second approach is to directly self-host AI models on your own computation resources.
>
> **[4:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=240)** There are many open-source AI models available that you can start with, and expanding these models is not very difficult.
>
> **[4:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=249)** This approach requires you to operate your own AI infrastructure, though, which you can typically easily do on a cloud infrastructure by a major cloud provider.
>
> **[4:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=260)** This approach gives you increased flexibility and often reduced overall costs, but the initial set of costs and effort can be quite a bit higher.
>
> **[4:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=272)** You get full control over how the models work for your application usage, and you have complete control over your data privacy and other dependencies.
>
> **[4:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=283)** However, getting such an AI infrastructure up and running can require a significant investment in time and resources, and it requires a much higher level of cloud expertise and AI expertise than the typical SaaS model requires.
>
> **[5:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=300)** The result, more control and better cost management in the long run, but with additional cost, effort and complexity and expertise requirements in the short run.
>
> **[5:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=313)** The third approach is the hybrid approach.
>
> **[5:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=316)** In this model, you may start using a stock, off the shelf AI service, such as OpenAI.
>
> **[5:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=322)** This allows you to get up and running faster and with less expertise required.
>
> **[5:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=329)** As time goes on and your expertise grows, you can begin to bring parts of your AI infrastructure in-house to run on your own AI infrastructure using similar open-source models to the ones you were using in hosted AI providers.
>
> **[5:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=345)** This model allows the quick startup and lower initial cost advantages of the service provider model, yet lets you grow and expand as your needs require and your experience allows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (30), cloud (7), [[SaaS]] (6), application (5), open-source (3)
> **Analogies:** such as (5), just like (3)
> **Env Vars:** aws (2), api (2), glue (1), rest (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Resource and cost considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=0)** - [Instructor] We talked earlier about the resource and cost implications of using AI, but let's go into that in a bit more detail in this video.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=9)** Generative AI, in particular, brings new resource considerations that differ significantly from traditional, cloud-based application architectures.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=19)** For example, computational resources.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=22)** While most of your architected applications make use of traditional CPU instances for computation, AI models require extensive use of GPU computation resources.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=35)** GPU computation is generally significantly more expensive than similar CPU computation.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=43)** Additionally, GPU memory often becomes a critical resource constraint.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=49)** Large language models require significant quantities of memory to operate effectively.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=54)** Some models can require multiple gigabytes of RAM just to function.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=59)** While you can often balance available memory across multiple AI requests, especially during batch processing, often AI requests are time sensitive, human-level discussions that require a more immediate response.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=75)** Hence, expensive memory is required even to do simple AI tasks.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=81)** Along with significant quantities of memory, often high bandwidth networks are necessary for large payloads, especially when dealing with multimedia requests such as images, voice, and video.
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=95)** The result, it's often ineffective and even inappropriate to consider the costs of operating AI using the traditional, cloud cost trio of CPU, memory, and networking.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=110)** Instead, most AI providers make use of a model specific, token-based pricing model.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=118)** These models assign a price based on the amount of input given to a model.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=122)** The more text or images or audio or video you give a model in a request, the more tokens it consumes, and the amount of output that the model produces in its response.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=135)** The greater the quantity of output text, audio, video, et cetera, the more tokens are consumed.
>
> **[2:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=141)** An AI request then is charged by applying a specific cost for each input and each output token consumed.
>
> **[2:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=150)** The larger the request, the more the request costs.
>
> **[2:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=156)** To add to the pricing complexity, AI providers make available multiple AI models with different characteristics and abilities.
>
> **[2:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=165)** The more capable models have a higher price per token than simpler models do.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=172)** So sending a request to a high-end model may cost a lot more than sending the request to a low-end model.
>
> **[3:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=181)** And while the result may be of much higher quality in the high-end model, it can also be significantly more expensive than the same request to a low-end model.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=192)** In fact, high-end models may be 10 or 100 times more expensive per token than a low-end model.
>
> **[3:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=201)** For example, as of when this course was created, Anthropic's Opus model has a cost for 1 million output tokens of $75.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=212)** While their simpler Haiku model has a cost for 1 million tokens, output tokens, of $1.25.
>
> **[3:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=221)** $75 versus a $1.25.
>
> **[3:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=225)** That means that the low-end model is 1/60 the cost of the full high-end model.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=231)** A comparison of other providers' models leads to very similar results.
>
> **[3:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=237)** While this analysis mostly applies to AI service providers, self-hosted models have a similar economic profile.
>
> **[4:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=246)** The reason why Anthropic high-end model is significantly more expensive than their low-end model is because it takes significantly more resources to process a request in the high-end model than it does in a low-end.
>
> **[4:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=260)** That means many times more resources in a self-hosted environment are required as well.
>
> **[4:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=266)** Hence, picking the right model or models for your AI integration is as critical as any other aspect of your integration, including initial vendor selection and integration strategy.
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=281)** However, direct dollar costs is only one aspect of the cost of running an AI request.
>
> **[4:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=289)** Time is another factor.
>
> **[4:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=293)** Some models are designed to give quick responses and can give even faster responses with simpler models.
>
> **[5:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=302)** Other models, even higher cost models, are not optimized for speed at all, but instead are optimized for higher quality output.
>
> **[5:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=312)** A prime example is the OpenAI o1 model, which is an advanced high-end model that is optimized for its ability to perform complex reasoning, but it is not optimized for speed.
>
> **[5:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=327)** If you're building a batch AI processing system, this may be perfect, but if your application requires interactive use of AI queries, performance of the AI model may be paramount to your architectural decision process.
>
> **[5:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=342)** There are many strategies you can use in order to optimize your AI resource utilization and query performance.
>
> **[5:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=349)** These strategies can lower costs, create faster responses, and overall optimize your AI usage.
>
> **[5:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=358)** Some optimization strategies include request optimization.
>
> **[6:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=363)** The ability to batch requests and cache common responses are typical strategies used to optimize AI costs.
>
> **[6:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=371)** By controlling when requests are sent and only sending when necessary, you can take advantage of better resource optimization.
>
> **[6:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=382)** This strategy works especially well with self-hosted environments where resource utilization is your problem to manage.
>
> **[6:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=390)** But even when using hosted AI providers, many providers offer batch and background pricing options that can lower costs by reducing requirements on when you need a request processed, along with using pre-cache and in some cases pre-calculated input queries.
>
> **[6:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=411)** Infrastructure optimization.
>
> **[6:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=414)** When self-hosting your AI, managing the right size of GPU instances and the use of cloud spot instances and other dynamic resource allocation strategies can help optimize your cloud AI costs.
>
> **[7:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=430)** Until you have a better idea of the at-scale needs of your application for its AI usage, I recommend you roll out AI features in small amounts incrementally and to subsets of your customers initially until you get a better handle on the relationship between your application usage and the associated AI costs.
>
> **[7:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=454)** Of course, tracking and monitoring AI usage is critical to keeping your AI spending in check.
>
> **[7:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=462)** But also watch for usage patterns to make sure you don't have resource black holes, where seemingly simple application requests use an abnormally large amount of AI resources to complete.
>
> **[7:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=476)** And, of course, as it is with all cloud usage, set up alerting to detect anomalies and other problems before those anomalies become expensive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (28), cloud (5), application (5), [[Tokens]] (5), [[Generative AI]] (1)
> **Env Vars:** gpu (4), cpu (3), ram (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), such as (1)
> **Versions:** 1.25 (2)
> **Definitions:** means that (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### AI-assisted cloud operations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=0)** - [Instructor] In the previous videos, we talked about using AI within your application itself.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=6)** But AI can also be used in building and operating your cloud infrastructure as well.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=13)** In this video, let's explore how AI can help optimize your cloud infrastructure, predict resource needs, and manage costs effectively across your entire application stack.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=27)** In traditional cloud infrastructure management, your operations team is often in a reactive mode when dealing with issues that come up.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=36)** They respond to alerts after problems occur and make adjustments to prevent problems that have occurred from reoccurring again.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=45)** This strategy is used not only for technical and mechanical problems, but also for resource allocation problems.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=55)** When usage increases and more resources are demanded, cloud resources are brought to bear to handle the increased usage.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=63)** Sometimes, this resource increase occurs automatically, but all too often it requires human intervention to detect and handle.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=73)** This often results in preventative overprovisioning for handling just-in-case scenarios.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=80)** And it can result in a slow response to actual usage spikes.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=86)** Typically, the analysis necessary to determine when additional resources are required is relatively complex and requires manual consideration.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=97)** And this analysis can be error-prone.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=100)** AI systems can look at complex systems and make simpler and more valuable recommendations on what to do to handle current requirements.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=111)** Additionally, AI can use existing data to detect trends and predict future resource uses that could be planned for now rather than wait for when the problem actually occurs.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=125)** Also, since AI is extremely good at looking at large quantities of disparate data and deduce patterns from that data, AI can take useful, nonoperational data into account to determine when resource needs might change.
>
> **[2:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=142)** For example, an AI infrastructure management solution can take a defined marketing strategy into account to make assumptions on when resource spikes may naturally occur and create operational plans for dealing with those spikes.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=160)** Essentially, when a large quantity of data needs to be analyzed to create a response, AI-powered tools can be quite effective in helping.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=172)** This is exactly what happens in large IT operation infrastructures.
>
> **[2:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=177)** AI operations management can help reduce errors, missed triggers, and other anomalies and make use of more data to create better predictions and better results.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=192)** There are other uses of AI in IT operations as well.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=197)** For example, AI can be used during an ongoing IT incident to provide data to a response team, then analyze the conversations that occurred among response team members during the outage to create postmortem analysis and reports.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=216)** Even during an outage, AI can be used to analyze the conversations among response team members to create situation reports, situation summaries for management and critical customers without interfering with the actions of the response team itself.
>
> **[3:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=234)** Overall, AI can be a valuable asset in the creation of your IT operational management strategy and architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (14), data (7), management (5), [[Cloud Infrastructure]] (3), application (2)
> **CLI Commands:** make (4)
> **Analogies:** for example (2)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### AI-assisted security and governance
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=0)** - [Instructor] Just like in IT operations management, AI can be useful in helping architect your application security and governance requirements, policies, procedures, and operational monitoring.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=14)** Traditional security and governance processes often struggle to keep up with the pace and scale of modern threats and attacks.
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=23)** AI can help reduce the struggle and change your security landscape dramatically.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=30)** Let's take a look at traditional cloud-based security processes.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=34)** In traditional cloud-based security systems, traditional approaches are used to create secure systems and ensure proper governance compliance.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=46)** This often involves rule-based security policies, manual analysis of large quantities of security logs and journals, and periodic audits to ensure compliance and maintaining arbitrary fixed thresholds against security threats.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=66)** This basic approach often fails to keep up with the growth of security threats and the number of attacks and different attack vectors available to bad actors.
>
> **[1:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=78)** This approach looks for common strategies and hence often misses novel attack vectors.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=86)** It can also create too many false positives and too many false positives can easily lead to missed true positives.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=97)** Think about "The Boy Who Calls Wolf" parable.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=100)** This approach usually operates at human speed and hence can result in a slow response to an ongoing attack.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=110)** Finally, the audits they require tend to be resource intensive and hence expensive.
>
> **[1:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=119)** By leveraging AI capabilities into your security and governance processes, you can use the power of AI to analyze attack vectors.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=129)** Remember, AI is very good at looking at large quantities of data, finding correlations and anomalies, and summarizing the results.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=140)** This is exactly the sort of tasks that humans are bad at and exactly the sorts of tasks necessary to create a secure operational infrastructure.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=152)** Ais are effective in threat detection.
>
> **[2:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=155)** They can analyze patterns across tons of data across the entire infrastructure.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=162)** They can learn and be trained on normal behavior patterns and be able to detect anomalies in real time.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=171)** They can also identify out of the ordinary sophisticated attacks, including zero day exploits, persistent threats, and novel attack patterns.
>
> **[3:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=183)** AI can also trigger automated responses that result in faster response to issues resulting in faster threat containment.
>
> **[3:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=194)** They're also not negatively impacted by false positives and hence, they tend not to be affected by "The Boy Who Called Wolf" class of failures.
>
> **[3:25](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=205)** They can immediately and automatically prioritize responses using complex, risk-based response rules, and they can dynamically adjust a user access to dynamically limit threats in real time.
>
> **[3:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=221)** AIs can be used to detect normal behavior patterns of users in order to determine bot-like activity and bad actor patterns.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=231)** They're better at noticing when compromise credentials may be in use and they can identify risky access patterns.
>
> **[3:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=239)** They can recommend user role refinement in order to improve just-in-time access, and assist you in your ability to follow industry best practices, such as least privileged principles.
>
> **[4:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=253)** AI can be useful in governance as well.
>
> **[4:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=256)** They can interpret and enforce policy and provide continuous compliance monitoring with automatic policy violation detection, and real-time adjustment in order to speed recovery.
>
> **[4:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=271)** AI can also make intelligent policy recommendations that can improve your overall compliance by analyzing how your IT operation systems actually work as opposed to how you think they should be working.
>
> **[4:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=287)** AI can also automate compliance reporting and maintain continuous audit readiness.
>
> **[4:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=294)** This not only will improve your overall compliance, but reduce the cost of validating and the cost of auditing your compliance.
>
> **[5:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=304)** The actual strategies for effectively using AI for security and compliance are well beyond the scope of this course, but many AI enabled tools and systems are on the market now, and more products and capabilities are being created daily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (11), [[Security]] (11), cloud (2), data (2), management (1)
> **Analogies:** just like (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Why use the cloud for AI/ML?
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=0)** - [Instructor] In today's world, AI is an important part of nearly every modern product architecture decision.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=7)** I don't think too many people would disagree with that statement.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=11)** But AI isn't a cloud technology.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=14)** You don't need the cloud to implement an AI strategy.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=18)** So why is AI so important in a cloud architecture course?
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=23)** Well, while you can use AI and have an AI strategy without ever touching or using any cloud resources, the cloud is a natural avenue to implement your AI-enabled product strategy.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=37)** It turns out, the needs for AI match very effectively the capabilities of cloud providers.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=45)** The synergy between AI and cloud is unmistakable.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=50)** What are some of the advantages of using AI in the cloud?
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=54)** First, elastic resources.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=56)** Cloud applications can dynamically scale AI resources up and down based on demand.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=63)** Given the huge resource requirements for AI, the ability to leverage relatively inexpensive, on-demand computation and storage is a huge benefit to meet the needs for AI-intensive workloads.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=79)** This is true whether you directly implement your own AI strategy on your own systems and simply use the cloud as a source of computation and storage resources, or you leverage an AI service provider that either uses the cloud or are themselves a cloud provider.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=98)** Resource requirements of AI are very well-suited for cloud resource allocation.
>
> **[1:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=104)** There is a reason why the leaders and heaviest investors in AI technology are also all the major cloud providers.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=114)** Second, managed services integration.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=118)** There are tons of AI services available on all of the major cloud providers, making integration using cloud technology a natural fit for AI-intensive workloads.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=130)** Additionally, the cloud's natural predisposition towards DevOps and infrastructure as a service workflows and the natural extension to AI-automated infrastructures, as we talked about in a previous video, this makes the use of cloud infrastructures a much easier decision.
>
> **[2:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=150)** Third, data.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=152)** Many, if not most, AI workloads are also data-heavy endeavors.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=158)** The availability of massive and relatively inexpensive data storage in cloud environments means it's a natural fit to run the AI workloads in the same cloud environments.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=171)** There are, however, some disadvantages of using AI in a cloud environment.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=176)** First, cost structures for cloud computing can become an issue.
>
> **[3:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=182)** If you do not keep a close handle on your cloud spending, your spending can easily grow out of hand when you put AI into the picture.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=192)** While this isn't a cloud-specific issue, per se, the cloud economics model does enable and encourage easily increasing resource consumption consistent with the needs of AI with an increasing price tag that matches.
>
> **[3:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=209)** Lack of monitoring and cost control can cause sticker shock in the end.
>
> **[3:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=215)** Second is vendor lock-in risks.
>
> **[3:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=217)** This again is not unique to AI capabilities, but the ready availability of sophisticated, cloud-specific AI tools make it easy to become locked into single-vendor cloud solutions because of their specific AI capabilities that they offer.
>
> **[3:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=236)** Third is privacy and compliance.
>
> **[3:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=238)** AI has enabled a new need to focus on privacy and compliance issues, which also has been a concern historically with basic cloud infrastructures.
>
> **[4:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=249)** The combination of AI and cloud means an even greater need to make sure privacy and compliance strategies are up-to-date and effective.
>
> **[4:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=259)** Disadvantages notwithstanding, the cloud and AI are very closely entangled.
>
> **[4:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=266)** And the need for applications to leverage AI technology will only increase the push to have a broad and effective cloud strategy in place as well.
>
> **[4:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=277)** The cloud and AI are nearly inseparably linked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (33), cloud (32), data (3), [[Privacy]] (3), product (2)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** we talked about (1), previous video (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 9. The Edge of the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### The Internet of Things
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=0)** - [Instructor] The cloud is a virtual world of computation.
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=4)** But what happens when you want the cloud to become physical and real?
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=10)** The internet of things is where the virtual cloud touches the physical world.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=16)** The internet of things, or IoT, are physical devices that are distributed across the physical world that perform actions used by the cloud to perform analysis or control in the physical world.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=31)** By far, the simplest example of IoT devices are your basic smart home devices, your smart thermostat, your Wi-Fi enabled light bulbs, doorbell cameras, and Amazon Alexa enabled assistants are all examples of IoT devices.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=49)** These internet-enabled remote devices allow cloud systems and applications in the cloud to access, monitor, and change our physical world.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=62)** Now, Wi-Fi enabled light bulbs are cool and everything, but they're just the tip of the iceberg for the capabilities of the internet of things.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=71)** Consider, for example, a modern manufacturing facility.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=76)** Traditional factories relied on manual monitoring, operators checking machines periodically, recording measurements, and trying to identify potential issues before they became serious problems.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=90)** IoT transforms and automates this model.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=97)** Modern factory facilities deploy sensors throughout their operations, continuously collecting data about machine temperature, vibration, power consumption, and output quality.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=109)** All of this data is sent to the cloud for realtime data analysis and processing.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=115)** More and more, modern applications often involve monitoring and controlling our physical world.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=123)** How does IoT impact your architectural view of your cloud applications?
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=129)** The biggest way is at scale.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=131)** When we talk about large scale IoT applications, we talk about applications that deal with potentially millions of devices.
>
> **[2:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=142)** Each device, a thermostat, a camera, a probe, a light, all require a connection to the cloud and to your cloud-enabled application.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=153)** Each device generating or consuming data requires management.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=160)** And due to the sensitive nature of what most IoT devices work with, security is essential, both the security of the data created by the IoT device, as well as security of the physical device itself.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=176)** You don't want a bad actor to be able to unlock your front door and turn off your alarm, and businesses don't want competitors to access data from their factory floors.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=188)** IoT requires a massive network of highly secured network connections among millions or billions of devices, all controlled and managed from centralized applications.
>
> **[3:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=202)** This scale creates a unique architectural challenge in data management, network utilization, and system architecture.
>
> **[3:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=213)** This is the heart of edge computing, and edge computing is one of the fastest moving growth areas of the cloud.
>
> **[3:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=222)** IoT devices are remarkably diverse in what they can do.
>
> **[3:46](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=226)** Some are simple measuring devices, perhaps costing less than a dollar each.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=231)** Others are large, complex devices with full computational power of their own costing thousands and thousands of dollars or more.
>
> **[4:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=242)** Some devices are tiny battery-operated devices that can last years on a single battery.
>
> **[4:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=249)** Others are complex devices tightly integrated into large and immobile systems.
>
> **[4:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=255)** Whatever the devices are, managing, securing and monitoring them at scale is necessary for them to operate as designed, and modern cloud applications are used for this process.
>
> **[4:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=271)** Even if you aren't specifically architecting large scale IoT systems, you'll likely be building IoT enabled capabilities into your applications either now or in the near future.
>
> **[4:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=283)** As such, understanding the importance of IoT and edge computing in general is important for you in your role as a software architect.
>
> **[4:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=295)** What are some of the architectural challenges of IoT?
>
> **[4:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=299)** First and foremost, scale.
>
> **[5:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=301)** A single application can be managing millions of IoT devices.
>
> **[5:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=306)** Your edge-enabled applications must be able to scale to handle a rapidly growing number of remote devices.
>
> **[5:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=315)** Next is security.
>
> **[5:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=317)** Keeping data sent from the probe secure and preventing bad actors from doing physically dangerous or undesired actions in the physical world is of course critical.
>
> **[5:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=329)** The massive number of probes are a major architectural security challenge.
>
> **[5:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=336)** Third is data management.
>
> **[5:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=338)** Some IoT devices generate a ton of data and that data must be imported, scanned, processed, and stored at scale.
>
> **[5:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=349)** And finally, networking.
>
> **[5:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=351)** Creating network systems that can handle massive amounts of data traffic is a critical to keeping these systems operational.
>
> **[6:02](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=362)** IoT architectures typically employ several distinct layers to provide these capabilities to your cloud-based applications.
>
> **[6:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=372)** First is the device layer.
>
> **[6:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=374)** This is where the physical devices, the sensors, actuators, lights, probes, et cetera, this is where they're all located.
>
> **[6:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=382)** Next is the edge layer.
>
> **[6:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=384)** This is where local computation occurs.
>
> **[6:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=387)** This is computation that is physically near the actual physical devices.
>
> **[6:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=392)** It might be part of the probes itself.
>
> **[6:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=395)** This layer handles device communications and local management and processing tasks.
>
> **[6:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=401)** It's the thing that makes the physical probe connected to the cloud.
>
> **[6:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=407)** Next is the communications layer.
>
> **[6:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=409)** This is where the massive amounts of data that are sent from the remote device layers to the central application that's stored in the central cloud.
>
> **[7:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=420)** Next is the cloud layer.
>
> **[7:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=421)** This is where centralized core processing and data storage is maintained.
>
> **[7:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=429)** And finally, the application layer.
>
> **[7:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=431)** This is where the business value of these devices becomes fully realized and the devices become part of a valuable system.
>
> **[7:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=440)** Each layer requires architectural decisions around scale, security, and reliability, but also consistency.
>
> **[7:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=449)** When you're deploying millions of sensors, having a single, consistent model for working with those sensors is essential.
>
> **[7:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=459)** If each sensor has a different access method, a different deployment model, different code base, there's no way any single application could handle a large quantity of such devices.
>
> **[7:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=472)** So, building consistency and repeatability into the process of building, deploying, and managing the sensors themselves is architecturally critical.
>
> **[8:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=486)** IoT is causing traditional, rephrase.
>
> **[8:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=490)** IoT is causing traditional, centralized cloud computing models to shift into a more distributed architecture, dramatically increasing the complexity involved.
>
> **[8:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=502)** This is the heart of edge computing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (19), cloud (17), data (14), [[Security]] (6), application (5)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Extending the cloud to the edge
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=0)** - [Instructor] While cloud computing continues to grow, where the cloud is growing is shifting.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=6)** Centralized computing, while still important in the core of cloud computing, is being outpaced by the massive growth in edge computing.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=17)** Edge computing represents a fundamental evolution in cloud architecture.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=22)** Leading much of this growth in edge computing is the Internet of Things, as discussed in the previous video, but edge computing is more than just monitoring sensors and controlling relays.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=34)** Edge computing is much more than that.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=38)** Consider a modern automobile.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=41)** A modern car is not just a mechanical and electrical device.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=45)** A modern car has many onboard computers to process everything from spark plug ignition and fuel injection to climate control and seat positioning.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=58)** In modern automobiles, many, if not most of these onboard computers, are also connected to the internet and communicate with centralized cloud computation capabilities.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=71)** Cloud computation is needed for many obvious modern car features, such as GPS navigation systems and remote starter capabilities.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=82)** But cloud computation is much more sophisticated in modern cars than just this.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=88)** Safety features such as crash detection and automatic calling of emergency first responders are becoming more commonplace, as is data collection in order to make sophisticated determinations on the health of the automobile itself, and when a service or an update might be required.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=109)** Modern automobiles use and coordinate hundreds of on-car sensors, processing the data locally, and making decisions locally, ultimately communicating to centralized cloud resources.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=123)** These automobiles are large remote edge computation nodes.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=129)** Ultimately, they are edge devices in a distributed cloud.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=134)** This edge computation trend will continue as automated driving capabilities become more commonplace.
>
> **[2:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=141)** Ultimately, self-driving cars will basically be sophisticated cloud-enabled computation devices capable of advanced AI analysis using data collected from onboard sensors, and sensors from other vehicles, and sensors in the road itself to make the driving experience safe and convenient.
>
> **[2:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=164)** Why is this remote computation capability of the cloud so important?
>
> **[2:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=169)** Well, for a few reasons.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=172)** A self-driving car makes extensive use of video cameras to determine what's around in its physical environment.
>
> **[3:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=181)** These video images must be analyzed by advanced AI systems to determine what's safe and what's not safe for the car to actually do.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=191)** Even simple backup cameras in use today need advanced video analysis to detect hazards and sound an alarm to the driver if something moves in its way.
>
> **[3:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=202)** If all of this video processing was done in traditional centralized cloud environments, there is no way we could handle the network requirements of the millions, or is it really billions of video feeds that would be needed to be processed to keep all cars on the road safe.
>
> **[3:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=224)** And what would happen if one car lost its internet connection?
>
> **[3:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=229)** It'd be bad enough if your backup camera didn't detect the fence that you were about to back into.
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=235)** But what if a fully self-driving car, depending on an internet connection to drive, suddenly lost that connection on a fast, crowded highway?
>
> **[4:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=245)** Well the result would be disastrous.
>
> **[4:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=248)** This is the value of edge computing.
>
> **[4:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=250)** Rather than centralizing all of this computational processing in the cloud, this sophisticated video processing occurs in the car itself.
>
> **[4:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=261)** Sophisticated AI systems run in your car and process all of that data to make whatever decisions are necessary and perform all of the necessary actions, all locally.
>
> **[4:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=275)** Then, summary data, and summary data only, is sent to the centralized cloud for further non-real time data processing.
>
> **[4:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=285)** That way if an internet connection goes bad on a self-driving car, you might not be able to see what traffic is like in the miles ahead, but you could keep the car driving safely all the time.
>
> **[5:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=300)** This is just one example of edge computing.
>
> **[5:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=303)** Other uses of edge computing include factory floor process monitoring, security system monitoring, and other complex processes and system management tasks.
>
> **[5:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=315)** Edge computing represents a fundamental shift in cloud computing away from a centralized cloud to a distributed cloud.
>
> **[5:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=324)** The modern edge-enabled cloud consists of four main parts.
>
> **[5:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=329)** First, the device edge, this is the computing resources within typical IFT devices themselves.
>
> **[5:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=336)** This is the automobile, the self-driving car.
>
> **[5:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=340)** The next is the near edge.
>
> **[5:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=343)** This is local computing resources like gateways and edge servers.
>
> **[5:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=347)** This is your car's brain in the self-driving car example.
>
> **[5:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=351)** This is the AI that's running in your car.
>
> **[5:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=356)** Next is the far edge.
>
> **[5:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=359)** This is regional cloud facilities located close to users, yet centrally used by multiple devices.
>
> **[6:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=367)** In the self-driving car example, this might be a cloud node in Seattle, for example, that manages all traffic-enabled devices in the Seattle area.
>
> **[6:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=378)** And finally, the centralized cloud.
>
> **[6:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=380)** This is the traditional central cloud resources we typically think of today as the cloud.
>
> **[6:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=387)** This diversity of cloud needs creates additional challenges for the modern architect.
>
> **[6:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=394)** They now have additional things they must consider in their architectural decisions.
>
> **[6:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=399)** Latency, what are the latency requirements and bandwidth constraints imposed on the system being architected?
>
> **[6:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=407)** If a video image from a car camera has to be processed, has to be processed in 20 milliseconds for it to be useful, then it can't be sent to a cloud where it might for example require a few seconds to get a response.
>
> **[7:03](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=423)** Bandwidth constraints.
>
> **[7:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=425)** Sending millions and billions of video streams to the central cloud is really a non-starter.
>
> **[7:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=430)** So at what level should what data be processed, analyzed, and summarized before being sent to the centralized cloud?
>
> **[7:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=440)** Processing requirements.
>
> **[7:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=441)** How large of a computer system is needed in the automobile to handle the necessary AI processing that the automobile requires?
>
> **[7:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=451)** How will that answer change over the years a typical car is in use?
>
> **[7:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=460)** Reliability and failure tolerance.
>
> **[7:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=463)** What happens if a node loses its upstream cloud connection?
>
> **[7:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=467)** What should be the node's immediate response to the loss?
>
> **[7:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=471)** What should it eventually do to try and recover?
>
> **[7:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=475)** And cost.
>
> **[7:57](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=477)** The more we utilize edge computation, the less we can depend on the cost advantages of centralized resource sharing.
>
> **[8:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=486)** Where is the trade-off of where a certain piece of computation should occur?
>
> **[8:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=491)** And how does that decision impact overall system cost?
>
> **[8:16](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=496)** How are the major traditionally centralized cloud providers handling this industry trend from the centralized cloud computation that they have focused on to the distributed edge computation?
>
> **[8:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=510)** Well, quite frankly, they're embracing it at full speed.
>
> **[8:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=515)** Services like AWS Outposts and Azure Local are designed to bring cloud capabilities to edge locations and help cloud architects design and build distributed cloud systems and applications.
>
> **[8:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=532)** Keeping on top of security, reliability, and availability is critical for all cloud systems, but even moreso for distributed cloud applications.
>
> **[9:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=545)** Distributed cloud applications must design for autonomous operation when cloud connectivity is lost, implement intelligent data filtering to process data locally when possible, and only pass on what is necessary to the higher layers.
>
> **[9:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=563)** Maintain security across this complex, multi-layered distributed network, plan for variable load and all scaling requirements, both at the small level, the device level, and at the large level, the centralized cloud.
>
> **[9:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=581)** And account for resource constraints and limits that are imposed by the types and number of edge devices and nodes that we use.
>
> **[9:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=590)** Edge computing doesn't replace cloud computing.
>
> **[9:53](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=593)** It extends it.
>
> **[9:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=595)** The distributed model enables new applications that couldn't be implemented with purely centralized or purely distributed applications.
>
> **[10:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=604)** Yet edge computing dramatically increases the architectural complexity of our applications.
>
> **[10:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=611)** The future of cloud architecture lies in this distributed edge computing model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (40), data (10), ai (5), [[Security]] (3), node (3)
> **CLI Commands:** make (3), node (3), aws (1)
> **Analogies:** such as (2), for example (2)
> **Env Vars:** gps (1), ift (1), aws (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 10. Cloud Sustainability and Green Computing

[↑ Back to Table of Contents](#table-of-contents)

#### The environmental cost of computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=0)** - [Presenter] Computing has revolutionized our world, but this transformation comes at a cost.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=5)** Computing, all types of computing, pose a significant cost to our environment.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=11)** This is no less true for desktop computation as it is for cloud computing.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=17)** Let's look at an example.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=19)** A typical data center consumes enormous amounts of energy.
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=23)** A data center requires huge quantities of electricity to power all of those servers and storage devices.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=30)** This by itself is an enormous electrical load, but powering the computers is only part of the cost.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=37)** For every kilowatt of electricity that you put into a data center, an equivalent amount of heat is generated.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=45)** That heat has to be dissipated to keep the systems from being destroyed.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=50)** A data center typically spends as much cooling of a data center as it does powering its systems, perhaps even more.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=59)** The same is true with all computer centers, large and small across the globe.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=65)** The scale of this power usage is huge.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=69)** In fact, data centers alone worldwide currently consume about 3% of all global electricity that's produced.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=79)** That's worldwide electricity usage, and this number is continuously growing.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=87)** This amount of electricity puts a huge toll on our environment in several key areas.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=93)** First is electricity.
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=95)** While green sources of electricity are becoming popular, non-green sources of electricity, which have a huge environmental impact, are often needed.
>
> **[1:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=107)** Cooling.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=109)** Besides the power requirements of cooling, the heat itself that is generated needs to be dissipated somewhere.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=116)** More and more data centers are using water-based cooling systems, making data centers a significant consumer of available local water, which is often in short supply.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=128)** Three is lifecycle.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=130)** Servers and other equipment typically have a lifespan of only three to five years.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=135)** That means there is a constant turnover in equipment.
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=139)** This means equipment must be constantly manufactured to replace obsolete equipment, and the manufacturing process has a major environmental impact, both on power and on the use of precious minerals.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=154)** But also it means that obsolete equipment must be disposed of, creating a huge ongoing disposal challenge impacting the environment.
>
> **[2:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=164)** Besides the data centers, the network that is used to connect all of us to the internet and hence to all of these data centers uses substantial resources that also consume power and natural resources.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=179)** Traditional IT computing practices often make these environmental problems even worse.
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=186)** Systems are over-provisioned to handle peak loads and system failures.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=191)** This means that traditional computation systems are dramatically underutilized.
>
> **[3:18](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=198)** Historically, we do not optimize for efficient use of computing resources.
>
> **[3:23](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=203)** Computers and storage are cheap, and it's often easier and actually less expensive to simply use more rather than optimize your applications to try and use less.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=216)** Resources are historically not shared between applications.
>
> **[3:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=221)** Applications were isolated so that they could be easier managed and controlled.
>
> **[3:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=227)** This lack of sharing creates waste.
>
> **[3:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=230)** And traditional IT approaches within organizations themselves often leads to a lack of sharing across groups, meaning unneeded duplication of resources within an organization as a whole.
>
> **[4:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=244)** A huge amount of our computation capability is left unused, unneeded, but still impacting the environment.
>
> **[4:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=253)** The environmental cost of computing represents a significant challenge, but it's also driving important innovation in the industry.
>
> **[4:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=262)** Organizations are increasingly recognizing the economic value of environmental efficiency.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=269)** This recognition is leading to new approaches in data center design, computing architectures, and resource management.
>
> **[4:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=277)** The shift towards more sustainable computing isn't just about environmental responsibility.
>
> **[4:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=284)** It's about creating more efficient, effective computer systems.
>
> **[4:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=289)** How does this fit into cloud computing?
>
> **[4:52](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=292)** We're going to explore that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), power (5), cloud (2), management (1), next (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### Why the cloud is greener than on-premises
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=0)** - [Instructor] Believe it or not, but the cloud is good for the environment.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=5)** Why is that a true statement?
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=8)** Because the model of cloud computing offers significant environmental advantages over the traditional on-premise computing model.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=17)** This is driven by the fundamental differences in how cloud resources are utilized compared to traditional on-premise resources.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=27)** In short, the move of computation from on-premise systems to cloud-based systems is good for the environment.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=35)** There are several reasons for this.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=38)** First, resource utilization.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=42)** Cloud providers operate at a scale that enables much higher resource utilization than typical on-premise data centers.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=51)** Traditional data centers often run at only about a 10% or 15% or 20% actual utilization of the resources available.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=61)** While cloud providers often usually achieve more like 65% or 70%, or even higher utilization rates by the resource pooling techniques and workload sharing that's enabled by cloud enabled applications.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=80)** Second, resources on demand.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=84)** By allowing resources to be added to an application quickly and effectively, it's possible and also safe and cost effective to run your application substantially leaner.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=98)** Rather than having excess capacity lying around to handle surges, you can simply add additional capacity quickly the moment it's needed.
>
> **[1:47](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=107)** This allows your applications to run steady state in a leaner environment.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=114)** This leaner operation means for a typical load, you need fewer resources to run the application because you don't need the same level of spares lying around to handle the scaling spikes and server failures that you do In a typical on-premise data center.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=132)** Third, infrastructure efficiency.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=135)** By merging tens of thousands of applications and data centers into a handful of major cloud providers, we achieve an efficiency of scale that wouldn't be economically viable in individual on-premise data centers.
>
> **[2:31](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=151)** This economy of scale allows innovation in high efficiency power distribution systems, advanced cooling technology and facilities purpose built for specific environmental conditions.
>
> **[2:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=165)** The latter is a very interesting point.
>
> **[2:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=169)** Centralized cloud computing has allowed the major cloud providers to invest in novel technology to create efficient data centers.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=179)** Novel technology that would never have been invented without a centralized focus on them.
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=186)** For example, data centers no longer need to be located near large population centers.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=193)** Power and cooling are at a premium in the center of a major city where data centers traditionally have been located.
>
> **[3:20](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=200)** But because of modern technology innovations, data centers can now be located in remote environments where there's no people around, and where power and cooling are less expensive, and can be achieved using greener technology.
>
> **[3:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=216)** For example, data centers can be built near a river where a local dam provides electrical power and the river itself can be used to assist in heat distribution in a greener way than it can be in the center of a large, major metropolitan center.
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=235)** As an extreme novel example, some cloud providers are investing right now in submergible data centers that take entire data centers, puts them inside of a tube and submerges that tube underwater.
>
> **[4:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=251)** The surrounding water provides an efficient and low power cooling, resulting in significantly reduced energy usage.
>
> **[4:21](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=261)** This technology would not have even been contemplated without the centralization of data centers within major cloud providers.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=269)** Finally, operational excellence.
>
> **[4:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=272)** For most companies operating a data center is not their core business, but it's something they just have to do for their business.
>
> **[4:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=279)** But the cloud service providers operating data centers is their core business.
>
> **[4:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=285)** This leads to optimized maintenance procedures, continuous monitoring and improvement, regular upgrades to more efficient equipment, and an overall organizational desire to optimize all aspects of data center resource consumption.
>
> **[5:05](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=305)** Renewable energy is the key to sustainability and data center operations.
>
> **[5:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=310)** Through strategic data center placement, improved operational efficiency, and efficiency of scale, and investment in renewable energy innovations cloud providers are able to make moving your application from a typical on-premise data center to a modern cloud-based system, an environmentally green activity.
>
> **[5:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=334)** This helps all of us now and even more in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), cloud (15), power (5), application (4), business (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud Center of Excellence (CoE)
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=0)** - [Instructor] A Cloud Center of Excellence or a CCOE is a team or set of teams in an organization that focus on and manage the cloud skills in the enterprise.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=12)** This includes everything from selecting cloud providers and tools to migrating applications and data to the cloud, to managing ongoing cloud operations.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=22)** Not all organizations may need a CCOE, but creating one can help an organization that is struggling with integrating the cloud into both your application and your organizational cultures.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=35)** How does a cloud CCOE help an organization?
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=38)** By helping an organization struggling to adopt a cloud first mindset.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=43)** It helps the organization learn how to use the cloud in a predictable and cost-effective way.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=50)** Cloud Center of Excellence helps an organization to manage the cloud specific skills in the enterprise and ensure that everyone in the organization is using the cloud in a consistent and safe manner.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=64)** A CCOE helps an organization to provide a starting point for the organization to develop consistent cloud application management and operation processes and procedures.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=75)** It helps to provide a central point of contact with cloud vendors and an advocate for the organization as we interact with those cloud providers.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=84)** It helps to manage and coordinate enterprise migration projects and develop a roadmap for migration projects.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=92)** It helps to provide a central location for cloud training and education, and the CCOE helps to provide a means of measuring and reporting on the impact and success of the cloud within the organization.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=105)** What does a cloud center of excellence look like within an organization?
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=109)** There are many different ways an organization can structure their cloud center of excellence, but there are some common elements that are found in most successful CCOEs.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=118)** Typically, the CCOE is a single team or a set of teams that are centrally managed with direct control over all aspects of the cloud operation.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=129)** The CCOE is responsible for ensuring that all other teams in the organization are using the cloud in a safe and consistent manner.
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=139)** Ambassadors from the CCOE are embedded in every other team in the organization.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=144)** These ambassadors act as a conduit between the CCOE and the rest of the organization, providing information and support to teams as needed.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=154)** The CCOE provides a conduit for the development teams and the operations.
>
> **[2:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=159)** Along with a conduit to cloud vendors and partners, the CCOE also provides a conduit of information to upper management so they can understand what is going on and how it is working.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=171)** The CCOE also provides a resource for subject matter experts for the marketing organization to leverage, to create public facing material, and for the sales organization to develop sales training material and to provide support for face-to-face meeting with customers.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=188)** It is important that everyone is aware of the cloud transformation that is occurring in the organization, and they are educated in how to utilize the cloud services provided.
>
> **[3:19](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=199)** The CCOE helps make this organizational communication transformation possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (24), teams (5), application (2), management (2), data (1)
> **Env Vars:** ccoe (13)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lee Atchison]]

## Skills Covered

- Cloud-Native Architecture
- Solution Architecture
- Cloud Computing

## Path Context

### In [[Build an Enterprise Cloud Architecture]]
← [[Cloud Architecture- Design Decisions]] | **2 of 4** | [[Cloud Security Architecture for the Enterprise]] →

## Appears In

- [[Build an Enterprise Cloud Architecture]]

## Related Courses

_Courses sharing skills:_

- [[AWS Essential Training for Architects]] — Cloud-Native Architecture
- [[Cloud Quantum Computing Essentials]] — Cloud Computing
- [[Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI]] — Cloud-Native Architecture
- [[Introduction To Cloud Computing For It Pros]] — Cloud Computing
- [[Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios]] — Cloud Computing

---

[↑ Back to top](#)