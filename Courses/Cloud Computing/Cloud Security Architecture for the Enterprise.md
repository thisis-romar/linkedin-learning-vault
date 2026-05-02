---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: cloud-security-architecture-for-the-enterprise-24395220
url: "https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220"
duration_minutes: 76
duration: 1h 16m
level: Advanced
updated: 7/11/2025
learners: 38051
skills:
  - Enterprise Architecture
  - Cloud Security
  - Identity and Access Management (IAM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEXGp8d9-Sy6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722548383745?e=2147483647&amp;v=beta&amp;t=iZSQ2GYGv6uLrwylOKHSesaJsXFcY5o03UAczmqQc3Y"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Build an Enterprise Cloud Architecture]]'
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
  - '[[Identity and Access Management in Azure]]'
prev_courses:
  - '[[Cloud Architecture- Advanced Concepts]]'
  - '[[Cloud Architecture- Design Decisions]]'
  - '[[Azure for Architects- Security and Identity Management with Microsoft Entra]]'
next_courses:
  - '[[Building a Cloud Architecture Diagram]]'
  - '[[Planning a Multicloud Solution (2022)]]'
  - null
path_nav: '[{"path":"Build an Enterprise Cloud Architecture","position":3,"total":4,"prev":"Cloud Architecture- Advanced Concepts","next":"Building a Cloud Architecture Diagram"},{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":5,"total":9,"prev":"Cloud Architecture- Design Decisions","next":"Planning a Multicloud Solution (2022)"},{"path":"Identity and Access Management in Azure","position":4,"total":4,"prev":"Azure for Architects- Security and Identity Management with Microsoft Entra","next":null}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/enterprise-architecture
  - skill/cloud-security
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Security%20Architecture%20for%20the%20Enterprise.md)

