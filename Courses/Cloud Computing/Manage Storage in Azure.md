---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: manage-storage-in-azure
url: "https://www.linkedin.com/learning/manage-storage-in-azure"
duration_minutes: 288
duration: 4h 48m
level: Intermediate
updated: 10/12/2023
learners: 15901
skills:
  - Microsoft Azure
  - Cloud Storage
exercise_files: true
github: "https://github.com/LinkedInLearning/manage-storage-in-azure-4413556"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGz9LokEdqyeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696813122151?e=2147483647&amp;v=beta&amp;t=c1OT2DujyEF-D8FgCZjziYOopQvCe13wNGwMKAzXFEQ"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
prev_courses:
  - '[[Microsoft Azure- Networking Concepts]]'
next_courses:
  - '[[Controlling Cost with Azure Management and Billing]]'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":7,"total":8,"prev":"Microsoft Azure- Networking Concepts","next":"Controlling Cost with Azure Management and Billing"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/microsoft-azure
  - skill/cloud-storage
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Manage%20Storage%20in%20Azure.md)

![Manage Storage in Azure](https://media.licdn.com/dms/image/v2/D560DAQGz9LokEdqyeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696813122151?e=2147483647&amp;v=beta&amp;t=c1OT2DujyEF-D8FgCZjziYOopQvCe13wNGwMKAzXFEQ)

# Manage Storage in Azure

> A strong understanding of cloud storage is vital not only for successfully managing data, but also for optimizing cloud spend. In this course, instructor Nicole Stevens covers important aspects of storage in Azure, including code-related deployments, deploying environments with storage accounts via code and Azure Bicep, along with how to authorize access through SDKs for developers. This demo-focu

> [LinkedIn Learning](https://www.linkedin.com/learning/manage-storage-in-azure) | 4h 48m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understanding storage in Azure](#understanding-storage-in-azure)
  - [What you should know](#what-you-should-know)
- [**1. Overview of Azure Storage**](#1-overview-of-azure-storage) (10 videos)
  - [Azure Storage and the storage services](#azure-storage-and-the-storage-services)
  - [Azure Storage types and performance tiers](#azure-storage-types-and-performance-tiers)
  - [Creating a storage account in the Azure portal](#creating-a-storage-account-in-the-azure-portal)
  - [Working with Azure Storage data in the portal](#working-with-azure-storage-data-in-the-portal)
  - [An overview of Azure Table storage and Azure Storage Queues](#an-overview-of-azure-table-storage-and-azure-storage-queues)
  - [Working with Azure Storage data in Azure Storage Explorer: Adding Tables, entities, queues, and messages](#working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages)
  - [Migrating and transferring data into Azure Storage](#migrating-and-transferring-data-into-azure-storage)
  - [Migrating and transferring data into Azure Storage using AzCopy](#migrating-and-transferring-data-into-azure-storage-using-azcopy)
  - [Hierarchical namespace and SFTP for blobs](#hierarchical-namespace-and-sftp-for-blobs)
  - [Hierarchical namespace and SFTP for blobs in practice](#hierarchical-namespace-and-sftp-for-blobs-in-practice)
- [**2. Redundancy, Disaster Recovery, and Replication**](#2-redundancy-disaster-recovery-and-replication) (5 videos)
  - [High availability and durability for Azure Storage](#high-availability-and-durability-for-azure-storage)
  - [Backing up Azure file shares and operational backup for blobs](#backing-up-azure-file-shares-and-operational-backup-for-blobs)
  - [Backing up Azure file shares and blobs demo](#backing-up-azure-file-shares-and-blobs-demo)
  - [Disaster recovery and failover](#disaster-recovery-and-failover)
  - [Object replication for blob data](#object-replication-for-blob-data)
- [**3. Networking and Infrastructure as Code for Azure Storage**](#3-networking-and-infrastructure-as-code-for-azure-storage) (7 videos)
  - [Storage account firewalls and virtual network access](#storage-account-firewalls-and-virtual-network-access)
  - [Private endpoints for Azure Storage](#private-endpoints-for-azure-storage)
  - [Create and manage a storage account with Azure PowerShell](#create-and-manage-a-storage-account-with-azure-powershell)
  - [Executing Azure PowerShell in scripts with the Cloud Shell code editor](#executing-azure-powershell-in-scripts-with-the-cloud-shell-code-editor)
  - [Create and manage a storage account with the Azure CLI](#create-and-manage-a-storage-account-with-the-azure-cli)
  - [Deploy infrastructure for Azure Storage using Azure Bicep](#deploy-infrastructure-for-azure-storage-using-azure-bicep)
  - [Deploy infrastructure for Azure Storage using Azure Bicep demo](#deploy-infrastructure-for-azure-storage-using-azure-bicep-demo)
- [**4. Authorizing Operations on Azure Storage**](#4-authorizing-operations-on-azure-storage) (7 videos)
  - [The control plane and the data plane](#the-control-plane-and-the-data-plane)
  - [Authorize with shared keys](#authorize-with-shared-keys)
  - [Authorize operations with Entra ID and Azure RBAC](#authorize-operations-with-entra-id-and-azure-rbac)
  - [Authorize operations with Azure AD and Azure ABAC storage](#authorize-operations-with-azure-ad-and-azure-abac-storage)
  - [Accessing storage account data from other Azure services](#accessing-storage-account-data-from-other-azure-services)
  - [Enable passwordless Entra ID–based access to Azure Storage](#enable-passwordless-entra-idbased-access-to-azure-storage)
  - [Shared access signatures and access delegation](#shared-access-signatures-and-access-delegation)
- [**5. Mounting and Synching to Azure File Shares**](#5-mounting-and-synching-to-azure-file-shares) (3 videos)
  - [Setting up Azure File Sync](#setting-up-azure-file-sync)
  - [Mounting a file share to Windows Server](#mounting-a-file-share-to-windows-server)
  - [Mounting a file share to Linux](#mounting-a-file-share-to-linux)
- [**6. Protecting Azure Storage Data**](#6-protecting-azure-storage-data) (6 videos)
  - [Encryption at rest and in transit](#encryption-at-rest-and-in-transit)
  - [Encryption at rest, encryption scopes, and encryption in transit in practice](#encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice)
  - [Soft delete and versioning for blobs, containers, and file shares](#soft-delete-and-versioning-for-blobs-containers-and-file-shares)
  - [Change feed for blob data](#change-feed-for-blob-data)
  - [Point-in-time restore for blob data](#point-in-time-restore-for-blob-data)
  - [Immutable storage for business-critical blob data](#immutable-storage-for-business-critical-blob-data)
- [**7. Managing Cost and Monitoring Azure Storage**](#7-managing-cost-and-monitoring-azure-storage) (6 videos)
  - [Billing, reserved capacity, and network routing preference for Azure Storage](#billing-reserved-capacity-and-network-routing-preference-for-azure-storage)
  - [Storage tiers and blob rehydration](#storage-tiers-and-blob-rehydration)
  - [Manage storage tiers for blobs and files](#manage-storage-tiers-for-blobs-and-files)
  - [Lifecycle management policies and rules](#lifecycle-management-policies-and-rules)
  - [Monitoring Azure Storage](#monitoring-azure-storage)
  - [Monitoring Azure Storage with storage insights and workbooks](#monitoring-azure-storage-with-storage-insights-and-workbooks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about Azure management](#learning-more-about-azure-management)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding storage in Azure](https://www.linkedin.com/learning/manage-storage-in-azure/understanding-storage-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/understanding-storage-in-azure?u=76281980&t=0)** - By 2025, it is estimated that between 150 to 200 zettabytes of data will be created, with large enterprises tripling their [[Unstructured Data]] storage capacity of files and blobs when compared to today.
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/understanding-storage-in-azure?u=76281980&t=16)** With over 50% of organizations experiencing data breach in the last two years and cloud spend waste estimated at 28%, it is no surprise that the latest State of the Cloud report places managing spend, security, and lack of expertise as the top challenges facing organizations in the cloud.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/understanding-storage-in-azure?u=76281980&t=37)** My name is Nicole Stevens and I've been architecting [[Data Storage]] solutions for over 20 years.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/understanding-storage-in-azure?u=76281980&t=42)** Join me as we explore managing [[Microsoft Azure|Azure]] Storage to help you start building the expertise to overcome these challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (1), [[Data Storage]] (1), [[Microsoft Azure|Azure]] (1)
> **Cross-References:** in the last (1)
> **Speakers:** - by (1)

#### [What you should know](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=0)** - [Instructor] This course starts with beginner level concepts and a walkthrough in the [[Microsoft Azure|Azure]] portal to create a storage account.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=7)** But quickly moves into an intermediate level, therefore, a good understanding of how to navigate around the portal is essential.
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=15)** [[LinkedIn]] Learning has some excellent short courses on working with the Azure portal, such as this one, "Navigating the Azure portal."
>
> **[0:24](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=24)** There are also sections of this course that require connecting through the remote desktop to a virtual machine.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=30)** If this is not something you have attempted before or you need to brush up on this, there are further short courses on LinkedIn Learning, including this one on connecting to [[Virtual Machines]] in Azure.
>
> **[0:44](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=44)** The companion [[GitHub]] repository to this course contains [[Infrastructure as code (IaC)|Infrastructure as Code]] files to create each environment for you, so that you can follow along live if you wish.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=54)** Each top level folder within the GitHub repository matches with a chapter, and within each chapter, there is a folder for each environment with a readme file, explaining the commands required to create the environment at the folder level.
>
> **[1:09](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=69)** To match the instructions to the environment, you can click through on the instructions from the Video title table.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=78)** The commands in the readme have been designed to run in the Azure Cloud Shell, which can be accessed using this button from within the portal.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=88)** Just drag that up.
>
> **[1:30](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=90)** You'll need to be working from within the Bash shell, and then clone the GitHub repository, which you can do by returning to the root of the repository, clicking on the Code button, copying the SSH command, back into the portal, and using [[Git]] clone.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=114)** Once the repository is command, you can use the command from the readmes to create each environment.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=121)** If you are unfamiliar with Git and GitHub, there are multiple courses available on LinkedIn Learning, including this full course on Git essentials.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=130)** Use of Git when managing cloud environments is a key skill, so I'd very much recommend checking these out.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=137)** The walkthroughs for each video are deployed to a resource group.
>
> **[2:21](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=141)** Therefore, if you'd like to keep your costs down, make sure you understand how to delete a resource group, whether that's from the command line, or as I'm sharing here, from within the portal.
>
> **[2:33](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=153)** I would also recommend setting up Visual Studio Code if you would like to follow along live, especially for the Infrastructure as Code sections using Bicep.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=162)** VS Code is available for all major operating systems.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=167)** And once installed, I would also recommend installing the Bicep extension, which enables IntelliSense and validation for your Bicep files, and the Azure extension, so that you can explore your subscription from inside VS Code as well as the portal.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=183)** Throughout the course, we will be exploring the content of our Azure Storage accounts using Azure Storage Explorer.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=189)** So if you'd like to follow along, I'd recommend installing the Storage Explorer from the link currently being displayed.
>
> **[3:16](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=196)** That's everything you need to know and install to get the best out of this course.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/what-you-should-know?u=76281980&t=201)** So let's get cracking on our storage journey by jumping into the first video, Azure Storage and the storage services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[GitHub]] (4), [[Git]] (4), [[LinkedIn]] (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (2)
> **Tools:** github (4), azure portal (3), vs code (2), bash (1), command line (1)
> **CLI Commands:** git (4), ssh (1), make (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** ssh (1)
> **Documentation:** the readme (1)
> **Analogies:** such as (1)


### 1. Overview of Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Storage and the storage services](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=0)** - [Instructor] When thinking about transitioning an application to the cloud or building from scratch in the cloud, it is highly likely the application will need to persist some data.
>
> **[0:10](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=10)** [[Microsoft Azure|Azure]] Storage is the solution in Azure for supporting modern [[Data Storage]] requirements in the cloud.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=18)** There are many benefits to a developer or administrator when working with Azure Storage.
>
> **[0:24](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=24)** Azure Storage is accessible from anywhere over HTTP or HTTPS.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=30)** Developers can access data through SDKs in many languages or through the Storage [[Representational State Transfer (REST)|REST]] APIs.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=37)** The Azure Portal and Azure Storage Explorer enable users to visualize and work with data through a UI.
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=46)** Azure Storage is secure when correctly configured.
>
> **[0:49](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=49)** Data is encrypted at rest by default and fine-grained access control can be provided to your data, ensuring only permitted users and systems are granted access.
>
> **[1:01](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=61)** It's scalable with deployment configuration options to match an application or project's data size and performance requirements.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=70)** Azure Storage is managed by [[Microsoft]].
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=72)** Therefore, maintenance, updates, and fixing of critical issues are taken care of for you.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=78)** Azure Storage is highly available with redundancy built in which can be configured to protect from local outage or a natural disaster.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=88)** In this video series, we will be reviewing each of these benefits and how to configure them.
>
> **[1:34](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=94)** Azure Storage is a shared pool of storage.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=97)** It provides a namespace that can be used to deploy different storage services.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=102)** Each of these services has been designed to cater for the various [[Forms]] that modern data can take, from simple text files to documents and stream videos.
>
> **[1:53](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=113)** Determining which storage service or combination of storage services you need for an application or project requires knowledge of each service's suitability to hold specific types of data.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=126)** Let's break this down further by looking at each storage service listed on this slide.
>
> **[2:12](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=132)** Blob storage is designed to hold huge amounts of [[Unstructured Data]].
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=137)** To facilitate this, blob storage has three types of blobs: block blobs, append blobs, and page blobs.
>
> **[2:27](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=147)** Block blobs are optimized for efficient upload of large amounts of text and binary data, making block blobs perfect for storing images, documents, media, and backup and archive objects.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=159)** Block blobs can also be used to hold files for static websites.
>
> **[2:44](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=164)** Append blobs are optimized for fast appends as data can only be added to the tail of an append blob.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=171)** This makes workloads that require logging a perfect use case for an append blob.
>
> **[2:57](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=177)** Page blobs are optimized for random read/write operations of 512-byte pages.
>
> **[3:04](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=184)** This enables virtual disk storage for [[IaaS|infrastructure as a service]], also known as [[IaaS]], VMs on Azure.
>
> **[3:12](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=192)** However, VHD's page blobs in a storage account are not Microsoft's recommended method for supporting disk storage for [[Virtual Machines]] in Azure.
>
> **[3:24](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=204)** Azure Managed Disks are the recommended method of disk storage.
>
> **[3:28](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=208)** Azure disks simplify disk management for Azure VMs by managing the storage account for you, abstracting away the storage account and VHD implementation.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=218)** This means you no longer have to create a storage account to hold your disks.
>
> **[3:42](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=222)** Azure does all this for you.
>
> **[3:44](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=224)** This also means you no longer have to design around storage account limits for multiple disks.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=231)** Some features of unmanaged disks were not available with managed disks historically.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=235)** This is no longer the case, but increased capability is available for managed disks.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=242)** Unmanaged disks are gradually being deprecated.
>
> **[4:05](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=245)** And from the end of September 2025, all VMs with unmanaged disks will be stopped and deallocated.
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=254)** Azure Files is a fully managed file share service in Azure.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=258)** The shares can be accessed by the network file system and server message block protocols and therefore can be mounted to [[Linux]] and [[Windows]] servers or macOS clients.
>
> **[4:30](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=270)** REST API access can be direct or through SDKs which are available in multiple languages.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=277)** Azure Files can also be used to persist state for resources running containers in Azure such as Azure Container Instances, Azure Container Apps, and Azure [[Kubernetes]] service.
>
> **[4:51](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=291)** A further service to be aware of is Azure NetApp Files which is an enterprise class file storage service in Azure.
>
> **[4:59](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=299)** This is designed for high performance and low latency use cases.
>
> **[5:04](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=304)** NetApp Files are not implemented through storage accounts.
>
> **[5:08](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=308)** So to compare the two services, visit this link in the Azure documentation to Azure Files and NetApp Files.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=318)** The Azure Queue Storage Service is for messages which have a default time to live of seven days, but can be configured to live indefinitely.
>
> **[5:27](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=327)** Each message can have no more than 64K in size, but the storage queue size is only limited by the capacity limits of a storage account.
>
> **[5:38](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=338)** Azure Queue Storage is often used to offload work to separate application components, decoupling the components, and therefore building in resilience to component failure.
>
> **[5:50](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=350)** Azure Table Storage enables the storage of [[NoSQL]] entities.
>
> **[5:55](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=355)** These entities can be up to one meg size and are stored as one or more key value pairs.
>
> **[6:02](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=362)** The structure of each entity in the table can be different across each of the entities.
>
> **[6:08](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=368)** Table data is partitioned by its partition key which load balances the data across nodes and then it is uniquely identified by including its row key.
>
> **[6:20](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=380)** If you don't require complex searching of your data, Azure Table Storage is a fast, low-cost option to other NoSQL resource types in Azure, such as Cosmos DB which also has an implementation of Azure Tables.
>
> **[6:36](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-and-the-storage-services?u=76281980&t=396)** To compare Azure Tables and Azure Cosmos DB, follow this link to the Azure Table Storage documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (36), [[Representational State Transfer (REST)|Rest]] (3), [[Microsoft]] (2), [[NoSQL]] (2), [[Data Storage]] (1)
> **Env Vars:** rest (2), vhd (2), http (1), https (1), api (1)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **Analogies:** such as (2)
> **Best Practices:** recommended (2)
> **Code Identifiers:** macos (1)
> **Tools:** azure portal (1)
> **Warnings:** be aware (1)

#### [Azure Storage types and performance tiers](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=0)** - [Instructor] There are four types of [[Microsoft Azure|Azure]] Storage account available with features to support the different requirements of a workload's persisted data.
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=9)** The first we'll look at is the general purpose storage account.
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=13)** It is recommended by [[Microsoft]] for most Azure storage scenarios.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=18)** It has built-in support for all the Azure storage services and all the storage redundancy options and we'll explore all these options in a later video.
>
> **[0:29](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=29)** The standard general purpose V2 account has a five petabytes of capacity that can be extended on request to Azure support.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=39)** There are no limits to the number of blobs, files, shares, queues, entities, or messages that can be used to fill up this capacity.
>
> **[0:48](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=48)** Each storage account can handle up to 20,000 requests per second and standard storage accounts are backed by hard disk or HDD based [[Hardware]], which for some workloads, will not deliver a high enough level of performance.
>
> **[1:05](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=65)** Because of this, Azure offers three premium storage account types.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=71)** These are backed by solid state drives or SSDs.
>
> **[1:14](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=74)** However, the performance of each of these account types does bring in some trade-offs to enable this performance.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=83)** Let's compare these for block blobs and file shares.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=87)** Each of the premium storage accounts affixed to a specific service, so for premium block blobs, this is for block blobs only.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=97)** Also, a premium account has regional redundancy only with a single data center or multiple data centers in one region, and this is due to the latency requirements of a premium block blob account, as premium block blob accounts are optimized for high numbers of transactions with a low latency, enabling hundreds of thousands of requests per second.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=123)** In some scenarios where a workload continually executes a large number of transactions, a premium block blob storage account may be more cost effective than standard storage.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=135)** This is due to premium block blob storage having a high storage cost, but lower transaction cost when compared to a standard storage account.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=144)** There will actually be a crossover point where premium accounts may become more cost effective.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=150)** To read how you can calculate this for your workloads, please follow this link to the Microsoft documentation on premium block blob cost effectiveness.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=162)** File shares also have a premium option with similar trade-offs between features, performance, and cost.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=169)** Azure premium file shares will only allow the creation of shares and files with regional redundancy options only.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=179)** The five petabyte capacity of a standard account means that multiple shares with large files enabled to the maximum of a hundred terabytes can be housed in the account.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=190)** However, with a premium file share account, the maximum capacity is a hundred terabytes with the same maximum file share size of 100 terabytes.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=201)** One of the most important differences here are the billing models.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=205)** A standard account is pay as you go.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=207)** You will only be billed for what you use.
>
> **[3:30](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=210)** Therefore, if you create a hundred terabyte share but only store a hundred giga files in it, you will only be charged for that 100 gig plus transaction costs.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=221)** With a premium file share, you are charged for the full provision file share size so using the same example, you would be billed for the full 100 terabytes.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=231)** Another key difference between the two is IOPS and throughput, standard file shares have a static IOPS of a thousand unless large files are enabled when it increases to 20,000 per account.
>
> **[4:05](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=245)** But don't forget, the total IOPS for a standard storage account is 20,000 IOPS.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=250)** So if you need to run multiple standard shares at 20,000 IOPS each, you're going to need multiple standard V2 storage accounts.
>
> **[4:20](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=260)** With premium file shares, the IOPS grows to a hundred thousand with the provision capacity of the file share, along with throughput, which makes premium file shares perfect for smaller data objects.
>
> **[4:33](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=273)** For detailed information on these figures, for planning and Azure files deployment, see this Microsoft Learn article for Azure file [[Scalability]] and performance targets.
>
> **[4:45](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=285)** There are still two legacy account types, standard V1, which supports blobs, queues, files, and tables and standard Blob Storage for block and append blobs.
>
> **[4:57](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=297)** Historically, standard account types were created with the classic deployment model, which some organizations may still be using.
>
> **[5:05](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=305)** It is also possible in some scenarios that a legacy account may have been more cost effective, however, with classic deployment being deprecated and legacy storage pricing being brought in line with current storage pricing, if you have any legacy types in your organization, it is definitely time to switch.
>
> **[5:26](https://www.linkedin.com/learning/manage-storage-in-azure/azure-storage-types-and-performance-tiers?u=76281980&t=326)** To this point, Microsoft does not recommend using these legacy types and they are no longer available for selection through the standard create storage account blade of the Azure portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Microsoft]] (4), [[Hardware]] (1), [[Scalability]] (1)
> **Env Vars:** iops (6), hdd (1)
> **Best Practices:** recommended (1), don't forget (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a storage account in the Azure portal](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=0)** - [Instructor] The storage account types and services that we have discussed so far are part of the minimum requirements to create a storage account in the Portal.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=8)** So, we can switch to the [[Microsoft Azure|Azure]] Portal and run through how to create a storage account with just these essential options.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=17)** To create a storage account, you can search for the storage account resources at the top of the Portal by clicking into the search bar and typing storage accounts.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=27)** Storage accounts is now listed in the dropdown under services.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=33)** If we click on it, we can enter the storage accounts blade.
>
> **[0:38](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=38)** At the top right of the storage accounts blade, we can click on Create, and this will take us to the creation blade for a storage account.
>
> **[0:48](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=48)** The storage account's creation blade now opens at the Basics tab where we can see all of the required values marked with red asterisks.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=59)** The subscription is a container for creating resources and billing them in Azure.
>
> **[1:04](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=64)** The login I'm using only has access to one subscription, but an organization could have multiple subscriptions, which this login could have access to.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=76)** Each subscription can also be billed differently.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=80)** For example, there are enterprise, pay as you go, and trial subscriptions that are available.
>
> **[1:26](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=86)** A subscription contains one or more resource groups, where the resource group represents a logical grouping for the lifecycle of Azure resources.
>
> **[1:36](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=96)** Here, I've created a resource group of 01_03 for all the resources I want to create for this Chapter 1 Video 3 demo.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=105)** At the end of the demo, the lifecycle of the resource group's resources is complete so I will delete the resource group, which in turn deletes all of its resources.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=115)** We scroll down, we can see the [[Representational State Transfer (REST)|rest]] of the basic options.
>
> **[1:59](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=119)** A storage account name must be globally unique for the whole of the Azure Cloud that you are using.
>
> **[2:05](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=125)** For the majority of us, that is the Azure Public Cloud, but there are currently three other clouds for government, military, and data sovereignty uses.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=135)** I'm going to give this storage account name ns0103example, and that will be checked on review to check that it is unique.
>
> **[2:25](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=145)** My region has defaulted to UK South as that is the region of the resource group I'm creating this resource in.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=154)** When thinking about the choice of region for your data, you need to consider local data residency laws and to check whether all the features you require are available for the region.
>
> **[2:46](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=166)** We will cover this throughout the course.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=170)** Performance is where you choose the storage account type discussed in a previous video.
>
> **[2:55](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=175)** The current selection of standard is the standard general purpose v2 account.
>
> **[3:02](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=182)** If you choose premium, you are now offered the choice of premium account type, which matches the three premium types discussed in a previous video.
>
> **[3:12](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=192)** I want to be able to create blobs, files, queues, and tables in the storage account so I'm going to switch back to standard.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=201)** The redundancy options will be discussed in a future video so I will leave these at the defaults.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=207)** All the required options have now been entered and I can validate the selections by clicking Review.
>
> **[3:34](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=214)** If the validation passes, the Create button is enabled and the storage account can be created, so I'll click the Create button to create the account.
>
> **[3:47](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=227)** After a short time, the storage account is created.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=231)** And if we click on Go to resource, we're taken to the overview blade for the newly created storage account.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=239)** At the top of the overview blade is a display of all of the options chosen in the Basics tab, subscription, resource group, region, performance, and account kind.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=250)** And on the Storage Account menu bar under the [[Data Storage]] heading are the menu items for Containers, File shares, Queues, and Tables.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=258)** This is due to the selection of a standard storage v2 account, which supports all of the services.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/creating-a-storage-account-in-the-azure-portal?u=76281980&t=265)** Now we have a storage account, we can start to look at how to store some objects, and we'll cover that in the next two videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[Data Storage]] (1)
> **UI Navigation:** click on (3), switch to (1), dropdown (1), scroll down (1), go to (1)
> **Cross-References:** previous video (2), in the next (1)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with Azure Storage data in the portal](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=0)** - [Instructor] You've created your [[Microsoft Azure|Azure]] storage account and are ready to start working with your data within the account, but how should you create a structure for your data to be stored?
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=9)** Each Azure storage service has a set of resources which are used together to create a structure for data to be stored.
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=16)** This structure is also used in some services to secure access to the data.
>
> **[0:22](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=22)** We'll start by looking at Blob Storage.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=25)** All services start with a storage account with blobs being organized by containers.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=30)** You can have an unlimited amount of containers, and the containers are often named to organize the types of blobs stored within them.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=37)** With blobs being stored inside a container and a container holding an unlimited amount of blobs up to the storage account capacity, blob containers cannot contain other containers.
>
> **[0:48](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=48)** The hierarchy is flat, but blob names can contain a virtual directory, which enables grouping of blobs with the same prefix.
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=57)** Each of these components come together to make up the URL, which will access the blob.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=62)** As this needs to be a valid URL, there are rules for naming of accounts, containers, and blobs.
>
> **[1:08](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=68)** For more information on this, see this link to the naming and referencing documentation for blobs.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=76)** This is a storage account that was created in the previous demo.
>
> **[1:19](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=79)** To work with blob data in a storage account, you can access Containers on the left-hand menu or Blob service on the Properties tab of the Overview blade.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=89)** This screen shows the list of blob containers.
>
> **[1:32](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=92)** There is only the $logs container as this is required for functionality that's built into the storage account when it was created, and no other containers have been created as this account is new.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=104)** So let's click at Container at the top and walk through how to create one.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=109)** Adding a name, (keyboard clacks) we can see that the naming rules are enforced in the portal, so I actually have to set this to all lowercase.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=120)** Now blob containers are private by default, requiring a level of authorization to interact with the container and its data.
>
> **[2:08](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=128)** Well, we'll cover this later in the course, so I'll set this container to publicly accessible and click Create, and the container is created.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=138)** Clicking on the newly created container, a blob can be uploaded by clicking the Upload button, then we can either drag a blob in to this square here to Drag and drop files, or I can browse for files on my local machine, choosing the [[LinkedIn]] logo and clicking Open and Upload.
>
> **[2:41](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=161)** If I close down the upload pane, the blob has been created and this has created the blob at the container level.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=169)** If I'd wanted to use a virtual directory, I could click Upload once more, can choose the same blob again, or any other blob to that matter.
>
> **[3:00](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=180)** But I need to go into Advanced and choose Upload to folder, and I'm going to choose media.
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=188)** Scrolling down and clicking Upload, closing the upload to blob pane.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=194)** We now have a media virtual directory, and entering the media directory, the LinkedIn logo blob looks like it's stored in a directory, but this is actually a flat file structure, represented this way in the portal.
>
> **[3:28](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=208)** If we go to the ellipses against the blob and click to view Properties and copy its URL and paste it in, we can see the makeup of the blob URL with the container, the virtual directory, and the blob itself.
>
> **[3:48](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=228)** And hitting Return, because this blob is public, the blob can be downloaded.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=235)** The resources for Azure files has a slightly different setup.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=239)** Starting as always with the account is the namespace.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=242)** One or more file shares can be created and underneath these, one or more directories.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=248)** Directories can also be nested to create the file system structure that most end users are comfortable using.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=255)** Files can be uploaded to any directory level, including the share level itself.
>
> **[4:20](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=260)** To access a file by a URL, the format is almost identical to that of blobs, except the path must reflect the directory structure the file is under.
>
> **[4:30](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=270)** For example, look at this quote path as shown from the slide.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=277)** Going back to the portal and the storage account created in the first demo, you can create Azure file shares by entering the File shares menu on the left-hand side, or through the Properties tab, scroll down by entering the File service.
>
> **[4:52](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=292)** This is a fairly new account, so there are no file shares at the moment.
>
> **[4:56](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=296)** You can create one by clicking Add File share at the top left, and we'll need to name the share.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=303)** Now the same naming rules apply.
>
> **[5:06](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=306)** We cannot use a capital letter, so I'll set it to marketing with a little M.
>
> **[5:12](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=312)** Now you can get more information on naming shares directory and files through the link that's currently being displayed on screen.
>
> **[5:20](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=320)** Now this is a standard v2 account, so the file share automatically sets that it will grow up to five terabytes.
>
> **[5:29](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=329)** I'll click Create and Review and Create, and the share is created.
>
> **[5:36](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=336)** Now the marketing share is created, we have the option to upload a file or add a directory.
>
> **[5:43](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=343)** Now I'm going to build out the marketing example from the slides, so we'll start with adding an assets directory.
>
> **[5:49](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=349)** (keyboard clacks) And we'll just pop over to Browse and I can enter the assets directory.
>
> **[5:57](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=357)** And if you remember that slide, underneath, there was a logo directory too.
>
> **[6:02](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=362)** Can enter the logo directory, and at this point, I'd like to upload my file.
>
> **[6:08](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=368)** So I'll choose the LinkedIn logo that we had before in the blob demonstration and clicking Upload and closing down these panes, and into the ellipses and Properties.
>
> **[6:26](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=386)** If we expect the properties and copy the URL and add it into the browser, we can see the makeup of the file path is reflected in the URL with marketing, assets, logo, and the file itself.
>
> **[6:44](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=404)** And hitting Enter, we cannot download this logo and this is because Azure file shares cannot be set to be publicly available like blob containers.
>
> **[6:54](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=414)** If I return to the Overview page of the storage account, (computer mouse clicks) we can also manage data in the portal through the Storage browser.
>
> **[7:11](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=431)** If I enter File shares and the marketing file share, the menu options are almost identical to those shown within the storage service, and then drill through the directories to the files.
>
> **[7:26](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=446)** There is also this option here to copy files between directories.
>
> **[7:31](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-the-portal?u=76281980&t=451)** Now this option is also present for blobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[LinkedIn]] (3)
> **Env Vars:** url (7)
> **UI Navigation:** drag and drop (1), go to (1), scroll down (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)

