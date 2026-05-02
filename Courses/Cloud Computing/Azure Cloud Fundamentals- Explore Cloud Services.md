---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-cloud-fundamentals-explore-cloud-services
url: "https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services"
duration_minutes: 156
duration: 2h 36m
level: Beginner
updated: 12/18/2023
learners: 12837
skills:
  - Cloud Services
  - Microsoft Azure
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGEEvcmAKCc0g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702586113429?e=2147483647&amp;v=beta&amp;t=89b3cTtetpcr5sF32q_sUSQn2oxiL0hawiqyVIK8sAQ"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Azure Administration for Beginners- Management Tools, Services, and Security]]'
prev_courses:
  - '[[Azure Understanding The Big Picture]]'
next_courses:
  - '[[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]]'
path_nav: '[{"path":"Azure Administration for Beginners- Management Tools, Services, and Security","position":2,"total":5,"prev":"Azure Understanding The Big Picture","next":"Azure Management Basics- Portal, PowerShell, Bicep, and CLI"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/cloud-services
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Cloud%20Fundamentals-%20Explore%20Cloud%20Services.md)

![Azure Cloud Fundamentals: Explore Cloud Services](https://media.licdn.com/dms/image/v2/D560DAQGEEvcmAKCc0g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702586113429?e=2147483647&amp;v=beta&amp;t=89b3cTtetpcr5sF32q_sUSQn2oxiL0hawiqyVIK8sAQ)

# Azure Cloud Fundamentals: Explore Cloud Services

> If you’re looking to boost your skills in Microsoft Azure, you need to get up to speed with navigating the cloud. This course is designed to introduce you to some of the most important concepts and considerations about using core services related to cloud security, access control, cost management, databases, management tools, and more.Join instructor Stuti Kaushal as she covers the basic skills yo

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services) | 2h 36m | Beginner | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction](#introduction)
  - [What is cloud computing?](#what-is-cloud-computing)
  - [What is Azure?](#what-is-azure)
- [**1. Cloud Concepts**](#1-cloud-concepts) (4 videos)
  - [Cloud benefits and considerations](#cloud-benefits-and-considerations)
  - [Discuss different types of cloud models](#discuss-different-types-of-cloud-models)
  - [Types of cloud services](#types-of-cloud-services)
  - [Shared responsibility model](#shared-responsibility-model)
- [**2. Core Azure Services**](#2-core-azure-services) (6 videos)
  - [Azure architectural components](#azure-architectural-components)
  - [Walk-through of Azure portal and core Azure workloads](#walk-through-of-azure-portal-and-core-azure-workloads)
  - [Azure compute services](#azure-compute-services)
  - [Azure network services](#azure-network-services)
  - [Azure storage services](#azure-storage-services)
  - [Azure database services](#azure-database-services)
- [**3. Identity, Governance, Privacy, and Compliance**](#3-identity-governance-privacy-and-compliance) (9 videos)
  - [Azure identity services](#azure-identity-services)
  - [Microsoft Entra ID](#microsoft-entra-id)
  - [Conditional Access policy](#conditional-access-policy)
  - [Azure governance methodologies](#azure-governance-methodologies)
  - [RBAC](#rbac)
  - [Azure Blueprints](#azure-blueprints)
  - [Azure Policy](#azure-policy)
  - [Azure resource locks](#azure-resource-locks)
  - [Cloud Adoption Framework for Azure](#cloud-adoption-framework-for-azure)
- [**4. Cloud and Network Security**](#4-cloud-and-network-security) (7 videos)
  - [Microsoft Defender for Cloud](#microsoft-defender-for-cloud)
  - [Microsoft Sentinel](#microsoft-sentinel)
  - [Azure Key Vault](#azure-key-vault)
  - [Azure Dedicated Host](#azure-dedicated-host)
  - [Azure VNet and NSG](#azure-vnet-and-nsg)
  - [Azure Firewall](#azure-firewall)
  - [Azure DDoS Protection](#azure-ddos-protection)
- [**5. Core Solutions and Management Tools**](#5-core-solutions-and-management-tools) (6 videos)
  - [Azure IoT](#azure-iot)
  - [Big data and analytics](#big-data-and-analytics)
  - [Artificial intelligence and machine learning](#artificial-intelligence-and-machine-learning)
  - [Serverless computing](#serverless-computing)
  - [Azure Advisor](#azure-advisor)
  - [Azure Monitor](#azure-monitor)
- [**6. Planning and Cost Management**](#6-planning-and-cost-management) (4 videos)
  - [Azure pricing calculator](#azure-pricing-calculator)
  - [Total Cost of Ownership Calculator](#total-cost-of-ownership-calculator)
  - [Factors affecting cost](#factors-affecting-cost)
  - [Azure SLAs](#azure-slas)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=0)** - [Stuti] With the majority of organizations moving into the world of digital transformation, the demand for cloud engineers is increasing.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=9)** Internet is a sea of knowledge, but a significant amount of research is necessary to begin learning about Azure fundamentals.
>
> **[0:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=19)** Well, your search ends right here.
>
> **[0:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=21)** This course provides foundational level knowledge on cloud concepts and core Azure services, including Azure Monitor, Microsoft Defender for Cloud, and cost management to name some.
>
> **[0:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=35)** Join me, Stuti Kaushal Malviya, on my LinkedIn Learning course, Azure Cloud Fundamentals: Explore Cloud Services, where we will explore the foundational concepts of all the Azure services in one place.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=50)** Let's take your Azure knowledge and make it fit for the industry demand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), cloud (5), [[Digital Transformation]] (1), [[Search]] (1), [[Microsoft Defender]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [stuti] (1)

#### What is cloud computing?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=0)** - [Instructor] "Introduction to Cloud Computing".
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=3)** Cloud computing is one of the buzzwords being used extensively these days, but many people still find it difficult to answer the question, "What cloud computing exactly is?"
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=16)** According to Wikipedia, cloud computing is an on demand delivery of compute services such as servers, storage, network, database, software, analytics, and intelligence over the internet that offer flexible resources, faster innovation, and economies of scale.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=40)** In simpler terms, you can rent out someone else's infrastructure to host your resources rather than provisioning your own data center.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=50)** This course is aimed to jumpstart your career with one such cloud provider that is Microsoft Azure.
>
> **[0:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=57)** This course provides foundational level knowledge on cloud concepts, core Azure services, security, privacy, compliance, and trust, and Azure pricing and support.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=71)** This course is best suited for audience keen to learn more about cloud computing.
>
> **[1:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=78)** The content of this course aligns to AZ-900 exam objectives.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=84)** Along the course, we will look into many examples where organizations from different industries are making use of Azure globally for provisioning their infrastructure, such as virtual machines, virtual machine skillset sets, building their applications, hosting databases, configuring networking services, and ensuring that every resource is safe and secure in the cloud.
>
> **[1:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=111)** There are no prerequisites for the course, but students with an IT background will find the concepts easier to understand.
>
> **[2:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=120)** Now, the question arises that why are organizations moving towards cloud?
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=126)** Cloud computing is a consumption-based model, which means the end users only pay for those services which they're using.
>
> **[2:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=136)** There are several benefits of using cloud computing over the traditional data center approach.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=142)** Firstly, cloud computing helps organization to provision their infrastructure within minutes, which would have traditionally taken weeks or months for procurement.
>
> **[2:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=153)** Secondly, rather than investing all the cost upfront, popularly known as capital expenditure model, cloud gives you the flexibility to pay only for those resources that you use, which is also known as operational expenditure.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=171)** Rapid elasticity, global scale, reliability, speed, and security are some of the other advantages you get while using cloud to provision your resources.
>
> **[3:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=185)** Join me in this course to learn more about Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (14), [[Microsoft Azure|Azure]] (4), data (2), [[Security]] (2), database (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **CLI Commands:** find (2), az (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### What is Azure?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=0)** - [Instructor] Choosing the right cloud vendor is a very important decision for anyone planning to take their business into the cloud.
>
> **[0:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=8)** Numerous enterprises have witnessed accelerated business growth by choosing Azure as their cloud platform.
>
> **[0:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=17)** Let us look a brief into what Azure exactly is.
>
> **[0:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=21)** The Azure Cloud platform has more than 200 products and cloud services that are designed to help you bring new solutions to life, solve today's challenges, and create the future.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=36)** Azure gives you flexibility to build, run, and manage applications across multiple clouds, on premises, and at the edge.
>
> **[0:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=47)** In short, you can simply integrate and manage your environments with Azure services that are designed for running in a hybrid environment.
>
> **[0:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=59)** Microsoft offers industry-leading comprehensive compliance coverage, which helps in proactively safeguarding your data and streamlining compliance with the most comprehensive compliance coverage of any cloud service provider.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=77)** 95% of Fortune 500 companies trust their business on Azure because of Microsoft's strong standing legacy.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=86)** Furthermore, Azure brings together everything you need to build your solution from scratch.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=94)** From DevOps to business analytics and the Internet of Things, there are many other services running with cost-effective solutions that work well with multiple industries, be it healthcare, financial services, government, retail, or manufacturing, to name some.
>
> **[1:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=115)** There are many companies that are doing great with Azure.
>
> **[2:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=120)** This is not all.
>
> **[2:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=121)** Azure is continuously adding services to its preexisting diverse portfolio by bringing in continuous innovations that support your development today and your product visions for tomorrow.
>
> **[2:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=135)** Click on the free account so that you can create your free account and get your hands on Azure experience today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), cloud (6), business (4), [[Microsoft]] (2), [[Microsoft Products|Products]] (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud benefits and considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=0)** - [Narrator] Different types of cloud deployment models.
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=3)** Now that we are familiar with Azure and its history, let's learn about types of cloud deployment models.
>
> **[0:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=12)** It is important to note that not all clouds are same.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=16)** Further, there are several cloud computing models that have evolved over time to meet the rapidly changing needs of the industry.
>
> **[0:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=26)** Let us learn about three different types of cloud deployment models that are commonly used in the industry: public cloud, private cloud, and hybrid cloud.
>
> **[0:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=37)** Now that we are aware about the different types of deployment models, let us learn about each one of them.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=45)** Firstly, let us start with the public cloud.
>
> **[0:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=49)** Public cloud is one of the most common types of cloud deployment model that is owned and operated by a third party cloud service provider.
>
> **[0:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=59)** Microsoft Azure is the second largest public cloud provider in the industry.
>
> **[1:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=65)** You can access the cloud services and manage your account using a web browser.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=71)** Azure provides your web portal where you can just log in and use all the public services.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=77)** Some of the major advantages of using public cloud include: lower operational cost, lesser maintenance overhead, high reliability, and nearly unlimited scalability.
>
> **[1:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=91)** Next in line comes the private cloud.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=94)** Private cloud, popularly known as internal or corporate cloud, is used to host resources that are used exclusively by a single business or an organization.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=107)** With private cloud, users get additional control, security, and privacy as people outside your organization would not be able to access resources hosted in private cloud.
>
> **[2:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=122)** One of the major drawbacks of private cloud is that private cloud requires almost similar staffing, management and maintenance expenses as incurred with traditional data centers because the company's IT department is responsible for managing the cloud.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=142)** Finally, we have hybrid cloud.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=145)** Hybrid cloud is a combination of both public and private cloud.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=150)** It is a cloud computing environment that combines an on-premise data center, also called US private cloud with public cloud allowing data and applications to be shared between them.
>
> **[2:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=164)** When computing and processing demands fluctuate, hybrid cloud computing model gives businesses the flexibility to use new cloud first technologies for their new workloads while still keeping their business critical applications and data on premise.
>
> **[3:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=182)** Hybrid cloud model is best suited for industries such as banking, finance, healthcare, et cetera, that deal with highly sensitive data and need the data to be kept on premises while still wanting to leverage the advantages of cloud.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=201)** Let's analyze all of the cloud deployment models in a class.
>
> **[3:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=205)** There are several factors that come into picture while choosing a cloud deployment model: Initial setup, scalability, cost optimization, reliability, data security, and privacy are some of the major factors that you have to consider while choosing a cloud deployment model for your organization.
>
> **[3:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=227)** It is important to understand that there is no one type of cloud which fits everyone's requirements. Choice of cloud computing model depends on your business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (32), data (7), [[Hybrid Cloud]] (5), business (3), [[Microsoft Azure|Azure]] (2)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### Discuss different types of cloud models
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=0)** - [Instructor] Cloud benefits and considerations.
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=3)** Cloud computing is a big shift from the traditional way of businesses being run.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=9)** Organizations have changed their outlook towards the business after introduction of cloud.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=16)** Traditionally, organizations had to pay upfront cost for all the infrastructure that they used to purchase.
>
> **[0:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=24)** This cost was popularly known as capital expenditure, or CapEx.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=29)** Cloud service providers today operate on a consumption-based model that is OpEx, which is also known as operational expenditure.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=40)** Here, the companies pay only for the services which they're consuming, there is no upfront cost involved with OpEx consumption model.
>
> **[0:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=51)** With pay as you go model, you can stop paying for the resources which are no longer needed.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=58)** You can simply delete and you will not be charged for those resources anymore.
>
> **[1:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=64)** There are several advantages of using cloud.
>
> **[1:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=67)** Speed.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=69)** Most cloud computing services are provided as self-service.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=74)** Even vast amount of computing resources can be provisioned in minutes, typically, with just a few mouse clicks, giving businesses a lot of flexibility and taking the pressure of capacity planning.
>
> **[1:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=90)** Agility.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=92)** Agility provides you with the capability to deploy and configure cloud-based resources quickly as your application requirements change.
>
> **[1:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=104)** Cost.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=105)** Cloud computing eliminates the capital expense of buying hardware and software, as well as setting up and running onsite data center resources, including server racks, ensuring round the clock electricity for power and cooling, and the IT experts for managing the infrastructure.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=127)** High availability.
>
> **[2:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=129)** Depending on the service level agreement that you choose, your cloud-based applications can provide a continuous user experience with no apparent downtime, even when things go wrong.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=143)** Global scale.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=145)** The benefits of cloud computing services include the ability to scale elastically, deliver the right amount of IT resources.
>
> **[2:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=154)** That is, you can get more or less computing power, storage, bandwidth, et cetera, right when they are needed, and from the right geographical locations.
>
> **[2:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=168)** Performance.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=170)** You can configure cloud-based apps to take advantage of auto-scaling, so your apps always have the resources they need.
>
> **[2:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=179)** Azure Services run on a worldwide network of secure data centers, which are regularly upgraded to latest generation of fast and efficient computing hardware.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=191)** This offers several benefits, including reduced network latency for applications and greater economies of scale.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=201)** Security.
>
> **[3:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=202)** Azure offers a broad set of policies, technologies, and controls that strengthen your security posture overall, helping protect your data, applications and infrastructure from potential threats.
>
> **[3:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=219)** Disaster recovery.
>
> **[3:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=221)** By taking advantage of cloud-based backup services, data replication, and geo-distribution, you can deploy your apps with the confidence that comes from knowing that your data is safe even in the event of disaster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (12), data (5), [[Hardware]] (2), power (2), [[Microsoft Azure|Azure]] (2)
> **Definitions:** known as (2), is a  (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### Types of cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=0)** - [Instructor] Types of cloud service models.
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=3)** Most cloud computing services fall under four broad categories, namely infrastructure as a service, platform as a service, software as a service, and serverless computing.
>
> **[0:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=18)** Let's learn in depth about each of these services one by one, starting with infrastructure as a service.
>
> **[0:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=25)** This is the most basic category of cloud computing service, which is closest to managing the physical servers.
>
> **[0:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=32)** Cloud service provider will take care of the hardware updates, but OS maintenance and network configuration needs to be taken care of by the business running in the cloud.
>
> **[0:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=46)** Infrastructure as a service offers essential compute, storage and network services on demand.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=54)** Let's learn more about Azure IaaS offerings.
>
> **[0:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=59)** This page displays a list of comprehensive services offered under Azure IaaS category, including virtual machines, virtual machine scale sets, dedicated hosts, load balancer, networking, Network Watcher, Azure storage, and managed disks to name some.
>
> **[1:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=81)** You can see a list of all the compute services that are offered under IaaS on this page.
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=89)** Next comes platform as a service.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=92)** Platform as a service supplies an on demand environment for developing, testing, delivering, and managing software applications.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=102)** PaaS is designed to enable developers to quickly create web or mobile applications without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and databases.
>
> **[1:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=119)** Azure PaaS services include app services, load testing, app configuration, deployment environments, Azure AD cognitive services, machine learning, et cetera.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=133)** Let us look at all the broad offerings of Azure PaaS.
>
> **[2:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=137)** This page shows a list of all the PaaS services being offered by Azure, ranging from AIML, analytics, compute, database, development, identity and security, IOT, management governance, migration, network, and storage.
>
> **[2:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=159)** So you can see a list of all the services that are highlighted in different colors over here.
>
> **[2:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=166)** Software as a service.
>
> **[2:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=168)** Software as a service is a method for delivering software applications over the internet on demand, and typically on a subscription basis.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=178)** With SaaS, cloud providers host and manage the software applications and its underlying infrastructure.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=187)** They can also handle any maintenance, like software upgrades and security patching.
>
> **[3:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=194)** Users connect to application over internet, usually with the web browser on phone, tablet, or PC.
>
> **[3:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=202)** For example, Microsoft Office 365 provides a fully working version of Microsoft Office that runs in the cloud.
>
> **[3:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=213)** Azure portal in itself can be seen as a great example of Azure SaaS offering.
>
> **[3:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=219)** Let us learn more about all the SaaS offerings being provided by Azure at this point.
>
> **[3:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=226)** This page displays the comprehensive list of all the Azure services that are present currently, including data catalog, Power BI, Azure DevOps, Visual Studio, Defender for Cloud, Microsoft Sentinel, Azure Migrate and site recovery to name some of the major SaaS offerings by Azure.
>
> **[4:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=251)** Overlapping with PaaS, serverless computing focuses on building app functionality without spending time continually managing the server and infrastructure.
>
> **[4:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=263)** The cloud provider automatically provisions, scales and manages the infrastructure that is required to run the code.
>
> **[4:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=273)** Serverless architectures are highly scalable and event driven.
>
> **[4:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=278)** This approach enables developers to increase their focus on business logic and deliver more value to the core of the business.
>
> **[4:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=288)** Serverless computing help teams increase their productivity and bring products to market faster.
>
> **[4:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=296)** Azure Functions, serverless, containerized microservices like Azure Container App, serverless Kubernetes are some of the examples of serverless compute services that are being offered by Azure.
>
> **[5:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=312)** Once you have decided to move towards cloud, your next step is to select a cloud provider.
>
> **[5:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=319)** It is vital to assess the reliability and capability of a service provider.
>
> **[5:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=325)** Undoubtedly, Microsoft Azure is one of the leading global providers of cloud computing services that is preferred by most of the Fortune 500 companies to run their businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), cloud (12), [[PaaS]] (5), [[SaaS]] (4), [[IaaS|Infrastructure as a service]] (3)
> **Env Vars:** aiml (1), iot (1)
> **Tools:** azure portal (1), visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Shared responsibility model
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=0)** - [Instructor] Shared Responsibility Model.
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=3)** As you consider and evaluate public cloud services, it's critical to understand the shared responsibility model.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=11)** You must also know the list of security tasks that are handled by the cloud provider and the tasks that are handled by you.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=20)** The workload responsibilities vary depending on whether the workload is hosted on infrastructure as a service, platform as a service model, software as a service model, or in an on-premises data center.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=36)** Following diagram illustrates the areas of responsibilities between you and your cloud service provider.
>
> **[0:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=43)** Here it is Microsoft.
>
> **[0:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=46)** In an on-premises environment, the customer is responsible for managing end-to-end security, including physical security, host infrastructure, network controls, application level controls, identity and access management, and data classification accountability.
>
> **[1:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=67)** As we move from infrastructure as a service to software as a service, the responsibilities get distributed amongst the cloud service provider and the customer.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=79)** Physical security is one of the responsibilities that is totally owned by the cloud service provider when you're using the cloud computing.
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=89)** The remaining responsibilities are shared between the customers and cloud service providers.
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=96)** These responsibilities contribute to achieving a compliant and secure computing environment.
>
> **[1:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=104)** As we move from on-premises to SaaS, cloud providers' accountability towards different services keeps on increasing.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=113)** Nonetheless, ensuring that the data and its classification is done correctly and that the solution will be compliant with regulatory obligations is the responsibility of customer.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=127)** Further, the customer is also accountable to ensure that the entire solution, including data, is securely identified, labeled, and correctly classified to meet any compliance obligations.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=142)** Distinction between sensitive customer data and content that is designed to be made public must be done by the customer.
>
> **[2:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=152)** Understanding the shared responsibility model is essential for customers moving to the cloud.
>
> **[2:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=158)** Cloud providers offer considerable advantages related to security and compliance, but these advantages do not absolve the customer from protecting their users' applications and service offerings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (10), [[Security]] (5), data (4), [[IaaS|Infrastructure as a service]] (2), [[SaaS|Software as a service]] (2)
> **Speakers:** - [instructor] (1)