![Cloud Security Architecture for the Enterprise](https://media.licdn.com/dms/image/v2/D560DAQEXGp8d9-Sy6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722548383745?e=2147483647&amp;v=beta&amp;t=iZSQ2GYGv6uLrwylOKHSesaJsXFcY5o03UAczmqQc3Y)

# Cloud Security Architecture for the Enterprise

> In this course, cybersecurity expert Karl Ots covers the core design pillars of a strong cloud security architecture, taking a vendor-agnostic look at what should be built into a cloud security architecture and why. Karl covers topics that include exploring cloud compliance monitoring solutions, translating existing security architecture into cloud security architecture, constructing custom shared

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220) | 1h 16m | Advanced | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Importance of cloud security architecture](#importance-of-cloud-security-architecture)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Cloud Security Architecture**](#1-introduction-to-cloud-security-architecture) (4 videos)
  - [Cloud security architecture components](#cloud-security-architecture-components)
  - [Shared responsibility model](#shared-responsibility-model)
  - [Cloud security frameworks](#cloud-security-frameworks)
  - [Multicloud security architecture](#multicloud-security-architecture)
- [**2. Identity and Access Management**](#2-identity-and-access-management) (6 videos)
  - [Cloud identity providers](#cloud-identity-providers)
  - [Control plane authorization](#control-plane-authorization)
  - [Data plane authorization](#data-plane-authorization)
  - [Cloud permission creep](#cloud-permission-creep)
  - [Cloud Infrastructure Entitlement Management (CIEM)](#cloud-infrastructure-entitlement-management-ciem)
  - [Zero Trust identity architecture](#zero-trust-identity-architecture)
- [**3. Logging and Monitoring**](#3-logging-and-monitoring) (6 videos)
  - [Cloud security posture monitoring](#cloud-security-posture-monitoring)
  - [Cloud-native application protection (CNAPP)](#cloud-native-application-protection-cnapp)
  - [Cloud compliance monitoring](#cloud-compliance-monitoring)
  - [Cloud-native incident management](#cloud-native-incident-management)
  - [Logging and monitoring architecture](#logging-and-monitoring-architecture)
  - [Cloud drift detection](#cloud-drift-detection)
- [**4. Cloud Network Security**](#4-cloud-network-security) (4 videos)
  - [IaaS network controls](#iaas-network-controls)
  - [PaaS network controls](#paas-network-controls)
  - [Zero Trust cloud network security architecture](#zero-trust-cloud-network-security-architecture)
  - [Securing multicloud networks](#securing-multicloud-networks)
- [**5. Communicating Across Teams**](#5-communicating-across-teams) (3 videos)
  - [Effective communication of cloud security designs](#effective-communication-of-cloud-security-designs)
  - [Tailoring technical communication for different stakeholders](#tailoring-technical-communication-for-different-stakeholders)
  - [Documenting architectural decisions](#documenting-architectural-decisions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about cloud security architecture](#learning-more-about-cloud-security-architecture)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Importance of cloud security architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=0)** - Let me ask you a question.
>
> **[0:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=2)** Did you know one of the most common reasons for a data breech are cloud security misconfigurations, but you can stay on top of them by building security in your cloud rather than bolting security on your cloud.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=15)** Hello, I'm Karl Ots.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=17)** I've helped thousands of people secure their public clouds, and I'd like to help you too.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=23)** I'll walk you through the core pillars of designing a cloud security architecture in a cloud agnostic way, using examples from all three leading cloud providers.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=32)** I'll also cover what your cloud security architecture should include and why.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=38)** This means making sure that you get to a secure state, stay in a secure state, and prove that you're in a secure state.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=45)** Want to learn more about cloud security architecture?
>
> **[0:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=48)** Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (8), [[Security]] (6), data (1)
> **Speakers:** - let (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=0)** - [Karl] This course is intended mainly for a security audience.
>
> **[0:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=4)** You might be a seasoned security professional who wants a comprehensive picture of the public cloud security, but you can also benefit from this course if you are a cloud solution architect looking at improving your security skills.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=17)** The course covers a wide variety of topics across multiple clouds.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=21)** To get most out of this course, you should have a working knowledge of at least one major public cloud platform, AWS, Azure, or Google Cloud.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=30)** You should also have at least beginner-level understanding of key cloud security principles.
>
> **[0:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=35)** If you want to take a beginner cloud security course first, check out the Learning Cloud Computing Cloud Security course in the LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (7), cloud (7), aws (1), [[Microsoft Azure|Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** picture (1)
> **Speakers:** - [karl] (1)


### 1. Introduction to Cloud Security Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud security architecture components
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=0)** - [Instructor] Designing your cloud security architecture requires a careful balancing act between the brave new world of cloud and the existing internal and external security requirements.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=12)** On the left side, we have the allure of improvements to the time to market and the low barriers of entry to the so-called shadow cloud.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=20)** On the right side, we have the longstanding technical debt to update our security requirements from the network paradigm era to the cloud world, and we must also consider the perceptions towards the chief information security office.
>
> **[0:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=34)** This is not a realistic figure, of course.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=36)** These weights are not evenly balanced in real world.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=39)** I would like to get the scale steep towards the requirements on the right, but in many organizations, I see the left side over-weighing the right.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=47)** If your controls disrupt and slow down the cloud adoption journey, your business and application development counterparts might turn to shadow cloud.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=56)** That is, they will provision their own cloud accounts or subscriptions and even connect them with your existing environment, such as network, identity, and public domains.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=66)** These differences eventually require a shift in how you implement security architecture.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=72)** Rather than bolting existing controls, tools, and processes on the cloud workloads, you have an opportunity to build security into the very cloud platform that your workloads are hosted in.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=85)** The core question you need to answer in your cloud adoption journey will thus be, how can we agree on a security architecture that keeps us both competitive and secure?
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=95)** This brings us to the definition of cloud security architecture.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=99)** At its core, cloud security architecture is a list of security controls and policies that apply to the cloud computing platform that you're using.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=107)** Cloud security architecture can apply to infrastructure, platform, or even Software as a Service.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=113)** In this course, we are mostly leaving Software as a Service untouched and rather focused on infrastructure and Platform as a Service.
>
> **[2:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=121)** Controls, sometimes called countermeasures or safeguards, are actions we will take to protect our environment.
>
> **[2:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=128)** Examples of controls include which type of encryption needs to be applied to protect our sensitive data or requiring just-in-time access for administrative actions.
>
> **[2:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=138)** Policies and standards cover acceptable use of cloud services, such as which type of data can you store in the cloud.
>
> **[2:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=145)** These controls and policies should be selected based on identified risks to the confidentiality, integrity, and availability of the assets that you are protecting.
>
> **[2:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=155)** The role of the architecture is to integrate these sometimes conflicting requirements.
>
> **[2:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=160)** Crucially, a cloud security architecture is unique to your organization as it helps you maintain the risk posture that is appropriate to you.
>
> **[2:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=169)** Each organization has a different risk environment, posture, and appetite.
>
> **[2:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=173)** With a well-defined cloud security architecture, you are able to select a Goldilocks scenario, selecting the right controls to be implemented at the right place at the right cost.
>
> **[3:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=184)** To implement a cloud security architecture, conceptualize the required components as reusable and modular architecture components.
>
> **[3:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=192)** Landing zone is your secure cloud platform.
>
> **[3:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=195)** This is where you enforce security controls to keep your cloud products in their secure state.
>
> **[3:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=201)** There can be multiple landing zones in your environment.
>
> **[3:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=204)** For example, migrated legacy applications might stay within a centrally managed landing zone within a spoke of centrally managed network.
>
> **[3:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=213)** And by contrast, new and experimental workloads might stay within a separate landing zone with more freedom to achieve fast time-to-market objectives, but offering less integration to shared services, such as networks.
>
> **[3:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=227)** The secure landing zone components include identity and access management, monitoring, and network controls.
>
> **[3:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=234)** Workloads or applications are typically a collection of one or more cloud services, and depending on platform controls, these can be manually provisioned cloud services through the portal or console or instances of internal products.
>
> **[4:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=249)** Products are your enterprise's internal artifacts for cloud services.
>
> **[4:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=254)** They're pre-configured to include the organization-required controls.
>
> **[4:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=258)** Typically, these are Infrastructure as Code artifacts, such as Azure Resource Manager templates, CloudFormation templates, or Terraform modules.
>
> **[4:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=267)** The products should be built following the secure software development practices, such as code reviews, [[Static Application Security Testing]], and quality gates.
>
> **[4:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=276)** The products can be developed centrally.
>
> **[4:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=279)** Typically, that will be the role of a cloud center of excellence, but developing these templates can be a federated effort in your organization.
>
> **[4:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=287)** If one team has already solved this once, they can contribute these artifacts back to the central repository to be used by others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (25), [[Security]] (16), [[Microsoft Products|Products]] (5), [[SaaS|Software as a service]] (2), data (2)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** terraform (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Shared responsibility model
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=0)** - [Instructor] As with any other paradigm-shifting technology, securing the public cloud is not as simple as extending or replicating existing security controls.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=10)** There are several technical limitations, such as the changes in the network perimeter or the host-isolation models.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=17)** Some changes are required because business units and application development teams are choosing the cloud due to flexibility, faster time to market, or access to technologies that are not available in existing hosting platforms and technology stacks.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=32)** This comes with a set of new skills everyone needs to learn across business, development, operations, and security.
>
> **[0:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=40)** Some of these new risks, controls, and skills are interchangeable across clouds.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=46)** But not all clouds are equal, and the cost of implementing each control varies across them.
>
> **[0:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=52)** You should carefully evaluate the impact of any changes to your security posture with the introduction of new cloud service providers.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=60)** These differences eventually require a shift in how you implement security architecture.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=65)** Rather than bolting existing controls, tools, and processes on top of cloud workloads, you have a unique opportunity to build security into the very platform that workloads are hosted in.
>
> **[1:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=78)** To secure a public cloud platform, we need to understand each of them in detail.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=83)** This requires both upskilling existing information security teams with cloud expertise, and changing the way security responsibilities are assigned to customers and cloud service providers.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=95)** Cloud security responsibilities are shared across various cloud service models, software as a service, or SaaS, platform as a service, or PaaS, infrastructure as a service, IaaS, and finally on-premises computing, or your own data center.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=112)** As we move from on-premises to IaaS and further up in the cloud model abstractions, we give up control of configuring and operating said services.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=122)** As we give up control, the CSP, cloud service provider, assumes that responsibility of securing these services.
>
> **[2:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=130)** A common misconception related to cloud security is rooted in incorrectly understanding these shared responsibilities.
>
> **[2:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=138)** This can lead to omissions of key security controls, and drastically impact your cloud security architecture.
>
> **[2:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=145)** Therefore, I recommend you explicitly map out the shared responsibility of every cloud service you are using.
>
> **[2:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=152)** Here's an example using managed Kubernetes services, such as Amazon EKS, Azure AKS, or Google GKE.
>
> **[2:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=161)** These services are partially managed by cloud vendors, but they are not provided as full platform as a service.
>
> **[2:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=168)** The cloud service providers are responsible for creating, configuring, and operating the Kubernetes control plane of your Kubernetes environment.
>
> **[2:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=176)** This includes Kubernetes API servers, etcd, kube-DNS, and other system components in the kube-system namespace.
>
> **[3:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=186)** You are still responsible for significant parts of your Kubernetes service, such as access control, in-cluster network controls, and patching of virtual machine nodes against vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (16), [[Security]] (11), [[Kubernetes]] (5), business (2), teams (2)
> **Env Vars:** csp (1), eks (1), aks (1), gke (1), api (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### Cloud security frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=0)** - To secure your cloud applications and infrastructure in a structured manner, you need a cloud security framework.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=8)** A cloud security framework consists of architectural design considerations, security policies and controls.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=15)** Your cloud security framework needs to be consistent with your existing security architecture.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=21)** Your cloud security framework is heavily influenced by your organization's cloud strategy and governance models.
>
> **[0:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=28)** For example, if your cloud strategy is all about enabling innovation and faster time to market, your cloud security framework will need to enable that, and it has to work together with any external requirements, such as from customers or regulators.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=45)** You will continue to need to meet internal and external compliance requirements.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=50)** Translating these requirements into controls or moving from periodic to continuous compliance assurance takes time and effort.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=59)** You may use any existing control frameworks to get started building your own cloud security framework.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=65)** Some control frameworks include the National Institute of Standards and Technologies Cyber Security Framework, Center for Internet Securities Critical Security Controls, and Cloud Security Alliances, Cloud Controls Matrix.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=80)** Each of these control frameworks also provides cross-references to many industry or region-specific control frameworks.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=88)** So it's a good idea to use these control frameworks to understand how your chosen controls mapped to your existing internal business requirements.
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=98)** But bear in mind that simply following a control framework doesn't mean you are done with security.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=104)** You need to select the appropriate controls for your cloud security framework according to your organization's risk appetite.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=112)** The Center for Internet Security or CIS also publishes its benchmarks for the large cloud service providers.
>
> **[2:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=120)** While the CIS controls are a general set of recommended best practices, CIS benchmarks are hardening guidelines.
>
> **[2:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=127)** The CIS benchmarks for AWS Google Cloud or Microsoft Azure include recommendations on identity and access management, data security, logging, monitoring, and networking.
>
> **[2:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=140)** As these are consensus built guidelines, you might find that some of the services you would like to secure are not covered.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=147)** For example, if you want to secure a service that was just released in the latest conference, chances are that there is no CIS benchmark available for that service.
>
> **[2:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=157)** The same is true for any major feature chances within existing services.
>
> **[2:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=162)** So while these are great guidelines for hardening, you will still need to supplement this to meet your cloud environment and security appetite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (16), cloud (14), business (1), aws (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** cis (5), aws (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** aws (1), find (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - to (1)

#### Multicloud security architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=0)** - [Narrator] Designing security architecture for multi-cloud environments is a complicated challenge.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=6)** Each cloud is different and some key security controls, such as IAM or networking, are implemented very differently across clouds.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=15)** So how do you make sure your cloud security framework is implemented consistently across each of the clouds you are using?
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=23)** Every cloud implements the specifics of identity and access slightly differently.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=29)** Your multi-cloud architecture should encapsulate the core tenets of role-based access control.
>
> **[0:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=35)** You should look at limiting the scope of human identities and managing the credentials role of both human and non-human identities.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=44)** On the process side, focus on integration with your existing identity governance.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=50)** This integration should not just cover joiner and leaver processes, but especially movers.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=56)** In terms of logging and monitoring, you should choose a monitoring solution that works on your workloads, on your clouds.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=64)** Be careful here and run specific proofs of concepts to validate you get the depth you need.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=70)** For cloud incident management, make sure your central incident management covers all your clouds, and not just from a passive log ingestion perspective, but also from the perspective of containment and investigation.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=85)** Infrastructure as code could be the technology that brings you the consistent implementation across clouds.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=91)** The main approach stands true despite the actual APIs varying across clouds.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=97)** By standardizing on a multi-cloud infrastructure as code approach, such as Terraform or Pulumi, you can build consistent expertise across your organization and enforce secure patterns.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=109)** Policy as code can be another technology that brings you the consistent implementation across clouds.
>
> **[1:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=116)** Policy as code allows you to audit and remediate cloud misconfigurations at scale.
>
> **[2:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=121)** Be careful with the technology though.
>
> **[2:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=124)** Just like with infrastructure as code, the reality is still disconnected as the actual implementation requires you to be cloud specific instead of cloud agnostic.
>
> **[2:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=134)** The bright spot here is Kubernetes.
>
> **[2:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=137)** There are multiple tools providing consistent Kubernetes policy management specifically.
>
> **[2:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=142)** They give you a chance for consistent implementation across multiple clouds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (10), [[Security]] (3), management (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[Kubernetes]] (2)
> **CLI Commands:** make (2), terraform (1)
> **Analogies:** such as (2), just like (1)
> **Warnings:** be careful (2)
> **Env Vars:** iam (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Identity and Access Management

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud identity providers
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=0)** - [Instructor] One of your core cloud security architecture component, or most impactful security controls is identity and access management.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=9)** Given the nature of public cloud spanning across various services, web portals and APIs, identity and access management is crucial in your cloud security journey.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=19)** It's also an important topic to address early on as your existing identity and access management tools, processes and organization might require significant change when moving to the cloud.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=30)** At its core, identity and access management in the cloud is no different from on-premises.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=36)** We need to consider two areas, authentication and authorization.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=41)** Let's start with authentication.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=43)** To authenticate users or even machines, cloud systems rely on identity providers, a cloud identity provider or IDP creates and manages identities in the cloud.
>
> **[0:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=55)** These identities can be those of your internal users, applications or systems or your end-users, that is customers.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=64)** The main difference with the pre-cloud world is that the identities need to be accessed through the internet, not just within your corporate network.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=73)** In the on-premises world, you'll use technologies like Lightweight Directory Access Protocol, LDAP, or Active Directory, ad to store your identities.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=83)** The major cloud providers have their native identity providers.
>
> **[1:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=87)** If you're working in a greenfield environment, starting with a native identity provider typically makes sense.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=94)** In most enterprise scenarios however, you'll need to select an identity provider that meets your enterprise needs and mainly integrates with your on-premises identity store.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=104)** Next, your identity store needs to enable single sign-on or SSO.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=109)** Cloud Identity providers typically implement Open Id Connect, OIDC or security essential markup language, SAML protocols.
>
> **[1:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=119)** Finally, there are a number of controls that you can introduce at the IDP level.
>
> **[2:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=124)** One of the most useful ones is multifactor authentication or MFA.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=129)** Some IDPs allow you to require MFA in a granular level, such as based on risk information or the type of application the identity is attempting to access.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=141)** Some Native Cloud identity providers include Azure Active Directory, Azure Active Directory Business to Consumer, Amazon Cognito, and Google Cloud Identity.
>
> **[2:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=153)** These identity providers allow you to authenticate to the cloud control plane as an administrator or to the cloud application as an end user or even both.
>
> **[2:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=162)** Azure Active Directory supports synchronizing and federating your existing users from your on-premises Active Directory.
>
> **[2:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=169)** In AWS, you can configure Active Directory as a federated IDP for the Cognito service.
>
> **[2:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=175)** In Google Cloud, you can use the directory sync feature to synchronize your on-premises Active Directory users periodically to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (15), [[Security]] (4), management (4), [[Active Directory]] (4), [[Microsoft Entra ID|Azure active directory]] (3)
> **Env Vars:** idp (3), mfa (2), ldap (1), sso (1), oidc (1)
> **Prerequisites:** you'll need (1), configure (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Control plane authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=0)** - [Instructor] Now that we have covered authentication in the cloud, let's look at authorization in the cloud.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=6)** Specifically, let's look at authorizing access to the control plane of your cloud provider.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=12)** By control plane, I mean the cloud provider's management layer of access.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=17)** That is access to create, read, update, and delete cloud services.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=22)** Note that this includes access through both the command line interface and the web portal or console.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=29)** You can think of control plane access as similar to access to the physical data center in terms of privileged access.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=36)** If a malicious actor gains control plane access, they can manipulate your data, configure firewall rules, and modify your administrative settings.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=45)** Control plane access is authorized both at the user level as well as cloud service or resource level.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=54)** User level access control is handled by assigning access policies or roles to users.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=60)** Roles define permissible actions for anyone assigned to the role.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=65)** For example, a role might allow you to configure firewall rules of a cloud database service.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=71)** The cloud service or resource level access is managed by assigning access to the cloud environment.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=77)** This access management can be very general, such as assigning a policy on an individual cloud service level.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=85)** Or it can be very broad, such as assigning an access policy that affects the whole organization, account, subscription, or resource group.
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=93)** The resulting access decision to allow or deny access is a cumulative decision, combining both user and resource level access control.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=102)** Let's take a look at this through an example.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=105)** In this scenario, I have a user called Alice who has the highest privileged access.
>
> **[1:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=110)** This will be owner in Azure or Google Cloud and root in AWS.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=114)** And on the right side I have a managed PostgreSQL database.
>
> **[1:58](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=118)** Now, what if Alice would want to do something malicious, such as dropping the firewall rules from this database?
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=125)** Even with all her permissions, when she would attempt this, the cloud service level authorization policies would kick in.
>
> **[2:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=132)** As the firewall rule drop is something I have already thought about myself, my authorization policies would prevent Alice from performing this action.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=141)** So remember, you can limit what any user can do with resource account or organization level authorization policies.
>
> **[2:29](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=149)** This is your safety net for cloud, identity, and access management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (12), management (3), database (3), data (2), web (1)
> **Analogies:** such as (3), similar to (1), for example (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Data plane authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=0)** - [Instructor] Now, let's look at authorizing access to the data plane of your cloud.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=5)** By data plane, I mean the content of the cloud resources.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=10)** The content can be data such as binary files stored in your object storage or database, but the content can also be code or running applications.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=20)** Data plan authorization covers a variety of authorization methods.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=24)** In its simplest form, data plane authorization is about creating a link to a static file using a short-lived token.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=31)** At its most complex form, it's about managing a completely separate access control system within a Kubernetes cluster hosted in the cloud environment.
>
> **[0:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=40)** So data plane access control is about managing access within the workloads themselves.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=45)** If the control plane access was similar to having access to the physical data center, data plane access is similar to having access inside the virtual machines.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=56)** Let's look at the differences between control and data plane access control.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=60)** First, the target of the access control being inside the resource might make central management or monitoring of that access more difficult.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=69)** Second, while control plane access is limited to identity principles, or authenticated using the cloud identity provider, data plane access control often circumvents this behavior.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=81)** Access might be granted using tokens, keys, connection strings, or even local users.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=88)** And third, control plane access control can cover a lot of ground using access policies that apply to all resources and users.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=96)** Data plane access control, however, can seldom be affected with broad access policies.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=102)** For example, databases might require role level access grants.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=107)** Furthermore, control plane access control is suitable for role-based access control, while data plane access control can expand on that to attribute-based access control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), cloud (4), database (1), [[Kubernetes]] (1), [[Virtual Machines]] (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Cloud permission creep
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=0)** - [Instructor] With the complexity of cloud identity and access management, a new issue arises, cloud permission creep, that is over-permissioned and unused access.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=11)** With each cloud service having slightly different access control requirements, it's easy to follow an anti-pattern of adding more permissions until your task can be achieved.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=21)** Over time, this introduces a creep of cloud permissions.
>
> **[0:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=25)** Cloud permission creep can lead to a sprawl of unmanaged system access, over provisioned access to users, and completely unused roles.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=36)** If you don't maintain these cloud permissions, we can end up in situations like Solorigate or Midnight Blizzard, In the case of Solorigate, the malicious actors were able to use legitimate credentials for their own benefit.
>
> **[0:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=49)** Because the system identity access was over-provisioned and unmonitored, the actors were able to piggyback on existing access and move laterally to the cloud control play.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=59)** Let's look at one approach to manage IAM creep using AirIAM by Chekhov.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=65)** AirIAM is an open source tool that scans your AWS environment, identifies any other provision or unused credentials, and recommends changes.
>
> **[1:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=75)** As it's a CLI tool, you can set it to run continuously and you can even use it to export your existing identity and access management into Terraform and move to identity and access management as code.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=89)** To start, I'm going to scan my AWS account by running the airiam find_unused command.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=103)** As it's a small demo account, it won't take long to run the scan.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=107)** And here we are, it found two unused users and two unused roles in my AWS account.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=114)** I'm going to delete this to limit exposure to my account.
>
> **[1:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=117)** In a more complex enterprise environment, I will need to follow this up with a little bit more analysis, communication, and other change management procedures, but the result is the same.
>
> **[2:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=128)** I've identified a creep in my cloud credentials and I can take action.
>
> **[2:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=133)** Next up, let's look at how to move from a one-time cloud credential creep cleanup to a more programmatic identity and access management as code approach.
>
> **[2:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=143)** To do that, I'm going to run the airiam terraform command.
>
> **[2:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=152)** Even in my small demo environment, this will take a bit more time.
>
> **[2:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=158)** After the command is finished running, we see that it terraformed three users, three roles, and 13 policies, and crucially the connection between them all.
>
> **[2:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=169)** I have the results open in my visual studio code.
>
> **[2:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=172)** Each identity and access management type has its own terraform configuration file, groups, policies, roles, and users.
>
> **[3:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=180)** They're all brought together in the terraform state file.
>
> **[3:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=183)** I can store that state file in my version control, and manage any future changes to my cloud IAM from there.
>
> **[3:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=190)** The user's configuration file lists each AWS IAM user, the group memberships, and any IAM policies attached to them.
>
> **[3:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=199)** The rest of the configuration files follow the same pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (10), management (6), aws (4), [[Terraform]] (4), [[CLI]] (1)
> **Env Vars:** iam (4), aws (4), cli (1)
> **CLI Commands:** aws (4), terraform (4)
> **Code Identifiers:** find_unused (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Cloud Infrastructure Entitlement Management (CIEM)
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=0)** - [Instructor] Most cloud environments have hundreds of different roles and a growing number of unused machine identities spanning multiple systems from identity directories to managed Kubernetes services.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=14)** As cloud security tooling matures, a segment of tooling has emerged to manage cloud permission creep at scale, Cloud Infrastructure Entitlement Management, or CIEM for short, according to a 2023 state of cloud permissions risk report by Microsoft, a whopping 88% of permissions in the cloud are assigned to system identities, not humans.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=39)** And these system identities are notoriously being left unused and unmanaged.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=44)** Over three quarters of the system identities are dormant.
>
> **[0:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=49)** What makes this even more complex is that each cloud works differently and requires a granular approach to understanding effective permissions across multiple levels of system access.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=60)** This results in excessive permission for humans too.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=64)** In fact, less than 5% of provision permissions are actually used even every month.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=71)** There are many different approaches to CIEM, some integrated to cloud-native application protection or privileged access management tools, and there are some CIEM only solutions too.
>
> **[1:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=84)** Whether a standalone CIEM or one integrated in your existing suite of cloud security tools, most CIEM provide the following functionality, multi-cloud support, working across cloud service providers and identity providers, ability to continuously monitor and discover overprovisioned permissions and unused identities, ability to rightsize permissions and remove unused access, and ability to export reports for compliance and assessment purposes.
>
> **[1:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=117)** Some of the most used CIEM tools include Entra Permissions Management, Prisma Cloud, and Tenable CIEM.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=126)** If you're already using a CIEM app from one of these vendors, it's a good idea to look at their CIEM offering and integrated with your cloud security architecture first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (12), [[Security]] (3), management (3), [[Kubernetes]] (1), [[Cloud Infrastructure]] (1)
> **Env Vars:** ciem (9)
> **Speakers:** - [instructor] (1)

