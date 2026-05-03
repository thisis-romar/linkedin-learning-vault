---
type: course
cssclasses:
  - lle-course
slug: microsoft-azure-synapse-for-developers-14246261
url: "https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261"
duration_minutes: 155
duration: 2h 35m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH85I5g6phxDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1631124878063?e=2147483647&amp;v=beta&amp;t=ijazxkum8t-FPJ4xmByFLblBNLTe_GZnYw8Ownhu49s"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Developing Chatbots with Azure]]'
next_courses:
  - '[[Introduction to Terraform on Azure (2022)]]'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":6,"total":7,"prev":"Developing Chatbots with Azure","next":"Introduction to Terraform on Azure (2022)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Microsoft%20Azure%20Synapse%20for%20Developers.md)

![Microsoft Azure Synapse for Developers](https://media.licdn.com/dms/image/v2/C560DAQH85I5g6phxDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1631124878063?e=2147483647&amp;v=beta&amp;t=ijazxkum8t-FPJ4xmByFLblBNLTe_GZnYw8Ownhu49s)

# Microsoft Azure Synapse for Developers

> In today’s world, businesses are relying more and more on big data for their daily operations. This is a trend that is not likely to reverse. Azure Synapse is a great tool to handle all that data, as it blends big data analytics with data warehousing, offering organizations a way to store large amounts of incoming data for a reasonable cost. In this course, Nertil Poci shows you how to get up and 

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261) | 2h 35m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Data warehouses in the cloud](#data-warehouses-in-the-cloud)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started with Azure Synapse Analytics**](#1-getting-started-with-azure-synapse-analytics) (6 videos)
  - [Azure Synapse Analytics overview](#azure-synapse-analytics-overview)
  - [Creating Azure Synapse Analytics workspaces](#creating-azure-synapse-analytics-workspaces)
  - [Analyzing the architecture of dedicated SQL pools](#analyzing-the-architecture-of-dedicated-sql-pools)
  - [Provisioning dedicated Synapse Analytics pools](#provisioning-dedicated-synapse-analytics-pools)
  - [Challenge: Create a Synapse Analytics workspace with a dedicated pool](#challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool)
  - [Solution: Create a Synapse Analytics workspace with a dedicated pool](#solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool)
- [**2. Populating Dedicated Synapse Analytics Pools**](#2-populating-dedicated-synapse-analytics-pools) (9 videos)
  - [Data loading in Azure Data Warehouse](#data-loading-in-azure-data-warehouse)
  - [Preparing your data](#preparing-your-data)
  - [Exploring Azure Synapse Studio](#exploring-azure-synapse-studio)
  - [Loading data using the copy tool](#loading-data-using-the-copy-tool)
  - [Load data using the COPY command](#load-data-using-the-copy-command)
  - [Load data with PolyBase](#load-data-with-polybase)
  - [Transform data using data flows](#transform-data-using-data-flows)
  - [Challenge: Loading data using the copy tool](#challenge-loading-data-using-the-copy-tool)
  - [Solution: Loading data using the copy tool](#solution-loading-data-using-the-copy-tool)
- [**3. Streaming Data into Azure Synapse Analytics**](#3-streaming-data-into-azure-synapse-analytics) (3 videos)
  - [Data streaming scenarios](#data-streaming-scenarios)
  - [Creating a Stream Analytics job](#creating-a-stream-analytics-job)
  - [Testing data streaming using sample data](#testing-data-streaming-using-sample-data)
- [**4. Querying Using Serverless SQL**](#4-querying-using-serverless-sql) (9 videos)
  - [Understanding serverless pools](#understanding-serverless-pools)
  - [Querying and discovering data using serverless pools](#querying-and-discovering-data-using-serverless-pools)
  - [Using file metadata in queries](#using-file-metadata-in-queries)
  - [Building a logical data warehouse, part 1](#building-a-logical-data-warehouse-part-1)
  - [Building a logical data warehouse, part 2](#building-a-logical-data-warehouse-part-2)
  - [Manage statistics](#manage-statistics)
  - [Cost management](#cost-management)
  - [Challenge: Query partitioned data](#challenge-query-partitioned-data)
  - [Solution: Query partitioned data](#solution-query-partitioned-data)
- [**5. Querying and Best Practices in Dedicated SQL Pools**](#5-querying-and-best-practices-in-dedicated-sql-pools) (6 videos)
  - [Querying, labeling, and tracking data warehouse performance](#querying-labeling-and-tracking-data-warehouse-performance)
  - [Transactions in dedicated SQL pool](#transactions-in-dedicated-sql-pool)
  - [Optimizing queries with materialized views](#optimizing-queries-with-materialized-views)
  - [Connecting using external clients](#connecting-using-external-clients)
  - [Creating and updating statistics](#creating-and-updating-statistics)
  - [Analyzing data distribution](#analyzing-data-distribution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Synapse Analytics](#next-steps-with-synapse-analytics)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Data warehouses in the cloud](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-warehouses-in-the-cloud?u=76281980&t=0)** - In today's world, businesses are relying more and more on [[Big Data]] for their daily operations. Whether you already have an in-house solution for your data, or you're trying to move to a more flexible one, [[Microsoft Azure|Azure]] Synapse Analytics can help you quickly get up and running in a matter of minutes without any upfront costs. You'll learn how to get up and running with Synapse analytics as your data warehouse in the cloud. First, you'll learn how to provision your dedicated [[SQL]] pool and what the different options are. Next, we'll go to different data loading methods with hands-on demonstrations. After which, we are going to look at how to consume our data. After working with dedicated pools, we are also going to learn how to query data directly from storage, using serverless SQL and create a logical data warehouse. And finally, we're going to go through some of the best practices to follow, to get the most out of our data warehouse. My name is Nertil and let's get started building our data warehouse in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Big Data]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1)
> **Speakers:** - in (1)

#### [What you should know](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, There are a few things that you should know. First, you should be familiar with [[SQL]] and writing SQL and T-SQL statements. If you are not already familiar, then you can take the course, [[Microsoft SQL Server]] 2019 Essential Training. We are going to make use of [[Microsoft Azure|Azure]] storage for data loading, so you should be familiar with using Azure storage to upload and share files. You do not need to be an expert, but you should at least know the basics. You can take the course, Azure Storage for Developers: Blobs before continuing to get the most out of this course. Regardless, if you are not familiar, then we are going to go through each script step-by-step, and I'm also going to include the scripts in the exercise files, so you can copy them and study. If you are watching this course over a stretch of time, it's a good practice to pause the dedicated SQL pools that we are going to create, as this way, when you pause, you are not going to get charged. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Azure|Azure]] (3), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (5)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Azure Synapse Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Synapse Analytics overview](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=0)** - [[Microsoft Azure|Azure]] Synapse Analytics is a limitless analytics service that simplifies data discovery for [[Big Data]] and reduces the time to insights. It's designed as an all-in-one platform that combines [[Data Warehousing]] and [[Big Data Analytics]]. Synapse Analytics breaks down its analytic resources into three pools. We have serverless pools, dedicated [[SQL]] pools and [[Apache Spark]] pools. Dedicated SQL pools, despite the name change, are Azure SQL data warehouses, which are data warehouses in the cloud. Dedicated pools are petabyte scale, massive processing data warehouses in the cloud. And we can have as many as we want in our Synapse Analytics workspaces. Next, we have serverless pools. Serverless pools, unlike dedicated SQL pools, do not have to be provisioned. We only have to write a query and all the resources will be provisioned for us and be destroyed when the query ends. And finally, we have spark pools which allow us to run spark jobs for processing our data. Throughout the course, we are not going to be focusing on spark pools, but we are going to look at how to use dedicated and serverless SQL pools. Since Azure Synapse Analytics is an all-in-one solution, it connects natively with other services in Azure. It enables us to quickly discover and analyze our data in Azure data lake, blob storage,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/azure-synapse-analytics-overview?u=76281980&t=96)** or any other location in Azure. This way, we can see what types of data we have so we can transform it and load it into our reports. It also integrates with other services like Azure Purview, which is a service for [[Data Governance]] to help organizations understand their data across their entire ecosystem. It integrates with [[Microsoft Power BI|power BI]] for visualizing the data in different meaningful reports for making data driven business decisions. Machine learning is quickly becoming widely used by many organizations. Synapse Analytics integrates with Azure machine learning, providing an easy way to use the data generated across organizations to train different models. So we can use this model for making business decisions automatically. We're going to start creating our first Synapse Analytics workspace in our next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[SQL]] (5), [[Big Data]] (1), [[Data Warehousing]] (1), [[Big Data Analytics]] (1)
> **Env Vars:** sql (5)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** apache (1)
> **Speakers:** - azure (1)

#### [Creating Azure Synapse Analytics workspaces](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=0)** - [Instructor] Working with [[Cloud Services]] can get messy at times. We need different services integrated together to perform certain tasks. Synapse Analytics makes this easy for us by allowing us to create workspaces, which will contain all the services needed for gathering, processing, storing, and analyzing data. Let's get started creating our first workspace. From our [[Microsoft Azure|Azure]] portal, we can quickly find Synapse Analytics by searching for it. Here, let's go ahead and type in synapse. And we need to click on the Azure Synapse Analytics service, not the private link hubs one. In here, we are going to get a list of all the workspaces that we have created. Let's go ahead and create a new one using the Create button. First, we're going to create a new resource group. If you already have one created, then you can use that. But to be able to clean all the resources at the end, I suggest you create a new one. Let's go ahead and click the Create New button. And let's name it myworkspace. Next, optionally, we can provide resource group for managed resources. The managed resource group is used for holding ancillary resources created by Synapse Analytics. One will be created automatically for us. So we can leave it blank. Now, let's go ahead and enter our workspace name. Let's name it myworkspace.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=96)** And it seems that the workspace name, myworkspace, is taken. So let's add the suffix. Let's name it, mylearningworkspace. Another setting that we need to choose is the data lake storage. We can either choose from our subscription or we can use a URL. For our demo, we're going to create one inside our subscription. Let's go ahead and create a new account. Let's name it synapselearningstorage. And it seems like the name is taken. So let's add the suffix. Next, we need to choose the file system name. This will be just like a container in Blob storage. [[Microsoft]] went ahead and named it file system name, but it's a little confusing. So think of this as the container name. And in here, we're going to specify the container where our data is going to be stored. Throughout this course, we're going to store sales data. So let's create a new file system name called Sales. And make sure that the assigned myself the Storage Blob Data Contributor role is checked so you have access to the storage. And now, let's move to the Security tab by clicking on the Next Security button. In here, we need to provide the credentials for our administrator. You can change the admin login if you want. I'm going to leave you as sqladminuser.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-azure-synapse-analytics-workspaces?u=76281980&t=191)** And I'm going to enter a password. Make sure you remember the password that you enter here. And we are going to leave the [[Representational State Transfer (REST)|rest]] of the settings as default and hit the Review and Create button. Looks like the validation has passed. So now, we can create the workspace using the Create button. It might take a while for the workspace to be provisioned. We are going to continue with our workspace in the kits to come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Cloud Services]] (1), [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** url (1)
> **Tools:** azure portal (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing the architecture of dedicated SQL pools](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=0)** - [Instructor] Before we continue with our [[Microsoft Azure|Azure]] Synnex workspace. First, let's talk a little bit about Dedicated [[SQL]] pools. These are what replaced our traditional Data Warehouse, which was also formerly known as Azure SQL Data Warehouse. Dedicated SQL pools represent the collection of analytic resources, the size of which is determined when we provision it. Once we have provisioned the Dedicated Pool, then we can import [[Big Data]] from different aspects of our business, transform it into an appropriate format for querying, and then run analytic queries that are very high performance. Our Dedicated Pool will look just like any other SQL database with relational tables where we can store our data for later consumption for [[Business Intelligence (BI)|Business Intelligence]]. Now let's take a look at the architecture of our Dedicated SQL pool. Dedicated SQL pools use an old base architecture. We have a control node or alternatively it's called a Linder node against which we run our queries. The node holds a distributed query processing engine, which optimizes the query for parallel processing. And then passes the operation to compute nodes which do the actual work. The data is stored in Azure Storage, compute nodes, round of queries, as they are instructed by the control node. In dedicated SQL pools, data and compute power are separate, which means we can pose our compute power without affecting
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-the-architecture-of-dedicated-sql-pools?u=76281980&t=98)** our storage. So when we don't need compute power, then we can just pause it. And then resume it later on without losing our data. Depending on how much compute power we need, we can start from one node and scale up to 60. The more nodes we have, the faster we can load and query data since each node ran queries in parallel. When loading data into our dedicated SQL pool, it is plead into distributions. Number of distributions is 60 equal to the maximum number of nodes. While we can change the number of nodes, we cannot change the number of distributions. The number of distributions inside each node is divided by the total number of nodes. So if we have only one node, then all 60 distributions will be inside these node. And when you run queries, there won't be any parallel processing since we only have one node. If we had two, then each node would have 30 distributions and so on. If you had 60, then each note would have one distribution and we would have the maximum performance that we can get. We are going to take a more detailed look in the clips to come on how data is distributed and how we can control this distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Microsoft Azure|Azure]] (3), [[Big Data]] (1), [[Business Intelligence (BI)|Business intelligence]] (1)
> **CLI Commands:** node (11)
> **Env Vars:** sql (8)
> **Definitions:** known as (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Provisioning dedicated Synapse Analytics pools](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=0)** - [Instructor] In this demo, we are going to create a dedicated [[SQL]] pool. This is going to serve as our data warehouse in the cloud. We are going to add our dedicated SQL pool in our workspace that we created earlier. We named it mylearningworkspace. Let's go ahead and open it. And we need to navigate to SQL pools. Right now, we only have the built-in serverless SQL pool. Let's go ahead and create a new one using the New button. First, we need to give it a name. Let's go ahead and name it sales data warehouse since we are going to add sales data here. Next, we need to choose the performance level. Here, we have a slider that we can move to the left or to the right. The performance level is measured in data warehouse units or DWUs. In this case, as elected DW100, which will give us one compute node. To view all available options, click on the information icon, on Performance Level, and open the Learn More link. Here, we have a list of all our data warehouse units, and the number of compute nodes they have, as well as the distributions per node. As you can see, data warehouse 100 has one node. And 60 distributions are all in this node. We can see that different data warehouse units have also one node.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=94)** We have data warehouse unit 100c, 200, up to 500, which has all one compute node, but they have different prices. That's because besides the number of compute nodes, we also are limited to how many queries we can run in parallel. We are going to take a look at how many queries we can run in parallel for each data warehouse unit later on when we query the data. But for now, depending on how many compute nodes we need, we need to choose the appropriate data warehouse unit. And here, the maximum is data warehouse unit 30,000, which has 60 compute nodes. And each node has one distribution. Let's navigate back to our dedicated pool. And for our purposes, one node is going to be enough so we don't incur too many charges. And we are going to go with data warehouse unit 100. Next, let's navigate to Additional Settings. In here, optionally, we can choose a data source. We can leave it empty, so None. We can use a backup where we can upload it from some other external file or we can use a restore point. Restore points only work if we have existing data warehouses that we can restore from. In our case, we don't have any. So we're going to use None. And now, let's go ahead and create our data warehouse. Looks like our validation is successful. So let's go ahead and use the Create button to start the creation process. The provisioning of resources
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/provisioning-dedicated-synapse-analytics-pools?u=76281980&t=189)** for our dedicated pool might take a while. So we are going to come back to this when our data warehouse is ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **CLI Commands:** node (8)
> **Env Vars:** sql (4), dw100 (1)
> **UI Navigation:** navigate to (2), click on (1), open the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a Synapse Analytics workspace with a dedicated pool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=5)** - [Instructor] In this challenge, I would like you to create a new Synapse Analytics workspace. Once the workspace is created, inside, create a new dedicated [[SQL]] pools which has three compute nodes. Once you're done, join me in the next scape to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Create a Synapse Analytics workspace with a dedicated pool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=0)** - [Instructor] To solve this challenge, first, I navigated to [[Microsoft Azure|Azure]] Synapse Analytics. In here, I proceeded to create a new resource using the Create button. For the Resource group, I created a new Resource group just for this challenge.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=28)** Next, I provided the name for my Resource. I named it Synapse Challenge Workspace. And then, I proceeded to create a new account for my Data Lake Storage. And for the File system, I created a new file system and for the File system, which is going to be like the container that will contain my data, I named it Challenge. And finally, I made sure that the Assigned myself Storage Blob Data Contributor role was checked. Next, I moved to the Security tab. In here, I provided the [[SQL]] Administrator Credentials. I changed the SQL Admin user to Challenge user and provided my password. And finally click on the Review and Create since I did not need to change any other settings. Once my validation passed, I click the Create button.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-create-a-synapse-analytics-workspace-with-a-dedicated-pool?u=76281980&t=94)** Once my Workspace was provisioned, I navigated to Azure Synapse Analytics. In here, I opened the Workspace that I just created, and now I navigated to SQL pools, because the task was to create a new dedicated SQL. I proceeded to create a new one. First, I gave it a name. I named i, Challenged Data Warehouse. And as a requirement, the Data Warehouse had to have three compute nodes. Looking at the list of Data Warehouse Units and how many nodes each has, I can see that Data Warehouse unit 1500 has three compute nodes, so I needed to choose that one. Back in my dedicated pool settings, I chose Data Warehouse unit 1500, which would cost about $30 per hour. And finally, I hit Review and Create. And now the dedicated SQL pool creation process is almost complete. As soon as this process is finished, we can start using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** sql (5)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Populating Dedicated Synapse Analytics Pools

[↑ Back to Table of Contents](#table-of-contents)

#### [Data loading in Azure Data Warehouse](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=0)** - [Instructor] In a traditional data warehouse, you might have been used to a process called ETL which stands for Extract, Transform, and Load. The process allows us to gather data from our sources, transform it into a format that is most useful to us, and then load it into the data warehouse. While this works well for traditional data warehouse, it's not the case in cloud data warehouses or, more exactly, in [[Microsoft Azure|Azure]] Synapse Analytics dedicated pools. Due to the massive filing processing nature which separates compute and storage, we can use a process called ELT which stands for Extract, Load, and then Transform. ELT is a process where we swap the load and transform. The data is extracted from the source, and it's loaded into the dedicated pool, after which it's transformed. This way, we take advantage of the massive filing processing power of dedicated [[SQL]] pools, which eliminates the need for [[Data Transformation]], which in turn eliminates the need for all the processing power required to transform the data prior to loading it. Due to the scaled-out nature of dedicated pools, data is saved on something called a distributed table. A distributed table looks and behave like a normal table, but the rows are actually stored across 60 distributions. The data stored in these tables are distributed
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=96)** with a hash or a round-robin algorithm. Both of these distribution methods have their pros and cons. A hash distributed table improves query performance, while round-robin distributed tables are best for loading data into them. A hash distributed table will spread rows across all available compute nodes using a deterministic hash function. Identical values will always be on the same distribution. This way, the data warehouse has knowledge of the row's location. When querying the data, the data warehouse will use this information to minimize data movement which result in faster query performance. A hash distributed algorithm needs to know which column to use to decide on which node to place the data, so choosing a good column is very, very important. We need to choose a distribution column that does not require updates. We cannot update a distribution column unless we delete the row first and insert a new row with the updated value. Also, it's very important that the distribution column that we choose allows for the distribution of data evenly. In order for us to get the best performance, the rows need to be distributed evenly. When data is not spread evenly, some nodes will finish queries before others. And since the query cannot finish until all distributions have finished, each query is as fast as the slowest distribution.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=191)** We also need to choose a column that minimizes data movement. To get correct results, queries might need to move data from one compute node to another. Data movement commonly happens when queries have JOINs and aggregations on them. Choosing a distribution column that helps minimize data movement is one of the most important strategies for optimizing query performance for your SQL Data Warehouse. For example, we need to use columns used in JOINs or GROUP BYs. We should not use columns that are used in WHERE clauses, for example, a day since lots of WHERE clauses include the day. Round-robin distribution is quite different from hash distribution. Unlike hash, round-robin distributes data evenly across all distributions. The assignment of feature role is random. And unlike hash distribution rows, equal values are not guaranteed to be assigned on the same distribution. Due to the random distribution of data, when we run queries, data will be required to be moved in order to resolve a query. For example, when we join data, round-robin table will need to reshuffle rows between multiple nodes, which is a big performance hit. Here are some scenarios where you should consider using round-robin distribution for our tables. First, if there is no obvious joining key, then we should use round-robin as we're not sure on how to distribute data. Either way, you are going to get a performance hit. At least this way, we can insert the data quickly.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-loading-in-azure-data-warehouse?u=76281980&t=287)** Next, if there isn't a good candidate column for a hash distributed table. If you do not have a column in your table which distributes the data evenly, then hash distribution will distribute the data unevenly. This way, you'll end up with distributions with more data and other distribution with almost no data. Another time you might consider using round-robin distribution is when there is no join key with other tables as well. And finally, if you have a temporary staging table, then you should always use round-robin distribution. This way, you can load the data faster and then transform it and move it to your production table where you have a hash distribution in place. We are going to take a look at how our data will be distributed once we load our data into the data warehouse in the clips to come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft Azure|Azure]] (1), [[Data Transformation]] (1)
> **Env Vars:** elt (2), sql (2), where (2), etl (1), group (1)
> **Definitions:** stands for (2), is a  (2)
> **Analogies:** for example (3)
> **CLI Commands:** node (2)
> **SQL:** where (2)
> **Best Practices:** you should always (1)
> **Prerequisites:** required to (1)

#### [Preparing your data](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=0)** - [Instructor] Throughout this course, we are going to use sales data and we are going to generate our sales to keep it simple. So we don't depend on third-party data. You should find the sales data in the exercise files. In here you'll find a SalesData folder, which has data already pre-generated for you. This will contain about one million records split into 100 files, each 1,000 records, alternatively, if you want to generate the data yourself, I have included a tool that will generate data for you. Here first, we need to open the tool, which is a Node app. First, we need to open command prompt on this folder. The first thing that you need to do is install the Node packages, so you need to run [[npm]] install. Once the packages are installed, and you need to run npm run generate. The app will ask us how many records do we want to generate? The default is one million and you cannot make it less. So if you type one, then it's one million. If you type five, then it's five million. Let's go ahead and type two. So this will generate two million records and in total, 200 files. It generates multiple files because due to the massive parallel processing of data warehouse in the cloud,
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=92)** it runs better when it has multiple files. And in a couple of seconds, it will generate all records. And the generation process for our data is done. You should find your data in the output folder inside the application. In here, we should have about 200 items. Let's go ahead and open one of them, and we have a StoreCode, the date, the Total number of sales for that day, and the total amount of sales. We are going to get this data and load it into our data warehouse. If you have trouble running the Synapse Data Generator, then I have already included for you sales data pre-generated so you can use those. Before we can load the data into our date warehouse, first, we need to upload it to [[Microsoft Azure|Azure]] Storage. Let's go ahead and copy the path to this folder, and now let's navigate to the Azure portal. First, we need to create a new storage account. Let's go ahead and navigate to the storage account service. And in here, we are going to create a new one. For the resource group, I'm going to use a myworkspace resource group that we created earlier when we created our Synapse Analytics Workspace. Next, we need to give it a name, so let's name it myworkspacetestfiles. And it looks like the name is available.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/preparing-your-data?u=76281980&t=186)** We are going to leave the [[Representational State Transfer (REST)|rest]] of the settings as they are and hit Review and Create. And finally, let's create the storage account. Now let's go ahead and navigate to our resource. For our purpose, we are going to store the data in a blob container. Let's go ahead and navigate to containers, and create a new one. Let's name it sales. Let's go ahead and create it. Inside our container now, we are going to upload our files. Let's go ahead and use the Upload button, and in here, we need to select the files that we generated, which are on the output folder. Let's go ahead and select all the files that we generated, which should be about 200 of them. And just to keep things tidier, let's go ahead and upload these files inside the folder. If you click on Advanced, then you can specify a folder here. Let's name it dailysales, and now let's go ahead and upload the data. It's going to take a while for all this data to upload. We are going to continue loading this data into our data warehouse in the next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Microsoft Azure|Azure]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (3), node (2), npm (2), make (1)
> **UI Navigation:** navigate to (4), open the (1), select the (1), click on (1)
> **Tools:** command prompt (1), azure portal (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Exploring Azure Synapse Studio](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=0)** - Now that you have a workspace graded, you have a dedicated [[SQL]] pool. Also our files have been uploaded. Let's go ahead and take a look at Synapse Studio, which is a tool that we're going to use for loading data into our data warehouse, running script, managing our tables, etcetera. You can quickly open it using the open button in here, Open Synapse Studio. This will take us to a different application dedicated for Synapse Studio. If you have trouble loading this app, then, make sure that you login all of your other accounts, as well as try incognito. Also, sometimes, if you have multiple users signed in, then, it'll have trouble loading their account. We can use Synapse Studio for all kinds of operations. We can ingest data, explore and analyze, and visualize data. For example, as navigating [[Databases]], or data. And in here, we should see our database, which is our sales data warehouse, which is a dedicated SQL pool. And you can explore it, just like any other SQL database, as well as we can navigate the linked resources. And we can see things like storage account, and other information as we added here, for example, this is a storage account that we're using for our workspace Next, we have a "Develop" tab. In here, we get to create scripts, pipelines, etcetera. For example, if we add a new resource, we can choose to add a new SQL script data flow, notebook, spark definition, or we can browse from a gallery.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=98)** We also have the integration tab where you can use to create data integrations between different services. For example, we can create a pipeline or we can use the copy data tool. We are going to use the tool in the next clip to copy data directly into our data warehouse. But also we can create a pipeline which integrates data between different sources. We also have the monitoring tab where we can see our SQL pools, the performance, etcetera, and we have the manage tab where we can manage our resources. We can create triggers, security, etcetera. We are going to take a look at all these operations in the clips to come. For now, I'm going to create a table that will hold our data. When we load it, let's navigate to "Develop", and in here, I'm going to create a new SQL script. First, we need to choose where we are connected to right now. We are connected on a server-less pool, which says: Built-in We need to change that and navigate to sales data warehouse. And now, our database, it says data warehouse. And in here, we can run this group for creating a new table. As you can see, this is a normal create table script. We have the store code. We have the date, total sales, total amount. And then, in the width, you specify the distribution which we are doing: hash. The data in our case is distributed evenly between store code so each store code has almost the same number of records,
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/exploring-azure-synapse-studio?u=76281980&t=193)** and we're going to use store code to distribute the data evenly. Let's go ahead and run the script. And now the query executed successfully. The query in this case was very slow because I just put it up my dedicated SQL pool. But with time it will be a little faster. And if you don't want to lose the script but keep it for later, we can provide it with a name. Let's say "Daily sales table". And we can use the "Publish all" button which will prompt us for all our scripts. And now, we can do publish. And the script "Daily sales table" now is available for us to use later. If we navigate to our data, in our workspace details, If you expand tables, we should see daily sales. So now our table is ready for us to load data into it, as well as query data from it. We're going to start loading data in our next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Databases]] (1)
> **Env Vars:** sql (7)
> **Analogies:** for example (4), just like (1)
> **Definitions:** is a  (4)
> **UI Navigation:** navigate to (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - now (1)

#### [Loading data using the copy tool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=0)** - [Instructor] In this demo, we are going to load data into our dailysales. We are going to get the data that we uploaded into myworkspacetestfiles storage account inside the container sales. In here, we have dailysales. We are going to get this data and copy it into our dailysales table. Let's navigate to our Synapse Studio. First, we need to navigate to the Integrate tab. Here we are going to add another resource, and we are going to use a Copy Data tool. The test type is going to be Built-in copy task, and we are going to run it once. We can also choose to run it on a schedule, for example, if we need to run it daily at some point in time, for example, at midnight. Let's go ahead and move to the next step which is going to be our source. First, we need to choose the source type. In our case, it's [[Microsoft Azure|Azure]] Blob Storage. Depending on your storage type, you need to choose appropriate type here. And we need a connection. In this case, we don't have any connection yet, so let's go ahead and create a new one. Let's name it DailySales. We're going to list all connection is resolved at runtime. And for our authentication method, let's go ahead and leave it Account Key. We can also choose a shared access URL, for example,
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=94)** and we can paste it here so we don't have to provide our account key. In our case, everything is inside our account, and we actually have access to the account. If we did not, then we can use a SAS URI. Or, alternatively, we can use Azure Key Vault. In here, let's specify the service and the secret name. This way, we'd get the value directly from the vault. For our demo, we are going to go with Account Key. Next, we need to choose a subscription as well as a storage account. In our case, it needs myworkspacetestfiles. And now let's go ahead and create the connection. Once the connection is created, now we need to choose a data. In here, we can either choose a file or a folder. Let's go ahead and browse. First, we should get a list of containers, and we have our sales container. Let's go ahead and navigate inside. Inside we have our dailysales, so we need to open that one as well, and here we can either select the file or we can say OK so it gets the entire folder. Let's go ahead and click OK, and now we have selected the entire folder. We are going to leave all the options at default. We are only going to check Recursively,
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=189)** so if there are subfolders inside our dailysales, we are going to load them as well. And in the end, we also can specify by last date modified, so we only get files depending on when they were modified. For our case, we are going to leave it empty, but if you want to get only certain files, then you can provide a date here. Let's go ahead and move to the next step. Here it will automatically detect the format for us, so the format is text which is a CSV file, and it's comma-delimited by a comma, as well as the First row as header is automatically checked. We need to make sure that this is checked because in our data the first row is always headers. And if we do not check this, then we'll get an error because some data in the headers cannot be translated. We're going to leave the compression as None and move on to the next step which is a target. Now, in here we need to choose a target type. For our case, we are loading data into a dedicated [[SQL]] pool. So for our target, we need to choose Azure Synapse dedicated SQL pool. And in here, we don't have to create a connection because we have a sales data warehouse connection already. Now, once we choose a connection, then we need to choose a table. We can either decide to create a new table
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=283)** or we can use an existing table. For example, in this case it will create a table for us, Azure Blob Storage file, which we don't want, so we're going to use an existing table. And we only have one table that we created earlier called DailySales. Let's go ahead and move to the next step now. In here, we can choose how we want to map our columns. By default, most of the time, it will automatically map, but if there is a mistake, then you can rectify it here. As you can see, all the columns are mapped properly. If you wanted to change the columns, you could do it here. You could add a new mapping, you could remove existing ones, et cetera. For our properties here, this is set fine, so let's go ahead and move to the next step. And finally, we need to provide our task with a name. Let's name it DailySales. In here, we can choose to enable logging, staging, or we can choose to enable or disable PolyBase. Now, we'll take a look later on what PolyBase is and what a COPY Command is. We are going to import data using PolyBase and COPY Command directly using scripts without using an interface so you can understand what the different options are and use them independently. And now let's go ahead and move to the next step which is going to be a review of what we did, and let's go ahead and deploy it. The deployment process has finished,
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=378)** so let's go ahead and click on the Finish button to complete the process. And now in here, in the Integrate tab, we should have a pipeline. If we open it, we get the Editor. In here, we have only the Copy_data activity, so let's go ahead and add a trigger, and we could choose to trigger now. Once we click OK, the copying process should start. To view the pipeline, we can open the notifications and click on the View pipeline run to view the pipeline running. If we click on it, it will take us to monitoring where you have pipeline runs. And in here, we could see the status, when it started the duration, et cetera. And now our pipeline run has finished successfully. Accidentally, I ran the pipeline twice so we should have twice as many records. Let's navigate to our data, and in here let's go ahead and run a query. We can click on our sales data route and run a new empty script. Let's do select count all from DailySales. And we have about 3 1/2 million records which is about twice the data we have in storage. And let's also select a couple of records from the top.
>
> **[7:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/loading-data-using-the-copy-tool?u=76281980&t=471)** And we can see that we have a StoreCode, the Date, TotalSales, and TotalAmount, so our COPY Command worked. As you notice, it was quite easy for us to create a pipeline to log data from storage into our data warehouse. We are going to look at how to use the COPY Command directly as well as use the PolyBase command directly by writing the scripts ourselves in the clips to come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[SQL]] (2)
> **Env Vars:** copy (4), sql (2), url (1), sas (1), uri (1)
> **UI Navigation:** click on (4), navigate to (3), select the (1), open the (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Load data using the COPY command](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=0)** - [Instructor] In this demo, we are going to learn how to use a Copy Command directly without using the UI that [[Microsoft Azure|Azure]] Synapse Studio provides. We are going to get the data from our sales folder inside here, and we are going to load it into a table into our dedicated [[SQL]] pool. To make it simple, I'm going to create a new table. So either if you use your Exercise Files or if you want to view the data later, then you can see what each query return. Let's create a new table named DailySalesCopyCommand, and let's go ahead and run the query. Now that our table has been created, let's navigate to the Develop tab, and in here we are going to create a new script. This will contain the logic for our Copy Command, so let's name it Copy Command, and let's publish the changes. And now let's go ahead and write our Copy Command. I'm going to paste the entire Copy Command, and we are going to go through it step by step. First, we need to make sure that when we create the script, we're connected to our dedicated SQL pool. So we need to choose sales data warehouse or if you named it something else. So the Copy Command is going to go as following:
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=95)** COPY INTO, then we specify the table name, so in our case, it's going to be DailySalesCopyCommand. Then we specify the FROM. We get the URL from our container where we have our data. If you navigate to Properties inside that sales container, and we can see the URL here. So we need to copy this, and we place it here. Inside the sales, we want to go into the dailysales folder. And inside the dailysales, we want to get all the CSV files, so we use a *.csv. Next, we need to specify the WITH options. So, first, we have the FILE_TYPE which is CSV. Then we need to specify CREDENTIALS. We can use all sorts of different credentials. The Copy Command does not require any elevated access, so we can easily use a Shared Access Signature. So in the CREDENTIAL, for IDENTITY, we're going to use Shared Access Signature, and then we need to get the SECRET. If we navigate to our sales container, we need to navigate to Shared access token, and in here we need to create one. So we need to choose when it start and when it expires, so let's go ahead and say it expires tomorrow, and let's generate it. The value that we need to copy is Blob Shared Access Signature token, not the URL.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=190)** Once we copy it, then we provide it here in the SECRET property. Next, we specify the ENCODING which is UTF8, and then we specify the FIELDTERMINATOR. Here in our CSV files, the values are separated by a comma, so each column is separate by another using a comma. If it was something else, then, for example, in a lot of cases, you might have a text file, and then a separator is a pipe, so you'd put a pipe in here. And finally, most importantly, we need to specify that the FIRSTROW is 2. This tells the Copy Command that it should skip the first row because the first row is header, so it should start from two. If we don't specify this here, then our Copy Command will fail. And now if we run the Copy Command, all should work. All the data should be imported into our table. The only thing that we haven't done here is specify the column mapping. That's because our table structure and our CSV structure matches perfectly. We have the StoreCode, Date, TotalSale, TotalAmount, and the tables are like that in our data warehouse. If we wanted to map columns, then we need to open parenthesis, and in here we specify the column, so StoreCode maps to the first column. The index starts from 1, not 0. Then the Date maps to the second,
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=286)** TotalSales maps to the third, and TotalAmount. Just to make sure, let's view our CREATE TABLE script, and make sure that we have typed the column names properly, so StoreCode, Date, TotalSales, TotalAmount. And now we have set column mapping. And now the property that we can set here in the columns is a default value. For example, if the StoreCode is empty or null, then we can specify what do we want to enter there. To do that, we specify the default keyword, and then we specify the value that we want. So let's say that if there was no StoreCode, then we're going to use a value zzz. And now let's go ahead and publish our changes so we don't lose them. And finally, let's go ahead and run the Copy Command. If we run it as it is right now, it might take a while for this to finish. So to get around it, let's go ahead and load just one file. Let's load the sales, sales-1.csv file. This is just one file with 1,000 records so it should be faster. And our Copy Command has completed successfully. So let's go ahead and select the data to see if it's there. We need to do SELECT all from DailySalesCopyCommand.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=384)** And indeed, we have data, so our Copy Command is working properly. It's important that when you're testing the command, you work with only a small batch of files. For example, in this case, you only copy data from sales-1, but you might have a test environment where you copy only a small batch of data so you can see the queries are working properly or not. Now that our query is working, let's go ahead and change it so it gets all files inside dailysales. Let's go ahead and replace sales-1 with a wildcard, and let's run the command again. And as we can see now, we got an error: Not able to validate external location. That's because when we created our Shared Access Token, we only told it to read. So it has access to read the file, but it doesn't have access to list all the files that it has to read. So unless we specify a specific file here, like sales-1.csv, it won't be able to read. Let's navigate to our storage account, and in here we need to create a new access token. In the Permissions, we also need to select List. This will give you the ability to list all the files inside the folder. And now let's generate our token. Let's copy the Blob SAS token and replace it here.
>
> **[8:01](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-using-the-copy-command?u=76281980&t=481)** If we run it again, then it should log all the data. And now it copied all the data from our storage into our table. Let's go ahead and make a COUNT query. And we have almost 1.8 million records, so our Copy Command was successful. We're going to look at how to use PolyBase in the next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** csv (4), url (3), sql (2), secret (2), copy (1)
> **UI Navigation:** navigate to (5), select the (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (3)
> **File Paths:** sales-1.csv (2)
> **SQL:** create table (1), select (1)
> **Definitions:** is a  (2)

#### [Load data with PolyBase](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=0)** - [Instructor] In this demo, we are going to load data into our data warehouse using PolyBase. PolyBase enables us to query data directly using T-[[SQL]] from multiple sources. We could query data from Oracle, Teradata, [[MongoDB]], [[Hadoop]] clusters, Cosmos DB, et cetera, without installing any external client software. It enables us to define external tables that we can query later on without having to know the structure, as we can define the structure for a data using external tables. Now let's go ahead and copy Sales data into our dedicated SQL pools using PolyBase just like we did with our Copy command in our previous clip. First, we need to create a master encryption key, and we need to define a password. In this case, you can specify a more strong password, but just for demonstration purposes, I'm just going to type in a password here. This only needs to be done once. Let's go ahead and run this query. You can select the query that you want to run and hit Run. Next, we need to create the credentials. These are database scoped credentials that we are going to use to access our storage. This could be [[Microsoft Azure|Azure]] storage or any other location. This way, when you query your data, you don't have to define the credentials always. We only define it once here, and we can reference it.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=94)** In our Copy command, we use shared access signature. This time we are going to use an account key. To do that, we need to specify the identity as user, and we need to get the secret key from our storage. Let's go ahead and navigate to our storage account. Our storage account was myworkspacetestfiles. And in here we need to navigate to Access keys, and we are going to copy the first key, so we need to hit Show keys, and now let's go ahead and copy this. Let's navigate back to our workspace, and we need to provide that value here. So we specify the identity as user, and then we specify the key as secret. Next, we need to specify our data source. And we do that using CREATE EXTERNAL DATA SOURCE, and then we specify the name, inside which we specify the options. The TYPE is going to be HADOOP, so we are going to use the Hadoop file system. Next, we need to specify the LOCATION. Now, with the Copy command, we use a location of our container. In this case, it's going to be a little different. Since we are going to use a Hadoop file system, we need to specify the wasbs in front. This is going to be our protocol. It stands for [[Windows]] Azure Storage Blob, and it's a protocol for accessing data
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=189)** on the Hadoop distributed file system. Next, we need to specify our container name and then the at sign and then the storage account name. Back in our storage, our storage account is named myworkspacetestfiles. And if we go to Containers, here we have the sales container, so we are getting the data on the sales container. And then we specify .blob.core.[windows.net](https://windows.net). This will get the data from our sales container, which is on the myworkspacetestfiles. And then we need to specify the credential. We created credentials named SalesDataCredential here. And now we are going to use those credentials to access our data source. First, let's make sure we run these queries. Let's go ahead and create our credentials and then create our data source. Now that we have a data source, we need to create our file format. These will tell our external table what format the data is. Here we are creating an external file format, and we are naming it CSVFileFormat, and then we specify the options. The type is going to be DelimitedText, so CSV, and then in the options we specify the FIELD_TERMINATOR, which is a comma, then we specify the STRING_DELIMITER,
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=285)** and then it's very important that we specify that the FIRST_ROW is 2. Since our data has headers, if we don't specify these, then we'll get a conversion error. Most likely, it will try to convert the DateTime, and then it can't since the header is not a valid DateTime. Let's go ahead and run this query. And now finally, the last thing that we need to create is our external tables. External tables hold the definition of the data that we want to retrieve. So in our case, let's go ahead and create an external table named Sales_External. Or let's change the name to DailySales. Let's name it DailySales_External. This will hold the definition, and we can query data using it. We need to specify the columns, so we have a StoreCode, a Date, TotalSales, and the TotalAmount. And now in the WITH, we specify the options. First, we have the LOCATION. In the LOCATION, we are specifying the folder dailysales and then specifying sales-1.csv. We can also not specify the sales-1.csv, but to test things first, let's go ahead and only load one file, then we can change it so we can load everything. Next, we specify the DATA_SOURCE, which is going to be SalesDataSource that we created earlier here. Next, we specify the FILE_FORMAT,
>
> **[6:19](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=379)** which is going to be a CSVFileFormat. And now we are ready to run the query.
>
> **[6:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=394)** And our table has been created. Let's go ahead and run a simple query. Here we can query the data directly from the external table. This will get the data from storage and bring it to us using just SQL. Let's go ahead and get the top 10 records. And now let's run our query. This is querying data directly from storage. And here we can see the data. We have a StoreCode, Date, TotalSales, and TotalAmount. One last step is to get this data and load it into a table, not an external table but an internal table so we can query it easy without querying it directly from storage. Let's go ahead and do Create. Let's name our table DailySalesPolybase. Next, we need to do AS, so we are going to use Create Table AS. Select all from DailySales_External. This will create the DailySalesPolybase table from the data inside our DailySales_External. And we got an error. There indicates that we have to specify a distribution, so let's go ahead and specify one: with, and inside here we are going to specify the DISTRIBUTION.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=488)** The DISTRIBUTION is going to be HASH, and we are going to use StoreCode. Now let's go ahead and run the query again. And the query completed successfully. Let's go ahead and query the table now.
>
> **[8:39](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=519)** And indeed now, we have data. We have mold it from our external table into our internal table. From here, we can create reports and query the data as frequently as we need to, as well as we can enrich the data by joining it with other tables. One last thing that we need to do is change the LOCATION. In here, we specify sales-1, but we need to get all the data inside the folder. So let's go ahead and remove this part. We are only going to specify the dailysales folder. But in order for this to change, first, we need to drop the external table and then recreate it. To drop, we use a drop EXTERNAL table command, then we specify the table name. Let's go ahead and run this query. And now let's recreate our table.
>
> **[9:45](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/load-data-with-polybase?u=76281980&t=585)** Let's make sure that if we query the external table, we get data. And finally, to log the data, we use Create Table AS with, and then specify select all from DailySales_External. We already created our table so I'm not going to run this again. But if you run this then, you need to create another table because this already exists. Make sure to use Publish all to save your changes so you can reuse this query later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (5), [[SQL]] (3), [[Microsoft Azure|Azure]] (2), [[Windows]] (2), [[MongoDB]] (1)
> **Env Vars:** location (4), sql (3), external (2), distribution (2), create (1)
> **UI Navigation:** navigate to (2), select the (1), go to (1)
> **CLI Commands:** make (3)
> **File Paths:** sales-1.csv (2)
> **Definitions:** stands for (1), is a  (1)
> **URLs:** [windows.net](https://windows.net) (1)
> **Analogies:** just like (1)

#### [Transform data using data flows](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=0)** - In this demo, we are going to create a more advanced pipeline that joins the data between two files and then stores it in a table. First, we're going to create a new container. In here, we're going to store a file name stores. Let's go ahead and create the container, which is named stores. And we're going to upload the file, which you will find in the exercise files. Here on the exercise files, we'll find the file name stores.[[JSON]]. The stores are not a CSV format. This way, we'll give you a chance to look at how to parse JSON files as well as CSV files. Let's go ahead and select it. And upload the file. Now it's time to get Synapse Studio. And in here we need to navigate to integrate And we're going to create a new pipeline. For these, now we are going to use, move and transform. And you're going to use a data flow. Just drag and drop the data flow here, provide a username. Let's say, merge, stores, and sales. Next, you need to navigate to settings. And in the data flow section, you need to create a new one. First, we need to add the source. In the source settings first, let's specify a name. Let's go ahead and add sales first.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=97)** We are going to use an ingestion data set, and we're going to create a new data set. Our files are on [[Microsoft Azure|Azure]] Blob Storage. So we need to choose Azure Blob Storage. Next, you need to specify the format, which is Delimited Text. And now let's give it a name. Let's name is sales. And we need to link it to a service. Let's go ahead and send you. And now we are going to create a sales connection. So, let's name it, sales connection. These will point out to our sales data. We are going to leave the settings at default, and we're going to select a subscription. Next, we need to select a storage account, which is my workspace test files. And now, let's go ahead and create our connection. Now we need to specify the path where our files are. So, let's go ahead and use a browse button. Our files are in the sales container, inside the daily sales folder. We need to open the folder and click OK, without selecting any files. Also, we need to select that the first row is the header. And now let's go ahead and click OK to save.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=196)** Now we have our sales source. And if we look at the projection, we can see that it automatically found the columns. We have StoreCode, Date, TotalSales and TotalAmount. And we can change the type here as well. Let's go ahead and change the date type from string to date type. And total sales and total amount are going to be numbers. Which are going to be big integers. So we need to choose long.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=233)** Now let's go ahead and add our other source. This is going to point to our stores. Let's name it stores. And we're going to create a new data set. The location is Azure Blob Storage just like before. And this time we're going to choose JSON. Let's name it stores. And then, we're going to link it to a service. To keep it simple, we are going to create a new one. Let's name it stores connection. And let's go ahead and select the subscription. And then the storage account is going to be the same, my workspace test files. And let's go ahead and create this connection. Let's go ahead and browse, and select the file that we want. So this time we're going to use a stores container. And inside here, we're going to select the file stores.json, as we only have one. And now let's go ahead and save the changes. If we look at the projection, we should see all the columns. We have the city, code, size, latitude, longitude population, and state. The property that we are going to join with is the code. At this point, we have the sales, we have the stores.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=331)** Now, all we need to do is join two together, and then store it into a table. Next we need to click the plus button here, and we are going to add a join. Let's name it store sales. So the left stream is going to be the sales. The right stream is going to be the stores, pretty straightforward. And we need to choose a join type. By default, we have Inner, and that's what we want. We only want to join if data in both sides exists. And now we need to select the condition. First, we need to select the sales column. The Azure UI is a little hard to use, but bear with me. The sales column is going to contain a store code. And this should equal the code from the stores.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=396)** This is all the settings we need to change for our join. We need to specify the left, the right, the join type and the condition. If we navigate to the inspect tab, we can see more details. We can see that we have four columns in the left, seven in the right and 11 in total. And now we need to add the final step, which is an output where the data is going to go. Let's go ahead and click the plus button. And here we need to choose a destination, which is called a sink. Let's name it Synapse Analytics. And then the incoming stream that we want to process is a store sale join. We would also directly process sales or stores, but for our case, we're going to use store sales. Next, you need to choose a data set. Here, we specify where the data goes to. And now we are going to use Azure Synapse Analytics dedicated pool. Here we need to select Azure Synapse Analytics. Then we to specify the name. And in the link service, let's go ahead and create a new one. Let's name it sales data warehouse, as this is a dedicated pool that we're connecting to. First, you need to select a subscription. And then the server name, which is my learning workspace.
>
> **[8:12](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=492)** Next we need to specify the database name. And the database name is going to be, sales data warehouse. And here let's go ahead and specify authentication. For our demo we are going to use [[SQL]] authentication. The username was [[Microsoft SQL Server|SQL server]] admin. And the password is the one that you typed in, when you created the workspace. And now let's test the connection. And the connection was successful so, let's go ahead and create it. Now we need to either select a table, or create a new. To make it easier, I'm going to create a new one. And name it store sales. And let's go ahead and click OK. And now finally, we have all the steps. We have two inputs, a join, and an output. Let's go ahead and change the name of our data flow. Let's name it, merging sales and stores. And finally, let's publish our changes. And as we can see, we got an error. It says that it needs a place for staging environment to store the data. Let's go ahead and close this. To fix this, we need to navigate to settings on our pipeline. In here you need to scroll to the bottom, and we need to link to a staging service.
>
> **[9:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=589)** Let's go ahead and create a new one. Let's name it staging. And let's select our subscription. And let's select our account. Let's go ahead and create our connection. And now we to specify the folder. Let's go ahead and click browse. And in here, let's go ahead and store it in our sales data warehouse, This is a logging folder that was generated automatically to store data. If you don't want to store it there, then you can specify another one. And now finally, let's go ahead and publish our changes.
>
> **[10:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=642)** Now that the publishing has completed, let's go ahead and close all these tabs. And that's how we get our pipeline. Which was called pipeline 1. If you double click on it, it will open the details. And then you can add a trigger. And let's go ahead and trigger it now. To view the details of the pipeline, you can navigate to monitoring. And then in here we have pipeline runs. Let's go ahead and click on it, pipeline 1. And we can see the progress here. Once it's finished, then we should have a table called store sales, with all the properties combined. If you click on the data flow details, in here, you'll get all the steps, and then you can click on each of those to see the status. At this point, all has completed. So if you click on stores, you can see the status. Then you could move to join. And in here, you can see the data, as well as the final output. So while the process is running, you can see where it's at, and the progress it's doing. Now that our pipeline has finished, let's navigate our database. And let's go ahead and write a new query. Let's select the top 10 items from store sales.
>
> **[12:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transform-data-using-data-flows?u=76281980&t=745)** And we have the data. We have historical, total sales, total amount, city, code, size, latitude, longitude, population, and state. So our data was joined successfully. As you can see, using pipelines is very easy to create [[Data Transformation]]. We can add as many steps as we want. We could join the data, transform it, parse it, and then store into our data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[JSON]] (4), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Data Transformation]] (1)
> **UI Navigation:** select the (6), navigate to (5), click on (5), open the (2), drag and drop (1)
> **Env Vars:** csv (2), json (2), sql (2)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **CLI Commands:** find (2), make (1)
> **File Paths:** stores.json (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (1)

#### [Challenge: Loading data using the copy tool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-loading-data-using-the-copy-tool?u=76281980&t=0)** - [Instructor] In this challenge, I would like you to load data into the dedicated [[SQL]] pool that we have created earlier using the built-in copy tool. First, create a new table called DemoSales, and then load all the sales data in the Exercise Files into the DemoSales table. Once you're done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Loading data using the copy tool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=0)** - To solve the challenge, first, I started by creating a new container in my workspace test files, storage account. I named my container "SalesChallenge". Next, I proceeded to upload those sales files from the exercise files.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=35)** And I uploaded the files in a folder called "dailysales".
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=44)** Once my files were uploaded, I navigated to my senior Synapse Studio account and navigate to the Developer tab and create a new script. I changed the database to "salesdw". And then added the script to create my table. The table "DemoSales" has "StoreCode", "Date", "TotalSales", "TotalAmount", and a property for "IsVacation". Same as you'll find in the sales folder. For the distribution, I used the "StoreCode" and finally created the table. Now, finally, I navigated to the Integrate tab. And from here, I entered a new resource of type "Copy Data tool". I chose the "Built-in copy task" for the task type and then proceeded to create a new source. The source type was "[[Microsoft Azure|Azure]] Blob storage". And for the connection I created a new connection. I named it "SalesChallenge" and selected the storage account. After creating the connection to my sales challenge, I browsed the folder where my files were. Using the browse button,
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=138)** I navigated to the sales challenge container and then selected the daily sales. Next, I move to the Configuration tab where I left everything as default. I made sure that the "First row as header" was checked and the file format was "Text" and the "Column delimiter" was "Comma".
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=169)** And then move on to the Target configuration. For the target, I chose "Azure's Synapse analytics dedicated [[SQL]] pool". And for the "Connection", I use the "salesdw". And I use an existing table, which was "DemoSales" that I created earlier. Next, I moved to the Column configuration where I specify where each column goes to. The only property that was not mapped, since the header did not match was the vacation day. So, I selected that "IsVacationDay" property to map to my "IsVacationDay". And finally hold onto the next step. I gave my task a name, I named it "CopyChallenge",
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=232)** and finally moved on to the Review step. And finally, I click the "Finish" button to complete the deployment. Now that my pipeline was completed, I navigated to the Monitor tab. And in here, I could see that the pipeline was running and it was in progress.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-loading-data-using-the-copy-tool?u=76281980&t=261)** In order to view the pipeline running details, I click on the "Details" icon. And from here, I could see the pipeline status, I could see how many data has been written, how many roles have been written, et cetera. The sales folder contains almost 1 million records. So we are almost halfway through done. And now we are a 640,000 records written and at 1 million rows written. We can see that the pipeline has succeeded. Next, I navigated to my database and created a new query. Just to make sure my table had rows, I ran a simple query to see the data inside the table. And the table has data, it has "StoreCode", "Date", "TotalSales", "TotalAmount", and "IsVacation", which indicates if it's a vacation day or not. So the copy command was successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[SQL]] (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - to (1)
> **Non-Speech:** (upbeat music playing) (1)


### 3. Streaming Data into Azure Synapse Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Data streaming scenarios](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=0)** - Now that we have set up our data warehouse or the dedicated [[SQL]] pool and learn how to load data into it from our data lake, we are going to look at how to stream data in real time from various sources into our data warehouse. The first question that might come to mind when you think of streaming events directly into your data warehouse is why would we want such a scenario? We could get the data directly from our data lake only when we need it. And that is true. If we want to do some ad hoc queries once in a while, then we don't need to log the events into our data warehouse. But if you want to generate report with data related with other tables, then we need to store the events in our data warehouse inside a table. This makes it easier and faster to query and enrich the data for different reports as well as use it for machine learning models. For our scenario, we are going to stream real time, checkout information from our stores. Every time a customer starts and completes a checkout, we are going to stream data into our data warehouse. We're going to collect the full information in streaming. StoreCode to identify the code, a city, where the story is located at, the date timestamp, when the process starts, saw the checkout process, the duration, so how long the checkout process took, variable SelfCheckout to identify if it was a self checkout or it was using a cashier,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/data-streaming-scenarios?u=76281980&t=96)** and another property to indicate if it was paid with cash or with a credit card, named CashOnHand. This data will be sent at the end of the checkout process. As soon as we send the data, it will go directly into our data warehouse from which we can generate all sorts of different reports. We can have a report refresh as often as we want. Since we store the data in a data warehouse, we don't have to query it from storage all the time. We're going to create our streaming process in the next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### [Creating a Stream Analytics job](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=0)** - In order to stream data. First, we need to create an Event Hub. You can quickly find Event Hubs by searching for them. Let's go ahead and create a new Event Hub Workspace. Let's select the my workspace group, so we can delete everything together at the end. And now let's provide a namespace with a name. Let's name it StoreCheckout. And for the pricing tier, let's go with standard. And let's go ahead in review and create our namespace. Looks like with that things are valid so lets go ahead and create it. Now let's go ahead and navigate to our workspace. The first thing we need to do is navigate to Event Hubs. And we're going to create a new Event Hub. Let's name it checkout. And let's ahead and create it. As you can see, we are leaving most of the settings unchanged as we are not focusing on the event part of things. We're just going to focus on how to get events and then send them to [[Microsoft Azure|Azure]] Synapse Analytics. Now that we ave our Event Hub, we need to create a stream analytics job. This will process data from our Event Hub,
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=95)** and then send it somewhere else. Let's go ahead and duplicate the tab, as you're going to need this tab for later. First, let's go ahead and find the stream analytics job service. And we are going to use the stream analytics job service. As always, we need to create a new one. Let's name it, checkoutToSynapse. And let's use the my workspace group. And we're going to leave the [[Representational State Transfer (REST)|rest]] of the settings as default. Now that the deployment is complete, let's go ahead and navigate to the resource. And now in here, you have to tell it where it's going to get the data and where is it going to send them. First, we need to go to the job topology input. And we need to add a stream input. In our case, it's going to be an Event Hub. Let's name it, CheckoutEvents. Next, we need to select our hub namespace, which we named StoreCheckout. And the even hub name that we created was checkout. We're going to automatically create a new Hub consumer group and for authentication mode, we are going to use a connections string.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=190)** And we are going to tell it to create a new one automatically with the required permissions. The serialization format for our data is going to be [[JSON]]. And finally, let's go ahead and save it. Now that we have input, we need to create the output. Let's go ahead and add a new one. In this case, it's going to be Azure Synapse Analytics. Let's name it Synapse. And then the database is going to be [[SQL]] data warehouse and authentication mode is going to be connection string. The username is sqladminuser, and the password is the password that we set when we created our workspace. And finally, we need to specify the table name, let's name it, CheckoutEvents and let's go ahead save it. The first thing that we're going to notice is that the test will fail that's because the table does not exist on the other side. And as we can see the connection test fail. If you open on the details, it says that "SQL data warehouse output needs a job storage account to run." Let's go ahead and navigate back to the job and in the settings, you need to navigate to storage account settings.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=286)** Here, we need to add a storage account. Let's go ahead and select from our subscription. And use a my workspace test files account. Let's go ahead and save the changes. And now if we never get back to our output, if we test the connection, we should get another error. This should tell us that "The table does not exist on the other side, name, CheckoutEvents." And "SQL database table does not exist." but that's alright. We'll create it later when we explore our data. Now that we have input and output, we need to navigate to query. Here in the query, we specify an SQL query. We do SELECT all INTO, which is going to be the destination, and then FROM our input. So first, let's go ahead and change the output, which is going to be Synapse. And then, the input is going to be CheckoutEvents. If we leave select all here, this will fail because the events have extra properties like an even date, processed or not, et cetera. And it tries to enter those values into our table, which it can not find a column for. So here we need to specify all the columns that we want from our event, which is the StoreCode, Date, Duration,
>
> **[6:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-a-stream-analytics-job?u=76281980&t=378)** Operator, SelfCheckout and CashOnHand. Now, let's go ahead and save the query. Now that we can see the query, one last thing that we need to do is to start the job. We need to navigate to the Overview tab. And from here, we need to click Start. This now, will start the job so it process data from our events stream and then move them to the data warehouse. And now, since our job has started, one last thing that we need to do is create the table. Let's navigate to our Synapse Studio. And in here, they're going to run the screen that creates our table. We need to create a table name, CheckoutEvents, which has a StoreCode, Date, Duration, Operator, SelfCheckout and CashOnHand. And for the distribution, we are going to use round-robin instead of StoreCode. This will make the inserts faster. Let's go ahead and run the script. And now we have our table. If you want to copy paste the script, you'll find it in the exercise files. Now that we have everything set up, we are going to stream data into our data warehouse with test events in our next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Azure|Azure]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1)
> **UI Navigation:** navigate to (7), select the (1), go to (1)
> **Env Vars:** sql (4), json (1), select (1), into (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** checkouttosynapse (1)
> **SQL:** select (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### [Testing data streaming using sample data](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=0)** - [Instructor] In this demo, we are going to send Events to our Events stream that we created earlier, using a test application. In the exercise files, inside the folder C naps Event Generator, you'll find an application. Open the folder and then open the [[Windows]] Terminal inside this folder. You can do that by using right click and then 'Open in Terminal' or on the Navigation bar you can type CMD and it will open the Terminal inside this folder. The first thing that you need to do is run [[npm]] install as this is a node JS application. This application will send test data to our Event stream So the data can be processed and moved into our Data Warehouse in order for us to test the process. Now that the baggage is there installed, we can do NPM run generate to start generating data. The first thing that it's going to ask us is to enter Connection string as it does not know where to send the data. So let's go ahead and navigate to our stream and we need to open the Store Checkout stream that we are using, which is a Workspace. First, we need to know the Event Hub name, which is Checkout. Remember this as we are going to use it later. And if you named it something else, please make sure to note that. We need to navigate, to Shared access policy and you need to create a new one.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=94)** Let's name it Send Checkout Events. And the only permission we need to provide is Send as we are only sending events. And now once it's created, click on it and we need to copy the Connection string, the primary one. Remember if you navigate to Event Hubs, the Event Hub where we are sending data is Checkout. Now let's navigate back to our application and let's enter the Connection string. Once we enter the Connection string, then you're asked to enter the Hub name, which is Checkout. And now it's going to send data. It's going to send about 100,000 records in batches of 1000. Let's navigate back to our stream and we need to navigate to our stream analytics job. First, if we navigate here in 'Overview' we should see that our stream is receiving messages and data. And we can get more details in the stream job. Here in our Stream analytics job, we can see the input and the output. And we can see the details we have about 27K input and about 4k has been sent to our Data Warehouse.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/testing-data-streaming-using-sample-data?u=76281980&t=191)** And it looks like we don't have any errors yet. If you had any, then we'll get a warning icon, either on the input or the output. Now let's navigate to our Data Warehouse and see if we have any data. Let's go ahead and select the top 10 record from our table. And as we can see, indeed, we have data. Yeah, we have a store called the Day, Duration, Operators Self-checkout, Cash on hand. Now, if you do account query, we have about 60,000 records. And if you run it again in a couple of seconds, we should have more and it's 66. So our data is coming in. As you can see, it's pretty straightforward to create a pipeline that sends data from an Event to our Data Warehouse. You can change the query here in the query, map the data as you wish, and then send it to the Data Warehouse. this way now the data stands in a table into our Data Warehouse. We can join it with the stores with other results and then display it in results. As well as, create Machine learning model, where they can be trained to alert us as soon as something is wrong with our stores.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Windows]] (1)
> **UI Navigation:** open the (4), navigate to (3), click on (1), select the (1)
> **CLI Commands:** npm (2), find (1), node (1), make (1)
> **Env Vars:** npm (2), cmd (1)
> **Tools:** terminal (2), windows terminal (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), warning (1)
> **Exercise Files:** exercise files (1)


### 4. Querying Using Serverless SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding serverless pools](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=0)** - [Instructor] When we created our workspace, inside it we had a default serverless pool, which was built-in, and we could either remove it or change it. In this clip, we are going to see what it is and how we can use it. Unlike dedicated as [[SQL]] pools, serverless pools don't have an infrastructure that we have to provision. With a dedicated SQL pool, we had to tell it how much compute power we needed, while with serverless pools, it will figure out by itself and query the data. Similarly to dedicated pools, it uses a scale out architecture that distributes the processing of the queries into compute nodes while dedicated SQL pools use a massive parallel processing engine to distribute the queries across different compute nodes and depending how data was distributed, each node had certain data to process. Some had more data than others depending on the distribution. Serverless pools, on the other hand, use a different kind of a query engine. The query engine is called distributed query processing engine, or DQP for short, which gets the query and assigns tasks to compute nodes. Based on the query, it figures out how many nodes are needed and then sends instructions to the nodes. Let's take an example. A query comes in to the control node.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=93)** It processes it and assigns it to the compute nodes. In our example here, it sees that it needs six compute nodes, so it sends instructions to those and they are provisioned automatic for us so we don't have to do anything. Once the process is done, they send the data to the control node and we get the results, and we are charged depending on how many data we process. Let's take a look at some use cases for using serverless SQL pools. First, we have data discovery. By using serverless SQL, we can explore and discover our data in storage. We can do this quickly without provisioning anything. Since we only do this once in a while, it's beneficial for us to only pay when we need it. For example, data scientists can look at our data to understand what they can do with it. Next, we can create a logical data warehouse. Serverless pools have the ability to store object [[Metadata]]. So, we can create a logical data warehouse where the data is only in storage. This way we can create views that we can query directly, so we don't have to know about the data structure all the time. We can just query the views and since it will update [[Statistics]], the queries will be relatively fast. And finally, another use case is to transform data. These will be some basic [[Data Transformation]] that we can do, for example. We can get data from storage, parse it, and then store it somewhere else,
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/understanding-serverless-pools?u=76281980&t=185)** or send it to [[Microsoft Power BI|Power BI]] for visualization [[Dashboards]], et cetera. We're going to look at how are we can use serverless SQL pools to query data directly from storage in our next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Metadata]] (1), [[Statistics]] (1), [[Data Transformation]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** sql (6), dqp (1)
> **CLI Commands:** node (3)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Querying and discovering data using serverless pools](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=0)** - [Instructor] In this demo, we are going to use our built-in serverless pool to query data directly from storage. First, we need to create a new query. I have created a new one and named it query data serverlessly, and we need to make sure that we're connected to the built-in serverless pool. You'll only have one which is going to be the built-in one. To query the data, we are going to use the open role set functionality and the query will be just like any other [[SQL]] query. Only thing that changes is the from part. First, we are going to select the top 10 records and we are going to get all the fields. This is just like any other SQL that you might have seen. Next, we are going to do from, and we are going to use open role set function. In the bulk property, we need to set the URL to our file. In our case, we are going to load the daily sales that we have used throughout the course. The account name is my workspace test files and we have the container sales and then the folder inside daily sales. Next, we need to specify the parser version. And here, you must specify 2.0. If you don't specify, it will use a older version. And with the newer version, [[Microsoft]] has made changes so it has a boosting performance while processing CSV files. Next, you specify the format as CSV. Then, we need to specify that the first row
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=94)** is the second one. So in the first row, we have headers and then the data starts in the second. And finally, we assign these to a variable. As a role, this can be anything. Let's say, as sales. And if we run the query, it will give us the top 10 records. And here we go, we have historical date, total sales, and total amount. As we can see, we have C1, 2, 3, and 4. So, we don't have column mapping yet here, as well as we haven't told it what the types are, so we need to do that. First, let's go ahead and specify the column names as well as their types. We can do that using the with property, just after the open role set function closes, we need to add the with function. And in here, we specify the values as well as the type. So, store code is going to be a list of characters and it's going to be on position one on our CSV file. Date is going to be date on position two, total sales and total amounts are going to be big integers, which are three and four, and we are saving these as sales. Let's go ahead and run this query again. And now, we have properties. We have store, date, total sales, and total amount, and it knows what type, the properties.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-and-discovering-data-using-serverless-pools?u=76281980&t=188)** So it knows it's a date. It knows it's a number or just a plain string. And now, we can use these properties for selecting. We can do sales.storecode, sales.date, and if you run this query, we are going to only get these two properties. As you can see, it's pretty straightforward to query data directly from storage, and we did not have to provision anything. We only run the query and we didn't care about the backend. We are going to look at how we are going to perform more advanced queries throughout this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft]] (1)
> **Env Vars:** csv (3), sql (2), url (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Using file metadata in queries](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=0)** - [Instructor] In this demo we are going to learn how to partition our files so we can query them easier by using the file name or the folder name as properties. In the exercise files you will find a folder named partitioned sales data. In here, if you see now the file names have dates. And if you open one file, you'll see that you don't have the date property inside the file. We are going to use a file name and convert it into the date. This way, when we query our data, the server that [[SQL]] pools knows whether to look inside the file or not. So, it's only looking at the file name without looking inside, which will make our queries faster. If you want to generate more data, just open the synapse data generator and start it using the MPM run generate. It will generate data with a structure as seen in the partition sales data folder. First thing we need to do is upload this data to our storage. Let's navigate to our storage account. And in here, we need to navigate to containers and we are going to create a new one to keep it simple. Let's name our container serverless data so we know we're going to use it for serverless purposes. Now let's navigate into our server, the data container, and we are going to go upload our files.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=98)** Just go ahead and select all the files you want to upload. If you have a slow internet connection, then just select a couple. It doesn't matter. Also, we are going to upload this data into a folder and we are going to name the folder daily sales. While the data is uploading, let's navigate to our Synapse Studio. So I am just going to paste in the query here, and we are going to go through it step by step. First, make sure to set the bulk property to your storage account and then to your container. So for me, in this case, it's my workspace task files. The container is serverless data. I'm just going to go back to make sure and just copy paste this. And the folder is going to be daily sales and everything inside daily sales. Parser 2.0 for my CSV and the first row is two. Now what's different is these two properties here. We have two built-in functions here. We have file path, which will give us the path of the file, as well as file name, which gives us the name of the file. Let's just run this query and see the results. And, as we can see, we have the file path and the file name. Also, we can query other data as well here. We can do select all and then file path and file name. And you have the properties here.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=197)** You have the code, total sales, total amount, but we don't have the date. Now, the way we are going to get the date is using the file path. Not the file name, but the file path. The file path accepts a parameter. Here, we can specify one, two or three. So on index, if we don't specify anything, then it gives us the full file path. If we do, then it gives us the matched parameter that we use here. Here, on our URL to the file, we say match anything inside the daily sales folder. So, this is a matched property. In this case, we have only one property, which is a file name. And it's going to give us the file name without the CSV part, so whatever it matches. Here on the first row, we have 2024-05-27. So it matches because it ends with CSV and anything before that is matched. Now let's go ahead and type one. This should give us the file name without the CSV part. And indeed we do. Here on file path, we see that we matched the first property. If we enter two, then this won't work because there is only one. Now, for example, if we wanted to match daily sales as well, we can remove daily sales and say wildcards. So, anything in the container, serverless data, anything in the folder,
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=289)** and then anything in the sub folders that starts with CSV. If you do that, then the file path one will return daily sales as that is the first match. And if we do two, then we'll get the date. This way, if you have a file that's under a folder inside the sub folder inside another sub folder, then you could match the file and convert these parameters into actual data. For example, you might have a folder which has the year. Inside it, you might have a folder that has the month and inside, all the files which have the day. Then, you could match all three of them and then construct a date from this. And now that we have the file path, we can convert it to a date. We don't need the file name. We can do cast, the property, which is the second, as date. And then here as date. And now we should have the date property. So, we did not have to have it inside the file. We have it as a file name. And the best thing about this is that we can filter on this. We can do where, rows dot filepath two, but first we need to cast it.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=383)** So cast as date, and then we can specify no operations. So let's say bigger than some date in the future, like 2099.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/using-file-metadata-in-queries?u=76281980&t=402)** And now it will give us only records if the file name matches. It does not have to go inside the file, but it can just see the file name. This is random generated data, so most likely we'll get since we have 2102 in the dates. If we change this to something bigger, let's make it 5,000. Now, most likely we should not get any data. Okay. We need to make sure that we select everything or we don't select anything. Let's go ahead and run it again. And we don't have any data. As you can see, using file meta data for partitioning data is a very powerful feature to make sure we don't open the files and query the data, but rather use a file name or the folder structure as properties. (electronic music) In this challenge, I would like you to create a new Synapse Analytics workspace. Once the workspace is created inside, create a new dedicated SQL pools which has three compute nodes. Once you are done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** csv (5), sql (2), mpm (1), url (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** navigate to (3), open the (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (2)
> **Versions:** 2.0 (1)

#### [Building a logical data warehouse, part 1](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=0)** - [Instructor] In this demo, we're going to look at how to create a logical data warehouse where we can create views so we can query our data easier. The first thing that we need to do is create our logical data warehouse. Here is all the query that we are going to execute. You'll find this query in the exercise files to make it easier but make sure to change some properties, like the shared access signature, and the file URL. I will mark all the properties that you need to change in the exercise files so you don't miss them. First, we need to create the database. And this is not going to be a real database but a logical one. And I'm going to name it SalesLogicalDataWarehouse. As we can see, we can't run a query because we have not selected a database. Let's go ahead and select master. And now let's run this query. And we have a database now. If we say use database, we can't see it but if we click refresh, and now we have it in the use database. SalesLogicalDataWarehouse. You can also see it by navigating to [[Databases]], and here we go. In here, you should see external tables, resources, views, schemas, security, et cetera. Just like any other database but with no actual tables backing it up. Let's navigate back to our script.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=95)** Next, we need to change the collation. We are going to do alter database, then our database name, collate, and then you need to specify this keyword. This will make it so it can deal with UTF-8 encoding as sometimes it has troubles when running the queries. Next, we need to create a master encryption key, just like we did when we used PolyBase. Now that we have the encryption key, we need to create the credentials so we can access the storage. For this demo, I'm going to use shared access signature, and to get the SAS token, you navigate to your storage, navigate to shared access signature, and create a new one. And make sure you check all the appropriate permissions that you need for this, as well as make sure to choose a proper end date as this will expire. Once you have the token, then copy it, and paste it here. Let's go ahead and run this script. And now we have the credentials to access the storage. What we need to do next is create a data source. We are going to use the command create external data source, name it SalesData, and for credential, we are going to use the credentials
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=188)** that we just created. And for location, we are just going to point to our storage account. We are going to place in the [[Representational State Transfer (REST)|rest]] when we create the data. This way, we have access to all the storage account, and all the containers inside it. We are also going to create a separate schema that will hold all our views for our logical data warehouse. And we can do that using create schema logical data warehouse authorization and then we specify the dbo schema. This way, we have separate schema for all our views. And now finally, we can create our view. We can do it just like in any [[SQL]] query, create view, and then the schema and the name of the view. I'm going to name is DailySalesView. Then we do as, and then here is a select statement. This is just like the other statements that we did before. This just tells it where to get the data. So we are going to do select all, which will give us the store name, TotalSales and TotalAmount but not the date. Then we are going to do cast rows.filepath, and we are going to get the first matching property as we have only one wildcard here. In our previous example, we have two wildcards, so we need to choose two to get the file name. In this example, we have one.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=283)** So we get the date on the first one. And this gives us a date, TotalAmount, TotalSales and a StoreCode. And here in the with, you specify those properties. And now let's go ahead and create our view. And finally, let's go ahead and use our view now since we created it. As you can see, we don't have to do select, cast and all this other stuff because we can just do select top 10, let's say, all from, and that's all we have to do now. And we have data. We could filter on the date, TotalAmount, TotalSales, StoreCode, et cetera. And this is not just inside this query now. Let's go ahead and copy this, publish the changes. And now let's navigate to our data. Here in the views, we can see we have the view here. New script. Select top 100 rows. Make sure that the database is SalesDataWarehouse as if you select master, and this won't work. But now if we select SalesDataWarehouse, and we can run the query just like we were querying a table in our data warehouse.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-1?u=76281980&t=381)** We are going to continue this in the second part where we are going to also create a view for our stores and then join the data between the two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1)
> **CLI Commands:** make (6), find (1)
> **Analogies:** just like (5)
> **Env Vars:** url (1), utf (1), sas (1), sql (1)
> **UI Navigation:** navigate to (3)
> **Exercise Files:** exercise files (2)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)

#### [Building a logical data warehouse, part 2](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=0)** - [Instructor] In this demo, we are going to upload stores as well, and then create a view for that. So we can join sales and stores to make a proper query. You'll find your stores.csv in the Exercise Files. If you open it, you will have a lot of properties. You have the city, code, size, latitude, longitude, population, and state. The thing that we are most interested in is the code as this is the key that we are going to join with. Let's go ahead and upload this to our container. Inside our serverless data container we are going to upload this in a folder called stores. Let's go ahead and select the file and in advance, we need to specify stores or the folder.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=56)** And now we have stores.csv. So let's navigate back to our Synapse Studio. Here, I'm going to create a view that points to stores, just like we did in our previous clip. We don't have to do any of the other operations now. We have the data source, we have an encryption key, access to the data source, and all that information. All we have to do now is create the view. So, Create View As Select All From, in the Bulk we need to specify the container name, the folder name, and the file name. We have only one file, stores.csv, so we specify that. If you had more then you could change it to a wild card. The data source is going to be sales data, parser version 2.0 since we are doing CSV, format CSV, and the first row is going to be the second as we have headers. And then you specify the columns in the Width section. We have city, code, size, latitude, longitude, population, and state. If we look back in our logical data warehouse, the StoreCode is a list of characters up to 200. And for performance reasons, it's better than the two properties that we want to join with have the same type as well as the size. And let's go ahead and create our view. And now we can join data between the two views.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/building-a-logical-data-warehouse-part-2?u=76281980&t=152)** We can do Select Top 10 from StoresView as stores inner join daily sales and sales, and then we join on the code. And once we run this query, we get the results with all the data. We have store information as well as sales for that day. As you can see now, after you create your views, it's pretty straightforward to query the data. You don't need to worry about credentials. You don't need to worry about the structure, et cetera. All of this is predefined for you, so you can just go ahead and query the data.

> [!info]- Semantic Content
>
> **File Paths:** stores.csv (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** csv (2)
> **Versions:** version 2 (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Manage statistics](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=0)** - [Instructor] In this demo, we are going to talk about [[Statistics]]. Statistics are what both serverless and dedicated [[SQL]] pools use to optimize their queries. We are going to talk about statistics for dedicated SQL pools later on. But for serverless pools, we are going to learn how we can create statistics on a column. By default, the engine will automatically create statistics, but not for CSV files, at least not yet, only for Apache Parquet files. So for our keys, we need to create them ourselves. The way we create statistics is by running the stored procedure create_openrowset_statistics. And as a parameter, it needs to take in the statement, which is the exact statement that is going to be executed against our data. This statement can be inside the view, which is fine. We don't have to specify the view here, but we need to specify the openrowset query. So we do sys.sp_create_openrowset_statistics, and then we specify the query. Now we specify the query as a string so we need to make some tweaks. We need to change it from a single quote to double quotes for the BULK property, DATA_SOURCE, parser_version, and format. And now if we execute this, then it seems that we get an error. That's because I already run it, so we can't run the same statement twice.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/manage-statistics?u=76281980&t=94)** In order to do that, first, we need to drop it. To drop the statistics, we use a drop_openrowset_statistic, and we provide the query. Let's go ahead and run this query. And now we can run the query again here. It might take a while to update all the statistics as it had to look at all the data. We also have the option to specify sampling data. So we could say only sample 1,000 records. But that is not yet supported with CSV files. You should create statistics on the columns that you do filtering or joining. In this case, we join on the StoreCode, so it's a good idea to create a statistic on the StoreCode so it knows where to find the files. There is a functionality for updating a statistic here. The only way we could do it is just like we did before: first, we have to drop it, and then we have to recreate it. Currently, that's the only way we can update statistics. It's a very good practice to query statistics for your most-used columns in JOINs and WHERE statements. That will improve the performance and actually you'll spend less money as it will read as less data as it can, resulting in fewer charges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (11), [[SQL]] (2)
> **Env Vars:** sql (2), csv (2), bulk (1), data_source (1), where (1)
> **Code Identifiers:** create_openrowset_statistics (1), sp_create_openrowset_statistics (1), parser_version (1), drop_openrowset_statistic (1)
> **CLI Commands:** apache (1), make (1), find (1)
> **SQL:** where (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)

#### [Cost management](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=0)** - [Instructor] Since serverless [[SQL]] pools do not need any provisioning, they'll automatically provision all the necessary resources in order to query the data. But what if we have a lot of data, and by mistake we run a query and we let it run all night? That will result in a lot of charges for us. And mistakes can easily be made by letting a query run in the background and not noticing. A good way to manage the cost is by setting limits. To set limits, first, we need to navigate to the Manage tab in our Synapse Studio and we need to navigate to SQL Pools. Here, we have two, we have the built-in and a sales data warehouse dedicated SQL pool. If the sales data warehouse dedicated pool's status is online, it might be a good idea to pause it. There should be a pause button here where the resume is. If you pause it then you can resume it at any time later, so no charges incur. But for the demo, we are going to manage our built-in serverless SQL pool, and to manage cost, we use a cost control button here. And here have a Cost Control UI. First, we see the data processed property. Data processed is the amount of data that the system stores temporarily while a query is running, and currently we have zero as we don't have any queries running. Let's go ahead and run a query even though it'll finish quite fast.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=94)** Let's navigate here and let's query all the daily sales.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/cost-management?u=76281980&t=108)** And, as we can see now, we have 10 megabytes. Besides giving us the amount of data that is processed, we can also set a daily limit, weekly limit, or monthly limit, and it's a very good idea to set any of those. If you want to set a daily limit, just click Enable and enter the amount of data that you'll want to allow to be processed at maximum, which is in terabytes. So, we are going to allow one terabytes daily and for the weekly limit, now, we need to specify something more. Now, if we want to allow one terabyte daily, then that means it will be seven terabyte weekly, but we want to allow four terabytes weekly, the monthly total to 15. This way, if somebody exceeds daily, then they will be stopped. If they exceed the weekly limit they will be stopped and then the monthly limit. All you have to do is click Apply. And now, for some reason, if something goes wrong, for example, somebody runs a query against a very, very large data set, or there's a bug in the query, then it won't exceed the limit and the query will be terminated. This way, you can protect yourself from getting a very big cloud invoice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** sql (4)
> **UI Navigation:** navigate to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Query partitioned data](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/challenge-query-partitioned-data?u=76281980&t=5)** - [Instructor] In this demo, I would like you to query partition data. Given the data in the following format; you have a folder which has the year, then inside these, you have folders which have the month, and inside each folder, you have files which contains the same structure of sales data that we have seen up until now, and the file is the day, so you could have year 2021, month 01, and then, days 01, or day 31, month 12, et cetera. You'll find all this data in the exercise files. You are tasked to load this data in [[Microsoft Azure|Azure]] Blob storage and extract the year, month and day as columns using the built-in serverless pool and the file-pack function. Once you're done, join me in the next clip to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Query partitioned data](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=0)** - [Instructor] Before we start to solve the challenge, first, let's go ahead and take a look at the files. You'll find the data in the exercise files. And they will be inside a folder named Data. In here, you'll have the years, so for example, 2019. Then these are the months, so one, two, three and 12. We don't have data for all the months as that will be a lot of data, and then inside, we'll have some data. This is going to be the day, so day one, two, three and up to seven. Now, what we want to do is parse the year, then parse the month, and then parse the date. So you need to get all these three properties into columns in our [[SQL]] statement. Since the data is in multiple subfolders and folders, we cannot upload using the web portal. And for uploading the data, I'm going to use a [[Microsoft Azure]] Storage Explorer. It's a great app that lets you manage storage. You can add files, delete files, and upload files using a folder structure as well. First, we need to connect to the storage, so let's go ahead and navigate to our storage account. In here, we need to navigate to shared access signature. Also, make sure you check everything here. And then create one. For this purpose, we need a connection string,
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=92)** so let's go ahead and copy it. And now in here, we are going to click the connect. And for the type, we are going to use connection string. Just paste in the connection string in the connection string property, and it will automatically fill in the name. And let's go ahead and connect. Now let's go ahead and expand the blob containers. And we want to upload the data in the serverlessdata container but you can upload it anywhere you wish. In here, you already have two folders, so we are going to create a new one. For simplicity's sake, let's name it challenge. And now we can just drag and drop the files, and they will be uploaded for us, as well as they'll retain the file structure. So it will do everything automatically for us as it will take forever for us to create a folder, then upload a file, then create another folder using the web portal. And it's almost done. Let's navigate to our storage to verify it. There are containers, you placed it in serverlessdata. And we have a folder here named challenge. And the data is here. Now let's navigate to our Synapse Studio. For reading the files, I use the OPENROWSET functionality
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/solution-query-partitioned-data?u=76281980&t=188)** that we have used earlier. In the bulk property, I specify my account and then the container name. Then the folder name, and then I matched anything, so first, it will match any folder. So it's going to be 2019, 2020, et cetera. Then it will match any month inside that folder, and then any file inside the month. So if it's day five, then it's going to be 05.csv and we are going to get the 05. And here in the select, I cast the filepath1, which is going to be the year to integer as year, then two as month, and three as month as well, so I need to change this and make it day. And finally, I tested the query, and I got the results I wanted. I had the store code, total sales, total amount, year, month and day. As you can see now, we have all these properties and then we can filter data using this or query data or convert this into a date property as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Microsoft Azure]] (1)
> **UI Navigation:** navigate to (4), drag and drop (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** sql (1), openrowset (1)
> **File Paths:** 05.csv (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)


### 5. Querying and Best Practices in Dedicated SQL Pools

[↑ Back to Table of Contents](#table-of-contents)

#### [Querying, labeling, and tracking data warehouse performance](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=0)** - [Instructor] After the data warehouse has been deployed and is being used now, it's time to monitor the queries. It's very important to monitor the queries because developers of reports or other services might make mistakes and make queries that run very slowly or consume a lot of data. To monitor the queries, we can do that in the Monitoring tab. Here we can either navigate to an [[SQL]] pool, for example, sales data warehouse, and we are going to see a list of running requests, queued requests, and failed requests, as well as the data warehouse unit limit. When we created it, we set it to 100. If you see a lot of requests in the queued requests, that means that our data warehouse does not have enough processing powers. A lot of queries are being made, but they are being put in the queue so it can be processed later when compute power is available. In this case, you might need to increase the limit of your data warehouse unit. To view the running requests, you can navigate to SQL requests, and in here you'll see a list of all requests. You can change the pool. You can use the built-in one or the dedicated one, for our demo, we are going to use a dedicated one, but the idea is the same behind the two, as well as add filters. Now let's go ahead and run a query. Let's navigate to our Development tab, and let's query the data from the DailySales.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=98)** Now that the query is running, let's navigate to our Monitoring tab, and we should see a request that is running. And indeed, we do. The status is running, the submitter is me here, and it's been running for 11 seconds. If we refresh, then it changes. If you want to view the actual content of the request, so the SQL query, then you can click on More, and here is the query. Using this view is an easy way for us to monitor our data warehouse, but in most cases you'll want to add your own logic or you want to create your own dashboard inside your own application. And we can also run SQL queries that give us this information. Let's navigate back to our script, and we could use this to see some view for getting this information. The schema is system, and the name of the view is as following: dm pw execute requests. If we query this information, but, first, let's cancel the current query, then we get similar information: request id, session id, submit time, start time, end time, total time it took to complete, et cetera. Using this view, you can get the information for our data warehouse and display it in a dashboard
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=191)** for internal use within your organization for monitoring. Now, when someone looks at this information, they're going to see the SQL query. That is currently the only way they can see what the query does. For our purpose here, we have a small query select from DailySales. But imagine in [[Dashboards]] and other reports, you might have very complicated queries spanning multiple pages, hundreds of lines of code maybe. To provide additional context for a query, we can use a label. Queries support the label that we can define here when we run the query. We can do Option and then LABEL and then equals something. Let's say ListDailySales. In a real-world scenario, you might use query codes. Then you store these query codes in a database table from which you can get the details. Now when you run the query, you don't have to care about what the SQL is. You only need to know about the label. And if the query is problematic, then we can ask someone who is responsible for fixing this query. Okay, let's go ahead and cancel since we don't have to wait for this to finish. And now let's see the request. In here, we should find a label. We have a lot of data so it's becoming harder to find.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=287)** Let's go ahead and order by start time.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=296)** And let's only get the top 10 values.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=308)** And in here, we can see the ListDailySales query. You might wonder what these other queries are. When we execute the view for loading request details, that request as well is logged in here, and that's why we have a lot of them. And as we can see now, if this query has any problems, for example, it times out or it has another error, then we can easily say to somebody who's responsible, who's responsible for the query with the label ListDailySales. As well as we can filter for the ListDailySales query. If we know the query label, then we can filter for it. And now we should only get one request since we only made one. Let's go ahead and make a couple more.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/querying-labeling-and-tracking-data-warehouse-performance?u=76281980&t=366)** And if we run the query again, we should have more. And here we go. We have all the queries with the label ListDailySales. It should provide all your queries with the label. This way, you can easily identify them being that for monitoring purposes or just to find them in your own application when you want to troubleshoot them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Dashboards]] (1)
> **Env Vars:** sql (6), label (1)
> **CLI Commands:** make (3), find (3)
> **UI Navigation:** navigate to (4), click on (1)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** means that (1), is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Transactions in dedicated SQL pool](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=0)** - [Instructor] As you might expect in [[SQL]] [[Databases]], dedicated SQL pools also support transactions. However, since the data warehouse is maintained at scale to ensure high-performance, some features are limited when compared to an [[Microsoft SQL Server|SQL server]]. Dedicated pools implement ACID transactions. The default level is set to READ UNCOMMITTED. With this level, transactions will work and anything we changed will roll back. But these will also ensure the consistency of the queries while the transaction is going on, which means we can have dirty reads, non-repeatable reads, and phantom records. Currently, we can only change the transaction level to READ COMMITTED SNAPSHOT ISOLATION. Once we enable READ COMMITTED SNAPSHOT ISOLATION, all transactions in the data warehouse will be executed under this level. The idea behind READ COMMITTED SNAPSHOT ISOLATION is as following. Instead of locking a record during the reading phase with a shared log, the SQL server will transparently return us the old committed record version from store. So, it's like having a temporary table while the transaction is running. This way, you're not going to read the data that the transaction changed, but all data before the transaction started. Another important thing that we have to consider when doing transaction is transaction size. A single data modification transaction in dedicated SQL pools is limited in size, and this limit is applied to each distribution separately.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=97)** Since dedicated SQL pools have 60 distributions, this means that we can have a maximum of 60 compute nodes. And the transaction size is applied on the compute node. So the total amount of transaction size can be calculated by multiplying it with a number of distributions. For example, for a data warehouse you need 100, the transaction size is one gigabyte, the number of distributions is 60, so the total transaction size is 60 gigabytes, which means that the transaction size for this performance level can be at a maximum of 60 gigabytes. If it exceeds that, then our transaction will fail. The transaction size increases dramatically with the increase of the data warehouse unit. The current maximum data warehouse unit is data warehouse unit 30,000 and has 225 gigabyte transaction size per distribution. So this distribution can have 225 gigabytes. If we multiply this by 60, then we get 13,500 gigabytes in total, which gives us a lot of room to work with. Although the transaction size is high, that doesn't mean we can use all of it, for example, if the data is not distributed evenly between the distributions. This will result in distributions with more data to have bigger transaction size, and if the transaction size in one of these distribution exceeds the limit, then the entire transaction will fail. Here, for example, distribution 44
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/transactions-in-dedicated-sql-pool?u=76281980&t=195)** has a much bigger chance of reaching the limit than the [[Representational State Transfer (REST)|rest]] of the others. Because it has a lot of data, depending how the data is distributed, the transaction size can get very high for this one. And if it exceeds the limit, then the entire transaction fails. If you plan to make use of transactions in your data warehouse, make sure to keep in mind the transaction size limit and the distribution of data, so your transaction do not fail due to them exceeding the limit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft SQL Server|Sql server]] (2), [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (6), read (4), committed (3), snapshot (3), isolation (3)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (2), node (1)
> **Definitions:** means that (2)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Optimizing queries with materialized views](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=0)** - [Instructor] In most cases, for complicated queries, you'll need to create views. This way, you can encapsulate the logic inside the view for later use. To improve query performance, dedicated [[SQL]] pools support materialized views. A materialized view pre-computes, stores, and maintains its data in a dedicated SQL pools just like a table. When we query the view, there won't be any computation needs. It will just give us the data just like we were querying a table. This way, queries that use all of the data, or just a subset of the data inside the materialized view will be very fast. I have to go ahead and create a view with a query from our data warehouse. This is a normal view. Create view AverageCheckoutView. And then as we select StoreCode, Date, SelfCheckout, CashOnHand, StoreSize, and then the maximum and the minimum duration. We are going to get this data from our CheckoutEvents table. And then we're going to join it with stores. Here on my data warehouse, I have a table named stores, which has store information. You can upload this information from the exercise files that we had before. We had the file called stores.[[JSON]] or a file stores.csv. I will include both these files in the exercise files. And then they are grouping by Date, StoreCode, SelfCheckout, et cetera. And now let's go ahead and run this query.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=96)** This is a normal view. It will query the data directly from the data warehouse. And now, let's select everything from this view.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=112)** And let's see how long it takes. It should take about 30 seconds, give or take. And it was about 33 seconds. Now, we're going to create the same view, but we're going to use a materialized keyword. So I'll create materialized view. And then we're going to name it, AverageCheckoutMaterializedView. We also need to specify distribution. And we're going to use the for_append keyword. As is required when using the max and mean aggregations. The [[Representational State Transfer (REST)|rest]] is going to be the same. Now this view might take longer to create as it's getting the data as well. And now the materialized view has been created, let's go ahead and query. It should run at least twice the speed. As you can see, the query run faster now, as it's not recalculating all these aggregations anymore. Since we created our materialized view, now our normal view has changed as well. The query optimizer behind the scenes sees that you have a materialized view, and you are requesting almost the same data or at least a subset of the data that are in the materialized view. So it's smart enough to use the data inside the materialized view now. And it will not query and aggregate all the data again. If we run this query again now, which is a normal view, this now should run faster.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/optimizing-queries-with-materialized-views?u=76281980&t=205)** Not 33 seconds. As you can see, it ran in half the time now because it's not doing the aggregation, but behind the scenes is using the materialized view. And if we run a normal query that has event date and this aggregation as well, it knows that it can get this data from a materialized view. So it does that. You can use materialized views for a lot of cases. But just to be aware that, just because it increase performance, you have to pay extra cash because materialized views create a virtual table. You'll have to pay for the storage as well. So that's the trade-off between having faster queries in a materialized view and paying more for storage. And depending how much data you have in a [[Big Data]] scenario, these views can get huge. So the storage you are paying for increases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[JSON]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Big Data]] (1)
> **Definitions:** is a  (3)
> **File Paths:** stores.json (1), stores.csv (1)
> **Env Vars:** sql (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (2)
> **Code Identifiers:** for_append (1)
> **Warnings:** be aware (1)

#### [Connecting using external clients](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=0)** - [Instructor} Up until now when connecting to our Data Warehouse Serverless or dedicated, we have used Synapse Studio, which is fine, but in a lot of cases, people using the Data Warehouse will not have access to Synapse Studio. In this clip, we are going to learn how to connect to external clients. Let's go ahead and navigate the 'Manage' tab. First, let's go ahead and connect to our dedicated [[SQL]] pool. If you click on a name and you get to Connection string, Here we have four dot net SQL authentication. We also have [[Java Database Connectivity (JDBC)|JDBC]] ODBC, [[PHP]], etc. To demonstrate I'm going to connect using SQL Management Studio. Now that I have the server URL, let's go ahead and navigate to SQL Management Studio. Let's go ahead and click 'Connect'. And here from a Server name, we need to provide a Server name. Authentication is going to be '[[Microsoft SQL Server|SQL Server]] Authentication'. Username is going to be 'SQL Admin user' By default, this is the user. If you changed it during the creation of your Workspace, then you need to enter that one and alternate to provide the password that you entered when you created the Workspace. As you can see, now, I can see my [[Databases]]. Since this is a dedicated SQL pool, I only get to see this one, then the tables
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/connecting-using-external-clients?u=76281980&t=93)** and let's go ahead and query stores. And here we quickly get a list of stores and we can run queries just like we did from Synapse Studio. Using Synapse Studio is a little easier as it's interconnected with other services and makes it easier to discover. Now let's go ahead and try our Serverless pool. Let's close our dedicated pool and open the built in one. And just like the dedicated one, this also has a Connection string. The difference is it has the On-demand String abandoned. Let's open the Object Explorer and connect to this one as well. That's under the Server name and our Username and password. And now in the databases, we should have Sail Data Warehouse, which is the logical Data Warehouse that we created. In here we should have views And you have Stores view. Let's go ahead and create. And just like that using SQL Management Studio, we queried data directly from our [[Microsoft Azure|Azure]] Blob storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Databases]] (2), [[Java Database Connectivity (JDBC)|Jdbc]] (1), [[PHP]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (8), jdbc (1), odbc (1), php (1), url (1)
> **UI Navigation:** open the (2), click on (1), navigate to (1)
> **Analogies:** just like (3)
> **Definitions:** is a  (2)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor (1)

