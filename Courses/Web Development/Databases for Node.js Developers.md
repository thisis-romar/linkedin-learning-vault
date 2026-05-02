---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: databases-for-node-js-developers-25329301
url: "https://www.linkedin.com/learning/databases-for-node-js-developers-25329301"
duration_minutes: 244
duration: 4h 4m
level: Intermediate
updated: 3/14/2025
learners: 14870
skills:
  - Database Development
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/databases-for-nodejs-developers-5978020"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFkeukZTMUzWQ/learning-public-crop_675_1200/B4EZUlDKTpH0Ag-/0/1740083340781?e=2147483647&amp;v=beta&amp;t=JohyAmMw_Ip6e--vO1-xAmdMmy70m7PhjEBxiESeQJE"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
prev_courses:
  - '[[Node.js- Testing and Code Quality]]'
next_courses:
  - '[[Express Essentials- Build Powerful Web Apps with Node.js]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":4,"total":11,"prev":"Node.js- Testing and Code Quality","next":"Express Essentials- Build Powerful Web Apps with Node.js"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/database-development
  - skill/node-js
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Databases%20for%20Node.js%20Developers.md)

![Databases for Node.js Developers](https://media.licdn.com/dms/image/v2/D4E0DAQFkeukZTMUzWQ/learning-public-crop_675_1200/B4EZUlDKTpH0Ag-/0/1740083340781?e=2147483647&amp;v=beta&amp;t=JohyAmMw_Ip6e--vO1-xAmdMmy70m7PhjEBxiESeQJE)

# Databases for Node.js Developers

> In this course, Daniel Khan—a technology lead, developer, and application architect—shows you how to manage databases from SQL and NoSQL, to in-memory databases, and learn how to work with them in real-time applications. Discover the basics and applications of SQL databases like MySQL for structured, relational data, and NoSQL databases like MongoDB for dynamic data storage. Learn how to use Redis

> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301) | 4h 4m | Intermediate | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Databases in Node.js:  Relational, document, and in-memory storage in action](#databases-in-nodejs-relational-document-and-in-memory-storage-in-action)
- [**1. Course Setup**](#1-course-setup) (4 videos)
  - [What you should know](#what-you-should-know)
  - [Getting your tools ready](#getting-your-tools-ready)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
  - [Exploring the sample project](#exploring-the-sample-project)
- [**2. Introduction to Databases**](#2-introduction-to-databases) (4 videos)
  - [Some basics about databases](#some-basics-about-databases)
  - [Understanding relational databases](#understanding-relational-databases)
  - [Understanding document databases](#understanding-document-databases)
  - [Selecting the ideal database for your Node.js project](#selecting-the-ideal-database-for-your-nodejs-project)
- [**3. MongoDB: Building Your Product Catalog**](#3-mongodb-building-your-product-catalog) (14 videos)
  - [Managing product data with MongoDB](#managing-product-data-with-mongodb)
  - [Setting up MongoDB with Docker](#setting-up-mongodb-with-docker)
  - [Exploring MongoDB with Compass](#exploring-mongodb-with-compass)
  - [Introducing Mongoose](#introducing-mongoose)
  - [Setting up Mongoose and connecting it to MongoDB](#setting-up-mongoose-and-connecting-it-to-mongodb)
  - [Building a model for our products](#building-a-model-for-our-products)
  - [Integrating the model into our application](#integrating-the-model-into-our-application)
  - [Populating MongoDB with sample data](#populating-mongodb-with-sample-data)
  - [Querying items with Mongoose](#querying-items-with-mongoose)
  - [Filtering items by tag](#filtering-items-by-tag)
  - [Item administration: Listing and loading](#item-administration-listing-and-loading)
  - [Item administration: Create, update, and delete](#item-administration-create-update-and-delete)
  - [Optimizing queries with indexes](#optimizing-queries-with-indexes)
  - [Performing text search in MongoDB](#performing-text-search-in-mongodb)
- [**4. MySQL: Managing Users and Orders**](#4-mysql-managing-users-and-orders) (12 videos)
  - [Using MySQL for our users and orders](#using-mysql-for-our-users-and-orders)
  - [Setting up MySQL with Docker](#setting-up-mysql-with-docker)
  - [Exploring MySQL with MySQL Workbench](#exploring-mysql-with-mysql-workbench)
  - [Introducing Sequelize](#introducing-sequelize)
  - [Setting up the database connection](#setting-up-the-database-connection)
  - [Designing the database structure](#designing-the-database-structure)
  - [Creating a user model for Sequelize](#creating-a-user-model-for-sequelize)
  - [Creating the order models for Sequelize](#creating-the-order-models-for-sequelize)
  - [Loading and syncing the models](#loading-and-syncing-the-models)
  - [Creating, updating and deleting users with Sequelize](#creating-updating-and-deleting-users-with-sequelize)
  - [Securing credentials with password hashing](#securing-credentials-with-password-hashing)
  - [Implementing the user login](#implementing-the-user-login)
- [**5. Redis: A Fast Store for Sessions, Caching, and Real-Time Features**](#5-redis-a-fast-store-for-sessions-caching-and-real-time-features) (7 videos)
  - [Fast and flexible basket and session management with Redis](#fast-and-flexible-basket-and-session-management-with-redis)
  - [Setting up Redis with Docker](#setting-up-redis-with-docker)
  - [Exploring Redis with Redis Insight](#exploring-redis-with-redis-insight)
  - [Connecting our application to Redis](#connecting-our-application-to-redis)
  - [Managing user sessions with Redis](#managing-user-sessions-with-redis)
  - [Basic Redis operations for shopping baskets, part 1](#basic-redis-operations-for-shopping-baskets-part-1)
  - [Basic Redis operations for shopping baskets, part 2](#basic-redis-operations-for-shopping-baskets-part-2)
- [**6. Bringing It All Together: Creating and Managing Orders**](#6-bringing-it-all-together-creating-and-managing-orders) (3 videos)
  - [Fetching item information for the basket](#fetching-item-information-for-the-basket)
  - [Creating the order and using transactions](#creating-the-order-and-using-transactions)
  - [Implementing the order admin view](#implementing-the-order-admin-view)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Databases in Node.js:  Relational, document, and in-memory storage in action
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=0)** - [Daniel] My first contact with databases was in the late '90s, when I had to store data from a form.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=6)** But today, the world runs on data on a scale that goes far beyond a simple form submission.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=12)** In this course, you will learn how to work with relational databases like MySQL, and ensuring structured and consistent data.
>
> **[0:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=20)** You'll also explore document databases like MongoDB, offering flexibility for dynamic applications.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=27)** You'll leverage in memory databases like Redis, built for speed and real time processing.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=33)** I'll keep the theory to a minimum, just enough to give you the why behind what you're doing.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=39)** Hi, I'm Daniel Khan, and I've been working as a developer and architect in tech for over 20 years.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=46)** So are you ready to take your backend skills to the next level?
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/databases-in-node-js-relational-document-in-memory-storage-in-action?u=76281980&t=50)** Let's dive right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), data (3), [[Relational Databases]] (1), [[MySQL]] (1), [[MongoDB]] (1)
> **CLI Commands:** mysql (1)
> **Speakers:** - [daniel] (1)


### 1. Course Setup

[↑ Back to Table of Contents](#table-of-contents)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course you should have a basic understanding of JavaScript and Node.js.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=5)** You should know how to create the basic web application using a framework like Express.js or Fastify.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=11)** You should understand functions and be familiar with callbacks, Promises and Async await.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=17)** In this course, you're using Fastify as the framework, but if you have worked with Express or any other Node.js framework you will feel right at home.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=26)** Fastify follows a similar (indistinct) response model, but is more modern and optimized for speed and efficiency.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=34)** We will also use modern JavaScript features throughout this course.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=37)** This includes ES module imports like import and export, instead of common shares which is required.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=43)** We will use Arrow functions.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=45)** We will use destructuring assignments for better readability and we will also use Promises and Async await to handle asynchronous code.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/what-you-should-know?u=76281980&t=53)** While a deep understanding of these features is not required because this is a database course most of all, I recommend looking up any syntax that is unfamiliar to you as you follow along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Node.js]] (2), web application (1), [[Express.js]] (1), express (1)
> **File Paths:** node.js (2), express.js (1)
> **CLI Commands:** node (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Getting your tools ready
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=0)** - [Instructor] Before we dive into the course, let's make sure that we have our tool belt ready.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=4)** So first we need Node.js.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=6)** Node.js is the runtime that allows you to run JavaScript outside of the browser, and I hope you know that, and you can download it free from the Node.js website.
>
> **[0:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=15)** Make sure to install the LTS, the so-called long-term support version, as it's the most stable and widely used one.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=22)** After installing it, you can go into your terminal and just type "node -v" and you should get the installed Node.js version and if you get this, you know Node.js environment is set up properly.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=36)** The sample files for this course are stored in a GitHub repository, so you'll need Git to download and manage them.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=43)** You can download Git from the git-scm website.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=45)** If you're using Mac, Git is usually pre-installed.
>
> **[0:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=49)** To verify that Git is installed, again, you can go into the terminal and type "git," this time, "--version."
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=59)** If you're new to Git and GitHub in general, I recommend checking out the [[Learning Git and GitHub]] course by Ray Villalobos in the library.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=67)** Since Git and GitHub are widely used by developers, learning them is a great investment into your career.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=73)** During this course, we will work with multiple database systems.
>
> **[1:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=76)** Setting them up manually can be complex, so we'll use Docker to run them inside lightweight, isolated containers.
>
> **[1:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=85)** Docker is available for Windows, Mac, and Linux, and you can download and install it from the [docker.com](https://docker.com) website.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=92)** After installing, you can verify that Docker is running by going into your terminal and typing "docker --version."
>
> **[1:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=103)** Throughout this course, I will guide you through pulling and setting up the necessary database containers as we introduce each one.
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=110)** Finally, for writing and managing our code, we will use Visual Studio Code.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=115)** Visual Studio Code is free, lightweight, and it comes with great support for Node.js.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=120)** You can download it from the Visual Studio Code website.
>
> **[2:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=123)** So that's it, you're ready to go.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/getting-your-tools-ready?u=76281980&t=126)** With Node.js, Git, Docker, and Visual Studio Code installed you now have everything ready to follow along with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (10), [[Node.js]] (7), [[GitHub]] (4), database (2), [[JavaScript]] (1)
> **CLI Commands:** git (10), node (8), docker (6), make (2)
> **Tools:** github (4), visual studio (4), terminal (3)
> **File Paths:** node.js (7)
> **Prerequisites:** install (2), set up (1), you'll need (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** lts (1)
> **Definitions:** is a  (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=0)** - [Narrator] All the exercise files for this course are available on GitHub.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=4)** You'll find the repository at this URL.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=7)** This repository has branches for each video in the course.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=11)** You can switch between them using the branch selector on GitHub.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=16)** The naming follows the following pattern, like here, when you have 04_09, this means that's the ninth video of the fourth chapter.
>
> **[0:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=28)** If a branch has a b at the end, it shows the code at the beginning of that video.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=33)** If it has an e, it shows the code at the end of the video.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=37)** The main branch contains the project at the start and the final branch contains the complete finished project.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=45)** To get started, you need to clone the repository and we will do that now.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=50)** First I copy the repository URL.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=53)** For that I click on code, and there I can now simply copy the URL of this repository.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=61)** I now have to use the SSH URL because right now, while I'm recording this course, this repository is still private, but you can then just use HTTPS.
>
> **[1:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=72)** So I copy my SSH URL, but everything else will stay totally the same.
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=77)** So now I'm switching into my terminal and there I'm heading to my desktop because I want to clone this into my desktop.
>
> **[1:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=88)** And on my desktop, I now type git clone.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=93)** And there I will now just paste this repository URL.
>
> **[1:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=99)** The next thing I'm going to do, I switch into this repository and now I perform a git fetch --all to fetch all the branches.
>
> **[1:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=112)** So now we have downloaded all the files and branches.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=115)** Now I open Visual Studio Code, and there I now go to File, Open Folder.
>
> **[2:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=122)** I select my desktop and the directory.
>
> **[2:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=128)** I choose clone and I select Open.
>
> **[2:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=131)** And as you see, we are on the main branch now.
>
> **[2:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=134)** And from there we can now also fetch all the other branches that are in the GitHub repository.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=142)** You now have access to all the exercise files, and what I would recommend to you is that you create now your own branch for your local development, and you create it from main.
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=152)** So you click on main and there create new branch, and then you could call it for instance, development.
>
> **[2:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=162)** That way you can modify files without affecting the original branches.
>
> **[2:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=167)** If you ever need to reset, you can always switch back to a clean version from the corresponding exercise branch.
>
> **[2:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=173)** Add one more thing if you want to, but I have to add one more thing because I get this GitHub request very often where someone creates a development branch and then tries to push this branch to the repository.
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=187)** This is, of course, not possible.
>
> **[3:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=189)** You don't have write permissions to this repository.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=191)** If you want to have your very own version where you can also push data back to GitHub, you have to go to GitHub and click this fork button up there to create your own copy and then clone from there.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=207)** And with that, we are basically ready to start coding.
>
> **[3:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=209)** All that is left to do is making the sample project work and also to explore it a little bit so that you understand what's going on there.
>
> **[3:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/how-to-use-the-exercise-files?u=76281980&t=218)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Fetch]] (3), [[Git]] (2), next (2), data (1)
> **Env Vars:** url (6), ssh (2), https (1)
> **Tools:** github (6), terminal (1), visual studio (1)
> **CLI Commands:** ssh (2), git (2), find (1)
> **UI Navigation:** click on (2), go to (2)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)

#### Exploring the sample project
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=0)** - [Instructor] We have already cloned the repository and we opened it in Visual Studio Code.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=4)** Now let's set up everything to run the project.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=8)** First, let me open the package.json file for you.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=11)** This project is built with Fastify instead of Express.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=14)** If you've used Express before, don't worry, Fastify has a similar structure, but is defined to be faster and more efficient.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=22)** Before running the project, we need to install the dependencies.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=26)** So now I click on Terminal, New Terminal, and there I simply type npm install.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=34)** This will now pull down all the dependencies.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=37)** Once this is finished, the server is ready to run.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=40)** And when you scroll up here in the package.json, you see that we are using Nodemon, and Nodemon is very handy because it'll automatically reload the application whenever we change a file.
>
> **[0:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=52)** So I now run npm run dev and it starts the server already.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=59)** Now, when we look into the src folder, we see that the project is structured similar to an Express app.
>
> **[1:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=65)** So we have the server.js file, let me open it right away.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=70)** And this is the entry point, just like in Express.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=73)** The routes folder contains all our routes, which is similar to Express routes.
>
> **[1:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=79)** And if we look into server.js, you see how we bring in all those different plugins here, and also routes in line 10 is a plugin, and this is very similar to Express middlewares.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=92)** So we are not using app.use, but we are registering plugins.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=97)** But the concept behind this is very similar to what you have in Express.
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=102)** During this course, we will also look into plugins in way more detail, but if you want to kind of transform what we do now to an Express application, you can do all of it by using Express middlewares.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=115)** Now that the app is running and it's running on localhost:3000, we can also open it.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=119)** And in my browser, I will now simply type localhost:3000.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=126)** And you see a sample app, which is a shop.
>
> **[2:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=129)** So when you click on Shop, you see some items, but this is just sample data.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=132)** None of this comes from the database as of now.
>
> **[2:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=135)** We have some user management, we have some item management, also order management, and users also can log in.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=143)** Also, we have a search bar on the top right where we can search for items.
>
> **[2:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=149)** So this is all you have to know for now.
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-the-sample-project?u=76281980&t=151)** Let's dive right into the database topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** express (9), [[JSON]] (2), [[npm]] (2), application (2), database (2)
> **File Paths:** package.json (2), server.js (2)
> **UI Navigation:** click on (2), open the (1), scroll up (1)
> **Analogies:** similar to (3), just like (1)
> **Tools:** terminal (2), visual studio (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** npm (2)
> **URLs:** [localhost:3000](https://localhost:3000) (2)


### 2. Introduction to Databases

[↑ Back to Table of Contents](#table-of-contents)

#### Some basics about databases
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=0)** - [Host] Let's cover some database fundamentals and no worries, this will not be an advanced lecture.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=5)** I will do it very quick.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=7)** A database is a structured collection of data designed for fast search and retrieval, and it's not just a computer concept.
>
> **[0:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=15)** Anything indexed can be a database.
>
> **[0:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=18)** Think about a phone book, or even ancient text records.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=22)** The difference today, we generate more data than ever.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=25)** Think about big data, social media, and e-commerce, all powered by databases.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=31)** A database doesn't work alone.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=33)** It comes with a database management system.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=36)** DBMS often called the database server.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=40)** The DBMS is an application that runs either on the same machine as your application or on a separate server your app connects to.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=50)** It handles data storage, retrieval, and organization.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=54)** Every database management system organizes data in structures like tables.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=59)** This would be relational databases or collections.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=63)** This would be document databases.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=66)** For example, in a shopping system, you might have an items table to store product data, to speed up searches, databases also use indexes.
>
> **[1:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=75)** Think of an index as a shortcut.
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=77)** Instead of scanning an entire table, the DBMS looks up an index to quickly find what you need.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=84)** As an example, a product index on item numbers allows instant look-ups instead of scanning each record.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=90)** So where does the data actually live?
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=93)** At the core, all data is stored somewhere, either on disk or in memory.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=98)** How this works depends on the DBMS.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=101)** Some databases store each table as a file on disk while others use more advanced structures.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=107)** This is a very deep topic and we won't touch it in this course, but just know that storage impacts speed, efficiency, and scalability.
>
> **[1:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=116)** To interact with a database where application needs a client library, a package that provides an interface and API for database communication, under the hood, this library now speaks the databases communication protocol to send and retrieve data efficiently.
>
> **[2:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/some-basics-about-databases?u=76281980&t=134)** Let's dive a little bit more into the different types of database systems in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (10), data (8), [[Databases]] (5), application (3), management (2)
> **Env Vars:** dbms (4), api (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [host] (1)

#### Understanding relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=0)** - [Instructor] When I first started using databases professionally, relational databases were the standard.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=6)** Back then, MySQL and Postgres dominated the space and they're still widely used today.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=12)** A relational database is great when data has clear relationships.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=17)** Imagine building a hiking app that answers questions like which villages are along a trail?
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=24)** Where can a eat in a village?
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=26)** Which trail leads to a specific village?
>
> **[0:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=29)** These questions involve relations between data, and that's exactly what relational databases are designed for.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=36)** Relational databases follow a strict schema, which defines tables, structured storage for data, columns, which define what each record holds, and relationships, how records are linked.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=50)** Let's look at the few relationship types.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=53)** We have one-to-one.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=54)** For instance, a student has one place of birth.
>
> **[0:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=58)** We have one-to-many relationships, which would be a college has many students, and we have many-to-many relationships, a subject has many students and the student has many subjects.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=73)** To design relational databases, we use entity relationship diagrams, ERDs.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=80)** These visually present how data connects.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=83)** For example, in our hiking app, a trail can pass through multiple villages, a village can have multiple trails, and a trail can have many points of interest.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=95)** When designing databases, you often face philosophical questions like, is a hotel always in a village?
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=102)** Or should a trail be directly linked to a hotel?
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=105)** Or can a point of interest belong to multiple trails?
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=109)** These are kinds of decisions you must make when structuring your data.
>
> **[1:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=113)** Unlike one-to-one or one-to-many, m-to-n relationships, many-to-many relationships can't be directly stored in relational databases.
>
> **[2:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=123)** Instead, we use join tables.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=126)** For example, in our hiking app, we introduce Trail2Village, which links trails to villages, and we introduce Trail2PointOfInterest, which links trails to point of interest.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=140)** This structure allows us to efficiently manage complex relationships in relational databases.
>
> **[2:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=146)** Poor database design can lead to data inconsistency.
>
> **[2:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=149)** Take this example.
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=151)** The first issue is that we have duplicated address entries for Sina Patel, and also Tom Smith's data would be lost when no subject would be assigned to them.
>
> **[2:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=161)** This is where data normalization comes into play, and this is a science of its own, but at its core, it's about separating data into related tables to avoid redundancies and ensure that you only have to change data at one place.
>
> **[2:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=179)** For instance, we could create a teacher table, which stores teacher details, and we could create a subject table which stores subjects and links to teachers via TeacherID.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=191)** So these are the relationships I talked about before, and we would have a Foreign Key: Subject.TeacherID to Teacher.ID.
>
> **[3:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=199)** So we would basically define something that is called a foreign key between those two tables.
>
> **[3:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=205)** One important feature of relational databases is that they ensure data reliability using the ACID principle.
>
> **[3:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=213)** And ACID stands for atomicity, so transactions are all or nothing, consistency, the database stays valid after each transaction, isolation, which means that simultaneous transactions don't interfere with each other, and durability, once committed, data is permanently stored.
>
> **[3:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=233)** For example, let's take a PayPal transaction.
>
> **[3:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=238)** So Mary sends $2,000 to Tim.
>
> **[4:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=241)** The database will then start the transaction.
>
> **[4:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=244)** It withdraws $200 from Mary and adds it to Tim.
>
> **[4:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=249)** If anything goes wrong in this process, the transaction is rolled back, ensuring no partial updates.
>
> **[4:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=255)** If successful, the transaction is committed, permanently saving the data.
>
> **[4:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=261)** This prevents issues like double spending or inconsistent records.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=266)** So let's look at the landscape really quickly in the open source space, MySQL and Postgres are still dominating the space, but we also have commercial offerings like Oracle, IBM Db2, and Microsoft SQL Server.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=282)** And there are also other offerings that are now coming in, well, all the cloud providers, but they have at its core very often something like MySQL, Postgres, or any other database system under the hood.
>
> **[4:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=296)** Relational databases are powerful, but the rigid schemas aren't always the best fit for modern, fast-changing applications.
>
> **[5:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=304)** That's where so-called NoSQL databases come in.
>
> **[5:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-relational-databases?u=76281980&t=308)** Let's explore them next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[Relational Databases]] (8), database (5), [[Databases]] (3), [[MySQL]] (3)
> **Analogies:** for example (3), for instance (2), imagine (1)
> **Definitions:** is a  (2), is called (1), stands for (1), means that (1)
> **CLI Commands:** mysql (3), make (1)
> **Env Vars:** acid (2), ibm (1), sql (1)
> **Speakers:** - [instructor] (1)

