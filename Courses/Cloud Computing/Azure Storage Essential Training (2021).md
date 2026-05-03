---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-storage-essential-training-2021
url: "https://www.linkedin.com/learning/azure-storage-essential-training-2021"
duration_minutes: 137
duration: 2h 17m
level: Intermediate
updated: 6/21/2021
learners: 47381
skills:
  - Microsoft Azure
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGLwz6rO3cApg/learning-public-crop_675_1200/B4EZikezwuHEAo-/0/1755106197431?e=2147483647&amp;v=beta&amp;t=1B4si2mZaP1fJkeHXku2jxHW_bNbHfwiAG57BO4kvSQ"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an Azure Developer]]'
prev_courses:
  - '[[Building a Web Application on Microsoft Azure]]'
next_courses:
  - '[[Azure DevOps for Beginners]]'
path_nav: '[{"path":"Getting Started as an Azure Developer","position":5,"total":7,"prev":"Building a Web Application on Microsoft Azure","next":"Azure DevOps for Beginners"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Storage%20Essential%20Training%20(2021).md)

![Azure Storage Essential Training (2021)](https://media.licdn.com/dms/image/v2/D4E0DAQGLwz6rO3cApg/learning-public-crop_675_1200/B4EZikezwuHEAo-/0/1755106197431?e=2147483647&amp;v=beta&amp;t=1B4si2mZaP1fJkeHXku2jxHW_bNbHfwiAG57BO4kvSQ)

# Azure Storage Essential Training (2021)

> Azure Storage is a Microsoft cloud storage solution for modern data storage scenarios. Azure Storage offers a massively scalable object store for data objects, a file system service for the cloud, a messaging store for reliable messaging, and a NoSQL store. This course gives a broad level of knowledge on the overall landscape of Azure Storage, as well as an introduction to all the concepts. Instru

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-storage-essential-training-2021) | 2h 17m | Intermediate | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to Azure Storage](#introduction-to-azure-storage)
  - [Azure Storage services](#azure-storage-services)
- [**1. Develop Solutions for Azure Blob Storage**](#1-develop-solutions-for-azure-blob-storage) (6 videos)
  - [Azure Storage accounts and replication](#azure-storage-accounts-and-replication)
  - [Binary large object storage (Blob)](#binary-large-object-storage-blob)
  - [Blob containers](#blob-containers)
  - [Blob access tiers](#blob-access-tiers)
  - [Blob lifecycle management](#blob-lifecycle-management)
  - [Managing blobs](#managing-blobs)
- [**2. Develop Solutions for Azure Files**](#2-develop-solutions-for-azure-files) (7 videos)
  - [Azure Files](#azure-files)
  - [Azure Files vs. Azure Blobs](#azure-files-vs-azure-blobs)
  - [Managing file shares](#managing-file-shares)
  - [File share snapshots](#file-share-snapshots)
  - [Replacing on-premises server with Azure Files](#replacing-on-premises-server-with-azure-files)
  - [Azure File Sync](#azure-file-sync)
  - [Implementing Azure File Sync](#implementing-azure-file-sync)
- [**3. Develop Solutions for Azure Queues**](#3-develop-solutions-for-azure-queues) (3 videos)
  - [Azure Storage queues](#azure-storage-queues)
  - [Managing queues](#managing-queues)
  - [Developing with queues](#developing-with-queues)
- [**4. Secure Azure Storage**](#4-secure-azure-storage) (6 videos)
  - [Securing storage data](#securing-storage-data)
  - [Storage security and authorization](#storage-security-and-authorization)
  - [Shared access signatures](#shared-access-signatures)
  - [Storage Service Encryption](#storage-service-encryption)
  - [Blob storage access policies](#blob-storage-access-policies)
  - [Storage security best practices](#storage-security-best-practices)
- [**5. Manage Azure Storage**](#5-manage-azure-storage) (4 videos)
  - [Azure Storage Explorer](#azure-storage-explorer)
  - [Import/Export service](#importexport-service)
  - [AzCopy](#azcopy)
  - [Using Azure storage SDK](#using-azure-storage-sdk)
- [**6. Backup Azure Storage**](#6-backup-azure-storage) (4 videos)
  - [Protecting Azure file shares](#protecting-azure-file-shares)
  - [Backing up Azure file shares](#backing-up-azure-file-shares)
  - [Protecting Azure Blob storage](#protecting-azure-blob-storage)
  - [Backing up and replication for Azure Blob storage](#backing-up-and-replication-for-azure-blob-storage)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning never stops](#learning-never-stops)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Azure Storage](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=0)** - [Charbel] [[Microsoft Azure|Azure]] Storage is [[Microsoft]] [[Cloud Storage]] solution for more than [[Data Storage]].
>
> **[0:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=4)** Azure Storage offers a massively scalable object store for data objects, file systems service for the cloud in messaging store for relevant messaging and in [[SQL]] store.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=15)** In this course, you will learn how to leverage the Azure Storage service to store files, cue messages and the blowups to offload the heavy lifting of [[Storage Management]] in your data center.
>
> **[0:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=25)** These stores can be shared securely and used by websites, mobile apps, desktop applications, on premises users and a branch offices from anywhere in the world.
>
> **[0:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=36)** Hi, I am Charbel Nemnon.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=38)** I've been working with Microsoft technologies for almost 20 years.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=41)** I am also a Microsoft MVP, Microsoft Certified Trainer MCT and Certified [[Cloud Security]] Professional CCSP.
>
> **[0:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/introduction-to-azure-storage?u=76281980&t=49)** If you are ready to take your Azure Storage skills to the next level, then come join me in my [[LinkedIn]] learning course on Azure Storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (4), [[Cloud Storage]] (1), [[Data Storage]] (1), [[SQL]] (1)
> **Env Vars:** sql (1), mvp (1), mct (1), ccsp (1)
> **Speakers:** - [charbel] (1)

#### [Azure Storage services](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage is a service that you can use to store files, messages, tables, and other types of data.
>
> **[0:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=6)** It's a scalable, secure, easy to manage and can be accessed from anywhere.
>
> **[0:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=11)** Azure Storage is also used by [[IaaS]] [[Virtual Machines]] and [[PaaS]] [[Cloud Services]], and offers two years a standard HDD and a premium tier based on SSD.
>
> **[0:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=22)** Azure Storage includes four data services.
>
> **[0:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=24)** Each of which is accessing through a storage account.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=27)** Azure Containers, a massively scalable object store for text and binary data.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=32)** Azure Files and managed file shares for cloud or on premises deployments Azure Queues and messaging store for reliable messaging between application components, and Azure Tables, ideal for storing structured non-relational data.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=46)** Azure Table storage is now part of Azure Cosmos DB and is out of the scope for this course.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=53)** Azure Blob storage is [[Microsoft]] object storage solution for the cloud.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=56)** Blob storage is optimized for storing massive amounts of [[Unstructured Data]] such as stacks or binary data.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=63)** Blob storage is ideal for serving images or documents directly to a browser.
>
> **[1:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=67)** Sorting files for easy access.
>
> **[1:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=70)** Streaming video and audio.
>
> **[1:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=72)** Storing data for backup, disaster recovery, and archiving.
>
> **[1:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=75)** Sorting data for analysis by your own premises or Azure storage service.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=80)** Objects and Blob storage can be accessed from anywhere in the world via HTTP or HTTPS.
>
> **[1:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=86)** Users or clients application can access Blobs via URLs, the Azure storage risk, API, Azure [[Powershell]], Azure [[CLI]], or with the Azure Storage client library.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=97)** The Storage client libraries are available for multiple languages, including .NET, [[Java]], [[Node.js]], for multiple languages, including .NET, Java, Node.js, [[Python (Programming Language)|Python]], [[PHP]], and Ruby.
>
> **[1:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=106)** Azure Files enables you to setup, highly available network file share that can be accessed by using the standard Server Message Block, SMB and NFS protocols.
>
> **[1:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=116)** File shares can be used for many common scenarios.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=119)** Many on-premises applications use file shares.
>
> **[2:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=122)** This feature makes it easier to migrate books' application that share data to Azure.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=126)** If you mount the file share to the same drive that the on-premises application users, the part of your application that access the file share should work with minimal, if any changes.
>
> **[2:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=137)** Configuration files can be stored on a file share and access from multiple virtual machines, tools, and utilities used by multiple developer in a group can be stored on a file share.
>
> **[2:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=147)** Ensuring that everybody can find them and that they use the same version.
>
> **[2:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=152)** Diagnostic logs, metrics, and crash dumps are just three example of data that can be written to a file share and processed or analyzed data.
>
> **[2:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=162)** The Azure Queue service is used to store multiple messages.
>
> **[2:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=166)** Queue messages can be up to 64 KB in size and the Queue can contain millions of messages.
>
> **[2:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=171)** Queues are generally used to store lists of messages to be processed asynchronously.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-services?u=76281980&t=176)** Now, you know the various type of Azure Storage Services and how they are commonly used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), [[Virtual Machines]] (2), [[Java]] (2), [[Node.js]] (2), [[IaaS]] (1)
> **Env Vars:** net (2), hdd (1), ssd (1), http (1), https (1)
> **CLI Commands:** node (2), python (1), php (1), ruby (1), find (1)
> **File Paths:** node.js (2)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)


### 1. Develop Solutions for Azure Blob Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Storage accounts and replication](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] storage accounts, replication strategies and access.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=5)** Azure storage offers several types of storage accounts.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=9)** Each type support different features, and has a unique URL address to access.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=14)** The data and your Azure storage account is always replicated to ensure durability and high availability.
>
> **[0:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=21)** We have five types of storage accounts.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=23)** Block blob storage accounts, this is blob only storage account with premium performance characteristics.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=30)** Recommended for scenarios was high transaction rates using smaller objects or requiring consistently low storage latency.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=38)** General-purpose v1 accounts, this is legacy account type for blobs, files, queues and tables [[Microsoft]] recommends using general-purpose v2 instead one possible.
>
> **[0:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=50)** General-purpose v2, this is basic storage account type for blobs, files, queues and table.
>
> **[0:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=58)** Recommended for most scenarios using Azure storage.
>
> **[1:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=62)** File storage accounts.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=64)** Files only storage account was premium performance characteristics recommended for enterprise or high-performance scale applications.
>
> **[1:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=72)** The last type is blob storage accounts, this is blob only storage accounts.
>
> **[1:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=76)** However, use a general-purpose v2 account instead one possible.
>
> **[1:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=81)** Azure storage uses replication copies of your data so that it's protected from planned and unplanned events ranging from transients [[Hardware]] feeder to network or power outages and even massive natural disasters.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=95)** You can choose to duplicate your data within the same data center across zonal data centers within the same region, or even across regions.
>
> **[1:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=103)** Replication ensure that your storage account meets the service-level agreement SLA for storage, even in the face of failures.
>
> **[1:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=111)** Let's look at the different application options that you can use in more detail.
>
> **[1:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=116)** Locally redundant storage.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=118)** LRS, the lost cost replication option and offer the least durability compared to other options.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=125)** If data center level disaster, for example, fire or flooding occurs or replicas may be lost or unrecoverable.
>
> **[2:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=133)** The second replication option is zone-redundant storage.
>
> **[2:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=137)** ZRS synchronously replicates your data across three storage cluster in a single region.
>
> **[2:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=143)** Each storage cluster is physically separated from the others and resides in its own availability zone.
>
> **[2:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=149)** Each availability zone and the ZRS cluster within it, is autonomous with separate utilities and networking capabilities.
>
> **[2:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=156)** Storing your data in a ZRS account ensure that you will be able to access and manage your data If it's own becomes unavailable.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=164)** ZRS provides excellent performance and extremely low latency.
>
> **[2:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=169)** We have geo-redundant storage, GRS GRS replicates your data to a secondary region, hundreds of miles away from the primary location of the source data.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=179)** GRS cost more than LRS.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=181)** But GRS provides a higher level of durability for your data even if there is a regional outage.
>
> **[3:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=187)** GRS is designed to provide at least 16 lines durability.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=192)** If your storage account has a GRS enabled then your data is durable even in the case of a complete regional outage or a disaster in which the primary region is not recoverable.
>
> **[3:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=203)** If you opt for GRS then you have two related options to choose from.
>
> **[3:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=208)** GRS replicates your data to another data center in a secondary region.
>
> **[3:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=213)** But that data is available to be read only, if Microsoft initiates a fade over from the primary to the secondary region.
>
> **[3:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=221)** Read access geo-redundant storage is based on GRS.
>
> **[3:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=224)** Read access GRS replicates your data to another data center in a secondary region and provides you with the option to read from the secondary region.
>
> **[3:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=233)** With read access, GRS you can read from the secondary regardless of whether Microsoft initiates a failover from the primary to the secondary.
>
> **[4:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=242)** The final replication is geo-zone-redundant storage.
>
> **[4:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=247)** GZRS combined the high availability of zone redundant storage with protection from regional outages as provided by geo-redundant storage.
>
> **[4:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=256)** Data in the geo-zone-redundant storage account is replicated across three availability zones and the primary region and replicated to a second geographic region for protection from regional disasters.
>
> **[4:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=268)** Each Azure region is paired with another region within the same geography.
>
> **[4:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=272)** Together making regional pair.
>
> **[4:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=275)** You can optionally enable read access to data in the secondary region with read access geo-zone- redundant storage.
>
> **[4:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=282)** If your applications need to be able to read data in the event of a disaster in the primary region.
>
> **[4:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=289)** Microsoft recommends using geo-zone-redundant storage for application requiring consistency, durability, high availability, excellent performance and resilience for disaster recovery.
>
> **[5:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=301)** For the additional security of read access to the secondary region in event of a regional disaster, you can enable read access geo-zone-redundant storage for your storage account.
>
> **[5:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=311)** Every service has a unique URL address based on the account name and storage type.
>
> **[5:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-accounts-and-replication?u=76281980&t=316)** Container, queue, and files Azure storage accounts redundancy and replication give you safe and powerful ways to store your essential data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Microsoft]] (4), [[Hardware]] (1)
> **Env Vars:** grs (11), zrs (4), url (2), lrs (2), sla (1)
> **Best Practices:** recommended (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Binary large object storage (Blob)](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Blob Storage is a service that stores [[Unstructured Data]] in the cloud, as objects Blobs.
>
> **[0:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=6)** Blob storage can store any type of texts or binary data such as document, media file, or application distorter.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=14)** Blob storage is also referred to as object storage.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=18)** The common uses of Blob Storage include serving images or documents directly to a browser.
>
> **[0:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=24)** You can store files for distributed access such as installation.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=28)** Streaming video and audio files.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=30)** Storing data for backup, restore, archiving and disaster recovery.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=35)** Storing data for analysis by a known premises or Azure Hosted Service.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=41)** Blob storage offers three types of resources the storage account, containers in the storage account, and Blobs in the container.
>
> **[0:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=49)** The diagram on the slide shows the relationship between the storage account, container, and the Blob.
>
> **[0:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=55)** You can think of it as a hurricane, as route which is account name Sally, the folder which is the container.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/binary-large-object-storage-blob?u=76281980&t=61)** In this example, I have two containers named pictures and movies and the Blob as an object, I have here two images and one movie Within the storage account, you can group as many Blobs as needed in a container and that's the common use of Blob storage and resource types for Azure storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Unstructured Data]] (1)
> **Analogies:** such as (2), think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Blob containers](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=0)** - A blob container provides a grouping for a set of blobs.
>
> **[0:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=4)** All blobs must be in a container.
>
> **[0:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=6)** A storage account can contain an unlimited number of containers, and the container can store an unlimited number of blobs.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=15)** Let's start by creating a blob container in the [[Microsoft Azure|Azure]] portal.
>
> **[0:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=19)** This then requires that you already have a storage account.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=23)** In the Azure portal, navigate to your storage account and then click on Containers.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=28)** Select Add Container and enter a name.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=32)** For example, [[LinkedIn]]-container01.
>
> **[0:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=39)** The name may only contain lowercase letters, numbers, and hyphens, and must begin with a letter or a number.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=46)** The name must also be between three and 63 characters long.
>
> **[0:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=51)** Then specify whether data in the container may be accessed publicly.
>
> **[0:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=54)** By default, container data is private to the account owner.
>
> **[0:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=59)** Use Private to ensure there is no anonymous access to the container and blobs.
>
> **[1:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=65)** Use Blob to allow anonymous public read access for blobs only.
>
> **[1:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=70)** Use Container to allow anonymous public to read and list access to the entire container, including the blobs.
>
> **[1:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=78)** And last, select Create to create the container.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=83)** As you can see, LinkedIn-container01 gets created.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=87)** Let's create now a second blob container with Azure [[Powershell]].
>
> **[1:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=92)** We can create a blob container with PowerShell using the new AzStorageContainer command.
>
> **[1:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=98)** You can also use the Cloud Shell where all the modules are constantly being updated by [[Microsoft]].
>
> **[1:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=103)** Here, I define the characteristic of the environment and the resource properties that I need.
>
> **[1:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=108)** For example, the resource group name, the storage account name, and I will get my storage key and store it in a value called storageKey.
>
> **[1:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=117)** I will get my storage context using the new AzStorageContext, and I will define my container name as LinkedIn-container02.
>
> **[2:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=128)** And to create a container with Azure PowerShell, I will type the New-AzStorageContainer cmdlet followed by the name, context, and the permission set to off to create a private container.
>
> **[2:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=141)** Switch back to the Azure portal and hit Refresh.
>
> **[2:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=146)** As you can see, the second container, LinkedIn-containers02, gets created.
>
> **[2:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-containers?u=76281980&t=153)** That's all the basics you need to know about blob containers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[LinkedIn]] (4), [[Powershell]] (3), [[Microsoft]] (1)
> **Tools:** azure portal (3), powershell (3)
> **UI Navigation:** navigate to (1), click on (1)
> **Analogies:** for example (2)
> **Code Identifiers:** storagekey (1)
> **Speakers:** - a (1)