### 2. Core Azure Services

[↑ Back to Table of Contents](#table-of-contents)

#### Azure architectural components
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=0)** - [Instructor] Microsoft Azure relies on a few key architectural components to provide redundancy and high availability.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=9)** These core Azure architectural components include Azure management groups and subscriptions, Azure Resource Groups, resources, and Azure Resource Manager, Azure regions, geographies, region pairs, and availability zones.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=28)** Azure organizes the structural hierarchy of its resources in four levels, namely management groups, subscriptions, resource groups, and resources.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=40)** Let's learn about each of these levels one by one, starting with subscriptions.
>
> **[0:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=46)** You need a subscription to use an Azure account.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=50)** A subscription provides you with authenticated and authorized access to Azure products and services.
>
> **[0:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=57)** It also allows you to provision resources.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=61)** An account can have one or multiple subscriptions depending on the organization requirement.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=68)** For each subscription, there are limits or quotas on the amount of resources that you can create and use.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=77)** Organizations can use subscriptions to manage costs and resources that are created by users, teams, or projects.
>
> **[1:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=88)** Azure provides different types of subscriptions, namely free trial, pay as you go, enterprise agreement, and cloud solutions provider subscription.
>
> **[1:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=100)** Management groups.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=102)** If your organization has many subscriptions, you might need a way to efficiently manage access, policies, and compliance for those subscriptions.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=113)** Azure subscriptions are organized into containers called management groups.
>
> **[1:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=118)** Azure management group provides a level of scope above subscriptions.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=123)** Management group can include multiple subscriptions.
>
> **[2:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=128)** All subscriptions within a management group automatically inherit the conditions applied to a management group.
>
> **[2:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=136)** A management group tree can support up to six levels of depth.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=142)** Next, let us discuss about resource groups.
>
> **[2:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=146)** Resource groups act as a logical container for deploying different Azure services like web apps, databases, storage accounts, et cetera.
>
> **[2:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=157)** Resources can exist in only one resource group at a time, and the resources are combined into resource groups.
>
> **[2:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=167)** However, one application can have its resources split across multiple resource groups.
>
> **[2:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=175)** Next, let us discuss about resources.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=178)** Azure resources are components like storage, virtual machines, network, and storage account, et cetera, that are available to build cloud solutions.
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=190)** Resources can exist in only one resource group at a time.
>
> **[3:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=196)** Resources may be created in a region within different geographical locations around the globe that contain Azure data centers.
>
> **[3:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=205)** These data centers aren't directly exposed to the users.
>
> **[3:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=210)** Azure organizes data centers into regions.
>
> **[3:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=214)** Let's dig deep into Azure geographies and regions.
>
> **[3:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=219)** Each Azure geography contains one or more regions and meet specific data residency and compliance requirements.
>
> **[3:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=228)** This lets you keep your business critical data and apps nearby on fault tolerant, high capacity networking infrastructure.
>
> **[3:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=238)** You can simply select a location of your preference, select a geography from here.
>
> **[4:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=245)** You see a list of geographies that are available in Azure.
>
> **[4:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=250)** Azure is the first cloud service provider to have maximum data center presence across the globe.
>
> **[4:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=257)** These data centers aren't directly exposed to the users.
>
> **[4:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=263)** Azure organizes data centers into regions.
>
> **[4:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=267)** Here you can see geography is distributed into different regions.
>
> **[4:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=271)** When you deploy a resource in Azure, you will often need to choose a region where you want your resource to be deployed.
>
> **[4:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=279)** A region is a geographical area containing at least one, but potentially multiple data centers that are in close proximity and networked together with a low latency network.
>
> **[4:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=293)** For example, here, if I choose Australia, you can see Australia has been divided into three regions, namely Australia Center, Australia East, and Australia Southeast.
>
> **[5:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=307)** Availability zones.
>
> **[5:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=309)** Availability zones are physically separate data centers within an Azure region.
>
> **[5:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=315)** Each availability zone is made up of one or more data centers equipped with independent power, cooling, and networking.
>
> **[5:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=324)** An availability zone is set up to be an isolation boundary.
>
> **[5:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=329)** If one of the zone goes down, the other continues working.
>
> **[5:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=333)** Availability zones are connected through high speed private fiber optic networks.
>
> **[5:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=340)** Azure provides the most extensive global footprint when compared to any other cloud provider and is rapidly opening new regions and availability zones.
>
> **[5:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=352)** Azure has availability zone in every country or region in which Azure operates a data center.
>
> **[6:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=360)** The following regions are currently supported under Azure availability zones.
>
> **[6:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=367)** Next, let us learn about region pairs.
>
> **[6:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=371)** Region pairs help Azure pair two data centers within same geography at least 300 miles away to help reduce likelihood of interruptions due to catastrophic events such as a natural disaster, power outage, civil unrest, or physical network outage that may affect multiple availability zones.
>
> **[6:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=393)** If a region in a pair was affected by a natural disaster, service would automatically fail over to other region in its region pair.
>
> **[6:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=403)** Let us learn more about region pairs using this link.
>
> **[6:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=409)** This page displays a list of all available Azure region pairs.
>
> **[6:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=414)** If an extensive Azure outage occurs, one region out of every pair is prioritized to make sure that at least one is restored as quickly as possible for applications hosted in that region pair.
>
> **[7:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=429)** Further, planned Azure updates are rolled out to region pairs one at a time to minimize downtime and risk of application outage.
>
> **[7:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=439)** Data continues to reside within the same geography as its spare, except Brazil South.
>
> **[7:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=445)** Brazil South's secondary region is South Central US.
>
> **[7:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=449)** Now that we are aware about basic architectural components of Azure, let's deep dive into Azure Portal and get to learn its practical usage in the upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (32), data (14), management (9), cloud (4), next (3)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Walk-through of Azure portal and core Azure workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=0)** - [Instructor] Cloud computing is one of the top sought after skills that most companies are looking for these days.
>
> **[0:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=7)** Whether you are a security enthusiast, a data analyst, a developer, a small business, or a large IT enterprise, Azure is for everyone.
>
> **[0:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=18)** Microsoft Azure lets you create future-ready innovations across all your environments by offering some of the latest cutting edge technologies.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=29)** You can use this link to access Azure Portal to create and manage Azure resources.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=36)** Let's jump into the Azure portal now.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=40)** You can either use a guided approach to create your resources, or use Command Line and PowerShell in Azure if you are a scripting enthusiast like me.
>
> **[0:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=53)** The top right hand corner displays the name of your subscription which you are using.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=58)** You also get an option to switch between subscriptions by clicking on the name of your subscription.
>
> **[1:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=66)** The portal homepage displays the list of most recently used services and the recently created resources.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=74)** Here, you can see virtual machine resource group that has been created recently.
>
> **[1:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=81)** Click on the Home button to navigate back to the homepage where you can see most important and widely used tools, including Microsoft Learn, Azure Monitor, Microsoft Defender for Cloud, and Cost Management.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=97)** Under the Useful links section, you see this Quickstart Center hyperlink.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=102)** This link redirects you to the Getting Started with Azure page where you can find self-help videos, which are really beneficial for beginners.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=112)** Under the projects and guides section, you can learn about popular Azure services and create your first Azure project.
>
> **[2:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=121)** On the top right corner, you see a hamburger icon.
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=126)** This section displays a list of all services that are offered by Azure.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=133)** Most of the Azure services are designed to build solutions your way.
>
> **[2:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=137)** They are scalable to meet your immediate needs and your future business needs as well.
>
> **[2:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=144)** One of my favorite sections is Cost Management and Billing.
>
> **[2:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=152)** Here, you can visualize your spending, set budgets, and allocate costs as per your business needs.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=162)** You can also leverage features offered by Azure Advisor, which analyzes your telemetry and suggests best practices based on your cost, security, reliability, operational excellence, and performance.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=180)** To begin with using Azure, click on the Start Free and create your free trial account with $200 credit.
>
> **[3:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=189)** The popular services are free for 12 months.
>
> **[3:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=193)** There are 55 plus other services, which are always free for you.
>
> **[3:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=199)** Click on the Start Free hyperlink and follow the onscreen instructions to start creating your Azure account now.
>
> **[3:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=207)** There are a lot of things happening in the cloud, so create your free trial account now and use the credits to kickstart your Azure journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), cloud (3), business (3), [[Security]] (2), [[Cost Management]] (2)
> **Tools:** azure portal (2), command line (1), powershell (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** find (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Azure compute services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=0)** - [Instructor] Azure Compute is an on-demand computing service for running cloud-based applications.
>
> **[0:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=7)** It provides computing resources such as disks, processors, memory, networking, and operating systems.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=16)** These resources are available on demand and typically be made available in minutes or even seconds.
>
> **[0:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=25)** You pay only for resources you use and only for as long as you're using them.
>
> **[0:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=32)** Let's jump into the Azure portal and look under the compute section.
>
> **[0:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=38)** You will find compute resources under all services section.
>
> **[0:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=42)** Azure supports a wide range of computing services ranging from IaaS solutions, PaaS solutions, serverless and microservices, high performance compute, and hybrid cloud compute services.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=58)** Let's look into some of the most predominantly used compute services.
>
> **[1:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=63)** To begin with, Azure virtual machines.
>
> **[1:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=66)** The virtual machine, which is also popularly known as VM, is an on-demand scalable compute resource, which is used by customers who require more control on the computing environment.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=80)** VMs provide infrastructure as a service in form of virtualized servers and can be used in many ways.
>
> **[1:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=87)** An Azure VM gives you flexibility of virtualizing without having to buy and maintain the physical hardware that runs your virtual machine.
>
> **[1:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=98)** VMs in Azure are available in two operating system versions, namely Windows and Linux.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=107)** You get 750 hours of B1S SKU for both Windows as well as Linux OS to get your hands dirty.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=117)** Azure provides an option to create Azure virtual machine, Azure virtual machine with preset configuration and more VMs and related solutions.
>
> **[2:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=128)** Let's get started with creating an Azure virtual machine.
>
> **[2:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=134)** You need to fill the mandatory details that are marked with red asterisk.
>
> **[2:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=141)** Fill the resource group name, virtual machine name, the region where you want to host it, pick your availability options, choose a security type, image that you want to run your virtual machine on, size of a virtual machine, create username, give a password.
>
> **[2:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=161)** For public inbound, we'll allow the RDP port for now.
>
> **[2:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=165)** Go to the next section.
>
> **[2:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=167)** Here, you get default OS disk.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=171)** You can add and configure additional disks for your virtual machines or attach existing disks as per your requirement.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=180)** Next, you can choose the basic network options that are already there.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=187)** Go to the management.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=188)** Here, you can enable identity, log in with Azure AD, configure auto shutdown for your virtual machine, enable backup, enable disaster recovery, and manage how the patching would be done for your virtual machine.
>
> **[3:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=203)** I will be selecting manual updates.
>
> **[3:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=206)** You can enable boot diagnostics and OS guest diagnostics if required.
>
> **[3:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=212)** Next, click on review plus create.
>
> **[3:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=217)** Once the validation passes, click the create button.
>
> **[3:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=221)** You will see the deployment is in progress and it hardly takes two to three minutes for your VM to be provisioned in Azure.
>
> **[3:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=230)** Here you see our deployment has been completed.
>
> **[3:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=234)** While virtual machines are an excellent way to reduce costs versus the investments that are necessary for physical hardware, they are still limited to a single operating system per virtual machine.
>
> **[4:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=247)** If you want to run multiple instances of an application on a single host machine, containers are an excellent choice.
>
> **[4:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=257)** Let's learn about containers.
>
> **[4:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=259)** Containers are a lightweight, virtualized environment that does not require operating system management.
>
> **[4:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=266)** They fall under serverless and microservices category that is made available under Azure compute.
>
> **[4:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=274)** These days, containers are becoming the preferred way to package, deploy and manage cloud applications.
>
> **[4:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=282)** You can see the new category that has been added as container apps.
>
> **[4:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=288)** Azure Function app is another important compute service that is offered by Azure that lets you group functions as a logical unit for easier management, deployment, and sharing of resources.
>
> **[5:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=303)** Functions let you execute your code in a serverless environment without having to first create a VM or publish a web application.
>
> **[5:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=313)** Azure Kubernetes service is a complete orchestration service for containers with distributed architectures and large volume of containers.
>
> **[5:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=324)** AKS offers the quickest way to start developing and deploying cloud native apps in Azure.
>
> **[5:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=332)** AKS is the future and it simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure.
>
> **[5:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=343)** For AKS, Azure handles most of the critical tasks like health monitoring and maintenance.
>
> **[5:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=351)** To learn more about Azure, you can visit this free training link from Microsoft.
>
> **[5:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=357)** I hope you get a good overview of compute services using this video.
>
> **[6:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=363)** Thanks, and join me on the further videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (20), cloud (3), [[Virtual Machines]] (3), next (3), management (3)
> **Env Vars:** aks (3), b1s (1), sku (1), rdp (1)
> **Definitions:** is an  (2), known as (1), is a  (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)

