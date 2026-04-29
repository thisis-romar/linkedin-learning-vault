---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: microsoft-azure-networking-concepts-24557931
url: "https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931"
duration_minutes: 101
duration: 1h 41m
level: Intermediate
updated: 3/3/2025
learners: 5175
skills:
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQELE3potnsyLw/learning-public-crop_675_1200/B4DZUG8kfyHAAY-/0/1739578297037?e=2147483647&amp;v=beta&amp;t=y-8pL_5JxCsyBK2ldz6GOnUL3h-7m1qXrQD8ktYPNcQ"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
prev_courses:
  - '[[Deploying Microsoft Entra ID]]'
next_courses:
  - '[[Manage Storage in Azure]]'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":6,"total":8,"prev":"Deploying Microsoft Entra ID","next":"Manage Storage in Azure"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/microsoft-azure
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Microsoft%20Azure-%20Networking%20Concepts.md)

![Microsoft Azure: Networking Concepts](https://media.licdn.com/dms/image/v2/D4D0DAQELE3potnsyLw/learning-public-crop_675_1200/B4DZUG8kfyHAAY-/0/1739578297037?e=2147483647&amp;v=beta&amp;t=y-8pL_5JxCsyBK2ldz6GOnUL3h-7m1qXrQD8ktYPNcQ)

# Microsoft Azure: Networking Concepts

> It's not enough to create and host resources; you also need to be able to connect to and publish those resources on the web. That's where Azure networking services come in. To ensure your organization gets the most value from Azure, administrators need to be able to configure virtual networks and machines and monitor and manage their performance over time. Join David Elfassy and learn how to estab

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931) | 1h 41m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Core Networking Concepts]]** (4 videos)
- **[[#2. Manage Azure Virtual Networking for Existing Resources]]** (4 videos)
- **[[#3. Create and Configure New Azure Networking Resources]]** (5 videos)
- **[[#4. Connecting Your On-Premises Network to Azure]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understand Microsoft Azure networking concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=0)** - In Microsoft's premium cloud solution, Microsoft Azure, you can deploy a wide array of services and resources for your organization's IT needs.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=9)** By deploying networking solutions, organizations provide the means to interconnect users, devices, applications, and services through a feature-rich set of network solutions.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=20)** Putting this all together can be a daunting task.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=23)** In this course, we will look at the tools required to connect on-premises networks to Azure, the tools used to publish virtual machines to the internet, as well as the many other tools used to create a reliable, scalable, and secure Azure Virtual Networking solution.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=39)** Welcome, my name is David Elfassy, and I will help you navigate through the networking solutions available from Microsoft Azure.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understand-microsoft-azure-networking-concepts?u=76281980&t=46)** Join me as we demystify the broad world of Microsoft Azure networking.

> [!info]- Semantic Content
>
> **Speakers:** - in (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=0)** - [Narrator] Before you take on this course, you should have basic understanding of cloud computing, as well as a good understanding of the fundamentals of networking components as they relate to internal on-premises infrastructures.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=13)** Having a basic understanding of TCP IP processes, IP addresses, subnetting and routing can also be very useful in following this course.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=22)** As well as having a good understanding of resources that can be hosted and provisioned in an Azure cloud, such as virtual machines, storage accounts and databases.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=32)** Azure is a cloud-based platform, and as such, Microsoft is constantly updating and improving Azure.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=39)** And the way that the Azure interface looks like today may not be exactly the way that it is deployed in your environment.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=46)** Some of the buttons and dialogue boxes that you will see on the screen may differ slightly in your environment.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=54)** That's okay, because the underlying fundamental concepts of Azure networking remains the same.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/what-you-should-know?u=76281980&t=59)** As well, remember that some features are not available in all regions of the world, so where you are geographically located may affect the availability of some of the services and features that I am demonstrating in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **Env Vars:** tcp (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. Core Networking Concepts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding Azure networking components
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=0)** - [Instructor] Similarly to other concepts related to Azure Computing, the concepts around Azure Virtual Networking are based on the three primary tenants of Azure Computing, and that is reliability, security, and performance.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=16)** If you have previously managed other cloud computing solutions or on-prem computing solutions, you may be familiar with some of the concepts that virtual networking within Azure is based on.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=30)** So, let's first talk about some of that terminology and some of these components.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=35)** And here what I have is the Microsoft page for Azure Virtual Networking where we'll get to see some of the concepts and technologies.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=44)** First, I want to mention that Azure Virtual Networking is really the solution that we will use to provide inbound access to our resources and outbound access from our resources to the internet or to other networks.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=59)** And when we provide that inbound and that outbound access, we need to make sure that it is first secure.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=66)** We need to make sure that it's available or highly available with redundancy built in.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=71)** And we also need to make sure that it's going to provide the configuration and provide the access that we need.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=79)** Whenever we talk about securing infrastructures, we want it to be secured and limited in its connection, but we also want it to be accessible.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=87)** We want it to provide the access that we need in and out of the internet.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=92)** And here, the first type of solution that is mentioned within the Microsoft website for Azure Virtual Networking is a hybrid infrastructure.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=100)** So again, for those that have an existing on-prem solution, you have servers in your own data center.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=106)** You can connect that data center to your Azure environment, to your Azure infrastructure.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=112)** Now, you can provide many different advanced type of infrastructures using the various services that we will look at and that we will deploy within this course.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=121)** And some of those examples of those advanced solutions are WAN optimizers, load balancers, and application firewalls.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=129)** There are many other types of services as well, including some services that are built simply to manage all of the various virtual networking solutions, such as the network manager.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=140)** Another tool that we will use later on in this course.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=145)** Some of the terminology that we will review relates to concepts of networking that are common across cloud solutions and on-prem solutions.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=155)** For example, IP addresses, DNS servers.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=159)** The solutions that provide the addressing solution to be able to identify the resource throughout the internet that we want to connect to, we use a concept of IP addressing or internet protocol addressing.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=173)** And of course, the cloud solutions in Azure support both IPv4 and IPv6 addressing.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=180)** DNS or Domain Name System is the solution that is used to provide a name resolution or to be able to translate that cryptic IP address to a name.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=193)** And that translation is performed by DNS or the Domain Name System, the Domain Name Service as it's installed in Windows, or sometimes referred to as Domain Name Servers.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=204)** So, DNS is a solution that is embedded into Azure where we have many different types of implementation of DNS that we can provide through the Azure subscription.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=217)** As well, we will see how the various resources and components that exist within your Azure infrastructure can be connected to virtual networking.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=227)** So, when we provide a virtual networking solution, we can provide a solution to connect to the various resources, and that is how you would, for example, access a virtual machine from the internet that is stored in Azure.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=242)** If you have a storage resource that needs to be accessed by an application, we will provide that access by using Azure Virtual Networking.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=251)** So for example, a database that must be accessed by a website or a web application, it will connect through a virtual networking solution provided through a solution that we call endpoints.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/understanding-azure-networking-components?u=76281980&t=263)** So, we will look at the various type of resources that we will deploy in this course, and we'll see how they are utilized within the ecosystem of all the various Azure Virtual Networking resources that will exist in your Azure subscription.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), wan (1)
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Introduction to the Azure management portal
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=0)** - [Narrator] So before we dive into the various Azure virtual networking resources and how we configure them, let's talk a little bit about the management tool that we use to manage, create, configure, troubleshoot all of the various Azure virtual networking resources that will exist in my environment.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=19)** The tool that I use to manage all resources in Azure, including virtual networking, is the Azure portal.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=26)** So accessible by going to portal.[azure.com](https://azure.com), I can see here all of the resources and manage them, create them, configure them as I need.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=35)** This is of course a graphical user interface view of the management tool.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=41)** There is also a command line version of this tool that is accessible by going to the Cloud Shell.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=47)** And you can go to the Cloud Shell by clicking on the Cloud Shell link available in the top bar in the portal.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=53)** When I click on the Cloud Shell link, I have two options available for the Cloud Shell environment.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=59)** I have Bash.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=60)** And if you come from a Linux environment, you are familiar with Bash scripting or PowerShell.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=66)** If you are coming from a Microsoft environment both on-prem or cloud, you're familiar with Microsoft PowerShell, the scripting interface.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=76)** So if I click on PowerShell, I then have a choice to either select a storage account that exists to actually maintain persistence between my Cloud Shell sessions, or I can say that I don't want to maintain persistence and not use a storage account.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=92)** So I'm actually going to use a storage account and I'm going to select a subscription that that storage account will be available in.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=101)** And I'm going to then select the storage account, select the file share.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=109)** Now I don't have an existing file share, so I'm going to create a file share called cloudshell, and all of my sessions will be stored in this cloudshell file share.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=119)** Now, just to note, this is a one-time operation that is needed.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=123)** Once you've done it in your environment, you do not need to do it again.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=127)** And now that my file share has been created, it's connected to the Cloud Shell and I can start to initiate commands and I can perform various tasks.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=141)** Anything that I can do in my graphical interface, I can do from my command line interface.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=147)** And I can also run scripts and I can perform automation from here as well.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=152)** So it's a very efficient way of managing complex environments when you have various tasks that need to be repeated.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=160)** And there are various Azure modules and documentation available on how we actually perform tasks within the Cloud Shell.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=168)** In this course later on, we will perform some tasks in the Cloud Shell because there are some things that you cannot perform from the portal simply because the graphical interface hasn't been programmed.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=181)** It hasn't been created.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=182)** So the command exists.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=185)** The ability to manage a specific setting exists, but it can only be done in command line.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=190)** So you may use the PowerShell Cloud Shell for either automation or performing repeated tasks, or sometimes to perform advanced management tasks that are not available in the graphical interface.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=203)** So all objects within the Azure portal have similar type interface where I click on an object and I have a blade on the left and on the right I have a view of all the various settings that exist for an object.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=219)** So there's similar type of options that you will always see.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=223)** You will see an overview blade, you will see an activity log, a access control.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=229)** You will see tags as well as some monitoring.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=232)** So these are pretty common options for all objects in Azure and all virtual networking objects as well.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=239)** So when I go into the overview tab, I will be able to review some common information such as the name of the resource group where my object is stored.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=249)** Objects in Azure are stored or organized in resource groups.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=253)** Resource groups are organized within a subscription.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=258)** So I have a subscription here and all of my resources are stored within that subscription, but they are organized within a resource group first.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=268)** You can segment and use resource groups and permissions to be boundaries, and those boundaries are mostly used for administration for security.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=278)** So for example, I may have a different administrator for this resource group than the administrator that has access to the entire subscription.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=285)** Or I may use this resource group to organize all of my virtual networking resources and a separate subscription resource group that will then host other type of resources and then I can delegate permissions accordingly.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=299)** There are other courses available that discuss the distinction of how to apply permissions and roles across resource groups and subscriptions, but I just want to make sure that these basic concepts are clear as we move forward in the course.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=313)** If you want to review all of the various permissions that are applied to your resources with an access control, you're able to review those permissions and even grant additional permissions if you have yourself the permission to grant.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=328)** As well, I have a tags option that is available in all resources in Azure.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=332)** This is where you can tag your resources using key pair values to later on be able to find them easier.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=339)** So it's sort of like applying a little bit of metadata to your resource so that later on you can search for those resources and find them easily.
>
> **[5:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=350)** As well, I have here monitoring, which allows you to specify various alerts and diagnostic logging to review what's happening to your resources.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=359)** So again, these types of properties are available with most of the resources within Azure.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=366)** All of the virtual resources that we're going to create within Azure will be done from the Azure portal by using the create a resource link.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-the-azure-management-portal?u=76281980&t=376)** And from there we're going to create Azure virtual networking resources that will be used to provide inbound and outbound access to our Azure environment.