#### [An overview of Azure Table storage and Azure Storage Queues](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=0)** - [Instructor] The [[Microsoft Azure|Azure]] Portal is a great place to start when creating storage components and working with data in Azure, but there are many other options including Azure Storage Explorer with its desktop client for [[Windows]], [[Linux]], and macOS.
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=15)** Before we jump into the Data Explorer, there are two final storage services we need to cover, starting with Azure Tables.
>
> **[0:23](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=23)** The structure of Azure Tables starts underneath the storage account with one or more tables that can be created, which in turn hold one or more entities where an entity is a row in a table that has properties which are key value pairs.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=40)** The first two properties are mandatory.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=42)** The partition key is used to partition the data across partition servers.
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=46)** Therefore, for optimal balancing of load to the servers, a good partition key will distribute the load.
>
> **[0:53](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=53)** The row key uniquely identifies the entity in the partition and together with the partition key uniquely identifies the entity in the table.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=63)** Only partition and row keys are indexed.
>
> **[1:05](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=65)** So if you are performing a point read, which is a read which uses just a partition key and row key to [[Fetch]] one row, it will be efficient, but any other type of read will be slow as the table grows.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=78)** This is one of the disadvantages of Azure Table Storage.
>
> **[1:22](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=82)** On insert or update, the timestamp is added or updated by default.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=87)** You can then add up to 252 other properties to an entity.
>
> **[1:31](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=91)** And for each entity, the number of properties can differ and be of different types and names.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=97)** For further information of the types of properties that can be added and their naming rules, please follow this link to the table service model.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=105)** With Azure queues, an account can hold unlimited queues and a queue can contain unlimited messages up to the max queue size of 500 terabytes.
>
> **[1:57](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=117)** A message is a string, which can hold up to 64K in text.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=121)** This means millions of messages can be held in Azure Queue Storage.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=126)** And Azure Queue doesn't guarantee that messages are delivered in order.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=130)** But if this is not an issue for your application, Azure queues are a really cost-effective asynchronous messaging service.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=137)** For information on naming queues and [[Metadata]], please follow the link on this page.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=144)** Now we'll take a look at working with the data we have discussed in the Azure Storage Explorer.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=150)** This is the Storage Explorer, and once it loads, you need to connect to the resources to be able to view them either through an [[Microsoft Entra ID|Azure AD]] account, which enables access to single resources or an entire subscription, or by using further authentication methods which we'll discuss later in this course.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=169)** I'm going to sign in with my instructors Azure AD account to get access to my subscription.
>
> **[2:56](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=176)** I'll choose the Azure Public Cloud where my account and subscription are held and the login page is loaded and I'll select my identity and it says that I'm now authenticated because I was already logged in in an earlier session so I can close the browser and I'm now signed in and we can see this as my Azure subscription is loaded.
>
> **[3:22](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=202)** Clicking Open Explorer and expanding the subscription, I can navigate through the storage resources that I have access to using this tree view by clicking on the storage accounts.
>
> **[3:35](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=215)** For example, this one was created in the very first demo.
>
> **[3:39](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=219)** And if you'd watched at the bottom left-hand side of the screen, the properties of the storage account were loaded down at the bottom here.
>
> **[3:48](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=228)** Expanding the storage account itself, I have access to all of the Azure Storage services.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=235)** Drilling in further on the blob containers, we can see the log container that I added and the blobs that were uploaded through the Azure Portal.
>
> **[4:05](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=245)** We can also see the file shares that were added, the marketing share and its directories.
>
> **[4:13](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=253)** And once again, the file that was uploaded to those directories through the Azure Portal.
>
> **[4:19](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=259)** You may have noticed that at each point as I have navigated through, the properties of the resource are shown in the bottom left and the menu items change that allow you to manage that specific resource at the top.
>
> **[4:32](https://www.linkedin.com/learning/manage-storage-in-azure/an-overview-of-azure-table-storage-and-azure-storage-queues?u=76281980&t=272)** It's also possible to right-click on a resource to manage it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[Microsoft Entra ID|Azure ad]] (2), [[Windows]] (1), [[Linux]] (1), [[Fetch]] (1)
> **Definitions:** is a  (4)
> **Tools:** azure portal (3)
> **Code Identifiers:** macos (1)
> **Cross-References:** later in (1)
> **UI Navigation:** right-click (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with Azure Storage data in Azure Storage Explorer: Adding Tables, entities, queues, and messages](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=0)** - [Lecturer] Let's explore this experience further by adding a table and an entity.
>
> **[0:05](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=5)** As I've expanded the table service, we can see a list of tables here.
>
> **[0:10](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=10)** These tables are used internally for storage account metrics.
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=15)** I don't want to use these tables, I want to create my own.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=18)** So I will right click on the table service and choose create table and I'll give it a name of [[Microsoft Products|products]].
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=27)** The screen on the right has now switched to a view of the entities in the table which we haven't got any at the moment.
>
> **[0:34](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=34)** So clicking to Add to create an entity I must add a PartitionKey.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=39)** In this case, we're going to use countries as a partition and then I must also add a RowKey.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=47)** So I'm going to use my product code as a RowKey.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=54)** And carrying on with the example data from the slide deck I'm going to add some more properties to create this entity.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=62)** So the first one was Cost, which has a type of Double and that was 2.99.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=71)** The second was a Size of a String of Large.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=78)** Now I have all my entities.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=80)** I can click Insert and it is displayed within the table including the two extra properties I added.
>
> **[1:30](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=90)** If I choose to add another entity, I am shown the structure of the last entity that was added.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=97)** But because this is a no [[SQL]] type of data it doesn't have to have the same properties.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=104)** So I can get rid of the Cost and the Size, add in another PartitionKey and another RowKey of a product number.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=115)** But this time I'd like to add the Colour.
>
> **[1:59](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=119)** So I'm going to set to Red, and that's all I want for this entity.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=124)** That's all the properties that I need.
>
> **[2:05](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=125)** So clicking Insert, I can see my two entities listed.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=130)** But moving to the right, I can see that the properties have been updated with null's place for properties that aren't being used.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=138)** Now, this is actually quite manual, so note at the top I can import a CSV file if I wish to, which will give me a quick method for processing some data.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=150)** Working with Queues has a similar workflow.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=154)** I can right click and create a queue.
>
> **[2:37](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=157)** In fact, I'm going to choose to create two queues.
>
> **[2:40](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=160)** The first one called ready, and the second one called finished.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=169)** By clicking on a queue, I can choose to add a message within the queue.
>
> **[2:54](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=174)** (keyboard clacking) I've added some text.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=178)** This text can be up to 64k in size, but as this is Base64 encoded this message can only be 48k in size.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=189)** Clicking OK, the message is added to the queue.
>
> **[3:13](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=193)** Having a setup like this with two queues is a simple example of how processing can be decoupled using [[Microsoft Azure|Azure]] Storage Queues.
>
> **[3:20](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=200)** A compute resort can get the messages from the ready queue, process them, and then place the message on the finish queue to notify that the processing has ended.
>
> **[3:30](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=210)** You could set up an example implementation of this using a Logic app which has triggers that detect inserts of messages into queues.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=221)** It could then pick up and push the message to the second queue.
>
> **[3:45](https://www.linkedin.com/learning/manage-storage-in-azure/working-with-azure-storage-data-in-azure-storage-explorer-adding-tables-entities-queues-and-messages?u=76281980&t=225)** But as you can see, but as you can see this method of processing could provide a much more powerful decoupled workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[SQL]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (1), csv (1)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1), set up (1)
> **Versions:** 2.99 (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [lecturer] (1)

#### [Migrating and transferring data into Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=0)** - [Instructor] When migrating or transferring data to [[Microsoft Azure|Azure]] Storage, there are three key factors that will influence your choice of migration tool or service.
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=9)** Firstly, how much data do you need to transfer?
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=13)** If it's a few gigabytes, then it's likely it can happen online.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=17)** But if you're looking at terabytes or petabytes of data, then bandwidth is going to come into play.
>
> **[0:23](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=23)** Poor or inconsistent bandwidth is likely to push a migration down the offline route.
>
> **[0:28](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=28)** The third factor is likely to affect your choice of tooling.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=33)** Is this transfer a one-off migration or something that is scheduled or triggered periodically?
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=39)** The first service we'll look at is aimed at large datasets with little to no bandwidth on offer for the transfer.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=47)** This is the Data Box family of Data Box Disk, Data Box, and Data Box Heavy.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=55)** These are all [[Microsoft]] managed services primarily aimed at large data offline migrations.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=63)** With this service, you order a device suitable for your requirements through the portal and Microsoft deliver you one or more SSDs or a ruggedize device.
>
> **[1:14](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=74)** You then copy your data to these devices and send them back to Microsoft to automatically load into a designated storage account.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=83)** Although the main driver is likely to be sized when choosing a Data Box, note the usable size is slightly smaller.
>
> **[1:31](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=91)** You may also need the higher levels of encryption or to load to multiple storage accounts, in which case you will need at least Data Box.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=100)** With transfer of an increased dataset size, you are likely to require higher transfer speeds, so interface options differ to match this from USB 3.1 speeds to 4 by 40 gigs for QFPS+.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=116)** The customer managed option for offline data transfer is an import/export job.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=121)** Here, the customer provides their own drives and must arrange their own method of shipping.
>
> **[2:07](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=127)** The customer uses a Microsoft provided tool which determines the number of drives required, preps the drives, facilitates the data copy, and encrypts the data.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=138)** The Azure Portal is then used to create a job so the customer knows where to ship the drives to.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=144)** Import/export supports blobs and files, but has an extra feature where data can be exported from Azure Storage Blobs to on-premises.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=152)** One excellent use case for this is data recovery from Azure Storage.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=158)** Along with its offline capability, the Azure Data Box family has Azure Stack Edge and Data Box Gateway for transferring large datasets with high bandwidth to Azure blobs and files.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=171)** These can include data from on-premises servers transferred as migration, or scheduled and continuous transfer often used for [[IoT]] devices.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=181)** The Azure Stack Edge device also comes with compute at the edge, enabling pre-processing of data which can mean less data is transferred to Azure.
>
> **[3:12](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=192)** For transferring large datasets where high bandwidth is available, Azure Data Factory and the command line tools AzCopy, Azure [[CLI]], and Azure [[Powershell]] can be used to transfer data online.
>
> **[3:26](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=206)** Azure Data Factory has connectors to multiple resources, including Azure storage.
>
> **[3:32](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=212)** Its code-free UI runs from the portal where [[Data Pipelines]] are designed.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=218)** These can be triggered and scheduled.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=221)** Azure Data Factory is a full ETL service and therefore can be costly.
>
> **[3:45](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=225)** But if transformation of data is required before loading, then Data Factory may be the best option.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=232)** The command line tools support blobs, files, and table storage.
>
> **[3:56](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=236)** As command line tools, the commands can be scripted where they can be scheduled through [[Windows]] Task Manager or [[Linux]] cron jobs.
>
> **[4:05](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=245)** With fees limited to egress, if your transfer scenario is a one-off or can be scheduled, then tools such as AzCopy are likely to be the most cost effective.
>
> **[4:17](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=257)** When transferring a small dataset which is often an ad hoc operation, the recommended UI tools are the Azure Portal and Azure Storage Explorer which we have already seen in previous demos.
>
> **[4:30](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=270)** We can also use the command line tools and we'll be spending some time with Azure CLI and PowerShell in later videos.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage?u=76281980&t=277)** So let's have a look at how AzCopy can be used to transfer data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (18), [[Microsoft]] (4), [[CLI]] (2), [[Powershell]] (2), [[IoT]] (1)
> **Tools:** command line (4), azure portal (2), powershell (2)
> **Env Vars:** cli (2), usb (1), qfps (1), etl (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 3.1 (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Migrating and transferring data into Azure Storage using AzCopy](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=1)** - [Instructor] Being a command line tool, we're going to need a terminal to run AzCopy.
>
> **[0:05](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=5)** So I'm currently in [[Windows]] [[Powershell]], but I could be using Bash in [[Linux]] for example as AzCopy runs on Linux, Mac OS, and Windows.
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=15)** So to use AzCopy, firstly you need to authenticate.
>
> **[0:20](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=20)** I'm going to have a quick look at the help to work out how to do this.
>
> **[0:24](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=24)** So azcopy is the executable.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=25)** Login is the command that I need to know about.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=27)** I'm just going to pass it the help parameter.
>
> **[0:31](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=31)** I'm scrolling up in the terminal.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=33)** We can see some examples.
>
> **[0:35](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=35)** Now I have options, to log in interactively, so I would be putting in my identity credentials and scroll down.
>
> **[0:43](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=43)** I could be using a managed identity so this would be good if I was using [[Microsoft Azure|Azure]] back compute.
>
> **[0:48](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=48)** And here we have options for using a service principle.
>
> **[0:53](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=53)** Now using a service principle is the recommended way to authenticate when scheduling an AzCopy script.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=59)** Now I will log in using device code authorization flow which uses my [[Microsoft Entra ID|Azure AD]] identity to authenticate and returns the identities authorizations.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=70)** And to do this, I can use azcopy login.
>
> **[1:14](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=74)** If I hit return, it gives me the instructions on how to do this.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=78)** So I need to enter this code into this browser window, paste the code in, and click next.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=88)** And it's going to ask me which identity that I want to use which is my Azure instructor identity.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=93)** And it's double checking that I want to sign in to Azure Storage AzCopy, which I do.
>
> **[1:39](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=99)** If I click continue, I'm now signed in, and I can close this window which I shall do and return to the terminal.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=109)** And at the bottom here, we can see in the info it states that login has succeeded.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=115)** Now for this demo, I'm going to create a new blob container in the example storage account that we created in the first video.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=124)** So by entering into the help once more, but this time by deleting the command, I can get to the generic help and see all of the commands that are available.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=135)** Now the first thing I want to do is create a new container.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=139)** So if I look up at the command for create a container or file share, I can use make.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=146)** So AzCopy make is the command for creating container.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=149)** So if I use the same help command, but this time with the make command, I can see the examples for the make command.
>
> **[2:36](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=156)** I'm going to need to use the executable, the command of make, the full URL to the storage account, and also add in the new container name that I require.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=167)** And this will create the container for me.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=169)** Now that's quite a long string, so I've created one earlier in my notes, and I shall paste this in.
>
> **[2:56](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=176)** So we have AzCopy make, the URL to my storage account and the new container, and hitting return the terminal states it has successfully created the resource.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=189)** Now if I have a look in this directory, I also have a text file, and this is the text file that I'd like to upload into this new container.
>
> **[3:18](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=198)** So if we go back to the main help once more, we're looking for the commands that will upload a file or blob into the container.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=209)** So this is copy a copy source data to the destination location.
>
> **[3:34](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=214)** Once again, I've got the command stored for this cause it's quite long, but we can paste it in, and I can talk you through it.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=221)** So we have the executable, the copy command, the file that I would like to upload, and its path which is the local directory.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=231)** And I'd like to upload that into my storage account to the container I've just created.
>
> **[3:57](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=237)** And I can actually give it a new name if I wanted to, but I'm going to choose the same name as the file which is testupload.txt.
>
> **[4:04](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=244)** Hitting enter on the terminal, we get some output, and we can see that the total number of transfers is one, and the number of file transfers completed is one.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=255)** So the AzCopy command has taken my test upload.text file and uploaded it into my new container.
>
> **[4:21](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=261)** So switching back to the portal, this is the account we created in the first demo.
>
> **[4:28](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=268)** If I go into containers, I now have 0106 new container which is the one I've just created.
>
> **[4:36](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=276)** And entering that container, we have the test upload.txt file.
>
> **[4:42](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=282)** The most recent addition to the storage migration options is Azure Storage Mover.
>
> **[4:47](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=287)** It is a fully managed migration service for files and folders where a migration plan is created in the Azure portal, and agents are deployed to an on-premises virtual machine.
>
> **[4:58](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=298)** The agents run the migration jobs, which are also defined and can be tracked together in the portal making it easier to monitor multiple file migrations.
>
> **[5:09](https://www.linkedin.com/learning/manage-storage-in-azure/migrating-and-transferring-data-into-azure-storage-using-azcopy?u=76281980&t=309)** Being a fairly new service, currently NFS migration to Bob Storage is only available, but additional sources and targets are on the roadmap along with automatic discovery of sources and provision of targets based on the migration plan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Windows]] (2), [[Linux]] (2), [[Powershell]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **Tools:** terminal (5), command line (1), powershell (1), bash (1), azure portal (1)
> **CLI Commands:** make (6)
> **Env Vars:** url (2), nfs (1)
> **File Paths:** testupload.txt (1), upload.txt (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### [Hierarchical namespace and SFTP for blobs](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=0)** - [Instructor] Historically, the flat structure of blob storage was used for scale.
>
> **[0:05](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=5)** A flat structure object storage such as blob storage could scale linearly, therefore having no impact on data capacity or read/write performance, whereas performance for objects in a hierarchical structure was impaired as the number of objects grew.
>
> **[0:23](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=23)** You have already seen how the blob storage structure in [[Microsoft Azure|Azure]] consists of the account and the container, followed by the blob name, and it is within the blob name that the virtual structure is created by embedding slashes to create a virtual path.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=42)** The problem with the structure comes when you need to perform directory maintenance such as renaming, moving, or deleting directories.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=50)** Take this example.
>
> **[0:52](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=52)** If I had a million blobs in virtual directory app two and needed to rename it, one million blob copies and one million deletes would have to be performed.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=62)** This is because for blob storage to operate on a virtual directory, the operation must happen on every file that is part of the virtual directory.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=72)** By enabling the hierarchical namespace for blobs feature on a storage account, the container at the top level stays the same, but underneath the container, directories can be added to build out a file system that is no longer virtual.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=89)** Because it is built on the Azure Blob Storage, this hierarchical structure for objects retains its [[Scalability]] and delivers better throughput and IOPS and faster operations at individual notes.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=102)** For example, in the structure, if I were to rename app two to HR app, this is one transaction and does not require alteration to all of the underlying blobs.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=115)** With a hierarchical namespace, security can now be applied at the container, directory, and blob level with [[Microsoft Entra ID|Azure Active Directory]].
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=124)** Transaction costs are slightly higher for a hierarchical namespace, and a key consideration is you cannot revert back to a flat namespace once this is enabled.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=136)** There are also some limitations around encryption, blob protection, and replication features.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=142)** For more details, visit this blob storage feature supports docs page.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=148)** You may be thinking, what is the use case here?
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=151)** You may not need to rename virtual directories on mass scale for your applications and you don't require fine-grain security for the blob level.
>
> **[2:40](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=160)** The answer is [[Big Data Analytics]].
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=165)** By selecting hierarchical namespace for Azure Blob Storage, the service can also be known as Azure Data Lake Storage Gen2 or ADLS Gen2 for short where a data lake is a centralized storage of structured and unstructured files, which is transferred in using one or more tools.
>
> **[3:05](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=185)** The hierarchical namespace also enables [[Hadoop]] compatible access through the Hadoop Distributed File System where Hadoop is a distributed computing system capable of processing massive amounts of data.
>
> **[3:18](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=198)** In Azure, HDInsight is a Hadoop cluster which is capable of [[Batch Processing]] massive amounts of data using a tool such as Hive in Hadoop cluster and [[Azure Databricks]] also uses the Hadoop Distributed File System to connect to Azure Data Lake storage.
>
> **[3:36](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=216)** It is tools like Hive and Spark which run inside HDInsight and Azure Databricks that require the hierarchical namespace as they often write output to temporary locations and then rename the location at the conclusion of a job.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs?u=76281980&t=232)** Visualization tools such as [[Microsoft Power BI|Power BI]] can also use the interactive querying features of engines such as Hive to query over massive amounts of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Hadoop]] (6), [[Azure Databricks]] (2), [[Scalability]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (3)
> **Env Vars:** iops (1), adls (1)
> **Speakers:** - [instructor] (1)

#### [Hierarchical namespace and SFTP for blobs in practice](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=0)** - [Instructor] Switching into the [[Microsoft Azure|Azure]] Portal, when creating a storage account in the portal, the hierarchical namespace checkbox is on the Advanced tab if I scroll down a little bit.
>
> **[0:11](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=11)** Clicking the checkbox enables two more features which depend on the hierarchical namespace, the network file system, or NFS, and SFTP.
>
> **[0:22](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=22)** NFS v3 provides [[Linux]] file system compatibility, enabling Linux clients to mount the container into a VM.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=30)** This feature allows access for legacy applications that cannot access storage through [[Representational State Transfer (REST)|REST]] APIs, and is highly suited to high throughput, high scale, and read heavy workloads.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=42)** Ticking Enable SFTP enables the SSH File Transfer Protocol for this account.
>
> **[0:49](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=49)** On creation, it will be possible to transfer files to the storage account via SSH, which is a protocol enabling secure access between machines.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=62)** Let's have a look at how SFTP for Azure Blob Storage works.
>
> **[1:06](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=66)** So, we'll go to the resource, and to begin with we're going to need to add a container and a directory.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=72)** Now, notice the icon next to Containers has changed compared to the blob icon we saw earlier.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=78)** This is because this is no longer Blob Storage, this is Azure Data Lake Storage.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=83)** So, I click on a Container and I'll create a container called interface.
>
> **[1:31](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=91)** And within interface, I will add a directory called incoming.
>
> **[1:39](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=99)** This is going to be my home directory, which will explain in a second.
>
> **[1:43](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=103)** Now that the structure is ready, I need to go back to my storage account and set up SFTP.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=114)** We need to create local users in the SFTP settings blade as SFTP does not support [[Microsoft Entra ID|Azure AD]] authentication or authorization.
>
> **[2:05](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=125)** A local user requires a username and then a password.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=131)** So, I'll add a username and a password which Azure generates or it provides a secure shell public private key pair and Azure stores the public key.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=144)** SSH is the recommended method of connection.
>
> **[2:27](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=147)** But to keep this demo simple, I'm going to choose password.
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=151)** Clicking Next, access can be granted for one or more containers, so I'll choose the container I added earlier, and I can choose one or more permissions.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=162)** Again, to keep this simple, I'll choose All.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=167)** Optionally, I can choose a landing directory.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=169)** This is where a local user will start from when logged in.
>
> **[2:53](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=173)** So, I'm going to set this to the incoming directory that I created earlier.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=178)** And notice, the structure must be the container first and then the directory.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=183)** Clicking Add to add the local user, a prompt is displayed with the password.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=189)** As we can see, this is only going to be displayed once so I'll copy this into a notepad for use later.
>
> **[3:18](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=198)** Now we've got everything set up, we just need to test it.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=201)** So, by copying this connection string and opening a supported SSH client, we can log in.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=209)** And the host name that I've posted in here is the connection string for the account.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=217)** And we just need to take the username, which, as you can see, is the name of the account and the local user.
>
> **[3:46](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=226)** And I just need to delete that @ symbol.
>
> **[3:48](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=228)** Ah, it's done it for me.
>
> **[3:49](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=229)** And we need to paste in the password, which I copied earlier, and click Login.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=239)** And this on the right-hand side is my incoming folder and on the left-hand side is my managing storage directory from my local machine.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=248)** This is the file I'd like to copy, my test-upload.txt.
>
> **[4:13](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=253)** And I can drag it to the right-hand side and the file has been uploaded.
>
> **[4:19](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=259)** And I can check this by switching back to the Portal, back into my storage account, and we'll have a look in my directory and there is my test-upload.txt.
>
> **[4:32](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=272)** Now, you may be aware that Blob Storage can be configured to stream events such as blob creation to fire processing workflows using Event Grid and compute such as Azure functions and logic apps.
>
> **[4:43](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=283)** At the time of writing this video, there are issues with events created when a blob is created through SFTP.
>
> **[4:51](https://www.linkedin.com/learning/manage-storage-in-azure/hierarchical-namespace-and-sftp-for-blobs-in-practice?u=76281980&t=291)** Once these are ironed out, this could be a powerful mechanism for interfacing with legacy systems that cannot transfer data through APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Linux]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **Env Vars:** sftp (7), ssh (4), nfs (2), rest (1)
> **UI Navigation:** checkbox (2), scroll down (1), go to (1), click on (1)
> **CLI Commands:** ssh (4)
> **File Paths:** test-upload.txt (2)
> **Analogies:** such as (2)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)


### 2. Redundancy, Disaster Recovery, and Replication

