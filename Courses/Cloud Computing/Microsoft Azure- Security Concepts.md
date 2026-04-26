---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: microsoft-azure-security-concepts-24975655
url: "https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655"
duration_minutes: 121
duration: 2h 1m
level: Intermediate
updated: 12/9/2024
learners: 13855
skills:
  - Identity and Access Management (IAM)
  - Cybersecurity
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQERyAhthc0pFA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732322429791?e=2147483647&amp;v=beta&amp;t=QzYmbqQ3pbx7I-ZNu1RUvbml9Xwrsplm4Q8upoFf3zA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
prev_courses:
  - '[[Manage Virtual Machines in Azure]]'
next_courses:
  - '[[Planning for Microsoft Entra ID]]'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":3,"total":8,"prev":"Manage Virtual Machines in Azure","next":"Planning for Microsoft Entra ID"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/identity-and-access-management-iam
  - skill/cybersecurity
  - skill/microsoft-azure
status: not-started
created: 2026-04-21
---

![Microsoft Azure: Security Concepts](https://media.licdn.com/dms/image/v2/D560DAQERyAhthc0pFA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732322429791?e=2147483647&amp;v=beta&amp;t=QzYmbqQ3pbx7I-ZNu1RUvbml9Xwrsplm4Q8upoFf3zA)

# Microsoft Azure: Security Concepts

> The professionals in charge of Azure administration need to know how to secure services correctly to protect the data flowing between client computers and the cloud. This course with instructor David Elfassy investigates security concepts related to Azure deployment and services such as Microsoft 365, Microsoft Entra ID, and Microsoft Defender for Cloud. Find out how to use the built-in security t

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655) | 2h 1m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[David Elfassy]]

## Skills Covered

- Identity and Access Management (IAM)
- Cybersecurity
- Microsoft Azure

## Table of Contents

### Introduction

#### Microsoft Azure security concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980&t=0)** - Digital security is the vigilant defense that ensures privacy, prevents breaches, and provides peace of mind in an ever-changing digital landscape.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980&t=8)** But configuring an environment for security is sometimes considered an interpretive science with a technology specialist needs to evaluate a security posture and prioritize recommendations.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980&t=18)** My name is David Elfassy.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980&t=20)** I'm a Microsoft certified trainer and I've helped organizations improve their security infrastructures for over 20 years.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/microsoft-azure-security-concepts?u=76281980&t=26)** Join me in this course where we'll explore the Microsoft tools and features that will help your organization ensure defense in depth approach to securing your Microsoft clouds.

> [!info]- Semantic Content
>
> **Speakers:** - digital (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you take this course, I'm going to recommend that you get familiar with some key concepts of Microsoft Cloud technologies, specifically Microsoft Azure, but also some on Microsoft 365.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=14)** In the LinkedIn Library, I have multiple courses that will allow you to get those foundational skills on Microsoft Azure.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=22)** Specifically, I will recommend that you follow the [[Azure Administration Essential Training]].
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=28)** This course will allow you to learn about all of the essential workloads, services and resource types in Microsoft Azure.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=36)** Throughout this course, you will learn about the management tools and the various features available within Azure, as well as all of the underlying structure that allows Microsoft to create these cloud technologies.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=51)** Microsoft Entra ID for Administrators is another course that I recommend for you to take before you take the security course.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=59)** This course will allow you to have a deeper understanding of the Microsoft Identity Services as they are available through Microsoft Entra ID, formerly known as Microsoft Azure Active Directory.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/what-you-should-know?u=76281980&t=73)** As well for Microsoft 365, I have a course named Microsoft 365 Administration, which will get you familiar with all of the tools and workloads that live within Microsoft 365.

> [!info]- Semantic Content
>
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 1. Security Principles in the Cloud

#### A security approach: The importance of securing
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=0)** - [Instructor] In this video, we will discuss the importance of securing the cloud, specifically focusing on Microsoft Azure.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=7)** So we'll review the various primary solutions of Microsoft Azure, the way that they should be secured, and we'll try to discuss some of the myths that are related around security for a cloud, whether that be a private cloud or a public cloud, and how those affect Microsoft Azure.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=23)** As well, we'll talk about some recommendations for securing the cloud at the high level.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=28)** So let's first review the primary solutions.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=30)** We have three types of hosting solutions, infrastructure solutions for Microsoft Azure.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=36)** The first is infrastructure as a service, the second, platform as a service, and software as a service.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=42)** Now, there are subsections to those types of solutions in a cloud-based service.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=47)** However, those are the primary buckets that we will review as part of this course.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=51)** So infrastructure as a service is where the cloud provider provides the physical infrastructure for your hosting solution.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=58)** For example, you have all of the data centers and all of the servers and all of the memory and the storage.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=65)** All of that infrastructure is provided for you and is rented to you as a service.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=70)** A platform as a service is where there's some limited deployment that is already there, the underlying platform, so for example, Windows or a database solution that's already been implemented as a platform, and then you will be renting services as part of that platform.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=87)** So it kind of builds on top of the infrastructure where you have the infrastructure plus the platform that are provided to you as a service.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=94)** The third bucket is software as a service.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=97)** Now software as a service is where the infrastructure and the platform are already there, but the software is already deployed on top of that platform.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=105)** For example, an email solution exchanged online is sold or rented as a service.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=112)** That software is part of Microsoft Azure and it's marketed as Office 365.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=118)** So those are the three primary solutions in Microsoft Azure, but they also apply to other cloud providers.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=124)** If you're looking at Amazon solutions, you'll find a similar type of solutions for the cloud provider.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=131)** Now, the solution type defines the type of security that we need to implement, and the reason why I mention that is because you have different type of solutions that are provided to you, and they have different types of interaction with your data and your resources.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=145)** Therefore, the way that you need to secure that data and those resources is different based on the type of solution that you use by a cloud provider.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=154)** So if you have an infrastructure as a service, the security requirements are almost identical to what you're currently doing on-premises.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=162)** As part of your cloud solution is the actual underlying infrastructure, all of the software, all of the platforms, all of the operating systems and everything that you deploy on top of that infrastructure must be secured the same way that you're currently securing your resources on-premises.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=179)** The same way that you're securing your on-premises solutions, you will have to secure your infrastructure as a service solutions based on the similarity of the deployment.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=191)** Now, if we go a little bit further and look at the platform as a service solution, the security requirements are mostly defined in the configuration and the deployment of what's going to sit on top of that platform.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=202)** So if you have a storage solution or if you have a document management solution that is going to reside within the platform that is provided by the cloud provider, all of the security settings that you're going to have to manage are going to be the security settings for that specific software, for that specific tool that you're deploying into the platform.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=224)** So it will be very specific to that application and the deployment that you will use for that application is going to have some security requirements around it as well and you will define all of those as part of your deployment solution.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=239)** If we go into a software as a service solution, then our security requirements are generally restricted to the way users behave and the available configurations in the UI, in the user interface of Microsoft Azure.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=253)** So if you've got, for example, a application or a specific service that is deployed as part of software as a service, such as Exchange Online, where you're provided with a set of user settings and a set of configurations, the way that you manage those configurations and the way that you manage those settings are going to define your security for that software.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=275)** So that may be the frequency of a password that needs to be reset or that may be the way that the emails are going to be retained or encrypted into that software as a service solution.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=287)** So as we build on to the amount of services and solutions that we use as part of our cloud provider, for example, Azure, then the responsibility or the onus of security is taken away from the administrator and is being implemented and provided by the cloud provider.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=305)** Now, there are various scale that defines well how much of the responsibility is going to be yours as an administrator of an Azure platform or is going to be provided by the cloud providers such as Microsoft.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=318)** So I really like this diagram because it provides a good representation of what it is that you are or are not to responsible for, and if you see the least amount of responsibility, so those buckets that are defined in blue are in a software as a service solution.
>
> **[5:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=334)** So everything that's related to your clients, to your account management, your user passwords, for example, and how much you want to retain your data, all of those settings are your responsibility.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=344)** Everything else that's related to the platform and the infrastructure are going to be the responsibility of the cloud provider, Microsoft in this case.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=352)** So all of those gray boxes, as you see, reduce, therefore, Microsoft's responsibility is reduced as you go down the scale to infrastructure as a service.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=362)** If you're on-premises, of course, Microsoft is not responsible for any of it and you're responsible for the entire deployment.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=369)** If you want to completely or reduce as much as possible your security onus and the responsibility of security configurations, then software as a service is likely to be the best solution for you.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=380)** An important point to note is that you will always own your data.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=384)** Everything that's your resources and your data is always going to be the ownership of the client, the company yourself, as part of the solution.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=392)** So it's very important to understand when your security skills are required and where within the solution you will be required to manage a specific type of security setting.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=402)** And again, the type of solution that you choose with your cloud provider is going to define the amount of security requirements that are on you.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=410)** So some great security principles to live by when looking at a cloud solution, and also true if you're an on-premises deployment of Windows or any type of infrastructure solution.
>
> **[7:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=421)** The key is always to achieve that balance between security and accessibility.
>
> **[7:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=426)** Now, here are some great security principles to live by.
>
> **[7:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=429)** I always tell my clients that the key is to achieve that magical balance between security and accessibility.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=436)** A network that is truly secure is a network that is completely detached from all network access, detached from the internet, and physically disconnected from any outside attacks.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=447)** However, that network or that resource is really not accessible.
>
> **[7:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=451)** Now, a resource that is truly accessible and easily accessible may not be the most secure, so there's truly a balance between the two that we need to find, is having providing access to the data and to the resources while still maintaining them secure, but not putting too many hurdles that the accessibility is going to be hampered.
>
> **[7:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=470)** So that is really a fine art, almost, in achieving that right solution.
>
> **[7:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=475)** Another very important security principle is to always look for your weakest link.
>
> **[7:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=479)** Now, there is a weak link in every deployment.
>
> **[8:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=482)** Every deployment that I've encountered has actually usually had many weak links.
>
> **[8:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=487)** Now to identify your weakest link is usually going to be your greatest security threat, because if there's going to be an attack on your infrastructure, the weakest link is going to be exposed likely first.
>
> **[8:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=498)** Now, there are some myths that I really wish you would ignore, and I hope through this course you will learn to ignore them.
>
> **[8:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=505)** One of those is that the cloud is secure by design.
>
> **[8:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=507)** Hopefully, if you're listening to this course, it means that you've already realize that a cloud is not really secured by design.
>
> **[8:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=514)** There is a certain amount of responsibility that will be on you to secure part of your solution.
>
> **[8:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=519)** The cloud is unsecured by design, and that's a little bit of the flip side of it, where various administrators may think that there's nothing secure about the cloud because it's it's public, it's out there, it's connected to the internet.
>
> **[8:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=530)** Now, there are some security settings that are built in, and as I will demonstrate, it's really defined on the amount of settings that you choose to use as part of the initial deployment of Microsoft Azure or your cloud provider.
>
> **[9:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=543)** Now, someone else's platform means it's someone else's problems.
>
> **[9:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=546)** Well, actually you are using the infrastructure and you are providing your data into this infrastructure.
>
> **[9:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=553)** Therefore, it becomes your problem.
>
> **[9:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/a-security-approach-the-importance-of-securing?u=76281980&t=555)** Now, it's important for you to understand the amount of security that is going to be provided by your cloud provider, and it's also important for you to understand how much of it is your problem, how much of it is your responsibility, and these are the things that we will review as we demonstrate the various security tools as part of Microsoft Azure.

