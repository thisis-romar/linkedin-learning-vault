---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: graphql-essential-training-20298359
url: "https://www.linkedin.com/learning/graphql-essential-training-20298359"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 3/7/2024
learners: 9010
skills:
  - GraphQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFJzRqUCfCnzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709679371916?e=2147483647&amp;v=beta&amp;t=DaYDFmvjAqhKCVT3MiTN-6iGWwdpY0fK72Rc6aFm0z8"
linkedin_topic: Software Development
learning_paths:
  - '[[Stay Ahead in GraphQL]]'
prev_courses:
  - '[[Learning Graphql]]'
next_courses:
  - '[[Migrating from REST to GraphQL]]'
path_nav: '[{"path":"Stay Ahead in GraphQL","position":2,"total":3,"prev":"Learning Graphql","next":"Migrating from REST to GraphQL"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/graphql
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/GraphQL%20Essential%20Training.md)

![GraphQL Essential Training](https://media.licdn.com/dms/image/v2/D560DAQFJzRqUCfCnzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709679371916?e=2147483647&amp;v=beta&amp;t=DaYDFmvjAqhKCVT3MiTN-6iGWwdpY0fK72Rc6aFm0z8)

# GraphQL Essential Training

> GraphQL—a query language for APIs that was originally built by Facebook—makes it easier for you to get the data you actually need from a query. In this course, learn how to get started with GraphQL. Instructor Emmanuel Henri walks through how to set up GraphQL, explores the GraphQL schema, and goes over the basic types and fields. He also shows how to set up persistence—including how to use SQL an

> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359) | 1h 45m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Learn GraphQL essentials
  - Course prerequisites
- [**1. Setup and Introduction**](#1-setup-and-introduction) (5 videos)
  - IDE and required tools
  - GraphQL overview
  - Server setup
  - The initial GraphQL setup
  - Basic GraphQL schema
- [**2. Types and Schemas**](#2-types-and-schemas) (6 videos)
  - Object types and fields
  - Query and mutation types
  - What is the resolver and its role?
  - Scalar types
  - Enumeration types
  - List of types inside another
- [**3. Setting Up Persistence**](#3-setting-up-persistence) (4 videos)
  - Installing MongoDB for GraphQL
  - Finalize the database connectors
  - Update resolvers for MongoDB
  - Data persistence with SQL
- [**4. Mutations**](#4-mutations) (3 videos)
  - Add new items with mutations
  - Update items with mutations
  - Delete items with mutations
- [**5. Queries in Depth**](#5-queries-in-depth) (3 videos)
  - Querying all products
  - Querying with aliases
  - Querying with fragments
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Learn GraphQL essentials
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=0)** - [Instructor] Are you looking for a better way to fetch data from multiple sources?
>
> **[0:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=4)** This is where GraphQL comes in, and in this course we'll explore GraphQL and Dev and I'll demonstrate how to work with this library.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=13)** First, we'll walk through the setup of GraphQL.
>
> **[0:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=16)** Then we'll explore the syntax of all the different types and the schema.
>
> **[0:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=21)** Next, we'll add persistence using MongoDB and SQL, so we can query multiple databases.
>
> **[0:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=27)** Then we'll code mutations to add new items, update them or delete them.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=33)** And finally, we'll level up our queries using some advanced features.
>
> **[0:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=38)** I'm Emmanuel Henri and I've been working with GraphQL since it was introduced to the market.
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=43)** If you're ready to learn about GraphQL, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), finally, (1), let (1)
> **Env Vars:** sql (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is an essentials course on GraphQL, no prior knowledge of GraphQL is required.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980&t=7)** However, experience with JavaScript is a must for this course.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980&t=13)** Next, being familiar with terminal commands and npm is useful, as we run these tools often.
>
> **[0:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980&t=19)** And as you'll see, I'm running on a Mac, but you can follow along on a PC, as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Setup and Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### IDE and required tools
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=0)** - [Instructor] GraphQL doesn't require anything special outside of the tools you're currently using as a developer, so a good IDE or code editor will do the trick.
>
> **[0:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=10)** There are some options with extensions or plugins that will make your experience as a developer smoother working with GraphQL.
>
> **[0:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=17)** So for example, in this course I use VS Code with a GraphQL extension that provides some nifty tools when working with this framework.
>
> **[0:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=25)** This is personally what I use, too.
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=28)** So for example, if you want to add the extension that I'm using, all you have to do is to click on the extensions inside of VS Code, look for GraphQL, and this is the one that I use, but there's quite a few here, so there's this one, too, and a few others here.
>
> **[0:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=44)** So if you're using Apollo with GraphQL, you can also install this one, but I usually install one and see how it works and if I get everything that I need within that very first extension, then I keep going with this one.
>
> **[0:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=58)** Otherwise, I look for other things that can provide more tools for me.
>
> **[1:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=61)** If you're using Relay, you have Relay right here.
>
> **[1:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=65)** Also, if you don't want to use VS Code, there's a whole bunch of tools that you can use as editors.
>
> **[1:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=71)** So for example, there's WebStorm.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=73)** That is a paid IDE that has a lot of tools that you can use here, and there are probably a lot of features that are usable and efficient for you if you are using GraphQL.
>
> **[1:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=87)** Alright, we have our tool set ready, so let's move on to a brief introduction of the GraphQL ecosystem.

> [!info]- Semantic Content
>
> **Tools:** vs code (3)
> **Analogies:** for example (3)
> **Code Keywords:** require (1), let (1)
> **Env Vars:** ide (2)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### GraphQL overview
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=0)** - [Instructor] What is GraphQL and what are the benefits of using it?
>
> **[0:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=4)** Is it a database?
>
> **[0:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=6)** No.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=7)** Is it a server?
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=8)** Somewhat.
>
> **[0:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=9)** A client?
>
> **[0:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=10)** Neither.
>
> **[0:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=11)** So what is it?
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=12)** A couple years ago, Meta or Facebook was facing a challenge with their social network.
>
> **[0:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=19)** When you're asking for information about friends or friends of their friends' friends, well, the current query options for the database in the market couldn't support.
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=28)** So anytime you would go further than four or five levels deep in your network, Facebook couldn't support it.
>
> **[0:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=34)** This is when they created GraphQL.
>
> **[0:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=37)** GraphQL is a query language for any kind of APIs and is able to fulfill any queries across multiple databases.
>
> **[0:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=46)** So in other words, it's not a server or a database.
>
> **[0:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=48)** It's a query language.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=51)** The main benefit of using it is that you can ask for exactly what you want and you'll get those results and nothing else.
>
> **[0:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=59)** If you've followed any TypeScript courses, you're familiar with type checking.
>
> **[1:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=64)** Well, guess what?
>
> **[1:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=65)** GraphQL allows to describe what type of data you can expect.
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=70)** GraphQL's ecosystem is also in constant growth.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=73)** Not only you can get started with Facebook own version of GraphQL, but there are multiple options for you to explore.
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=81)** For example, the Polo client by the folks at Meteor is built on top of GraphQL and provides several extra features.
>
> **[1:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=90)** So needless to say that GraphQL is a great tool to add to your development arsenal.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=95)** All right, let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1)
> **Code Keywords:** else. (1), let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Server setup
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=0)** - [Instructor] Okay, so for setting up our GraphQL environment, we need a base server set up and we'll use node to get this going.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=7)** We'll also install Babel so we can use JavaScript's latest syntax as we work with our application.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=13)** So let's get to it.
>
> **[0:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=15)** So the first thing I'm going to do is literally create a new folder here on my desktop, like so.
>
> **[0:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=22)** I'm going to call this GraphQL, like so.
>
> **[0:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=27)** And then I'm going to drag and drop this folder into this window or open it from the Explorer here.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=33)** So you can do both.
>
> **[0:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=35)** So open folder, then go on the desktop, and let's go to GraphQL, like so.
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=43)** And we have our base server here, well our base folder.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=47)** So what I'm going to do now is use the terminal to install a few things.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=51)** So you can open it from new terminal, like so, or use the shortcut in your respective system.
>
> **[0:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=58)** So let's clear this and let's go ahead by doing an NPM init, so we can initialize our project.
>
> **[1:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=69)** So yes, GraphQL, version, description, index, test command, get, keywords, and then author.
>
> **[1:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=77)** You can put whatever you want in here.
>
> **[1:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=78)** I'm just going faster here, so we can create this base package.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=84)** Dot JSON file here, so as you can see, you have everything you need here.
>
> **[1:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=88)** If you want to add any details, you can do that here as well.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=91)** So what we're going to do now is install the few dependencies that we need.
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=96)** So I'm going to first install Express, so NPMI Express, 'cause that's the first thing we're going to need.
>
> **[1:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=105)** And I'll let it install.
>
> **[1:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=108)** Once it's installed here, we're going to now install a few dev dependencies.
>
> **[1:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=113)** So what I'm going to do is do NPMI, or you can use install, and do dash, dash save, dash dev, and then add a few dependencies.
>
> **[2:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=123)** So the very first one is going to be Babel CLI, and then what I'm going to do is copy and paste that particular line here.
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=131)** So I can copy and paste again and save a few keystrokes, and do core and then paste, and then I'm going to do node and then paste again.
>
> **[2:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=144)** And the last will be precept environment, like so.
>
> **[2:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=150)** Install those, and you should see dev dependencies appear on your package dot JSON file.
>
> **[2:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=162)** Once this is all installed here, I am going to close my window here, like so.
>
> **[2:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=171)** Close the window, and then create a new file.
>
> **[2:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=175)** So I'm going to go inside of my GraphQL folder, create a brand new file that I'm going to call .BabelRC, like so.
>
> **[3:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=185)** And this is where we're going to enter the presets that we need in order for Babel to compile the code from the latest version of JavaScript that we're going to use into a code that is understood when it's ran into your browser.
>
> **[3:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=203)** Okay, so we're going to enter the presets here and we're opening up an array, and we need to insert Babel, like so.
>
> **[3:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=216)** Forward slash preset environment.
>
> **[3:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=221)** And that's it, that's all we need for that file here.
>
> **[3:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=223)** We're going to close it, and then what we're going to need to do is create our first index file.
>
> **[3:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=229)** So this particular server here, actually we need to change the script too.
>
> **[3:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=235)** So let me do that while we're here.
>
> **[3:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=237)** We need to change this particular script to Nodemon and we're going to also install Nodemon.
>
> **[4:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=242)** So I had forgotten about that, we'll do that now.
>
> **[4:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=245)** So my script, I usually, not on the test one, on the start, like so, I usually like to use Nodemon when I run my servers.
>
> **[4:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=261)** Whenever you make an update in your code, it automatically restarts the server.
>
> **[4:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=265)** You can do RS-2 to restart the server whenever you want to refresh the server.
>
> **[4:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=271)** So that's why I use Nodemon, I think it's a great tool.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=275)** So Nodemon is going to open the index file that we'll create momentarily, and then we're going to pass a few command here, execution with Babel node, which means it's going to compile the code for us here in JavaScript.
>
> **[4:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=291)** Therefore, when we run start, it's going to run this code and basically use Nodemon to automatically restart the server whenever we make changes.
>
> **[5:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=301)** Okay, so now that we have this, now we can create our index file, which we'll do right now, and basically create an index.JS file, which is our point of entry into our server.
>
> **[5:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=315)** And then inside of this particular file, we're going to import Express from Express, like so.
>
> **[5:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=327)** And we're going to create our app, which will be basically an Express server, like so.
>
> **[5:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=337)** And then let's say we open our server inside of a browser and we're asking for the point of entry, like so.
>
> **[5:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=344)** It's going to basically request an answer with a response.
>
> **[5:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=352)** So basically we're making a request of this URL, and then it's going to respond with this message that we're going to pass here.
>
> **[6:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=363)** "GraphQL is amazing."
>
> **[6:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=371)** And then we're going to make sure to pass on what port we are listening to.
>
> **[6:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=378)** So there's two ways that, some people, I usually do this, I create a variable, like so, and I call it port.
>
> **[6:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=386)** And then I pass the variable of the port that I want to use, and then I usually pass that here, so I have this variable that I can always change down the road.
>
> **[6:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=395)** And whenever I use the port inside of that particular file, I don't have to repeat that code multiple times, and therefore, you just create that one variable that holds the port and then you can pass it to whichever methods or functions that actually use it, like so.
>
> **[6:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=416)** So, what we're doing here is that the app is listening on port 80/80 and we're going to do a console log whenever this server is running, and then you can always pass a message, like running server, and then let's do template strings and stuff.
>
> **[7:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=436)** So we can pass that variable that we just created, like so, running server on local host.
>
> **[7:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=451)** And then you can pass the port here, like so.
>
> **[7:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=455)** And then forward slash graphQL, like so.
>
> **[7:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=459)** So it tells you exactly where this particular GraphQL server is running on.
>
> **[7:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=464)** And yeah, that's basically what we need to do.
>
> **[7:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=467)** And now we're going to run it.
>
> **[7:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=468)** So let me just finish this here, and save this.
>
> **[7:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=473)** If you are basically entering, this is not going to work yet.
>
> **[7:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=477)** We're going to work on this fairly soon, but right now, if you ask for this particular extension here, then we're going to get this message.
>
> **[8:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=484)** So let's just make sure that our server is running.
>
> **[8:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=487)** So I'm going to open up my terminal again, new terminal, and then I'm going to, let's delete this one here, clear, and then do an NPM start.
>
> **[8:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=501)** Oh yeah, that's right, we forgot to install Nodemon, so we're going to do that now, NPM install Nodemon.
>
> **[8:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=512)** And then NPM start, like so.
>
> **[8:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=514)** Now our server's going to run.
>
> **[8:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=516)** Running server on local host 80/80.
>
> **[8:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=519)** Let's just go for port 80/80 'cause right now, the URL or basically this particular endpoint hasn't been created yet.
>
> **[8:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=528)** So let's just go into local host 80/80, like so.
>
> **[8:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=538)** And we have our message here, "GraphQL is amazing."
>
> **[9:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=542)** So everything is up and running.
>
> **[9:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=544)** Let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (9), this, (2), this. (1), delete (1)
> **Prerequisites:** install (11), set up (1)
> **CLI Commands:** npm (4), make (4), node (3)
> **Env Vars:** npm (4), json (2), npmi (2), url (2), cli (1)
> **Tools:** terminal (4)
> **UI Navigation:** drag and drop (1), go to (1), open the (1)
> **Ports:** port 80 (2)
> **File Paths:** index.js (1)

