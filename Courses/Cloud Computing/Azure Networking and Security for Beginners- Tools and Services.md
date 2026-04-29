---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-networking-and-security-for-beginners-tools-and-services
url: "https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services"
duration_minutes: 137
duration: 2h 17m
level: Beginner
updated: 8/7/2024
learners: 3493
skills:
  - Cloud Administration
  - Cloud Security
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHbr00BDailXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721763489368?e=2147483647&amp;v=beta&amp;t=U309jMw_oxpWEcW_Fu9la53PiGO2thmdZVQXZPWmutM"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Azure Administration for Beginners- Management Tools, Services, and Security]]'
prev_courses:
  - '[[Microsoft Entra ID Fundamentals]]'
path_nav: '[{"path":"Azure Administration for Beginners- Management Tools, Services, and Security","position":5,"total":5,"prev":"Microsoft Entra ID Fundamentals","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/cloud-administration
  - skill/cloud-security
  - skill/microsoft-azure
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Networking%20and%20Security%20for%20Beginners-%20Tools%20and%20Services.md)

![Azure Networking and Security for Beginners: Tools and Services](https://media.licdn.com/dms/image/v2/D4D0DAQHbr00BDailXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721763489368?e=2147483647&amp;v=beta&amp;t=U309jMw_oxpWEcW_Fu9la53PiGO2thmdZVQXZPWmutM)

# Azure Networking and Security for Beginners: Tools and Services

> A key component across the hundreds of Azure services is, of course, security. In this course, instructor Shyam Raj provides foundational coverage of the security features offered by Azure. Starting with topics like managed firewall services and protection against DDoS attacks, Shyam also covers Azure identity services, including key elements like authentication, authorization, and Microsoft Entra

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services) | 2h 17m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Enhance the security of Azure
  - What you need to know
  - Azure security model
- [**1. Securing Identities**](#1-securing-identities) (8 videos)
  - Understand authentication and authorization
  - Introduction to Microsoft Entra ID
  - Configuring Microsoft Entra ID
  - Role based access control
  - Configure RBAC
  - Conditional access
  - Multifactor authentication
  - Best practices
- [**2. Securing Network Connectivity**](#2-securing-network-connectivity) (10 videos)
  - Understand network components
  - Network security groups
  - Controlling traffic with network security groups
  - Azure network routing
  - Configure routing
  - Azure Firewall
  - Configure Azure Firewall
  - Azure DDoS protection
  - Other network security tools
  - Best practices
- [**3. Securing Data**](#3-securing-data) (4 videos)
  - Azure Key Vault
  - Protect data at rest
  - Protect data in transit
  - Best practices
- [**4. Defender for Cloud**](#4-defender-for-cloud) (2 videos)
  - Introduction to Defender for Cloud
  - Use cases of Defender for Cloud
- [**Conclusion**](#conclusion) (1 videos)
  - Learning more about Azure security

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Enhance the security of Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=0)** - [Shyamraj] Did you know that over 90% of companies use cloud services as of last year, making cloud security more crucial than ever?
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=8)** Organizations need security practitioners who can protect cloud assets from cyber threats.
>
> **[0:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=14)** In this course, I'll explain the tools and strategies you can deploy to secure your identities, network, and data in the Azure Cloud.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=22)** Join me as I show you how to leverage tools like Microsoft Entra ID, Azure Firewall, DDoS Protection, and Defender for Cloud.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=31)** Hi, I'm Sham.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=33)** I'm a technical instructor and industry specialist in cloud computing, networking and security.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/enhance-the-security-of-azure?u=76281980&t=39)** If you're ready, let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [shyamraj] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=0)** - [Narrator] In this course, we'll be using networking concepts such as IP addresses, ports, and routing, so a basic understanding of these concepts will be helpful.
>
> **[0:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=10)** We'll also dive into the configuration of many Azure tools, so have an Azure account to follow along.
>
> **[0:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=16)** If you do not have an Azure account, you can sign up for a free account at azure.[microsoft.com](https://microsoft.com).
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=22)** Azure offers a $200 credit for new accounts that you can use within 30 days.
>
> **[0:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=28)** As we are doing configuration exercises on the Azure portal, I encourage you to try those on your Azure account.
>
> **[0:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=34)** Just remember to delete the resources when you no longer need them.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/what-you-need-to-know?u=76281980&t=38)** Now, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), let (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [narrator] (1)

#### Azure security model
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=0)** - [Instructor] As organizations move their services and workloads to the cloud, a common concern is security.
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=6)** Administrators want to ensure that critical resources are well-protected, users have only the required level of access, and access attempts are logged.
>
> **[0:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=16)** Consider the example of Harmony Homes, a fictitious home improvement retailer.
>
> **[0:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=20)** The servers powering their website are hosted in a traditional data center.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=25)** They're considering moving their servers and workloads to the Azure Cloud.
>
> **[0:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=29)** They've identified the following Azure services they plan to use.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=32)** Azure Virtual Machines for hosting their servers, Microsoft Entra ID as their identity management platform, Azure Web Apps to host their web application and mobile backends, Azure SQL Database to host their databases, and Azure Storage to store objects such as images and documents.
>
> **[0:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=50)** Before migrating, Harmony Homes would like to understand who is responsible for the security of these tools and services if they move to Azure.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=58)** The Azure security model helps with this.
>
> **[1:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=61)** It helps understand how security is handled in the Azure Cloud.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=65)** It differentiates security responsibilities based on the service type.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=69)** There are three cloud computing service types, IaaS, or infrastructure as a service, PaaS, or platform as a service, and SaaS, or software as a service.
>
> **[1:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=79)** With IaaS, or infrastructure as a service, you request Azure to provision the infrastructure, such as virtual machines and networks.
>
> **[1:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=87)** This service type allows you to migrate your on-premises servers to virtual machines in Azure.
>
> **[1:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=93)** When using an IaaS product, such as Azure Virtual machines, it is your responsibility to secure the operating systems and applications running on those virtual machines.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=103)** You are also responsible for securing the network by applying necessary traffic filtering rules.
>
> **[1:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=108)** PaaS, or platform as a service, provides a complete development and deployment environment in the cloud.
>
> **[1:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=115)** It provides a framework that developers can build upon to develop or customize cloud-based applications.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=121)** Azure App Services is a popular PaaS product from Azure.
>
> **[2:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=125)** It allows you to host web applications without worrying about the underlying infrastructure, while still allowing you to control web application-related settings.
>
> **[2:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=134)** Unlike IaaS, when using a PaaS product, Azure takes care of the operating system and additional components, like database management systems and patching of the underlying servers.
>
> **[2:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=145)** Securing other components, like the network and applications, is a shared responsibility between Azure and the customer.
>
> **[2:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=152)** The third service type, SaaS, or software as a service, provides out-of-the-box complete software solutions that users connect to, typically using a web browser.
>
> **[2:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=163)** A popular SaaS product is Microsoft Office 365.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=166)** It offers pre-built productivity tools, such as Word and PowerPoint.
>
> **[2:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=171)** Azure manages everything required to provide the service when using a SaaS product.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=176)** This includes the underlying infrastructure, middleware, and application software.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=181)** Unlike IaaS or PaaS, Azure manages the operating system, network, and applications when using a SaaS product.
>
> **[3:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=188)** So let's summarize all of this with a chart.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=190)** When using an on-premises data center, you own the whole stack.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=194)** So you are responsible for securing the physical components, such as the network and hosts, and the logical components, such as the operating system and application controls.
>
> **[3:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=204)** You are also responsible for other components, such as identity and access management, devices, and data governance.
>
> **[3:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=211)** With IaaS, the cloud provider, that is Azure, secures the physical data center.
>
> **[3:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=216)** You manage the remaining aspects such as the operating system, applications, identities, devices, and data.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=224)** With PaaS, Azure is also responsible for securing the underlying operating system on which the service is hosted.
>
> **[3:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=230)** For example, Azure will secure the underlying Windows operating system if you're using a managed SQL database instance running on Windows.
>
> **[3:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=238)** Securing the network and applications is a shared responsibility between Azure and you.
>
> **[4:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=243)** Examples of customer's responsibilities include using an SSL/TLS certificate for the application and turning off insecure protocols.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=252)** Examples of Azure's responsibilities include securing your application's resources from those belonging to other Azure customers, and communication of secrets, such as connection strings, between your application and other Azure resources.
>
> **[4:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=267)** With SaaS, Azure is also responsible for securing the network controls and the application.
>
> **[4:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=273)** You are responsible for managing the other aspects.
>
> **[4:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=275)** Regardless of the service type, security of the following items always lies with you, data, devices, such as mobile and PCs, and identities.
>
> **[4:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=285)** As we've just seen, the shared security model helps us understand how security controls are implemented in the cloud.
>
> **[4:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=292)** It also outlines that security in the cloud is a shared responsibility between the cloud provider and the cloud user.
>
> **[4:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-security-model?u=76281980&t=298)** With this understanding, let's explore the final aspects of security in Azure, such as securing identities, network connectivity, and data.

> [!info]- Semantic Content
>
> **Analogies:** such as (11), for example (1)
> **Code Keywords:** type, (2), let (2), protected (1), this. (1), type. (1)
> **Env Vars:** sql (2), ssl (1), tls (1)
> **Definitions:** is a  (4)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 1. Securing Identities

> [↑ Back to Table of Contents](#table-of-contents)

#### Understand authentication and authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=0)** - [Instructor] Now let's talk about securing identities in the Azure platform.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=4)** First, what is an identity?
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=6)** An identity is a collection of identifiers or attributes that represent an entity.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=12)** The entity can be a human user, an application, a device, or a resource in a computer system.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=18)** The identity can be an email address, login credentials, such as username and password, IP or MAC address, bank account number, or any similar attribute that helps establish the identity of the entity.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=31)** Authentication and authorization are fundamental aspects of securing identities.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=36)** This is true for both on-premises and cloud-hosted infrastructures.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=40)** Let's understand the differences.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=42)** Authentication is the process of challenging a user or application for credentials to verify their identity.
>
> **[0:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=49)** In other words, prove they are who or what they claim to be.
>
> **[0:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=52)** Authorization determines what resources they can or cannot access, and what permissions they have on those resources.
>
> **[1:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=60)** For example, Alex is a customer of Bank of XYZ.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=64)** To access the banking functions, Alex must prove he's a customer.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=68)** To do this, he logs in with his username and password.
>
> **[1:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=71)** This is the authentication piece.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=73)** After login, what functions is he allowed to access?
>
> **[1:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=77)** Can he view statements and make payments or can he perform advanced functions?
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=81)** This is the authorization piece.
>
> **[1:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=83)** Let's look at another example.
>
> **[1:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=85)** Priya is a developer and needs access to application servers for testing purposes.
>
> **[1:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=90)** To gain access, Priya must prove who she is.
>
> **[1:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=94)** She must prove that she's an employee of the organization.
>
> **[1:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=97)** Priya may provide a corporate username and password to the authentication server to do this.
>
> **[1:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=102)** The server verifies her credentials and allows her to get in.
>
> **[1:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=105)** But what permissions does she have on the application servers?
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=109)** Is she allowed to deploy new applications or is she allowed to change the configuration of existing applications?
>
> **[1:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=115)** Determining this is the function of authorization.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=118)** In simple terms, authentication asks who you are?
>
> **[2:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=122)** And authorization asks What are you allowed to do?
>
> **[2:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=125)** If you're wondering about the protocols used for authentication and authorization, authentication is handled using the Open ID Connect protocol and authorization uses the OAuth 2.0 protocol.
>
> **[2:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=136)** Most users will not need to know the specifics of these protocols to use the Azure platform.
>
> **[2:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=142)** Now let's understand the authentication and authorization workflow on Azure.
>
> **[2:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=147)** Let's say we have a user that needs to access a protected resource, a web application.
>
> **[2:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=152)** To gain access, the user opens a web browser and navigates to the application URL.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=158)** The application checks to see if the user has already been authenticated.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=162)** If the user isn't authenticated, the application redirects the user to a registered identity provider, let's say Microsoft Entra ID.
>
> **[2:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=170)** You can use enter Entra ID for authentication and authorization purposes.
>
> **[2:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=175)** The user now authenticates to Entra ID.
>
> **[2:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=177)** Depending on the configured policy, this can be using a username and password, an authentication code, or something else.
>
> **[3:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=184)** When successfully authenticated, Entra ID sends an access token to the user.
>
> **[3:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=189)** The access token helps with authorization.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=191)** It contains the permissions the user has been granted.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=194)** The access token is attached when the user makes subsequent requests for the protected resource.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=199)** The protected resource validates the token with the identity provider.
>
> **[3:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=203)** The user is granted access to the protected resource if the token is valid.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=208)** Now, let's talk about single sign-on.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=210)** Single sign-on, or SSO, allows users to sign into multiple applications using one set of credentials so they don't have to sign into every application they use.
>
> **[3:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=220)** They authenticate their identity once and later silently authenticate when accessing other resources that rely on the same identity.
>
> **[3:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=228)** You may have seen this when accessing your emails.
>
> **[3:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=231)** After you authenticated to access your emails, you can access other cloud services from the same provider, such as storage, document editing, and photos without signing in again.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=241)** That is single sign-on in action.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-authentication-and-authorization?u=76281980&t=244)** All right, those are some important authentication and authorization concepts, now it's time to discuss Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), protected (4), this, (1), this. (1), function (1)
> **Definitions:** is a  (3), is an  (1), in other words (1)
> **Env Vars:** mac (1), xyz (1), url (1), sso (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Speakers:** - [instructor] (1)

#### Introduction to Microsoft Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=0)** - [Instructor] Microsoft Entra ID is central to securing identities in the Azure Cloud.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=5)** Entra ID is a cloud-based identity and access management service, previously known as Azure Active Directory, or Azure AD.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=13)** You can use it to authenticate and authorize your users when they need to access resources in your on-premises environment and the Azure infrastructure.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=22)** At the onset, we should make it clear that Entra ID is not simply a cloud version of the traditional Windows Server Active Directory.
>
> **[0:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=30)** More about this later in the video.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=33)** You can use Entra ID to regulate access to external and internal resources.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=38)** External resources include the Azure Portal, Microsoft Office 365, and other SaaS or software-as-a-service applications.
>
> **[0:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=46)** Internal resources include applications on your corporate network and your intranet.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=51)** Now, let's look at some use cases for Entra ID.
>
> **[0:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=54)** You can use Entra ID for authentication.
>
> **[0:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=57)** That is, to verify your user's identities and grant access to applications and resources.
>
> **[1:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=63)** You can use Entra ID for authorization.
>
> **[1:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=66)** That is, to assign permissions to users to take certain actions on specific resources.
>
> **[1:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=71)** For example, you may assign storage account permissions to one user and virtual machine permissions to another.
>
> **[1:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=78)** You can use Entra ID to implement single sign-on.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=81)** As we discussed in the last video, single sign-on allows users to access multiple applications using a single set of credentials.
>
> **[1:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=89)** With Entra ID, you can configure conditional access.
>
> **[1:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=92)** It allows you to manage access based on conditions like the user's location, device operating system, and client applications, such as browsers installed on the user's device.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=103)** You can also use Entra ID for device management.
>
> **[1:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=106)** You can manage how your users' devices access your corporate data using mobile device management, or MDM tools, provided by Microsoft or third parties.
>
> **[1:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=116)** Entra ID also supports hybrid identity.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=119)** That is, a single identity for your on-premises and cloud-based users.
>
> **[2:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=123)** While we are talking about Entra ID, it's worth mentioning its predecessor, the Windows Active Directory.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=129)** The Windows Active Directory, or AD, as it is commonly known, lived on servers known as domain controllers, and had a registry of the organization's users and computers.
>
> **[2:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=140)** Unlike Windows AD, Entra ID does not have domain controllers.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=144)** It is available as a service or application in the Azure portal.
>
> **[2:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=149)** You can still access domain services such as domain join, group policy, Lightweight Directory Access Protocol, or LDAP, Kerberos and NTLM authentication.
>
> **[2:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=159)** So you can move your legacy on-premises applications that relied on these traditional protocols to Azure without having to manage Active Directory domain services in the cloud.
>
> **[2:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=170)** Today, many organizations have applications and workloads hosted on-premises and in the cloud.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=176)** Legacy applications continue to operate on-premises while new and modern applications are deployed in the cloud.
>
> **[3:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=183)** For such scenarios, Microsoft offers Entra Connect Sync and Entra Cloud Sync, which allow you to synchronize your users and groups from on-premises Windows Active Directory to Microsoft Entra ID.
>
> **[3:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=196)** I recommend checking the documentation to know the specific differences between the two technologies.
>
> **[3:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=201)** Now that we know what Entra ID is, let's discuss how it can help secure your identities.
>
> **[3:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=207)** Entra ID has features like identity protection and privileged identity management to reduce identity-based risks.
>
> **[3:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=214)** Identity-based risk is the likelihood that someone might compromise a user's identity.
>
> **[3:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=220)** Identity protection looks for signals such as malicious IP addresses, leak credentials, and suspicious traffic to identify identity-based risks.
>
> **[3:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=229)** It supports automatic remediation when a risk is detected.
>
> **[3:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=233)** For example, if an identity-based risk is detected, you can require users to take additional actions such as performing multifactor authentication.
>
> **[4:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=242)** We'll talk about this later in the course.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=244)** Privileged identity management has features that allow you to reduce the chances of excessive or unnecessary access permissions on resources.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=252)** You can use it to configure time-bound access, where a user can access a privileged role only within a specific timeframe.
>
> **[4:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=260)** This approach ensures that users have access when they need it, but not when they don't.
>
> **[4:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=265)** You can require approval to activate higher-privileged roles.
>
> **[4:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=269)** This approach provides an additional layer of oversight before granting privileged permissions.
>
> **[4:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=274)** You can grant temporary permissions to perform privileged actions to reduce the chances of unintentional actions.
>
> **[4:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=281)** So that's about Entra ID.
>
> **[4:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=283)** It's a way to manage identities and identity-based risk in the Azure Cloud.
>
> **[4:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-microsoft-entra-id?u=76281980&t=288)** Now let's see how to configure it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (2), continue (1)
> **Analogies:** such as (4), for example (2)
> **Cross-References:** later in (2), we discussed (1), in the last (1)
> **Env Vars:** mdm (1), ldap (1), ntlm (1)
> **Definitions:** known as (2), is a  (1)
> **Prerequisites:** configure (3)
> **Tools:** azure portal (2)
> **CLI Commands:** make (1)