> [!info]- Semantic Content
>
> **Analogies:** for example (6), such as (2)
> **Code Keywords:** public (2), private (1), let (1), interface (1), for, (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** find (2)
> **Best Practices:** the key is (2)
> **Speakers:** - [instructor] (1)

#### Terminology: Understanding the security terms
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=0)** - [Instructor] So let's be clear on the terminology.
>
> **[0:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=2)** There are various terms that are going to be used throughout this course, and I want to make sure that we're clear on what it is that we mean when we say different things.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=11)** So let's go through some of these terminology and through some of these terms that are going to be constantly reused when discussing Azure and Azure security.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=20)** There are four buckets that we use in describing the components and the relevance aspects of security in Azure.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=27)** Storage security, network security, identity and access control, as well as monitoring practices.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=34)** Now, monitoring practices is the one element that's going to bleed into all the other three sections of security.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=40)** Now I'm going to focus on those three.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=42)** First, let's talk about storage security.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=44)** So storage security discusses the ability to encrypt or secure your data while it is stored in the Azure infrastructure, or while it is transferred from one element of Azure to another, or from one device to another.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=60)** So we will discuss data encryption, encrypting or securing the data, client-side encryption, which is a process of encrypting the data by using client-configured technology or client programmability, key vaults, which is a storage solution for encryption keys.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=79)** We'll discuss also network security.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=82)** So network security is the technology that allows us to secure our data as it is being transferred in and out of Azure.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=91)** So we will talk about the technologies that we use to encrypt our data as it is being sent over an unsecured link, known as the internet.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=101)** So for that, we'll talk about virtual private networks, or VPNs, network security groups, which is an element that allows you to provide some authentication and access control for your network access.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=115)** We'll also talk about identity and access control.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=118)** Identity or identity management is the technology that allows us to manage our credentials, manage our users and our groups, the ones that are allowed or disallowed from accessing our resources.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=130)** You might find that I'm describing Active Directory, and that's exactly what I am describing.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=134)** Active Directory is the primary tool for providing identity management and access control, controlling who can access our resources.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=143)** For that, we use technology such as RBAC, role-based access control, a technology that allows us to provide very granular settings of security for our users.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=154)** We'll talk about multifactor authentication, the ability to force a multiple methods of authentications for a user, essentially forcing the user to authenticate twice.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=165)** Password policies.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=167)** What kind of password can a user use?
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=168)** Can you use a password that's only seven characters, password that has only letters or only numbers, or does a user is required to change their password every 30 days or every 90 days?
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=181)** Those are defined by using password policies, and those are all part of our identity management and access control solutions.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=187)** When we provide good security management of our infrastructure in the event that our network has been attacked, that our network has the proper measures in place to secure itself and to alert an administrator in the event of a security threat.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=204)** So a little bit deeper about these four elements.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=207)** First, let's talk a little bit more about storage security.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=210)** So whenever we talk about storage security or data, we talk about our data when it's at rest or data that is in transit.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=218)** So data that is in transit is essentially data that is being transferred, that is moving over the wire.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=224)** Now, the wire by itself, or the connectivity by itself, is not necessarily secured.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=230)** So we need to provide technology that secures our data as it's in transit.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=234)** Data at rest is data that is sitting on a disc, a device, or it is not being moved, but it's being stored.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=243)** So whenever we're talking about encryption, we're talking about an encryption for our data transfer or our data storage.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=250)** Now this all is part of the bucket of storage security because we often see that when a client is saving data or opening data, it will have the ability to encrypt and decrypt, and that is called client-side encryption.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=263)** And this is the one element that you find under both encryption and transit, and encryption at rest.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=269)** Client-side encryption is a technology that is provided through some storage libraries or the client storage libraries that give you the ability to programmatically configure an application that will allow the user or the client computer or the client device to encrypt or decrypt data as it's reading the data, then re-encrypt as it's saving the data.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=291)** That's why it's defined as client-side encryption.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=294)** Transport layer security, going back to encryption in transit, transport layer security, or TLS, is the ability to configure an HTTPS connection.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=303)** For example, to secure data as it's being transferred.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=307)** Wire encryption is a technology that is used for Azure file storage.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=312)** It uses SMB, or SMB 3.0 in this case, which allows Windows clients, for example, to encrypt data as they are transferring them over the wire to an Azure file storage.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=325)** Now, when we're talking about encryption at rest, we have different types of data that can be encrypted, and they're encrypted in different methodology or different manners.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=335)** When we're talking about Azure disc encryption, which, in my opinion, it's one of the greatest encryption technologies that we have in Azure, is the ability to encrypt an entire disc that is being used by a virtual machine.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=347)** And the disc of the virtual machine as well.
>
> **[5:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=350)** It actually uses BitLocker or Windows Drive BitLocker Encryption.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=354)** That is a technology that is very secure, and that provides a very high level of encryption for your entire data that is being used by a virtual machine or, again, the virtual machine itself.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=365)** In a later video in this course, we'll look at how this is done.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=368)** There's also storage service encryption.
>
> **[6:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=371)** And the storage service encryption is basically using the built-in Azure storage service and specifying it to be encrypted by using additional application or additional services that are enhancing Azure.
>
> **[6:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=385)** So Azure has built-in storage, Azure storage, and the storage service is what provides the Azure storage.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=392)** But using additional tools that are available through the Azure marketplace, we can provide different levels of encryption if we need to encrypt different types of data that is stored in our Azure storage.
>
> **[6:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=403)** So moving along to another bucket, which is network security.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=407)** So whenever we discuss network security, we look at two different buckets.
>
> **[6:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=412)** Network access control or the ability to actually control who can access what and how they can access our data, where they can access our data.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=422)** And this is done in different manners.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=424)** One of those is network security groups.
>
> **[7:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=427)** Network security groups is a fancy way of saying authentication control.
>
> **[7:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=431)** There's some additional functionalities in there, but we specify IP configuration or IP allowlist.
>
> **[7:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=438)** We specify authentication lists, specifying which users can access.
>
> **[7:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=442)** We allows us to control our access to various network resources.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=447)** In network access control, we also discuss things as forced tunneling.
>
> **[7:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=451)** If you've ever used a VPN, you know that you have various options that allow you or disallow you from using a local internet connection.
>
> **[7:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=458)** When you're connecting through a VPN.
>
> **[7:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=461)** Forced tunneling is one of those technologies that forces you to use a VPN for all network traffic.
>
> **[7:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=467)** So when we're connecting to Azure, our clients, we can enforce a forced tunneling to our clients to ensure that they have the most secure connectivity, and that is one that always goes through a VPN, for example.
>
> **[7:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=479)** If you want to have some enhanced control over your connectivity from your clients and enhanced control over all of your traffic, we can add some extend Azure by adding virtual network appliances.
>
> **[8:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=492)** And those are available through multiple Azure partners, again, through the Azure marketplace.
>
> **[8:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=497)** If you have a hybrid deployment or if you have multiple sites within Azure, there are different methods to implement cross-premises, and we'll look at later on in this course point-to-site and site-to-site VPN, different types of VPNs, as well as ExpressRoute.
>
> **[8:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=515)** ExpressRoute is a methodology of having a dedicated link between your on-premises environment and Azure.
>
> **[8:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=524)** And this is probably the most secure connectivity that you could have, but it also comes at a very hefty price.
>
> **[8:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=530)** Access and identity solution.
>
> **[8:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=532)** Our third bucket again is Azure AD.
>
> **[8:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=536)** Azure Active Directory is essentially the functionality that provides most of this solutions that are listed for access and identity management.
>
> **[9:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=544)** So access control, how our users will connect to our environment.
>
> **[9:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=548)** Single sign-on, the ability to use only one credential to access multiple resources and to not have multiple requirements to use multiple accounts to access various resources.
>
> **[9:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=560)** This is especially useful if you have a hybrid coexistence solution, if you have both on-premises and a solution in Azure.
>
> **[9:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=567)** Single sign-on will ensure that your connection will only require a single method of authentication.
>
> **[9:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=574)** Multifactor authentication, which requires multiple methods of authentication but for the same account.
>
> **[9:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=580)** So it's not like you have multiple accounts.
>
> **[9:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=582)** You still have just one account, except sometimes you'll have to use both a password and a PIN, ensuring that it's really you.
>
> **[9:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=589)** And multifactor authentication provides that really high level of security and environments that require it.
>
> **[9:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=596)** An application proxy is a solution that we put in place when we want to publish web apps or other types of applications that we want to have secure access that's managed through Active Directory.
>
> **[10:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=607)** We use these application proxies, and there's another course in the Lynda Library on Azure AD, and we go through the process of creating application proxies in detail.
>
> **[10:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=617)** Identity management is the solution of Azure AD, which gives you the management of all of your resources.
>
> **[10:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=623)** And whether that's managing your devices or managing your users the same way that you do in an on-premises solution, that's part of your identity management solution, but you also have some very enhanced administrative reports that are available in Azure AD.
>
> **[10:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=636)** And that's provided really through the fact that you're using now a cloud-based solution for storing and managing all of your user data.
>
> **[10:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=644)** The machine learning that works in the background of Azure can then provide some very enhanced reports and very quickly in time to allow you as an administrator to constantly review what is going on in your identity solution.
>
> **[10:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=659)** One of the most advanced and probably complex functionalities of Azure AD is implementing a hybrid coexistence using Azure AD Connect.
>
> **[11:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=669)** Azure AD Connect is a great tool that allows you to have your user accounts both on premises and in Azure coexist in a virtual environment or if you want to migrate from one environment to the next, or if you need to have multiple components that need to coexist together, hybrid coexistence is that functionality.
>
> **[11:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=689)** And identity management in Azure AD gives us the ability to have a hybrid coexisting environment using these enhanced tools such as Azure AD.
>
> **[11:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=699)** So those are our three buckets.
>
> **[11:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=701)** Network security, storage security, and access control and identity management.
>
> **[11:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=706)** All of those require good monitoring practices and a good amount of security practices.
>
> **[11:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=711)** And these are the main terms that I will be using throughout this course.
>
> **[11:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/terminology-understanding-the-security-terms?u=76281980&t=716)** Of course, establishing new concepts and going a little bit more in depth for each one of those solutions.

> [!info]- Semantic Content
>
> **Definitions:** is a  (9), known as (1), is an  (1), is called (1), defined as (1)
> **Env Vars:** vpn (5), smb (2), rbac (1), tls (1), https (1)
> **Code Keywords:** let (4), require (3), private (1), case, (1)
> **Analogies:** for example (3), such as (2)
> **Prerequisites:** configure (2), required to (1), you need to have (1)
> **CLI Commands:** find (2), make (1)
> **Versions:** 3.0 (1)
> **Speakers:** - [instructor] (1)