#### Understanding document databases
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=0)** - [Instructor] In the early 2010s, new class of databases, so-called NoSQL databases gained popularity.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=6)** These include document databases like MongoDB, CouchDB, or Couchbase, key value stores like Redis or DynamoDB, column stores like Cassandra or ClickHouse and graph databases like Neo5J.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=21)** Even though NoSQL databases have been around since the 1960s, they became widely used within this whole Web 2.0 movement due to the need for more scalable or more flexible data storage.
>
> **[0:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=35)** So how is NoSQL different to relational databases?
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=40)** Unlike relational databases, and I think that's the most important distinction in the end, NoSQL databases don't enforce integrity rules through relations.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=53)** They're also not necessarily ACID compliant, though some support transactions, and they're usually schemaless, which means that there is no predefined structure.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=64)** Without the schema, data structure management moves into the application.
>
> **[1:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=68)** Your app is responsible for ensuring consistency rather than the database enforcing it.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=74)** So let's revisit our teacher subject example.
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=77)** In a relational database, we'd have a teacher's table, a subject's table, and a joint table linking them.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=84)** With a NoSQL database, like for instance, MongoDB, we can store everything in one document.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=90)** You see it here on the right.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=91)** So now we have the student and all the subject of the student in a nested structure within this whole document.
>
> **[1:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=100)** This means instead of having multiple tables, we can embed data directly into the document.
>
> **[1:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=106)** So why is this useful? We don't need joins anymore.
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=109)** So everything is in one place.
>
> **[1:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=111)** It supports faster reads because you don't have to fetch data from multiple tables.
>
> **[1:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=116)** And it also allows atomic updates.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=119)** Even though MongoDB doesn't support full transactions, updating a single document is still atomic.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=126)** In this course, we will also use Redis, which is a key value store.
>
> **[2:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=130)** And unlike document databases, Redis stores data in simple key value pairs.
>
> **[2:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=136)** So what does this mean?
>
> **[2:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=137)** This means that you set some value on a key, like for instance, user or student, 123, subject:A:grade, and then you set the grade to C, and then you can easily retrieve this grade for this one student by just retrieving this key again.
>
> **[2:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=157)** And the benefit of that is that it's blazingly fast.
>
> **[2:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=161)** It's not super flexible.
>
> **[2:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=163)** You cannot build a whole database system with it.
>
> **[2:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=166)** But for such simple use cases, it's definitely faster and more lightweight than using any other database system.
>
> **[2:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=175)** So to sum this up, NoSQL databases offer flexibility and scalability, but they also shift responsibility to the application.
>
> **[3:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=183)** In this course, we will focus on MongoDB for document storage and Redis for key value storage.
>
> **[3:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/understanding-document-databases?u=76281980&t=189)** In the next video, we will finalize the theory part by discussing when to choose which database system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (8), [[NoSQL]] (6), database (6), data (5), [[MongoDB]] (4)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for instance (2)
> **Env Vars:** acid (1)
> **Versions:** 2.0 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Selecting the ideal database for your Node.js project
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=0)** - [Narrator] So there is this saying when all you have is a hammer, every tool looks like a nail.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=5)** And this is very true for any technology choice.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=9)** So let's start for good reasons why not to use document databases and rather use a relational database.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=17)** This is when your data is highly structured.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=19)** So if your data has a strict format, like a tax system, a relational database is built for that.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=26)** Also, if you really want to have strong data integrity, if consistency is critical at all times, like in financial transactions, relational databases enforce this better.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=36)** And also, if multiple applications are updating the same data, when different services modify the same dataset, relational databases still help prevent conflicts.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=47)** That also said, things are also changing.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=50)** Modern relational databases like Postgres now support JSONB, which is binary JSON, allowing them to handle semi-structured data as well and more efficiently.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=61)** So the choice isn't always black and white anymore.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=64)** Document databases shine in scenarios where flexibility and speed matter more than strict consistency.
>
> **[1:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=71)** So if you have unstructured or semi-structured data, think of product catalogs, user profiles, or IoT sensor data where every record might look different.
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=81)** Also, if you need high write performance, since document databases don't enforce strict schemas or relations, they write faster than relational databases, which is also a claim I have to say.
>
> **[1:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=94)** So it's not true for all cases.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=97)** Also, there is this claim that NoSQL databases are designed to scale horizontally, meaning you can distribute the load across multiple servers easily.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=107)** However, relational databases are also catching up in scalability with solutions like Postgres sharding and also with distributed SQL databases like CockroachDB.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=120)** So to sum this up, the gap between relational and document databases is getting smaller.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=126)** Many relational databases now support JSON storage by document databases like MongoDB offer transactions for stronger consistency.
>
> **[2:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=135)** Choosing the right database isn't about SQL versus NoSQL anymore.
>
> **[2:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=141)** It's about what fits your specific use case best.
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/selecting-the-ideal-database-for-your-node-js-project?u=76281980&t=144)** In this course, we will look at MongoDB, MySQL, and Redis and you will learn how to use them and then you can make your choice yourself because as so often, the answer to such questions is it depends.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), data (7), [[Relational Databases]] (6), database (3), [[PostgreSQL|Postgres]] (2)
> **Env Vars:** json (2), sql (2), jsonb (1)
> **CLI Commands:** mysql (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 3. MongoDB: Building Your Product Catalog

[↑ Back to Table of Contents](#table-of-contents)

#### Managing product data with MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-product-data-with-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-product-data-with-mongodb?u=76281980&t=0)** - [Instructor] In this chapter of the course, we will first create the infrastructure to even be able to connect to MongoDB and use the MongoDB connection in our application.
>
> **[0:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-product-data-with-mongodb?u=76281980&t=10)** And then we will use MongoDB to store our shop items because right now these are placeholders.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-product-data-with-mongodb?u=76281980&t=17)** An item has an SKU, a name, and the price, and also an array of text associated with it, which makes it a good fit for a document database.
>
> **[0:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-product-data-with-mongodb?u=76281980&t=28)** So stay tuned with me. We will get hands on right away.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), application (1), database (1)
> **Env Vars:** sku (1)
> **Speakers:** - [instructor] (1)

#### Setting up MongoDB with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=0)** - [Instructor] To set up MongoDB, we will use Docker to download and run a container.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=4)** You can skip this when you already have MongoDB installed on your system.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=8)** We installed Docker already in the previous video.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=11)** So first I make sure that Docker is running, and for that I'm clicking here on the Docker icon and I can see that my Docker instance is running.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=19)** Next, we are going to pull Mongo from Docker Hub.
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=24)** For that, I'm opening my terminal and there I first type docker pull mongo.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=34)** This will pull down, now, everything that is needed to run MongoDB in a container.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=42)** Might take a little bit.
>
> **[0:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=44)** And now we have to use this image to create the container for MongoDB.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=48)** And for that, I type docker run --name, so that's the name of this container, mongodb, and then I write -p, and there I do now this port mapping and then mapping the MongoDB default port, 27017, on my system to the default port of MongoDB where it's listening in the Docker container.
>
> **[1:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=79)** And this just means that we can basically use MongoDB just as if it was installed on our system.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=86)** And then add -d mongo to tell Docker which image to use.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=92)** Now I hit Return, and now I can test this by simply typing docker ps.
>
> **[1:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=100)** And we see we have a running MongoDB instance.
>
> **[1:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=104)** Depending on your operating system, the process might differ slightly.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=108)** If you run into issues, check Docker's documentation for your system.
>
> **[1:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=112)** If the container stops or Docker isn't running after reboot, you can start the container again with docker start mongodb.
>
> **[2:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=125)** Now MongoDB is running.
>
> **[2:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=127)** Keep in mind, for production environments, MongoDB setup can be more complex.
>
> **[2:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=131)** You'll need to consider configuration options like security storage engines, replications, and tuning file system and kernel settings for high load.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=140)** For now, this simple setup is perfect for a sample project.
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongodb-with-docker?u=76281980&t=144)** Next, we'll explore a user interface to work with MongoDB, MongoDB Compass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (14), next (2), hit (1), [[Security]] (1)
> **CLI Commands:** docker (14), mongo (3), make (1)
> **Prerequisites:** setup (2), set up (1), you'll need (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Exploring MongoDB with Compass
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=0)** - [Instructor] When working with databases, having a graphical interface can make things much easier.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=5)** For MongoDB, we'll use MongoDB Compass, a free tool provided by the creators of MongoDB.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=11)** So I will just search for MongoDB Compass and here we go.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=19)** And there you just have to download the version for your system.
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=24)** I already did that, so I can now start Compass.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=31)** And once it's started, you will see a screen like that and there I click on add new connection.
>
> **[0:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=38)** And there you already have the MongoDB default URL for local host, so this should all work, and I will just call it Course, so that's my connection for this course.
>
> **[0:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=52)** And then I will just click on save, and then I can connect to this database.
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=62)** Once you have connected, you'll see a menu on the left with system collections and any databases available on your MongoDB instance.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mongodb-with-compass?u=76281980&t=70)** You can use MongoDB Compass throughout this course to explore your data easily and visually, making it a great companion to your learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Databases]] (2), [[Search]] (1), database (1), data (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Introducing Mongoose
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=0)** - [Instructor] Ever since developers started working with databases, they've looked for ways to make database interactions easier.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=7)** Rogue theories can feel unnatural, especially when working with object oriented programming.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=12)** That's where object document maps or ODMs come in.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=17)** For MongoDB, the most popular ODM is Mongoose.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=21)** It lets us interact with our database using JavaScript objects instead of rogue theories, making our code cleaner and easier to manage.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=30)** Let's take a look at how this works.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=33)** MongoDB is schemaless meaning we can store anything inside a document, but in real world applications, we need some structure to avoid errors.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=43)** That's why Mongos introduces schemas.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=46)** They define fields and data types, validation rules, indexes, and also default values.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=54)** For example, here's a schema that defines a car.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=57)** Even though MongoDB doesn't enforce schemas, Mongoose now helps us to keep our data structured and predictable.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=64)** A model is what we use to create and interact with documents in MongoDB.
>
> **[1:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=69)** It's based on a schema and provides methods like save, find, and update.
>
> **[1:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=75)** We can even extend models by adding so-called custom methods, both at the instance and the the static level.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=83)** So we can add static methods that work on the model itself, or we can add instance method that work on specific documents.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=91)** And that's very handy because it kind of keeps the database logic and the database schema together, and you don't have to redundantly write the same working code over and over again when you know that you need some method on a schema all over an application.
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=109)** With great power comes great responsibility, and there are two common pitfalls to avoid.
>
> **[1:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=114)** First, don't mix business logic into your models.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=119)** A method like sell that updates inventory, creates an order and sends an email is too much responsibility for a model.
>
> **[2:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=128)** Keep models focused on the database interactions and really on the schema they need to operate on.
>
> **[2:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=136)** You should also be aware of the N plus one query problem because ODMs make interacting with the data so easy.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=143)** You can easily miss how many actual database queries you are causing.
>
> **[2:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=148)** For instance, if you query all cars and then populate their owners, this can mean that for 1,000 cars, you actually generate 1001 queries, one for cars, and one for each owner.
>
> **[2:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=159)** So you always have to make sure that the queries underneath are optimized.
>
> **[2:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=164)** You have to really understand the cause and effect of your database queries.
>
> **[2:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-mongoose?u=76281980&t=169)** So now that we have some basic understanding of Mongo's, let's jump right in because we will use it to implement our item management for shop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[MongoDB]] (4), data (3), [[Databases]] (1), [[Programming]] (1)
> **CLI Commands:** make (3), find (1), mongo (1)
> **Analogies:** for example (1), for instance (1)
> **Env Vars:** odm (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Setting up Mongoose and connecting it to MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=0)** - [Instructor] Now that we have covered why we are using Mongoose and how it simplifies working with MongoDB, let's bring it into our project.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=7)** For that, I have already opened the sample project we set up during the intro.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=12)** First we need to install Mongoose, so we open the terminal by clicking on Terminal, New Terminal, and there, I simply type npm install mongoose.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=27)** This installs Mongoose and adds it to our project.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=30)** It also installs the native MongoDB driver it uses under the hood.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=34)** To connect our fast for application to MongoDB, we are using a Fastify plugin.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=40)** A plugin in Fastify is a reusable module that adds functionality to our application.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=46)** For example, in this case, the mongoose plugin will handle connecting to MongoDB.
>
> **[0:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=52)** Our project already contains a scaffold of this plugin, but let's follow the track or the trace to see how this whole plugging loading works.
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=62)** So I open first SRC, and there you have the server.js file.
>
> **[1:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=69)** And when you look at that, you see that we are importing a lot of plugins.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=73)** And right on top, I'm importing here in line 5, the mongoose plugin.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=78)** Now when I scroll down, it's around line 31.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=83)** You see that I'm using Fastify.register and then I pass in this mongoose plugin to register it.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=91)** But you also see that we are passing in config.MongoDB.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=95)** So there is some configuration going on.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=97)** And this follows a good practice that says we should not hard code connection URIs or credentials into our code, but put it into some kind of configuration or to environment variables.
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=110)** So in my case, we are using config MongoDB and when I scroll up I see that we are importing config from config/index.js.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=120)** So let's open this file.
>
> **[2:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=122)** Now in this file you see that we are yet missing this MongoDB property.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=126)** So I'm now adding the configuration for our MongoDB connections.
>
> **[2:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=131)** So I write MongoDB, and in there I will first define the URI.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=142)** So the URI is the connection string to MongoDB.
>
> **[2:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=147)** And there I write MongoDB://local host and I pass in the port.
>
> **[2:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=156)** So this is the port, our docker container is listening on.
>
> **[2:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=160)** And then I also pass in the name of the actual database in our MongoDB server.
>
> **[2:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=166)** And I call it simpleshop because that's the name of our project and I save it.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=171)** And the interesting thing about MongoDB and Mongoose is that if we have the right permission on the server, it will create this database for us on the fly.
>
> **[3:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=180)** So we don't have to manually create it.
>
> **[3:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=184)** What I will also do is I will add some options.
>
> **[3:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=189)** So I add a property options, and there I pass in serverSelectionTimeoutMS
>
> **[3:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=203)** and I pass in 3000 for 3 seconds and I will explain it to you what it does in a moment.
>
> **[3:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=210)** Next, I pass in socketTimeoutMS and I also set it to 3000 milliseconds, which is 3 seconds.
>
> **[3:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=223)** So what this does is it tells the MongoDB driver to error out when it cannot connect to MongoDB within 3 seconds.
>
> **[3:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=233)** This is important because plugins, so the plugin loader can also time out.
>
> **[3:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=238)** This is important because also the plugin loader of Fastify has a timeout and if we cannot connect to MongoDB, the timeout of the plugin loader will come first and then we get the error message that is usually very hard to understand because it just tells you that the plugin has timed out.
>
> **[4:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=258)** With that, we will get an error from MongoDB in time.
>
> **[4:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=262)** And I added this because during preparation I had the MongoDB server listening on the wrong port, and all I got was plugin timeouts and it took me a long time to figure out what the cause was.
>
> **[4:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=274)** With these options, this cannot happen to you.
>
> **[4:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=277)** So now let's head back to server.js and let's follow the trace further.
>
> **[4:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=285)** Here, as I said before in line 5 I load in the plugin.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=289)** So now let's head into this plugin and please read up on fast web plugins if you want to learn really more.
>
> **[4:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=296)** For now, all you need to know is that this function is being executed when your Fastify app is ready and right before it starts accepting requests.
>
> **[5:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=305)** So this plugin now is just a blueprint.
>
> **[5:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=307)** We are not yet connecting to MongoDB, but we will do this now.
>
> **[5:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=311)** So the first thing I'm going to do is I'm writing import Mongoose from Mongoose.
>
> **[5:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=320)** So I'm bringing in the Mongoose module.
>
> **[5:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=324)** Now in line 5 you see that we have something called mongoStatus in here and it's set to disconnect it.
>
> **[5:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=331)** And then you see in line 9 that we are using fastify.decorate to define Mongo status.
>
> **[5:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=338)** And it's the function that again returns Mongo status.
>
> **[5:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=342)** So what does this do?
>
> **[5:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=343)** This is just because on our front page of the shop, we will have a little dashboard that will show us the connection status of our databases.
>
> **[5:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=353)** And this is just a function to make this status available to other plugins.
>
> **[5:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=358)** And when we now real quick look into default.js, because that's the plugin that sets all the default values, you will see that we are setting an object called statuses on reply locals and reply locals is automatically available to our templates during render.
>
> **[6:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=377)** And when I scroll down further, you see that that we have a status object for Mongo, MySQL and Redis.
>
> **[6:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=383)** As I said, this is just for our little dashboard in our shop.
>
> **[6:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=387)** In a regular application you might not need that, but you will see what it does in a second.
>
> **[6:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=392)** Now let's set back to the plugin and finally finalize that.
>
> **[6:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=397)** You see this to do in line 11 here we are now adding the code to connect to MongoDB.
>
> **[6:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=404)** And for that I first add a try catch block, try catch.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=412)** We get an error here and in the trip block I will now add await mongoose.connect.
>
> **[7:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=423)** And now I pass in config.uri and config.options right from our options object that we pass in in line 4 when we call the function in register.
>
> **[7:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=440)** Then we can set the mongoStatus to connected.
>
> **[7:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=448)** And next I'm doing a log line by using the builtin login framework in Fastify.
>
> **[7:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=455)** So you can simply add Fastify.log.info and I write Connected to MongoDB.
>
> **[7:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=471)** If there is an error, I write, let's copy this log line here, fastify.log.error, error connecting to MongoDB.
>
> **[8:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=488)** And if this happens, I'm going to throw because it does not make sense to continue running this application if we cannot connect to the database.
>
> **[8:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=496)** So I'm throwing here and this would terminate our application.
>
> **[8:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=501)** Now finally, I want to do one more thing.
>
> **[8:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=503)** I want to use the on close hook in Fastify that will be called when the application is terminated.
>
> **[8:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=512)** And there I want to gracefully close the MongoDB connection.
>
> **[8:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=516)** So add await mongoose.connection.close,
>
> **[8:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=524)** and I will also do logline fastify.log.info
>
> **[8:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=533)** and I write Connection to MongoDB closed.
>
> **[9:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=543)** So this should be it. Now let's start our application.
>
> **[9:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=547)** And for that I'm doing npm run dev in the terminal and we are using Nodemon.
>
> **[9:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=553)** Let's open packages real quick to show you that.
>
> **[9:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=556)** So here, dev, you see we are using Nodemon, and Nodemon is a module that will automatically reload the app whenever we save a file.
>
> **[9:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=565)** So this is really helpful because then we don't have to restart the server manually all the time.
>
> **[9:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=570)** So I'm doing npm run dev. Let's see if we get an error.
>
> **[9:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=575)** We don't. Let's see if we see the connection, yes.
>
> **[9:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=579)** So here you see connected to MongoDB.
>
> **[9:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=582)** So we successfully connected to MongoDB and I'm now very excited to look at our sample shop.
>
> **[9:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=589)** So I'm going into the browser and I'm opening local host 3000 and there you see it.
>
> **[9:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=596)** So the shop is running and we also see this connection status of MongoDB.
>
> **[10:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=602)** So this all now works.
>
> **[10:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=604)** Now we have a robust way to manage the MongoDB connection.
>
> **[10:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mongoose-and-connecting-it-to-mongodb?u=76281980&t=608)** In the next step, we will define our first schema and interact with the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (28), application (7), database (4), [[npm]] (3), next (3)
> **CLI Commands:** npm (3), mongo (3), make (2), docker (1), mysql (1)
> **File Paths:** server.js (2), config/index.js (1), default.js (1)
> **Code Identifiers:** mongostatus (2), serverselectiontimeoutms (1), sockettimeoutms (1)
> **Tools:** terminal (4)
> **UI Navigation:** scroll down (2), open the (1), scroll up (1)
> **Env Vars:** uri (2), src (1)
> **Definitions:** is a  (2), is an  (1)