#### Configuring Microsoft Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=0)** - [Instructor] Now, let's see how to configure Microsoft Entra ID.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=4)** Because this course focuses mainly on networking and security in Azure, we'll examine the Entra ID configuration at a high level.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=11)** After logging into the Azure portal at portal.[azure.com](https://azure.com), search for the Entra ID service and click on the service name.
>
> **[0:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=20)** When you first sign up, Azure creates a default directory or tenant.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=25)** It represents a single organization and is intended to manage your users, applications and other resources.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=32)** So here you can see basic information about your tenant, such as the name, tenant ID, primary domain, and license information.
>
> **[0:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=41)** Go to managed tenants, if you'd like to add additional tenants to your Azure subscription.
>
> **[0:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=46)** You have many configuration options under the managed section on the left navigation pane.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=51)** Let's look at the important ones.
>
> **[0:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=54)** From the user section, you can add additional users to your tenant.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=58)** You can create internal users or invite external users.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=62)** An important thing to note, Azure users role-based access control or RBAC for authorization, in other words, to control the actions you can perform.
>
> **[1:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=72)** We'll talk more about this in an upcoming video.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=75)** The option to create a new user is grayed out for me because I do not have the necessary permissions.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=81)** Back over here, from the groups tab, you can create groups of users.
>
> **[1:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=86)** This allows for easier user administration.
>
> **[1:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=89)** Under external identities, you can allow external identities such as customers and partners to access your applications and resources.
>
> **[1:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=98)** From the roles and administrators tab, you can access pre-configured roles and create custom roles if you have the required license.
>
> **[1:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=106)** A role is a set of permissions you can assign to users and resources.
>
> **[1:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=110)** To assign a role, click the role name, and then click add assignments and assign it to the required entity.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=119)** Back over here from the enterprise applications tab, you can add popular SaaS or software as a service applications to your subscription.
>
> **[2:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=128)** Start by clicking new application and then click an app name to create and configure it for your subscription.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=135)** You can also create your own application.
>
> **[2:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=137)** This could be an on-premises application, an application you are developing, or a third party application not available in the gallery.
>
> **[2:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=145)** Back over here, from the devices tab, you can manage your device identities.
>
> **[2:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=151)** Under app registrations, you can see your registered applications and add new ones.
>
> **[2:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=157)** Identity Governance allows you to manage identity and access lifecycles.
>
> **[2:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=161)** For example, you can configure automatic provisioning of users based on signals from your HR management system.
>
> **[2:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=168)** You can configure assignment policies to add or remove a user's group memberships based on changes to the user's attributes like the job title.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=178)** You can also configure those identities to be removed when the user leaves the organization.
>
> **[3:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=183)** Back over here, application proxy allows you to configure remote access to on-premises web applications.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=190)** After signing into Microsoft Entra ID, your users can access both cloud and on-premises applications.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=198)** From the licenses tab, you can view purchase licenses and set up trials.
>
> **[3:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=203)** Cross tenant synchronization allows you to synchronize identities across multiple tenants of your organization.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=210)** With Microsoft Entra Connect, you can connect your on-premises Windows Active Directory with Microsoft Entra ID.
>
> **[3:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=217)** Doing so allows your users to have a single identity for both cloud and on-premises access.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=223)** Under custom domain names, you can configure additional domains for your Entra ID instance.
>
> **[3:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=229)** By default, Azure creates a domain name when you create the instance or your Azure subscription.
>
> **[3:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=235)** The domain name is part of identifiers such as the username and email address of the user.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=241)** The Mobility tab allows you to configure your mobile device management software, such as Microsoft Intune.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=247)** From password reset, you can configure self-service password reset for your users.
>
> **[4:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=253)** Then you have tabs to manage user settings, properties, and security settings.
>
> **[4:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=258)** You also have the option to monitor logs and usage.
>
> **[4:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=262)** Alright, those are the configuration options for Microsoft Entra ID at a high level.
>
> **[4:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=267)** As you can see, the options are quite intuitive.
>
> **[4:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=270)** I recommend trying a few configuration options like creating a user, a role, and also assigning a role to a user.
>
> **[4:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configuring-microsoft-entra-id?u=76281980&t=278)** In the next video, we'll explore role-based access control.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (9), set up (1)
> **Analogies:** such as (4), for example (1)
> **Code Keywords:** let (2), default, (1), self (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Env Vars:** rbac (1)
> **Cross-References:** in the next (1)

#### Role based access control
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=0)** - [Instructor] So we've seen how to configure users and groups in Azure, but how can we ensure that users have the right level of access?
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=8)** This involves accessing the necessary resources and having the correct permissions for them.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=13)** This concept is known as authorization, which we discussed in an earlier video.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=18)** Inadequate permissions prevent users from doing their jobs while excessive permissions are a security risk.
>
> **[0:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=24)** Providing the right level of access is a critical security function.
>
> **[0:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=28)** This can be achieved using role-based access control, or RBAC.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=32)** It is a method of creating roles, or in other words, permission sets and assigning them to users and groups.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=39)** Here are some examples of what you can do with RBAC.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=42)** You can allow a user to view properties of virtual machines while allowing another user full access, including the ability to create and delete them.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=51)** You can allow a user to create and configure app service environments while allowing another user to reboot the environment.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=58)** You can allow a user to view keys in the Azure key vault while allowing another user to modify the key rotation policy.
>
> **[1:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=66)** Now let's talk about roles.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=68)** A role is an object with permissions.
>
> **[1:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=70)** Sometimes it is also called a role definition.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=73)** When you assign a role to a user, it defines their permissions, or in other words, the actions they're allowed to perform, such as read, write, and delete.
>
> **[1:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=83)** Here is an example of a built-in role called reader.
>
> **[1:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=87)** As you can see, it has an ID, name, and description.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=91)** It has no defined scope, so permissions apply to all objects and it grants read permissions.
>
> **[1:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=98)** If you assign this role to a user, they can read or view all resources.
>
> **[1:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=104)** Azure has several built-in or pre-configured roles that you can use.
>
> **[1:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=108)** But you can also create custom roles.
>
> **[1:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=110)** You can assign a role to a user, a group, an application, a service principle, or a managed identity.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=118)** These objects are collectively known as security principles.
>
> **[2:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=122)** Let's understand role assignment with an example.
>
> **[2:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=125)** Let's say a team of developers wants to access the dev resource group.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=129)** A resource group in Azure is a container for related resources.
>
> **[2:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=133)** In this case, the security principle is the team of developers.
>
> **[2:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=137)** They're assigned a role with required permissions.
>
> **[2:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=141)** The role has no defined scope, so it will grant permissions to access all resources, but we want the developers to have permissions only on the dev resource group.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=150)** You can do this by assigning a scope.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=153)** Once you assign a scope, the developers will have permissions, but only on the dev resource group.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=158)** A security principle can have multiple roles assigned to it.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=162)** In that case, the effective permissions are the sum of all role assignments.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=166)** For example, if one role assignment grants permissions to create virtual machines, while another grants permissions to create app service environments, the effective permissions are the sum of both.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=178)** That is create virtual machines and app service environments.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=181)** A key distinction to be aware of is the difference between Azure roles and Microsoft Entra roles.
>
> **[3:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=188)** In this video, we've been discussing Azure roles, which apply to resources in your Azure subscription.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=194)** This includes resources like virtual machines and storage accounts.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=198)** Azure roles don't grant permissions to manage objects in Entra ID, like users, groups, and domains.
>
> **[3:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=205)** Instead, they grant you permissions to manage objects in your Azure subscription.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=210)** Entra roles allow you to manage Microsoft Entra resources in your directory.
>
> **[3:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=215)** For example, Entra roles grant you permissions to edit users, reset their passwords, and manage licenses and domains.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=223)** All of these are related to an Entra ID directory.
>
> **[3:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=226)** So Azure roles control permissions to manage Azure resources, while Entra roles control permissions to manage Entra resources.
>
> **[3:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=233)** There is a clear distinction between these in the Azure portal, they're configured in different places.
>
> **[4:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=240)** By default, Azure roles and Entra roles do not overlap.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=244)** For example, an Azure role with administrative permissions will not grant you administrative permissions in Entra.
>
> **[4:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=251)** So if you need administrative permissions on both Azure and Entra ID resources, you will need role assignments with administrative permissions on both resource types.
>
> **[4:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=261)** All right, so those are the important RBAC concepts to be aware of.
>
> **[4:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/role-based-access-control?u=76281980&t=265)** In the next video, we'll see how to configure this from the Azure portal.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), known as (2), in other words (2), is an  (2)
> **Code Keywords:** let (3), delete (2), case, (2), function (1), default, (1)
> **Analogies:** for example (3), such as (1)
> **Env Vars:** rbac (3)
> **Prerequisites:** configure (3)
> **Cross-References:** we discussed (1), in the next (1)
> **Tools:** azure portal (2)
> **Warnings:** be aware (2)

#### Configure RBAC
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=0)** - [Instructor] Now let's configure RBAC.
>
> **[0:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=2)** I'm logged into the Azure portal at portal.[azure.com](https://azure.com).
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=6)** First, let's differentiate Entra role from Azure roles.
>
> **[0:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=10)** Start by opening the Entra ID service.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=13)** Under the managed section on the left navigation pane, click roles and administrators.
>
> **[0:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=19)** Once you're here, you will see your user role.
>
> **[0:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=21)** If you're using the account with which you created the Azure subscription, you will have the global administrator role.
>
> **[0:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=27)** It grants you administrative access in Entra ID.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=31)** The global administrator role is automatically assigned to the first user in an Azure account.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=36)** Here's a list of roles.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=38)** Here, you have the name, description, and role type.
>
> **[0:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=41)** These are Entra roles.
>
> **[0:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=43)** They grant you permissions on Entra ID.
>
> **[0:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=46)** Note that these roles will not grant permissions on Azure resources such as virtual machines and storage accounts.
>
> **[0:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=52)** Click on a role name to view assignments.
>
> **[0:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=55)** Under the description section on the left navigation pane, you will see permissions granted by the role.
>
> **[1:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=61)** To assign the role, go to assignments, and then click Add Assignments.
>
> **[1:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=66)** Once you're here, select the desired user and add the assignment.
>
> **[1:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=70)** Now let's talk about Azure roles, also known as Azure RBAC.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=75)** Go to the homepage of the Azure portal and then go to subscriptions.
>
> **[1:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=80)** A subscription is where your Azure resources are created.
>
> **[1:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=84)** Click the subscription name, then go to Access Control IAM.
>
> **[1:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=89)** Under the roles tab, you will find a list of built-in roles.
>
> **[1:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=93)** Remember, these roles will grant permissions on Azure resources, not Entra objects like users, groups, and domain.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=101)** Let's search for roles that grant permissions on virtual machines.
>
> **[1:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=108)** Here's a role called Virtual Machine User Login.
>
> **[1:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=111)** This role allows users to view virtual machines in the portal and log into them.
>
> **[1:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=117)** Let's assign this role to a user.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=119)** At the top, click Add and then click Add Role Assignment.
>
> **[2:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=124)** Search and select the desired role.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=127)** We are looking for virtual machine user login.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=132)** On the next step, choose who or what you want to assign the role to.
>
> **[2:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=136)** With user selected, click Select Members.
>
> **[2:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=140)** Search and select the desired user.
>
> **[2:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=145)** Then finish off the assignment.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=148)** The role has been assigned to the selected user.
>
> **[2:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=151)** Now let's see how to create a custom role.
>
> **[2:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=154)** At the top, click Add, and then click Add Custom Role.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=158)** Let's create a custom role that allows users to view virtual machines, but not log into them.
>
> **[2:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=164)** Start by providing a name.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=166)** We'll call this as virtual machine view only.
>
> **[2:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=170)** To create this role, you have three choices.
>
> **[2:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=173)** You can clone an existing role, start from scratch, or create using JSON.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=178)** We'll keep it simple.
>
> **[3:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=180)** We'll use the option to clone an existing role.
>
> **[3:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=183)** We'll clone the role we just viewed, virtual machine user login.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=191)** On the next step, you will see permissions from the role you just cloned.
>
> **[3:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=196)** You can remove existing permissions or add new ones.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=199)** Let's remove the two login related permissions.
>
> **[3:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=204)** Let's also remove the permission to access credentials.
>
> **[3:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=209)** Now we are left with read permissions for virtual machines and their associated components like network interfaces and load balancers.
>
> **[3:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=217)** On the next step, you can configure the scope of this role.
>
> **[3:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=221)** By default, the subscription is selected.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=224)** This means when this role is assigned to a user, they'll have permissions to view all virtual machines in the subscription.
>
> **[3:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=230)** But what if you wanted to restrict this to virtual machines within a specific resource group?
>
> **[3:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=235)** To do this, click Add Assignable Scope.
>
> **[3:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=239)** You can set the scope to the management group, subscription, or resource group.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=244)** Select Resource Group, then the subscription to which the resource group belongs, and then the required resource group in the subscription.
>
> **[4:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=254)** Then remove the default assignment targeting the subscription.
>
> **[4:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=259)** On the next step, you will find the JSON document for this role.
>
> **[4:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=263)** Finally, review and create the role.
>
> **[4:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=266)** The role has been created.
>
> **[4:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=268)** You can now assign it just like any other Azure role.
>
> **[4:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=272)** All right, so that's about Azure roles.
>
> **[4:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=275)** As we've just seen, Azure RBAC allows fine-grained access management to Azure resources.
>
> **[4:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=281)** When assigning roles to users, a security best practice is to follow the principle of least privilege.
>
> **[4:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=287)** This means granting only the permissions required to do the job.
>
> **[4:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-rbac?u=76281980&t=291)** In the next video, we'll talk about an interesting topic, conditional access.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type. (1), default, (1), this, (1), finally, (1)
> **UI Navigation:** go to (4), select the (3), click on (1)
> **Env Vars:** rbac (3), json (2), iam (1)
> **Prerequisites:** configure (2), required to (1)
> **CLI Commands:** find (2)
> **Tools:** azure portal (2)
> **Analogies:** such as (1), just like (1)
> **URLs:** [azure.com](https://azure.com) (1)

#### Conditional access
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=0)** - [Narrator] Many organizations today have employees working remotely, at client locations, coffee shops, or in their homes.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=8)** This makes security a challenge because the perimeter is no longer the corporate office.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=13)** Administrators need to strike the right balance between security and productivity.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=17)** They need to ensure that users have proper access whenever and wherever they need it and organization's assets are protected.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=25)** Azure conditional access allows administrators to implement automated access control decisions based on signals.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=32)** Think of signals as conditions that need to be met to make a decision.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=36)** We'll look at signal types in a minute.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=39)** There are three steps to conditional access.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=42)** Step one is to analyze the signal. That is the conditions.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=45)** Step two is to make a decision.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=48)** This can be to allow or block access.
>
> **[0:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=50)** And step three is to enforce the decision.
>
> **[0:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=53)** Signals can include the following: user or group membership.
>
> **[0:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=57)** Conditional access allows you to configure policies to target specific users or groups.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=62)** Signals can include IP location information.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=65)** You can make policy decisions based on trusted IP ranges or regions or countries.
>
> **[1:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=71)** Signals can also include the device used to make the request.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=75)** You can configure policies that target devices with specific platforms.
>
> **[1:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=79)** Signals can also include application.
>
> **[1:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=82)** You can trigger conditional access when users attempt to access specific applications.
>
> **[1:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=87)** When a condition is met, the policy may grant or block access.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=91)** To grant access, you can require the user to take further action, like require multifactor authentication, require acceptance of terms of use, require an app protection policy, require the device to be compliant, or require a password change.
>
> **[1:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=107)** Let's look at some scenarios where administrators enforce conditional access.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=112)** It is common to require multifactor authentication when accessing a service from outside the corporate network.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=119)** Administrators may block access from countries your organization never operates from.
>
> **[2:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=124)** Your administrators may require use of organization-managed devices for specific applications, like ones that contain sensitive information.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=132)** Your administrators may also require you to connect from a trusted location or device for specific actions.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=139)** Now, let's go to the Azure portal and see how to configure conditional access.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=144)** Once you're at the Azure portal, go to the Microsoft Entra ID service.
>
> **[2:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=149)** Under the Manage section on the left navigation pane, scroll down and click Security.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=155)** Then go to Conditional Access.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=158)** Conditional access requires the Microsoft Entra ID P1 license.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=162)** You can create a new access policy from scratch or using a template.
>
> **[2:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=167)** Let's create a new policy.
>
> **[2:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=170)** To create a conditional access policy, you must disable security defaults.
>
> **[2:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=174)** Security defaults protect against common attacks like phishing and password spray.
>
> **[2:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=179)** If security defaults are enabled on your account, you will be prompted to turn it off when you attempt to create a new policy.
>
> **[3:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=186)** Let's create a policy requiring users to use multifactor authentication when accessing SharePoint Online.
>
> **[3:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=193)** Start by naming your policy.
>
> **[3:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=195)** Let's call it Require Multifactor Authentication or Require MFA for SharePoint Online.
>
> **[3:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=203)** Next, you have the option to assign users to the policy.
>
> **[3:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=207)** You can include or exclude users.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=210)** You can select none, all users, or select users and groups.
>
> **[3:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=215)** Use this option to select users and groups and then select the desired user.
>
> **[3:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=225)** Under Target Resources, you can select the conditions that will cause the policy to be applied.
>
> **[3:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=230)** This can be when the user is accessing cloud apps or performing specific user actions or in a certain authentication context.
>
> **[3:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=239)** Select Cloud apps and then select Office 365 SharePoint Online.
>
> **[4:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=249)** You can also configure the policy to take effect when the user connects from a specific network.
>
> **[4:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=255)** This setting can be helpful when you want the policy to apply if the user isn't connecting from a trusted network.
>
> **[4:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=262)** Under Conditions, you can configure additional settings to trigger the policy.
>
> **[4:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=266)** This includes user risk and sign-in risk.
>
> **[4:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=270)** These apply where there is a likelihood that the user account or sign-in session is compromised.
>
> **[4:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=275)** You can also apply insider risk or access from specific platforms such as Android, iOS, Windows, and others.
>
> **[4:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=285)** You can also select access from specific locations or networks and access from specific client applications, like browsers and mobile applications.
>
> **[4:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=294)** You also have advanced settings for device filter and authentication flows.
>
> **[4:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=299)** As you can see, you can be very granular when configuring the trigger conditions.
>
> **[5:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=304)** We won't need these conditions for our use case, which requires multi-factor authentication to access SharePoint Online.
>
> **[5:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=311)** Under Access Controls, you can block or grant access.
>
> **[5:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=316)** With Grant Access, you can require additional actions like require multifactor authentication, require strong authentication methods like passwordless multifactor authentication, require the device to be Intune compliant.
>
> **[5:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=330)** If the user attempts to connect using a noncompliant device, conditional access will prompt them to bring the device under compliance.
>
> **[5:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=337)** You can require an Entra Hybrid joined device.
>
> **[5:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=341)** You can require access from approved client applications like Microsoft Outlook.
>
> **[5:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=346)** You can also require an app protection policy to control how data is accessed and shared by applications on mobile devices.
>
> **[5:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=354)** With our protection policies, you can require a pin or fingerprint when users access corporate email on mobile devices.
>
> **[6:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=362)** You can prevent users from copying and pasting corporate data into personal applications, and you can also restrict access to corporate data only from approved applications.
>
> **[6:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=372)** You can also require a password change.
>
> **[6:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=374)** If you enable multiple controls, you can require that one or all selected controls be applied.
>
> **[6:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=381)** For our policy, we'll require multifactor authentication.
>
> **[6:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=385)** You can also apply session-based controls, such as re-authenticating after a certain amount of time, or persistent sessions that allow users to remain signed in after closing and reopening their browser windows.
>
> **[6:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=398)** You also have some other session-based settings.
>
> **[6:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=400)** Once configured, you can enable the policy or set it to report-only mode.
>
> **[6:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=407)** A common challenge with conditional access is determining the impact on the end users.
>
> **[6:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=412)** When set to report-only, the policy is evaluated, but not enforced during sign-in.
>
> **[6:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=418)** You can view the evaluation results before deciding to turn on the policy.
>
> **[7:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=423)** Let's create the policy.
>
> **[7:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=425)** A quick way to test the impact of a conditional access policy is to use the What If utility.
>
> **[7:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=431)** You will find this under the Policies section.
>
> **[7:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=435)** Once you're here, click What If.
>
> **[7:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=438)** Select a user you want to test access for.
>
> **[7:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=447)** Then select a cloud app.
>
> **[7:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=452)** We are looking for Office 365 SharePoint Online.
>
> **[7:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=460)** You can select additional conditions like IP address, country, device platform, client applications, and others.
>
> **[7:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=469)** After applying the required filters, click What If.
>
> **[7:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=473)** The tool analyzes the conditions and tells you the policy that will be applied.
>
> **[7:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=478)** Back over here to Conditional Access.
>
> **[8:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=482)** You also have the option to create a policy from a template.
>
> **[8:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=485)** Here you have templates for common use cases like requiring multifactor authentication for admins, blocking legacy authentication, requiring multifactor authentication for Azure management, and others.
>
> **[8:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=500)** Back over here, under Named Locations, you can configure countries and IP ranges for your policies.
>
> **[8:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=506)** A common use case is to block access from countries where you don't have operations or users.
>
> **[8:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=513)** If you'd like users to agree to your terms of use, you can add them here and use them in a policy.
>
> **[8:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=519)** Remember that a user's access request may match multiple policies.
>
> **[8:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=523)** In such cases, all conditions must be satisfied to grant access.
>
> **[8:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=528)** Under Sign-in Logs, you will see successful and failed authentication attempts.
>
> **[8:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=533)** All right, so that's about conditional access.
>
> **[8:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/conditional-access?u=76281980&t=535)** As we've just seen, it provides a context-aware approach to security and can be a powerful tool in protecting the organization's resources.