#### Defense in depth approach
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=0)** - [Instructor] Most security experts will agree that there are many approaches that you can take to secure your environment.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=6)** When we had on-premises infrastructures, we would start with a physical layer securing our offices, securing the doors, securing the servers, physically securing those servers, having security guards at the door, and physically securing the access to the resources.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=23)** Most of those secure requirements are now gone considering we're have our storage in the cloud.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=29)** However, there's other aspects that we need to secure, and we're looking at those in this course.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=34)** But the approach that you need to take overall is similar approach to the one that we take in a physical security environment.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=40)** That approach is actually something that's not new, that's been existing for many years, and a security approach that's adopted by many security experts, which is a defense in depth approach.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=51)** The definition of defense in depth is the implementation of multiple security measures to protect the most valuable resources on your network, in this case, your cloud.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=63)** So we want to protect what we have and we want to put as many layers as we can in front of the attacker that's trying to threaten our network and our resources.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=72)** Somebody's trying to access our resources in this case, they're no longer trying to access it from a physical standpoint, but they're trying to access it over the internet through the various means that they have of accessing our resources.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=86)** By implementing a defense in depth approach, we try to close as many doors as are presented in front of an attacker.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=93)** Now, what I like to compare this to is implementing as many layers of security as you can to protect your home.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=100)** This is an analogy that people can easily understand 'cause if we need to protect our home, we all use similar methods.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=107)** We put the best locks on our doors, put an alarm system, maybe we put a camera there to act as a deterrent.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=113)** Maybe we put a camera there to actually record certain things.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=116)** We put bars on windows to make them much more secure and to prevent attackers, again, sometimes as a deterrent, sometimes to physically block people out.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=125)** And there's many other means that we use in order to secure our homes.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=128)** Well, a defense in depth is essentially the same thing, where we're implementing different means and different methods of securing our environment in order to prevent different types of attack.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=140)** And often also to prevent an attacker to even thinking that this is an easy target.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=146)** And if the attacker think it's going to be much more difficult to get into your network, they're more likely to not try to attempt to get into your network and they'll look for an easier target, just like a thief is walking around the neighborhood looking for an easy house to steal from.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=160)** So these are some examples of different types of security measures we put in place in a defense in depth approach.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=167)** Sometimes we need to put firewall solutions at the perimeter network.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=170)** Now, you may tell me, but this is not an on-premises solution.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=174)** How can we have a firewall?
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=175)** Well, we have firewall type technologies that we can put in place that virtual software based firewalls that are at the perimeter of our Azure network.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=183)** So we can control authentication of the access to the internal network, whether those resources are being used by devices or by public users out on the internet.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=194)** The firewall solutions give us those types of access control as well as filtering and auditing of resources that are being accessed through this virtual firewall.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=204)** And those are mostly implemented through third parties through the Azure marketplace.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=209)** Now, one more thing that we do, and this also applies to an on-premise infrastructure and the cloud is to restrict administrative rights.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=216)** So you want to minimize as much as possible the rights that administrators have.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=220)** One of the great functionalities that we have in Azure is something called temporary administrative rights.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=226)** So an administrator can have the right to perform a a high level administrative task, but only for a few hours.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=233)** And sometimes that's all you need in order to perform a task.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=235)** And then that right is taken away from you.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=238)** So this is a great way of minimizing those old permissions that linger over years because they had an initial reason, but no longer are necessary.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=246)** Disabling services and protocols is something that many administrators are very familiar with in a on-premise infrastructure, again, minimizes the amount of entry points that go into your server and your resources.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=258)** So those may be disabled from an operating system standpoint, or they may be blocked at an access point into the environment.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=267)** Encrypting data is another way of protecting our environment, and that data can be encrypted either while it's being sent in transit or if it's at rest while it's being stored.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=277)** So all of these things are examples of methods that we use to minimize the attack surface.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=284)** So by blocking and preventing all these entry points and minimizing all these rights, we've created a very small attack surface, a very small surface that is exposed to the external attacker and that is exposed to them as potentially vulnerable.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=301)** And this is where they'll try to attack.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=303)** And you as an administrator, it also minimizes the amount of entry points that you need to manage and secure even more and audit and monitor because you've blocked all these other entry points into your environment that are not really necessary or that are now much more secured.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/defense-in-depth-approach?u=76281980&t=320)** So a defense in depth approach is a great method for reducing the amount of possible entry points into your environment and potential security risks or openness that you have to a security risk in your environment.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2), means that (1)
> **Code Keywords:** case, (2), new, (1), from. (1), public (1)
> **Analogies:** compare this to (1), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Transferring security concepts to the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=0)** - [Instructor] Now, let's see how these concepts actually transfer over to the resources that we manage within our cloud environments.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=8)** So in this course, we'll be looking at various tools, and I'll talk about these tools and the portals that we use to manage security configuration and security settings within Azure and Microsoft 365.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=21)** But I want to talk a little bit about transferring these theoretical concepts that we've just talked about into some real practical concepts from the Azure portal, looking at specifically the resources.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=34)** And the first thing I want to talk about is the fact that there is two level of security when we're looking at our resources in Azure.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=42)** And the first is actually accessing the resource from a management standpoint, so managing the Azure resources.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=50)** So if I'm going to go in my Azure portal and click on All resources, I will actually see all of the resources within my Azure subscription.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=60)** I'm going to organize these resources by resource type, and I'm just going to go down and show you that I have all of my Azure resources here.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=70)** Now, I'm specifically going to go into the Azure storage account type resource, and you see here that I have one resource that I can click on, and I'm going to go into the blade or the Management blade for this resource.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=86)** So I'm going to collapse the previous blade so that my entire screen is taken over by this Azure storage account management blade.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=96)** And the first thing that I see here are the various configurations and settings that have been enabled and configured for this resource, where it's located, it's type of replication settings, performance, the resource group that it's found in, et cetera.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=112)** So all of this information is, of course, very specific to this resource.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=116)** There are specific configuration options here that I can click on that are what I would consider generic options available to most or almost all resource types within Azure.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=128)** And one of them here is Access Control.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=130)** So IAM or Access Control is the specific set of configurations that I'm going to use for assigning management to this resource.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=141)** So we talked about securing resources and providing the highest level of security for resource using our Defense in Depth approach.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=150)** Now, one of those Defense in Depth approaches is to secure the management access to the resource.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=158)** So who can configure the resource, who can delete the resource, who can stop a resource that may have a stop or start state?
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=167)** And those types of access to the resource are management accesses.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=172)** So these are done by assigning roles to a user account or any other type of security principle that is found in my Entra ID.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=183)** So what I can do here, for example, is click on View my access, and I can see the specific roles that have been assigned to my user account to manage these resource.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=195)** Now, these roles may be specific to this resource, or they may be inherited from a higher level resource.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=202)** So for example, this storage account is in a resource group.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=207)** I may have permissions on the resource group, or I may have permissions on the subscription.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=212)** In my case, my user account is actually a owner of this subscription.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=218)** So I actually have owner permissions over all resources within the subscription.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=223)** I can assign other role assignments here to provide other users access to this resource, and I see that there are already several user accounts or security principles that have access to this resource.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=237)** I can see the roles that are available to me within my subscription.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=241)** I can also have deny assignments if I want to explicitly deny a user the ability to perform a specific task or to manage a specific resource type.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=252)** So the IAM blade or the Access Control blade is the blade that I'm going to use to configure the management to this resource.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=262)** However, there are other security settings or settings that I would consider to be security settings for this resource.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=269)** And again, those can be found for many other resources.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=274)** For example, here, if I click under Settings and configuration, you'll see here that there are various security settings that relate not to managing the resource, but to actually accessing the data within the resource.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=289)** So again, this is a storage account, which means it stores files or blobs or any type of data that I'm going to put in that storage account.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=299)** And I can control who can access the resources in that storage account, what they can do when they access, and so on.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=308)** So for example, here, I can enable things like secure transfer.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=313)** So secure transfer, you might know it as HTTPS, or HTTPS over SSL, Secure Socket Layer, so to encrypt the data in transfer.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=323)** There are different things that I can do here to the storage account.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=326)** Not all options are available because this is what's called a general purpose v1 account, and that account is now sort of deprecated within Azure, there's a newer version, which is the v2, that provides a higher level of configurations.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=341)** One of those here is the performance.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=343)** So that's why some of my settings are disabled.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=346)** But you'll notice here that I can enable or disable various access to this resource, again, using SSL or also with anonymous access.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=356)** So you notice here that this is anonymous.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=358)** Now, one of the reasons why someone would enable anonymous access, which you may think is not a very secure thing to do, is because it's a website.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=367)** This specific storage account actually hosts a website, and therefore I need to have some anonymous access to that resource.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=376)** And again, there are a number of options here that I can enable or disable.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=380)** The same thing here, again, in our Defense in Depth approach is that I can create a resource lock.
>
> **[6:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=388)** A resource lock is actually preventing somebody from accidentally deleting or modifying a resource.
>
> **[6:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=394)** And you can create these resource locks here under the setting.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=398)** These types of configurations are common in many different resource in Azure.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=406)** So not only because this is a storage account, but many resources in Azure have these types of configurations.
>
> **[6:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=412)** I'm going to go back to my all resources and show you that. If I go into a database, for example, which is a database resource in Azure, I have some settings that are specific to the database, but I also have various settings that are common across the infrastructure.
>
> **[7:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=431)** For example, locks.
>
> **[7:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=433)** So again, you can create resource locks for many different resources.
>
> **[7:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=437)** Now, this specific resource doesn't have access control within its specific general or generic settings within Azure, because there are different ways to configure management of a SQL database, and you see it here under Data management, there are additional settings, again, specific to this resource.
>
> **[7:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=458)** And under Security, I have several other security settings that are specific to this resource type.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=465)** So some of the options that I will see within my Azure environment for securing resources are generic or they are common across all resources in Azure or most resources in Azure.
>
> **[8:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=480)** And other security-related settings are specific to the resource type.
>
> **[8:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/transferring-security-concepts-to-the-cloud?u=76281980&t=485)** Throughout this course, 'we will look at some key resources and some key tools to manage security for those resources in Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), let (1), type, (1), delete (1), case, (1)
> **Env Vars:** iam (2), https (2), ssl (2), sql (1)
> **Analogies:** for example (6)
> **UI Navigation:** click on (4)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (3)
> **Cross-References:** we talked about (1), go back to (1)
> **Tools:** azure portal (2)

