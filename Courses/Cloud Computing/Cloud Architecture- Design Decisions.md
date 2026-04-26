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
created: 2026-04-21
---

![Cloud Architecture: Design Decisions](https://media.licdn.com/dms/image/v2/D4D0DAQFXZOc2UQrUTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737159098691?e=2147483647&amp;v=beta&amp;t=NLFGUalWGZn9NZYSyoa2Ux58Hmq4R7lPxEjuPLJ8pXM)

# Cloud Architecture: Design Decisions

> In this course, David Linthicum—an internationally known enterprise technology thought leader and influencer—explores the essential components of cloud computing architecture. Learn how to make informed design decisions that optimize cloud storage, compute resources, databases, and security across various cloud service providers. Build your understanding of performance operations, security operati

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835) | 1h 55m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[David Linthicum]]

## Table of Contents

### Introduction

#### Making decisions around cloud architecture design
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=0)** - Cloud computing architecture is often the most overlooked aspect of cloud deployment.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=5)** It's the art of selecting the right technology and configuration to bring the most value back to the business.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=11)** If current statistics are any indication most companies get this challenge wrong.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=16)** The challenge is that many enterprises make decisions that are not optimized for business or don't meet their requirements in other ways.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=24)** Hi, I'm David Linthicum, an internationally-known cloud expert and consultant.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=28)** In this LinkedIn Learning course, I use pragmatic examples and explain processes to help you gain an understanding of the steps to take to make successful cloud architectures or design decisions the first time.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-decisions-around-cloud-architecture-design?u=76281980&t=40)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - cloud (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=0)** - To get the most out of this course, you should understand enterprise architecture, both traditional and cloud-based systems.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=7)** And it's helpful to understand the basics of computing, including compute, storage, and networking.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=13)** It's also helpful to understand other more advanced topics, including security and governance.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=19)** But if those are not on your list of skills, we'll provide enough information here to help you keep up.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=25)** If you're not yet comfortable with some of the topics mentioned, I suggest you review one, two, or all three of the following courses: Learning Cloud Computing: Core Concepts, [[Cloud Architecture- Core Concepts]], and Learning Cloud Computing: Public Cloud Platforms.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/what-you-should-know?u=76281980&t=41)** That should help you get up to speed on most of the topics we'll cover.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Speakers:** - to (1)


### 1. Beyond Basic Architecture

#### Taking your architecture to the next level
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=0)** - What is cloud architecture?
>
> **[0:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=2)** Cloud architecture is best defined as configuring cloud computing technologies and traditional technologies in a way that supports the business's current and future requirements.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=14)** This means that we're leveraging technology to meet the business's needs, not the other way around.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=20)** This course focuses on understanding your business's requirements and then picking the right cloud technology components or architecture to satisfy them, thus making the right design decisions.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=34)** As you move through your cloud architecture journey, the availability of today's technologies, including on-demand cloud services, enables you to pick and configure as many as 10 factorials of possible technology combinations to form your cloud computing solution or architecture.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=53)** If you're not sure what that number is, it's a lot.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=56)** Most of these configurations will likely work, And by work, I mean they meet the business's needs minimally.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=64)** However, as the word implies, these architectures are likely minimal and not optimal.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=70)** This means that while they work, they may cost more to run and not meet all of the business requirements in some way.
>
> **[1:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=78)** As such, many of these working cloud computing architectures end up costing businesses more money because they leverage cloud technology in an underoptimized way.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=88)** Therefore, good cloud architecture is not just about creating a solid architecture.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=94)** It also includes application and infrastructure level design, deployment planning, operation planning, security design, database design, and about a hundred other things that will likely make up your cloud computing architecture.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=108)** It's about creating an architecture that meets the business's needs, and addresses most or all of the requirements, as well as being fully optimized.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=117)** So it should work for the least amount of cost, provide the most efficiency, meet most of the business's needs, and provide the lowest amount of risk.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=127)** Of course, this applies not only to the first instance of the cloud computing architecture, but also to changes that the architecture will likely undergo as it progresses into the future.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=140)** In other words, it's optimized now, and will continue to be optimized to meet the business's needs moving forward.
>
> **[2:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=148)** Therefore, I recommend considering these principles when you begin to develop your design.
>
> **[2:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=155)** Cloud computing architecture is about creating solutions that work and are close to fully optimized as possible.
>
> **[2:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=163)** It includes creating a path forward for the architecture and understanding that it needs always to be optimized to meet the business' needs.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=172)** It demonstrates an understanding of things in the wide, such as strategic use of this technology, as well as things in the narrow, such as application design, and deployment details, and the use of DevOps, and other development best practices, and tooling.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=189)** Remember that this is about optimizing the cloud technology to add the most value to the business.
>
> **[3:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=195)** If you keep that in mind, you can't fail.
>
> **[3:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=198)** It also includes application and infrastructure-level designs, deployment planning, operations planning, security design, database design, and about a hundred other things that will likely make up your cloud computing architecture.
>
> **[3:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/taking-your-architecture-to-the-next-level?u=76281980&t=214)** It's about creating an architecture that meets the business' needs, and addresses most or all of the requirements, as well as being fully optimized.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Code Keywords:** continue (1)
> **Prerequisites:** configure (1)
> **Speakers:** - what (1)

#### Advanced architecture scenario: HR systems
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=0)** - Let's start with an example of advanced architecture and how to get started.
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=5)** First, remember that we're focusing on advanced cloud architecture examples.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=10)** This builds upon other examples you may have seen in other courses that focus on just the basics, such as storage and compute.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=18)** Cloud architectures are more complex in real life, and an advanced understanding of those choices can show you what you'll likely be facing in the real world.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=28)** For example, we'll focus on just a division in a company rather than the entire company.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=34)** Remember that you'll often also need to take on similar architecture projects, at least at first, so that you can solve the problems in a shorter period of time and with less complexity.
>
> **[0:47](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=47)** For example, let's create a cloud solution for the HR department within our company.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=53)** The first step is understanding HR's requirements regarding what cloud architecture should address.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=59)** The short list includes resume/CV storage, resume search and retrieval, employee information management, compliance processing and governance, HR application development, et cetera.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=73)** Of course, a list of requirements that will drive a cloud architecture project is usually several hundred items long, but for this example, we're using our short list of requirements.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=86)** Our next step is to define different levels of detail such as resume/CV storage, cloud database, database design, database security, database governance, database monitoring, self-healing, ops reporting.
>
> **[1:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=102)** From here, we can look at the solution patterns that should be used.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=106)** We do this at several layers, which also define different levels of detail.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=112)** For instance, cloud computing architecture for HR.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=116)** Logical architecture means no specific technology is considered.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=121)** Physical architecture, meaning that we're adding specific technology decisions such as naming the technologies we will be leveraging.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=129)** Deployment planning are how we build and deploy our solution.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=134)** Operations planning are how we're going to operate our solution ongoing.
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=139)** Continuous improvement are how we will improve our solution is ongoing.
>
> **[2:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=146)** We're looking for an in-state that answers most of the business's questions and addresses most or all of the business's requirements.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=154)** For example, how do I process a sales transaction?
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=158)** Or, how do I find the lowest cost shipping with the best customer experience?
>
> **[2:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=164)** Architecture is, at the end of the day, really just a list of technologies and how they interact to solve problems.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems?u=76281980&t=172)** Of course, if you do this correctly, you should have an almost fully optimized cloud computing architecture that solves the problems listed now and will do the same in the future.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (3), for instance (1)
> **Code Keywords:** let (2), self (1)
> **CLI Commands:** find (1)
> **Speakers:** - let (1)

#### Advanced architecture scenario: Edge computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=0)** - Edge computing systems are becoming more common as cloud computing architects learn to extend processing and data storage as close to the source as possible.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=11)** Edge computing places, aspects of systems outside of centralized processing, such as a public cloud, on remote devices, or computers.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=21)** For example, that smart thermostat in your house may be an edge computer that works with some centralized servers.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=29)** This provides a performance advantage considering that the data does not need to be transmitted back to the public cloud for processing and storage, at least most of the time.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=39)** Edge computing is a part of cloud architecture, since edge systems typically work with a public cloud provider and thus are at the edge of clouds.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=48)** The benefits of edge computing are that the systems are decoupled from the centralized cloud, improving response times and saving bandwidth.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=58)** Of course, they are complex regarding the solution with more computing layers and data storage systems involved.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=66)** This extra work required when creating a cloud computing architecture that leverages edge computing would be network connectivity to edge device, edge device data storage and data processing, edge device API management are how cloud applications leverage the edge device, uses a set of services, typically web services, edge-based application development and deployment, edge device operations and maintenance, edge device security, et cetera.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=99)** In this situation, consider placing each architecture into a subdomain.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=105)** For example, consider the concepts and technology components that make up the edge computing processing, both in the cloud and at the edge device, separately from the rest of the architecture.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=118)** This has been the benefit of allowing you to focus just on this problem.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=122)** A good pro tip would be when an architecture is too complex to manage successfully as a whole, break it up into sub architectures that are easier to manage.
>
> **[2:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=133)** Too much complexity kills cloud architecture design efficiency.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-edge-computing?u=76281980&t=137)** The architect is tracking too many things at once, and the number of concepts and technologies that he or she must deal with becomes overwhelming quickly.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - edge (1)

#### Advanced architecture scenario: Containers and Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=0)** - The purpose of this video isn't to turn you into a container or Kubernetes expert.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=7)** We're just using this technology pattern as an example of an advanced cloud computing architecture that you might use if it satisfies one or more requirements of your cloud computing solution configuration.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=21)** Kubernetes is a system that manages containers or containerized applications.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=26)** A container is a lightweight virtual machine that allows you to run applications within the container much the same way as you would within any platform.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=38)** The difference is that a container can run on a platform, even several on a single platform, such as Linux and Windows NT.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=49)** Container orchestration and clustering using Kubernetes is a clear trend in the world of cloud computing now.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=57)** Kubernetes is an open source platform that manages these containers across private and public cloud platforms.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=65)** You can also leverage Kubernetes to manage microservice architectures.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=69)** Microservices are more fine-grained and thus more usable since they provide discrete functionality.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=76)** For example, they can offer a simple verification function for a text record rather than a complete database scan.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=84)** Containers and Kubernetes are deployable on most cloud providers and allow you to easily port applications running inside a container from cloud to cloud with little or no modification.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=98)** The combination of container and Kubernetes provides some useful advantages, including the ability to scale through clustering, allowing the containers to operate in parallel.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=110)** Containers and Kubernetes should not be considered architecture, but enable technology that supports architecture.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=118)** Only when these requirements are understood do we look for the potential technology solutions.
>
> **[2:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=124)** So here too, we must first understand our logical architecture and then create the physical architecture.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=132)** Physical architecture means assigning technologies to solve problems, and in this case, we're assuming that Kubernetes was selected to meet the architecture's needs.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=144)** Then we would pick working solutions such as leveraging the Kubernetes implementation on AWS, which is Amazon Elastic Container Services for Kubernetes or Amazon EKS.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=158)** Note that Microsoft and Google have similar Kubernetes services within their cloud offerings.
>
> **[2:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=165)** The point to be made here is that first Kubernetes is simply an instance of an advanced cloud computing architecture that you can leverage many ways.
>
> **[2:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=175)** Second, keep in mind that Kubernetes is not itself an architecture.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=179)** It's simply enabling technology that we can leverage within an architecture to solve specific problems and meet the business requirements.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=189)** Finally, while Kubernetes is very popular and certainly is hyped in the marketplace right now, it's the architect's job to find the logical and physical architecture that provides the best optimized solution.
>
> **[3:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-hr-systems-24504604?u=76281980&t=204)** Any technology selection you need to use to do that is the right solution, Kubernetes or not.

