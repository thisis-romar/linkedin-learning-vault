---
type: course
slug: microsoft-azure-synapse-for-developers-14246261
url: "https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261"
duration_minutes: 155
duration: 2h 35m
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-17
---

# Microsoft Azure Synapse for Developers

> In today’s world, businesses are relying more and more on big data for their daily operations. This is a trend that is not likely to reverse. Azure Synapse is a great tool to handle all that data, as it blends big data analytics with data warehousing, offering organizations a way to store large amounts of incoming data for a reasonable cost. In this course, Nertil Poci shows you how to get up and 

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261) | 2h 35m

## Instructor

- [[Nertil Poci]]

## Table of Contents

### Introduction

#### Data warehouses in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=0)** - In today's world, businesses are relying more and more on big data for their daily operations.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=6)** Whether you already have an in-house solution for your data, or you're trying to move to a more flexible one, Azure Synapse Analytics can help you quickly get up and running in a matter of minutes without any upfront costs.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=20)** You'll learn how to get up and running with Synapse analytics as your data warehouse in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=26)** First, you'll learn how to provision your dedicated SQL pool and what the different options are.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=33)** Next, we'll go to different data loading methods with hands-on demonstrations.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=38)** After which, we are going to look at how to consume our data.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=42)** After working with dedicated pools, we are also going to learn how to query data directly from storage, using serverless SQL and create a logical data warehouse.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=53)** And finally, we're going to go through some of the best practices to follow, to get the most out of our data warehouse.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=61)** My name is Nertil and let's get started building our data warehouse in the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1)
> **Speakers:** - in (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, There are a few things that you should know.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=4)** First, you should be familiar with SQL and writing SQL and T-SQL statements.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=10)** If you are not already familiar, then you can take the course, Microsoft SQL Server 2019 Essential Training.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=19)** We are going to make use of Azure storage for data loading, so you should be familiar with using Azure storage to upload and share files.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=27)** You do not need to be an expert, but you should at least know the basics.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=32)** You can take the course, Azure Storage for Developers: Blobs before continuing to get the most out of this course.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=40)** Regardless, if you are not familiar, then we are going to go through each script step-by-step, and I'm also going to include the scripts in the exercise files, so you can copy them and study.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=51)** If you are watching this course over a stretch of time, it's a good practice to pause the dedicated SQL pools that we are going to create, as this way, when you pause, you are not going to get charged.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=63)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Azure Synapse Analytics

#### Azure Synapse Analytics overview
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=0)** - Azure Synapse Analytics is a limitless analytics service that simplifies data discovery for big data and reduces the time to insights.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=10)** It's designed as an all-in-one platform that combines data warehousing and big data analytics.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=18)** Synapse Analytics breaks down its analytic resources into three pools.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=23)** We have serverless pools, dedicated SQL pools and Apache spark pools.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=30)** Dedicated SQL pools, despite the name change, are Azure SQL data warehouses, which are data warehouses in the cloud.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=38)** Dedicated pools are petabyte scale, massive processing data warehouses in the cloud.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=45)** And we can have as many as we want in our Synapse Analytics workspaces.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=51)** Next, we have serverless pools.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=53)** Serverless pools, unlike dedicated SQL pools, do not have to be provisioned.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=58)** We only have to write a query and all the resources will be provisioned for us and be destroyed when the query ends.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=65)** And finally, we have spark pools which allow us to run spark jobs for processing our data.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=72)** Throughout the course, we are not going to be focusing on spark pools, but we are going to look at how to use dedicated and serverless SQL pools.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=82)** Since Azure Synapse Analytics is an all-in-one solution, it connects natively with other services in Azure.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=89)** It enables us to quickly discover and analyze our data in Azure data lake, blob storage, or any other location in Azure.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=99)** This way, we can see what types of data we have so we can transform it and load it into our reports.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=107)** It also integrates with other services like Azure Purview, which is a service for data governance to help organizations understand their data across their entire ecosystem.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=119)** It integrates with power BI for visualizing the data in different meaningful reports for making data driven business decisions.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=129)** Machine learning is quickly becoming widely used by many organizations.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=134)** Synapse Analytics integrates with Azure machine learning, providing an easy way to use the data generated across organizations to train different models.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=145)** So we can use this model for making business decisions automatically.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=150)** We're going to start creating our first Synapse Analytics workspace in our next clip.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** apache (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - azure (1)

#### Creating Azure Synapse Analytics workspaces
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=0)** - [Instructor] Working with cloud services can get messy at times.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=4)** We need different services integrated together to perform certain tasks.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=9)** Synapse Analytics makes this easy for us by allowing us to create workspaces, which will contain all the services needed for gathering, processing, storing, and analyzing data.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=21)** Let's get started creating our first workspace.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=25)** From our Azure portal, we can quickly find Synapse Analytics by searching for it.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=30)** Here, let's go ahead and type in synapse.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=34)** And we need to click on the Azure Synapse Analytics service, not the private link hubs one.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=41)** In here, we are going to get a list of all the workspaces that we have created.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=46)** Let's go ahead and create a new one using the Create button.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=52)** First, we're going to create a new resource group.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=55)** If you already have one created, then you can use that.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=59)** But to be able to clean all the resources at the end, I suggest you create a new one.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=64)** Let's go ahead and click the Create New button.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=68)** And let's name it myworkspace.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=72)** Next, optionally, we can provide resource group for managed resources.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=77)** The managed resource group is used for holding ancillary resources created by Synapse Analytics.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=84)** One will be created automatically for us.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=86)** So we can leave it blank.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=89)** Now, let's go ahead and enter our workspace name.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=92)** Let's name it myworkspace.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=96)** And it seems that the workspace name, myworkspace, is taken.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=99)** So let's add the suffix.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=102)** Let's name it, mylearningworkspace.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=109)** Another setting that we need to choose is the data lake storage.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=114)** We can either choose from our subscription or we can use a URL.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=118)** For our demo, we're going to create one inside our subscription.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=122)** Let's go ahead and create a new account.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=125)** Let's name it synapselearningstorage.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=131)** And it seems like the name is taken.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=133)** So let's add the suffix.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=138)** Next, we need to choose the file system name.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=140)** This will be just like a container in Blob storage.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=144)** Microsoft went ahead and named it file system name, but it's a little confusing.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=148)** So think of this as the container name.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=151)** And in here, we're going to specify the container where our data is going to be stored.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=156)** Throughout this course, we're going to store sales data.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=159)** So let's create a new file system name called Sales.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=166)** And make sure that the assigned myself the Storage Blob Data Contributor role is checked so you have access to the storage.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=175)** And now, let's move to the Security tab by clicking on the Next Security button.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=181)** In here, we need to provide the credentials for our administrator.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=185)** You can change the admin login if you want.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=188)** I'm going to leave you as sqladminuser.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=191)** And I'm going to enter a password.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=193)** Make sure you remember the password that you enter here.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=199)** And we are going to leave the rest of the settings as default and hit the Review and Create button.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=208)** Looks like the validation has passed.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=210)** So now, we can create the workspace using the Create button.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=215)** It might take a while for the workspace to be provisioned.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=219)** We are going to continue with our workspace in the kits to come.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), private (1), continue (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** url (1)
> **Tools:** azure portal (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Analyzing the architecture of dedicated SQL pools
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=0)** - [Instructor] Before we continue with our Azure Synnex workspace.
>
> **[0:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=3)** First, let's talk a little bit about Dedicated SQL pools.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=8)** These are what replaced our traditional Data Warehouse, which was also formerly known as Azure SQL Data Warehouse.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=16)** Dedicated SQL pools represent the collection of analytic resources, the size of which is determined when we provision it.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=25)** Once we have provisioned the Dedicated Pool, then we can import big data from different aspects of our business, transform it into an appropriate format for querying, and then run analytic queries that are very high performance.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=40)** Our Dedicated Pool will look just like any other SQL database with relational tables where we can store our data for later consumption for Business Intelligence.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=50)** Now let's take a look at the architecture of our Dedicated SQL pool.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=55)** Dedicated SQL pools use an old base architecture.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=59)** We have a control node or alternatively it's called a Linder node against which we run our queries.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=68)** The node holds a distributed query processing engine, which optimizes the query for parallel processing.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=75)** And then passes the operation to compute nodes which do the actual work.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=80)** The data is stored in Azure Storage, compute nodes, round of queries, as they are instructed by the control node.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=90)** In dedicated SQL pools, data and compute power are separate, which means we can pose our compute power without affecting our storage.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=99)** So when we don't need compute power, then we can just pause it.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=103)** And then resume it later on without losing our data.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=107)** Depending on how much compute power we need, we can start from one node and scale up to 60.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=114)** The more nodes we have, the faster we can load and query data since each node ran queries in parallel.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=122)** When loading data into our dedicated SQL pool, it is plead into distributions.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=127)** Number of distributions is 60 equal to the maximum number of nodes.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=133)** While we can change the number of nodes, we cannot change the number of distributions.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=138)** The number of distributions inside each node is divided by the total number of nodes.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=144)** So if we have only one node, then all 60 distributions will be inside these node.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=151)** And when you run queries, there won't be any parallel processing since we only have one node.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=157)** If we had two, then each node would have 30 distributions and so on.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=162)** If you had 60, then each note would have one distribution and we would have the maximum performance that we can get.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=170)** We are going to take a more detailed look in the clips to come on how data is distributed and how we can control this distribution.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11)
> **Env Vars:** sql (8)
> **Code Keywords:** let (2), continue (1)
> **Definitions:** known as (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Provisioning dedicated Synapse Analytics pools
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=0)** - [Instructor] In this demo, we are going to create a dedicated SQL pool.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=5)** This is going to serve as our data warehouse in the cloud.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=9)** We are going to add our dedicated SQL pool in our workspace that we created earlier.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=14)** We named it mylearningworkspace.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=18)** Let's go ahead and open it.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=19)** And we need to navigate to SQL pools.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=24)** Right now, we only have the built-in serverless SQL pool.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=29)** Let's go ahead and create a new one using the New button.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=34)** First, we need to give it a name.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=36)** Let's go ahead and name it sales data warehouse since we are going to add sales data here.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=44)** Next, we need to choose the performance level.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=47)** Here, we have a slider that we can move to the left or to the right.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=51)** The performance level is measured in data warehouse units or DWUs.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=56)** In this case, as elected DW100, which will give us one compute node.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=62)** To view all available options, click on the information icon, on Performance Level, and open the Learn More link.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=73)** Here, we have a list of all our data warehouse units, and the number of compute nodes they have, as well as the distributions per node.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=81)** As you can see, data warehouse 100 has one node.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=85)** And 60 distributions are all in this node.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=90)** We can see that different data warehouse units have also one node.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=94)** We have data warehouse unit 100c, 200, up to 500, which has all one compute node, but they have different prices.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=104)** That's because besides the number of compute nodes, we also are limited to how many queries we can run in parallel.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=111)** We are going to take a look at how many queries we can run in parallel for each data warehouse unit later on when we query the data.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=119)** But for now, depending on how many compute nodes we need, we need to choose the appropriate data warehouse unit.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=125)** And here, the maximum is data warehouse unit 30,000, which has 60 compute nodes.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=131)** And each node has one distribution.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=135)** Let's navigate back to our dedicated pool.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=138)** And for our purposes, one node is going to be enough so we don't incur too many charges.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=145)** And we are going to go with data warehouse unit 100.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=148)** Next, let's navigate to Additional Settings.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=152)** In here, optionally, we can choose a data source.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=156)** We can leave it empty, so None.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=158)** We can use a backup where we can upload it from some other external file or we can use a restore point.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=165)** Restore points only work if we have existing data warehouses that we can restore from.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=171)** In our case, we don't have any.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=172)** So we're going to use None.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=175)** And now, let's go ahead and create our data warehouse.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=180)** Looks like our validation is successful.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=182)** So let's go ahead and use the Create button to start the creation process.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=187)** The provisioning of resources for our dedicated pool might take a while.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=191)** So we are going to come back to this when our data warehouse is ready.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (2), from. (1), while. (1)
> **CLI Commands:** node (8)
> **Env Vars:** sql (4), dw100 (1)
> **UI Navigation:** navigate to (2), click on (1), open the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a Synapse Analytics workspace with a dedicated pool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=5)** - [Instructor] In this challenge, I would like you to create a new Synapse Analytics workspace.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=10)** Once the workspace is created, inside, create a new dedicated SQL pools which has three compute nodes.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=17)** Once you're done, join me in the next scape to go over the solution.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Create a Synapse Analytics workspace with a dedicated pool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=0)** - [Instructor] To solve this challenge, first, I navigated to Azure Synapse Analytics.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=11)** In here, I proceeded to create a new resource using the Create button.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=18)** For the Resource group, I created a new Resource group just for this challenge.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=28)** Next, I provided the name for my Resource.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=31)** I named it Synapse Challenge Workspace.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=35)** And then, I proceeded to create a new account for my Data Lake Storage.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=42)** And for the File system, I created a new file system and for the File system, which is going to be like the container that will contain my data, I named it Challenge.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=55)** And finally, I made sure that the Assigned myself Storage Blob Data Contributor role was checked.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=62)** Next, I moved to the Security tab.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=66)** In here, I provided the SQL Administrator Credentials.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=70)** I changed the SQL Admin user to Challenge user and provided my password.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=77)** And finally click on the Review and Create since I did not need to change any other settings.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=86)** Once my validation passed, I click the Create button.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=94)** Once my Workspace was provisioned, I navigated to Azure Synapse Analytics.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=101)** In here, I opened the Workspace that I just created, and now I navigated to SQL pools, because the task was to create a new dedicated SQL.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=113)** I proceeded to create a new one.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=118)** First, I gave it a name.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=120)** I named i, Challenged Data Warehouse.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=123)** And as a requirement, the Data Warehouse had to have three compute nodes.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=129)** Looking at the list of Data Warehouse Units and how many nodes each has, I can see that Data Warehouse unit 1500 has three compute nodes, so I needed to choose that one.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=140)** Back in my dedicated pool settings, I chose Data Warehouse unit 1500, which would cost about $30 per hour.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=152)** And finally, I hit Review and Create.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=157)** And now the dedicated SQL pool creation process is almost complete.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=161)** As soon as this process is finished, we can start using it.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Code Keywords:** finally, (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Populating Dedicated Synapse Analytics Pools