> [!info]- Semantic Content
>
> **Tools:** powershell (4), azure portal (3), command line (3), bash (2)
> **Code Keywords:** interface (7), let (1)
> **UI Navigation:** click on (3), select the (2), go to (1)
> **CLI Commands:** find (2), make (1)
> **Prerequisites:** configure (3)
> **Analogies:** such as (1), for example (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Definitions:** is a  (1)

#### Introduction to Azure networking resources
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=0)** - [Instructor] So how do we implement virtual networking and how do we build these virtual network resources?
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=6)** How do we provide access to our databases, our virtual machines, our applications to the outside world?
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=14)** And how do we do that securely?
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=16)** And how do we do that reliably?
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=18)** And how do we do that in a way that is able to tolerate failures, failures of data centers, failures of internet connections, failures of resources themselves?
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=28)** Well, we do that by implementing and creating a number of various and different types of resources.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=35)** And throughout this course, we will look at the different resources that can be created and what purpose each of those resources provides, and what solution it is able to implement, and what problems it's able to resolve for your infrastructure.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=52)** But how do we create them initially?
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=53)** So in this course, I will show you later on some existing resources that I've pre-deployed.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=59)** As well, I'm going to show you how to create some new resources.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=63)** So to create a new resource, I'm going to click on the create a resource link within the Azure portal, and this is where I can create any type of resource, a virtual machine, a storage account, a database, a firewall, anything that I want virtually within my Azure subscription.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=80)** But if I want to segment the view of these resources to virtual networking, I'm going to click here on Networking.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=87)** Now, you'll notice right away that within this interface, this Microsoft Azure Marketplace interface, there are different types of Azure providers, and some of them are third party.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=100)** So they are third party network resources that can be created by other companies that are storing the resources within the Azure portal.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=110)** Most if not all of those are for pay resources.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=113)** So resources that you will be adding on to your subscription, and you will be paying for the use of those resources.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=120)** You can think of those resources as sort of like applications that you're deploying on your phone, and then you're paying to use those applications.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=128)** It's similar to the system where you are deploying this resource.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=133)** You're then utilizing this digital resource and you're paying a subscription fee to the provider to be able to gain benefit from this resource.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=142)** Most of these resources are VPN resources and firewall resources that can be created and that are provided by these third party products, which do a great job at providing some advanced features that are not built into Azure.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=156)** However, here on the left, most of the resources that I have here are Microsoft resources, so resources that are created and published by Microsoft.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=166)** These resources usually come in free tiers, basic tiers, and then premium tiers.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=172)** So there are free options of these resources, for the most part.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=176)** Some of them, there are no free resources, and you have to pay for even the most basic options, and the premium tiers then we will give you premium options and premium settings that you can utilize, and it requires a little bit more payment into your subscription.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=193)** So here I can create any type of those resources, such as a public IP address, a virtual network, a network gateway, this is used for VPNs, and a connection, and I'll talk about that later on.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=204)** So if I want to build out my virtual networking solution, I will utilize these various resources, and let's go ahead and create a simple one, a public IP address.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=216)** So a public IP address is exactly as advertised.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=220)** It's a TCP IP address that is accessible from the public network.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=225)** The public network is the internet, and so it's a valid IP address on the internet to which we are signing to our resources.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=234)** So I specify the subscription that will host that IP address, the resource group that will host the IP address, as well as the region where the IP address will be deployed.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=244)** So this is a management region, and then I'm going to give it a name.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=249)** So I'm going to give a name to my IP address.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=251)** So I'm going to call this Public IP, and for virtual network, and I'm going to call this virtual network 1, and I have the choice of specifying IPV-4 or an IPV-6 address.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=266)** And then, again, I have the tier.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=268)** So this is the SKU.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=270)** I have a standard SKU and a basic SKU.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=272)** So these are different types of options that are then available for the IP address, and you'll see here that if I pick the standard SKU, I have additional options that open up, such as redundancy options.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=284)** So a zone redundancy option is basically specifying that if there is a zone that becomes unavailable, then this IP address automatically becomes available in a different zone.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=295)** Now, you'll know probably if you're familiar with Azure, that Microsoft Azure is deployed in data centers, so they are actually very large data centers that store Azure resources.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=305)** The concept of a cloud that magically exists in the internet is just that, a concept.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=311)** The reality is that a Microsoft Azure Cloud is a group of very large data centers that are interconnected to provide a number of services.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=320)** These data centers are organized in regions and zones, and having something that is zone redundant means that if one of the zone becomes completely unavailable, then that IP address is still available, and that comes at a higher cost, of course.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=336)** I can pick Basic, but you see here that I have a warning that Basic public IPs will be retired at some point.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=342)** But for the purpose of this demonstration, I'm just going to pick a Basic IP address, and then I have the option of specifying the IP address assignment.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=352)** So in IP addressing, since that's been available in on-prem network, there's always been the concept of a static IP address, so an IP address that I manually provide myself, or a dynamic IP address, an IP address that is assigned by servers that just push out that IP address to the available resources.
>
> **[6:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=371)** So an on-prem network, we talk about DHCP or a dynamic host configuration protocol, where the IP address is pushed out or made available to the servers that request it.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=382)** So I can allow here an IP address that's going to be assigned dynamically unless I know the IP address that I want, and then I can assign it statically.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=392)** Then I have the option for a DNS label, which is basically the name that's going to be assigned to that IP address or the name that will be used to resolve to that IP address.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=402)** So I mentioned earlier DNS, or domain name system, the technology that allows names to be resolved to IP addresses, or translated to IP addresses.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=413)** The DNS label will be the internet name for this resource that will then be used to provide access to this connection.
>
> **[7:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=421)** So I'm going to give this a name that will have to be unique, so it has to be unique within that zone, so I'm going to call this virtualneet11course1,
>
> **[7:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=436)** and that's a name that I'm pretty sure is going to be unique.
>
> **[7:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=440)** There'll be a verification that will check that that name is unique within that zone.
>
> **[7:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=445)** And then I'm going to click on review and create, which will actually go through the validation process of making sure that all the information that I provided is valid information, which it just told me that the validation has passed, and I'm going to click on the create option to actually deploy and provision the resource within the Azure environment.
>
> **[7:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=467)** And you'll see that as soon as this deployment occurs, I have here a deployment overview that becomes visible, and the part that is interesting is the template part.
>
> **[7:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=478)** So as soon as you deploy resources in Azure, those resources are deployed within the GUI that you've just used to deploy that resource.
>
> **[8:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=487)** However, in the background, what happens is that there is a deployment script that is triggered, and I can actually view that script and then I can reuse and modify that script later on if I want to automate both the management or the creation of more resources.
>
> **[8:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=505)** So by clicking on template, I actually see this JSON script that provides all of the details for this deployment.
>
> **[8:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=514)** I can then take that, I can modify it, and I can redeploy a resource using the script, or I can either trigger, as you'll remember, we talked about how we can use a cloud shell to use scripting.
>
> **[8:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=527)** I can trigger a deployment of that using the cloud shell if I have that JSON that's been created.
>
> **[8:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=534)** So see here that my deployment is complete.
>
> **[8:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=537)** I can go to my resource, my IP address resource, and I would be able to manage this resource and modify the various settings of this public IP address as I need.
>
> **[9:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=549)** So this is how you deploy a resource, a virtual networking resource within your Azure environment.
>
> **[9:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/introduction-to-azure-networking-resources?u=76281980&t=556)** In a later video in this course, we will configure, monitor, and troubleshoot these various virtual networking resources, but first, I want to make sure that you understand the method for creating Azure virtual networking resources within your Azure subscription.

> [!info]- Semantic Content
>
> **Env Vars:** sku (4), dns (3), ipv (2), json (2), vpn (1)
> **Code Keywords:** public (8), interface (2), let (1), static (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), similar to (1)
> **Tools:** azure portal (2)
> **Exercise Files:** template (2)
> **Warnings:** warning (1), troubleshoot (1)

