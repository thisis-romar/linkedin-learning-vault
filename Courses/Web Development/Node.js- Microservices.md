---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: node-js-microservices-22685072
url: "https://www.linkedin.com/learning/node-js-microservices-22685072"
duration_minutes: 219
duration: 3h 39m
level: Advanced
updated: 8/8/2023
learners: 14870
skills:
  - Microservices
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/nodejs-microservices-4403064"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGNhXwSHfVTTg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691165894653?e=2147483647&amp;v=beta&amp;t=ThnvpyREcLCGAomRfWZlgFSbTPHmqCrdrD-9g9rvjC4"
linkedin_topic: Web Development
learning_paths:
  - '[Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)'
  - '[Advance your Node.js Skills](../../Paths/Web%20Development/Learning%20Paths/Advance%20your%20Node.js%20Skills.md)'
prev_courses:
  - '[Node- Authentication](Node-%20Authentication.md)'
  - '[Advanced Express](Advanced%20Express.md)'
next_courses:
  - null
  - '[Advanced Node.js](Advanced%20Node.js.md)'
path_nav: '[{"path":"Explore Web Development with Node.js","position":11,"total":11,"prev":"Node- Authentication","next":null},{"path":"Advance your Node.js Skills","position":6,"total":8,"prev":"Advanced Express","next":"Advanced Node.js"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - skill/microservices
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node.js-%20Microservices.md)