#### [Blob access tiers](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=0)** - [Tutor] [[Microsoft Azure|Azure]] storage provides different options for accessing blob database on usage patterns.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=7)** Take a look at how each access tier in the Azure storage is optimized for a particular pattern of data usage.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=14)** By selecting the correct access tier for your needs, you can store your blob data in the most cost effective manner.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=23)** The hot tier is optimized for frequent access of objects in the storage account.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=28)** Accessing data in the hot tier is most cost effective while storage costs are somewhat higher.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=34)** New storage accounts are created in the hot tier by default.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=38)** The cool tier is optimized for storing large amount of data that is infrequently with the access and stored for at least 30 days.
>
> **[0:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=48)** Storing data in the cool tier is more cost effective but accessing that data may be somewhat more expensive than accessing data in the hot tier.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=56)** The archive tier on the other hand is optimized for data that can tolerate several hours of retrieval latency and will remain in the archive tier for at least 180 days.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=69)** The archive tier is the most cost effective option for storing data.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=73)** But accessing that data is more expensive than accessing data in hot or cool tiers.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=79)** If there is a change in the usage pattern of your data you can switch between the three tiers at any time.
>
> **[1:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=86)** Let us switch to a demo and see how to manage tier storage using the Azure portal.
>
> **[1:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=92)** There are several tools available that you can use to manage Azure storage.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=95)** Using the Azure portal you can unman the access tier for the storage account from hot to cool and change the replication options.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=104)** To manage the storage tier in the Azure portal, search for storage account from the search bar.
>
> **[1:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=110)** Select one of your storage account in the display list, and then click configuration.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=119)** You can change the default access tier from hot to cool and the replication from LRS, GRS and read-access geo-redundant storage.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=130)** To change the access tier for a particular blob, navigate to containers under the blob services, select your container and then click on blob.
>
> **[2:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=142)** Select the change tier tab, click the dropdown list and select the access tier you want to use.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=150)** Finally, click save.
>
> **[2:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=153)** All the storage accounts use a pricing model for a blob storage based on the tier of each blob.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=160)** When using a storage account, you want to take into considerations different billing options that will affect the storage pricing.
>
> **[2:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=168)** Performance tiers is in addition to the amount of data store.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=172)** The cost of storing data varies depending on the storage tier.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=176)** The per gigabyte cost decreases at tier gets cooler.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=181)** Data access cost increase at the tier get cooler.
>
> **[3:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=185)** For data in the cool and archive storage tier, you are charged a per gigabyte data access charge for reads.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=193)** Transaction costs, that is the per-transaction charge for all the tiers that increases at the tier gets cooler Geo-replication data transfer costs, this charge only applies to accounts with geo-replication configured, including GRS and read-access GRS.
>
> **[3:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=212)** A geo-replication data transfer incurs a per gigabyte charge.
>
> **[3:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=217)** Outbound data transfer costs refer to data that is transferred out of an Azure region and it incurs billing for bandwidth users on a per gigabyte basis, consistent with general purpose storage account.
>
> **[3:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=232)** Changing the storage tier from cool to hot incurs a charge equal to reading all the data existing in the storage account.
>
> **[4:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=240)** However, changing this account storage tier from hot to cool incurs a charge equal to writing all the data in the cool tier.
>
> **[4:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=249)** This is for general purpose V2 accounts only.
>
> **[4:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-access-tiers?u=76281980&t=253)** That's all the different storage tiers you'll use with blob access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7)
> **UI Navigation:** select the (2), switch to (1), navigate to (1), click on (1), dropdown (1)
> **Env Vars:** grs (3), lrs (1)
> **Tools:** azure portal (3)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### [Blob lifecycle management](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=0)** - [Instructor] Data sets have unique life cycles.
>
> **[0:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=2)** Early in the life cycle, people access some data often, but the need for access drops drastically as the data ages.
>
> **[0:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=8)** Some data stays either in the cloud and is rarely accessed once it's stored.
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=12)** Some data expire day or month after creation.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=15)** While other data sets are actively read and modified throughout their lifetimes.
>
> **[0:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=20)** [[Microsoft Azure|Azure]] Blob Storage lifecycle management offers a rich, rule-based policy for general-purpose v2 and blob storage accounts.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=28)** You can use the policy to transition your data to the appropriate access tiers or expires at the end of the data's lifecycle.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=35)** The lifecycle management policy lets you transition blobs from cool to hot immediately, if accessed, to optimize for performance.
>
> **[0:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=44)** Transition blobs to a cooler storage tier, hot to cool, hot to archive, or cool to archive to optimize for cost.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=52)** Delete blobs, blob version, and blob snapshot at the end of their lifecycles.
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=57)** Define rules to be run once per day at the storage account level.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=61)** Apply rules to container or a subset of blobs.
>
> **[1:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=65)** Consider a scenario where data gets frequently accessed during the early stages of the lifecycle, but only occasionally after two weeks.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=73)** Beyond the first month, the data set is rarely accessed.
>
> **[1:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=77)** In this scenario, hot storage is best during the early stages.
>
> **[1:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=81)** Cool storage is most appropriate for occasional access.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=84)** Archive store is the best tier option after the data age is over a month.
>
> **[1:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=89)** By adjusting storage to use with respect to the age of data, you can design the least expensive storage option for your needs.
>
> **[1:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=96)** To achieve this transition, lifecycle management policy rules are available to move aging data to cooler tiers.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=104)** Let's look at how to manage life cycle management policies through the Azure portal.
>
> **[1:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=109)** Please note that you can also use [[Powershell]] and ARM templates method.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=112)** Sign in to the Azure portal.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=114)** In the Azure portal search bar, select your storage account.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=118)** From display lists, under Blob Service, select Lifecycle management.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=126)** To view or change your rules, select the List View tab and then select Add rule, and name your rule on the detailed form.
>
> **[2:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=136)** In this example, I will name it move-to-cool.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=139)** You can also set the rule scope, blob type and blob subtype.
>
> **[2:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=146)** For the purpose of this demo, I will set the scope to filter on blobs.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=150)** This caused the Filter set tab to be added.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=154)** Click Next.
>
> **[2:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=156)** In the Base blobs tab, set the condition for the rule.
>
> **[2:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=159)** In this example, blob are move to the cool storage if they haven't been modified for 30 days.
>
> **[2:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=169)** Click Next.
>
> **[2:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=170)** Now, if you have selected Limited blob with filter on the Detail page, then you can use the Filter set to add an optional filter.
>
> **[2:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=178)** Set the prefix match to filter on blobs.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=181)** In this example, [[LinkedIn]]-lifecycle-container01/log container that begins with the prefix log will be filter.
>
> **[3:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=191)** Finally, click Add to add the new policy.
>
> **[3:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=196)** As you can see, the policy gets created.
>
> **[3:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-lifecycle-management?u=76281980&t=199)** Azure makes managing the data with blob lifecycle policies easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Powershell]] (1), [[LinkedIn]] (1)
> **Tools:** azure portal (3), powershell (1)
> **Env Vars:** arm (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Managing blobs](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=0)** - [Instructor] It's time to dig into how to manage Blobs, as well as how to upload, download and delete block blobs.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=7)** A Blob can be any type and size file.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=9)** [[Microsoft Azure|Azure]] Storage offer three types of blobs.
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=12)** Block blobs, Page blobs, and Append blobs.
>
> **[0:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=16)** You can specify the Blobs type and access still when you create the Blobs.
>
> **[0:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=21)** Block blobs default consists of blocks of data assembled to make a blob.
>
> **[0:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=26)** Most scenarios using Blob Storage employ block blobs.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=30)** Block blobs are ideal for storing texts and binary data in the cloud like files, images and videos.
>
> **[0:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=36)** Append blobs are like a block blobs in that they are made up of blocks, but they are optimized for append operation.
>
> **[0:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=43)** So they are useful for logging scenarios.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=46)** Page blobs can be up to eight terabyte in size, and are more efficient for a frequent read-write operations.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=53)** Azure [[Virtual Machines]] use page blobs as operating system and data discs.
>
> **[0:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=58)** It's important to remember once the blob has been created you cannot change its type.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=64)** Azure also support the use of Role-Based Access Control RBAC to upload the blobs.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=69)** When you choose to upload a block blob, you can optionally expand the advanced section to configure other settings.
>
> **[1:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=76)** The Authentication Type is one of the advanced settings.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=80)** You can choose between Storage account key or [[Microsoft Entra ID|Azure AD]] user account.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=84)** By default, the storage account key is used.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=87)** To switch and use Azure AD user account authentication, you need to assign the storage blob data owner permission using the access control blade on the storage account level.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=99)** If you have the storage blob data contributor permission on the container level, you can use (indistinct) to complete the upload.
>
> **[1:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=107)** There are multiple methods to upload data to blob storage which we'll see some of them during this course.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=112)** You can use the following methods.
>
> **[1:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=115)** AzCopy easy to use command-line tool for [[Windows]] and [[Linux]] that copies to and from blob storage across container or across storage accounts.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=125)** The Azure Storage Data Movement library is a .NET library for moving data between Azure Storage services.
>
> **[2:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=131)** The AzCopy utility is built with the data movement library.
>
> **[2:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=135)** Azure Data Factory support copying data to and from blob storage by using the account key, shared access signature, service principle or manage identities.
>
> **[2:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=146)** Blobfuse a virtual file system driver for Azure Blob storage.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=150)** You can use the Blobfuse to access your existing block data in your storage account through the Linux file system.
>
> **[2:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=157)** Azure Data Box Disk is a service for transferring on-premises data to Blob storage when null data sets or network constraints, make uploading the data over the wire unrealistic.
>
> **[2:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=169)** You can use Azure Data Box Disk to request solid-state disks from [[Microsoft]].
>
> **[2:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=174)** You can then copy your data to those disks and ship them back to Microsoft to be uploaded into your Blob storage.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=181)** The Azure Import/Export service provides a way to export large amount of data from the storage account to the hard drives that you provide.
>
> **[3:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=189)** And then Microsoft ships back to you with your data.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=193)** And of course you can always use the Azure Storage Explorer.
>
> **[3:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=198)** Let's use the Azure portal to upload, download and delete block blobs in the container that we created in the previous demo.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=205)** To upload a block blob to your new container, to the Azure portal, navigate to the container you created select the container to show a list of blob it contains.
>
> **[3:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=216)** This container in is new, so it won't yet contain any blobs.
>
> **[3:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=220)** Select the upload button to open the upload blob and browse your local file system to find a file to upload as a blob type.
>
> **[3:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=228)** You can optionally expound the Advanced section to configure other settings.
>
> **[3:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=235)** Select the upload button, to upload the blob.
>
> **[4:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=241)** Upload as many blobs as you like in this way you will see that the new blobs are uploaded.
>
> **[4:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=249)** You can download a block blob to display in the browser or save to your local file system.
>
> **[4:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=255)** To download a block blob, navigate through the list of blobs that you just uploaded.
>
> **[4:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=260)** Right-click to the blob you want to download and select download.
>
> **[4:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=266)** Save it to your local file system.
>
> **[4:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=269)** And let's look at downloaded.
>
> **[4:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=271)** To delete one or more rows in the Azure portal, navigate to the container, display the list of blobs in the container, use the check box to select one or more blobs from the list.
>
> **[4:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=282)** Select the delete button and confirm deletion and indicate whether you want also to delete the blob snapshots and click Okay.
>
> **[4:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-blobs?u=76281980&t=293)** And that's it, you will be a pro at managing blobs in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Microsoft]] (3), [[Microsoft Entra ID|Azure ad]] (2), [[Linux]] (2), [[Virtual Machines]] (1)
> **UI Navigation:** select the (4), navigate to (2), open the (1), right-click (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** azure portal (3)
> **Env Vars:** rbac (1), net (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Develop Solutions for Azure Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Files](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Files and the common use cases of file storage.
>
> **[0:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=3)** Azure Files offer shared storage for applications using the industry standard SMB protocol and the Network File System, NFS, protocol.
>
> **[0:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=11)** Azure [[Virtual Machines]] and [[Cloud Services]] can share file data across application components via mounted shares.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=18)** And on-premises application can also access file data under share.
>
> **[0:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=22)** That means that multiple VMs can share the same files with both read and write access.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=28)** You can also read the files using the [[Representational State Transfer (REST)|REST]] API interface or the storage client libraries.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=34)** Applications running in Azure virtual machines, [[Windows]], [[Linux]], or other cloud services, can mount a file storage share to access file data, just as an application would mount typical SMB or NFS share.
>
> **[0:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=48)** Any number of Azure virtual machines or roles can mount and access the file storage share simultaneously.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=53)** Azure File SMB file shares are accessible from Windows, Linux and Mac OS client.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=60)** NFS file shares are accessible from Linux and Mac OS clients.
>
> **[1:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=65)** The common uses of file storage.
>
> **[1:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=67)** Azure files can be used to completely replace or supplement traditional on-premises file servers, or NAS devices.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=74)** Popular operating systems such as Windows, Mac OS and Linux, can directly mount Azure file shares wherever they are in the world.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=83)** Azure Files makes it easy to lift and shift applications to the cloud that expect a file share to store file application or user data.
>
> **[1:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=92)** Azure file shares can also be replicated with Azure file sync to Windows servers, either on-premises or on the cloud.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=99)** For performance and distributed caching of the data where it's being used.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=104)** Storing shared application settings, for example, in configuration files, storing diagnostic data such as logs, metrics, and crash dumps in a shared location.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=114)** Storing tools and utilities needed for developing or administering Azure virtual machines or cloud services.
>
> **[2:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files?u=76281980&t=121)** That covered all the common use cases of file storage for Azure files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Virtual Machines]] (4), [[Windows]] (4), [[Linux]] (4), [[Cloud Services]] (3)
> **Env Vars:** smb (3), nfs (3), rest (1), api (1), nas (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Azure Files vs. Azure Blobs](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=0)** - [Instructor] Sometimes it's difficult to decide when to use [[Microsoft Azure|Azure]] file shares instead of blobs or disk shares in your project.
>
> **[0:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=8)** Let's compare different features and discuss when to use each one.
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=12)** If we compare Azure files to Azure blob side-by-side, we see that Azure files provides in SMB and NFS interface, client libraries, and the [[Representational State Transfer (REST)|REST]] interface, that allows access from anywhere to store files.
>
> **[0:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=26)** Azure blobs provides client libraries and the REST interface, that allows [[Unstructured Data]] with flat namespace to be stored and accessed at a massive scale in the blobs.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=38)** Let me explain when to use Azure files versus blobs.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=42)** You can use Azure files to lift and shift an application to the cloud, which already uses the native file system APIs to share data between it and other applications running in Azure.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=53)** You will want to store development and debugging tools that need to be accessed from many [[Virtual Machines]].
>
> **[0:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=59)** Azure blobs, on the other hand, can be used if you want your application to support streaming and random-access scenarios, and you want to be able to access application data from anywhere.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=71)** There are few other distinguishing features on when to select Azure files and Azure blobs.
>
> **[1:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=77)** Azure files are true directory objects.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=80)** Azure blobs are a flat namespace.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=83)** Azure files can be accessed through file shares.
>
> **[1:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=86)** However, Azure blobs are accessed through a container.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=90)** Azure files provide shared access across multiple virtual machines.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=95)** Azure disks are exclusive to a single virtual machine.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-files-vs-azure-blobs?u=76281980&t=99)** When you select which storage feature to use, you should also consider pricing and perform a cost benefit analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (17), [[Representational State Transfer (REST)|Rest]] (2), [[Virtual Machines]] (2), [[Unstructured Data]] (1)
> **Env Vars:** rest (2), smb (1), nfs (1)
> **Speakers:** - [instructor] (1)