#### Using Copilot for Azure Virtual Networking
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=0)** - [Instructor] So if you've recently looked at Microsoft products, you've noticed that Copilot is now embedded into many of the Microsoft solutions.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=9)** Whether it be an application that you're using on your desktop computer or an online portal, Microsoft Copilot is visible in many of those solutions and is there to help you, assist you in implementing, configuring, or identifying information within those tools.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=27)** So Microsoft Copilot is the artificial intelligence agent that has been created by Microsoft as an assistant.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=36)** So Copilot is more or less an assistant that you are meant to use to be more efficient in your tasks.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=43)** And Microsoft has now embedded Copilot into the Azure portal.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=48)** Note that the Copilot may not be visible in all regions, and it's still in preview.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=54)** So I'm located in the United States, and as of the recording of this course, which is January of 2025, I see Microsoft Copilot, but it may not be available where you're located just yet, but at some point it will be available in all regions.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=70)** So if I click on Copilot, I have suggestions here of different questions that I can ask or prompts that I can input into Copilot, or I can type whatever I want.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=82)** Now, I can relate this to the content that I have here.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=85)** So I can ask questions about how to configure or modify the various resources that I have in my infrastructure.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=93)** So let's say I would like to modify the public IP address of publicipvn1.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=106)** So I'm not sure if it's going to be able to identify publicipvn1.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=110)** Sometimes it does, sometimes it doesn't.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=112)** Again, this is a preview product, so it's not exact, but right now it's making a query and it's trying to determine a task to perform.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=122)** So it's telling me here, "Unfortunately, there's no direct operation to modify the public IP address."
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=127)** So it's telling me, "Actually, you cannot modify the public IP address."
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=130)** Okay, so let's say that I would like to modify the permissions of publicipvn1,
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=141)** and let's see what it's going to do now.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=145)** All right, so now it's telling me modifying the public is not directly supported through the available functions.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=150)** Well, I know it is something that I can do, and it's a task that can be performed.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=154)** I've actually asked it that same question before and it was able to tell me how to do it.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=160)** So I'm going to ask it another question again.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=162)** Modify the inbound security rules of a network security group, which is another resource within my Azure portal.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=174)** And let's see what it's going to tell me.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=176)** And hopefully it will be a little bit more detailed.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=180)** So you can navigate to the Azure portal and locate the specific and just adjust the rule as needed.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=185)** Yes, actually it's asking me do I want more details?
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=188)** Yes, please provide more details on how to perform that task.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=197)** And I can always iterate on the previous questions that I've asked Copilot similarly to any other artificial intelligent tool that you use when you are prompting and asking questions from that tool.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=211)** So Copilot is looking into it and giving me more detailed steps.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=215)** And here I have more specific detailed steps on how to perform my task.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=220)** So again, this Copilot is designed specifically for Azure.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=224)** It hasn't been able to show that during my prompt, but many times I've used it where I'm actually asking a question about the resource and then it's actually asking me to pick the resource in my interface, and then it opens the correct blade to actually perform the task.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=240)** So Copilot for Azure is going to be continuously evolving.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=244)** These tools are in the cloud and are continuously being updated based on the experience and the feedback of individuals that are using the tool.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/using-copilot-for-azure-virtual-networking?u=76281980&t=253)** So this is something that I encourage you to utilize and test in your environment to see if it does help you in managing your Azure virtual networking resources.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (4), interface (1)
> **Tools:** azure portal (3)
> **UI Navigation:** click on (1), navigate to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 2. Manage Azure Virtual Networking for Existing Resources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Manage virtual networking for a virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=0)** - [Narrator] Virtual networking can sometimes be a little bit difficult to understand because it's a bit abstract in the sense that we're creating this virtual network, and it's not a network, it's a virtual network.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=12)** So essentially, we're creating these artificial boundaries around objects, around resources.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=19)** In order to create these artificial boundaries, we need to connect our resources to those virtual networks.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=26)** And so the easiest way to demonstrate that is to actually show you how the resources are connected.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=33)** And the first part of this course is focused on looking at the connections of resources to virtual networking objects and to those virtual networking tools we have in Azure.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=46)** So I already have several resources in my Azure subscription, and I want to show you how, during the deployment of these resources, they were connected to virtual networking.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=57)** And then how is that virtual networking used to actually create these artificial boundaries around our objects, these circles of trust or these essentially moats that we're putting around our resources to prevent external access directly to the resources.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=77)** So the most clear example of that is a virtual machine.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=81)** I have a virtual machine here named VM1.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=84)** Now VM1 was created and I deployed it in my environment.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=88)** It's a Linux virtual machine.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=90)** And during the deployment, I actually had to assign virtual networking resources to that virtual machine.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=98)** So I'm going to take a look at some of these default resources that I had to assign to that virtual machine.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=104)** And we're going to look at their configurations.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=107)** We will look at other resources as well.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=110)** But I want you to note all of these resources that have been attached or assigned to this virtual machine and a virtual machine in Azure can pretty much do anything.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=121)** It can store an application, it can be used as a remote console, it can store a database, it can perform various administrative tasks or management tasks or monitoring tasks.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=133)** It is basically a computer that sits in the cloud that can do anything you configure it to do.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=140)** So to a certain point, it is the most elemental or basic component in Azure that we can demonstrate for a remote connection.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=149)** So when I open up the overview blade for VM1, I see that I have some essential objects and essential configurations.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=159)** And these relate to virtual networking.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=162)** So I have here a public IP address.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=165)** A public IP address is the external IPV4 or IPV6 address that would be assigned to a resource.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=172)** So this is something that is publicly accessible.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=175)** And whenever we say public, we mean outside of our Azure subscription.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=180)** I have a virtual network and a virtual subnet.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=184)** So the virtual network is the overall grouping of virtual networking resources.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=191)** And within a virtual network, I have a virtual subnet.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=194)** When I was mentioning before this boundary or this artificial boundary, the boundary is the virtual network.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=202)** The virtual network is going to have resource within it.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=205)** And the primary resource that I must always have is a subnet, defining the IP addressing scheme.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=213)** So defining all of the IP addresses that are accessible to my virtual network, that's defined in my subnet.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=220)** Then I have a name, and this is optional.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=222)** A DNS name is essentially a name that will be accessible from the internet and that will be resolved to this public IP address.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=232)** So let's take a quick look at these resources.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=235)** I'm going to click on Public IP Address.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=237)** And you'll see here that I have a public IP address that is a static IP address, and I don't have a DNS name that is assigned to it.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=245)** If I want to add a DNS name, I can type it here.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=248)** It must be unique within this name space, east US, which is within the cloudapp.[azure.com](https://azure.com) namespace.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=256)** I can also create additional alias records.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=259)** So additional names or aliases for this IP address.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=263)** So maybe I want to call it VM1 Special, but I also want to call it VM1 Special 2.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=269)** That would be an additional alias that I would create for this machine.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=273)** And we will look at public IP addresses later on in this course.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=276)** But just to show you that this public IP address has been assigned to this virtual machine.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=283)** I also have a virtual network that this virtual machine is connected to.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=290)** And this virtual network has an address space of 10000/16.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=297)** This is provided in the CIDR notation.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=300)** So this is the way that we determine the number of IP addresses that they are available within this address space.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=308)** And we will have, of course, a virtual subnet that will be within this virtual network.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=315)** So this is my virtual network, again connected to my virtual machine, and I have the DNS name, as I mentioned before, is not configured.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=325)** Now, that's not where my virtual networking settings end for my virtual machine, I also have a private IP address.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=333)** Now remember I told you that my virtual address space was 10000 oh or 10000/16, which defines again the number of IP addresses within that range.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=347)** And here 10004 is the IP address of this virtual machine.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=353)** Now, this virtual machine is connected to this virtual network using an interface.
>
> **[6:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=361)** So the same way on a computer on the network, you have a network card.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=365)** Well, a network card is really a network interface, and the network interface of this virtual machine is here.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=372)** And I can click on this network interface.
>
> **[6:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=375)** And I see that this virtual network interface has two IP addresses, a private IP address, and a public IP address.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=384)** And this is very important because as we will be modifying and manipulating this virtual machine, we will determine whether we need to modify the private IP or the public IP, depending on what connections we're interested in modifying.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=400)** So this virtual machine is both connected to the external network using that public IP address and to the internally network using the private IP address.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=413)** We know that it's connected to this virtual machine.
>
> **[6:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=416)** We know that this virtual machine is connected to a virtual network, and then the whole thing is secured, using a network security group.
>
> **[7:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=426)** So the network security group, which is also connected to our interface, determines the inbound and the outbound rules for connections.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=436)** Inbound is ingress, anything that can go into the virtual machine.
>
> **[7:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=441)** So any allowed connections inbound to the virtual machines are determined here.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=447)** And the outbound rules are determined here, which is any connections out from the virtual machine.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=452)** And don't worry if this seems a little complex at this point in terms of how these rules work.
>
> **[7:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=457)** We will look at inbound and outbound security rules on network security groups a little bit later on because they are quite important to determining how and what is allowed to connect to a virtual machine and what that virtual machine can connect out.
>
> **[7:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=473)** But I'm trying to demonstrate to you the relationship between these objects.
>
> **[7:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=478)** So the virtual machine is connected to an interface, this virtual machine interface, this networking interface, and this networking interface is connected to a network security group.
>
> **[8:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=492)** And the network security group has a set of rules that determines what connections are allowed to the virtual machine.
>
> **[8:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=502)** Now, these connections here can also be manipulated and modified using additional objects.
>
> **[8:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=511)** So if we decide to connect our network interface to other resources beyond the network security groups, then we may allow or block other types of connections.
>
> **[8:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=522)** The network interface, the virtual networking, and the IP addresses are the important element when relating to networking to a virtual machine resource.
>
> **[8:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-virtual-machine?u=76281980&t=534)** And those are the objects that we would modify and manipulate when we want to allow or block resources connecting to a virtual machine.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (12), public (11), private (4), abstract (1), let (1)
> **Env Vars:** vm1 (5), dns (4), ipv4 (1), ipv6 (1), cidr (1)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Manage virtual networking for a storage account
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=0)** - [Instructor] One of the most common resources in an Azure subscription is an Azure storage account.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=6)** A storage account is essentially a repository where you can store any type of data such as files, queues, or blobs.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=15)** And then that data can be accessed by applications or users, or any other service that you may have within Azure or outside of Azure, on the internet or on your on-prem network.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=28)** So storage accounts is one of those fundamental resources that we create in the most basic of Azure subscriptions.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=36)** And if I go into an Azure storage account, I see that I have some settings that relate to networking.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=43)** I will want to take that storage account and actually connect it so that it becomes accessible by applications or users, or whatever I need to use to connect to the data that is stored in the storage account.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=60)** So there's many different things that I need to do in order to connect to Azure Networking, this storage account.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=66)** And the first thing that I can do here is under networking, is to configure the public access.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=72)** Now, you'll note that the public access here by default is not set.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=75)** So I can click on manage, or I can click here on enable from all networks, and that will actually allow me to specify which networks will be allowed to connect to the public IP address.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=85)** And this will allow me to determine what will be allowed to connect to the storage account.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=90)** And I'll get back to those settings in a couple of minutes.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=93)** I also have here a network security perimeter, which is a new type of resource that I'm not going to touch on right just yet because it's still in preview, it's in public preview.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=104)** And it provides a set of security settings similar to a virtual network and network security groups, which create this, again, the security boundary around a resource.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=115)** It's new, I'm not sure what the direction will be of network security perimeters and whether or not they will replace network security groups or other resources.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=124)** So yet to be determined and not all functionalities are available as of the recording of this course.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=130)** And then I can get more granular and actually specify the specific networks, IP address, and exceptions of what will be allowed to connect to my storage account.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=139)** So again, I'll be coming back to all of this, but first I want to show you some other type of options here.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=145)** And I'm going to go to private endpoints.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=147)** So a private endpoint is exactly that, a connection point or a private connection point to a resource.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=155)** I don't have any private endpoints by default.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=159)** I can take my private endpoints and then expose them to the internet, providing access to my resource.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=166)** And private endpoints is something that we will look at, not only for storage accounts, but for other resources, which then become the primary type of connection.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=175)** And in a later video in this course, we'll talk about a database and the private connection points to the database, the private endpoint to the database, and we'll take a look at that in that video.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=187)** Then I have network routing.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=189)** So the network routing essentially allows me to determine how the data will be accessible or what route it will take to get to my private endpoint.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=198)** And so basically I can say that it will just connect directly from the internet, or I can specify a route that will go through my virtual networks or other resources that I have.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=209)** A custom domain is basically specifying a custom name of a domain that I may be using for my resources.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=216)** So for example, if my company name is Contoso and I own [contoso.com](https://contoso.com), and I want this resource to be accessible to [contoso.com](https://contoso.com), I can use this interface to manage my domain and specify a CNAME or an alias that will redirect all the connections of let's say, storage.[contoso.com](https://contoso.com), to this link here.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=238)** So this name for my resource is a name that is resolved through the Azure DNS, and I can have a shortcut to that name, and I can do that by using a CNAME record in my DNS database.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=253)** So let's go back now to public access.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=256)** And if I click on public access, the first thing here is I'm going to go to manage, and this is where I specify the access to my storage account.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=263)** So the first one here is enable, which provides a full access to this storage account.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=269)** Now providing access doesn't necessarily mean that you can authenticate to it.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=273)** So you may be able to access it, but you can't authenticate to it, and I'll talk about that in a couple minutes.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=279)** Disable then disables all external internal access or secured by perimeter, and this is where I use this network security perimeters that I was mentioning before.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=288)** So I'm going to click here on enable, and I can say enable from all networks or choose a specific virtual network.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=294)** And this is where it gets really interesting, and this is where I like to use virtual networking to again, create these boundaries, these moats around my resources to secure them, these circles of trust for virtual networking.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=307)** So I'm going to say that this storage account is only going to be accessible within the virtual machine, virtual network that I looked at in an earlier video in this course.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=318)** So we have one virtual network that's connected to VM1.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=321)** If I want to specify that this storage account is only connected to that same virtual network, 'cause maybe I have all of my resources for a specific application or a tool, I want them to be all connected to the same virtual network.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=335)** I'm going to select that virtual network and I'm going to enable the connection to that virtual network.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=341)** And when I click on enable, it's going to enable a service endpoint for that virtual network for this storage account.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=349)** And I see that the service endpoint has been added successfully.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=353)** I'm going to click on add, and I'm going to see now that my virtual network here, which has that range with this subnet, is now connected to this storage account.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=366)** So only this virtual network has access to this storage account using its service endpoint.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=374)** If I want, I can be more granular and I can also specify which resources from this virtual network can access this storage account.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=383)** So I can by resource type, so I can say the specific type of resource, maybe a virtual machine or a virtual machine network interface or a specific type of resource will be able to access this storage account through this virtual network.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=400)** So again, I can be very, very granular and I can also specify here any type of logging or storage metrics that I want to enable.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=407)** So if I click on save, I'm saving the connections settings that I've set for this storage account, and I see it here under my configurations.
>
> **[6:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-storage-account?u=76281980&t=418)** So this is how I enable and connect the storage account to a specific virtual network.

> [!info]- Semantic Content
>
> **Code Keywords:** private (9), public (6), this, (2), interface (2), let (2)
> **UI Navigation:** click on (5), go to (2)
> **Env Vars:** cname (2), dns (2), vm1 (1)
> **URLs:** [contoso.com](https://contoso.com) (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)

#### Manage virtual networking for a database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=0)** - [Instructor] Now from the Azure portal, we can also configure the remote access to a database.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=6)** So a database, here, I'm going to use the example of a SQL database that's been pre deployed in my environment.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=12)** The SQL database can store structured data that they can then be accessed by applications or other tools or users that need to perform queries.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=22)** So if I click on this db1, this database in my environment, I can connect to the database using Azure Data Studio or Visual Studio and make a direct connection into the database.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=35)** So those are tools to connect.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=37)** However, the access must still be granted.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=40)** I still need to have the appropriate rights to connect to the database, but I must also be able to perform that connection.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=48)** I need to have a path, a networking path.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=51)** So many people will tell you, "Well, you can use a database connection string."
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=55)** So that's actually going to be the string that I input in my tools to connect to the database.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=62)** But you'll notice that when I connect to the database, there's a name here, and there's actually a server that's associated with this database.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=70)** So if I want to actually make a connection to this database, I need to look at the server.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=77)** So if I'm going to go back under Overview, I see that the server name, the server that's associated with this database or that hosts this database, is listed here.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=86)** I'm going to click on the server, and when I click on the server, I see that here I actually have networking settings.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=92)** So you will not have networking settings on a SQL database, but you'll have it on a SQL Server.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=98)** So I'm going to click on network settings, which actually links me right down here to the Networking blade, and from here, I can specify the public access to the database.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=109)** And by default, all the public accesses are disabled.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=114)** I can click on Selected network, and I can then specify a direct access to this server.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=122)** Now, if I provide direct access to the server, I'm going to do that using an endpoint, and I'll discuss that moving forward.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=129)** And the endpoint is going to be the destination, so the endpoint is sort of an efficient connection name or connection path to a resource.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=138)** And there are several resources in Azure that have endpoints or specific endpoints that can be determined.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=144)** And those endpoints, for example, can be set on a SQL Server.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=147)** They can also be set on a storage account and a number of other resources that are in Azure, such as Service Buses, Event Hubs, App Services, or Key Vaults, also, other types of databases like Cosmo DB.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=162)** So these endpoints, these efficient paths of connection to the database, are going to be determined here.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=167)** Now here what I'm doing is I'm specifying public access, so I'm determining a public endpoint.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=173)** So when you specify a public endpoint, you're also going to specify a rule that's going to specify what will be allowed in the address ranges and all the additional details of connections.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=185)** Also, you can specify specific public IP addresses that will be allowed for this service endpoint.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=192)** Now, I'm not actually going to create a public service endpoint.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=195)** I'm going to leave that as Disable.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=197)** I'm going to say that I want to actually disable the public access to this SQL Server and the SQL databases that are hosted, but I want to allow private access.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=206)** Now, private access means that I'm going to create a private endpoint that will be connected or allow connection from a virtual network, and therefore, internal resources in this virtual network will be allowed to connect to this specific SQL Server.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=221)** So I'm going to create now my private endpoint.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=224)** I'm going to give it a name, so SQLPrivateEndpoint1, and you'll see that there's going to be a network interface that is associated to that, as well as a Region of where that will be built or that will be provisioned.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=243)** And this is the resource type.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=246)** Next is the virtual network, so again, I can connect to an existing virtual network, which I have here.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=252)** So I'm asking to connect to this virtual network.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=255)** Now, because the private endpoint is going to allow a connection, it also needs an IP address.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=260)** I can specify to provide a dynamic IP address, or I can manually put in a static IP address.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=266)** And I can also connect a application service group, which is an extension of the configuration options that allow me to secure and to group the various rules that I have in my environment together for management and security purposes.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=283)** This is an option.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=284)** I don't have to do that, so I'm going to leave that blank.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=286)** And of course, I can specify a DNS name for that connection, so that's going to be the name of my endpoint.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=294)** I'm going to allow the default name, the tags, and then it's going to validate that my information is correct and that the resource can be provisioned.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=302)** The validation has passed.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=304)** I can click on the Create button, and now my resource of a private endpoint is being deployed in Azure.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=312)** And then this resource is going to be created.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=314)** So I'm going to have a specific ingress point into my database so that connections can be made to the database using this specific private endpoint.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=325)** Again, this is a private endpoint, which means it does not allow connection from the outside world, only connections made to the virtual network that it is connected to.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=336)** And now my resource has been deployed, and I have a SQL private endpoint that is part of my infrastructure.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=344)** If I go back to my SQL Server and go into my Networking settings under Private access, I see now my private endpoint has been deployed.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=358)** It's connected to a network, and it allows connection.
>
> **[6:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=361)** Now, this is for ingress connection.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=364)** There is also egress, so outbound connection.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=368)** I can specify here my outbound connection from my SQL Server, as well as the encryption that is being used in my environment.
>
> **[6:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=375)** You see here, that is set to TLS 1.2.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=378)** There's TLS 1.3 available as well.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=380)** But for maximum compatibility, I am using TLS 1.2.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-virtual-networking-for-a-database?u=76281980&t=384)** And this is how we provide inbound access to SQL databases by configuring the Networking settings from the Azure SQL Servers.

