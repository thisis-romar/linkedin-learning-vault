---
type: course
slug: azure-data-lake-for-developers
url: "https://www.linkedin.com/learning/azure-data-lake-for-developers"
duration_minutes: 71
duration: 1h 11m
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-17
---

# Azure Data Lake for Developers

> If there’s one thing that affects almost every aspect of our lives, it’s data. Personal data, demographic data, weather data, traffic data, and more—these days seemingly everything is analyzed using data. If you’re a developer, the amount of data being collected and used probably has you constantly asking two big questions: 1) How can you securely store this data, and 2) How can you do this withou

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers) | 1h 11m

## Instructor

- [[Carmel Eve]]

## Table of Contents

### Introduction

#### What is Azure Data Lake?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=0)** - [Carmel] In the past 10 years, our world has transformed.
>
> **[0:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=4)** The way that people interact has changed irreversibly, and the force that drives society's direction is the control and analysis of vast quantities of data.
>
> **[0:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=13)** The ability to work with and analyze data enables a whole world of possibilities, many of which we haven't even considered yet.
>
> **[0:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=22)** And I believe that our newfound ability to understand the world through data could be a driving force for real positive change.
>
> **[0:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=30)** But in order to utilize the power that is held in this data, we need to be able to store it, and this can be expensive.
>
> **[0:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=37)** Luckily, in recent years, Microsoft, along with other cloud providers, have brought new, more cost-effective storage options to the table.
>
> **[0:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=45)** Azure Data Lake is one of these.
>
> **[0:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=48)** Azure Data Lake provides you with enterprise-level scalability, reliability, and security, while still allowing smaller and fund-limited organizations to access these features.
>
> **[0:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=58)** I'm Carmel Eve.
>
> **[0:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=59)** I've been working with Azure for the past five years, and have used Azure Data Lake extensively to support secure and scalable data analysis.
>
> **[1:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=67)** So if you're ready to learn about Azure Data Lake, tune in to the rest of my course on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Code Keywords:** new, (1)
> **Speakers:** - [carmel] (1)

#### Prior knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=0)** - [Instructor] There are no firm prerequisites for this course.
>
> **[0:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=3)** We'll be covering the basics of both Azure Data Lake and Azure Blob Storage.
>
> **[0:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=8)** We'll be using a few different tools in this course.
>
> **[0:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=11)** The first is the Azure CLI, which is a command line tool that is used for management and access to Azure Services.
>
> **[0:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=18)** We'll also be using the .NET SDK.
>
> **[0:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=20)** Specifically, we'll be using C# to connect to Azure Data Lake and read and write data.
>
> **[0:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=26)** We'll also be using Azure Synapse.
>
> **[0:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=28)** Specifically, we'll be using Azure Synapse Notebooks, which rely on Apache Spark.
>
> **[0:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=33)** Spark is an analytics engine that is used for big data processing.
>
> **[0:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=37)** We'll also be using SQL Serverless, which is a feature of Azure Synapse, which allows you to query Data Lake using SQL like syntax.
>
> **[0:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=45)** However, I will assume that learners have some knowledge of the Azure space in general.
>
> **[0:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=50)** For example, I won't be running through the basics of how to use the Azure Portal.
>
> **[0:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=54)** It might be useful if you haven't used it before to spend some time creating and exploring some Azure resources prior to starting this course.
>
> **[1:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=63)** I will also assume that you have some experience working with data.
>
> **[1:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=67)** This doesn't need to be any deep analytical understanding, but some understanding of how data is used and secured in real world scenarios will help you get a lot more out of this course.
>
> **[1:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=78)** Overall, the main thing that you will need going into this course is an interest in learning more about Azure Data Lake and how it is used to store and secure data.
>
> **[1:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=87)** And with that in mind, let's take a deeper look at Azure Storage.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), cli (1), net (1), sdk (1)
> **Definitions:** is a  (2), is an  (2)
> **Tools:** command line (1), azure portal (1)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Azure Data Lake

#### Azure Storage overview
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=0)** - [Instructor] The umbrella of Azure storage combines five Azure services.
>
> **[0:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=4)** The first is Azure Blobs storage.
>
> **[0:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=7)** This service provides massively scalable storage for unstructured data.
>
> **[0:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=11)** Unstructured data is any data that isn't stored in the structured database format.
>
> **[0:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=17)** This can be anything, binary, text files, images, videos, et cetera.
>
> **[0:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=21)** Then we have Queue storage, which allows you to build up a reliable queue of messages.
>
> **[0:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=27)** These messages are generally used for cross component communication.
>
> **[0:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=31)** Azure Table storage provides support for storing structured data.
>
> **[0:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=35)** This is data which is in a structured database format.
>
> **[0:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=39)** Azure File storage provides Cloud-based file shares, which can be access from the Cloud or on premises.
>
> **[0:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=45)** Finally, Azure Disks provide managed storage for virtual machine disks.
>
> **[0:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=49)** The Azure Data Lake Gen 2 technology is built on top of Azure Blob storage and supports the majority of blob storage features.
>
> **[0:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=57)** It also provides many of the same benefits.
>
> **[1:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=60)** For example, one of the main advantages of Azure Blob storage and Azure storage as a whole, is cost.
>
> **[1:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=67)** Azure storage is an extremely cost-effective way of storing data.
>
> **[1:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=71)** For the first terabytes of storage, it costs only not $0.15, 0.13 Euros, 0.11 Pound per gigabyte per month.
>
> **[1:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=81)** Which means you can store a terabyte of data for only $150 a month.
>
> **[1:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=87)** Not only this, but blob storage also supports lifecycle management for your data.
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=93)** There are three tiers of access available for blob storage, hot, cool, and archive.
>
> **[1:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=98)** The hot tier is optimized for frequent data access and is the most expensive tier.
>
> **[1:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=104)** Once data is being accessed less regularly, it can be moved into a cool tier for reduced cost.
>
> **[1:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=109)** And finally, once the data no longer needs to be accessed at all, it can be archived.
>
> **[1:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=114)** Using these tiers you are able to further reduce the cost of long-term data storage.
>
> **[2:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=120)** Blob storage is also massively scalable.
>
> **[2:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=122)** The storage limit for blob storage account is the same as that for an Azure storage account as a whole.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=128)** This is assuming there's no data stored in the other services in the account.
>
> **[2:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=132)** This limit is a huge 50 pebibytes.
>
> **[2:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=136)** A pebibyte, by the way, is about 1.13 petabytes or two to the 50 bytes.
>
> **[2:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=142)** Azure storage also integrates with Azure Active Directory, which is Microsoft's authentication and authorization provider.
>
> **[2:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=149)** Azure Active Directory, or AAD, allows us to use role-based access control.
>
> **[2:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=155)** Where users are assigned permissions based on the active directory roles.
>
> **[2:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=159)** To control data and management, AAD provides you with a large degree of control and confidence in the security of your data.
>
> **[2:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=167)** Blobs also provide you with reliable storage for your data.
>
> **[2:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=171)** Data redundancy means creating a backup of your data.
>
> **[2:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=174)** So if something damages the current main copy, you're able to instead read from the backup.
>
> **[2:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=179)** There are four types of data redundancy to choose from.
>
> **[3:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=183)** Each coming with a slightly increased price tag.
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=186)** Each of these copies our data three times, but they vary on where these copies are stored.
>
> **[3:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=191)** Locally redundant storage copies your data three times within the same physical location.
>
> **[3:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=196)** This protects against for example, a power failure to a specific shelf within the data center, but not against a full data center failure.
>
> **[3:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=205)** This is the cheapest data replication option, but cannot provide a high degree of reliability.
>
> **[3:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=210)** So redundant storage copies your day through across three availability zones within the same geographical region.
>
> **[3:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=217)** An availability zone has separate power, cooling and networking.
>
> **[3:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=221)** This gives a higher level of protection against larger scale failure Geo Redundant storage copies your data three times locally in the primary region and three times locally in a secondary region.
>
> **[3:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=233)** This means that you're protected against full regional outages, alongside natural disasters and other large-scale events.
>
> **[4:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=240)** Finally is Geo Zone Redundant storage copies your data across three availability zones in your primary region and three times locally in a secondary region.
>
> **[4:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=249)** This is the highest level of durability, which is built into Azure storage.
>
> **[4:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=254)** Using these options, you have a large degree of control and flexibility around how much do your ability and availability you need for your data.
>
> **[4:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=262)** Finally, Azure Defender allows you to monitor potential security threats within your storage accounts.
>
> **[4:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=268)** When configured, it monitors for abnormal data access.
>
> **[4:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=272)** When anomalies are detected, this triggers alerts, which integrate with Azure security center, which is a centralized place for managing security across all your Azure infrastructure.
>
> **[4:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=282)** You can also send alerts via email or text message.
>
> **[4:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=286)** This allows you to quickly assess and respond to potential threats.
>
> **[4:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=290)** These alerts can include suspicious IP address access, access from an unusual location, anonymous access, suspected malware upload, large data extractions, unusual permissions access or updates, and many more.
>
> **[5:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=304)** So we can see that there are a huge amount of advantages to using Azure Storage.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), this, (1), from. (1), protected (1)
> **Versions:** 0.15 (1), 0.13 (1), 0.11 (1), 1.13 (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Env Vars:** aad (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### What does ADLS add?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=0)** - [Instructor] Now let's talk about the additional functionality that Azure Data Lake unlocks.
>
> **[0:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=5)** The first, and in some ways, the feature that underpins all the others is the ability to support a hierarchical namespace.
>
> **[0:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=12)** Hierarchal namespacing means storing data in a file-like structure, as shown here.
>
> **[0:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=17)** As you can see, this is similar to that seen in a File Explorer on a regular computer.
>
> **[0:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=23)** We'll talk about this in a bit more detail shortly, but this gives us improved performance of directory managed operations, which allows us to better support many large-scale analytical engines.
>
> **[0:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=35)** It gives us improved query performance via data partitioning.
>
> **[0:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=39)** It allows us more ease in file and data management.
>
> **[0:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=43)** And finally, it gives us the ability to silo data by security boundaries.
>
> **[0:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=48)** Alongside support for hierarchical namespace, Azure Data Lake provides you with the ability to use access control lists.
>
> **[0:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=56)** Access control lists allow you to define POSIX-style permissions where users or groups are assigned read or write access to files and folders.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=65)** This means you can build up an incredibly fine grain permissions model for the files and folders within your Data Lake.
>
> **[1:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=72)** Finally, Azure Data Lake gives you the ability to access your data using a new driver, the Azure Blob File System Driver.
>
> **[1:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=80)** This is part of Apache Hadoop.
>
> **[1:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=82)** This driver is optimized for big data analytics and can be accessed using REST APIs.
>
> **[1:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=89)** These additional features allow you to build up Enterprise Scale Data Lakes which can support high throughput queries and analysis.
>
> **[1:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=97)** It also means that you can have an extremely complex security model where we can limit permissions to the very minimum that groups and applications require.
>
> **[1:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=106)** This follows a least privileged permissions model, which we'll cover in more detail later.
>
> **[1:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=112)** Alongside the REST API is the Blob System Driver.
>
> **[1:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=115)** Data can be accessed using the Azure Blob Storage Software Development Kit, or SDK.
>
> **[2:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=121)** This SDK provides support for buffered reading and writing and automatic retry for transient failures.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=128)** We'll see some examples of using this SDK later on in this course.
>
> **[2:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=132)** The facts that you can use the same SDK to access both Blob Storage and Azure Data Lake means the applications that have been using Standard Blob Storage can easily be migrated to ADLS.
>
> **[2:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=144)** There is also an additional SDK that is used to manage the features which are specific to Azure Data Lake.
>
> **[2:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=150)** For example, managing access control lists.
>
> **[2:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=153)** Finally, it's worth mentioning that all this additional functionality is available at minimal extra cost.
>
> **[2:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=160)** The cost of storing the data in Azure Data Lake is exactly the same as storing data in Azure Blob Storage.
>
> **[2:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=166)** There is a slightly increased transactional cost for data access, but often, this increased cost also has to be weighed against the fewer transactions which are required due to the increased query efficiency.
>
> **[2:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=179)** So, overall, Azure Data Lake provides us with the ability to create Enterprise Scale Secure Data Lakes.
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=186)** And it does this while still providing many of the same benefits of Azure Blob Storage, all at minimal extra cost.