> [!info]- Semantic Content
>
> **Code Keywords:** require (22), let (6), if. (2), protected (1), from. (1)
> **UI Navigation:** go to (3), select the (2), scroll down (1)
> **Prerequisites:** configure (6)
> **CLI Commands:** make (4), find (1)
> **Tools:** azure portal (2)
> **Exercise Files:** template (2)
> **Analogies:** such as (2)
> **Code Identifiers:** ios (1)

#### Multifactor authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=0)** - [Instructor] Now let's talk about multi-factor authentication or MFA.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=4)** Most of us already know about it as we have it turned on for many of our online accounts such as emails and bank accounts.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=11)** MFA requires that users provide an additional form of identification during the sign-in process.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=17)** This can be in the form of biometrics like a fingerprint scan, a one-time passcode sent via SMS or email, or a time-based code from an authenticator app.
>
> **[0:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=27)** MFA is considered secure because the required information is not stored or duplicated unlike a password.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=33)** MFA with Microsoft Entra works by requiring at least two or more of the following authentication methods.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=40)** Something you know, this can be in the form of a password, something you have, this can be in the form of a phone or a hardware key, and something you are.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=48)** This includes biometrics like your fingerprint or face scan.
>
> **[0:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=52)** MFA supports many authentication methods including Microsoft Authenticator, SMS, voice call, FIDO2, or Fast Identity Online Security Key, and more.
>
> **[1:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=63)** Now let's go to the Azure portal and configure multi-factor authentication.
>
> **[1:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=67)** Once you're at the Azure portal, go to the Entra ID service.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=73)** Scroll down and go to Security, and then go to Multi-Factor Authentication.
>
> **[1:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=79)** Note the message at the top that while there are many ways to deploy MFA with Entra, the best way is to use the cloud and apply it using Conditional Access.
>
> **[1:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=89)** Conditional Access is a premium feature and requires the Microsoft Entra P1 license.
>
> **[1:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=94)** If you're using the Entra ID free tenant without Conditional Access, you can configure MFA using security defaults.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=101)** Let's see how to do this.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=103)** Security defaults are under the Microsoft Entra Admin Center at entra.[microsoft.com](https://microsoft.com).
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=109)** Once you're here, under the Identity section on the left navigation pane, click Overview, and then go to the Properties tab.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=118)** Scroll down to find Security Defaults.
>
> **[2:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=122)** This account doesn't have security defaults enabled because Conditional Access policies are being used.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=129)** If you aren't using Conditional Access, you will have an option to enable security defaults.
>
> **[2:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=134)** Once enabled, all users in the organization will need to register for MFA.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=139)** If you do not want to enable MFA for all users, you can enable it for select users.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=144)** Let's return to the Azure portal and see how to do this.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=148)** Once you're back to the Azure portal, return to the Entra ID service, click Users on the left navigation pane, click the three dots on the right, and then click Per User MFA.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=162)** Here you will find users and their MFA status.
>
> **[2:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=165)** Select the desired user and click Enable.
>
> **[2:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=169)** Now let's see how to enable MFA using Conditional Access.
>
> **[2:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=173)** Let's return to the Azure portal.
>
> **[2:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=175)** Back over here to the Azure portal, go to the Entra ID service, then click Security, then go to Conditional Access.
>
> **[3:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=186)** Azure has a pre-configured policy template to enable multi-factor authentication.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=191)** So we'll click Create New Policy from Templates, select the policy to require MFA for all users, click Next to review.
>
> **[3:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=201)** You can turn on the policy or set it to Report Only mode to evaluate its effect and then turn it on later.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=208)** Click Create to finish.
>
> **[3:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=211)** Azure recommends enabling MFA on a small group of pilot users to evaluate the effect and then proceed for a wider deployment.
>
> **[3:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=219)** Finally, let's see how to configure the authentication methods available for MFA.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=224)** To configure this, go back to the Entra Admin Center at entra.[microsoft.com](https://microsoft.com).
>
> **[3:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=230)** Once you're here, click Protection on the left navigation pane, and then click Authentication Methods.
>
> **[3:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=237)** Here, you will find the available authentication methods.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=241)** You can click the desired authentication method, enable it, and target the required users.
>
> **[4:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=248)** All right, so that's about multi-factor authentication.
>
> **[4:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/multi-factor-authentication?u=76281980&t=251)** As we've just seen, the configuration is simple but can go a long way in safeguarding user accounts and preventing unauthorized access.

> [!info]- Semantic Content
>
> **Env Vars:** mfa (15), sms (2), fido2 (1)
> **Code Keywords:** let (7), this. (2), require (1), finally, (1), this, (1)
> **UI Navigation:** go to (7), scroll down (2), select the (2)
> **Tools:** azure portal (6)
> **Prerequisites:** configure (4)
> **CLI Commands:** find (3)
> **URLs:** [microsoft.com](https://microsoft.com) (2)
> **Cross-References:** go back to (1)

#### Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=0)** - [Instructor] Before wrapping up this section, let's discuss some best practices for securing identities in the Azure Cloud.
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=6)** First, protect privileged accounts using multi-factor authentication.
>
> **[0:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=10)** Password based attacks on user identities are still very common, and enabling MFA can help protect against them.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=17)** By default, Azure enables a setting called security defaults, which includes MFA.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=22)** You can also configure MFA using conditional access.
>
> **[0:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=26)** Next, Disable Less Secure Protocols.
>
> **[0:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=29)** Legacy applications, such as POP3 and SMTP, rely on legacy authentication methods.
>
> **[0:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=35)** By reviewing logs, you can discover how these protocols are used in your environment.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=39)** Azure recommends moving from legacy authentication methods to modern ones, such as Conditional Access.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=45)** Use Passwordless Authentication.
>
> **[0:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=47)** Passwordless authentication is convenient because users don't have to remember passwords, and it is also highly secure because it reduces the chances of a credential-based attack.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=58)** With passwordless authentication, the password is removed and replaced with something you are or have.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=64)** This can be a biometric, phone, or security key.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=68)** Passwordless sign-in methods include: sign in with the Microsoft Authenticator app, Windows Hello for Business, or FIDO key.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=75)** Use Role-Based Access Control, or RBAC.
>
> **[1:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=78)** The principle of least privilege states that users or applications should be granted only the minimum access required to perform their functions.
>
> **[1:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=87)** You can use RBAC, or role-based access control, to implement this.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=91)** Within a role, you can define the permissions and scope, limiting the user's access only to the required resources.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=99)** This approach may require more effort because you may have to create additional roles, but it is more secure than granting unrestricted access.
>
> **[1:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=107)** Azure has many built-in or pre-configured roles that you can use to get started with RBAC.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=113)** Implement Privileged Identity Management.
>
> **[1:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=115)** With Privileged Identity Management, you can configure time-based and approval-based role activation.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=121)** You can grant access to privileged roles, such as admin roles for short durations with start and end dates, and upon approval, which is based on a justification.
>
> **[2:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=131)** Unused and excessive privileges are a common security concern.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=135)** You can mitigate these by implementing Privileged Identity Management.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=139)** Establish a single authoritative source for identities.
>
> **[2:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=143)** Today, many organizations have hybrid deployments, which means they have resources on premises and in the cloud, and so they're also likely to have multiple identity sources.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=153)** For example, Windows AD for on-premises, and Microsoft Entra for cloud.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=158)** Azure recommends establishing a single Microsoft Entra instance as your organization's authoritative source for identities.
>
> **[2:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=165)** Doing so will reduce overhead in managing accounts, simplify configuration, and improve clarity.
>
> **[2:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=171)** Azure provides tools like Microsoft Entra Connect to synchronize your on-premises directory with Entra.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=178)** Enable Single Sign-On.
>
> **[2:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=179)** Single sign-on allows users to use a single account to access multiple applications.
>
> **[3:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=185)** Without single sign-on, your users would need to maintain multiple passwords, which would increase the likelihood of reusing passwords and creating weak ones.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=194)** You can mitigate this risk by using single sign-on.
>
> **[3:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=197)** Test privileged accounts using attack techniques.
>
> **[3:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=200)** Azure recommends using tools to run realistic attack scenarios, such as brute-force attacks against privileged accounts, like admin accounts.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=208)** Doing so will identify vulnerable user accounts before an actual attack occurs.
>
> **[3:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=213)** Create Emergency Access Accounts.
>
> **[3:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=216)** An emergency access account can prevent you from being accidentally locked out if you can't sign in.
>
> **[3:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=221)** Azure recommends that you don't assign emergency access accounts to specific individuals, and only use them in break-glass scenarios where normal administrative accounts cannot be used.
>
> **[3:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=232)** Disable or delete admin accounts when employees leave.
>
> **[3:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=236)** This may seem obvious, but it is important to have a policy that disables or deletes admin accounts when employees leave the organization.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=244)** Lastly, Log and Audit for Suspicious Activities.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=247)** Logging and auditing security events is a proven method of a improving security.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=252)** Logs can provide an electronic record and help identify gaps in security policies.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24327118?u=76281980&t=257)** Use logs or reports to identify suspicious activities, such as brute force attacks and suspicious sign-in activity.

> [!info]- Semantic Content
>
> **Env Vars:** mfa (3), rbac (3), pop3 (1), smtp (1), fido (1)
> **Code Keywords:** let (1), default, (1), include: (1), this. (1), require (1)
> **Analogies:** such as (5), for example (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Securing Network Connectivity

> [↑ Back to Table of Contents](#table-of-contents)

#### Understand network components
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=0)** - [Instructor] Now it's time to discuss securing network connectivity in the Azure Cloud.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=5)** Let's begin by taking a high-level overview of the important network and security components in Azure.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=11)** Let's begin with the Azure Virtual Network.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=13)** It is a logical networking construct built on top of the Azure Physical Network.
>
> **[0:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=19)** Think of it as a virtualized version of a traditional network found in a data center or corporate environment.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=25)** It has a private IP address space.
>
> **[0:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=28)** For example, 192.168.1.0/24.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=32)** You can segment the virtual network into one or more subnetworks known as subnets.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=38)** For example, you can divide a virtual network with IP address range 192.168.1.0/24 into two subnets with IP ranges 192.168.1.0/25 and 192.168.1.128/25.
>
> **[0:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=55)** Subnets allow you to segment your virtual network address space into appropriate segments for your organization's internal network.
>
> **[1:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=63)** For example, you may have a subnet for public-facing resources such as web servers and another for internal or private resources such as databases.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=73)** When you deploy resources in a subnet, Azure assigns them IP addresses from the range.
>
> **[1:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=79)** An important thing to remember is that a virtual network is scoped to an Azure region and cannot span multiple regions.
>
> **[1:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=86)** Also, virtual networks are isolated, preventing other customers from accessing your data.
>
> **[1:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=92)** The next component is the network security group.
>
> **[1:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=95)** You can use it to protect resources deployed in your virtual network from unauthorized access.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=101)** Think of it as a virtual firewall to filter inbound and outbound traffic.
>
> **[1:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=106)** It contains rules that allow or deny traffic.
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=109)** We'll talk more about this in the following video.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=112)** Within a virtual network, it is essential to control routing or in other words, the traffic path.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=118)** You can do this by defining routing table entries in your Azure virtual network.
>
> **[2:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=123)** With routing, you can decide where to send traffic when it is trying to reach a destination.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=129)** A common use case for routing is when you want to configure additional inspection.
>
> **[2:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=134)** For example, you can send traffic destined for your web server to a Web Application Firewall or WAF for inspection.
>
> **[2:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=142)** You can define a route that matches traffic destined for your web server and send it to the WAF.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=148)** After inspection, the WAF will forward it to your web server.
>
> **[2:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=151)** We'll get into the details of Azure routing in a later video.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=155)** DNS resolution is a critical function within any IP network.
>
> **[2:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=159)** Domain names are easy to remember, and DNS resolution allows you to resolve them to IP addresses.
>
> **[2:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=165)** Azure-provided name resolution is available by default and requires no configuration.
>
> **[2:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=171)** When you create resources in your Azure subscription, Azure configures them with a DNS name automatically.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=178)** This works for use where you want a simple to use solution.
>
> **[3:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=182)** For more advanced use cases, like modifying the DNS suffix, registering your own DNS records, or querying DNS names from your on-premises network, Azure has other options like Azure DNS Private Zones and Azure DNS Private Resolver.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=198)** In this course, we'll be relying on Azure-provided name resolution.
>
> **[3:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=202)** More information about other DNS options is available in the documentation.
>
> **[3:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=207)** Now let's talk about the Azure Load Balancer.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=210)** A load balancer is a common component in any network design.
>
> **[3:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=214)** The Azure Load Balancer distributes incoming TCP and UDP traffic to registered servers.
>
> **[3:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=220)** Load balancers can be public or private.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=223)** Public load balancers distribute internet traffic while private load balancers distribute internal traffic.
>
> **[3:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=229)** While load balancers improve the availability of your applications, they also help improve security.
>
> **[3:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=235)** They shield your servers from direct exposure to the internet.
>
> **[3:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=239)** Because you can attach network security groups to Azure Load Balancers, they only allow traffic you explicitly permit in the configuration.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=247)** So an Azure Load Balancer load balances TCP and UDP traffic.
>
> **[4:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=251)** But what if you wanted to load balance web traffic?
>
> **[4:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=254)** Azure has an application gateway for load balancing web traffic.
>
> **[4:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=258)** It load balances HTTP and HTTPS traffic.
>
> **[4:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=261)** It allows you to load balance based on HTTP-related attributes such as headers and incoming URLs.
>
> **[4:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=268)** It also supports end-to-end SSL encryption.
>
> **[4:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=271)** This means communication from the client to the gateway and the gateway to the backend server is fully encrypted.
>
> **[4:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=278)** Other important networking and security tools in Azure include the Azure Firewall and DDoS protection.
>
> **[4:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=285)** Azure Firewall is a managed firewall solution for filtering traffic, while DDoS Protection defends your network against distributed denial of service or DDoS attacks.
>
> **[4:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=295)** We'll talk more about these services in detail in later videos.
>
> **[4:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=299)** In addition to these solutions or products natively available from Azure, partner solutions are also available in the Azure marketplace.
>
> **[5:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=307)** Once you're at the Azure portal, go over to the Azure marketplace.
>
> **[5:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=312)** Here you will find third-party solutions for security, analytics, storage, and more.
>
> **[5:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=319)** Many of these solutions are used with on-premises environments, so if you're migrating your workloads to the Azure Cloud, you can continue to leverage these.
>
> **[5:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=328)** Those are the most important network and security tools available in Azure.
>
> **[5:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/understand-network-components?u=76281980&t=332)** Now let's dive into the details.