#### Azure network services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=0)** - [Instructor] Networking is a critical component of any cloud infrastructure and is responsible for either making or breaking off a cloud deployment.
>
> **[0:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=10)** IT teams need to connect resources and optimize applications, which require a robust network architectural design.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=20)** Azure uses its huge backbone network to support connectivity of resources that are hosted in cloud.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=28)** Let us look into all the network services that are available in Azure presently.
>
> **[0:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=35)** As you can see in the portal, services range between different categories, namely network foundation, hybrid connectivity, network security, and load balancing.
>
> **[0:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=48)** We'll learn about some of the most commonly used network services that are offered by Azure.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=54)** Here you see we have already created two virtual networks.
>
> **[0:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=59)** Azure virtual network, commonly known as Vnet is one of the most fundamental building blocks of a network service, which enables users to create, connect, and manage a secure network infrastructure in cloud.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=74)** Vnets can also be considered as extension to your on-premise network, which enables communication between cloud, on-premise services, and internet.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=86)** Vnet is further divided into smaller segments called subnets, which can be used for creating boundaries between your resources and configuring isolated and highly secure environment for your applications.
>
> **[1:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=101)** Here you can see we have four subnets created under our Vnet.
>
> **[1:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=106)** One thing that is important to notice that resources within the same Vnet can communicate with each other seamlessly.
>
> **[1:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=114)** However, for enabling communication between resources present in different Vnet, we would need to establish Vnet peering.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=123)** Now, what exactly is Vnet peering?
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=126)** Vnet peering enables you to seamlessly establish connection between two virtual networks and send traffic over the Microsoft network.
>
> **[2:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=137)** It is important to note that virtual networks with overlapping address spaces cannot be peered.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=145)** Some of the important features of Vnet include enhance security and isolation, which enables you to run virtual machines and applications in an isolated and highly secure manner using the private IP address.
>
> **[2:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=160)** We can build sophisticated networked topologies by creating advanced overlay architectures on the top of Azure resources and services.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=170)** You can use Vnets to combine platform as a service and infrastructure as a service resources and reduce network complexity.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=180)** You can also gain flexibility to build your applications.
>
> **[3:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=185)** Next, let us learn about VPN gateways.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=188)** VPN Gateway is also one of the important networking services that is being offered by Azure.
>
> **[3:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=196)** VPN Gateway is used to send traffic between Azure Virtual Network and an on-premise location over the public internet.
>
> **[3:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=206)** Azure VPN gateway instance is deployed in a dedicated subnet within a Vnet, and its name is by default taken as gateway subnet.
>
> **[3:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=216)** So as you see here, the name by default is Gateway Subnet.
>
> **[3:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=222)** VPN Gateways support three broad categories of connectivity requirements, namely site-to-site connectivity for connecting on-premise data centers to Vnet, point-to-site connectivity for connecting individual devices to your corporate network.
>
> **[4:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=240)** One of the example would be while you're working from home, you use this VPN to connect to your office network.
>
> **[4:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=247)** Then connect Vnet to another Vnet through network-to-network connection, that is, peering off to Vnets.
>
> **[4:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=257)** Now, let us learn about another service, which is ExpressRoute.
>
> **[4:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=262)** Azure ExpressRoute is used to extend your on-premise network into Azure over a private connection.
>
> **[4:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=270)** The important point to note here is that it's a private connection and your network connection or your network traffic is not going over the internet.
>
> **[4:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=282)** That is the traffic does not pass via internet when you're using express route connection to establish communication between your on premises and your cloud network.
>
> **[4:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=293)** This connection offers more speed, reliability, consistency, and higher security when compared to the typical connections over the internet.
>
> **[5:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=304)** Next is the Azure load balancer.
>
> **[5:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=307)** Load balancing helps in evenly distributing incoming traffic across multiple computing resources.
>
> **[5:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=315)** Load balancer handles millions of requests per second, ensuring that your solution is highly available.
>
> **[5:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=324)** Azure load balancing service offers regional as well as global load balancing capabilities.
>
> **[5:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=332)** Currently, Azure offers four types of load balancing services.
>
> **[5:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=337)** The classic load balancer, Azure load balancer is a high performance ultralow latency layer four load balancing service, which supports all UDP and TCP based protocols such as HTTP, HTTPS, SMTP, and other protocols that are used for real time voice and video messaging application.
>
> **[6:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=361)** This is built to handle millions of requests per second while ensuring that your solution is highly available.
>
> **[6:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=370)** Next is an application gateway.
>
> **[6:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=373)** The application gateway is a web traffic load balancer that enables you to manage traffic to your web applications.
>
> **[6:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=381)** It works on layer seven of the OSI model.
>
> **[6:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=385)** Next comes the traffic manager.
>
> **[6:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=387)** Azure traffic manager is a DNS based traffic load balancer.
>
> **[6:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=393)** The service allows you to distribute traffic to your public facing applications across the global Azure region.
>
> **[6:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=401)** Traffic manager also provides you public endpoints with high availability and quick responsiveness.
>
> **[6:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=410)** Last but not the least is the Azure front door and CDN profiles.
>
> **[6:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=416)** This is a security led modern cloud CDN, that is a content delivery network, which provides static and dynamic content acceleration, global load balancing, and enhanced security for your apps, APIs, and websites with intelligence threat protection.
>
> **[7:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=436)** This load balancer type works on layer seven of the OSI model.
>
> **[7:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=443)** So now that you have the basic idea about most commonly used networking services in Azure, you will be able to connect all the cloud resources securely using your Azure networking services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), traffic (12), cloud (7), vpn (6), [[Security]] (4)
> **Env Vars:** vpn (6), osi (2), cdn (2), udp (1), tcp (1)
> **Definitions:** is a  (6), known as (1), is an  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Azure storage services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=0)** - [Instructor] Azure Storage platform is one of the best in class cloud storage solutions that is made available by Microsoft for meeting the modern data storage requirements.
>
> **[0:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=12)** It offers easily accessible, highly available, massively scalable, secure, and durable storage solutions.
>
> **[0:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=21)** The current storage solutions provided by Azure include hybrid and edge storage, object, file, and block storage, storage migration, and some additional storage services like Data Lake Storage Gen1, Azure Managed Lustre, HPC caches and Storage Sync Service.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=45)** To begin with, let us learn about Azure Storage account, which is one of the most widely used storage service.
>
> **[0:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=53)** Here, I've already created an Azure storage account for ease of work.
>
> **[1:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=60)** Azure Storage is a Microsoft managed service providing cloud storage that is highly available, durable, scalable, secure, and redundant.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=71)** Azure Storage includes Azure blobs, Azure containers, file shares, queues, and tables.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=80)** The cost of your storage account depends on the usage and options that you choose while configuring the storage account.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=93)** While creating a storage account, you will see that it is available in two performance tiers, namely standard performance tier that is recommended for most scenarios and is general purpose v2 storage account, which has redundancy options of LRS, GRS, ZRS and GZRS, and premium performance tier, which has page blobs, block blobs, file shares.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=123)** Azure Storage offers five core services, namely blob, files, queues, tables, and disks.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=133)** Let us learn about each of these one by one, starting with the blob storage.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=139)** Azure Blob Storage is Microsoft's object storage solution for cloud, which is optimized for storing massive amounts of unstructured data.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=150)** Blobs mainly store large files like documents, log files, video and audio files, et cetera.
>
> **[2:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=159)** This type of storage is an ideal option for storing data for backup and restore, and is also used in creating site recovery solutions.
>
> **[2:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=169)** Blob storage also supports Azure Data Lake Gen2, which is Microsoft Enterprise's big data analytics solution in cloud.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=180)** Now let's learn about Azure Files.
>
> **[3:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=183)** Azure Files set up a highly available network file share that can be accessed by using the standard message block or SMB protocol.
>
> **[3:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=194)** Data in Azure File shares is highly available with global redundancy.
>
> **[3:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=200)** Azure Files can be mounted directly on Windows, Linux, and Mac OS via SMB.
>
> **[3:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=209)** Some of the common uses of Azure Files include lifting and shifting an application to the cloud that uses native file system APIs.
>
> **[3:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=219)** Azure Files can also be used to share data with other applications that are running in Azure.
>
> **[3:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=226)** It can be used as a replacement for your on-prem file servers on NAS devices.
>
> **[3:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=232)** Next, let us look into Azure Queues.
>
> **[3:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=236)** Azure Queue service is used to store and retrieve a large number of messages from anywhere in the world via authentic calls using HTTP or HTTPS protocol.
>
> **[4:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=250)** Queue messages can be up to 64 KB in size and a queue can contain millions of messages.
>
> **[4:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=258)** Queues are generally used to store list of messages to be processed asynchronously.
>
> **[4:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=265)** Azure Queues are best for asynchronous messaging.
>
> **[4:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=268)** For example, an Uber application uses the message queue for booking a ride and driver allocation.
>
> **[4:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=277)** Next, let us look into Azure Tables.
>
> **[4:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=280)** Azure Table service stores structured NoSQL data, providing a key or attribute store with the schema-less design.
>
> **[4:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=291)** Tables are used to store flexible data sets, like user data for web application, address books, device information, and other types of metadata that are required by your services.
>
> **[5:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=306)** Next in line comes Azure Disks.
>
> **[5:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=309)** Azure Disks allows data to be persistently stored.
>
> **[5:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=314)** Disk data can be easily accessible from attached virtual hard disks.
>
> **[5:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=320)** Let us look into the types of managed disks that are available in Azure.
>
> **[5:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=325)** Ultra SSD managed disks, premium SSD managed disks, standard SSD managed disks, and standard HDD managed disks.
>
> **[5:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=336)** Now that you're familiar with different storage options available in Azure, let us learn about the different types of storage tiers available for our use.
>
> **[5:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=348)** Data stored in cloud can grow at an exponential pace.
>
> **[5:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=353)** To manage costs of your ever expanding storage needs, Azure offers three data tiers, which will help you save on cost for the data, which needs to be stored, but doesn't need to be retrieved on a frequent basis.
>
> **[6:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=368)** These access tiers are categorized into hot tier, cool tier, and archive tier.
>
> **[6:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=375)** Hot tier is an online tier, which is optimized for storing frequently accessed data.
>
> **[6:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=382)** This tier has highest storage cost, but lowest retrieval cost.
>
> **[6:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=387)** Cool tier.
>
> **[6:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=388)** This is an online tier, which is used for storing data that is infrequently accessed or modified.
>
> **[6:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=396)** Data in cool tier should be stored for a minimum of 30 to 90 days period.
>
> **[6:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=402)** This tier has lower storage cost, but higher retrieval cost when compared to hot storage tier.
>
> **[6:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=409)** Archive tier.
>
> **[6:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=411)** This is an offline tier, which is used for storing data that is rarely accessed.
>
> **[6:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=417)** For example, you would have an option where you have to store data for auditing purpose, but that data does not need to be retrieved every day.
>
> **[7:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=429)** That might be needed once in a year.
>
> **[7:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=432)** In that case, archive tier would be your best storage solution.
>
> **[7:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=437)** It is important to know that it will need a minimum of 15 hours to retrieve data depending on the size and latency.
>
> **[7:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=446)** Data in archive tier must be stored for a minimum of 180 days, and this is the cheapest storage option available.
>
> **[7:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=456)** Finally, all the data stored in Azure is automatically encrypted on upload and decrypted on retrieval.
>
> **[7:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=465)** Note that Azure Storage is a powerful and flexible solution to store your data in cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (31), data (24), cloud (7), [[Microsoft]] (4), next (3)
> **Env Vars:** ssd (3), smb (2), hpc (1), lrs (1), grs (1)
> **Definitions:** is an  (4), is a  (2)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Azure database services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=0)** - [Instructor] Database is a collection of data that is organized in a way which can be easily retrieved and managed.
>
> **[0:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=8)** Any website or webpage that you see on the internet needs a database to store the data in the backend.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=16)** For example, while placing an order on an e-commerce website, in the front end, you will see the items which you pick up.
>
> **[0:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=25)** But in the backend, there is a database that stores all this information.
>
> **[0:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=31)** With Azure, you get highly available, secure, and scalable database services, which can be automated to save you time and money.
>
> **[0:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=41)** Here you can find a list of database services, including Azure SQL Database, Cosmos DB, open-source database engines, hybrid data services, and some additional data services that are made available to you by Azure.
>
> **[1:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=60)** Let's learn about some of the most prominently used database services.
>
> **[1:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=65)** SQL Database.
>
> **[1:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=67)** Azure SQL Database is an up-to-date, fully managed, serverless, always on relational database service that is mainly used to build apps that can scale with managed and intelligent SQL databases in the cloud.
>
> **[1:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=85)** SQL Managed Instance.
>
> **[1:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=88)** This is the type of Azure Platform as a Service.
>
> **[1:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=91)** It is an intelligent cloud database service that provides the broadest SQL server database engine compatibility.
>
> **[1:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=99)** Azure SQL Managed Instance is an ideal choice of architects to plan migration from on-prem to cloud.
>
> **[1:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=108)** SQL virtual machines.
>
> **[1:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=111)** SQL server on virtual machine falls under the category of Infrastructure as a Service.
>
> **[1:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=118)** This is the best choice for people who need full control of their database and looking to move into the cloud as fast as possible without making any big application changes.
>
> **[2:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=131)** Cosmos DB.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=133)** Azure Cosmos DB is a fully managed, No-SQL database PaaS service.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=140)** This is an ideal choice for those looking for maintaining globally distributed, low latency database service that is highly available.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=150)** Azure provides 99.99% SLA, continuous backup, and enterprise grade security for its Cosmos DB Service.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=162)** Azure Database for Postgres SQL.
>
> **[2:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=165)** This is a relational database service in the cloud, which is offered in two variants, namely single server and hyperscale.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=174)** Postgres SQL comes with a built-in high availability, adjustable automatic backup, and point in time restore for up to 35 days.
>
> **[3:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=186)** Finally, it's important to note that many large scale organizations are leveraging the benefits of Azure databases.
>
> **[3:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=195)** Azure databases offer agility to customers as they are able to embrace innovation by not just automating today, but also continuously improving tomorrow.
>
> **[3:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=207)** So, I'd suggest leveraging the database services offered by Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (19), [[Microsoft Azure|Azure]] (11), [[SQL]] (10), cloud (5), data (4)
> **Env Vars:** sql (12), sla (1)
> **Definitions:** is a  (4), is an  (4)
> **CLI Commands:** find (1)
> **Versions:** 99.99 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Identity, Governance, Privacy, and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### Azure identity services
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=0)** - [Instructor] Identity is commonly defined as a distinguishing character or personality of an individual.
>
> **[0:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=7)** It is considered as the primary parameter of security.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=11)** Accurately proving that someone is a valid user with an appropriate level of access is critical.
>
> **[0:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=19)** Identity and access management is one of the most important topics for anyone working with Azure.
>
> **[0:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=27)** Microsoft Entra ID is the identity and access management service that has been offered by Microsoft.
>
> **[0:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=34)** You can log into the Microsoft Entra ID Admin Center using this hyperlink.
>
> **[0:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=42)** Microsoft Entra ID Admin Center combines code dietary services like identity, protection, identity governance, verifiable credentials, permissions management, and global secure access.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=62)** Traditionally, protecting access to systems and data involved on-premises network parameters and physical access controls.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=71)** However, due to increasing flexibility of working from anywhere and Bringing Your Own Device strategy is being used, many of the access points are now available outside the company's physical network.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=86)** Organizations need to ensure employees can access only the authorized data.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=92)** Every one of us will have access to our company's annual profit statement, but not everyone is authorized to look at your salary statement.
>
> **[1:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=103)** Authentication and authorization are two fundamental concepts of identity and access service that you need to understand.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=113)** Let us discuss about each of these one by one.
>
> **[1:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=116)** What is authentication?
>
> **[1:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=119)** Authentication is the process of validating the identity of a registered user or a process before enabling their access to protected systems and networks.
>
> **[2:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=130)** You have a username and a password to prove your identity.
>
> **[2:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=135)** Biometrics or secondary OTP in your mobile device are some other common ways to validate whether a user is genuine or not.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=145)** What is authorization?
>
> **[2:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=148)** Authorization is a security mechanism to determine access levels that an authorized user or service is allowed to have on any resource.
>
> **[2:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=159)** Many a times, your organization have confidential and restricted data that is limited to only a certain set of authorized people.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=171)** Let us learn about this concept with an example.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=174)** Here, Nicole uses her credentials to authenticate successfully and log into the company's domain.
>
> **[3:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=181)** And according to her access levels, she's authorized to pull specific data into her system.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=188)** She also makes use of her mobile phone to add a second step of security while accessing her system.
>
> **[3:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=196)** This brings to our next topic, which is Azure Multifactor Authentication.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=201)** Multifactor Authentication is a process where user is prompted during the sign-in process for an additional form of identification.
>
> **[3:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=211)** Examples include a code in the mobile phone or a fingerprint scan.
>
> **[3:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=216)** Multifactor Authentication also provides additional security for your identities by requiring two or more elements to fully authenticate yourself.
>
> **[3:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=226)** Something you know.
>
> **[3:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=228)** This could be a password or an answer to a security question.
>
> **[3:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=232)** Something you possess.
>
> **[3:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=234)** This can be a mobile app that receives a notification.
>
> **[3:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=238)** It can also be a hardware token.
>
> **[4:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=241)** Something you are.
>
> **[4:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=242)** This is typically a biometric property such as fingerprint or a face scan, which is available in many mobile devices these days, mainly the smartphones.
>
> **[4:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=255)** This brings us to the end of our topic.
>
> **[4:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=258)** I hope this simplifies the concept of authentication and authorization with respect to identity services.
>
> **[4:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=265)** In the upcoming videos, we shall deep dive into Microsoft Entra ID and its related licensing part.
>
> **[4:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=273)** So, stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (5), [[Microsoft Entra ID]] (4), data (4), management (3), [[Microsoft Azure|Azure]] (2)
> **Definitions:** is a  (3)
> **Env Vars:** otp (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=0)** - [Instructor] Microsoft Entra ID, formerly known as Azure AD, is Microsoft's cloud-based identity and access management service.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=11)** You get all the features under Microsoft Entra ID, which was previously available under Azure Active Directory.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=20)** Let's learn about some of the important features that are being offered by Microsoft Entra ID Admin Center by logging into this URL.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=29)** Here, you get a Favorites section where you can easily bookmark the most utilized services.
>
> **[0:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=38)** Entra ID provides single sign-on experience, simplifying access to applications from anywhere.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=45)** It also offers seamless user experience by providing quick and easy sign-in to keep your users productive and reduce their time for managing passwords.
>
> **[0:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=59)** Conditional access and multi-factor authentication features help secure data.
>
> **[1:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=65)** The Privileged Identity Management feature ensures that right people have accurate access to correct resources within an additional just-in-time, which can be activated by simply clicking on this Activate button.
>
> **[1:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=82)** Microsoft Entra ID is available in four editions, namely Azure Active Directory Free, Microsoft Entra ID P1, Microsoft Entra ID P2, and Microsoft Entra ID Governance.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=97)** Let's learn about each of these editions one by one.
>
> **[1:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=101)** The free edition is included with a subscription of commercial online service, example Microsoft Azure, Dynamics 365, Intune and Power Platform.
>
> **[1:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=115)** Microsoft Entra ID P1 for Students is available as a standalone or included with Microsoft 365 E3 license for enterprise customers and Microsoft 365 Business Premium for small to medium businesses.
>
> **[2:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=132)** Microsoft Entra ID P2 license is available as a standalone or included with Microsoft 365 E5 license for enterprise customers.
>
> **[2:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=144)** Microsoft Entra ID Governance is an advanced set of identity governance capabilities that are available for Microsoft Entra ID P1 and P2 customers.
>
> **[2:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=156)** Now, many enterprise grade organizations like Walmart are leveraging Microsoft Entra ID capabilities to empower their organization-wide user sign-ins, using Microsoft Entra ID single sign-on functionality while still maintaining the security that is needed to ensure seamless login.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (13), [[Microsoft 365]] (3), management (2), [[Microsoft Entra ID|Azure active directory]] (2), [[Microsoft Entra ID|Azure ad]] (1)
> **Definitions:** known as (1), is an  (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Conditional Access policy
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=0)** - [Instructor] In this video, we would be learning about conditional access policy.
>
> **[0:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=5)** So what exactly is a conditional access policy?
>
> **[0:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=8)** In layman terms, conditional access means giving access to certain people on specific resources for a limited time duration.
>
> **[0:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=19)** Conditional access is a tool that Entra ID uses to allow or deny access to resources based on certain identity signals.
>
> **[0:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=30)** These signals include who the user is, where the user is, and what device the user is requesting the access from.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=39)** There are certain advantages of using conditional access policies.
>
> **[0:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=44)** It helps administrators empower users to be productive, it also helps protect organizational assets, and finally, it provides a more granular, multifactor authentication experience for users.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=61)** Say for instance, you have a conditional access policy enabled on your users' sign-in, and you're signing in from the same office every day.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=71)** Now, because this comes under your named location feature in Entra ID, you would not be challenged for second factor authentication as you're logging in from the same known location.
>
> **[1:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=82)** On the contrary, say you have to travel to a different city or a different country on a business trip, and you log in from that new location.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=92)** At this point, you would be challenged for a second factor authentication to ensure that you are the authorized person and that your user credentials were not compromised.
>
> **[1:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=104)** Some of the users of conditional access policies include a what-if tool.
>
> **[1:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=110)** This tool can be used to test the impact that your conditional access policy will have on different sign-in scenarios.
>
> **[1:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=118)** Basically, the what-if tool enables you to test your proposed conditional access policy before you implement them.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=125)** Conditional access policy also comes in handy when users want to enforce access to services only through approved client applications.
>
> **[2:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=135)** Example, you want to allow your users to access O365 from their office provided mobile devices only.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=145)** Conditional access can also be applied when you want to allow users to access applications only from a set of verified mobile devices.
>
> **[2:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=156)** Finally, you must note that to use conditional access feature, you either need Microsoft Entra ID P1 license, Entra ID P2 license, or a Microsoft Entra ID Governance license.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (3), [[Microsoft Office|Office]] (2), feature (2), [[Microsoft Entra ID]] (2), business (1)
> **Definitions:** is a  (2)
> **Env Vars:** o365 (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Azure governance methodologies
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=0)** - [Instructor] The term governance describes the general process of establishing rules and policies while ensuring that those rules and policies are enforced in a proper manner.
>
> **[0:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=12)** You need to have a good governance strategy to maintain control over your application and resources that are running in the cloud.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=20)** Implementing proper governance also ensures that you're compliant with industry standard regulations like PCIDSS and GDPR, et cetera, in addition to corporate standards of keeping the network data encrypted.
>
> **[0:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=37)** Azure governance is bifurcated into different components and services, namely management groups, Azure Policies, and Azure Blueprints.
>
> **[0:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=49)** Let's learn about each of these one by one, starting with the management groups.
>
> **[0:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=56)** Management groups provide a governance scope above subscriptions.
>
> **[1:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=60)** If your organization has many subscriptions, you may need a way to efficiently manage access policies and compliance for all those subscriptions.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=71)** All subscriptions within a single management group must trust the same Azure active directory tenant.
>
> **[1:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=78)** For example, you can apply policies to a management group that limits regions available for creation of a particular resource.
>
> **[1:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=88)** This policy would also be applied to all nested management groups, subscriptions, and resources, and allow the resource creation only in your specified authorized regions.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=102)** Azure Policies.
>
> **[1:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=104)** Azure Policy helps to enforce organizational standards to access compliance at scale.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=112)** It evaluates resources and actions in Azure by comparing the property of those resources to business rules.
>
> **[2:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=121)** Azure Policy also helps in determining whether a resource is compliant or not.
>
> **[2:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=129)** Next comes Azure Blueprints.
>
> **[2:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=132)** Azure Blueprints enables cloud architects and central information technology groups to define a repeatable set of Azure resources that implement and adhere to organizational standards, patterns, and requirements.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=150)** Azure Blueprints make it possible for development teams to rapidly build and start up new environments that are being built within organizations using components such as networking to speed up development and delivery.
>
> **[2:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=166)** Governance is more beneficial when you have multiple teams working in Azure while ensuring that they're compliant with organizational audit related policies.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=178)** Or, you may have multiple Azure subscriptions to be managed using Azure management groups.
>
> **[3:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=185)** It is also beneficial when you need to be compliant to certain regulatory requirements.
>
> **[3:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=192)** Azure governance also comes in handy when you need to build and scale your applications in cloud quickly while still maintaining the control.
>
> **[3:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=204)** To sum it all up, Azure governance methodologies empower your developers to focus on building innovative products and services without getting worried about the compliance related tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), management (7), cloud (3), teams (2), application (1)
> **Env Vars:** pcidss (1), gdpr (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### RBAC
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=0)** - [Instructor] Access management for cloud resources is a critical function for any organization that is using the cloud.
>
> **[0:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=7)** Azure RBAC is an authorization system built on Azure Resource Manager that provides fine grain access management to Azure resources.
>
> **[0:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=18)** RBAC allows you to create multiple roles.
>
> **[0:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=22)** Each role defines the set of work that can be performed by a user who has been assigned that role.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=29)** RBAC also allows you to segregate duties within teams to grant only the amount of access that is needed by the person to perform their jobs.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=39)** For example, a virtual machine contributor role will allow people to manage the virtual machines, but they cannot manage the linked resources to virtual machines like virtual networks or storage accounts.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=54)** Azure RBAC also helps you to manage access to Azure resources.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=61)** Let's look at a demo.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=62)** We are in the Azure portal.
>
> **[1:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=64)** Within each resource, you find an Access control IAM tab.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=69)** Here, View my access button allows you to look at the role on a particular resource that you have.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=77)** As you can see, and the owner of this VM.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=80)** Owner role grants full access to manage all resources, including the ability to assign roles in Azure RBAC.
>
> **[1:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=90)** That means I can add members from my team to have a particular set of access to this VM by clicking the Roles tab.
>
> **[1:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=99)** A role definition is a collection of permissions.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=102)** You can use the built-in roles, or you can create your own custom roles.
>
> **[1:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=108)** Against every role, you see a Name, Description, Type, Category, and a Details tab.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=117)** If you click against the View option under the Details tab, you would be redirected to the description of your selected role.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=127)** Now, let's take an example where you want your administrator of your subscription to create resources Using Terraform.
>
> **[2:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=136)** In this scenario, you can add them as a reader to your subscription.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=142)** Reader role would allow them to view the resources, but they won't be able to create any new resources from the portal.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=151)** Finally, it is important to note that while planning your access control strategy, its best practice to grant users least privileges to get their work done.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=162)** By limiting rules and scopes, you will be able to limit the security breach in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), management (2), cloud (2), [[Virtual Machines]] (2), teams (1)
> **Env Vars:** rbac (5), iam (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), terraform (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Azure Blueprints
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=0)** - [Instructor] Azure Blueprints enable quick creation of governed subscriptions.
>
> **[0:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=5)** This feature allows cloud architects to design environments that comply with organizational standards and best practices.
>
> **[0:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=14)** Azure Blueprints enable development teams to rapidly build new environments.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=20)** These blueprint definitions can be reused by developers in order to speed up the deployment and delivery process.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=29)** Blueprints are a declarative way to orchestrate the deployment of various resource templates and other artifacts, such as role assignments, policy assignments, Azure Resource Manager Templates, or ARM templates, and resource groups.
>
> **[0:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=47)** Now let's jump into the portal to look on how to create a blueprint.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=54)** So in the search bar, you search for Blueprints.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=58)** Here you see a Create button where you can go ahead and create a new blueprint.
>
> **[1:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=64)** As we are creating a blueprint, Azure gives us an option to either Start with a blank blueprint or use a predefined set of samples.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=74)** In my case, I will be creating a basic VNET blueprint to get started with.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=80)** This blueprint is defined to configure a virtual network with a subnet and an NSG.
>
> **[1:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=87)** Give a name to your blueprint.
>
> **[1:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=91)** Here you see an auto-populated description on the blueprint.
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=95)** You can also add a custom description as per your requirement, and then go to Definition location.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=102)** Definition location is nothing but the management group or subscription where the blueprint is being saved.
>
> **[1:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=110)** I'll click on this three dots and I'll choose my subscription where I want to save my blueprint.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=117)** In case you have multiple subscriptions, here, you will get an option to select a subscription of your choice, click Select.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=125)** Next, I'll go to the Artifacts section.
>
> **[2:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=130)** You can add artifacts to the blueprint.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=133)** Add resource groups to organize where the artifacts should be deployed and assigned.
>
> **[2:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=138)** I click on Add artifact.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=140)** Artifact type would be Policy assignment.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=143)** Here you can also choose Role assignment, Azure Resource Management Template, or Resource Group, which was discussed previously.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=150)** I'll give it as Policy assignment.
>
> **[2:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=154)** Under Policy assignment, I'll choose a policy assignment of configuring virtual network to enable traffic analytics.
>
> **[2:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=163)** Click on Add and then click Save Draft.
>
> **[2:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=168)** Next I go to Blueprint definition, where I see my blueprint definition has been created successfully.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=174)** Click on the blueprint definition.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=178)** Click on Publish blueprint.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=180)** Add a version, I'll select 1.0.
>
> **[3:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=185)** I'll add Change notes and click on Publish.
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=190)** On successful publishing of your blueprint, you get a notification saying NetworkBlueprint was published successfully.
>
> **[3:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=199)** It is good to know that Azure Blueprints and other Azure governance services are provided free of cost for Azure for managing your various services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Search]] (2), management (2), next (2), feature (1)
> **UI Navigation:** click on (6), go to (3)
> **Env Vars:** arm (1), vnet (1), nsg (1)
> **Versions:** 1.0 (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Azure Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=0)** - [Instructor] Azure Policy enables you to create, assign, and manage policies to control or audit your resources.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=9)** Policy provides governance and resource consistency with respect to regulatory compliance, security, cost, and management.
>
> **[0:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=19)** These policies help to enforce organizational standards and assess compliance at scale.
>
> **[0:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=27)** Azure Policy also enables you to define both individual policies and group of related policies known as initiatives.
>
> **[0:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=38)** You can assign a policy, assess the compliance, or even create a custom policy definition tailored to your environment.
>
> **[0:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=47)** In the overview section, you get to know the resources that are compliant and that are not compliant as per your environment.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=58)** We'll go to the assignment section on the left side and click on Assign a Policy.
>
> **[1:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=63)** You can also assign an initiative, which is nothing but group of related policies.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=69)** Click on Assign Policy, select a scope.
>
> **[1:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=73)** Here, you can either select a subscription or a management group.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=77)** You can optionally select a resource group as the scope of your policy and leave it as default.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=84)** Click Select.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=86)** In case you need to exclude certain resources, that can be added on the exclusion section.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=93)** Select a policy definition.
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=96)** Here I will choose virtual machines that do not use managed discs.
>
> **[1:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=101)** Click on Add.
>
> **[1:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=103)** Give a description to your policy.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=107)** Leave the policy enforcement as enabled by default.
>
> **[1:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=111)** Click on Next and leave everything under advanced parameters as default.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=117)** Click Next.
>
> **[1:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=118)** In Remediation, create a Managed Identity.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=123)** Review and create and click Create.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=127)** Your policy assignment has been created successfully.
>
> **[2:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=132)** Here you see a Compliance tab, which gives you segregated list of both compliant and non-compliant resources that are sitting within your subscriptions.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=143)** Finally, remember, Policy reduces the time needed to audit your environments by having all your compliance data in a single place.
>
> **[2:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=153)** Azure Policy let's you set guardrails throughout your resources to help ensure cloud compliance, avoid misconfigurations and practice consistent resource governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), management (2), next (2), [[Regulatory Compliance]] (1), [[Security]] (1)
> **UI Navigation:** click on (4), go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Azure resource locks
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=0)** - [Instructor] Azure Resource lock feature lets you lock an Azure subscription, resource group, or resource to protect it from accidental deletion and modification.
>
> **[0:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=12)** This lock overrides any user permissions.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=16)** There are two types of resource locks that are available in Azure.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=20)** The CanNotDelete lock allows authorized users to read and modify a resource, but they can't delete it.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=28)** The ReadOnly lock enables authorized users to read the resource, but they can't delete or update it.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=36)** When you apply a lock at the parent scope all resources within the scope inherit the same lock.
>
> **[0:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=44)** Even the resources that you add later inherit the same parent lock.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=50)** The most restrictive lock in the inheritance takes precedence.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=54)** Say, for instance, you have a delete lock applied to the virtual machine, and you are trying to delete the parent resource group where this virtual machine resides.
>
> **[1:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=64)** In this scenario, Azure blocks you from deleting the resource group as the lock takes precedence.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=71)** Individuals with owner role or user access administrator built-in roles would only be able to create or remove the locks from Azure Resources.
>
> **[1:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=83)** Let's jump into the portal and look at the process of creating locks.
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=89)** I've already created a resource group.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=93)** In the resource group under the Settings section, you see the Locks option.
>
> **[1:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=98)** Click on Add. Give a name to your lock.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=102)** Lock type can be read-only or delete as we discussed.
>
> **[1:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=109)** You can also apply a lock at subscription level.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=112)** To apply the lock at subscription level, simply click the subscription lock icon.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=117)** Click on Add.
>
> **[2:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=121)** The lock type would be read-only.
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=126)** Now you have a read-only lock at the subscription level and a delete lock at the resource group level.
>
> **[2:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=134)** Let me go ahead and show you if I want to delete this virtual machine.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=140)** I'll go to the virtual machine and click the delete icon.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=151)** You get a failed message that you're not able to delete the virtual machine as there is a delete lock applied at the subscription level.
>
> **[2:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=163)** So here you can clearly see that parent resource lock can't be edited here.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=171)** I'll just go and click on Delete.
>
> **[2:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=177)** My resource lock at the subscription level got deleted.
>
> **[3:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=181)** If I click on Delete again, the resource group lock has also been deleted.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=188)** Now, I can just simply go to the resource group, go to my virtual machine, and it will allow me to delete this virtual machine because there is no lock applied on this resource group or subscription anymore.
>
> **[3:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=208)** Here you see, I've successfully been able to delete the virtual machine.
>
> **[3:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=214)** Sometimes applying resource locks can lead to unexpected results.
>
> **[3:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=219)** Example, a read-only lock on storage account would prevent the administrators to list the storage account keys.
>
> **[3:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=227)** It would also prevent creation of blob containers within the storage accounts.
>
> **[3:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=233)** So now you know how to apply resource locks to help prevent the accidental deletion of your Azure resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), feature (1)
> **UI Navigation:** click on (4), go to (3)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Cloud Adoption Framework for Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=0)** - [Instructor] The Cloud Adoption Framework for Azure is a collection of documentation, technical guidance, best practices, and tools that aid in aligning business, organizational readiness, and technology strategies.
>
> **[0:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=17)** This alignment enables a clear and actionable journey to the cloud that rapidly delivers on desired business outcomes.
>
> **[0:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=27)** CAF provides you proven guidance to help accelerate your cloud adoption journey and implement business and technology strategies that are needed to succeed in cloud.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=39)** The Cloud Adoption Framework helps customers undertake a simplified cloud journey in three main stages, namely, plan, ready and adopt.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=50)** These three main stages are preceded by a business strategy phase and then surrounded by operations phase that expands through cloud adoption journey.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=62)** Let's begin by learning each of the stages one-by-one.
>
> **[1:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=66)** Define your strategy.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=68)** This stage helps you answer certain questions for adopting cloud, which include: why are you moving to cloud?
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=77)** What is the end goal of your cloud migration journey?
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=80)** Do you need to scale out to meet the market demands?
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=84)** Will the migration reduce your costs or increase the overall agility?
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=89)** This stage is further subdivided into four sections, namely: define and document your motivations, document your business outcomes, evaluate the financial considerations, and understand the technical considerations.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=107)** Then comes the plan phase.
>
> **[1:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=110)** This stage involves making a plan that maps to your client's aspirations and goals.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=117)** A good plan ensures that you're correctly aligning to the desired business outcome expected from the migration.
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=126)** The stage is also further subdivided into four sections, namely: digital estate, initial organizational alignment skills readiness plan, and cloud adoption plan.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=140)** Then comes the ready phase.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=143)** This stage involves creating of landing zone or an environment in cloud to begin hosting your workloads in Azure.
>
> **[2:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=153)** The stage is further subdivided into four sections: Azure setup guide, Azure landing zone, expand the landing zone, and best practices.
>
> **[2:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=165)** Once you're ready, the next phase comes, adopting the cloud.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=170)** Here, you begin to migrate your applications into the cloud.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=174)** While designing the migration strategies, there are chances that you might look into ways of modernizing your applications while building innovative solutions that use cloud services.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=187)** Cloud Adoption Framework breaks this stage into two main parts, namely: migrate and innovate.
>
> **[3:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=197)** First, let's look on the migrate section.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=201)** The migrate phase is further subdivided into four stages.
>
> **[3:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=205)** That is: migrating your first workload, then deciding the migration scenarios, working on the best practices, and working on continuous process improvements.
>
> **[3:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=218)** Next comes the innovate section in our Cloud Adoption Framework journey, which is further subdivided, again, into four sections: business value consensus, Azure innovation guide, best practices, and feedback loops.
>
> **[3:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=236)** Then comes the govern and manage your cloud environments.
>
> **[3:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=239)** This phase helps you in forming your cloud governance and cloud management strategies.
>
> **[4:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=246)** You must create resilient solutions that are constantly optimized: establish a management baseline, define the business commitments, expand the management baseline, and advance your operations and design principles.
>
> **[4:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=266)** When implemented step-by-step, the Cloud Adoption Framework helps organizations comply with several industry standards.
>
> **[4:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=275)** It further assists businesses in replicating their existing on-prem business requirement into the cloud.
>
> **[4:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=284)** Explore the Cloud Adoption Framework, which displays step-by-step guided links that will help you in your cloud adoption journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (24), business (9), [[Microsoft Azure|Azure]] (5), management (3), next (2)
> **Env Vars:** caf (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud and Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### Microsoft Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=0)** - [Instructor] Microsoft Defender for Cloud.
>
> **[0:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=3)** Defender for Cloud is a monitoring service that provides advanced threat protection across workloads hosted in Azure, other Clouds, or on the on-premise environment.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=16)** It can also be seen as cloud-native application protection platform with a set of security measures and practices that are designed to protect cloud-based applications from various cyber threats and vulnerabilities.
>
> **[0:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=30)** Defender for Cloud combines the capabilities of DevSecOps solution that unify security management at code level across multi-cloud and multiple pipeline environments.
>
> **[0:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=43)** Cloud Security Posture Management solution that surfaces actions that you can take to prevent breaches and Cloud Workload Protection Platform with specific protection for servers, containers, storage, databases, and other workloads.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=61)** Some of the major Defender for Cloud capabilities include policy compliance.
>
> **[1:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=67)** Defender for Cloud is built on top of Azure policy controls, so you can set and monitor your policies to run on management groups across subscription or even a whole tenant.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=80)** Continuous assessment providing Secure Score.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=84)** Defender for Cloud continually assesses your resources for security issues, then aggregates all the findings into a single score, so that you can tell your current security situation.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=97)** This continuous assessment feature regularly assesses for all the new and pre-deployed resources to ensure that they're properly configured as per the industry standards.
>
> **[1:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=109)** Tailor-made recommendations.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=112)** Defender for Cloud provides tailored recommendations based on existing workloads, along with the instructions on implementing this is.
>
> **[2:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=122)** Threat protection.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=123)** Defender for Cloud analyzes your workloads and raises threat prevention recommendations and security alerts.
>
> **[2:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=132)** It also helps generating the reports for threat analysis.
>
> **[2:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=137)** Get secure faster.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=139)** Being natively integrated with Azure, Defender provides inbuilt protection for Azure Resources.
>
> **[2:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=146)** Security alerts.
>
> **[2:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=148)** Defender for Cloud automatically collects, analyzes, and integrates log data from your Azure resources like Firewall and Endpoint protection to detect real threats.
>
> **[2:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=161)** Then list of prioritized security alerts is shown in Microsoft Defender for Cloud, along with the information that you need to quickly investigate and remediate an attack.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=174)** Modern applications require security awareness at the code, infrastructure, and runtime levels to make sure that deployed applications are hardened against different types of attacks.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=188)** To incorporate best security practices early during the software development or DevSecOps lifecycle, Microsoft Defender for Cloud can be a good solution.
>
> **[3:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=200)** Microsoft recommends using Defender for Cloud to protect your code management environments, code pipelines, and get insights into your development environment security posture.
>
> **[3:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=212)** Well, if you're willing to deep dive into Defender for Cloud, refer to my course on LinkedIn named "[[Securing Cloud Resources with Microsoft Defender for Cloud]]."
>
> **[3:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=224)** Go to the LinkedIn Learning and search for [[Securing Cloud Resources with Microsoft Defender for Cloud]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (22), [[Microsoft Defender|Defender]] (11), [[Security]] (11), [[Microsoft Defender]] (5), [[Microsoft Azure|Azure]] (5)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Sentinel
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=0)** - [Narrator] Microsoft Sentinel is a security information and event management solution that provides security analytics along with the capabilities of threat detection and intelligence response across an enterprise.
>
> **[0:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=15)** It is Microsoft's widely used SIEM tool.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=20)** Let us discuss about various Sentinel capabilities.
>
> **[0:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=23)** Collect cloud data at scale.
>
> **[0:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=26)** Azure Sentinel enables you to collect data across all users, devices, applications, and infrastructure, both on-prem and for your cloud environments.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=39)** Detect previously undetected threats.
>
> **[0:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=42)** Sentinel helps in minimizing false positives by using Microsoft's comprehensive analytics and threat intelligence capabilities.
>
> **[0:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=53)** Investigate threat with AI.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=55)** Azure Sentinel allows you to examine suspicious activities at scale, respond to incidents.
>
> **[1:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=63)** Sentinel uses built-in orchestration and automation of common tasks to rapidly respond to incidents.
>
> **[1:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=72)** It also supports connectivity to a number of data sources which can analyze for security events.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=79)** All these connections are handled by built-in connectors.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=84)** Let us look at some of the Azure Sentinel connectivity solutions.
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=89)** Connect Sentinel to Microsoft Solutions.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=92)** There are various connectors available that provide real-time integration for services like Microsoft Threat Protection Solution, M365, including O365, Azure AD, and Windows Defender Firewall.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=107)** Connect Sentinel to other services and solutions.
>
> **[1:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=111)** You can easily find Sentinel connectors for common non-Microsoft services and solutions, including AWS CloudTrail, Citrix Analytics, VMware Carbon Black Cloud, and Okta Single Sign-On, to name some services.
>
> **[2:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=130)** Connect Sentinel to industry standard data sources.
>
> **[2:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=134)** Azure Sentinel supports data from other sources that use common event format messaging standard, Syslog, or REST API.
>
> **[2:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=145)** Microsoft Sentinel uses built-in analytics as well as custom analytics to notify you about suspicious activities that are happening in your environment.
>
> **[2:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=156)** Built-in analytics use templates designed by Microsoft's team of security experts and analysts based on known threats, common attack vendors, and escalation chains for suspicious activities.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=171)** Some templates use machine learning behavior analytics that are based on Microsoft proprietary algorithms.
>
> **[2:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=179)** Custom analytics.
>
> **[3:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=181)** Custom analytics are the rules that you create to search for specific criteria within your environment.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=188)** You can preview the number of results that the query would generate based on your past logs and events, and set a schedule for query to run.
>
> **[3:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=199)** You can also set an alert threshold.
>
> **[3:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=202)** Finally, Microsoft Sentinel is your bird's eye view across enterprise to collect, detect, investigate, and respond to incidents and alerts.
>
> **[3:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=214)** In short, it is your one-stop shop for attack detection, threat visibility, proactive hunting, and threat response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (10), [[Analytics]] (9), data (5), [[Security]] (4), [[Microsoft Azure|Azure]] (4)
> **Env Vars:** siem (1), m365 (1), o365 (1), aws (1), rest (1)
> **CLI Commands:** find (1), aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Azure Key Vault
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=0)** - [Instructor] Key Vault fall under Azure Security Services category.
>
> **[0:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=5)** It is a centralized cloud service for safeguarding cryptographic keys and other secrets used by various cloud apps and services.
>
> **[0:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=15)** It provides secure access control and logging capabilities for various services.
>
> **[0:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=22)** In addition, Key Vault also provides logs of all access and usage attempts of your secrets, so you have a complete audit trail for compliance.
>
> **[0:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=34)** Let us look into some of the important capabilities of Azure Key Vault.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=39)** Managing secrets.
>
> **[0:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=41)** Azure Key Vault can be used to securely store and tightly control access to tokens, certificates, passwords, API keys, and other secrets.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=54)** Manage encryption keys.
>
> **[0:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=56)** Azure Key Vault can also be used as a key management solution.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=61)** Key Vault makes it easier to create and control the encryption keys that are used to encrypt your data.
>
> **[1:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=70)** Manage SSL TLS certificates.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=74)** Key Vault enables you to provision, manage, and deploy your public and private SSL TLS certificates for both your Azure as well as internal resources.
>
> **[1:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=87)** Store secret backed by hardware security modules or HSMs.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=93)** Azure Key Vault makes use of secrets and keys that can be protected either by software or FIPS level two validated HSMs.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=105)** Now let us discuss about some of the important benefits of using Azure Key Vault.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=112)** Centralized application secrets.
>
> **[1:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=115)** Azure Key Vault helps in centralizing the storage of your application secrets, enables you to control their distribution, and also reduces the chances of accidental secret leakage.
>
> **[2:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=129)** Securely stored secrets and keys.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=133)** Azure users industry standard algorithms, key lengths, and HSMs.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=140)** Access to Key Vault requires proper authentication and authorization.
>
> **[2:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=146)** Access monitoring and access control.
>
> **[2:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=149)** By using Key Vault, you can monitor and control access to your application secrets.
>
> **[2:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=157)** Simplified administration of application secrets.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=162)** Key Vault makes it easier to enroll and renew certificates from public certificate authorities.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=170)** You can also scale up and replicate entire content within regions and use standard certification management tools.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=180)** Integration with other Azure services.
>
> **[3:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=183)** You can integrate Key Vault with storage accounts, container registries, event hubs, and many more Azure services.
>
> **[3:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=192)** These services can then securely reference the secrets that are stored in your Key Vault.
>
> **[3:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=199)** Finally, to sum it all up, Azure Key Vault offers built-in comprehensive security and compliance by eliminating the need to store security information in the code and reduce the chances of secret breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (12), [[Security]] (4), application (4), cloud (2), management (2)
> **Env Vars:** ssl (2), tls (2), api (1), fips (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Azure Dedicated Host
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=0)** - [Instructor] Azure dedicated hosts allow you to host your Azure virtual machines on dedicated physical servers.
>
> **[0:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=8)** Usually, VMs on Azure run on shared hardware that is being managed by Microsoft.
>
> **[0:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=15)** However, some organizations must follow certain regulatory compliance, requiring them to be the only customer using the physical machines that host their virtual machines.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=28)** You can provision dedicated hosts within a region, availability zone and fault domain.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=36)** Then, you can place VMs directly onto your provision hosts in whatever configuration that best meets your needs.
>
> **[0:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=46)** VMs relate to a dedicated host and host group.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=50)** A host group is a collection of dedicated hosts.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=55)** A host is created within a host group.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=58)** For high availability, you can provision multiple hosts in a host group and deploy your VMs across these groups.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=68)** Let us discuss about some of the benefits of using dedicated hosts.
>
> **[1:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=73)** Reserving the entire host provides hardware isolation at physical server level.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=79)** Meaning no other VM will be placed on your dedicated host.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=84)** Dedicated hosts help address compliance requirements by deploying your workload in an isolated server.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=93)** Dedicated host also let you choose the number of processes, server capabilities, VM series, VM size within the same host.
>
> **[1:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=104)** With dedicated host, you get more control over maintenance events initiated by Azure platform.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=113)** While the majority of maintenance events have little to no impact on your virtual machines, there are some sensitive workloads where each second of pause can have an impact.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=125)** With dedicated host, you can opt in to a maintenance window to reduce the impact to your service.
>
> **[2:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=132)** As far as cost is concerned, you are charged per dedicated host, independent of how many VMs you deploy to it.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=142)** The host price is based on the VM family and type, that is hardware size and the region.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=151)** And Azure dedicated host allows your organization to establish a private cloud in Azure.
>
> **[2:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=158)** Example, in the healthcare industry, applications must meet HIPAA requirements when dealing with patient information.
>
> **[2:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=167)** So, each hospital may need to have its own dedicated host comprising of different virtual machines for maintaining patient data to meet their compliance requirements.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=180)** Dedicated hosts come in handy in this scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Virtual Machines]] (4), [[Hardware]] (3), [[Microsoft]] (1), [[Regulatory Compliance]] (1)
> **Env Vars:** hipaa (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Azure VNet and NSG
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=0)** - [Instructor] Defense in depth is a layered approach to securing the overall cloud resources by providing multiple layers of protection.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=9)** Network security group, popularly known as NSG, come in handy to filter the incoming and outgoing network traffic.
>
> **[0:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=18)** You can think of NSGs like an internal firewall.
>
> **[0:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=22)** An NSG can contain multiple inbound and outbound security rules that enable you to filter traffic to and from resources by source and destination IP address, ports and protocols.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=39)** NSGs can be associated at the NIC level of a VM.
>
> **[0:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=43)** It can also be associated to a subnet depending on the network architecture requirements.
>
> **[0:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=50)** It is also important to note that same network security group can be associated to as many subnets and network interfaces as you choose.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=61)** A network security group can contain as many rules as you need within Azure subscription limits.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=69)** Let us learn about different properties of NSGs.
>
> **[1:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=73)** Name, always try to give a unique and a meaningful name to your NSG.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=79)** Priority, you can assign a priority between hundred to 4096 where hundred takes the highest priority.
>
> **[1:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=90)** Rules are processed in the priority order with lower numbers processed before the higher numbers.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=97)** That means hundred will take the higher precedence.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=102)** Source and destination: Source and destination fields can contain a single IP address, IP address range, service tag, or an application security group.
>
> **[1:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=114)** Protocols: TCP, UDP, ICMP, or any of the available list of protocols while creating NSG.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=125)** Direction: Direction specifies whether the rule applies to inbound or the outbound traffic.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=133)** Port range, you can specify a single port, list of ports or port range to be allowed or denied.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=143)** Action: Action can be either allow the NSG rule or deny the NSG rule as per your requirements.
>
> **[2:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=152)** When you create a network security group, Azure creates a series of default rules to provide a baseline level of security.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=162)** Here, Azure creates a series of default rules to provide a baseline level of security.
>
> **[2:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=168)** You can't remove the default rules, but you can override them by creating new rules with higher priority.
>
> **[2:56](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=176)** For example, I have created an RDP allow rule with priority 300 in this case.
>
> **[3:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=184)** Finally, Microsoft recommends associating NSG to a subnet or network interface card, but not both, to avoid conflicting rule creation leading to unexpected communication issues.
>
> **[3:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=198)** With this, we come to an end of the NSG support section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (4), [[Security]] (4), traffic (3), [[Microsoft Azure|Azure]] (3), cloud (1)
> **Env Vars:** nsg (8), nic (1), tcp (1), udp (1), icmp (1)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Azure Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=0)** - [Instructor] Firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.
>
> **[0:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=14)** Azure Firewall is a managed cloud-based network security service that protects your Azure virtual network resources.
>
> **[0:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=22)** The stateful firewall service has built in high availability and unrestricted cloud scalability to help you create, enforce and log application and network connectivity policies across subscriptions and virtual networks.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=40)** Being a stateful firewall, it analyzes the complete context of a network connection and not just an individual packet of network traffic.
>
> **[0:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=51)** Let us learn about some of the important features of Azure firewall.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=55)** Threat intelligence based filtering enables Azure Firewall to generate realtime alerts and deny traffic from or to known malicious domains and IP addresses.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=69)** Azure Firewall filters both inbound and outbound traffic, internal spoke-to-spoke connections, and hybrid connections through Azure VPN and express-route gateways.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=80)** It simplifies deployment and management of network security with a scalable and highly available cloud native firewall, making it easy to deploy and scale within minutes.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=94)** Azure Firewall decrypts outbound traffic, performs required security checks, and then encrypts the traffic at the destination.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=105)** It works in conjunction with URL filtering and web categories by letting administrators allow or deny user access to website categories such as gambling or social media.
>
> **[1:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=119)** The intrusion detection and prevention system capability makes use of signatures to continuously monitor activities, generate alerts, log information, and optionally attempt to block traffic.
>
> **[2:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=134)** This is a real-time traffic inspection.
>
> **[2:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=137)** It can detect attacks in all ports and protocols for unencrypted traffic.
>
> **[2:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=144)** Encrypted traffic utilizes the TLS inspection capability for decryption.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=151)** Let us now look into some of the prominent use cases of Azure Firewall.
>
> **[2:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=157)** Azure Firewall is mainly used to protect your digital assets that are hosted in the cloud.
>
> **[2:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=164)** It is a fundamental building block for your private network that enables virtual machines and other compute resources to securely communicate with each other, the internet, and the on-premise networks.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=178)** Azure Firewall is an ideal choice when you want to protect your network against infiltration to avoid user errors while handling the payments of an e-commerce website.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=191)** Azure Firewall can also be used to establish spoke-to-spoke connectivity.
>
> **[3:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=197)** The spoke networks can exchange data with the hub, but the spokes cannot communicate directly with each other.
>
> **[3:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=204)** For example, one spoke network might host an application programming interface that requires information from a SQL database deployed in a different spoke.
>
> **[3:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=216)** In this scenario, Azure Firewall would be a secure solution to fulfill the connection requirement between your application and the database.
>
> **[3:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=227)** Azure Firewall Premium provides advanced threat protection that meets the needs of highly sensitive and regulated environments such as financial services and healthcare industries.
>
> **[4:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=241)** There are more than 58,000 signatures in more than 50 categories, which are updated in real time to protect against new and emerging exploits.
>
> **[4:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=253)** These exploit categories include malware, phishing, coin mining, and Trojan attacks.
>
> **[4:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=262)** So now you understand the importance of Azure Firewall.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), traffic (11), cloud (4), [[Network Security]] (3), application (3)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** vpn (1), url (1), tls (1), sql (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### Azure DDoS Protection
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=0)** - [Instructor] Distributed denial-of-service attacks are some of the largest availability and security concerns faced by customers who are planning to move their applications to cloud.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=11)** A DDoS attack attempts to exhaust an application's resources, making it unavailable to legitimate users.
>
> **[0:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=20)** DDoS attack can be targeted at any endpoint that is publicly reachable through internet.
>
> **[0:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=27)** These attacks overwhelm and exhaust network resources, making your applications slow or unresponsive.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=36)** So how can we protect our cloud resources from encountering DDoS attacks?
>
> **[0:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=41)** Well, Microsoft offers Azure DDoS Protection service that protects your applications by scrubbing traffic at the network edge before it can impact your service availability.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=55)** Azure DDoS Protection, combined with application design best practices, provides enhanced DDoS mitigation features to defend against DDoS attacks.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=68)** DDoS Protection uses the scale and elasticity of Microsoft's global network to bring DDoS mitigation capacity to every Azure Region.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=79)** The DDoS Protection service identifies the attackers' attempt to overwhelm the network and blocks traffic from them, ensuring that this traffic never reaches your Azure resources.
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=93)** This activity protects your Azure applications by analyzing and discarding DDoS traffic at the network edge itself before it can affect your service availability.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=105)** It is automatically tuned to help protect your specific Azure resources in a virtual network.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=112)** Protection can be enabled on any new or existing virtual network, and it requires no application or resource changes.
>
> **[2:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=123)** So now that we have a fair idea about Azure DDoS Protection, let's learn about its service tiers.
>
> **[2:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=130)** First is the Infrastructure service tier.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=133)** This service tier is automatically enabled for free of cost as a part of your Azure subscription.
>
> **[2:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=141)** The Basic service tier ensures that Azure infrastructure itself isn't affected during a large scale DDoS attack.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=150)** Next comes the Network protection.
>
> **[2:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=153)** This tier provides more mitigation capabilities tuned specifically to Azure Virtual Network Resources.
>
> **[2:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=161)** DDoS network protection is relatively easy to enable and requires no changes to your applications.
>
> **[2:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=169)** It offers an always-on traffic monitoring and real-time mitigation of common network level attacks.
>
> **[2:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=178)** DDoS IP protection is a pay-per-protected IP model.
>
> **[3:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=184)** DDoS IP protection contains the same core engineering features as DDoS network protection, but will differ in following value-added services.
>
> **[3:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=195)** DDoS rapid response support, cost production, and discount on WAF.
>
> **[3:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=202)** Let's look at the type of attacks that can be prevented using DDoS Protection Help.
>
> **[3:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=208)** First in the line comes volumetric attacks.
>
> **[3:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=212)** The goal of these attacks is to flood the network layer with a substantial amount of seemingly legitimate traffic.
>
> **[3:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=221)** DDoS Protection helps overcome such volumetric attacks.
>
> **[3:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=225)** Next comes the protocol attacks.
>
> **[3:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=228)** These attacks render a target inaccessible by exploiting a weakness in layer 3 and layer 4 protocol stack.
>
> **[3:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=237)** Application layer attacks.
>
> **[4:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=240)** These attacks target web application packets to disrupt the transmission of data between hosts.
>
> **[4:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=247)** You need a WAF to protect against layer 7 attacks.
>
> **[4:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=253)** DDoS Protection protects the WAF from volumetric and protocol attacks.
>
> **[4:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=260)** Finally, as a best practice, Microsoft recommends to set up multi-layer protection for your application using a DDoS protection plan so that you can minimize your application downtime and latency during such attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), application (6), traffic (6), [[Microsoft]] (3), cloud (2)
> **Env Vars:** waf (3)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Core Solutions and Management Tools