#### [Managing file shares](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=0)** - [Instructor] Now let's look at how to manage [[Microsoft Azure|Azure]] file shares from [[Windows]], [[Linux]] and macOS.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=7)** You can connect to your Azure file share with Windows, including Windows Client and [[Windows Server]].
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=12)** All this information is available by selecting connect from you file share page in the Azure portal.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=18)** For Windows, you need to ensure that port 445 is open.
>
> **[0:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=22)** Azure Files uses SMB protocol.
>
> **[0:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=24)** SMB communicates over TCP port 445.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=28)** You need to ensure your firewall or your ISP provider is not blocking TCP port 445 from the client machine.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=35)** Azure File shares can also be mounted in Linux distributions using the CIFS kernel client.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=42)** This can be done on demand with the mount command or on boot to be persistent by creating an entry in /etc/fstab.
>
> **[0:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=51)** You can mount file shares in Linux with SMB and NFS protocols.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=56)** For macOS with High Sierra version 10.13 or later, there are two different ways to mount an Azure file share.
>
> **[1:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=62)** You can use the find UI or using the terminal.
>
> **[1:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=66)** macOS will use only SMB3 to mount a file share.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=71)** Let's look at the advanced options for file shares.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=74)** When you plan to create Azure file shares, you need to have a storage account and decide whether you want to create a large file share and/or disable secure transfer.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=84)** The maximum file share size that you can create is 100 terabytes for both standard and premium storage account.
>
> **[1:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=91)** However, if you opt to use 100 terabyte with standard storage account, then you need to enable large file shares for Azure Files at the time of the creation for the storage account under the Advanced tab.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=105)** The secure transfer option is enabled by default, which is required to enhance the security of your storage account by only allowing requests to the storage account by a secure connection.
>
> **[1:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=116)** For example, when calling [[Representational State Transfer (REST)|REST]] APIs to access your storage account, you must connect using HTTPS.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=123)** Any request using HTTP will be rejected when the secure transfer required is enabled.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=130)** Please note that both options, secure transfer and large file shares, can be also changed after you create a storage account under Settings, the Configuration section.
>
> **[2:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=143)** Let's start by creating an Azure file share and upload a file from the Azure portal.
>
> **[2:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=148)** Once you create the storage account, you need to provide the file share name, quota and access tiers.
>
> **[2:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=156)** Access to your storage account and then click file shares.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=160)** Click add file share and give your new file share a name.
>
> **[2:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=166)** Set a quota and access tiers.
>
> **[2:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=170)** Quota refers to the total size of files on the share.
>
> **[2:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=174)** And the access tiers determines the price and in some cases, also the performance of a file share.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=181)** The main differentiation of these tiers is the cost for storage at rest and for the transaction.
>
> **[3:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=188)** After your file share is created, you can upload a file.
>
> **[3:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=194)** From the upload blade, select your file, and then click Upload.
>
> **[3:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=208)** Notice the ability to add a directory, delete the share, change the access tier and edit the quota.
>
> **[3:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=221)** To create a file share with [[Powershell]], first you need to gather the storage account name and the storage account key.
>
> **[3:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=229)** I'll start first by setting the resourceGroupName variable, the storageAccountName and I will get my storage account resource using the Get-AzAtorageAccount and then I will get my storage account key and store them in a variable called storageAccountKeys.
>
> **[4:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=251)** And then I will get my storage account context and store them in a variable.
>
> **[4:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=257)** And finally, I'll create a new file share using the new-AzStorageShare.
>
> **[4:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=265)** And the file share name called file-share-name-02.
>
> **[4:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=271)** If I switch to the Azure protal and hit Refresh, we can see that the new file-share-name gets created.
>
> **[4:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=279)** Once you create a file share, you can mount it to access your files.
>
> **[4:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=283)** Let's mount a file share with PowerShell from a Windows machine.
>
> **[4:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=287)** It's important to remember that you need to run these commands from a regular and not an elevated PowerShell session to mount the Azure file share.
>
> **[4:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=296)** I will start first by setting my variables, such as the resourceGroupName, the storageAccountName, and the existing fileShareName called marketing.
>
> **[5:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=310)** Of course, you need to replace those variables with the proper information of your environment.
>
> **[5:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=316)** These commands require you to be logged in to your Azure account if you haven't already logged in.
>
> **[5:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=321)** You can use Connect-AzAccount cmdlet to log in.
>
> **[5:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=326)** I'll start first by setting my storageAccountName in a variable called storageAccount.
>
> **[5:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=332)** Then I will get my storageAccountKeys and store them in a variable.
>
> **[5:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=337)** I will verify that my existing file share exists, using the if statement.
>
> **[5:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=345)** And then I will convert my storageAccountKey and store it in a secure variable called passwords and then set the credential variable and finally, I will run the New-PSDrive cmdlet, followed by the drive letter, Z drive, the PSProvider FileSystem -Root.
>
> **[6:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=369)** As you can see, the marketing Z drive get mapped to my machine.
>
> **[6:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=375)** And when finished, you can dismount the file share by running Remove-PSDrive command, followed by the drive letter, Z, and you can see the drive letter gets removed.
>
> **[6:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=390)** Azure file shares are deployed into storage account, which are top-level objects that represent a shared pool of storage.
>
> **[6:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=398)** This pool of storage can be used to deploy multiple file shares.
>
> **[6:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=401)** There are therefore three categories to consider: storage accounts, standard and premium, Azure file shares and files.
>
> **[6:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=410)** For more information about Azure file's credibility and performance targets, please read this credibility guide by [[Microsoft]].
>
> **[6:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-file-shares?u=76281980&t=417)** Now you are ready to manage Azure file shares for Azure files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (18), [[Windows]] (5), [[Linux]] (3), [[Powershell]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** macos (3), storageaccountname (3), resourcegroupname (2), storageaccountkeys (2), filesharename (1)
> **Env Vars:** smb (3), tcp (2), isp (1), cifs (1), nfs (1)
> **Tools:** powershell (3), azure portal (2), terminal (1)
> **Ports:** port 445 (3)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** you need to have (1), required to (1)
> **CLI Commands:** find (1)

#### [File share snapshots](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] files provide the capability to take Share Snapshots of file shares.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=5)** Share Snapshots capture the share state at that point in time.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=9)** Share Snapshot's capability is provided at the file share level.
>
> **[0:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=13)** Retrieval is provided at the individual file level to allow for restoring individual files.
>
> **[0:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=19)** You cannot delete a Share that has Share Snapshots unless you delete all the Share Snapshots first.
>
> **[0:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=25)** A Share Snapshot is a point in time a read-only copy of your data.
>
> **[0:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=29)** Share Snapshots are incremental in nature.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=32)** Even though Share Snapshots are saved incrementally, you need to retain only the most recent Share Snapshot to restore the Share.
>
> **[0:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=40)** Application that use file shares perform operations, such as writing, reading, storage, transmission, and processing.
>
> **[0:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=48)** If an application is misconfigured or an unintentional bug is introduced, accidental override or damage can happen to a few blocks.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=56)** To help protect against these scenarios, you can take a Share Snapshot before you deploy your new application code.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=63)** If a bug or application error is introduced with the new deployment, you can go back to a previous version of your data on that file share.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=71)** Imagine that you are working on a text file in a file share.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=74)** After the text file is closed, you lose the ability to undo your changes.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=79)** In these cases, you will then need to recover a previous version of the file.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=83)** You can use Share Snapshots to recover previous version of the file if it's accidentally renamed or deleted.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=90)** After you create a file share, you can periodically create a Share Snapshot of the file share to use for data backup.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=97)** A Share Snapshots when taken periodically helps maintain a previous version of data that can be used for future audit requirements or disaster recovery.
>
> **[1:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=106)** Share Snapshots are incremental in nature.
>
> **[1:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=109)** Only the data that has changed after your most recent Share Snapshot is saved.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=114)** This minimize the time required to create the Share Snapshot and saves on storage costs.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=119)** To conserve space, you can delete the Share Snapshot for the period one that you want highest.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=125)** Snapshots don't count toward your five or hundred terabyte Share limit.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=130)** There's no limit to how much space Share Snapshots occupied in total, but Social Account limits still apply.
>
> **[2:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=136)** At the time of this recording, the maximum number of Shares Snapshots for Azure files is 200.
>
> **[2:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=142)** After 200 Share Snapshots you must delete all the Share Snapshots to create new ones.
>
> **[2:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=149)** Let's see how to manage file share Snapshots using the Azure portal.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=154)** Access your storage account and then click on File shares, select your File share Name and then click on Snapshots, click Add Snapshots and then enter your comment.
>
> **[2:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=165)** This is optional.
>
> **[2:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=168)** Click the Snapshots and verify it includes or uploaded files, click any file that is part of the Snapshot and then review of the File Properties.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=179)** (indistinct) choices to download and restore the Snapshot file, (indistinct) to file share name and then delete the file.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=193)** So I deleted file number 3, back after the Snapshot and restore the file, I'll overwrite the original and hit OK.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=205)** I'll go back to the main file share and see that for number three is restored.
>
> **[3:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/file-share-snapshots?u=76281980&t=212)** And that's all you need to know about working with file share Snapshots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (2)
> **Analogies:** such as (1), imagine (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Replacing on-premises server with Azure Files](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=0)** - [Instructor] It's time to look at how to replace your on-premises server with [[Microsoft Azure|Azure]] Files, where you have the ability to take an Azure File Share and domain join it to your local [[Active Directory]] Domain Services.
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=12)** This can be done in just one simple step, or just like an on-premises server.
>
> **[0:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=17)** The very first thing that needs to be done is to domain join your Azure storage account to your on-premises domain.
>
> **[0:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=25)** Now before you enable Active Directory authentication for Azure File Shares, there are some things that you need to be aware of.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=32)** First, you need to select or create an Active Directory environment and then sync it to [[Microsoft Entra ID|Azure AD]] with Azure AD Connect.
>
> **[0:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=40)** Next is to domain-join an on-premises machine, or an Azure IS VM to your Active Directory Domain Services.
>
> **[0:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=47)** Then obviously, you need to select or create an Azure storage account that has no more than 15 characters, because more than 15 characters are not supported to be used as a SamAccountName to create Active Directory object for the storage account.
>
> **[1:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=62)** For optimal performance, we recommend that you deploy the storage account in the same region as the clients from which you plan access shared.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=71)** Now you need to download and unzip the Az Files Hybrid module from [[GitHub]].
>
> **[1:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=76)** At the time of this recording, I'm using the latest version.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=80)** And finally, the network configuration, which I will discuss in the next slide.
>
> **[1:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=85)** For now, I assume we have all the prerequisites in place.
>
> **[1:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=88)** Let's jump to the demo.
>
> **[1:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=91)** Here, I have a storage account with a file share that I would like to be able to mount from on-premises.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=97)** To domain-join the storage account, I will open file share, and I will import the AZ File Hybrid [[Powershell]] module which gives me the cmdlet that I will need to do the job.
>
> **[1:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=107)** And then I will set the resource group name variable, and the storage account name.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=112)** The cmdlet that I use is a Join-AzStorageAccount cmdlet, just like a regular Az PowerShell cmdlet, I need to provide the resource group name, and the storage account name, on the object I want to act on, which in this case, is this particular storage account.
>
> **[2:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=127)** Then the domain name of the domain that I would like to be domain-joined, and the resource type that I want to create, which in this case is a computer account.
>
> **[2:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=135)** And the organizational unit, OU name, I want to put this object in.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=140)** And finally, I will then set the encryption algorithm used for Kerberos authentication to AES256, which is the highest support for encryption.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=150)** And just like that, I have domain-joined this particular storage account, just like my on-premises file server.
>
> **[2:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=155)** Before I can actually access this share from on-premises, I will need to put a share ACL on either the storage account, or on the individual file share.
>
> **[2:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=166)** And when I do so on the storage account, that share ACL will apply to all the shares underneath.
>
> **[2:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=171)** In this particular case, I will put on the storage account level.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=176)** I only have one share in there anyway.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=179)** And I do this by adding role assignment.
>
> **[3:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=182)** So I will add the role, in this case, under the Access Control IAM.
>
> **[3:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=188)** I will select Role assignments, and then I click Add, Add Role Assignment.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=193)** I can search for storage file data SMB Share Elevated Contributor.
>
> **[3:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=201)** And I will type, Clark Joe, for the name.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=207)** I could add an Azure AD group as here as well, but I will type this individual user account and add that as a role assignment.
>
> **[3:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=215)** Now that the role assignment have successfully been applied, I can actually mount this file share on-premises and verify the access permission over SMB.
>
> **[3:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=224)** I will look into any domain-joined VM with a user, who has already access to the Azure File Share and then mount the share using the net use command, followed by the desired drive letter, the storage account free qualified domain name, and the file share name.
>
> **[4:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=241)** The mount command completed successfully.
>
> **[4:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=243)** I can verify also that I am logged in with Joe, by typing whoami in the command prompt.
>
> **[4:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=249)** I will browse the Z drive, and check that I'm able to access and create a new file directly in the Azure File Share from my on-premises machine.
>
> **[4:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=259)** In many customer environments, initial mount of the Azure File Share on your on-premises workstation will fail.
>
> **[4:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=265)** The reason for this is that many organizations and internet service providers, ISPs, block the port that SMB uses to communicate, port 445.
>
> **[4:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=275)** Now if this TCP port 445 is blocked in your environment, then you need to take additional steps.
>
> **[4:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=282)** First, you need to create a private endpoint for your storage account.
>
> **[4:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=285)** The private endpoint is an endpoint that is only accessible within an Azure virtual network.
>
> **[4:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=289)** When you create a private endpoint for your storage account, your storage account gets a private IP address from within the address space of your virtual network.
>
> **[4:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=298)** Much like how an on-premises file server or NAS device receives an IP address within the dedicated address space of your on-premises network.
>
> **[5:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=306)** Next, you need to tunnel the traffic over a [[Virtual Private Network (VPN)|virtual private network]], VPN, or ExpressRoute.
>
> **[5:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=312)** So when you establish your network tunnel between your on-premises network in Azure, you are preparing your on-premises network with one or more virtual net source in Azure.
>
> **[5:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=321)** A virtual network, or VNet, is similar to a traditional network that you would operate on-premises.
>
> **[5:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=327)** Now you need to configure DNS forwarding for Azure Files.
>
> **[5:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=330)** So for connections to your storage account to go over your network tunnel, the fully qualified domain name, FQDN, of your storage account, must resolve to your private endpoint's private IP address.
>
> **[5:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=342)** To achieve this, you must follow the storage endpoint suffix call to [windows.net](https://windows.net), to the Azure private DNS service accessible from within your virtual network.
>
> **[5:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=351)** And finally, an optional step is to configure DFS namespace.
>
> **[5:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=356)** This step will give you the possibility to use an alternate name, like, for example, an existing file server name, to modify share.
>
> **[6:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=364)** This step is absolutely optional.
>
> **[6:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=366)** If you just want to start using your file share, you can with the storage account fully qualified domain name, as shown in the previous demo.
>
> **[6:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/replacing-on-premises-server-with-azure-files?u=76281980&t=374)** For a more thorough complex network deployment, you can check Azure Files networking and DNS considerations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Active Directory]] (5), [[Microsoft Entra ID|Azure ad]] (3), [[Powershell]] (2), [[GitHub]] (1)
> **Env Vars:** smb (3), dns (3), acl (2), aes256 (1), iam (1)
> **Analogies:** just like (4), similar to (1), for example (1)
> **CLI Commands:** az (3), unzip (1)
> **Tools:** powershell (2), github (1), command prompt (1)
> **Definitions:** is a  (2), is an  (1)
> **Ports:** port 445 (2)
> **Prerequisites:** configure (2)