#### Building a model for our products
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=0)** - [Instructor] Now that we've connected our fast app to MongoDB using Mongoose, it's time to define a model for our products.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=7)** Models in Mongos are how we start to interact with data in MongoDB.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=12)** Each model represents a collection in the database and it defines the schema, the structure of the data we want to store.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=21)** Collections are very similar to tables in other databases.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=25)** We will create the model called item, which will represent products in our system.
>
> **[0:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=32)** So let's start doing that.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=33)** So I'm going into src for source, and there you see already there is a folder, models, and there is already a folder, Mongoose.
>
> **[0:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=41)** And in there I now create the new file, Item.js.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=46)** I use in uppercase for the I.
>
> **[0:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=49)** The first thing I have to do now when I want to define a model is to import Mongoose.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=54)** So write import mongoose from mongoose.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=60)** And now I start with the actual schema definition.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=64)** For that, I write const ItemSchema equals new mongoose, so this is a function on mongoose, .schema.
>
> **[1:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=79)** And this function takes first an object with the actual schema definition.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=86)** So I add curly brackets and so which properties do I want on a product?
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=93)** First the SKU.
>
> **[1:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=94)** The SKU is a unique identifier for each product.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=98)** So I write first SKU and then I start writing type.
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=105)** And this is the data type of this field and it should be a string.
>
> **[1:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=112)** Then I want this to be required because obviously, each product needs this unique identifier, so I set this to true.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=120)** Then I want to define an index and we have a dedicated video on indexes later, but I am now defining this index because I want this SKU to be unique because there should not be two products with the same SKU.
>
> **[2:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=136)** So write unique, true.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=140)** This defines a so-called unique index.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=143)** What else does the product have?
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=144)** It has a name, so I write name and there I set the type also to string and it should also be required because it makes sense to have a name for our products.
>
> **[2:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=160)** Then I will also define a price, and a price is usually a number.
>
> **[2:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=167)** So I write type number, and it should also be required because also each product should have a price.
>
> **[2:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=176)** If I create now product that has no SKU, no name, or no price, Mongoose will produce an error and this is exactly what I want.
>
> **[3:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=184)** I want Mongoose to ensure that the data that I want to store is consistent.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=191)** And then I have one more thing and it's tags.
>
> **[3:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=194)** Tags should be something like categories on my product and one product can be in multiple tags.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=201)** So to do that, I will now again pass in an object that defines this property.
>
> **[3:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=208)** And as a type, I will now define an array because it should be an array of strings for our categories.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=220)** And I do this by writing string in these square brackets.
>
> **[3:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=224)** And this is also a specialty of such document databases.
>
> **[3:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=229)** I can very easily define such rather deeply nested structures within one record.
>
> **[3:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=237)** And I want to set the default value here.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=240)** So if we don't define tags, it's not mandatory.
>
> **[4:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=244)** It should be just an empty array.
>
> **[4:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=248)** The next thing I'm going to do is I will pass in another argument.
>
> **[4:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=251)** So the first argument was now the schema definition.
>
> **[4:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=254)** Now passing another argument to this function, and this is now options.
>
> **[4:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=261)** And what I want to define here is timestamps.
>
> **[4:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=265)** And I set it to true.
>
> **[4:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=268)** By doing that, Mongoose will automatically create this created ad and update it and timestamp for each record it creates.
>
> **[4:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=276)** Finally, we need to really create this Mongoose model and also export it.
>
> **[4:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=281)** For that, I will now write export const Item
>
> **[4:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=290)** equals mongoose.model.
>
> **[4:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=297)** And there is first argument passing the name of the model.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=301)** It's item and this will then also be used for the name of the collection in MongoDB, and then I pass in the actual schema, the item schema we just defined.
>
> **[5:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=313)** Now this model is ready to use, but we have not loaded it anywhere.
>
> **[5:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/building-a-model-for-our-products?u=76281980&t=318)** And in the next video, I will show you how to make this model available throughout our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (8), [[Microsoft Products|Products]] (4), data (4), [[MongoDB]] (3), [[Databases]] (2)
> **Env Vars:** sku (6)
> **Definitions:** is a  (3)
> **File Paths:** item.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Integrating the model into our application
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=0)** - [Narrator] As I said, we need to make this model we just created now accessible in our Fastify application.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=6)** To do that, we will update our Mongoose plugin.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=9)** So I open that.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=11)** It's in source, plugins, databases, mongoose.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=16)** The goal is to attach the item model to the Fastify instance so that it's available throughout our app.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=22)** The best way to do this in Fastify is by using decorators.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=25)** Decorators allow us to add properties or methods to the Fastify instance, making them accessible everywhere in the application on the Fastify object that is as you also see on line four, always passed around through all our plugins that we're using, and routes are also basically plugins.
>
> **[0:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=44)** In other frameworks, you might simply import the model wherever it's needed.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=48)** This works in Fastify, too, but it's not a deal for a modular setup.
>
> **[0:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=52)** Using decorators ensures a consistent way to use your models throughout your application.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=59)** So what I'm doing now right on top is I will import the item model.
>
> **[1:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=65)** So I add import.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=67)** In curly brackets, I want the item property, from, and it's one, two levels up, models/mongoose/Item.js.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=83)** And now we'll save.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=84)** And when we now save, we will see if we have any error in our model like syntax errors.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=90)** So let's save and this looks good so far.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=93)** So we have no error yet.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=95)** And what I will do next is I will now decorate the Fastify object.
>
> **[1:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=99)** And we had this before already.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=101)** You see this here in line 10, the fastify.decorate for the mongoStatus.
>
> **[1:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=104)** That was pretty much the same.
>
> **[1:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=106)** So in this case, we created Fastify.mongoStatus, and when we now write somewhere, maybe after the connection is done and I write fastify.decorate, and the first argument is the name of the property.
>
> **[2:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=129)** So it should be fastify.item.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=132)** And the second argument is then the actual object item.
>
> **[2:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=138)** With that, the model is now available throughout your app as fastify.item.
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=144)** And here's something important to note.
>
> **[2:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=147)** The item model automatically uses the mongoose connection we set up in this plugin.
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=152)** When we define the model using mongoose.model, it's tied to the global connection managed by Mongoose under the hood.
>
> **[2:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=159)** This is an easy detail to miss since we don't explicitly pass the connection to the model.
>
> **[2:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=164)** It looks like magic, but it's actually one of the ways Mongoose simplifies database handling for us.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=171)** Soon we'll use this setup to build routes for creating, reading, updating, and deleting products in our database.
>
> **[2:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=179)** But first I want to show you now how this looks like in MongoDB Compass because you will see that something has changed there now.
>
> **[3:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=188)** So when I now go into MongoDB Compass and up here on this course connection, click on refresh databases.
>
> **[3:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=197)** You see that, as I said before, the database simpleshop was already created for us.
>
> **[3:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=204)** And if I click into this further, I also see that there is this items collection or table already ready for us.
>
> **[3:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=212)** And you also see that Mongoose will do pluralization.
>
> **[3:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=215)** So we called this object item, but then Mongoose figures that out and calls the corresponding collection items.
>
> **[3:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/integrating-the-model-into-our-application?u=76281980&t=227)** You can leave Compass now open because we will use it right away to populate the items collection with some data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), database (3), [[Databases]] (2), [[MongoDB]] (2), next (1)
> **Prerequisites:** setup (2), set up (1)
> **Code Identifiers:** mongostatus (2)
> **File Paths:** models/mongoose/item.js (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Populating MongoDB with sample data
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=0)** - [Instructor] To test the application and demonstrate queries, we need some data in our database.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=4)** This is why we'll now populate MongoDB with sample data.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=9)** We will load our sample data into the items collection using MongoDB Compass and I have it already open.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=17)** So in simpleshop on items, I now click on Documents and they're on Add Data.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=26)** And there I can now select input JSON or CSV file.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=30)** So I click on that and the exercise files actually already contain a file for the sample data.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=37)** So I'm now on my desktop and here I have the project folder.
>
> **[0:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=41)** I click on it and here there is this folder sample-data.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=45)** And there I have the sample-items chosen.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=48)** I click on it and I click on Select.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=53)** Then I click on Import.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=55)** Now you see we imported 47 items.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=59)** As I'm from Austria, I took the freedom to use AI to let it create just a set of somewhat typically Austrian products like the Mozartkugel or a Schnitzel, and Apfelstrudel.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=73)** So you see it here.
>
> **[1:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=75)** So each product has an id.
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=77)** This id is provided by MongoDB directly.
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=81)** So this is the unique id that is always on any MongoDB object.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=86)** It has the name, it has the price, it has an array of text.
>
> **[1:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=89)** So I can click on that.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=91)** And you see that the Sachertorte, which is a cake, has food, dessert, and chocolate on it.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=97)** And that's accurate.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=98)** So this is a chocolate cake.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=101)** And you also have the sku.
>
> **[1:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=103)** And the sku is also just a random number and I deliberately did not use 123, but something that looks more like a real sku.
>
> **[1:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=114)** And that's it.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=115)** We have now populated our database with sample data.
>
> **[1:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/populating-mongodb-with-sample-data?u=76281980&t=118)** In the next step, we will learn how to query this data directly from application to display it in our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[MongoDB]] (4), application (2), database (2), [[JSON]] (1)
> **UI Navigation:** click on (7)
> **Env Vars:** json (1), csv (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Querying items with Mongoose
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=0)** - [Instructor] Before we start writing database queries, let's quickly take a look at how our shop page is rendered.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=7)** So I opened the browser again with a sample application and when I click on shop, you see that we have a list of placeholder items there already, and you also see that we have text there and some add to basket functionality.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=21)** So this is all there.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=22)** So there has to be already some logic there that takes care of that, right?
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=27)** And if I now look into Visual Studio Code, I can first look into the views directory and in views, you will find the file shop.ejs.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=39)** EJS is a template engine used with nodejs and it lets you basically use a JavaScript like syntax.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=47)** And what this template does, it serves as a rendering template for our data.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=53)** And when I scroll down, you see that we have here, starting in line 15, a list of text that we iterate over and further down, we also iterate over the items and when I go further down, somewhere there, yeah, you also see the pagination.
>
> **[1:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=68)** So this is basically to have a page switch.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=70)** If there are more than like 10 products, then we can page through these items.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=78)** So where is this rendered, or how is this rendered?
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=81)** This is rendered through the shop route.
>
> **[1:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=85)** So I have here, directory with routes.
>
> **[1:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=89)** This contains all the routes that we have in our system, also the admin routes that we will use later.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=97)** These routes are registered in a plugin.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=101)** So when I go into the plugins folder, you will find file routes, JS, and there, you see I'm importing all those routes and then I'm registering it.
>
> **[1:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=112)** And if you come from express, that now looks very much like middleware because we set the prefix, like in line 14 for slash shop.
>
> **[2:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=122)** So every time we call anything with slash shop, the shop routes handler is being called.
>
> **[2:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=128)** So now let's look into the shop routes handler.
>
> **[2:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=131)** So it's in route shop.js and a route in fastify is basically also a plugin.
>
> **[2:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=139)** You see that it gets fastify as an argument, and we will use this object in a second.
>
> **[2:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=145)** And then you see that we already have routes defined, which basically just render the sample data right now.
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=152)** So there is this get route which has an optional tag property for the tag filtering that we will do in a little bit.
>
> **[2:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=161)** But right now, all I want to do is I want to query all items and display them on the page.
>
> **[2:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=168)** And I also want to query already a list of texts.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=171)** On line four, you see that we are getting the current page and also the page limit via request query.
>
> **[2:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=178)** So this is the query string and on line five, we get the current tag by request params.
>
> **[3:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=184)** So that is the optional argument we have here in the route definition.
>
> **[3:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=189)** The first thing I'm going to do now is, I will remove these placeholder items, starting with line six.
>
> **[3:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=197)** And this goes down to also the pagination implementation because we will use the database data then to do the pagination.
>
> **[3:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=208)** So we will delete everything, down to line 44.
>
> **[3:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=212)** Now we basically have an empty stop and here, we will now start implementing our database logic.
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=219)** And the first thing I will do, I want to query all items in a paginated way.
>
> **[3:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=224)** So I start with writing const all items, equals await fastify dot item.
>
> **[3:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=239)** And if you remember, this is exactly what we decorated on the fastify object before.
>
> **[4:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=244)** So this now holds our MongoDB Mongo's item, and this gives us access to the data in this database collection.
>
> **[4:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=256)** And in our case, now, I want to call find, so I want to find records.
>
> **[4:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=263)** This is a function and a pass in an empty object.
>
> **[4:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=268)** This object can, of course, contain a query that selects records by some criteria, but if it's empty, it will lead to Mongo to be returning all the records in this database collection.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=282)** And now we want to add the pagination.
>
> **[4:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=285)** And for that, I add skip.
>
> **[4:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=287)** So this tells now, Mongos, to skip a set of of records.
>
> **[4:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=292)** In this case, it's page minus one times limit.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=298)** If this is unclear to you, just play it through.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=301)** Let's say you are on page one or on page two and just do the calculation.
>
> **[5:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=306)** So this skips over records, means page two would mean, skip the first 20 records.
>
> **[5:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=312)** And then we also do a limit because we also want to then show a number of records after the skipped records.
>
> **[5:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=321)** And in this case, this is the limit that we have and like, the default here is the limit is 10 and the page it starts is one.
>
> **[5:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=329)** This should show us the first 10 records if nothing is passed in.
>
> **[5:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=335)** So with that, we are already varying items.
>
> **[5:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=337)** Next, I will also want to already populate the tax list in our template for that ad.
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=345)** Const text equals await.
>
> **[5:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=352)** Enter, again, use fastify dot item.
>
> **[5:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=356)** And on that, I now just call dot distinct.
>
> **[6:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=360)** So distinct gives us unique values of some property.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=367)** And this is text because, of course, tags are non-unique.
>
> **[6:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=372)** Each record can have the same tag in theory.
>
> **[6:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=376)** And with that, I just get a list of unique values from all the tag arrays that we have on all our records.
>
> **[6:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=386)** Next, I also now have to do the calculation of how many pages should there be.
>
> **[6:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=393)** Actually, I need this to then render this paging list so that I can switch through the pages.
>
> **[6:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=398)** So I write const total pages, equals math dot ceil, and in there, I call await fastify dot item.
>
> **[6:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=418)** And there, we have a convenience function that is simply called count documents.
>
> **[7:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=424)** So this is provided by Mongos, and it gives us the number of documents in this collection.
>
> **[7:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=431)** And in the end, I want to divide this by the limit because yeah, that's basic math, right?
>
> **[7:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=439)** If you want to get the number of pages, you have to count the documents and then divide it by the limit and round it up with math seal.
>
> **[7:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=447)** Finally, I also have to make sure that I'm now passing all this data to the template rendering.
>
> **[7:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=454)** So this is in reply point view.
>
> **[7:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=457)** Let's look that we don't miss anything.
>
> **[7:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=459)** So the title is shop, so that's just the title of the page.
>
> **[7:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=462)** Then the current path, this is just used to highlight the right menu item in the top menu.
>
> **[7:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=468)** And as items, I will now pass in all items.
>
> **[7:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=475)** So this is the items that we now got from the database, the tags, that's the tag we got via distinct.
>
> **[8:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=482)** The current page can stay as it is, and total pages, we just calculated that so I can remove this calculation that was based on the sample data before, and it can just pass in total pages.
>
> **[8:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=494)** I hope this makes sense to you.
>
> **[8:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=495)** So technically, it's the same as writing this.
>
> **[8:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=500)** But we can just leave the property, so this automatically translates to total pages equals total pages, so the property's set to the value.
>
> **[8:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=510)** And we also set the current tag down there.
>
> **[8:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=513)** This is used to later, then, highlight the currently selected tag.
>
> **[8:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=517)** Now if everything works, we should see the data from the database already in our shop.
>
> **[8:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=523)** So let's go back there and here, we'll just reload the page and let's see what happens.
>
> **[8:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=528)** Yes, that's exactly what I wanted to see.
>
> **[8:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=530)** So we have our very nice Austrian products here.
>
> **[8:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=535)** We also have this pagination here and that can switch through all the items here.
>
> **[9:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=540)** And we also already have the tags there.
>
> **[9:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=543)** But when I click on that, you see nothing really happens.
>
> **[9:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/querying-items-with-mongoose?u=76281980&t=547)** So the tag is passed via the route, so that already works, but no filtering is happening, and we will implement filtering tags in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), data (7), next (3), [[Microsoft Products|Products]] (2), application (1)
> **CLI Commands:** find (4), mongo (2), make (1)
> **Exercise Files:** template (5)
> **UI Navigation:** click on (2), scroll down (1)
> **Definitions:** is a  (2)
> **File Paths:** shop.js (1)
> **Env Vars:** ejs (1)
> **Cross-References:** next video (1)