#### Zero Trust identity architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=0)** - [Instructor] The concept of Zero Trust was introduced to our vocabulary well over a decade ago.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=6)** The motivation was to move away from the perimeter-based network security in favor of more granular access control to growing types of resources.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=16)** In a nutshell, Zero Trust is about assuming that your network perimeter is breached and adding controls accordingly.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=23)** This tackles both the complexity of an enterprise cloud network and limits lateral movement attacks.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=30)** In practice, Zero Trust mandates us to continually authenticate and authorize each request to our cloud resources.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=38)** Zero Trust architecture combines access control, operational security, and governance.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=44)** Let's talk about access control first.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=47)** Zero trust access control combines identity, endpoint, and network security.
>
> **[0:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=52)** For each access control policy decision, we need to evaluate the following: authentication, including user credential types and MFA methods, security posture and device compliance used for authentication, and network origin of the initiated authentication attempts.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=72)** Each of these elements can be enriched with risk information from various threat intelligence sources to make that access control decision with a higher level of confidence.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=83)** Your operational security organization should analyze the behavior of both successful and unsuccessful authentication attempts.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=92)** This allows for rapid detection and remediation of threats as they evolve.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=96)** As Zero Trust brings network and identity closer together, the operational security team will need to be familiar with both.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=104)** Finally, access should be granted on a procession basis following the principle of least privilege.
>
> **[1:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=110)** Note that we should also apply Zero Trust to access control between systems, such as front end application accessing our APIs.
>
> **[1:58](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=118)** In such case, the endpoint evaluation should be replaced by evaluating the cloud service from which the connection is initiated.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=126)** So you might say that implementing Zero Trust is a continuous journey.
>
> **[2:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=130)** In essence, it's about combining network, endpoint, and identity-based security controls.
>
> **[2:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=137)** You should continuously validate that your users are authenticated, prompting for credentials or second or third factors of authentication if your risk information so requires.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=147)** Zero Trust networking also requires you to continuously assess and validate the security posture of those endpoints or cloud services from which the access is initiated.
>
> **[2:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=157)** And finally, Zero Trust relies heavily on network controls.
>
> **[2:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=162)** We'll talk more about this in another video.
>
> **[2:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=165)** As part of your cloud security architecture, you must consider the entire landscape of your access control across user identities, endpoints, and networks.
>
> **[2:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=175)** If your organization is following Zero Trust architecture, the effectiveness of your controls will be different from a perimeter-based approach.
>
> **[3:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=183)** You will need to consider new threats, such as users accessing your cloud applications from devices or locations that are not owned by your organization.
>
> **[3:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=193)** Zero Trust tooling can come in many flavors.
>
> **[3:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=196)** For identity-first vendors, Zero Trust is often implemented as additional evaluation of identity risk for each session.
>
> **[3:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=204)** By contrast, in an endpoint-first solution, an agent is installed on the endpoint, allowing for granular access control based on the health and behavior of the endpoint.
>
> **[3:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=215)** Identity-centric approach relies on integration with the identity provider and the applications used.
>
> **[3:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=221)** Often, an organization implements a cloud access security broker or CASB to provide a secure single sign-on and enforce security policies across Software as a Service applications.
>
> **[3:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=234)** CASB solutions can also include detection of new unsanctioned applications.
>
> **[4:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=240)** More recently, CASB solutions have also extended the shadow IT detection capability to generative AI applications.
>
> **[4:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=249)** Endpoint-centric tooling typically filters all traffic from the endpoint through a secure web gateway or SWG.
>
> **[4:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=257)** This allows for network level control and data loss prevention.
>
> **[4:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=262)** Your organization can also implement a combination of both approaches and add access control from outside of the trusted network to private applications.
>
> **[4:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=271)** Some analysts and vendors call this approach establishing a secure service edge or SASE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (9), cloud (7), [[Network Security]] (2), application (1), [[SaaS|Software as a service]] (1)
> **Env Vars:** casb (3), mfa (1), swg (1), sase (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Logging and Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud security posture monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=0)** - [Instructor] Traditionally, your applications are hosted in an infrastructure, with a varying quality and access to monitoring signals.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=8)** When you host your own infrastructure, you have the opportunity to combine data across your hosting environment.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=15)** This could include closed-circuit TV feeds, physical access logs in and out of the data center building, heating, venting, and air conditioning systems.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=24)** These could also include health information about the hardware, operating systems, and applications.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=30)** In the creating monitoring data from all these systems would be costly, but not impossible.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=36)** The volume of these signals grow exponentially with the move to a public cloud.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=41)** In the cloud, you will be faced with a massive number of signals to monitor.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=46)** Identifying any security incidents or events would be like trying to find a needle in a haystack.
>
> **[0:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=52)** Everything in the cloud is software-defined.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=54)** You have signals available to you from across your hosting platform.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=57)** Luckily, the signals are often available to you in a standardized manner, making it easier to correlate across signal types.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=65)** And what's more, as the cloud provider is responsible for the physical and host security, they provide you with the reports with pre-correlated data and, in some cases, even alerts.
>
> **[1:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=75)** The cloud provider is also constantly analyzing any malicious activity against their infrastructure.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=81)** This lets them provide you with anonymized security intelligence information, even when your environment is not yet being attacked.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=88)** All this makes monitoring cloud security a daunting task.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=92)** Let's look at how to structure this in a more approachable manner using cloud security posture management.
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=98)** At its core, monitoring cloud security posture is about monitoring the residual risk in your cloud environment.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=105)** This includes workloads, such as containers or virtual machines, scanned against vulnerabilities.
>
> **[1:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=111)** Cloud service misconfigurations.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=113)** And finally, how the environment aligns with compliance frameworks and standards.
>
> **[1:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=119)** Cybersecurity and Infrastructure Security Agency, CISA, defines cloud security posture management in the following way.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=126)** Cloud security posture management is a continuous process of monitoring a cloud environment by identifying, alerting on, and mitigating cloud vulnerabilities.
>
> **[2:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=136)** There are a number of cloud security posture management tools out there, both from third parties and native tools from each of the cloud providers.
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=144)** Here's what they all have in common, though.
>
> **[2:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=146)** First, they scan your cloud environment continuously.
>
> **[2:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=150)** They are usually instrumented with your cloud automation accounts with FREDA rights or similar to at least your control plane.
>
> **[2:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=157)** This means that your coverage is wider compared to an agent-based model.
>
> **[2:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=161)** They also help to monitor any drift to your security posture.
>
> **[2:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=165)** Drift is a negative change from the known good configuration.
>
> **[2:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=169)** Remember, you get to the known good configuration by shifting security left and ensuring your infrastructure as code deployments pass your security tests such infrastructure security, [[Static Application Security Testing]].
>
> **[3:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=182)** And finally, CSPM can either automatically mitigate set drift by playbooks that you customize, or in case human intervention is needed, they can even integrate with your SIEM tools to create incidents.
>
> **[3:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=195)** Let's take a look at the AWS Security Hub, a native, or first-party, cloud security posture management tool.
>
> **[3:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=202)** It collects data from various control plane sources and runs a security configuration scan across all my resources.
>
> **[3:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=210)** On the left, I see how my accounts perform against security best practices and standards, such as the CIS benchmark.
>
> **[3:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=217)** On the right, I see the resources with the most failed security checks.
>
> **[3:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=222)** I'll select the AWS bucket that is the second on the list.
>
> **[3:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=230)** I'm presented with a list of security findings that are open for this particular storage bucket.
>
> **[3:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=236)** There's one marked with high severity.
>
> **[3:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=239)** Let's open that one.
>
> **[4:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=242)** By opening this finding, we can learn more about it.
>
> **[4:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=246)** There's an AWS severity rating, timestamp on when this first appeared, and a description on the failing condition of this security check.
>
> **[4:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=254)** In this case, my AWS S3 bucket has a false value for the restrict public bucket setting.
>
> **[4:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=260)** That is likely to expose my data to be available to the public, which is indeed a high-severity finding.
>
> **[4:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=267)** Scrolling down, we have a link to the AWS documentation to learn more about how to mitigate this finding.
>
> **[4:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=274)** So we've seen how the Security Hub in AWS acts as a cloud security posture monitoring tool.
>
> **[4:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=280)** It combines information from various control plane sources in an agentless manner.
>
> **[4:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=285)** We've also seen how it can help us focus our security mitigation efforts by highlighting the cloud resources that need the most attention, and we've also seen how we can learn more about specific action we need to take in order to mitigate these findings.
>
> **[5:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=301)** We could mitigate these findings manually, but we can also automate that mitigation of the most common or most impactful misconfigurations.
>
> **[5:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=309)** If you are following the cloud security architecture presented in this course, your resources are already deployed as infrastructure as code.
>
> **[5:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=317)** Chances are then that this is a case of a security drift after the deployment of a known good configuration of an S3 bucket.
>
> **[5:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=325)** In that case, it'll be an isolated incident, but it could also be something you haven't previously considered.
>
> **[5:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=331)** In that case, it makes sense for you to mitigate this finding at the source, the internal product S3 bucket infrastructure as code template.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (27), cloud (22), data (6), aws (6), management (5)
> **Env Vars:** aws (6), cisa (1), freda (1), cspm (1), siem (1)
> **CLI Commands:** aws (6), find (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** such as (2), similar to (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Cloud-native application protection (CNAPP)
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=0)** - [Instructor] One of the key decisions of your cloud security monitoring architecture is how you approach monitoring your application workloads.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=9)** Cloud workloads are applications hosted in virtual machines or containers.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=15)** Cloud security posture management tools are API based and are not sufficient to protect them as they rely on control plane access to your cloud environment.
>
> **[0:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=25)** To protect your workloads, you need to gain visibility inside of the virtual machines or containers themselves.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=32)** This is often done by installing a monitoring agent into the workload.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=38)** The approach is why we have limited runtime visibility to most Platform as a Service or serverless workloads as they are often multi-tenant and don't allow installation of agents.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=50)** Cloud workload monitoring and protection tools provide vulnerability management, anti-malware, and even benchmarks and workload hardening of our workloads.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=60)** Just like cloud security posture management tools, workload protection tools can be either from third parties or natively from your cloud provider.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=69)** The benefit of using a third-party cloud workload protection platform is that you might be able to reuse a lot of your existing scanning and monitoring infrastructure, processes, and people.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=81)** The downside of that approach is that they might not be built for the elastic and ephemeral nature of cloud workloads.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=88)** This means that a traditional agent-based monitoring tool might not react quickly enough to install an agent and provide security information from a container workload that is deleted mere minutes after it is created.
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=101)** Here are some of the common tools in this space.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=104)** First, we have the first-party tooling from the cloud providers themselves.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=108)** For example, Microsoft Defender, AWS GuardDuty, or Google Cloud Security Command Center.
>
> **[1:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=115)** The benefit here is that the tools are integrated natively with the cloud security posture management, so you get broad coverage and integration in the same package.
>
> **[2:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=124)** Some third-party tools provide more in-depth monitoring, though.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=129)** Next, we have agent-based tools from familiar vendors, such as Trend Micro, Palo Alto, and Check Point.
>
> **[2:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=135)** And last, we have the so-called cloud native application protection platforms.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=141)** Cloud native application protection platforms provide end-to-end cloud application security.
>
> **[2:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=146)** CNAPP solutions integrate previously siloed cloud security components into a single pane of glass, securing applications from code to cloud.
>
> **[2:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=156)** This includes Infrastructure as Code security scanning and drift detection, but also integration with other application security and DevOps tools.
>
> **[2:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=166)** CNAPP integrates workload and posture management, exposing attack paths across control and data panes.
>
> **[2:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=174)** And finally, CNAPP integrates with identity providers, providing a view on cloud permission creep.
>
> **[3:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=181)** The entitlement management part of CNAPP discovers overprovisioned permissions and unused machine identities.
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=189)** CNAPP vendors are generally twofold.
>
> **[3:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=192)** Some established first and third-party vendors, such as Microsoft and Palo Alto, offer all of the capabilities through the same contract.
>
> **[3:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=201)** And so-called cloud native vendors, such as Aqua, Lacework or [Wiz.io](https://Wiz.io), offer first-to-market individual services, but may lack critical integrations or enterprise readiness.
>
> **[3:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=213)** As always, your individual tooling ecosystem and threat landscape will dictate which tools are the best fit for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (18), [[Security]] (10), management (6), application (5), [[Virtual Machines]] (2)
> **Env Vars:** cnapp (5), api (1), aws (1)
> **Analogies:** such as (3), just like (1), for example (1)
> **CLI Commands:** aws (1)
> **URLs:** [wiz.io](https://wiz.io) (1)
> **Definitions:** means that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Cloud compliance monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=0)** - [Narrator] Another core component of your cloud security architecture is the ability to prove that your security posture really implements the security controls required by your cloud security framework.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=12)** In your cloud security framework, you defined which security controls to implement in order to meet your compliance requirements.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=19)** Now it's time to bring these two worlds together.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=22)** As we've already established, cloud security posture management tools are continuously assessing the security state of your cloud environment.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=30)** This means that you already have the data you need to assess the compliance state of your cloud environment.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=36)** It's in your landing zone.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=38)** Performing an internal or external audit or assessing your compliance state is now a matter of correlating and mapping these continuous scans with your compliance requirements.
>
> **[0:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=48)** While you can certainly do this manually using spreadsheets, using the right tools, you can also automate this and you should.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=56)** Cloud security posture management dashboards often include compliance against industry standard frameworks.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=62)** These can be also further customized to meet your compliance requirements out of the box.
>
> **[1:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=68)** Chances are that your cloud security posture management tooling already supports some compliance reporting.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=73)** Typically, you won't select a separate tool for cloud compliance monitoring, but rather you'll include the compliance capabilities as part of the requirements for selecting your cloud security posture management tooling.
>
> **[1:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=86)** There is one crucial caveat though.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=88)** If your cloud security posture management tool reports a hundred percent compliance against your standards, you need to set this number in context.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=97)** Without knowing how many of your cloud resources are not covered within these reports, you are effectively only seeing the tip of the proverbial iceberg and you don't have a complete picture of the potential risks.
>
> **[1:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=110)** I often see enterprises combining the use of cloud security posture management compliance dashboards with policy enforcement native to the cloud platform they are using.
>
> **[2:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=120)** You can use the native security policy engine to enforce controls in a software defined manner.
>
> **[2:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=127)** This is called compliance as code and brings with it a plethora of version control benefits.
>
> **[2:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=133)** This can be implemented using Azure policies, AWS service control policies, Google Cloud's organization policies or Kubernetes policies.
>
> **[2:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=142)** It's up to you to draw the line between automatic remediation of misconfigurations and proactive enforcement of compliance using policy as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (14), [[Security]] (14), management (6), [[Dashboards]] (2), data (1)
> **Definitions:** means that (1), is called (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** picture (1)
> **Warnings:** caveat (1)
> **Speakers:** - [narrator] (1)

#### Cloud-native incident management
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=0)** - [Narrator] Regardless of the security posture of your cloud environment, you will sooner or later need to handle security incidents.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=8)** Before looking at cloud specific incident management, let's take a brief refresher on how the National Institute of Standards and Technologies defines the security incident management process.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=20)** The preparation phase of the process is all about preventing incidents by implementing security controls and hardening our workloads.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=27)** This phase also includes preparing to handle incidents through well-defined processes and forensic tools for incident analysis.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=36)** Secondly, we have the detection and analysis phase, which includes detecting active incidents.
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=42)** This covers both monitoring of our own environment as well as any threat intelligence feeds.
>
> **[0:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=48)** Third, in the containment, eradication and recovery phase, the security incidents are mitigated.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=54)** and finally, the incident is analyzed and reported in the post incident activity phase.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=59)** Any lessons learned are implemented to improve the security posture.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=64)** In the preparation phase for cloud, you should configure your identity and access management to support the work of incident responders and forensic analysts.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=72)** This can be as simple as pre creating a role that they will assume in case of an incident, or this can be something more elaborate, such as creating an organizational unit with isolated log stores, security policies, and so on.
>
> **[1:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=86)** This is all about making sure you have processes and tools in place for the recovery phase.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=92)** The cloud detection phase is all about tapping in to the monitoring signals from your cloud environment and workloads.
>
> **[1:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=100)** In this phase, you instrument the workloads, collect all the events and logs to a central location, and finally triage them.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=108)** In case an incident needs to be raised, you would send out alerts to your security incident and event management platform and initiate your playbook to contain the incident.
>
> **[1:58](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=118)** In the cloud containment phase, you start by activating your incident response roles.
>
> **[2:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=123)** From the operational perspective, you would next correlate logs from multiple sources to determine the extent of the incident.
>
> **[2:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=131)** You will then follow this by isolating the exposed workload such as by placing restrictive network security group rules and taking the virtual machine snapshots for analysis.
>
> **[2:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=140)** You might also restrict changes in the environment by setting in place organization level policies or resource logs.
>
> **[2:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=148)** In the post-incident phase, cloud is no different from your previous hosting platforms.
>
> **[2:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=152)** You will need to prepare a follow-up report and determine the root cause.
>
> **[2:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=156)** If required, such as in a case of a breach of private data, you would also communicate about the incident to stakeholders and regulators outside of your organization.
>
> **[2:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=166)** Finally, you will gather lessons learned and implement changes where necessary.
>
> **[2:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=171)** As part of our cloud security architecture, we need to make conscious choices on what do we log and how do we retain that information.
>
> **[2:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=179)** With the sheer volume of signals, these choices can be complex.
>
> **[3:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=183)** It's not all on our shoulders as cloud consumers though.
>
> **[3:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=187)** The default retention times and verbosity are improving as cloud service providers improve their own out of the box security.
>
> **[3:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=196)** Introducing a cloud forensics capability requires you to also instrument ways for providing your forensic teams access to the impacted environment.
>
> **[3:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=205)** This break the glass access should be available for both control and data panes.
>
> **[3:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=212)** And finally, these new approaches need to be integrated with your tooling, whether it is privileged access management, threat detection, or security incident management.
>
> **[3:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=221)** This is also the perfect use case for applying artificial intelligence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (11), cloud (11), management (6), data (2), [[Incident Response]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Logging and monitoring architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=0)** - [Instructor] With the various logging and monitoring requirements comes a lot of complexity.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=5)** As part of your cloud security architecture, you will also need to consider the centralized logging architecture.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=12)** There are a number of log store architecture properties that you need to consider.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=17)** The first is access control. Who needs access to these logs?
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=21)** Is the access limited only to your centralized security and operations team, or perhaps the application developers and site reliability engineers need to have access too?
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=32)** Or finally, are there requirements to grant access to your business, such as marketing or sales?
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=38)** Next up, we have retention and data allocation requirements.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=41)** You might have a very specific audit log-retention policy set by your compliance requirements, but not all data needs to be retained as long as your audit logs.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=51)** Depending on the log storage solution that you are using, you might even need to create a log storage per retention time type, or per cloud service location that you're using.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=60)** This might heavily impact the complexity of your cloud footprint.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=64)** In certain regulatory environments, you might need to store specific logs in a separate log storage instead of a centralized one globally.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=72)** As both storage and data transfer incur costs in the cloud world, you need to find a balance between what is useful and what is just nice to have.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=81)** You might even end up storing your data in duplicates, initially within the cloud environment close to the workload, and in another location for long-term storage.
>
> **[1:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=90)** That other location might be a cold block storage or even outside of your cloud altogether.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=96)** The cloud logs also need to be integrated with your cloud security posture management tools, or CSPM.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=102)** If you are using a cloud-native CSPM, such as Microsoft Defender, you will find that the native log store solutions, such as log analytics workspace, are integrated with the native CSPM solutions.
>
> **[1:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=115)** Both AWS and GCP also offer native integration across log stores and monitoring solutions.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=122)** However, if your CSPM is not natively integrated, you will need to take data transfer into account.
>
> **[2:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=128)** These experts can both create dependencies and additional costs for you.
>
> **[2:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=133)** Keep those dependencies in mind in case the connection between your CSPM and your cloud environment is intermittently down.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=141)** Let's look at one way to design a centralized logging architecture in the cloud.
>
> **[2:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=145)** In this example, the centralized log is deployed to a separate subscription or account.
>
> **[2:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=151)** This enables granular access control, providing access to the centralized security team for security posture management, as well as security incident management purposes.
>
> **[2:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=161)** This centralized log store is then configured to ingest control plane logs from sources, such as identity store, infrastructure logs, control plane APIs, and workload protection logs.
>
> **[2:55](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=175)** Access control and log retention are set separately for the centralized log store and application specific log stores, while key platform and infrastructure logs are stored in centralized log store.
>
> **[3:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=187)** This approach supports more variables logging through the usage of subscription specific log stores for each application.
>
> **[3:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=194)** Your security, incident, and event management tool can then consume these logs in real time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (11), [[Security]] (7), data (5), management (4), application (3)
> **Env Vars:** cspm (5), aws (1), gcp (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (2), aws (1)
> **Speakers:** - [instructor] (1)

#### Cloud drift detection
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=0)** - [Instructor] So you have defined and implemented security guardrails throughout your cloud, and deployed your applications using standardized infrastructure as code templates that have been reviewed from the security perspective.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=11)** Can you now rest assured that your apps stay secure?
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=16)** Unfortunately, no.
>
> **[0:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=18)** In practice, many teams see that deployed cloud applications change over time.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=23)** This results in drift between the desired state defined in the infrastructure as code templates and reality.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=31)** Cloud configuration drift will at best cause gaps in your continuous monitoring and compliance.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=36)** More worryingly, drift can erode your security posture and create new threats for your cloud environment.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=43)** Drift can even be a sign of an intrusion that is already taking place.
>
> **[0:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=48)** Your cloud security architecture should have controls in place to prevent, detect, and manage cloud configuration drift.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=57)** Ideally, you can manage configuration drift by implementing robust best practices of never deploying any changes through human interaction and enforcing infrastructure as code across your cloud estate.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=70)** In addition to policies as code and locking down resource management, this means removing human right access altogether, and not allowing any exceptions.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=81)** In practice, this might prove difficult.
>
> **[1:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=84)** If your team is able to stay disciplined and only deploy immutable infrastructure that cannot be changed post-deployment, you are able to avoid drift altogether.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=94)** In more diverse environments, most teams might feel confident their drift prevention is iron tight on crown jewels or production environments only.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=103)** But for the rest of the cloud, they will implement drift detection tooling to identify and remediate cloud configuration drift.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=113)** There are a few different types of drift detection tools.
>
> **[1:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=117)** Cloud providers approach drift detection in their own ways.
>
> **[2:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=121)** AWS implements drift detection natively against their cloud formation stacks.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=126)** Azure provides additional tooling for drift detection through policies and resource logs, and Google Cloud integrates GitHub's best practices with some specialized workloads, such as Vertex AI and Google Kubernetes Engine.
>
> **[2:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=142)** Infrastructure as code providers, such as Terraform or Pulumi provide a multi-cloud functionality similar to AWS CloudFormation's Drift Detection, where they compare the deployed resources to the desired state in the infrastructure as code template, stored in a central source of truth.
>
> **[2:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=158)** And some cloud security vendors, such as Checkmarx, combine their infrastructure as code scanning capabilities with state comparison.
>
> **[2:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=167)** Finally, specialized workloads, such as container orchestrator platforms have their own tooling.
>
> **[2:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=173)** You will find that mature teams operating Kubernetes clusters manage configuration drift by implementing GitOps.
>
> **[3:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=180)** Simply put, GitOps is a practice of making all changes to the live environment through a centrally-managed configuration repository.
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=189)** In the Kubernetes space, the main tooling for implementing GitOps are Argo and Flux.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (13), [[Infrastructure as code (IaC)|Infrastructure as code]] (6), [[Security]] (5), teams (3), [[Kubernetes]] (3)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** aws (2), terraform (1), find (1)
> **Env Vars:** aws (2)
> **Tools:** github (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### IaaS network controls
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=0)** - [Instructor] To compare on-premises and cloud networking, we need to look back at the shared responsibility model and how that applies to networking.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=10)** When you manage your own network, you are responsible for every security control, starting from Layer 1 of the OSI model, that is, the physical layer, including network interfaces, hubs, and switches.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=23)** In the cloud world, both Layer 1 and Layer 2 are completely opaque and managed by the CSP.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=30)** Your responsibility starts from Layer 3, which is the network layer.
>
> **[0:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=34)** When it comes to Infrastructure as a Service, you are responsible for IP addressing and routing.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=41)** In an on-premises environment, you are responsible for protecting your data center network against Layer 2 attacks, such as port scanning and denial of service.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=50)** In the cloud world, the cloud service provider is responsible for setting up network flashers and protecting you from these types of attacks.
>
> **[0:58](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=58)** When it comes to Layer 4 and Layer 7, transport and application layers respectively, you have more options.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=65)** You can either use a native solution from your cloud service provider, or you can also bring in a network virtual appliance.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=73)** From the management and governance perspective, cloud networking is different from on-premises too.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=79)** All of the network resources that are available to us are software-defined.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=83)** This means that setting up a new network is a matter of deploying Infrastructure as Code.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=88)** Your existing change management processes might have to be revised to meet this new world.
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=93)** Additionally, the physical controls are all in the hands of the cloud service provider.
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=98)** This means that you cannot protect your network using physical controls at all.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=102)** Quite contrary, anyone with the appropriate IAM role might have the power to destroy your network resources, similarly to having unlimited physical access to your on-premises network.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=113)** you can control some landing zones centrally, but the self-service and software defined nature of the cloud requires you to take a more federated approach.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=122)** Instead of trusting a centralized network perimeter, you need to embrace microsegmentation.
>
> **[2:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=128)** Another key difference is the decoupling of the network and compute life cycles.
>
> **[2:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=133)** This leads to having to make compromises in terms of self-service support for the workload development teams.
>
> **[2:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=139)** Do you want to keep being prescriptive in the network design while limiting their time to market?
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=144)** Or do you provide them with some variant of self-service.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=147)** To estimate time to market, consider both the design work for setting up the network, assigning IP addresses, building the hub and spoke model, and so on, as well as speed of ramping up new services.
>
> **[2:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=160)** Virtual networks or VPCs enable connectivity across the cloud, the internet and organizational network.
>
> **[2:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=167)** Each virtual network is isolated from other virtual networks by default.
>
> **[2:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=172)** Enterprise virtual networks can be connected to each other to enable resources in virtual networks to communicate with each other.
>
> **[2:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=179)** You might choose to grant direct IAM access to your application development team to a subnet of a virtual network, which you have pre-configured.
>
> **[3:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=187)** That way, they can freely deploy new workloads there as long as they stay within the predefined size limits, and you will also stay in control of any external or cross-virtual network settings.
>
> **[3:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=198)** And finally, you can continue to manage traffic using existing network compliancies as long as your application development teams stay within Infrastructure as a Service.
>
> **[3:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=207)** This is a feasible approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (9), [[IaaS|Infrastructure as a service]] (2), management (2), teams (2), [[Application Development]] (2)
> **Env Vars:** iam (2), osi (1), csp (1)
> **Definitions:** means that (2), is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### PaaS network controls
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980&t=0)** - [Instructor] Infrastructure and platform as a service networking share a number of common properties.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980&t=6)** They are both based on software defined networking on top of the same physical hardware, managed by the cloud service providers.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980&t=14)** However, platform as a service networking does not support the same familiar mental models as infrastructure, as a service networking.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980&t=22)** While you can continue to work in infrastructure as a service, more or less the same way as you can on your own premise's networks, platform as a service networking might seem more limiting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PaaS|Platform as a service]] (2), [[Hardware]] (1), cloud (1)
> **Speakers:** - [instructor] (1)

