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
created: 2026-05-03
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

#### [Introduction](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/introduction?u=76281980&t=0)** - [Stuti] With the majority of organizations moving into the world of [[Digital Transformation]], the demand for cloud engineers is increasing. Internet is a sea of knowledge, but a significant amount of research is necessary to begin learning about [[Microsoft Azure|Azure]] fundamentals. Well, your search ends right here. This course provides foundational level knowledge on cloud concepts and core Azure services, including Azure Monitor, [[Microsoft Defender]] for Cloud, and [[Cost Management]] to name some. Join me, Stuti Kaushal Malviya, on my [[LinkedIn]] Learning course, Azure Cloud Fundamentals: Explore [[Cloud Services]], where we will explore the foundational concepts of all the Azure services in one place. Let's take your Azure knowledge and make it fit for the industry demand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Digital Transformation]] (1), [[Microsoft Defender]] (1), [[Cost Management]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [stuti] (1)

#### [What is cloud computing?](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=0)** - [Instructor] "Introduction to [[Cloud Computing]]". Cloud computing is one of the buzzwords being used extensively these days, but many people still find it difficult to answer the question, "What cloud computing exactly is?" According to Wikipedia, cloud computing is an on demand delivery of compute services such as servers, storage, network, database, software, analytics, and intelligence over the internet that offer flexible resources, faster innovation, and economies of scale. In simpler terms, you can rent out someone else's infrastructure to host your resources rather than provisioning your own data center. This course is aimed to jumpstart your career with one such cloud provider that is [[Microsoft Azure]]. This course provides foundational level knowledge on cloud concepts, core [[Microsoft Azure|Azure]] services, security, [[Privacy]], compliance, and trust, and Azure pricing and support. This course is best suited for audience keen to learn more about cloud computing. The content of this course aligns to AZ-900 exam objectives. Along the course, we will look into many examples where organizations from different industries are making use of Azure globally
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-cloud-computing?u=76281980&t=93)** for provisioning their infrastructure, such as [[Virtual Machines]], virtual machine skillset sets, building their applications, hosting [[Databases]], configuring networking services, and ensuring that every resource is safe and secure in the cloud. There are no prerequisites for the course, but students with an IT background will find the concepts easier to understand. Now, the question arises that why are organizations moving towards cloud? Cloud computing is a consumption-based model, which means the end users only pay for those services which they're using. There are several benefits of using cloud computing over the traditional data center approach. Firstly, cloud computing helps organization to provision their infrastructure within minutes, which would have traditionally taken weeks or months for procurement. Secondly, rather than investing all the cost upfront, popularly known as capital expenditure model, cloud gives you the flexibility to pay only for those resources that you use, which is also known as operational expenditure. Rapid elasticity, global scale, reliability, speed, and security are some of the other advantages you get while using cloud to provision your resources. Join me in this course to learn more about Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (8), [[Microsoft Azure|Azure]] (4), [[Microsoft Azure]] (1), [[Privacy]] (1), [[Virtual Machines]] (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **CLI Commands:** find (2), az (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [What is Azure?](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=0)** - [Instructor] Choosing the right cloud vendor is a very important decision for anyone planning to take their business into the cloud. Numerous enterprises have witnessed accelerated business growth by choosing [[Microsoft Azure|Azure]] as their cloud platform. Let us look a brief into what Azure exactly is. The Azure Cloud platform has more than 200 [[Microsoft Products|products]] and [[Cloud Services]] that are designed to help you bring new solutions to life, solve today's challenges, and create the future. Azure gives you flexibility to build, run, and manage applications across multiple clouds, on premises, and at the edge. In short, you can simply integrate and manage your environments with Azure services that are designed for running in a hybrid environment. [[Microsoft]] offers industry-leading comprehensive compliance coverage, which helps in proactively safeguarding your data and streamlining compliance with the most comprehensive compliance coverage of any cloud service provider. 95% of Fortune 500 companies trust their business on Azure because of Microsoft's strong standing legacy. Furthermore, Azure brings together everything you need to build your solution from scratch.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/what-is-azure?u=76281980&t=94)** From [[DevOps]] to [[Business Analytics]] and the [[IoT|Internet of Things]], there are many other services running with cost-effective solutions that work well with multiple industries, be it healthcare, financial services, government, retail, or manufacturing, to name some. There are many companies that are doing great with Azure. This is not all. Azure is continuously adding services to its preexisting diverse portfolio by bringing in continuous innovations that support your development today and your product visions for tomorrow. Click on the free account so that you can create your free account and get your hands on Azure experience today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Microsoft]] (2), [[Microsoft Products|Products]] (1), [[Cloud Services]] (1), [[DevOps]] (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud benefits and considerations](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=0)** - [Narrator] Different types of cloud deployment models. Now that we are familiar with [[Microsoft Azure|Azure]] and its history, let's learn about types of cloud deployment models. It is important to note that not all clouds are same. Further, there are several [[Cloud Computing]] models that have evolved over time to meet the rapidly changing needs of the industry. Let us learn about three different types of cloud deployment models that are commonly used in the industry: public cloud, private cloud, and [[Hybrid Cloud]]. Now that we are aware about the different types of deployment models, let us learn about each one of them. Firstly, let us start with the public cloud. Public cloud is one of the most common types of cloud deployment model that is owned and operated by a third party cloud service provider. [[Microsoft Azure]] is the second largest public cloud provider in the industry. You can access the [[Cloud Services]] and manage your account using a web browser. Azure provides your web portal where you can just log in and use all the public services. Some of the major advantages of using public cloud include: lower operational cost, lesser maintenance overhead, high reliability, and nearly unlimited [[Scalability]]. Next in line comes the private cloud.
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=94)** Private cloud, popularly known as internal or corporate cloud, is used to host resources that are used exclusively by a single business or an organization. With private cloud, users get additional control, security, and [[Privacy]] as people outside your organization would not be able to access resources hosted in private cloud. One of the major drawbacks of private cloud is that private cloud requires almost similar staffing, management and maintenance expenses as incurred with traditional data centers because the company's IT department is responsible for managing the cloud. Finally, we have hybrid cloud. Hybrid cloud is a combination of both public and private cloud. It is a cloud computing environment that combines an on-premise data center, also called US private cloud with public cloud allowing data and applications to be shared between them. When computing and processing demands fluctuate, hybrid cloud computing model gives businesses the flexibility to use new cloud first technologies for their new workloads while still keeping their business critical applications and data on premise. Hybrid cloud model is best suited for industries such as [[Banking]], finance, healthcare, et cetera,
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-benefits-and-considerations?u=76281980&t=191)** that deal with highly sensitive data and need the data to be kept on premises while still wanting to leverage the advantages of cloud. Let's analyze all of the cloud deployment models in a class. There are several factors that come into picture while choosing a cloud deployment model: Initial setup, scalability, cost optimization, reliability, [[Data Security]], and privacy are some of the major factors that you have to consider while choosing a cloud deployment model for your organization. It is important to understand that there is no one type of cloud which fits everyone's requirements. Choice of cloud computing model depends on your business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hybrid Cloud]] (5), [[Microsoft Azure|Azure]] (2), [[Cloud Computing]] (2), [[Scalability]] (2), [[Privacy]] (2)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Discuss different types of cloud models](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=0)** - [Instructor] Cloud benefits and considerations. [[Cloud Computing]] is a big shift from the traditional way of businesses being run. Organizations have changed their [[Microsoft Outlook|outlook]] towards the business after introduction of cloud. Traditionally, organizations had to pay upfront cost for all the infrastructure that they used to purchase. This cost was popularly known as capital expenditure, or CapEx. Cloud service providers today operate on a consumption-based model that is OpEx, which is also known as operational expenditure. Here, the companies pay only for the services which they're consuming, there is no upfront cost involved with OpEx consumption model. With pay as you go model, you can stop paying for the resources which are no longer needed. You can simply delete and you will not be charged for those resources anymore. There are several advantages of using cloud. Speed. Most cloud computing services are provided as self-service. Even vast amount of computing resources can be provisioned in minutes, typically, with just a few mouse clicks, giving businesses a lot of flexibility and taking the pressure of [[Capacity Planning]]. Agility. Agility provides you with the capability
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=95)** to deploy and configure cloud-based resources quickly as your application requirements change. Cost. Cloud computing eliminates the capital expense of buying [[Hardware]] and software, as well as setting up and running onsite data center resources, including server racks, ensuring round the clock electricity for power and cooling, and the IT experts for managing the infrastructure. High availability. Depending on the service level agreement that you choose, your cloud-based applications can provide a continuous [[User Experience (UX)|user experience]] with no apparent downtime, even when things go wrong. Global scale. The benefits of cloud computing services include the ability to scale elastically, deliver the right amount of IT resources. That is, you can get more or less computing power, storage, bandwidth, et cetera, right when they are needed, and from the right geographical locations. Performance. You can configure cloud-based apps to take advantage of auto-scaling, so your apps always have the resources they need. [[Microsoft Azure|Azure]] Services run on a worldwide network of secure data centers, which are regularly upgraded to latest generation
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/discuss-different-types-of-cloud-models?u=76281980&t=188)** of fast and efficient computing hardware. This offers several benefits, including reduced network latency for applications and greater economies of scale. Security. Azure offers a broad set of policies, technologies, and controls that strengthen your security posture overall, helping protect your data, applications and infrastructure from potential threats. Disaster recovery. By taking advantage of cloud-based backup services, data replication, and geo-distribution, you can deploy your apps with the confidence that comes from knowing that your data is safe even in the event of disaster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (4), [[Hardware]] (2), [[Microsoft Azure|Azure]] (2), [[Microsoft Outlook|Outlook]] (1), [[Capacity Planning]] (1)
> **Definitions:** known as (2), is a  (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Types of cloud services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=0)** - [Instructor] Types of cloud service models. Most [[Cloud Computing]] services fall under four broad categories, namely [[IaaS|infrastructure as a service]], [[PaaS|platform as a service]], [[SaaS|software as a service]], and [[Serverless Computing]]. Let's learn in depth about each of these services one by one, starting with infrastructure as a service. This is the most basic category of cloud computing service, which is closest to managing the physical servers. Cloud service provider will take care of the [[Hardware]] updates, but OS maintenance and network configuration needs to be taken care of by the business running in the cloud. Infrastructure as a service offers essential compute, storage and network services on demand. Let's learn more about [[Microsoft Azure|Azure]] [[IaaS]] offerings. This page displays a list of comprehensive services offered under Azure IaaS category, including [[Virtual Machines]], virtual machine scale sets, dedicated hosts, load balancer, networking, Network Watcher, Azure storage, and managed disks to name some. You can see a list of all the compute services that are offered under IaaS on this page. Next comes platform as a service. Platform as a service supplies an on demand environment
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=96)** for developing, testing, delivering, and managing software applications. [[PaaS]] is designed to enable developers to quickly create web or mobile applications without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and [[Databases]]. Azure PaaS services include app services, [[Load Testing]], app configuration, deployment environments, [[Microsoft Entra ID|Azure AD]] cognitive services, machine learning, et cetera. Let us look at all the broad offerings of Azure PaaS. This page shows a list of all the PaaS services being offered by Azure, ranging from AIML, analytics, compute, database, development, identity and security, [[IoT]], management governance, migration, network, and storage. So you can see a list of all the services that are highlighted in different colors over here. Software as a service. Software as a service is a method for delivering software applications over the internet on demand, and typically on a subscription basis. With [[SaaS]], cloud providers host and manage the software applications and its underlying infrastructure. They can also handle any maintenance,
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=190)** like software upgrades and security patching. Users connect to application over internet, usually with the web browser on phone, tablet, or PC. For example, [[Microsoft Office]] 365 provides a fully working version of Microsoft Office that runs in the cloud. Azure portal in itself can be seen as a great example of Azure SaaS offering. Let us learn more about all the SaaS offerings being provided by Azure at this point. This page displays the comprehensive list of all the Azure services that are present currently, including data catalog, [[Microsoft Power BI|Power BI]], Azure [[DevOps]], Visual Studio, [[Microsoft Defender|Defender]] for Cloud, [[Microsoft]] Sentinel, Azure Migrate and site recovery to name some of the major SaaS offerings by Azure. Overlapping with PaaS, serverless computing focuses on building app functionality without spending time continually managing the server and infrastructure. The cloud provider automatically provisions, scales and manages the infrastructure that is required to run the code. Serverless architectures are highly scalable and event driven. This approach enables developers to increase their focus on business logic
>
> **[4:44](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/types-of-cloud-services?u=76281980&t=284)** and deliver more value to the core of the business. Serverless computing help teams increase their productivity and bring [[Microsoft Products|products]] to market faster. Azure Functions, serverless, containerized [[Microservices]] like Azure Container App, serverless [[Kubernetes]] are some of the examples of serverless compute services that are being offered by Azure. Once you have decided to move towards cloud, your next step is to select a cloud provider. It is vital to assess the reliability and capability of a service provider. Undoubtedly, [[Microsoft Azure]] is one of the leading global providers of cloud computing services that is preferred by most of the Fortune 500 companies to run their businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[PaaS]] (5), [[SaaS]] (4), [[Cloud Computing]] (3), [[IaaS|Infrastructure as a service]] (3)
> **Env Vars:** aiml (1), iot (1)
> **Tools:** azure portal (1), visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Shared responsibility model](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=0)** - [Instructor] Shared Responsibility Model. As you consider and evaluate public [[Cloud Services]], it's critical to understand the shared responsibility model. You must also know the list of security tasks that are handled by the cloud provider and the tasks that are handled by you. The workload responsibilities vary depending on whether the workload is hosted on [[IaaS|infrastructure as a service]], [[PaaS|platform as a service]] model, [[SaaS|software as a service]] model, or in an on-premises data center. Following diagram illustrates the areas of responsibilities between you and your cloud service provider. Here it is [[Microsoft]]. In an on-premises environment, the customer is responsible for managing end-to-end security, including physical security, host infrastructure, network controls, application level controls, identity and access management, and [[Data Classification]] [[Accountability]]. As we move from infrastructure as a service to software as a service, the responsibilities get distributed amongst the cloud service provider and the customer. Physical security is one of the responsibilities that is totally owned by the cloud service provider when you're using the [[Cloud Computing]]. The remaining responsibilities are shared between the customers and cloud service providers.
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/shared-responsibility-model?u=76281980&t=96)** These responsibilities contribute to achieving a compliant and secure computing environment. As we move from on-premises to [[SaaS]], cloud providers' accountability towards different services keeps on increasing. Nonetheless, ensuring that the data and its classification is done correctly and that the solution will be compliant with regulatory obligations is the responsibility of customer. Further, the customer is also accountable to ensure that the entire solution, including data, is securely identified, labeled, and correctly classified to meet any compliance obligations. Distinction between sensitive customer data and content that is designed to be made public must be done by the customer. Understanding the shared responsibility model is essential for customers moving to the cloud. Cloud providers offer considerable advantages related to security and compliance, but these advantages do not absolve the customer from protecting their users' applications and service offerings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IaaS|Infrastructure as a service]] (2), [[SaaS|Software as a service]] (2), [[Accountability]] (2), [[Cloud Services]] (1), [[PaaS|Platform as a service]] (1)
> **Speakers:** - [instructor] (1)


