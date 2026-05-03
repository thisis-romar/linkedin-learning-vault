---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: mongodb-essential-training
url: "https://www.linkedin.com/learning/mongodb-essential-training"
duration_minutes: 229
duration: 3h 49m
level: Beginner
updated: 4/30/2024
learners: 5271
skills:
  - MongoDB
exercise_files: true
github: "https://github.com/LinkedInLearning/mongoDB-essential-training-3023263 "
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFYT-OXtGVtSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652204728246?e=2147483647&amp;v=beta&amp;t=8E2xX9JTsTymVeo_n5HKlbvsmknNhgoZPIgLl92dE0c"
linkedin_topic: Database Management
learning_paths:
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Node.js- Securing RESTful APIs]]'
next_courses:
  - '[[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]]'
path_nav: '[{"path":"Explore App Development with the MERN Stack","position":12,"total":13,"prev":"Node.js- Securing RESTful APIs","next":"Learning Full-Stack JavaScript Development- MongoDB, Node, and React"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/mongodb
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/MongoDB%20Essential%20Training.md)

![MongoDB Essential Training](https://media.licdn.com/dms/image/v2/C560DAQFYT-OXtGVtSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652204728246?e=2147483647&amp;v=beta&amp;t=8E2xX9JTsTymVeo_n5HKlbvsmknNhgoZPIgLl92dE0c)

# MongoDB Essential Training

> MongoDB is a NoSQL document database with an expressive and intuitive query language. While MongoDB is easy to get started with, there is more to using MongoDB than storing and retrieving JSON documents. In this course, Naomi Pentrel teaches MongoDB essentials, covering CRUD operations, aggregation pipelines, and drivers as well as advanced database features and database administration topics. If 

> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training) | 3h 49m | Beginner | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [An introduction to MongoDB](#an-introduction-to-mongodb)
  - [Features of MongoDB](#features-of-mongodb)
- [**1. Install MongoDB**](#1-install-mongodb) (5 videos)
  - [Self-hosted vs. managed MongoDB](#self-hosted-vs-managed-mongodb)
  - [Enterprise vs. Community](#enterprise-vs-community)
  - [Install MongoDB on Mac](#install-mongodb-on-mac)
  - [Install MongoDB on Windows](#install-mongodb-on-windows)
  - [Install MongoDB on Linux](#install-mongodb-on-linux)
- [**2. Set Up Your Database**](#2-set-up-your-database) (6 videos)
  - [Mongod](#mongod)
  - [Replica set](#replica-set)
  - [Set up a replica set from the command line](#set-up-a-replica-set-from-the-command-line)
  - [Set up a replica set with config files](#set-up-a-replica-set-with-config-files)
  - [Import the sample data](#import-the-sample-data)
  - [Debug](#debug)
- [**3. Working with MongoDB**](#3-working-with-mongodb) (6 videos)
  - [The document model](#the-document-model)
  - [Namespaces, collections, documents](#namespaces-collections-documents)
  - [MongoDB Query Language](#mongodb-query-language)
  - [Indexes](#indexes)
  - [Challenge: Indexes](#challenge-indexes)
  - [Solution: Indexes](#solution-indexes)
- [**4. CRUD Operations**](#4-crud-operations) (11 videos)
  - [insertOne and insertMany](#insertone-and-insertmany)
  - [findOne and find](#findone-and-find)
  - [Comparison operators](#comparison-operators)
  - [Logical operators](#logical-operators)
  - [Sort, skip, limit](#sort-skip-limit)
  - [updateOne and updateMany](#updateone-and-updatemany)
  - [Arrays](#arrays)
  - [Transactions](#transactions)
  - [$expr](#expr)
  - [Challenge: Create app](#challenge-create-app)
  - [Solution: Create app](#solution-create-app)
- [**5. Aggregation Pipelines**](#5-aggregation-pipelines) (10 videos)
  - [An overview of stages](#an-overview-of-stages)
  - [$group](#group)
  - [$bucket](#bucket)
  - [$unwind](#unwind)
  - [$merge and $out](#merge-and-out)
  - [$function](#function)
  - [$lookup](#lookup)
  - [Performance](#performance)
  - [Challenge: Write aggregation pipelines](#challenge-write-aggregation-pipelines)
  - [Solution: Write aggregation pipelines](#solution-write-aggregation-pipelines)
- [**6. Data Modeling**](#6-data-modeling) (5 videos)
  - [Relational vs. document](#relational-vs-document)
  - [Data modeling](#data-modeling)
  - [Flexible schema](#flexible-schema)
  - [Challenge: Create a data model](#challenge-create-a-data-model)
  - [Solution: Create a data model](#solution-create-a-data-model)
- [**7. Drivers**](#7-drivers) (4 videos)
  - [Drivers](#drivers)
  - [Connecting with Python](#connecting-with-python)
  - [Connecting with JavaScript](#connecting-with-javascript)
  - [Connecting with PHP](#connecting-with-php)
- [**Conclusion**](#conclusion) (1 videos)
  - [Advancing with MongoDB](#advancing-with-mongodb)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [An introduction to MongoDB](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=0)** - [Naomi] [[MongoDB]] is a powerful document database that is popular because of its ease of use for both small and large projects. This course equips you with the essential skills you need to know to use MongoDB as a developer. We'll start with installation and setup, and then explore all the MongoDB fundamentals, such as the document model, how data is structured in the database, and what MQL is. Then, we'll learn and practice CRUD operations and aggregations. As the last part, we'll use the MongoDB drivers, which allow you to use MongoDB with any programming language. My name is Naomi, and I've spent a big part of my career working with and for MongoDB. I am very excited to teach you everything you need to know to develop applications with MongoDB. So, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7)
> **Env Vars:** mql (1), crud (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [naomi] (1)

#### [Features of MongoDB](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=0)** - [Instructor] When [[MongoDB]] first came out in 2009, it was exceedingly popular with many web developers because of its ease of use. It allowed web developers to work with data in the same format they were using in their applications, documents. But not only that, developers could work with their data seamlessly while writing code because of MongoDB's native drivers that make data appear like native objects in the programming language you use. There were, and still are, two other main selling points. The first one is that MongoDB was built with distributed systems in mind from the start, allowing users to scale their [[Databases]] vertically and horizontally. And lastly, MongoDB's code is openly available to anyone who wants to see it. All of this was revolutionary in 2009. However, you should also know that MongoDB was still a young technology at that point. It lacked some features many people expected from databases and it even had some bugs. The reason I say this is because many people on the internet still judge MongoDB based on version 1.0, which is now over 10 years old. MongoDB has come far since then and implemented features such as schema validation, ACID compliance, and joins, and it has gone far beyond that, implementing capabilities
>
> **[1:32](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=92)** that make it stand out from the crowd. You want some examples? How MongoDB scales horizontally using sharding allows for data locality, while also giving you the option to reshard on demand. That is industry leading. Want another one? Client-site field-level encryption. If you have sensitive data, like a credit card number, you naturally want to encrypt it. In most cases when we speak about data being encrypted in a database, that actually only means data is encrypted while it's at [[Representational State Transfer (REST)|rest]], not in memory and not in the logs. This feature, however, allows you to encrypt sensitive data before it even leaves the client, meaning it's never unencrypted when it's in the database. These are advanced features and we won't go into them in this course, but they are there for you when you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (8), [[Databases]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** acid (1)
> **Versions:** version 1 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Install MongoDB

[↑ Back to Table of Contents](#table-of-contents)

#### [Self-hosted vs. managed MongoDB](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=0)** - [Instructor] Welcome to the [[MongoDB]] Essentials Course. In this section, we'll install MongoDB, but first, you have to decide where you're going to install MongoDB. And the question you should ask yourself is whether you want to manage the deployment yourself or whether you would prefer a hosted solution. So let's talk about both options. If you choose to deploy MongoDB on your own resources, there are some responsibilities that come with that. The first one is that you need to select and maintain appropriately performant [[Hardware]], either locally or in the cloud, and then you need to ensure high availability of that hardware. Think about running nodes on their own hardware in different data centers or with different cloud providers to maximize this. Then, you need to think about security for your infrastructure and for your deployment, and you need to think about monitoring your deployment and being able to recover from failures, ideally automatically. You also need to think about managing and monitoring backups and ensure this is tested frequently. MongoDB also does release new versions every now and then, so you'd also have to manage version upgrades. And if your application grows and your database requirements grow, then you also have to think about scaling the deployment by adding more resources or more nodes, so you need to be able to do that. If you're going to go down this road, I suggest you have a look at MongoDB Agent. MongoDB Agent is a service that helps you
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=94)** perform automation, backup, and monitoring for your self-hosted deployment. However, you can also go with hosted MongoDB Solutions. If you would prefer to outsource the tasks I just mentioned, there are multiple service providers that offer MongoDB as a service. For this course, you can choose any deployment option locally or in the cloud. If you deploy MongoDB in the cloud, you need to make note of the connection string, which looks something like this. Regardless of the deployment option you choose, you will need to install the MongoDB Shell and the MongoDB Database Tools on your machine for this course. We'll install all three, MongoDB, the MongoDB Shell, and the MongoDB Tools in the next few videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (15), [[Hardware]] (3)
> **Prerequisites:** install (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Enterprise vs. Community](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980&t=0)** - There are two different versions of [[MongoDB]] that you can install on your machine, MongoDB Community and MongoDB Enterprise. The core features for developers are the same, but MongoDB Enterprise offers advanced security options, additional storage engines, management tools, the MongoDB Enterprise operator for [[Kubernetes]], and the MongoDB Connector for BI, which is going to be interesting for you if you are used to interfacing with a database using [[SQL]] or any tools that use SQL. For this course, we are going be using MongoDB Community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[SQL]] (2), [[Kubernetes]] (1)
> **Env Vars:** sql (2)
> **Prerequisites:** install (1)
> **Speakers:** - there (1)

#### [Install MongoDB on Mac](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=0)** - [Instructor] In this video, we are going to install [[MongoDB]], the MongoDB shell, and the MongoDB tools on a Mac. If you are not on a Mac, please watch one of the other two videos. My favorite way of installing MongoDB is using a tool called m, which is a MongoDB version manager that allows you to have multiple versions of MongoDB installed at the same time. To install m, we're going need something called [[npm]], which is the Node Package Manager. If you don't have Node installed already, I recommend you look for something called nvm, which is the Node Version Manager, and use it to install the latest version of Node. If you're not sure whether you have Node installed, go to your terminal and type in npm version. If you get back a document like this, you have Node installed and can continue as is. All right, let's get back to installing m. So, let me copy this command over here and paste it into my terminal. All right, that doesn't work, because it copy-pasted this dollar sign, which we don't need. I don't know why it does that by default. Anyway, now we've got that installed, I can use m to install the latest version of MongoDB by just typing in m latest. All right, this is now asking me to confirm whether I want to really install MongoDB 5.3.0,
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=96)** and I do, so I type in yes. All right, that's installed. Now it's telling me that I should make sure the PATH includes the directory where MongoDB was just installed. I know it does, but you may want to or need to add this to your PATH. All right. To check that we can actually run the command, let's just run the mongod command and check which version we've got here. Right, that's returning version 5.3. So everything's good to go here. Now the next thing we want to install is the MongoDB shell, and we're going to be using Homebrew for that. Homebrew is a package manager for MacOS, again, if you don't have Homebrew installed, please pause here and install Homebrew, and then return to this video. Okay, so, first thing we need to do is to tap mongodb/brew. Okay, now we should be able to install mongosh. Okay, that should be good to go. So let's test that that worked by running mongosh --version. That returns version 1.2.3. That's fine, good to go. And now, all we need to do is to install the MongoDB database tools, so which we'll also use brew. All right, that's mongodb-database-tools.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=191)** Okay, cool. Now that's all installed, and to test that, I am going to run mongoimport. Okay, and that's giving me an error here that no collection was specified, which is what I expected because I didn't specify a collection, but it tells us that the command is at least installed. And we're good to go. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (13), [[npm]] (2)
> **CLI Commands:** node (6), npm (2), brew (2), make (1)
> **Prerequisites:** install (9)
> **Versions:** 5.3.0 (1), version 5 (1), version 1 (1), 2.3 (1)
> **Env Vars:** path (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### [Install MongoDB on Windows](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=0)** - [Instructor] In this video, we're going to install [[MongoDB]], the MongoDB shell, and the MongoDB tools on [[Windows]] without using WSL, the Windows subsystem for [[Linux]]. If you're not on Windows, please watch one of the other videos. To install MongoDB on Windows go to the MongoDB documentation and download the installer for the latest community version of MongoDB. On the installation instructions page for Windows, you're going to scroll down until you find the MongoDB download center. Click on that link and it will take you to the download center where you can download MongoDB Community Server. Here you're going to select the Community Server package, and then you're going to select the options for your specific platform. Once you've done that, click on download, and it will download MongoDB. Once downloaded, run the installer by clicking on the file you just downloaded. This is the MongoDB Installation Wizard. To begin with, click next to continue, then accept the license agreement, and click next. Now it's going to ask you whether you want to install all of what MongoDB has to offer, or a custom install. For this course we're going to go with the custom install because we don't need everything. Next, it's going to ask you to specify where you want to install MongoDB.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=93)** For this course, you can go with the default location and click next. The next configuration screen is going to ask you whether you want to install MongoD as a service. Because this course is going to show you how to do different deployments with MongoDB, you do not want to install it as a service, so you're going to un select install Mongo D as a service and then click next. Lastly, it's going to ask you whether you want to install MongoDB Compass, which is a graphical user interface for MongoDB. For this course we're not going to be using that, so you can un select that and click next. Then click install to install MongoDB. Now MongoDB is installed, click finish. To make it easier to access MongoDB, we will add the folder where the MongoDB binaries were just installed to the path. Click on the Windows icon, and then type in environment variables. Click on edit the system environment variables to bring up the control panels for the environment variables. Click on the environment variables button, and that will bring up all of your environment variables. In the system variables panel click on path and then edit. Click on a new line and then click on browse. Here we're going to find the MongoDB binaries now. For me, that is under local disk,
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=188)** and then program files, it's under MongoDB, server, and here's the binary folder. So we're going to click on it, click okay, and I'm going to click okay a few times to exit out of these menus, and then we're good to go. Now I can click on the command prompt to open up a new command window, click yes, and now I can type Mongo D.exe. And then I'm going to pass at the dash dash version option just so that it returns the version for testing that it's installed correctly. And it's returning the version, which means it is installed correctly. Now while we are here, I want to point out that for the [[Representational State Transfer (REST)|rest]] of this course, we will be using the Linux syntax, well I will be using the Linux syntax when I am starting MongoDB. So whenever you see the command Mongo D, you will have to add dot exe at the end of it for it to work on your machine. Most command line arguments are the same with MongoDB, but you will need to also specify paths to files differently based on your operating system. All right, with MongoDB installed, I'm going to close this command line window, and then I'm going to go to the MongoDB documentation for installing Mongo SH, the MongoDB shell. On this page, I'm going to scroll down to find the MongoDB download center and click on that.
>
> **[4:46](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=286)** Right, here we've got the MongoDB shell. I'm going to select version 2.2.2. The Windows is correct. Then I'm going to use the MSI installer instead. I'm going to click on download. Right, that's downloaded, so I'm going to click on the installer and go through the installation wizard. Click next to continue, select where you want to install the MongoDB shelf, the default location is okay, so click next and then install. This one is very quick. There we go, it's already done, so I'm going to click finish, and that's Mongos sh installed. If you want to test it, go once more to open up a command line prompt, and then just type in Mongo SH dash dash version. If that returns 2.2.2, it is installed correctly. There we go, that's returned. Right, now the last thing we have to install are the database tools. So I'm going to close this window and go back to the MongoDB documentation to find the installing the database tools on Windows page. Then you'll have to scroll down once more to find the MongoDB Download center and click on that. Now you'll have to scroll down a little bit just to get to the database tools, and here you can select this version or whichever is the latest version for you, Windows. And then once again,
>
> **[6:17](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=377)** you're going to go with the MSI installer, and click download, and that's downloaded, so I'm going to click on the installer and go through the installation wizard. So click next, accept the license agreement, click next once more, and then once more, and install.
>
> **[6:44](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=404)** Right, click finish, and the MongoDB tools are now installed. Now, just like with MongoDB, we do need to add that to the path. So once again, I'm going to go to click on the Windows icon, go to edit my environment variables. I'm going to click on the control panel, and inside the environment variables going to go to the system variables, go to path, edit the path, and I'm going to have to add a new one here. So I'm going to click on browse, going to this PC, installed program files. And here inside MongoDB, there's now a tools folder. I'm going to click on tools and then select the bin folder here. Click on okay, okay, okay, and once more then it should be all done. So to test that this was installed correctly, once more I'm going to open up a command prompt. I'm going to do that with the admin settings, right. And now to test it, I'm going to run one of the commands that should be installed with the MongoDB tools. That one is Mongo import. Now, Mongo import usually imports a collection, so if I run it without any argument I'd expect an error. And here I do get the error, no collection specified. So since I was only doing this to test, this is great, and shows me that all of the commands are installed. Great, that was all we had to do.
>
> **[8:20](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=500)** I will see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (35), [[Windows]] (10), [[Linux]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (20), go to (6), scroll down (4), select the (2)
> **Prerequisites:** install (16)
> **CLI Commands:** mongo (7), find (5), make (1)
> **Tools:** command line (3), command prompt (2)
> **Env Vars:** msi (2), wsl (1)
> **Versions:** version 2 (1), 2.2 (1), 2.2.2 (1)
> **Cross-References:** go back to (1), in the next (1)

#### [Install MongoDB on Linux](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=0)** - In this video, we're going to install [[MongoDB]], the MongoDB Shell and the MongoDB tools on [[Linux]]. If you are not using Linux, please watch one of the other two videos. My favorite way of installing MongoDB is using a tool called m. m is a MongoDB version manager that allows you to have multiple versions of MongoDB installed at the same time. To install m, you're going to need Node, or more specifically Node's package manager. If you don't have Node installed, I recommend you look for a tool called nvm to install the latest version of Node. nvm is Node's version manager. If you're not sure whether you have Node installed, go to your terminal and type in mpm version. If you get back a document like this that gives you a Node version number, you have node installed and you can proceed like this. So let's go back to installing m and let me copy this code. Back to the terminal and let me paste that here. And it says it can't execute the command 'cause there is an extra dollar sign that gets copied. So if that happens to you, don't worry about it. And we have another issue here. So this says it doesn't have the right permissions.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=95)** So I need to run this with sudo in front of it. And that work. Now I have m installed which allows me to install the latest version of MongoDB, using the command m latest. Now it's asking me whether I would like to proceed and install MongoDB version 5.3, which I do, and that's installed. It is telling me here that I should make sure that my path variable includes the directory that MongoDB was just installed in. Now the next thing I want to do is check that MongoDB was indeed properly installed, and the way I can do that is by just running the mongod command, and passing the version command line argument. And that gives me back that version 5.3 is installed, so we're all good to go. So let's install the MongoDB Shell. And that, we're going to go to the MongoDB documentation. So scrolling down here, it details the installed procedure. And the first thing it tells us to do, is to import the public key. So, we'll do that. I'll just copy paste that here, that's good to go. Then need to create a list file.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=195)** So paste that as well, and now we'll have to reload the local package database list.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=212)** And lastly, we can finally install mongodb-mongosh. So paste that as well. Let's check that mongosh got installed correctly, just by running mongosh--version. And we get back version numbers, so that was installed properly. The last thing that we need to install are the MongoDB database tools. We can do that with apt-get. So that's sudo apt-get install mongodb-database-tools.
>
> **[4:12](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=252)** And that's all installed. To check that this got installed correctly, we're going to run a command called mongoimport, and that's all. And that's the result I expected. The mongoimport command is used to import a collection. Normally we didn't specify a collection at all, but just the fact that we get this output means that it was installed correctly. I will see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (15), [[Linux]] (2)
> **CLI Commands:** node (8), sudo (2), apt (2), make (1)
> **Prerequisites:** install (9)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Versions:** version 5 (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)


### 2. Set Up Your Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Mongod](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=0)** - [Instructor] A mongod is a daemon process for [[MongoDB]]. You could say it is the core unit of MongoDB. It handles data requests from the MongoDB shell or the MongoDB drivers, manages data access, and performs background management operations. Let's look at it in the shell. During this course, we're going to try out a few different deployment options for MongoDB. Please create a folder for this course called MongoDB essentials. CD into this folder and then inside this folder create another folder called mongod only. To get a MongoDB database up and running locally, all you need to do is run the command mongod and specify a directory for storage. You do that by parsing the command line argument dbpath and then specifying a folder for where the data can be stored. That's going to be the folder we just created, so we parse in mongod only. Right and then once we press enter, mongod will start running and if your output looks somewhat like this, it's all working fine. Generally, if something has gone wrong, you would see an error message and then you would see this process terminate. All right, let's talk about the default settings that MongoDB uses. By default, MongoDB will listen for connections
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=96)** on port 27017. The data, by default, will be stored in the directory data, db. However, this does not work on current macOS versions because the directory has become read-only. That's why I explicitly specified a different directory in this case. All right, so with MongoDB running, the next step is to interact with it with the MongoDB shell, so let's go back to the terminal. To open up the MongoDB shell, let's open a second terminal. And now, all you need to do is run mongosh, that will automatically connect to the default port on local host which is where we're currently running MongoDB so that will just work. Okay, so from the MongoDB shell, you can now run all of the normal MongoDB commands. So, one command that you can run for example is show [[Databases]], and that will then show you the default databases that are present in your deployment. You can also already store inquiry data so you could say db.test.insertone and then say, hello world and that would get inserted.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=188)** And you can see up here something moved that's because the insert happened also on the mongod of course. All right, cool. Okay there's one thing that I need to make very clear, that is, do not run this in production. This MongoDB configuration only runs one mongod process, and that is just not good enough for any production usage. If you were to run this in production, anything happened to this one process, your database would be completely down. If the hard drive were to break your data may even be completely lost. We'll talk about how to avoid these issues in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (16), [[Databases]] (2)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** cd (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Code Identifiers:** macos (1)
> **Ports:** port 27017 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Replica set](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=0)** - [Instructor] When multiple Mongo D instances work together and maintain the same data set they are called a replica set. Let's say you configured your [[MongoDB]] deployment to be a three member replica set with three normal replica set members. In a replica set, the Mongo D processes take on different roles. One replica set member in each replica set is elected to be the primary. The primary receives all right operations. The [[Representational State Transfer (REST)|rest]] of the replica set members are secondaries. Secondaries replicate right operations from the primary asynchronously to maintain exactly the same data set. This is how MongoDB uses replication to achieve redundancy, meaning the data is replicated in multiple places. If at any point a primary becomes unavailable, one of the remaining secondaries will call for an election of a new primary, and one of the secondaries will then take over as the new primary. This is how MongoDB achieves high availability, meaning that your database still works even if one or possibly more Mongo D instances become inaccessible. In this example, we looked at a three member replica set. You can configure your replica set differently, but it is recommended that any replica set should contain at least three Mongo D processes.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=95)** And there are good reasons for that. If a primary becomes unavailable, one of the remaining set members will call for an election. But a new primary can only be successfully selected if more than half of the set members vote for it. In this case, since we have three set members that means at least two replica set members must vote for a candidate for the election to be successful. If you only have two replica set members, however, and one of them becomes unavailable, the remaining replica set member could not become the primary, because it could not get more than half of the votes. More than half of two is still two. So the entire database would in this case become unavailable. It is generally also recommended to have an uneven number of replica set members that are allowed to vote in election as this makes elections more likely to have a successful outcome. It's a bit more complicated than that because you can also have replica set members that you can configure to not vote in elections and not be able to become primary. And there's also a limit of only seven members of a replica set who can actually be voting members, but all of these are administrative considerations that we will not dive deeper into for now. Instead, let's set up a replica set in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** mongo (4)
> **Prerequisites:** configure (2), set up (1)
> **Best Practices:** recommended (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Set up a replica set from the command line](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=0)** - [Instructor] In this video, we're going to create a three-member replica set using the command line. For our production environment, it is recommended to use configuration files, which we will do in the next video. However, it is also useful to know how to spin up a cluster without config files, so I recommend you try both. All right. If you followed along in the previous videos, then your terminal will look something like this. So the first thing I'm going to do is I'm going to terminate the mongod process we were running by just saying Control + C. Cool. And I will also exit out of the mongod shell. Control + D. Cool. Now, to begin, I'm going to create a folder for this replica set, replica set cmdline. All right. And then I'm going to change directory into that new folder. Here we go. Wonderful. Okay. Next, I'm going to create a key file for our database. I'm going to do that by typing in openssl rand, and it already auto-completes dash base64 755 then into a file called keyfile. And now you can run [[MongoDB]] without enabling authentication,
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=94)** but it is fairly easy to enable key file authentication which then provides a minimum of security between members of the replica set. For production environments, it is recommended you use X.509 certificate instead. But since we are using this only for this tutorial, we'll use only our key file. All right, we have our key file now. Now we're going to lock down permissions on this file, so only the current user has read permissions on the key file. We're going to do this with chmod. And we're going to give it all zero zero permissions. Okay. That's good. Now the next thing we're going to do is we're going to create some sub-directories for each mongod process to store their individual set of data files and log files. The way I'm going to do this is I'm going say mkdir. And then I'm going to give it a path. And I'm going say m1 comma 2 comma 3 and then slash db. What I'm doing here, if you're not familiar with this syntax, is called shell parameter extensions. And what it does is it will create multiple folders called m1, m2, m3 with a db sub-folder in it. So if I say ls now, you can see there are three folders in here. Awesome.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=187)** Okay. Now that we have the folder structure, let's start the mongod processes. We're going to use the command mongod again, and then we're going to specify a replica set. We'll do that by using the command line option replSet. And then we'll call it myReplSet. And you can see this is already auto-completing, but I'm going to type it out once just so that I can go through each argument and explain it. Right. So the next argument we're passing in is the database path. So that is going to be the folder that we created. So it's m1, db. Then we have to specify a lock path. We only have to do that if we run this with the fork option. But the fork option means we are not going to then see all of the logs in the terminal. But instead, they go to a log file, which is a lot nicer if you are running multiple instances. Okay. So we're going to specify the path for that. And I'm just going to put that into the same folder. Okay. Now I'm going to specify the port that this one is going to run on, and that is 27017. And then we'll pass in the fork option. And lastly, we're going to pass in the keyfile option and give it the key file which is in the current directory, keyfile.
>
> **[4:41](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=281)** Okay. Let me run this. And that looks like it worked. Great. So now we're going to run this entire command two more times. But we are going to have to change some of these arguments. So for the dbPath, it's going to be m2 slash db. For the lock path, it's going to be m2. And for the port, we're going to use 27018. You could use a different port. But just to make it easy to follow along, I would suggest you use the same ones. Okay. All right. And then one more. And that's going to be m3. Okay. And the port, I'm going to use is 27019. Cool. Okay. So now all three of these individual mongod processes are running. To make them work together, we'll need to initiate a replica set and add the instances to it. To do that, we'll have to connect to one of the instances, and we'll do that with the MongoDB Shell. So in another terminal window, use mongosh and connect to localhost, 27017. Because those are the default ones, we can, again, just run mongosh. Okay. Cool. So to initiate the replica set,
>
> **[6:17](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=377)** we're going to run rs dot initiate. Initiate. There we go. Okay. And this tells me no configuration specified, using a default configuration for the set. That's all fine by me. Okay. Now the next thing that we're going to do is we're going to say use admin. This changes the database we are using to use the admin database which contains configuration options for your database. Okay. Using this configuration database, we can now create our first user. And we are able to do that because of something called the localhost exception which allows you to enable access control and create the first user or role in the system. After that, you have to authenticate as a user with privileges to create other users in order to create more users. So it's really important that the first user you create has enough privileges to create more users. I'm going to use the root role for my user, which has all of the privileges we need. So the way to create a user is to use the command createUser. Right. And inside the parenthesis, we're going pass an argument that is a [[JSON]] document. And we are going specify as the username, a name.
>
> **[7:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=472)** I'm going to use my own name. You can use yours. And then I'm going to add a password. And you do that with the pwd name. And I'm going to put here passwordPrompt. That is so that I don't have to type in the password in plain text. 'cause then it would become visible in the logs and everything. And we don't want that. Okay. And the last key value pair that we need to add here is the roles array. And I told you I was going to use the root role. Right. Cool. Let me run this. Now it's going to ask me to enter a password. So I'm going to do that. Awesome. That worked. To do anything else now, we'll need to authenticate as this first user that we created. So the way you authenticate is you say db dot getSiblingDB. And this is a bit strange, but you'll get used to it. And then you say admin. So you're getting the admin database, 'cause that's the one you are authenticating against, that's the one we just created the user. And then inside the auth, we pass this argument the username and then the password. Again, I am going to type in passwordPrompt so that it prompts me, and it doesn't get leaked anywhere. Cool. So that is us authenticated. Now the next thing that we're going to do
>
> **[9:28](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=568)** is we're going to add the other two replica set members. And the way we do that is we say rs dot add. And then we're going to specify localhost, 27018. That's the first one. Okay. That looks like it worked. And then 27019. Now if you're wondering how I'm getting these commands back so quickly and can just edit them, press Up on your keyboard. Okay. The next thing I'm going do is I'm going check the status of the replica set. You can do this with the command rs dot status. Okay. And then this gives me a lot of information about the cluster. Yeah. And really what I'm just looking for here is that all three of the replica set members that we just added are in. And I can see that because of this members array here. This has the first member, id zero, which is 27017. Then we've got 27018 as a secondary and 27019. So that's all good to go. Another way of obtaining information about the replica set is to run db dot serverStatus and then add the quantifier repl. So that will just give us the information
>
> **[11:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=663)** about the replica set from all of the other information that gets returned. So here we can also see all of the host names, and that means those are all of the replica set members that we have in this replica set. Right. As I said in the beginning, for production environments, it is better to use config files. So let's exit the shell here. You can do that by typing exit or Command + D. And then we're going to shut down the mongod instances by running kill all mongod. And I'm going to do that in this one, 'cause that's where we're setting them up. Okay. Cool. The last thing that we're going to do is we're going to remove the files in this folder. I will just cd out of this folder. And then I'm going say rm dash rif replica set cmdline. Okay. Cool. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[JSON]] (1)
> **Code Identifiers:** passwordprompt (2), replset (1), myreplset (1), dbpath (1), createuser (1)
> **CLI Commands:** make (2), chmod (1), mkdir (1), ls (1), cd (1)
> **Tools:** terminal (3), command line (2)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** in the next (2)
> **Best Practices:** recommended (2)
> **Env Vars:** json (1)

#### [Set up a replica set with config files](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=0)** - [Instructor] In this video, we are going to create a three-member replica set using configuration files. Config files should be used for any production deployment, because they are easier to use and manage, and you can check them into [[Version Control]]. Let's go to the terminal. To begin, I'm going to create a folder for this replica set, and I'm going to call the folder replicaset and then cd into it. The next thing I'm going to do is I'm going to create a key file for our deployment. You can run [[MongoDB]] without enabling authentication. But it is fairly easy to enable key file authentication which then provides a minimum of security between members of the replica set. For production environments, it is recommended that you use X.509 certificates instead. But since we are using this only for this tutorial, we'll use only our key file. The one additional thing I'm going to do on this key file is I'm going to change the permissions on it so that only the current user has read permissions on the key file. The next thing I'm going to do is I'm going to create the folder structure that we are going to use for the three replica set members. I'm going to do that by using this command, mkdir dash p.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=95)** If you're not familiar with this syntax, what is happening here is called shell parameter expansion, and it actually creates three folders at the same time. Now, the next thing I'm going to do is I'm going to create an empty file for the configuration. So I'm just going say, touch m1 dot conf. That's going to create an empty file, and I'm just doing that so that it will be easier to open. So now I'm going to open Visual Studio Code. Okay. Here we now have this m1 dot conf file. Now, inside this configuration file, we're now going to create our first config file. Normally, you'd probably copy this from an existing conf file and just adjust a few settings. But I think it's useful to go through it once, just so you know what each individual variable means. So we'll start with storage. The storage argument allows you to specify the path where the database, in this case, one mongod, will store its files. So for our first note, that is going to be in one of the folders that we created. So m1 slash db. Okay. The next argument is going to be net. And inside net, we have two further options:
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=194)** bindIp, which in this case will be localhost, and a port number. Here I'm going to use the default MongoDB port which is 27017. The next argument in this configuration file is the security argument. And that has multiple different options. The two that we are going to specify is authorization, which we'll just say is enabled, and then keyfile, which specifies that we are using key file authentication. And for that, we're going to have to list the name of the key file, In our case, that's just keyfile. Okay. The next thing that we're going to specify is systemlog. And that is where each mongod is going to store its logs. First, we need to specify the destination. And in our case, that is a file. So there are multiple different options. You could send it, for example, also to the terminal. Then you have to specify the path for the file. So in our case, we can just store that in the m1 folder. And then I'm going to give it the file name of mongod dot log. Okay.
>
> **[4:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=286)** There are two more options that we're going specify here. The first one is for processManagement. And that just means we generally want to start each mongod as its individual process as a fork. So for that, we're just going to specify fork, true. And then the last thing that we need to specify is the replica set name. And the way you do that is you specify the replication option. And inside that, there's a replSetName option, and we're going to set that to mongodb essentials dash rs. Okay. That's that done. Let's go back to the terminal and just quickly copy the configuration file to m2 dot conf and to m3 dot conf. Now let's go back to the terminal and open up m2 dot conf. And now there are a few things here that we need to change before we can resume. And that is the path where the mongod is going to store its files. That's going to be m2 slash db. The port has to be different, 'cause they all have to have their individual port. So I'm going to just add one to that. And the log file is going to be in the m2 folder. Okay. That's m2 done.
>
> **[6:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=380)** Now let's open up m3. And here we're going do the same thing. The dbPath is going to be m3 slash db. Port is going to be 27019. And the logs are going to be stored in the m3 folder. Okay, let's save that. And let's go back to the terminal. Now that we have created all the configuration files, one thing that remains to do is to start the mongod processes. And the way you start a mongod from a configuration file is by specifying the dash f option and then specifying the configuration file. Okay. That worked. Now we're going to do the same for m2 and m3. Great. That looks like it worked. Now we have three individual mongod processes. To make them work together, we're going to need to initiate a replica set and add the instances to it. To do that, we'll have to connect to one of these instances. So in my second terminal down here, I am going to start my MongoDB Shell. And I don't need to specify anything else here, because the mongod that we are connecting to is under the default parameters which is localhost and 27017 as the port. Okay. So, here, what we're going to do
>
> **[7:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=477)** is we're going first change the database to use the admin database, because that's where all of the configuration is and where we can create users. Next, we're going to write out the conflict variable which we can then use to initiate the replica set. And this works just like a drop PostScript. So we can say config equals. And then there's going to be adjacent document. Inside it, we have an id field, which is the name of the replica set, exactly as we specified it in the configuration file. So that's going to be mongodb essentials dash rs.
>
> **[8:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=523)** And then there's a members field. The members field takes an array of documents. And each document has an id, which is zero indexed, and then a host for each member. So the host is going to be, in our case, localhost, and then 27017 for the first one. For the second one, the id will be one. And the host will be localhost and then 27018. And then for the last one, the id will be two. And host will be the localhost, 27019.
>
> **[9:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=577)** Okay. Great. Now you can see it in nicer formatting here. And now that we've got this config all written out, all we need to do is say rs dot initiate. That will initiate the replica set. And we pass as the argument the config variable. Okay. Here's an issue, and it's just a small typo. It says rs dot initate. That is not how you spell initiate. There we go. Okay. And we get back a response saying, okay, one, which means that worked. Great. The next thing we are going to do is we're going to create our first user. We are able to do that because of something called the localhost exception which allows us to enable access control and create the first user or role in a system. After you create your first user or role, you have to authenticate as a user with privileges to create other users to create further users. So it is really important that the first user you create has the privilege to create more users. So to make it easy here, I'm going to use the root role for my first user. So let's do just that, db dot createUser is the method that we're going to use to create a user. That takes as argument a document.
>
> **[11:11](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=671)** Inside the document, you're going to specify a username. In my case, I'm just going to call my user naomi. And then you have to specify a password. Now you can specify the password as just a string. But that would make it visible on this video or in the logs potentially, so that's not really great. What we can do instead is to type in passwordPrompt. And that's just going to prompt us then for a password. Okay. The last field that we need to add to this document is the roles field. The roles field takes an array of roles, 'cause you can have multiple roles. But in our case, like I said, I'm just going assign the root role. Right. We'll hit Enter. And I'll type in a secret password and hit Enter. All right. And that looks to have worked. Now, before I can do anything else, I have to authenticate. So to authenticate, you're going to have to authenticate against the database on which you created the user. In our case, that's the admin database. So we're going say, db dot getSiblingDB. And that's going to work from any database that you are currently on. Then you're going to specify the database that you have created the user on.
>
> **[12:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=763)** So in our case, admin. Then you're going to use the auth method. And you are just going to pass in your name. It's going to ask you to enter the password. Just do that. Okay. And now we are authenticated. Great. Now we can check the status of the replica set if we want to. To do that, we can issue the command rs dot status. The rs dot status command reports on health of replica set members. The data that gets returned here relies on the heartbeats that are sent between the replica set members. That means that the note that we run this command on has slightly different data available than all of the other members. But essentially, for right now, all that's important is that you can have this list of all of the members. And you can see here, it's localhost, 27017, which is the primary, and then the other two, which are secondaries. There is one more way of obtaining information about a replica set, and that is to run db dot serverStatus and then get the repl field value from it, like this. So that gives you a bit more succinct information back. So here you can have the list of the hosts
>
> **[14:19](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=859)** in a bit more condensed format. All right, now we've got the replica set running, and we're essentially ready to continue with the course. There's one more thing that I want to point out to you. If you need to pause this course and restart your machine, or you take a break and come back a few days later, you may have to restart your replica set. You don't need to completely set everything up again. But what you do need to do is just go back to the folder, the replica set folder, and again, run the commands, mongod dash f, m1 dot conf, m2 dot conf and then m3 dot conf. And then your replica set should be ready to go again. All right. With this now all set up, let's get started with actually using MongoDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (6), [[Version Control]] (1)
> **Code Identifiers:** bindip (1), processmanagement (1), replsetname (1), dbpath (1), createuser (1)
> **Tools:** terminal (6), visual studio (1)
> **CLI Commands:** make (3), cd (1), mkdir (1)
> **Cross-References:** go back to (4)
> **Definitions:** means that (2), is called (1), is a  (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** go to (1)

#### [Import the sample data](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=0)** - [Instructor] When you installed [[MongoDB]] earlier, you also installed the MongoDB database tools. They include mongostat to get [[Statistics]] on a running mongod, mongodump which allows you to export dump files from MongoDB collections in BSON, mongorestore which allows you to import dump files from MongoDB collections that were stored in BSON, mongoexport which allows you to export collection data to [[JSON]] or BSON. And the one we are looking for, mongoimport, which allows you to import collection data from JSON or CSV files. The datasets that we are going to use for this course are in this [[GitHub]] Repo. Please pause this video and download them to the MongoDB essentials folder that you have created for this course. Now, I have already done that and put all of the files into a datasets folder that I've just changed into. Now, what we're going to do is we're going to import these datasets into our deployment. And to use that we're going to use the mongoimport command. So because we have created a user on our database deployment, we're going to have to specify our username. In my case, naomi. In your case it will be whatever you called your username.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=94)** And we're going to have to specify which authentication database was used. Remember when we said use admin before we created the user? That is why we have to specify the authentication database. In theory, you could have created the user on a different database. That's why. All right. The last thing that we have to specify is in which database the dataset should get stored. We're going to call this database sample_data, and then we need to pass in the name of the files, in our case, the first one is inventory.json. Okay. So I'm going to run this. It is asking me for my password, which I will give it. And now it says it imported 1000 documents successfully. Very good. That's the first one imported. We've got two more datasets. So I'm going to run the same command for the movies.json file. Again, I'm going to give them my password, and it imported 1000 documents successfully again. Okay. One last one to go. And that is the orders.json file. Okay. And we have imported all of the datasets for this course. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (5), [[JSON]] (5), [[Statistics]] (1), [[GitHub]] (1)
> **Env Vars:** bson (3), json (2), csv (1)
> **File Paths:** inventory.json (1), movies.json (1), orders.json (1)
> **Code Identifiers:** sample_data (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### [Debug](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=0)** - [Instructor] If you encounter any issues while setting up your [[MongoDB]] deployment or later on while using it, there are few common things you can do to debug your issue. If your database is failing to start, first, check the log files at the location that we specified, in our case m1/mongod.log, et cetera. So I could do that here right now in VS Code. And this is what this log file would look like. And this is where, then scroll towards the end and see whether there are any errors that I can see. The next thing that you can try if your deployment isn't even starting is to disable the fork option. So remember when we said fork true in the configuration file, here. If you set that to false it will give the error that occurs when you start the MongoD. The next thing that you can do is to check the oplog. The way you do that is with this command. So let me briefly show you what that looks like. So on here, I would now say, use local. So that's using the local database, and then I would run this command, the one that I showed you on the slide just now. So that is db.oplog.rs.find.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=96)** And then this is sort of like a nice way of passing through it, which just filters out any no ops and then limits it to the most recent thing it finds in there. So you could go through the oplog like this and search for what's happening. All right. The next thing that you can do is you can try to increase the log level. The way you would do that is you would, first of all check what the current log level is. You do that with getlLogComponents, like that. Okay. That gives you a lot of information, verbosity here is zero for example, and that means that only informational data gets logged. If you wanted to change these settings, you would then run a command on the admin database, which you can do also by saying db.adminCommand, adminCommand. And then you would say, setParameter: 1, and that means true. So that's what you want to do, the command you want to do. And then you specify the parameter, in this case logLevel, and you would set that to something like two which is a higher logLevel, therefore more verbose. Okay, I didn't spell logLevel correctly.
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=192)** There we go. Okay, so that has now been updated. Note that you shouldn't have it on a very high log level the entire time, that can mean your deployment runs slower because it needs to generate more logs. Okay, the last thing that you can do to debug your deployment is go to Stack Overflow, search for the error that you're getting, and hopefully someone in the community has encountered a similar error and you can follow the steps that were recommended to this person. All right. I hope this helps if you run into any issues, let me know if it doesn't. Otherwise, I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Code Identifiers:** loglevel (3), admincommand (2), getllogcomponents (1), setparameter (1)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** db.oplog.rs (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Documentation:** stack overflow (1)
> **Tools:** vs code (1)


### 3. Working with MongoDB

[↑ Back to Table of Contents](#table-of-contents)

#### [The document model](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=0)** - [Instructor] One of the main features that differentiates [[MongoDB]] from many of the [[Databases]] is that it is built to natively work with [[JSON]] documents. If your application uses JSON to work with data, using MongoDB can save you a lot of time because you can store data as is. Here's an example JSON document. The document has multiple key value pairs where the keys define the data and must be strings, and the values are the variables for the respective record that contain the data. For the values, you can use strings, numbers, booleans, arrays, other JSON objects, and some other objects. You'll hear a lot about JSON when talking about MongoDB, and most of the time, you don't need to think about this any further. However, there's one small caveat you should know about. MongoDB actually uses a binary encoded serialization of JSON-like documents called BSON for storing data as well as for their drivers and tools. BSON was designed to be especially lightweight, traversable, and efficient. BSON also brings support for additional types such as images, timestamps, and longs, and much more. You generally won't need to think about the difference between JSON and BSON much, but it's good to know that there is a slight difference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[MongoDB]] (4), [[Databases]] (1)
> **Env Vars:** json (7), bson (4)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Namespaces, collections, documents](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=0)** - [Instructor] From a technical point of view, this represents a [[MongoDB]] deployment with one replica set with three MongoDBs. But when you are using the database, most of the underlying architecture is stripped away. Inside your MongoDB deployment, your data is organized into [[Databases]]. It may be confusing to hear that there can be multiple databases inside your database. The way I think about it, is you have one database deployment and inside your deployment, you can then have one or more databases. Most of the time, all data that belongs to one application like a blog, will be in one database. Inside each database, there are collections. A collection is a grouping of MongoDB documents. For a blog, there might be a user's collection and a posts collection. Inside each collection are documents. Documents form the basic unit of data in MongoDB and each document contains one individual record. For an author's collection for example, each document would contain information about one author. Be aware that there is a maximum size for each document, which is 16 megabytes. All right. Let's see this in action. All right. I'm going to close this above terminal now so that we have more space for just the MongoDB Shell. And I'm going to clear the screen as well.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=96)** All right. Now, I am going to create a new database which we're going to call blog. So I'll do that by just saying use blog. Now, if I want to see what connections are inside of this database, I will type show collections. Now, this is empty and that shouldn't be surprising to you 'cause we just created this database. All right. The easiest way to create a collection, is to just insert a document into the collection as though it already existed. So we're going to do just that. I am going to create the author's collection by inserting one document into it. And I'm going to just create this document. I'll say name and I'll put my name just to test it. Okay. And that got inserted just fine. All right. This returns an object ID here. Each document in MongoDB must have a unique ID value. If you don't assign one, which in this case we didn't do, MongoDB will automatically create one. Which is what happened here. Congratulations. You have inserted your first document, created your first collection and created your first database in MongoDB. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (8), [[Databases]] (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [MongoDB Query Language](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=0)** - [Instructor] Now you know what data inside [[MongoDB]] looks like. The next thing you need to know is how to access that data. That's what you use the MongoDB query language for. Be aware that you may also find references to MQL as the MongoDB query API. MQL allows you to perform, create, read, update, and delete operations, also called CRUD. If you're familiar with [[JavaScript]], using the shell will probably feel very natural for you. If you're not, don't worry. We'll go through it all and this is only how you interact with the database inside the MongoDB shell. There are MongoDB drivers available for almost all programming languages out there, allowing you to interact with MongoDB seamlessly in the languages you are used to. Let's dive in. In the last video, we already created our first document. We did that by using the insert one command. I'm going to create one more here to remind us of what that looked like. So the way we did that was we said db.authors to specify the namespace. And then we called the insertOne command and we passed in a document. So, the document had a name field and then we just specified the name.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=94)** I'm going use my partner's name here, Joe Nash. All right, that's one more document inserted. If I want to create more than one document, I'll instead use the insert many command. Just as a reminder, in the MongoDB shell you can press up to get the last command back and then you can edit it and reuse it. If I want to create more than one document, I'll instead use the insertMany command so I'll do that here. And the insertMany command takes an array of documents. Okay, so if I wanted to, for example, insert a document for each of the founders of MongoDB, I would do it like this and that would be a document for Eliot Horowitz. Then going to have a new document here, going to again, have the name field and then the next one would be Dwight Merriman. And lastly, we've got one more document for name Kevin P. Ryan. All right, cool. So, let me insert all of these and you can see here, it inserted three different documents here and gave us three different object IDs back.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=191)** Okay, so that's enough for creating documents for now. Now let's read some documents. So to read just one document that is in the database, we can use the find one command. The way we do that is we, again specify the name space by saying db.authors. Then we say, findOne. And that gives us back my document, or in your case, probably your document with your name. If I want to find multiple documents in a collection, I can do that by specifying the name space and then using the find command instead. So this gives me back multiple documents. If I want to find documents that match a specific condition, I can add that as a parameter. I can, for example, specify that I want to find all authors with the name Naomi Pentrel. So the way I'd do that is I'd use the find command, then I pass in a document and I would specify name. And then I would say Naomi Pentrel and I would get back my document which is the only one that matches, naturally. Now, one thing I want to point out to you is inside the MongoDB shell, it actually doesn't matter if I put quotes around the field name or not. So I could do this.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=282)** It would give me the same result. You will probably throughout this course find me dropping these quotes just because it's easier. All right. So, we were talking about CRUD. We found out how to create documents and how to read documents. The next thing is how to update documents. To update documents, we'll use the update one or the update many methods. I can for example, update my document to add a website. So let's do that. I'll use the same name space, and then I'll say updateOne. Now the first argument that gets passed into the function is one that will match the specific document that we want to update. So here we'll say something like name and then your name. Then we're going pass in a second document and that will be the specification of what we want to update. I am going to say set, which will add or update a field. And then for that set operator, I'm going to pass in another document and that will be website and I'll put in my website as a string. Okay, so with running this, my document now has a website field. If you don't believe me, I will find the document again
>
> **[6:16](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=376)** and you can see here, the website got added. The update one command will update the first document it finds that matches the condition you specify in the first argument, in this case, where the name is Naomi Pentrel. If you have multiple documents that match the condition that you specify, it will still only update one of them. If you want to update them all, you should use the update many method. Let me get out of this one. So I could, for example, use the update many method here. I'll start with this. And then let me say we're going to update all of the documents here. I do that by just specifying an empty condition which matches all of the documents in the collection. And then what we're going to do is we're going to add a new field, again with the set operator and that can be for books. And I'm going to pretend that we all for now have an empty array. Okay, so I'll do that. And now if I say db.authors.find, we should all have a field that is books with an empty array and we do. Great. All right. The last thing that we should talk about is how to actually delete documents. Now, deleting is very much like finding documents.
>
> **[7:51](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=471)** I can, instead of find, just specify deleteOne and then I pass in a query condition. So if I wanted to, for example, delete one of these documents, I would say name and then I would specify someone's name. And that would now delete Joe Nash's document. Now, if I wanted to delete many, I would instead use the deleteMany command.
>
> **[8:30](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=510)** And then if I specified nothing here, it would just delete all of my documents. So in this case, I'm not going to execute it but if you want to, you can go ahead and do that. All right, don't worry if any of this was a bit fast. We'll dive a lot deeper into all of this in later chapters. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (9), [[JavaScript]] (1)
> **CLI Commands:** find (11)
> **Code Identifiers:** insertmany (2), insertone (1), findone (1), updateone (1), deleteone (1)
> **Env Vars:** mql (2), crud (2), api (1)
> **Analogies:** for example (5)
> **Cross-References:** in the last (1), in the next (1)
> **Documentation:** specification (1)
> **Warnings:** be aware (1)

#### [Indexes](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=0)** - [Narrator] Imagine you have to search for the phone numbers of all of your friends. And to do that, you are given a phone book which contains everyone in your area. But for whatever reason, it's not alphabetically sorted. Not great. You'd have to go through the entire book item by item. It would be much easier to retrieve the data you need if the phone book was sorted alphabetically, that is if there was an index on the last name associated for each record, like here. Now getting the phone numbers is a lot easier. Indexes work in a similar way in [[Databases]]. When you perform a query on your database, the operation needs to find the data you are looking for. If you haven't defined an index, the database needs to check every document in the collection you are querying to see if it matches the query statement, which is also called the query predicate. This is called a collection scan and is very inefficient. An index provides an organized way to look up data by storing a subset of the data with pointers to the location of the full records. If the data you are querying is present in the subset of data in an index, the database only needs to check the index. Queries that can be answered completely with just the index are called covered queries in [[MongoDB]]. And these queries are very performant. The improved efficiency speeds up query execution as well as updates because the database can find the data
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=94)** we are retrieving or updating faster. Indexes are very useful and you should generally create an index when you frequently query on the same fields. This is especially true if you saw data on that field or perform range-based queries. Generally, if you frequently query data in a similar way, that is called a common query pattern. And if you have a common query pattern, generally you want an index on that pattern. However, indexes come at a price. Indexes need to be maintained by the database, which adds about 10% write overhead to your write operations. So having indexes is a trade-off. You can get faster data access but any writes take a little bit longer. So you should create indexes on common query patterns only. You should also make sure that all indexes you create fit into RAM where data access is fastest. In MongoDB, there are many types of different indexes, single field indexes, which create an index on just one field, partial indexes, where you can add an option to the index to tell the database to only match documents that have a value satisfying a certain condition for the index, compound indexes, which create an index on a combination of fields.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=187)** This is useful if you often query on two or more fields together. There are also multi-key indexes. That's an index on up to one array value. It can't be more than one array value because the size of the index would otherwise grow really quickly. There are also text indexes which allow you to search within text fields. And there are wild card indexes. This is a special kind of index that is indexed on a field or set of fields for which you don't know the name because the schema changes dynamically. It is useful for very diverse data but it should not be used for any other cases. There are also geometric indexes, which are, for example, 2D sphere indexes, 2D or geoHaystack indexes. And lastly, there are hashed indexes. Hashed indexes can reduce the index size if original values are very large but they are not performant for ranged queries. All right, let me show you how to create an index. So for our [[Microsoft Office|office]] collection, let's remind ourselves what that looked like. So db.authors.find. Okay. So to create an index on the authors collection, I'm going to call the createIndex method and I'm going to pass in just the field
>
> **[4:44](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=284)** that I want the index to be on. In this case, we may want to index on just the name field. So I will specify it like this and just press Enter. And that has created our index. We'll create some more indexes later as needed and we'll also talk about how you can check whether you may need indexes. But at a high level, when you write a query, think about whether the database has the indexes that it would need to look up the data for your queries quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[Databases]] (1), [[Microsoft Office|Office]] (1)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** geohaystack (1), createindex (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** ram (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Indexes](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=5)** - [Educator] In this exercise, I'm going to ask you to create a database for a phone number lookup app. The app should allow you to enter either a name or a phone number to get the full contact details for a business. The database should be called lookup. The collection should be called records and include a few records. Add indexes on the fields you think may require it.

> [!info]- Semantic Content
>
> **Speakers:** - [educator] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Indexes](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=0)** (cheerful music)
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=4)** - [Instructor] All right. So the database is supposed to be called, Lookup. So the first thing I'm going to do is say, use lookup. Then to create the database, the collection and a document, what I'm going to do is, I'm going to insert a document. So I'm going to say, db.records for the collection name, and then I'll use the insertOne method, and I will insert one document. This is supposed to contain records for businesses. So, the first thing I'm going do is, I'm going add a field with a name for the business, and I'm going to call this Naomi's business, and then I'm going add a number. So that will be the phone number by which we can look up. So, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Okay, then we'll have some additional fields. I'm going to add a field for our website, and I will just add my own personal website in here. Okay, cool. So that adds a record you could add multiple, but I think for this exercise it's enough to add just one. So, to make this easy I'm just going to say db.records.findOne so that we can see this nicely formatted. Okay, we've got a name, a number and a website. Now, if I was going to think about
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=98)** how this data was going to be accessed in this application, I think we would either search by the business's number or by the business's name. So, I would create an index on both of those fields. So I would say, db.records.createIndex. And then I would create an index on the number. And I would also create an index on the name. Now you could create a text index on the name if you wanted to do something fancy around matching the name even if you don't spell it correctly, but for now, I will just keep it simpler. Be aware that there isn't just a single, correct solution for this. You could have created the document differently and your indexes may look a bit different, that is fine. But these are the things that you should think about when you create the collections and [[Databases]] and the records and indexes. All right, I will see in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Code Identifiers:** insertone (1), findone (1), createindex (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)


### 4. CRUD Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [insertOne and insertMany](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=0)** - [Instructor] You've already used the insert commands, but there are some options that we didn't cover that we're going to cover now. To briefly recap, you can insert a document like this, and you can insert many documents at once inside an array like this. When inserting data into a database, a concept that you should be aware of is durability. Durability is a property that guarantees that acknowledged writes are permanently stored in the database, even if the database or parts thereof become temporarily unavailable. In [[MongoDB]], you can configure the level of durability. You can choose to have high durability, but then writes will be slower, or you can choose to have low durability, but faster writes. The way you configured durability in MongoDB is by specifying a writeConcern. The writeConcern defines what MongoDB needs to do before a write is considered successful. You can specify the writeConcern as the second argument in the insertOne or the insertMany command. Let's look at an example. Here, we are inserting a small document with just a name. That's the second argument that we're interested in. The second argument consists of a document with three key value pairs. The last one is the wtimeout option,
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=93)** which allows you to specify a time limit to prevent write operations from blocking indefinitely. Here, the write option will block for at most 100 milliseconds. The j option defines whether we want the guarantee that the writes are all written to disk or whether it is okay if they are only written to the in-memory journal at the time we acknowledge the write. If j is set to "true", we require all writes to be persistent to disk which is safer, but takes longer. If j is set to "false", the operation will be reported as having succeeded once the journals of enough mongods have the writes. This creates a small moment of vulnerability where the database could still lose a write if the server, for example lost power while the journal has not been written to disk yet. the first option, the w option, specifies a number of mongod instances that need to acknowledge a write before the database tells the application that the write succeeded. Since MongoDB 5.0, the default writeConcern is "majority" as it is in this example. Let's look at this in a diagram to understand what exactly is happening. If a client issues a write with writeConcern "majority", then more than half of the bearing voting replica set members in a deployment must have the write before MongoDB sends the write acknowledgement to the client.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=189)** In a three member replica set, that means the primary must finish inserting the new documents and one secondary must propagate the write before the primary can acknowledge the write to the client. Why is this important? Consider this replica set of three mongods. We insert a document with writeConcern 1, j: true. That means only one mongod has to have the write and it only has to exist in the journal before an acknowledgement is sent to the client that the write succeeded. So the primary inserts the data into its collection and acknowledges the write. Now, before the secondaries can replicate the insert, the primary becomes unavailable. The remaining nodes choose a new primary and continue working, but they don't have the new document. If the unavailable mongod becomes available again, it will roll back the insert and replicate the state from the new primary. The document you inserted would be lost in this case. The higher writeConcern makes loss of data less likely. When determining which writeConcern to use, a good question to consider is, "What would happen if you lost changes?" If that absolutely cannot happen, set your writeConcern to "majority" and your data will survive failovers.
>
> **[4:43](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=283)** If it would be an inconvenience, but overall, not the end of the world, you can choose a lower writeConcern. For this cause, you don't have to worry about specifying the writeConcern. But keep it in mind when you are developing an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (5)
> **Code Identifiers:** writeconcern (11), insertone (1), insertmany (1)
> **Versions:** 5.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [findOne and find](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=0)** - [Instructor] You've also already used the find commands, but also here, there are some options that we didn't cover that you should know about. To briefly recap, you can find a single document with the findOne command and you can optionally specify any fields to match on in a document that you pass in. And you can find many documents at once with a .find command. Let's look at the data that we imported into our [[MongoDB]] database in the beginning. Okay, to do this, we're going to have to switch database to our sample data database. Just to remind you, if you want to see what all of the [[Databases]] in your MongoDB deployment look like, you can get that by typing in show dbs and that will return all of the databases that are in your deployment. All right, so we want to use the sample data database. Okay, now let's look at what collections are present. Cool. So we've got the inventory collection, the movies collection and the orders collection and let's just look at each one of those in turn. So let's start with the inventory collection and let's just find a single document to see what it looks like. All right, so what we've got in the inventory collection is a bunch of cars. We've got the name of the car, the model, the year, a price, a source, which is a store,
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=97)** how often the car goes on sale and variations of the car that are available with different colors and the quantity that is available. This is all mock data so if some of it doesn't make sense, bear with me. All right, so we've got a collection of just car inventory. What else have we got? We've got an orders collection. So db.orders.findOne. Okay, so here, people are ordering cars and each order contains an order of a car. You've got the car ID, you've got a name, you've got the price of a car and you've got the credit card number of the person who paid. All right, cool. And then we've got one more. So we've got the movies collection. So let's find a movie and again, this is mock data. These aren't actual movie titles but we've got here a movie that is called The Adventures of Tom Thumb and Thumbelina. Right, then we've got a director, we've got an array of actors, we've got the year and date that it was released in, we've got the genres of the movie and how much money it made, as well as the run time and ratings from soft avocados and MNDB, as well as how many votes were given to this movie. All right.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=189)** So that's how you can explore some collections if you don't know what's in your database. Now, there are two things that I didn't cover before that you can do when you are trying to find specific data. So, if I were to, for example, try to do a nested query and wanted to specifically find movies where the rating that MNDB issued was 10, I would do that like this. I would specify a query predicate. And then inside here, I would say ratings.mndb. And then I would say 10. So that is how I would access the MNDB value inside the ratings document. Then I would get back one document where the MNDB value is 10. All right. There's one more thing that you should know about how to access array values. So let's say I've wanted to find a movie where the first genre mentioned in the array for genres was, let's say musical, like in the first document that we got back. The way I'd do that is I would say genres and then with a period, I can access the different items in the array. Now this is zero index so if I want the first one to be equal to something, I'm going to have to say .0.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=282)** And then I can say musical and I get back a musical, which is incidentally here the same one that we had before, I think. All right, so far so good. Now let's go back to the slides and learn a bit more about consistency and availability with find commands. Okay, in the previous video about insert commands, we learned about the write concern. For find one and find many, you may need to know about the read concern for consistency and availability guarantees. In some cases, it may be important to only see data that is majority committed as compared to data that is written to the primary but has not yet propagated to a majority of nodes. You can configure the read behavior by specifying the read concern. Here, I've set the read concern to majority, and you can see I did that by specifying the command like normal and then just adding at the end .readConcern and then specifying the read concern majority. There are multiple options that the read concern can be. It can be local, which is the default and returns the most recent data available on the MongoD that you are connected to. So that has absolutely no regard for whether the data is majority committed or not. Then you've got available, which is the same as local but used for sharded clusters,
>
> **[6:16](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=376)** something that we are not covering in the MongoDB essentials course. Then there's majority, which you've already met and linearizable which returns majority committed data only but waits for any concurrent writes to complete before reading and returning the data. Be aware that the linearizable read concern is slower than other read concerns. There is also the option of specifying a read preference if you are using a MongoDB driver, which allows you to then read data from secondaries if you want to. This can allow you to get faster reads. The options are primary, which is the default. So then all of the reads come directly from the primary. Primary preferred which allows reads to be routed to secondaries but the primary is still the preferred option. Secondary, which means reads are routed directly to secondaries. Secondary preferred which means they will only go to a primary in certain circumstances. And then nearest which is then the node that has the lowest latency to where you are querying from. However, you do risk reading stale data if you read from a secondary. This is generally fine for analytics. However, you should generally not use it if your goal is to increase the general capacity for your normal application traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (4), [[Databases]] (2)
> **CLI Commands:** find (12), make (1), node (1)
> **Env Vars:** mndb (4)
> **Code Identifiers:** findone (2), readconcern (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** go back to (1), previous video (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Comparison operators](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=0)** - [Instructor] Let's talk about using comparison operators. There are eight comparison operators that you can use in [[MongoDB]]. The first six are the common ones you'd expect, $eq for equal, $gt for greater than, $gte for greater than or equal, $lt for less than, $lte for less than or equal and $ne for not equal. Let's try these out on the terminal. All right, again, we're going to be using the sample data database. And on this, we are going to be using the inventory directory. So just to remind ourselves, we're going to look at one document from this collection so that we know the structure. So this contains information about cars. All right. Now, if you look into this document, there's a variations array that contains different variations of the car in different colors. Each of these color variations has a quantity assigned to it. So that's how many cars with that color are in stock. So if we wanted to search for a specific car where the quantity is more than a certain number, we could do that by specifying it like this. So we would access the quantity field with variations,
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=98)** variations.quantity. And then, we would specify a document here and inside the document, we would use one of the operators. For example, $gte for greater than or equal and then we could say eight. Now this would return any document, in this case, just one document, but this would match any document where one of the quantities in the array for variations has a quantity higher than eight. So if we make that a lot higher, 17. Oh, okay, that would return the same one. Try 18. Still the same one 'cause we've got one in 20 that has 21. Say we've got 22 and then we get one back that just has one variation in crimson where the quantity is 26. All right, so that is how you would use $gte. The other operators are very similar. We can try one more. So let's look for a car. Just one, where maybe the price is lower than, let's say $1000. I dunno whether there is one. There is none. Okay, let's try something else. Let's try lower than 2000. Okay, and we get back this one.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=191)** Is there any that is smaller than this? We can check by just doing 1,700. Okay, and this is a perfect example for .findOne just returning the first one it finds. So that doesn't necessarily mean it is the lowest one available. Okay, cool. Let's go back to the slides and look at the remaining comparison operators. There are two more operators that may not be obvious. They are to check whether an element is equal to one of multiple values and to check whether an element is not equal to all elements specified in an array. Let's look at what the two are and then add some examples to make that clearer. Okay, so the first one is $in and the other one is $nin, so not in. All right, let's look at examples for these on the terminal. Okay, we're going to be looking at cars that have a variation that is either blue or red. We're going to search for cars that are either blue or red. And the way we do that is we say findOne and we specify variations, .variation. And then we would say $in and we want it to be either blue or red. So the way we specify that it can be blue or red is we add an array and then we specify both values.
>
> **[4:49](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=289)** So we'd say blue and red. Okay, cool. So let's execute that. And we get back one car where there is a variation that is red. Okay. The $nin or not in operator allows me to search for items where the color is both not blue and not red. In more general words, this operator allows you to match on documents if the field value of a document is not among the specified values in the array. So say I hate both blue and red and I only want cars that are not blue and red, I can specify it with the $nin operator. So let me just add an N in here. Okay. And now we get back cars that are not blue and not red. There is a small gotcha here. The $nin operator will also match on items that do not have the variation field, meaning they do not have a color specified. This is a common gotcha, so look out for it. If you want to make sure a document has a specific field, you can check that it exists with the dollar exists operator. We'll cover that later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** findone (2)
> **Tools:** terminal (2)
> **Warnings:** gotcha (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### [Logical operators](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=0)** - [Instructor] There are four logical operators that you can use in [[MongoDB]], $and, $or, $nor and $not.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=11)** Let's look at each one separately. Once again, we're going to be using the sample data database. If you have switched ranges, type in use sample data. All right, now, we're going to be using the inventory collection. So let's just briefly remind ourselves what a document in that collection looks like. Cool, okay, so now, let's look at each operator, starting with $and, and I'm going to just start writing a query to show you what that looks like, and we're going to be using the $and operator. So I'm going to start with that. Cool, so the $and operator takes an array of multiple documents. Each document specifies a condition that documents have to match in order to be in the results set. So in more general terms, the $and operator allows me to query for items that match multiple conditions. So I could, for example, ask for items where the quantity is not zero and where the quantity field exists. So let's do that. The way I specify that the quantity field has to be not zero is I say variations.quantity, and then I put here a document in which I say dollar-not-equal zero. Now, if you remember in the last video, I said
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=108)** the dollar-not-equal operator actually will also match documents that just don't have a quantity field or where the quantity field is not. So that's why we would generally want to add a second condition and add that that field has to exist. So that's what I'm going to do in the second document condition here. So I'll add variations.quantity and in this case, it has to exist. We can check that with the $exists operator, and it should exist. So we'll say true. Okay, now this will return a car to me where the quantity is not equal to zero and where the quantity field exists, and we got that back, great. Let's look at the next operator, which is the $or operator. So, and let's start a new query db.inventory.findOne, and we'll start with the $or operator. The $or operator also takes an array of documents, an array of conditions. So in this case, I'm going to have three conditions, and what I want to query for is for cars that are either blue, green or teal. So I only want documents if at least one of these colors is available for that car.
>
> **[3:25](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=205)** So the way I match on that is I just specify variations.variation and then the color name. So blue. The next one is variate, and I need to put quotes around this because we are accessing a nested document. We need to add quotes around this, variations.variation. The next one is green, and then we've got one more for teal. Variations.variation. Okay, cool. So running this now, I get back exactly one car where, because I'm only searching for one document. Remember, where there is a color available that is either blue or green or teal. In this case, it is teal. Okay, so again, in general, the $or operator allows you to query for documents that match at least one of the listed conditions that you put in the array that you passed the $or operator. Okay, let's look at the next operator that I want to show you, and that's the $nor operator. The $nor operator is closely related to the $or operator. It just does the opposite. It says not or. Okay, so let's start a new query, db.inventory.findOne and inside this document,
>
> **[5:01](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=301)** we'll start with the nor operator and again, we're passing an array to that operator, and the array will have two conditions. Okay, so here I want to look for cars where the price is not greater than 8,000 and where the car is not blue. So the way I do that with the $nor operator, since we already have the negation, is I would say price, and then I would say the price is greater than 8,000. So because it's the $nor operator, it will match document that do not match this condition. Okay, and then the second condition is that variations.variation should not be blue. So this will now return to me car where the price is lower than 8,000 and where there is no variation that is blue. Okay, there is one more operator that I want to show you, and that is the $not operator. Now, this one does not work like the other ones. You do not pass an array to it. So the way the $not operator works is just by allowing you to say something like something is not greater than 8,000. So we could say, for example, yeah, the current braces.
>
> **[6:40](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=400)** You could say variations.price and then $not and then inside here, we would have to have another expression. So it would have to be not greater than 2,000. If you just want to say it's not equal to, for example, the color blue or something like that, then it would be the $ne operator instead. Okay, so here we now again have cars where the price is not greater than 2,000. So it is actually lower than 2,000, and, of course, this is wrong because the price is not variations.price. It is just the price field. Okay, and now we get a different one back. So what happened in the previous one is actually interesting. Again, we have a field that doesn't exist. So the $not operator happily went, oh, okay, well, it's not here. So this one is clearly fine. Not what we wanted, but we wanted to match on the price field, which we did the second time around. Sorry about that. Okay, I will see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Analogies:** for example (3)
> **Code Identifiers:** findone (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Sort, skip, limit](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=0)** - [Instructor] Something you use very often when accessing data is sorting, to return the results of a fine query in a sorted manner you can add the sort method after the find method. In this example, I'm going to be using the movies collection and I'm going to just perform a find query and then add the sort method, as the argument to the sort method, I'm going to pass on a document with the field name that I want to sort on, in this case it's the title of the movie. All right, now this is a bit hard to pass cause there's a lot of data. So I'm actually going to run this once more and I'm going to add a second argument to the find query where we project out only the fields that we want, in this case, I'm going to say, we're going keep the title, the director and the genre fields. All right, that's a bit easier to pass. And now you can easily see that the results here are sorted 'cause all of the results' titles start within an A. You can also sort the other way around, if you specify negative 1, now we're going to have a lot of movies starting with Z, X and W. You can also sort the results based on multiple fields. So let me go back to this. And instead of just sorting by the title I am now also going to sort by the director's name.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=96)** So I'm going to sort by the director first and then I'm going to sort all of the movies, per director, alphabetically. All right, cool. So this now sorts everything by the name of the director. And if a director has multiple movies then those will also appear in alphabetical order. Next to the sort method, there is another important method that you should know about, and that is the skip method. If you want the results on a sorted order, but you want to skip the first 10 or however many results, you can do that. The way you do that is, you just add the skip method at the end, and then you pass on a number of how many documents you want to skip. So right now we've got directors that all start with a letter, A. I'm guessing if I skip the first 100 results, we're going to have directors that start with the letter B in their first name, and yeah, that just about checks out, cool. Next to sort and skip. There is a third one, and that is limit. So on top of sorting and skipping, you can also limit the results that you get. And to that, you just add the limit method at the end. Now I can say, I want to limit the results to 3. And now I only get 3 movies back. There are a few things you should know
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=191)** about these operations. The first thing is that, if sorting your data is a common query pattern, that means, if it's a query, your application will often send to the database, it should be supported by an index. That will make this query a lot faster and not waste any resources sorting data over and over again. However, if this is not a common query pattern or you can't add an index, using a sort with a limit, will make the query return faster because [[MongoDB]] can use a faster sorting algorithm to only return the top end results. The second thing you should know is that if you use sort, skip and limit in combination, you can specify them in any order you like. However, MongoDB will always perform the sort first, then the skip and then the limit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [updateOne and updateMany](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=0)** - We already tried out the updateOne command a bit earlier but there are some things about it that we didn't cover. So let's go over this once more. To update one document in a collection you need to use the db.collection.updateOne() method. In the first part of the query you need to specify the query predicate. That means the condition that the document that you want to change needs to match. Be aware that if multiple documents match the document, only the first document that the database finds will be updated. Anyway, back to the query. The second part that you need to specify is what the query should change. So, let's do one more example of these, and let's go back to the database that we used in the beginning. So, let's use the blog database. So, let's briefly check which collections are available and we've got the authors collection. So, for the db.authors collection, let's just find the documents, okay. And now I'm going to change one of these documents. So I'll say db.authors.updateOne(). And now in the first part of the query I'm going to specify which document to update. I'm going to update my own document. So I'm going to say, the name has to be Naomi Pentrel. And then, what I'm going to do is I'm going to add a second argument
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=95)** to the updateOne() method. And that is where I specify what I want to change about it. So in this case, I'm going to use the $set operator and I'm going to use it to add a new field. The field is going to be called, message and inside it I will just add a message. And that message will say, Hello World! Cool. So I've modified the document. If I search for all documents again you can see this first document now has a message saying, Hello World!, in it. Okay. Now, updateOne() is not the only method that you have available to yourself. If you want to update documents, if you want to update multiple documents you can do that with the updateMany() method. So, let's do that, db.[[Microsoft Office|office]].updateMany(). And what we could do here is match all of them. Which is what we do if we just specify in the empty document in the first argument. And then inside this, what I'm going to do is I'm going to set a message for everyone. So, I will set the message field and I will set it to, Hello. Let's run this. Look at all of the documents. Everyone now has a message in it, and it even changed mine.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=189)** Now, the $set operator is not the only one that you've got at your availability. There is also for example, the $unset operator. Let me show you what that one does. So, the $unset operator allows you to remove a field. You still have to specify the field and you still have to specify a field value. However, that can just be empty. It doesn't actually matter what you specify there. Okay, so let me run this and let me check once more what the author's documents look like. And as you can see, the message field has disappeared for everyone. All right. There are multiple operators that you can use to update documents. Let's look at some of them. The most commonly used operators include: $set, $unset, $inc, which increments a field value by a specified positive or negative amount. $mul, which multiplies one or more field values by a specified value. $max, which updates the specified field to the specified value if the specified value is bigger than the current value. $min, which does the same, but if the specified value is smaller than the current value. There are a few more but these are the most commonly used ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Code Identifiers:** updateone (5), updatemany (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - we (1)

#### [Arrays](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=1)** - In this video, we are going to again be using the sample data database and we're going to be looking at the movies collection. So let's just remind ourselves what documents in the movies collection look like. And here we've got an actors array and a genres array. In this video, we're going to talk a bit about how you query with arrays. So if you want to, for example, query movies that should have the genre, let's say, comedy, the way you would do that is you would say db.movies.findOne. Well, let's actually use the normal find command. And then you would specify the genre field to be comedy.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=55)** It doesn't matter that there is an array here. What [[MongoDB]] is going to do is it's going to check whether comedy is any value inside the array. So here, for example, we get back multiple documents. If you look at the top one here, it has only one single genre entry, and that's comedy. And the last document here has an array with four different genres which is comedy, crime, drama, and war. Now you can also query for movies that should match the exact array that you specify. The way you would do that is you would specify the genre field name but then you would pass in an array of values. For example, you could say comedy and then drama and then thriller. And this would now give you back all of the movies that have those specific genres in the array. Now, when you're working with arrays there are two operators that are commonly also used, the $all operator and the $elemMatch operator. Let's look at each one of those. The $all operator allows you to select documents
>
> **[2:28](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=148)** for which all specified entries are present. So you could query for all movies that are both comedy and drama and can be anything else but it has to be those two. The way you would structure this query is you would say db.movies.find and then inside here you would put the genres field. Then you would use the $all operator and you would pass in an array because you have a list that you would like to match all of. You would specify comedy and drama.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=195)** So now you get back a lot of different movies. For example, one that is comedy, drama, and romance. One that is comedy, drama, and thriller. One that is comedy and drama. Now let's talk about elemMatch. You can use the $elemMatch operator if you want to match on a document if at least one element in the given array satisfies all the specified conditions. So in this case, let's look at the inventory collection because there we have an array with multiple documents inside. So just to remind ourselves, db.inventory.findOne. Let's look at one of these documents. And here, the variations array has multiple documents for each variation And then it has a quantity. now what this allows us to do is we can query the inventory collection. And what we can do is we can specify multiple conditions that have to be matched in one document in the array. So let's use the variations array and inside that we're going to have a document and we're going to use the elemMatch operator here to specify that we want one document inside the variations array that matches these conditions. So the first condition that I could say
>
> **[4:49](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=289)** we want it to match is we want to have the variation blue and we want to make sure that there are at least eight cars available, so at least quantity eight. And for that, we'll say greater than equal eight. Let's return that. Okay, cool. So if you want to look at it once more, I'll have the query at the bottom, but what happens here is mongodb checks for documents that have the variation blue for which quantity is above or equal eight. So we get back here one Subaru where there is 29 cars available that are blue. And then there is another car above which is a Mitsubishi where we've got 28 of the variation blue. So that is how you would query for that specific variation. Now you should also know how to update arrays. And for that, there are some operators that you can use, namely $push, $pop, and $addtoset. Let's briefly try those on the movies collection. So let's go back to the movies collection, let's look at this again. Now what we're going to do is we're going to use one specific document
>
> **[6:23](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=383)** and we're going to temporarily modify it by adding another genre to the genre array. So what I'm going to do is I'm going to say db.movies.updateOne. And then again, the first argument we pass in here is the query predicate, the thing that we're going to match. And I'm going to actually just match this ID from this one document that we had up here. And now what I'm going to do is I'm going to specify how this document should be changed. So I'm going to use the $push operator to add another genre. So I need to specify the genre field. And then the genre I'm going to add is called test. And that says there was one document matched and we modified one document. Great. So let's find that movie again. And now I'm going to specify the ID in here just to make sure we get that same document and you can see test was added to the genre array. So the next operator that you can use is $addtoset. And the way you use $addtoset is really exactly the same as $push. However, $addtoset will only add the element that we have, that we specify,
>
> **[8:01](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=481)** if it's not already present in the array 'cause it considers this list to be a set and in a set, each item can only exist once. So if I run this now, it's actually not going to modify the array because test is already present. However, if test wasn't there, it would modify that. We can test the $addtoset operator, if you want. You don't need to do this, but you can do that with just typing in a different genre. So let's say there's a green draw. If we do that it will now be modified. And if I search for the document again, we will now have three genres, musical, test, and green. Now there's one more operator that I want to show you. And that is one for removing things from an array. So now I'm going to remove the two items that we added to the array and I'm going to do that using the $pop operator. So I'm going to say db.movies and then I'm going to say updateOne. And I'm going to update the same document that we've been editing this entire time. And then in here, in the second argument, I'm going to use the $pop operator and I'm going to use it on the genre field. I'm going pop the last item. Now let's look at this document once more and we have the green item is no longer present.
>
> **[9:38](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=578)** I can do that once more. And the test one is now hopefully also going to be gone. That's great. You could also specify negativeOne as the argument to pop and that would remove the first element in the array instead. There you go. You've added and removed items to an array in a document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Code Identifiers:** elemmatch (4), findone (2), updateone (2), negativeone (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Cross-References:** go back to (1)
> **Speakers:** - in (1)

#### [Transactions](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=0)** - [Instructor] In [[MongoDB]], an operation on a single document is atomic. If person A issues a command to change some values in a document and person B issues a command to read the same document, there are two things that can happen. Either the read will happen before the document has changed or the read will happen after the document is changed. You will not receive the document with partial changes. However, if person A issues a command to change values in multiple documents and person B tries to read the same documents at the same time, person B could see some documents that have changes already and some that do not. If this is problematic for your application, then you need transactions. Transactions guarantee atomicity of reads and writes to multiple documents. That means a read within a transaction returns all documents as they were when the read began. For writes in a transaction, that means that either all writes happen or none. The database cannot end up in a state where only some of the rights in a transaction have happened. Transactions can be used across multiple operations, documents, collections, and [[Databases]]. Let's try out a transaction in the terminal. All right, we're going to be using
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=95)** the blog database for this. The first thing we are going to do is we're going to create a session object, and the way we're going to do that is we're going to call the getMongo method on db, and then we're going to call the startSession method on that. Inside that, we're going to pass a readPreference and the readPreference we're going to pass in is the mode to read from the primary. Okay, so that has created a session object. The next thing we need to do is we need to start the transaction, and we're going to do that by calling the startTransaction method on the session object. Okay, that's the session started. Now the next thing that we're going to do is we're going to perform operations on the session object. So we're going to type in session, and from the session, we can get the database. We can get a database, I should say. In our case, we're going to get the blog database because that's the one that we're going to operate on. From the blog database, we can then access our authors collection. And on the authors collection, I'm going to do pretty much the same update that we have been doing multiple times now.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=188)** I'm going to call the updateMany method to update all the documents. I update all of them by passing in the empty document here and the update that I'm going to perform is using the $set operator to add a new field to each document. The field is going to be a message field and the message I'll pass in is a string and I will just say transaction occurred. All right, cool. I'm going to execute this and we can see here there is a matchCount of four and a modifiedCount of four. Great. Now all I need to do is say session.commitTransaction.
>
> **[3:58](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=238)** That finishes the transaction and then I can end the session. All right, great. So if I now check out the authors collection. Authors, there we go. I should see that a transaction occurred. So that is how you use a transaction. I should say that transactions come with a [[Microsoft Word|word]] of warning. You should only use transactions when you really need them. Overuse of transactions can lead to performance degradation. If you find yourself needing transactions for more than a very small percentage of your update operations, you should consider whether you can change your data model so that update operations only update single documents. That way they are atomic by default and you don't need to use transactions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1), [[Databases]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** readpreference (2), getmongo (1), startsession (1), starttransaction (1), updatemany (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [$expr](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=0)** - [Instructor] Congratulations, if you've got this far, you now know most of the ways you can perform CRUD operations. If you need to perform more complex queries, you need to turn to aggregation pipelines, at least most of the time. And we'll discuss those in the next few videos. But, you may have noticed, I said most of the time, there is one call operator that can do things like comparing different document values. That's the $expr operator, and I'm going to show you how to use that one now. So, if you have been following along, you'll be in the blog database, so the first thing you'll want to do is switch back to the sample data database. And we are going to be using the movies collection. So, you know my favorite thing to do, first check out one document from that collection to remind us how that collection is structured. All right, so, in this example, I am going to look for ratings of movies. So let's first of all filter out everything but the ratings, so the way we'll do that is we're going to use find, and then we're going to say ratings, one. You know what, we'll also keep the title. Okay, so now we've got a bunch of movies, but we only have the title and we have the ratings. Now inside each rating, you see there's actually two different ratings.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=93)** There's a soft avocados rating and an MNDB rating. Now the soft avocados rating is on a zero to 100 scale. The MNDB rating is on a 10 point scale, so we can't really compare the two. However, we could compare them if we multiplied the MNDB value by 10. So let's do that. And that's where the $expr operator is going to come in handy. All right, so, we're going to perform this query on the movies collection of course. And we're going to use the .find method. Inside here we're going to use the $expr operator, and that one takes as an argument a document. Inside this document, I am going to want to look for movies, where one of these ratings is greater than the other, namely where the MNDB rating is higher than the soft avocados rating. So the way I do that is I use the greater than operator, and then I pass in an array because I have two values. The first value is going to be the MNDB value, and this one we'll need to multiply by 10. So we can do that here with $multiply. And then multiply again, takes an array as input. And this array multiplies a value. That value is ratings.mndb, with a number times 10,
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=192)** that's what we want to do. Notice that here I put a dollar in front of ratings.mndb, that is because we are not actually interested in the string literal, and the multiply field doesn't know that, if you don't put the dollar value in front of it. So that means it's going to reference the value of that field, and it's going to know that we are specifying a field path, and to get the value from that. All right, so, let's now add the second value that we are comparing against, and that one is a lot easier. That one is just $ratings.soft_avocados.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=237)** Now unless I did any typos, this should work, and of course I did a typo somewhere. All right, so let's figure out what we did wrong here. Oh, I see. This is not actually a document, this should just be a value. Okay, there we go. Now, we got back all of the documents where the MNDB value, once it was scaled, because it was multiplied by 10, was higher than the soft avocados rating. So that means on this last document here, the MNDB value is four, four times 10, 40, 40 is bigger than 17, so that's why this is in the results sets. So this is one of the example use cases where $expr can come in handy. With $expr you can use a lot of different operators. Most of these, in fact. You don't need to pause this video and try and read all of these, what I want you to take away from this slide is that any common operations that you'd expect to be able to do while programming, can be done with [[MongoDB]] as well. If you want to know all of the operators that you can use, you can go to the MongoDB documentation, and check out aggregation pipeline operators. This has a list of all of the operators that are available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Env Vars:** mndb (7), crud (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** soft_avocados (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create app](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=5)** - In this exercise, I am asking you to create a database that could power an app that allows you to order food. To the end, please create an orders connection with a few documents in it. Each document should have information about the user, like, their name, address, phone number, email and account balance, information about the restaurant like, the name, address, and phone number of the restaurant and the documents should also have the time of the order and the items in the order with the associated price. Please also think about which indexes you would create for this collection. Then, as a second step, please write a few queries. The first query I would like you to write is a query to find the most expensive order. Second query should just return all of the orders sorted by the name of the restaurant. The third query should return orders where the order total is bigger than the account balance. The last query should apply a 10% discount to all order totals.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### [Solution: Create app](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=0)** - [Instructor] Here I have two documents that will fit into our orders collection. I'm going to just copy these two. Inside [[MongoDB]], the first thing I'm going to do is I'm going to create a new database called order_app. Inside this database, I'm going to create a collection called orders and I'm going to insert my two documents in here. And we'll put these inside an array, so now I'll just paste. I'll close the array and I'll close the method. All right, cool, we've got these two documents inserted in the orders collection. If you want to check they're there, just run db.orders.findOne or .find. Okay, great. Now, I don't know for sure what common queries might look like for this app but I think it's safe to assume that we'll often be querying by a username and time or by a restaurant name and time. So the first index I'm going to create is on the username and time. Now, I don't actually have a username field but most apps nowadays use the email as the username, so that's what I'm going to do here. So I'm going to create this index on user.email: 1
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=97)** and then on time: 1. Great, that's our first index created. And then I'm going to create a second index and I'm going to create that on the restaurant.name. There we go. That's both of our indexes created. Now onwards to the query. The first query I wanted you to create was a query to find the most expensive order. Now, the way I would do that to perform a query on the orders collection and for that, we can just do find. And then we'll sort by the total. And we'll sort a -1, which means the biggest order will be at the top and then if we only want the most expensive order, we can limit the results we get back to one. And here is the most expensive order. It cost €10.47. All right, the next query I wanted you to write is to sort orders by the name of the restaurant. Now, the way we would do that is we would sort and then inside the sort document, we would specify the field restaurant.name and then we can specify 1 or -1, depending on how you want it sorted.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=193)** And in this case actually, both the restaurant names are the same. So this is not really telling you much. But if you chose different examples, yours should be ordered. Okay, the next query was to find orders where the order total is bigger than the balance on the account. This is something which you might want to do to check whether you need to charge someone's card or whether you can pay it with a balance. The way you would do that is to perform a query on the orders collection. That's the find query. And inside the find query, you would use the $expr operator. You would pass it a document and inside that document, you would use the $gt operator. The $gt operator gets an array because it's comparing two values and the two values you'd be comparing is the $total. That's the order total. And the user balance, which we'd access again with the dollar sign. So user.balance. Okay? And here we go, we've got one order where the order total is €10.47 and the balance is €10. I didn't actually specify a currency. I'm just assuming it's in euros because this is somewhere in Amsterdam.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=287)** All right, there's one more query remaining and that was to update all orders with a 10% discount. So the way we would do that is with an update query on the orders collection. And we'd use an updateMany query because we want to update all. And we'd use an empty document as the first argument so that it matches all documents. And then we would specify the change that we want to do. In this case, to get a 10% discount on the order total, what I'm going to do is I'm going to use the $mul operator to multiply the order total by 0.9, which is going to give us a 10% discount. All right, so I'm going to do that. And now if I try to get all of the orders, db.orders.find, then the order total is going to have decreased. So here we've got an order total of 9.42 and the other one is now 7.63.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **CLI Commands:** find (7)
> **Versions:** 10.47 (2), 0.9 (1), 9.42 (1), 7.63 (1)
> **Code Identifiers:** order_app (1), findone (1), updatemany (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Aggregation Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of stages](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=0)** - [[MongoDB]]'s aggregation framework allows you to manipulate and transform data in ways that are not possible with the normal queries that we've discussed so far. If you are familiar with Unix pipes, you can think of aggregation pipelines in a similar way. A pipeline can consist of one or more stages that each transform data and then pass the stages outputs onto the next stage, if there is a next stage. Accumulator stages, like the dollar group stage, must process all documents before results can be passed to the next stage. Other stages can pass results to the next stage as they are processed. There are many different pipeline stages. We will discuss some of the most commonly used ones individually in the next videos. There are some stages that are commonly used, but we won't spend time discussing them because you have already encountered them either as a query operator or as a dedicated method when we were talking about crowd operations. To perform an aggregation, you can use the Aggregate command and pass an array of stages as the argument. Inside stages, you can make use of pipeline operators. There are a lot of them. Essentially, any common operations that you can do on an object within a programming language have an equivalent operator. We will use a few
>
> **[1:32](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=92)** of these in the next few videos, but definitely not all. Feel free to pass this video and skim over them here. Or, if this is too small, go to the MongoDB documentation on all of the operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - mongodb (1)

#### [$group](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=0)** - [Instructor] Grouping data is a common pattern we need when accessing or manipulating data. Let's look at this in the terminal. In [[MongoDB]], you can group data by using the $group stage in an aggregation pipeline. For this example, we are going to be using our sample data. In particular we are going to be using the inventory collection so let's just remind ourselves of what that looks like. Okay, let's test out the $group operator. First I'm going to specify the collection on which we're going to perform the aggregation and then I'm going to call the aggregate method. The aggregate method always takes an array of stages as input. Each stage is inside a document, so that's where we start. And then we're just going to specify the $group operator, which also takes a document as its value. Inside the document, you have to specify an ID. The ID is the thing by which the data is going to be grouped. In our case, I'm going to group all of the cars in our inventory by the source and we're going to have to specify that with a dollar value because we actually want to get at the value of the field. All right, so let's do that. This gives us all of the different sources
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=94)** that are available in the data set. Well, not all of them. You can see down there it says type it for more. If I do that, it will give us the next set of results. But that in and of itself is generally not very interesting. What we generally want to do is we want to do some sort of accumulation. So going back to this aggregation query, generally people want to add more fields to each document. So they may want to know how many cars come from each source. So if I want to do that, I'm going to add a count field. The name of this field doesn't matter but it makes sense for me to call it count. And inside, I'm going to use the $sum operator to add one each time we encounter a new document. So if I execute this, it's going to give me an error. A pipeline stage specification object must contain exactly one field. So the problem here is that the count is on a level with a $group stage and it should actually be in here. So let me move the curly brace outside and now it should work. Great. And here we can see the different sources and the counts for each one of them. Now you can do more interesting things with this. You could, for example, add a field for the items
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=191)** and then push the title of each car. I think it's called a name. Yeah. You can push the name of each car to this field which will create an array of car names in the items field. So let's do that. There we go. And then I'll show you one more thing. So I could now also add an average price field and then I can calculate the average price from all of the fields that are in a group. So it's going to be price. Okay. And here we go. So now each source group has a count, it has an array of items, and it has an average price. That's pretty good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [$bucket](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=0)** - [Instructor] Much like the dollar group stage, the dollar bucket stage allows you to put documents into groups, but instead of grouping them by one value that has to be the same for all documents, you define bucket boundaries and ranges for a document value. If the documents values fall within that range, the documents will be sorted into that bucket. Let's try this out on the terminal. Again, we're going to be using the inventory data set. As before, the aggregate method takes in an array and then we're going to put into this array a document for the dollar bucket stage. Okay. The dollar bucket stage takes a document assets value. Inside the document, you have to specify some arguments. The first one is group by, and that's the field that you want to group by. So in this case, I'm going to be grouping by dollar year 'cause I'm going to be grouping the cars by the year of manufacture. Then, we have to specify the boundaries. So in this case, I know that the years of manufacture are somewhere in between 1980 and 2020. So, I am going to put this into 10 year gaps.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=99)** So that's 1980, 1990, 2000, 2010, and 2020.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=107)** Then there's one more argument that you can optionally specify, and that is the default argument, and that will put all documents that don't fall into any of the boundaries that you have specified, into another category. So here I'm going to call that just Other. All right, let's try it. Okay, cool. So here, we got back buckets of all of the cars that are in the inventory and we've got a count for each bucket. So, if we want to get more than just the count, we're going to have to add something to the aggregation pipeline. So let's go back into this and after the default argument we're going to add another argument and that's going to be called Output. So this now defines what else should be added to each bucket. So I'm going to keep the count one, but I'm going to have to specify it now because I am sort of overwriting the default. Inside count, I'm going to use the sum operator and I'm just going to add one for each documented encounters and then, I'm going to have another field that is cars, where I'm going to push the name and the model of the car so that it will create an array of documents of the car name and model. So, I'm going to use the dollar push operator for that. And then, that takes a document,
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=201)** inside the document we are going to specify the name to be dollar name, so that is the name's value for each document, and then model, and that is going to be dollar model. Okay, let's try this. Awesome. So we get back multiple groups now, and here we've got the Other group, which is all of the remaining models. But if we scroll up a little bit here we've got the group for 2010 till 2020, and this is all of the cars that fall into that group. Cool. Let's go back to the slides, there's one more related stage that I want to show you. Net stage is called Bucket Auto. The Bucket Auto stage defines the boundaries for the buckets automatically so that the documents will be evenly distributed onto the resulting buckets, resulting in similarly sized groups. So if you want to do that, the way you would is, let's go back to the first one, and we don't need the default argument here, we don't need the boundaries argument, we do need the group by argument. And then we will just say buckets, and we can say five buckets and that's it. Well, apparently it is not it,
>
> **[4:58](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=298)** 'cause it is throwing an error. Unrecognized option to dollar bucket. Of course, I didn't change the pipeline state, It should be bucket auto. Okay, and here we've got our buckets. Awesome. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [$unwind](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=0)** - [Instructor] If you have a document with an array you can use the $unwind stage to create one output document for each array element. Let's try that within the terminal. Again, we are going to be using the inventory collection, so let's just remind ourselves what that looks like. Okay, cool. And here we are going to unwind the variations array so that we can get a document for each car variation. Okay, the way we are going to do that is by first specifying the collection on which we're going to run the aggregation. Then we'll use the aggregate method. And inside it, you know it, there's going to be an array, with a document for the $unwind stage. And to the $unwind stage, we are going to pass a string, which contains the variations field name. And to that we are going to have to add a dollar sign at the beginning. Okay, let's try this. Awesome. We now have individual documents for each car variation. That's often very useful. For example, we can now match on only purple car variations. So let's do that. And the way we do that is inside the aggregation pipeline, we're going to add another pipeline stage
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=93)** by adding another document to this array. And inside this document we're going to add a $match stage. And as the argument to that stage operator we're going to pass in the variations.variation field.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=117)** Okay, and we're going to match on the color purple. That gives us nothing. That's because I have a typo. All right, so let's just briefly fix that. Great. Now we have all purple cars. So there is something about this that isn't quite optimal yet. If you think about this from how this data would get processed, we would unwind all documents even if we know that that document doesn't have a variation that is purple. That is not performant if you're going to do this a lot. So, in this case what you should do is you should actually add an additional match stage before the unwind stage, because [[MongoDB]] can directly filter out any of the documents that don't even have a purple variation in the variations array before unwinding it. So let's do that. Going to again, add this match stage and then say, variations.variation and say it has to be purple. Okay, cool. So this is going to be a lot more performant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [$merge and $out](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=0)** - [Instructor] The $out stage allows you to store the results of an aggregation pipeline in a new collection. Let's look inside of these pipes to see what happens as documents pass through this pipeline. Okay, now let's try the $out stage on the terminal. Okay, if you followed along here, we're actually just going to press up and use the pipeline we used in the last video to use with the $out operator. And what we're going to do is we're just going to add another stage at the end of this pipeline. That's going to be our $out stage. The $out stage takes as its argument a document. Inside the document is going to be a db argument, which is the database. For us that will be sample_data. And a collection argument, which for us will be purple. Or it could be anything else. I'll say it's called purple. All right. Now, if I run this, this should create a collection called purple, which will contain all purple cars. So, let's see which collections we've got now. And there's our purple collection. Let's query it and see whether it really contains only purple cars. Cool. And here we see that the collection actually contains purple cars. Great. This is awesome if you often run the same aggregation because you can store it once
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=94)** and then query the stored results instead. This is also a way to reshape a collection while keeping the original collection the same until you are ready to change any application logic to use the new collection. There's one closely related stage, which is $merch. Both $out and $merge can be used to create a new collection that stores the results of an existing aggregation pipeline. However, the $merch command also allows you to merge results into an existing collection. So, let's say our inventory had changed and we wanted to now merge into the existing purple collection. The way this would work is we would not use $out, we would use $merch. And then for the $merge stage, the arguments are slightly different. There is no db argument for this. There is only an argument called into, and that is essentially the collection name. Then there's a few new arguments, one of them is on. And that would be the field that we compare on to make sure that if they're duplicates, we can take an action. So here I'm going to compare on the ID field. And then I need to define what happens when there is a duplicate.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=189)** So when the ID is the same. I do that with the whenMatched argument. Now I'll just say, keepExisting in that case. And the other part of that is to add the whenNotMatched argument. And in that case, I will insert. Now, if I run this, this shouldn't change anything. But this is what you would do if you had data that changes. For the full syntax of the $merge stage and all of the options for the whenMatched and whenNotMatched arguments, go to the [[MongoDB]] documentation for the $merge stage and scroll to Syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Code Identifiers:** whenmatched (2), whennotmatched (2), sample_data (1), keepexisting (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [$function](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=0)** - [Instructor] There is one pipeline operator, which you can program to be whatever you need it to be. The $function pipeline operator allows you to write [[JavaScript]] functions that operate on the field values in your documents. Let's try that out. I'm going to use the movies collection for this example. So let's briefly remind ourselves what the documents in that one look like. All right, as you can see, the actors field value is an array of actors. However, that array is not alphabetically sorted. If we wanted it to be alphabetically sorted, that's where we can use $function, for example. All right, so let's try that. I'm going to specify the movies collection and then call the aggregate method on it. As usual, I'm going to pass an array to the aggregate method and the array will contain our stages, in our case, just the one stage and we're going to use the project stage. The $function operator is just an operator so you will have to use it inside another stage like the $project stage. The $project stage allows us to change or project away certain fields. So the first thing I'm going to do is I'm going to tell it
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=95)** that we would like to keep the title field. And the way I do that is I just say title: 1, and then we're going to look at the actors field. So this is where we're now going to be using the $function operator. The $function operator takes a document as its argument with three different arguments inside it. The first argument is the body argument and that takes a string in which you code the JavaScript function that you want to use. So the JavaScript function that I'm going to use here is just going to be function. I'm going to pass actors as the argument to it, and inside the function body, I'm going to return actors.sort, and I'm going to put in a column. Great, now aside from the body argument, the $function operator also takes an args argument for the arguments that you pass it. That in turn takes an array, just in case we have multiple arguments. In our case, the array only has one member and that is the $actors field value. All right, aside from body and args, there's one more argument we need to put in here, and that is lang for language.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=188)** And in our case, lang is just js for JavaScript. Okay, let's run this. Awesome, and here now we've got the result documents, which have the title and the actors in alphabetical order, just as we want it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [$lookup](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=0)** - [Instructor] The $lookup stage allows you to perform joins. That is to pull in data from another collection based on a matching field. In this example, we have an order document, which contains a car ID and some other order information, and we have an inventory document, which contains the same car ID and information about the car. The $lookup command allows you to merge information from both documents by matching the car ID field. Of course, this would not only happen for one order document, but for all orders. Let's look at it in code. All right, so I'm going to be using the orders collection to show off how the $lookup stage works. And of course, we are going to use the aggregate method again because $lookup is an aggregation stage. The aggregate method takes an array as its argument. And inside the argument, we are going to have just one document for the one lookup stage. So here we are going to use the $lookup operator and that operator takes another document as its input. And inside that document, we are going to specify four fields. The first one is the from field. That is where we specify the collection that we are looking up data in or that we are pulling data in from.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=95)** Okay, so that one is going to be inventory in our case. The next field that we need to specify is the localField. The localField is going to be the car ID that we match on. So for inside the orders collection, the ID is going to be just the field car_id. Then the next field that we're going to specify is the foreignField. Now, that is the field that we match on in the foreign collection in the collection that we are pulling data in from. So that is the inventory collection. For the inventory collection, the car_id is actually just the _id field. All right, now there's one more thing that we need to specify, and that is the field as, and that's going to be the name of the field in the result document. So in this case, I'm just going to call that car_id. Okay, now let's press Enter and see what happens. All right, so here we've got an order document that has had the information about the car pulled in. So if you look at the car_id field, you can see an array, which has the matched car document pulled in. So now if you wanted to manipulate the data further,
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=190)** you would be able to use the data from both collections in your pipelines. Okay, now there are two things that are very important to consider when you are using joins. The first thing is that you absolutely need to have an index on the foreignField if you're going to perform this as a common query. Otherwise, the performance of these queries will not be good because the lookup query will have to perform a collection scan for each document, meaning that it needs to, for each order document, check the entire inventory collection to check every single document whether it is a match. So if you're familiar with O notation, that is an N square cost. Not good. That's why you need indexes here. The second thing that you should know with $lookup is that your common query patterns should very rarely require joins. So if you find yourself using a lot of lookups, this is a telltale sign that you are very likely not structuring your data well for [[MongoDB]]. MongoDB is not optimized to perform a lot of joins. In MongoDB, data that you query together should generally be in the same document. So if you find yourself using joins, always ask yourself should this data just all be in the same document? And if it should, then try to change the data model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3)
> **Code Identifiers:** car_id (4), localfield (2), foreignfield (2)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Performance](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=0)** - [Instructor] Aggregation pipelines are super powerful, but they also require more RAM and CPU than CRUD operations. So you'll want to keep an eye on performance issues with them, especially if the amount of data you are processing is large, the operation will be run frequently or the operation is intended to provide real time data fast. Luckily, [[MongoDB]] allows you to see information about how aggregation pipelines and other queries perform fairly easily. Let's look at it on the terminal. All right, so I have prepared a query here that we are going to use to see some performance information from MongoDB. In the first line here, you can see we are using the movies connection, and then we are calling the explain method and we are passing it a string that says executionStats. That will tell MongoDB that we are not actually interested in the results of the aggregation pipeline that we want to execute here, but instead we want to see the [[Statistics]] of how it executes. Let's briefly talk about the query itself so that you know what's going on. So as I said, this uses the movie's collection, and what happens is for each movie the query will get the year that the movie was released in, and then it will look up in the inventory collection which cars were released in the same year as the movie came out,
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=94)** and it will pull that car information into the results. Now, I know this is a bit of a contrived example, but we're only going to use it to look at some performance statistics. All right, so let's execute this. Cool, and we get back a rather large document, so let me scroll up quickly. All right, cool. So to understand what happens here, you need to understand how MongoDB runs aggregation pipelines. When you execute an aggregation pipeline the MongoDB profiler comes up with multiple plans for how to execute this query using different indexes if multiple indexes are available. The profiler then executes all of the different plans and sees which one finishes first. If the query is really big it will only execute each plan until one of the plans has reached a certain threshold of results, and then it will declare that plan the winner. Since we passed in the executionStats argument to the explain method, we now get all of this information about how the profiler went about this and which query plan won. So if I scroll down a little bit here you can see some information about the winningPlan. And inside this winningPlan document
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=190)** you can see what happened. So in this stage there was a transformation and that is where we changed the date that was in the movies collection to a year, And it tells you in the inputStage field value that what happened here was a collection scan. Now, usually collection scans are things that you should look out for, however, in this case, it makes sense that it was a collection scan, because I asked for all of the results for all movies. Okay, so let's scroll down a little bit further. So here, we've got information about the second stage of the aggregation pipeline, and we can see how many documents were examined, and how many keys were examined, and how many collection scans were performed. The documents examined in this case are 1 million, and that is because there's 1000 movies and 1000 cars. And for each individual movie the database has to check the entire collection of cars to check for matches, because there is no index. That is not great, and something we would want to fix if we were to execute this query often. Now the second line totalKeysExamined tells me that no index was used, because keys are what's inside an index. So if that's zero, we know no index was used.
>
> **[4:45](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=285)** The next line collectionScans is just a really big number. Generally, if collection scans, all the docs examine numbers are very big or the keys number is very low. That is something you want to look at if you want to improve performance. Now, we also get told here how long MongoDB spent in this stage and that's 830 milliseconds, that's quite long. If you remember, many videos ago, I said that slow queries are logged to the MongoDB logs. So let's actually check that out to see whether this was logged there. So I'm going to open up my code editor and in here, I am just going to open up my mongod.logs, and I'm going to scroll all the way to the bottom, and up here I actually already see the Slow query. Now let me take this entire line and copy it, and open up a new tab, and just paste that here, and format the documents so that you can see what is in this. So this is the output for a slow query. Here we get the message, there was a Slow query, you can see the pipeline and that caused the slow query, and then you can see some execution stats here, so you can see when this was executed.
>
> **[6:19](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=379)** And then you can actually see more of which plan was chosen or how many documents were looked at, so that is all in the year execution stats. Now, what you can do is you can take this planCacheKey, and you can go into MongoDB and actually check for more information as well. But it is easier if you just do the explain execution stats on the query that was already run. Okay, so now you have seen how you can spot this in the logs. There's something I should remind you of though, just because a query does not show up in the mongod.logs does not mean it is performant. Slow queries are only logged to the mongod.log file if they are slower than 100 milliseconds, if they are 99 millisecond slow, they are not logged, but that doesn't mean they are performant. Okay, back to the slides. There is one more thing that you can do to get more performance information from MongoDB. If you are looking for a way to find slow operations without looking at the logs and without individually checking for execution stats for each query that you run, then this is for you. You can enable a Native Profiler to collect data for operations slower than a specified limit, by setting the profiling level to one
>
> **[7:54](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=474)** and specifying a time limit. In this example, I'm saying that the slow millisecond limit is 20. This will then make MongoDB store operations that exceed the 20 millisecond time limit in a profile collection inside the system database, and you can then query that collection. Be aware that using the profiler with low slow ms values can slow down your deployment. Okay, there are few common optimizations for aggregation pipelines that I want to leave you with. The first one is using $sort with $limit together in that order, because that makes it possible for MongoDB to perform sort operations faster. The second one is to use $project as the final stage. Contrary to what you may hear somewhere else or read, it is not better to project early in your pipeline. You will often hear that projecting away fields you don't need as early as possible will make your pipelines perform better, but this is an anti-pattern that may result in the database not being able to use indexes. If it is possible to project away fields earlier the optimizer will do that for you. So just put the $project stage as the final stage. The next one is using hinting, which means you can tell an aggregation pipeline
>
> **[9:26](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=566)** to use a specific index if you notice it is using a less optimal one by default. Use this with caution. As a last note, if you find yourself running a lot of aggregations that impact the performance of your database deployment, you can set up your deployment to have one or more dedicated analytics secondaries, which can handle these workloads without it impacting your deployment's performance for regular workloads. Okay, one last thing, if you run aggregation pipelines and you notice directly that your deployment is slowing down, you may have to kill that operation. To do that, you use db.currrentOp true, to figure out which operations are currently running, and that will also return an operation number for each operation. Then you can use the db.adminCommand to perform a kill operation for that running operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (11), [[Statistics]] (2)
> **Code Identifiers:** executionstats (2), winningplan (2), inputstage (1), totalkeysexamined (1), collectionscans (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** ram (1), cpu (1), crud (1)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** be aware (1), caution (1)
> **Documentation:** the docs (1)

#### [Challenge: Write aggregation pipelines](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980&t=0)** - [Instructor] To complete this exercise please write an aggregation pipeline to answer the following question. How many movies were released in each genre since the year 2000? Store the results in a new collection called genres2000.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Write aggregation pipelines](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=5)** - [Instructor] Okay, to answer this question we are going to perform an aggregation query on the movies collection. We are going to pass an array to the aggregate method with multiple stages inside. The first stage is going to be a project stage, and in the project stage we're going to project away all fields we don't need. And we are going to change the release year to only be the year. So, to change the release year field to only be the year we are going to use the year operator. We did not explicitly cover this operator in the course, but I hope you found it in the documentation. Okay, aside from the release year we are also going to retain the genre field, the runtime field, and the title field.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=75)** Okay, let's try this for now just to make sure it works. That seems to work as expected. Okay, so let's add the second stage to this. In the second stage we are going to perform a match. And we're going to match specifically on all movies where the release year is greater than or equal to 2,000.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=106)** Okay, let's try whether that works. That looks like it works, very good. The next stage is going to be an unwind stage. And we are going to unwind the genres field so that we get one document for each genre in each movie document. Okay, now, the last thing that we need to do to get the answer to our question is to add a $group stage, and we're going to group by the genres field.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=157)** Then for the accumulator fields we're going to have one within array of movies, and the way we're going to add to that array is we're going to use the $push operator. And then inside the document that will get pushed to the array we are going to have the title of the movie, the runtime,
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=191)** and the release year. Okay, outside of the movies field we are also going to add a second accumulator field, which is count. And that's going to contain the actual answer to this. The other field is merely to have some extra information, so if your solution doesn't contain that that is perfectly fine. Anyway, inside the count field we're going to have the $sum operator with a one, which will add a one for each document it encounters. Okay, let's try this once more. Okay, and here we've got one result where there are a lot of movies, and if I scroll up far enough it tells me which genre this is. This is the Thriller genre. And here we've got the movies array, and then we've got the count, which is 95 movies in that genre. Okay, now there was one more thing to this exercise, and that was we were supposed to store the results in a new collection called genres2000. So, to do that we're going to add one more stage to this, and that's $out stage. The $out stage takes as its argument a document where you have to specify the db, which is the database. In our case that will be sample_data. And then the collection,
>
> **[4:43](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=283)** which we were supposed to call genres2000. Okay, so let's do that. Run it one last time. Now, we don't get any output, but if I try to query the genres collection I should get back one of the results. Okay, and in this case it's actually somewhere where there's no genre listed, interesting. Okay, cool. Anyway, that's the solution to this exercise.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** sample_data (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)


### 6. Data Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Relational vs. document](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=0)** - [Instructor] When you hear [[MongoDB]], you also often hear relational and document model or [[NoSQL]], which isn't a great way to define the document model. We covered already what the document model is. Let me briefly explain what relational is. In [[Relational Databases]], data is structured in tables. Think of [[Microsoft Excel|Excel]] files. So you may have an author's table, which contains the information about each author. And then you may have a books table and links between the two. When you query data, for example, if you want to know the books each author wrote, you join the tables. That's roughly how it works. When comparing relational and document [[Databases]], there are at least three different ways to think about it. The first one is when you store [[JSON]] documents as they are in both database types. Both relational and document databases nowadays, generally support JSON objects, but the way you work with JSON documents differs in both cases. In relational databases, you generally store JSON inside a JSON blob. In MongoDB, you just store it. Working with JSON blobs inside relational databases used to be very slow. Relational databases are built to be optimally performant when you are using tables,
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=95)** not when you are using JSON blobs. It isn't meant for you to use it to store documents as the default and perform a lot of operations on them. It is meant to allow you to store mostly relational data. And if you really need to occasionally store some JSON, then that's fine, but you should know that that will probably result in a performance hit. Now, I did say that working with JSON blobs inside relational databases used to be very slow. Nowadays it is a lot faster, because relational databases have implemented performance improvements. Storing and retrieving JSON in MongoDB is what MongoDB was built for. You can store all of the JSON documents as they are. MongoDB went as far as developing its own binary encoded serialization of JSON-like documents called BSON to make operations on documents even more efficient. So what does this mean if you're trying to decide which database is right for you? If you are planning to mostly work with documents, I would say go with the database that is built for that. Let's move on to the second way of comparing relational and document databases. The way you generally work with relational databases is by defining a schema for how you will store your data. Data about a person, for example, or an author would be disassembled into different paths to store it. And then it would be reassembled using joins
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=191)** when you are querying it. Relational databases are optimized for working with tables and performing joins between tables fast. You could store data in tables in MongoDB as well. And you can also perform joins with MongoDB using the $lookup aggregation state, which is reasonably fast if you use indexes. However, MongoDB is not optimized for this data access pattern. If you use MongoDB and find yourself using a lot of joins, you are very likely not structuring your data well. MongoDB expects all data that is generally queried at the same time to be in one document or at least one collection. MongoDB is also optimized to work on a single collection, which it then manipulates. So if you want to store data in tables, go with a relational database. And with that, we come to the last way of comparing both database paradigms, storing data in the data models best for each database. This, in my opinion, is the only comparison that actually makes sense. Otherwise, you're comparing a hammer to a drill. Can you hammer in a screw with enough force? Yeah, probably. Can you use a drill to get a nail into a wall? Same thing, with enough force? Yes. But those are the wrong questions. If you have a drill and a screw, use the drill to drive in the screw.
>
> **[4:44](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=284)** If you have one nail every now and then, maybe you don't need a hammer, and you'll use the screwdriver to hammer in the nail then, sure. Would I do that for more than an edge case? No. So if you are going to compare hammer to a drill, just make sure you're not comparing both when using nails. If you compare both, you have to use different data models for the comparison for it to be a fair comparison. So let's talk about the ease of querying with both. Different people have different opinions on which way of querying the data is simpler. Many folks, used to querying data with [[SQL]], don't mind. I am firmly in the camp that querying data with MongoDB is easier. So it depends. What most people don't realize is you can actually query MongoDB with SQL. There is a BI connector for that. So if you prefer the MongoDB way of querying, go with MongoDB. Otherwise, you can actually use both. Anyway, you probably still want to know which one is better. If you use the optimal data model in both cases and don't care about how to query data, which one is better? And I'd still say, it depends. There are a few things that I would say you should consider. First one is performance, of course. But using both databases optimally, both are reasonably fast. The next thing you should consider is ease of development.
>
> **[6:20](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=380)** If everyone on your team knows and loves relational databases, that may mean relational is a better choice, unless you want the team to first learn about MongoDB, because moving from a relational to a document data model means your team needs to spend time changing their mental model of how to work with data. If your team does not consist of relational database experts, I'd say, go with MongoDB. The way data is queried is easy, and generally folks love that. But there are big debates on this subject. I think it comes down to personal preference mostly. To me, it makes sense to store data that you queried together, together, because my mental model of a person has all that data together. But I also acknowledge that some data naturally comes in disassembled form. And for that, a relational model makes more sense. Anyway, there is one more thing you should consider with both, and that is how the database scales. If you scale both databases, joins can become a problem because the joins for your data will only perform fast if all the tables you need to access to perform a query are co-located. And there is a limit to how big a single machine can get. The fact MongoDB is natively built around documents that contain all the data that is generally required when you perform a query, makes it easier and more performant to scale horizontally. We won't cover sharding in this course,
>
> **[7:53](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=473)** but if you are making this decision, you should read up on how sharding works. But in essence, if you think you'll need to scale up a lot, I think the answer should be MongoDB, regardless of anything else.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (19), [[JSON]] (12), [[Relational Databases]] (9), [[Databases]] (5), [[SQL]] (2)
> **Env Vars:** json (12), sql (2), bson (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2)
> **Cross-References:** we covered (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Data modeling](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=0)** - [Instructor] [[Data Modeling]] is a topic that deserves its own course, but I will give you a brief introduction here. The main principle to keep in mind when modeling data is that data commonly queried together should live as closely together as possible. That means, in the same document or collection. While pulling in data from another collection is possible, it is not the most performant way to use [[MongoDB]]. However, you also have to contend with processing and storage limits, such as the 16 megabyte document limit and aggregation pipeline processing limits. And operations with big documents are not as performant as with small documents. So you cannot always keep all data together. There are a few general guidelines for what to put together and what not. The first one is if there is a one-to-one relationship between a document and another piece of data, like with a document about a person and a date of birth, store them together. There are two exceptions to this. The first one is if the size is too big, or if you very rarely use the information together in queries. The second guideline is if there is a one-to-many relationship, like between an author and something like books. Consider the amount.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=94)** If it is one to few, like with authors and books, you can store both in one collection using nesting or an array. If it's more than a few, it's likely best to store them in separate collections and link them with IDs. Lastly, if it's a many-to-many relationship, avoid embedding this information. Instead, store IDs in either or both collections. Here are a few more pointers to get your data model right. Keep arrays reasonably small, meaning less than 100 elements. And the second one, documents should not be large and flat. If you have 100 key value pairs and little nesting, that's not great for performance. As I said, there is a lot more to learn about data modeling, but this should help you get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Modeling]] (2), [[MongoDB]] (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Flexible schema](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=0)** - [Instructor] The other keyword that you will often hear when people talk about [[MongoDB]] is schemaless, so what does that mean? A schema defines the structure, and contents of the data in a collection, by ensuring that documents in the collection contain the fields that are specified as required in the validator. And, that documents in the collection that contain fields specified in the validator, have to have field values that conform to the specified data types. Here is an example validator. The validator consists of [[JSON]] schema, which specifies the BSON type of the document, which is object. And then the required fields, which in this case, are name and message. After that, in the properties field value, the JSON schema specifies each fields BSON type, alongside a description. In this case, both the name and the message must be of BSON type string. MongoDB does not require you to define a schema for you to store data. This makes it easy to iterate and change your schema. And that is something that comes in handy when you are building a new application, and changing things a lot. However, your documents should still have a common structure they adhere to. And once your application grows, it is possible, and recommended to enforce a schema, to ensure that your data adheres
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=94)** to the structure you are expecting. So much for the theory, let's test it. Okay, I'm going to enforce a schema on the movies collection. And the way we're going to do that, is we are going to use the run command method. The run command method takes a document as it's input. The first argument is going to be the collection that is to be modified, which in our case is the movies collection. Then, we are going to specify the validator. The validator takes a JSON schema document, for which we are going to have to specify the JSON schema, using the JSON schema operator, and that takes another document, which will contain first of all, the BSON type, which is object.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=161)** Then the required fields, Which in our case I'm going to say are title and director.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=175)** And then there is going to be a properties field, in which we can specify which type each field value has to be. So for the title field for example, we're going to specify a document that will contain the BSON type, and for the title that is going to be string.
>
> **[3:26](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=206)** And then for the director, it is also going to be string.
>
> **[3:36](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=216)** All right, now, before I close this, there is one more argument that gets passed into this collMod command that gets run, and that is the validation level for the validator.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=237)** Now you can choose multiple different validation levels, I think there is one that is called strict, which will mean that this validator gets applied to all documents. And then the one that we are going to use, which is moderate, moderate means that the validator is only applied to newly added documents, so documents that newly get added to the collection will be checked against the validator, and then a document will only be checked against the validator if it previously was a valid document, otherwise you can update it, and if it still doesn't match the validator, that is fine. So that makes it a bit easier to turn on validation. All right, so let's run this. And we've now got a validator. So if I wanted to, for example, add a document to the movies collection, and I would only specify a title. Let's just say the title is tests, and I would try to insert this. It would say, "Document failed validation", here. And then it would tell me that there was a schema rule that was not satisfied. So I would now have to check what schemas this is being validated against, and then check what I was doing wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[MongoDB]] (2)
> **Env Vars:** json (5), bson (5)
> **Definitions:** is an  (1), is called (1), means that (1)
> **Analogies:** for example (2)
> **Code Identifiers:** collmod (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a data model](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=5)** - For this exercise, I would like you to create a data model based on this specification. The data model is supposed to be for an online store and there are few common queries that you can expect to be executed. The first query is what's available with x features. Next one is, what's out of stock. That's going to be a mostly internal query. Next one is a user's personal information. You can expect that that's a query that will often come from customers. The next one is for a user's order history. That one is mostly used internal. And then, the next one is today's or last month's order. That one is also mostly used internal. I know this is a fairly vague specification but it's still a good exercise to get you thinking about how you might model this and what further questions you might have to ask to make decisions for the data model.

> [!info]- Semantic Content
>
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - for (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### [Solution: Create a data model](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=0)** (lively beats)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=5)** - Alright, let's look at the solution for this. I want to, again, start this off by saying that this is a fairly vague specification. It's a good exercise to go through, but if your data model is different from what I'm going to suggest here, don't worry too much about it. The important thing is that you think about it. Alright, so the first thing that I see in this exercise is that it says it's an online store. With an online store, I would expect collections like inventory, orders, and users. Then, we move on to common queries. So, here, the first one is what's available with X features. Now, the first thing here I'm wondering about is, okay, if there is some sort of inventory collection, maybe I should have an index on the features that are available, if that's a common query for customers especially. The next thing that I'm being told is that there's going to be a common query on what's out of stock. And, that that's going to be an internal query. Now, with the internal keyword, I am kind of taking that to mean that we may not necessarily need an index, because, if it's internal, I expect it to probably be run maybe once a day. I mean, how often are people going to check
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=99)** whether something is out of stock? What I also say here is that there is actually a feature that might be useful for this use case. And, that one is called change streams. Change streams could alert us when something goes out of stock. However, we do not cover change streams in this course. The next two common queries are about the user. So, there's one on the user's personal information and one on the user's order history, which is supposed to be internal mostly, so maybe for some forward function or something like that. The first one, I would say, indicates that we should probably have an index on the user ID or something like that, maybe on the user email address, so that we can quickly retrieve a user's personal information. The next thing where we have a common query on the user's order history, I think indicates that we may want to have an index on the user ID field. So, just like the previous one. So, I think we're pretty sure that we want that sort of an index. There is also an open question here of whether we should store the order data with the user or not. And, in that case, I would think about what kind of an online store that is. And, that would be one of the questions I'd ask. Are there going to be a lot of orders? Is this is super marked? And, you can expect many, very large orders? In that case,
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=192)** I would probably store the orders in a separate collection. However, if it's a car manufacturer, where you expect people to... Sorry, not a car manufacturer, like somewhere where you go to buy a car, where you'd expect that users make one purchase, then it's probably fine to store the order data with the user. Okay, the last common query is on today's or last month's order. So, there, you might want to consider to put an index on the order date. However, again, that's an internal query. So, you're going to have to consider how often that's going to be run, how slow the query is, and how many resources are going to be used by that query to really see whether it makes sense to place an index on that field or not. Alright, so this is all fairly vague in terms of giving you a solution, but it's not that clear cut what the answer is. The important thing is that you think about what it may mean.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - alright (1)


### 7. Drivers

[↑ Back to Table of Contents](#table-of-contents)

#### [Drivers](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=0)** - [Instructor] So far in this course, I've taught you how to interact with [[MongoDB]] using the MongoDB shell. However, when you are using MongoDB in an application, you will be using a MongoDB driver. MongoDB supports libraries for a variety of commonly used languages, such as C, C++, [[Java]], [[Python (Programming Language)|Python]], [[Node.js]], etc., but there are also community developed libraries that you can use. For some languages, the MongoDB supported libraries are very popular. For others, the community developed libraries are more popular. I recommend reading up on what people think about the drivers you're considering before making a final choice. In the next videos, I'll show you how to connect to MongoDB with Python, Node.js and [[PHP]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Python (Programming Language)|Python]] (2), [[Node.js]] (2), [[Java]] (1), [[PHP]] (1)
> **CLI Commands:** python (2), node (2), php (1)
> **File Paths:** node.js (2)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Connecting with Python](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=0)** - [Instructor] If you are using [[Python (Programming Language)|Python]], there are two [[MongoDB]] supported drivers that you can use. PyMongo for synchronous Python applications and Motor for asynchronous Python applications. Motor is implemented as a wrapper around PyMongo. So if you ever need to switch from PyMongo to Motor, it is fairly simple to make that change. For this video however, we will be using PyMongo. So let's install that. All right. To install PyMongo DB, we'll be using pip, Python's package installer. However, we're not just going to install PyMongo onto the entire system. We are going to create a virtual environment first using virtualenv. If you don't have virtualenv installed, you have to first install that, again, using pip. So, we're going to just do that here now. We'll do that with pip install --user virtualenv. Okay. And this says requirement is already satisfied because we already have that installed. Next, we are going to actually set up the environment, python3 -m venv env. Okay. And next, we're going to activate the environment. Nice, great. Now, we can install PyMongo, and we are also going to install python-dotenv. That Python package is going to allow us
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=93)** to read environment variables inside our Python application. Okay, so let's now look at some sample code for a Python application. At the top, you see the imports. In this case, I am importing the Mongo client from the PyMongo package, and I am importing load_dotenv, which will allow us to read in the environment variables that we need. I have, in this case, exported the environment variables DB_USER and DB_PASSWORD for my username and password for my MongoDB deployment. So, I create the Mongo client by passing in the connection string, the username, and the password. Using the client, I can then access a database as we've used throughout this entire course. In this case, that will be sample data, and then I can access or create a collection. Here, I am creating a collection called testpython. Then I have defined a document which we can insert by calling the insert one method on collection. That insert is going to happen synchronously, and it's going to return an object from which we can get the inserted ID. So that will be the unique ID object ID that is assigned
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=188)** to the document, and we can print that just so that we know this worked. Then we can also perform find operations on the collection, and again, I'm just doing this one as an example, and then printing it. Okay, let's run this program on the command line and see it working. Okay. So in this output, we get first the object ID, and then we find the entire document, which has that same object ID. All right. This was a very short example just to show you how you would connect to your MongoDB deployment from within Python. If you are interested in learning more on how other queries or aggregations work, you can read the docs at PyMongo.[readthedocs.io](https://readthedocs.io). Especially the tutorial and the example sections are very useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[MongoDB]] (3)
> **CLI Commands:** python (9), pip (3), mongo (2), find (2), make (1)
> **Prerequisites:** install (7), set up (1)
> **Env Vars:** db_user (1), db_password (1)
> **Code Identifiers:** load_dotenv (1)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1)
> **Documentation:** the docs (1)
> **Tools:** command line (1)

#### [Connecting with JavaScript](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=0)** - If you are using [[Node.js]], there are two main drivers that you can use, the [[MongoDB]] supported driver, which you'll find behaves similarly to the MongoDB shell, and Mongoose, which is an object modeling tool for MongoDB. A lot of people choose to use Mongoose over MongoDB's driver because it removes some extra code you need to write, like opening and closing connections. However, it is worth noting that Mongoose may be a bit slower than the native driver, and that it forces you to declare schemas, which Mongo DB's driver doesn't do. For this video, we will be using Mongoose. Alright, inside this folder, I've already got two files, an index.js file and a package.[[JSON]] file. Let me show you what's inside the package.json file for right now. Okay. Now, to install Mongoose, I'm going to run [[npm]] install mongoose--save. I am also going to install the dotenv package. That will allow us to use environment variables. Okay, now let's look at the code. Up at the top, you can see that we are requiring the Mongoose and the dotenv package. Then, we run the main function. Inside the main function, we first call the config function, and that is to get the environment variables.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=96)** Next, we define the MongoDB connection URI, and then we use that to connect to the MongoDB deployment with Mongoose. Note that inside the connection URI, it is important that it says admin, because that is the database that we are authenticating against. However, we are going to be inserting and querying data from the sample data database. Therefore, inside the connect method arguments, we are going to specify the DB name as sample data. Once the connection is made, this is going to log connection established with MongoDB for us. Okay, here, you can see how we can define a schema with Mongoose. And, in this case, I'm just defining a very small schema that could be used for an author document. In this case, it has a string for the author name and a string for a message. And, we specify the database and the collection that we are going to use to store these documents of that schema. Then, we have to define a model. We do that using this schema. Once we've got that model, we can use it to create documents that are objects of that model. To save a document,
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=191)** what we do is we call the save method on this new object and then we can also call the find method. We can call the find method on the model itself, which will then find a document of that model. Alright, let's see if this works.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=220)** Okay, connection established with MongoDB, document is successfully saved, and then the document is found, right? So, that is a small example that should show you how you can connect to your MongoDB deployment using Mongoose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (9), [[JSON]] (2), [[Node.js]] (1), [[npm]] (1)
> **CLI Commands:** find (4), node (1), mongo (1), npm (1)
> **File Paths:** package.json (2), node.js (1), index.js (1)
> **Env Vars:** uri (2), npm (1)
> **Prerequisites:** install (3)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - if (1)

#### [Connecting with PHP](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=0)** - [Instructor] For [[PHP]], we'll be using [[MongoDB]]'s native driver. To use the PHP driver, you'll need both the extension and the library installed. The extension itself provides minimal API for the core driver functionality, allowing you to connect to the database and run queries. The library, however, models the client, database, and collection objects. Okay, so let's install this. First, we are going to use pecl to install MongoDB. In my case, that is already installed. Next, I'm going to run php --ini to get the configuration file location. Okay, with that, I am going to echo the extension mongodb.so into that file. All right, that's the extension installed. Now we're going to install the library, and for that, we are going to use Composer. To make sure you've got Composer installed, just run composer --version. If you don't get back a version number, you're going to first have to install Composer before resuming. With Composer installed, go into the directory where you want to run your PHP code. That's where we're going to install the MongoDB library.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=96)** We're going to do that with composer require mongodb/mongodb. All right, that's installed. And then we're going to install one more library, and that is so that we can use environment variables. All right, great. That's all we have to install. Let's now look at the PHP code. So here's the PHP code for connecting to a MongoDB deployment, inserting a document, and finding a document. At the top of the file is where we load the environment variables. After that, we initialize the MongoDB client using the MongoDB URI for your deployment. That includes your MongoDB username and your MongoDB password, which you're going to have to export as an environment variable or put into a .env file to be able to use it here. If you scroll a bit to the side, you can see that we are using the admin database inside your connection string. That is important, because you need to authenticate against the admin database when connecting. All right, for the [[Representational State Transfer (REST)|rest]] of the code, the first thing that happens is we select a collection. As with most of this course,
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=190)** we are going to be using the sample_data database. And here we are using a collection called testphp. That collection doesn't exist yet, but it's going to be created as soon as we insert a document into it, and that is what we're doing next. Here we create a document. And the document is just very simple. It has an author and a message field and two strings that go with those fields. So that gets inserted, and then in the next line, we find one document from that collection and we dump that so we can see it in the terminal when we run this. Okay, now let's run this and see if it works. Okay, and here we get back the dump of the document. So that is how you connect to your MongoDB deployment, perform an insert, and find a document using PHP. For more information on how other queries or aggregations work, you can read the docs at docs.[mongodb.com/PHP-library](https://mongodb.com/PHP-library), especially the tutorials are very useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (13), [[PHP]] (8), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** php (8), composer (6), find (2), make (1)
> **Env Vars:** php (7), api (1), uri (1)
> **Prerequisites:** install (7), you'll need (1)
> **Code Identifiers:** sample_data (1)
> **URLs:** [mongodb.com](https://mongodb.com) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Advancing with MongoDB](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=0)** - [Naomi] Congratulations, you've made it to the end of the [[MongoDB]] Essentials Course. Don't forget to add your certificate for this course to your [[LinkedIn]] profile. And if you liked this course, leave a review. You're now ready to deploy replica sets, perform CRUD operations, as well as aggregations. Of course, that isn't all there is to know about MongoDB. MongoDB has a lot more to offer, which we dive into in the MongoDB Advanced Course. Some of my favorite MongoDB features that we didn't cover here and are covering in that course include change streams, which allow you to monitor changes happening on collections from inside your applications; client-side field-level encryption, which allows you to encrypt data before it even leaves the client; and time series collections, which is a special collection type that allows you to work with time series data. These are great features to check out next. And if you're looking to administrate a MongoDB deployment, the next topics I'd suggest you look at are authentication, role-based access control, and sharding, which is also covered in the MongoDB Advanced Course. If you have any questions or want to stay in contact, please follow me on LinkedIn or on Twitter. See you around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[LinkedIn]] (2)
> **Env Vars:** crud (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [naomi] (1)


## Instructor

- [[Naomi Pentrel]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/mongoDB-essential-training-3023263 )

## Skills Covered

- MongoDB

## Path Context

### In [[Explore App Development with the MERN Stack]]
← [[Node.js- Securing RESTful APIs]] | **12 of 13** | [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] →

## Appears In

- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — MongoDB
- [[Learning MongoDB]] — MongoDB
- [[Choosing A Database Postgresql Mysql Mongo And Cloud]] — MongoDB

---

[↑ Back to top](#)