#### Zero Trust cloud network security architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=0)** - [Instructor] As we have learned, the Zero Trust model drives the network architecture into a more federated approach.
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=7)** This is where the Zero Trust network architecture reenters the stage.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=12)** As established when we discussed Zero Trust from the identity perspective, building a Zero Trust architecture is a continuous effort and it combines network, endpoint, and identity-based controls for a real-time risk evaluation.
>
> **[0:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=26)** The software-defined approach facilities also noble approaches to network security processes, such as implementing firewall rule changes as pull requests to infrastructure as code templates instead of IT service management tickets.
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=42)** You can approach cloud network security from a platform perspective or from the perspective of building network security controls into your infrastructure as code products.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=54)** The following principles help you set up your cloud network architecture in either case.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=59)** You should assume your cloud network to be hostile, either due to misconfigurations, drift, or other threat factors.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=67)** As such, you should not place any trust into the network connection itself, and always add explicit authentication and encryption in transit to all connections.
>
> **[1:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=78)** You should also enforce these settings by policies to prevent any changes to your network architecture across the lifecycle.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=85)** Remember, if a cloud administrator gains access to your control pane, they might have access to remove or change your cloud network controls.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=95)** And finally, you should add further granularity to your network segmentation.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=99)** You can segment each workload into their own micro-segment with their own network security rules for inbound and outbound traffic.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=107)** The federated networking model lends itself very well for a micro-segmentation approach.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=113)** As all networks in the cloud are software-defined and can be built as infrastructure as code, the cost of implementing changes and building more granular segmentation is relatively low.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=125)** Your workload choices may drive your choice of micro-segmentation tooling.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=129)** If you're mostly staying in infrastructure as a service, using a virtual network appliance of a next-generation firewall from the cloud provider's marketplace is likely a good choice.
>
> **[2:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=140)** If your workloads are mostly hosted in Kubernetes platforms, you will likely implement micro-segmentation using technologies, such as eBPF.
>
> **[2:29](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=149)** eBPF is a kernel-level network security and observability technology.
>
> **[2:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=154)** Popular eBPF network segmentation tools include Cilium and Calico.
>
> **[2:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=160)** For workloads across the hosting models, defining native virtual networks or virtual private clouds as infrastructure as code is the most all-encompassing solution.
>
> **[2:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=170)** You will likely end up using a combination of all of these throughout your cloud journey.
>
> **[2:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=176)** The National Institute of Standards and Technologies has published a special publication on Zero Trust architecture.
>
> **[3:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=183)** I recommend you look at this special publication and include the recommended changes in your journey towards Zero Trust.
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=189)** Another excellent vendor-neutral resource for Zero Trust is the "Zero Trust Maturity Model" by the Cybersecurity and Infrastructure Security Agency.
>
> **[3:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=198)** Their Maturity Model can be used to assess the existing environment or build a measurable roadmap towards Zero Trust architecture.
>
> **[3:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=206)** The Maturity Model extends our previous definition of Zero Trust being a combination of identity devices and networking by adding application and data security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (8), [[Network Security]] (5), [[Infrastructure as code (IaC)|Infrastructure as code]] (4), [[Security]] (2), [[Real-Time]] (1)
> **Code Identifiers:** ebpf (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Cross-References:** we discussed (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Securing multicloud networks
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=0)** - [Instructor] Each cloud provider has their own networking stack, routing options, and security controls.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=6)** When designing a multi-cloud network architecture, you should think of them as separate data centers with separate technologies.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=14)** Isolation across virtual networks is slightly different across AWS, Azure and GCP.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=21)** Especially Platform as a Service networking behaves very differently.
>
> **[0:26](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=26)** The common denominator is the Infrastructure as a Service networking, which is what we are focusing on here.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=32)** On Infrastructure as a Service networking, you'll want to design a network architecture that is consistent across all your clouds and allows you to use the same network controls such as firewall appliances across your cloud estate.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=46)** At the same time, you'll want to be careful on avoiding unnecessary cloud egress costs or additional latency.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=53)** In addition to the central network architecture, you'll need to have specialized network expertise for each of the clouds to ensure consistent implementation of network controls.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=64)** Think of this as centralizing the network architecture at the hub level and delegating the implementation of each micro segment to the network specialists of each of the clouds.
>
> **[1:15](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=75)** You can take this idea even further and delegate the implementation of the network control to workload specialists, provided that your network architecture is modular enough.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=85)** Let's look at north-south traffic from your on-premises data center to the cloud.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=91)** We typically implement this by using a private dedicated connection between our on-premises network and the cloud provider.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=99)** Think of it is as a list line or MPLS circuit.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=102)** This traffic does not pass through the internet.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=105)** The name of this MPLS connection in Azure is ExpressRoute.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=108)** In AWS, it's called Direct Connect.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=112)** And in Google Cloud, it's Interconnect.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=114)** Typically, we implement this by extending our on-premises network to a co-location facility that has a direct connection to multiple cloud providers.
>
> **[2:04](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=124)** This centralizes our network edge and allows us to add more clouds as we go.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=129)** While it may be tempting to simply extend your entire SD van to the cloud, be careful as not to break the trust boundaries of either.
>
> **[2:18](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=138)** Your on-premises network architecture was built for different use cases and threat model in mind.
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=144)** If combined without proper planning, both the cloud network can become an attack vector for your on-premises network, and the on-premises network can be the same for your cloud network.
>
> **[2:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=155)** Next, let's look at the east-west traffic from one cloud to another.
>
> **[2:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=160)** For example, if you have an application in AWS that is calling an API endpoint in GCP, how do you connect the two?
>
> **[2:48](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=168)** You have options.
>
> **[2:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=169)** Either you go back to and from the MPLS circuits using on-premises as your hub, or you can connect directly across the clouds through a VPN.
>
> **[2:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=179)** The former approach on the left of your screen is a more centralized approach.
>
> **[3:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=183)** It allows you to maximize your governance and control at the hub, but there may be some additional latency for this approach.
>
> **[3:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=191)** The latter approach on the right provides a more direct access to the workloads, but it's more complex to manage at scale.
>
> **[3:19](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=199)** If you expect to have multiple workloads that will need cross-cloud connectivity, I would recommend you go for the centralized approach on the left.
>
> **[3:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=208)** For north-south traffic perspective, you should also consider traffic to and from the internet.
>
> **[3:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=214)** For northbound traffic from the cloud to the internet, you need to make a design choice of how do you interject your firewalls, intrusion detection and data loss prevention controls.
>
> **[3:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=224)** Will you exit from on-premises only or extend your controls from on-premises to the cloud too?
>
> **[3:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=231)** For southbound traffic from the internet to the cloud, the options are similar, to centralize or to federate.
>
> **[3:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=237)** For visibility reasons, it's worth standardizing on a solution such as DDoS protection or web application firewall.
>
> **[4:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=245)** I often see enterprises using controls that are consistent across the clouds, but not necessarily the same that are used on premises.
>
> **[4:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=253)** You will need to carefully take cloud egress costs into account here too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (16), traffic (7), data (3), aws (3), [[Multiprotocol Label Switching (MPLS)|Mpls]] (3)
> **Env Vars:** aws (3), mpls (3), gcp (2), api (1), vpn (1)
> **CLI Commands:** aws (3), make (1)
> **Analogies:** such as (2), for example (1)
> **Warnings:** be careful (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)