[↑ Back to Table of Contents](#table-of-contents)

#### [High availability and durability for Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=0)** - [Instructor] When building systems that require persistence of data, it is critical that the data is in an immediately accessible state.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=8)** Unfortunately, [[Hardware]] can fail, software can glitch, and data can become corrupted.
>
> **[0:14](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=14)** Each of these issues will affect data accessibility.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=18)** To help us understand how component failure may affect access to data, two key objectives are used, durability and availability.
>
> **[0:28](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=28)** Where durability is the protection of data against loss, degradation, and data decay, and availability is whether the storage is accessible.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=40)** These objectives are both measured as a percentage, but are calculated differently with durability being a combination of the [[Probability]] of data loss per year and the time taken to recover from that loss of data per year, and availability as the percentage of uptime over local time in a year.
>
> **[1:01](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=61)** Both are expressed as nines, where five nines would be 99.999%.
>
> **[1:07](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=67)** One or two nines are always before the decimal place, further nines are after the decimal place here.
>
> **[1:15](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=75)** Five nines equates to one object lost per hundred thousand a year for durability, and four nines to 42.6 minutes of downtime per year.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=87)** Storage redundancy is used to ensure that availability and durability objectives are met by keeping multiple copies of data.
>
> **[1:35](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=95)** In [[Microsoft Azure|Azure]] Storage, at least three copies of data are always kept within a region.
>
> **[1:41](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=101)** Azure has multiple regions each geographically separate, such as West US, East US, or Southeast Asia.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=109)** Within a region is a group of two or more data centers connected with a low latency network.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=114)** Each data center has its own power, cooling, and networking.
>
> **[1:59](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=119)** The two diagrams depict the options for storage redundancy in a single region, locally redundant storage and zone redundant storage.
>
> **[2:09](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=129)** Locally redundant storage is the lowest level of redundancy with three copies of data held in a single data center.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=136)** Writes happen synchronously to the data and failures are protected against at the rack and drive level.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=144)** Zone redundant storage separates the three copies into separate data centers across availability zones in a region.
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=151)** Writes happen to each zone synchronously and the separation by zone increases the storage durability.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=159)** This protects the data from data center outage.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=162)** However, if the region suffers an outage, then the data in both of these scenarios will be inaccessible.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=171)** If regional outage is a failure your system or application needs to protect against then Azure offers geo-redundancy where the two types of single region storage of LRS and ZRS are asynchronously replicated to a secondary region and stored as locally redundant storage.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=190)** This replication is made possible by the secondary region being a regional pair to the first, where a regional pair is within the same geography, but at least 300 miles away where possible.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=201)** For example, UK West and UK South or East US and West US.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=209)** These geo-redundancy types have different acronyms of GRS for geo-redundant storage and GZRS for geo-zone-redundant storage.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=218)** The addition of a secondary region with the copies of data raises the durability to 16 nines as the data is now protected from regional outage.
>
> **[3:47](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=227)** These configurations support failover to the secondary region, and we'll look at this more closely in a future video.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=235)** With geo-redundant data now copied to a secondary, it is also possible to configure read access in the secondary region.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=242)** These configurations are known as read access geo-redundant and geo-zone-redundant storage.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=248)** The addition of the readable secondary increases the SLA on the data reads to 99.99%.
>
> **[4:17](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=257)** To access the read endpoint on the secondary, a suffix of -secondary is required.
>
> **[4:22](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=262)** So, must be taken into consideration if building for application [[Resiliency]] using the read endpoint.
>
> **[4:29](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=269)** Another consideration is the use of last sync time for objects replicated to the secondary.
>
> **[4:36](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=276)** The replication is asynchronous, so each geo-redundant storage account has a last sync time property which can be queried by the storage client libraries to see how far behind it may be.
>
> **[4:48](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=288)** There are a couple of trade-offs when deciding which redundancy configuration to choose, and I've switched to the portal to show the first one.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=295)** This is the create storage account page, you may recall it from the demos in Chapter 1.
>
> **[5:00](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=300)** I'm adding a storage account name and I've also already chosen a region of UK West.
>
> **[5:11](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=311)** The other settings are set to standard performance and GRS.
>
> **[5:16](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=316)** Clicking the dropdown on Redundancy, I would expect to see LRS, ZRS, and GRS, but ZRS is missing.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=325)** This is because UK West is a region with no availability zones, so zonal redundancy is not available.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=332)** If I switch my region to West US 3, the zonal options are now available.
>
> **[5:41](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=341)** Also, switching to Premium and looking at the redundancy options once more, geo-redundancy is not available for Premium accounts.
>
> **[5:54](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=354)** So, the choice of region and whether a Premium account is required are the first trade-offs when choosing redundancy.
>
> **[6:01](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=361)** Cost is also a key factor.
>
> **[6:03](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=363)** The more copies of the data, the higher the cost to store it.
>
> **[6:06](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=366)** There are also the asynchronous replication costs for replicating data to the secondary region.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=373)** Finally, some storage account features are not supported for all redundancy configurations.
>
> **[6:18](https://www.linkedin.com/learning/manage-storage-in-azure/high-availability-and-durability-for-azure-storage?u=76281980&t=378)** For example, there is no page blob support for redundancy beyond LRS and no read endpoint access for table storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Hardware]] (1), [[Probability]] (1), [[Resiliency]] (1)
> **Env Vars:** lrs (3), zrs (3), grs (3), gzrs (1), sla (1)
> **Definitions:** is a  (3), known as (1)
> **Versions:** 99.999 (1), 42.6 (1), 99.99 (1)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** dropdown (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Backing up Azure file shares and operational backup for blobs](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage redundancy provides [[Resiliency]] against [[Hardware]], software, data center, and regional outages, but it doesn't protect the individual files and objects in an account from accidental deletion or corruption.
>
> **[0:14](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=14)** For this, a point-in-time restore mechanism is required so that data can be recovered from a point in time where a previous version existed before the deletion or corruption took place.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=27)** For Azure files, this is Azure file shares backup which uses Recovery Services vault.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=33)** This is a management tool that stores recovery points.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=37)** Within the Recovery Services vault, a backup policy is created with a schedule for backing up a share along with its retention, which can be customized with daily, weekly, monthly, or yearly retention.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=50)** Configuration of the backup can set a delete lock on the file share and the storage account, which is recommended, and snapshots are taken in line with the schedule, and these are stored locally within the same storage account.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=63)** So this is a local backup, which is also why a delete lock is recommended to stop the snapshots from being lost.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=71)** The Recovery Services vault keeps the available snapshots in line with the retention policy.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=78)** For block blobs, a similar functionality is available through operational backup for Azure blobs.
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=84)** When enabled on a storage account, all block blobs within the storage account are set up with a backup policy within a backup vault, where a backup vault is also a management tool that stores recovery points like a Recovery Services vault but for the newer workloads within Azure.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=102)** Configuring the backup policy sets a delete lock on the storage account.
>
> **[1:47](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=107)** Notice there is no schedule in the backup policy.
>
> **[1:50](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=110)** This is because backups are continuous, using a feature of Azure blob storage called blob point-in-time restore.
>
> **[1:57](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=117)** This tracks changes to blobs.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=121)** Once again, the backup is stored locally within the same storage account as the data.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-operational-backup-for-blobs?u=76281980&t=126)** The backup vault manages the blobs in the backup in line with the retention period in the backup policy to a maximum retention of 360 days or equivalent number of complete weeks, which is 51, or months, which is 11.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Resiliency]] (1), [[Hardware]] (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Backing up Azure file shares and blobs demo](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=0)** - [Instructor] I've switched to the portal to show how to set up [[Microsoft Azure|Azure]] file share backup.
>
> **[0:04](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=4)** This storage account has a file share called files backup and within it two directories, one with a picture and one with a work document.
>
> **[0:14](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=14)** To back up this file share I'll search for recovery services vault and select recovery services vaults in the dropdown.
>
> **[0:24](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=24)** This is an old vault from a previous configuration.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=27)** I'd like to create a new one for this demo.
>
> **[0:31](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=31)** So selecting the rg-02-02 resource group which is my resource group for this group of videos.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=39)** I'll set the vault name to nas0202vault and I'll leave the location at UK South and move on to the networking tab.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=54)** Here I can choose how the vault can be accessed either publicly or privately through a private endpoint.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=60)** I'll leave this as public for the demo and click review and create and then create.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=70)** The recovery services vault has created.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=72)** So I could go to the new vault to create the backup but I'd like to use the backup center which I'm going to search for at the top as the backup center is a single point to manage all backups.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=87)** To use the backup center we need to add a backup and choose Azure files from the dropdown list for the data source type.
>
> **[1:36](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=96)** Now I need to choose the vault to backup to.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=100)** This is the recovery services vault that I just created.
>
> **[1:43](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=103)** So I click this and click select and continue to move on.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=108)** Now I need to select the storage account which holds the file share.
>
> **[1:53](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=113)** Sometimes this may appear empty as it is still discovering supported resources, which we can see listed at the top here.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=123)** My storage account that I created for this demo isn't listed, and we can see this call out at the top.
>
> **[2:09](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=129)** So I'm just going to cancel this and wait a few moments.
>
> **[2:14](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=134)** I've waited a few more moments for the storage accounts to be discovered, and this is the storage account for this set of demos in resource group rg-02-02.
>
> **[2:25](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=145)** So I'll select this storage account, and I want to enable the lock on the storage account to protect my snapshots.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=152)** So clicking okay, the storage account is registered with the vault.
>
> **[2:40](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=160)** It's taken a few moments, but the storage account has now registered and I can add the file share or shares that need to be backed up.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=170)** Files backup is listed so I can select it and click okay.
>
> **[2:55](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=175)** Moving to the policy details, the default policy of a daily backup with 30 days retention can be edited.
>
> **[3:05](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=185)** The schedule frequency can be changed to hourly if required.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=189)** And next is retention range.
>
> **[3:11](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=191)** We can choose weekly, monthly, and yearly with yearly backup points that can be set all the way out to 10 years, along with the day or week of a backup depending on their restore point.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=207)** There are limits though.
>
> **[3:28](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=208)** If I change the number of monthly backup points to 200, a warning is shown as the number of restore points exceeds the maximum of 200.
>
> **[3:39](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=219)** So I'll reset it back to 120.
>
> **[3:43](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=223)** Now I'd like to keep all of these at the defaults but I'm going to rename my policy to daily 30 days and click okay to enable the backup.
>
> **[3:58](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=238)** Now, while that enables, I'll return to the backup center and set up operational backups for blobs.
>
> **[4:09](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=249)** The start is the same by clicking add backup but this time the resource is Azure blobs.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=258)** Continuing on, I now need to create a vault and this time it is a backup vault, which I'll create in my same resource group rg-02-02 and enter a vault name of sa0202bv for backup vault.
>
> **[4:39](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=279)** I'll leave the vault in UK South and choose local redundancy and click review and create and create to create the backup vault.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=294)** The vault is created and the name is loaded into the vault selection.
>
> **[4:58](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=298)** So I will click next to move on and create a backup policy.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=303)** I have no backup policies, so I'll click create new, and I'd like this backup policy to be seven days.
>
> **[5:11](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=311)** So I will name it accordingly and move to create the retention rules.
>
> **[5:16](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=316)** The default rule is 30 days.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=318)** I'll edit this and change it to seven.
>
> **[5:22](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=322)** Note that this can be days, weeks, or months up to a year as described earlier.
>
> **[5:29](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=329)** Note this warning, the older the recovery point the longer the restore job may take.
>
> **[5:36](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=336)** I'm happy with this, so I'll save the update and create the backup policy.
>
> **[5:44](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=344)** The backup policy is now created and selected so I click next to choose the data store.
>
> **[5:51](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=351)** To choose the storage account I click add and it is the sa0202 storage account that I need to back up and I'll choose to select this one item.
>
> **[6:04](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=364)** The validation process has found an error.
>
> **[6:06](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=366)** The identity I'm logged in as does not have storage account backup contributor for this storage account.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=373)** So I can choose the storage account and assign the missing roles directly from here and I'll do it at the resource scope.
>
> **[6:24](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=384)** The role is now assigned and it's just waiting a few seconds before it automatically revalidates.
>
> **[6:31](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=391)** Automatic revalidation has kicked off.
>
> **[6:34](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=394)** We just need to wait for that to complete.
>
> **[6:38](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=398)** Validation is now successful so I can click next and choose to configure the backup.
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=405)** The backup job is now configured and I can see all the backup jobs by entering backup jobs on the left hand side and I need to change the data source type because I don't have any Azure [[Virtual Machines]] being backed up.
>
> **[6:59](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=419)** So I can look at files and I can see the files backup that I set up earlier.
>
> **[7:06](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=426)** There are of course limitations to both of these backups such as operational blob backup can only be enabled on general purpose V2 storage accounts.
>
> **[7:16](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=436)** To review these limitations, follow the two [[Microsoft]] Learn document links that are displayed now.
>
> **[7:31](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=451)** I've now left the two backup configurations overnight and I'm back in the backup center and the overview page.
>
> **[7:38](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=458)** It states that no jobs have run in the last 24 hours for blobs.
>
> **[7:44](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=464)** This is due to the continuous backup nature of blobs in this configuration so it doesn't actually require a backup job to run.
>
> **[7:52](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=472)** If I change the resource type now to Azure files, it states that one schedule backup has run and this is for the file share that was chosen.
>
> **[8:03](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=483)** A new feature of vaulted backups for blobs and files is currently in preview.
>
> **[8:08](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=488)** It's designed to backup data outside of the local storage account to a backup vault.
>
> **[8:14](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=494)** This will give blob backups retention of up to 10 years and the ability to restore to a different account.
>
> **[8:20](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=500)** Although preview items do not always go to GA, I feel this is certainly one to keep an eye on.
>
> **[8:26](https://www.linkedin.com/learning/manage-storage-in-azure/backing-up-azure-file-shares-and-blobs-demo?u=76281980&t=506)** With the backups now configured, join me in the next video to look at disaster recovery and failover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Virtual Machines]] (1), [[Microsoft]] (1)
> **UI Navigation:** dropdown (2), go to (2), select the (1)
> **Prerequisites:** set up (3), configure (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** warning (2), note that (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** picture (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Disaster recovery and failover](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=0)** - [Instructor] If disaster strikes and a major unplanned outage occurs, your use case may require building in [[Resiliency]] to withstand the outage.
>
> **[0:10](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=10)** To enable such resiliency in [[Microsoft Azure|Azure]] Storage, Geo-Redundant Storage accounts support failover to the secondary region.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=18)** If you recall from the first video in this chapter, Geo-Redundant Storage is asynchronously replicated from the primary to the secondary region, which can also have a read-only endpoint.
>
> **[0:32](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=32)** During operation of a Geo-Redundant account, should the primary endpoint become unavailable, the primary region is also possibly unavailable, and asynchronous replication will cease.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=47)** If a region is lost due to a major disaster or has been unavailable for a long period of time, then [[Microsoft]] may initiate failover, but customers can also initiate failover in the event of primary endpoint outage.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=62)** Until failover is complete, no write access is available, but read access is available if the account was RA-GRS or RA-GZRS.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=73)** On completion of failover, the endpoint DNS has been updated to the new primary and writes can proceed once more.
>
> **[1:22](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=82)** Note, as shown in this diagram, the new primary is locally redundant storage.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=88)** To start replicating back to the original primary region, you will need to change the new primary to be geo-redundant.
>
> **[1:36](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=96)** Because premium accounts do not support geo-redundancy, then only general-purpose v2 is supported for customer-initiated failover.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=105)** There are also further support considerations, such as disabling operational backup for blobs before initiating failover.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=115)** I've switched into the portal to show how to manually initiate failover for a storage account.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=121)** This is the overview page for the storage account that I've created for this demo.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=126)** Rephrase for this demo.
>
> **[2:08](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=128)** The storage account is set to RA-GRS replication with a primary region of UK South and a secondary at UK West.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=137)** Now, before failing over I would like to check the last sync time, so that I know the last time data from the primary was guaranteed to be written to the secondary.
>
> **[2:27](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=147)** This will give me an estimate for data loss after failover.
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=151)** This value can be obtained using [[Powershell]] or the Azure [[CLI]].
>
> **[2:35](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=155)** So I'll open the Cloud Shell, and I'll copy in a command to do this.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=163)** This Azure CLI command will show in this storage account, which is listed here, the geo replication stats, and I want to see the last sync time.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=179)** The last sync time for the storage account has now been displayed.
>
> **[3:04](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=184)** We can also see the last sync time in the portal when entering the redundancy pane, which actually shows quite a nice graphic of the redundancy setup.
>
> **[3:16](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=196)** And in the prepare for failover section, I can see the last sync time also shown at the top.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=203)** And there are further notes which also speak about the amount of time it may take, which is typically less than an hour.
>
> **[3:31](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=211)** I'm going to type "yes" to confirm that I would like to failover, and hit Failover to initiate the failover.
>
> **[3:42](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=222)** This account has now failed-over, and is listed as being available at UK West only, and is also locally redundant storage.
>
> **[3:53](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=233)** From here, I could set up geo-replication once more, but notice as this is originally an RA-GRS account, I cannot now choose geo-zone redundancy.
>
> **[4:06](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=246)** I must choose a local redundancy in the primary and the secondary.
>
> **[4:12](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=252)** So that's how to initiate customer-managed failover for a Geo-Redundant Storage account.
>
> **[4:17](https://www.linkedin.com/learning/manage-storage-in-azure/disaster-recovery-and-failover?u=76281980&t=257)** Join me in the next video where we'll explore a different type of replication for blobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Resiliency]] (2), [[CLI]] (2), [[Microsoft]] (1), [[Powershell]] (1)
> **Env Vars:** grs (3), cli (2), gzrs (1), dns (1)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** in the next (1)
> **Tools:** powershell (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Object replication for blob data](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=0)** - [Instructor] Geo redundancy for a storage account enables [[Resiliency]] of data for a regional pair.
>
> **[0:06](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=6)** But what if you have a use case that requires replication of data beyond regional pairing or for purposes outside of failover?
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=15)** [[Microsoft Azure|Azure]] storage has object replication which is available for block blobs only.
>
> **[0:20](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=20)** Object replication allows block blobs from one container to be asynchronously replicated to another region.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=27)** Note on this diagram, UK South is not a paired region with East Asia.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=33)** Object replication can also be to the same region or a different region in separate subscriptions.
>
> **[0:41](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=41)** Also, object replication can be enabled to replicate block blobs to a subscription in a different tenant.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=50)** The use cases for object replication for blobs are often around disaster recovery and enabling the ability to have a backup of the blob data outside the local storage account.
>
> **[1:01](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=61)** Use cases can also include copying data for processing by workloads outside of the current subscription or tenant along with keeping a copy of the data in an archive.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=73)** Let's look at how to get this configured in the portal.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=76)** I've already created this resource group and it contains three storage account, two in UK South and one in East Asia.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=85)** I'm going to set up replication from the sa0204 prefix storage account to the other two accounts.
>
> **[1:34](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=94)** The sa0204 is the source account, and first of all I'll check that the prerequisites for object replication are enabled by checking the data replication settings of the account.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=108)** Scrolling down to tracking, versioning for blobs and blob change feed must be enabled.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=114)** We will cover the capabilities of both of these later in the course.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=120)** Returning to the resource group and into the data protection settings of the target accounts and scrolling down to tracking once more.
>
> **[2:12](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=132)** These require versioning for blobs be enabled but not blob change feed.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=138)** Now that's the pre-reqs checked.
>
> **[2:20](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=140)** Let's have a look at the source data.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=144)** Entering the containers for the source storage account we can see there are two [[JSON]] and text.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=152)** I'm going to replicate JSON to the same region and text to East Asia.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=158)** Inside each container, there are a couple of blobs and a blob inside each of the virtual directories.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=165)** I'm going to use these virtual directories to filter the blobs to be replicated.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=171)** To set up replication, we go back to the storage account and into object replication, which is under [[Data Management]].
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=179)** Firstly, I'd like to look at advanced settings.
>
> **[3:02](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=182)** Here I can choose to turn off cross tenant replication which is a recommendation in the Azure architecture documentation for the security of storage account.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=194)** Now to add the first replication rule by clicking on create replication rules.
>
> **[3:20](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=200)** Up to a thousand rules can be added in the portal.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=203)** If you need more than that you can upload the configuration in a JSON format.
>
> **[3:28](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=208)** I only want to add a couple of rules so I'll be adding them manually.
>
> **[3:33](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=213)** The first rule I want to add is to the same region.
>
> **[3:36](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=216)** So my destination storage account that I would like to choose is sasame.
>
> **[3:42](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=222)** I then choose the JSON source container and I'd like to send this to the JSON same region target container.
>
> **[3:53](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=233)** Note you can choose to copy over everything or just new objects or you can also choose to set a custom target date.
>
> **[4:04](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=244)** I'll choose everything and click save.
>
> **[4:07](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=247)** That's it for this rule.
>
> **[4:09](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=249)** So I'll click create to create the rule.
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=254)** That's my first rule created.
>
> **[4:16](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=256)** For the second rule, I would like to choose the cross region account of sacross.
>
> **[4:24](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=264)** This time, I'd like to choose the text containers, which are in each of the accounts.
>
> **[4:31](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=271)** However, I want to add a filter that will only replicate the blobs in the cross virtual directory so I'm going to choose a filter of cross/ and click save.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=286)** I'm also going to leave the copy over to only new objects and click create to create this new rule.
>
> **[4:57](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=297)** And that's the new rule created.
>
> **[5:01](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=301)** Returning to the resource group and looking at the target account in the same region, the container that I chose as a replication container has had all the blobs from the source container copied to it.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=318)** But if I go up a level and into the text container nothing has been replicated to the text container, which is as I configured.
>
> **[5:29](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=329)** If I return to the resource group and into the cross region storage account and its containers, and into the text container and into cross because it was this virtual directory that I chose to replicate, I'll upload my new blob.
>
> **[5:48](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=348)** Just search for a blob on my machine.
>
> **[5:51](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=351)** The logo file will do nicely and upload this blob.
>
> **[5:55](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=355)** Now going to the target container, which is our cross region storage account into container and text cross region.
>
> **[6:05](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=365)** The blob hasn't appeared yet.
>
> **[6:06](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=366)** Now this isn't unusual so we can actually check the replication status of the blob at source account by going back to the blob and looking at its properties.
>
> **[6:22](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=382)** At the source account that I just created the object replication policy ID is shown as complete so the blob should now be there.
>
> **[6:31](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=391)** So if I return to the target container and into our cross region virtual directory the [[LinkedIn]] logo blob file is present.
>
> **[6:46](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=406)** The replication status of a blob is a key property when working with object replication for blobs as there is currently no SLA on how long it would take to replicate to the destination account.
>
> **[6:58](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=418)** This was quite a small file and it still took nearly a minute to come across.
>
> **[7:04](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=424)** We've now explored redundancy, backup, and disaster recovery in this chapter.
>
> **[7:09](https://www.linkedin.com/learning/manage-storage-in-azure/object-replication-for-blob-data?u=76281980&t=429)** Come and join me in the next chapter on how to manage networking for storage, and also for how to create storage using [[Infrastructure as code (IaC)|infrastructure as code]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Microsoft Azure|Azure]] (2), [[Resiliency]] (1), [[Data Management]] (1), [[LinkedIn]] (1)
> **Env Vars:** json (5), sla (1)
> **Cross-References:** later in (1), go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 3. Networking and Infrastructure as Code for Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Storage account firewalls and virtual network access](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage has multiple network configurations at the storage account level, ranging from public to private, the choice of which will depend on your application or system's scenarios.
>
> **[0:12](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=12)** For example, until this point in the course, all of the storage accounts that I have used in the demos have been set to be enabled from all networks.
>
> **[0:20](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=20)** This means that the endpoint for the storage account is publicly accessible, so any virtual machine from in Azure, or on-premises, or any client anywhere on the Internet, even bad actors, can hit the public endpoint, so long as there is some Internet access from their clients.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=40)** My scenario for this configuration was that I didn't want to talk through networking too early in this course.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=47)** But this configuration is unlikely to be secure enough in most scenarios, so Azure Storage accounts have the option to enable access from virtual networks and IP addresses.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=59)** You can then start adding firewall rules, such as only allow IP address 217.26.25.32, which in the case of this diagram would block access from the virtual machine in Azure, along with the internet client, leaving just machines from the on-premises static IP able to hit the endpoint.
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=81)** However, what if your [[Virtual Machines]] are in Azure and have no public internet access, or you don't want your traffic travelling over the internet?
>
> **[1:31](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=91)** In this scenario, you can enable traffic from a specific virtual network and subnet through a service endpoint.
>
> **[1:38](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=98)** With a service endpoint, it is the private IP address that is now the source IP, and traffic travels over the Azure backbone.
>
> **[1:47](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=107)** Service endpoints are a secure, direct connection to past services in Azure.
>
> **[1:53](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=113)** Now, there is a possible issue with this setup.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=116)** The machines on-premises cannot connect to the endpoint by default, even if the network is extended over ExpressRoute.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=124)** You must add further configuration as there is no native support for on-premises integrations.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=131)** Switching into the portal, we will look at how to enable access from virtual networks and IP addresses with firewall rules.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=139)** I have already deployed some resources into this resource group for the video RG0301.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=146)** There is a virtual machine which is attached to this VNet in UK South.
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=151)** There is also a second VNet in East Asia.
>
> **[2:35](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=155)** I also have a storage account also in UK South.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=159)** Clicking to view the storage account and entering the networking tab, this storage account is currently accessible from all networks, which means if I enter one of its containers and into its blob properties to copy the blob's URL, and paste it into the top of my browser, I can access the blob and even download it.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=189)** Navigating back to the networking page for my storage account, if I now choose to enable selected virtual networks, and IP address, and click Save.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=207)** It sometimes takes a few moments to process, but if I go back to the tab with my blob on and reload the page, I can no longer access it.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=217)** The firewall rule is preventing access.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=221)** So, to allow access from my machine specifically, I can add an IP address firewall rule, which can be a single IP address, or a range of IP addresses inside a format.
>
> **[3:53](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=233)** I can just choose here to add my client IP address and click Save, which adds it to the address range.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=242)** So going back to the blob URL and refreshing, I can now access the blob once more.
>
> **[4:11](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=251)** If you remember, back in our resource group, we also had a virtual machine.
>
> **[4:21](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=261)** I'll switch to this virtual machine now and paste in the blob URL.
>
> **[4:27](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=267)** And as expected, the firewall rule, which is only allowing the IP address from my client, has blocked access.
>
> **[4:35](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=275)** Now, I'd like to add access to this VM through a service endpoint, so that it is connecting from its private IP address over the Azure backbone.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=286)** So, I'll click on the networking pane within the storage account, and I have to choose to add an existing virtual network, and I will choose the VNet which was Vnet-0301, and the subnet, which is Snet-0301, which is the subnet the virtual machine is attached to.
>
> **[5:12](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=312)** Clicking Enable, note that the portal has detected that the [[Microsoft]]. Storage Service endpoint needs to be enabled for this subnet.
>
> **[5:22](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=322)** So, when I click to enable, the endpoint status switches to enabling, and this will make the subnet known to the service so that its traffic can be allowed through once added.
>
> **[5:34](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=334)** Now that the service endpoint is enabled, I can add the virtual network.
>
> **[5:39](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=339)** And the VNet has been added to the configuration.
>
> **[5:42](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=342)** And now I just need to click Save to configure.
>
> **[5:46](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=346)** The configuration has successfully saved.
>
> **[5:49](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=349)** So, if I switch back to my virtual machine, and if I click to refresh, my blob now loads.
>
> **[5:59](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=359)** Moving back to the portal, there are a couple of other items in here that I would like to look at.
>
> **[6:05](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=365)** If you recall all of the resources in the deployment, there was a second VNet and subnet in East Asia.
>
> **[6:11](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=371)** If I select to add these into the virtual network section of the networking configuration, it now states that a Microsoft Storage.GlobalService endpoint is required.
>
> **[6:28](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=388)** This is a cross-region service endpoint, as East Asia is not in the same region as the storage account, and is also not a paired region of the storage account.
>
> **[6:41](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=401)** Scrolling down a little further, I'm going to leave resource instances to explain in a future video.
>
> **[6:48](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=408)** Next, there are the exceptions.
>
> **[6:50](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=410)** These are for resources in Azure that cannot be added in through network rules, such as Azure Backup and Azure Site Recovery, which may need to access the storage account.
>
> **[7:00](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=420)** For services such as these, a firewall rule allows access to trusted services, which authenticate using strong authentication such as a system-managed identity, and we will cover managed identities later in this course.
>
> **[7:14](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=434)** Finally, there is read access to logs and metrics generated by diagnostics on the storage account.
>
> **[7:21](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=441)** These can be read from anywhere once turned on.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=443)** But be careful here though, there is information in these logs and metrics that could leave your storage account open to being attacked.
>
> **[7:32](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=452)** That's the end of this video on configuring firewall rules for a storage account public endpoint.
>
> **[7:38](https://www.linkedin.com/learning/manage-storage-in-azure/storage-account-firewalls-and-virtual-network-access?u=76281980&t=458)** In the next video, it's time to look at private endpoints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Microsoft]] (2), [[Virtual Machines]] (1)
> **Env Vars:** url (3), rg0301 (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** go back to (1), later in (1), in the next (1)
> **UI Navigation:** switch to (1), click on (1)
> **Warnings:** note that (1), be careful (1)
> **Prerequisites:** setup (1), configure (1)

#### [Private endpoints for Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=0)** - [Instructor] When deploying a storage account through the portal or through [[Infrastructure as code (IaC)|infrastructure as code]], the storage account will default to enabling a public endpoint.
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=9)** As we saw in the previous video, access to data can be secured over the [[Microsoft Azure|Azure]] backbone by enabling a service endpoint and disabling access to IP addresses external to Azure.
>
> **[0:21](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=21)** However, the storage account endpoint is still exposed to the internet.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=25)** And in some scenarios, this may not meet compliance requirements.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=30)** This is where a storage account private endpoint can be deployed.
>
> **[0:35](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=35)** Here is a diagram of the same resources shown previously.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=39)** By adding a private link to the virtual network, Azure [[PaaS]] services such as Azure Storage can be accessed through a private endpoint.
>
> **[0:49](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=49)** Therefore, traffic between resources in the VNet and the storage account travel via the private link o n the Azure backbone, removing any exposure to the internet.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=62)** DNS resolution is used to route the traffic to the private endpoint creating a private DNS zone attached to the VNet by default or by updating DNS configuration if the VNet is using a custom DNS server.
>
> **[1:17](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=77)** Outside the VNet, the storage endpoint URL resolves to the public address and inside the VNet to the private address.
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=84)** A DNS record is required for each primary and secondary storage service to be made private as each has its own endpoint.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=93)** Another feature of storage private endpoints is the native support for access from on-premises applications through a VPN or ExpressRoute, and to regionally or globally peered VNets which enables private access to data for a hub and spoke topology.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=112)** Access to the public endpoint can be disabled removing compliance concerns.
>
> **[1:59](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=119)** I switched to the portal now to show you how to deploy a private endpoint in the portal.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=124)** This resource visualizer is showing the deployment in this resource group, which has a single VM, a VNet, and this storage account.
>
> **[2:14](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=134)** There are containers in the storage account which contain blobs, and I've already tested that the blobs are accessible by loading one of the URLs in the virtual machine.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=150)** Jumping back to the portal and into the Networking tab, I'll switch public network access to be disabled and click Save.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=163)** And switching back to the virtual machine and refreshing the browser, access to the blob has been stopped by disabling the public endpoint.
>
> **[2:55](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=175)** Switching back to the portal once more, I can add a private endpoint through this tab, private endpoint connections, and adding a private endpoint.
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=188)** I'll add a name for my private endpoint and this automatically fills in the network interface name.
>
> **[3:17](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=197)** A NIC is required as this is how the endpoint is injected into the VNet.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=203)** Clicking next, the target subresource is the storage service that requires the endpoint.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=209)** I am setting up a private endpoint to read blobs so I will select blob in the dropdown.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=217)** Clicking Next once more, the virtual network where the endpoint will be deployed to is vnet-0302, and I'd like to deploy to the snet-plink which is currently empty.
>
> **[3:53](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=233)** Moving to the DNS tab, the default is to integrate the zone which changes the DNS CNAME resource record for the storage account to an alias in a subdomain with the prefix of private link.
>
> **[4:06](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=246)** This also creates the zone with a record for the private endpoint.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=250)** We can now move through the tabs to Review and Create to create the endpoint.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=265)** The endpoint is now created.
>
> **[4:27](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=267)** So clicking on Go to Resource and into DNS configuration, the NIC that has been created is displayed along with the updated DNS configuration.
>
> **[4:39](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=279)** And if I switch back to my virtual machine and refresh the browser, the blob is accessible once more so the private endpoint is functioning correctly.
>
> **[4:50](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=290)** And that's how to create a private endpoint from within the portal where private endpoints are protecting your data from exfiltration through public endpoints.
>
> **[5:01](https://www.linkedin.com/learning/manage-storage-in-azure/private-endpoints-for-azure-storage?u=76281980&t=301)** In the next few videos, we'll build up to creating this exact deployment but using infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[PaaS]] (1)
> **Env Vars:** dns (9), nic (2), url (1), vpn (1), cname (1)
> **Cross-References:** as we saw (1), previous video (1), in the next (1)
> **UI Navigation:** dropdown (1), go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Create and manage a storage account with Azure PowerShell](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=0)** - [Presenter] Working with resources in [[Microsoft Azure|Azure]] through the portal is intuitive and a great way to start when learning.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=7)** But when starting to work hands-on with Azure every day, it can quickly become apparent that using the portal is not the most efficient method of managing resources.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=18)** By automating resource management using scripting, you can take a standard approach to complex and time consuming tasks.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=27)** These scripts can be shared and reused across environments ensuring the same results each time.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=33)** Or if a script needs to evolve, it can be version controlled.
>
> **[0:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=38)** Version controlled scripts can also serve as documentation of a task or an environment.
>
> **[0:45](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=45)** The key factor here is automation reduces human error and therefore saves time and money.
>
> **[0:52](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=52)** [[Powershell]] is [[Microsoft]]'s task automation solution and Azure PowerShell is a set of commandlets that are used for managing Azure resources.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=63)** Azure PowerShell works on [[Windows]], macOS and [[Linux]] and can be authenticated using multiple methods such as interactive browser based login, service principles and managed identity when executed from compute based in Azure.
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=81)** The command that's in Azure PowerShell call the Azure API with each Azure service usually having its own module.
>
> **[1:31](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=91)** As mentioned, you could use Windows, Linux, or even Mac to run Azure PowerShell commands.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=97)** But you can also run command line tools right here in the Azure portal using Azure Cloud Shell.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=104)** Azure Cloud Shell is a browser-based terminal.
>
> **[1:47](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=107)** It runs on a temporary host loaded each time the cloud shell is entered.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=114)** You can even upload or download data to the Cloud Shell session as its data is persisted on an Azure file share.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=123)** You also have the option of running a PowerShell or Bash session on the terminal.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=131)** The cloud shell comes with multiple tools already installed.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=135)** For example, [[Git]] for [[Version Control]] or [[Ansible]]
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=146)** which is a configuration tool.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=149)** And there's also Docker.
>
> **[2:33](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=153)** A Docker is used to build, run, and manage containers in the cloud.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=158)** And if I copy a command in from my notes, and of course Azure Cloud Shell comes with Azure PowerShell modules already installed.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=170)** Now we are going to look at creating a storage account within the Azure Cloud Shell using Azure PowerShell Commandlets.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=178)** So to create a storage account, first you'll need to be authenticated to Azure and this requires the Connect AZ account command lit.
>
> **[3:06](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=186)** So pasting in a further command and listing the examples and scrolling a little further up.
>
> **[3:15](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=195)** You can see the different mechanisms to authenticate that are mentioned in the previous slides.
>
> **[3:20](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=200)** Here we're authenticating with a service principle.
>
> **[3:24](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=204)** This is how to log in interactively or further down, we have examples for using system assigned or managed assigned identities.
>
> **[3:34](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=214)** And I'll explain more about these in the next chapter.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=218)** Now I'm already authenticated into Azure as I'm already logged in through the Azure portal so I don't have to run this command but I may need to set the context for the commands I would like to run.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=232)** For example, if I copy in another command from my notes,
>
> **[4:01](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=241)** this command lists all of the subscriptions that are available to me and I could use it to set the subscription that I'd like to use.
>
> **[4:09](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=249)** But I only have one available.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=250)** So I don't need to set the subscription.
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=254)** To create a storage account, I'll need to create a resource group and I can search for the command using get command which I'll paste into the session once more.
>
> **[4:28](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=268)** And this is listing the commandlets that I can use for a resource group.
>
> **[4:33](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=273)** And if I scroll up a little, we can see the command I need to use is new AZ resource group.
>
> **[4:42](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=282)** And I can use the help pasting in a command once more to look at the examples for this commandlet, just make the window a little bit bigger and scrolling up to the top, I'm going to need a location and a resource group name.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=303)** So I'm going to set these as PowerShell variables using these two commands that I'll paste in.
>
> **[5:13](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=313)** And now I can use these variables as part of my new AZ resource group command to create my resource group.
>
> **[5:22](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=322)** Now the output that is returned is a formatted version of the JS packet returned by the Azure [[Representational State Transfer (REST)|rest]] API.
>
> **[5:28](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=328)** The provisioning state, which is listed here, is succeeded.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=332)** So the resource group has created successfully.
>
> **[5:36](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=336)** Now to create the storage account.
>
> **[5:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=338)** The storage account modules are named around AZ storage so searching for those commands and I'll paste in the command once more, just get command AZ storage.
>
> **[5:50](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=350)** That is a lot of commands.
>
> **[5:54](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=354)** So clearing the page, I can narrow this down to the storage account command by using AZ storage account.
>
> **[6:02](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=362)** So pasting in a slightly different command, forget command AZ storage account.
>
> **[6:10](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=370)** And the command I'm looking for is listed here.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=373)** New AZ storage account.
>
> **[6:17](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=377)** Now I'm not going to use the get help and the examples this time as there are nearly 20 listed and it's difficult to read.
>
> **[6:24](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=384)** So I'll paste in an example of my own.
>
> **[6:26](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=386)** But first I'll set up some variables for the storage account.
>
> **[6:32](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=392)** And this sets up the storage account name.
>
> **[6:35](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=395)** And I can use this variable in my storage account command.
>
> **[6:42](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=402)** That's my storage account command that's been automatically entered as I've pasted it in.
>
> **[6:48](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=408)** So we have the storage account name, the location I set up earlier, the SKU, which is a geo-redundant storage account with a read endpoint and the kind which is a general purpose V2 storage account.
>
> **[7:04](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=424)** 'Cause this automatically entered the command when I pasted it in, I've also been warned of a breaking change from the API the default for allowing public access.
>
> **[7:14](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=434)** Two blobs will be set to force by default in the future.
>
> **[7:19](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=439)** At the bottom, now the command has executed, the output for the storage account is returned.
>
> **[7:24](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=444)** It is a do net object from which the value shown on the screen are taken.
>
> **[7:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=449)** These include the create time, and this says, "The storage account has been created successfully."
>
> **[7:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=458)** I can now use the get AZ storage account commandlet to retrieve information about my storage account that has just been created and I can store this into a variable.
>
> **[7:51](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=471)** And then I can use the variable to return details about the storage account.
>
> **[7:55](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=475)** For example, I can list all the variables and properties that I can select from the storage account.
>
> **[8:04](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=484)** And these can all be accessed and viewed.
>
> **[8:07](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=487)** For example, all of the primary endpoints for the storage account.
>
> **[8:14](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=494)** And because this is geo-redundant, all of the secondary endpoints for the storage account I can even see the connection strings.
>
> **[8:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=509)** Apologies, I spelled that wrong.
>
> **[8:32](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=512)** And I can even see the connection strings which include a method of authentication called an account key which we'll cover in the next chapter.
>
> **[8:41](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=521)** Now we've finished looking at our storage account.
>
> **[8:43](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=523)** I can even paste in a command which will remove the storage account.
>
> **[8:49](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=529)** And it's just checking if I'm sure I really want to do that, which I am.
>
> **[8:53](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-azure-powershell?u=76281980&t=533)** So I'm going to enter, Yes and the storage account is deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (22), [[Powershell]] (9), [[Windows]] (2), [[Linux]] (2), [[Microsoft]] (1)
> **Tools:** powershell (9), azure portal (2), terminal (2), command line (1), bash (1)
> **CLI Commands:** az (9), docker (2), git (1), ansible (1), make (1)
> **Definitions:** is a  (8)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** api (3), sku (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Cross-References:** in the next (2)

#### [Executing Azure PowerShell in scripts with the Cloud Shell code editor](https://www.linkedin.com/learning/manage-storage-in-azure/executing-azure-powershell-in-scripts-with-the-cloud-shell-code-editor?u=76281980)

#### [Create and manage a storage account with the Azure CLI](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=0)** - [Instructor] A second command line language is available to manage resources in [[Microsoft Azure|Azure]], the Azure Command Line Interface or Azure [[CLI]].
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=9)** The structure of a command in Azure CLI differs from that of [[Powershell]], which has a very specific verb-noun structure.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=18)** The CLI commands are split into five parts.
>
> **[0:21](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=21)** The AZ indicates that the command being input is for the Azure CLI.
>
> **[0:26](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=26)** The group denotes a major resource or service in Azure such as storage for Azure Storage or VM for Virtual Machine.
>
> **[0:36](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=36)** Some services also have subgroups that can be worked with using the CLI.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=40)** Azure Storage has subgroups for the blob, file, queue, and table services.
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=46)** Next is the command, such as delete, list, create, or show.
>
> **[0:51](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=51)** And finally, the parameters that the command needs to execute.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=55)** These can be flags, options, and arguments.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=59)** I've switched back to the portal and I've already entered the cloud shell, so that I can start working with Azure CLI.
>
> **[1:06](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=66)** But this time I'm going to switch to the bash shell, which is a [[Linux]] or Unix shell.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=71)** And I can do this by choosing bash here on the left.
>
> **[1:15](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=75)** The cloud shell reloads and mounts my cloud file share drive, the same drive that was mounted to PowerShell in the last video.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=85)** Which is why, if I list the directories, my repro from my [[GitHub]] repository is still present.
>
> **[1:35](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=95)** Help with the Azure CLI commands is using the --help command.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=100)** (keyboard clicking) So, if you already know the service you are looking for, which I did here, group is for resource group, you can type AZ the service name and --help.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=114)** The help lists the group's commands and its possible subgroups.
>
> **[1:59](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=119)** Looking at the list, the command I'll need is create.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=123)** I don't need a subgroup for this one, I can continue digging further though with --help.
>
> **[2:09](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=129)** (keyboard clicking) Make this window a little bigger.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=135)** This has listed the required parameters for the AZ group create of location and name.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=142)** So, I'll complete my command now with both of these.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=146)** I'm pasting in a command that I've saved earlier.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=149)** So, there's the resource group name and the location.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=154)** And hitting return the group is created, and a [[JSON]] response is returned showing the resources properties along with the provision state of succeeded.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=165)** If you are searching for a command, the Azure CLI contains an AI knowledge base of commands which use the [[Microsoft Word|word]] find.
>
> **[2:54](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=174)** For example, I can try and find AZ storage.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=181)** And here a list of common ways to use AZ storage is displayed.
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=188)** The Azure CLI also has AZ Interactive.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=194)** This is an interactive environment designed to help learn Azure CLI with auto-completed drop-downs, and examples of how to use each command.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=205)** Just wait for it to load.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=207)** It's loaded now.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=209)** For example, if I type storage and press space, I am given a list of subgroups.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=218)** I'd like to create an account, so I'll choose Account and space once more, and its available subgroups are shown to me, which include the create command.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=231)** So, I can type create and press space once more and now the list of available arguments, and switches are displayed.
>
> **[4:01](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=241)** I'm going to add the two required parameters of name, which I'm going to set to SA0304AZCLI, and also, pressing space, it's automatically filled in the resource group.
>
> **[4:17](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=257)** (keyboard clicking) I'm going to set the resource group to RG0304, which is my resource group for this video.
>
> **[4:29](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=269)** So, that's the mandatory parameters entered, so hitting return, it's taking a moment, the storage account has created and if I scroll up, I can see the JSON representation of this storage account.
>
> **[4:45](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=285)** We have the SKU, which was set to standard geo-redundant storage with a read-only access point, and all of the endpoints are also listed.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=295)** Now, typing quit will exit out of AZ Interactive.
>
> **[5:01](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=301)** Now, with this being a command line tool, we can, of course, run bash scripts of Azure CLI commands.
>
> **[5:07](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=307)** So, by changing directory into the GitHub repository chapter 3 of this course, and pasting in a command that will show a script file on screen, using the bash cat command.
>
> **[5:26](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=326)** At the top of the script are the variables and these are passed to the AZ storage account create command at the bottom.
>
> **[5:35](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=335)** Pasting in a further command I'm going to execute the script.
>
> **[5:42](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=342)** Fortunately, I haven't got the correct permissions to execute it, so I'll just fix that now, (keyboard clicking) and try and execute the script once more.
>
> **[5:58](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=358)** If we wait a moment, the script starts to run, and the storage account is created.
>
> **[6:06](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=366)** Now, this is also where Azure CLI, and Azure PowerShell differ.
>
> **[6:11](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=371)** So, if I execute the same script once more, the command executes successfully.
>
> **[6:17](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=377)** Now in PowerShell, this would display a resource already exists error.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=383)** This is because the Azure CLI is idempotent.
>
> **[6:27](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=387)** It doesn't matter how many times you run the command; you will always receive the same result.
>
> **[6:33](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=393)** In PowerShell, I would need to check the existence of the resource first to check that it didn't exist.
>
> **[6:40](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=400)** So, when should you use the Azure CLI and when should you use PowerShell?
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=405)** Although both run on [[Windows]], Mac and Linux, there are some differences, such as shell support as shown in this table, that may sway your choice.
>
> **[6:55](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=415)** But [[Microsoft]]'s recommendation says, it's up to you.
>
> **[6:59](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=419)** You should take your experience into account.
>
> **[7:02](https://www.linkedin.com/learning/manage-storage-in-azure/create-and-manage-a-storage-account-with-the-azure-cli?u=76281980&t=422)** So, if you are from a Windows sysadmin background and have a strong history with PowerShell, then Azure PowerShell is likely to have less of a learning curve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), [[CLI]] (14), [[Powershell]] (8), [[Linux]] (2), [[GitHub]] (2)
> **Env Vars:** cli (14), json (2), sa0304azcli (1), rg0304 (1), sku (1)
> **Tools:** powershell (8), bash (4), command line (3), github (2)
> **CLI Commands:** az (8), find (2), make (1), cat (1)
> **Analogies:** such as (2), for example (2)
> **Non-Speech:** (keyboard clicking) (4)
> **UI Navigation:** switch to (1), scroll up (1)
> **Definitions:** is a  (1), is an  (1)

#### [Deploy infrastructure for Azure Storage using Azure Bicep](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=0)** - [Instructor] One of the key features of cloud deployments is the ability to deploy a complete infrastructure using code.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=7)** This is also known as [[Infrastructure as code (IaC)|infrastructure as code]] or IAC for short.
>
> **[0:14](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=14)** In [[Microsoft Azure|Azure]], this is possible due to the Azure Resource Manager which enables requests to be passed to Azure Services through a single API, regardless of the type of requester as shown in this image from the [[Microsoft]] documentation.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=30)** The Azure Resource Manager can also take ARM templates to create a resource or multiple resources where an ARM template describes the desired outcome of the resources in a [[JSON]] format.
>
> **[0:43](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=43)** For example, if I access this storage account and scroll down on the left hand side and under automation choose to export a template.
>
> **[0:53](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=53)** Then the Azure portal will generate an ARM template that could be exported as infrastructure as code, and used to create this resource once again.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=63)** In the background, it is the Azure Resource Manager that is generating the template and then passes it to the portal to display.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=73)** Scrolling down through the JSON definition you will see the properties of this storage account that we have already discussed such as the SKU and network settings.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=85)** Now, this template only contains a single resource but if I go back to the resource group by going through the overview, and then scroll down to export template for the resource group and just wait for the template to be generated.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=104)** There were over 12 resources in this resource group and the template has got a lot more complicated.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=112)** Now, this format is perfect for the Azure Resource Manager but authoring templates such as this is very demanding for most users.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=121)** This is why Azure Bicep was created to make the process of authoring complex deployments as infrastructure as code a lot easier.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=131)** Before taking a look at Azure Bicep this concept of describing the outcome is an important one for infrastructure as code.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=139)** So far in this chapter we have looked at scripting a deployment.
>
> **[2:23](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=143)** This is known as imperative deployment.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=146)** You are stating all the steps that must be taken to get your desired outcome.
>
> **[2:31](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=151)** Thinking in terms of creating a chocolate cake you would provide the recipe to follow.
>
> **[2:37](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=157)** This is very different to describing the outcome of a deployment, also known as a declarative deployment.
>
> **[2:44](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=164)** Coming back to the chocolate cake analogy, a declarative deployment would be like stating "I'd like a chocolate cake with icing", but it would leave the recipe to whomever is making the cake.
>
> **[2:57](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=177)** ARM templates and Azure Bicep are declarative approaches to infrastructure as code.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep?u=76281980&t=183)** On receiving a Bicep file or ARM template, the Azure Resource Manager decides the steps or compiles its own recipe for the deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Infrastructure as code (IaC)|Infrastructure as code]] (5), [[JSON]] (2), [[Microsoft]] (1)
> **Env Vars:** arm (5), json (2), iac (1), api (1), sku (1)
> **Exercise Files:** template (9)
> **Definitions:** known as (3), is an  (1)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### [Deploy infrastructure for Azure Storage using Azure Bicep demo](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=0)** - [Instructor] So what does a Bicep file look like?
>
> **[0:03](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=3)** This is Visual Studio Code.
>
> **[0:04](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=4)** I'm going to use this to show the excellent authoring experience it provides for Bicep through the Bicep extension.
>
> **[0:11](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=11)** The icon of four squares on the left opens the list of available extensions.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=17)** I will search for bicep, and install the extension, which is supplied from [[Microsoft]], closing the extension description, and going to the file view.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=30)** Now, if I create a file, which this file, I'll call demolive.bicep.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=37)** By giving the file the bicep extension, the VS code bicep extension will be utilized as I edit the file.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=47)** Now, clicking space bar, will kick off the Bicep intellisense that's built into the bicep extension.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=54)** To begin with, I'd like to create a resource.
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=57)** So I'll choose it, and I'll call this resource stg, which is the symbolic name for the storage resource that I'm going to create.
>
> **[1:08](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=68)** And this is how a specific resource is identified in a bicep file.
>
> **[1:14](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=74)** Adding another space, brings up a list of possible resource providers for the resource that I want to create.
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=81)** I am creating a storageAccount, so I type in storage and choose storageAccounts as my provider.
>
> **[1:30](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=90)** Next, is the API version I'd like to use.
>
> **[1:32](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=92)** I'm going to take the latest, but others are provided to try and ensure breaking changes to the APIs don't stop the [[Infrastructure as code (IaC)|infrastructure as code]] from working.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=104)** Typing the space bar once more, I have the choice of setting a definition for a resource or selecting an existing resource.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=112)** I'm creating a new one, so I'm going to choose the equal sign.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=116)** Typing space once more, I have the possibility of creating loops, using conditions, or in this case, I just want to choose to set up a template of storageAccount required properties.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=130)** And these are the required properties for storageAccount when defined in a bicep file.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=136)** I'll fill in the name as sa0305bicep, and strings must be placed within single quotes, and a location of uksouth.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=148)** (keyboard clattering) When I get to the name of the sku, pressing space will give me a list of valid skus, which I can pick from.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=158)** I'll choose Standard_LRS, and this is the same for kind.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=163)** We have our premium storage types and our general purpose V2 storageAccount.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=170)** Now notice the yellow line under uksouth, if I hover over it, it shows that best practices are not being followed and that the location should not be hard coded.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=181)** If I click Quick Fix, it's showing what the Quick fix is, which is to create a new parameter called location.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=190)** This is how parameters are coded within a bicep file.
>
> **[3:13](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=193)** The editor has even added a parameter decorator describing the parameter.
>
> **[3:18](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=198)** Parameters can be used as shown or overridden on deployment.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=203)** This is now ready to deploy at the default scope of resource group.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=207)** So saving the file, and switching into the Terminal, I'm going to use an [[Microsoft Azure|Azure]] [[CLI]] command to deploy this bicep file, and I've got a copy of the command in my notes and I'll paste it in.
>
> **[3:43](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=223)** I'll just change that to a little a.
>
> **[3:45](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=225)** (keyboard clattering) So az deployment group create, or create a deployment at the resource group level.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=235)** So long as the resource group already exists.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=239)** I'm passing in the template file that I've just created, which is demolive.bicep, and I just want to change these to specific single quotes.
>
> **[4:11](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=251)** Hitting enter, wait a few moments.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=255)** Bicep is now compiling into adjacent template to send to the resource manager.
>
> **[4:23](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=263)** This is compiled successfully and the deployment is now running.
>
> **[4:29](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=269)** The storageAccount has deployed, and scrolling up, we can see the [[JSON]] representation of the storageAccount deployment.
>
> **[4:41](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=281)** Now, this is a nice example to start with, but the real power of bicep is deploying more complex deployments with multiple interlinked resources.
>
> **[4:52](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=292)** This bicep file creates a storageAccount and a virtual machine, and VNet, and deploys the storageAccount into the VNet using a private link.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=303)** Before looking at some of the features of this bicep file, I can right click on the file and choose to Open the Bicep Visualizer, which will visualize the deployment for me, and show how all of the resources are linked.
>
> **[5:21](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=321)** Returning to the file, at the top, I have the parameters.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=325)** You will notice that the admin password is set as secure.
>
> **[5:30](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=330)** This means, it will not be shown at the command line or in the outputs in the portal.
>
> **[5:36](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=336)** You can also set up arrays of allowed parameters, and scrolling down, we have some variables.
>
> **[5:44](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=344)** For example, this is the storage name and it is being set to a unique value based on the resourceGroup id.
>
> **[5:51](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=351)** Scrolling down a little further, we have the definition for the storageAccount, and above it, the network, which you can see is a module, this means it can be reused by multiple bicep files and pass different parameters for each use.
>
> **[6:08](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=368)** Scrolling down a little further, we have the definitions for the PrivateEndpoint, and its private links, which take a subnetID from the network defined at the top to deploy into.
>
> **[6:22](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=382)** Right at the bottom of the file is the virtual machine, which is once again, a reusable module.
>
> **[6:29](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=389)** I can deploy this from the command line just as before using az deployment create, which I'll paste in the command from my notes.
>
> **[6:40](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=400)** Hitting return, the bicep file is compiled into adjacent format acceptable to the resource manager once more, and I need to add in an admin password.
>
> **[6:53](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=413)** The deployment will now run.
>
> **[6:58](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=418)** And after a moment, the deployment has finished.
>
> **[7:01](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=421)** And if we switch to the portal and into the resource group for this video, which is 0305, we can see all of the resources that were created by that bicep deployment.
>
> **[7:15](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=435)** And if I enter the storage account and go to its networking, the public network is disabled, and the private endpoints have been created.
>
> **[7:28](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=448)** Now, that's just the tip of the iceberg for infrastructure as code deployments with Azure Bicep.
>
> **[7:32](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=452)** But I'm sure you can see how powerful at all this can be.
>
> **[7:36](https://www.linkedin.com/learning/manage-storage-in-azure/deploy-infrastructure-for-azure-storage-using-azure-bicep-demo?u=76281980&t=456)** Join me in the next chapter where we'll look at authentication and authorization methods for Azure storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[CLI]] (1), [[JSON]] (1)
> **Code Identifiers:** storageaccount (9), storageaccounts (1), resourcegroup (1), subnetid (1)
> **Tools:** command line (2), visual studio (1), vs code (1), terminal (1)
> **UI Navigation:** click on (1), open the (1), switch to (1), go to (1)
> **Env Vars:** api (1), cli (1), json (1)
> **Exercise Files:** template (3)
> **Prerequisites:** set up (2), install (1)
> **CLI Commands:** az (2)


### 4. Authorizing Operations on Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [The control plane and the data plane](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=0)** - [Instructor] When starting to work with [[Microsoft Azure|Azure]] Storage for the very first time it can be really confusing why some operations are authorized and some are not.
>
> **[0:10](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=10)** For example, in the storage account, I have a container, and within this container is a single blob, which I can list and then using the three ellipses at the right hand side I can also view the blob.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=25)** But if I close this down and enter the cloud shell where you can see I've already logged in to AZ copy and this is with the same identity.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=37)** If I use the AZ copy command to access the same blob from the same storage account and download it to this destination, if I scroll up a little I get an authorized permission mismatch.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=54)** But how can this be when I can view it in the portal?
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=57)** Let's take a look at why.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=60)** When operating with resources in Azure, every interaction you have will either be in the control plane or the data plane, where the control plane enables management of resources in a subscription, and the data plane exposes capabilities of an instance of a resource.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=80)** For a storage account, management operations, such as creating, updating and deleting a storage account are all managed by the Azure resource manager.
>
> **[1:30](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=90)** And this is at the management.[azure.com](https://azure.com) endpoint.
>
> **[1:34](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=94)** The Azure resource manager applies Azure policy and appropriate management logs and writes to the activity log about each requested activity.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=104)** It authenticates a request and then hands the request to the appropriate resource provider.
>
> **[1:50](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=110)** In this case, [[Microsoft]].Storage which carries out the request.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=116)** If I want to interact with the data within a storage account the request must go to the appropriate endpoint for the resource.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=123)** For a storage account on the data plane, there is one for each service.
>
> **[2:07](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=127)** An authorization of activities is separate for each service.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=131)** So how did my identity get access to the blob, given it was not all authorized to view it at the data plane level?
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=139)** When the blob request came in on the portal it hit the instant specific endpoint.
>
> **[2:25](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=145)** But because I was in the portal it was able to retrieve an access key granting access to the data using a control plane permission which has been granted to my identity.
>
> **[2:37](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=157)** When I tried on AZ copy it could not automatically retrieve the same access key as the session was in the cloud shell not in the portal.
>
> **[2:48](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=168)** So unlike the storage accounts in previous videos this storage account within its configuration has public access to blobs turned off.
>
> **[3:00](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=180)** If I enable blob public access which is a control plane activity and save it and return to the container, I can see that this container was set to private access on creation.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=194)** This was the only setting available at the point of creation as blob public access was disabled.
>
> **[3:22](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=202)** But if I select the container now and choose to change its access level I can choose anonymous read access for the blobs inside the container, selecting for both and clicking OK.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=218)** I can now return to cloud shell and switch to Bash cloud shell.
>
> **[3:47](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=227)** Log back in once more, copying the code into the device login page.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=242)** For the same identity and returning to the cloud shell and pushing the up key to choose the same command the file downloads and I can display its content by using the cap command.
>
> **[4:22](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=262)** Note that we can mix and match access at the container level.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=265)** If I create a new container, I'll just close the cloud shell so we can see a little bit more on the screen.
>
> **[4:33](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=273)** I can create a new container and I can set its access to private.
>
> **[4:40](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=280)** So I have one where it's anonymous and one that's private.
>
> **[4:44](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=284)** Only Azure blobs has public read access functionality for storage.
>
> **[4:48](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=288)** All other services need authorization to access the operations at their instant specific endpoint.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/the-control-plane-and-the-data-plane?u=76281980&t=295)** The [[Representational State Transfer (REST)|rest]] of the videos in this chapter will look at the available ways to authorize data operations on those endpoints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** scroll up (1), go to (1), select the (1), switch to (1)
> **CLI Commands:** az (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** bash (1)
> **Warnings:** note that (1)

#### [Authorize with shared keys](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=0)** - When a storage account is created, two 512-bit access keys are also created by default.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=8)** You have already seen the power of these access keys, which are called shared keys in the previous video, where I can access data within a private container even though the identity I was logged in as wasn't granted specific access to the data.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=27)** This is because the identity I was logged in as was the storage account owner, so I have permissions to retrieve the shared keys, also known as the access keys.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=39)** This is something the portal did automatically and then use the key's permissions to access the data.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=47)** Access keys can be retrieved in the portal through the Access Keys menu or I can go into the Cloud Shell and use [[Microsoft Azure|Azure]] [[CLI]], or in this case, [[Powershell]].
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=62)** I'll paste in a PowerShell command, and this command gets the storage account key for this storage account.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=72)** And it's returning the first value because there are two keys, and that has returned the storage account access key.
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=81)** So let's copy this key and then we can use it.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=87)** This is Azure Storage Explorer, which you may recall us using in the first chapter.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=93)** We can use the key to attach to a resource, and the resource that we want to attach to is the storage account or service.
>
> **[1:41](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=101)** And I can choose to use an account name and key, and click Next.
>
> **[1:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=107)** I'll add a display name for this connection (keyboard clacking) and the key that we've just copied from that PowerShell command, and then I just need the account name, which I'll copy from my notes.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=123)** Clicking Next and clicking Connect, a new connection has been successfully added which I can see in the Storage Explorer.
>
> **[2:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=133)** This is the one that we've just added, manage storage 0402, and it shows the type of connection here.
>
> **[2:20](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=140)** If I double-click on this attached storage account, the detail for the storage account loads.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=146)** And using this key's permissions, I can right-click on the Blob Containers and choose to create a new blob container.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=154)** (keyboard clacking) Or I could go into an already created container and choose to delete a blob.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=165)** The blob is now listed as deleted.
>
> **[2:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=168)** So if I go back to the portal and into the same container, there is no blob3.[[JSON]] file.
>
> **[2:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=177)** We can also use keys within applications.
>
> **[3:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=180)** So if I enter the Cloud Shell once more and go into my repository (keyboard clacking) and open a code view, I'll just drag this up so it's a little bigger, I have the [[Python (Programming Language)|Python]] file within the folder for this video.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=201)** Let's drag it up a little bit more.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=203)** At the bottom of this Python file, I have a place to add my access key which I will copy from the output of my PowerShell,
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=217)** and I also have a place for the storage account name which I will also copy from the same PowerShell command.
>
> **[3:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=228)** This Python file takes these two values and sets up this object, which we can use to interact with the Azure Blob storage service and then uses the service's in-built methods to list blobs in this given container.
>
> **[4:04](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=244)** The container being, here, testaccountkey.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=248)** So if I save the file and close the editor, I can run the file just like an application would by using a Python command at the command line.
>
> **[4:23](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=263)** That looks like I've got my slash around the wrong way.
>
> **[4:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=267)** I'll just change that and run the command once more, and all of the blobs that were inside that container are listed.
>
> **[4:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=274)** As you have seen, keys grant full access, enabling configuration of the storage account, including the account's data.
>
> **[4:43](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=283)** Therefore, access keys can be used maliciously to read, alter, and delete data within the account from any application and client that can use them.
>
> **[4:53](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=293)** So please be careful with your keys.
>
> **[4:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=297)** You must protect shared keys, and Azure gives you the following options.
>
> **[5:02](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=302)** If you must use shared keys, ensure your applications read the key from key vault when they're required.
>
> **[5:09](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=309)** This secures the key, allowing only applications that have been granted access, the ability to read the key.
>
> **[5:17](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=317)** Make sure you rotate the keys periodically to minimize risk if a key is compromised.
>
> **[5:23](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=323)** This is why there are two keys.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=325)** You can switch applications to using the second key whilst the key originally being used is regenerated.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=332)** To help with ensuring keys are rotated in a timely manner, you can set an expiration policy which places a banner in the portal when the key is due to be rotated.
>
> **[5:43](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=343)** The expiration policy can be monitored for compliance with Azure policy.
>
> **[5:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=348)** You should use logs to monitor key usage for suspicious activity.
>
> **[5:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=354)** And if none of the above meet your organization security policies, you can also disable shared key usage.
>
> **[6:02](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=362)** So let's have a look at all of these options in the portal.
>
> **[6:07](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=367)** Here we are back in the portal at the same storage account that we used in the earlier demo.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=373)** Rotating keys can be achieved through the Access Key pane by clicking on Rotate Key next to the key name.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=383)** Note if I click Rotate key and regenerate it, the last rotated date will change.
>
> **[6:31](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=391)** We just can't see it here because the key was created and rotated on the same day.
>
> **[6:37](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=397)** We can, of course, rotate keys using Azure CLI and Azure PowerShell.
>
> **[6:43](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=403)** First of all, we'll retrieve key1 in PowerShell by pasting in the same command that we used earlier in the demo.
>
> **[6:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=414)** Now, I'll paste in a second command which will rotate the storage account key for us.
>
> **[7:02](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=422)** And now, if I use the history within PowerShell, the storage account key for key1 has changed.
>
> **[7:12](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=432)** Closing the Cloud Shell, we can see that the option to set a rotation reminder is at the top of the page, where there is a reminder that this will set a banner in the portal and not notified via email or other means.
>
> **[7:28](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=448)** You have the option to be reminded every day to yearly or set a custom duration.
>
> **[7:35](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=455)** We'll leave this at 60 days and hit Save to set the reminder.
>
> **[7:40](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=460)** The rotation reminder is also called an expiration policy.
>
> **[7:45](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=465)** So if I search for Azure policy and enter the Authoring menu for Definitions, we can filter for the Storage Category.
>
> **[7:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=477)** I'm going to scroll down for Storage.
>
> **[8:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=480)** Keep going a little bit further.
>
> **[8:01](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=481)** There it is.
>
> **[8:04](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=484)** And dragging this across so we can see the names.
>
> **[8:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=488)** We can see a policy that states "Storage account keys should not be expired."
>
> **[8:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=493)** Viewing the definition, we can see that when applied, it will audit for non-compliance and therefore would be reported on the Compliance dashboard.
>
> **[8:26](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=506)** An example of which is shown here.
>
> **[8:29](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=509)** Returning to the Definitions once more and filtering for Storage once again, and this time searching for Key, dragging the name column across so we can read them fully, we can see that there's a built-in policy present to prevent shared key access being enabled.
>
> **[8:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=534)** Once again, the effect of this policy is to audit for non-compliance.
>
> **[9:01](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=541)** If we want to turn off shared key access for a storage account, we can choose the Configuration pane from within the Storage Account Settings and click Disabled on Allow storage account key access and save it.
>
> **[9:18](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=558)** So if I now try to look at the blobs within the containers of this storage account, I cannot.
>
> **[9:25](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=565)** The portal is no longer able to retrieve the key and grant my identity permission to access the data.
>
> **[9:32](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=572)** And finally, for monitoring, as key access is a control plane activity, it can be monitored in the activity log and therefore from within Azure Monitor.
>
> **[9:45](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=585)** And here we can see each of the listings for where I've listed the storage account keys.
>
> **[9:51](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=591)** That is the end of our walkthrough using keys for accessing a storage account.
>
> **[9:56](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=596)** If your use case must use shared keys, make sure you protect them.
>
> **[10:02](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-with-shared-keys?u=76281980&t=602)** In the next video, we will look at Azure RBAC, the recommended way of accessing data in Azure Storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Powershell]] (8), [[Python (Programming Language)|Python]] (4), [[CLI]] (2), [[JSON]] (1)
> **Tools:** powershell (8), command line (1)
> **CLI Commands:** python (4), make (2)
> **Cross-References:** previous video (1), go back to (1), earlier in (1), in the next (1)
> **Env Vars:** cli (2), rbac (1)
> **UI Navigation:** double-click (1), right-click (1), scroll down (1)
> **Definitions:** is a  (2), known as (1)
> **Best Practices:** the key is (1), recommended (1)

