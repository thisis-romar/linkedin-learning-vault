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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/MongoDB%20Essential%20Training.md)

![MongoDB Essential Training](https://media.licdn.com/dms/image/v2/C560DAQFYT-OXtGVtSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652204728246?e=2147483647&amp;v=beta&amp;t=8E2xX9JTsTymVeo_n5HKlbvsmknNhgoZPIgLl92dE0c)

# MongoDB Essential Training

> MongoDB is a NoSQL document database with an expressive and intuitive query language. While MongoDB is easy to get started with, there is more to using MongoDB than storing and retrieving JSON documents. In this course, Naomi Pentrel teaches MongoDB essentials, covering CRUD operations, aggregation pipelines, and drivers as well as advanced database features and database administration topics. If 

> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training) | 3h 49m | Beginner | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Install MongoDB]]** (5 videos)
- **[[#2. Set Up Your Database]]** (6 videos)
- **[[#3. Working with MongoDB]]** (6 videos)
- **[[#4. CRUD Operations]]** (11 videos)
- **[[#5. Aggregation Pipelines]]** (10 videos)
- **[[#6. Data Modeling]]** (5 videos)
- **[[#7. Drivers]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### An introduction to MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=0)** - [Naomi] MongoDB is a powerful document database that is popular because of its ease of use for both small and large projects.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=8)** This course equips you with the essential skills you need to know to use MongoDB as a developer.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=14)** We'll start with installation and setup, and then explore all the MongoDB fundamentals, such as the document model, how data is structured in the database, and what MQL is.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=25)** Then, we'll learn and practice CRUD operations and aggregations.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=29)** As the last part, we'll use the MongoDB drivers, which allow you to use MongoDB with any programming language.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=37)** My name is Naomi, and I've spent a big part of my career working with and for MongoDB.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=43)** I am very excited to teach you everything you need to know to develop applications with MongoDB.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278?u=76281980&t=49)** So, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** mql (1), crud (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [naomi] (1)

#### Features of MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=0)** - [Instructor] When MongoDB first came out in 2009, it was exceedingly popular with many web developers because of its ease of use.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=8)** It allowed web developers to work with data in the same format they were using in their applications, documents.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=16)** But not only that, developers could work with their data seamlessly while writing code because of MongoDB's native drivers that make data appear like native objects in the programming language you use.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=29)** There were, and still are, two other main selling points.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=34)** The first one is that MongoDB was built with distributed systems in mind from the start, allowing users to scale their databases vertically and horizontally.
>
> **[0:47](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=47)** And lastly, MongoDB's code is openly available to anyone who wants to see it.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=53)** All of this was revolutionary in 2009.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=57)** However, you should also know that MongoDB was still a young technology at that point.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=63)** It lacked some features many people expected from databases and it even had some bugs.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=69)** The reason I say this is because many people on the internet still judge MongoDB based on version 1.0, which is now over 10 years old.
>
> **[1:20](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=80)** MongoDB has come far since then and implemented features such as schema validation, ACID compliance, and joins, and it has gone far beyond that, implementing capabilities that make it stand out from the crowd.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=94)** You want some examples?
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=96)** How MongoDB scales horizontally using sharding allows for data locality, while also giving you the option to reshard on demand.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=105)** That is industry leading.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=107)** Want another one?
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=109)** Client-site field-level encryption.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=111)** If you have sensitive data, like a credit card number, you naturally want to encrypt it.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=117)** In most cases when we speak about data being encrypted in a database, that actually only means data is encrypted while it's at rest, not in memory and not in the logs.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=127)** This feature, however, allows you to encrypt sensitive data before it even leaves the client, meaning it's never unencrypted when it's in the database.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/features-of-mongodb?u=76281980&t=138)** These are advanced features and we won't go into them in this course, but they are there for you when you need them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** acid (1)
> **Versions:** version 1 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Install MongoDB

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Self-hosted vs. managed MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=0)** - [Instructor] Welcome to the MongoDB Essentials Course.
>
> **[0:03](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=3)** In this section, we'll install MongoDB, but first, you have to decide where you're going to install MongoDB.
>
> **[0:10](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=10)** And the question you should ask yourself is whether you want to manage the deployment yourself or whether you would prefer a hosted solution.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=17)** So let's talk about both options.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=20)** If you choose to deploy MongoDB on your own resources, there are some responsibilities that come with that.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=26)** The first one is that you need to select and maintain appropriately performant hardware, either locally or in the cloud, and then you need to ensure high availability of that hardware.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=37)** Think about running nodes on their own hardware in different data centers or with different cloud providers to maximize this.
>
> **[0:45](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=45)** Then, you need to think about security for your infrastructure and for your deployment, and you need to think about monitoring your deployment and being able to recover from failures, ideally automatically.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=58)** You also need to think about managing and monitoring backups and ensure this is tested frequently.
>
> **[1:05](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=65)** MongoDB also does release new versions every now and then, so you'd also have to manage version upgrades.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=72)** And if your application grows and your database requirements grow, then you also have to think about scaling the deployment by adding more resources or more nodes, so you need to be able to do that.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=86)** If you're going to go down this road, I suggest you have a look at MongoDB Agent.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=91)** MongoDB Agent is a service that helps you perform automation, backup, and monitoring for your self-hosted deployment.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=101)** However, you can also go with hosted MongoDB Solutions.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=105)** If you would prefer to outsource the tasks I just mentioned, there are multiple service providers that offer MongoDB as a service.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=113)** For this course, you can choose any deployment option locally or in the cloud.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=119)** If you deploy MongoDB in the cloud, you need to make note of the connection string, which looks something like this.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=126)** Regardless of the deployment option you choose, you will need to install the MongoDB Shell and the MongoDB Database Tools on your machine for this course.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/self-hosted-vs-managed-mongodb-17229618?u=76281980&t=135)** We'll install all three, MongoDB, the MongoDB Shell, and the MongoDB Tools in the next few videos.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), self (1)
> **Prerequisites:** install (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Enterprise vs. Community
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980&t=0)** - There are two different versions of MongoDB that you can install on your machine, MongoDB Community and MongoDB Enterprise.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980&t=8)** The core features for developers are the same, but MongoDB Enterprise offers advanced security options, additional storage engines, management tools, the MongoDB Enterprise operator for Kubernetes, and the MongoDB Connector for BI, which is going to be interesting for you if you are used to interfacing with a database using SQL or any tools that use SQL.
>
> **[0:32](https://www.linkedin.com/learning/mongodb-essential-training/enterprise-vs-community?u=76281980&t=32)** For this course, we are going be using MongoDB Community.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Prerequisites:** install (1)
> **Speakers:** - there (1)

#### Install MongoDB on Mac
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=0)** - [Instructor] In this video, we are going to install MongoDB, the MongoDB shell, and the MongoDB tools on a Mac.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=8)** If you are not on a Mac, please watch one of the other two videos.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=13)** My favorite way of installing MongoDB is using a tool called m, which is a MongoDB version manager that allows you to have multiple versions of MongoDB installed at the same time.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=26)** To install m, we're going need something called npm, which is the Node Package Manager.
>
> **[0:35](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=35)** If you don't have Node installed already, I recommend you look for something called nvm, which is the Node Version Manager, and use it to install the latest version of Node.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=48)** If you're not sure whether you have Node installed, go to your terminal and type in npm version.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=56)** If you get back a document like this, you have Node installed and can continue as is.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=63)** All right, let's get back to installing m.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=66)** So, let me copy this command over here and paste it into my terminal.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=72)** All right, that doesn't work, because it copy-pasted this dollar sign, which we don't need.
>
> **[1:19](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=79)** I don't know why it does that by default.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=81)** Anyway, now we've got that installed, I can use m to install the latest version of MongoDB by just typing in m latest.
>
> **[1:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=89)** All right, this is now asking me to confirm whether I want to really install MongoDB 5.3.0, and I do, so I type in yes.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=99)** All right, that's installed.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=100)** Now it's telling me that I should make sure the PATH includes the directory where MongoDB was just installed.
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=108)** I know it does, but you may want to or need to add this to your PATH.
>
> **[1:54](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=114)** All right.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=115)** To check that we can actually run the command, let's just run the mongod command and check which version we've got here.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=125)** Right, that's returning version 5.3.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=128)** So everything's good to go here.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=131)** Now the next thing we want to install is the MongoDB shell, and we're going to be using Homebrew for that.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=138)** Homebrew is a package manager for MacOS, again, if you don't have Homebrew installed, please pause here and install Homebrew, and then return to this video.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=149)** Okay, so, first thing we need to do is to tap mongodb/brew.
>
> **[2:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=156)** Okay, now we should be able to install mongosh.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=164)** Okay, that should be good to go.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=167)** So let's test that that worked by running mongosh --version.
>
> **[2:53](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=173)** That returns version 1.2.3. That's fine, good to go.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=177)** And now, all we need to do is to install the MongoDB database tools, so which we'll also use brew.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=186)** All right, that's mongodb-database-tools.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=191)** Okay, cool.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=195)** Now that's all installed, and to test that, I am going to run mongoimport.
>
> **[3:22](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=202)** Okay, and that's giving me an error here that no collection was specified, which is what I expected because I didn't specify a collection, but it tells us that the command is at least installed.
>
> **[3:33](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-mac?u=76281980&t=213)** And we're good to go. I'll see you in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), npm (2), brew (2), make (1)
> **Prerequisites:** install (9)
> **Code Keywords:** let (4), this, (1), continue (1), default. (1)
> **Versions:** 5.3.0 (1), version 5 (1), version 1 (1), 2.3 (1)
> **Env Vars:** path (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### Install MongoDB on Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=0)** - [Instructor] In this video, we're going to install MongoDB, the MongoDB shell, and the MongoDB tools on Windows without using WSL, the Windows subsystem for Linux.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=11)** If you're not on Windows, please watch one of the other videos.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=14)** To install MongoDB on Windows go to the MongoDB documentation and download the installer for the latest community version of MongoDB.
>
> **[0:24](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=24)** On the installation instructions page for Windows, you're going to scroll down until you find the MongoDB download center.
>
> **[0:32](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=32)** Click on that link and it will take you to the download center where you can download MongoDB Community Server.
>
> **[0:40](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=40)** Here you're going to select the Community Server package, and then you're going to select the options for your specific platform.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=49)** Once you've done that, click on download, and it will download MongoDB.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=55)** Once downloaded, run the installer by clicking on the file you just downloaded.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=63)** This is the MongoDB Installation Wizard.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=66)** To begin with, click next to continue, then accept the license agreement, and click next.
>
> **[1:14](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=74)** Now it's going to ask you whether you want to install all of what MongoDB has to offer, or a custom install.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=82)** For this course we're going to go with the custom install because we don't need everything.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=88)** Next, it's going to ask you to specify where you want to install MongoDB.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=93)** For this course, you can go with the default location and click next.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=98)** The next configuration screen is going to ask you whether you want to install MongoD as a service.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=105)** Because this course is going to show you how to do different deployments with MongoDB, you do not want to install it as a service, so you're going to un select install Mongo D as a service and then click next.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=118)** Lastly, it's going to ask you whether you want to install MongoDB Compass, which is a graphical user interface for MongoDB.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=126)** For this course we're not going to be using that, so you can un select that and click next.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=131)** Then click install to install MongoDB.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=137)** Now MongoDB is installed, click finish.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=141)** To make it easier to access MongoDB, we will add the folder where the MongoDB binaries were just installed to the path.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=149)** Click on the Windows icon, and then type in environment variables.
>
> **[2:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=156)** Click on edit the system environment variables to bring up the control panels for the environment variables.
>
> **[2:46](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=166)** Click on the environment variables button, and that will bring up all of your environment variables.
>
> **[2:52](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=172)** In the system variables panel click on path and then edit.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=177)** Click on a new line and then click on browse.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=181)** Here we're going to find the MongoDB binaries now.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=186)** For me, that is under local disk, and then program files, it's under MongoDB, server, and here's the binary folder.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=195)** So we're going to click on it, click okay, and I'm going to click okay a few times to exit out of these menus, and then we're good to go.
>
> **[3:24](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=204)** Now I can click on the command prompt to open up a new command window, click yes, and now I can type Mongo D.exe.
>
> **[3:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=216)** And then I'm going to pass at the dash dash version option just so that it returns the version for testing that it's installed correctly.
>
> **[3:47](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=227)** And it's returning the version, which means it is installed correctly.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=232)** Now while we are here, I want to point out that for the rest of this course, we will be using the Linux syntax, well I will be using the Linux syntax when I am starting MongoDB.
>
> **[4:04](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=244)** So whenever you see the command Mongo D, you will have to add dot exe at the end of it for it to work on your machine.
>
> **[4:13](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=253)** Most command line arguments are the same with MongoDB, but you will need to also specify paths to files differently based on your operating system.
>
> **[4:24](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=264)** All right, with MongoDB installed, I'm going to close this command line window, and then I'm going to go to the MongoDB documentation for installing Mongo SH, the MongoDB shell.
>
> **[4:38](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=278)** On this page, I'm going to scroll down to find the MongoDB download center and click on that.
>
> **[4:46](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=286)** Right, here we've got the MongoDB shell.
>
> **[4:49](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=289)** I'm going to select version 2.2.2.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=292)** The Windows is correct.
>
> **[4:55](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=295)** Then I'm going to use the MSI installer instead.
>
> **[4:58](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=298)** I'm going to click on download.
>
> **[5:02](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=302)** Right, that's downloaded, so I'm going to click on the installer and go through the installation wizard.
>
> **[5:08](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=308)** Click next to continue, select where you want to install the MongoDB shelf, the default location is okay, so click next and then install.
>
> **[5:16](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=316)** This one is very quick.
>
> **[5:19](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=319)** There we go, it's already done, so I'm going to click finish, and that's Mongos sh installed.
>
> **[5:25](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=325)** If you want to test it, go once more to open up a command line prompt, and then just type in Mongo SH dash dash version.
>
> **[5:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=336)** If that returns 2.2.2, it is installed correctly.
>
> **[5:41](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=341)** There we go, that's returned.
>
> **[5:44](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=344)** Right, now the last thing we have to install are the database tools.
>
> **[5:48](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=348)** So I'm going to close this window and go back to the MongoDB documentation to find the installing the database tools on Windows page.
>
> **[5:58](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=358)** Then you'll have to scroll down once more to find the MongoDB Download center and click on that.
>
> **[6:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=366)** Now you'll have to scroll down a little bit just to get to the database tools, and here you can select this version or whichever is the latest version for you, Windows.
>
> **[6:16](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=376)** And then once again, you're going to go with the MSI installer, and click download, and that's downloaded, so I'm going to click on the installer and go through the installation wizard.
>
> **[6:32](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=392)** So click next, accept the license agreement, click next once more, and then once more, and install.
>
> **[6:44](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=404)** Right, click finish, and the MongoDB tools are now installed.
>
> **[6:48](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=408)** Now, just like with MongoDB, we do need to add that to the path.
>
> **[6:53](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=413)** So once again, I'm going to go to click on the Windows icon, go to edit my environment variables.
>
> **[7:02](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=422)** I'm going to click on the control panel, and inside the environment variables going to go to the system variables, go to path, edit the path, and I'm going to have to add a new one here.
>
> **[7:18](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=438)** So I'm going to click on browse, going to this PC, installed program files.
>
> **[7:26](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=446)** And here inside MongoDB, there's now a tools folder.
>
> **[7:30](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=450)** I'm going to click on tools and then select the bin folder here.
>
> **[7:35](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=455)** Click on okay, okay, okay, and once more then it should be all done.
>
> **[7:42](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=462)** So to test that this was installed correctly, once more I'm going to open up a command prompt.
>
> **[7:47](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=467)** I'm going to do that with the admin settings, right.
>
> **[7:51](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=471)** And now to test it, I'm going to run one of the commands that should be installed with the MongoDB tools.
>
> **[7:58](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=478)** That one is Mongo import.
>
> **[8:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=480)** Now, Mongo import usually imports a collection, so if I run it without any argument I'd expect an error.
>
> **[8:07](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=487)** And here I do get the error, no collection specified.
>
> **[8:10](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=490)** So since I was only doing this to test, this is great, and shows me that all of the commands are installed.
>
> **[8:18](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=498)** Great, that was all we had to do.
>
> **[8:20](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-windows-23758173?u=76281980&t=500)** I will see you in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (20), go to (6), scroll down (4), select the (2)
> **Prerequisites:** install (16)
> **CLI Commands:** mongo (7), find (5), make (1)
> **Code Keywords:** continue (2), interface (1), pass (1), import. (1)
> **Tools:** command line (3), command prompt (2)
> **Env Vars:** msi (2), wsl (1)
> **Versions:** version 2 (1), 2.2 (1), 2.2.2 (1)
> **Cross-References:** go back to (1), in the next (1)