> [!info]- Semantic Content
>
> **Code Keywords:** private (1), public (1), function (1), case, (1), finally, (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** aws (1), find (1)
> **Env Vars:** aws (1), eks (1)
> **Warnings:** note that (1), keep in mind (1)
> **Speakers:** - the (1)

#### Advanced architecture scenario: Serverless computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=0)** - Much like other cloud technology trends, serverless computing is changing aspects of how we do cloud computing architecture.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=8)** Serverless computing enables cloud architecture technology, or how we design, build, and deploy specific applications using serverless technology.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=19)** So, larger, more strategic problems related to cloud computing architecture, such as infrastructure design, security, governance, and operations, still form part of the larger architecture.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=33)** Serverless is simply focused on enabling technology about how we deploy and operate applications serverless.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=42)** Serverless computing allows you to let the serverless computing cloud service allocate just the right amount of resources needed to run your application.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=52)** Thus, we don't have to pick the resources that we think we'll need, such as storage and compute.
>
> **[1:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=60)** It does this automatically behind the scenes.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=63)** The term serverless is a bit confusing.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=66)** We're still using virtual servers, such as storage and computing.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=70)** However, we don't have to pick and configure those virtual servers.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=75)** It's done for us.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=76)** The advantage here is that by allocating the public cloud provider to automate the selection and allocation of resources, we don't have to do it prior to running the application.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=90)** When this is left to humans, common mistakes may be made, such as allocating too many resources, driving excessive costs, or not as many resources as needed, which could cause performance issues during operations.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=105)** Here is the list of the core benefits.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=108)** Extended to different technologies.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=111)** Faster to deploy.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=113)** Can be more cost effective.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=115)** While each serverless system from each cloud provider takes different paths when it comes to what serverless computing is and how it is leveraged, fundamentally, this is about dividing applications into functions or ways to allocate tasks that an application needs to perform.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=134)** These are implemented in the serverless system, which picks only the resources needed to execute a function at runtime.
>
> **[2:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=142)** For example, we're leveraging a serverless computing system to support an inventory application.
>
> **[2:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=149)** By using serverless, we can have the serverless computing system pick the resources we need when at the application runs.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=157)** This comes in handy when our inventory application that sees seasonal spikes, such as around the holidays when demand for inventory searches goes way up in support of customers looking to purchase gifts.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=170)** Thus, as you can see here, we need to determine a few things, including, what are our requirements?
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=179)** What is our logical architecture?
>
> **[3:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=182)** Would serverless be a fit, and which serverless system should we employ?
>
> **[3:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=187)** So, the key things we need to consider when leveraging serverless as our core enabling technology for an application or a complete system includes, is it advantageous to have automation choose the right resources for us?
>
> **[3:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=204)** Is it worth the time and money required to alter an existing application to leverage serverless features?
>
> **[3:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=211)** And are we willing to deal with a lock-in issue, since leveraging a serverless system within a single cloud provider will tie us to that cloud provider moving forward?
>
> **[3:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=223)** Moving from one serverless system within a single cloud provider to another entails significant work in rewriting and reconfiguring an application.
>
> **[3:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-serverless-computing?u=76281980&t=233)** These are the things to consider.

> [!info]- Semantic Content
>
> **Analogies:** such as (5), for example (1)
> **Code Keywords:** let (1), public (1), function (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - much (1)

#### Advanced architecture scenario: Generative AI computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=0)** - In this video we will break down a cloud-based generative AI architecture, specifically, a case study examines enterprise content generation applications using generative AI.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=13)** For example, a mid-size marketing firm must generate customized content at scale while maintaining brand consistency.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=21)** They need something that works today, not a science project that takes too long to build.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=27)** Here's a no-nonsense generative AI cloud architecture.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=32)** Core components.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=33)** We have a data layer, AWS S3, which is a data lake, Pinecone, which is a vector database, and Redis for data caching.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=44)** We have a processing layer, GPT-4 on Azure from OpenAI, which is the primary large language model, SageMaker, which is the custom model, and Kubernetes orchestration.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=57)** And then we have an integration layer, API Gateway for external access, gRPC for internal communication, and OAuth2 for authentication.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=69)** The system uses a three-tier architecture with automatic scaling and failover.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=75)** Data flows from the storage layer through the processing tier where Kubernetes orchestrates the AI workloads.
>
> **[1:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=83)** The integration layer handles external communication and security.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=87)** So what are the key features?
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=90)** Horizontal scaling via Kubernetes, multi-region deployment, async processing for long jobs, edge computing for latency reduction, Prometheus Grafana for monitoring, and an ELK stack for logging.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=106)** This architecture supports enterprise scale content generation while maintaining cost efficiency through intelligent resource utilization.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=114)** It's built to handle millions of requests without requiring a PhD to retain it.
>
> **[2:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=120)** This is a practical, maintainable system that delivers business value without unnecessary complexity.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=127)** It works, scales, and won't break the bank.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-generative-ai-computing?u=76281980&t=130)** Now let's look at the same problem and solution using an agentic architecture.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), gpt (1), api (1), elk (1)
> **Definitions:** is a  (3)
> **Code Keywords:** async (1), let (1)
> **CLI Commands:** aws (1)
> **Code Identifiers:** grpc (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Advanced architecture scenario: Agentic AI computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=0)** - In the last video, we looked at an enterprise content generation application that used generative AI.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=8)** In this video, I'll show you a straight to the point architecture for a cloud-based autonomous AI agent system that can independently reason, plan, and execute tasks.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=21)** Again, this is just an example.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=24)** There are complete courses here on Agentic AI architectures.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=28)** Please seek those out if you are interested in Agentic AI running on cloud computing systems.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=34)** Thus, some of this may seem a bit cryptic, but it's designed to provide you with a real world example.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=41)** Let's dive in.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=42)** Core components are: the agent layer, LangChain for agent orchestration, AutoGPT for autonomous processing, vector memory store for agent state, and ReAct framework for reasoning engine.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=59)** Execution layer: function calling API, tool integration framework, AWS Lambda for serverless actions, and Azure OpenAI for the core large language model.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=73)** And finally, the control layer: agent supervisor systems, safety guardrails, performance monitoring, and resource management.
>
> **[1:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=83)** The architecture follows a closed loop system where agents observe, plan, and act.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=89)** The agent layer handles decision making and planning while the execution layer carries out actions through integrated tools and APIs.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=98)** The control layer provides supervision and safety constraints.
>
> **[1:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=102)** Key features of this architecture include: multi-agent coordination, persistent memory management, tool use framework, self-correction capabilities, real-time monitoring, and failure recovery.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=117)** The system enables autonomous AI agents to perform complex tasks while maintaining control and safety.
>
> **[2:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=124)** It's designed for enterprise use cases like automated research, customer service, and process automation.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=131)** Don't get fixated on all the components that are used.
>
> **[2:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=136)** That will change from year to year.
>
> **[2:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/advanced-architecture-scenario-agentic-ai-computing?u=76281980&t=138)** Focus on the architecture's macro attributes such as execution interfaces, and agent and control layers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), lambda (1), finally, (1), include: (1)
> **Env Vars:** api (1), aws (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the last (1)
> **Speakers:** - in (1)

#### Necessary skills, tools, and processes
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=0)** - So what skills do you need to be a good cloud computing architect and make good design decisions?
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=8)** Let's look at a few.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=10)** Cloud computing architects should have an advanced knowledge of cloud technologies, including what they do and how they work.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=18)** A mandatory skillset is advanced knowledge of common cloud-based resources, such as storage, computing, database, security, et cetera.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=30)** However, it's not expected that you understand every detail about how each separate resource works.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=38)** General knowledge is the most helpful, but knowing some specific features and being willing to learn as you go is also very beneficial.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=48)** So while you may understand the fundamental differences between object storage on AWS, Google and Microsoft, you may not be able to compare each at a detailed level, such as APIs.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=62)** That's okay.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=63)** Also, it's helpful to understand technologies you're likely to consider leveraging within your architecture, such as serverless containers, Kubernetes, microservices, no code, low code, and other approaches that may provide you with a few advantages.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=81)** It's not just about seeking ways to use these technologies, it's about understanding them and the potential roles.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=88)** Most good cloud architects have open minds regarding technology solutions, understanding that if something is not a fit for a specific problem domain, it may be a fit for other solutions.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=100)** The struggle is to understand that we're looking for the most optimized solution, and you'll only find that if you consider everything as a potential building block.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=111)** Finally, consider all of the processes and tools that you can leverage.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=116)** Most good architects have predefined processes or methodologies that they can employ.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=121)** These checklists ensure we're looking at all aspects of the requirements and potential solutions.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=127)** You'll find that we're asserting a specific process or approach here.
>
> **[2:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=132)** However, you can certainly continue to explore other options and create your own.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=137)** Tools are often confusing for architecture, considering that many tool providers oversell the value of tools for architecture and they change rapidly.
>
> **[2:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=148)** Tools are needed to perform tactical tasks such as system inventory, data management, security planning, and other tasks an architect must tackle.
>
> **[2:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=158)** The best advice here is to rely on tools to carry out specific architect tasks more efficiently, but no matter what they claim, tools don't automate all of the architecture.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/necessary-skills-tools-and-processes?u=76281980&t=170)** If this looks like an eclectic array of needed skills, you're right.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1), aws (1)
> **Analogies:** such as (4)
> **Code Keywords:** let (1), finally, (1), continue (1)
> **Env Vars:** aws (1)
> **Speakers:** - so (1)


### 2. Define a Business Case

#### Build a business case
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=0)** - We always start any cloud project with a business case, whether a simple migration of a set of applications and data or building new systems in the cloud.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=10)** We always need to provide a business justification for spending money and taking a business risk.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=16)** So why is building a business case a part of design decisions?
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=22)** First, we won't know the utility of our cloud computing architecture, including design decisions we need to make, until we're sure it will add value to the business.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=33)** Keep in mind, that's the most critical objective.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=37)** Second, cost becomes a significant factor in picking the right technology and architecture configurations in terms of what it costs to build and operate continuously.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=48)** Finally, this also allows us to consider the cost benefit trade-offs for each design decision that we're making.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=57)** For example, leveraging containers in Kubernetes consistently throughout an architecture, could lead to the most and the least optimized solutions.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=67)** It's a matter of considering the business problems you're looking to solve.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=71)** While there are many ways to categorize the cost and benefits of leveraging cloud-based solutions, the most important ones to consider are hard and soft costs and hard and soft benefits.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=82)** We'll explain these in the following few videos, but the best way to understand these concepts is how businesses perceive them.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=91)** Soft costs and benefits are business values that take more work to understand and estimate.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=98)** These are indirect cost impacts, such as use of one system that benefits human resources, but impacts the legal department, because it causes them to deal with more complexity, which costs that group more.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=114)** Both sides of these issues need to be understood.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=117)** Soft benefits are even more challenging to determine.
>
> **[2:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=120)** These are inherently difficult to measure values that return to the business.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=126)** Examples include more business agility and how that agility impacts the business around additional potential sales.
>
> **[2:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=133)** Hard costs and benefits can be directly related to a specific design decision.
>
> **[2:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=138)** For example, the cost of technology per month is provided by a public cloud provider.
>
> **[2:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=145)** A hard benefit would be cost savings directly related to using that technology, such as reducing the need for physical data center space that's being replaced by cloud computing.
>
> **[2:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=156)** These are really about understanding the cost benefit trade-offs.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=160)** While businesses have grappled with this for decades, it still requires a hard look when evaluating how to leverage cloud computing effectively.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=170)** Please take your time in doing this analysis, and ensure that you can answer the more challenging questions from your leadership and other stakeholders.
>
> **[2:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/build-a-business-case?u=76281980&t=178)** You may follow this general process or customize it for your own use.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (2)
> **Code Keywords:** case, (1), finally, (1), public (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)