#### Filtering items by tag
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=0)** - [Instructor] So when we click on a tag in the shop, we expect the page to update and show only items with that tag.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=7)** Right now, our shop page always queries for all items and it doesn't check for any filtering parameters.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=14)** To fix this, we need to modify our shop route to detect when a tag is selected and adjust the database query accordingly.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=21)** So let's scroll up here.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=23)** We're still in our shop route, and what I will do now is I will simply build a query dynamically based on the presence of the tag parameter.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=33)** So to do that, I will now in line six somewhere, add this query definition, so I write const query = an if tag, so that's a ternary syntax.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=50)** If tag is present, then I want to query tags with tag.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=57)** So this is basically how you query, and it's very simple as you see in MongoDB how you query data in an array.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=66)** So we have an array with tags, and one item can have several tags, and still we just can simply query the array by this one tag.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=78)** And if no tag is selected, I can again default to the empty query, which will give us everything.
>
> **[1:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=87)** Of course, we now have to pass this object in line nine to our find method, and everything else should actually stay the same.
>
> **[1:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=99)** So let's look into our shop and let's see if we now have tag filtering active.
>
> **[1:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=104)** For that, I now click on Accessory, and this looks good, right?
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=108)** So we have now really a proper list of text, but there's something that is odd here.
>
> **[1:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=117)** That's just three items, and I still have the whole pagination down there, so something is wrong here still.
>
> **[2:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=123)** So we head back to Visual Studio Code, and now what we also have to do, let's close the sidebar real quick, is we have to change this document count to also include this query.
>
> **[2:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=141)** Now we are counting only the documents that match this query.
>
> **[2:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=146)** Now when I head back to the page and now click on Baking, you see that the pagination is gone because there just not more than our default 10 items on the page.
>
> **[2:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=157)** Oh, here we have one, so for what is it?
>
> **[2:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=162)** For Traditional, we see that there are quite some, items more than 10, because Austrians are very good on traditions.
>
> **[2:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=174)** What I'm missing here now is the current tag, so let's see what's happening here because I was expecting that this is somehow marked here so that we see which tag is currently selected.
>
> **[3:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=186)** Let's go back.
>
> **[3:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=188)** Now let's look into the template, what's wrong here?
>
> **[3:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=192)** So I go to shop.ejs, and there, I scroll down to the tags, and let's see what I'm doing here in line 18.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=201)** So when the current tag matches, so we are on the right tag, I'm setting the caller to bg-primary.
>
> **[3:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=209)** bg-primary is the caller that comes from Bootstrap, that's the styling library I'm using, and I also set text-light, otherwise I set bg-primary.
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=219)** So that's not good enough.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=220)** We need a little bit more distinctive because we just did not see a difference here.
>
> **[3:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=226)** So what I will do, I will set this to bg-secondary, and I'll save.
>
> **[3:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=236)** Now let's head back to our browser and let's try it again.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=240)** I'm clicking on the tag.
>
> **[4:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=241)** Yes, that now works way better, so that's exactly what I wanted to see.
>
> **[4:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=247)** So in this video, we added tag filtering to our shop page, and now clicking a tag filters items based on the tags.
>
> **[4:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=254)** The active tag is also shown beautifully in the UI, and pagination adjusts to match the filtered results.
>
> **[4:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/filtering-items-by-tag?u=76281980&t=262)** In the next video, we will now look at managing items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1), [[MongoDB]] (1), data (1), next (1)
> **UI Navigation:** click on (3), scroll up (1), go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Item administration: Listing and loading
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=0)** - [Instructor] In the next set of videos, we are building a fully functional admin page for managing items using MongoDB.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=7)** We will learn how to create, read, update, and delete documents from MongoDB.
>
> **[0:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=13)** In database terms, this is called CRUD and it's part of any serious data-driven application.
>
> **[0:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=20)** So let's click on manage items.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=23)** And as you can see, the page is currently populated with sample data, but we see already what we have to do.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=31)** We want to list the items.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=33)** We want to be able to create an item.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=36)** We want to be able to load an item to update it.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=40)** And we want to be able to also delete an item, that's CRUD.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=45)** So for now, let's focus on fetching all items from the database and also displaying the edit form when we click on edit item.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=54)** For that, I'm heading into Visual Studio Code.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=57)** There are open source, routes, and in admin, there is the item route.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=63)** So this is the route that renders the page we just displayed.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=67)** And if you're curious about how the template might look like, you find it in views, admin, and there it's item EGS.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=78)** So let's stay in item GS, and there you see already that we have here.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=83)** Let's close the sidebar that we have this get route that will just list the items when we enter the item admin.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=92)** And we will now remove the placeholder data.
>
> **[1:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=96)** And what we want to do now is we want to load all items from the database.
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=102)** For this we won't use paging, so we will just fetch the items.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=107)** So how can we do that?
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=108)** You should already know this because this is completely similar to what we did before for the shop overview.
>
> **[1:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=116)** So I write const items = await fastify, and there on Fastify, as you know, we have item, which is the mongos model instance and there I call find and we pass in the empty object, which means we want to get all the documents from MongoDB.
>
> **[2:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=145)** As I said, no paging in this case just to keep things simple.
>
> **[2:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=150)** I'm going to save this now and head into my admin page again and reload it.
>
> **[2:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=158)** We already see the list of items along with this, so we have the SQ, we have the name, the price, and also the text associated with it.
>
> **[2:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=167)** Now let's click on edit item.
>
> **[2:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=170)** As you see, this is not functional right now.
>
> **[2:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=173)** We see sample data, but you see one thing, look at the URL up there.
>
> **[2:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=178)** This idea looks strange.
>
> **[3:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=180)** What you see here is the MongoDB object ID.
>
> **[3:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=185)** It's a unique identifier that every record gets automatically when it's stored in the database.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=191)** So instead of using something like the SQ, we use this ID because it's guaranteed to be unique and it's indexed by default and makes queries fast and we will talk about indexes in a bit, and it also prevents accidental conflicts between items, so for admin interfaces, I tend to prefer the object ID.
>
> **[3:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=213)** So let's head back into Visual Studio Code because we want to populate this form now to then be able to also update items.
>
> **[3:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=222)** So here I'm now going to scroll down and there should be a route somewhere.
>
> **[3:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=229)** Yeah, here it is.
>
> **[3:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=230)** So this route in line 38 gets the ID and loads it from request params in line 39.
>
> **[3:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=239)** And all we have to do now, and mongos really gives us here, we want to just load this item by ID and I will do this now, but just type const item = await fastify .Item and Mongos gives us this function.
>
> **[4:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=264)** Find by ID.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=266)** By ID.
>
> **[4:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=269)** And there are just passing the ID that we read from request params.
>
> **[4:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=276)** So if you wonder where we got this ID from, let's look into item HES real quick, so for the admin page, and when we scroll down, you see that the edit button reads this item underscore ID so this is how mongos gives us this property from MongoDB.
>
> **[4:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=295)** And if you are really curious, let's do that real quick.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=298)** I can also open MongoDB Compass and there you also see this underscore ID, so this is the object ID.
>
> **[5:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=309)** And as you know, we did not create it on the schema.
>
> **[5:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=313)** This is really created by default.
>
> **[5:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=315)** Each MongoDB document has it.
>
> **[5:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=319)** So now after updating our item chase file, I think we should be good to go so we are passing in the item here.
>
> **[5:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=330)** So what we also could do now is we could just also fetch the items.
>
> **[5:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=335)** You see it here, so here it's an empty array.
>
> **[5:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=337)** We could now fetch the items and we would see the item list on top of the form, but for simplicity reasons, I will leave it like that, and so also the page is cleaner, but it will also show a no items found message, which is a little bit confusing, but I think it should be clear what we are doing here.
>
> **[5:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=357)** So now let's head back into our browser and I go to manage items, and now let's click on the schnitzel.
>
> **[6:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=366)** So I click on edit item, and as you see, we are loading the schnitzel now.
>
> **[6:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=372)** So this is exactly what we want to have.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=374)** The next thing we want to do is we want to first find a way to create new items, and also use the form that you see right now to update items.
>
> **[6:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-listing-and-loading?u=76281980&t=387)** And while we edit, we will also add functionality to delete items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), database (4), data (4), [[Fetch]] (3), next (2)
> **UI Navigation:** click on (5), scroll down (2), go to (1)
> **Env Vars:** crud (2), egs (1), url (1), hes (1)
> **CLI Commands:** find (4)
> **Tools:** visual studio (2)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### Item administration: Create, update, and delete
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=0)** - [Instructor] In the previous video, we connected our admin page to MongoDB to list all items and to load an item for editing.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=8)** Now it's time to complete CRUD by creating, updating and deleting items in the database.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=14)** After this video we'll have a fully functional admin panel where we can add new items, modify existing ones, and remove item from our database.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=22)** Let's get started.
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=24)** We already have a form in our admin panel, but right now submitting it doesn't actually update the database.
>
> **[0:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=32)** So let's update our route to either create a new item or update an existing one based on whether an item ID is provided.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=42)** This is a very common pattern for database manipulation routes.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=46)** So let's look into this in Visual Studio Code.
>
> **[0:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=49)** And when I scroll down, here is this route.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=53)** So it's a post route because we are submitting a form.
>
> **[0:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=56)** And in line 15 we get the itemID, the sku, the name, and the price.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=61)** And also what I not have here, please follow along.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=66)** We also want to get the tags here.
>
> **[1:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=69)** So also let's close this sidebar.
>
> **[1:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=72)** So also, now we get the tags from request body.
>
> **[1:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=76)** In line 18 we have this condition.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=78)** So if the itemID is present, we have an existing item and we want to update it.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=86)** If the item ID is not present in line 21, we will create a new item.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=93)** So let's add this now.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=95)** The first thing I want to do is I want to parse the text because we now got a list of, a comma separated list of tags.
>
> **[1:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=104)** So this is how the form works, but if you remember the schema, tags is actually an array.
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=110)** So we can also look into MongoDB Compass and there you see, tags as an array.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=115)** And we also have to parse this comma separated list that we got, now into an array.
>
> **[2:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=121)** So that's pretty easy because all we have to do is we will now add const, parsed, Tags, equals, if there is tags, it's again a ternary function, tags.split, and we split it by the comma.
>
> **[2:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=145)** And then what we want to do is, because usually you do a comment, then you have a blank after that, right?
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=152)** So we want to then remove the blanks, if present.
>
> **[2:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=157)** So we add a map function here, that's functional programming for the win, because JavaScript has some notion of functional programming with map functions, tag.
>
> **[2:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=169)** And, for each tag, we run tag.trim.
>
> **[2:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=177)** And if there are no tags present, if there are no tags passed, we will simply make tags an empty array.
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=187)** So next I'm going to take care of creating new items.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=191)** So I'm starting in line 23.
>
> **[3:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=193)** So here I will just write, await fastify.Item.
>
> **[3:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=203)** Again our Mongo's item model, .create, and I can simply pass in an object now.
>
> **[3:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=212)** And this is again convenient because our properties are named the same way as they are on the model.
>
> **[3:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=217)** So I can just write sku, name, price, and then I pass in tags.
>
> **[3:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=228)** And tag is parsedTags, so I have to do it like that, parsedTags.
>
> **[3:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=235)** So again, sku, just adding this variable sku, would be the same as doing something like that, sku: sku.
>
> **[4:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=247)** And then we can write something, also, do some logging, fastify.log.info.
>
> **[4:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=256)** As I said before, fastify has logging built in and we can just write.
>
> **[4:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=263)** And there I'm using string interpolation, Created new item and ${name}.
>
> **[4:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=280)** And then I want to do one more thing because we also want to let the user know that this worked.
>
> **[4:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=286)** And for that I created some infrastructure on the app to show flash messages on the screen.
>
> **[4:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=294)** And you can simply create new messages that will then be displayed for the user one time, by writing request .session .set.
>
> **[5:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=308)** So I'm setting messages on the session, "messages" and there I pass in an array with one message.
>
> **[5:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=321)** And this message has a type, it's a success message, so it will be green then.
>
> **[5:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=327)** That's basically, this is from bootstrap, from the styling framework that they're using.
>
> **[5:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=333)** And then we write text.
>
> **[5:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=337)** And there we will distinguish if there is an itemId.
>
> **[5:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=341)** So if an itemId is present, I write "Item updated successfully", and if not, I write "Item created successfully".
>
> **[6:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=362)** So we put this on the session, then we redirect the user to admin item.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=367)** And as we have this text on the session, it will be displayed on screen just once.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=374)** And if you want to really know how this works, there is this session plugin.
>
> **[6:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=379)** So it's in plugins and there is session.js.
>
> **[6:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=382)** And this handles all the session management and we will have a closer look later.
>
> **[6:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=387)** But there you see that somewhere here, we're setting messages on reply.locals, so it's available for the template.
>
> **[6:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=396)** And then we also have a layout template down here as layout.ejs.
>
> **[6:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=402)** And somewhere there you will find, if you scroll down, scroll down.
>
> **[6:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=408)** Yeah there, you have the messages.
>
> **[6:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=410)** There you see when there are messages, they will be displayed to the user just once.
>
> **[6:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=415)** But this is just this basically a side note here because we want to deal with databases.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=420)** But you also should understand.
>
> **[7:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=422)** What we also could and should do, and we will start doing this now is, especially when you do operations on the database, it's already semi-important when you read data, but actually very important when you manipulate data where errors could occur, it makes definitely sense to put this into a try catch block.
>
> **[7:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=446)** So I'm doing this now.
>
> **[7:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=449)** try catch.
>
> **[7:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=451)** And so this logic, now everything of it goes into the try block, and in case there was an error, we can now also create the message.
>
> **[7:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=470)** And this is now an error message.
>
> **[7:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=472)** So write request.session .set, "messages" and square brackets.
>
> **[8:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=486)** And in there we pass in an object.
>
> **[8:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=489)** The type of this is now, "danger" and what do we want to tell the user, text, and the text should be, "Failed to save item".
>
> **[8:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=510)** And we can also do a log message to the console because we also want to see it in our log when things are going wrong.
>
> **[8:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=517)** So I write fastify.log .error "Error saving item".
>
> **[8:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=530)** Going to also redirect the user.
>
> **[8:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=533)** We can just copy the line from here, on line 35, and then copy it after line 40.
>
> **[9:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=541)** So now we should have a way to create new items and we're going to try this out now.
>
> **[9:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=548)** So I click on Manage Items and I scroll all the way down and I want to create the new item.
>
> **[9:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=555)** So it's 999999.
>
> **[9:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=557)** And I call it Wiener Schnitzel because that's the proper name.
>
> **[9:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=562)** It's not just a schnitzel, and it's actually, in Euros, it's pretty expensive.
>
> **[9:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=567)** So it will be around 24 Euros and it's obviously food, it's meat, that should be enough.
>
> **[9:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=580)** And now I click on Submit.
>
> **[9:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=584)** And again, Failed to save item.
>
> **[9:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=586)** So what happened here, as you might see, I used the same sku that we had already, and this now broke our unique index, so I cannot do that.
>
> **[9:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=596)** I have already a test item up there and this already uses this sku, so I need to do another sku.
>
> **[10:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=603)** So I do 123456, and it's again Weiner Schnitzel.
>
> **[10:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=610)** Wiener is the name of Wiener.
>
> **[10:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=613)** And Price, let's make it still 24.
>
> **[10:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=618)** And let's write Food and Meat. Let's try if it works now.
>
> **[10:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=624)** I click on submit and I get Item created successfully.
>
> **[10:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=628)** But you now saw, was already a unique index being enforced by MongoDB.
>
> **[10:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=635)** When I scroll down now somewhere down there I should get the Wiener Schnitzel, so that's exactly right.
>
> **[10:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=641)** Now when I click on Edit Item, I get this Wiener Schnitzel.
>
> **[10:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=645)** And then now, wants to change the price.
>
> **[10:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=647)** It got even more expensive.
>
> **[10:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=650)** We got a Michelin star, so it's now 28 maybe.
>
> **[10:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=653)** And to do that we have to head back into our Visual Studio Code.
>
> **[11:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=660)** And that's now, really easy what we are doing.
>
> **[11:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=663)** So if there is an itemId, I will now, use a very convenient function provided by MongoDB fastify .item, and I just say, findById AndUpdate.
>
> **[11:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=688)** And the first argument is the itemId.
>
> **[11:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=693)** And then I just, passing again the sku, name, the price, and the tags.
>
> **[11:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=713)** And of course I have to do an await here, and maybe let's do the log line, after.
>
> **[12:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=724)** So I'm awaiting, I'm using findByIdAndUpdate.
>
> **[12:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=728)** And there you see already, again, where it makes sense to use the Mongo DB object, the DB, because Mongo's gives us the convenience functions that are based on this Id like, update by Id, or load by Id, et cetera.
>
> **[12:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=743)** So now I'm saving, and let's see if we can now, change the price.
>
> **[12:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=747)** Let's make it 28.
>
> **[12:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=750)** And I click on Submit.
>
> **[12:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=752)** And I see Item updated successfully.
>
> **[12:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=755)** When I scroll down. I see, yeah.
>
> **[12:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=757)** Now Wiener Schnitzel is way more expensive again.
>
> **[12:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=762)** So the only thing that is missing now is deleting items.
>
> **[12:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=766)** And that's again, very simple and easy.
>
> **[12:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=770)** So let's head back into Visual Studio Code and complete this.
>
> **[12:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=774)** And there I just look for the delete route.
>
> **[12:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=778)** And here you see we get the item ID from request.params.
>
> **[13:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=784)** There, we already have this information that we are deleting this.
>
> **[13:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=788)** Then let's add a try catch block.
>
> **[13:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=790)** try, catch, and, and there we can just really look at the error handling we had before.
>
> **[13:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=806)** And I just copy this in now.
>
> **[13:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=808)** So here I will now write "Failed to delete item" and error message "Failed to delete item".
>
> **[13:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=818)** And in the try block, we again have this convenient function that is super simple.
>
> **[13:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=825)** I will write await, fastify .Item .findById AndDelete.
>
> **[14:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=840)** Now and I just pass in the Id.
>
> **[14:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=845)** And when I successfully deleted this, I will just lock this out to the user.
>
> **[14:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=853)** It's a success message and I write, "Successfully deleted item."
>
> **[14:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=867)** So now let's head back and we now want to delete this ugly test item here.
>
> **[14:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=874)** So I click on Delete Item, and I get Successfully deleted item.
>
> **[14:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=879)** Let's scroll down, and indeed it's gone.
>
> **[14:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=885)** So in this video we completed CRUD by adding the ability to create and update items.
>
> **[14:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=890)** We also did the proper handling of tags as a comma separated list and we also added the ability to delete items from the database.
>
> **[15:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=900)** Now our admin panel is fully functional.
>
> **[15:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=903)** In the next video, we will look into database indexes to make our operations and our database more fast and efficient.
>
> **[15:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/item-administration-create-update-and-delete?u=76281980&t=912)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), [[MongoDB]] (4), functional (2), [[Functional Programming]] (2), next (2)
> **UI Navigation:** scroll down (6), click on (6)
> **Code Identifiers:** itemid (6), parsedtags (2), findbyid (2), findbyidandupdate (1)
> **CLI Commands:** make (4), mongo (3), find (1)
> **Tools:** visual studio (3), notion (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** crud (2)
> **Cross-References:** previous video (1), in the next (1)

#### Optimizing queries with indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=0)** - [Instructor] Indexes are a key concept in any type of database, whether relational or non-relational.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=7)** They are like the index of a book.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=9)** If you're looking for something specific, the index helps you find it quickly instead of flipping through every single page.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=16)** In MongoDB, indexes make your queries faster, especially when working with large data sets.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=22)** They also let us enforce rules like uniqueness, and optimized filtering for sorting operations.
>
> **[0:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=29)** Right now and we see this among the big compass, we already have indexes in place.
>
> **[0:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=35)** So when I look now into the items collection, and click on the indexes tab, you see that we have an index, which is unique on this ID field we talked about.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=47)** This is the document ID that is given to us from MongoDB directly, and we also have a unique index SQ.
>
> **[0:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=56)** And if you remember that we defined this in the model.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=61)** So this unique index ensures that no two items can have the same SQ, and it also makes queries way faster because when I now look for an SQ, and it's on an unique index, MongoDB knows that it does not have to look further when it finds one document.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=80)** But we also have more theories that we could optimize by using indexes and we will do this now, and for that, I'm heading back into Visual Studio Code.
>
> **[1:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=88)** And there we have to now manipulate source, models, mongoose, and there the items schema.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=97)** So let's start with thinking about our use cases.
>
> **[1:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=100)** For example, we fill the items by text, and maybe eventually, we even want to search by name or sort by price.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=108)** Right now those operations aren't optimized.
>
> **[1:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=111)** MongoDB would have to scan the entire collection, which gets slower as the database grows.
>
> **[1:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=116)** So let's update the model to cover the tax use case.
>
> **[2:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=122)** We already use text to filter items like showing all items tagged as food or traditional.
>
> **[2:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=127)** And to make this filtering faster, we will now add an index to the tax field.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=132)** And this is very simple and easy.
>
> **[2:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=135)** We just have to define that index, now on the item schema, and I will do this now by writing item schema.index, and I pass in which index I want.
>
> **[2:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=153)** And there you could also define compound indexes.
>
> **[2:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=156)** For instance, when you tend to look for two fields all the time in the query, then it makes sense to create an index that combines those fields.
>
> **[2:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=165)** But in our case, we just want to create for tax.
>
> **[2:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=169)** And the next thing we add is the one.
>
> **[2:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=173)** And this actually has a meaning because if I would do minus one, it would sort descending, and with one it's sorts ascending.
>
> **[3:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=180)** The sorting order is important if we want to use an index for sorting operations.
>
> **[3:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=186)** Right now we are not doing sorting here, so we can just go with that.
>
> **[3:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=192)** But speaking of sorting, let's add a new index on the name
>
> **[3:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=202)** because why not implement alphabetic sorting on our items real quick.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=207)** And while we add that, there is a common use case also for every shop, and it's searching for things by string, by name.
>
> **[3:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=217)** In our case, we want to maybe search items by name.
>
> **[3:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=221)** So if a user for instance, type schnitzel in a search bar, we want to return everything that contains schnitzel, so the regular schnitzel or the wiener schnitzel that we created before.
>
> **[3:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=232)** So to support this we have to create a so-called text index.
>
> **[3:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=237)** So this is an index that supports text searches.
>
> **[4:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=241)** And these text searches are case insensitive, and support partial matching, like finding an all items with some fraction of a string in their name.
>
> **[4:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=253)** And here is how we add this text index to MongoDB.
>
> **[4:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=259)** I simply write items schema.index, and there I add a new index for name, and I call it text.
>
> **[4:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=277)** So this is how you create a text index in MongoDB.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=282)** So every time the application reloads, Mongoose will under the hood, make sure that the respective indexes are created in MongoDB.
>
> **[4:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=292)** And if you want to verify this, you can open MongoDB Compass again.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=298)** And there I now click on indexes again.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=301)** And there you see suddenly I have the index that we had already for SQ.
>
> **[5:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=306)** I have an index on text.
>
> **[5:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=308)** One regular index on the item name, but also a text index for the name.
>
> **[5:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=316)** In the next video we will now use these new indexes on name, and text to first also sort the items by name alphabetically.
>
> **[5:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/optimizing-queries-with-indexes?u=76281980&t=326)** And then we will also implement a very simple but working text search for items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (8), [[Search]] (4), database (2), next (2), data (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for instance (2), for example (1)
> **Cross-References:** we talked about (1), in the next (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Performing text search in MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=0)** - [Instructor] In this video, we are making our shop page even more powerful by adding search functionality.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=5)** And while we are at it, I will also show you how to sort items alphabetically.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=11)** Currently, we can filter items by text.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=14)** We saw this already.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=16)** So I can click on baking so it will filter by baking.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=19)** I can also clear the text, which will just load the page again.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=23)** And what we already have is the search functionality.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=26)** So I can, for instance, input schnitzel, but nothing will happen, but we see that there is now a query string up here in the browser.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=37)** So the form is already there, but our route is right now doing nothing with it.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=43)** In the previous video, we already created a text index for the item name and we will now utilize this index to do the search.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=53)** And as I said, we also want to sort items alphabetically.
>
> **[0:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=56)** And this is another use case now for the regular index that we have on the name field because it's also used for sorting.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=66)** That said, sorting will always work, but when you have a lot of data in your database, having an index on a property that you want to sort for makes a lot of sense and will make the application way more fast.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=80)** So let's get started.
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=81)** I'm heading into Visual Studio Code again.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=84)** And there, I will now again open src, go into routes, and we now need our shop route again.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=93)** And there we will now again modify the route that shows the index page.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=98)** And here, we know we have to expand the query creation that is here in line seven.
>
> **[1:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=106)** And we can say that we can either filter by tag or filter by some search query.
>
> **[1:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=111)** And to make this now work, I have to now extend what we take from request query by the argument q.
>
> **[2:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=121)** So q can optionally come from the query string.
>
> **[2:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=125)** And now we are going to modify how we are building the query.
>
> **[2:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=127)** We also have to get the search argument, so the form input from the request query string.
>
> **[2:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=134)** And for that, add the q.
>
> **[2:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=136)** So if question mark q equals or ampersand q equals is passed, it will be provided in this argument here.
>
> **[2:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=145)** And the next thing that I'm going to do is I write const query.
>
> **[2:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=149)** So I start out with an empty query by just adding an empty object.
>
> **[2:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=157)** Then I remove what we have in line nine, and now I'm building the query and I'm saying if we have tag, we are going to query the tags should be tag.
>
> **[2:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=174)** And if we have also the query string here, if q then query, and this is now important, dot dollar text.
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=187)** So this is the way to tell MongoDB to use the text index, equals, and here also the syntax is a little bit different because I have to say dollar search colon q and everything else can stay the same because this basically translate to when we pass this to find into regular JSON object that MongoDB can understand.
>
> **[3:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=216)** And I also promised you to add some sorting and we will do this right away, and it's very simple, because all I have to do is I have to, in this kind of pipeline, have to add dollar sort and I want to, and this is an object, sort by name and I want to sort it ascending and this will then default to sorting it alphabetically A to Z.
>
> **[4:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=246)** And as I said before, as we created an index under the hood, now MongoDB will use the index for that and it will be faster.
>
> **[4:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=253)** Obviously with just 42 or 47 records in the database, this will not show as a performance gain now in our application, but I want you really to know that this is important.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=266)** So that should be it. Let's head back to our shop.
>
> **[4:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=272)** Let's reload the page.
>
> **[4:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=273)** You see that we are sorting already alphabetically, so this is already working.
>
> **[4:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=278)** Let's see if the search for schnitzel works.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=282)** So I'll write schnitzel and let's use lowercase now and we see that it works.
>
> **[4:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=290)** I also saw something going on with Arnold Schwarzenegger, a most famous Austrian.
>
> **[4:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=296)** Yeah, there we have all the Arnold movie posters and the mug and the t-shirts.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=301)** So, "Hasta la vista, baby".
>
> **[5:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=304)** This now really works exactly as expected.
>
> **[5:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=309)** In this video, we enhanced our shop page with text search, allowing users to find items by name.
>
> **[5:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=315)** And we also added sorting, ensuring products are displayed alphabetically.
>
> **[5:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=320)** With this, we have completed our fully functional MongoDB-based application.
>
> **[5:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=324)** In the next video, we will wrap up this chapter with some advanced MongoDB concepts to take things even further.
>
> **[5:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/performing-text-search-in-mongodb?u=76281980&t=331)** See you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (8), [[MongoDB]] (5), application (3), next (3), database (2)
> **CLI Commands:** make (2), find (2)
> **Cross-References:** in the next (2), previous video (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** json (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)


### 4. MySQL: Managing Users and Orders

[↑ Back to Table of Contents](#table-of-contents)

#### Using MySQL for our users and orders
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=0)** - [Instructor] In this chapter, we are going to handle users and orders in our system using MySQL.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=6)** Why are we using MySQL here?
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=8)** So we have structured data.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=9)** Users and orders follow a clear structure with well-defined relationships.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=14)** We want to maintain data integrity because we need to ensure that orders are always linked to valid users.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=19)** And we also want to maintain asset compliance.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=22)** This will become important when we later want to create an order.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=27)** So in our application, we already have a section to manage users and also to manage orders.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=33)** The order management as such will come then a little bit later in the process because we will need to have our shopping basket to finalize that, but we will at least create the schemas for that.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=45)** And for these schemas, we will use Sequelize, which is an object-relational mapper, and ORMs, letters similar to ODMs like Mongoose, interact with the data base using JavaScript object instead of writing raw SQL queries.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/using-mysql-for-our-users-and-orders?u=76281980&t=60)** So by the end of this, we'll have a solid foundation for storing and managing users and orders in a reliable way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[MySQL]] (2), application (1), management (1), [[JavaScript]] (1)
> **CLI Commands:** mysql (2)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Setting up MySQL with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=0)** - [Instructor] To set up MySQL, we'll use Docker to download and run a container.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=5)** If you already have MySQL installed on your system, you can skip this step.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=9)** We've already installed Docker in a previous video.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=12)** And first, we make sure Docker is running.
>
> **[0:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=15)** So I check this by clicking on the Docker icon, and if it says running, you're good to go.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=21)** Now, I am already in my terminal of my system, and of course, your mileage may vary depending on your operating system.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=31)** But here on my make I have the terminal where I now write docker pull mysql to download this image from Docker Hub.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=43)** Once the image is downloaded, we can now start a new container with this command, I run docker run --name, so this is how we will name our container, mysql.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=59)** And then there is something that we did not have in MongoDB.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=63)** We have to provide a password for the root user in MySQL.
>
> **[1:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=68)** And this is an environment variable, so it's -e MYSQL_ROOT_PASSWORD equals.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=80)** And I will use secret here, and you should do the same because for consistency, because we will need this as a credential when we connect to the database.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=90)** And then I do the port mapping again.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=93)** So MySQL's default port is 3306.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=97)** And again, like with MongoDB, I will just map 3306 on my local machine into the container.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=108)** And then MySQL behaves basically as if it would run on this machine.
>
> **[1:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=113)** And then I also have to tell Docker which image to use with -d, and this is mysql.
>
> **[2:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=121)** And when hit Return, you see that.
>
> **[2:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=124)** Now I got the idea of this new container, when I now run docker ps, I should see this container also.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=132)** And I do.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=132)** So now we have MongoDB running in MySQL.
>
> **[2:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=137)** As with MongoDB, depending on your operating system, the process might differ slightly.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=142)** If you run into issues, check Docker's documentation for your system.
>
> **[2:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=147)** For production environments, setting up MySQL can be way more complex.
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=151)** You'll need to think about configuration options like replication, performance tuning, backups, and also security.
>
> **[2:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=158)** But for now, this simple setup is perfect for our sample project.
>
> **[2:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-mysql-with-docker?u=76281980&t=162)** And next, we will look into MySQL Workbench, a UI for managing your MySQL server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (12), [[MongoDB]] (4), database (1), hit (1), [[Performance Tuning]] (1)
> **CLI Commands:** mysql (12), docker (10), make (2)
> **Prerequisites:** set up (1), you'll need (1), setup (1)
> **Tools:** terminal (2)
> **Env Vars:** mysql_root_password (1)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Exploring MySQL with MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=0)** - [Instructor] To make working with MySQL easier, and also to explore the data, we will use a graphically user interface.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=6)** And this is MySQL Workbench.
>
> **[0:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=9)** You can download it for your system on the MySQL website.
>
> **[0:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=13)** Once you've done this, you can simply open it and it'll present you with this screen.
>
> **[0:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=18)** There I now click on the plus icon at MySQL Connections.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=23)** And here I will now define a connection that's very similar to what we did in MongoDB Compass.
>
> **[0:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=29)** I will also call it course, and now we have to provide the connection information.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=36)** The username is root, and we will also have to provide a password.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=40)** So that's different to MongoDB, which can default to no password.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=45)** So here I clicked on Store in Keychain, and there I use secret, this was the password I set when I created this container.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=55)** I click on OK, then I click on Test Connection.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=59)** It complains about compatibility, that's not a problem.
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=62)** Everything else looks good.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=64)** Then I click on OK and I have a new database connection.
>
> **[1:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=68)** Now I direct click on it.
>
> **[1:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=71)** Again, let's remove this message.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=74)** And we see that we are now connected to our MySQL server, and it even comes with some performance information about the server, all the connection.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=84)** So it really gives you a lot of insights about the running MySQL server.
>
> **[1:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=89)** So we will use MySQL Workbench during this course to manipulate some data.
>
> **[1:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=96)** And you can also, during this course, always open mySQL Workbench to look a little bit under the hood.
>
> **[1:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=103)** Right now we don't have any schemas.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=107)** You see it here defined.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=108)** The only thing that we see is the system schema.
>
> **[1:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-mysql-with-mysql-workbench?u=76281980&t=111)** That's also very similar to what we had in MongoDB, but this will change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), [[MongoDB]] (3), data (2), database (1)
> **CLI Commands:** mysql (8), make (1)
> **UI Navigation:** click on (5)
> **Code Identifiers:** mysql (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Introducing Sequelize
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=0)** - [Instructor] To use MySQL in our sample project, we will now use Sequelize.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=4)** Sequelize is a popular database abstraction layer for Node.JS and it supports a few databases like MySQL, SQLite, Postgres, and Microsoft SQL Server.
>
> **[0:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=15)** Additionally to being a database abstraction layer, it's also a object relational mapper, which is very similar to Mongoose, which is a object document mapper.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=26)** So as we did with Mongoose, we could now do something like this.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=30)** I could define something like a schema or model using SQL as define, and I call it car, and I say it has a make and this make is of the data type string.
>
> **[0:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=41)** And then we can very simply just sync this model to MySQL and it'll be automatically created.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=48)** And then I can create a database record for this car and it'll be stored to MySQL.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=55)** And now I can, for instance, log it out or set more properties on it, et cetera.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=60)** You see, that's very similar to Mongoose.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=63)** Now let's look at something important, it's transactions.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=66)** So how can transactions be created with Sequelize?
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=70)** For that, I call Sequelize transaction and in the callback, then run everything that should belong to these transactions.
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=77)** And here in the callbacks, I set the owner of this car.
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=81)** So there is some relation between car and owner, and the first name is Daniel and the last name is Khan.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=86)** Doing that in a transaction means that if now something goes wrong while it sets the owner of the car, nothing will happen and the car will not be created at all.
>
> **[1:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=96)** As I said before, with transactions, it's always an all or nothing.
>
> **[1:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=100)** And this will become important when we will later create orders in our shopping application.
>
> **[1:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/introducing-sequelize?u=76281980&t=106)** But now let's dive right in, bring in Sequelize and start using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), database (3), [[Node.js]] (1), [[Databases]] (1), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** mysql (4), make (2), node (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), similar to (1)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)

#### Setting up the database connection
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=0)** - [Instructor] To start using Sequelize with MySQL, we first need to install the necessary packages.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=6)** So I already opened my terminal, I terminated our application, and now I type npm install sequelize, and also, mysql2.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=22)** This install Sequelize, the ORM we'll use to interact with the database, and mysql2, the driver Sequelize uses to connect to MySQL.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=33)** Now I will start my app again by running npm run dev.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=37)** And with these installed, we are ready to set up the database connection in our Fastify application.
>
> **[0:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=44)** And you will see that it's fairly similar to what we did with MongoDB, and that's a good sign because this means that we are consistent in the way we are doing things.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=54)** So what we will do here is we will connect Fastify to MySQL by completing the Sequelize plugin that is already in our project.
>
> **[1:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=64)** This plugin will handle connecting to MySQL using Sequelize and make the connection available across the app.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=70)** But before we do this, and that's, again, similar to what we did with MongoDB, I go into config, index.js.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=78)** And there, I have to provide the credentials now for MySQL.
>
> **[1:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=81)** So I add a new config key, mysql.
>
> **[1:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=85)** And in there, I now, again, provide the URI.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=90)** And now it's mysql.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=95)** And that's root, that's the username, :secret, that's the password, @localhost, running on port 3306.
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=109)** And the schema we actually want to connect to should be, again, simpleshop.
>
> **[1:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=117)** And then, I also provide options.
>
> **[2:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=121)** And these are the options for Sequelize.
>
> **[2:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=124)** And there, I write logging: false.
>
> **[2:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=127)** This is because, if you set this to true, and you can do this if you want to basically look under the hood of Sequelize, you will see each and every SQL query Sequelize performs, and this can be pretty noisy.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=142)** Next, we are heading into the plugin section.
>
> **[2:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=145)** And there, in databases, you already find sequelize.js.
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=151)** Again, we have this status field in line 4.
>
> **[2:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=155)** It's disconnected and we will set it to connect it hopefully very soon.
>
> **[2:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=159)** And now, where we have this TODO line, we will connect to MySQL.
>
> **[2:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=165)** And this is a try catch block.
>
> **[2:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=167)** So add try, catch.
>
> **[2:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=172)** Error.
>
> **[2:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=175)** And in the try block, I will now write const sequelize = new Sequelize,
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=191)** and I pass in config.ui and config.options.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=201)** Again, very similar to MongoDB.
>
> **[3:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=204)** Let's close the sidebar to have a little bit more space.
>
> **[3:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=208)** But a little bit different to MongoDB, we have not yet made a connection, we just parametrized the Sequelize object.
>
> **[3:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=217)** The connection is now made in the next line where we write await sequelize.authenticate.
>
> **[3:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=228)** So this now really connects to the database.
>
> **[3:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=232)** And then we can log out the message fastify.log.info("Connected to MySQL").
>
> **[4:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=246)** And of course, we also now want to set the status so that we see on our website that MySQL is connected.
>
> **[4:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=252)** So I will now write mysqlStatus = "connected".
>
> **[4:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=263)** Now we also have to handle the error situation.
>
> **[4:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=269)** Now just write fastify.log.error, Failed to connect to MySQL.
>
> **[4:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=281)** Then I want to throw the error because if the connection to the database fails, there is no pointing in continuing.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=289)** And what I also have to do up here is I also have to bring in Sequelize.
>
> **[4:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=293)** I did not do that so far.
>
> **[4:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=295)** So I add import, and this is on curly brackets.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=298)** We want the Sequelize object, mind the uppercase.
>
> **[5:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=303)** import { Sequelize } from "sequelize".
>
> **[5:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=309)** And let's save.
>
> **[5:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=311)** And I get an error. Let's see what's happening here.
>
> **[5:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=314)** And this is actually intended and good because MySQL tells us there is no database called simpleshop.
>
> **[5:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=323)** So differently to MongoDB, MySQL will not automatically create the database for you.
>
> **[5:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=331)** So we have to create it now.
>
> **[5:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=333)** And for that, we head back into MySQL Workbench.
>
> **[5:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=337)** And in here, we will now click on this what looks like a database symbol, create the new schema.
>
> **[5:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=344)** And we call this schema simpleshop.
>
> **[5:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=347)** We can leave the defaults here, and we will just click on Apply.
>
> **[5:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=352)** And then I have to click on Apply again.
>
> **[5:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=354)** And this now executed the command.
>
> **[5:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=358)** You see we executed CREATE SCHEMA simpleshop on MySQL.
>
> **[6:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=364)** Now when I head back, and I just save again to reload, we see that we have connected to MySQL.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=374)** What I want to do next is I want to make the Sequelize object available on Fastify already, and for that, I write fastify.decorate,
>
> **[6:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=390)** sequelize, and I'm passing the sequelize instance.
>
> **[6:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=402)** This I'm doing because we might later want to access a little bit of the lower level features Sequelize has to offer, and for that, we need it decorated.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=412)** So it will be then available as before with the item object as fastify.sequelize, throughout the whole application.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=420)** So that's very handy.
>
> **[7:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=422)** And then we also have this unclosed hook.
>
> **[7:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=425)** And you know this already from MongoDB, so I will just do await sequelize.close to gracefully close the database connection when the application terminates.
>
> **[7:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=439)** Now let's head into the browser, and I'm opening the shopping application again.
>
> **[7:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=445)** It's in localhost:3000. And hit Return.
>
> **[7:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=448)** And now you see we also have a green on the MySQL connection.
>
> **[7:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=452)** So this is now exactly working as intended.
>
> **[7:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-the-database-connection?u=76281980&t=456)** In the next video, very similar to MongoDB and Mongos, we will create our first models to work with the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (17), database (9), [[MongoDB]] (7), application (5), next (4)
> **CLI Commands:** mysql (17), npm (2), make (2), find (1)
> **Env Vars:** orm (1), uri (1), sql (1), todo (1), create (1)
> **Prerequisites:** install (3), set up (1)
> **UI Navigation:** click on (3)
> **Definitions:** means that (1), is a  (1), we call this (1)
> **Analogies:** similar to (3)
> **File Paths:** index.js (1), sequelize.js (1)