#### [Creating and updating statistics](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=0)** - [Instructor] Once we have loaded data into our data warehouse, it's very important that we collect [[Statistics]], So in the query optimizer behind the dedicated pool can optimize our queries. The more it knows about our data, the better queries it can make. Dedicated [[SQL]] pulls can be configured to automatically detect and create statistics. Statistics that are created in our columns will heavily depend on how the query plan is generated. To enable it to make statistics, we can do the following. We need to do ALTER DATABASE, then set AUTO_CREATE_STATISTICS on or off if you prefer to turn it off. And now that we turned it on, whenever data changes, it will collect statistics. So it can make better queries. This is also recommended by [[Microsoft Azure|Azure]]. The only catch is that the automatic creation is a synchronous process. So you might get a slight degraded query performance for columns that are missing statistics since it has to create them. But this will be only on the initial load of the data. Besides creating statistics automatically, we can also create them ourselves. We can do the following. Create Statistics and then provide a name. Let's name this statistic StoreCode statistic. Then we need to specify where, which is the table DailySales and then the StoreCode. And then this is optional,
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=93)** but we specify the sample of data. If we specify 100%, it's going to create a statistic on 100% of the data, which is too much. In most cases, 20% will suffice, but you want to change it, then you can do the With sample and the amount of percentage. And we can quickly create the statistic. If you change the data a lot after creating a statistic, then you also might want to update it. The update command is easy. Update statistics, table name, and then statistic name. This will only update this statistic. In this case, it's going to be StoreCode statistic. If you want to update statistics on all columns inside the table, then you just specify the table name. Currently, you only have one, but if you had more inside this table for different columns, then it will update all of them. And if you want to drop a statistic, then you specify a table name and the statistic name. So Drop statistics, DailySales StoreCode statistic.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/creating-and-updating-statistics?u=76281980&t=171)** Here, I've prepared the query that gives us a table name, a column name, a statistic name, and then when it was last updated. This gets the information from sys.objects and then join stats, then columns, types, table, schema, et cetera. So it goes through all lot of tables to get this information. I'm going to include this script in the exercise files, so you can run it against your data warehouse. If you run this, then we can see the statistics and when they were last updated. I already created one before. I have StoreCode stats and StoreCode statistics. And here we can see the last update. This way, you can get an understanding of when it was last updated, and then go ahead and do an update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (13), [[SQL]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (1), alter (1), database (1), auto_create_statistics (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing data distribution](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=0)** - [Instructor] In this demo, we are going to talk about distribution and how to verify that the data is distributed properly. To view how the data is distributed for a table, since each table is distributed throughout 60 distributions, we can use the following command: SHOWSPACEUSED, and then we specify the table name. If we run it, then we should get data about our distributions. Let's go ahead and explore it. We have ROWS, so how many rows are in each distribution. And it looks like our distribution is pretty even. We have RESERVED_SPACE, DATA_SPACE, INDEX_SPACE, UNUSED_SPACE, and the DISTRIBUTION_ID. So we have one, and then we should have up to 60. What we are interested in is ROWS as that's what we are going to do to JOINs and WHERE clauses, et cetera. So the number of rows should be very close to each other in order for optimal query performance. Now, this is not very easy to view, so let's go ahead and move to the Chart view. In here, let's change the chart type to something that makes sense. Column should make sense, okay? Then category should be the DISTRIBUTION_ID, so one through 60, yes.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=95)** And then in the legend, only rows as those will tell us how the data is distributed. And as we can see, it's pretty even distributed, almost a straight line. That's because the data was auto-generated, and it was meant to generate even data based on the stored code. Let's try a different table. Let's do DailySales. So it seems that we need to change the chart type again.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=133)** And in this one, it seems that we have more data on some than others, especially distribution number 13 which has a lot of data compared to others. So here the data is not distributed evenly. And if you think about transactions and the sizes, the limit for transaction will exceed here before any other transaction, and then the entire transaction will fail. You cannot change the distribution on an existing table, but you can create another table on top of it and then specify a different distribution. You can do create table, then table name, let's say DSales. Here, specify the with operation and then DISTRIBUTION. If we specify HASH, then we have to choose a column, or we can go ROUND_ROBIN. Then as select all from DailySales. This will create a new table named DSales, and then this table will have ROUND_ROBIN distribution so it will get all the data from DailySales and put them into DSales. If we run this query, and now let's see the space used for DSales.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=221)** And as you can see, the data is pretty evenly distributed now since we use ROUND_ROBIN. You don't have to use ROUND_ROBIN, but if, for some reason, you need to change distribution, this is the way you can do it. You need to use a command create table as, as this has high performance with minimal logging. In the Exercise Files, you'll find the script for this as well as a view that is documented by [[Microsoft]]. This is a view that gives us information about the distribution and the tables for our entire data warehouse. So, first, make sure to run this view. I've already created the view so I am not creating it again. And then you can run queries like this. For example, this query will give you all the tables that have a distribution skew more than 10%. So we are getting the name from the TableSizes, and then in the having, you're doing the operation to determine how much the skew is. If we run this query, and then here we can see all the tables with all the nodes that have a 10% distribution skew. This might be very helpful information for you to understand your data warehouse after you create it and load data into it. We are not going to go into the details of this view, as you can find it in the link here documented by Microsoft, and you'll find this file in the Exercise Files.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/analyzing-data-distribution?u=76281980&t=318)** If you want to change the skew percentage, then you can do it here. From 10, you can make it 20.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2)
> **Env Vars:** round_robin (4), rows (2), distribution_id (2), showspaceused (1), reserved_space (1)
> **CLI Commands:** make (3), find (3)
> **Exercise Files:** exercise files (2)
> **SQL:** where (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Synapse Analytics](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-synapse-for-developers-14246261/next-steps-with-synapse-analytics?u=76281980&t=0)** - [Instructor] Thank you for going on the journey with me to learn about [[Microsoft Azure|Azure]] synapse analytics. Hopefully you now feel confident to start building your first data warehouse on the cloud. If you'd like to build upon the skills you learned here, I would suggest using public datasets and load them into your data warehouse and storage. It will help you better comprehend the processing power of the data warehouse and how to properly distribute data between compute nodes as well as improve your skills on how to query data serverlessly and build a logical data warehouse. Also, if you'd like more about synapse analytics and dedicated [[SQL]] pools, look for my new course "Synapse Analytics Scaling and Configuration," which will be released shortly, where you'll learn how to scale and configure your dedicated SQL pools. Also I'd love if you'd connect with me. You can find me on [[LinkedIn]]. Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft Azure|Azure]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Nertil Poci]]

## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Developing Chatbots with Azure]] | **6 of 7** | [[Introduction to Terraform on Azure (2022)]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)