### 2. Core Azure Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure architectural components](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=0)** - [Instructor] [[Microsoft Azure]] relies on a few key architectural components to provide redundancy and high availability. These core [[Microsoft Azure|Azure]] architectural components include Azure management groups and subscriptions, Azure Resource Groups, resources, and Azure Resource Manager, Azure regions, geographies, region pairs, and availability zones. Azure organizes the structural hierarchy of its resources in four levels, namely management groups, subscriptions, resource groups, and resources. Let's learn about each of these levels one by one, starting with subscriptions. You need a subscription to use an Azure account. A subscription provides you with authenticated and authorized access to Azure [[Microsoft Products|products]] and services. It also allows you to provision resources. An account can have one or multiple subscriptions depending on the organization requirement. For each subscription, there are limits or quotas on the amount of resources that you can create and use. Organizations can use subscriptions to manage costs and resources that are created by users, teams, or projects. Azure provides different types of subscriptions, namely free trial, pay as you go, enterprise agreement,
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=96)** and cloud solutions provider subscription. Management groups. If your organization has many subscriptions, you might need a way to efficiently manage access, policies, and compliance for those subscriptions. Azure subscriptions are organized into containers called management groups. Azure management group provides a level of scope above subscriptions. Management group can include multiple subscriptions. All subscriptions within a management group automatically inherit the conditions applied to a management group. A management group tree can support up to six levels of depth. Next, let us discuss about resource groups. Resource groups act as a logical container for deploying different Azure services like web apps, [[Databases]], storage accounts, et cetera. Resources can exist in only one resource group at a time, and the resources are combined into resource groups. However, one application can have its resources split across multiple resource groups. Next, let us discuss about resources. Azure resources are components like storage, [[Virtual Machines]], network, and storage account, et cetera, that are available to build cloud solutions. Resources can exist in only one resource group at a time.
>
> **[3:16](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=196)** Resources may be created in a region within different geographical locations around the globe that contain Azure data centers. These data centers aren't directly exposed to the users. Azure organizes data centers into regions. Let's dig deep into Azure geographies and regions. Each Azure geography contains one or more regions and meet specific data residency and compliance requirements. This lets you keep your business critical data and apps nearby on fault tolerant, high capacity networking infrastructure. You can simply select a location of your preference, select a geography from here. You see a list of geographies that are available in Azure. Azure is the first cloud service provider to have maximum data center presence across the globe. These data centers aren't directly exposed to the users. Azure organizes data centers into regions. Here you can see geography is distributed into different regions. When you deploy a resource in Azure, you will often need to choose a region where you want your resource to be deployed. A region is a geographical area containing at least one, but potentially multiple data centers that are in close proximity
>
> **[4:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=289)** and networked together with a low latency network. For example, here, if I choose Australia, you can see Australia has been divided into three regions, namely Australia Center, Australia East, and Australia Southeast. Availability zones. Availability zones are physically separate data centers within an Azure region. Each availability zone is made up of one or more data centers equipped with independent power, cooling, and networking. An availability zone is set up to be an isolation boundary. If one of the zone goes down, the other continues working. Availability zones are connected through high speed private fiber optic networks. Azure provides the most extensive global footprint when compared to any other cloud provider and is rapidly opening new regions and availability zones. Azure has availability zone in every country or region in which Azure operates a data center. The following regions are currently supported under Azure availability zones. Next, let us learn about region pairs. Region pairs help Azure pair two data centers within same geography at least 300 miles away to help reduce likelihood of interruptions due to catastrophic events
>
> **[6:23](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-architectural-components?u=76281980&t=383)** such as a natural disaster, power outage, civil unrest, or physical network outage that may affect multiple availability zones. If a region in a pair was affected by a natural disaster, service would automatically fail over to other region in its region pair. Let us learn more about region pairs using this link. This page displays a list of all available Azure region pairs. If an extensive Azure outage occurs, one region out of every pair is prioritized to make sure that at least one is restored as quickly as possible for applications hosted in that region pair. Further, planned Azure updates are rolled out to region pairs one at a time to minimize downtime and risk of application outage. Data continues to reside within the same geography as its spare, except Brazil South. Brazil South's secondary region is South Central US. Now that we are aware about basic architectural components of Azure, let's deep dive into Azure Portal and get to learn its practical usage in the upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (32), [[Microsoft Azure]] (1), [[Microsoft Products|Products]] (1), [[Databases]] (1), [[Virtual Machines]] (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Walk-through of Azure portal and core Azure workloads](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=0)** - [Instructor] [[Cloud Computing]] is one of the top sought after skills that most companies are looking for these days. Whether you are a security enthusiast, a data analyst, a developer, a small business, or a large IT enterprise, [[Microsoft Azure|Azure]] is for everyone. [[Microsoft Azure]] lets you create future-ready innovations across all your environments by offering some of the latest cutting edge technologies. You can use this link to access Azure Portal to create and manage Azure resources. Let's jump into the Azure portal now. You can either use a guided approach to create your resources, or use Command Line and [[Powershell]] in Azure if you are a scripting enthusiast like me. The top right hand corner displays the name of your subscription which you are using. You also get an option to switch between subscriptions by clicking on the name of your subscription. The portal homepage displays the list of most recently used services and the recently created resources. Here, you can see virtual machine resource group that has been created recently. Click on the Home button to navigate back to the homepage where you can see most important and widely used tools, including [[Microsoft]] Learn, Azure Monitor, [[Microsoft Defender]] for Cloud,
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=94)** and [[Cost Management]]. Under the Useful links section, you see this Quickstart Center hyperlink. This link redirects you to the Getting Started with Azure page where you can find self-help videos, which are really beneficial for beginners. Under the projects and guides section, you can learn about popular Azure services and create your first Azure project. On the top right corner, you see a hamburger icon. This section displays a list of all services that are offered by Azure. Most of the Azure services are designed to build solutions your way. They are scalable to meet your immediate needs and your future business needs as well. One of my favorite sections is Cost Management and Billing.
>
> **[2:32](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/walkthrough-of-azure-portal-and-core-azure-workloads?u=76281980&t=152)** Here, you can visualize your spending, set budgets, and allocate costs as per your business needs. You can also leverage features offered by Azure Advisor, which analyzes your telemetry and suggests best practices based on your cost, security, reliability, [[Operational Excellence]], and performance. To begin with using Azure, click on the Start Free and create your free trial account with $200 credit. The popular services are free for 12 months. There are 55 plus other services, which are always free for you. Click on the Start Free hyperlink and follow the onscreen instructions to start creating your Azure account now. There are a lot of things happening in the cloud, so create your free trial account now and use the credits to kickstart your Azure journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Cost Management]] (2), [[Cloud Computing]] (1), [[Microsoft Azure]] (1), [[Powershell]] (1)
> **Tools:** azure portal (2), command line (1), powershell (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** find (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Azure compute services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Compute is an on-demand computing service for running cloud-based applications. It provides computing resources such as disks, processors, memory, networking, and operating systems. These resources are available on demand and typically be made available in minutes or even seconds. You pay only for resources you use and only for as long as you're using them. Let's jump into the Azure portal and look under the compute section. You will find compute resources under all services section. Azure supports a wide range of computing services ranging from [[IaaS]] solutions, [[PaaS]] solutions, serverless and [[Microservices]], high performance compute, and [[Hybrid Cloud]] compute services. Let's look into some of the most predominantly used compute services. To begin with, Azure [[Virtual Machines]]. The virtual machine, which is also popularly known as VM, is an on-demand scalable compute resource, which is used by customers who require more control on the computing environment. VMs provide [[IaaS|infrastructure as a service]] in form of virtualized servers and can be used in many ways. An Azure VM gives you flexibility of virtualizing without having to buy
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=93)** and maintain the physical [[Hardware]] that runs your virtual machine. VMs in Azure are available in two operating system versions, namely [[Windows]] and [[Linux]]. You get 750 hours of B1S SKU for both Windows as well as Linux OS to get your hands dirty. Azure provides an option to create Azure virtual machine, Azure virtual machine with preset configuration and more VMs and related solutions. Let's get started with creating an Azure virtual machine. You need to fill the mandatory details that are marked with red asterisk. Fill the resource group name, virtual machine name, the region where you want to host it, pick your availability options, choose a security type, image that you want to run your virtual machine on, size of a virtual machine, create username, give a password. For public inbound, we'll allow the RDP port for now. Go to the next section. Here, you get default OS disk. You can add and configure additional disks for your virtual machines or attach existing disks as per your requirement. Next, you can choose the basic network options that are already there.
>
> **[3:07](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=187)** Go to the management. Here, you can enable identity, log in with [[Microsoft Entra ID|Azure AD]], configure auto shutdown for your virtual machine, enable backup, enable disaster recovery, and manage how the patching would be done for your virtual machine. I will be selecting manual updates. You can enable boot diagnostics and OS guest diagnostics if required. Next, click on review plus create. Once the validation passes, click the create button. You will see the deployment is in progress and it hardly takes two to three minutes for your VM to be provisioned in Azure. Here you see our deployment has been completed. While virtual machines are an excellent way to reduce costs versus the investments that are necessary for physical hardware, they are still limited to a single operating system per virtual machine. If you want to run multiple instances of an application on a single host machine, containers are an excellent choice. Let's learn about containers. Containers are a lightweight, virtualized environment that does not require operating system management. They fall under serverless and microservices category that is made available under Azure compute. These days, containers are becoming the preferred way to package, deploy and manage cloud applications.
>
> **[4:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-compute-services?u=76281980&t=282)** You can see the new category that has been added as container apps. Azure Function app is another important compute service that is offered by Azure that lets you group functions as a logical unit for easier management, deployment, and sharing of resources. Functions let you execute your code in a serverless environment without having to first create a VM or publish a web application. Azure [[Kubernetes]] service is a complete orchestration service for containers with distributed architectures and large volume of containers. AKS offers the quickest way to start developing and deploying cloud native apps in Azure. AKS is the future and it simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. For AKS, Azure handles most of the critical tasks like health monitoring and maintenance. To learn more about Azure, you can visit this free training link from [[Microsoft]]. I hope you get a good overview of compute services using this video. Thanks, and join me on the further videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (20), [[Virtual Machines]] (3), [[Microservices]] (2), [[Hardware]] (2), [[Windows]] (2)
> **Env Vars:** aks (3), b1s (1), sku (1), rdp (1)
> **Definitions:** is an  (2), known as (1), is a  (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)

#### [Azure network services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=0)** - [Instructor] Networking is a critical component of any [[Cloud Infrastructure]] and is responsible for either making or breaking off a cloud deployment. IT teams need to connect resources and optimize applications, which require a robust network architectural design. [[Microsoft Azure|Azure]] uses its huge backbone network to support connectivity of resources that are hosted in cloud. Let us look into all the network services that are available in Azure presently. As you can see in the portal, services range between different categories, namely network foundation, hybrid connectivity, [[Network Security]], and load balancing. We'll learn about some of the most commonly used network services that are offered by Azure. Here you see we have already created two virtual networks. Azure virtual network, commonly known as Vnet is one of the most fundamental building blocks of a network service, which enables users to create, connect, and manage a secure network infrastructure in cloud. Vnets can also be considered as extension to your on-premise network, which enables communication between cloud, on-premise services, and internet. Vnet is further divided into smaller segments called subnets, which can be used for creating boundaries
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=93)** between your resources and configuring isolated and highly secure environment for your applications. Here you can see we have four subnets created under our Vnet. One thing that is important to notice that resources within the same Vnet can communicate with each other seamlessly. However, for enabling communication between resources present in different Vnet, we would need to establish Vnet peering. Now, what exactly is Vnet peering? Vnet peering enables you to seamlessly establish connection between two virtual networks and send traffic over the [[Microsoft]] network. It is important to note that virtual networks with overlapping address spaces cannot be peered. Some of the important features of Vnet include enhance security and isolation, which enables you to run [[Virtual Machines]] and applications in an isolated and highly secure manner using the private IP address. We can build sophisticated networked topologies by creating advanced overlay architectures on the top of Azure resources and services. You can use Vnets to combine [[PaaS|platform as a service]] and [[IaaS|infrastructure as a service]] resources and reduce network complexity. You can also gain flexibility to build your applications. Next, let us learn about VPN gateways.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=188)** VPN Gateway is also one of the important networking services that is being offered by Azure. VPN Gateway is used to send traffic between Azure Virtual Network and an on-premise location over the public internet. Azure VPN gateway instance is deployed in a dedicated subnet within a Vnet, and its name is by default taken as gateway subnet. So as you see here, the name by default is Gateway Subnet. VPN Gateways support three broad categories of connectivity requirements, namely site-to-site connectivity for connecting on-premise data centers to Vnet, point-to-site connectivity for connecting individual devices to your corporate network. One of the example would be while you're working from home, you use this VPN to connect to your [[Microsoft Office|office]] network. Then connect Vnet to another Vnet through network-to-network connection, that is, peering off to Vnets. Now, let us learn about another service, which is ExpressRoute. Azure ExpressRoute is used to extend your on-premise network into Azure over a private connection. The important point to note here is that it's a private connection and your network connection or your network traffic is not going over the internet. That is the traffic does not pass via internet
>
> **[4:45](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=285)** when you're using express route connection to establish communication between your on premises and your cloud network. This connection offers more speed, reliability, consistency, and higher security when compared to the typical connections over the internet. Next is the Azure load balancer. Load balancing helps in evenly distributing incoming traffic across multiple computing resources. Load balancer handles millions of requests per second, ensuring that your solution is highly available. Azure load balancing service offers regional as well as global load balancing capabilities. Currently, Azure offers four types of load balancing services. The classic load balancer, Azure load balancer is a high performance ultralow latency layer four load balancing service, which supports all UDP and TCP based protocols such as HTTP, HTTPS, SMTP, and other protocols that are used for real time voice and video messaging application. This is built to handle millions of requests per second while ensuring that your solution is highly available. Next is an application gateway. The application gateway is a web traffic load balancer that enables you to manage traffic to your web applications.
>
> **[6:21](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-network-services?u=76281980&t=381)** It works on layer seven of the OSI model. Next comes the traffic manager. Azure traffic manager is a DNS based traffic load balancer. The service allows you to distribute traffic to your public facing applications across the global Azure region. Traffic manager also provides you public endpoints with high availability and quick responsiveness. Last but not the least is the Azure front door and CDN profiles. This is a security led modern cloud CDN, that is a content delivery network, which provides static and dynamic content acceleration, global load balancing, and enhanced security for your apps, APIs, and websites with intelligence threat protection. This load balancer type works on layer seven of the OSI model. So now that you have the basic idea about most commonly used networking services in Azure, you will be able to connect all the cloud resources securely using your Azure networking services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), [[Cloud Infrastructure]] (1), [[Network Security]] (1), [[Microsoft]] (1), [[Virtual Machines]] (1)
> **Env Vars:** vpn (6), osi (2), cdn (2), udp (1), tcp (1)
> **Definitions:** is a  (6), known as (1), is an  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Azure storage services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage platform is one of the best in class [[Cloud Storage]] solutions that is made available by [[Microsoft]] for meeting the modern [[Data Storage]] requirements. It offers easily accessible, highly available, massively scalable, secure, and durable storage solutions. The current storage solutions provided by Azure include hybrid and edge storage, object, file, and block storage, storage migration, and some additional storage services like Data Lake Storage Gen1, Azure Managed Lustre, HPC caches and Storage Sync Service. To begin with, let us learn about Azure Storage account, which is one of the most widely used storage service. Here, I've already created an Azure storage account for ease of work. Azure Storage is a Microsoft managed service providing cloud storage that is highly available, durable, scalable, secure, and redundant. Azure Storage includes Azure blobs, Azure containers, file shares, queues, and tables. The cost of your storage account depends on the usage and options that you choose while configuring the storage account. While creating a storage account, you will see
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=97)** that it is available in two performance tiers, namely standard performance tier that is recommended for most scenarios and is general purpose v2 storage account, which has redundancy options of LRS, GRS, ZRS and GZRS, and premium performance tier, which has page blobs, block blobs, file shares. Azure Storage offers five core services, namely blob, files, queues, tables, and disks. Let us learn about each of these one by one, starting with the blob storage. Azure Blob Storage is Microsoft's object storage solution for cloud, which is optimized for storing massive amounts of [[Unstructured Data]]. Blobs mainly store large files like documents, log files, video and audio files, et cetera. This type of storage is an ideal option for storing data for backup and restore, and is also used in creating site recovery solutions. Blob storage also supports Azure Data Lake Gen2, which is Microsoft Enterprise's [[Big Data Analytics]] solution in cloud. Now let's learn about Azure Files. Azure Files set up a highly available network file share that can be accessed
>
> **[3:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=189)** by using the standard message block or SMB protocol. Data in Azure File shares is highly available with global redundancy. Azure Files can be mounted directly on [[Windows]], [[Linux]], and Mac OS via SMB. Some of the common uses of Azure Files include lifting and shifting an application to the cloud that uses native file system APIs. Azure Files can also be used to share data with other applications that are running in Azure. It can be used as a replacement for your on-prem file servers on NAS devices. Next, let us look into Azure Queues. Azure Queue service is used to store and retrieve a large number of messages from anywhere in the world via authentic calls using HTTP or HTTPS protocol. Queue messages can be up to 64 KB in size and a queue can contain millions of messages. Queues are generally used to store list of messages to be processed asynchronously. Azure Queues are best for asynchronous messaging. For example, an Uber application uses the message queue for booking a ride and driver allocation. Next, let us look into Azure Tables. Azure Table service stores structured [[NoSQL]] data,
>
> **[4:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=286)** providing a key or attribute store with the schema-less design. Tables are used to store flexible data sets, like user data for web application, address books, device information, and other types of [[Metadata]] that are required by your services. Next in line comes Azure Disks. Azure Disks allows data to be persistently stored. Disk data can be easily accessible from attached virtual hard disks. Let us look into the types of managed disks that are available in Azure. Ultra SSD managed disks, premium SSD managed disks, standard SSD managed disks, and standard HDD managed disks. Now that you're familiar with different storage options available in Azure, let us learn about the different types of storage tiers available for our use. Data stored in cloud can grow at an exponential pace. To manage costs of your ever expanding storage needs, Azure offers three data tiers, which will help you save on cost for the data, which needs to be stored, but doesn't need to be retrieved on a frequent basis. These access tiers are categorized into hot tier, cool tier, and archive tier. Hot tier is an online tier, which is optimized for storing frequently accessed data.
>
> **[6:22](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-storage-services?u=76281980&t=382)** This tier has highest storage cost, but lowest retrieval cost. Cool tier. This is an online tier, which is used for storing data that is infrequently accessed or modified. Data in cool tier should be stored for a minimum of 30 to 90 days period. This tier has lower storage cost, but higher retrieval cost when compared to hot storage tier. Archive tier. This is an offline tier, which is used for storing data that is rarely accessed. For example, you would have an option where you have to store data for auditing purpose, but that data does not need to be retrieved every day. That might be needed once in a year. In that case, archive tier would be your best storage solution. It is important to know that it will need a minimum of 15 hours to retrieve data depending on the size and latency. Data in archive tier must be stored for a minimum of 180 days, and this is the cheapest storage option available. Finally, all the data stored in Azure is automatically encrypted on upload and decrypted on retrieval. Note that Azure Storage is a powerful and flexible solution to store your data in cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (31), [[Microsoft]] (4), [[Cloud Storage]] (2), [[Data Storage]] (1), [[Unstructured Data]] (1)
> **Env Vars:** ssd (3), smb (2), hpc (1), lrs (1), grs (1)
> **Definitions:** is an  (4), is a  (2)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Azure database services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=0)** - [Instructor] Database is a collection of data that is organized in a way which can be easily retrieved and managed. Any website or webpage that you see on the internet needs a database to store the data in the backend. For example, while placing an order on an [[E-Commerce]] website, in the front end, you will see the items which you pick up. But in the backend, there is a database that stores all this information. With [[Microsoft Azure|Azure]], you get highly available, secure, and scalable database services, which can be automated to save you time and money. Here you can find a list of database services, including Azure [[SQL]] Database, Cosmos DB, open-source database engines, hybrid data services, and some additional data services that are made available to you by Azure. Let's learn about some of the most prominently used database services. SQL Database. Azure SQL Database is an up-to-date, fully managed, serverless, always on relational database service that is mainly used to build apps that can scale with managed and intelligent SQL [[Databases]] in the cloud. SQL Managed Instance. This is the type of Azure [[PaaS|Platform as a Service]]. It is an intelligent cloud database service
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=94)** that provides the broadest [[Microsoft SQL Server|SQL server]] database engine compatibility. Azure SQL Managed Instance is an ideal choice of architects to plan migration from on-prem to cloud. SQL [[Virtual Machines]]. SQL server on virtual machine falls under the category of [[IaaS|Infrastructure as a Service]]. This is the best choice for people who need full control of their database and looking to move into the cloud as fast as possible without making any big application changes. Cosmos DB. Azure Cosmos DB is a fully managed, No-SQL database [[PaaS]] service. This is an ideal choice for those looking for maintaining globally distributed, low latency database service that is highly available. Azure provides 99.99% SLA, continuous backup, and enterprise grade security for its Cosmos DB Service. Azure Database for [[PostgreSQL|Postgres]] SQL. This is a relational database service in the cloud, which is offered in two variants, namely single server and hyperscale. Postgres SQL comes with a built-in high availability, adjustable automatic backup, and point in time restore for up to 35 days. Finally, it's important to note
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-database-services?u=76281980&t=188)** that many large scale organizations are leveraging the benefits of Azure databases. Azure databases offer agility to customers as they are able to embrace innovation by not just automating today, but also continuously improving tomorrow. So, I'd suggest leveraging the database services offered by [[Microsoft Azure]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[SQL]] (10), [[Databases]] (3), [[Microsoft SQL Server|Sql server]] (2), [[PostgreSQL|Postgres]] (2)
> **Env Vars:** sql (12), sla (1)
> **Definitions:** is a  (4), is an  (4)
> **CLI Commands:** find (1)
> **Versions:** 99.99 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Identity, Governance, Privacy, and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure identity services](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=0)** - [Instructor] Identity is commonly defined as a distinguishing character or personality of an individual. It is considered as the primary parameter of security. Accurately proving that someone is a valid user with an appropriate level of access is critical. Identity and access management is one of the most important topics for anyone working with [[Microsoft Azure|Azure]]. [[Microsoft Entra ID]] is the identity and access management service that has been offered by [[Microsoft]]. You can log into the Microsoft Entra ID Admin Center using this hyperlink. Microsoft Entra ID Admin Center combines code dietary services like identity, protection, identity governance, verifiable credentials, permissions management, and global secure access. Traditionally, protecting access to systems and data involved on-premises network parameters and physical access controls. However, due to increasing flexibility of working from anywhere and Bringing Your Own Device strategy is being used, many of the access points are now available outside the company's physical network. Organizations need to ensure employees can access only the authorized data. Every one of us will have access
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=94)** to our company's annual profit statement, but not everyone is authorized to look at your salary statement. Authentication and authorization are two fundamental concepts of identity and access service that you need to understand. Let us discuss about each of these one by one. What is authentication? Authentication is the process of validating the identity of a registered user or a process before enabling their access to protected systems and networks. You have a username and a password to prove your identity. Biometrics or secondary OTP in your mobile device are some other common ways to validate whether a user is genuine or not. What is authorization? Authorization is a security mechanism to determine access levels that an authorized user or service is allowed to have on any resource. Many a times, your organization have confidential and restricted data that is limited to only a certain set of authorized people. Let us learn about this concept with an example. Here, Nicole uses her credentials to authenticate successfully and log into the company's domain. And according to her access levels, she's authorized to pull specific data into her system. She also makes use of her mobile phone
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-identity-services?u=76281980&t=190)** to add a second step of security while accessing her system. This brings to our next topic, which is Azure Multifactor Authentication. Multifactor Authentication is a process where user is prompted during the sign-in process for an additional form of identification. Examples include a code in the mobile phone or a fingerprint scan. Multifactor Authentication also provides additional security for your identities by requiring two or more elements to fully authenticate yourself. Something you know. This could be a password or an answer to a security question. Something you possess. This can be a mobile app that receives a notification. It can also be a [[Hardware]] token. Something you are. This is typically a biometric property such as fingerprint or a face scan, which is available in many mobile devices these days, mainly the smartphones. This brings us to the end of our topic. I hope this simplifies the concept of authentication and authorization with respect to identity services. In the upcoming videos, we shall deep dive into Microsoft Entra ID and its related licensing part. So, stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Microsoft Azure|Azure]] (2), [[Microsoft]] (1), [[Hardware]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** otp (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Entra ID](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=0)** - [Instructor] [[Microsoft Entra ID]], formerly known as [[Microsoft Entra ID|Azure AD]], is [[Microsoft]]'s cloud-based identity and access management service. You get all the features under Microsoft Entra ID, which was previously available under [[Microsoft Entra ID|Azure Active Directory]]. Let's learn about some of the important features that are being offered by Microsoft Entra ID Admin Center by logging into this URL. Here, you get a Favorites section where you can easily bookmark the most utilized services. [[Microsoft Entra ID|Entra ID]] provides single sign-on experience, simplifying access to applications from anywhere. It also offers seamless [[User Experience (UX)|user experience]] by providing quick and easy sign-in to keep your users productive and reduce their time for managing passwords. Conditional access and [[Multi-factor Authentication]] features help secure data. The Privileged Identity Management feature ensures that right people have accurate access to correct resources within an additional just-in-time, which can be activated by simply clicking on this Activate button. Microsoft Entra ID is available in four editions, namely Azure Active Directory Free, Microsoft Entra ID P1, Microsoft Entra ID P2, and Microsoft Entra ID Governance.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-active-directory?u=76281980&t=97)** Let's learn about each of these editions one by one. The free edition is included with a subscription of commercial online service, example [[Microsoft Azure]], Dynamics 365, Intune and Power Platform. Microsoft Entra ID P1 for Students is available as a standalone or included with [[Microsoft 365]] E3 license for enterprise customers and Microsoft 365 Business Premium for small to medium businesses. Microsoft Entra ID P2 license is available as a standalone or included with Microsoft 365 E5 license for enterprise customers. Microsoft Entra ID Governance is an advanced set of identity governance capabilities that are available for Microsoft Entra ID P1 and P2 customers. Now, many enterprise grade organizations like Walmart are leveraging Microsoft Entra ID capabilities to empower their organization-wide user sign-ins, using Microsoft Entra ID single sign-on functionality while still maintaining the security that is needed to ensure seamless login.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (13), [[Microsoft 365]] (3), [[Microsoft Entra ID|Azure active directory]] (2), [[Microsoft Entra ID|Azure ad]] (1), [[Microsoft]] (1)
> **Definitions:** known as (1), is an  (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Conditional Access policy](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=0)** - [Instructor] In this video, we would be learning about conditional access policy. So what exactly is a conditional access policy? In layman terms, conditional access means giving access to certain people on specific resources for a limited time duration. Conditional access is a tool that [[Microsoft Entra ID|Entra ID]] uses to allow or deny access to resources based on certain identity signals. These signals include who the user is, where the user is, and what device the user is requesting the access from. There are certain advantages of using conditional access policies. It helps administrators empower users to be productive, it also helps protect organizational assets, and finally, it provides a more granular, multifactor authentication experience for users. Say for instance, you have a conditional access policy enabled on your users' sign-in, and you're signing in from the same [[Microsoft Office|office]] every day. Now, because this comes under your named location feature in Entra ID, you would not be challenged for second factor authentication as you're logging in from the same known location. On the contrary, say you have to travel to a different city or a different country on a business trip, and you log in from that new location. At this point, you would be challenged
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/conditional-access-policy?u=76281980&t=95)** for a second factor authentication to ensure that you are the authorized person and that your user credentials were not compromised. Some of the users of conditional access policies include a what-if tool. This tool can be used to test the impact that your conditional access policy will have on different sign-in scenarios. Basically, the what-if tool enables you to test your proposed conditional access policy before you implement them. Conditional access policy also comes in handy when users want to enforce access to services only through approved client applications. Example, you want to allow your users to access O365 from their office provided mobile devices only. Conditional access can also be applied when you want to allow users to access applications only from a set of verified mobile devices. Finally, you must note that to use conditional access feature, you either need [[Microsoft Entra ID]] P1 license, Entra ID P2 license, or a Microsoft Entra ID Governance license.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (3), [[Microsoft Office|Office]] (2), [[Microsoft Entra ID]] (2)
> **Definitions:** is a  (2)
> **Env Vars:** o365 (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Azure governance methodologies](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=0)** - [Instructor] The term governance describes the general process of establishing rules and policies while ensuring that those rules and policies are enforced in a proper manner. You need to have a good governance strategy to maintain control over your application and resources that are running in the cloud. Implementing proper governance also ensures that you're compliant with industry standard regulations like PCIDSS and GDPR, et cetera, in addition to corporate standards of keeping the network data encrypted. [[Microsoft Azure|Azure]] governance is bifurcated into different components and services, namely management groups, Azure Policies, and Azure Blueprints. Let's learn about each of these one by one, starting with the management groups. Management groups provide a governance scope above subscriptions. If your organization has many subscriptions, you may need a way to efficiently manage access policies and compliance for all those subscriptions. All subscriptions within a single management group must trust the same [[Microsoft Entra ID|Azure active directory]] tenant. For example, you can apply policies to a management group that limits regions available for creation of a particular resource. This policy would also be applied to all nested management groups, subscriptions,
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=94)** and resources, and allow the resource creation only in your specified authorized regions. Azure Policies. Azure Policy helps to enforce organizational standards to access compliance at scale. It evaluates resources and actions in Azure by comparing the property of those resources to business rules. Azure Policy also helps in determining whether a resource is compliant or not. Next comes Azure Blueprints. Azure Blueprints enables cloud architects and central information technology groups to define a repeatable set of Azure resources that implement and adhere to organizational standards, patterns, and requirements. Azure Blueprints make it possible for development teams to rapidly build and start up new environments that are being built within organizations using components such as networking to speed up development and delivery. Governance is more beneficial when you have multiple teams working in Azure while ensuring that they're compliant with organizational audit related policies. Or, you may have multiple Azure subscriptions to be managed using Azure management groups. It is also beneficial when you need to be compliant
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-governance-methodologies?u=76281980&t=188)** to certain regulatory requirements. Azure governance also comes in handy when you need to build and scale your applications in cloud quickly while still maintaining the control. To sum it all up, Azure governance methodologies empower your developers to focus on building innovative [[Microsoft Products|products]] and services without getting worried about the compliance related tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** pcidss (1), gdpr (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [RBAC](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=0)** - [Instructor] Access management for cloud resources is a critical function for any organization that is using the cloud. [[Microsoft Azure|Azure]] RBAC is an authorization system built on Azure Resource Manager that provides fine grain access management to Azure resources. RBAC allows you to create multiple roles. Each role defines the set of work that can be performed by a user who has been assigned that role. RBAC also allows you to segregate duties within teams to grant only the amount of access that is needed by the person to perform their jobs. For example, a virtual machine contributor role will allow people to manage the [[Virtual Machines]], but they cannot manage the linked resources to virtual machines like virtual networks or storage accounts. Azure RBAC also helps you to manage access to Azure resources. Let's look at a demo. We are in the Azure portal. Within each resource, you find an Access control IAM tab. Here, View my access button allows you to look at the role on a particular resource that you have. As you can see, and the owner of this VM. Owner role grants full access to manage all resources, including the ability to assign roles in Azure RBAC. That means I can add members from my team
>
> **[1:33](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/rbac?u=76281980&t=93)** to have a particular set of access to this VM by clicking the Roles tab. A role definition is a collection of permissions. You can use the built-in roles, or you can create your own custom roles. Against every role, you see a Name, Description, Type, Category, and a Details tab. If you click against the View option under the Details tab, you would be redirected to the description of your selected role. Now, let's take an example where you want your administrator of your subscription to create resources Using [[Terraform]]. In this scenario, you can add them as a reader to your subscription. Reader role would allow them to view the resources, but they won't be able to create any new resources from the portal. Finally, it is important to note that while planning your access control strategy, its best practice to grant users least privileges to get their work done. By limiting rules and scopes, you will be able to limit the security breach in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Virtual Machines]] (2), [[Terraform]] (1)
> **Env Vars:** rbac (5), iam (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), terraform (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Azure Blueprints](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Blueprints enable quick creation of governed subscriptions. This feature allows cloud architects to design environments that comply with organizational standards and best practices. Azure Blueprints enable development teams to rapidly build new environments. These blueprint definitions can be reused by developers in order to speed up the deployment and delivery process. Blueprints are a declarative way to orchestrate the deployment of various resource templates and other artifacts, such as role assignments, policy assignments, Azure Resource Manager Templates, or ARM templates, and resource groups. Now let's jump into the portal to look on how to create a blueprint. So in the search bar, you search for Blueprints. Here you see a Create button where you can go ahead and create a new blueprint. As we are creating a blueprint, Azure gives us an option to either Start with a blank blueprint or use a predefined set of samples. In my case, I will be creating a basic VNET blueprint to get started with. This blueprint is defined to configure a virtual network with a subnet and an NSG. Give a name to your blueprint. Here you see an auto-populated description on the blueprint.
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=95)** You can also add a custom description as per your requirement, and then go to Definition location. Definition location is nothing but the management group or subscription where the blueprint is being saved. I'll click on this three dots and I'll choose my subscription where I want to save my blueprint. In case you have multiple subscriptions, here, you will get an option to select a subscription of your choice, click Select. Next, I'll go to the Artifacts section. You can add artifacts to the blueprint. Add resource groups to organize where the artifacts should be deployed and assigned. I click on Add artifact. Artifact type would be Policy assignment. Here you can also choose Role assignment, Azure Resource Management Template, or Resource Group, which was discussed previously. I'll give it as Policy assignment. Under Policy assignment, I'll choose a policy assignment of configuring virtual network to enable traffic analytics. Click on Add and then click Save Draft. Next I go to Blueprint definition, where I see my blueprint definition has been created successfully. Click on the blueprint definition. Click on Publish blueprint. Add a version, I'll select 1.0. I'll add Change notes and click on Publish.
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-blueprints?u=76281980&t=190)** On successful publishing of your blueprint, you get a notification saying NetworkBlueprint was published successfully. It is good to know that Azure Blueprints and other Azure governance services are provided free of cost for Azure for managing your various services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8)
> **UI Navigation:** click on (6), go to (3)
> **Env Vars:** arm (1), vnet (1), nsg (1)
> **Versions:** 1.0 (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Azure Policy](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Policy enables you to create, assign, and manage policies to control or audit your resources. Policy provides governance and resource consistency with respect to [[Regulatory Compliance]], security, cost, and management. These policies help to enforce organizational standards and assess compliance at scale. Azure Policy also enables you to define both individual policies and group of related policies known as initiatives. You can assign a policy, assess the compliance, or even create a custom policy definition tailored to your environment. In the overview section, you get to know the resources that are compliant and that are not compliant as per your environment. We'll go to the assignment section on the left side and click on Assign a Policy. You can also assign an initiative, which is nothing but group of related policies. Click on Assign Policy, select a scope. Here, you can either select a subscription or a management group. You can optionally select a resource group as the scope of your policy and leave it as default. Click Select. In case you need to exclude certain resources, that can be added on the exclusion section. Select a policy definition.
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-policy?u=76281980&t=96)** Here I will choose [[Virtual Machines]] that do not use managed discs. Click on Add. Give a description to your policy. Leave the policy enforcement as enabled by default. Click on Next and leave everything under advanced parameters as default. Click Next. In Remediation, create a Managed Identity. Review and create and click Create. Your policy assignment has been created successfully. Here you see a Compliance tab, which gives you segregated list of both compliant and non-compliant resources that are sitting within your subscriptions. Finally, remember, Policy reduces the time needed to audit your environments by having all your compliance data in a single place. Azure Policy let's you set guardrails throughout your resources to help ensure cloud compliance, avoid misconfigurations and practice consistent resource governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Regulatory Compliance]] (1), [[Virtual Machines]] (1)
> **UI Navigation:** click on (4), go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Azure resource locks](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Resource lock feature lets you lock an Azure subscription, resource group, or resource to protect it from accidental deletion and modification. This lock overrides any user permissions. There are two types of resource locks that are available in Azure. The CanNotDelete lock allows authorized users to read and modify a resource, but they can't delete it. The ReadOnly lock enables authorized users to read the resource, but they can't delete or update it. When you apply a lock at the parent scope all resources within the scope inherit the same lock. Even the resources that you add later inherit the same parent lock. The most restrictive lock in the inheritance takes precedence. Say, for instance, you have a delete lock applied to the virtual machine, and you are trying to delete the parent resource group where this virtual machine resides. In this scenario, Azure blocks you from deleting the resource group as the lock takes precedence. Individuals with owner role or user access administrator built-in roles would only be able to create or remove the locks from Azure Resources. Let's jump into the portal and look at the process of creating locks. I've already created a resource group. In the resource group under the Settings section,
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=95)** you see the Locks option. Click on Add. Give a name to your lock. Lock type can be read-only or delete as we discussed. You can also apply a lock at subscription level. To apply the lock at subscription level, simply click the subscription lock icon. Click on Add. The lock type would be read-only. Now you have a read-only lock at the subscription level and a delete lock at the resource group level. Let me go ahead and show you if I want to delete this virtual machine. I'll go to the virtual machine and click the delete icon.
>
> **[2:31](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-resource-locks?u=76281980&t=151)** You get a failed message that you're not able to delete the virtual machine as there is a delete lock applied at the subscription level. So here you can clearly see that parent resource lock can't be edited here. I'll just go and click on Delete. My resource lock at the subscription level got deleted. If I click on Delete again, the resource group lock has also been deleted. Now, I can just simply go to the resource group, go to my virtual machine, and it will allow me to delete this virtual machine because there is no lock applied on this resource group or subscription anymore. Here you see, I've successfully been able to delete the virtual machine. Sometimes applying resource locks can lead to unexpected results. Example, a read-only lock on storage account would prevent the administrators to list the storage account keys. It would also prevent creation of blob containers within the storage accounts. So now you know how to apply resource locks to help prevent the accidental deletion of your Azure resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6)
> **UI Navigation:** click on (4), go to (3)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Adoption Framework for Azure](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=0)** - [Instructor] The Cloud Adoption Framework for [[Microsoft Azure|Azure]] is a collection of documentation, technical guidance, best practices, and tools that aid in aligning business, organizational readiness, and technology strategies. This alignment enables a clear and actionable journey to the cloud that rapidly delivers on desired business outcomes. CAF provides you proven guidance to help accelerate your cloud adoption journey and implement business and technology strategies that are needed to succeed in cloud. The Cloud Adoption Framework helps customers undertake a simplified cloud journey in three main stages, namely, plan, ready and adopt. These three main stages are preceded by a business strategy phase and then surrounded by operations phase that expands through cloud adoption journey. Let's begin by learning each of the stages one-by-one. Define your strategy. This stage helps you answer certain questions for adopting cloud, which include: why are you moving to cloud? What is the end goal of your cloud migration journey? Do you need to scale out to meet the market demands? Will the migration reduce your costs or increase the overall agility? This stage is further subdivided into four sections, namely: define and document your motivations,
>
> **[1:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=98)** document your business outcomes, evaluate the financial considerations, and understand the technical considerations. Then comes the plan phase. This stage involves making a plan that maps to your client's aspirations and goals. A good plan ensures that you're correctly aligning to the desired business outcome expected from the migration. The stage is also further subdivided into four sections, namely: digital estate, initial organizational alignment skills readiness plan, and cloud adoption plan. Then comes the ready phase. This stage involves creating of landing zone or an environment in cloud to begin hosting your workloads in Azure. The stage is further subdivided into four sections: Azure setup guide, Azure landing zone, expand the landing zone, and best practices. Once you're ready, the next phase comes, adopting the cloud. Here, you begin to migrate your applications into the cloud. While designing the migration strategies, there are chances that you might look into ways of modernizing your applications while building innovative solutions that use [[Cloud Services]]. Cloud Adoption Framework breaks this stage into two main parts,
>
> **[3:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=193)** namely: migrate and innovate. First, let's look on the migrate section. The migrate phase is further subdivided into four stages. That is: migrating your first workload, then deciding the migration scenarios, working on the best practices, and working on continuous process improvements. Next comes the innovate section in our Cloud Adoption Framework journey, which is further subdivided, again, into four sections: business value consensus, Azure innovation guide, best practices, and feedback loops. Then comes the govern and manage your cloud environments. This phase helps you in forming your cloud governance and cloud management strategies. You must create resilient solutions that are constantly optimized: establish a management baseline, define the business commitments, expand the management baseline, and advance your operations and design principles. When implemented step-by-step, the Cloud Adoption Framework helps organizations comply with several industry standards. It further assists businesses in replicating their existing on-prem business requirement into the cloud. Explore the Cloud Adoption Framework,
>
> **[4:47](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/cloud-adoption-framework-for-azure?u=76281980&t=287)** which displays step-by-step guided links that will help you in your cloud adoption journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Cloud Services]] (1)
> **Env Vars:** caf (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud and Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Microsoft Defender for Cloud](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=0)** - [Instructor] [[Microsoft Defender]] for Cloud. [[Microsoft Defender|Defender]] for Cloud is a monitoring service that provides advanced threat protection across workloads hosted in [[Microsoft Azure|Azure]], other Clouds, or on the on-premise environment. It can also be seen as cloud-native application protection platform with a set of security measures and practices that are designed to protect cloud-based applications from various cyber threats and vulnerabilities. Defender for Cloud combines the capabilities of [[DevSecOps]] solution that unify [[Security Management]] at code level across multi-cloud and multiple pipeline environments. [[Cloud Security]] Posture Management solution that surfaces actions that you can take to prevent breaches and Cloud Workload Protection Platform with specific protection for servers, containers, storage, [[Databases]], and other workloads. Some of the major Defender for Cloud capabilities include policy compliance. Defender for Cloud is built on top of Azure policy controls, so you can set and monitor your policies to run on management groups across subscription or even a whole tenant. Continuous assessment providing Secure Score. Defender for Cloud continually assesses your resources for security issues, then aggregates all the findings into a single score, so that you can tell your current security situation.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=97)** This continuous assessment feature regularly assesses for all the new and pre-deployed resources to ensure that they're properly configured as per the industry standards. Tailor-made recommendations. Defender for Cloud provides tailored recommendations based on existing workloads, along with the instructions on implementing this is. Threat protection. Defender for Cloud analyzes your workloads and raises threat prevention recommendations and security alerts. It also helps generating the reports for threat analysis. Get secure faster. Being natively integrated with Azure, Defender provides inbuilt protection for Azure Resources. Security alerts. Defender for Cloud automatically collects, analyzes, and integrates log data from your Azure resources like Firewall and Endpoint protection to detect real threats. Then list of prioritized security alerts is shown in Microsoft Defender for Cloud, along with the information that you need to quickly investigate and remediate an attack. Modern applications require [[Security Awareness]] at the code, infrastructure, and runtime levels to make sure that deployed applications are hardened against different types of attacks. To incorporate best security practices early
>
> **[3:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-defender-for-cloud?u=76281980&t=192)** during the [[Software Development]] or DevSecOps lifecycle, Microsoft Defender for Cloud can be a good solution. [[Microsoft]] recommends using Defender for Cloud to protect your code management environments, code pipelines, and get insights into your development environment security posture. Well, if you're willing to deep dive into Defender for Cloud, refer to my course on [[LinkedIn]] named "[[Securing Cloud Resources with Microsoft Defender for Cloud]]." Go to the LinkedIn Learning and search for [[Securing Cloud Resources with Microsoft Defender for Cloud]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Defender|Defender]] (11), [[Microsoft Defender]] (5), [[Microsoft Azure|Azure]] (5), [[DevSecOps]] (2), [[LinkedIn]] (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Sentinel](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=0)** - [Narrator] [[Microsoft]] Sentinel is a security information and event management solution that provides security analytics along with the capabilities of threat detection and intelligence response across an enterprise. It is Microsoft's widely used SIEM tool. Let us discuss about various Sentinel capabilities. Collect cloud data at scale. [[Microsoft Azure|Azure]] Sentinel enables you to collect data across all users, devices, applications, and infrastructure, both on-prem and for your cloud environments. Detect previously undetected threats. Sentinel helps in minimizing false positives by using Microsoft's comprehensive analytics and threat intelligence capabilities. Investigate threat with AI. Azure Sentinel allows you to examine suspicious activities at scale, respond to incidents. Sentinel uses built-in orchestration and automation of common tasks to rapidly respond to incidents. It also supports connectivity to a number of data sources which can analyze for security events. All these connections are handled by built-in connectors. Let us look at some of the Azure Sentinel connectivity solutions. Connect Sentinel to Microsoft Solutions. There are various connectors available
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=94)** that provide [[Real-Time]] integration for services like Microsoft Threat Protection Solution, [[Microsoft 365|M365]], including O365, [[Microsoft Entra ID|Azure AD]], and [[Windows]] [[Microsoft Defender|Defender]] Firewall. Connect Sentinel to other services and solutions. You can easily find Sentinel connectors for common non-Microsoft services and solutions, including AWS CloudTrail, Citrix Analytics, VMware Carbon Black Cloud, and Okta Single Sign-On, to name some services. Connect Sentinel to industry standard data sources. Azure Sentinel supports data from other sources that use common event format messaging standard, Syslog, or [[Representational State Transfer (REST)|REST]] API. Microsoft Sentinel uses built-in analytics as well as custom analytics to notify you about suspicious activities that are happening in your environment. Built-in analytics use templates designed by Microsoft's team of security experts and analysts based on known threats, common attack vendors, and escalation chains for suspicious activities. Some templates use machine learning behavior analytics that are based on Microsoft proprietary [[Algorithms]]. Custom analytics. Custom analytics are the rules that you create to search for specific criteria within your environment.
>
> **[3:08](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/microsoft-sentinel?u=76281980&t=188)** You can preview the number of results that the query would generate based on your past logs and events, and set a schedule for query to run. You can also set an alert threshold. Finally, Microsoft Sentinel is your bird's eye view across enterprise to collect, detect, investigate, and respond to incidents and alerts. In short, it is your one-stop shop for attack detection, threat visibility, proactive hunting, and threat response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (10), [[Microsoft Azure|Azure]] (4), [[Real-Time]] (1), [[Microsoft 365|M365]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **Env Vars:** siem (1), m365 (1), o365 (1), aws (1), rest (1)
> **CLI Commands:** find (1), aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Azure Key Vault](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=0)** - [Instructor] Key Vault fall under [[Microsoft Azure|Azure]] Security Services category. It is a centralized cloud service for safeguarding cryptographic keys and other secrets used by various cloud apps and services. It provides secure access control and logging capabilities for various services. In addition, Key Vault also provides logs of all access and usage attempts of your secrets, so you have a complete audit trail for compliance. Let us look into some of the important capabilities of Azure Key Vault. Managing secrets. Azure Key Vault can be used to securely store and tightly control access to [[Tokens]], certificates, passwords, API keys, and other secrets. Manage encryption keys. Azure Key Vault can also be used as a key management solution. Key Vault makes it easier to create and control the encryption keys that are used to encrypt your data. Manage SSL TLS certificates. Key Vault enables you to provision, manage, and deploy your public and private SSL TLS certificates for both your Azure as well as internal resources. Store secret backed by [[Hardware]] security modules or HSMs. Azure Key Vault makes use of secrets and keys
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=97)** that can be protected either by software or FIPS level two validated HSMs. Now let us discuss about some of the important benefits of using Azure Key Vault. Centralized application secrets. Azure Key Vault helps in centralizing the storage of your application secrets, enables you to control their distribution, and also reduces the chances of accidental secret leakage. Securely stored secrets and keys. Azure users industry standard [[Algorithms]], key lengths, and HSMs. Access to Key Vault requires proper authentication and authorization. Access monitoring and access control. By using Key Vault, you can monitor and control access to your application secrets. Simplified administration of application secrets. Key Vault makes it easier to enroll and renew certificates from public certificate authorities. You can also scale up and replicate entire content within regions and use standard certification management tools. Integration with other Azure services. You can integrate Key Vault with storage accounts, container registries, event hubs, and many more Azure services.
>
> **[3:12](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-key-vault?u=76281980&t=192)** These services can then securely reference the secrets that are stored in your Key Vault. Finally, to sum it all up, Azure Key Vault offers built-in comprehensive security and compliance by eliminating the need to store security information in the code and reduce the chances of secret breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (12), [[Tokens]] (1), [[Hardware]] (1), [[Algorithms]] (1)
> **Env Vars:** ssl (2), tls (2), api (1), fips (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Azure Dedicated Host](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] dedicated hosts allow you to host your Azure [[Virtual Machines]] on dedicated physical servers. Usually, VMs on Azure run on shared [[Hardware]] that is being managed by [[Microsoft]]. However, some organizations must follow certain [[Regulatory Compliance]], requiring them to be the only customer using the physical machines that host their virtual machines. You can provision dedicated hosts within a region, availability zone and fault domain. Then, you can place VMs directly onto your provision hosts in whatever configuration that best meets your needs. VMs relate to a dedicated host and host group. A host group is a collection of dedicated hosts. A host is created within a host group. For high availability, you can provision multiple hosts in a host group and deploy your VMs across these groups. Let us discuss about some of the benefits of using dedicated hosts. Reserving the entire host provides hardware isolation at physical server level. Meaning no other VM will be placed on your dedicated host. Dedicated hosts help address compliance requirements by deploying your workload in an isolated server. Dedicated host also let you choose the number of processes,
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-dedicated-hosts?u=76281980&t=97)** server capabilities, VM series, VM size within the same host. With dedicated host, you get more control over maintenance events initiated by Azure platform. While the majority of maintenance events have little to no impact on your virtual machines, there are some sensitive workloads where each second of pause can have an impact. With dedicated host, you can opt in to a maintenance window to reduce the impact to your service. As far as cost is concerned, you are charged per dedicated host, independent of how many VMs you deploy to it. The host price is based on the VM family and type, that is hardware size and the region. And Azure dedicated host allows your organization to establish a private cloud in Azure. Example, in the [[Healthcare Industry]], applications must meet HIPAA requirements when dealing with patient information. So, each hospital may need to have its own dedicated host comprising of different virtual machines for maintaining patient data to meet their compliance requirements. Dedicated hosts come in handy in this scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Virtual Machines]] (4), [[Hardware]] (3), [[Microsoft]] (1), [[Regulatory Compliance]] (1)
> **Env Vars:** hipaa (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Azure VNet and NSG](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=0)** - [Instructor] Defense in depth is a layered approach to securing the overall cloud resources by providing multiple layers of protection. [[Network Security]] group, popularly known as NSG, come in handy to filter the incoming and outgoing network traffic. You can think of NSGs like an internal firewall. An NSG can contain multiple inbound and outbound security rules that enable you to filter traffic to and from resources by source and destination IP address, ports and protocols. NSGs can be associated at the [[NIC]] level of a VM. It can also be associated to a subnet depending on the network architecture requirements. It is also important to note that same network security group can be associated to as many subnets and network interfaces as you choose. A network security group can contain as many rules as you need within [[Microsoft Azure|Azure]] subscription limits. Let us learn about different properties of NSGs. Name, always try to give a unique and a meaningful name to your NSG. Priority, you can assign a priority between hundred to 4096 where hundred takes the highest priority. Rules are processed in the priority order with lower numbers processed before the higher numbers.
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=97)** That means hundred will take the higher precedence. Source and destination: Source and destination fields can contain a single IP address, IP address range, service tag, or an [[Application Security]] group. Protocols: TCP, UDP, ICMP, or any of the available list of protocols while creating NSG. Direction: Direction specifies whether the rule applies to inbound or the outbound traffic. Port range, you can specify a single port, list of ports or port range to be allowed or denied. Action: Action can be either allow the NSG rule or deny the NSG rule as per your requirements. When you create a network security group, Azure creates a series of default rules to provide a baseline level of security. Here, Azure creates a series of default rules to provide a baseline level of security. You can't remove the default rules, but you can override them by creating new rules with higher priority. For example, I have created an RDP allow rule with priority 300 in this case. Finally, [[Microsoft]] recommends associating NSG to a subnet or [[NIC|network interface card]],
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-vnet-and-nsg?u=76281980&t=191)** but not both, to avoid conflicting rule creation leading to unexpected communication issues. With this, we come to an end of the NSG support section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (4), [[Microsoft Azure|Azure]] (3), [[NIC]] (1), [[Application Security]] (1), [[Microsoft]] (1)
> **Env Vars:** nsg (8), nic (1), tcp (1), udp (1), icmp (1)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Azure Firewall](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=0)** - [Instructor] Firewall is a [[Network Security]] device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules. [[Microsoft Azure|Azure]] Firewall is a managed cloud-based network security service that protects your Azure virtual network resources. The stateful firewall service has built in high availability and unrestricted cloud [[Scalability]] to help you create, enforce and log application and network connectivity policies across subscriptions and virtual networks. Being a stateful firewall, it analyzes the complete context of a network connection and not just an individual packet of network traffic. Let us learn about some of the important features of Azure firewall. Threat intelligence based filtering enables Azure Firewall to generate realtime alerts and deny traffic from or to known malicious domains and IP addresses. Azure Firewall filters both inbound and outbound traffic, internal spoke-to-spoke connections, and hybrid connections through Azure VPN and express-route gateways. It simplifies deployment and management of network security with a scalable and highly available cloud native firewall, making it easy to deploy and scale within minutes. Azure Firewall decrypts outbound traffic,
>
> **[1:38](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=98)** performs required security checks, and then encrypts the traffic at the destination. It works in conjunction with URL filtering and web categories by letting administrators allow or deny user access to website categories such as gambling or social media. The [[Intrusion Detection]] and prevention system capability makes use of signatures to continuously monitor activities, generate alerts, log information, and optionally attempt to block traffic. This is a [[Real-Time]] traffic inspection. It can detect attacks in all ports and protocols for unencrypted traffic. Encrypted traffic utilizes the TLS inspection capability for decryption. Let us now look into some of the prominent use cases of Azure Firewall. Azure Firewall is mainly used to protect your digital assets that are hosted in the cloud. It is a fundamental building block for your private network that enables [[Virtual Machines]] and other compute resources to securely communicate with each other, the internet, and the on-premise networks. Azure Firewall is an ideal choice when you want to protect your network against infiltration to avoid user errors while handling the payments of an [[E-Commerce]] website. Azure Firewall can also be used to establish
>
> **[3:14](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-firewall?u=76281980&t=194)** spoke-to-spoke connectivity. The spoke networks can exchange data with the hub, but the spokes cannot communicate directly with each other. For example, one spoke network might host an application programming interface that requires information from a [[SQL]] database deployed in a different spoke. In this scenario, Azure Firewall would be a secure solution to fulfill the connection requirement between your application and the database. Azure Firewall Premium provides advanced threat protection that meets the needs of highly sensitive and regulated environments such as financial services and healthcare industries. There are more than 58,000 signatures in more than 50 categories, which are updated in real time to protect against new and emerging exploits. These exploit categories include malware, [[Phishing]], coin mining, and Trojan attacks. So now you understand the importance of Azure Firewall.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Network Security]] (3), [[Scalability]] (1), [[Intrusion Detection]] (1), [[Real-Time]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** vpn (1), url (1), tls (1), sql (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Azure DDoS Protection](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=0)** - [Instructor] Distributed denial-of-service attacks are some of the largest availability and security concerns faced by customers who are planning to move their applications to cloud. A DDoS attack attempts to exhaust an application's resources, making it unavailable to legitimate users. DDoS attack can be targeted at any endpoint that is publicly reachable through internet. These attacks overwhelm and exhaust network resources, making your applications slow or unresponsive. So how can we protect our cloud resources from encountering DDoS attacks? Well, [[Microsoft]] offers [[Microsoft Azure|Azure]] DDoS Protection service that protects your applications by scrubbing traffic at the network edge before it can impact your service availability. Azure DDoS Protection, combined with application design best practices, provides enhanced DDoS mitigation features to defend against DDoS attacks. DDoS Protection uses the scale and elasticity of Microsoft's global network to bring DDoS mitigation capacity to every Azure Region. The DDoS Protection service identifies the attackers' attempt to overwhelm the network and blocks traffic from them, ensuring that this traffic never reaches your Azure resources. This activity protects your Azure applications by analyzing
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=97)** and discarding DDoS traffic at the network edge itself before it can affect your service availability. It is automatically tuned to help protect your specific Azure resources in a virtual network. Protection can be enabled on any new or existing virtual network, and it requires no application or resource changes. So now that we have a fair idea about Azure DDoS Protection, let's learn about its service tiers. First is the Infrastructure service tier. This service tier is automatically enabled for free of cost as a part of your Azure subscription. The Basic service tier ensures that Azure infrastructure itself isn't affected during a large scale DDoS attack. Next comes the Network protection. This tier provides more mitigation capabilities tuned specifically to Azure Virtual Network Resources. DDoS network protection is relatively easy to enable and requires no changes to your applications. It offers an always-on traffic monitoring and [[Real-Time]] mitigation of common network level attacks. DDoS IP protection is a pay-per-protected IP model. DDoS IP protection contains the same core engineering features as DDoS network protection,
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-ddos-protection?u=76281980&t=191)** but will differ in following value-added services. DDoS rapid response support, cost production, and discount on WAF. Let's look at the type of attacks that can be prevented using DDoS Protection Help. First in the line comes volumetric attacks. The goal of these attacks is to flood the network layer with a substantial amount of seemingly legitimate traffic. DDoS Protection helps overcome such volumetric attacks. Next comes the protocol attacks. These attacks render a target inaccessible by exploiting a weakness in layer 3 and layer 4 protocol stack. Application layer attacks. These attacks target web application packets to disrupt the transmission of data between hosts. You need a WAF to protect against layer 7 attacks. DDoS Protection protects the WAF from volumetric and protocol attacks. Finally, as a best practice, Microsoft recommends to set up multi-layer protection for your application using a DDoS protection plan so that you can minimize your application downtime and latency during such attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Microsoft]] (3), [[Real-Time]] (1)
> **Env Vars:** waf (3)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Core Solutions and Management Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure IoT](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=0)** - [Instructor] [[IoT|Internet of things]] or [[IoT]] refers to a collection of platform services across edge and cloud that connect, monitor, and control billions of IoT assets. These devices are generally used for data analysis. IoT devices include security and operating systems along with data and analytics that help businesses to build, deploy, and manage IoT applications. When discussing about the Internet of Things, we consider how these services work together across three components, namely things, insights, and actions. Let us look into each of this one by one. The physical objects or things include industrial equipments, devices, or sensors that connect to the cloud persistently or intermittently. Insights comprise the information collected by the things which are analyzed and turned into actionable knowledge, either by people or AI. Actions refer to the way people respond to those insights and connect them to their businesses as well as the systems and tool they use. Let us learn about some of the widely used [[Microsoft Products|products]] and services being offered by [[Microsoft Azure|Azure]] in the field of IoT that are falling under different categories, namely, build your IoT solution, connect and manage devices,
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=96)** analyze and transform data, and integrate business and [[AI Solutions]]. We shall now learn about some of the most predominantly used Azure IT services in the upcoming section. Azure IoT Hub. Azure IoT Hub is a managed service hosted in the cloud that acts as a central message hub for bidirectional communication between an IoT application and its attached devices. You can connect millions of devices and their backend solutions reliably and securely. Almost any device can be connected to an IoT Hub. IoT Hub supports several messaging patterns, including device to cloud telemetry, uploading files from devices, and request-reply methods to control your devices from the cloud. IoT Hub also supports monitoring to help you track device creation, device connections, and device failures. IoT Hub scales to millions of simultaneously connected devices and millions of events per second to support your IoT workloads. Next, let us look at Azure IoT Central. IoT Central is a fully managed global IoT [[SaaS]] solution that makes it easy to connect, monitor, and manage IoT assets at scale.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=191)** IoT Central can be used to quickly evaluate your IoT scenarios and assess the opportunities it can create for your business. IoT Central also lets you focus your efforts on determining the business impact, thereby helping in streamlining the development of a complex and continuously evolving IoT infrastructure. The Web UI lets you quickly connect devices, monitor device condition, create rules, and manage devices and their data throughout their lifecycle. Once you have used IoT Central to evaluate your IoT scenario, you can then build your enterprise-ready Azure IoT solution. Azure Sphere. Azure Sphere is a secured, high-level application platform with built-in communication and security features for internet-connected devices. It comprises of a secured, connected, crossover microcontroller unit, a custom high-level, [[Linux]]-based operating system, and a cloud-based security service that provides continuous renewable security. An Azure Sphere MCU integrates [[Real-Time]] processing capability with the ability to run a high-level operating system. Sphere, MCU, along with its operating system and application platform enables the creation of secured, internet-connected devices
>
> **[4:46](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-iot?u=76281980&t=286)** that can be updated, controlled, monitored, and maintained remotely. Azure Sphere can also be embedded into coffee machine or even a dishwasher to automate the functionality of these machines. Finally, it would not be wrong to say that [[Microsoft]] is one of the leading cloud providers offering so many [[PaaS]] services in the field of IoT that are helpful for connecting and managing devices at scale, delivering reliable data for business insights. Hence, it is also one of the most accepted platforms by the Fortune 500 companies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (26), [[Microsoft Azure|Azure]] (10), [[IoT|Internet of things]] (2), [[Microsoft Products|Products]] (1), [[AI Solutions]] (1)
> **Definitions:** is a  (3), refers to (1)
> **Env Vars:** mcu (2)
> **Speakers:** - [instructor] (1)