> [!info]- Semantic Content
>
> **Env Vars:** sdk (5), rest (2), posix (1), api (1), adls (1)
> **Code Keywords:** finally, (3), let (1), require (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### Creating a data lake using the portal
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=0)** - [Instructor] Now let's run through a quick example of how to create a new Azure data lake using the Azure portal.
>
> **[0:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=6)** Here I am on the home screen for the Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=9)** This is the screen that you hit when you first log in.
>
> **[0:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=12)** You can see that there's a creative resource button in the top left.
>
> **[0:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=16)** And if I click on that, we have the option of creating all kinds of Azure resources.
>
> **[0:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=21)** Now we can use this search bar to search for a specific resource, or we can drill down into different types of resources.
>
> **[0:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=29)** However, we can also see that there is a list of popular products and sure enough, Azure storage accounts make the cut.
>
> **[0:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=37)** You'll remember that Azure data lake is built on top of Azure storage.
>
> **[0:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=41)** So this is the resource type that we need for creating our new data lake account.
>
> **[0:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=45)** From here, we can create a new resource, but there are also helpful links to the documentation for the service and relevant Microsoft Learn modules.
>
> **[0:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=54)** But for now, if I click on the main resource name, we are presented with a load of options.
>
> **[1:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=62)** We can choose to add the resource to an existing resource group.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=65)** Resource groups in Azure are a way of organizing groups of related resources to make managing the resources easier, or we can create a new one.
>
> **[1:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=74)** In this case, I'll create a new resource group that will contain our resource.
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=96)** We get that resource group a name.
>
> **[1:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=98)** This should be something that is related to the reason that we'll be using this resource and any the other resources that we create as part of the same exercise.
>
> **[1:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=106)** We'll then give our storage accounts a name, and this name has to be unique across all of Azure.
>
> **[1:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=119)** We choose a region that the account will live in.
>
> **[2:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=121)** Usually, it's good practice to keep your resources in regions which are close to where you'll be using them.
>
> **[2:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=127)** As I'm in the UK, I'll select UK South.
>
> **[2:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=130)** We then choose whether we want a standard, or premium account, which is optimized for low latency.
>
> **[2:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=136)** We'll just use the standard one for now.
>
> **[2:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=138)** Then we pick between the different redundancy options that we ran through earlier, which allows us to control the durability of our data.
>
> **[2:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=145)** We'll just use locally redundant storage for now.
>
> **[2:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=149)** Now at this point, we are still creating a standard blob storage account.
>
> **[2:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=154)** So if we head over to the advanced settings, we are again presented with a few options.
>
> **[2:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=159)** These include: whether to request secure transfer for API calls, whether to enable infrastructure encryption, whether to enable public access, whether to allow access using a storage account key, which means the account could be accessed using a key which gives users full access.
>
> **[2:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=175)** We'll discuss this later.
>
> **[2:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=177)** We can choose whether to enable further Azure Active Directory authorization for input of requests, and pick the minimum TLS version.
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=186)** However, the setting that we are looking for in this case is this one, enable hierarchical namespace.
>
> **[3:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=193)** This is the setting that converts our standard blob storage account into an Azure data lake account.
>
> **[3:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=199)** Ticking this box will enable all the functionality that is provided by Azure data lake that we ran through in the previous video.
>
> **[3:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=207)** And with that, we're done.
>
> **[3:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=208)** We can now review and create our Azure data lake account.
>
> **[3:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=213)** And once that deployment has finished, we can view our resource in the portal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), include: (1), public (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), tls (1)
> **Tools:** azure portal (2)
> **UI Navigation:** click on (2)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### Creating a data lake using the CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=0)** - [Instructor] We have now seen how to set up an Azure Data Lake account using the Azure Portal.
>
> **[0:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=5)** But if you want to produce predictable and repeatable environments by hand, doing things via the portal isn't reliable, and even more than this, there is no way to automate deployments via the portal.
>
> **[0:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=18)** So in order to integrate with continuous deployment systems, we need another option.
>
> **[0:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=23)** This is where the Azure CLI comes in.
>
> **[0:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=25)** The Azure CLI is a cross-platform command line interface that allows you to manage Azure resources.
>
> **[0:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=32)** You have the option to install the CLI on Windows, Mac or Linux.
>
> **[0:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=37)** This can be done via the Microsoft website.
>
> **[0:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=39)** Or you can run it using Azure Cloud Shell, which is an in-browser tool.
>
> **[0:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=44)** You also have the option of running it in a Docker container.
>
> **[0:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=47)** Whichever option you choose, you'll first need to check that you are running the correct version of the CLI.
>
> **[0:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=53)** You do this using the az --version command.
>
> **[0:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=58)** For the following steps to work, you'll need to be running version 2.6.0 or later.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=65)** Once you have done this, you'll need to log in to the CLI.
>
> **[1:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=68)** You do this using the az login command and you'll be directed to a web page, which allows you to log in to your Microsoft account.
>
> **[1:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=76)** Once you have done this, you may want to set the Azure subscription that you want to deploy the resources into.
>
> **[1:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=82)** You do this using the az account set command, passing in the subscription ID.
>
> **[1:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=92)** Now that we've set up our account, let's create a resource group to deploy our Data Lake into.
>
> **[1:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=97)** We do this using the az group create command.
>
> **[1:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=101)** We give the group a name, and a location.
>
> **[1:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=106)** Like in the last example, we're creating a new resource group for this exercise and the name should reflect that.
>
> **[1:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=113)** Now let's create our Data Lake.
>
> **[1:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=115)** We do that using the az storage account create command.
>
> **[2:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=120)** We pass in the account name, the resource group that we want to deploy our resource into.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=128)** This character will allow me to start a new line.
>
> **[2:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=131)** We again give the resource a location.
>
> **[2:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=133)** We give it a SKU.
>
> **[2:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=134)** This parameter corresponds to the redundancy options that we discussed earlier.
>
> **[2:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=139)** We'll use locally redundant storage.
>
> **[2:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=142)** We specify the kind of storage account, StorageV1 has now been deprecated.
>
> **[2:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=147)** So again, at this point, we're just creating a standard Blob storage type account.
>
> **[2:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=152)** In order to create an Azure Data Lake account, we need to set the enable-hierarchical-namespace parameter to true.
>
> **[2:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=164)** Again, setting this parameter to true will enable all of the features specific to Azure Data Lake.
>
> **[2:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=169)** Now, once our deployment is finished, let's head back over to the portal, and go to our resource groups.
>
> **[2:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=175)** We can see that our new resource group has been created.
>
> **[2:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=179)** And inside of our resource group, here's our newly created Data Lake account.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (3), interface (1), pass (1)
> **CLI Commands:** az (5), docker (1)
> **Env Vars:** cli (5), sku (1)
> **Prerequisites:** set up (2), you'll need (2), install (1)
> **Versions:** version 2 (1), 6.0 (1)
> **Cross-References:** in the last (1), we discussed (1)
> **Tools:** azure portal (1), command line (1)
> **Definitions:** is a  (1), is an  (1)