#### Install MongoDB on Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=0)** - In this video, we're going to install MongoDB, the MongoDB Shell and the MongoDB tools on Linux.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=8)** If you are not using Linux, please watch one of the other two videos.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=14)** My favorite way of installing MongoDB is using a tool called m.
>
> **[0:19](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=19)** m is a MongoDB version manager that allows you to have multiple versions of MongoDB installed at the same time.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=27)** To install m, you're going to need Node, or more specifically Node's package manager.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=34)** If you don't have Node installed, I recommend you look for a tool called nvm to install the latest version of Node.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=44)** nvm is Node's version manager.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=48)** If you're not sure whether you have Node installed, go to your terminal and type in mpm version.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=56)** If you get back a document like this that gives you a Node version number, you have node installed and you can proceed like this.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=66)** So let's go back to installing m and let me copy this code.
>
> **[1:13](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=73)** Back to the terminal and let me paste that here.
>
> **[1:19](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=79)** And it says it can't execute the command 'cause there is an extra dollar sign that gets copied.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=86)** So if that happens to you, don't worry about it.
>
> **[1:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=89)** And we have another issue here.
>
> **[1:32](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=92)** So this says it doesn't have the right permissions.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=95)** So I need to run this with sudo in front of it.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=100)** And that work.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=101)** Now I have m installed which allows me to install the latest version of MongoDB, using the command m latest.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=111)** Now it's asking me whether I would like to proceed and install MongoDB version 5.3, which I do, and that's installed.
>
> **[2:01](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=121)** It is telling me here that I should make sure that my path variable includes the directory that MongoDB was just installed in.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=133)** Now the next thing I want to do is check that MongoDB was indeed properly installed, and the way I can do that is by just running the mongod command, and passing the version command line argument.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=149)** And that gives me back that version 5.3 is installed, so we're all good to go.
>
> **[2:36](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=156)** So let's install the MongoDB Shell.
>
> **[2:40](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=160)** And that, we're going to go to the MongoDB documentation.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=167)** So scrolling down here, it details the installed procedure.
>
> **[2:53](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=173)** And the first thing it tells us to do, is to import the public key.
>
> **[2:59](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=179)** So, we'll do that.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=181)** I'll just copy paste that here, that's good to go.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=189)** Then need to create a list file.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=195)** So paste that as well, and now we'll have to reload the local package database list.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=212)** And lastly, we can finally install mongodb-mongosh.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=219)** So paste that as well.
>
> **[3:43](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=223)** Let's check that mongosh got installed correctly, just by running mongosh--version.
>
> **[3:51](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=231)** And we get back version numbers, so that was installed properly.
>
> **[3:55](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=235)** The last thing that we need to install are the MongoDB database tools.
>
> **[4:00](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=240)** We can do that with apt-get.
>
> **[4:02](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=242)** So that's sudo apt-get install mongodb-database-tools.
>
> **[4:12](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=252)** And that's all installed.
>
> **[4:14](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=254)** To check that this got installed correctly, we're going to run a command called mongoimport, and that's all.
>
> **[4:23](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=263)** And that's the result I expected.
>
> **[4:26](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=266)** The mongoimport command is used to import a collection.
>
> **[4:29](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=269)** Normally we didn't specify a collection at all, but just the fact that we get this output means that it was installed correctly.
>
> **[4:39](https://www.linkedin.com/learning/mongodb-essential-training/install-mongodb-on-linux?u=76281980&t=279)** I will see you in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), sudo (2), apt (2), make (1)
> **Prerequisites:** install (9)
> **Code Keywords:** let (5), this. (1), public (1)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Versions:** version 5 (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)


### 2. Set Up Your Database

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Mongod
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=0)** - [Instructor] A mongod is a daemon process for MongoDB.
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=4)** You could say it is the core unit of MongoDB.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=7)** It handles data requests from the MongoDB shell or the MongoDB drivers, manages data access, and performs background management operations.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=17)** Let's look at it in the shell.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=20)** During this course, we're going to try out a few different deployment options for MongoDB.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=26)** Please create a folder for this course called MongoDB essentials.
>
> **[0:32](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=32)** CD into this folder and then inside this folder create another folder called mongod only.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=43)** To get a MongoDB database up and running locally, all you need to do is run the command mongod and specify a directory for storage.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=53)** You do that by parsing the command line argument dbpath and then specifying a folder for where the data can be stored.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=63)** That's going to be the folder we just created, so we parse in mongod only.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=68)** Right and then once we press enter, mongod will start running and if your output looks somewhat like this, it's all working fine.
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=77)** Generally, if something has gone wrong, you would see an error message and then you would see this process terminate.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=86)** All right, let's talk about the default settings that MongoDB uses.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=93)** By default, MongoDB will listen for connections on port 27017.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=101)** The data, by default, will be stored in the directory data, db.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=107)** However, this does not work on current macOS versions because the directory has become read-only.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=116)** That's why I explicitly specified a different directory in this case.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=122)** All right, so with MongoDB running, the next step is to interact with it with the MongoDB shell, so let's go back to the terminal.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=131)** To open up the MongoDB shell, let's open a second terminal.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=138)** And now, all you need to do is run mongosh, that will automatically connect to the default port on local host which is where we're currently running MongoDB so that will just work.
>
> **[2:33](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=153)** Okay, so from the MongoDB shell, you can now run all of the normal MongoDB commands.
>
> **[2:39](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=159)** So, one command that you can run for example is show databases, and that will then show you the default databases that are present in your deployment.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=170)** You can also already store inquiry data so you could say db.test.insertone and then say, hello world and that would get inserted.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=188)** And you can see up here something moved that's because the insert happened also on the mongod of course.
>
> **[3:17](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=197)** All right, cool.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=199)** Okay there's one thing that I need to make very clear, that is, do not run this in production.
>
> **[3:24](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=204)** This MongoDB configuration only runs one mongod process, and that is just not good enough for any production usage.
>
> **[3:34](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=214)** If you were to run this in production, anything happened to this one process, your database would be completely down.
>
> **[3:42](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=222)** If the hard drive were to break your data may even be completely lost.
>
> **[3:46](https://www.linkedin.com/learning/mongodb-essential-training/mongod?u=76281980&t=226)** We'll talk about how to avoid these issues in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (2), this, (1), case. (1)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** cd (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Code Identifiers:** macos (1)
> **Ports:** port 27017 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Replica set
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=0)** - [Instructor] When multiple Mongo D instances work together and maintain the same data set they are called a replica set.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=8)** Let's say you configured your MongoDB deployment to be a three member replica set with three normal replica set members.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=17)** In a replica set, the Mongo D processes take on different roles.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=22)** One replica set member in each replica set is elected to be the primary.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=30)** The primary receives all right operations.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=34)** The rest of the replica set members are secondaries.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=39)** Secondaries replicate right operations from the primary asynchronously to maintain exactly the same data set.
>
> **[0:47](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=47)** This is how MongoDB uses replication to achieve redundancy, meaning the data is replicated in multiple places.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=56)** If at any point a primary becomes unavailable, one of the remaining secondaries will call for an election of a new primary, and one of the secondaries will then take over as the new primary.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=70)** This is how MongoDB achieves high availability, meaning that your database still works even if one or possibly more Mongo D instances become inaccessible.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=82)** In this example, we looked at a three member replica set.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=86)** You can configure your replica set differently, but it is recommended that any replica set should contain at least three Mongo D processes.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=95)** And there are good reasons for that.
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=97)** If a primary becomes unavailable, one of the remaining set members will call for an election.
>
> **[1:43](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=103)** But a new primary can only be successfully selected if more than half of the set members vote for it.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=112)** In this case, since we have three set members that means at least two replica set members must vote for a candidate for the election to be successful.
>
> **[2:03](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=123)** If you only have two replica set members, however, and one of them becomes unavailable, the remaining replica set member could not become the primary, because it could not get more than half of the votes.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=137)** More than half of two is still two.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=141)** So the entire database would in this case become unavailable.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=147)** It is generally also recommended to have an uneven number of replica set members that are allowed to vote in election as this makes elections more likely to have a successful outcome.
>
> **[2:39](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=159)** It's a bit more complicated than that because you can also have replica set members that you can configure to not vote in elections and not be able to become primary.
>
> **[2:48](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=168)** And there's also a limit of only seven members of a replica set who can actually be voting members, but all of these are administrative considerations that we will not dive deeper into for now.
>
> **[3:00](https://www.linkedin.com/learning/mongodb-essential-training/replica-set?u=76281980&t=180)** Instead, let's set up a replica set in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (4)
> **Code Keywords:** let (2), case, (1)
> **Prerequisites:** configure (2), set up (1)
> **Best Practices:** recommended (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Set up a replica set from the command line
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=0)** - [Instructor] In this video, we're going to create a three-member replica set using the command line.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=6)** For our production environment, it is recommended to use configuration files, which we will do in the next video.
>
> **[0:12](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=12)** However, it is also useful to know how to spin up a cluster without config files, so I recommend you try both.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=20)** All right.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=22)** If you followed along in the previous videos, then your terminal will look something like this.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=29)** So the first thing I'm going to do is I'm going to terminate the mongod process we were running by just saying Control + C.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=38)** Cool. And I will also exit out of the mongod shell.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=43)** Control + D.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=46)** Cool.
>
> **[0:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=47)** Now, to begin, I'm going to create a folder for this replica set, replica set cmdline.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=58)** All right.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=59)** And then I'm going to change directory into that new folder.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=66)** Here we go. Wonderful.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=70)** Okay.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=71)** Next, I'm going to create a key file for our database.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=76)** I'm going to do that by typing in openssl rand, and it already auto-completes dash base64 755 then into a file called keyfile.
>
> **[1:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=90)** And now you can run MongoDB without enabling authentication, but it is fairly easy to enable key file authentication which then provides a minimum of security between members of the replica set.
>
> **[1:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=103)** For production environments, it is recommended you use X.509 certificate instead.
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=109)** But since we are using this only for this tutorial, we'll use only our key file.
>
> **[1:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=114)** All right, we have our key file now.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=116)** Now we're going to lock down permissions on this file, so only the current user has read permissions on the key file.
>
> **[2:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=123)** We're going to do this with chmod.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=127)** And we're going to give it all zero zero permissions.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=131)** Okay. That's good.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=134)** Now the next thing we're going to do is we're going to create some sub-directories for each mongod process to store their individual set of data files and log files.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=145)** The way I'm going to do this is I'm going say mkdir.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=150)** And then I'm going to give it a path.
>
> **[2:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=153)** And I'm going say m1 comma 2 comma 3 and then slash db.
>
> **[2:42](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=162)** What I'm doing here, if you're not familiar with this syntax, is called shell parameter extensions.
>
> **[2:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=169)** And what it does is it will create multiple folders called m1, m2, m3 with a db sub-folder in it.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=178)** So if I say ls now, you can see there are three folders in here.
>
> **[3:04](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=184)** Awesome.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=187)** Okay. Now that we have the folder structure, let's start the mongod processes.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=193)** We're going to use the command mongod again, and then we're going to specify a replica set.
>
> **[3:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=200)** We'll do that by using the command line option replSet.
>
> **[3:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=205)** And then we'll call it myReplSet.
>
> **[3:28](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=208)** And you can see this is already auto-completing, but I'm going to type it out once just so that I can go through each argument and explain it.
>
> **[3:36](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=216)** Right. So the next argument we're passing in is the database path.
>
> **[3:41](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=221)** So that is going to be the folder that we created.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=224)** So it's m1, db.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=228)** Then we have to specify a lock path.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=232)** We only have to do that if we run this with the fork option.
>
> **[3:56](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=236)** But the fork option means we are not going to then see all of the logs in the terminal.
>
> **[4:02](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=242)** But instead, they go to a log file, which is a lot nicer if you are running multiple instances.
>
> **[4:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=250)** Okay. So we're going to specify the path for that.
>
> **[4:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=253)** And I'm just going to put that into the same folder.
>
> **[4:17](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=257)** Okay.
>
> **[4:17](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=257)** Now I'm going to specify the port that this one is going to run on, and that is 27017.
>
> **[4:26](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=266)** And then we'll pass in the fork option.
>
> **[4:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=269)** And lastly, we're going to pass in the keyfile option and give it the key file which is in the current directory, keyfile.
>
> **[4:41](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=281)** Okay. Let me run this.
>
> **[4:44](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=284)** And that looks like it worked. Great.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=287)** So now we're going to run this entire command two more times.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=292)** But we are going to have to change some of these arguments.
>
> **[4:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=297)** So for the dbPath, it's going to be m2 slash db.
>
> **[5:01](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=301)** For the lock path, it's going to be m2.
>
> **[5:04](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=304)** And for the port, we're going to use 27018.
>
> **[5:09](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=309)** You could use a different port.
>
> **[5:11](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=311)** But just to make it easy to follow along, I would suggest you use the same ones.
>
> **[5:15](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=315)** Okay.
>
> **[5:18](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=318)** All right. And then one more.
>
> **[5:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=322)** And that's going to be m3.
>
> **[5:27](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=327)** Okay. And the port, I'm going to use is 27019.
>
> **[5:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=333)** Cool.
>
> **[5:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=335)** Okay. So now all three of these individual mongod processes are running.
>
> **[5:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=340)** To make them work together, we'll need to initiate a replica set and add the instances to it.
>
> **[5:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=346)** To do that, we'll have to connect to one of the instances, and we'll do that with the MongoDB Shell.
>
> **[5:53](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=353)** So in another terminal window, use mongosh and connect to localhost, 27017.
>
> **[6:05](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=365)** Because those are the default ones, we can, again, just run mongosh.
>
> **[6:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=370)** Okay. Cool.
>
> **[6:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=373)** So to initiate the replica set, we're going to run rs dot initiate.
>
> **[6:21](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=381)** Initiate. There we go.
>
> **[6:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=384)** Okay. And this tells me no configuration specified, using a default configuration for the set.
>
> **[6:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=390)** That's all fine by me.
>
> **[6:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=393)** Okay. Now the next thing that we're going to do is we're going to say use admin.
>
> **[6:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=400)** This changes the database we are using to use the admin database which contains configuration options for your database.
>
> **[6:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=409)** Okay. Using this configuration database, we can now create our first user.
>
> **[6:56](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=416)** And we are able to do that because of something called the localhost exception which allows you to enable access control and create the first user or role in the system.
>
> **[7:08](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=428)** After that, you have to authenticate as a user with privileges to create other users in order to create more users.
>
> **[7:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=436)** So it's really important that the first user you create has enough privileges to create more users.
>
> **[7:23](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=443)** I'm going to use the root role for my user, which has all of the privileges we need.
>
> **[7:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=450)** So the way to create a user is to use the command createUser.
>
> **[7:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=458)** Right.
>
> **[7:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=458)** And inside the parenthesis, we're going pass an argument that is a JSON document.
>
> **[7:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=465)** And we are going specify as the username, a name.
>
> **[7:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=472)** I'm going to use my own name.
>
> **[7:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=474)** You can use yours.
>
> **[7:56](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=476)** And then I'm going to add a password.
>
> **[7:59](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=479)** And you do that with the pwd name.
>
> **[8:04](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=484)** And I'm going to put here passwordPrompt.
>
> **[8:08](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=488)** That is so that I don't have to type in the password in plain text.
>
> **[8:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=493)** 'cause then it would become visible in the logs and everything.
>
> **[8:15](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=495)** And we don't want that.
>
> **[8:17](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=497)** Okay. And the last key value pair that we need to add here is the roles array.
>
> **[8:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=504)** And I told you I was going to use the root role.
>
> **[8:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=509)** Right. Cool. Let me run this.
>
> **[8:31](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=511)** Now it's going to ask me to enter a password.
>
> **[8:34](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=514)** So I'm going to do that.
>
> **[8:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=517)** Awesome. That worked.
>
> **[8:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=520)** To do anything else now, we'll need to authenticate as this first user that we created.
>
> **[8:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=525)** So the way you authenticate is you say db dot getSiblingDB.
>
> **[8:53](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=533)** And this is a bit strange, but you'll get used to it.
>
> **[8:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=537)** And then you say admin.
>
> **[8:59](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=539)** So you're getting the admin database, 'cause that's the one you are authenticating against, that's the one we just created the user.
>
> **[9:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=546)** And then inside the auth, we pass this argument the username and then the password.
>
> **[9:12](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=552)** Again, I am going to type in passwordPrompt so that it prompts me, and it doesn't get leaked anywhere.
>
> **[9:21](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=561)** Cool.
>
> **[9:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=562)** So that is us authenticated.
>
> **[9:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=565)** Now the next thing that we're going to do is we're going to add the other two replica set members.
>
> **[9:32](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=572)** And the way we do that is we say rs dot add.
>
> **[9:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=578)** And then we're going to specify localhost, 27018.
>
> **[9:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=585)** That's the first one.
>
> **[9:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=587)** Okay. That looks like it worked.
>
> **[9:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=589)** And then 27019.
>
> **[9:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=592)** Now if you're wondering how I'm getting these commands back so quickly and can just edit them, press Up on your keyboard.
>
> **[10:01](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=601)** Okay.
>
> **[10:02](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=602)** The next thing I'm going do is I'm going check the status of the replica set.
>
> **[10:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=606)** You can do this with the command rs dot status.
>
> **[10:12](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=612)** Okay. And then this gives me a lot of information about the cluster.
>
> **[10:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=620)** Yeah. And really what I'm just looking for here is that all three of the replica set members that we just added are in.
>
> **[10:27](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=627)** And I can see that because of this members array here.
>
> **[10:32](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=632)** This has the first member, id zero, which is 27017.
>
> **[10:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=637)** Then we've got 27018 as a secondary and 27019.
>
> **[10:42](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=642)** So that's all good to go.
>
> **[10:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=646)** Another way of obtaining information about the replica set is to run db dot serverStatus and then add the quantifier repl.
>
> **[11:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=660)** So that will just give us the information about the replica set from all of the other information that gets returned.
>
> **[11:09](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=669)** So here we can also see all of the host names, and that means those are all of the replica set members that we have in this replica set.
>
> **[11:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=680)** Right.
>
> **[11:21](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=681)** As I said in the beginning, for production environments, it is better to use config files.
>
> **[11:27](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=687)** So let's exit the shell here.
>
> **[11:31](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=691)** You can do that by typing exit or Command + D.
>
> **[11:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=695)** And then we're going to shut down the mongod instances by running kill all mongod.
>
> **[11:41](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=701)** And I'm going to do that in this one, 'cause that's where we're setting them up.
>
> **[11:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=705)** Okay. Cool.
>
> **[11:48](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=708)** The last thing that we're going to do is we're going to remove the files in this folder.
>
> **[11:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=714)** I will just cd out of this folder.
>
> **[11:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=718)** And then I'm going say rm dash rif replica set cmdline.
>
> **[12:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=726)** Okay.
>
> **[12:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=727)** Cool.
>
> **[12:08](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-from-the-command-line?u=76281980&t=728)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (4), this. (3)
> **Code Identifiers:** passwordprompt (2), replset (1), myreplset (1), dbpath (1), createuser (1)
> **CLI Commands:** make (2), chmod (1), mkdir (1), ls (1), cd (1)
> **Tools:** terminal (3), command line (2)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** in the next (2)
> **Best Practices:** recommended (2)
> **Env Vars:** json (1)