#### [Big data and analytics](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=0)** - [Instructor] [[Big Data Analytics]] refers to the methods, tools, and applications that are used to collect, process and derive insights from varied, high-volume and high-velocity datasets. These datasets may come from variety of sources, such as web, mobile, email, social media, and networked smart devices. The data source can range from structured to semi-structured and [[Unstructured Data]]. There can be various reasons for analyzing these large amounts of data. One of the scenarios can be looking at the older data to analyze the sales trends of an organization during the holiday seasons. This in-depth data analysis can help the business take appropriate steps to ensure smooth functioning during peak loads. Open-source cluster technologies have been developed over time to deal with these large datasets. [[Microsoft Azure]] supports a broad range of technologies and services to provide [[Big Data]] and analytical solutions, including services that fall under different categories, ranging from big data processing, data exploration, and [[Real-Time]] analytics. Let us look into some of the majorly used data analytics services being offered by [[Microsoft Azure|Azure]],
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=95)** starting with Azure Synapse Analytics. Azure Synapse Analytics is a fully managed service that builds modern data warehouses for enterprises. You can query data on your terms by using either serverless or provisioned resources at scale. You have a unified experience to ingest, prepare, manage, and serve data for immediate [[Business Intelligence (BI)|business intelligence]] and machine learning needs. Synapse Analytics brings together [[SQL]], [[Apache Spark]], Orchestration and Ingestion into a single workspace by dramatically reducing the time to build an analytics solution. Next, let us look at [[Azure Databricks]]. Azure Databricks is a unified set of tools for building, deploying, sharing, and maintaining enterprise-grade data solutions at scale. It is mainly used to process, store, clean, share, analyze, model, and monetize their datasets with solutions from BI to machine learning. Azure Databricks platform can also be used to build and deploy [[Data Engineering]] workflows, machine learning models, analytical [[Dashboards]], and many more things. Azure Data Lake Analytics. Data Lake Analytics is an on-demand analytical job service
>
> **[3:13](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=193)** that simplifies big data. Instead of deploying, configuring and tuning hardwares, you write queries to transform your data and extract valuable insights from it. The analytical service can handle jobs of any scale instantly by setting the dial for how much power you need. The best part is you only pay for your jobs when it is running, making it a cost-effective service. This is also popularly known as an ETL service. One of the major advantages of Data Lake Analytics is that it works with Azure Data Lake Storage Gen2 for highest performance, throughput and parallelization. It can also work with Azure Storage Blobs, Azure SQL Database, and Azure Synapse Analytics. Large [[E-Commerce]] websites, like Myntra, are leveraging Microsoft Azure's big data and analytics platform to make sure that the site is readily accessible and consists of [[Microsoft Products|products]] based on every individual's taste. The site also provides purchase suggestions based on the past shopping trends of their customer. You can refer to this page to learn about the comprehensive set of solutions that turn your data into actionable insights using Microsoft Azure Analytics Services. The best part is this page also displays a list of customers
>
> **[4:49](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/big-data-and-analytics?u=76281980&t=289)** who are doing great things using Azure Analytics products. So start your journey today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Big Data]] (4), [[Microsoft Azure]] (3), [[Azure Databricks]] (3), [[SQL]] (2)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Env Vars:** sql (2), etl (1)
> **CLI Commands:** apache (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Artificial intelligence and machine learning](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=0)** - [Instructor] [[Artificial Intelligence (AI)|Artificial intelligence]] is the capability of computer system to mimic human cognitive functions such as learning and problem solving. AI-based systems use math and logic to simulate the reasoning used by people for learning new information and decision making. [[Microsoft Azure]] provides several [[AI Solutions]] to choose from each one, depending on the problem that you're trying to solve, including [[Microsoft Azure|Azure]] AI services and Machine Learning services. Machine learning is an application of AI. It is a process of using mathematical models of data to help a computer learn without direct instructions. This enables a computer system to continue learning and improving on its own, based on its past experiences. While AI and ML are very closely connected, they are not the same. Machine learning is considered as a subset of AI. Then how are AI and ML connected? An intelligent computer uses AI to think like a human and perform tasks on its own. Whereas, machine learning focuses on how computer systems develop its intelligence. For example, you can make use of a custom vision service to recognize images on the gender basis and then train a machine learning model
>
> **[1:34](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=94)** to recognize whether the image is of a male or a female. Let's look into some of the major capabilities of AI and ML. [[Predictive Analytics]]: This capability helps companies predict trends and behavioral patterns by discovering cause-and-effect relationship in the data. Say for instance, a company wants to predict the sales of a particular stock keeping unit in the coming quarter. Here, predictive analytics would help them to do so with procession. Recommendation engines: With recommendation engines, companies use data analysis to recommend [[Microsoft Products|products]] that someone might be interested in. Many [[E-Commerce]] websites make use of recommendation engines to recommend suitable products for their customers. [[Speech Recognition]] and natural language understanding: Speech recognition enables a computer system to identify words and recognize meanings in written or spoken language. This capability can be used for translating words in different languages. Image and video processing. This capability makes it possible for computers to recognize faces, objects, and actions in an image and video, and implement functionalities such as a visual search. A common use case would be a person taking an image
>
> **[3:10](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/artificial-intelligence-and-machine-learning?u=76281980&t=190)** of an object and searching the results online using inbuilt AI capabilities of their smartphones. Sentiment analysis: A computer system uses sentiment analysis to identify and categorize positive, neutral, and negative attitudes that are expressed in text. Many organizations leverage this feature for conducting behavioral interview rounds of their candidates. You can make your business stronger by leveraging AI and ML capabilities that are offered by Azure. Here, you can see how customers are innovating with Azure AI. NBA, one of the most popular sports organizations, has leveraged AI to unlock its potential and find the interesting nuggets in those billions of data points. In the end, I would recommend make AI real for your business today across cloud and the edge by using Azure, and create your free trial account here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Predictive Analytics]] (2), [[Microsoft Products|Products]] (2), [[Speech Recognition]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** such as (2), for example (1), for instance (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** nba (1)
> **Speakers:** - [instructor] (1)

#### [Serverless computing](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=0)** - [Instructor] [[Serverless Computing]] is the evolution of cloud platforms in the direction of pure cloud native code. Serverless brings developers closer to the business logic, while insulating them from infrastructure concerns. With serverless applications, the cloud service provider automatically provisions scales and manages the infrastructure, which is required to run the code. Although the servers are still present in the background, the tasks associated with infrastructure provisioning and management are invisible to developers. Let us learn about some of the top benefits of using serverless computing. Firstly, there is no infrastructure management. Serverless computing helps team increase their productivity as the developers get to focus solely on developing the business logic and bring [[Microsoft Products|products]] to the market faster. It allows organizations to better optimize resources and stay focused on innovation. Dynamic [[Scalability]]: With serverless computing, the infrastructure dynamically scales up and down within seconds to match the workload demands. Faster time to market: Serverless applications reduce the operations dependency on each development cycle, thereby, increasing development teams' agility to deliver more functionality in less time.
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/serverless-computing?u=76281980&t=95)** Efficient use of resources: Shifting to serverless technologies, helps organization reduce total cost of ownership and reallocate resources to accelerate the pace of innovation. Boost team performance: Serverless computing helps improve teams' agility and performance by using a fully-managed platform to build, deploy, and operate applications. Finally, it is important to understand that serverless computing requires a new way of thinking and approach to build applications and isn't the right solution for every problem. The best way to ensure that your organization gains the maximum benefits, is by using an end-to-end serverless platform that provides a comprehensive set of serverless technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (6), [[Microsoft Products|Products]] (1), [[Scalability]] (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Azure Advisor](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=0)** - [Instructor] In this video, we'll learn about one of the most important offerings of [[Microsoft Azure|Azure]], which is popularly known as Azure Advisor. Advisor is a personalized cloud consultant that helps you follow best practices to optimize your Azure deployments. It analyzes your resource configuration and usage telemetry, and then recommend solutions that can help you improve the cost effectiveness, performance, reliability, and security of your Azure resources. Advisor gives you proactive, actionable, and personalized best practice recommendations. It helps in improving the performance, security, and reliability of your resources as you identify opportunities to reduce your overall Azure spend. Advisor also offers different recommendations with proposed actions based on the workloads present in your subscription. Let's jump into the portal and learn more about Azure Advisor. The Advisor dashboard displays personalized recommendations for all your subscriptions. You can apply filters to display recommendations for specific subscriptions and resource types. Here I only have one subscription, but you can apply filters for your subscriptions. The recommendations are divided into five sections, namely, cost, security, reliability, [[Operational Excellence]],
>
> **[1:37](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-advisor?u=76281980&t=97)** and performance. Right now we don't have any cost recommendations, security recommendations, but we have a reliability recommendation. Reliability, what's formally known as high availability, and this feature helps in improving the continuity of your business critical applications. You can get reliability recommendations on the reliability tab of Azure Advisor. Here we see one reliability recommendation that is aimed to prevent outbound connection failures with NAT Gateway. For operational excellence, again, we do not have any recommendations in my subscription and all our resources are running on optimal performance. The recommendation section under the concepts give you more visibility on Azure Advisor recommendations. One of the important point about Azure Advisor is that it runs automatically in the background to find newly created resources. It takes up to 24 hours to provide recommendation on those newly created resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Operational Excellence]] (2)
> **Definitions:** known as (2), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** nat (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Azure Monitor](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=0)** - [Instructor] Modern software systems running in the cloud can become complex to monitor. Gaining visibility into health and performance of your application can be really challenging. Fortunately, [[Microsoft]] offers a number of solutions that can help you [[React.js|react]] quickly to outages, research about intermittent issues, optimize your usage, and also help you in proactively handling future planned downtime. [[Microsoft Azure|Azure]] Monitor is one such comprehensive monitoring solution for collecting, analyzing, and responding to telemetry from your cloud and hybrid environments. You can use Azure Monitor to maximize the availability and performance of your applications and services. Let's look at the Azure Monitor service at a glance. In the overview, you can see Azure Monitor provides application insights, container insights, VM insights, and network insights. It also helps in detection, triage, and diagnosis of various alerts and metrics. Let's look into creating charts to monitor and investigate the usage and performance of your Azure resources using the metrics. I'll select subscription level. For resource type, I'll select virtual machine that is hosted in East US location and click on apply. Under metrics, I'll select percentage CPU and average as aggregation. So here you see there are two [[Virtual Machines]]
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-monitor?u=76281980&t=96)** hosted in East US location in my subscription, and I'm getting the CPU utilization for both these virtual machines for last 24 hours. You can also change time here according to your requirement. You can customize the time or choose a duration as per your requirement. Let us look into some of the important uses of Azure Monitor. It can be a perfect monitoring solution for various industries that are using cloud. They can analyze the root cause of various intermittent issues being faced by their business. Azure Monitor helps you gain insights into application performance at a high level. You can also deep dive into specific issues on need basis. To learn more about Azure Monitor, you can go to the free training that is provided by Microsoft to learn in depth about Azure Monitor and all its related services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Microsoft]] (2), [[Virtual Machines]] (2), [[React.js|React]] (1)
> **Env Vars:** cpu (2)
> **UI Navigation:** click on (1), go to (1)
> **Speakers:** - [instructor] (1)