[↑ Back to Table of Contents](#table-of-contents)

#### Azure IoT
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=0)** - [Instructor] Internet of things or IoT refers to a collection of platform services across edge and cloud that connect, monitor, and control billions of IoT assets.
>
> **[0:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=14)** These devices are generally used for data analysis.
>
> **[0:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=19)** IoT devices include security and operating systems along with data and analytics that help businesses to build, deploy, and manage IoT applications.
>
> **[0:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=32)** When discussing about the Internet of Things, we consider how these services work together across three components, namely things, insights, and actions.
>
> **[0:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=43)** Let us look into each of this one by one.
>
> **[0:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=46)** The physical objects or things include industrial equipments, devices, or sensors that connect to the cloud persistently or intermittently.
>
> **[0:58](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=58)** Insights comprise the information collected by the things which are analyzed and turned into actionable knowledge, either by people or AI.
>
> **[1:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=71)** Actions refer to the way people respond to those insights and connect them to their businesses as well as the systems and tool they use.
>
> **[1:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=81)** Let us learn about some of the widely used products and services being offered by Azure in the field of IoT that are falling under different categories, namely, build your IoT solution, connect and manage devices, analyze and transform data, and integrate business and AI solutions.
>
> **[1:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=102)** We shall now learn about some of the most predominantly used Azure IT services in the upcoming section.
>
> **[1:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=112)** Azure IoT Hub.
>
> **[1:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=114)** Azure IoT Hub is a managed service hosted in the cloud that acts as a central message hub for bidirectional communication between an IoT application and its attached devices.
>
> **[2:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=129)** You can connect millions of devices and their backend solutions reliably and securely.
>
> **[2:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=136)** Almost any device can be connected to an IoT Hub.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=140)** IoT Hub supports several messaging patterns, including device to cloud telemetry, uploading files from devices, and request-reply methods to control your devices from the cloud.
>
> **[2:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=155)** IoT Hub also supports monitoring to help you track device creation, device connections, and device failures.
>
> **[2:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=165)** IoT Hub scales to millions of simultaneously connected devices and millions of events per second to support your IoT workloads.
>
> **[2:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=175)** Next, let us look at Azure IoT Central.
>
> **[2:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=179)** IoT Central is a fully managed global IoT SaaS solution that makes it easy to connect, monitor, and manage IoT assets at scale.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=191)** IoT Central can be used to quickly evaluate your IoT scenarios and assess the opportunities it can create for your business.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=201)** IoT Central also lets you focus your efforts on determining the business impact, thereby helping in streamlining the development of a complex and continuously evolving IoT infrastructure.
>
> **[3:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=216)** The Web UI lets you quickly connect devices, monitor device condition, create rules, and manage devices and their data throughout their lifecycle.
>
> **[3:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=228)** Once you have used IoT Central to evaluate your IoT scenario, you can then build your enterprise-ready Azure IoT solution.
>
> **[3:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=237)** Azure Sphere.
>
> **[3:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=239)** Azure Sphere is a secured, high-level application platform with built-in communication and security features for internet-connected devices.
>
> **[4:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=250)** It comprises of a secured, connected, crossover microcontroller unit, a custom high-level, Linux-based operating system, and a cloud-based security service that provides continuous renewable security.
>
> **[4:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=267)** An Azure Sphere MCU integrates real-time processing capability with the ability to run a high-level operating system.
>
> **[4:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=276)** Sphere, MCU, along with its operating system and application platform enables the creation of secured, internet-connected devices that can be updated, controlled, monitored, and maintained remotely.
>
> **[4:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=293)** Azure Sphere can also be embedded into coffee machine or even a dishwasher to automate the functionality of these machines.
>
> **[5:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=302)** Finally, it would not be wrong to say that Microsoft is one of the leading cloud providers offering so many PaaS services in the field of IoT that are helpful for connecting and managing devices at scale, delivering reliable data for business insights.
>
> **[5:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=321)** Hence, it is also one of the most accepted platforms by the Fortune 500 companies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (26), [[Microsoft Azure|Azure]] (10), cloud (7), data (5), [[Security]] (4)
> **Definitions:** is a  (3), refers to (1)
> **Env Vars:** mcu (2)
> **Speakers:** - [instructor] (1)