#### Set up a replica set with config files
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=0)** - [Instructor] In this video, we are going to create a three-member replica set using configuration files.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=8)** Config files should be used for any production deployment, because they are easier to use and manage, and you can check them into version control.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=16)** Let's go to the terminal.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=20)** To begin, I'm going to create a folder for this replica set, and I'm going to call the folder replicaset and then cd into it.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=30)** The next thing I'm going to do is I'm going to create a key file for our deployment.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=38)** You can run MongoDB without enabling authentication.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=42)** But it is fairly easy to enable key file authentication which then provides a minimum of security between members of the replica set.
>
> **[0:51](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=51)** For production environments, it is recommended that you use X.509 certificates instead.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=58)** But since we are using this only for this tutorial, we'll use only our key file.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=63)** The one additional thing I'm going to do on this key file is I'm going to change the permissions on it so that only the current user has read permissions on the key file.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=75)** The next thing I'm going to do is I'm going to create the folder structure that we are going to use for the three replica set members.
>
> **[1:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=84)** I'm going to do that by using this command, mkdir dash p.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=95)** If you're not familiar with this syntax, what is happening here is called shell parameter expansion, and it actually creates three folders at the same time.
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=108)** Now, the next thing I'm going to do is I'm going to create an empty file for the configuration.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=117)** So I'm just going say, touch m1 dot conf.
>
> **[2:01](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=121)** That's going to create an empty file, and I'm just doing that so that it will be easier to open.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=127)** So now I'm going to open Visual Studio Code.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=132)** Okay. Here we now have this m1 dot conf file.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=138)** Now, inside this configuration file, we're now going to create our first config file.
>
> **[2:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=144)** Normally, you'd probably copy this from an existing conf file and just adjust a few settings.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=150)** But I think it's useful to go through it once, just so you know what each individual variable means.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=158)** So we'll start with storage.
>
> **[2:42](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=162)** The storage argument allows you to specify the path where the database, in this case, one mongod, will store its files.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=175)** So for our first note, that is going to be in one of the folders that we created.
>
> **[3:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=180)** So m1 slash db.
>
> **[3:04](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=184)** Okay. The next argument is going to be net.
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=190)** And inside net, we have two further options: bindIp, which in this case will be localhost, and a port number.
>
> **[3:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=202)** Here I'm going to use the default MongoDB port which is 27017.
>
> **[3:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=209)** The next argument in this configuration file is the security argument.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=217)** And that has multiple different options.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=220)** The two that we are going to specify is authorization, which we'll just say is enabled, and then keyfile, which specifies that we are using key file authentication.
>
> **[3:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=238)** And for that, we're going to have to list the name of the key file, In our case, that's just keyfile.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=246)** Okay.
>
> **[4:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=247)** The next thing that we're going to specify is systemlog.
>
> **[4:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=253)** And that is where each mongod is going to store its logs.
>
> **[4:18](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=258)** First, we need to specify the destination.
>
> **[4:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=262)** And in our case, that is a file.
>
> **[4:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=265)** So there are multiple different options.
>
> **[4:27](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=267)** You could send it, for example, also to the terminal.
>
> **[4:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=270)** Then you have to specify the path for the file.
>
> **[4:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=273)** So in our case, we can just store that in the m1 folder.
>
> **[4:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=280)** And then I'm going to give it the file name of mongod dot log.
>
> **[4:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=285)** Okay.
>
> **[4:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=286)** There are two more options that we're going specify here.
>
> **[4:50](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=290)** The first one is for processManagement.
>
> **[4:56](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=296)** And that just means we generally want to start each mongod as its individual process as a fork.
>
> **[5:05](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=305)** So for that, we're just going to specify fork, true.
>
> **[5:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=310)** And then the last thing that we need to specify is the replica set name.
>
> **[5:15](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=315)** And the way you do that is you specify the replication option.
>
> **[5:19](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=319)** And inside that, there's a replSetName option, and we're going to set that to mongodb essentials dash rs.
>
> **[5:31](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=331)** Okay. That's that done.
>
> **[5:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=333)** Let's go back to the terminal and just quickly copy the configuration file to m2 dot conf and to m3 dot conf.
>
> **[5:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=347)** Now let's go back to the terminal and open up m2 dot conf.
>
> **[5:51](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=351)** And now there are a few things here that we need to change before we can resume.
>
> **[5:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=357)** And that is the path where the mongod is going to store its files.
>
> **[6:01](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=361)** That's going to be m2 slash db.
>
> **[6:05](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=365)** The port has to be different, 'cause they all have to have their individual port.
>
> **[6:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=370)** So I'm going to just add one to that.
>
> **[6:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=373)** And the log file is going to be in the m2 folder.
>
> **[6:18](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=378)** Okay. That's m2 done.
>
> **[6:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=380)** Now let's open up m3.
>
> **[6:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=382)** And here we're going do the same thing.
>
> **[6:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=385)** The dbPath is going to be m3 slash db.
>
> **[6:28](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=388)** Port is going to be 27019.
>
> **[6:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=393)** And the logs are going to be stored in the m3 folder.
>
> **[6:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=398)** Okay, let's save that.
>
> **[6:41](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=401)** And let's go back to the terminal.
>
> **[6:44](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=404)** Now that we have created all the configuration files, one thing that remains to do is to start the mongod processes.
>
> **[6:53](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=413)** And the way you start a mongod from a configuration file is by specifying the dash f option and then specifying the configuration file.
>
> **[7:05](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=425)** Okay. That worked.
>
> **[7:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=427)** Now we're going to do the same for m2 and m3.
>
> **[7:15](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=435)** Great. That looks like it worked.
>
> **[7:18](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=438)** Now we have three individual mongod processes.
>
> **[7:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=442)** To make them work together, we're going to need to initiate a replica set and add the instances to it.
>
> **[7:28](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=448)** To do that, we'll have to connect to one of these instances.
>
> **[7:32](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=452)** So in my second terminal down here, I am going to start my MongoDB Shell.
>
> **[7:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=460)** And I don't need to specify anything else here, because the mongod that we are connecting to is under the default parameters which is localhost and 27017 as the port.
>
> **[7:55](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=475)** Okay. So, here, what we're going to do is we're going first change the database to use the admin database, because that's where all of the configuration is and where we can create users.
>
> **[8:09](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=489)** Next, we're going to write out the conflict variable which we can then use to initiate the replica set.
>
> **[8:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=496)** And this works just like a drop PostScript.
>
> **[8:19](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=499)** So we can say config equals.
>
> **[8:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=502)** And then there's going to be adjacent document.
>
> **[8:25](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=505)** Inside it, we have an id field, which is the name of the replica set, exactly as we specified it in the configuration file.
>
> **[8:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=515)** So that's going to be mongodb essentials dash rs.
>
> **[8:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=523)** And then there's a members field.
>
> **[8:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=527)** The members field takes an array of documents.
>
> **[8:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=532)** And each document has an id, which is zero indexed, and then a host for each member.
>
> **[9:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=543)** So the host is going to be, in our case, localhost, and then 27017 for the first one.
>
> **[9:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=553)** For the second one, the id will be one.
>
> **[9:17](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=557)** And the host will be localhost and then 27018.
>
> **[9:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=564)** And then for the last one, the id will be two.
>
> **[9:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=569)** And host will be the localhost, 27019.
>
> **[9:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=577)** Okay.
>
> **[9:39](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=579)** Great. Now you can see it in nicer formatting here.
>
> **[9:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=583)** And now that we've got this config all written out, all we need to do is say rs dot initiate.
>
> **[9:52](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=592)** That will initiate the replica set.
>
> **[9:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=594)** And we pass as the argument the config variable.
>
> **[10:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=600)** Okay. Here's an issue, and it's just a small typo.
>
> **[10:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=603)** It says rs dot initate.
>
> **[10:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=607)** That is not how you spell initiate.
>
> **[10:10](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=610)** There we go.
>
> **[10:13](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=613)** Okay. And we get back a response saying, okay, one, which means that worked.
>
> **[10:19](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=619)** Great.
>
> **[10:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=620)** The next thing we are going to do is we're going to create our first user.
>
> **[10:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=624)** We are able to do that because of something called the localhost exception which allows us to enable access control and create the first user or role in a system.
>
> **[10:37](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=637)** After you create your first user or role, you have to authenticate as a user with privileges to create other users to create further users.
>
> **[10:47](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=647)** So it is really important that the first user you create has the privilege to create more users.
>
> **[10:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=654)** So to make it easy here, I'm going to use the root role for my first user.
>
> **[11:00](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=660)** So let's do just that, db dot createUser is the method that we're going to use to create a user.
>
> **[11:08](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=668)** That takes as argument a document.
>
> **[11:11](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=671)** Inside the document, you're going to specify a username.
>
> **[11:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=676)** In my case, I'm just going to call my user naomi.
>
> **[11:20](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=680)** And then you have to specify a password.
>
> **[11:24](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=684)** Now you can specify the password as just a string.
>
> **[11:28](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=688)** But that would make it visible on this video or in the logs potentially, so that's not really great.
>
> **[11:35](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=695)** What we can do instead is to type in passwordPrompt.
>
> **[11:40](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=700)** And that's just going to prompt us then for a password.
>
> **[11:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=703)** Okay. The last field that we need to add to this document is the roles field.
>
> **[11:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=709)** The roles field takes an array of roles, 'cause you can have multiple roles.
>
> **[11:55](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=715)** But in our case, like I said, I'm just going assign the root role.
>
> **[11:59](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=719)** Right. We'll hit Enter.
>
> **[12:01](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=721)** And I'll type in a secret password and hit Enter.
>
> **[12:05](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=725)** All right. And that looks to have worked.
>
> **[12:09](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=729)** Now, before I can do anything else, I have to authenticate.
>
> **[12:14](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=734)** So to authenticate, you're going to have to authenticate against the database on which you created the user.
>
> **[12:23](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=743)** In our case, that's the admin database.
>
> **[12:27](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=747)** So we're going say, db dot getSiblingDB.
>
> **[12:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=753)** And that's going to work from any database that you are currently on.
>
> **[12:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=758)** Then you're going to specify the database that you have created the user on.
>
> **[12:43](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=763)** So in our case, admin.
>
> **[12:46](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=766)** Then you're going to use the auth method.
>
> **[12:49](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=769)** And you are just going to pass in your name.
>
> **[12:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=774)** It's going to ask you to enter the password.
>
> **[12:57](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=777)** Just do that.
>
> **[12:58](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=778)** Okay. And now we are authenticated.
>
> **[13:03](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=783)** Great.
>
> **[13:04](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=784)** Now we can check the status of the replica set if we want to.
>
> **[13:09](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=789)** To do that, we can issue the command rs dot status.
>
> **[13:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=796)** The rs dot status command reports on health of replica set members.
>
> **[13:22](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=802)** The data that gets returned here relies on the heartbeats that are sent between the replica set members.
>
> **[13:29](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=809)** That means that the note that we run this command on has slightly different data available than all of the other members.
>
> **[13:38](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=818)** But essentially, for right now, all that's important is that you can have this list of all of the members.
>
> **[13:45](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=825)** And you can see here, it's localhost, 27017, which is the primary, and then the other two, which are secondaries.
>
> **[13:54](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=834)** There is one more way of obtaining information about a replica set, and that is to run db dot serverStatus and then get the repl field value from it, like this.
>
> **[14:12](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=852)** So that gives you a bit more succinct information back.
>
> **[14:16](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=856)** So here you can have the list of the hosts in a bit more condensed format.
>
> **[14:23](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=863)** All right, now we've got the replica set running, and we're essentially ready to continue with the course.
>
> **[14:30](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=870)** There's one more thing that I want to point out to you.
>
> **[14:33](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=873)** If you need to pause this course and restart your machine, or you take a break and come back a few days later, you may have to restart your replica set.
>
> **[14:44](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=884)** You don't need to completely set everything up again.
>
> **[14:48](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=888)** But what you do need to do is just go back to the folder, the replica set folder, and again, run the commands, mongod dash f, m1 dot conf, m2 dot conf and then m3 dot conf.
>
> **[15:02](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=902)** And then your replica set should be ready to go again.
>
> **[15:06](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=906)** All right.
>
> **[15:07](https://www.linkedin.com/learning/mongodb-essential-training/set-up-a-replica-set-with-config-files?u=76281980&t=907)** With this now all set up, let's get started with actually using MongoDB.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (9), let (8), pass (2), else, (1), this. (1)
> **Code Identifiers:** bindip (1), processmanagement (1), replsetname (1), dbpath (1), createuser (1)
> **Tools:** terminal (6), visual studio (1)
> **CLI Commands:** make (3), cd (1), mkdir (1)
> **Cross-References:** go back to (4)
> **Definitions:** means that (2), is called (1), is a  (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** go to (1)

#### Import the sample data
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=0)** - [Instructor] When you installed MongoDB earlier, you also installed the MongoDB database tools.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=6)** They include mongostat to get statistics on a running mongod, mongodump which allows you to export dump files from MongoDB collections in BSON, mongorestore which allows you to import dump files from MongoDB collections that were stored in BSON, mongoexport which allows you to export collection data to JSON or BSON.
>
> **[0:31](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=31)** And the one we are looking for, mongoimport, which allows you to import collection data from JSON or CSV files.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=41)** The datasets that we are going to use for this course are in this GitHub Repo.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=48)** Please pause this video and download them to the MongoDB essentials folder that you have created for this course.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=57)** Now, I have already done that and put all of the files into a datasets folder that I've just changed into.
>
> **[1:05](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=65)** Now, what we're going to do is we're going to import these datasets into our deployment.
>
> **[1:13](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=73)** And to use that we're going to use the mongoimport command.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=78)** So because we have created a user on our database deployment, we're going to have to specify our username.
>
> **[1:29](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=89)** In my case, naomi.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=91)** In your case it will be whatever you called your username.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=94)** And we're going to have to specify which authentication database was used.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=100)** Remember when we said use admin before we created the user?
>
> **[1:44](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=104)** That is why we have to specify the authentication database.
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=108)** In theory, you could have created the user on a different database.
>
> **[1:54](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=114)** That's why.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=115)** All right.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=116)** The last thing that we have to specify is in which database the dataset should get stored.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=122)** We're going to call this database sample_data, and then we need to pass in the name of the files, in our case, the first one is inventory.json.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=133)** Okay. So I'm going to run this.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=135)** It is asking me for my password, which I will give it.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=138)** And now it says it imported 1000 documents successfully.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=143)** Very good.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=145)** That's the first one imported.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=147)** We've got two more datasets.
>
> **[2:28](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=148)** So I'm going to run the same command for the movies.json file.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=155)** Again, I'm going to give them my password, and it imported 1000 documents successfully again.
>
> **[2:42](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=162)** Okay. One last one to go.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=164)** And that is the orders.json file.
>
> **[2:49](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=169)** Okay. And we have imported all of the datasets for this course.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/import-the-sample-data?u=76281980&t=175)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** bson (3), json (2), csv (1)
> **Code Keywords:** case, (2), for, (1), pass (1), this. (1)
> **File Paths:** inventory.json (1), movies.json (1), orders.json (1)
> **Code Identifiers:** sample_data (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### Debug
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=0)** - [Instructor] If you encounter any issues while setting up your MongoDB deployment or later on while using it, there are few common things you can do to debug your issue.
>
> **[0:10](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=10)** If your database is failing to start, first, check the log files at the location that we specified, in our case m1/mongod.log, et cetera.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=23)** So I could do that here right now in VS Code.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=28)** And this is what this log file would look like.
>
> **[0:31](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=31)** And this is where, then scroll towards the end and see whether there are any errors that I can see.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=38)** The next thing that you can try if your deployment isn't even starting is to disable the fork option.
>
> **[0:45](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=45)** So remember when we said fork true in the configuration file, here.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=54)** If you set that to false it will give the error that occurs when you start the MongoD.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=63)** The next thing that you can do is to check the oplog.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=67)** The way you do that is with this command.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=71)** So let me briefly show you what that looks like.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=76)** So on here, I would now say, use local.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=81)** So that's using the local database, and then I would run this command, the one that I showed you on the slide just now.
>
> **[1:32](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=92)** So that is db.oplog.rs.find.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=96)** And then this is sort of like a nice way of passing through it, which just filters out any no ops and then limits it to the most recent thing it finds in there.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=107)** So you could go through the oplog like this and search for what's happening.
>
> **[1:54](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=114)** All right.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=115)** The next thing that you can do is you can try to increase the log level.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=120)** The way you would do that is you would, first of all check what the current log level is.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=127)** You do that with getlLogComponents, like that.
>
> **[2:16](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=136)** Okay.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=137)** That gives you a lot of information, verbosity here is zero for example, and that means that only informational data gets logged.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=150)** If you wanted to change these settings, you would then run a command on the admin database, which you can do also by saying db.adminCommand, adminCommand.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=167)** And then you would say, setParameter: 1, and that means true.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=175)** So that's what you want to do, the command you want to do.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=177)** And then you specify the parameter, in this case logLevel, and you would set that to something like two which is a higher logLevel, therefore more verbose.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=189)** Okay, I didn't spell logLevel correctly.
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=192)** There we go.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=193)** Okay, so that has now been updated.
>
> **[3:16](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=196)** Note that you shouldn't have it on a very high log level the entire time, that can mean your deployment runs slower because it needs to generate more logs.
>
> **[3:27](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=207)** Okay, the last thing that you can do to debug your deployment is go to Stack Overflow, search for the error that you're getting, and hopefully someone in the community has encountered a similar error and you can follow the steps that were recommended to this person.
>
> **[3:43](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=223)** All right.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=224)** I hope this helps if you run into any issues, let me know if it doesn't.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/debug?u=76281980&t=228)** Otherwise, I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** loglevel (3), admincommand (2), getllogcomponents (1), setparameter (1)
> **Code Keywords:** let (2)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** db.oplog.rs (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Documentation:** stack overflow (1)
> **Tools:** vs code (1)


### 3. Working with MongoDB

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The document model
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=0)** - [Instructor] One of the main features that differentiates MongoDB from many of the databases is that it is built to natively work with JSON documents.
>
> **[0:10](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=10)** If your application uses JSON to work with data, using MongoDB can save you a lot of time because you can store data as is.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=20)** Here's an example JSON document.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=22)** The document has multiple key value pairs where the keys define the data and must be strings, and the values are the variables for the respective record that contain the data.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=37)** For the values, you can use strings, numbers, booleans, arrays, other JSON objects, and some other objects.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=46)** You'll hear a lot about JSON when talking about MongoDB, and most of the time, you don't need to think about this any further.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=53)** However, there's one small caveat you should know about.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=57)** MongoDB actually uses a binary encoded serialization of JSON-like documents called BSON for storing data as well as for their drivers and tools.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=69)** BSON was designed to be especially lightweight, traversable, and efficient.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=75)** BSON also brings support for additional types such as images, timestamps, and longs, and much more.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/the-document-model-17231550?u=76281980&t=83)** You generally won't need to think about the difference between JSON and BSON much, but it's good to know that there is a slight difference.