> [!info]- Semantic Content
>
> **Env Vars:** dns (9), waf (3), tcp (2), udp (2), http (2)
> **Code Keywords:** private (6), let (4), public (3), function (1), continue (1)
> **Analogies:** for example (4), such as (3), think of it as (2)
> **Definitions:** is a  (4), known as (1), in other words (1)
> **Versions:** 192.168.1 (4)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Tools:** azure portal (1)

#### Network security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=0)** - [Instructor] A common requirement in any network is to filter traffic to and from resources.
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=6)** You can do this with network security groups in Azure.
>
> **[0:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=9)** Think of it as a virtual firewall.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=11)** You define security rules that allow or deny inbound or outbound traffic to and from Azure resources.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=18)** For each security rule, you can define the source, destination, source port, destination port, and protocol.
>
> **[0:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=26)** Additionally, you can also define a name identifier and priority.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=31)** The priority is a number between 100 and 4096.
>
> **[0:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=35)** Rules are processed in priority order with lower numbers having higher priority.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=40)** For example, a rule with priority number 100 will be processed before one with priority number 200 For security group rules, you can also define direction, which can be inbound or outbound, and action, which can be allow or deny.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=56)** Inbound rules are applied before traffic reaches a resource, while outbound rules are applied after traffic exits a resource.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=64)** When you create a network security group, Azure creates these default inbound rules.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=69)** A rule named AllowVnetInBound allows all inbound traffic within a virtual network.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=75)** A rule named AllowAzureLoadBalancerInBound allows all traffic sourced from an Azure load balancer to any destination.
>
> **[1:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=83)** A rule named DenyAllInBound denies any inbound traffic not explicitly allowed previously.
>
> **[1:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=90)** Azure also creates these default outbound rules.
>
> **[1:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=93)** A rule named AllowVnetOutBound allows all outbound traffic within a virtual network.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=99)** A rule named AllowInternetOutBound allows all traffic to the internet.
>
> **[1:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=104)** A rule named DenyAllOutBound denies any outbound traffic not explicitly allowed previously.
>
> **[1:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=111)** The terms VirtualNetwork, AzureLoadBalancer, and Internet used in the Source and Destination columns of these default rules are service tags.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=121)** A service tag is a group of IP address prefixes from a given Azure service.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=127)** Now, let's consider an interesting scenario.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=129)** We have a virtual machine within a subnet.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=132)** The virtual machine has a network interface associated with it.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=135)** When attaching a network security group, you have a choice.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=139)** You can attach it to the subnet or to the virtual machines' network interface.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=144)** When you associate it with a subnet, the network security group rules apply to all virtual machines in it.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=150)** When you associate it with a virtual machine's network interface, the rules apply only to the specific virtual machine.
>
> **[2:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=156)** For inbound traffic, Azure processes the network security group associated with the subnet first, if there is one, and then the network security group associated with the network interface, if there is one.
>
> **[2:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=169)** For outbound traffic, Azure processes the network security group associated with the network interface, if there is one, and then the network security group associated with the subnet, if there is one.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=181)** A network security group can be associated with more than one resource.
>
> **[3:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=185)** Let's look at an example.
>
> **[3:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=187)** Subnet 1 has two virtual machines, VM1 and VM2.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=191)** Subnet 1 has network security group NSG1 associated with it.
>
> **[3:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=195)** VM1 has network security group NSG2 associated with its network interface but VM2 has none.
>
> **[3:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=203)** When inbound traffic destined for VM1 arrives at the subnet, it will be subject to NSG1's inbound rules.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=210)** If the traffic is allowed by NSG1, it will also be subject to NSG2's inbound rules.
>
> **[3:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=217)** When inbound traffic destined for VM2 arrives at the subnet, it will be subject to NSG1's inbound rules.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=224)** If NSG1 allows this traffic, it will reach VM2 because it doesn't have a network security group attached to its network interface.
>
> **[3:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=232)** When VM1 sends outbound traffic, it will be subject to NSG2's outbound rules.
>
> **[3:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=238)** If this traffic is allowed, it will be subject to NSG1's outbound rules.
>
> **[4:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=243)** When VM2 sends outbound traffic, it will only be subject to NSG1's outbound rules.
>
> **[4:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=249)** Subnet 2 has a virtual machine VM3.
>
> **[4:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=253)** Subnet 2 has no network security group associated with it.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=257)** VM3 has NSG2 associated with its network interface the same used by VM1.
>
> **[4:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=263)** When inbound traffic destined for VM3 arrives at the subnet, it will be allowed by the subnet because it has no network security group associated with it.
>
> **[4:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=272)** However, it will be subject to NSG2's inbound rules.
>
> **[4:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=276)** When VM3 sends outbound traffic, it will be subject to NSG2's outbound rules.
>
> **[4:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=282)** If NSG2 allows, it will be allowed by the subnet.
>
> **[4:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=286)** Subnet 3 has VM4.
>
> **[4:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=288)** No network security group is associated with the subnet or the virtual machine's network interface.
>
> **[4:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=294)** All inbound traffic is blocked if a subnet or network interface doesn't have an associated network security group, so all inbound traffic to VM4 will be blocked.
>
> **[5:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=304)** Also, all outbound traffic is allowed if a subnet or network interface doesn't have an associated network security group.
>
> **[5:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=311)** It is important to note that intra-subnet traffic, that is traffic within the subnet, is allowed by default.
>
> **[5:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=318)** However, you can deny this by creating a rule in the network security group.
>
> **[5:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=323)** As we've just seen, traffic evaluation can get complicated when a network security group is associated with the subnet and the network interface.
>
> **[5:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=332)** For this reason, Azure recommends associating a network security group to a subnet or a network interface, but not both.
>
> **[5:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=340)** This is because rules in a network security group associated with a subnet can conflict with rules in a network security group associated with a network interface and cause communication problems.
>
> **[5:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=352)** Also, network security groups are stateful, meaning they maintain connection state information.
>
> **[5:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=358)** So if a rule exists to allow outbound traffic from a resource, the reply traffic to that resource is automatically allowed.
>
> **[6:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=366)** Return traffic is not subject to security rule evaluations.
>
> **[6:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=370)** This is because the return traffic belongs to an existing flow or session.
>
> **[6:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/network-security-groups?u=76281980&t=374)** In the next video, we'll go to the Azure portal and configure a network security group.

> [!info]- Semantic Content
>
> **Env Vars:** nsg1 (7), nsg2 (7), vm1 (5), vm2 (5), vm3 (4)
> **Code Keywords:** interface (14), let (2), default. (1)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), for example (1)
> **Cross-References:** in the next (1)
> **Tools:** azure portal (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)

#### Controlling traffic with network security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=0)** - [Instructor] Let's see how to configure network security groups.
>
> **[0:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=3)** I'm here at the Azure portal.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=5)** We'll configure a network security group that allows inbound SSH and ICMP traffic to a Ubuntu machine.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=12)** You can also do this with a Windows machine by replacing SSH with RDP access.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=18)** I've already created the virtual machine.
>
> **[0:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=21)** It does not have a network security group associated with it.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=25)** The subnet to which this virtual machine belongs also does not have a network security group.
>
> **[0:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=30)** We can confirm this by clicking on the virtual machine, and then going to network settings.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=36)** As you can see, there are no rules.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=39)** Let's create the network security group.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=42)** At the top, search for NSG, or network security groups, and click the service name.
>
> **[0:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=49)** Then click create.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=51)** Select the subscription and resource group in which you'd like to create the NSG.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=56)** Then provide a name.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=58)** Let's call this Allow-inbound-SSH-ICMP.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=64)** Then select the region.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=65)** This should be the same region containing your Azure virtual machine.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=69)** In the next step, you can assign tags, then review and create the NSG.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=75)** The deployment can take a few seconds.
>
> **[1:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=77)** Once completed, click go to resource.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=81)** Here are the default inbound and outbound security rules.
>
> **[1:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=85)** All inbound and outbound traffic within the virtual network is allowed.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=91)** Inbound traffic from any Azure load balancer is allowed, and outbound traffic towards the internet is also allowed.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=99)** All other inbound and outbound traffic is denied.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=103)** Let's add inbound rules to allow SSH and ICMP traffic.
>
> **[1:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=108)** On the left navigation pane, click inbound security rules.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=113)** Then click add.
>
> **[1:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=115)** The source can be any, or specific IP addresses, or your IP address.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=121)** It can also be a service tag or an application security group.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=127)** Set this to any, and the source port range to asterisk.
>
> **[2:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=131)** You can set the destination to the specific virtual machine IP address.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=135)** You can also set it to any to use this NSG with other virtual machines that need to allow similar inbound traffic.
>
> **[2:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=142)** Set the service to SSH.
>
> **[2:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=146)** The destination port and protocol are automatically configured based on the service.
>
> **[2:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=151)** Set the action to allow.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=153)** By default, it takes the first possible priority number, 100.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=158)** I recommend starting with a higher number, leaving room to create rules with lower numbers, or higher priority.
>
> **[2:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=164)** So we'll set this to 110.
>
> **[2:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=167)** The autogenerated name looks okay. Click add.
>
> **[2:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=172)** The rule has been created, and added above the default rules.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=176)** There is a warning triangle, because opening SSH traffic to the internet is not recommended.
>
> **[3:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=182)** Since we are in a lab environment, this is fine.
>
> **[3:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=185)** Let's quickly add another rule to allow ICMP inbound.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=190)** Set the protocol to ICMP, and leave other items as the default.
>
> **[3:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=197)** We'll call the rule as AllowICMPinbound, and click add.
>
> **[3:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=204)** We've added the required rules, one for SSH, and another for ICMP.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=210)** Now it's time to associate the NSG.
>
> **[3:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=213)** You can associate it with the virtual machines network interface, or the subnet containing the virtual machine.
>
> **[3:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=219)** On the left navigation pane, click network interfaces, and then click associate.
>
> **[3:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=225)** Select the network interface associated with your virtual machine.
>
> **[3:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=229)** If the interface has a network security group associated with it already, you will see the interface here, but you won't be able to associate it.
>
> **[3:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=237)** This is because an interface can only have one network security group associated with it.
>
> **[4:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=243)** Select the interface, and click okay.
>
> **[4:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=246)** The NSGs associated with the interface.
>
> **[4:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=249)** Here we can see the virtual machine's public IP address, private IP address and name.
>
> **[4:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=254)** Let's ping the public IP address of the virtual machine.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=257)** I'll copy the IP address, and switch to a terminal window.
>
> **[4:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=261)** I'm here at a terminal, I'll use the ping command, followed by the public IP address, and press enter.
>
> **[4:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=268)** As expected, we are getting responses from the server.
>
> **[4:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=272)** Note that we added an inbound rule to allow ICMP into the virtual machine, but we did not add an outbound rule to allow ICMP responses.
>
> **[4:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=280)** However, ping is still working.
>
> **[4:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=283)** This is because network security groups are stateful, they maintain connection state information.
>
> **[4:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=288)** Since the ping responses belong to an existing session already allowed by an inbound rule, they're allowed.
>
> **[4:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=295)** Now let's go back to the Azure portal.
>
> **[4:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=297)** When a network security group is attached to the subnet and the network interface, it can be difficult to determine what traffic is being allowed or denied.
>
> **[5:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=306)** Viewing the effective security rules can be helpful in such a situation.
>
> **[5:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=312)** Back over here to network security groups, I have another network security group that denies inbound ICMP.
>
> **[5:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=320)** Let's attach it to the subnet containing the virtual machine.
>
> **[5:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=324)** I'll go to subnets, and then click associate.
>
> **[5:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=328)** I'll select the subnet containing the virtual machine, and associate it.
>
> **[5:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=332)** So now we have two network security groups, one attached to the subnet, and another to the interface of the virtual machine.
>
> **[5:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=339)** Let's see what the effective security rules look like.
>
> **[5:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=343)** Let's go to the virtual machine, and then go to network settings.
>
> **[5:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=350)** I'll click the refresh button.
>
> **[5:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=352)** Scrolling down, I can see the network security group attached to the subnet and to the interface.
>
> **[6:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=360)** I'll click the interface name.
>
> **[6:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=363)** The option to view effective security rules is under the help section, so you must be under the interface under the help section, and then click effective security rules.
>
> **[6:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=375)** Once you click, it can take a few seconds to load.
>
> **[6:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=378)** Here you can see the scope of this assessment, which is the interface.
>
> **[6:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=383)** Under associated network security groups, we're only seeing the NSG associated with the interface, not with the subnet, so let's refresh this again.
>
> **[6:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=392)** The change has taken effect, and now we can see two network security groups, one associated with the interface, and another with the subnet.
>
> **[6:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=400)** Down here you can view the rules of both the NSGs side by side.
>
> **[6:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=405)** For example, the NSG associated with the interface allows inbound ICMP, but the NSG associated with the subnet denies inbound ICMP, as we can see over here, As you can see, this information can be helpful for troubleshooting.
>
> **[7:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=423)** You can also download rules from both the NSGs in a CSV file.
>
> **[7:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=428)** All right, so that's about network security groups.
>
> **[7:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=431)** As we've just seen, they allow for fine-grain control over inbound and outbound traffic.
>
> **[7:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/controlling-traffic-with-network-security-groups?u=76281980&t=436)** In the following video, we'll talk about routing.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (16), let (11), public (3), default, (1), default. (1)
> **Env Vars:** icmp (11), nsg (8), ssh (7), rdp (1), csv (1)
> **UI Navigation:** select the (5), go to (4), switch to (1)
> **CLI Commands:** ssh (7)
> **Tools:** azure portal (2), terminal (2)
> **Cross-References:** in the next (1), go back to (1)
> **Warnings:** warning (1), note that (1)
> **Prerequisites:** configure (2)