#### [Authorize operations with Entra ID and Azure RBAC](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=0)** - [Instructor] Throughout this course so far the permissions given to users of the data in each storage account have been over privileged.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=8)** Granting public access to blobs or using an access key that enables full access to a storage account does not follow the principle of least privilege where an identity should only be granted the specific permissions necessary to perform a task.
>
> **[0:23](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=23)** The principle of least privilege is a best practice security recommendation to ensure that if an identity is compromised, then the blast radius and therefore impact of that breach is minimized.
>
> **[0:36](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=36)** In [[Microsoft Azure|Azure]], the principle of least privilege can be adhered to by utilizing Azure RBAC, or role-based access control which enables fine-grained access management to resources and data.
>
> **[0:49](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=49)** Azure RBAC is built on the Azure resource manager and uses role assignments to grant permissions.
>
> **[0:56](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=56)** So a service principle, whether that's a user, group, or a type of app registration is assigned a role which can be a built-in or custom role.
>
> **[1:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=68)** The role is assigned as a scope, then the service principle comes together to create a role assignment.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=76)** The role assignment at a very basic level says who has access, what they have been granted access to, and what level they have been granted access.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=87)** It is scope in Azure that defines the level at which a role assignment is defined.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=93)** There are four levels of scope in Azure, the management group, subscription, resource group, and the resource, which for this video series would be storage accounts, but it could be any resource.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=108)** If you are not familiar with management groups they provide a method of managing access policies and compliance above the subscription level.
>
> **[1:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=117)** In fact, there is a root management group defined for all [[Microsoft Entra ID|Azure AD]] tenants, which all management groups sit under.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=126)** How you define the hierarchy you need using management groups is up to you.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=131)** They can be simple or complex, but it is likely to mirror your organization structure in some way.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=139)** When a role assignment is made, it includes all of the items in the scope below it.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=144)** So here at the resource group level, the role assignment access just covers the resources in the resource group.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=152)** But if the role assignment is at a higher level, say this top level management group, then access permissions also apply to everything below it.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=162)** I've switched the portal now so that we can have a look at role definitions and how role assignments can be made through the portal.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=170)** This storage account in its configuration has access keys disabled, and it also has blob public access disabled.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=183)** So currently if I go into my containers and try to look at the blobs in the containers, I have no way of viewing them or listing what's in this container.
>
> **[3:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=193)** In the portal, role assignment is performed in the access control or IAM menu.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=201)** We can view my identity's level of access to this resource, this storage account by clicking on view my access and my identity as inherited the owner role from the subscriptions scope level, which we can see here.
>
> **[3:40](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=220)** Owner is one of the fundamental roles in Azure along with reader, contributor, and access administrator.
>
> **[3:46](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=226)** Clicking on owner, we can see the privileges it grants.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=231)** There are over 14,000 of them.
>
> **[3:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=234)** It's a very powerful role.
>
> **[3:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=237)** The actions are set at the control plane and affect Azure Resource Manager operations and data actions are at the data plane and affect data operations at the resources endpoints.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=250)** Here you can see owner grants no data actions which is why we cannot view the blobs within the containers or the blobs themselves.
>
> **[4:19](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=259)** Returning back to actions, if we search for access key and scroll down into the [[Microsoft]].Storage provider the list storage account keys is one of the permissions granted to owner, which is why when access keys were enabled, we were able to use the portal to retrieve the key and view the blob data.
>
> **[4:44](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=284)** Coming out of the my access view, we need to add a role to my identity so that we can view the blob data.
>
> **[4:52](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=292)** So choosing to add a role assignment, we can see the exhaustive list of built-in roles, including at the top, reader, which is one of the fundamental roles.
>
> **[5:06](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=306)** And in the privileged administrator roles we can see the other three, owner, contributor, and user access administrator.
>
> **[5:15](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=315)** We want to grant at the least privilege.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=318)** So just the ability to read the blob data.
>
> **[5:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=321)** So going back to the job function roles, I'm going to search for storage.
>
> **[5:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=327)** So I can view the permissions that are available for a storage account.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=332)** And here we can see the ones for the services, blob, file, queue, and table.
>
> **[5:38](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=338)** I think we want to choose storage blob reader but let's view its actions and data actions just to be sure.
>
> **[5:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=347)** At the control plane level this role allows retrieval of containers and at the data plane level, it allows blob read.
>
> **[5:56](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=356)** You can also view the [[JSON]] definition for a role definition by clicking JSON at the top as I just did.
>
> **[6:03](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=363)** Notice the actions and data actions have a definition of provider, resource type, and action.
>
> **[6:11](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=371)** You can export the JSON definitions of built-in roles to use as a basis for custom roles by adding or removing actions and data actions that you may require.
>
> **[6:22](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=382)** There are also the concepts of not data actions and not actions.
>
> **[6:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=387)** These are explicit denies.
>
> **[6:30](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=390)** I'm happy that blob data reader grants just the permissions that we need.
>
> **[6:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=394)** So I will select it and scrolling back up to the top, move to the members tab.
>
> **[6:41](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=401)** Here I can choose to assign that role to a user, group, service principle, or managed identity.
>
> **[6:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=408)** I need to assign the role to my identity.
>
> **[6:51](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=411)** So selecting user and clicking select members I'm going to search for my identity, which is Azure Instructor 14.
>
> **[7:04](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=424)** I'll select it and click select at the bottom.
>
> **[7:09](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=429)** Azure Instructor 14 is now displayed to assign the role to.
>
> **[7:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=433)** So clicking review and assign and review and assign once more, the role assignment will be added.
>
> **[7:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=441)** Now this takes a little bit of time so I'm just going to wait a while and we'll switch back to it in a second.
>
> **[7:28](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=448)** On navigating back to the container we can now see the blobs and I'll try and view one of the blobs, which I can now also do.
>
> **[7:44](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=464)** And if I try and edit the blob and click to save, well the portal actually hangs which may be a bug, but we cannot save changes as re permissions were granted and nothing more.
>
> **[7:59](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=479)** This is great for users and groups but what about that [[Python (Programming Language)|Python]] script we used in the previous video that was mimicking an application getting access to a storage account.
>
> **[8:09](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=489)** If you recall with a slide on role assignments we can assign a role to an app registration.
>
> **[8:16](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=496)** I've already created an app registration in Azure AD, which was recently renamed to [[Microsoft Entra ID]].
>
> **[8:24](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=504)** We can see the app registration listed here and I've noted its client secret value along with the tenant ID and the application ID of this app registration.
>
> **[8:38](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=518)** And we require those three values to use within the Python script.
>
> **[8:44](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=524)** So navigating back to the storage account we're going to need to assign a role to the app registration to enable it to read blobs in the container.
>
> **[8:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=534)** So I'm going to go back into access control once more.
>
> **[8:58](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=538)** And this time add a role assignment, which once more is going to be storage blob data reader but the member is going to be a service principle.
>
> **[9:15](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=555)** So I'll select the members and this time search for the app registration name, which was spmassprbac.
>
> **[9:26](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=566)** I will selected as a member and assign the role.
>
> **[9:31](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=571)** The role is now assigned so opening Cloud Shell and switching to Bash.
>
> **[9:40](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=580)** I'm going to need to edit my Python script which is in the folder for this video.
>
> **[9:52](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=592)** Just drag this up a little bit so we can see it a little clearer.
>
> **[9:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=597)** And as explained previously we're going to need the tenant ID, application ID and application secret that were copied from the app registration.
>
> **[10:06](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=606)** Now I've got these noted down, so I'll just paste them in.
>
> **[10:13](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=613)** And we're also going to need the storage account name, which is shown at the top of this page.
>
> **[10:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=621)** So by using these three values we're going to be able to retrieve a credential that is going to enable us to list the blobs by using that RBAC that we assigned to the app registration.
>
> **[10:35](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=635)** So saving the file and closing the editor.
>
> **[10:42](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=642)** I'm going to run the Python file and our blobs are listed.
>
> **[10:52](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=652)** So that's how to grant just re privileges on a storage account using the fine grain control of Azure RBAC.
>
> **[11:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-entra-id-and-azure-rbac?u=76281980&t=660)** In the next video, we'll have a look at how to utilize attribute based access control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Python (Programming Language)|Python]] (4), [[JSON]] (3), [[Microsoft Entra ID|Azure ad]] (2), [[Microsoft]] (1)
> **Env Vars:** rbac (4), json (3), iam (1)
> **CLI Commands:** python (4)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (2)
> **Tools:** bash (1)
> **Best Practices:** best practice (1)