### 2. Hierarchical Namespaces

#### What is a hierarchical namespace?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=0)** - [Instructor] As we touched on earlier, one of the main differences between Azure Data Lake and standard blob storage is the ability to use a hierarchical namespace, but you may be thinking what exactly is a hierarchical namespace?
>
> **[0:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=14)** These namespaces allow you to store your files in folders and sub folders, similar to this example.
>
> **[0:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=20)** These directories of folders and sub folders are similar to that's of a computer file system, and this allows you to store your data in this familiar style of interface.
>
> **[0:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=30)** This is different to standard blob storage, but all the files are stored in a flat structure.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=36)** If I head over to the portal, we can see that I have set up an Azure storage account.
>
> **[0:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=41)** This account doesn't have hierarchical namespace enabled, so the data will be stored in standard blob storage.
>
> **[0:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=50)** If we head to the Containers tab and create a new container for our data, we can then create a new blob within our accounts and give that blob a name.
>
> **[1:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=67)** Now, slightly confusingly, we can get the blob storage view to behave as if it is using a file system.
>
> **[1:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=74)** We do this by uploading the blob to a folder or by giving the blob a name which contains forward slashes.
>
> **[1:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=84)** When you then navigate to that blob, the portal acts as though each slash denotes a folder.
>
> **[1:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=90)** However, in reality, these blobs are all just stored in a flat top-level structure.
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=96)** This means that though it looks like it should be possible, you are unable to enumerate a specific directory within a blob storage account.
>
> **[1:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=104)** When you retrieve a list of blobs using the Azure CLI or a software development kit, you cannot search for blobs within a specific folder.
>
> **[1:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=112)** You can only search for blobs that have names that start with a specific prefix.
>
> **[1:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=117)** This means that though it looks like the data is organized in the same way, blob storage is unable to support any directory-style operations, like for example, deleting all files and folders contained within a directory, without first listing and filtering all the individual blobs.
>
> **[2:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=135)** Enabling hierarchical namespace, and therefore converting from standard blob storage to Azure Data Lake, enables us to truly support file system type operations.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1)
> **Analogies:** similar to (2), for example (1)
> **Code Keywords:** interface (1)
> **Env Vars:** cli (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### What are the benefits of hierarchical namespaces?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=0)** - [Instructor] As we have seen, hierarchical namespace allows us to support file system type operations over our organized data.
>
> **[0:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=8)** This functionality allows us to: support directory managed operations, which enables better support for analytics engines, such as Spark, improve query performance via data partitioning, it allows us to more easily manage files and data and it also gives us the opportunity to silo data by security boundaries.
>
> **[0:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=29)** Directory-managed operations include things such as moving, renaming or deleting directories.
>
> **[0:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=35)** The crucial operation here when we talk about supporting large scale analytics engines, such as Apache Spark, is renaming.
>
> **[0:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=42)** These large scale analytics frameworks are used in a lot of big data processing and are an important use case for Azure Data Lake.
>
> **[0:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=50)** Because Azure Data Lakes supports real directory-like file management, it enables us to atomically rename files.
>
> **[0:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=57)** In Azure Blob Storage, when you rename a blob, you have to copy the entire contents of that blob to a new location.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=65)** In Azure Data Lake, however, you can simply rename a file or folder in a similar way to a standard computer file system.
>
> **[1:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=72)** This is particularly important when using these large-scale analytics frameworks because many of these frameworks, including Apache Spark, rely on creating a temporary version of a file whilst it's being written, and then renaming that file once the write has finished.
>
> **[1:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=88)** This means that each time these frameworks write a new file to Blob Storage, there is an additional copy operation required.
>
> **[1:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=95)** This can have a huge impact on performance.
>
> **[1:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=98)** In this way, Azure Data Lake allows us to achieve much better performance using these analytics engines.
>
> **[1:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=105)** Alongside increased performance for directory managed operations, Azure Data Lake also allows us to support better general query performance.
>
> **[1:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=114)** We do this via data partitioning.
>
> **[1:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=116)** Because we are now able to store our data within directories, we are able to organize these directories to best support the specific queries that we require.
>
> **[2:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=124)** For example, if we are storing time-based data and know that we need to be able to analyze data in day sized batches, we are able to partition the data by day, and therefore, more efficiently process the correct batch size.
>
> **[2:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=138)** Then, when we are querying the data, we're able to just enumerate the folder for that required day.
>
> **[2:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=144)** In this way, Azure Data Lake allows us a lot more flexibility in our data organization, and therefore, allows us to support improved query efficiency.
>
> **[2:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=154)** As well as this, the ability to store and manage our data using a file system-like interface means that our data management is simpler because we can more easily organize our data within our Data Lake.
>
> **[2:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=167)** This is also an interface which almost anyone has used a computer will be familiar with.
>
> **[2:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=171)** This means that any new users will more quickly be able to understand the technology.
>
> **[2:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=176)** Finally, we are able to silo our data by security boundaries.
>
> **[3:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=180)** Say, for example, we have three suppliers for our data and some users should only be able to access data from one of their suppliers.
>
> **[3:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=188)** In Azure Data Lake, we can separate the data by supplier, and then, using some of the functionality that we'll talk about shortly in the security section of this course, we can set up security boundaries around each supplier's data.
>
> **[3:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=201)** These boundaries can then be configured so that only the correct users have access.
>
> **[3:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=206)** In this way, Azure Data Lake allows us a lot more control over the separation and specific security requirements for different parts of our data landscape.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), require (1), this, (1), finally, (1)
> **Analogies:** such as (3), for example (2)
> **Definitions:** means that (3), is an  (1)
> **CLI Commands:** apache (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Hierarchical namespaces example
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=0)** - [Instructor] We are back in the portal, and I am currently viewing one of the Azure Data Lake accounts we created as part of chapter one.
>
> **[0:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=7)** There are four different services which correspond to the different services which Azure Storage defines.
>
> **[0:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=12)** We can see Azure File service, Azure Queue service, and Azure Table service, but wherein a regular storage account we'd have Azure Blob storage, we instead see Azure Data Lake storage.
>
> **[0:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=27)** If we navigate to this service, we can see that we currently don't have any containers to find.
>
> **[0:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=33)** Like in Azure Blob storage, Azure Data Lake expects top-level containers or file systems under which we create our directory structure.
>
> **[0:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=44)** If I create a container, again, I'll just call it data, then we can start building up our hierarchical namespace.
>
> **[0:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=52)** I mentioned earlier that one of the uses for a hierarchical namespace is partitioning of data.
>
> **[0:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=59)** So let's imagine we have orders data.
>
> **[1:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=64)** We'll first create an order sub-folder inside of our container.
>
> **[1:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=68)** We can imagine that we might also end up with invoices or other data that we also need to store, but must be separate from the orders themselves.
>
> **[1:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=77)** Under this directory, we might then just want to create a folder with all of the orders from 2020.
>
> **[1:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=88)** Under there we may just want the orders from January,
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=96)** and under that we can create a folder to store the orders from January 1st.
>
> **[1:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=105)** The files, which contain the order data from the 1st of January, will then be uploaded to this folder.
>
> **[1:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=111)** This could be individual JSON files per order or it could be partitioned data that is written out in an optimized file format.
>
> **[1:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=118)** It could even be word documents containing the orders, as we've covered Azure Data Lake supports files in any format.
>
> **[2:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=127)** Because we've set up this folder structure, we can now quickly narrow it down to the data that we are querying.
>
> **[2:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=132)** We could narrow it down to the year, month, set of days, or an individual day that we want to focus on.
>
> **[2:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=139)** Finally, if, for instance, we realized that we've made an error when we're setting up our file system, and the data that we're storing is actually for 21 not 2020, we can go back to the top-level of our file system and perform a rename of the top-level folder.
>
> **[2:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=161)** In normal Blob storage, this would then need to iterate through each individual Blob that started with the prefix 2020, and copy the data to a new location.
>
> **[2:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=170)** However, in Azure Data Lake this rename is an atomic rename that just updates the metadata associated with each file or folder, therefore, this is an incredibly performing operation.
>
> **[3:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=182)** We now have a hierarchical file system that can support optimized querying, large-scale analytics engines, and, as we'll see later, we have a huge amount of control and flexibility in the security model we want to implement.
>
> **[3:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=195)** Finally, let's use the fact that in Azure Data Lake we can easily delete a folder and all its children to clean up our resources.
>
> **[3:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=203)** Ready for our next chapter on how we read and write data within Azure Data Lake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), if, (1), delete (1)
> **Analogies:** imagine (2), for instance (1)
> **Cross-References:** go back to (1), next chapter (1)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)