#### Data loading in Azure Data Warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=0)** - [Instructor] In a traditional data warehouse, you might have been used to a process called ETL which stands for Extract, Transform, and Load.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=9)** The process allows us to gather data from our sources, transform it into a format that is most useful to us, and then load it into the data warehouse.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=20)** While this works well for traditional data warehouse, it's not the case in cloud data warehouses or, more exactly, in Azure Synapse Analytics dedicated pools.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=32)** Due to the massive filing processing nature which separates compute and storage, we can use a process called ELT which stands for Extract, Load, and then Transform.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=45)** ELT is a process where we swap the load and transform.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=50)** The data is extracted from the source, and it's loaded into the dedicated pool, after which it's transformed.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=58)** This way, we take advantage of the massive filing processing power of dedicated SQL pools, which eliminates the need for data transformation, which in turn eliminates the need for all the processing power required to transform the data prior to loading it.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=77)** Due to the scaled-out nature of dedicated pools, data is saved on something called a distributed table.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=85)** A distributed table looks and behave like a normal table, but the rows are actually stored across 60 distributions.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=93)** The data stored in these tables are distributed with a hash or a round-robin algorithm.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=101)** Both of these distribution methods have their pros and cons.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=105)** A hash distributed table improves query performance, while round-robin distributed tables are best for loading data into them.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=114)** A hash distributed table will spread rows across all available compute nodes using a deterministic hash function.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=123)** Identical values will always be on the same distribution.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=128)** This way, the data warehouse has knowledge of the row's location.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=133)** When querying the data, the data warehouse will use this information to minimize data movement which result in faster query performance.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=142)** A hash distributed algorithm needs to know which column to use to decide on which node to place the data, so choosing a good column is very, very important.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=153)** We need to choose a distribution column that does not require updates.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=158)** We cannot update a distribution column unless we delete the row first and insert a new row with the updated value.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=165)** Also, it's very important that the distribution column that we choose allows for the distribution of data evenly.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=172)** In order for us to get the best performance, the rows need to be distributed evenly.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=177)** When data is not spread evenly, some nodes will finish queries before others.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=182)** And since the query cannot finish until all distributions have finished, each query is as fast as the slowest distribution.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=191)** We also need to choose a column that minimizes data movement.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=195)** To get correct results, queries might need to move data from one compute node to another.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=201)** Data movement commonly happens when queries have JOINs and aggregations on them.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=207)** Choosing a distribution column that helps minimize data movement is one of the most important strategies for optimizing query performance for your SQL Data Warehouse.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=217)** For example, we need to use columns used in JOINs or GROUP BYs.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=222)** We should not use columns that are used in WHERE clauses, for example, a day since lots of WHERE clauses include the day.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=230)** Round-robin distribution is quite different from hash distribution.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=235)** Unlike hash, round-robin distributes data evenly across all distributions.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=240)** The assignment of feature role is random.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=242)** And unlike hash distribution rows, equal values are not guaranteed to be assigned on the same distribution.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=249)** Due to the random distribution of data, when we run queries, data will be required to be moved in order to resolve a query.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=258)** For example, when we join data, round-robin table will need to reshuffle rows between multiple nodes, which is a big performance hit.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=267)** Here are some scenarios where you should consider using round-robin distribution for our tables.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=273)** First, if there is no obvious joining key, then we should use round-robin as we're not sure on how to distribute data.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=280)** Either way, you are going to get a performance hit.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=283)** At least this way, we can insert the data quickly.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=287)** Next, if there isn't a good candidate column for a hash distributed table.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=292)** If you do not have a column in your table which distributes the data evenly, then hash distribution will distribute the data unevenly.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=299)** This way, you'll end up with distributions with more data and other distribution with almost no data.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=306)** Another time you might consider using round-robin distribution is when there is no join key with other tables as well.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=313)** And finally, if you have a temporary staging table, then you should always use round-robin distribution.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=320)** This way, you can load the data faster and then transform it and move it to your production table where you have a hash distribution in place.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=329)** We are going to take a look at how our data will be distributed once we load our data into the data warehouse in the clips to come.

> [!info]- Semantic Content
>
> **Env Vars:** elt (2), sql (2), where (2), etl (1), group (1)
> **Code Keywords:** function (1), require (1), delete (1), finally, (1)
> **Definitions:** stands for (2), is a  (2)
> **Analogies:** for example (3)
> **CLI Commands:** node (2)
> **SQL:** where (2)
> **Best Practices:** you should always (1)
> **Prerequisites:** required to (1)

