---
type: course
cssclasses:
  - lle-course
slug: cloud-architecture-design-decisions-24525835
url: "https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835"
duration_minutes: 115
duration: 1h 55m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFXZOc2UQrUTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737159098691?e=2147483647&amp;v=beta&amp;t=NLFGUalWGZn9NZYSyoa2Ux58Hmq4R7lPxEjuPLJ8pXM"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Design and Present Your Cloud Strategy]]'
  - '[[Build an Enterprise Cloud Architecture]]'
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment]]'
  - null
  - '[[Cloud Architecture- Core Concepts]]'
next_courses:
  - '[[Design a Cloud Migration Strategy]]'
  - '[[Cloud Architecture- Advanced Concepts]]'
  - '[[Cloud Security Architecture for the Enterprise]]'
path_nav: '[{"path":"Design and Present Your Cloud Strategy","position":2,"total":6,"prev":"Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment","next":"Design a Cloud Migration Strategy"},{"path":"Build an Enterprise Cloud Architecture","position":1,"total":4,"prev":null,"next":"Cloud Architecture- Advanced Concepts"},{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":4,"total":9,"prev":"Cloud Architecture- Core Concepts","next":"Cloud Security Architecture for the Enterprise"}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - topic/security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Architecture-%20Design%20Decisions.md)