#### [Azure File Sync](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=0)** - [Instructor ] [[Microsoft Azure|Azure]] File Sync is a service that helps you centralize your organizations file share in Azure files while keeping the flexibility, performance and compatibility of from premises file server.
>
> **[0:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=11)** Azure File Sync transform [[Windows Server]] into a quick cache of your Azure file share.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=15)** You can use any protocols that's available on Windows server to access your data locally including SMB, NFS, and NFTPs.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=23)** And we can have as many cases as you need across the world.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=27)** There are many use cases and advantages to Azure File Sync that will help you to save time and money.
>
> **[0:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=33)** The first one is lift and shift, well you can move your applications that require access between Azure and on premises systems.
>
> **[0:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=40)** This would provide the right access to the same data across [[Windows]] servers and Azure files.
>
> **[0:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=45)** This lets company with multiple offices have a need to share files with all sites.
>
> **[0:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=50)** Next is branch offices, where there is a need to backup files, or you need to set up a new server that will connect to Azure Storage.
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=57)** Once File Sync is implemented, Azure backup will backup your on premises data.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=61)** Also, you it can restore file [[Metadata]] immediately and then recalled data as needed for rapid disaster recovery.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=68)** And then file archiving.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=69)** So only recently access data is located on local servers and non-use data moved to Azure in what is called cloud tiering.
>
> **[1:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=77)** Cloud tiering is an optional feature of Azure File Sync in which frequently accessed files are cached locally on the server while all other files are fused to Azure files based on policy settings.
>
> **[1:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=89)** When a file is tiered, the Azure File Sync file system replaces the file locally with a pointer or repairs point.
>
> **[1:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=96)** The repairs point represents a URL to the file in Azure Files.
>
> **[1:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=100)** When it use opens ETL file, Azure File Sync seamlessly recalls the file data from Azure files without the user need to know that the file is stored in Azure.
>
> **[1:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=111)** Cloud tiering files will have grid icon with an offline file attribute, to let the user know that the file is only in Azure.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=118)** To get the most from Azure File Sync.
>
> **[2:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=120)** It's important to understand the components and terminology.
>
> **[2:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=124)** The storage sync service is a top level Azure resource for Azure File Sync.
>
> **[2:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=128)** The storage sync service resource is the (indistinct) of the storage account resource and can similarly be deployed to Azure resource groups.
>
> **[2:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=135)** A distinct top level resource from the storage account resource is required because the storage sync service can create sync relationships with multiple storage accounts via multiple sync groups.
>
> **[2:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=145)** A subscription can have multiple storage sync service resources deployed.
>
> **[2:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=149)** The registered server object represents a trusted relationship between your server or cluster and the storage sync service.
>
> **[2:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=157)** You can register as many servers to a storage sync service instance, as you want.
>
> **[2:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=161)** However, a server or a cluster can be registered with only one storage sync service at the time.
>
> **[2:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=167)** The Azure File Sync agent is a downloadable package that enables Windows server to be synced with an Azure file share.
>
> **[2:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=173)** A server endpoint represent a specific location on the registered server, such as for the on sort of a re volume.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=179)** Multiple server endpoints can exist on the same volume if they're namespace do not overlap.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=184)** For example, I have D, accounting and the sales folder.
>
> **[3:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=188)** And the sync group define the sync topology for a set of files.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=192)** Several endpoints with a sync group are kept in sync with each other.
>
> **[3:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=195)** If for example, you have two distinct sets of files that you want to manage with Azure File Sync.
>
> **[3:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=200)** You would create two sync groups and add different endpoint to each sync group.
>
> **[3:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=204)** A storage sync server can host as many sync groups as you need.
>
> **[3:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=209)** The last component is the cloud endpoint.
>
> **[3:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=211)** The cloud endpoint is an Azure file share that is part of a sync group.
>
> **[3:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=215)** The entire Azure File Share Syncs and an Azure file share can be a member of only one cloud endpoint.
>
> **[3:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=221)** So an Azure file share can be a member of only one sync group.
>
> **[3:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-file-sync?u=76281980&t=225)** I know Azure File Sync will save you a lot of time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (30), [[Windows Server]] (3), [[Windows]] (1), [[Metadata]] (1)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **Env Vars:** smb (1), nfs (1), url (1), etl (1)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor (1)

#### [Implementing Azure File Sync](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=0)** - [Instructor] Let's now look at how to implement [[Microsoft Azure|Azure]] File Sync and set up file synchronization.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=5)** There are several high level steps for configuring Azure File Sync as shown in the diagram.
>
> **[0:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=11)** First, you need to deploy the Storage Sync Service.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=14)** The Storage Sync Service can be deployed from the Azure Portal.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=18)** You will need to provide name, subscription, resource group, and the location.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=23)** Next, you need to prepare [[Windows Server]] to use with Azure File Sync.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=27)** For each server that you intended to use with Azure File Sync including server nodes in the Failover Cluster, you will need to configure the server.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=35)** Preparation steps include temporary disabling Internet Explorer, enhanced security and ensuring you have the latest portal version installed.
>
> **[0:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=44)** Then, you install Azure File Sync Agent.
>
> **[0:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=47)** The agent is a downloadable package that enables Window Server to be synced with an Azure File Share.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=53)** The Azure File Sync Agent installation package should install relatively quickly.
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=57)** We recommend that you keep the default installation path and that you enable [[Microsoft]] Update to keep the Azure File Sync Agent up to date.
>
> **[1:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=65)** The final step is to Register Windows Server with a Storage Sync Service.
>
> **[1:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=70)** Registering Windows Server with Storage Sync Service establishes a trust relationship between your server or cluster and the Storage Sync Service.
>
> **[1:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=77)** Registration requires your subscription ID or resource group, and the Storage Sync Service that you need to create in step one.
>
> **[1:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=85)** Remember that a server or a cluster can be registered with only one Storage Sync Service at a time.
>
> **[1:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=91)** In this demo, we will look at how to use the Azure Portal to set up a file synchronization.
>
> **[1:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=96)** This step can be completed after you have configured Azure File Sync that we discussed in the previous four steps.
>
> **[1:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=102)** For this demo, I have already deployed the Storage Sync Service.
>
> **[1:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=106)** Install the agent on all the server.
>
> **[1:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=108)** and then, register it with a Sync Service in Azure.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=112)** Next, we need to create a Sync group in the Azure Portal.
>
> **[1:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=115)** Select the Sync group from the Storage Sync Service, Overview Page.
>
> **[2:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=120)** Click on Sync group and then, give the Sync group a descriptive name.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=125)** I will use "[[LinkedIn]] Sync Group 1" in this demo.
>
> **[2:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=129)** Choose your subscription.
>
> **[2:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=131)** Then, select the Storage account.
>
> **[2:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=136)** And the name of the Azure File Share you created.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=140)** And select Create.
>
> **[2:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=144)** If you select your Sync group, you can see that you now have one cloud endpoint.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=150)** Next, we need to add a server endpoint.
>
> **[2:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=152)** A server endpoint represent a specific location on the register server.
>
> **[2:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=156)** For example, if folder on a server volume, so select the newly create sync group and then, select Add server endpoint.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=164)** On the server endpoint page, you need to enter the following information to create a server endpoint, the Registered Server, the name of the server you created, I will use WS2016 in this demo.
>
> **[2:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=177)** The Path, the one the server path to the drive you created, I will use D:\LinkedInLearning in this demo.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=184)** I will leave Cloud Tiering disabled here.
>
> **[3:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=188)** And finally, click Create.
>
> **[3:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=191)** Now, the synchronization engine kicks in.
>
> **[3:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=194)** If I browse my Azure File Share, we can see that all my files are now sync across Azure File Share and Windows Server.
>
> **[3:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/implementing-azure-file-sync?u=76281980&t=202)** For a more thorough look at Planning for an Azure File Sync deployment, you can check out Plan for Azure File Sync Deployment Guide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (18), [[Windows Server]] (4), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Prerequisites:** install (3), set up (2), configure (1)
> **UI Navigation:** select the (3), click on (1)
> **Tools:** azure portal (3)
> **Env Vars:** ws2016 (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 3. Develop Solutions for Azure Queues

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Storage queues](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=0)** - [Presenter] [[Microsoft Azure|Azure]] Storage Queues, is essentially a queuing service built on top of Azure Storage for storing large numbers of messages.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=7)** You can access messages from anywhere in the world via authenticating calls using HTTP or HTTPS.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=14)** A queue message can be up to 64 kilobyte in size.
>
> **[0:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=17)** A queue may contain millions of messages up to the total capacity limit of a storage account.
>
> **[0:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=22)** Queues are commonly used to create a backlog of work to process asynchronously.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=28)** Queue Storage contains the following components, all access to Azure Storage is done through a storage account.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=34)** A queue contains a set of messages, the queue name must be all lowercase, and the message in any format of up to 64 kilobyte.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=42)** The maximum time to live can be any positive number, or minus one, indicating that the message doesn't expire.
>
> **[0:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=49)** If this parameter is omitted, the default time to live is seven days.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=53)** So what are Azure Storage Queues good for?
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=56)** Well, they are great in many different use cases.
>
> **[0:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=59)** In general terms, we will talk about decoupling components.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=63)** So the idea of taking two components instead of them communicating with each other directly, to rather place a queue in between them, so that the service requesting some action or submitting some data, can do so to a queue so middleman that can accept a message or request without doing the processing.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=80)** And then the service providing the actual capability or processing the data, would take messages off that queue as fast as it can, but won't be overwhelmed with deluge of messages or requests and it won't necessarily have to be available right at the moment where the client submits its request.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=97)** So by decoupling components by placing a queue in between them, we get loads moving.
>
> **[1:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=101)** So you can send a lot of messages into the queue and have the queue grow in length without overwhelming the processor.
>
> **[1:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=108)** And then similarly, we can add some resilience by decoupling components in this way, by having momentary blips and availability of them processing messages, being essentially invisible to the client submitting message into the queue.
>
> **[2:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=122)** From [[Microsoft]]'s Architecture Guidance, there is actually a very good example that we use a lot.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=126)** The idea is to take a web app as an example and consider how much traffic might be driven at that web app, whether eBay, Amazon or otherwise, you are going to have a lot of requests coming in for a service.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=139)** So it could be retail checkout scenarios, could be video processing requirements to generating thumbnails, but the web application itself has a lot of requests for work and the client doesn't necessarily want to wait for that.
>
> **[2:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=152)** So the client interacting with the web app wants to have a nice interactive experience.
>
> **[2:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=157)** So the client submitting a request through the web app expect an immediate response, and the web app will place the request, let's say a checkout request for a shopping cart into the queue and then tell the clients we are working on it.
>
> **[2:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=170)** So the client has a nice interactive experience, but the work goes into the queue.
>
> **[2:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=174)** And then we have a background task, in this case a web job, where we have the background task working as fast as possible, working through all the message in the queue.
>
> **[3:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=183)** So our focus is here, where we are decoupling the web application from the background task.
>
> **[3:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=188)** So if the web job becomes temporarily unavailable even just for a moment, the web app won't be affected by it.
>
> **[3:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=195)** The web app can continue submit message into the queue, and even if the web app starts sending a lot of messages simply faster than the web job can consume, then we still have the ability to load smooth and that, the queue will just grow in size.
>
> **[3:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=209)** Once the web chore becomes available or if it's just the being very busy, when we add resources, it can then continue to process messages out of that queue at maximum rate.
>
> **[3:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=219)** And so neither its availability, nor its processing rate is directly going to affect the web application.
>
> **[3:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=224)** This also mean that we can scale these two components independently.
>
> **[3:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=229)** And as we have more clients we can scale our web application independently from the background task.
>
> **[3:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=234)** We can also scale our background task perhaps, based on high season or at that queue length needs to be managed if it gets too large, or results don't appeal quick enough for our clients.
>
> **[4:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=245)** Then we can choose to invest in more work chore instances here and process the queue more quickly.
>
> **[4:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=251)** So this is one example of how to use queues to decouple components.
>
> **[4:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-queues?u=76281980&t=254)** In this case, decoupling a web application from the background tasks, could be generating thumbnails, including videos, checking out shopping carts, that sort of thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft]] (1)
> **Env Vars:** http (1), https (1)
> **Code Identifiers:** ebay (1)
> **Speakers:** - [presenter] (1)

#### [Managing queues](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Queue Storage is a service for storing large numbers of messages that can be accessed from anywhere in the world via HTTP or HTTPS.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=9)** In this demo, I will show you the common Queue Storage operation that you can perform with [[Powershell]].
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=14)** To follow this demo, you need to have a storage account deployed and use the latest Azure PowerShell AZ module.
>
> **[0:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=20)** You can also create a new storage account.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=23)** You need to install the AZ module on your machine or use the Azure Cloud Shell instead.
>
> **[0:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=29)** For this demo, I will use North Europe as the location.
>
> **[0:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=31)** So I'll store it in a variable called location for future use.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=35)** My storage account is deployed in a resource group.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=38)** I will also store it in the variable called resourceGroupName and store my storage account name in the variable called storageAcc.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=46)** When acting on a storage account, you reference the context instead of repeatedly providing the credentials.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=52)** So to get the storage account context that defines the storage account to be used, I will use the Get-AzStorageAccount cmdlet and store the context in the variable called ctx.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=63)** Next, I will create a queue named linkedinqueue.
>
> **[1:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=67)** Then I will run the New-AzStorageQueue to create the queue and store it in the variable called queue.
>
> **[1:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=75)** If I switch to the Azure portal, select my storage account and click on Queues, I can see now that my queue is created.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=83)** Now you can run query and retrieve a specific queue or a list of all the queues in a storage account.
>
> **[1:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=89)** For this example, I will retrieve all queues in the storage account, as well as a specific queue and both commands use the Get-AzStorageQueue cmdlet.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=99)** To retrieve a specific queue, you run the Get-AzStorageQueue followed by the variable name and the context.
>
> **[1:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=107)** To show the properties of the queue, you type the variable name queue to retrieve all queues and show their names.
>
> **[1:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=117)** To add a message to a queue, you need to create a new instance of the message object class.
>
> **[2:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=122)** Next, call the addMessage method.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=125)** A cloud queueMessage can be created from either a string in UTF-8 format or a byte array.
>
> **[2:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=131)** I will add three messages to the queue by running the following commands.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=140)** If I switch to the Azure portal, and refresh my queue in the storage account, I can see that I have three messages.
>
> **[2:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=149)** You can also read a single message from the queue and then delete it.
>
> **[2:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=152)** First I need to set the invisibleTimeout, which defines how long the message remains invisible before it's available again for processing.
>
> **[2:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=161)** The default is 30 seconds.
>
> **[2:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=162)** I will set to 10 seconds by running this command.
>
> **[2:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=167)** Next, I will read the queue by calling the [[Microsoft Azure]] storage queue, CloudQueue.GetMessage method.
>
> **[2:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=173)** You get the next message in the queue.
>
> **[2:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=175)** A message returned from the getMessage becomes invisible to any other code reading messages from this queue.
>
> **[3:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=183)** To finish removing the message from the queue, you call the Microsoft Azure storage queue CloudQueue.DeleteMessage method.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=192)** If I switch back to the Azure portal and refresh my queue in the storage account, I can see now that I have only two messages instead of three.
>
> **[3:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=200)** Finally, to delete a queue and all the messages contained in it, we need to use the Remove-AzStorageQueue cmdlet.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=207)** I will delete my queue and confirm, yes.
>
> **[3:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=213)** Switching back to the Azure portal and I can see that my queue is deleted from my storage account.
>
> **[3:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=219)** Managing queues for Azure Storage can take some time to become familiar with.
>
> **[3:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/managing-queues?u=76281980&t=222)** You can find more information in the documentation on how to use the .NET storage client library to perform data plane operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Powershell]] (2), [[Microsoft Azure]] (2)
> **Code Identifiers:** resourcegroupname (1), storageacc (1), addmessage (1), queuemessage (1), invisibletimeout (1)
> **Tools:** azure portal (4), powershell (2)
> **Env Vars:** http (1), https (1), utf (1), net (1)
> **CLI Commands:** az (2), find (1)
> **UI Navigation:** switch to (2), click on (1)
> **Prerequisites:** you need to have (1), install (1)
> **Documentation:** the documentation (1)