#### Preparing your data
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=0)** - [Instructor] Throughout this course, we are going to use sales data and we are going to generate our sales to keep it simple.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=6)** So we don't depend on third-party data.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=9)** You should find the sales data in the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=13)** In here you'll find a SalesData folder, which has data already pre-generated for you.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=20)** This will contain about one million records split into 100 files, each 1,000 records, alternatively, if you want to generate the data yourself, I have included a tool that will generate data for you.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=36)** Here first, we need to open the tool, which is a Node app.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=41)** First, we need to open command prompt on this folder.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=47)** The first thing that you need to do is install the Node packages, so you need to run npm install.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=57)** Once the packages are installed, and you need to run npm run generate.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=64)** The app will ask us how many records do we want to generate?
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=68)** The default is one million and you cannot make it less.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=72)** So if you type one, then it's one million.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=74)** If you type five, then it's five million.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=77)** Let's go ahead and type two.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=80)** So this will generate two million records and in total, 200 files.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=86)** It generates multiple files because due to the massive parallel processing of data warehouse in the cloud, it runs better when it has multiple files.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=96)** And in a couple of seconds, it will generate all records.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=102)** And the generation process for our data is done.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=104)** You should find your data in the output folder inside the application.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=109)** In here, we should have about 200 items.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=112)** Let's go ahead and open one of them, and we have a StoreCode, the date, the Total number of sales for that day, and the total amount of sales.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=125)** We are going to get this data and load it into our data warehouse.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=129)** If you have trouble running the Synapse Data Generator, then I have already included for you sales data pre-generated so you can use those.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=139)** Before we can load the data into our date warehouse, first, we need to upload it to Azure Storage.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=145)** Let's go ahead and copy the path to this folder, and now let's navigate to the Azure portal.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=151)** First, we need to create a new storage account.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=154)** Let's go ahead and navigate to the storage account service.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=159)** And in here, we are going to create a new one.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=167)** For the resource group, I'm going to use a myworkspace resource group that we created earlier when we created our Synapse Analytics Workspace.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=176)** Next, we need to give it a name, so let's name it myworkspacetestfiles.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=183)** And it looks like the name is available.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=186)** We are going to leave the rest of the settings as they are and hit Review and Create.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=192)** And finally, let's create the storage account.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=200)** Now let's go ahead and navigate to our resource.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=205)** For our purpose, we are going to store the data in a blob container.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=210)** Let's go ahead and navigate to containers, and create a new one.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=215)** Let's name it sales.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=218)** Let's go ahead and create it.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=221)** Inside our container now, we are going to upload our files.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=226)** Let's go ahead and use the Upload button, and in here, we need to select the files that we generated, which are on the output folder.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=238)** Let's go ahead and select all the files that we generated, which should be about 200 of them.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=245)** And just to keep things tidier, let's go ahead and upload these files inside the folder.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=251)** If you click on Advanced, then you can specify a folder here.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=255)** Let's name it dailysales, and now let's go ahead and upload the data.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=264)** It's going to take a while for all this data to upload.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=266)** We are going to continue loading this data into our data warehouse in the next clip.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), finally, (1), continue (1)
> **CLI Commands:** find (3), node (2), npm (2), make (1)
> **UI Navigation:** navigate to (4), open the (1), select the (1), click on (1)
> **Tools:** command prompt (1), azure portal (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Exploring Azure Synapse Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=0)** - Now that you have a workspace graded, you have a dedicated SQL pool.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=4)** Also our files have been uploaded.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=7)** Let's go ahead and take a look at Synapse Studio, which is a tool that we're going to use for loading data into our data warehouse, running script, managing our tables, etcetera.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=17)** You can quickly open it using the open button in here, Open Synapse Studio.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=24)** This will take us to a different application dedicated for Synapse Studio.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=28)** If you have trouble loading this app, then, make sure that you login all of your other accounts, as well as try incognito.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=36)** Also, sometimes, if you have multiple users signed in, then, it'll have trouble loading their account.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=42)** We can use Synapse Studio for all kinds of operations.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=45)** We can ingest data, explore and analyze, and visualize data.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=50)** For example, as navigating databases, or data.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=54)** And in here, we should see our database, which is our sales data warehouse, which is a dedicated SQL pool.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=62)** And you can explore it, just like any other SQL database, as well as we can navigate the linked resources.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=70)** And we can see things like storage account, and other information as we added here, for example, this is a storage account that we're using for our workspace Next, we have a "Develop" tab.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=83)** In here, we get to create scripts, pipelines, etcetera.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=87)** For example, if we add a new resource, we can choose to add a new SQL script data flow, notebook, spark definition, or we can browse from a gallery.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=98)** We also have the integration tab where you can use to create data integrations between different services.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=106)** For example, we can create a pipeline or we can use the copy data tool.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=111)** We are going to use the tool in the next clip to copy data directly into our data warehouse.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=115)** But also we can create a pipeline which integrates data between different sources.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=121)** We also have the monitoring tab where we can see our SQL pools, the performance, etcetera, and we have the manage tab where we can manage our resources.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=130)** We can create triggers, security, etcetera.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=133)** We are going to take a look at all these operations in the clips to come. For now, I'm going to create a table that will hold our data.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=141)** When we load it, let's navigate to "Develop", and in here, I'm going to create a new SQL script.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=149)** First, we need to choose where we are connected to right now.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=153)** We are connected on a server-less pool, which says: Built-in We need to change that and navigate to sales data warehouse.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=163)** And now, our database, it says data warehouse.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=166)** And in here, we can run this group for creating a new table.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=171)** As you can see, this is a normal create table script.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=173)** We have the store code. We have the date, total sales, total amount.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=178)** And then, in the width, you specify the distribution which we are doing: hash.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=185)** The data in our case is distributed evenly between store code so each store code has almost the same number of records, and we're going to use store code to distribute the data evenly.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=197)** Let's go ahead and run the script.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=201)** And now the query executed successfully.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=205)** The query in this case was very slow because I just put it up my dedicated SQL pool.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=210)** But with time it will be a little faster.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=213)** And if you don't want to lose the script but keep it for later, we can provide it with a name.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=218)** Let's say "Daily sales table".
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=221)** And we can use the "Publish all" button which will prompt us for all our scripts.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=227)** And now, we can do publish.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=230)** And the script "Daily sales table" now is available for us to use later.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=235)** If we navigate to our data, in our workspace details, If you expand tables, we should see daily sales.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=244)** So now our table is ready for us to load data into it, as well as query data from it.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=250)** We're going to start loading data in our next clip.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7)
> **Analogies:** for example (4), just like (1)
> **Code Keywords:** let (4)
> **Definitions:** is a  (4)
> **UI Navigation:** navigate to (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - now (1)

#### Loading data using the copy tool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=0)** - [Instructor] In this demo, we are going to load data into our dailysales.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=5)** We are going to get the data that we uploaded into myworkspacetestfiles storage account inside the container sales.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=14)** In here, we have dailysales.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=17)** We are going to get this data and copy it into our dailysales table.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=22)** Let's navigate to our Synapse Studio.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=26)** First, we need to navigate to the Integrate tab.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=31)** Here we are going to add another resource, and we are going to use a Copy Data tool.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=38)** The test type is going to be Built-in copy task, and we are going to run it once.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=44)** We can also choose to run it on a schedule, for example, if we need to run it daily at some point in time, for example, at midnight.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=54)** Let's go ahead and move to the next step which is going to be our source.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=59)** First, we need to choose the source type.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=62)** In our case, it's Azure Blob Storage.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=65)** Depending on your storage type, you need to choose appropriate type here.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=70)** And we need a connection.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=71)** In this case, we don't have any connection yet, so let's go ahead and create a new one.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=78)** Let's name it DailySales.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=81)** We're going to list all connection is resolved at runtime.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=86)** And for our authentication method, let's go ahead and leave it Account Key.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=90)** We can also choose a shared access URL, for example, and we can paste it here so we don't have to provide our account key.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=99)** In our case, everything is inside our account, and we actually have access to the account.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=105)** If we did not, then we can use a SAS URI.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=108)** Or, alternatively, we can use Azure Key Vault.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=112)** In here, let's specify the service and the secret name.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=116)** This way, we'd get the value directly from the vault.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=120)** For our demo, we are going to go with Account Key.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=127)** Next, we need to choose a subscription as well as a storage account.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=134)** In our case, it needs myworkspacetestfiles.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=139)** And now let's go ahead and create the connection.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=145)** Once the connection is created, now we need to choose a data.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=149)** In here, we can either choose a file or a folder.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=152)** Let's go ahead and browse.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=156)** First, we should get a list of containers, and we have our sales container.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=161)** Let's go ahead and navigate inside.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=163)** Inside we have our dailysales, so we need to open that one as well, and here we can either select the file or we can say OK so it gets the entire folder.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=176)** Let's go ahead and click OK, and now we have selected the entire folder.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=184)** We are going to leave all the options at default.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=187)** We are only going to check Recursively, so if there are subfolders inside our dailysales, we are going to load them as well.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=197)** And in the end, we also can specify by last date modified, so we only get files depending on when they were modified.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=206)** For our case, we are going to leave it empty, but if you want to get only certain files, then you can provide a date here.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=213)** Let's go ahead and move to the next step.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=217)** Here it will automatically detect the format for us, so the format is text which is a CSV file, and it's comma-delimited by a comma, as well as the First row as header is automatically checked.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=233)** We need to make sure that this is checked because in our data the first row is always headers.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=239)** And if we do not check this, then we'll get an error because some data in the headers cannot be translated.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=247)** We're going to leave the compression as None and move on to the next step which is a target.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=253)** Now, in here we need to choose a target type.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=256)** For our case, we are loading data into a dedicated SQL pool.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=262)** So for our target, we need to choose Azure Synapse dedicated SQL pool.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=270)** And in here, we don't have to create a connection because we have a sales data warehouse connection already.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=276)** Now, once we choose a connection, then we need to choose a table.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=280)** We can either decide to create a new table or we can use an existing table.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=285)** For example, in this case it will create a table for us, Azure Blob Storage file, which we don't want, so we're going to use an existing table.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=295)** And we only have one table that we created earlier called DailySales.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=301)** Let's go ahead and move to the next step now.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=305)** In here, we can choose how we want to map our columns.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=309)** By default, most of the time, it will automatically map, but if there is a mistake, then you can rectify it here.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=315)** As you can see, all the columns are mapped properly.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=319)** If you wanted to change the columns, you could do it here.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=322)** You could add a new mapping, you could remove existing ones, et cetera.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=326)** For our properties here, this is set fine, so let's go ahead and move to the next step.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=333)** And finally, we need to provide our task with a name.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=337)** Let's name it DailySales.
>
> **[5:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=340)** In here, we can choose to enable logging, staging, or we can choose to enable or disable PolyBase.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=347)** Now, we'll take a look later on what PolyBase is and what a COPY Command is.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=353)** We are going to import data using PolyBase and COPY Command directly using scripts without using an interface so you can understand what the different options are and use them independently.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=365)** And now let's go ahead and move to the next step which is going to be a review of what we did, and let's go ahead and deploy it.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=376)** The deployment process has finished, so let's go ahead and click on the Finish button to complete the process.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=383)** And now in here, in the Integrate tab, we should have a pipeline.
>
> **[6:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=388)** If we open it, we get the Editor.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=391)** In here, we have only the Copy_data activity, so let's go ahead and add a trigger, and we could choose to trigger now.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=401)** Once we click OK, the copying process should start.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=406)** To view the pipeline, we can open the notifications and click on the View pipeline run to view the pipeline running.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=415)** If we click on it, it will take us to monitoring where you have pipeline runs.
>
> **[7:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=420)** And in here, we could see the status, when it started the duration, et cetera.
>
> **[7:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=426)** And now our pipeline run has finished successfully.
>
> **[7:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=429)** Accidentally, I ran the pipeline twice so we should have twice as many records.
>
> **[7:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=434)** Let's navigate to our data, and in here let's go ahead and run a query.
>
> **[7:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=442)** We can click on our sales data route and run a new empty script.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=447)** Let's do select count all from DailySales.
>
> **[7:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=453)** And we have about 3 1/2 million records which is about twice the data we have in storage.
>
> **[7:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=460)** And let's also select a couple of records from the top.
>
> **[7:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=471)** And we can see that we have a StoreCode, the Date, TotalSales, and TotalAmount, so our COPY Command worked.
>
> **[8:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=481)** As you notice, it was quite easy for us to create a pipeline to log data from storage into our data warehouse.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=488)** We are going to look at how to use the COPY Command directly as well as use the PolyBase command directly by writing the scripts ourselves in the clips to come.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), case, (6), type. (2), type, (1), default. (1)
> **Env Vars:** copy (4), sql (2), url (1), sas (1), uri (1)
> **UI Navigation:** click on (4), navigate to (3), select the (1), open the (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Load data using the COPY command
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=0)** - [Instructor] In this demo, we are going to learn how to use a Copy Command directly without using the UI that Azure Synapse Studio provides.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=11)** We are going to get the data from our sales folder inside here, and we are going to load it into a table into our dedicated SQL pool.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=20)** To make it simple, I'm going to create a new table.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=22)** So either if you use your Exercise Files or if you want to view the data later, then you can see what each query return.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=33)** Let's create a new table named DailySalesCopyCommand, and let's go ahead and run the query.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=46)** Now that our table has been created, let's navigate to the Develop tab, and in here we are going to create a new script.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=56)** This will contain the logic for our Copy Command, so let's name it Copy Command, and let's publish the changes.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=68)** And now let's go ahead and write our Copy Command.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=72)** I'm going to paste the entire Copy Command, and we are going to go through it step by step.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=77)** First, we need to make sure that when we create the script, we're connected to our dedicated SQL pool.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=84)** So we need to choose sales data warehouse or if you named it something else.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=90)** So the Copy Command is going to go as following: COPY INTO, then we specify the table name, so in our case, it's going to be DailySalesCopyCommand.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=103)** Then we specify the FROM.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=106)** We get the URL from our container where we have our data.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=109)** If you navigate to Properties inside that sales container, and we can see the URL here.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=116)** So we need to copy this, and we place it here.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=120)** Inside the sales, we want to go into the dailysales folder.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=124)** And inside the dailysales, we want to get all the CSV files, so we use a *.csv.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=134)** Next, we need to specify the WITH options.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=137)** So, first, we have the FILE_TYPE which is CSV.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=141)** Then we need to specify CREDENTIALS.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=144)** We can use all sorts of different credentials.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=147)** The Copy Command does not require any elevated access, so we can easily use a Shared Access Signature.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=154)** So in the CREDENTIAL, for IDENTITY, we're going to use Shared Access Signature, and then we need to get the SECRET.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=162)** If we navigate to our sales container, we need to navigate to Shared access token, and in here we need to create one.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=174)** So we need to choose when it start and when it expires, so let's go ahead and say it expires tomorrow, and let's generate it.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=185)** The value that we need to copy is Blob Shared Access Signature token, not the URL.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=190)** Once we copy it, then we provide it here in the SECRET property.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=195)** Next, we specify the ENCODING which is UTF8, and then we specify the FIELDTERMINATOR.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=204)** Here in our CSV files, the values are separated by a comma, so each column is separate by another using a comma.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=212)** If it was something else, then, for example, in a lot of cases, you might have a text file, and then a separator is a pipe, so you'd put a pipe in here.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=223)** And finally, most importantly, we need to specify that the FIRSTROW is 2.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=229)** This tells the Copy Command that it should skip the first row because the first row is header, so it should start from two.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=237)** If we don't specify this here, then our Copy Command will fail.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=242)** And now if we run the Copy Command, all should work.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=246)** All the data should be imported into our table.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=250)** The only thing that we haven't done here is specify the column mapping.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=255)** That's because our table structure and our CSV structure matches perfectly.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=260)** We have the StoreCode, Date, TotalSale, TotalAmount, and the tables are like that in our data warehouse.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=267)** If we wanted to map columns, then we need to open parenthesis, and in here we specify the column, so StoreCode maps to the first column.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=279)** The index starts from 1, not 0.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=282)** Then the Date maps to the second, TotalSales maps to the third, and TotalAmount.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=293)** Just to make sure, let's view our CREATE TABLE script, and make sure that we have typed the column names properly, so StoreCode, Date, TotalSales, TotalAmount.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=308)** And now we have set column mapping.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=311)** And now the property that we can set here in the columns is a default value.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=315)** For example, if the StoreCode is empty or null, then we can specify what do we want to enter there.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=321)** To do that, we specify the default keyword, and then we specify the value that we want.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=327)** So let's say that if there was no StoreCode, then we're going to use a value zzz.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=333)** And now let's go ahead and publish our changes so we don't lose them.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=341)** And finally, let's go ahead and run the Copy Command.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=345)** If we run it as it is right now, it might take a while for this to finish.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=349)** So to get around it, let's go ahead and load just one file.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=353)** Let's load the sales, sales-1.csv file.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=357)** This is just one file with 1,000 records so it should be faster.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=364)** And our Copy Command has completed successfully.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=368)** So let's go ahead and select the data to see if it's there.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=373)** We need to do SELECT all from DailySalesCopyCommand.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=384)** And indeed, we have data, so our Copy Command is working properly.
>
> **[6:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=389)** It's important that when you're testing the command, you work with only a small batch of files.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=395)** For example, in this case, you only copy data from sales-1, but you might have a test environment where you copy only a small batch of data so you can see the queries are working properly or not.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=407)** Now that our query is working, let's go ahead and change it so it gets all files inside dailysales.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=413)** Let's go ahead and replace sales-1 with a wildcard, and let's run the command again.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=425)** And as we can see now, we got an error: Not able to validate external location.
>
> **[7:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=431)** That's because when we created our Shared Access Token, we only told it to read.
>
> **[7:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=437)** So it has access to read the file, but it doesn't have access to list all the files that it has to read.
>
> **[7:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=446)** So unless we specify a specific file here, like sales-1.csv, it won't be able to read.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=452)** Let's navigate to our storage account, and in here we need to create a new access token.
>
> **[7:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=457)** In the Permissions, we also need to select List.
>
> **[7:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=461)** This will give you the ability to list all the files inside the folder.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=465)** And now let's generate our token.
>
> **[7:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=469)** Let's copy the Blob SAS token and replace it here.
>
> **[8:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=481)** If we run it again, then it should log all the data.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=488)** And now it copied all the data from our storage into our table.
>
> **[8:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=493)** Let's go ahead and make a COUNT query.
>
> **[8:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=499)** And we have almost 1.8 million records, so our Copy Command was successful.
>
> **[8:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=506)** We're going to look at how to use PolyBase in the next clip.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), case, (2), finally, (2), return. (1), else. (1)
> **Env Vars:** csv (4), url (3), sql (2), secret (2), copy (1)
> **UI Navigation:** navigate to (5), select the (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (3)
> **File Paths:** sales-1.csv (2)
> **SQL:** create table (1), select (1)
> **Definitions:** is a  (2)

#### Load data with PolyBase
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=0)** - [Instructor] In this demo, we are going to load data into our data warehouse using PolyBase.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=6)** PolyBase enables us to query data directly using T-SQL from multiple sources.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=13)** We could query data from Oracle, Teradata, MongoDB, Hadoop clusters, Cosmos DB, et cetera, without installing any external client software.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=23)** It enables us to define external tables that we can query later on without having to know the structure, as we can define the structure for a data using external tables.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=34)** Now let's go ahead and copy Sales data into our dedicated SQL pools using PolyBase just like we did with our Copy command in our previous clip.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=45)** First, we need to create a master encryption key, and we need to define a password.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=51)** In this case, you can specify a more strong password, but just for demonstration purposes, I'm just going to type in a password here.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=59)** This only needs to be done once.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=62)** Let's go ahead and run this query.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=65)** You can select the query that you want to run and hit Run.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=72)** Next, we need to create the credentials.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=75)** These are database scoped credentials that we are going to use to access our storage.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=81)** This could be Azure storage or any other location.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=85)** This way, when you query your data, you don't have to define the credentials always.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=90)** We only define it once here, and we can reference it.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=94)** In our Copy command, we use shared access signature.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=98)** This time we are going to use an account key.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=101)** To do that, we need to specify the identity as user, and we need to get the secret key from our storage.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=109)** Let's go ahead and navigate to our storage account.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=114)** Our storage account was myworkspacetestfiles.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=119)** And in here we need to navigate to Access keys, and we are going to copy the first key, so we need to hit Show keys, and now let's go ahead and copy this.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=134)** Let's navigate back to our workspace, and we need to provide that value here.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=139)** So we specify the identity as user, and then we specify the key as secret.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=147)** Next, we need to specify our data source.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=150)** And we do that using CREATE EXTERNAL DATA SOURCE, and then we specify the name, inside which we specify the options.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=159)** The TYPE is going to be HADOOP, so we are going to use the Hadoop file system.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=164)** Next, we need to specify the LOCATION.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=167)** Now, with the Copy command, we use a location of our container.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=172)** In this case, it's going to be a little different.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=174)** Since we are going to use a Hadoop file system, we need to specify the wasbs in front.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=182)** This is going to be our protocol.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=184)** It stands for Windows Azure Storage Blob, and it's a protocol for accessing data on the Hadoop distributed file system.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=192)** Next, we need to specify our container name and then the at sign and then the storage account name.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=199)** Back in our storage, our storage account is named myworkspacetestfiles.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=204)** And if we go to Containers, here we have the sales container, so we are getting the data on the sales container.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=215)** And then we specify .blob.core.[windows.net](https://windows.net).
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=220)** This will get the data from our sales container, which is on the myworkspacetestfiles.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=226)** And then we need to specify the credential.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=229)** We created credentials named SalesDataCredential here.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=234)** And now we are going to use those credentials to access our data source.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=239)** First, let's make sure we run these queries.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=241)** Let's go ahead and create our credentials and then create our data source.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=253)** Now that we have a data source, we need to create our file format.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=257)** These will tell our external table what format the data is.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=262)** Here we are creating an external file format, and we are naming it CSVFileFormat, and then we specify the options.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=272)** The type is going to be DelimitedText, so CSV, and then in the options we specify the FIELD_TERMINATOR, which is a comma, then we specify the STRING_DELIMITER, and then it's very important that we specify that the FIRST_ROW is 2.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=289)** Since our data has headers, if we don't specify these, then we'll get a conversion error.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=296)** Most likely, it will try to convert the DateTime, and then it can't since the header is not a valid DateTime.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=304)** Let's go ahead and run this query.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=308)** And now finally, the last thing that we need to create is our external tables.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=314)** External tables hold the definition of the data that we want to retrieve.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=319)** So in our case, let's go ahead and create an external table named Sales_External.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=324)** Or let's change the name to DailySales.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=328)** Let's name it DailySales_External.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=333)** This will hold the definition, and we can query data using it.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=337)** We need to specify the columns, so we have a StoreCode, a Date, TotalSales, and the TotalAmount.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=344)** And now in the WITH, we specify the options.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=347)** First, we have the LOCATION.
>
> **[5:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=350)** In the LOCATION, we are specifying the folder dailysales and then specifying sales-1.csv.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=357)** We can also not specify the sales-1.csv, but to test things first, let's go ahead and only load one file, then we can change it so we can load everything.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=369)** Next, we specify the DATA_SOURCE, which is going to be SalesDataSource that we created earlier here.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=377)** Next, we specify the FILE_FORMAT, which is going to be a CSVFileFormat.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=383)** And now we are ready to run the query.
>
> **[6:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=394)** And our table has been created.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=398)** Let's go ahead and run a simple query.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=401)** Here we can query the data directly from the external table.
>
> **[6:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=404)** This will get the data from storage and bring it to us using just SQL.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=410)** Let's go ahead and get the top 10 records.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=415)** And now let's run our query.
>
> **[6:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=419)** This is querying data directly from storage.
>
> **[7:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=426)** And here we can see the data.
>
> **[7:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=428)** We have a StoreCode, Date, TotalSales, and TotalAmount.
>
> **[7:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=433)** One last step is to get this data and load it into a table, not an external table but an internal table so we can query it easy without querying it directly from storage.
>
> **[7:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=445)** Let's go ahead and do Create.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=449)** Let's name our table DailySalesPolybase.
>
> **[7:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=454)** Next, we need to do AS, so we are going to use Create Table AS.
>
> **[7:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=460)** Select all from DailySales_External.
>
> **[7:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=464)** This will create the DailySalesPolybase table from the data inside our DailySales_External.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=474)** And we got an error.
>
> **[7:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=477)** There indicates that we have to specify a distribution, so let's go ahead and specify one: with, and inside here we are going to specify the DISTRIBUTION.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=488)** The DISTRIBUTION is going to be HASH, and we are going to use StoreCode.
>
> **[8:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=496)** Now let's go ahead and run the query again.
>
> **[8:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=503)** And the query completed successfully.
>
> **[8:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=506)** Let's go ahead and query the table now.
>
> **[8:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=519)** And indeed now, we have data.
>
> **[8:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=521)** We have mold it from our external table into our internal table.
>
> **[8:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=525)** From here, we can create reports and query the data as frequently as we need to, as well as we can enrich the data by joining it with other tables.
>
> **[8:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=537)** One last thing that we need to do is change the LOCATION.
>
> **[9:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=542)** In here, we specify sales-1, but we need to get all the data inside the folder.
>
> **[9:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=549)** So let's go ahead and remove this part.
>
> **[9:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=552)** We are only going to specify the dailysales folder.
>
> **[9:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=556)** But in order for this to change, first, we need to drop the external table and then recreate it.
>
> **[9:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=562)** To drop, we use a drop EXTERNAL table command, then we specify the table name.
>
> **[9:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=567)** Let's go ahead and run this query.
>
> **[9:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=572)** And now let's recreate our table.
>
> **[9:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=585)** Let's make sure that if we query the external table, we get data.
>
> **[9:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=589)** And finally, to log the data, we use Create Table AS with, and then specify select all from DailySales_External.
>
> **[9:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=598)** We already created our table so I'm not going to run this again.
>
> **[10:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=601)** But if you run this then, you need to create another table because this already exists.
>
> **[10:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=607)** Make sure to use Publish all to save your changes so you can reuse this query later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), case, (3), finally, (2), this. (1)
> **Env Vars:** location (4), sql (3), external (2), distribution (2), create (1)
> **UI Navigation:** navigate to (2), select the (1), go to (1)
> **CLI Commands:** make (3)
> **File Paths:** sales-1.csv (2)
> **Definitions:** stands for (1), is a  (1)
> **URLs:** [windows.net](https://windows.net) (1)
> **Analogies:** just like (1)

#### Transform data using data flows
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=0)** - In this demo, we are going to create a more advanced pipeline that joins the data between two files and then stores it in a table.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=8)** First, we're going to create a new container.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=12)** In here, we're going to store a file name stores.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=16)** Let's go ahead and create the container, which is named stores.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=20)** And we're going to upload the file, which you will find in the exercise files.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=26)** Here on the exercise files, we'll find the file name stores.json.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=31)** The stores are not a CSV format.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=34)** This way, we'll give you a chance to look at how to parse JSON files as well as CSV files.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=40)** Let's go ahead and select it.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=43)** And upload the file.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=46)** Now it's time to get Synapse Studio.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=51)** And in here we need to navigate to integrate And we're going to create a new pipeline.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=59)** For these, now we are going to use, move and transform.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=63)** And you're going to use a data flow.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=67)** Just drag and drop the data flow here, provide a username.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=72)** Let's say, merge, stores, and sales.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=76)** Next, you need to navigate to settings.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=79)** And in the data flow section, you need to create a new one.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=87)** First, we need to add the source.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=89)** In the source settings first, let's specify a name.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=93)** Let's go ahead and add sales first.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=97)** We are going to use an ingestion data set, and we're going to create a new data set.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=107)** Our files are on Azure Blob Storage.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=109)** So we need to choose Azure Blob Storage.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=115)** Next, you need to specify the format, which is Delimited Text.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=121)** And now let's give it a name.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=123)** Let's name is sales.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=127)** And we need to link it to a service.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=129)** Let's go ahead and send you.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=133)** And now we are going to create a sales connection.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=136)** So, let's name it, sales connection.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=139)** These will point out to our sales data.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=144)** We are going to leave the settings at default, and we're going to select a subscription.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=149)** Next, we need to select a storage account, which is my workspace test files.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=158)** And now, let's go ahead and create our connection.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=163)** Now we need to specify the path where our files are.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=167)** So, let's go ahead and use a browse button.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=171)** Our files are in the sales container, inside the daily sales folder.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=178)** We need to open the folder and click OK, without selecting any files.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=184)** Also, we need to select that the first row is the header.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=189)** And now let's go ahead and click OK to save.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=196)** Now we have our sales source.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=198)** And if we look at the projection, we can see that it automatically found the columns.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=205)** We have StoreCode, Date, TotalSales and TotalAmount.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=208)** And we can change the type here as well.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=210)** Let's go ahead and change the date type from string to date type.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=218)** And total sales and total amount are going to be numbers.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=223)** Which are going to be big integers.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=225)** So we need to choose long.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=233)** Now let's go ahead and add our other source.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=237)** This is going to point to our stores.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=241)** Let's name it stores.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=245)** And we're going to create a new data set.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=250)** The location is Azure Blob Storage just like before.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=255)** And this time we're going to choose JSON.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=260)** Let's name it stores.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=263)** And then, we're going to link it to a service.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=266)** To keep it simple, we are going to create a new one.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=269)** Let's name it stores connection.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=273)** And let's go ahead and select the subscription.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=277)** And then the storage account is going to be the same, my workspace test files.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=283)** And let's go ahead and create this connection.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=289)** Let's go ahead and browse, and select the file that we want.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=293)** So this time we're going to use a stores container.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=297)** And inside here, we're going to select the file stores.json, as we only have one.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=305)** And now let's go ahead and save the changes.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=311)** If we look at the projection, we should see all the columns.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=316)** We have the city, code, size, latitude, longitude population, and state.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=322)** The property that we are going to join with is the code.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=327)** At this point, we have the sales, we have the stores.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=331)** Now, all we need to do is join two together, and then store it into a table.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=336)** Next we need to click the plus button here, and we are going to add a join.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=344)** Let's name it store sales.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=348)** So the left stream is going to be the sales.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=352)** The right stream is going to be the stores, pretty straightforward.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=357)** And we need to choose a join type.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=359)** By default, we have Inner, and that's what we want.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=362)** We only want to join if data in both sides exists.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=366)** And now we need to select the condition.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=373)** First, we need to select the sales column.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=376)** The Azure UI is a little hard to use, but bear with me.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=380)** The sales column is going to contain a store code.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=387)** And this should equal the code from the stores.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=396)** This is all the settings we need to change for our join.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=399)** We need to specify the left, the right, the join type and the condition.
>
> **[6:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=403)** If we navigate to the inspect tab, we can see more details.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=407)** We can see that we have four columns in the left, seven in the right and 11 in total.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=413)** And now we need to add the final step, which is an output where the data is going to go.
>
> **[7:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=420)** Let's go ahead and click the plus button.
>
> **[7:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=427)** And here we need to choose a destination, which is called a sink.
>
> **[7:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=433)** Let's name it Synapse Analytics.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=436)** And then the incoming stream that we want to process is a store sale join.
>
> **[7:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=441)** We would also directly process sales or stores, but for our case, we're going to use store sales.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=449)** Next, you need to choose a data set.
>
> **[7:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=451)** Here, we specify where the data goes to.
>
> **[7:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=454)** And now we are going to use Azure Synapse Analytics dedicated pool.
>
> **[7:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=459)** Here we need to select Azure Synapse Analytics.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=465)** Then we to specify the name.
>
> **[7:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=469)** And in the link service, let's go ahead and create a new one.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=474)** Let's name it sales data warehouse, as this is a dedicated pool that we're connecting to.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=483)** First, you need to select a subscription.
>
> **[8:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=487)** And then the server name, which is my learning workspace.
>
> **[8:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=492)** Next we need to specify the database name.
>
> **[8:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=495)** And the database name is going to be, sales data warehouse.
>
> **[8:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=500)** And here let's go ahead and specify authentication.
>
> **[8:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=502)** For our demo we are going to use SQL authentication.
>
> **[8:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=506)** The username was SQL server admin.
>
> **[8:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=512)** And the password is the one that you typed in, when you created the workspace.
>
> **[8:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=519)** And now let's test the connection.
>
> **[8:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=524)** And the connection was successful so, let's go ahead and create it.
>
> **[8:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=530)** Now we need to either select a table, or create a new.
>
> **[8:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=534)** To make it easier, I'm going to create a new one.
>
> **[8:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=538)** And name it store sales.
>
> **[9:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=543)** And let's go ahead and click OK.
>
> **[9:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=546)** And now finally, we have all the steps.
>
> **[9:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=550)** We have two inputs, a join, and an output.
>
> **[9:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=554)** Let's go ahead and change the name of our data flow.
>
> **[9:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=557)** Let's name it, merging sales and stores.
>
> **[9:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=560)** And finally, let's publish our changes.
>
> **[9:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=564)** And as we can see, we got an error.
>
> **[9:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=568)** It says that it needs a place for staging environment to store the data.
>
> **[9:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=573)** Let's go ahead and close this.
>
> **[9:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=576)** To fix this, we need to navigate to settings on our pipeline.
>
> **[9:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=581)** In here you need to scroll to the bottom, and we need to link to a staging service.
>
> **[9:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=589)** Let's go ahead and create a new one.
>
> **[9:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=594)** Let's name it staging.
>
> **[9:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=597)** And let's select our subscription.
>
> **[10:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=600)** And let's select our account.
>
> **[10:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=606)** Let's go ahead and create our connection.
>
> **[10:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=613)** And now we to specify the folder.
>
> **[10:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=616)** Let's go ahead and click browse.
>
> **[10:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=618)** And in here, let's go ahead and store it in our sales data warehouse, This is a logging folder that was generated automatically to store data.
>
> **[10:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=629)** If you don't want to store it there, then you can specify another one.
>
> **[10:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=633)** And now finally, let's go ahead and publish our changes.
>
> **[10:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=642)** Now that the publishing has completed, let's go ahead and close all these tabs.
>
> **[10:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=649)** And that's how we get our pipeline.
>
> **[10:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=653)** Which was called pipeline 1.
>
> **[10:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=655)** If you double click on it, it will open the details.
>
> **[10:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=659)** And then you can add a trigger.
>
> **[11:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=662)** And let's go ahead and trigger it now.
>
> **[11:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=669)** To view the details of the pipeline, you can navigate to monitoring.
>
> **[11:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=674)** And then in here we have pipeline runs.
>
> **[11:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=677)** Let's go ahead and click on it, pipeline 1.
>
> **[11:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=681)** And we can see the progress here.
>
> **[11:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=684)** Once it's finished, then we should have a table called store sales, with all the properties combined.
>
> **[11:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=691)** If you click on the data flow details, in here, you'll get all the steps, and then you can click on each of those to see the status.
>
> **[11:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=701)** At this point, all has completed.
>
> **[11:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=704)** So if you click on stores, you can see the status.
>
> **[11:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=708)** Then you could move to join.
>
> **[11:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=711)** And in here, you can see the data, as well as the final output.
>
> **[11:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=716)** So while the process is running, you can see where it's at, and the progress it's doing.
>
> **[12:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=723)** Now that our pipeline has finished, let's navigate our database.
>
> **[12:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=729)** And let's go ahead and write a new query.
>
> **[12:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=734)** Let's select the top 10 items from store sales.
>
> **[12:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=745)** And we have the data.
>
> **[12:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=747)** We have historical, total sales, total amount, city, code, size, latitude, longitude, population, and state.
>
> **[12:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=755)** So our data was joined successfully.
>
> **[12:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=758)** As you can see, using pipelines is very easy to create data transformation.
>
> **[12:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=763)** We can add as many steps as we want.
>
> **[12:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=765)** We could join the data, transform it, parse it, and then store into our data warehouse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (48), finally, (3), default, (2), type. (2), case, (1)
> **UI Navigation:** select the (6), navigate to (5), click on (5), open the (2), drag and drop (1)
> **Env Vars:** csv (2), json (2), sql (2)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **CLI Commands:** find (2), make (1)
> **File Paths:** stores.json (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (1)

#### Challenge: Loading data using the copy tool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980&t=0)** - [Instructor] In this challenge, I would like you to load data into the dedicated SQL pool that we have created earlier using the built-in copy tool.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980&t=15)** First, create a new table called DemoSales, and then load all the sales data in the Exercise Files into the DemoSales table.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980&t=25)** Once you're done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Loading data using the copy tool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=0)** - To solve the challenge, first, I started by creating a new container in my workspace test files, storage account.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=16)** I named my container "SalesChallenge".
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=23)** Next, I proceeded to upload those sales files from the exercise files.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=35)** And I uploaded the files in a folder called "dailysales".
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=44)** Once my files were uploaded, I navigated to my senior Synapse Studio account and navigate to the Developer tab and create a new script.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=58)** I changed the database to "salesdw".
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=63)** And then added the script to create my table.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=66)** The table "DemoSales" has "StoreCode", "Date", "TotalSales", "TotalAmount", and a property for "IsVacation".
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=75)** Same as you'll find in the sales folder.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=79)** For the distribution, I used the "StoreCode" and finally created the table.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=87)** Now, finally, I navigated to the Integrate tab.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=92)** And from here, I entered a new resource of type "Copy Data tool".
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=99)** I chose the "Built-in copy task" for the task type and then proceeded to create a new source.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=107)** The source type was "Azure Blob storage".
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=110)** And for the connection I created a new connection.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=116)** I named it "SalesChallenge" and selected the storage account.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=128)** After creating the connection to my sales challenge, I browsed the folder where my files were.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=136)** Using the browse button, I navigated to the sales challenge container and then selected the daily sales.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=149)** Next, I move to the Configuration tab where I left everything as default.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=154)** I made sure that the "First row as header" was checked and the file format was "Text" and the "Column delimiter" was "Comma".
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=169)** And then move on to the Target configuration.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=173)** For the target, I chose "Azure's Synapse analytics dedicated SQL pool".
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=180)** And for the "Connection", I use the "salesdw".
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=186)** And I use an existing table, which was "DemoSales" that I created earlier.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=193)** Next, I moved to the Column configuration where I specify where each column goes to.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=203)** The only property that was not mapped, since the header did not match was the vacation day.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=209)** So, I selected that "IsVacationDay" property to map to my "IsVacationDay".
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=216)** And finally hold onto the next step.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=220)** I gave my task a name, I named it "CopyChallenge",
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=232)** and finally moved on to the Review step.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=239)** And finally, I click the "Finish" button to complete the deployment.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=245)** Now that my pipeline was completed, I navigated to the Monitor tab.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=250)** And in here, I could see that the pipeline was running and it was in progress.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=261)** In order to view the pipeline running details, I click on the "Details" icon.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=266)** And from here, I could see the pipeline status, I could see how many data has been written, how many roles have been written, et cetera.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=276)** The sales folder contains almost 1 million records.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=280)** So we are almost halfway through done.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=285)** And now we are a 640,000 records written and at 1 million rows written.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=294)** We can see that the pipeline has succeeded.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=298)** Next, I navigated to my database and created a new query.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=306)** Just to make sure my table had rows, I ran a simple query to see the data inside the table.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=315)** And the table has data, it has "StoreCode", "Date", "TotalSales", "TotalAmount", and "IsVacation", which indicates if it's a vacation day or not.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=324)** So the copy command was successful.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), default. (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - to (1)
> **Non-Speech:** (upbeat music playing) (1)


