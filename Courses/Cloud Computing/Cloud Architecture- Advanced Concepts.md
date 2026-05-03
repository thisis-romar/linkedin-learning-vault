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
created: 2026-05-03
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

#### [Orchestrating your cloud architecture](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/orchestrating-your-cloud-architecture-25351358?u=76281980&t=0)** - [Lee] Once a sideline for [[Application Development]], the cloud is now mainstream in almost all modern applications, built and operated by most companies, certainly almost all software-enabled companies. In this course, we will discuss the types and structure of cloud architecture, and how to choose which model works best for your application. We will discuss the use of service-based architectures and how they work, and in fact, are enabled by cloud-based infrastructures. Then we will talk about the newest addition to modern application architecture, and that is AI or [[Artificial Intelligence (AI)|artificial intelligence]] services, and how these services are a growing part of your [[Cloud Infrastructure]] architecture strategy. Hi, I'm Lee Atchison, and I've been working in the cloud since the very start of [[Cloud Computing]]. If you are ready to take your cloud expertise to the next level, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Development]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Cloud Infrastructure]] (1), [[Cloud Computing]] (1)
> **Speakers:** - [lee] (1)

#### [Course audience](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/course-audience-25359344?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/course-audience-25359344?u=76281980&t=0)** - [Instructor] You should take this course if you are a software architect currently involved or contemplating a cloud project, a senior software developer or senior operations engineer that's interested in the architectural aspects of [[Cloud Computing]] or wanting to become a cloud architect, are a manager or a director of a team developing an application that will leverage the cloud. If you're not yet an architect, but are considering becoming an architect, I would recommend first taking my [[LinkedIn]] course, [[Software Architecture]] From Developer to Architect, before taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[LinkedIn]] (1), [[Software Architecture]] (1)
> **Speakers:** - [instructor] (1)

#### [Intricacies of cloud architecture](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=0)** - [Instructor] How do cloud architectures differ from non-[[Cloud Infrastructure]] architectures? Cloud architectures benefit from easy scaling. With traditional architectures, adding capacity is often a complicated and expensive ordeal. Cloud architectures, on the other hand, can scale more easily and predictably because they rely on pooled resources. Resources are shared across multiple consumers. When one person has a traffic spike, resources can be switched over to handle that additional traffic. As demand goes up, more resources can be brought into play easily and quickly. If you have a sudden spike in traffic, you can increase the number of resources available to your application to allow your application to handle the additional traffic. Conversely, if there's a lull in traffic, you can reduce the number of resources allocated, freeing those resources to be used by other customers who might have their own traffic spikes. This resource management is programmatic, and the resource management can be automated. You can define your infrastructure in code and then deploy it via cloud APIs. Cloud APIs enable faster resource allocation in general. But even more importantly, cloud APIs enable the ability to build repeatable infrastructures. Repeatable infrastructures are also resilient infrastructures.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=93)** You see, cloud architectures tend to be more resilient than traditional architectures. This is because they are typically built using multiple virtual servers working in unison. When one server fails, it can be quickly and automatically replaced with an exact duplicate, keeping the application functional. Additionally, using multiple geographic cloud regions enables redundancy. This means that your data will still be available even if a server or an entire data center goes offline. One big concern most people have about the cloud is cost. Isn't using all this automation and availability expensive? Well, many people say that cloud architectures are more expensive than non-cloud architectures. Others, though, well, they actually say the opposite. The truth is, a properly constructed cloud application will save money versus the cost of running the same application in a traditional data center. There are a lot of reasons for this, reasons we will talk about throughout this course. But basically, by taking advantage of cloud automation and repeatability, you can build systems that scale quickly and repair themselves easily. This means fewer redundant resources are wasted. The savings in wasted resources ultimately offsets the costs associated with the cloud.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/intricacies-of-cloud-architecture-25352348?u=76281980&t=190)** But if you don't build your application to take advantage of those capabilities, then you end up paying for those additional resources anyway, and the cloud can end up being more expensive than an on-premise equivalent. If you use the cloud exactly as you do your on-premise servers, you will lose money. If you optimize your application, or said differently, if you build your application to be cloud-centric and effectively use the capabilities of the cloud, you'll save money. Understanding the intricacies of cloud architecture is critical for modern [[Application Development]]. Understanding when to leverage a unique cloud capability versus using generic infrastructure components, you know, such as simple servers, is a critical skill that the cloud architect of a modern application must understand. When to leverage the cloud, how to leverage the cloud, and how much to leverage the cloud are critical architectural decisions for modern architects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (1), [[Application Development]] (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Types and Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Public, private, and hybrid cloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=0)** - [Instructor] Okay. Let's start with a foundational look at the difference between the different approaches to [[Cloud Computing]], Private Datacenter, Public Cloud, Private Cloud, [[Hybrid Cloud]]. How do these variations impact your ability to leverage cloud capabilities? Well, let's first start with talking about a basic Private Datacenter. A basic Private Datacenter consists of standalone servers, standalone [[Databases]], and standalone networking, and networking configuration. All the services implemented on these servers and databases, and any third party services used need to be set up, and run on these servers and databases. In this model, you're pretty much responsible for almost everything. All networking infrastructure, all server infrastructure, all physical infrastructure, power, networking, backup power, those sorts of things. All database software and database maintenance, all third party application maintenance and all operational aspects of the system. Everything in the application stack is essentially your responsibility. Often the virtualization layers though don't even exist. You run your application straight on top of the server's operating system, the base operating system, bare metal [[Hardware]]. Next, let's talk about the Public Cloud. Now, the Public Cloud, you still have standalone servers, but most of the time these servers are virtual servers.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=92)** You have standalone databases, but often these databases are part of a managed service provider that's provided by the cloud provider. You have various levels of [[Cloud Services]] that are available to be consumed by your application. These are things like caching, messaging, all the way up to AI, machine learning, and even business services such as email, and calendar management. Many third party services are provided by the cloud provider. In a public cloud setting, the issues that you are responsible for are very different than they are in your own Datacenter. You are responsible for all server setup, and [[Server Configuration]]. You are responsible for all data and data maintenance, but you're often assisted by the cloud providers. The cloud providers can provide tooling, and such to be able to manage, and help you manage your data appropriately. And of course, you are responsible for all application level management. The cloud provider on the other hand, is responsible for you know, the fundamental base infrastructure, the base networking, the base server infrastructure. They're responsible for the operation, and management of cloud services and tooling, and they're responsible for the operation, and management of all third party services. The public cloud provider gives you the base infrastructure, and you provide the application specific infrastructure and tooling. Finally, let's talk about the Private Cloud. The Private Cloud provides the capabilities of the Public Cloud, but in a Private Datacenter setting, it makes sure all the virtualization layers
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=187)** are present for virtual computing, networking, et cetera. All the software that runs in the Private Cloud is run on premise, and is of course your responsibility. And as with a traditional Datacenter, you are basically responsible for all of the infrastructure. Everything that takes to run the Private Cloud setting. Software makes the services that are running in your Datacenter look cloud-like, and you get some benefits of the cloud. For example, you get an API-based infrastructure configuration. You can allocate virtual servers, store objects, send messages, et cetera, all from an API based system, allowing automatic configuration, and setup of infrastructure components. And this can provide a consistent interface between the public and the private cloud. But you also get some of the disadvantages of running on premise. One of the big ones is resource constraints. Your resources are tied to your resource availability, your own personal resource availability, the resources you have available in your private Datacenter. In a public cloud setting, you get to leverage the volume of all the other customers in the public cloud setting. So if you need a burst of resources for a short period of time, you can almost always get them because of the resources that are available, and are shared by a larger number of of people. But in a private cloud, you don't get that. You are limited by the number of resources that you own and have in your own Datacenter. If you want to be able to burst access to a larger number of servers,
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=281)** you have to physically have those servers available to you installed, and set up by yourself in your own Datacenter. So you don't get that advantage of the Public Cloud of the resource or stability. And these resources have to be purchased, which means capitalized, not on demand borrowed. And that basically means you can't use a cost of good sold model for allocating hardware costs like you can with a Public Cloud environment. Well, why would anyone consider a Private Cloud? Well, there's a few reasons. First, they might like having API based infrastructure configuration that might be valuable to them for a variety of reasons having to do with the way they build and deploy their applications. They're not allowed to use the Public Cloud. This might be for security reasons or other corporate policy reasons or industry reasons. We will spend a lot more time talking about these reasons later on. They use both their own Datacenter, and the Public Cloud, and want a common set of tools to manage the infrastructure in both in environments. This is the classic hybrid cloud model part of your application running into Public Cloud, part of your application running in your own Datacenter. But this model is also used by customers who are migrating from the their own Datacenters to a Public Cloud. They implement a Private Cloud in their own Datacenter in order to make the application look like it's running in the cloud, and that makes the final step of moving to the Public Cloud a lot easier step. However, usually when you talk about
>
> **[6:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/public-private-and-hybrid-cloud-25352350?u=76281980&t=373)** hybrid cloud, you're talking more about steady state situations than this migration state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[Hybrid Cloud]] (3), [[Hardware]] (2), [[Cloud Services]] (2), [[Cloud Computing]] (1)
> **Prerequisites:** set up (2), setup (2)
> **Env Vars:** api (3)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** basically means (1)
> **Speakers:** - [instructor] (1)