> [!info]- Semantic Content
>
> **Code Keywords:** private (11), public (8), default, (1), interface (1), type. (1)
> **Env Vars:** sql (13), tls (3), dns (1)
> **UI Navigation:** click on (6)
> **Versions:** 1.2 (2), 1.3 (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (2)
> **Tools:** azure portal (1), visual studio (1)
> **Analogies:** for example (1), such as (1)

#### Manage network security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=0)** - [Instructor] When you manage resources that are networked, which means that they are connected to a network, which means that they are accessible remotely from other machines or users.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=11)** We need to ensure that that connection is secured.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=14)** Your resource is essentially a resource that can be accessed by other resources.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=21)** What defines what is allowed by default, what is blocked by default and how these things are configured are directly within a set of security networking solutions.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=34)** One of those that is probably the most common and one that you are more likely to use in an environment of Azure infrastructure is going to be the network security group.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=46)** A network security group is going to be assigned or attached to a network interface that belongs to a virtual machine.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=54)** So we've talked already about the fact that we have a virtual machine in our environment and that that virtual machine has various networking settings and a set of those networking settings relate to the network security group.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=66)** So let's take a look at the network security group for our virtual machine.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=70)** So the network security group is actually a separate object that I can access directly, or I can go to the network settings blade on my virtual machine and find the network security group here.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=82)** So the primary information that relates to the security group are the rules, the set of rules that define what is allowed to come in to our resource or go out from our resource.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=95)** So the inbound port rules and the outbound port rules define the access to our virtual machine or the access from our virtual machine out to the rest of the networks, to the internet, or to other specific resources within our Azure infrastructure.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=113)** So here you see I have a set of rules that exist.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=116)** Some are there by default, some were created by me or through a deployment.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=122)** So for example, here I have an SSH rule that has a priority of 300 on port 22 for protocol TCP.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=131)** So what does this mean?
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=132)** It means that there is an allowed inbound connection on the port 22 TCP for SSH sessions.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=144)** That connection can occur from any machine and it can access any IP address on this machine.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=152)** And this rule is an allowed rule.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=154)** So if you are attempting a connection on port 22 TCP coming from any IP address, you will be allowed to connect on this virtual machine.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=163)** The way that the network security group processes rules is by the order of priorities.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=170)** The first rule that matches is the rule that is applied.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=175)** So here, if you're connected on this protocol and this port, you will be allowed.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=180)** If you are any other protocol, any port, you will go to the next rule.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=184)** So the next rule will be applied. Does it apply to you?
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=187)** Does that rule actually have a relevance to the connection you're trying to make?
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=193)** So this rule here is a rule that defines the source and the destination.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=198)** So it's only allowed from this virtual network.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=201)** Another rule that says it's only allowed from this load balancer.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=205)** So any connections coming from this virtual network or this load balancer, those will be allowed.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=210)** But if your connection is neither from the load balancer or the virtual network, then you will go to the next rule.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=218)** And the next rule is anyone else is denied.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=222)** And that is the way that it processes these rules.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=224)** Going down the list of priorities, as you see from 300 all the way to 65,500, and as soon as it finds a match, it applies that match the connection.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=234)** In this case, anyone else that's coming from anywhere outside virtual network or the load balancer that uses a different port or protocol will be disallowed because the last rule will apply.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=246)** The same logic applies to the outbound rules.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=248)** Anything that goes out of our virtual machine.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=250)** So if we want to allow a connection through a network security group to our virtual machine, we would have to create a new rule, inbound or outbound, depending on what we want to allow.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=260)** In this case, I want to allow inbound, I can say I want to allow inbound from anywhere, and I can specify which port I want.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=269)** So coming in from which port and allow to which port and I can specify a service.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=274)** So a good example of this is RDP, which uses port 3389.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=279)** So when I click on this, it will automatically fill in the information for 3389 to say that it allows a connection to 3389, and this is an allowed rule.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=291)** Now, I can of course specify my own ports and my own protocols.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=294)** I can specify also the source IP ports by defining the connection here.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=300)** And I can say that it is 3389 as well.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=303)** So if I want to force somebody from coming in on 3389 and then connect on the virtual machine on 3389, I would set it this way.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=311)** Or the default, which is the star, which is any port.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=315)** If I want to allow multiple ports, so a 3389 and let's say 3390, I can separate them by a comma.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=322)** If there is a range of ports, I can specify them by a dash and then say anything from this to this will be a valid range that I will allow.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=332)** These are the various syntaxes that are allowed for our additional rules.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=337)** So here I'm going to keep the star.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=339)** You may want to be as restrictive as possible.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=341)** Typically when you are applying rules to be very specific as to what you want to do.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=346)** And then I can specify my priority.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=348)** So in this case here, the priority will go to 310, which means it will go above all of these rules, but below the rule of 300, which is fine because it's a separate protocol.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=357)** So that should work properly.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=359)** So as soon as I click add, it will create the security rule, assign it to my network security group, and now I've allowed 3389 onto my virtual machine, a port that is being used for remote desktop protocol for remote management of the virtual machine.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/manage-network-security-groups?u=76281980&t=376)** So this is how we configure and manage a network security group for a virtual machine.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (3), let (2), case, (2), interface (1), match, (1)
> **Definitions:** means that (3), is an  (3), is a  (2)
> **Env Vars:** tcp (3), ssh (2), rdp (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** ssh (2), find (1), make (1)
> **Ports:** port 22 (3), port 3389 (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 3. Create and Configure New Azure Networking Resources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating virtual networks
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=0)** - [Speaker] With the namesake of this course being Azure Virtual Networking, let's start to look at the Azure Virtual Network Resource.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=8)** So I mentioned before that we will want to attach our resources to a virtual network and then configure that virtual network with the various security settings that are appropriate for our environment to create a security boundary.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=22)** And that boundary will be our network.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=25)** That network will be the perimeter size of where our resources will reside, they will connect to, and all of the configuration options at the boundary level will apply to the virtual network.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=39)** Now later on in this course, we will connect some resources to virtual networks using things like a network interface on a virtual machine or an endpoint of a resource such as a database or a storage account resource that has an endpoint.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=54)** Now, we can configure all of these connections using the IP addresses that are assigned to the virtual network.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=62)** So let's go ahead and create that virtual network resource.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=65)** And from the Azure portal, I'm going to go into the marketplace and I'm going to go ahead and search for network.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=76)** And what I want to create is a virtual network resource.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=79)** But I want to show you that there are very few resources that exist in networking that are not somehow related to virtual networking.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=88)** So all of these resources that I see here are all related to a virtual network, even though we have the virtual network resource down here.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=96)** We also have the virtual network gateway, which connects us to a VPN.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=99)** We have a network interface, as I mentioned before, such as what's connected to a virtual machine.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=105)** We have a network manager that allows us to manage all of our networking resources.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=110)** A network security perimeter, which is a new type of a resource still in preview that allows us to segment our resources through networking.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=119)** So there are many, many resource types available, but here what we're going to create is a virtual network resource, and I click on the create button here to start the process of creating our virtual network resource.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=133)** As always, we select a subscription and a resource group.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=137)** Remember that you can always create a new resource group from this interface or use an existing resource group.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=143)** I'm going to specify the name of my virtual network, and I'm going to call this one Virtual network two, and I'm going to determine the region that it's in.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=155)** It's going to be in the East US region.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=157)** Sometimes when you select the region, it's an important option to select also, because certain resources must be in the same region and other resources must be in separate regions when it comes to virtual networking.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=169)** So picking the resource type is very important, but picking the region for that resource type has implication as to how you can use that resource later on.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=178)** So be aware of that.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=180)** I'm going to click on next.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=181)** And here, I have four different options that I can select.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=185)** First, virtual network encryption.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=187)** Virtual network encryption is a option that ensures that traffic between virtual machines inside of a virtual network is going to be encrypted, so that's private to private traffic.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=199)** If there is traffic that is coming from outside of the virtual network, that traffic will not be encrypted using virtual network encryption.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=209)** There are other methods of encryption, of course, but this here will not affect traffic outside of your virtual network, only what's going on inside of your virtual network.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=219)** Azure Bastion is a service that you use to provide RDP access over the internet from a public IP address to your virtual machine.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=229)** So if I have virtual machines that are hosted in a virtual network, I want to provide RDP access to those virtual machines.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=237)** I can use the Azure Bastion service as a method for that.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=240)** There are other ways to do it as well, but Azure Bastion is a service that provides many configuration options and functionalities for RDP access.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=249)** The Azure firewall, of course, the concept of a firewall is well-known to administrators, but here an Azure firewall is a service that's going to protect our virtual network from attacks from the internet.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=262)** And later on in this course, we will be creating the Azure Firewall service.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=266)** So I'm not going to add it here.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=268)** Next, I've got the DDoS network protection, protecting us from denial-of-service attacks.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=274)** This is also a paid service that I can add to my virtual network.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=279)** So you can think of all of these as paid services that we can add here for the purpose of providing enhanced security for our virtual network for remote access.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=289)** In the case of these three or internal encryption, in the case of virtual network encryption. If you use DDoS, you have to perform various tasks to implement DDoS, such as creating a DDoS protection plan.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=302)** And there are other steps involved as well.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=305)** I'm going to click on next and go into the IP addressing.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=308)** So the IP addressing here is the definition of the IP address range that will be allowed or used within my virtual network.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=317)** So the resources that are within my virtual network, which IP addresses will they use, and I can define it here using a subnet or adding address spaces.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=327)** And here I can specify a IP address range and 19216800/16
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=337)** will be the address range that I'm choosing to use here, which will provide more than enough IP addresses for the resources inside of my virtual network.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=346)** I can add additional subnets as well.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=348)** You can have many subnets within your virtual network to then have your resources segmented by subnets.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=355)** As long as we have address spaces that are separate for those subnets, they can be multiple subnets and within our virtual network.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=363)** And then I can click on review and create in order to run the validation to ensure that all of the options here are correct, and then I can click on create to create and deploy the virtual network within my environment.
>
> **[6:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=375)** Once that's done, I can go ahead and enter the virtual network to perform management tasks.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=382)** And that's what we'll see in a later video in this course.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=384)** And I see now that my deployment is complete.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-virtual-networks?u=76281980&t=387)** So follow us in the next video where we will be managing this virtual network.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), private (2), public (1)
> **Definitions:** is a  (7)
> **UI Navigation:** click on (5), select the (1)
> **Env Vars:** rdp (3), vpn (1)
> **Analogies:** such as (2)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Tools:** azure portal (1)