#### Soft costs and benefits
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=0)** - Soft costs and soft benefits are not as obvious to determine and thus assumptions need to be made, many which cannot be calculated to the dollar.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=12)** For example, we all know the benefits of agility for a business.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=16)** Adapting quickly to market changes allows you to grow the business faster.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=21)** However, it is difficult to determine the exact benefits for a business and the value of those benefits.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=30)** Much the same can be said about soft costs.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=33)** For example, moving to the cloud may require extensive retraining and hiring, and these costs take work to determine dollar for dollar.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=44)** Thus, educated estimates are made and adjusted ongoing.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=49)** Moreover, there may be additional harder to predict costs, such as a decrease in sales as the enterprise moves to the cloud, which could occur if the new system impacts the time it takes to learn the latest systems and develop an understanding that will drive short-term efficiency.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=68)** This is sometimes known as transition cost, a soft cost since we don't understand precisely how many sales will be lost, only that it's likely.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=79)** It still needs to be considered and factored when estimating costs and the benefits of moving to the cloud.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/soft-costs-and-benefits?u=76281980&t=86)** Understanding soft costs and benefits is important because while both are difficult to determine, they are significant factors in moving to the cloud.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** require (1)
> **Definitions:** known as (1)
> **Speakers:** - soft (1)

#### Hard costs and benefits
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=0)** - We've looked at soft costs and benefits.
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=3)** Now let's look at the hard costs and benefits.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=6)** Examples include the usage cost of cloud storage, such as the cost of gigabytes or the time the storage system is used.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=15)** The benefit of cost savings is not having to purchase and maintain storage hardware.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=22)** These are relatively obvious, meaning that they can be defined as the dollar in terms of money spent, the hard costs, what money is saved, or the hard benefits.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=34)** As such, these costs and benefits are generally the easiest to define when making a business case for your cloud computing architecture.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=43)** This information is critical to design decisions because it defines the cost and benefit of each decision.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=51)** Typically, these calculations are assigned dollar values.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=56)** Enterprises often leverage FinOps, or financial operations, to gain more control over spending and the true benefits that can be measured.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=66)** Simply put, this is a set of processes, approaches, and tooling that allows you to track money spent on cloud-based resources, such as storage, compute, databases, AI, or anything cloud service providers charge for.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=81)** These processes also enable tracking consumption, as in who's consuming what, when, how, and how much, and other details about what the enterprises are consuming.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=94)** This allows you to allocate costs to different departments, people, and projects.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=99)** It also shows when money may be being wasted and when budget overruns occur.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=106)** Most FinOps systems can even limit spending.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=110)** Other advantages of FinOps is the ability to identify and understand any existing hard benefits.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=117)** For example, the ability to calculate the savings around using cloud-based resources.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/hard-costs-and-benefits?u=76281980&t=123)** So we understand that while cloud storage systems cost $500 a month, by avoiding the purchase and operations of a physical storage system, we're saving $1,500 a month, and that's a hard benefit.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** let (1), for. (1)
> **Definitions:** defined as (1), is a  (1)
> **Speakers:** - we (1)

#### Economies of optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=0)** - One important thing to consider is that when we design a cloud computing architecture, even if we have the exact business requirements, the cloud solution or architecture we create may differ significantly from those produced by other cloud architectures and cloud architects.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=20)** This is due to a few reasons. First, is technology bias.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=25)** We like to leverage the technology we're most familiar with.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=29)** A cloud architect who uses AWS regularly may find that he or she has a bias toward that specific cloud provider.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=37)** Second, we may need to understand that a technology solution is an option.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=43)** We can learn everything about all technology, but unless we invest the time in research, we may miss better architectural options, or make a design decision.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=55)** Finally, we need to look at the core optimization metric first.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=61)** We are not testing to see if our cloud architecture solution is nearly at 100% optimized as possible, so considering these factors listed previously that may yield an underoptimized solution.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=77)** We need to understand that underoptimized solutions are not reasonable because they cost more to run and don't return the most business value they can.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=87)** They often are not recognized as underoptimized and considered a great success.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=94)** This is due to the only metric that many consider, which is, "It works."
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=99)** Keep in mind that just because something works does not mean it's the best and most optimized solution.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=106)** Due to this, it's suspected that many solutions are costing businesses millions of dollars a year in wasted money because they don't make the correct design decisions.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=118)** Cloud solutions can be underutilized and overutilized, meaning, that we can leverage technology that is overpowered for the requirement and cost much more.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=129)** And despite the additional cost, we're not seeing the benefit to the business.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=135)** Most cloud solutions implemented during the past 10 years need to be optimized.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-optimization?u=76281980&t=140)** Indeed, if companies did an honest audit of what was deployed versus what should have been deployed, a very different picture of a truly optimized cloud solution would emerge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), aws (1), find (1)
> **Code Keywords:** finally, (1), yield (1), this, (1)
> **Env Vars:** aws (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### Leveraging AI as a innovative differentiator
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=0)** - Let's cut through the hype and discuss how AI can transform your cloud architecture solution into a competitive advantage for business.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=10)** Strategic differentiators.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=12)** Intelligent resource management.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=15)** Instead of static allocation, AI predicts resource needs in real-time, automatically scaling and optimizing cloud infrastructure.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=25)** This means better performance at lower cost than traditional approaches.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=30)** Predictive architecture.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=32)** Your cloud-based AI system becomes proactive rather than reactive.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=37)** AI can analyze patterns to predict failures, automatically route traffic, and optimize data pass before issues occur.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=46)** The benefit is that they can deliver better uptime and better user experience.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=52)** Smart data handling.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=54)** Traditional architectures treat all data equally.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=58)** AI driven systems intelligently tier data, optimize storage patterns, and automate data lifecycle management based on usage patterns and business value.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=69)** Adaptive security.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=70)** Moving beyond rule-based security, AI enables real-time threat detection, automatic response, and continuous security posture adjustments based on emerging threats and system behavior.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=82)** Self-optimizing systems.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=85)** The architecture continuously learns and improves itself based on real-world performance data, databases queries, self tune, microservices, auto-adjust, and routing optimization.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=97)** So what are the cost benefits of using AI, including generative AI?
>
> **[1:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=103)** Here are some examples.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=105)** 30 to 40% reduction in operational cost, 50% improvement in resource utilization, 25% faster incident resolution.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=115)** The real advantage?
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=117)** While others are still manually tuning their cloud infrastructure, an AI-driven architecture gives you a self-optimizing system that continuously improves.
>
> **[2:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=127)** In other words, you're building a system that does not just leverage static logic, but can change behavior over time.
>
> **[2:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=136)** Now that's pretty cool.
>
> **[2:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/leveraging-ai-as-a-innovative-differentiator?u=76281980&t=138)** We urge you to check out our other AI courses here to dive deeper into the benefits of AI for your business.

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), static (2), let (1), pass (1)
> **Definitions:** in other words (1)
> **Speakers:** - let (1)

#### Economies of complexity
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=0)** - In cloud computing architecture, complexity is having too many things to keep track of, which can lead to other problems, including issues with operations, security, and governance.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=12)** For instance, if I'm leveraging a multi-cloud deployment, I may have eight different storage systems to manage, whereas a single cloud deployment, I may have two or three.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=22)** Cloud computing architects choose to design and deploy more complex heterogeneous cloud solutions because they are attempting to leverage the best combinations of cloud services.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=34)** Indeed, heterogeneity means that we're living in different types and brands of technology.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=40)** For instance, storage from AWS and Microsoft is part of the same solution.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=46)** Considering our storage example, we may choose to leverage storage from more than a single cloud provider because those specific storage systems have features and functions that we need to solve a specific problem.
>
> **[1:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=60)** Thus, where only one storage system, such as Microsoft's Object Storage works best with application A, an entirely different storage system, such as Amazon Web Service's EBS, or Elastic Block Storage, works best with application B.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=77)** So, the tradeoff is complexity versus optimization.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=80)** Each meaning single and multi-cloud deployment has its own native features and function specific to a cloud provider storage system.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=90)** With a complex system, I'll need to keep people around with the skills needed to deploy and operate each storage system type and brand of cloud.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=99)** So, just as within the previous video, we made the case that we need to focus on the economies of optimization, which typically drives us to select the best of breed.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=111)** The result may be more complex, which costs more and adds risks.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/economies-of-complexity?u=76281980&t=115)** Regardless, the objective remains the same, to return the most value to the business you can.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), such as (2)
> **Env Vars:** aws (1), ebs (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** function (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Speakers:** - in (1)

#### Challenge: Defining the business case for ABC Inc.
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=5)** - Welcome to the first challenge of this course.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=8)** ABC Incorporated, a mid-size manufacturer is hemorrhaging money and market share.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=14)** Their outdated manual processes and fragmented systems are killing their competitive edge.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=19)** Current losses are estimated at $2 million monthly with no end in sight.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=25)** Critical issues, operational inefficiency.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=29)** 24 hour delays in quote generation leading to crippling sales.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=33)** 35% inventory accuracy causing stockouts and overstock.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=38)** 25% production line downtime, bleeding money.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=41)** Customer churn, spiking 15% year over year.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=45)** Financial impact is $5 million wasted annually on incorrect forecasting.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=50)** Key accounts lost to more agile competitors.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=53)** Profit margins shrinking by 3% quarterly.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=56)** Market share declined 12% in the past year.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=61)** With this limited amount of data, your job is to create a high level business case for ABC.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=66)** Determine if this business is a good fit for cloud computing and what business benefits its adoption might bring to this business.
>
> **[1:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=75)** If you would rather not, you don't need to write anything down.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-business-case-for-abc-inc?u=76281980&t=79)** We're just attempting to see if you've grasped the general concepts thus far.

> [!info]- Semantic Content
>
> **Env Vars:** abc (2)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Defining the business case for ABC Inc.
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=0)** - So how did you do?
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=6)** Let's give an example of one potential solution to this problem or a sample business case.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=12)** Again, just grasp the overall concept.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=15)** You do not need to come up with the exact solution we're proposing here.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=20)** The purpose of the architecture is to create a cloud-based AI platform.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=25)** This may include predictive analytics engine, real-time manufacturing intelligence, automated customer service platform, and intelligent supply chain optimization.
>
> **[0:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=37)** Some of the financial benefits include $8.2 million annual cost savings, $12 million revenue increase, 285% ROI over three years and 14th month breakeven point.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=50)** We're suggesting this implementation plan take 18 months phase rollout, 4.5 million total investment, minimum operational disruption, and comprehensive staff training.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=64)** And here are the expected outcomes.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=66)** Five minute quote generation, 95% inventory accuracy, 10% production downtime, and 40% reduction in customer churn.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=76)** So what's the bottom line?
>
> **[1:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=78)** The solution transforms ABC Incorporated from a reactive losing operation into a proactive, profitable leader in their space.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=87)** $20.2 million positive impact within three years.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=91)** That's a good business outcome.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-business-case-for-abc-inc?u=76281980&t=93)** We just need to create the architecture and cloud solution to achieve that level of business value.