#### [Developing with queues](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=0)** - [Instructor] Now let's take a look at some of the [[Microsoft Azure|Azure]] Storage Queue capabilities from code using .NET.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=7)** Here I have Visual Studio 2019.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=9)** You can also use the free Community Edition.
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=12)** We will create a new solution and a test project to try out the client library connecting to Azure Storage Queues in our storage account.
>
> **[0:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=20)** Go to File, New, Project.
>
> **[0:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=25)** Select [[Windows]] as a platform, then select Console App, .NET Framework and click Next.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=32)** I'll give the project a name.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=34)** I'll call it AzureStorageQueues.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=38)** And then give the solution a name.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=41)** LearnAzureStorageQueues.
>
> **[0:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=43)** And click Create.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=46)** Once created, we need to add a few packages.
>
> **[0:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=49)** From our solution, select Manage NuGet Package for Solution.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=56)** Select Browse and search online for [[Microsoft]].Azure.Storage.Queue.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=64)** Select your project and click Install.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=68)** This will install the Azure storage client library and its dependencies.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=74)** Accept the license and this will take a couple of minutes to install.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=79)** The last package that we need to install is Microsoft.Azure.ConfigurationManager.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=87)** This package provides a class for passing a connecting string in a configuration file, regardless of where your application is running.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=97)** Accept the license.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=99)** Once the installation is completed, I will close the NuGet solution.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=104)** Next, let's determine our target environment.
>
> **[1:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=107)** We have two environment options to work with.
>
> **[1:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=109)** You can run your code against an Azure storage account in the cloud or you can run your code against the Azure Storage Emulator locally on your machine.
>
> **[1:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=117)** For this demo, I will run the code against my Azure storage account directly in the cloud.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=123)** In this case, you need to navigate to the Azure portal, locate your storage account.
>
> **[2:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=128)** In setting section of storage account, select access keys.
>
> **[2:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=133)** Your account access key appears, as well as the complete connection string for each key.
>
> **[2:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=138)** You need to find the connection string value under key1, or key2 and click the Copy button to copy the connection string.
>
> **[2:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=146)** Now, the best way to maintain your storage connection string is in a configuration file.
>
> **[2:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=151)** For this reason, we have installed the Configuration Manager package.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=154)** To configure the connection string, you need to open the App.config file from Solution Explorer in Visual Studio.
>
> **[2:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=161)** And then you need to add the contents of the appSettings element and then add the key by replacing the connection string with the value you copied from your storage account in the portal.
>
> **[2:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=173)** And then press Control + Shift + S to save.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=176)** Switch back to the Program.cs file and add the following four directives.
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=181)** The first one is the namespace for the console.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=184)** Then the ConfigurationManager to pull out the connection string from the App.config.
>
> **[3:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=189)** We also need to set the CloudStorageAccount and the Queue Storage type namespace.
>
> **[3:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=195)** Now we are ready to create our first queue.
>
> **[3:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=199)** All the code in this demo should be added to the main method of your application console.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=205)** First, we need to retrieve the storage account from the connection string.
>
> **[3:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=210)** Then we create the CloudQueueClient.
>
> **[3:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=214)** Then we set a reference to a queue and give it a name to be created.
>
> **[3:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=219)** And finally, we try to create the queue if it does not already exist.
>
> **[3:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=224)** Now, press Control + Shift + S to save.
>
> **[3:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=227)** Control + Shift + B to build.
>
> **[3:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=230)** And then hit the Start button.
>
> **[3:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=237)** Let's go to our Azure portal, go to our subscription, storage account, queues, and voila.
>
> **[4:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=249)** There is our queue out there in Azure on Azure Storage.
>
> **[4:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=253)** So what to do with the queue?
>
> **[4:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=254)** If we have one, we can talk to it.
>
> **[4:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=256)** We can send messages and receive messages.
>
> **[4:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=259)** To add the message from a queue, I will add the loop to my main method that will open my console when I run my application and wait for me to enter a new message.
>
> **[4:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=268)** This code will insert the message into an existing queue by first creating a CloudQueueMessage and then add the message by calling the AddMessage method.
>
> **[4:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=280)** Again, press Control + Shift + S to save, Control + Shift + B to build and then hit the Start button.
>
> **[4:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=289)** Now my console pop up and wait for me to add a new message.
>
> **[4:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=292)** Select Yes.
>
> **[4:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=296)** I'll enter the first message.
>
> **[4:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=298)** Hello, Welcome to [[LinkedIn]] Learning!
>
> **[5:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=300)** And I will hit yes again.
>
> **[5:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=305)** I will add a second message.
>
> **[5:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=309)** Hello, Welcome to Azure Storage Essential Training!
>
> **[5:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=312)** And then select no.
>
> **[5:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=316)** Let's go back to the Azure portal, select my queue and there you go.
>
> **[5:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=322)** The first message and the second one.
>
> **[5:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=324)** Every message has an ID, a text.
>
> **[5:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=328)** It tells us when it was added and notice its expiration date.
>
> **[5:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=333)** By default, every message can live up to seven days before it gets discarded.
>
> **[5:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=337)** It will not live forever.
>
> **[5:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=338)** You can, of course, increase or decrease its duration.
>
> **[5:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=342)** Let's now de-queue and delete a message by retrieving it first.
>
> **[5:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=346)** We call the GetMessage and then delete it by calling the DeleteMessage method.
>
> **[5:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=352)** Let's run our test.
>
> **[5:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=353)** Control + Shift + S, Control + Shift + B to build.
>
> **[5:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=358)** And then click Start.
>
> **[6:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=361)** This time, we'll not enter a message.
>
> **[6:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=363)** So I'll press no.
>
> **[6:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=367)** Switch back to the Azure portal and hit Refresh and you can see that the first message that we added got deleted.
>
> **[6:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=374)** Finally, we can delete a queue and all the messages contained in it by calling the delete method on the queue object.
>
> **[6:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=381)** I will add Delete method.
>
> **[6:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=383)** Again, press Control + Shift + S to save, Control + Shift + B to build and then hit the Start button.
>
> **[6:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=394)** Switch back to the Azure portal.
>
> **[6:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=397)** Hit Refresh and we can see that the LinkedIn queue got deleted.
>
> **[6:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=402)** And this then, we have managed to create a queue, add messages to the queue, delete a message and finally, delete the queue.
>
> **[6:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=409)** Now you are familiar with Azure Queue Storage using .NET.
>
> **[6:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/developing-with-queues?u=76281980&t=412)** You can find more information in the documentation and how to write code with other languages, such as [[Java]], Ruby and [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (17), [[Microsoft]] (2), [[LinkedIn]] (2), [[Windows]] (1), [[Java]] (1)
> **Tools:** azure portal (5), visual studio (2)
> **Prerequisites:** install (4), configure (1)
> **CLI Commands:** find (2), ruby (1), python (1)
> **UI Navigation:** go to (3), open the (1)
> **Env Vars:** net (3)
> **File Paths:** app.config (2)
> **Code Identifiers:** appsettings (1)


### 4. Secure Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing storage data](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=0)** - Storage security is a core element of [[Cloud Security]].
>
> **[0:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=3)** It's very important to know where your data is located and in which region.
>
> **[0:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=8)** As you start building your application, you need to fully understand and incorporate location, and access into your planning for the use of data life cycle within your organization.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=18)** So what is data sovereignty?
>
> **[0:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=20)** It is a concept that information which has been converted and stored in binary digital form, is subject to the laws of the country in which it's located.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=28)** Many of the current concern that surrounds data sovereignty relate to enforcing [[Privacy]] regulation, and preventing data that is stored in a foreign country or region from being subpoenaed by the host country or regions government.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=41)** In [[Microsoft Azure|Azure]], your data might be replicated within a selected geographic area for enhanced data durability in case of major data center disaster, and in some cases, will not be replicated outside it.
>
> **[0:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=54)** Azure operates in multiple geographies around the world.
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=57)** Azure geography is defined area of the world that contains at least one Azure region.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=63)** So an Azure region is an area within geography containing one or more data center.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=68)** Each Azure region is paired with another region within the same geography, forming a regional pair.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=74)** The exception is Southern Brazil data center, which is paired with a region outside its geography.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=80)** Across the region pairs, Azure serializes platform of these or planned maintenance, so that only one pair region is updated at a time.
>
> **[1:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=88)** In the event of an outage affecting multiple regions, one region in each pair will be prioritized for recovery.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=95)** So let me explain the benefits of paired regions.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=99)** The first benefit is physical isolation.
>
> **[1:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=101)** When possible, Azure services prefer at least 300 miles of separation between data center in regional pair.
>
> **[1:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=108)** Although, this isn't practical or possible in all geographies.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=112)** Physical data center separation reduces the likelihood of both regions being affected simultaneously as a result of natural disaster, civil unrest, power outages, or physical network outages.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=123)** Isolation is subject to the constraint within geography, such as geography size, power, and network infrastructure availability and regulations.
>
> **[2:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=133)** The second benefit is platform-provided replication.
>
> **[2:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=136)** Some services such as your redundant storage provide automatic replication to the paired region.
>
> **[2:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=142)** The third benefit ties to the region recovery order.
>
> **[2:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=145)** In the event of broad outage, recovery of one region is probably will arise out of every pair.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=150)** Application that are deployed across paired regions are guaranteed to have one of the region recovery with priority.
>
> **[2:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=157)** If an application is deployed across region that are not paired, the recovery might be delayed.
>
> **[2:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=162)** In the worst case, the chosen region might be the last to be recovered.
>
> **[2:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=167)** The fourth benefit is associated with sequential updates.
>
> **[2:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=170)** Planned Azure system updates are rolled out to paired region sequentially, not at the same time.
>
> **[2:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=175)** This helps minimize downtime, the effects of bugs, and virtual feeler in the right event of a bad update.
>
> **[3:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=182)** The last benefit is data residency.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=184)** To meet data residency requirements for tax and law enforcement jurisdiction purposes, a region resides within the same geography as its pair, except for Brazil South.
>
> **[3:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/securing-storage-data?u=76281980&t=194)** Once this has been understood, controls would need to be checked to ensure which actors have permissions to perform relevant data functions from different locations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Cloud Security]] (1), [[Privacy]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (2)
> **Speakers:** - storage (1)

#### [Storage security and authorization](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage provides a comprehensive set of security capabilities that together enables developers to build secure applications.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=7)** In this lesson, we will focus on storage encryption, access control for a storage account, and authorization options.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=14)** Let's see the security capabilities for Azure Storage at the high level.
>
> **[0:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=18)** By default, all data written to Azure Storage is automatically encrypted using Storage Service Encryption.
>
> **[0:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=24)** [[Microsoft Entra ID|Azure Active Directory]] and role-based access control are supported for Azure Storage authentication for both resource management operation and data operations.
>
> **[0:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=33)** You can assign RBAC roles scoped to the storage account to security principal, and use [[Microsoft Entra ID|Azure AD]] to authorize resource management operations such as key management.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=42)** And Azure AD integration is supported for data operation on the blob and queue services.
>
> **[0:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=47)** Data can be secured in transit between an application and Azure by using client-side encryption, HTTPS, or SMB3.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=56)** OS and data disk used by Azure virtual machine can be encrypted using Azure Disk Encryption.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=61)** Delegated access to the data objects in Azure Storage can be granted using shared access signature.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=68)** Every request made against a security resource in the blob, file or queue service must be authorized.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=74)** Authorization ensures that the resources in your storage account are accessible only when you want them to be, and only to those users or application to whom you grant access.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=83)** Let's see now the different options for authorizing requests to Azure Storage.
>
> **[1:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=88)** Azure Storage provides integration with Azure Active Directory for identity-based authorization of requests to the blob and queue services.
>
> **[1:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=96)** With Azure AD, you can use role-based access control to grant access to blob and queue resources to users, groups, or applications.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=105)** Azure file supports identity-based authorization over Server Message Block, SMB, through Azure Active Directory Domain Services and traditional [[Active Directory]].
>
> **[1:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=115)** You can use RBAC for fine-grain control over a client's access to Azure file resource in a storage account.
>
> **[2:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=121)** Shared Key authorization relies on your account access keys and other parameters to produce an encrypted signature string that is passed on via the request and the authorization header.
>
> **[2:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=132)** And shared access signature is a URI that grants restricted access right to Azure Storage resources.
>
> **[2:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=138)** You can provide a shared access signature to clients who should not be trusted with your storage account key, but to whom you wish to delegate access to certain storage account resources.
>
> **[2:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=148)** So by distributing a shared access signature URI with these clients, you can grant them access to a resource for a specified period, with a specified set of permissions.
>
> **[2:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=158)** You can also enable anonymous public read access to a container, and its blobs in Azure Blob Storage.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=164)** By doing so, you can grant read-only access to these resources without sharing your account key, and without requiring a shared access signature.
>
> **[2:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=173)** Public read access is best for scenarios where you want certain Blobs to always be available for anonymous read access.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=179)** Where possible, use authorizing application that access Azure Storage using Azure Active Directory.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-and-authorization?u=76281980&t=184)** It provides better security and ease of use over other authorization options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Microsoft Entra ID|Azure active directory]] (4), [[Microsoft Entra ID|Azure ad]] (3), [[Active Directory]] (1)
> **Env Vars:** rbac (2), uri (2), https (1), smb3 (1), smb (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Shared access signatures](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=0)** - [Instructor] Now we are diving deep into shared access signatures to see how to grant restricted access rights to our [[Microsoft Azure|Azure]] storage resources.
>
> **[0:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=8)** A shared access signature is a secure way to share your storage resources without compromising your account keys.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=15)** As a best practice, you should not share your storage account keys with external third party applications.
>
> **[0:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=21)** If these applications need access to your data, you will need to secure their connection without using storage account keys.
>
> **[0:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=29)** For our trust to the clients, you can use a shared access signature or SAS.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=34)** A shared access signature is a string that contains a security token that can be attached to a URI.
>
> **[0:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=40)** You use a shared access signature to delegate access to storage objects and specify constraints such are the permissions including the start time and the expiry time.
>
> **[0:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=51)** You can give a customer a shared access signature token, for example, so they can upload pictures to a file system in a blob storage.
>
> **[0:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=59)** Separately, you can give a web application permission to read those pictures.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=64)** In both cases, you allow only the access that the application needs to do the task.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=69)** You can set the protocol over which Azure Storage will accept the SAS.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=73)** You can use this option parameter to restrict access to clients using HTTPS.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=79)** Other option, you can also set the IP address or range of IP addresses from which Azure Storage will accept the shared access signature.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=87)** For example, you might specify a range of IP addresses belonging to your organization.
>
> **[1:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=93)** Your shared access signature gives you granular control over the type of access you grant to clients who have the SAS.
>
> **[1:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=100)** There are three different types of shared access signatures that you can create.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=105)** You can use a service-level shared access signature to allow access to specific resource in a storage account, blob, queue, table, or file service.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=114)** For example, you can use a service-level SAS to allow an application to retrieve a list of files in a file system or to download a file.
>
> **[2:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=124)** You can also create an account-level shared access signature to allow access to anything that a service-level shared access signature can allow plus additional resources and abilities, or the operations available via service-level SAS are also available via an account SAS.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=140)** For example, you can use an account-level shared access signature to allow the ability to create file shares.
>
> **[2:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=147)** Additionally, with the account-level SAS, you can delegate access to operations that apply to a given service such as Get/Set Service Properties and Get Service Stats.
>
> **[2:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=159)** You can also delegate access to read, write and delete operations on blob containers, tables, queues and file share that are not permitted with a service-level SAS.
>
> **[2:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=171)** You can create a user delegation SAS which is secured with [[Microsoft Entra ID|Azure Active Directory]] credentials.
>
> **[2:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=177)** This type of SAS is supported for Blob service only and can be used to grant access to containers and blobs.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=184)** With Azure Active Directory Authentication, you can now use Azure role-based access control framework to grant specific permissions to users, group and application down to the scope of an individual blob container or queue.
>
> **[3:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=198)** This capability extend the existing shared key and SAS token authorization mechanisms that I talked about earlier.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=205)** Azure ID Authentication is available for all general purpose and a blob storage account in all public regions and national clouds.
>
> **[3:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=213)** It provides built-in roles for authorizing access to blob and a queue data using [[Microsoft Entra ID|Azure AD]] and OAuth 2.0 access token.
>
> **[3:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=222)** Storage roles are provided including owner, contributor and reader.
>
> **[3:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=227)** With Azure AD, access to a resource is a two-step process.
>
> **[3:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=231)** First, the security principles identity is authenticated and an OAuth 2.0 token is returned.
>
> **[3:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=238)** Next, the token is passed as the part of request to the blob or queue service and use by the service to authorize access to specified resource.
>
> **[4:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=247)** Additionally, the role can be scoped from a management group to individual blob or queue.
>
> **[4:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=252)** Please know that when you assign a RBAC with Azure AD, it may take up to five minutes to propagate.
>
> **[4:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=259)** Let's see how to create a shared access signature in the Azure portal.
>
> **[4:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=263)** Please note that you can accomplish the same steps using Azure [[Powershell]] or [[CLI]].
>
> **[4:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=268)** This demo requires that you have a storage account with a blob container and an uploaded file.
>
> **[4:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=274)** Sign in to the Azure portal then locate the storage account that you want to work with and open it.
>
> **[4:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=280)** Drill down to the blob container, click the file you would like to provide access to and then select the Generate SAS tab.
>
> **[4:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=291)** You can configure the shared access signature with different set of parameters.
>
> **[4:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=295)** Signing key, I will choose Key 1 for signing.
>
> **[4:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=299)** Permissions, read.
>
> **[5:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=302)** Start an expiry date time.
>
> **[5:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=304)** Today's date to start and one week, for expiry.
>
> **[5:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=311)** Allowed protocol HTTPS, you can also set the allowed IP addresses.
>
> **[5:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=317)** Click the Generates SAS token and URL, Copy the blob SAS URL and paste the URL into the browser.
>
> **[5:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=326)** (keyboard clanking) And here is the blob file displays.
>
> **[5:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=331)** Let's return to the storage account, click on Shared access signature under Settings.
>
> **[5:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=340)** Notice you can configure a variety of services, resource types and permissions.
>
> **[5:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=345)** I will select service Blob and Object as a resource type.
>
> **[5:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=355)** Next, click Generate SAS and connection string.
>
> **[5:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=358)** You can see the connection string, SAS token and URL information that is provided.
>
> **[6:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/shared-access-signatures?u=76281980&t=365)** And that's all you need to know about shared access signatures to share your storage resources in a secure way without compromising your account keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft Entra ID|Azure ad]] (3), [[Microsoft Entra ID|Azure active directory]] (2), [[Powershell]] (1), [[CLI]] (1)
> **Env Vars:** sas (16), url (4), https (2), uri (1), rbac (1)
> **Analogies:** for example (4), such as (1)
> **Tools:** azure portal (2), powershell (1)
> **Definitions:** is a  (3)
> **Versions:** 2.0 (2)
> **UI Navigation:** select the (1), click on (1)
> **Prerequisites:** configure (2)