#### The initial GraphQL setup
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=0)** - [Instructor] Now that we have a base server set up, let's add GraphQL to it.
>
> **[0:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=4)** So the first thing we're going to do is install a few more things.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=7)** So, let's stop the server, so Control C to stop it.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=12)** I'm going to clear this, and what you need to install next is GraphQL itself, so graphql.
>
> **[0:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=20)** And there's a nice express package that integrates GraphQL with express very well.
>
> **[0:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=27)** So, let's go ahead and install this one.
>
> **[0:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=30)** And with those two packages, we'll be able to keep working on our server.
>
> **[0:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=35)** So, let me just close this for now.
>
> **[0:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=37)** And what I'm going to do now is create a data folder where we're going to have our resolvers, our database connections, and our schema as well.
>
> **[0:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=46)** I'll explain all of those as we work with them.
>
> **[0:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=49)** But let's create the folder first, and then we'll create the files that we need.
>
> **[0:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=54)** So, I'm going to call this data.
>
> **[0:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=56)** And then, inside of that folder, I'm going to create our schema.
>
> **[1:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=61)** So, I'm going to call this schema.js.
>
> **[1:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=65)** So basically, a schema is a blueprint for the data that GraphQL is accepting, and what are the types for each of these elements.
>
> **[1:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=75)** And what I'm going to do is explain this as I build the schema.
>
> **[1:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=79)** So, let's go ahead first and import buildSchema from graphql, I'm using shortcuts here, but it's buildSchema from graphql, like so.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=91)** And then, we're going to create our first schema.
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=94)** So, let's go ahead and create schema, and we're going to use buildSchema, like so.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=107)** And then, inside of our schema, we have to define a type for a Query.
>
> **[1:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=115)** So, we have to define a type for whatever types of data that you're going to receive, but you also need to define a type for your queries, a type for your mutations, we'll get back to that in a video or two.
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=131)** But in the meantime, we're going to just go ahead and create our first time, which will be of query.
>
> **[2:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=138)** So, whenever somebody is asking for the query hello, we expect a string.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=145)** So basically, the response should be a string.
>
> **[2:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=150)** So, what's going to happen with that, we're going to export it, and then we we'll, and as we build the rest, it'll make a bit more sense.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=159)** So, let's just finish this here, export schema, save this, and then let's go into our server.
>
> **[2:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=167)** So here on our server, let me close this to have a bit more screen estate.
>
> **[2:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=173)** I'm going to import graphql HTTP from express-graphql.
>
> **[3:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=188)** And now, what I'm going to do is after the get here, I'm going to define a root.
>
> **[3:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=195)** So, the root will be used basically to define the responses that are available from the GraphQL server.
>
> **[3:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=204)** So in this case, we have a type that we called hello, right?
>
> **[3:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=209)** which should be basically a query.
>
> **[3:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=212)** And what we're going to do is sort of create a very quick resolver here.
>
> **[3:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=216)** So, the resolver is basically the function that resolves the data from the database.
>
> **[3:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=222)** So, GraphQL has a function that is calling it to the database, and then returns data into GraphQL.
>
> **[3:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=231)** So in this case, because we don't have a database, we don't have anything right now, we're just going to create this function, which basically what you're looking at right now, is a resolver that will resolve a message which should be a strength.
>
> **[4:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=243)** So in this case, we're going to say, well, "Hi, I'm Manny!"
>
> **[4:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=248)** Like so.
>
> **[4:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=250)** So, once we call into this resolver, which is a type of query, we should get a response, "Hi, I'm Manny!"
>
> **[4:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=258)** Okay?
>
> **[4:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=259)** So now, we're going to basically define the GraphQL server.
>
> **[4:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=264)** So, let's use this endpoint.
>
> **[4:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=268)** So, we're going to use the endpoint GraphQL, which as you remember here, we should have an endpoint called GraphQL, so this is where we're going to define it, GraphQL.
>
> **[4:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=283)** And this endpoint will use the express-GraphQL package to create a GraphQL server, like so.
>
> **[4:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=295)** And we have a few things that we're going to define here.
>
> **[4:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=298)** So, what are we using is a schema that we just defined, so we need to import it here, import our schema from our data scheme, right?
>
> **[5:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=308)** So, it's auto completes for me.
>
> **[5:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=310)** So basically, what we're doing is we're importing the schema from the data folder and the schema, so basically what we exported here.
>
> **[5:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=319)** So, let's go ahead and import this here, and then we're going to use it here.
>
> **[5:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=323)** So, we're telling GraphQL, FYI, the schema that I'm expecting is from the schema here.
>
> **[5:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=333)** And you can also do something like this if you want to use the latest and greatest JavaScript.
>
> **[5:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=338)** But I like to be a bit more declarative, so you guys see the thinking here, but you can also do the shorter version.
>
> **[5:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=346)** So, the root value is going to be the root.
>
> **[5:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=351)** So basically, the resolver is this function here that will return the value.
>
> **[5:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=358)** And basically, we're going to use graphiql, which is basically a front end interface that the GraphQL team has built.
>
> **[6:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=368)** So, we can actually see when we make requests to the server as supposed to go through an endpoint, we're going to use graphiQL just to represent what we're working on right now.
>
> **[6:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=379)** Okay?
>
> **[6:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=380)** So, save all this, and now let's go into our terminal.
>
> **[6:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=387)** And I keep creating new terminals, I shouldn't do that.
>
> **[6:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=390)** Just bring the old terminal and do an npm start.
>
> **[6:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=397)** Everything is running.
>
> **[6:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=398)** So, we're going to go to this address on our browser, and you're going to see graphiQL as we do this window, paste that address, and we have GraphiQL here!
>
> **[6:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=412)** So basically, to show you that what we've built works, what we're going to need to do is basically run the query that we've created.
>
> **[7:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=423)** So, let's go ahead and erase all of this gibberish here.
>
> **[7:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=426)** And if you don't know what's available in your GraphQL server, there are docs here.
>
> **[7:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=432)** If you click on docs, you're going to see that right now, we have a root type of Query.
>
> **[7:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=438)** Okay, so what is that Query?
>
> **[7:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=440)** Click on here.
>
> **[7:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=441)** And you see the type that we've defined is of hello, and it's expecting as a response string.
>
> **[7:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=448)** So if a resolver is coded properly, it's going to return whatever our resolver is supposed to return.
>
> **[7:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=455)** So, the resolver, if it was connected to a database, it would return whatever is available from that specific resolver.
>
> **[7:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=462)** So, let's go ahead and do this, so query.
>
> **[7:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=467)** And if I just type hello like this, I don't need anything else because there's no input, there's nothing else that I could do on this specific query type.
>
> **[7:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=477)** And I run it, I have this message, "hello," "I'm Manny!"
>
> **[8:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=481)** That is resolved by the function that we wrote inside of our server.
>
> **[8:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=487)** So, you have coded your first GraphQL server!
>
> **[8:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=490)** Got it started and made your first query.
>
> **[8:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=493)** So, this is how you get started with GraphQL.
>
> **[8:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=497)** There's a lot more to it, and we'll explore this in the rest of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this, (5), function (5), case, (3), interface (1)
> **Code Identifiers:** buildschema (3), graphiql (2)
> **Definitions:** is a  (4)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** make (2), npm (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** http (1), fyi (1)
> **Tools:** terminal (2)

#### Basic GraphQL schema
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=0)** - [Instructor] To be able to make queries in GraphQL, you need to define a schema like we started working on here.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=7)** But this is basically a query.
>
> **[0:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=9)** The schema defines the query type and then also what it is expecting.
>
> **[0:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=15)** And then a resolver will actually resolve the results from each API endpoint.
>
> **[0:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=22)** So the type definition provides what type of data we expect and the resolvers gets the data for us.
>
> **[0:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=29)** So we'll get started by defining our product type for our application, and then resolve it with fake data for now.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=36)** So what I'm going to do is get back into the schema inside of our data folder.
>
> **[0:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=40)** So if you want to access this file, it's this one.
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=43)** And what I'm going to do first is define the product type.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=47)** So basically I am going to again use the keyword type and then define a product.
>
> **[0:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=55)** And then what I'm going to do is for that product, I'm going to define each keys and what we're expecting for that particular key.
>
> **[1:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=63)** So the first thing is an id, which will be provided by a database eventually, and we're expecting a type of ID.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=73)** And then I'm going to have a name which we're expecting it to be a String.
>
> **[1:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=80)** Same thing for description, a String.
>
> **[1:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=86)** We're going to expect a Float for the price.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=91)** And then we're going to have a key call soldout and it's going to be Boolean.
>
> **[1:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=97)** So let's say for example, we're making a mutation, which we'll get to down the road and we're adding a new product to the database and we're passing for the name a Boolean as opposed to a string.
>
> **[1:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=110)** The server would go back to the actual query and say, I cannot process this query because the name is not a Boolean, it is a string.
>
> **[2:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=121)** So this is why this is very useful because it's sanitizing the data before it's sent to the database and has a one point entry through GraphQL.
>
> **[2:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=132)** All right, so for the query, as opposed to say hello, we're going to basically have a query of product and it's expecting a product as a response.
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=143)** So once we make a query for the product, we're going to return a product, which is basically of this type.
>
> **[2:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=149)** Okay, so now we're done with the schema.
>
> **[2:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=152)** Let's go into our server and basically create a quick resolver that will generate fake data.
>
> **[2:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=158)** So this way we have something that we can resolve to in here.
>
> **[2:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=162)** So we'll introduce the resolvers and work with them in the future.
>
> **[2:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=166)** But right now let's write the function here that will return a product.
>
> **[2:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=170)** So I'm going to basically create the resolver product, and here I'm going to return a product as opposed to high and many, like so.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=186)** And it's going to be a number here for the id.
>
> **[3:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=193)** Then we're going to have a name, which should be a string, otherwise it's not going to work.
>
> **[3:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=199)** So I'm going to call this a widget, and then I'm going to have a description.
>
> **[3:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=205)** And then let's call this a Beautiful widget to use in the garden.
>
> **[3:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=216)** And then we're going to have a price and insert a float here.
>
> **[3:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=223)** And then we're going to have a Boolean for the soldout key, like so.
>
> **[3:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=230)** Okay, so now we have a resolver written.
>
> **[3:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=233)** Let's go back to GraphiQL And let's make sure first that our server is actually running.
>
> **[4:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=240)** So I'm going to do Control + Grave to see.
>
> **[4:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=242)** Yep, it's running.
>
> **[4:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=243)** It has refreshed automatically because of nodemon.
>
> **[4:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=247)** Then let's refresh this.
>
> **[4:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=249)** Clearly we have an error because the query hello doesn't work anymore.
>
> **[4:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=253)** And if you look into the documentation explorer here, if you click on query and you see product, it's expecting a product and therefore these elements here.
>
> **[4:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=263)** So what I'm going to do now, it's basically go and ask for a product inside of my query.
>
> **[4:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=273)** So let's go and change this to product.
>
> **[4:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=278)** And then for a product, we need to return these five things here.
>
> **[4:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=283)** So I'm going to, let's say I'm going to just ask for the name.
>
> **[4:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=287)** I'm not going to ask for the idea.
>
> **[4:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=289)** So you can be very surgical on what you're requesting GraphQL to return.
>
> **[4:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=294)** And this is the beauty of GraphQL.
>
> **[4:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=295)** Once you know exactly what you're asking for here, you can ask for as little as you want or as much as you want.
>
> **[5:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=303)** So we can ask for the description and I want to know the price, and that's it.
>
> **[5:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=308)** So let's say you just want that and you click run, it's going to go through your resolver and resolve the data that you asked.
>
> **[5:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=317)** The resolver later will actually connect to the database and will query the database and then return whatever data that you want here.
>
> **[5:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=326)** So as you can see, it's pretty straightforward to build your schema and then run queries only on what you need.
>
> **[5:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=332)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), type. (2), function (1), this. (1), return. (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)