#### Big data and analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=0)** - [Instructor] Big data analytics refers to the methods, tools, and applications that are used to collect, process and derive insights from varied, high-volume and high-velocity datasets.
>
> **[0:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=15)** These datasets may come from variety of sources, such as web, mobile, email, social media, and networked smart devices.
>
> **[0:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=26)** The data source can range from structured to semi-structured and unstructured data.
>
> **[0:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=34)** There can be various reasons for analyzing these large amounts of data.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=39)** One of the scenarios can be looking at the older data to analyze the sales trends of an organization during the holiday seasons.
>
> **[0:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=49)** This in-depth data analysis can help the business take appropriate steps to ensure smooth functioning during peak loads.
>
> **[1:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=60)** Open-source cluster technologies have been developed over time to deal with these large datasets.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=68)** Microsoft Azure supports a broad range of technologies and services to provide big data and analytical solutions, including services that fall under different categories, ranging from big data processing, data exploration, and real-time analytics.
>
> **[1:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=89)** Let us look into some of the majorly used data analytics services being offered by Azure, starting with Azure Synapse Analytics.
>
> **[1:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=99)** Azure Synapse Analytics is a fully managed service that builds modern data warehouses for enterprises.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=107)** You can query data on your terms by using either serverless or provisioned resources at scale.
>
> **[1:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=115)** You have a unified experience to ingest, prepare, manage, and serve data for immediate business intelligence and machine learning needs.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=127)** Synapse Analytics brings together SQL, Apache Spark, Orchestration and Ingestion into a single workspace by dramatically reducing the time to build an analytics solution.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=142)** Next, let us look at Azure Databricks.
>
> **[2:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=146)** Azure Databricks is a unified set of tools for building, deploying, sharing, and maintaining enterprise-grade data solutions at scale.
>
> **[2:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=158)** It is mainly used to process, store, clean, share, analyze, model, and monetize their datasets with solutions from BI to machine learning.
>
> **[2:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=172)** Azure Databricks platform can also be used to build and deploy data engineering workflows, machine learning models, analytical dashboards, and many more things.
>
> **[3:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=185)** Azure Data Lake Analytics.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=188)** Data Lake Analytics is an on-demand analytical job service that simplifies big data.
>
> **[3:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=195)** Instead of deploying, configuring and tuning hardwares, you write queries to transform your data and extract valuable insights from it.
>
> **[3:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=206)** The analytical service can handle jobs of any scale instantly by setting the dial for how much power you need.
>
> **[3:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=215)** The best part is you only pay for your jobs when it is running, making it a cost-effective service.
>
> **[3:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=222)** This is also popularly known as an ETL service.
>
> **[3:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=227)** One of the major advantages of Data Lake Analytics is that it works with Azure Data Lake Storage Gen2 for highest performance, throughput and parallelization.
>
> **[3:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=239)** It can also work with Azure Storage Blobs, Azure SQL Database, and Azure Synapse Analytics.
>
> **[4:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=247)** Large e-commerce websites, like Myntra, are leveraging Microsoft Azure's big data and analytics platform to make sure that the site is readily accessible and consists of products based on every individual's taste.
>
> **[4:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=264)** The site also provides purchase suggestions based on the past shopping trends of their customer.
>
> **[4:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=272)** You can refer to this page to learn about the comprehensive set of solutions that turn your data into actionable insights using Microsoft Azure Analytics Services.
>
> **[4:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=285)** The best part is this page also displays a list of customers who are doing great things using Azure Analytics products.
>
> **[4:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=293)** So start your journey today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Analytics]] (13), [[Microsoft Azure|Azure]] (9), [[Big Data]] (4), [[Microsoft Azure]] (3)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Env Vars:** sql (2), etl (1)
> **CLI Commands:** apache (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Artificial intelligence and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=0)** - [Instructor] Artificial intelligence is the capability of computer system to mimic human cognitive functions such as learning and problem solving.
>
> **[0:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=10)** AI-based systems use math and logic to simulate the reasoning used by people for learning new information and decision making.
>
> **[0:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=21)** Microsoft Azure provides several AI solutions to choose from each one, depending on the problem that you're trying to solve, including Azure AI services and Machine Learning services.
>
> **[0:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=36)** Machine learning is an application of AI.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=40)** It is a process of using mathematical models of data to help a computer learn without direct instructions.
>
> **[0:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=48)** This enables a computer system to continue learning and improving on its own, based on its past experiences.
>
> **[0:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=57)** While AI and ML are very closely connected, they are not the same.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=62)** Machine learning is considered as a subset of AI.
>
> **[1:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=66)** Then how are AI and ML connected?
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=69)** An intelligent computer uses AI to think like a human and perform tasks on its own.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=77)** Whereas, machine learning focuses on how computer systems develop its intelligence.
>
> **[1:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=84)** For example, you can make use of a custom vision service to recognize images on the gender basis and then train a machine learning model to recognize whether the image is of a male or a female.
>
> **[1:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=100)** Let's look into some of the major capabilities of AI and ML.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=105)** Predictive analytics: This capability helps companies predict trends and behavioral patterns by discovering cause-and-effect relationship in the data.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=117)** Say for instance, a company wants to predict the sales of a particular stock keeping unit in the coming quarter.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=125)** Here, predictive analytics would help them to do so with procession.
>
> **[2:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=131)** Recommendation engines: With recommendation engines, companies use data analysis to recommend products that someone might be interested in.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=143)** Many e-commerce websites make use of recommendation engines to recommend suitable products for their customers.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=151)** Speech recognition and natural language understanding: Speech recognition enables a computer system to identify words and recognize meanings in written or spoken language.
>
> **[2:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=164)** This capability can be used for translating words in different languages.
>
> **[2:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=171)** Image and video processing.
>
> **[2:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=173)** This capability makes it possible for computers to recognize faces, objects, and actions in an image and video, and implement functionalities such as a visual search.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=187)** A common use case would be a person taking an image of an object and searching the results online using inbuilt AI capabilities of their smartphones.
>
> **[3:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=198)** Sentiment analysis: A computer system uses sentiment analysis to identify and categorize positive, neutral, and negative attitudes that are expressed in text.
>
> **[3:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=213)** Many organizations leverage this feature for conducting behavioral interview rounds of their candidates.
>
> **[3:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=221)** You can make your business stronger by leveraging AI and ML capabilities that are offered by Azure.
>
> **[3:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=227)** Here, you can see how customers are innovating with Azure AI.
>
> **[3:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=233)** NBA, one of the most popular sports organizations, has leveraged AI to unlock its potential and find the interesting nuggets in those billions of data points.
>
> **[4:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=245)** In the end, I would recommend make AI real for your business today across cloud and the edge by using Azure, and create your free trial account here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (14), [[Microsoft Azure|Azure]] (4), data (4), [[Predictive Analytics]] (2), [[Microsoft Products|Products]] (2)
> **CLI Commands:** make (4), find (1)
> **Analogies:** such as (2), for example (1), for instance (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** nba (1)
> **Speakers:** - [instructor] (1)

#### Serverless computing
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=0)** - [Instructor] Serverless computing is the evolution of cloud platforms in the direction of pure cloud native code.
>
> **[0:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=8)** Serverless brings developers closer to the business logic, while insulating them from infrastructure concerns.
>
> **[0:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=16)** With serverless applications, the cloud service provider automatically provisions scales and manages the infrastructure, which is required to run the code.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=28)** Although the servers are still present in the background, the tasks associated with infrastructure provisioning and management are invisible to developers.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=39)** Let us learn about some of the top benefits of using serverless computing.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=45)** Firstly, there is no infrastructure management.
>
> **[0:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=49)** Serverless computing helps team increase their productivity as the developers get to focus solely on developing the business logic and bring products to the market faster.
>
> **[1:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=61)** It allows organizations to better optimize resources and stay focused on innovation.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=68)** Dynamic scalability: With serverless computing, the infrastructure dynamically scales up and down within seconds to match the workload demands.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=79)** Faster time to market: Serverless applications reduce the operations dependency on each development cycle, thereby, increasing development teams' agility to deliver more functionality in less time.
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=95)** Efficient use of resources: Shifting to serverless technologies, helps organization reduce total cost of ownership and reallocate resources to accelerate the pace of innovation.
>
> **[1:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=109)** Boost team performance: Serverless computing helps improve teams' agility and performance by using a fully-managed platform to build, deploy, and operate applications.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=125)** Finally, it is important to understand that serverless computing requires a new way of thinking and approach to build applications and isn't the right solution for every problem.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=139)** The best way to ensure that your organization gains the maximum benefits, is by using an end-to-end serverless platform that provides a comprehensive set of serverless technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (6), cloud (3), business (2), management (2), teams (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Azure Advisor
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=0)** - [Instructor] In this video, we'll learn about one of the most important offerings of Azure, which is popularly known as Azure Advisor.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=9)** Advisor is a personalized cloud consultant that helps you follow best practices to optimize your Azure deployments.
>
> **[0:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=17)** It analyzes your resource configuration and usage telemetry, and then recommend solutions that can help you improve the cost effectiveness, performance, reliability, and security of your Azure resources.
>
> **[0:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=33)** Advisor gives you proactive, actionable, and personalized best practice recommendations.
>
> **[0:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=40)** It helps in improving the performance, security, and reliability of your resources as you identify opportunities to reduce your overall Azure spend.
>
> **[0:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=52)** Advisor also offers different recommendations with proposed actions based on the workloads present in your subscription.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=62)** Let's jump into the portal and learn more about Azure Advisor.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=68)** The Advisor dashboard displays personalized recommendations for all your subscriptions.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=74)** You can apply filters to display recommendations for specific subscriptions and resource types.
>
> **[1:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=82)** Here I only have one subscription, but you can apply filters for your subscriptions.
>
> **[1:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=88)** The recommendations are divided into five sections, namely, cost, security, reliability, operational excellence, and performance.
>
> **[1:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=101)** Right now we don't have any cost recommendations, security recommendations, but we have a reliability recommendation.
>
> **[1:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=111)** Reliability, what's formally known as high availability, and this feature helps in improving the continuity of your business critical applications.
>
> **[2:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=120)** You can get reliability recommendations on the reliability tab of Azure Advisor.
>
> **[2:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=126)** Here we see one reliability recommendation that is aimed to prevent outbound connection failures with NAT Gateway.
>
> **[2:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=135)** For operational excellence, again, we do not have any recommendations in my subscription and all our resources are running on optimal performance.
>
> **[2:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=146)** The recommendation section under the concepts give you more visibility on Azure Advisor recommendations.
>
> **[2:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=154)** One of the important point about Azure Advisor is that it runs automatically in the background to find newly created resources.
>
> **[2:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=164)** It takes up to 24 hours to provide recommendation on those newly created resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Security]] (4), [[Operational Excellence]] (2), cloud (1), feature (1)
> **Definitions:** known as (2), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** nat (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Azure Monitor
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=0)** - [Instructor] Modern software systems running in the cloud can become complex to monitor.
>
> **[0:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=5)** Gaining visibility into health and performance of your application can be really challenging.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=11)** Fortunately, Microsoft offers a number of solutions that can help you react quickly to outages, research about intermittent issues, optimize your usage, and also help you in proactively handling future planned downtime.
>
> **[0:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=28)** Azure Monitor is one such comprehensive monitoring solution for collecting, analyzing, and responding to telemetry from your cloud and hybrid environments.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=39)** You can use Azure Monitor to maximize the availability and performance of your applications and services.
>
> **[0:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=47)** Let's look at the Azure Monitor service at a glance.
>
> **[0:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=52)** In the overview, you can see Azure Monitor provides application insights, container insights, VM insights, and network insights.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=62)** It also helps in detection, triage, and diagnosis of various alerts and metrics.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=68)** Let's look into creating charts to monitor and investigate the usage and performance of your Azure resources using the metrics.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=77)** I'll select subscription level.
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=79)** For resource type, I'll select virtual machine that is hosted in East US location and click on apply.
>
> **[1:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=88)** Under metrics, I'll select percentage CPU and average as aggregation.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=94)** So here you see there are two virtual machines hosted in East US location in my subscription, and I'm getting the CPU utilization for both these virtual machines for last 24 hours.
>
> **[1:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=106)** You can also change time here according to your requirement.
>
> **[1:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=110)** You can customize the time or choose a duration as per your requirement.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=117)** Let us look into some of the important uses of Azure Monitor.
>
> **[2:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=122)** It can be a perfect monitoring solution for various industries that are using cloud.
>
> **[2:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=127)** They can analyze the root cause of various intermittent issues being faced by their business.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=133)** Azure Monitor helps you gain insights into application performance at a high level.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=139)** You can also deep dive into specific issues on need basis.
>
> **[2:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=143)** To learn more about Azure Monitor, you can go to the free training that is provided by Microsoft to learn in depth about Azure Monitor and all its related services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), cloud (3), application (3), [[Microsoft]] (2), [[Virtual Machines]] (2)
> **Env Vars:** cpu (2)
> **UI Navigation:** click on (1), go to (1)
> **Speakers:** - [instructor] (1)