![Node.js: Microservices](https://media.licdn.com/dms/image/v2/D560DAQGNhXwSHfVTTg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691165894653?e=2147483647&amp;v=beta&amp;t=ThnvpyREcLCGAomRfWZlgFSbTPHmqCrdrD-9g9rvjC4)

# Node.js: Microservices

> In this fast-paced era of distributed systems, mastering microservices—not just deploying services, but truly understanding the patterns and principles that drive them— is essential for developers. And in organizations large and small, Node.js is often the platform of choice for building microservices architectures. In this course, Daniel Khan shows you how to use Node.js to create a microservice 

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-microservices-22685072) | 3h 39m | Advanced | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understanding how microservices are built and used](#understanding-how-microservices-are-built-and-used)
  - [What you should know](#what-you-should-know)
- [**1. Prepare Your Development Environment**](#1-prepare-your-development-environment) (5 videos)
  - [Installing Git, Node.js, and Docker](#installing-git-nodejs-and-docker)
  - [Getting the exercise files from GitHub](#getting-the-exercise-files-from-github)
  - [Setting up Visual Studio Code, ESLint, and Prettier](#setting-up-visual-studio-code-eslint-and-prettier)
  - [Launching MongoDB, Redis, and Jaeger in Docker](#launching-mongodb-redis-and-jaeger-in-docker)
  - [Installing MongoDB Compass](#installing-mongodb-compass)
- [**2. Planning Your Microservice Migration**](#2-planning-your-microservice-migration) (4 videos)
  - [Setting up and exploring your sample application](#setting-up-and-exploring-your-sample-application)
  - [Understanding the sample apps code](#understanding-the-sample-apps-code)
  - [Getting insights with OpenTelemetry and Jaeger](#getting-insights-with-opentelemetry-and-jaeger)
  - [Setting your mission](#setting-your-mission)
- [**3. Your First Service: The Catalog Service**](#3-your-first-service-the-catalog-service) (7 videos)
  - [What's your goal for this chapter?](#whats-your-goal-for-this-chapter)
  - [Creating the service](#creating-the-service)
  - [Designing a REST API for the catalog service](#designing-a-rest-api-for-the-catalog-service)
  - [Adding business logic and database access](#adding-business-logic-and-database-access)
  - [Creating your first REST endpoint](#creating-your-first-rest-endpoint)
  - [Completing the API](#completing-the-api)
  - [Testing REST endpoints](#testing-rest-endpoints)
- [**4. Creating a Service Registry**](#4-creating-a-service-registry) (9 videos)
  - [What's your goal for this chapter?](#whats-your-goal-for-this-chapter)
  - [Setting up the registry](#setting-up-the-registry)
  - [Registering services](#registering-services)
  - [Creating and testing the registration route](#creating-and-testing-the-registration-route)
  - [Unregistering services](#unregistering-services)
  - [Querying the registry](#querying-the-registry)
  - [Removing expired services](#removing-expired-services)
  - [Registering on service on start](#registering-on-service-on-start)
  - [Adding heartbeat and unregistering on shutdown](#adding-heartbeat-and-unregistering-on-shutdown)
- [**5. Using Services**](#5-using-services) (7 videos)
  - [What's your goal for this chapter?](#whats-your-goal-for-this-chapter)
  - [Creating the service client](#creating-the-service-client)
  - [Using the catalog service](#using-the-catalog-service)
  - [Testing the catalog service](#testing-the-catalog-service)
  - [Sanitizing data](#sanitizing-data)
  - [Creating the CartService](#creating-the-cartservice)
  - [Service monitoring with OpenTelemetry and Jaeger](#service-monitoring-with-opentelemetry-and-jaeger)
- [**6. Authenticating APIs**](#6-authenticating-apis) (6 videos)
  - [API authentication with JWT](#api-authentication-with-jwt)
  - [Creating the user service](#creating-the-user-service)
  - [Add JWT tokens to the user service](#add-jwt-tokens-to-the-user-service)
  - [Make the front end use JWT authentication](#make-the-front-end-use-jwt-authentication)
  - [Using bearer headers](#using-bearer-headers)
  - [Protecting endpoints with JWT](#protecting-endpoints-with-jwt)
- [**7. Adding Fault Tolerance and Resilience**](#7-adding-fault-tolerance-and-resilience) (8 videos)
  - [What's your goal for this chapter?](#whats-your-goal-for-this-chapter)
  - [Chaos testing](#chaos-testing)
  - [Adding caching to reduce load and bridge outages](#adding-caching-to-reduce-load-and-bridge-outages)
  - [Using queues for decoupling](#using-queues-for-decoupling)
  - [Installing up RabbitMQ](#installing-up-rabbitmq)
  - [Setting up the order service](#setting-up-the-order-service)
  - [Producing orders](#producing-orders)
  - [Consuming orders](#consuming-orders)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding how microservices are built and used](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-how-microservices-are-built-and-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-how-microservices-are-built-and-used?u=76281980&t=0)** - [Daniel] Are you ready to ride the [Microservices](../../Skills/Software%20Development/Microservices.md) wave and dive into the fascinating world of distributor systems? Let's unlock the secrets of modern [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) using [Node.js](../../Skills/Web%20Development/Node.js.md). In this course, we will embark on a journey with Node.js, creating a microservice architecture from scratch while exploring crucial concepts like service discovery, resilience, and decoupling. On the way, we will tackle the all-too-common challenge of transforming a monolithic app into a flexible modular system composed of individual services. By the end, you'll have gained practical knowledge that you can apply in your day-to-day work. So are you ready to unleash the power of Node.js and microservices in distributed systems? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) (1)
> **File Paths:** node.js (3)
> **CLI Commands:** node (3)
> **Speakers:** - [daniel] (1)

#### [What you should know](https://www.linkedin.com/learning/node-js-microservices-22685072/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/what-you-should-know?u=76281980&t=0)** - This course is not for beginners. If you're new to Express, start with my courses "[Building a Website with Node.js and Express.js](../Database%20Management/Building%20a%20Website%20with%20Node.js%20and%20Express.js.md)," and "Advanced Express," which you can find in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) library. These courses will provide you with all the fundamentals you need. To get the most out of this course, make sure you know [JavaScript](../../Skills/Software%20Development/JavaScript.md) including variables, functions and callbacks. You'll also need to be familiar with the ES6 syntax, like classes, error functions, spread syntax, and objective structuring since they'll popup throughout the videos. Plus, understanding promises and async await is important. When it comes to [Node.js](../../Skills/Web%20Development/Node.js.md), you should know how to install modules using [npm](../../Skills/Web%20Development/npm.md) and how to start an application. You also need a good handle on Express and how HTTP works. It will be super helpful if you have a basic understanding of [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and REST APIs. You can find these topics covered in my courses that I mentioned earlier, but there are also dedicated courses for specific topics in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Express.js](../../Skills/Web%20Development/Express.js.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** node (2), find (2), make (1), npm (1)
> **Env Vars:** rest (2), es6 (1), http (1)
> **File Paths:** node.js (2), express.js (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)


### 1. Prepare Your Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Git, Node.js, and Docker](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-git-node-js-and-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-git-node-js-and-docker?u=76281980&t=0)** - [Narrator] In the next few videos, I will walk you through setting up your development environment for this course. See it, like a checklist to make sure you won't get stuck later. So first of all, of course, we need [Node.js](../../Skills/Web%20Development/Node.js.md) and there I would just recommend installing the current LTS, means long-term supported version that you see here on the [nodejs.org](https://nodejs.org) website. Then you will also need a [Git](../../Skills/Software%20Development/Git.md) client on your system to acquire the exercise files from [GitHub](../../Skills/Software%20Development/GitHub.md). And you see when you go to [git-scm.com](https://git-scm.com) that you will be presented with selections for your particular operating system. As we will also use [MongoDB](../../Skills/Software%20Development/MongoDB.md) and [Redis](../../Skills/Software%20Development/Redis.md) and we will use Docker to run them. You will need to have Docker installed on your system. Here again, go to the respective website, this is [docker.com](https://docker.com) and download the respective installation files for your system. Once you have installed all of that on your system, you can check it in your console or terminal by running node -v, docker -v, and git -v. Maybe the versions you see are different, but if the output looks somewhat like this, you are all set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **CLI Commands:** docker (4), git (3), node (2), make (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1), [git-scm.com](https://git-scm.com) (1), [docker.com](https://docker.com) (1)
> **Tools:** github (1), terminal (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (1), download the (1)
> **File Paths:** node.js (1)
> **Env Vars:** lts (1)

#### [Getting the exercise files from GitHub](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-the-exercise-files-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-the-exercise-files-from-github?u=76281980&t=0)** - To download all the files to get started, you have to clone this [Git](../../Skills/Software%20Development/Git.md) repository and I will show you now how you can [Fetch](../../Skills/Web%20Development/Fetch.md) all the branches. So I'm now in my system terminal and there in the desktop folder, you can choose freely where on your system you want the exercise files to live. I will now create new folder node-[Microservices](../../Skills/Software%20Development/Microservices.md)
>
> **[0:25](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-the-exercise-files-from-github?u=76281980&t=25)** and then I will change into this folder. Cloning a repository with all its branches is not as easy as one might think, but I will show you all the steps now. But bear with me. First you have to type git clone --bare and now I'm pasting in the [GitHub](../../Skills/Software%20Development/GitHub.md) URL that I got before and then I add blank end .git So that's important. It has to end on blank .git, and then I hit Return. Next I type git config --bool core.bare false.
>
> **[1:14](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-the-exercise-files-from-github?u=76281980&t=74)** If this all looks rather akin to you, don't worry for me as well, but this is how it's done. Next I type git reset --hard
>
> **[1:28](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-the-exercise-files-from-github?u=76281980&t=88)** and then I type git branch. Now you see it's a lot of branches are coming down and that's it. Now we have downloaded all the branches of all the exercise files. I will show you later how to switch between these branches but this is way easier in Visual Studio Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (7), node (1)
> **Tools:** terminal (1), github (1), visual studio (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** url (1)
> **Speakers:** - to (1)

#### [Setting up Visual Studio Code, ESLint, and Prettier](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-visual-studio-code-eslint-and-prettier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-visual-studio-code-eslint-and-prettier?u=76281980&t=0)** - [Instructor] In this course, I will be using Visual Studio Code as my IDE. It's free and it comes with great [Node.js](../../Skills/Web%20Development/Node.js.md) support out of the box. I highly recommend that you use it as well at least for this course. I'm on the Visual Studio Code website, and you see that I'm already presented with an installer for my system. I downloaded and installed it already. After installing it, you can open it right away and it'll present you with a welcome screen. I will now go ahead and we'll just open the exercise file folder that we downloaded from [GitHub](../../Skills/Software%20Development/GitHub.md) before. So I go to File, Open Folder, and on my desktop, I find node [Microservices](../../Skills/Software%20Development/Microservices.md) and I will just open it. Visual Studio Code also comes with an integrated terminal that will open right away. For that I go to View, Terminal and you see it's basically, a regular system terminal that lets me execute Command (indistinct) and it's important for instance to run [npm](../../Skills/Web%20Development/npm.md) install. The sample project we will be working on, comes with a configuration for [ESLint](../../Skills/Software%20Development/ESLint.md) and Prettier. ESLint checks your code for errors as you type while Prettier can reformat your code to match some code conventions. There is a Visual Studio code extension for ESLint. You can install it by clicking on the Extensions icon on the left menu bar. So I click here and there. I then look for ESLint and I will just install the first that comes up. Next, I will also install Prettier ESLint. You see it here on my list.
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-visual-studio-code-eslint-and-prettier?u=76281980&t=95)** I just type it in for you for, in case it does not show up right away. Prettier ESLint and here also I click on Install. Now I can go back to my explorer and you already see that I have a vscode directory here and there I have a settings [JSON](../../Skills/Web%20Development/JSON.md). And this settings JSON, contains settings that are needed for Prettier ESLint to work properly. What you also see in Visual Studio Code is here on the bottom left, this main branch symbol, and when I click on it, you see all the different branches that I have here and this you can use to basically switch between those branches. So now I'm on branch 05_06B but now let me switch back to Main. That's the main branch that we will be using when we get started. Also, while we work together on this course, you will see that I will be on different branch names. Just ignore that you stay on Main with Visual Studio Code now up and running, we are now ready to install a few more things that we'll need throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Tools:** visual studio (6), terminal (3), github (1)
> **Prerequisites:** install (6)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **CLI Commands:** node (2), find (1), npm (1)
> **Env Vars:** json (2), ide (1), npm (1)
> **File Paths:** node.js (1)
> **Cross-References:** go back to (1)

#### [Launching MongoDB, Redis, and Jaeger in Docker](https://www.linkedin.com/learning/node-js-microservices-22685072/launching-mongodb-redis-and-jaeger-in-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/launching-mongodb-redis-and-jaeger-in-docker?u=76281980&t=0)** - [Instructor] Previously we installed Docker and we will now use Docker to install a few more third party applications that we will use. And to make this a little bit more easy for you I have prepared those Docker commands for you already. You find them in resources, support, and there is a file snippets.md. And if you scroll down a little bit, you see the commands for getting [MongoDB](../../Skills/Software%20Development/MongoDB.md). MongoDB is a [NoSQL](../../Skills/Software%20Development/NoSQL.md) database and we will first run docker pull mongo. So I'm just copy pasting it now into my terminal. So this is very handy. I can use it right here in Visual Studio Code. It takes a little bit. Next, I can start Mongo already by copying this Docker run command. Don't copy the back ticks with it, just the command. And we have MongoDB running. Next we want to get [Redis](../../Skills/Software%20Development/Redis.md). So I run docker pull redis, and again, I will started now right away by copy pasting the command. Then I also want to install and run Jaeger. So Jaeger is a observability tool and I will cover that a little bit later. For now, we will just copy this long command that we have here and paste it into the console
>
> **[1:38](https://www.linkedin.com/learning/node-js-microservices-22685072/launching-mongodb-redis-and-jaeger-in-docker?u=76281980&t=98)** and it'll also automatically now pull Jaeger so you don't have to pull before. Usually it does it automatically. And just to check if Jaeger is working I will quickly just follow this link. So I'm clicking on CMD and click on this link and you'll see the UI of Jaeger popping up. Next, I want to also install Redis Commander. Redis Commander is a tool that you can use to look into Redis. So I just copied the [npm](../../Skills/Web%20Development/npm.md) install line for Redis Commander but we have to run it with sudo because we are installing globally. So I add sudo, that's now just a MAC thing. If you're on [Windows](../../Glossary/Service/Windows.md), you don't have to do this. You don't have a sudo, but I have to do it. So sudo npm install -g Redis Commander and it asks for my password. And then we can start it right away with copying this line. And it will now listen on local host 8081. I will open this URL real quick and you'll see this gives me insights into my running Redis application. Right now, it does not tell me much because I have no Redis data created at this point. We will not use Redis Commander within this course but if at some point you're curious what is actually stored in the database, feel free to fire up Redis Commander and have a look.
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/launching-mongodb-redis-and-jaeger-in-docker?u=76281980&t=191)** During this course it might well be that you start your computer and this would mean that your Docker containers won't be running anymore. So make sure that every time you restart your computer or when you see you get an error on the console that it cannot connect, then head to Docker Desktop. I can do this by simply clicking on this whale symbol here and open the dashboard. And there you see all the different Docker containers that are running at this point and you can click on this run icon to run them. So don't forget this. It's really important that MongoDB, Redis, and Jaeger are at least running throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (12), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (4), [npm](../../Skills/Web%20Development/npm.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** docker (9), sudo (4), make (2), mongo (2), npm (2)
> **Prerequisites:** install (5)
> **UI Navigation:** click on (2), scroll down (1), open the (1)
> **Definitions:** is a  (4)
> **Env Vars:** cmd (1), mac (1), url (1)
> **Tools:** terminal (1), visual studio (1), docker desktop (1)
> **File Paths:** snippets.md (1)

#### [Installing MongoDB Compass](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-mongodb-compass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-mongodb-compass?u=76281980&t=0)** - [Tutor] We need to install one more thing, and that's [MongoDB](../../Skills/Software%20Development/MongoDB.md) Compass. MongoDB Compass is one UI for MongoDB, and we will just need it once during this course. But again, like with [Redis](../../Skills/Software%20Development/Redis.md)-Commander, it might help you to look at the data at some point to see what's going on under the hood. So please, search for MongoDB Compass, and then when you end up on this page, just download and install it, and then we can run it already. So I opened it already, and when I started, I'm presented with a connection screen. And the only thing you have to know is that our MongoDB listens on 37017, so not 27. So I changed that, and then I click Connect. And we are now connected to this MongoDB instance running in Docker. And right now, you don't see much, but the system collections. But as soon as we start our sample application the shopper collection will show up here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (6), [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Prerequisites:** install (2)
> **CLI Commands:** docker (1)
> **Speakers:** - [tutor] (1)


### 2. Planning Your Microservice Migration

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up and exploring your sample application](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-and-exploring-your-sample-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-and-exploring-your-sample-application?u=76281980&t=0)** - [Instructor] We are now almost ready to get started. In this video, we will set up our sample application that we will use as a starting point. When we look at the directory structure, you see that there is a resources directory with some helpers. I will refer to them throughout the course. And then there is a folder called workspace. So in this folder, we will be working. There is also a folder [Microservices](../../Skills/Software%20Development/Microservices.md), which is empty at this point. And there is this shopper application. So, the first thing I will do is I will cd into workspace and shopper. And as for any [Node.js](../../Skills/Web%20Development/Node.js.md) application, the very first thing is that I run [npm](../../Skills/Web%20Development/npm.md) install. Because there you see we have this package.[JSON](../../Skills/Web%20Development/JSON.md) file with all the dependencies. We have a [Redis](../../Skills/Software%20Development/Redis.md) client, [MongoDB](../../Skills/Software%20Development/MongoDB.md) is loaded, a lot of stuff. And also OpenTelemetry, we will talk about this a little bit later. One important thing in this file is that, as you see here, we are using NodeMon. NodeMon is a little tool that restarts your application whenever you do a change. So during development, that's very helpful because you don't have to constantly reload your Node.js application. So into now use NodeMon. To start the application, I simply run npm run dev. And as you see, it says it's connected to Redis, connected to MongoDB,
>
> **[1:32](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-and-exploring-your-sample-application?u=76281980&t=92)** and the application is also listening on port 3000. With that, we have a working application. And the next thing I will do is I head into my browser, and I open localhost on port 3000 to see what is there. And you see it's a very simple application. There is not much right now, an empty shopping page. You can log in. And then there is some [User Management](../../Skills/Web%20Development/User%20Management.md), and we will use that to create the user right away. So I create the user test at [test.com](https://test.com). I give the user some password. Also click this button, set as admin. So in a regular application, obviously you would not want the user management to be accessible when you're not logged in. This is just here now for development purposes because somehow you have to create this admin user. So I will do this right now. And when you do this, please remember the user and the password that you created because we will need to log in later then as well. So I click submit and we have a new user. I can log in with this user. So enter [test.com](https://test.com) and enter the password and then I log in. As you see now, I have now more menu items up there. I can manage items,
>
> **[3:04](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-and-exploring-your-sample-application?u=76281980&t=184)** means I can create new items. I can manage orders, but right now we have no orders. Well, it's a shop and it's a little bit of a pity that it's empty, right? We should populate it now with some sample items. And for that, we will head into MongoDB Compass and I click the refresh button up here. And now you see that the dropper database shows up. And I open it and I head into items. And there you see this green button, Add Data. And there I select Import JSON or CSV file. And then I select from my Node microservices directory, in the resources directory, in the support directory, you find this items JSON file. And we will select this, and you see it's a JSON file full with items that we can load into our database to pre-populate it. So, I click select, and then import. Now we have 15 items imported. And when I now look into my shop, we see that we have a very simple item list. So that's not a pretty shop, but it serves the purpose. So very simple list of items. And if you wonder how I came up with these very funny item names, this was [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). Now, I can also add items to my cart.
>
> **[4:40](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-and-exploring-your-sample-application?u=76281980&t=280)** And you see, when I have items in my cart, that this shows up now here on the menu bar. Then I can click on my cart. There I have now a list of all the items. And then I can finally click on buy now. And now the order is placed, and I can see this order now when I click into manage orders. So when I click into that here now, you see that there is this order now, and I can now change the order status to shipped by clicking on this red set shipped button. And this is pretty much all our sample application can do. In the next video, we will have a closer look at its code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2)
> **CLI Commands:** node (3), npm (2), cd (1), find (1)
> **Env Vars:** json (3), csv (1)
> **File Paths:** node.js (2), package.json (1)
> **Definitions:** is a  (3)
> **URLs:** [test.com](https://test.com) (2)
> **Ports:** port 3000 (2)
> **UI Navigation:** click on (2)

#### [Understanding the sample apps code](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-the-sample-apps-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-the-sample-apps-code?u=76281980&t=0)** - [Instructor] In the previous video we looked at the shop application from a user perspective, and now let's dig into the code a little bit. So let's go simply through the file system. So first of all, I have this client directory, nothing much in there but a style sheet. Then we have the server directory, and there you find the bin, start.js script, which is used to start the Express server. And you should understand pretty much everything in there because it's really just about starting an Express application. I just point out the few things that might be different. The first thing starts with line 10 where we configure tracing, and then we'll talk about this later in more detail, but know that the shop application and all the other services that we will add come with tracing built in. And this is tracing using OpenTelemetry. And OpenTelemetry is a library for tracing that lets us later then use Jaeger to look at how services are communicating with each other. So this comes out of the box, you don't have to understand each detail, but I will show you how this looks like in the next video then. Everything else pretty normal. Then we have two helper functions that do the connection to Mongoose and the connection to [Redis](../../Skills/Software%20Development/Redis.md). You can look into this, always when you just want to drill into something you can click on Command or Control, then follow this link that Visual Studio code gives you,
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-the-sample-apps-code?u=76281980&t=95)** then we configure the Redis client, and the maybe most interesting part is down here starting line 41, because here make sure that we first connect to Redis, and then connect to Mongoose, and only then we call server.listen to actually start the Express server. I do this because Redis and Mongoose are prerequisites. If the connection fails here, then it does not make any sense to start the server. So this is why it is like that. You will see the same pattern later then when we create those services. Next let's head into app.js, and let's scroll through it. So this is a very regular setup for an Express application. Maybe, most notable, we are using Redis as a session store, so by now if you look into this Redis command, you should already see the sessions being stored there. And if we scroll a little bit down here in line 47, that's maybe also interesting, we are assigning the template variables there. So let's head into this. This is a middleware, and this middleware reads the user ID from the session, so when I login the user ID is stored into the session. And here in the middleware we'll use the local UserService class to [Fetch](../../Skills/Web%20Development/Fetch.md) this user and assign it also to res.local, which makes it available to our templates. Additionally, now that we know the user down here, we also load the shopping cart.
>
> **[3:09](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-the-sample-apps-code?u=76281980&t=189)** So what you saw before when you see the shopping cart's count in the menu bar, this data is all fetched here. Back into app.js, let's close the middleware, then we set up the routes, and this is done by route handlers, so let's drill into that. So in routes, index.js, we use the Express Router module to set up all the routes that this application has. And you see here it renders the index page, but we can look into, for instance, shop, index.js, and there you see we have the CatalogService, and the CartService, and we are calling CatalogService.getAll, and then render the list with the items. So if you know Express, this should look very familiar to you. One important part now is this CatalogService, let's drilled into that, or in general all those services. So in this application I am using this pattern where you call all the classes that deal with data service classes. And that's the reason why this CatalogService is called like that. So this CatalogService is not a microservice, it's just a service class. And it has all the methods that connect to the database. For instance, getAll, this will fetch all the items from the database or get one which fetches one item. And we also have classes for the cart,
>
> **[4:42](https://www.linkedin.com/learning/node-js-microservices-22685072/understanding-the-sample-apps-code?u=76281980&t=282)** which uses Redis as a backend. Let's have a quick look into that. So here you see that we are using Redis commands, HINCRBY, for instance, when we add something to the cart. One more important thing is, and you see that in the CatalogService up here, we are loading the Item model, and this indicates that we are using Mongoose here. So Mongoose is a database abstraction that we are using here and it connects to [MongoDB](../../Skills/Software%20Development/MongoDB.md), and just makes it a little bit easier to deal with the data that's stored in MongoDB. These are the basic building blocks of our shop application. Everything in there follows pretty much the same schema. Feel free to browse a little bit more through the code, and I will also explain important pieces of it when we need it as we go through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (8), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2)
> **File Paths:** app.js (2), index.js (2), start.js (1)
> **Definitions:** is a  (4), is called (1)
> **Prerequisites:** configure (2), set up (2), setup (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** previous video (1), later in (1), in the next (1)
> **Analogies:** for instance (3)
> **Code Identifiers:** getall (2)

#### [Getting insights with OpenTelemetry and Jaeger](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-insights-with-opentelemetry-and-jaeger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-insights-with-opentelemetry-and-jaeger?u=76281980&t=0)** - [Instructor] I mentioned before that I added OpenTelemetry tracing to the shop application, and it'll be also included in all services we will create. At this point, you can find the code related to OpenTelemetry and lip tracing in the shop application, and if you look through it, you might find it complicated to set up but I did the work already for you and you don't have to touch these files throughout this course. OpenTelemetry is an open source project within the Cloud Native Computing Foundation, CNCF. It provides a set of APIs, libraries, agent and instrumentation to make observability a built in feature of cloud native software. Observability in this case is about tracking the performance and health of an application. One of its major components is tracing. Jaeger is also a CNCF project and it's a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in service-oriented architectures. In simpler terms, it's like a detective that helps you understand what's slowing down parts of your application by tracking every step in a process or trace. This is Jaeger's user interface. You can find it listening on local host part 16686. We installed it before using Docker. If you remember, as I already added tracing to the shop application. It already has shopper also in the service list. And when I now click on find traces,
>
> **[1:33](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-insights-with-opentelemetry-and-jaeger?u=76281980&t=93)** we see that we're already collecting data. Let's have a look into what such a request to get slash to the root page of the application does. And if we click into that we see all the different requests that are taking place. For instance, the session middleware needs two milliseconds. What we see here. Or the get all call to [Redis](../../Skills/Software%20Development/Redis.md) needs one millisecond. So that's a good way to understand what time is spent during a request. What we are missing in this trace are the calls to [MongoDB](../../Skills/Software%20Development/MongoDB.md). This is because it did not install the respective plugin but we still see very much what's going on in our application and as we grow our microservice architecture, this page, the [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) will also light up and will show us how services are connected to each other. To sum this up, imagine your application as a factory where several machines work together to create a product. Each machine is like a service in your application and the product represents a complete operation. Like serving a webpage, OpenTelemetry puts a camera into each machine or service to record its work, which is like tracing. Jaeger then collects all these videos, the traces and provides a playback system, the Jaeger UI, where you can see what every machine did at any given time. This way you can identify if and where there was a delay or error in the production process.
>
> **[3:09](https://www.linkedin.com/learning/node-js-microservices-22685072/getting-insights-with-opentelemetry-and-jaeger?u=76281980&t=189)** To sum it up, imagine your application as a factory where several machines work together to create a product. Each machine is like a service in your application and the product represents a complete operation like serving a webpage. OpenTelemetry puts a camera in each machine, the service, to record its work, which is like tracing. Jaeger then collects all these videos, the traces, and provides a playback system, the Jaeger UI where you can see what every machine or service did at any given time. This way you can identify if and where there was a delay or error in the production process. As we go through this course, we will add more and more services, and I invite you to occasionally inspect these little machines using Jaeger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1)
> **CLI Commands:** find (4), make (1), docker (1)
> **Analogies:** imagine (2), it's like (1), for instance (1)
> **Env Vars:** cncf (2)
> **Prerequisites:** set up (1), install (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)

#### [Setting your mission](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-your-mission?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-your-mission?u=76281980&t=0)** - [Instructor] We know that we want to turn our monolithic shop application into a set of [Microservices](../../Skills/Software%20Development/Microservices.md), but before we get technical and get started, why would we want to do this? Let's first agree on some reasons why we even putting all the work into it. A lot has been written already about microservices and splitting up monolith, and you'll find the whole course by me on the topic in the library. Please be aware that microservices aren't the silver bullet and while they have benefits, they can easily also turn into a nightmare if not used wisely. That said, I want to lead into this course with two simple goals. First goal is I want to increase [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Monolithic applications can be challenging to scale. We aim to transform application into microservices to make it easier to scale different components independently based on their respective needs. This means for me that we want to build our system in such a way that multiple instances of one service can exist at the same time to allow load balancing between them. My second goal is I want to make it easier to maintenance services. In a microservice architecture, services can be maintained independently and also by different teams. It's even possible to deploy different versions at the same time if the microservice system is built in such a way. The goal here is we want to ensure that services can be deployed independently and even in different versions.
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-your-mission?u=76281980&t=95)** So we need some versioning and some version management here to enable that. With that, I think we are ready to really now delve into the code and we will start with that in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. Your First Service: The Catalog Service

[↑ Back to Table of Contents](#table-of-contents)

#### [What's your goal for this chapter?](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter?u=76281980&t=0)** - [Instructor] Before we get started, let's first understand what we will accomplish in this first chapter. This is our application as it is right now. We have an [HTML](../../Skills/Web%20Development/HTML.md) Front End. These are the rendered views we see in the browser. Then we have a set of routes. These routes, at this point, represent the different URLs a user can access like /shop. I didn't write out all the routes here and just use this box here as a placeholder. Below that, we have the business logic. This logic is today in so-called service classes for catalog, order, user, and cart. We saw them before when we looked through the application. The service classes for catalog, order, and user use [MongoDB](../../Skills/Software%20Development/MongoDB.md) as its backend to store the data and cart uses [Redis](../../Skills/Software%20Development/Redis.md). And also for the sake of completeness, I will omit this from now on. The front end also uses Redis as a session store, but we won't touch this functionality. Back to the service classes, they make it rather easy for us to find a good way to split out functionality as there is pretty much a one-to-one mapping between the service class and what will later be a standalone microservice. In real life applications, it can be more complicated to find the boundaries within the business logic. The goal is now to create one service that can replace a piece of business logic from the main application, and that shows the catalog that handles all catalog related operations.
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter?u=76281980&t=94)** It provides access to all the items in the shop and also lets us edit and delete them. The catalog service itself is also nothing else but an express application. It also comes with a set of routes and some service class that talks to the database. These routes represent a so-called [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. This is the HTTP interface that other applications can use to talk to our service. As REST APIs are so important and often misunderstood, we will spend a full video to quickly cover the fundamentals while we design the REST API for our first service. But before we do that, let's quickly create the express application that will become our catalog microservice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [Redis](../../Skills/Software%20Development/Redis.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **Env Vars:** rest (3), api (2), html (1), http (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Creating the service](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980&t=0)** - [Instructor] As promised, we will now create our first service or at least what will become our service soon. As you can see, we are now back in Visual Studio code, so open it if you haven't already. To get started, we'll use the service template that you find in the resources directory. So, I'm opening the resources directory and there you find this _service_template. I select it and select copy and we'll copy it into our workspace and there into the already prepared [Microservices](../../Skills/Software%20Development/Microservices.md) folder. So I'm pasting it in here and the first thing I will do is I will rename it to "catalog-service". Next, I will open my integrated terminal with view terminal and you see that we land in the root directory and then show you a little trick now. If you do a CD and then just drag the folder into your terminal, it will copy the whole path into it and then you can just change into this path. As all note applications, the catalog service comes with a package [JSON](../../Skills/Web%20Development/JSON.md) file. Let's look into it real quick and you'll see that we have a lot of dependencies here and these dependencies we will now install with [npm](../../Skills/Web%20Development/npm.md) install and you also see that we are again using nodemon here,
>
> **[1:36](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980&t=96)** that's here on line eight. So we can now run MPM, run dev, and nodemon will automatically pick up all the changes we make and will restart the service automatically. Now, on the console we see that the service already announces itself as template service 001 and it's listening on some port. The name of the service is taken directly from the package json file we see here. So, if we now change the name to "catalog-service" and save, nodemon picks that up and now the service correctly announces itself as catalog service. And if you look closely, you also see one more thing. You see that the service is now listening on a different port. Likely you're used to your node apps always listening on some port, say 3000, but this now looks totally random. This is because it is a random port on purpose. Let's look at the code and start.js to understand what we are doing here. So open bin, start.js in catalog service and if we scroll down, you see that the server listen directive is now using zero instead of some port number. And this means that express will then automatically select a random port. So why do we want a random port here? We want to be able to start multiple instances
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980&t=191)** of this service and there can always be only one service listening to one port. So we have to wait to statically set a port here and let express select it randomly. I'll show you an example. So if I now open one more terminal with the plus sign here and a change into catalog service again and now, I run npm run dev, we see that we have now one additional service instance listening on another port. And we can do this as often as we want. So we can run multiple instances of the same service at the same time. Of course we will need more infrastructure to facilitate all of that, but this is a very important thing to get right from the start. Now with that sorted out, let me close this one service again and I close everything else. And let's walk through the catalog service real quick. So I start with bin start.js. So this is very much the same start file that you also had in the shop application. So we bring in tracing the config and down here in line 17 and 18 you see that we also have this connect to mongoose and connect to [Redis](../../Skills/Software%20Development/Redis.md) in here because services will have to connect to either of them so, I already placed it here to save us some typing. We also have in the lib directory, those helper modules that make the connection.
>
> **[4:46](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980&t=286)** Also here in line 22, you see that we have the connection to the Redis client in there. So as needed we can un-comment the respective lines when we want to use mongoose or redis in our services. Everything else is pretty much the same as we had before. So let's close that and let's head into the app js file.
>
> **[5:12](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service?u=76281980&t=312)** So the app js file creates a very simple express application. You see that it's link now shows me that config is unused. So, I will just delete this line right away here. And if I scroll down, you see that we have an error handle there and we export the app and we also have a routes handler here. As you know, express is able to create the modules for routes, so we'll head into the routes folder to see what's in there. And there you'll see that we are using Express Route to accomplish that. And here already we have a very simple route that responds with, "Hello world". Again, ES link is complaining here but if we save this file, it will automatically reformat it so that ES link is happy, it wants one empty line after the require on top. To test the service now we can just simply use our browser. So, I will copy the port that we just have now on this service, but that I can simply open the browser and ahead to local host, enter port number, and you see it will respond with "Hello world." So this is now working, but pretty limited [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) service and it definitely isn't our catalog service. Before we move on, let's explain how rest API should look like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **CLI Commands:** find (2), npm (2), make (2), cd (1), node (1)
> **Tools:** terminal (4), visual studio (1)
> **File Paths:** start.js (3)
> **Env Vars:** npm (1), mpm (1), api (1)
> **UI Navigation:** scroll down (2), open the (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** template (2)

#### [Designing a REST API for the catalog service](https://www.linkedin.com/learning/node-js-microservices-22685072/designing-a-rest-api-for-the-catalog-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/designing-a-rest-api-for-the-catalog-service?u=76281980&t=0)** - [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs are a key concept we'll use to design our microservice architecture. REST stands for [representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) which is an architectural style for designing network applications. A Rest API uses HTTP to perform operations known as CRUD operations, create, read, update and delete on data. The idea is to use standard HTTP methods to manipulate resources which are identified using URLs. It's stateless, meaning each HTTP request should contain all the information needed to perform the operation. This makes REST APIs very scalable and they're widely adopted in [Software Development](../../Topics/Software%20Development.md) today. As mentioned before, the two important building blocks of any REST API are so-called HTTP verbs or methods and URLs. Let's look at an URL first. We use them every day in the browser. It consist of a protocol, here, HTTP, a domain name and some path to a resource. So what are HTTP verbs now? When you simply access a website in the browser, the verb for it is GET so the HTTP method is GET, and we also call this a GET request. If you ever created [HTML](../../Skills/Web%20Development/HTML.md) form, you for sure also know a POST request with the verb POST. It differs from a GET request
>
> **[1:33](https://www.linkedin.com/learning/node-js-microservices-22685072/designing-a-rest-api-for-the-catalog-service?u=76281980&t=93)** as it can contain a body with a pedal, like for instance, some form data. This is where the usually used verbs end but there are more. The ones also relevant to REST are PUT, which can, like POST, carry a payload and there is DELETE. What REST not does is to give these verbs a semantical meaning relevant to APIs. As such, GET is used to request data from a resource, POST is used to create a new resource, PUT is used to update the resource, and DELETE is used to delete the resource. So now what does this mean for our catalog API? Let's take a look at the respective service class we have now in our shop application. For that, I head over into Visual Studio Code. And there, I open shopper, server, services, and then we have the catalog service. And if we scroll through it, you see that we have a getAll method for getting all items. We have a getOne method for getting one item by item ID. We have a create method to create a new item. And we also a update method to update an item with new data. And then there is also a remove method to remove or delete an item. This gives us a very clear path to how our REST API for the catalog service should look like. And I've sketched it out here.
>
> **[3:07](https://www.linkedin.com/learning/node-js-microservices-22685072/designing-a-rest-api-for-the-catalog-service?u=76281980&t=187)** So GET/items should return all items. GET/items/:itemID should return an item by its ID. POST/items should create a new item with the payload in the request body. PUT/items/itemID should update an item identified by its ID using the data in the payload. And DELETE/items/itemID should delete an item identified by its ID. By structuring our APIs in a restful way, we can have a clear standardized interface for our services that other services can interact with. Let me say that we just scratched the surface of REST. In fact, it was introduced by Roy Fielding in his PhD thesis. For our purposes though, this should be enough. Enough theory for now, let's build these routes or API endpoints in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (9), [Representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** rest (8), http (7), api (5), post (5), put (3)
> **API Endpoints:** get  (4), post  (2), put  (1), delete  (1)
> **Code Identifiers:** itemid (3), getall (1), getone (1)
> **Definitions:** stands for (1), is an  (1), known as (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Analogies:** for instance (1)

#### [Adding business logic and database access](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-business-logic-and-database-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-business-logic-and-database-access?u=76281980&t=0)** - I'm now back in my Visual Studio Code, and I have the catalog service open and running. By the way, please make sure that from now on you have your [MongoDB](../../Skills/Software%20Development/MongoDB.md) running, because this catalog service needs to connect to MongoDB. And we started it before in Docker, but maybe you restarted your computer in the meantime. So make sure that the Docker client is running. And if you open the Docker desktop, you should see mongodb, jaeger, and [Redis](../../Skills/Software%20Development/Redis.md) running. If MongoDB is not running, please start it. As we are migrating [Microservices](../../Skills/Software%20Development/Microservices.md), the business logic is already there. It's right now in our monolith. So we want to first migrate this logic now into our microservice. So for that, I will now head into my shopper application. And there in server, services, we find the catalog service, which is a service class that has all the accesses to the database. And this should not live in our microservice, so I copy it, and head over into my microservice, and I will drop it into the lib directory. And there we already see that this link is complaining because the model is missing, models/Item. We use Mongoose as a database abstraction, and Mongoose then connects to MongoDB. And for that, it needs model classes. And this model class already exists, of course, in my shop application.
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-business-logic-and-database-access?u=76281980&t=94)** So I can just head over to shopper again, and copy the item. You see that this is the schema for our items. And I will drop it into the models directory, which should be already in your catalog. So service, because I prepared it for you. Let's see if it still complains. Sometimes it has a problem to resolve stuff, so let's type it in again. Models and item. Now it's linked, it's happy, and our code is correct. Again, as I said, we want to use Mongoose to connect to MongoDB. Let's see if Mongoose is already installed. For that, open the package.[JSON](../../Skills/Web%20Development/JSON.md). And there you see that I have already installed Mongoose and read it to the template that we used before to create the service, because I wanted to make it easier and not to have to reinstall stuff. So everything should be in place here. So what I want to do now is I want to establish the MongoDB connection before the express service starts up. Because if there is no database, the service should not start at all. This is very similar to how shopper does it as well. So for that, I will first now close all my files. And head over into our bin, start file of the catalog service. And if we scroll up, you already see starting at line 17
>
> **[3:10](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-business-logic-and-database-access?u=76281980&t=190)** that I already prepared this connection script to connect to the database, because this is not a database course, so I thought I'd make it easy for you. So here, I have this connect to Mongoose. And this uses /lib/mongooseConnection. Let's look into this file real quick. So this is a file that establishes the MongoDB connection through Mongoose. Now I have to just scroll down to where we start the server. And there it now at connect to Mongoose. And I pass in config.mongodb.url. And you rightfully will now ask yourself where this is coming from now. So if we scroll up, you see that I'm bringing in the config right up there. And if we go into the config, you see that also here. I made it a little bit easier for us, because I had the connection configuration for MongoDB and Redis already in there in the service template. And this matches exactly the Docker setup that prepared before. So this should be all good. Now, let's continue down here. Connect to Mongoose. And I pass in the url. And this returns a Promise. So I can now call then on it. And as a callback, we will connect to the express server. This means if the MongoDB connection is successful,
>
> **[4:50](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-business-logic-and-database-access?u=76281980&t=290)** we can also connect to the express server. Otherwise, the service will just not run. And when they're now safe, I see that on the console. It already tells me that it has connected to MongoDB. So that's exactly how we want it. The next video, we will now finally create the routes to make the business logic available via [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (12), [Redis](../../Skills/Software%20Development/Redis.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (5), docker (4), find (1)
> **UI Navigation:** open the (2), scroll up (2), scroll down (1)
> **Tools:** visual studio (1), docker desktop (1)
> **Exercise Files:** template (2)
> **File Paths:** package.json (1)
> **Code Identifiers:** mongooseconnection (1)
> **Env Vars:** rest (1)

#### [Creating your first REST endpoint](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-your-first-rest-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-your-first-rest-endpoint?u=76281980&t=0)** - [Instructor] I closed all the files to start with a clean slate. We just copied over the business logic from the monolith. To expose this functionality now, as a restful API, we will need to define a set of routes that map the various methods of the catalog service class. To get started, I open routes and index.js. I remove the hello world route, we don't need it anymore. But I now will bring in the catalog service. So add CatalogService equals require. And it's up there in lib catalog service. For reference, I can also open it by pressing command or control. And there is the service. So I see all the methods the service offers me. Now head back into my routes file and first we'll need to create a route that gives me all the items in the database back. And for that, I will start with defining a route by typing router and now the http web comes. And in this case it's as we know get. Slash items, I want to get all the items. Then it's an async function because we want to access the database somewhere, and await the result And, curly brackets, and all I have to do now is to type const items equals await. So I'm awaiting the return of the statement.
>
> **[1:38](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-your-first-rest-endpoint?u=76281980&t=98)** CatalogService.getAll. And all I have to do now is to return this [JSON](../../Skills/Web%20Development/JSON.md) object, by simply typing return response res.json and the items. Every time you see such a route with an async await and you don't see a try catch block, you should get suspicious. Because if the waited call now fails and throws an error, this will now crash our whole service. And we want to avoid that, we want to handle errors gracefully. And they can do this by adding a try catch block. So add, try, catch the error, and I copy the block
>
> **[2:25](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-your-first-rest-endpoint?u=76281980&t=145)** where we get the items in the try block. And now here in the catch block, I will add console.error. This is for my logging system to be notified that something is wrong, so in my logs I will later see the error. And I simply log out the error to the console. And I will return res.status. And here, I'm now using an HTTP status code, so they're well-defined HTTP codes that have a meaning. And 500 means internal server error. And, I return a json object, which says error and I'll write internal server error. So 500 is the status code and this is the human readable error message. We see that node run restarted, so the changes have been applied. This route now already exists, so I can now already try this route out by just calling it in the browser. And for that I will copy the port and open my browser. And in my browser now I access local host, then the port of the service, and then /items. And let's see what I get back. Yes, that's exactly what I wanted to see. So we have now a functional [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint that returns all the items in the database. In the next video, we will create
>
> **[4:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-your-first-rest-endpoint?u=76281980&t=240)** all the other endpoints for this service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** http (2), api (1)
> **File Paths:** index.js (1), res.json (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** getall (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Completing the API](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980&t=0)** - [Instructor] So we just successfully created our first route. Now I want to create a route that returns exactly one item. And for that I will first just copy the route that I have already because it's pretty similar. The only big difference right from the start is that I want to pass in colon id. So this creates a variable ID that can be passed in via the URL path. And down here I will now apply this by saying const item because it's just one item. And catalog service has a method for me that is just simply called getOne to return one item. Now I'm passing in request dot params and the id. So this now points to the ID that was passed in via this URL path. And in the end, all I have to do is to return this item, make sure to rename the variable done here in line 20. So this is done. Next I want to add a route that will create a new item. And for that I again copy the first route that we created and paste it in down here. And now which HTTP verb do we need to create an item? This is post. So I will rename now this get function to post and in here I will now simply add const. And I rename this now
>
> **[1:32](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980&t=92)** to new item await catalog service and catalog service has a method create and create simply takes now a [JSON](../../Skills/Web%20Development/JSON.md) object with all the properties of the new item. And for that we can now use request of body and request body is the payload, the post request sends to our service. All I have to do in the end is I have to return this new item. Now we can create new items. I also want to be able to update new items. And for that I will copy now this post route. And which HTTP verb would you use to update an item so the pass stays the same? I'm also passing in a request body but the verb has to change. And as we learned before, the right verb for that is put. So it's a put request to slash items and I renamed this variable to updated item and I will simply call catalog service update. And we are now missing the item ID of the item that we want to update. So we have to add colon ID to the pass and up update. So let's fix the name here and update takes when we look at it and item ID is first argument. Okay, that's easy now
>
> **[3:04](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980&t=184)** 'cause it's just request params dot id and then we will return the updated item. Now is a good time to add a little bit more error handling here because what happens if this item with this ID does not even exist? Don't we want to tell the calling service that something is wrong here? So I will do that now because I know if there is no updated item returned, then the item ID just did not exist. And in this case, I will now return response dot status and the HTTP status code for not found is 404 and I will return a json object with the error, item not found.
>
> **[4:04](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980&t=244)** And we have one more route where we can apply this now. Let's take this block and scroll up because also here where we [Fetch](../../Skills/Web%20Development/Fetch.md) this one item, we can do the same here. So I will now copy this block in and if there is no item, then we return item not found. Now missing is the final route to delete an item and I will again copy an existing route and take the put route here and I paste it in here. And the HTTP verb to delete something is delete. I want to delete the item with a provided id. So that's fine. Then I will call the variable deletion result and I will call catalog service remove and I'm removing request params id. And now I also want to add some error handling here. So I add if deletion result dot deleted count equals zero. I want to return response status item not found because again, we are now trying to delete an item that doesn't exist that's also not good. And finally a return now, just a status because we just deleted the item
>
> **[5:38](https://www.linkedin.com/learning/node-js-microservices-22685072/completing-the-api?u=76281980&t=338)** so we cannot really return it anymore. So a return response status 204, which means the request was successful, there is no body returned and I do a send. And with all these routes in place, now our catalog service is fully functional and able to handle all catalog related operations for the shop application. In the next video, I will show you an awesome and easy way to test the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** http (4), url (2), api (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** getone (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)

#### [Testing REST endpoints](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-rest-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-rest-endpoints?u=76281980&t=0)** - [Instructor] Previously I showed you how to use the browser to test an API endpoint, but that's just easy for GET requests. We also want to test our other endpoints, and there are several tools for this task available. Some are pretty powerful but also complicated. I looked for an easy way and I found a Visual Studio Code extension that is just perfect for our purpose. To install it, I will now click here on the right side on Extensions and search for [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). And the first one that shows up is already the right one, and I now install this REST Client. This REST Client has some syntax on how to configure it, so if you look through it you see here a documentation on how to use it, but I already prepared everything we need. And you find that in _Resources, _support, and there is a file, test-apis.http. And there already you see the syntax of this file. So there are variables that you can define, down there on line eight you can also see that it can prompt for variables. And what I will now do first is I copy the port that we currently have for our service and paste it here to name the catalog service port. And now you see this little link button here, that's called Send Request. And this will now send this request,
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-rest-endpoints?u=76281980&t=94)** and you also see that the variable catalog service is part now of this pass. And maybe now, I'll click on Send Request, I get all the HTTP headers that are returned and I will also get the result of this request. Next, we can also try to query for one specific ID. So I'm now testing the GET items ID route. So it will send request and now it prompts me for the item ID, and I paste it in here. And you see it now returns this one item. So that's exactly what we want. Next I want to create a new item, and for that I'm just calling the next route and it will prompt me for all the properties that I need for that. So I click here on Send Request after line 14, and it asks for the sku. So that's the item number, let's call it 999. It wants a name, I call it Awesome test item, and it wants a price, let's say it's 42. And you see the request is performed and I get back the newly created item. Next, I also want to update this item, let's try this out. And for that I'm copying the item ID because I need it. And here we have the update request that will prompt me as you see for an item ID
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-rest-endpoints?u=76281980&t=191)** and for the new price. So it only changes the price for this item, this given request. So I click on Send Request, it will ask for the item ID, I paste in the ID, and the new price it was before 42. Now let's say it's 99. And I hit return. And you see, now I get back the updated item. So this route now works as well. Next I want to show you how to create your own REST test route here, and for that we will now create the delete request. And this delete request is very similar to the GET request for one item ID, so I copy that between lines seven and nine. Scroll down, down here I paste it in and I have to change now the HTTP web to DELETE. So this will do a delete request. Now I need this item ID again, so I will send another request to get this ID. And this ID, maybe if you don't know that, that's not the sku, this is this _id. And this _id is is a default field for [MongoDB](../../Skills/Software%20Development/MongoDB.md), so this is a unique ID that MongoDB automatically gives to each doc document. And I copy that out now and I want to delete this item. Let's see if this works. I scroll down, and here after line 36 I send the request and I paste in the item ID and hit Return.
>
> **[4:48](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-rest-endpoints?u=76281980&t=288)** And it returns to 204 No Content. And seems it has worked, so let's see if it really did. For that, let's [Fetch](../../Skills/Web%20Development/Fetch.md) all the items again, and you see that it's gone. Now let's try what happens if I want to query for this item ID. And I still have this now in my clipboard so I can just send the request and paste this item ID again, and it now should return a 404. Let's see if it does. And as you see, I get this error: Item not found back. So that's exactly what we wanted. This file contains a few more other test cases that we will use later, but I didn't add one for each service we will create. Yet with the routes you see here, it should be easy for you to add tests as needed as we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (4), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** rest (3), http (2), api (1), delete (1)
> **UI Navigation:** click on (2), scroll down (2)
> **API Endpoints:** get  (3)
> **Definitions:** is a  (3)
> **Prerequisites:** install (2), configure (1)
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)


### 4. Creating a Service Registry

[↑ Back to Table of Contents](#table-of-contents)

#### [What's your goal for this chapter?](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22664578?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22664578?u=76281980&t=0)** - [Host] By now we have two applications, the shopper frontend and the catalog service. We know that the catalog service listens on a random part and it can even run on a completely different host or in some container or even in the cloud. The problem is now that the shopper application cannot know where to find the catalog service, neither its IP Address nor its port is known. We would need something like a phone book that contains a list of services and the locations and the so-called service registry is exactly that. We would need something like a phone book that contains a list of all services, and their locations and the so-called service registry is exactly that. Let's see how this works. The service registry is nothing but a service itself. It just listens on a known port. There are other ways to make even this dynamic but from my experience, abstraction needs to end somewhere where things just get too complicated. Now, when a service starts up, it does a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) call to the service registry and registers itself with its name, its IP and its port. The service registry now stores this information. Next, when the shop app now wants to call the catalog service it first asks the service registry for its location. The service registry ideally now returns the location of the catalog service. Now, when the shopper app wants to call the catalog service it'll first ask the service registry for its location. The service registry hopefully then returns this location
>
> **[1:38](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22664578?u=76281980&t=98)** and with that information we can finally make the call to the catalog service. This is the bare minimum functionality. In this chapter, we will also make sure that services can unregister themselves on shutdown and also will be removed if this suddenly disappear without notice. This is called a timeout. So are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is called (1)
> **Speakers:** - [host] (1)

#### [Setting up the registry](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-registry?u=76281980&t=0)** - [Instructor] Are you ready to create the registry service? I am as well. To get started, I will first open the Workspace Directory, in there also the [Microservices](../../Skills/Software%20Development/Microservices.md) folder, and then I open the Resources folder, and in there you see that I already have prepared a Registry Service more or less template, and I can now simply take this folder and drag it into my Microservices directory. I click Move, and this is done. So now Registry Service is in the Microservices directory. Next, I will open the terminal, and then I will move into the Service Registry directory by again just dragging the folder into the terminal, and it will copy the directory right in. And in there I will now run [npm](../../Skills/Web%20Development/npm.md) install to install all the dependencies. And then already I can run npm run dev, and you see that the service greets us with a friendly log message. If we look into this service, the only major difference to the catalog service that we created before is that in Bin, start.js, we now listen on a static port 3080. Because as we said before, for the registry we want a fixed port so that other services can find it to register themselves there. Next, let's look into the Routes folder routes, index.js, and there you see an empty routes file as before.
>
> **[1:38](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-registry?u=76281980&t=98)** Now it's our job again to add the routes that we will need. So, what do we need? We need one route to register service, and we need another route to un-register service. And then we will need one more that we call to find a service. And what identifies a service, it would be the service name and the service version and the service port. So that uniquely identifies a service. With that information, we can already get started, and I start with writing router, and I will now use the verb put, because we more or less updating the registry, right? So I start with /register, then the servicename. Again, with the column, so this is now a dynamic argument. Then the serviceversion. And then followed by the serviceport. And then we have a request, respond, and next. And we don't need to use async here, and you will see later why. Simple explanation, there is nothing asynchronous happening in here. I will now just return next, not implemented. So if I call this route now, it'll just return some message. You might now wonder why
>
> **[3:13](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-registry?u=76281980&t=193)** we don't need the service IP as well, because this also identifies the service. We will grab the IP directly from the request because when a service registers itself it comes along with the client IP, and we will use this client IP right away to identify, or to add this as another identification property to the service. Next, let's add the route to remove a service. And I will, for that, simply copy the put route, and I will just call it delete. And that's it pretty much. So if a service wants to un-register itself, it'll just do the same call as with registering it, but it will use the verb delete. Finally, we also want the routes to find a service. For that, I will again copy this routes definition, And now the verb is obviously a get, and the call should be to /find. And I'm looking for the service name and the service version because I don't know the service port, obviously. And if you wonder about the service version, you see the service version down here in the console already, right? So we have here 0.0.1, that's the version we have in the package .[JSON](../../Skills/Web%20Development/JSON.md), and we want to have some versioning support for our services, so that's the reason why our service also registers itself with a version. This allows you to have different services with different versions used by
>
> **[4:48](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-registry?u=76281980&t=288)** different front-end services, also running on different services in one microservice infrastructure. Of course, we now also need the infrastructure to actually do the work, to register services, to finding services and all of that. And we will start creating that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [npm](../../Skills/Web%20Development/npm.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** find (4), npm (2)
> **UI Navigation:** open the (3)
> **File Paths:** start.js (1), index.js (1)
> **Tools:** terminal (2)
> **Prerequisites:** install (2)
> **Ports:** port 3080 (1)
> **Versions:** 0.0.1 (1)

#### [Registering services](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980&t=0)** - [Instructor] In this video, we will start creating the logic for our service registry. And for that, I will first create a class that will contain this logic. So, I head into lib. And in lib, I now create a new file, and I call it simply registry.js. And in there, I start out with creating a class, class registry. And in there, I will now create a constructor. So, this time, it's not a static class like the service classes we had before, because I want to store a few things in the class instance. So, I start with constructor. And in there, I will now do two things. I will first instantiate the array that will later contain a list of all our services. Please note that we will not use a database in this case, but store our services directly in memory on this class. And as the services, as you will later see, keep re-registering themselves, restarting the registry should actually not be a problem. The worst thing that can happen is that it takes around 15 seconds until all the services have re-registered themselves. So, I will now create this array services. And then I will also set the timeout globally. So, this timeout should be, let's say, 15 seconds.
>
> **[1:37](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980&t=97)** Next, I'm going to add the method that should register a new service. For that, I now add register. And what do I need when registering a service? I would say first, I need the name of the service. Then I need the version of the service, the IP. As you know, we want to infer the IP from the client request later, and the port. So, the first thing I will do is I will create the key that uniquely identifies a service. So, I add const key equals. name plus version plus IP plus port. So, this creates simply a string with all these properties. Next, I will look up this key in this services array. So, add if not this .services key in brackets. So, this is now the case when the service is not yet in the service registry. So, I have to create a new entry. So, I first say then this.services key equals. Now, I'm creating an empty object. So, we are storing an object in the services array under this key.
>
> **[3:12](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980&t=192)** And then I will now add properties to this object. like this.services, key.timestamp, because I want to store the timestamp when it lasts or the service, because we will need this later to unregister services that weren't seen for some amount of time, which have refreezed. To unregister services which exceeded the timeout. And this timestamp should be math.floor. So, we'll round down anything we put in here, new, date, and we will divide this by 1,000. So, this is now seconds. So, we have a timestamp now. Let's now add the other properties that we will need on this service so that we can later look it up, and also return data to the caller. So, add this services key.ip. So, now we want to store the IP that we just got. Next, and now I will just copy paste stuff. I want to store the port. So, add port here. I want to store the name of the service. So, add name here. And I also want to store the version.
>
> **[4:51](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980&t=291)** of this service. And now, in the end, I will just now add a console. log statement just for us to see what's actually happening. So, I add console log, and I say edit service $name, $version add $ip and $port.
>
> **[5:29](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-services?u=76281980&t=329)** And in the end, I will just return the key of the service that we just created. Now, let's handle the case when the service is already known. So, then all I want to do is actually to update the timestamp. So, I will now just copy this line on line 12, where I create this timestamp. And here I will now just set this timestamp again. So, we have seen the service, and we will just update it so that it does not time out later. And I do another console log, and I will just copy the previous one. And I just say, updated. Here I wrote services. Let's say service. Updated service name version at IP and port. And in the end, I will again just return the key. Now, what we have to add now in the end, and that's very important, please take notice, is I have to add module.exports equals registry. Otherwise, this file would not export anything, and we would get an error when we try to use it. This should be the basic logic needed for registering and updating services. In the next video, we will call this method from the registration route.

> [!info]- Semantic Content
>
> **File Paths:** registry.js (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Creating and testing the registration route](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-and-testing-the-registration-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-and-testing-the-registration-route?u=76281980&t=0)** - [Instructor] We just added a method to register and update services to the service registry class and we will now use this class method in our routes and we will now use this service class in our routes, and for that I'll open routes index.js and there I will first bring in this new class. So I add const Registry equals require and it's up there in lib/Registry. Then I will create an instance of this class because we saw before we have a constructor and we want to initiate it. So I add const registry, and now lowercase equals new uppercase Registry. So this will create the class instance for me. And next I will update this put route that is used to register and update services. For that I will first remove this return statement on line 12, and I will now add const, and I'm using a destructuring assignment here so I'm using curly brackets, and I say servicename, and we can basically just copy the params from here. Servicename, serviceversion, serviceport equals req.params. So this will take these variables from the params object. Then we want to grab the p const service
>
> **[1:39](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-and-testing-the-registration-route?u=76281980&t=99)** at p equals request.ip. That's provided by Express to us. And then, in the end, I want to call the service registry. So I add const key, that's what the method will return, equals registry.register. And I pass in the servicename, the serviceversion, the serviceip, and the serviceport. Then, in the end, I will just return res.[JSON](../../Skills/Web%20Development/JSON.md) and I see the result is this key that we hopefully get back from our service. Now is a good time to test what we just created, and for that I will again head into Resources, support and there is my test-apis file, and in there I can scroll down and somewhere around line 39 you see this test router ID that I prepared. So we can now simply send request and you see I get back the result, the key of the service registration. There is one more thing here. You see these four Fs in the IP address portion of the key, and also down here
>
> **[3:13](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-and-testing-the-registration-route?u=76281980&t=193)** in the console lock statement you see that the IP address is mapped to something rather strange. What we see here is an IPv6 mapped IPv4 address that is applied for my local host address, and such addresses are rather hard to handle later when we want to call our services. So we'll now resort to a rather pragmatic solution to solve that. So bear with me because I want to remap this address to my regular local host address once this happens. And I will do this simply in index.js where I say, after we got the service IP, if serviceip.includes either ::1, which is one notation for the local host, and I add the full notation as well, or it includes the full notation which is ::ffff, F-F-F-F :127.0.0.1. So if this happens, the service IP should be simply 127.0.0.1, and we have to now change the const statement to let because we are reassigning this variable here. And now let's head back into our test-apis file.
>
> **[4:48](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-and-testing-the-registration-route?u=76281980&t=288)** Let's see if it works. Now better I click on registering services, and you see now it's a proper IP address. And also on the console I see that a proper IP address is now reported. So that's exactly how we want to have this. In the next video, we will create the logic to unregister services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **File Paths:** index.js (2), res.json (1)
> **Versions:** 127.0.0 (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), is an  (1)
> **Ports:** :127 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Unregistering services](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=0)** - [Instructor] Let's now create all the logic needed to remove services from the registry. For that, I open "lib" and "Registry.js," and I scroll down to simply add a new method there, and I call it "unregister." It, again, needs a name, a version, an IP, and a port to identify the service that needs to be deleted. And then we will, again, create the key of this service to find it in our map of services. And then we will just remove it from there. And as I now have a key creation again, I decided to factor out this logic into a dedicated function. So as you see in line eight in the register method, I already have this key creation. So let's just copy the part where we composed this ID, and I create the new method and let's call it "getKey." It gets the name, the version, the IP, and the port, and it returns name, version, IP, and port. Now, yes, Lint is complaining because we are not using this in this method and now it thinks that this should rather be a static method, because we are not talking to the class instance. But I will simply tell it to ignore that by clicking on the bulb icon and telling it to ignore this rule.
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=94)** Now we can simply call this "getKey," and we replace the pluses with commas, IP and a port.
>
> **[1:51](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=111)** And you might now rightfully say that we did not really save much code here, right? It's pretty much the same as we had before. But imagine you change something in the logic, you create the key, and then you have to update it everywhere. So it's way better that if you use some kind of logic twice you factor it still out to make sure that you stay consistent in your code and avoid redundancies. Now down there in "unregister," we can just again grab the key, and then we will simply do a "delete this.services key." So this now accesses the services map that we have, and it'll delete the element from this map, and then we can return the key. That's it for the logic. Now we have to use it in our routes file for that to head into "routes," "index.js." And I will scroll down. And there you see this delete route, that we will use to delete services. And again, I see some potential to factor out logic, because getting all the params from "request params" and also handling their IP, this is something I will need again now. So again, want to make sure I stay consistent and create one single method that does the job. So I add "function, getRequestArguments"
>
> **[3:23](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=203)** and this should get a request object. Then we can copy out pretty much all the logic that we have here from line 16 to 20, and paste it into this function. And then I return an object containing service name,
>
> **[3:46](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=226)** service version, service port, and service IP.
>
> **[3:59](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=239)** Now I call get request arguments in my put route. So add, let's copy in this first, I pass in the request and I can just grab this line from up here in line 15 and say, "const," all these arguments equals get requests argument request. Again, we are not saving lines of code here, so it's pretty much as long as it was before. But imagine you changed the logic how you infer the (indistinct) of how you want to handle it before six addresses, and suddenly you already, you have to change that on different spots. So let's do it on one spot, that's way better. Now I will copy what we just created, line 21, line 22, and paste it into my delete route. So now I have all the arguments, and then I can just just add, "const, key equals registry unregister" and the passing, the arguments, service name service version, service IP and service port.
>
> **[5:19](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=319)** You might now say that there might be more elegant ways using EE6, etc... to call unregister passing, all those argument. I'm really doing this here to make it more obvious and simple for everyone to understand what's going on here. That's why it's rather verbose. In the end, I will just return response to [JSON](../../Skills/Web%20Development/JSON.md), and the result should be the key.
>
> **[5:51](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=351)** So that's it. Now I will again test this. So open "support, test-apis.http," scroll down where you find the registering services route. So first let's register a service. So, that's the first one and I have a few more. So I add more services here, with each request that you see here, each has a different port. And then I want to now delete the last service here.
>
> **[6:26](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=386)** And we see that it's on port 3002. You also see this in the console. So it's 127.0.0.13002. So I will now scroll down to the register routes, and you see the put request here for my other service port 5003. And we will create this service now. So it's now created. And if we scroll down, we see that I also have a delete call here for exactly this service. So when I click this now, it should be deleted. Let's click "send request," and I get an error. Let's see what happened here. So I go to the registry class. So first I look at the error message. And with visual studio code, you cannot just click "command," and it brings you right to the error. And let's see what I'm doing here. And it's already obvious. So what I have here is I say, "this service," and instead of these services, so now it should be correct and I deliberately showed this now to you because what I see very frequently is that people run into problems, and then just not read the error message. So the error message is right there, it leads you directly to the problem, look at it. And in most cases it's pretty obvious what happened here. So I now head into my tests again.
>
> **[8:01](https://www.linkedin.com/learning/node-js-microservices-22685072/unregistering-services?u=76281980&t=481)** I again call this request, let me make this a little bit smaller, here is it. So I will again call this request to create the service. So it's here now. Then I scroll down to the delete method, and click again, send request. And you see I got an okay and a service name. So this now looks like this was successfully deleted. And indeed you see that the route really was called. And I should actually add some console statement here so that we know what just happened. So I head into the registry and then add another console log statement here after it was deleted. And I just say, "deleted service." Now let's play this through again. Let's close this real quick. Get into test APIs. Find where we create the service with 5003, because for that we have a delete request already prepared. So I click "send request," and so I see that the service was added. Then I go to the delete request, clicked on "send request," and you see that the service was deleted from the service registry. So with that, we can now add and delete services. In the next video, I will show you how to add the logic and the routes to query the registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **UI Navigation:** scroll down (6), go to (2)
> **CLI Commands:** make (4), find (3)
> **Code Identifiers:** getkey (2), getrequestarguments (1)
> **File Paths:** registry.js (1), index.js (1)
> **Ports:** port 3002 (1), port 5003 (1)
> **Analogies:** imagine (2)
> **Env Vars:** ee6 (1)

#### [Querying the registry](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=0)** - [Instructor] Next we need a function to query the registry. I want to be able to request a specific version of a service. We are still missing a function to query the registry and I also want to be able to request a specific version of a service. This can be very useful if we want to roll out new versions of a service in parallel to the old and leave it to the caller which version to use. As version scheme, we will use Semver. This is also what [npm](../../Skills/Web%20Development/npm.md) uses. If you are unfamiliar with it, then now is a good time to look it up at [semver.org](https://semver.org). If there are more than one services that match our request, we also want to use some load balancing to distribute the requests over all these services. Use Semver, I will now first install the package for it by npm install -S semver. And I'm opening and let's start the service again that we see when we make a mistake right away. And I open lib, Registry.js and at the very top I will bring in Semver. So add const semver equals require semver. Now let's add the method that will give us a service. For that I will write on the top now, add a new method and I call it get. And we want to give it a name and a version of a service. And then I expect the method
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=95)** to look into my services array and find the right service. So first I start out with looking up the right service. And for that I add const candidate because as I said there might be more than one service that matches this name and diversion. And to iterate now over this array of services I use Object.values because I need a regular indexed array. If you're not familiar with Object.values, please look it up so that you see what it provides and I let it iterate over this.services. And then I'm applying a filter. So that's a filter method that is defined on arrays. And this filter will now be called for each element in this array. So I add a callback where I can now evaluate this property service. For that I add now return first. So I want to return either true or false. And I want to first look up the service name. So as I iterate over the services I'll ask service.name equals name. So is the name of the service the same as a requested? And then I also want to query diversion. And for that I say semver.satisfies. And as first element, I pass in the current,
>
> **[3:14](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=194)** so the version of the service as it is defined on the service. And then add the expected value. Now if this evaluates to false, nothing happens. If this evaluates to true, this service will be added to the list of candidates, to the candidates array. So now we have a list of services that match this criteria. And as I said before, I want to do load balancing. And for that I want to just return a random service. Not always the top service in the array but any service that matches the script criteria. And for that I can now return candidates. On the candidates array, these are the results that I got. And on there in square brackets I now look for a random index. And this is done by Math.floor, Math.random times the candidates lengths. So this is the length of the array and this will give me back one random element out of this array. Now all that is missing is the route that corresponds with that. So I go into routes index.js. So I go to routes index.js. And down here I already have this get route with the /find path. And I will now remove this return statement. And I will first grab the request arguments, service name and service version
>
> **[4:55](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=295)** because this is what we request. Yeah, we want to get a service with a given name and with a given version. And again, call get request arguments and passing the request. And of course dysfunction looks for more things and also for their appear and all that stuff. But those properties will be mostly empty and we just need the service name and the service version. But we can reuse the function here. And then I can pass this over to the service registry. So let's say service equals registry.get and I pass in the service name and the service version.
>
> **[5:42](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=342)** Now let's handle the case when we found nothing. So I say, if not service, then I want to return response status 404
>
> **[5:56](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=356)** and the chase an object that says error, no matching service found. In any other case I will just return the object that we got from the registry. So I do a return response.[JSON](../../Skills/Web%20Development/JSON.md) and the service. Now it's a good time to test this again. So I head over into _Resources _support and into my test-apis file. And there I scroll down to the part where we deal with the service registry. Let me close the left bar so that we have a little bit more space. So I'll now create a few services. So I click on send request for those. And each of them, as you see has a few different properties, send request and sent request. And now we do the query. So I want to find a service called my service and it should be version one. Let's see what happens. And you see I get the service I now know it's version 1.2.1 and it's listening on port 3003 on localhost. Let's look for another one. Yeah, you see that this is also working just perfectly. So there are all the services. Let's see if we have a service. Yeah, with this query, my service with the star,
>
> **[7:31](https://www.linkedin.com/learning/node-js-microservices-22685072/querying-the-registry?u=76281980&t=451)** we are looking for a service with the name myservice, but any version. So if I click now a few times and you see that you get back different versions because they're listening on different ports. So that's exactly the random function that we used before. So that is what we wanted to see. Now we can unregister the service. So I sent a request and it's gone. And then I want to now look up a service that does not exist. This is this my other service, we just deleted it. So let's click on send request here again. And I get the first 404, no matching service found. So that's exactly what we wanted to see. In the next video, we will add a little bit more housekeeping logic so that services that we haven't seen for a while are automatically removed from the registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** find (3), npm (2), make (1)
> **File Paths:** index.js (2), registry.js (1), response.json (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Versions:** version 1 (1), 2.1 (1)
> **Prerequisites:** install (2)
> **URLs:** [semver.org](https://semver.org) (1)
> **Ports:** port 3003 (1)

#### [Removing expired services](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980&t=0)** - [Instructor] Later services will register and unregister themselves, but there may be cases when a service just shuts down non-gracefully with no chance to unregister. Let's make it a rule that services need to send some kind of a heartbeat to reregister themselves continuously, and that the service that we haven't seen for some amount of time is considered to be expired. We already have everything to build this inner registry, services can update themselves and there is already a timeout property. So all that is left is to add one function that does the work. So I go into lib registry and there right on top, I will add a new method, cleanup. So the first thing we will do is we get the current term const now = Math.floor(new Date() ) and we divided by a thousand. This gives us the Unix timestamp in seconds. So that's the time since I think January 1st, 1970 in seconds. And if you remember, we also stored this timestamp with every time a service is registered and also every time a service is updated. So this serves now as a good way to see if a service was seen lately and has not exceeded the timeout. So next we will do object keys to iterate over
>
> **[1:37](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980&t=97)** all the elements and keys of desktop services. And for each of them, and for each is just a method on the [JavaScript](../../Skills/Software%20Development/JavaScript.md) array. For each of them I get a key and I will call a call back. And in this case I want to check if this service has expired. So add if this.services key .timestamp + this.timeout is lower than the current time, then I know this has expired. In this case, I will then delete these services with the given key. And that's also the reason why we are not using object values in this case because I want to have the key, I need the key to delete this service. And then I will just also do a console.lock, Removed expired service dot $(key).
>
> **[2:51](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980&t=171)** Of course, we now also have to call this method occasionally. And for that I will add it now to the register and the get method. So every time I register service and every time I get a service, I do a cleanup before. So here, up there in get I will do this cleanup. So let's make sure that all the services that have timed out are gone. And also when I want to register service let's first do the cleanup. So now we can ensure that every time the service registry is changed, we operate on a version that does not contain timed out services. We can now try this out right away because there we don't need a dedicated route. It will be called automatically. So I headed to Resources, open support and again into test-apis. And in there I will now again create a few services. So send a few requests, creating all those services, and after some time I should see them time out. So when a query, some of them will hopefully time out then when query is called. So let's wait a little bit and after some time has elapsed, now when I query the registry, I think 15 seconds are over.
>
> **[4:29](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980&t=269)** You see that expired services are now indeed removed. So that exactly worked as intended. We also see that we got the 404 now because this service failed to re-register. And so it was cleaned up before the registry was queried. And I want to show you one more thing now at the end of this chapter. This is how can we see how the data structure looks like in the service registry and look a little bit under the hood of what's going on. For that there is a debug mode and we can enable that very easily. First I stop my service and then I head into the package.[JSON](../../Skills/Web%20Development/JSON.md) file of the registry service. And in there I click on debug and I will debug using the dev mode with nodemon. And now I am in debugger modes and this gives us a few features that are really handy. For instance, I can now go into the registry and take this get method and add a break point. So I click here where you see this red button, I click on that and then I open the test.apis again
>
> **[5:45](https://www.linkedin.com/learning/node-js-microservices-22685072/removing-expired-services?u=76281980&t=345)** I register a few services, let's do this right away. Register, register. So now we have a few services and now we are querying the registry. So I click consent request and you see that we now end up, and for that let me close this window on the right, we end up at this break point and we see the variables that are right now in scope and they also see the registry. And on the registry you see the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is object services. And if you look into that, now let me open this up all the way, you see all the services and how they're stored with timestamp and all. So this is very handy to understand without always using console log really how my data structure looks like. This is the objective we created and these are now all the entries on the service registry. So I found this really handy sometimes to understand my data and also of course it's a debugger to find problems. I will now detach the debugger again and make sure that it does not start next time I start, and also close the JavaScript debugger console here, on the right side you see that, this additional entry, I remove that so that we are not debugging all the time next time we start the service, so I dispose that. And with that we have a working service registry and the next thing we have to do is to change the catalog service to register and unregister itself to the registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** click on (2), open the (1)
> **File Paths:** console.lock (1), package.json (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Registering on service on start](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-on-service-on-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-on-service-on-start?u=76281980&t=0)** - [Instructor] We now have a registry in place, and we also have the catalog-service. Our goal in the following videos is to add all the so-called lifecycle hooks to the service. Lifecycle hooks make sure that the service registers itself when it starts, and unregisters when it stops. We will also add later then a periodic heartbeat to make sure it doesn't expire. You see that I have the registry service still running, and we will leave it at that. I will now add another terminal window by clicking on the plus sign up here. Next, I will open in my workspace, [Microservices](../../Skills/Software%20Development/Microservices.md), the catalog-service, and I will also change into this folder using our trick by dragging and dropping this folder, cd. And now I'm in the service. Next, I have to decide where to put my lifecycle hooks in. And the best place for that is bin/start.js, because it contains the code for starting a service. I know already that I have to make HTTP calls to the registry service. And for that, I need some HTTP library, and I will use Axios for that, because it's a very common and popular one, and it's just right for our job. So I will now install it by adding [npm](../../Skills/Web%20Development/npm.md) install -S axios. Next, I will require this in this .js file right away, and I will do this after the tracing was initiated, because it's a good practice to always add the tracing first, so that it can as needed
>
> **[1:33](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-on-service-on-start?u=76281980&t=93)** hook also into everything that happens downstream. So I add const axios equals require axios. So for instance, if tracing has now some axios integration, it will see this require, and can already hook into it. Next, we need to find a spot where we know that the service has started. And if you scroll down, we see that there is an event handler called listening. So this is called when the service is listening. That's exactly the right place to now add the registration of our service. So I will now add const register equals, and it's an async function. And you see that I'm not using curly brackets here, and that's specific to ES6, if you're not familiar with that. There is only one instruction we have here, and that's this axios put, so that's the put request we will do. And this function will also automatically then return the return value of this one function that we are calling here. Okay, in there, I now use back ticks. So I can use string interpolation and add HTTP, and I will call into localhost, 127.0.0.1. And we know the port here, 3080, and I call register, so that's the route, and I pass in the serviceName
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-on-service-on-start?u=76281980&t=191)** and the serviceVersion. And we already have this on the config object, because it's read from package.[JSON](../../Skills/Web%20Development/JSON.md) in config, so it can now pass in serviceName. I will copy paste it simply from the console info that we have done there, and paste it in here. Then I save, and I also have to pass in the port. And as we are in the scope of the listening function now, we have access to the server object. So I can now say server.address. And this is a function, so don't forget the parentheses, .port. Let's save so it reformats nicely. And then there's one more thing that I have to add now, that is catch. So I want to catch errors here, because otherwise, if anything fails in this HTTP call, this might be just because the registry service is down at this moment, the whole service will exit. So this is something we really want to avoid. If this happens, I want to do a console error, and just log out the error so that we know what happened. Now all that is left to do for now is I have to call this register function. And I will do this just here now in the body of the listener. So I call register when this runs. I'm not awaiting it. This is a fire and forget call. I just want this register to run at some point when the service starts up.
>
> **[4:46](https://www.linkedin.com/learning/node-js-microservices-22685072/registering-on-service-on-start?u=76281980&t=286)** And now I'm starting the service by running in npm run dev. And when we look at the console, we see the put request, and also the log line that tells us that the service is registered. Problem now here is the service will now expire after 15 seconds, and it'll also not remove itself once it stops. We will change this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (3), npm (2), cd (1), find (1)
> **Env Vars:** http (4), es6 (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Identifiers:** servicename (2), serviceversion (1)
> **File Paths:** bin/start.js (1), package.json (1)
> **Best Practices:** good practice (1), don't forget (1)
> **Prerequisites:** install (2)

#### [Adding heartbeat and unregistering on shutdown](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-heartbeat-and-unregistering-on-shutdown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-heartbeat-and-unregistering-on-shutdown?u=76281980&t=0)** - [Instructor] So far we can now register service on startup, but as mentioned, that's not enough. We will now also have to add the heartbeat that make sure that the service does not timeout and is cleared from the registry. For that, [JavaScript](../../Skills/Software%20Development/JavaScript.md) has something very handy for us. So I will now add right after register call in my start.js file const interval equals, and there is a function that is called set interval. So this will run some function in a defined interval and we want to run register every, let's say, 10 seconds because we know that the registry will clean up after 15 seconds. So we should be safe with that. And let's hit save. And you see that the service now was even removed first because it has already expired. So this is the (indistinct) from the registry service in case you wonder. And now you see that every 10 seconds you get this logline that the registry was updated and the catalog service is still around. Now what happens when I quit my catalog service? Well, it would time out then after 15 seconds. But that's not a nice way to handle that. I want the service rather to un-register itself gracefully when it shuts down. And for that we have to add a un-register function. To do this, I will first copy the register function
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-heartbeat-and-unregistering-on-shutdown?u=76281980&t=95)** and then paste it here and we'll call it unregister. Let's save to format stuff. And I will now not call put but use delete. So the delete verb and everything else stays the same. Next, I will create a little helper function that does the whole cleanup and the unregistration. And for that add const cleanup equals and it's async. And in there in curly brackets, I will first make sure that this function is only called once. For that, I start with defining a variable, clean equals false. Then I say when the function is called and it's not clean, so clean is false, then I want to run the cleanup, which is first calling clear interval to remove this interval timer. And then I will call unregistered service. And I want to await this because I want to make sure that this runs first during cleanup before the service stops. Now, when do we call this? We want to call this on different events that can happen to a process.
>
> **[3:10](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-heartbeat-and-unregistering-on-shutdown?u=76281980&t=190)** And for that I will now add process dot on. And there is one event that is called uncaught exception. And again, it's an async function. Async. So this runs, whenever this process encounters an exception that was not handled. In this case, I will first call await clean up to give the service a chance to gracefully unregister itself before then the process exits process exit zero. So that's classically note that you see here. And there are a few more so-called signals that are important. For instance, when you quit the process by pressing control C. So add now process on sigterm. So these are now classical system signals. You can look them up if you're interested in that. That's built in that's nothing that is local to our project now. And then there is sigint. So these are two signals that this process might receive. And in any case, we want to unregister the service. And let's try this now out. So I will now simply press Ctrl C on my catalog service. So I press Ctrl C and let's see what the registry service does.
>
> **[4:44](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-heartbeat-and-unregistering-on-shutdown?u=76281980&t=284)** And you'll see the service gracefully deleted itself from the service registry. And that's exactly what we wanted to achieve here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** is called (3), is a  (1), we call this (1)
> **CLI Commands:** make (3)
> **File Paths:** start.js (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Using Services

[↑ Back to Table of Contents](#table-of-contents)

#### [What's your goal for this chapter?](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22664580?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22664580?u=76281980&t=0)** - [Narrator] In this chapter, we will be closing the loop between our consumer application and an external service, the catalog service. For this we will create a little [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) client that will take care of querying the registry and making the call to the service. Then we will change the service class that previously handled the catalog to utilize the catalog service. Finally, we'll also create the card service. This will be an easy one as I have prepared most of it already. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Speakers:** - [narrator] (1)

#### [Creating the service client](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=0)** - [Instructor] I'm back in Visual Studio code and you can see in the console that both my registry service and the catalog service are running and ready. Next, we want to use this infrastructure to run our front-end shopper application. The first thing we are going to do is creating a helper class that will communicate with the registry and also do the call to the respective service. For that, I head to the shop application in my workspace. And the first thing I'm going to do is I show you the config file. So I head to server, config and open index chest. And there you see that starting in line 10 already prepared something for you. So that's the URL for the registry listing on point 3080 as configured before. And I also added an asterisk for the version. But this could as well be something like 0.0.1 or just version one. Anything like that would work. I'm using the asterisk here because with semver this means it matches against any version a service might have. Now let's create the service client. For that, I head into services and there I will create a new file and I call it ServiceClient.js. And in there, I want to do a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) call. This means we need again some HTTP client. We will again use Axios. For that, I open now a new terminal window and I move into workspace/shopper and install axios.
>
> **[1:37](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=97)** Okay, let's install it. Now it's here. Next I'm going to bringing axios const axios equals require axios, and we also want to access the config. So at const config equals require it's up there config.
>
> **[2:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=120)** Now we are ready to create the actual service client. So I start with class RegistryClient and at the end of the file just add module.exports equals RegistryClient because that's something I used to forget all the time. Now in the RegistryClient we create the first static method, static, it's async, and this method getService should get the servicename and should return the matching service for that. In there I create the try catch block. Try, catch, error. And in the try block I will now add const response
>
> **[2:55](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=175)** equals await axios.get. And there I want to now call into the service registry. Means I'm using back ticks here to use string interpolation and I start with dollar, curly brackets, config.registry.url/find and I want to find the service name, dollar servicename. So that's what we got as function argument. And I also want to get the service version which is in the config dollar config.registry.version.
>
> **[3:38](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=218)** This is in the config because it makes sense to default to one kind service version within one consuming application, because usually you would want to match it, the version of the application. This means if you have a shopper application version one, you likely want to have all the services to be at the same version to keep things consistent. So that is why I have it in the registry and not passing it in as argument. So with that, this should be it. Next I want to do some sanity check. So if there is no response.data.ip,
>
> **[4:26](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=266)** so there is something incomplete and not getting the data that I expect, I will throw a new Error and I say Could not find dollar curly bracket servicename, and I also copy paste in here the service version, so that we understand what's going on here. And if everything went well, I will return response.data. That's just axios that provides the result more or less in response.data. Next, I will handle the error down here and here I have to evaluate the rather complicated axios object, so bear with me. I say const errorMessage equals and now I add error.response and.
>
> **[5:34](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=334)** And this is not just a [JavaScript](../../Skills/Software%20Development/JavaScript.md) trick to be able to access a nested property on an object without getting an error message, if for instance error.response does not exist. So I'm adding error.response and error.response.data and error.data.message. Let's add a line break here. So what this does is it will actually return error.data.message. That's a little bit special to JavaScript. So this expression doesn't work in any programming language but does in JavaScript. So this is a way to dive into an object and get its value. And in any other case, so I'm adding an or, it's just error.message. Means if we don't have this response object we will find the error message there. I'm saving, now it's nicely formatted as well. And then from here I will just throw new error and I return the error message. Next, we need a method that actually calls the service. And for that I will first copy now this method because there are some similarities and we will just change it as needed and add call service. And this will get again the service name
>
> **[7:11](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=431)** and also an options object that is passed in by the caller. We will see it in the service class later what this object contains. Next, outside of the try block I add const and I use again the structuring assignment ip, port equals await this.getService. So I want to get the service with the passed in service name. So this is the method we just created before. And I'm doing this outside of the try catch block because this error is already handled in the previous method and we wanted to throw it to the caller. So that's fine, I don't want to catch it explicitly now again. Next I want to apply this ip I just got in the port to create the URL for the request. And I'm doing this by requestOptions.url equals and I'm using again back ticks, http, dollar curly brackets, the ip, then colon, dollar, curly brackets, the port. And then I'm just depending without the slash the requestOptions.url from before. Because the passed in service just contains the pass to the resource on the respective service, but not it's IP and port.
>
> **[8:46](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-service-client?u=76281980&t=526)** So we are extending this here. Now [ESLint](../../Skills/Software%20Development/ESLint.md) is complaining because we are reassigning something and I will just disable this by clicking on the bulb, disabling this rule for this line because we want it to be exactly like that. And now the call into axios is pretty simple. I am just calling await axios and I pass in the requestOption. So this is an options object that axios can deal with. We don't need to check for the IP, so that's left over from the previous class, but the error handling stays the same. And with that, we should have a working service client. If something is unclear to you now it will get way clearer when we use it in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Code Identifiers:** getservice (2), requestoptions (2), errormessage (1), requestoption (1)
> **CLI Commands:** find (4)
> **Env Vars:** url (2), http (1)
> **Tools:** visual studio (1), terminal (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** install (2)
> **File Paths:** serviceclient.js (1)

#### [Using the catalog service](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=0)** - [Instructor] So we just created this service client and I just saw that we called it registry client here. Let's fix that here. But it does not really matter, as long as you export the right thing. But for consistency reason, let's do that. Now we want to utilize the service client and for that I opened the catalog service because we know that the boundaries between our business logic pieces are very well defined in our shopper application. So the catalog service contains everything that deals with the catalog. The first thing I'm going to do is I will rename the catalog service now, to emphasize a little bit that it now has a different purpose and I will call it catalog client.
>
> **[0:50](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=50)** And I will also rename it here. So I click here on rename symbol and we'll rename it to catalog client. For completeness let's also change this comment up here and now when we start the shopper application [npm](../../Skills/Web%20Development/npm.md) run dev, we'll likely get an error because of course now the name changed. So let's see where this area is coming from and let's head right there. So here we will now rename it. That's now in admin item index chest. That's the first part where this service is. And we will now call it catalog client, reload, and there is one other place or at least one other place where this is as well the case also in route shop. We have to rename this now. So that's classically refactoring that you have to do when you are working with migrations. One more place. So now yeah, the cart needs as well the catalog service. So let's rename it there as well, catalog client. Now everything looks good. So everything is now using the catalog client. Let's ignore that the variable is still called catalog service here in line four. I think that's good enough for now. Now let's head back into the catalog client, in the catalog client, we will now first bring in the service client. So add const, service client equals require
>
> **[2:30](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=150)** and in the same directory service client. At the same time, we can already remove this item model. We won't need it any longer, but now we will get an error. No, we don't. That's fine because we are not calling the methods right now so, it does not throw an error because the model is missing. Next, we will now use the service client. So in get all, what do we need to do? Let's start with const result. Is equals await because it's an asynchronous function. And then I add service client, call service. So we want to call a service. Which service do we want to call? It's the catalog service. Then we pass in an object with the options for Axios. In this case it's method. And the method is get, because we want to make a get request. And also the URL and the part of the URL, we know at this point, and I'm using back ticks here because we will need this later, is slash items. Now you maybe understand how this works under the hood because when we look at call service, it will change this URL and add the IP and the port and the HTTP and everything in front of it. So right now at this point in the catalog client, we only know that we want to call slash items
>
> **[4:06](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=246)** and then the service client will complete this URL that we pass in. Now all that is left is, to return this result, return result. As we are here calling an asynchronous function that might throw, we want to add a try catch block here. So add, try, catch, error, I move the block with the logic into the try block. And if there is an error, I want to lock this out on the console, console error, and let's log out the error here so that I know that something is wrong. And then I will return and empty array, why do I do this? Because if the call to the catalog service fails for some reason, this method will now return a valid result. It'll just look as if there were no items in the catalog, but it'll not cause the application or the front end or anything to crash. Next, we'll change the method that fetches one item. And for that I will simply copy the block from get all because it's super similar and I paste it here on the get one. And the only thing I change here is really just passing in the item ID here in dollar curly brackets, item ID. Now you also see why I used back ticks before in preparation
>
> **[5:43](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=343)** for that, everything else stays the same, but in case of an error in this case, we really have to return null. I don't have a better idea because the front, it will likely crash anyways if there is no item passed back. So return null is a valid way to handle this. Next, I copied this block again and we will now change the method that creates a new item. So how is this different? It's still a catalog service, but now the method is post. I posted two items and one more thing, I pass in data. And in this case that's very easy because Axios expects the payload in a property called data. And if you're unfamiliar with the syntax, it's very much the same as if I would write data, call on data. And this is automatically even replaced for you by [ESLint](../../Skills/Software%20Development/ESLint.md) if you have something like that. So this means I'm passing in the data in a property called data. If this succeeds a return, the result in any other case, I'm handling the error. So here most notably, I pass in data, the payload and it's a post request. Now I copy this section again and I paste it into the update method and update, maybe you remember is put and then it's very similar to the post method and basically a mix
>
> **[7:16](https://www.linkedin.com/learning/node-js-microservices-22685072/using-the-catalog-service?u=76281980&t=436)** from the post method and getting one item because I now pass in the item ID that we want to update. So it's put and what we want to update, that's it. Now, what's still missing is the method to delete an item. So I grab this function body again, and go to the remove function and what do I need now? Yeah, I remove the data obviously because no payload needed and the method is important, delete, and that's it. We have now migrated the catalog service in shopper to be a catalog service client and to utilize the service registry and the respective services. And in the next video, we will test this out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Env Vars:** url (4), http (1)
> **CLI Commands:** npm (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Testing the catalog service](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-the-catalog-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-the-catalog-service?u=76281980&t=0)** - [Instructor] To test what we just did, I already opened localhost on port 3000 in my browser, and you see the shop application, and if I click shop, I get a list of all the items in the shop. Let's see if now the service is actually used. For that, I switch into Visual Studio Code, and I look at the catalog service, and we see they get calls coming in. So far, so good. This looks already perfect. Now, let's try to add an item to the cart. For that, I have to log in. So I log in with the user I created previously, test@[test.com](https://test.com) and some password, and I log in. And I head back to the shop and I add an item to the cart. Looks also good. And let's look into the cart now. And there you see something is wrong now in here. So we're missing everything. The SKU name, the price, and I want to go into manage items. I also see, when I click on edit item, the URL that is created up here shows an undefined element, which should actually be the item ID. And if I head now into Visual Studio Code, I also see that there are errors thrown. So something is wrong, the ID is wrong, I get undefined, so this is not working as intended at this point. To understand this, let's look into our views and into admin and into the item admin.
>
> **[1:42](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-the-catalog-service?u=76281980&t=102)** And there we see that we're passing in the item ID here. Now let's see what the service actually returns. So ahead into resources, support, and in our test APIs.
>
> **[1:59](https://www.linkedin.com/learning/node-js-microservices-22685072/testing-the-catalog-service?u=76281980&t=119)** And there, I just want to test my catalog service, so that's the very first request. So I have to first get the port of the thing. So let's see where it's listening now, and it's way up here now. Let's better restart this service. So I'm restarting it so that I get the port right away. So here's the port, and I change the variable up here. Now we can finally call the service. And there you see that we have here underscore ID and not ID without underscore. This is because this ID property was provided by Mongoose as a virtual property that maps underscore ID to ID. And now, as we are not using Mongoose directly in shopper, we just get this plain ID. And this points us to a very important topic for [Microservices](../../Skills/Software%20Development/Microservices.md), and this is data sanitation, and we will look at this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Env Vars:** sku (1), url (1)
> **Tools:** visual studio (2)
> **URLs:** [test.com](https://test.com) (1)
> **Ports:** port 3000 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Sanitizing data](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=0)** - [Instructor] We just learned that when we access the Mongoose model directly, it mapped _id to id without underscore for convenience, but when we send it via [JSON](../../Skills/Web%20Development/JSON.md), this does not work anymore. There would be ways to make such virtual properties for Mongoose work in this scenario as well, but this is just the tip of the iceberg. This is what we get back from our catalog service today, and as we know, the id without underscore that my application expects is missing. But tomorrow, someone decides to also store the purchase price with the item and extends the model. And the next day, someone wants to add some internal comment about the quality of the product, extends the model, and writes, for instance, that one product is not good, because it gets a lot of complaints, as you see here. All this should never be visible to our users, obviously. And this was ensured as long as the catalog was part of the monolith as you see it here, because it all stays within one application. But as soon as you move out the service, you should assume that any public API can be called from anywhere. So there could be the Internet in between. You may also decide that you want to create a [React](../../Skills/Web%20Development/React.js.md) or [Angular](../../Skills/Web%20Development/Angular.md) app and directly access the API from there, and suddenly, the payload contains all the data that you actually wanted to hide from your users. In this case, a user would only need to look into the payload using Chrome developer tools and they would see exactly your purchase price,
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=94)** all the comments, and all that. And this is more common and more often happening than you think, that such APIs that directly access the database and send back whatever is in there are super leaky, and super insecure, and just leak data that a user never should see. This is why it's a good practice to be very intentional about which data leaves your service, and we will add this to the catalog service now. And that's super easy. So I open Visual Studio Code. In my workspace, I go into [Microservices](../../Skills/Software%20Development/Microservices.md), open the catalog-service, and in routes, I have the index route. (indistinct), before we declare the first route, I now add a function, just a helper. Let's call it createResponse. It takes an item, and I return an object that contains exactly the data that I want to return. So for item, it's the item.id, because now, we are still using Mongoose, and it'll give us exactly the mapped item id here, so we can do it like that. For price, I want to return the item.price. For sku, I want to return the item.sku. For name, I want to return the item.name. And this long, this stays like that. The database model cannot change. However, if the model changes,
>
> **[3:06](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=186)** we will still just return the data that we want to return very intentionally. Now we have to apply that, and for that, we will first change the method that gives us all the items, and items is an array. And we have to apply this createResponse function now on each item in this array, on each element. And for that, we can use the map function, because map is exactly made for that. So it will traverse an array, and will call a callback function for each element of this array. And this callback function is meant to return a transformed, mapped version of the element it just got. And here, we can just pass in createResponse, nothing more. So it will automatically now call the function createResponse with the item. So no parentheses, nothing, this is how it works. Just pass in the function name, and this will work out of the box. For everything else, we will just call createResponse, and pass in the item.
>
> **[4:21](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=261)** Let's copy that. You just need it for the update route.
>
> **[4:30](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=270)** So updatedItem, and everything else should stay the same.
>
> **[4:39](https://www.linkedin.com/learning/node-js-microservices-22685072/sanitizing-data?u=76281980&t=279)** Let's see if the catalog-service shows an error. No, it doesn't. So it should have registered itself already now with the new version, and let's head into the browser. And I'm back at my shop. Let's go to Home, let's go to Shop. So that looks good, let's add something to the cart. Let's look into the cart. And you see, now it's correct. And also when I go into Manage Items, I can now edit an item, and it passes the item id up here. And now this looks all good, let's try to update it. Hit Submit. And you see also the updating now works as intended. So that's now a working API. In the next video, we'll real quickly create a cart service and use it from a shop application, I prepared pretty much everything of this code already for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Code Identifiers:** createresponse (5), updateditem (1)
> **Env Vars:** api (3), json (1)
> **UI Navigation:** go to (2), open the (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)

#### [Creating the CartService](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-cartservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-cartservice?u=76281980&t=0)** - [Instructor] In this video, we will now really quickly add the cart service and I prepared it already for you because it's so similar to the catalog service and I want to save you from endlessly typing the same things. So when you look into Resources, you see there file "cart-service," and we will first move that into the [Microservices](../../Skills/Software%20Development/Microservices.md) folder. For that, I just click on it and drag it into Microservices. Next, I open a new terminal by clicking on the plus icon down here, and I do CD, and again, drag and drop the folder into my console to change into it. Next, I run [npm](../../Skills/Web%20Development/npm.md) Install and run NPM Run Dev, and with that, we have a functional cart service. So let's have a quick look at the service itself to understand the differences. So when I look into bin "start.js," you see that, instead of connecting to [MongoDB](../../Skills/Software%20Development/MongoDB.md)," we are connecting to [Redis](../../Skills/Software%20Development/Redis.md) because the cart service relies on Redis, so we connect to Redis and then the server starts to listen. So that's the first thing. In Routes, index.js," you find the Routes file, and it's pretty similar, so it's [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) routes that called in the cart service and respective methods on the cart service. Let's look into the cart service as well. You see it uses Redis and it performs Redis operations on the Redis key value store.
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-cartservice?u=76281980&t=95)** I also see that the cart service is now marked in red here. There is something wrong. Let's look at that. So [ESLint](../../Skills/Software%20Development/ESLint.md) is complaining because here, online, 27, because I have to return from my routes. That does not harm your application. It's just a matter of good coding styles, so if we fix that, and they also have a leftover Models directory here, and as we don't use any MongoDB-modeled, I can delete this as well just to clean up because the best code is code that is deleted. Avoids problems later. So the next thing we will do is we have to now change shopper to use this cart service. So for that, let's look into Server, Services, and there you see this cart service class, and we will remove that now and replace it with the cart service client that you also find in the Resources directory. So I drag the cart service clients down here into Services, click on Move, and I remove the cart service, and now, as you might guess, we will see some errors, at least when we restart the shopper service. So I type RS, and now you see, when you type RS, that it will throw all the errors and everything that's happening here, and here, you see the require stack about where this problem happened so I can now simply click into the last item, it's the middleware, and you see that up there,
>
> **[3:10](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-cartservice?u=76281980&t=190)** we are requiring the cart service and I'm now renaming it to cart service client and then it's fine again, but there are a few more. So up in the request of the next error, again, the Request Deck helps you here to find where the problem originates, so click here again. I replace that. We are not done yet. So there is one more. I click into it. You see there, again, we have to replace the name. Admittedly, that's some quick and dirty refactoring, but I show you that exactly like that because that's how you do it in practice, right? You rename something, you have to update the import, sometimes, Visual Studio Code will pick it up, sometimes not, but by using an old one and looking that the application can start without errors, you're pretty safe that now everything is fine. So let's try it out now by opening our browser, and there, I go into the shop, I'm still locked in, and I click on "Add to Cart," and you see I can add items to the cart, then I click on the cart itself and here are all those items. Let's remove those from the cart, and you see that this works as well. Now, let's click on "Buy Now," and you see this worked as well. So now, we have also a working cart service. If anything is unclear how the cart service works,
>
> **[4:44](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-cartservice?u=76281980&t=284)** please take a pause, have a look, go through the code, but as I said, it's very, very similar to what the catalog service does except that it uses Redis instead of MongoDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (7), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (3), npm (2), cd (1)
> **UI Navigation:** click on (5), drag and drop (1)
> **File Paths:** start.js (1), index.js (1)
> **Env Vars:** npm (2)
> **Tools:** terminal (1), visual studio (1)
> **Analogies:** similar to (2)
> **Prerequisites:** install (1)

#### [Service monitoring with OpenTelemetry and Jaeger](https://www.linkedin.com/learning/node-js-microservices-22685072/service-monitoring-with-opentelemetry-and-jaeger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/service-monitoring-with-opentelemetry-and-jaeger?u=76281980&t=0)** - [Instructor] We have now working service registry and also two services that are used by our main application. And now it's a good time to look into monitoring with OpenTelemetry in Jaeger. As I showed you in the beginning each service comes with some tracing code to enable OpenTelemetry and send traces. So the data about how services connect to each other to Jaeger running in Docker. And what we can do now is pretty amazing. You see here a list of all the services that we have. So registry, catalog cart, and the shopper main application. Jaeger query you can ignore that. So what we can do now is, for instance, I can now find all the traces that start at my shopper application. And the most interesting ones are those with much spans. Spans are single operations. So when I now click into this GET request with 33 spans I see everything that's going on. And these bars also tell me how long an operation took. You see that the call to the registry service takes us around 840 microseconds. So not milliseconds, but microseconds. So that's pretty quick. And you see after that we called into the registry service. You also see the call into the cart service and there is the express middleware, everything what's going on in express. And then you also see the call into [Redis](../../Skills/Software%20Development/Redis.md)
>
> **[1:33](https://www.linkedin.com/learning/node-js-microservices-22685072/service-monitoring-with-opentelemetry-and-jaeger?u=76281980&t=93)** and you see that this call into Redis takes 1.4 milliseconds. And you can also look into more details when you click into the respective areas. And you see that we are doing HGETALL and yeah, everything that's going on in there basically is in the details. So that's pretty helpful especially and we don't have this here so much but especially when you see that something is slow, but that you can really easily isolate anything that is slow. Or for instance, if you call the service registry or one service calls the other and somewhere is an error and you're not sure where this is, this would also show up somewhere here because all the errors are then marked, for instance, in red. One more thing that you can do is also you can look at the [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) and here click on the DAG and I mean, this does not win a beauty price, but after all you see very much what's going on. So we have here up a shop application and then you see that the number of requests that go into the registry service and also the requested are then subsequently done to the cart service and to the catalog service. And you also see that the catalog service and also the cart service are calling into the registry. So these are the calls that are done to register services. So that's all there. So this is a really good way to really understand what's going on in your services
>
> **[3:07](https://www.linkedin.com/learning/node-js-microservices-22685072/service-monitoring-with-opentelemetry-and-jaeger?u=76281980&t=187)** and I really recommend you to also understand observability and monitoring when you're working with [Microservices](../../Skills/Software%20Development/Microservices.md). I won't show much of that during the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course but I invite you to have a look into Jaeger now and then if you're curious how things are working together in this microservice infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (2), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for instance (3)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** hgetall (1), dag (1)
> **Definitions:** is an  (1), is a  (1)
> **API Endpoints:** get  (1)
> **Versions:** 1.4 (1)
> **UI Navigation:** click on (1)


### 6. Authenticating APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [API authentication with JWT](https://www.linkedin.com/learning/node-js-microservices-22685072/api-authentication-with-jwt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/api-authentication-with-jwt?u=76281980&t=0)** - [Instructor] In this chapter, we will look at how we can make API endpoints more secure by adding authentication. This is an incredibly important and often forgotten topic. Let's see how we handle our user authentication today. For some operations, we require a locked in user like for creating or editing items. Here we see the login route in our shopper app but now we haven't moved authentication into a separate service, but this isn't important at this point. In line 10, we see that when a user logs in the form we try to authenticate the user, and if this succeeds, we store the user at the in the session. From then on, we trust the user, but we also revalidate it on every request that happens up here in lib middlewares. There we have this code block starting in line 13 that will first check if there is a user ID on the session, and then try to load it from the database. So if a user is deleted or their privileges change, this will also immediately be applied. Here's the whole flow in a more schematic way. Again, it doesn't matter if the user service is within the monolith or not. When the user authenticates, we trust that this is a valid user and if we, for instance, call the catalog service to create an item, the service needs to trust that the user has successfully logged in. And this is pretty unsecure. In fact, if you put the catalog service out on the internet today,
>
> **[1:31](https://www.linkedin.com/learning/node-js-microservices-22685072/api-authentication-with-jwt?u=76281980&t=91)** anyone could create a modify items as all the trust is on the caller. There has to be a better way to secure endpoints and there is, it's called [JSON](../../Skills/Web%20Development/JSON.md) Web Token, in short, JWT. At its core, JWT is a token that can carry a payload which can be read by anyone but only created and validated using a secret. It's the de facto standard for establishing trust between services. So let's look at the same flow with JWT. We again send username and password using the form. The server will again try to authenticate the user and if this works, we'll now create and return this JWT token. Along with other properties, this token includes a payload, which contains in our case, user information, including their id. Next, the front end will persist this token in the session as before. But now with every request to the service, we send the token in a header called authentication and a property called bearer. On the service, we will then decrypt and maybe also validate the token signature. JWT [Tokens](../../Skills/Web%20Development/Tokens.md) are not a solution to all problems and they come with limitations as well. Let's take a quick look. If someone eavesdrops the token, the request can still be forged. Means that you definitely lead a secure connection where the token is transmitted.
>
> **[2:59](https://www.linkedin.com/learning/node-js-microservices-22685072/api-authentication-with-jwt?u=76281980&t=179)** - Anyone can decrypt JWT without the secret. So decrypting and looking at the payload does not require you to have the secret. It's just for validating. On the plus side, without the secret, an attacker cannot create and sign a token to assume another user's identity. We will use the token as a standardized means to sign and transport the user data. JWT is more complex than what I covered here. So please look at [jwt.io](https://jwt.io) to learn more on this topic. In this chapter, we will quickly create the user service before we migrate our current system to understand and use JWT authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** jwt (8), api (1), json (1)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **Speakers:** - [instructor] (1), - anyone (1)
> **CLI Commands:** make (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Analogies:** for instance (1)

#### [Creating the user service](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-user-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-user-service?u=76281980&t=0)** - [Instructor] In this video, we will quickly create the user service. Please note that I have my shopper application, my catalog service, my card service, my registry service running, and also in Docker, I have [Redis](../../Skills/Software%20Development/Redis.md), [MongoDB](../../Skills/Software%20Development/MongoDB.md), and Jaeger running. Next, I will open the workspace and open the resources folder and there, you find this pre-prepared user service, and I drag it into the [Microservices](../../Skills/Software%20Development/Microservices.md) folder. Then I open a new console window, cd into this directory user-service, and in user-service, I run [npm](../../Skills/Web%20Development/npm.md) install and npm run dev, so that's very similar to what we did before. You see it is listening now. And if you look at the registry service, we also see that the user service up here is also registering itself to the service registry. Next, we have to modify our shopper application. So I head into shopper, in server, services, we have this old user service that we don't want to use anymore because it talks directly to the database, we remove it. And I drag this user service client into this directory.
>
> **[1:24](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-user-service?u=76281980&t=84)** Now we know shopper will start to crash left and right because the file name changed and this user service is not there anymore. So I'm, again, following this requireStack for my quick and dirty refactoring. I just hit Command on my Mac or Ctrl on [Windows](../../Glossary/Service/Windows.md) and head into this file where the wrong file name is required. I fix it here. And then I'm just following the crashes, the next one is in admin, user, index.js. And... The next one is in routes, user, index.js. And this is also good exercise if you wonder to understand basically error messages in [Node.js](../../Skills/Web%20Development/Node.js.md), as I said before, many folks seem to struggle to understand what's going on, but this requireStack really tells you exactly where the problem is, and this helps a lot if you ever run into a problem, just read the error message and it will tell you right away what's wrong. And now we have a running service and I'm curious if everything still works, so I head into my shop application, I click on Manage Users, so at least it can already read the users because we have it here. Then let's try to create a new user, test2@[test2.com](https://test2.com), some password. And make it admin and a submit.
>
> **[3:00](https://www.linkedin.com/learning/node-js-microservices-22685072/creating-the-user-service?u=76281980&t=180)** And you see that I just created an admin user, let's edit this user and remove the admin privilege. I submit and it's a user, so that looks good. Next, I try to log in with the user I just created, so I click on log in. And I'm logging in with test2@[test2.com](https://test2.com) and some password. Let's hit log in and we have a logged in user. Let's now log out and go to Manage User and let's remove this test user again, so I click on Delete User. And as you see, this works as well, so we are now using the user service we just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [Redis](../../Skills/Software%20Development/Redis.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** npm (2), docker (1), find (1), cd (1), node (1)
> **UI Navigation:** click on (3), open the (2), go to (1)
> **File Paths:** index.js (2), node.js (1)
> **Code Identifiers:** requirestack (2)
> **URLs:** [test2.com](https://test2.com) (2)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Add JWT tokens to the user service](https://www.linkedin.com/learning/node-js-microservices-22685072/add-jwt-tokens-to-the-user-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/add-jwt-tokens-to-the-user-service?u=76281980&t=0)** - [Instructor] In this video, we will now change our user service so that it returns a JWT token on authentication. For that, I open first my user service. So I head into workspace, [Microservices](../../Skills/Software%20Development/Microservices.md), and user service, and there, I open routes index js. You also see on the terminal that I have the user service also here open, and I will now quit nodemon with Control C. And then I will first install a module that gives us [JSON](../../Skills/Web%20Development/JSON.md) web token. And for that I type [npm](../../Skills/Web%20Development/npm.md) install dash S and it's JSON Web token. And now I can right away, again, enter NPM run dev and start the user service again. Then I will bring in now JWT that we just installed by adding const, JWT equals require, JSON web token. Now I head down to my authentication route, so it's down here in post users authenticate. And now all I will do is instead of returning the user, I will now create the token. So const token equals JWT, and it has a method to sign a object. And then I use this Create JSON that I have here as well. You maybe remember it from when we created it
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/add-jwt-tokens-to-the-user-service?u=76281980&t=95)** for the catalog service. So this is here as well that creates a user object. So I do create JSON, pass in the auth user, and a second argument now. I provide a key, so this is my secret key that I now have to provide, and I need this everywhere where I want to validate JWT. So I call it my secret key. This could also be a certificate. So there are different ways to provide some credential here. We use that. And then I add another object where I now also provide the expiration. This is expires in. So this is how long this token should be valid. And let's say 60 times 60 times 24. So this is 24 hours now. And now in the end, I will return this token. So I add, instead of returning the user object, let's call this property just token. So now we return a property token. Let's also clean this file up a little bit. I see that this link is complaining. Let's see what it is. You see that it again wants me here to return. So again, this is not really a problem. It's just a styling issue. And while we are here, we can fix it right away.
>
> **[3:10](https://www.linkedin.com/learning/node-js-microservices-22685072/add-jwt-tokens-to-the-user-service?u=76281980&t=190)** The same as here for this method where we're also in the catch block on to return. So now this file is all clean. So now let's head into our shopper service. And there I open now server routes, user index JS, because there we have this login route, and I want to see what authenticate now returns to me. So what I will do now is I will create the break point here, and then I head into the package JSON of this shopper application, and I stop shopper first. So let's head to shopper, stop it. And now I start it in debug mode. Because I'm curious what happens now when I log in. So I open my shop application, head to login, and type in test@[test.com](https://test.com) and some password, I type login. And now I'm here. And now I can look into what auth user now contains, because this is the variable that we got back. And you see that it now contains a token. Let's make this a little bit bigger. You see that this is a very long token that I'm getting here now. And now of course, we have to deal with this token. We have to store it in the session
>
> **[4:42](https://www.linkedin.com/learning/node-js-microservices-22685072/add-jwt-tokens-to-the-user-service?u=76281980&t=282)** and handle it in our shop application. And we will do that in the next video. I will now again stop the debugger. So I'm clicking here on this disconnect icon. I remove the debugger here from the console, and I start my shop application again to have a clean slate before we start. Let's remove the break point as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (6), [npm](../../Skills/Web%20Development/npm.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Env Vars:** json (6), jwt (5), npm (2)
> **CLI Commands:** npm (2), make (1)
> **Prerequisites:** install (2), before we start (1)
> **URLs:** [test.com](https://test.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Make the front end use JWT authentication](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=0)** - [Instructor] Let's now change our shop application, so that it can use this token. For that I open workspace, shopper, server, routes, user, index js, and there you have this login route. And as we learned before, we will now get a token back and not an authenticated user. So, the token will contain this user, but it will be embedded into the token payload. The first thing I'm going to do is I will also here add a Try Catch block. So, let's leave the code in a better shape always when you change something. So, I add catch, Try Catch, and I will move the function block right into the try block. And if an error happens, I will do pretty much the same as I do up here. So, I will copy now an error message down here, so that if something happens, I will, console, error, the error so that I myself know what's happening. And then, I will let the user know that something went wrong and let's call it something went wrong. Okay, that's that, but so far, we have not solved anything around our token. So, as we know, we are returning now adjacent object with a property token. So, let's first call this auth user here result because it does not contain the user anymore as such.
>
> **[1:36](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=96)** And then, in line 16, I want to now check if there is a result and a result.token because when I get this back, the authentication was successful and now we also have to change the session object. You see that we are here, now saving the user ID in the session, but now I want to store the token. So, I will just call it token equals result the token.
>
> **[2:11](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=131)** So, now, when a user successfully logs in, we store the token in the session and not the user object anymore. Now, let's try this out. I will go into log in and I try to log in now. Let's try this and you see that I get the message that I have been successfully logged in, yet up here it does not look like that. I don't see the user I'm logged in with. I don't see any additional menu items. So, something is still off here. That'll show you what because somewhere in this application we are using right now the user ID from the session to load the user and apply it to diffuse. And this is now still not working because this part of the code is not aware that we are now using JWT. So, to fix that I head into lib, middlewares js because there we have this assigned template variables, middleware that does exactly that. You see that in line 13 where we check if there is a user ID on the session. If so, we are loading the user from the database using the user service in line 15 and we will change this now, so that we don't even need to use the service anymore, but just rely on the JWT token. For that, I will now change line 13 to read request session token. So, I'm checking if the token is present and if the token is present, I will now use JWT to verify and decode this token.
>
> **[3:45](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=225)** And for that, we have to bring in JWT first. So, on my console I run [npm](../../Skills/Web%20Development/npm.md) install dash S [JSON](../../Skills/Web%20Development/JSON.md) web token, then I start my shop application again and on top of this file I will now bring in JWT. So, const JWT equals require JSON web token. And now, we can scroll back to line 16. And now, I want to get this current user from this token. So, I remove the call into user service and I just run JWT, verify, and as first argument I pass in the token. So, I want to verify this token and the second argument I pass in this private key that we defined before and this was my secret key. Next, I also have to fix the next line because we are trying to get user ID from the session and now we have to change this to const user ID. Let's remove the structuring assignment equals response local current user dot ID. Then now, I have to fix one more thing because if JWT verify fails, it will throw an exception, and this in this case,
>
> **[5:18](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=318)** might crash my application because you see in line 29 that we are just returning next error, which would terminate, basically, or kill shopper. So, what I will do here is I add another Try Catch block. So, I add try, then I move this logic that deals with JWT up, then I add the catch block, error. So, what do we do in this case? What do we do when this now failed? We will just reset this session token because it's obviously not correct anymore. Maybe it just expired. So, just, let's assume that user is no longer logged in. Then, I also have to move the user ID out of this try block because it can only exist when JWT verify was correct. And I will add one more thing now to this block that deals now with my shopping cart, which is I have to, again, check if there is now a current user. So, I add if response to local's current user. So, we were able to load the user. Then, we will also look at the shopping cart. With that, now everything should work as before. So, let's head into the browser and I just have to reload in this case because the token was already stored before.
>
> **[6:53](https://www.linkedin.com/learning/node-js-microservices-22685072/make-the-front-end-use-jwt-authentication?u=76281980&t=413)** Let's do that and we see now we are correctly logged in. Let's also look if the shopping cart still works, so I add something to the cart. Yes, so this now works as well as intended. So, our shopper application is now using JWT to authenticate and store a user, but we are missing one very important part now because if you head into manage items, the catalog service does not know anything about JWT or a logged in user or anything. So, if I click on edit item, I could now edit the item and the catalog service would not know anything about JWT, a logged in user or anything. It's still open on the internet. Anyone can still create or edit items on it. And we will change this in the next video by securing the endpoint that deals with manipulating catalog data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** jwt (13), json (2), npm (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Prerequisites:** install (1)

#### [Using bearer headers](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=0)** - [Instructor] In this video, we will change our catalog service so that it requires some authorization for specific actions. And for that, we will use this so-called authorization bearer. So, you see this here in this diagram. So when we post or put to items on the catalog service, I want to add a header that contains my token. And the convention for that is that, this header is called authorization:bearer and then the token. So this is how you transport the JWT token with a request without having to send it in the regular payload or as a request parameter. For that, I will first head back into Visual Studio code and I will open Server, Routes, Admin because this is now an admin route item. So there is everything that deals with CRUD for items. So I open index.js and let's scroll down, where we have this post request that will change an item. And down here somewhere, you see that we have this catalog service created. And now I add a second argument, request.session because there we have the token. So I'm using the token from the session. I copied it because we also need it if we scroll down for deleting an item. So also there a second argument,
>
> **[1:36](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=96)** I pass in the token. And do we also have a route for changing an item? No, we don't. So this post request does post it, can change or update an item. Oh, and here you see is last argument. I almost forgot that. So here in line 52, we also need to pass in the token. Next, I'm going to open the catalog service and I will now change all those methods to send this authorization bearer with them. And that's pretty easy now. So let's head down to create. Now the second argument is the token and I just have to add one more property to this configuration object for Axios. And this is just in headers. And in curly brackets, I add authorization, colon and then in backticks bearer dollar token.
>
> **[2:47](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=167)** Make sure you have no typo in there because if there is a typo, nothing will work. So headers, authorization, bearer, token. Then I copy that and I head down to where we update an item. And again, this last argument we have now the token and add this to the config object for my request and also for the delete action, we now pass along a token. If you're completely unfamiliar with HTTP headers, please look them up. So they are just a way to transmit information downstream with a request. And now with the changes we made, we are now transmitting the JWT token with every request that we do to the catalog service for specific actions. Next, we have to also of course update the catalog service so that it reads this token and validates that. So for that, I had in to [Microservices](../../Skills/Software%20Development/Microservices.md), Catalog Service and let's close now everything we have here and I will first now create the middleware that does this token validation. And for that I had into Lib. And there I create a new file and I call it requireAdmin.js.
>
> **[4:20](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=260)** And I now need again [JSON](../../Skills/Web%20Development/JSON.md) web token to do the validation. So ahead into the console of the catalog service I stop the service and run [npm](../../Skills/Web%20Development/npm.md) install -S jsonwebtoken.
>
> **[4:40](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=280)** Then I can start the service again. And then I can simply add function requireAdmin it gets request, response and next because it's a middleware and that's the signature for middlewares. In the end, let's also not forget to export this modules. So add module.exports equals requireAdmin. And on top of this file, I will now bring in JWT, const JWT equals require jsonwebtocken.
>
> **[5:23](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=323)** And what will we do now? So the first thing we have to do is, we have to read the header that we get with the request. So add const authHeader equals req.headers.authorization. Now we have to grab the token from this header because as you know, it's bearer then token. So I add const token equals, and then I check if there is the authHeader and I can split the authHeader just by a blank and get the first element from it because that's not a token. Let's real quick, I'll show you again how this looks like. So format is bearer and then some token like simplified one, two, three. So if we split the string, the second element will be our token. Now we can check first if there is a token or not. So if I say, if not token, we can return response and status and we return a 401. Which means unauthorized. That's exactly what's happening here. Let's fix the indent here.
>
> **[6:58](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=418)** And if there is a token, I return jwt.verify then I pass in the token, then my secret key and now I'm using the callback syntax. That's basically a matter of taste but now I do as a callback error, user as last argument. I'm having hit the callback function. And in this callback, I will now add if error, return res.sendStatus 403
>
> **[7:42](https://www.linkedin.com/learning/node-js-microservices-22685072/using-bearer-headers?u=76281980&t=462)** which means you don't have the permission to access this resource. Then I add one more check, if user, because if everything went fine, I have now user object, hopefully. And if not user.isAdmin that's the property a user has. When it's admin, then this is true. That's just how the user object looks like. But if this is not the case, return res.sendStatus again 403. In any other case, I can now store the user in, req.user and return turn next. With that, we have now middleware that reads a token from the header, validates it and then also ensures that the user that is passed along with the token has admin privileges. In the next video, we will use this middleware to secure our routes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Code Identifiers:** requireadmin (3), authheader (3), sendstatus (2), isadmin (1)
> **Env Vars:** jwt (4), crud (1), http (1), json (1)
> **Definitions:** is a  (3), is called (1)
> **UI Navigation:** scroll down (2), open the (1)
> **File Paths:** index.js (1), requireadmin.js (1)
> **CLI Commands:** make (1), npm (1)
> **Prerequisites:** make sure you have (1), install (1)

#### [Protecting endpoints with JWT](https://www.linkedin.com/learning/node-js-microservices-22685072/protecting-endpoints-with-jwt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/protecting-endpoints-with-jwt?u=76281980&t=0)** - [Instructor] So we just created a middleware that handles Authentication Bearer Token. Now we want to use it. And for that I just head into routes, index.js, I will first bring in this middleware. So add const, requireAdmin equals require,
>
> **[0:23](https://www.linkedin.com/learning/node-js-microservices-22685072/protecting-endpoints-with-jwt?u=76281980&t=23)** and it's up there in lib, requireAdmin. And now let's look, I copy that variable here now. Now let's look where we need it. We need it when we want to create an item. So I just add this now as one middleware to my post call. So this is how Express works. If you're unfamiliar with Express middlewares, please look at my Express course that you also find in the library. So this is now the middleware that is called first for every time someone posts to item, the same I do for put, and the same I do for delete. Let's save this, and let's head into a browser to test this now. So I go into Manage Items, and let's create one test item. 999, TestItem, 12, and then Submit. And you see it was created. Now I also want to see what would happen if, for instance, this token would be wrong, and now I'm using something very quick and dirty. I will just change the token to be a string,
>
> **[1:53](https://www.linkedin.com/learning/node-js-microservices-22685072/protecting-endpoints-with-jwt?u=76281980&t=113)** and let's say it's "WRONG". Now let's head back into my browser again. I try to edit this item, let's scroll down all the way, and I try to change the price to 122. I hit Submit, and you see that I get the message that the item was successfully updated, which is not correct in this case. So somewhere we are not evaluating an error status correctly, but I'll leave it at that for now. Let's try it with deleting the item. And you see, it thinks it's successfully deleted, but it isn't, which is generally fine, because when I end up in this state, I'm actually already working basically on bad intent, so I'm trying to forge something into my catalog service. So this is not directly an error case that we really need to handle here, because I should not even end up on this page if I'm not an admin user. So I'll leave it at that for now. But what we see is that I cannot run this CRUD operations anymore on my catalog service. So let's fix this back. I remove the wrong token and I update this here. Let's click on Manage Items again. And now let's try to delete this item. And you see now it's really deleted. So we now have successfully protected our catalog routes that do the CRUD operations.
>
> **[3:27](https://www.linkedin.com/learning/node-js-microservices-22685072/protecting-endpoints-with-jwt?u=76281980&t=207)** Of course, we can now extend it to other operations, for instance, for the order management so that you can only set an order as shipped when this token is present and the user is an admin. I leave this to you, it's very similar to what we did just now. There's one more corner case I want to quickly cover. This is when you go into Manage Users, you see that I can change the user and remove the admin status. I could also delete this user. And this is all not accounted for now in the logic we have because we don't look into the database anymore when the user comes along, we really trust the token. And there are different means how to handle that. For instance, creating a blocked list with [Tokens](../../Skills/Web%20Development/Tokens.md) somewhere that is also consulted to check if a token is invalidated. JWT and [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) would be worth a course on its own. So what I want you to take away from this chapter is that sensitive endpoints need to be protected, and JWT is a good way to do it. If you ever want to apply JWT in your own applications, please have a close look at [jwt.io](https://jwt.io) to really understand the whole topic end to end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1)
> **Env Vars:** jwt (3), crud (2), wrong (1)
> **Analogies:** for instance (3), similar to (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **Code Identifiers:** requireadmin (2)
> **UI Navigation:** scroll down (1), click on (1)
> **File Paths:** index.js (1)
> **CLI Commands:** find (1)


### 7. Adding Fault Tolerance and Resilience

[↑ Back to Table of Contents](#table-of-contents)

#### [What's your goal for this chapter?](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22663546?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22663546?u=76281980&t=0)** - [Instructor] Microservice architectures are way more complex than monoliths because in addition to software bugs, there are now multiple things that can fail. Let's have a look at our architecture, and I use Jaeger for that. You see that we have a pretty connected complex graph now already. Each of those services and also the network in between, if the services are distributed on the cloud wherever, can fail. Do we know that our infrastructure will handle such outages gracefully? And this is the whole topic of resilience. And in this chapter, we will explore different techniques to make services more resilient. Let's get a little bit more formal overview before we continue. So if we have multiple independent services, the [Probability](../../Skills/Data%20Science/Probability.md) of failure increases. There can be network issues, [Hardware](../../Topics/Hardware.md) failures, software bugs, everything can take down a service, and such a service outage can have a cascading effect on all other services. Resilience helps the system to continue to function despite individual service failures. So what does resilience really mean? We need to gracefully [react](../../Skills/Web%20Development/React.js.md) to errors and also recover from failures. The goal is not to avoid failures, as such, but we want to respond to them effectively. And in the end, the end goal is to prevent downtime or any data loss. And there are several techniques to ensure resilience
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/what-s-your-goal-for-this-chapter-22663546?u=76281980&t=94)** in service architectures, and we will just explore a few of them. And they are chaos testing. This is about intentionally introducing failures to test resilience. There are even libraries that do that, for instance, Netflix's Chaos Monkey or Gremlin. In our example, we will just do something very simple. We will just stop a service and see what happens. We will also explore some caching. Caching ensures that some data can be shown, even when the underlying service is done. Also, it's a good way to reduce the overall load on your system. And then there are also queues. Queues are a way to decouple services through asynchronous operations whenever this is possible. Let's start with a very simple chaos testing exercise in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1), [Hardware](../../Topics/Hardware.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Chaos testing](https://www.linkedin.com/learning/node-js-microservices-22685072/chaos-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/chaos-testing?u=76281980&t=0)** - [Instructor] I mentioned chaos testing before. Chaos testing is basically about intentionally breaking things and seeing if the service architecture, or the application as a whole, is still working. There are different offerings for that and libraries. For instance, Netflix has Chaos Monkey, which is a whole library that does chaos testing. And there is also Gremlin, that is also a commercial offering around that. We will now do a very simple poor man's skills testing, by just stopping a service. So I head to visual studio code, and I have the card service console open. And I will now stop it. And now I'm heading back into my browser and I'm just reloading the page. And you see, it already fails spectacularly. And I would love to say that I added this error on purpose, but I didn't. But it's also a good way to show you which errors could occur and how to fix them. So you see, the problem happens in shopper server services, service clientjs. And, I see that I'm reading a undefined property message. So what did I do wrong here? So I head back into Visual Studio code, I open my shopper application. And, I just look for the error and where it is. And here it is, so I'm opening this right away. And there you see that I actually introduced an error when I did the error handling, and that's a extremely hard thing to catch because it only happens when an error happens.
>
> **[1:36](https://www.linkedin.com/learning/node-js-microservices-22685072/chaos-testing?u=76281980&t=96)** So what am I doing here? I'm evaluating correctly error response, error response data. But then, I want to provide an error message by looking into error data message. And it should read error.response.data.message.
>
> **[1:58](https://www.linkedin.com/learning/node-js-microservices-22685072/chaos-testing?u=76281980&t=118)** So that causes this error that we just saw. So let's head back into the browser and reload the page. Now we are already closer to a solution because we are now getting an error that the request failed with status 404. Because we look in our shopping cart with each request, and now the service is responding with a 404 and we are clearly not gracefully reacting to that. So let's head back into our shopper application and let's see how we could fix that. So now in our shopper application, I see that I'm throwing an error. And this is still in the service client. That's okay, yeah? Throwing an error here is fine, but where is this called? And, if I scroll down a little bit more, I see that this is happening through a call in middlewares. So let's head into middlewares and there you see that I'm doing this call into a card service, get all. And if an error happens there, we return next error. So we'll crash express in this case. So how can we solve that? I will now simply add a try catch block, to gracefully handle this problem without making it crash express. So I add try catch error. And, then I copy that block up to the try block.
>
> **[3:33](https://www.linkedin.com/learning/node-js-microservices-22685072/chaos-testing?u=76281980&t=213)** And if an error happens for now, I will just do a console error dot error. When I now head back into the browser and the reload page, you see that the shopping cart count is not shown anymore. And so it's not perfect, but at least the user can browse my shop and it does not crash as a whole. So this is a good example how just stopping a service can really reveal important information. And how there are easy measures you can take, so that your application won't crash as a whole. Feel free to make it an exercise now to stop some more services and see what happens, and ensure that the shop application still won't crash.

> [!info]- Semantic Content
>
> **Tools:** visual studio (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Adding caching to reduce load and bridge outages](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-caching-to-reduce-load-and-bridge-outages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-caching-to-reduce-load-and-bridge-outages?u=76281980&t=0)** - [Lecturer] In some cases, caching can be a good way to bridge outages. It also can help to reduce the load to the overall system. Caching can ensure that the site doesn't look empty or down by showing at least some content and offering some functionality. So what do I mean by that? The catalog service gives us a list of items. Can we show this list even if all instances of the catalog service are down? Well, we can try. For that, we will add caching to our shopper front end service and open the catalog service class for that. So I head into workspace, shopper, server, services, and there into the catalog client. Now, on top of the file I will now add a variable, which will serve as a very simple local memory-based cache for us. Call it allItemsCache and initialize it with an M-theory.
>
> **[1:02](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-caching-to-reduce-load-and-bridge-outages?u=76281980&t=62)** And now I head into the GetAll method right here. And every time we get the result, we store this result in allItemsCache. So allItemsCache = result. And now if there is an error, we simply return allItemsCache. So let's try this out. So what I will first do, I will just reload the page to populate the cache and next I will now stop our catalog-service. So I hit Ctrl + C. And let's now try to reload the page. And you see it still works. If I go into Manage Items, even this still works. Likely when I go into Edit item, yeah, there you see there nothing shows up. And we would need to handle this problem now in some other graceful way maybe restrict maybe the item management or set the whole page into a degraded state and let the user know that something is wrong. But at least the page as such is not completely down. This has different implications. For instance, search engines, [Google](../../Glossary/Service/Google.md), for instance, will of course penalize you if the page is down and no items are shown maybe a whole weekend, yeah. So with this measure, you are at least in the degraded but at least somewhat functional state.
>
> **[2:36](https://www.linkedin.com/learning/node-js-microservices-22685072/adding-caching-to-reduce-load-and-bridge-outages?u=76281980&t=156)** And as you saw, it's a very easy fix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **Code Identifiers:** allitemscache (4)
> **Analogies:** for instance (2)
> **Cross-References:** as you saw (1)
> **UI Navigation:** open the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [lecturer] (1)

#### [Using queues for decoupling](https://www.linkedin.com/learning/node-js-microservices-22685072/using-queues-for-decoupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/using-queues-for-decoupling?u=76281980&t=0)** - [Instructor] One goal in microservice architectures is to avoid tight coupling. It's hard to decouple actions that are needed to show data on the website instantly, but when it comes to posting data to a service in a file-and-forget way, doing that asynchronously through some intermediate service removes any dependency between caller and receiving service. Queues are a common way to accomplish that, and the basic principle is very simple. Basically, they provide a way to publish messages to it. In our shopper app, we store orders. Right now, the order functionality is still part of the monolith, but we will change that. When a customer clicks on Buy, there are several actions performed, and eventually an order is created. This is typically a file-and-forget call. I don't need any feedback by the order-service at this point. If you use a queue, these Create Order messages are stored in this queue regardless of the status of the order-service. When the order service is available, it consumes this queue, and after it consumes a message, it can acknowledge that it received it successfully. In this case, this message will then be removed from the queue. There are several queuing systems available, and if you're on an infrastructure provider like AWS [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), they will come out of the box. In this course, we will be using RabbitMQ to publish and consume order messages asynchronously. RabbitMQ is available for all common operating systems and has a client library for [Node.js](../../Skills/Web%20Development/Node.js.md).
>
> **[1:34](https://www.linkedin.com/learning/node-js-microservices-22685072/using-queues-for-decoupling?u=76281980&t=94)** As such, it's a good candidate for showing the basic functionality of queues in this course. In the next video, I will cover how to set it up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **CLI Commands:** aws (1), node (1)
> **File Paths:** node.js (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Installing up RabbitMQ](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-up-rabbitmq?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/installing-up-rabbitmq?u=76281980&t=0)** - [Instructor] Installing RabbitMQ is super easy, and it's available on many systems, and we will use Docker for it, which makes it even easier. For that, I prepared a snippet for you. So in _Resources, _support, in the snippets file, you find somewhere towards the end instructions how to run the Docker container. So, I will just copy these instructions and paste it into my console. It will start in the background anyways. So, let's run this. And you see that I already had it installed so it's a little bit quicker for you. It might mean that it starts pulling some images, but in the end, you will end up with a running RabbitMQ. And to test this, we can just look into the management interface, which should now be reachable. I have the link here, and I open my browser, and copy the URL in. So it's a local hotspot, 15672. And there you have it, the RabbitMQ management interface, and you can log in with guest, and "guest" for username and password. Log in. And there, you have the running RabbitMQ. Right now, we don't have any channels or queues, or anything, but we will have soon. Because in the next video, we will create a queue and start publishing messages to this queue.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), find (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the order service](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-order-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-order-service?u=76281980&t=0)** - [Instructor] Before we can get started using queue in the service, we first have to also create our order service. This is the last service that is still in the monolith and for that, again, you might not even try it out on your own. I head into workspace, [Microservices](../../Skills/Software%20Development/Microservices.md) and I open the resources file and I will drag the order-service into microservices. Then I open a new console again. I cd into the order-service. I run [npm](../../Skills/Web%20Development/npm.md) install, followed by npm run dev. Now we have a running order-service and again, we have to also add the service client to our shopper main application. So I head into shopper, server, services and I remove the last regular service file. And drag the new ServiceClient into this directory. Let's head back to shopper because errors are waiting for us. Refactoring ongoing. I go to server/routes/admin/orders/index.js But just following this link and here already see the error. Maybe I have to mention that this also works only this way and you also see the error this clearly because we have [ESLint](../../Skills/Software%20Development/ESLint.md) on this. So this all comes together nicely here. So I add OrderServiceClient here and I save
>
> **[1:35](https://www.linkedin.com/learning/node-js-microservices-22685072/setting-up-the-order-service?u=76281980&t=95)** and there are more places where this is used. So in server/routes/cart/index because when we buy the shopping cart, then the OrderService is called. So I change this now as well into OrderServiceClient. Now everything is running again. Let's head into the browser. Let's open the app, localhost:3000 and I will first log in. Test@[test.com](https://test.com). And now I head over into the shop. I add a few items to my cart and on my cart, I now click on Buy Now. And as I'm also admin, I can now head to Manage Orders. And down here, click on Set Shipped. And we see that the order is now marked as shipped. Let's ship this one as well. All right, so this means that the OrderService works. Let's look into the console if everything's fine there. Yeah, everything looks good. So now we have completely moved to microservices. All the business logic now resides in separate services. In the next video, we will now finally start using RabbitMQ.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [npm](../../Skills/Web%20Development/npm.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **UI Navigation:** open the (2), click on (2), go to (1)
> **CLI Commands:** npm (2), cd (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1), [test.com](https://test.com) (1)
> **Definitions:** is called (1), means that (1)
> **File Paths:** server/routes/admin/orders/index.js (1)
> **Ports:** :3000 (1)
> **Cross-References:** in the next (1)

#### [Producing orders](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=0)** - [Instructor] I already mentioned that we have a fire and forget method that creates an order. You find it in the workspace, in shopper, server, routes, and it's in the cart route, because that is when things are ordered. And that's look at, there should be some route that is about buying, so here it is. And there you see at the very end, the order is compiled, and then we just await creating the order here in line 127. So, we just pass in the user ID, the user email, and the items, and we want to change this create method now so that it uses the queue and not anymore this HTTP API that we have. And for that, I open first this create method, follow this link, and then, of course, I also have to get the ANQP library, and for that I stop my shop application real quick and type [npm](../../Skills/Web%20Development/npm.md) install -s anqplib.
>
> **[1:13](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=73)** Then I can start my application again, and on the very top of this file I will now add const anqp. So that's the Revit EQ client library equals require anqplib. Now let's head into our service client to the create method. I will first comment out the old way of creating an order by calling the HTTP API, and I will now start with adding a try catch block, try catch error.
>
> **[1:56](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=116)** And in the try block, I can now add const connection equals await ampq.connect.
>
> **[2:10](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=130)** And we are connecting two, and that's now the DSM to ampq, ampq, and 127.0.0.1,
>
> **[2:23](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=143)** because we are listening on the default port, so that is now fine. Next, we have to create this channel. So we want to create a channel to communicate, so add cons channel equals await connection.createChannel.
>
> **[2:45](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=165)** Next, we want to name the queue that we want to use. That's just a variable, so add const queue equals, and let's call this queue orders. And then we can already compile the message, so this is now the message that we want to send into the queue, so add const message equals [JSON](../../Skills/Web%20Development/JSON.md).stringify,
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=191)** because what we do here is, we basically create a blob of JSON that we just throw into the queue, so we can just do a JSON stringify and we pass in the userId, so this is basically the arguments that we would usually send through HTTP, the email address, and the items. So the items is an array of the items that are in this order. Next, and that's not very specific to RabbitMQ, so I now add a await channel.assertQueue. So for each of that, you can also look into the documentation of RabbitMQ. I pass in the queue, so that's the name of the queue, then some configuration, and in this case, it's just durable.true. This means that it, the queue, survives, restarts. And then we can already send into this queue by adding channel.sendToQueue, the name of the queue, its orders, and then add Buffer.from message. So I'm creating a buffer that I now send into the queue, and in the end I can just write console.log, and I will now make it a little bit better visible on the console. Let's make a pretty print here.
>
> **[4:46](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=286)** So I write X in brackets, Sent %s, message.
>
> **[4:57](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=297)** That's another way to use string interpolation in [Node.js](../../Skills/Web%20Development/Node.js.md), and in the end, if there's an error, I will add console.error error.
>
> **[5:13](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=313)** And with that, we should be ready to send messages to the queue already, so let's head back into the browser, and I add a few items to my cart, and then in the end, I click on buy now. So at least I got an error. Let's look into Visual Studio Code, and you see the payload that we just sent into the queue. Now, if you're curious, we can also look into the RabbitMQ management console. So open local host, enter port 15672.
>
> **[5:57](https://www.linkedin.com/learning/node-js-microservices-22685072/producing-orders?u=76281980&t=357)** I log in with guest and guest. And let's see. And you see that there is now an established channel, and the peer address is now, in this case, because we are accessing it through Docker, there should be a queue. So yeah, there you see it. So there is the orders queue, and we can also click into it. Let's see if we can get messages. Yeah, you see, there is the payload. So with that, you can also explore the queue. So now this order is waiting in the queue. It has not been consumed yet, because this is what we will do next, because the order service now has to start hauling this queue. We will do this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [npm](../../Skills/Web%20Development/npm.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **Env Vars:** http (3), json (3), api (2), anqp (1), dsm (1)
> **CLI Commands:** make (2), find (1), npm (1), node (1), docker (1)
> **Code Identifiers:** createchannel (1), userid (1), assertqueue (1), sendtoqueue (1)
> **Definitions:** is an  (1), means that (1)
> **File Paths:** node.js (1)
> **Ports:** port 15672 (1)
> **Versions:** 127.0.0 (1)

#### [Consuming orders](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=0)** - [Instructor] We have now orders waiting in our queue. Now we have to create the logic in the order service to consume these messages and create orders from it. For that, I will now open workspace [Microservices](../../Skills/Software%20Development/Microservices.md). I open the order service, and I also head to the order service console. And I stop the script real quick because I have to [npm](../../Skills/Web%20Development/npm.md) install dash s amqplib, because obviously we need to store as well. And, I'm starting the script again. And now the question is where should this logic live? And it can basically live anywhere. I will now add it to my app.js script. So somewhere down there before the module gets exported I will simply add this logic now, because it's independent of any route. And now I will use something a little bit specific to nodejs, so I will create an async function that calls itself so that I can use async await within this function. So I start with async, then parenthesis, then I prepare the function body, curly brackets. And then in the end I add again parenthesis to the very end. So this is now a self-calling function. And everything I put in here now will be started at start of the application. So I start with a try catch block.
>
> **[1:42](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=102)** Next I will bring in amqp, so I scroll all the way up and add const amqp equals require amqplib.
>
> **[1:56](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=116)** Then I also need the order service because we want to create an order. So I add const OrderService = require lip/OrderService.
>
> **[2:14](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=134)** It is linked now to complaints because the order service should go down after the regular requests of node module packages are happening. So I did this now. And now finally in my consumer method, I add constant connection equals await amqp.connect.
>
> **[2:43](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=163)** So that's very the same as for the producer. And I connect to amqp column slash slash 127.0.01, for the local host. Next, I create the channel const channel equals await connection.createChannel.
>
> **[3:11](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=191)** Then I name the queue, const queue. So, you see it's very similar to what we did for the producer before. The queue is orders. This has to of course match. Then, I will assert the queue. So I add channel.assertQueue, the queue name. And I want it again to be durable, so that it does not go away when it's stopped. And this also has to match. So if you do this for the producers, you also have to do the same for the consumer. And now let's add a console log statement. Again, some pretty print here, where I say x, just to make it visible on the console Waiting for messages in %s and just the queue name.
>
> **[4:10](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=250)** So now we know that we are listening. And now comes the interesting part, because now we add channel.consume. So this is now the consumer method, consume. And we want to consume the queue. And again, if anything like the setup queue or anything is unclear for you, please look into the documentation for Revit and Q. This is not a Revit and Q course, but it should be pretty clear what we are doing here. So I call channel consume, the queue, and then I create a callback function that gets the message. So this is the message, this is the callback function that will be called every time a new message appears. And in there I now do the work where I create the order, const order equals. What we do now? We do [JSON](../../Skills/Web%20Development/JSON.md).parse, and parse this payload back into a regular json object. If you remember correctly, we used json stringify before. So message content toString. And it's a function, so I add parenthesis here. And then I can already say console.log, again x just for visibility, Received %s and I provide JSON.stringify order
>
> **[5:43](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=343)** as an argument, that will be then passed into the string instead of the %s. Then I also of course have to create this order. So I add await OrderService dot create. And I pass in the order, userId, is the ID. order.email. And, then order.items, all right. Now we see that is link complaints because we have to use async also for the call bank function. So add this async. Now I can await in there. And then in the end, after I awaited, I can add channel.ack. This is acknowledge. So I tell Revit and Q now that I successfully processed this message and it can be now removed from the queue. Then, don't forget we are still in this channel consume method. I just add some configuration. And this is noAck is false. This means that Revit and Q really waits for this acknowledgement message, compared to automatic acknowledge a message after it was consumed. So this makes sure that we successfully created the order before it is removed from the queue. Now all that is missing now is if there's an error
>
> **[7:19](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=439)** I print out console.error(error). Now I save, and you already see now in the console that it was waiting for messages and orders and it already received the order. And it seems it was successfully processed. So let's head back into the browser and let's create an order there again. So I add stuff here, then I head into the cart. Click buy now. This should now end up in the queue. Let's see what the console says, yes. So this is now the next order that was received. And let me just real quick, just for the fun of it now stop this again, the order service. And let's try this again. So I head into shop, I add a few more items.
>
> **[8:20](https://www.linkedin.com/learning/node-js-microservices-22685072/consuming-orders?u=76281980&t=500)** I buy my cart. So this all works, regardless of if the order service is running or not. Now I start my order service. And you'll see it starts consuming and immediately now receives this other order. And now if we head into the manage order interface and scroll down, you see the three orders that we mean were created. The one was for at the very start. The other ones, and we can set them to shipped. And with that, we have really successfully decoupled the frontend shopper application and the logic that creates orders in the backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Code Identifiers:** createchannel (1), assertqueue (1), tostring (1), userid (1), noack (1)
> **CLI Commands:** npm (1), node (1), make (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Prerequisites:** install (1), setup (1)
> **File Paths:** app.js (1)
> **Env Vars:** json (1)
> **Versions:** 127.0.01 (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/node-js-microservices-22685072/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-microservices-22685072/next-steps?u=76281980&t=0)** - [Daniel] Thank you for taking this course. I hope you liked it. During this course, you've learned how to build a microservice architecture with Node. Along the way, you also learned how to split up a monolithic app into individual services and how to use more advanced concepts like queues. Please check out our library for other advanced courses that show how to build on this knowledge. For instance, I also created a course that goes deeper on the architectural considerations when splitting up monoliths. You could also look deeper into [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs and how to secure them. Also, knowing how to run your application on cloud providers like AWS, and broaden your [DevOps](../../Topics/DevOps.md) knowledge is a good investment. Feel free to follow me here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), or reach out if you have any questions or feedback. I'm Daniel Khan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [DevOps](../../Topics/DevOps.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** node (1), aws (1)
> **Env Vars:** rest (1), aws (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [daniel] (1)


## Instructor

- [Daniel Khan](../../Instructors/Web%20Development/Daniel%20Khan.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/nodejs-microservices-4403064)

## Skills Covered

- Microservices
- Node.js

## Path Context

### In [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)
← [Node- Authentication](Node-%20Authentication.md) | **11 of 11**

### In [Advance your Node.js Skills](../../Paths/Web%20Development/Learning%20Paths/Advance%20your%20Node.js%20Skills.md)
← [Advanced Express](Advanced%20Express.md) | **6 of 8** | [Advanced Node.js](Advanced%20Node.js.md) →

## Appears In

- [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)
- [Advance your Node.js Skills](../../Paths/Web%20Development/Learning%20Paths/Advance%20your%20Node.js%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Learning Full-Stack JavaScript Development- MongoDB, Node, and React](../Database%20Management/Learning%20Full-Stack%20JavaScript%20Development-%20MongoDB%2C%20Node%2C%20and%20React.md) — Node.js
- [Building a Website with Node.js and Express.js](../Database%20Management/Building%20a%20Website%20with%20Node.js%20and%20Express.js.md) — Node.js
- [Kubernetes- Microservices](../DevOps/Kubernetes-%20Microservices.md) — Microservices
- [Advanced Node.js- Scaling Applications](Advanced%20Node.js-%20Scaling%20Applications.md) — Node.js
- [Advanced Node.js](Advanced%20Node.js.md) — Node.js

---

[↑ Back to top](#)