#### Managing virtual networks
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=0)** - [Instructor] So now that we've successfully created our virtual network, let's go ahead and look at the configuration options that are available for that virtual network resource.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=9)** So here it is in my list of available resource, my Vnet-2, virtual network that was created in the location, East US in my subscription resource group.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=19)** I see some of these details in this information card here, which is always useful when you're browsing for resources inside of the Azure portal.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=27)** So let me click on it and let's look at this resource.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=31)** We see our address base that was previously defined, and we also see the list of the various configuration options that were not initially set up during the creation of the virtual network.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=43)** So we see here that we have a number of configuration options, and I'm not going to go through everything.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=49)** I just want to highlight some of the key elements that you may want to configure in this virtual network.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=55)** First, of course, we have the administrative permissions, the roles that we can assign here.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=60)** We can audit our own access to see what permissions we have through our user account, and we can also grant additional permissions to this resource specifically by using RBAC role assignment.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=73)** Role-based access control, or RBAC is the methodology that we use for applying permissions or rights to resources in Azure.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=81)** And we can apply those in a granular manner by applying them directly on a resource or on a higher level resource that then inherits down.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=91)** The higher level resource would be the resource group or the subscription, for example.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=96)** I've got my tags, which I can assign for search and organization purposes.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=100)** And now let's get into the specifics of the resource.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=104)** For example, I have our address space here.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=107)** Now, note that I can add an additional address range so that if I want to extend the scope of the virtual network.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=115)** So under connected device, I see any device that's currently connected, for example, that may be a network interface card, a NIC card that would be connected from a virtual machine.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=125)** Then I have my subnets here and I have my subnet that I initially added.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=130)** With its address range, I can of course add additional subnets or add subnet gateways.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=136)** So a gateway subnet is a subnet that is being used for a VPN.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=141)** And then I have my Bastion resource, which I did not create as previously discussed in the initial deployment.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=148)** However, here if I want, I can create the Bastion resource.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=152)** The DDoS protection for denial of Service Protection plans.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=157)** It is disabled.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=159)** Again, there are costs associated to that, if I want to add that.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=162)** The firewall I will be adding later on this course, I have of course, the Defender for cloud, this fantastic resource from Microsoft for managing security posture throughout your environment.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=173)** I have a course on the LinkedIn library that deals specifically with Azure security that focuses on Defender for cloud.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=180)** I highly recommend that you audit that course.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=183)** Then I have the network manager, network manager, we will look at in a later video in this course, a resource that we use to manage all of the resources that are related to networking within our Azure deployment.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=196)** I have my DNS servers where I'll be specifying the domain name, system name resolution, or which mechanism I'm using for name resolution.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=204)** And then I have an interesting option here, which is peering.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=207)** So peering is the ability to connect multiple virtual networks together so that the resources on those virtual networks can communicate to each other.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=217)** So if you have multiple virtual machines in Vnet-1 and multiple virtual machines in Vnet-2, and you want those to communicate with each other, a great way of doing that is by peering the virtual networks.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=231)** So to do that, I would add a virtual network peer.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=234)** So I'm going to click here on add, and I have to specify name for the peer.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=239)** So I'm going to call this Peer1.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=241)** And I have different options here for the peer.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=243)** It can be either a resource manager peer or a classic peer in terms of the deployment model.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=248)** And then I'm going to select a virtual network.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=252)** So virtual network 1 is another virtual network.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=256)** And then I can specify do I want that other virtual network to peer with me?
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=261)** So peering by default is only one way.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=263)** So I'm allowing the resources in my virtual network, Vnet-2 to access Vnet-1.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=268)** But do I also want Vnet-1 to be able to access Vnet-2?
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=273)** So you see that's what this checkbox defines here.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=276)** And then I have also additional options here such as forwarding.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=280)** So let's say that there is a third network, so there's Vnet-3.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=283)** Do I want my connection to be transitive from Vnet-1 to Vnet-2 to Vnet-3 and that would be allowed through forwarding here.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=293)** And then I can specify a name for my peer name, so the specific name for my peering link.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=300)** So I'm going to also call it Peer 1. And same settings here.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=305)** So basically here I'm specifying the resource in both locations, in the remote network and in my network.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=314)** And then I'm going to click add, and I'm adding virtual network peering both in my network and in the other virtual networks so that both virtual networks will now be configured to communicate with each other.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=328)** And that has been added correctly.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=331)** And now you see that my peering status is fully synchronized, which means that they are connected, which means that resources in both virtual networks can now communicate successfully with each other.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=342)** In order to do that, I need to have address spaces that don't overlap, so that networking will function correctly, and I need to make sure that they are part of the same environment.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=352)** So this is how we implement a network peer for virtual networks as part of our organization.
>
> **[6:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=360)** As I go down the list of configuration options, of course I have my service endpoints.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=365)** We've talked about private endpoints, but I have service endpoints as well for management purposes.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=370)** And they're similar to private endpoints.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=372)** I have my properties, which are the various IDs that are related to my objects, and I've got the locks.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=378)** The locks are the resource that I would configure to prevent an administrator to accidentally delete or modify a resource, and in this case, this virtual network.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=390)** So if I want to prevent administrators from erroneously modifying or deleting this virtual network, I would add a resource lock on the virtual network.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=401)** Below I have standard Azure configuration options around monitoring and automation for redeployment of resources.
>
> **[6:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/managing-virtual-networks?u=76281980&t=409)** And these are the relevant management options for virtual networks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (2), interface (1), function (1), delete (1)
> **Env Vars:** rbac (2), nic (1), vpn (1), dns (1)
> **Analogies:** for example (3), such as (1), similar to (1)
> **Definitions:** is a  (2), means that (2)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** click on (1), checkbox (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)