#### Designing the database structure
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=0)** - [Instructor] Before we start writing code, it's always a good idea to think about the database design.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=6)** Understanding how our data is structured helps us define relationships correctly and write efficient queries and avoid future issues.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=14)** So first, let's understand the database design.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=17)** We are using MySQL to store our data and SQLite to manage our models and relationships.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=22)** Our database consists of three main tables.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=25)** Its users, which stores user details like email and password.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=30)** Its orders, which stores customer orders and tracks the status.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=34)** And its order items, which stores individual items within an order.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=40)** Now, the next step is we want to define the associations, the relationships between those tables, and we can say that one user can have many orders.
>
> **[0:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=51)** And you see this in this diagram.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=53)** So, this is the notation for it.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=55)** One user, there are many users, but one user has one order.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=60)** And then, again, there are many orders, but each order has a set of order items, and each order item, and there are many order items, has one order associated to it.
>
> **[1:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=75)** So technically, and in SQLite notation, we would say, "User has many orders and order belongs to user."
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=86)** And we can say, "Order has many order items and one order item belongs to an order."
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=95)** With this relationship defined, we can then later easily retrieve all orders for a user and all items within an order just by following the relationships in using so-called joins, which is a construct in SQL.
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/designing-the-database-structure?u=76281980&t=110)** So now, that we understand the relationship, let's dive in and we will create the models in SQLite and then make them available in our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2), [[MySQL]] (1), next (1), [[SQL]] (1)
> **CLI Commands:** mysql (1), make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Creating a user model for Sequelize
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=0)** - [Instructor] Now that we have designed our database, in this video, we will define the user model using Sequelize.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=7)** This will feel familiar from what we did with MongoDB and Mongoose.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=11)** So let's create our first model, and for that, I go into Source, Models, and as we have it for Mongoose, we also have a folder for Sequelize.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=21)** And in there, I now create a new file, and I call it User.js, uppercase U, and this will hold a user model, and there, I start with importing the data types of Sequelize.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=37)** So I write import (keys clicking) DataTypes from sequelize.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=48)** (keys clicking) Next, I'm starting with exporting a default function (keys clicking) that takes sequelize as an argument.
>
> **[0:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=58)** (keys clicking) And there in the function body, we will define our model, and that's really again very similar to MongoDB because in there, I now write const User = sequelize (keys clicking) and we don't have to bring in sequelize as you see, because it's coming in in line three, so it's a function parameter.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=83)** And on sequelize, I call .define, and I'm defining now this user, so I call it User, (keys clicking) and this is very similar again to Mongoose.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=97)** As first function argument now to this defined call, I provide the actual schema definition.
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=105)** So what does a user have?
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=108)** In our case, a user is pretty simple.
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=110)** A user just has an email, (keys clicking) no, let's create an empty object for that, and it has a password.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=120)** (keys clicking) Now here, now in line six and line seven, we have to add our type definition like we did in Mongoose, and what is a email address?
>
> **[2:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=134)** It's obviously a string, so I can now write type, and now I have to use this DataType object that we just brought in before because in Sequelize and in relational databases, the typing is much more complex and complicated, so we have a set of data types that we can use and that map to different data types that are actually stored them on the database table on the schema, and not like with MongoDB for the most part are just more like informational and are enforced on the level of the ORM or document mapper.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=171)** So I write type, DataTypes, and this is a string, all uppercase.
>
> **[2:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=178)** And we also want to provide a few more things to it, so we define now this field in the table, (keys clicking) allowNull is false, (keys clicking) so obviously a user has to always have an email address.
>
> **[3:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=194)** It has to be unique.
>
> **[3:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=195)** We don't want to have two users with the same email address.
>
> **[3:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=200)** And we also want to validate it, and this is now again on the library level, so we now instruct Sequelize to do the validation.
>
> **[3:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=210)** And I think it's important to understand what happens where, so some things are enforced in relational databases on the level of the database schema.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=220)** For instance, you cannot store a string in an integer field.
>
> **[3:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=225)** But some things also provided by the library, in this case, validate is one of those.
>
> **[3:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=231)** So I write validate, and there, I can simply write is email true?
>
> **[3:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=239)** (keys clicking) Now let's save and also remove this sidebar here.
>
> **[4:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=243)** Yeah, there is it.
>
> **[4:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=244)** So we have now defined the data type.
>
> **[4:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=248)** It's a non-null field, it is not allowed to be null.
>
> **[4:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=251)** It is unique, which means it also gets a unique index, and we also add a validator.
>
> **[4:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=258)** Now we do something similar for the password because there I write type, and it's Data (keys clicking) Types string, (keys clicking) and it must also not be null, obviously because of course, each user has to have a password.
>
> **[4:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=281)** We could also now enforce some password lengths here, but as you will see later, this makes no sense because we will eventually end up storing something completely different in this field.
>
> **[4:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=293)** So we leave it at that, and now we will do something that is very important to relational databases because you saw it before, we define some database model and tables to have relationships to each other, so we now have to define these relationships.
>
> **[5:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=309)** So now after this function here in line 14, I now start writing the associations.
>
> **[5:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=316)** And you have to understand that this function on line three and also this function I'm now creating has to be called from somewhere eventually, so nothing is happening at this point, and you will see the infrastructure call these functions and create the associations in a bit.
>
> **[5:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=335)** So bear with me because now I write this, User.associate.
>
> **[5:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=343)** So we are now defining a function associate on user, and this gets some argument called models, and in the function body, (keys clicking) I now write User.hasMany, so one user has many models, so the models object we got in line 15, .Order, and we also define the so-called foreign key, and I will explain it in a second.
>
> **[6:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=379)** ForeignKey (keys clicking) is userId as: orders.
>
> **[6:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=393)** Now, this defines a relationship to the order table, and it will ensure that on the order table, for each order, there is a new field called UserId, which then references the table user.
>
> **[6:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=411)** You might not wonder where this user ID is defined.
>
> **[6:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=414)** This happens on the library level because it automatically creates on each table a field ID, which is a primary key that auto-increments, and Sequelize then knows that this field ID in the user table will reference to orders using the UserId foreign key name.
>
> **[7:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=437)** One thing I've forgotten is I have to, and you see it, because the user here is grayed out, I have to also return the user in the end.
>
> **[7:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=445)** So that's a very common mistake because then obviously nothing will happen, and the function will return nothing.
>
> **[7:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=452)** And with that, we should be good.
>
> **[7:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=453)** So in this video, we created the user model and established a relationship with the order model, but the order model does not exist yet.
>
> **[7:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-a-user-model-for-sequelize?u=76281980&t=462)** In the next video, we will build this order and also the order item models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), database (4), [[MongoDB]] (3), [[Relational Databases]] (3), next (2)
> **Non-Speech:** (keys clicking) (15)
> **Definitions:** is a  (4)
> **Code Identifiers:** allownull (1), hasmany (1), userid (1)
> **Analogies:** similar to (1), for instance (1)
> **File Paths:** user.js (1)
> **Env Vars:** orm (1)
> **Cross-References:** in the next (1)

#### Creating the order models for Sequelize
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=0)** - [Instructor] In the previous video, we created the user model.
>
> **[0:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=3)** Now we want to create the models for our order management.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=6)** We will create the order model which represents a single order which is associated with the user, and we will also create the order item model that stores the individual items of each order.
>
> **[0:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=18)** Before we start this, I want to do a little optimization on the user object because I had an idea here, let's open User.js first.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=27)** And you see that I'm bringing in the DataTypes from sequelize, but at the same time I'm also already bringing in sequelize in line three.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=34)** So actually what we can do is we can remove this line and I will now add an argument, DataTypes.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=47)** So later when we call and initialize these models, we have to add this as an argument.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=53)** What we could also do is we could also extract or get DataTypes directly from the sequelize object, but let's leave it like that for clarity.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=61)** Now we will build the order model.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=63)** So I closed the use the User.js file and in the sequelize folder and now create a new file Order.js.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=74)** In there, I can now simply start writing my function, export default sequelize DataTypes.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=86)** And in the function body we will now do the actual model creation where we write const order equals sequelize.define, and the table should be called order.
>
> **[1:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=106)** And this takes an object where we will then define our schema.
>
> **[1:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=112)** Whatever will done do now right away is I will write return order so that we don't forget this.
>
> **[1:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=118)** So this is basically the scaffold for what we are going to do.
>
> **[2:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=121)** And now I have to do again my schema definition.
>
> **[2:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=124)** And for that I will start now with the user ID.
>
> **[2:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=130)** And now you will remember what we did on the user before we associated the primary key of the user with a field user ID.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=140)** And this is now happening here.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=142)** So I add user ID and the user ID is type DataTypes.INTEGER, all uppercase.
>
> **[2:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=154)** So it's an integer, all primary keys are integers in MySQL and it must not be null, which means that each order upon its creation has to be associated with a user already.
>
> **[2:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=170)** So that's false there.
>
> **[2:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=172)** Next we will define an email address.
>
> **[2:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=176)** And now you might wonder why we are storing the email address because it's already on the user.
>
> **[3:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=181)** We are doing this because for some reason a user might delete their account and then we would lose all information and reference to this given user.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=191)** And that's the reason why we still want to have some information on the order to know which user it belonged to originally because maybe, I don't know, maybe some callback happens on a product and we have then at least the email address.
>
> **[3:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=206)** So that's the reason.
>
> **[3:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=208)** And the email is very similar to what we did before because it's type: DataTypes.STRING and it must not be null null.
>
> **[3:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=225)** So finally we also have a status field.
>
> **[3:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=229)** So an order can have a status like shipped or new or pending, whatever.
>
> **[3:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=234)** So I add status and it's a simple string in our case.
>
> **[4:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=241)** So I will just write type: DataTypes.STRING
>
> **[4:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=249)** and I will add a property default value and it should be pending.
>
> **[4:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=259)** So the default status of a new order should be it's pending, which makes sense.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=266)** Let's take a look if we did everything right.
>
> **[4:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=269)** Yeah, looks good.
>
> **[4:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=270)** Now finally I you might guess we have to define some associations, relationships between tables.
>
> **[4:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=279)** So add Order.associate, I'm just creating a new function as I said before on order which takes an argument with all the other models.
>
> **[4:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=291)** And there in now right Order.belongsTo
>
> **[5:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=300)** and it belongs to models.User.
>
> **[5:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=303)** And this is now basically the other side of the relationship that are defined on user before.
>
> **[5:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=310)** And there I define foreignKey: key userId as user.
>
> **[5:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=325)** Let's close the sidebar here.
>
> **[5:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=327)** So if you remember on the user we defined has many.
>
> **[5:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=332)** So a user has many orders and one order, that is what we define here, belongs to a user.
>
> **[5:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=340)** And we also have one other relationship because one order has many order items and we will define this now.
>
> **[5:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=348)** So I write Order.hasMany models.OrderItem.
>
> **[5:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=359)** And the foreignKey here is the order ID, which is again referencing the primary key on the order table, which is automatically created, which is called ID as items.
>
> **[6:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=378)** And that should be it.
>
> **[6:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=379)** Now we want to create also the order item, for that, I create a new file and I call it orderItem.js.
>
> **[6:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=396)** And there are now again start writing export default.
>
> **[6:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=402)** And it's a function that call takes sequelize and the DataTypes.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=412)** And there in there will again will define the schema.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=420)** So write const OrderItem equals sequelize.define,
>
> **[7:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=429)** and the table should be called OrderItem.
>
> **[7:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=434)** And in there I again will do my schema definition.
>
> **[7:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=441)** But first let's also return the OrderItem right away so that that we don't forget this.
>
> **[7:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=448)** And for the schema definition, I now write sku.
>
> **[7:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=454)** So each order item of course is an sku.
>
> **[7:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=459)** It should have a quantity, it should have a name.
>
> **[7:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=467)** And this is again also just to have some complete record in our database.
>
> **[7:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=473)** But maybe we delete some item at some point from the MongoDB table, then we would never be able again to know what this order item actually was.
>
> **[8:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=483)** So some redundancy sometimes really helps to maintain consistency down the line.
>
> **[8:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=491)** And we also have a price and that should be it.
>
> **[8:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=495)** So for the sku, this is a string type: DataTypes. STRING.
>
> **[8:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=507)** Then we have again allowNull false because each item has to have a sku.
>
> **[8:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=515)** For the quantity, a define type: DataTypes.INTEGER
>
> **[8:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=524)** because it's just a number allowNull or empty is again false.
>
> **[8:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=533)** And for the name we define a data type string.
>
> **[8:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=537)** And the tier, I can just copy what I had for the sku, it must not be null.
>
> **[9:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=544)** And finally for the price, we define a data type that's not different, DataTypes.DECIMAL.
>
> **[9:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=557)** So this is a decimal field that's supported by databases and it should have two decimal places, 10, 2,
>
> **[9:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=569)** and again, allowNull should be false.
>
> **[9:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=577)** So that would be the order item now.
>
> **[9:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=581)** Now we have to again define an association.
>
> **[9:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=584)** So write OrderItem.associate.
>
> **[9:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=590)** And this function again takes this models object and then write OrderItem.belongsTo models.Order
>
> **[10:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=610)** and it's connected via the foreignKey orderId.
>
> **[10:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=618)** So to the ID field of the order as Order.
>
> **[10:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=628)** I see that somewhere is an error.
>
> **[10:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=631)** Yeah, yeah. If a semicolon, which let's remove that.
>
> **[10:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=635)** And I have made a little mistake here.
>
> **[10:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=637)** I see now we have to fix something I created, I added this associate method outside of this function and I think I did this everywhere.
>
> **[10:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=648)** So just take it and move it into this exported function.
>
> **[10:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=654)** Otherwise this makes no sense.
>
> **[10:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=657)** Let's do the same for the order. Let's move it up there.
>
> **[11:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=663)** Actually the ID should have screamed at some point, but it didn't.
>
> **[11:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=667)** So we have to of course define this in this exported function.
>
> **[11:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=672)** Otherwise we don't even have access to this model object.
>
> **[11:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=676)** And let's do the same fix for the user.
>
> **[11:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=679)** So just move it up there.
>
> **[11:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=682)** So now it looks good. I hope this makes sense for you.
>
> **[11:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=685)** So now we, for each model, the exporter function that takes sequelize and the DataTypes and we have to write the infrastructure for that still.
>
> **[11:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=695)** Then we define the schema or the model, basically using sequelize define, then we define all the fields on this.
>
> **[11:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=705)** Then we create a method associate on the respective model object.
>
> **[11:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-models-for-sequelize?u=76281980&t=713)** And there we define the relationships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), management (1), [[MySQL]] (1), next (1), product (1)
> **Code Identifiers:** foreignkey (3), allownull (3), belongsto (2), userid (1), hasmany (1)
> **Env Vars:** string (3), integer (2), decimal (1)
> **Definitions:** is an  (2), is a  (2), means that (1), is called (1)
> **File Paths:** user.js (2), order.js (1), orderitem.js (1)
> **SQL:** integer (2)
> **Best Practices:** don't forget (2)
> **CLI Commands:** mysql (1)

#### Loading and syncing the models
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=0)** - [Instructor] So far, we actually have only created arbitrary functions that don't connect to the database yet.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=6)** The infrastructure we will create now can be used in any framework to dynamically load and associate Sequelize models.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=14)** In Fastify, to keep it modular, we will use a Fastify plugin for this again.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=19)** This will ensure that models are initialized and the relationships are defined when the app starts.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=26)** So let's get started.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=27)** For that, I go back into my src, plugins and there databases and sequelize.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=37)** Let's close the sidebar.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=39)** We don't need it at this point.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=42)** And up there, I will have to bring in a few more helpers now.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=47)** I first import readdir from the Node internal "fs/promises."
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=62)** And I also bring in path, also a Node Core module for path operations on directories from "path".
>
> **[1:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=77)** Then I scroll down and right after, we do all the operations for basically connecting to Sequelize.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=86)** I will now add something new.
>
> **[1:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=89)** Let's write deal with models.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=93)** And there we'll first define an empty object for models, const models = curly brackets.
>
> **[1:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=103)** Then I will define the models path.
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=105)** So this is the path where my models reside.
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=109)** Const modelsPath = path.resolve and that's in src/models/sequelize.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=126)** And then I want to read this directory and for that I do a const modelFiles = await.
>
> **[2:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=139)** So we use the promise-based readdir.
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=144)** So I can simply do await readdir (modelsPath).
>
> **[2:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=153)** So we first define an empty object.
>
> **[2:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=155)** Then we define where the models live and they live in src/models/sequelize.
>
> **[2:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=162)** And then we read all the files inside this path.
>
> **[2:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=166)** So this should give us the user, the order and the other item files.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=171)** Now we have to iterate through these files.
>
> **[2:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=176)** So add for(const file off modelFiles).
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=187)** And in this for loop, we check if(file.endsWith(".js")).
>
> **[3:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=196)** So we want to make sure we only do this for the JavaScript files that we have, the modelFiles.
>
> **[3:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=203)** And if this is the case, write const model = (await).
>
> **[3:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=211)** And I do this in brackets, import (path.join), the modelsPath and the file.
>
> **[3:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=228)** And there I call the default function and I pass in sequelize.
>
> **[3:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=237)** But this is now the lowercase connected sequelize.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=240)** So the instance of sequelize and then uppercase Sequelize.DataTypes.
>
> **[4:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=252)** So let's save and reformat and let's look at this again.
>
> **[4:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=255)** So what are we doing here?
>
> **[4:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=257)** So we're getting the model and this is a little bit internals of how Node.js and JavaScript work, but so we are doing an import, and there I have a mistake.
>
> **[4:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=267)** So it's file not faile.
>
> **[4:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=270)** So we are first iterating through modelFiles, then we check if this file ends with .js and is not something else.
>
> **[4:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=278)** If it is, we will then assume that this is a regular model file and then we will input it and then we will call the default function, the default exported function on it and pass in the instance of Sequelize, which is now already connected to the database and also the data types object of Sequelize so that we can define, use that to define data types.
>
> **[5:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=302)** Now finally, what we have to do is we have to populate the models object.
>
> **[5:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=307)** And I do this by writing models (models.name) = model.
>
> **[5:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=319)** So with that, we now have a populated, in the end, a populated models array with all the models in there.
>
> **[5:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=327)** And now what we have to do after this for block is now we iterate over the modules and we do this by writing Object.values(models).
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=345)** So this is how we iterate over an array of objects basically or object array.
>
> **[5:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=351)** And forEach(model), singular, we have to call a function on it.
>
> **[5:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=359)** And this function is now, can you guess it?
>
> **[6:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=362)** It's associate because now I will first check if model.associate.
>
> **[6:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=371)** So does this associate function even exist?
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=374)** If there are no relationships, we don't need an associate function here.
>
> **[6:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=378)** But if this is the case, we will now call models, model.associate, and we will pass in all the other models.
>
> **[6:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=390)** And hopefully this makes sense.
>
> **[6:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=392)** We have to first load all the models to be able to do the association because otherwise, we could not say it's something like models.user belongs to or something like that, right?
>
> **[6:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=403)** So models have to be completely populated.
>
> **[6:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=406)** And once this is done, we can wire up all the associations.
>
> **[6:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=411)** If we do it like that, and so far it looks still good so we don't get an error, nothing will really happen on the database.
>
> **[6:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=418)** What we want Sequelize to do is we want it to create the database tables for us and also the associations and all the indexes and all of that.
>
> **[7:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=427)** And to achieve that, we have to add one more thing and it is await sequelize .sync.
>
> **[7:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=439)** So this is the method that actually then syncs with the database and they're very important.
>
> **[7:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=444)** I add alter: false.
>
> **[7:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=447)** And I'm doing this so that we create the tables, but then when we change something on the model, it will not alter the table anymore.
>
> **[7:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=456)** And the reason for that is that there are bugs in Sequelize that may cause it to create indexes again and again.
>
> **[7:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=464)** So this avoids that if this bug is once fixed, you can also to alter: true.
>
> **[7:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=468)** So what you would do in a scenario where you're still developing and test data does not matter too much, you would just delete the table and then Sequelize will recreate it.
>
> **[8:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=480)** Now we add a log line where I write fastify.log.info
>
> **[8:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=489)** and I write "Sequelize models synced successfully."
>
> **[8:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=501)** And maybe add one more thing.
>
> **[8:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=506)** Log.
>
> **[8:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=507)** Maybe add one more thing here where we load the model, Sequelize model.
>
> **[8:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=520)** Let's do a string interpolation so that we see a little bit what's happening under the hood.
>
> **[8:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=524)** So Sequelize model $ {model.name}.
>
> **[8:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=535)** And here is another typo, sorry.
>
> **[8:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=537)** So we have to use model.name here.
>
> **[9:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=541)** Sequelize model ${model.name}.
>
> **[9:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=545)** Create it.
>
> **[9:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=547)** Oh, or what is it? Loaded.
>
> **[9:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=551)** Now hit Save.
>
> **[9:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=552)** And I guess something happened.
>
> **[9:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=554)** I don't see an error.
>
> **[9:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=556)** You see the messages that the models have been loaded.
>
> **[9:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=560)** So this looks pretty good actually.
>
> **[9:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=564)** And there is one thing we are still missing here because we also want to have access to these models in our Fastify application.
>
> **[9:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=572)** So what I'm going to add here is again, a decorator, and let's do this somewhere down here when everything has been loaded.
>
> **[9:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=582)** And now I will simply add fastify.decorate and let's call this property models.
>
> **[9:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=594)** And there I simply pass in the models object array that we are creating up here.
>
> **[10:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=605)** So with that, for instance, you should be able to access the user via fastify.models.user.
>
> **[10:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=615)** And you also see already a little bit of an inconsistency, and we will see this more when we work with more of the models.
>
> **[10:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=621)** Maybe it would've been a better idea to namespace this a little bit more.
>
> **[10:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=626)** For instance, to have everything MongoDB in fastify.mongo.models, and this now in fastify.mysql.models.
>
> **[10:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=636)** But this is now as it is, it works.
>
> **[10:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=639)** But in a larger application namespacing might be something you might want to consider.
>
> **[10:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=645)** So I'm pretty confident that this works now.
>
> **[10:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=648)** But to be very sure, we will have a look into MySQL Workbench now.
>
> **[10:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=653)** So I click on that.
>
> **[10:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=655)** And now let's look into this simpleshop.
>
> **[10:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=658)** And when we now click on tables, you see that there are now actual tables created.
>
> **[11:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=663)** Let's close everything else that we have here.
>
> **[11:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=669)** And we can also now look, for instance, at the users table.
>
> **[11:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=673)** And when you click right, you can open the Table Inspector, and there you see all the columns.
>
> **[11:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=679)** So we have the id, we have the email, the password, and createdAt, updatedAt, which is created automatically by Sequelize.
>
> **[11:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=687)** We have indexes on it.
>
> **[11:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=688)** The primary key was the unique key for email.
>
> **[11:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=692)** So you can now explore all the tables, but I will show you now one more thing, which is pretty cool.
>
> **[11:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=697)** And this is I think pretty unique to MySQL Workbench.
>
> **[11:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=702)** I click now on database and there in Reverse Engineer and click on continue on this current database connection.
>
> **[11:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=712)** Continue again.
>
> **[11:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=713)** I select simpleshop and click on continue again and continue and execute.
>
> **[12:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=721)** And continue again and then close.
>
> **[12:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=725)** And what I get then and I think it's really cool, is a ERD diagram that really shows me now the relationships between my tables.
>
> **[12:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=735)** And that's really, really handy because sometimes when you create more complex structures, you really want to validate that the relationships you created are really the way you wanted them to be, and you can do this right here.
>
> **[12:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=749)** So I find this pretty exciting every time I do it.
>
> **[12:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=752)** So now we have implemented Users, Orders and OrderItems models, and dynamically loaded them into the app using a Fastify plugin.
>
> **[12:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=759)** So this ensures now modular and scalable architecture.
>
> **[12:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=762)** For instance, you could now add more models and associate them at any time by just creating the files in the Sequelize folder.
>
> **[12:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=772)** In the next video, we will use the user models to build the logic for user management into our system.
>
> **[13:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/loading-and-syncing-the-models?u=76281980&t=780)** The order management will come a bit later in this course when we have built the shopping basket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), data (3), [[MySQL]] (3), node (2), [[JavaScript]] (2)
> **Code Identifiers:** modelfiles (4), modelspath (3), endswith (1), foreach (1), createdat (1)
> **CLI Commands:** node (3), mysql (3), make (1), mongo (1), find (1)
> **UI Navigation:** click on (4), scroll down (1), open the (1)
> **Analogies:** for instance (4)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1), later in (1)
> **File Paths:** node.js (1)