#### Exploring the security portals
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=0)** - [Instructor] It can be quite daunting to look at all the various security options that exists both in Azure, Microsoft 365, and even in the other tools that sit on top of all of these Microsoft Cloud platforms.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=15)** So, one of the things I'm going to do in this video is sort of clarify the tools that are used for managing security, for viewing your security posture, for configuring all of the various settings that will secure your environment.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=30)** Sort of going through each tool and understanding what type of settings or what type of objects or resources would I manage with each one of these tools.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=40)** So what I have open on my screen right now are several of these various security tools, and the first one is the Microsoft Entra Admin Center.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=50)** So, Microsoft Entra is the new name for Microsoft Azure Active Directory, or Azure AD.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=57)** And from within the Entra Admin Center, I can go ahead and access the Security Center for managing the security settings for all of my identities, all of my user accounts and groups essentially.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=70)** So this is where I'm going to configure the security for my users, managing their passwords, managing password policies, managing their authentication, such as the type of authentication methods they have available.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=84)** This is from here that we can enable some basic MFA, or multifactor authentication settings.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=92)** From this tool, I'll also be able to view my risky users and risky sign-ins.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=97)** So, essentially view the type of risky security events that have occurred for my users, or which users are at a potential risk of being affected by various security threats.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=113)** And throughout this course, we will use the Security Center and the Entra Admin Center to configure and manage various security settings.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=122)** So, we'll take a look at this again multiple times throughout the course.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=127)** And now I'm going to be moving on to another tool, which is Microsoft Defender for Cloud.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=132)** You'll hear that term Microsoft Defender multiple times throughout this course, and that's because Microsoft Defender is actually a term that's reused in a lot of products.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=143)** So Microsoft Defender for Cloud is a tool that we will use several times in this course because this is the one that we'll be using to manage our cloud resources in Azure.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=154)** So all of the various resources that we have, our storage accounts, our databases, and virtual machines, and so on that are stored in Azure, we're going to be able to manage them and look at our overall security posture with these resources using this tool.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=172)** We can go here, for example, and look at our inventory and look at all of our resources that are in our Azure subscription, or subscriptions, multiple subscriptions, and even our other clouds that may be connected.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=186)** For example, an AWS or a Google Cloud that would be connected to our infrastructure could also be managed through Defender for Cloud.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=195)** So, Defender for Cloud is this one tool for managing all the various workload and resource security settings within your Azure and even other environments that are connected to your organization.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=211)** We will use this tool quite a bit throughout this course.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=216)** Now, the next tool we'll be looking at is Microsoft Sentinel.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=220)** So, Microsoft Sentinel is a SIEM or SOAR tool for Microsoft.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=226)** So SIEM, it allows you to identify events that have occurred in your infrastructure, and a SOAR tool for automating the remediation of these various events.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=239)** Now, this is a great tool to allow you to quickly detect issues and then quickly react to various incidents that have occurred in your infrastructure.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=250)** Automation is tied into that to allow specific remediation tasks to occur very quickly and automatically when a security event has occurred.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=259)** So, we will look at Microsoft Sentinel as well later on in this course.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=265)** And then I've left this one for last.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=267)** This is just labeled as Microsoft Defender in the portal window, but this is actually Microsoft Defender XDR.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=276)** So Microsoft Defender XDR is a rename of Microsoft 365 Defender.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=283)** Microsoft has a really bad habit of renaming their tools very often and sometimes creating names that may introduce confusion between these various tools.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=294)** So, as I mentioned before, Entra ID is a rename of Azure AD, and before it was called Microsoft Defender XDR, it was called Microsoft 365 Defender, and before it was called Microsoft 365 Defender, it had another name with two or three iterations before that.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=313)** But what Microsoft is trying to do here with this Microsoft Defender XDR is create an umbrella portal, an umbrella resource where you can actually access all the Microsoft Defender resources.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=328)** So think of XDR as sort of the parent portal that allows you to access the other Defenders.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=335)** For example, we can access Microsoft Defender for Endpoints, Microsoft Defender for Office 365, Microsoft Defender for IoT, and also Microsoft Sentinel, that SIEM and SOAR product that I was just talking about before, as well as some functions of Microsoft Defender for Cloud is also going to be available through the Microsoft Defender portal.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=363)** So, Microsoft Defender XDR, this umbrella resource has management functionalities from this window that allow you to configure and manage most of the Defender products.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=376)** And that is likely the vision forward, the path forward for Microsoft to reduce the complexity between all those tools and then to introduce this portal of security.[microsoft.com](https://microsoft.com), which then becomes the one place where you would configure all of your security settings.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=396)** That being said, this is not the way it is today.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=399)** Today, this is not yet complete.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-the-security-portals?u=76281980&t=401)** That vision forward is not fully integrated and implemented, which is why throughout this course, we do need to use multiple products, we do need to use multiple portals, and that is why I need to introduce you to all of these portals so that you understand what type of resources and what type of objects we would manage from each portal.

> [!info]- Semantic Content
>
> **Env Vars:** xdr (6), siem (3), soar (3), mfa (1), aws (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (3), such as (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** aws (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Speakers:** - [instructor] (1)

#### Enabling Microsoft Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=0)** - [Instructor] Now, I recently introduced Microsoft Defender for Cloud, but you may not necessarily find it in your environment if you open up the Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=9)** You need to enable Microsoft Defender for Cloud within your Azure subscription.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=14)** And in order to do that, all you need to do is click on search resources and search for Defender.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=21)** And from this window you'll see all of the Defender products that are available.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=26)** Some of them are Microsoft published, some of them are not.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=30)** They're from third party solutions.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=32)** And if I go to the marketplace, I can actually see many different products that have a defender name within it.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=39)** Again, some of these products are not Microsoft published products.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=43)** However, the one product that I want to have in my environment is Microsoft Defender for Cloud.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=51)** So if I type Microsoft Defender, I see Microsoft Defender for Cloud here.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=55)** If you click on this service, the first time that you do that, you'll be enabling a 30 day trial, a free trial of Defender for Cloud.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=64)** What happens after this 30 day period is over is that you will enter into a free version non trial, which provides a limited number of features and functionalities for Defender for Cloud.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=79)** So Defender for Cloud is a tool that allows you to protect the security operations of your cloud, and even across other clouds, it allows you to also identify preventive actions for mitigating any type of security risks in your environment.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=97)** And there are other platforms or other services of Defender that sit right alongside Defender for Cloud, such as Defender for Containers, for databases, for servers, storage, and more.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=111)** Now, the cost of Microsoft Defender for Cloud is determined by the number of plans that you enable for Defender for Cloud.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=120)** So for example, if I click here under getting started, I will see that my subscription here has multiple resources and it is past the expired trial.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=131)** So my 30 day trial is over, and then I have a number of resources for which I can enable Defender for Cloud.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=139)** And I see here the cost for enabling Defender for Cloud for the resources in my environment.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=144)** So my basic free version of Defender for Cloud provides a number of functionalities, which are very useful to me.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=153)** One of those things is that it provides recommendations.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=156)** So I see a number of recommendations on how I should secure my environment, and I'll be looking at those later on in this course as well, I have my inventory, my entire asset inventory, all the resources that are in my Azure infrastructures, along with their security risks associated to those, and also the security score, which is something we'll be looking at in a later video in this course.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=181)** So enabling Defender for Cloud is an easy task to perform.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=185)** And then you can add plans to your post trial version of Defender for Cloud.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-microsoft-defender-for-cloud?u=76281980&t=193)** Simply you need to upgrade to the pay version of Defender for Cloud, and then you'll be able to enable the various plans or security plans for the resources in your Azure subscription.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Understanding the security scores
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=0)** - [Instructor] Having a good idea of where you stand from a security standpoint is a great place to start when you need to configure your security settings or security environment.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=11)** Well, where you start from a security standpoint is called your security posture.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=16)** So your security posture is a overall environment evaluation of all of the security settings, from your resources, whether they're management security settings, or access security settings or threats that may or have occurred in your environment, will affect your security posture.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=36)** Now, in order for you to quickly and easily evaluate your security posture, Microsoft provides a score, an easily identifying number that allows you to have a quick view into how secure your environment is.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=53)** Now there are multiple secure or security scores in your Azure and Microsoft 365 environment, and I'm going to show you the tools that demonstrate these secure scores.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=66)** So first, within the Microsoft Defender for cloud, I have a secure score here, which is an overall secure score for all of my subscriptions and cloud.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=77)** So if I was connected to an AWS infrastructure, that would be also taken into consideration.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=84)** Now here I have three subscriptions and I can click on one of these subscription to see the specific score for that subscription, which you see here is 52% for that specific resource, or in this case, the resource is the subscription.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=101)** Now, when you click on a specific resource that has been evaluated for a secure score, you will see all the recommendations for increasing that score.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=113)** So the goal point is you would like to get to a specific score of a hundred, right?
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=119)** So that would mean that your environment is as secure as possible and that you have implemented all of the recommendations for increasing security.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=129)** The recommendations come in evaluations of high, medium, or low requirements, and by applying all these recommendations, we will then increase the value of our score.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=142)** Now you see here that I have the various recommendations that are listed here.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=147)** And so for example, if I click on this recommendation, it will tell me that I need or I should be increasing the level of encryption for this host of virtual machines.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=159)** So I can manage all of these various recommendations and applying and configuring these various settings will then increase my overall secure score.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=170)** Note that if you make a change, your secure score is not going to be modified immediately.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=176)** It will take some time for those changes to be reevaluated within the environment.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=182)** And then for a new score to be populated, typically it takes from one to two days, though Microsoft will tell you that it takes 48 hours.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=192)** So this will be my secure score for my Azure resources.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=195)** I also have a secure score for my identity services, so in this case, Microsoft Entra ID.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=205)** I have here as well a secure score for all of my user accounts.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=210)** Now, various settings that I implement in my Entra ID tenant will affect the secure score, such as enabling MFA, multifactor authentication, or implementing password policies that will have very high requirements for passwords, or enabling various other security settings within my tenant.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=233)** All of those things will increase my security score.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=237)** As well, I have a security score here for Defender XDR.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=242)** So in a previous video in this course, I've talked about Microsoft XDR, this overall umbrella service for many Microsoft Defender product.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=252)** But if I scroll here within the homepage of Defender XDR, I see as well a Microsoft Secure score.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=261)** Note that all of these scores are different because they are all evaluating different things.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=267)** Defender for Cloud only evaluates Azure Resources.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=271)** Entra ID only evaluates identity resources.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=276)** And then the Microsoft secure score evaluates all of the various resources in my environment that are under the XDR umbrella.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=285)** And the same way that I can have recommendations and improve my score using these recommendations, I could do it here and I can then see the historical values of this secure score based on the resources I have and how they've been configured.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/understanding-the-security-scores?u=76281980&t=303)** So the secure score is a great place to get started to see your initial security posture, and from there apply the various recommendations to improve the security configurations in your environment.