#### Azure network routing
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=0)** - [Instructor] Properly controlling and routing traffic in your Azure infrastructure is a key security requirement.
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=6)** Routing traffic allows you to determine which devices will take traffic from one point to another.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=12)** It also allows you to control how you want to treat traffic.
>
> **[0:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=15)** Consider this example.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=17)** You are deploying a new public-facing web server.
>
> **[0:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=20)** You want to inspect incoming traffic for malicious requests before they reach the server.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=25)** By modifying routes, you can cause incoming traffic to first reach a web application firewall.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=31)** The firewall can check for and block malicious requests, while allowing legitimate requests to reach the web server.
>
> **[0:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=37)** It is a common practice to modify routes and have traffic passed through devices for inspection, sampling, and prioritization purposes.
>
> **[0:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=46)** When you create a subnet, Azure automatically creates a route table and adds default routes to it.
>
> **[0:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=53)** These are called system routes.
>
> **[0:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=55)** You cannot manually create or delete these, but you can override them with custom routes.
>
> **[1:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=61)** You cannot even see these in the Azure portal, which is different if you've used other cloud providers that allow you to see the system-defined routes.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=69)** Each route has an address prefix that identifies the destination of the traffic.
>
> **[1:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=74)** Each route also has a next hop type.
>
> **[1:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=77)** Now, let's talk about the default routes Azure creates when creating a virtual network.
>
> **[1:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=82)** The first default route routes traffic within the virtual network's address space.
>
> **[1:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=87)** This route will contain the virtual network's address prefix.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=91)** For example, if you have a virtual network with an address range of 10.0.0.0/16, the prefix will be the address range.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=99)** The second default route matches the prefix 0.0.0.0/0.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=103)** This prefix is used to match all traffic.
>
> **[1:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=105)** This route will match any prefix not otherwise matched by any other route.
>
> **[1:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=110)** It sends traffic to the internet.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=112)** The remaining default routes send traffic to none.
>
> **[1:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=116)** This means traffic is dropped.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=118)** These routes match the prefixes 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=127)** These private IP addresses, as defined in RFC 1918, are not routable on the internet.
>
> **[2:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=133)** 100.64.0.0/10 is also reserved as defined in RFC 6598.
>
> **[2:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=140)** However, if you use these prefixes in your virtual network, Azure will automatically update the next hop type from none to virtual network, so traffic destined to these prefixes will be forwarded within the virtual network.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=153)** As an example, if you're using 192.168.0.0/16 as your virtual network address range, Azure will add the prefix to the routing table and update the next hop type to virtual network.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=166)** Azure also allows you to define custom routes, also known as user-defined routes.
>
> **[2:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=171)** You can use these to override the default routes or to add additional routes.
>
> **[2:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=175)** When creating a user-defined route, you can use one of these next hop types.
>
> **[3:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=180)** First is virtual appliance.
>
> **[3:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=182)** Think of it as a virtual machine designed to perform a specific function.
>
> **[3:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=187)** For example, a web application firewall.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=190)** You would deploy these virtual appliances from the Azure marketplace.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=194)** Here is an example.
>
> **[3:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=195)** Consider a virtual network with two subnets.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=198)** Subnet A has a virtual appliance for inspection and logging purposes.
>
> **[3:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=202)** Subnet B has virtual machines.
>
> **[3:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=204)** You would like outbound traffic from subnet B to all subnets to pass through the virtual appliance for inspection and logging purposes, so you can create a custom route that looks like this.
>
> **[3:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=216)** The address prefix contains the IP range of the virtual network, allowing it to match traffic destined to all subnets in the same virtual network.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=224)** The next hop type is virtual appliance, and the next hop IP address is the IP address of the virtual appliance, 10.0.1.10.
>
> **[3:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=233)** With this route, traffic from subnet B destined to any subnet within the virtual network will be forwarded to the virtual appliance.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=241)** Another next hop type is virtual network.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=244)** You can use this to override the default routing within a virtual network.
>
> **[4:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=248)** Building upon the previous example, let's say we don't want traffic within subnet B to be inspected by the virtual appliance, allowing resources in the subnet to communicate directly.
>
> **[4:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=259)** Traffic leaving the subnet should continue to be inspected by the virtual appliance.
>
> **[4:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=263)** To accomplish this, we can add another custom route.
>
> **[4:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=266)** This route's address prefix is the address range of subnet B.
>
> **[4:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=271)** That is 10.0.2.0/24, so this route will match all traffic destined within the subnet.
>
> **[4:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=277)** The next hop type is virtual network, causing traffic to be forwarded within the same subnet.
>
> **[4:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=283)** In this case, a next hop IP address is not required.
>
> **[4:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=286)** Note that both the routes have overlapping prefixes, but Azure will choose the route we just added.
>
> **[4:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=293)** We'll understand why in a minute.
>
> **[4:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=295)** Another next hop type is virtual network gateway.
>
> **[4:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=298)** These virtual appliances are designed to function as VPN or virtual private network gateways.
>
> **[5:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=304)** A common use for this is to provide an encrypted connection, also known as a VPN connection between your on-premises network and your Azure virtual network over the public internet.
>
> **[5:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=315)** Building upon the same example, let's say an on-premises network at 192.168.0.0/16 is connected to the Azure network using a virtual network gateway.
>
> **[5:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=326)** All traffic from subnet B destined to the on-premises network should be forwarded to the virtual network gateway, so it can forward it over the VPN connection.
>
> **[5:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=336)** To accomplish this, we'll add another custom route.
>
> **[5:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=338)** The address prefix of this route is the address range of the on-premises network, 192.168.0.0/16.
>
> **[5:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=346)** The next hop type is virtual network gateway.
>
> **[5:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=349)** With this custom route, all traffic from subnet B destined for the on-premises network will be forwarded to the virtual network gateway.
>
> **[5:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=357)** The gateway will then forward it to the on-premises network over the VPN connection.
>
> **[6:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=362)** Because this traffic is passing over a VPN tunnel, we can use the private IP address space of the on-premises network in our customer route.
>
> **[6:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=371)** Another next hop type is internet.
>
> **[6:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=373)** This allows you to route traffic to the internet, so when you set the next hop type to internet, Azure will forward matching traffic to the public internet.
>
> **[6:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=382)** And then, we have the none next hop type.
>
> **[6:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=384)** This next hop type allows you to drop traffic destined to an address prefix.
>
> **[6:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=389)** Azure also supports two other next hop types, virtual network peering and virtual network service endpoint.
>
> **[6:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=396)** Azure automatically creates these when you peer virtual networks or create a service endpoint.
>
> **[6:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=403)** Now, let's understand what happens when you have multiple overlapping routes.
>
> **[6:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=407)** Going back to the earlier example, the subnet route table has two routes with overlapping address prefixes, one for 10.0.0.0/16 and another for 10.0.2.0/24.
>
> **[7:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=422)** These routes overlap because the larger subnet that is 10.0.0.0/16 contains the smaller subnet that is 10.0.2.0/24.
>
> **[7:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=432)** If you're not familiar with this concept, I recommend a quick read on subnetting.
>
> **[7:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=437)** You will also find courses and videos on this topic in the LinkedIn Learning Library.
>
> **[7:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=441)** So, when traffic is destined to 10.0.2.0/24, there are two possibilities.
>
> **[7:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=448)** According to the first route, that traffic should be routed within the virtual network.
>
> **[7:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=452)** According to the second route, the traffic should be forwarded to the next hop, 10.0.1.10.
>
> **[7:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=458)** When multiple overlapping routes exist, Azure will select the most specific route.
>
> **[7:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=464)** The route with the longest subnet mask, that is the number after the slash, is the most specific route.
>
> **[7:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=470)** In this case, /24 is longer than /16, so the route with the prefix 10.0.2.0/24 will be chosen, and traffic will be routed within the virtual network.
>
> **[8:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-network-routing?u=76281980&t=483)** In the following video, we'll look at a configuration example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (3), override (3), private (3), type. (2)
> **Versions:** 10.0.2 (5), 10.0.0 (4), 192.168.0 (4), 10.0.1 (2), 0.0.0 (1)
> **Env Vars:** vpn (5), rfc (2)
> **Definitions:** is a  (2), known as (2), is an  (1)
> **Analogies:** for example (2), think of it as (1)
> **Documentation:** rfc (2)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)

#### Configure routing
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=0)** - [Instructor] Now let's see how to configure routing.
>
> **[0:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=2)** Let's begin by reviewing system routes.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=5)** Here I have a virtual network called VNET1.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=8)** It has an IP address range of 10.0.0.0/16.
>
> **[0:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=13)** It has two subnets, subnet A with an IP address range of 10.0.1.0/24, and subnet B with a range of 10.0.2.0/24.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=25)** In the last video, we talked about system routes.
>
> **[0:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=28)** These are routes that Azure creates when you create a subnet.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=32)** In the Azure portal there is no way to see these system routes.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=36)** However, you can see the effective routes that apply to a network interface within the subnet.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=42)** Let's look at it.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=45)** Here I have a virtual machine deployed in subnet A.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=48)** We can see that over here.
>
> **[0:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=50)** The virtual network is VNET1 and the subnet is subnet A.
>
> **[0:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=55)** Let's go to network settings on the left navigation pane and then click the interface.
>
> **[1:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=60)** You will find effective routes under the help section of the interface.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=65)** This can take a few seconds to load.
>
> **[1:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=67)** The effective routes you see here are a combination of routes you create or user defined routes as your default routes or system routes, and any routes propagated from your on-premises network through an Azure VPN gateway.
>
> **[1:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=82)** So while you cannot see the default routes like some other cloud providers allow you to do, you can see the effective routes on an interface.
>
> **[1:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=89)** Now let's see how to create a route table and attach it to the subnet.
>
> **[1:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=93)** At the top search for route tables and click on the service name.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=99)** Then click create.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=101)** Select the subscription and resource group where you'd like to create it.
>
> **[1:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=105)** Then select the region.
>
> **[1:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=107)** This should match your subnet.
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=109)** Then give your route table a name.
>
> **[1:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=111)** I'll call it VNET1 subnet A route table.
>
> **[1:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=117)** If you have a VPN connection with an on-premises network, you can choose to propagate on-premises routes to your Azure subnets.
>
> **[2:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=124)** I'll choose no because I don't have a VPN connection.
>
> **[2:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=128)** In the next step, add any required tags, then review and create the route table.
>
> **[2:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=136)** Once created, click go to resource.
>
> **[2:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=140)** To add a new route, go to routes on the left navigation pane and then click add.
>
> **[2:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=146)** Give you route a descriptive name.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=148)** Let's call this route to internet.
>
> **[2:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=154)** The destination type for the route can be IP addresses or service tag.
>
> **[2:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=159)** A service tag represents a group of IP address prefixes from a given Azure service.
>
> **[2:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=164)** For example, virtual network.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=166)** Let's say you want to forward all traffic within the virtual network to a virtual appliance for inspection purposes.
>
> **[2:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=173)** In that case, the destination type will be IP addresses.
>
> **[2:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=177)** The destination IP would be the IP range of your virtual network.
>
> **[3:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=182)** In this case 10.0.0.0/16.
>
> **[3:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=186)** This configuration will allow you to match all traffic within the virtual network.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=191)** The next hop type would be virtual appliance.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=194)** Then provide the virtual appliance IP address under the next hop address.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=199)** Note the other next hop types we discussed in the last video.
>
> **[3:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=202)** Virtual network gateway, virtual network, internet, and none.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=208)** As you can see, the configuration is simple.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=210)** Let's add a route that will provide internet access to the subnet.
>
> **[3:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=215)** Change the destination address to 0/0 to match all destinations.
>
> **[3:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=222)** Also, change the next hop type to internet and then click add.
>
> **[3:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=227)** So now the route table has a route to the internet.
>
> **[3:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=230)** You'll need to attach the route table to a subnet for it to take effect.
>
> **[3:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=235)** Click subnets on the left navigation pane.
>
> **[3:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=238)** Then click associate and choose the desired virtual network and subnet to associate.
>
> **[4:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=245)** Then click OK.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=247)** Now the route table will forward traffic based on the configured routes.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=252)** We can confirm this by going to the virtual machine.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=257)** Then go to network settings, click the network interface, and then go to effective routes under the help section.
>
> **[4:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=265)** Here we can see the custom route we added.
>
> **[4:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=268)** The source is user.
>
> **[4:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=270)** The address prefix is 0/0.
>
> **[4:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=273)** The next hop type is internet, and here is the name we provided.
>
> **[4:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=277)** As we've just seen, routing provides a flexible mechanism to control flow of traffic.
>
> **[4:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-routing?u=76281980&t=282)** By leveraging system routes and customizing it with user defined routes, you can optimize your network for security.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (5), case, (1)
> **UI Navigation:** go to (5), select the (2), click on (1)
> **Env Vars:** vnet1 (3), vpn (3)
> **Cross-References:** in the last (2), we talked about (1), in the next (1), we discussed (1)
> **Versions:** 10.0.0 (2), 10.0.1 (1), 10.0.2 (1)
> **Prerequisites:** configure (1), you'll need (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)

#### Azure Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=0)** - [Instructor] Firewalls are a key component of any network security solution.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=4)** They regulate traffic by allowing only the required traffic and denying the rest.
>
> **[0:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=9)** For example, a firewall protecting a web server may only allow inbound HTTP and HTTPS traffic.
>
> **[0:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=16)** Microsoft Azure provides a managed cloud-based firewall, known as the Azure Firewall, to protect your Azure virtual network resources.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=25)** With the Azure Firewall, you can configure network rules that define source and destination address, destination port, and protocol.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=33)** You can also configure application rules containing fully qualified domain names., or FQDNs.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=40)** The Azure Firewall is stateful.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=42)** This means if you allow traffic in one direction, the return traffic is automatically allowed because it belongs to an existing session.
>
> **[0:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=49)** Azure Firewall, being a managed solution, is highly available and scales automatically based on demand.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=56)** So if your traffic patterns change, Azure Firewall will automatically scale up or down to account for that.
>
> **[1:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=63)** The Azure Firewall is available in three options, Basic, Standard, and Premium.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=69)** The features available to you will depend on the option you choose.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=73)** The basic variant has features like high availability, support for multiple availability zones, network traffic filtering rules, application FQDN filtering rules.
>
> **[1:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=83)** It also supports outbound source NAT, or network address translation.
>
> **[1:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=88)** So when an Azure virtual machine tries to reach the internet, the Azure Firewall will translate its private IP address to a public address that can be routed on the internet.
>
> **[1:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=98)** The basic variant also supports inbound destination NAT.
>
> **[1:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=102)** So when clients on the internet try to reach your Azure virtual machine, the Azure Firewall will translate the virtual machine's public IP address to its internal private IP address.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=112)** The basic variant also includes threat intelligence in alert mode, logging, and other features.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=119)** The Standard and Premium variants add more features on top of what is already available with Basic.
>
> **[2:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=125)** for a complete list of features, I recommend checking the documentation.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=129)** When you have multiple Azure Firewalls deployed, managing each of them individually can be a challenge.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=135)** For such situations, you can use the Azure Firewall Manager.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=139)** It allows you to apply a common configuration across firewalls in your tenant.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=144)** In an earlier video, we discussed network security groups.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=148)** They allow you to filter inbound and outbound traffic using security rules.
>
> **[2:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=152)** That sounds similar to what the Azure Firewall does.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=155)** So why should you use the Azure Firewall?
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=158)** Let's talk about it.
>
> **[2:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=159)** Network security groups, or NSGs, operate at the subnet or network interface level, where the Azure Firewall works at the network level.
>
> **[2:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=168)** NSGs filter traffic based on attributes such as IP address, port, and protocol.
>
> **[2:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=174)** However, the Azure Firewall can also filter traffic based on the application and web categories.
>
> **[3:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=180)** For example, you can deny traffic to social media and file sharing websites.
>
> **[3:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=185)** NSGs do not support threat-based filtering, but the Azure Firewall does.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=190)** Also, there is no way to centrally manage network security groups, but you can manage multiple Azure Firewalls using the Azure Firewall Manager.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=199)** NSGs do not support NAT, or network address translation, but this is supported by the Azure Firewall.
>
> **[3:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=206)** And NSGs do not support TLS inspection, but the Azure Firewalls do.
>
> **[3:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=212)** TLS inspection is a method of decrypting encrypted SSL TLS sessions to check for threats.
>
> **[3:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=218)** After inspection, the traffic is re-encrypt and forwarded.
>
> **[3:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=222)** So if you're only looking for basic traffic filtering capabilities based on attributes like IP address, port, and protocol, the network security group might be a good choice.
>
> **[3:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=233)** But if you're looking for enterprise-grade protection, with flexible configuration options that can filter threats, you should consider using the Azure Firewall.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-firewall?u=76281980&t=241)** In the following video, we'll see how to configure the Azure Firewall.