> [!info]- Semantic Content
>
> **Env Vars:** json (7), bson (4)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Namespaces, collections, documents
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=0)** - [Instructor] From a technical point of view, this represents a MongoDB deployment with one replica set with three MongoDBs.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=9)** But when you are using the database, most of the underlying architecture is stripped away.
>
> **[0:15](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=15)** Inside your MongoDB deployment, your data is organized into databases.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=20)** It may be confusing to hear that there can be multiple databases inside your database.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=25)** The way I think about it, is you have one database deployment and inside your deployment, you can then have one or more databases.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=34)** Most of the time, all data that belongs to one application like a blog, will be in one database.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=42)** Inside each database, there are collections.
>
> **[0:45](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=45)** A collection is a grouping of MongoDB documents.
>
> **[0:50](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=50)** For a blog, there might be a user's collection and a posts collection.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=56)** Inside each collection are documents.
>
> **[1:00](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=60)** Documents form the basic unit of data in MongoDB and each document contains one individual record.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=68)** For an author's collection for example, each document would contain information about one author.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=75)** Be aware that there is a maximum size for each document, which is 16 megabytes.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=81)** All right.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=82)** Let's see this in action.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=85)** All right. I'm going to close this above terminal now so that we have more space for just the MongoDB Shell.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=93)** And I'm going to clear the screen as well.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=96)** All right.
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=97)** Now, I am going to create a new database which we're going to call blog.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=107)** So I'll do that by just saying use blog.
>
> **[1:50](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=110)** Now, if I want to see what connections are inside of this database, I will type show collections.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=118)** Now, this is empty and that shouldn't be surprising to you 'cause we just created this database.
>
> **[2:04](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=124)** All right.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=125)** The easiest way to create a collection, is to just insert a document into the collection as though it already existed.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=133)** So we're going to do just that.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=135)** I am going to create the author's collection by inserting one document into it.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=143)** And I'm going to just create this document.
>
> **[2:26](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=146)** I'll say name and I'll put my name just to test it.
>
> **[2:33](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=153)** Okay.
>
> **[2:34](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=154)** And that got inserted just fine.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=158)** All right.
>
> **[2:39](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=159)** This returns an object ID here.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=161)** Each document in MongoDB must have a unique ID value.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=167)** If you don't assign one, which in this case we didn't do, MongoDB will automatically create one.
>
> **[2:53](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=173)** Which is what happened here.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=175)** Congratulations. You have inserted your first document, created your first collection and created your first database in MongoDB.
>
> **[3:04](https://www.linkedin.com/learning/mongodb-essential-training/namespaces-collections-documents?u=76281980&t=184)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### MongoDB Query Language
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=0)** - [Instructor] Now you know what data inside MongoDB looks like.
>
> **[0:03](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=3)** The next thing you need to know is how to access that data.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=8)** That's what you use the MongoDB query language for.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=13)** Be aware that you may also find references to MQL as the MongoDB query API.
>
> **[0:21](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=21)** MQL allows you to perform, create, read, update, and delete operations, also called CRUD.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=30)** If you're familiar with JavaScript, using the shell will probably feel very natural for you.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=36)** If you're not, don't worry.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=38)** We'll go through it all and this is only how you interact with the database inside the MongoDB shell.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=43)** There are MongoDB drivers available for almost all programming languages out there, allowing you to interact with MongoDB seamlessly in the languages you are used to.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=54)** Let's dive in.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=57)** In the last video, we already created our first document.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=63)** We did that by using the insert one command.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=66)** I'm going to create one more here to remind us of what that looked like.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=71)** So the way we did that was we said db.authors to specify the namespace.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=78)** And then we called the insertOne command and we passed in a document.
>
> **[1:27](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=87)** So, the document had a name field and then we just specified the name.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=94)** I'm going use my partner's name here, Joe Nash.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=100)** All right, that's one more document inserted.
>
> **[1:44](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=104)** If I want to create more than one document, I'll instead use the insert many command.
>
> **[1:50](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=110)** Just as a reminder, in the MongoDB shell you can press up to get the last command back and then you can edit it and reuse it.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=122)** If I want to create more than one document, I'll instead use the insertMany command so I'll do that here.
>
> **[2:09](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=129)** And the insertMany command takes an array of documents.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=135)** Okay, so if I wanted to, for example, insert a document for each of the founders of MongoDB, I would do it like this and that would be a document for Eliot Horowitz.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=150)** Then going to have a new document here, going to again, have the name field and then the next one would be Dwight Merriman.
>
> **[2:45](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=165)** And lastly, we've got one more document for name Kevin P. Ryan.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=178)** All right, cool.
>
> **[2:59](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=179)** So, let me insert all of these and you can see here, it inserted three different documents here and gave us three different object IDs back.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=191)** Okay, so that's enough for creating documents for now.
>
> **[3:16](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=196)** Now let's read some documents.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=198)** So to read just one document that is in the database, we can use the find one command.
>
> **[3:24](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=204)** The way we do that is we, again specify the name space by saying db.authors.
>
> **[3:29](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=209)** Then we say, findOne.
>
> **[3:33](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=213)** And that gives us back my document, or in your case, probably your document with your name.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=220)** If I want to find multiple documents in a collection, I can do that by specifying the name space and then using the find command instead.
>
> **[3:51](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=231)** So this gives me back multiple documents.
>
> **[3:56](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=236)** If I want to find documents that match a specific condition, I can add that as a parameter.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=243)** I can, for example, specify that I want to find all authors with the name Naomi Pentrel.
>
> **[4:10](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=250)** So the way I'd do that is I'd use the find command, then I pass in a document and I would specify name.
>
> **[4:21](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=261)** And then I would say Naomi Pentrel and I would get back my document which is the only one that matches, naturally.
>
> **[4:33](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=273)** Now, one thing I want to point out to you is inside the MongoDB shell, it actually doesn't matter if I put quotes around the field name or not.
>
> **[4:41](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=281)** So I could do this.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=282)** It would give me the same result.
>
> **[4:44](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=284)** You will probably throughout this course find me dropping these quotes just because it's easier.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=292)** All right.
>
> **[4:53](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=293)** So, we were talking about CRUD.
>
> **[4:55](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=295)** We found out how to create documents and how to read documents.
>
> **[4:59](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=299)** The next thing is how to update documents.
>
> **[5:03](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=303)** To update documents, we'll use the update one or the update many methods.
>
> **[5:08](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=308)** I can for example, update my document to add a website.
>
> **[5:14](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=314)** So let's do that.
>
> **[5:16](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=316)** I'll use the same name space, and then I'll say updateOne.
>
> **[5:22](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=322)** Now the first argument that gets passed into the function is one that will match the specific document that we want to update.
>
> **[5:30](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=330)** So here we'll say something like name and then your name.
>
> **[5:34](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=334)** Then we're going pass in a second document and that will be the specification of what we want to update.
>
> **[5:42](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=342)** I am going to say set, which will add or update a field.
>
> **[5:49](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=349)** And then for that set operator, I'm going to pass in another document and that will be website and I'll put in my website as a string.
>
> **[6:07](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=367)** Okay, so with running this, my document now has a website field.
>
> **[6:14](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=374)** If you don't believe me, I will find the document again and you can see here, the website got added.
>
> **[6:20](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=380)** The update one command will update the first document it finds that matches the condition you specify in the first argument, in this case, where the name is Naomi Pentrel.
>
> **[6:31](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=391)** If you have multiple documents that match the condition that you specify, it will still only update one of them.
>
> **[6:39](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=399)** If you want to update them all, you should use the update many method.
>
> **[6:44](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=404)** Let me get out of this one.
>
> **[6:48](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=408)** So I could, for example, use the update many method here.
>
> **[6:54](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=414)** I'll start with this.
>
> **[6:58](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=418)** And then let me say we're going to update all of the documents here.
>
> **[7:03](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=423)** I do that by just specifying an empty condition which matches all of the documents in the collection.
>
> **[7:10](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=430)** And then what we're going to do is we're going to add a new field, again with the set operator and that can be for books.
>
> **[7:20](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=440)** And I'm going to pretend that we all for now have an empty array.
>
> **[7:26](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=446)** Okay, so I'll do that.
>
> **[7:28](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=448)** And now if I say db.authors.find, we should all have a field that is books with an empty array and we do.
>
> **[7:38](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=458)** Great.
>
> **[7:40](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=460)** All right.
>
> **[7:41](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=461)** The last thing that we should talk about is how to actually delete documents.
>
> **[7:46](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=466)** Now, deleting is very much like finding documents.
>
> **[7:51](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=471)** I can, instead of find, just specify deleteOne and then I pass in a query condition.
>
> **[7:59](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=479)** So if I wanted to, for example, delete one of these documents, I would say name and then I would specify someone's name.
>
> **[8:12](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=492)** And that would now delete Joe Nash's document.
>
> **[8:17](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=497)** Now, if I wanted to delete many, I would instead use the deleteMany command.
>
> **[8:30](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=510)** And then if I specified nothing here, it would just delete all of my documents.
>
> **[8:35](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=515)** So in this case, I'm not going to execute it but if you want to, you can go ahead and do that.
>
> **[8:43](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=523)** All right, don't worry if any of this was a bit fast.
>
> **[8:46](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=526)** We'll dive a lot deeper into all of this in later chapters.
>
> **[8:51](https://www.linkedin.com/learning/mongodb-essential-training/mongodb-query-language?u=76281980&t=531)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), let (6), pass (4), case, (3), this. (2)
> **CLI Commands:** find (11)
> **Code Identifiers:** insertmany (2), insertone (1), findone (1), updateone (1), deleteone (1)
> **Env Vars:** mql (2), crud (2), api (1)
> **Analogies:** for example (5)
> **Cross-References:** in the last (1), in the next (1)
> **Documentation:** specification (1)
> **Warnings:** be aware (1)

#### Indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=0)** - [Narrator] Imagine you have to search for the phone numbers of all of your friends.
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=4)** And to do that, you are given a phone book which contains everyone in your area.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=9)** But for whatever reason, it's not alphabetically sorted.
>
> **[0:12](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=12)** Not great.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=14)** You'd have to go through the entire book item by item.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=17)** It would be much easier to retrieve the data you need if the phone book was sorted alphabetically, that is if there was an index on the last name associated for each record, like here.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=30)** Now getting the phone numbers is a lot easier.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=33)** Indexes work in a similar way in databases.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=36)** When you perform a query on your database, the operation needs to find the data you are looking for.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=42)** If you haven't defined an index, the database needs to check every document in the collection you are querying to see if it matches the query statement, which is also called the query predicate.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=53)** This is called a collection scan and is very inefficient.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=59)** An index provides an organized way to look up data by storing a subset of the data with pointers to the location of the full records.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=69)** If the data you are querying is present in the subset of data in an index, the database only needs to check the index.
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=77)** Queries that can be answered completely with just the index are called covered queries in MongoDB.
>
> **[1:24](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=84)** And these queries are very performant.
>
> **[1:27](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=87)** The improved efficiency speeds up query execution as well as updates because the database can find the data we are retrieving or updating faster.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=98)** Indexes are very useful and you should generally create an index when you frequently query on the same fields.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=106)** This is especially true if you saw data on that field or perform range-based queries.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=113)** Generally, if you frequently query data in a similar way, that is called a common query pattern.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=119)** And if you have a common query pattern, generally you want an index on that pattern.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=126)** However, indexes come at a price.
>
> **[2:10](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=130)** Indexes need to be maintained by the database, which adds about 10% write overhead to your write operations.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=138)** So having indexes is a trade-off.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=141)** You can get faster data access but any writes take a little bit longer.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=147)** So you should create indexes on common query patterns only.
>
> **[2:33](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=153)** You should also make sure that all indexes you create fit into RAM where data access is fastest.
>
> **[2:40](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=160)** In MongoDB, there are many types of different indexes, single field indexes, which create an index on just one field, partial indexes, where you can add an option to the index to tell the database to only match documents that have a value satisfying a certain condition for the index, compound indexes, which create an index on a combination of fields.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=187)** This is useful if you often query on two or more fields together.
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=192)** There are also multi-key indexes.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=194)** That's an index on up to one array value.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=199)** It can't be more than one array value because the size of the index would otherwise grow really quickly.
>
> **[3:27](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=207)** There are also text indexes which allow you to search within text fields.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=212)** And there are wild card indexes.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=215)** This is a special kind of index that is indexed on a field or set of fields for which you don't know the name because the schema changes dynamically.
>
> **[3:46](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=226)** It is useful for very diverse data but it should not be used for any other cases.
>
> **[3:54](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=234)** There are also geometric indexes, which are, for example, 2D sphere indexes, 2D or geoHaystack indexes.
>
> **[4:05](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=245)** And lastly, there are hashed indexes.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=248)** Hashed indexes can reduce the index size if original values are very large but they are not performant for ranged queries.
>
> **[4:18](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=258)** All right, let me show you how to create an index.
>
> **[4:21](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=261)** So for our office collection, let's remind ourselves what that looked like.
>
> **[4:25](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=265)** So db.authors.find.
>
> **[4:31](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=271)** Okay.
>
> **[4:32](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=272)** So to create an index on the authors collection, I'm going to call the createIndex method and I'm going to pass in just the field that I want the index to be on.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=287)** In this case, we may want to index on just the name field.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=292)** So I will specify it like this and just press Enter.
>
> **[4:57](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=297)** And that has created our index.
>
> **[5:00](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=300)** We'll create some more indexes later as needed and we'll also talk about how you can check whether you may need indexes.
>
> **[5:06](https://www.linkedin.com/learning/mongodb-essential-training/indexes-20700686?u=76281980&t=306)** But at a high level, when you write a query, think about whether the database has the indexes that it would need to look up the data for your queries quickly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for. (1), pass (1), case, (1)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** geohaystack (1), createindex (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** ram (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=5)** - [Educator] In this exercise, I'm going to ask you to create a database for a phone number lookup app.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=13)** The app should allow you to enter either a name or a phone number to get the full contact details for a business.
>
> **[0:21](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=21)** The database should be called lookup.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=25)** The collection should be called records and include a few records.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/challenge-indexes?u=76281980&t=29)** Add indexes on the fields you think may require it.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=0)** (cheerful music)
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=4)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=6)** So the database is supposed to be called, Lookup.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=8)** So the first thing I'm going to do is say, use lookup.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=14)** Then to create the database, the collection and a document, what I'm going to do is, I'm going to insert a document.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=22)** So I'm going to say, db.records for the collection name, and then I'll use the insertOne method, and I will insert one document.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=36)** This is supposed to contain records for businesses.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=39)** So, the first thing I'm going do is, I'm going add a field with a name for the business, and I'm going to call this Naomi's business, and then I'm going add a number.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=56)** So that will be the phone number by which we can look up.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=59)** So, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=63)** Okay, then we'll have some additional fields.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=66)** I'm going to add a field for our website, and I will just add my own personal website in here.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=75)** Okay, cool.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=76)** So that adds a record you could add multiple, but I think for this exercise it's enough to add just one.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=85)** So, to make this easy I'm just going to say db.records.findOne so that we can see this nicely formatted.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=93)** Okay, we've got a name, a number and a website.
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=97)** Now, if I was going to think about how this data was going to be accessed in this application, I think we would either search by the business's number or by the business's name.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=111)** So, I would create an index on both of those fields.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=117)** So I would say, db.records.createIndex.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=122)** And then I would create an index on the number.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=127)** And I would also create an index on the name.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=132)** Now you could create a text index on the name if you wanted to do something fancy around matching the name even if you don't spell it correctly, but for now, I will just keep it simpler.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=145)** Be aware that there isn't just a single, correct solution for this.
>
> **[2:31](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=151)** You could have created the document differently and your indexes may look a bit different, that is fine.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=157)** But these are the things that you should think about when you create the collections and databases and the records and indexes.
>
> **[2:46](https://www.linkedin.com/learning/mongodb-essential-training/solution-indexes?u=76281980&t=166)** All right, I will see in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** insertone (1), findone (1), createindex (1)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)


### 4. CRUD Operations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### insertOne and insertMany
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=0)** - [Instructor] You've already used the insert commands, but there are some options that we didn't cover that we're going to cover now.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=7)** To briefly recap, you can insert a document like this, and you can insert many documents at once inside an array like this.
>
> **[0:19](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=19)** When inserting data into a database, a concept that you should be aware of is durability.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=25)** Durability is a property that guarantees that acknowledged writes are permanently stored in the database, even if the database or parts thereof become temporarily unavailable.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=38)** In MongoDB, you can configure the level of durability.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=43)** You can choose to have high durability, but then writes will be slower, or you can choose to have low durability, but faster writes.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=53)** The way you configured durability in MongoDB is by specifying a writeConcern.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=59)** The writeConcern defines what MongoDB needs to do before a write is considered successful.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=66)** You can specify the writeConcern as the second argument in the insertOne or the insertMany command.
>
> **[1:14](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=74)** Let's look at an example.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=76)** Here, we are inserting a small document with just a name.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=81)** That's the second argument that we're interested in.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=85)** The second argument consists of a document with three key value pairs.
>
> **[1:30](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=90)** The last one is the wtimeout option, which allows you to specify a time limit to prevent write operations from blocking indefinitely.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=100)** Here, the write option will block for at most 100 milliseconds.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=105)** The j option defines whether we want the guarantee that the writes are all written to disk or whether it is okay if they are only written to the in-memory journal at the time we acknowledge the write.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=117)** If j is set to "true", we require all writes to be persistent to disk which is safer, but takes longer.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=125)** If j is set to "false", the operation will be reported as having succeeded once the journals of enough mongods have the writes.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=134)** This creates a small moment of vulnerability where the database could still lose a write if the server, for example lost power while the journal has not been written to disk yet.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=145)** the first option, the w option, specifies a number of mongod instances that need to acknowledge a write before the database tells the application that the write succeeded.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=157)** Since MongoDB 5.0, the default writeConcern is "majority" as it is in this example.
>
> **[2:45](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=165)** Let's look at this in a diagram to understand what exactly is happening.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=170)** If a client issues a write with writeConcern "majority", then more than half of the bearing voting replica set members in a deployment must have the write before MongoDB sends the write acknowledgement to the client.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=189)** In a three member replica set, that means the primary must finish inserting the new documents and one secondary must propagate the write before the primary can acknowledge the write to the client.
>
> **[3:24](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=204)** Why is this important?
>
> **[3:27](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=207)** Consider this replica set of three mongods.
>
> **[3:31](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=211)** We insert a document with writeConcern 1, j: true.
>
> **[3:36](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=216)** That means only one mongod has to have the write and it only has to exist in the journal before an acknowledgement is sent to the client that the write succeeded.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=228)** So the primary inserts the data into its collection and acknowledges the write.
>
> **[3:54](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=234)** Now, before the secondaries can replicate the insert, the primary becomes unavailable.
>
> **[4:01](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=241)** The remaining nodes choose a new primary and continue working, but they don't have the new document.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=248)** If the unavailable mongod becomes available again, it will roll back the insert and replicate the state from the new primary.
>
> **[4:16](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=256)** The document you inserted would be lost in this case.
>
> **[4:21](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=261)** The higher writeConcern makes loss of data less likely.
>
> **[4:27](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=267)** When determining which writeConcern to use, a good question to consider is, "What would happen if you lost changes?"
>
> **[4:35](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=275)** If that absolutely cannot happen, set your writeConcern to "majority" and your data will survive failovers.
>
> **[4:43](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=283)** If it would be an inconvenience, but overall, not the end of the world, you can choose a lower writeConcern.
>
> **[4:50](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=290)** For this cause, you don't have to worry about specifying the writeConcern.
>
> **[4:54](https://www.linkedin.com/learning/mongodb-essential-training/insertone-and-insertmany-17234000?u=76281980&t=294)** But keep it in mind when you are developing an application.

> [!info]- Semantic Content
>
> **Code Identifiers:** writeconcern (11), insertone (1), insertmany (1)
> **Code Keywords:** let (2), this, (1), this. (1), require (1), continue (1)
> **Versions:** 5.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### findOne and find
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=0)** - [Instructor] You've also already used the find commands, but also here, there are some options that we didn't cover that you should know about.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=8)** To briefly recap, you can find a single document with the findOne command and you can optionally specify any fields to match on in a document that you pass in.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=20)** And you can find many documents at once with a .find command.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=25)** Let's look at the data that we imported into our MongoDB database in the beginning.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=33)** Okay, to do this, we're going to have to switch database to our sample data database.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=39)** Just to remind you, if you want to see what all of the databases in your MongoDB deployment look like, you can get that by typing in show dbs and that will return all of the databases that are in your deployment.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=53)** All right, so we want to use the sample data database.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=59)** Okay, now let's look at what collections are present.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=66)** Cool.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=67)** So we've got the inventory collection, the movies collection and the orders collection and let's just look at each one of those in turn.
>
> **[1:14](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=74)** So let's start with the inventory collection and let's just find a single document to see what it looks like.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=83)** All right, so what we've got in the inventory collection is a bunch of cars.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=88)** We've got the name of the car, the model, the year, a price, a source, which is a store, how often the car goes on sale and variations of the car that are available with different colors and the quantity that is available.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=107)** This is all mock data so if some of it doesn't make sense, bear with me.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=112)** All right, so we've got a collection of just car inventory.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=116)** What else have we got?
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=119)** We've got an orders collection.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=122)** So db.orders.findOne.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=127)** Okay, so here, people are ordering cars and each order contains an order of a car.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=135)** You've got the car ID, you've got a name, you've got the price of a car and you've got the credit card number of the person who paid.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=145)** All right, cool.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=147)** And then we've got one more.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=150)** So we've got the movies collection.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=155)** So let's find a movie and again, this is mock data.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=158)** These aren't actual movie titles but we've got here a movie that is called The Adventures of Tom Thumb and Thumbelina.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=167)** Right, then we've got a director, we've got an array of actors, we've got the year and date that it was released in, we've got the genres of the movie and how much money it made, as well as the run time and ratings from soft avocados and MNDB, as well as how many votes were given to this movie.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=188)** All right.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=189)** So that's how you can explore some collections if you don't know what's in your database.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=194)** Now, there are two things that I didn't cover before that you can do when you are trying to find specific data.
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=201)** So, if I were to, for example, try to do a nested query and wanted to specifically find movies where the rating that MNDB issued was 10, I would do that like this.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=219)** I would specify a query predicate.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=224)** And then inside here, I would say ratings.mndb.
>
> **[3:50](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=230)** And then I would say 10.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=232)** So that is how I would access the MNDB value inside the ratings document.
>
> **[3:59](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=239)** Then I would get back one document where the MNDB value is 10.
>
> **[4:05](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=245)** All right.
>
> **[4:05](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=245)** There's one more thing that you should know about how to access array values.
>
> **[4:13](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=253)** So let's say I've wanted to find a movie where the first genre mentioned in the array for genres was, let's say musical, like in the first document that we got back.
>
> **[4:26](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=266)** The way I'd do that is I would say genres and then with a period, I can access the different items in the array.
>
> **[4:35](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=275)** Now this is zero index so if I want the first one to be equal to something, I'm going to have to say .0.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=282)** And then I can say musical and I get back a musical, which is incidentally here the same one that we had before, I think.
>
> **[4:54](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=294)** All right, so far so good.
>
> **[4:57](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=297)** Now let's go back to the slides and learn a bit more about consistency and availability with find commands.
>
> **[5:05](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=305)** Okay, in the previous video about insert commands, we learned about the write concern.
>
> **[5:10](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=310)** For find one and find many, you may need to know about the read concern for consistency and availability guarantees.
>
> **[5:18](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=318)** In some cases, it may be important to only see data that is majority committed as compared to data that is written to the primary but has not yet propagated to a majority of nodes.
>
> **[5:31](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=331)** You can configure the read behavior by specifying the read concern.
>
> **[5:36](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=336)** Here, I've set the read concern to majority, and you can see I did that by specifying the command like normal and then just adding at the end .readConcern and then specifying the read concern majority.
>
> **[5:52](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=352)** There are multiple options that the read concern can be.
>
> **[5:56](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=356)** It can be local, which is the default and returns the most recent data available on the MongoD that you are connected to.
>
> **[6:04](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=364)** So that has absolutely no regard for whether the data is majority committed or not.
>
> **[6:10](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=370)** Then you've got available, which is the same as local but used for sharded clusters, something that we are not covering in the MongoDB essentials course.
>
> **[6:21](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=381)** Then there's majority, which you've already met and linearizable which returns majority committed data only but waits for any concurrent writes to complete before reading and returning the data.
>
> **[6:36](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=396)** Be aware that the linearizable read concern is slower than other read concerns.
>
> **[6:43](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=403)** There is also the option of specifying a read preference if you are using a MongoDB driver, which allows you to then read data from secondaries if you want to.
>
> **[6:53](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=413)** This can allow you to get faster reads.
>
> **[6:56](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=416)** The options are primary, which is the default.
>
> **[7:00](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=420)** So then all of the reads come directly from the primary.
>
> **[7:04](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=424)** Primary preferred which allows reads to be routed to secondaries but the primary is still the preferred option.
>
> **[7:13](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=433)** Secondary, which means reads are routed directly to secondaries.
>
> **[7:18](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=438)** Secondary preferred which means they will only go to a primary in certain circumstances.
>
> **[7:24](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=444)** And then nearest which is then the node that has the lowest latency to where you are querying from.
>
> **[7:32](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=452)** However, you do risk reading stale data if you read from a secondary.
>
> **[7:37](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=457)** This is generally fine for analytics.
>
> **[7:40](https://www.linkedin.com/learning/mongodb-essential-training/findone-and-find?u=76281980&t=460)** However, you should generally not use it if your goal is to increase the general capacity for your normal application traffic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (1), this, (1), switch (1), this. (1)
> **CLI Commands:** find (12), make (1), node (1)
> **Env Vars:** mndb (4)
> **Code Identifiers:** findone (2), readconcern (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** go back to (1), previous video (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Comparison operators
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=0)** - [Instructor] Let's talk about using comparison operators.
>
> **[0:03](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=3)** There are eight comparison operators that you can use in MongoDB.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=8)** The first six are the common ones you'd expect, $eq for equal, $gt for greater than, $gte for greater than or equal, $lt for less than, $lte for less than or equal and $ne for not equal.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=30)** Let's try these out on the terminal.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=34)** All right, again, we're going to be using the sample data database.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=39)** And on this, we are going to be using the inventory directory.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=44)** So just to remind ourselves, we're going to look at one document from this collection so that we know the structure.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=53)** So this contains information about cars.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=56)** All right.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=57)** Now, if you look into this document, there's a variations array that contains different variations of the car in different colors.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=67)** Each of these color variations has a quantity assigned to it.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=72)** So that's how many cars with that color are in stock.
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=77)** So if we wanted to search for a specific car where the quantity is more than a certain number, we could do that by specifying it like this.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=93)** So we would access the quantity field with variations, variations.quantity.
>
> **[1:43](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=103)** And then, we would specify a document here and inside the document, we would use one of the operators.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=112)** For example, $gte for greater than or equal and then we could say eight.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=119)** Now this would return any document, in this case, just one document, but this would match any document where one of the quantities in the array for variations has a quantity higher than eight.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=134)** So if we make that a lot higher, 17.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=138)** Oh, okay, that would return the same one.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=141)** Try 18.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=143)** Still the same one 'cause we've got one in 20 that has 21.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=147)** Say we've got 22 and then we get one back that just has one variation in crimson where the quantity is 26.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=157)** All right, so that is how you would use $gte.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=161)** The other operators are very similar.
>
> **[2:43](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=163)** We can try one more.
>
> **[2:45](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=165)** So let's look for a car.
>
> **[2:49](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=169)** Just one, where maybe the price is lower than, let's say $1000.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=181)** I dunno whether there is one.
>
> **[3:02](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=182)** There is none.
>
> **[3:03](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=183)** Okay, let's try something else.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=187)** Let's try lower than 2000.
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=190)** Okay, and we get back this one.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=191)** Is there any that is smaller than this?
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=194)** We can check by just doing 1,700.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=198)** Okay, and this is a perfect example for .findOne just returning the first one it finds.
>
> **[3:24](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=204)** So that doesn't necessarily mean it is the lowest one available.
>
> **[3:30](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=210)** Okay, cool.
>
> **[3:31](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=211)** Let's go back to the slides and look at the remaining comparison operators.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=217)** There are two more operators that may not be obvious.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=220)** They are to check whether an element is equal to one of multiple values and to check whether an element is not equal to all elements specified in an array.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=232)** Let's look at what the two are and then add some examples to make that clearer.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=237)** Okay, so the first one is $in and the other one is $nin, so not in.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=246)** All right, let's look at examples for these on the terminal.
>
> **[4:10](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=250)** Okay, we're going to be looking at cars that have a variation that is either blue or red.
>
> **[4:19](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=259)** We're going to search for cars that are either blue or red.
>
> **[4:23](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=263)** And the way we do that is we say findOne and we specify variations, .variation.
>
> **[4:33](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=273)** And then we would say $in and we want it to be either blue or red.
>
> **[4:40](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=280)** So the way we specify that it can be blue or red is we add an array and then we specify both values.
>
> **[4:49](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=289)** So we'd say blue and red.
>
> **[4:54](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=294)** Okay, cool.
>
> **[4:55](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=295)** So let's execute that.
>
> **[4:57](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=297)** And we get back one car where there is a variation that is red.
>
> **[5:03](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=303)** Okay.
>
> **[5:05](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=305)** The $nin or not in operator allows me to search for items where the color is both not blue and not red.
>
> **[5:14](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=314)** In more general words, this operator allows you to match on documents if the field value of a document is not among the specified values in the array.
>
> **[5:24](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=324)** So say I hate both blue and red and I only want cars that are not blue and red, I can specify it with the $nin operator.
>
> **[5:35](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=335)** So let me just add an N in here.
>
> **[5:39](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=339)** Okay.
>
> **[5:40](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=340)** And now we get back cars that are not blue and not red.
>
> **[5:46](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=346)** There is a small gotcha here.
>
> **[5:47](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=347)** The $nin operator will also match on items that do not have the variation field, meaning they do not have a color specified.
>
> **[5:57](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=357)** This is a common gotcha, so look out for it.
>
> **[6:00](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=360)** If you want to make sure a document has a specific field, you can check that it exists with the dollar exists operator.
>
> **[6:09](https://www.linkedin.com/learning/mongodb-essential-training/comparison-operators?u=76281980&t=369)** We'll cover that later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (1), this. (1), case, (1), else. (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** findone (2)
> **Tools:** terminal (2)
> **Warnings:** gotcha (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### Logical operators
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=0)** - [Instructor] There are four logical operators that you can use in MongoDB, $and, $or, $nor and $not.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=11)** Let's look at each one separately.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=14)** Once again, we're going to be using the sample data database.
>
> **[0:19](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=19)** If you have switched ranges, type in use sample data.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=23)** All right, now, we're going to be using the inventory collection.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=27)** So let's just briefly remind ourselves what a document in that collection looks like.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=34)** Cool, okay, so now, let's look at each operator, starting with $and, and I'm going to just start writing a query to show you what that looks like, and we're going to be using the $and operator.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=48)** So I'm going to start with that.
>
> **[0:50](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=50)** Cool, so the $and operator takes an array of multiple documents.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=56)** Each document specifies a condition that documents have to match in order to be in the results set.
>
> **[1:05](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=65)** So in more general terms, the $and operator allows me to query for items that match multiple conditions.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=72)** So I could, for example, ask for items where the quantity is not zero and where the quantity field exists.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=83)** So let's do that.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=85)** The way I specify that the quantity field has to be not zero is I say variations.quantity, and then I put here a document in which I say dollar-not-equal zero.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=105)** Now, if you remember in the last video, I said the dollar-not-equal operator actually will also match documents that just don't have a quantity field or where the quantity field is not.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=119)** So that's why we would generally want to add a second condition and add that that field has to exist.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=128)** So that's what I'm going to do in the second document condition here.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=134)** So I'll add variations.quantity and in this case, it has to exist.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=143)** We can check that with the $exists operator, and it should exist.
>
> **[2:28](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=148)** So we'll say true.
>
> **[2:31](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=151)** Okay, now this will return a car to me where the quantity is not equal to zero and where the quantity field exists, and we got that back, great.
>
> **[2:42](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=162)** Let's look at the next operator, which is the $or operator.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=167)** So, and let's start a new query db.inventory.findOne, and we'll start with the $or operator.
>
> **[3:00](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=180)** The $or operator also takes an array of documents, an array of conditions.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=187)** So in this case, I'm going to have three conditions, and what I want to query for is for cars that are either blue, green or teal.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=198)** So I only want documents if at least one of these colors is available for that car.
>
> **[3:25](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=205)** So the way I match on that is I just specify variations.variation and then the color name.
>
> **[3:34](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=214)** So blue.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=217)** The next one is variate, and I need to put quotes around this because we are accessing a nested document.
>
> **[3:45](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=225)** We need to add quotes around this, variations.variation.
>
> **[3:51](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=231)** The next one is green, and then we've got one more for teal.
>
> **[4:00](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=240)** Variations.variation.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=246)** Okay, cool.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=248)** So running this now, I get back exactly one car where, because I'm only searching for one document.
>
> **[4:15](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=255)** Remember, where there is a color available that is either blue or green or teal.
>
> **[4:21](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=261)** In this case, it is teal.
>
> **[4:23](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=263)** Okay, so again, in general, the $or operator allows you to query for documents that match at least one of the listed conditions that you put in the array that you passed the $or operator.
>
> **[4:36](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=276)** Okay, let's look at the next operator that I want to show you, and that's the $nor operator.
>
> **[4:43](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=283)** The $nor operator is closely related to the $or operator.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=287)** It just does the opposite. It says not or.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=292)** Okay, so let's start a new query, db.inventory.findOne and inside this document, we'll start with the nor operator and again, we're passing an array to that operator, and the array will have two conditions.
>
> **[5:14](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=314)** Okay, so here I want to look for cars where the price is not greater than 8,000 and where the car is not blue.
>
> **[5:25](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=325)** So the way I do that with the $nor operator, since we already have the negation, is I would say price, and then I would say the price is greater than 8,000.
>
> **[5:38](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=338)** So because it's the $nor operator, it will match document that do not match this condition.
>
> **[5:46](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=346)** Okay, and then the second condition is that variations.variation should not be blue.
>
> **[5:59](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=359)** So this will now return to me car where the price is lower than 8,000 and where there is no variation that is blue.
>
> **[6:08](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=368)** Okay, there is one more operator that I want to show you, and that is the $not operator.
>
> **[6:15](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=375)** Now, this one does not work like the other ones.
>
> **[6:18](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=378)** You do not pass an array to it.
>
> **[6:21](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=381)** So the way the $not operator works is just by allowing you to say something like something is not greater than 8,000.
>
> **[6:33](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=393)** So we could say, for example, yeah, the current braces.
>
> **[6:40](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=400)** You could say variations.price and then $not and then inside here, we would have to have another expression.
>
> **[6:53](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=413)** So it would have to be not greater than 2,000.
>
> **[6:57](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=417)** If you just want to say it's not equal to, for example, the color blue or something like that, then it would be the $ne operator instead.
>
> **[7:08](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=428)** Okay, so here we now again have cars where the price is not greater than 2,000.
>
> **[7:16](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=436)** So it is actually lower than 2,000, and, of course, this is wrong because the price is not variations.price.
>
> **[7:24](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=444)** It is just the price field.
>
> **[7:28](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=448)** Okay, and now we get a different one back.
>
> **[7:30](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=450)** So what happened in the previous one is actually interesting.
>
> **[7:34](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=454)** Again, we have a field that doesn't exist.
>
> **[7:36](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=456)** So the $not operator happily went, oh, okay, well, it's not here.
>
> **[7:42](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=462)** So this one is clearly fine.
>
> **[7:44](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=464)** Not what we wanted, but we wanted to match on the price field, which we did the second time around.
>
> **[7:50](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=470)** Sorry about that.
>
> **[7:52](https://www.linkedin.com/learning/mongodb-essential-training/logical-operators?u=76281980&t=472)** Okay, I will see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (3), this, (1), pass (1)
> **Analogies:** for example (3)
> **Code Identifiers:** findone (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Sort, skip, limit
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=0)** - [Instructor] Something you use very often when accessing data is sorting, to return the results of a fine query in a sorted manner you can add the sort method after the find method.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=11)** In this example, I'm going to be using the movies collection and I'm going to just perform a find query and then add the sort method, as the argument to the sort method, I'm going to pass on a document with the field name that I want to sort on, in this case it's the title of the movie.
>
> **[0:31](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=31)** All right, now this is a bit hard to pass cause there's a lot of data.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=34)** So I'm actually going to run this once more and I'm going to add a second argument to the find query where we project out only the fields that we want, in this case, I'm going to say, we're going keep the title, the director and the genre fields.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=57)** All right, that's a bit easier to pass.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=59)** And now you can easily see that the results here are sorted 'cause all of the results' titles start within an A.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=69)** You can also sort the other way around, if you specify negative 1, now we're going to have a lot of movies starting with Z, X and W.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=81)** You can also sort the results based on multiple fields.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=85)** So let me go back to this.
>
> **[1:27](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=87)** And instead of just sorting by the title I am now also going to sort by the director's name.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=96)** So I'm going to sort by the director first and then I'm going to sort all of the movies, per director, alphabetically.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=105)** All right, cool.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=107)** So this now sorts everything by the name of the director.
>
> **[1:50](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=110)** And if a director has multiple movies then those will also appear in alphabetical order.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=119)** Next to the sort method, there is another important method that you should know about, and that is the skip method.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=128)** If you want the results on a sorted order, but you want to skip the first 10 or however many results, you can do that.
>
> **[2:16](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=136)** The way you do that is, you just add the skip method at the end, and then you pass on a number of how many documents you want to skip.
>
> **[2:26](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=146)** So right now we've got directors that all start with a letter, A.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=150)** I'm guessing if I skip the first 100 results, we're going to have directors that start with the letter B in their first name, and yeah, that just about checks out, cool.
>
> **[2:45](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=165)** Next to sort and skip.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=167)** There is a third one, and that is limit.
>
> **[2:52](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=172)** So on top of sorting and skipping, you can also limit the results that you get.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=178)** And to that, you just add the limit method at the end.
>
> **[3:02](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=182)** Now I can say, I want to limit the results to 3.
>
> **[3:05](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=185)** And now I only get 3 movies back.
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=190)** There are a few things you should know about these operations.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=193)** The first thing is that, if sorting your data is a common query pattern, that means, if it's a query, your application will often send to the database, it should be supported by an index.
>
> **[3:26](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=206)** That will make this query a lot faster and not waste any resources sorting data over and over again.
>
> **[3:34](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=214)** However, if this is not a common query pattern or you can't add an index, using a sort with a limit, will make the query return faster because MongoDB can use a faster sorting algorithm to only return the top end results.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=232)** The second thing you should know is that if you use sort, skip and limit in combination, you can specify them in any order you like.
>
> **[4:00](https://www.linkedin.com/learning/mongodb-essential-training/sort-skip-limit?u=76281980&t=240)** However, MongoDB will always perform the sort first, then the skip and then the limit.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), case, (1), let (1), this. (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### updateOne and updateMany
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=0)** - We already tried out the updateOne command a bit earlier but there are some things about it that we didn't cover.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=6)** So let's go over this once more.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=9)** To update one document in a collection you need to use the db.collection.updateOne() method.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=16)** In the first part of the query you need to specify the query predicate.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=20)** That means the condition that the document that you want to change needs to match.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=26)** Be aware that if multiple documents match the document, only the first document that the database finds will be updated.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=34)** Anyway, back to the query.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=36)** The second part that you need to specify is what the query should change.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=41)** So, let's do one more example of these, and let's go back to the database that we used in the beginning.
>
> **[0:51](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=51)** So, let's use the blog database.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=55)** So, let's briefly check which collections are available and we've got the authors collection.
>
> **[1:00](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=60)** So, for the db.authors collection, let's just find the documents, okay.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=68)** And now I'm going to change one of these documents.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=70)** So I'll say db.authors.updateOne().
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=77)** And now in the first part of the query I'm going to specify which document to update.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=82)** I'm going to update my own document.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=85)** So I'm going to say, the name has to be Naomi Pentrel.
>
> **[1:30](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=90)** And then, what I'm going to do is I'm going to add a second argument to the updateOne() method.
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=97)** And that is where I specify what I want to change about it.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=100)** So in this case, I'm going to use the $set operator and I'm going to use it to add a new field.
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=108)** The field is going to be called, message and inside it I will just add a message.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=116)** And that message will say, Hello World!
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=120)** Cool.
>
> **[2:01](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=121)** So I've modified the document.
>
> **[2:03](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=123)** If I search for all documents again you can see this first document now has a message saying, Hello World!, in it.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=131)** Okay.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=132)** Now, updateOne() is not the only method that you have available to yourself.
>
> **[2:19](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=139)** If you want to update documents, if you want to update multiple documents you can do that with the updateMany() method.
>
> **[2:27](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=147)** So, let's do that, db.office.updateMany().
>
> **[2:34](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=154)** And what we could do here is match all of them.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=161)** Which is what we do if we just specify in the empty document in the first argument.
>
> **[2:46](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=166)** And then inside this, what I'm going to do is I'm going to set a message for everyone.
>
> **[2:52](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=172)** So, I will set the message field and I will set it to, Hello.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=181)** Let's run this.
>
> **[3:02](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=182)** Look at all of the documents.
>
> **[3:04](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=184)** Everyone now has a message in it, and it even changed mine.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=189)** Now, the $set operator is not the only one that you've got at your availability.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=194)** There is also for example, the $unset operator.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=199)** Let me show you what that one does.
>
> **[3:23](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=203)** So, the $unset operator allows you to remove a field.
>
> **[3:28](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=208)** You still have to specify the field and you still have to specify a field value.
>
> **[3:33](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=213)** However, that can just be empty.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=215)** It doesn't actually matter what you specify there.
>
> **[3:38](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=218)** Okay, so let me run this and let me check once more what the author's documents look like.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=224)** And as you can see, the message field has disappeared for everyone.
>
> **[3:49](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=229)** All right.
>
> **[3:50](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=230)** There are multiple operators that you can use to update documents.
>
> **[3:53](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=233)** Let's look at some of them.
>
> **[3:56](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=236)** The most commonly used operators include: $set, $unset, $inc, which increments a field value by a specified positive or negative amount.
>
> **[4:10](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=250)** $mul, which multiplies one or more field values by a specified value.
>
> **[4:17](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=257)** $max, which updates the specified field to the specified value if the specified value is bigger than the current value.
>
> **[4:27](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=267)** $min, which does the same, but if the specified value is smaller than the current value.
>
> **[4:32](https://www.linkedin.com/learning/mongodb-essential-training/updateone-and-updatemany?u=76281980&t=272)** There are a few more but these are the most commonly used ones.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), match. (1), case, (1), this, (1), this. (1)
> **Code Identifiers:** updateone (5), updatemany (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - we (1)

#### Arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=1)** - In this video, we are going to again be using the sample data database and we're going to be looking at the movies collection.
>
> **[0:10](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=10)** So let's just remind ourselves what documents in the movies collection look like.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=16)** And here we've got an actors array and a genres array.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=20)** In this video, we're going to talk a bit about how you query with arrays.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=27)** So if you want to, for example, query movies that should have the genre, let's say, comedy, the way you would do that is you would say db.movies.findOne.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=44)** Well, let's actually use the normal find command.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=46)** And then you would specify the genre field to be comedy.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=55)** It doesn't matter that there is an array here.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=59)** What mongodb is going to do is it's going to check whether comedy is any value inside the array.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=67)** So here, for example, we get back multiple documents.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=70)** If you look at the top one here, it has only one single genre entry, and that's comedy.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=78)** And the last document here has an array with four different genres which is comedy, crime, drama, and war.
>
> **[1:29](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=89)** Now you can also query for movies that should match the exact array that you specify.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=99)** The way you would do that is you would specify the genre field name but then you would pass in an array of values.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=112)** For example, you could say comedy and then drama and then thriller.
>
> **[2:03](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=123)** And this would now give you back all of the movies that have those specific genres in the array.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=133)** Now, when you're working with arrays there are two operators that are commonly also used, the $all operator and the $elemMatch operator.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=143)** Let's look at each one of those.
>
> **[2:26](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=146)** The $all operator allows you to select documents for which all specified entries are present.
>
> **[2:32](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=152)** So you could query for all movies that are both comedy and drama and can be anything else but it has to be those two.
>
> **[2:45](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=165)** The way you would structure this query is you would say db.movies.find and then inside here you would put the genres field.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=177)** Then you would use the $all operator and you would pass in an array because you have a list that you would like to match all of.
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=187)** You would specify comedy and drama.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=195)** So now you get back a lot of different movies.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=199)** For example, one that is comedy, drama, and romance.
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=201)** One that is comedy, drama, and thriller.
>
> **[3:23](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=203)** One that is comedy and drama.
>
> **[3:26](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=206)** Now let's talk about elemMatch.
>
> **[3:29](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=209)** You can use the $elemMatch operator if you want to match on a document if at least one element in the given array satisfies all the specified conditions.
>
> **[3:42](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=222)** So in this case, let's look at the inventory collection because there we have an array with multiple documents inside.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=232)** So just to remind ourselves, db.inventory.findOne.
>
> **[3:56](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=236)** Let's look at one of these documents.
>
> **[3:58](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=238)** And here, the variations array has multiple documents for each variation And then it has a quantity.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=248)** now what this allows us to do is we can query the inventory collection.
>
> **[4:14](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=254)** And what we can do is we can specify multiple conditions that have to be matched in one document in the array.
>
> **[4:24](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=264)** So let's use the variations array and inside that we're going to have a document and we're going to use the elemMatch operator here to specify that we want one document inside the variations array that matches these conditions.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=287)** So the first condition that I could say we want it to match is we want to have the variation blue and we want to make sure that there are at least eight cars available, so at least quantity eight.
>
> **[5:06](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=306)** And for that, we'll say greater than equal eight.
>
> **[5:12](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=312)** Let's return that.
>
> **[5:13](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=313)** Okay, cool.
>
> **[5:14](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=314)** So if you want to look at it once more, I'll have the query at the bottom, but what happens here is mongodb checks for documents that have the variation blue for which quantity is above or equal eight.
>
> **[5:30](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=330)** So we get back here one Subaru where there is 29 cars available that are blue.
>
> **[5:38](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=338)** And then there is another car above which is a Mitsubishi where we've got 28 of the variation blue.
>
> **[5:46](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=346)** So that is how you would query for that specific variation.
>
> **[5:54](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=354)** Now you should also know how to update arrays.
>
> **[5:57](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=357)** And for that, there are some operators that you can use, namely $push, $pop, and $addtoset.
>
> **[6:04](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=364)** Let's briefly try those on the movies collection.
>
> **[6:11](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=371)** So let's go back to the movies collection, let's look at this again.
>
> **[6:18](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=378)** Now what we're going to do is we're going to use one specific document and we're going to temporarily modify it by adding another genre to the genre array.
>
> **[6:31](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=391)** So what I'm going to do is I'm going to say db.movies.updateOne.
>
> **[6:41](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=401)** And then again, the first argument we pass in here is the query predicate, the thing that we're going to match.
>
> **[6:49](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=409)** And I'm going to actually just match this ID from this one document that we had up here.
>
> **[6:58](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=418)** And now what I'm going to do is I'm going to specify how this document should be changed.
>
> **[7:05](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=425)** So I'm going to use the $push operator to add another genre.
>
> **[7:11](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=431)** So I need to specify the genre field.
>
> **[7:15](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=435)** And then the genre I'm going to add is called test.
>
> **[7:22](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=442)** And that says there was one document matched and we modified one document.
>
> **[7:27](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=447)** Great.
>
> **[7:28](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=448)** So let's find that movie again.
>
> **[7:32](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=452)** And now I'm going to specify the ID in here just to make sure we get that same document and you can see test was added to the genre array.
>
> **[7:43](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=463)** So the next operator that you can use is $addtoset.
>
> **[7:48](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=468)** And the way you use $addtoset is really exactly the same as $push.
>
> **[7:52](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=472)** However, $addtoset will only add the element that we have, that we specify, if it's not already present in the array 'cause it considers this list to be a set and in a set, each item can only exist once.
>
> **[8:12](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=492)** So if I run this now, it's actually not going to modify the array because test is already present.
>
> **[8:18](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=498)** However, if test wasn't there, it would modify that.
>
> **[8:23](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=503)** We can test the $addtoset operator, if you want.
>
> **[8:27](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=507)** You don't need to do this, but you can do that with just typing in a different genre.
>
> **[8:32](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=512)** So let's say there's a green draw.
>
> **[8:35](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=515)** If we do that it will now be modified.
>
> **[8:38](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=518)** And if I search for the document again, we will now have three genres, musical, test, and green.
>
> **[8:45](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=525)** Now there's one more operator that I want to show you.
>
> **[8:48](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=528)** And that is one for removing things from an array.
>
> **[8:53](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=533)** So now I'm going to remove the two items that we added to the array and I'm going to do that using the $pop operator.
>
> **[9:02](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=542)** So I'm going to say db.movies and then I'm going to say updateOne.
>
> **[9:08](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=548)** And I'm going to update the same document that we've been editing this entire time.
>
> **[9:14](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=554)** And then in here, in the second argument, I'm going to use the $pop operator and I'm going to use it on the genre field.
>
> **[9:24](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=564)** I'm going pop the last item.
>
> **[9:30](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=570)** Now let's look at this document once more and we have the green item is no longer present.
>
> **[9:38](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=578)** I can do that once more.
>
> **[9:40](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=580)** And the test one is now hopefully also going to be gone.
>
> **[9:45](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=585)** That's great.
>
> **[9:46](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=586)** You could also specify negativeOne as the argument to pop and that would remove the first element in the array instead.
>
> **[9:57](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=597)** There you go.
>
> **[9:57](https://www.linkedin.com/learning/mongodb-essential-training/arrays?u=76281980&t=597)** You've added and removed items to an array in a document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), pass (3), case, (1), match. (1), this, (1)
> **Code Identifiers:** elemmatch (4), findone (2), updateone (2), negativeone (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Cross-References:** go back to (1)
> **Speakers:** - in (1)

#### Transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=0)** - [Instructor] In MongoDB, an operation on a single document is atomic.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=6)** If person A issues a command to change some values in a document and person B issues a command to read the same document, there are two things that can happen.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=17)** Either the read will happen before the document has changed or the read will happen after the document is changed.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=26)** You will not receive the document with partial changes.
>
> **[0:31](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=31)** However, if person A issues a command to change values in multiple documents and person B tries to read the same documents at the same time, person B could see some documents that have changes already and some that do not.
>
> **[0:50](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=50)** If this is problematic for your application, then you need transactions.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=56)** Transactions guarantee atomicity of reads and writes to multiple documents.
>
> **[1:01](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=61)** That means a read within a transaction returns all documents as they were when the read began.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=68)** For writes in a transaction, that means that either all writes happen or none.
>
> **[1:14](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=74)** The database cannot end up in a state where only some of the rights in a transaction have happened.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=81)** Transactions can be used across multiple operations, documents, collections, and databases.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=88)** Let's try out a transaction in the terminal.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=93)** All right, we're going to be using the blog database for this.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=98)** The first thing we are going to do is we're going to create a session object, and the way we're going to do that is we're going to call the getMongo method on db, and then we're going to call the startSession method on that.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=115)** Inside that, we're going to pass a readPreference and the readPreference we're going to pass in is the mode to read from the primary.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=132)** Okay, so that has created a session object.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=135)** The next thing we need to do is we need to start the transaction, and we're going to do that by calling the startTransaction method on the session object.
>
> **[2:26](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=146)** Okay, that's the session started.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=150)** Now the next thing that we're going to do is we're going to perform operations on the session object.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=157)** So we're going to type in session, and from the session, we can get the database.
>
> **[2:46](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=166)** We can get a database, I should say.
>
> **[2:49](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=169)** In our case, we're going to get the blog database because that's the one that we're going to operate on.
>
> **[2:56](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=176)** From the blog database, we can then access our authors collection.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=181)** And on the authors collection, I'm going to do pretty much the same update that we have been doing multiple times now.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=188)** I'm going to call the updateMany method to update all the documents.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=193)** I update all of them by passing in the empty document here and the update that I'm going to perform is using the $set operator to add a new field to each document.
>
> **[3:27](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=207)** The field is going to be a message field and the message I'll pass in is a string and I will just say transaction occurred.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=219)** All right, cool.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=220)** I'm going to execute this and we can see here there is a matchCount of four and a modifiedCount of four.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=228)** Great.
>
> **[3:49](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=229)** Now all I need to do is say session.commitTransaction.
>
> **[3:58](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=238)** That finishes the transaction and then I can end the session.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=248)** All right, great.
>
> **[4:09](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=249)** So if I now check out the authors collection.
>
> **[4:15](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=255)** Authors, there we go.
>
> **[4:18](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=258)** I should see that a transaction occurred.
>
> **[4:22](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=262)** So that is how you use a transaction.
>
> **[4:26](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=266)** I should say that transactions come with a word of warning.
>
> **[4:31](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=271)** You should only use transactions when you really need them.
>
> **[4:37](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=277)** Overuse of transactions can lead to performance degradation.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=282)** If you find yourself needing transactions for more than a very small percentage of your update operations, you should consider whether you can change your data model so that update operations only update single documents.
>
> **[4:56](https://www.linkedin.com/learning/mongodb-essential-training/transactions-17233181?u=76281980&t=296)** That way they are atomic by default and you don't need to use transactions.

> [!info]- Semantic Content
>
> **Code Identifiers:** readpreference (2), getmongo (1), startsession (1), starttransaction (1), updatemany (1)
> **Code Keywords:** pass (3), let (1), this. (1), case, (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### $expr
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=0)** - [Instructor] Congratulations, if you've got this far, you now know most of the ways you can perform CRUD operations.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=7)** If you need to perform more complex queries, you need to turn to aggregation pipelines, at least most of the time.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=14)** And we'll discuss those in the next few videos.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=17)** But, you may have noticed, I said most of the time, there is one call operator that can do things like comparing different document values.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=26)** That's the $expr operator, and I'm going to show you how to use that one now.
>
> **[0:32](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=32)** So, if you have been following along, you'll be in the blog database, so the first thing you'll want to do is switch back to the sample data database.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=42)** And we are going to be using the movies collection.
>
> **[0:45](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=45)** So, you know my favorite thing to do, first check out one document from that collection to remind us how that collection is structured.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=56)** All right, so, in this example, I am going to look for ratings of movies.
>
> **[1:04](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=64)** So let's first of all filter out everything but the ratings, so the way we'll do that is we're going to use find, and then we're going to say ratings, one.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=76)** You know what, we'll also keep the title.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=81)** Okay, so now we've got a bunch of movies, but we only have the title and we have the ratings.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=88)** Now inside each rating, you see there's actually two different ratings.
>
> **[1:33](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=93)** There's a soft avocados rating and an MNDB rating.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=98)** Now the soft avocados rating is on a zero to 100 scale.
>
> **[1:42](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=102)** The MNDB rating is on a 10 point scale, so we can't really compare the two.
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=109)** However, we could compare them if we multiplied the MNDB value by 10.
>
> **[1:54](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=114)** So let's do that.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=115)** And that's where the $expr operator is going to come in handy.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=120)** All right, so, we're going to perform this query on the movies collection of course.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=125)** And we're going to use the .find method.
>
> **[2:09](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=129)** Inside here we're going to use the $expr operator, and that one takes as an argument a document.
>
> **[2:19](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=139)** Inside this document, I am going to want to look for movies, where one of these ratings is greater than the other, namely where the MNDB rating is higher than the soft avocados rating.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=155)** So the way I do that is I use the greater than operator, and then I pass in an array because I have two values.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=164)** The first value is going to be the MNDB value, and this one we'll need to multiply by 10.
>
> **[2:52](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=172)** So we can do that here with $multiply.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=178)** And then multiply again, takes an array as input.
>
> **[3:02](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=182)** And this array multiplies a value.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=186)** That value is ratings.mndb, with a number times 10, that's what we want to do.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=194)** Notice that here I put a dollar in front of ratings.mndb, that is because we are not actually interested in the string literal, and the multiply field doesn't know that, if you don't put the dollar value in front of it.
>
> **[3:29](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=209)** So that means it's going to reference the value of that field, and it's going to know that we are specifying a field path, and to get the value from that.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=219)** All right, so, let's now add the second value that we are comparing against, and that one is a lot easier.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=228)** That one is just $ratings.soft_avocados.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=237)** Now unless I did any typos, this should work, and of course I did a typo somewhere.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=243)** All right, so let's figure out what we did wrong here.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=248)** Oh, I see.
>
> **[4:09](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=249)** This is not actually a document, this should just be a value.
>
> **[4:16](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=256)** Okay, there we go.
>
> **[4:18](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=258)** Now, we got back all of the documents where the MNDB value, once it was scaled, because it was multiplied by 10, was higher than the soft avocados rating.
>
> **[4:30](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=270)** So that means on this last document here, the MNDB value is four, four times 10, 40, 40 is bigger than 17, so that's why this is in the results sets.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=282)** So this is one of the example use cases where $expr can come in handy.
>
> **[4:49](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=289)** With $expr you can use a lot of different operators.
>
> **[4:53](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=293)** Most of these, in fact.
>
> **[4:56](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=296)** You don't need to pause this video and try and read all of these, what I want you to take away from this slide is that any common operations that you'd expect to be able to do while programming, can be done with MongoDB as well.
>
> **[5:13](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=313)** If you want to know all of the operators that you can use, you can go to the MongoDB documentation, and check out aggregation pipeline operators.
>
> **[5:23](https://www.linkedin.com/learning/mongodb-essential-training/3066666?u=76281980&t=323)** This has a list of all of the operators that are available.

> [!info]- Semantic Content
>
> **Env Vars:** mndb (7), crud (1)
> **Code Keywords:** let (4), switch (1), pass (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** soft_avocados (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create app
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=5)** - In this exercise, I am asking you to create a database that could power an app that allows you to order food.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=14)** To the end, please create an orders connection with a few documents in it.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=20)** Each document should have information about the user, like, their name, address, phone number, email and account balance, information about the restaurant like, the name, address, and phone number of the restaurant and the documents should also have the time of the order and the items in the order with the associated price.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=44)** Please also think about which indexes you would create for this collection.
>
> **[0:51](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=51)** Then, as a second step, please write a few queries.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=55)** The first query I would like you to write is a query to find the most expensive order.
>
> **[1:01](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=61)** Second query should just return all of the orders sorted by the name of the restaurant.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=69)** The third query should return orders where the order total is bigger than the account balance.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-app?u=76281980&t=76)** The last query should apply a 10% discount to all order totals.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### Solution: Create app
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=0)** - [Instructor] Here I have two documents that will fit into our orders collection.
>
> **[0:10](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=10)** I'm going to just copy these two.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=13)** Inside MongoDB, the first thing I'm going to do is I'm going to create a new database called order_app.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=22)** Inside this database, I'm going to create a collection called orders and I'm going to insert my two documents in here.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=33)** And we'll put these inside an array, so now I'll just paste.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=37)** I'll close the array and I'll close the method.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=41)** All right, cool, we've got these two documents inserted in the orders collection.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=46)** If you want to check they're there, just run db.orders.findOne or .find.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=54)** Okay, great.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=57)** Now, I don't know for sure what common queries might look like for this app but I think it's safe to assume that we'll often be querying by a username and time or by a restaurant name and time.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=70)** So the first index I'm going to create is on the username and time.
>
> **[1:19](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=79)** Now, I don't actually have a username field but most apps nowadays use the email as the username, so that's what I'm going to do here.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=88)** So I'm going to create this index on user.email: 1 and then on time: 1.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=101)** Great, that's our first index created.
>
> **[1:43](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=103)** And then I'm going to create a second index and I'm going to create that on the restaurant.name.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=112)** There we go.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=113)** That's both of our indexes created.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=117)** Now onwards to the query.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=119)** The first query I wanted you to create was a query to find the most expensive order.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=125)** Now, the way I would do that to perform a query on the orders collection and for that, we can just do find.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=135)** And then we'll sort by the total.
>
> **[2:22](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=142)** And we'll sort a -1, which means the biggest order will be at the top and then if we only want the most expensive order, we can limit the results we get back to one.
>
> **[2:36](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=156)** And here is the most expensive order.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=158)** It cost €10.47.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=161)** All right, the next query I wanted you to write is to sort orders by the name of the restaurant.
>
> **[2:51](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=171)** Now, the way we would do that is we would sort and then inside the sort document, we would specify the field restaurant.name and then we can specify 1 or -1, depending on how you want it sorted.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=193)** And in this case actually, both the restaurant names are the same.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=198)** So this is not really telling you much.
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=201)** But if you chose different examples, yours should be ordered.
>
> **[3:26](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=206)** Okay, the next query was to find orders where the order total is bigger than the balance on the account.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=217)** This is something which you might want to do to check whether you need to charge someone's card or whether you can pay it with a balance.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=224)** The way you would do that is to perform a query on the orders collection.
>
> **[3:51](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=231)** That's the find query.
>
> **[3:53](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=233)** And inside the find query, you would use the $expr operator.
>
> **[3:59](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=239)** You would pass it a document and inside that document, you would use the $gt operator.
>
> **[4:08](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=248)** The $gt operator gets an array because it's comparing two values and the two values you'd be comparing is the $total.
>
> **[4:17](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=257)** That's the order total.
>
> **[4:20](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=260)** And the user balance, which we'd access again with the dollar sign.
>
> **[4:25](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=265)** So user.balance.
>
> **[4:30](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=270)** Okay?
>
> **[4:32](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=272)** And here we go, we've got one order where the order total is €10.47 and the balance is €10.
>
> **[4:40](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=280)** I didn't actually specify a currency.
>
> **[4:42](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=282)** I'm just assuming it's in euros because this is somewhere in Amsterdam.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=287)** All right, there's one more query remaining and that was to update all orders with a 10% discount.
>
> **[4:56](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=296)** So the way we would do that is with an update query on the orders collection.
>
> **[5:04](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=304)** And we'd use an updateMany query because we want to update all.
>
> **[5:09](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=309)** And we'd use an empty document as the first argument so that it matches all documents.
>
> **[5:16](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=316)** And then we would specify the change that we want to do.
>
> **[5:22](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=322)** In this case, to get a 10% discount on the order total, what I'm going to do is I'm going to use the $mul operator to multiply the order total by 0.9, which is going to give us a 10% discount.
>
> **[5:40](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=340)** All right, so I'm going to do that.
>
> **[5:42](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=342)** And now if I try to get all of the orders, db.orders.find, then the order total is going to have decreased.
>
> **[5:54](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-app?u=76281980&t=354)** So here we've got an order total of 9.42 and the other one is now 7.63.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7)
> **Versions:** 10.47 (2), 0.9 (1), 9.42 (1), 7.63 (1)
> **Code Identifiers:** order_app (1), findone (1), updatemany (1)
> **Code Keywords:** pass (1), case, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Aggregation Pipelines