> [!info]- Semantic Content
>
> **Versions:** 8.2 (1), 4.5 (1), 20.2 (1)
> **Code Keywords:** let (1), case. (1)
> **Env Vars:** roi (1), abc (1)
> **Speakers:** - so (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Define the Requirement Patterns

#### Designing for storage
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=0)** - In order to make the right design decisions for our cloud storage, we need to define and understand our requirements clearly enough to make informed decisions.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=10)** Storage is fundamental to cloud computing architecture.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=14)** Most applications in an architecture leverage storage directly, either using the native interfaces that storage systems provide, or through a database that leverages some type of storage on the backend to store, retrieve and manage data.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=30)** You have lots of choices regarding the type and size of storage you're looking for.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=36)** While there are many attributes of cloud-based storage systems to consider, we generally need to assess the following.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=44)** Capacity is the amount of stuff we need to store, such as files, data, and binaries, such as audio and video.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=53)** We are looking to employ storage models such as block or object storage.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=57)** To learn more, you may find it useful to take our Cloud Storage Course.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=62)** Speed, or how well the storage system needs to perform.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=66)** This includes the internal systems' performance and the networks that connect you to storage.
>
> **[1:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=72)** Disaster recovery refers to how the storage system will recover from outages, such as a flood that causes a cloud-based data center to close.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=82)** Application interfaces are how you'll access the services of the storage system.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=89)** Growth model, related to capacity, or how quickly the storage system will have to support data growth.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=96)** For example, will you grow 10 terabytes a month on average?
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=101)** Management of the storage system or how you're going to monitor it during operations.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=106)** Security, or how the storage system will support the required security.
>
> **[1:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=111)** This can be done either through native features of the storage system, or more likely, external security systems that interact with your storage and other systems.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=122)** Cloud architects often need to pay more attention to storage due to the basic set of services that storage provides.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=129)** However, storage is the foundation of your cloud computing architecture, and getting storage right will ensure that the foundation is solid.
>
> **[2:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-storage?u=76281980&t=139)** Ensure you get the requirements right and make the correct design decisions.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** for. (1)
> **Definitions:** refers to (1)
> **Speakers:** - in (1)

#### Designing for compute
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=0)** - [Instructor] Compute, simply put, is how processing will occur within our cloud computing solution or solutions.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=7)** This means picking the right processor or CPU, the right amount of memory, and the appropriate operating system.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=16)** The reason we're including the operating system is because it's typically bound to a CPU and memory.
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=23)** Cloud providers offer a number of choices in terms of what CPU you would like to leverage, including the size and the power, but the amount of memory and the operating system you want is bound to the CPU and type of memory that you'll pick.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=40)** While there are many aspects to consider in selecting attributes of the best cloud-based compute for your company's needs, generally we must establish the following.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=51)** Platform requirements.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=52)** Which include CPU, the type of central processing unit your solution will need.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=58)** In many cases, you can pick a brand and power of processor in terms of bits such as 32 and 64 bits.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=67)** Memory.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=68)** Are the size of the memory you need.
>
> **[1:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=70)** Keep in mind that you can leverage less powerful and cheaper CPUs in your cloud server configuration, but use more memory to get better performance.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=81)** Operating system.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=82)** Are what operating system requirements are understood.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=86)** Options typically include different brands of Linux, such as Red Hat or AWS, also Windows NT, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=94)** Speed.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=94)** Or how fast you would like the compute server to process.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=97)** This is typically represented as megahertz.
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=101)** Disaster Recovery, or how the compute system can resolve outages effectively.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=106)** Application Interfaces, or how the application should leverage the compute platform.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=112)** Management or how the compute platform should be monitored and managed.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=116)** Security.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=117)** The requirements around secure access to the compute platform.
>
> **[2:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=122)** Much like storage, compute platform requirements, are often not thought out as well as they should be leading to over and underspending.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=131)** Overspending means leveraging less compute than is needed.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=135)** This results in a more expensive cloud bill, thus diminishing the cloud solutions value.
>
> **[2:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-compute?u=76281980&t=141)** Or underspending, meaning that we're not leveraging the proper amount of compute cloud services and will likely crash the applications once they run out of resources such as CPU and memory.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (6), aws (1)
> **Analogies:** such as (3)
> **CLI Commands:** aws (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Designing for data and database
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=0)** - Cloud providers offer several choices regarding which database you would like to leverage to store and retrieve data for one or more applications.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=10)** There are many different types of databases to consider, including cloud-native databases, databases that are available on a single cloud provider, third-party databases that are offered on a cloud provider.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=22)** Even major enterprise database players, such as Oracle and IBM, have cloud-deployed versions that can be leveraged.
>
> **[0:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=30)** While there are many aspects to consider when reviewing the attributes of cloud-based databases, generally, we need to focus on the following, capacity, or how much data can be stored.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=43)** While most databases have huge upward limitations, such as petabytes or more, many cap the amount of data that can be stored or managed at much lower levels.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=54)** If you fail to notice these limitations when picking a cloud database, you'll get into trouble when the amount of storage needed approaches a predetermined limit.
>
> **[1:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=63)** You may like to leverage a database model such as relational, object-based, networked, multidimensional, or columnar, or other more obscure types.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=73)** This is the logical way that the data is stored and how developers and users think of it.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=79)** Speed, or how fast the database is when storing, finding, and retrieving data.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=85)** Some databases may take seconds, while others take hours to do the same function.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=90)** Speed is typically related to how fast the database can process a transaction, such as updating an inventory database with a new product.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=99)** Analytics are how we leverage the data to find and determine the meaning of data.
>
> **[1:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=104)** Management, or how the database will be managed and operated as part of a managed and operations platform.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=112)** Security, looking at the data security requirements specifically, and finally, disaster recovery, or features and functions needed to deal with outages and other issues that may interrupt data processing.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=125)** Cloud-based databases are a complex topic, with hundreds of different ways to do the same thing.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-data-and-database?u=76281980&t=131)** Establishing your own requirements upfront will mean that you're providing the best-optimized solution in terms of solving the data problems with the best solution to bring value to the business.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Code Keywords:** function (1), finally, (1)
> **CLI Commands:** find (1)
> **Env Vars:** ibm (1)
> **Speakers:** - cloud (1)

#### Designing for secuirty
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=0)** - Security is systemic to everything that we do in creating and deploying a cloud computing solution.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=6)** Thus, the requirements regarding what security approaches and technology to leverage should be considered in the narrow.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=14)** That means how specific applications and data stores need to be secured, as well as the why all of these cloud-based systems and resources work together to maintain holistic security.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=27)** While there are many ways to evaluate the attributes of cloud-based security, generally, we need to consider the following.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=35)** Various security solutions are needed, such as identity and access management, or IAM, encryption, multifactor authentication, and other forms of security.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=46)** Disaster recovery are how the security systems can resolve outages effectively.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=51)** Application interfaces are how the application should leverage the security platform.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=57)** Management, or how the security platform should be monitored and managed.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=62)** And finally, special consideration, considering that security requirements are going to be widely different.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=69)** Unlike storage and computing, which have the same essential functions across cloud services, security approaches and technologies are very different and should be adopted specifically for the cloud solution requirements.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=81)** Thus, you'll have very different security technologies leveraged across applications, systems, cloud, and other solution outcomes.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=90)** You can't underestimate the need for security for cloud-based solutions, and you'll find that requirements range from very simple to very complex.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=99)** You need to break your security requirements down into ways that address security for applications and the data bound to the applications.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-secuirty?u=76281980&t=108)** You'll also need to break them down as the systemic system and Cloud Wide Solutions that span all cloud applications, data stores, users, and other things we're interested in protecting.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** iam (1)
> **Analogies:** such as (1)
> **Speakers:** - security (1)

#### Designing for governance
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=0)** - Governance is the ability to limit the use of cloud services, data, and even resources, such as money.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=7)** The idea here is to find the specific requirements that allow you to access and use what governance will be needed, including the types of governance, how things are governed, and how governance systems link to other systems, such as security.
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=23)** There are a few types of governance to be aware of in cloud computing architecture.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=28)** They include, Cost Governance is the ability to monitor and limit the usage cost of cloud computing.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=35)** For example, Cost Governance involves monitoring the costs related to cloud storage, including who's using the storage, for what purposes, and how much they are allowed to spend over a predetermined period of time.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=48)** Resource Governance, or the ability to place limits on the use of resources, such as storage and compute cloud services, for instance, how much storage can be leveraged.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=59)** And API or Service Governance, or how a specific API or other interface is leveraged, including limitations of controls on its usage.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=68)** For example, an application interface being used only during business hours.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=73)** Determining what policies must be implemented is at the heart of defining governance requirements.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=80)** In governance, policies define how the system will limit the use of money, cloud resources and APIs.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=88)** During the requirements phase, we won't define these specifically.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-governance?u=76281980&t=91)** We'll explain how they will be leveraged once the cloud system or systems go into production.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2), for instance (1)
> **Code Keywords:** interface (2), include, (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Speakers:** - governance (1)

#### Designing for CloudOps and FinOps
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=0)** - Defining cloud operations or CloudOps requirements is often complex, considering that we're defining how many cloud systems we need to be monitored, maintained, and adjusted after deployment, during operations.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=14)** This process needs to be accurate, considering that this is how the business perceives the usefulness of the cloud-based systems.
>
> **[0:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=21)** The cloud-based system or systems can be very well-designed, architected, and built, however, if the system is not operated properly, the business will see it as a failure.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=34)** The number of outages and other performance issues they have to deal with will detract from considering the system a success.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=42)** Although there are many aspects to CloudOps, here are some essentials to consider.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=48)** Performance operations, or PerfOps, are how well the system performs up to the requirements of the business.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=54)** Keep in mind that this is only sometimes equal to high speed, but only enough performance to meet the needs.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=61)** If we're always building for high performance, we may be wasting money if that level of performance is not needed.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=69)** Also, that performance can be many things, including database, network, processor, I/O, et cetera.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=77)** Security operations, or SecOps, refers to the ability to keep the core security system running up to expectations continuously.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=86)** Governance operations, or GovOps.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=88)** This means the ability to keep all governance systems operating in an ongoing manner.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=93)** Data operations, or DataOps, the ability to keep the databases working as expected.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=98)** Application operations, or AppOps, involves consistently operating the applications to meet the business's needs, and other ops, which needs to include edge computing, container operations, and website operations.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=113)** The list consists of dozens of architectural attributes we need to keep functioning.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=118)** We also need to understand operations well enough to select the correct monitoring and operations technologies.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=125)** This includes cloud ops tools, such as AIOps, or AI-enabled operation, which allows us to monitor the system that needs to be monitored and deploy self-healing functions to fix issues before they are known to the business, also leveraging AI capabilities to adjust how the systems operate automatically without humans being involved.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=144)** The truth is that most will judge the success of your cloud solution based on its long-term operations.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=152)** That said, many architects neglect this aspect of cloud architecture, since they only work on the system's initial success.
>
> **[2:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/designing-for-cloudops-and-finops?u=76281980&t=161)** Avoiding operational problems should always be a priority.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1)
> **UI Navigation:** select the (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - defining (1)

#### Other services to consider
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=0)** - Of course, new technologies are arising each year and how we understand the requirements correctly to make the proper design decisions means being open-minded about what technology you may be leveraging.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=14)** New paradigms, such as the rise of edge computing and IOT are examples of requirements cloud architects are dealing with now that were not dealt with 10 years ago.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=25)** Other services include AI-based cloud services, serverless computing, containers and new trends that the cloud industry has yet to understand.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=34)** The notions are the same.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=36)** While the types of technologies will change over time, the ability to define requirements around their proper use remains the same.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=44)** The suggestion is that you leverage a standard template or checklist to ensure that you consider what requirements need to be understood and what is important to understand.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=54)** Of course, each list will differ in terms of the types of technology and systems you're defining requirements for and how the business will likely leverage those technologies most effectively.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=67)** In other words, this is a journey that will go on for some time.
>
> **[1:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/other-services-to-consider?u=76281980&t=72)** Your ability to understand the business' requirements and how those requirements map into the right design decisions is fundamental to your success in building valuable cloud-based systems.