### 3. Data Access in Azure Data Lake

#### What are the options for accessing data?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=0)** - [Instructor] We now need to look at how we actually read and write data within our Data Lake account.
>
> **[0:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=5)** We'll be running through three different options for data access.
>
> **[0:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=9)** The first is how to read and write data using the .NET Blob Storage Software Development Kit, or SDK.
>
> **[0:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=15)** This is a NuGet package which contains packaged up code that can be referenced from inside a C# project.
>
> **[0:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=22)** The NuGet package that we'll be using is called Azure Storage Blobs and can be used to connect either Azure Blob Storage or Azure Data Lake.
>
> **[0:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=30)** We'll run through an example of using this package to write data to the Data Lake that we created earlier and then how to read that data back out.
>
> **[0:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=39)** We'll then move on to data access using Azure Synapse.
>
> **[0:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=42)** Azure Synapse is an analytics service that provides a huge amount of functionality.
>
> **[0:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=47)** Azure Synapse pipelines are very similar to Azure data factory pipelines.
>
> **[0:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=51)** They allow us to chain together different operations.
>
> **[0:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=54)** These operations include copying data between different locations, calling out to data flows, which are a GUI-based tool for doing data manipulation.
>
> **[1:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=63)** We can also call out to Azure Synapse Notebooks, which we'll cover shortly, and create SQL databases and views over the data.
>
> **[1:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=71)** In this course, we're going to focus on two aspects of Azure Synapse; Notebooks and SQL Serverless.
>
> **[1:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=77)** Synapse Notebooks allow us to use notebook technology to read, manipulate and write data.
>
> **[1:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=83)** Notebook technology allows us to create cells of code that we can run individually to slowly build up complex data processing.
>
> **[1:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=91)** One of the most prevalent uses of notebook technology is Databricks in Spark, which is the large scale analytics engine we mentioned earlier.
>
> **[1:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=99)** Azure Synapse Notebooks allow us to call into a Spark cluster, carry out our data processing on the compute nodes in that cluster, and then write out our data to a Data Lake.
>
> **[1:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=109)** The other parts of Azure Synapse that we'll be looking at is SQL Serverless.
>
> **[1:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=113)** SQL Serverless is a way of using SQL-like syntax to query data without needing to have an actual SQL data warehouse.
>
> **[2:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=121)** Azure Synapse allows us to use SQL-like syntax to create SQL views over the data stored in our Data Lake.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=128)** As you can see, there are many different options for accessing data in Azure Data Lake.
>
> **[2:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=133)** This includes other SDKs in Python, Java and JavaScript.
>
> **[2:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=137)** But using the examples that we'll run through in this chapter, you will have a good understanding of the steps involved in data access, and going forward, you'll be able to expand on these principles in order to support your own use cases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), net (1), sdk (1), gui (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** python (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Using the Azure Blob Storage SDK
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=0)** - [Instructor] The first of our data access options that we're going to cover is using the Azure Blob Storage SDK to read and write data.
>
> **[0:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=7)** We're going to be using VS Code to write our code, which is free to download and install from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=15)** We will also need to install .NET, which can be done from dotnet.[microsoft.com](https://microsoft.com), both the SDK and the runtime.
>
> **[0:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=24)** In order to run C# code in Visual Studio, you'll also need the C# extension, which can be searched for in the Extensions tab.
>
> **[0:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=33)** First, we need to create a new C# project.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=36)** Here, we're going to create a console application so that we can easily run the code that we produce.
>
> **[0:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=42)** If we open a new terminal, let's first navigate to a folder which will contain our project.
>
> **[0:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=49)** This folder currently just contains data which we'll later upload to Azure Data Lake.
>
> **[0:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=55)** We can now create a new C# project.
>
> **[0:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=58)** To do this, we use dotnet new console and pass it a name with a folder for the project to live in.
>
> **[1:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=73)** Let's now open that folder in Visual Studio Code.
>
> **[1:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=80)** The first time we open a C# project in VS Code, it should prompt you that there are missing resources for your project and ask if you want to install them.
>
> **[1:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=88)** Here, you should select Yes.
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=93)** We can see that this has added a launch and a tasks JSON file.
>
> **[1:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=100)** If we now click on the Run and Debug tab and click this play button, we can see that Hello World is printed out to the console, as is instructed in our main program.
>
> **[1:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=117)** Next, we need to install the NuGet package which contains the Blob Storage SDK.
>
> **[2:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=123)** We do this by going back to the terminal.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=126)** We now use the dotnet add package and then search for the name of our package, which is Azure.Storage.Blobs.
>
> **[2:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=137)** If we go to our project file, we can now see that this package has been referenced.
>
> **[2:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=143)** In this example, we're just going to use one of the storage account keys to connect to Azure Data Lake.
>
> **[2:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=148)** In general, using the top-level access keys isn't a great way of connecting to the account because not only is there no way to restrict a user's access, this means that anyone that has access to the key has full read and write access to the account, but there is also no way of revoking the user's access without invalidating the key and revoking everyone's access.
>
> **[2:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=170)** But for now, we'll just use the simplest method.
>
> **[2:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=173)** So we need to set the account connectionString as an environment variable.
>
> **[2:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=177)** We do this in the launch.json file.
>
> **[3:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=184)** We can see here that we have a configuration.
>
> **[3:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=188)** This is a configuration which is used to run our program.
>
> **[3:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=191)** Inside of this configuration, we need to create an environment variables tag.
>
> **[3:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=198)** And inside of here, we can define our variables.
>
> **[3:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=206)** We now need to get the connectionString from the portal.
>
> **[3:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=209)** We do this using the Access Keys tab within our Azure Data Lake account.
>
> **[3:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=216)** We copy the key, and then, back in Visual Studio, we paste that value into our connectionString variable.
>
> **[3:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=226)** We are now ready to start using the SDK to connect to Azure Data Lake.
>
> **[3:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=236)** First, let's create an instance of the BlobServiceClient class.
>
> **[4:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=248)** This class will be used to connect to Azure Data Lake.
>
> **[4:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=254)** We also need to tell our program that we are using Azure Storage Blob's NuGet package.
>
> **[4:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=260)** This class is also expecting to be passed in a connectionString, so we need to retrieve that from our environment variables.
>
> **[4:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=276)** Remember that our variable was just called connectionString.
>
> **[4:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=280)** We now pass that into the client.
>
> **[4:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=289)** Using our BlobServiceClient, we can now get a reference to a specific container within our account
>
> **[5:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=301)** by passing in the name of the container that we want to get a reference to.
>
> **[5:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=305)** Remember our container is just called data.
>
> **[5:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=307)** Using our containerClient, we now want to get a reference to a specific blob within that container.
>
> **[5:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=326)** Again, we just need to pass in the name of a blob that we want to connect to.
>
> **[5:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=330)** Now, the data that we're going to be uploading is orders data, stored in an Orders.csv file within our data folder.
>
> **[5:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=339)** The order data just looks like this.
>
> **[5:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=341)** So as we're going to be uploading orders data, let's upload it to an orders folder and just call the file the same as it's called locally.
>
> **[5:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=350)** Now, we'll also need to be able to access the local files so that we can upload it, so let's define the local file path.
>
> **[5:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=359)** We'll go up a folder and then go into our data folder and retrieve the orders.csv file.
>
> **[6:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=367)** Finally, let's do our upload.
>
> **[6:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=378)** So this is using our blobClient, which is referencing our orders/orders.csv blob.
>
> **[6:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=383)** We are then telling it the local file path that we want to upload.
>
> **[6:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=386)** This is an async method, so we'll need to enable our main method to use asynchronous code.
>
> **[6:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=395)** So if we now run this code...
>
> **[6:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=403)** Ah, it appears I've made a spelling mistake.
>
> **[6:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=406)** The file is actually called Orders.csv.
>
> **[6:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=409)** I'm sure you won't make that mistake.
>
> **[6:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=413)** So let's try that again.
>
> **[6:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=417)** So that has run successfully.
>
> **[6:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=419)** If we now go to the portal, and go to a Data Lake account, and go into our data container, we can now see that we have a new orders folder.
>
> **[7:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=431)** And within that folder, we can see that we have now uploaded our orders.csv data.
>
> **[7:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=437)** Within our data container, we can also see that we have a test data folder.
>
> **[7:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=442)** This folder just contains a single file called Example.txt.
>
> **[7:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=448)** This file just contains the text, I am a test file.
>
> **[7:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=452)** So back in Visual Studio, if we comment out our upload code,
>
> **[7:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=463)** let's now try and read the contents of that file.
>
> **[7:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=466)** So first, we need to get a reference to our test blob.
>
> **[7:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=473)** We can use the same container client because the blob resides within the same container.
>
> **[7:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=479)** Now, instead of our UploadAsync method, let's instead use DownloadContentAsync.
>
> **[8:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=488)** Now, this will return a blob download result.
>
> **[8:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=492)** We need to get the actual text out of that file.
>
> **[8:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=495)** So first, let's set it to a variable.
>
> **[8:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=500)** Now, let's await our asynchronous call and get the value and the content from that response.
>
> **[8:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=511)** Finally, let's convert it to a string.
>
> **[8:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=518)** Now that we've retrieved the text out of the file, let's just print that out to the console.
>
> **[8:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=528)** Again, if we run our code, we can see that I am a test file is written out to the console, and we have successfully downloaded the contents of that file.
>
> **[8:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=538)** If, instead of writing out to the console, we wanted to write out the contents to a local file, if, for example, we didn't want to store the entire file in memory, we can instead use the DownloadAsync method and pass in the path to a local file.
>
> **[9:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=562)** This will no longer return a result, so we'll have nothing to write out to the console, but we should see that a new file is created.
>
> **[9:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=582)** And there's our file.
>
> **[9:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=585)** There are also options for reading data a line at a time or directly using streams so that you have more control over reading and writing of data.
>
> **[9:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=594)** But by leveraging these different options, the Blob Storage SDK provides you with a lot of flexibility about how you read your data out of Data Lake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), pass (4), finally, (2), if, (2), this, (1)
> **Tools:** visual studio (4), vs code (2), terminal (2)
> **File Paths:** orders.csv (4), launch.json (1), orders/orders.csv (1), example.txt (1)
> **Code Identifiers:** connectionstring (5), containerclient (1), blobclient (1)
> **Env Vars:** sdk (5), net (1), json (1)
> **UI Navigation:** go to (3), navigate to (1), click on (1)
> **CLI Commands:** dotnet (3), make (1)
> **Prerequisites:** install (4)