#### [Storage Service Encryption](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Storage automatically encrypts your data when persisting it to the cloud.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=5)** Azure Storage Service Encryption for data at [[Representational State Transfer (REST)|rest]] helps to protect your data to meet your organization's security and compliance commitments.
>
> **[0:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=13)** With this feature, the Azure Storage platform automatically encrypts your data before persisting it to Azure managed disks, Azure Blob, Queue, Table storage, or Azure Files and decrypts the data before retrieval.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=27)** All data written to the Azure Storage platform is encrypted through 256-bit Advanced Encryption Standard, one of the strongest block ciphers available today.
>
> **[0:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=36)** Storage Service Encryption is enabled for all new and existing storage accounts and cannot be disabled.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=42)** Because your data is secure by default, you don't need to modify your code or application to utilize Storage Service Encryption.
>
> **[0:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=50)** Managing encryption, encryption at rest, decryption and key management is transparent to users.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=56)** Storage Service Encryption supports both storage performance tiers, standard and premium storage accounts.
>
> **[1:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=63)** Additionally, Storage Service Encryption does not have a meaningful impact on the performance of Azure storage services.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=69)** And there is no additional cost for Azure storage encryption.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=73)** By default, Storage Service Encryption is managed by [[Microsoft]] keys.
>
> **[1:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=77)** You can rely on Microsoft-managed keys for the encryption of your storage account or you can manage encryption with your own keys known as customer-managed keys.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=87)** If you prefer, you can use the Azure Key Vault to manage your encryption keys.
>
> **[1:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=91)** With the Key Vault, you can create your own encryption keys and store them in a key vault or you can use Azure Key Vault's APIs to generate encryption keys.
>
> **[1:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=102)** Using custom keys gives you more flexibility and control when creating, disabling, auditing, or rotating defining access controls.
>
> **[1:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=111)** To use customer-managed keys with Storage Service Encryption, you can easily create a new key vault and key or you can use an existing key vault and key.
>
> **[2:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=120)** The storage account and key vault must be in the same region but they can be in different subscriptions.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=126)** Now, if you choose to manage encryption with your own keys, you have two options.
>
> **[2:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=131)** The first option, you can specify a customer-managed key to use for encrypting and decrypting all data in the storage account.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=139)** A customer-managed key is used to encrypt all data in all services in your storage account.
>
> **[2:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=145)** Customer-managed keys uses Azure Key Vault that provides highly available and scalable secure storage for RSA cryptographic keys, baked by FIPS 140 level two validated [[Hardware]] security modules.
>
> **[2:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=158)** In the second option, you can specify a customer-provided key on Blob Storage operations.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=164)** Customer-provided keys allow you to pass an encryption key as part of read or write operation to storage service using blob APIs.
>
> **[2:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=173)** A client making a read or write request against Blob Storage can include an encryption key on the request for granular control over how blob data is encrypted and decrypted.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=184)** Microsoft just recently introduced encryption scopes for Blob Storage.
>
> **[3:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=189)** With the new encryption scopes option, you can provision multiple encryption keys in a storage account for blobs.
>
> **[3:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=196)** Previously, customers using a single storage account for multi-tenancy scenarios were limited to using a single account-scoped encryption key for all the data in the account.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=207)** With encryption scopes, you can now provision multiple encryption keys and choose to apply the encryption scope either at the container level or at the blob level.
>
> **[3:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=217)** The key that protects an encryption scope may be easily a Microsoft-managed key or a customer-managed key in Azure Key Vault.
>
> **[3:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=224)** You can choose to enable automatic rotation of a customer-managed key that protects encryption scope.
>
> **[3:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=230)** When you generate a new version of the key in your Key Vault, Azure Storage will automatically update the version of the key that is protecting the encryption scope within a day.
>
> **[4:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=240)** You can leverage Storage Service Encryption and managed keys to protect your data and meet your organization's security and compliance requirements.
>
> **[4:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-service-encryption?u=76281980&t=249)** Learn more about encryption scope for Blob Storage in the documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Microsoft]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Hardware]] (1)
> **Env Vars:** rsa (1), fips (1)
> **Documentation:** the documentation (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Blob storage access policies](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=0)** - [Instructor] Data Recovery and Disposal like Data Reclassification is an essential aspect of managing the data assets of your organization.
>
> **[0:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=8)** The principles for data recovery and disposal are defined by a data retention policy and enforced on the same manner as data reclassification.
>
> **[0:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=17)** These tasks are typically performed by the custodian and administrator roles as a collaborative task.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=23)** Most organizations that do not have a clearly defined data retention policy tend to use a default keep everything retention policy.
>
> **[0:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=31)** However, this pose additional risks in a [[Cloud Services]] scenarios.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=35)** For example, a data retention policy for cloud service providers can be considered as for the duration of the subscription.
>
> **[0:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=43)** Meaning as long as the service is paid for the data is retained.
>
> **[0:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=47)** Such a pay for retention agreement might not address corporate or regularity retention policies.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=53)** A data retention policy should address the required regularity and compliance requirements.
>
> **[0:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=58)** And corporate legal retention requirements.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=60)** Classified data might provoke questions about retention duration and exception for data that has been stored with the provider.
>
> **[1:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=67)** Although such question, most likely pertain to data that has not been classified correctly.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=73)** [[Data Classification]] rules that pertain to data retention must be addressed when moving to the cloud and that cloud solution can help mitigate risk.
>
> **[1:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=81)** Some data protection technologies such as Encryption, Rights Management, and Data Loss Prevention solutions can help mitigate cloud risks.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=90)** The answer to data recovery and disposal for organizations is immutable storage for [[Microsoft Azure|Azure]] Blob storage.
>
> **[1:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=96)** Immutable storage for Azure Blob storage enables you to store business critical data objects in a WORM, write once, read many state.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=105)** This state makes the data not erasable and non-modifiable for a user specified interval.
>
> **[1:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=111)** For the duration of the retention interval, Blobs can be created and read, but cannot be modified or deleted.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=118)** Immutable storage is available for general-purpose v1/v2 under Blob storage accounts in all Azure regions.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=126)** The immutable storage provides support for a number of important features.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=130)** The first of these features is Time-Based the Retention Policy support.
>
> **[2:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=134)** It allows users to set policies to store data for a specified interval.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=139)** When a time-based retention policy is set Blobs can be created and read, but not modified or deleted.
>
> **[2:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=146)** After the retention period has expired, Blobs can be deleted, but not overwritten.
>
> **[2:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=151)** When a time-based retention policy is applied to a container all Blobs in the container will stay in the immutable state for the duration of the effective retention period.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=160)** The second feature is Legal Hold Policy support.
>
> **[2:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=163)** When the retention interval is not known, users can set legal holds to store data immutably until the legal hold is cleared.
>
> **[2:51](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=171)** When a legal hold is set, Blobs can be created and read, but not modified or deleted.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=176)** Each legal hold is associated with a user-defined alphanumeric tag that is used as an identifier string, such as case ID, event name et cetera.
>
> **[3:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=187)** Other Immutable Storage Features that you should know about are support for all Blob tiers.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=192)** WORM policies are independent of the Azure Block Storage tier and apply to all the tiers.
>
> **[3:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=197)** Hot, cool, and archive.
>
> **[3:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=200)** You can transition data to the most cost-optimized tier for the workloads, while maintaining data immutability.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=207)** Another feature is container-level configuration.
>
> **[3:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=209)** You can configure time-based retention policies, and legal hold tags at the container-level.
>
> **[3:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=215)** Last but not least, there is support for audit logging.
>
> **[3:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=218)** Each container includes an audit log, which displays up to five time-based retention commands for lock time-based retention policies.
>
> **[3:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=226)** The audit log is retained for the lifetime of the container.
>
> **[3:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=230)** The Azure Activity log shows a comprehensive log of all the control plane activities.
>
> **[3:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=235)** It is your responsibility to store those logs persistently as might be required for regularity or other purposes.
>
> **[4:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=242)** A container can have both a legal hold and a time-based retention policy at the same time.
>
> **[4:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=247)** All the Blobs and that container stay in the immutable state until all legal holds are cleared even if their effective retention period has expired.
>
> **[4:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=255)** Conversely, a Blob stays in immutable state until the effective retention period expires even though all legal holds have been cleared.
>
> **[4:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=264)** Let's now look at how to create a storage access policy for Blobs in the Azure portal.
>
> **[4:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=270)** Please note that you can accomplish the same steps using Azure [[Powershell]] or [[CLI]].
>
> **[4:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=274)** This then require that you have a storage account with a Blob Container.
>
> **[4:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=278)** In the Azure portal, navigate your Storage Account, and then to the Blob Container.
>
> **[4:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=286)** Under settings, select Access Policy.
>
> **[4:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=289)** Review the two policies, Stored access policy and Immutable Blob storage.
>
> **[4:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=295)** Under Stored access policy, click Add policy.
>
> **[4:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=299)** Create a policy with Read at this permissions and usable for a restricted period of time.
>
> **[5:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=311)** And then it click Okay to create the policy.
>
> **[5:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=314)** Under immutable Blob storage, click Add policy.
>
> **[5:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=318)** You can see the two policy types, legal hold and time-based retention.
>
> **[5:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=323)** I'll create a policy on time-based retention for 30 days.
>
> **[5:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=329)** And then click Okay to create the policy.
>
> **[5:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=332)** Finally be sure to save your changes.
>
> **[5:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=337)** Failure to maintain a data retention policy could mean data loss or failure to comply with regularity and legal discovery.
>
> **[5:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=344)** Storage access policies, and Blob immutable storage help you to meet those requirements.
>
> **[5:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/blob-storage-access-policies?u=76281980&t=349)** For a more thorough look, consider checking the documentation and how to set and manage immutability policies for Blob storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Cloud Services]] (1), [[Data Classification]] (1), [[Powershell]] (1), [[CLI]] (1)
> **Env Vars:** worm (2), cli (1)
> **Tools:** azure portal (2), powershell (1)
> **Analogies:** such as (2), for example (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)

#### [Storage security best practices](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=0)** - [Instructor] I am sure you would agree that [[Microsoft Azure|Azure]] storage security best practices will minimize risks to your environment.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=7)** When you use Shared Access Signatures in your applications, you should be aware of two potential risks.
>
> **[0:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=13)** The first one, if a SAS is compromised, it can be used by anyone who obtains it.
>
> **[0:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=19)** If a SAS provided to a client application expires, and the application is unable to retrieve a new SAS from your service, then the application functionality may be hindered.
>
> **[0:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=29)** There are multiple recommendation that you should be aware of when using Shared Access Signatures that can help mitigate risks.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=38)** Always use HTTPS to create or distribute a Shared Access Signature.
>
> **[0:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=44)** If a SAS is passed over HTTP and intercepted, an attacker performing a man-in-the-middle attack can read the SAS and then use it just as the intended user could have.
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=57)** Reference stored access policies where possible.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=60)** Stored access policies give you the option to revoke permissions without having to regenerate your storage account keys.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=68)** Use near-term expiration times on an ad-hoc SAS.
>
> **[1:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=72)** This practice is especially important if you cannot reference a stored access policy that I discussed in the previous slide.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=79)** In this way, even if SAS is compromised, it's valid only for a short time.
>
> **[1:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=85)** Have clients automatically renew the SAS if necessary.
>
> **[1:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=88)** Clients should renew the SAS well before the expiration in order to allow time for authorize if the service providing the SAS is unavailable.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=97)** If you have a client that is routinely making a request via SAS, then the possibility of expiration comes into play.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=105)** Be careful with SAS start time.
>
> **[1:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=107)** If you set the start time for a SAS to now, then due to clock skew, differences in current time according to different machines, failure may be observed intermittently for the first few minutes.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=119)** In general, set the start time to be at least 15 minutes in the past.
>
> **[2:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=124)** The same generally applies to expiry time as well.
>
> **[2:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=127)** Remember that you may observe up to 15 minutes of clock skew in either direction on any request.
>
> **[2:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=134)** Be specific with the resource to be accessed.
>
> **[2:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=137)** A security best practice is to provide a user with the minimum required privileges, known as least privileged.
>
> **[2:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=144)** If a user only needs read access to a single entity, then grant them read access to that single entity and not read, write, delete access to all entities.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=154)** Understand that your account will be billed for any usage, including the done with Shared Access Signatures.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=160)** If you provide write access to a blob, a user may choose to upload a 200-gigabyte blob.
>
> **[2:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=166)** If you have given them read access as well, they may choose to download it 10 times, including two terabyte and egress costs for you.
>
> **[2:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=174)** Use short-lived SAS to reduce this threat.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=176)** Validate data written using SAS.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=179)** When a client application writes data to your storage account, keep in mind that there can be problems with the data.
>
> **[3:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=186)** If your application requires the data be validated or authorized before it's ready to use, you should perform this validation after the data is written and before it's used by your application.
>
> **[3:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=197)** Don't assume SAS is always the correct choice.
>
> **[3:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=200)** Sometimes the risks associated with a particular operation against your storage account outweigh the benefits of SAS.
>
> **[3:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=208)** For such operations, create a middle tier service that writes to your storage account after performing business rule validation, authentication and auditing.
>
> **[3:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=218)** Use storage analytics to monitor your application.
>
> **[3:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=221)** You can use logging and metrics to observe any spikes in authentication failures due to an outage in your SAS provider service or to the accidental removal of a stored access policy.
>
> **[3:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=232)** Last but not least, prevent shared key authorization for an Azure storage account.
>
> **[3:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=238)** You can now disable access keys for storage accounts.
>
> **[4:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=241)** So any requests to accounts that are authorized with shared key, including Shared Access Signature will be denied.
>
> **[4:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=248)** Suppose rogue admins left the company but still have the access keys at hand.
>
> **[4:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=253)** They cannot use them for inappropriate authentication against public-exposed storage accounts after their [[Microsoft Entra ID|Azure AD]] accounts have been disabled.
>
> **[4:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=261)** For many cases where storage accounts are publicly exposed, this might be a good option because it forces users to properly authenticate with Azure AD accounts to get access to the data.
>
> **[4:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/storage-security-best-practices?u=76281980&t=273)** If companies do not understand these storage security best practices, they put their environment at risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Microsoft Entra ID|Azure ad]] (2)
> **Env Vars:** sas (18), https (1), http (1)
> **Warnings:** be aware (2), be careful (1), keep in mind (1)
> **Definitions:** known as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 5. Manage Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Storage Explorer](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=0)** - [Instructor] Managing data efficiently is important.
>
> **[0:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=3)** Let's look at the [[Microsoft Azure|Azure]] Storage Explorer to manage your storage accounts.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=7)** Azure Storage Explorer is a standalone application that makes it easy to work with Azure storage data on [[Windows]], macOS, and [[Linux]].
>
> **[0:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=16)** With storage Explorer you can access multiple accounts and subscription and manage all your storage content where you can create, delete, view, and edit your storage resources.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=28)** As a storage Explorer requires both management Azure Resource Manager and data layer permissions.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=34)** After you sign in to Azure first you need [[Microsoft Entra ID|Azure Active Directory]] permissions which gives you access to your storage account, the container in the account, and the data in the containers.
>
> **[0:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=45)** If you have permissions only at the data layer, consider choosing to sign in using [[Microsoft Entra ID|Azure AD]] option while attaching to a resource.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=53)** With the Storage Explorer, you can connect and manage your storage account in several ways.
>
> **[0:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=58)** The first option is connecting to storage accounts associated with Azure subscriptions.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=64)** You can also manage local storage by using the Azure Storage Emulator to work with local developments storage.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=71)** You can manage the storage resources that belong to another Azure subscription or that under National Azure clouds by using the storage accounts name, key, and storage endpoints.
>
> **[1:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=83)** You can also manage the storage resources that belong to another Azure subscription by using a shared access signature.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=90)** You can manage a specific storage service Blob container, queue, or files that belongs another Azure subscription by using shared access signature.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=99)** Finally, you can connect to Azure Cosmos DB account by using a connection string.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=105)** As mentioned in the previous slide storage Explorer lets you attach to a external storage account so that storage can be easily shared.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=114)** To create the connection you will need the storage account name and account key.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=119)** In the Azure portal you can find the account keys under the access keys.
>
> **[2:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=124)** It's very important to store your access keys securely for example, you can use Azure Key Vault.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=130)** We recommend regenerating your access keys regularly.
>
> **[2:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=133)** You are provided two access keys, key1 or key2 so that you can maintain connections using one key while regenerating the other.
>
> **[2:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=141)** When you regenerate your access keys you must update any Azure resources and application that access this storage account through the new keys there are several common Azure Storage Explorer tasks for this demonstration I will only do a basic storage account connection.
>
> **[2:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=158)** You also need to have an Azure storage account created first you need to download and install the Azure Storage Explorer after the installation launch the tool you can review the release notes and menu options.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=172)** At the time of this recording I'm using Version 1.19 always make sure to use the latest release for the first demo I will connect to an Azure subscription in a storage Explorer select manage accounts second icon top left this will take you to the account management panel the left pane now displays all the Azure accounts you have signed into I don't have any yet to connect to another account select add an account if you want to sign in into a National cloud or to an Azure Stack Hub, click on the subscription and then select which Azure cloud you want to use for Azure Stack Hub you want to select the custom environment and then select on manage custom environments once you have chosen your environment click the next button
>
> **[3:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=222)** and then sign in after you successfully sign end with the National account the account and the Azure subscription associated with that account are added to the left pane select the Azure subscription that you want to work with and then select open Explorer.
>
> **[3:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=238)** The left pane displays the store accounts associated with the selected Azure subscription now I will attach a National storage account first I need to access the Azure portal and then look for my storage account from storage account select access keys under settings and get the information about your keys to connect in store Explorer you will need the storage account name and key1 or key2 information in a storage Explorer, click, add an account then select storage account or service to attach an account and then select account name and key, click next give a descriptive name and then paste the account name in the account name text box and then paste the account key
>
> **[4:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=288)** the key one value from the Azure portal into the account key text box and then select next and connect.
>
> **[4:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=298)** You can verify if your storage account is available in the navigation pane expand your storage account and notice that all other services are available.
>
> **[5:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=306)** You can create a Blob container, file shares and so on next I will generate a SAS connection string for the account that I want to share.
>
> **[5:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=316)** This step requires that you have already added your Azure subscription to store Explorer in the storage exporter right click the storage account you want to be shared and then select get shared access signature specify the timeframe and permission that you want for the account and then click the recreate button next to the connection string text box select copy to copy it to your clipboard and then click close for the final demo we will attach to a storage account by using a SAS connection string that I created in a storage Explorer, click add an account choose storage account or service and then select connections string key or SAS, click next paste your connections string
>
> **[6:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=366)** into the connection string field I will paste my SAS that I copied from the previous demo notice the displaying field should populate click the next button Verify the information is correct and then select connect after the storage account has successfully been attached the storage account is displayed in the local and attach node with SAS appended to its name.
>
> **[6:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azure-storage-explorer?u=76281980&t=391)** Now you are familiar with Storage Explorer to manage Azure storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (30), [[Windows]] (1), [[Linux]] (1), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **Env Vars:** sas (5)
> **CLI Commands:** find (1), make (1), node (1)
> **Tools:** azure portal (3)
> **UI Navigation:** select the (2), click on (1)
> **Code Identifiers:** macos (1)
> **Versions:** version 1 (1)
> **Definitions:** is a  (1)