#### [Multicloud and polycloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=0)** - [Presenter] What about when you need more than one Cloud? This is where multicloud and polycloud come into play. In this video, we'll look at the differences between a multicloud and a polycloud infrastructure. Multicloud is when a single company system or application makes use of more than one Cloud provider. For example, if you use the capabilities of both AWS and [[Google Cloud Platform (GCP)|Google Cloud platform]], GCP, for your application, you are using multicloud. Additional Cloud providers can also be added in, resulting in several Cloud providers being used at once. A given application or system can use multiple public Cloud providers or their own data centers as a private Cloud. All of this can lead to a complex interaction of Cloud capabilities. A generic multicloud is when your application makes use of multiple Cloud providers. Some of your application runs on servers in AWS and some of your application runs on servers in GCP and/or [[Microsoft Azure|Azure]]. Some of your application runs in your own data center. This situation can often happen accidentally, haphazardly. Different groups within a company will make different decisions on using different Cloud providers. Different customers have different requirements making it necessary for your application to run on multiple Cloud providers,
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=94)** and different product needs over time causes different decisions to be made at different times, resulting in a complex interaction between multiple providers. But sometimes multicloud happens by plan. For example, if a business is concerned about the reliability of putting their entire application in the hands of a single Cloud provider, they could set up two providers to add a level of redundancy. You may actually enter into contractual agreements with multiple Cloud providers, so that you can leverage each other to try and get the best pricing and best services possible from each provider. Two sources of a service are often better than one. But more often than not, multicloud happens because you need the specialized capabilities of different Cloud providers. You may want your main application running on AWS because they provide great general purpose computing, yet you have some [[Microsoft]] [[Windows]] workloads, so you decide you want to run those workloads on the [[Microsoft Azure]] Cloud. But you also might be in need of specialized services that are only available through [[Google]], perhaps a specific AI service or a geolocation service using Google's massive business database. So you run the parts of your application
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/multicloud-and-polycloud-25354417?u=76281980&t=186)** that need those specialized capabilities in GCP. This type of multicloud where you run different parts of your workload on different cloud platforms in order to take advantage of unique capabilities of each specific platform is called polycloud. Polycloud is growing into the most popular form of multicloud. Most of the time when I talk to customers, when they are interested in talking about or using multicloud, what they're really talking about specifically is polycloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Microsoft Azure|Azure]] (1), [[Microsoft]] (1), [[Windows]] (1)
> **Env Vars:** aws (3), gcp (3)
> **CLI Commands:** aws (3), make (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Selecting the right cloud type](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=0)** - [Speaker] It's important to understand which major architecture, cloud provider, and number of providers make sense for your applications. In this video, you'll learn how to identify what is best for your unique scenario. There is a lot of fact and fiction that goes into selecting the right type of cloud architecture for your application and which cloud providers you should utilize for your application. Should you run on a private cloud in your own data center? Should I run entirely in a public cloud or should I use a [[Hybrid Cloud]] environment? Should I utilize one or more than one public cloud provider? Is multi-cloud important to me and should I use more of a polycloud environment where I leverage the unique capabilities of each cloud provider? Multicloud without polycloud advantages rarely makes sense unless you are required to use it for some company policy or external customer requirements reasons. As a generic model, it rarely makes sense. This is because the main motivation, aside from a policy or customer requirement reason for moving to multicloud has to do with trusting a single provider. It's often believed that using multiple cloud providers gives you more advantages, higher availability,
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=94)** better vendor control, better pricing, et cetera. But rarely, rarely do these advantages actually play out, yet the disadvantages of having to run on multiple cloud providers add real overhead to your application. What are the disadvantages? Well, there's two primary disadvantages. First, learning curves. The two providers will undoubtedly have different services with different APIs and different operating characteristics for those APIs. By running in both, you need expertise in both, and second is cost. You might consider that using two cloud providers in order to leverage those capabilities that you can get the cheapest from each provider. That might be a reason why you're doing it. In fact, you may think you can negotiate better rates with one provider by using the threat of another provider to move your workload over to you. These types of negotiations rarely work with cloud vendors because commodity pricing means you are typically already getting the cheapest price you can get for a given provider. The best thing you can do to lower your per resource pricing is to use more of a single provider. You see, providers give you cost breaks based on the amount of their resources that you are consuming. The more of a provider you are using,
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=188)** the better price you'll get from that provider. Splitting your workload across multiple providers decreases your usage of each provider. This increases your cost per resource and hence, your total cost goes up. Additionally, data transfer between providers is not free, and in some cases, it can be very, very expensive, depending on your application. These costs can dwarf all of your other cloud costs, making the use of two providers more expensive than using a single provider. Yet, these disadvantages aside, non-polycloud, multi-cloud is still growing in popularity. In fact, there is a new model that I'm starting to hear more about that is trying to address the learning curves and API differences between multiple cloud providers in a generic multicloud application, and that's called sky computing. Sky computing is the attempt to put a generic API layer on top of multiple cloud providers and using the generic API for all cloud interactions. It's trying to genericize the cloud. This is not the first attempt to do this, early in the cloud history, a focus on an open cloud API tried to do this with very, very limited success.
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=281)** In my mind, sky computing is trying to solve the wrong set of problems. It's trying to make multiple cloud providers look the same, so your application can run generically across them all, but it's not addressing any of the reasons why you might want to do that. It's not solving the learning curve problem because you still have to maintain multiple knowledge bases for each of the different cloud providers that you are actually using, and it also doesn't solve the financial aspect of multicloud computing. In fact, sky computing removes one of the major advantages of multicloud, and that is the ability to differentiate your workloads based on capabilities of each individual cloud provider. Sky Computing forces you to think of the cloud providers as generic providers and discourages you from utilizing provider-specific capabilities and hence, provider-specific advantages. Meanwhile, polycloud tries to do the exact opposite of all of this. It focuses on the unique capabilities of each cloud provider in order to leverage the unique capabilities of each cloud provider. So when using multicloud, which is better, Sky Computing or Polycloud? You've probably guessed my answer from this discussion. In my mind, the answer is clear.
>
> **[6:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-cloud-type-25354421?u=76281980&t=374)** Polycloud provides you real advantages of using a multicloud environment while Sky Computing tries to sugarcoat away some of the problems and doesn't really address any real concerns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hybrid Cloud]] (1)
> **Env Vars:** api (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [speaker] (1)


### 2. Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding microservices](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=0)** - [Instructor] Understanding [[Microservices]]. Modern applications require modern architectures to thrive and prosper. In a traditional model, monolithic applications are one large piece of code for all of an application and all of the responsibilities that, that application has to have. All development teams that are responsible for this application are working on this one application, usually in one code base and one set of resources, one set of capabilities. All teams work together on that one application. But a modern application uses a service architecture, divides code by business logic. Each service has its own data, its own business logic, and ultimately its own set of responsibilities. One team owns each service and no more than one team per service, so each service ends up with one unique team that owns it. A team can own multiple services, but each service is owned by one team and each service operates independently. It can be independently built, tested, deployed, operated from all the other services in the application. This allows a great level of [[Scalability]] in your application construction by dividing responsibility in the smaller segments, so each team can work as independently as possible on the entire application as a whole. Communication between services creates a network that builds larger applications and larger services. This is the typical model of a service
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-microservices-25351357?u=76281980&t=96)** or a microservice-based architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (1), [[Scalability]] (1)
> **Speakers:** - [instructor] (1)

#### [Why use microservices?](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=0)** - [Instructor] So why should you use a service or microservice-based architecture? Well, in a traditional monolithic application, all developers share the same development space. This limits [[Scalability]] on many aspects. It limits the number of developers who can work in this single application, it limits the number of concurrent projects and activities that can go on. If you have a limited number of developers, there's a limited number of projects they can be working on. It can be very difficult to deploy an application that's very large with a large number of people working in different projects in it. So, you're limited by the number of deployments you can put out, and you are limited by the number and the size of instances it takes to run the application, which ultimately limits the number of users and data size and things like that. This makes the monolithic application hard to manage and hard to control and hard to use in the modern world. Service architectures, on the other hand, divide the business logic requirements into different services. Each service takes on a different part of the business logic requirements and the team's own individual services. This means that different teams can be working on different projects or have different focuses, and they can each work productively, independent from each other. This allows your teams to scale so you can have more people working in the application, working in more projects within the application. It gives you a team focus, and that team focus allows you to have a localized view of the world, a localized view of the complexity
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-use-microservices-25357341?u=76281980&t=93)** of the application, allowing you to focus and do more within that one area of influence. Further, the service architecture allows more localized testing, and so you can test individual services and have a better feeling that then it will work fine within a larger application environment. And each service can be deployed independently, making it easier to deploy individual components and allowing you to deploy more often, a smaller amount of changes each time, limiting the blast radius, if you will, of the change. This makes your deployments more reliable and safer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Types of services](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=0)** - [Announcer] The [[Microsoft Word|word]] "service" is overused. This is because there are many types of services. Here are some that are important. An application service, it's a custom built component that provides an interface that performs some specific business logic. In a best practice that is a completely self-contained module, and it makes use of API calls to communicate between services. Traditionally, some services can be small and some can be quite large. Microservice is a special case of an application service that is very common in modern application architectures. A microservice is designed to be small enough for a single person to be able to understand how the service works completely. A single team can manage all aspects of the service. A cloud service is an offering of a cloud provider or a third party that provides a specific capability to application developers. Often these capabilities could have been built as an application service by a single customer, but now are generic enough that a cloud provider creates the service and makes it available to a larger number of customers. To some example of [[Cloud Services]] include Amazon S3, Amazon RDS, which is a a [[MySQL]] or [[PostgreSQL|Postgres]] database, Amazon Elastic Beanstalk, Amazon Simple Queue Service and AWS ElastiCache. ElastiCache happens to be a service that implements an open source version
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/types-of-services-25357342?u=76281980&t=94)** of the rightest database. Examples of a third party service are another version of [[Redis]] called Redis Enterprise that is provided on AWS, but by a third party, in this case, Redis Incorporated. So a cloud service can be provided by the cloud provider or by a third party. Typically, when you talk about the services provided by the cloud, you are either referring to cloud services provided directly by the specific cloud provider or by a third party providing additional cloud services on top of the cloud provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (3), [[Redis]] (3), [[Microsoft Word|Word]] (1), [[MySQL]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** aws (2), api (1), rds (1)
> **CLI Commands:** aws (2), mysql (1)
> **Definitions:** is a  (2), is an  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [announcer] (1)

#### [Running microservices in the cloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/running-microservices-in-the-cloud-25351362?u=76281980&t=0)** - [Instructor] We will focus on application services for the [[Representational State Transfer (REST)|rest]] of the videos in this section, specifically on microservice architectures. Microservice architectures benefit from team ownership and management. A single team owns a microservice, and manages all aspects of that service, including both the creation of the service and operation of that service. Operation of microservice architectures benefits from cloud technologies. The resource allocation model in the cloud greatly supports team-level resource owning. This is because teams can allocate and free their own resources based on their own requirements. They need a server, they can get a server. They don't have to go through a complex IT-driven process of getting a server allocated to them. They can just create one in the cloud for their own purposes. Teams can use the underlying [[Cloud Infrastructure]] as a kind of base and do not have to build expertise in those areas. They don't have to worry about things like power and physical plan, networking, server management, and similar low level requirements. The cloud does all of those things for them. And teams talk to the cloud provider the same way their application services talk to other application services, by using APIs. This is a language that developers understand and can appreciate. The cloud simply becomes an extension of their microservice architecture, supporting the architecture, and extending the architecture when it's needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Infrastructure]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Data and Data Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Data storage in the cloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=0)** - [Instructor] Data is the most important asset that you store in the cloud. Data comes in all sorts of shapes and sizes. It comes as text or document data. It can come as columnar or tabular data. And it can come as structured data. And there are many different types of patterns you use to access that data. You can access data file by file, file segment by file segment, or you can do get and set to read and write attribute-based key-value data. You can do row by row and tabular data. And you can use complex structured queries to get at data in all ways. Different types of data require different storage techniques. Different access patterns require different database technologies. The result of all this is a large variation in the types of [[Data Management]] services that are available for you in the cloud. Let's look at the major ones. First there's object storage. A simple example of object storage is Amazon AWS S3. It stores huge quantities of data, typically accessed an object or a file at a time. It's highly scalable access patterns. It's highly scalable storage capacity. And it's relatively inexpensive for giant datasets. And in fact, it's virtually free for small datasets. Highly reliable, high availability, and extremely high durability. The second data type is unstructured [[NoSQL]] [[Databases]]. These are key-value data stores, such as [[Redis]] or [[MongoDB]].
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=98)** This stores typically smaller amounts of data, and the individual data value is accessed in random access ways using simple procedural calls. It's characterized by highly scalable access patterns but a moderate quantity of storage. It's quicker and easier to access individual data values within the dataset. It has an easy ability to replicate and scale horizontally. And sometimes you can do trade-offs of durability versus speed by making the database a memory-based database, for instance, or vice versa. The third is structured databases. These are used to store large quantities of structured data. They're characterized by highly scalable access patterns, a high quantity of storage, but typically, less than S3, structured access to the data, and high performance when the schema is planned around the query optimizations. They typically require understanding how you're going to access the data, what access patterns you're going to use, before you store the data in order to create a scalable schema for that's high-performant to access to the data. Failure to create a quality schema can result in extremely poor performance. Structured data can be further broken down into [[SQL]] and NoSQL structured databases. Structured SQL databases tend to be more flexible, while structured NoSQL databases tend to be more scalable. The schema determines the performance for structured SQL,
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-storage-in-the-cloud-25355362?u=76281980&t=192)** while the schema tends to determine the API, and therefore, what types of operations are even allowed, for structured NoSQL. Examples of structured SQL are [[MySQL]], [[PostgreSQL|Postgres]], and the cloud-based Amazon Aurora database. Examples of NoSQL are Amazon's DynamoDB. SQL databases tend to be flexible in their ability to access data, while DynamoDB is rigid, and what you can reasonably do is dictated by what the schema is and how the indices are set up. Going against an indices design in MySQL is a performance hit, but doing so in DynamoDB may make a query completely untenable. This means SQL databases are more tolerant to poor schema designs than data stores such as DynamoDB. On the other hand, designed correctly, DynamoDB provides big scaling advantages over databases such as MySQL. MySQL certainly can handle large quantities of data, but DynamoDB scales up in performance much faster and much more conveniently than an SQL database can scale. How you want to use your data determines how you structure your data and what services you use to store and access your data. And that's the topic of the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (8), [[SQL]] (7), [[NoSQL]] (5), [[MySQL]] (4), [[Data Management]] (1)
> **Env Vars:** sql (7), aws (1), api (1)
> **CLI Commands:** mysql (4), aws (1), make (1)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (2)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Data across services](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=0)** - [Instructor] We've been talking about application data, but most modern application architectures involve using multiple services working together to make an application as a whole. Modern applications require modern architectures in order to thrive and prosper. We talked about this in the previous chapter. One question does come up though, When you're creating your overall product cloud architecture, where should you put the data? There are two common models for where to store data in a service-based architecture. The first is the global model. In this model, your data is global to the application, and each service that needs access to a particular piece of data can access the data it needs from the shared data store. Most data is stored in a single type of data store, but you might use more than one type for different types of data, such as putting most of your data in an [[SQL]] database. But videos and something like S3, you can still do that. But all the data is available to all the parts of the application. There are a couple problems with the global model. One problem is schema management. Any schema change has to be understood immediately by multiple services, and those services may require simultaneous and sometimes synchronous deployments in order to make that happen. This limits the usefulness of some types of [[Databases]]. In particular, SQL databases may have a problem with resource requirements when you have multiple entities accessing the data simultaneously.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=94)** This makes scaling the application even harder and tied closer to difficult database scaling plans. A better model is to use the service model. In the service model, all data is owned and accessible by only one service. Data is split across many services. You may need to access multiple services in order to get all of the data you need to perform some task. Data should be owned by the service that is responsible for managing that data. And anyone who wants to use that data needs to send a request to the owning service in order to get the data that it needs. Individual services can decide what storage model makes sense for the data they manage, whether it's DynamoDB, [[PostgreSQL|Postgres]], [[Redis]], S3, whatever, varies service by service and the service itself decides when and how schema changes occur and that one service is solely responsible for doing those schema changes. The advantages of this model is it enables better scaling options than the global model. Each service can scale their data needs as makes sense based on the access patterns that's required for their data. And schema management isn't limited to the owning service. Inner service [[API Management]] is used to change the shape of the data that is communicated between services, but this does not require simultaneous schema changes. So given all of this, my recommendation in almost all cases, modern cloud applications should use the service model
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/data-across-services-25356373?u=76281980&t=190)** for data ownership rather than the global model. In almost no cases does the global model make sense. What about downloadable videos, photographs stored in S3 that might be used by multiple services? Well, the videos and photographs should be owned by an asset management service, and I'll request to use that downloadable asset should be sent to that shared service and processed and handled by that single service. What about other shared data like log files or profile information? In almost all cases, it makes sense to encapsulate the data in a service, and that service is part of a infrastructure or platform layer to your application that is leveraged by all of the other services that require that data. This leaves schema management, performance management, scaling, et cetera, to be owned by the encapsulating service, which limits the impact and the scope of those changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Databases]] (2), [[PostgreSQL|Postgres]] (1), [[Redis]] (1), [[API Management]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (2), api (1)
> **Cross-References:** we talked about (1), previous chapter (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Selecting the right data model](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=0)** - [Instructor] Which data store do you use for a particular purpose? Well, that depends on your data, the format, and how you intend to use it. In most cloud providers, there are services that manage each of these types of data. Let's look at some data use cases, specific examples, and what [[Cloud Services]] might make sense for that type of data. First, let's look at an example of an application that uses large video assets. This needs storage of large giant files and it needs to store them inexpensively, but you also need the ability to access the entire content rapidly for streaming purposes. And reading the content requires higher performance than writing. Reading is higher performance than writing. This is perfect for an object store such as Amazon S3. Now let's look at another example. In this case, let's use user profile information, user profile information used in many different applications. Well, for this, you need structured storage for general types of information, names, addresses, phone numbers, all that sort of profile information. And this is perfect for a key value store. Persistence is important. This is information you want to keep for long periods of time, but rapid reading is important, but so is writing and updating, but probably at a slower rate. This is perfect for a key value store such as [[Redis]] or AWS ElastiCache, which can persist data permanently and act like a real permanent database. But rapid reading on some
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=94)** of the data may suggest you might also want to use a a memory-based data cache in the front end, and Redis can work for this as well, or something like Memcached might also work. The next example, let's look at log files. Log files are generated by multiple sources within the application and the infrastructure. They require rapid writing. Lots of lines of logs get written very, very quickly, but the writing of the logs requires you to have virtually no impact on the performance of the writer. The services that are writing the log files should not feel the impact of having to do the writes of the logs. So, large quantities of data, written very, very quickly with very little impact, and this data needs to be stored for long periods of time. Then later, you'll analyze the data using AI or machine learning or other techniques, and this analysis that occurs later can occur at different speeds and different purposes. It's offline processing, typically. Flat files work just fine for this sort of model, and in long-term these can be stored in Amazon S3. But so does a structured table from a [[NoSQL]] data store like DynamoDB. That also works for storing log files. Okay, let's look at an ecommerce site, now, that generates orders. How do you store the order details, the results of the order? Well, this generally requires random access, read/write, of course, at scale, lots of coordinated data,
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=187)** highly related data, relational data, and it might also require asset compliance. Asset compliance is transactional data. These are requests that you only complete if the entire request can be completed, all or nothing. These are important for financial transactions. You don't want to process the order unless the payment goes through, and you don't want to send a payment through if you can't process the order, that that sort of thing. For this structured [[SQL]] [[Databases]] may be in order. They're very good at doing asset compliance, very good at related data, relational data, so databases like [[MySQL]], [[PostgreSQL|Postgres]], et cetera, and in the cloud, RDS and Aurora are great examples. For the next example, let's look at photographs, an application that stores and processes or stores and displays, photographs. This has the same set of concerns as large video assets. The files are of different size, but there may be more of them, and so you still need storage for large quantities of data inexpensively, and you need to be able to access the entire content rapidly for reading at scale. Again, this is perfect for an object store such as Amazon S3. But let's expand this example and talk about also wanting to store [[Metadata]] for the photographs. Well, in this case, the metadata probably is stored separately from the photographs because that data is structured data, and you probably store that in a related relational database. Or you might use a structured data key value store like Redis. But again, it needs to be something that's persistent
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/selecting-the-right-data-model-25355363?u=76281980&t=281)** and it's not large quantities of data like the photos themselves, but the data you do keep, you want to be able to get access to in the random access fashion very quickly. This is perfect for a Redis-type structure key value store, or for a SQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (4), [[SQL]] (2), [[Databases]] (2), [[Metadata]] (2), [[Cloud Services]] (1)
> **Env Vars:** sql (2), aws (1), rds (1)
> **CLI Commands:** make (1), aws (1), mysql (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)