#### Creating an Azure load balancer
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=0)** - [Narrator] We have several resources in our virtual network, and if we want to make them accessible from users or other networks on the internet, we may want to create a load balancer to publish those resources out.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=13)** The load balancer will then use a public IP address to make the resources available to external users or a network somewhere else in an on-premises data center.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=25)** In order to make a load balancer available, we need to create a Azure load balancer resource, a resource that is publicly available from Microsoft that is published by Microsoft.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=35)** Or we can create a load balancer from a number of third party vendors that are publishing their load balancers in the Azure marketplace.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=45)** So let's go ahead and create a load balancer, and I've just described the scenario of creating a load balancer to publish an external resource or resource externally.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=57)** However, a load balancer can also be used to balance connections between resources inside of an Azure subscription.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=66)** So just like we've discussed many times, we can have a public or a private connection, the same way we can have a public load balancer or a private load balancer, and we'll see how that gets done as we create it.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=78)** So I'm adding the resource from the Azure marketplace.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=81)** We've seen this process before by just creating the resource, adding it to a resource group in my subscription, and of course, giving it a name.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=89)** So I'm going to call this Load Balancer 1.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=94)** I'm putting it in the east US region, and then I can start to determine the SKU.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=100)** So standard gateway and basic, you see here the description of what is available in each SKU.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=107)** Most of the time, we cannot change from one SKU to the next.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=110)** In this case we can, but that may change.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=113)** The basics SKU is retiring soon.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=115)** As I mentioned before, we can have a public or a private load balancer.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=120)** An internal load balancer means that it will balance the load between internal virtual networks.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=125)** So connected within an Azure region or within your Azure subscription.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=130)** Public will allow connections from the outside world into our internal resources.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=136)** So then I can specify a tier, whether it will be regional or global.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=141)** Global will be more costly as it's going to deploy into what's called a home region, which is a more costly resource within Azure.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=149)** I'm going to leave it as a regional load balancer.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=152)** Of course, when you have more costly resources, most of the time it comes at a value of providing more redundancy and availability.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=161)** Next, I'm going to create my front end configuration.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=164)** So when you build a load balancer, it balances the load between multiple resources, but it also takes the connections from point A and passes into point B, point A being your front end.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=177)** So the front where it's receiving and it's passing to the backend, the back where it's sending.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=183)** And here I have a front end IP configuration that needs to be set.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=187)** So I'm going to add my front end IP configuration and I'm going to have to create a public IP address, and I'm going to create one that will be IPv4.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=197)** And I'm going to either use an existing IP address that is not already associated to a resource, which I don't have one of those.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=205)** All my IP address are already associated to resources.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=207)** Or I can create a new public IP address, which I will do, I call it NLBPubIP.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=216)** And this public IP address will be in a zone redundant availability zone.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=223)** You'll see there are multiple options and we've seen that before.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=225)** This has to do with the availability of this IP address within the Microsoft zone.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=231)** So when we publish this IP address, it goes to a specific zone.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=235)** Do I want that IP address to be redundant across multiple zones?
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=240)** And these are availability zones.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=242)** Then I have my routing preference here.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=245)** So the routing preference will determine whether or not the connections to this public IP address will use the Microsoft network as the primary connection, basically utilizing a closer connection to the user that connects or will it use the backbone of the internet.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=265)** And when we say the backbone of the internet, we essentially mean your ISP, your internet service provider.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=270)** And will it naturally route through the ISP or will it prioritize through the Microsoft network?
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=277)** And of course, there are always cost implications to choosing one or the other.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=282)** And I'm going to save this configuration for this public IP address as my front end.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=287)** So this is now the front of my load balancer.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=290)** Next I'm going to specify my back end and the back end pool determines the back end.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=295)** So I need to create a backend pool.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=297)** So I'm going to call this Back Pool 1, and then I'm going to specify a virtual network.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=302)** So I have multiple virtual networks here that exist in my environment.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=305)** I'm going to pick one, and then I need to specify the resources that exist in this back end pool.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=312)** And here, I need to add resources.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=315)** And these resources will be in the form of the network interface that's available on this virtual machine named VM1.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=323)** So I'm adding this IP address associated with VM1 as a resource.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=329)** So again, we had our front end pool, our external IP address, and now it will pass on to this internal IP address.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=337)** So it allows me to now publish this resource of VM1.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=342)** If I had a more complex configuration, I would then deploy some inbound rules and outbound rules, which would essentially determine if I have multiple virtual machines, that would be balancing a specific application.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=355)** I can specify some inbound rules as well as network address translation if I want to grab the connections on a specific port and then redirect them on a different port, I can specify that with the inbound rules and outbound rules.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=369)** So I don't need to create those.
>
> **[6:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=371)** I'm simply going to complete the creation of my load balancer.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=374)** It runs through my validation.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-load-balancer?u=76281980&t=376)** And once the validation is past, I can click on the Create button to configure and deploy the load balancer in my environment.