#### Creating, updating and deleting users with Sequelize
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=0)** - [Instructor] In this video, we will implement the full CRUD functionality for managing users in our application.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=6)** For that, we will connect the routes to our Sequelize user models, create all the queries that we need, and then render the results in the template to show up here.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=16)** As we see already, there is a form to create users.
>
> **[0:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=19)** We don't have a user registration flow.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=23)** In this application, let's assume an admin has to create every new user.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=27)** And we will also have a way to list all existing users.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=31)** And also, of course, we will be able to edit and delete users.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=36)** So let's head into Visual Studio Code, and there I open src, routes, admin, users.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=45)** If you're curious about how the template works, it's in views, admin, user.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=54)** Let's close the sidebar.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=55)** And in there, you see that we already have the whole boilerplate for this routes file ready, and you will see that adding the database function is not really just minimal work.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=67)** Everything that we need is already provided for us by the infrastructure we created and also by Sequelize.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=73)** So let's get started, and the first thing we want to do is we want to list all existing users, and for that, we have to populate the users array in line six, which is right now just an empty array, so remove that, and it will now add await.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=90)** And now we need to call to Sequelize.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=93)** So I add fastify.models, this is what we decorated before, .User.findAll.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=107)** So this is provided by Sequelize, findAll, and if we call it without any arguments, it will just return all the users in the system, and then I can hit Save.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=119)** That's it already, so that's the list route because what do we do next?
>
> **[2:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=123)** We pass it to the template in line 11.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=126)** Now let's reload our page in the browser real quick.
>
> **[2:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=130)** So we see that there is no error.
>
> **[2:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=132)** Let's reload again, so this looks already good, but we don't have any users in the system right now, so we will have to implement it next, so lets scroll down, and there is this POST route starting in line 22, and there we again have this pattern where we either create a new user if there is no user already or update an existing user.
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=152)** So what do we do if we want to update the user?
>
> **[2:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=155)** So we have a user id, so what I'm going to do is I will fetch or try to find the existing user by writing const user equals await fastify.models.User.
>
> **[2:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=176)** And now we have this function findByPk, so we are trying to find the user by primary key, a very fast operation.
>
> **[3:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=185)** It goes on the index, findByPk, and passing the userId.
>
> **[3:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=195)** Now I need some kind of sanity check because if there is no user found, something is really wrong, maybe the user was deleted elsewhere where we had this form open.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=207)** So if there is no user, let's create an error message.
>
> **[3:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=212)** So copy that one down here from line 45 and I will let the user know, could not find user.
>
> **[3:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=228)** And if this happens, we just redirect the user back to the interface right away.
>
> **[3:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=238)** This is an error condition, something really went wrong.
>
> **[4:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=241)** But in any other case, we have found a user and I will now just manually update the user.
>
> **[4:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=248)** So I said user.email equals email.
>
> **[4:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=253)** And then I do something and this will become more important further down the line in another video.
>
> **[4:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=260)** Now I query if password, because the password does not have to be set, maybe you would just want to change the email address but not the password.
>
> **[4:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=268)** So I say if password user.password equals password just to make sure that we don't reset the password.
>
> **[4:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=279)** But as I said, this will become way more important down the line.
>
> **[4:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=284)** Now what is left for us to do always is obviously we have to save the user, so write await user.save, and that's all we have to do.
>
> **[4:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=297)** So we load the user from the database, then we change the fields that we want to change and then we save it.
>
> **[5:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=304)** Now we also want to be able to create new users and we can do this right here starting in line 45.
>
> **[5:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=313)** And this is now again very simple because all I have to do is to call fastify.models.User.create
>
> **[5:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=327)** and I will just pass in email and password.
>
> **[5:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=336)** One thing that I also have to say is Fastify comes with a strong framework for input validation.
>
> **[5:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=342)** So you could also make sure that the password is long enough, et cetera.
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=345)** I'm skipping this right here, but please bear in mind that input validation, so making sure that the inputs by the user are valid, are important and should not only be handled by the database driver, but also ready by the respective routes.
>
> **[6:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=362)** So now we are able to also create new users.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=367)** Next, I'm going to create the route that lets us load the user and you should already be able to know what we have to do because it's again very simple.
>
> **[6:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=380)** So we have to get a user object.
>
> **[6:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=383)** What I'm going to do here is here in line 66, I will load the user.
>
> **[6:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=389)** And by what can we load the user?
>
> **[6:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=391)** Well, we get the ID as a request parameter.
>
> **[6:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=394)** So all I have to do is await fastify.models.User.findByPk
>
> **[6:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=406)** and passing the id that we get from the route.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=412)** And then this user should be passed and we leave the users array empty so that only the form shows up and we will get message no users found, but we can ignore this.
>
> **[7:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=424)** Then we always want to be able to delete users.
>
> **[7:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=428)** And for that, we will just scroll up and find the route where we update users because it's very similar.
>
> **[7:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=438)** So I will now simply copy this block.
>
> **[7:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=447)** So when we scroll down, the only difference is that we will get the id via request params, but the rest is the same.
>
> **[7:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=456)** So we want to load the user from the database using the Id, the primary key, and then we do some error checking.
>
> **[7:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=469)** And if the user is present, we call await user.destroy.
>
> **[7:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=476)** So that's a command that is given to us by Sequelize.
>
> **[8:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=483)** And everything else stays the same.
>
> **[8:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=486)** And one final thing we have to do is I have this impersonate user route.
>
> **[8:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=492)** This means when we click on a user, we can become this user.
>
> **[8:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=495)** This is interesting for debugging purposes and nothing else.
>
> **[8:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=499)** And for that, I will again use pretty much the same code that we had for deleting the user.
>
> **[8:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=509)** So I'm trying to load the user by Pk.
>
> **[8:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=518)** If the user is not present, we give out an error message.
>
> **[8:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=525)** In any other case, we will say request, and that's not special.
>
> **[8:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=530)** So we have a user and we want to become this user, and for that, we have to set the user on our session object.
>
> **[8:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=539)** We will see this again later when we do the login, but I'm doing request.session.set and our application expects the user to be in the session object called user.
>
> **[9:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=552)** And there we just pass in id user.id, email user.email, and that's it.
>
> **[9:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=564)** So when this is provided, the application will think we have a logged in user with these credentials.
>
> **[9:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=572)** And to make it a little bit more pretty, let's tell the user that we just impersonated and write not danger, but success and something like impersonating dollar user.email.
>
> **[10:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=605)** And then we redirect to the shop main page.
>
> **[10:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=611)** So we did now a lot of things.
>
> **[10:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=613)** Let's see if all of that works.
>
> **[10:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=615)** So I'm heading into the browser, I'm nervous with myself.
>
> **[10:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=618)** Click on Manage Users and let's create a new user, tester@[test.com](https://test.com),
>
> **[10:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=630)** some password, and I hit Submit.
>
> **[10:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=635)** And we see, we just created a new user.
>
> **[10:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=637)** Let's do another one, tester2@[test.com](https://test.com)
>
> **[10:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=648)** and hit Submit.
>
> **[10:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=651)** I have another user.
>
> **[10:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=652)** So let's try to change this user to tester-7@[test.com](https://test.com).
>
> **[11:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=663)** We don't change the password.
>
> **[11:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=665)** Let's hit Submit and this works as well.
>
> **[11:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=668)** And finally, let's delete this user by hitting Delete and this works as well.
>
> **[11:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=673)** So now as you saw, we did not have to do very much.
>
> **[11:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=677)** So the most code that you see in this route is just infrastructure you need to display the page, et cetera, but the database operations are really, really minimal once we have all the infrastructure in place.
>
> **[11:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=691)** Now let's look at how this data looks inside the database because now it's the first time that we created new records in MySQL.
>
> **[11:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=701)** So I open MySQL Workbench and there now on the users table, there is this icon that I click on with this flash symbol and this will fetch the users from the database.
>
> **[11:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=714)** And there you will see the user id and the email.
>
> **[11:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=717)** And there you also see my very secret password.
>
> **[12:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=720)** That's really a problem.
>
> **[12:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=722)** Now you all know my password and that's indeed a real problem.
>
> **[12:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=725)** So this is something that should never happen.
>
> **[12:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=728)** You should never store clear text passwords inside a database because what could happen, for instance, I use the same password maybe everywhere.
>
> **[12:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=739)** So if the database gets hacked and people get access to this data, they could try to, for instance, log into some other services with the same credentials and really steal your identity.
>
> **[12:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=755)** That's the reason why it's really, also by GDPR and HIPAA, really almost forbidden to do what we did here just now.
>
> **[12:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-updating-and-deleting-users-with-sequelize?u=76281980&t=764)** And in the next video, we will make this right by building some proper password hashing into our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), application (4), hit (4), next (4), [[Fetch]] (2)
> **CLI Commands:** find (4), make (4), mysql (2)
> **Code Identifiers:** findbypk (3), findall (2), userid (1)
> **UI Navigation:** click on (3), scroll down (2), scroll up (1)
> **Env Vars:** crud (1), post (1), gdpr (1), hipaa (1)
> **Exercise Files:** template (3), boilerplate (1)
> **URLs:** [test.com](https://test.com) (3)
> **Cross-References:** as you saw (1), in the next (1)

#### Securing credentials with password hashing
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=0)** - [Instructor] In our last video, we discussed the dangers of storing passwords in plain text.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=5)** Now we will implement secure password hashing in our model.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=8)** Instead of storing passwords directly as you see it here, we will transform them into hashed version using a one-way function.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=16)** This ensures that even if the database is compromised, passwords remain protected.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=21)** Under the hood, we will also use salting, which adds randomness to each hash, preventing attackers from exploiting duplicate passwords.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=30)** For this, we will use Argon2, a modern secure hashing algorithm designed to resist brute force attacks.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=37)** Let's get started.
>
> **[0:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=38)** So I head back into Visual Studio Code, and there first we'll install Argon2.
>
> **[0:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=44)** So I type npm install Argon2 into my terminal.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=50)** Then I start my application right away, and then we have to go into the model because we want to build this functionality directly into the database model.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=60)** And for that I go to models, Sequelize, and there I open user.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=67)** And in user I will first bring in Argon2.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=70)** So in the first line I write import Argon2 from Argon2.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=80)** Now we have to use it, and for that we will use a so-called hook.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=84)** Let's close the sidebar here.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=86)** And we can define hooks on the database that are called on certain like points in the lifecycle of a record right as the second argument.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=98)** So here the second argument, I will now create an object, a JavaScript object, and there I will now create the hook.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=108)** I do this by writing hooks, and the hook that we want to create is the beforeCreate hook.
>
> **[1:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=117)** So this will be called before a database record is actually then created on the database, and it's an async function.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=126)** It takes user as an argument.
>
> **[2:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=130)** And in there I will simply write if user.password, so if a password is provided, which should be always the case by the way, I can simply do user.password equals await Argon2.hash user.password.
>
> **[2:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=156)** There are other modules like bcrypt or the node-core crypt library, and they need way more code to do the same as Argon2 does.
>
> **[2:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=167)** So it's really convenient to use it because this was it already.
>
> **[2:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=170)** So we now are hashing passwords before they're created, and we can try this out right away.
>
> **[2:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=177)** And for that I head back to the browser, and there we create a new user.
>
> **[3:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=182)** Let's call it hashtest@[test.com](https://test.com).
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=187)** And the password is test123456, and hit submit.
>
> **[3:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=192)** And I head back into MySQL Workspace and hit this flash icon up here.
>
> **[3:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=198)** You see that we have now a hash password for this user.
>
> **[3:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=202)** So this now works, but we also want to update new password.
>
> **[3:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=206)** So a user should also be able to change their password, and it should be hashed again.
>
> **[3:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=211)** We will take care of this now by creating a helper function.
>
> **[3:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=215)** We could also try to create the hook and then call it before update.
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=219)** So there is a hook for that.
>
> **[3:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=221)** But in my experience this rarely works because those database obstructions sometimes have a hard time to distinguish between a new password being provided or no password being provided and leaving it the same.
>
> **[3:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=234)** So I rather make it deliberately when we want to change a password.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=240)** And for that I can simply add an instance method that will do this for us.
>
> **[4:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=246)** And for that, this method should be called set password.
>
> **[4:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=250)** So I add it to the prototype.
>
> **[4:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=254)** User.prototype.setPassword equals, and it's an async function, and it gets the plainPassword.
>
> **[4:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=267)** And all I have to basically have to do is I do const hashedPassword equals await Argon2.hash plainPassword.
>
> **[4:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=286)** And finally, I also have to set this password now on this new record that is to be stored later.
>
> **[4:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=294)** This password equals hashedPassword.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=298)** That's all.
>
> **[4:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=299)** You could also add a try catch block or some error handling around this, but that's basically it.
>
> **[5:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=304)** We have an error here somewhere, yeah, I've missed the function here.
>
> **[5:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=308)** It's an async function.
>
> **[5:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=311)** Now it looks right.
>
> **[5:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=312)** So now we also have a way to update passwords, and we already made the preparations in our user route, and we will open that now.
>
> **[5:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=322)** So I go to routes, admin, user.js route.
>
> **[5:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=326)** When you scroll down, there is this post route where we update the user.
>
> **[5:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=329)** They already made the preparations because we are now here already asking if there is a password passed.
>
> **[5:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=337)** This only is true if the user fills out the new password, and there I can now simply write user.setPassword because this is an instance method, and I can just pass in the password.
>
> **[5:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=352)** And very important I have to do another thing.
>
> **[5:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=356)** I have to put await in front of it.
>
> **[5:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=358)** Because it's an async function, if you don't do that, this will not work.
>
> **[6:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=363)** So I'm saving now, and now we are ready to try this out.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=367)** So to recap, right now we have a plain text password still for tester.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=374)** And when a now edit tester and changed the password to Test1234567 and hit submit and go back to workbench to look into the database and I hit the execute button, I see that now this password also is hashed.
>
> **[6:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=394)** So now we are completely safe and secure.
>
> **[6:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=397)** So what we have implemented now is secure password hashing in our model, and passwords are now stored securely as hashes in the database.
>
> **[6:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=405)** This implementation ensures our user data is secure and protected against brute force or database compromised attacks.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=412)** In the next video we'll look at implementing user logins, and there we again have to add something to a model.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/securing-credentials-with-password-hashing?u=76281980&t=420)** It's a comparison function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), hit (4), [[npm]] (1), application (1), [[JavaScript]] (1)
> **Code Identifiers:** setpassword (2), plainpassword (2), hashedpassword (2), beforecreate (1)
> **CLI Commands:** npm (1), node (1), mysql (1), make (1)
> **Cross-References:** we discussed (1), go back to (1), in the next (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** visual studio (1), terminal (1)
> **Prerequisites:** install (2)

#### Implementing the user login
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=0)** - [Instructor] In this video, we are finalizing our user management by adding a login.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=5)** As you see, we already have this login form in place, but right now it's doing nothing.
>
> **[0:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=10)** When we look at our code, you will find this login in routes, user.js.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=17)** And here again, we have everything in place already.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=21)** So all that is missing are the calls to the database.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=25)** If you wonder where the view for that is, you will find it in login.ejs.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=30)** So that's the login form.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=33)** Let's close the site for now and let's start implementing.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=36)** So the login page is already rendered.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=39)** We are done with that.
>
> **[0:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=40)** And then we have this post login page.
>
> **[0:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=43)** So this is the route that actually does the login.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=45)** And here I added for you a Fastify schema definition.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=50)** So this is a definition that really makes sure that the data that is sent by the user is valid.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=57)** It shows the required properties and also some links.
>
> **[1:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=60)** For instance, the password has to be a length of 6, and the string that comes in has to be a email.
>
> **[1:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=66)** So that's proper input validation.
>
> **[1:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=68)** And this is then also completely automatically handled for you by Fastify.
>
> **[1:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=73)** So what we have to do now is we have to take the email address and the password, and we have to compare the password that is passed to us with the hashed password.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=86)** So we need a function for that, and we will implement it in a second.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=90)** But let's start with removing the boilerplate code here, so we can get rid of that.
>
> **[1:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=99)** We are getting the email and the password from the request body.
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=102)** And let's start by removing this placeholder code from here.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=107)** And let's start by looking up the user by their email.
>
> **[1:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=115)** And for that I can now simply write const user, user equals await, fastify.models.User.findOne.
>
> **[2:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=138)** So this will return exactly one record.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=140)** And now we have to add a query for the first term.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=143)** And this query is very simple. I'll write where.
>
> **[2:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=147)** And then email.
>
> **[2:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=149)** So we want to find the user with the given email.
>
> **[2:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=154)** Then if there is no user, and we have this error message here already, so I can simply extend it here.
>
> **[2:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=161)** If no user, then we want to provide this error message,
>
> **[2:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=173)** and we will return the user back
>
> **[3:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=181)** to the login page.
>
> **[3:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=183)** So I just copied over this section.
>
> **[3:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=186)** So now we have handled the case that there is no user.
>
> **[3:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=188)** So we have a user with this email address.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=191)** Now we have to ensure that the password is correct.
>
> **[3:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=193)** So how do we do this?
>
> **[3:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=195)** We now need a function that hashes the password that the user provided and compares it with the database.
>
> **[3:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=202)** And that will complete the code in here first before we implement this function in the model.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=207)** So stay with me.
>
> **[3:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=208)** I now add const isPasswordValid, equals await user.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=220)** So this is the user we just found, comparePassword, and I pass in this plaintext password that the user tries to log in.
>
> **[3:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=233)** Now I do some error handling or like condition handling.
>
> **[3:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=238)** If not isPasswordValid, what do I do then?
>
> **[4:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=243)** Yeah, I will show an error message and redirect the user.
>
> **[4:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=246)** We can now just copy this section from up there, because we just want to tell the user that the password is invalid or the email address is invalid.
>
> **[4:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=257)** We don't want them to give them any hints telling this is the wrong password.
>
> **[4:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=262)** So something is wrong. We won't tell you what.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=266)** If the user is valid, so this is where we end up if the password is valid.
>
> **[4:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=275)** We want to set the user on the session, and I will show you the infrastructure for that in a second.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=282)** But what we do is on the request, let's see if the object is also really called request.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=289)** That's not always the case.
>
> **[4:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=290)** Yeah, it's request, req, the short form, req.session.set.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=301)** And there I set the user, and I provide everything the application expects to be on a user, so I set the user.id, the email being user.email.
>
> **[5:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=318)** And we also want to let the user know that everything went fine.
>
> **[5:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=322)** So I take this messages section there, changed to success, and I say successfully logged in.
>
> **[5:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=338)** So now I promised you to show you the infrastructure that makes the user management work.
>
> **[5:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=343)** And it's really, really simple.
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=345)** It's in plugins, and there you have session.
>
> **[5:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=352)** And somewhere down there, you see we are setting current user again on reply.locals, which means that it will be available to all the templates.
>
> **[6:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=363)** So this means when the user is logged in, when the credentials are there, we can use this in the templates, for instance, to show the currently logged in user.
>
> **[6:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=372)** Now I will create this comparison function, which is very important, always needed when hashing is in place.
>
> **[6:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=379)** So again, go to models, sequelize, and open the User model.
>
> **[6:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=385)** And there I will now add a new static method or a new instance method.
>
> **[6:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=391)** And this is now User.prototype, and I call it comparePassword.
>
> **[6:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=402)** So this is the function we're already using now, but now we have to implement it.
>
> **[6:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=407)** It's async, it gets the plain password.
>
> **[6:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=417)** And there again, Argon2 makes it very easy for us, because I just have to return await argon2, and it gives us this verify function already out of the box.
>
> **[7:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=429)** And I compare this password, which is the password in the database with the plain password.
>
> **[7:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=440)** Now I save, and this should be it.
>
> **[7:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=443)** Now let's head back to the user.
>
> **[7:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=447)** And there is one thing that I still have to do, and this is wrong.
>
> **[7:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=453)** This session delete is not correct in my mind.
>
> **[7:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=457)** No, let's scroll down.
>
> **[7:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=458)** And there we also have this logout route that will delete the whole session object.
>
> **[7:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=464)** So with that, we should be done. So we can log in users now.
>
> **[7:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=467)** At Elion we can also log them out.
>
> **[7:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=470)** Let's try this out. So I'm heading into the browser.
>
> **[7:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=473)** First I have to create the new user, because I forgot my password.
>
> **[7:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=476)** So I create a new one, test2@[test.com](https://test.com).
>
> **[8:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=482)** Password is test12345.
>
> **[8:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=487)** And I hit Submit to create this user.
>
> **[8:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=491)** And now I head to Login.
>
> **[8:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=493)** I paste in the email address.
>
> **[8:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=495)** I put in a wrong password, let's see what happens.
>
> **[8:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=497)** And it's an invalid email password.
>
> **[8:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=499)** So now let's try to correct credentials.
>
> **[8:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=501)** So I put in test email address again, and now test 12345, and I hit login.
>
> **[8:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=508)** And you see that I'm successfully logged in.
>
> **[8:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=512)** Unfortunately you also see that on this screen size, might be different for you, now the menu looks a little bit scrambled up, because the screen width is not large enough.
>
> **[8:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=524)** But you see we are logged in now.
>
> **[8:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=526)** We also get the message.
>
> **[8:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=528)** And now when I click on this field that says logged in as then I should also be logged out.
>
> **[8:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=534)** Let's try this out. And we are logged out.
>
> **[8:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=538)** So this now works exactly as intended.
>
> **[9:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=541)** And with that we have everything for the user management implemented using MySQL and Sequelize.
>
> **[9:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=548)** Later we will get back to Sequelize to finish the order management.
>
> **[9:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-user-login?u=76281980&t=552)** But with that, we are done for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Management]] (3), database (3), hit (2), data (1), application (1)
> **Code Identifiers:** ispasswordvalid (2), comparepassword (2), findone (1)
> **CLI Commands:** find (3), mysql (1)
> **UI Navigation:** go to (1), open the (1), scroll down (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for instance (2)
> **File Paths:** user.js (1)
> **URLs:** [test.com](https://test.com) (1)


### 5. Redis: A Fast Store for Sessions, Caching, and Real-Time Features

[↑ Back to Table of Contents](#table-of-contents)

#### Fast and flexible basket and session management with Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=0)** - [Instructor] Key-value stores are a powerful and fast subset of databases.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=4)** And in this chapter, we will use Redis to handle our session data along with our shopping baskets.
>
> **[0:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=10)** At the core, key-value stores function like associative arrays or dictionaries in programming.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=16)** Each piece of data is stored with a unique key.
>
> **[0:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=20)** And the beauty of key-value stores is that they support different data types for both keys and values.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=27)** So why are we using Redis?
>
> **[0:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=29)** Redis is an in-memory key value store, and it only does periodic snapshots to the disc.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=36)** It's known for its extreme speed with data access times often at constant times, that's an O of one notation.
>
> **[0:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=45)** It's very versatile because it supports strings, lists, hashmaps, and sorted sets, and it's really ideal for ephemeral data, so data that changes often and also gets deleted very often.
>
> **[0:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=58)** And this applies to sessions and also to shopping baskets.
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=62)** On top of this, and we won't cover this in this course, Redis also supports queue-like behavior via pops up, and also can be clustered for higher performance and availability.
>
> **[1:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=75)** So here I'll show again the data types of Redis.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=78)** So we have strings, we have lists, we have sorted sets, and we have hashmaps.
>
> **[1:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=84)** So if we look closer into hashmaps, this means that we can now store a basket for a user.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=92)** So it's Bsk, that's just the namespace.
>
> **[1:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=94)** U1 would be the user 1.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=97)** The hash then is the item number, so the SKU.
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=102)** And then we can store the value like here, three.
>
> **[1:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=104)** And this would be the quantity in the basket.
>
> **[1:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=107)** And the access time, as I said, no matter how many users we have and how many baskets they have, and how many items are in there, access time will be almost constant.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fast-and-flexible-basket-and-session-management-with-redis?u=76281980&t=119)** So it will not grow by the number of users or baskets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Redis]] (5), [[Databases]] (1), [[Programming]] (1)
> **Definitions:** is an  (1), means that (1)
> **Env Vars:** sku (1)
> **Speakers:** - [instructor] (1)

