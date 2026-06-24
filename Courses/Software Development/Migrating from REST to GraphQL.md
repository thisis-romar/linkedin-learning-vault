---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: migrating-from-rest-to-graphql-23466102
url: "https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102"
duration_minutes: 64
duration: 1h 4m
level: Advanced
updated: 2/29/2024
learners: 7199
skills:
  - API Management
  - GraphQL
  - Representational State Transfer (REST)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGPRFMsUkMSOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709073643074?e=2147483647&amp;v=beta&amp;t=EzvLMf_VfMzWbXeB9ERVcN-_yl1a9EFc5QDzsZ4DRdM"
linkedin_topic: Software Development
learning_paths:
  - '[Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)'
prev_courses:
  - '[GraphQL Essential Training](GraphQL%20Essential%20Training.md)'
path_nav: '[{"path":"Stay Ahead in GraphQL","position":3,"total":3,"prev":"GraphQL Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/api-management
  - skill/graphql
  - skill/representational-state-transfer-rest
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Migrating%20from%20REST%20to%20GraphQL.md)

![Migrating from REST to GraphQL](https://media.licdn.com/dms/image/v2/D560DAQGPRFMsUkMSOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709073643074?e=2147483647&amp;v=beta&amp;t=EzvLMf_VfMzWbXeB9ERVcN-_yl1a9EFc5QDzsZ4DRdM)

# Migrating from REST to GraphQL

> Are you a back-end developer wondering when to start using GraphQL or how to migrate your current REST API to GraphQL? In this course, GraphQL expert Emmanuel Henri guides you through the process step-by-step, explaining when and why you should make the switch to GraphQL, and how to set it up. Emmanuel covers the basics of adding new data, common queries and their syntax, arguments, fragments, and

> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102) | 1h 4m | Advanced | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Replace REST with GraphQL](#replace-rest-with-graphql)
  - [What you should know](#what-you-should-know)
- [**1. First steps**](#1-first-steps) (4 videos)
  - [Why use GraphQL for REST](#why-use-graphql-for-rest)
  - [REST project introduction](#rest-project-introduction)
  - [Set up GraphQL](#set-up-graphql)
  - [GraphQL refresher](#graphql-refresher)
- [**2. Add Items with GraphQL**](#2-add-items-with-graphql) (5 videos)
  - [Create the initial schema and type](#create-the-initial-schema-and-type)
  - [Program the initial schema and type](#program-the-initial-schema-and-type)
  - [Set up the initial resolvers](#set-up-the-initial-resolvers)
  - [Finalize the DB connection](#finalize-the-db-connection)
  - [Add a few items with GraphiQL](#add-a-few-items-with-graphiql)
- [**3. Read Items with GraphQL**](#3-read-items-with-graphql) (3 videos)
  - [Simple queries in GraphQL](#simple-queries-in-graphql)
  - [What are aliases and usage](#what-are-aliases-and-usage)
  - [Fragments basics](#fragments-basics)
- [**4. Update Items with GraphQL**](#4-update-items-with-graphql) (2 videos)
  - [Overview of mutations](#overview-of-mutations)
  - [Code your updated mutation](#code-your-updated-mutation)
- [**4. Update Items with GraphQL**](#4-update-items-with-graphql) (2 videos)
  - [Coding our delete mutation](#coding-our-delete-mutation)
  - [Final test for your mutations](#final-test-for-your-mutations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Replace REST with GraphQL](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=0)** - [Emmanuel] [GraphQL](../../Skills/Web%20Development/GraphQL.md) has evolved into a nearly perfect tool to efficiently query multiple [Databases](../../Skills/Software%20Development/Databases.md). For the backend developer, you might be wondering, this course can be taken as a first step if you're wanting to learn how to migrate your [RESt](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API over to GraphQL. First, we'll take a look at when and why you should be moving to GraphQL. Then we'll spend some time going over the basics of adding new data to your GraphQL server. Next, we'll focus on the most common queries and their syntax, along with arguments, fragments, and aliases. And finally, we'll finalize our typical backend operations with how to delete and update your data in a GraphQL environment. So if you're ready to move your REST API while learning all about GraphQL, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** api (2), rest (1)
> **Speakers:** - [emmanuel] (1)

#### [What you should know](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=0)** - [Instructor] If you have some experience with [GraphQL](../../Skills/Web%20Development/GraphQL.md), or taking a basics course on it, this course will be easy for you, and you might want to skip some of the initial setup videos. But if you've never done GraphQL, this course is also a good fit, as we'll cover some of the basics before we move on to migrating graphs to GraphQL. In any case, if you get lost in the weeds with the terms used in this course, feel free to take my Essentials course on GraphQL, and come back to this one after. Although I highly recommend having a good foundation in NodeJS, [JavaScript](../../Skills/Software%20Development/JavaScript.md), and [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs, as we spend most of this course leveraging these concepts, and I'm not going through the basics of these items. You will get lost if you don't have enough experience in these areas. GraphQL can be done in Mac, [Windows](../../Glossary/Service/Windows.md), or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), so feel free to use whichever operating system you prefer. Also, I'll be using visuals to do code as my editor, but feel free to use whichever one you desire.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. First steps

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use GraphQL for REST](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=0)** - [Host] [GraphQL](../../Skills/Web%20Development/GraphQL.md) has a lot going for it, but I'll focus on the main advantages of moving your [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API to GraphQL. First of all, you get types which guarantees that the data you get will be of the type expected and prevents many of the common errors with rest. So if that's been an annoyance for you, you're a good candidate. Also, when you have multiple [Databases](../../Skills/Software%20Development/Databases.md) or even different databases serving the same application, GraphQL is a much better approach to this disjointed architecture as it serves a single point to do all your queries versus multiple separate entities. The other advantages of going to GraphQL is the flexibility of the queries. You can query for a very specific type of data, say only one property of the query, like only the first name, and not all the properties. An object may return when you query a list of contacts, for example. So just these small points may already prove to you GraphQL is a much better approach than a simple rest API. However, GraphQL isn't the best solution in all cases. If you're building a small application or API, REST could be a much better approach. Consider the cost of developing the GraphQL tool versus the value it may provide. If you're going to scale an application beyond the simple queries or already have a big implementation, then yes, GraphQL may make sense. My advice to you is start small with REST. And as you'll see in this course, implementing GraphQL isn't that big of a deal.
>
> **[1:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=95)** And when you're ready, go for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (9), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Env Vars:** api (3), rest (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [host] (1)

#### [REST project introduction](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=0)** - [Instructor] We'll now take a look at the project we'll be migrating to [GraphQL](../../Skills/Web%20Development/GraphQL.md), one that I have built in another one of my courses where we create a full node express API. So let's take a look at it. So let me first cover some of the requirements that you'll need to actually run the project. The first thing that you'll need is to make sure that you run [MongoDB](../../Skills/Software%20Development/MongoDB.md) on your system. So whatever is your operating system, what you need to do is, go to the website for MongoDB. And then what you need to do is, go into the resources, you can either go to start with guides or what I usually do to go a lot faster, what I do is MongoDB, like so, download, and then I go to the community server download. I go here, select packages, and then you select the operating system that you're on. So in this case, I'm on macOS. But you can go here and select whatever system you're on, [Windows](../../Glossary/Service/Windows.md), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or macOS, and then you install it. So you can follow these instructions or go into the community server here or make sure you follow all the instructions. There's also another way to install it through Homebrew, which is actually faster. Follow whatever process. You can research this on [Google](../../Glossary/Service/Google.md), so how to install MongoDB, but you need to make sure you're running MongoDB
>
> **[1:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=93)** as a service inside of your system before you actually go to the next step. Once you've done with that, what you can do is, close this, and go into the exercise files. In the resources folder here, you have the project that we're going to convert into a GraphQL server. So what I would do is, copy all the files that you have in this folder here into a new folder. So I'm going to do this, create a new folder, and then I'm going to call this whatever it is. So in this case, maybe API or project, like so. And what I'm going to do is, copy all the files here from the exercise files and then copy them inside of my project here, like so. So make sure you also have the hidden file here. So usually babelrc files are hidden. So if your system is not showing hidden files, you're not going to see this file. And once you run the project, it's not going to run properly. So you want to make sure that you first see the hinted files inside of your system. There's a shortcut on macOS to actually do this. I believe it's shift command dot, let's see, yeah. Shift command dot actually show or on shows hinted files. I'm not familiar with the Windows commands. You can research this on Google as well. So as soon as you see this file, you're good to go. So what I'm going to do next is, load this into my visual studio code here, which is the editor that I use for all my projects.
>
> **[3:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=186)** Going to bring up the terminal, like so, new terminal. And the first thing I'm going to do is, install all the dependencies by doing [npm](../../Skills/Web%20Development/npm.md) i, or you can do install, whichever way you want to do it. And once everything is installed, you can do npm start, which will start the project. So if you go into the package.[JSON](../../Skills/Web%20Development/JSON.md) file here, you'll see that the start script, we'll actually start nodemon with the index file here and run babel node, which is why you need to see the babelrc file. Otherwise, this is not going to run properly. Once you see that your server is running on port 3000, you can actually check it if you want. So I'm going to show a new window and then local host. And if you see node and express servers running on port 3000, that means that everything is running properly and you should be good to go. Alright, so this is the actual project. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (5), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Google](../../Glossary/Service/Google.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2)
> **CLI Commands:** make (5), node (3), npm (2)
> **Prerequisites:** install (5), you'll need (2)
> **UI Navigation:** go to (4), select the (1)
> **Code Identifiers:** macos (3)
> **Tools:** terminal (2), visual studio (1)
> **Ports:** port 3000 (2)
> **Env Vars:** api (2)

#### [Set up GraphQL](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=0)** - [Instructor] So let's go ahead and set up [GraphQL](../../Skills/Web%20Development/GraphQL.md) inside of our example application. So if we look back at our previous video, one of the things that I recommended to do as quickly as possible is to install [MongoDB](../../Skills/Software%20Development/MongoDB.md). And I found a quick link here that can actually show you exactly which installation you need to do based on the operating system. So if you go to this link here, [mongodb.com/docs/manual/administration/install-community](https://mongodb.com/docs/manual/administration/install-community),
>
> **[0:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=33)** it's going to give you for each of these operating systems the proper steps to actually install MongoDB. And also, if you want to use Docker, you have an installation on Docker. But the one thing that I keep repeating and I mentioned quite a few times in the last video, make sure that MongoDB runs as a service in the background on your operating system. Otherwise, whatever comes next is not going to work. All right, so enough on that. Now the next thing we need to do is install the dependencies that we need for GraphQL. So I'm going to go inside the package.[JSON](../../Skills/Web%20Development/JSON.md) file here first. I'm just going to close this for screen estate, like so. Close this here and we're going to remove "body-parser" here. So the quickest way to do this is to uninstall it. So you also remove it from the package log.json. So let's go and do [npm](../../Skills/Web%20Development/npm.md) uninstall body-parser and it's going to uninstall it from your dependencies here. And then what we need to do is install a few things to move along with GraphQL. So I will install, first of all graphql and then there's a package with Express that has GraphQL, which simplifies the coding for whenever you do Node Express servers with GraphQL. And those are the dependencies that we need. So let's install them. Now we have them here so we can close this.
>
> **[2:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=128)** I will close this. And now we need to do a few things inside of our index.js file. And I'm going to go and go into our index.js file here and let's go ahead and start doing a few imports. So we still need to have express, we still need, actually we don't need mongoose here, so let's remove it. And we don't need body-parser. We need to import next graphql. Actually we need to import specific things, graphqlHTTP from 'express-graphql' like so, then we need to import { buildSchema } from 'graphql', like so. So the next thing I'm going to do is build my schema, buildSchema, like so. And we're going to build a very basic schema with a type of query. We'll work on this later on, but for the time being, we'll use that example just to have something working, like so. We're also going to build a root which we will change in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course. And the root basically will provide a resolver function, which we'll explain later what it is.
>
> **[3:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=222)** Basically resolver function resolves a specific thing from the database. It's a function basically that resolves a query from the database. So provides a resolver function, like so. And we're going to create a root which we'll need and that will resolve hello. We'll start with this just as an example. It will return 'Hello world'. In the future, what it's going to do, it's resolve specific queries to the database that we have, in this case Mongo. Okay, so let's go and continue. So let's remove all this, which we don't need anymore.
>
> **[4:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=277)** Static files we're going to keep. We actually don't need the routes. Remove this here, same here. We're going to add this detail here in a message. And finally what we're going to do is set up our Graphql endpoint. And what we're going to do is do app.use, which is in an Express server function, and then set up the graphql endpoint, which will basically use the HTTP endpoint from the graphql package. And in it we need to pass a schema first, which we'll create. And if you go up here, we have this base schema that we've built for now. So we can actually run this. The rootValue is going to be root like so. And do we want to use graphiql? Of course we do 'cause we're going to use it a lot to basically run examples as opposed to use an endpoint. And just as a note for you, this Enables the Graphiql IDE.
>
> **[6:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=372)** And now that we've saved this, we can actually run our GraphQL server. So let's go ahead and do an npm start. So if we go into a new window here and do localhost and do graphql, you have GraphiQL that's running right here. And basically we have set up our first GraphQL server. So now let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (15), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Prerequisites:** install (7), set up (4)
> **CLI Commands:** docker (2), npm (2), make (1), node (1), mongo (1)
> **File Paths:** index.js (2), package.json (1), log.json (1)
> **Code Identifiers:** buildschema (2), graphqlhttp (1), rootvalue (1)
> **Env Vars:** http (1), ide (1)
> **Cross-References:** previous video (1), in the last (1)
> **URLs:** [mongodb.com](https://mongodb.com) (1)

#### [GraphQL refresher](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=0)** - [Instructor] So for those who are using this course as a first [GraphQL](../../Skills/Web%20Development/GraphQL.md) course, let me do a quick overview of the GraphQL basics that you may have been covered in another course. At the base, you need to define a schema for your data, so any mutations or queries expect the properties inside your object to be of a certain type. I'll get back to mutations shortly. And this brings me to the next item, Types. Any properties or data you send or pull to GraphQL expects a type. For example, if it are a friend example here, we have first name, last name, gender values, and more. Each expect a type of string or even a type that I've defined as email. The purpose of this type assignment is to prevent any issues when adding new items to the database. Another term that I just mentioned is mutations. In GraphQL, you query the data or mutate the data. So adding or updating, or even deleting data in GraphQL are mutations. I'll explain what our fragments, aliases, and user of arguments when we get to these areas later, but they're basically advanced methods to query GraphQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (6)
> **Definitions:** defined as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Add Items with GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Create the initial schema and type](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=0)** - [Instructor] As explored before, we need to set up a schema and phenotypes for each of our properties. So let's go ahead and continue working on our server. So the first thing I'm going to do is go into the source folder of the current server, and I'm going to go in the models here and change the models to data. So let's rename this and I'm going to rename this data. Next thing I'm going to do is go inside the CRM model here, and I'm going to create a new file that will be called schema. Let's keep the CRM model for now because we're going to need some of these things later. But what I'm going to do now is just create a new file. So let's go ahead and call this schema.js. And inside this schema, what I'm going to do is basically import mongoose from Mongoose like so, and then create a schema with mongooses.schema like so. And that's all we're going to do for now for this one. Now the next thing we need to do also is to create a resolver file. So the resolvers, again, are the functions that will make the queries with the database and then return a result inside of [GraphQL](../../Skills/Web%20Development/GraphQL.md). So let's go and create a new file, and we're going to call this resolvers.js. And then finally,
>
> **[1:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=94)** we're going to create a file that will be the database connectors. So dbConnectors.js,
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=109)** and this is where we're going to export our ContactSchema and create a new Schema.
>
> **[2:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=121)** And then the first thing we're going to do is basically if you want to leverage what we have here. We're going to do that. So what I'm going to do is leverage everything up to company. We don't need all the other stuff just for the sake of saving time here, like so. So each contact will have a first name with a type string, and this is required. We are going to have a last name, email, and company like so. So basically what this is, is the schema that we're going to leverage down the road for the official schema here. So let's save this and then let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **File Paths:** schema.js (1), resolvers.js (1), dbconnectors.js (1)
> **Env Vars:** crm (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** dbconnectors (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Program the initial schema and type](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=0)** - [Instructor] Okay, so let's continue working on our schema. So right now, we have our database connectors, which basically is the dbConnectors here. So this file connects our [GraphQL](../../Skills/Web%20Development/GraphQL.md) to the database it needs. So if you had multiple [Databases](../../Skills/Software%20Development/Databases.md), this is where you would connect to each one of them. Now, the resolvers is what we're going to work on next. And then the schema is what we're going to be working on now. So let's delete the crmModel because we don't need this anymore. And then let's continue working on our schema. So I'm going to close the dbConnectors for now 'cause we're not going to need it. So the first thing I'm going to do is erase all this. I just wanted to do a quick file, so you guys see what we need to work on. But now what we're going to do is import resolvers from the resolver file, like so. Now we need to install a package that's called GraphQL Tools. And let's go and open the terminal here. And what you need to do is do an [npm](../../Skills/Web%20Development/npm.md) i @graphql-tools/schema
>
> **[1:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=74)** and install this particular package. If you're seeing any dependency issues, what you could do is force it too. Whenever there is an issue, npm has become more vocal with some dependencies now, which is a great thing when you're running code in production. But for development purposes, for learning purposes, it's not as much of an issue. But what I would recommend is go through the dependencies when you're running into these issues so you could force it and it's going to install it regardless. So let's go ahead and make sure that we are closing this. I'm going to close this to have more screen estate and continue with my imports, by importing makeExecutableSchema from the file that we just installed. And then let's start working on our type definition, which is the next thing that we need to do. And what we're going to do is explicitly call out types here. So we're going to create a few types. The first one is going to be the Contact type, which is based on the dbConnectors here. So we have these things here. So company, email, lastName, and firstName. So let's go ahead and create that. So we need an id, clearly. Then what we need is a firstName, which will be a type of String. lastName, and basically what we're doing here
>
> **[2:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=168)** is we're telling GraphQL that whenever there are queries or mutations that are done on the GraphQL server, these are the types that we're expecting for each of these keys. If the type isn't matching the actual key, then we have an issue. So let's say, for example, I was passing a number or something else in here, it would basically spit out an error, like you're not passing the right type. But in our case, everything is a string. So if we're sending strings to this particular type, we'll be fine. Then we need to create a type of query. So basically, the query type is what are we going to do with these contacts? So we're querying them. So we need to have a function that's going to be called getContacts, and then it will return an array of contact, which is the type that we define above. So basically when you're doing type definition, you're basically telling GraphQL what are the transactions that can happen and within those transactions, what are the types that we're supposed to expect, so all of this is predictable and also safer when we're making any changes, mutations or queries inside of GraphQL. So we're also going to have an input, which is going to be a ContactInput. And then that ContactInput is going to have all the same types
>
> **[4:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=261)** that we have in our type Contacts. And what I'm going to do is simply copy and paste the same thing here. Then what we're going to do is create a mutation which will take that input. So basically, when we are querying GraphQL to get contacts and then get an array of contacts, we are expecting to get these types. When we are making mutations, which is basically creating a new contact inside of the GraphQL and then sending it to the database, we're expecting an input of this type. So you could customize the input specifically when you're creating new contacts, or you can also be specific as to what you're expecting when you're querying GraphQL. So I'm going to create a type of mutation, and this type will basically have this createContact function, which will expect an input. And guess what? The input will be the ContactInput. And then what it will do. Once we have created the contact, it's going to give you a contact or the result of your mutation or basically creating a new contact. So once you're done creating the contact, it's going to give you the input or basically giving you the result of that mutation. Okay, so now our type definition is done. Now we need to create a schema out of this type definition
>
> **[6:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=362)** that we just created. And we're passing the typedefs and the resolvers, which we'll work on next. So if you run GraphQL right now, it's not going to work because we are still missing the resolvers. We'll also have to update the index.js file as well to have all these changes 'cause we're exporting a schema, but we haven't added the schema that we're exporting here inside of our index file yet. Okay, so let's save this and move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (11), [npm](../../Skills/Web%20Development/npm.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Code Identifiers:** dbconnectors (3), lastname (2), firstname (2), crmmodel (1), makeexecutableschema (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** npm (2), make (1)
> **Prerequisites:** install (3)
> **File Paths:** index.js (1)
> **Cross-References:** next video (1)
> **Tools:** terminal (1)

#### [Set up the initial resolvers](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=0)** - [Instructor] In this step, we'll set up our initial resolvers for our queries and the first mutations where we'll be able to add new contacts with [GraphQL](../../Skills/Web%20Development/GraphQL.md) and into a database. So let's get going. So the first thing you want to do is go into the resolvers file. So if you don't have it open, it's in the data folder and resolvers. And let's go ahead and start by importing Contacts from our database connectors. Then we'll create a resolvers as an object, which will hold all the different queries and mutations. So we're going to first start with doing your first query. And that query, as you remember, was called getContacts. And again, if you go back to our schema here, you're going to see that we have getContacts. And then in our mutations, we're going to create a contact and we'll create that resolver right here. And that getContacts is a function and that will return Contacts.find. So because we're using right now Mongo, and we're going to use Mongoose to actually do these functions, we're using the function from Mongoose to return our contacts from the database. And therefore when we use getContacts inside of GraphQL, it's going to resolve that function here,
>
> **[1:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=95)** which basically finds new contacts in the database. So that's primarily how it works. Now we're going to do mutations. And again, we're going to create a contact. In this case, create a new contact takes the root, and then takes an input, right? And is also function. There you go. Little typo here. So what we're going to do first is create a new object, that will be a newContact that will contain all the information that we need from the creation of the new contact. So if we go here, it's going to have all these different inputs here, actually not the idea because the idea will be created by the database, but everything else we're going to need. So if you want to copy this to save time and then go into the resolver and paste it, you're going to have a portion of the work done. So what we're going to do here is basically do input.firstName and then comma, and then continue with the same thing here. Like so boom, boom, boom. And do something similar here. So input.firstName, we're going to do input.lastName, and then again, we're going to do input.email,
>
> **[3:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=194)** and then finally, input.company. So from that object that we created, we're going to get the contact ID,
>
> **[3:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=211)** _id like so. And then finally we're going to return after with the Promise. So we're going to resolve our promise, and we're going to save our new contact. So basically the contact that we've created here, we're going to save it into a database. And then if there's an error, in this case here, we're just going to reject it for now. else resolve a newContact. And that's basically the first few resolvers that we need to create. All right, so now that we've created our first resolvers, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **Code Identifiers:** getcontacts (4), newcontact (2), firstname (2), lastname (1)
> **CLI Commands:** find (1), mongo (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Finalize the DB connection](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=0)** - [Instructor] Now let's write our connection to our database with our [GraphQL](../../Skills/Web%20Development/GraphQL.md) server. So let's get back into data and then dbConnectors. And this is the file that again will connect to one or multiple [Databases](../../Skills/Software%20Development/Databases.md). So in this case, we're going to connect to [MongoDB](../../Skills/Software%20Development/MongoDB.md), but it could also connect to [SQL](../../Skills/Data%20Science/SQL.md) or any other databases. All right, so the first thing we're going to do is remove the export here. We're going to keep that though. We're going to keep the ContactSchema. And what I'm going to do is import mongoose from "mongoose" first. Then we're going to do the Mongo connection. And basically we're going to do mongoose.promise = global.promise.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=59)** And then we're going to connect to our database, which in general should be mongodb like so, local host, forward slash, in this case, contacts. We're actually creating the document contacts. So if you want to change the name of the document, if the schema that you're building is completely different for your own needs, you can change this. And obviously if your local host or if you're connecting to a different database, this is where you change the connection to. So it could be a connection to an external database, it could be cloud-based, whatever it is that you need or you're using is where you're going to change this. Perfect. So now here we have our ContactSchema. And in this case, what we're going to do is change a bit of this code here. We're going to do a mongoose.Schema, and I'm going to do low cap C in here. And you will remove, in this case the required like so, just keep it type string, type string, type string, like so. Just keep it simple for the exercise of learning, like so. And then after that, we're going to create the final connection to contacts with the model. So mongoose.model. And we're using the contacts connection
>
> **[2:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=156)** that we created and add the ContactSchema here. And finally, we're going to export Contacts, which will now be available to be used inside of GraphQL. Okay. So that's basically what we've done here. So we've created a connection to our first database. You can add multiple databases here if you want. And then we created a mongoose schema, which we added the strings of type. Then we've created a connection with the model and the database. And then we exported all this to be used somewhere else in our application. So this is all you need to do. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** mongo (1)
> **Code Identifiers:** dbconnectors (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Add a few items with GraphiQL](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=0)** - [Instructor] Okay, so let's finalize our server file to make sure that we can take all the information, the schema, the resolvers that we've built, and finalize our [GraphQL](../../Skills/Web%20Development/GraphQL.md) server. So the first thing we're going to do is remove that line here. So the buildSchema, we actually did this in the schema itself. So now what we're going to do is import our schema inside of our application here. So let's go ahead and import the schema from our src/data/schema, like so.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=36)** Now we're going to remove all of this 'cause this was just to build the initial GraphQL server. And we don't need this anymore. We can keep this, the static files as well. What we're going to do is also remove the root value because we've passed this inside of our schema as well, and we need nothing else for this server to work and we should be good to go. So let's save this, what we're going to do now is open up our terminal. I'm using the control gravity shortcut, but you can also click on New Terminal here. And I'm going to do an [npm](../../Skills/Web%20Development/npm.md) start. It seems like we have a little error, and FYI, when there's little mistakes like this, it's good information for you guys to how to debug little things that happen when you first load a server. So in this case, it throws a new error of TypeName defined in resolvers, but not in schema. So let's scroll here. Error, mutation defined in resolvers, but not in schema. Okay, so let's take a look at this. So let's go into our resolvers. We have mutation here, that's defined. So yeah, we're good. And let's look into schema. And we look at type mutation. I see exactly what happened. So I don't know if you see the error here, but mutation has typo here. So if I save this, now it should be back to normal. Your server is running on port, blah, blah, blah, GraphQL.
>
> **[2:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=132)** So we're good to go now. Okay, so now it's running. Let's go to our browser, refresh our browser, and now we have this working. So one of the things when you have GraphQL that is really cool is that you have documents here that you can take a look at to just give you an idea of how to use GraphQL with what you just said. So we have a query type and we have a mutation type. And if we click on mutation type, it takes createContact and an input of ContactInput and Contact. So let's go ahead and do this. So I'm going to completely delete this. So let's go ahead and create our first mutation, which takes createContact and it takes an input. And that input is firstName. Let's go ahead and do Manny, lastName Henri. Email me@[me.com](https://me.com). Hopefully nobody has that email. And then company [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Okay. And then what I want is please return to me the ID and the firstName when I run this mutation. So what I'm basically doing here is using our GraphQL server to create a contact inside of my database leveraging GraphQL.
>
> **[3:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=227)** So as I run this, okay, so we have another issue here. So let's take a look at this. So let's go back to our server and we could see that the app crashed. So let's go up, let's take a look at the error message. So it says, throw new Mongoose Error Model.Prototype.save no longer accepts a callback, a-ha. Okay, so we need to change our code a little bit in the resolver here. Okay, so let's go ahead and let me close this for a second, and I'm going to close this as well. And in our create new contact, we're going to do an async promise here. So it's going to be a bit different in our code just to make sure that we are doing this right, newContact, okay, so the Promise here, we're going to try something different here. All right, I'm going to rewrite that code just for my train of thought, just to make this work. So let's do this. Let's try and await newContact.save.
>
> **[5:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=302)** So basically we're going to make sure that this runs properly before we return the newContact as such. And then we're going to do a catch if there's an error, so this way, we're doing this properly. So throw new Error. Okay. So Error. Let's do something like Error saving contact, like so. And then add the err.message.
>
> **[5:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=344)** Okay, so that should fix it, let's save this. Let's make sure we have our server running here and we should be good to go. Let's go back to our query here and let's try that again. And now we create a new contact, which has the ID, and saved with the first name of Manny. So everything is back to normal. I don't know if you understood what just happened. So basically Mongoose doesn't accept a call back anymore, so we have to use async await catch approach to this, and it's back to working. So this is how you create your first GraphQL server. Let's move on to deepen our knowledge and therefore doing more stuff with GraphQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (9), [npm](../../Skills/Web%20Development/npm.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** newcontact (3), createcontact (2), firstname (2), buildschema (1), lastname (1)
> **CLI Commands:** make (5), npm (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **URLs:** [me.com](https://me.com) (1)
> **Env Vars:** fyi (1)


### 3. Read Items with GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Simple queries in GraphQL](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=0)** - [Instructor] So let's go ahead and explore how we can do queries with [GraphQL](../../Skills/Web%20Development/GraphQL.md), and we're going to create one where we can actually get only one contact. So the first thing I'm going to do is erase all this, and then I'm going to go and create a query. Very same way that we created the create contact mutation, we're going to get contacts, like so. So now what we need to do at this point is define for our contacts what we want. So let's go ahead and add a few things that we'd like to have from our list of contact. Again, get contacts gets multiple contacts, but you can go granular with what you get back from GraphQL. So let's say I just want to have the first name and the last name of each contacts. I can run the query like this, and then I would get a list of all the contacts with first name, last name. I could get first name and just the company, and then run this, and then get the first name and which company this person is part of. So let me create another query just to make sure that I have a little bit more data. So let's say history, let's go into the mutation here, and I'm going to change a few things. Manuelo Henrietto, and from the company Algofields, which is my company. And let's run this. We got an ID here, so we're good. Let's go back to our get contacts,
>
> **[1:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=95)** first name, last name, then run this, and we have three contacts inside of our list. But now what I'd like to do is get just one contact. So what I'm going to do is run a query with IDs, 'cause we're going to get our contacts by IDs, so now I got the IDs for each one of 'em. So let's go back to our code and now create the actual code that we need for getting only one contact. So I'm going to close my server thing here, and the first thing we're going to do is go in our queries here, and then create, let's call it get one contact, as a function. So again, like before, as you can see, we need to make this async, await, same approach, because Mongoose will not accept promises anymore, like I used to do it in the previous version of the course. So we're passing ID because we need something unique inside of our call. And then let's go ahead and the function will try. And we're going to build a variable constant, which we'll await and find, inside of our contacts in the database, find by ID. By ID, and pass the ID like so, and then return contact. Oh, I made a mistake here.
>
> **[3:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=191)** Boom. Okay. And then we're going to catch if there's an error, and then throw new error. I think we're going to basically copy and paste what we've done here just to shorten our coding. And while I'm here, I'm going to add this here, and therefore, same thing here at the end. Okay, so basically, we're passing an ID, and then we're calling to the [MongoDB](../../Skills/Software%20Development/MongoDB.md) by using the contacts connection that we've created and using the method find by ID, and then passing the ID here. And then returning that contact therefore is going to resolve inside of GraphQL, and that's basically how it's going to work. Now we need to add it to our schema here, same way we've done it before. So let's go ahead and add this to our schema. Get one contact, which requires an ID,
>
> **[4:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=264)** and we're going to return a contact as the result of the resolver. Okay, now with all this, we can save. Let's make sure everything is running properly. Do we have a problem here? What is the problem? Oh yeah, we just did, so it should be okay. So let's see. If we look here, get one contact. The get one contact shouldn't be in mutation, actually. It should be in here ,in the queries. There you go. So now it should be back to normal. Okay, so now that we have this fixed, let's go back here, and now let's just refresh our page. And now what I'm going to do is inside of our contacts, I'm going to get one contact, which requires an ID.
>
> **[5:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=324)** And let's use one of these, like so, right? And then here, what we're going to do is add, let me get the first name and the company of that contact that we're running. Boom. And we get the one contact, which was first name and Manny based on that ID. And this is how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **CLI Commands:** make (3), find (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### [What are aliases and usage](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=0)** - [Instructor] Okay, so now let's explore aliases. What are aliases? They are basically a way to get multiple queries in one pass with different patterns or different things that you want for specific people or a list of people. So let me give you an example. So right here, I have getOneContact, right? So the way it would work is, for example, you do the one query, but for each of these you can actually label them anything you want. It could be for example, one, and as you can see, there's no more errors. And then what you could do is do two and then do a second one. So let's go ahead and do the second, getContacts, and let's do the ID that we have here, just for the sake of the example. And then what you need to ask. In this case, let's go and ask for example, last name and the ID, like so. And we need to do getOneContact, that's the error. So in this case, we would get one query that would return for this contact, the first name of the company, and this other query that would return the last name and the ID. So let's run this. So now, as you can see, for the same contact, clearly, we would have the ID, the last name, and then the first name of the company. So you could do a whole bunch of things here. So let's say for example, you want to do,
>
> **[1:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=92)** well, okay, I need all the contacts for this one. So getContacts. And then for all the contacts, I just want the last name, like so. So you would run all these different queries in one pass and you would get this data here. So where this is really useful is in certain cases for your applications, you need very specific things to be returned. And therefore, what you could do is have the one query have multiple sets of data through [GraphQL](../../Skills/Web%20Development/GraphQL.md). So this is where aliases comes really useful when you have a granular approach to what you need, and therefore you can use different types of query here for even the same contact or different contacts or a list of contacts. So you can always do this and then leverage the information that's returned inside of your state in your application, and basically use this for different contacts in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** getonecontact (2), getcontacts (2)
> **Analogies:** for example (4)
> **Speakers:** - [instructor] (1)

#### [Fragments basics](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=0)** - [Instructor] Like aliases, fragments are a neat feature that comes built in with [GraphQL](../../Skills/Web%20Development/GraphQL.md). It is very useful when we start requesting the same data across several items. So let me demonstrate. So let's say for example, you wanted to have all three of these specific requests, but with the same data. So instead of having firstName, company, lastName, ID, and just last name for all these different queries, you want it to have the same data show up, you would build a fragment. So let me show what it does. So the way you build a fragment is by typing fragment and then naming the fragment. So contact, let's say contactFragment_on_Contact.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=44)** So therefore you're stipulating that we're actually leveraging Contact for that fragment. So therefore, what exactly do we want? Well, let's say we wanted firstName, lastName, and then the company. So what happens here, you're creating a fragment that stipulates we want these three elements for all of these queries. So what we would do now to make this work is basically by removing this first, but then doing ... and then contactFragment like such. So you would do that on all three queries and it would allow you to get the same data across all your queries. So let's go ahead and do this. And it did the query even without me finishing it. But let's go ahead and finish this. And right now, as you can see, it's still not working. So let's go ahead and run this. So now what it's going to do is, first, my first query is with this ID, I wanted to have all the information or the firstName, lastName, and company on this first query. And this is the same idea. So it's going to give me the same information. And then on the Contacts, the third query, which is getting all the contacts, it would give me, again, all the same information, but based on the contactFragment here. So this is really useful when you want to have, for example, multiple queries with different users
>
> **[2:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=140)** or different parameters, but then you want to have the same information return, you build a fragment, and then you stipulate on that fragment exactly what you'd like to have for the information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** firstname (3), lastname (3), contactfragment (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Update Items with GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of mutations](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=0)** - [Instructor] So let's review what mutations are. So if you're not comfortable with the term mutation yet, and if that didn't make sense from the beginning when we started talking about mutations, it is basically the same thing as in the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API when we add items or when we delete items or when we update. So the usual or typical crowd operations. So with mutations in [GraphQL](../../Skills/Web%20Development/GraphQL.md), all the queries are basically when we ask information from the server or the database or multiple [Databases](../../Skills/Software%20Development/Databases.md). And mutations is when we actually mutate or change those databases. So when we add new items, when we delete items, or when we update items, these are all mutations. So if we look back at our code here, and let me just close this here, we have one mutation where we actually create a contact. And if we look at the resolver that's related to that mutation, we're creating a new contact and we're sending it to the database. So we're mutating our database, adding new things, deleting new things, updating new things. These are all mutations. So if you want to have more information on mutations, what you could do is go and search for GraphQL mutations,
>
> **[1:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=85)** and look directly into the mutations areas, which is right here, and read in the documentation. So we have, for example, and GraphQL's documentation, an example of creating a new episode for, I believe this is "Star Wars" here, and then information on that specific episode. So basically adding new things into the database or GraphQL server is a mutation. Deleting, updating is all mutations. So if that doesn't stick yet, go back to the documentation and read on it a little bit further, and over time, it should actually sink in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** rest (1), api (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Code your updated mutation](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=0)** - [Instructor] Okay, so what if we wanted to update a contact? Let's create a new mutation that will allow us to update a new contact. So let's go ahead and create that function here in the mutations. So what I'm going to do, after the createContact, I'm going to put comma and then create a new function here. So update contact, and again, we're going to use the async roach root. And then we need an input. Again, we need an ID as the input first. Well actually not an ID, the input, because we're going to need multiple items from the input itself and then what we're going to do is try
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=47)** and then we're going to create updated contact with an await
>
> **[0:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=57)** and then use contacts, find one and update. And then we're going to need to pass a few things as parameters. First of all, we'll need to pass from the input an ID to find what needs to be updated first, and then we're going to pass an input and then we're going to pass new as true. So basically what's going to happen here is that we're going to find the ID and update it with the input and if it's new or if it doesn't find a new one, then create a new one and then return the updated contact if it has been successful. And then we're going to do the catch dot error. And what I'm going to do is basically use this here, literally the same code as here, like so, perfect. So try to update. If it doesn't work, then catch the error. Boom, boom, boom, good to go. Alright, so now let's go ahead and save this. Now we're going to have an error if we don't add it to the schema and the mutation. Let's not do the error we done earlier when we added the query inside of the mutations. So now let's make sure that we add the mutation in here. So update contact, which takes an input, contact input,
>
> **[2:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=156)** and it will return our contact. Awesome. So now let's make sure we don't have any errors like before. We're good to go. Let's go back in [GraphQL](../../Skills/Web%20Development/GraphQL.md), right here. Let's refresh just for safe measures and let's go ahead and what I'm going to do is let's first get a request. So what I'm going to do is query, get all the contacts, but give me the IDs as well. So I'm going to run this one and I'm going to grab the first one here with this ID. Okay, so now let's close this and we're going to use our mutation. So what I'm going to do is go ahead and create a mutation. And this time we're going to use update contact and it takes an input. And now we need to add the input from, first of all, the ID. So I'm going to paste the ID that I just copied, and then I'm going to add what I want to change. Let's go ahead and do this. So for example, what I'm going to do is first name, I'm going to change it to, let's say David, last name to Henry. Let's keep it Henry and then company. Let's do Nova.
>
> **[4:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=251)** There you go. Okay. So now with this, now we need to return something. So let's return the first name, let's return the last name, and let's return the company. So now what I've done is added the inputs with the ID, which is required. First name, last name, and company, what I'm going to change or mutate and then let's return the results of that change. Let's go ahead and return it and what it says now, that updated contact has first name, last name, and company changed. So let's remember A090 as the last one. Now let's run a query of all contacts. Let's just see what happens. So let's run this and now as you can see, the first contact, which 090, now has David Henry as the first name and the last name. If we add the company to the query, now you see that Nova is the company as opposed to [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) as before. So as you can see, mutations is very useful, and especially if you consider the fact that you can have multiple [Databases](../../Skills/Software%20Development/Databases.md) connect to this one GraphQL server, which means that you can have [SQL](../../Skills/Data%20Science/SQL.md), you can have [MongoDB](../../Skills/Software%20Development/MongoDB.md), you can have [Redis](../../Skills/Software%20Development/Redis.md), [Postgres](../../Skills/Software%20Development/PostgreSQL.md), all these different types of databases where this one server can actually query into or mutate into multiple databases. This is where it becomes very powerful to use GraphQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** a090 (1), sql (1)
> **Code Identifiers:** createcontact (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Update Items with GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Coding our delete mutation](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=0)** - [Instructor] Okay, so what if we wanted to delete a contact? Let's go ahead and add the code to create that mutation. So the first thing we're going to do, again, is to go into resolvers. And what I'm going to do is do a comma there and then deleteContact like so. And then again, async, pass the root, and then pass an ID. That's the only thing we need for the input on this one. So as long as we have an ID, we're able to delete a unique contact inside of our database, and that's exactly what we need. So what we're going to do is await, go to Contacts.database, and basically use the mongoose function deleteOne. And pass, as easy as it sounds, the ID of that particular contact that we want to delete, like so. And if it's successful, then instead of returning a contact, we don't have anything to return, we'll return an actual message here. So what we're going to do is successfully deleted contact, boom. And that's pretty much what we need. And then for the throw error, we're going to do the exact same thing here. Copy and paste, boom, we have our delete function written. So now again, we need to add it to the schema, otherwise it's not going to work.
>
> **[1:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=92)** So let's go ahead and add it here in our mutations, deleteContact, and in this case it takes an ID, and then it will return a string. So basically what we're telling the system here, or the [GraphQL](../../Skills/Web%20Development/GraphQL.md) server, is that the return is not a contact this time, it's a string. So as you can see, what we're returning is a string. It's not a contact. So that's why we're changing it to that. Okay, so that's pretty much the code that we need to write for this function. Let's go to the next video to test all this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** deletecontact (2), deleteone (1)
> **UI Navigation:** go to (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Final test for your mutations](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and delete the contact or test the last mutation that we've created. So the first thing I'm going to do is make sure I have the latest and the greatest from my queries here. So I have these three contacts that I created. Let's say I wanted to delete that last one here. So let me go ahead and copy that id. And what I'm going to do here is remove all this and then go mutation. And then delete. Oh, I need to update this, just to make sure. deletecontact, there you go. Because I didn't have the latest and the greatest version here. So now I do. So now, I need to add the id that I just copied, like so. And all I have to do is run that mutation and it's going to tell me, Successfully deleted contact. Now, if I go into my history, grab the getContacts and run all of this, the contact that I deleted is no longer there. So let's go ahead and create a few contacts just for the sake of it. So mutation, let's go into createContact here. Just run this a couple of times. Boom, boom, boom. And then if I go into getContacts, now I have all these contacts here. So what I could do is just grab any one of 'em, like so, and repeat that.
>
> **[1:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=93)** Delete contact mutation here. And again, I'm just using the history to not have to retype all this. If you want to practice, you can practice by simply typing it as well. And then boom, I deleted another contact, so I can getContacts again. 1, 2, 3, 4, 5. I have five. Let's do another one. So you see that it's working. Run, and then getContacts again. And as you can see, have four. So basically if we close this three and we open the docs, now, if you click on the documentation, you click on mutations, you see that now we have all these different mutations that we created. The createContact, the updateContact, and the deleteContact with all the information that we need. The input takes a ContactInput, and this one takes an id and so on, so forth. So if you ever wonder what you need to input when you actually create something, or when you need to query something, go to the documentation and it's based on the code that you built yourself. So in theory, you should know exactly what to put in there. But if you go back to your code down the road and you don't know, you can always go and look into the documentation. And if your mutations grow a lot, because you have multiple [Databases](../../Skills/Software%20Development/Databases.md) and several databases that have different ways of getting the data in, you can also search in the documentation through your mutations, through your queries and so on and so forth. So hopefully that was a helpful conversion
>
> **[3:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=187)** from a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API to an actual [GraphQL](../../Skills/Web%20Development/GraphQL.md) server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** getcontacts (4), createcontact (2), updatecontact (1), deletecontact (1)
> **Documentation:** the documentation (4), the docs (1)
> **UI Navigation:** click on (2), open the (1), go to (1)
> **CLI Commands:** make (2)
> **Env Vars:** rest (1), api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=0)** - [Instructor] The goal of this course was to help you better evaluate if and when you should migrate to [GraphQL](../../Skills/Web%20Development/GraphQL.md) as well as the proper migration steps from a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. Hopefully, at the end of this course, you'll be able to execute both. If you've arrived at this course with no prior knowledge of GraphQL and truly enjoyed its syntax, then you can continue your journey by following many of our courses on the subject. There is an essentials course, or you can even try GraphQL with Relay. GraphQL is a perfect match for [React](../../Skills/Web%20Development/React.js.md), and both were created by [Facebook](../../Glossary/Service/Facebook.md). As a backend developer, if you've been looking for the right excuse to learn [Front-End Development](../../Skills/Web%20Development/Front-End%20Development.md), React is ideal for GraphQL. So if you want to learn more, we have dozens of courses related to React, so feel free to look for courses with the keyword React. And finally, if you want to push your backend knowledge further, there are several courses on the subject. Search for courses for database knowledge such as [MongoDB](../../Skills/Software%20Development/MongoDB.md), [SQL](../../Skills/Data%20Science/SQL.md), or even courses related to [Node.js](../../Skills/Web%20Development/Node.js.md) and Express. Thanks for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [React](../../Skills/Web%20Development/React.js.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1), [Front-End Development](../../Skills/Web%20Development/Front-End%20Development.md) (1)
> **Env Vars:** rest (1), api (1), sql (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- API Management
- GraphQL
- Representational State Transfer (REST)

## Path Context

### In [Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)
← [GraphQL Essential Training](GraphQL%20Essential%20Training.md) | **3 of 3**

## Appears In

- [Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)

## Related Courses

_Courses sharing skills:_

- [Building GraphQL Applications in Laravel](../Web%20Development/Building%20GraphQL%20Applications%20in%20Laravel.md) — GraphQL
- [Building a GraphQL Project with React.js](../Web%20Development/Building%20a%20GraphQL%20Project%20with%20React.js.md) — GraphQL
- [Spring with GraphQL](Spring%20with%20GraphQL.md) — GraphQL
- [GraphQL Essential Training](GraphQL%20Essential%20Training.md) — GraphQL
- [Learning Graphql](Learning%20Graphql.md) — GraphQL

---

[↑ Back to top](#)