> [!info]- Semantic Content
>
> **Env Vars:** xdr (4), aws (1), mfa (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** aws (1), make (1)
> **Code Keywords:** case, (2)
> **Analogies:** for example (1), such as (1)
> **Warnings:** note that (2)
> **Cross-References:** previous video (1)


### 2. Security Concepts for the Azure Cloud

#### Managing and securing resources in Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=0)** - [Instructor] Earlier in this course, I started talking about managing your resources in Azure, and this is what we're going to explore in this video.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=9)** All of the resources in Azure live within the top-level container of your Azure environment, which is called an Azure subscription.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=18)** Inside my Azure subscription, I will find all of the various resources that I've created, and I'll be able to manage them based on the permissions that I have.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=27)** So let's explore how we view the permissions that we have, and modify the permissions to the resources within Azure.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=35)** So I'm here in my Azure portal.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=37)** If I want to get to my subscription, I will scroll down to the Subscription blade that will show me all of the subscriptions that I have access to.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=47)** Note that there's more than one subscription here, even though the subscription is the top level within my Azure environment, there is a structure above it strictly for management purposes called the Management Group.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=60)** I'm not using Management Group, but I do have three subscriptions here that I have permissions to.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=66)** So I'm going to click on one of them.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=69)** And within this subscription, you'll note that I have here my Management blade where I have all of the configuration in my subscription.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=77)** But if I want to see the permissions that I have here, I have a little bit of a shortcut, sort of a usability tool here, which is called My Permissions, that displays the permissions that I have over this subscription.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=90)** And it shows me, for example, that I have the Owner role, which is the top-level role within an Azure subscription over this subscription.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=98)** So this is sort of a quick view or a shortcut to permissions, but if you really want to manage them, you would go under the Access Control blade.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=107)** So under the Access Control blade is where I have my access, which we looked at before.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=113)** But if I click on View My Access, I will actually see the specific roles that have been assigned to my user account, and also the fact that these roles here are assigned to this resource specifically.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=129)** So I am an owner of this resource and this resource is the Azure subscription.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=135)** Now I mentioned that this is the highest level yet there is a role here that has been inherited.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=141)** Now this is actually a Entra ID role, which is the User Access Administrator.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=147)** So even though Entra ID is not technically part of the Azure subscription, it sits alongside your Azure subscription to manage your identities.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=157)** But here it is displayed as an Inherited role.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=161)** Now this is all the role assignments to my account.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=165)** You'll note that there is also something called a Classic Administrator.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=169)** The Classic Administrator roles are roles that were created in the previous versions of Azure or the initial versions of Azures many years ago.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=178)** If your subscription is very old, such as mine, it has been in existence for many years, there is an inheritance of older Classic Administrator roles that are still there.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=190)** I cannot manage it.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=191)** It is simply listed here.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=193)** So this is my role assignments over my subscription.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=196)** If I want to assign a different role assignment to my user account or to any user account, I would go under Role Assignments and I would add a role assignment to another user, and then select any type of role that exists, and I can see the list of roles here, and I would then be able to assign that to another user account or to a group.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=217)** As well, if I want to deny the ability to perform a specific task or a specific role within my environment, I can deny something from a user.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=226)** So, for example, if I've provided permissions to a group, and then I specified that one of the members of that group is denied, the Deny role will take precedent over the Allow role so that the user will be prevented from performing specific tasks.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=243)** Now these are the roles over my subscription.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=246)** Now I mentioned that all of the resources in Azure have various permissions.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=252)** And so if I go back to my storage account, for example, and go to my Access Control blade and click on View My Access, I will see the same roles that are listed here, because they are inherited down.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=265)** And I see specifically where they are inherited down from, from my subscription, down all the way to my specific resource group.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=275)** Now, if I wanted to, I could assign a role assignment specifically for this resource.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=281)** So, again, all of the permissions are inherited from the top-level container, so from the subscription down to the resource group, down to the specific resource, in this case, a storage account.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=296)** If I want to give permissions to a specific user or group to a specific or individual resource, such as this storage group, I would assign a role assignment by clicking here.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=310)** This is a granular approach of assigning permissions, and by doing so, I will be scoping the permission to only a resource that I want the user to manage.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=323)** So all of these permissions are managed through Access Control.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/managing-and-securing-resources-in-azure?u=76281980&t=328)** These are management permissions to the resources in Azure.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (2), is an  (1)
> **UI Navigation:** click on (3), scroll down (1), go to (1)
> **Analogies:** for example (3), such as (2)
> **Code Keywords:** let (1), from, (1), case, (1)
> **Warnings:** note that (3)
> **Cross-References:** earlier in (1), go back to (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)

#### Exploring Microsoft Entra ID security features
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=0)** - [Instructor] We started looking at Microsoft Entra ID and the Entra admin center in a previous video in this course.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=8)** But we're going to dig a little bit deeper into the security functionalities of Entra ID.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=14)** And I'm going to start off by letting you know that there are different versions of Entra ID that is available within the Azure ecosystem.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=23)** The first one or the basic one is the free version of Azure AD that you get when you launch a Microsoft 365 tenant, right, when you're creating Office 365-type resources, such as Exchange Online, SharePoint Online and Teams.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=40)** These are all associated with an Entra ID tenant, sort of the organization of all of the users and groups that are associated to the Microsoft 365 resources.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=54)** Similarly, when we create an Azure subscription, we can have an Azure AD tenant or now an Entra ID tenant that is associated with that Azure subscription.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=66)** We can create multiple Entra ID tenants and then organize our groups and users within those various tenants.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=74)** Most organizations will have one Entra ID tenant and all of their users and groups will be within that.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=81)** However, we can upgrade that basic Entra ID tenant to a premium, a Premium P1, or a Premium P2.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=90)** And once you've upgraded to P1 or P2, the primary difference, and there's a number of functionalities that are introduced, but the one that is key for me and for most of my clients is the conditional access policies.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=105)** And P2 is particularly interesting with conditional access policies because it provides risk-based conditional access policies, essentially a toggle-up or a toggle-down of how conditional access policies are applied based on user behavior, and we'll talk a little bit about conditional access policies a little bit later on in this course.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=126)** So within the Entra ID admin center, I'm going to go to Identity because that's where most of the security settings will be found.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=134)** We will look at protection a little bit later on when it relates to MFA, multifactor authentication, and identity governance as well in a separate video in the scores.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=145)** So under Identity, if I click on Overview, I see my tenant here with all of the tenant configurations, including the number of users, groups, applications that have been published to my tenant and the number of the devices that are joined or associated to my tenant, as well the type of license.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=164)** Now I was mentioning that there is the free license and then the Premium P1 and P2.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=169)** So some functionalities I'll point out are not available in my tenant because I no longer have a P1 or a P2 tenant.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=177)** So if I'm going to go on all users, for example, it is where I'm going to find my users.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=183)** Under Search, I'm going to search for my name.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=186)** And I will find here my user account.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=190)** And I'll show you the properties that are interesting here for the user account.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=194)** So first of all, here I have all of the parameters of my user account, when it was created and so on, as well here, I have the devices that are associated with my user account.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=205)** And you see here, there's going to be multiple devices that I've signed in with and then joined to my infrastructure.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=212)** And those device information is also stored in Entra ID.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=217)** And now I click on Assigned roles.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=218)** I see all the roles that have been assigned to my user account.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=221)** So in my Entra ID tenant, I've been assigned the global administrator role, which means I have permissions to all the resources inside of the Entra ID tenant.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=231)** As well here under Sign-in logs, you can actually see the locations and information of my sign-ins within the Azure resources.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=243)** So any actually resources including Office 365 and Azure resources will be displayed here.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=249)** So for example, here I see a sign-in to the Azure portal by success with a specific IP address.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=256)** If I want more information about the sign-in, I can actually click on it and I can say that this sign-in was actually using MFA.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=264)** I see lots of information about the sign-in, including the actual location.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=269)** So I see here that it's correctly identified my location as being somewhere in California.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=276)** So this details of sign-ins can be very useful when we're looking at a specific user.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=282)** But I can also, under this interface here, look at the sign-in logs for all of the users, and I can see the information for all user sign-ins, and all users will be able to tell me not only where they sign in from, but which type of device they signed in to, so what did they authenticate to?
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=303)** Was it a portal?
>
> **[5:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=304)** Was it an application?
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=305)** Was it a service?
>
> **[5:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=306)** Or maybe an API, an application that's connecting on the backend.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=311)** So this is the logging of the user accounts.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=315)** Again, that can be very useful for you.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=317)** As well here, I have password reset.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=320)** So password reset is actually a functionality called Self-Service Password Reset, which is a functionality that you would enable for your tenant, and I have not enabled it for my tenant, which allows your users to reset their password without having to contact the help desk or an administrator.
>
> **[5:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=340)** They will have their own portal to sign into using an MFA validation to ensure that the user is who they say they are and then they will be able to reset their password from that portal.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=354)** This is very valuable for large organizations that have hundreds or thousands of users and they want to reduce their help desk volume and their cost of managing the user population.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=365)** This is a great functionality to use.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=368)** I have not enabled it within my organization because I have a smaller organization.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=372)** I don't need to use this functionality really designed for large organizations.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=378)** Under User settings, I have more security settings here.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=382)** And these security settings are sort of a location where they didn't know where to fit them within the UI, so they put them all in here.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=390)** Some of them are specific to functionalities of management and others are just random in term of access.
>
> **[6:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=397)** For example, here, whether or not a user can create a security group, yes or no.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=402)** I can toggle that back and forth in my organization.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=406)** So in my organization, I am not allowing my users to create security groups.
>
> **[6:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=411)** And I am also not allowing them to register applications.
>
> **[6:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=414)** If I want to change that, I can toggle it to the yes, and then users can register applications within the Entra ID tenant.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=422)** If I scroll down, I have other interesting security settings here.
>
> **[7:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=427)** One of them that is enabled for my organization is restricting the access to the Microsoft Entra admin center, which means that only administrators can access the Entra admin center.
>
> **[7:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=438)** Under user features here below, I have the access to my apps, myapps.[microsoft.com](https://microsoft.com), which is a tool where you'll be able to see those registered applications, for example.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=449)** Those are listed here as well.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=452)** So these are all the security settings in my organization that are related to my Entra ID.
>
> **[7:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=459)** All of them are found here.
>
> **[7:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=462)** I'm going to scroll a little bit lower here and go under Settings.
>
> **[7:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=468)** And you'll notice that there are some preview features here, such as the Preview hub.
>
> **[7:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=473)** If I click on the Preview hub, you will see a set of preview features that may be enabled or disabled for your organization, in this case here for your tenant.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=483)** So these are Microsoft Preview features, and you see here, some of them are published for my organization, some of them are available, and then you can also toggle on and off Preview features.
>
> **[8:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=495)** Now, I discuss this as part of the security configuration because some of these may introduce new security functionality.
>
> **[8:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=503)** For example here, restricting management of administrative unit.
>
> **[8:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=507)** Well, what is an administrative unit?
>
> **[8:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=509)** And do I want to restrict the management of those administrative unit?
>
> **[8:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=513)** Well, administrative units are an interesting concept that are found within Entra ID, and you will find them here.
>
> **[8:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=522)** Administrative units are a way of grouping users that you can then use to manage them in a separate manner.
>
> **[8:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=531)** So if you are comfortable or familiar with the concept of an organizational unit, which is a concept that comes from Active Directory, the on-prem version of Entra ID is Active Directory, and the concept of an organizational unit to manage a subset of my users independently has been available as an organizational unit in Active Directory for quite some time.
>
> **[9:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=557)** Now, we have a similar functionality here in Entra ID, an administrative unit that I can create.
>
> **[9:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=563)** And once I have these administrative units, I can put a subset of my users inside of that administration unit and then manage it separately, manage it independently, apply different settings to those, and therefore those users can have a separate set of configurations and management.
>
> **[9:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=583)** So an interesting concept that was actually introduced just a few years ago, much later, the introduction of Azure AD was administrative unit introduced as a concept, but it's been a fairly popular concept for administrators to segment the management and have a more granular approach of managing the user accounts.
>
> **[10:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=605)** When we are managing Entra ID, we are using roles, roles that are assigned to administrator.
>
> **[10:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=611)** This is where our roles are.
>
> **[10:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=613)** We could also create custom roles in Entra ID.
>
> **[10:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=617)** Note that creating a custom role is a feature only available to P1 or P2.
>
> **[10:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=622)** A custom role would be a role that you would specifically customize for the need of your organization, which means that you would select a number of rights, associated those rights into this custom role and then assign that role to a user account.
>
> **[10:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=639)** So for example, you want them to be able to view a specific setting and then configure another specific setting, and only that specific subset of settings is what you want them to do.
>
> **[10:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=651)** You would do that with a custom role.
>
> **[10:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=653)** You would assign that custom role to the user, and then the user would have only those specific permissions that you've assigned to him or her.
>
> **[11:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-microsoft-entra-id-security-features?u=76281980&t=662)** So these are the security settings that you would manage as part of your Entra ID tenant.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (5), click on (4), go to (1), scroll down (1)
> **Definitions:** is a  (5), means that (2), is an  (1)
> **Analogies:** for example (6), such as (2)
> **Env Vars:** mfa (3), api (1)
> **CLI Commands:** find (3)
> **Code Keywords:** interface (1), from, (1), self (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Cross-References:** previous video (1)

#### Why are passwords such a bad idea?
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=0)** - [Narrator] In principle, the idea of a password is a bad idea, a certain word that if you have just that word, you have access to everything.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=9)** It unlocks the keys and the access to all resources.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=13)** The idea that if a user's password is going to be compromised and accessed by a third party that they can leverage that password, use that password, and then gain complete management and control over all resources is a bad idea.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=32)** The fact that most users take a single password and reuse it in multiple websites and resources and applications that they use around the world makes a password particularly vulnerable to being compromised by being accessed by any single one of the uses of that password.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=54)** Several years ago, organizations tried to move away from passwords, trying to use a more complex way of giving a user access of resources, which is called a pass phrase.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=68)** A pass phrase is still a password.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=70)** It is just a longer password that has more characters, but that became harder to crack or harder to guess or harder to gain usage from because it was just more complicated.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=85)** However, having a very complicated password meant that users would forget it and users would often have to reset their pass phrases to other pass phrases.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=96)** It's not a good solution.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=99)** We will talk about the better solution a little bit later on in this course, which is multi-factor authentication, having more than just a password.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=109)** The password is one factor of authentication.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=111)** It is a single factor of authentication.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=114)** But if we have another mechanism, we have a multiple factors of authentication and we will look at how we implement that in our Entra ID tenant.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=123)** However, we still continue to have passwords.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=127)** They are still part of our authentication solution.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=130)** So, I want to show you some mechanisms that are in place to secure passwords.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=135)** And one of those is a premium feature that I can access by going into my Entra ID tenant and clicking through my options in identity and going under Protection, Authentication methods.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=151)** And in Authentication methods, I will find Password protection.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=155)** And this page will allow me to automatically lock out a user if they have used their password incorrectly for more than X number of attempts and in the case of this environment here, it's set to 10.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=168)** As well, it will be locked out for 60 seconds.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=173)** And then, it will automatically unlock itself.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=177)** And that period of lock out is going to ensure that if there is a mechanism that is using brute force or just trying a number of passwords by using a dictionary or another mechanism to try to gain access to the user password, that mechanism will fail.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=199)** As well here on this page, I can specify custom banned passwords.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=203)** So, essentially creating a list of passwords that should not be included or none of my users should be allowed to use.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=210)** For example, they shouldn't reuse my company name.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=213)** They should not use the word password in a password.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=216)** They should not use 123456.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=220)** So, these types of common passwords that are used by many users who are not enforced to use very complex passwords, we want to ensure that those are excluded.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=232)** And this brings me to the topic of minimum characters.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=235)** What is the minimum number of characters that we need to use for a password and how do we configure that?
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=242)** Well, in the default free Azure AD environment, again, this is now Entra ID.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=248)** I created it as an Azure AD and now it's an Entra ID tenant, we have a default number of eight to 256 characters.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=260)** So, here, I have moved over to my Microsoft 365 admin center and in the Microsoft 365 admin center, I can browse through my list of users, click on the reset password icon and you will see here that if you are going to change the password for a user, it needs to have at least eight characters, up to 256.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=282)** Must have a combination of three of the four upper-case, lower-case, numbers and symbols, special characters.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=290)** So, that will be the password that I can use for any user in my organization.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=296)** So, a combination of these authentication methods along with a complexity requirement for a long number of passwords can help secure the user passwords a little bit beyond the default of what we have.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=312)** But remember, that is not the best solution.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/why-are-passwords-such-a-bad-idea?u=76281980&t=315)** The best solution is to implement a second method of authentication, multi-factor authentication, which we will discuss in another video in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), case, (2), continue (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Enabling multifactor authentication for a user
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=0)** - [Instructor] I've mentioned earlier that there are two different types of Entra ID tenants that you can find yourself with, one that is either free or one that is premium.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=11)** So the premium comes in two flavor, Premium 1 and Premium 2, P1, P2, and we have here the free Entra ID tenant, as you can tell from the license description here, it is the free tenant.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=24)** So in order to enable multifactor authentication, the type of tenant that you are running will actually make a difference in the methodology that you use.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=35)** It would also make a difference in terms of how you can configure multifactor authentication and the options that you have available to you.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=44)** Now, once you enable multifactor authentication for a free tenant, you'll have a certain number of configuration available to you, but you will not have the more advanced configuration available through conditional access policies.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=59)** So let me show you how we actually go and enable multifactor authentication for a tenant.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=66)** And many of you may have it already enabled, because it is enabled through something called Security defaults.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=73)** Security defaults are accessed by going into your Overview page and then clicking on Properties, and then going all the way to the bottom.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=81)** And when you go to the bottom, you'll see an option here called Manage security defaults.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=86)** Security defaults is a grouping of security options, which includes multifactor authentication, and they are applied and affect your tenant, your Entra ID tenant.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=99)** So if I click on Manage security default, I can actually disable security default, which I do not want to, I want to keep my security default settings, which means that I have multifactor authentication that is included.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=113)** So as soon as that is included, now my users are going to be prompted for multifactor authentication.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=121)** And I'll show you what that looks like in a few minutes.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=124)** But first, I want to show you how you would enable multifactor authentication for an organization that had P1 or P2.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=132)** So under Protections, you would have here an option for conditional access policies, and you would be able to create a conditional access policy.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=141)** And what is a conditional access policy?
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=144)** Well, it's a policy that provides access to your environment based on certain conditions being met, such as who the user is, when they are signing in, what application they are using, what application they are connecting to, and what method of authentication they are using.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=165)** So you could create a policy that says, "All users must use multifactor authentication," or "All users in the finance group must use multifactor authentication between 5:00 PM and 6:00 AM when they are connecting from an IP address in this group, and when they are connecting to this specific application."
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=190)** And you can combine these types of conditions in any way you wish.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=195)** So applying a high number of conditions in a policy is called a conditional access policy.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=202)** And again, these are only available if you are in a P1 or P2 environment.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=207)** So now, I'm going to show you the type of authentications that would be available once you have multifactor authentication.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=215)** And if I click on Authentication strength here, I see that I have these various types of authentication, which are all multifactor authentications.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=225)** This is Passwordless MFA, but this means that we're using another type of structure or device to connect, and we're not using a password as one of our methods of authentication.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=237)** Remember, using MFA or multifactor authentication doesn't mean we stop using passwords.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=243)** It means that we need something else on top of that password.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=247)** Well, what is that something else?
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=249)** Well, if I click here on multifactor authentication, which is an approved method of authentication strength for my organization, it shows me the types of authentication that are accepted as being combined for a multifactor authentication.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=264)** For example, Windows Hello, in conjunction with having a password, that would be acceptable.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=273)** Having the Authenticator app and having a password, that would be acceptable as well.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=278)** The one that I use the most often is a password and an SMS message.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=284)** So a message that's being sent to my phone along with my password, those two forms of authentication are the two that I use.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=293)** Now, you may ask, "Well, how does Entra ID know what my phone number is?"
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=299)** Well, as soon as we enable multifactor authentication, we must register for MFA.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=306)** So your user account will have a prompt.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=309)** So when you sign in, you will be prompted as a user to register.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=313)** And when you register, you are going to give your phone number.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=317)** So if you want to actually verify that, you can go into the properties of any user in your tenant, and within the user configuration, you will see a phone number if they've registered.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=329)** In fact, you can go and modify the properties of the user and modify their phone numbers if they need to modify their phone numbers for multifactor authentication.
>
> **[5:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=340)** So what I'm going to do now is sign out of this window here to show you what multifactor authentication looks like.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=348)** So I'm going to sign out completely.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=354)** And once that's done, in order to get rid of all of cached credentials, I'm actually going to completely close out the browser window.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=363)** So here I am, I'm back in the Azure portal.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=367)** I'm now going to sign in with my user account.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=370)** I'm going to put in my password.
>
> **[6:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=375)** And now I am prompted for my second method of authentication.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=380)** Now, my account is configured with multiple methods that are approved for MFA, for multifactor authentication, one of which is having a code go into my Outlook mobile app.
>
> **[6:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=393)** So if I open up my Outlook mobile app and I enter the number that's displayed on the screen here, I'll automatically be signed in to my resource that I'm trying to access from this browser.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=406)** If I don't have access to my Outlook mobile app right now, I have other options such as the verification code, but I also can go to a text message sent to my cell phone, or it can actually call my phone.
>
> **[7:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=423)** I will pick up the phone, and a voice and automated message will give me a code, and then that code will have to be entered here.
>
> **[7:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=430)** So I'm going to click here, and now on my phone, I've received the code.
>
> **[7:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/enabling-multifactor-authentication-for-a-user?u=76281980&t=437)** I'm going to enter the code, which is unique every time, click on Verify, and I have now successfully signed into my resource using multifactor authentication.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (3), is called (1), is an  (1)
> **Env Vars:** mfa (4), sms (1)
> **UI Navigation:** click on (3), go to (2)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** default, (2), let (1)
> **Analogies:** such as (2), for example (1)
> **Ports:** :00 (2)
> **Tools:** azure portal (1)