### 2. Types and Schemas

> [↑ Back to Table of Contents](#table-of-contents)

#### Object types and fields
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=0)** - [Instructor] If you're familiar with type checking with libraries like TypeScript or Flow, exploring types in GraphQL will be familiar to you.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=8)** Everything in GraphQL is defined by types as we've done already in our schema.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=13)** So let's open the schema again, and let's explore a few things and then we'll add new code.
>
> **[0:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=19)** So basically, when you are defining a type, you are defining the shape of how this data will be and what type of data it expects.
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=28)** For example, in your current type, Product, we are expecting the data to contain an ID, name, description, et cetera.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=36)** So this is your object type for the Product.
>
> **[0:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=40)** Like any JavaScript object inside of it, we have the fields, and then declare what type of data we expect for this field.
>
> **[0:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=48)** For example, name is a field and we expect a string for that field.
>
> **[0:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=53)** This field could be a string, an array of another type, et cetera.
>
> **[0:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=58)** We'll go through every option possible as we go through this course.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=62)** So let's push this a bit further by adding an array of stores to our Product.
>
> **[1:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=67)** So what we're going to do first is go and add inside of our type for Product a store.
>
> **[1:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=75)** So let's go ahead and add stores, and this could be an array like so.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=84)** And on this one, I'm going to put an exclamation point here.
>
> **[1:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=87)** What does that mean, is that this array cannot be empty.
>
> **[1:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=92)** So therefore, we need to have a store absolutely with a product, otherwise, we won't be able to send the information to the database or whatever is connected to this type of Product.
>
> **[1:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=105)** So that's how it would work for that.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=107)** And then what we need to do is also define, well, the type Store.
>
> **[1:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=112)** So let's go ahead and do that, we're going to define Store.
>
> **[1:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=118)** And for that one, we'll have a store, and then expect a string.
>
> **[2:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=125)** So therefore, each store will have a string like so.
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=131)** So now that we've done this, let's make sure that we are going into a server and that our resolver is actually updated to handle this.
>
> **[2:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=139)** So what I'm going to do here is add in the resolver of stores, and then this one's going to be an array like so.
>
> **[2:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=151)** And then for each array, I'm going to have a store, and then I would say, let's say Pasadena.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=159)** And then another one, it would be a store, Los Angeles, like so.
>
> **[2:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=170)** Okay, so our resolver is done, our server is running properly.
>
> **[2:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=175)** I just did a shortcut to open it up, and then I'm going to go inside of GraphiQL, just do a quick refresh.
>
> **[3:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=183)** And then, let's go ahead and do the same query, but this time I'm going to add stores like so.
>
> **[3:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=192)** And then I do this, it's going to basically name me the store here.
>
> **[3:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=198)** So what it was asking basically here that I didn't enter is what I'm asking for the store.
>
> **[3:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=205)** So you need to ask for something, so in this case, I have store as an entry value, so I need to run that, and then I would get the list of stores for this particular store.
>
> **[3:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=217)** So as we explore GraphQL, you'll learn about many of the types, and we'll go through each of them.
>
> **[3:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=222)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type, (3), this, (2), this. (1), case, (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Query and mutation types
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=0)** - [Instructor] Queries and mutations are the basis of running operations in a GraphQL environment.
>
> **[0:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=6)** And we'll explore each type.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=8)** First you have queries, which we already coded one for a product type right here.
>
> **[0:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=14)** And if you look into the schema, you can find it right here.
>
> **[0:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=20)** The query type is responsible for defining what will return when we make the query.
>
> **[0:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=25)** In this case, we are querying a product type and therefore when we run the query, it will return a product or multiple products based on the query.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=36)** Next, we have mutations, which is basically GraphQL's way of changing data, updating, or creating new data.
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=43)** So let's add a mutation type to our project.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=47)** So the very first thing that I'm going to do is go back to the index and I'm going to create an in-memory database here.
>
> **[0:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=55)** And then we're going to use it, create a class, and then create new products just as an object inside of our application.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=62)** So let's go ahead and do that first.
>
> **[1:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=64)** Okay, so what I'm going to do is just before the const root I'm going to create a class of Product and this will be constructor, which will take an id and then name, description, price, soldout, and then stores.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=95)** And then inside of the constructor, I'm going to basically this.id, I'm going to initialize all these different keys here.
>
> **[1:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=103)** And just copy and paste.
>
> **[1:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=105)** (keyboard clicks) And I'm going to do this for every single one of them, so id, name, description, price, soldout, and stores.
>
> **[2:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=120)** Then I'm going to change it, I'm going to use the Option + click inside of VS Code.
>
> **[2:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=125)** And this is the name, Option + click, description, price, soldout,
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=143)** and stores like so.
>
> **[2:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=146)** Okay, so I have my class declared and then I'm going to create my in-memory object that will hold my products that I'm going to create.
>
> **[2:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=161)** We'll initialize databases later on in this course but for the time being, just for the example, I'm going to create an object here that will hold all the new products that we'll create.
>
> **[2:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=172)** And then here in our resolver, I'm going to basically create a new product here.
>
> **[3:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=181)** So I'm going to then create a product.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=186)** So I'm creating a new resolver for our product.
>
> **[3:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=196)** (keyboard clicks) let id, require, we're going to use crypto to create an id, crypto.
>
> **[3:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=215)** And we're going to create with the id, leveraging random bytes.
>
> **[3:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=223)** And we're going to create 10 characters, toString,
>
> **[3:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=231)** and use hex, like so.
>
> **[3:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=233)** So basically we're creating an id here that we're going to leverage.
>
> **[4:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=242)** And let's make sure we do this inside of here.
>
> **[4:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=250)** Let me just cut this here.
>
> **[4:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=256)** There you go.
>
> **[4:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=257)** And then paste this here.
>
> **[4:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=261)** There you go, so you want to make sure that you're inside of this and then create your function, or your resolver right here, like so.
>
> **[4:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=273)** Okay, so let's continue.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=275)** We're going to add this to the product database.
>
> **[4:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=281)** Equals the input and return new Product
>
> **[4:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=290)** with the id and the input, like so.
>
> **[4:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=293)** So basically we're creating a mini resolver leveraging the database or the object that we've created here.
>
> **[5:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=301)** And that's how we're going to basically run this little function for now.
>
> **[5:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=307)** Say this, let's make sure that our schema is updated to handle that input, very important.
>
> **[5:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=315)** So now that we have our query here, now we also need to create our type for the store input.
>
> **[5:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=323)** So StoreInput like so, which basically takes a store
>
> **[5:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=333)** for string 'cause we're going to need to create a new product, but we'll also need to have the input for the store, like we had the store here inside of our queries.
>
> **[5:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=344)** So that's very important.
>
> **[5:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=346)** So now that we have our type for the store input, we need to create the product input as well.
>
> **[5:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=353)** So all of these are elements that you need to create for the mutations.
>
> **[5:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=357)** So basically what we're going to do is basically copy and paste everything that we have in here.
>
> **[6:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=363)** Copy and paste right here, like so.
>
> **[6:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=368)** The big difference here is that it's not a store, but a StoreInput that we're taking in here.
>
> **[6:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=374)** Everything else should be the same here.
>
> **[6:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=377)** And then we need to create the mutation, so type mutation with a capital M like we did for query here.
>
> **[6:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=389)** And then we need to create products, so we're leveraging the resolver, createProduct, which takes an input.
>
> **[6:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=398)** And if you go back here, the resolver is actually taking an input here, like so.
>
> **[6:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=407)** And these inputs should be of type ProductInput.
>
> **[6:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=411)** Therefore they should have all these things including absolutely needs to have a StoreInput, it's mandatory.
>
> **[7:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=420)** And then once the mutation is done, it needs to return something which is the Product, like so.
>
> **[7:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=427)** Okay, so now this is all done, let's make sure our server is running.
>
> **[7:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=435)** npm start, and it's running without any issues.
>
> **[7:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=443)** Okay, so let's close the terminal, everything is working properly.
>
> **[7:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=447)** And if we go back to all this, as you can see, we have the input here for the StoreInput, which stores are taking as an input.
>
> **[7:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=455)** And then we have the ProductInput, which is used in our resolver here, where we actually use the input: ProductInput inside of this createProduct.
>
> **[7:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=465)** And then it returns the product once we're done with the mutation.
>
> **[7:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=469)** Okay, so now that we've created our first mutation, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (2), this, (2), type. (1), case, (1)
> **CLI Commands:** make (5), find (1), npm (1)
> **Code Identifiers:** createproduct (2), tostring (1)
> **Cross-References:** go back to (2)
> **Tools:** vs code (1), terminal (1)
> **Speakers:** - [instructor] (1)