> [!info]- Semantic Content
>
> **Env Vars:** nat (3), tls (3), http (1), https (1), fqdn (1)
> **Code Keywords:** private (2), public (2), let (1), interface (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Prerequisites:** configure (3)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Configure Azure Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=0)** - [Narrator] Let's see how to configure the Azure firewall.
>
> **[0:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=2)** Here is the configuration scenario.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=5)** We have a virtual network with two subnets, one for the Azure firewall and another for servers.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=11)** All traffic from the server subnet will pass through the firewall and be subject to its filtering rules.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=17)** Azure recommends deploying the firewall in a separate virtual network for production scenarios.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=22)** Virtual machines should be deployed in a separate virtual network, peered with the firewall's virtual network.
>
> **[0:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=28)** Because we are configuring in a lab environment, we'll keep it simple and use a single virtual network for the firewall and virtual machines.
>
> **[0:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=36)** Now let's go to the Azure portal.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=38)** We'll begin by configuring the virtual network and the subnets.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=42)** At the top, search for virtual networks and click on the service name, then click Create.
>
> **[0:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=49)** Start by selecting the required subscription and resource group in which you'd like to deploy the virtual network.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=56)** Then provide a name.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=58)** We'll call this VNET1.
>
> **[1:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=60)** Select the region and click Next a couple of times.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=64)** Under the IP addresses tab, you will notice that Azure automatically assigns the 10/16 address space, and it also creates a default subnet.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=75)** Let's edit it.
>
> **[1:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=76)** Change the subnet purpose to Azure Firewall.
>
> **[1:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=80)** Azure automatically names the subnet as AzureFirewallSubnet.
>
> **[1:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=84)** The starting address is 10.0.0.0, and the size is /26.
>
> **[1:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=91)** Click Save.
>
> **[1:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=92)** The Azure firewall also requires a subnet for forced tunneling.
>
> **[1:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=96)** forced tunneling allows you to route all internet bound traffic to a designated desktop like an appliance for inspection instead of going directly to the internet.
>
> **[1:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=106)** So let's add a subnet for forced tunneling.
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=109)** Click Add a subnet and change the purpose to firewall management or forced tunneling.
>
> **[1:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=115)** Azure calls the subnet as AzureFirewallManagementSubnet.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=120)** The starting address is 10.0.1.0, and the size is /26.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=126)** Click Add.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=127)** Let's add one more subnet for the servers.
>
> **[2:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=130)** So we'll click Add a subnet.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=132)** We'll leave the purpose set to default, and we'll name the subnet as ServerSubnet.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=139)** The starting address is 10.0.2.0, and we'll leave the size set as /24.
>
> **[2:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=146)** Click Add.
>
> **[2:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=147)** So we are creating a virtual network with three subnets, AzureFirewallSubnet, AzureFirewallManagementSubnet, and ServerSubnet.
>
> **[2:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=156)** Click Review + create, and create the virtual network.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=162)** Deployment is complete.
>
> **[2:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=163)** Now let's create the Azure firewall.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=166)** At the top, search for firewalls and click the service name.
>
> **[2:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=172)** On the left navigation pane, under the security section, you will find Azure firewalls.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=178)** Let's create a new firewall.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=181)** As always, start by selecting the subscription and the resource group in which you'd like to deploy the firewall.
>
> **[3:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=188)** We'll name the firewall as FW1.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=191)** Then select a region.
>
> **[3:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=193)** This should match the virtual network you created earlier.
>
> **[3:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=196)** You can also select an availability zone to deploy the firewall.
>
> **[3:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=200)** And Azure availability zone is a physically isolated data center that provides low latency access to other availability zones.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=208)** Deploying your resources in different availability zones can protect against correlated failures, because each availability zone is an isolated data center.
>
> **[3:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=218)** For this deployment, we'll use the basic variant or the basic SKU.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=223)** With the basic SKU, you will use a firewall policy to manage the firewall.
>
> **[3:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=227)** Click Add new to add a new firewall policy.
>
> **[3:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=231)** And we'll call this as FW1-firewall-policy.
>
> **[3:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=237)** As stated here, a new firewall policy with default settings will be created.
>
> **[4:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=243)** Click OK.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=244)** Then choose to use an existing virtual network and select the one you created earlier.
>
> **[4:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=250)** You can give your firewall a public IP address, and you will need to add a public IP address for management purposes.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=257)** So click Add new and provide a name for the management IP.
>
> **[4:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=262)** We'll call this FW1-MGMT-IP.
>
> **[4:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=268)** Click OK.
>
> **[4:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=269)** In the next step, you can add tags, then review and create the firewall.
>
> **[4:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=275)** The deployment can take a few minutes.
>
> **[4:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=277)** So I've already created a firewall with a similar configuration.
>
> **[4:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=281)** It's called FW2, and it's located in East US 2.
>
> **[4:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=286)** I'll use this firewall for the rest of the configuration.
>
> **[4:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=289)** Click on the firewall.
>
> **[4:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=291)** And under the overview tab, you will find the name of the firewall policy.
>
> **[4:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=297)** Click on the firewall policy name.
>
> **[4:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=299)** Under Settings on the left navigation pane, you can add network and application rules.
>
> **[5:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=305)** You can also add DNAT, or destination net rules, to allow inbound connections.
>
> **[5:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=311)** Let's add a network rule to allow virtual machines in the server subnet to reach DNS servers on the internet.
>
> **[5:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=317)** Rules are added as rule collections.
>
> **[5:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=320)** So let's create a collection first.
>
> **[5:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=322)** We'll call this collection as DNS-rules.
>
> **[5:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=328)** The collection type is network.
>
> **[5:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=331)** We'll give it a priority number, 110.
>
> **[5:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=334)** Lower numbers have higher priority.
>
> **[5:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=337)** The action is allow.
>
> **[5:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=339)** We'll add it to the default network rule collection group.
>
> **[5:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=342)** Azure creates these groups, which contain one or more rule collections.
>
> **[5:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=347)** You can also create custom rule collection groups.
>
> **[5:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=350)** For now, we'll add it to the default.
>
> **[5:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=353)** Now you can configure the rule.
>
> **[5:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=354)** We'll call it Allow-DNS.
>
> **[5:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=358)** The source type can be IP address or IP group.
>
> **[6:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=362)** We'll set it to IP address.
>
> **[6:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=364)** And we'll set the source to asterisk, which means any.
>
> **[6:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=368)** Set the protocol to UDP and the destination port to 53, which is the port number used by the DNS protocol.
>
> **[6:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=377)** Set the destination type to IP address.
>
> **[6:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=381)** And under destination, enter the IP address of the DNS server you would like to allow access to.
>
> **[6:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=387)** 4.2.2.2 is a popular DNS server.
>
> **[6:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=391)** Once configured, click the Add button.
>
> **[6:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=394)** Now the rule collection is being added.
>
> **[6:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=396)** This can take a few minutes.
>
> **[6:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=398)** Meanwhile, let's also add an application rule, allowing virtual machines to reach Windows update servers.
>
> **[6:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=405)** So we'll go to Application rules and click Add a rule collection.
>
> **[6:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=410)** We'll give it a name, Allow-OS-updates.
>
> **[6:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=416)** The rule collection type is application.
>
> **[6:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=419)** We'll give it a priority number, 110.
>
> **[7:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=423)** The action is allow, and we'll add it to the default application rule collection group.
>
> **[7:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=429)** Let's provide a name for the rule.
>
> **[7:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=431)** We'll call it Allow-windows-updates.
>
> **[7:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=436)** The source type is IP address.
>
> **[7:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=439)** The source will be asterisk.
>
> **[7:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=441)** The protocol is HTTP and HTTPS.
>
> **[7:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=445)** Set the destination type to FQDN tag.
>
> **[7:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=449)** FQDN tag represents a group of fully qualified domain names, or FQDNs, associated with well-known Microsoft services.
>
> **[7:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=457)** Set the destination to WindowsUpdate.
>
> **[7:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=461)** So this rule will allow the servers to download operating system updates.
>
> **[7:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=466)** Once configured, click Add.
>
> **[7:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=469)** If the previous policy changes are still being applied, you will see an error message that looks like this.
>
> **[7:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=475)** In that case, wait for the previous policy change to finish, and then add the new rule.
>
> **[8:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=480)** For now, let's move on.
>
> **[8:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=483)** Under DNAT rules, you can add a destination NAT rule to allow inbound connections through the firewall, for example, if you want to allow RDP, or remote desktop connections to your server, I'll close the notification.
>
> **[8:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=497)** You can see your rule collections here.
>
> **[8:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=500)** This is the one we added earlier.
>
> **[8:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=502)** So we've deployed the virtual network subnets and the Azure firewall.
>
> **[8:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=506)** The last step is to configure routing, so all traffic from the server subnet will pass through the Azure firewall and be subject to its rules.
>
> **[8:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=515)** Before we do that, we'll need to copy the firewall's private IP address.
>
> **[8:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=519)** We'll need it to forward all traffic from the server subnet to the firewall.
>
> **[8:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=524)** So we'll go back to the firewall service.
>
> **[8:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=526)** I'll click FW2, and copy its private IP address.
>
> **[8:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=533)** Now let's add the route table.
>
> **[8:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=535)** At the top, we'll search for route tables, and click the service name, and then click the Create button.
>
> **[9:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=544)** Select the subscription and resource group.
>
> **[9:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=547)** Then select the region.
>
> **[9:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=549)** FW2 is in East US 2.
>
> **[9:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=553)** We'll give a name to the route table.
>
> **[9:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=555)** I'll call this as VNET2-ServerSubnet-RT.
>
> **[9:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=563)** FW2 is in VNET2, so I give it a name, VNET2-ServerSubnet-RT.
>
> **[9:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=569)** For propagate gateway Routes, we'll select No.
>
> **[9:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=573)** Then review and create the route table.
>
> **[9:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=576)** Once the deployment is completed, click Go to resource, and then click Routes on the left navigation pane.
>
> **[9:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=583)** Let's add a new route pointing to the Azure firewall.
>
> **[9:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=587)** So we'll click the add button and we'll provide a name for the route.
>
> **[9:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=591)** We'll call it ServerSubnet-To-Azure-FW-2.
>
> **[9:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=596)** The destination type should be IP address.
>
> **[9:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=599)** Set the destination IP address to 0.0.0.0/0, so all outbound traffic will match this route.
>
> **[10:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=608)** The next hop type should be virtual appliance, and then enter the firewall's private IP address you copied earlier under Next hop address.
>
> **[10:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=618)** Click Add.
>
> **[10:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=619)** Next, you'll need to associate the route table to the server subnet.
>
> **[10:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=623)** So click Subnets on the left navigation pane.
>
> **[10:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=626)** Then click Associate.
>
> **[10:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=628)** Choose the virtual network and the subnet to which you would like to associate, in this case, ServerSubnet.
>
> **[10:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=636)** Click OK.
>
> **[10:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=637)** The subnet has been associated.
>
> **[10:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=639)** Now all traffic to and from the server subnet will pass through the Azure firewall and will be subject to the configured rules.
>
> **[10:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=647)** All right, that's how you configure an Azure firewall.
>
> **[10:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=650)** Remember to delete your configuration when you no longer need it.
>
> **[10:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/configure-azure-firewall?u=76281980&t=654)** In the following video, we'll talk about protecting against denial of service attacks.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6), fw2 (4), fw1 (3), vnet2 (3), sku (2)
> **Code Keywords:** let (14), pass (3), private (3), public (2), case, (2)
> **UI Navigation:** select the (4), go to (3), click on (3)
> **Versions:** 10.0.0 (1), 10.0.1 (1), 10.0.2 (1), 4.2.2 (1), 0.0.0 (1)
> **Prerequisites:** configure (4), you'll need (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is an  (1), is a  (1)

#### Azure DDoS protection
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=0)** - [Instructor] A distributed denial of service attack, also known as a DDoS attack, is a common security concern for internet-facing applications.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=8)** A DDoS attack overwhelms and exhausts the resources of an application, making it unavailable to legitimate users.
>
> **[0:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=15)** In a DDoS attack, a malicious actor intentionally floods the system with fake traffic.
>
> **[0:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=21)** The system can be a server, website, or any network resource.
>
> **[0:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=26)** DDoS attacks are usually coordinated using a botnet of tens, hundreds, or even thousands of computers.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=33)** This flooding of the system overwhelms the system's resources and prevents it from serving legitimate traffic.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=40)** This type of attack is volumetric because the system is flooded with a large volume of traffic.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=45)** Other DDoS attack types include protocol attacks where a weakness in the TCP, or Transmission Control Protocol, is exploited and application layer attacks where a weakness in the application layer protocol, such as HTTP, is exploited.
>
> **[1:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=61)** Common examples include SQL injection and cross-site scripting.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=65)** Any publicly exposed application is vulnerable to a DDoS attack.
>
> **[1:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=69)** Azure has DDoS infrastructure protection enabled for all customers.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=73)** It protects the Azure platform or the infrastructure on which Azure is built.
>
> **[1:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=78)** This protection is available at no cost.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=81)** The traffic threshold that DDoS infrastructure protection monitors is much higher than what your application can handle.
>
> **[1:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=88)** This is because the Azure infrastructure hosts all their customer's resources, while your application may not be operating at that scale.
>
> **[1:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=96)** Traffic volume that the Azure infrastructure perceives as harmless could harm your application, so Azure recommends using dedicated DDoS Protection for your resources.
>
> **[1:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=106)** In earlier videos, we discussed network security groups and the Azure Firewall, both of which provide traffic filtering.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=113)** If you are wondering why you need DDoS Protection when you're already filtering with network security groups or the Azure Firewall, here's why.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=121)** Imagine you have an application server protected by the Azure Firewall.
>
> **[2:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=125)** The firewall only allows specific traffic to pass through.
>
> **[2:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=129)** Let's say this is on port 10,000.
>
> **[2:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=131)** A DDoS attack can be executed by flooding traffic on the allowed port.
>
> **[2:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=136)** So while the firewall is still filtering on the configured port, a DDoS attack can still occur.
>
> **[2:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=141)** Also, a dedicated DDoS Protection mechanism provides an additional layer of security designed specifically to mitigate a DDoS attack.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=150)** Microsoft Azure has a service called Azure DDoS Protection that aims to protect against DDoS attacks.
>
> **[2:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=156)** Here are some key features.
>
> **[2:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=158)** DDoS Protection protects against Layer 3 and 4 attacks.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=162)** That is network and transport layer attacks, such as ICMP flood and TCP SYN flood.
>
> **[2:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=168)** Layers 3 and 4 represent layers of the OSI model, which is a logical representation of network communication.
>
> **[2:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=175)** I recommend reading basic networking concepts if you are not familiar with these layers.
>
> **[3:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=180)** Once you enable DDoS Protection, it is always on and looking to detect and mitigate DDoS attacks.
>
> **[3:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=187)** DDoS Protection has a simple configuration and works out of the box.
>
> **[3:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=191)** It learns your application's traffic patterns over time, and applies the most suitable protection profile.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=198)** DDoS Protection works at Layers 3 and 4.
>
> **[3:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=201)** For web applications operating at Layer 7, that is the application layer, Azure recommends using a web application firewall and DDoS Protection.
>
> **[3:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=210)** DDoS Protection protects services deployed in a virtual network and having a public IP address.
>
> **[3:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=216)** It can protect public IPs attached to a virtual machine, a firewall, a load balancer, VPN gateway, and more.
>
> **[3:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=225)** You will find the complete list in the documentation.
>
> **[3:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=228)** Now let's see how Azure DDoS Protection works.
>
> **[3:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=231)** Once enabled, DDoS Protection monitors your application's traffic levels and constantly compares them against thresholds defined in the DDoS policy.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=241)** The policy is auto configured by Azure and adapts based on your application's traffic levels.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=247)** When the traffic threshold is exceeded, DDoS mitigation is initiated automatically.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=252)** And when traffic drops below the threshold, mitigation is stopped.
>
> **[4:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=256)** During mitigation, DDoS Protection inspects packets to see if they're malformed, checks for traffic spoofing, and rate-limits packets.
>
> **[4:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=265)** If attack traffic is detected, Azure drops it and forwards the remaining traffic to the intended destination, DDoS Protection is available in two tiers, DDoS IP Protection and DDoS Network Protection.
>
> **[4:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=279)** IP Protection is used to protect an individual public IP resource.
>
> **[4:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=283)** Network Protection is enabled at the virtual network level and protects all resource types in the virtual network.
>
> **[4:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=290)** A side-by-side side comparison of both the tiers is available in the documentation.
>
> **[4:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=294)** Along with DDoS Protection, testing and validating how your system will perform during a DDoS attack is essential.
>
> **[5:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=301)** Azure has approved testing partners that you can use to simulate a DDoS attack on your environment.
>
> **[5:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=308)** An attack simulation will help validate that DDoS Protection protects your resources and optimize your DDoS incident response process.
>
> **[5:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=317)** Configuring DDoS Protection is easy.
>
> **[5:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=319)** From the Azure portal, search for DDoS and then click DDoS protection plans.
>
> **[5:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=326)** Click the Create button to create a new plan.
>
> **[5:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=330)** Select the subscription and the required resource group.
>
> **[5:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=334)** Give the plan a name, then select a region, and then Review + create.
>
> **[5:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=341)** Before creating a plan, I recommend reviewing the pricing.
>
> **[5:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=345)** After creating a plan, you can assign resources you'd like to protect.
>
> **[5:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=349)** Also, a DDoS policy is automatically generated and optimized based on your traffic levels.
>
> **[5:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=356)** All right, so that's about Azure DDoS Protection.
>
> **[5:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-ddos-protection?u=76281980&t=359)** As you've just seen, it is an integral part of network security that can protect the availability and performance of your application and your business' reputation.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (2), http (1), sql (1), icmp (1), syn (1)
> **Code Keywords:** public (3), let (2), protected (1), pass (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Analogies:** such as (2), imagine (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** find (1)
> **Ports:** port 10 (1)
> **Cross-References:** we discussed (1)

#### Other network security tools
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=0)** - [Instructor] We've looked at the important network security tools in Azure, such as network security groups, the Azure Firewall and Azure DDoS protection.
>
> **[0:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=9)** Now let's talk about other tools you can use to enhance the security of your Azure network.
>
> **[0:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=14)** Azure has a web application firewall or WAF to protect Azure hosted web applications against common exploits such as SQL injection and cross-site scripting.
>
> **[0:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=24)** Once you deploy a WAF, it immediately protects your web applications from attacks.
>
> **[0:29](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=29)** You would deploy a WAF in front of your web application so it inspects all incoming traffic to your application.
>
> **[0:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=37)** It blocks malicious requests and allows legitimate requests to pass.
>
> **[0:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=41)** Configuring the Azure WAF is similar to configuring the Azure Firewall.
>
> **[0:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=46)** It has rules that determine how incoming traffic should be processed.
>
> **[0:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=50)** Now let's talk about Azure Bastion.
>
> **[0:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=53)** It is common for organizations to have private, virtual machines or private servers in Azure.
>
> **[0:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=59)** These virtual machines have no connectivity to the internet.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=62)** To connect to these private virtual machines, administrators use a jumpbox.
>
> **[1:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=67)** The jumpbox is an Azure virtual machine that has a public IP address.
>
> **[1:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=71)** Administrators connect to it using RDP or SSH and from the jumpbox, they connect with the private virtual machines.
>
> **[1:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=78)** While the solution works, administrators must manage and maintain the jumpbox by applying updates and security patches.
>
> **[1:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=86)** Azure Bastion is a managed service that allows you to connect to virtual machines using private IP addresses.
>
> **[1:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=92)** You can connect to the Bastion using RDP or SSH from the Azure portal or an RDP or SSH client installed on your local computer.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=101)** Being a managed service, you do not need to maintain it and the best part is that your private virtual machines can remain private while allowing administrators to connect securely.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=112)** Next is the Azure Front Door.
>
> **[1:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=114)** It is a content delivery network that minimizes latency when users access web content.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=120)** Imagine you have a web server hosted in London.
>
> **[2:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=123)** Your users are located all around the world.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=126)** When they access your web application, their request has to travel to London and back increasing the time it takes for content to load on their browsers.
>
> **[2:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=135)** A content delivery network has servers closer to end users, where frequently accessed content is cached.
>
> **[2:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=142)** When a user requests application content, the request is routed to the nearest server, also known as the edge location.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=150)** If the content is available, it is served from the edge location, improving response time.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=155)** If the content isn't available in the edge location, it is fetched and served from the origin server.
>
> **[2:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=161)** The content is also cached at the edge location, so future requests can be served faster.
>
> **[2:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=167)** Along with content delivery, Azure Front Door offers other features such as Load balancing, SSL offloading and Certificate Management.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=176)** Another helpful networking and security tool is Azure Network Watcher.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=181)** With Network Watcher, you can visualize the topology of the network and understand the relationships between your Azure resources.
>
> **[3:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=189)** You can monitor connection between endpoints in your environment to understand network performance.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=194)** You can detect traffic filtering caused by network security group configuration.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=199)** You can also detect routing issues caused by incorrect configuration.
>
> **[3:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=203)** You can also use Network Watcher to view effective rules apply to a network interface.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=208)** You can capture packets to track traffic.
>
> **[3:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=211)** You can troubleshoot VPN connections.
>
> **[3:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=213)** You can log traffic flowing through a network security group or virtual network, and you can also analyze traffic to understand user and application activity in your environment.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=223)** As you can see, Network Watcher is like a Swiss Army knife offering a range of networking and security capabilities.
>
> **[3:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=231)** Lastly, we have the Azure VPN.
>
> **[3:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=234)** It allows you to create a secure communication channel between your Azure infrastructure and your on-premises environment.
>
> **[4:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=241)** Today, many companies use a hybrid model where they have resources on-premises and in the cloud.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=247)** This approach creates the need to have a secure encrypted channel between the two environments.
>
> **[4:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=253)** You can use the Azure VPN service to establish the VPN connection.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/other-network-security-tools?u=76281980&t=257)** Alright, those are important tools that can improve the performance and security of your applications in the Azure cloud.