#### Exploring identity governance
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=0)** - [Instructor] Implementing proper governance of your resources within an Azure environment is key, and where it is the most evident is when it comes to identities, your user accounts.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=13)** What rights do your users have?
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=16)** Over which resources do they have those rights?
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=20)** And for how long?
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=22)** All of those questions need to be answered in order to identify at which level you are actually governing your identity tenant correctly.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=32)** Are you removing user accounts that are no longer used?
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=36)** Are you removing permissions from user accounts that no longer need it?
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=42)** All of those answers can be provided by using the proper governance tools within the Entra admin center.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=50)** So from the Entra admin center, if I click on identity governance and then on dashboard, I'm presented with some options here and some functionalities that are available to manage my user account governance.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=65)** Now, some of these options do require the premium functionality, so I will talk you through some of these configurations as well as how they are implemented.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=76)** One of the key features to use is access reviews.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=81)** So an access review is exactly that: is the ability to review a user's need for permissions.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=90)** So the user actually gets to determine whether or not permissions are still required, or user's manager determines whether a user's permission are still required, as well as to which programs they have access to and whether or not those are still required.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=106)** And then you can determine mitigation.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=108)** So how do you want to handle that?
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=110)** Do you want to remove permissions?
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=111)** Do you want to have somebody else validate them?
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=114)** Under identity government, I will find these access reviews, and then I'll be able to build workflows around those to determine what will happen.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=124)** Another important functionality that is available here is private identity management, which allows you to configure just-in-time access.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=136)** So just-in-time access means that a user needs to have an elevated privilege, but not for a long period of time.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=143)** Maybe they just need to perform an action, and when that action has been completed, we can remove these permissions for these rights from that user.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=154)** Now, if we go back to the thought process of a defense-in-depth approach, we want to limit the number of users that have elevated privileges, well, this is a great way to do that.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=165)** If I activate just-in-time privilege by using just-in-time access, then I can determine that a user needs to have access to an owner-level permission, for example, but they only need to have that access for the next 24 hours or for the next two hours.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=183)** As well, I can determine what happens after that period is over, so I can actually have the user gain access to a specific set of resource with a specific permission, and then after that being automatically taken away.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=199)** Now, as an administrator, I can actually approve these requests where a user will actually request to have access to a resource.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=206)** I can review that request, and then I can provide access to the user; this technology is called Privileged Identity Management or PIM, and through PIM, I can determine just-in-time access for my users and limit the exposure of the number of users that have elevated privileges.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=228)** So these roles, if I want, I can create these roles that can be assigned, and then I can have the user's request for these various roles, and then I can review which ones have been activated or which ones are active at this time and which one have expired.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=245)** And so this gives me a great view over my identities, my users.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=249)** Well, having this control or this view over your users is exactly what good governance is.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=256)** The ability to review the privileges and the rights of my users, whether they've been given temporary access using PIM, or using access review.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=266)** If I have permissions that have already been assigned to my users, how do I determine if they're still necessary?
>
> **[4:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/exploring-identity-governance?u=76281980&t=272)** Well, these are my access reviews and combining these two elements gives you proper identity governing over your Entra ID tenant.