#### Using Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=0)** - [Tutor] We have now seen how to access data in Azure Data Lake using the Blob STK, but we also have the option to connect to our data lake from within other Azure services.
>
> **[0:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=10)** One of the main examples of this is using Azure Synapse Analytics.
>
> **[0:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=14)** Azure Synapse is an analytic solution that provides a huge wealth of functionality.
>
> **[0:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=18)** And one of the main components of this service is Azure Synapse notebooks.
>
> **[0:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=23)** So let's go to the portal and create a new Azure Synapse workspace.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=36)** We go through the normal setup, choosing a resource group, entering a workspace name, and choosing a region.
>
> **[0:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=45)** We then choose an Azure data lake to back the synapse workspace.
>
> **[0:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=50)** Well create a new Azure Data Lake account as this will be used to store all the data related to the workspace, such as temporary data storage and logging.
>
> **[1:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=63)** And we'll creates a file system within that lake.
>
> **[1:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=70)** Well now create the workspace.
>
> **[1:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=72)** By clicking Review and Create I'm confirming.
>
> **[1:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=79)** Well now need to wait for this deployment to finish.
>
> **[1:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=86)** If we go to our newly deployed Synapse workspace and click Open Synapse Studio, we'll be taken to a separate site.
>
> **[1:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=94)** This is the site which we will use to interact with our workspace.
>
> **[1:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=99)** We have a few different options when we enter our workspace.
>
> **[1:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=102)** The Data tab allows us to connect to our data lake, which stores the data we want to work.
>
> **[1:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=107)** So if we do this, we connect to external dataset and we select Azure Data Lake Storage.
>
> **[1:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=117)** We give our connection and name.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=126)** Now, we're going to use a managed identity to connect to Azure Data Lake.
>
> **[2:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=130)** Our new Azure Synapse Analytics workspace will have an identity assigned to it within our Azure Active Directory called a managed identity.
>
> **[2:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=137)** We'll then be able to give that identity access to the data in our data lake.
>
> **[2:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=144)** We'll select our storage account and click Create.
>
> **[2:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=149)** When we make changes within Azure Synapse, we need to publish those changes to ensure that they're saved.
>
> **[2:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=155)** We now need to give the identity for our Synapse workspace access to our data lake.
>
> **[2:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=162)** So if we navigate to our data lake and select the Access Control tab, we can now add new role assignments.
>
> **[3:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=180)** We can search for the identity for our Synapse account and select a role that we want to give the identity.
>
> **[3:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=192)** We'll give the identity the Storage Blob Data Contributor role, which means that the identity will be able to read and write data within our storage account.
>
> **[3:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=201)** We'll cover role assignments in a bit more detail shortly.
>
> **[3:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=205)** Now, when the synapse account calls into notebooks from a pipeline, it will use the managed identity.
>
> **[3:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=211)** However, because I'll be running the notebooks myself by hand, I'm also going to give myself a role assignment.
>
> **[3:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=217)** Because currently, I have an owner in the data lake account, but I do not have direct access to the data.
>
> **[3:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=224)** To do this, I will also give myself the Storage Blob Data Contributor role and search for my identity.
>
> **[4:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=242)** Now that I've done that, I should be able to access the data.
>
> **[4:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=246)** It's worth keeping in mind that sometimes role assignments take a little while to propagate.
>
> **[4:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=250)** So it may not work straight away.
>
> **[4:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=253)** Now, back in Azure Synapse, we can now navigate to the order CSV that we created in the last exercise.
>
> **[4:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=262)** Let's just quickly refresh the page so that it updates.
>
> **[4:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=268)** We can now see our linked service.
>
> **[4:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=270)** And from within Synapse, we can navigate to our orders data.
>
> **[4:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=275)** If we right-click on the CSV file, we can create a new notebook and load that data to a data frame.
>
> **[4:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=281)** This notebook is using PySpark, which is Python's interface into the Spark cluster.
>
> **[4:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=287)** Here we are using Spark to read the data and load it into a data frame.
>
> **[4:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=292)** We can see that it's connecting to our order CSV file.
>
> **[4:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=296)** And it's telling it that the format is CSV.
>
> **[4:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=299)** This line is telling us that if our CSV file has a header, we need to uncommon this line.
>
> **[5:04](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=304)** And as it does, I'll do as it says.
>
> **[5:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=309)** We are then displaying the first 10 entries in our data frame.
>
> **[5:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=313)** Notice here we have a warning.
>
> **[5:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=315)** Please select the Spark pool to attach to before running the cell.
>
> **[5:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=319)** But you'll notice that there are no Spark pools listed.
>
> **[5:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=323)** We need some manage pools and create a new Apache Spark Pool that we can use to run our notebook code.
>
> **[5:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=329)** We'll just call it pool1.
>
> **[5:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=332)** We'll create a small cluster because we won't be doing a huge amount of compute.
>
> **[5:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=336)** We will enable auto-scale, which means that it can scale from anywhere between three to 10 nodes.
>
> **[5:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=343)** We can see that we've given an estimated cost per hour.
>
> **[5:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=346)** Now, you can imagine that this might get quite expensive if these clusters were left on.
>
> **[5:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=350)** Luckily, if we go to Additional Settings, we can set it so that our cluster is automatically paused after 50 minutes of being idled.
>
> **[5:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=359)** Let's create our new cluster and publish our changes.
>
> **[6:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=369)** If we now attend to our notebook, we should be able to connect to our new cluster.
>
> **[6:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=380)** If I click Run All, it may take a couple of minutes to start our session, But once it does, we can see the data is printed out in front of us.
>
> **[6:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=397)** We can now do some data analysis.
>
> **[6:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=399)** For example, if we wanted to count the number of rows in our data frame, we just use the count function.
>
> **[6:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=408)** And it tells us there are 150 rows.
>
> **[6:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=412)** Another great feature of notebooks is that we can add comments to our code.
>
> **[7:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=425)** This means that whoever next looks at this code will be more easily able to understand what's happening.
>
> **[7:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=430)** And we are now going to write our data back out to storage.
>
> **[7:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=433)** Perhaps we might want to alter the format of our data as we do so.
>
> **[7:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=437)** We have read the data in a CSV format, but what if we instead wanted our data to be in Parquet?
>
> **[7:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=442)** Parquet is an optimized data format that is highly compressible and is used extensively in big data analytics.
>
> **[7:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=449)** To do this, let's grab all code from the start where we're writing the data.
>
> **[7:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=455)** So we take our data frame, and instead of reading, let's write out the data.
>
> **[7:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=460)** And instead of loading, we'll save it.
>
> **[7:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=465)** We now need to tell our notebook where to write the data.
>
> **[7:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=469)** Let's create a new formatted folder within our lake.
>
> **[7:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=472)** And under that, we'll create an orders folder.
>
> **[7:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=474)** We can imagine if we had other data such as invoices, we might also reformat that data and store it in a separate subfolder.
>
> **[8:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=482)** Let's update our format to be parquet and remove the header parameter.
>
> **[8:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=491)** If I now run this cell, we can see that we get an error.
>
> **[8:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=495)** Order number contains invalid characters.
>
> **[8:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=498)** The issue is that there's a space in one of our column names.
>
> **[8:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=503)** So what we can do is add another cell.
>
> **[8:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=506)** We're going to use a new method called with column renamed.
>
> **[8:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=510)** We pass it the original name and an updated name.
>
> **[8:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=519)** If I now run that cell, and again display the first ten entries, we can see that the column has been renamed.
>
> **[8:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=535)** So let's try to write again.
>
> **[9:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=540)** And that's worked.
>
> **[9:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=541)** So now, if we go back to our data lake and head to our data container, we can see that we have a new formatted folder.
>
> **[9:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=551)** And within that folder, we have an orders folder.
>
> **[9:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=556)** This folder contains parquet data.
>
> **[9:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=558)** In this case, we just have a single file, but we can see that it's called part 0.
>
> **[9:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=563)** If we had a larger volume of data, this data would be partitioned across multiple files.
>
> **[9:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=568)** This multifile format is common to all versions of Spark.
>
> **[9:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=571)** And it happens because in Spark, when you have a large volume of data, the processing is paralyzed across multiple compute nodes.
>
> **[9:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=578)** So the writing out of data is also paralyzed.
>
> **[9:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=581)** And we therefore end up with multiple files.
>
> **[9:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=583)** The number of partitions that you end up with is also configurable, but that's a problem for another day.
>
> **[9:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=589)** However, you can imagine that without tools to help you, the reading in of these multiple files might prove trickier then if you just had one single CSV file.
>
> **[9:57](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=597)** Luckily, Azure Synapse has some functionality that can help us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (3), interface (1), function (1), pass (1)
> **UI Navigation:** go to (3), navigate to (3), select the (2), right-click (1)
> **Env Vars:** csv (7), stk (1)
> **Analogies:** imagine (3), such as (2), for example (1)
> **Definitions:** means that (3), is an  (2)
> **CLI Commands:** make (1), python (1), apache (1)
> **Cross-References:** in the last (1), go back to (1)
> **Warnings:** warning (1)