#### Setting up Redis with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=0)** - [Instructor] Redis is a high performance in-memory key-value store, often used for caching, session management, and real time data processing.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=8)** In this video, we'll set up Redis using Docker, very similar to what we did with MySQL and MongoDB before.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=14)** So we start with writing docker pull redis, and while I'm doing that, yeah, let's make sure Docker is running.
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=24)** So it is running.
>
> **[0:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=25)** If it's not running for you, just start your Docker demon or desktop again.
>
> **[0:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=32)** Now it's downloading.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=34)** Now that we have the image, we want to start a container with it.
>
> **[0:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=38)** So I type docker run --name, that's the name of the container, redis -p.
>
> **[0:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=47)** And I, again, use the default port Redis is expected to run on and map this one on my local machine to the one in the container.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=55)** So it looks like as if Redis would run locally, 6379, and then I also have to tell Docker which image to use with -d and then write redis.
>
> **[1:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=71)** And now when a type Docker appears, you see that I'm having a MongoDB on my MySQL and a Redis container running.
>
> **[1:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=79)** For production environments, Redis setup involves additional considerations such as persistence, configuring Redis to persist data also to this security, to set up authentication, and secure Redis from unauthorized access.
>
> **[1:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/setting-up-redis-with-docker?u=76281980&t=92)** And there is also a cluster mode for high availability and scalability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (11), data (2), [[MySQL]] (2), [[MongoDB]] (2), management (1)
> **CLI Commands:** docker (7), mysql (2), make (1)
> **Prerequisites:** set up (2), setup (1)
> **Analogies:** similar to (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Exploring Redis with Redis Insight
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=0)** - [Instructor] Redis Insight is a powerful graphical user interface for managing your Redis database.
>
> **[0:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=6)** It's made by the creators of Redis.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=8)** It allows you to visualize your data, monitor performance, and run commands interactively.
>
> **[0:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=13)** In this video, we will explore Redis Insight and use it to load some sample data, including sessions, tickets, and leaderboards for demonstration purposes.
>
> **[0:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=21)** Let's get started.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=22)** So basically, I Googled for Redis Insight, and I'm now on the landing page for it.
>
> **[0:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=26)** And if you scroll down, you can click on Download now, and then a form will show up, and you just have to fill it out.
>
> **[0:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=33)** Unfortunately, Redis changed a little bit the business model, so now they really want to sell their cloud service as well.
>
> **[0:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=41)** But after filling out this form, you will get the Redis Insight application for free.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=48)** Once you have installed it, you can launch it, and you are presented with this page.
>
> **[0:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=53)** And there, very similar to what you saw in MongoDB Compass, and MySQL Workbench just add the Redis database.
>
> **[1:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=62)** And here already, you have all the credentials that match the installation that we have because we are running on the default port, so you can just click on Add Database.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=74)** After that, you will see the database in the list, and we can click on it.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=80)** We, right now, see nothing because the Redis installation is empty at this point.
>
> **[1:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=85)** But you can click on Load sample data, and this will then add some data to Redis.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=93)** And now you see some different data types basically represented.
>
> **[1:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=98)** Let's click Skip tour here and close that.
>
> **[1:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=102)** And for instance, when you click on sample_session, you see a typical Hashmap with session data in it, where you have user, right, the username email, and some activity information.
>
> **[1:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=114)** And we will create this during this section, so we will use Reddit for session management.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=120)** You also have sample_leaderboard, so this is a sorted set, where, in this set, basically. the leaders are sorted by score, and then there is also some chop queue with tickets in there, so a ticket queue.
>
> **[2:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=139)** You can explore this, play a little bit around with this data, but we will soon add our own data to Redis.
>
> **[2:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=146)** Redis Insight in general makes working with Redis intuitive and efficient.
>
> **[2:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/exploring-redis-with-redisinsight?u=76281980&t=150)** We won't use it so much during this course, but you can still explore the data in there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (13), data (9), database (4), business (1), cloud (1)
> **UI Navigation:** click on (5), scroll down (1)
> **Code Identifiers:** sample_session (1), sample_leaderboard (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** mysql (1)
> **Speakers:** - [instructor] (1)

#### Connecting our application to Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=0)** - [Instructor] In this video, we will set up Redis in our Fastify application using the ioredis library.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=5)** Let's get started.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=7)** So first, I will install the library.
>
> **[0:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=10)** So this is the underlying driver now.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=12)** We are not installing some higher-level abstraction layer here.
>
> **[0:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=18)** So it's pure Redis, npm install ioredis.
>
> **[0:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=24)** So there's no object or data mapping going on here.
>
> **[0:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=27)** So next, I start the application again and we start out, and you know this already with providing the configuration, and in config, I simply now add a new entry called redis.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=42)** And in there I only have to provide the host, which is localhost and the port, which is 6379.
>
> **[0:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=59)** So that's it for the config.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=61)** Again, when you look into server.js, you will see that somewhere down there, yeah, we are bringing in redis and config.redis.
>
> **[1:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=71)** So next, we are heading to the plugin section and there in databases, you'll find also an entry for redis.
>
> **[1:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=78)** There you already have this scaffold for Redis and what we have to do now is actually make the connection.
>
> **[1:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=85)** So the first thing we're going to do is we bring in ioredis.
>
> **[1:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=89)** So I write import Redis from "ioredis".
>
> **[1:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=96)** Note the uppercase here.
>
> **[1:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=99)** It is down here somewhere where you see the TODO.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=101)** We can add the try-catch block, try, catch (err).
>
> **[1:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=110)** And now in the try block, we are going to connect to Redis, which is very simple now.
>
> **[1:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=118)** So I can just write const redis = new Redis, and it should connect to config.host and config.port.
>
> **[2:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=136)** And there we can already, and this is maybe a little bit special, and there we can already somehow claim that we are connected to Redis because Redis will later then more lazily do the connection for us.
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=151)** Now I can set redisStatus to connected, and I do a fastify.log.info, .info.
>
> **[2:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=165)** "Connected to Redis".
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=171)** Then we have to do the error case where we do a fastify.log.error and we write failed to connect to Redis.
>
> **[3:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=190)** And we throw the error from there because we need Redis and there is no point in continuing.
>
> **[3:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=195)** Up here where we connect to Redis, we can also add the decorators.
>
> **[3:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=200)** So add fastify.decorate, and let's simply call it "redis".
>
> **[3:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=209)** So this gives us access to our Redis instance throughout the app and I call it redis.
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=219)** So now we have Redis on fastify.redis.
>
> **[3:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=224)** Finally, there is also the decorator for the graceful shutdown and there we will simply add now await.
>
> **[3:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=231)** And this is now await because this is actually asynchronously and happens then also not lazily, but immediately.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=240)** Redis, dastify.redis.quit.
>
> **[4:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=245)** And now when I save, I see connected to MongoDB.
>
> **[4:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=250)** Let's look up MySQL.
>
> **[4:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=255)** Let's look for Redis here.
>
> **[4:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=257)** Yeah, there we have it.
>
> **[4:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=259)** Connected to Redis is there.
>
> **[4:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=261)** So we are connected to Redis.
>
> **[4:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=263)** Let's look at our shopping page.
>
> **[4:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=265)** And as you see here, we are now also connected to Redis.
>
> **[4:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=268)** So the connection is there. We have decorated it correctly.
>
> **[4:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/connecting-our-application-to-redis?u=76281980&t=272)** And now Redis is available throughout the app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (29), application (2), next (2), [[npm]] (1), data (1)
> **CLI Commands:** npm (1), find (1), make (1), mysql (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** server.js (1)
> **Code Identifiers:** redisstatus (1)
> **Env Vars:** todo (1)
> **Speakers:** - [instructor] (1)

#### Managing user sessions with Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=0)** - [Narrator] In our current setup, we are using fastifySecureSession to manage client-side encrypted sessions.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=7)** All this happens here in plugins, session.js.
>
> **[0:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=12)** And if we look at it, you see that we are dealing here with the current users.
>
> **[0:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=17)** So when we are logging in, also all the messages stuff is happening here.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=22)** And we are using also this session file here to then edit to reply locals to make it available to the whole site.
>
> **[0:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=29)** But you see we are relying on sessions already.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=31)** Right now, we are encrypting the session data at the client level.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=36)** This means that it's stored at the client and the client then sends it with each request and there, we unpack it.
>
> **[0:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=44)** This works but it also makes the cookies larger.
>
> **[0:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=49)** It's a little bit of a performance hog and also, it's not the best practice to do it like that.
>
> **[0:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=54)** Usually, you rely on server-side sessions and just store the session ID in the cookie.
>
> **[1:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=61)** Very often, Redis is used for that and we will now change our session management system to use Redis under the hood.
>
> **[1:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=69)** For that, we have to change a few things.
>
> **[1:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=72)** First of all, we have to install another session system of Fastify because right now, we are using fastifySecureSession.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=80)** So I will now write in the terminal, npn install @fastify/session
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=91)** and we also install connect-redis.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=97)** Let's remove the sidebar, and this is by the way the Redis support of Connect, which is the underlying framework for Express.
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=105)** Now when this is installed, I start the server again and now we can start changing our session management system.
>
> **[1:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=113)** First, I bring in Fastify cookie because the session management we are using now is relying on it and it's already part of Fastify, so you don't have to install it, just have to bring it in.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=126)** So I do import fastifyCookie from "@fastify/cookie", this is a plugin, we have to register it in a second.
>
> **[2:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=142)** Then I bring in fastifySession, import fastifySession from "@fastify/session".
>
> **[2:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=156)** And then I bring in the Redis store from Connect Redis.
>
> **[2:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=161)** So import { RedisStore } from "connect-redis".
>
> **[2:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=172)** So that's a remnant of Express right here and it's compatible to the session system of fastifySession.
>
> **[3:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=180)** Then down here you see we are relying still on a SESSION_SECRET, and if you wonder where this comes from, it's just a random string that is right now stored in config file, it comes in the config.secret.
>
> **[3:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=195)** Next, when we know that we have a secret so we can proceed, I will register fastifyCookie by adding fastify.register and fastifyCookie.
>
> **[3:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=210)** So this is a plugin like the plugin we are right now on as well.
>
> **[3:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=214)** And now I will configure the Redis store.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=220)** For that, I now add const redisStore = new RedisStore().
>
> **[3:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=232)** And this is a construct, it takes a config object and in there, I write first, client.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=240)** So I define which client to use and we use the fastify.redis client that we decorated before.
>
> **[4:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=248)** And this is also why it's important that when you register the plugins, the Redis plugin comes first because we need it then when we want to initialize this module and as prefix, we can use anything.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=266)** I use myshop.
>
> **[4:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=267)** Don't forget the column here because it's a key that is then used like that in Redis.
>
> **[4:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=273)** Now we get an error.
>
> **[4:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=274)** Let's see what's happening.
>
> **[4:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=277)** I found a typo up here.
>
> **[4:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=281)** Fastify, relied on teletype too much.
>
> **[4:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=286)** So, okay, back in green.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=289)** So next thing we are doing on line 24, we will now change the fastifySecureSession to fastifySession.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=298)** And then we have to change a few entries because fastifySession is just a different plugin that needs different configurations.
>
> **[5:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=306)** And first of all we will set the store, which is the RedisStore we just set up before.
>
> **[5:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=315)** Then, I have to add a secret.
>
> **[5:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=319)** We will use the secret we had before, but the secure sessions plugin needed it in another way, then, and this is a mean one now, because if you leave it like that, your sessions will live for exactly 3.6 seconds because suddenly, this entry, max age is in milliseconds and you have to now multiply times a thousand.
>
> **[5:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=342)** So I really stumbled over that one.
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=345)** That's really, really hard to spot if you switch from one to the other.
>
> **[5:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=349)** And then I add two more config options, which is safeUninitialized: and I set it to false, which means that we will only save a session when data exists on it.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=367)** And we also set the resave option to false, which also prevents unnecessary saves.
>
> **[6:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=377)** Now we can hit save.
>
> **[6:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=379)** There's also one more mean little detail because this req.session.delete() we have in line 38 will also not work as intended, might even cause an error because this session management does not know a delete.
>
> **[6:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=394)** So what I'm doing here now is I want to just gracefully req.session.set the user to null and that should be it.
>
> **[6:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=411)** So this is all I want at this point.
>
> **[6:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=413)** I'm just setting the user to null and this is good enough.
>
> **[6:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=416)** We will likely come back to this a little bit later when we deal with the basket, but this should be good.
>
> **[7:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=422)** And while we do this, we also to go into routes, user.js because there we have this logout route and this also uses this destroy.
>
> **[7:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=431)** So what I will now do in request is this called clear session.
>
> **[7:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=436)** So I will now just call fastify.clearSession.
>
> **[7:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=444)** And this should do exactly what we wanted to do.
>
> **[7:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=447)** And this should do exactly what we wanted to do.
>
> **[7:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=450)** but the session can still stay alive to deal with the messages soon after.
>
> **[7:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=455)** It basically logout.
>
> **[7:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=457)** So clearSession is maybe not the right word for it.
>
> **[7:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=459)** It's more like the user log out.
>
> **[7:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=461)** And there we also have to remove this destroy because this will not work either.
>
> **[7:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=467)** Instead, I do a fastify.clearSession and I need to pass in the request object here.
>
> **[7:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=475)** So this will now hopefully clear the session in a way so that the user is deleted.
>
> **[8:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=480)** So it's maybe rather logout than really clearing the session.
>
> **[8:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=484)** Now we can try all this out.
>
> **[8:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=486)** So let's see if our session management works.
>
> **[8:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=488)** So I'm heading into the browser, I go to manage users, I click on one user, I become this user, so now this should be on and I'm going to Redis Insights, there, I click on refresh.
>
> **[8:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=501)** And there you see this new session on myshop.
>
> **[8:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=504)** When I click on it, you see all the session data that is currently stored for this user.
>
> **[8:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=509)** If I delete it now here, the user session will be gone, but we will now try if this logout work.
>
> **[8:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=515)** So click on the user and you see, I'm logged out now.
>
> **[8:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/managing-user-sessions-with-redis?u=76281980&t=519)** So we have now a fully functional Redis-based session management system and in the next videos, we will look at what else we can do with Redis in our shopping application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (14), management (6), data (3), next (3), express (2)
> **Code Identifiers:** fastifysession (5), fastifysecuresession (3), fastifycookie (3), clearsession (3), redisstore (1)
> **Prerequisites:** install (4), setup (1), configure (1), set up (1)
> **Definitions:** is a  (4), means that (2)
> **UI Navigation:** click on (4), go to (1)
> **File Paths:** session.js (1), user.js (1)
> **Best Practices:** best practice (1), don't forget (1)
> **CLI Commands:** make (1)

#### Basic Redis operations for shopping baskets, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=0)** - [Instructor] Our shop already has a working basket UI, but so far, the logic to store and retrieve items isn't implemented.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=7)** Right now, adding an item, removing it, or even viewing the basket doesn't actually persist any data.
>
> **[0:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=13)** So I can, for instance, click on Add to Basket, there, I will be told that I have to log in first, because we assume that for our basket, the users have to log in first, because, as you will see, we will use the user ID as one unique ID to manage the basket, otherwise we could also use the session ID.
>
> **[0:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=35)** But in our case, users have to be logged in first.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=39)** So I can now simply click on, can now impersonate the user, and when I go back into the shop, I can click on Add to Basket, and it will even tell me that an item was added to the basket, but this is a lie, because right now, we don't have any persistence going on.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=57)** And to fix this, we'll connect our basket system to Redis, which is a very fast and efficient way to handle data, like basket items, because it's very fast when it comes to updates and deletes and all those things.
>
> **[1:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=71)** So to implement that, I will now head back into Visual Studio Code and everything we need to do is going on in routes, basket.js, and if you're curious about how this basket views and work, you can look into basket.ejs.
>
> **[1:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=90)** But now, let's close the left sidebar.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=93)** And the first thing I will add, and you see on top, there is this function that basically handles the login requirement.
>
> **[1:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=100)** It's called for every route, but now I will add another helper function there, and this function will help us create the basket key, which is the unique hash identifier that we will use in Redis and it will be namespaced, and I'll show you that now.
>
> **[1:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=118)** So I write function basketKey, and it gets the request object, because we need the session and the user from it, and this happens right here.
>
> **[2:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=128)** Now when I write const user = req.session.get,
>
> **[2:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=137)** and we want the user.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=140)** If there is no user, which should not happen, as I said before, because we are protecting our routes against that, but still, we want to be defensive here as well, so I'm also here checking for this condition and returning.
>
> **[2:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=155)** Now if there is no user, but if there is a user, we return, and this is now this basket key.
>
> **[2:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=163)** So, let's call it mybasket and call on user, and now, we add this unique identifier, the user.id, so this is the basket for a given user, and then in there, we will have items, so I also namespace it like that.
>
> **[3:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=188)** And now we can use this function throughout the code to get a robust key that we can use.
>
> **[3:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=194)** Next, I'm going to implement the route that adds items to the basket, because this is a good way to test what's going on.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=201)** So this is the post route add, and in there I will now, there where you see the TODO, add const key = basketKey,
>
> **[3:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=218)** and I pass in the request.
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=219)** So this will give us now the basket key and what do I have to do now?
>
> **[3:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=224)** Of course, I have to now manipulate the basket items, and I do this in Redis, which with each increment by, so write await, and I will explain it in a second, fastify.redis, so this is the Redis instance that we decorated before.
>
> **[4:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=243)** Now write hincrby and first, that's the key, so that's the namespace and the hash.
>
> **[4:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=253)** And in this hash map, I now have SKUs and quantities.
>
> **[4:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=259)** So the key or the, yeah, the field that I want to manipulate is the field with the given SKU, and we get this SKU from the request body.
>
> **[4:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=270)** If you scroll up a little bit, you see it here.
>
> **[4:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=273)** And now, we want to set the quantity, and that's really important that we are true to the data types, and in this case, we'd really have to pass in an integer, because otherwise, increments won't work.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=289)** So what this will do now is it will, for the given key and the SKU, either set the quantity if there is no existing entry there, or so it will create a new entry, or it will increment the quantity by the given value.
>
> **[5:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=309)** So, this should work as is.
>
> **[5:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=312)** So what I'm going to do now is I head over to my shop again, and I'm locked in, so everything should be fine, and I start adding things.
>
> **[5:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=322)** So Almdudler, for instance, is an Austrian drink, it's a soda, apple strudel is an apple cake.
>
> **[5:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=330)** Let's also take an Austrian cookbook, and we should be good.
>
> **[5:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=335)** Next, I'm heading into my Redis insight, and there I refresh, and you see that now I have my basket entry and when I look into that, there is the user and it's the user ID 4.
>
> **[5:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=349)** And when I go into that, you see that the items are there.
>
> **[5:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=352)** So it's field value pair, so that's exactly what we wanted to see.
>
> **[5:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=357)** Next, I'm going to implement the route that shows us basket items.
>
> **[6:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=361)** For that, I'm going back into Visual Studio Code.
>
> **[6:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=365)** And there, we have this get route, and there we now have to implement fetching items.
>
> **[6:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=372)** So the first thing I'm going to do again is I'm getting the basket key, const key = basketKey for this request for this user ID.
>
> **[6:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=384)** And the next thing I'm going to do is I have to fetch the basket contents first.
>
> **[6:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=390)** Stay with me. I cannot fetch it right into items.
>
> **[6:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=394)** We have to do something with that then, but I do const basket = await fastify.redis.hgetall,
>
> **[6:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=406)** get all the items from a hash map for the given key.
>
> **[6:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=412)** So this will now return us all the basket items for a given key.
>
> **[6:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=416)** But this is now a a list of objects, and we have to convert it to an array, and we'll do this in the next line where I now remove this placeholder and write Object.entries for the basket, so this is the generic way how to convert such a data object into an array.
>
> **[7:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=442)** And there I have the SKU and the quantity as it's provided to us by Redis.
>
> **[7:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=453)** And for each of them, I will now return an element which is SKU and quantity, and the quantity shall be parseInt, quantity to the base of 10.
>
> **[8:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=480)** And that's it, so the items array should then be passed to the templates in line 36 so this works, right?
>
> **[8:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=487)** In our shop, there is no link yet to open the basket, because our system yet does not know that we have items in the basket.
>
> **[8:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=495)** We will change this in a bit, but what I can do is up there, I can just call the basket URL, and I'm doing this now.
>
> **[8:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=505)** And as you see, now I have my basket here, so this is the UI I already prepared for you.
>
> **[8:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=511)** We don't have a name and the price right now, because for that, we will need our items, but we have the SKU and the quantity.
>
> **[8:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=519)** Right now we cannot remove and we cannot clear the basket, but we will now change this.
>
> **[8:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=524)** So, the next thing is I'm going to implement the route to delete items from the basket.
>
> **[8:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=533)** So basically what we are having here is again, some kind of (indistinct).
>
> **[8:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=537)** It's not an editor interface, but the principles are the same.
>
> **[9:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=542)** So to remove an item, I will now, here in the TODO part of the post remove route where we will get the SKU from the request body.
>
> **[9:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=556)** There, I will now again get the key to the right const key = basketKey for the request.
>
> **[9:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=567)** And then I will call await fastify.redis.
>
> **[9:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=577)** And again, it's very simple.
>
> **[9:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=579)** I want to delete the entry with hdel hash map delete for a given key for a given SKU.
>
> **[9:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=590)** Let's save this.
>
> **[9:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=592)** Let's head back and let's see what happens when I remove these items with these three entries.
>
> **[9:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=599)** And you see, it's gone. So this is now working as well.
>
> **[10:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=602)** So all that is missing now is clearing the basket, so there should be a route called /clear.
>
> **[10:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=609)** Where is it? So it has to be somewhere down there.
>
> **[10:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=614)** You can also search for it, of course.
>
> **[10:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=617)** That's the byroute. We will do it a little bit later.
>
> **[10:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=620)** But here, right here, we can clear the basket.
>
> **[10:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=624)** And this is now also, again, very simple.
>
> **[10:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=627)** So I get the key, const key = basketKey for the request and the user.
>
> **[10:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=636)** And I just call await fastify.redis.del for delete,
>
> **[10:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=645)** and I'm deleting a given key.
>
> **[10:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=649)** Let's try this out.
>
> **[10:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=650)** So what I want to do now is, as I said, by now, we will do this in another section where we put everything together.
>
> **[10:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=658)** Now I want to clear the basket, so I click on Clear Basket, and it's gone, so this is exactly what we wanted to see.
>
> **[11:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-1?u=76281980&t=665)** Now we have a working basket management, and as I said, we also want to be able to buy the contents of a basket, and we will do this in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (10), next (7), data (4), [[Fetch]] (2), generic (1)
> **Env Vars:** sku (8), todo (2), url (1)
> **Code Identifiers:** basketkey (5), parseint (1)
> **UI Navigation:** click on (4), scroll up (1), open the (1)
> **Definitions:** is a  (4), is an  (2)
> **Cross-References:** in the next (2)
> **Tools:** visual studio (2)
> **Analogies:** for instance (2)