#### What is the resolver and its role?
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=0)** - [Instructor] So you have heard me talking about resolvers and seen to so far by way of the queries and mutations.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=7)** Basically resolvers are the functions that respond to queries and mutations.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=12)** They are the function that gives us the result of the query.
>
> **[0:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=15)** And because the standard approach is to leave the schema only for type definition, we create those functions separate from the schema.
>
> **[0:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=23)** You can either have them in a separate file and then import them into your main server file, or have them into your main entry server file, in this case, our index.js, like I've done here.
>
> **[0:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=34)** So we use the second method thus far.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=36)** So let's extract the resolve resolvers into their own file and go through the ones we have so far.
>
> **[0:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=42)** So what I'm going to do now is go inside of my data folder and create the resolvers right here, not here, but in the data one.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=51)** Resolvers.js, like so.
>
> **[0:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=55)** And then what I'm going to do is basically grab everything from those resolvers here, to the class Product, cut it from the index file, let me just close the Explorer here, save that for now.
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=70)** It's going to break the application for now, but we'll fix whatever we need to fix here after.
>
> **[1:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=75)** And then I'm going to paste all this inside my resolvers file, right here.
>
> **[1:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=79)** So what I need first is the class product.
>
> **[1:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=82)** I still need the class product here, so I'm going to keep all of this my constructor, I'm basically setting up my product class here.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=91)** And then we're going to leave my in-memory product database here.
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=94)** So the object that I created to add new products, and then this is where it's going to change a bit.
>
> **[1:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=100)** So the first thing I'm going to do is create a variable that will be called resolvers.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=107)** And then what I'm going to do is create a first resolver that will be used to get a single product.
>
> **[1:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=115)** So getProduct, like so, and then it needs an ID to actually get a product, like so.
>
> **[2:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=125)** And then what I need to do is return a new product.
>
> **[2:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=132)** And it needs the ID to return that product.
>
> **[2:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=135)** And we're going to go basically inside the product database and find that single product with the ID.
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=143)** So this is what it does here.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=145)** Then I'm going to create my second resolver, which is based on this guy here.
>
> **[2:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=150)** So I'm going to literally just cut that out here, and paste it right there, like so.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=159)** So that doesn't change.
>
> **[2:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=160)** Then we can delete the root here, like so.
>
> **[2:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=168)** And then we're going to export default resolvers, like so.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=177)** Okay, so now I got my resolvers file completed.
>
> **[3:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=181)** The next thing we need to do, as you can imagine, because we changed one of our queries here, the getProduct, we need to change that in the schema too.
>
> **[3:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=189)** So let's go into our schema, right here, just going to close this.
>
> **[3:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=197)** And then what I'm going to do in my query, right here, I'm going to change all this to getProduct, which takes an ID, and then it returns a product.
>
> **[3:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=213)** Okay, so we don't need to change anything in the schema.
>
> **[3:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=216)** The last thing we need to do is import our resolvers inside of our server file, because right now, we are basically using the root here, but we're not using anything.
>
> **[3:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=228)** So we need to import the resolvers first, 'cause as you recall, the root was part of the resolvers function that we had earlier.
>
> **[3:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=239)** So now we need to reimport the resolvers here, like so, then we need to create a variable called root, and pass the resolvers to it.
>
> **[4:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=251)** And now the root will be used right here.
>
> **[4:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=254)** So we should be all good to go.
>
> **[4:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=256)** Now let's save this.
>
> **[4:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=258)** Let's open our server.
>
> **[4:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=261)** Our server should be running properly here.
>
> **[4:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=263)** And if you're not sure, let's just do RS.
>
> **[4:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=267)** And there you go, everything is good.
>
> **[4:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=268)** Now we can go and test this inside of GraphiQL.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=275)** Okay, so now we're back into GraphiQL, and as we can see there is an issue.
>
> **[4:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=282)** So first of all, the documentation is not showing anything, so that's already a sign that something is wrong.
>
> **[4:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=287)** But as I can see here, it says here, "Errors, "the type of mutation, createProduct input, "must be input type, but got ProductInput."
>
> **[4:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=296)** Alright, so let's take a look at what's happening here.
>
> **[4:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=299)** First of all, if we look at the server, the server doesn't show that there's any issues.
>
> **[5:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=304)** But there's clearly an issue.
>
> **[5:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=305)** Well, first of all, I see it right here.
>
> **[5:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=307)** There's an issue here, this is not creat, but createProduct.
>
> **[5:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=313)** So we need to kind of change that, but that was not the error that I was seeing.
>
> **[5:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=318)** So let's go here in the schema.
>
> **[5:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=320)** And what happens here is that a mutation should be of input and not of type here, because type is for query.
>
> **[5:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=329)** So that was my mistake.
>
> **[5:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=330)** So we need to change that to input right here.
>
> **[5:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=333)** I like to go through these exercise with you guys where we debug stuff so you can see the kinds of errors that could happen and sometimes be able to debug them.
>
> **[5:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=343)** Because a lot of times we debug stuff as developers, and I like to have these experiences with you.
>
> **[5:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=350)** All right, so let's save that.
>
> **[5:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=351)** That should fix what we need to fix.
>
> **[5:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=353)** Let's just again, reload this.
>
> **[5:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=357)** I'm going to go and do this and reload.
>
> **[6:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=366)** And I believe this, the same thing is for the StoreInput, too.
>
> **[6:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=371)** So we need to change that, too.
>
> **[6:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=374)** Okay, so now that should fix everything that we need to fix.
>
> **[6:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=377)** Let's go back here, refresh this.
>
> **[6:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=380)** There you go.
>
> **[6:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=381)** Alright, the documentation's back, that's a good sign.
>
> **[6:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=384)** So if we take a look at the mutations right now, what we see is that we have a createProduct and it takes an input, a product input, and then this input takes all these things.
>
> **[6:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=394)** So what I'm going to do now is actually create a product.
>
> **[6:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=397)** So what I'm going to do is go into my Mutation and then createProduct.
>
> **[6:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=403)** As you can see, it's already working and it takes an input.
>
> **[6:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=408)** And this input takes several things.
>
> **[6:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=410)** So first of all, it takes a name.
>
> **[6:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=412)** So we could call this a widget, like so.
>
> **[6:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=417)** Then it takes a description, and then that description could be, "another widget for your garden."
>
> **[7:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=431)** Then it needs to have a price, so let's do 23.99, and then let's go ahead and do soldout, which takes a boolean, so let's say false.
>
> **[7:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=446)** And then finally you absolutely need to put it in certain stores, right?
>
> **[7:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=452)** And the stores are an array of stores.
>
> **[7:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=454)** So then we need to create a store, which will be, again, I'll go with what I've used before, Pasadena, with the capital P, and then we need to create another store.
>
> **[7:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=468)** And we're going to put this one also in LA, like we've done before, Los Angeles, like so, okay?
>
> **[7:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=479)** So we got everything that we need.
>
> **[8:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=481)** Now what we need is to return something.
>
> **[8:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=485)** So I'd like to return the price, and the name, and the description for what I'm going to create.
>
> **[8:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=497)** So as you do the execute query, I've created a product, and I have a price, I have a name, and I have a description.
>
> **[8:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=508)** So let me create another one, but this time I'm going to get the ID so I can get the ID after.
>
> **[8:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=513)** And I'm just going to change this to Widget 23.
>
> **[8:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=518)** Just change a few things, let's say 40.99, and this one is in Thousand Oaks.
>
> **[8:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=528)** And let's go ahead and do this.
>
> **[8:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=529)** And now I got an ID.
>
> **[8:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=532)** Let's copy the ID and let's go back into our documentation and let's go into the queries.
>
> **[8:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=538)** Now I can get a product with this ID.
>
> **[9:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=541)** So let me go ahead and do that.
>
> **[9:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=543)** So now, going to do a query, and this is called getProduct.
>
> **[9:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=550)** I need to have an ID, so I'm going to pass that ID, and then I'm going to get, let's say the price, and the name, and the description.
>
> **[9:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=562)** Now by running this query that we just created, I'm running this query, and now I got the name Widget 23, the price 40.99, and the description, "another widget for your garden."
>
> **[9:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=574)** So now we've got a solid base for a GraphiQL server.
>
> **[9:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=578)** So let's continue exploring other types, GraphiQL uses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), this. (5), function (2), pass (2), case, (1)
> **Code Identifiers:** getproduct (4), createproduct (4)
> **Versions:** 40.99 (2), 23.99 (1)
> **File Paths:** index.js (1), resolvers.js (1)
> **Documentation:** the documentation (2)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)