#### [Import/Export service](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=0)** - [Instructor] There is another [[Storage Management]] solution called the [[Microsoft Azure|Azure]] Import and Export service.
>
> **[0:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=6)** Azure Import and Export services is used to securely import large amounts of data to Azure Blob Storage and Azure Files by shipping disk drives to an Azure data center.
>
> **[0:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=17)** This service can also be used to transfer data from Azure Blob Storage to disk drives and ship it to your on-premises sites.
>
> **[0:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=24)** Data from one or more disk drives can be imported either to Azure Blob Storage or Azure Files.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=30)** With the Azure Import and Export service, you can also supply your own disk drives and transfer data yourself.
>
> **[0:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=37)** So what are the use cases for the Import and Export service?
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=41)** You can consider using Azure Import and Export service when uploading or downloading data over the network is too slow or getting additional network bandwidth is cost prohibitive.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=52)** Additional scenarios where this service would be useful, for example, you want to move and migrating large amounts of data to Azure quickly and cost effectively.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=61)** Or when you want to quickly send data to your customer sites for content distribution.
>
> **[1:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=66)** Or taking backups of your on-premises data to store in Azure Blob Storage.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=71)** Another use case is when you want to recover a large amount of data stored in a Blob Storage and have it delivered to your on-premises location.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=80)** Now let's look at the process of how to import and export jobs with the Azure Import and Export service.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=87)** To perform an import job, you first need to create an Azure Storage account, then identify the numbers of disks that you will need to accommodate all the data that you want to transfer.
>
> **[1:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=98)** You need to identify a computer that you will use to perform the data copy, attach physical disks that you will ship to the target Azure data center and then install the Import/Export tool.
>
> **[1:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=110)** You then run the Import/Export tool to copy the data, encrypt the drive with BitLocker and generate joiner files.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=118)** From the Azure portal, you create an import job, referencing the Azure storage account.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=123)** As part of the job definition, you specify the destination address representing the Azure region where the Azure storage account resides.
>
> **[2:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=131)** You ship the disk to the destination that you specified when creating the import job and then you update the job by providing the shipment tracking number.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=139)** Finally, once disks arrive at the destination, the Azure data center staff will carry out a data copy to the target Azure storage account and ship the disks back to you.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=150)** To transfer/export your data from Azure storage to hard disk drives and then ship to your on-premises site, you first need to identify the data in the Azure storage blobs that you intend to export.
>
> **[2:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=162)** Then identify the number of disks that you'll need to accommodate all the data you want to transfer.
>
> **[2:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=167)** From the Azure portal, you create an export job, referencing the Azure storage account.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=172)** As part of the job definition, you specify the blobs you want to export, the return address and your carrier account number.
>
> **[3:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=180)** [[Microsoft]] will ship your disks back to you after the export process is complete.
>
> **[3:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=185)** You ship the required number of disks to the Azure region hosting the storage account, then update the job by providing the shipment tracking number.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=193)** Once the disks arrive at the destination, Azure data center staff will carry out data copy from the storage account to the disks that you provided, encrypt the volume of the disk by using BitLocker and ship them back to you.
>
> **[3:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=206)** The BitLocker keys will be available in the Azure portal, allowing you to decrypt the content of the disk and copy them to your on-premises storage.
>
> **[3:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/import-export-service?u=76281980&t=214)** Now you are well versed with the import and export jobs to securely transfer large amounts of data to Azure storage with the Azure Import and Export service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (30), [[Storage Management]] (1), [[Microsoft]] (1)
> **Tools:** azure portal (3)
> **Prerequisites:** install (1), you'll need (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [AzCopy](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=0)** - [Instructor] Let's look at an alternative method for transferring data to [[Microsoft Azure|Azure]] storage with the AzCopy Tool.
>
> **[0:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=7)** AzCopy v10 is the next generation command-line utility for copying data to and from [[Microsoft Azure]] Blob and File storage, which offers a redesigned command-line interface and the new architecture for high-performance consistent data transfers.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=23)** Using AzCopy, you can copy data between a file system and a storage account or between storage accounts.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=30)** AzCopy is also available on [[Windows]], [[Linux]] and macOS.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=35)** Let's talk about the AzCopy new features.
>
> **[0:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=38)** You can synchronize a file system to Azure Blob or vice versa.
>
> **[0:42](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=42)** This is ideal for incremental copy scenarios.
>
> **[0:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=46)** AzCopy supports Azure Data Lake Storage Gen2 APIs.
>
> **[0:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=50)** You can also copy an entire account Blob service only to another account.
>
> **[0:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=55)** You can copy account to account with a new put from URL APIs, so no data transfer to the client is needed which makes the transfer faster.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=64)** You can list and remove files and Blobs in a given path.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=68)** This is just a small subset of the new features, you can find the entire list of features on [[GitHub]].
>
> **[1:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=75)** AzCopy supports two authentification options, [[Microsoft Entra ID|Azure Active Directory]] supported for Blob and Azure Data Like Storage, Gen2 services.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=84)** You need to use AzCopy with the log in parameter to sign in using Azure Active Directory.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=90)** The user should have the storage blob data contributor role assigned, to right to blob storage using Azure ID authentication.
>
> **[1:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=98)** The second option is shared access signature [[Tokens]] supported for Blob and Azure files.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=104)** You need to add the SAS token to the block path on the command line to use it.
>
> **[1:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=109)** To start with you need to have an Azure storage account with a blob container and a blob file.
>
> **[1:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=115)** I will be using the Azure ID authentication method Instead of SAS tokens.
>
> **[2:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=120)** You will also need to capture parameters in a text editor like notepad.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=125)** First, you need to download the Azcopy executable file to any directory on your computer.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=130)** You can use windows, Linux or mac OS, at the time of this recording, I'm using version 10.10 of the azcopy tool, always make sure to use the latest release.
>
> **[2:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=142)** Open your favorite command line tool such as windows terminal, or command prompt window, then to view the help you type azcopy dash dash help.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=154)** Scroll to the top of the help information and then read about the usage and available comments like copy, login, log out, remove and sync.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=164)** For more information about a particular comment, you type azcopy, copy dash dash help.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=172)** Scroll to the top of the help information and see the examples section.
>
> **[2:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=177)** We will be trying several of these examples.
>
> **[3:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=180)** For the first demo I will download a Blob from blob storage to my local machine.
>
> **[3:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=186)** Switch back to the command prompt and type azcopy login.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=192)** Sign in with my azure id account I am signed in successfully.
>
> **[3:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=198)** Open the azure portal, then drill down to the desire to blob and view the file properties.
>
> **[3:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=206)** Copy the URL information, this will be the source file, then locate a local destination directory on your computer, this would be the destination.
>
> **[3:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=216)** Next, build your command using your values, switch back to the command prompt and type azcopy copy, then the URL source and the local destination.
>
> **[3:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=227)** A file name is also required for the destination as you can see, the final job status is completed.
>
> **[3:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=236)** If you have errors, read them carefully and make corrections.
>
> **[4:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=241)** To verify I will browse to my local directory and see that the file was downloaded.
>
> **[4:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=247)** For the second demo I will upload files to azure blob storage, the source will be a local directory whose files and the destination would be the blog URL that are used in the previous demo.
>
> **[4:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=259)** Be sure to remove the file name just include the storage account and container name.
>
> **[4:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=264)** Now I will construct my command using my values and run the command.
>
> **[4:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=271)** As you can see the final job status is also completed.
>
> **[4:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=276)** I will switch to my Azure storage container and hit refresh, I can verify that my local file was copied successfully.
>
> **[4:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=284)** If you want to copy an entire directory including all the files, you can use the dash dash recursive switch to recur sub-directories.
>
> **[4:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=294)** As you can see, the job is also completed.
>
> **[4:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=298)** Switch to the Azure storage container and hit refresh.
>
> **[5:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=302)** You can see the entire directory was copied.
>
> **[5:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/azcopy?u=76281980&t=305)** I recommend reading the documentation to optimize the performance and throughput with azcopy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Windows]] (3), [[Linux]] (2), [[Microsoft Entra ID|Azure active directory]] (2), [[Tokens]] (2)
> **Tools:** command prompt (3), command line (2), github (1), windows terminal (1), azure portal (1)
> **Env Vars:** url (4), sas (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** switch to (2), open the (1)
> **Code Identifiers:** macos (1)
> **Versions:** version 10 (1)
> **Documentation:** the documentation (1)

#### [Using Azure storage SDK](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=0)** - [Instructor] I want to show you [[Microsoft Azure|Azure]] Storage SDK for Blob using .NET.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=5)** To follow along, you will need an Azure Storage account and optionally a Blob container created, Visual Studio 2019, or the free community edition and some familiarity of C-sharp knowledge for .NET.
>
> **[0:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=19)** Here I have Visual Studio 2019.
>
> **[0:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=22)** We can also use the free community edition.
>
> **[0:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=25)** Let's create a new solution and a test project to try out the SDK client library, connecting to Azure Blob Storage in our storage account.
>
> **[0:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=34)** The first step is to create a console application.
>
> **[0:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=37)** To do that click on file new project, Choose console app .NET framework from the create a new project window and then click on the next button.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=52)** Enter the project name, select the location, and then click on the create button to create the console application.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=60)** Once the project is created we need to add a few packages from our Solution Explorer right click and select manage nugget packages for solution.
>
> **[1:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=72)** Select browse and search online for [[Microsoft Azure]] Storage Blob.
>
> **[1:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=79)** You can also use Azure Storage File Shares or Storage Queues client library to do the same.
>
> **[1:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=85)** For this demo I will use the Storage Blob library check the project name option and then click on the install button.
>
> **[1:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=94)** Click on the accept button to accept the license.
>
> **[1:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=99)** The last package that we need is Microsoft Azure Configuration Manager.
>
> **[1:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=105)** This package provides a class of parsing connections link in a configuration file regardless of where your application is running.
>
> **[1:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=116)** Once the installation is completed, close the nugget solution.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=123)** Next you need to navigate to the Azure portal locate your storage account.
>
> **[2:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=128)** In the settings section of the storage account, select access keys, your account access keys appears as well as the complete connection string for each key.
>
> **[2:18](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=138)** You need to find the connections string value under key1 or key2 and click the copy button to copy the connection string.
>
> **[2:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=147)** Now the best way to maintain your storage connections string at any configuration file.
>
> **[2:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=151)** For this reason, we have installed the Configuration Manager Package.
>
> **[2:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=155)** To configure your connections string you need to open the app config file from Solution Explorer in Visual Studio.
>
> **[2:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=164)** And then you need to add the contents of the app settings element by replacing the connection string with the value you copied from your storage account in the portal.
>
> **[3:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=180)** And then press control + shift + S to save.
>
> **[3:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=185)** Now we are ready to talk to our search account in Azure.
>
> **[3:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=189)** Switch back to the program CS file, and then add the following six directives.
>
> **[3:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=194)** The first one, the namespace for the console.
>
> **[3:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=197)** The second namespace is to provide basic file and directory support.
>
> **[3:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=202)** Then a namespace to provide async process task.
>
> **[3:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=206)** The configuration manager namespace to put out the connection string from AppConfig.
>
> **[3:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=212)** We also need the [[Cloud Storage]] account and the Blob storage type namespaces.
>
> **[3:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=217)** Now we are ready to upload and download files from our Blob Storage.
>
> **[3:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=223)** We would create a process async method where the main code for this example will reside.
>
> **[3:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=228)** And then add an asynchonousy called the ProcessAsync method from main.
>
> **[3:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=234)** All the code of this demo should be added inside the ProcessAsync method of your application console.
>
> **[4:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=242)** First, we need to retrieve the storage account from the connection string to authenticate.
>
> **[4:07](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=247)** Then we create the cloud Blob Client that represents the Blob Storage endpoint for the storage account.
>
> **[4:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=255)** I'm also checking if the container does exist before I created it by using the create, if no exists async method.
>
> **[4:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=262)** This is preferable for a production environment.
>
> **[4:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=265)** The container name is set to azstorage-containers01.
>
> **[4:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=271)** Next, we will create a file in my local my documents folder to upload to a container.
>
> **[4:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=277)** The name of the text file will start with Quickstart_ plus random Guld value, which is appendant to the file name to ensure that it's unique.
>
> **[4:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=288)** I'm also adding this message to the text file and then adding console output messages by using console.writeline.
>
> **[4:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=298)** It then uploads the selected local file to the Blob by calling the upload from file async method.
>
> **[5:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=305)** Finally, I will download the Blob created previously to my local file system by using the download to file async method.
>
> **[5:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=314)** I am upending the string _downloaded before the text extension, so that I can see both file upload and download in my documents folder.
>
> **[5:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=324)** Now press Control + Shift + S to save, Control + Shift + B to build and then hit the start button.
>
> **[5:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=334)** And then press any key to exit the console.
>
> **[5:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=339)** Let's go to our Azure portal, go to our subscription storage account, containers and voila.
>
> **[5:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=348)** We can see that azstorage container01 is created and the Quickstart text file is uploaded.
>
> **[5:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=356)** Navigate to my documents for the locally and hit refresh.
>
> **[6:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=361)** We can see that the text file is downloaded.
>
> **[6:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=364)** Open the file and see that the message we edit previously is written to the text file.
>
> **[6:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/using-azure-storage-sdk?u=76281980&t=370)** If you want to learn how to write advanced code with other languages, such as [[Java]], Ruby, and [[PHP]] the documentation will point you in the right direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Microsoft Azure]] (2), [[Cloud Storage]] (1), [[Java]] (1), [[PHP]] (1)
> **UI Navigation:** click on (5), navigate to (2), open the (2), go to (2), select the (1)
> **Env Vars:** net (3), sdk (2), php (1)
> **Tools:** visual studio (3), azure portal (2)
> **CLI Commands:** find (1), ruby (1), php (1)
> **Prerequisites:** install (1), configure (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** download the (1)


### 6. Backup Azure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Protecting Azure file shares](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=0)** - [Narrator] We all know backing up our data is essential.
>
> **[0:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=4)** [[Microsoft Azure|Azure]] Backup is the Azure-based service you can use to backup or protect and restore your data in the [[Microsoft]] Cloud.
>
> **[0:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=11)** Azure Backup replaces your existing on premises or offsite backup solution with a cloud based solution that is consistent, secure and cost competitive.
>
> **[0:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=21)** Hybrid environments often require heterogeneous storage, some on premises and some in the cloud.
>
> **[0:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=28)** With Azure Backup, there is no cost for using on premises storage devices.
>
> **[0:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=33)** Azure Backup automatically allocates and manages backup storage and it is used as a pay as you use model so that you only pay for the storage you consume.
>
> **[0:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=43)** Azure Backup offers two types of replication to keep your storage data highly available.
>
> **[0:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=48)** locally redundant storage, NG redundant storage.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=52)** LRS replicates your data three times.
>
> **[0:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=55)** It creates three copies of your data in a storage scale unit in the data center.
>
> **[1:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=61)** All copies of the data exists within the same region.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=64)** GRS is the default and the recommended replication option.
>
> **[1:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=68)** GRS replicates your data to a secondary region and of course will cost more than LRS.
>
> **[1:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=74)** Azure Backup does not limit the amount of inbound or outbound data transfer or charge for the data that is transferred.
>
> **[1:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=82)** Data encryption allows for secure transmission and storage of your data in the cloud.
>
> **[1:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=87)** All backup data is encrypted by default.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=90)** You can use Azure Backup for short term and long term data retention.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=95)** For Azure Files Shares workload type, Azure Backup can retain your data for up to 10 years for long retention.
>
> **[1:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=103)** For Azure VM, Azure Backup can retain your data for up to 99 years with a limit of 9,999 recovery points per protected instance.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=114)** Azure Backup supports only 200 snapshots per file share limit at any given point in time.
>
> **[2:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=120)** This is the current restriction of the platform to make sure your snapshots are durable.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=125)** Now, the important point is the snapshot back up Azure Files is stored within the same storage account.
>
> **[2:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=132)** The snapshot is not transferred to the recovery services vault as we have with Azure VM backup today, you want to keep this in mind.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=140)** So what would happen if you deleted the share?
>
> **[2:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=143)** You use Soft-delete.
>
> **[2:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=144)** Soft-delete is a new feature that enables intermediate state.
>
> **[2:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=148)** Soft-delete state for the five shares when they are deleted accidentally or maliciously.
>
> **[2:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=154)** The Soft-delete feature is configurable at the storage account level but works only at the file share level.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=160)** In other words, when you enable Soft-delete at the storage account level then all the existing file shares as well as the newly created ones will be protected and obey this policy.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=172)** Soft-deletes acts like a recycle bin for your files shares.
>
> **[2:55](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=175)** Protecting your Azure Files Shares from accidental deletion.
>
> **[2:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=179)** Now, what if file share is deleted?
>
> **[3:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=181)** It transitions to a Soft-delete state in the form of a Soft-delete snapshot.
>
> **[3:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=186)** You get to configured how long Soft-delete data is recoverable before it is permanently erase.
>
> **[3:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=193)** You can also use Advanced Threat Protection to protect Azure Files, Azure Files Shares, Azure detects storage into, in addition to blob containers and Azure File Sync service.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=205)** For this you need to use Azure [[Microsoft Defender|Defender]] for storage account.
>
> **[3:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=209)** Enabled on your subscription under the pricing and setting page in Azure Security Center.
>
> **[3:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=215)** The price is two cents for 10,000 transactions, but what if you don't want to enable Advanced Threat Protection for all storage account in your subscription?
>
> **[3:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=225)** As an example, you might have development and test storage accounts and you want exclude those from Advanced Threat Protection.
>
> **[3:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-file-shares?u=76281980&t=233)** What you can do is to disabled Azure Defender for Storage accounts on the subscription level under the pricing and setting page in Security Center then enabled Azure Defender for Storage for the desired Storage account individually on the settings, security page of this Storage account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (24), [[Microsoft Defender|Defender]] (3), [[Microsoft]] (1)
> **Env Vars:** lrs (2), grs (2)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Backing up Azure file shares](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=0)** - Let's see how to back up [[Microsoft Azure|Azure]] File Shares.
>
> **[0:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=3)** At the high level, here are four steps to enable backup for Azure File Shares.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=9)** First, you create a storage account with a file share.
>
> **[0:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=13)** Next, you create a Recovery Services vault.
>
> **[0:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=16)** Then configure the file share back up.
>
> **[0:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=19)** And last, verify the file share backup.
>
> **[0:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=23)** In this demonstration, we will explore the backup-azure-file-shares in the Azure portal.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=27)** The first step is to create a storage account.
>
> **[0:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=30)** I have already done that.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=32)** In the Azure portal, search for your storage account, access your storage account, and then select File Shares, click Add File share, and give your new file share a name, and a quota After your file share is created, you need to upload the files.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=60)** The second step is to create the Recovery Services vaults In the Azure portal, type Recovery Services, and then click Recovery Services vaults.
>
> **[1:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=71)** Click Add, and then provide a name, subscription, resource group and location.
>
> **[1:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=86)** Select Review and Create, and then click Create.
>
> **[1:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=90)** It can take several minutes for a recovery services vault to be created.
>
> **[1:34](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=94)** Monitor the status notifications in the upper right-hand area of the portal.
>
> **[1:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=98)** And once your work is created, it appears in the list of recovery services vaults.
>
> **[1:44](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=104)** If after several minutes, the vault is not added, refresh your browser.
>
> **[1:49](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=109)** The third step is to configure file share backup.
>
> **[1:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=112)** Open your Recovery Services vaults, click Add Backup, and create a new backup instance.
>
> **[2:01](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=121)** From 'Where is your workload running?' dropdown menu, select Azure.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=126)** From 'What do you want to backup?' menu, select Azure file share.
>
> **[2:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=130)** Click Backup.
>
> **[2:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=132)** From the list of Storage Account, select your storage account and then click OK.
>
> **[2:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=137)** Azure Searches is the storage account for file shares that can be backed up.
>
> **[2:21](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=141)** If you configure the Azure file share, allow a little time for the file shares to be appeared.
>
> **[2:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=147)** From the File Shares to Backup section, click Add, and select one or more of the file shares you want to back up, and then click OK.
>
> **[2:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=157)** From the Backup Policy section, click Create A New Policy to edit the default backup policy.
>
> **[2:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=165)** Provide a descriptive name, backup schedule, and retention information: weekly, monthly, or yearly, and then click OK.
>
> **[2:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=177)** When you've finished configuring the backup, click Enable Backup.
>
> **[3:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=182)** In the last step, verify the file share backup.
>
> **[3:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=186)** From the Recovery Services vaults, select the backup items blade under Protected Items.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=192)** There is information on all backup items.
>
> **[3:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=195)** Select Azure Storage, Azure Files.
>
> **[3:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=200)** You can take on demand backup, restore files, or share and stop the backup.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=207)** Explore the backup policies blade under Manage.
>
> **[3:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=213)** You can add, delete and edit backup policies.
>
> **[3:38](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=218)** Explore the backup jobs blade under Monitoring.
>
> **[3:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=223)** Here, you can review the status of your backup jobs.
>
> **[3:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-azure-file-shares?u=76281980&t=227)** And that's how easy it is to backup your file shares with the Azure backup service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13)
> **Tools:** azure portal (3)
> **Prerequisites:** configure (3)
> **UI Navigation:** dropdown (1), select the (1)
> **Cross-References:** in the last (1)
> **Speakers:** - let (1)