### 4. Serverless Computing

[↑ Back to Table of Contents](#table-of-contents)

#### [Advantages of serverless computing](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=0)** - [Instructor] One of the major advents of the cloud was the ability to request infrastructure resources on demand. Initially for computation, this meant requesting the allocation of a computer for your use, then freeing up that computer when it was no longer needed. What software did that computer run? Whatever you wanted it to, for as long as you needed it. But why allocate computation resources a server at a time? Why not at smaller scales? What about a process at a time or even a procedure at a time? This is where [[Serverless Computing]] comes to play. Serverless computing is allocating computation resources when needed at the process or procedure level without needing to allocate full servers. Let's look at some examples. When you want to run an application in the cloud, you historically had to allocate an entire computer, set up the software on the computer, including the operating system, then run as many copies of your software as would fit on that server. When you needed to add more software instances, you added more computers. In serverless, however, when you want to run an instance of a piece of software, you simply request an instance of that software to be run. The software, in any quantity, is run, and there's no need to manage the underlying server infrastructure. The infrastructure is run by your cloud provider. Software in a serverless environment can be launched a process or a thread at a time, and then you control how many instances you want running,
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=94)** or it can be launched procedure by procedure by using an event to trigger the execution of a given procedure. In AWS, there is Lambda. In [[Microsoft Azure|Azure]], there are Azure functions. In [[Google]], there are cloud functions. There are differences, and they're not compatible with each other, but they all act and run very similarly. What are the advantages of serverless? Well, there's no need to manage operating systems, operating system software, and other pieces of the infrastructure. You are operating higher up the stack, which means, overall, less management is necessary. You can provide more granular resource allocation, which typically means less wasted resources, is more focused on the Application Layer and less focused on the underlying infrastructure that's running it. Presumably, this all means your operations load is simpler and easier. Now, let's take a step back for a second. Let's talk about the difference between serverless and serverless computing. They really aren't the same thing. We've been talking about serverless computing, and when most people say serverless, they typically mean serverless computing. They talk about services such as AWS Lambda, but there actually are other types of serverless. The term serverless applies to any type of cloud resource that can be allocated without needing to worry about the underlying server infrastructure needed to implement it.
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/advantages-of-serverless-computing-25351361?u=76281980&t=187)** For example, S3 is a serverless file storage. When you use S3, you allocate buckets, files, or objects. You don't allocate servers that store files. SQS is a queuing service. You allocate queues and you create messages, not servers that store queues and messages. Probably the best way to think about this is look at two service comparisons here. Let's look at two database services, namely Amazon RDS and Amazon DynamoDB. These are two database services that operate very differently. DynamoDB, you allocate tables and rows, you allocate indices. These are all database concepts. You never consider the underlying servers that operate the database. You don't say, I need a server of x size to hold this database. That's all hidden from you. This is a serverless database. RDS, on the other hand, is a database where you allocate the servers. You pick a size of the server by specifying computation capabilities, network capabilities, and memory requirements. This is a server-based database. You don't allocate an RDS server based on the number of tables you want to use. You allocate it based on the amount of memory you want to have in a server that runs the database. So DynamoDB is a serverless database, while RDS is a server-based database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (5), [[Microsoft Azure|Azure]] (2), [[Google]] (1)
> **Env Vars:** rds (4), aws (2), sqs (1)
> **Definitions:** is a  (7)
> **CLI Commands:** aws (2)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Disadvantages of serverless computing](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=0)** - [Instructor] Let's stay focused on [[Serverless Computing]] for now. In the previous video, we talked about the advantages of serverless computing. Well, serverless computing also has disadvantages as well. Serverless computing tends to create more complex applications as there tend to be more moving parts. Serverless technologies such as Lambda drive the size and shape of the service that makes up the application rather than the application architecture driving the size and shape of the services. This tends to drive the application services to be smaller and smaller overall. Smaller services means more services for a given application. More services means more complex application architectures. Serverless applications tend to be more complex. Another disadvantage of serverless is serverless tends to have variable performance capabilities. Most servers, even most virtual servers, give a reliable and predictable performance curve. This allows you to build applications that have relatively predictable performance and gives you easy tools within your control to improve performance. Serverless computation, on the other hand, such as AWS Lambda, do not give you that level of predictability and performance. One procedure, which takes 10 milliseconds to execute one time may take 15 milliseconds another time. Worse, it could take 500 milliseconds every once in a while, but why is it that there's that much of a variation?
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=95)** It has to do with how serverless is constructed. The underlying infrastructure needs to load the underlying procedures the first time they are used, but once they're warmed up, they can execute in the future much faster. Given that an application might have tens or hundreds of instances that are operating on its behalf, every once in a while a new instance needs to be warmed up, depending dramatically on how the usage profile works. The result, unpredictable performance curves. So serverless computation can be extremely unpredictable. This makes building predictable performance applications problematic. Additionally, serverless can be expensive. Serverless is actually pretty inexpensive when used correctly, but when overused, the cost premium of serverless can become significant and your computation cost for a given task can easily run out of control. This leads to the greatest point I want to make. Serverless is just a tool. Like all tools, it has a use and it's very good at that use. Also, like all tools, if used for the wrong task, it doesn't work well at all. In fact, it can even fail for some tasks. Serverless is great for some tasks and it isn't great for other tasks. Many times I've had people come up to me all proud with themselves and say, we managed to build our latest application and we used nothing but serverless functions. Isn't that great? Well, no, it isn't great. It means you bought one tool
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/disadvantages-of-serverless-computing-25353361?u=76281980&t=190)** and used it for everything, whether it was a right tool or not. Don't be proud of force fitting a tool to solve all problems. Instead, use it for the parts of the problem where it makes sense. Use other options, including traditional computer instances where they make sense. I'd rather hear people come up and tell me we managed to build our latest application and we used modern development and operation techniques, including serverless and other cloud technologies. Our application is efficient, performant, low on technical debt, and easy to manage. I'd much rather hear that comment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (4)
> **CLI Commands:** make (2), aws (1)
> **Cross-References:** previous video (1), we talked about (1)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Serverless computing and your applications](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=0)** - [Narrator] So this discussion begs the question, when should you use serverless? Let's start with this. What about using it for simple tasks that occur in an event architecture with asynchronous results? Things like analyzing generated log files, looking for trends or problems, processing imported photographs to change the size, shape, resolution, and make them available for use in different use cases, inbound data from IFT devices that needs to be processed and stored, typically asynchronously. Serverless is very, very, very good for these sorts of actions, but for high performance synchronous activity, don't use serverless. As the complexity of tasks increase and the level of synchronization required increases, serverless becomes less and less viable. Cases where consistent performance is important, like real time tasks, image recognition, and self-driving car, for example. It's not good for this sort of a use case. When performing tasks that require heavy computation, [[Data Processing]], real time or not, serverless works for this, but it often is not cost effective to use serverless computation. What about the front end of a website? This involves processing page loads for a webpage. Well, this one's a tough one. It depends on the website and customer expectations. Can you handle variable performance? Do you have predictable demand? Are variations planned and predictable, or are variations unpredictable? If using servers, can you scale up servers to handle increased demand?
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/serverless-computing-and-your-applications-25355361?u=76281980&t=94)** Are the computation requirements heavy? Is cost a concern? Depending on the answers to these questions, serverless may or may not make sense over a more traditional, server-based web front end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ift (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. Cloud Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud vs. on-premises security](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=0)** - [Instructor] The biggest cloud myth I hear from customers is, "I can't use the cloud for security reasons." This is a strongly held view in certain industries and even in certain parts of the world. Certain industries, such as private [[Banking]], and in certain parts of the world, such as in parts of Europe, including Switzerland, the cloud has reduced penetration into those markets and those locales in strong part due to concerns about security. Some of the most common reasons I hear for why a company can't move to the cloud have to do with security. "Our data is too sensitive to put into the cloud." "We can only trust servers that are in our data centers." "We can't trust someone else with the security of our systems." As the cloud has matured and our use of the cloud matured along with it, many of these concerns have gone away. But in conservative industries, in conservative parts of the world, they're still very prevalent. And even still, individual companies, less progressive companies, still fight this battle internally. In reality, a cloud-based system often provides a more secure environment than an equivalent on-premise solution. Well, how can that be? To start, it's in the cloud provider's best interest to make sure their cloud offerings are safe and secure, and that the applications you build on top of the cloud are safe and secure. Cloud providers like AWS hire many high-end expert security leaders and engineers
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-vs-on-premises-security-25351363?u=76281980&t=94)** all focused on making the cloud secure for themselves and their customers. Security is so important to cloud providers that they invest heavily not only in keeping their infrastructure secure, but also invest in providing the tools and training so that customers of the cloud know what it takes to keep them safe. This is an investment in security that you get built into the cloud. It's an investment that is unavailable to you in your own data centers. Even if you have a solid security department, the constructs of the cloud make it naturally more secure than you could ever make your own data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1)
> **CLI Commands:** make (3), aws (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging cloud provider expertise](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=0)** - [Instructor] Keeping your application secure in the [[Cloud Infrastructure]] is actually a joint responsibility. Both the cloud provider and you have a role in keeping your application safe. It's a principle known as the principle of shared responsibility. It's a principle championed by AWS, but certainly applies to all cloud providers. This principle provides the model for security for your application running in the cloud. It says that the responsibility for keeping your application safe is shared by both parties. There are specific responsibilities for keeping the cloud infrastructure itself safe. These are the responsibility of the cloud provider, and there are specific responsibilities for keeping your application itself safe. These are your responsibilities. The pieces that are your responsibility, the cloud provider gives you tools that help provide a secure environment for your applications. These tools include things like identity and access management services, tools for stopping bad actor traffic from entering your infrastructure, and tools to monitor and identify when a bad actor might be working on breaking security. And finally, logs and diagnostics that can tell you after an event what actually happened and how to keep it from repeating. Each service and each cloud provider may have a different model for implementing the shared responsibility principle. As a simple example, in the world of AWS, the [[Amazon EC2|EC2]] service has a specific shared responsibility model. In the AWS EC2 shared responsibility model,
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=98)** AWS is responsible for the physical security of the facilities that house the cloud [[Hardware]]. This is the AWS data centers, appropriate for the specific region and availability zones that you are using. The physical security of all hardware. Network infrastructure security, and security of the virtualization system and individual virtualized servers. And you are responsible for the security of the operating system running on that server. The security of all the software running on your servers, whether that's third-party software, daemons, monitors, et cetera, and the security of all the applications that you have built that you're running on the servers; the security for all data that you store on the server, or transfer on and off the servers, and the responsibility for securing all of the credentials that you use to access all of the cloud resources, [[Cloud Services]], and software. Finally, you are responsible for all policies you need to enforce, standardized [[System Configuration]], and other system constraints and requirements. Now, every service has a similar model, and every cloud provider may provide a different dividing line between your responsibility and their responsibility. It is your responsibility to understand the policies in use for the cloud services you are using and to conform to the requirements of those policies. Failure to follow these procedures can result in a failure in security anywhere in the cloud service,
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/leveraging-cloud-provider-expertise-25357344?u=76281980&t=191)** whether the failure is in your area of responsibility or the cloud provider's.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (2), [[Amazon EC2|Ec2]] (2), [[Hardware]] (2), [[Cloud Services]] (2), [[System Configuration]] (1)
> **Env Vars:** aws (5), ec2 (2)
> **CLI Commands:** aws (5)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Security zones](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=0)** - [Announcer] It's generally considered best practice for security purposes to split your application infrastructure into security zones. This is so that security breach in one area can still be limited to resources that exist only in that zone. While there are many models that are considered best practices, a common model involves three standard zones, namely a public zone. This is the zone that is connected directly to the internet and is exposed to traffic coming from the internet. It's the least secure zone in the zone that is most often vulnerable for compromises. A private zone, this is the backend zone connected to the internal backend networks and services. It's where most data is stored and where most critical systems exist, it's a zone that has the least access to the internet and has the highest level of security protections in place, a demilitarized zone or DMZ. This is a zone between the public zone and the private zone that acts as a go-between, between the public and private zones. All communications between the public and private zone go through services in the DMZ and the primary purpose of services in the DMZ is to provide high levels of protection for the private zone from services in the more vulnerable public zone. In the cloud, these zones are normally constructed using multiple Virtual [[Private Clouds]] or VPCs to implement each of these zones. Sometimes there are multiple versions of each zones with an instance of each zone in each geographic region where the application is actually operating.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/security-zones-25358322?u=76281980&t=94)** The VPCs use various networking and application level security provisions, such as network access controls, security groups, and software and [[Hardware]] firewalls to limit traffic and increase security. Often the cloud providers give you tools to manage these security settings and properly set up and manage the necessary permissions to secure your application. Providing you these tools and settings is the cloud provider's side of the principle of shared responsibility. Your side is understanding what settings are required for your application to allow the application to function, yet limit or remove access from non application components to your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Private Clouds]] (1), [[Hardware]] (1)
> **Env Vars:** dmz (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [announcer] (1)

#### [Identity and permissions in the cloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=0)** - [Instructor] Another critical principle in maintaining a safe and secure application running in the cloud is to understand the principle of least privilege. This principle is not really a cloud specific principle, but it applies to cloud infrastructures and it is a critical best practice for building a safe and secure [[Cloud Infrastructure]]. The principle of lease privilege is an industry standard, an important security principle. The idea of the principle of least privilege is to only grant an entity the minimum permission necessary for it to perform its operations and no more permissions. This is best described by an example. Let's assume we have an application, and let's assume the application needs to read objects contained in an S3 bucket named mydata. The application only needs to read these objects. It doesn't need to create, update, or delete the objects, that's run by another application. The application also only needs access to this single bucket. It doesn't need access to any other bucket. Given this requirement, we could give the application access to all S3 buckets in the account, that would allow it to access to the needed bucket. However, this is a bad idea because the service doesn't need access to any other bucket. Giving the application access to other buckets could mean it could access information that it really isn't supposed to have access to. The application becomes compromised. It could accidentally or maliciously access to wrong data causing a major security vulnerability.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=96)** Or a compromised application you may not know whether it had access to that data or not, and you may have to worry about whether or not that data is compromised, whether it really is or not. Instead, what we could do is give the application complete access to the mydata bucket, but nothing else. This also is a bad idea, because this would allow the application to delete objects, or change existing objects, and there is no business reason for the application to be able to do that. If the application becomes compromised, it could delete critical objects that it shouldn't have access to. Even a simple defect in the application could cause objects to be deleted by mistake or potentially allow other bad actors to change or damage other objects in the bucket. In both cases, the application has more permissions than it requires, so a problem with the application could cause more damage than it should cause. The application has a larger blast radius than it should have, because it has more permissions than it really needs. A better permission model would be to only give the application read axis to the single bucket mydata and no other access or permissions and no other bucket. This gives the application all of the access it requires, but it also reduces the access to unnecessary objects. If the application becomes corrupt or maligned, it can't cause unnecessary damage to objects that it doesn't have access to.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/identity-and-permissions-in-the-cloud-25354419?u=76281980&t=190)** Its blast radius is significantly smaller. Most cloud providers allow you to create finely detailed permission models that allow you to grant only the permissions you need to an application and no additional permissions. This increases relative security within the entire application infrastructure. This is known as the principle of least privilege. Give resources, only the permissions that they actually require.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (1)
> **Definitions:** is a  (3), is an  (1), known as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 6. Constructing a Cloud Infrastructure

[↑ Back to Table of Contents](#table-of-contents)

#### [Dynamic infrastructures](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=0)** - [Narrator] Dynamic infrastructures is the ability to provision and deprovision infrastructure resources on demand. This allows for more efficient use of computing power that would otherwise be wasted when unused or underutilized. It also helps to lower the cost by giving users the flexibility to only pay for what they need at any given time. An example of a dynamic infrastructure is an application that utilizes autoscale in order to dynamically grow and shrink the size of your application based on the resources required to operate the application at that particular moment. Dynamic infrastructures allow additional resources to be brought online quickly to handle sudden changes in traffic levels. As traffic levels go up, more resources can be allocated. As traffic levels go down, those resources can be freed, either automatically or by a manual request. But in both cases, dynamically and on the fly. Dynamic infrastructures allow failing resources to simply be terminated and replaced with fresh resources. If a server gets corrupted or even simply a process starts acting poorly, rather than diagnosed the problem, simply terminate the server and replace it with a new one. This capacity makes it easier to upgrade software and allow easy resource replacement. This allows expanding availability with redundancy in geographic additions for greater performance based on needs.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/dynamic-infrastructures-25354418?u=76281980&t=94)** It also reduces cost. You pay for what you currently need, not for what is pre allocated. It also lets you shift expenses from a capital expenditure to a cost of good sold expenditure. This is good for the business and for the CFO.

> [!info]- Semantic Content
>
> **Env Vars:** cfo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Infrastructures brick by brick](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=0)** - [Instructor] Applications aren't monoliths, or at least they shouldn't be. Applications are constructed as a network of components all working together. One advantage of the cloud is that you can leverage components that you build as well as components that are built by the cloud provider or other companies like [[SaaS]] software in order to build your application. Let's take a look at a simple example. A very simple app might consist of code that runs in response to requests from the web. It needs the application code that makes up the application itself, but it also needs a database backend. That database might be provided by a DB as a service by the cloud provider. You don't need to provide the database yourself. The cloud provider can provide that for you. You might use a front end module like Nginx in a container that you run yourself in your own infrastructure, you know, on a set of your own servers, or you might use a cloud provider's load balancer. You might need to store large files such as videos or images on an object store like Amazon S3. You might need a CDN to deliver a static content quickly and effectively to your users, either provided by the cloud provider or a third-party service provider. You might use a log management service to collect logs from all of these places. Feed it to a SaaS service provider for processing, alerting, or diagnostics. So this simple app has code that you wrote, developed for the application specifically,
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructures-brick-by-brick-25352349?u=76281980&t=95)** components that you are operating that you got fully assembled like Nginx in the container, [[Cloud Services]] that you're leveraging like your database as a service, or Amazon S3, and third-party services that you've linked in and used within your application. All of these modules, working together, create a full application satisfying the needs of the user and the business. The cloud enables and encourages this type of brick-by-brick application construction, and cloud architecture is as much an infrastructure architecture process as a code architecture process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (2), [[Cloud Services]] (1)
> **CLI Commands:** nginx (2)
> **Env Vars:** cdn (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Infrastructure as code](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=0)** - [Presenter] How do you build these sorts of dynamic infrastructures and complex brick-by-brick infrastructure architectures? Well, you can hand assemble all the pieces you need. There's a console application for the cloud provider and for most third parties. You stick together the components you need piece by piece. But there's a problem with that. It's easy to make mistakes. It's hard to replicate either because you're building both the staging and production and want them to be identical, or you're building multiple, replicated production data centers across the country or across the globe. And you can't track when things change. How it might impact the site and correlate problems with those changes becomes difficult. Rather than hand assemble the infrastructure using the console of the cloud provider, creating and allocating their necessary components, instead, leverage the fact that the cloud providers and most [[SaaS]] and [[IaaS|infrastructure as a service]] companies have APIs that allow configuration of their services. You want to leverage tools that will piece together all of the infrastructure components, calling the APIs as necessary to build the infrastructure. These tools utilize a written description of the infrastructure that you require. This written description can be updated and the tools will automatically update the real infrastructure to match the description. This model is often called [[Infrastructure as code (IaC)|infrastructure as code]], and there are many different tools that can help with this capability. Some of these tools are provided
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=92)** by the cloud providers themselves, such as AWS CloudFormation. Some are third-party tools. The most popular, and arguably best of these, is [[Terraform]]. But there are many others, including Chef, Puppet, and others. The tools differ in how they function and how they describe their infrastructure. Some use a declarative approach, describing what you want the infrastructure to look like. Some use an imperative approach, describing what you need to do specifically in the APIs to set up the infrastructure the way you want it to be. But they all have a basic tenant in common. They provide a written description that is used to construct your infrastructure. Now, that written description itself can be treated as if it was code, meaning it can be stored in a revision control system, such as [[Git]], which allows you to track changes and implement review and approval process models just like you do for code. This using a code-like model for describing infrastructure is why the term infrastructure as code is used. This model has many advantages in the cloud world. Your infrastructure is well-documented in a clean and unambiguous manner. This is necessary for the tools to be able to create your infrastructure. Changes to the infrastructure are tracked with the same tools used to track other code changes. You can't update your infrastructure without leaving a breadcrumb trail. And changes can go through the same types of review processes that code changes go through,
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/infrastructure-as-code-25358325?u=76281980&t=188)** preventing simple mistakes from causing big problems. You can easily duplicate your infrastructure to increase the size and capacity of your infrastructure quickly as needed, replace failed infrastructure components, expand into a new data center or geographic region easily and quickly without having to rebuild the wheel, all without the worry of human error in the infrastructure setup process itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[SaaS]] (1), [[IaaS|Infrastructure as a service]] (1), [[Terraform]] (1), [[Git]] (1)
> **CLI Commands:** make (1), aws (1), terraform (1), git (1)
> **Analogies:** such as (2), just like (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** aws (1)
> **Speakers:** - [presenter] (1)


### 7. Managing the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Single Team Oriented Service Architecture (STOSA) organizations](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=0)** - [Instructor] What is a Single Team Oriented Service Architecture? STOSA is an important guiding principle for large organizations that have many development teams that own and manage services comprising one or more applications. STOSA applications with appropriate organization level processes and procedures, they work with cloud architectures to provide a high-quality modern application infrastructure. What are the criteria to be a STOSA application? Well, to be STOSA, you have to meet the following criteria. You must have an application that is constructed using a service-based architecture, and this could be a microservice architecture. You must have multiple development teams that are responsible for building and maintaining a large application. Every service in your application must be assigned to a specific development team. That development team owns the service. Who owns which service should be a well-documented process and readily available to everyone throughout the entire organization. No service should be assigned to more than one development team. Individual development teams may own more than one service. Teams are responsible for all aspects of managing that service. This goes anywhere from understanding or managing the architecture of the service, the design of the service, all the way through the development, testing, deployment, monitoring, and incident resolution of the service. Services should have strong boundaries between them,
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=98)** including well-documented APIs describing the boundary of the services themselves. The service owns its own data, and the data becomes part of the service. If a service needs access to data that's stored in another service, it must use one of the well-defined APIs to access that data. It can't go and talk to the data source itself. Services must maintain good internal service level agreements between them that are monitored and violations reported to the owning team. A STOSA-based application is an application for which all services follow these rules. And a STOSA organization is one in which all the service teams follow these rules and manage STOSA applications. Typically, in a STOSA-based organization, each team should be a reasonable team of typically three to eight engineers. If a team is too small, it cannot manage the service effectively, but if it's too large, becomes cumbersome to manage that team. Here you see an application in a STOSA organization. The boxes labeled A through L each represent an individual service within the application. The ovals represent development teams that own the enclosed services. The application contains 12 services that's managed by five teams. You'll notice that each service is managed by a single team, but there are several teams that manage more than one service.
>
> **[3:10](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=190)** This is okay. Every service has an owner, and no service has more than one owner. That's the most important part. In this application, clear ownership for every aspect of the application exists. For any part of the application, you can clearly determine who is responsible and who to contact for questions, issues, changes, or escalations. When you work in a non-STOSA organization, there is no clear ownership. If you need something done with service C or D in this diagram, it's not clear who is responsible. Is it someone in Team 1 or Team 2? They both seem to own those services. If one of those services has a problem, who should respond? What happens if you need something done with service I? Service I has no clearly defined owner. Who do you contact? This lack of clear ownership and responsibility makes managing a complex application even more complicated. As an application grows in size, they grow in complexity. A STOSA-based application can grow larger and be managed by a larger development organization than a non-STOSA-based application can. As such, it can scale much larger while still maintaining solid, documented, and supportable processes and interfaces. A STOSA-based organization can handle larger and more complicated applications than a non-STOSA organization. This is because STOSA shares the complexity
>
> **[4:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/single-team-oriented-service-architecture-stosa-organizations-25358324?u=76281980&t=284)** of a system across multiple development teams effectively and efficiently, while maintaining clear ownership and lines of responsibility. You can learn more about STOSA organizations by reading my book, "Architecting for Scale," published by O'Reilly Media, or by looking online at www.[stosa.org](https://stosa.org).