> [!info]- Semantic Content
>
> **Env Vars:** pim (3)
> **Definitions:** means that (1), is a  (1), is called (1)
> **Code Keywords:** require (1), private (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 3. Secure Your Azure Resources

#### Secure resources using Microsoft Defender for Cloud: General settings
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=0)** - [Instructor] Applying security configurations to your environment can sometimes be considered more of an interpretive science than an actual science.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=8)** You need to have the skills to be able to prioritize what you should be configuring first, what is and are your biggest risks in your environment, and which recommendations may impact accessibility to your resources, and therefore you should ignore.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=28)** There is a scenario where security recommendations are provided to you, but you are best not to apply them because they will impede the access to your resources by your users, and therefore you might have to introduce a new solution or maybe move your resources somewhere else.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=45)** Not all recommendations need to be applied, but they all need to be evaluated, and they all need to be interpreted for your specific scenario.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=56)** So, in the next videos in this course, we will be looking at Microsoft Defender for Cloud in depth and how we can utilize this tool to interpret the various recommendations and information that is provided to us.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=70)** The primary goal of Microsoft Defender is to inform the administrator on what are the various vulnerabilities and risks in the environment, and then how can I use this information in order to best secure my environment.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=87)** So, I have Microsoft Defender for Cloud that is open here.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=91)** I've demonstrated some basic information about this tool earlier in this course, but you might remember that we have three subscriptions and 29 resources that are assessed in this environment along with some security alerts that are here as well.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=107)** You might also remember that Microsoft Defender for Cloud initially provides a trial.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=112)** After that 30-day trial, provides basic functionalities with additional plans that can be enabled for Defender for Cloud, and then these additional plans would come at a cost to the environment, to the organization as part of your subscription costs.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=128)** So, in this initial Overview page, I have basic information about my security posture.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=133)** I have information about regulatory compliance, and I will talk about that in a later video in this course.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=139)** These are based on Microsoft standards.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=142)** I have also information about my workloads, the workloads that are being protected, and potential threat alerts for those, as well as my Inventory, so my various resources, and the ones, again, that may be at risk of vulnerabilities.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=158)** So, if I go through the interface here, I'll move on to Recommendations.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=162)** Now, under Recommendations, you will find various recommendations that are provided for all of the resources that are currently being monitored, and you notice that I have here 76 recommendations, and I'll show you in a few minutes how to be able to filter this in a much more meaningful way.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=180)** So, these are sometimes overwhelming in terms of the number of recommendations that are being provided, and they're sort of hard to identify in terms of prioritization.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=191)** So, looking through these is going to be important, but also looking at them in a more meaningful manner is going to be more efficient in terms of prioritizing which ones you should affect.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=203)** But just to give you an example, if I just click on one of these recommendations, I see the details of the recommendation, so information about what is going on, and then recommendations as to what I should do and specifically and clearly how I should best secure my environment to deal with this specific issue.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=223)** As well, I can also exclude this recommendation so that it no longer appears in my list of Recommendations to keep my screen a little bit cleaner and easier to manage.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=235)** Next, I have here the Attack path analysis.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=238)** Now, this is one of the functionalities that is available through one of the plans, but this is exactly a feature that allows you to prioritize your various security issues by listing them in priority of risks, so the highest risks or the ones that are at a Critical level are listed first, and then Microsoft provides pointed recommendations as to how to solve these high-risk alerts.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=266)** If I go under my Security alerts, you'll notice here that I have 16 alerts, and these alerts affect two resources, so they are connected to two specific resources, or they relate to issues with two specific resources.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=282)** Now, these are only two resources because I don't have all the plans enabled, as you see here, if I enabled more plans, I would be able to see more alerts for other resources.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=293)** Now, all of these resources have low-severity alerts here.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=299)** Then if I go under my Inventory, I will see the resources, the 29 resources that I saw earlier in the screen that are part of my environment here, and you'll see that there are recommendations for these resources.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=312)** Note that there are two different types of pieces of information that I have for my resources.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=318)** I have recommendations and I have alerts.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=320)** So, recommendations is really about how to best configure and deploy your environment, and alerts are things that you've already done and how you should modify existing configurations or how you should modify the existing resources because you've missed something and you are at a vulnerable state, or there is an exposed vulnerability.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=341)** A tool I like to use to manage all of these recommendations is the Cloud Security Explorer.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=347)** So, the Cloud Security Explorer allows me to generate a query that allows me to sift through all of these large number of recommendations in an easier way.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=358)** In order to do this, it's a very easy interface to create the resource.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=362)** So, I'm going to look for all of the storage accounts or Azure storage accounts in my environment, and I'm going to add a new condition.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=373)** I'm going to say that have a recommendation, and I'm going to want to organize those recommendations by severity.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=381)** So, I'm going to say I want to see the ones that have a High severity.
>
> **[6:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=386)** So, I would like to see all the Azure storage accounts that have recommendations that have a status or a level of High in terms of its severity.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=395)** So, if I do a search here and I wait for the results to come up, I have only one.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=400)** So, I've been able to filter down the 76 recommendations into one recommendation.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=407)** And so this is one that actually says that I should allow Secure transfer to storage account, and so that's HTTPS, and I did mention a previous video in this course that I cannot, because this is connected to a website, and actually the website that uses this uses a non-secure connection.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=424)** There is no secure data in there, it's only read access, so I feel very confident that there's no issue here, but this specific option is a recommendation to enable that secure access, which would normally be a good recommendation for all environments.
>
> **[7:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-general-settings?u=76281980&t=442)** So, again, using the Cloud Security Explorer, I can reduce the noise, reduce the number of events or the number of recommendations that are on my screen, and just see the ones that might be the priorities that I should address.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), else. (1), protected (1), this, (1)
> **Cross-References:** earlier in (2), in the next (1), previous video (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** you need to have (1), configure (1)
> **CLI Commands:** find (1)
> **Env Vars:** https (1)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)