> [!info]- Semantic Content
>
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** iot (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Speakers:** - of (1)


### 4. Advanced Cloud Architecture Design Concepts

#### Map requirements to storage
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=0)** - Okay, by now, we should have a detailed understanding of our storage requirements to choose a set of storage services from cloud providers.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=10)** This is the process of mapping the business requirements we discussed in a previous video and assigning more technical attributes to those requirements, which should allow you to easily pick the proper storage system or systems.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=24)** Note that we're not just focusing on a single storage solution.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=28)** Most cloud architectures in the real world are a mix of storage services, such as block, object, and file storage, sometimes from more than a single cloud provider.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=39)** This is the case in supporting a multi-cloud deployment, which is now fairly common.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=45)** So let's get into it.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=46)** The core effort here is to translate the requirements into a cloud storage solution.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=52)** To do this, we'll look at the following attributes: capacity, or the gigabytes or terabytes needed to support production.
>
> **[1:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=61)** Storage models typically consist of object, block, or file storage types.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=66)** Speed, the response time of the storage systems or the performance of the I/O, input/output, system.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=74)** Disaster recovery, or the ability to support active/active, having running redundant storage or active/passive, having one system ready to take over, but not actively running.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=86)** Application interfaces, or the API, services for accessing storage.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=91)** Growth model or the gigabyte growth over time.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=96)** Cost of storage are how much the cloud service costs now and will likely cost in the future.
>
> **[1:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=102)** Management of the storage system, including updates, fixes, and other configuration changes.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=109)** And finally, security, including security systems supported for the storage system, including identity access management and encryption.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=118)** As you can see, there are lots of things to take into account when considering what storage systems to select.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-storage?u=76281980&t=125)** What was presented here is most of what you'll need to think about when picking the right cloud storage to meet your requirement.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), finally, (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - okay (1)

#### Map requirements to compute
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=0)** - Okay, by now we should have an understanding of what our compute requirements are in enough detail to pick an actual set of compute platform services from cloud providers.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=12)** This is the process of mapping the business' requirements we discussed in a previous video with the process of assigning more technical attributes to those requirements.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=24)** Then, comparing and combining these requirements should enable you to easily pick the proper compute system or systems.
>
> **[0:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=33)** Again, this could be many types of compute that run on many brands of cloud providers.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=39)** Be prepared to deal with complex solutions with many different dimensions.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=45)** There are many different compute options just within a single public cloud provider.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=50)** Platform requirements are fundamental to what we're attempting to pick here in terms of a compute platform, which includes CPU or the brand and type of processors we want to leverage, such as Intel or AMD, and memory, or the speed and size of memory we want to leverage.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=71)** It's important to spec out how much memory and what type of CPUs that you need because you can easily oversize or undersize the power that you need.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=81)** Neither is good.
>
> **[1:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=83)** You need to find a cost effective balance.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=86)** You'll also need to identify what operating system or what operating systems are available from your cloud provider, such as different brands of Linux or Windows NT.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=98)** You'll need to plan for disaster recovery or how the compute platform will recover from issues, such as outages.
>
> **[1:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=106)** Your options to consider are active/active, or two compute platforms running at the same time, with one backing up the other, or active/passive, meaning that one of the compute platforms is only deployed if the first platform is down.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=123)** This takes more time to fail over to a new platform, but typically costs less.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=128)** You'll need to determine application interfaces, meaning that we're looking at what APIs are available to interface with our compute platforms.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=137)** For example, APIs need to spin up more compute instances.
>
> **[2:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=142)** Management of the compute platforms, including system maintenance or how the compute platform will be updated and fixed ongoing.
>
> **[2:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=152)** Configuration management, meaning that we're tracking the configuration of the platform ongoing, including any changes.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=160)** This allows us to fall back on previous configurations that are known to work.
>
> **[2:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=165)** And security.
>
> **[2:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=166)** Security including identity access management and encryption.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=171)** Keep in mind that compute is typically secured while being coupled with data.
>
> **[2:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=176)** Thus, many of the same principles of database and storage security are leveraged here as well.
>
> **[3:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=183)** As you can see there, there are lots of things to consider when selecting compute systems for potential systems.
>
> **[3:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-compute?u=76281980&t=189)** What was presented here is most of what you'll need to think about when picking the right cloud platforms to meet your requirement.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1)
> **Prerequisites:** you'll need (3)
> **Code Keywords:** public (1), interface (1)
> **Env Vars:** cpu (1), amd (1)
> **Cross-References:** we discussed (1), previous video (1)
> **CLI Commands:** find (1)
> **Documentation:** spec (1)
> **Warnings:** keep in mind (1)

#### Map requirements to databases
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=0)** - [Instructor] Databases are a part of all cloud deployments, and they provide a structured way to store and access data from many connected applications.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=10)** There are many types of databases, both native to a cloud provider and third party databases.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=15)** Sometimes there are traditional databases such as Oracle and DB2.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=20)** Sometimes there are open source databases such as MySQL, and sometimes there are databases you'll only find in specific cloud providers, such as AWS's DynamoDB.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=32)** Keep in mind that databases are cloud storage.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=36)** While all databases are different, many will have you also attach a raw storage system such as object storage to support the database's ability to store data in a more primitive format.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=49)** There are several things to consider, such as database capacity or how big the databases need to be and the upward limits set.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=57)** It won't help you if at some point you need to store as much as a petabyte of data and the database only stores up to a terabyte.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=66)** These limitations are often only understood when it's too late.
>
> **[1:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=71)** What type of data will you be storing in databases?
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=74)** We no longer store just text, images, video, audio and non-structured data may also be a part of a database.
>
> **[1:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=84)** Also, remember to consider whether it's data that supports mostly analytics or transactions.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=90)** Different types of data and databases support each.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=94)** Database model or the way that data is structurally stored refers to the way we design and use the database.
>
> **[1:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=103)** The storage behind the scenes may differ even if the database models are the same.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=109)** There are dozens of database models out there, but the two that you'll see the most are relational, which is leveraged by all relational databases like Oracle and MySQL and Object-Based, which is leveraged by DynamoDB and is known to be more open and flexible.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=129)** If you want to learn more about databases including database models, you may take a database course here on LinkedIn.
>
> **[2:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=138)** Next is database speed.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=140)** This is the performance that the database provides, typically measured in response time or how fast the database is able to produce information once asked.
>
> **[2:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=151)** Yu can break response time down into data in or how fast the database consumes data and data out, or how fast the database produces data.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=162)** Benchmarks are handy for determining this in more detail or the ability to measure database performance using predefined metrics.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=171)** We have database analytics or analyzing in making sense of data to find the true meaning of the data.
>
> **[2:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=178)** Also, you want to determine if you need to do that in real time, meaning as the data is updated or near time, meaning once the data has existed within the database for some time.
>
> **[3:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=193)** And finally, database management or native management features.
>
> **[3:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=198)** If the features are native, it could mean having database operations tools provided by the database provider itself native to the specific cloud and to the particular database.
>
> **[3:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=210)** Otherwise, database management leverages third party tools that support the management of many databases, including the ones you've selected.
>
> **[3:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=219)** Also within this topic is database security, meaning that it can support data encryption for the entire database or just for a specific record as needed.
>
> **[3:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=231)** These day, database security typically works with a more extensive security system, thus coordinating with other database security mechanisms.
>
> **[4:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=241)** Databases provide vital services for both applications and end users.
>
> **[4:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=246)** Also, there are so many choices as to which database technology to leverage that it's difficult to make the right design decisions.
>
> **[4:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-databases?u=76281980&t=255)** However, if you follow your requirements in detail, you'll find that the right solution will be much more easy to find.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), mysql (2), aws (1), make (1)
> **Analogies:** such as (5)
> **Env Vars:** db2 (1), aws (1)
> **Code Keywords:** finally, (1)
> **Definitions:** refers to (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Map to security and governance
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=0)** - Of course, selecting a set of security tools and technology by leveraging our requirements is perhaps the most important aspect of making design decisions around your cloud-based solution.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=12)** Thus, this is not only our ability to pick the right security approaches and technologies, but also to do so around a meta-design and framework that spans the entire enterprise.
>
> **[0:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=26)** So, keep in mind that we're talking about security in the narrow sense here, but it needs to work and play well with the security in the wide.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=36)** Narrow refers to solution details, such as encryption methods.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=41)** Wide refers to the most holistic solutions, such as leveraging identity and access management as the overall approach.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=49)** Governance works in tandem with security, and that is why we deal with it at this planning stage.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=57)** Again, governance provides the ability to place limitations on how we deal with large and small resources, such as APIs and cloud storage.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=68)** This allows us to deal with very powerful assets, such as sensitive data, like patient information, and ensure that we're not doing something to destroy or misuse those assets.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=79)** In short, governance keeps you out of trouble.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=82)** Security, at its essence, is selecting the right security approach and technologies to meet the requirements that we previously created.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=92)** While we have a vast amount of methods and technology to consider with security, primarily, we're going to look at IAM, or identity and access management, which enables us to allow or disallow people, servers, databases, APIs, and other assets to access resources, such as storage, computing, and databases.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=117)** Encryption allows you to scramble data that's stored.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=121)** At rest, being transmitted, or in flight, without specific keys, you can't see the data.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=130)** Roles are the ability to manage users and even systems by assigning them a role.
>
> **[2:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=136)** This means that system administrator roles will have more privileges than a typical user, and so on.
>
> **[2:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=143)** In many instances, these are done within the public cloud security management tools, but they can also be leveraged for all systems, both cloud and non-cloud.
>
> **[2:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=155)** And directory integration, or where our identities or other data points are stored to drive IAM or other aspects of security.
>
> **[2:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=165)** Examples of directories that support IAM include Microsoft's Active Directory.
>
> **[2:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=171)** Also, there is a need to integrate these directories so you don't have to access identity information more than once, or a single source of truth.
>
> **[3:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=181)** Governance, while similar to security, is about placing policies around the use of resources, such as applications, APIs, storage, compute, et cetera, both within and outside of public clouds.
>
> **[3:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=196)** While there are many types of governance, the core design decisions that you'll have to make will include service-based or controlled access to web services, APIs, microservices, and other services.
>
> **[3:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=211)** Resource-based, such as storage, compute, databases, or anything larger that needs to be governed at a more coarse-grain level.
>
> **[3:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=220)** Compliance are rules and regulations, such as those that are specific to a vertical industry, like HIPAA.
>
> **[3:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=228)** And directory integration.
>
> **[3:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=230)** Much like with security, the ability to manage all of these entities and assets using a set of directories that share information or provide a single source of truth.
>
> **[4:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-security-and-governance?u=76281980&t=241)** Governance is key to a successful architecture, and understanding the details behind governance is an important part of creating your cloud solution.

> [!info]- Semantic Content
>
> **Analogies:** such as (8), similar to (1)
> **Definitions:** refers to (2), means that (1), is a  (1), is an  (1)
> **Env Vars:** iam (3), hipaa (1)
> **Code Keywords:** public (2)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - of (1)