#### Scalar types
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=0)** - [Instructor] Scala types are the basic types that come with GraphQL and can be used without having to create the type beforehand.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=8)** So with GraphQL, we have access to these basic Scala types.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=12)** We have int for integers, your regular number.
>
> **[0:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=16)** We have float, a float number, which basically includes a decimal point.
>
> **[0:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=21)** So for example, we are using it right here.
>
> **[0:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=25)** We have string, which we've been using everywhere.
>
> **[0:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=29)** So this is basically for any list of characters that we've used thus far.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=33)** An ID right here, which is basically a unique identifier for each entry in GraphQL.
>
> **[0:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=40)** And finally we have Boolean, which has a value of true or false.
>
> **[0:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=45)** So for each field we enter into our type, like our product type, we need to define what Scala type it takes.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=51)** So let's add a new field with the different Scala types for our schema.
>
> **[0:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=56)** So right now, we're not using integers, so let's go ahead and do that.
>
> **[1:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=60)** So what I'm going to do is introduce inside of my type product here an inventory key, which I'm going to pass an integer type.
>
> **[1:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=71)** And we're going to do this also for the product input.
>
> **[1:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=75)** So I'm going to add it here like so, and add the integer.
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=81)** And then finally, I'm going to also pass this to the resolvers.
>
> **[1:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=88)** And I'm going to do this inventory equals inventory.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=95)** I'm going to make sure I pass it in my constructor above here, inventory, like so, and then I should be able to use it.
>
> **[1:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=104)** So make sure everything is running properly here.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=107)** So I just brought my terminal.
>
> **[1:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=109)** You can do this by clicking here or using the shortcuts of your editor.
>
> **[1:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=114)** I'm going to again do a refresh.
>
> **[1:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=118)** And now inside of my mutation, I'm going to add inventory like so.
>
> **[2:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=126)** And I'm going to say there's 10 of those, like so.
>
> **[2:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=130)** Perfect.
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=131)** So now I'm going to create a widget number 54, change the price a bit, $52, and then maybe change the city here to Orlando.
>
> **[2:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=148)** Okay, so now let's create that new object.
>
> **[2:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=151)** It has created that new object with an ID.
>
> **[2:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=154)** And now I'm going to query that specific ID.
>
> **[2:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=158)** And by the way, if you're not familiar with history, basically that button brings all the queries that you've made through the life of this particular GraphQL server.
>
> **[2:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=168)** So if you want to bring up a previous query, you can actually do that this way and then paste, let's say, for example, the ID that we're trying to look for.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=177)** I'm just going to close the documentation here.
>
> **[3:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=180)** And now I would like to know the inventory too, so I can actually add inventory here, run this, and now I know that widget 54 is at $52.99 and it has 10 in the inventory.
>
> **[3:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=195)** So basically when you create your types, you can essentially use any of these for your fields.
>
> **[3:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=201)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), type, (2), type. (1), finally, (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Versions:** 52.99 (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Enumeration types
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=0)** - [Instructor] Enumeration type, or commonly called enums, is a special Scala type that allows you to define a specific set of data the field takes and restrict the input to what you list in the enum type.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=13)** So let me demonstrate so we can make better sense of this type.
>
> **[0:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=16)** So let's go back to our schema.
>
> **[0:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=18)** And what I'm going to do first is create the enum type.
>
> **[0:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=22)** So what I'm going to do just below here, I'm going to create an enum and I'm going to call this one Soldout.
>
> **[0:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=31)** And basically what this takes is either two values, one is SOLDOUT or ONSALE.
>
> **[0:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=41)** And what basically that says is that for the soldout here as opposed to using a Boolean, what I'm going to do is use the enum type call Soldout, like so.
>
> **[0:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=53)** So basically what I'm doing here for soldout key, I can only list or take these two values.
>
> **[0:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=59)** And I'm going to do this also for the input right here, Soldout, like so.
>
> **[1:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=69)** And that's basically how it works.
>
> **[1:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=71)** So now what I'm going to do is go back to GraphQL and let's go ahead and test this.
>
> **[1:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=80)** So let's say we want to create a new product.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=84)** Let's go into the history and use a previous create product here and change a few things.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=91)** So let's say Widget 99, and then let's change the price to $12.99 and let's keep it at false, let's just keep it the old way, and then we'll return all these things, run the query, and now I got an error message.
>
> **[1:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=111)** Enum Soldout cannot represent non-value false.
>
> **[1:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=114)** So, okay, so let's use what we just said earlier.
>
> **[1:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=118)** Let's do ONSALE as opposed to a Boolean.
>
> **[2:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=121)** And we absolutely need to refresh the server in order for this to work, but let's run it.
>
> **[2:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=128)** And now it's worked.
>
> **[2:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=129)** Now it's going to give me an error message because I haven't refreshed my server yet, because previously it would take a false or a true value, but now it's actually taking an enum.
>
> **[2:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=140)** So it gives me an error, but actually it's working because I actually created a product here.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=145)** Now if I do this again and I will say SOLDOUT and create a brand new product, so I'm going to call this product 34, change the price so I can have something that I know, and now what I'm going to do is also list soldout and run this query.
>
> **[2:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=168)** And as you can see, it says SOLDOUT as I've actually name it as SOLDOUT.
>
> **[2:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=175)** So whenever you need to restrict the type of data the field takes, enums are a great way to do it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), enum (6), type. (3), type, (1), this. (1)
> **Env Vars:** soldout (4), onsale (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Versions:** 12.99 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### List of types inside another
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=0)** - [Instructor] In many cases, you will need to have inside of a field multiple values.
>
> **[0:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=5)** For example, a list of episodes characters featured in a television show.
>
> **[0:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=10)** This is where you can create a type for your list and use an array to signify a list of items inside of the field.
>
> **[0:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=17)** In our case, we already created it for the stores.
>
> **[0:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=21)** So if you look back at the schema here, you see that we have stores as one of the elements that is taken inside of our type product.
>
> **[0:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=29)** And then you see this array here of store.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=33)** So this is basically how it works.
>
> **[0:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=35)** So if you go into the type here, you define what this particular type takes first.
>
> **[0:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=42)** So it could take more than one, not just string.
>
> **[0:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=44)** It could take an actual idea for the store, it could take an address, it could take a whole bunch of things.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=51)** And then you actually go inside of the product ID and then have a list like so.
>
> **[0:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=57)** And if you don't remember, the exclamation point makes it mandatory to have an element here.
>
> **[1:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=63)** So if you don't enter any stores for that product, it's not going to work when you actually do the input or when you actually list the stores.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=73)** So as you can see, this is very useful to create sub lists of items for your type.
>
> **[1:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=77)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), type. (1), let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up Persistence

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing MongoDB for GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=0)** - [Instructor] Right now, our data is only saved in memory.
>
> **[0:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=3)** And when we stop the server, we lose any data persistence.
>
> **[0:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=6)** With our GraphQL server up and running and now with some knowledge about how it works, let's add data persistence with MongoDB.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=13)** So the first thing you need to do is, install MongoDB.
>
> **[0:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=16)** And the fastest way to the actual instructions is usually to do MongoDB install and the operating system you're on.
>
> **[0:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=24)** So let's say for example, you're on a Mac, you would do this, and then you would go to install MongoDB Community Edition, which is the free version.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=33)** And then on this same page, you have all the instructions for the different operating systems.
>
> **[0:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=38)** So install on Linux, install on Windows, install with Docker if you want to do with Docker.
>
> **[0:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=45)** So what you need to do is, follow these instructions.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=47)** They're very well explained, so I'm not going to go through them in this video, but I want to make sure that once you have all of this installed, you can do a check to make sure that your MongoDB service is running.
>
> **[0:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=58)** So follow again, the instructions for your specific operating system.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=62)** And once you're done with that, I would recommend that you install a tool that will allow you to actually check if you have the MongoDB service open and running.
>
> **[1:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=74)** So this is the application that I use to check if MongoDB is working and also sometimes I use it to make transactions with the database directly.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=84)** It's called Robo 3T, and it looks something like this.
>
> **[1:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=88)** What you need to do once you have it open, you need to basically create a connection to MongoDB, which uses the local host and the port 27017.
>
> **[1:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=98)** So the way you actually connect it is to, let's just go ahead and edit.
>
> **[1:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=106)** All you need to do is, basically put the local host and that address, save it, and then connect to it.
>
> **[1:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=113)** If you're able to connect to it and you see all the databases that you created through your applications, you can see all the stuff that I've created here, then you're good to go.
>
> **[2:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=123)** Now, the next thing that we need to install directly on the application is Mongoose.
>
> **[2:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=129)** So what we're going to do, we're going to close our server.
>
> **[2:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=132)** So I'm going to open up a new terminal by clicking new terminal, new terminal, and I have this running here.
>
> **[2:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=140)** So what I'm going to do is, close the terminal here, or turn off the server by doing control C.
>
> **[2:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=148)** And then what I'm going to do is, do an mpm i and install Mongoose, and we're going to use Mongoose to make the connection to the database with MongoDB and then connect with our GraphQL server.
>
> **[2:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=162)** So let's go ahead and install Mongoose.
>
> **[2:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=170)** And I have a little issue here.
>
> **[2:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=172)** So what I'm going to do is mpm install Mongoose, and I'm going to force it.
>
> **[2:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=175)** This is something local that I have experienced in the past, so I need to force it.
>
> **[3:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=181)** But it's still going to install it, so I'm going to be good on my end.
>
> **[3:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=184)** You won't need to do that, it's just on my end.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=186)** So now, here what I have is, Mongoose install in my dependencies.
>
> **[3:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=193)** So we're good to go.
>
> **[3:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=194)** We have Mongoose install, you should have MongoDB running, have been able to check it through Robo T or any connections, you can actually run the service and check it as well.
>
> **[3:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=204)** If you're running into any issues with the installation of MongoDB, please make sure to refer back to the documentation on the MongoDB website I showed you earlier, and you should be eventually good to go.

> [!info]- Semantic Content
>
> **Prerequisites:** install (14)
> **CLI Commands:** make (5), docker (2)
> **Code Keywords:** let (4), this, (1), this. (1)
> **Tools:** terminal (4)
> **Ports:** port 27017 (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### Finalize the database connectors
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=0)** - [Instructor] Now that we have the necessary items to connect to a Mongo database, let's finalize our server to properly connect to the database.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=8)** So what we're going to do is go inside of our data folder here and create a new file that we'll call dbConnectors.
>
> **[0:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=16)** So this is where we're going to connect all over databases to our GraphQL server.
>
> **[0:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=21)** So let's go ahead and create a new file in the data folder though, and call this dbConnectors like so .js.
>
> **[0:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=34)** And then what we're going to do is let's go ahead and import mongoose like so.
>
> **[0:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=41)** And let me just close this to have more screen estate.
>
> **[0:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=44)** And what I'm going to do is create an async function to connect to MongoDB.
>
> **[0:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=49)** So let's go ahead and do that async function, and we're going to call this connectMongo, and we're going to try to connect to MongoDB.
>
> **[1:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=64)** So what we'll do is await our connection to mongoose, and we're going to use the mongodb at a local host like we checked earlier,
>
> **[1:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=82)** and we're going to create a widgets database.
>
> **[1:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=88)** And then we're going to console log if there's a connection to MongoDB.
>
> **[1:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=93)** So we can check we successfully connected to MongoDB like so.
>
> **[1:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=103)** All right, so if there's an error, catch the error and console.log the error.
>
> **[1:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=112)** So this way, if there's any issues with the connection, although we checked it in the previous video, if there's an error, at least we'll know in the console log.
>
> **[2:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=124)** And the proper practices after a while, is once you have all of this running and you're sure that everything is good, you want to avoid doing too many console logs because this information is actually showing up on the server, okay?
>
> **[2:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=141)** And then we're going to use that function connectMongo, boom.
>
> **[2:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=147)** Okay, so then what we're going to do is create a mongoose.Schema so we know exactly what we expect from the MongoDB server.
>
> **[2:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=155)** So I'm going to create a widget schema, and this is going to be a new mongoose.Schema like so.
>
> **[2:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=169)** And this is going to be my schema here.
>
> **[2:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=172)** So first of all, as we've defined before, we expect a name for string.
>
> **[2:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=179)** We expect a description, which will be also a string, and we need to put comma after here, like so.
>
> **[3:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=191)** We also expect a price, which will be a number.
>
> **[3:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=196)** And again, just to make sure it's defined as a number in a mongoose.Schema and not as a float or an integer, like we've defined it in GraphQL.
>
> **[3:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=204)** So just to make sure that there's no confusion here.
>
> **[3:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=208)** Soldout will be expected to be a string, even though we defined it as an enum in the GraphQL server.
>
> **[3:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=215)** It's still a string at the end of the day.
>
> **[3:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=218)** Inventory also a string.
>
> **[3:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=221)** And then finally stores, we expect an array.
>
> **[3:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=227)** Okay, perfect.
>
> **[3:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=228)** So we have our mongoose.Schema defined.
>
> **[3:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=231)** Now we need to apply that schema to the widgets connection or the widgets database that we have on MongoDB.
>
> **[4:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=240)** So we're going to do that now, and we're going to create a widgets variable, which will hold the model that we just defined with our schema, and we'll apply it to our widgets database like so, and past the widget schema like so, okay?
>
> **[4:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=264)** So the next thing we need to do, we need to be able to export this so we can use it afterwards in our resolvers.
>
> **[4:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=271)** And I'm not going to export a default, I'm going to export widgets specifically because after that we're going to actually create the SQL or SQLite, a database connection down the road, and we're going to export that as well.
>
> **[4:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=288)** So we're going to use it in our resolvers.
>
> **[4:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=290)** So I'm just going to save this as is for now, and make sure that our server runs properly with what we just did.
>
> **[4:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=297)** And everything is good to go, so we can move forward to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), async (2), await (1), while, (1)
> **CLI Commands:** make (3), mongo (1)
> **Code Identifiers:** dbconnectors (2), connectmongo (2)
> **Cross-References:** previous video (1), next video (1)
> **Env Vars:** sql (1)
> **Best Practices:** avoid doing (1)
> **Speakers:** - [instructor] (1)