### 3. Streaming Data into Azure Synapse Analytics

#### Data streaming scenarios
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=0)** - Now that we have set up our data warehouse or the dedicated SQL pool and learn how to load data into it from our data lake, we are going to look at how to stream data in real time from various sources into our data warehouse.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=15)** The first question that might come to mind when you think of streaming events directly into your data warehouse is why would we want such a scenario?
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=24)** We could get the data directly from our data lake only when we need it.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=29)** And that is true.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=30)** If we want to do some ad hoc queries once in a while, then we don't need to log the events into our data warehouse.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=38)** But if you want to generate report with data related with other tables, then we need to store the events in our data warehouse inside a table.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=47)** This makes it easier and faster to query and enrich the data for different reports as well as use it for machine learning models.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=58)** For our scenario, we are going to stream real time, checkout information from our stores.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=65)** Every time a customer starts and completes a checkout, we are going to stream data into our data warehouse.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=72)** We're going to collect the full information in streaming.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=75)** StoreCode to identify the code, a city, where the story is located at, the date timestamp, when the process starts, saw the checkout process, the duration, so how long the checkout process took, variable SelfCheckout to identify if it was a self checkout or it was using a cashier, and another property to indicate if it was paid with cash or with a credit card, named CashOnHand.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=103)** This data will be sent at the end of the checkout process.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=107)** As soon as we send the data, it will go directly into our data warehouse from which we can generate all sorts of different reports.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=116)** We can have a report refresh as often as we want.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=119)** Since we store the data in a data warehouse, we don't have to query it from storage all the time.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=126)** We're going to create our streaming process in the next clip.