#### Using SQL serverless
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=0)** - [Instructor] The final method of data access that we're going to look at, is using Azure Synapse SQL serverless.
>
> **[0:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=5)** Serverless compute is used to describe computation that is carried out without you needing to control your own servers.
>
> **[0:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=12)** In truly serverless offerings, the servers are allocated to you for only the time that you need to carry out your work.
>
> **[0:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=18)** Often if you have compute that isn't constantly in use, a serviceless offering will end up costing less, than one where you're in control of the servers because you only pay for the compute that you actually use.
>
> **[0:29](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=29)** SQL serverless specifically allows you to use SQLite syntax to access data without needing to spin up an actual SQL data warehouse.
>
> **[0:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=38)** Again, we are inside our Azure Synapse Analytics workspace that we created as part of the previous exercise.
>
> **[0:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=44)** If we navigate to the Data tab, we want to create a new database within our workspace.
>
> **[0:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=51)** We'll create a serverless database and we'll call it business because you can imagine it may contain other data such as invoices related to the business.
>
> **[1:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=66)** We now want to create a View over the orders folder that we created in the previous exercise.
>
> **[1:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=74)** If I navigate to the folder
>
> **[1:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=85)** and right-click on the partitioned file, we can create a new SQL script that selects the top 100 rows.
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=93)** If I run this script, we can see our data is returned.
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=96)** If we had multiple files within this folder, we could remove the final parts of this file path
>
> **[1:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=109)** and the SQL script will aggregate results from all files within that folder.
>
> **[1:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=116)** Now we want to create a SQL View over that folder.
>
> **[2:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=120)** We do this using the CREATE VIEW Orders AS command.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=128)** We need to use the business database as you're not allowed to create SQL Views on the master database, but if we now run this script and go to our database, we can see that this View has been created and we can now select the top 100 rows from that View.
>
> **[2:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=156)** We can now use normal SQLite syntax to manipulate the View, for example, we could drop columns that we're not interested in.
>
> **[2:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=168)** Using these Views over our data, we can integrate with other services such as Power BI which expect a SQLite interface into data.
>
> **[2:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=176)** And there you have it, we have run through three different methods for accessing data stored within a data lake.
>
> **[3:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=183)** Depending on your use case, you may use one or more of these methods.
>
> **[3:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=187)** There are also other options for data access, this includes SDKs in Java, JavaScript and Python, which can be used if these languages are more appropriate for your scenario.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), create (1), view (1)
> **UI Navigation:** navigate to (2), right-click (1), go to (1), select the (1)
> **Analogies:** such as (2), imagine (1), for example (1)
> **Code Keywords:** interface (1), case, (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 4. Security in Azure Data Lake

#### SAS tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=0)** - [Instructor] In the previous example, we connected to our data lake account using the top level account keys.
>
> **[0:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=6)** As I mentioned, it is not recommended to use this method for connection as it means that you have no control over what a user is able to access.
>
> **[0:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=13)** And there is also no way to remove access once given without revoking the entire account key.
>
> **[0:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=18)** In this chapter, we'll run through some different options for granting users and applications access to the accounts.
>
> **[0:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=24)** The first of these options is using SAS tokens, or Shared Access Signatures.
>
> **[0:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=28)** Shared Access Signatures are created on the client side and allow you to have much more control over a user's access.
>
> **[0:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=35)** SAS tokens allow you to limit the users to only be able to access certain resources, define what permissions the user has on those resources, and define how long the users should have access to those resources for.
>
> **[0:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=48)** There are also three different types of SAS tokens which can be generated for a data lake: account level, service level, and user delegation.
>
> **[0:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=56)** An account level SAS token can provide access across multiple services within the account.
>
> **[1:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=61)** For example, it can provide access to both blob storage and queue storage.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=65)** If we head over to the portal, we can see that in the management pane for our data lake account.
>
> **[1:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=69)** We have an option for shared access signature.
>
> **[1:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=73)** Before starting this demo, I should note that I removed the role based access control that I assigned to myself as part of the previous exercise.
>
> **[1:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=80)** So I do not currently have permission to read or write data in the account.
>
> **[1:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=84)** When we navigate to the shared access signature option, we can define the SAS token that we want to generate.
>
> **[1:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=90)** You can choose which services the SAS token will give you access to, what permissions to enable in those services, and the start and end time of the period that the token will be valid for.
>
> **[1:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=107)** This type of SAS token is scoped to specific services within the account.
>
> **[1:51](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=111)** Once we have to find the options for the token, we can generate the SAS token and then that SAS token can be used in our data lake.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=126)** The way that you would do this is to copy this token and then use it whenever you are trying to access the lake.
>
> **[2:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=132)** Tokens created in this way will be secured using the account key for the storage account.
>
> **[2:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=137)** The other two types of SAS token are specific to one service within the account.
>
> **[2:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=141)** We can use them to provide access to the service as a whole, or if using a data lake account, we can scope them to a specific directory within the account.
>
> **[2:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=150)** If we navigate to a folder within our data lake and right-click on that folder, we have the option of generating a SAS token.
>
> **[2:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=160)** We can choose whether we want to sign the token using the account key or using user delegation.
>
> **[2:45](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=165)** This will sign the token using a key created from the credentials of the user who created the token.
>
> **[2:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=170)** If we choose to sign the token using the account key, this will create a service level SAS token.
>
> **[2:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=175)** This token will be signed with a top level account key for the storage account.
>
> **[2:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=179)** This does not mean that the token exposes the account key, but it does mean that when you create this kind of token, you will need access to the account key.
>
> **[3:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=187)** This means if you are creating tokens as part of an application, you would still need to store the account key in the application settings.
>
> **[3:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=196)** We can choose whether we want to scope the token to just the directory or to all children of that directory.
>
> **[3:21](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=201)** And as before, we can define the permissions that we want to enable and the time limit for the token validity.
>
> **[3:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=207)** Again, once we have defined these options, we are able to generate the SAS token that can then be used to access the directory within the given time period.
>
> **[3:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=218)** The final option is to use a user delegated SAS token.
>
> **[3:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=222)** When I create a user delegated SAS token, this token will be signed using a key generated from my own credentials.
>
> **[3:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=229)** This means that if you are creating these tokens as part of an application, you would no longer need to store the account key.
>
> **[3:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=234)** in the application settings.
>
> **[3:56](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=236)** For this reason, this is the method that Microsoft recommends for generating SAS tokens.
>
> **[4:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=241)** Again, you can choose the scope at which to grant access, the time period for the access, and the specific permissions to enable.
>
> **[4:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=247)** As you can see, I'm getting a warning when trying to create this kind of token.
>
> **[4:11](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=251)** This is because we are trying to use my credentials to sign the token we create.
>
> **[4:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=256)** This means that in order to create a SAS token with, for example read access, the creating principle, in this case me, will itself need read access to the data.
>
> **[4:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=266)** This access is generally granted using role-based access control, and we'll cover that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** sas (17)
> **UI Navigation:** navigate to (2), right-click (1)
> **Definitions:** means that (3)
> **Code Keywords:** for. (2)
> **Analogies:** for example (2)
> **Warnings:** note that (1), warning (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)