#### Update resolvers for MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=0)** - [Instructor] Let's quickly update our initial resolvers just to make sure that we can actually use the DB connectors that we just created.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=8)** So let's go ahead and go into the resolvers here.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=12)** I'm going to close exploration for now, and what I'm going to do is simply update the getProduct here.
>
> **[0:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=18)** And then what we'll do is createProduct, we'll update this one later on.
>
> **[0:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=22)** So what I'm going to do for now, I'm just going to comment this code here and I'm going to update the getProduct.
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=28)** So what I'm going to do is turn this into an async function two.
>
> **[0:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=33)** So I'll literally rewrite the whole thing just to make sure that I'm not making any mistakes here, and I will basically do it this way.
>
> **[0:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=41)** Okay, so first let's make this async.
>
> **[0:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=45)** And I'm going to pass an ID like I was doing before.
>
> **[0:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=50)** And let's turn this into a function.
>
> **[0:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=53)** I'm going to put the comma here, so don't get the errors.
>
> **[0:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=56)** And basically what we're going to do is try to connect and find inside of the database through our connection to Mongoose to find a product and we'll do await and let's change a few things here.
>
> **[1:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=71)** So what we need to do first is remove this here and then we can remove the class product.
>
> **[1:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=78)** We don't need it anymore.
>
> **[1:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=79)** And I'm going to import Widgets from RDB connectors.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=91)** Like so.
>
> **[1:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=92)** So this way we're leveraging the schema and everything that we've built inside of our connectors and basically use that here.
>
> **[1:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=99)** So now we can use Widgets like so, .findbyId and then pass the id.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=107)** So with that, we'll be able to find a product and then return the product.
>
> **[1:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=115)** If not, catch the error and throw new Error, like so.
>
> **[2:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=129)** Okay, so what we're doing here is leveraging the database connection that we created, plus the schema plus everything that Mongoose has set up here, which is the Widgets.
>
> **[2:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=139)** And then what we're going to do is try to connect through our resolver.
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=143)** Again, the resolver is the function that returns from the database what we need.
>
> **[2:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=149)** So in this case, getProduct will return a single product.
>
> **[2:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=153)** So we need to pass an ID, and then we're going to try to connect to our widgets connection and find by ID a single item and then return that single item.
>
> **[2:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=165)** And if it doesn't work, then throw an error.
>
> **[2:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=167)** So let's go ahead and save that.
>
> **[2:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=170)** And we're going to make sure that our server is running and it says connected to MongoDB, too.
>
> **[2:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=175)** So that means that we're successfully connected to MongoDB, everything is running as it should.
>
> **[3:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=181)** So let's go ahead and open up a new window and go to localhost:8080, and GraphQL.
>
> **[3:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=193)** And the docs are running properly.
>
> **[3:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=195)** That means that everything is running properly.
>
> **[3:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=198)** So now what we're going to do is try to find an ID through Robo 3T.
>
> **[3:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=203)** So what I'm going to do is go through our Robo 3T connection here, going to connect through Robo 3T, and I'm going to go in my widgets database, going to collections.
>
> **[3:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=213)** And this is a good exercise for you to see, just to make sure that sometimes you may need to go directly into the database to figure things out.
>
> **[3:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=222)** And I have several IDs here.
>
> **[3:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=224)** So I have several objects that I can use with an ID.
>
> **[3:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=226)** So let's go and get this ID here So what it could do is copy that particular widget.
>
> **[3:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=234)** So I'm going to go into a different mode, in a documents mode so I can actually copy this here.
>
> **[4:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=241)** And FYI, what I've clicked is on this document mode here, so I can actually copy things.
>
> **[4:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=247)** You have different modes here, like so.
>
> **[4:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=249)** You can play with this and basically look through your data inside of your database connection.
>
> **[4:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=256)** So I just copied a specific Id.
>
> **[4:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=258)** So I'm going to go back to GraphQL and I'm going to go into the history, or actually no, I'm going to actually do a query directly.
>
> **[4:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=266)** I'm going to do a query and get a single product, which in this case takes an ID.
>
> **[4:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=274)** And I'm going to pass that ID like I did before.
>
> **[4:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=276)** Whoops, I don't think it worked when I copied.
>
> **[4:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=281)** So let's go back here, copy.
>
> **[4:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=286)** Let's go back here.
>
> **[4:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=287)** Paste, perfect.
>
> **[4:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=289)** And now what do I want?
>
> **[4:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=291)** I'd like to get a name.
>
> **[4:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=293)** I'd like to get the soldout, and I'd like to get a description.
>
> **[4:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=299)** So what I've done now is through MongoDB, we'll be able to now have persistence, but also be able to query it from GraphQL.
>
> **[5:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=309)** So what I'm doing is here, I run this query and now I have the product, which is a name of Widget2, which soldout says it's ONSALE, and the description, another widget for your garden.
>
> **[5:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=321)** So if I want to know the inventory just to make sure I have enough to sell, I can run the same thing.
>
> **[5:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=328)** And on this particular item, I didn't have the inventory way back.
>
> **[5:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=332)** So if I go back into MongoDB and I scroll through all these different items that I have on the database, I will find one that has inventory.
>
> **[5:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=343)** If I could scroll down, which one had the inventory?
>
> **[5:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=347)** Well, none of these on this particular one, I just remembered that these were run before I added the inventory and they were in the non-persistent database that we had before.
>
> **[5:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=357)** So I'm not going to be able to have the inventory on this one, so we're good to go.
>
> **[6:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=362)** So this is why I always have Robo 3T in the background just to make sure that I'm not missing anything.
>
> **[6:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=366)** But in this case, the inventory is not available.
>
> **[6:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=369)** We can throw a mutation when we have MongoDB connected, and actually at that point we'll have the inventory.
>
> **[6:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=376)** So let's go ahead and move on to connect SQLize in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (4), function (3), throw (3), async (2)
> **CLI Commands:** make (7), find (6)
> **Code Identifiers:** getproduct (3), createproduct (1), findbyid (1)
> **Definitions:** means that (2), is a  (2)
> **Env Vars:** rdb (1), fyi (1), onsale (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)

#### Data persistence with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=0)** - [Instructor] Adding any other databases to GraphQL is a similar process, and I wanted to give you a quick example with SQLite.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=8)** Needless to say, you would have to update your resolvers and schema to support this new database and data, but for the sake of focusing on MongoDB I'll quickly provide an example for SQL.
>
> **[0:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=18)** Then the process of creating a function that resolves this particular data is similar to what we've done.
>
> **[0:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=24)** So, let me go ahead and show you how it's done.
>
> **[0:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=26)** So, I'm going to go first into my server here, and I'm going to stop it with Control + C.
>
> **[0:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=32)** And I'm going to install a few dependencies.
>
> **[0:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=35)** So, I'm going to install npm i, casual, lodash,
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=43)** sequelize, and sqlite3, and these dependencies are going to allow me to use SQLite3.
>
> **[0:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=53)** So, you don't have to do this.
>
> **[0:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=54)** I have to do this 'cause I have an issue with my system right now, so I'm just going to force these and it's going to work for me.
>
> **[1:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=60)** But you don't have to do the --force.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=62)** It's just something that's running in my cache.
>
> **[1:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=64)** All right, so let's go ahead and do an npm start, and then I'm going to close the connection.
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=70)** And then I'm going to go in my dbConnectors, close Explorer just to have a little bit more screen estate, and I'm going to go ahead and start importing a few things.
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=81)** So, I'm going to first import Sequelize and DataType like so, DataTypes plural, make sure it's plural.
>
> **[1:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=93)** Then I'm going to import _ from 'lodash' like so,
>
> **[1:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=102)** and then import casual from 'casual' like so.
>
> **[1:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=110)** And we're going to use casual to generate some data, that's why we're using casual here.
>
> **[1:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=115)** Okay, so next what we need to do is create a connection to Sequelize, so what we're going to do is go just below here and first create a Sequelize connection like so, Sequelize, and we're going to have ('sqlite::memory:').
>
> **[2:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=142)** And once you run this, FYI, you may have some warning about deprecation with this particular expression here.
>
> **[2:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=152)** So, I want to show you that the Sequelize team have been warned about this and they're working on a fix.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=159)** So, this is the actual issue that's related to this, so this is the area you may see, DeprecationWarning, blah, blah, blah, is invalid.
>
> **[2:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=165)** Future versions of Node will throw an error.
>
> **[2:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=168)** So, they're working on this and they haven't found, as of the recording of this video, an issue yet, but it's on its way.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=177)** So, just keep track of this particular issue here.
>
> **[3:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=180)** It's 16923, and you should be able to follow what's happening with this.
>
> **[3:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=185)** But I believe that once they fix this, and it may be fixed by the time you actually do this course, once they have it fixed you won't see this warning anymore.
>
> **[3:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=193)** It's just something within Sequelize.
>
> **[3:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=195)** Anyways, I wanted to mention it to you guys.
>
> **[3:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=198)** Not to worry, it still works regardless.
>
> **[3:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=200)** Okay, so now what we're going to do is continue working on the functions that will connect to Sequelize.
>
> **[3:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=207)** So, what I'm going to do next is basically create a categories model for our products.
>
> **[3:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=214)** So, what is the category, what is the description of that category?
>
> **[3:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=217)** So, basically this is what I would use the second database for, just for the sake of an example.
>
> **[3:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=223)** So, I'm going to create a variable called Categories, and then I will use sequelize and define these categories inside of a categories in memory database.
>
> **[3:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=237)** And then inside of this categories I need to define what types are going to be passed.
>
> **[4:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=243)** So, for example, the first key is going to be Categories, and we use DataTypes to define what the type is.
>
> **[4:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=250)** And in this case it's going to be a STRING.
>
> **[4:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=253)** Again, I'm going really fast through how is the syntax for Sequelize.
>
> **[4:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=258)** You can take a look at the documentation if you want to have more information.
>
> **[4:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=262)** So, but basically what we're doing right now, we're defining the types using Sequelize on syntax, so that's how they define the types with Sequelize.
>
> **[4:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=272)** That's why the STRING is in all caps and so on so forth.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=275)** Okay, so we're going to continue the description of that category, again, uses DataTypes, and again will be a STRING like so.
>
> **[4:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=288)** Perfect, so now that we've defined our schema for this particular Categories database now we can make an actual connection to Sequelize.
>
> **[4:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=299)** And we're going to use basically an await approach to this.
>
> **[5:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=303)** So, what I'm going to call this is syncAndSeedCategories(),
>
> **[5:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=314)** and we're going to try by awaiting for a sequelize.sync connection.
>
> **[5:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=328)** And we want to force it by saying { force: true }.
>
> **[5:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=335)** And then we can say okay, if it's successful then we can mark 'SQLite connection established
>
> **[5:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=351)** and Categories model synced' just to make sure we have some warning as to what is happening, okay?
>
> **[6:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=364)** And then make sure that you're still in the try.
>
> **[6:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=368)** We're going to seed the categories, so this is what we're doing here, we're going to seed.
>
> **[6:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=372)** And seeding is basically a term for Sequelize, so meaning that we're creating elements inside the database.
>
> **[6:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=379)** So, what we're going to do here is just create the categories with casual.
>
> **[6:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=384)** So, we're going to create a bunch of categories just to fill the database a little bit with data, with fake data actually.
>
> **[6:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=390)** So, what we we're going to do is use a Promise.all, and using Lodash we're going to create a bunch of times, some fake data.
>
> **[6:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=404)** And this is what we're going to do.
>
> **[6:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=405)** And again, we're going to leverage casual to create this fake data.
>
> **[6:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=412)** This is why we install casual, so we're going to basically use Categories to create a few items in the database.
>
> **[7:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=420)** And you're going to see all of this happen in real time on the console, so you're going to see Categories created, blah, blah, blah, as it connects to SQLite.
>
> **[7:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=430)** So, first, we're going to create five times with casual.word.
>
> **[7:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=437)** So, casual allows us to use any specific words, randomized words, and create these categories.
>
> **[7:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=443)** It's probably not going to look like store categories, but we're using this just for fake data purposes.
>
> **[7:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=449)** So, this is a good exercise if one day you need to create fake data for your database, casual is always a good library to do that, okay?
>
> **[7:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=462)** And once this is done let's do a console.log so it tells us that we have seeded the categories inside our SQLite database, 'Categories seeded'.
>
> **[7:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=478)** All right, so this is where we catch if there's an error.
>
> **[8:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=483)** So, catch, let's pass in error console.log 'Error with SQLite DB:',
>
> **[8:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=499)** and let's pass what is the error so we know what's happening.
>
> **[8:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=507)** Okay, and now let's run that function that we just created, syncAndSeedCategories.
>
> **[8:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=517)** And let's make sure that we export the Categories if we would need it for our resolvers.
>
> **[8:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=523)** We're not going to use it in this course, but it's the same concept.
>
> **[8:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=527)** So, you're exporting categories, which you could use in your resolvers.
>
> **[8:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=536)** Oh wait, this is wrong.
>
> **[8:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=538)** This is async.
>
> **[8:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=539)** I just saw that there was an error here.
>
> **[9:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=541)** So, FYI, if you wrote await here it's await there.
>
> **[9:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=544)** It's just I went too fast here.
>
> **[9:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=546)** So, async, await, await, like I saw there was an error and I couldn't figure it out what was it, but it's here.
>
> **[9:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=553)** So, async, await, await, and now you're all good.
>
> **[9:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=557)** All right, so now we can save this.
>
> **[9:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=559)** In theory we can go back here.
>
> **[9:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=562)** And as you can see, with our SQLite database we have run tables inside of SQLite.
>
> **[9:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=570)** It created the tables and inserted values, and it says Categories seeded.
>
> **[9:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=575)** That means that our connection to SQLite is successful.
>
> **[9:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=580)** So, if you need to get further on this example look at the SQLite documentation to get data and add the proper functions to your resolvers.
>
> **[9:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=588)** So, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), await (7), this. (4), this, (3), async (3)
> **CLI Commands:** make (5), npm (2), sqlite3 (2), node (1)
> **Env Vars:** string (3), fyi (2), sql (1)
> **Code Identifiers:** syncandseedcategories (2), dbconnectors (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** warning (3)
> **Prerequisites:** install (3)
> **Analogies:** similar to (1), for example (1)


### 4. Mutations

> [↑ Back to Table of Contents](#table-of-contents)

#### Add new items with mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=0)** - [Instructor] Now that we have all our DBs properly connected, let's add some mutations for a GraphQL server.
>
> **[0:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=6)** So we're going to start with one mutation, which is basically the one we already created, which is create product.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=13)** And we'll focus on creating that one first, and then we'll add more as we go through the rest of this course.
>
> **[0:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=19)** So let's close the explorer and I'm going to start refactoring this one here.
>
> **[0:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=25)** And we're also going to make this an async function just to make sure that we have everything before we actually resolve this function.
>
> **[0:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=34)** So the first thing I'm going to do is create a newWidget like so, and it's going to be a newWidget, and we're going to pass inside of that newWidget, all the stuff that we've used in the past.
>
> **[0:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=53)** So name.
>
> **[0:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=55)** So what I'm going to do is pass a name, input.name, and we're simply going to copy and paste
>
> **[1:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=76)** all of this a few times, five, six.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=84)** And we're going to change all of this for different things.
>
> **[1:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=87)** So I'm going to click, option, click here and change this to description.
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=96)** Then I'm going to change this one here to price, soldout, inventory.
>
> **[1:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=111)** And then here, stores.
>
> **[1:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=116)** Once I have this new widget, I'm also going to add an ID to this widget, .id = newWidget._id
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=131)** like so, and then we're going to resolve the function.
>
> **[2:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=136)** We're going to use that function to connect to a database.
>
> **[2:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=140)** So we're going to try and await the newWidget to save to the database like so.
>
> **[2:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=151)** And then return the widget so we can actually see it in the GraphQL, like so, if this doesn't work, catch the error, throw the error, or throw new Error, actually, with passing the error like so.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=177)** Okay, so that's basically what we need.
>
> **[2:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=179)** What I'm going to save now this, make sure that everything is good.
>
> **[3:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=184)** It's seated.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=186)** The SQLite stuff.
>
> **[3:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=187)** Let's go into our screen, GraphQL here, and let's create a new product.
>
> **[3:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=193)** So what I'm going to do is use some of my history, so you can do that too to save some time.
>
> **[3:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=199)** I'm going to click on history and I'm going to go to mutation, create product, close the history.
>
> **[3:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=206)** Basically all of this is the same as what we've done in the past, so this should work.
>
> **[3:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=211)** I'm going to change a few things just to make sure.
>
> **[3:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=214)** Again, the syntax is mutation, and again, if you're not sure, you can look into the docs here.
>
> **[3:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=219)** Mutation createProduct takes an input of ProductInput.
>
> **[3:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=224)** And what this input is expecting are these things.
>
> **[3:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=229)** You absolutely need to put an array of stores here.
>
> **[3:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=234)** And if you don't, it's going to show in there, right here.
>
> **[3:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=238)** So let's go ahead and I'm going to change this to an actual name of a product.
>
> **[4:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=242)** So I'm going to put a shovel here instead of a widget, just a Shovel 2.
>
> **[4:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=248)** I'm continue with the shovel just to see the difference between the stuff that we've done in the past and the stuff that we're doing now.
>
> **[4:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=257)** So this shovel is going to be $14.99.
>
> **[4:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=260)** It's not sold out, so on sale.
>
> **[4:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=263)** The inventory, we're going to put 30 and I'm going to keep the same stores.
>
> **[4:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=268)** So what I'm going to do now is get everything back.
>
> **[4:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=272)** And I want to know the inventory too.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=275)** So price, name, description, inventory sold out.
>
> **[4:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=278)** I want to get this once I create a new product, if everything is connected properly and we run this, it's going to show you the new product here.
>
> **[4:46](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=286)** And you can even go inside the database on Robo 3T to see if it has worked.
>
> **[4:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=292)** So I'm going to close this, reopen this, and I have an object here that was created recently.
>
> **[4:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=298)** And as you can see, I have my shovel gear that was created directly on the MongoDB database.
>
> **[5:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=306)** And all the elements that are supposed to be here are here.
>
> **[5:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=309)** So basically your connection to the MongoDB to create a new product is working.
>
> **[5:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=316)** So as you can see, it's fairly easy to add a mutation to our server.
>
> **[5:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=320)** Let's continue working on our server in the following videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), this, (4), pass (2), throw (2)
> **Code Identifiers:** newwidget (5), createproduct (1)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (1), go to (1)
> **Versions:** 14.99 (1)
> **Documentation:** the docs (1)
> **Speakers:** - [instructor] (1)