> [!info]- Semantic Content
>
> **Code Keywords:** while, (1), self (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### Creating a Stream Analytics job
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=0)** - In order to stream data.
>
> **[0:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=1)** First, we need to create an Event Hub.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=5)** You can quickly find Event Hubs by searching for them.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=11)** Let's go ahead and create a new Event Hub Workspace.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=17)** Let's select the my workspace group, so we can delete everything together at the end.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=23)** And now let's provide a namespace with a name.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=27)** Let's name it StoreCheckout.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=33)** And for the pricing tier, let's go with standard.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=39)** And let's go ahead in review and create our namespace.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=45)** Looks like with that things are valid so lets go ahead and create it.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=53)** Now let's go ahead and navigate to our workspace.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=57)** The first thing we need to do is navigate to Event Hubs.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=62)** And we're going to create a new Event Hub.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=67)** Let's name it checkout.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=71)** And let's ahead and create it.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=74)** As you can see, we are leaving most of the settings unchanged as we are not focusing on the event part of things.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=81)** We're just going to focus on how to get events and then send them to Azure Synapse Analytics.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=87)** Now that we ave our Event Hub, we need to create a stream analytics job.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=93)** This will process data from our Event Hub, and then send it somewhere else.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=98)** Let's go ahead and duplicate the tab, as you're going to need this tab for later.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=104)** First, let's go ahead and find the stream analytics job service.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=109)** And we are going to use the stream analytics job service.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=114)** As always, we need to create a new one.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=119)** Let's name it, checkoutToSynapse.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=124)** And let's use the my workspace group.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=128)** And we're going to leave the rest of the settings as default.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=136)** Now that the deployment is complete, let's go ahead and navigate to the resource.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=140)** And now in here, you have to tell it where it's going to get the data and where is it going to send them.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=146)** First, we need to go to the job topology input.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=150)** And we need to add a stream input.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=153)** In our case, it's going to be an Event Hub.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=159)** Let's name it, CheckoutEvents.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=165)** Next, we need to select our hub namespace, which we named StoreCheckout.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=175)** And the even hub name that we created was checkout.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=179)** We're going to automatically create a new Hub consumer group and for authentication mode, we are going to use a connections string.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=190)** And we are going to tell it to create a new one automatically with the required permissions.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=195)** The serialization format for our data is going to be JSON.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=200)** And finally, let's go ahead and save it.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=204)** Now that we have input, we need to create the output.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=209)** Let's go ahead and add a new one.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=212)** In this case, it's going to be Azure Synapse Analytics.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=217)** Let's name it Synapse.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=221)** And then the database is going to be SQL data warehouse and authentication mode is going to be connection string.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=230)** The username is sqladminuser, and the password is the password that we set when we created our workspace.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=243)** And finally, we need to specify the table name, let's name it, CheckoutEvents and let's go ahead save it.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=255)** The first thing that we're going to notice is that the test will fail that's because the table does not exist on the other side.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=264)** And as we can see the connection test fail.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=267)** If you open on the details, it says that "SQL data warehouse output needs a job storage account to run."
>
> **[4:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=276)** Let's go ahead and navigate back to the job and in the settings, you need to navigate to storage account settings.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=286)** Here, we need to add a storage account.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=289)** Let's go ahead and select from our subscription.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=293)** And use a my workspace test files account.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=296)** Let's go ahead and save the changes.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=300)** And now if we never get back to our output, if we test the connection, we should get another error.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=308)** This should tell us that "The table does not exist on the other side, name, CheckoutEvents."
>
> **[5:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=316)** And "SQL database table does not exist."
>
> **[5:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=319)** but that's alright.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=321)** We'll create it later when we explore our data.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=327)** Now that we have input and output, we need to navigate to query.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=333)** Here in the query, we specify an SQL query.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=338)** We do SELECT all INTO, which is going to be the destination, and then FROM our input.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=344)** So first, let's go ahead and change the output, which is going to be Synapse.
>
> **[5:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=350)** And then, the input is going to be CheckoutEvents.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=357)** If we leave select all here, this will fail because the events have extra properties like an even date, processed or not, et cetera.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=365)** And it tries to enter those values into our table, which it can not find a column for.
>
> **[6:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=371)** So here we need to specify all the columns that we want from our event, which is the StoreCode, Date, Duration, Operator, SelfCheckout and CashOnHand.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=382)** Now, let's go ahead and save the query.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=387)** Now that we can see the query, one last thing that we need to do is to start the job.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=391)** We need to navigate to the Overview tab.
>
> **[6:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=394)** And from here, we need to click Start.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=398)** This now, will start the job so it process data from our events stream and then move them to the data warehouse.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=407)** And now, since our job has started, one last thing that we need to do is create the table.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=413)** Let's navigate to our Synapse Studio.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=415)** And in here, they're going to run the screen that creates our table.
>
> **[7:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=420)** We need to create a table name, CheckoutEvents, which has a StoreCode, Date, Duration, Operator, SelfCheckout and CashOnHand.
>
> **[7:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=429)** And for the distribution, we are going to use round-robin instead of StoreCode.
>
> **[7:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=435)** This will make the inserts faster.
>
> **[7:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=440)** Let's go ahead and run the script.
>
> **[7:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=444)** And now we have our table.
>
> **[7:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=446)** If you want to copy paste the script, you'll find it in the exercise files.
>
> **[7:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=451)** Now that we have everything set up, we are going to stream data into our data warehouse with test events in our next clip.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), case, (2), finally, (2), delete (1), else. (1)
> **UI Navigation:** navigate to (7), select the (1), go to (1)
> **Env Vars:** sql (4), json (1), select (1), into (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** checkouttosynapse (1)
> **SQL:** select (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### Testing data streaming using sample data
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=0)** - [Instructor] In this demo, we are going to send Events to our Events stream that we created earlier, using a test application.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=8)** In the exercise files, inside the folder C naps Event Generator, you'll find an application.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=14)** Open the folder and then open the Windows Terminal inside this folder.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=19)** You can do that by using right click and then 'Open in Terminal' or on the Navigation bar you can type CMD and it will open the Terminal inside this folder.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=33)** The first thing that you need to do is run NPM install as this is a node JS application.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=41)** This application will send test data to our Event stream So the data can be processed and moved into our Data Warehouse in order for us to test the process.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=52)** Now that the baggage is there installed, we can do NPM run generate to start generating data.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=59)** The first thing that it's going to ask us is to enter Connection string as it does not know where to send the data.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=68)** So let's go ahead and navigate to our stream and we need to open the Store Checkout stream that we are using, which is a Workspace.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=76)** First, we need to know the Event Hub name, which is Checkout.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=80)** Remember this as we are going to use it later.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=83)** And if you named it something else, please make sure to note that.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=88)** We need to navigate, to Shared access policy and you need to create a new one.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=94)** Let's name it Send Checkout Events.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=99)** And the only permission we need to provide is Send as we are only sending events.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=106)** And now once it's created, click on it and we need to copy the Connection string, the primary one.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=116)** Remember if you navigate to Event Hubs, the Event Hub where we are sending data is Checkout.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=124)** Now let's navigate back to our application and let's enter the Connection string.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=131)** Once we enter the Connection string, then you're asked to enter the Hub name, which is Checkout.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=137)** And now it's going to send data.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=140)** It's going to send about 100,000 records in batches of 1000.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=145)** Let's navigate back to our stream and we need to navigate to our stream analytics job.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=151)** First, if we navigate here in 'Overview' we should see that our stream is receiving messages and data.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=160)** And we can get more details in the stream job.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=168)** Here in our Stream analytics job, we can see the input and the output.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=178)** And we can see the details we have about 27K input and about 4k has been sent to our Data Warehouse.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=191)** And it looks like we don't have any errors yet.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=194)** If you had any, then we'll get a warning icon, either on the input or the output.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=202)** Now let's navigate to our Data Warehouse and see if we have any data.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=208)** Let's go ahead and select the top 10 record from our table.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=214)** And as we can see, indeed, we have data.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=219)** Yeah, we have a store called the Day, Duration, Operators Self-checkout, Cash on hand.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=224)** Now, if you do account query, we have about 60,000 records.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=234)** And if you run it again in a couple of seconds, we should have more and it's 66.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=242)** So our data is coming in.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=245)** As you can see, it's pretty straightforward to create a pipeline that sends data from an Event to our Data Warehouse.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=253)** You can change the query here in the query, map the data as you wish, and then send it to the Data Warehouse.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=259)** this way now the data stands in a table into our Data Warehouse.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=263)** We can join it with the stores with other results and then display it in results.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=268)** As well as, create Machine learning model, where they can be trained to alert us as soon as something is wrong with our stores.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), else, (1), self (1)
> **UI Navigation:** open the (4), navigate to (3), click on (1), select the (1)
> **CLI Commands:** npm (2), find (1), node (1), make (1)
> **Env Vars:** npm (2), cmd (1)
> **Tools:** terminal (2), windows terminal (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), warning (1)
> **Exercise Files:** exercise files (1)


### 4. Querying Using Serverless SQL