> [!info]- Semantic Content
>
> **Code Keywords:** public (10), private (3), let (1), interface (1), pass (1)
> **Env Vars:** sku (4), vm1 (3), isp (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Creating public IP prefixes and addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=0)** - [Instructor] There's one type of resource that we commonly create in this course, and it's an IP address.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=6)** As we deal with networking, one of the core components of a networking infrastructure is your IP addressing scheme, all of the IP addresses that you use, both internally in your network and externally from the internet.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=21)** So for the most part, dynamic IP addresses are chosen when you create IP addresses in Azure on a public side.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=29)** And those are IP addresses that are owned by Microsoft and that can be made available to the organizations, the companies that utilize its infrastructure.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=39)** And then those IP addresses are the ones that people will use when they will be connecting to your resources from the internet.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=47)** Now, that's a dynamically assigned public IP address, and that for the most part is what we've been using throughout this course and what we'll continue to use.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=56)** But there are other types of IP addresses, and that's the part I want to highlight here.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=61)** So first of all, if you create an IP address for external access, we create a public IP address.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=68)** And again, we do this multiple times in the course, and we can specify dynamic IP address or a static IP address.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=77)** And that static IP address is something that we're going to specify here.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=81)** However, in many cases, we also want to define the IP addresses that we have or that we own, and we want those IP addresses to be persistent.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=93)** Now, for example, when you restart a virtual machine and you set it to be dynamically assigned IP addresses, it will keep on getting a new IP address unless you determine that you have a reserved IP address.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=105)** So a reserved IP address is an IP address that you will create and that you own and that you confirm that you own that IP address, and it will be persistent whenever you restart that virtual machine.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=118)** So that's a reserved IP address.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=121)** If you have a range of those IP addresses that you own, you can specify a custom IP prefix, which essentially is going to determine the starting values, those starting bits, in an address range, and it's going to determine that that is the range that you own and every address under that range is an address of yours that should not be attributed to anybody else, but can be used to be attributed to multiple resources in your infrastructure.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=150)** So a custom IP prefix is not just one reserved IP address, but it's a range of IP addresses.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=156)** We also have an IP group here, which is specifically for a use case of firewalls, so not as relevant for this conversation.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=164)** So what you will be creating most of the time, a public IP address, you own one IP address, you want it to be persistent.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=170)** You create a reserve IP address, you own many IP addresses in your range.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-public-ip-prefixes-and-addresses?u=76281980&t=175)** Then you create a custom IP prefix that determines what you own within your organization.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), static (2), continue (1), else, (1)
> **Definitions:** is an  (2), essentially is (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create an Azure Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=0)** - [Instructor] In this course, we've looked at building many resources inside of an Azure virtual network, and we've talked about connecting all those resources to that virtual network or a group of virtual networks, and then grouping those virtual networks together.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=16)** This all creates our internal infrastructure in Azure, where our resources will live and connect.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=23)** Now, if we want to connect all of that to the internet, we will want to secure those resources from the internet.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=30)** So we've talked about making it accessible from the internet by providing public IP addresses, but what if we really want to secure those resources?
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=38)** We'll want to create a resource that's very familiar to most administrators of on-prem solution, and that is a firewall.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=46)** So Microsoft Azure includes several firewall services, and here I'm in the Marketplace, the Azure Marketplace, and a simple search on the word firewall provides a long list of different firewall solutions from many different providers.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=60)** These firewall solutions are not unlike the many on-prem solutions that are hardware-based solutions, where they provide similar management options and very similar tools.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=71)** Some of them are quite advanced.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=73)** The cost of those also vary based on the vendor that provides this firewall solution.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=79)** So many firewall solutions to choose from, depending on your preferred vendor.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=85)** However, if you want, you can also create a firewall that is provided by Microsoft Azure, the Azure firewall service, and some of the concepts relating to firewalls are similar to the ones that are available directly from Microsoft, like the Azure firewall service, to the ones that are available from third-party vendor.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=103)** From a conceptual place, they are quite similar.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=107)** However, the feature sets, the management tools, and the options differ.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=112)** So let's create now an Azure firewall, and of course, I once again select my subscription and my resource group to host my firewall.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=122)** I'm going to give it a name, so I'm going to call this one firewall1.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=127)** You see that the name only needs to be unique within my organization.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=130)** It doesn't need to be globally unique.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=132)** I can specify the zone where that firewall will exist, and then I can start to, once again, select my SKU.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=138)** So the SKU will once again determine the availability of features, and here in this case, it's letting you know that the premium SKU provides SSL terminations and IDPS.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=149)** So some advanced functionalities that are not necessarily available from all firewalls.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=155)** SSL termination, for example, is a feature that many administrators want.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=158)** They want that SSL decryption, that termination to actually happen at the firewall level and not through a software base somewhere else.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=166)** There's also packet inspection that is very important to occur at a firewall level.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=171)** So most organizations will not want to pick a lower SKU to minimize costs unless they're doing it simply in a test environment where there's no critical data.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=181)** In your production environment, likely, you will want to pick the best SKU or the best third-party product that meets your needs.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=187)** From a policy standpoint, we can also assign our management of our firewall to a group of firewalls so we can have many firewalls in our organization and then manage them using policies.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=201)** So that's a common way of doing firewall management.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=204)** And here we can select a policy if we've created one.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=207)** I don't have one.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=208)** But I would need to create one in order to apply it in this SKU.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=211)** Next, I would select a virtual network that would be connected to my firewall and a subnet as well.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=218)** This virtual network and this subnet would not be used for other purposes.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=222)** It would be dedicated for my firewall.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=226)** Also, I can enable a firewall management for my NIC, my network interface.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=231)** And this is, again, another way of really managing the firewall using an external product.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=237)** You'll want to configure alerts.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=239)** You'll want to configure monitoring of that firewall to ensure that whenever there is an intrusion or an attempt of intrusion, you are cataloging this information, and then being able to act upon it to make sure that you're securing external access to your organization as efficiently as possible.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=256)** So these are all the options available for creating this basic firewall, is what I would consider it.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/create-an-azure-firewall?u=76281980&t=261)** The Azure firewall is relatively basic in functionality compared to all of the other third party firewalls, so I would highly recommend that you research the capabilities and the options of these third party firewall to see which one is going to meet the needs of your organization.

> [!info]- Semantic Content
>
> **Env Vars:** sku (6), ssl (3), idps (1), nic (1)
> **Code Keywords:** public (1), from, (1), let (1), case, (1), else. (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Connecting Your On-Premises Network to Azure

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating Azure ExpressRoute
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=0)** - [Instructor] There are essentially three methods for connecting your on-premises data center to an Azure infrastructure.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=7)** You can build a virtual private network or connect your on-premises VPN to a virtual network gateway that exists in Azure, you can also create an Azure private link that connects to private endpoints in Azure, or you can create a dedicated connection between your on-premises data center and the Azure environment if you have a hybrid coexistence environment by using an Azure ExpressRoute.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=39)** This is the fastest, this is the most reliable, and the one that has the most configuration options for having that private secure link between Azure and your on-premises infrastructure.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=52)** However, it is also the most expensive solution.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=55)** So let's go ahead and create the infrastructure required for an ExpressRoute within your Azure portal.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=62)** So what I did here is open up the Marketplace and I initiate a search for ExpressRoute.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=68)** I also filtered it by asking for Azure services only.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=72)** And you'll see here that the ExpressRoute is the first option.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=76)** You'll see that there are other options here as well, and we will go through some of these options in later videos in this course.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=84)** So the ExpressRoute, I can create by clicking on the Create button over here, and you'll see that once again, I have to select my Subscription and my Resource group, but then I have an interesting new option here, which is the Resiliency option.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=101)** Now if I select different Resiliency options, I see that this diagram below opens up with different representation of what I am building.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=111)** What you're looking at here is the Maximum Resiliency option, which basically means that you have two redundant links within a location and a second redundant location.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=123)** So a total of four links for your Azure ExpressRoute.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=128)** Now what did that mean?
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=129)** It means that you have a connection from your on-premises network to a partner edge.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=135)** A partner edge is essentially a local provider, a telecom provider in your region, and then from that telecom provider directly a link to Microsoft.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=145)** So the provider has to be an approved provider, and I'll show you how we select the provider, and they have a dedicated connection to the Microsoft infrastructure through their Microsoft Enterprise Edge connection points.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=159)** Now what you create in order to connect to these is called an ExpressRoute circuit.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=165)** So we are building here an ExpressRoute circuit, or for the Maximum Resiliency option, two ExpressRoute circuits.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=172)** If I select High Resiliency, then I have a resilient infrastructure with two connections to the partner edge and to the Microsoft location with a second peering location.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=186)** If I select Standard Resiliency, then my ExpressRoute circuit still has two links, but they are in the same location.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=195)** So there's not a second location option.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=197)** As you can imagine, as you go up in the Resiliency options, the price for connection goes up as well.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=204)** So as I go down below here, I'm selecting the options for my ExpressRoute circuit.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=208)** I can give it a name, so this is going to be circuit one.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=213)** Then I select my provider.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=215)** So here, I have a provider option.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=218)** In order to select the list of provider, I need to first select the city where I'm located.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=223)** So I'm located in Canada, in the city of Montreal.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=226)** So I did a search for Montreal, and I see that it is a city that has approved peering locations.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=232)** If your city does not appear in the search box here, it means that it doesn't have such peering location, and you'll want to select the nearest city to your geographical location so that you can have a fast connection point to that local provider.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=248)** Then I'm going to select the provider, and this is the list of providers that are approved in my peering location.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=254)** So for example, I'm going to pick the first one here, which is Bell Canada, a large telecom provider in Canada.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=260)** And then I'm going to select my bandwidth.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=262)** So the bandwidth is the maximum bandwidth that can be used on the ExpressRoute circuit, and this is defined by the provider.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=270)** So in my case, my provider has a limit of 10 gigabytes per second, and you may have a provider that has more or less than that depending on the availability options of your provider.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=283)** And I have my SKU as well.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=285)** So my SKU determines also the speed and the options that will be available.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=291)** And of course, as I go up in SKU cost, the costs are higher.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=296)** Note that the SKU and the billing model cannot be changed after I'm going to select my circuit, after I've created my circuit.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=305)** And here, I have also a metered and unmetered connection.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=309)** So the metered and unmetered connection is basically an unlimited connection through this peering location.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=316)** If you select metered, of course, if you reach the maximum amount of bandwidth available in your plan, then you will be metered down and you will expect to have connection speeds that will be lowered by the provider.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=328)** Unlimited, of course, will incur greater cost.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=332)** So once I'm done selecting all these options, I can click on Review + create.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=337)** I'm not going to review and create this resource because it is quite costly, and as soon as I create the resource in my infrastructure, I'm going to start incurring cost, and I don't want to do that for this demonstration.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-azure-expressroute?u=76281980&t=348)** But these are all the options in order to create your ExpressRoute circuit, your ExpressRoute connecting your on-premises data center to Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** private (4), let (1), case, (1)
> **UI Navigation:** select the (5), click on (1)
> **Env Vars:** sku (4), vpn (1)
> **Definitions:** means that (2), basically means (1), is called (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Tools:** azure portal (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Creating an Azure Private Link service
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=0)** - [Instructor] Similarly to the Azure Express route, there is another method of providing a direct connection to our resources, either from a non-prem solution or directly between resources that are stored in Azure, if you want to keep them out of the internet.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=16)** So let's say you have a resource in Azure that needs to be accessed by another resource.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=21)** It may be in your subscription, it may be in another subscription, and you want that connection to stay on the Microsoft backend, to not be included in the overall internet backbone.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=32)** In order to do that, we would use private connections or private links.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=36)** So we already have some type of a private connection, which is a private endpoint.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=41)** In an earlier video in this course, we created a private endpoint for our SQL database resource.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=48)** So this resource can be accessed directly by this endpoint that we created.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=53)** We gave it an IP address, and of course, authentication still needs to happen when connecting to that endpoint, but it is a endpoint resource that was created.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=63)** We can create additional endpoint resources for any type of resource that supports it.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=69)** And most resources that contain data or service, an application, can have an endpoint.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=76)** That endpoint can be private or public.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=78)** And then we can have a connection directly to that endpoint.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=83)** As well, we can publish existing resources through Private Link services.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=88)** So Private Link services allows you to publish other resources such as virtual machines, for example, and you can put those virtual machines behind a load balancer.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=97)** Actually, you must put those virtual machines behind a load balancer in order to publish them with a Private Link service.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=104)** So for example, if you have an application or a service that runs on multiple virtual machines, those virtual machines are load balanced, and then those merchant machines can be accessed by an application or by users or consumers of that service through a Private Link service.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=123)** Of course, these components require additional costs.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=126)** For hybrid environments, if your organization uses Azure Arc, relatively new service, that allows you to extend your infrastructure for hybrid infrastructures, you can create Azure Arc Private Links, and then allow connections to pass services, for example, platform as a service services.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=145)** You can also use Azure Monitor to monitor these various links.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-an-azure-private-link-service?u=76281980&t=150)** So I access this Private Link center by adding a Private Link resource from the Azure marketplace, and I recommend that you use that if you want to control the connections to the resources that specifically support Azure private endpoints, or resources that you want to publish behind Azure Private Links, such as virtual machines.