#### Basic Redis operations for shopping baskets, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=0)** - [Instructor] In our current implementations, users can add things to the basket, but this does not reflect in the UI anywhere.
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=8)** But actually we already have the infrastructure in place to show the basket count, but right now we are not populating this specific variable.
>
> **[0:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=18)** When I look into my Visual Studio Code and I go into views and there into layout, and look for basket, you will see that we are looking for a variable called basketCount.
>
> **[0:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=34)** And if it's there, we show even a link to the basket.
>
> **[0:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=38)** So what we need to do now is we have to somewhere add functionality to populate this central basket in our application.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=48)** And for that, we will now create our own basket plugin.
>
> **[0:52](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=52)** So now after extending the plugins, now finally you can write your own one.
>
> **[0:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=57)** And for that, in plugins, I create the new file and then call it basket.js.
>
> **[1:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=65)** In there I will now import, and this is now Fastify-specific.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=70)** So we need to input the plugin function from fastify-plugin, it's fp,
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=83)** and then we can start writing the plugin code.
>
> **[1:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=87)** And this is an async function called basketPlugin.
>
> **[1:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=96)** And in there, let's close the sidebar in there, first we get the argument fastify, this is default for the plugins.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=108)** And then we add a hook.
>
> **[1:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=111)** And this pre handle is then called before the request to the routes are processed.
>
> **[1:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=116)** So I add fastify.addHook, and this hook is the preHandler hook.
>
> **[2:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=125)** And there we define an async function that gets the request and the reply.
>
> **[2:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=133)** So this is provided by Fastify as the infrastructure, but if you are on Express, or if you do this on Express, this is very much like also middlewares work.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=143)** In here, I need the basket key, and then have to fetch the contents of the basket.
>
> **[2:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=149)** And we did this before, right?
>
> **[2:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=151)** So what I will do now is I head to my routes and to basket.js, and there I'm now lazy, and I'm just copying the body of my basketKey function here.
>
> **[2:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=164)** Let's call request request, because it's consistent with everything we did so far.
>
> **[2:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=171)** And in here now I'm trying to get the user from request session.
>
> **[2:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=178)** And if I get it, I will create the basket keys, but now I store it in a variable const key.
>
> **[3:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=186)** So this is very similar and this gives us, again, the basket key.
>
> **[3:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=190)** Of course, we could move this function into some library or helper function to write it once and use it everywhere.
>
> **[3:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=197)** But now for simplicity reasons, let's do it like that.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=201)** So next what I'm going to do is I'm going to fetch all the basket items for this user.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=207)** So I write const basketItems, and you know that already because it's await fastify.redis.hgetall
>
> **[3:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=221)** for the given key.
>
> **[3:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=225)** So now I have all the basket items, but what I actually want to do is I want to get a summary account of all the items.
>
> **[3:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=233)** And for that, I'm now using a little bit of functional programming magic by writing const basketCount.
>
> **[4:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=243)** And I will iterate over Object.values.
>
> **[4:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=249)** So the values, the items in basketItems, and there I call reduce, which is basically nothing else than a function that reduces the contents of some array to another value.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=266)** And it's often used to summarize or to add up items.
>
> **[4:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=272)** So in my reducer function, I will now get the total and the quantity.
>
> **[4:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=282)** And with total and quantity, I add total + and I have to do parseInt again to make sure that we really have an integer quantity to the base of 10.
>
> **[4:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=297)** And then as the second argument, I have to add a zero.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=301)** So this is the starting value of this whole function.
>
> **[5:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=306)** Finally, what I want to do is I now want to populate my templates with it.
>
> **[5:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=315)** And this works as we discussed already, where reply.locals, so everything in reply.locals is available to templates.
>
> **[5:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=323)** And I'm now extending it by adding the expansion syntax of JavaScript.
>
> **[5:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=329)** And there reply.locals, or an empty object if there is no reply.locals.
>
> **[5:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=338)** And then I add the basketCount to this object, which means then the templates have access to the basketCount.
>
> **[5:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=350)** Now finally here, I have to export this module now.
>
> **[5:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=353)** So I write export default fp(basketPlugin).
>
> **[6:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=362)** So fp is a function that comes from Fastify and makes the contents of the plugin available throughout the application.
>
> **[6:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=371)** If you want to learn more, look into the documentation.
>
> **[6:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=375)** But right now, this is all we have to know.
>
> **[6:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=377)** We give it a name, we call it "basket-plugin."
>
> **[6:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=382)** And we should be all good.
>
> **[6:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=385)** Of course, we are still missing something because we have to also register this plugin and we will do this in server.js, and there I scroll down, and somewhere after line 12, I add import basketPlugin from "./plugins/basket.js."
>
> **[6:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=409)** Still nothing has happened.
>
> **[6:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=411)** We have just imported it, now we have to register it, and we will do this after Redis was registered and also the session plugin was registered.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=420)** So this is here after line 38, I'll write fastify.register.
>
> **[7:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=428)** And there I now finally register my basketPlugin.
>
> **[7:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=434)** Now I save.
>
> **[7:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=436)** And now if everything worked correctly, I can go into my shop and I log myself out again, I log in as a user and you see now I see that we have 31 items in the basket.
>
> **[7:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=448)** So that's exactly what we wanted to see.
>
> **[7:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=450)** When I click on it, I get to the basket to the few we saw before.
>
> **[7:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=454)** So now we have closed this loop, we can now access our basket.
>
> **[7:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=459)** Let's try it out, also let's add more things to the basket.
>
> **[7:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/basic-redis-operations-for-shopping-baskets-part-2?u=76281980&t=463)** And you see it counts up, exactly as we would expect it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), express (2), [[Fetch]] (2), [[Redis]] (2), next (1)
> **Code Identifiers:** basketcount (4), basketplugin (4), basketitems (2), addhook (1), prehandler (1)
> **File Paths:** basket.js (2), server.js (1), plugins/basket.js (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)


### 6. Bringing It All Together: Creating and Managing Orders

[↑ Back to Table of Contents](#table-of-contents)

#### Fetching item information for the basket
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=0)** - [Instructor] So far we built the foundation of our basket system using Redis to store basket data.
>
> **[0:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=5)** However, if we look at the basket page, now we only see the sku and the quantity.
>
> **[0:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=10)** To make the basket useful, we need more details about the items like the name and the price.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=16)** But this information is stored in MongoDB, not Redis, and this is where things get interesting.
>
> **[0:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=22)** We now need to combine data from multiple sources so we get the basket content from Redis, but the product details from MongoDB.
>
> **[0:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=31)** By fetching item details from MongoDB and merging them with basket data from Redis, we of course make the whole system way more useful and it also shows us a few more advanced concepts about dealing with different data sources and we will do this now.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=46)** So I head back into Visual Studio Code and let's first look into Views and in Views, let's look into basket.ejs.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=55)** Because there you see that we are iterating over the items array and then we want to output the sku to name the price and the quantity and now we have to populate name and price.
>
> **[1:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=67)** So how can we do that?
>
> **[1:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=69)** I go back into routes and basket.js.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=74)** Let's close the sidebar.
>
> **[1:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=76)** And the route that we want to change is the get slash route because this shows the basket view we just saw.
>
> **[1:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=83)** So let's scroll down and you see that we are already mapping through the basket, but now we have to do a little bit more to make this work.
>
> **[1:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=93)** We also have to change the syntax a little bit because right now this syntax is the shortcut that will return the last entry in a function.
>
> **[1:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=103)** And what we have to do now is we have to change this from the shortcut to the long format.
>
> **[1:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=108)** That's pretty easy, so in line 29, we remove this opening bracket and in line 32, this closing bracket, and then I add a proper return statement.
>
> **[1:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=119)** So add return, and we are now returning this again.
>
> **[2:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=126)** So this should basically do exactly the same what we did before, but now it's the long form of the JavaScript syntax.
>
> **[2:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=134)** What we have to do next is we have to first add an async to this function.
>
> **[2:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=143)** So to this mapping function, this mapping function is now async and this will add another complication in a second, but bear with me.
>
> **[2:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=152)** First thing I'm doing is I'm getting const item equals await fastify.Item.findOne.
>
> **[2:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=163)** So I want to find one item using Mongos, and this is the one item with this sku that we get from the mapping function.
>
> **[2:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=176)** Now I can extend my return statement by adding name and we are doing a little bit defensive programming here because maybe the item does not exist anymore.
>
> **[3:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=186)** We have it in the basket and someone just deleted it from MongoDB.
>
> **[3:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=190)** So I have to now write item, question mark.
>
> **[3:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=194)** If there is an item I will provide or use the item name, otherwise I write unknown item.
>
> **[3:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=205)** And for the price, it's the same.
>
> **[3:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=207)** If there is an item, I can use item.price, otherwise I provide an N/A.
>
> **[3:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=217)** So this looks good now, right?
>
> **[3:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=219)** But actually, if you do it like that, nothing will happen because you will get an array of promises because we are calling an async function on line 30, and this is just not how asynchrony works.
>
> **[3:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=234)** So what we have to do now is we have to wrap all this into a promise all, which is also pretty cool because this then ensures parallel execution more or less because all the promises are then executed against the database in parallel.
>
> **[4:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=252)** So I add await Promise.all and I wrap the whole content, the whole section here.
>
> **[4:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=266)** And now we have a lot of nesting, but now this should work.
>
> **[4:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=271)** So what we are doing now is we are basically creating promises because this promise is forced on us because we are doing an await call in line 31 and then all these promises come back to line 29.
>
> **[4:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=285)** From there, they're basically processed in a semi parallel way.
>
> **[4:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=290)** So let's head back to our basket because this now is supposed to work.
>
> **[4:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=295)** So I go to the basket and I click on the number of items and you see it really works.
>
> **[5:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=301)** So this is exactly what we wanted to see.
>
> **[5:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=303)** Now you saw already a little bit more advanced way and also, maybe also an obstacle if you have to transform data and do IO calls, which are database calls in the end to other systems.
>
> **[5:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/fetching-item-information-for-the-basket?u=76281980&t=319)** We will do a little bit more of this kind of data combination throughout this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Redis]] (4), [[MongoDB]] (4), parallel (3), database (2)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** scroll down (1), go to (1), click on (1)
> **Definitions:** is an  (2)
> **File Paths:** basket.js (1)
> **Code Identifiers:** findone (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Creating the order and using transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=0)** - [Instructor] So far, we built a functional basket system, using Redis, and integrated product details from MongoDB.
>
> **[0:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=7)** Now we are taking it to the next step, turning the basket into an order.
>
> **[0:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=11)** This is where we bring in MySQL and ensure everything works together smoothly.
>
> **[0:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=16)** To do this, we will fetch all basket items from Redis.
>
> **[0:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=20)** We will retrieve product details from MongoDB and we will then create an order in MySQL, using a transaction.
>
> **[0:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=28)** The transaction ensures that the order is complete and consistent, and if anything goes wrong, we can roll it back to prevent partial orders.
>
> **[0:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=38)** So let's get started.
>
> **[0:39](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=39)** I'm now back in Virtual Studio Code and there, I'm opening routes basket.js because this is where everything, what we're going to do now will be happening.
>
> **[0:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=48)** I take this item fetching code and copy it because we will use something very similar for the buyer route now.
>
> **[0:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=55)** So I copy everything here from my line 26, down to 39.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=63)** I copy it and then I scroll down until I find the post by route, and it's right here.
>
> **[1:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=70)** And also, let's remove the sidebar here.
>
> **[1:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=74)** So what we are going to do next is, we are going to do the same retrieval that we did before for the get route, now for this post route because we actually need the same data there.
>
> **[1:26](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=86)** And of course, we could now go ahead and move this into a function of its own.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=91)** But now for simplicity and clarity, let's do it right here.
>
> **[1:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=95)** We also have to change one thing here because now if there is no item, so if we cannot find an item with this SKU in MongoDB, I actually want to throw an exception because something went wrong and we cannot create an order from an item that does not exist.
>
> **[1:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=114)** So the first thing I'm going to do now is, if not item, so we don't have an item, I will throw a new error and this is then something like, could not find an item with SKU,
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=144)** dollar SKU.
>
> **[2:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=148)** I hope you understand the SKU comes here from line 120 by the async mapping function.
>
> **[2:34](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=154)** So now we protect ourselves against any product.
>
> **[2:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=157)** Without an SKU, we can now remove this defensive coding and just stick with the data that we get from the item.
>
> **[2:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=170)** And now after this, when we scroll down, we end up with a list of items with a SKU, a name, a price, and the quantity.
>
> **[2:59](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=179)** So exactly what we want to have.
>
> **[3:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=181)** Now we have to create an order for these items and for that, we have to write a little bit of code.
>
> **[3:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=187)** So the first thing I'm going to do is, I'm now bringing in sequelize.
>
> **[3:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=191)** So I write const sequelize equals fastify dot sequelize.
>
> **[3:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=205)** And if you remember this, this is what we decorated on fastify when we created the MySQL plugin.
>
> **[3:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=212)** And there, it also told you that there will be a reason to have the sequelize instance, not just the model on fastify.
>
> **[3:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=220)** And this is now, because now I want to start a sequelize transaction.
>
> **[3:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=226)** So I write await sequelize dot transaction,
>
> **[3:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=234)** and this is a function.
>
> **[3:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=238)** And this function now takes a callback, and this is asynchronous and it takes transaction as an argument.
>
> **[4:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=249)** And in this function body, so we are using shortcut here.
>
> **[4:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=255)** In this function body, we will now first create an order.
>
> **[4:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=262)** We do this by writing const order equals await fastify,
>
> **[4:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=272)** dot models dot order, and we call create on it.
>
> **[4:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=281)** Now we also need some data on this order, and we will fetch this right away because we need the user and we get it from the session.
>
> **[4:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=289)** So const user equals request dot session dot get user.
>
> **[4:58](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=298)** And here, we now fully trust that the user actually exists.
>
> **[5:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=302)** Now on the order creation, we have to of course provide data, so the data for the order where JavaScript object, which then contains the user ID.
>
> **[5:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=315)** So this is how we map the order to the user table, and it is now user ID.
>
> **[5:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=322)** Then we need the email address because we define this also as a required field on the schema.
>
> **[5:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=331)** So it's user dot email.
>
> **[5:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=335)** And I also want to set a status, although the default is already pending, and now set it explicitly.
>
> **[5:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=345)** Now as a next argument to discrete function, I pass in, so do a comma, and there, I'm passing the transaction.
>
> **[5:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=357)** Again, this is just a shortcut.
>
> **[6:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=360)** It's the same as if I would write transaction comma transaction.
>
> **[6:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=366)** So now with that, we are creating an order.
>
> **[6:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=369)** After that, we have an order and now we want to assign items to it.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=374)** So these are all the basket items. So how can we do this?
>
> **[6:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=377)** Of course, we have to now iterate over all those basket items and create a new basket item for each of those.
>
> **[6:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=385)** So now we created an order and now we want to add items to it.
>
> **[6:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=390)** And for that, we have to now iterate over all the items in the basket and create an order item record for it.
>
> **[6:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=397)** And we will do this and we stay still within this sequelized transaction.
>
> **[6:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=401)** You see it up there.
>
> **[6:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=403)** So we need to stay in this transaction context, and I add this here now after line 143 where I now write for const item of items.
>
> **[7:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=421)** And for each of those, I will now call await fastify, dot model dot order item dot create.
>
> **[7:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=437)** And what would we need in the order item table?
>
> **[7:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=443)** Of course, first we need the order ID.
>
> **[7:25](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=445)** So this now maps the order item to the order.
>
> **[7:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=449)** And I can do this, simply by using the order instance that we got when we created the order.
>
> **[7:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=461)** And then I can just fetch the ID from it.
>
> **[7:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=464)** Then we need an SKU, which is item SKU.
>
> **[7:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=470)** Then we need a name, which is item dot name.
>
> **[7:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=475)** So now we need everything that we fetched before from MongoDB.
>
> **[8:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=480)** We need a price, which is item dot price, and we need a quantity, which is item quantity.
>
> **[8:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=496)** And then as a second argument, again, I add the transaction because also this needs to happen in the transaction context.
>
> **[8:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=508)** And we stay still in this function when we now finally, after we created all the order items, clear our basket by writing await fastify dot redis, dot del for delete, and we delete with this basket key that we got before.
>
> **[8:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=531)** So this is much the same as clearing the basket.
>
> **[8:56](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=536)** Now because all of this is happening, and let's scroll back a little bit, in this transaction context that we created here in line 134, if anything fails along the way here, even this call to Redis, then everything is rolled back and there will be no order in MySQL, because MySQL really when something is stored there, it should be really bulletproof because that's a order table, right?
>
> **[9:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=562)** So there should not be partial orders or some wrong data in there.
>
> **[9:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=567)** Maybe unlikely, we want to do a business reporting from it, for instance.
>
> **[9:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=572)** So if you're coming from transaction from other systems, you might wonder where we do now, this transaction, commit a transaction rollback in case of a problem.
>
> **[9:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=582)** This is all handled for us by sequelize So if anything goes wrong within this function, sequelize will then call rollbacks on MySQL under the hood.
>
> **[9:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=593)** And with that, we should be good because after that, we'll thank the user for the purchase and then we will redirect to the homepage.
>
> **[10:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=600)** Of course, we could now also create the confirmation page and all of that, but this is not really related to handling the database topics.
>
> **[10:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=609)** So now let's try this out.
>
> **[10:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=610)** I'm heading back to my shop, and now I simply click on buy now.
>
> **[10:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=618)** And this looks good.
>
> **[10:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=620)** So the basket, as you see now up here, right, is gone because it's now empty, it has been processed.
>
> **[10:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=627)** And now I could go into manage orders to manage this order.
>
> **[10:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=632)** And as you see, you see nothing because we have to finalize the order management for this route still, but we can still look into MySQL workbench, and I'm doing this now.
>
> **[10:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=643)** So there, we should have this orders table.
>
> **[10:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=648)** Let's look into that.
>
> **[10:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=649)** And as you see already, we have two orders in there and we also should see order items.
>
> **[10:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=655)** So when I click on that, you see, yeah, here are all the order items that are associated to and order it, and you see it on the very right.
>
> **[11:06](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=666)** So this is the connection.
>
> **[11:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=668)** We have an order ID that connects to an order.
>
> **[11:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=672)** Let's look at this again.
>
> **[11:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=673)** And the order is connected to a user via user ID.
>
> **[11:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/creating-the-order-and-using-transactions?u=76281980&t=679)** So let's go ahead and finalize everything by creating an nice automated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (7), data (6), [[Redis]] (4), [[MongoDB]] (4), product (3)
> **CLI Commands:** mysql (7), find (3)
> **Env Vars:** sku (8)
> **UI Navigation:** scroll down (2), click on (2)
> **File Paths:** basket.js (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Implementing the order admin view
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=0)** - [Instructor] In our application, managing orders is a crucial part of the admin workflow.
>
> **[0:04](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=4)** In this video, we will now implement to few all orders along with their details, and we will also add a route to mark orders as shipped.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=14)** So by the end of the video, the admin will have full control over the order management process.
>
> **[0:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=20)** Along the way, we will also learn how to join data in relational databases like MySQL using Sequelize.
>
> **[0:28](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=28)** So let's head into Visual Studio Code.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=30)** And there we are now working in routes, admin, orders.js.
>
> **[0:36](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=36)** And if you wonder how the views look, they are in views, admin, orders.js.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=42)** So the first thing I'm going to implement now is fetching all orders.
>
> **[0:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=46)** So here in line eight, we see that we need all orders.
>
> **[0:50](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=50)** I remove this placeholder now and I will now replace it with a function that fetches all orders, but also the order items and also the users or the use of the customer for this order.
>
> **[1:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=63)** So I'll start writing const orders equals and await and do fastify.models.Order.findAll.
>
> **[1:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=80)** So I want all orders, but I also want to include now the order items for each order.
>
> **[1:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=87)** And this is, in database terms, a join.
>
> **[1:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=91)** So I provide a config object, and in this config object, I will now write include.
>
> **[1:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=97)** Because with include, we can define a join in Sequelize.
>
> **[1:41](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=101)** And this is an array and it's an array of objects.
>
> **[1:45](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=105)** So I add my first object, what do I want to include?
>
> **[1:49](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=109)** I want to include the order item, so I'll write model: fastify.models.OrderItem.
>
> **[2:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=120)** And now this whole infrastructure that we have with the declaration on fastify really comes in handy because we have full access to everything via fastify and we want to include those order items as items under the property items.
>
> **[2:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=140)** So for each order, we will get an array of items.
>
> **[2:24](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=144)** We also want to include the user.
>
> **[2:27](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=147)** And I can do this right here by adding another object and it's the model: fastify.models.User.
>
> **[2:40](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=160)** And I want to include this user as user.
>
> **[2:46](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=166)** So we will get the user as the property user, but we only need the email address here.
>
> **[2:53](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=173)** So I add another entry, and this is an array where we can with attributes basically define which fields we want to include or restrict the result to fields and we only need the email address.
>
> **[3:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=190)** Now we have to do one more thing because we have to map this data of the order now into a form that template can deal with because we need proper arrays.
>
> **[3:18](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=198)** And for that, we do some mapping here.
>
> **[3:21](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=201)** So I write const orderData equals orders.map.
>
> **[3:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=209)** And if you want to see the data structure, you can also console.log orders to see how this looks like under the hood if this isn't clear.
>
> **[3:38](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=218)** But now I map through this data, and for each entry, I get an order and I then use again the shortcut version of the map function where basically the object that stands in the end will be automatically returned.
>
> **[3:57](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=237)** And I can do this by simply defining here an object.
>
> **[4:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=240)** So I will map through the orders and now I compose basically the entries of the array and the id is the order.id.
>
> **[4:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=251)** The status is the order.status.
>
> **[4:17](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=257)** The email is the order.user.
>
> **[4:20](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=260)** And there we now do a ?.email because there might be a case where this user was deleted from the database, a GDPR request or something, so the user might not be there.
>
> **[4:33](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=273)** And if the user is not existing anymore, we can as well directly use the email from order.email because if you remember, we stored the email also directly on the order object, so we can use it now here.
>
> **[4:47](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=287)** We also want to provide createdAt because we want to show, of course, when the order was created, and this is order.createdAt which is given to us automatically by Sequelize.
>
> **[5:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=302)** And then we want to add a nested object OrderItems.
>
> **[5:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=311)** And in OrderItems, we again have to do a mapping, so I do order.items.map.
>
> **[5:22](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=322)** And for each item, I will now again return an object.
>
> **[5:31](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=331)** And this is also why this shortcut syntax somewhat makes sense because with that, you can write pretty concise code, so I don't have to return or anything.
>
> **[5:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=343)** I can just write sku, this item.sku.
>
> **[5:51](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=351)** Quantity is item.quantity and the price is item.price.
>
> **[6:05](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=365)** So let's scroll down.
>
> **[6:07](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=367)** And now we want to provide the orders now as order data.
>
> **[6:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=374)** So don't forget this.
>
> **[6:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=375)** So we want to provide the mapped version of the orders to the template.
>
> **[6:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=383)** Now when we head back into our shop, let's see what happens when I click on Manage Orders and you see it works.
>
> **[6:29](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=389)** So now I have all the orders, it's two.
>
> **[6:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=392)** I see the status, I see the email address of the user, there is a date on it, it's just a timestamp now, and I also see the items associated with it.
>
> **[6:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=403)** So all that is left to do is add this functionality to set an order as shipped because now I'm in my warehouse and I'm working through the orders and finally I want to set them as shipped.
>
> **[6:54](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=414)** And maybe there would be then also workflow to notify the user and all that, but we will make it very simple.
>
> **[7:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=420)** So I scroll down to set shipped because this is the route that is called here.
>
> **[7:09](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=429)** And this is now super easy.
>
> **[7:10](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=430)** You should be able to do it yourself, but I will show it to you one more time and one last time.
>
> **[7:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=436)** So here in line 59, I want to fetch the orders.
>
> **[7:19](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=439)** So I write await fastify.models.Order.findByPk
>
> **[7:32](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=452)** because we get the id up here via request params and this is then given to us this orderId.
>
> **[7:44](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=464)** So now I have an order and all I have to do is to set order.status to shipped.
>
> **[8:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=480)** And finally, of course, I have to save this change and do an await order.save.
>
> **[8:11](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=491)** And there we have the sanity check.
>
> **[8:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=493)** We have to move up.
>
> **[8:16](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=496)** So if there is no order, so we can do this right after line 59, we can also let the user know, this is basically something that should not happen when you're on this page, this order should exist, but we are just being defensive here, which makes sense.
>
> **[8:35](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=515)** So every time you fetch something from a database, making sure that the data is really there is a good practice.
>
> **[8:43](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=523)** Now I can save this and let's see if this work.
>
> **[8:48](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=528)** So I head back to my order management system and now I try to set this order as shipped.
>
> **[8:55](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=535)** You see it when you hover over it that we are calling set shipped with the order already.
>
> **[9:02](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=542)** So click on this and this order is shipped and this is shipped as well.
>
> **[9:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=548)** Now all our customers get their Austrian products.
>
> **[9:12](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=552)** Everyone is happy.
>
> **[9:13](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=553)** And we are also happy because we are done now.
>
> **[9:15](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/implementing-the-order-admin-view?u=76281980&t=555)** We now have a fully functional, minimal shopping system and we used MySQL, MongoDB, and Redis to implement it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), database (3), management (2), [[MySQL]] (2), [[Fetch]] (2)
> **Code Identifiers:** createdat (2), findall (1), orderdata (1), findbypk (1), orderid (1)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **UI Navigation:** scroll down (2), click on (2)
> **CLI Commands:** mysql (2), make (1)
> **File Paths:** orders.js (2)
> **Exercise Files:** template (2)
> **Best Practices:** don't forget (1), good practice (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=0)** - [Daniel] Thank you for taking this course.
>
> **[0:01](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=1)** I hope you enjoyed it.
>
> **[0:03](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=3)** During this course, you've learned the basics of using databases with (indistinct).
>
> **[0:08](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=8)** More importantly, you also learned when to use which and how the code can be organized in a real project.
>
> **[0:14](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=14)** Now that you have an overview about the technologies that are out there, I encourage you to experiment with them and try them in real projects.
>
> **[0:23](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=23)** To deepen your knowledge, you find dedicated courses to all introduced technologies and many more in the library.
>
> **[0:30](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=30)** If you have questions, feel free to use the q and a section of this course or reach out to me via LinkedIn.
>
> **[0:37](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=37)** If you liked this course, please also use the thumbs up button on the top of this page.
>
> **[0:42](https://www.linkedin.com/learning/databases-for-node-js-developers-25329301/next-steps?u=76281980&t=42)** I'm Daniel Khan, I hope to see you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [daniel] (1)


## Instructor

- [[Daniel Khan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/databases-for-nodejs-developers-5978020)

## Skills Covered

- Database Development
- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Node.js- Testing and Code Quality]] | **4 of 11** | [[Express Essentials- Build Powerful Web Apps with Node.js]] →

## Appears In

- [[Explore Web Development with Node.js]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Practical Database Examples]] — Database Development
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Introduction to Couchbase]] — Database Development
- [[Advanced Node.js- Scaling Applications]] — Node.js

---

[↑ Back to top](#)