#### Understanding serverless pools
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=0)** - [Instructor] When we created our workspace, inside it we had a default serverless pool, which was built-in, and we could either remove it or change it.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=11)** In this clip, we are going to see what it is and how we can use it.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=17)** Unlike dedicated as SQL pools, serverless pools don't have an infrastructure that we have to provision.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=24)** With a dedicated SQL pool, we had to tell it how much compute power we needed, while with serverless pools, it will figure out by itself and query the data.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=35)** Similarly to dedicated pools, it uses a scale out architecture that distributes the processing of the queries into compute nodes while dedicated SQL pools use a massive parallel processing engine to distribute the queries across different compute nodes and depending how data was distributed, each node had certain data to process.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=59)** Some had more data than others depending on the distribution.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=64)** Serverless pools, on the other hand, use a different kind of a query engine.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=69)** The query engine is called distributed query processing engine, or DQP for short, which gets the query and assigns tasks to compute nodes.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=81)** Based on the query, it figures out how many nodes are needed and then sends instructions to the nodes.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=88)** Let's take an example.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=90)** A query comes in to the control node.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=93)** It processes it and assigns it to the compute nodes.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=96)** In our example here, it sees that it needs six compute nodes, so it sends instructions to those and they are provisioned automatic for us so we don't have to do anything.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=108)** Once the process is done, they send the data to the control node and we get the results, and we are charged depending on how many data we process.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=118)** Let's take a look at some use cases for using serverless SQL pools.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=123)** First, we have data discovery.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=126)** By using serverless SQL, we can explore and discover our data in storage.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=131)** We can do this quickly without provisioning anything.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=133)** Since we only do this once in a while, it's beneficial for us to only pay when we need it.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=139)** For example, data scientists can look at our data to understand what they can do with it.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=145)** Next, we can create a logical data warehouse.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=149)** Serverless pools have the ability to store object metadata.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=153)** So, we can create a logical data warehouse where the data is only in storage.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=159)** This way we can create views that we can query directly, so we don't have to know about the data structure all the time.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=167)** We can just query the views and since it will update statistics, the queries will be relatively fast.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=174)** And finally, another use case is to transform data.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=178)** These will be some basic data transformation that we can do, for example.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=182)** We can get data from storage, parse it, and then store it somewhere else, or send it to Power BI for visualization dashboards, et cetera.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=191)** We're going to look at how are we can use serverless SQL pools to query data directly from storage in our next clip.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), dqp (1)
> **Code Keywords:** let (2), while, (1), finally, (1), else, (1)
> **CLI Commands:** node (3)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Querying and discovering data using serverless pools
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=0)** - [Instructor] In this demo, we are going to use our built-in serverless pool to query data directly from storage.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=7)** First, we need to create a new query.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=9)** I have created a new one and named it query data serverlessly, and we need to make sure that we're connected to the built-in serverless pool.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=20)** You'll only have one which is going to be the built-in one.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=25)** To query the data, we are going to use the open role set functionality and the query will be just like any other SQL query.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=34)** Only thing that changes is the from part.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=36)** First, we are going to select the top 10 records and we are going to get all the fields.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=42)** This is just like any other SQL that you might have seen.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=47)** Next, we are going to do from, and we are going to use open role set function.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=51)** In the bulk property, we need to set the URL to our file.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=56)** In our case, we are going to load the daily sales that we have used throughout the course.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=61)** The account name is my workspace test files and we have the container sales and then the folder inside daily sales.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=70)** Next, we need to specify the parser version.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=73)** And here, you must specify 2.0.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=76)** If you don't specify, it will use a older version.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=79)** And with the newer version, Microsoft has made changes so it has a boosting performance while processing CSV files.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=89)** Next, you specify the format as CSV.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=92)** Then, we need to specify that the first row is the second one.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=95)** So in the first row, we have headers and then the data starts in the second.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=100)** And finally, we assign these to a variable.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=103)** As a role, this can be anything.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=106)** Let's say, as sales.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=110)** And if we run the query, it will give us the top 10 records.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=116)** And here we go, we have historical date, total sales, and total amount.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=122)** As we can see, we have C1, 2, 3, and 4.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=125)** So, we don't have column mapping yet here, as well as we haven't told it what the types are, so we need to do that.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=134)** First, let's go ahead and specify the column names as well as their types.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=140)** We can do that using the with property, just after the open role set function closes, we need to add the with function.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=151)** And in here, we specify the values as well as the type.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=156)** So, store code is going to be a list of characters and it's going to be on position one on our CSV file.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=163)** Date is going to be date on position two, total sales and total amounts are going to be big integers, which are three and four, and we are saving these as sales.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=174)** Let's go ahead and run this query again.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=180)** And now, we have properties.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=182)** We have store, date, total sales, and total amount, and it knows what type, the properties.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=188)** So it knows it's a date.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=190)** It knows it's a number or just a plain string.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=194)** And now, we can use these properties for selecting.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=197)** We can do sales.storecode, sales.date, and if you run this query, we are going to only get these two properties.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=210)** As you can see, it's pretty straightforward to query data directly from storage, and we did not have to provision anything.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=216)** We only run the query and we didn't care about the backend.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=221)** We are going to look at how we are going to perform more advanced queries throughout this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (3), from, (1), case, (1), finally, (1)
> **Env Vars:** csv (3), sql (2), url (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Using file metadata in queries
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=0)** - [Instructor] In this demo we are going to learn how to partition our files so we can query them easier by using the file name or the folder name as properties.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=10)** In the exercise files you will find a folder named partitioned sales data.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=16)** In here, if you see now the file names have dates.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=20)** And if you open one file, you'll see that you don't have the date property inside the file.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=29)** We are going to use a file name and convert it into the date.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=33)** This way, when we query our data, the server that SQL pools knows whether to look inside the file or not.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=41)** So, it's only looking at the file name without looking inside, which will make our queries faster.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=47)** If you want to generate more data, just open the synapse data generator and start it using the MPM run generate.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=56)** It will generate data with a structure as seen in the partition sales data folder.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=64)** First thing we need to do is upload this data to our storage.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=69)** Let's navigate to our storage account.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=71)** And in here, we need to navigate to containers and we are going to create a new one to keep it simple.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=78)** Let's name our container serverless data so we know we're going to use it for serverless purposes.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=88)** Now let's navigate into our server, the data container, and we are going to go upload our files.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=98)** Just go ahead and select all the files you want to upload.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=102)** If you have a slow internet connection, then just select a couple.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=104)** It doesn't matter.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=108)** Also, we are going to upload this data into a folder and we are going to name the folder daily sales.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=119)** While the data is uploading, let's navigate to our Synapse Studio.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=122)** So I am just going to paste in the query here, and we are going to go through it step by step.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=128)** First, make sure to set the bulk property to your storage account and then to your container.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=134)** So for me, in this case, it's my workspace task files.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=138)** The container is serverless data.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=141)** I'm just going to go back to make sure and just copy paste this.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=149)** And the folder is going to be daily sales and everything inside daily sales.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=155)** Parser 2.0 for my CSV and the first row is two.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=161)** Now what's different is these two properties here.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=165)** We have two built-in functions here.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=167)** We have file path, which will give us the path of the file, as well as file name, which gives us the name of the file.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=176)** Let's just run this query and see the results.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=180)** And, as we can see, we have the file path and the file name.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=185)** Also, we can query other data as well here.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=187)** We can do select all and then file path and file name.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=195)** And you have the properties here.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=197)** You have the code, total sales, total amount, but we don't have the date.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=202)** Now, the way we are going to get the date is using the file path.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=206)** Not the file name, but the file path.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=208)** The file path accepts a parameter.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=211)** Here, we can specify one, two or three.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=214)** So on index, if we don't specify anything, then it gives us the full file path.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=221)** If we do, then it gives us the matched parameter that we use here.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=226)** Here, on our URL to the file, we say match anything inside the daily sales folder.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=232)** So, this is a matched property.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=235)** In this case, we have only one property, which is a file name.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=239)** And it's going to give us the file name without the CSV part, so whatever it matches.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=246)** Here on the first row, we have 2024-05-27.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=250)** So it matches because it ends with CSV and anything before that is matched.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=258)** Now let's go ahead and type one.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=260)** This should give us the file name without the CSV part.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=267)** And indeed we do.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=269)** Here on file path, we see that we matched the first property.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=273)** If we enter two, then this won't work because there is only one.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=278)** Now, for example, if we wanted to match daily sales as well, we can remove daily sales and say wildcards.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=284)** So, anything in the container, serverless data, anything in the folder, and then anything in the sub folders that starts with CSV.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=294)** If you do that, then the file path one will return daily sales as that is the first match.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=303)** And if we do two, then we'll get the date.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=310)** This way, if you have a file that's under a folder inside the sub folder inside another sub folder, then you could match the file and convert these parameters into actual data.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=322)** For example, you might have a folder which has the year.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=326)** Inside it, you might have a folder that has the month and inside, all the files which have the day.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=332)** Then, you could match all three of them and then construct a date from this.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=338)** And now that we have the file path, we can convert it to a date.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=343)** We don't need the file name.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=349)** We can do cast, the property, which is the second, as date.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=357)** And then here as date.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=362)** And now we should have the date property.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=364)** So, we did not have to have it inside the file.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=367)** We have it as a file name.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=370)** And the best thing about this is that we can filter on this.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=374)** We can do where, rows dot filepath two, but first we need to cast it.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=383)** So cast as date, and then we can specify no operations.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=392)** So let's say bigger than some date in the future, like 2099.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=402)** And now it will give us only records if the file name matches.
>
> **[6:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=408)** It does not have to go inside the file, but it can just see the file name.
>
> **[6:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=414)** This is random generated data, so most likely we'll get since we have 2102 in the dates.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=422)** If we change this to something bigger, let's make it 5,000.
>
> **[7:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=428)** Now, most likely we should not get any data.
>
> **[7:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=432)** Okay.
>
> **[7:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=433)** We need to make sure that we select everything or we don't select anything.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=436)** Let's go ahead and run it again.
>
> **[7:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=441)** And we don't have any data.
>
> **[7:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=443)** As you can see, using file meta data for partitioning data is a very powerful feature to make sure we don't open the files and query the data, but rather use a file name or the folder structure as properties.
>
> **[7:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=457)** (electronic music) In this challenge, I would like you to create a new Synapse Analytics workspace.
>
> **[7:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=467)** Once the workspace is created inside, create a new dedicated SQL pools which has three compute nodes.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=474)** Once you are done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (3), case, (2), match. (1)
> **Env Vars:** csv (5), sql (2), mpm (1), url (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** navigate to (3), open the (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (2)
> **Versions:** 2.0 (1)

#### Building a logical data warehouse, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=0)** - [Instructor] In this demo, we're going to look at how to create a logical data warehouse where we can create views so we can query our data easier.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=10)** The first thing that we need to do is create our logical data warehouse.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=15)** Here is all the query that we are going to execute.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=18)** You'll find this query in the exercise files to make it easier but make sure to change some properties, like the shared access signature, and the file URL.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=30)** I will mark all the properties that you need to change in the exercise files so you don't miss them.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=35)** First, we need to create the database.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=38)** And this is not going to be a real database but a logical one.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=43)** And I'm going to name it SalesLogicalDataWarehouse.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=48)** As we can see, we can't run a query because we have not selected a database.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=54)** Let's go ahead and select master.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=57)** And now let's run this query.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=61)** And we have a database now.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=64)** If we say use database, we can't see it but if we click refresh, and now we have it in the use database.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=74)** SalesLogicalDataWarehouse.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=77)** You can also see it by navigating to databases, and here we go.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=82)** In here, you should see external tables, resources, views, schemas, security, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=88)** Just like any other database but with no actual tables backing it up.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=92)** Let's navigate back to our script.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=95)** Next, we need to change the collation.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=98)** We are going to do alter database, then our database name, collate, and then you need to specify this keyword.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=105)** This will make it so it can deal with UTF-8 encoding as sometimes it has troubles when running the queries.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=115)** Next, we need to create a master encryption key, just like we did when we used PolyBase.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=124)** Now that we have the encryption key, we need to create the credentials so we can access the storage.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=131)** For this demo, I'm going to use shared access signature, and to get the SAS token, you navigate to your storage, navigate to shared access signature, and create a new one.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=149)** And make sure you check all the appropriate permissions that you need for this, as well as make sure to choose a proper end date as this will expire.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=160)** Once you have the token, then copy it, and paste it here.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=168)** Let's go ahead and run this script.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=173)** And now we have the credentials to access the storage.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=178)** What we need to do next is create a data source.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=181)** We are going to use the command create external data source, name it SalesData, and for credential, we are going to use the credentials that we just created.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=191)** And for location, we are just going to point to our storage account.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=195)** We are going to place in the rest when we create the data.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=198)** This way, we have access to all the storage account, and all the containers inside it.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=206)** We are also going to create a separate schema that will hold all our views for our logical data warehouse.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=214)** And we can do that using create schema logical data warehouse authorization and then we specify the dbo schema.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=223)** This way, we have separate schema for all our views.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=229)** And now finally, we can create our view.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=234)** We can do it just like in any SQL query, create view, and then the schema and the name of the view.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=240)** I'm going to name is DailySalesView.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=243)** Then we do as, and then here is a select statement.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=247)** This is just like the other statements that we did before.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=250)** This just tells it where to get the data.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=253)** So we are going to do select all, which will give us the store name, TotalSales and TotalAmount but not the date.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=261)** Then we are going to do cast rows.filepath, and we are going to get the first matching property as we have only one wildcard here.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=272)** In our previous example, we have two wildcards, so we need to choose two to get the file name.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=280)** In this example, we have one.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=283)** So we get the date on the first one.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=288)** And this gives us a date, TotalAmount, TotalSales and a StoreCode.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=293)** And here in the with, you specify those properties.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=298)** And now let's go ahead and create our view.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=303)** And finally, let's go ahead and use our view now since we created it.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=308)** As you can see, we don't have to do select, cast and all this other stuff because we can just do select top 10, let's say, all from, and that's all we have to do now.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=326)** And we have data.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=327)** We could filter on the date, TotalAmount, TotalSales, StoreCode, et cetera.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=333)** And this is not just inside this query now.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=336)** Let's go ahead and copy this, publish the changes.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=344)** And now let's navigate to our data.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=348)** Here in the views, we can see we have the view here.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=353)** New script.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=354)** Select top 100 rows.
>
> **[6:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=360)** Make sure that the database is SalesDataWarehouse as if you select master, and this won't work.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=369)** But now if we select SalesDataWarehouse, and we can run the query just like we were querying a table in our data warehouse.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=381)** We are going to continue this in the second part where we are going to also create a view for our stores and then join the data between the two.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (2), finally, (2), from, (1), continue (1)
> **CLI Commands:** make (6), find (1)
> **Analogies:** just like (5)
> **Env Vars:** url (1), utf (1), sas (1), sql (1)
> **UI Navigation:** navigate to (3)
> **Exercise Files:** exercise files (2)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)

#### Building a logical data warehouse, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=0)** - [Instructor] In this demo, we are going to upload stores as well, and then create a view for that.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=5)** So we can join sales and stores to make a proper query.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=9)** You'll find your stores.csv in the Exercise Files.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=13)** If you open it, you will have a lot of properties.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=16)** You have the city, code, size, latitude, longitude, population, and state.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=21)** The thing that we are most interested in is the code as this is the key that we are going to join with.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=27)** Let's go ahead and upload this to our container.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=31)** Inside our serverless data container we are going to upload this in a folder called stores.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=39)** Let's go ahead and select the file and in advance, we need to specify stores or the folder.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=56)** And now we have stores.csv.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=59)** So let's navigate back to our Synapse Studio.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=63)** Here, I'm going to create a view that points to stores, just like we did in our previous clip.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=69)** We don't have to do any of the other operations now.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=74)** We have the data source, we have an encryption key, access to the data source, and all that information.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=80)** All we have to do now is create the view.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=83)** So, Create View As Select All From, in the Bulk we need to specify the container name, the folder name, and the file name.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=93)** We have only one file, stores.csv, so we specify that.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=97)** If you had more then you could change it to a wild card.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=102)** The data source is going to be sales data, parser version 2.0 since we are doing CSV, format CSV, and the first row is going to be the second as we have headers.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=114)** And then you specify the columns in the Width section.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=119)** We have city, code, size, latitude, longitude, population, and state.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=125)** If we look back in our logical data warehouse, the StoreCode is a list of characters up to 200.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=133)** And for performance reasons, it's better than the two properties that we want to join with have the same type as well as the size.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=143)** And let's go ahead and create our view.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=149)** And now we can join data between the two views.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=152)** We can do Select Top 10 from StoresView as stores inner join daily sales and sales, and then we join on the code.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=162)** And once we run this query, we get the results with all the data.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=167)** We have store information as well as sales for that day.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=171)** As you can see now, after you create your views, it's pretty straightforward to query the data.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=177)** You don't need to worry about credentials.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=178)** You don't need to worry about the structure, et cetera.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=181)** All of this is predefined for you, so you can just go ahead and query the data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from, (1)
> **File Paths:** stores.csv (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** csv (2)
> **Versions:** version 2 (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Manage statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=0)** - [Instructor] In this demo, we are going to talk about statistics.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=4)** Statistics are what both serverless and dedicated SQL pools use to optimize their queries.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=11)** We are going to talk about statistics for dedicated SQL pools later on.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=15)** But for serverless pools, we are going to learn how we can create statistics on a column.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=21)** By default, the engine will automatically create statistics, but not for CSV files, at least not yet, only for Apache Parquet files.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=33)** So for our keys, we need to create them ourselves.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=37)** The way we create statistics is by running the stored procedure create_openrowset_statistics.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=44)** And as a parameter, it needs to take in the statement, which is the exact statement that is going to be executed against our data.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=53)** This statement can be inside the view, which is fine.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=56)** We don't have to specify the view here, but we need to specify the openrowset query.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=62)** So we do sys.sp_create_openrowset_statistics, and then we specify the query.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=70)** Now we specify the query as a string so we need to make some tweaks.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=75)** We need to change it from a single quote to double quotes for the BULK property, DATA_SOURCE, parser_version, and format.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=84)** And now if we execute this, then it seems that we get an error.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=89)** That's because I already run it, so we can't run the same statement twice.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=94)** In order to do that, first, we need to drop it.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=98)** To drop the statistics, we use a drop_openrowset_statistic, and we provide the query.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=106)** Let's go ahead and run this query.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=111)** And now we can run the query again here.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=115)** It might take a while to update all the statistics as it had to look at all the data.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=121)** We also have the option to specify sampling data.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=124)** So we could say only sample 1,000 records.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=127)** But that is not yet supported with CSV files.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=131)** You should create statistics on the columns that you do filtering or joining.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=136)** In this case, we join on the StoreCode, so it's a good idea to create a statistic on the StoreCode so it knows where to find the files.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=145)** There is a functionality for updating a statistic here.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=148)** The only way we could do it is just like we did before: first, we have to drop it, and then we have to recreate it.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=157)** Currently, that's the only way we can update statistics.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=161)** It's a very good practice to query statistics for your most-used columns in JOINs and WHERE statements.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=167)** That will improve the performance and actually you'll spend less money as it will read as less data as it can, resulting in fewer charges.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), csv (2), bulk (1), data_source (1), where (1)
> **Code Keywords:** default, (1), this, (1), let (1), case, (1)
> **Code Identifiers:** create_openrowset_statistics (1), sp_create_openrowset_statistics (1), parser_version (1), drop_openrowset_statistic (1)
> **CLI Commands:** apache (1), make (1), find (1)
> **SQL:** where (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)