#### Role-based access control
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=0)** - [Instructor] The next option for providing access to data in Azure Data Lake is role-based access control, or RBAC.
>
> **[0:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=6)** In role-based access, there are a set of roles defined.
>
> **[0:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=9)** Each of these roles is assigned a set of permissions, and when a user or application is then assigned one of these roles, they will be assigned the permissions which are defined on that role.
>
> **[0:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=19)** There are three roles which define high-level access on most Azure services, reader, contributor, and owner.
>
> **[0:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=26)** These can be signed at a resource level, to a resource group, or to an entire subscription.
>
> **[0:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=31)** The reader role gives a user read access, meaning that they can read, but not edit data.
>
> **[0:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=35)** The contributor role means that a user can read and edit data, but can't manage permissions.
>
> **[0:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=41)** And the owner role allows the user read and write access, and also allows them to manage the permissions at whichever scope the role assignment is applied.
>
> **[0:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=49)** There are also roles which are specific for certain resources.
>
> **[0:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=52)** For example, Azure Storage defines a Storage Blob Data Reader, a Storage Blob Data Contributor, this is the role that we gave ourselves and the managed identity of our Synapse workspace in the previous chapter, a Storage Blob Data Owner role.
>
> **[1:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=65)** These allow you to read data, read and write data, and finally to read, write and control permissions respectively.
>
> **[1:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=72)** You'll remember that in the previous example I was unable to create a user-delegated SAS token because I did not have read permissions in the data lake.
>
> **[1:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=79)** If we head over to the portal.
>
> **[1:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=84)** And I assign myself the Storage Blob Data Reader role,
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=96)** and I again navigate to a folder within our file system, when I try and create a user-generated SAS token, and I try to create a user delegated SAS token with just the read permissions enabled, the warning that I do not have read permission is no longer there.
>
> **[1:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=110)** However, if I try and create a SAS token with write permissions, I will again get the warning.
>
> **[1:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=115)** This is because I have assigned the Storage Blob Data Reader permission, so do not have write access to the data.
>
> **[2:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=121)** Using this role-based access, we are now able to assign specific role-based permissions to a user across all the data in our data lake.

> [!info]- Semantic Content
>
> **Env Vars:** sas (4), rbac (1)
> **Warnings:** warning (2)
> **Cross-References:** previous chapter (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Access control lists
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=0)** - [Instructor] So far, we have covered data access using both SAS tokens and role-based access control.
>
> **[0:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=5)** These types of access are common to both Azure Blob Storage and Azure Data Lake.
>
> **[0:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=10)** However, as I mentioned earlier, there is a type of access that is specifically added by Azure Data Lake.
>
> **[0:16](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=16)** And that is the ability to use access control lists.
>
> **[0:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=19)** Access control lists allow us to use POSIX-style permission management.
>
> **[0:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=23)** POSIX allows us to incredibly fine-grain control over users and groups permissions at the file or directory level.
>
> **[0:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=30)** In practice, this means that for each file or directory, you can set up a list of what permissions each user and group has.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=36)** For example, an access control list for a folder might specify that there is one user that is allowed to edit the file and that there is a group of users that are allowed to read the file and that everyone else should have no access.
>
> **[0:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=49)** In Azure Data Lake, we can set up these access control lists so that they apply to just a single file, to a single directory, to a directory and all new children that are added, or to a directory and all its existing children.
>
> **[1:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=61)** This fine-grain permissions management allows you to set up your security so that it truly follows the principle of least privilege.
>
> **[1:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=68)** This principle states that when designing your security architecture, all users and applications should be limited to the least possible permissions that they need in order to do that job.
>
> **[1:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=78)** Not only this, but it also states that we should limit the number of human users that have access to data, as each additional human user adds a whole new set of risks.
>
> **[1:28](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=88)** Using these access control lists, we can set it up so that users and applications, especially human users, are only able to read or edit the bare minimum of files and folders.
>
> **[1:38](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=98)** Generally, it is best practice to apply these access control lists to groups rather than to individuals.
>
> **[1:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=104)** The reason for this is that when, for example, someone joins your development team and needs access to the development data, then giving them access is as simple as adding them to the development group.
>
> **[1:55](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=115)** It also means that when someone leaves the team, removing this access just means removing them from that group.
>
> **[2:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=120)** This means that people are far less likely to retain access to data that they shouldn't.
>
> **[2:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=125)** It is also important to note that access that is given by role-based access control will override any permissions that are given by access control lists.
>
> **[2:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=134)** For example, if a user only has edit permissions on a specific file, but has a storage blob data contributor role in that storage account as a whole, which you'll remember gives them write access to blob data, then they will still be able to edit that data.
>
> **[2:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=147)** So if you are trying to limit people's access using these access control lists, you will need to ensure that their role-based permissions are set up correctly.

