---
type: course
cssclasses:
  - lle-course
slug: azure-data-lake-for-developers
url: "https://www.linkedin.com/learning/azure-data-lake-for-developers"
duration_minutes: 71
duration: 1h 11m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHlTO5gx6mu8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638983225920?e=2147483647&amp;v=beta&amp;t=yghUh9Q_PGWtl5i6BMYenewGLB_XLhmrUrdyrWH-xEs"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)'
prev_courses:
  - '[Migrating to Azure](Migrating%20to%20Azure.md)'
next_courses:
  - '[Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security](Azure%20Developer%20Associate%20(AZ-204)%20Cert%20Prep-%20Implement%20Azure%20Security.md)'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":3,"total":7,"prev":"Migrating to Azure","next":"Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Data%20Lake%20for%20Developers.md)

![Azure Data Lake for Developers](https://media.licdn.com/dms/image/v2/C560DAQHlTO5gx6mu8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638983225920?e=2147483647&amp;v=beta&amp;t=yghUh9Q_PGWtl5i6BMYenewGLB_XLhmrUrdyrWH-xEs)

# Azure Data Lake for Developers

> If there’s one thing that affects almost every aspect of our lives, it’s data. Personal data, demographic data, weather data, traffic data, and more—these days seemingly everything is analyzed using data. If you’re a developer, the amount of data being collected and used probably has you constantly asking two big questions: 1) How can you securely store this data, and 2) How can you do this withou

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-data-lake-for-developers) | 1h 11m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What is Azure Data Lake?](#what-is-azure-data-lake)
  - [Prior knowledge](#prior-knowledge)
- [**1. Introduction to Azure Data Lake**](#1-introduction-to-azure-data-lake) (4 videos)
  - [Azure Storage overview](#azure-storage-overview)
  - [What does ADLS add?](#what-does-adls-add)
  - [Creating a data lake using the portal](#creating-a-data-lake-using-the-portal)
  - [Creating a data lake using the CLI](#creating-a-data-lake-using-the-cli)
- [**2. Hierarchical Namespaces**](#2-hierarchical-namespaces) (3 videos)
  - [What is a hierarchical namespace?](#what-is-a-hierarchical-namespace)
  - [What are the benefits of hierarchical namespaces?](#what-are-the-benefits-of-hierarchical-namespaces)
  - [Hierarchical namespaces example](#hierarchical-namespaces-example)
- [**3. Data Access in Azure Data Lake**](#3-data-access-in-azure-data-lake) (4 videos)
  - [What are the options for accessing data?](#what-are-the-options-for-accessing-data)
  - [Using the Azure Blob Storage SDK](#using-the-azure-blob-storage-sdk)
  - [Using Spark](#using-spark)
  - [Using SQL serverless](#using-sql-serverless)
- [**4. Security in Azure Data Lake**](#4-security-in-azure-data-lake) (4 videos)
  - [SAS tokens](#sas-tokens)
  - [Role-based access control](#role-based-access-control)
  - [Access control lists](#access-control-lists)
  - [Access control lists example](#access-control-lists-example)
- [**Conclusion**](#conclusion) (1 videos)
  - [More Azure Data Lake resources](#more-azure-data-lake-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Azure Data Lake?](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-azure-data-lake?u=76281980&t=0)** - [Carmel] In the past 10 years, our world has transformed. The way that people interact has changed irreversibly, and the force that drives society's direction is the control and analysis of vast quantities of data. The ability to work with and analyze data enables a whole world of possibilities, many of which we haven't even considered yet. And I believe that our newfound ability to understand the world through data could be a driving force for real positive change. But in order to utilize the power that is held in this data, we need to be able to store it, and this can be expensive. Luckily, in recent years, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), along with other cloud providers, have brought new, more cost-effective storage options to the table. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake is one of these. Azure Data Lake provides you with enterprise-level [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), reliability, and security, while still allowing smaller and fund-limited organizations to access these features. I'm Carmel Eve. I've been working with Azure for the past five years, and have used Azure Data Lake extensively to support secure and scalable data analysis. So if you're ready to learn about Azure Data Lake, tune in to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [carmel] (1)

#### [Prior knowledge](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/prior-knowledge?u=76281980&t=0)** - [Instructor] There are no firm prerequisites for this course. We'll be covering the basics of both [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake and Azure Blob Storage. We'll be using a few different tools in this course. The first is the Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), which is a command line tool that is used for management and access to Azure Services. We'll also be using the .NET SDK. Specifically, we'll be using C# to connect to Azure Data Lake and read and write data. We'll also be using Azure Synapse. Specifically, we'll be using Azure Synapse Notebooks, which rely on [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). Spark is an analytics engine that is used for [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing. We'll also be using [SQL](../../Skills/Data%20Science/SQL.md) Serverless, which is a feature of Azure Synapse, which allows you to query Data Lake using SQL like syntax. However, I will assume that learners have some knowledge of the Azure space in general. For example, I won't be running through the basics of how to use the Azure Portal. It might be useful if you haven't used it before to spend some time creating and exploring some Azure resources prior to starting this course. I will also assume that you have some experience working with data. This doesn't need to be any deep analytical understanding, but some understanding of how data is used and secured in real world scenarios will help you get a lot more out of this course. Overall, the main thing that you will need going into this course is an interest in learning more about Azure Data Lake and how it is used to store and secure data. And with that in mind, let's take a deeper look at Azure Storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (13), [SQL](../../Skills/Data%20Science/SQL.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Env Vars:** sql (2), cli (1), net (1), sdk (1)
> **Definitions:** is a  (2), is an  (2)
> **Tools:** command line (1), azure portal (1)
> **CLI Commands:** apache (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Azure Data Lake

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Storage overview](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=0)** - [Instructor] The umbrella of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage combines five Azure services. The first is Azure Blobs storage. This service provides massively scalable storage for [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). Unstructured data is any data that isn't stored in the structured database format. This can be anything, binary, text files, images, videos, et cetera. Then we have Queue storage, which allows you to build up a reliable queue of messages. These messages are generally used for cross component communication. Azure Table storage provides support for storing structured data. This is data which is in a structured database format. Azure File storage provides Cloud-based file shares, which can be access from the Cloud or on premises. Finally, Azure Disks provide managed storage for virtual machine disks. The Azure Data Lake Gen 2 technology is built on top of Azure Blob storage and supports the majority of blob storage features. It also provides many of the same benefits. For example, one of the main advantages of Azure Blob storage and Azure storage as a whole, is cost. Azure storage is an extremely cost-effective way of storing data. For the first terabytes of storage, it costs only not $0.15, 0.13 Euros, 0.11 Pound per gigabyte per month. Which means you can store a terabyte of data for only $150 a month. Not only this, but blob storage also supports lifecycle management for your data.
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=93)** There are three tiers of access available for blob storage, hot, cool, and archive. The hot tier is optimized for frequent data access and is the most expensive tier. Once data is being accessed less regularly, it can be moved into a cool tier for reduced cost. And finally, once the data no longer needs to be accessed at all, it can be archived. Using these tiers you are able to further reduce the cost of long-term [Data Storage](../../Skills/Data%20Science/Data%20Storage.md). Blob storage is also massively scalable. The storage limit for blob storage account is the same as that for an Azure storage account as a whole. This is assuming there's no data stored in the other services in the account. This limit is a huge 50 pebibytes. A pebibyte, by the way, is about 1.13 petabytes or two to the 50 bytes. Azure storage also integrates with [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), which is [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s authentication and authorization provider. Azure Active Directory, or AAD, allows us to use role-based access control. Where users are assigned permissions based on the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) roles. To control data and management, AAD provides you with a large degree of control and confidence in the security of your data. Blobs also provide you with reliable storage for your data. Data redundancy means creating a backup of your data. So if something damages the current main copy, you're able to instead read from the backup. There are four types of data redundancy to choose from. Each coming with a slightly increased price tag.
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=186)** Each of these copies our data three times, but they vary on where these copies are stored. Locally redundant storage copies your data three times within the same physical location. This protects against for example, a power failure to a specific shelf within the data center, but not against a full data center failure. This is the cheapest data replication option, but cannot provide a high degree of reliability. So redundant storage copies your day through across three availability zones within the same geographical region. An availability zone has separate power, cooling and networking. This gives a higher level of protection against larger scale failure Geo Redundant storage copies your data three times locally in the primary region and three times locally in a secondary region. This means that you're protected against full regional outages, alongside natural disasters and other large-scale events. Finally is Geo Zone Redundant storage copies your data across three availability zones in your primary region and three times locally in a secondary region. This is the highest level of durability, which is built into Azure storage. Using these options, you have a large degree of control and flexibility around how much do your ability and availability you need for your data. Finally, Azure [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) allows you to monitor potential security threats within your storage accounts. When configured, it monitors for abnormal data access. When anomalies are detected, this triggers alerts, which integrate with Azure security center, which is a centralized place for managing security
>
> **[4:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/azure-storage-overview?u=76281980&t=279)** across all your Azure infrastructure. You can also send alerts via email or text message. This allows you to quickly assess and respond to potential threats. These alerts can include suspicious IP address access, access from an unusual location, anonymous access, suspected malware upload, large data extractions, unusual permissions access or updates, and many more. So we can see that there are a huge amount of advantages to using Azure Storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (18), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (2), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Versions:** 0.15 (1), 0.13 (1), 0.11 (1), 1.13 (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Env Vars:** aad (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [What does ADLS add?](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=0)** - [Instructor] Now let's talk about the additional functionality that [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake unlocks. The first, and in some ways, the feature that underpins all the others is the ability to support a hierarchical namespace. Hierarchal namespacing means storing data in a file-like structure, as shown here. As you can see, this is similar to that seen in a File Explorer on a regular computer. We'll talk about this in a bit more detail shortly, but this gives us improved performance of directory managed operations, which allows us to better support many large-scale analytical engines. It gives us improved query performance via data partitioning. It allows us more ease in file and [Data Management](../../Skills/Software%20Development/Data%20Management.md). And finally, it gives us the ability to silo data by security boundaries. Alongside support for hierarchical namespace, Azure Data Lake provides you with the ability to use access control lists. Access control lists allow you to define POSIX-style permissions where users or groups are assigned read or write access to files and folders. This means you can build up an incredibly fine grain permissions model for the files and folders within your Data Lake. Finally, Azure Data Lake gives you the ability to access your data using a new driver, the Azure Blob File System Driver. This is part of Apache [Hadoop](../../Skills/Data%20Science/Hadoop.md). This driver is optimized for [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md) and can be accessed using [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs. These additional features allow you to build up Enterprise Scale [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md)
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=93)** which can support high throughput queries and analysis. It also means that you can have an extremely complex security model where we can limit permissions to the very minimum that groups and applications require. This follows a least privileged permissions model, which we'll cover in more detail later. Alongside the REST API is the Blob System Driver. Data can be accessed using the Azure Blob Storage [Software Development](../../Topics/Software%20Development.md) Kit, or SDK. This SDK provides support for buffered reading and writing and automatic retry for transient failures. We'll see some examples of using this SDK later on in this course. The facts that you can use the same SDK to access both Blob Storage and Azure Data Lake means the applications that have been using Standard Blob Storage can easily be migrated to ADLS. There is also an additional SDK that is used to manage the features which are specific to Azure Data Lake. For example, managing access control lists. Finally, it's worth mentioning that all this additional functionality is available at minimal extra cost. The cost of storing the data in Azure Data Lake is exactly the same as storing data in Azure Blob Storage. There is a slightly increased transactional cost for data access, but often, this increased cost also has to be weighed against the fewer transactions which are required due to the increased query efficiency. So, overall, Azure Data Lake provides us with the ability to create Enterprise Scale Secure Data Lakes. And it does this while still providing
>
> **[3:07](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-does-adls-add?u=76281980&t=187)** many of the same benefits of Azure Blob Storage, all at minimal extra cost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (11), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (2), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (1)
> **Env Vars:** sdk (5), rest (2), posix (1), api (1), adls (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### [Creating a data lake using the portal](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=0)** - [Instructor] Now let's run through a quick example of how to create a new [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) data lake using the Azure portal. Here I am on the home screen for the Azure portal. This is the screen that you hit when you first log in. You can see that there's a creative resource button in the top left. And if I click on that, we have the option of creating all kinds of Azure resources. Now we can use this search bar to search for a specific resource, or we can drill down into different types of resources. However, we can also see that there is a list of popular [products](../../Skills/Software%20Development/Microsoft%20Products.md) and sure enough, Azure storage accounts make the cut. You'll remember that Azure data lake is built on top of Azure storage. So this is the resource type that we need for creating our new data lake account. From here, we can create a new resource, but there are also helpful links to the documentation for the service and relevant [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Learn modules. But for now, if I click on the main resource name, we are presented with a load of options. We can choose to add the resource to an existing resource group. Resource groups in Azure are a way of organizing groups of related resources to make managing the resources easier, or we can create a new one. In this case, I'll create a new resource group that will contain our resource.
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=96)** We get that resource group a name. This should be something that is related to the reason that we'll be using this resource and any the other resources that we create as part of the same exercise. We'll then give our storage accounts a name, and this name has to be unique across all of Azure.
>
> **[1:59](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=119)** We choose a region that the account will live in. Usually, it's good practice to keep your resources in regions which are close to where you'll be using them. As I'm in the UK, I'll select UK South. We then choose whether we want a standard, or premium account, which is optimized for low latency. We'll just use the standard one for now. Then we pick between the different redundancy options that we ran through earlier, which allows us to control the durability of our data. We'll just use locally redundant storage for now. Now at this point, we are still creating a standard blob storage account. So if we head over to the advanced settings, we are again presented with a few options. These include: whether to request secure transfer for API calls, whether to enable infrastructure encryption, whether to enable public access, whether to allow access using a storage account key, which means the account could be accessed using a key which gives users full access. We'll discuss this later. We can choose whether to enable further [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) authorization for input of requests, and pick the minimum TLS version. However, the setting that we are looking for in this case is this one, enable hierarchical namespace. This is the setting that converts our standard blob storage account into an Azure data lake account. Ticking this box will enable all the functionality that is provided by Azure data lake that we ran through in the previous video. And with that, we're done. We can now review and create our Azure data lake account. And once that deployment has finished,
>
> **[3:35](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-portal?u=76281980&t=215)** we can view our resource in the portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (12), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), tls (1)
> **Tools:** azure portal (2)
> **UI Navigation:** click on (2)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Creating a data lake using the CLI](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=0)** - [Instructor] We have now seen how to set up an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake account using the Azure Portal. But if you want to produce predictable and repeatable environments by hand, doing things via the portal isn't reliable, and even more than this, there is no way to automate deployments via the portal. So in order to integrate with continuous deployment systems, we need another option. This is where the Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) comes in. The Azure CLI is a cross-platform command line interface that allows you to manage Azure resources. You have the option to install the CLI on [Windows](../../Glossary/Service/Windows.md), Mac or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). This can be done via the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) website. Or you can run it using Azure Cloud Shell, which is an in-browser tool. You also have the option of running it in a Docker container. Whichever option you choose, you'll first need to check that you are running the correct version of the CLI. You do this using the az --version command. For the following steps to work, you'll need to be running version 2.6.0 or later. Once you have done this, you'll need to log in to the CLI. You do this using the az login command and you'll be directed to a web page, which allows you to log in to your Microsoft account. Once you have done this, you may want to set the Azure subscription that you want to deploy the resources into. You do this using the az account set command, passing in the subscription ID. Now that we've set up our account,
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/creating-a-data-lake-using-the-cli?u=76281980&t=93)** let's create a resource group to deploy our Data Lake into. We do this using the az group create command. We give the group a name, and a location. Like in the last example, we're creating a new resource group for this exercise and the name should reflect that. Now let's create our Data Lake. We do that using the az storage account create command. We pass in the account name, the resource group that we want to deploy our resource into. This character will allow me to start a new line. We again give the resource a location. We give it a SKU. This parameter corresponds to the redundancy options that we discussed earlier. We'll use locally redundant storage. We specify the kind of storage account, StorageV1 has now been deprecated. So again, at this point, we're just creating a standard Blob storage type account. In order to create an Azure Data Lake account, we need to set the enable-hierarchical-namespace parameter to true. Again, setting this parameter to true will enable all of the features specific to Azure Data Lake. Now, once our deployment is finished, let's head back over to the portal, and go to our resource groups. We can see that our new resource group has been created. And inside of our resource group, here's our newly created Data Lake account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (9), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** az (5), docker (1)
> **Env Vars:** cli (5), sku (1)
> **Prerequisites:** set up (2), you'll need (2), install (1)
> **Versions:** version 2 (1), 6.0 (1)
> **Cross-References:** in the last (1), we discussed (1)
> **Tools:** azure portal (1), command line (1)
> **Definitions:** is a  (1), is an  (1)


### 2. Hierarchical Namespaces

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a hierarchical namespace?](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=0)** - [Instructor] As we touched on earlier, one of the main differences between [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake and standard blob storage is the ability to use a hierarchical namespace, but you may be thinking what exactly is a hierarchical namespace? These namespaces allow you to store your files in folders and sub folders, similar to this example. These directories of folders and sub folders are similar to that's of a computer file system, and this allows you to store your data in this familiar style of interface. This is different to standard blob storage, but all the files are stored in a flat structure. If I head over to the portal, we can see that I have set up an Azure storage account. This account doesn't have hierarchical namespace enabled, so the data will be stored in standard blob storage. If we head to the Containers tab and create a new container for our data, we can then create a new blob within our accounts and give that blob a name. Now, slightly confusingly, we can get the blob storage view to behave as if it is using a file system. We do this by uploading the blob to a folder or by giving the blob a name which contains forward slashes. When you then navigate to that blob, the portal acts as though each slash denotes a folder. However, in reality, these blobs are all just stored
>
> **[1:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-is-a-hierarchical-namespace?u=76281980&t=94)** in a flat top-level structure. This means that though it looks like it should be possible, you are unable to enumerate a specific directory within a blob storage account. When you retrieve a list of blobs using the Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) or a [Software Development](../../Topics/Software%20Development.md) kit, you cannot search for blobs within a specific folder. You can only search for blobs that have names that start with a specific prefix. This means that though it looks like the data is organized in the same way, blob storage is unable to support any directory-style operations, like for example, deleting all files and folders contained within a directory, without first listing and filtering all the individual blobs. Enabling hierarchical namespace, and therefore converting from standard blob storage to Azure Data Lake, enables us to truly support file system type operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** similar to (2), for example (1)
> **Env Vars:** cli (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [What are the benefits of hierarchical namespaces?](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=0)** - [Instructor] As we have seen, hierarchical namespace allows us to support file system type operations over our organized data. This functionality allows us to: support directory managed operations, which enables better support for analytics engines, such as Spark, improve query performance via data partitioning, it allows us to more easily manage files and data and it also gives us the opportunity to silo data by security boundaries. Directory-managed operations include things such as moving, renaming or deleting directories. The crucial operation here when we talk about supporting large scale analytics engines, such as [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md), is renaming. These large scale analytics frameworks are used in a lot of [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing and are an important use case for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake. Because Azure [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) supports real directory-like file management, it enables us to atomically rename files. In Azure Blob Storage, when you rename a blob, you have to copy the entire contents of that blob to a new location. In Azure Data Lake, however, you can simply rename a file or folder in a similar way to a standard computer file system. This is particularly important when using these large-scale analytics frameworks because many of these frameworks, including Apache Spark, rely on creating a temporary version of a file whilst it's being written, and then renaming that file once the write has finished. This means that each time these frameworks write a new file to Blob Storage,
>
> **[1:32](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=92)** there is an additional copy operation required. This can have a huge impact on performance. In this way, Azure Data Lake allows us to achieve much better performance using these analytics engines. Alongside increased performance for directory managed operations, Azure Data Lake also allows us to support better general query performance. We do this via data partitioning. Because we are now able to store our data within directories, we are able to organize these directories to best support the specific queries that we require. For example, if we are storing time-based data and know that we need to be able to analyze data in day sized batches, we are able to partition the data by day, and therefore, more efficiently process the correct batch size. Then, when we are querying the data, we're able to just enumerate the folder for that required day. In this way, Azure Data Lake allows us a lot more flexibility in our data organization, and therefore, allows us to support improved query efficiency. As well as this, the ability to store and manage our data using a file system-like interface means that our [Data Management](../../Skills/Software%20Development/Data%20Management.md) is simpler because we can more easily organize our data within our Data Lake. This is also an interface which almost anyone has used a computer will be familiar with. This means that any new users will more quickly be able to understand the technology. Finally, we are able to silo our data by security boundaries. Say, for example, we have three suppliers for our data and some users should only be able to access data
>
> **[3:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-benefits-of-hierarchical-namespaces?u=76281980&t=186)** from one of their suppliers. In Azure Data Lake, we can separate the data by supplier, and then, using some of the functionality that we'll talk about shortly in the security section of this course, we can set up security boundaries around each supplier's data. These boundaries can then be configured so that only the correct users have access. In this way, Azure Data Lake allows us a lot more control over the separation and specific security requirements for different parts of our data landscape.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (9), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **Analogies:** such as (3), for example (2)
> **Definitions:** means that (3), is an  (1)
> **CLI Commands:** apache (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Hierarchical namespaces example](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=0)** - [Instructor] We are back in the portal, and I am currently viewing one of the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake accounts we created as part of chapter one. There are four different services which correspond to the different services which Azure Storage defines. We can see Azure File service, Azure Queue service, and Azure Table service, but wherein a regular storage account we'd have Azure Blob storage, we instead see Azure Data Lake storage. If we navigate to this service, we can see that we currently don't have any containers to find. Like in Azure Blob storage, Azure Data Lake expects top-level containers or file systems under which we create our directory structure. If I create a container, again, I'll just call it data, then we can start building up our hierarchical namespace. I mentioned earlier that one of the uses for a hierarchical namespace is partitioning of data. So let's imagine we have orders data. We'll first create an order sub-folder inside of our container. We can imagine that we might also end up with invoices or other data that we also need to store, but must be separate from the orders themselves. Under this directory, we might then just want to create a folder with all of the orders from 2020. Under there we may just want the orders from January,
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=96)** and under that we can create a folder to store the orders from January 1st. The files, which contain the order data from the 1st of January, will then be uploaded to this folder. This could be individual [JSON](../../Skills/Web%20Development/JSON.md) files per order or it could be partitioned data that is written out in an optimized file format. It could even be [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) documents containing the orders, as we've covered Azure Data Lake supports files in any format. Because we've set up this folder structure, we can now quickly narrow it down to the data that we are querying. We could narrow it down to the year, month, set of days, or an individual day that we want to focus on. Finally, if, for instance, we realized that we've made an error when we're setting up our file system, and the data that we're storing is actually for 21 not 2020, we can go back to the top-level of our file system and perform a rename of the top-level folder.
>
> **[2:41](https://www.linkedin.com/learning/azure-data-lake-for-developers/hierarchical-namespaces-example?u=76281980&t=161)** In normal Blob storage, this would then need to iterate through each individual Blob that started with the prefix 2020, and copy the data to a new location. However, in Azure Data Lake this rename is an atomic rename that just updates the [Metadata](../../Skills/Web%20Development/Metadata.md) associated with each file or folder, therefore, this is an incredibly performing operation. We now have a hierarchical file system that can support optimized querying, large-scale analytics engines, and, as we'll see later, we have a huge amount of control and flexibility in the security model we want to implement. Finally, let's use the fact that in Azure Data Lake we can easily delete a folder and all its children to clean up our resources. Ready for our next chapter on how we read and write data within Azure Data Lake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (13), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Analogies:** imagine (2), for instance (1)
> **Cross-References:** go back to (1), next chapter (1)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)


### 3. Data Access in Azure Data Lake

[↑ Back to Table of Contents](#table-of-contents)

#### [What are the options for accessing data?](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=0)** - [Instructor] We now need to look at how we actually read and write data within our Data Lake account. We'll be running through three different options for data access. The first is how to read and write data using the .NET Blob Storage [Software Development](../../Topics/Software%20Development.md) Kit, or SDK. This is a NuGet package which contains packaged up code that can be referenced from inside a C# project. The NuGet package that we'll be using is called [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Storage Blobs and can be used to connect either Azure Blob Storage or Azure Data Lake. We'll run through an example of using this package to write data to the Data Lake that we created earlier and then how to read that data back out. We'll then move on to data access using Azure Synapse. Azure Synapse is an analytics service that provides a huge amount of functionality. Azure Synapse pipelines are very similar to Azure data factory pipelines. They allow us to chain together different operations. These operations include copying data between different locations, calling out to data flows, which are a GUI-based tool for doing [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md). We can also call out to Azure Synapse Notebooks, which we'll cover shortly, and create [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md) and views over the data. In this course, we're going to focus on two aspects of Azure Synapse; Notebooks and SQL Serverless. Synapse Notebooks allow us to use notebook technology to read, manipulate and write data. Notebook technology allows us to create cells of code that we can run individually to slowly build up complex [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). One of the most prevalent uses of notebook technology
>
> **[1:33](https://www.linkedin.com/learning/azure-data-lake-for-developers/what-are-the-options-for-accessing-data?u=76281980&t=93)** is Databricks in Spark, which is the large scale analytics engine we mentioned earlier. Azure Synapse Notebooks allow us to call into a Spark cluster, carry out our data processing on the compute nodes in that cluster, and then write out our data to a Data Lake. The other parts of Azure Synapse that we'll be looking at is SQL Serverless. SQL Serverless is a way of using SQL-like syntax to query data without needing to have an actual SQL data warehouse. Azure Synapse allows us to use SQL-like syntax to create SQL views over the data stored in our Data Lake. As you can see, there are many different options for accessing data in Azure Data Lake. This includes other SDKs in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Java](../../Skills/Software%20Development/Java.md) and [JavaScript](../../Skills/Software%20Development/JavaScript.md). But using the examples that we'll run through in this chapter, you will have a good understanding of the steps involved in data access, and going forward, you'll be able to expand on these principles in order to support your own use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (13), [SQL](../../Skills/Data%20Science/SQL.md) (8), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** sql (8), net (1), sdk (1), gui (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** python (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Using the Azure Blob Storage SDK](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=0)** - [Instructor] The first of our data access options that we're going to cover is using the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Blob Storage SDK to read and write data. We're going to be using VS Code to write our code, which is free to download and install from code.[visualstudio.com](https://visualstudio.com). We will also need to install .NET, which can be done from dotnet.[microsoft.com](https://microsoft.com), both the SDK and the runtime. In order to run C# code in Visual Studio, you'll also need the C# extension, which can be searched for in the Extensions tab. First, we need to create a new C# project. Here, we're going to create a console application so that we can easily run the code that we produce. If we open a new terminal, let's first navigate to a folder which will contain our project. This folder currently just contains data which we'll later upload to Azure Data Lake. We can now create a new C# project. To do this, we use dotnet new console and pass it a name with a folder for the project to live in.
>
> **[1:13](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=73)** Let's now open that folder in Visual Studio Code. The first time we open a C# project in VS Code, it should prompt you that there are missing resources for your project and ask if you want to install them. Here, you should select Yes. We can see that this has added a launch and a tasks [JSON](../../Skills/Web%20Development/JSON.md) file. If we now click on the Run and Debug tab and click this play button, we can see that Hello World is printed out to the console, as is instructed in our main program. Next, we need to install the NuGet package which contains the Blob Storage SDK. We do this by going back to the terminal. We now use the dotnet add package and then search for the name of our package, which is Azure.Storage.Blobs. If we go to our project file, we can now see that this package has been referenced. In this example, we're just going to use one of the storage account keys to connect to Azure Data Lake. In general, using the top-level access keys isn't a great way of connecting to the account because not only is there no way to restrict a user's access, this means that anyone that has access to the key has full read and write access to the account, but there is also no way of revoking the user's access without invalidating the key and revoking everyone's access.
>
> **[2:50](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=170)** But for now, we'll just use the simplest method. So we need to set the account connectionString as an environment variable. We do this in the launch.json file. We can see here that we have a configuration. This is a configuration which is used to run our program. Inside of this configuration, we need to create an environment variables tag. And inside of here, we can define our variables. We now need to get the connectionString from the portal. We do this using the Access Keys tab within our Azure Data Lake account. We copy the key, and then, back in Visual Studio, we paste that value into our connectionString variable. We are now ready to start using the SDK to connect to Azure Data Lake. First, let's create an instance of the BlobServiceClient class.
>
> **[4:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=248)** This class will be used to connect to Azure Data Lake. We also need to tell our program that we are using Azure Storage Blob's NuGet package. This class is also expecting to be passed in a connectionString, so we need to retrieve that from our environment variables.
>
> **[4:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=276)** Remember that our variable was just called connectionString. We now pass that into the client.
>
> **[4:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=289)** Using our BlobServiceClient, we can now get a reference to a specific container within our account
>
> **[5:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=301)** by passing in the name of the container that we want to get a reference to. Remember our container is just called data. Using our containerClient, we now want to get a reference to a specific blob within that container.
>
> **[5:26](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=326)** Again, we just need to pass in the name of a blob that we want to connect to. Now, the data that we're going to be uploading is orders data, stored in an Orders.csv file within our data folder. The order data just looks like this. So as we're going to be uploading orders data, let's upload it to an orders folder and just call the file the same as it's called locally. Now, we'll also need to be able to access the local files so that we can upload it, so let's define the local file path. We'll go up a folder and then go into our data folder and retrieve the orders.csv file. Finally, let's do our upload.
>
> **[6:18](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=378)** So this is using our blobClient, which is referencing our orders/orders.csv blob. We are then telling it the local file path that we want to upload. This is an async method, so we'll need to enable our main method to use asynchronous code. So if we now run this code...
>
> **[6:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=403)** Ah, it appears I've made a spelling mistake. The file is actually called Orders.csv. I'm sure you won't make that mistake. So let's try that again. So that has run successfully. If we now go to the portal, and go to a Data Lake account, and go into our data container, we can now see that we have a new orders folder. And within that folder, we can see that we have now uploaded our orders.csv data. Within our data container, we can also see that we have a test data folder. This folder just contains a single file called Example.txt. This file just contains the text, I am a test file. So back in Visual Studio, if we comment out our upload code,
>
> **[7:43](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=463)** let's now try and read the contents of that file. So first, we need to get a reference to our test blob. We can use the same container client because the blob resides within the same container. Now, instead of our UploadAsync method, let's instead use DownloadContentAsync. Now, this will return a blob download result. We need to get the actual text out of that file. So first, let's set it to a variable. Now, let's await our asynchronous call and get the value and the content from that response. Finally, let's convert it to a string. Now that we've retrieved the text out of the file, let's just print that out to the console.
>
> **[8:48](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=528)** Again, if we run our code, we can see that I am a test file is written out to the console, and we have successfully downloaded the contents of that file. If, instead of writing out to the console, we wanted to write out the contents to a local file, if, for example, we didn't want to store the entire file in memory, we can instead use the DownloadAsync method and pass in the path to a local file.
>
> **[9:22](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=562)** This will no longer return a result, so we'll have nothing to write out to the console, but we should see that a new file is created.
>
> **[9:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-the-azure-blob-storage-sdk?u=76281980&t=582)** And there's our file. There are also options for reading data a line at a time or directly using streams so that you have more control over reading and writing of data. But by leveraging these different options, the Blob Storage SDK provides you with a lot of flexibility about how you read your data out of Data Lake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** visual studio (4), vs code (2), terminal (2)
> **File Paths:** orders.csv (4), launch.json (1), orders/orders.csv (1), example.txt (1)
> **Code Identifiers:** connectionstring (5), containerclient (1), blobclient (1)
> **Env Vars:** sdk (5), net (1), json (1)
> **UI Navigation:** go to (3), navigate to (1), click on (1)
> **CLI Commands:** dotnet (3), make (1)
> **Prerequisites:** install (4)

#### [Using Spark](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=0)** - [Tutor] We have now seen how to access data in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake using the Blob STK, but we also have the option to connect to our data lake from within other Azure services. One of the main examples of this is using Azure Synapse Analytics. Azure Synapse is an analytic solution that provides a huge wealth of functionality. And one of the main components of this service is Azure Synapse notebooks. So let's go to the portal and create a new Azure Synapse workspace.
>
> **[0:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=36)** We go through the normal setup, choosing a resource group, entering a workspace name, and choosing a region. We then choose an Azure data lake to back the synapse workspace. Well create a new Azure Data Lake account as this will be used to store all the data related to the workspace, such as temporary [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and logging. And we'll creates a file system within that lake. Well now create the workspace. By clicking Review and Create I'm confirming. Well now need to wait for this deployment to finish. If we go to our newly deployed Synapse workspace and click Open Synapse Studio, we'll be taken to a separate site. This is the site which we will use to interact with our workspace. We have a few different options when we enter our workspace. The Data tab allows us to connect to our data lake, which stores the data we want to work. So if we do this, we connect to external dataset and we select Azure Data Lake Storage. We give our connection and name.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=126)** Now, we're going to use a managed identity to connect to Azure Data Lake. Our new Azure Synapse Analytics workspace will have an identity assigned to it within our [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) called a managed identity. We'll then be able to give that identity access to the data in our data lake. We'll select our storage account and click Create. When we make changes within Azure Synapse, we need to publish those changes to ensure that they're saved. We now need to give the identity for our Synapse workspace access to our data lake. So if we navigate to our data lake and select the Access Control tab, we can now add new role assignments. We can search for the identity for our Synapse account and select a role that we want to give the identity. We'll give the identity the Storage Blob Data Contributor role, which means that the identity will be able to read and write data within our storage account. We'll cover role assignments in a bit more detail shortly. Now, when the synapse account calls into notebooks from a pipeline, it will use the managed identity. However, because I'll be running the notebooks myself by hand, I'm also going to give myself a role assignment. Because currently, I have an owner in the data lake account,
>
> **[3:40](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=220)** but I do not have direct access to the data. To do this, I will also give myself the Storage Blob Data Contributor role and search for my identity. Now that I've done that, I should be able to access the data. It's worth keeping in mind that sometimes role assignments take a little while to propagate. So it may not work straight away. Now, back in Azure Synapse, we can now navigate to the order CSV that we created in the last exercise. Let's just quickly refresh the page so that it updates. We can now see our linked service. And from within Synapse, we can navigate to our orders data. If we right-click on the CSV file, we can create a new notebook and load that data to a data frame. This notebook is using [PySpark](../../Skills/Data%20Science/PySpark.md), which is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s interface into the Spark cluster. Here we are using Spark to read the data and load it into a data frame. We can see that it's connecting to our order CSV file. And it's telling it that the format is CSV. This line is telling us that if our CSV file has a header, we need to uncommon this line. And as it does, I'll do as it says. We are then displaying the first 10 entries in our data frame. Notice here we have a warning.
>
> **[5:15](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=315)** Please select the Spark pool to attach to before running the cell. But you'll notice that there are no Spark pools listed. We need some manage pools and create a new [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) Pool that we can use to run our notebook code. We'll just call it pool1. We'll create a small cluster because we won't be doing a huge amount of compute. We will enable auto-scale, which means that it can scale from anywhere between three to 10 nodes. We can see that we've given an estimated cost per hour. Now, you can imagine that this might get quite expensive if these clusters were left on. Luckily, if we go to Additional Settings, we can set it so that our cluster is automatically paused after 50 minutes of being idled. Let's create our new cluster and publish our changes.
>
> **[6:09](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=369)** If we now attend to our notebook, we should be able to connect to our new cluster.
>
> **[6:20](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=380)** If I click Run All, it may take a couple of minutes to start our session, But once it does, we can see the data is printed out in front of us. We can now do some data analysis. For example, if we wanted to count the number of rows in our data frame, we just use the count function. And it tells us there are 150 rows. Another great feature of notebooks is that we can add comments to our code.
>
> **[7:05](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=425)** This means that whoever next looks at this code will be more easily able to understand what's happening. And we are now going to write our data back out to storage. Perhaps we might want to alter the format of our data as we do so. We have read the data in a CSV format, but what if we instead wanted our data to be in Parquet? Parquet is an optimized data format that is highly compressible and is used extensively in [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md). To do this, let's grab all code from the start where we're writing the data. So we take our data frame, and instead of reading, let's write out the data. And instead of loading, we'll save it. We now need to tell our notebook where to write the data. Let's create a new formatted folder within our lake. And under that, we'll create an orders folder. We can imagine if we had other data such as invoices, we might also reformat that data and store it in a separate subfolder. Let's update our format to be parquet and remove the header parameter. If I now run this cell, we can see that we get an error. Order number contains invalid characters. The issue is that there's a space in one of our column names. So what we can do is add another cell. We're going to use a new method called with column renamed. We pass it the original name and an updated name.
>
> **[8:39](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-spark?u=76281980&t=519)** If I now run that cell, and again display the first ten entries, we can see that the column has been renamed. So let's try to write again. And that's worked. So now, if we go back to our data lake and head to our data container, we can see that we have a new formatted folder. And within that folder, we have an orders folder. This folder contains parquet data. In this case, we just have a single file, but we can see that it's called part 0. If we had a larger volume of data, this data would be partitioned across multiple files. This multifile format is common to all versions of Spark. And it happens because in Spark, when you have a large volume of data, the processing is paralyzed across multiple compute nodes. So the writing out of data is also paralyzed. And we therefore end up with multiple files. The number of partitions that you end up with is also configurable, but that's a problem for another day. However, you can imagine that without tools to help you, the reading in of these multiple files might prove trickier then if you just had one single CSV file. Luckily, Azure Synapse has some functionality that can help us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (14), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [PySpark](../../Skills/Data%20Science/PySpark.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **UI Navigation:** go to (3), navigate to (3), select the (2), right-click (1)
> **Env Vars:** csv (7), stk (1)
> **Analogies:** imagine (3), such as (2), for example (1)
> **Definitions:** means that (3), is an  (2)
> **CLI Commands:** make (1), python (1), apache (1)
> **Cross-References:** in the last (1), go back to (1)
> **Warnings:** warning (1)

#### [Using SQL serverless](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=0)** - [Instructor] The final method of data access that we're going to look at, is using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Synapse [SQL](../../Skills/Data%20Science/SQL.md) serverless. Serverless compute is used to describe computation that is carried out without you needing to control your own servers. In truly serverless offerings, the servers are allocated to you for only the time that you need to carry out your work. Often if you have compute that isn't constantly in use, a serviceless offering will end up costing less, than one where you're in control of the servers because you only pay for the compute that you actually use. SQL serverless specifically allows you to use SQLite syntax to access data without needing to spin up an actual SQL data warehouse. Again, we are inside our Azure Synapse Analytics workspace that we created as part of the previous exercise. If we navigate to the Data tab, we want to create a new database within our workspace. We'll create a serverless database and we'll call it business because you can imagine it may contain other data such as invoices related to the business.
>
> **[1:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=66)** We now want to create a View over the orders folder that we created in the previous exercise. If I navigate to the folder
>
> **[1:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=85)** and right-click on the partitioned file, we can create a new SQL script that selects the top 100 rows. If I run this script, we can see our data is returned. If we had multiple files within this folder, we could remove the final parts of this file path
>
> **[1:49](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=109)** and the SQL script will aggregate results from all files within that folder. Now we want to create a SQL View over that folder. We do this using the CREATE VIEW Orders AS command.
>
> **[2:08](https://www.linkedin.com/learning/azure-data-lake-for-developers/using-sql-serverless?u=76281980&t=128)** We need to use the business database as you're not allowed to create SQL Views on the master database, but if we now run this script and go to our database, we can see that this View has been created and we can now select the top 100 rows from that View. We can now use normal SQLite syntax to manipulate the View, for example, we could drop columns that we're not interested in. Using these Views over our data, we can integrate with other services such as [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) which expect a SQLite interface into data. And there you have it, we have run through three different methods for accessing data stored within a data lake. Depending on your use case, you may use one or more of these methods. There are also other options for data access, this includes SDKs in [Java](../../Skills/Software%20Development/Java.md), [JavaScript](../../Skills/Software%20Development/JavaScript.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), which can be used if these languages are more appropriate for your scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Power bi](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** sql (7), create (1), view (1)
> **UI Navigation:** navigate to (2), right-click (1), go to (1), select the (1)
> **Analogies:** such as (2), imagine (1), for example (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 4. Security in Azure Data Lake

[↑ Back to Table of Contents](#table-of-contents)

#### [SAS tokens](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=0)** - [Instructor] In the previous example, we connected to our data lake account using the top level account keys. As I mentioned, it is not recommended to use this method for connection as it means that you have no control over what a user is able to access. And there is also no way to remove access once given without revoking the entire account key. In this chapter, we'll run through some different options for granting users and applications access to the accounts. The first of these options is using SAS [Tokens](../../Skills/Web%20Development/Tokens.md), or Shared Access Signatures. Shared Access Signatures are created on the client side and allow you to have much more control over a user's access. SAS tokens allow you to limit the users to only be able to access certain resources, define what permissions the user has on those resources, and define how long the users should have access to those resources for. There are also three different types of SAS tokens which can be generated for a data lake: account level, service level, and user delegation. An account level SAS token can provide access across multiple services within the account. For example, it can provide access to both blob storage and queue storage. If we head over to the portal, we can see that in the management pane for our data lake account. We have an option for shared access signature. Before starting this demo, I should note that I removed the role based access control that I assigned to myself as part of the previous exercise. So I do not currently have permission to read or write data in the account. When we navigate to the shared access signature option, we can define the SAS token that we want to generate. You can choose which services the SAS token will give you access to,
>
> **[1:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=94)** what permissions to enable in those services, and the start and end time of the period that the token will be valid for. This type of SAS token is scoped to specific services within the account. Once we have to find the options for the token, we can generate the SAS token and then that SAS token can be used in our data lake.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=126)** The way that you would do this is to copy this token and then use it whenever you are trying to access the lake. Tokens created in this way will be secured using the account key for the storage account. The other two types of SAS token are specific to one service within the account. We can use them to provide access to the service as a whole, or if using a data lake account, we can scope them to a specific directory within the account. If we navigate to a folder within our data lake and right-click on that folder, we have the option of generating a SAS token. We can choose whether we want to sign the token using the account key or using user delegation. This will sign the token using a key created from the credentials of the user who created the token. If we choose to sign the token using the account key, this will create a service level SAS token. This token will be signed with a top level account key for the storage account. This does not mean that the token exposes the account key, but it does mean that when you create this kind of token, you will need access to the account key. This means if you are creating tokens as part of an application, you would still need to store the account key in the application settings. We can choose whether we want to scope the token to just the directory or to all children of that directory. And as before, we can define the permissions that we want to enable and the time limit for the token validity. Again, once we have defined these options, we are able to generate the SAS token that can then be used to access the directory within the given time period. The final option is to use a user delegated SAS token.
>
> **[3:42](https://www.linkedin.com/learning/azure-data-lake-for-developers/sas-tokens?u=76281980&t=222)** When I create a user delegated SAS token, this token will be signed using a key generated from my own credentials. This means that if you are creating these tokens as part of an application, you would no longer need to store the account key. in the application settings. For this reason, this is the method that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) recommends for generating SAS tokens. Again, you can choose the scope at which to grant access, the time period for the access, and the specific permissions to enable. As you can see, I'm getting a warning when trying to create this kind of token. This is because we are trying to use my credentials to sign the token we create. This means that in order to create a SAS token with, for example read access, the creating principle, in this case me, will itself need read access to the data. This access is generally granted using role-based access control, and we'll cover that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (7), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** sas (17)
> **UI Navigation:** navigate to (2), right-click (1)
> **Definitions:** means that (3)
> **Analogies:** for example (2)
> **Warnings:** note that (1), warning (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)

#### [Role-based access control](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=0)** - [Instructor] The next option for providing access to data in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake is role-based access control, or RBAC. In role-based access, there are a set of roles defined. Each of these roles is assigned a set of permissions, and when a user or application is then assigned one of these roles, they will be assigned the permissions which are defined on that role. There are three roles which define high-level access on most Azure services, reader, contributor, and owner. These can be signed at a resource level, to a resource group, or to an entire subscription. The reader role gives a user read access, meaning that they can read, but not edit data. The contributor role means that a user can read and edit data, but can't manage permissions. And the owner role allows the user read and write access, and also allows them to manage the permissions at whichever scope the role assignment is applied. There are also roles which are specific for certain resources. For example, Azure Storage defines a Storage Blob Data Reader, a Storage Blob Data Contributor, this is the role that we gave ourselves and the managed identity of our Synapse workspace in the previous chapter, a Storage Blob Data Owner role. These allow you to read data, read and write data, and finally to read, write and control permissions respectively. You'll remember that in the previous example I was unable to create a user-delegated SAS token because I did not have read permissions in the data lake. If we head over to the portal. And I assign myself the Storage Blob Data Reader role,
>
> **[1:36](https://www.linkedin.com/learning/azure-data-lake-for-developers/role-based-access-control?u=76281980&t=96)** and I again navigate to a folder within our file system, when I try and create a user-generated SAS token, and I try to create a user delegated SAS token with just the read permissions enabled, the warning that I do not have read permission is no longer there. However, if I try and create a SAS token with write permissions, I will again get the warning. This is because I have assigned the Storage Blob Data Reader permission, so do not have write access to the data. Using this role-based access, we are now able to assign specific role-based permissions to a user across all the data in our data lake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **Env Vars:** sas (4), rbac (1)
> **Warnings:** warning (2)
> **Cross-References:** previous chapter (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Access control lists](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=0)** - [Instructor] So far, we have covered data access using both SAS [Tokens](../../Skills/Web%20Development/Tokens.md) and role-based access control. These types of access are common to both [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Blob Storage and Azure Data Lake. However, as I mentioned earlier, there is a type of access that is specifically added by Azure Data Lake. And that is the ability to use access control lists. Access control lists allow us to use POSIX-style permission management. POSIX allows us to incredibly fine-grain control over users and groups permissions at the file or directory level. In practice, this means that for each file or directory, you can set up a list of what permissions each user and group has. For example, an access control list for a folder might specify that there is one user that is allowed to edit the file and that there is a group of users that are allowed to read the file and that everyone else should have no access. In Azure Data Lake, we can set up these access control lists so that they apply to just a single file, to a single directory, to a directory and all new children that are added, or to a directory and all its existing children. This fine-grain permissions management allows you to set up your security so that it truly follows the principle of least privilege. This principle states that when designing your security architecture, all users and applications should be limited to the least possible permissions that they need in order to do that job. Not only this, but it also states that we should limit the number of human users that have access to data, as each additional human user adds a whole new set of risks. Using these access control lists, we can set it up so that users and applications, especially human users,
>
> **[1:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists?u=76281980&t=94)** are only able to read or edit the bare minimum of files and folders. Generally, it is best practice to apply these access control lists to groups rather than to individuals. The reason for this is that when, for example, someone joins your development team and needs access to the development data, then giving them access is as simple as adding them to the development group. It also means that when someone leaves the team, removing this access just means removing them from that group. This means that people are far less likely to retain access to data that they shouldn't. It is also important to note that access that is given by role-based access control will override any permissions that are given by access control lists. For example, if a user only has edit permissions on a specific file, but has a storage blob data contributor role in that storage account as a whole, which you'll remember gives them write access to blob data, then they will still be able to edit that data. So if you are trying to limit people's access using these access control lists, you will need to ensure that their role-based permissions are set up correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Definitions:** means that (3), is a  (2)
> **Prerequisites:** set up (4)
> **Env Vars:** posix (2), sas (1)
> **Analogies:** for example (3)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Access control lists example](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=0)** - [Instructor] Here we can see that we are back in our [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake account. However, in this case, we are viewing our Data Lake from Azure Storage Explorer, which is a tool, which is available to download from azure.[microsoft.com](https://microsoft.com). You remember that we have a few folders set up in our Data Lake. One containing formatted data, one containing orders and one containing our test data. Now, it might be that as a user, I need to be able to read and write our test data but I shouldn't be able to read or edit orders or formatted data. This is something which we can achieve using access control lists. First though, let's set up the code, which we will test whether we are able to read data from different files within our Data Lake. If we go back to our code from earlier, we are using the Azure Blob Storage SDK to read data from the Data Lake. We are just going to print the output to the console so we can quickly get results as we test. You'll remember that in our previous example, I used one of the account keys for the storage account to access the data but as we've covered, this is not the recommended way to access data as there is no way to control what a user has access to. So instead, I want to try and access the data using my own personal account. So instead of using the code that we are currently using to connect to Azure Storage, we'll instead use the DefaultAzureCredential class from the Azure identity namespace. To get access to this class, we'll need to add a reference to a new NuGet package. So if we reopen the terminal and use dotnet add package and search for the Azure.IdentityNuget package, we can add a reference to it in our project.
>
> **[1:37](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=97)** If we go to our project file, we can see that we have a new package reference. Now, let's comment out the code that retrieves the connection string. Instead, we are going to use the default credential class. But because we're no longer using connection string, we now need to pass in the URI that will tell the service client what account to use.
>
> **[2:06](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=126)** And we will then pass in a new instance of our DefaultAzureCredential class. We'll need to cast this to a TokenCredential as this is the type that the constructor is expecting. Again, we need to tell our code that we are using our new package reference. When we use the DefaultAzureCredential class, our code tries to connect to Azure Storage by retrieving credentials in a few different ways. This includes looking at specially named environment variables using the shared token cache, using Visual Studio credentials and using the Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). You'll remember that I earlier logged on to the Azure CLI on the Visual Studio terminal. So we'll be using these credentials to connect to Azure Storage. This means that when I try to access the data, I'll be using my own identity. So when we run this code,
>
> **[3:02](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=182)** we are returned an error that says this request is not authorized. This is because I have removed the role-based access control that I added in the previous exercise because as I mentioned in my previous video, this would override any access control lists that I set up. So I currently do not have read access to the data.
>
> **[3:25](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=205)** Now, if I go back to Storage Explorer, I can right click on the test folder, and choose to manage access control lists. I can now add a new entry to this access control list. I need to search using my object ID, which can be retrieved from the portal. If you go to [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), go to Users, and find your user. It is the object ID that we need to use. I can now search for my user using that ID. I can now add an entry to the access control list. I am adding myself as an individual as we are just using this as an example. But as I've said in previous chapters, it is recommended in general to use groups, rather than individuals to manage this fine-grained access. As per our requirements, I'm going to give myself read and write access to the folder. I will also need execute access as this is what allows us to enumerate the folder. So I'll need this to be able to access the data. I'm also going to set these permissions up as default so that they are added to any new children, which are added to the folder. Alongside the permissions on the folder itself, I will also need execute permissions on the top-level container. So again, I will add a new entry. And get myself execute permissions. This time, I will not set these permissions as default. So now if I run the code again, I still get an error.
>
> **[5:01](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=301)** This is because the permissions will not be applied to any children that already exist within the folder. To achieve this, we need to use the propagate access control list option when we select the folder. The reason that I've been using Azure Storage Explorer in this example, rather than using the portal is that propagate access control lists is not available when working in the portal. If you want to propagate access control lists to existing children within a folder, you'll need to manage the access control lists using Storage Explorer, Azure [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), the CLI, or one of the SDKs. Note, there is a separate SDK outside of the normal Blob Storage SDK that is used to manage the Azure Data Lake specific features. For C#, this SDK resides within the Azure Storage files Data Lake NuGet package. So if I run this code now, we can see that the contents of the file are written out to the console. Finally, if I now change the code so we try to read the contents of the orders folder,
>
> **[6:17](https://www.linkedin.com/learning/azure-data-lake-for-developers/access-control-lists-example?u=76281980&t=377)** we can see that I still get an error. This is because I have no permissions set up on this completely separate folder. In this way, we are demonstrating that we are able to control access at the folder and file level within our Data Lake using access control lists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (15), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Env Vars:** sdk (4), cli (3), uri (1)
> **Tools:** terminal (2), visual studio (2), powershell (1)
> **UI Navigation:** go to (3), click on (1), select the (1)
> **Prerequisites:** set up (4), you'll need (1)
> **Cross-References:** go back to (2), previous video (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** dotnet (1), find (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More Azure Data Lake resources](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=0)** - [Narrator] At this point, all is left is, where do we go next? The information contained in this course has given a good overview of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Lake, and how it supports Enterprise-scale storage. Depending on your use case, there may be parts of this course which were more or less relevant. If [Data Security](../../Skills/Data%20Science/Data%20Security.md) is a major concern in your applications, which it probably should be in most, then it is probably worth delving further into general security best practices. There are many courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and in the wider technology space, which cover this subject in more detail. Something which I've also touched on as part of this course is Azure Synapse. The examples I covered showed how to read and write data from Azure Data Lake, using Notebooks and [SQL](../../Skills/Data%20Science/SQL.md) servers. However, there was also a wealth of functionality in Azure Synapse Analytics, which allows you to build up full [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). These pipelines allow you to carry out repeatable and predictable steps of your data. And these pipelines can be triggered to run on a timer, or as and when data arrives. So we can run in close to real time. If this kind of pipeline-based data analysis and management is something that you think you might be interested in, there's a huge amount of documentation on the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) website, which is a great place to start. It is this also definitely worth considering using Spark, which we touched on during this course as part of our Notebooks example. If you were carrying out [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md), in our example, we used [PySpark](../../Skills/Data%20Science/PySpark.md) to connect to a Spark cluster, which is just one of the available interfaces. You also have the option of using [Java](../../Skills/Software%20Development/Java.md), R, or [Scala](../../Skills/Software%20Development/Scala.md). Spark is an incredibly powerful analytical engine,
>
> **[1:34](https://www.linkedin.com/learning/azure-data-lake-for-developers/more-azure-data-lake-resources?u=76281980&t=94)** and there are many online resources, including a number on the LinkedIn learning platform, if you want to learn more. Wherever your learning takes you next, I hope that this course has provided you with enough information to begin your journey with the powerful capabilities of Azure Data Lake. I hope that I have showcased that Enterprise-scale storage needn't come with a huge price tag, and that sometimes a simpler storage solution, when optimized for your specific use case, can be by far the best option. Feel free to connect with me on LinkedIn. I'd love to hear more from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [Carmel Eve](../../Instructors/Cloud%20Computing/Carmel%20Eve.md)

## Path Context

### In [Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)
← [Migrating to Azure](Migrating%20to%20Azure.md) | **3 of 7** | [Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security](Azure%20Developer%20Associate%20(AZ-204)%20Cert%20Prep-%20Implement%20Azure%20Security.md) →

## Appears In

- [Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)

---

[↑ Back to top](#)