#### Cost management
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=0)** - [Instructor] Since serverless SQL pools do not need any provisioning, they'll automatically provision all the necessary resources in order to query the data.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=10)** But what if we have a lot of data, and by mistake we run a query and we let it run all night?
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=17)** That will result in a lot of charges for us.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=20)** And mistakes can easily be made by letting a query run in the background and not noticing.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=25)** A good way to manage the cost is by setting limits.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=30)** To set limits, first, we need to navigate to the Manage tab in our Synapse Studio and we need to navigate to SQL Pools.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=38)** Here, we have two, we have the built-in and a sales data warehouse dedicated SQL pool.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=44)** If the sales data warehouse dedicated pool's status is online, it might be a good idea to pause it.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=50)** There should be a pause button here where the resume is.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=54)** If you pause it then you can resume it at any time later, so no charges incur.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=60)** But for the demo, we are going to manage our built-in serverless SQL pool, and to manage cost, we use a cost control button here.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=71)** And here have a Cost Control UI.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=74)** First, we see the data processed property.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=77)** Data processed is the amount of data that the system stores temporarily while a query is running, and currently we have zero as we don't have any queries running.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=88)** Let's go ahead and run a query even though it'll finish quite fast.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=94)** Let's navigate here and let's query all the daily sales.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=108)** And, as we can see now, we have 10 megabytes.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=112)** Besides giving us the amount of data that is processed, we can also set a daily limit, weekly limit, or monthly limit, and it's a very good idea to set any of those.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=125)** If you want to set a daily limit, just click Enable and enter the amount of data that you'll want to allow to be processed at maximum, which is in terabytes.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=134)** So, we are going to allow one terabytes daily and for the weekly limit, now, we need to specify something more.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=143)** Now, if we want to allow one terabyte daily, then that means it will be seven terabyte weekly, but we want to allow four terabytes weekly, the monthly total to 15.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=155)** This way, if somebody exceeds daily, then they will be stopped.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=159)** If they exceed the weekly limit they will be stopped and then the monthly limit.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=163)** All you have to do is click Apply.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=167)** And now, for some reason, if something goes wrong, for example, somebody runs a query against a very, very large data set, or there's a bug in the query, then it won't exceed the limit and the query will be terminated.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=180)** This way, you can protect yourself from getting a very big cloud invoice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** sql (4)
> **UI Navigation:** navigate to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Query partitioned data
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=5)** - [Instructor] In this demo, I would like you to query partition data.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=9)** Given the data in the following format; you have a folder which has the year, then inside these, you have folders which have the month, and inside each folder, you have files which contains the same structure of sales data that we have seen up until now, and the file is the day, so you could have year 2021, month 01, and then, days 01, or day 31, month 12, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=40)** You'll find all this data in the exercise files.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=44)** You are tasked to load this data in Azure Blob storage and extract the year, month and day as columns using the built-in serverless pool and the file-pack function.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=57)** Once you're done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Query partitioned data
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=0)** - [Instructor] Before we start to solve the challenge, first, let's go ahead and take a look at the files.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=10)** You'll find the data in the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=13)** And they will be inside a folder named Data.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=17)** In here, you'll have the years, so for example, 2019.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=22)** Then these are the months, so one, two, three and 12.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=25)** We don't have data for all the months as that will be a lot of data, and then inside, we'll have some data.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=32)** This is going to be the day, so day one, two, three and up to seven.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=40)** Now, what we want to do is parse the year, then parse the month, and then parse the date.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=46)** So you need to get all these three properties into columns in our SQL statement.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=53)** Since the data is in multiple subfolders and folders, we cannot upload using the web portal.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=60)** And for uploading the data, I'm going to use a Microsoft Azure Storage Explorer.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=65)** It's a great app that lets you manage storage.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=67)** You can add files, delete files, and upload files using a folder structure as well.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=73)** First, we need to connect to the storage, so let's go ahead and navigate to our storage account.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=78)** In here, we need to navigate to shared access signature.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=83)** Also, make sure you check everything here.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=87)** And then create one.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=91)** For this purpose, we need a connection string, so let's go ahead and copy it.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=97)** And now in here, we are going to click the connect.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=103)** And for the type, we are going to use connection string.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=108)** Just paste in the connection string in the connection string property, and it will automatically fill in the name.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=115)** And let's go ahead and connect.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=117)** Now let's go ahead and expand the blob containers.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=122)** And we want to upload the data in the serverlessdata container but you can upload it anywhere you wish.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=130)** In here, you already have two folders, so we are going to create a new one.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=135)** For simplicity's sake, let's name it challenge.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=141)** And now we can just drag and drop the files, and they will be uploaded for us, as well as they'll retain the file structure.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=152)** So it will do everything automatically for us as it will take forever for us to create a folder, then upload a file, then create another folder using the web portal.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=163)** And it's almost done.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=165)** Let's navigate to our storage to verify it.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=171)** There are containers, you placed it in serverlessdata.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=175)** And we have a folder here named challenge.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=179)** And the data is here.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=180)** Now let's navigate to our Synapse Studio.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=185)** For reading the files, I use the OPENROWSET functionality that we have used earlier.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=190)** In the bulk property, I specify my account and then the container name.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=195)** Then the folder name, and then I matched anything, so first, it will match any folder.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=202)** So it's going to be 2019, 2020, et cetera.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=206)** Then it will match any month inside that folder, and then any file inside the month.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=212)** So if it's day five, then it's going to be 05.csv and we are going to get the 05.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=221)** And here in the select, I cast the filepath1, which is going to be the year to integer as year, then two as month, and three as month as well, so I need to change this and make it day.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=237)** And finally, I tested the query, and I got the results I wanted.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=244)** I had the store code, total sales, total amount, year, month and day.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=250)** As you can see now, we have all these properties and then we can filter data using this or query data or convert this into a date property as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (1), type, (1), finally, (1)
> **UI Navigation:** navigate to (4), drag and drop (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** sql (1), openrowset (1)
> **File Paths:** 05.csv (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)


### 5. Querying and Best Practices in Dedicated SQL Pools

#### Querying, labeling, and tracking data warehouse performance
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=0)** - [Instructor] After the data warehouse has been deployed and is being used now, it's time to monitor the queries.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=6)** It's very important to monitor the queries because developers of reports or other services might make mistakes and make queries that run very slowly or consume a lot of data.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=17)** To monitor the queries, we can do that in the Monitoring tab.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=22)** Here we can either navigate to an SQL pool, for example, sales data warehouse, and we are going to see a list of running requests, queued requests, and failed requests, as well as the data warehouse unit limit.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=36)** When we created it, we set it to 100.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=40)** If you see a lot of requests in the queued requests, that means that our data warehouse does not have enough processing powers.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=48)** A lot of queries are being made, but they are being put in the queue so it can be processed later when compute power is available.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=57)** In this case, you might need to increase the limit of your data warehouse unit.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=63)** To view the running requests, you can navigate to SQL requests, and in here you'll see a list of all requests.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=71)** You can change the pool.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=74)** You can use the built-in one or the dedicated one, for our demo, we are going to use a dedicated one, but the idea is the same behind the two, as well as add filters.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=86)** Now let's go ahead and run a query.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=88)** Let's navigate to our Development tab, and let's query the data from the DailySales.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=98)** Now that the query is running, let's navigate to our Monitoring tab, and we should see a request that is running.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=105)** And indeed, we do.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=107)** The status is running, the submitter is me here, and it's been running for 11 seconds.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=113)** If we refresh, then it changes.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=120)** If you want to view the actual content of the request, so the SQL query, then you can click on More, and here is the query.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=130)** Using this view is an easy way for us to monitor our data warehouse, but in most cases you'll want to add your own logic or you want to create your own dashboard inside your own application.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=142)** And we can also run SQL queries that give us this information.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=148)** Let's navigate back to our script, and we could use this to see some view for getting this information.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=157)** The schema is system, and the name of the view is as following: dm pw execute requests.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=166)** If we query this information, but, first, let's cancel the current query, then we get similar information: request id, session id, submit time, start time, end time, total time it took to complete, et cetera.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=186)** Using this view, you can get the information for our data warehouse and display it in a dashboard for internal use within your organization for monitoring.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=195)** Now, when someone looks at this information, they're going to see the SQL query.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=200)** That is currently the only way they can see what the query does.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=207)** For our purpose here, we have a small query select from DailySales.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=211)** But imagine in dashboards and other reports, you might have very complicated queries spanning multiple pages, hundreds of lines of code maybe.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=221)** To provide additional context for a query, we can use a label.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=225)** Queries support the label that we can define here when we run the query.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=229)** We can do Option and then LABEL and then equals something.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=238)** Let's say ListDailySales.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=242)** In a real-world scenario, you might use query codes.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=246)** Then you store these query codes in a database table from which you can get the details.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=253)** Now when you run the query, you don't have to care about what the SQL is.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=259)** You only need to know about the label.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=262)** And if the query is problematic, then we can ask someone who is responsible for fixing this query.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=270)** Okay, let's go ahead and cancel since we don't have to wait for this to finish.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=275)** And now let's see the request.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=280)** In here, we should find a label.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=284)** We have a lot of data so it's becoming harder to find.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=287)** Let's go ahead and order by start time.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=296)** And let's only get the top 10 values.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=308)** And in here, we can see the ListDailySales query.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=313)** You might wonder what these other queries are.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=316)** When we execute the view for loading request details, that request as well is logged in here, and that's why we have a lot of them.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=327)** And as we can see now, if this query has any problems, for example, it times out or it has another error, then we can easily say to somebody who's responsible, who's responsible for the query with the label ListDailySales.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=343)** As well as we can filter for the ListDailySales query.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=347)** If we know the query label, then we can filter for it.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=352)** And now we should only get one request since we only made one.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=356)** Let's go ahead and make a couple more.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=366)** And if we run the query again, we should have more.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=373)** And here we go.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=374)** We have all the queries with the label ListDailySales.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=378)** It should provide all your queries with the label.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=381)** This way, you can easily identify them being that for monitoring purposes or just to find them in your own application when you want to troubleshoot them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (1)
> **Env Vars:** sql (6), label (1)
> **CLI Commands:** make (3), find (3)
> **UI Navigation:** navigate to (4), click on (1)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** means that (1), is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Transactions in dedicated SQL pool
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=0)** - [Instructor] As you might expect in SQL databases, dedicated SQL pools also support transactions.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=7)** However, since the data warehouse is maintained at scale to ensure high-performance, some features are limited when compared to an SQL server.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=17)** Dedicated pools implement ACID transactions.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=20)** The default level is set to READ UNCOMMITTED.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=23)** With this level, transactions will work and anything we changed will roll back.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=29)** But these will also ensure the consistency of the queries while the transaction is going on, which means we can have dirty reads, non-repeatable reads, and phantom records.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=40)** Currently, we can only change the transaction level to READ COMMITTED SNAPSHOT ISOLATION.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=47)** Once we enable READ COMMITTED SNAPSHOT ISOLATION, all transactions in the data warehouse will be executed under this level.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=55)** The idea behind READ COMMITTED SNAPSHOT ISOLATION is as following.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=60)** Instead of locking a record during the reading phase with a shared log, the SQL server will transparently return us the old committed record version from store.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=70)** So, it's like having a temporary table while the transaction is running.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=75)** This way, you're not going to read the data that the transaction changed, but all data before the transaction started.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=82)** Another important thing that we have to consider when doing transaction is transaction size.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=87)** A single data modification transaction in dedicated SQL pools is limited in size, and this limit is applied to each distribution separately.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=97)** Since dedicated SQL pools have 60 distributions, this means that we can have a maximum of 60 compute nodes.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=105)** And the transaction size is applied on the compute node.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=109)** So the total amount of transaction size can be calculated by multiplying it with a number of distributions.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=116)** For example, for a data warehouse you need 100, the transaction size is one gigabyte, the number of distributions is 60, so the total transaction size is 60 gigabytes, which means that the transaction size for this performance level can be at a maximum of 60 gigabytes.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=134)** If it exceeds that, then our transaction will fail.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=138)** The transaction size increases dramatically with the increase of the data warehouse unit.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=143)** The current maximum data warehouse unit is data warehouse unit 30,000 and has 225 gigabyte transaction size per distribution.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=154)** So this distribution can have 225 gigabytes.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=158)** If we multiply this by 60, then we get 13,500 gigabytes in total, which gives us a lot of room to work with.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=167)** Although the transaction size is high, that doesn't mean we can use all of it, for example, if the data is not distributed evenly between the distributions.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=179)** This will result in distributions with more data to have bigger transaction size, and if the transaction size in one of these distribution exceeds the limit, then the entire transaction will fail.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=192)** Here, for example, distribution 44 has a much bigger chance of reaching the limit than the rest of the others.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=199)** Because it has a lot of data, depending how the data is distributed, the transaction size can get very high for this one.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=206)** And if it exceeds the limit, then the entire transaction fails.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=210)** If you plan to make use of transactions in your data warehouse, make sure to keep in mind the transaction size limit and the distribution of data, so your transaction do not fail due to them exceeding the limit.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), read (4), committed (3), snapshot (3), isolation (3)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (2), node (1)
> **Definitions:** means that (2)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Optimizing queries with materialized views
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=0)** - [Instructor] In most cases, for complicated queries, you'll need to create views.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=4)** This way, you can encapsulate the logic inside the view for later use.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=9)** To improve query performance, dedicated SQL pools support materialized views.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=14)** A materialized view pre-computes, stores, and maintains its data in a dedicated SQL pools just like a table.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=22)** When we query the view, there won't be any computation needs.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=25)** It will just give us the data just like we were querying a table.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=29)** This way, queries that use all of the data, or just a subset of the data inside the materialized view will be very fast.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=39)** I have to go ahead and create a view with a query from our data warehouse.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=44)** This is a normal view.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=45)** Create view AverageCheckoutView.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=48)** And then as we select StoreCode, Date, SelfCheckout, CashOnHand, StoreSize, and then the maximum and the minimum duration.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=58)** We are going to get this data from our CheckoutEvents table.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=61)** And then we're going to join it with stores.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=64)** Here on my data warehouse, I have a table named stores, which has store information.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=73)** You can upload this information from the exercise files that we had before.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=77)** We had the file called stores.json or a file stores.csv.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=82)** I will include both these files in the exercise files.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=86)** And then they are grouping by Date, StoreCode, SelfCheckout, et cetera.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=91)** And now let's go ahead and run this query.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=96)** This is a normal view.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=97)** It will query the data directly from the data warehouse.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=101)** And now, let's select everything from this view.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=112)** And let's see how long it takes.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=116)** It should take about 30 seconds, give or take.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=120)** And it was about 33 seconds.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=124)** Now, we're going to create the same view, but we're going to use a materialized keyword.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=130)** So I'll create materialized view.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=132)** And then we're going to name it, AverageCheckoutMaterializedView.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=136)** We also need to specify distribution.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=139)** And we're going to use the for_append keyword.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=142)** As is required when using the max and mean aggregations.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=147)** The rest is going to be the same.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=150)** Now this view might take longer to create as it's getting the data as well.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=156)** And now the materialized view has been created, let's go ahead and query.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=160)** It should run at least twice the speed.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=166)** As you can see, the query run faster now, as it's not recalculating all these aggregations anymore.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=173)** Since we created our materialized view, now our normal view has changed as well.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=179)** The query optimizer behind the scenes sees that you have a materialized view, and you are requesting almost the same data or at least a subset of the data that are in the materialized view.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=190)** So it's smart enough to use the data inside the materialized view now.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=195)** And it will not query and aggregate all the data again.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=199)** If we run this query again now, which is a normal view, this now should run faster.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=205)** Not 33 seconds.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=209)** As you can see, it ran in half the time now because it's not doing the aggregation, but behind the scenes is using the materialized view.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=218)** And if we run a normal query that has event date and this aggregation as well, it knows that it can get this data from a materialized view.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=226)** So it does that.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=228)** You can use materialized views for a lot of cases.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=232)** But just to be aware that, just because it increase performance, you have to pay extra cash because materialized views create a virtual table.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=241)** You'll have to pay for the storage as well.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=244)** So that's the trade-off between having faster queries in a materialized view and paying more for storage.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=251)** And depending how much data you have in a big data scenario, these views can get huge.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=257)** So the storage you are paying for increases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Definitions:** is a  (3)
> **File Paths:** stores.json (1), stores.csv (1)
> **Env Vars:** sql (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (2)
> **Code Identifiers:** for_append (1)
> **Warnings:** be aware (1)

#### Connecting using external clients
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=0)** - [Instructor} Up until now when connecting to our Data Warehouse Serverless or dedicated, we have used Synapse Studio, which is fine, but in a lot of cases, people using the Data Warehouse will not have access to Synapse Studio.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=13)** In this clip, we are going to learn how to connect to external clients.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=17)** Let's go ahead and navigate the 'Manage' tab.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=21)** First, let's go ahead and connect to our dedicated SQL pool.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=27)** If you click on a name and you get to Connection string, Here we have four dot net SQL authentication.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=35)** We also have JDBC ODBC, PHP, etc.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=40)** To demonstrate I'm going to connect using SQL Management Studio.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=45)** Now that I have the server URL, let's go ahead and navigate to SQL Management Studio.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=50)** Let's go ahead and click 'Connect'.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=54)** And here from a Server name, we need to provide a Server name.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=58)** Authentication is going to be 'SQL Server Authentication'.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=62)** Username is going to be 'SQL Admin user' By default, this is the user.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=68)** If you changed it during the creation of your Workspace, then you need to enter that one and alternate to provide the password that you entered when you created the Workspace.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=81)** As you can see, now, I can see my Databases.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=86)** Since this is a dedicated SQL pool, I only get to see this one, then the tables and let's go ahead and query stores.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=98)** And here we quickly get a list of stores and we can run queries just like we did from Synapse Studio.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=105)** Using Synapse Studio is a little easier as it's interconnected with other services and makes it easier to discover.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=111)** Now let's go ahead and try our Serverless pool.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=114)** Let's close our dedicated pool and open the built in one.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=120)** And just like the dedicated one, this also has a Connection string.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=124)** The difference is it has the On-demand String abandoned.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=132)** Let's open the Object Explorer and connect to this one as well.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=137)** That's under the Server name and our Username and password.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=147)** And now in the databases, we should have Sail Data Warehouse, which is the logical Data Warehouse that we created.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=155)** In here we should have views And you have Stores view.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=161)** Let's go ahead and create.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=166)** And just like that using SQL Management Studio, we queried data directly from our Azure Blob storage.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), jdbc (1), odbc (1), php (1), url (1)
> **Code Keywords:** let (9), default, (1)
> **UI Navigation:** open the (2), click on (1), navigate to (1)
> **Analogies:** just like (3)
> **Definitions:** is a  (2)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor (1)

