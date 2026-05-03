---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-couchbase
url: "https://www.linkedin.com/learning/introduction-to-couchbase"
duration_minutes: 71
duration: 1h 11m
level: Beginner
updated: 2/28/2024
learners: 16135
skills:
  - Database Development
  - Couchbase
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHhmHn_rhPxdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655146592401?e=2147483647&amp;v=beta&amp;t=s7G9TI7Oon7yRPl5ToMz4_RyqOc1VCzsgSFUZla_7qI"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Redis Essential Training]]'
next_courses:
  - '[[Elasticsearch Essential Training (2023)]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":7,"total":10,"prev":"Redis Essential Training","next":"Elasticsearch Essential Training (2023)"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/database-development
  - skill/couchbase
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Introduction%20to%20Couchbase.md)

![Introduction to Couchbase](https://media.licdn.com/dms/image/v2/C560DAQHhmHn_rhPxdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655146592401?e=2147483647&amp;v=beta&amp;t=s7G9TI7Oon7yRPl5ToMz4_RyqOc1VCzsgSFUZla_7qI)

# Introduction to Couchbase

> The course provides an overview of the fundamentals of Couchbase, a leading NoSQL database that's been emerging in popularity, offering data format versatility and easy scalability all without downtime. Instructor Michelle Burns walks you through the basics of Couchbase Capella and shows what it can do for you, whether you’re a developer, admin, or just looking to learn more about Couchbase. She s

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase) | 1h 11m | Beginner | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Couchbase and what it can do for you](#couchbase-and-what-it-can-do-for-you)
  - [Couchbase: Understanding the lexicon](#couchbase-understanding-the-lexicon)
- [**1. Getting Started with Couchbase Capella**](#1-getting-started-with-couchbase-capella) (8 videos)
  - [Signing up for Capella](#signing-up-for-capella)
  - [Adding users to Capella](#adding-users-to-capella)
  - [Segmenting databases and adding users to projects](#segmenting-databases-and-adding-users-to-projects)
  - [Spinning up cluster with buckets, scopes, and collections](#spinning-up-cluster-with-buckets-scopes-and-collections)
  - [Choosing an SDK and an IDE](#choosing-an-sdk-and-an-ide)
  - [Connecting to Couchbase through Capella](#connecting-to-couchbase-through-capella)
  - [Challenge: Get your Couchbase up and running](#challenge-get-your-couchbase-up-and-running)
  - [Solution: Get your Couchbase up and running](#solution-get-your-couchbase-up-and-running)
- [**2. Completing Key Value Operations**](#2-completing-key-value-operations) (5 videos)
  - [Completing a Get](#completing-a-get)
  - [Completing an INSERT, UPSERT, and DELETE](#completing-an-insert-upsert-and-delete)
  - [Handling errors and exceptions](#handling-errors-and-exceptions)
  - [Challenge: Complete a key value operation using Node.js](#challenge-complete-a-key-value-operation-using-nodejs)
  - [Solution: Complete a key value operation using Node.js](#solution-complete-a-key-value-operation-using-nodejs)
- [**3. Querying with Couchbase**](#3-querying-with-couchbase) (2 videos)
  - [SQL and SQL++ and Indexing In Capella](#sql-and-sql-and-indexing-in-capella)
  - [Using JOINs and Parameters with SQL++/N1QL](#using-joins-and-parameters-with-sqln1ql)
- [**4. Getting Your Couchbase Database to Perform Effectively**](#4-getting-your-couchbase-database-to-perform-effectively) (3 videos)
  - [Evaluating database performance](#evaluating-database-performance)
  - [Scaling vertically and horizontally](#scaling-vertically-and-horizontally)
  - [Applying replication](#applying-replication)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Couchbase and what it can do for you](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=0)** - [Michelle] Are you an application developer looking to make the next great app? Or are you a [[SQL]] developer who already created a wildly successful app that now needs to scale? If you're wondering where to begin, I suggest with [[Couchbase]] Capella. Couchbase is a [[NoSQL]] database that uses and expands the ability of SQL and can scale often without system downtime. Capella provides a fully-managed Couchbase database. It automates setup, ongoing operations, and database maintenance. This allows you to fully focus on what you are good at, bringing to life a best-in-class application. I'm Michelle Burns, the lead e-learning creator for the Couchbase Academy. I'm excited to teach you all that Couchbase Capella has to offer. So let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (5), [[SQL]] (2), [[NoSQL]] (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [michelle] (1)

#### [Couchbase: Understanding the lexicon](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=0)** - [Instructor] Before diving into Capella, let's learn how [[Couchbase]] organizes data. Couchbase is a [[NoSQL]] database, that harnesses the power of an [[SQL]] or relational database, while allowing for the flexibility of a NoSQL data solution. It is highly available, provides low latency transactions, and is easily scalable, often without downtime. Capella is an interface that allows you to access a fully managed, Couchbase database. Here, I'm showing you Capella, where you can view and work with many [[Databases]], or clusters, all from one pane. At Couchbase, data is in databases, also referred to as clusters. A database is a group of interconnected servers or nodes, that work together to support applications. In this example, Freedom Air has three databases or clusters of data fueling different applications, including thick desktop, web, mobile, or any application built using an SDK. Let's drill into one database to see what it's made of. Database one is composed of five servers or nodes, which is not a requirement, but simply an example. The number of nodes is chosen by a user who completes the initial setup. In production, Couchbase requires a minimum of three nodes, to ensure the data's high availability. While Couchbase has six different services to choose from,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=94)** this example configuration shows the three most commonly used services. Three nodes in this example are for the data service, and two nodes are split between the query and index services. You can choose to have more than one service on a single node, or a node can be devoted to a single service. The choice is yours. An important feature of Couchbase is auto failover, where Couchbase automatically replicates data in a database, to ensure it's always available, even if one or more nodes fail. This configuration shows the minimum recommendation of three data nodes. And you can see how some are marked active, while each has a replica. Replicas are kept in warm standby, so they're always ready to replace the active node when needed. So for example, if node two here fails, Couchbase immediately activates node two's replicas. So the node continues to take requests. As long as the appropriate number of replicas is present at all times, the Couchbase database will be highly available. And the best part is, users rarely know failover took place. Now we'll look at the way that data is partitioned within data service nodes only. A bucket is our first level of partition. A bucket is the same as a database in a SQL or relational data model. A scope lives within a Couchbase bucket
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=188)** on a data service node, and a scope is similar to a schema in a relational data model. The next data partition is a collection, which lives within a scope. It is similar to a table in a relational data model. So this leads to an obvious question. Where do your documents go? In Couchbase, documents are housed in Collections, where all key value operations are performed. Further, you have multiple data format options, including [[JSON]], CSV, TSV, and JSON line. Finally, documents are similar to rows, in a relational database model. And why does this structure matter to you? Well, if your data is organized into [[Microservices]], it comes into the database in certain groupings. Scopes and collections maintain those groupings, so you're not reinventing your structure. When operations are coded, the database is directed to a collection of documents, speeding up operation times, and increasing retrieval accuracy. If you want multiple non-related users to access data, scopes and collections help keep data in appropriate isolation, which ensures [[Data Integrity]] and allows for greater security. And those are the building blocks of Couchbase. Understanding how Couchbase is organized allows you to make Capella and database settings choices that strengthen and sustain your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (14), [[Databases]] (3), [[NoSQL]] (2), [[SQL]] (2), [[JSON]] (2)
> **CLI Commands:** node (7), make (1)
> **Env Vars:** sql (2), json (2), sdk (1), csv (1), tsv (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** similar to (3), for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Couchbase Capella

[↑ Back to Table of Contents](#table-of-contents)

#### [Signing up for Capella](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=0)** - [Instructor] Getting into [[Couchbase]] Capella is quick and easy. You can do it in around three minutes. I'll show you how by sharing a real-life example. Let's say Freedom Air, my company, is considering Couchbase Capella to simplify and accelerate [[Database Management]]. As a Freedom Air admin, I want to explore the free trial, so I'll use this address to navigate to the Capella sign-up page. Here on the Capella signup page, I will enter my name, email address, and all relevant information and click get started. Capella will then ask me to verify my email address by sending me an email. Remember to check any spam or promotional folders for that email address. I've found the email, and I'll click the link here to verify. You may be asked to sign in again. From here, you'll agree to the service agreements by clicking in the box and opting in to email if you so choose. Then click create account. For this 30-day free trial, which does not require a credit card, you'll be given these options. Make your choices accordingly, and click deploy now. If your organization needs other regions, you'll want to upgrade to the full access version of Capella, which you can do at any time. While the database is launching, I do want to make a point about geography. We have many different options at this time,
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=96)** depending on the service you choose. However, to learn more about configuration options by cloud service, please navigate to this area to learn more in Couchbase documentation. It's important to note if your servers are physically in the same location as the region you choose, your latency will most likely be low. However, if the region you choose is far away from your server's physical location, your database's latency will most likely increase, decreasing the efficiency of your application. And just like that, welcome to your Capella free trial! Your database is now ready, and we will take the next steps in the next few modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (3), [[Database Management]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Adding users to Capella](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=0)** - [Instructor] Now that our cluster is up and running, our first step is going to be to add users as you probably know right this minute who those people are. Within Capella, our first step is going to be to add users at the UI level. Within a few clicks, you can add all the users you need to the entire Capella UI. Let's look at our user options. An Organization Owner is the only user who can add or delete other users. This person has access to billing, can generate or modify API keys, and has full data access to all clusters, projects, and clouds created. The Project Creator is someone who creates the projects that organize your clusters of data. This person is also automatically assigned as a project owner for any projects they create. A Cloud Manager is a user that you would only add if you have previous experience with [[Couchbase]]. This person is someone who manages outside clouds hosted separately in [[Microsoft Azure]], [[Amazon Web Services (AWS)|Amazon Web Services]], or [[Google]] Web Services. And finally, an Organization Member has read only access at the organization level for projects they're assigned. They can also be given more extensive permissions within the projects or clusters. And now we've returned to the Capella UI in order to add our users. My first step is to navigate to the users area and because I've created this trial account, I will be listed here as the Organization Owner.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=96)** In order to add a user, I'm going to click add user. I will add the person's name and email address.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=111)** Then based on the role that I'll need, I'll give [[John the Ripper|John]] his organizational permissions. I'm going to make him a Project Creator so that he can create projects within Couchbase Capella. And then I click add user and Capella has told me that John Doe was added successfully. He will be listed as pending until he accepts his verification email. Also, it is very easy to delete a user as all you would need to do within the Capella UI is click on the trashcan and type the [[Microsoft Word|word]] remove in order to remove John as a user. Capella again will tell me that John was successfully removed and I'll need to add all users who will interact with the Capella UI from this area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (4), [[Couchbase]] (2), [[Microsoft Azure]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Google]] (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Segmenting databases and adding users to projects](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=0)** - [Instructor] Now that your organization users have been added, you can add projects to Capella. Think of projects as a way to organize the clusters of data that feed your applications. Projects allow you to keep or adjust your current data structure and strengthen data access security. Here's an example of what the user structure looks like behind the Capella UI. Organization users are first added to Capella, then projects are created and users are given the needed permissions to work within each project. Each project can house one or more clusters of data, and a user with access to that project has access to all clusters within the project. So, if I have five developers with access to this project on the screen, each developer will have access to all three clusters within this project. Making sure you understand this is key to maintaining [[Data Security]]. And it is a best practice to plan out which clusters logically need to be linked within a project. To do this, you may want to gather your team and whiteboard the answers to these two questions. Number one, how are my applications organized today? And number two, how do I want them to be organized in Capella? When Freedom Air planned out their project structure, they decided to separate projects out by housing applications for airports in project one, for flight paths in project two,
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=96)** for airlines in project three, and for regions in project four. This way, they gave access to clusters following current [[Data Structures]]. Let me show you how easy it is to begin creating a project structure in Capella. Just so that you're aware, I've cleared all of the trial information so that we can start with a blank slate for this demonstration. From the menu on the left, I would first click Projects, then I will click Create a Project and I'll give my project a name, Project 1. I click Create a Project, and automatically Capella has told me that Project 1 has been successfully created. I can then go about adding Project 2,
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=154)** Project 3, and Project 4. To add users to a given project, I will first click on the project name and here you can see two options, the clusters identified as part of this project and the users. We'll click on users and I'll need to click add users to project. From here, I'm going to use the dropdown menu and I'm going to choose the user I'd like to add. Remember, users must first be added at an organization level. If the user is in Capella, they can be selected from the dropdown menu. If the user is not in Capella, they will not be present in the dropdown menu. From here, I'm going to give this user project owner permissions and I'm going to click Add User. Capella has told me that I've successfully added one user, and now Michelle Burns has been given options to work within any clusters within this project. Within the user options were five different roles, and I'd like to show you where you'd find out what the capabilities of each of those permissions are. You can do that by clicking on Documentation on the left, then click on Organizations and Access, Organizations, and Manage Users. This is the most up to date information
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=250)** about [[Couchbase]] Capella supplied by Couchbase. And here you can learn more about the capabilities of each of the users within Capella. I'd also like to make a quick note here that my examples cover multiple projects and clusters, but please be aware that the free trial version of Capella can create many, many projects, but you can only spin up one data cluster. If you need more than one data cluster, please upgrade to the full access version. While segmenting [[Databases]] into projects takes time, once identified, they enhanced database visibility and data access security well worth any time spent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (2), [[Data Security]] (1), [[Data Structures]] (1), [[Databases]] (1)
> **UI Navigation:** click on (3), dropdown (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Spinning up cluster with buckets, scopes, and collections](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=0)** - [Instructor] With [[Couchbase]] Capella's 30 day free trial, you can easily take a Couchbase database for a spin. This section will show you what you get and how to view the data included with the trial cluster. Let's start with an example. As a Freedom Air database manager and developer, I came to Capella to see how Couchbase can handle my needs, but in order to do any of these things, I need to know how my cluster is configured, and where to find my data. In order to do that we will navigate over to the Capella UI. Now that our cluster is up and healthy, indicated by this green dot here, let's look at some of the configurations that are set by default. First, I will click the name of the cluster to view the details, and then I will click Configuration across the top. As part of the trial cluster we're on a basic plan, which enables us to have a one node cluster with four of the Couchbase services, including data, index, query, and search. My compute viability is two virtual CPUs at eight gigabytes of RAM. My disc type is GP3, Amazon's EBS general purpose SSD volume type. My storage capacity is 50 gigabytes. And I have 3000 input output operations per second, or IOPS. If you want any more than what's here, you can always hit Upgrade to get the full access version of Capella.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=98)** Now we're going to navigate to Buckets to view the data that Couchbase has put into this bucket by default. I can see here that my bucket, which is called travel-sample, has over 63,000 documents in it. It uses 76 MIB of in memory data. And the disc used is about 55 MIB. If I click on the title of the data set, I can make adjustments to the bucket behavior under Advanced Settings. For example, I can enable Flush or specify a time to live for documents. Both of these settings are disabled by default. Before we get any further into the documents, and how they're structured, let's walk through a reminder of how Couchbase breaks documents out. Use the bucket to get the appropriate scope. Use the scope to get individual collections and perform queries across the contained collections. Use the collections to perform key value operations on [[JSON]] or CSV documents. Remember too, that each of these segments align with a relational database in this way. Buckets are [[Databases]], Scopes are Schemas, Collections are Tables, and Documents are Rows. Returning to the Capella UI, where can I find these buckets, scopes, collections, and documents?
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=190)** Within the buckets tab I will click on the three dots icon at the end of the data set row here. Now I can see my options for scopes, collections, and documents. I can also delete the entire bucket if I so choose. In order to see the information specifically in each data set, you can click Documents, and you can see that documents are separated out by the bucket, the scope, and the collection. I can also change the limit of documents I see on a single screen from 5, to 200. Finally, if you wanted to delete all the preset data, and import your own data, you would simply need to delete the buckets, and then click Tools and Import, and then import your own JSON or CSV files into your own named bucket. Congratulations, you have your very first cluster in Couchbase Capella and you are now ready to run key value operations, queries, and indexes against the data inside it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (7), [[JSON]] (2), [[Databases]] (1)
> **Env Vars:** mib (2), json (2), csv (2), ram (1), gp3 (1)
> **CLI Commands:** find (2), node (1), make (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Choosing an SDK and an IDE](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=0)** - You probably already know, but if you don't, you have many code language options to choose from when working with [[Couchbase]] clusters. In order to connect your application to the Couchbase cluster housed in Capella, you'll use one of the nine [[Software Development]] kits or SDKs that Couchbase supports. To have this conversation, we'll first narrow down the choices and say our example Freedom Air is a [[Node.js]] shop. and say our example Freedom Air is a Node.js shop. Now I'll jump back into the Capella UI and we'll need to go to documentation so that you can get the most current Node.js SDK. To do that, I'm going to click on documentation, and from here, I'll navigate up to SDKs and you can see all the options that are present with the most current version available. I'll click on Node.js and as you can see, there's getting started, working with data and a variety of other pieces of information. I'm going to click getting started and start using the Node.js SDK. As you read through this information, it's going to be important that you look for the Capella versions of how to connect to a Node.js application. My next step will be to open visual studio code. My preferred IDE or integrated development environment. Visual studio code is a free IDE open sourced on the internet. It can be found at code.[visualstudio.com/download](https://visualstudio.com/download). It can be found at code.[visualstudio.com/download](https://visualstudio.com/download). In VS Code, I'm developing a Node.js project
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=94)** In VS Code, I'm developing a Node.js project called app.js. called app.js. And you could call your project whatever you'd like. I've already downloaded my package.[[JSON]] dependencies. And in order to enter the other Couchbase dependencies into the IDE, I will type [[npm]], install, Couchbase. I will type NPM, install, Couchbase. And hit Enter to execute. After the command executes, I can click on node modules and see that the Couchbase dependencies have been added. Also, I can click on package.json to see the dependency declaration here for the version 3.2.5. for the version 3.2.5. And so with that, the dependencies are loaded into the IDE. Now I know that developers love to have code samples. So I'd like to provide you with a Node.js connect code that will make it easier for you to connect to Capella. When connecting Node.js, you will of course use asynchronous APIs. In this connection code example, you can see that async precedes the cluster method and the await prefix must be used or you'll need to work with a returned promise object. And for a Capella connection, you'll need to whitelist the Capella cluster URL seen here to make the connection securely. And there you have it. That's how you can choose an SDK and add the appropriate dependencies
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=186)** so your project is ready and you are up and ready to get coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (10), [[Couchbase]] (7), [[JSON]] (2), [[npm]] (2), [[Software Development]] (1)
> **CLI Commands:** node (11), npm (2), make (2)
> **File Paths:** node.js (10), app.js (2), package.json (2)
> **Env Vars:** ide (4), sdk (3), npm (2), url (1)
> **Prerequisites:** getting started (2), install (2), you'll need (2)
> **UI Navigation:** click on (4), go to (1)
> **Versions:** version 3 (2), 2.5 (2)
> **Tools:** visual studio (2), vs code (2)

#### [Connecting to Couchbase through Capella](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=0)** - [Instructor] You know, we've waited long enough. Let's get Freedom Air's trial cluster connected to [[Couchbase]] using Capella. To make life easier, I've pasted an example of the no js connection code into our IDE Visual Studio code. Let's see what we have here. Across the top, the requirements statement allows access to the couchbase modules. Then we have four variables to define, endpoint, username, password, and bucketName. Below that is the connection code, and at the bottom, I've customized this by adding a ping to verify the connection, and a console.log to print the ping result. Whether you use these additional lines is totally up to you. Now where do I get these variable definitions? That'll be back in the Capella UI, so let's go there now. My first step when I'm looking at my cluster is to click on the cluster name to view details. Then I will click the connect menu. Here is a variety of information I'll use to connect to the couchbase cluster. But first, I'd like to show you a developer's paradise of information. If I click on SDK Examples, you can choose any of the language examples, and use this code as a starting point for your application. To close this, I'll click the x, and we're going to copy the endpoint here, as that's the first variable that's asked for. Then, I'm going to go up to Buckets,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=94)** and I'm going to take note of our bucket name, as that will be required for the connection code as well. I'll navigate back into the IDE, and I'll paste my endpoint address. Then, I'll key in travel sample, as my bucket name. The other two variables I need to define are username and password. It's very important to call out that you will need to add a user with database credentials, which is different from the username and password that you use to sign into the Capella UI. I'll return to Capella. I've returned to Capella in order to add database credentials by clicking connect and scrolling down to database access. By clicking connect, I can see where we have database access and I'll click manage credentials. From here, I'll click create database credential, and this will automatically list information from users that are added into Capella. In order to make this easier to remember, I'm going to change the user name to FAClientApp, and then I'll key in an appropriate password. As you can see, Capella will keep track of whether or not you've hit your password requirements, and I'm going to want to take note of this password.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=189)** Finally, I can make bucket selections, scope collections, and access selections, using the dropdown menus. So I'm going to use the bucket travel sample, I'll focus on all scopes in the bucket, and then, I can choose my access of read, write, or read and write. Once I've made my choices, I could add another user by clicking this button here, but I'm good with this one user for now, so I'll hit create. Capella tells me that database credentials has been added, and now, I can return to my IDE to key in those variables. My user name is FAClientApp, and my password is here. The last thing I need to do is make sure, that my IP address is whitelisted, so that couchbase can connect to my client application and where it will run from. This connection could be your local pc or possibly an [[Amazon EC2|EC2]] instance where the app runs. In order to whitelist the connection, I'm going to click the back button, and now I'm again on the connect menu. I'm going to click manage allowed IP, and as you can see, there are no IPs allowed here, so I'll add an allowed IP.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=284)** I'm going to make a choice whether or not I'd like this to be a temporary add or a permanent add, and I'm going to leave it at permanent. Also, because I'm working from my local machine, I can use the button here, add my IP, or I could paste in a different IP address if I'd like to. From here on, I'm going to click add IP, and Capella will tell me, that this IP address has been successfully added. Now we're ready to test our connection. We've entered all of the variables here, and we'll save the code, and then I'll key in node, app dot js, and hit enter to run the code. As you can see, the ping result has told us, that the connection was successful, and there you go. Freedom Air's trial cluster is now connected to couchbase using Couchbase Capella.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (6), [[Amazon EC2|Ec2]] (1)
> **CLI Commands:** make (5), node (1)
> **Env Vars:** ide (3), sdk (1), ec2 (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Code Identifiers:** bucketname (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Get your Couchbase up and running](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=0)** - [Instructor] It's time to apply the skills we've discussed in this chapter. When you've finished with this challenge, you'll have your own [[Couchbase]] Capella single-node cluster. You'll be able to connect to that cluster and start developing against it. Working this challenge will mean you will complete these steps. First, go to cloud.[couchbase.com/sign-up](https://couchbase.com/sign-up) and sign up for a free trial cluster. This may take a few minutes. Second, view the data that is automatically loaded into that cluster or, if you prefer, import your own data to work with. Third, add a user under the Database Credentials area of the Cluster Connect menu. Fourth, whitelist your IP address to allow your application to connect to the Couchbase cluster. Fifth, choose whichever IDE, integrated development environment, and [[Software Development]] kit, SDK, you prefer to code with. Look at the exercise files for website addresses for Visual Studio Code IDE, as well as the addresses of where to find any of the nine Couchbase-supported SDKs. Sixth and finally, enter the appropriate connect code and run your code to show you have connected to your trial Capella cluster. Depending on the setup and download speeds, completing the steps of this challenge should take you no more than 10 minutes, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (4), [[Software Development]] (1)
> **Env Vars:** ide (2), sdk (1)
> **CLI Commands:** node (1), find (1)
> **URLs:** [couchbase.com](https://couchbase.com) (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### [Solution: Get your Couchbase up and running](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=0)** - [Instructor] Now let's walk through the solution to the challenge activity. My first step was to navigate to cloud.[couchbase.com/sign-up](https://couchbase.com/sign-up). I've filled in my information, checked service agreements, and chosen a cloud service and geography appropriate to my database needs. And this is what our [[Couchbase]] trial database dashboard looks like as of today. Please keep in mind that Couchbase Capella is always evolving to provide users with the very best experience, so your dashboard might look a little different. We'll start by looking at the sample data that's automatically imported into a trial database under Explore Data. You can also see the options to import data and to connect, which we'll cover. For now, I'll click Explore Data as we need the bucket, scope, and collection names to connect. Now, I'm in the query workbench, where I will expand the menu for the only bucket in this database. Here, I'll take note that my sample data bucket is called Travel Sample, then I will also take note that the scope name I'm looking for is Inventory, and the collection that I want is called Airline. I'll need all of these for my connection code. I'll click Home to return to the welcome dashboard. If you added your own data, you would've clicked Import Data and followed the steps outlined here
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=97)** under the Import sub tab. Click Home again to return to the main dashboard. And finally, I'll click the Connect option for step-by-step instructions on how to connect. In the Connect menu, I'll want to save the Public Connection String Address, as this will be my variable input for an endpoint. I can click the copy button here. Then I'll follow the first step by clicking Allowed IP addresses. Then I'll click Add Allowed IP and add my current IP address, and I'll click Add Allowed IP. From here, Capella will tell me that that IP address is now added and the connection can be made between my database and my machine. Then I'll follow step two to create my database credentialed user. I'll click Database Access. Then I'll click Create Database Access, and I will add my username, FAClientApp, and a password that fits the requirements. I'll take note of that username and password in order to place that into my connect code. Also, I can select All Buckets, or just have access to one named bucket that's here.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=195)** As well as the scope, and Read/Write access is what I'll want to choose here. I'll click Create Database Access, and Capella will tell me that my database credential has been created. Finally, I'll want to choose my database credentialed user. This will allow the username and password to show up in the next steps, it's really helpful. Based on my SDK needs, I'll make choices in steps three, four, and five of the Connect menu to get the code needed to connect your database. I'll choose Node js as my code, and then I already have installed the Node js SDK, but here you have the opportunity to learn more and download that if needed. In step five, I can choose a snippet of code or the full code sample, which is what I'm going to use. Because I've selected my database credentialed user in step two, I can select my bucket, and then my scope, and then my collection that I'd like to connect to. And now my sample code will include all the information I've already inputted, except the password here, I'll need to enter that. Now I'm in Visual Studio Code,
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=292)** where I've already added my Node js dependencies. Then I brought over the full code from step five of the Connect menu and pasted it. I've checked that the correct inputs are here for the endpoint, the database credentialed user and password, as well as the bucket, scope, and collection name. Finally, I will save the code and then run the connection.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=332)** And as you can see here, all of the different operations that were given to us by the sample code have run effectively. We hope you got through this challenge well, and we're moving on to the next steps of exploring Capella.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (3)
> **CLI Commands:** node (3), make (1)
> **Env Vars:** sdk (2)
> **Exercise Files:** sample code (2)
> **Definitions:** is called (2)
> **Warnings:** keep in mind (1), note that (1)
> **URLs:** [couchbase.com](https://couchbase.com) (1)
> **Cross-References:** in the next (1)


### 2. Completing Key Value Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Completing a Get](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=0)** - [Instructor] As a developer, it's likely your next step is to build out application functionality by coding key value operations. Using the code for a connected [[Couchbase]] database, as you can see here in Visual Studio Code, you'll need to remember that in Couchbase, key value operations are only completed on a collection. We'll need to find a document ID we can use to test the get operation. So we'll return to Couchbase Capella to look up a document ID that currently exists in the Travel Sample bucket. After I've signed in, I'll click on my database name to view the details. Then the Data Tools menu. In order to see the documents within this bucket called Travel Sample, I'll want to make sure the Documents area is selected. I can use the dropdown menu to select my bucket, my scope, and my collection. And then I'll take note of this document ID, airline_ 10123. That's what I'll use to test my get operation in my IDE, which will return to now. For simplicity's sake, I've pasted in the get code here and let's see what we've added. First, we have the named collection that is attached to the collection name airline up above here. Then I've asked for the get result
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=95)** with the await prefix and the get method. The document ID that I've noted is here. Finally, I'll ensure the result is returned as an object by using console.log. And as you can see, when I ran the command, document ID 10123 was returned with the information here. You have now completed a get using the [[Node.js]] SDK in Couchbase. Continue on to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (4), [[Node.js]] (1)
> **CLI Commands:** find (1), make (1), node (1)
> **Env Vars:** ide (1), sdk (1)
> **UI Navigation:** click on (1), dropdown (1)
> **File Paths:** node.js (1)
> **Tools:** visual studio (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Completing an INSERT, UPSERT, and DELETE](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=0)** - [Instructor] When getting started with [[Couchbase]], you might find that it helps to spend a little time better understanding how to perform required application tasks. Let's talk about the common operations insert and delete and Couchbase's operation of upsert. As you probably already know an insert assumes a document does not exist and if the document for a given key does not exist the code provided inserts the document. This is the opposite of a delete operation assuming that a document does exist and the code provided removes that document from the database. An upsert is specific to Couchbase. It does not assume the preexistence of a document. And so it will take one of two actions. If a document does exist, that document is updated for a given key. And if the document does not exist, it is inserted just like an insert operation. Now, we'll return to the IDE to show you what an upsert looks like. This code should be familiar to you by now with the cluster information, the bucket, and the scope already listed. To make life easy, I'm going to paste the [[Representational State Transfer (REST)|rest]] of the code in for an upsert. And, as you can see, we've added the collection listed as airline, the result is set to an upsert and this is the document that we are upserting. If you need a simple insert, you would simply change this method from upsert to insert.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=97)** Now, I'm going to save the code, and I will key in my run command, and hit Enter to execute the code. As you can see, I have a CAS value, and a token for this newly upserted document because previously airline 2212 did not exist and now it does within the database. I will now replace the information for the upsert with the code for delete. And I have that here. I'll copy, and then paste this back into the IDE. And, with this one, we're simply adding the result, and removing the document labeled airline_10 which is the ID. I'm going to save this information. And then, again, I'll run the code. And, as you can see, this operation has been completed. And the document airline_10 has been removed from our database and, just like that, we've completed three different operations: insert, upsert and delete for our database set of documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ide (2), cas (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Handling errors and exceptions](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=0)** - [Instructor] Okay, so everything is going well, and your code has been running the exact results you want, but what happens when an error or an exception does come up? We all know that errors happen, and the best developers will always test and plan for them. To see how to do that, we'll slip back into the Visual Studio Code IDE. Here, I've written and saved code to remove a document called airline_10. When I go down to the terminal and run the code,
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=37)** I can see that I have a document not found error, also known as a document not found exception in languages other than [[Node.js]]. If uncaught, errors could be propagated to the web layer, which can cause headaches for you as the developer. To improve this and to save time, I'll paste a try-catch block into the code. And as you can see here, I've added an error message and a key identifier for the erroring operation. I'll hit File and save the code, and now I'll go into the terminal and run the application. Success, the error is now handled in that it's caught and displays a user-friendly message with a key reference. And that's how we can code our application to provide appropriate and helpful outputs when errors take place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Env Vars:** ide (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Complete a key value operation using Node.js](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=1)** - [Narrator] I hope you feel ready and excited to try out the skills we've just discussed by completing this challenge. When you finish this challenge, you'll have working [[Node.js]] code for one, maybe two key value operations. If you want to use a different coding language please reference [[Couchbase]]'s website on SDKs for more examples. Okay, so this challenge asks you to complete each of these steps. First, go to Capella to view your clusters data set making note of the names of the buckets, scopes, collections, and document IDs for the data you'll use. Second, in the IDE of your choice, complete one of two key value operations. Either get or delete. If you really want a challenge, you can do both. Please note the solution to double check your work will be in Node.js. Third, change the document key so the operation fails. Fourth, add a try-catch block to the operation with the text for catching the error. Fifth and finally, run the code and receive the error information as expected. Depending on your familiarity with the coding options, this should take no more than about seven minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Couchbase]] (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Complete a key value operation using Node.js](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=0)** - [Instructor] So, how did this challenge go? You have some options to choose from so I will show the code for two different key value operations. Please remember that I'm using the no-js code. If you're using a different language, please refer to the [[Couchbase]] documentation for those code examples. I'll start by pasting in the get code. When looking at this code, please note that any of the key value operations will start by obtaining the bucket, scope, and collection, as you can see here. The catch block is written to catch any errors thrown during the get operation in the try block. Now I'll save this and I'll run the application. And as you can see, I've received my expected results. And for those of you who chose the delete operation or for those super students who did both operations, I'll paste in the delete code. Again, you'll notice that we've still named our bucket, scope, and collection. We've entered the appropriate try catch block and we've changed the user friendly messages as appropriate to a delete operation. Now I'll save this code and I'll run it. And voila, I've received the expected result. I hope this challenge felt simple and understandable. And if you'd like to try
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=93)** other operations or other languages, please refer to Couchbase documentation for more code examples by SDK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (2)
> **Env Vars:** sdk (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Querying with Couchbase

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL and SQL++ and Indexing In Capella](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=0)** - [Instructor] If you are familiar with [[SQL]], then you're familiar with [[Couchbase]]'s SQL++, which you may have seen referred to as N1QL or nickel. So what is SQL++? Well, it used to have a different name. SQL++ is still the Couchbase query language that harnesses the power of SQL and the flexibility of [[JSON]]. SQL++ manipulates JSN documents in the same way that SQL manipulates data in [[Relational Databases]]. SQL++ extends SQL to handle nested data that is both schemaless and non-uniform and SQL++ handles data containing arrays and objects. Here you can see the side-by-side comparison, where the syntax and standards are nearly identical. There's only a small change in your from statement, so if you know SQL, then you know SQL++. Now we'll return to the Capella UI to see how easy it is to work with these statements in our query workbench. From our database dashboard, I'll click on my Cluster or Database name. Remember those two words are interchangeable, and then I'll click on Data Tools. And finally, I want to make sure that query is selected. There are two dropdown menus here that are very important because you'll need to select the bucket
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=93)** and scope so your query works on the correct data. To make things easier, I'll paste in a query where I'm looking to find US airlines. I'll hit the Run button to run the query and Capella will give me a host of different information. On the right here, you can see the indexing advice as well as build suggestions. You can also see any indexes that currently exist, which may help you to improve your query. The Recent Queries button allows you to see past queries and any indexes that you've entered. And down below you can find the last run, the number of documents returned, the size, the time elapsed, and the execution time. Finally, your data will output in these different formats. JSON will always be the default view. However, you can switch to table, chart, plan, or plan text based on your needs. You also have the ability to download results, copy the query plan text, or expand this area. There are a few special considerations you'll want to keep in mind when you're moving into SQL++ from SQL. These are the DISTINCT function,
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=186)** special characters, case sensitivity, and the use of Couchbase's UPSERT. Please note that while using SQL++, you can use the DISTINCT function in the same way you could use it when querying with SQL. You'll need the use of back ticks when your collections or field names have any special characters or reserved words. The example here illustrates the correct use of back ticks when querying in Couchbase. Unlike SQL, attribute descriptions and bucket names are case sensitive, so that's another difference you need to keep in mind. However, querying keywords are not case sensitive as it's shown here on the screen. Finally, please know the UPSERT command, which is specific to SQL++, can replace the content of an existing document or it can insert a document that does not yet exist. This is something not available in SQL. Just so you have it on hand, here's a comprehensive list of common operations used in SQL++ querying and their definitions. Please take special attention for the formatting of the FROM and JOIN syntax and definitions. Now we're going to shift to another area where SQL++ is important and helpful: indexing. In a modern world, everyone needs more speed and no one wants to be the developer
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=281)** of a good but slow application. To that end, indexing becomes incredibly important. Just so that we all know what we're discussing, we'll define an index as a data structure queries use to find records in a database faster. In short, adding indexes creates more efficient paths to frequently searched data. And who creates those indexes? You the developer are definitely in charge. However, Capella is structured to work with your data expertise to create the very best indexes your data can offer. Please keep in mind that at Couchbase, indexes are required, but if they help your users get the data faster and more accurately, why wouldn't you use them? So let's see this in action as we return to the Capella UI Query Workbench. I'm back in the Workbench, and what I'd like to do is paste in this query first without any additional indexes, only with a primary index. This query is going to call for the named and created attributes of all documents within the airline collection in the inventory scope. I'll click Run to run the query. And as you can see, this query has given us 10 documents at the byte size of 245 bytes in 11.7 milliseconds. On the right-hand side here, you can see the recommendations for different indexes.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=376)** And all I need to do in order to apply this recommendation is click Build Suggested. This section allows you to see that that index has been added. It moved from 13 indexes to 14, and now we'll set this query to run again by clicking Run.
>
> **[6:42](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=402)** And just like that, our same amount of information, 10 docks with 245 bytes was returned in three milliseconds rather than 11.7. To go from 11 to three milliseconds might not sound significant, but when thousands and thousands of transactions are running every second, the time savings that results in a more efficient query is highly significant. Within Capella, you can manage indexes by toggling to the Indexes menu, and from here you have the ability to click the Delete icon, the Trashcan icon here to delete the index if you so choose, type in Delete, and you simply delete that index. The list of indexes that's here is part of our sample data. So if you bring over your own data, you'll need to keep in mind that you'll add your own indexes. However, on every query that's completed, Couchbase will offer you different build suggestions based on the data present.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (21), [[Couchbase]] (6), [[JSON]] (2), [[Relational Databases]] (1)
> **Env Vars:** sql (21), json (2), distinct (2), upsert (2), n1ql (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** click on (2), dropdown (1), select the (1), switch to (1)
> **Warnings:** keep in mind (4), note that (1)
> **Prerequisites:** you'll need (3)
> **Versions:** 11.7 (2)
> **SQL:** join (1)

#### [Using JOINs and Parameters with SQL++/N1QL](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=0)** - [Instructor] Setting JOINs and parameters are two ways to enhance querying in [[Couchbase]]. JOINs are connections between information in different document sets. They can increase efficiency and make querying even more effective and faster. The best strategy when writing effective JOINs is to let the end result guide the journey. Before completing a JOIN, stop and ask: what information do I want users to see and access? For example, there may be many times when I'd like users to see more information than what is in one document alone. Let's look at an example of what I mean. These two documents have many points of data, but on the left, an airline code of airline_137 will probably not be familiar to my users. So I'll JOIN my right side document with the airline key 137, and this will give users the airline name, as well as other details they might need. Because Couchbase is a key-value store and this is a key-value operation, there is no index needed for this JOIN. Now let's see what this looks like in the Capella UI. From my dashboard page, I'll navigate to Data Tools and then I'm on the Query tab for the query workbench. I'll need to remember to select the appropriate bucket
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=95)** and scope from the dropdown menu. Then to save time, I will paste my query into the box. As you can see here, the JOIN is included in the query language. I'm joining the collection called route to the collection called airline. I'll click Run and the query will call up all the appropriate information in both documents. Then when a user calls this information, they will not only see the airline ID, but the airline's name and other relevant information. Here on the right-hand side, you can see the different information that might be helpful and the build suggested opportunities. Another way to increase query efficiency is with the named and positional parameters, which can help you ensure common queries can be executed effectively even if the variable values change often. When a query comes in like this one, Couchbase parses all statements and prepares an execution plan as you can see here. When querying with named or positional parameters, the query plan is prepared once and then the query can be easily executed any number of times thereafter with different values. Let's see where to find this in the Capella UI.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=189)** Again, I've returned to my query workbench, and now I'll make sure the correct bucket and scope are selected, and then in order to deal with this named parameter, I will first paste in my query. Then I'll need to go to query options and down to named parameters. Positional parameters are also here, and the process I'm about to show you works for either. Click into the plus sign and where it says name and value, I will key in information listing name, and giving the value of Mile Air as the parameter that may change. I will click Save and then I will run this query. Now, regardless of the number of times your parameter changes, your query will not be slowed down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (3)
> **SQL:** join (4)
> **Env Vars:** join (4)
> **UI Navigation:** navigate to (1), select the (1), dropdown (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)


### 4. Getting Your Couchbase Database to Perform Effectively

[↑ Back to Table of Contents](#table-of-contents)

#### [Evaluating database performance](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=0)** - [Instructor] By using the single pane design of the Capella UI, you can see many different metrics for your trial database. Let's look at what's here. In order to see the metrics, I'm going to click the cluster name or the database name, and then I'm going to click monitoring. As this is a trial database, I'm just getting started and we'll be limited in what we can see, but let's look at what's preloaded and what you can add. Capella pre-fills metrics for the data service, and I know that because it says data service here. I can add metrics for the other services by clicking this dropdown and then scrolling through. And as you can see, as the service changes, so too does the name. I can also get rid of any one of the metrics by clicking the X in that area. And as you can see, Capella will automatically update the screen. If I want to add any of the metrics, I can see that my metrics are highlighted, and I'll add back in the current active items by bucket. And I just have to note that any newly added metrics will always be at the bottom of the screen. You also have the ability to set your monitoring frequency
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=95)** from as little as 30 minutes to as long as 30 days. As you can see, the default is set for one hour, but as I change my monitoring, the metrics will update automatically. You can also force a refresh of the screen by clicking this icon here, or you could set an automatic refresh for one or two minutes, based on what your needs are. And that's a high level overview of monitoring. But next, let's go into the settings category to see what else we can find. Here, I'll click settings. And on the left hand side is a menu that allows you to see many different sections of your database settings, including your configuration, where I can look at my plan, I can look at the buckets that exist in my trial database. I can look at the nodes and get their specific host names, copying that if I need to connect to just that node, and I can also see the different services available. If I wanted to upgrade to any more of the services, I would need to click this upgrade button and add to my trial cluster, as only four services are allowed on a trial cluster within Capella. Also, I have my networking options here, as well as my security options. Under general, I can make changes to my database name,
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=193)** so if I wanted to change this to Freedom Development, I could click Save, and now my database has a different name, which may impact my code. So make sure that you keep track of that. I also have the ability to turn off my database, and this is recommended to save costs only on non-production [[Databases]]. You can turn off a database for up to 30 days, and in order to learn more, click the learn more icon here. You also have the ability to disable the playground setting that you may have seen at the top right of your screen, or you can delete your database. Finally, on the far right is a summary of our database as it exists today. It's AWS, its US location is here, the version, the CIDR, the support tickets open, when it was created, and who it was created by. Again, if you wanted to upgrade to the full version of Capella, you would simply click upgrade, and then look at the different options that you have available to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **CLI Commands:** make (2), find (1), node (1), aws (1)
> **Definitions:** is a  (3)
> **Env Vars:** aws (1), cidr (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)

#### [Scaling vertically and horizontally](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=0)** - [Narrator] As the needs of your database change, Capella can scale in a matter of minutes, rather than hours or days. Please note that all the examples here are in the full access version of Capella and will require purchase beyond the free trial. Also note that as you make scaling changes, your credit costs will change and you probably want to check in with your organization owner before you save those changes. After your cluster has been up and running for a while, you can click into the cluster details and view the metrics for CPU Utilization by Node, which is a common measurement to judge database performance. Let's imagine this CPU usage is too high. What can I do? I can scale in three different ways. I'll click on "Configuration" to see my options. Here I can see that I currently have three nodes, which is the minimum requirement for a production-ready cluster. I can increase that number easily by using this dropdown here, and I'll up that to four nodes. From here I will click "Update Configuration" and Capella will ask me to confirm my options. I'm fine with what's here, so I'm going to click "Confirm" and now Capella has told me that the configuration will be successfully updated and to allow around 15 minutes for the changes to take effect. However, it could take less time than that. And just like that, my number of nodes has been expanded
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=94)** and my CPU usage will likely go down. Another option for scaling is to utilize the Compute feature here. As you can see, we currently have four virtual CPUs with 16 gigs of RAM. If I use this dropdown menu, I can see a variety of other options. And let's just say we'll double everything by changing this to eight virtual CPUs and 32 gigs of RAM. Again, if I make this change, my credit costs will be changed as well. You may want to check in with your organization before you do that. Capella will ask me to update the configuration and then to confirm my choice. Once I do that, Capella will tell me that this could take up to 15 minutes. But again, it may take less time than that. Okay, so in a matter of about 20 minutes, our virtual CPUs have doubled and our RAM capacity has also been doubled. Finally, I can also exercise an upscale in storage capacity by clicking up here or down as needed. Again, our standard is 50 gigabytes, but you can raise that standard as needed. Clicking here, you want to pay attention to the fact that the storage is per node. So keep that in mind. You can update the configuration by clicking "Update Configuration" again, and confirming. And Capella will tell you it takes about 15 minutes.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=191)** Again, that time varies. This will also impact your credit amount. So again, you may want to reach out to a member of your organization before you make these changes. With these three options in the full access version of Capella, I didn't manually add or redistribute in order to scale my cluster. I made the selections and allowed Capella to automatically make the needed adjustments, in minutes rather than in hours. All the while my users have had access to my database.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), node (2)
> **Env Vars:** cpu (3), ram (3)
> **UI Navigation:** dropdown (2), click on (1)
> **Analogies:** imagine (1), just like (1)
> **Warnings:** note that (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Applying replication](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=0)** - [Instructor] Database security and availability are at the top of any manager's priority list. That's why database replication, another feature of Capella, is so helpful. Please note that when using this feature you'll be required to purchase the full access version of Capella beyond the free trial. Also adding replication may change your credit costs. So you probably want to check in with your organization owner before you save these changes. What is replication? It's having two copies of a database in two different locations to ensure that if one goes down the other can take its place quickly and without user interruption. Let's jump into Capella to see where we can find this feature. First, I'm going to look at my clusters that I see here on my single pane dashboard view. It's important to note that you must have the original and the replication clusters created prior to getting started with replication. Here, you can see I have Freedom Air 1A, and that's listed in the United States in the state of Oregon. And then I have my replication cluster as Freedom Air 1B, that will be in the European Union in the country of Ireland. So the geographic location of the server will hopefully ensure one cluster outage is not impacted by the other. I'm going to click into my Freedom Air 1A cluster, and then I'll select Replications. From here, I'll start my replication by clicking Setup Replication.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=93)** I have some options to choose from. The first is a one way replication or two way. I'm going to leave it as one way for now. Then I'm going to choose the clusters that will be replicated. Freedom Air 1A is selected because that's a cluster I clicked into. I will use the dropdown menu to choose the other cluster. And it's important that if you didn't create the cluster in the previous step, you won't see this other cluster in the dropdown. From here, I now can select the buckets to work from as well. I'm going to choose my source bucket. And then it's important that your target bucket has the same labeling as your source bucket in order for the replication to complete. I'm going to click Next. And from here, the collections have the same requirement. Scopes and collections that do not exist on the target cluster with the same names will not be replicated. I'll click Next. And I could set filters if I'd like to, but for now I'm going to stick with the defaults, and I'll click Next again to go to the settings, and I can make the choices here, but for right now, I'm going to stick with my defaults. From here, I will click Setup Replication, and Capella will tell me that this replication is currently taking place. It's important to note that Capella will ensure operations conducted during the time of replication are completed. As soon as the replica database is available the operations that took place
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=187)** during the setup time will complete. And just like that, Capella has let me know that the replication has been added. My database is replicated and available in case a node or cluster fails. Capella has automatically made all the adjustments to ensure my two [[Databases]] are synchronized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **UI Navigation:** dropdown (2), select the (1), go to (1)
> **Prerequisites:** setup (3), getting started (1)
> **CLI Commands:** find (1), make (1), node (1)
> **Warnings:** note that (3)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=0)** - [Narrator] I want to say thanks for joining me on this course, and while this may be the end of your overview, I hope it's just the beginning of your journey with [[Couchbase]] and Couchbase Capella. As is the beauty of [[LinkedIn]] Learning, you can go back and review any section or information that I've shared. And because our mission at Couchbase is always to provide a world-class [[NoSQL]] database, we are constantly evolving and there will always be opportunities to learn more about Couchbase's latest and greatest developments and upgrades. Please consider bookmarking [couchbase.com](https://couchbase.com) as you see here for the latest news, updates, trainings, and other information. Also, feel free to learn more about Couchbase by checking out the Couchbase Community Hub at community.[couchbase.com](https://couchbase.com), or take a look at our Discord page, where you can join all of our couch base developers and enthusiasts in Couchbase events, hackathons, [[Live Streaming]], and more. Finally, please feel free to connect with me or any Couchbase employees on LinkedIn. Please consider me as a Couchbase resource. I'd be happy to answer any questions you have or point you in the right direction to find the answers you need. At Couchbase, we're always looking for ways to improve our world and businesses with efficient, performant, and flexible applications.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=95)** And as you continue your journey, I wish you solid coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Couchbase]] (12), [[LinkedIn]] (2), [[NoSQL]] (1), [[Live Streaming]] (1)
> **URLs:** [couchbase.com](https://couchbase.com) (2)
> **CLI Commands:** find (1)
> **Tools:** discord (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Michelle Burns]]

## Skills Covered

- Database Development
- Couchbase

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Redis Essential Training]] | **7 of 10** | [[Elasticsearch Essential Training (2023)]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Practical Database Examples]] — Database Development
- [[Vector Databases in Practice- Deep Dive]] — Database Development
- [[Database Foundations- Application Development]] — Database Development
- [[Databases for Node.js Developers]] — Database Development
- [[Programming Foundations Databases]] — Database Development

---

[↑ Back to top](#)