> [[#Table of Contents|↑ Back to Table of Contents]]

#### An overview of stages
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=0)** - MongoDB's aggregation framework allows you to manipulate and transform data in ways that are not possible with the normal queries that we've discussed so far.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=11)** If you are familiar with Unix pipes, you can think of aggregation pipelines in a similar way.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=17)** A pipeline can consist of one or more stages that each transform data and then pass the stages outputs onto the next stage, if there is a next stage.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=28)** Accumulator stages, like the dollar group stage, must process all documents before results can be passed to the next stage.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=38)** Other stages can pass results to the next stage as they are processed.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=44)** There are many different pipeline stages.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=48)** We will discuss some of the most commonly used ones individually in the next videos.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=54)** There are some stages that are commonly used, but we won't spend time discussing them because you have already encountered them either as a query operator or as a dedicated method when we were talking about crowd operations.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=67)** To perform an aggregation, you can use the Aggregate command and pass an array of stages as the argument.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=75)** Inside stages, you can make use of pipeline operators.
>
> **[1:20](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=80)** There are a lot of them.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=81)** Essentially, any common operations that you can do on an object within a programming language have an equivalent operator.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=91)** We will use a few of these in the next few videos, but definitely not all.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=96)** Feel free to pass this video and skim over them here.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/an-overview-of-stages-17233183?u=76281980&t=100)** Or, if this is too small, go to the MongoDB documentation on all of the operators.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - mongodb (1)