#### Creating and updating statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=0)** - [Instructor] Once we have loaded data into our data warehouse, it's very important that we collect statistics, So in the query optimizer behind the dedicated pool can optimize our queries.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=12)** The more it knows about our data, the better queries it can make.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=16)** Dedicated SQL pulls can be configured to automatically detect and create statistics.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=21)** Statistics that are created in our columns will heavily depend on how the query plan is generated.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=28)** To enable it to make statistics, we can do the following.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=31)** We need to do ALTER DATABASE, then set AUTO_CREATE_STATISTICS on or off if you prefer to turn it off.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=42)** And now that we turned it on, whenever data changes, it will collect statistics.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=47)** So it can make better queries.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=49)** This is also recommended by Azure.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=52)** The only catch is that the automatic creation is a synchronous process.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=57)** So you might get a slight degraded query performance for columns that are missing statistics since it has to create them.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=65)** But this will be only on the initial load of the data.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=70)** Besides creating statistics automatically, we can also create them ourselves.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=76)** We can do the following.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=77)** Create Statistics and then provide a name.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=80)** Let's name this statistic StoreCode statistic.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=85)** Then we need to specify where, which is the table DailySales and then the StoreCode.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=91)** And then this is optional, but we specify the sample of data.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=96)** If we specify 100%, it's going to create a statistic on 100% of the data, which is too much.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=103)** In most cases, 20% will suffice, but you want to change it, then you can do the With sample and the amount of percentage.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=112)** And we can quickly create the statistic.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=118)** If you change the data a lot after creating a statistic, then you also might want to update it.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=123)** The update command is easy.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=125)** Update statistics, table name, and then statistic name.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=129)** This will only update this statistic.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=133)** In this case, it's going to be StoreCode statistic.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=138)** If you want to update statistics on all columns inside the table, then you just specify the table name.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=145)** Currently, you only have one, but if you had more inside this table for different columns, then it will update all of them.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=156)** And if you want to drop a statistic, then you specify a table name and the statistic name.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=162)** So Drop statistics, DailySales StoreCode statistic.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=171)** Here, I've prepared the query that gives us a table name, a column name, a statistic name, and then when it was last updated.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=180)** This gets the information from sys.objects and then join stats, then columns, types, table, schema, et cetera.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=188)** So it goes through all lot of tables to get this information.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=192)** I'm going to include this script in the exercise files, so you can run it against your data warehouse.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=198)** If you run this, then we can see the statistics and when they were last updated.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=210)** I already created one before.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=212)** I have StoreCode stats and StoreCode statistics.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=217)** And here we can see the last update.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=220)** This way, you can get an understanding of when it was last updated, and then go ahead and do an update.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), alter (1), database (1), auto_create_statistics (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), case, (1), this, (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Analyzing data distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=0)** - [Instructor] In this demo, we are going to talk about distribution and how to verify that the data is distributed properly.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=9)** To view how the data is distributed for a table, since each table is distributed throughout 60 distributions, we can use the following command: SHOWSPACEUSED, and then we specify the table name.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=25)** If we run it, then we should get data about our distributions.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=30)** Let's go ahead and explore it.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=34)** We have ROWS, so how many rows are in each distribution.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=38)** And it looks like our distribution is pretty even.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=43)** We have RESERVED_SPACE, DATA_SPACE, INDEX_SPACE, UNUSED_SPACE, and the DISTRIBUTION_ID.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=51)** So we have one, and then we should have up to 60.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=58)** What we are interested in is ROWS as that's what we are going to do to JOINs and WHERE clauses, et cetera.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=65)** So the number of rows should be very close to each other in order for optimal query performance.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=73)** Now, this is not very easy to view, so let's go ahead and move to the Chart view.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=78)** In here, let's change the chart type to something that makes sense.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=83)** Column should make sense, okay?
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=86)** Then category should be the DISTRIBUTION_ID, so one through 60, yes.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=95)** And then in the legend, only rows as those will tell us how the data is distributed.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=105)** And as we can see, it's pretty even distributed, almost a straight line.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=110)** That's because the data was auto-generated, and it was meant to generate even data based on the stored code.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=118)** Let's try a different table. Let's do DailySales.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=124)** So it seems that we need to change the chart type again.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=133)** And in this one, it seems that we have more data on some than others, especially distribution number 13 which has a lot of data compared to others.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=145)** So here the data is not distributed evenly.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=149)** And if you think about transactions and the sizes, the limit for transaction will exceed here before any other transaction, and then the entire transaction will fail.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=160)** You cannot change the distribution on an existing table, but you can create another table on top of it and then specify a different distribution.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=168)** You can do create table, then table name, let's say DSales.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=176)** Here, specify the with operation and then DISTRIBUTION.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=180)** If we specify HASH, then we have to choose a column, or we can go ROUND_ROBIN.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=186)** Then as select all from DailySales.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=192)** This will create a new table named DSales, and then this table will have ROUND_ROBIN distribution so it will get all the data from DailySales and put them into DSales.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=204)** If we run this query, and now let's see the space used for DSales.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=221)** And as you can see, the data is pretty evenly distributed now since we use ROUND_ROBIN.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=228)** You don't have to use ROUND_ROBIN, but if, for some reason, you need to change distribution, this is the way you can do it.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=234)** You need to use a command create table as, as this has high performance with minimal logging.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=241)** In the Exercise Files, you'll find the script for this as well as a view that is documented by Microsoft.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=248)** This is a view that gives us information about the distribution and the tables for our entire data warehouse.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=258)** So, first, make sure to run this view.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=262)** I've already created the view so I am not creating it again.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=266)** And then you can run queries like this.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=268)** For example, this query will give you all the tables that have a distribution skew more than 10%.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=277)** So we are getting the name from the TableSizes, and then in the having, you're doing the operation to determine how much the skew is.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=288)** If we run this query, and then here we can see all the tables with all the nodes that have a 10% distribution skew.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=300)** This might be very helpful information for you to understand your data warehouse after you create it and load data into it.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=307)** We are not going to go into the details of this view, as you can find it in the link here documented by Microsoft, and you'll find this file in the Exercise Files.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=318)** If you want to change the skew percentage, then you can do it here.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=321)** From 10, you can make it 20.

> [!info]- Semantic Content
>
> **Env Vars:** round_robin (4), rows (2), distribution_id (2), showspaceused (1), reserved_space (1)
> **Code Keywords:** let (7), if, (1), this. (1)
> **CLI Commands:** make (3), find (3)
> **Exercise Files:** exercise files (2)
> **SQL:** where (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)


### Conclusion

#### Next steps with Synapse Analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=0)** - [Instructor] Thank you for going on the journey with me to learn about Azure synapse analytics.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=6)** Hopefully you now feel confident to start building your first data warehouse on the cloud.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=11)** If you'd like to build upon the skills you learned here, I would suggest using public datasets and load them into your data warehouse and storage.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=21)** It will help you better comprehend the processing power of the data warehouse and how to properly distribute data between compute nodes as well as improve your skills on how to query data serverlessly and build a logical data warehouse.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=37)** Also, if you'd like more about synapse analytics and dedicated SQL pools, look for my new course "Synapse Analytics Scaling and Configuration," which will be released shortly, where you'll learn how to scale and configure your dedicated SQL pools.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=56)** Also I'd love if you'd connect with me.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=59)** You can find me on LinkedIn.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=62)** Thank you for watching.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **CLI Commands:** find (1)
> **Code Keywords:** public (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Developing Chatbots with Azure]] | **6 of 7** | [[Introduction to Terraform on Azure (2022)]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