#### [Authorize operations with Azure AD and Azure ABAC storage](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=0)** - [Instructor] In the previous video, we explored how [[Microsoft Azure|Azure]] role-based access control, or RBAC, enables fine-grained access to a storage account and its data, but there are scenarios where the granularity of access that is possible through RBAC doesn't quite go far enough.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=18)** For example, in this scenario, the storage account, itopslogging, stores logs for the IT operations team.
>
> **[0:26](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=26)** The storage account contains a sales app container, and within the sales app container are two virtual directories, where server logs for the sales application are stored to the server directory and the workstation directory for workstation logs.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=42)** There are two user groups that require read access to these directories.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=47)** Level two support is read access to workstation blobs only, and level three support is access to workstation and server logs.
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=57)** We can grant storage blob data reader to fit the requirement of the level three support group, but there is no RBAC role to suit read access to the workstation virtual folder only.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=70)** If we continue to add more containers as the IT ops logging requirement grows, how can we ensure each group has just the privileges required for their roles?
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=81)** This is where Azure ABAC comes in, where ABAC stands for attribute-based access control.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=88)** ABAC extends the RABC functionality with conditions on specific actions, enabling fine-grained access to resources and reducing the number of role assignments, as the principal itself can become part of the check.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=104)** The controls can be expressed in terms of projects, organizational units, or [[Data Classification]] levels through attributes such as tags, enabling access rules that will match the meaning for a business.
>
> **[1:58](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=118)** Azure ABAC is evolving.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=120)** There are currently GA support for blobs, queues, and Data Lake Storage Gen2 with more features and services in Preview.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=130)** Azure ABAC uses conditions, which are conditional checks that occur on authorization of an action, which in the case of Azure storage is a data action combined with an expression, in terms of the security principal that was accessing it, the resource the request was made to, the parameters sent with the request, and the environment the request was made in.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=154)** In terms of setting up a condition for the level two support team, the team needs to be able to read blobs in the workstation.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=162)** So read is the action, the resource is the blob path of workstation, and level two support is the service principal.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=171)** Note, to use Service Pincipals, you need [[Microsoft Entra ID]] Premium.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=179)** Now let's have a look how we can set up Azure ABAC in the portal.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=183)** This storage account has blob public access disabled and a container called Sales App, which has two virtual folders of server and workstation, the same setup as shown in the slide deck.
>
> **[3:16](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=196)** We're going to set up read access on the workstation virtual directory only and assign this to my logged in identity.
>
> **[3:24](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=204)** So we enter access controller as before and want to start by adding the storage blob reader role, which I'll search for.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=217)** As soon as I select this role, the portal knows that this role can have conditions applied to it, so the conditions tab is activated.
>
> **[3:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=227)** The tenant I am using does not have Microsoft Entra ID Prem One or Two, so I'll be assigning the role to my identity, which I'll search for in select members.
>
> **[4:03](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=243)** And Azure Instructor 14 is the identity that I'm logged into in the portal.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=248)** Clicking next, this is where the condition can be added using add condition.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=255)** If you recall the previous slide, the action was read, so we'll add a read action, but we could have also chosen to list blobs.
>
> **[4:27](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=267)** Next, we need to add the expression, which will be evaluated every time a blob is read.
>
> **[4:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=274)** The attribute sources are environment, request, and resource, and this is where Service Principal would be displayed, if we were using Prem One or Two.
>
> **[4:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=287)** Choosing Environment, we can take a look at the attributes available to create an expression against.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=294)** Environment mainly looks at where the request came from.
>
> **[5:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=300)** Request allows selection of parameters from the request string of Version and Snapshot, but we need to add an expression for resource, and the resource is the path name.
>
> **[5:14](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=314)** But also note, blob index tags are available.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=318)** This is where key value pairs can be used to describe data in terms of your organization.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=325)** Selecting blob path enables the choice of a string operator or a cross product operator.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=332)** Now, blob path returns a single string, so we're going to use string like and a value of workstation with a wild card.
>
> **[5:44](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=344)** So this will return everything with a path like workstation.
>
> **[5:48](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=348)** If we were going to state that we needed a specific container, we could add another expression, but what we have so far satisfies the requirement.
>
> **[5:58](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=358)** So, I'll click save.
>
> **[6:00](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=360)** The editor format for the condition is now shown, and we'll click review and assign, and this will assign the role to my identity.
>
> **[6:10](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=370)** It takes a little while for the permissions to be correctly applied, but once the condition is applied, if we now navigate back to the container, we can list the underlying virtual directories and their blobs, but choosing to view a blob in the server virtual directory returns an authorization error.
>
> **[6:34](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=394)** But if I go back and choose to view a blob in the workstation virtual directory, it passes the condition check and the blob is displayed.
>
> **[6:47](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=407)** The condition we have set up is working as expected.
>
> **[6:50](https://www.linkedin.com/learning/manage-storage-in-azure/authorize-operations-with-azure-ad-and-azure-abac-storage?u=76281980&t=410)** Now that we have a good understanding of Azure RBAC and ABAC, let's look at managed identities and passwordless access in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft Entra ID]] (2), [[Data Classification]] (1)
> **Env Vars:** abac (7), rbac (4), rabc (1)
> **Prerequisites:** set up (3), setup (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Accessing storage account data from other Azure services](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=0)** - [Presenter] There are many paths and IAS services in [[Microsoft Azure|Azure]] that could be required to access data in your storage accounts.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=7)** But how can you ensure that these services get the access they require whilst minimizing your administrative overhead?
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=16)** So far, we've mainly been accessing the data endpoints with a logged in user who has authenticated into the portal or the Azure Storage Explorer.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=25)** But what if your solution requires access from web apps or function apps, [[Virtual Machines]], container-based services or even ingestion into a data pipeline?
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=37)** It is possible that none of these services will use a logged in user's credentials to access data.
>
> **[0:43](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=43)** So how is access granted?
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=46)** We've already seen the first piece of the puzzle when looking at Azure RBAC.
>
> **[0:51](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=51)** A [[Python (Programming Language)|Python]] script was executed in Cloud Shell with a credential from an app registration with a client secret.
>
> **[0:58](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=58)** We don't have to worry about securing a password in this case, but the values that make up the service principle with a secret should be protected.
>
> **[1:07](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=67)** We could store them in a key vault but is likely that the same issue would apply.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=72)** How do we store the credentials to access the key vault?
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=76)** This management of secrets and credentials is a common problem for administrators and developers.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=83)** This issue can be addressed by using managed identities where the credentials are automatically managed for you in [[Microsoft Entra ID]], you don't even have access to them.
>
> **[1:35](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=95)** In Azure, there are two types of managed identities, system assigned and user assigned.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=102)** A system assigned identity is attached to a single resource.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=105)** It has a lifecycle with the resource.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=108)** Once the resource is deleted, the identity is automatically deleted too.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=114)** A user assigned identity is a standalone resource that can be attached to one or more resources enabling multiple resources to share an identity.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=124)** So how are managed identities useful in our use case of multiple types of compute accessing a storage account?
>
> **[2:12](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=132)** RBAC roles can be assigned to managed identities, enabling the underlying resource to be granted access to work with the storage accounts and any other supported service.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=146)** This is a page from the [[Microsoft]] documentation and it lists the services that support managed identities for Azure Resources.
>
> **[2:33](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=153)** You can view the docs page at the address shown on the screen.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=158)** As you can see, this is an exhaustive list which of course includes Azure VMs.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=165)** Let's switch to the portal and look at how to set up read access to storage from a virtual machine using a managed identity.
>
> **[2:54](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=174)** I've switched into the portal and this is the resource visualizer for the resources deployed for this demo.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=181)** Now I'm in the portal inside a virtual machine.
>
> **[3:04](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=184)** The virtual machine at the top here is attached to this vnet and inside this vnet, a private endpoint has been deployed which is attached to the storage account, SAO405.
>
> **[3:17](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=197)** And this storage account has had blob public access disabled so that we can access the data in the storage account from the portal.
>
> **[3:28](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=208)** I've granted my identity storage blob data contributor and therefore, as we are accessing the portal from inside the virtual machine, we can read the blob data.
>
> **[3:43](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=223)** But if I copy the URL for this blob from the blobs properties and paste it into the browser, I cannot access the blob.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=235)** 'Cause this method of access does not have my identities credentials.
>
> **[4:00](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=240)** Let's rectify this by adding a managed identity to the virtual machine that I'm currently logged into.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=248)** So I'll go back into the resource group and into the configuration of vmwin-0405 and in the left hand menu system is identity.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=265)** We have the choice of the two identities we described in the slide deck, system assigned and user assigned.
>
> **[4:33](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=273)** We don't need to keep this identity beyond its use with this virtual machine.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=277)** So we'll stay with the default of system assigned by setting the status to on and clicking Save.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=286)** The identity has been created.
>
> **[4:48](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=288)** So now we need to assign a role to the identity from the storage account.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=294)** So navigating back to the storage account in the resource group and back into access control, we'll choose to add a role assignment of Blob Data Reader
>
> **[5:13](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=313)** but this time when clicking Next, we'll choose managed identity to assign the access to and when selecting the members, we choose a system assigned identity and there's the assigned identity, which we've assigned to our virtual machine, so it gets the same name as the resource you've assigned it to.
>
> **[5:37](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=337)** So I select this and click Select and it's added as the member.
>
> **[5:44](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=344)** And now we'll review and assign the role.
>
> **[5:48](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=348)** It takes a few moments for the role to assign.
>
> **[5:51](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=351)** So while this is happening, we'll update the storage account name in the Python script which I need to open up in Visual Studio.
>
> **[5:59](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=359)** It's in chapter four and 0405, which is the folder for the video that we are currently going through.
>
> **[6:07](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=367)** And the file I need to edit is editblobsidentity.py.
>
> **[6:12](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=372)** Just going to move the terminal down a little bit and close this notification.
>
> **[6:18](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=378)** And I'm going to need to copy the storage account name and update this URL.
>
> **[6:25](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=385)** So I'll copy it from the portal and paste it into my Python file.
>
> **[6:32](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=392)** Save the file.
>
> **[6:35](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=395)** Note that our script now sets up the blob service client, client object with an instance of the managed identity credential and uses this to download and output the contents for a given blob to the screen.
>
> **[6:51](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=411)** So if I run my Python file, just drag this up a little bit so we can see the output, identity.pi.
>
> **[7:04](https://www.linkedin.com/learning/manage-storage-in-azure/accessing-storage-account-data-from-other-azure-services?u=76281980&t=424)** We can see the context of the blob output to the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Python (Programming Language)|Python]] (4), [[Virtual Machines]] (1), [[Microsoft Entra ID]] (1), [[Microsoft]] (1)
> **Env Vars:** rbac (2), url (2), ias (1), sao405 (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** visual studio (1), terminal (1)
> **Prerequisites:** required to (1), set up (1)
> **File Paths:** editblobsidentity.py (1)
> **Documentation:** the docs (1)

#### [Enable passwordless Entra ID–based access to Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=0)** - [Instructor] In this chapter so far, we have looked at how each of the following can be granted access to data: [[Microsoft Azure|Azure]] Resources, which can have a managed identity; Azure Resources or Non-Azure Resources which cannot have a managed identity; and users through a browser, IDE, or command line.
>
> **[0:19](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=19)** In each of these scenarios where application code may need to be run, it has been seen that a different SDK credential type may be needed for each scenario, and this means three versions of application code for the same job.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=33)** Now, ideally, IT pros and developers should be using one version of the code.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=39)** Azure enables this using the default Azure Credential which can be used as a credential type in each of these scenarios.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=47)** Therefore, you only use one version of the code.
>
> **[0:52](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=52)** The default Azure Credential combined common methods of authentication into a single check as described in this page of the Azure documentation.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=62)** Making the picture a little bit clearer, the default Azure Credential starts by looking for specific environment variables.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=70)** Then depending on the environment the application that is calling it is running in, it checks for various identities.
>
> **[1:17](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=77)** Then whether a user has already authenticated into a command line or IDE or will launch an interactive browser, this method is classed as passwordless as in each scenario, apart from the interactive browser, the default Azure Credential is retrieving credentials from the environment it is running in.
>
> **[1:39](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=99)** I'm back in our demo environment and back logged into the virtual machine so that we can see this in action in our demo setup.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=108)** I have the second [[Python (Programming Language)|Python]] script from the 04_05 folder.
>
> **[1:53](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=113)** And this time, we're using the credential type of default Azure Credential.
>
> **[1:58](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=118)** And this is going to run on the Azure VM, which has the managed identity.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=123)** So if I scroll down to the bottom and update the script with the storage account name and save the script, I'm now going to execute it, default_cred.pi.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=142)** And once again, the blob is read, the default Azure Credential has worked down the credential chain and has fetched the managed identity and used this to authenticate and authorize access to the blob, which has been read and output to the screen.
>
> **[2:37](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=157)** If I now return to the portal and back to our virtual machine, I want to disable the identity so that it's no longer available to default as your credential.
>
> **[2:56](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=176)** Just need to wait a little while for that to execute and it's now disabled.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=181)** So switching back to Visual Studio Code and I'll execute the Python script again.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=190)** If I expand the terminal window, this time, we can see it failing and we can also see it gradually going through the credential chain to try and find the credentials that it can use to access the blob.
>
> **[3:24](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=204)** So we'll run AZ login to imitate a developer or IT pro working on an application.
>
> **[3:33](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=213)** I'll choose my identity, return back to Visual Studio Code and I'm now logged in and I'm going to run my script once more.
>
> **[3:45](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=225)** The authentication token created by AZ login is retrieved and the blob is read using the role assignment to the identity.
>
> **[3:53](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=233)** I think you can see how powerful default Azure Credential can be when working on applications as a development team and IT pros.
>
> **[4:03](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=243)** So that's all for managed identities and passwordless connections in this video.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/enable-passwordless-entra-id-based-access-to-azure-storage?u=76281980&t=248)** Join me in the next one where we're going to take a look at [[SaaS]] [[Tokens]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Python (Programming Language)|Python]] (2), [[SaaS]] (1), [[Tokens]] (1)
> **CLI Commands:** python (2), az (2), find (1)
> **Tools:** command line (2), visual studio (2), terminal (1)
> **Env Vars:** ide (2), sdk (1)
> **Code Identifiers:** default_cred (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** picture (1)

#### [Shared access signatures and access delegation](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=0)** - [Instructor] So far in this chapter, we have explored account key and [[Microsoft Entra ID]] based access to storage.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=7)** There may be scenarios where account key based access poses too much of a risk, but access via Microsoft Entra ID permissions is not possible.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=17)** For these scenario, a shared access signature or SAS can be used to grant specific permissions to storage resources.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=25)** A SAS is secured by the storage account key or with Microsoft Entra ID.
>
> **[0:30](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=30)** For a SAS secured with an account key, access can be granted to table, queue, file, and blob services with a SAS generated at the account level enabling get and set of properties at the service level.
>
> **[0:44](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=44)** A SAS secured with Microsoft Entra ID is called a user delegation SAS, and is the recommended method of generating a SAS as it does not require a storage account key to generate.
>
> **[0:56](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=56)** User delegation SAS grants permissions on blob storage only and are a combination of the Microsoft Entra ID permissions for the credentials used to create the SAS along with permissions chosen for the SAS.
>
> **[1:09](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=69)** Therefore, if the Microsoft Entra ID credentials have blob storage reader and the SAS permission is selected with Read/Write, only the Read permissions would be authorized.
>
> **[1:21](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=81)** Another key feature of SAS is its ability to be time limited as start and end times can be specified for a SAS.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=89)** This is a powerful feature enabling time bound access to resources, ensuring a client only receives access when specifically requested.
>
> **[1:39](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=99)** There are two [[Forms]] of SAS: ad hoc where permissions and expiry are set at the point of SAS creation and stored access policies where permissions and expiry are chosen upfront and stored against a resource container with a resource container being a blob container, file share, table or queue.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=120)** When a SAS is created using a stored access policy, it inherits the permissions and expiry of the policy.
>
> **[2:08](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=128)** Stored Access policies add protection against a compromised SAS by enabling a SAS to be revoked without regenerating the account keys, which is the mitigation against a compromised SAS secured with an account key.
>
> **[2:23](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=143)** Therefore, only the specific SAS is invalidated and not every SAS that has been secured with the key.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=152)** A common scenario for SAS usage is from users logged into clients that require access to a storage account you control.
>
> **[2:38](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=158)** We'll use this scenario to see how a SAS works.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=163)** The client requests a SAS token from the provider which is likely to be compute in [[Microsoft Azure|Azure]] running the client libraries.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=171)** The SAS provider requests a user delegation key for a user delegated SAS token or the storage account key for an account or service SAS.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=181)** If the credentials being used by the SAS provider have the correct RBAC permissions, the key is returned.
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=188)** The SAS provider uses the key to secure the SAS token which contains the permissions and expiry for the token which is returned to the client.
>
> **[3:19](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=199)** The client then uses the token with the URL to access the data.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=205)** I've switched to the Azure portal as we're going to explore how keys are created in the portal and use Azure Storage Explorer as the client.
>
> **[3:34](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=214)** We'll start by creating account level SAS which in the portal is achieved in the shared access signature pane.
>
> **[3:40](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=220)** It is confirmed at the top here that account level SAS enable access to all services and we'll untick queue and table which have been ticked for us in allowed services, and allowed resource types is where a single service account SAS and a service SAS differ as we can select service resource types.
>
> **[4:00](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=240)** So we'd also like to access service, container and object where an object would be a blob or a file.
>
> **[4:09](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=249)** I'm going to keep all of these permissions the same, but we could just choose to generate a read SAS.
>
> **[4:16](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=256)** Scrolling further down, here is the expiry and start time.
>
> **[4:21](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=261)** These can have a 15 minute SKU on them, so I'm going to set the start time to around 15 minutes earlier to make sure that this demo is not affected by the SKU, but I could use this to time box the access into the future.
>
> **[4:42](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=282)** We can also limit the SAS to specific IP addresses and protocols.
>
> **[4:47](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=287)** Scrolling further down and hitting generate SAS and connection string, the connection string and SAS are generated.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=295)** We can't see them here due to security restrictions, so I'll copy the connection string and paste it into notepad.
>
> **[5:05](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=305)** And now we can see the sections that make up the connection string with the SAS.
>
> **[5:10](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=310)** Firstly, we have all of the endpoints listed.
>
> **[5:15](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=315)** Now I'm going to delete the queue endpoint and the table endpoint because we've not granted access to those.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=325)** Next we can see the version of the service we want to use, the selected services of blob and file, the service resource types of service, container and object.
>
> **[5:37](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=337)** These are all the permissions that were selected.
>
> **[5:41](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=341)** We have the start and expiry times, the protocols, and this final part of this signature is all of these sections secured with the user delegation or account key, depending on which one you choose.
>
> **[5:58](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=358)** Each of the parts to the right of shared access signature make the SAS token.
>
> **[6:04](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=364)** I can now take this connection string and use it to create a connection in Azure Storage Explorer.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=373)** Choosing to attach a resource and a storage account, I have the choice of using a connection string or a shared access signature.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=383)** Now I copied a connection string, so we'll leave it at that default and click next.
>
> **[6:29](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=389)** For the display name, I'm going to choose SAS connection string, and I'll paste in the connection string from my notepad and click next.
>
> **[6:42](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=402)** Here we can see that the Storage Explorer has picked up all of the settings that we discussed previously and has also listed the permissions, resource type access and service access.
>
> **[6:55](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=415)** Clicking connect, and the storage account has been attached.
>
> **[7:01](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=421)** Now I know there's a blob container in this account, but ah, I've got an error.
>
> **[7:07](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=427)** So why is this?
>
> **[7:08](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=428)** If I switch back to the portal, we are back at the shared access signature page and right at the top of the page was this banner which you may have noticed earlier.
>
> **[7:18](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=438)** This storage account has authorization with account keys disabled.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=443)** So even though the SAS is signed with the key, we can't use it to authorize, so we need to switch to the configuration pane and enable storage account key access.
>
> **[7:37](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=457)** But before I save the changes, we'll also enable an upper tier limit for SAS expiry.
>
> **[7:44](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=464)** This is best practice for SAS generation to minimize the effect of a SAS being compromised.
>
> **[7:50](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=470)** We'll set it to two hours.
>
> **[7:52](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=472)** So now SAS keys can allow no more than two hours access at a time.
>
> **[7:58](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=478)** Clicking save and returning to the Storage Explorer and closing the authentication error and refreshing the blob containers.
>
> **[8:09](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=489)** We can now list containers and the blobs with their virtual directories, and it's just queuing up the transfer of the blobs, so we can also access the blobs.
>
> **[8:22](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=502)** These will all allow permissions of our SAS.
>
> **[8:26](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=506)** If I minimize Visual Studio Code, this storage account also has a stored access policy on this file share, but if I right click on it, I cannot access it to generate a SAS as the SAS used to generate this connection does not allow me to do so.
>
> **[8:44](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=524)** So moving down in the Azure Storage Explorer, the connection that uses my Microsoft Entra ID connections which has the correct permissions to manage access policies, and right clicking once more, I now have the option to generate a shared access signature and use the access policy here, read create list.
>
> **[9:14](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=554)** Note the start and expiry times are grayed out as they are inherited from the policy as is read, create and list.
>
> **[9:22](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=562)** Clicking create, the service SAS URL is generated for use along with the SAS token.
>
> **[9:30](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=570)** We've reached the end of this chapter on authenticating to an authorizing access on a storage account where we have explored how to access data in a storage account as a user using a managed identity on Azure compute or through a service principle on an app registration.
>
> **[9:47](https://www.linkedin.com/learning/manage-storage-in-azure/shared-access-signatures-and-access-delegation?u=76281980&t=587)** Join me in the next chapter when we will look at features that are specific to managing Azure file shares.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (7), [[Microsoft Azure|Azure]] (7), [[Forms]] (1)
> **Env Vars:** sas (51), url (2), sku (2), rbac (1)
> **CLI Commands:** make (3)
> **Best Practices:** recommended (1), the key is (1), best practice (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Tools:** azure portal (1), visual studio (1)
> **UI Navigation:** switch to (1), click on (1)
> **Definitions:** is called (1), is a  (1)


### 5. Mounting and Synching to Azure File Shares

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Azure File Sync](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Files enables file system storage within the cloud in Azure.
>
> **[0:06](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=6)** But there are circumstances, particularly around business continuity, migration, and file centralization, where having a set of files on premises and in the cloud is beneficial.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=18)** This is where Azure File Sync comes in.
>
> **[0:21](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=21)** When installed on an on-premises [[Windows Server]], Azure File Sync creates a cache of local files with those in the cloud, therefore extending Azure File Storage functionality and creating a hybrid file service where clients can access the files which are stored both on premises and in the cloud.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=42)** This functionality is enabled by the Azure File Sync agent which is installed on the [[Windows]] file servers.
>
> **[0:49](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=49)** If this were to be managed in an [[Enterprise Architecture]], it may look like this, with the Azure file share network traffic secured to a VNet.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=60)** The on-premises file server would make a DNS query to the on-premises DNS server.
>
> **[1:06](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=66)** This server would forward it over a VPN tunnel or equivalent to a DNS server within Azure.
>
> **[1:15](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=75)** This server reads the Azure file private DNS and returns it to the file server.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=83)** The file server then uses this DNS entry to connect to the private endpoint of the Azure File Share storage sync service so that files can be synced.
>
> **[1:35](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=95)** It is the storage sync service that is the glue that connects the file server to the Azure File Share and sets up the synchronization service.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=105)** And we're going to walk through how to set this all up.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=109)** Now, unfortunately, I don't have an on-premise setup to create a VPN connection to demo that full architecture.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=116)** so the Windows file share will be in Azure, but we'll still set up private endpoints for the recommended security configuration.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=126)** Once these are created, we're also going to look at setting up the storage sync service and its private endpoint and private DNS record.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=137)** So let's jump into the portal and see how we can set this up.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=142)** Now, I've deployed all of the resources we're going to need for this demo, and this is the resource visualizer of the resource group that I've deployed them into.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=150)** Let's [[Zoom]] in a little so we can see these a little better.
>
> **[2:34](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=154)** Now, the deployment includes the virtual machine and the private DNS zone that we showed from the demo architecture, and these are at the top of the visualization, and we can see that the virtual machine is attached to vnet-vm-0501.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=170)** Moving down a little further, the storage account is already being injected into the VNet using this private endpoint here.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=179)** So before we create the storage sync service to get syncing to this storage account, I'm just going to check that the private DNS that would've been set up for the file service in the storage account is being resolved correctly at the virtual machine.
>
> **[3:16](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=196)** To do this, I'm just going to grab the endpoint of our file service, which I can get in the endpoints pane for the storage account.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=209)** So there's the file service and this one is the endpoint.
>
> **[3:33](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=213)** And I've already RDPed into my virtual machine and I've also already turned off IE enhanced security configuration because part of the steps for this demo require it to be off to log in to set up the storage sync service.
>
> **[3:50](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=230)** So if I open a command prompt, I can use nslookup to check to see how a service endpoint is set up, and that endpoint resolving to 10.0.0.5, which is a private IP address within my VNet.
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=254)** So I'm happy that that DNS setup is correct.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=258)** Now, this also means if I open Edge within my virtual machine, I just need to click through the setups because this is the first time Edge has been run on this VM.
>
> **[4:31](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=271)** And I'm going to copy in a command from my notes.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=277)** Now, this command is hitting the file endpoint for a directory called filesync and it's asking to list the directories.
>
> **[4:45](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=285)** Now, it's not going to work because I'm going to need some kind of authentication, authorization on here.
>
> **[4:51](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=291)** So I'm just going to grab a SAS token to do this for me.
>
> **[4:56](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=296)** I scroll to find shared access signature and I want a file service and I want to see containers and objects.
>
> **[5:05](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=305)** The [[Representational State Transfer (REST)|rest]] I'll leave alone.
>
> **[5:07](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=307)** I'll grab my SAS token and I can paste it on the end of my URL, which is still in my virtual machine.
>
> **[5:19](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=319)** Now, I'm appending this, so I need to change the question mark, which is for parameters, to an ampersand so that it appends the SAS token to the rest of the URL.
>
> **[5:30](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=330)** I'm hitting Return.
>
> **[5:32](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=332)** Now, there's not a lot returned, but that's because I know that there's no directories actually in this storage account.
>
> **[5:37](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=337)** So it said that it's hit my endpoint for the share of filesync, no other directory path, and there are no directories inside the share.
>
> **[5:46](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=346)** So I'm happy that this is all working correctly between the virtual machine and the storage account.
>
> **[5:52](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=352)** So we're ready to set up the sync service.
>
> **[5:54](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=354)** Now, I'm going to need to go back to the portal, and you can search for Azure File Sync at the top of the portal page and it actually comes up within the marketplace.
>
> **[6:06](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=366)** And when it opens, it opens straight into a configuration page.
>
> **[6:11](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=371)** So we're going to have some mandatory fields.
>
> **[6:13](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=373)** So I need a storage sync service name, so afs0501, for my storage sync service.
>
> **[6:21](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=381)** I'll keep the region at UK south.
>
> **[6:24](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=384)** I'd like it in the same resource group as the rest of my resources for this demo.
>
> **[6:29](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=389)** So let's click networking.
>
> **[6:31](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=391)** Now, I can choose to allow access from all networks, but we want to set this up with a recommended configuration of private endpoints only.
>
> **[6:39](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=399)** And the portal is showing me that there is no private endpoint configured, so I'm going to need to add one.
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=405)** And it's picked up our resource group and location once more, but I need to name the private endpoint, so pafs0501, and I'm going to need to know where to deploy the private endpoint to, which is our virtual network that the virtual machine and the storage account is attached to in this demo, which is vnet-vm-0501 and its subnet.
>
> **[7:10](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=430)** Scrolling down a little further, yes, we would like a private DNS zone for name resolution for the endpoint.
>
> **[7:17](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=437)** So that's all our parameters set up correctly.
>
> **[7:19](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=439)** So clicking OK.
>
> **[7:21](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=441)** That's everything we need.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=443)** We can review and create to create the Azure File Sync service.
>
> **[7:30](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=450)** Going to the newly created resource, first I'd like to register my server, and to register the server, the sync agent needs to be downloaded and installed.
>
> **[7:43](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=463)** So I'm going to need to download the sync agent on the virtual machine because that's mimicking our file server.
>
> **[7:52](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=472)** So I've copied the URL from the portal and that opens this Azure File Sync Agent download page.
>
> **[8:04](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=484)** So I'll click download.
>
> **[8:05](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=485)** Now, I want to choose the sync agent for my operating system.
>
> **[8:10](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=490)** Now, this server is Windows Server 2022, so I'm going to tick the one for 2022 and hit download.
>
> **[8:18](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=498)** And that's just going to take a few moments.
>
> **[8:20](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=500)** So I can open the file.
>
> **[8:23](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=503)** Just minimize a few of these things down so the screen's a little cleaner.
>
> **[8:28](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=508)** I'm just going to accept all of the defaults as we go through the installation.
>
> **[8:33](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=513)** But I am just going to quickly set that I want the storage sync agent to be updated by Windows Update every Saturday at one AM.
>
> **[8:45](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=525)** So after a few moments, the installation is completed, and clicking finish, our agent is going to load so that we can configure it.
>
> **[8:54](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=534)** So the agent has checked to see if it needs updating, which it doesn't.
>
> **[8:59](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=539)** And now I'm going to need to sign into Azure to get this sync agent set up.
>
> **[9:04](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=544)** And this is why we turned off IE enhanced security configuration, because without this off, I'm not going to be able to sign in to the Azure Cloud environment.
>
> **[9:15](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=555)** So clicking sign in, I'll use my credentials, pop in my password.
>
> **[9:27](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=567)** So now I've got a little walkthrough.
>
> **[9:29](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=569)** I need to choose the Azure subscription that my storage sync service is in.
>
> **[9:34](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=574)** So I've only got one, so I'll choose that.
>
> **[9:37](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=577)** And the resource group, which is rgO501, and that's the storage sync service we created a few moments ago.
>
> **[9:46](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=586)** So I'll select that and click register.
>
> **[9:49](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=589)** And the Azure File Sync Agent in the background was registering this virtual machine with the service in Azure.
>
> **[9:58](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=598)** So now we can see the registration is successful and it's also checked that the network connectivity is set correctly.
>
> **[10:05](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=605)** So I'll close the Azure File Sync Agent configuration.
>
> **[10:08](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=608)** I'm just going to set up the folder that will become the base of the file sync from the server to the cloud.
>
> **[10:15](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=615)** So I'll just pop in to see and add a new folder called filesynctest.
>
> **[10:24](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=624)** Now, if I switch back to the portal, and we'll click refresh on the registered servers page, and we can see our server vm-0501 is now registered.
>
> **[10:35](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=635)** So the next step is to set up a sync group.
>
> **[10:39](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=639)** And this points to the Azure file share.
>
> **[10:42](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=642)** So I'll click add sync group and give it a name.
>
> **[10:48](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=648)** And I need to select the storage account, which is sa0501.
>
> **[10:54](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=654)** And the file share that I want to sync to, which is filesync.
>
> **[10:59](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=659)** And once created, the sync group needs to be paired with the server by adding a server endpoint.
>
> **[11:05](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=665)** So we click on the sync group and click to add the server endpoint, choose our registered server, and now we need to add that base path.
>
> **[11:15](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=675)** So if you remember, it was c filesynctest.
>
> **[11:21](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=681)** Scrolling down.
>
> **[11:23](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=683)** You can also choose cloud tiering to create a cache of files on the server, but we want full copies of the files, so we'll leave all of this disabled and click create.
>
> **[11:35](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=695)** The endpoint is now created, and first of all, it enters provisioning mode.
>
> **[11:40](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=700)** I'll just close this so we can see it a little easier.
>
> **[11:44](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=704)** And then once it's added, it changes to pending while the setup is completed between the sync service and the virtual machine.
>
> **[11:53](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=713)** You can hit refresh at the top of the page to check to see if the status has changed.
>
> **[11:59](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=719)** After a while, there's a green tick for health and upload to cloud and download to server.
>
> **[12:06](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=726)** So if we switch back to the virtual machine, and I'll add a folder in our base directory and also add a test file.
>
> **[12:23](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=743)** Add some text to it and save it.
>
> **[12:27](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=747)** And now switching back to the portal, we want to have a look at our storage account.
>
> **[12:33](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=753)** Into the file share, filesync.
>
> **[12:39](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=759)** But of course, I don't have access to view the file share from this machine, so I need to go back into the virtual machine and into this listing that we did in the URL and hit Return, and this time I can see my new folder, folder1test.
>
> **[12:58](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=778)** So this is hitting the endpoint within the storage account, not this folder within the virtual machine.
>
> **[13:07](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=787)** So I'm happy that the file sync is functioning correctly.
>
> **[13:11](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=791)** So that's how to set up Azure File Sync and with the storage account and file sync service secured with (indistinct) endpoints.
>
> **[13:19](https://www.linkedin.com/learning/manage-storage-in-azure/setting-up-azure-file-sync?u=76281980&t=799)** In the next video, we're going to set up a file share mount to a [[Linux]] VM, so I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (23), [[Windows]] (3), [[Representational State Transfer (REST)|Rest]] (3), [[Windows Server]] (2), [[Enterprise Architecture]] (1)
> **Env Vars:** dns (10), url (4), sas (3), vpn (2)
> **Prerequisites:** set up (11), setup (3), configure (1)
> **UI Navigation:** open the (1), select the (1), click on (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1), in the next (1)
> **Best Practices:** recommended (2)
> **Code Identifiers:** rgo501 (1)

#### [Mounting a file share to Windows Server](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=0)** - [Instructor] Using the Mount capabilities of an [[Microsoft Azure|Azure]] file share opens up further ways to access your data from compute.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=8)** File shares can be mounted to many types of compute in Azure, including VMs, Azure App Service, and AKS or Azure [[Kubernetes]] Service Clusters.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=18)** A file share can be simultaneously mounted to multiple types of the same compute, and to ensure files are not overwritten at the same time Azure files provides the leases and locks functionality.
>
> **[0:31](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=31)** both the SMB and NFS protocols can be mounted and SMB requires port 445 to be open.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=40)** For the demo, the following resources have already been created and you can of course create these using the bicep files for this chapter from the [[GitHub]] repo.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=50)** in the demo, first of all, we're going to look at the file share that has been created and then switch to the window server to mount the share using a script.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=60)** Switching to the portal.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=62)** A note here, I am accessing the portal through the [[Windows]] VM, which is in the same VNAT as the private link to the storage account.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=71)** And this is so I can access the file share in the portal otherwise I'll be blocked by the networking configuration.
>
> **[1:17](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=77)** And we can see the resources that have been deployed.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=80)** And this is the storage account.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=83)** So working through to the file share at the top there is an option to connect and it is this connection that's going to give us a script to mount the file share on the server.
>
> **[1:38](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=98)** Note at the top there's a warning stating that secure transfer required is enabled for this storage account.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=105)** So this means that an SMB client of at least 3.0 is required on the server.
>
> **[1:51](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=111)** Now we can go to the [[Microsoft]] Docs to see the supported clients for each server version, and you can access this document by following the URL being shown on the screen now.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=124)** Here we can see that [[Windows Server]] 2022 has SMB version 3.1.1 therefore it meets the requirement of SMB 3.0.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=136)** Go back to the portal.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=138)** The next item on the connect is the drive letter.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=142)** This drive letter just needs to be any free drive letter on your server.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=148)** I can now choose how to authenticate.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=150)** The file share does not have identity-based authentication enabled through [[Active Directory]] Entera ID domain services previously known as Azure ADDS, or [[Microsoft Entra ID|Entra ID]] Kerberos.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=163)** Therefore, I'll stick with the storage account key.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=165)** But please note identity based authentication is the recommended method.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=170)** Clicking show script and scrolling down a little bit has displayed a [[Powershell]] script that can be used to mount the drive.
>
> **[3:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=180)** So we'll copy the script using the copy to clipboard, and open PowerShell and paste the script in.
>
> **[3:13](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=193)** The first command sets connectivity over 445 which is available as the NSG for this virtual machine is on the subnet the private endpoint is injected into.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=205)** The second command creates the share and persists the storage account key in the credential manager.
>
> **[3:32](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=212)** Now, if I open a file explorer and access this PC, files mount is now mounted on drive Z.
>
> **[3:42](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=222)** I can create a folder within the mount and minimizing these windows and going back to the file share and browsing.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=239)** The new folder is present.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=242)** So let's add a file
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=250)** with some text.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=255)** Minimizing the window once more and into new folder, new file.txt has been created.
>
> **[4:23](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=263)** Now at this point on the Windows VM we could set up some permissions for the folders and files but only if this account was domain joined.
>
> **[4:32](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=272)** If I now go to the server and search for credential manager and go into Windows Credentials this is where the storage account key is stored and persisted in case of reboot.
>
> **[4:47](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=287)** Now note, this is in the user context.
>
> **[4:50](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=290)** If this mount was for an application we would need to create the credential as the system user, which if I switched to this PowerShell script it can be done with a tool such as PsExec.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=303)** Now these are just some of the ways that an Azure file share can be mounted but you could also use a custom script extension on an Azure VM or a group policy object in Windows AD or an ADMX template through Intune.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=318)** So that's how to mount an Azure file share to Windows server.
>
> **[5:21](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-windows-server?u=76281980&t=321)** Join me in the next video where we'll look at the same routine, but for a [[Linux]] based machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Windows]] (5), [[Powershell]] (3), [[Windows Server]] (2), [[Kubernetes]] (1)
> **Env Vars:** smb (5), aks (1), nfs (1), vnat (1), url (1)
> **Versions:** 3.0 (2), version 3 (1), 1.1 (1)
> **Tools:** powershell (3), github (1)
> **Definitions:** is an  (1), means that (1), known as (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** github repo (1), template (1)

#### [Mounting a file share to Linux](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=0)** - [Instructor] There are two protocols that can be used to mount an [[Microsoft Azure|Azure]] file share to a [[Linux]] system, SMB and NFS.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=8)** You may have heard or read the phrase SMB for [[Windows]], NFS for Linux, but why is that?
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=15)** Well, the first one is quite self-explanatory.
>
> **[0:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=18)** NFS is only supported on Linux but Linux also supports SMB, so why choose NFS when possible?
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=27)** NFS is a stateless protocol.
>
> **[0:29](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=29)** It enables faster transfer and has a reduced overhead.
>
> **[0:34](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=34)** It is also a native file system to Linux.
>
> **[0:37](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=37)** Therefore, mounting an NFS share is easier.
>
> **[0:41](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=41)** NFS uses less bandwidth and is more efficient and is designed for scale in largely-distributed environments, where you could have many Linux systems all needing to access the same file share.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=55)** Now, we're going to walk through mounting an NFS share to Linux.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=60)** So for the demo, I'm going to stick with the file share being injected into a VNet with a private endpoint.
>
> **[1:06](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=66)** But notice, the file share is now a premium file share, which is a requirement for an NFS mount.
>
> **[1:14](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=74)** This file share will be mounted to the [[Ubuntu]] server with the [[Windows Server]] being used to access the portal and to SSH into the Ubuntu server as the security group on the subnet only allows for RDP.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=88)** I'm now RDP-ed into the Windows server shown in the demo architecture, and all of the architecture has already been deployed.
>
> **[1:36](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=96)** And you can also deploy this infrastructure using the Bicep files for folder 05_03 in the [[GitHub]] repository supplied with this course.
>
> **[1:46](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=106)** The portal is open at the resource group the resources were deployed to.
>
> **[1:51](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=111)** And scrolling down, we can get to the storage account which is now premium storage account of kind file storage.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=120)** And into the file share, we can see that the protocol is NFS.
>
> **[2:05](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=125)** Now, this is the file share that I'm going to mount.
>
> **[2:08](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=128)** And to do this, I'm going to need to SSH into the Linux VM to run some bash commands.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=136)** So, I'm going to need to know the private IP address of the Linux server, which is 10.0.0.4.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=144)** So, opening a [[Powershell]] window, I'll SSH to the Linux box, which is at this IP address.
>
> **[2:35](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=155)** And admin0503 is the username.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=159)** And now, I just need to add the password.
>
> **[2:43](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=163)** And my SSH session has been created.
>
> **[2:46](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=166)** So, I now need to know the commands to create the mount.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=169)** So, if I go back to the portal and back to the file share, I can use these commands to mount the share.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=181)** Now, we've already stated that my Linux distribution is Ubuntu, but in the dropdown box here, I can see commands for other distributions.
>
> **[3:11](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=191)** And going back to Ubuntu, I'm just going to paste these commands in one by one so we can see what they do.
>
> **[3:20](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=200)** So, the first command is going to update the package list so that all the package information is up to date.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=207)** That's going to take a few seconds to run.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=209)** So, I'll go back and copy the second command.
>
> **[3:36](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=216)** Paste this in.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=218)** Now, this is installing the package nfs-common, which is required by the mount command.
>
> **[3:46](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=226)** Just leave that to run.
>
> **[3:49](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=229)** And the mount path is stating where on the Linux machine the file share is going to be mounted to.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=235)** First of all, we need to create the folder that it's going to be mounted to, which is this third command.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=242)** The installation's still running, so we'll just leave that for a second.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=248)** The folder is now created.
>
> **[4:11](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=251)** The final command is going to mount the share.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=255)** Let's paste this in.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=258)** Just drag that across a little bit more so we can see the full command.
>
> **[4:22](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=262)** Now, the -t states the type of amount as nfs.
>
> **[4:28](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=268)** The first part of the string before the colon is the NFS server, which in this case is the file service endpoint for the storage account.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=277)** And on the right of the colon is the share.
>
> **[4:41](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=281)** Then, we have the local mount point which is the directory I've just created.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=286)** And next to the options, the version of NFS being used and the security mode, where sys is the local Unix user and group.
>
> **[4:58](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=298)** Note there's no storage account key for authentication and authorization.
>
> **[5:03](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=303)** NFS depends on system security through the private endpoint to the VNet.
>
> **[5:09](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=309)** So hitting Return, the command runs, and I should be able to cd to the mount point
>
> **[5:21](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=321)** and into nfsmount, and I can make a directory, cd into that directory, and create a file.
>
> **[5:39](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=339)** There's the file created in our folder.
>
> **[5:42](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=342)** Now, if I reboot and just leave for a couple of moments for the Linux machine to boot back up again, add the password in once more.
>
> **[5:58](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=358)** If I now cd back to the mount point once more and back into nfsmount, the directory in the files have gone, and this is because the mount has not persisted across the boot.
>
> **[6:16](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=376)** I'd need to mount it once more using the same command as before.
>
> **[6:20](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=380)** Now, this isn't ideal as I'd like the mount to persist across reboots.
>
> **[6:25](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=385)** Therefore, I'm going to need to add it to the fstab system file, which hold information about the file system, mount points, and mount options.
>
> **[6:35](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=395)** Now, fstab is held in etc, so let's cd to etc and use nano to edit the file.
>
> **[6:43](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=403)** Now, the form of the line that I'm going to need to add to the file is very similar to the mount line, and I've got a copy of it in my notes.
>
> **[6:51](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=411)** So, it's quite long.
>
> **[6:52](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=412)** I'm going to copy it across.
>
> **[6:54](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=414)** Just move the command and paste it in.
>
> **[6:59](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=419)** So once more, we have the endpoint, the share, and the local mount point with the options.
>
> **[7:06](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=426)** I'll save the file, and I've just realized I needed to run nano as sudo, so I'll just need to do this once more.
>
> **[7:18](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=438)** Otherwise, I'm not going to be able to save the file.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=443)** The file's now saved.
>
> **[7:24](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=444)** So, let's shut down the server once more.
>
> **[7:32](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=452)** Just wait for it to reboot.
>
> **[7:36](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=456)** It's not quite ready yet.
>
> **[7:37](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=457)** Let's just try once more.
>
> **[7:41](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=461)** Pop the password back in.
>
> **[7:45](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=465)** Right, got the password right this time, and cd back to the mount point.
>
> **[7:57](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=477)** And this time, the directory is there and so is the file, so the changes in fstab have been picked up and the share has been mounted on reboot.
>
> **[8:11](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=491)** So, that's the end of this chapter on features that are specific to Azure files.
>
> **[8:15](https://www.linkedin.com/learning/manage-storage-in-azure/mounting-a-file-share-to-linux?u=76281980&t=495)** Join me in the next chapter where we'll look at how to protect data inside your storage accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (13), [[Ubuntu]] (4), [[Microsoft Azure|Azure]] (2), [[Windows Server]] (2), [[Windows]] (1)
> **Env Vars:** nfs (13), ssh (4), smb (3), rdp (2)
> **CLI Commands:** cd (5), ssh (4), make (1), sudo (1)
> **Tools:** github (1), bash (1), powershell (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Versions:** 10.0.0 (1)
> **UI Navigation:** dropdown (1)


### 6. Protecting Azure Storage Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Encryption at rest and in transit](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=0)** - [Instructor] Securing data with encryption protects the data from being viewed or altered by those who should not have access to the data.
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=9)** For [[Microsoft Azure|Azure]] Storage, we are primarily concerned with encryption at [[Representational State Transfer (REST)|rest]], which is part of the defense to stop an attacker that may obtain a hard drive but not the keys to decrypt the data on it and therefore must break the defense of the encryption to read it.
>
> **[0:24](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=24)** And also encryption in transit where data is intercepted when moving between devices and networks that has already been encrypted before transmission.
>
> **[0:35](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=35)** For encryption at rest, there are a couple of options.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=39)** For a client, which is writing to a storage account, by default, all data written to any endpoint in Azure Storage is encrypted with Storage Service Encryption, or [[Server-Sent Events|SSE]] for short where a [[Microsoft]]-managed key is used to encrypt the data.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=55)** This all happens without cost and without code changes.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=59)** Microsoft manages the whole process for you.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=62)** In some scenarios around compliance, a Microsoft-managed key may not meet regulatory requirements.
>
> **[1:08](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=68)** Therefore, a customer-managed key which is stored in a key vault, can be used as a key encryption key to wrap the Microsoft-managed key.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=78)** Therefore, no data can be read back from this account without the customer-managed key.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=85)** A further option for blob data only is to send the encryption key on the request to the blob endpoint.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=93)** The key can come from the key vault or another secret service and each key can be different for each blob.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=102)** The blob service then encrypts each blob with the encryption key sent in the request.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=108)** This is known as encryption on request.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=112)** There is also an option on creation of the storage account for infrastructure encryption.
>
> **[1:58](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=118)** Infrastructure encryption creates a further encryption layer by encrypting the data at the infrastructure layer which was already encrypted with the service encryption.
>
> **[2:08](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=128)** Therefore, if one of the encryption keys is compromised, the other still protects the data.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=135)** For encryption in transit, it is recommended that HTTPS is used on the endpoint which will initiate a TLS or transfer layer security handshake.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=146)** This handshake process enables both the client and server to possess a session key.
>
> **[2:32](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=152)** The client uses the session key to encrypt the data which is transported encrypted to the server, which in this case, is the storage service.
>
> **[2:41](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=161)** If a bad actor is somehow able to intercept your requests, they cannot read the data as it is encrypted with the session key.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=171)** The storage service then uses the session key to decrypt the data, which is then stored in the account.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-and-in-transit?u=76281980&t=178)** The same process can be repeated if data needs to be read from the storage account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Microsoft Azure|Azure]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Server-Sent Events|Sse]] (1)
> **Env Vars:** sse (1), https (1), tls (1)
> **Definitions:** known as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Encryption at rest, encryption scopes, and encryption in transit in practice](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=0)** - [Instructor] We are now in the portal at the Resource Group for this walkthrough on encryption in [[Microsoft Azure|Azure]] Storage.
>
> **[0:06](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=6)** In this key vault are some keys, one of which we would like to use for customer-managed encryption.
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=13)** And this storage account has a system-assigned identity.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=17)** If we go into the key vault and look at the access control for it, we can see that the identity has been assigned: Key Vault Crypto User.
>
> **[0:29](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=29)** Now, this is because Key Vault Crypto User has the data actions that are needed for the encryption process, which is Wrap Key, Unwrap Key, and Get.
>
> **[0:42](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=42)** Now, to enable my logged in user to select the key and set up the customer-managed encryption, I'm going to need to assign a role.
>
> **[0:51](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=51)** And this role is going to need List Key.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=54)** If I search for key here, the Key Vault Crypto User Has List Key.
>
> **[1:01](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=61)** So that's using the principle of least privilege.
>
> **[1:04](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=64)** So I'll select my username, which is azure instructor 14, and add it as a member and assign the new role assignment.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=80)** So now I can return to the storage account, and we can set up customer-managed encryption.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=89)** So Azure Storage wraps the account encryption key with a customer-managed key taken from Key vault.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=97)** So entering Encryption, choose Customer-managed keys, and we're going to select the key from the key vault.
>
> **[1:48](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=108)** Selecting Key vault.
>
> **[1:50](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=110)** This is the key vault that we've just set up the permissions on.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=114)** And I'm going to use the Key storage encryption key which has already been created inside the key vault.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=121)** Clicking Select and opening the Advanced section, it is possible to use a key that is not controlled by this tenant.
>
> **[2:09](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=129)** This is for scenarios where customers want to control their keys but you need to keep the data.
>
> **[2:16](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=136)** Clicking Save, and Azure will apply the key.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=139)** It doesn't replace the [[Microsoft]]-managed key.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=142)** It uses the new key to encrypt the Microsoft-managed key.
>
> **[2:25](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=145)** This is called a key encryption key.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=148)** The customer-managed key is now enabled, and any new data is encrypted automatically with old data retrospectively encrypted in the background.
>
> **[2:40](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=160)** Scrolling up to the top, you can see Infrastructure encryption.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=165)** And this cannot be enabled as this can only be set on storage account creation.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=171)** At the top, we also have a tab for Encryption scopes.
>
> **[2:55](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=175)** If you have a scenario where you are storing multiple customers' data in one one storage account, then Encryption scopes is likely to be a useful feature.
>
> **[3:04](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=184)** Encryption scopes enable the use of multiple Microsoft-managed or customer-managed key to encrypt data.
>
> **[3:12](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=192)** Here I've clicked Add, and we're going to use a Microsoft-managed key and call the scope "customer1."
>
> **[3:19](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=199)** Note, we can also choose to enable infrastructure encryption at this level.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=205)** So I'm going to choose Customer-managed keys from my key vault, and use customer1 key and click Create.
>
> **[3:36](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=216)** Navigating to the Containers blade, I'm going to choose to create a new container and call it customer1.
>
> **[3:44](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=224)** And opening the Advanced options, we have the option to use the newly created encryption scope.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=232)** And clicking Create or the data created in the customer1 container will be encrypted with the key from the encryption scope.
>
> **[4:00](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=240)** And the [[Representational State Transfer (REST)|rest]] of the data is going to be encrypted using the customer-managed key that we set up first.
>
> **[4:07](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=247)** This makes Encryption scopes a really powerful tool for securing data for multiple customers in one storage account.
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=254)** And it can even be used at the Blob level.
>
> **[4:18](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=258)** If we switch now to the Configuration pane, we have the options for Encryption in transit.
>
> **[4:26](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=266)** Here is the option for Secure transfer required.
>
> **[4:29](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=269)** This controls where the HTTPS is required when accessing the storage account.
>
> **[4:35](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=275)** Note, although HTTPS is recommended, there are configurations for access from [[Linux]]-based clients and Azure files that require just HTTP access.
>
> **[4:48](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=288)** Scrolling further down, you can choose the minimum TLS version for requests.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=294)** Here there is a default of 1.0 or greater, and this would've been chosen for backwards compatibility.
>
> **[5:01](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=301)** We've come to the end of our storage data encryption demo.
>
> **[5:04](https://www.linkedin.com/learning/manage-storage-in-azure/encryption-at-rest-encryption-scopes-and-encryption-in-transit-in-practice?u=76281980&t=304)** Join me in the rest of the chapter where we're going to look at protecting your data, where we're going to look at protecting your data from deletion and corruption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Linux]] (1)
> **Env Vars:** https (2), http (1), tls (1)
> **Prerequisites:** set up (4)
> **UI Navigation:** select the (2)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 1.0 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Soft delete and versioning for blobs, containers, and file shares](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=0)** - [Presenter] Deletion of data with an accidental or malicious is a key concern of any organization that stores data.
>
> **[0:08](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=8)** And therefore, it's important to understand how to protect data from deletion.
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=13)** This is where the features soft delete for blobs and files and versioning for blobs should be employed as recommended by [[Microsoft]] as part of a strategy to protect data from deletion.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=25)** For example, here we are back in the portal and I've just realized that the storage account from my walkthrough has been deleted.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=33)** Now, if the storage account has been deleted in the last 14 days and no other storage account has been created that has the same name, then it may be possible to restore the storage account through Restore at the top of the storage account list.
>
> **[0:47](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=47)** But note this message at the top of the restore pane.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=50)** Microsoft does not guarantee that the storage account will restore even if it's displayed in this list of restorable accounts at the bottom of the page.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=60)** And my account is called SA0602 and it's the last one that I want to restore.
>
> **[1:08](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=68)** The recovery process is running and luckily my storage account had only just been deleted and has restored.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=76)** So refreshing the page, my recovered storage account is listed.
>
> **[1:22](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=82)** Now I don't want that to happen again.
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=84)** So if we go into the storage account and scroll down to locks, I can stop the storage account from being deleted by adding a delete lock.
>
> **[1:36](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=96)** Let's give it a name of no delete.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=100)** And now this lock has been added.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=102)** A storage account cannot be deleted, whether that's through the portal, the command line, through an SDK or using [[Infrastructure as code (IaC)|infrastructure as code]].
>
> **[1:51](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=111)** Now scrolling up into the [[Data Management]] menu and into data protection, this storage account has no protection enabled.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=121)** So if I go into a container and delete a blob, the blob is now gone.
>
> **[2:13](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=133)** And this switch here, show deleted blobs does not list the one that's deleted.
>
> **[2:19](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=139)** For this feature to work, we need to enable soft delete for blobs.
>
> **[2:23](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=143)** So if I go back to the data protection menu and tick soft delete for blobs, I can now set the number of days that a deleted blob can be recovered up to.
>
> **[2:35](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=155)** And this is up to the maximum of 365 days.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=159)** So clicking save and returning to the containers pane, back into the same container and delete the second blob.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=171)** If I now choose, Show Deleted Blobs, the deleted blob is listed.
>
> **[2:57](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=177)** I can restore this blob by using the ellipses and choosing to undelete it and that's the blob restored.
>
> **[3:06](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=186)** But what happens if I overwrite the blob?
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=188)** So I go into its properties and choose to edit it add some new text and save.
>
> **[3:20](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=200)** There's no deleted blob being shown.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=203)** But if I go into the properties and snapshots, [[Microsoft Azure|Azure]] has created a soft deleted snapshot of the blob and it did that in the background at the point in time before the edit was saved.
>
> **[3:40](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=220)** Now, soft delete for blobs only covers the blobs themselves.
>
> **[3:43](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=223)** If I navigate back to the container and choose to delete the container and override the delete lock, the container has been deleted.
>
> **[3:59](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=239)** And if I choose to show deleted containers, the container isn't listed because it wasn't protected.
>
> **[4:06](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=246)** To protect the container from deletion, we go back to the data protection pane and this time we need to enable soft delete for containers which once again, has a default of recovery up to seven days.
>
> **[4:21](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=261)** So saving this change and returning back to the container's listing, I'll delete the final container in here, override the delete lot once more and choose to show deleted containers.
>
> **[4:36](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=276)** And the container is listed and it's the same process to undelete using the right hand side of the container name.
>
> **[4:44](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=284)** And there the blob has been successfully undeleted.
>
> **[4:48](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=288)** For soft delete for blobs, there is one further option to mention back in data protection, which is to allow permanent deletion of soft deleted snapshots or versions before the retention period ends.
>
> **[5:01](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=301)** If this is not enabled, snapshots and versions can only be deleted automatically at the end of the retention period.
>
> **[5:09](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=309)** Soft delete for file shares works similarly to that of blob containers and the option can be enabled for all shares on the account and a full share can be restored up to its retention period which has a maximum of 365 days.
>
> **[5:26](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=326)** Microsoft also recommends that on protecting blobs, enabled blob versioning should also be enabled which is found in the data protection pane under the tracking items.
>
> **[5:45](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=345)** Checking enable versioning for blobs, you have the option to keep all versions or to automatically delete versions after a configurable number of days.
>
> **[5:53](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=353)** Saving to keep all versions will enable any version on the blob on this storage account to be accessible and therefore you can restore to a previous version of a blob.
>
> **[6:04](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=364)** However, you do need to think about the cost implications of this as every version you store will contribute to your storage costs.
>
> **[6:12](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=372)** And this of course also includes every soft deleted blob, container, snapshot and file share.
>
> **[6:19](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=379)** We will explore how to limit these costs in the next chapter.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=383)** I've clicked Save on blob version enable.
>
> **[6:25](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=385)** So let's have a look how it works.
>
> **[6:28](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=388)** Navigating back to the containers and into soft version we led it this first blob, add in a small text change and save the change.
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=405)** Clicking on versions, we have a version of this blob with a version ID of the date when the version was created.
>
> **[6:53](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=413)** It is earlier than the current date.
>
> **[6:55](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=415)** By select this blob version and download it, it is the original version and the version ID is how Azure uniquely identifies each version.
>
> **[7:07](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=427)** If we go back to the portal, you can restore any version of the blob by selecting the version and choosing to make current version.
>
> **[7:17](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=437)** Note, the list of versions has increased as the old current version is now the previous version.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=443)** So going back to overview and editing the blob, the text has reverted back to its original state and if I chose to overwrite the blob, another new version would be created rather than a deleted snapshot.
>
> **[7:37](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=457)** Even though soft delete for blobs is still enabled.
>
> **[7:41](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=461)** And if I go back into data protection and disable soft delete for blobs and click save and go back into the container and show the blob properties once more, the versions are still present.
>
> **[8:01](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=481)** So if you need to remove the versions, you have to delete them.
>
> **[8:06](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=486)** That's the end of our look through the recommendations for data protection.
>
> **[8:10](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=490)** To enable container and file share soft delete and blob soft delete and blob versioning which together enable restoration of data that has been deleted or modified.
>
> **[8:22](https://www.linkedin.com/learning/manage-storage-in-azure/soft-delete-and-versioning-for-blobs-containers-and-file-shares?u=76281980&t=502)** Join me in the next video to look at further options for blob data protection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Microsoft Azure|Azure]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Data Management]] (1)
> **Cross-References:** go back to (3), in the next (2), in the last (1)
> **Env Vars:** sa0602 (1), sdk (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)

#### [Change feed for blob data](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=0)** - [Instructor] Through our exploration of protecting data in a storage account, we've covered accidental deletion and reverting to previous versions of blobs, but not how to log changes against data.
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=13)** Change feed for blobs creates a transaction log of all changes with each change making a single entry in the log.
>
> **[0:20](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=20)** Each of these changes is in order of change and these are guaranteed to be written in that order.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=27)** The log is stored as a blob in a storage account and therefore inherits the account's durability, and the log is stored as an immutable append blob and is therefore read only.
>
> **[0:39](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=39)** It cannot be deleted or modified for a given duration.
>
> **[0:44](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=44)** The duration that a log is kept for is set up when the data protection is enabled at the account level.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=50)** In this storage account, the change feed has been enabled.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=55)** Scrolling down in the Data protection plane, we can see that logs will be automatically deleted after seven days for this change feed configuration.
>
> **[1:05](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=65)** Now, you can choose to keep all logs, but this is going to be much more costly as each log will contribute to the storage cost of the account.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=73)** When change feed was enabled, a container was created, $blobchangefeed, and the logs are stored within this container.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=83)** But before we look at the logs, we're going to need to create some changes to the blocks blobs in this account.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=89)** So I'll go back to Containers and there's a third container, containerfeed, with two blobs.
>
> **[1:35](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=95)** I'm going to edit blob1.txt and create two separate text changes, which should be put into the log as two separate entries.
>
> **[1:50](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=110)** I've saved both of those.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=112)** And I'm also going to add a [[Metadata]] change to blob1.[[JSON]] because blob property changes are also tracked.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=121)** So here's the metadata and we're going to add a key-value pair, feedCheck, and just a value of 1234.
>
> **[2:09](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=129)** So saving that change and going back into the blob change feed container.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=135)** Logs are stored in the log virtual directory and split into data buckets for each day.
>
> **[2:23](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=143)** So go through, this is the date of the current day and this is the time that the changes have been added.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=149)** Now, it can take a couple of minutes for the change feed to be updated.
>
> **[2:33](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=153)** So if you need a feature to trigger off changes in real time, then you should look at [[Microsoft Azure|Azure]] Storage events.
>
> **[2:40](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=160)** The thing with Azure Storage events is they're not guaranteed to be ordered.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=165)** The log of changes is added in Apache Avro format.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=169)** Apache Avro as a binary format, and note that this blob type is in append blob.
>
> **[2:54](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=174)** So we cannot view these in the portal.
>
> **[2:56](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=176)** To view this file, we'll need to download it.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=179)** So I'm going to use the ellipses to the right and click Download.
>
> **[3:03](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=183)** Now, I've installed an extension within Visual Studio Code which will allow me to view this file.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=189)** So I need to copy the file into VS Code.
>
> **[3:13](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=193)** There we go.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=194)** Now, I can't read the file in this format as it is, but I can right-click on the file and choose to preview the data on the side, which is going to load up the Avro extension.
>
> **[3:25](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=205)** Closing the two other [[Windows]], we can now look at the format for the file.
>
> **[3:29](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=209)** Scrolling across to the right a little, we can see the first two entries where the two blobs were created.
>
> **[3:39](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=219)** Then the two edits, which are listed as utilizing the Put Blob API, which is the request on the blob service for create or modification of a block blob, whereas the blob properties utilize a different API, which generates a blob property's updated event.
>
> **[3:58](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=238)** The Apache Avro format is compact and fast, which is important as a blob change feed is likely to produce a high volume of change events, which is why Apache Avro is designed to be consumed by [[Big Data]] processing tools such as [[Apache Spark]].
>
> **[4:14](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=254)** This is also why the virtual directory is split into buckets, to enable asynchronous processing by such tools, and multiple processing applications can read the changes in parallel.
>
> **[4:27](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=267)** The features of blob change feed bring multiple use cases from audit and compliance to creating metrics and analytics on how your blob data is used.
>
> **[4:37](https://www.linkedin.com/learning/manage-storage-in-azure/change-feed-for-blob-data?u=76281980&t=277)** Change feed can also be used for backup, DR, and archiving and to synchronize a cache or index for searching data, and, finally, as a trigger on change events, which can also be filtered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Microsoft Azure|Azure]] (2), [[JSON]] (1), [[Windows]] (1), [[Big Data]] (1)
> **CLI Commands:** apache (5)
> **File Paths:** blob1.txt (1), blob1.json (1)
> **Env Vars:** api (2)
> **Tools:** visual studio (1), vs code (1)
> **Code Identifiers:** feedcheck (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)

#### [Point-in-time restore for blob data](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=0)** - [Instructor] Change feed also enables another data protection feature for block blobs in [[Microsoft Azure|Azure]].
>
> **[0:06](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=6)** This is point in time restore for containers.
>
> **[0:10](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=10)** In the second storage account, which must be a storage v2 general purpose account.
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=16)** Otherwise, I cannot enable point in time restore through the data protection options.
>
> **[0:22](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=22)** Now the setup of the storage account, when I ran the Bicep files, has already enabled it for me and point in time restore for containers has three requirements.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=33)** That's soft delete for blobs, versioning for blobs, and enable blog change feed.
>
> **[0:38](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=38)** And this is why they're grayed out, because they are required for point in time restore.
>
> **[0:44](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=44)** If I scroll up in the menu and go to containers, I've already created some edits and some deletes in this storage account.
>
> **[0:54](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=54)** In container del one, I have deleted blob2.txt.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=60)** In container edit one, I have edited both of these blobs.
>
> **[1:06](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=66)** And in container restore I have deleted a blob and edited blob1.[[JSON]].
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=72)** Going back to the container listing, we'll choose to restore container edit one and container restore by selecting both of the containers and going up to the dropdown for restore containers.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=85)** I can choose to restore selected.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=88)** This gives me the option to restore to a point in time back to when either point in time restore was switched on or to the retention point if that has been hit.
>
> **[1:39](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=99)** Now I noted the time it was before I made the changes that we've just been through so I'm going to change this time to that point.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=112)** And next we have the option to filter the restore to specific blobs in a container using the container name and a full blob name, including the virtual directory.
>
> **[2:03](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=123)** Now, I want to restore for all blobs in these containers.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=126)** So I'm not going to filter and I'm going to choose yes to proceed and click restore.
>
> **[2:14](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=134)** During the time of restore, the storage account cannot access the blob ranges being restored until the process is complete.
>
> **[2:21](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=141)** Now the time taken for the completion is dependent upon the number of changes that need to be restored.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=149)** So if your restoration time is beyond 30 days this could be in the hours.
>
> **[2:35](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=155)** Out of the container listing and choose to refresh the portal to make sure it picks up the changes.
>
> **[2:42](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=162)** If I come out of the container listing and back in, there is an error.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=167)** The point in time restore process is still running.
>
> **[2:51](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=171)** So I cannot access this container.
>
> **[2:55](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=175)** After a short time, the process is complete and entering one of the containers that we chose to restore, we can see that the data is restored as expected.
>
> **[3:05](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=185)** This walkthrough brings us to the end of protecting data against deletion or logical corruption.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/point-in-time-restore-for-blob-data?u=76281980&t=190)** Join me in the next video where we'll look at data protection options designed for regulatory requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[JSON]] (1)
> **UI Navigation:** scroll up (1), in the menu (1), go to (1), dropdown (1)
> **File Paths:** blob2.txt (1), blob1.json (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Immutable storage for business-critical blob data](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=0)** - [Presenter] Business critical data can be data that is essential for the success of a business, where the data is relied on for decision making or data that is governed by data protection laws or regulatory requirements or a combination of the both.
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=16)** Examples of such data are financial, healthcare and personally identifiable data which are all covered by various types of regulations some of which are often regional.
>
> **[0:29](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=29)** Examples of data critical to a business but not necessarily covered by regulation could be operational data used for analytics, audit trails, backups, or archive data or data required for legal proceedings.
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=46)** In each of these cases, it is likely that the data needs to be kept in an unaltered state and for an identified amount of time.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=55)** This data is written to once and can be read many times, but not altered.
>
> **[1:00](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=60)** This is also called WORM state, Blob storage in [[Microsoft Azure|Azure]] can utilize the immutable storage for blobs feature to place blob data into a WORM state.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=71)** There are two types of immutable storage policies, timed-based retention and legal hold.
>
> **[1:18](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=78)** With both types of immutable blobs, a blob can be created and read, but not modified or deleted.
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=84)** Each type does have subtle differences.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=87)** Time-based retention requires a specified interval for the blobs or containers to be in a WORM state.
>
> **[1:33](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=93)** This interval is either unlocked for testing or locked where it cannot be decreased or removed.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=100)** This lock enables [[Regulatory Compliance]], For more information on which regulations, see this link to the Azure documentation.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=109)** Once the time interval is finished, the data can be deleted but not overwritten.
>
> **[1:55](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=115)** For legal hold, the WORM state is held for the length of the legal proceedings with tags on the data being used to identify the blobs that are part of the legal hold.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=126)** Once a legal hold is removed, the data can be deleted or modified.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=131)** One of the key differences between the two types is locked time-based retention policies cannot be cleared before the scheduled interval even by administrators.
>
> **[2:21](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=141)** The features of the two types of immutable storage make them suitable for specific protection scenarios.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=148)** Time-based retention, especially in the lock state, is designed to be used for classified compliance and regulatory data.
>
> **[2:36](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=156)** For example, personally identifiable information and legal hold is for investigations and archival where the time for attention is not known upfront.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=167)** I've switched into the portal now so that we can explore how the two types are set up.
>
> **[2:53](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=173)** This storage account has blob versioning enabled, and it also has a couple of containers of blob data that we are going to place into a WORM state and with both types of immutable storage for blobs, the policies can be set at the container level and the blob version level dependent on the configuration of the data protection in the storage account.
>
> **[3:18](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=198)** We'll set up a time-based retention policy on this container by clicking the ellipses next to it and choosing access policy.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=207)** We add a policy under a mutable blob storage and choose a policy type of time-based retention.
>
> **[3:35](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=215)** As this is a demo, I'm only going to set the retention period to one day but this can actually be up to 400 years.
>
> **[3:42](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=222)** We need to leave version level immutability unchecked as this is what sets a container level scope for the policy.
>
> **[3:51](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=231)** If protected appended rights are enabled, a pen blobs can be added to and block blobs that are written to using an application that can use put blob calls can add blocks to the blob but it cannot overwrite blocks that are already present.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=248)** So I'll leave both of these options unchecked and click Save.
>
> **[4:13](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=253)** The immutable storage policy is listed and the scope is listed as container with a state of unlocked.
>
> **[4:20](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=260)** Returning to the container and entering it and trying to delete one of the blobs.
>
> **[4:31](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=271)** I cannot, and the error listed states that the blob cannot be deleted due to the immutability policy.
>
> **[4:38](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=278)** Going back up a level to the container and returning to the policy as it is unlocked, we can edit it and we can extend the retention period and we can edit it once more and we can decrease the retention period.
>
> **[4:58](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=298)** I can also choose to delete it because it is unlocked but if we lock the policy, type yes to confirm and back to the ellipses, we can no longer delete the policy.
>
> **[5:14](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=314)** Even though my login has administrative privileges, going back into edit the policy, I can extend the policy and I can do this up to five times at the container scope but if I try to edit once more and decrease the policy, I cannot.
>
> **[5:36](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=336)** Caning this change and going back to the resource group, version level immutability can either be enabled at the account level at the point of creation which if I go into this second storage account and enter the data protection pane, we can see this when scrolling down and here it is enable version level immutability support or we can enable it on a new or existing container which doesn't require this checkbox to be enabled.
>
> **[6:10](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=370)** We could add a policy at the account level which can be overridden at the container level.
>
> **[6:16](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=376)** And note this is for time-based retention only.
>
> **[6:19](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=379)** If version level immutability is enabled at the container level, legal hold can only be set at the blob version level, and if I return to the container listing and go to manage its policies and add a policy at the container scope, the only policy available to add is time-based due to the version level immutability switch at the account level.
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=405)** Going back to the first storage account that we used.
>
> **[6:49](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=409)** We're now going to set up a legal hold on this container.
>
> **[6:54](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=414)** The processes the same.
>
> **[6:55](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=415)** Use the ellipses to enter the access policy and add an immutable blob storage policy.
>
> **[7:02](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=422)** And this time the policy type is legal hold.
>
> **[7:06](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=426)** For this to apply to blobs, the blobs in this container will need at least one specific tag to be present.
>
> **[7:13](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=433)** We add case ID so all blobs with the case ID tag will be subject to the legal hold and I'll click Save to apply this tag.
>
> **[7:24](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=444)** So let's add a case ID tag to one of the blobs in the container.
>
> **[7:29](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=449)** Let's go to blob three and scroll down.
>
> **[7:33](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=453)** The case ID tag is already present so now if I try and delete the blob, I cannot, the delete failed due to the immutability policy.
>
> **[7:45](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=465)** And also if I try and edit the blob, the save never updates, again because of the immutability policy.
>
> **[7:58](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=478)** For a turn back to the container level and into the access policies, scroll across, I can delete the tag and click to save the policy.
>
> **[8:12](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=492)** This will clear the legal hold so the immutability policy is no longer listed.
>
> **[8:17](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=497)** And returning to the blobs once more, selecting blob three and clicking Delete, the blob can be deleted as the immutability policy has been cleared.
>
> **[8:31](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=511)** We've now reached the conclusion of this chapter on data protection, exploring each of these options for recovery of deleted, overwritten or modified blobs.
>
> **[8:41](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=521)** We've also looked at how to track changes to blobs and restore to different versions, and how to apply immutability policies for legal or regulatory data.
>
> **[8:51](https://www.linkedin.com/learning/manage-storage-in-azure/immutable-storage-for-business-critical-blob-data?u=76281980&t=531)** Join me in the next chapter where we're going to look at how to manage costs for storage data and how to monitor Azure storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Regulatory Compliance]] (1)
> **Env Vars:** worm (5)
> **UI Navigation:** go to (2), checkbox (1), scroll down (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 7. Managing Cost and Monitoring Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Billing, reserved capacity, and network routing preference for Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=0)** - [Instructor] When managing a storage account for cost, it is important to understand how the services are billed, so that costs can be minimised.
>
> **[0:09](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=9)** Billing on a storage account is a combination of multiple factors.
>
> **[0:13](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=13)** The region the account is created in, whether the account is premium or shared, and the level of redundancy chosen, which determines how many copies there are of the base data.
>
> **[0:26](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=26)** Where the base data is how much data in total is being stored in the storage account.
>
> **[0:32](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=32)** There are costs associated with every read and write operation to the data in the storage account along with a charge for transferring data to another region, which is part of the reason why it is recommended that applications that access data are stored in the same region as the data.
>
> **[0:51](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=51)** These three factors together often make up the core of the cost on a storage account.
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=57)** There are also actions on a storage account that can incur extra cost, and we can see lists of these given in the [[Microsoft Azure|Azure]] Storage documentation for avoid billing surprises, which you can access by following this link.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=72)** For example, enabling soft delete for blob storage and versioning will create extra data that needs to be considered as part of the storage account cost.
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=84)** Or value adds for Azure Files, which can be viewed at this link, explains that including Azure File sync and Azure Backup will both increase the cost of using Azure Files through transaction costs, and additional storage utilization through differential snapshots.
>
> **[1:44](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=104)** These are both being costs that may not be expected when enabling Azure File sync or Azure Backup.
>
> **[1:51](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=111)** The pricing for all storage services can be seen on their pricing pages.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=116)** For example, this is the pricing for Azure Files, which can be viewed at this link.
>
> **[2:02](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=122)** Scrolling down we can see that premium [[Data Storage]] on SSDs is always the highest, but the costs increase as redundancy increases from ZRS through to GRS, and scrolling down further to the list of transaction prices the cost of transactions is per 10,000 with prices increasing once more depending on the level of redundancy chosen.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=150)** Moving down slightly to the end of this table there is a small note on outbound data charges.
>
> **[2:37](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=157)** Clicking through on this we can see that data transfer is charged when moving between availability zones, for inter-regional transfer and for internet egress, whether out of the [[Microsoft]] backbone or through an ISP, with the ISP [[Routing]] being slightly cheaper.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=178)** We can plan for upfront storage account costs, taking all billing factors into consideration by using the pricing calculator, which you can access through this link.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=190)** So, let's price up a monthly cost for our Azure Files service.
>
> **[3:15](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=195)** Choose Azure Files.
>
> **[3:17](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=197)** So, for 1,000 gigabytes of transaction-optimized storage with local redundancy at the East US region, we'll estimate that we have 10 times as many write operations as lists and read transactions.
>
> **[3:38](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=218)** And scrolling down a little further, we'll have one file sync server and that will total the billing for us to around $125 per month and this is the estimated cost.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=232)** You may have noticed when we were viewing the Azure Files pricing that I skipped reservations which was on this pricing page just above transactions.
>
> **[4:04](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=244)** Reservations are described as helping to lower storage costs by committing to a storage spend in increments of 10 terabytes or 100 terabytes over one or three years.
>
> **[4:16](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=256)** Note also that this is against the cost to store the data only.
>
> **[4:20](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=260)** It does not cover transactions or egress.
>
> **[4:24](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=264)** Switching to the portal, we'll start to purchase a reservation by searching for it and choosing reservations under services, and clicking add.
>
> **[4:36](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=276)** We can see it is possible to create a reservation for blob storage and files along with many other services.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=286)** But unfortunately, I am unable to create a reservation for this subscription type as I'm not the owner of the subscription, which is a prerequisite.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=295)** So, here is a screenshot of the reservation blade.
>
> **[4:59](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=299)** Here we can see that a reservation is purchased based on the 10 terabyte or 100 terabyte sizes, with a greater discount being given for purchasing the 100TB sizes.
>
> **[5:12](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=312)** Now, this is a screenshot of a files reservation.
>
> **[5:14](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=314)** If I had chosen a blob reservation, this would be a 100TB and 1PB sizing.
>
> **[5:20](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=320)** With a reservation, you are guaranteeing a cost level over the term.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=325)** Here we can only see 3 years, but there is also a higher cost option of 1 year, which can be billed up front or in monthly buckets.
>
> **[5:35](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=335)** Once purchased, the reservation will apply across all Azure Files storage at the chosen tier, redundancy, and region up to the reservation size.
>
> **[5:46](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=346)** We'll cover more on tiers in the next two videos.
>
> **[5:50](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=350)** Therefore, if I choose 10TB of hot GRS storage at West US 2, then all file shares that match these choices can have the reduced reservation cost applied up to the 10TB limit, after which standard cost is applied.
>
> **[6:09](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=369)** A reservation is use it or lose it, so if the total does not meet the 10TB size, then you lose the reservation, it is not rolled over.
>
> **[6:18](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=378)** The scope of application must also be set when purchasing the reservation.
>
> **[6:25](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=385)** Where the subscription scope can cover a single subscription, be shared across multiple subscriptions, or more granular at the resource group, or management group level.
>
> **[6:37](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=397)** A reservation isn't locked in for the full term.
>
> **[6:40](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=400)** There is the possibility of switching to a different storage reservation using exchange.
>
> **[6:45](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=405)** For example, if you find the tier you have chosen is not the most efficient to have a reservation against for your application, you can exchange it to a reservation at a new tier.
>
> **[6:56](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=416)** You are refunded the unused portion of your reservation, and this is applied to the new reservation.
>
> **[7:02](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=422)** It is also possible to cancel a reservation, and refunds can be applied for up to $50,000 a year.
>
> **[7:10](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=430)** If you recall the walkthrough of Azure Storage pricing, there is a cost charge for all data leaving the storage account.
>
> **[7:18](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=438)** This page of the Microsoft documentation, which can be accessed by the following link, shows that by default a storage account is created with routing via the Microsoft Global Network, where the client accesses data over the ISP to the local point of presence on the Microsoft Backbone closest to the client.
>
> **[7:37](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=457)** The request travels over the backbone to the region where the data is stored, and the data is retrieved and travels back through the same path.
>
> **[7:47](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=467)** If the point of presence and the location of the storage is in a different region, there is an extra cost associated to transferring the data across the backbone.
>
> **[7:57](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=477)** This can be reduced by using public internet routing for a storage account.
>
> **[8:04](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=484)** For public internet routing, the request is routed over the public internet to the point of presence nearest the data, and the data is transferred back over the same route.
>
> **[8:15](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=495)** This route may be more cost-effective, but there is a trade-off against the high speed, high reliability, and availability of the Microsoft backbone.
>
> **[8:25](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=505)** In this video, we covered how Azure Storage is built, and looked at cost optimization for egress, and also how to use reservations for storage.
>
> **[8:36](https://www.linkedin.com/learning/manage-storage-in-azure/billing-reserved-capacity-and-network-routing-preference-for-azure-storage?u=76281980&t=516)** In the next two videos, we will look at options to help further with storage costs and transaction costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Microsoft]] (5), [[Routing]] (4), [[Data Storage]] (1)
> **Definitions:** is a  (7), is an  (1)
> **Env Vars:** isp (3), grs (2), zrs (1)
> **Cross-References:** in the next (2), we covered (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** prerequisite (1)

#### [Storage tiers and blob rehydration](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=0)** - [Instructor] The two main components of cost for storing data in a storage account are the cost for storing the data itself and the cost for accessing the data.
>
> **[0:11](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=11)** When we think about data and its frequency of access, data with high transaction rates will be written and read live in applications, whether that's a Web app or perhaps an [[IoT]] or media data stream.
>
> **[0:25](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=25)** There are also types of data that are written to and read from infrequently but are always required to be available for immediate access, such as historical medical records or short-term backups, and then there is data that might be written once and not accessed for a long time, if at all.
>
> **[0:43](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=43)** This data is often kept for regulatory and compliance reasons and for long-term backups.
>
> **[0:50](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=50)** [[Microsoft Azure|Azure]] storage for blobs and files sets its cost around how often data is accessed, along with the cost of storing the data itself.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=59)** For blobs, this is managed through choosing a blob access tier.
>
> **[1:04](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=64)** There are four access tiers for Azure blobs in a Standard V2 storage account which map to the frequency of data access on the previous slide.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=73)** Hot is for frequently accessed data, cool and cold for infrequently accessed data, and archive for data that is rarely accessed.
>
> **[1:25](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=85)** The hot, cool and cold access tiers are all online.
>
> **[1:28](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=88)** The data within them is all immediately accessible, whereas the archive tier is for data that can be held offline and can withstand a delay for the data to become available.
>
> **[1:41](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=101)** The cost to transact with the data held in each tier increases from left to right, but the cost to store the data decreases from left to right.
>
> **[1:50](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=110)** Note, these costs are all at the blob level.
>
> **[1:53](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=113)** A default tier can be set for the service itself, but each blob can have a different tier regardless of the container it is stored in.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=121)** A note of caution before carrying on further.
>
> **[2:04](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=124)** The cold tier is currently in preview, which means it may change or be deleted, but as a highly requested feature, I strongly believe it will go GA.
>
> **[2:14](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=134)** Each of the cooler tiers has a minimum amount of time a blob can be stored for costing purposes.
>
> **[2:20](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=140)** For example, if we moved a blob from the hot tier to the cool tier, the blob will be charged for at least 30 days, even if we move the blob back to the cool tier before the minimum.
>
> **[2:33](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=153)** This is the same if the blob is deleted from the tier.
>
> **[2:36](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=156)** You will always be charged the minimum.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=159)** The process of moving a blob from archive to one of the other tiers is called rehydration.
>
> **[2:45](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=165)** It can take up to 15 hours for a blob to rehydrate, so it is imperative to build this into your application or process planning.
>
> **[2:53](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=173)** It is possible to rehydrate a blob quicker, but this is at the highest transaction cost.
>
> **[3:00](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=180)** For file shares, there is a service tier which is set either at the share level or the service level.
>
> **[3:06](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=186)** File shares have premium, transaction optimized, hot, and cool storage tiers, where the choice of tiers available is governed by the performance chosen for the account.
>
> **[3:19](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=199)** Premium is only available for a premium file share, and the others are all configurable from a standard file share.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=207)** Azure files has no concept of an archive tier.
>
> **[3:30](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=210)** All storage tiers are online, and data is immediately accessible.
>
> **[3:35](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=215)** Premium storage is for scenarios that require single-millisecond latency, such as [[Databases]] and FSLogix profiles for Azure Virtual Desktop.
>
> **[3:46](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=226)** Transaction optimized is for scenarios where there are still a very high number of transactions but not the latency requirements of a premium share.
>
> **[3:57](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=237)** Hot storage is for team file shares and shares being utilized with Azure File Sync, and cool is for data that could be archived.
>
> **[4:06](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=246)** The cost of transactions increase as you move through the tiers from left to right with the cost for storage dropping, but with premium file shares being a provisioned upfront cost for total amount of data, which includes transactions, there may be a point when utilizing premium shares over transaction optimized may be more cost effective.
>
> **[4:29](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=269)** Let's jump into the portal and look at how to manage tiers for blobs and files.
>
> **[4:36](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=276)** This is a Standard V2 storage account with its default access tier for blobs set to hot.
>
> **[4:42](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=282)** So if we go into the container that's been set up for this walkthrough and choose to upload a blob from my laptop, I choose the blob and click Upload.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=295)** If I close the upload blob window, we can see that its access tier has been set to hot, and in brackets is the [[Microsoft Word|word]] inferred, which means it inherited this tier from the blob service default that we saw on the Overview page.
>
> **[5:11](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=311)** If I upload a second blob from the same folder but this time go into the advanced upload settings, we can choose the tier that we'd like to upload it at, and this will set it specifically for this blob.
>
> **[5:30](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=330)** Note there are two lists for hot here.
>
> **[5:33](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=333)** One is inferred.
>
> **[5:34](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=334)** The other is being specifically set for the blob.
>
> **[5:38](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=338)** We'll go into why this is shortly, but for the moment, let's choose cool, and scroll down and upload the blob.
>
> **[5:49](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=349)** The list now shows that two blobs in this storage account have different access tiers.
>
> **[5:56](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=356)** So why did we have two types of hot access tier available?
>
> **[6:00](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=360)** If we navigate back to the Overview page and into the default access tier settings which is in the configuration pane, and scrolling down, if I change the blob access tier to cool and click Save, all applicable blobs that were inferred hot will now be changed to inferred cool.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=383)** Now note, there is a transaction cost associated with the write operations of moving all of these blobs between tiers, and this only happens for the ones that are inferred.
>
> **[6:36](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=396)** Therefore, blobs that have their tier explicitly set are not affected.
>
> **[6:41](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=401)** So if we go back into the container, blob1.txt, which was hot inferred, is now cool inferred, and this is why there were two hots on the upload.
>
> **[6:54](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=414)** One was to take hot at the blob level itself specifically.
>
> **[6:58](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=418)** The other was to take the inferred tier from the storage account.
>
> **[7:03](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=423)** We've now decided that blob2.[[JSON]] can be archived, and in the portal, this is achieved through the ellipses on the blob and then choosing to change the tier.
>
> **[7:14](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=434)** If I choose archive, note a warning is shown stating that rehydration can take several hours.
>
> **[7:23](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=443)** I should also state at this point that the archive tier is not available for zone-redundant storage.
>
> **[7:30](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=450)** Clicking Save and the new access tier is set.
>
> **[7:34](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=454)** This can of course be achieved through the blob [[Representational State Transfer (REST)|REST]] API, programmatically with the storage client libraries, or on the command line with Azure [[CLI]] and Azure [[Powershell]].
>
> **[7:45](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=465)** To rehydrate the blob, we go back to the same menu and choose an online tier.
>
> **[7:53](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=473)** We can also choose the rehydrate priority, standard taking up to 15 hours and high priority for emergency situations, which is guaranteed to less than an hour for blobs up to 10 gig.
>
> **[8:07](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=487)** I'll leave it as standard and click Save and leave the blob to rehydrate.
>
> **[8:13](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=493)** If this process was part of an application, a blob rehydration does create a blob event.
>
> **[8:19](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=499)** This means you could fire an Azure function to alert when the blob was available for read.
>
> **[8:25](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=505)** For file shares, the storage tier is set at the share level.
>
> **[8:30](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=510)** Here we have two shares.
>
> **[8:33](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=513)** One is hot. One is transaction optimized.
>
> **[8:36](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=516)** These tiers were set on creation of the file share by selecting a tier here, but it is also possible to move a share between the storage tiers, and we can do this in the portal by entering the file share and choosing Change tier.
>
> **[8:58](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=538)** Note, [[Microsoft]] recommend that you start with transaction optimized if you are migrating data from an on-premises file server due to the high number of transactions this produces.
>
> **[9:09](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=549)** You can then switch to hot after migration if required.
>
> **[9:14](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=554)** Choosing hot, I'll now click Apply, and this process charges a read transaction at the cost of the old tier and a write transaction at the cost of the new tier, and moving from cool has the added cost of data retrieval.
>
> **[9:30](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=570)** Now, this manual method is fine for a couple of blobs like I've been doing, but if you're managing tens or hundreds of thousands, you'll want to look for a method of automating this process.
>
> **[9:41](https://www.linkedin.com/learning/manage-storage-in-azure/storage-tiers-and-blob-rehydration?u=76281980&t=581)** So join me in the next video when we'll look at how to combat this issue with lifecycle management for blobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[IoT]] (1), [[Databases]] (1), [[Microsoft Word|Word]] (1), [[JSON]] (1)
> **Env Vars:** iot (1), rest (1), api (1), cli (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (2), for example (1)
> **File Paths:** blob1.txt (1), blob2.json (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (1), powershell (1)
> **UI Navigation:** scroll down (1), switch to (1)

#### [Manage storage tiers for blobs and files](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=0)** - [Instructor] This is a standard V2 storage account with its default access tier for blobs set to hot.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=7)** So if we go into the container that's been set up for this walkthrough and choose to upload a blob from my laptop.
>
> **[0:16](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=16)** I choose the blob and click upload.
>
> **[0:19](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=19)** If I close the upload blob window, we can see that its access tier has been set to hot and in bracket is the [[Microsoft Word|word]] inferred, which means it inherited this tier from the blob service default that we saw on the overview page.
>
> **[0:35](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=35)** If I upload a second blob from the same folder, but this time go into the advanced upload settings, we can choose the tier that we'd like to upload it at and this will set it specifically for this blob.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=55)** Note there are two lists for hot here.
>
> **[0:57](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=57)** One is inferred, the other is being specifically set for the blob.
>
> **[1:02](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=62)** We'll go into why this is shortly, but for the moment, let's choose cool and scroll down and upload the blob.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=73)** The list now shows that two blobs in this storage account have different access tiers.
>
> **[1:20](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=80)** So why did we have two types of hot access tier available?
>
> **[1:24](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=84)** If we navigate back to the overview page and into the default access tier settings, which is in the configuration pane, and scrolling down, if I change the blob access tier to cool and click save, all applicable blobs that were inferred hot will now be changed to inferred cool.
>
> **[1:47](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=107)** Now note, there is a transaction costs associated with the right operations of moving all of these blobs between tiers and this only happens for the ones that are inferred, therefore blobs that have their tier explicitly set and not affected.
>
> **[2:05](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=125)** So if we go back into the container, blob1.txt which was hot inferred is now cool inferred.
>
> **[2:15](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=135)** And this is why there were two hots on the upload.
>
> **[2:18](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=138)** One was to take hot at the blob level itself specifically, the other was to take the inferred tier from the storage account.
>
> **[2:28](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=148)** We've now decided that blob2.[[JSON]] can be archived and in the portal this is achieved through the ellipses on the blob and then choosing to change the tier.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=159)** If I choose archive, note a warning is shown stating that re-hydration can take several hours.
>
> **[2:47](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=167)** I should also state at this point that the archive tier is not available for zone redundant storage.
>
> **[2:54](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=174)** Clicking save and the new access tier is set.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=178)** This can can of course be achieved through the blob [[Representational State Transfer (REST)|rest]] API, programmatically with the storage client libraries or on the command line with [[Microsoft Azure|Azure]] [[CLI]] and Azure [[Powershell]].
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=189)** To rehydrate the blob, we go back to the same menu and choose an online tier.
>
> **[3:17](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=197)** We can also choose the rehydrate priority, standard taking up to 15 hours and high priority for emergency situations, which is guaranteed to less than an hour for blobs up to 10 gig.
>
> **[3:31](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=211)** I'll leave it as standard and click save and leave the blob to rehydrate.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=217)** If this process was part of an application, a blob re-hydration does create a blob event.
>
> **[3:43](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=223)** This means you could fire an Azure function to alert when the blob was available for read.
>
> **[3:49](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=229)** For file shares, the storage tier is set at the share level.
>
> **[3:55](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=235)** Here we have two shares, one is hot, one is transaction optimized.
>
> **[4:01](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=241)** These tiers were set on creation of the file share by selecting the tier here.
>
> **[4:08](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=248)** But it is also possible to move a share between the storage tiers and we can do this in the portal by entering the file share and choosing change tier.
>
> **[4:22](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=262)** Note, [[Microsoft]] recommend that you start with transaction optimized if you are migrating data from an on-premises file server due to the high number of transactions this produces.
>
> **[4:33](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=273)** You can then switch to hot after migration if required.
>
> **[4:38](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=278)** Choosing hot, I'll now click apply.
>
> **[4:41](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=281)** And this process charges a read transaction at the cost of the old tier and a write transaction at the cost of the new tier.
>
> **[4:49](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=289)** And moving from cool has the added cost of data retrieval.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=294)** Now, this manual method is fine for a couple of blobs like I've been doing, but if you're managing tens or hundreds of thousands, you'll want to look for a method of automating this process.
>
> **[5:05](https://www.linkedin.com/learning/manage-storage-in-azure/manage-storage-tiers-for-blobs-and-files?u=76281980&t=305)** So join me in the next video when we'll look at how to combat this issue with lifecycle management for blobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft Word|Word]] (1), [[JSON]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[CLI]] (1)
> **File Paths:** blob1.txt (1), blob2.json (1)
> **Env Vars:** api (1), cli (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (1), powershell (1)
> **UI Navigation:** scroll down (1), switch to (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (1)

#### [Lifecycle management policies and rules](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=0)** - [Instructor] When you're managing massive numbers of blobs, transitioning them manually into more cost-effective tiers just isn't practical.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=7)** It is much more efficient to employ an automated method to transition the data for you.
>
> **[0:14](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=14)** When thinking about the lifecycle of the data you are managing and matching this lifecycle to the graphic from the previous video, it is likely that the age of a blob or versions of a blob will correlate to the access frequency of the blob.
>
> **[0:29](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=29)** The older the blob, the less likely it is to be accessed, and the blob is also likely to age out until the point when the blob or blob version's lifecycle has expired and the blob is deleted.
>
> **[0:41](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=41)** Lifecycle management policies for block blobs and append blobs use the age of the blob and its frequency of access to determine an action on a blob such as transitioning the blob or the blob version to a cooler tier and deleting a blob or blob version.
>
> **[0:58](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=58)** These are the actions of a lifecycle management policy, and filters can be employed based on the blob prefix or blob tags to determine which blobs are affected by the action.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=70)** Note here that append blobs can only be deleted.
>
> **[1:13](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=73)** Setting an access tier is not possible on an append blob.
>
> **[1:17](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=77)** The age and frequency of access component of a lifecycle management policy is the run condition, which can take into account the number of days after modification, creation, last access, and tier change of a blob where the last access time must be specifically enabled, or for a blob version, the days after version creation time.
>
> **[1:41](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=101)** I've switched into the [[Microsoft Azure|Azure]] portal to walk through how to set up a lifecycle management policy.
>
> **[1:46](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=106)** This is a standard general-purpose v2 storage account and has two containers.
>
> **[1:52](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=112)** These are logs and media, both of which contain four blobs created nearly a day ago.
>
> **[2:00](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=120)** We're going to set up a lifecycle management policy to place the logs into cool storage a day after created, and then into archive storage.
>
> **[2:10](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=130)** But I'm going to leave the media blobs at the hot access tier as they are to be accessed frequently.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=137)** In the portal to create a lifecycle management policy, we need to scroll down and click Lifecycle management in the storage account menu.
>
> **[2:27](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=147)** If you recall from the slide before this walkthrough, we need to enable access tracking if we want to use it as a run condition.
>
> **[2:36](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=156)** For this walkthrough, we are just interested in creation date, but I could check this box to enable access tracking if required.
>
> **[2:44](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=164)** We'll choose to Add a rule to our policy, and each rule requires a unique name.
>
> **[2:50](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=170)** (keyboard clacks) And for the walkthrough on this use case, we want to filter to just transition the blobs in the logs container.
>
> **[2:58](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=178)** So we will choose the rule with the scope of limit blobs with filters.
>
> **[3:04](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=184)** When this is selected, a further step for setting the filter is added at the top of the page.
>
> **[3:10](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=190)** We now need to choose which blobs to run this rule against.
>
> **[3:14](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=194)** We have the choice of block blobs which can be transitioned through tiers or deleted, and append blobs, which can only be deleted.
>
> **[3:23](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=203)** Our logs are block blobs, so we'll leave this at just block blobs.
>
> **[3:27](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=207)** For blob subtypes, a base blob is the current version, snapshots are for blob snapshots, and versions for previous versions of a blob.
>
> **[3:37](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=217)** Each of these can be moved through different access tiers by lifecycle management and also deleted.
>
> **[3:44](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=224)** Versioning is enabled for blobs in this storage account, but we don't require it for our logs, so we'll leave the selection at base blobs.
>
> **[3:52](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=232)** Clicking Next, we can set up the rules for the base blobs.
>
> **[3:56](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=236)** If we had selected versions of snapshots on the previous tab, then an extra tab for rules would've been added for each.
>
> **[4:04](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=244)** We have the option to set the run condition on the last modified or created time.
>
> **[4:10](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=250)** We want to transition blobs if they were created more than a day ago to cool, so we choose Created, and place one into the More than days ago field.
>
> **[4:21](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=261)** The action we would like to take is to move to cool storage.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=265)** Then the other condition we need to add, scrolling down a bit further, is to transition to archive storage, which we would like to do after 30 days.
>
> **[4:38](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=278)** Choosing archive storage, note the warning that if the blobs need to be accessible, then this is not recommended.
>
> **[4:46](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=286)** Clicking Next, we can add the filter.
>
> **[4:49](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=289)** All filters for a blob prefix must start with a container name.
>
> **[4:53](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=293)** Ours is logs.
>
> **[4:54](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=294)** (keyboard clacks) And if we had a specific virtual directory, we could tag it onto the path here too.
>
> **[5:02](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=302)** We could also add filters for index matches for blob tags here.
>
> **[5:07](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=307)** We just want all blobs in the specified container, so we'll leave this blank and click Add.
>
> **[5:13](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=313)** The lifecycle management policy has been added and is listed.
>
> **[5:18](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=318)** If we click through to the Code View, we can see how the lifecycle management policy is defined in [[JSON]].
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=325)** Each has a type of lifecycle and is followed by a definition block, which will contain actions for every blob type chosen.
>
> **[5:35](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=335)** We only chose base blobs and to transition these base blobs to cool, and then the archive tiers.
>
> **[5:42](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=342)** Finally, there is the filter block.
>
> **[5:45](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=345)** This shows we would like to apply the rules to the blobs in the logs container only.
>
> **[5:50](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=350)** Now going back to the Containers and into logs.
>
> **[5:55](https://www.linkedin.com/learning/manage-storage-in-azure/lifecycle-management-policies-and-rules?u=76281980&t=355)** Lifecycle management policies run once every 24 hours, so we'll break for a while and come back to this shortly because the run condition could fire anytime in the next 24 hours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[JSON]] (1)
> **Prerequisites:** set up (3)
> **Cross-References:** previous video (1), in the next (1)
> **Env Vars:** json (1)
> **Tools:** azure portal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Monitoring Azure Storage](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=0)** - [Presenter] When you are looking after data, you need to have mechanisms to monitor how the data is being used, whether the data is always available, and if access to the data is performing as it should.
>
> **[0:12](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=12)** Here's the resource group with the resources for this walkthrough on monitoring [[Microsoft Azure|Azure]] Storage.
>
> **[0:17](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=17)** Now, so that we can have a look at these monitoring options, I've created a function app, which contains two functions.
>
> **[0:27](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=27)** The first writes blobs to a storage account every two minutes, and to two different containers.
>
> **[0:33](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=33)** The second lists blobs in one of those containers and downloads the first 10 blobs listed.
>
> **[0:40](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=40)** So these functions are simulating the types of operations on a storage account that can be monitored.
>
> **[0:46](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=46)** In Azure, the Azure monitor collects data from resources into a common data platform with activity logs and metrics being collected by default.
>
> **[0:59](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=59)** Activity logs track operations for the resource which are at the control plane, such as creating, modifying, or deleting a resource.
>
> **[1:11](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=71)** If I increase the time span on this view and click apply, we can view the control plane activities that occurred when this storage account was set up.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=83)** And here's the create activity.
>
> **[1:27](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=87)** Going back to the storage account overview and then into the monitoring tab and scrolling down, we can see some examples of the types of numerical values that are collected at regular intervals and stored in Azure Monitor metrics, which is a time series database.
>
> **[1:45](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=105)** We have total ingress and total egress which is increasing over the last few days as the blobs are written and read.
>
> **[1:54](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=114)** Scrolling down a little further, we can see there have been some fluctuations in average end-to-end latency.
>
> **[2:01](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=121)** And this chart shows a breakdown of request to the storage account.
>
> **[2:06](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=126)** Drilling into this chart, it takes us into the metrics explorer for the storage account.
>
> **[2:12](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=132)** Here we can design our own charts, changing the name spaces from the account level, for example, to the blob choosing our metrics.
>
> **[2:22](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=142)** I'm going to choose transactions and a summation, and also, we can apply splitting.
>
> **[2:27](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=147)** I'd like to see this by API.
>
> **[2:30](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=150)** Now this chart is showing that requests that are hitting the APIs at the blob endpoint, and we can see it confirms the activity of our Azure function with put blobs, list blobs, and get blobs.
>
> **[2:44](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=164)** These charts can be saved to the Azure portal or to a Grafana workspace as part of a single overview of a system's health.
>
> **[2:53](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=173)** Returning to the storage account and down through the menu to diagnostic settings.
>
> **[2:59](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=179)** This is where it is also possible to recapture resource logs for a storage account.
>
> **[3:05](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=185)** Resource logs log what happened within a resource at the data plane.
>
> **[3:09](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=189)** So in the case of our walkthrough, it's logging the requests that are hitting the blob endpoint from the Azure function.
>
> **[3:17](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=197)** Resource logs are not collected by default in Azure.
>
> **[3:21](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=201)** They must be enabled through diagnostic settings.
>
> **[3:26](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=206)** Here, the diagnostic settings were enabled when the storage account was created by deploying the Bicep files.
>
> **[3:32](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=212)** But these settings can also be applied automatically using Azure policy to enable log and metrics collection at scale.
>
> **[3:41](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=221)** At the blob service, editing the diagnostic setting, we can see that read, write, and delete resource logs are being collected along with transaction metrics which were emitted on every request to the storage account.
>
> **[3:56](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=236)** A diagnostic setting must also have a destination to send the logs or metrics to.
>
> **[4:02](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=242)** Metrics are stored for 93 days which is three months by default.
>
> **[4:06](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=246)** If you need to archive your metrics or transactions against the blobs for longer, then you can archive them to a storage account.
>
> **[4:15](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=255)** We can also choose to stream diagnostic settings to an event hub where other systems or third party tools can be configured to subscribe to specific events.
>
> **[4:25](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=265)** This functionality is particularly useful for activity logs, so we'll go back and have a look at this now.
>
> **[4:32](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=272)** And activity logs can also be sent to event hubs by enabling diagnostic settings for the activity log which is here in export activity logs.
>
> **[4:43](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=283)** If I click add diagnostic setting, we can see that event at a control plane level can be sent to security information and event management systems or SIEM Systems for short.
>
> **[4:55](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=295)** And this would be for further analysis.
>
> **[4:59](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=299)** Activity log diagnostic settings also include service health, so that health events can be tracked.
>
> **[5:08](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=308)** Returning back to the diagnostic settings for the storage account, back into our blob service settings, we can see that some third party tools can be integrated natively with Azure to stream metrics and logs directly without the use in an event hub.
>
> **[5:25](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=325)** And this is selected by choosing center partner solution.
>
> **[5:29](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=329)** Lastly, at the top, we have the option that was already set up on this storage account to send to a log analytics workspace.
>
> **[5:38](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=338)** If I search for log analytics at the top of the portal and choose log analytics workspaces.
>
> **[5:49](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=349)** This is the log analytics workspace.
>
> **[5:51](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=351)** The storage account had been set up to write to.
>
> **[5:55](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=355)** A log analytics enables the collection of analytical data from multiple resources into a single workspace.
>
> **[6:02](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=362)** The data is stored in multiple tables, and if we right click on storage blob logs and choose edit schema, we can see that the table has columns for data specific to the resource being recorded from.
>
> **[6:18](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=378)** For example, a blob service log has account name.
>
> **[6:23](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=383)** And scrolling down, we can also see requested details, such as an app ID from an app registration or a user principal name.
>
> **[6:34](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=394)** A log analytics workspace enables querying using the KQL language against the data.
>
> **[6:40](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=400)** And this is done through the logs menu.
>
> **[6:43](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=403)** I'll just close down the examples page and clear the query plane.
>
> **[6:49](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=409)** For example, I have a query in my notes if I paste this in.
>
> **[6:58](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=418)** Metrics being logged by a storage account.
>
> **[7:00](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=420)** I logged into the Azure Metrics Table, and they have a resource provider of [[Microsoft]] storage.
>
> **[7:07](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=427)** So by using this query and hitting run, I can see the metrics logged in the last 24 hours because this has been set as the time range.
>
> **[7:18](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=438)** If I just close this menu and scroll to the right, we can see the metric name.
>
> **[7:25](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=445)** And these are the metrics which were seen in the overview charts we looked at for the storage account.
>
> **[7:31](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=451)** Now, KQL queries are a powerful troubleshooting tool.
>
> **[7:36](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=456)** For example, if I take the second query from my notes and paste it into the query pane and choose to run the query.
>
> **[7:48](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=468)** This query is showing the top 10 errors in the last three days which is container not found.
>
> **[7:57](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=477)** I've got a third query which I'll paste in, again, at the storage blob blogs table.
>
> **[8:07](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=487)** And this query would enable us to investigate the operations with the biggest latency.
>
> **[8:13](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=493)** I can even choose to draw charts off of these queries and configure the charts.
>
> **[8:22](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=502)** So I'll choose a line chart, so you can see how powerful this tool is.
>
> **[8:30](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=510)** And if we look towards the top of the page, I can choose to create a new alert rule.
>
> **[8:36](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=516)** And this could be against any of the KQL queries.
>
> **[8:39](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage?u=76281980&t=519)** And these can be used to send alerts to support teams or to trigger automated remediation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Microsoft]] (1)
> **Analogies:** for example (4), such as (2)
> **Env Vars:** kql (3), api (1), siem (1)
> **Prerequisites:** set up (3), you need to have (1), configure (1)
> **Cross-References:** in the last (2)
> **Tools:** azure portal (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Monitoring Azure Storage with storage insights and workbooks](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=0)** - [Instructor] Returning to the storage account, there are a couple of other menu items that I would like to have a look at, and scrolling down and into Monitoring, the first is Insights.
>
> **[0:11](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=11)** Insights are created by the maintainers of [[Microsoft Azure|Azure]] Resources.
>
> **[0:15](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=15)** The maintainers build in their expertise on the type of resource, which in this case, is Azure Storage.
>
> **[0:22](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=22)** They'll use this to generate a view of its overall health.
>
> **[0:26](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=26)** Scrolling back up, I can choose to show performance of the storage account, the capacity which is gradually reducing, as every two minutes we are writing blobs to it, and the availability of each of the APIs.
>
> **[0:45](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=45)** This will enable you to start troubleshooting any issues that your service may be experiencing.
>
> **[0:51](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=51)** If I switch into Azure Monitor, it has a storage account insights view and here, we have access to the transactions and minimizing this menu to errors and to capacity.
>
> **[1:10](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=70)** But this time, the view is for multiple storage accounts from the selected subscription.
>
> **[1:16](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=76)** So this is enabling observation at scale.
>
> **[1:19](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=79)** The insights are built up from a series of workbooks.
>
> **[1:23](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=83)** Each of these workbooks corresponds to a tab on our storage accounts Insights page.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=89)** A workbook uses multiple data sources from Azure to create rich visual reports for analysis such as storage insights.
>
> **[1:37](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=97)** So this is the storage account overview workbook.
>
> **[1:40](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=100)** And if we click Edit, we could edit the menu options, the tabs, or scrolling down even further, we can choose to edit the actual graphs themselves.
>
> **[1:56](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=116)** We could choose to change the split, the time range and then if you're happy with your changes, you could also choose to save the workbook for later use.
>
> **[2:12](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=132)** We've come to the end of our walkthrough on logging and monitoring options for Azure Storage.
>
> **[2:17](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=137)** Monitoring in Azure is a huge topic so to learn more about monitoring, follow this link to the Azure Monitor documentation.
>
> **[2:26](https://www.linkedin.com/learning/manage-storage-in-azure/monitoring-azure-storage-with-storage-insights-and-workbooks?u=76281980&t=146)** If I scroll down, this is where this excellent graphic comes from on how logs and metrics from Azure Resources can bring insights into your resources, helping you visualize and analyze issues and respond accordingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about Azure management](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=0)** - [Instructor] Congratulations, you've reached the end of this course on managing [[Microsoft Azure|Azure]] Storage.
>
> **[0:05](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=5)** We've covered a lot of ground in this course.
>
> **[0:07](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=7)** If you want to know more, where should you go and what should you do?
>
> **[0:11](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=11)** For me, the key to really understanding any resource in Azure is to practice with hands-on environments, which is why the [[GitHub]] repository for this course has Bicep files for creating resources and environments, which enable you to follow along with the walkthroughs in this course and then to explore further.
>
> **[0:32](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=32)** Whilst exploring, you can cross-reference with the readme in the further-reading folder of the repository.
>
> **[0:38](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=38)** and this has links to [[Microsoft]] documentation that was referenced in the making of this course.
>
> **[0:44](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=44)** It also has links to the community Q&A and Azure Storage Technical blog, which often has releases on deep dives into Azure Storage features.
>
> **[0:55](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=55)** Sticking with Azure documentation, the Storage Documentation Hub is split by the storage solution your use case requires.
>
> **[1:03](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=63)** For example, blobs for application storage or data lake for enterprise analytics, or cloud-hosted file shares.
>
> **[1:12](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=72)** And if you want to explore even deeper within the documentation, the Azure Architecture Center for Storage Design has guides for planning a storage deployment and architectures and solution ideas for specific use cases and scenarios.
>
> **[1:29](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=89)** Each of these scenarios has been written by Microsoft Solution Architects using knowledge gain designing solutions for customers.
>
> **[1:38](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=98)** [[LinkedIn]] Learning is of course, an excellent starting point for diving deeper.
>
> **[1:42](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=102)** For example, I'd like to look at Azure Data Lake, so I search for it within the LinkedIn Learning portal.
>
> **[1:49](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=109)** Now, Azure Data Lake is only briefly discussed in this course, and the top result here is a full course on [[Azure Data Lake for Developers]].
>
> **[1:57](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=117)** You may also want to dive deeper into the power of creating repeatable storage configurations using Azure Bicep, which we covered during the infrastructure's code version of this course.
>
> **[2:11](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=131)** And if you're thinking about applying the knowledge gained in this course to gaining a certification, perhaps check out my Azure Solutions Architect AZ-305 Prep Course on designing [[Data Storage]] solutions.
>
> **[2:24](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=144)** Microsoft Learn has an excellent collection of learning paths and modules for Azure Storage.
>
> **[2:29](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=149)** And if you've not used Microsoft Learn before, you can often get hands on in the Azure portal using their lab simulations or Sandpit credits.
>
> **[2:39](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=159)** And this is really useful if you are unable to get credits, or perhaps you may have run out of free credits for Azure, which you can get for 12 months.
>
> **[2:49](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=169)** Azure has a vibrant community full of people who want to help.
>
> **[2:53](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=173)** Reach out through social media, [[Slack]] channels, or on LinkedIn, or perhaps find your local user group.
>
> **[3:01](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=181)** I have a lot of choice here in the UK.
>
> **[3:05](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=185)** Please feel free to reach out to me on social media.
>
> **[3:08](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=188)** I'm active on LinkedIn and across these platforms.
>
> **[3:12](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=192)** It's been a pleasure having you on board for this course.
>
> **[3:15](https://www.linkedin.com/learning/manage-storage-in-azure/learning-more-about-azure-management?u=76281980&t=195)** If you have any questions, please drop them in the course Q&A and good luck with your learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Microsoft]] (4), [[LinkedIn]] (4), [[GitHub]] (1), [[Data Storage]] (1)
> **Tools:** github (1), azure portal (1), slack (1)
> **CLI Commands:** az (1), find (1)
> **Documentation:** the readme (1), the documentation (1)
> **Analogies:** for example (2)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Nicole Stevens]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/manage-storage-in-azure-4413556)

## Skills Covered

- Microsoft Azure
- Cloud Storage

## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Microsoft Azure- Networking Concepts]] | **7 of 8** | [[Controlling Cost with Azure Management and Billing]] →

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Google Cloud Data and Storage Foundations]] — Cloud Storage
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure

---

[↑ Back to top](#)