> [!info]- Semantic Content
>
> **Env Vars:** waf (4), vpn (4), rdp (3), ssh (3), sql (1)
> **Code Keywords:** private (7), let (2), pass (1), public (1), interface (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Analogies:** such as (3), imagine (1)
> **CLI Commands:** ssh (3)
> **Tools:** azure portal (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=0)** - [Instructor] Before wrapping up this section, let's discuss best practices to secure your Azure network.
>
> **[0:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=5)** First is to adopt a zero trust approach.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=8)** In the past, an organization's assets were housed within the network, either on-premises or in a data center, and all assets in the network were trusted.
>
> **[0:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=19)** Today, most organizations have assets in multiple locations, on-premises, data center, cloud, and remote.
>
> **[0:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=26)** The traditional concept of trust based on network location doesn't apply to a modern enterprise network.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=33)** The zero trust approach recommends moving from a trust always approach to a trust at the time of access approach.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=40)** Conditional access plays an important role in implementing zero trust.
>
> **[0:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=44)** We discussed conditional access in the previous section.
>
> **[0:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=47)** You can use it to control access to resources in your Azure subscription.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=51)** With conditional access, you can grant access to your resources based on user identity, sign-in risk, device platform, location, and other factors.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=62)** Another feature that can help with zero trust is just-in-time access for virtual machines.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=68)** With just-in-time access, inbound access to your virtual machines is limited to when needed, and blocked during other times.
>
> **[1:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=76)** Along with a zero trust approach, adopting the assumed breach mindset is essential.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=81)** This mindset assumes that a breach could occur at any time.
>
> **[1:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=85)** Consider locking down all controls that could grant unnecessary or unauthorized access, and configure all available controls to improve security.
>
> **[1:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=94)** The next best practice is to lock down access rules.
>
> **[1:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=97)** Review your network security group and firewall rules to identify those granting access to broad IP ranges.
>
> **[1:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=104)** For example, rules that allow inbound SSH or RDP access from anywhere.
>
> **[1:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=110)** Malicious actors can exploit such rules.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=113)** Consider amending rules granting broad access to only grant access to the required sources.
>
> **[1:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=119)** Next, use network appliances for specialized security functions.
>
> **[2:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=124)** The Azure marketplace has appliances from third parties that can provide specialized security functions like intrusion detection and prevention, vulnerability management, antivirus threat protection, and more.
>
> **[2:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=137)** Deploying these solutions can significantly improve the security of your environment.
>
> **[2:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=142)** Next, use logical segmentation.
>
> **[2:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=145)** Virtual networks allow you to segment your assets logically.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=148)** This is similar to local area networks, or LANS, in your on-premises networks.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=153)** Creating separate virtual networks allows you to logically isolate different environments such as development, staging, pre-production, and production.
>
> **[2:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=163)** You can also apply different access controls to these environments.
>
> **[2:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=167)** Lastly, with all controls in place, monitoring the network for issues and maintaining logs to help with investigation is still important.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=176)** As we've seen in the last video, Azure Network provides many monitoring tools.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=181)** Also, Azure has a service called Azure Monitor that you can use to collect and analyze logs from your Azure and on-premises environment.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=190)** All right, those are some best practices for improving network security in the Azure Cloud.
>
> **[3:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices?u=76281980&t=195)** In the next video, we'll talk about securing data in the Azure Cloud.

> [!info]- Semantic Content
>
> **Env Vars:** ssh (1), rdp (1), lans (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Analogies:** for example (1), similar to (1), such as (1)
> **CLI Commands:** ssh (1)
> **Code Keywords:** let (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Securing Data

> [↑ Back to Table of Contents](#table-of-contents)

#### Azure Key Vault
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=0)** - [Instructor] When we need to store valuables, we use safe boxes.
>
> **[0:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=3)** This approach ensures that only the person with the key or secret code can access the contents within.
>
> **[0:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=10)** In the digital world, we have similar access control requirements.
>
> **[0:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=14)** We need a secure mechanism to store digital valuables like passwords, certificates, tokens, and API keys.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=22)** You can use the Azure Key Vault to manage secrets like these.
>
> **[0:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=25)** Consider this: an application needs to access a database and it will need a connection string that grants access.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=33)** The connection string could be a username and password combination or an API key.
>
> **[0:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=38)** You must ensure that only the application can access the connection string, not other unauthorized entities.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=45)** You can provide the application with the connection string in a couple of ways.
>
> **[0:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=49)** One way is to store the connection string in the application's code.
>
> **[0:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=52)** However, this means that anyone with access to the application code can access the connection string and thus the database.
>
> **[1:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=60)** Another way is to store the connection string in a secure location like the Azure Key Vault and define who can access the string.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=68)** This mechanism requires that the application authenticate itself to the vault before being granted access to the connection string.
>
> **[1:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=75)** So you can use the Azure Key Vault to store sensitive information and control their distribution centrally.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=81)** You can also use the Azure Key Vault to create and manage encryption keys and to provision and deploy TLS/SSL certificates.
>
> **[1:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=90)** Access to Azure Key Vault requires authentication and authorization before gaining access.
>
> **[1:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=96)** Microsoft Entra ID handles authentication.
>
> **[1:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=99)** For authorization, you have two options.
>
> **[1:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=102)** You can use Azure Role-Based Access Control or RBAC, or you can use the Azure Key Vault access policy.
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=109)** Azure recommends using RBAC.
>
> **[1:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=112)** So when using the Azure Key Vault, the workflow for an application requesting access will look like this.
>
> **[1:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=118)** The application needs a connection string to access information from a database.
>
> **[2:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=123)** The connection string is securely stored in the Azure Key Vault.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=126)** Before the application can access the string, it will need to authenticate itself, this is done by Entra ID.
>
> **[2:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=133)** Once authenticated, the application then requests the key vault for access to the connection string.
>
> **[2:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=139)** If it is authorized, the key vault will allow the application to access the connection string.
>
> **[2:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=144)** The application then uses the connection string to access the database.
>
> **[2:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=148)** Now, let's go to the Azure portal and see how to create a key vault.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=153)** Once you're on the Azure portal, at the top, search for key vaults and then click on the service name, then click the create button.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=162)** Start by selecting the required subscription and resource group in which you'd like to create the key vault.
>
> **[2:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=169)** Then provide a name for the vault.
>
> **[2:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=175)** Select the region where you'd like to deploy the vault.
>
> **[2:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=178)** Azure Key Vault has two pricing tiers, standard and premium.
>
> **[3:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=183)** The difference is that the premium tier supports key storage in hardware security modules, also known as HSMs.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=190)** HSMs are specialized hardware designed to store and manage keys.
>
> **[3:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=195)** Scroll down to find recovery options for the vault.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=199)** By default, soft delete is enabled.
>
> **[3:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=201)** This feature allows you to recover deleted vaults and deleted vault objects.
>
> **[3:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=207)** The retention period for deleted vaults is defined here.
>
> **[3:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=211)** The default is 90 days, but you can reduce it to seven days.
>
> **[3:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=215)** Soft delete allows sufficient time to recover a vault you may have accidentally deleted.
>
> **[3:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=221)** Next, you have the option to enable purge protection.
>
> **[3:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=224)** When you enable this, you cannot purge a vault or an object in the deleted state until the retention period has passed.
>
> **[3:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=232)** For now, we'll leave it set to disabled.
>
> **[3:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=236)** In the next step, you can configure Azure RBAC or a vault access policy to control access to objects in the vault.
>
> **[4:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=244)** This includes Azure Virtual Machines, Azure Resource Manager, and Azure Disk Encryption.
>
> **[4:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=252)** In the next step, you can enable public access to the vault.
>
> **[4:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=256)** You can also create a private endpoint to allow a private connection.
>
> **[4:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=263)** Next, add any required tags, then review and create the vault.
>
> **[4:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=270)** The deployment can take a few seconds.
>
> **[4:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=272)** When the deployment is complete, click go to resource.
>
> **[4:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=276)** So now we are under the key vault.
>
> **[4:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=278)** Keys, secrets, and certificates are located under the object section in the left navigation pane.
>
> **[4:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=285)** Let's create a new key.
>
> **[4:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=287)** Go to the key section and then click generate or import.
>
> **[4:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=291)** Provide a name for the key.
>
> **[4:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=295)** Scrolling down, you will find the option to set a key rotation policy.
>
> **[4:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=299)** You can use this to rotate the key automatically.
>
> **[5:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=302)** We'll leave other settings at the default and create the key.
>
> **[5:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=306)** Remember, you will need the key vault crypto officer or key vault administrator role to create keys.
>
> **[5:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=313)** This is true even if you are the owner of the subscription.
>
> **[5:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=317)** You will see an error message if you do not have the necessary permissions.
>
> **[5:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=321)** So the key has been created, you can now use this key for encryption purposes.
>
> **[5:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=326)** Click on the key version to see the key URL.
>
> **[5:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=330)** Your applications can use this to retrieve the key.
>
> **[5:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=335)** Back to the key vault, you can configure access to the vault's objects from the access control IAM section.
>
> **[5:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=343)** From here, you can add role assignments.
>
> **[5:47](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=347)** Now let's see how to delete a key.
>
> **[5:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=349)** We'll go back to the key section, select the key, and then click delete.
>
> **[5:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=355)** Click delete again to confirm.
>
> **[5:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=358)** So the key has been deleted.
>
> **[6:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=360)** Because soft delete is enabled by default, you can recover the key.
>
> **[6:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=364)** To recover the key, click manage deleted keys.
>
> **[6:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=368)** Here you'll find all your deleted keys, select the required key, and you can recover or permanently purge the key.
>
> **[6:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=377)** Similarly, you can also delete and recover the key vault.
>
> **[6:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=381)** All right, that's about the Azure Key Vault.
>
> **[6:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/azure-key-vault?u=76281980&t=384)** As we've just seen, it offers a simple to use and secure way to store secrets in the Azure Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (7), let (3), default, (2), private (2), this: (1)
> **Env Vars:** rbac (3), api (2), tls (1), ssl (1), url (1)
> **UI Navigation:** go to (3), select the (3), click on (2), scroll down (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (2), go back to (1)
> **Tools:** azure portal (2)
> **Definitions:** means that (1), known as (1)
> **Prerequisites:** configure (2)

#### Protect data at rest
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=0)** - [Instructor] Imagine you are responsible for protecting a treasure chest.
>
> **[0:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=3)** To safeguard its content, you would apply controls to ensure that only those with the right key can unlock and access it.
>
> **[0:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=11)** In the digital realm, the treasure chest is data.
>
> **[0:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=14)** When data is stored, it must be protected from unauthorized access and encryption is used to achieve this.
>
> **[0:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=21)** Good security practice calls for encrypting data at rest and in transit.
>
> **[0:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=26)** That is when it is kept stored, and when it is moving over the network.
>
> **[0:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=30)** Protecting data at rest ensures that the data is inaccessible, even if the storage media is compromised.
>
> **[0:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=37)** Let's discuss how you can protect data at rest in Azure.
>
> **[0:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=41)** Data at rest includes data stored in storage accounts, disks attached to virtual machines, and databases.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=48)** The first step to protecting data at rest is classifying it.
>
> **[0:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=52)** This can be identifying how important or confidential the data is.
>
> **[0:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=57)** Organizations use different terms for data classification, but common ones include public, internal, and confidential data.
>
> **[1:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=65)** Public data can be shared outside the organization.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=68)** Internal data is for internal viewing only.
>
> **[1:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=70)** And confidential data, the most strictly controlled category, is accessible only to authorized personnel.
>
> **[1:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=77)** Classifying data helps identify what level of control should be applied and who should be granted access.
>
> **[1:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=84)** You can store data in the Azure Cloud using Azure storage accounts.
>
> **[1:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=88)** Azure users service side encryption, or SSE, to automatically encrypt your data when you move it to an Azure storage account.
>
> **[1:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=96)** SSE uses 256 bit AES encryption and is FIPS 140-2 compliant.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=103)** FIPS stands for Federal Information Processing Standard, and it is a US Government Security standard.
>
> **[1:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=109)** SSE is enabled by default and you cannot turn it off.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=113)** Azure manages the keys used for SSE.
>
> **[1:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=116)** You also have the option to use your own keys for SSE.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=120)** Service side encryption, or SSE, covers these storage services, blob storage, table storage, files, queue storage, and managed disks used with Azure virtual machines.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=132)** So when you use any of these services, data in the storage, that is data at rest, is automatically encrypted by the service.
>
> **[2:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=140)** Client side encryption is available with blob, table, and queue storage.
>
> **[2:25](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=145)** With client side encryption you encrypt the object before moving it to Azure and you are responsible for managing the encryption key.
>
> **[2:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=153)** Now let's talk about disk encryption.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=155)** Your virtual machines on Azure have managed disks allocated to them for storing operating systems and data.
>
> **[2:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=162)** Azure automatically encrypts the storage clusters hosting these managed disks.
>
> **[2:46](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=166)** Additionally, you can use Azure disc encryption to encrypt the operating system and data disks inside your virtual machines.
>
> **[2:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=174)** Lastly, let's talk about database encryption for Azure SQL Database and Azure Cosmos DB database.
>
> **[3:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=181)** Encryption for Azure SQL database is provided using a feature called Transparent Data Encryption, or TDE.
>
> **[3:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=188)** TDE encrypts data files, transaction log files, and database backups.
>
> **[3:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=194)** The encryption is transparent to the applications using the database.
>
> **[3:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=198)** Newly provisioned SQL databases have TDE enabled by default.
>
> **[3:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=202)** Encryption for Azure Cosmos DB database is also enabled by default and handled by Azure.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=208)** The encryption keys used to encrypt all these services are stored in the Azure Key Vault.
>
> **[3:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=214)** As we discussed in the last video, the Azure Key Vault is a secure storage for keys and other secrets.
>
> **[3:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=220)** All right, that's about encryption at rest on Azure.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-at-rest?u=76281980&t=223)** As we've seen, Azure does most of the heavy lifting, such as managing the keys and encryption algorithms, so organizations can focus on their core business operations while being assured that their data at rest is secure.

> [!info]- Semantic Content
>
> **Env Vars:** sse (6), sql (3), tde (3), fips (2), aes (1)
> **Code Keywords:** let (3), public (2), protected (1), this. (1), default. (1)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** we discussed (1), in the last (1)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Protect data in transit
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=0)** - [Instructor] In the last video, we discussed how Azure protects your data at rest.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=4)** Now let's talk about protecting data in transit, which is data moving over the network.
>
> **[0:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=9)** Let's start with data that moves outside physical boundaries that Microsoft does not control.
>
> **[0:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=15)** A layer 2 encryption method is applied from point to point across the underlying network hardware for data that moves outside physical boundaries.
>
> **[0:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=23)** This encryption is enabled by default for all Azure traffic traveling within a region or between regions.
>
> **[0:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=30)** Now let's talk about Azure Storage.
>
> **[0:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=32)** When you interact with Azure Storage through the Azure portal, all transactions occur over HTTPS.
>
> **[0:39](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=39)** When you interact with Azure Storage using API, you can use REST API over HTTPS.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=45)** You can also set a minimum TLS version for applications using your storage account's data.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=51)** Azure Storage has a feature called shared access signatures that allows you to delegate access to Azure Storage objects.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=58)** When using shared access signatures, you can specify that only the HTTPS protocol will be used.
>
> **[1:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=64)** When transferring data from your Azure virtual machines, you can use SMB 3.0.
>
> **[1:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=70)** SMB or Server Message Block is a network communication protocol used for file sharing.
>
> **[1:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=76)** SMB 3.0 encrypts data in transit over Azure virtual networks.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=81)** It is supported on Windows Server 2012 and later.
>
> **[1:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=84)** When connecting to Windows servers using RDP or Remote Desktop Protocol, data in transit on the RDP sessions are protected by TLS or Transport Layer Security.
>
> **[1:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=95)** When connecting to Linux servers using SSH, the connection is encrypted because SSH is a secure protocol.
>
> **[1:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=102)** You can use Azure VPN to establish a secure communication channel when connecting your on-premises environment with the Azure cloud.
>
> **[1:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=110)** All communication over the VPN is encrypted.
>
> **[1:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=113)** When using Azure Data Lake Store, all data in transit is automatically encrypted using HTTPS.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=120)** Also, all your interactions with the Azure portal are automatically protected using HTTPS.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/protect-data-in-transit?u=76281980&t=126)** All right. That's how Azure protects your data in transit.