![Cloud Architecture: Design Decisions](https://media.licdn.com/dms/image/v2/D4D0DAQFXZOc2UQrUTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737159098691?e=2147483647&amp;v=beta&amp;t=NLFGUalWGZn9NZYSyoa2Ux58Hmq4R7lPxEjuPLJ8pXM)

# Cloud Architecture: Design Decisions

> In this course, David Linthicum—an internationally known enterprise technology thought leader and influencer—explores the essential components of cloud computing architecture. Learn how to make informed design decisions that optimize cloud storage, compute resources, databases, and security across various cloud service providers. Build your understanding of performance operations, security operati

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835) | 1h 55m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Making decisions around cloud architecture design](#making-decisions-around-cloud-architecture-design)
  - [What you should know](#what-you-should-know)
- [**1. Beyond Basic Architecture**](#1-beyond-basic-architecture) (8 videos)
  - [Taking your architecture to the next level](#taking-your-architecture-to-the-next-level)
  - [Advanced architecture scenario: HR systems](#advanced-architecture-scenario-hr-systems)
  - [Advanced architecture scenario: Edge computing](#advanced-architecture-scenario-edge-computing)
  - [Advanced architecture scenario: Containers and Kubernetes](#advanced-architecture-scenario-containers-and-kubernetes)
  - [Advanced architecture scenario: Serverless computing](#advanced-architecture-scenario-serverless-computing)
  - [Advanced architecture scenario: Generative AI computing](#advanced-architecture-scenario-generative-ai-computing)
  - [Advanced architecture scenario: Agentic AI computing](#advanced-architecture-scenario-agentic-ai-computing)
  - [Necessary skills, tools, and processes](#necessary-skills-tools-and-processes)
- [**2. Define a Business Case**](#2-define-a-business-case) (8 videos)
  - [Build a business case](#build-a-business-case)
  - [Soft costs and benefits](#soft-costs-and-benefits)
  - [Hard costs and benefits](#hard-costs-and-benefits)
  - [Economies of optimization](#economies-of-optimization)
  - [Leveraging AI as a innovative differentiator](#leveraging-ai-as-a-innovative-differentiator)
  - [Economies of complexity](#economies-of-complexity)
  - [Challenge: Defining the business case for ABC Inc.](#challenge-defining-the-business-case-for-abc-inc)
  - [Solution: Defining the business case for ABC Inc.](#solution-defining-the-business-case-for-abc-inc)
- [**3. Define the Requirement Patterns**](#3-define-the-requirement-patterns) (7 videos)
  - [Designing for storage](#designing-for-storage)
  - [Designing for compute](#designing-for-compute)
  - [Designing for data and database](#designing-for-data-and-database)
  - [Designing for secuirty](#designing-for-secuirty)
  - [Designing for governance](#designing-for-governance)
  - [Designing for CloudOps and FinOps](#designing-for-cloudops-and-finops)
  - [Other services to consider](#other-services-to-consider)
- [**4. Advanced Cloud Architecture Design Concepts**](#4-advanced-cloud-architecture-design-concepts) (9 videos)
  - [Map requirements to storage](#map-requirements-to-storage)
  - [Map requirements to compute](#map-requirements-to-compute)
  - [Map requirements to databases](#map-requirements-to-databases)
  - [Map to security and governance](#map-to-security-and-governance)
  - [Map to cloud operations (CloudOps)](#map-to-cloud-operations-cloudops)
  - [Map requirements to an AI solution](#map-requirements-to-an-ai-solution)
  - [Making sense of it all](#making-sense-of-it-all)
  - [Challenge: Defining the cloud architecture requirements for ABC Inc.](#challenge-defining-the-cloud-architecture-requirements-for-abc-inc)
  - [Solution: Defining the cloud architecture requirements for ABC Inc.](#solution-defining-the-cloud-architecture-requirements-for-abc-inc)
- [**5. Other Advanced Topics**](#5-other-advanced-topics) (9 videos)
  - [Performance management](#performance-management)
  - [Proactive security](#proactive-security)
  - [Serverless](#serverless)
  - [Containers and container orchestration](#containers-and-container-orchestration)
  - [IoT and edge computing](#iot-and-edge-computing)
  - [Machine learning, generative AI, agentic AI, and deep learning](#machine-learning-generative-ai-agentic-ai-and-deep-learning)
  - [Multi-cloud](#multi-cloud)
  - [Low-code and no-code](#low-code-and-no-code)
  - [Emerging technology](#emerging-technology)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learn to stay state of the art](#learn-to-stay-state-of-the-art)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making decisions around cloud architecture design](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=0)** - [[Cloud Computing]] architecture is often the most overlooked aspect of cloud deployment. It's the art of selecting the right technology and configuration to bring the most value back to the business. If current [[Statistics]] are any indication most companies get this challenge wrong. The challenge is that many enterprises make decisions that are not optimized for business or don't meet their requirements in other ways. Hi, I'm David Linthicum, an internationally-known cloud expert and consultant. In this [[LinkedIn]] Learning course, I use pragmatic examples and explain processes to help you gain an understanding of the steps to take to make successful cloud architectures or design decisions the first time. I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[Statistics]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - cloud (1)

#### [What you should know](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=0)** - To get the most out of this course, you should understand [[Enterprise Architecture]], both traditional and cloud-based systems. And it's helpful to understand the basics of computing, including compute, storage, and networking. It's also helpful to understand other more advanced topics, including security and governance. But if those are not on your list of skills, we'll provide enough information here to help you keep up. If you're not yet comfortable with some of the topics mentioned, I suggest you review one, two, or all three of the following courses: Learning [[Cloud Computing]]: Core Concepts, [[Cloud Architecture- Core Concepts]], and Learning Cloud Computing: Public Cloud Platforms. That should help you get up to speed on most of the topics we'll cover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Enterprise Architecture]] (1)
> **Speakers:** - to (1)


### 1. Beyond Basic Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking your architecture to the next level](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=0)** - What is cloud architecture? Cloud architecture is best defined as configuring [[Cloud Computing]] technologies and traditional technologies in a way that supports the business's current and future requirements. This means that we're leveraging technology to meet the business's needs, not the other way around. This course focuses on understanding your business's requirements and then picking the right cloud technology components or architecture to satisfy them, thus making the right design decisions. As you move through your cloud architecture journey, the availability of today's technologies, including on-demand [[Cloud Services]], enables you to pick and configure as many as 10 factorials of possible technology combinations to form your cloud computing solution or architecture. If you're not sure what that number is, it's a lot. Most of these configurations will likely work, And by work, I mean they meet the business's needs minimally. However, as the [[Microsoft Word|word]] implies, these architectures are likely minimal and not optimal. This means that while they work, they may cost more to run and not meet all of the business requirements in some way. As such, many of these working cloud computing architectures end up costing businesses more money because they leverage cloud technology in an underoptimized way. Therefore, good cloud architecture is not just about creating a solid architecture.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=94)** It also includes application and infrastructure level design, [[Deployment Planning]], operation planning, security design, [[Database Design]], and about a hundred other things that will likely make up your cloud computing architecture. It's about creating an architecture that meets the business's needs, and addresses most or all of the requirements, as well as being fully optimized. So it should work for the least amount of cost, provide the most efficiency, meet most of the business's needs, and provide the lowest amount of risk. Of course, this applies not only to the first instance of the cloud computing architecture, but also to changes that the architecture will likely undergo as it progresses into the future. In other words, it's optimized now, and will continue to be optimized to meet the business's needs moving forward. Therefore, I recommend considering these principles when you begin to develop your design. Cloud computing architecture is about creating solutions that work and are close to fully optimized as possible. It includes creating a path forward for the architecture and understanding that it needs always to be optimized to meet the business' needs. It demonstrates an understanding of things in the wide, such as strategic use of this technology, as well as things in the narrow, such as application design, and deployment details, and the use of [[DevOps]],
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=186)** and other development best practices, and tooling. Remember that this is about optimizing the cloud technology to add the most value to the business. If you keep that in mind, you can't fail. It also includes application and infrastructure-level designs, deployment planning, operations planning, security design, database design, and about a hundred other things that will likely make up your cloud computing architecture. It's about creating an architecture that meets the business' needs, and addresses most or all of the requirements, as well as being fully optimized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (7), [[Deployment Planning]] (2), [[Database Design]] (2), [[Cloud Services]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** means that (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Prerequisites:** configure (1)
> **Speakers:** - what (1)

#### [Advanced architecture scenario: HR systems](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=0)** - Let's start with an example of advanced architecture and how to get started. First, remember that we're focusing on advanced cloud architecture examples. This builds upon other examples you may have seen in other courses that focus on just the basics, such as storage and compute. Cloud architectures are more complex in real life, and an advanced understanding of those choices can show you what you'll likely be facing in the real world. For example, we'll focus on just a division in a company rather than the entire company. Remember that you'll often also need to take on similar architecture projects, at least at first, so that you can solve the problems in a shorter period of time and with less complexity. For example, let's create a cloud solution for the HR department within our company. The first step is understanding HR's requirements regarding what cloud architecture should address. The short list includes resume/CV storage, resume search and retrieval, employee information management, compliance processing and governance, HR [[Application Development]], et cetera. Of course, a list of requirements that will drive a cloud architecture project is usually several hundred items long, but for this example, we're using our short list of requirements. Our next step is to define different levels of detail such as resume/CV storage, cloud database, [[Database Design]], database security, database governance,
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=98)** database monitoring, self-healing, ops reporting. From here, we can look at the solution patterns that should be used. We do this at several layers, which also define different levels of detail. For instance, [[Cloud Computing]] architecture for HR. Logical architecture means no specific technology is considered. Physical architecture, meaning that we're adding specific technology decisions such as naming the technologies we will be leveraging. [[Deployment Planning]] are how we build and deploy our solution. Operations planning are how we're going to operate our solution ongoing. Continuous improvement are how we will improve our solution is ongoing. We're looking for an in-state that answers most of the business's questions and addresses most or all of the business's requirements. For example, how do I process a sales transaction? Or, how do I find the lowest cost shipping with the best customer experience? Architecture is, at the end of the day, really just a list of technologies and how they interact to solve problems. Of course, if you do this correctly, you should have an almost fully optimized cloud computing architecture that solves the problems listed now and will do the same in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Application Development]] (1), [[Database Design]] (1), [[Deployment Planning]] (1)
> **Analogies:** such as (3), for example (3), for instance (1)
> **CLI Commands:** find (1)
> **Speakers:** - let (1)

#### [Advanced architecture scenario: Edge computing](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=0)** - Edge computing systems are becoming more common as [[Cloud Computing]] architects learn to extend processing and [[Data Storage]] as close to the source as possible. Edge computing places, aspects of systems outside of centralized processing, such as a public cloud, on remote devices, or computers. For example, that smart thermostat in your house may be an edge computer that works with some centralized servers. This provides a performance advantage considering that the data does not need to be transmitted back to the public cloud for processing and storage, at least most of the time. Edge computing is a part of cloud architecture, since edge systems typically work with a public cloud provider and thus are at the edge of clouds. The benefits of edge computing are that the systems are decoupled from the centralized cloud, improving response times and saving bandwidth. Of course, they are complex regarding the solution with more computing layers and data storage systems involved. This extra work required when creating a cloud computing architecture that leverages edge computing would be network connectivity to edge device, edge device data storage and [[Data Processing]], edge device [[API Management]] are how cloud applications leverage the edge device, uses a set of services, typically web services, edge-based [[Application Development]] and deployment, edge device operations and maintenance,
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=96)** edge device security, et cetera. In this situation, consider placing each architecture into a subdomain. For example, consider the concepts and technology components that make up the edge computing processing, both in the cloud and at the edge device, separately from the [[Representational State Transfer (REST)|rest]] of the architecture. This has been the benefit of allowing you to focus just on this problem. A good pro tip would be when an architecture is too complex to manage successfully as a whole, break it up into sub architectures that are easier to manage. Too much complexity kills cloud architecture design efficiency. The architect is tracking too many things at once, and the number of concepts and technologies that he or she must deal with becomes overwhelming quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (3), [[Cloud Computing]] (2), [[Data Processing]] (1), [[API Management]] (1), [[Application Development]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - edge (1)

#### [Advanced architecture scenario: Containers and Kubernetes](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=0)** - The purpose of this video isn't to turn you into a container or [[Kubernetes]] expert. We're just using this technology pattern as an example of an advanced [[Cloud Computing]] architecture that you might use if it satisfies one or more requirements of your cloud computing solution configuration. Kubernetes is a system that manages containers or containerized applications. A container is a lightweight virtual machine that allows you to run applications within the container much the same way as you would within any platform. The difference is that a container can run on a platform, even several on a single platform, such as [[Linux]] and [[Windows]] NT. Container orchestration and clustering using Kubernetes is a clear trend in the world of cloud computing now. Kubernetes is an open source platform that manages these containers across private and public cloud platforms. You can also leverage Kubernetes to manage microservice architectures. [[Microservices]] are more fine-grained and thus more usable since they provide discrete functionality. For example, they can offer a simple verification function for a text record rather than a complete database scan. Containers and Kubernetes are deployable on most cloud providers and allow you to easily port applications running inside a container from cloud to cloud
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=96)** with little or no modification. The combination of container and Kubernetes provides some useful advantages, including the ability to scale through clustering, allowing the containers to operate in parallel. Containers and Kubernetes should not be considered architecture, but enable technology that supports architecture. Only when these requirements are understood do we look for the potential technology solutions. So here too, we must first understand our logical architecture and then create the physical architecture. Physical architecture means assigning technologies to solve problems, and in this case, we're assuming that Kubernetes was selected to meet the architecture's needs. Then we would pick working solutions such as leveraging the Kubernetes implementation on AWS, which is Amazon Elastic Container Services for Kubernetes or Amazon EKS. Note that [[Microsoft]] and [[Google]] have similar Kubernetes services within their cloud offerings. The point to be made here is that first Kubernetes is simply an instance of an advanced cloud computing architecture that you can leverage many ways. Second, keep in mind that Kubernetes is not itself an architecture. It's simply enabling technology that we can leverage within an architecture to solve specific problems and meet the business requirements.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=189)** Finally, while Kubernetes is very popular and certainly is hyped in the marketplace right now, it's the architect's job to find the logical and physical architecture that provides the best optimized solution. Any technology selection you need to use to do that is the right solution, Kubernetes or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (16), [[Cloud Computing]] (4), [[Linux]] (1), [[Windows]] (1), [[Microservices]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** aws (1), find (1)
> **Env Vars:** aws (1), eks (1)
> **Warnings:** note that (1), keep in mind (1)
> **Speakers:** - the (1)

#### [Advanced architecture scenario: Serverless computing](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=0)** - Much like other cloud technology trends, [[Serverless Computing]] is changing aspects of how we do [[Cloud Computing]] architecture. Serverless computing enables cloud architecture technology, or how we design, build, and deploy specific applications using serverless technology. So, larger, more strategic problems related to cloud computing architecture, such as infrastructure design, security, governance, and operations, still form part of the larger architecture. Serverless is simply focused on enabling technology about how we deploy and operate applications serverless. Serverless computing allows you to let the serverless computing cloud service allocate just the right amount of resources needed to run your application. Thus, we don't have to pick the resources that we think we'll need, such as storage and compute. It does this automatically behind the scenes. The term serverless is a bit confusing. We're still using virtual servers, such as storage and computing. However, we don't have to pick and configure those virtual servers. It's done for us. The advantage here is that by allocating the public cloud provider to automate the selection and allocation of resources, we don't have to do it prior to running the application. When this is left to humans,
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=92)** common mistakes may be made, such as allocating too many resources, driving excessive costs, or not as many resources as needed, which could cause performance issues during operations. Here is the list of the core benefits. Extended to different technologies. Faster to deploy. Can be more cost effective. While each serverless system from each cloud provider takes different paths when it comes to what serverless computing is and how it is leveraged, fundamentally, this is about dividing applications into functions or ways to allocate tasks that an application needs to perform. These are implemented in the serverless system, which picks only the resources needed to execute a function at runtime. For example, we're leveraging a serverless computing system to support an inventory application. By using serverless, we can have the serverless computing system pick the resources we need when at the application runs. This comes in handy when our inventory application that sees seasonal spikes, such as around the holidays when demand for inventory searches goes way up in support of customers looking to purchase gifts. Thus, as you can see here, we need to determine a few things, including, what are our requirements? What is our logical architecture? Would serverless be a fit, and which serverless system should we employ?
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=187)** So, the key things we need to consider when leveraging serverless as our core enabling technology for an application or a complete system includes, is it advantageous to have automation choose the right resources for us? Is it worth the time and money required to alter an existing application to leverage serverless features? And are we willing to deal with a lock-in issue, since leveraging a serverless system within a single cloud provider will tie us to that cloud provider moving forward? Moving from one serverless system within a single cloud provider to another entails significant work in rewriting and reconfiguring an application. These are the things to consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (7), [[Cloud Computing]] (2)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - much (1)

#### [Advanced architecture scenario: Generative AI computing](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=0)** - In this video we will break down a cloud-based [[Generative AI]] architecture, specifically, a case study examines enterprise content generation applications using generative AI. For example, a mid-size marketing firm must generate customized content at scale while maintaining brand consistency. They need something that works today, not a science project that takes too long to build. Here's a no-nonsense generative AI cloud architecture. Core components. We have a data layer, AWS S3, which is a data lake, [[Pinecone]], which is a vector database, and [[Redis]] for data caching. We have a processing layer, [[GPT-4]] on [[Microsoft Azure|Azure]] from OpenAI, which is the primary large language model, SageMaker, which is the custom model, and [[Kubernetes]] orchestration. And then we have an integration layer, API Gateway for external access, gRPC for internal communication, and OAuth2 for authentication. The system uses a three-tier architecture with automatic scaling and failover. Data flows from the storage layer through the processing tier where Kubernetes orchestrates the AI workloads. The integration layer handles external communication and security. So what are the key features? Horizontal scaling via Kubernetes, multi-region deployment,
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=94)** async processing for long jobs, edge computing for latency reduction, Prometheus Grafana for monitoring, and an ELK stack for logging. This architecture supports enterprise scale content generation while maintaining cost efficiency through intelligent resource utilization. It's built to handle millions of requests without requiring a PhD to retain it. This is a practical, maintainable system that delivers business value without unnecessary complexity. It works, scales, and won't break the bank. Now let's look at the same problem and solution using an agentic architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Kubernetes]] (3), [[Pinecone]] (1), [[Redis]] (1), [[GPT-4]] (1)
> **Env Vars:** aws (1), gpt (1), api (1), elk (1)
> **Definitions:** is a  (3)
> **CLI Commands:** aws (1)
> **Code Identifiers:** grpc (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Advanced architecture scenario: Agentic AI computing](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=0)** - In the last video, we looked at an enterprise content generation application that used [[Generative AI]]. In this video, I'll show you a straight to the point architecture for a cloud-based autonomous AI agent system that can independently reason, plan, and execute tasks. Again, this is just an example. There are complete courses here on Agentic AI architectures. Please seek those out if you are interested in Agentic AI running on [[Cloud Computing]] systems. Thus, some of this may seem a bit cryptic, but it's designed to provide you with a real world example. Let's dive in. Core components are: the agent layer, [[LangChain]] for agent orchestration, AutoGPT for autonomous processing, vector memory store for agent state, and [[React.js|ReAct]] framework for reasoning engine. Execution layer: function calling API, tool integration framework, AWS Lambda for serverless actions, and [[Microsoft Azure|Azure]] OpenAI for the core large language model. And finally, the control layer: agent supervisor systems, safety guardrails, performance monitoring, and resource management. The architecture follows a closed loop system where agents observe, plan, and act. The agent layer handles decision making and planning while the execution layer carries out actions
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=95)** through integrated tools and APIs. The control layer provides supervision and safety constraints. Key features of this architecture include: multi-agent coordination, persistent [[Memory Management]], tool use framework, self-correction capabilities, [[Real-Time]] monitoring, and failure recovery. The system enables autonomous [[AI Agents]] to perform complex tasks while maintaining control and safety. It's designed for enterprise use cases like automated research, customer service, and process automation. Don't get fixated on all the components that are used. That will change from year to year. Focus on the architecture's macro attributes such as execution interfaces, and agent and control layers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Cloud Computing]] (1), [[LangChain]] (1), [[React.js|React]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** api (1), aws (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the last (1)
> **Speakers:** - in (1)

#### [Necessary skills, tools, and processes](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=0)** - So what skills do you need to be a good [[Cloud Computing]] architect and make good design decisions? Let's look at a few. Cloud computing architects should have an advanced knowledge of cloud technologies, including what they do and how they work. A mandatory skillset is advanced knowledge of common cloud-based resources, such as storage, computing, database, security, et cetera. However, it's not expected that you understand every detail about how each separate resource works. General knowledge is the most helpful, but knowing some specific features and being willing to learn as you go is also very beneficial. So while you may understand the fundamental differences between object storage on AWS, [[Google]] and [[Microsoft]], you may not be able to compare each at a detailed level, such as APIs. That's okay. Also, it's helpful to understand technologies you're likely to consider leveraging within your architecture, such as serverless containers, [[Kubernetes]], [[Microservices]], no code, low code, and other approaches that may provide you with a few advantages. It's not just about seeking ways to use these technologies, it's about understanding them and the potential roles. Most good cloud architects have open minds regarding technology solutions,
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=93)** understanding that if something is not a fit for a specific problem domain, it may be a fit for other solutions. The struggle is to understand that we're looking for the most optimized solution, and you'll only find that if you consider everything as a potential building block. Finally, consider all of the processes and tools that you can leverage. Most good architects have predefined processes or methodologies that they can employ. These checklists ensure we're looking at all aspects of the requirements and potential solutions. You'll find that we're asserting a specific process or approach here. However, you can certainly continue to explore other options and create your own. Tools are often confusing for architecture, considering that many tool providers oversell the value of tools for architecture and they change rapidly. Tools are needed to perform tactical tasks such as system inventory, [[Data Management]], security planning, and other tasks an architect must tackle. The best advice here is to rely on tools to carry out specific architect tasks more efficiently, but no matter what they claim, tools don't automate all of the architecture. If this looks like an eclectic array of needed skills, you're right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Google]] (1), [[Microsoft]] (1), [[Kubernetes]] (1), [[Microservices]] (1)
> **CLI Commands:** find (2), make (1), aws (1)
> **Analogies:** such as (4)
> **Env Vars:** aws (1)
> **Speakers:** - so (1)


### 2. Define a Business Case

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a business case](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=0)** - We always start any cloud project with a business case, whether a simple migration of a set of applications and data or building new systems in the cloud. We always need to provide a business justification for spending money and taking a business risk. So why is building a business case a part of design decisions? First, we won't know the utility of our [[Cloud Computing]] architecture, including design decisions we need to make, until we're sure it will add value to the business. Keep in mind, that's the most critical objective. Second, cost becomes a significant factor in picking the right technology and architecture configurations in terms of what it costs to build and operate continuously. Finally, this also allows us to consider the cost benefit trade-offs for each design decision that we're making. For example, leveraging containers in [[Kubernetes]] consistently throughout an architecture, could lead to the most and the least optimized solutions. It's a matter of considering the business problems you're looking to solve. While there are many ways to categorize the cost and benefits of leveraging cloud-based solutions, the most important ones to consider are hard and soft costs and hard and soft benefits. We'll explain these in the following few videos, but the best way to understand these concepts is how businesses perceive them. Soft costs and benefits are business values
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=95)** that take more work to understand and estimate. These are indirect cost impacts, such as use of one system that benefits [[Human Resources (HR)|human resources]], but impacts the legal department, because it causes them to deal with more complexity, which costs that group more. Both sides of these issues need to be understood. Soft benefits are even more challenging to determine. These are inherently difficult to measure values that return to the business. Examples include more business agility and how that agility impacts the business around additional potential sales. Hard costs and benefits can be directly related to a specific design decision. For example, the cost of technology per month is provided by a public cloud provider. A hard benefit would be cost savings directly related to using that technology, such as reducing the need for physical data center space that's being replaced by cloud computing. These are really about understanding the cost benefit trade-offs. While businesses have grappled with this for decades, it still requires a hard look when evaluating how to leverage cloud computing effectively. Please take your time in doing this analysis, and ensure that you can answer the more challenging questions from your leadership and other stakeholders. You may follow this general process or customize it for your own use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (3), [[Kubernetes]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)

#### [Soft costs and benefits](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=0)** - Soft costs and soft benefits are not as obvious to determine and thus assumptions need to be made, many which cannot be calculated to the dollar. For example, we all know the benefits of agility for a business. Adapting quickly to market changes allows you to grow the business faster. However, it is difficult to determine the exact benefits for a business and the value of those benefits. Much the same can be said about soft costs. For example, moving to the cloud may require extensive retraining and hiring, and these costs take work to determine dollar for dollar. Thus, educated estimates are made and adjusted ongoing. Moreover, there may be additional harder to predict costs, such as a decrease in sales as the enterprise moves to the cloud, which could occur if the new system impacts the time it takes to learn the latest systems and develop an understanding that will drive short-term efficiency. This is sometimes known as transition cost, a soft cost since we don't understand precisely how many sales will be lost, only that it's likely. It still needs to be considered and factored when estimating costs and the benefits of moving to the cloud. Understanding soft costs and benefits is important because while both are difficult to determine, they are significant factors in moving to the cloud.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Definitions:** known as (1)
> **Speakers:** - soft (1)

#### [Hard costs and benefits](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=0)** - We've looked at soft costs and benefits. Now let's look at the hard costs and benefits. Examples include the usage cost of [[Cloud Storage]], such as the cost of gigabytes or the time the storage system is used. The benefit of cost savings is not having to purchase and maintain storage [[Hardware]]. These are relatively obvious, meaning that they can be defined as the dollar in terms of money spent, the hard costs, what money is saved, or the hard benefits. As such, these costs and benefits are generally the easiest to define when making a business case for your [[Cloud Computing]] architecture. This information is critical to design decisions because it defines the cost and benefit of each decision. Typically, these calculations are assigned dollar values. Enterprises often leverage FinOps, or [[Financial Operations]], to gain more control over spending and the true benefits that can be measured. Simply put, this is a set of processes, approaches, and tooling that allows you to track money spent on cloud-based resources, such as storage, compute, [[Databases]], AI, or anything cloud service providers charge for. These processes also enable tracking consumption, as in who's consuming what, when, how, and how much, and other details about what the enterprises are consuming. This allows you to allocate costs
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=96)** to different departments, people, and projects. It also shows when money may be being wasted and when budget overruns occur. Most FinOps systems can even limit spending. Other advantages of FinOps is the ability to identify and understand any existing hard benefits. For example, the ability to calculate the savings around using cloud-based resources. So we understand that while cloud storage systems cost $500 a month, by avoiding the purchase and operations of a physical storage system, we're saving $1,500 a month, and that's a hard benefit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (2), [[Hardware]] (1), [[Cloud Computing]] (1), [[Financial Operations]] (1), [[Databases]] (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** defined as (1), is a  (1)
> **Speakers:** - we (1)

#### [Economies of optimization](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=0)** - One important thing to consider is that when we design a [[Cloud Computing]] architecture, even if we have the exact business requirements, the cloud solution or architecture we create may differ significantly from those produced by other cloud architectures and cloud architects. This is due to a few reasons. First, is technology bias. We like to leverage the technology we're most familiar with. A cloud architect who uses AWS regularly may find that he or she has a bias toward that specific cloud provider. Second, we may need to understand that a technology solution is an option. We can learn everything about all technology, but unless we invest the time in research, we may miss better architectural options, or make a design decision. Finally, we need to look at the core optimization metric first. We are not testing to see if our cloud architecture solution is nearly at 100% optimized as possible, so considering these factors listed previously that may yield an underoptimized solution. We need to understand that underoptimized solutions are not reasonable because they cost more to run and don't return the most business value they can. They often are not recognized as underoptimized and considered a great success.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=94)** This is due to the only metric that many consider, which is, "It works." Keep in mind that just because something works does not mean it's the best and most optimized solution. Due to this, it's suspected that many solutions are costing businesses millions of dollars a year in wasted money because they don't make the correct design decisions. Cloud solutions can be underutilized and overutilized, meaning, that we can leverage technology that is overpowered for the requirement and cost much more. And despite the additional cost, we're not seeing the benefit to the business. Most cloud solutions implemented during the past 10 years need to be optimized. Indeed, if companies did an honest audit of what was deployed versus what should have been deployed, a very different picture of a truly optimized cloud solution would emerge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1)
> **CLI Commands:** make (2), aws (1), find (1)
> **Env Vars:** aws (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### [Leveraging AI as a innovative differentiator](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=0)** - Let's cut through the hype and discuss how AI can transform your cloud architecture solution into a competitive advantage for business. Strategic differentiators. Intelligent resource management. Instead of static allocation, AI predicts resource needs in [[Real-Time]], automatically scaling and optimizing [[Cloud Infrastructure]]. This means better performance at lower cost than traditional approaches. Predictive architecture. Your cloud-based AI system becomes proactive rather than reactive. AI can analyze patterns to predict failures, automatically route traffic, and optimize data pass before issues occur. The benefit is that they can deliver better uptime and better [[User Experience (UX)|user experience]]. Smart data handling. Traditional architectures treat all data equally. AI driven systems intelligently tier data, optimize storage patterns, and automate data lifecycle management based on usage patterns and business value. Adaptive security. Moving beyond rule-based security, AI enables real-time threat detection, automatic response, and continuous security posture adjustments based on emerging threats and system behavior. Self-optimizing systems. The architecture continuously learns and improves itself based on real-world performance data, [[Databases]] queries, self tune, [[Microservices]],
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=94)** auto-adjust, and [[Routing]] optimization. So what are the cost benefits of using AI, including [[Generative AI]]? Here are some examples. 30 to 40% reduction in operational cost, 50% improvement in resource utilization, 25% faster incident resolution. The real advantage? While others are still manually tuning their cloud infrastructure, an AI-driven architecture gives you a self-optimizing system that continuously improves. In other words, you're building a system that does not just leverage static logic, but can change behavior over time. Now that's pretty cool. We urge you to check out our other AI courses here to dive deeper into the benefits of AI for your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Cloud Infrastructure]] (2), [[User Experience (UX)|User experience]] (1), [[Databases]] (1), [[Microservices]] (1)
> **Definitions:** in other words (1)
> **Speakers:** - let (1)

#### [Economies of complexity](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=0)** - In [[Cloud Computing]] architecture, complexity is having too many things to keep track of, which can lead to other problems, including issues with operations, security, and governance. For instance, if I'm leveraging a multi-cloud deployment, I may have eight different storage systems to manage, whereas a single cloud deployment, I may have two or three. Cloud computing architects choose to design and deploy more complex heterogeneous cloud solutions because they are attempting to leverage the best combinations of [[Cloud Services]]. Indeed, heterogeneity means that we're living in different types and brands of technology. For instance, storage from AWS and [[Microsoft]] is part of the same solution. Considering our storage example, we may choose to leverage storage from more than a single cloud provider because those specific storage systems have features and functions that we need to solve a specific problem. Thus, where only one storage system, such as Microsoft's Object Storage works best with application A, an entirely different storage system, such as Amazon Web Service's EBS, or Elastic Block Storage, works best with application B. So, the tradeoff is complexity versus optimization. Each meaning single and multi-cloud deployment has its own native features and function specific to a cloud provider storage system. With a complex system, I'll need to keep people around with the skills needed to deploy
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=95)** and operate each storage system type and brand of cloud. So, just as within the previous video, we made the case that we need to focus on the economies of optimization, which typically drives us to select the best of breed. The result may be more complex, which costs more and adds risks. Regardless, the objective remains the same, to return the most value to the business you can.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Microsoft]] (2), [[Cloud Services]] (1)
> **Analogies:** for instance (2), such as (2)
> **Env Vars:** aws (1), ebs (1)
> **CLI Commands:** aws (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Speakers:** - in (1)

#### [Challenge: Defining the business case for ABC Inc.](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=5)** - Welcome to the first challenge of this course. ABC Incorporated, a mid-size manufacturer is hemorrhaging money and market share. Their outdated manual processes and fragmented systems are killing their competitive edge. Current losses are estimated at $2 million monthly with no end in sight. Critical issues, operational inefficiency. 24 hour delays in quote generation leading to crippling sales. 35% inventory accuracy causing stockouts and overstock. 25% production line downtime, bleeding money. Customer churn, spiking 15% year over year. Financial impact is $5 million wasted annually on incorrect [[Forecasting]]. Key accounts lost to more [[Agile Development|agile]] competitors. Profit margins shrinking by 3% quarterly. Market share declined 12% in the past year. With this limited amount of data, your job is to create a high level business case for ABC. Determine if this business is a good fit for [[Cloud Computing]] and what business benefits its adoption might bring to this business. If you would rather not, you don't need to write anything down. We're just attempting to see if you've grasped the general concepts thus far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Agile Development|Agile]] (1), [[Cloud Computing]] (1)
> **Env Vars:** abc (2)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Defining the business case for ABC Inc.](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=0)** - So how did you do? Let's give an example of one potential solution to this problem or a sample business case. Again, just grasp the overall concept. You do not need to come up with the exact solution we're proposing here. The purpose of the architecture is to create a cloud-based AI platform. This may include [[Predictive Analytics]] engine, [[Real-Time]] manufacturing intelligence, automated customer service platform, and intelligent supply chain optimization. Some of the financial benefits include $8.2 million annual cost savings, $12 million revenue increase, 285% ROI over three years and 14th month breakeven point. We're suggesting this implementation plan take 18 months phase rollout, 4.5 million total investment, minimum operational disruption, and comprehensive staff training. And here are the expected outcomes. Five minute quote generation, 95% inventory accuracy, 10% production downtime, and 40% reduction in customer churn. So what's the bottom line? The solution transforms ABC Incorporated from a reactive losing operation into a proactive, profitable leader in their space. $20.2 million positive impact within three years. That's a good business outcome.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=93)** We just need to create the architecture and cloud solution to achieve that level of business value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (1), [[Real-Time]] (1)
> **Versions:** 8.2 (1), 4.5 (1), 20.2 (1)
> **Env Vars:** roi (1), abc (1)
> **Speakers:** - so (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Define the Requirement Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing for storage](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=0)** - In order to make the right design decisions for our [[Cloud Storage]], we need to define and understand our requirements clearly enough to make informed decisions. Storage is fundamental to [[Cloud Computing]] architecture. Most applications in an architecture leverage storage directly, either using the native interfaces that storage systems provide, or through a database that leverages some type of storage on the backend to store, retrieve and manage data. You have lots of choices regarding the type and size of storage you're looking for. While there are many attributes of cloud-based storage systems to consider, we generally need to assess the following. Capacity is the amount of stuff we need to store, such as files, data, and binaries, such as audio and video. We are looking to employ storage models such as block or object storage. To learn more, you may find it useful to take our Cloud Storage Course. Speed, or how well the storage system needs to perform. This includes the internal systems' performance and the networks that connect you to storage. Disaster recovery refers to how the storage system will recover from outages, such as a flood that causes a cloud-based data center to close. Application interfaces are how you'll access the services of the storage system. Growth model, related to capacity, or how quickly the storage system
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=93)** will have to support data growth. For example, will you grow 10 terabytes a month on average? Management of the storage system or how you're going to monitor it during operations. Security, or how the storage system will support the required security. This can be done either through native features of the storage system, or more likely, external security systems that interact with your storage and other systems. Cloud architects often need to pay more attention to storage due to the basic set of services that storage provides. However, storage is the foundation of your cloud computing architecture, and getting storage right will ensure that the foundation is solid. Ensure you get the requirements right and make the correct design decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (2), [[Cloud Computing]] (2)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** refers to (1)
> **Speakers:** - in (1)

#### [Designing for compute](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=0)** - [Instructor] Compute, simply put, is how processing will occur within our [[Cloud Computing]] solution or solutions. This means picking the right processor or CPU, the right amount of memory, and the appropriate operating system. The reason we're including the operating system is because it's typically bound to a CPU and memory. Cloud providers offer a number of choices in terms of what CPU you would like to leverage, including the size and the power, but the amount of memory and the operating system you want is bound to the CPU and type of memory that you'll pick. While there are many aspects to consider in selecting attributes of the best cloud-based compute for your company's needs, generally we must establish the following. Platform requirements. Which include CPU, the type of central processing unit your solution will need. In many cases, you can pick a brand and power of processor in terms of bits such as 32 and 64 bits. Memory. Are the size of the memory you need. Keep in mind that you can leverage less powerful and cheaper CPUs in your cloud [[Server Configuration]], but use more memory to get better performance. Operating system. Are what operating system requirements are understood. Options typically include different brands of [[Linux]], such as Red Hat or AWS, also [[Windows]] NT, et cetera. Speed.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=94)** Or how fast you would like the compute server to process. This is typically represented as megahertz. Disaster Recovery, or how the compute system can resolve outages effectively. Application Interfaces, or how the application should leverage the compute platform. Management or how the compute platform should be monitored and managed. Security. The requirements around secure access to the compute platform. Much like storage, compute platform requirements, are often not thought out as well as they should be leading to over and underspending. Overspending means leveraging less compute than is needed. This results in a more expensive cloud bill, thus diminishing the cloud solutions value. Or underspending, meaning that we're not leveraging the proper amount of compute [[Cloud Services]] and will likely crash the applications once they run out of resources such as CPU and memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Server Configuration]] (1), [[Linux]] (1), [[Windows]] (1), [[Cloud Services]] (1)
> **Env Vars:** cpu (6), aws (1)
> **Analogies:** such as (3)
> **CLI Commands:** aws (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Designing for data and database](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=0)** - Cloud providers offer several choices regarding which database you would like to leverage to store and retrieve data for one or more applications. There are many different types of [[Databases]] to consider, including cloud-native databases, databases that are available on a single cloud provider, third-party databases that are offered on a cloud provider. Even major enterprise database players, such as Oracle and IBM, have cloud-deployed versions that can be leveraged. While there are many aspects to consider when reviewing the attributes of cloud-based databases, generally, we need to focus on the following, capacity, or how much data can be stored. While most databases have huge upward limitations, such as petabytes or more, many cap the amount of data that can be stored or managed at much lower levels. If you fail to notice these limitations when picking a cloud database, you'll get into trouble when the amount of storage needed approaches a predetermined limit. You may like to leverage a database model such as relational, object-based, networked, multidimensional, or columnar, or other more obscure types. This is the logical way that the data is stored and how developers and users think of it. Speed, or how fast the database is when storing, finding, and retrieving data. Some databases may take seconds, while others take hours to do the same function. Speed is typically related
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=91)** to how fast the database can process a transaction, such as updating an inventory database with a new product. Analytics are how we leverage the data to find and determine the meaning of data. Management, or how the database will be managed and operated as part of a managed and operations platform. Security, looking at the [[Data Security]] requirements specifically, and finally, disaster recovery, or features and functions needed to deal with outages and other issues that may interrupt [[Data Processing]]. Cloud-based databases are a complex topic, with hundreds of different ways to do the same thing. Establishing your own requirements upfront will mean that you're providing the best-optimized solution in terms of solving the data problems with the best solution to bring value to the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (8), [[Data Security]] (1), [[Data Processing]] (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (1)
> **Env Vars:** ibm (1)
> **Speakers:** - cloud (1)

#### [Designing for secuirty](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=0)** - Security is systemic to everything that we do in creating and deploying a [[Cloud Computing]] solution. Thus, the requirements regarding what security approaches and technology to leverage should be considered in the narrow. That means how specific applications and data stores need to be secured, as well as the why all of these cloud-based systems and resources work together to maintain holistic security. While there are many ways to evaluate the attributes of cloud-based security, generally, we need to consider the following. Various security solutions are needed, such as identity and access management, or IAM, encryption, multifactor authentication, and other [[Forms]] of security. Disaster recovery are how the security systems can resolve outages effectively. Application interfaces are how the application should leverage the security platform. Management, or how the security platform should be monitored and managed. And finally, special consideration, considering that security requirements are going to be widely different. Unlike storage and computing, which have the same essential functions across [[Cloud Services]], security approaches and technologies are very different and should be adopted specifically for the cloud solution requirements. Thus, you'll have very different security technologies leveraged across applications, systems, cloud, and other solution outcomes. You can't underestimate the need for security
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=93)** for cloud-based solutions, and you'll find that requirements range from very simple to very complex. You need to break your security requirements down into ways that address security for applications and the data bound to the applications. You'll also need to break them down as the systemic system and Cloud Wide Solutions that span all cloud applications, data stores, users, and other things we're interested in protecting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[Forms]] (1), [[Cloud Services]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** iam (1)
> **Analogies:** such as (1)
> **Speakers:** - security (1)

#### [Designing for governance](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=0)** - Governance is the ability to limit the use of [[Cloud Services]], data, and even resources, such as money. The idea here is to find the specific requirements that allow you to access and use what governance will be needed, including the types of governance, how things are governed, and how governance systems link to other systems, such as security. There are a few types of governance to be aware of in [[Cloud Computing]] architecture. They include, Cost Governance is the ability to monitor and limit the usage cost of cloud computing. For example, Cost Governance involves monitoring the costs related to [[Cloud Storage]], including who's using the storage, for what purposes, and how much they are allowed to spend over a predetermined period of time. Resource Governance, or the ability to place limits on the use of resources, such as storage and compute cloud services, for instance, how much storage can be leveraged. And API or Service Governance, or how a specific API or other interface is leveraged, including limitations of controls on its usage. For example, an application interface being used only during business hours. Determining what policies must be implemented is at the heart of defining governance requirements. In governance, policies define how the system will limit the use of money, cloud resources and APIs. During the requirements phase, we won't define these specifically. We'll explain how they will be leveraged
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=94)** once the cloud system or systems go into production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (2), [[Cloud Computing]] (2), [[Cloud Storage]] (1)
> **Analogies:** such as (3), for example (2), for instance (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Speakers:** - governance (1)

#### [Designing for CloudOps and FinOps](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=0)** - Defining cloud operations or CloudOps requirements is often complex, considering that we're defining how many cloud systems we need to be monitored, maintained, and adjusted after deployment, during operations. This process needs to be accurate, considering that this is how the business perceives the usefulness of the cloud-based systems. The cloud-based system or systems can be very well-designed, architected, and built, however, if the system is not operated properly, the business will see it as a failure. The number of outages and other performance issues they have to deal with will detract from considering the system a success. Although there are many aspects to CloudOps, here are some essentials to consider. Performance operations, or PerfOps, are how well the system performs up to the requirements of the business. Keep in mind that this is only sometimes equal to high speed, but only enough performance to meet the needs. If we're always building for high performance, we may be wasting money if that level of performance is not needed. Also, that performance can be many things, including database, network, processor, I/O, et cetera. [[Security Operations]], or SecOps, refers to the ability to keep the core security system running up to expectations continuously. Governance operations, or GovOps. This means the ability to keep all governance systems operating in an ongoing manner. Data operations, or DataOps,
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=95)** the ability to keep the [[Databases]] working as expected. Application operations, or AppOps, involves consistently operating the applications to meet the business's needs, and other ops, which needs to include edge computing, container operations, and website operations. The list consists of dozens of architectural attributes we need to keep functioning. We also need to understand operations well enough to select the correct monitoring and operations technologies. This includes cloud ops tools, such as [[AIOps]], or AI-enabled operation, which allows us to monitor the system that needs to be monitored and deploy self-healing functions to fix issues before they are known to the business, also leveraging AI capabilities to adjust how the systems operate automatically without humans being involved. The truth is that most will judge the success of your cloud solution based on its long-term operations. That said, many architects neglect this aspect of cloud architecture, since they only work on the system's initial success. Avoiding operational problems should always be a priority.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Operations]] (1), [[Databases]] (1), [[AIOps]] (1)
> **UI Navigation:** select the (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - defining (1)

#### [Other services to consider](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=0)** - Of course, new technologies are arising each year and how we understand the requirements correctly to make the proper design decisions means being open-minded about what technology you may be leveraging. New paradigms, such as the rise of edge computing and [[IoT]] are examples of requirements cloud architects are dealing with now that were not dealt with 10 years ago. Other services include AI-based [[Cloud Services]], [[Serverless Computing]], containers and new trends that the cloud industry has yet to understand. The notions are the same. While the types of technologies will change over time, the ability to define requirements around their proper use remains the same. The suggestion is that you leverage a standard template or checklist to ensure that you consider what requirements need to be understood and what is important to understand. Of course, each list will differ in terms of the types of technology and systems you're defining requirements for and how the business will likely leverage those technologies most effectively. In other words, this is a journey that will go on for some time. Your ability to understand the business' requirements and how those requirements map into the right design decisions is fundamental to your success in building valuable cloud-based systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Cloud Services]] (1), [[Serverless Computing]] (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** iot (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Speakers:** - of (1)


### 4. Advanced Cloud Architecture Design Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Map requirements to storage](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=0)** - Okay, by now, we should have a detailed understanding of our storage requirements to choose a set of storage services from cloud providers. This is the process of mapping the business requirements we discussed in a previous video and assigning more technical attributes to those requirements, which should allow you to easily pick the proper storage system or systems. Note that we're not just focusing on a single storage solution. Most cloud architectures in the real world are a mix of storage services, such as block, object, and file storage, sometimes from more than a single cloud provider. This is the case in supporting a multi-cloud deployment, which is now fairly common. So let's get into it. The core effort here is to translate the requirements into a [[Cloud Storage]] solution. To do this, we'll look at the following attributes: capacity, or the gigabytes or terabytes needed to support production. Storage models typically consist of object, block, or file storage types. Speed, the response time of the storage systems or the performance of the I/O, input/output, system. Disaster recovery, or the ability to support active/active, having running redundant storage or active/passive, having one system ready to take over, but not actively running. Application interfaces, or the API, services for accessing storage. Growth model or the gigabyte growth over time.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=96)** Cost of storage are how much the cloud service costs now and will likely cost in the future. Management of the storage system, including updates, fixes, and other configuration changes. And finally, security, including security systems supported for the storage system, including identity access management and encryption. As you can see, there are lots of things to take into account when considering what storage systems to select. What was presented here is most of what you'll need to think about when picking the right cloud storage to meet your requirement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (2)
> **Cross-References:** we discussed (1), previous video (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - okay (1)

#### [Map requirements to compute](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=0)** - Okay, by now we should have an understanding of what our compute requirements are in enough detail to pick an actual set of compute platform services from cloud providers. This is the process of mapping the business' requirements we discussed in a previous video with the process of assigning more technical attributes to those requirements. Then, comparing and combining these requirements should enable you to easily pick the proper compute system or systems. Again, this could be many types of compute that run on many brands of cloud providers. Be prepared to deal with complex solutions with many different dimensions. There are many different compute options just within a single public cloud provider. Platform requirements are fundamental to what we're attempting to pick here in terms of a compute platform, which includes CPU or the brand and type of processors we want to leverage, such as Intel or AMD, and memory, or the speed and size of memory we want to leverage. It's important to spec out how much memory and what type of CPUs that you need because you can easily oversize or undersize the power that you need. Neither is good. You need to find a cost effective balance. You'll also need to identify what operating system or what operating systems are available from your cloud provider, such as different brands of [[Linux]]
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=96)** or [[Windows]] NT. You'll need to plan for disaster recovery or how the compute platform will recover from issues, such as outages. Your options to consider are active/active, or two compute platforms running at the same time, with one backing up the other, or active/passive, meaning that one of the compute platforms is only deployed if the first platform is down. This takes more time to fail over to a new platform, but typically costs less. You'll need to determine application interfaces, meaning that we're looking at what APIs are available to interface with our compute platforms. For example, APIs need to spin up more compute instances. Management of the compute platforms, including system maintenance or how the compute platform will be updated and fixed ongoing. [[Configuration Management]], meaning that we're tracking the configuration of the platform ongoing, including any changes. This allows us to fall back on previous configurations that are known to work. And security. Security including identity access management and encryption. Keep in mind that compute is typically secured while being coupled with data. Thus, many of the same principles of database and storage security are leveraged here as well. As you can see there, there are lots of things to consider when selecting compute systems for potential systems. What was presented here is most of what you'll need
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=193)** to think about when picking the right cloud platforms to meet your requirement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Windows]] (1), [[Configuration Management]] (1)
> **Analogies:** such as (3), for example (1)
> **Prerequisites:** you'll need (3)
> **Env Vars:** cpu (1), amd (1)
> **Cross-References:** we discussed (1), previous video (1)
> **CLI Commands:** find (1)
> **Documentation:** spec (1)
> **Warnings:** keep in mind (1)

#### [Map requirements to databases](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=0)** - [Instructor] [[Databases]] are a part of all cloud deployments, and they provide a structured way to store and access data from many connected applications. There are many types of databases, both native to a cloud provider and third party databases. Sometimes there are traditional databases such as Oracle and DB2. Sometimes there are open source databases such as [[MySQL]], and sometimes there are databases you'll only find in specific cloud providers, such as AWS's DynamoDB. Keep in mind that databases are [[Cloud Storage]]. While all databases are different, many will have you also attach a raw storage system such as object storage to support the database's ability to store data in a more primitive format. There are several things to consider, such as database capacity or how big the databases need to be and the upward limits set. It won't help you if at some point you need to store as much as a petabyte of data and the database only stores up to a terabyte. These limitations are often only understood when it's too late. What type of data will you be storing in databases? We no longer store just text, images, video, audio and non-structured data may also be a part of a database. Also, remember to consider whether it's data that supports mostly analytics or transactions. Different types of data and databases support each.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=94)** Database model or the way that data is structurally stored refers to the way we design and use the database. The storage behind the scenes may differ even if the database models are the same. There are dozens of database models out there, but the two that you'll see the most are relational, which is leveraged by all [[Relational Databases]] like Oracle and MySQL and Object-Based, which is leveraged by DynamoDB and is known to be more open and flexible. If you want to learn more about databases including database models, you may take a database course here on [[LinkedIn]]. Next is database speed. This is the performance that the database provides, typically measured in response time or how fast the database is able to produce information once asked. Yu can break response time down into data in or how fast the database consumes data and data out, or how fast the database produces data. Benchmarks are handy for determining this in more detail or the ability to measure database performance using predefined metrics. We have database analytics or analyzing in making sense of data to find the true meaning of the data. Also, you want to determine if you need to do that in real time, meaning as the data is updated or near time,
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=187)** meaning once the data has existed within the database for some time. And finally, [[Database Management]] or native management features. If the features are native, it could mean having database operations tools provided by the database provider itself native to the specific cloud and to the particular database. Otherwise, database management leverages third party tools that support the management of many databases, including the ones you've selected. Also within this topic is database security, meaning that it can support data encryption for the entire database or just for a specific record as needed. These day, database security typically works with a more extensive security system, thus coordinating with other database security mechanisms. Databases provide vital services for both applications and end users. Also, there are so many choices as to which database technology to leverage that it's difficult to make the right design decisions. However, if you follow your requirements in detail, you'll find that the right solution will be much more easy to find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (14), [[MySQL]] (2), [[Database Management]] (2), [[Cloud Storage]] (1), [[Relational Databases]] (1)
> **CLI Commands:** find (4), mysql (2), aws (1), make (1)
> **Analogies:** such as (5)
> **Env Vars:** db2 (1), aws (1)
> **Definitions:** refers to (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Map to security and governance](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=0)** - Of course, selecting a set of security tools and technology by leveraging our requirements is perhaps the most important aspect of making design decisions around your cloud-based solution. Thus, this is not only our ability to pick the right security approaches and technologies, but also to do so around a meta-design and framework that spans the entire enterprise. So, keep in mind that we're talking about security in the narrow sense here, but it needs to work and play well with the security in the wide. Narrow refers to solution details, such as encryption methods. Wide refers to the most holistic solutions, such as leveraging identity and access management as the overall approach. Governance works in tandem with security, and that is why we deal with it at this planning stage. Again, governance provides the ability to place limitations on how we deal with large and small resources, such as APIs and [[Cloud Storage]]. This allows us to deal with very powerful assets, such as sensitive data, like patient information, and ensure that we're not doing something to destroy or misuse those assets. In short, governance keeps you out of trouble. Security, at its essence, is selecting the right security approach and technologies to meet the requirements that we previously created. While we have a vast amount of methods and technology
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=95)** to consider with security, primarily, we're going to look at IAM, or identity and access management, which enables us to allow or disallow people, servers, [[Databases]], APIs, and other assets to access resources, such as storage, computing, and databases. Encryption allows you to scramble data that's stored. At [[Representational State Transfer (REST)|rest]], being transmitted, or in flight, without specific keys, you can't see the data. Roles are the ability to manage users and even systems by assigning them a role. This means that system administrator roles will have more privileges than a typical user, and so on. In many instances, these are done within the public [[Cloud Security]] management tools, but they can also be leveraged for all systems, both cloud and non-cloud. And directory integration, or where our identities or other data points are stored to drive IAM or other aspects of security. Examples of directories that support IAM include [[Microsoft]]'s [[Active Directory]]. Also, there is a need to integrate these directories so you don't have to access identity information more than once, or a single source of truth. Governance, while similar to security, is about placing policies around the use of resources, such as applications, APIs, storage, compute, et cetera,
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=192)** both within and outside of public clouds. While there are many types of governance, the core design decisions that you'll have to make will include service-based or controlled access to web services, APIs, [[Microservices]], and other services. Resource-based, such as storage, compute, databases, or anything larger that needs to be governed at a more coarse-grain level. Compliance are rules and regulations, such as those that are specific to a vertical industry, like HIPAA. And directory integration. Much like with security, the ability to manage all of these entities and assets using a set of directories that share information or provide a single source of truth. Governance is key to a successful architecture, and understanding the details behind governance is an important part of creating your cloud solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Cloud Storage]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Security]] (1), [[Microsoft]] (1)
> **Analogies:** such as (8), similar to (1)
> **Definitions:** refers to (2), means that (1), is a  (1), is an  (1)
> **Env Vars:** iam (3), hipaa (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - of (1)

#### [Map to cloud operations (CloudOps)](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=0)** - Cloud operations, or CloudOps for short, is really a mix of processes and tools that we'll leverage to operate our cloud solutions long term. Thus, CloudOps is about defining how management and monitoring needs to occur, including putting together tool sets that are able to find issues, as well as fix issues automatically. The number of types of tools that you'll leverage are numerous. What's important here is that you understand what your CloudOps requirements are and back the right approaches, processes, and tools into those requirements. Let's examine some categories of management and monitoring approaches, as well as tooling that you should consider for your design decisions. Management includes [[Configuration Management]] or how we're going to track the current software and [[Hardware]] configuration and manage changes that occur over time. Performance management, or how we're going to deal with performance issues such as working around growing [[Databases]], overloaded compute systems, or other issues that cause performance problems that need to be addressed. [[Security Management]], or how we're going to operate our security solution. For example, backing up our IAM directory systems automatically. Application management, or how we're going to manage applications we've built and deployed. And [[Data Management]], or how we're going to manage
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=95)** the [[Data Storage]] systems, including backing them up, managing growth, and ensuring that they are interfacing correctly with other systems, such as security. Monitoring includes real time, meaning monitoring what's currently occurring within your running cloud solutions, such as watching systems running and alerting a human or an agentic system of a fix, event driven, or the ability to track events, such as batch updates or other things that occur as an event and is not ongoing, analytics, or the ability to find patterns in the operational data that may provide helpful information, such as a storage system that's ready to fail. Application monitoring, meaning looking at a specific application that is running to determine any issues that may appear, such as a container-based application that keeps having to restart due to some networking issue. And finally, data monitoring, or looking at what the data storage systems are doing short and long term to determine any action that may need to be taken. CloudOps is integral to the success of your long-term cloud solution. Make sure it's part of your design decision.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (2), [[Configuration Management]] (1), [[Hardware]] (1), [[Databases]] (1), [[Security Management]] (1)
> **Analogies:** such as (6), for example (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** iam (1)
> **Speakers:** - cloud (1)

#### [Map requirements to an AI solution](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=0)** - Mapping requirements for a cloud-based AI solution follows a similar process to that outlined in this course for storage, compute, and [[Databases]]. First, business requirements for the AI solution must be defined. Then, translate these into technical specifications considering the following, compute, storage, database, CloudOps, security, and governance. Let's go back and unpack these one at a time. Compute, determine the necessary CPU, memory, and operating systems such as GPU-optimized instances or [[Deep Learning]] and [[Generative AI]]. Specify disaster recovery strategy, such as active-active and active-passive as covered in a previous video. Also provide detailed application interfaces, or APIs, that are used to interact with the AI models. Plan for the systems maintenance and [[Configuration Management]]. Implement robust security, including IAM and encryption. Storage, assess the capacity, meaning gigabytes or terabytes, needed for training data, models, and results. Choose appropriate storage models like object, block, or file storage. Specify required speed and IO performance designed for disaster recovery, and consider cost and growth models.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=94)** Implement appropriate security measures such as IAM and encryption. Database, if applicable, determine the database type, capacity, and model best suited for storing and managing AI-related data such as relational or object-based. Consider database speed, such as the speed of data sent and returned from the database. Also, consider analytics needs, such as [[Real-Time]] or near real-time, and management and security requirements. CloudOps, define processes and tools for configuration, performance, security, application, and [[Data Management]]. Establish real-time, event-driven, and analytical monitoring approaches for the AI solution. Security and governance. Implement appropriate IAM, encryption, roles, and directory integration to secure the AI solution and its associated data. Establish governance policies for service-based and resource-based access, compliance with relevant regulations, and directory integration for centralized identity management. The specific security and governance mechanisms will depend on the sensitivity of the data and [[Regulatory Compliance]] requirements. Of course, there are many other things that you may have to consider that are outside of our discussion here. You'll need to focus on your requirements and the right AI solution to meet those needs.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=188)** The key is to align technical choices with specific business requirements and desired operational characteristics. This allows you to deploy an AI system in the cloud without much pain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[Databases]] (1), [[Deep Learning]] (1), [[Generative AI]] (1), [[Configuration Management]] (1)
> **Analogies:** such as (6)
> **Env Vars:** iam (3), cpu (1), gpu (1)
> **Cross-References:** previous video (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - mapping (1)

#### [Making sense of it all](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=0)** - If this is a bit overwhelming, you're not alone. There are many things to consider when developing a cloud architecture solution together, including making the right design decisions. Keep in mind that the right answer is not what your friends are doing to design, build, and deploy their cloud solutions. You are beholden to your own unique business requirements. The trick is to pick the right ones by leveraging processes we're proposing here to achieve the most optimized solution. If you're willing to do the work, it can be done each time. Also, keep in mind that while many solutions and design decisions you'll make might work, that does not mean they're working optimally. There are thousands of permutations of technology configurations that could work. However, most of those won't be the optimal solution and could end up costing the business millions of dollars a month in lost productivity, excessive costs, and perhaps not meeting its needs. To recap, to design and optimize cloud architecture, as a general rule, we need to make sure we've dealt with the following. Data are how the data should be stored and taken care of for the longer term. The same for compute. Management are how we're going to manage the systems and technology we selected longer-term. Monitoring, ongoing of all systems and applications.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=97)** Security and governance configuration and operations. And cloud operations as a whole, meaning that all of what we just listed need to work ongoing, and we need to put in place the approaches and technology to do that. And finally, any other systems that you may need to deal with, such as AI machine learning, [[IoT]], edge compute, serverless, and other systems that need their own special design decisions and operational activities and tooling. It may seem like a lot, but if you understand what we're saying here holistically, you're able to make your own sound design decisions and support a successful cloud deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1)
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)
> **Speakers:** - if (1)

#### [Challenge: Defining the cloud architecture requirements for ABC Inc.](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=0)** - Welcome to the chapter four challenge. You may remember ABC Incorporated from the second chapter, but now the challenge is different. Now, ABC is a rapidly growing healthcare provider. They face challenges managing their increasing data volumes and diverse applications. Current on-premise infrastructure is nearing capacity, needs more [[Scalability]], and struggles to meet [[Regulatory Compliance]]. They need a flexible, scalable, and secure cloud solution to support their operations, including patient [[Data Management]], electronic health records, telehealth applications, and advanced analytics. They lack a clear understanding of how to map their business requirements to specific [[Cloud Services]] and technologies. They need your help. Using what you've learned thus far, define high level requirements for ABC. Again, no need to write anything down. It's a test to see how well you consider these concepts. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1), [[Regulatory Compliance]] (1), [[Data Management]] (1), [[Cloud Services]] (1)
> **Env Vars:** abc (3)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Defining the cloud architecture requirements for ABC Inc.](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=0)** - Welcome back. Let's take a look at what happened. ABC Incorporated engaged a cloud architect to define their cloud architecture requirements. Using a structured approach based on the principles outlined in the provided documents, the architect proceeded as follows. Requirement gathering. The architect meticulously documented ABC Incorporated's business needs, including data volume projections, application performance requirements, [[Regulatory Compliance]] mandates and security policies. Mapping to [[Cloud Services]]. The requirements were mapped to these specific cloud services. Compute, high-performance compute instances optimized by the EHR system and analytics workloads were selected. An active/active disaster recovery strategy was implemented for high availability. Secure APIs were defined to integrate various applications. Storage, a hybrid storage solution combining object storage and block storage was chosen. [[Capacity Planning]] accounted for projected growth. Encryption was implemented for data at [[Representational State Transfer (REST)|rest]] and in transit. Database. A HIPAA-compliant managed relational database service was selected for the EHR system, ensuring [[Scalability]] and reliability. Data encryption and access controls were configured
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=93)** to meet regulatory requirements. CloudOps. A comprehensive CloudOps strategy was developed, encompassing automated [[Configuration Management]], performance monitoring tools, and [[Security Management]] processes. Security and governance. Robust security architecture was implemented, leveraging IAM, encryption and role-based access control to restrict access to sensitive patient data. Governance policies were defined to ensure compliance with HIPAA and internal security standards. Optimization. The architect optimized the design for cost efficiency, minimizing unnecessary spending, while maintaining performance and security. By systematically mapping business requirements to specific cloud services and implementing appropriate security and governance measures, ABC Incorporated successfully transitioned to a cloud-based infrastructure that is scalable, compliant, and cost effective. So how'd you do?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (3), [[Regulatory Compliance]] (1), [[Capacity Planning]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Scalability]] (1)
> **Env Vars:** abc (3), ehr (2), hipaa (2), iam (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Other Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Performance management](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=0)** - One can think of performance as how humans and systems experience that cloud-based system that was created from your design decisions. The fact is that if you pick one component that is slower than the other, such as database or network connection, that component will determine your overall performance. In other words, your performance is equal to the slowest component you're leveraging. There are three levels of determining performance. First, leverage data from technology providers such as cloud providers, and make sure to ask about how well their components perform. This is typically provided in throughput ratings. Second, you should conduct your own performance analytics based on mathematical models to predict the performance of your solution, which is made up of many components. And finally, the best way is to test your solution or technical configuration using real data and real business use cases to determine its real performance. Of course, your ability to do one, two, or all of the above depends on your budget or availability of resources. For our purposes, we can look at a few of the major components of an architecture or design decisions, and that analysis should lead you to understand how well your solution will perform. Let's take applications first. The major systems that determine how well an application performs includes structure,
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=95)** or the application, or how it's designed. Remember, this depends on the development platform and programming language used, whether it's mini coupled modules or a single module. Runtime is the execution of the application or how you're allowing the application to execute, such as using a compiler. And threading or how you're executing specific parts of the application in a single thread or multiple threads. Next is network, meaning that we're looking at. Bandwidth is how fast the network can transmit and receive packets or the network speed. We all know this since we've all experienced poor internet connection with too low bandwidth. In [[Cloud Computing]], there is bandwidth within the cloud itself as its internal systems communicate. Also, the bandwidth for external communications or how it communicates with those leveraging [[Cloud Services]] or applications over the open internet. Latency is the amount of time it takes for a packet of data to be captured, transmitted, processed through multiple devices, and then received at its destination. This is important when considering using public cloud computing, since it is mostly accessed over the open internet, which is typically higher latency than a private network. And location is the distance between the server and those leveraging it. Typically the further away, the slower the performance. Database performance is how fast the database can respond
>
> **[3:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=192)** to requests for data and then transmit the data. Many factors determine database performance, including the model it uses, such as relational and object, how the database is designed, and how the general efficiency of the mechanism that can read a database request and respond with a specific data set requested. In the world of database performance, you'll hear the term response time as a core metric that determines database performance. Of course, [[Databases]] are complex technologies and there are many mechanisms to consider when determining your database's performance and fixing or tuning it to make it work faster. Performance is a complex topic, and it's usually not considered until there are performance issues, such as users complaining about slow response time or customers using the website. You should consider performance proactively to ensure that we're monitoring for performance issues and fixing them before anybody complains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Cloud Services]] (1), [[Databases]] (1)
> **Analogies:** such as (5)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - one (1)

#### [Proactive security](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=0)** - By now, we should have an idea of security and how it's applied in making correct and proper design decisions and creating our most optimized cloud architecture. What we'll discuss here is how to make your security systems proactive. This means preventing security issues before they become problems by actively monitoring aspects of all systems in the cloud and outside of the cloud. The old way of waiting for a breach before responding means we're awaiting risk and damage before doing anything. That's no longer acceptable. Even though it's the way that many businesses currently deal with [[Cloud Security]]. There are a few levels of proactive security that we can consider here, including data or the ability to gather over a prolonged period to determine trends that may indicate an attack is taking place, or other indications that something needs to be proactively protected. Gathering data is really just that. The ability to monitor aspects of your [[Cloud Computing]] architecture, such as network, compute, storage, or anything else that makes up your holistic system. The idea is to see as much as you can. Cloud computing can provide inexpensive and efficient data gathering and storage systems, so, most system activities should be monitored and data gathered.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=93)** And analysis of the data gathered or determining what it means. This is the most important aspect of proactive security considering that we can gather all kinds of data, but figuring out what the trends are and how to spot security issues is the more difficult task. Here, you're looking to spot trends. For example, network and compute saturation could indicate an attack is underway, or IP addresses making requests to the systems outside a regular use pattern could indicate some unusual activity. Really, we're looking for anything that suggests something might be wrong and needs to be proactively addressed, and response refers to your reaction upon identifying a trend that seems to be leading to a breach or even an ongoing attack. Here, the options are endless, depending on what you think may be occurring. Types of responses include blocking a suspicious IP address and investigating what they seem to be attempting. We should remove systems from access until we're assured that the risk is gone. This is often the prudent move if we're getting attacks from many different IP addresses. Changing passwords and encryption keys in case they have been discovered, and pushing backup operations to ensure that a recent copy of the data has been archived in case of a breach,
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=189)** such as a ransomware attack. Other evasive actions include moving processing to a backup facility, such as another region in a public cloud provider, even contacting law enforcement and other companies to let them know of your findings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Cloud Security]] (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - by (1)

#### [Serverless](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=0)** - [[Serverless Computing]] is the ability to support the execution of an application or set of functions without selecting and configuring cloud resources such as storage, computing, et cetera. It's a bit confusing considering that serverless does leverage cloud servers. However, serverless systems, such as AWS Lambda or [[Microsoft]] Functions, don't require you to do the work to size the resources you need to run an application. The core advantages of leveraging serverless includes perform [[Real-Time]] [[Data Processing]] for many types of application use cases, build scalable back-end services that are able to provide self-scaling, and Glue and choreograph systems to integrate services, applications, and processes. By this, I mean that we're able to leverage our serverless applications to control other applications, [[Databases]], or systems. The core advantage of serverless cloud-based systems is that they remove the need to select and configure the resources needed to run a process such as an application. As you may have gathered, when using public clouds or even during one or more of these courses, we must estimate the amount and type of resources needed to allow something to execute. If we don't select enough resources, the application won't run. If we select too many resources, such as storage and compute,
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=94)** we're paying more money than is needed. Serverless systems select only the resources that you need during execution. The serverless system allocates the resources when needed and returns them to the resource pool when not. Serverless systems account for what resources you leverage and how much you spend after the process completes. Here are features that you should consider when making your own design decisions regarding serverless computing. There are several advantages. First and most apparent, it removes you from estimating the amount and types of resources you need to support an application. We often overestimate what we think we'll need, and thus overspend. Second, it can scale as needed. We no longer have to worry about running out of cloud resources during spikes in processing, such as around the holidays for retailers. Finally, it can be more cost-effective considering it only leverages precisely the resources you need. Of course, there are some disadvantages. Since each cloud provider has its own serverless system, if you build an application on those systems, you're largely locked into that provider. You can move the application to another cloud provider, but it'll have to be heavily modified. It can be more expensive if the serverless system uses more resources than the application actually needs. In some cases, cloud users are finding
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=187)** that if they configure the resources, they may be able to spend less money than when leveraging serverless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (2), [[Microsoft]] (1), [[Real-Time]] (1), [[Data Processing]] (1), [[Databases]] (1)
> **Analogies:** such as (5)
> **Prerequisites:** configure (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - serverless (1)

#### [Containers and container orchestration](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=0)** - [Instructor] Containers provide the ability to run software within an operating system, running on a public cloud, a platform space that can run its operating systems such as [[Linux]], as well as applications, [[Data Storage]], and anything else you would run on a platform. This allows us to isolate a platform application and data within another platform, either running on a public cloud or even on a traditional system. The solution provides a few core advantages. First, portability means it's relatively easy to move one container running on one public cloud and move it to another. While some modifications need to be done to run on the new cloud, these are typically simple and sometimes non-existent. And second, the ability to scale to support higher processing loads. Using container cluster managers or container orchestration, we can automatically replicate containers across the platform or platforms, having them work together to support higher processing requirements. While there are different orchestration solutions, [[Kubernetes]] is the most popular by far. Containers can be considered both as a design decision that you make and how the application will be developed and deployed as well as a platform decision and how it will be operated longer term. They are gaining in popularity due to their advantages, such as the ability to support portability
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=94)** by isolating operating systems, applications, and data. And there is a growing ecosystem around the use of containers, and there are hundreds of security, management, governance, data, and other add-ons that are purpose-built to work with containers and container orchestration. However, there are always downsides. The first downside is that containers and container orchestration costs more to develop and deploy than traditional approaches. Sometimes called the container tax, this is around the fact that it takes longer to develop these solutions and requires additional cost, such as specialized container security. And second, using container and container orchestration is more complex than traditional development, thus operating longer term will cost more and be more challenging. Moreover, specialized skills will be needed for both growth and operations. Containers and container orchestration will be a design decision that most [[Cloud Computing]] architects must make at some point. What's key here is that you go into making this decision with all the facts, and again, use your requirements to guide you, not the hype around a specific technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Data Storage]] (1), [[Kubernetes]] (1), [[Cloud Computing]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [IoT and edge computing](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=0)** - [[IoT]], or the [[Internet of Things (IoT)|Internet of Things]], and edge computing are old concepts that have new names. IoT is the ability to support remote devices such as thermostats in your home, fitness watches, phone, TVs, factory robots, or anything that provides its own processing and [[Data Storage]] away from the centralized server, mainly existing on public cloud platforms. Edge computing is related to IoT in that it involves supporting complete platforms, including compute, storage, and networking at the edge of a larger system or systems. For example, your smart thermostat gathers temperature data and decides to turn on the heat within the device rather than sending the data all the way back to a centralized server that has to make those decisions on behalf of the device. This reduces latency as the data does not need to travel all the way back to the backend systems and makes the system more reliable. Even if the network is down, it can still function autonomously. So while a device like your smart thermostat is indeed an IoT device, it also relies on more traditional compute and storage servers that live outside of the public cloud. This is typically chosen because we'll get better performance if we place data storage and processing closer to where the data is being gathered.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=96)** If this seems a bit confusing, let's define IoT as the concept that a device outside of the public cloud is able to gather data either for local processing or for transmission to the systems on the public cloud provider at some point. IoT is a form of edge computing. Edge computing also defines edge as the ability to leverage more traditional systems outside the public cloud, connected by a network like the internet. For our purposes here, and for the purposes of architecture, you can consider them conceptually and functionally very similar. We have several IoT and edge computing courses that you should consider if you're interested in this topic and seeking more details. Edge computing has some concepts that are starting to emerge that are beyond IoT devices, such as micro clouds. Micro clouds, simply put, sometimes called edge clouds, are instances of public [[Cloud Services]] that run on-premises. These include [[Microsoft Products|products]] such as [[Microsoft]] stack and AWS's Outposts. These platforms support native cloud services such as storage and compute, or a subset of cloud services offered by a public cloud, but allow you to leverage them on-premises through a server and platform stack that a cloud provider offers. Typically, these become the design decisions for companies that may need to keep
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=191)** the processing and data within the company data center, such as special security requirements or regulations that prevent the use of a remote public cloud. IoT and edge compute focus on the reality that sometimes processing and data storage must occur outside the public clouds. Public cloud providers, including AWS, Microsoft, and [[Google]], support the development and operations of IoT and edge-based systems. It's essential to understand what's available to you so you can make your best design decisions around using this technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (10), [[Data Storage]] (3), [[Cloud Services]] (3), [[Microsoft]] (2), [[Internet of Things (IoT)|Internet of things]] (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** make (2), aws (2)
> **Env Vars:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - iot (1)

#### [Machine learning, generative AI, agentic AI, and deep learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=0)** - [[Artificial Intelligence (AI)|Artificial intelligence]] or AI is the ability to leverage systems that can learn and thus provide intelligence that resembles human intelligence. Machine learning or ML is a form of AI that allows a machine to learn and imitate human behavior. ML is focused more on pragmatic business applications and thus the term is often used to refer to a cloud service supporting learning. For our purposes, and to avoid confusion, we'll call it ML. However, it may be important for you to take a course on both ML and AI to understand the relationship and how each concept is applied. As you can see from the list, there are many applications for AI ML, many of which we use daily. ML becomes a core design decision that you will likely have to make when leveraging technology as a true force multiplier for the business. Keep in mind that ML is a form of AI. While AI is over 40 years old, the price of supporting [[Traditional AI]] and the platform requirements in support of AI had a cost well out of reach of conventional businesses. There are other [[Forms]] of AI as well, such as [[Deep Learning]], which is a form of AI that can find deeper meaning of patterns such as data. More forms of AI are being researched right now
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=94)** and the usefulness of this technology will only grow. With the advent of [[Cloud Computing]] and on-demand pricing, the cost has come down 900%, and now ML is affordable for all businesses that need it. Thus, it's often applied when business applications need to make decisions based on a lot of data and have that data teach a knowledge engine, allowing it to determine patterns that may be within the data, much like we would do as humans looking at the data, still, ML can do this with a great deal more efficiency and also ongoing. Keep in mind that we have specific problems that ML solves, such as when patterns can be leveraged, when dynamic data is available, when automation is a benefit, and when the static data is available, and anytime applications benefit from gathering and leveraging knowledge. The types of applications that would leverage ML to add value would be processes such as the ability to spot fraudulent financial transactions, or the ability to determine when a robot is likely to fail based on operational data and historical data that indicate how a failure will typically occur. ML is an application level design decision, but remember that you're also selecting an ML system that supports one or many applications. These are often native to a specific public cloud
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=188)** or third party tools running on that cloud. In some cases, you may pick many different ML systems for specific business requirements, while in other cases a few or a single solution will do. Again, you need to look at what the business needs and incorporate the right technology. In this case, ML. [[Generative AI]] is a type of artificial intelligence that can create new content rather than just analyze or classify existing data. This content can take many forms including text, images, audio, video and even code. Generative AI is actually an evolution of machine learning and leverages many of the same concepts. Generative AI models learn patterns from large data sets and then use this learned information to generate novel outputs that share similar characteristics with the training data. These models are often based on deep learning architectures such as [[Generative Adversarial Networks (GANs)|generative adversarial networks]] or GANs or transformers and require significant computational resources for training. Applications range from creating realistic images from text descriptions to composing music and generating creative text formats. However, concerns exist regarding potential misuse, ethical implications, and the accuracy of generated content. Agentic AI refers to AI systems
>
> **[4:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=281)** that can act autonomously in their environment to achieve goals. They perceive, reason and act often leveraging machine learning to adapt and learn from their experiences. This autonomy distinguishes them from simpler AI systems to build ag agentic AI, define clear goals and tasks, gather and prepare relevant data, design individual agents each using appropriate ML models, such as NLU, [[Information Retrieval]] and decision making. Orchestrate agent collaboration, implement continuous learning, deploy to the cloud using the appropriate services such as compute, storage and [[Databases]]. Establish monitoring and robust security governance. Start with a simple goal and gradually expand your capabilities. AI is here to stay. While this was a quick description, we urge you to check out the other courses focusing on AI, including ML, generative AI and agenetic AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (4), [[Forms]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Deep Learning]] (2), [[Traditional AI]] (1)
> **Definitions:** is a  (5), is an  (1), refers to (1)
> **Analogies:** such as (7)
> **CLI Commands:** make (2), find (1)
> **Warnings:** keep in mind (2)
> **Env Vars:** nlu (1)
> **Speakers:** - artificial (1)

#### [Multi-cloud](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=0)** - About 95% of cloud deployments out there are considered to be multi-cloud. While multi-cloud is often defined as two or more public cloud providers, it includes legacy or traditional systems, [[Private Clouds]], and [[IoT]] and edge based systems. Multi-cloud is a term for complex distributed systems with significant heterogeneity, which is what multi-clouds are. The reason that enterprises leverage multi-cloud as a design decision include the need to support best of breed technology means picking the best solution from each public cloud provider to support the business requirements. The need to select cloud providers with the best pricing for core services such as compute, storage, [[Databases]], et cetera. There is a need to support business events such as acquisitions where cloud providers must be combined to support the combined business. Those dealing with multi-cloud deployment immediately noticed that their result in significant complexity and heterogeneity. Indeed, instead of dealing with approximately 700 [[Cloud Services]] when leveraging a single cloud provider such as AWS, based on the number of services leveraged by the business and the business applications, we are now dealing with approximately 1800 cloud services with the addition of [[Google]] and [[Microsoft]]. What's more we need to deal with the complexity brought on by using multi-cloud through abstraction and automation layers. This allows us to leverage management
>
> **[1:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=95)** and monitoring, security, governance, and other core services across the public clouds without attempting to leverage a cloud native service on all clouds. Indeed, the ability to find common cross-cloud services that remove much of the complexity allows you to operate a multi-cloud with nearly the same amount of resources as operating a single cloud. It's not if but when a multi-cloud will be your design decision. Indeed, in supporting the business, it's typically the right way to go. However, it also requires more architecture and planning and how you select the cross-cloud services and ensure that the complexity does not become so overwhelming that it fails to provide the value that the business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (4), [[Private Clouds]] (1), [[IoT]] (1), [[Databases]] (1), [[Google]] (1)
> **Definitions:** is a  (2), defined as (1)
> **CLI Commands:** aws (1), find (1)
> **Env Vars:** iot (1), aws (1)
> **Analogies:** such as (2)
> **UI Navigation:** select the (1)
> **Speakers:** - about (1)

#### [Low-code and no-code](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=0)** - Low-code and no-code Solutions allow users to create and deploy cloud-based applications with little or no programming skills. Leveraging technology that allows non-programmers, such as managers and executives, to create their applications is nothing new. However, the new generation of low-code and no-code development tools is much easier to leverage. And since many are cloud deployed, they cost very little. As you can see from these examples of low-code development tools, they use graphical interfaces, allowing non-programmers to draw out how the programs should work, access [[Databases]], and provide very complex processing. Those who are not programmers can create compelling applications that they can define and change to meet the business's specific needs. Leveraging no-code and low-code tools as a design decision for your cloud solution can remove the barriers between those who need to define what an application does and the programmers who must develop it on their behalf. While these tools do not replace traditional development methods, it's important to understand that they are available if they seem useful. Moving forward, technology should remove much of the deep skills needed to build and deploy applications, allowing some development done by those who need and use the applications directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Analogies:** such as (1)
> **Speakers:** - low (1)

#### [Emerging technology](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=0)** - No one can predict what's next in terms of the evolution of [[Cloud Computing]], or know what other design decisions you'll need to make within just a few years. However, we can name some ideas that seem to be emerging now or will soon, which may allow you to track them more closely. While [[DevOps]] is not new, the technology emerging in this space will likely affect how you choose technology in the future. DevOps allows you to continuously build and deploy applications, providing faster development, testing and deployment than we did in the past. This technology will likely improve reducing the latency between the businesses, defining the business problem, and application solution. Serverless is everything. As serverless becomes the preferred way to build and deploy systems, we'll likely see more serverless approaches to building and developing [[Databases]], containers, container orchestration, and even defining operations and security. Ease of use and [[Scalability]] are the primary drivers here. Democratization of technology. As we saw with low-code and no-code solutions, we're looking to put more development and deployment capabilities in the hands of the business users. Watch for more innovative solutions here. Intelligent edge computing or the ability to put AI ML within edge based devices to put the thinking and the processing closer to where the data is gathered
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=92)** and results need to be sent. This will occur around systems that need to process locally, such as monitoring a jet engine on onboard an aircraft, which also needs deep AI processing to do the work correctly. Just-in-time training or the ability to automate the training needs to create the skills required to move forward with new and emerging technology. We can obtain on-demand training today. Moving forward, there will be more coupling between technology deployed and the humans needed to support that technology. The learning will be automated, easy to obtain and never stop. Common intelligence. While we're setting up AI ML systems today to perform various business tasks, we will become better at sharing that knowledge moving forward. Thus in building an AI system in the cloud to detect fraud, we'll not have to teach the knowledge engine by tethering training data over time. You would link it with a pre-trained engine to take advantage of the knowledge gathered in other places.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Cloud Computing]] (1), [[Databases]] (1), [[Scalability]] (1)
> **Prerequisites:** you'll need (1), required to (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Analogies:** such as (1)
> **Speakers:** - no (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn to stay state of the art](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=0)** - So where do you go from here? Given that this course provides a starting point for experiencing [[Cloud Computing]] architecture and making your own design decisions, I recommend that you just attempt to work as a cloud architect. There are many ways to do this. If you work for a company that has these types of projects, perhaps you can use the knowledge you've gathered here to join that team. This may require you to change companies in search of someone who can provide that opportunity, but given the ongoing shortage of cloud computing architects, it should not be as hard as you think. In some cases, you can work as an intern if primary jobs are not available. Gather the skills you need to move on to a full-time career. Other paths include gaining cloud provider certification, such as AWS Certified Architect, that you can leverage into initial opportunity. While having specific knowledge of a public cloud provider services is good, the general purpose knowledge we presented here will benefit the long-term as you make design decisions that span different cloud providers. Become a continuous learner. Your journey to understand cloud architecture and cloud solutions continues beyond here. Follow your interests and desires to understand more by listening to cloud computing podcasts, reading cloud computing blogs, and learning any way you can.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (4)
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - so (1)


## Instructor

- [[David Linthicum]]

## Path Context

### In [[Design and Present Your Cloud Strategy]]
← [[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment]] | **2 of 6** | [[Design a Cloud Migration Strategy]] →

### In [[Build an Enterprise Cloud Architecture]]
**1 of 4** | [[Cloud Architecture- Advanced Concepts]] →

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Cloud Architecture- Core Concepts]] | **4 of 9** | [[Cloud Security Architecture for the Enterprise]] →

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Design and Present Your Cloud Strategy]]
- [[Build an Enterprise Cloud Architecture]]
- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

---

[↑ Back to top](#)