### 6. Planning and Cost Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure pricing calculator](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=0)** - [Instructor] The [[Microsoft Azure|Azure]] pricing calculator, can help you understand the cost of moving workloads through Azure. Pricing calculator also displays the price of different configurations of Azure services. This calculator is capable of providing an estimate of a complete solution, using a combination of Azure services, thereby helping organizations in taking an informed decision, while considering a shift to cloud, or while expanding their presence in Azure. Let us look at some of the ways to calculate estimate cost for running different types of workloads in cloud, using Azure pricing calculator link. This is the pricing calculator page where you can choose a product to include it in your estimate. We'll start with the virtual machine. By clicking on the virtual machine, you get a hyperlink. Click on the view hyperlink to view the cost. Select a region of your preference and leave it as default. You can choose between [[Windows]] or [[Linux]] operating system. Do you want the cost of operating system only, BizTalk or a [[Microsoft SQL Server|SQL Server]]? I'll leave it as default. The tier can be basic or standard. I'll leave it as standard. Under category, is your VM compute-optimized, general purpose, GPU, high-performance compute, memory-optimized,
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=95)** or storage-optimized? I'll choose as memory-optimized. Pick from a series of instances, I'll choose Dv2-series. And there are a list of instances for Dv2-series. So I'll pick D12 v2. Number of [[Virtual Machines]] that you want to run for your solutions, I'll make it as two. And you can choose either per day cost, monthly cost, or hourly cost. I'll make it as one month. Do you want the license cost included, or do you already have a license? If you have your license, you can choose Azure Hybrid Benefit. So I'll choose license included. You can choose either saving plan or reserved instance. Make a note that you cannot choose both at the same time. So if I reserve the instance of this virtual machine, this is the cost that I'm getting. You can include the number of discs that you want. I'll choose a standard SSD. The redundancy would be LRS and I'll choose one disk. You can add storage transactions and bandwidth as well. So this is the monthly upfront cost that you would be paying for reserving two VMs for one year. Here, you also get an option to change the currency of the price. So you can either choose one of the regions
>
> **[3:09](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=189)** where you're living in and the currency would be displayed in your local amount. Leave it as default. Here, you get a sign-in option where you can sign in using your own subscription to get the pricing details as per the subscription that you're using. So I'll pick my subscription over here, give my password and click on sign in. Once I've logged in with my account, here, it gives my account details. You can also get an estimate for running an entire solution in the cloud. For your convenience, Azure pricing calculator provides some example scenarios. Say for instance, we will be taking advanced analytics on [[Big Data]] and click on add to estimate. So here, you see, the cost of running an entire solution in Azure on a monthly basis, which comes out to be $24,051 and 57 cents, including Azure services like Azure Synapse Analytics, Azure Analytics Services, [[Microsoft Power BI|Power BI]], storage accounts and Azure Cosmos DB. I hope this gives a fair idea about using one of the most important costing tools, offered by Azure, which is the pricing calculator. One thing that you need to remember,
>
> **[4:42](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-pricing-calculator?u=76281980&t=282)** is prices are estimates only and are not intended as actual price quotes. Actual price may vary depending on the type of agreement that your organization has with [[Microsoft]], the date of purchase and the currency exchange rates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Windows]] (1), [[Linux]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Virtual Machines]] (1)
> **Env Vars:** sql (1), gpu (1), d12 (1), ssd (1), lrs (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (3)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Total Cost of Ownership Calculator](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]]'s Total Cost Of Running Calculator, popularly known as TCO Calculator, helps you estimate the cost saving of operating your solution on Azure over time when compared to operating the same solution in an on-premise data center. These costs include electricity, network maintenance, storage, database, IT labor, and other miscellaneous costs. Let us open the TCO page and look for the potential costs that can be saved by moving your on-prem workloads to Azure. The very first thing that you do after signing into a TCO calculator is to sign in using your [[Microsoft Azure]] account. Enter the details of your on-premise server infrastructure. I'll add test workload. Is it a [[Windows]] or [[Linux]] server or a web application? I'll make it as Windows Linux server. I have physical servers, not [[Virtual Machines]] running in my data center. Operating system is Windows. System license is data center license. The number of servers I will leave it as 20. Processors per server is three processors per server. Course per processor would be eight, it's an eight core processor. The RAM, amount of memory per server, that's eight GBs. Is it CPU optimized or memory optimized?
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=95)** My servers are CPU optimized. I do not have a graphic processing unit. Similarly, you can add details of your database, storage, network, and other components. Click on next. You can choose your currency based on your location. So I'll leave it as United States by default. The adjust assumptions page takes into the account the storage cost, IT labor cost, and other assumptions if you have, maybe [[Hardware]] cost, software cost, electricity cost, virtualization cost, data center cost, network cost, database cost, data warehouse cost. I'll click on next. So over five years of time, I will be saving this much amount of money by migrating my on-premises workload to Azure. So here this representation is also shown in a graph formation, over the next five years. Azure TCO Calculator also gives an option to upload your on-premise resource data in bulk, which can be done in three easy steps. Download the TCO calculator bulk upload template. Enter your on-premise information in the four tabs that would be provided in the [[Microsoft Excel|Excel]] that that you have downloaded, and upload your Excel into the TCO calculator. You can drop your files here. To summarize, TCO calculator is an important tool
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/total-cost-of-ownership-calculator?u=76281980&t=191)** that helps businesses in estimating the cost saving by migrating their on-prem workloads to Azure over a given period of time. I hope you found this video helpful, thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Windows]] (3), [[Linux]] (2), [[Microsoft Excel|Excel]] (2), [[Microsoft Azure]] (1)
> **Env Vars:** tco (7), cpu (2), ram (1)
> **UI Navigation:** click on (2), open the (1)
> **Exercise Files:** download the (1), template (1)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Factors affecting cost](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=0)** - [Instructor] At some point in the cloud journey, everyone hears about the need to optimize cloud spendings so as to increase the profit margin. You need to have visibility into your costs, both historical as well as the projected costs. Here we will look into eight ways to optimize your [[Microsoft Azure|Azure]] costs so that you can do more with less, increase efficiency, reduce costs, and drive innovation with Azure. Good way to begin is to follow Azure Advisor best practice recommendations for cost saving. Let us look at each of these techniques one by one. Shut down unused resources. Identify idle [[Virtual Machines]], express route circuits, and other resources which are lying idle. Get recommendations from Azure advisors and shut down these unused resources after consulting your business. Right size underused resources. Look at the past six months resource utilization and decide upon the needed size of your resources. You may downsize the resources and this will help you save some extra bucks. Add an Azure saving plan for compute and dynamic workloads. Azure saving plan helps you save up to 60% of pay-as-you-go pricing when you commit to spend a fixed hourly amount on compute services
>
> **[1:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=96)** for one or three years. Reserve instances. Reserve prices for workloads for one year or three year, depending on your usage commitment, and you will get discounts up to 72% over pay-as-you-go pricing on Azure services when you prepay for over one or three-year term using the reservation instance. Take advantage of Azure Hybrid Benefits. AWS is five times as expensive when compared to Azure for [[Windows]] and [[SQL]] servers. To be specific, if you have already purchased license for Windows and [[Microsoft SQL Server|SQL Server]] on-prem, you can bring those licenses in Azure Cloud, take advantage of hybrid benefits, and save big when you migrate your on-premise workloads to Azure. Also, when you are creating a new resource or a new virtual machine, you get an option to check the box, Hybrid Benefits, which will help you save the license cost. Configure autoscaling. It is a good practice to configure autoscaling. This lets you save by dynamically allocating and de-allocating resources to match your performance needs. Choose the right Azure compute Service. Azure offers many ways to host your code, operate most cost efficient service by selecting the right compute for your application.
>
> **[3:11](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/factors-affecting-cost?u=76281980&t=191)** Set up budgets. Create and manage budgets for your Azure resources that are used by your organizations. You'll automatically get alerted when you go over your set budget. You can also set budget alerts on consuming a specific amount of your allocated budget so that you can keep a check on your spending. Finally, you'll find a lot of success stories where customers gained significant benefits like enterprise-wide awareness and best [[Cost Management]] processes by using the guidelines. So this page precisely shows you the customer success stories who have used the cost optimization pillar of Cloud Adoption Framework from Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Windows]] (2), [[Virtual Machines]] (1), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Prerequisites:** configure (2), you need to have (1), set up (1)
> **Env Vars:** sql (2), aws (1)
> **CLI Commands:** aws (1), find (1)
> **Best Practices:** best practice (1), good practice (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Azure SLAs](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=0)** - [Instructor] In today's digital world, many organizations are looking at cloud technologies to improve [[Business Operations]] and support growth into new markets. Moving to the cloud removes the burden of supporting IT infrastructure. When network connectivity is lost or a hard drive fails, you rely on the cloud provider to restore that service. Company no longer has any control over continuity of service. This is where the service level agreement, popularly known as SLA, kicks in. But what exactly is SLA? Well, SLA is a formal agreement between a service company and a customer, describing cloud service provider's commitment for uptime and connectivity. Understanding this SLA is important as it helps understand what kind of a service continuity can the customer expect. Each [[Microsoft Azure|Azure]] service defines its own SLA. Azure's SLAs are represented as a percentage related to the service or application availability. This availability is also known as uptime. If the service was always available to use, you can say it was 100% available, or it had 100% uptime. SLAs closely relate to the service downtime,
>
> **[1:35](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=95)** that is, the duration for which the service unavailable, and the service credits that you might be entitled to if the SLA is not met. Service credits. What are service credits? Well, service credit is the percentage of fees you paid that is credited back to you when an Azure service fails to perform to its specification. For example, you might receive a discount on your Azure bill as compensation when a service fails to perform according to its SLA. In reality, 100% SLA is difficult to achieve as it does not leave much room for maintenance. Moreover, it would require duplicating every single component in case one of the components fail. For these reasons, SLAs have 99%, 99.9%, 99.95%,
>
> **[2:36](https://www.linkedin.com/learning/azure-cloud-fundamentals-explore-cloud-services/azure-slas?u=76281980&t=156)** and 99.99% availability. Here's the table to give you a sense of how total downtime decreases as the SLA percentage increases from 99% to 99.999%. So this table gives you SLA percentage, downtime per week, downtime per month, and downtime per year duration. So you see, when the SLA moves from 99 to 99.999%, the downtime per week reduces from 1.68 hours to just six seconds. Each Azure service defines its own SLA. Azure services are organized by category. Furthermore, you do not need any Azure subscription to review your service SLAs. To learn more details about SLAs, refer to the [[Microsoft]] Learn module, which gives you an overview of choosing the right Azure service by examining SLAs and service lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Business Operations]] (1), [[Microsoft]] (1)
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