#### Map to cloud operations (CloudOps)
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=0)** - Cloud operations, or CloudOps for short, is really a mix of processes and tools that we'll leverage to operate our cloud solutions long term.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=10)** Thus, CloudOps is about defining how management and monitoring needs to occur, including putting together tool sets that are able to find issues, as well as fix issues automatically.
>
> **[0:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=23)** The number of types of tools that you'll leverage are numerous.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=27)** What's important here is that you understand what your CloudOps requirements are and back the right approaches, processes, and tools into those requirements.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=39)** Let's examine some categories of management and monitoring approaches, as well as tooling that you should consider for your design decisions.
>
> **[0:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=50)** Management includes configuration management or how we're going to track the current software and hardware configuration and manage changes that occur over time.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=62)** Performance management, or how we're going to deal with performance issues such as working around growing databases, overloaded compute systems, or other issues that cause performance problems that need to be addressed.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=76)** Security management, or how we're going to operate our security solution.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=81)** For example, backing up our IAM directory systems automatically.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=87)** Application management, or how we're going to manage applications we've built and deployed.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=93)** And data management, or how we're going to manage the data storage systems, including backing them up, managing growth, and ensuring that they are interfacing correctly with other systems, such as security.
>
> **[1:47](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=107)** Monitoring includes real time, meaning monitoring what's currently occurring within your running cloud solutions, such as watching systems running and alerting a human or an agentic system of a fix, event driven, or the ability to track events, such as batch updates or other things that occur as an event and is not ongoing, analytics, or the ability to find patterns in the operational data that may provide helpful information, such as a storage system that's ready to fail.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=144)** Application monitoring, meaning looking at a specific application that is running to determine any issues that may appear, such as a container-based application that keeps having to restart due to some networking issue.
>
> **[2:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=159)** And finally, data monitoring, or looking at what the data storage systems are doing short and long term to determine any action that may need to be taken.
>
> **[2:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=169)** CloudOps is integral to the success of your long-term cloud solution.
>
> **[2:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-to-cloud-operations-cloudops?u=76281980&t=175)** Make sure it's part of your design decision.

> [!info]- Semantic Content
>
> **Analogies:** such as (6), for example (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** iam (1)
> **Speakers:** - cloud (1)

#### Map requirements to an AI solution
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=0)** - Mapping requirements for a cloud-based AI solution follows a similar process to that outlined in this course for storage, compute, and databases.
>
> **[0:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=11)** First, business requirements for the AI solution must be defined.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=16)** Then, translate these into technical specifications considering the following, compute, storage, database, CloudOps, security, and governance.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=27)** Let's go back and unpack these one at a time.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=31)** Compute, determine the necessary CPU, memory, and operating systems such as GPU-optimized instances or deep learning and generative AI.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=43)** Specify disaster recovery strategy, such as active-active and active-passive as covered in a previous video.
>
> **[0:51](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=51)** Also provide detailed application interfaces, or APIs, that are used to interact with the AI models.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=59)** Plan for the systems maintenance and configuration management.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=64)** Implement robust security, including IAM and encryption.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=69)** Storage, assess the capacity, meaning gigabytes or terabytes, needed for training data, models, and results.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=79)** Choose appropriate storage models like object, block, or file storage.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=85)** Specify required speed and IO performance designed for disaster recovery, and consider cost and growth models.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=94)** Implement appropriate security measures such as IAM and encryption.
>
> **[1:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=100)** Database, if applicable, determine the database type, capacity, and model best suited for storing and managing AI-related data such as relational or object-based.
>
> **[1:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=112)** Consider database speed, such as the speed of data sent and returned from the database.
>
> **[1:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=119)** Also, consider analytics needs, such as real-time or near real-time, and management and security requirements.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=128)** CloudOps, define processes and tools for configuration, performance, security, application, and data management.
>
> **[2:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=138)** Establish real-time, event-driven, and analytical monitoring approaches for the AI solution.
>
> **[2:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=145)** Security and governance.
>
> **[2:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=147)** Implement appropriate IAM, encryption, roles, and directory integration to secure the AI solution and its associated data.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=157)** Establish governance policies for service-based and resource-based access, compliance with relevant regulations, and directory integration for centralized identity management.
>
> **[2:47](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=167)** The specific security and governance mechanisms will depend on the sensitivity of the data and regulatory compliance requirements.
>
> **[2:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=175)** Of course, there are many other things that you may have to consider that are outside of our discussion here.
>
> **[3:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=182)** You'll need to focus on your requirements and the right AI solution to meet those needs.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=188)** The key is to align technical choices with specific business requirements and desired operational characteristics.
>
> **[3:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/map-requirements-to-an-ai-solution?u=76281980&t=195)** This allows you to deploy an AI system in the cloud without much pain.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Env Vars:** iam (3), cpu (1), gpu (1)
> **Code Keywords:** let (1), type, (1)
> **Cross-References:** previous video (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - mapping (1)

#### Making sense of it all
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=0)** - If this is a bit overwhelming, you're not alone.
>
> **[0:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=4)** There are many things to consider when developing a cloud architecture solution together, including making the right design decisions.
>
> **[0:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=12)** Keep in mind that the right answer is not what your friends are doing to design, build, and deploy their cloud solutions.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=20)** You are beholden to your own unique business requirements.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=24)** The trick is to pick the right ones by leveraging processes we're proposing here to achieve the most optimized solution.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=34)** If you're willing to do the work, it can be done each time.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=39)** Also, keep in mind that while many solutions and design decisions you'll make might work, that does not mean they're working optimally.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=49)** There are thousands of permutations of technology configurations that could work.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=54)** However, most of those won't be the optimal solution and could end up costing the business millions of dollars a month in lost productivity, excessive costs, and perhaps not meeting its needs.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=68)** To recap, to design and optimize cloud architecture, as a general rule, we need to make sure we've dealt with the following.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=77)** Data are how the data should be stored and taken care of for the longer term.
>
> **[1:23](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=83)** The same for compute.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=85)** Management are how we're going to manage the systems and technology we selected longer-term.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=92)** Monitoring, ongoing of all systems and applications.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=97)** Security and governance configuration and operations.
>
> **[1:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=101)** And cloud operations as a whole, meaning that all of what we just listed need to work ongoing, and we need to put in place the approaches and technology to do that.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=114)** And finally, any other systems that you may need to deal with, such as AI machine learning, IoT, edge compute, serverless, and other systems that need their own special design decisions and operational activities and tooling.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/making-sense-of-it-all?u=76281980&t=130)** It may seem like a lot, but if you understand what we're saying here holistically, you're able to make your own sound design decisions and support a successful cloud deployment.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)
> **Speakers:** - if (1)

#### Challenge: Defining the cloud architecture requirements for ABC Inc.
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=0)** - Welcome to the chapter four challenge.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=8)** You may remember ABC Incorporated from the second chapter, but now the challenge is different.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=15)** Now, ABC is a rapidly growing healthcare provider.
>
> **[0:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=19)** They face challenges managing their increasing data volumes and diverse applications.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=25)** Current on-premise infrastructure is nearing capacity, needs more scalability, and struggles to meet regulatory compliance.
>
> **[0:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=35)** They need a flexible, scalable, and secure cloud solution to support their operations, including patient data management, electronic health records, telehealth applications, and advanced analytics.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=48)** They lack a clear understanding of how to map their business requirements to specific cloud services and technologies.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=56)** They need your help.
>
> **[0:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=58)** Using what you've learned thus far, define high level requirements for ABC.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=62)** Again, no need to write anything down.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=65)** It's a test to see how well you consider these concepts.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/challenge-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=69)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** abc (3)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Defining the cloud architecture requirements for ABC Inc.
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=0)** - Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=6)** Let's take a look at what happened.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=9)** ABC Incorporated engaged a cloud architect to define their cloud architecture requirements.
>
> **[0:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=15)** Using a structured approach based on the principles outlined in the provided documents, the architect proceeded as follows.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=24)** Requirement gathering.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=25)** The architect meticulously documented ABC Incorporated's business needs, including data volume projections, application performance requirements, regulatory compliance mandates and security policies.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=40)** Mapping to cloud services.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=42)** The requirements were mapped to these specific cloud services.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=46)** Compute, high-performance compute instances optimized by the EHR system and analytics workloads were selected.
>
> **[0:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=54)** An active/active disaster recovery strategy was implemented for high availability.
>
> **[0:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=59)** Secure APIs were defined to integrate various applications.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=64)** Storage, a hybrid storage solution combining object storage and block storage was chosen.
>
> **[1:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=72)** Capacity planning accounted for projected growth.
>
> **[1:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=76)** Encryption was implemented for data at rest and in transit.
>
> **[1:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=80)** Database.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=82)** A HIPAA-compliant managed relational database service was selected for the EHR system, ensuring scalability and reliability.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=91)** Data encryption and access controls were configured to meet regulatory requirements.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=96)** CloudOps.
>
> **[1:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=97)** A comprehensive CloudOps strategy was developed, encompassing automated configuration management, performance monitoring tools, and security management processes.
>
> **[1:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=108)** Security and governance.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=110)** Robust security architecture was implemented, leveraging IAM, encryption and role-based access control to restrict access to sensitive patient data.
>
> **[2:01](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=121)** Governance policies were defined to ensure compliance with HIPAA and internal security standards.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=128)** Optimization.
>
> **[2:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=130)** The architect optimized the design for cost efficiency, minimizing unnecessary spending, while maintaining performance and security.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=140)** By systematically mapping business requirements to specific cloud services and implementing appropriate security and governance measures, ABC Incorporated successfully transitioned to a cloud-based infrastructure that is scalable, compliant, and cost effective.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/solution-defining-the-cloud-architecture-requirements-for-abc-inc?u=76281980&t=157)** So how'd you do?

> [!info]- Semantic Content
>
> **Env Vars:** abc (3), ehr (2), hipaa (2), iam (1)
> **Code Keywords:** let (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Other Advanced Topics

#### Performance management
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=0)** - One can think of performance as how humans and systems experience that cloud-based system that was created from your design decisions.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=10)** The fact is that if you pick one component that is slower than the other, such as database or network connection, that component will determine your overall performance.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=22)** In other words, your performance is equal to the slowest component you're leveraging.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=28)** There are three levels of determining performance.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=31)** First, leverage data from technology providers such as cloud providers, and make sure to ask about how well their components perform.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=40)** This is typically provided in throughput ratings.
>
> **[0:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=43)** Second, you should conduct your own performance analytics based on mathematical models to predict the performance of your solution, which is made up of many components.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=55)** And finally, the best way is to test your solution or technical configuration using real data and real business use cases to determine its real performance.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=65)** Of course, your ability to do one, two, or all of the above depends on your budget or availability of resources.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=73)** For our purposes, we can look at a few of the major components of an architecture or design decisions, and that analysis should lead you to understand how well your solution will perform.
>
> **[1:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=87)** Let's take applications first.
>
> **[1:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=89)** The major systems that determine how well an application performs includes structure, or the application, or how it's designed.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=98)** Remember, this depends on the development platform and programming language used, whether it's mini coupled modules or a single module.
>
> **[1:47](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=107)** Runtime is the execution of the application or how you're allowing the application to execute, such as using a compiler.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=117)** And threading or how you're executing specific parts of the application in a single thread or multiple threads.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=125)** Next is network, meaning that we're looking at.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=128)** Bandwidth is how fast the network can transmit and receive packets or the network speed.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=134)** We all know this since we've all experienced poor internet connection with too low bandwidth.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=140)** In cloud computing, there is bandwidth within the cloud itself as its internal systems communicate.
>
> **[2:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=147)** Also, the bandwidth for external communications or how it communicates with those leveraging cloud services or applications over the open internet.
>
> **[2:37](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=157)** Latency is the amount of time it takes for a packet of data to be captured, transmitted, processed through multiple devices, and then received at its destination.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=168)** This is important when considering using public cloud computing, since it is mostly accessed over the open internet, which is typically higher latency than a private network.
>
> **[2:59](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=179)** And location is the distance between the server and those leveraging it.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=184)** Typically the further away, the slower the performance.
>
> **[3:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=188)** Database performance is how fast the database can respond to requests for data and then transmit the data.
>
> **[3:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=196)** Many factors determine database performance, including the model it uses, such as relational and object, how the database is designed, and how the general efficiency of the mechanism that can read a database request and respond with a specific data set requested.
>
> **[3:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=215)** In the world of database performance, you'll hear the term response time as a core metric that determines database performance.
>
> **[3:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=224)** Of course, databases are complex technologies and there are many mechanisms to consider when determining your database's performance and fixing or tuning it to make it work faster.
>
> **[3:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=236)** Performance is a complex topic, and it's usually not considered until there are performance issues, such as users complaining about slow response time or customers using the website.
>
> **[4:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/performance-management?u=76281980&t=249)** You should consider performance proactively to ensure that we're monitoring for performance issues and fixing them before anybody complains.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1), module (1), public (1), private (1)
> **Analogies:** such as (5)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - one (1)