> [!info]- Semantic Content
>
> **Env Vars:** stosa (16)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [stosa.org](https://stosa.org) (1)
> **Speakers:** - [instructor] (1)

#### [Effective devops in the cloud](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=0)** - [Narrator] [[DevOps]] is a set of practices that emphasize communications and collaboration between software developers and IT operations. By using DevOps in your cloud practices, you can create a more efficient environment for [[Software Development]] and infrastructure management. I won't go into the benefits of DevOps per se, but I will talk about how the cloud can make implementing DevOps easier and best practices for implementing DevOps for cloud applications. Taking advantage of what the cloud offers makes it easier to implement DevOps. The cloud gives you a scalable infrastructure that can easily accommodate changes made on demand. This makes it perfect platform for implementing DevOps practices. Features of the cloud help with the effectiveness of DevOps implementations. For example, cloud makes it easy to provision resources on demand, meaning less likely to over provision resources. The Cloud offers higher availability in general than other platforms because redundant resources can be easily created across multiple locations. The DevOps quick cycle time fits very well with the cloud dynamic infrastructure capabilities. You can launch new versions of an application simply by replacing resources rather than trying to upgrade them one by one. You can test a new or parallel infrastructure before swapping out the entire infrastructure to replace older resources. DevOps is designed to bring developers and operations closer together to make seamless processes between them. [[Cloud Computing]] is designed
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/effective-devops-in-the-cloud-25359343?u=76281980&t=92)** to automate many standard operation tasks, allowing you to adjust infrastructures quickly and dynamically. When you use both of them, they bring developers, operations, and infrastructure together and enable standardized and unified processes and systems, making modern applications more advanced and more achievable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (10), [[Software Development]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Understanding automation](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=0)** - [Announcer] As cloud applications grow, they become increasingly complex and difficult to manage. Monitoring and analytics can be used to quickly identify problems with your application and diagnostic causes of those problems, enabling you to build larger and more complex applications. Monitoring refers to the collection of data about the performance and health of your application. This data can be used to identify problems and diagnose issues, and it can also be used to improve the performance and reliability of your application. While analytics refers to the use of data to understand the behavior of your application. This data can be used to identify trends, understand user behavior, and find bottlenecks in your application. It can also be shared with business units and other stakeholders to improve the application and its features. There are many monitoring and analytics solutions, both cloud specific and cloud agnostic that are available for your use. This includes open source solutions such as Prometheus or commercial solutions such as Datadog. Additionally, cloud providers themselves provide their own monitoring and analytics solutions. AWS has CloudWatch and [[Microsoft]] has [[Microsoft Azure|Azure]] Monitor. These are designed to give you operational information into how the cloud components that you are using are performing. These tools can run standalone or can be integrated with application monitoring or other infrastructure monitoring tools to create a complete and comprehensive set of information. Often this data is collected
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/understanding-automation-25356371?u=76281980&t=94)** and kept in the cloud so that AI and machine learning [[Algorithms]] can be applied to it to identify trends and determine courses of action. In these ways, monitoring and analytic tools take advantage of the scale and resource availability in the cloud to provide advanced and comprehensive monitoring. No production application is complete and running safely and securely unless it includes appropriate monitoring and analytics, and the cloud both provides additional tools and leverages existing tools to give you the data you need to keep applications running smoothly, safely and securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (1), aws (1)
> **Definitions:** refers to (2)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [announcer] (1)