> [!info]- Semantic Content
>
> **Code Keywords:** private (15), let (1), public (1), require (1), pass (1)
> **Analogies:** for example (3), such as (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Creating a virtual network gateway to support a VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=0)** - [Instructor] So I mentioned that there are multiple ways to extend your on-prem network to Azure or to create direct connections to your Azure resources, and one of those methods is the cheapest of all methods available if you are wanting to create a secure or direct link, and that is the virtual private network, VPN.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=23)** So you are likely comfortable with the term VPN if you've worked on on-prem solutions, and you've worked with networks that contain multiple access to resources from users that work remotely or extending your network between multiple sites.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=40)** Virtual private networks are common for this type of scenario.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=44)** So I often get the question, how do I create a VPN in Azure?
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=49)** So just a search of the resource VPN gives you some interesting results.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=54)** There are no VPNs in Azure, so you're not creating a VPN in Azure.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=59)** You are going to create a connection to your VPN from Azure.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=63)** So looking at VPN in Azure, you'll see that ExpressRoute is the most common result because an ExpressRoute is sort of a simulated or replacement for a VPN when you look at the concept of extending a solution.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=79)** Now, if I want to create a virtual private network, similarly to the way that I have it on my on-prem solution, I'm going to create a virtual network gateway, again, the endpoint, the connection to my VPN in Azure.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=95)** So to do that, I'm going to add a resource and look for a virtual network gateway.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=105)** And you'll see that there are multiple types of resources that become available.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=109)** Those resources are third-party VPN solutions, so third-party virtual network gateways that would exist in Azure to connect to an on-prem VPN solution, and that VPN solution could be a hardware solution.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=123)** So there are hardware appliances that are dedicated for VPNs, or there's software VPNs.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=130)** And this allows you to create a site-to-site connection between Azure and your on-prem network.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=137)** So let's go ahead and deploy a virtual network gateway.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=141)** So I click on Virtual network gateway and click on Create.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=145)** So of course, once again, I'm going to select my subscription and my resource group that is going to be used for my virtual network gateway.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=154)** Then I'm going to give it a name, so let's call this VirtualNet1, and I'm going to select the Region that's going to be used to deploy this resource.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=166)** Note that you can always use an Azure Extended Zone if you wish to.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=170)** Azure Extended Zones are essentially zones that can be closer to your resources.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=175)** If you have issues with lag or low bandwidth availability in terms of connections to the internet, you can create an Azure Extended Zone or use, actually, I should say, not create, but use an Azure Extended Zone to deploy your resources in that zone that would then be closer to your resources.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=193)** I actually don't have any Azure Extended Zones in my environment, so I can't actually deploy it.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=198)** It is based on Microsoft's availability based on your location.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=201)** So then I can specify the gateway type.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=204)** So am I connecting to a VPN, or on the other end, will it be an ExpressRoute?
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=209)** So I can determine what the connection will be.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=211)** Here, this will be to a VPN.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=214)** So I'm going to specify the SKU of the resource I'm going to be deploying.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=218)** There are many SKUs available, and the SKUs then come with the various options, of course.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=224)** As well, some of the SKUs can be modified after it's been created, not all.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=229)** If you want to see the rules of what can and cannot be changed, just hover over the i tag over here, and you get some of that information.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=237)** As well, the generations determine the options, and then the virtual network, so I'm going to deploy this resource in a virtual network.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=245)** I can either pick an existing virtual network.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=248)** So this virtual network here cannot be used because it already contains some resources.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=253)** It has to be an empty virtual network.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=255)** So I need to create a virtual network if I don't already have an empty one.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=260)** So I'm going to add a virtual network, and I'm going to call this Vnet5, and I'm going to add it to my resource group.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=273)** Select my resource group here, and I'm going to select an address space and a subnet.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=282)** Click OK, so I've created now a new virtual network, and there's a gateway subnet address range that is determined.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=290)** This is the range where my virtual network gateway will be added.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=293)** So any IP addresses that need to be assigned to the resources that are on my end need to be within this range here.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=301)** I can also specify a public IP address, so since there is a connection from my on-prem solution, it is going to be going over the internet.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=310)** So I need to either provide an existing public IP address or create a new one.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=316)** So I'm going to click on Use existing, but I don't have one that's not already associated to the resource.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=322)** So again, the public IP address must be unassociated.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=325)** This one is already associated, so let's go ahead and create a new one, so PubIPVPN1.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=333)** And there's my SKU that are also determined by my gateway, and then the Availability Zone, so the type of availability that I want to have.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=343)** And then I can specify various modes, so active-active mode as opposed to active-passive is basically the type of redundance that I'm going to have with this virtual private network connection.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=355)** BGP is the type of routing protocol, whether or not it'll be allowed.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=359)** BGP is a routing protocol, and whether or not we will have access to the key vault.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=363)** Now this is a new functionality.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=365)** Actually, it's the first time I'm seeing it.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=366)** It's still in preview.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=367)** Whether or not it's able to access the key vault.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=370)** So when I click on Review + create, it's going to run it's validation to ensure that all of the parameters I've selected are correct and can be approved.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=378)** And here I have a failed validation.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=380)** So let's click on Click here to review the detail to see what has failed.
>
> **[6:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=385)** And I see here that I have my resource that is disallowed by my policy.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=390)** So what this means here is that I have a security policy that's been applied to my environment that prevents me to create a virtual private network gateway.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=398)** And the reason for that is that this resource is a very costly resource.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=402)** So in my environment, I have created several policies that prevent the creation of various resource.
>
> **[6:49](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=409)** And I've mentioned this before in ExpressRoute that I don't actually go all the way to the end to create the resource 'cause they're very costly.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=415)** So in order to prevent any mistakes and create those, I have these policies that prevent the creation of those costly resources.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=422)** If not, all of the details here would've been correct.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=425)** My resource would've been created, and then I can configure my VPN on my on-prem network to connect to my virtual network gateway that now exists in my Azure solution.
>
> **[7:17](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/creating-a-virtual-network-gateway-to-support-a-vpn?u=76281980&t=437)** The result of that would be that I've extended my network by creating a site-to-site VPN, and so that users and resources and services can access each other on both networks through my virtual private network gateway.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (16), sku (2), bgp (2)
> **Code Keywords:** private (6), let (4), public (3), type. (1)
> **UI Navigation:** click on (5), select the (1)
> **Definitions:** is a  (4)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Learning more about Azure networking
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980&t=0)** - [Instructor] Thank you for joining me in this course.
>
> **[0:02](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980&t=2)** If you want to learn more about Azure Virtual Networking and Azure, I recommend that you access the various free resources available from Microsoft to build solutions, deploy solutions directly in Azure, and then you can play around with all of the various networking configurations and see how they work and adapt before you deploy them on your live network.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980&t=25)** If you're looking to go more in-depth on the various features and products that I've discussed throughout this course, I suggest that you dive into the Virtual Network documentation that is available on learn.[microsoft.com](https://microsoft.com).
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980&t=39)** There, you will find tutorials, and very detailed documents that describe the various features, products, and services that are used to implement Azure Virtual Networking.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-networking-concepts-24557931/learning-more-about-azure-networking?u=76281980&t=51)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[David Elfassy]]

## Skills Covered

- Microsoft Azure

## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Deploying Microsoft Entra ID]] | **6 of 8** | [[Manage Storage in Azure]] →

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)