#### Proactive security
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=0)** - By now, we should have an idea of security and how it's applied in making correct and proper design decisions and creating our most optimized cloud architecture.
>
> **[0:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=13)** What we'll discuss here is how to make your security systems proactive.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=18)** This means preventing security issues before they become problems by actively monitoring aspects of all systems in the cloud and outside of the cloud.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=28)** The old way of waiting for a breach before responding means we're awaiting risk and damage before doing anything.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=36)** That's no longer acceptable.
>
> **[0:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=38)** Even though it's the way that many businesses currently deal with cloud security.
>
> **[0:44](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=44)** There are a few levels of proactive security that we can consider here, including data or the ability to gather over a prolonged period to determine trends that may indicate an attack is taking place, or other indications that something needs to be proactively protected.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=64)** Gathering data is really just that.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=67)** The ability to monitor aspects of your cloud computing architecture, such as network, compute, storage, or anything else that makes up your holistic system.
>
> **[1:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=77)** The idea is to see as much as you can.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=81)** Cloud computing can provide inexpensive and efficient data gathering and storage systems, so, most system activities should be monitored and data gathered.
>
> **[1:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=93)** And analysis of the data gathered or determining what it means.
>
> **[1:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=99)** This is the most important aspect of proactive security considering that we can gather all kinds of data, but figuring out what the trends are and how to spot security issues is the more difficult task.
>
> **[1:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=113)** Here, you're looking to spot trends.
>
> **[1:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=116)** For example, network and compute saturation could indicate an attack is underway, or IP addresses making requests to the systems outside a regular use pattern could indicate some unusual activity.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=131)** Really, we're looking for anything that suggests something might be wrong and needs to be proactively addressed, and response refers to your reaction upon identifying a trend that seems to be leading to a breach or even an ongoing attack.
>
> **[2:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=149)** Here, the options are endless, depending on what you think may be occurring.
>
> **[2:35](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=155)** Types of responses include blocking a suspicious IP address and investigating what they seem to be attempting.
>
> **[2:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=163)** We should remove systems from access until we're assured that the risk is gone.
>
> **[2:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=170)** This is often the prudent move if we're getting attacks from many different IP addresses.
>
> **[2:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=177)** Changing passwords and encryption keys in case they have been discovered, and pushing backup operations to ensure that a recent copy of the data has been archived in case of a breach, such as a ransomware attack.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/proactive-security?u=76281980&t=191)** Other evasive actions include moving processing to a backup facility, such as another region in a public cloud provider, even contacting law enforcement and other companies to let them know of your findings.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1)
> **Code Keywords:** protected (1), public (1), let (1)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - by (1)

#### Serverless
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=0)** - Serverless computing is the ability to support the execution of an application or set of functions without selecting and configuring cloud resources such as storage, computing, et cetera.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=14)** It's a bit confusing considering that serverless does leverage cloud servers.
>
> **[0:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=20)** However, serverless systems, such as AWS Lambda or Microsoft Functions, don't require you to do the work to size the resources you need to run an application.
>
> **[0:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=31)** The core advantages of leveraging serverless includes perform real-time data processing for many types of application use cases, build scalable back-end services that are able to provide self-scaling, and Glue and choreograph systems to integrate services, applications, and processes.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=53)** By this, I mean that we're able to leverage our serverless applications to control other applications, databases, or systems.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=62)** The core advantage of serverless cloud-based systems is that they remove the need to select and configure the resources needed to run a process such as an application.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=73)** As you may have gathered, when using public clouds or even during one or more of these courses, we must estimate the amount and type of resources needed to allow something to execute.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=86)** If we don't select enough resources, the application won't run.
>
> **[1:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=90)** If we select too many resources, such as storage and compute, we're paying more money than is needed.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=96)** Serverless systems select only the resources that you need during execution.
>
> **[1:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=102)** The serverless system allocates the resources when needed and returns them to the resource pool when not.
>
> **[1:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=109)** Serverless systems account for what resources you leverage and how much you spend after the process completes.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=117)** Here are features that you should consider when making your own design decisions regarding serverless computing.
>
> **[2:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=124)** There are several advantages.
>
> **[2:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=126)** First and most apparent, it removes you from estimating the amount and types of resources you need to support an application.
>
> **[2:15](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=135)** We often overestimate what we think we'll need, and thus overspend.
>
> **[2:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=141)** Second, it can scale as needed.
>
> **[2:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=144)** We no longer have to worry about running out of cloud resources during spikes in processing, such as around the holidays for retailers.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=153)** Finally, it can be more cost-effective considering it only leverages precisely the resources you need.
>
> **[2:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=160)** Of course, there are some disadvantages.
>
> **[2:43](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=163)** Since each cloud provider has its own serverless system, if you build an application on those systems, you're largely locked into that provider.
>
> **[2:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=172)** You can move the application to another cloud provider, but it'll have to be heavily modified.
>
> **[2:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=177)** It can be more expensive if the serverless system uses more resources than the application actually needs.
>
> **[3:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/serverless?u=76281980&t=184)** In some cases, cloud users are finding that if they configure the resources, they may be able to spend less money than when leveraging serverless.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (1), require (1), self (1), this, (1), public (1)
> **Analogies:** such as (5)
> **Prerequisites:** configure (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - serverless (1)

#### Containers and container orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=0)** - [Instructor] Containers provide the ability to run software within an operating system, running on a public cloud, a platform space that can run its operating systems such as Linux, as well as applications, data storage, and anything else you would run on a platform.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=18)** This allows us to isolate a platform application and data within another platform, either running on a public cloud or even on a traditional system.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=29)** The solution provides a few core advantages.
>
> **[0:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=32)** First, portability means it's relatively easy to move one container running on one public cloud and move it to another.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=42)** While some modifications need to be done to run on the new cloud, these are typically simple and sometimes non-existent.
>
> **[0:49](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=49)** And second, the ability to scale to support higher processing loads.
>
> **[0:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=55)** Using container cluster managers or container orchestration, we can automatically replicate containers across the platform or platforms, having them work together to support higher processing requirements.
>
> **[1:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=68)** While there are different orchestration solutions, Kubernetes is the most popular by far.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=73)** Containers can be considered both as a design decision that you make and how the application will be developed and deployed as well as a platform decision and how it will be operated longer term.
>
> **[1:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=88)** They are gaining in popularity due to their advantages, such as the ability to support portability by isolating operating systems, applications, and data.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=98)** And there is a growing ecosystem around the use of containers, and there are hundreds of security, management, governance, data, and other add-ons that are purpose-built to work with containers and container orchestration.
>
> **[1:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=114)** However, there are always downsides.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=117)** The first downside is that containers and container orchestration costs more to develop and deploy than traditional approaches.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=125)** Sometimes called the container tax, this is around the fact that it takes longer to develop these solutions and requires additional cost, such as specialized container security.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=137)** And second, using container and container orchestration is more complex than traditional development, thus operating longer term will cost more and be more challenging.
>
> **[2:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=149)** Moreover, specialized skills will be needed for both growth and operations.
>
> **[2:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=154)** Containers and container orchestration will be a design decision that most cloud computing architects must make at some point.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/containers-and-container-orchestration?u=76281980&t=162)** What's key here is that you go into making this decision with all the facts, and again, use your requirements to guide you, not the hype around a specific technology.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### IoT and edge computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=0)** - IoT, or the Internet of Things, and edge computing are old concepts that have new names.
>
> **[0:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=7)** IoT is the ability to support remote devices such as thermostats in your home, fitness watches, phone, TVs, factory robots, or anything that provides its own processing and data storage away from the centralized server, mainly existing on public cloud platforms.
>
> **[0:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=28)** Edge computing is related to IoT in that it involves supporting complete platforms, including compute, storage, and networking at the edge of a larger system or systems.
>
> **[0:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=40)** For example, your smart thermostat gathers temperature data and decides to turn on the heat within the device rather than sending the data all the way back to a centralized server that has to make those decisions on behalf of the device.
>
> **[0:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=57)** This reduces latency as the data does not need to travel all the way back to the backend systems and makes the system more reliable.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=67)** Even if the network is down, it can still function autonomously.
>
> **[1:12](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=72)** So while a device like your smart thermostat is indeed an IoT device, it also relies on more traditional compute and storage servers that live outside of the public cloud.
>
> **[1:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=86)** This is typically chosen because we'll get better performance if we place data storage and processing closer to where the data is being gathered.
>
> **[1:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=96)** If this seems a bit confusing, let's define IoT as the concept that a device outside of the public cloud is able to gather data either for local processing or for transmission to the systems on the public cloud provider at some point.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=115)** IoT is a form of edge computing.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=117)** Edge computing also defines edge as the ability to leverage more traditional systems outside the public cloud, connected by a network like the internet.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=128)** For our purposes here, and for the purposes of architecture, you can consider them conceptually and functionally very similar.
>
> **[2:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=137)** We have several IoT and edge computing courses that you should consider if you're interested in this topic and seeking more details.
>
> **[2:26](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=146)** Edge computing has some concepts that are starting to emerge that are beyond IoT devices, such as micro clouds.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=153)** Micro clouds, simply put, sometimes called edge clouds, are instances of public cloud services that run on-premises.
>
> **[2:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=162)** These include products such as Microsoft stack and AWS's Outposts.
>
> **[2:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=168)** These platforms support native cloud services such as storage and compute, or a subset of cloud services offered by a public cloud, but allow you to leverage them on-premises through a server and platform stack that a cloud provider offers.
>
> **[3:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=186)** Typically, these become the design decisions for companies that may need to keep the processing and data within the company data center, such as special security requirements or regulations that prevent the use of a remote public cloud.
>
> **[3:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=202)** IoT and edge compute focus on the reality that sometimes processing and data storage must occur outside the public clouds.
>
> **[3:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=212)** Public cloud providers, including AWS, Microsoft, and Google, support the development and operations of IoT and edge-based systems.
>
> **[3:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/iot-and-edge-computing?u=76281980&t=221)** It's essential to understand what's available to you so you can make your best design decisions around using this technology.