#### Update items with mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=0)** - [Instructor] In a scenario where you need to update items in the database with GraphQL, we also need to set up the proper mutations to do so.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=8)** So let's do this.
>
> **[0:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=10)** So let's go ahead and update our resolvers here to have an updateProduct.
>
> **[0:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=14)** So I'm going to put it right after the createProduct here.
>
> **[0:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=18)** I'm going to put a comma at the end here, and then I will updateProduct.
>
> **[0:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=24)** So I'm going to add a resolver that's called updateProduct.
>
> **[0:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=27)** And this is also going to be an async function, which needs an input.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=36)** And what we're going to do is try to update the product by, first of all, we're going to create this variable that will hold widgets and basically try to update findOneAndUpdate.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=62)** So basically what is going to happen here, and this needs a few things.
>
> **[1:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=67)** First of all, it needs an ID.
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=70)** So we need to, from the input, pass the ID of that object and make sure that we can find one in our database and then update it with the input.
>
> **[1:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=83)** And we're also going to pass a parameter here if it's not in the system.
>
> **[1:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=89)** So let's say, for example, we're trying to update something that isn't existing in the database.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=95)** If it's new, then with the true here, it's going to create a new one for us.
>
> **[1:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=104)** So what we're going to do after that?
>
> **[1:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=105)** Like we've done before, we're going to return the updateWidget like so.
>
> **[1:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=112)** And then we're going to do basically the same thing here.
>
> **[1:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=114)** catch error, throw new Error, blah, blah, blah.
>
> **[1:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=116)** So I'm going to literally copy and paste that code here like so.
>
> **[2:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=121)** And that will complete our updateProduct here.
>
> **[2:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=124)** Now this time, because we don't have the updateProduct resolver inside of our schema, we need to update our schema.
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=131)** So let's go into our schema inside of the data folder.
>
> **[2:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=136)** And here you see we had the createProduct before.
>
> **[2:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=139)** That's why we didn't update our schema here.
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=143)** But now we need to do the same for our updateProduct.
>
> **[2:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=146)** So we're going to do that, updateProduct and make sure you don't make any typos like I've done for the create here in the past.
>
> **[2:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=153)** Because otherwise, GraphQL is going to think something's wrong.
>
> **[2:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=158)** And what we expect is the ProductInput type.
>
> **[2:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=163)** So we expect the ProductInput to be with these things here, like so.
>
> **[2:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=170)** And then we're going to return a product after the resolver as done updating the database.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=177)** Okay, so let's save this.
>
> **[2:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=179)** Let's make sure there's no errors here.
>
> **[3:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=181)** Everything is good.
>
> **[3:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=182)** Let's go into GraphQL right here and let's use our update.
>
> **[3:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=188)** So what I'm going to do first is go and mutation.
>
> **[3:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=195)** And I'm going to, in this case, well actually, first of all, let's find a product.
>
> **[3:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=201)** So let's go into our history.
>
> **[3:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=204)** We'll need to create a new product first.
>
> **[3:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=205)** So what I'm going to do is call the createProduct first, and I'm going to make sure that I have an ID for this guy here, so id.
>
> **[3:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=215)** And let's do Shovel 4.
>
> **[3:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=219)** And let's change the price here, 24.99.
>
> **[3:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=223)** Create a new product, I have the ID here.
>
> **[3:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=225)** Going to copy that ID and now we can actually update the product because I have the ID.
>
> **[3:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=231)** Okay, so mutation.
>
> **[3:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=232)** And I'm going to update, well, let's refresh GraphQL so I have access to update.
>
> **[4:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=241)** There you go.
>
> **[4:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=242)** And it needs input.
>
> **[4:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=246)** And this is the input that I need.
>
> **[4:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=249)** So what I'm going to need first for sure is an ID, right?
>
> **[4:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=253)** So we need an ID.
>
> **[4:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=255)** I'm going to pass the ID I just copied, and I also can change anything from that product.
>
> **[4:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=262)** So let's do, for example, price.
>
> **[4:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=266)** I'm going to change the price to 50.99.
>
> **[4:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=272)** And then what I'm going to do is make sure they have stores, 'cause stores always needs to be in there.
>
> **[4:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=277)** So what I'm going to do here is add store.
>
> **[4:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=281)** So store, it's like this.
>
> **[4:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=285)** Then I'm going to do Orlando, and store, I'm going to do Los Angeles.
>
> **[5:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=303)** Okay, so now I have stores, I'm updating the price with the ID.
>
> **[5:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=307)** And what I'm going to do is go with the name, the price, then I'm going to close the history and then run this here.
>
> **[5:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=315)** And as you can see now I've updated the product with the price of 50.99, and the name is still Shovel 4.
>
> **[5:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=323)** So there you have it.
>
> **[5:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=324)** Now you'll be able to update any items with GraphQL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (3), pass (3), async (1), function (1)
> **Code Identifiers:** updateproduct (7), createproduct (3), findoneandupdate (1), updatewidget (1)
> **CLI Commands:** make (6), find (2)
> **Versions:** 50.99 (2), 24.99 (1)
> **Analogies:** for example (2), it's like (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Delete items with mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=0)** - [Instructor] The final mutation we need for a GraphQL server is to be able to delete data.
>
> **[0:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=5)** So let's add this mutation.
>
> **[0:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=8)** So the first thing we're going to do, like we've done before, is to add the resolver here.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=12)** So what I'm going to do is add a comma here and then call this new resolver deleteProduct.
>
> **[0:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=20)** Keep the same approach as we've done before.
>
> **[0:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=22)** Again, it's going to be an async function, and what we absolutely need in this case is an ID.
>
> **[0:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=32)** So we can delete a specific ID within the database.
>
> **[0:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=35)** So what I'm going to do is go ahead and try to delete this specific ID inside of my widgets database.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=47)** So we're going to remove and remove takes an ID.
>
> **[0:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=51)** So what we're going to do is on the score ID and pass the ID like so.
>
> **[0:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=59)** As simple as this, and then return.
>
> **[1:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=63)** And now we can't really return something because we are removing an item within our database.
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=70)** So what we're going to do instead is return a message this time.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=73)** Successfully deleted widget,
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=81)** and then the same thing as before, catch the error, throw the new error, and so on and so forth.
>
> **[1:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=91)** We also need to update our schema right here.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=95)** And what we're going to do is basically do the same thing as we've done before.
>
> **[1:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=100)** So we're going to do a delete product and the input is an ID and we need to absolutely need to have that ID and we're going to return the string.
>
> **[1:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=115)** So this is what's different.
>
> **[1:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=116)** So in this case, if we don't have an ID, this function is going to return an error.
>
> **[2:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=122)** So that's why we put the exclamation point here is mandatory to have an ID in order for this particular mutation to work.
>
> **[2:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=129)** And then the return is the string, basically the message that we've set up inside of our resolver here.
>
> **[2:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=136)** So this is what's expecting as a return from the actual resolver slash database, successfully deleted widget.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=145)** Wait a minute, I just realized one thing that this is not removed.
>
> **[2:29](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=149)** This is deleteOne and not remove, save.
>
> **[2:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=155)** Let's check our server. Everything is good.
>
> **[2:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=158)** Okay, so now we're back into GraphiQL.
>
> **[2:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=161)** And I already have a product that I updated here.
>
> **[2:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=164)** So what I'm going to do here is basically take that, copy that, and then what I'm going to do is remove all this, start with a mutation and delete product, which takes an ID, and then copy.
>
> **[3:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=185)** So once you run this command here, you should literally see the message that we've actually added, successfully deleted widget.
>
> **[3:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=194)** And if you try to find that widget inside of your database here.
>
> **[3:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=197)** So let's go see EE2. We go into the database.
>
> **[3:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=201)** I'm going to close that, reopen it.
>
> **[3:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=203)** And EE2 is nowhere to be found. It actually was deleted.
>
> **[3:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=208)** So as you can see, this is fairly easy to add a mutation for deleted objects inside of GraphQL.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (3), function (2), this, (2), async (1)
> **Code Identifiers:** deleteproduct (1), deleteone (1)
> **Env Vars:** ee2 (2)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Queries in Depth

