---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: power-bi-dataflows-essential-training
url: "https://www.linkedin.com/learning/power-bi-dataflows-essential-training"
duration_minutes: 88
duration: 1h 28m
level: Intermediate
updated: 3/12/2020
learners: 22708
skills:
  - Microsoft Power BI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHCRS5q7KoX8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583864338105?e=2147483647&amp;v=beta&amp;t=tNhypYJ1555_e-_qErpNkZepTJu6RE6RnDVRS8EUO2g"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Microsoft Power BI]]'
prev_courses:
  - '[[Power BI Data Methods]]'
next_courses:
  - '[[Power BI Top Skills]]'
path_nav: '[{"path":"Master Microsoft Power BI","position":3,"total":6,"prev":"Power BI Data Methods","next":"Power BI Top Skills"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-bi
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Power%20BI%20Dataflows%20Essential%20Training.md)

![Power BI Dataflows Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQHCRS5q7KoX8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583864338105?e=2147483647&amp;v=beta&amp;t=tNhypYJ1555_e-_qErpNkZepTJu6RE6RnDVRS8EUO2g)

# Power BI Dataflows Essential Training

> Power BI offers a wide variety of capabilities, ranging from custom data connectors to custom dashboard visuals. In this course, instructor Helen Wall shines a spotlight on one of its most powerful and practical features: dataflows. Using dataflows in Power BI, you can easily ingest, transform, integrate, and enrich data from a wide variety of sources. Using practical examples, Helen explains how 

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-dataflows-essential-training) | 1h 28m | Intermediate | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Optimizing your data with Power BI dataflows](#optimizing-your-data-with-power-bi-dataflows)
  - [What you should know](#what-you-should-know)
- [**1. Working with Data in Power BI**](#1-working-with-data-in-power-bi) (4 videos)
  - [Navigating the Power BI ecosystem](#navigating-the-power-bi-ecosystem)
  - [Comparing Power BI versions](#comparing-power-bi-versions)
  - [Utilizing a dataflow](#utilizing-a-dataflow)
  - [Utilizing Azure Data Lake](#utilizing-azure-data-lake)
- [**2. Extracting Data**](#2-extracting-data) (6 videos)
  - [Setting up gateways](#setting-up-gateways)
  - [Organizing data sources](#organizing-data-sources)
  - [Connecting to databases](#connecting-to-databases)
  - [Setting up web connections](#setting-up-web-connections)
  - [Querying API data](#querying-api-data)
  - [Connecting to Excel](#connecting-to-excel)
- [**3. Transforming Data Connections**](#3-transforming-data-connections) (4 videos)
  - [Updating dataflows](#updating-dataflows)
  - [Utilizing Power Query Online applied steps](#utilizing-power-query-online-applied-steps)
  - [Translating from Power BI Desktop](#translating-from-power-bi-desktop)
  - [Setting up a Common Data Model](#setting-up-a-common-data-model)
- [**4. Loading and Connecting to Dataflows**](#4-loading-and-connecting-to-dataflows) (5 videos)
  - [Connecting to dataflows](#connecting-to-dataflows)
  - [Comparing dataflows to data sets](#comparing-dataflows-to-data-sets)
  - [Sharing dataflows](#sharing-dataflows)
  - [Scheduling data refreshing](#scheduling-data-refreshing)
  - [Representing dataflow structures with JSON files](#representing-dataflow-structures-with-json-files)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Power BI dataflows](#next-steps-with-power-bi-dataflows)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimizing your data with Power BI dataflows](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/optimizing-your-data-with-power-bi-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/optimizing-your-data-with-power-bi-dataflows?u=76281980&t=0)** - [Helen] [[Microsoft Power BI|Power BI]] lets us keep up with the increasing demand to understand data trends, and the growing volume of data that drives it. You can transform the data connection into an efficient, useful table in [[Microsoft Power Query|Power Query]] Online for other users to connect to. You can create [[Dashboards]] with different views at the same data flow. You can automatically refresh data in the data flow to the latest numbers. Hi, I'm Helen Wall, and I'm a data analytics enthusiast who enjoys sharing the incredible capabilities that we can tap into with Power BI. Come join me in my [[LinkedIn]] Learning course on Power BI data flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3), [[Microsoft Power Query|Power query]] (1), [[Dashboards]] (1), [[LinkedIn]] (1)
> **Speakers:** - [helen] (1)

#### [What you should know](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] You'll need at least a beginning knowledge of [[Microsoft Power BI|Power BI]]. In the library you can check out the Essential Training course to get a fast start on using the application. Most of the examples are in the cloud service, so it's also beneficial to at least understand why we want to leverage the standardations and [[Scalability]] it offers us. You'll find the course more beneficial if you know the premise of using ETL frameworks for different sources of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1), [[Scalability]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** etl (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Data in Power BI

[↑ Back to Table of Contents](#table-of-contents)

#### [Navigating the Power BI ecosystem](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/navigating-the-power-bi-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/navigating-the-power-bi-ecosystem?u=76281980&t=0)** - [Instructor] [[Microsoft Power BI|Power BI]] allows you to create scalable, visually-interactive [[Dashboards]], or what [[Microsoft]] officially calls reports, that you can share with a large group of end users. Power BI gives them the capability to monitor, analyze and make decisions from multiple views of data without having to understand the business-intelligence technology on the back end. Applications that roll into Power BI include Microsoft's Access, [[Microsoft Power Query|Power Query]], [[PowerPivot]] and [[Microsoft Excel|Excel]]. Power BI also leverages rapidly-developing new technologies such as [[Cloud Computing]], advanced analytics and machine learning. Power BI automates processes like connecting to and refreshing data. When you create a dashboard, you want to not only think about the end users leveraging the front end and the dashboards, but also think about how to configure efficient data processes on the back end. When an organization starts building out their Power BI Cloud Service, they may have a dashboard and its corresponding data set. However, as the number of users and dashboards and their corresponding data sets in the Power Bi Cloud Service increase, efficiently managing these dashboards and data sets becomes increasingly more difficult. This is where dataflows come in. Our focus for this course is on creating
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/navigating-the-power-bi-ecosystem?u=76281980&t=94)** reusable data tables called Power BI Dataflows. Dataflows move much of the ETL framework into the shared cloud to reduce unnecessary duplicated data processes. They create a scalable and shareable process for working with your organization's data. ETL stands for extract, transform and load. It allows us to first connect to numerous types of data sources. We can then clean the data, create formulas and manipulate the data table shape. Finally, we load or share the dataflow to enable many other users to access the same data table. Because this is an essential course on Power BI Dataflows, we will not discuss much about the ETL Framework semantics. If you would like to learn more about the Power Query Editor capabilities in Power BI, please check out my [[Power BI Data Methods]] Course in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (11), [[Dashboards]] (4), [[Microsoft]] (2), [[Microsoft Power Query|Power query]] (2), [[PowerPivot]] (1)
> **Env Vars:** etl (3)
> **Definitions:** stands for (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Comparing Power BI versions](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-power-bi-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-power-bi-versions?u=76281980&t=0)** - [Instructor] [[Microsoft Power BI|Power BI]] comes in several different versions. Power BI Desktop is a free application you download to your own computer. I recommend creating your [[Dashboards]] in the Desktop version as it maximizes development capabilities. [[Microsoft]] pushes out updates to the Desktop version every month that include defect fixes, enhancements and new features. If you want to refresh your data, you will need to do it manually, as the Desktop version doesn't support scheduled data refreshing. To securely share your Desktop dashboards with many other users, you want to upload them to your organization's paid Power BI service, which can be an on-premises server or a cloud account. These platforms also allow us to schedule when we want to automatically refresh the data. Power BI, like many other technologies, is rapidly evolving, and future versions will undoubtedly include many improved capabilities and options to choose from. Microsoft also frequently updates these platforms, so your view may look different from what you see on my screen in this course. Power BI Report Server shares these dashboards by hosting them in an on-premises server. It allows access to a very large number of users without charging access on a per-user basis. This enables organizations to share their dashboards without drastically increasing their costs.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-power-bi-versions?u=76281980&t=97)** Administrators of this server can set up a schedule to automatically refresh the data analyzed in the dashboards. It's important to note the Power BI Report Server isn't compatible with the latest version of Power BI Desktop. You will need to download the version of Power BI Desktop that specifically works with the current server version, which you can find on the Microsoft website. To create Power BI dataflows, we're going to use the Power BI service. Power BI Pro is a Microsoft-hosted cloud account that charges access on a per-user basis as a subscription model. You can schedule to refresh your data several times a day. Similarly, Power BI Premium is an upgraded Microsoft-hosted cloud account that provides the Pro benefits plus several other upgrades. Unlike Power BI Pro, it's not a per-user subscription model. It gives an organization dedicated Power BI capacity. It also grants user access similar to the Power BI Report Server, which enables it to scale across many users. In the Premium account, you can also schedule data refreshing more frequently than the Pro accounts allow. The Premium cloud account also gives you more options for creating dataflows, such as building a new dataflow from a dataflow that already exists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (15), [[Dashboards]] (5), [[Microsoft]] (5)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing a dataflow](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-a-dataflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-a-dataflow?u=76281980&t=0)** - [Instructor] When you share a [[Microsoft Power BI|Power BI]] Desktop file through a cloud account, you can think of the file as a template containing two important components. The front-end component is the visually dynamic front-end dashboard. Behind these [[Dashboards]], you have the back-end component, or the data driving the front-end views, which reside in the dataset section of your workspace. Datasets can contain multiple data sources from a workbook connection that you set up an automatic refreshing schedule to update the data in the cloud. Other Power BI developers can subsequently connect to these datasets to develop their own dashboards in Power BI Desktop. If the dataset contains multiple data sources, they will connect to all these data tables. However, connecting to an existing dataset is a live connection type. This makes Power BI a front-end process only, which means you cannot change the dataset's established ETL framework, and you can only create visuals and limited calculations. On the screen, we see the ETL framework for the dataset. Let's say someone else in your organization wants to connect to similar data, except they want to add other fields to the ETL framework to better suit their own business needs. They would need to create a new ETL framework of their own,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-a-dataflow?u=76281980&t=94)** which replicates much of the work from the original dataset. Power BI dataflows can consolidate much of the ETL processes into a shared data table that multiple users can then create their own ETL processes from. You can think of them as [[Data Structures]] within your organization to optimize the [[Scalability]] and shareability to use your data. Those that connect to the dataflow don't have to create their own entirely new ETL process, or framework, to get the data they need to create a Power BI dashboard. A dataflow can reduce the potential for errors, because it eliminates ETL variances between users by referencing much of the same ETL framework. It also increases data accessibility, because it means someone unfamiliar with, say, [[SQL]] queries, can still connect to this data. To understand the benefits of dataflows, let's think of how [[Data Sharing]] works within an example organization. A large company has numerous departments, such as sales, finance, and operations. To get insight into the organization's performance in Power BI, they may each analyze sales data, but look at different segments of the data. They may each obtain their sales data through separate ETL processes, represented by the datasets you see.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-a-dataflow?u=76281980&t=190)** Let's say they also look at the global currency exchange rates, but some of them calculate daily rates to use, and others a monthly exchange rate. We also see these separate ETL processes represented as another group of datasets. What if they instead combined efficiencies by connecting to the same sales and exchange rate data, then scaled the data to meet their department needs? They consolidate the ETL process for the shared data into two dataflows for the sales data, and another for the currency exchange rate data. This in turn significantly shortens the ETL process for their own datasets. This illustrates why Power BI dataflows can play an important role in increasing an organization's data efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (8), [[Dashboards]] (2), [[Data Structures]] (1), [[Scalability]] (1), [[SQL]] (1)
> **Env Vars:** etl (13), sql (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing Azure Data Lake](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-azure-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-azure-data-lake?u=76281980&t=0)** - [Instructor] You don't have to be a large organization to utilize [[Cloud Computing]]. For example, if you store and access your personal documents or photos online rather than using your own computer, you are using cloud technology. Cloud computing platforms tend to be less expensive and more secure, reliable, and flexible than on-premises servers. Cloud computing resources allow you to scale your computer and its storage resources up or down almost instantly by only paying for the services you need. This gives you convenience and cost control. These cloud platforms are also rapidly evolving and you are always learning something new to keep up. You can store cloud data in a data lake, which is a single location file repository that can store vast amounts of raw data from different data sources in structured and unstructured formats. Unlike a hierarchical database that stores data in files or folders, a data lake stores data in a flat hierarchy. They allow organizations to increase storage capacity for very large data sets, but also simplify [[Data Management]] and security. [[Microsoft]] has its own cloud computing platform called [[Microsoft Azure|Azure]]. With Azure Data Lake, you can connect to other Azure applications for [[Data Ingestion]] and preparation as well as querying curated data.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-azure-data-lake?u=76281980&t=94)** You can also tap into AI through machine learning models. Some of these applications require leveraging, high levels of programming, [[Data Science]], or [[Data Engineering]] knowledge. [[Microsoft Power BI|Power BI]] on the other hand, doesn't necessarily require much coding knowledge to leverage its powerful capabilities. You can actually leverage Azure Data Lake to store your Power BI data flows. This isn't a course on Azure Architecture, so we're not going to get too much into that topic. Within the data lake, Azure stores data in folders in the structure of a common data model. Other Microsoft applications, including Power BI, can also store and ingest data in conformance with the common data model. It simplifies the process of sharing data by using a shared data language. The common data model consists of a set of standardized, extendable data schemas that you can customize across applications, deployments, and models. These predefined schemas include entities, attributes, semantic [[Metadata]], and relationships. It uses open source standard definitions alongside customized schema to promote a shared understanding of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Cloud Computing]] (4), [[Microsoft Power BI|Power bi]] (3), [[Microsoft]] (2), [[Data Management]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Extracting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up gateways](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-gateways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-gateways?u=76281980&t=0)** - [Instructor] As we start to setup data connections in our [[Microsoft Power BI|Power BI]] dataflows, take a moment to determine key information about these data sources such as where the source resides and any pertinent login credentials. Depending on the answers to these questions, we may need to setup gateways in the Power BI cloud. For example, we need to setup gateways for connecting to [[Microsoft SQL Server|SQL Server]] or an API query that requires login credentials. The good news is that if we create multiple queries to the same data source we can reuse the data connection. For those of you already familiar with using the Power BI service perhaps you've set up a gateway when sharing a dashboard in the cloud where it connects to a database. We start by installing the gateway directly in the Power BI service. Go to the top right menu in the black bar and in the settings select Manage gateways from the menu. Here we see a message telling us that in order to leverage the gateway we need to actually install it first. To install the gateway, we can navigate to the top black bar, this time select downloads, and we choose the data gateway option. This opens up a new webpage specifically to download the gateway. Select the download gateway button from the middle of the screen.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-gateways?u=76281980&t=95)** We now see a popup installer as the EXE at the bottom of the page. Click on it to run, select next. We see in this cloud icon that guides us through the process of installing the gateway that we're presented with a choice of options between the on-premises and the personal mode. We want to choose the [[Microsoft]] recommended gateway rather than the personal gateway which makes this gateway scalable across multiple users of the data flow. We can run this selection and we see this installs the gateway on our computer. We see that the process continues to guide us through the installation process. We provide a path for installing the gateway and accept the terms of use and conditions. And we select install. Confirm to make changes to the computer. Once we've confirmed these permissions and the admin access, we see that we can use an email address to associate with the gateway. Also notice that the gateway installer does a good job of guiding us through the process. On this confirmation screen we want to sign into the gateway with the Power BI email account.
>
> **[3:11](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-gateways?u=76281980&t=191)** We now want to create a gateway name. I'm going to call this Power BI Dataflows Testing. We also want to add it to our gateway cluster depending on if we already have a gateway installed or if someone else in your department or group has one installed. We also see there's a space to enter the recovery key. We also want to setup a recovery key for our gateway. After you create this key you want to store it in a safe place so that in case you need it again you have it on hand. I'm going to call this recovery key. Just going to give it a eight character name. And select, or leave this unchecked and I'm going to select Configure. Once the installation completes, we see a message indicating the gateway is ready to use, marked by the green check mark next to each application. Notice in dialog box it indicates that power apps and power BI have working gateways. We see that we need to create the [[Microsoft Azure|Azure]] gateway separately if this is something we need to do. We can then close the window to the on-premises gateway installation. Now when we navigate back to our Power BI service
>
> **[4:46](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-gateways?u=76281980&t=286)** and refresh the page we can now see the gateway details provided for the gateway we just installed. We're going to leave the description and the department information below blank. We do, however, want to check the boxes below this to apply to the gateway. We see a green checkmark at the top indicating that we are set to use the gateway. From here you can add the data connections to your dataflow with the data gateway for the different data sources. You can see the hyperlink, add data sources to use the gateway below, which is where you will add the individual data source details. We see on the administrators screen we can add other users through their email addresses to administer the gateway. So we've setup an example of a Power BI gateway that we're going to use for other connections to data sources later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (9), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Prerequisites:** setup (5), install (3), set up (1), configure (1)
> **UI Navigation:** go to (1), navigate to (1), select the (1), click on (1)
> **Env Vars:** sql (1), api (1), exe (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Best Practices:** recommended (1)

#### [Organizing data sources](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/organizing-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/organizing-data-sources?u=76281980&t=0)** - [Narrator] The term dataflow is a bit of a misnomer because it doesn't necessarily refer to a single ETL process for creating a data table. A dataflow is really a folder that can contain multiple queries within it, whether they are entities, common data models, models, or from other dataflows. You commission access to and refresh an entire dataflow at the same time. I created a workspace called PBI dataflows and [[Microsoft Power BI|Power BI]] that I want to use to create my dataflow set. On the home page, let's select this workspace to enter into it. We see that in this workspace, we do not have any dashboard set up and if we go into the dataflow section, we do not have any dataflow set up either. To add a new dataflow to this workspace, we go to the create menu at the top and select Dataflow. On the next page we see several options for creating a new query within this dataflow, whether it's by defining new entities, linking entities from other dataflows, importing a model, or attaching a common data model folder. Note that the option to link from other entities is a Power BI Premium specific capacity at the point when this course was filmed. Let's start by selecting Define New Entities and the Add New Entities option at the bottom.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/organizing-data-sources?u=76281980&t=97)** This takes us into the [[Microsoft Power Query|power query]] online functionality. Now we select the source of our data. Let's just create a small data table where we manually enter our data by looking for the blank table option which we find near the bottom. Now, in the screen we can enter our values in power query online manually. Let's create a single column in a table which I'm going to call Dataflow Types, and I'm going to enter entity, CDM, dataflow, and model
>
> **[2:24](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/organizing-data-sources?u=76281980&t=144)** and rename this table Dataflow Types.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/organizing-data-sources?u=76281980&t=153)** We select Next at the bottom of the screen. This takes us into the query editor window where we can see that there are further transformation functions available for this query. For now, let's just hit save and close at the bottom. In the next screen, it asks us to give a name to our dataflow. We already named the query entity within the dataflow. Now we want to name the entire dataflow. I'm going to call this Testing Tables and leave the description area blank because we don't need to fill it out, then hit the save. We now see our new data table in the dataflow entity list. If we expand the arrows next to the name, we see the [[Metadata]] for the fields within this connection and we just have a string for a single field. From here we can add more entities to this dataflow by selecting Add Entities from the top, for example. Now if we go back into our workspace and go to the dataflow section, we see our new dataflow called Testing Tables in the list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Microsoft Power Query|Power query]] (2), [[Metadata]] (1)
> **Env Vars:** etl (1), pbi (1), cdm (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Connecting to databases](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980&t=0)** - [Instructor] You can connect to many kinds of [[Databases]] in the [[Microsoft Power BI|Power BI]] cloud. The database you want to access will likely depend on the databases your own organization utilizes to store and query data. This is not a course on databases or [[Microsoft Azure|Azure]], but identifying them as database connection types in Power BI data flows, means that you can explore how to tap into their potential. To set up the database connection, you will typically need credentials like the server name, the database name, and any related login credentials to access them. It's also helpful to know what tables you want to query or bring in the data from, especially if you're working with a large database. [[Microsoft SQL Server|SQL server]] is an example of a well known relational database. It consists of tables within a database that we can query to create sets of useful data. An organization hosts a server like SQL server on premises instead of in the cloud. Conversely, [[Microsoft]]'s Azure allows you to connect to data sources like blobs, tables, [[SQL]] databases, and even to data analyzed through machine learning technologies. The databases work very much like the on premises servers much of the time, except the users access them through the cloud instead of the on-premises server. You can also connect to databases using predefined queries for related, multidimensional tables
>
> **[1:35](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980&t=95)** instead of querying using SQL. Many of you may work at organizations that heavily rely on database connections like this for [[Scalability]] as well as security across a very large user base. If you want to connect to these databases, you will not find this option available as a Power BI data flow connection. Instead, you connect to these databases at datasets, which you first set up in Power BI Desktop. Power BI datasets are live connection types that you can actually leverage a few options for these database connections. There are currently two ways to set up a SQL server analysis services connection in Power BI Desktop. You can set up a live connection to the model, which makes Power BI a front end process only by removing the ETL capabilities. You can also set it up using a [[DAX]] query on the database connection through the import connection type. This query returns results that we can continue to modify using the ETL capabilities. It's a bit like running a SQL query on a relational database. In the Power BI service, let's add a new entity to the existing data flow called testing tables we created for the manually entered data table. We click to enter into the data flow. We can now select add entities as the menu option at the top.
>
> **[3:11](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980&t=191)** We now see there are a plethora of database options if we select on the database menu, you can see many different kinds of databases, including that fourth SQL server. Notice that you did not see the option for SQL server analysis services. You can see it in the Azure options menu, but there are several database connection options as well. Let's select the SQL server database connection. You can see where you entered the server name and the database name in the connection settings. You'll also need to add your login credentials to access the database. When you select the gateway to use, you'll save the login credentials for this database to the gateway. It will save the server and database name as well as any pertinent login credentials, such as the username and password. You can also setup the gateway connection to the database before you even set up a new query within the data flow. Let's navigate to the managed gateways option in the settings menu. We first cancel out of the query that we set up. Now go into manage gateways to set up the gateway connections before we set up the connection to the data source. We can see where we can add new connections.
>
> **[4:48](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980&t=288)** You can see that we can set up connections on this page, by naming a new data source, and then, selecting the data source type from the drop down menu. If you select say, Azure Data Lake Storage Gen2, you can see where you're going to enter the details for the data connection. We can discard the changes because we're not going to add the connection right now. Now let's navigate back into our work space. If you want to connect to SQL server analysis services, you'll need to set up this connection through the dataset's functionality instead of the data flow's. To access a new dataset, select create, then choose the dataset option. We can then select databases and we see that the SQL server analysis services is one of the tiles on this page. Selecting this data source, we see that the connecting directly to the data source is now deprecated in Power BI. Instead, you'll first create the data connection as a live connection, or an import connection, in Power BI Desktop.
>
> **[6:21](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-databases?u=76281980&t=381)** You then publish it to the Power BI cloud to make it sharable with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (11), [[Databases]] (10), [[Microsoft SQL Server|Sql server]] (8), [[Microsoft Azure|Azure]] (4), [[SQL]] (3)
> **Env Vars:** sql (11), etl (2), dax (1)
> **Prerequisites:** set up (10), setup (1), you'll need (1)
> **UI Navigation:** select the (2), navigate to (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Setting up web connections](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-web-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-web-connections?u=76281980&t=0)** - [Instructor] In today's world, we have access to many online data sources, including both free, publicly-available data and paid subscription services. Please note to exercise caution when connecting to online data sources as links can change and these changes remain out of our control. Let's say that we want to get [[Microsoft]] reported [[Financial Data]] for the past five years from the MarketWatch website. You see on the screen that this resource provides us data tables on a web page. If you right-click on the interface and select inspect
>
> **[0:42](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-web-connections?u=76281980&t=42)** this now shows us the code that drives the website that we actually see in the interface. When we set up a web connection to this URL in [[Microsoft Power BI|Power BI]], it connects the code behind the web page, not the actual interface. In the Power BI Cloud, let's add a new entity to our Testing Tables Dataflow. We select add new entity and we want to choose web as our source. We can now paste the URL link in the space denoted for the connection settings. And now notice that you need to set up a gateway connection for this website. If we select anonymous and hit next, let's see what the result is. We get a message that says invalid credentials at the top and it doesn't give us an option to not select the gateway. Power BI is throwing us an error message for this connection. Even if we change the HTTPS to an HTTP, the connections still cannot get set up and this is an example of concern about the stability of these online sources. Web pages can change and I've connected to the same source in Power BI Desktop
>
> **[2:18](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-web-connections?u=76281980&t=138)** and I've had it work. So we want to make sure that we account for the stability of these web data sources. Which is where we could perhaps use an API connection instead of connecting directly to a web page. Let's cancel out of this new query and if we navigate to our Manage Gateways section, notice that we now see the MarketWatch data source connection even though the connection didn't necessarily work. To remove this data connection, select the menu option and choose remove. So now we have our gateway cluster updated to include the actual data that we're using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Microsoft]] (1), [[Financial Data]] (1)
> **Env Vars:** url (2), https (1), http (1), api (1)
> **UI Navigation:** select the (2), right-click (1), navigate to (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Querying API data](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=0)** - [Instructor] We can connect to an online data source using the data source's API connection if they have one available. We initiate an API query by sending a data request to the API's endpoint URL. The website's API protocol determines how we structure our data request, which typically includes additional query parameters, and a unique API key, or a token. The API connection then returns our requested data. We're going to obtain [[Microsoft]] stock data for its entire history as a publicly-traded company. To get this data, let's use the World Trading Data online portal. This website allows us to connect to the API connection for free if we make under a few hundred requests a month. You first need to sign up for an account on the website. Remember to save your user name and password for these websites, as we require the log in credentials to set up the API connection in [[Microsoft Power BI|Power BI]] later. For the World Trading Data website, you can see we already have an API token automatically created for the account. In some websites, you may need to request the API key or token separately. If you look through their API documentation, you'll see several options for configuring API queries. I want to set up an API connection
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=94)** to return historical stock price data for Microsoft. We scroll down, we can see the historical numbers. You can see the HTTP request, as well as the query parameters that you'll need to set up this request. This particular query is pretty straightforward to set up, because it's a single URL string, containing the API endpoint, the query parameters, and your own API token. You can see here the structure of the API query. The API endpoint is the same for everyone connecting to this API. The query parameters pass the type of query we want to create, in this case, historical data, as well as the stock ticker for Microsoft into the API query. Lastly, we add our own unique API token to the end of the request. The other part of setting up this website's API query is our own user name and password, which we will pass into Power BI later. I like to test out the API query to make sure the connection works first, before putting it into Power BI. While the query editor supports a number of different data connections, it doesn't necessarily provide error feedback, in case the request doesn't work.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=190)** My go-to website for testing API connections is the free Swagger Inspector tool you see on the screen. I take my API query, and I paste it into the request box next to the GET. We can now hit the GET button, and hit Send.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=215)** We confirm this query returns results, because we see the response box contains the returned data request. If the query doesn't work, Swagger Inspector will display error messages to point you in the direction of fixing, or further researching the issue. Now in the Power BI service, we're going to add this API connection as a new entity in our dataflows. We're going to create a new dataflow for this API connection, and we select to add a new entity. You can see in the Online services menu option there are several options for connecting to configured online web sources, such as Smartsheet, and Salesforce reports, if you're looking for a more stable web connection than what we explored in the web connection video. In the other menu is where you'll find the API connection. We select Web API, and this takes us to our connection page. We paste our API query in full into the URL box, and we can now select if we want to use a gateway, and in this case, we can pass in our credentials.
>
> **[5:07](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=307)** We hit Next to see if this connection works. Notice that we've selected the Authentication kind as Basic, and we pass in the user ID and password. We now see verification that our data connection works. In the next page, we notice that the API query doesn't necessarily return a data table. In the lower-right, we see a warning that we can click on, and it indicates the query is not a table. We'll transform this data connection later in [[Microsoft Power Query|Power Query]] Online into a useful data table that we can use. For now, select Save and Close.
>
> **[5:59](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/querying-api-data?u=76281980&t=359)** We're going to name this dataflow Microsoft Stock Price, and hit Save, and you may run into an error message like this, or a warning message, if you are testing out the dataflows. In this case, because our last web connection did not work, it's giving us a message. I'm going to select No, and we see that our web API connection is set up as a query entity within our new dataflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** api (31), url (3), http (1)
> **Prerequisites:** set up (5), you'll need (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the next (1), later in (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Warnings:** warning (2)
> **API Endpoints:** get  (1)

#### [Connecting to Excel](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-excel?u=76281980&t=0)** - [Instructor] Let's say that you work in an organization that, like many others, does a lot of analysis in [[Microsoft Excel|Excel]]. Whether it's making estimates or creating forecasts, you now want to share this analysis with others. You can see an example Excel file that we want to leverage in a [[Microsoft Power BI|Power BI]] dataflow on the screen. I randomly created sales numbers, and created formulas to adjust the monthly total sales based on how the running total of the actual sales compares to the forecasted numbers. If you select the Publish option from the File menu, notice that there are several options for publishing to Power BI. We can upload the workbook to Power BI as a workbook, and it works the same way it does as Excel Online. Or you can export the workbook data to Power BI as a dataset. We're going to connect to the actual file on the desktop in this example, so we're not going to select these options here. Those of you with access to the exercise files can download the Excel analysis to test this process on your own. You can see the name of the Excel file, [[Forecasting]], and the folder path it resides in on my own computer. We're going to copy this path and upload this same file path in our Power BI dataflow. In the Power BI cloud,
>
> **[1:32](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-excel?u=76281980&t=92)** we're going to connect directly to the Excel desktop file. In the testing tables dataflow that I've already opened, let's add a new entity. We select Excel from the File options menu. And in the file path, we paste the path of the desktop file location. I need to add forecasting.xlxs to the end. You can see there is an option for inputting a file path or a URL. If you are using a shared drive on the cloud for an Excel file, you can enter the URL link to the file here. We're going to select the Power BI DataFlows Testing data gateway. And this time we use the [[Windows]] authentication, so enter the username and password that you use to log in to your computer. We hit Next to link up to the file and save the credentials to our data gateway. Now we select the sheet or the table that we want to connect to. And this confirms that the Excel connection to our file path and our desktop works. From here we can select to transform the data. I'm going to keep the file name the same. So it's going to be the query name of Forecast.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-excel?u=76281980&t=188)** And then check the warning messages. And last, I'm going to hit Save and close. And there we have it. We now see the forecast Excel file loaded as a new query entity in our dataflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10), [[Microsoft Power BI|Power bi]] (7), [[Forecasting]] (2), [[Windows]] (1)
> **UI Navigation:** select the (3)
> **Env Vars:** url (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. Transforming Data Connections

[↑ Back to Table of Contents](#table-of-contents)

#### [Updating dataflows](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/updating-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/updating-dataflows?u=76281980&t=0)** - [Helen] After creating connections to different data sources in a dataflow query, you may find you want to update the query later, whether that's because you want to change the source connection, or add transformation steps to the connections you already set up. We don't need to create a new query within this dataflow or even an entirely new dataflow, but instead, we want to update our existing dataflow queries, an example here for the Testing Tables dataflow. For the forecast options entity name, we select the Edit Entity action. This brings us back into the query. If we want to update the source, we can see the step and the location of the file in the applied steps on the right. We could also promote the first row as headers by selecting Transform Table. Notice that this also updates the type of data in each of the columns. In this query, you can also explore the next steps for working with this data connection. For those of you with Power Premium accounts, you can look at the AI Insights option, that's going to give you some insight into the distribution of these numbers and these fields
>
> **[1:36](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/updating-dataflows?u=76281980&t=96)** by leveraging some of the machine learning technology. We're in the Pro account, so we don't have access to the machine learning, but you can see where you can access it. Once you make these changes, you can hit Save and Close to apply them.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/updating-dataflows?u=76281980&t=121)** This takes you back to the list of query entities within your dataflow, and it indicates you've successfully updated this query. If the updates fail, you will receive a message indicating some of the potential issues. If you want to delete one of these entities within the dataflow, the best way to do it is to go back in and edit the query again. We can see that there are two query entities within this dataflow, so the queries list itself names both the entities within the dataflow. If we want to remove the dataflow types, we can select the query, then right-click on it, where we see the option to delete the query. You also see options to duplicate it, rename it, and change some of the other configuration options within the query. We don't want to keep these changes, so we'll select Cancel to take us back out to the dataflow screen. Now we're back out at the list of query entities that roll up into the Testing Tables dataflow. If we want to delete this entire dataflow, we can close out of this particular dataflow, which takes us back to the dataflow main screen. Now we can select, say, Testing Tables, and click on the ellipsis option where we can select delete as an option. You'll receive a confirmation asking you
>
> **[3:36](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/updating-dataflows?u=76281980&t=216)** if you want to delete it, and this case, we just select Cancel, because we want to keep it. And there we see how to manage both the query entities and the entire dataflow in case we want to remove or change the existing queries or dataflows themselves.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (2), right-click (1), click on (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [helen] (1)

#### [Utilizing Power Query Online applied steps](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=0)** - [Instructor] [[Microsoft Power Query|Power Query]] Online is the web version of Power Query and [[Microsoft Power BI|Power BI]] Desktop, and also [[Microsoft Excel|Excel]]. After connecting to data sources in Power BI data flows, we can then transform these queries into usable data tables. Power Query not only creates data connections, but also allows us to transform data in many different ways. Examples of these transformation functions include splitting column text, changing data types, adding new calculated columns, pivoting data tables, and drilling into query objects. Query folding is a Power BI query editor functionality that takes extraction and transformation steps and translates them into [[SQL]] commands to send back to the connection for compatible [[Databases]]. Examples of query commands that can translate into query folding include merging or joining tables, appending tables, applying filters, adding new columns, renaming fields, and removing columns. In our Power BI Pro account, we already set up an API query for the [[Microsoft]] Stock price data from the world trading data website. We can go back into edit the query by selecting the edit action. We can now access this connection to update it. From here, we can apply our transformation steps
>
> **[1:36](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=96)** to this data connection. The list of the applied steps on the right shows the extract and transformation functions already applied to this query, both on our commands and also some of them automatically, such as replacing errors. If we want to remove one of these steps, we simply click on the X next to the step name. In this case, we want to actually remove the replace errors step because we're going to transform one of the earlier steps.
>
> **[2:22](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=142)** So we start back at the source step. We see a query structure comprised of the Microsoft Ticker name and the record object represented in this history row. We click into this record object. Record objects are not particularly useful on their own, to access the data within the record object, we click on this hyperlink. So the record object hyperlink stores the API query results returned from our request. Drilling into this object, we now see the date, with the corresponding record object next to them that represents the data such as the prices and the volume on that particular day. We now see the expanded query structure and we want to convert this entire view to a table. To do so, we select convert to table at the top of the query editor. We now see a table object in our query. We can expand out each of these records in the value column by selecting the icon with the diverging arrows at the top of the column name. We don't want to include value in our column name, so we're going to uncheck this box and keep the [[Representational State Transfer (REST)|rest]] of these fields selected.
>
> **[3:57](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=237)** We hit OK, we now see the expanded data table. Notice that the data table is now readable to the human eye because we see it in the form of columns in a table object. To clean up the data table from this view, we're going to apply a few more simple transformation functions to improve the aesthetics of the table. Especially if you're sharing your data flow with other people who are not familiar with API queries or data itself, renaming the columns into something more familiar will allow them to be more comfortable using the data itself. We're going to rename the first field date, the second field, opening price,
>
> **[5:01](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=301)** and so when we name them a meaningful name for each of the fields,
>
> **[5:15](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=315)** we can also change the data types for reach of these fields so that we can use them later in our calculations visuals. For example, we want to see the date as a date data type and not a text data type. We select date from this list, we do the same for the prices, which we set to currency.
>
> **[5:45](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=345)** For volume, we want to use a whole number because it represents the number of shares, which is a whole number. We can also rename our query to Microsoft Stock Prices so that if we add additional queries to this data flow, we can distinguish it from the others. Finally, we hit save and close. And we see the queries validating to confirm they work.
>
> **[6:26](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/utilizing-power-query-online-applied-steps?u=76281980&t=386)** We now see an updated query entity for the Microsoft stock prices within the Microsoft Stock Price data flow. There we have it, we see how the transformation functions can be applied to edit the query and make it into a usable data table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (3), [[Microsoft Excel|Excel]] (1), [[SQL]] (1)
> **Env Vars:** api (3), sql (1)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** set up (1)

#### [Translating from Power BI Desktop](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980&t=0)** - [Instructor] To perform ETL processes in the query editor, [[Microsoft Power BI|Power BI]] relies behind the scenes on the M Language accessible through the Advanced Editor. This language is exclusive to the [[Microsoft Power Query]] editor but has similarities to the F# language. Just a few examples of standard M functions include connecting to web tables, adding new columns, and creating date formulas. The M language also lets us create custom queries by writing our own M code. I'm not going to go into much detail about the semantics of M, but if you would like to learn more about the M language on your own, I would encourage you to check out the [[Power BI Data Methods]] course in the library. In the Power BI cloud account, we created a query that connects to an API connection to get the [[Microsoft]] stock price data. We then transformed this data connection using the [[Microsoft Power Query|Power Query]] online transformation functions to make it into a useful table that we see here on the screen. We can see the M code behind the query by right clicking on the query name and selecting the advanced editor option. This opens the popup window for the M functions behind the extract and transform processes of the ETL framework we see in the query editor and also in the applied steps. In this window we can make our own custom
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980&t=94)** or completely new M code. This M code in the Power BI cloud is also the M code that we see in Power BI desktop. We see in this Power BI desktop file by going into the query editor we see an example of the same API connection and initial transformation steps, but it also adds some more complex transformation processes to calculate the average or maximum and minimum stock prices on both the yearly and monthly basis. This creates additional fields in the data table. Those of you with access to the course exercise files can open the desktop file to take a closer look at this query. If we select the advanced editor option in the home ribbon menu we see the end code for the power BI desktop file in the screen. These are the extract and transform functions that created this more complex data table. Let's copy all of the M code in the window and we're going to transfer it to our Power BI account. We're going to get out of the Microsoft stock price dataflow and go back into the testing dataflow. We select cancel. We're going to create a new query
>
> **[3:09](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980&t=189)** in this testing tables dataflow to see how to transfer the M Code over from Power BI desktop. Select to add a new entity, then we select blank query from the other menu options. On the next screen you see that the blank query asks us to enter the M code directly in this interface. Here we can simply paste the M code that we just copied. Notice that the spacing and lines look slightly different than what we saw in the desktop file. You don't have to worry about this because the Syntax of M means that for example line five ultimately takes up two lines but the lines are separated by commas. We can then select Next to save our new query. Now this transfers the M functions over from Power BI desktop into Power BI dataflows by transferring the ETL process. We need to configure the connection to save our API query.
>
> **[4:32](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980&t=272)** In this case we enter the same.
>
> **[4:40](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/translating-from-power-bi-desktop?u=76281980&t=280)** So even though we've already entered the user ID and password for the world trading data API we need to update these credentials in our data flow so that it updates the credentials in the gateways as well. Hit confirm. We now see in our view the updated query for the API connection in the desktop file transferred to our data flow. Let's rename this query, call it Microsoft Stock Trends and we can rename it either in the query settings we see on the right or over here in the query name. We save the updates to the query. We're going to come back to the refresh options in a few videos. Now we see there are three query entities within the testing tables dataflow so the API connection and transformation process from the desktop successfully transferred into Power Query online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (11), [[Microsoft]] (3), [[Microsoft Power Query|Power query]] (2), [[Microsoft Power Query]] (1)
> **Env Vars:** api (6), etl (3)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### [Setting up a Common Data Model](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-a-common-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-a-common-data-model?u=76281980&t=0)** - [Instructor] The common data model defines the data schema for entities, attributes, semantic [[Metadata]], and relationships. In [[Microsoft Power BI|Power BI]], we can map existing queries to a common data model to create a more consistent, shared data understanding and schema between multiple sources. To see how mapping schemas works, let's take a small sample of data for stock prices that I consolidated in an [[Microsoft Excel|Excel]] file you see here on the screen. There are three fields, date, stock ticker name, in this case [[Microsoft]] and Nasdaq, and the closing prices of these stocks on those dates. Those of you with access to the exercise files can use the same data, or you can create your test data on your own. To show how the common [[Data Mapping]] works, let's examine two sample queries and the testing tables data flow. I already set these queries up with the naming convention CDM by copying and pasting the data from our Excel file into this two blank tables. I named the first one with the suffix standard and the second one with the suffix custom. They're identical otherwise. We're using these to show how the mapping works. Notice the entity type for both these queries and the other queries in the data flow, is denoted right now as custom. To see how to map the schema,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-a-common-data-model?u=76281980&t=94)** let's select edit the standard option. Ironically, as we saw, the data schema is already set up using a custom schema, so we actually want to map the standard schema to see how the common data mapping works. You can see by flipping between these queries, that they are identical. To map our query to the common data model, we're going to select the menu option in the ellipses on the right side of the screen and select map to standard. Opening up the mapping functionality gives us a dialogue box where we can map to the standard entity. The search bar on the left side of the screen is where we search not for the field names we want to map, but for the standard schema we want to use. Our data involves prices, so we search for price options from the schema list. If we select price list item, let's see if these fields map to the fields in our data. And see we have an amount created on, which being a date, and we have a product ID. So let's select to use the price list item and we need to manually, actually map the query outputs to the entity attributes in the chosen standard data schema.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-a-common-data-model?u=76281980&t=193)** I select date for created on, the closing price for the amount, for the product ID's where we picked the stock ticker, and notice that it shows in the menu option when you open up the entity you want to map, which ones are mapped and which ones are not mapped, so we select the stock tickers, it's the last one, it's not mapped to the model. We confirm our selection. We see that the mapping to the standard entity is now a step in the applied steps for the query. We also see the other fields from the common data schema and these are null because we don't have matching fields for them so we can remove them or in this case, I'm just going to let them be. We now save and close the query to update the schema.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/setting-up-a-common-data-model?u=76281980&t=256)** Now notice that the standard CDM entity now has the price list item as the entity type, while the other CDM, the one we left alone, still has the custom entity type. So this is how you apply the shared data schema to your existing data and how to know that it's been properly applied and you can map other queries in your data flow to this same schema as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Data Mapping]] (2), [[Metadata]] (1), [[Microsoft Power BI|Power bi]] (1), [[Microsoft]] (1)
> **Env Vars:** cdm (3)
> **UI Navigation:** select the (2), in the menu (1)
> **Cross-References:** as we saw (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Loading and Connecting to Dataflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting to dataflows](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980&t=0)** - [Instructor] After creating the ETL framework for the query entities within the [[Microsoft Power BI|Power BI]] data flows, you now want to make this data available for others to use in their own Power BI [[Dashboards]]. To create dashboards from Power BI data flows, you really have to load the data twice. First when you connect to the data flow, and second when you actually load the data to the view where you develop your Power BI dashboards. We set up a Power BI data flow containing the [[Microsoft]] Stock Prices we obtained using an API query. We now want to set up a Power BI data flow connection in Power BI desktop that points to this specific query. In a new Power BI desktop file, we select get data, select the power platform menu, and we can select Power BI data flows from this menu. You need to make sure first that you're signed in. You can then connect once you're signed in. When we select our Power BI data flows, we see a series of folders representing our work spaces and the data and the data flows within them. We want to select the Microsoft Stock Prices, and we see the API query listed as a table within these folders. Once we drill into the folders, we select
>
> **[1:37](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980&t=97)** the Microsoft Stock Price data. We see the columns for the query we created. We then select transform the data. We see the columns appear from within the query entity we connected to, but we do not see any of the actual data. The fix for this issue is actually a pretty straight forward one. We need to go back into our Power BI cloud account and refresh the data flow before we connect to it. Even though you already saved the data flow, you actually need to first refresh the entire data flow for the connection to work. We can perform this manually by refreshing the data flow once in our work space and then checking that the query now works. Right now we are in the entity list within the Microsoft Stock Price data flow. We can see incremental refresh, properties, ML model, and edit entities. It does not say anything about refreshing. In order to refresh, we need to go back to the data flow list. Now, we select refresh the entire Microsoft Stock Prices data flow. We now see the last refresh updated in the refresh details. After refreshing the data flow,
>
> **[3:11](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980&t=191)** we then go back into our desktop file. We hit refresh preview which manually refreshes this data connection. We now see the data flow query updated so it actually contains the data that we are looking for. Now that we've successfully loaded our data flow query into Power BI desktop, we can perform our own ETL framework on this data set. This is the second part of the ETL process after the ETL process in the cloud that converted the API query into a usable data set. Let's keep it simple and not apply any transformation steps for this particular Power BI desktop file. I'm going to select close and apply which loads the data into Power BI desktop where we can develop the dashboards from here. I'm going to save this data file as version one.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980&t=260)** But this is an example of us connecting a single Power BI desktop file to the data flow. Let's test out another Power BI desktop file connected to the same data flow, but using a different ETL process. This can represent another user, or in our case, the same user creating a different ETL process from the same data. We first want to open a new Power BI desktop file. We select to get data from the same data flow query.
>
> **[5:02](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/connecting-to-dataflows?u=76281980&t=302)** Once we connect the data, we can then transform it. This time, we're going to create an ETL process with additional fields added to this data connection. I'm going to calculate the average closing price for each year. To do this, I'm going to use the grouping functionality. I'm not going to get into the semantics of how the transformation function works, but you can check it out in the exercise files if you have access to them. We can now load this data to Power BI desktop. We are going to create another dashboard to model these trends. I'm going to name this file the same naming convention as the first desktop file we created, except I'm going to add version two to the end of it. There we have it. We've seen how to connect two different Power BI desktop files to the same Power BI data flow to create two different data tables from different ETL processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (20), [[Microsoft]] (5), [[Dashboards]] (4)
> **Env Vars:** etl (8), api (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Comparing dataflows to data sets](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=0)** - [Instructor] When you set up a [[Microsoft Power BI|Power BI]] dataflow, this create a single, scalable ETL framework and [[Microsoft Power Query|power query]] online that multiple users can utilize. They don't necessarily need to know much about how you develop the dataflow query to consume the data themselves. They can connect Power Query and Power BI desktop to these queries to create their own ETL frameworks which they use to develop Power BI [[Dashboards]]. Datasets on the other hand allow multiple users to connect to the same data, except they cannot create their own ETL processes for their data connections. We can create datasets from dataflows but we cannot create a dataflow from a dataset. The goal for a dataflow is to minimize the need for completely separate datasets for each dashboard but consolidating much of the ETL process in a shared location. We setup two Power BI desktop files in the video connecting to dataflows that we connected to the same dataflow, but they utilized different ETL processes to create data tables specifically for each dashboard. I then created dashboards for each of these files to visually communicate the data trends in different ways. You can see the first dashboard here that lets us visualize the performance of [[Microsoft]]'s stock. It's a pretty simple dashboard example with two lines on the line chart representing the low price and the high price for each day of trading. The end user can interactively change their own view
>
> **[1:35](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=95)** by selecting a narrow date range. If you would like to learn more about how to create dashboards like this, please check out the data dashboards in Power BI course in the library. I also created a dashboard in the second Power BI desktop file that we connected to our dataflow. This dashboard uses a different ETL process to get the data even though it's from the same dataflow. We want to share these dashboards into our PowerBI cloud to see how the datasets separate for each of these reports. To share this dashboard to your workspace, select publish in the home menu bar and then I'm going to send this to Power BI dataflows which is the workspace specifically for our dataflow's course. We receive a message that the file successfully uploaded. This includes both the dashboard and the data components of the file. We do the same for the other Power BI desktop file. We're going to share it to the same workspace. So we successfully published both of these dashboard files. Now we go into Power BI cloud. Now we go into our Power BI cloud. We now see there are two reports uploaded into our report page of this Power BI dataflow's workspace.
>
> **[3:11](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=191)** Opening up the first one we see the dashboard in a full page shared view. We can think of the Power BI dashboards we upload and share in the cloud as applications containing two critical components. We have the calculations and the dashboard visually illustrating the trends on the reports we just opened. We also have the data supporting these views which you can refresh automatically through the dataset section of your workspace. When we go into the dataset section we see on the screen we see separate connections for both dashboards even though they come from the same dataflow query when we develop them in Power BI Desktop. Let's connect to one of the datasets we just created in Power BI Desktop. In a new Power BI Desktop file select get data. This time we go to the power platform but we want to select datasets instead of data flows. We hit connect to confirm this connection and we want to choose one of our data sets. Let's use version one. Notice Power BI now becomes a front end process making it a live connection type without any ETL capabilities even though the original connector was not. Notice that Power BI now becomes a front end process only making it a live connection type without any ETL framework capabilities even though the original connection
>
> **[4:46](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=286)** we set up to the dataflow was not a live connection. If you have multiple data tables within a dataset you connect to you will connect to all these data tables and see them over here in the field section. However, this dataset just has one table. Let's create a pretty simple bar chart to show how the dataset connection then gets uploaded to the Power BI workspace. Select the date and I just want the year
>
> **[5:26](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=326)** and then I'm going to put the high price and show this in bar chart
>
> **[5:42](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/comparing-dataflows-to-data-sets?u=76281980&t=342)** by showing the max there. And we just create this simple visual that doesn't really tell us much, but we want to test the data connections. We save this file to our desktop. Going to call this. Now we share this dashboard to the Power BI service again in the same workspace. And we make sure you select the workspace that you want to upload it to and we publish it. When we go back into the Power BI cloud, the report section now contains a new dashboard for the dataset connection we just set up. Conversely, the dataset section, because we connected to the version one in this list does not contain a new dataset because we are simply connecting to a dataset that already exists. This shows how we can approach accessibility and shareability across many people and many users within a workspace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (20), [[Dashboards]] (7), [[Microsoft Power Query|Power query]] (2), [[Microsoft]] (1)
> **Env Vars:** etl (8)
> **Prerequisites:** set up (3), setup (1)
> **UI Navigation:** select the (2), go to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Sharing dataflows](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/sharing-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/sharing-dataflows?u=76281980&t=0)** - [Helen] So far, we've created data flows from the admin perspective. After creating a data flow, you can choose to share it with others. You can commission access to a data flow by selecting if you want someone's role to be an administrator, a member, a contributor, or a viewer. You can commission someone access to, or remove it, from one of the data flows, but not necessarily the others. Setting up these roles allows for multiple users to access the queries in the data flow without sacrificing security, thus making it a scalable solution. You can see on the screen the capabilities for each of these roles in a [[Microsoft Power BI|Power BI]] data flow. Based on what they're trying to do that you see in this list, you can decide how you want to commission their access. In our Power BI cloud account, to update the admin roles, you select the access button, where you're going to give someone access to this specific workspace in the data flows. You can enter their email address at the top, and decide which one of the roles you want them to have. You see that there's one admin currently for this workspace, and you can change what type of permission they have. When you add someone to the list, they will receive the email
>
> **[1:33](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/sharing-dataflows?u=76281980&t=93)** and learn more about the user role that they have in Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3)
> **UI Navigation:** select the (1)
> **Speakers:** - [helen] (1)

#### [Scheduling data refreshing](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980&t=0)** - [Instructor] In the [[Microsoft Power BI|Power BI]] cloud, we set up our refreshing schedule by going to the [[Microsoft]] Stock Price dataflows in the dataflow list. We then select the tablet icon that allows us to schedule the data refresh. We need to refresh all the queries in the dataflow at the same time, rather than individually. If we go into our stock price data dataflow, notice that the option to schedule a refresh is not one of the actions. Incremental refresh is a separate functionality that we will discuss a little later. To schedule the updates for the Microsoft Stock Price data, select the Schedule refresh button. This takes us through to a new screen, where we first ensure that the gateway is properly set up for this data connection. You should already have this set up from when you created the dataflow, but you do want to confirm that it's working, and check the data source credentials, and then we expand the menu for the scheduled refresh options. We turn on the radio button. We're going to refresh this daily. We're going to choose East Coast Time in the US, and because the stock market closes in the early evening, we're going to select the time that is after that time period.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980&t=93)** Let's say 9:00 p.m. Select the check mark to make sure that you receive failure notifications if your dataflow does not update. With Power BI Pro accounts, you can update the data multiple times a day. In the Power BI Premium accounts, you can update them far more often than the Pro accounts. The question is how often do we want to update the stock price data? If we're looking at daily stock price numbers, we really only need to update the dataflow once a day, so we can add another time, but we're not going to do that for this particular case. We hit Apply to properly schedule our refresh.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980&t=143)** Now we navigate back to our dataflow again, and this time, we're going to go into the dataflow to take a look at that incremental refresh option. We open up the incremental refresh, and we can turn it on. This time we're going to choose the date field. We want to store all the rows from the past, but we also only want to refresh rows from the past day, because this reflects the most recent day of stock prices. Historical stock prices are not going to change going backward, so we really only need to refresh the new stock price data for a particular day, and that will be when we'll be refreshing the data anyways.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980&t=192)** And we select Save. We're going to use 100 years, just to make sure we have all the historical data points, and select Save, and now we see that this is actually an option that's only available for Premium, even though we didn't receive the message for it when we set it up, so this is something that if your organization is dealing with a lot of active data like this, this is an option to leverage to make sure you're not continually running the same processes to get the same data every day, even though it's going to be the same, and the warning message was for the incremental refresh, so we know that it's there, so I'm just going to check the dataset now, because we need to schedule the data refresh for the stock price data. These datasets will not update automatically because the dataflow is refreshed itself. We're going to update the stock price, Version 1. We just schedule the refresh in the same way that we did for the dataflow, and because we've already set up the gateway for this dataset, we don't need to refresh the gateway again, because it pulls the data from the dataflow. We schedule the refresh, turn it on. This time, again, we select the US Eastern Time, and we're going to schedule the refresh for 10 p.m., which is an hour after we refresh the data in the dataflow.
>
> **[4:50](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/scheduling-data-refreshing?u=76281980&t=290)** We then hit Apply to save our refresh schedule. There we have it, how to set up a refresh schedule in the cloud to make sure that you're running on the most recent data for both your dataflows, and the datasets that go into them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3), [[Microsoft]] (2)
> **UI Navigation:** select the (5)
> **Prerequisites:** set up (5)
> **CLI Commands:** make (4)
> **Definitions:** is an  (2), is a  (1)
> **Ports:** :00 (1)
> **Versions:** version 1 (1)
> **Warnings:** warning (1)

#### [Representing dataflow structures with JSON files](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/representing-dataflow-structures-with-json-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/representing-dataflow-structures-with-json-files?u=76281980&t=0)** - [Helen] [[JSON]], or [[JavaScript]] Object Notation, files stored data in a structured format that machines, like computers, can easily read. In the context of [[Microsoft Power BI|Power BI]] dataflows, you can share or transfer your dataflows and the queries within them by exporting the dataflow as a JSON file, which is a native functionality available for the dataflows. You can then import this JSON file to create a new dataflow. Let's say you want to transfer the Testing Tables dataflow into a new workspace within your Power BI account. We don't need to recreate the same process again in the new workspace for the five queries within this dataflow, we can instead choose to share the dataflow by exporting the JSON file. This JSON file models all the queries within the dataflow. Next to the Testing Tables dataflow, in the actions list, choose the ellipsis menu, then select Export JSON. We receive a message that the file downloads. Now, let's create a new workspace in our Power BI account. Going to create a new workspace called Transferring Dataflow, and select Save. Now, we can create a new dataflow
>
> **[1:34](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/representing-dataflow-structures-with-json-files?u=76281980&t=94)** by choosing the dataflow tile, and selecting getting started. In the view to start a new dataflow, instead of defining new query entities, we're going to select to import a model. We want to select the Testing Tables JSON file we just downloaded from the other workspace. We select Open, and it imports the dataflow model. We see the file imports, but we also may need to update the credentials such as the API connections. To do that, you would go back into the gateway, but let's see if the dataflow properly uploaded. And we see a new dataflow in our workspace called Testing Tables. We open to take a look into it, we see it contains the five queries in the other workspace. So there we have it. This is an example of how to efficiently transfer your work, such as queries, that go into the dataflow without having to replicate all the work on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[Microsoft Power BI|Power bi]] (3), [[JavaScript]] (1)
> **Env Vars:** json (7), api (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **UI Navigation:** select the (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [helen] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Power BI dataflows](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/next-steps-with-power-bi-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-dataflows-essential-training/next-steps-with-power-bi-dataflows?u=76281980&t=0)** - [Helen] Thanks for joining me to create [[Microsoft Power BI|Power BI]] data flow queries. Try out some examples of data connections in your own organization that would benefit from utilizing data flows, whether that's from a database, sales force report, or an API query. Think about how to scale this data to consolidate ETL processes and remove unnecessary duplicated work. Stay tuned for [[Microsoft]] updates, as they're moving fast in accessing cloud data like this. Feel free to connect with me on [[LinkedIn]], or follow my posts on Power BI and data analytics and visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (1), etl (1)
> **Speakers:** - [helen] (1)


## Instructor

- [[Helen Wall]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power BI

## Path Context

### In [[Master Microsoft Power BI]]
← [[Power BI Data Methods]] | **3 of 6** | [[Power BI Top Skills]] →

## Appears In

- [[Master Microsoft Power BI]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Microsoft Power BI
- [[Power BI Top Skills]] — Microsoft Power BI
- [[Power BI- Working Together with ChatGPT]] — Microsoft Power BI
- [[Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals]] — Microsoft Power BI
- [[Advanced Power BI Custom Visuals with d3.js]] — Microsoft Power BI

---

[↑ Back to top](#)