### 6. Planning and Cost Management

[↑ Back to Table of Contents](#table-of-contents)

#### Azure pricing calculator
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=0)** - [Instructor] The Azure pricing calculator, can help you understand the cost of moving workloads through Azure.
>
> **[0:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=7)** Pricing calculator also displays the price of different configurations of Azure services.
>
> **[0:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=14)** This calculator is capable of providing an estimate of a complete solution, using a combination of Azure services, thereby helping organizations in taking an informed decision, while considering a shift to cloud, or while expanding their presence in Azure.
>
> **[0:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=35)** Let us look at some of the ways to calculate estimate cost for running different types of workloads in cloud, using Azure pricing calculator link.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=45)** This is the pricing calculator page where you can choose a product to include it in your estimate.
>
> **[0:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=52)** We'll start with the virtual machine.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=55)** By clicking on the virtual machine, you get a hyperlink.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=62)** Click on the view hyperlink to view the cost.
>
> **[1:06](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=66)** Select a region of your preference and leave it as default.
>
> **[1:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=70)** You can choose between Windows or Linux operating system.
>
> **[1:15](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=75)** Do you want the cost of operating system only, BizTalk or a SQL Server?
>
> **[1:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=79)** I'll leave it as default.
>
> **[1:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=81)** The tier can be basic or standard.
>
> **[1:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=83)** I'll leave it as standard.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=86)** Under category, is your VM compute-optimized, general purpose, GPU, high-performance compute, memory-optimized, or storage-optimized?
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=97)** I'll choose as memory-optimized.
>
> **[1:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=100)** Pick from a series of instances, I'll choose Dv2-series.
>
> **[1:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=106)** And there are a list of instances for Dv2-series.
>
> **[1:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=109)** So I'll pick D12 v2.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=113)** Number of virtual machines that you want to run for your solutions, I'll make it as two.
>
> **[1:59](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=119)** And you can choose either per day cost, monthly cost, or hourly cost.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=125)** I'll make it as one month.
>
> **[2:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=130)** Do you want the license cost included, or do you already have a license?
>
> **[2:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=136)** If you have your license, you can choose Azure Hybrid Benefit.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=139)** So I'll choose license included.
>
> **[2:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=142)** You can choose either saving plan or reserved instance.
>
> **[2:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=148)** Make a note that you cannot choose both at the same time.
>
> **[2:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=152)** So if I reserve the instance of this virtual machine, this is the cost that I'm getting.
>
> **[2:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=157)** You can include the number of discs that you want.
>
> **[2:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=162)** I'll choose a standard SSD.
>
> **[2:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=164)** The redundancy would be LRS and I'll choose one disk.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=170)** You can add storage transactions and bandwidth as well.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=174)** So this is the monthly upfront cost that you would be paying for reserving two VMs for one year.
>
> **[3:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=182)** Here, you also get an option to change the currency of the price.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=187)** So you can either choose one of the regions where you're living in and the currency would be displayed in your local amount.
>
> **[3:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=198)** Leave it as default.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=201)** Here, you get a sign-in option where you can sign in using your own subscription to get the pricing details as per the subscription that you're using.
>
> **[3:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=211)** So I'll pick my subscription over here, give my password and click on sign in.
>
> **[3:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=220)** Once I've logged in with my account, here, it gives my account details.
>
> **[3:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=225)** You can also get an estimate for running an entire solution in the cloud.
>
> **[3:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=231)** For your convenience, Azure pricing calculator provides some example scenarios.
>
> **[3:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=237)** Say for instance, we will be taking advanced analytics on big data and click on add to estimate.
>
> **[4:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=247)** So here, you see, the cost of running an entire solution in Azure on a monthly basis, which comes out to be $24,051 and 57 cents, including Azure services like Azure Synapse Analytics, Azure Analytics Services, Power BI, storage accounts and Azure Cosmos DB.
>
> **[4:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=270)** I hope this gives a fair idea about using one of the most important costing tools, offered by Azure, which is the pricing calculator.
>
> **[4:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=281)** One thing that you need to remember, is prices are estimates only and are not intended as actual price quotes.
>
> **[4:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=289)** Actual price may vary depending on the type of agreement that your organization has with Microsoft, the date of purchase and the currency exchange rates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), cloud (3), [[Analytics]] (3), product (1), [[Windows]] (1)
> **Env Vars:** sql (1), gpu (1), d12 (1), ssd (1), lrs (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (3)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Total Cost of Ownership Calculator
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=0)** - [Instructor] Azure's Total Cost Of Running Calculator, popularly known as TCO Calculator, helps you estimate the cost saving of operating your solution on Azure over time when compared to operating the same solution in an on-premise data center.
>
> **[0:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=18)** These costs include electricity, network maintenance, storage, database, IT labor, and other miscellaneous costs.
>
> **[0:29](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=29)** Let us open the TCO page and look for the potential costs that can be saved by moving your on-prem workloads to Azure.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=39)** The very first thing that you do after signing into a TCO calculator is to sign in using your Microsoft Azure account.
>
> **[0:51](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=51)** Enter the details of your on-premise server infrastructure.
>
> **[0:55](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=55)** I'll add test workload.
>
> **[0:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=57)** Is it a Windows or Linux server or a web application?
>
> **[1:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=60)** I'll make it as Windows Linux server.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=62)** I have physical servers, not virtual machines running in my data center.
>
> **[1:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=67)** Operating system is Windows.
>
> **[1:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=69)** System license is data center license.
>
> **[1:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=72)** The number of servers I will leave it as 20.
>
> **[1:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=76)** Processors per server is three processors per server.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=80)** Course per processor would be eight, it's an eight core processor.
>
> **[1:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=87)** The RAM, amount of memory per server, that's eight GBs.
>
> **[1:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=92)** Is it CPU optimized or memory optimized?
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=95)** My servers are CPU optimized.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=97)** I do not have a graphic processing unit.
>
> **[1:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=100)** Similarly, you can add details of your database, storage, network, and other components.
>
> **[1:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=108)** Click on next.
>
> **[1:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=110)** You can choose your currency based on your location.
>
> **[1:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=113)** So I'll leave it as United States by default.
>
> **[1:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=117)** The adjust assumptions page takes into the account the storage cost, IT labor cost, and other assumptions if you have, maybe hardware cost, software cost, electricity cost, virtualization cost, data center cost, network cost, database cost, data warehouse cost.
>
> **[2:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=138)** I'll click on next.
>
> **[2:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=140)** So over five years of time, I will be saving this much amount of money by migrating my on-premises workload to Azure.
>
> **[2:30](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=150)** So here this representation is also shown in a graph formation, over the next five years.
>
> **[2:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=160)** Azure TCO Calculator also gives an option to upload your on-premise resource data in bulk, which can be done in three easy steps.
>
> **[2:50](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=170)** Download the TCO calculator bulk upload template.
>
> **[2:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=174)** Enter your on-premise information in the four tabs that would be provided in the Excel that that you have downloaded, and upload your Excel into the TCO calculator.
>
> **[3:04](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=184)** You can drop your files here.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=187)** To summarize, TCO calculator is an important tool that helps businesses in estimating the cost saving by migrating their on-prem workloads to Azure over a given period of time.
>
> **[3:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=200)** I hope you found this video helpful, thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), data (6), database (3), [[Windows]] (3), next (3)
> **Env Vars:** tco (7), cpu (2), ram (1)
> **UI Navigation:** click on (2), open the (1)
> **Exercise Files:** download the (1), template (1)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Factors affecting cost
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=0)** - [Instructor] At some point in the cloud journey, everyone hears about the need to optimize cloud spendings so as to increase the profit margin.
>
> **[0:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=9)** You need to have visibility into your costs, both historical as well as the projected costs.
>
> **[0:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=17)** Here we will look into eight ways to optimize your Azure costs so that you can do more with less, increase efficiency, reduce costs, and drive innovation with Azure.
>
> **[0:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=32)** Good way to begin is to follow Azure Advisor best practice recommendations for cost saving.
>
> **[0:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=39)** Let us look at each of these techniques one by one.
>
> **[0:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=43)** Shut down unused resources.
>
> **[0:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=45)** Identify idle virtual machines, express route circuits, and other resources which are lying idle.
>
> **[0:54](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=54)** Get recommendations from Azure advisors and shut down these unused resources after consulting your business.
>
> **[1:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=62)** Right size underused resources.
>
> **[1:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=65)** Look at the past six months resource utilization and decide upon the needed size of your resources.
>
> **[1:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=74)** You may downsize the resources and this will help you save some extra bucks.
>
> **[1:20](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=80)** Add an Azure saving plan for compute and dynamic workloads.
>
> **[1:26](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=86)** Azure saving plan helps you save up to 60% of pay-as-you-go pricing when you commit to spend a fixed hourly amount on compute services for one or three years.
>
> **[1:39](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=99)** Reserve instances.
>
> **[1:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=101)** Reserve prices for workloads for one year or three year, depending on your usage commitment, and you will get discounts up to 72% over pay-as-you-go pricing on Azure services when you prepay for over one or three-year term using the reservation instance.
>
> **[2:02](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=122)** Take advantage of Azure Hybrid Benefits.
>
> **[2:05](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=125)** AWS is five times as expensive when compared to Azure for Windows and SQL servers.
>
> **[2:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=133)** To be specific, if you have already purchased license for Windows and SQL Server on-prem, you can bring those licenses in Azure Cloud, take advantage of hybrid benefits, and save big when you migrate your on-premise workloads to Azure.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=151)** Also, when you are creating a new resource or a new virtual machine, you get an option to check the box, Hybrid Benefits, which will help you save the license cost.
>
> **[2:43](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=163)** Configure autoscaling.
>
> **[2:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=165)** It is a good practice to configure autoscaling.
>
> **[2:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=168)** This lets you save by dynamically allocating and de-allocating resources to match your performance needs.
>
> **[2:57](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=177)** Choose the right Azure compute Service.
>
> **[3:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=180)** Azure offers many ways to host your code, operate most cost efficient service by selecting the right compute for your application.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=191)** Set up budgets.
>
> **[3:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=193)** Create and manage budgets for your Azure resources that are used by your organizations.
>
> **[3:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=199)** You'll automatically get alerted when you go over your set budget.
>
> **[3:24](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=204)** You can also set budget alerts on consuming a specific amount of your allocated budget so that you can keep a check on your spending.
>
> **[3:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=214)** Finally, you'll find a lot of success stories where customers gained significant benefits like enterprise-wide awareness and best cost management processes by using the guidelines.
>
> **[3:48](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=228)** So this page precisely shows you the customer success stories who have used the cost optimization pillar of Cloud Adoption Framework from Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), cloud (4), [[Windows]] (2), [[Virtual Machines]] (1), express (1)
> **Prerequisites:** configure (2), you need to have (1), set up (1)
> **Env Vars:** sql (2), aws (1)
> **CLI Commands:** aws (1), find (1)
> **Best Practices:** best practice (1), good practice (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Azure SLAs
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=0)** - [Instructor] In today's digital world, many organizations are looking at cloud technologies to improve business operations and support growth into new markets.
>
> **[0:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=11)** Moving to the cloud removes the burden of supporting IT infrastructure.
>
> **[0:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=17)** When network connectivity is lost or a hard drive fails, you rely on the cloud provider to restore that service.
>
> **[0:25](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=25)** Company no longer has any control over continuity of service.
>
> **[0:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=31)** This is where the service level agreement, popularly known as SLA, kicks in.
>
> **[0:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=38)** But what exactly is SLA?
>
> **[0:41](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=41)** Well, SLA is a formal agreement between a service company and a customer, describing cloud service provider's commitment for uptime and connectivity.
>
> **[0:53](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=53)** Understanding this SLA is important as it helps understand what kind of a service continuity can the customer expect.
>
> **[1:03](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=63)** Each Azure service defines its own SLA.
>
> **[1:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=68)** Azure's SLAs are represented as a percentage related to the service or application availability.
>
> **[1:17](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=77)** This availability is also known as uptime.
>
> **[1:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=81)** If the service was always available to use, you can say it was 100% available, or it had 100% uptime.
>
> **[1:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=91)** SLAs closely relate to the service downtime, that is, the duration for which the service unavailable, and the service credits that you might be entitled to if the SLA is not met.
>
> **[1:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=105)** Service credits.
>
> **[1:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=107)** What are service credits?
>
> **[1:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=109)** Well, service credit is the percentage of fees you paid that is credited back to you when an Azure service fails to perform to its specification.
>
> **[2:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=121)** For example, you might receive a discount on your Azure bill as compensation when a service fails to perform according to its SLA.
>
> **[2:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=131)** In reality, 100% SLA is difficult to achieve as it does not leave much room for maintenance.
>
> **[2:19](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=139)** Moreover, it would require duplicating every single component in case one of the components fail.
>
> **[2:27](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=147)** For these reasons, SLAs have 99%, 99.9%, 99.95%,
>
> **[2:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=156)** and 99.99% availability.
>
> **[2:40](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=160)** Here's the table to give you a sense of how total downtime decreases as the SLA percentage increases from 99% to 99.999%.
>
> **[2:52](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=172)** So this table gives you SLA percentage, downtime per week, downtime per month, and downtime per year duration.
>
> **[3:01](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=181)** So you see, when the SLA moves from 99 to 99.999%, the downtime per week reduces from 1.68 hours to just six seconds.
>
> **[3:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=194)** Each Azure service defines its own SLA.
>
> **[3:18](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=198)** Azure services are organized by category.
>
> **[3:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=201)** Furthermore, you do not need any Azure subscription to review your service SLAs.
>
> **[3:28](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=208)** To learn more details about SLAs, refer to the Microsoft Learn module, which gives you an overview of choosing the right Azure service by examining SLAs and service lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), cloud (4), business (1), application (1), [[Microsoft]] (1)
> **Env Vars:** sla (12)
> **Versions:** 99.999 (2), 99.9 (1), 99.95 (1), 99.99 (1), 1.68 (1)
> **Definitions:** known as (2), is a  (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Stuti Kaushal]]

## Resources

- Exercise files available

## Skills Covered

- Cloud Services
- Microsoft Azure

## Path Context

### In [[Azure Administration for Beginners- Management Tools, Services, and Security]]
← [[Azure Understanding The Big Picture]] | **2 of 5** | [[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]] →

## Appears In

- [[Azure Administration for Beginners- Management Tools, Services, and Security]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)