### 8. AI and the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundations of AI in cloud computing](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=0)** - [Instructor] Next, we're diving into a topic that's transforming how we think about cloud architecture, and that is [[Artificial Intelligence (AI)|artificial intelligence]]. You know, when I was working at Amazon and later advising clients, and finally as the CTO of an AI-focused startup, I watched AI evolve from a specialized tool to a fundamental component of cloud architecture. And, frankly, different cloud providers think about AI in different ways. AWS, for example, takes a very pragmatic approach to AI. They provide a broad set of services to help you build AI-enabled applications. [[Microsoft]], especially before their involvement with OpenAI, took an approach of integrating AI with existing Microsoft tools. But more recently, they've used their open AI leadership to extend their offerings beyond just Microsoft tooling. [[Google]], on the other hand, has a very strong research background, and they take a more theoretical approach to their AI offerings, with a focus on innovation and on the technology itself. But where they're all the same is this. They all offer three distinct approaches to AI, and those three approaches are first, pre-trained AI models. These are the plug and play AI capabilities such you see from companies like OpenAI and Anthropic,
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=98)** and in equivalent places and equivalent services by Amazon and Microsoft. This is using existing, well-trained, previously trained AIs to perform tasks for the consumer. Usually general purpose tasks, like have a conversation with someone or write some code for a developer or draw a picture of someone. The second approach is custom model training. This is the bottoms up creating of custom AI models that are specifically trained for very specific business purposes. The result is something very similar to the pre-trained APIs, but with the AI knowledgeable on custom capabilities that's important to your business. You've created a custom AI for a very specialized task. While your AI model the results can be nearly perfectly aligned for that specific task in your business goals, the cost to train a model from scratch to do that task can be quite expensive. The third approach is model augmentation. This is the hybrid approach that involves using a pre-trained AI model, but augmenting it with additional learning on top of it. In this case, you're leveling up an existing pre-trained model by giving it supplemental training that's specific to your business requirements.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=193)** The resulting model has a broad knowledge base, but also has specific expertise that's aligned with your business requirements. While this approach is not as inexpensive as using a stock pre-trained model, there is cost involved in this training. This approach is significantly less expensive than a custom-trained AI model. Whatever approach or approaches that you decide to take, make sure to select a method that matches your business needs, your available corporate skill sets and talent, and of course, your budget. Making a wrong architectural direction decision in this first step can make or break the success of your entire [[AI Strategy]]. All three of these approaches requires a concentrated thought process about how you plan on using AI in your architectural strategy and how much that strategy will cost. Using AI is very resource intensive, but often most of that resource usage is invisible to you when you make a simple AI API call. Unless you are a company that provides AI services, the cost of using AI in your company usually does not appear as simple resource costs, simple resources like computation and storage and networking costs. Instead, you are charged typically based on the tasks
>
> **[4:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/foundations-of-ai-in-cloud-computing-25351360?u=76281980&t=289)** you are asked to perform, the complexity of those tasks, and the size of the input and output of those tasks. These are not normal cloud expense vectors. Complexity of a task is not something you are usually directly charged for in a [[Cloud Computing]] environment. Instead, you're usually charged for the basics, computation, networking, and storage. Understanding the cost and value of AI though, can be very different. Many companies will eat through their expected AI budgets quickly, simply because they're not properly optimizing their AI strategies for their business needs. This can result in failed, yet very expensive AI projects. The key to success with an AI cloud initiative isn't just understanding the technology, it's understanding how to architect a solution that uses the technology in a way that balances the capability of the AI, the cost of the AI, and the complexity of your problem set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Google]] (1), [[AI Strategy]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** make (3), aws (1)
> **Env Vars:** cto (1), aws (1), api (1)
> **Analogies:** for example (1), picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [AI integration patterns](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=0)** - [Instructor] In this video, we'll explore the different ways [[Generative AI]] can be integrated into cloud applications and the trade-offs of each approach. The three main integration patterns are, direct integration with AI providers. This is using preexisting [[Cloud Services]] that are available in cloud providers and custom AI providers. The second is a self-hosted open-source model. This might involve using cloud resources, but all AI-specific capabilities are created and managed by you, not by a separate AI service provider. And third is a hybrid approach. Let's look at each of these three in a bit more detail. The direct integration model involves using existing, known AI providers such as OpenAI, Anthropic, or using the AI services that are offered by major cloud providers such as AWS, [[Google]], or [[Microsoft]] to provide the AI capabilities that your application requires. This is the typical [[SaaS]] model of integrating third-party service software into your application. You must select an AI provider, select the specific capabilities you want to use, create an integration with that provider, and create and manage the GLUE necessary to integrate the existing AI service into your application. Typically, AI providers have either a language-specific API or [[Representational State Transfer (REST)|REST]] API that allows you to integrate
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=96)** with their services, just like any other SaaS service you might use. You pay for the AI capabilities that you consume and you provide payment to the AI provider you selected. This is typically the fastest, easiest model to get up and running. When combined with using standard, off the shelf AI models, this can allow you a very, very fast path to getting AI capabilities integrated into your application. Additionally, just like with a typical SaaS model, you get automatic updates to the controlling software and the AI models themselves on a regular basis. And integrating these upgrades into your system is usually automatic or at least relatively easy. But just like other SaaS applications, this speed and convenience comes at a cost. First, you're limited in capabilities to what that AI provider gives you. Also, you often are using custom APIs and you are typically tied directly to a specific single source AI provider. While AI services such as those offered by AWS purport to provide a standardized interface to multiple vendors' AI models, the interface does not remove the need for per vendor customization. The net result is you're typically locked into a single-vendor AI solution.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=189)** This lock-in has all of the same disadvantages of any other SaaS service. Vendor lock-in means you are limited to the capabilities offered by that specific vendor. Even if another vendor provides a new capability, you may not be able to easily leverage that new capability. In a fast-evolving technology such as AI, this may stifle your innovation. Additionally, you're limited by the [[Privacy]], security, and availability limitations that the single vendor provides, which may limit your ability to utilize certain capabilities for your business needs. The second approach is to directly self-host AI models on your own computation resources. There are many open-source AI models available that you can start with, and expanding these models is not very difficult. This approach requires you to operate your own AI infrastructure, though, which you can typically easily do on a [[Cloud Infrastructure]] by a major cloud provider. This approach gives you increased flexibility and often reduced overall costs, but the initial set of costs and effort can be quite a bit higher. You get full control over how the models work for your application usage, and you have complete control over your [[Data Privacy]] and other dependencies.
>
> **[4:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-integration-patterns-25359345?u=76281980&t=283)** However, getting such an AI infrastructure up and running can require a significant investment in time and resources, and it requires a much higher level of cloud expertise and AI expertise than the typical SaaS model requires. The result, more control and better [[Cost Management]] in the long run, but with additional cost, effort and complexity and expertise requirements in the short run. The third approach is the hybrid approach. In this model, you may start using a stock, off the shelf AI service, such as OpenAI. This allows you to get up and running faster and with less expertise required. As time goes on and your expertise grows, you can begin to bring parts of your AI infrastructure in-house to run on your own AI infrastructure using similar open-source models to the ones you were using in hosted AI providers. This model allows the quick startup and lower initial cost advantages of the service provider model, yet lets you grow and expand as your needs require and your experience allows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (6), [[Generative AI]] (1), [[Cloud Services]] (1), [[Google]] (1), [[Microsoft]] (1)
> **Analogies:** such as (5), just like (3)
> **Env Vars:** aws (2), api (2), glue (1), rest (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Resource and cost considerations](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=0)** - [Instructor] We talked earlier about the resource and cost implications of using AI, but let's go into that in a bit more detail in this video. [[Generative AI]], in particular, brings new resource considerations that differ significantly from traditional, cloud-based application architectures. For example, computational resources. While most of your architected applications make use of traditional CPU instances for computation, AI models require extensive use of GPU computation resources. GPU computation is generally significantly more expensive than similar CPU computation. Additionally, GPU memory often becomes a critical resource constraint. [[Large Language Models (LLM)|Large language models]] require significant quantities of memory to operate effectively. Some models can require multiple gigabytes of RAM just to function. While you can often balance available memory across multiple AI requests, especially during [[Batch Processing]], often AI requests are time sensitive, human-level discussions that require a more immediate response. Hence, expensive memory is required even to do simple AI tasks. Along with significant quantities of memory, often high bandwidth networks are necessary for large payloads, especially when dealing with multimedia requests such as images, voice, and video. The result, it's often ineffective
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=99)** and even inappropriate to consider the costs of operating AI using the traditional, cloud cost trio of CPU, memory, and networking. Instead, most AI providers make use of a model specific, token-based pricing model. These models assign a price based on the amount of input given to a model. The more text or images or audio or video you give a model in a request, the more [[Tokens]] it consumes, and the amount of output that the model produces in its response. The greater the quantity of output text, audio, video, et cetera, the more tokens are consumed. An AI request then is charged by applying a specific cost for each input and each output token consumed. The larger the request, the more the request costs. To add to the pricing complexity, AI providers make available multiple AI models with different characteristics and abilities. The more capable models have a higher price per token than simpler models do. So sending a request to a high-end model may cost a lot more than sending the request to a low-end model. And while the result may be of much higher quality in the high-end model, it can also be significantly more expensive than the same request to a low-end model.
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=192)** In fact, high-end models may be 10 or 100 times more expensive per token than a low-end model. For example, as of when this course was created, Anthropic's Opus model has a cost for 1 million output tokens of $75. While their simpler Haiku model has a cost for 1 million tokens, output tokens, of $1.25. $75 versus a $1.25. That means that the low-end model is 1/60 the cost of the full high-end model. A comparison of other providers' models leads to very similar results. While this analysis mostly applies to AI service providers, self-hosted models have a similar economic profile. The reason why Anthropic high-end model is significantly more expensive than their low-end model is because it takes significantly more resources to process a request in the high-end model than it does in a low-end. That means many times more resources in a self-hosted environment are required as well. Hence, picking the right model or models for your AI integration is as critical as any other aspect of your integration, including initial vendor selection and integration strategy. However, direct dollar costs is only one aspect of the cost of running an AI request.
>
> **[4:49](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=289)** Time is another factor. Some models are designed to give quick responses and can give even faster responses with simpler models. Other models, even higher cost models, are not optimized for speed at all, but instead are optimized for higher quality output. A prime example is the OpenAI o1 model, which is an advanced high-end model that is optimized for its ability to perform complex reasoning, but it is not optimized for speed. If you're building a batch AI processing system, this may be perfect, but if your application requires interactive use of AI queries, performance of the AI model may be paramount to your architectural decision process. There are many strategies you can use in order to optimize your AI resource utilization and query performance. These strategies can lower costs, create faster responses, and overall optimize your AI usage. Some optimization strategies include request optimization. The ability to batch requests and cache common responses are typical strategies used to optimize AI costs. By controlling when requests are sent and only sending when necessary, you can take advantage of better resource optimization. This strategy works especially well
>
> **[6:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=384)** with self-hosted environments where resource utilization is your problem to manage. But even when using hosted AI providers, many providers offer batch and background pricing options that can lower costs by reducing requirements on when you need a request processed, along with using pre-cache and in some cases pre-calculated input queries. Infrastructure optimization. When self-hosting your AI, managing the right size of GPU instances and the use of cloud spot instances and other dynamic resource allocation strategies can help optimize your cloud AI costs. Until you have a better idea of the at-scale needs of your application for its AI usage, I recommend you roll out AI features in small amounts incrementally and to subsets of your customers initially until you get a better handle on the relationship between your application usage and the associated AI costs. Of course, tracking and monitoring AI usage is critical to keeping your AI spending in check. But also watch for usage patterns to make sure you don't have resource black holes, where seemingly simple application requests use an abnormally large amount of AI resources to complete. And, of course, as it is with all cloud usage,
>
> **[7:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/resource-and-cost-considerations-25351359?u=76281980&t=479)** set up alerting to detect anomalies and other problems before those anomalies become expensive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[Generative AI]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Batch Processing]] (1)
> **Env Vars:** gpu (4), cpu (3), ram (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), such as (1)
> **Versions:** 1.25 (2)
> **Definitions:** means that (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [AI-assisted cloud operations](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=0)** - [Instructor] In the previous videos, we talked about using AI within your application itself. But AI can also be used in building and operating your [[Cloud Infrastructure]] as well. In this video, let's explore how AI can help optimize your cloud infrastructure, predict resource needs, and manage costs effectively across your entire application stack. In traditional cloud infrastructure management, your operations team is often in a reactive mode when dealing with issues that come up. They respond to alerts after problems occur and make adjustments to prevent problems that have occurred from reoccurring again. This strategy is used not only for technical and mechanical problems, but also for resource allocation problems. When usage increases and more resources are demanded, cloud resources are brought to bear to handle the increased usage. Sometimes, this resource increase occurs automatically, but all too often it requires human intervention to detect and handle. This often results in preventative overprovisioning for handling just-in-case scenarios. And it can result in a slow response to actual usage spikes. Typically, the analysis necessary to determine when additional resources are required is relatively complex and requires manual consideration.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=97)** And this analysis can be error-prone. AI systems can look at complex systems and make simpler and more valuable recommendations on what to do to handle current requirements. Additionally, AI can use existing data to detect trends and predict future resource uses that could be planned for now rather than wait for when the problem actually occurs. Also, since AI is extremely good at looking at large quantities of disparate data and deduce patterns from that data, AI can take useful, nonoperational data into account to determine when resource needs might change. For example, an AI infrastructure management solution can take a defined [[Marketing Strategy]] into account to make assumptions on when resource spikes may naturally occur and create operational plans for dealing with those spikes. Essentially, when a large quantity of data needs to be analyzed to create a response, AI-powered tools can be quite effective in helping. This is exactly what happens in large IT operation infrastructures. AI operations management can help reduce errors, missed triggers, and other anomalies and make use of more data to create better predictions and better results. There are other uses of AI in IT operations as well.
>
> **[3:17](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-cloud-operations-25357345?u=76281980&t=197)** For example, AI can be used during an ongoing IT incident to provide data to a response team, then analyze the conversations that occurred among response team members during the outage to create postmortem analysis and reports. Even during an outage, AI can be used to analyze the conversations among response team members to create situation reports, situation summaries for management and critical customers without interfering with the actions of the response team itself. Overall, AI can be a valuable asset in the creation of your IT operational management strategy and architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (3), [[Marketing Strategy]] (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [AI-assisted security and governance](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=0)** - [Instructor] Just like in IT operations management, AI can be useful in helping architect your [[Application Security]] and governance requirements, policies, procedures, and operational monitoring. Traditional security and governance processes often struggle to keep up with the pace and scale of modern threats and attacks. AI can help reduce the struggle and change your security landscape dramatically. Let's take a look at traditional cloud-based security processes. In traditional cloud-based security systems, traditional approaches are used to create secure systems and ensure proper governance compliance. This often involves rule-based security policies, manual analysis of large quantities of security logs and journals, and periodic audits to ensure compliance and maintaining arbitrary fixed thresholds against security threats. This basic approach often fails to keep up with the growth of security threats and the number of attacks and different attack vectors available to bad actors. This approach looks for common strategies and hence often misses novel attack vectors. It can also create too many false positives and too many false positives can easily lead
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=93)** to missed true positives. Think about "The Boy Who Calls Wolf" parable. This approach usually operates at human speed and hence can result in a slow response to an ongoing attack. Finally, the audits they require tend to be resource intensive and hence expensive. By leveraging AI capabilities into your security and governance processes, you can use the power of AI to analyze attack vectors. Remember, AI is very good at looking at large quantities of data, finding correlations and anomalies, and summarizing the results. This is exactly the sort of tasks that humans are bad at and exactly the sorts of tasks necessary to create a secure operational infrastructure. Ais are effective in threat detection. They can analyze patterns across tons of data across the entire infrastructure. They can learn and be trained on normal behavior patterns and be able to detect anomalies in real time. They can also identify out of the ordinary sophisticated attacks, including zero day exploits, persistent threats, and novel attack patterns. AI can also trigger automated responses
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=187)** that result in faster response to issues resulting in faster threat containment. They're also not negatively impacted by false positives and hence, they tend not to be affected by "The Boy Who Called Wolf" class of failures. They can immediately and automatically prioritize responses using complex, risk-based response rules, and they can dynamically adjust a user access to dynamically limit threats in real time. AIs can be used to detect normal behavior patterns of users in order to determine bot-like activity and bad actor patterns. They're better at noticing when compromise credentials may be in use and they can identify risky access patterns. They can recommend user role refinement in order to improve just-in-time access, and assist you in your ability to follow industry best practices, such as least privileged principles. AI can be useful in governance as well. They can interpret and enforce policy and provide continuous compliance monitoring with automatic policy violation detection, and [[Real-Time]] adjustment in order to speed recovery. AI can also make intelligent policy recommendations that can improve your overall compliance by analyzing how your IT operation systems actually work
>
> **[4:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/ai-assisted-security-and-governance-25356372?u=76281980&t=283)** as opposed to how you think they should be working. AI can also automate compliance reporting and maintain continuous audit readiness. This not only will improve your overall compliance, but reduce the cost of validating and the cost of auditing your compliance. The actual strategies for effectively using AI for security and compliance are well beyond the scope of this course, but many AI enabled tools and systems are on the market now, and more [[Microsoft Products|products]] and capabilities are being created daily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Real-Time]] (1), [[Microsoft Products|Products]] (1)
> **Analogies:** just like (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Why use the cloud for AI/ML?](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=0)** - [Instructor] In today's world, AI is an important part of nearly every modern product architecture decision. I don't think too many people would disagree with that statement. But AI isn't a cloud technology. You don't need the cloud to implement an [[AI Strategy]]. So why is AI so important in a cloud architecture course? Well, while you can use AI and have an AI strategy without ever touching or using any cloud resources, the cloud is a natural avenue to implement your AI-enabled [[Product Strategy]]. It turns out, the needs for AI match very effectively the capabilities of cloud providers. The synergy between AI and cloud is unmistakable. What are some of the advantages of using AI in the cloud? First, elastic resources. Cloud applications can dynamically scale AI resources up and down based on demand. Given the huge resource requirements for AI, the ability to leverage relatively inexpensive, on-demand computation and storage is a huge benefit to meet the needs for AI-intensive workloads. This is true whether you directly implement your own AI strategy on your own systems and simply use the cloud as a source of computation and storage resources, or you leverage an AI service provider that either uses the cloud
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=95)** or are themselves a cloud provider. Resource requirements of AI are very well-suited for cloud resource allocation. There is a reason why the leaders and heaviest investors in AI technology are also all the major cloud providers. Second, managed services integration. There are tons of AI services available on all of the major cloud providers, making integration using cloud technology a natural fit for AI-intensive workloads. Additionally, the cloud's natural predisposition towards [[DevOps]] and [[IaaS|infrastructure as a service]] workflows and the natural extension to AI-automated infrastructures, as we talked about in a previous video, this makes the use of cloud infrastructures a much easier decision. Third, data. Many, if not most, AI workloads are also data-heavy endeavors. The availability of massive and relatively inexpensive [[Data Storage]] in cloud environments means it's a natural fit to run the AI workloads in the same cloud environments. There are, however, some disadvantages of using AI in a cloud environment. First, cost structures for [[Cloud Computing]] can become an issue. If you do not keep a close handle on your cloud spending, your spending can easily grow out of hand
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-us-the-cloud-for-ai-ml-25353360?u=76281980&t=189)** when you put AI into the picture. While this isn't a cloud-specific issue, per se, the cloud economics model does enable and encourage easily increasing resource consumption consistent with the needs of AI with an increasing price tag that matches. Lack of monitoring and cost control can cause sticker shock in the end. Second is vendor lock-in risks. This again is not unique to AI capabilities, but the ready availability of sophisticated, cloud-specific AI tools make it easy to become locked into single-vendor cloud solutions because of their specific AI capabilities that they offer. Third is [[Privacy]] and compliance. AI has enabled a new need to focus on privacy and compliance issues, which also has been a concern historically with basic cloud infrastructures. The combination of AI and cloud means an even greater need to make sure privacy and compliance strategies are up-to-date and effective. Disadvantages notwithstanding, the cloud and AI are very closely entangled. And the need for applications to leverage AI technology will only increase the push to have a broad and effective [[Cloud Strategy]] in place as well. The cloud and AI are nearly inseparably linked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Strategy]] (3), [[Privacy]] (3), [[Product Strategy]] (1), [[DevOps]] (1), [[IaaS|Infrastructure as a service]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** we talked about (1), previous video (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 9. The Edge of the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [The Internet of Things](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=0)** - [Instructor] The cloud is a virtual world of computation. But what happens when you want the cloud to become physical and real? The [[IoT|internet of things]] is where the virtual cloud touches the physical world. The internet of things, or [[IoT]], are physical devices that are distributed across the physical world that perform actions used by the cloud to perform analysis or control in the physical world. By far, the simplest example of IoT devices are your basic smart home devices, your smart thermostat, your [[Wi-Fi]] enabled light bulbs, doorbell cameras, and Amazon Alexa enabled assistants are all examples of IoT devices. These internet-enabled remote devices allow cloud systems and applications in the cloud to access, monitor, and change our physical world. Now, Wi-Fi enabled light bulbs are cool and everything, but they're just the tip of the iceberg for the capabilities of the internet of things. Consider, for example, a modern manufacturing facility. Traditional factories relied on manual monitoring, operators checking machines periodically, recording measurements, and trying to identify potential issues before they became serious problems. IoT transforms and automates this model. Modern factory facilities
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=98)** deploy sensors throughout their operations, continuously collecting data about machine temperature, vibration, power consumption, and output quality. All of this data is sent to the cloud for realtime data analysis and processing. More and more, modern applications often involve monitoring and controlling our physical world. How does IoT impact your architectural view of your cloud applications? The biggest way is at scale. When we talk about large scale IoT applications, we talk about applications that deal with potentially millions of devices. Each device, a thermostat, a camera, a probe, a light, all require a connection to the cloud and to your cloud-enabled application. Each device generating or consuming data requires management. And due to the sensitive nature of what most IoT devices work with, security is essential, both the security of the data created by the IoT device, as well as security of the physical device itself. You don't want a bad actor to be able to unlock your front door and turn off your alarm, and businesses don't want competitors to access data from their factory floors. IoT requires a massive network of highly secured network connections
>
> **[3:14](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=194)** among millions or billions of devices, all controlled and managed from centralized applications. This scale creates a unique architectural challenge in [[Data Management]], network utilization, and [[System Architecture]]. This is the heart of edge computing, and edge computing is one of the fastest moving growth areas of the cloud. IoT devices are remarkably diverse in what they can do. Some are simple measuring devices, perhaps costing less than a dollar each. Others are large, complex devices with full computational power of their own costing thousands and thousands of dollars or more. Some devices are tiny battery-operated devices that can last years on a single battery. Others are complex devices tightly integrated into large and immobile systems. Whatever the devices are, managing, securing and monitoring them at scale is necessary for them to operate as designed, and modern cloud applications are used for this process. Even if you aren't specifically architecting large scale IoT systems, you'll likely be building IoT enabled capabilities into your applications either now or in the near future. As such, understanding the importance of IoT and edge computing in general
>
> **[4:50](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=290)** is important for you in your role as a software architect. What are some of the architectural challenges of IoT? First and foremost, scale. A single application can be managing millions of IoT devices. Your edge-enabled applications must be able to scale to handle a rapidly growing number of remote devices. Next is security. Keeping data sent from the probe secure and preventing bad actors from doing physically dangerous or undesired actions in the physical world is of course critical. The massive number of probes are a major architectural security challenge. Third is data management. Some IoT devices generate a ton of data and that data must be imported, scanned, processed, and stored at scale. And finally, networking. Creating network systems that can handle massive amounts of data traffic is a critical to keeping these systems operational. IoT architectures typically employ several distinct layers to provide these capabilities to your cloud-based applications. First is the device layer. This is where the physical devices, the sensors, actuators, lights, probes, et cetera, this is where they're all located. Next is the edge layer.
>
> **[6:24](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=384)** This is where local computation occurs. This is computation that is physically near the actual physical devices. It might be part of the probes itself. This layer handles device communications and local management and processing tasks. It's the thing that makes the physical probe connected to the cloud. Next is the communications layer. This is where the massive amounts of data that are sent from the remote device layers to the central application that's stored in the central cloud. Next is the cloud layer. This is where centralized core processing and [[Data Storage]] is maintained. And finally, the application layer. This is where the business value of these devices becomes fully realized and the devices become part of a valuable system. Each layer requires architectural decisions around scale, security, and reliability, but also consistency. When you're deploying millions of sensors, having a single, consistent model for working with those sensors is essential. If each sensor has a different access method, a different deployment model, different code base, there's no way any single application could handle a large quantity of such devices. So, building consistency and repeatability into the process of building, deploying,
>
> **[7:59](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-internet-of-things-25351356?u=76281980&t=479)** and managing the sensors themselves is architecturally critical. IoT is causing traditional, rephrase. IoT is causing traditional, centralized [[Cloud Computing]] models to shift into a more distributed architecture, dramatically increasing the complexity involved. This is the heart of edge computing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (19), [[IoT|Internet of things]] (3), [[Wi-Fi]] (2), [[Data Management]] (2), [[System Architecture]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Extending the cloud to the edge](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=0)** - [Instructor] While [[Cloud Computing]] continues to grow, where the cloud is growing is shifting. Centralized computing, while still important in the core of cloud computing, is being outpaced by the massive growth in edge computing. Edge computing represents a fundamental evolution in cloud architecture. Leading much of this growth in edge computing is the [[IoT|Internet of Things]], as discussed in the previous video, but edge computing is more than just monitoring sensors and controlling relays. Edge computing is much more than that. Consider a modern automobile. A modern car is not just a mechanical and electrical device. A modern car has many onboard computers to process everything from spark plug ignition and fuel injection to climate control and seat positioning. In modern automobiles, many, if not most of these onboard computers, are also connected to the internet and communicate with centralized cloud computation capabilities. Cloud computation is needed for many obvious modern car features, such as GPS navigation systems and remote starter capabilities. But cloud computation is much more sophisticated in modern cars than just this. Safety features such as crash detection and automatic calling
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=93)** of emergency first responders are becoming more commonplace, as is [[Data Collection]] in order to make sophisticated determinations on the health of the automobile itself, and when a service or an update might be required. Modern automobiles use and coordinate hundreds of on-car sensors, processing the data locally, and making decisions locally, ultimately communicating to centralized cloud resources. These automobiles are large remote edge computation nodes. Ultimately, they are edge devices in a distributed cloud. This edge computation trend will continue as automated driving capabilities become more commonplace. Ultimately, self-driving cars will basically be sophisticated cloud-enabled computation devices capable of advanced AI analysis using data collected from onboard sensors, and sensors from other vehicles, and sensors in the road itself to make the driving experience safe and convenient. Why is this remote computation capability of the cloud so important? Well, for a few reasons. A self-driving car makes extensive use of video cameras to determine what's around in its physical environment. These video images must be analyzed by advanced AI systems to determine what's safe
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=187)** and what's not safe for the car to actually do. Even simple backup cameras in use today need advanced video analysis to detect hazards and sound an alarm to the driver if something moves in its way. If all of this video processing was done in traditional centralized cloud environments, there is no way we could handle the network requirements of the millions, or is it really billions of video feeds that would be needed to be processed to keep all cars on the road safe. And what would happen if one car lost its internet connection? It'd be bad enough if your backup camera didn't detect the fence that you were about to back into. But what if a fully self-driving car, depending on an internet connection to drive, suddenly lost that connection on a fast, crowded highway? Well the result would be disastrous. This is the value of edge computing. Rather than centralizing all of this computational processing in the cloud, this sophisticated video processing occurs in the car itself. Sophisticated AI systems run in your car and process all of that data to make whatever decisions are necessary and perform all of the necessary actions, all locally. Then, summary data, and summary data only, is sent to the centralized cloud
>
> **[4:40](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=280)** for further non-real time [[Data Processing]]. That way if an internet connection goes bad on a self-driving car, you might not be able to see what traffic is like in the miles ahead, but you could keep the car driving safely all the time. This is just one example of edge computing. Other uses of edge computing include factory floor process monitoring, security [[System Monitoring]], and other complex processes and system management tasks. Edge computing represents a fundamental shift in cloud computing away from a centralized cloud to a distributed cloud. The modern edge-enabled cloud consists of four main parts. First, the device edge, this is the computing resources within typical IFT devices themselves. This is the automobile, the self-driving car. The next is the near edge. This is local computing resources like gateways and edge servers. This is your car's brain in the self-driving car example. This is the AI that's running in your car. Next is the far edge. This is regional cloud facilities located close to users, yet centrally used by multiple devices. In the self-driving car example, this might be a cloud node in Seattle, for example, that manages all traffic-enabled devices
>
> **[6:15](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=375)** in the Seattle area. And finally, the centralized cloud. This is the traditional central cloud resources we typically think of today as the cloud. This diversity of cloud needs creates additional challenges for the modern architect. They now have additional things they must consider in their architectural decisions. Latency, what are the latency requirements and bandwidth constraints imposed on the system being architected? If a video image from a car camera has to be processed, has to be processed in 20 milliseconds for it to be useful, then it can't be sent to a cloud where it might for example require a few seconds to get a response. Bandwidth constraints. Sending millions and billions of video streams to the central cloud is really a non-starter. So at what level should what data be processed, analyzed, and summarized before being sent to the centralized cloud? Processing requirements. How large of a computer system is needed in the automobile to handle the necessary AI processing that the automobile requires? How will that answer change over the years a typical car is in use? Reliability and failure tolerance. What happens if a node loses its upstream cloud connection? What should be the node's immediate response to the loss?
>
> **[7:51](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=471)** What should it eventually do to try and recover? And cost. The more we utilize edge computation, the less we can depend on the cost advantages of centralized resource sharing. Where is the trade-off of where a certain piece of computation should occur? And how does that decision impact overall system cost? How are the major traditionally centralized cloud providers handling this industry trend from the centralized cloud computation that they have focused on to the distributed edge computation? Well, quite frankly, they're embracing it at full speed. Services like AWS Outposts and [[Microsoft Azure|Azure]] Local are designed to bring cloud capabilities to edge locations and help cloud architects design and build distributed cloud systems and applications. Keeping on top of security, reliability, and availability is critical for all cloud systems, but even moreso for distributed cloud applications. Distributed cloud applications must design for autonomous operation when cloud connectivity is lost, implement intelligent data filtering to process data locally when possible, and only pass on what is necessary to the higher layers. Maintain security across this complex,
>
> **[9:26](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/extending-the-cloud-to-the-edge-25354420?u=76281980&t=566)** multi-layered distributed network, plan for variable load and all scaling requirements, both at the small level, the device level, and at the large level, the centralized cloud. And account for resource constraints and limits that are imposed by the types and number of edge devices and nodes that we use. Edge computing doesn't replace cloud computing. It extends it. The distributed model enables new applications that couldn't be implemented with purely centralized or purely distributed applications. Yet edge computing dramatically increases the architectural complexity of our applications. The future of cloud architecture lies in this distributed edge computing model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (4), [[IoT|Internet of things]] (1), [[Data Collection]] (1), [[Data Processing]] (1), [[System Monitoring]] (1)
> **CLI Commands:** make (3), node (3), aws (1)
> **Analogies:** such as (2), for example (2)
> **Env Vars:** gps (1), ift (1), aws (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 10. Cloud Sustainability and Green Computing

[↑ Back to Table of Contents](#table-of-contents)

#### [The environmental cost of computing](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=0)** - [Presenter] Computing has revolutionized our world, but this transformation comes at a cost. Computing, all types of computing, pose a significant cost to our environment. This is no less true for desktop computation as it is for [[Cloud Computing]]. Let's look at an example. A typical data center consumes enormous amounts of energy. A data center requires huge quantities of electricity to power all of those servers and storage devices. This by itself is an enormous electrical load, but powering the computers is only part of the cost. For every kilowatt of electricity that you put into a data center, an equivalent amount of heat is generated. That heat has to be dissipated to keep the systems from being destroyed. A data center typically spends as much cooling of a data center as it does powering its systems, perhaps even more. The same is true with all computer centers, large and small across the globe. The scale of this power usage is huge. In fact, data centers alone worldwide currently consume about 3% of all global electricity that's produced. That's worldwide electricity usage, and this number is continuously growing. This amount of electricity puts a huge toll on our environment in several key areas. First is electricity.
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=95)** While green sources of electricity are becoming popular, non-green sources of electricity, which have a huge environmental impact, are often needed. Cooling. Besides the power requirements of cooling, the heat itself that is generated needs to be dissipated somewhere. More and more data centers are using water-based cooling systems, making data centers a significant consumer of available local water, which is often in short supply. Three is lifecycle. Servers and other equipment typically have a lifespan of only three to five years. That means there is a constant turnover in equipment. This means equipment must be constantly manufactured to replace obsolete equipment, and the manufacturing process has a major environmental impact, both on power and on the use of precious minerals. But also it means that obsolete equipment must be disposed of, creating a huge ongoing disposal challenge impacting the environment. Besides the data centers, the network that is used to connect all of us to the internet and hence to all of these data centers uses substantial resources that also consume power and natural resources. Traditional IT computing practices often make these environmental problems even worse. Systems are over-provisioned to handle peak loads
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=189)** and system failures. This means that traditional computation systems are dramatically underutilized. Historically, we do not optimize for efficient use of computing resources. Computers and storage are cheap, and it's often easier and actually less expensive to simply use more rather than optimize your applications to try and use less. Resources are historically not shared between applications. Applications were isolated so that they could be easier managed and controlled. This lack of sharing creates waste. And traditional IT approaches within organizations themselves often leads to a lack of sharing across groups, meaning unneeded duplication of resources within an organization as a whole. A huge amount of our computation capability is left unused, unneeded, but still impacting the environment. The environmental cost of computing represents a significant challenge, but it's also driving important innovation in the industry. Organizations are increasingly recognizing the economic value of environmental efficiency. This recognition is leading to new approaches in data center design, computing architectures, and resource management. The shift towards more sustainable computing isn't just about environmental responsibility.
>
> **[4:44](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/the-environmental-cost-of-computing-25358323?u=76281980&t=284)** It's about creating more efficient, effective computer systems. How does this fit into cloud computing? We're going to explore that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### [Why the cloud is greener than on-premises](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=0)** - [Instructor] Believe it or not, but the cloud is good for the environment. Why is that a true statement? Because the model of [[Cloud Computing]] offers significant environmental advantages over the traditional on-premise computing model. This is driven by the fundamental differences in how cloud resources are utilized compared to traditional on-premise resources. In short, the move of computation from on-premise systems to cloud-based systems is good for the environment. There are several reasons for this. First, resource utilization. Cloud providers operate at a scale that enables much higher resource utilization than typical on-premise data centers. Traditional data centers often run at only about a 10% or 15% or 20% actual utilization of the resources available. While cloud providers often usually achieve more like 65% or 70%, or even higher utilization rates by the resource pooling techniques and workload sharing that's enabled by cloud enabled applications. Second, resources on demand. By allowing resources to be added to an application quickly and effectively, it's possible and also safe and cost effective to
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=95)** run your application substantially leaner. Rather than having excess capacity lying around to handle surges, you can simply add additional capacity quickly the moment it's needed. This allows your applications to run steady state in a leaner environment. This leaner operation means for a typical load, you need fewer resources to run the application because you don't need the same level of spares lying around to handle the scaling spikes and server failures that you do In a typical on-premise data center. Third, infrastructure efficiency. By merging tens of thousands of applications and data centers into a handful of major cloud providers, we achieve an efficiency of scale that wouldn't be economically viable in individual on-premise data centers. This economy of scale allows innovation in high efficiency power distribution systems, advanced cooling technology and facilities purpose built for specific environmental conditions. The latter is a very interesting point. Centralized cloud computing has allowed the major cloud providers to invest in novel technology to create efficient data centers. Novel technology that would never have been invented without a centralized focus on them. For example, data centers no longer need
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=189)** to be located near large population centers. Power and cooling are at a premium in the center of a major city where data centers traditionally have been located. But because of modern technology innovations, data centers can now be located in remote environments where there's no people around, and where power and cooling are less expensive, and can be achieved using greener technology. For example, data centers can be built near a river where a local dam provides electrical power and the river itself can be used to assist in heat distribution in a greener way than it can be in the center of a large, major metropolitan center. As an extreme novel example, some cloud providers are investing right now in submergible data centers that take entire data centers, puts them inside of a tube and submerges that tube underwater. The surrounding water provides an efficient and low power cooling, resulting in significantly reduced energy usage. This technology would not have even been contemplated without the centralization of data centers within major cloud providers. Finally, [[Operational Excellence]]. For most companies operating a data center is not their core business, but it's something they just have to do for their business. But the cloud service providers operating data centers
>
> **[4:43](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/why-the-cloud-is-greener-than-on-premise-25357343?u=76281980&t=283)** is their core business. This leads to optimized maintenance procedures, [[Continuous Monitoring]] and improvement, regular upgrades to more efficient equipment, and an overall organizational desire to optimize all aspects of data center resource consumption. Renewable energy is the key to [[Sustainability]] and data center operations. Through strategic data center placement, improved operational efficiency, and efficiency of scale, and investment in renewable energy innovations cloud providers are able to make moving your application from a typical on-premise data center to a modern cloud-based system, an environmentally green activity. This helps all of us now and even more in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Operational Excellence]] (1), [[Continuous Monitoring]] (1), [[Sustainability]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Center of Excellence (CoE)](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=0)** - [Instructor] A Cloud Center of Excellence or a CCOE is a team or set of teams in an organization that focus on and manage the cloud skills in the enterprise. This includes everything from selecting cloud providers and tools to migrating applications and data to the cloud, to managing ongoing cloud operations. Not all organizations may need a CCOE, but creating one can help an organization that is struggling with integrating the cloud into both your application and your organizational cultures. How does a cloud CCOE help an organization? By helping an organization struggling to adopt a cloud first mindset. It helps the organization learn how to use the cloud in a predictable and cost-effective way. Cloud Center of Excellence helps an organization to manage the cloud specific skills in the enterprise and ensure that everyone in the organization is using the cloud in a consistent and safe manner. A CCOE helps an organization to provide a starting point for the organization to develop consistent cloud application management and operation processes and procedures. It helps to provide a central point of contact with cloud vendors and an advocate for the organization as we interact with those cloud providers. It helps to manage and coordinate enterprise migration projects and develop a roadmap for migration projects. It helps to provide a central location
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=94)** for cloud training and education, and the CCOE helps to provide a means of measuring and reporting on the impact and success of the cloud within the organization. What does a cloud center of excellence look like within an organization? There are many different ways an organization can structure their cloud center of excellence, but there are some common elements that are found in most successful CCOEs. Typically, the CCOE is a single team or a set of teams that are centrally managed with direct control over all aspects of the cloud operation. The CCOE is responsible for ensuring that all other teams in the organization are using the cloud in a safe and consistent manner. Ambassadors from the CCOE are embedded in every other team in the organization. These ambassadors act as a conduit between the CCOE and the [[Representational State Transfer (REST)|rest]] of the organization, providing information and support to teams as needed. The CCOE provides a conduit for the development teams and the operations. Along with a conduit to cloud vendors and partners, the CCOE also provides a conduit of information to upper management so they can understand what is going on and how it is working. The CCOE also provides a resource for subject matter experts for the marketing organization to leverage, to create public facing material, and for the sales organization to develop sales training material and to provide support for face-to-face meeting with customers.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-advanced-concepts-25626673/cloud-center-of-excellence-coe-25359346?u=76281980&t=188)** It is important that everyone is aware of the cloud transformation that is occurring in the organization, and they are educated in how to utilize the [[Cloud Services]] provided. The CCOE helps make this organizational communication transformation possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Services]] (1)
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