#### $group
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=0)** - [Instructor] Grouping data is a common pattern we need when accessing or manipulating data.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=7)** Let's look at this in the terminal.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=11)** In MongoDB, you can group data by using the $group stage in an aggregation pipeline.
>
> **[0:18](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=18)** For this example, we are going to be using our sample data.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=23)** In particular we are going to be using the inventory collection so let's just remind ourselves of what that looks like.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=30)** Okay, let's test out the $group operator.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=33)** First I'm going to specify the collection on which we're going to perform the aggregation and then I'm going to call the aggregate method.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=42)** The aggregate method always takes an array of stages as input.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=46)** Each stage is inside a document, so that's where we start.
>
> **[0:51](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=51)** And then we're just going to specify the $group operator, which also takes a document as its value.
>
> **[1:00](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=60)** Inside the document, you have to specify an ID.
>
> **[1:05](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=65)** The ID is the thing by which the data is going to be grouped.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=72)** In our case, I'm going to group all of the cars in our inventory by the source and we're going to have to specify that with a dollar value because we actually want to get at the value of the field.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=88)** All right, so let's do that.
>
> **[1:30](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=90)** This gives us all of the different sources that are available in the data set.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=96)** Well, not all of them.
>
> **[1:37](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=97)** You can see down there it says type it for more.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=101)** If I do that, it will give us the next set of results.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=106)** But that in and of itself is generally not very interesting.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=111)** What we generally want to do is we want to do some sort of accumulation.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=116)** So going back to this aggregation query, generally people want to add more fields to each document.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=125)** So they may want to know how many cars come from each source.
>
> **[2:11](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=131)** So if I want to do that, I'm going to add a count field.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=135)** The name of this field doesn't matter but it makes sense for me to call it count.
>
> **[2:20](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=140)** And inside, I'm going to use the $sum operator to add one each time we encounter a new document.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=149)** So if I execute this, it's going to give me an error.
>
> **[2:32](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=152)** A pipeline stage specification object must contain exactly one field.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=158)** So the problem here is that the count is on a level with a $group stage and it should actually be in here.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=170)** So let me move the curly brace outside and now it should work.
>
> **[2:56](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=176)** Great.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=177)** And here we can see the different sources and the counts for each one of them.
>
> **[3:03](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=183)** Now you can do more interesting things with this.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=186)** You could, for example, add a field for the items and then push the title of each car.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=199)** I think it's called a name.
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=201)** Yeah.
>
> **[3:23](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=203)** You can push the name of each car to this field which will create an array of car names in the items field.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=215)** So let's do that.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=217)** There we go.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=219)** And then I'll show you one more thing.
>
> **[3:42](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=222)** So I could now also add an average price field and then I can calculate the average price from all of the fields that are in a group.
>
> **[3:58](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=238)** So it's going to be price.
>
> **[4:02](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=242)** Okay.
>
> **[4:04](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=244)** And here we go.
>
> **[4:05](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=245)** So now each source group has a count, it has an array of items, and it has an average price.
>
> **[4:12](https://www.linkedin.com/learning/mongodb-essential-training/4380161?u=76281980&t=252)** That's pretty good.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), this, (1), this. (1)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### $bucket
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=0)** - [Instructor] Much like the dollar group stage, the dollar bucket stage allows you to put documents into groups, but instead of grouping them by one value that has to be the same for all documents, you define bucket boundaries and ranges for a document value.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=16)** If the documents values fall within that range, the documents will be sorted into that bucket.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=23)** Let's try this out on the terminal.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=27)** Again, we're going to be using the inventory data set.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=34)** As before, the aggregate method takes in an array and then we're going to put into this array a document for the dollar bucket stage.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=48)** Okay.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=48)** The dollar bucket stage takes a document assets value.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=54)** Inside the document, you have to specify some arguments.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=58)** The first one is group by, and that's the field that you want to group by.
>
> **[1:07](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=67)** So in this case, I'm going to be grouping by dollar year 'cause I'm going to be grouping the cars by the year of manufacture.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=78)** Then, we have to specify the boundaries.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=83)** So in this case, I know that the years of manufacture are somewhere in between 1980 and 2020.
>
> **[1:32](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=92)** So, I am going to put this into 10 year gaps.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=99)** So that's 1980, 1990, 2000, 2010, and 2020.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=107)** Then there's one more argument that you can optionally specify, and that is the default argument, and that will put all documents that don't fall into any of the boundaries that you have specified, into another category.
>
> **[2:01](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=121)** So here I'm going to call that just Other.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=125)** All right, let's try it.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=127)** Okay, cool.
>
> **[2:09](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=129)** So here, we got back buckets of all of the cars that are in the inventory and we've got a count for each bucket.
>
> **[2:19](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=139)** So, if we want to get more than just the count, we're going to have to add something to the aggregation pipeline.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=145)** So let's go back into this and after the default argument we're going to add another argument and that's going to be called Output.
>
> **[2:36](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=156)** So this now defines what else should be added to each bucket.
>
> **[2:42](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=162)** So I'm going to keep the count one, but I'm going to have to specify it now because I am sort of overwriting the default.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=170)** Inside count, I'm going to use the sum operator and I'm just going to add one for each documented encounters and then, I'm going to have another field that is cars, where I'm going to push the name and the model of the car so that it will create an array of documents of the car name and model.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=193)** So, I'm going to use the dollar push operator for that.
>
> **[3:17](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=197)** And then, that takes a document, inside the document we are going to specify the name to be dollar name, so that is the name's value for each document, and then model, and that is going to be dollar model.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=219)** Okay, let's try this.
>
> **[3:42](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=222)** Awesome.
>
> **[3:43](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=223)** So we get back multiple groups now, and here we've got the Other group, which is all of the remaining models.
>
> **[3:51](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=231)** But if we scroll up a little bit here we've got the group for 2010 till 2020, and this is all of the cars that fall into that group.
>
> **[4:04](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=244)** Cool.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=246)** Let's go back to the slides, there's one more related stage that I want to show you.
>
> **[4:12](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=252)** Net stage is called Bucket Auto.
>
> **[4:15](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=255)** The Bucket Auto stage defines the boundaries for the buckets automatically so that the documents will be evenly distributed onto the resulting buckets, resulting in similarly sized groups.
>
> **[4:29](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=269)** So if you want to do that, the way you would is, let's go back to the first one, and we don't need the default argument here, we don't need the boundaries argument, we do need the group by argument.
>
> **[4:46](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=286)** And then we will just say buckets, and we can say five buckets and that's it.
>
> **[4:55](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=295)** Well, apparently it is not it, 'cause it is throwing an error.
>
> **[5:00](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=300)** Unrecognized option to dollar bucket.
>
> **[5:02](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=302)** Of course, I didn't change the pipeline state, It should be bucket auto.
>
> **[5:08](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=308)** Okay, and here we've got our buckets.
>
> **[5:11](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=311)** Awesome.
>
> **[5:12](https://www.linkedin.com/learning/mongodb-essential-training/4381160?u=76281980&t=312)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), default. (1), this. (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### $unwind
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=0)** - [Instructor] If you have a document with an array you can use the $unwind stage to create one output document for each array element.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=9)** Let's try that within the terminal.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=13)** Again, we are going to be using the inventory collection, so let's just remind ourselves what that looks like.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=23)** Okay, cool.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=25)** And here we are going to unwind the variations array so that we can get a document for each car variation.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=34)** Okay, the way we are going to do that is by first specifying the collection on which we're going to run the aggregation.
>
> **[0:40](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=40)** Then we'll use the aggregate method.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=43)** And inside it, you know it, there's going to be an array, with a document for the $unwind stage.
>
> **[0:52](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=52)** And to the $unwind stage, we are going to pass a string, which contains the variations field name.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=63)** And to that we are going to have to add a dollar sign at the beginning.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=68)** Okay, let's try this.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=72)** Awesome.
>
> **[1:13](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=73)** We now have individual documents for each car variation.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=76)** That's often very useful.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=78)** For example, we can now match on only purple car variations.
>
> **[1:24](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=84)** So let's do that.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=86)** And the way we do that is inside the aggregation pipeline, we're going to add another pipeline stage by adding another document to this array.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=96)** And inside this document we're going to add a $match stage.
>
> **[1:42](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=102)** And as the argument to that stage operator we're going to pass in the variations.variation field.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=117)** Okay, and we're going to match on the color purple.
>
> **[2:04](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=124)** That gives us nothing.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=126)** That's because I have a typo.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=128)** All right, so let's just briefly fix that.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=132)** Great. Now we have all purple cars.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=137)** So there is something about this that isn't quite optimal yet.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=141)** If you think about this from how this data would get processed, we would unwind all documents even if we know that that document doesn't have a variation that is purple.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=155)** That is not performant if you're going to do this a lot.
>
> **[2:38](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=158)** So, in this case what you should do is you should actually add an additional match stage before the unwind stage, because MongoDB can directly filter out any of the documents that don't even have a purple variation in the variations array before unwinding it.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=178)** So let's do that.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=181)** Going to again, add this match stage and then say, variations.variation and say it has to be purple.
>
> **[3:13](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=193)** Okay, cool.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/4381161?u=76281980&t=194)** So this is going to be a lot more performant.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), this. (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### $merge and $out
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=0)** - [Instructor] The $out stage allows you to store the results of an aggregation pipeline in a new collection.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=7)** Let's look inside of these pipes to see what happens as documents pass through this pipeline.
>
> **[0:14](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=14)** Okay, now let's try the $out stage on the terminal.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=20)** Okay, if you followed along here, we're actually just going to press up and use the pipeline we used in the last video to use with the $out operator.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=30)** And what we're going to do is we're just going to add another stage at the end of this pipeline.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=36)** That's going to be our $out stage.
>
> **[0:40](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=40)** The $out stage takes as its argument a document.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=43)** Inside the document is going to be a db argument, which is the database.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=49)** For us that will be sample_data.
>
> **[0:52](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=52)** And a collection argument, which for us will be purple.
>
> **[0:57](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=57)** Or it could be anything else.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=59)** I'll say it's called purple.
>
> **[1:02](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=62)** All right.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=63)** Now, if I run this, this should create a collection called purple, which will contain all purple cars.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=70)** So, let's see which collections we've got now.
>
> **[1:13](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=73)** And there's our purple collection.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=76)** Let's query it and see whether it really contains only purple cars.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=83)** Cool. And here we see that the collection actually contains purple cars.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=88)** Great.
>
> **[1:29](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=89)** This is awesome if you often run the same aggregation because you can store it once and then query the stored results instead.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=98)** This is also a way to reshape a collection while keeping the original collection the same until you are ready to change any application logic to use the new collection.
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=109)** There's one closely related stage, which is $merch.
>
> **[1:52](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=112)** Both $out and $merge can be used to create a new collection that stores the results of an existing aggregation pipeline.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=120)** However, the $merch command also allows you to merge results into an existing collection.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=128)** So, let's say our inventory had changed and we wanted to now merge into the existing purple collection.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=138)** The way this would work is we would not use $out, we would use $merch.
>
> **[2:24](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=144)** And then for the $merge stage, the arguments are slightly different.
>
> **[2:31](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=151)** There is no db argument for this.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=155)** There is only an argument called into, and that is essentially the collection name.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=164)** Then there's a few new arguments, one of them is on.
>
> **[2:51](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=171)** And that would be the field that we compare on to make sure that if they're duplicates, we can take an action.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=178)** So here I'm going to compare on the ID field.
>
> **[3:03](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=183)** And then I need to define what happens when there is a duplicate.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=189)** So when the ID is the same.
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=192)** I do that with the whenMatched argument.
>
> **[3:16](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=196)** Now I'll just say, keepExisting in that case.
>
> **[3:23](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=203)** And the other part of that is to add the whenNotMatched argument.
>
> **[3:30](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=210)** And in that case, I will insert.
>
> **[3:34](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=214)** Now, if I run this, this shouldn't change anything.
>
> **[3:37](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=217)** But this is what you would do if you had data that changes.
>
> **[3:42](https://www.linkedin.com/learning/mongodb-essential-training/4375174?u=76281980&t=222)** For the full syntax of the $merge stage and all of the options for the whenMatched and whenNotMatched arguments, go to the MongoDB documentation for the $merge stage and scroll to Syntax.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), pass (1), else. (1), this. (1)
> **Code Identifiers:** whenmatched (2), whennotmatched (2), sample_data (1), keepexisting (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### $function
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=0)** - [Instructor] There is one pipeline operator, which you can program to be whatever you need it to be.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=6)** The $function pipeline operator allows you to write JavaScript functions that operate on the field values in your documents.
>
> **[0:15](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=15)** Let's try that out.
>
> **[0:18](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=18)** I'm going to use the movies collection for this example.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=22)** So let's briefly remind ourselves what the documents in that one look like.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=28)** All right, as you can see, the actors field value is an array of actors.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=34)** However, that array is not alphabetically sorted.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=39)** If we wanted it to be alphabetically sorted, that's where we can use $function, for example.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=46)** All right, so let's try that.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=49)** I'm going to specify the movies collection and then call the aggregate method on it.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=58)** As usual, I'm going to pass an array to the aggregate method and the array will contain our stages, in our case, just the one stage and we're going to use the project stage.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=72)** The $function operator is just an operator so you will have to use it inside another stage like the $project stage.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=83)** The $project stage allows us to change or project away certain fields.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=91)** So the first thing I'm going to do is I'm going to tell it that we would like to keep the title field.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=99)** And the way I do that is I just say title: 1, and then we're going to look at the actors field.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=107)** So this is where we're now going to be using the $function operator.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=113)** The $function operator takes a document as its argument with three different arguments inside it.
>
> **[2:01](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=121)** The first argument is the body argument and that takes a string in which you code the JavaScript function that you want to use.
>
> **[2:12](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=132)** So the JavaScript function that I'm going to use here is just going to be function.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=138)** I'm going to pass actors as the argument to it, and inside the function body, I'm going to return actors.sort, and I'm going to put in a column.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=155)** Great, now aside from the body argument, the $function operator also takes an args argument for the arguments that you pass it.
>
> **[2:46](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=166)** That in turn takes an array, just in case we have multiple arguments.
>
> **[2:51](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=171)** In our case, the array only has one member and that is the $actors field value.
>
> **[3:00](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=180)** All right, aside from body and args, there's one more argument we need to put in here, and that is lang for language.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=188)** And in our case, lang is just js for JavaScript.
>
> **[3:12](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=192)** Okay, let's run this.
>
> **[3:15](https://www.linkedin.com/learning/mongodb-essential-training/4379305?u=76281980&t=195)** Awesome, and here now we've got the result documents, which have the title and the actors in alphabetical order, just as we want it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (4), pass (3), case, (3), this. (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### $lookup
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=0)** - [Instructor] The $lookup stage allows you to perform joins.
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=4)** That is to pull in data from another collection based on a matching field.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=9)** In this example, we have an order document, which contains a car ID and some other order information, and we have an inventory document, which contains the same car ID and information about the car.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=25)** The $lookup command allows you to merge information from both documents by matching the car ID field.
>
> **[0:32](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=32)** Of course, this would not only happen for one order document, but for all orders.
>
> **[0:38](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=38)** Let's look at it in code.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=41)** All right, so I'm going to be using the orders collection to show off how the $lookup stage works.
>
> **[0:50](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=50)** And of course, we are going to use the aggregate method again because $lookup is an aggregation stage.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=58)** The aggregate method takes an array as its argument.
>
> **[1:02](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=62)** And inside the argument, we are going to have just one document for the one lookup stage.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=68)** So here we are going to use the $lookup operator and that operator takes another document as its input.
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=77)** And inside that document, we are going to specify four fields.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=81)** The first one is the from field.
>
> **[1:24](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=84)** That is where we specify the collection that we are looking up data in or that we are pulling data in from.
>
> **[1:35](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=95)** Okay, so that one is going to be inventory in our case.
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=101)** The next field that we need to specify is the localField.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=106)** The localField is going to be the car ID that we match on.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=111)** So for inside the orders collection, the ID is going to be just the field car_id.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=120)** Then the next field that we're going to specify is the foreignField.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=126)** Now, that is the field that we match on in the foreign collection in the collection that we are pulling data in from.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=134)** So that is the inventory collection.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=137)** For the inventory collection, the car_id is actually just the _id field.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=145)** All right, now there's one more thing that we need to specify, and that is the field as, and that's going to be the name of the field in the result document.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=157)** So in this case, I'm just going to call that car_id.
>
> **[2:43](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=163)** Okay, now let's press Enter and see what happens.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=167)** All right, so here we've got an order document that has had the information about the car pulled in.
>
> **[2:56](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=176)** So if you look at the car_id field, you can see an array, which has the matched car document pulled in.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=186)** So now if you wanted to manipulate the data further, you would be able to use the data from both collections in your pipelines.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=198)** Okay, now there are two things that are very important to consider when you are using joins.
>
> **[3:25](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=205)** The first thing is that you absolutely need to have an index on the foreignField if you're going to perform this as a common query.
>
> **[3:34](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=214)** Otherwise, the performance of these queries will not be good because the lookup query will have to perform a collection scan for each document, meaning that it needs to, for each order document, check the entire inventory collection to check every single document whether it is a match.
>
> **[3:56](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=236)** So if you're familiar with O notation, that is an N square cost.
>
> **[4:01](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=241)** Not good.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=243)** That's why you need indexes here.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=246)** The second thing that you should know with $lookup is that your common query patterns should very rarely require joins.
>
> **[4:14](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=254)** So if you find yourself using a lot of lookups, this is a telltale sign that you are very likely not structuring your data well for MongoDB.
>
> **[4:23](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=263)** MongoDB is not optimized to perform a lot of joins.
>
> **[4:27](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=267)** In MongoDB, data that you query together should generally be in the same document.
>
> **[4:33](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=273)** So if you find yourself using joins, always ask yourself should this data just all be in the same document?
>
> **[4:40](https://www.linkedin.com/learning/mongodb-essential-training/4380162?u=76281980&t=280)** And if it should, then try to change the data model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (2), case. (1), case, (1), match. (1)
> **Code Identifiers:** car_id (4), localfield (2), foreignfield (2)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Performance
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=0)** - [Instructor] Aggregation pipelines are super powerful, but they also require more RAM and CPU than CRUD operations.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=8)** So you'll want to keep an eye on performance issues with them, especially if the amount of data you are processing is large, the operation will be run frequently or the operation is intended to provide real time data fast.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=22)** Luckily, MongoDB allows you to see information about how aggregation pipelines and other queries perform fairly easily.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=30)** Let's look at it on the terminal.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=33)** All right, so I have prepared a query here that we are going to use to see some performance information from MongoDB.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=43)** In the first line here, you can see we are using the movies connection, and then we are calling the explain method and we are passing it a string that says executionStats.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=53)** That will tell MongoDB that we are not actually interested in the results of the aggregation pipeline that we want to execute here, but instead we want to see the statistics of how it executes.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=69)** Let's briefly talk about the query itself so that you know what's going on.
>
> **[1:14](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=74)** So as I said, this uses the movie's collection, and what happens is for each movie the query will get the year that the movie was released in, and then it will look up in the inventory collection which cars were released in the same year as the movie came out, and it will pull that car information into the results.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=100)** Now, I know this is a bit of a contrived example, but we're only going to use it to look at some performance statistics.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=107)** All right, so let's execute this.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=111)** Cool, and we get back a rather large document, so let me scroll up quickly.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=118)** All right, cool.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=120)** So to understand what happens here, you need to understand how MongoDB runs aggregation pipelines.
>
> **[2:08](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=128)** When you execute an aggregation pipeline the MongoDB profiler comes up with multiple plans for how to execute this query using different indexes if multiple indexes are available.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=141)** The profiler then executes all of the different plans and sees which one finishes first.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=149)** If the query is really big it will only execute each plan until one of the plans has reached a certain threshold of results, and then it will declare that plan the winner.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=164)** Since we passed in the executionStats argument to the explain method, we now get all of this information about how the profiler went about this and which query plan won.
>
> **[2:58](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=178)** So if I scroll down a little bit here you can see some information about the winningPlan.
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=186)** And inside this winningPlan document you can see what happened.
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=191)** So in this stage there was a transformation and that is where we changed the date that was in the movies collection to a year, And it tells you in the inputStage field value that what happened here was a collection scan.
>
> **[3:29](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=209)** Now, usually collection scans are things that you should look out for, however, in this case, it makes sense that it was a collection scan, because I asked for all of the results for all movies.
>
> **[3:43](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=223)** Okay, so let's scroll down a little bit further.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=228)** So here, we've got information about the second stage of the aggregation pipeline, and we can see how many documents were examined, and how many keys were examined, and how many collection scans were performed.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=243)** The documents examined in this case are 1 million, and that is because there's 1000 movies and 1000 cars.
>
> **[4:14](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=254)** And for each individual movie the database has to check the entire collection of cars to check for matches, because there is no index.
>
> **[4:25](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=265)** That is not great, and something we would want to fix if we were to execute this query often.
>
> **[4:31](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=271)** Now the second line totalKeysExamined tells me that no index was used, because keys are what's inside an index.
>
> **[4:41](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=281)** So if that's zero, we know no index was used.
>
> **[4:45](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=285)** The next line collectionScans is just a really big number.
>
> **[4:50](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=290)** Generally, if collection scans, all the docs examine numbers are very big or the keys number is very low.
>
> **[4:59](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=299)** That is something you want to look at if you want to improve performance.
>
> **[5:04](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=304)** Now, we also get told here how long MongoDB spent in this stage and that's 830 milliseconds, that's quite long.
>
> **[5:15](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=315)** If you remember, many videos ago, I said that slow queries are logged to the MongoDB logs.
>
> **[5:23](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=323)** So let's actually check that out to see whether this was logged there.
>
> **[5:29](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=329)** So I'm going to open up my code editor and in here, I am just going to open up my mongod.logs, and I'm going to scroll all the way to the bottom, and up here I actually already see the Slow query.
>
> **[5:44](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=344)** Now let me take this entire line and copy it, and open up a new tab, and just paste that here, and format the documents so that you can see what is in this.
>
> **[6:01](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=361)** So this is the output for a slow query.
>
> **[6:05](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=365)** Here we get the message, there was a Slow query, you can see the pipeline and that caused the slow query, and then you can see some execution stats here, so you can see when this was executed.
>
> **[6:19](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=379)** And then you can actually see more of which plan was chosen or how many documents were looked at, so that is all in the year execution stats.
>
> **[6:32](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=392)** Now, what you can do is you can take this planCacheKey, and you can go into MongoDB and actually check for more information as well.
>
> **[6:40](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=400)** But it is easier if you just do the explain execution stats on the query that was already run.
>
> **[6:47](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=407)** Okay, so now you have seen how you can spot this in the logs.
>
> **[6:52](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=412)** There's something I should remind you of though, just because a query does not show up in the mongod.logs does not mean it is performant.
>
> **[7:03](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=423)** Slow queries are only logged to the mongod.log file if they are slower than 100 milliseconds, if they are 99 millisecond slow, they are not logged, but that doesn't mean they are performant.
>
> **[7:20](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=440)** Okay, back to the slides.
>
> **[7:23](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=443)** There is one more thing that you can do to get more performance information from MongoDB.
>
> **[7:29](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=449)** If you are looking for a way to find slow operations without looking at the logs and without individually checking for execution stats for each query that you run, then this is for you.
>
> **[7:42](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=462)** You can enable a Native Profiler to collect data for operations slower than a specified limit, by setting the profiling level to one and specifying a time limit.
>
> **[7:56](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=476)** In this example, I'm saying that the slow millisecond limit is 20.
>
> **[8:03](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=483)** This will then make MongoDB store operations that exceed the 20 millisecond time limit in a profile collection inside the system database, and you can then query that collection.
>
> **[8:19](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=499)** Be aware that using the profiler with low slow ms values can slow down your deployment.
>
> **[8:26](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=506)** Okay, there are few common optimizations for aggregation pipelines that I want to leave you with.
>
> **[8:33](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=513)** The first one is using $sort with $limit together in that order, because that makes it possible for MongoDB to perform sort operations faster.
>
> **[8:45](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=525)** The second one is to use $project as the final stage.
>
> **[8:51](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=531)** Contrary to what you may hear somewhere else or read, it is not better to project early in your pipeline.
>
> **[8:58](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=538)** You will often hear that projecting away fields you don't need as early as possible will make your pipelines perform better, but this is an anti-pattern that may result in the database not being able to use indexes.
>
> **[9:11](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=551)** If it is possible to project away fields earlier the optimizer will do that for you.
>
> **[9:17](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=557)** So just put the $project stage as the final stage.
>
> **[9:21](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=561)** The next one is using hinting, which means you can tell an aggregation pipeline to use a specific index if you notice it is using a less optimal one by default.
>
> **[9:32](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=572)** Use this with caution.
>
> **[9:35](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=575)** As a last note, if you find yourself running a lot of aggregations that impact the performance of your database deployment, you can set up your deployment to have one or more dedicated analytics secondaries, which can handle these workloads without it impacting your deployment's performance for regular workloads.
>
> **[9:57](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=597)** Okay, one last thing, if you run aggregation pipelines and you notice directly that your deployment is slowing down, you may have to kill that operation.
>
> **[10:12](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=612)** To do that, you use db.currrentOp true, to figure out which operations are currently running, and that will also return an operation number for each operation.
>
> **[10:27](https://www.linkedin.com/learning/mongodb-essential-training/performance?u=76281980&t=627)** Then you can use the db.adminCommand to perform a kill operation for that running operation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), super (1), require (1), for, (1)
> **Code Identifiers:** executionstats (2), winningplan (2), inputstage (1), totalkeysexamined (1), collectionscans (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** ram (1), cpu (1), crud (1)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** be aware (1), caution (1)
> **Documentation:** the docs (1)

#### Challenge: Write aggregation pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980&t=0)** - [Instructor] To complete this exercise please write an aggregation pipeline to answer the following question.
>
> **[0:12](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980&t=12)** How many movies were released in each genre since the year 2000?
>
> **[0:18](https://www.linkedin.com/learning/mongodb-essential-training/challenge-write-aggregation-pipelines?u=76281980&t=18)** Store the results in a new collection called genres2000.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Write aggregation pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=5)** - [Instructor] Okay, to answer this question we are going to perform an aggregation query on the movies collection.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=16)** We are going to pass an array to the aggregate method with multiple stages inside.
>
> **[0:24](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=24)** The first stage is going to be a project stage, and in the project stage we're going to project away all fields we don't need.
>
> **[0:35](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=35)** And we are going to change the release year to only be the year.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=42)** So, to change the release year field to only be the year we are going to use the year operator.
>
> **[0:50](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=50)** We did not explicitly cover this operator in the course, but I hope you found it in the documentation.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=59)** Okay, aside from the release year we are also going to retain the genre field, the runtime field, and the title field.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=75)** Okay, let's try this for now just to make sure it works.
>
> **[1:19](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=79)** That seems to work as expected.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=82)** Okay, so let's add the second stage to this.
>
> **[1:26](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=86)** In the second stage we are going to perform a match.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=91)** And we're going to match specifically on all movies where the release year is greater than or equal to 2,000.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=106)** Okay, let's try whether that works.
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=109)** That looks like it works, very good.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=113)** The next stage is going to be an unwind stage.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=118)** And we are going to unwind the genres field so that we get one document for each genre in each movie document.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=133)** Okay, now, the last thing that we need to do to get the answer to our question is to add a $group stage, and we're going to group by the genres field.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=157)** Then for the accumulator fields we're going to have one within array of movies, and the way we're going to add to that array is we're going to use the $push operator.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=170)** And then inside the document that will get pushed to the array we are going to have the title of the movie, the runtime,
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=191)** and the release year.
>
> **[3:18](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=198)** Okay, outside of the movies field we are also going to add a second accumulator field, which is count.
>
> **[3:28](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=208)** And that's going to contain the actual answer to this.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=212)** The other field is merely to have some extra information, so if your solution doesn't contain that that is perfectly fine.
>
> **[3:39](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=219)** Anyway, inside the count field we're going to have the $sum operator with a one, which will add a one for each document it encounters.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=228)** Okay, let's try this once more.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=232)** Okay, and here we've got one result where there are a lot of movies, and if I scroll up far enough it tells me which genre this is.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=243)** This is the Thriller genre.
>
> **[4:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=245)** And here we've got the movies array, and then we've got the count, which is 95 movies in that genre.
>
> **[4:12](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=252)** Okay, now there was one more thing to this exercise, and that was we were supposed to store the results in a new collection called genres2000.
>
> **[4:21](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=261)** So, to do that we're going to add one more stage to this, and that's $out stage.
>
> **[4:28](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=268)** The $out stage takes as its argument a document where you have to specify the db, which is the database.
>
> **[4:36](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=276)** In our case that will be sample_data.
>
> **[4:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=281)** And then the collection, which we were supposed to call genres2000.
>
> **[4:50](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=290)** Okay, so let's do that.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=292)** Run it one last time.
>
> **[4:54](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=294)** Now, we don't get any output, but if I try to query the genres collection I should get back one of the results.
>
> **[5:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=305)** Okay, and in this case it's actually somewhere where there's no genre listed, interesting.
>
> **[5:12](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=312)** Okay, cool.
>
> **[5:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-write-aggregation-pipelines?u=76281980&t=313)** Anyway, that's the solution to this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), pass (1), match. (1), this, (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** sample_data (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)