#### Secure resources using Microsoft Defender for Cloud: Cloud security settings
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=0)** - [Instructor] Let's dive a little bit deeper into the actual resources that are being protected and how we can ensure that more resources are protected and provided for recommendations in order to improve their security posture.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=16)** So we've looked at the security posture blade before and all of the information that is listed here.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=22)** So let's move over to the next blade, which is Regulatory compliance.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=27)** Now, Regulatory compliance is basically the ability to view a set of recommendations in order to meet certain industry standards for security configurations.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=41)** There is an included set of recommendations which defines the specific standard for security configuration that Microsoft has determined, which is called the Microsoft cloud security benchmark, or the MCSB.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=56)** So the MCSB is built into Microsoft Defender for Cloud and provides a set of recommendations for how you should build, deploy, configure, really from a security standpoint, do everything within your Microsoft Cloud environment.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=72)** So if I go a little bit lower here, you'll see that you'll be provided with a high number of recommendations and details on how you should manage, secure your various resources that are in your Microsoft Cloud.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=87)** The default set of standard is the Microsoft cloud security benchmark, but we could add other standards, and we'll look at that later on in this course, and how adding additional standards will actually add additional recommendations on how you should secure your environment.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=106)** Next, I'll go into Workload protections, and Workload protections actually specifies the workloads or the types of workloads that we are securing or we are identifying recommendations for as part of our Microsoft Defender for Cloud configuration.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=124)** So you'll see here, for example, that my Azure SQL Database servers are included as part of my coverage, so as my two servers here, but not these five storage.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=136)** And in order for them to be included, I just need to upgrade the plan for them to be included, and I'll show you how to do that a little bit from a better interface in a few minutes.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=148)** Now, these are all my security alerts and it is just a different view of looking at those security alerts.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=153)** But when I click at some of these assessment alerts, I'll see that there is a more detailed set of configurations that are available for me in terms of how I'm going to manage this alert and how I'm going to remediate the alert.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=171)** If I go into Data security, this is where my data content is actually being assessed as part of my protection.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=180)** So you'll see here that I have all of the data resources that are listed here, so storage accounts, databases, and also hosted databases would be listed here.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=190)** And then I have all of the coverage for those, so whether or not they are covered by my plans.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=196)** So you'll see that some of them are covered, some of them are partially covered, and some are not covered, which means that we are not getting recommendations for them, they're not covered as part of the resources in our plan.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=207)** Now, the recommendations will also include the data that is contained in these storage solution, and we can also manage all of that using sensitivity labels.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=219)** Now, sensitivity labels are part of Microsoft Purview, which relates to information protection, which is somewhat outside of the scope of this course.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=229)** But if I click on Manage data sensitivity settings, I will be brought into the Microsoft Purview portal, which will allow me to then manage these sensitivity labels and have a deeper control over the data that is stored inside of these storage solutions.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=246)** So at Microsoft Defender for Cloud level, I am managing the resource, and at a certain level, allowing myself to connect through to Purview, to manage the content in the resource at a deeper level.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=261)** Through the options here, I can go down to Firewall Manager, which actually allows me to then view recommendations that are specific for the various firewalls and virtual networks that are deployed in my infrastructure.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=273)** So all of those would be listed here.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=275)** Of course, I need to have a plan that's also going to protect them.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=278)** And then I will have recommendations on configurations that are assigned to my network resources that are externally accessible from the internet, such as the Azure Firewalls, such as application Gateways, Azure Front Door service, and so on.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=297)** And moving down to my last option in Cloud Security, which is DevOps security, which allows me to, once again get recommendations on how to best secure my DevOps environment.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=308)** In order to do that, I would have to connect to a DevOps organization, and then I would be able to assess that DevOps organization for security recommendations.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-cloud-security-settings?u=76281980&t=318)** Again, that would affect my security posture score, and I would be able to then make modifications to the DevOps organization to best secure it, and it would be evaluated if I have the appropriate plan from Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), protected (2), interface (1)
> **Definitions:** is an  (1), is called (1), is a  (1), means that (1)
> **Env Vars:** mcsb (2), sql (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Secure resources using Microsoft Defender for Cloud: Management settings
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=0)** - [Instructor] Now that we've looked at how to browse through all the various recommendations and prioritize through the recommendations and the alerts that we have exposed through Defender for Cloud, let's see how we manage, how those are going to be actually selected, and which alerts even exist and which recommendations even exist.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=22)** So we're going to do that by toggling down to the environment settings under management of Microsoft Defender for Cloud.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=30)** And under my environment settings here, I see my resources that are currently connected to Defender for Cloud.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=38)** I have three resources, these three subscriptions.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=41)** So this Azure environment is connected.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=44)** However, I can connect other environments.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=46)** Remember that you can use Defender for Cloud to also monitor third party solutions like Amazon Web Services, AWS, Google platform, et cetera.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=58)** So here I have my Azure environments, and if I expand my Azure environments here, I have my three subscriptions.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=66)** And you'll see here that there's a certain number of plans available for each subscription.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=71)** So it tells me here that there's 12 plans available for my Azure subscriptions, and I've subscribed to three.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=78)** So let's see how I would actually be able to modify the plans that I have available.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=84)** So here I have my Defender plans.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=87)** When I clicked on the ellipses, I entered my Defender plans window, which shows me all the plans that are available for my environment.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=96)** So first of all, let's see where I am.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=97)** I'm using the free plan, the free CSPM plan.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=101)** There is a paid CSPM plan, which has a cost determined here.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=106)** I can easily turn it on by clicking on.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=108)** Now as soon as I do that, I'll have additional costs in my environments on a monthly basis.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=115)** If you want to see all of the plans that are available and how to turn them on and off, we would do it like so.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=122)** So these are the various plans that are available in my Azure environment for Defender for Cloud.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=130)** If I go back up here, there is an option called enable all plans.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=134)** If I click on this, it will enable all plans that match resources in my environment.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=141)** So if basically I don't have virtual machines, well, I will not be charged for the plan that covers virtual machine.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=149)** If I click here under security policies, you will notice that there are here the various standards that I could abide by in terms of my compliance setting.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=162)** So you remember we were in the compliance window of Defender for Cloud, and we saw the Microsoft Cloud security benchmark, the MCSB, the sets of standard that Microsoft has defined to have compliance within the environment.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=178)** And the MCSB is included by default, but there are other standards that we can abide by.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=185)** And if I am, for example, located in Spain and I want to abide by the Spanish standards for cloud security, I would enable that.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=195)** And at that point, I would get a number of recommendations in my environment that would match this specific set of compliance standard.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=203)** And look at that, it includes 864 recommendations.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=207)** It's likely my environment would be flooded with additional recommendations, but these various standards here are the ones that are available based on different organizational standards, and I can add them to my environment so that they can be evaluated with Defender for Cloud.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=225)** If you want to create your own standard, you can as well by clicking on the create button.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=230)** If you want to go even more granular than that, you can take a look at all the built-in recommendations that exist within Azure.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=237)** And these are all the recommendations that we have and that are exposed through the other windows that are visible in the cloud security and the general security options of Microsoft Defender for Cloud.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=249)** So I'm just going to go back here into Security Solution, and you'll see here that this is also a way for me to add an additional security solution for monitoring, where I would be able to have additional security solution monitor my environment, and then have them connect it together.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=269)** So this is just an interface that allows me to connect these security solutions.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=273)** So this is Microsoft Defender for Cloud.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/secure-resources-by-using-microsoft-defender-for-cloud-management-settings?u=76281980&t=276)** These three sets of configuration tools allow you to review all of your security details, look through the various recommendations for Microsoft, prioritize the alerts, and act upon these various recommendations to provide the highest possible level of security for your environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), default, (1), interface (1)
> **Env Vars:** cspm (2), mcsb (2), aws (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Use Microsoft Sentinel to secure your infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=0)** - [Instructor] Another security product from Microsoft that we started looking at earlier in this course is Microsoft Sentinel, the cloud native security information and event management platform, or a SIEM.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=14)** Now, Microsoft Sentinel is a product that we need to first install or enable within our Azure subscription, and once we do, it will be visible right here under our services.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=26)** When I click on Sentinel, the first thing that I need to do is assign it a log analytics workspace.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=33)** Now, I've already done that 'cause it takes a little bit of time and there's really no skill associated to that except clicking on Create and creating a log analytics workspace, or using one that's already there.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=46)** The log analytics workspace essentially will function as a repository for the information that is being used by Microsoft Sentinel.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=55)** And Microsoft Sentinel is essentially a tool that will analyze and review all the information it has, and based on that, give you great visibility into what's happening from a security standpoint into your environment.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=69)** It's a little bit different than Defender for Cloud, which actually looks at specific resources, gives you recommendations.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=77)** This here is an after the fact.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=79)** So look at Defender for Cloud as something that you use before to analyze your environment, analyze your threats, and then make configuration changes.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=89)** And then Microsoft Sentinel, that allows you to manage your operations after you've deployed and allows you to look at your environment, look at what's going on, look at the events or the incidents that have occurred, and then mitigate based on those situations.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=105)** So, once I have Microsoft Sentinel, I will have lots of information that will be populated inside of Microsoft Sentinel using different ways, and one of those is Azure Monitor.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=116)** So if I click on Logs, this is where I will find all my Azure Monitor logs.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=120)** Now, you need to also enable Azure Monitor for that.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=123)** I have not enabled Azure Monitor, but if you enable Azure Monitor, all of that information will be stored in here, and it will be analyzed with digital intelligence, or today we call it artificial intelligence, but it's digital intelligence that's evaluating all of this and allowing you to view the information in a meaningful way.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=144)** I don't have any incidents in my environment, so I'm not seeing anything here.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=149)** But I do want to show you another way to populate information in Sentinel, which is by using the content hub and installing additional solutions that will also allow you to gather or connect with other services to then gather data about those services.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=167)** For example, Azure activity.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=170)** So, this is a solution that will allow you to connect to all of your administrative tasks and gather the information associated to those and store them in Microsoft Sentinel so that Microsoft Sentinel can analyze it and identify any threats because of that.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=187)** Now, if I do that, if I install it, it will install it here.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=190)** Now, this is a free tool.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=192)** There's no cost associated to that.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=194)** Some of these other solutions that you can deploy have costs associated to them, but this one is free.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=199)** After I install it, I'll just have to connect it to my Azure information using a data connector and then set up a policy that will connect to that as well.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=210)** So, again, this is sort of a connection tool to go and draw information for Sentinel so that Sentinel has that information to evaluate.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=220)** Another interesting tool that I want to show you in here is this preview tool, the MITRE ATT&CK.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=226)** Now, this also allows you to view some vulnerabilities in your environment.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=232)** This here is an interesting one because the way that it gathers these vulnerabilities and that it exposes them is using this graphic tool interface, which allows you with a color scheme to identify where or which areas have the highest number of vulnerabilities.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=250)** So, for example, here, if I click on exploit to public-facing applications, I see here that there are three sentinel detections of potential adversaries, and I like that term, essentially bad actors that are trying to potentially or pre-trying to scan my infrastructure to identify if there is a weakness.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=272)** So, that doesn't mean that somebody is trying to get into my infrastructure, but that someone is pre-scanning to see whether or not there is a vulnerability.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=282)** So, there are a number of these that are really interesting.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=286)** You see there's a brute force detection as well, and then you can see when those happen, whether the last 24 hours, or at one point within the last 30 days something like that actually happened.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=297)** So these are very interesting graphical representations of potential vulnerabilities in our environment.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-sentinel-to-secure-your-infrastructure?u=76281980&t=304)** So, again, Microsoft Sentinel is a great tool that we can utilize within our Azure subscription to ensure or minimize the risk of security attacks into our environment.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is an  (2)
> **Prerequisites:** install (4), set up (1)
> **Code Keywords:** function (1), interface (1), public (1)
> **Env Vars:** siem (1), mitre (1), att (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Cross-References:** earlier in (1)

#### Use Microsoft XDR to secure your infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=0)** - [Instructor] After Microsoft Defender for Cloud and Microsoft Sentinel, here comes Microsoft Defender XDR, Microsoft Defender XDR, previously Microsoft 365 Defender is a centralized interface that allows you to integrate and to have a single view access into most of your security configurations, your security posture, your recommendations for security improvements, your incidents, and alerts of security events, anything that you need to do pre-deployment or pre-security configuration as long as post security events, post-deployment security events can be managed through this interface
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=48)** through the Microsoft Defender interface, which is simply accessible through security.[microsoft.com](https://microsoft.com).
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=55)** Security.[microsoft.com](https://microsoft.com) used to bring you to the security and compliance portal of Microsoft.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=61)** It now brings you straight into Microsoft Defender XDR.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=66)** So let's take a look at some of the management options here.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=70)** And warning, this is a huge tool or huge interface because it not only integrates Defender for Cloud Sentinel, but it also integrates other Microsoft Defender products such as Defender for Endpoint, Defender for iot, as well as Microsoft Defender for Office 365.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=91)** So some of the Office 365 functionality for security are available here as well.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=96)** Now, some of the data that you'll see here, it is repeated data from other products.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=102)** So for example, here, if I go under attack paths, I see that I have attack path that can be defined for other Defender products as well, such as the attack paths that we also saw in Microsoft Sentinel.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=116)** If I go into define critical assets, I will go into the settings of Microsoft Defender XDR, which I will show you in a few minutes.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=125)** Of course, I have the all familiar secure score here as well, and this is the same score that we saw earlier in this course, as well as the associated recommended actions in terms of improving the secure score.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=139)** If I go down below into investigation and responses, this is where I will find the information that I also saw within Microsoft Defender for Cloud related to the various scanning that occurred in my environment.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=155)** So if I click here, for example, on these vulnerability scanner detected alert, I will go into the details of what is going on here and I will have recommendations on resolving this issue.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=169)** I have information such as the source ip, which is causing an issue, and you'll notice here that the URL scanning that has occurred.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=177)** So essentially someone scanned to look for vulnerabilities and they are trying to access WordPress pages.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=185)** So these are known vulnerabilities for WordPress.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=188)** Actually, there's a different interface that I can use here as well.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=192)** If I click on incidents, I have a nice graphical map of this specific event, and I can see this IP address.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=201)** Again, the same IP address I scanned my environment, and if I click on this IP address, I can go to the IP details page, which will provide more information about this IP address.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=213)** This IP address is actually within the Microsoft Corporation ISP, which means it's likely somewhere within the Microsoft Cloud solutions, either a hosted virtual machine in Azure or another service running within the Microsoft ecosystem.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=229)** I also see that it's located in the city of Dublin, in the country of Ireland, which is where Microsoft has a large number of data servers that host Azure Services.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=240)** So this is information that you've seen before because you've seen it already by looking at one of the other portals that we looked at earlier in this course.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=250)** Again, if I go down this list here, I have threat intelligence that gives me threat analytics about my environment.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=257)** Again, digital intelligence providing some recommendations.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=261)** Now based on the various plans that I have and the various defender products that are enabled, some of this information will be populated.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=270)** If I go under assets, I see here all the devices that have been added into my infrastructure for scanning.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=277)** So in order for these devices to be visible, I need to have some my networks that need to be added so that the environment is scanned similarly to endpoints for Microsoft Defender for Endpoint, I have also some of the management interface for Microsoft Sentinel, which again brings me to similar pages that you've seen in the Microsoft Sentinel interface that we looked at earlier in this course.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=303)** This is the log analytics workspace that I have added in my Microsoft Sentinel, and I can go ahead and start to explore that as well.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=315)** If I go to the last option here it is email and collaboration, and this is where you'll find some of the tools for enhancing security and mitigating security events for Microsoft Defender for Office 365, along with some of the traditional old tools that we use to manage content in Office 365.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=336)** So for example, I clicked on the message Trace, which allows me to create a trace of a message throughout the path of the message.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=347)** So email messages are distributed through SMTP.
>
> **[5:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=351)** So these are a simple mail transfer protocol, is the protocol that is used for transferring mail from one SMTP host to another.
>
> **[6:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=360)** So one email server to another Microsoft Office 365 has a number of SMTP hosts, and I can start a trace that says all the mail messages sent from a specific sender.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=372)** So that could be me, for example, from my email address sent to another email address, or I can save to any email address within X number of days.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=381)** I want to see their delivery status and I can filter that down if I have a specific message ID or if I want to scan from a specific IP address.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=391)** Now, keep in mind that this allows me to see information about a message path by looking through the message envelope.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=398)** I will not actually be looking at the message content.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=401)** When you do a message trace, you don't view the content of an email message.
>
> **[6:45](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=405)** You only get to see the path.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=407)** So this is a great way of allowing you to troubleshoot connections or email connections, but also from a security standpoint, it allows you to go through the various path that a message can take and then try to identify if there was a security event on that message, if the message was intercepted and then modified before it was delivered, or if messages are coming in from a different spam host, if there is spoofing going on, all of these things can be done through a message trace.
>
> **[7:21](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=441)** So now I've gone back into the Microsoft 365 admin center to show you that to access the Defender XDR, you can also access it here by clicking on the security link within the Microsoft 365 admin center, which is admin.[microsoft.com](https://microsoft.com).
>
> **[7:38](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=458)** Now going back into Microsoft Defender XDR, right at the bottom here I've got system and Under system is where I will find all of my settings specifically for Microsoft Defender XDR.
>
> **[7:51](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=471)** So these are your defender XDR settings here.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=474)** You also have settings for your portal and some of the other options, including the device discovery that I was talking about earlier.
>
> **[8:02](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=482)** Now, if I click on Microsoft Defender XDR, you'll see that there's a number of configuration options here, but the one thing I want to show you right at the top is the data retention information.
>
> **[8:14](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=494)** Now, this is not something that's configurable, this is just information for you, and data retention is really about data residency, and it's telling me here that all the data that I have here in Defender XDR will be hosted or stored in the United States.
>
> **[8:31](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=511)** So that is where the data resides.
>
> **[8:33](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=513)** Data residency can be very important for many organizations as they manage compliance and want to ensure that their data is stored in a specific location.
>
> **[8:43](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=523)** For Microsoft Defender XDR, there is no way to modify your data residency at this point.
>
> **[8:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/use-microsoft-xdr-to-secure-your-infrastructure?u=76281980&t=530)** So this is Microsoft Defender XDR, the tool that will allow you to access all of the events remediation recommendations for all of your tools from a security standpoint that are used to manage your Microsoft Cloud information, both in Azure and in Microsoft 365.

> [!info]- Semantic Content
>
> **Env Vars:** xdr (12), smtp (3), url (1), isp (1)
> **Code Keywords:** interface (7), let (1)
> **Analogies:** for example (4), such as (3)
> **UI Navigation:** click on (3), go to (2)
> **CLI Commands:** find (3)
> **URLs:** [microsoft.com](https://microsoft.com) (3)
> **Cross-References:** earlier in (3)
> **Definitions:** is a  (3)


### Conclusion

#### Deepen your understanding of Azure security
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=0)** - [Instructor] Congratulations on finishing this security course with me.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=4)** We've introduced a lot of the concepts of security and how to properly apply security diligence into your Azure deployment or your Microsoft 365 workloads.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=17)** If you're ready to enhance your learning to the next step, I suggest that you go to the Microsoft website and you go to learn.[microsoft.com](https://microsoft.com) and learn more about all of these security tools and features that we've introduced in this course.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=32)** Specifically, right from the learn.[microsoft.com](https://microsoft.com), do a search on security, and you'll find a wealth of information on many of the features that I've discussed in this video.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=44)** For example, here, the Microsoft cloud security benchmark is a broad topic, there's a lot of information you can dive into.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-security-concepts-24975655/deepen-your-understanding-of-azure-security?u=76281980&t=50)** And that's just one of them, you'll find information about all of these products and tools on learn.[microsoft.com](https://microsoft.com), good luck.

> [!info]- Semantic Content
>
> **URLs:** [microsoft.com](https://microsoft.com) (3)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Manage Virtual Machines in Azure]] | **3 of 8** | [[Planning for Microsoft Entra ID]] →

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]

## Related Courses

_Courses sharing skills:_

- [[Microsoft Azure- Identity and Access Management]] — Identity and Access Management (IAM), Microsoft Azure
- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Securing Containers and Kubernetes Ecosystem]] — Cybersecurity

---

[↑ Back to top](#)