> [!info]- Semantic Content
>
> **Definitions:** means that (3), is a  (2)
> **Prerequisites:** set up (4)
> **Env Vars:** posix (2), sas (1)
> **Analogies:** for example (3)
> **Code Keywords:** this, (1), override (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Access control lists example
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=0)** - [Instructor] Here we can see that we are back in our Azure Data Lake account.
>
> **[0:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=3)** However, in this case, we are viewing our Data Lake from Azure Storage Explorer, which is a tool, which is available to download from azure.[microsoft.com](https://microsoft.com).
>
> **[0:14](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=14)** You remember that we have a few folders set up in our Data Lake.
>
> **[0:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=17)** One containing formatted data, one containing orders and one containing our test data.
>
> **[0:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=22)** Now, it might be that as a user, I need to be able to read and write our test data but I shouldn't be able to read or edit orders or formatted data.
>
> **[0:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=31)** This is something which we can achieve using access control lists.
>
> **[0:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=34)** First though, let's set up the code, which we will test whether we are able to read data from different files within our Data Lake.
>
> **[0:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=41)** If we go back to our code from earlier, we are using the Azure Blob Storage SDK to read data from the Data Lake.
>
> **[0:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=48)** We are just going to print the output to the console so we can quickly get results as we test.
>
> **[0:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=53)** You'll remember that in our previous example, I used one of the account keys for the storage account to access the data but as we've covered, this is not the recommended way to access data as there is no way to control what a user has access to.
>
> **[1:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=66)** So instead, I want to try and access the data using my own personal account.
>
> **[1:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=70)** So instead of using the code that we are currently using to connect to Azure Storage, we'll instead use the DefaultAzureCredential class from the Azure identity namespace.
>
> **[1:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=79)** To get access to this class, we'll need to add a reference to a new NuGet package.
>
> **[1:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=83)** So if we reopen the terminal and use dotnet add package and search for the Azure.IdentityNuget package, we can add a reference to it in our project.
>
> **[1:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=97)** If we go to our project file, we can see that we have a new package reference.
>
> **[1:44](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=104)** Now, let's comment out the code that retrieves the connection string.
>
> **[1:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=108)** Instead, we are going to use the default credential class.
>
> **[1:52](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=112)** But because we're no longer using connection string, we now need to pass in the URI that will tell the service client what account to use.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=126)** And we will then pass in a new instance of our DefaultAzureCredential class.
>
> **[2:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=133)** We'll need to cast this to a TokenCredential as this is the type that the constructor is expecting.
>
> **[2:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=139)** Again, we need to tell our code that we are using our new package reference.
>
> **[2:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=145)** When we use the DefaultAzureCredential class, our code tries to connect to Azure Storage by retrieving credentials in a few different ways.
>
> **[2:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=153)** This includes looking at specially named environment variables using the shared token cache, using Visual Studio credentials and using the Azure CLI.
>
> **[2:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=162)** You'll remember that I earlier logged on to the Azure CLI on the Visual Studio terminal.
>
> **[2:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=166)** So we'll be using these credentials to connect to Azure Storage.
>
> **[2:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=170)** This means that when I try to access the data, I'll be using my own identity.
>
> **[2:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=174)** So when we run this code,
>
> **[3:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=182)** we are returned an error that says this request is not authorized.
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=186)** This is because I have removed the role-based access control that I added in the previous exercise because as I mentioned in my previous video, this would override any access control lists that I set up.
>
> **[3:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=197)** So I currently do not have read access to the data.
>
> **[3:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=205)** Now, if I go back to Storage Explorer, I can right click on the test folder, and choose to manage access control lists.
>
> **[3:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=214)** I can now add a new entry to this access control list.
>
> **[3:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=217)** I need to search using my object ID, which can be retrieved from the portal.
>
> **[3:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=221)** If you go to Azure Active Directory, go to Users, and find your user.
>
> **[3:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=226)** It is the object ID that we need to use.
>
> **[3:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=229)** I can now search for my user using that ID.
>
> **[3:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=233)** I can now add an entry to the access control list.
>
> **[3:58](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=238)** I am adding myself as an individual as we are just using this as an example.
>
> **[4:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=242)** But as I've said in previous chapters, it is recommended in general to use groups, rather than individuals to manage this fine-grained access.
>
> **[4:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=250)** As per our requirements, I'm going to give myself read and write access to the folder.
>
> **[4:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=255)** I will also need execute access as this is what allows us to enumerate the folder.
>
> **[4:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=260)** So I'll need this to be able to access the data.
>
> **[4:23](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=263)** I'm also going to set these permissions up as default so that they are added to any new children, which are added to the folder.
>
> **[4:30](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=270)** Alongside the permissions on the folder itself, I will also need execute permissions on the top-level container.
>
> **[4:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=279)** So again, I will add a new entry.
>
> **[4:46](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=286)** And get myself execute permissions.
>
> **[4:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=290)** This time, I will not set these permissions as default.
>
> **[4:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=294)** So now if I run the code again, I still get an error.
>
> **[5:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=301)** This is because the permissions will not be applied to any children that already exist within the folder.
>
> **[5:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=306)** To achieve this, we need to use the propagate access control list option when we select the folder.
>
> **[5:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=317)** The reason that I've been using Azure Storage Explorer in this example, rather than using the portal is that propagate access control lists is not available when working in the portal.
>
> **[5:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=326)** If you want to propagate access control lists to existing children within a folder, you'll need to manage the access control lists using Storage Explorer, Azure PowerShell, the CLI, or one of the SDKs.
>
> **[5:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=339)** Note, there is a separate SDK outside of the normal Blob Storage SDK that is used to manage the Azure Data Lake specific features.
>
> **[5:47](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=347)** For C#, this SDK resides within the Azure Storage files Data Lake NuGet package.
>
> **[5:53](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=353)** So if I run this code now, we can see that the contents of the file are written out to the console.
>
> **[6:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=365)** Finally, if I now change the code so we try to read the contents of the orders folder,
>
> **[6:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=377)** we can see that I still get an error.
>
> **[6:19](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=379)** This is because I have no permissions set up on this completely separate folder.
>
> **[6:24](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=384)** In this way, we are demonstrating that we are able to control access at the folder and file level within our Data Lake using access control lists.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (2), class. (2), pass (2), case, (1)
> **Env Vars:** sdk (4), cli (3), uri (1)
> **Tools:** terminal (2), visual studio (2), powershell (1)
> **UI Navigation:** go to (3), click on (1), select the (1)
> **Prerequisites:** set up (4), you'll need (1)
> **Cross-References:** go back to (2), previous video (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** dotnet (1), find (1)


### Conclusion

#### More Azure Data Lake resources
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=0)** - [Narrator] At this point, all is left is, where do we go next?
>
> **[0:03](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=3)** The information contained in this course has given a good overview of Azure Data Lake, and how it supports Enterprise-scale storage.
>
> **[0:10](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=10)** Depending on your use case, there may be parts of this course which were more or less relevant.
>
> **[0:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=15)** If data security is a major concern in your applications, which it probably should be in most, then it is probably worth delving further into general security best practices.
>
> **[0:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=25)** There are many courses on LinkedIn Learning, and in the wider technology space, which cover this subject in more detail.
>
> **[0:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=32)** Something which I've also touched on as part of this course is Azure Synapse.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=36)** The examples I covered showed how to read and write data from Azure Data Lake, using Notebooks and SQL servers.
>
> **[0:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=43)** However, there was also a wealth of functionality in Azure Synapse Analytics, which allows you to build up full data pipelines.
>
> **[0:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=50)** These pipelines allow you to carry out repeatable and predictable steps of your data.
>
> **[0:54](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=54)** And these pipelines can be triggered to run on a timer, or as and when data arrives.
>
> **[0:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=59)** So we can run in close to real time.
>
> **[1:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=61)** If this kind of pipeline-based data analysis and management is something that you think you might be interested in, there's a huge amount of documentation on the Microsoft website, which is a great place to start.
>
> **[1:12](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=72)** It is this also definitely worth considering using Spark, which we touched on during this course as part of our Notebooks example.
>
> **[1:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=78)** If you were carrying out big data analytics, in our example, we used PySpark to connect to a Spark cluster, which is just one of the available interfaces.
>
> **[1:27](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=87)** You also have the option of using Java, R, or Scala.
>
> **[1:31](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=91)** Spark is an incredibly powerful analytical engine, and there are many online resources, including a number on the LinkedIn learning platform, if you want to learn more.
>
> **[1:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=100)** Wherever your learning takes you next, I hope that this course has provided you with enough information to begin your journey with the powerful capabilities of Azure Data Lake.
>
> **[1:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=108)** I hope that I have showcased that Enterprise-scale storage needn't come with a huge price tag, and that sometimes a simpler storage solution, when optimized for your specific use case, can be by far the best option.
>
> **[1:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=119)** Feel free to connect with me on LinkedIn.
>
> **[2:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=121)** I'd love to hear more from you.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** case, (2)
> **Env Vars:** sql (1)
> **Speakers:** - [narrator] (1)


## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Migrating to Azure]] | **3 of 7** | [[Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