### 6. Data Modeling

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Relational vs. document
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=0)** - [Instructor] When you hear MongoDB, you also often hear relational and document model or NoSQL, which isn't a great way to define the document model.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=11)** We covered already what the document model is.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=13)** Let me briefly explain what relational is.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=17)** In relational databases, data is structured in tables.
>
> **[0:21](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=21)** Think of Excel files.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=22)** So you may have an author's table, which contains the information about each author.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=29)** And then you may have a books table and links between the two.
>
> **[0:34](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=34)** When you query data, for example, if you want to know the books each author wrote, you join the tables.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=41)** That's roughly how it works.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=44)** When comparing relational and document databases, there are at least three different ways to think about it.
>
> **[0:53](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=53)** The first one is when you store JSON documents as they are in both database types.
>
> **[1:00](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=60)** Both relational and document databases nowadays, generally support JSON objects, but the way you work with JSON documents differs in both cases.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=71)** In relational databases, you generally store JSON inside a JSON blob.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=78)** In MongoDB, you just store it.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=81)** Working with JSON blobs inside relational databases used to be very slow.
>
> **[1:28](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=88)** Relational databases are built to be optimally performant when you are using tables, not when you are using JSON blobs.
>
> **[1:38](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=98)** It isn't meant for you to use it to store documents as the default and perform a lot of operations on them.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=105)** It is meant to allow you to store mostly relational data.
>
> **[1:49](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=109)** And if you really need to occasionally store some JSON, then that's fine, but you should know that that will probably result in a performance hit.
>
> **[1:59](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=119)** Now, I did say that working with JSON blobs inside relational databases used to be very slow.
>
> **[2:06](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=126)** Nowadays it is a lot faster, because relational databases have implemented performance improvements.
>
> **[2:14](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=134)** Storing and retrieving JSON in MongoDB is what MongoDB was built for.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=138)** You can store all of the JSON documents as they are.
>
> **[2:23](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=143)** MongoDB went as far as developing its own binary encoded serialization of JSON-like documents called BSON to make operations on documents even more efficient.
>
> **[2:35](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=155)** So what does this mean if you're trying to decide which database is right for you?
>
> **[2:40](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=160)** If you are planning to mostly work with documents, I would say go with the database that is built for that.
>
> **[2:47](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=167)** Let's move on to the second way of comparing relational and document databases.
>
> **[2:53](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=173)** The way you generally work with relational databases is by defining a schema for how you will store your data.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=181)** Data about a person, for example, or an author would be disassembled into different paths to store it.
>
> **[3:09](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=189)** And then it would be reassembled using joins when you are querying it.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=194)** Relational databases are optimized for working with tables and performing joins between tables fast.
>
> **[3:21](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=201)** You could store data in tables in MongoDB as well.
>
> **[3:25](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=205)** And you can also perform joins with MongoDB using the $lookup aggregation state, which is reasonably fast if you use indexes.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=215)** However, MongoDB is not optimized for this data access pattern.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=220)** If you use MongoDB and find yourself using a lot of joins, you are very likely not structuring your data well.
>
> **[3:48](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=228)** MongoDB expects all data that is generally queried at the same time to be in one document or at least one collection.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=237)** MongoDB is also optimized to work on a single collection, which it then manipulates.
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=243)** So if you want to store data in tables, go with a relational database.
>
> **[4:09](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=249)** And with that, we come to the last way of comparing both database paradigms, storing data in the data models best for each database.
>
> **[4:19](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=259)** This, in my opinion, is the only comparison that actually makes sense.
>
> **[4:24](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=264)** Otherwise, you're comparing a hammer to a drill.
>
> **[4:27](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=267)** Can you hammer in a screw with enough force?
>
> **[4:30](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=270)** Yeah, probably.
>
> **[4:32](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=272)** Can you use a drill to get a nail into a wall?
>
> **[4:34](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=274)** Same thing, with enough force? Yes.
>
> **[4:37](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=277)** But those are the wrong questions.
>
> **[4:40](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=280)** If you have a drill and a screw, use the drill to drive in the screw.
>
> **[4:44](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=284)** If you have one nail every now and then, maybe you don't need a hammer, and you'll use the screwdriver to hammer in the nail then, sure.
>
> **[4:53](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=293)** Would I do that for more than an edge case? No.
>
> **[4:56](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=296)** So if you are going to compare hammer to a drill, just make sure you're not comparing both when using nails.
>
> **[5:03](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=303)** If you compare both, you have to use different data models for the comparison for it to be a fair comparison.
>
> **[5:11](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=311)** So let's talk about the ease of querying with both.
>
> **[5:15](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=315)** Different people have different opinions on which way of querying the data is simpler.
>
> **[5:20](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=320)** Many folks, used to querying data with SQL, don't mind.
>
> **[5:25](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=325)** I am firmly in the camp that querying data with MongoDB is easier.
>
> **[5:29](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=329)** So it depends.
>
> **[5:31](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=331)** What most people don't realize is you can actually query MongoDB with SQL.
>
> **[5:37](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=337)** There is a BI connector for that.
>
> **[5:39](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=339)** So if you prefer the MongoDB way of querying, go with MongoDB.
>
> **[5:44](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=344)** Otherwise, you can actually use both.
>
> **[5:48](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=348)** Anyway, you probably still want to know which one is better.
>
> **[5:52](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=352)** If you use the optimal data model in both cases and don't care about how to query data, which one is better?
>
> **[6:00](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=360)** And I'd still say, it depends.
>
> **[6:04](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=364)** There are a few things that I would say you should consider.
>
> **[6:08](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=368)** First one is performance, of course.
>
> **[6:11](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=371)** But using both databases optimally, both are reasonably fast.
>
> **[6:17](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=377)** The next thing you should consider is ease of development.
>
> **[6:20](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=380)** If everyone on your team knows and loves relational databases, that may mean relational is a better choice, unless you want the team to first learn about MongoDB, because moving from a relational to a document data model means your team needs to spend time changing their mental model of how to work with data.
>
> **[6:39](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=399)** If your team does not consist of relational database experts, I'd say, go with MongoDB.
>
> **[6:45](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=405)** The way data is queried is easy, and generally folks love that.
>
> **[6:50](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=410)** But there are big debates on this subject.
>
> **[6:52](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=412)** I think it comes down to personal preference mostly.
>
> **[6:55](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=415)** To me, it makes sense to store data that you queried together, together, because my mental model of a person has all that data together.
>
> **[7:04](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=424)** But I also acknowledge that some data naturally comes in disassembled form.
>
> **[7:08](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=428)** And for that, a relational model makes more sense.
>
> **[7:12](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=432)** Anyway, there is one more thing you should consider with both, and that is how the database scales.
>
> **[7:19](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=439)** If you scale both databases, joins can become a problem because the joins for your data will only perform fast if all the tables you need to access to perform a query are co-located.
>
> **[7:33](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=453)** And there is a limit to how big a single machine can get.
>
> **[7:37](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=457)** The fact MongoDB is natively built around documents that contain all the data that is generally required when you perform a query, makes it easier and more performant to scale horizontally.
>
> **[7:51](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=471)** We won't cover sharding in this course, but if you are making this decision, you should read up on how sharding works.
>
> **[7:57](https://www.linkedin.com/learning/mongodb-essential-training/relational-vs-document-17231632?u=76281980&t=477)** But in essence, if you think you'll need to scale up a lot, I think the answer should be MongoDB, regardless of anything else.

> [!info]- Semantic Content
>
> **Env Vars:** json (12), sql (2), bson (1)
> **Code Keywords:** let (3), for. (1), this, (1), else. (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2)
> **Cross-References:** we covered (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Data modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=0)** - [Instructor] Data modeling is a topic that deserves its own course, but I will give you a brief introduction here.
>
> **[0:07](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=7)** The main principle to keep in mind when modeling data is that data commonly queried together should live as closely together as possible.
>
> **[0:17](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=17)** That means, in the same document or collection.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=20)** While pulling in data from another collection is possible, it is not the most performant way to use MongoDB.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=28)** However, you also have to contend with processing and storage limits, such as the 16 megabyte document limit and aggregation pipeline processing limits.
>
> **[0:40](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=40)** And operations with big documents are not as performant as with small documents.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=46)** So you cannot always keep all data together.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=49)** There are a few general guidelines for what to put together and what not.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=55)** The first one is if there is a one-to-one relationship between a document and another piece of data, like with a document about a person and a date of birth, store them together.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=69)** There are two exceptions to this.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=71)** The first one is if the size is too big, or if you very rarely use the information together in queries.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=82)** The second guideline is if there is a one-to-many relationship, like between an author and something like books.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=91)** Consider the amount.
>
> **[1:34](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=94)** If it is one to few, like with authors and books, you can store both in one collection using nesting or an array.
>
> **[1:42](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=102)** If it's more than a few, it's likely best to store them in separate collections and link them with IDs.
>
> **[1:50](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=110)** Lastly, if it's a many-to-many relationship, avoid embedding this information.
>
> **[1:56](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=116)** Instead, store IDs in either or both collections.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=122)** Here are a few more pointers to get your data model right.
>
> **[2:07](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=127)** Keep arrays reasonably small, meaning less than 100 elements.
>
> **[2:13](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=133)** And the second one, documents should not be large and flat.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=137)** If you have 100 key value pairs and little nesting, that's not great for performance.
>
> **[2:24](https://www.linkedin.com/learning/mongodb-essential-training/data-modeling?u=76281980&t=144)** As I said, there is a lot more to learn about data modeling, but this should help you get started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Code Keywords:** this. (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Flexible schema
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=0)** - [Instructor] The other keyword that you will often hear when people talk about MongoDB is schemaless, so what does that mean?
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=8)** A schema defines the structure, and contents of the data in a collection, by ensuring that documents in the collection contain the fields that are specified as required in the validator.
>
> **[0:21](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=21)** And, that documents in the collection that contain fields specified in the validator, have to have field values that conform to the specified data types.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=33)** Here is an example validator.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=36)** The validator consists of JSON schema, which specifies the BSON type of the document, which is object.
>
> **[0:45](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=45)** And then the required fields, which in this case, are name and message.
>
> **[0:51](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=51)** After that, in the properties field value, the JSON schema specifies each fields BSON type, alongside a description.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=59)** In this case, both the name and the message must be of BSON type string.
>
> **[1:06](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=66)** MongoDB does not require you to define a schema for you to store data.
>
> **[1:12](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=72)** This makes it easy to iterate and change your schema.
>
> **[1:15](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=75)** And that is something that comes in handy when you are building a new application, and changing things a lot.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=81)** However, your documents should still have a common structure they adhere to.
>
> **[1:27](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=87)** And once your application grows, it is possible, and recommended to enforce a schema, to ensure that your data adheres to the structure you are expecting.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=96)** So much for the theory, let's test it.
>
> **[1:40](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=100)** Okay, I'm going to enforce a schema on the movies collection.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=106)** And the way we're going to do that, is we are going to use the run command method.
>
> **[1:53](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=113)** The run command method takes a document as it's input.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=118)** The first argument is going to be the collection that is to be modified, which in our case is the movies collection.
>
> **[2:10](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=130)** Then, we are going to specify the validator.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=135)** The validator takes a JSON schema document, for which we are going to have to specify the JSON schema, using the JSON schema operator, and that takes another document, which will contain first of all, the BSON type, which is object.
>
> **[2:41](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=161)** Then the required fields, Which in our case I'm going to say are title and director.
>
> **[2:55](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=175)** And then there is going to be a properties field, in which we can specify which type each field value has to be.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=188)** So for the title field for example, we're going to specify a document that will contain the BSON type, and for the title that is going to be string.
>
> **[3:26](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=206)** And then for the director, it is also going to be string.
>
> **[3:36](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=216)** All right, now, before I close this, there is one more argument that gets passed into this collMod command that gets run, and that is the validation level for the validator.
>
> **[3:57](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=237)** Now you can choose multiple different validation levels, I think there is one that is called strict, which will mean that this validator gets applied to all documents.
>
> **[4:10](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=250)** And then the one that we are going to use, which is moderate, moderate means that the validator is only applied to newly added documents, so documents that newly get added to the collection will be checked against the validator, and then a document will only be checked against the validator if it previously was a valid document, otherwise you can update it, and if it still doesn't match the validator, that is fine.
>
> **[4:43](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=283)** So that makes it a bit easier to turn on validation.
>
> **[4:47](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=287)** All right, so let's run this.
>
> **[4:50](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=290)** And we've now got a validator.
>
> **[4:52](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=292)** So if I wanted to, for example, add a document to the movies collection, and I would only specify a title.
>
> **[5:10](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=310)** Let's just say the title is tests, and I would try to insert this.
>
> **[5:14](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=314)** It would say, "Document failed validation", here.
>
> **[5:19](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=319)** And then it would tell me that there was a schema rule that was not satisfied.
>
> **[5:23](https://www.linkedin.com/learning/mongodb-essential-training/flexible-schema?u=76281980&t=323)** So I would now have to check what schemas this is being validated against, and then check what I was doing wrong.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (3), let (3), case, (2), this. (2), require (1)
> **Env Vars:** json (5), bson (5)
> **Definitions:** is an  (1), is called (1), means that (1)
> **Analogies:** for example (2)
> **Code Identifiers:** collmod (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a data model
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=5)** - For this exercise, I would like you to create a data model based on this specification.
>
> **[0:12](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=12)** The data model is supposed to be for an online store and there are few common queries that you can expect to be executed.
>
> **[0:21](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=21)** The first query is what's available with x features.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=27)** Next one is, what's out of stock.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=30)** That's going to be a mostly internal query.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=33)** Next one is a user's personal information.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=37)** You can expect that that's a query that will often come from customers.
>
> **[0:42](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=42)** The next one is for a user's order history.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=46)** That one is mostly used internal.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=49)** And then, the next one is today's or last month's order.
>
> **[0:55](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=55)** That one is also mostly used internal.
>
> **[0:58](https://www.linkedin.com/learning/mongodb-essential-training/challenge-create-a-data-model?u=76281980&t=58)** I know this is a fairly vague specification but it's still a good exercise to get you thinking about how you might model this and what further questions you might have to ask to make decisions for the data model.

> [!info]- Semantic Content
>
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - for (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### Solution: Create a data model
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=0)** (lively beats)
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=5)** - Alright, let's look at the solution for this.
>
> **[0:08](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=8)** I want to, again, start this off by saying that this is a fairly vague specification.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=13)** It's a good exercise to go through, but if your data model is different from what I'm going to suggest here, don't worry too much about it.
>
> **[0:23](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=23)** The important thing is that you think about it.
>
> **[0:27](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=27)** Alright, so the first thing that I see in this exercise is that it says it's an online store.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=37)** With an online store, I would expect collections like inventory, orders, and users.
>
> **[0:44](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=44)** Then, we move on to common queries.
>
> **[0:48](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=48)** So, here, the first one is what's available with X features.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=54)** Now, the first thing here I'm wondering about is, okay, if there is some sort of inventory collection, maybe I should have an index on the features that are available, if that's a common query for customers especially.
>
> **[1:11](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=71)** The next thing that I'm being told is that there's going to be a common query on what's out of stock.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=78)** And, that that's going to be an internal query.
>
> **[1:21](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=81)** Now, with the internal keyword, I am kind of taking that to mean that we may not necessarily need an index, because, if it's internal, I expect it to probably be run maybe once a day.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=96)** I mean, how often are people going to check whether something is out of stock?
>
> **[1:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=101)** What I also say here is that there is actually a feature that might be useful for this use case.
>
> **[1:48](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=108)** And, that one is called change streams.
>
> **[1:51](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=111)** Change streams could alert us when something goes out of stock.
>
> **[1:55](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=115)** However, we do not cover change streams in this course.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=120)** The next two common queries are about the user.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=125)** So, there's one on the user's personal information and one on the user's order history, which is supposed to be internal mostly, so maybe for some forward function or something like that.
>
> **[2:18](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=138)** The first one, I would say, indicates that we should probably have an index on the user ID or something like that, maybe on the user email address, so that we can quickly retrieve a user's personal information.
>
> **[2:32](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=152)** The next thing where we have a common query on the user's order history, I think indicates that we may want to have an index on the user ID field.
>
> **[2:43](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=163)** So, just like the previous one.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=164)** So, I think we're pretty sure that we want that sort of an index.
>
> **[2:50](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=170)** There is also an open question here of whether we should store the order data with the user or not.
>
> **[2:57](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=177)** And, in that case, I would think about what kind of an online store that is.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=181)** And, that would be one of the questions I'd ask.
>
> **[3:04](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=184)** Are there going to be a lot of orders?
>
> **[3:06](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=186)** Is this is super marked?
>
> **[3:07](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=187)** And, you can expect many, very large orders?
>
> **[3:11](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=191)** In that case, I would probably store the orders in a separate collection.
>
> **[3:17](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=197)** However, if it's a car manufacturer, where you expect people to... Sorry, not a car manufacturer, like somewhere where you go to buy a car, where you'd expect that users make one purchase, then it's probably fine to store the order data with the user.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=215)** Okay, the last common query is on today's or last month's order.
>
> **[3:41](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=221)** So, there, you might want to consider to put an index on the order date.
>
> **[3:46](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=226)** However, again, that's an internal query.
>
> **[3:49](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=229)** So, you're going to have to consider how often that's going to be run, how slow the query is, and how many resources are going to be used by that query to really see whether it makes sense to place an index on that field or not.
>
> **[4:07](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=247)** Alright, so this is all fairly vague in terms of giving you a solution, but it's not that clear cut what the answer is.
>
> **[4:17](https://www.linkedin.com/learning/mongodb-essential-training/solution-create-a-data-model?u=76281980&t=257)** The important thing is that you think about what it may mean.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1), this. (1), case. (1), function (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - alright (1)


### 7. Drivers

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Drivers
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=0)** - [Instructor] So far in this course, I've taught you how to interact with MongoDB using the MongoDB shell.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=6)** However, when you are using MongoDB in an application, you will be using a MongoDB driver.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=13)** MongoDB supports libraries for a variety of commonly used languages, such as C, C++, Java, Python, Node.js, etc., but there are also community developed libraries that you can use.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=28)** For some languages, the MongoDB supported libraries are very popular.
>
> **[0:33](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=33)** For others, the community developed libraries are more popular.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=37)** I recommend reading up on what people think about the drivers you're considering before making a final choice.
>
> **[0:43](https://www.linkedin.com/learning/mongodb-essential-training/drivers?u=76281980&t=43)** In the next videos, I'll show you how to connect to MongoDB with Python, Node.js and PHP.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), node (2), php (1)
> **File Paths:** node.js (2)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Connecting with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=0)** - [Instructor] If you are using Python, there are two MongoDB supported drivers that you can use.
>
> **[0:06](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=6)** PyMongo for synchronous Python applications and Motor for asynchronous Python applications.
>
> **[0:13](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=13)** Motor is implemented as a wrapper around PyMongo.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=16)** So if you ever need to switch from PyMongo to Motor, it is fairly simple to make that change.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=22)** For this video however, we will be using PyMongo.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=26)** So let's install that.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=28)** All right.
>
> **[0:29](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=29)** To install PyMongo DB, we'll be using pip, Python's package installer.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=36)** However, we're not just going to install PyMongo onto the entire system.
>
> **[0:41](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=41)** We are going to create a virtual environment first using virtualenv.
>
> **[0:46](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=46)** If you don't have virtualenv installed, you have to first install that, again, using pip.
>
> **[0:52](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=52)** So, we're going to just do that here now.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=56)** We'll do that with pip install --user virtualenv.
>
> **[1:02](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=62)** Okay.
>
> **[1:03](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=63)** And this says requirement is already satisfied because we already have that installed.
>
> **[1:08](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=68)** Next, we are going to actually set up the environment, python3 -m venv env.
>
> **[1:18](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=78)** Okay.
>
> **[1:19](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=79)** And next, we're going to activate the environment.
>
> **[1:23](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=83)** Nice, great.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=85)** Now, we can install PyMongo, and we are also going to install python-dotenv.
>
> **[1:31](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=91)** That Python package is going to allow us to read environment variables inside our Python application.
>
> **[1:39](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=99)** Okay, so let's now look at some sample code for a Python application.
>
> **[1:44](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=104)** At the top, you see the imports.
>
> **[1:47](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=107)** In this case, I am importing the Mongo client from the PyMongo package, and I am importing load_dotenv, which will allow us to read in the environment variables that we need.
>
> **[2:03](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=123)** I have, in this case, exported the environment variables DB_USER and DB_PASSWORD for my username and password for my MongoDB deployment.
>
> **[2:17](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=137)** So, I create the Mongo client by passing in the connection string, the username, and the password.
>
> **[2:25](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=145)** Using the client, I can then access a database as we've used throughout this entire course.
>
> **[2:33](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=153)** In this case, that will be sample data, and then I can access or create a collection.
>
> **[2:40](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=160)** Here, I am creating a collection called testpython.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=164)** Then I have defined a document which we can insert by calling the insert one method on collection.
>
> **[2:56](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=176)** That insert is going to happen synchronously, and it's going to return an object from which we can get the inserted ID.
>
> **[3:03](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=183)** So that will be the unique ID object ID that is assigned to the document, and we can print that just so that we know this worked.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=194)** Then we can also perform find operations on the collection, and again, I'm just doing this one as an example, and then printing it.
>
> **[3:22](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=202)** Okay, let's run this program on the command line and see it working.
>
> **[3:30](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=210)** Okay.
>
> **[3:31](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=211)** So in this output, we get first the object ID, and then we find the entire document, which has that same object ID.
>
> **[3:43](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=223)** All right.
>
> **[3:44](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=224)** This was a very short example just to show you how you would connect to your MongoDB deployment from within Python.
>
> **[3:52](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=232)** If you are interested in learning more on how other queries or aggregations work, you can read the docs at PyMongo.[readthedocs.io](https://readthedocs.io).
>
> **[4:03](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-python?u=76281980&t=243)** Especially the tutorial and the example sections are very useful.

> [!info]- Semantic Content
>
> **CLI Commands:** python (9), pip (3), mongo (2), find (2), make (1)
> **Prerequisites:** install (7), set up (1)
> **Code Keywords:** let (3), case, (3), switch (1)
> **Env Vars:** db_user (1), db_password (1)
> **Code Identifiers:** load_dotenv (1)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1)
> **Documentation:** the docs (1)
> **Tools:** command line (1)