> [!info]- Semantic Content
>
> **Env Vars:** https (5), smb (3), api (2), tls (2), rdp (2)
> **Code Keywords:** let (3), protected (2)
> **CLI Commands:** ssh (2)
> **Versions:** 3.0 (2)
> **Cross-References:** in the last (1), we discussed (1)
> **Tools:** azure portal (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=0)** - [Narrator] Before wrapping up this section, let's discuss best practices for securing data in the Azure Cloud.
>
> **[0:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=6)** First, use a secure storage for your secrets.
>
> **[0:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=10)** Secrets such as keys, passwords, and certificates are highly valuable.
>
> **[0:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=15)** In the wrong hands, they could compromise security.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=18)** It is essential to store such secrets in a secure location.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=22)** You can use the Azure Key Vault to store them.
>
> **[0:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=24)** Control who has access to secrets.
>
> **[0:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=27)** Limiting access to secrets can prevent unauthorized access and potential security breaches.
>
> **[0:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=33)** With the Azure Key Vault, you can use Role-Based Access Control, or RBAC to control access to secrets.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=40)** In addition to using RBAC, monitoring who is accessing the secrets and auditing the actions is also essential.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=48)** Have a recovery mechanism for deleted secrets.
>
> **[0:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=51)** Secrets, such as keys, if deleted, can leave your data inaccessible.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=56)** Have a recovery mechanism, such as soft delete, to recover accidentally deleted secrets.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=62)** With the Azure Key Vault, soft delete is enabled by default.
>
> **[1:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=66)** Soft delete allows you to recover deleted secrets for the configured number of days.
>
> **[1:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=71)** Use this encryption for virtual machines.
>
> **[1:13](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=73)** This extra layer of encryption protects data against unauthorized access in the event of a breach.
>
> **[1:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=80)** While Azure automatically encrypts the storage clusters on which managed disks are created, users can turn on disc encryption for virtual machines.
>
> **[1:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=88)** Azure disc encryption uses BitLocker on Windows and dm-crypt on Linux.
>
> **[1:34](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=94)** Machines use HTTPS to interact with Azure Storage.
>
> **[1:38](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=98)** When interacting with Azure Storage through the Azure portal, all transactions occur on HTTPS.
>
> **[1:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=104)** Users can also interact with Azure Storage using REST APIs, which support both HTTP and HTTPS, HTTPS being a secure protocol should always be used.
>
> **[1:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=116)** Administrators can require the use of HTTPS for REST API operations.
>
> **[2:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=121)** When you configure this, Azure Storage will reject any HTTP requests.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=126)** Protect data moving between on-premises and the Azure infrastructure.
>
> **[2:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=131)** Many customers have a hybrid deployment with resources on premises and in the Azure Cloud.
>
> **[2:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=137)** Use an encrypted channel, such as a VPN or Virtual Private Network connection, when moving data between these environments over the public Internet.
>
> **[2:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=146)** You can use the Azure VPN Gateway to establish the VPN connection.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=150)** A VPN connection may be expensive and insufficient if you need to move large volumes of data.
>
> **[2:37](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=157)** Consider using a dedicated high speed WAN link, like Azure ExpressRoute in such scenarios.
>
> **[2:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=163)** ExpressRoute is a private connection between your on-premises environment and your Azure infrastructure.
>
> **[2:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=169)** Okay, those are the best practices to secure data in the Azure Cloud.
>
> **[2:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/best-practices-24320979?u=76281980&t=173)** In the following video, we'll discuss Defender for Cloud.

> [!info]- Semantic Content
>
> **Env Vars:** https (5), vpn (4), rbac (2), rest (2), http (2)
> **Code Keywords:** delete (3), private (2), let (1), default. (1), require (1)
> **Analogies:** such as (4)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)


### 4. Defender for Cloud

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=0)** - Imagine your digital environment as it was link city.
>
> **[0:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=3)** The city needs a police force to protect its citizens and ensure rules are followed.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=8)** In Azure, Microsoft Defender for Cloud plays a similar role.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=12)** It applies security measures to protect Cloud based applications from cyber threats and vulnerabilities.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=18)** Tools offering such capabilities are known as CNAPP or Cloud Native Application Protection Platform.
>
> **[0:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=24)** Defender for Clouds features can be classified under three categories: CSPM or Cloud Security Posture Management, CWP or Cloud Workload Protection, and DevSecOps that combines development, security and operations.
>
> **[0:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=40)** Let's explore each of these.
>
> **[0:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=42)** Cloud Security Posture Management, or CSPM, identifies misconfigurations on your Cloud resources.
>
> **[0:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=48)** For example, one of CSPMs recommendations is that you disallow public access to your Azure storage accounts.
>
> **[0:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=56)** CSPM is proactive.
>
> **[0:58](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=58)** Organizations use it to identify and remediate misconfigurations and compliance violations.
>
> **[1:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=63)** CSPM assesses your resources against security policies and standards.
>
> **[1:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=68)** These standards contain rules, compliance conditions for those rules, and actions you should take for resources that fail compliance.
>
> **[1:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=76)** For example, one of the rules requires that you apply network segmentation.
>
> **[1:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=81)** You can do this by creating virtual networks.
>
> **[1:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=84)** These standards can be part of Microsoft Cloud Security Benchmark, also known as MCSB or they can be from predefined regulatory compliance programs, such as CIS, FedRAMP, ISO, NIST, PCI, and others, or you can also create your own custom security standards.
>
> **[1:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=103)** MCSB is applied by default when you onboard resources to Defender.
>
> **[1:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=108)** It has controls in various categories, such as network security, identity management, privileged access, and others.
>
> **[1:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=116)** You will find the complete list of controls in the documentation.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=120)** Defender CSPM also includes risk prioritization, which highlights the most significant risks.
>
> **[2:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=126)** This allows you to address security issues that pose immediate threats with the greatest potential for being exploited in your environment.
>
> **[2:14](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=134)** To calculate risk, Defender uses factors such as resource configuration, network connections, security posture, the potential impact of the security issue being breached, the category of risk, and the attack path that the security issue is part of.
>
> **[2:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=150)** A feature commonly liked by Defender users is the Secure Score.
>
> **[2:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=155)** Secure Score aggregates security findings into a single score that reflects your current security situation.
>
> **[2:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=161)** The higher the score, the lower the risk in your environment.
>
> **[2:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=165)** Defender CSPM also includes attack path analysis.
>
> **[2:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=169)** It identifies exploitable paths that attackers might use to breach your environment and reach high value targets.
>
> **[2:56](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=176)** Defender has a feature known as Cloud Infrastructure Entitlement Manager, or CIEM.
>
> **[3:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=182)** It provides visibility into who or what has access to specific resources.
>
> **[3:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=187)** It also ensures that access rights adhere to the principle of least privilege, where entities are granted only the minimum levels of access necessary to perform their tasks.
>
> **[3:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=197)** This feature is essential in preventing security breaches caused by excessive permissions or misconfigurations.
>
> **[3:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=204)** Defender also includes vulnerability assessments, secret scanning to locate plain text secrets, and malware scanning for your virtual machines.
>
> **[3:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=213)** If you're using containers, Defender for CSPM also includes discovery for Kubernetes clusters, inventory of your container repositories and images, and vulnerability assessment for container images.
>
> **[3:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=225)** Now let's talk about the second category that is Cloud Workload Protection.
>
> **[3:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=229)** Defender has these features available on servers.
>
> **[3:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=233)** File integrity monitoring that examines operating system files, windows registries, and Lenux system files for changes that might indicate an attack.
>
> **[4:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=242)** Just-in-time access, which allows access to management ports like RDP or SSH only when requested.
>
> **[4:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=250)** Access is otherwise blocked, preventing threat actors from hunting management ports that are always open.
>
> **[4:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=256)** Endpoint detection and response, or EDR, that performs behavioral analysis of virtual machines to detect breaches and allows for threat hunting.
>
> **[4:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=266)** Cloud Workload Protection also identifies vulnerabilities on Azure SQL databases and SQL servers, and alerts you of anomalies activities that might indicate a threat.
>
> **[4:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=276)** For storage accounts, Defender prevents malicious file uploads, sensitive data exfiltration, and data corruption.
>
> **[4:44](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=284)** Defender also detects unusual and potentially harmful attempts to access or exploit Azure Key Vault accounts.
>
> **[4:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=291)** With workload protection, Defender looks for DNS attacks and DNS communication with domains used for malicious activities, such as phishing and crypto mining.
>
> **[5:01](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=301)** Now let's talk about the third category, DevSecOps.
>
> **[5:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=304)** Defender also includes DevSecOps capabilities, which gives security insights into your code management environments and pipeline.
>
> **[5:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=312)** You can use it with pipeline environments such as Azure DevOps, GitHub, and GitLab.
>
> **[5:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=317)** Now let's discuss how Defender for Cloud is priced.
>
> **[5:21](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=321)** Foundational CSPM, or Foundational Cloud Security Posture Management, which includes basic hardening recommendations is included for free.
>
> **[5:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=330)** Advanced features like attack path analysis and risk prioritization are available with paid plans.
>
> **[5:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=336)** Similarly, other workload protection types are available as different plans for different resources.
>
> **[5:42](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=342)** For example, a plan for Defender for servers, a plan for Defender for containers, and others.
>
> **[5:48](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=348)** For more information on pricing, I recommend checking the documentation.
>
> **[5:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=353)** An important point to remember is that Defender for Cloud can also protect resources from other environments, such as Amazon web services, Google Cloud platform, and your on-premises environments.
>
> **[6:05](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=365)** So you have a single pane of glass view for risk from your hybrid, multi-Cloud environment.
>
> **[6:11](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=371)** All right, that is a high level overview of Defender for Cloud.
>
> **[6:15](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=375)** As we have just seen, it has many features to enhance the security posture of your applications, and protect them from a wide range of threats.
>
> **[6:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/introduction-to-defender-for-cloud?u=76281980&t=383)** In the following video, we'll look at use cases and configuration.

> [!info]- Semantic Content
>
> **Env Vars:** cspm (8), mcsb (2), sql (2), dns (2), cnapp (1)
> **Analogies:** such as (6), for example (3), imagine (1)
> **Code Keywords:** let (4), public (1)
> **Definitions:** known as (3), is a  (1)
> **CLI Commands:** find (1), ssh (1)
> **Documentation:** the documentation (2)
> **Tools:** github (1), gitlab (1)
> **Speakers:** - imagine (1)

#### Use cases of Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=0)** - [Instructor] In the last video, we discussed the features of Defender for Cloud.
>
> **[0:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=4)** Let's look at some use cases in which enterprises use Defender for Cloud.
>
> **[0:09](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=9)** First is visibility into their hybrid environment.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=12)** It is common for organizations to have assets in multiple cloud environments and on-premises.
>
> **[0:18](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=18)** In such a situation, enterprises want complete visibility into all their assets.
>
> **[0:24](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=24)** A simple query like how many virtual machines do we have across all our environments might be difficult to answer.
>
> **[0:31](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=31)** With Defender for Cloud, you can connect your Amazon Web Services, Google Cloud Platform, and on-premises environments to Azure, giving you a single-pane-of-glass view.
>
> **[0:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=41)** The second use case is to identify misconfigured cloud resources.
>
> **[0:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=45)** Cloud environments have new resource types not found in on-premises environments, such as serverless services and storage accounts.
>
> **[0:53](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=53)** Administrators may misconfigure them, resulting in security threats.
>
> **[0:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=57)** Having an automated mechanism to identify these misconfigurations is essential.
>
> **[1:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=62)** Defender Cloud Security Posture Management or CSPM makes monitoring cloud resources for misconfigurations easy.
>
> **[1:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=70)** For example, Defender for Cloud will alert you if your web application is accessible over HTTP, if your Linux machines aren't using SSH for authentication, or if your virtual machines have vulnerabilities.
>
> **[1:23](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=83)** The third use case is to comply with industry regulations.
>
> **[1:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=86)** Many organizations are required to comply with regulatory frameworks.
>
> **[1:30](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=90)** This depends on the nature of their business and the type of data they're processing.
>
> **[1:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=95)** Common examples of frameworks include CIS, PCI, NIST, and ISO.
>
> **[1:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=101)** Defender for Cloud makes it easy to comply with regulatory frameworks by tracking your compliance, identifying gaps, and providing recommendations.
>
> **[1:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=111)** Complying with frameworks aligns you with the regulations and improves your security posture.
>
> **[1:57](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=117)** The next use case is to detect and respond to threats.
>
> **[2:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=120)** Organizations need a way to continuously monitor their resources for suspicious activity and threats.
>
> **[2:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=127)** Defender for Cloud identifies threats and also helps with investigation.
>
> **[2:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=132)** Here are some examples of threat alerts from Defender for Cloud.
>
> **[2:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=136)** A suspected brute force attempt, potential SQL injection attempt, malicious file uploaded to storage account, log-in from an unusual location, and high volume of operations performed in Key Vault.
>
> **[2:27](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=147)** The next use case is to protect applications from code to production.
>
> **[2:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=152)** DevOps environments are dynamic with frequent code changes and deployments.
>
> **[2:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=156)** While this approach brings agility, it also introduces security risks.
>
> **[2:41](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=161)** With Defender for Cloud, DevSecOps developers receive feedback during code commits, enabling them to fix security issues before deployment.
>
> **[2:50](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=170)** This approach prevents vulnerabilities from propagating to production environments.
>
> **[2:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=174)** Also, with this approach, you have better collaboration between development and security teams.
>
> **[3:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=180)** Defender integrates with popular code pipelines, such as Azure DevOps, GitHub, and GitLab.
>
> **[3:06](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=186)** Now, let's go to the Azure Portal and see Defender for Cloud.
>
> **[3:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=190)** Once you're at the Azure Portal, at the top, search for Defender for Cloud.
>
> **[3:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=197)** And click on the service name.
>
> **[3:19](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=199)** The Overview tab shows protected subscriptions, assessed resources, attack paths, and security alerts.
>
> **[3:28](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=208)** On the left navigation pane, go to Environment settings under the Management section to connect additional environments.
>
> **[3:35](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=215)** From here, you can connect to Amazon Web Services, Google Cloud platform, GitHub, Azure DevOps, and GitLab.
>
> **[3:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=223)** If you'd like to add your on-premises servers, go to Security solutions and choose the option to add non-Azure servers.
>
> **[3:52](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=232)** Let's look at some other important tabs.
>
> **[3:55](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=235)** Under Recommendations, you will see security recommendations from CSPM.
>
> **[4:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=240)** The recommendations appear here at the bottom.
>
> **[4:02](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=242)** For each recommendation, you will see the affected resource and risk level.
>
> **[4:07](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=247)** Click the recommendation to see more details, such as the freshness, the associated micro tactic, and actions you can take to remediate the finding.
>
> **[4:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=257)** You can also delegate the action, exempt a finding, or set up workflow automation for remediation.
>
> **[4:26](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=266)** Back over here, Attack path analysis would show an attacker's path to gain access to your environment.
>
> **[4:33](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=273)** We don't have one in this environment.
>
> **[4:36](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=276)** Security alerts shows you important alerts for your environment.
>
> **[4:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=280)** Here, I've generated some sample alerts.
>
> **[4:43](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=283)** The Inventory tab contains an inventory or list of all your resources.
>
> **[4:49](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=289)** Cloud Security Explorer allows you to query for resources in your environment.
>
> **[4:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=294)** You can select the service type and then the resource type to query for them.
>
> **[4:59](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=299)** For example, here, I've searched for all virtual machines.
>
> **[5:04](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=304)** The Security posture tab under the Cloud Security section shows your secure score.
>
> **[5:10](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=310)** Under Regulatory compliance, you will find frameworks against which your resources have been assessed.
>
> **[5:16](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=316)** By default, Microsoft cloud security benchmark is enabled.
>
> **[5:20](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=320)** From Workload protections, you can access features like vulnerability assessment, just-in-time access, file integrity monitoring, and container image scanning.
>
> **[5:32](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=332)** The Data security tab contains details about your data resources like storage and databases.
>
> **[5:40](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=340)** From Firewall Manager, you can centrally manage your Azure firewalls.
>
> **[5:45](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=345)** And from DevOps security, you can connect your DevOps environments and add pipelines.
>
> **[5:51](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=351)** All right, that's about Azure Defender for Cloud.
>
> **[5:54](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/use-cases-of-defender-for-cloud?u=76281980&t=354)** As we've just seen, it has so many capabilities that can improve the security posture of your environments.

> [!info]- Semantic Content
>
> **Env Vars:** cspm (2), http (1), ssh (1), cis (1), pci (1)
> **Tools:** github (2), gitlab (2), azure portal (2)
> **Code Keywords:** let (3), protected (1), default, (1)
> **UI Navigation:** go to (3), click on (1), select the (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** ssh (1), find (1)
> **Cross-References:** in the last (1), we discussed (1)
> **Prerequisites:** set up (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Learning more about Azure security
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=0)** - [Shyamraj] Thanks for watching this course on Azure Security.
>
> **[0:03](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=3)** It has been an absolute pleasure to accompany you on this exploration of security tools.
>
> **[0:08](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=8)** You are now more equipped to protect your Azure infrastructure against cyber threats.
>
> **[0:12](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=12)** Cloud computing is constantly evolving and Azure keeps updating its tool set.
>
> **[0:17](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=17)** I recommend regularly checking the Azure documentation for the latest updates.
>
> **[0:22](https://www.linkedin.com/learning/azure-networking-and-security-for-beginners-tools-and-services/learning-more-about-azure-security?u=76281980&t=22)** Finally, I encourage you to check my other cloud computing courses in the library, and I wish you the best.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [shyamraj] (1)


## Instructor

- [[Shyam Raj]]

## Skills Covered

- Cloud Administration
- Cloud Security
- Microsoft Azure

## Path Context

### In [[Azure Administration for Beginners- Management Tools, Services, and Security]]
← [[Microsoft Entra ID Fundamentals]] | **5 of 5**

## Appears In

- [[Azure Administration for Beginners- Management Tools, Services, and Security]]

## Related Courses

_Courses sharing skills:_

- [[Azure Administration Essential Training]] — Microsoft Azure, Cloud Administration
- [[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]] — Microsoft Azure, Cloud Administration
- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Google Cloud Security for Beginners- Tools and Services]] — Cloud Security

---

[↑ Back to top](#)