> [!info]- Semantic Content
>
> **Code Keywords:** public (10), function (1), let (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** make (2), aws (2)
> **Env Vars:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - iot (1)

#### Machine learning, generative AI, agentic AI, and deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=0)** - Artificial intelligence or AI is the ability to leverage systems that can learn and thus provide intelligence that resembles human intelligence.
>
> **[0:10](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=10)** Machine learning or ML is a form of AI that allows a machine to learn and imitate human behavior.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=18)** ML is focused more on pragmatic business applications and thus the term is often used to refer to a cloud service supporting learning.
>
> **[0:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=29)** For our purposes, and to avoid confusion, we'll call it ML.
>
> **[0:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=34)** However, it may be important for you to take a course on both ML and AI to understand the relationship and how each concept is applied.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=46)** As you can see from the list, there are many applications for AI ML, many of which we use daily.
>
> **[0:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=53)** ML becomes a core design decision that you will likely have to make when leveraging technology as a true force multiplier for the business.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=64)** Keep in mind that ML is a form of AI.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=67)** While AI is over 40 years old, the price of supporting traditional AI and the platform requirements in support of AI had a cost well out of reach of conventional businesses.
>
> **[1:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=81)** There are other forms of AI as well, such as deep learning, which is a form of AI that can find deeper meaning of patterns such as data.
>
> **[1:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=91)** More forms of AI are being researched right now and the usefulness of this technology will only grow.
>
> **[1:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=98)** With the advent of cloud computing and on-demand pricing, the cost has come down 900%, and now ML is affordable for all businesses that need it.
>
> **[1:50](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=110)** Thus, it's often applied when business applications need to make decisions based on a lot of data and have that data teach a knowledge engine, allowing it to determine patterns that may be within the data, much like we would do as humans looking at the data, still, ML can do this with a great deal more efficiency and also ongoing.
>
> **[2:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=134)** Keep in mind that we have specific problems that ML solves, such as when patterns can be leveraged, when dynamic data is available, when automation is a benefit, and when the static data is available, and anytime applications benefit from gathering and leveraging knowledge.
>
> **[2:33](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=153)** The types of applications that would leverage ML to add value would be processes such as the ability to spot fraudulent financial transactions, or the ability to determine when a robot is likely to fail based on operational data and historical data that indicate how a failure will typically occur.
>
> **[2:54](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=174)** ML is an application level design decision, but remember that you're also selecting an ML system that supports one or many applications.
>
> **[3:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=185)** These are often native to a specific public cloud or third party tools running on that cloud.
>
> **[3:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=191)** In some cases, you may pick many different ML systems for specific business requirements, while in other cases a few or a single solution will do.
>
> **[3:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=202)** Again, you need to look at what the business needs and incorporate the right technology.
>
> **[3:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=209)** In this case, ML.
>
> **[3:31](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=211)** Generative AI is a type of artificial intelligence that can create new content rather than just analyze or classify existing data.
>
> **[3:40](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=220)** This content can take many forms including text, images, audio, video and even code.
>
> **[3:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=228)** Generative AI is actually an evolution of machine learning and leverages many of the same concepts.
>
> **[3:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=235)** Generative AI models learn patterns from large data sets and then use this learned information to generate novel outputs that share similar characteristics with the training data.
>
> **[4:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=247)** These models are often based on deep learning architectures such as generative adversarial networks or GANs or transformers and require significant computational resources for training.
>
> **[4:21](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=261)** Applications range from creating realistic images from text descriptions to composing music and generating creative text formats.
>
> **[4:29](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=269)** However, concerns exist regarding potential misuse, ethical implications, and the accuracy of generated content.
>
> **[4:38](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=278)** Agentic AI refers to AI systems that can act autonomously in their environment to achieve goals.
>
> **[4:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=285)** They perceive, reason and act often leveraging machine learning to adapt and learn from their experiences.
>
> **[4:53](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=293)** This autonomy distinguishes them from simpler AI systems to build ag agentic AI, define clear goals and tasks, gather and prepare relevant data, design individual agents each using appropriate ML models, such as NLU, information retrieval and decision making.
>
> **[5:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=313)** Orchestrate agent collaboration, implement continuous learning, deploy to the cloud using the appropriate services such as compute, storage and databases.
>
> **[5:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=324)** Establish monitoring and robust security governance.
>
> **[5:28](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=328)** Start with a simple goal and gradually expand your capabilities.
>
> **[5:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=332)** AI is here to stay.
>
> **[5:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/machine-learning-generative-ai-agentic-ai-and-deep-learning?u=76281980&t=334)** While this was a quick description, we urge you to check out the other courses focusing on AI, including ML, generative AI and agenetic AI.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is an  (1), refers to (1)
> **Analogies:** such as (7)
> **Code Keywords:** static (1), public (1), case, (1), require (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** keep in mind (2)
> **Env Vars:** nlu (1)
> **Speakers:** - artificial (1)

#### Multi-cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=0)** - About 95% of cloud deployments out there are considered to be multi-cloud.
>
> **[0:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=6)** While multi-cloud is often defined as two or more public cloud providers, it includes legacy or traditional systems, private clouds, and IOT and edge based systems.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=17)** Multi-cloud is a term for complex distributed systems with significant heterogeneity, which is what multi-clouds are.
>
> **[0:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=25)** The reason that enterprises leverage multi-cloud as a design decision include the need to support best of breed technology means picking the best solution from each public cloud provider to support the business requirements.
>
> **[0:39](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=39)** The need to select cloud providers with the best pricing for core services such as compute, storage, databases, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=48)** There is a need to support business events such as acquisitions where cloud providers must be combined to support the combined business.
>
> **[0:56](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=56)** Those dealing with multi-cloud deployment immediately noticed that their result in significant complexity and heterogeneity.
>
> **[1:04](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=64)** Indeed, instead of dealing with approximately 700 cloud services when leveraging a single cloud provider such as AWS, based on the number of services leveraged by the business and the business applications, we are now dealing with approximately 1800 cloud services with the addition of Google and Microsoft.
>
> **[1:25](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=85)** What's more we need to deal with the complexity brought on by using multi-cloud through abstraction and automation layers.
>
> **[1:32](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=92)** This allows us to leverage management and monitoring, security, governance, and other core services across the public clouds without attempting to leverage a cloud native service on all clouds.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=105)** Indeed, the ability to find common cross-cloud services that remove much of the complexity allows you to operate a multi-cloud with nearly the same amount of resources as operating a single cloud.
>
> **[1:58](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=118)** It's not if but when a multi-cloud will be your design decision.
>
> **[2:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=123)** Indeed, in supporting the business, it's typically the right way to go.
>
> **[2:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/multi-cloud?u=76281980&t=128)** However, it also requires more architecture and planning and how you select the cross-cloud services and ensure that the complexity does not become so overwhelming that it fails to provide the value that the business needs.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), private (1)
> **Definitions:** is a  (2), defined as (1)
> **CLI Commands:** aws (1), find (1)
> **Env Vars:** iot (1), aws (1)
> **Analogies:** such as (2)
> **UI Navigation:** select the (1)
> **Speakers:** - about (1)

#### Low-code and no-code
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=0)** - Low-code and no-code Solutions allow users to create and deploy cloud-based applications with little or no programming skills.
>
> **[0:08](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=8)** Leveraging technology that allows non-programmers, such as managers and executives, to create their applications is nothing new.
>
> **[0:17](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=17)** However, the new generation of low-code and no-code development tools is much easier to leverage.
>
> **[0:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=22)** And since many are cloud deployed, they cost very little.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=27)** As you can see from these examples of low-code development tools, they use graphical interfaces, allowing non-programmers to draw out how the programs should work, access databases, and provide very complex processing.
>
> **[0:42](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=42)** Those who are not programmers can create compelling applications that they can define and change to meet the business's specific needs.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=52)** Leveraging no-code and low-code tools as a design decision for your cloud solution can remove the barriers between those who need to define what an application does and the programmers who must develop it on their behalf.
>
> **[1:06](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=66)** While these tools do not replace traditional development methods, it's important to understand that they are available if they seem useful.
>
> **[1:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/low-code-and-no-code?u=76281980&t=74)** Moving forward, technology should remove much of the deep skills needed to build and deploy applications, allowing some development done by those who need and use the applications directly.

> [!info]- Semantic Content
>
> **Code Keywords:** new. (1)
> **Analogies:** such as (1)
> **Speakers:** - low (1)

#### Emerging technology
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=0)** - No one can predict what's next in terms of the evolution of cloud computing, or know what other design decisions you'll need to make within just a few years.
>
> **[0:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=9)** However, we can name some ideas that seem to be emerging now or will soon, which may allow you to track them more closely.
>
> **[0:18](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=18)** While DevOps is not new, the technology emerging in this space will likely affect how you choose technology in the future.
>
> **[0:27](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=27)** DevOps allows you to continuously build and deploy applications, providing faster development, testing and deployment than we did in the past.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=36)** This technology will likely improve reducing the latency between the businesses, defining the business problem, and application solution.
>
> **[0:46](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=46)** Serverless is everything.
>
> **[0:48](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=48)** As serverless becomes the preferred way to build and deploy systems, we'll likely see more serverless approaches to building and developing databases, containers, container orchestration, and even defining operations and security.
>
> **[1:02](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=62)** Ease of use and scalability are the primary drivers here.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=67)** Democratization of technology.
>
> **[1:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=69)** As we saw with low-code and no-code solutions, we're looking to put more development and deployment capabilities in the hands of the business users.
>
> **[1:19](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=79)** Watch for more innovative solutions here.
>
> **[1:22](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=82)** Intelligent edge computing or the ability to put AI ML within edge based devices to put the thinking and the processing closer to where the data is gathered and results need to be sent.
>
> **[1:34](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=94)** This will occur around systems that need to process locally, such as monitoring a jet engine on onboard an aircraft, which also needs deep AI processing to do the work correctly.
>
> **[1:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=105)** Just-in-time training or the ability to automate the training needs to create the skills required to move forward with new and emerging technology.
>
> **[1:55](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=115)** We can obtain on-demand training today.
>
> **[1:57](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=117)** Moving forward, there will be more coupling between technology deployed and the humans needed to support that technology.
>
> **[2:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=125)** The learning will be automated, easy to obtain and never stop.
>
> **[2:09](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=129)** Common intelligence.
>
> **[2:11](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=131)** While we're setting up AI ML systems today to perform various business tasks, we will become better at sharing that knowledge moving forward.
>
> **[2:20](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=140)** Thus in building an AI system in the cloud to detect fraud, we'll not have to teach the knowledge engine by tethering training data over time.
>
> **[2:30](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/emerging-technology?u=76281980&t=150)** You would link it with a pre-trained engine to take advantage of the knowledge gathered in other places.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (1), required to (1)
> **CLI Commands:** make (1)
> **Code Keywords:** new, (1)
> **Cross-References:** as we saw (1)
> **Analogies:** such as (1)
> **Speakers:** - no (1)


### Conclusion

#### Learn to stay state of the art
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=0)** - So where do you go from here?
>
> **[0:03](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=3)** Given that this course provides a starting point for experiencing cloud computing architecture and making your own design decisions, I recommend that you just attempt to work as a cloud architect.
>
> **[0:14](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=14)** There are many ways to do this.
>
> **[0:16](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=16)** If you work for a company that has these types of projects, perhaps you can use the knowledge you've gathered here to join that team.
>
> **[0:24](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=24)** This may require you to change companies in search of someone who can provide that opportunity, but given the ongoing shortage of cloud computing architects, it should not be as hard as you think.
>
> **[0:36](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=36)** In some cases, you can work as an intern if primary jobs are not available.
>
> **[0:41](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=41)** Gather the skills you need to move on to a full-time career.
>
> **[0:45](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=45)** Other paths include gaining cloud provider certification, such as AWS Certified Architect, that you can leverage into initial opportunity.
>
> **[0:52](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=52)** While having specific knowledge of a public cloud provider services is good, the general purpose knowledge we presented here will benefit the long-term as you make design decisions that span different cloud providers.
>
> **[1:05](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=65)** Become a continuous learner.
>
> **[1:07](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=67)** Your journey to understand cloud architecture and cloud solutions continues beyond here.
>
> **[1:13](https://www.linkedin.com/learning/cloud-architecture-design-decisions-24525835/learn-to-stay-state-of-the-art?u=76281980&t=73)** Follow your interests and desires to understand more by listening to cloud computing podcasts, reading cloud computing blogs, and learning any way you can.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), require (1), public (1)
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - so (1)


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