### 5. Communicating Across Teams

[↑ Back to Table of Contents](#table-of-contents)

#### Effective communication of cloud security designs
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=0)** - [Instructor] Communicating a cloud security architecture can make or break the program.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=5)** Good documentation translates complex technical topics into broadly understandable artifacts, making sure implementation teams are aligned towards a common goal.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=16)** Clean documentation also supports architectural design decisions, ensuring they are made in time and without blocking the implementation.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=24)** When the design decisions are made in the context of the whole architecture, you can make sure all requirements are met, not only the security ones.
>
> **[0:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=33)** When you communicate your architecture design effectively, you align stakeholders and bridge the gap between technical teams, stakeholders, and decision makers.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=43)** And finally, communication reduces project risk.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=47)** Good architecture documents do not hide complexities, but call them out.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=51)** Many security design decisions have a direct impact on the capacity, deliverables, and timeline of multiple cloud implementation teams.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=59)** If there are conflicts in the requirements, they can be laid out and addressed early on.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=66)** Let's take a look at this landing zone reference architecture design diagram from Google Cloud.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=71)** A landing zone is a complicated concept.
>
> **[1:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=74)** It covers many domains such as identity and access management, resource hierarchy, and networking.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=80)** If you were to fit all those dimensions into the same diagram, you'll need virtual reality glasses to make heads or tails of it.
>
> **[1:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=87)** This diagram focuses on infrastructure as service workloads with hybrid cloud connectivity to the on-premises network and another public cloud.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=96)** By removing platform as a services from the picture, we drastically reduce the complexity of this diagram.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=102)** The diagram focuses on networking, but does not go into the details of address spaces routing or firewall rules.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=109)** The reader can focus on what's important, the big picture.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=113)** Upon reading this, we see that the shared VPC is connected across four projects, and we understand how the individual projects can communicate with each other using shared VVC networks.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=125)** From the landing zone perspective, logging and monitoring our key elements, cloud audit logs, firewall rules, logging, and VPC flow logs are called out in the diagram, but without configuration specifics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (4), [[Security]] (3), teams (3), [[Google Cloud Platform (GCP)|Google cloud]] (1), management (1)
> **CLI Commands:** make (3)
> **Env Vars:** vpc (2), vvc (1)
> **Analogies:** picture (2), such as (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Tailoring technical communication for different stakeholders
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=0)** - [Instructor] Any good communication has to be empathetic.
>
> **[0:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=3)** That means you need to understand your audience to get your point across.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=8)** Not everyone is working full-time in the cloud project, nor does everyone know either the cloud or the security terminology.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=17)** This is not the time to show off your skills, or confuse everyone with an alphabet soup of acronyms.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=23)** You should always use simple language, and explain the difference between the technology limitations and your design choices.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=31)** Clearly call out when any design decision differs from on-premises or your existing security architecture, and provide proactive commentary on why that is the case.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=41)** And whenever you write documentation, you should write it in a way that is understandable, not just to yourself and the current team, but also to completely new stakeholders that may join next year.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=53)** When you communicate to other security teams that have existing operational responsibilities, keep in mind that their capacity to make changes may be limited by outside factors.
>
> **[1:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=63)** Engage with them early on and share your plans openly.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=67)** In some cases, you may even need to involve vendor management.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=71)** Some teams may be impacted more than others.
>
> **[1:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=74)** Your design choices of how you integrate with existing identity and access management processes will directly impact how heavily you need to involve these teams.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=83)** For example, integrating with an existing privileged access management tool may need to coordinate closely with the current team.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=91)** But if you are proposing to use a cloud native solution, you may be able to simply take the existing implementation as a set of requirements for your design.
>
> **[1:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=100)** Quite often, incident management teams will have a clearly defined onboarding process for new services.
>
> **[1:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=106)** If you will onboard the cloud log sources into the existing incident management platform, the experience may be very straightforward.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=114)** They may even have a template for you to use.
>
> **[1:57](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=117)** For example, if your organization has already onboarded your cloud identity provider under incident management, chances are you may be able to use those playbooks as is.
>
> **[2:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=127)** That is, if you're able to enforce the usage of that same identity provider across your cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (6), management (6), teams (4), [[Security]] (3), next (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Documenting architectural decisions
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=0)** - [Instructor] As a cloud security architect, you'll likely be asked to prepare documentation to support architectural decisions.
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=7)** An architectural decision record is a key communication tool in cloud security programs.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=14)** The ADR documents important decisions in a way that is transparent, traceable and actionable, especially for multi-stakeholder environments.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=23)** It's important to note that ADRs are not a tool to document past actions, but a specific set of tools to facilitate decision making during the cloud program, the ADR title should be descriptive and self-contained, and the ADR should clearly articulate the context.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=41)** Why is this decision needed?
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=43)** What are the implications to the program timeline, business or security if this decision is not taken?
>
> **[0:49](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=49)** What are the alternatives being considered?
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=51)** And crucially, what is the recommended option?
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=54)** What are the trade-offs between the options and how is security affected by them?
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=60)** Be sure to include any other architecturally significant requirements such as cost and maintainability.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=66)** Be clear and specific on the actual choice being recommended.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=70)** Here, you should use more detailed language that is specific enough to provide design guidance for implementation.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=76)** If you have produced additional diagrams for the implementation details, link to a version controlled artifact of them here.
>
> **[1:24](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=84)** Finally, call out all the decision makers for the decision.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=88)** Who were involved in the preparation of the decision and who approved it.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=92)** If there are any caveats such as cost limitations or dependencies to vendor roadmap, call out the ones that made an impact to the decision here.
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=101)** Let's briefly review some high level ADRs that you will likely make in your cloud program.
>
> **[1:46](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=106)** You will likely make a decision on how you integrate an identity provider.
>
> **[1:50](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=110)** Will you extend your on-premises identity provider to the cloud?
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=114)** Will you choose Entra ID Okta, or another IDP for a cloud single sign-on?
>
> **[2:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=120)** Will you use cloud native key management systems or will you bring an external hardware security module to encrypt data at rest?
>
> **[2:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=128)** How will your centralized logging architecture look like?
>
> **[2:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=131)** Especially in multi-cloud scenarios, how will you integrate with your cloud incidents response?
>
> **[2:17](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=137)** And on the topic of cloud monitoring, how do you approach cloud native application protection?
>
> **[2:22](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=142)** You need a solution to manage cloud security posture and misconfigurations, but will you choose a multi-cloud solution or a cloud native vendor?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (14), [[Security]] (6), business (1), [[Microsoft Entra ID|Entra id]] (1), management (1)
> **Env Vars:** adr (3), idp (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Best Practices:** recommended (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Learning more about cloud security architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=0)** - Congratulations, you now have the tools to design a robust cloud security framework.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=6)** You're now equipped to place the right security controls at the right time, in the right place, at the right cost.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=13)** You learned how to translate your risk appetite into a tangible cloud security architecture, and you also learned how the key security domains of identity, monitoring, and networking can be built in the cloud.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=27)** I highly recommend checking courses in the LinkedIn Learning Library on security implementation of specific clouds you are working with to complement this course.
>
> **[0:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=37)** Look at those courses to learn how to implement the security controls you'll learn to design in this course.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=44)** Each cloud requires a native approach, and effectiveness of controls will vary across clouds.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=51)** If you're an enterprise security architect following the SAMHSA methodology, check out the course using SAMHSA-to-architect cloud security next.
>
> **[1:01](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=61)** Each of the cloud service providers has their own security control lists.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=66)** It's a good idea to evaluate these lists as a baseline for your platform security controls.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=73)** Often these are correlated and cross-referenced to industry standards, making it easier for you to map them to your internal security requirements.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=83)** And finally, there are some great resources available by the Cybersecurity and Infrastructure Security Agency and the National Institute of Standards and Technologies.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=95)** CISA has published a reference architecture guide, which covers cloud governance, security architecture, and DevSecOps.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=102)** The publication provides prescriptive guidance on cloud platform controls and cloud security posture management, and NIST has published a special publication on the zero trust model for cloud native applications.
>
> **[1:56](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=116)** I recommend you look at this special publication and include the recommended changes in your journey towards zero trust.
>
> **[2:03](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=123)** Good luck with your cloud security architecture journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (15), cloud (11), [[LinkedIn]] (1), next (1), [[Cybersecurity]] (1)
> **Env Vars:** samhsa (2), cisa (1), nist (1)
> **Best Practices:** recommended (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Karl Ots]]

## Skills Covered

- Enterprise Architecture
- Cloud Security
- Identity and Access Management (IAM)

## Path Context

### In [[Build an Enterprise Cloud Architecture]]
← [[Cloud Architecture- Advanced Concepts]] | **3 of 4** | [[Building a Cloud Architecture Diagram]] →

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Cloud Architecture- Design Decisions]] | **5 of 9** | [[Planning a Multicloud Solution (2022)]] →

### In [[Identity and Access Management in Azure]]
← [[Azure for Architects- Security and Identity Management with Microsoft Entra]] | **4 of 4**

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Build an Enterprise Cloud Architecture]]
- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
- [[Identity and Access Management in Azure]]

## Related Courses

_Courses sharing skills:_

- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Cloud Security, Identity and Access Management (IAM)
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Google Cloud Security for Beginners- Tools and Services]] — Cloud Security
- [[Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud]] — Cloud Security
- [[Microsoft Azure- Identity and Access Management]] — Identity and Access Management (IAM)

---

[↑ Back to top](#)