#### [Protecting Azure Blob storage](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=0)** - We know that data is the most important asset for any organization.
>
> **[0:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=4)** Let's look at how to protect that data in [[Microsoft Azure|Azure]] Blob Storage.
>
> **[0:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=9)** [[Microsoft]] recently introduced a new solution called "Operational Backup for Azure Blobs."
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=15)** It is a managed local data protection solution that lets you protect your block blobs from various data loss scenarios like corruptions, blob deletions and accidental storage account deletion.
>
> **[0:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=27)** The data is stored locally within the source of storage account itself and can be recovered to a selected point in time whenever needed.
>
> **[0:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=35)** It provides a simple, secure, and cost effective means to protect your blobs.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=41)** It also integrates with backup center among other backup management capabilities to provide a single paint of glass that can help you govern, monitor, operate and analyze backups at scale.
>
> **[0:53](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=53)** So how does operational backup protection actually work?
>
> **[0:57](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=57)** It is configured and managed at the storage account level and applies to all block blobs within the storage account.
>
> **[1:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=64)** Backup for blobs is built up on the blob service point in time restore capability that allows you to restore a block data to ordinary state.
>
> **[1:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=73)** It also turns on soft delete.
>
> **[1:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=76)** If you have already enabled soft delete and specified the retention to be greater than that according to the backup policy, it will remain unchanged.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=84)** Versioning and change feed is also enabled for storage accounts that have been configured for operational backup.
>
> **[1:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=91)** When you configure operational backup on the storage blobs it also applies a delete lock on the storage account.
>
> **[1:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=97)** Please refer to the support matrix documentation to learn about the limitations.
>
> **[1:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=103)** Objects replication is a new capability for block blobs that lets you replicate your data from your blob container in one storage account to another storage account anywhere in Azure.
>
> **[1:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=114)** This capability on blocks in new set of common replication scenarios.
>
> **[1:59](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=119)** Users consume the data locally rather than issuing cross-region requests to minimize latency.
>
> **[2:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=125)** Computer clusters processes the same set of objects locally in different regions to increase efficiency.
>
> **[2:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=132)** Data is consolidated in a single location for processing analytics and then distribute it to [[Dashboards]] and your offices worldwide.
>
> **[2:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=139)** You can move your data to archive up the replication completion using life cycle management policies to minimize the cost.
>
> **[2:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=147)** Azure files does not have this native capability yet.
>
> **[2:30](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=150)** However, I have written a detailed article on how to replicate between two Azure file shares for disaster recovery.
>
> **[2:36](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=156)** You can check it on this URL.
>
> **[2:39](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=159)** Object application as in currency copies, block blobs in a container, according to rules that you configure.
>
> **[2:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=166)** The contents of the blob, any version associated with the blob and the blobs [[Metadata]] and properties are all copied from the source container to the destination container.
>
> **[2:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=176)** Objects replication requires that block version is enabled on both the source and destination accounts.
>
> **[3:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=182)** Objects publication does not support blob snapshots.
>
> **[3:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=185)** So any snapshot on a blob in the source account are not replicated to the destination account object.
>
> **[3:11](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=191)** Object replication is supported when the source and destination accounts are in the hot or cold tier.
>
> **[3:17](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=197)** However, object replication will fail if a blob in either the source or destination account has been moved to the archive tier.
>
> **[3:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=205)** Object replication does not support immutable blobs.
>
> **[3:28](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=208)** Write once, read many known as WORM state.
>
> **[3:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/protecting-azure-blob-storage?u=76281980&t=212)** If a source or destination container has a time based retention policy or legal hold, then object replication will fail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (1), [[Dashboards]] (1), [[Metadata]] (1)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** url (1), worm (1)
> **Prerequisites:** configure (2)
> **Speakers:** - we (1)

#### [Backing up and replication for Azure Blob storage](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=0)** - [Instructor] Let's see how to backup and replicate [[Microsoft Azure|Azure]] blobs.
>
> **[0:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=4)** At a high level, there are five steps to enable backup for Azure blobs storage.
>
> **[0:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=10)** First, you create a storage account with a container and a blob.
>
> **[0:14](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=14)** Next you create the backup vault.
>
> **[0:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=16)** The backup vault is a new resource that is used for backing up a new support workloads and is different from the already existing recovery services vault.
>
> **[0:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=26)** Then you grant to the backup vault, the storage account backup contributor permissions on the storage account level.
>
> **[0:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=32)** Because operational backup also protect the storage account from any accidental deletions by applying a backup on the delete clock.
>
> **[0:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=41)** Then create a backup policy.
>
> **[0:43](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=43)** The policy is essentially needed to specify the retention period only and not a schedule.
>
> **[0:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=48)** Because operational backup for blobs is continuous and nurture.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=52)** You don't need a schedule to perform backups.
>
> **[0:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=56)** And last you configure and enable backup for blobs.
>
> **[1:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=60)** In this demonstration, we will explore a backing up a blob storage in the Azure portal.
>
> **[1:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=66)** I have already done the first three steps.
>
> **[1:09](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=69)** I created a storage account with a container, created a backup vault and then assign the storage account backup contributor role to my backup vault on the storage account.
>
> **[1:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=80)** The next step is to create a backup policy and enabled backup.
>
> **[1:24](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=84)** In the Azure portal, type backup vault and the search box under services, select backup vaults and then select your backup vault.
>
> **[1:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=95)** In the overview blade, click add backup and the basic step choose Azure blobs, Azure storage as the data source type.
>
> **[1:46](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=106)** Click next to continue.
>
> **[1:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=108)** And the backup policy tab you can select or create a new backup policy that you want to use for the desired Azure blobs.
>
> **[1:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=118)** Give a policy name and then click next schedule and retention.
>
> **[2:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=123)** The default retention rule is 30 days.
>
> **[2:06](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=126)** At the time of this recording you can specify up to 360 days.
>
> **[2:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=133)** Click next to review and create, and then click create.
>
> **[2:20](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=140)** Once the policy is created.
>
> **[2:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=142)** Click next to continue and the data source tab, you need to select the storage accounts for which you want to configure protection for blobs.
>
> **[2:35](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=155)** You can choose multiple storage accounts at once.
>
> **[2:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=160)** As your backup will validate if the volt has sufficient permissions to allow configuring of backup on the selected storage accounts.
>
> **[2:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=167)** You need to wait for the validations to complete, which may take up to 30 seconds.
>
> **[2:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=172)** Once validations have succeeded, click next to continue.
>
> **[2:58](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=178)** In the review and configure tab review the backup policy and click configure backup.
>
> **[3:04](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=184)** Once you enabled backup all the blobs and the specified storage account will be protected using Azure backup.
>
> **[3:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=192)** At high level there are four steps to enable object replication for blobs.
>
> **[3:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=196)** First, you need to create two storage accounts and the same or different Azure region.
>
> **[3:22](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=202)** Accounts could be in the same or different Azure subscription as well.
>
> **[3:27](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=207)** You also need at least two containers in the source storage account and in the destination account.
>
> **[3:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=213)** You also need to enable blob versioning and change feed on the source account.
>
> **[3:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=217)** You need only blob versioning on the destination storage account.
>
> **[3:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=221)** And last, if you have access to both the source and destination storage accounts then you can configure the object replication policy on both accounts.
>
> **[3:50](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=230)** In this demonstration, we will explore object replication for blob storage in the Azure portal.
>
> **[3:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=236)** I have already created two storage accounts was two containers in the respective accounts.
>
> **[4:02](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=242)** Then next step is to enable object replication.
>
> **[4:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=245)** Navigate to the source storage account in the Azure portal.
>
> **[4:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=248)** Under blob service, select objects replication.
>
> **[4:13](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=253)** Select set up replication rules.
>
> **[4:16](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=256)** Select the destination subscription and destination storage account.
>
> **[4:23](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=263)** In the container pair details section.
>
> **[4:25](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=265)** Select the source container from the source account and a destination container for the destination account.
>
> **[4:32](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=272)** You can create up to 10 containers spares for a single replication policy.
>
> **[4:37](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=277)** Optionally, you can specify one or more filters to copy only blobs that match a prefix button.
>
> **[4:45](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=285)** For example, if you specify a prefix letter, a only blobs was named begins with that letter are replicated.
>
> **[4:54](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=294)** By default, the copy scope is set to copy only new objects to copy all objects in the container or to copy objects starting from the custom date and time.
>
> **[5:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=303)** Select the change link and configure the copy over scope for the container pair.
>
> **[5:08](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=308)** Click save.
>
> **[5:10](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=310)** Finally, select save and apply to create the application policy and start replicating your data.
>
> **[5:19](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=319)** After you have configured object replication, the actual port to display the replication policy and rules because a block blobs data is replicated as synchronously.
>
> **[5:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=329)** The source account and destination account are not immediately in sync.
>
> **[5:33](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=333)** There is currently no SLA or service level agreement and how long it takes to replicate data to the destination account.
>
> **[5:41](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=341)** You can check the replication status on the source blob to determine whether replication status is complete.
>
> **[5:48](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=348)** Once the application is completed, you can navigate to the destination storage account and see your data replicated.
>
> **[5:56](https://www.linkedin.com/learning/azure-storage-essential-training-2021/backing-up-and-replication-for-azure-blob-storage?u=76281980&t=356)** That's how you protect and backup data in Azure blob storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13)
> **Prerequisites:** configure (6), set up (1)
> **UI Navigation:** select the (3), navigate to (2)
> **Tools:** azure portal (4)
> **Env Vars:** sla (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning never stops](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=0)** - [Charbel] Congratulations on completing this course.
>
> **[0:03](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=3)** You made it to the end.
>
> **[0:05](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=5)** I would like to hear your feedback about this course so please feel free to reach out and connect with me on [[LinkedIn]].
>
> **[0:12](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=12)** You can also connect with me on my personal blog.
>
> **[0:15](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=15)** On my website, you can find a step-by-step guides around [[Microsoft Azure|Azure]] Storage, networking, hybrid scenarios and [[Cloud Security]].
>
> **[0:26](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=26)** You can also connect with me on Twitter.
>
> **[0:29](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=29)** Learning never stops.
>
> **[0:31](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=31)** To continue learning about Azure Storage and get guided access in a Sandbox environment, I highly recommend the following eight modules for the [[Microsoft]] Learn platform.
>
> **[0:40](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=40)** Finally, I recommend you stay up to date with the latest storage announcement on the [[Microsoft Azure]] site.
>
> **[0:47](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=47)** I hope this course has been informative for you and I would like to thank you for watching.
>
> **[0:52](https://www.linkedin.com/learning/azure-storage-essential-training-2021/learning-never-stops?u=76281980&t=52)** Until then, I wish you good health and success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[LinkedIn]] (1), [[Cloud Security]] (1), [[Microsoft]] (1), [[Microsoft Azure]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [charbel] (1)


## Instructor

- [[Charbel Nemnom]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Azure

## Path Context

### In [[Getting Started as an Azure Developer]]
← [[Building a Web Application on Microsoft Azure]] | **5 of 7** | [[Azure DevOps for Beginners]] →

## Appears In

- [[Getting Started as an Azure Developer]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure
- [[Azure Quick Tips for Developers]] — Microsoft Azure

---

[↑ Back to top](#)