> [↑ Back to Table of Contents](#table-of-contents)

#### Querying all products
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=0)** - [Instructor] Querying all objects in GraphQL is often a need to get a list of items.
>
> **[0:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=4)** So let's work on this query.
>
> **[0:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=7)** Okay, so now we need to add a resolver first in here.
>
> **[0:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=11)** So what I'm going to do, just to follow the train of thoughts here, I'm going to put it right after, get a single product, I'm going to put this resolver right here.
>
> **[0:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=19)** So, get all products is going to be the resolver I'm going to be working on.
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=28)** So let's go ahead and create that resolver, which is a function.
>
> **[0:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=32)** I'm going to put a comma here so I can take out that error.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=36)** And then let's go ahead and use the try catch again.
>
> **[0:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=40)** And I'm going to basically return await, widgets, find.
>
> **[0:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=50)** Basically find all with no parameters so we can find all of our widgets.
>
> **[0:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=57)** That's it.
>
> **[0:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=58)** And then we're going to do the exact same thing we've done before.
>
> **[1:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=60)** Catch error, throw error, boom. Like so.
>
> **[1:08](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=68)** Perfect.
>
> **[1:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=69)** So now we got our resolver.
>
> **[1:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=71)** We need to add it to our schema.
>
> **[1:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=75)** And let's go here.
>
> **[1:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=77)** And we're going to put this in the queries right here.
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=81)** So what we're going to do is go here and then get all products.
>
> **[1:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=88)** It doesn't take anything and it will return an array of product.
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=94)** So that's basically what this query is going to do.
>
> **[1:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=98)** So we can save all this, we can check our server, everything is working fine.
>
> **[1:44](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=104)** And then we can go into GraphIQL here, and I'm going to literally remove this and do query, like so.
>
> **[1:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=114)** And then get, oh, well actually, let's just refresh this so we can have access to this.
>
> **[2:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=123)** Get all products.
>
> **[2:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=126)** And then you want to define what you want to get from each of the products, right?
>
> **[2:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=130)** So let's say, for example, we want to have the name, we want to have the price, and we want to have the inventory.
>
> **[2:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=139)** That's basically what we want.
>
> **[2:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=140)** We can run our query and it's going to return all the products that are in the database and returns the name, the price, and the inventory.
>
> **[2:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=151)** So clearly we have a few that the inventory is null because we created those items before.
>
> **[2:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=156)** But as you can see here, we have the inventory for the shovel that we created.
>
> **[2:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=161)** So we're good to go.
>
> **[2:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=163)** Okay, so this is all you get for query all products inside of our GraphQL database or server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (1), await (1), throw (1), this, (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Querying with aliases
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=0)** - [Instructor] Aliases is a feature that comes right out of the box with GraphQL and doesn't require any coding.
>
> **[0:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=6)** It is basically a way to do multiple queries and name them with anything you want to properly label them.
>
> **[0:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=13)** So let me demonstrate.
>
> **[0:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=14)** So let's go ahead and clear this here.
>
> **[0:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=17)** And what I'm going to do is do a query like so, and what I'm going to do, I am going to call the first query, let's say widgetone, like so.
>
> **[0:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=30)** And then what I'm going to do is use getProduct and I'm going to pass an ID of that product, right?
>
> **[0:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=41)** And what I'm going to do is go inside of Robo 3T so I don't have to stop from typing this particular query.
>
> **[0:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=48)** So I'm going to go into JSON mode, get this object ID here, copy that, and then I'm going to get the other one here.
>
> **[1:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=61)** So let's start with this one.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=62)** Like so, and then you want to have specific things from that specific product.
>
> **[1:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=69)** So I'd like to have, for example, the name.
>
> **[1:13](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=73)** I'd like to have a description and I'd like to have a price.
>
> **[1:17](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=77)** And then what we could do at that point is get a second alias or a second query that I'm going to call widgettwo.
>
> **[1:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=90)** And again, use the exact same syntax or very similar.
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=94)** So getProduct.
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=96)** And I'm going to grab another ID from here.
>
> **[1:40](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=100)** So I'm going to go for the one that has inventory.
>
> **[1:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=103)** I think it's the very last one here.
>
> **[1:45](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=105)** Inventory, yeah. Boom.
>
> **[1:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=108)** Copy that, go back into GraphiQL.
>
> **[1:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=113)** And this is the ID that I'm going to pass for this one.
>
> **[1:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=117)** And then for this one, I want specific things.
>
> **[1:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=119)** I just want the name and I want the inventory 'cause the inventory is not available for this one here, but I have it available here so I can actually call for that.
>
> **[2:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=127)** So what I've done here is specific syntax around the alias.
>
> **[2:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=132)** So I have an alias that's called widgetone, which is getting information from that product.
>
> **[2:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=138)** And I have another alias here, widgettwo, which is getting information from that specific product.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=145)** And you could go on and on and on and on.
>
> **[2:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=147)** And also have another query type.
>
> **[2:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=150)** So get all products and have specific things from that specific query or alias.
>
> **[2:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=156)** And then have on the second alias, another query.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=159)** So let's go ahead and call this.
>
> **[2:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=162)** And as you can see on the first alias, I have the name, the description, and the price.
>
> **[2:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=167)** And then on the second one I have the name and the inventory.
>
> **[2:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=172)** So using aliases could be useful when the front end is calling the backend from specific products and can construct the query with the same name or ID of the product to get the result with the proper label.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=186)** I'm sure you can find a specific use for this feature as you explore using GraphQL with your own projects.
>
> **[3:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=191)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), require (1), type. (1), this. (1)
> **Code Identifiers:** getproduct (2)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Querying with fragments
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=0)** - [Instructor] Like aliases, fragments are a neat feature that comes built in with GraphQL and is very useful when we start requesting the same data across several items.
>
> **[0:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=9)** So let me demonstrate.
>
> **[0:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=11)** So we have our two items here that have different aliases, right?
>
> **[0:15](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=15)** So we have this idea, and we get products, and we have a second alias that gets information from this idea here.
>
> **[0:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=23)** But what if we wanted to have the exact same information across all these different ideas?
>
> **[0:28](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=28)** So what it could do here is build a fragment.
>
> **[0:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=30)** So let me go ahead and do that.
>
> **[0:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=32)** So I'm going to start typing the fragment first.
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=36)** So I'm going to create a fragment that I'm going to call productFragment on Product.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=47)** And then you can define exactly what you want for that specific fragment.
>
> **[0:52](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=52)** So I know that inventory is not available across all my different products in my database.
>
> **[0:56](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=56)** And what I'm going to do is do the name, do the description, and then do the price.
>
> **[1:01](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=61)** So I know at least these pieces of information are available.
>
> **[1:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=65)** So now how do I use a fragment inside of my syntax above here?
>
> **[1:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=70)** All I have to do, first of all, is remove this, right?
>
> **[1:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=74)** And then I do dot, dot, dot, and basically use productFragment like this.
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=81)** And then do the same here.
>
> **[1:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=84)** Dot, dot, dot, productFragment.
>
> **[1:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=87)** And now with this query, I can literally build multiple queries with aliases, but have the same information across all these different aliases.
>
> **[1:37](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=97)** So a lot less typing and get a lot more information from this fragment.
>
> **[1:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=103)** So if I run this, I'm going to have the exact same information across all my different aliases.
>
> **[1:48](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=108)** So I have the name, the description, and the price on all two.
>
> **[1:53](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=113)** So you can also be even more specific.
>
> **[1:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=117)** I could get all products on here.
>
> **[2:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=120)** So let me rebuild the second one.
>
> **[2:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=125)** Like this.
>
> **[2:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=130)** And instead of get a single product, I could get all products.
>
> **[2:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=136)** And now I need to define what I'm going to get.
>
> **[2:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=138)** But I have this really neat piece of fragments that I can use, and I'm going to get all the same information across.
>
> **[2:25](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=145)** So first I'm going to get the single user, and then I'm going to get all products with the name, description, and price.
>
> **[2:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=153)** And there you go.
>
> **[2:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=154)** So now I can use these specific elements in my front end, for example.
>
> **[2:39](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=159)** And let's say, for example, I just wanted to have this single user or this single widget, I could use that information for one element on my front end, and then I could use that information for another element on my front end, as you can see.
>
> **[2:54](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=174)** So as you can see, and very much like aliases, the use case for this is similar.
>
> **[2:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=178)** It could be used for getting multiple items and typing a lot less in your queries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), this. (2)
> **Code Identifiers:** productfragment (3)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=0)** - [Instructor] This was an essential exploration of GraphQL and what it has to offer.
>
> **[0:05](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=5)** With this new knowledge, you should be able to build your own GraphQL server, and get going with queries and mutations.
>
> **[0:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=12)** GraphQL is in constant development, and new features will come up from time to time, in addition to those we've explored in this course.
>
> **[0:20](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=20)** You'll want to keep abreast of these new features by reading the docs and articles by the development team.
>
> **[0:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=26)** Whenever you need help, there is a GraphQL community on Slack, and you can access it with this link, [graphql-slack.com](https://graphql-slack.com).
>
> **[0:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=36)** Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Tools:** slack (2)
> **URLs:** [graphql-slack.com](https://graphql-slack.com) (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- GraphQL

## Path Context

### In [[Stay Ahead in GraphQL]]
← [[Learning Graphql]] | **2 of 3** | [[Migrating from REST to GraphQL]] →

## Appears In

- [[Stay Ahead in GraphQL]]

## Related Courses

_Courses sharing skills:_

- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[Building a GraphQL Project with React.js]] — GraphQL
- [[Spring with GraphQL]] — GraphQL
- [[Migrating from REST to GraphQL]] — GraphQL
- [[Learning Graphql]] — GraphQL

---

[↑ Back to top](#)