#### Connecting with JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=0)** - If you are using node.js, there are two main drivers that you can use, the MongoDB supported driver, which you'll find behaves similarly to the MongoDB shell, and Mongoose, which is an object modeling tool for MongoDB.
>
> **[0:16](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=16)** A lot of people choose to use Mongoose over MongoDB's driver because it removes some extra code you need to write, like opening and closing connections.
>
> **[0:25](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=25)** However, it is worth noting that Mongoose may be a bit slower than the native driver, and that it forces you to declare schemas, which Mongo DB's driver doesn't do.
>
> **[0:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=36)** For this video, we will be using Mongoose.
>
> **[0:39](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=39)** Alright, inside this folder, I've already got two files, an index.js file and a package.json file.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=49)** Let me show you what's inside the package.json file for right now.
>
> **[0:52](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=52)** Okay.
>
> **[0:54](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=54)** Now, to install Mongoose, I'm going to run NPM install mongoose--save.
>
> **[1:04](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=64)** I am also going to install the dotenv package.
>
> **[1:09](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=69)** That will allow us to use environment variables.
>
> **[1:13](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=73)** Okay, now let's look at the code.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=76)** Up at the top, you can see that we are requiring the Mongoose and the dotenv package.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=82)** Then, we run the main function.
>
> **[1:25](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=85)** Inside the main function, we first call the config function, and that is to get the environment variables.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=96)** Next, we define the MongoDB connection URI, and then we use that to connect to the MongoDB deployment with Mongoose.
>
> **[1:46](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=106)** Note that inside the connection URI, it is important that it says admin, because that is the database that we are authenticating against.
>
> **[1:57](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=117)** However, we are going to be inserting and querying data from the sample data database.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=125)** Therefore, inside the connect method arguments, we are going to specify the DB name as sample data.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=135)** Once the connection is made, this is going to log connection established with MongoDB for us.
>
> **[2:24](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=144)** Okay, here, you can see how we can define a schema with Mongoose.
>
> **[2:29](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=149)** And, in this case, I'm just defining a very small schema that could be used for an author document.
>
> **[2:37](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=157)** In this case, it has a string for the author name and a string for a message.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=164)** And, we specify the database and the collection that we are going to use to store these documents of that schema.
>
> **[2:53](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=173)** Then, we have to define a model.
>
> **[2:56](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=176)** We do that using this schema.
>
> **[3:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=180)** Once we've got that model, we can use it to create documents that are objects of that model.
>
> **[3:10](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=190)** To save a document, what we do is we call the save method on this new object and then we can also call the find method.
>
> **[3:22](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=202)** We can call the find method on the model itself, which will then find a document of that model.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=212)** Alright, let's see if this works.
>
> **[3:40](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=220)** Okay, connection established with MongoDB, document is successfully saved, and then the document is found, right?
>
> **[3:50](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-javascript?u=76281980&t=230)** So, that is a small example that should show you how you can connect to your MongoDB deployment using Mongoose.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), case, (2)
> **CLI Commands:** find (4), node (1), mongo (1), npm (1)
> **File Paths:** package.json (2), node.js (1), index.js (1)
> **Env Vars:** uri (2), npm (1)
> **Prerequisites:** install (3)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - if (1)

#### Connecting with PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=0)** - [Instructor] For PHP, we'll be using MongoDB's native driver.
>
> **[0:04](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=4)** To use the PHP driver, you'll need both the extension and the library installed.
>
> **[0:11](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=11)** The extension itself provides minimal API for the core driver functionality, allowing you to connect to the database and run queries.
>
> **[0:20](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=20)** The library, however, models the client, database, and collection objects.
>
> **[0:26](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=26)** Okay, so let's install this.
>
> **[0:30](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=30)** First, we are going to use pecl to install MongoDB.
>
> **[0:37](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=37)** In my case, that is already installed.
>
> **[0:40](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=40)** Next, I'm going to run php --ini to get the configuration file location.
>
> **[0:49](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=49)** Okay, with that, I am going to echo the extension mongodb.so into that file.
>
> **[0:59](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=59)** All right, that's the extension installed.
>
> **[1:04](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=64)** Now we're going to install the library, and for that, we are going to use Composer.
>
> **[1:10](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=70)** To make sure you've got Composer installed, just run composer --version.
>
> **[1:17](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=77)** If you don't get back a version number, you're going to first have to install Composer before resuming.
>
> **[1:24](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=84)** With Composer installed, go into the directory where you want to run your PHP code.
>
> **[1:30](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=90)** That's where we're going to install the MongoDB library.
>
> **[1:36](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=96)** We're going to do that with composer require mongodb/mongodb.
>
> **[1:42](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=102)** All right, that's installed.
>
> **[1:45](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=105)** And then we're going to install one more library, and that is so that we can use environment variables.
>
> **[1:58](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=118)** All right, great.
>
> **[2:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=120)** That's all we have to install.
>
> **[2:02](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=122)** Let's now look at the PHP code.
>
> **[2:05](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=125)** So here's the PHP code for connecting to a MongoDB deployment, inserting a document, and finding a document.
>
> **[2:15](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=135)** At the top of the file is where we load the environment variables.
>
> **[2:21](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=141)** After that, we initialize the MongoDB client using the MongoDB URI for your deployment.
>
> **[2:30](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=150)** That includes your MongoDB username and your MongoDB password, which you're going to have to export as an environment variable or put into a .env file to be able to use it here.
>
> **[2:44](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=164)** If you scroll a bit to the side, you can see that we are using the admin database inside your connection string.
>
> **[2:54](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=174)** That is important, because you need to authenticate against the admin database when connecting.
>
> **[3:01](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=181)** All right, for the rest of the code, the first thing that happens is we select a collection.
>
> **[3:08](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=188)** As with most of this course, we are going to be using the sample_data database.
>
> **[3:14](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=194)** And here we are using a collection called testphp.
>
> **[3:19](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=199)** That collection doesn't exist yet, but it's going to be created as soon as we insert a document into it, and that is what we're doing next.
>
> **[3:30](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=210)** Here we create a document.
>
> **[3:32](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=212)** And the document is just very simple.
>
> **[3:35](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=215)** It has an author and a message field and two strings that go with those fields.
>
> **[3:41](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=221)** So that gets inserted, and then in the next line, we find one document from that collection and we dump that so we can see it in the terminal when we run this.
>
> **[3:55](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=235)** Okay, now let's run this and see if it works.
>
> **[4:00](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=240)** Okay, and here we get back the dump of the document.
>
> **[4:06](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=246)** So that is how you connect to your MongoDB deployment, perform an insert, and find a document using PHP.
>
> **[4:16](https://www.linkedin.com/learning/mongodb-essential-training/connecting-with-php?u=76281980&t=256)** For more information on how other queries or aggregations work, you can read the docs at docs.[mongodb.com/PHP-library](https://mongodb.com/PHP-library), especially the tutorials are very useful.

> [!info]- Semantic Content
>
> **CLI Commands:** php (8), composer (6), find (2), make (1)
> **Env Vars:** php (7), api (1), uri (1)
> **Prerequisites:** install (7), you'll need (1)
> **Code Keywords:** let (3), this. (2), case, (1), require (1)
> **Code Identifiers:** sample_data (1)
> **URLs:** [mongodb.com](https://mongodb.com) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Advancing with MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=0)** - [Naomi] Congratulations, you've made it to the end of the MongoDB Essentials Course.
>
> **[0:05](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=5)** Don't forget to add your certificate for this course to your LinkedIn profile.
>
> **[0:09](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=9)** And if you liked this course, leave a review.
>
> **[0:12](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=12)** You're now ready to deploy replica sets, perform CRUD operations, as well as aggregations.
>
> **[0:18](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=18)** Of course, that isn't all there is to know about MongoDB.
>
> **[0:22](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=22)** MongoDB has a lot more to offer, which we dive into in the MongoDB Advanced Course.
>
> **[0:28](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=28)** Some of my favorite MongoDB features that we didn't cover here and are covering in that course include change streams, which allow you to monitor changes happening on collections from inside your applications; client-side field-level encryption, which allows you to encrypt data before it even leaves the client; and time series collections, which is a special collection type that allows you to work with time series data.
>
> **[0:56](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=56)** These are great features to check out next.
>
> **[1:00](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=60)** And if you're looking to administrate a MongoDB deployment, the next topics I'd suggest you look at are authentication, role-based access control, and sharding, which is also covered in the MongoDB Advanced Course.
>
> **[1:16](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=76)** If you have any questions or want to stay in contact, please follow me on LinkedIn or on Twitter.
>
> **[1:22](https://www.linkedin.com/learning/mongodb-essential-training/advancing-with-mongodb?u=76281980&t=82)** See you around.

> [!info]- Semantic Content
>
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